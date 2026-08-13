import assert from "node:assert/strict";
import crypto from "node:crypto";
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
const { featAuditSupport } = await import("../scripts/feat-audit.js");

assert.equal(IMPORTER_VERSION, "0.12.0");
assert.deepEqual(IMPORTER_BUILD, {
  phase: "0.12.0 Stable",
  label: "0.12.0 Stable",
  channel: "stable",
  candidate: null,
  targetVersion: "0.12.0",
  featureFreeze: true
});

const moduleJson = JSON.parse(await fs.readFile(path.join(root, "module.json"), "utf8"));
const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
assert.equal(moduleJson.version, "0.12.0");
assert.equal(packageJson.version, "0.12.0");
assert.equal(moduleJson.compatibility.verified, "13.351");
assert.equal(moduleJson.relationships.systems[0].compatibility.verified, "5.3.3");
assert.equal(moduleJson.packs.length, 4);
assert.equal(packageJson.scripts["test:stable"], "node tests/validate-stable-012.mjs");
assert.equal(packageJson.scripts["test:release"], "node tests/validate-stable-012.mjs");

const central = centralParitySupport();
assert.equal(central.stableBuild, true);
assert.equal(central.developmentBuild, false);
assert.equal(central.releaseCandidate, false);
assert.equal(central.featureFreeze, true);
assert.equal(central.finalReadinessGate, true);
assert.equal(central.stableIntegrityGate, true);
assert.equal(central.visualSections.length, 7);

const release = releaseReadinessSupport();
assert.equal(release.purpose, "stable-integrity");
assert.equal(release.finalGateAvailable, true);
assert.equal(release.stableIntegrityGateAvailable, true);
assert.equal(release.developmentGateAvailable, false);
assert.equal(release.featAudit42Required, true);

const auditSupport = featAuditSupport();
assert.equal(auditSupport.expectedFeats, 42);
assert.equal(auditSupport.expectedAdvancements, 26);
assert.equal(auditSupport.expectedActivities, 22);
assert.equal(auditSupport.expectedEffects, 10);
assert.equal(auditSupport.expectedUses, 2);
assert.equal(auditSupport.expectedRuntimeRecords, 56);
assert.equal(auditSupport.expectedAssistedChoices, 3);
assert.equal(auditSupport.stableRelease, true);

const statusInfo = {
  activeFoundry: "13.351",
  activeSystem: "dnd5e",
  activeSystemVersion: "5.3.3",
  environmentMatches: true,
  packs: [
    { role:"classes", available:true },
    { role:"subclasses", available:true },
    { role:"features", available:true },
    { role:"feats", available:true }
  ],
  featAudit: { readyForStable:true, readyForRc:true, verified:42, failed:0 },
  legacyWorldPrototype: { total:0, byRole:{} }
};
const readiness = evaluateReleaseReadiness({
  statusInfo,
  centralSupport: central,
  commandSupport: commandRoutingSupport(),
  preflightSupport: preflightSupport(),
  compendiumSupport: compendiumPreflightSupport(),
  executionSupport: importExecutionSupport()
});
assert.equal(readiness.readyForStable, true);
assert.equal(readiness.readyForFinal, true);
assert.equal(readiness.readyForRc, true);
assert.equal(readiness.total, 11);
assert.equal(readiness.passed, 11);
assert.equal(readiness.checks.find(row => row.id === "stable-channel")?.ok, true);

const expectedHashes = {
  "scripts/feat-automation.js": "d45cf47d57dc30909ae1d6c5d6ff177367a3e40a9a891c0768a5cd7038805978",
  "scripts/feat-choice-runtime.js": "210238db7123f83b5c00d7ae1c14401aa0793c63e0c6256bd1bd654f87692512",
  "scripts/feat-runtime.js": "8fd27914210d918395a3a5fc13ec7eafbb2212d189cedb9b0a528b1d599da90a",
  "scripts/feat-materializer.js": "a3f0fcf1bbd0ad90af20c57c7d40a1e57888e2ffb9226ab1291eacbe73da2f4a",
  "scripts/pack-storage.js": "e95a010d3c32d6ea9b5ce234f04a8c0286d41b727f96d12f7eb82a23a40db64e",
  "scripts/materializer.js": "954ff9583faee8359c6cda0b198fa7d296484776e453423c672af85a07cc8ebd"
};
for (const [relative, expected] of Object.entries(expectedHashes)) {
  const bytes = await fs.readFile(path.join(root, relative));
  const actual = crypto.createHash("sha256").update(bytes).digest("hex");
  assert.equal(actual, expected, `${relative} mudou durante a promoção Stable`);
}

for (const file of ["README.md", "CHANGELOG.md", "RELEASE_NOTES_0.12.0.md", "STABLE_RELEASE_CHECKLIST.md"]) {
  await fs.access(path.join(root, file));
}

const runtimeSources = [
  "scripts/version.js",
  "scripts/main.js",
  "scripts/ui/central-support.js",
  "scripts/ui/release-readiness.js",
  "scripts/ui/importer-app.js",
  "templates/importer-app.hbs"
];
for (const relative of runtimeSources) {
  const text = await fs.readFile(path.join(root, relative), "utf8");
  assert.doesNotMatch(text, /0\.12\.0-alpha\.4/, `${relative} ainda referencia alpha.4 como build ativa`);
}

console.log("GRIMORIO_IMPORTER_012_STABLE_RELEASE_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  channel: IMPORTER_BUILD.channel,
  featureFreeze: IMPORTER_BUILD.featureFreeze,
  gate: `${readiness.passed}/${readiness.total}`,
  feats: auditSupport.expectedFeats,
  mechanicsFrozen: Object.keys(expectedHashes).length,
  foundry: moduleJson.compatibility.verified,
  dnd5e: moduleJson.relationships.systems[0].compatibility.verified
}, null, 2));
