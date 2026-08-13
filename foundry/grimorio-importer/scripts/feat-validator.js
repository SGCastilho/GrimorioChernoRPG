import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";

export const FEAT_BUNDLE_SCHEMA = "grimorio-foundry-feat-bundle";
export const FEAT_BUNDLE_SCHEMA_VERSION = 1;
export const FEAT_BUNDLE_PROFILE_ID = "foundry13-dnd5e533-grimorio-feat-bundle-v1";
export const FEAT_PACKAGE_SCHEMA = "grimorio-foundry-feat-package";
export const FEAT_PACKAGE_SCHEMA_VERSION = 1;
export const FEAT_PACKAGE_PROFILE_ID = "foundry13-dnd5e533-grimorio-feat-package-v1";
export const MIN_FEAT_IMPORTER_VERSION = "0.10.0";

function asArray(value) { return Array.isArray(value) ? value : []; }
function versionMajor(version) { const match=String(version ?? "").match(/^(\d+)/); return match ? Number(match[1]) : null; }

export function isFeatBundle(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && value.schema === FEAT_BUNDLE_SCHEMA);
}

export function isFeatPackage(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && value.schema === FEAT_PACKAGE_SCHEMA);
}

function validateRuntime(runtime, errors, warnings) {
  if (runtime.systemId && runtime.systemId !== "dnd5e") errors.push(`Sistema ativo incompatível: ${runtime.systemId}.`);
  if (runtime.systemVersion && runtime.systemVersion !== TARGET_DND5E) errors.push(`DnD5e incompatível com este importador: esperado ${TARGET_DND5E}, encontrado ${runtime.systemVersion}.`);
  if (runtime.foundryVersion) {
    const major=versionMajor(runtime.foundryVersion);
    if (major !== 13) errors.push(`Foundry incompatível: este importador é exclusivo da versão 13 (encontrado ${runtime.foundryVersion}).`);
    else if (runtime.foundryVersion !== TARGET_FOUNDRY) warnings.push(`O perfil foi homologado para Foundry ${TARGET_FOUNDRY}; encontrado ${runtime.foundryVersion}.`);
  }
}

export function validateFeatBundle(bundle, runtime = {}) {
  const errors=[]; const warnings=[];
  if (!bundle || typeof bundle !== "object" || Array.isArray(bundle)) {
    errors.push("O arquivo não contém um objeto JSON de bundle de Talento.");
    return {ok:false,errors,warnings};
  }
  if (bundle.schema !== FEAT_BUNDLE_SCHEMA) errors.push(`Schema incompatível: esperado ${FEAT_BUNDLE_SCHEMA}.`);
  if (bundle.schemaVersion !== FEAT_BUNDLE_SCHEMA_VERSION) errors.push(`Versão de schema incompatível: esperado ${FEAT_BUNDLE_SCHEMA_VERSION}.`);
  if (bundle.kind !== "feat") errors.push('O bundle de Talento precisa possuir kind "feat".');
  if (bundle.profile?.id !== FEAT_BUNDLE_PROFILE_ID) errors.push(`Perfil incompatível: esperado ${FEAT_BUNDLE_PROFILE_ID}.`);
  if (!bundle.identity?.grimorioId || !bundle.identity?.identifier || !bundle.identity?.name) errors.push("Identidade incompleta: grimorioId, identifier e name são obrigatórios.");
  if (!bundle.source?.sourceId || !bundle.source?.title) errors.push("Fonte do Talento incompleta.");
  if (!Number.isFinite(Number(bundle.source?.page))) errors.push("Página de origem do Talento ausente ou inválida.");
  if (!bundle.feat || !String(bundle.feat.description ?? "").trim()) errors.push("Descrição do Talento ausente.");
  if (!Array.isArray(bundle.feat?.prerequisites)) errors.push("prerequisites precisa ser um array.");
  if (!Array.isArray(bundle.feat?.choices)) errors.push("choices precisa ser um array.");
  if (bundle.feat?.foundryPlan?.itemType && bundle.feat.foundryPlan.itemType !== "feat") errors.push('foundryPlan.itemType precisa ser "feat".');
  if (bundle.feat?.prerequisite && !asArray(bundle.feat?.prerequisites).length) warnings.push("Há pré-requisito textual sem representação estruturada; o texto será preservado.");
  if (bundle.profile?.foundryVersion && bundle.profile.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Bundle gerado para Foundry ${bundle.profile.foundryVersion}; perfil do módulo: ${TARGET_FOUNDRY}.`);
  if (bundle.profile?.dnd5eVersion && bundle.profile.dnd5eVersion !== TARGET_DND5E) errors.push(`Bundle gerado para DnD5e ${bundle.profile.dnd5eVersion}; esperado ${TARGET_DND5E}.`);
  validateRuntime(runtime,errors,warnings);
  return {ok:errors.length===0,errors,warnings:[...new Set(warnings)]};
}

export function validateFeatPackage(pkg, runtime = {}) {
  const errors=[]; const warnings=[]; const bundleValidations=[];
  if (!pkg || typeof pkg !== "object" || Array.isArray(pkg)) {
    errors.push("O arquivo não contém um objeto JSON de pacote de Talentos.");
    return {ok:false,errors,warnings,bundleValidations};
  }
  if (pkg.schema !== FEAT_PACKAGE_SCHEMA) errors.push(`Schema incompatível: esperado ${FEAT_PACKAGE_SCHEMA}.`);
  if (pkg.schemaVersion !== FEAT_PACKAGE_SCHEMA_VERSION) errors.push(`Versão de pacote incompatível: esperado ${FEAT_PACKAGE_SCHEMA_VERSION}.`);
  if (pkg.profile?.id !== FEAT_PACKAGE_PROFILE_ID) errors.push(`Perfil de pacote incompatível: esperado ${FEAT_PACKAGE_PROFILE_ID}.`);
  if (!pkg.identity?.id || !pkg.identity?.name || !pkg.identity?.scope) errors.push("Identidade do pacote de Talentos incompleta.");
  if (!["source-catalog","full-feat-catalog"].includes(pkg.identity?.scope)) errors.push(`Escopo de pacote de Talentos não suportado: ${pkg.identity?.scope ?? "ausente"}.`);
  if (!Array.isArray(pkg.bundles) || !pkg.bundles.length) errors.push("O pacote não contém Talentos.");
  if (pkg.profile?.foundryVersion && pkg.profile.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Pacote gerado para Foundry ${pkg.profile.foundryVersion}; perfil do módulo: ${TARGET_FOUNDRY}.`);
  if (pkg.profile?.dnd5eVersion && pkg.profile.dnd5eVersion !== TARGET_DND5E) errors.push(`Pacote gerado para DnD5e ${pkg.profile.dnd5eVersion}; esperado ${TARGET_DND5E}.`);

  const ids=new Set();
  for (const [index,bundle] of asArray(pkg.bundles).entries()) {
    const validation=validateFeatBundle(bundle,runtime); bundleValidations.push(validation);
    const label=bundle?.identity?.name ?? `Talento ${index+1}`;
    for (const error of validation.errors) errors.push(`${label}: ${error}`);
    for (const warning of validation.warnings) warnings.push(`${label}: ${warning}`);
    const key=bundle?.identity?.grimorioId;
    if (key && ids.has(key)) errors.push(`Talento duplicado no pacote: ${key}.`);
    if (key) ids.add(key);
  }
  const calculated={
    bundles:asArray(pkg.bundles).length,
    feats:asArray(pkg.bundles).length,
    sources:new Set(asArray(pkg.bundles).map(b=>b.source?.sourceId).filter(Boolean)).size,
    prerequisites:asArray(pkg.bundles).filter(b=>asArray(b.feat?.prerequisites).length).length,
    repeatable:asArray(pkg.bundles).filter(b=>b.feat?.repeatable===true).length
  };
  for (const [key,expected] of Object.entries(calculated)) if (Number(pkg.summary?.[key]) !== expected) errors.push(`Resumo do pacote inconsistente em ${key}: esperado ${expected}, encontrado ${pkg.summary?.[key]}.`);
  return {ok:errors.length===0,errors,warnings:[...new Set(warnings)],calculated,bundleValidations};
}

export function featSupport() {
  return Object.freeze({
    bundleSchema: FEAT_BUNDLE_SCHEMA,
    bundleSchemaVersion: FEAT_BUNDLE_SCHEMA_VERSION,
    bundleProfileId: FEAT_BUNDLE_PROFILE_ID,
    packageSchema: FEAT_PACKAGE_SCHEMA,
    packageSchemaVersion: FEAT_PACKAGE_SCHEMA_VERSION,
    packageProfileId: FEAT_PACKAGE_PROFILE_ID,
    minimumImporterVersion: MIN_FEAT_IMPORTER_VERSION,
    scopes: ["source-catalog","full-feat-catalog"],
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    itemType: "feat",
    compendiumOnly: true,
    destinationPack: "grimorio-importer.grimorio-feats",
    reimportByFlags: true,
    automationPolicy: "conservative-description-first"
  });
}
