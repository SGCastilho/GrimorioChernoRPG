import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const importerRoot = path.resolve(here, "..");
const projectRoot = path.resolve(importerRoot, "../..");
const runtime = { foundryVersion:"13.351", systemId:"dnd5e", systemVersion:"5.3.3" };

const { IMPORTER_VERSION, IMPORTER_BUILD } = await import("../scripts/version.js");
const { PACKS } = await import("../scripts/pack-storage.js");
const { validateRaceBuildBundle, raceBuildValidatorSupport } = await import("../scripts/race-validator.js");
const { raceBuildSupport, plannedRaceBuildDocuments } = await import("../scripts/race-support.js");
const { previewPayload, classifyPayload, preflightSupport } = await import("../scripts/ui/payload-preflight.js");
const { inspectPayloadCompendiums, plannedPayloadDocuments, compendiumPreflightSupport } = await import("../scripts/ui/compendium-preflight.js");
const { ImporterSession } = await import("../scripts/ui/importer-session.js");
const { centralParitySupport } = await import("../scripts/ui/central-support.js");
const { commandRoutingSupport } = await import("../scripts/ui/command-router.js");
const { importExecutionSupport } = await import("../scripts/ui/import-executor.js");
const { evaluateReleaseReadiness, releaseReadinessSupport } = await import("../scripts/ui/release-readiness.js");
const { raceAutomationSupport } = await import("../scripts/race-automation.js");
const { raceActorApplicationSupport } = await import("../scripts/race-actor-application.js");

assert.equal(IMPORTER_VERSION, "0.13.0-beta.1");
assert.equal(IMPORTER_BUILD.phase, "RB-8");
assert.equal(IMPORTER_BUILD.channel, "development");
assert.equal(IMPORTER_BUILD.featureFreeze, false);
assert.equal(IMPORTER_BUILD.targetVersion, "0.13.0");

const moduleJson = JSON.parse(await fs.readFile(path.join(importerRoot, "module.json"), "utf8"));
assert.equal(moduleJson.version, IMPORTER_VERSION);
assert.equal(moduleJson.packs.length, 6);
assert.deepEqual(moduleJson.packs.slice(-2).map(pack => pack.name), ["grimorio-races", "grimorio-racial-features"]);
assert.equal(PACKS.races.collection, "grimorio-importer.grimorio-races");
assert.equal(PACKS.racialFeatures.collection, "grimorio-importer.grimorio-racial-features");

const fixture = async name => JSON.parse(await fs.readFile(path.join(projectRoot, "examples/races", name), "utf8"));
const human = await fixture("human-woodlander-rb7.json");
const emberash = await fixture("hanyou-emberash-rb7.json");

for (const bundle of [human, emberash]) {
  const validation = validateRaceBuildBundle(bundle, runtime);
  assert.equal(validation.ok, true, validation.errors.join("\n"));
  assert.match(validation.warnings.join(" "), /RB-8/);
  assert.equal(classifyPayload(bundle), "race-build");
  const preview = previewPayload(bundle, runtime);
  assert.equal(preview.valid, true);
  assert.equal(preview.type, "race-build");
  assert.equal(preview.executable, true);
  assert.equal(preview.executionBlockReason, "");
  assert.deepEqual(preview.destinations.map(row => row.key), ["races", "racialFeatures"]);
}

assert.equal(validateRaceBuildBundle({ ...human, identity:{...human.identity, selectionHash:"rb1-deadbeefdeadbeef"} }, runtime).ok, false);
const malicious = structuredClone(human);
malicious.selection.specialChoices.system = { hp: 999 };
assert.equal(validateRaceBuildBundle(malicious, runtime).ok, false);
const notReady = structuredClone(human);
notReady.readiness.canExport = false;
notReady.readiness.exportEnabled = false;
notReady.readiness.status = "incomplete";
assert.equal(validateRaceBuildBundle(notReady, runtime).ok, false);

const humanPlans = plannedRaceBuildDocuments(human);
assert.equal(humanPlans.length, 7);
assert.equal(humanPlans.filter(row => row.role === "race").length, 1);
assert.equal(humanPlans.filter(row => row.role === "racial-feature").length, 6);
assert.equal(new Set(humanPlans.map(row => row.grimorioId)).size, humanPlans.length);
assert.equal(plannedPayloadDocuments(human).length, humanPlans.length);
assert.equal(plannedRaceBuildDocuments(emberash).length, 10);

function managed(role, grimorioId, name="Existente") {
  return { id:`id-${grimorioId}`, name, flags:{"grimorio-importer":{documentRole:role, grimorioId}}, uuid:`Compendium.test.${grimorioId}` };
}
const seed = {
  races:[managed("race", human.identity.grimorioId, "Humano — Habitante das Florestas")],
  racialFeatures:[managed("racial-feature", humanPlans.find(row=>row.role==="racial-feature").grimorioId, "Perícia Enraizada")]
};
const inspectionRuntime = {
  getPack(key) { return { collection: PACKS[key].collection }; },
  async listPackItems(key) { return [...(seed[key] ?? [])]; }
};
const inspection = await inspectPayloadCompendiums(human, inspectionRuntime);
assert.equal(inspection.available, true);
assert.equal(inspection.total, 7);
assert.equal(inspection.update, 2);
assert.equal(inspection.create, 5);
assert.deepEqual(inspection.packRows.map(row => row.key), ["races", "racialFeatures"]);
assert.equal(inspection.writeOperations, false);

const session = new ImporterSession();
const json = JSON.stringify(human);
await session.addFiles([{name:"human.json",size:json.length,lastModified:1,async text(){return json;}}], runtime, inspectionRuntime);
const summary = session.summary();
assert.equal(summary.valid, 1);
assert.equal(summary.invalid, 0);
assert.equal(summary.executionBlocked, 0);
assert.equal(summary.executable, 1);
assert.equal(summary.canImport, true);
assert.equal(summary.documents, 7);
assert.equal(session.executableEntries().length, 1);

const validatorSupport = raceBuildValidatorSupport();
const support = raceBuildSupport();
assert.equal(validatorSupport.materialization, true);
assert.equal(support.recognition, true);
assert.equal(support.validation, true);
assert.equal(support.compendiumPreflight, true);
assert.equal(support.materialization, true);
assert.equal(support.actorApplication, false);
assert.equal(support.writeOperations, true);
assert.deepEqual(support.packs, [PACKS.races.collection, PACKS.racialFeatures.collection]);
assert.equal(preflightSupport().raceBuildPreflightOnly, false);
assert.equal(compendiumPreflightSupport().raceBuildPreflightOnly, false);
assert.equal(compendiumPreflightSupport().destinationPacks.length, 6);

const statusInfo = {
  activeFoundry:"13.351", activeSystem:"dnd5e", activeSystemVersion:"5.3.3", environmentMatches:true,
  packs:Object.keys(PACKS).map(role => ({role,available:true})),
  featAudit:{readyForStable:true,readyForRc:true,verified:42,failed:0},
  legacyWorldPrototype:{total:0,byRole:{}},
  raceBuildSupport:support,
  raceBuildValidatorSupport:validatorSupport,
  raceAutomationSupport:raceAutomationSupport(),
  raceActorApplicationSupport:raceActorApplicationSupport()
};
const readiness = evaluateReleaseReadiness({
  statusInfo,
  centralSupport:centralParitySupport(),
  commandSupport:commandRoutingSupport(),
  preflightSupport:preflightSupport(),
  compendiumSupport:compendiumPreflightSupport(),
  executionSupport:importExecutionSupport()
});
assert.equal(readiness.readyForTesting, true);
assert.equal(readiness.readyForStable, false);
assert.equal(readiness.blockingFailures, 0);
assert.equal(releaseReadinessSupport().developmentGateAvailable, true);
assert.equal(centralParitySupport().developmentBuild, true);
assert.equal(centralParitySupport().featureFreeze, false);

await fs.access(path.join(importerRoot, "scripts/race-materializer.js"));
const mainSource = await fs.readFile(path.join(importerRoot, "scripts/main.js"), "utf8");
assert.match(mainSource, /materializeRaceBuild/);

console.log("GRIMORIO_IMPORTER_RB7_RACE_PREFLIGHT_OK", JSON.stringify({
  importer:IMPORTER_VERSION,
  phase:IMPORTER_BUILD.phase,
  packs:Object.keys(PACKS).length,
  fixtures:2,
  humanDocuments:humanPlans.length,
  humanCreate:inspection.create,
  humanUpdate:inspection.update,
  executionBlocked:summary.executionBlocked,
  writeOperations:true,
  materialization:true,
  actorApplication:false
}, null, 2));
