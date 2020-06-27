// Export the GDevelop game to JS

const fs = require("fs");

const buildType = process.argv.slice(2)[0];
const electron = buildType === "electron";
let exportPath = "./gdExport";
if(electron) exportPath += "/app";

const copy = (origin, out) => {
  const file = fs.readFileSync(origin);
  fs.writeFileSync(out, file);
}

require("gdexporter").exporter("../src/game.json", "gdExport", buildType)
.then(() => {
  console.log("Use custom index.html");
  copy(
    "./customHtml/index.html", 
    exportPath + "/index.html"
  );
})
.then(() => {
  console.log("Add custom loading screen");
  copy(
    "./customLoadingScreen/loadingscreen-pixi-renderer.js", 
    exportPath + "/pixi-renderers/loadingscreen-pixi-renderer.js"
  );
})
.then(() => {
  console.log("Add Cache Service Worker");
  copy(
    "./workboxCache/sw.js", 
    exportPath + "/sw.js"
  );
})
.then(() => {
  console.log("Done!");
});