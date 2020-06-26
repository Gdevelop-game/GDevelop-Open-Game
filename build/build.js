// Export the GDevelop game to JS
require("gdexporter").exporter("../src/game.json", "gdExport")
.then(() => {
  console.log("Done!");
});