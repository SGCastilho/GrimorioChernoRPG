import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateBundle, phase8Support } from "../scripts/bundle-validator.js";
import { classProfile, READY_CLASS_IDENTIFIERS, CLASS_PROFILES } from "../scripts/class-profiles.js";
import { materializeBundle, IMPORTER_VERSION } from "../scripts/materializer.js";
import { automationCoverage, FEATURE_AUTOMATION_PROFILES } from "../scripts/feature-automation.js";
import { PACKS } from "../scripts/pack-storage.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const clone = value => JSON.parse(JSON.stringify(value));
const assert = (value, message) => { if (!value) throw new Error(message); };
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const classBundle = readJson(path.join(root, "examples", "street-fighter", "class-street-fighter.json"));
const subclassBundle = readJson(path.join(root, "examples", "street-fighter", "subclass-dragon-dojima.json"));
const runtimeInfo = { foundryVersion: "13.351", systemId: "dnd5e", systemVersion: "5.3.3" };

assert(/^0\.(?:11\.0-(?:alpha\.\d+|rc\.\d+)|12\.0(?:-alpha\.\d+)?|13\.0-(?:alpha\.\d+|beta\.\d+|rc\.\d+))$/.test(IMPORTER_VERSION), `IMPORTER_VERSION inesperado: ${IMPORTER_VERSION}`);
assert(READY_CLASS_IDENTIFIERS.length === 26 && READY_CLASS_IDENTIFIERS.includes("street-fighter"), "Lutador de Rua não entrou na allowlist de 26 classes");
assert(Object.keys(CLASS_PROFILES).length === 26 && classProfile("street-fighter"), "CLASS_PROFILE do Lutador de Rua ausente");
assert(phase8Support().counts.subclasses === 381, "Contagem de subclasses deveria ser 381");

const classValidation = validateBundle(classBundle, runtimeInfo);
assert(classValidation.ok, `Bundle da classe rejeitado: ${classValidation.errors.join("; ")}`);
assert(classValidation.warnings.some(w => w.includes(IMPORTER_VERSION) && /perfil local homologado/i.test(w)), `Bundle 5.27 com aviso obsoleto do 0.9.2 deveria ser aceito com warning do perfil local ${IMPORTER_VERSION}`);
const subValidation = validateBundle(subclassBundle, runtimeInfo);
assert(subValidation.ok, `Bundle do Dragão de Dojima rejeitado: ${subValidation.errors.join("; ")}`);

const coverage = automationCoverage();
assert(coverage.classes === 26 && coverage.profiles === 99, `Cobertura 0.9.3 inesperada: ${JSON.stringify(coverage)}`);
assert(coverage.classProfiles === 86 && coverage.subclassProfiles === 13, "Distribuição de automação inesperada");
assert(coverage.activities === 121 && coverage.resources === 39, "Activities/recursos inesperados");
assert(coverage.effects === 11, "A 0.9.3 não deveria alterar a quantidade de Active Effects");
assert(coverage.byClass["street-fighter"] === 27, "Esperados 27 perfis mecânicos do Lutador de Rua");
assert(new Set(FEATURE_AUTOMATION_PROFILES.map(p => p.id)).size === FEATURE_AUTOMATION_PROFILES.length, "IDs de automação duplicados");

function setPath(obj, pathString, value) {
  const parts = pathString.split(".");
  let current = obj;
  for (let i = 0; i < parts.length - 1; i += 1) {
    if (!current[parts[i]] || typeof current[parts[i]] !== "object") current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts.at(-1)] = clone(value);
}
function applyUpdate(source, data) {
  for (const [key, value] of Object.entries(data)) {
    if (key.includes(".")) setPath(source, key, value);
    else source[key] = clone(value);
  }
}
let seq = 0;
class MockItem {
  constructor(data, collection) {
    this.id = `i${String(++seq).padStart(7, "0")}`;
    this.uuid = `Compendium.${collection}.Item.${this.id}`;
    this.pack = collection;
    this._source = clone(data);
    this.name = data.name;
    this.type = data.type;
  }
  get flags() { return this._source.flags; }
  get system() { return this._source.system; }
  get effects() { return this._source.effects ?? []; }
  getFlag(scope, key) { return this._source.flags?.[scope]?.[key]; }
  async update(data) { applyUpdate(this._source, data); this.name = this._source.name; this.type = this._source.type; return this; }
}
class MockFolder {
  constructor(data) {
    this.id = `f${String(++seq).padStart(7, "0")}`;
    this._source = clone(data);
    this.name = data.name;
    this.folder = data.folder ?? null;
  }
  get flags() { return this._source.flags; }
  getFlag(scope, key) { return this._source.flags?.[scope]?.[key]; }
  async update(data) { applyUpdate(this._source, data); this.name = this._source.name; this.folder = this._source.folder ?? null; return this; }
}
class MockPack {
  constructor(spec) { this.collection = spec.collection; this.label = spec.label; this.locked = true; this.docs = []; this.folders = []; }
  async configure(data) { if (Object.prototype.hasOwnProperty.call(data, "locked")) this.locked = Boolean(data.locked); }
  async getDocuments() { return [...this.docs]; }
}
const packs = Object.fromEntries(Object.entries(PACKS).map(([key, spec]) => [key, new MockPack(spec)]));
const runtime = {
  ...runtimeInfo,
  isGM: true,
  getPack: key => packs[key] ?? null,
  listPackItems: async key => packs[key].getDocuments(),
  createPackItem: async (key, data) => { assert(!packs[key].locked, `${key} bloqueado ao criar Item`); const doc = new MockItem(data, PACKS[key].collection); packs[key].docs.push(doc); return doc; },
  updatePackItem: async (key, doc, data) => { assert(!packs[key].locked, `${key} bloqueado ao atualizar Item`); return doc.update(data); },
  listPackFolders: key => [...packs[key].folders],
  createPackFolder: async (key, data) => { assert(!packs[key].locked, `${key} bloqueado ao criar pasta`); const folder = new MockFolder(data); packs[key].folders.push(folder); return folder; },
  updatePackFolder: async (key, folder, data) => { assert(!packs[key].locked, `${key} bloqueado ao atualizar pasta`); return folder.update(data); },
  setPackLocked: async (key, locked) => { packs[key].locked = Boolean(locked); },
  isPackLocked: key => packs[key].locked,
  listWorldItems: () => []
};

const firstClass = await materializeBundle(classBundle, runtime);
const firstSub = await materializeBundle(subclassBundle, runtime);
assert(firstClass.ok && firstSub.ok, "Materialização inicial falhou");
assert(packs.classes.docs.length === 1 && packs.subclasses.docs.length === 1, "Classe/subclasse não materializadas nos compêndios corretos");
assert(packs.features.docs.length === 61 + 4, `Esperados 65 Items de característica/opção; encontrados ${packs.features.docs.length}`);
assert(packs.features.folders.length === 2, "Esperadas pastas Lutador de Rua e Dragão de Dojima");
assert(Object.values(packs).every(pack => pack.locked), "Compêndios devem voltar ao estado bloqueado");

const classItem = packs.classes.docs[0];
assert(classItem.name === "Lutador de Rua" && classItem.system.identifier === "street-fighter", "Item de classe incorreto");
assert(classItem.system.hd.denomination === "d10", "Dado de Vida do Lutador de Rua deveria ser d10");
assert(classItem.system.spellcasting.progression === "none", "Lutador de Rua não deve receber conjuração nativa");
const advancements = Object.values(classItem.system.advancement ?? {});
assert(advancements.filter(a => a.type === "AbilityScoreImprovement").length === 0, "Não deve haver ASI nativo inferido");
const subclassAdv = advancements.find(a => a.type === "Subclass");
assert(subclassAdv?.level === 3 && subclassAdv?.title === "Arquétipo de Rua", "Advancement de Arquétipo de Rua deveria ocorrer no nível 3");
const itemChoice = advancements.find(a => a.type === "ItemChoice" && a.title === "Essências de Cólera — escolhas iniciais");
assert(itemChoice?.configuration?.choices?.["3"]?.count === 2, "Deveria haver escolha inicial de 2 Essências no nível 3");
assert(itemChoice?.configuration?.pool?.length === 5, "A escolha inicial deve conter apenas as 5 Essências disponíveis no 3º nível");
const saveAdv = advancements.find(a => a.type === "Trait" && a.title === "Proficiências em Salvaguardas");
assert(saveAdv?.configuration?.grants?.includes("saves:str") && saveAdv?.configuration?.grants?.includes("saves:con"), "Salvaguardas Força/Constituição ausentes");
const armorAdv = advancements.find(a => a.type === "Trait" && a.title === "Proficiências em Armaduras");
assert(JSON.stringify(armorAdv?.configuration?.grants) === JSON.stringify(["armor:lgt"]), "Somente armadura leve deve ser concedida nativamente");
const weaponAdv = advancements.find(a => a.type === "Trait" && a.title === "Proficiências em Armas");
assert(JSON.stringify(weaponAdv?.configuration?.grants) === JSON.stringify(["weapon:sim"]), "Somente armas simples podem ser concedidas com segurança");

const managedFlags = doc => doc.flags?.["grimorio-importer"] ?? {};
const classFeatures = packs.features.docs.filter(d => managedFlags(d).grimorioId === "street-fighter-homebrew");
const subFeatures = packs.features.docs.filter(d => managedFlags(d).grimorioId === "street-fighter-dragon-dojima");
assert(classFeatures.length === 61 && subFeatures.length === 4, "Características/opções materializáveis do PDF devem ser preservadas no compêndio; Arquétipo de Rua é substituído pelo Advancement nativo de Subclass");
const essenceDocs = classFeatures.filter(d => /^Essência D[ao]/i.test(d.name));
assert(essenceDocs.length === 20, `Esperadas 20 Essências materializadas; encontradas ${essenceDocs.length}`);
const initialEssences = essenceDocs.filter(d => managedFlags(d).featureRole === "choice-option");
assert(initialEssences.length === 5 && initialEssences.every(d => managedFlags(d).featureLevel === 3), "Cinco Essências iniciais devem ser choice-options de nível 3");
const laterEssences = essenceDocs.filter(d => managedFlags(d).featureRole === "supporting-feature");
assert(laterEssences.length === 15, "As 15 Essências posteriores devem ser preservadas como opções de suporte não concedidas");
assert(new Set(laterEssences.map(d => managedFlags(d).featureLevel)).size === 4, "Essências posteriores devem preservar tiers 9/13/15/17");

const asiDocs = classFeatures.filter(d => d.name === "Incremento de Habilidade");
assert(asiDocs.length === 5, "Entradas textuais de Incremento de Habilidade devem ser materializadas 5 vezes");
for (const level of [4, 8, 12, 16, 19]) {
  const grant = advancements.find(a => a.type === "ItemGrant" && a.level === level);
  assert(grant, `ItemGrant do nível ${level} ausente`);
  const expected = asiDocs.find(d => managedFlags(d).featureLevel === level);
  assert(expected && grant.configuration.items.some(x => x.uuid === expected.uuid), `Incremento de Habilidade textual não foi concedido no nível ${level}`);
}

const colera = classFeatures.find(d => d.name === "Cólera");
assert(colera?.system?.uses?.max === "max(@prof, @prof + @abilities.str.mod) + 2 * floor(@classes.street-fighter.levels / 10) + 2 * floor(@classes.street-fighter.levels / 18) - 2 * floor(@classes.street-fighter.levels / 20)", "Fórmula de capacidade máxima de Cólera inesperada");
assert((colera.system.uses.recovery ?? []).length === 0, "Cólera não deve recuperar por descanso automaticamente");
const surges = classFeatures.find(d => d.name === "Surtos de Cólera");
assert(Object.values(surges?.system?.activities ?? {}).length === 4, "Surtos de Cólera deveria possuir 4 Activities base");
for (const activity of Object.values(surges.system.activities)) {
  assert(activity.consumption.targets.some(t => t.target === "street-fighter-colera"), `${activity.name}: deveria consumir a reserva Cólera`);
}
for (const essence of essenceDocs) {
  const activities = Object.values(essence.system?.activities ?? {});
  assert(activities.length === 1, `${essence.name}: deveria possuir uma Activity de consumo`);
  assert(activities[0].consumption.targets?.[0]?.target === "street-fighter-colera", `${essence.name}: Activity deveria consumir Cólera`);
}

const subclassItem = packs.subclasses.docs[0];
assert(subclassItem.name === "Dragão de Dojima" && subclassItem.system.classIdentifier === "street-fighter", "Item de subclasse incorreto");
const subAdv = Object.values(subclassItem.system.advancement ?? {}).filter(a => a.type === "ItemGrant");
assert(JSON.stringify(subAdv.map(a => a.level)) === JSON.stringify([3, 6, 11, 17]), `Progressão do Dragão de Dojima incorreta: ${JSON.stringify(subAdv.map(a => a.level))}`);
const komaki = subFeatures.find(d => d.name === "Técnica Komaki");
assert(Object.values(komaki?.system?.activities ?? {}).length === 4, "Técnica Komaki deveria possuir 4 Activities parciais");
for (const activity of Object.values(komaki.system.activities)) assert(activity.consumption.targets?.[0]?.target === "street-fighter-colera", `${activity.name}: deveria consumir Cólera`);

const before = {
  classes: packs.classes.docs.length,
  subclasses: packs.subclasses.docs.length,
  features: packs.features.docs.length,
  folders: packs.features.folders.length,
  classUuid: classItem.uuid,
  subclassUuid: subclassItem.uuid,
  featureUuids: new Map(packs.features.docs.map(d => [`${managedFlags(d).grimorioId}:${managedFlags(d).featureKey}`, d.uuid]))
};
const secondClass = await materializeBundle(classBundle, runtime);
const secondSub = await materializeBundle(subclassBundle, runtime);
assert(secondClass.stats.parentCreated === 0 && secondClass.stats.parentUpdated === 1, "Reimportação da classe deveria atualizar, não duplicar");
assert(secondSub.stats.parentCreated === 0 && secondSub.stats.parentUpdated === 1, "Reimportação da subclasse deveria atualizar, não duplicar");
assert(packs.classes.docs.length === before.classes && packs.subclasses.docs.length === before.subclasses && packs.features.docs.length === before.features && packs.features.folders.length === before.folders, "Reimportação criou duplicações");
assert(packs.classes.docs[0].uuid === before.classUuid && packs.subclasses.docs[0].uuid === before.subclassUuid, "UUID da classe/subclasse mudou na reimportação");
for (const doc of packs.features.docs) {
  const key = `${managedFlags(doc).grimorioId}:${managedFlags(doc).featureKey}`;
  assert(before.featureUuids.get(key) === doc.uuid, `UUID de característica mudou: ${doc.name}`);
}
assert(Object.values(packs).every(pack => pack.locked), "Compêndios devem permanecer bloqueados após reimportação");

console.log("GRIMORIO_IMPORTER_093_STREET_FIGHTER_OK", JSON.stringify({
  importer: IMPORTER_VERSION,
  readyClasses: READY_CLASS_IDENTIFIERS.length,
  supportedSubclasses: phase8Support().counts.subclasses,
  class: classItem.name,
  subclass: subclassItem.name,
  classFeatures: classFeatures.length,
  subclassFeatures: subFeatures.length,
  essences: essenceDocs.length,
  initialEssenceChoices: initialEssences.length,
  laterEssenceOptions: laterEssences.length,
  automation: {
    profiles: coverage.profiles,
    streetFighterProfiles: coverage.byClass["street-fighter"],
    activities: coverage.activities,
    resources: coverage.resources,
    effects: coverage.effects
  },
  reimportStable: true
}, null, 2));
