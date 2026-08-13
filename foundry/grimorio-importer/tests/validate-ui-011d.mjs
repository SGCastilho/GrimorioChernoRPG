import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const { IMPORTER_VERSION } = await import("../scripts/materializer.js");
const { executeImportEntries, summarizeImportResult, importExecutionSupport } = await import("../scripts/ui/import-executor.js");
const { ImporterSession } = await import("../scripts/ui/importer-session.js");
const { withWritablePacks } = await import("../scripts/pack-storage.js");

assert.equal(IMPORTER_VERSION, "0.11.0-rc.1");

const single = summarizeImportResult({
  stats: { featsCreated: 1, featsUpdated: 0, foldersCreated: 1, foldersUpdated: 0, worldItemsCreated: 0 },
  warnings: ["revisão A"]
});
assert.equal(single.created, 1);
assert.equal(single.updated, 0);
assert.equal(single.foldersCreated, 1);
assert.deepEqual(single.warnings, ["revisão A"]);

const packageSummary = summarizeImportResult({
  imported: 2,
  failed: 1,
  results: [
    { stats: { parentCreated: 1, parentUpdated: 0, featuresCreated: 2, featuresUpdated: 0, foldersCreated: 1 }, warnings: ["aviso 1"] },
    { stats: { parentCreated: 0, parentUpdated: 1, featuresCreated: 0, featuresUpdated: 3, foldersUpdated: 1 }, warnings: [] }
  ],
  failures: [{ index: 2, name: "Subclasse quebrada", error: new Error("erro controlado") }],
  warnings: ["aviso do pacote"]
});
assert.equal(packageSummary.created, 3);
assert.equal(packageSummary.updated, 4);
assert.equal(packageSummary.foldersCreated, 1);
assert.equal(packageSummary.foldersUpdated, 1);
assert.equal(packageSummary.internalFailures.length, 1);
assert.equal(packageSummary.internalFailures[0].name, "Subclasse quebrada");
assert.equal(packageSummary.warnings.length, 2);

const entries = [
  {
    id: "one",
    fileName: "talento.json",
    preview: {
      valid: true,
      payload: { id: "one" },
      title: "Talento Teste",
      typeLabel: "Talento",
      compendium: { available: true, total: 1, create: 1, update: 0 }
    }
  },
  {
    id: "two",
    fileName: "pacote.json",
    preview: {
      valid: true,
      payload: { id: "two" },
      title: "Pacote Teste",
      typeLabel: "Pacote",
      compendium: { available: true, total: 7, create: 3, update: 4 }
    }
  },
  {
    id: "three",
    fileName: "falha.json",
    preview: {
      valid: true,
      payload: { id: "three" },
      title: "Conteúdo com Falha",
      typeLabel: "Classe",
      compendium: { available: true, total: 2, create: 0, update: 2 }
    }
  }
];

const calls = [];
const report = await executeImportEntries(entries, {
  async importPayload(payload, options) {
    calls.push({ payload, options });
    if (payload.id === "one") {
      return { stats: { featsCreated: 1, featsUpdated: 0, foldersCreated: 1, foldersUpdated: 0, worldItemsCreated: 0 }, warnings: [] };
    }
    if (payload.id === "two") {
      return {
        results: [
          { stats: { parentCreated: 1, parentUpdated: 0, featuresCreated: 2, featuresUpdated: 0, foldersCreated: 1, foldersUpdated: 0, worldItemsCreated: 0 }, warnings: [] },
          { stats: { parentCreated: 0, parentUpdated: 1, featuresCreated: 0, featuresUpdated: 3, foldersCreated: 0, foldersUpdated: 1, worldItemsCreated: 0 }, warnings: ["manual"] }
        ],
        failures: [{ index: 2, name: "Falha interna", error: new Error("subbundle inválido") }],
        warnings: []
      };
    }
    throw new Error("falha de arquivo simulada");
  }
});

assert.equal(calls.length, 3);
assert.ok(calls.every(call => call.options?.notify === false), "Execução visual deve silenciar notificações individuais");
assert.equal(report.state, "partial");
assert.equal(report.files, 3);
assert.equal(report.succeeded, 1);
assert.equal(report.partial, 1);
assert.equal(report.failed, 1);
assert.equal(report.created, 4);
assert.equal(report.updated, 4);
assert.equal(report.documentsChanged, 8);
assert.equal(report.foldersCreated, 2);
assert.equal(report.foldersUpdated, 1);
assert.equal(report.worldItemsCreated, 0);
assert.equal(report.warningCount, 1);
assert.equal(report.internalFailureCount, 1);
assert.equal(report.predictedDocuments, 10);
assert.equal(report.predictedCreate, 4);
assert.equal(report.predictedUpdate, 6);
assert.equal(report.rows[1].status, "partial");
assert.equal(report.rows[2].status, "failed");
assert.match(report.rows[2].error, /falha de arquivo simulada/);

const session = new ImporterSession();
const runtime = { foundryVersion: "13.351", systemId: "dnd5e", systemVersion: "5.3.3" };
const inspection = { getPack() { return {}; }, async listPackItems() { return []; } };
const feat = JSON.parse(await fs.readFile(path.join(root, "examples/feats/feat-alerta.json"), "utf8"));
await session.addFiles([{ name: "alerta.json", size: 1, lastModified: 1, async text() { return JSON.stringify(feat); } }], runtime, inspection);
assert.equal(session.summary().canImport, true, "Sessão válida e diagnosticada deve liberar confirmação");
assert.equal(session.executableEntries().length, 1);

let locked = true;
const lockRuntime = {
  getPack() { return { locked }; },
  isPackLocked() { return locked; },
  async setPackLocked(_key, value) { locked = Boolean(value); }
};
await assert.rejects(
  () => withWritablePacks(lockRuntime, ["feats"], async () => {
    assert.equal(locked, false, "Compêndio deveria estar temporariamente desbloqueado durante a escrita");
    throw new Error("falha proposital");
  }),
  /falha proposital/
);
assert.equal(locked, true, "O bloqueio original deve ser restaurado mesmo quando a escrita falha");

const support = importExecutionSupport();
assert.equal(support.phase, "0.11-D");
assert.equal(support.writeOperations, true);
assert.equal(support.confirmationRequired, true);
assert.equal(support.actualStatsFromMaterializers, true);
assert.equal(support.reportInsideApplication, true);
assert.equal(support.worldItemsExpected, 0);

const template = await fs.readFile(path.join(root, "templates/importer-app.hbs"), "utf8");
assert.match(template, /data-grimorio-request-import/);
assert.match(template, /data-grimorio-confirm-import/);
assert.match(template, /data-grimorio-cancel-import/);
assert.match(template, /Confirmar escrita nos compêndios/);
assert.match(template, /Relatório da execução/);
assert.match(template, /Importação em andamento/);

const mainSource = await fs.readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainSource, /importPayload\(payload, \{ notify = true, continueOnError = true \} = \{\}\)/);
assert.match(mainSource, /importExecutionSupport/);

console.log("GRIMORIO_IMPORTER_011D_EXECUTION_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  confirmationRequired: support.confirmationRequired,
  reportState: report.state,
  predicted: { documents: report.predictedDocuments, create: report.predictedCreate, update: report.predictedUpdate },
  actual: { changed: report.documentsChanged, created: report.created, updated: report.updated },
  failures: { files: report.failed, internal: report.internalFailureCount },
  worldItemsCreated: report.worldItemsCreated
}, null, 2));
