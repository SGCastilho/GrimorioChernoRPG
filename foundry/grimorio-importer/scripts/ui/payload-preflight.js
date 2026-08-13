import { validateBundle, TARGET_DND5E, TARGET_FOUNDRY } from "../bundle-validator.js";
import { validatePackage, isPackage, isBundle } from "../package-validator.js";
import { validateFeatBundle, validateFeatPackage, isFeatBundle, isFeatPackage } from "../feat-validator.js";
import { PACKS } from "../pack-storage.js";

const UNKNOWN_ERROR = "JSON não reconhecido: esperado bundle ou pacote Foundry de classe/subclasse ou Talento do Grimório.";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function runtimeInfo(runtime = {}) {
  return {
    foundryVersion: String(runtime.foundryVersion ?? globalThis.game?.version ?? globalThis.game?.release?.version ?? ""),
    systemId: String(runtime.systemId ?? globalThis.game?.system?.id ?? ""),
    systemVersion: String(runtime.systemVersion ?? globalThis.game?.system?.version ?? "")
  };
}

function truncateMessages(messages, limit = 8) {
  const all = unique(asArray(messages).map(message => String(message ?? "").trim()).filter(Boolean));
  return {
    visible: all.slice(0, limit),
    overflow: Math.max(0, all.length - limit),
    total: all.length,
    all
  };
}

function destination(keys) {
  return unique(keys).map(key => ({
    key,
    collection: PACKS[key]?.collection ?? key,
    label: PACKS[key]?.label ?? key
  }));
}

function count(label, value, icon = "fa-solid fa-hashtag") {
  return { label, value: Number(value ?? 0), icon };
}

function textExcerpt(value, limit = 260) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}

function sourceView(source = {}) {
  const title = String(source.shortTitle ?? source.title ?? "").trim();
  const page = Number.isFinite(Number(source.page)) ? Number(source.page) : null;
  const pages = String(source.pages ?? "").trim();
  return { title, page, pages };
}

function packageSources(payload) {
  const titles = unique(asArray(payload?.bundles).map(bundle => bundle?.source?.shortTitle ?? bundle?.source?.title));
  const ids = unique(asArray(payload?.bundles).map(bundle => bundle?.source?.sourceId));
  if (titles.length === 1) return { title: titles[0], ids };
  if (titles.length > 1) return { title: `${titles.length} fontes`, ids };
  if (ids.length === 1) return { title: ids[0], ids };
  if (ids.length > 1) return { title: `${ids.length} fontes`, ids };
  return { title: "", ids: [] };
}

function classBundlePreview(payload, validation) {
  const isClass = payload.kind === "class";
  const source = sourceView(payload.source);
  const featureCount = asArray(payload.features).length;
  const parentName = String(payload.parentClass?.name ?? payload.parentClass?.identifier ?? "").trim();
  return {
    family: "class-content",
    type: isClass ? "class-bundle" : "subclass-bundle",
    typeLabel: isClass ? "Classe" : "Subclasse",
    icon: isClass ? "fa-solid fa-shield-halved" : "fa-solid fa-diagram-project",
    title: String(payload.identity?.name ?? "Bundle sem nome"),
    identifier: String(payload.identity?.grimorioId ?? payload.identity?.identifier ?? ""),
    source,
    subtitle: !isClass && parentName ? `Classe-base: ${parentName}` : source.title,
    excerpt: textExcerpt(isClass ? payload.class?.description : payload.subclass?.description),
    counts: [count("Características", featureCount, "fa-solid fa-puzzle-piece")],
    details: [
      ...(!isClass && parentName ? [{ label: "Classe-base", value: parentName }] : []),
      ...(isClass && payload.class?.hitDice?.raw ? [{ label: "Dado de Vida", value: String(payload.class.hitDice.raw) }] : []),
      ...(source.page ? [{ label: "Página", value: String(source.page) }] : [])
    ],
    destinations: destination(isClass ? ["classes", "features"] : ["subclasses", "features"]),
    validation
  };
}

function classPackagePreview(payload, validation) {
  const calculated = validation.calculated ?? {};
  const source = packageSources(payload);
  const scope = String(payload.identity?.scope ?? "");
  return {
    family: "class-content",
    type: "class-package",
    typeLabel: scope === "full-catalog" ? "Catálogo de Classes" : "Pacote de Classe",
    icon: "fa-solid fa-box-open",
    title: String(payload.identity?.name ?? "Pacote sem nome"),
    identifier: String(payload.identity?.id ?? ""),
    source: { title: source.title, page: null, pages: "" },
    subtitle: source.title || `${calculated.bundles ?? asArray(payload.bundles).length} bundles`,
    excerpt: "",
    counts: [
      count("Bundles", calculated.bundles, "fa-solid fa-layer-group"),
      count("Classes", calculated.classes, "fa-solid fa-shield-halved"),
      count("Subclasses", calculated.subclasses, "fa-solid fa-diagram-project"),
      count("Características", calculated.features, "fa-solid fa-puzzle-piece")
    ],
    details: [
      { label: "Escopo", value: scope || "—" },
      ...(source.ids.length ? [{ label: "Fontes", value: String(source.ids.length) }] : [])
    ],
    destinations: destination([
      ...(Number(calculated.classes ?? 0) > 0 ? ["classes"] : []),
      ...(Number(calculated.subclasses ?? 0) > 0 ? ["subclasses"] : []),
      ...(Number(calculated.features ?? 0) > 0 ? ["features"] : [])
    ]),
    validation
  };
}

function featBundlePreview(payload, validation) {
  const source = sourceView(payload.source);
  const prerequisites = asArray(payload.feat?.prerequisites);
  const choices = asArray(payload.feat?.choices);
  const prerequisite = String(payload.feat?.prerequisite ?? "").trim();
  return {
    family: "feat-content",
    type: "feat-bundle",
    typeLabel: "Talento",
    icon: "fa-solid fa-medal",
    title: String(payload.identity?.name ?? "Talento sem nome"),
    identifier: String(payload.identity?.grimorioId ?? payload.identity?.identifier ?? ""),
    source,
    subtitle: source.title,
    excerpt: textExcerpt(payload.feat?.description),
    counts: [
      count("Pré-requisitos", prerequisites.length, "fa-solid fa-list-check"),
      count("Escolhas", choices.length, "fa-solid fa-code-branch")
    ],
    details: [
      ...(prerequisite ? [{ label: "Pré-requisito", value: prerequisite }] : []),
      { label: "Repetível", value: payload.feat?.repeatable === true ? "Sim" : "Não" },
      ...(source.page ? [{ label: "Página", value: String(source.page) }] : [])
    ],
    destinations: destination(["feats"]),
    validation
  };
}

function featPackagePreview(payload, validation) {
  const calculated = validation.calculated ?? {};
  const source = packageSources(payload);
  const scope = String(payload.identity?.scope ?? "");
  return {
    family: "feat-content",
    type: "feat-package",
    typeLabel: scope === "full-feat-catalog" ? "Catálogo de Talentos" : "Pacote de Talentos",
    icon: "fa-solid fa-medal",
    title: String(payload.identity?.name ?? "Pacote de Talentos"),
    identifier: String(payload.identity?.id ?? ""),
    source: { title: source.title, page: null, pages: "" },
    subtitle: source.title || `${calculated.feats ?? asArray(payload.bundles).length} Talentos`,
    excerpt: "",
    counts: [
      count("Talentos", calculated.feats, "fa-solid fa-medal"),
      count("Fontes", calculated.sources, "fa-solid fa-book"),
      count("Com pré-requisito", calculated.prerequisites, "fa-solid fa-list-check"),
      count("Repetíveis", calculated.repeatable, "fa-solid fa-repeat")
    ],
    details: [{ label: "Escopo", value: scope || "—" }],
    destinations: destination(["feats"]),
    validation
  };
}

function unknownPreview(payload) {
  const validation = { ok: false, errors: [UNKNOWN_ERROR], warnings: [] };
  return {
    family: "unknown",
    type: "unknown",
    typeLabel: "JSON não reconhecido",
    icon: "fa-solid fa-circle-question",
    title: String(payload?.identity?.name ?? payload?.name ?? "Conteúdo desconhecido"),
    identifier: String(payload?.identity?.id ?? payload?.identity?.identifier ?? ""),
    source: { title: "", page: null, pages: "" },
    subtitle: String(payload?.schema ?? "Schema ausente"),
    excerpt: "",
    counts: [],
    details: [],
    destinations: [],
    validation
  };
}

export function classifyPayload(payload) {
  if (isPackage(payload)) return "class-package";
  if (isBundle(payload)) return payload.kind === "subclass" ? "subclass-bundle" : "class-bundle";
  if (isFeatPackage(payload)) return "feat-package";
  if (isFeatBundle(payload)) return "feat-bundle";
  return "unknown";
}

export function previewPayload(payload, runtime = {}) {
  const activeRuntime = runtimeInfo(runtime);
  const type = classifyPayload(payload);
  let preview;

  if (type === "class-package") preview = classPackagePreview(payload, validatePackage(payload, activeRuntime));
  else if (type === "class-bundle" || type === "subclass-bundle") preview = classBundlePreview(payload, validateBundle(payload, activeRuntime));
  else if (type === "feat-package") preview = featPackagePreview(payload, validateFeatPackage(payload, activeRuntime));
  else if (type === "feat-bundle") preview = featBundlePreview(payload, validateFeatBundle(payload, activeRuntime));
  else preview = unknownPreview(payload);

  const errors = truncateMessages(preview.validation?.errors);
  const warnings = truncateMessages(preview.validation?.warnings);
  const valid = Boolean(preview.validation?.ok);
  return Object.freeze({
    ...preview,
    schema: String(payload?.schema ?? ""),
    schemaVersion: payload?.schemaVersion ?? null,
    profileId: String(payload?.profile?.id ?? ""),
    valid,
    state: valid ? (warnings.total ? "warning" : "valid") : "invalid",
    stateLabel: valid ? (warnings.total ? "Válido com avisos" : "Válido") : "Inválido",
    stateIcon: valid ? (warnings.total ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check") : "fa-solid fa-circle-xmark",
    errors: errors.all,
    warnings: warnings.all,
    displayErrors: errors.visible,
    displayWarnings: warnings.visible,
    errorOverflow: errors.overflow,
    warningOverflow: warnings.overflow,
    runtime: Object.freeze({
      ...activeRuntime,
      targetFoundry: TARGET_FOUNDRY,
      targetDnd5e: TARGET_DND5E
    }),
    payload
  });
}

export function preflightSupport() {
  return Object.freeze({
    phase: "0.11-C",
    basePhase: "0.11-B",
    writeOperations: false,
    multipleFiles: true,
    dragAndDrop: true,
    formats: ["class-bundle", "subclass-bundle", "class-package", "feat-bundle", "feat-package"],
    validationBeforeWrite: true,
    compendiumInspection: true,
    createUpdateDiff: true,
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E
  });
}
