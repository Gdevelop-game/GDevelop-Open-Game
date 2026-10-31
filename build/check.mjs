// Verifies that every resource declared in the project exists on disk.
//
//   npm run check
import { readFile, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export async function checkResources(projectPath) {
  const project = JSON.parse(await readFile(projectPath, "utf8"));
  const root = dirname(projectPath);
  const missing = [];
  for (const { file } of project.resources.resources) {
    if (!file || /^https?:/.test(file)) continue;
    try {
      await access(join(root, file));
    } catch {
      missing.push(file);
    }
  }
  return missing;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const missing = await checkResources(resolve("../src/game.json"));
  if (missing.length) {
    console.error(`❌ ${missing.length} resource file(s) are missing:`);
    for (const file of missing) console.error("   " + file);
    process.exit(1);
  }
  console.info("✅ All resource files are present.");
}
