// Export the GDevelop game to JS
const buildType = process.argv.slice(2)[0];
require("gdexporter").exporter("../src/game.json", "gdExport", buildType)
.then(() => {
  console.log("Done!");
});