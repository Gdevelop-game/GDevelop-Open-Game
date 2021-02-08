// Export the GDevelop game to HTML5
const ora = require("ora");
const spinner = ora("Loading libraries").start();

const fs = require("fs-extra");
const { JSDOM } = require("jsdom");
const exporter = require("gdexporter");

const buildType = process.argv.slice(2)[0];
const electronBuild = buildType === "electron";
const exportPath = electronBuild ? "./gdExport/app" : "./gdExport";

spinner.succeed();
spinner.text = "Exporting the game with GDExporter";

let dom;
exporter("../src/game.json", "gdExport", {
  buildType,
})
  .then(() => {
    spinner.succeed();
    spinner.text = "Loading JSDom";
    // Create Dom For modifying easily the index file from the just exported html
    dom = new JSDOM(fs.readFileSync(exportPath + "/index.html"));
  })
  .then(() => {
    spinner.succeed();
    spinner.text = "Adding custom loading screen";
    fs.copySync(
      "./customLoadingScreen/loadingscreen-pixi-renderer.js",
      exportPath + "/pixi-renderers/loadingscreen-pixi-renderer.js"
    );
  })
  .then(() => {
    spinner.succeed();
    spinner.text = "Adding Service Worker for caching";
    fs.copySync("./pwa/sw.js", exportPath + "/sw.js");
    let script = dom.window.document.createElement("script");
    script.innerHTML = `if ('serviceWorker' in navigator) {
	  window.addEventListener('load', () => {
	    // Find current path
	    currentPath = location.href.split("#");
		if (currentPath.length > 1)
		  currentPath = currentPath[0];
		currentPath = location.href.split("?");
		if (currentPath.length > 1)
		  currentPath = currentPath[0];
		navigator.serviceWorker.register(currentPath + 'sw.js');
	  });
	}`;
    dom.window.document.body.insertBefore(
      script,
      dom.window.document.body.firstChild
    );
  })
  .then(() => {
    spinner.succeed();
    spinner.text = "Adding PWA compliancy";
    fs.copySync(
      "./pwa/manifest.webmanifest",
      exportPath + "/manifest.webmanifest"
    );
    dom.window.document.head.innerHTML += `
	<!-- PWA Complience -->
	<meta name="apple-mobile-web-app-title" content="GDevelop Open Game">
	<link rel="manifest" href="manifest.webmanifest"></link>`;
  })
  .then(() => {
    spinner.succeed();
    spinner.text = "Adding icons";
    fs.copySync("./icons", exportPath + "/icons");
  })
  .then(() => {
    // Patch index at the end to allow other steps to add patches to index.html
    spinner.succeed();
    spinner.text = "Patching game with the changes";
    dom.window.document.head.innerHTML += `
	<!-- Apple Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180.png">
	<link rel="apple-touch-icon" sizes="167x167" href="icons/apple-icon-167.png">
	<link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152.png">
	<link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120.png">`;
    fs.writeFileSync(exportPath + "/index.html", dom.serialize());
  })
  .then(() => {
    spinner.succeed();
    spinner.stopAndPersist({ symbol: "✅", text: "Done!" });
  })
  .catch((error) => {
    spinner.fail();
    spinner.stopAndPersist({ symbol: "❌", text: "Something went wrong!\n" });
    console.error(error);
  });
