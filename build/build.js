// Export the GDevelop game to JS

const fs = require("fs-extra");

const buildType = process.argv.slice(2)[0];
const electron = buildType === "electron";
let exportPath = "./gdExport";
if(electron) exportPath += "/app";


require("gdexporter").exporter("../src/game.json", "gdExport", buildType)
.then(() => {
  console.log("Add custom index.html");
  fs.copySync(
    "./customHtml/index.html", 
    exportPath + "/index.html"
  );
})
.then(() => {
  console.log("Add custom loading screen");
  fs.copySync(
    "./customLoadingScreen/loadingscreen-pixi-renderer.js", 
    exportPath + "/pixi-renderers/loadingscreen-pixi-renderer.js"
  );
})
.then(() => {
  console.log("Make game PWA Ready");
  fs.copySync(
    "./pwa/sw.js", 
    exportPath + "/sw.js"
  );
  fs.copySync(
    "./pwa/manifest.webmanifest", 
    exportPath + "/manifest.webmanifest"
  );
})
.then(()=> {
  console.log("Copy Icons");
  fs.copySync(
    "./icons", 
    exportPath + "/icons"
  );
})
.then(() => {
  console.log("Done!");
});