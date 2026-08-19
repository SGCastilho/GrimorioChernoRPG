import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const importerRoot = path.resolve(here, "..");
const packageJson = JSON.parse(fs.readFileSync(path.join(importerRoot, "package.json"), "utf8"));
const development013 = String(packageJson.version ?? "").startsWith("0.13.");
const historical012 = new Set([
  "validate-feat-audit-012.mjs", "validate-feat-automation-012.mjs", "validate-feat-choices-012.mjs",
  "validate-feat-runtime-012.mjs", "validate-stable-012.mjs",
  "validate-ui-011a.mjs", "validate-ui-011b.mjs", "validate-ui-011c.mjs", "validate-ui-011d.mjs",
  "validate-ui-011e.mjs", "validate-ui-011f.mjs", "validate-ui-011g.mjs"
]);
const files = fs.readdirSync(here)
  .filter(name => /^validate-.*\.mjs$/.test(name))
  .filter(name => !(development013 && historical012.has(name)))
  .sort((a, b) => a.localeCompare(b, "en"));

let failed = 0;
const results = [];
for (const file of files) {
  const started = Date.now();
  const result = spawnSync(process.execPath, [path.join(here, file)], { encoding: "utf8" });
  const ok = result.status === 0;
  if (!ok) failed += 1;
  results.push({ file, ok, durationMs: Date.now() - started });
  process.stdout.write(`\n== ${file} ==\n`);
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
}

console.log("\nGRIMORIO_IMPORTER_REGRESSION_SUMMARY", JSON.stringify({
  tests: results.length,
  passed: results.filter(row => row.ok).length,
  failed,
  results
}, null, 2));

if (failed) process.exit(1);
