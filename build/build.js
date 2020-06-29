// Export the GDevelop game to JS

const fs = require("fs-extra");
const { JSDOM } = require("jsdom");

const buildType = process.argv.slice(2)[0];
const electron = buildType === "electron";
let exportPath = "./gdExport";
if(electron) exportPath += "/app";

let dom;

require("gdexporter").exporter("../src/game.json", "gdExport", buildType)
.then(() => {
	// Create Dom For modifying easily the index file from the just exported html
	dom = new JSDOM(fs.readFileSync(exportPath + "/index.html"));
})
.then(() => {
  console.log("Add custom loading screen");
  fs.copySync(
    "./customLoadingScreen/loadingscreen-pixi-renderer.js", 
    exportPath + "/pixi-renderers/loadingscreen-pixi-renderer.js"
  );
})
.then(() => {
	console.log("Adding Service Worker for caching");
    fs.copySync(
	  "./pwa/sw-web.js", 
	  exportPath + "/sw-web.js"
    );
	fs.copySync(
	  "./pwa/sw-local.js", 
	  exportPath + "/sw-local.js"
    );
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
		  
		if(window.matchMedia('(display-mode: standalone)').matches) {
			navigator.serviceWorker.register(currentPath + 'sw-local.js');
		} else {
			navigator.serviceWorker.register(currentPath + 'sw-web.js');
		}
	  });
	}`
	dom.window.document.body.insertBefore(script, dom.window.document.body.firstChild);
})
.then(() => {
  console.log("Make game PWA compliant");
  fs.copySync(
    "./pwa/manifest.webmanifest", 
    exportPath + "/manifest.webmanifest"
  );
  dom.window.document.head.innerHTML += `
	<!-- PWA Complience -->
	<meta name="apple-mobile-web-app-title" content="GDevelop Open Game">
	<link rel="manifest" href="manifest.webmanifest"></link>`;
})
.then(()=> {
  console.log("Copy Icons");
  fs.copySync(
    "./icons", 
    exportPath + "/icons"
  );
})
.then(() => {
  // Patch index at the end to allow other steps to add patches to index.html
  console.log("Patch index.html");
  dom.window.document.head.innerHTML += `
	<!-- Apple Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180.png">
	<link rel="apple-touch-icon" sizes="167x167" href="icons/apple-icon-167.png">
	<link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152.png">
	<link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120.png">`;
  fs.writeFileSync(exportPath + "/index.html", dom.serialize());
})
.then(() => {
  console.log("Done!");
});