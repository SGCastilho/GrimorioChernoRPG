import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { IMPORTER_BUILD, IMPORTER_VERSION } from "../scripts/version.js";
import { centralParitySupport } from "../scripts/ui/central-support.js";
import { commandRoutingSupport } from "../scripts/ui/command-router.js";
import { preflightSupport } from "../scripts/ui/payload-preflight.js";
import { compendiumPreflightSupport } from "../scripts/ui/compendium-preflight.js";
import { importExecutionSupport } from "../scripts/ui/import-executor.js";
import { evaluateReleaseReadiness, releaseReadinessSupport } from "../scripts/ui/release-readiness.js";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const projectRoot = resolve(root, "../..");
const readJson = async p => JSON.parse(await readFile(p, "utf8"));
const sha256 = async p => createHash("sha256").update(await readFile(p)).digest("hex");

assert.equal(IMPORTER_VERSION, "0.13.0-rc.1");
assert.deepEqual(IMPORTER_BUILD, {
  phase: "0.13.0 RC.1",
  label: "0.13.0-rc.1 · Race Build Release Candidate",
  channel: "release-candidate",
  candidate: "RC.1",
  targetVersion: "0.13.0",
  featureFreeze: true
});

const moduleJson = await readJson(resolve(root, "module.json"));
const packageJson = await readJson(resolve(root, "package.json"));
assert.equal(moduleJson.version, "0.13.0-rc.1");
assert.equal(packageJson.version, "0.13.0-rc.1");
assert.equal(moduleJson.compatibility.minimum, "13");
assert.equal(moduleJson.compatibility.verified, "13.351");
assert.equal(moduleJson.relationships.systems[0].id, "dnd5e");
assert.equal(moduleJson.relationships.systems[0].compatibility.verified, "5.3.3");
assert.equal(moduleJson.packs.length, 6);

const central = centralParitySupport();
assert.equal(central.releaseCandidate, true);
assert.equal(central.developmentBuild, false);
assert.equal(central.stableBuild, false);
assert.equal(central.featureFreeze, true);
assert.equal(central.finalReadinessGate, true);
assert.equal(central.stableIntegrityGate, false);

const releaseSupport = releaseReadinessSupport();
assert.equal(releaseSupport.purpose, "release-candidate");
assert.equal(releaseSupport.rcGateAvailable, true);
assert.equal(releaseSupport.finalGateAvailable, true);
assert.equal(releaseSupport.stableIntegrityGateAvailable, false);
assert.equal(releaseSupport.inAppHomologationRequired, true);
assert.equal(releaseSupport.featureFreeze, true);

const packRows = moduleJson.packs.map(pack => ({ available:true, collection:`grimorio-importer.${pack.name}` }));
const baseStatus = {
  environmentMatches:true,
  activeFoundry:"13.351",
  activeSystem:"dnd5e",
  activeSystemVersion:"5.3.3",
  packs:packRows,
  raceBuildSupport:{ recognition:true, validation:true, materialization:true, compendiumPreflight:true },
  raceBuildValidatorSupport:{ hashValidation:["selectionHash","contentHash","grimorioId"] },
  raceAutomationSupport:{ phase:"RB-7", activeEffects:["damage-resistance"], traitAdvancements:["languages"], globalHooks:false, actorApplication:false },
  raceActorApplicationSupport:{ phase:"RB-8", actorApplication:true, usesAdvancementManager:true, replacementConfirmation:"required", multipleRacePolicy:"block", worldItemsExpected:0 },
  raceRuntimeHomologation:{ homologated:false, checklistVersion:1, completed:0, required:12 },
  raceActorHomologated:false,
  featAudit:{ readyForRc:true, verified:42, failed:0 },
  legacyWorldPrototype:{ total:0 }
};
const supportArgs = {
  centralSupport:central,
  commandSupport:commandRoutingSupport(),
  preflightSupport:preflightSupport(),
  compendiumSupport:compendiumPreflightSupport(),
  executionSupport:importExecutionSupport()
};
let readiness = evaluateReleaseReadiness({statusInfo:baseStatus, ...supportArgs});
assert.equal(readiness.readyForRc, true);
assert.equal(readiness.readyForStable, false);
assert.equal(readiness.readyForFinal, false);
assert.equal(readiness.stableBlockedByHomologation, true);
assert.equal(readiness.blockingFailures, 0);
assert.equal(readiness.stableFailures, 1);

readiness = evaluateReleaseReadiness({statusInfo:{...baseStatus, raceRuntimeHomologation:{homologated:true,checklistVersion:1,completed:12,required:12}, raceActorHomologated:true}, ...supportArgs});
assert.equal(readiness.readyForRc, true);
assert.equal(readiness.readyForStable, true);
assert.equal(readiness.readyForFinal, true);
assert.equal(readiness.stableBlockedByHomologation, false);
assert.equal(readiness.stableFailures, 0);

const frozen = {
  "scripts/race-validator.js":"2ce04f7217a23783bc2ea76ba84a3184b31d22a9f500a38c1c20e5a8d2be0eb2",
  "scripts/race-support.js":"651d30735751783c0312c16ac514ef5ec4e779d220cf472cb1b9b51c9b3b6d32",
  "scripts/race-materializer.js":"79d11497e34926740bfb9561bdd981db5bbda5d3dddfe38c393ee76e60a404df",
  "scripts/race-automation.js":"a1a002559b5033c1b37e5e5451e46762f9fb3ca6fde2f1965638d0459bac6ae2",
  "scripts/race-actor-application.js":"6b8a7ce1677d9406d3f49edca70766f77dec5db85dcd9f43f2c422c582002819",
  "scripts/pack-storage.js":"e58df16b31694ccf8b7d1dd4eac2ef2c015927a51a6fb3170bb71121d9a3eea2",
  "scripts/feat-automation.js":"d45cf47d57dc30909ae1d6c5d6ff177367a3e40a9a891c0768a5cd7038805978",
  "scripts/feat-choice-runtime.js":"210238db7123f83b5c00d7ae1c14401aa0793c63e0c6256bd1bd654f87692512",
  "scripts/feat-runtime.js":"8fd27914210d918395a3a5fc13ec7eafbb2212d189cedb9b0a528b1d599da90a",
  "scripts/feat-materializer.js":"a3f0fcf1bbd0ad90af20c57c7d40a1e57888e2ffb9226ab1291eacbe73da2f4a",
  "scripts/materializer.js":"954ff9583faee8359c6cda0b198fa7d296484776e453423c672af85a07cc8ebd"
};
for (const [rel, expected] of Object.entries(frozen)) assert.equal(await sha256(resolve(root, rel)), expected, `hash freeze ${rel}`);

for (const rel of [
  "RELEASE_NOTES_0.13.0-RC1.md",
  "RC_RELEASE_CHECKLIST_0.13.0.md",
  "STABLE_PROMOTION_CHECKLIST_0.13.0.md",
  "docs/RACE_BUILD_RB8.md"
]) assert.equal(existsSync(resolve(root, rel)), true, `${rel} ausente`);

const projectManifest = await readJson(resolve(projectRoot, "manifest.json"));
assert.equal(/^5\.(?:6[89]|[7-9]\d)\./.test(projectManifest.version), true, `project version ${projectManifest.version} must be 5.68.0+ within the 5.x line`);
assert.equal(projectManifest.raceBuildReleaseChannel, "release-candidate");
assert.equal(projectManifest.raceBuildReleaseCandidate, "RC.1");
assert.equal(projectManifest.raceBuildFeatureFreeze, true);
assert.equal(projectManifest.raceBuildStableEligible, false);
assert.equal(projectManifest.raceBuildActorRuntimeHomologated, false);

console.log("GRIMORIO_IMPORTER_013_RC1_RELEASE_GATE_OK", JSON.stringify({
  importer:IMPORTER_VERSION,
  phase:IMPORTER_BUILD.phase,
  packs:moduleJson.packs.length,
  frozenFiles:Object.keys(frozen).length,
  readyForRc:true,
  readyForStableWithoutHomologation:false,
  stableRequiresManualChecklist:true
}, null, 2));
