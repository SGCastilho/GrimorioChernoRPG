import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const readJson = async relative => JSON.parse(await fs.readFile(path.join(root, relative), "utf8"));

const { PACKS, MODULE_ID } = await import("../scripts/pack-storage.js");
const { plannedBundleDocuments, IMPORTER_VERSION } = await import("../scripts/materializer.js");
const {
  inspectPayloadCompendiums,
  plannedPayloadDocuments,
  createCompendiumInspectionSnapshot,
  compendiumPreflightSupport
} = await import("../scripts/ui/compendium-preflight.js");
const { ImporterSession } = await import("../scripts/ui/importer-session.js");

const barbarian = await readJson("examples/class-barbarian.json");
const subclass = await readJson("examples/subclass-ryoko-barbarian-path-kaiju.json");
const alerta = await readJson("examples/feats/feat-alerta.json");
const featPackage = await readJson("examples/feats/phb-2014-feats-package.json");

function managedDoc({ role, grimorioId, featureKey = "", name = "Existente", id = "existing" }) {
  const flags = { [MODULE_ID]: { documentRole: role, grimorioId } };
  if (featureKey) flags[MODULE_ID].featureKey = featureKey;
  return {
    id,
    uuid: `Compendium.mock.Item.${id}`,
    name,
    flags,
    getFlag(scope, key) { return this.flags?.[scope]?.[key]; }
  };
}

function inspectionRuntime(seed = {}, missing = []) {
  const missingSet = new Set(missing);
  const docs = Object.fromEntries(Object.keys(PACKS).map(key => [key, [...(seed[key] ?? [])]]));
  let writes = 0;
  return {
    docs,
    get writes() { return writes; },
    getPack(key) { return missingSet.has(key) ? null : { collection: PACKS[key].collection }; },
    async listPackItems(key) {
      if (missingSet.has(key)) throw new Error(`missing ${key}`);
      return [...docs[key]];
    },
    async createPackItem() { writes += 1; throw new Error("preflight não pode criar"); },
    async updatePackItem() { writes += 1; throw new Error("preflight não pode atualizar"); },
    async createPackFolder() { writes += 1; throw new Error("preflight não pode criar pasta"); },
    async updatePackFolder() { writes += 1; throw new Error("preflight não pode atualizar pasta"); }
  };
}

assert.equal(IMPORTER_VERSION, "0.12.0");

let snapshotReads = 0;
const snapshotSource = {
  getPack() { return {}; },
  async listPackItems() { snapshotReads += 1; return []; }
};
const snapshot = await createCompendiumInspectionSnapshot(snapshotSource);
assert.equal(snapshotReads, 4, "Snapshot deve consultar cada um dos quatro compêndios uma única vez");
await inspectPayloadCompendiums(alerta, snapshot);
await inspectPayloadCompendiums(barbarian, snapshot);
assert.equal(snapshotReads, 4, "Inspeções usando snapshot não devem reler compêndios");

const featEmptyRuntime = inspectionRuntime();
const featNew = await inspectPayloadCompendiums(alerta, featEmptyRuntime);
assert.equal(featNew.available, true);
assert.equal(featNew.total, 1);
assert.equal(featNew.create, 1);
assert.equal(featNew.update, 0);
assert.equal(featNew.documents[0].statusLabel, "NOVO");
assert.equal(featEmptyRuntime.writes, 0, "Preflight jamais deve executar escrita");

const existingAlerta = managedDoc({ role: "feat", grimorioId: alerta.identity.grimorioId, name: "Alerta", id: "alerta" });
const featExistingRuntime = inspectionRuntime({ feats: [existingAlerta] });
const featUpdate = await inspectPayloadCompendiums(alerta, featExistingRuntime);
assert.equal(featUpdate.create, 0);
assert.equal(featUpdate.update, 1);
assert.equal(featUpdate.documents[0].statusLabel, "ATUALIZAR");
assert.equal(featUpdate.documents[0].existingUuid, existingAlerta.uuid);
assert.equal(featExistingRuntime.writes, 0);

const existingFeatDocs = featPackage.bundles.slice(0, 14).map((bundle, index) => managedDoc({
  role: "feat",
  grimorioId: bundle.identity.grimorioId,
  name: bundle.identity.name,
  id: `feat-${index}`
}));
const featPackageRuntime = inspectionRuntime({ feats: existingFeatDocs });
const featCatalogDiff = await inspectPayloadCompendiums(featPackage, featPackageRuntime);
assert.equal(featCatalogDiff.total, 42);
assert.equal(featCatalogDiff.create, 28);
assert.equal(featCatalogDiff.update, 14);
assert.equal(featCatalogDiff.state, "mixed");
assert.equal(featCatalogDiff.displayDocuments.length, 42, "Catálogo de 42 Talentos deve caber integralmente na preview");
assert.equal(featCatalogDiff.documentOverflow, 0);
assert.equal(featCatalogDiff.bundles.length, 42);
assert.equal(featPackageRuntime.writes, 0);

const barbarianPlan = plannedBundleDocuments(barbarian);
assert.equal(barbarianPlan.length, 13, "Plano do Bárbaro deve conter 1 Classe + 12 Características materializáveis");
assert.equal(barbarianPlan.filter(row => row.role === "feature").length, 12);
assert.ok(barbarian.features.length > barbarianPlan.filter(row => row.role === "feature").length, "Feature sintética deveria ser excluída do plano Foundry");

const existingClassDocs = [managedDoc({ role: "class", grimorioId: barbarian.identity.grimorioId, name: "Bárbaro", id: "barbarian" })];
const existingFeatureDocs = barbarianPlan.filter(row => row.role === "feature").slice(0, 3).map((row, index) => managedDoc({
  role: "feature",
  grimorioId: row.grimorioId,
  featureKey: row.featureKey,
  name: row.name,
  id: `barbarian-feature-${index}`
}));
const barbarianRuntime = inspectionRuntime({ classes: existingClassDocs, features: existingFeatureDocs });
const barbarianDiff = await inspectPayloadCompendiums(barbarian, barbarianRuntime);
assert.equal(barbarianDiff.total, 13);
assert.equal(barbarianDiff.update, 4);
assert.equal(barbarianDiff.create, 9);
assert.equal(barbarianDiff.state, "mixed");
assert.equal(barbarianRuntime.writes, 0);

const classPackage = {
  schema: "grimorio-foundry-class-package",
  schemaVersion: 1,
  profile: { id: "foundry13-dnd5e533-grimorio-class-package-v1", foundryVersion: "13.351", dnd5eVersion: "5.3.3", consumer: "grimorio-importer" },
  identity: { id: "barbarian-diff-package", name: "Bárbaro + Caminho", scope: "class-with-subclasses" },
  summary: { bundles: 2, classes: 1, subclasses: 1, features: barbarian.features.length + subclass.features.length },
  bundles: [barbarian, subclass]
};
const packagePlan = plannedPayloadDocuments(classPackage);
assert.ok(packagePlan.some(row => row.role === "class"));
assert.ok(packagePlan.some(row => row.role === "subclass"));
assert.ok(packagePlan.some(row => row.role === "feature"));
const packageDiff = await inspectPayloadCompendiums(classPackage, inspectionRuntime());
assert.equal(packageDiff.create, packageDiff.total);
assert.equal(packageDiff.update, 0);
assert.equal(packageDiff.packsChecked, 3);

const missingRuntime = inspectionRuntime({}, ["features"]);
const unavailable = await inspectPayloadCompendiums(barbarian, missingRuntime);
assert.equal(unavailable.available, false);
assert.equal(unavailable.state, "unavailable");
assert.ok(unavailable.missingPacks.includes("features"));
assert.ok(unavailable.errors[0].includes("Grimório — Características"));
assert.equal(missingRuntime.writes, 0);

const sessionRuntime = { foundryVersion: "13.351", systemId: "dnd5e", systemVersion: "5.3.3" };
const sessionInspection = inspectionRuntime({ feats: [existingAlerta] });
const session = new ImporterSession();
await session.addFiles([{
  name: "alerta.json",
  size: 1200,
  lastModified: 11,
  async text() { return JSON.stringify(alerta); }
}], sessionRuntime, sessionInspection);
assert.equal(session.summary().documents, 1);
assert.equal(session.summary().create, 0);
assert.equal(session.summary().update, 1);
assert.equal(session.summary().diffReady, true);

sessionInspection.docs.feats.length = 0;
await session.refreshInspections(sessionInspection);
assert.equal(session.summary().create, 1, "Atualizar diagnóstico deve refletir o estado atual do compêndio");
assert.equal(session.summary().update, 0);
assert.equal(session.context().entries[0].payload, undefined, "Payload bruto não deve chegar ao template");

const support = compendiumPreflightSupport();
assert.equal(support.phase, "0.11-C");
assert.equal(support.writeOperations, false);
assert.deepEqual(support.statuses, ["create", "update"]);
assert.equal(support.destinationPacks.length, 4);
assert.equal(support.refreshable, true);
assert.equal(support.snapshotReads, true);

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
assert.match(template, /Preflight nos compêndios/);
assert.match(template, /NOVO/);
assert.match(template, /ATUALIZAR/);
assert.match(template, /data-grimorio-refresh-diff/);
assert.match(template, /Ver diagnóstico por documento/);

console.log("GRIMORIO_IMPORTER_011C_DIFF_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  featCatalog: { total: featCatalogDiff.total, create: featCatalogDiff.create, update: featCatalogDiff.update },
  barbarian: { total: barbarianDiff.total, create: barbarianDiff.create, update: barbarianDiff.update },
  exactFlagMatching: true,
  syntheticFeaturesExcluded: true,
  refreshable: true,
  snapshotReads: true,
  writeOperations: support.writeOperations
}, null, 2));
