// Export the GDevelop game to JS

const fs = require("fs");

const buildType = process.argv.slice(2)[0];
const electron = buildType === "electron";

require("gdexporter").exporter("../src/game.json", "gdExport", buildType)
.then(() => {
  // Add custom loading screen
  path = "./gdExport"
  if(electron) path += "/app";
  const loadingScreen = fs.readFileSync("./customLoadingScreen/loadingscreen-pixi-renderer.js");
  fs.writeFileSync(path + "/pixi-renderers/loadingscreen-pixi-renderer.js", loadingScreen);
})
.then(() => {
  console.log("Done!");
});