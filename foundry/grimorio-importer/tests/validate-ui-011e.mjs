import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const { IMPORTER_VERSION } = await import("../scripts/version.js");
const { centralParitySupport } = await import("../scripts/ui/central-support.js");
const { selectedActor, selectedActorSelection } = await import("../scripts/actor-selection.js");

assert.equal(IMPORTER_VERSION, "0.12.0");

const support = centralParitySupport();
assert.equal(support.phase, "0.12.0 Stable");
assert.equal(support.basePhase, "0.11-G");
assert.equal(support.commandParity, true);
assert.equal(support.commandsPreserved, true);
assert.equal(support.gmOnly, true);
assert.deepEqual(support.visualSections, ["import", "status", "packs", "automation", "audit", "special", "help"]);
assert.equal(support.status, true);
assert.equal(support.compendiums, true);
assert.equal(support.automationCoverage, true);
assert.equal(support.automationAudit, true);
assert.equal(support.specialActorStatus, true);
assert.equal(support.configureSpecialActor, true);
assert.equal(support.help, true);

const tokenActor = { id: "token-actor", name: "Actor do Token" };
const assignedActor = { id: "assigned-actor", name: "Personagem Atribuído" };
globalThis.canvas = { tokens: { controlled: [{ actor: tokenActor }] } };
globalThis.game = { user: { character: assignedActor } };
let selection = selectedActorSelection();
assert.equal(selection.actor, tokenActor);
assert.equal(selection.source, "token");
assert.equal(selectedActor(), tokenActor);

globalThis.canvas.tokens.controlled = [];
selection = selectedActorSelection();
assert.equal(selection.actor, assignedActor);
assert.equal(selection.source, "user-character");
assert.equal(selectedActor(), assignedActor);

globalThis.canvas.tokens.controlled = [{ actor: tokenActor }, { actor: assignedActor }];
assert.throws(() => selectedActorSelection(), /Selecione apenas um token/);

globalThis.canvas.tokens.controlled = [];
globalThis.game.user.character = null;
selection = selectedActorSelection();
assert.equal(selection.actor, null);
assert.equal(selection.source, "none");

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
for (const phrase of [
  "Diagnóstico do ambiente",
  "Compêndios gerenciados",
  "Cobertura de automação",
  "Auditoria integrada",
  "Actor atual",
  "Central ↔ comandos",
  "data-grimorio-refresh-section",
  "data-grimorio-configure-special"
]) assert.match(template, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
assert.doesNotMatch(template, /Shell visual ativo/);

const appSource = await fs.readFile(path.join(root, "scripts/ui/importer-app.js"), "utf8");
for (const apiName of ["status", "compendiumStatus", "automationCoverage", "automationCompendiumAudit", "specialActorStatus", "configureActorSpecialClasses"]) {
  assert.match(appSource, new RegExp(`api\\.${apiName}`), `Central deveria reutilizar a API ${apiName}`);
}
assert.match(appSource, /selectedActorSelection/);
assert.match(appSource, /buildLabel: IMPORTER_BUILD\.label/);
assert.match(appSource, /#sectionData = new Map\(\)/);
assert.match(appSource, /refreshActiveSection/);

const mainSource = await fs.readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainSource, /import \{ selectedActor \} from "\.\/actor-selection\.js"/);
assert.match(mainSource, /centralParitySupport/);
assert.doesNotMatch(mainSource, /function selectedActor\(\)/, "Seleção de Actor não deve estar duplicada no main.js");
const commandRouterSource = await fs.readFile(path.join(root, "scripts/ui/command-router.js"), "utf8");
for (const command of [
  "/grimorio-import",
  "/grimorio-import-batch",
  "/grimorio-import-package",
  "/grimorio-import-feats",
  "/grimorio-status",
  "/grimorio-packs",
  "/grimorio-world-preview",
  "/grimorio-automacao",
  "/grimorio-auditoria-automacao",
  "/grimorio-special",
  "/grimorio-configurar",
  "/grimorio-help"
]) assert.ok(commandRouterSource.includes(command), `Comando preservado ausente: ${command}`);


class MockApplicationV2 {
  constructor() { this.rendered = false; this.minimized = false; }
  async _prepareContext() { return {}; }
  _attachPartListeners() {}
  async render() { this.rendered = true; return this; }
  bringToFront() {}
  async maximize() { this.minimized = false; }
}
const HandlebarsApplicationMixin = Base => class extends Base {};
globalThis.foundry = { applications: { api: { ApplicationV2: MockApplicationV2, HandlebarsApplicationMixin }, instances: new Map() } };
globalThis.ui = { notifications: { info() {}, warn() {}, error() {} } };
const actorForUi = { id: "actor-ui", name: "Actor UI" };
const mockedApi = {
  async status() { return { environmentMatches: true, activeFoundry: "13.351", activeSystem: "dnd5e", activeSystemVersion: "5.3.3", targetFoundry: "13.351", targetDnd5e: "5.3.3", packs: [{ label: "Grimório — Classes", collection: "grimorio-importer.grimorio-classes", available: true, locked: true }], legacyWorldPrototype: { total: 0, byRole: {} } }; },
  async compendiumStatus() { return [{ key: "classes", label: "Grimório — Classes", collection: "grimorio-importer.grimorio-classes", role: "class", available: true, locked: true, total: 1, managed: 1, folders: 0, managedFolders: 0 }]; },
  automationCoverage() { return { phase: "12", profiles: 99, classProfiles: 86, subclassProfiles: 13, classes: 26, subclassBundles: 13, activities: 121, resources: 39, effects: 11, passiveEffects: 5, activityEffects: 6, byTier: { full: 12, partial: 86, description: 1 }, byClass: { barbarian: 3 } }; },
  async automationCompendiumAudit() { return { managed: 100, profiled: 20, full: 5, partial: 14, description: 1, candidateHigh: 10, candidateMedium: 20, textual: 50, withoutAudit: 0, byBundle: { barbarian: { total: 10, profiled: 3, candidateHigh: 1, candidateMedium: 2, textual: 4 } } }; },
  async featCompendiumAudit() { return { phase:"FA-5", expected:42, managed:42, verified:42, failed:0, native:6, runtime:7, assisted:25, narrative:4, readyForStable:true, readyForRc:true, totals:{expected:{advancements:26,activities:22,effects:10,uses:2,runtime:56,assistedChoices:3},actual:{advancements:26,activities:22,effects:10,uses:2,runtime:56,assistedChoices:3}}, rows:[] }; },
  specialActorStatus(actor) { return { actor: actor.name, classes: [{ identifier: "bender", name: "Dobrador", hd: "d8", spellcasting: { ability: "wis" }, configuration: { configured: true, spellcastingAbility: "wis" } }] }; },
  async configureActorSpecialClasses() { return [{ identifier: "bender", configured: true }]; }
};
globalThis.game = { version: "13.351", system: { id: "dnd5e", version: "5.3.3" }, user: { isGM: true, character: actorForUi }, modules: { get() { return { api: mockedApi }; } } };
globalThis.canvas = { tokens: { controlled: [] } };
const { GrimorioImporterApp } = await import("../scripts/ui/importer-app.js");
const app = new GrimorioImporterApp();
for (const section of ["status", "packs", "automation", "audit", "special", "help"]) {
  await app.activateSection(section, { render: false });
  const context = await app._prepareContext({});
  assert.equal(context.activeSection, section);
  assert.equal(context.sectionData?.ready, true, `Seção ${section} deveria preparar dados reais`);
}

const opens = (template.match(/{{#if |{{#unless /g) ?? []).length;
const closes = (template.match(/{{\/if}}|{{\/unless}}/g) ?? []).length;
assert.equal(opens, closes, "Blocos condicionais do template devem permanecer balanceados");

console.log("GRIMORIO_IMPORTER_011E_PARITY_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  phase: support.phase,
  visualSections: support.visualSections.length,
  commandParity: support.commandParity,
  sharedActorSelection: true,
  commandsPreserved: true
}, null, 2));
