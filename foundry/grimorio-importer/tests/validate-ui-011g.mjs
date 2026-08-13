import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const { IMPORTER_VERSION } = await import("../scripts/version.js");
const { releaseReadinessSupport, evaluateReleaseReadiness } = await import("../scripts/ui/release-readiness.js");
const { centralParitySupport } = await import("../scripts/ui/central-support.js");
const { commandRoutingSupport } = await import("../scripts/ui/command-router.js");
const { preflightSupport } = await import("../scripts/ui/payload-preflight.js");
const { compendiumPreflightSupport } = await import("../scripts/ui/compendium-preflight.js");
const { importExecutionSupport } = await import("../scripts/ui/import-executor.js");

assert.equal(IMPORTER_VERSION, "0.11.0-rc.1");

const support = releaseReadinessSupport();
assert.equal(support.phase, "0.11.0-RC");
assert.equal(support.basePhase, "0.11-G");
assert.equal(support.rcGateAvailable, true);
assert.equal(support.requiredSections.length, 7);
assert.equal(support.requiredPacks.length, 4);
assert.equal(support.worldItemsExpected, 0);
assert.equal(support.legacyWorldItemsAreWarningOnly, true);

const statusInfo = {
  activeFoundry: "13.351",
  activeSystem: "dnd5e",
  activeSystemVersion: "5.3.3",
  environmentMatches: true,
  packsReady: true,
  packs: [
    { role: "classes", available: true },
    { role: "subclasses", available: true },
    { role: "features", available: true },
    { role: "feats", available: true }
  ],
  legacyWorldPrototype: { total: 0, byRole: {} }
};

const inputs = {
  statusInfo,
  centralSupport: centralParitySupport(),
  commandSupport: commandRoutingSupport(),
  preflightSupport: preflightSupport(),
  compendiumSupport: compendiumPreflightSupport(),
  executionSupport: importExecutionSupport()
};

const ready = evaluateReleaseReadiness(inputs);
assert.equal(ready.phase, "0.11.0-RC");
assert.equal(ready.readyForRc, true);
assert.equal(ready.state, "ready");
assert.equal(ready.blockingFailures, 0);
assert.equal(ready.warnings, 0);
assert.equal(ready.total, 10);
assert.equal(ready.passed, 10);
assert.ok(ready.checks.every(row => row.ok));

const legacyWarning = evaluateReleaseReadiness({
  ...inputs,
  statusInfo: { ...statusInfo, legacyWorldPrototype: { total: 3, byRole: { class: 1, feature: 2 } } }
});
assert.equal(legacyWarning.readyForRc, true);
assert.equal(legacyWarning.state, "warning");
assert.equal(legacyWarning.blockingFailures, 0);
assert.equal(legacyWarning.warnings, 1);
assert.equal(legacyWarning.checks.find(row => row.id === "legacy-world")?.blocking, false);

const wrongRuntime = evaluateReleaseReadiness({
  ...inputs,
  statusInfo: { ...statusInfo, environmentMatches: false, activeFoundry: "13.999" }
});
assert.equal(wrongRuntime.readyForRc, false);
assert.equal(wrongRuntime.state, "blocked");
assert.equal(wrongRuntime.checks.find(row => row.id === "runtime")?.ok, false);

const missingPack = evaluateReleaseReadiness({
  ...inputs,
  statusInfo: { ...statusInfo, packsReady: false, packs: statusInfo.packs.map((row, index) => ({ ...row, available: index !== 3 })) }
});
assert.equal(missingPack.readyForRc, false);
assert.equal(missingPack.checks.find(row => row.id === "packs")?.ok, false);

const noConfirmation = evaluateReleaseReadiness({
  ...inputs,
  executionSupport: { ...importExecutionSupport(), confirmationRequired: false }
});
assert.equal(noConfirmation.readyForRc, false);
assert.equal(noConfirmation.checks.find(row => row.id === "confirmation")?.ok, false);

const mainSource = await fs.readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainSource, /releaseReadinessSupport/);
assert.match(mainSource, /evaluateReleaseReadiness/);
assert.match(mainSource, /Release Candidate RC\.1 consolidada/);
assert.match(mainSource, /releaseReadiness:/);
assert.match(mainSource, /export async function releaseReadiness\(\)/);

const appSource = await fs.readFile(path.join(root, "scripts/ui/importer-app.js"), "utf8");
assert.match(appSource, /buildLabel: IMPORTER_BUILD\.label/);
assert.match(appSource, /readiness: info\?\.releaseReadiness/);
assert.match(appSource, /const navButtons = \[\.\.\.htmlElement\.querySelectorAll/);
assert.match(appSource, /"ArrowDown", "ArrowUp", "Home", "End"/);
assert.match(appSource, /import \{ IMPORTER_VERSION, IMPORTER_BUILD \} from "\.\.\/version\.js"/);

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
assert.match(template, /Prontidão para 0\.11\.0 final/);
assert.match(template, /sectionData\.readiness\.checks/);
assert.match(template, /role="status" aria-live="polite"/);
assert.match(template, /role="status" aria-live="assertive"/);
assert.match(template, /role="alertdialog"/);
assert.match(template, /aria-label="Área para arrastar arquivos JSON"/);
assert.match(template, /releaseReadinessSupport\(\)/);
assert.match(template, /releaseReadiness\(\)/);

const openIf = (template.match(/\{\{#if\b/g) ?? []).length;
const closeIf = (template.match(/\{\{\/if\}\}/g) ?? []).length;
const openUnless = (template.match(/\{\{#unless\b/g) ?? []).length;
const closeUnless = (template.match(/\{\{\/unless\}\}/g) ?? []).length;
const openEach = (template.match(/\{\{#each\b/g) ?? []).length;
const closeEach = (template.match(/\{\{\/each\}\}/g) ?? []).length;
assert.equal(openIf, closeIf, "Blocos #if do Handlebars devem estar balanceados");
assert.equal(openUnless, closeUnless, "Blocos #unless do Handlebars devem estar balanceados");
assert.equal(openEach, closeEach, "Blocos #each do Handlebars devem estar balanceados");

const css = await fs.readFile(path.join(root, "styles/grimorio-importer.css"), "utf8");
assert.match(css, /0\.11\.0 RC — feature freeze, gate final e acessibilidade/);
assert.match(css, /:focus-visible/);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /grimorio-readiness__checks/);

const moduleJson = JSON.parse(await fs.readFile(path.join(root, "module.json"), "utf8"));
const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
assert.equal(moduleJson.version, IMPORTER_VERSION);
assert.equal(packageJson.version, IMPORTER_VERSION);
assert.match(moduleJson.description, /Release Candidate 0\.11\.0-rc\.1/);
assert.equal(moduleJson.packs.length, 4);
assert.deepEqual(moduleJson.packs.map(row => row.name).sort(), ["grimorio-classes", "grimorio-feats", "grimorio-features", "grimorio-subclasses"]);
assert.equal(moduleJson.compatibility.verified, "13.351");
assert.equal(moduleJson.relationships.systems[0].compatibility.verified, "5.3.3");
assert.equal(packageJson.scripts.test, "node tests/run-all.mjs");
assert.equal(packageJson.scripts["test:release"], "node tests/validate-rc-011.mjs");

console.log("GRIMORIO_IMPORTER_011G_RELEASE_GATE_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  phase: support.phase,
  checks: ready.total,
  passed: ready.passed,
  readyForRc: ready.readyForRc,
  legacyWarningNonBlocking: legacyWarning.readyForRc,
  keyboardNavigation: true,
  ariaLive: true,
  reducedMotion: true
}, null, 2));
