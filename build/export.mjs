// Exports the game without the GDevelop editor (used by CI).
//
//   npm run build                  -> HTML5 export in ./gdExport
//   npm run electron-build         -> Electron export in ./gdExport
//   node export.mjs --out <dir> --target <electron|cordova>
//
// The GDevelop version is pinned by the gdcore-tools version in package.json.
// To upgrade GDevelop, bump that dependency and run `npm run migrate`.
import { parseArgs } from "node:util";
import { resolve } from "node:path";
import { readFile, rm, writeFile } from "node:fs/promises";
import { loadProject, exportProject } from "gdcore-tools";
import { checkResources } from "./check.mjs";

const { values } = parseArgs({
  options: {
    project: { type: "string", default: "../src/game.json" },
    out: { type: "string", default: "./gdExport" },
    target: { type: "string" },
  },
});

const projectPath = resolve(values.project);
const outDir = resolve(values.out);

const missing = await checkResources(projectPath);
if (missing.length) {
  console.error(`❌ ${missing.length} resource file(s) are missing:`);
  for (const file of missing) console.error("   " + file);
  process.exit(1);
}

console.info("⌛ Loading project...");
const project = await loadProject(projectPath);

console.info(`📦 Exporting for ${values.target || "HTML5"} to ${outDir}`);
await rm(outDir, { recursive: true, force: true });
exportProject(project, outDir, values.target);
project.delete();

if (values.target === "electron") {
  // GDevelop's Electron template ships its license with "extraFiles", which on macOS puts it loose in
  // "<app>.app/Contents/" and makes codesign fail. "extraResources" puts it in Contents/Resources instead.
  const packagePath = resolve(outDir, "package.json");
  const pkg = JSON.parse(await readFile(packagePath, "utf8"));
  const { extraFiles = [], ...build } = pkg.build;
  pkg.build = { ...build, extraResources: [...(build.extraResources || []), ...extraFiles] };
  await writeFile(packagePath, JSON.stringify(pkg, null, 2) + "\n");
}

console.info("✅ Done!");
