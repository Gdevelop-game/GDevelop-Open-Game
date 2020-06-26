// Export the GDevelop game to JS
require("gdexporter").exporter("../src/game.json", "gdExport", "electron")
.then(() => {
  console.log("Done!");
});