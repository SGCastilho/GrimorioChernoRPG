import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";

export const RACE_BUILD_SCHEMA = "grimorio-foundry-race-build-bundle";
export const RACE_BUILD_SCHEMA_VERSION = 1;
export const RACE_BUILD_PROFILE_ID = "foundry13-dnd5e533-grimorio-race-build-v1";
export const RACE_BUILD_KIND = "race-build";
export const RACE_BUILD_MIN_IMPORTER_LINE = "0.13.x+";

const REQUIRED_TOP_LEVEL = Object.freeze([
  "schema", "schemaVersion", "kind", "profile", "identity", "source",
  "selection", "resolved", "readiness", "foundryPlan"
]);

const FEATURE_BUCKETS = Object.freeze([
  "core", "subrace", "legacy", "mixed", "heritage", "secondaryHeritage",
  "bloodline", "extraLegacy", "mutations", "automaticSecondary"
]);

const FORBIDDEN_KEYS = new Set([
  "__proto__", "prototype", "constructor", "system", "effects", "flags",
  "changes", "documentData", "script", "macro", "hook", "hooks", "eval"
]);

function asArray(value) { return Array.isArray(value) ? value : []; }
function text(value) { return String(value ?? "").trim(); }
function object(value) { return Boolean(value && typeof value === "object" && !Array.isArray(value)); }
function versionMajor(version) {
  const match = String(version ?? "").match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (!object(value)) return value;
  return Object.keys(value).sort().reduce((out, key) => {
    out[key] = canonicalize(value[key]);
    return out;
  }, {});
}

function stableStringify(value) { return JSON.stringify(canonicalize(value)); }
function fnv1a32(value, seed) {
  let hash = seed >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash >>> 0;
}
function hex32(value) { return (value >>> 0).toString(16).padStart(8, "0"); }
export function raceBuildStableHash(value) {
  const serialized = stableStringify(value);
  return `rb1-${hex32(fnv1a32(serialized, 0x811c9dc5))}${hex32(fnv1a32(serialized, 0x9e3779b9))}`;
}

function inspectSafety(value, path, errors, depth = 0) {
  if (depth > 12) {
    errors.push(`${path || "bundle"} excede a profundidade máxima permitida pelo contrato racial.`);
    return;
  }
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((entry, index) => inspectSafety(entry, `${path}[${index}]`, errors, depth + 1));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (FORBIDDEN_KEYS.has(key)) errors.push(`Chave Foundry/arbitrária proibida no transporte racial: ${path ? `${path}.` : ""}${key}.`);
    inspectSafety(child, path ? `${path}.${key}` : key, errors, depth + 1);
  }
}

function validateFeature(feature, bucket, index, errors) {
  const prefix = `resolved.features.${bucket}[${index}]`;
  if (!object(feature)) {
    errors.push(`${prefix} precisa ser um objeto de característica racial.`);
    return;
  }
  if (!text(feature.key)) errors.push(`${prefix}.key é obrigatório.`);
  if (!text(feature.name)) errors.push(`${prefix}.name é obrigatório.`);
  if (!text(feature.role)) errors.push(`${prefix}.role é obrigatório.`);
  if (!object(feature.owner) || !text(feature.owner.raceId)) errors.push(`${prefix}.owner.raceId é obrigatório.`);
  if (!object(feature.source)) errors.push(`${prefix}.source precisa preservar a proveniência.`);
}

function contentHashBasis(bundle) {
  const primary = bundle?.resolved?.primaryRace ?? {};
  const subrace = bundle?.resolved?.subrace ?? null;
  const secondary = bundle?.resolved?.secondaryRace ?? null;
  return {
    race: {
      id: primary.grimorioId,
      name: primary.name,
      originalName: primary.originalName,
      abilityScore: primary.abilityScore,
      meta: primary.meta
    },
    subrace: subrace ? {
      id: subrace.grimorioId,
      name: subrace.name,
      originalName: subrace.originalName,
      ability: subrace.ability,
      bloodlineTrait: subrace.bloodlineTrait || null
    } : null,
    secondaryRace: secondary ? {
      id: secondary.grimorioId,
      name: secondary.name,
      originalName: secondary.originalName
    } : null,
    features: bundle?.resolved?.features
  };
}

export function isRaceBuildBundle(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && value.schema === RACE_BUILD_SCHEMA);
}

export function validateRaceBuildBundle(bundle, runtime = {}) {
  const errors = [];
  const warnings = [];

  if (!object(bundle)) {
    errors.push("O arquivo não contém um objeto JSON de Race Build Bundle.");
    return { ok: false, errors, warnings };
  }

  for (const key of REQUIRED_TOP_LEVEL) if (!(key in bundle)) errors.push(`Campo obrigatório ausente no Race Build Bundle: ${key}.`);
  if (bundle.schema !== RACE_BUILD_SCHEMA) errors.push(`Schema racial incompatível: esperado ${RACE_BUILD_SCHEMA}.`);
  if (Number(bundle.schemaVersion) !== RACE_BUILD_SCHEMA_VERSION) errors.push(`Versão do schema racial incompatível: esperado ${RACE_BUILD_SCHEMA_VERSION}.`);
  if (bundle.kind !== RACE_BUILD_KIND) errors.push(`kind racial incompatível: esperado ${RACE_BUILD_KIND}.`);
  if (bundle.profile?.id !== RACE_BUILD_PROFILE_ID) errors.push(`Perfil racial incompatível: esperado ${RACE_BUILD_PROFILE_ID}.`);
  if (bundle.profile?.dnd5eVersion !== TARGET_DND5E) errors.push(`Race Build gerado para DnD5e ${bundle.profile?.dnd5eVersion ?? "?"}; esperado ${TARGET_DND5E}.`);
  if (bundle.profile?.foundryVersion && bundle.profile.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Race Build gerado para Foundry ${bundle.profile.foundryVersion}; perfil homologado: ${TARGET_FOUNDRY}.`);
  if (bundle.profile?.consumer !== "grimorio-importer") errors.push("Race Build não declara grimorio-importer como consumidor.");

  const identity = bundle.identity ?? {};
  const selection = bundle.selection ?? {};
  const primary = bundle.resolved?.primaryRace ?? null;
  const subrace = bundle.resolved?.subrace ?? null;
  const secondary = bundle.resolved?.secondaryRace ?? null;

  for (const key of ["grimorioId", "selectionHash", "contentHash", "primaryRaceId"]) {
    if (!text(identity[key])) errors.push(`identity.${key} é obrigatório.`);
  }
  if (!primary || !text(primary.grimorioId) || !text(primary.name)) errors.push("resolved.primaryRace está incompleta.");
  if (text(identity.primaryRaceId) !== text(selection.primaryRaceId)) errors.push("identity.primaryRaceId e selection.primaryRaceId não coincidem.");
  if (text(identity.primaryRaceId) !== text(primary?.grimorioId)) errors.push("identity.primaryRaceId e resolved.primaryRace.grimorioId não coincidem.");

  const identitySubrace = identity.subraceId ?? null;
  const selectionSubrace = selection.subraceId ?? null;
  const resolvedSubrace = subrace?.grimorioId ?? null;
  if (identitySubrace !== selectionSubrace || identitySubrace !== resolvedSubrace) errors.push("IDs de subraça divergem entre identity, selection e resolved.");

  const identitySecondary = identity.secondaryRaceId ?? null;
  const selectionSecondary = selection.secondaryRaceId ?? null;
  const resolvedSecondary = secondary?.grimorioId ?? null;
  if (identitySecondary !== selectionSecondary || identitySecondary !== resolvedSecondary) errors.push("IDs da raça secundária divergem entre identity, selection e resolved.");
  if (Boolean(selection.mixed) !== Boolean(identitySecondary)) errors.push("selection.mixed precisa corresponder à presença de uma raça secundária.");

  const expectedSelectionHash = raceBuildStableHash(selection);
  if (text(identity.selectionHash) && identity.selectionHash !== expectedSelectionHash) errors.push(`selectionHash inválido: esperado ${expectedSelectionHash}.`);
  const expectedSubraceLabel = identitySubrace || "base";
  const expectedGrimorioId = `race-build:${identity.primaryRaceId}:${expectedSubraceLabel}:${identity.selectionHash}`;
  if (text(identity.grimorioId) && identity.grimorioId !== expectedGrimorioId) errors.push(`grimorioId racial inválido: esperado ${expectedGrimorioId}.`);

  if (!object(bundle.resolved?.features)) errors.push("resolved.features é obrigatório.");
  const featureKeys = new Set();
  for (const bucket of FEATURE_BUCKETS) {
    const items = bundle.resolved?.features?.[bucket];
    if (!Array.isArray(items)) {
      errors.push(`resolved.features.${bucket} precisa ser uma lista.`);
      continue;
    }
    items.forEach((feature, index) => {
      validateFeature(feature, bucket, index, errors);
      const key = text(feature?.key);
      if (!key) return;
      if (featureKeys.has(key)) errors.push(`Característica racial duplicada no build: ${key}.`);
      featureKeys.add(key);
    });
  }

  const expectedContentHash = raceBuildStableHash(contentHashBasis(bundle));
  if (text(identity.contentHash) && identity.contentHash !== expectedContentHash) errors.push(`contentHash inválido: esperado ${expectedContentHash}.`);

  if (bundle.readiness?.canExport !== true || bundle.readiness?.exportEnabled !== true) errors.push("O Race Build não foi liberado pelo motor de elegibilidade/exportação do Grimório.");
  if (bundle.readiness?.status !== "ready") errors.push(`Race Build precisa estar em readiness.status=ready; encontrado ${bundle.readiness?.status ?? "?"}.`);
  if (asArray(bundle.readiness?.errors).length) errors.push("Race Build exportado contém erros de elegibilidade registrados.");
  if (!["awaiting-importer", "preflight-only", "materialization-supported"].includes(bundle.foundryPlan?.status)) errors.push("foundryPlan.status precisa ser awaiting-importer, preflight-only ou materialization-supported.");
  if (bundle.foundryPlan?.itemType !== "race") errors.push("foundryPlan.itemType precisa ser race.");
  if (bundle.foundryPlan?.consumer !== "grimorio-importer") errors.push("foundryPlan.consumer precisa ser grimorio-importer.");

  inspectSafety(bundle, "", errors);

  if (runtime.systemId && runtime.systemId !== "dnd5e") errors.push(`Sistema ativo incompatível: ${runtime.systemId}.`);
  if (runtime.systemVersion && runtime.systemVersion !== TARGET_DND5E) errors.push(`DnD5e incompatível: esperado ${TARGET_DND5E}, encontrado ${runtime.systemVersion}.`);
  if (runtime.foundryVersion) {
    const major = versionMajor(runtime.foundryVersion);
    if (major !== 13) errors.push(`Foundry incompatível: a linha racial é exclusiva da versão 13 (encontrado ${runtime.foundryVersion}).`);
    else if (runtime.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Perfil racial homologado para Foundry ${TARGET_FOUNDRY}; encontrado ${runtime.foundryVersion}.`);
  }

  if (!errors.length) warnings.push("RB-8 valida e materializa Race Builds e habilita aplicação ao Actor pelo AdvancementManager; a homologação in-app permanece obrigatória antes de RC/Stable.");
  return { ok: errors.length === 0, errors: [...new Set(errors)], warnings: [...new Set(warnings)], calculated: { features: featureKeys.size, pendingFoundryChoices: asArray(bundle.readiness?.pendingFoundryChoices).length } };
}

export function raceBuildValidatorSupport() {
  return Object.freeze({
    phase: "RB-8",
    schema: RACE_BUILD_SCHEMA,
    schemaVersion: RACE_BUILD_SCHEMA_VERSION,
    profileId: RACE_BUILD_PROFILE_ID,
    minimumImporterLine: RACE_BUILD_MIN_IMPORTER_LINE,
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    eligibilityRequired: true,
    hashValidation: ["selectionHash", "contentHash", "grimorioId"],
    transportSafety: true,
    materialization: true,
    actorApplication: false
  });
}
