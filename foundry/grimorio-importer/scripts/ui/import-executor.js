function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function number(value) {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map(value => String(value)))];
}

function statsFromBundleResult(result = {}) {
  const stats = result?.stats ?? {};
  const created = number(stats.parentCreated) + number(stats.featuresCreated) + number(stats.featsCreated);
  const updated = number(stats.parentUpdated) + number(stats.featuresUpdated) + number(stats.featsUpdated);
  return {
    created,
    updated,
    foldersCreated: number(stats.foldersCreated),
    foldersUpdated: number(stats.foldersUpdated),
    worldItemsCreated: number(stats.worldItemsCreated),
    warnings: asArray(result?.warnings)
  };
}

function flattenImportResult(result) {
  if (!result || typeof result !== "object") return [];
  if (result.stats) return [result];
  if (Array.isArray(result.results)) return result.results.flatMap(flattenImportResult);
  return [];
}

function normalizeInternalFailures(result) {
  if (!result || typeof result !== "object") return [];
  const rows = [];
  for (const failure of asArray(result.failures)) {
    rows.push({
      name: String(failure?.name ?? `Entrada ${number(failure?.index) + 1}`),
      message: String(failure?.error?.message ?? failure?.error ?? "Falha desconhecida durante a importação.")
    });
  }
  return rows;
}

export function summarizeImportResult(result) {
  const leafResults = flattenImportResult(result);
  const summary = {
    created: 0,
    updated: 0,
    foldersCreated: 0,
    foldersUpdated: 0,
    worldItemsCreated: 0,
    warnings: [],
    internalFailures: normalizeInternalFailures(result),
    leafResults: leafResults.length
  };

  for (const leaf of leafResults) {
    const stats = statsFromBundleResult(leaf);
    summary.created += stats.created;
    summary.updated += stats.updated;
    summary.foldersCreated += stats.foldersCreated;
    summary.foldersUpdated += stats.foldersUpdated;
    summary.worldItemsCreated += stats.worldItemsCreated;
    summary.warnings.push(...stats.warnings);
  }
  summary.warnings.push(...asArray(result?.warnings));
  summary.warnings = unique(summary.warnings);
  return Object.freeze(summary);
}

async function defaultPayloadImporter(payload) {
  const main = await import("../main.js");
  return await main.importPayload(payload, { notify: false, continueOnError: true });
}

function predictedCounts(entry) {
  const compendium = entry?.preview?.compendium;
  return {
    documents: compendium?.available ? number(compendium.total) : 0,
    create: compendium?.available ? number(compendium.create) : 0,
    update: compendium?.available ? number(compendium.update) : 0
  };
}

function entryLabel(entry) {
  return String(entry?.preview?.title ?? entry?.fileName ?? "Conteúdo do Grimório");
}

export async function executeImportEntries(entries, { importPayload = defaultPayloadImporter, continueOnError = true } = {}) {
  if (!globalThis.game?.user?.isGM && importPayload === defaultPayloadImporter) {
    throw new Error("Somente um Mestre pode executar importações pela Central do Grimório Importer.");
  }

  const executable = asArray(entries).filter(entry => entry?.preview?.valid && entry?.preview?.payload && entry?.preview?.compendium?.available);
  const startedAt = Date.now();
  const rows = [];

  for (const entry of executable) {
    const predicted = predictedCounts(entry);
    try {
      const result = await importPayload(entry.preview.payload, { notify: false, continueOnError: true });
      const actual = summarizeImportResult(result);
      const partial = actual.internalFailures.length > 0;
      rows.push(Object.freeze({
        id: String(entry.id ?? ""),
        fileName: String(entry.fileName ?? ""),
        title: entryLabel(entry),
        typeLabel: String(entry.preview?.typeLabel ?? "Conteúdo"),
        status: partial ? "partial" : "success",
        statusLabel: partial ? "Concluído com falhas" : "Importado",
        statusIcon: partial ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check",
        predicted,
        actual,
        error: ""
      }));
    } catch (error) {
      rows.push(Object.freeze({
        id: String(entry.id ?? ""),
        fileName: String(entry.fileName ?? ""),
        title: entryLabel(entry),
        typeLabel: String(entry.preview?.typeLabel ?? "Conteúdo"),
        status: "failed",
        statusLabel: "Falhou",
        statusIcon: "fa-solid fa-circle-xmark",
        predicted,
        actual: Object.freeze({ created: 0, updated: 0, foldersCreated: 0, foldersUpdated: 0, worldItemsCreated: 0, warnings: [], internalFailures: [], leafResults: 0 }),
        error: String(error?.message ?? error ?? "Falha desconhecida durante a importação.")
      }));
      if (!continueOnError) throw error;
    }
  }

  const succeeded = rows.filter(row => row.status === "success").length;
  const partial = rows.filter(row => row.status === "partial").length;
  const failed = rows.filter(row => row.status === "failed").length;
  const created = rows.reduce((sum, row) => sum + number(row.actual.created), 0);
  const updated = rows.reduce((sum, row) => sum + number(row.actual.updated), 0);
  const foldersCreated = rows.reduce((sum, row) => sum + number(row.actual.foldersCreated), 0);
  const foldersUpdated = rows.reduce((sum, row) => sum + number(row.actual.foldersUpdated), 0);
  const worldItemsCreated = rows.reduce((sum, row) => sum + number(row.actual.worldItemsCreated), 0);
  const warningCount = rows.reduce((sum, row) => sum + asArray(row.actual.warnings).length, 0);
  const internalFailureCount = rows.reduce((sum, row) => sum + asArray(row.actual.internalFailures).length, 0);
  const predictedDocuments = rows.reduce((sum, row) => sum + number(row.predicted.documents), 0);
  const predictedCreate = rows.reduce((sum, row) => sum + number(row.predicted.create), 0);
  const predictedUpdate = rows.reduce((sum, row) => sum + number(row.predicted.update), 0);
  const durationMs = Math.max(0, Date.now() - startedAt);

  const state = failed > 0 || partial > 0 ? (succeeded > 0 || partial > 0 ? "partial" : "failed") : "success";
  const stateLabel = state === "success" ? "Importação concluída" : state === "partial" ? "Importação concluída com avisos" : "Importação falhou";
  const stateIcon = state === "success" ? "fa-solid fa-circle-check" : state === "partial" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-xmark";

  return Object.freeze({
    state,
    stateLabel,
    stateIcon,
    files: rows.length,
    succeeded,
    partial,
    failed,
    filesWithIssues: failed + partial,
    created,
    updated,
    documentsChanged: created + updated,
    foldersCreated,
    foldersUpdated,
    worldItemsCreated,
    warningCount,
    internalFailureCount,
    predictedDocuments,
    predictedCreate,
    predictedUpdate,
    durationMs,
    durationLabel: durationMs < 1000 ? `${durationMs} ms` : `${(durationMs / 1000).toFixed(1)} s`,
    rows: Object.freeze(rows)
  });
}

export function importExecutionSupport() {
  return Object.freeze({
    phase: "0.11-D",
    writeOperations: true,
    confirmationRequired: true,
    preflightRefreshBeforeConfirmation: true,
    actualStatsFromMaterializers: true,
    continueOnError: true,
    reportInsideApplication: true,
    worldItemsExpected: 0
  });
}
