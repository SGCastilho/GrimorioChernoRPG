import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const files = fs.readdirSync(here)
  .filter(name => /^validate-.*\.mjs$/.test(name))
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
