import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const readJson = async relative => JSON.parse(await fs.readFile(path.join(root, relative), "utf8"));

const runtime = { foundryVersion: "13.351", systemId: "dnd5e", systemVersion: "5.3.3" };
const { classifyPayload, previewPayload, preflightSupport } = await import("../scripts/ui/payload-preflight.js");
const { ImporterSession } = await import("../scripts/ui/importer-session.js");

const barbarian = await readJson("examples/class-barbarian.json");
const subclass = await readJson("examples/subclass-ryoko-barbarian-path-kaiju.json");
const alerta = await readJson("examples/feats/feat-alerta.json");
const featPackage = await readJson("examples/feats/phb-2014-feats-package.json");

assert.equal(classifyPayload(barbarian), "class-bundle");
assert.equal(classifyPayload(subclass), "subclass-bundle");
assert.equal(classifyPayload(alerta), "feat-bundle");
assert.equal(classifyPayload(featPackage), "feat-package");
assert.equal(classifyPayload({ schema: "outro" }), "unknown");

const classPreview = previewPayload(barbarian, runtime);
assert.equal(classPreview.valid, true, `Bárbaro deveria passar no preflight: ${classPreview.errors.join(" | ")}`);
assert.equal(classPreview.typeLabel, "Classe");
assert.ok(classPreview.excerpt.length > 40, "Preview da Classe deveria incluir um trecho descritivo");
assert.deepEqual(classPreview.destinations.map(x => x.key), ["classes", "features"]);
assert.equal(classPreview.counts.find(x => x.label === "Características")?.value, barbarian.features.length);

const subclassPreview = previewPayload(subclass, runtime);
assert.equal(subclassPreview.valid, true, `Subclasse deveria passar no preflight: ${subclassPreview.errors.join(" | ")}`);
assert.equal(subclassPreview.typeLabel, "Subclasse");
assert.deepEqual(subclassPreview.destinations.map(x => x.key), ["subclasses", "features"]);

const featPreview = previewPayload(alerta, runtime);
assert.equal(featPreview.valid, true, `Alerta deveria passar no preflight: ${featPreview.errors.join(" | ")}`);
assert.equal(featPreview.typeLabel, "Talento");
assert.ok(featPreview.excerpt.includes("Sempre a espera de perigo"), "Preview do Talento deveria incluir trecho da descrição");
assert.deepEqual(featPreview.destinations.map(x => x.key), ["feats"]);

const featPackagePreview = previewPayload(featPackage, runtime);
assert.equal(featPackagePreview.valid, true, `Pacote de Talentos deveria passar no preflight: ${featPackagePreview.errors.join(" | ")}`);
assert.equal(featPackagePreview.typeLabel, "Catálogo de Talentos");
assert.equal(featPackagePreview.counts.find(x => x.label === "Talentos")?.value, 42);
assert.equal(featPackagePreview.counts.find(x => x.label === "Com pré-requisito")?.value, 12);

const classPackage = {
  schema: "grimorio-foundry-class-package",
  schemaVersion: 1,
  profile: {
    id: "foundry13-dnd5e533-grimorio-class-package-v1",
    foundryVersion: "13.351",
    dnd5eVersion: "5.3.3",
    consumer: "grimorio-importer"
  },
  identity: {
    id: "barbarian-preview-package",
    name: "Bárbaro — Pacote de Preview",
    scope: "class-with-subclasses"
  },
  summary: {
    bundles: 2,
    classes: 1,
    subclasses: 1,
    features: barbarian.features.length + subclass.features.length
  },
  bundles: [barbarian, subclass]
};
const classPackagePreview = previewPayload(classPackage, runtime);
assert.equal(classPackagePreview.valid, true, `Pacote de classe deveria passar: ${classPackagePreview.errors.join(" | ")}`);
assert.equal(classPackagePreview.type, "class-package");
assert.deepEqual(classPackagePreview.destinations.map(x => x.key), ["classes", "subclasses", "features"]);

const blocked = structuredClone(barbarian);
blocked.identity.identifier = "classe-nao-homologada";
blocked.identity.grimorioId = "classe-nao-homologada";
blocked.identity.name = "Classe Não Homologada";
const blockedPreview = previewPayload(blocked, runtime);
assert.equal(blockedPreview.valid, false);
assert.ok(blockedPreview.errors.some(x => x.includes("fora da lista homologada")));

const unknownPreview = previewPayload({ schema: "schema-inexistente", identity: { name: "Teste" } }, runtime);
assert.equal(unknownPreview.valid, false);
assert.equal(unknownPreview.type, "unknown");
assert.ok(unknownPreview.errors[0].includes("JSON não reconhecido"));

const session = new ImporterSession();
const inspectionRuntime = {
  getPack() { return {}; },
  async listPackItems() { return []; }
};
const files = [
  {
    name: "alerta.json",
    size: 1200,
    lastModified: 1,
    async text() { return JSON.stringify(alerta); }
  },
  {
    name: "quebrado.json",
    size: 12,
    lastModified: 2,
    async text() { return '{"schema":'; }
  }
];
const firstLoad = await session.addFiles(files, runtime, inspectionRuntime);
assert.equal(firstLoad.added, 2);
assert.equal(firstLoad.ignored, 0);
assert.deepEqual(session.summary(), {
  files: 2,
  valid: 1,
  invalid: 1,
  warnings: 0,
  totalWarnings: 0,
  totalErrors: 1,
  allValid: false,
  contentCounts: { "feat-bundle": 1, "file-error": 1 },
  inspected: 1,
  inspectionUnavailable: 0,
  diffReady: true,
  canImport: false,
  documents: 1,
  create: 1,
  update: 0
});
const secondLoad = await session.addFiles(files, runtime, inspectionRuntime);
assert.equal(secondLoad.added, 0);
assert.equal(secondLoad.ignored, 2, "Arquivos idênticos devem ser ignorados na mesma sessão");
assert.equal(session.context().entries[0].payload, undefined, "O payload bruto não deve ser enviado ao template");
assert.ok(session.context().entries[1].displayErrors[0].startsWith("JSON malformado:"));

session.remove(session.entries[1].id);
assert.equal(session.summary().files, 1);
assert.equal(session.summary().allValid, true);
session.clear();
assert.equal(session.empty, true);

const support = preflightSupport();
assert.equal(support.phase, "0.11-C");
assert.equal(support.basePhase, "0.11-B");
assert.equal(support.writeOperations, false);
assert.equal(support.multipleFiles, true);
assert.equal(support.dragAndDrop, true);
assert.equal(support.formats.length, 5);

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
assert.match(template, /data-grimorio-dropzone/);
assert.match(template, /data-grimorio-select-files/);
assert.match(template, /data-grimorio-remove-file/);
assert.match(template, /Fluxo 0\.11-D/);
assert.match(template, /Importar conteúdo/);

console.log("GRIMORIO_IMPORTER_011B_PREFLIGHT_OK", JSON.stringify({
  version: "0.11.0-rc.1",
  regression: "0.11-B",
  formats: support.formats,
  featCatalog: 42,
  malformedJsonHandled: true,
  duplicateFilesIgnored: true,
  writeOperations: support.writeOperations
}, null, 2));
