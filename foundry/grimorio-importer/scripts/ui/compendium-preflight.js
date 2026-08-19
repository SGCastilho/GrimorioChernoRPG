import { isBundle, isPackage } from "../package-validator.js";
import { isFeatBundle, isFeatPackage } from "../feat-validator.js";
import { isRaceBuildBundle } from "../race-validator.js";
import { plannedRaceBuildDocuments, raceBuildDisplayName } from "../race-support.js";
import { plannedBundleDocuments } from "../materializer.js";
import { MODULE_ID, PACKS, defaultPackRuntime } from "../pack-storage.js";

const MAX_DISPLAY_DOCUMENTS = 80;

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function docFlag(doc, key) {
  if (typeof doc?.getFlag === "function") return doc.getFlag(MODULE_ID, key);
  return doc?.flags?.[MODULE_ID]?.[key] ?? doc?._source?.flags?.[MODULE_ID]?.[key];
}

function featDocument(bundle) {
  const grimorioId = String(bundle?.identity?.grimorioId ?? "");
  return {
    key: `feats:feat:${grimorioId}`,
    packKey: "feats",
    role: "feat",
    grimorioId,
    featureKey: "",
    name: String(bundle?.identity?.name ?? ""),
    typeLabel: "Talento"
  };
}

function bundlePlans(bundle) {
  if (isFeatBundle(bundle)) return [featDocument(bundle)];
  if (isRaceBuildBundle(bundle)) return plannedRaceBuildDocuments(bundle);
  if (isBundle(bundle)) return plannedBundleDocuments(bundle);
  return [];
}

export function plannedPayloadDocuments(payload) {
  let bundles = [];
  if (isPackage(payload) || isFeatPackage(payload)) bundles = asArray(payload.bundles);
  else if (isBundle(payload) || isFeatBundle(payload) || isRaceBuildBundle(payload)) bundles = [payload];
  else return [];

  const rows = [];
  for (const bundle of bundles) {
    const bundleId = String(bundle?.identity?.grimorioId ?? bundle?.identity?.id ?? "");
    const bundleName = isRaceBuildBundle(bundle) ? raceBuildDisplayName(bundle) : String(bundle?.identity?.name ?? "Conteúdo sem nome");
    const bundleKind = isFeatBundle(bundle) ? "feat" : isRaceBuildBundle(bundle) ? "race-build" : String(bundle?.kind ?? "");
    for (const document of bundlePlans(bundle)) {
      rows.push({
        ...document,
        bundleId,
        bundleName,
        bundleKind
      });
    }
  }
  return rows;
}

function sameManagedDocument(doc, plan) {
  if (docFlag(doc, "documentRole") !== plan.role) return false;
  if (docFlag(doc, "grimorioId") !== plan.grimorioId) return false;
  if (plan.role === "feature") return docFlag(doc, "featureKey") === plan.featureKey;
  return true;
}

function stateView(createCount, updateCount) {
  if (createCount > 0 && updateCount > 0) {
    return {
      state: "mixed",
      stateLabel: "Criação + atualização",
      stateIcon: "fa-solid fa-code-compare"
    };
  }
  if (createCount > 0) {
    return {
      state: "create",
      stateLabel: "Somente conteúdo novo",
      stateIcon: "fa-solid fa-circle-plus"
    };
  }
  return {
    state: "update",
    stateLabel: "Somente atualizações",
    stateIcon: "fa-solid fa-rotate"
  };
}

function documentState(plan, existing) {
  const updating = Boolean(existing);
  return Object.freeze({
    ...plan,
    packLabel: PACKS[plan.packKey]?.label ?? plan.packKey,
    packCollection: PACKS[plan.packKey]?.collection ?? plan.packKey,
    status: updating ? "update" : "create",
    isUpdate: updating,
    isCreate: !updating,
    statusLabel: updating ? "ATUALIZAR" : "NOVO",
    statusIcon: updating ? "fa-solid fa-rotate" : "fa-solid fa-circle-plus",
    existingId: updating ? String(existing?.id ?? "") : "",
    existingUuid: updating ? String(existing?.uuid ?? "") : "",
    existingName: updating ? String(existing?.name ?? existing?._source?.name ?? "") : ""
  });
}

function bundleSummaries(documents) {
  const grouped = new Map();
  for (const document of documents) {
    const key = document.bundleId || `${document.bundleKind}:${document.bundleName}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        id: key,
        name: document.bundleName,
        kind: document.bundleKind,
        total: 0,
        create: 0,
        update: 0
      });
    }
    const row = grouped.get(key);
    row.total += 1;
    row[document.status] += 1;
  }
  return [...grouped.values()].map(row => Object.freeze(row));
}

export function defaultCompendiumInspectionRuntime() {
  return defaultPackRuntime();
}

export async function createCompendiumInspectionSnapshot(runtime = defaultCompendiumInspectionRuntime()) {
  const available = new Map();
  const documents = new Map();
  for (const key of Object.keys(PACKS)) {
    let packAvailable = true;
    if (typeof runtime.getPack === "function") packAvailable = Boolean(runtime.getPack(key));
    if (!packAvailable) {
      available.set(key, false);
      documents.set(key, []);
      continue;
    }
    try {
      const docs = typeof runtime.listPackItems === "function" ? await runtime.listPackItems(key) : [];
      available.set(key, true);
      documents.set(key, asArray(docs));
    } catch (_error) {
      available.set(key, false);
      documents.set(key, []);
    }
  }
  return Object.freeze({
    snapshot: true,
    getPack(key) { return available.get(key) ? { collection: PACKS[key]?.collection ?? key } : null; },
    async listPackItems(key) {
      if (!available.get(key)) throw new Error(`Compêndio indisponível: ${PACKS[key]?.label ?? key}.`);
      return [...(documents.get(key) ?? [])];
    }
  });
}

export async function inspectPayloadCompendiums(payload, runtime = defaultCompendiumInspectionRuntime()) {
  const planned = plannedPayloadDocuments(payload);
  const requiredKeys = unique(planned.map(document => document.packKey));
  if (!planned.length) {
    return Object.freeze({
      available: false,
      state: "unsupported",
      stateLabel: "Sem plano de armazenamento",
      stateIcon: "fa-solid fa-circle-question",
      total: 0,
      create: 0,
      update: 0,
      packsChecked: 0,
      missingPacks: [],
      errors: ["O payload não possui documentos importáveis reconhecidos para inspeção dos compêndios."],
      documents: [],
      displayDocuments: [],
      documentOverflow: 0,
      bundles: [],
      writeOperations: false
    });
  }

  const missingPacks = [];
  const packDocs = new Map();
  const packRows = [];
  for (const key of requiredKeys) {
    const spec = PACKS[key];
    let available = true;
    if (typeof runtime.getPack === "function") available = Boolean(runtime.getPack(key));
    if (!available) {
      missingPacks.push(key);
      packRows.push({ key, label: spec?.label ?? key, collection: spec?.collection ?? key, available: false, documents: 0 });
      continue;
    }
    try {
      const docs = typeof runtime.listPackItems === "function" ? await runtime.listPackItems(key) : [];
      const list = asArray(docs);
      packDocs.set(key, list);
      packRows.push({ key, label: spec?.label ?? key, collection: spec?.collection ?? key, available: true, documents: list.length });
    } catch (error) {
      missingPacks.push(key);
      packRows.push({ key, label: spec?.label ?? key, collection: spec?.collection ?? key, available: false, documents: 0 });
    }
  }

  if (missingPacks.length) {
    const labels = missingPacks.map(key => PACKS[key]?.label ?? key);
    return Object.freeze({
      available: false,
      state: "unavailable",
      stateLabel: "Compêndio indisponível",
      stateIcon: "fa-solid fa-box-open",
      total: planned.length,
      create: 0,
      update: 0,
      packsChecked: requiredKeys.length - missingPacks.length,
      missingPacks: [...missingPacks],
      packRows: Object.freeze(packRows),
      errors: [`Não foi possível consultar: ${labels.join(", ")}. Reinstale/atualize o módulo antes de importar.`],
      documents: [],
      displayDocuments: [],
      documentOverflow: 0,
      bundles: [],
      writeOperations: false
    });
  }

  const documents = planned.map(plan => {
    const existing = packDocs.get(plan.packKey)?.find(doc => sameManagedDocument(doc, plan)) ?? null;
    return documentState(plan, existing);
  });
  const create = documents.filter(document => document.status === "create").length;
  const update = documents.length - create;
  const state = stateView(create, update);
  return Object.freeze({
    available: true,
    ...state,
    total: documents.length,
    create,
    update,
    packsChecked: requiredKeys.length,
    missingPacks: [],
    packRows: Object.freeze(packRows),
    errors: [],
    documents: Object.freeze(documents),
    displayDocuments: Object.freeze(documents.slice(0, MAX_DISPLAY_DOCUMENTS)),
    documentOverflow: Math.max(0, documents.length - MAX_DISPLAY_DOCUMENTS),
    bundles: Object.freeze(bundleSummaries(documents)),
    writeOperations: false
  });
}

export function compendiumPreflightSupport() {
  return Object.freeze({
    phase: "RB-8",
    writeOperations: false,
    identityMatching: "flags.grimorio-importer.documentRole + grimorioId (+ featureKey para Características de classe; key estável para Características Raciais)",
    destinationPacks: Object.values(PACKS).map(pack => pack.collection),
    statuses: ["create", "update"],
    packageSummary: true,
    documentPreviewLimit: MAX_DISPLAY_DOCUMENTS,
    refreshable: true,
    snapshotReads: true,
    raceBuildPreflightOnly: false
  });
}
