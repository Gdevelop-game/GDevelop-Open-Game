// Loads the project with the pinned GDevelop version and saves it back,
// upgrading the project files to that version's format.
//
//   npm run migrate
import { resolve } from "node:path";
import { loadProject, saveProject } from "gdcore-tools";

const projectPath = resolve(process.argv[2] || "../src/game.json");

console.info("⌛ Loading project...");
const project = await loadProject(projectPath);

console.info("💾 Saving project...");
await saveProject(project, projectPath);
project.delete();

console.info("✅ Done!");
