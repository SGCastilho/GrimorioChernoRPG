import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const { IMPORTER_VERSION, IMPORTER_BUILD } = await import("../scripts/version.js");
const { centralParitySupport } = await import("../scripts/ui/central-support.js");
const { releaseReadinessSupport, evaluateReleaseReadiness } = await import("../scripts/ui/release-readiness.js");
const { commandRoutingSupport } = await import("../scripts/ui/command-router.js");
const { preflightSupport } = await import("../scripts/ui/payload-preflight.js");
const { compendiumPreflightSupport } = await import("../scripts/ui/compendium-preflight.js");
const { importExecutionSupport } = await import("../scripts/ui/import-executor.js");

assert.equal(IMPORTER_VERSION, "0.11.0-rc.1");
assert.deepEqual(IMPORTER_BUILD, {
  phase: "0.11.0-RC",
  label: "RC.1",
  channel: "release-candidate",
  candidate: 1,
  targetVersion: "0.11.0",
  featureFreeze: true
});

const central = centralParitySupport();
assert.equal(central.phase, IMPORTER_BUILD.phase);
assert.equal(central.basePhase, "0.11-G");
assert.equal(central.releaseCandidate, true);
assert.equal(central.featureFreeze, true);
assert.equal(central.channel, "release-candidate");
assert.equal(central.targetVersion, "0.11.0");
assert.equal(central.visualSections.length, 7);

const release = releaseReadinessSupport();
assert.equal(release.phase, IMPORTER_BUILD.phase);
assert.equal(release.purpose, "release-candidate-validation");
assert.equal(release.finalGateAvailable, true);
assert.equal(release.featureFreeze, true);
assert.equal(release.requiredPacks.length, 4);

const statusInfo = {
  activeFoundry: "13.351",
  activeSystem: "dnd5e",
  activeSystemVersion: "5.3.3",
  environmentMatches: true,
  packs: [
    { role: "classes", available: true },
    { role: "subclasses", available: true },
    { role: "features", available: true },
    { role: "feats", available: true }
  ],
  legacyWorldPrototype: { total: 0, byRole: {} }
};
const ready = evaluateReleaseReadiness({
  statusInfo,
  centralSupport: central,
  commandSupport: commandRoutingSupport(),
  preflightSupport: preflightSupport(),
  compendiumSupport: compendiumPreflightSupport(),
  executionSupport: importExecutionSupport()
});
assert.equal(ready.phase, "0.11.0-RC");
assert.equal(ready.readyForFinal, true);
assert.equal(ready.readyForRc, true, "Alias legado readyForRc deve permanecer compatível");
assert.equal(ready.blockingFailures, 0);
assert.equal(ready.total, 10);
assert.equal(ready.passed, 10);
assert.equal(ready.checks.find(row => row.id === "feature-freeze")?.ok, true);

const noFreeze = evaluateReleaseReadiness({
  statusInfo,
  centralSupport: { ...central, featureFreeze: false },
  commandSupport: commandRoutingSupport(),
  preflightSupport: preflightSupport(),
  compendiumSupport: compendiumPreflightSupport(),
  executionSupport: importExecutionSupport()
});
assert.equal(noFreeze.readyForFinal, false);
assert.equal(noFreeze.checks.find(row => row.id === "feature-freeze")?.state, "fail");

const moduleJson = JSON.parse(await fs.readFile(path.join(root, "module.json"), "utf8"));
const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
assert.equal(moduleJson.version, IMPORTER_VERSION);
assert.equal(packageJson.version, IMPORTER_VERSION);
assert.equal(moduleJson.compatibility.verified, "13.351");
assert.equal(moduleJson.compatibility.maximum, "13");
assert.equal(moduleJson.relationships.systems[0].compatibility.verified, "5.3.3");
assert.equal(moduleJson.relationships.systems[0].compatibility.maximum, "5.3.3");
assert.equal(moduleJson.packs.length, 4);
assert.equal(packageJson.scripts.test, "node tests/run-all.mjs");
assert.equal(packageJson.scripts["test:rc"], "node tests/validate-rc-011.mjs");
assert.equal(packageJson.scripts["test:release"], "node tests/validate-rc-011.mjs");
assert.match(moduleJson.description, /Release Candidate 0\.11\.0-rc\.1/);

const appSource = await fs.readFile(path.join(root, "scripts/ui/importer-app.js"), "utf8");
assert.match(appSource, /IMPORTER_VERSION, IMPORTER_BUILD/);
assert.match(appSource, /buildLabel: IMPORTER_BUILD\.label/);
assert.match(appSource, /buildInfo: IMPORTER_BUILD/);
assert.match(appSource, /Release Candidate congela funcionalidades/);

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
assert.match(template, /Prontidão para 0\.11\.0 final/);
assert.match(template, /Nenhum bloqueio técnico da Release Candidate/);
assert.match(template, /A Central 0\.11\.0 RC é a interface principal/);
assert.doesNotMatch(template, /Shell visual ativo|Em desenvolvimento|Importação será implementada/);

const mainSource = await fs.readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainSource, /importerBuild: IMPORTER_BUILD/);
assert.match(mainSource, /Release Candidate RC\.1 consolidada/);
assert.match(mainSource, /releaseReadiness:/);

const runtimeFiles = [
  "scripts/version.js",
  "scripts/main.js",
  "scripts/ui/importer-app.js",
  "scripts/ui/central-support.js",
  "scripts/ui/release-readiness.js",
  "templates/importer-app.hbs",
  "module.json",
  "package.json"
];
for (const relative of runtimeFiles) {
  const source = await fs.readFile(path.join(root, relative), "utf8");
  assert.doesNotMatch(source, /0\.11\.0-alpha\./, `Referência alpha ativa encontrada em ${relative}`);
}

const readme = await fs.readFile(path.join(root, "README.md"), "utf8");
const changelog = await fs.readFile(path.join(root, "CHANGELOG.md"), "utf8");
const releaseChecklist = await fs.readFile(path.join(root, "RELEASE_CHECKLIST.md"), "utf8");
assert.match(readme, /^# Grimório Importer — v0\.11\.0-rc\.1/m);
assert.match(readme, /Release Candidate RC\.1/);
assert.match(changelog, /## 0\.11\.0-rc\.1/);
assert.match(releaseChecklist, /Prontidão para 0\.11\.0 final/);
assert.match(releaseChecklist, /Promoção para 0\.11\.0/);

console.log("GRIMORIO_IMPORTER_011_RC_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  phase: IMPORTER_BUILD.phase,
  channel: IMPORTER_BUILD.channel,
  featureFreeze: IMPORTER_BUILD.featureFreeze,
  finalGateChecks: ready.total,
  finalGatePassed: ready.passed,
  readyForFinal: ready.readyForFinal,
  packs: moduleJson.packs.length,
  visualSections: central.visualSections.length,
  commands: commandRoutingSupport().routeCount
}, null, 2));
