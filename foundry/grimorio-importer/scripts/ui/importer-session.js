import { previewPayload } from "./payload-preflight.js";
import { inspectPayloadCompendiums, createCompendiumInspectionSnapshot } from "./compendium-preflight.js";

function formatBytes(bytes) {
  const value = Number(bytes ?? 0);
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(value < 10 * 1024 ? 1 : 0)} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

function fileSignature(file) {
  return [file?.name ?? "", Number(file?.size ?? 0), Number(file?.lastModified ?? 0)].join("::");
}

function readErrorPreview(message) {
  const text = String(message || "Não foi possível ler o arquivo.");
  return Object.freeze({
    family: "file-error",
    type: "file-error",
    typeLabel: "Arquivo inválido",
    icon: "fa-solid fa-file-circle-xmark",
    title: "Falha ao ler JSON",
    identifier: "",
    source: { title: "", page: null, pages: "" },
    subtitle: "O arquivo não pôde ser convertido em um payload do Grimório.",
    excerpt: "",
    counts: [],
    details: [],
    destinations: [],
    schema: "",
    schemaVersion: null,
    profileId: "",
    valid: false,
    state: "invalid",
    stateLabel: "Inválido",
    stateIcon: "fa-solid fa-circle-xmark",
    errors: [text],
    warnings: [],
    displayErrors: [text],
    displayWarnings: [],
    errorOverflow: 0,
    warningOverflow: 0,
    compendium: null,
    payload: null
  });
}

function inspectionFailure(error) {
  const text = String(error?.message ?? error ?? "Falha desconhecida ao consultar os compêndios.");
  return Object.freeze({
    available: false,
    state: "unavailable",
    stateLabel: "Falha na consulta",
    stateIcon: "fa-solid fa-box-open",
    total: 0,
    create: 0,
    update: 0,
    packsChecked: 0,
    missingPacks: [],
    errors: [text],
    documents: [],
    displayDocuments: [],
    documentOverflow: 0,
    bundles: [],
    writeOperations: false
  });
}

async function inspectPreview(preview, inspectionRuntime) {
  if (!preview?.valid || !preview?.payload) return null;
  try {
    return await inspectPayloadCompendiums(preview.payload, inspectionRuntime ?? undefined);
  } catch (error) {
    return inspectionFailure(error);
  }
}

export class ImporterSession {
  #entries = [];
  #sequence = 0;

  get entries() {
    return [...this.#entries];
  }

  get empty() {
    return this.#entries.length === 0;
  }

  executableEntries() {
    return this.#entries.filter(entry => entry.preview?.valid && entry.preview?.executable !== false && entry.preview?.payload && entry.preview?.compendium?.available);
  }

  clear() {
    this.#entries = [];
    return this;
  }

  remove(id) {
    const key = String(id ?? "");
    this.#entries = this.#entries.filter(entry => entry.id !== key);
    return this;
  }

  async addFiles(files, runtime = {}, inspectionRuntime = null) {
    const list = Array.from(files ?? []).filter(Boolean);
    if (!list.length) return { added: 0, ignored: 0, entries: this.entries };

    const activeInspectionRuntime = inspectionRuntime ?? await createCompendiumInspectionSnapshot();
    const known = new Set(this.#entries.map(entry => entry.signature));
    let added = 0;
    let ignored = 0;
    for (const file of list) {
      const signature = fileSignature(file);
      if (known.has(signature)) {
        ignored += 1;
        continue;
      }
      known.add(signature);
      this.#entries.push(await this.#readFile(file, runtime, activeInspectionRuntime, signature));
      added += 1;
    }
    return { added, ignored, entries: this.entries };
  }

  async refreshInspections(inspectionRuntime = null) {
    const activeInspectionRuntime = inspectionRuntime ?? await createCompendiumInspectionSnapshot();
    const refreshed = [];
    for (const entry of this.#entries) {
      if (!entry.preview?.valid || !entry.preview?.payload) {
        refreshed.push(entry);
        continue;
      }
      const compendium = await inspectPreview(entry.preview, activeInspectionRuntime);
      refreshed.push(Object.freeze({
        ...entry,
        preview: Object.freeze({ ...entry.preview, compendium })
      }));
    }
    this.#entries = refreshed;
    return this.entries;
  }

  async #readFile(file, runtime, inspectionRuntime, signature) {
    const id = `payload-${++this.#sequence}`;
    const base = {
      id,
      signature,
      fileName: String(file?.name ?? `arquivo-${this.#sequence}.json`),
      fileSize: Number(file?.size ?? 0),
      fileSizeLabel: formatBytes(file?.size),
      lastModified: Number(file?.lastModified ?? 0) || null
    };

    try {
      if (typeof file?.text !== "function") throw new Error("O navegador não forneceu acesso ao conteúdo do arquivo.");
      const raw = String(await file.text()).replace(/^\uFEFF/, "").trim();
      if (!raw) throw new Error("O arquivo JSON está vazio.");
      const payload = JSON.parse(raw);
      const preview = previewPayload(payload, runtime);
      const compendium = await inspectPreview(preview, inspectionRuntime);
      return Object.freeze({ ...base, preview: Object.freeze({ ...preview, compendium }) });
    } catch (error) {
      const reason = error instanceof SyntaxError
        ? `JSON malformado: ${error.message}`
        : String(error?.message ?? error ?? "Falha desconhecida ao ler o arquivo.");
      return Object.freeze({ ...base, preview: readErrorPreview(reason) });
    }
  }

  summary() {
    const entries = this.#entries;
    const valid = entries.filter(entry => entry.preview.valid).length;
    const invalid = entries.length - valid;
    const warnings = entries.filter(entry => entry.preview.valid && entry.preview.warnings?.length).length;
    const totalWarnings = entries.reduce((sum, entry) => sum + (entry.preview.warnings?.length ?? 0), 0);
    const totalErrors = entries.reduce((sum, entry) => sum + (entry.preview.errors?.length ?? 0), 0);
    const contentCounts = {};
    for (const entry of entries) contentCounts[entry.preview.type] = (contentCounts[entry.preview.type] ?? 0) + 1;

    const inspected = entries.filter(entry => entry.preview.valid && entry.preview.compendium).length;
    const inspectionUnavailable = entries.filter(entry => entry.preview.valid && entry.preview.compendium?.available === false).length;
    const documents = entries.reduce((sum, entry) => sum + (entry.preview.compendium?.available ? Number(entry.preview.compendium.total ?? 0) : 0), 0);
    const create = entries.reduce((sum, entry) => sum + (entry.preview.compendium?.available ? Number(entry.preview.compendium.create ?? 0) : 0), 0);
    const update = entries.reduce((sum, entry) => sum + (entry.preview.compendium?.available ? Number(entry.preview.compendium.update ?? 0) : 0), 0);
    const diffReady = valid > 0 && inspected === valid && inspectionUnavailable === 0;
    const executionBlocked = entries.filter(entry => entry.preview?.valid && entry.preview?.executable === false).length;
    const executable = entries.filter(entry => entry.preview?.valid && entry.preview?.executable !== false && entry.preview?.payload && entry.preview?.compendium?.available).length;

    const canImport = entries.length > 0 && valid > 0 && invalid === 0 && diffReady && executionBlocked === 0;

    return Object.freeze({
      files: entries.length,
      valid,
      invalid,
      warnings,
      totalWarnings,
      totalErrors,
      allValid: entries.length > 0 && invalid === 0,
      contentCounts: Object.freeze(contentCounts),
      inspected,
      inspectionUnavailable,
      diffReady,
      executionBlocked,
      executable,
      canImport,
      documents,
      create,
      update
    });
  }

  context() {
    const summary = this.summary();
    return {
      empty: this.empty,
      summary,
      entries: this.#entries.map(entry => ({
        id: entry.id,
        fileName: entry.fileName,
        fileSizeLabel: entry.fileSizeLabel,
        ...entry.preview,
        payload: undefined
      }))
    };
  }
}
