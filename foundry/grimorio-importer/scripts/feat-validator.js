import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { validateFeatAutomationPlan, featAutomationSupport } from "./feat-automation.js";

export const FEAT_BUNDLE_SCHEMA = "grimorio-foundry-feat-bundle";
export const FEAT_BUNDLE_SCHEMA_VERSION = 2;
export const FEAT_BUNDLE_PROFILE_ID = "foundry13-dnd5e533-grimorio-feat-bundle-v2";
export const FEAT_PACKAGE_SCHEMA = "grimorio-foundry-feat-package";
export const FEAT_PACKAGE_SCHEMA_VERSION = 2;
export const FEAT_PACKAGE_PROFILE_ID = "foundry13-dnd5e533-grimorio-feat-package-v2";
export const MIN_FEAT_IMPORTER_VERSION = "0.12.0";
export const LEGACY_MIN_FEAT_IMPORTER_VERSION = "0.10.0";
export const SUPPORTED_FEAT_BUNDLE_VERSIONS = Object.freeze([1, 2]);
export const SUPPORTED_FEAT_PACKAGE_VERSIONS = Object.freeze([1, 2]);

const BUNDLE_PROFILE_BY_VERSION = Object.freeze({
  1: "foundry13-dnd5e533-grimorio-feat-bundle-v1",
  2: FEAT_BUNDLE_PROFILE_ID
});
const PACKAGE_PROFILE_BY_VERSION = Object.freeze({
  1: "foundry13-dnd5e533-grimorio-feat-package-v1",
  2: FEAT_PACKAGE_PROFILE_ID
});

function asArray(value) { return Array.isArray(value) ? value : []; }
function versionMajor(version) { const match=String(version ?? "").match(/^(\d+)/); return match ? Number(match[1]) : null; }
function schemaVersion(value) { return Number(value?.schemaVersion); }

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

function validateFeatProfile(container, version, profileMap, label, errors) {
  const expected = profileMap[version];
  if (!expected) return;
  if (container.profile?.id !== expected) errors.push(`${label} incompatível para schema v${version}: esperado ${expected}.`);
}

function calculateAutomationSummary(bundles) {
  const plans = asArray(bundles).map(bundle => bundle?.automation).filter(Boolean);
  return {
    profiles: plans.length,
    full: plans.filter(plan => plan.tier === "full").length,
    partial: plans.filter(plan => plan.tier === "partial").length,
    description: plans.filter(plan => plan.tier === "description").length,
    advancements: plans.reduce((sum, plan) => sum + asArray(plan.advancements).length, 0),
    effects: plans.reduce((sum, plan) => sum + asArray(plan.effects).length, 0),
    activities: plans.reduce((sum, plan) => sum + asArray(plan.activities).length, 0),
    uses: plans.filter(plan => plan.uses).length,
    runtime: plans.reduce((sum, plan) => sum + asArray(plan.runtime).length, 0),
    limitations: plans.reduce((sum, plan) => sum + asArray(plan.limitations).length, 0)
  };
}

export function validateFeatBundle(bundle, runtime = {}) {
  const errors=[]; const warnings=[];
  if (!bundle || typeof bundle !== "object" || Array.isArray(bundle)) {
    errors.push("O arquivo não contém um objeto JSON de bundle de Talento.");
    return {ok:false,errors,warnings};
  }
  if (bundle.schema !== FEAT_BUNDLE_SCHEMA) errors.push(`Schema incompatível: esperado ${FEAT_BUNDLE_SCHEMA}.`);
  const version = schemaVersion(bundle);
  if (!SUPPORTED_FEAT_BUNDLE_VERSIONS.includes(version)) errors.push(`Versão de schema incompatível: suportadas ${SUPPORTED_FEAT_BUNDLE_VERSIONS.join(", ")}; encontrado ${bundle.schemaVersion}.`);
  if (bundle.kind !== "feat") errors.push('O bundle de Talento precisa possuir kind "feat".');
  validateFeatProfile(bundle, version, BUNDLE_PROFILE_BY_VERSION, "Perfil", errors);
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

  if (version === 2) {
    const automation = validateFeatAutomationPlan(bundle.automation, bundle);
    for (const error of automation.errors) errors.push(`Automação: ${error}`);
    for (const warning of automation.warnings) warnings.push(`Automação: ${warning}`);
    if (bundle.automation?.target?.foundryVersion && bundle.automation.target.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Plano de automação gerado para Foundry ${bundle.automation.target.foundryVersion}; perfil do módulo: ${TARGET_FOUNDRY}.`);
    if (bundle.automation?.target?.dnd5eVersion && bundle.automation.target.dnd5eVersion !== TARGET_DND5E) errors.push(`Plano de automação gerado para DnD5e ${bundle.automation.target.dnd5eVersion}; esperado ${TARGET_DND5E}.`);
    if (bundle.automation?.target?.minimumImporterVersion && bundle.automation.target.minimumImporterVersion !== MIN_FEAT_IMPORTER_VERSION) warnings.push(`Plano de automação declara importer mínimo ${bundle.automation.target.minimumImporterVersion}; contrato 0.12 esperado: ${MIN_FEAT_IMPORTER_VERSION}.`);
    if (bundle.profile?.minimumImporterVersion && bundle.profile.minimumImporterVersion !== MIN_FEAT_IMPORTER_VERSION) {
      warnings.push(`Bundle v2 declara importer mínimo ${bundle.profile.minimumImporterVersion}; contrato 0.12 esperado: ${MIN_FEAT_IMPORTER_VERSION}.`);
    }
  } else if (version === 1 && bundle.automation) {
    warnings.push("Bundle v1 contém automation não padronizada; ela será ignorada e o Talento seguirá o modo legado description-first.");
  }

  validateRuntime(runtime,errors,warnings);
  return {ok:errors.length===0,errors,warnings:[...new Set(warnings)],schemaVersion:version};
}

export function validateFeatPackage(pkg, runtime = {}) {
  const errors=[]; const warnings=[]; const bundleValidations=[];
  if (!pkg || typeof pkg !== "object" || Array.isArray(pkg)) {
    errors.push("O arquivo não contém um objeto JSON de pacote de Talentos.");
    return {ok:false,errors,warnings,bundleValidations};
  }
  if (pkg.schema !== FEAT_PACKAGE_SCHEMA) errors.push(`Schema incompatível: esperado ${FEAT_PACKAGE_SCHEMA}.`);
  const version = schemaVersion(pkg);
  if (!SUPPORTED_FEAT_PACKAGE_VERSIONS.includes(version)) errors.push(`Versão de pacote incompatível: suportadas ${SUPPORTED_FEAT_PACKAGE_VERSIONS.join(", ")}; encontrado ${pkg.schemaVersion}.`);
  validateFeatProfile(pkg, version, PACKAGE_PROFILE_BY_VERSION, "Perfil de pacote", errors);
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
    if (version && Number(bundle?.schemaVersion) !== version) errors.push(`${label}: schema v${bundle?.schemaVersion ?? "ausente"} não corresponde ao pacote v${version}.`);
  }
  const calculated={
    bundles:asArray(pkg.bundles).length,
    feats:asArray(pkg.bundles).length,
    sources:new Set(asArray(pkg.bundles).map(b=>b.source?.sourceId).filter(Boolean)).size,
    prerequisites:asArray(pkg.bundles).filter(b=>asArray(b.feat?.prerequisites).length).length,
    repeatable:asArray(pkg.bundles).filter(b=>b.feat?.repeatable===true).length
  };
  for (const [key,expected] of Object.entries(calculated)) if (Number(pkg.summary?.[key]) !== expected) errors.push(`Resumo do pacote inconsistente em ${key}: esperado ${expected}, encontrado ${pkg.summary?.[key]}.`);

  if (version === 2) {
    const automation = calculateAutomationSummary(pkg.bundles);
    calculated.automation = automation;
    if (!pkg.summary?.automation || typeof pkg.summary.automation !== "object") errors.push("Pacote v2 não contém summary.automation.");
    else for (const [key, expected] of Object.entries(automation)) {
      if (Number(pkg.summary.automation?.[key]) !== expected) errors.push(`Resumo de automação inconsistente em ${key}: esperado ${expected}, encontrado ${pkg.summary.automation?.[key]}.`);
    }
    if (pkg.profile?.minimumImporterVersion && pkg.profile.minimumImporterVersion !== MIN_FEAT_IMPORTER_VERSION) {
      warnings.push(`Pacote v2 declara importer mínimo ${pkg.profile.minimumImporterVersion}; contrato 0.12 esperado: ${MIN_FEAT_IMPORTER_VERSION}.`);
    }
  }

  validateRuntime(runtime,errors,warnings);
  return {ok:errors.length===0,errors,warnings:[...new Set(warnings)],calculated,bundleValidations,schemaVersion:version};
}

export function featSupport() {
  return Object.freeze({
    bundleSchema: FEAT_BUNDLE_SCHEMA,
    bundleSchemaVersion: FEAT_BUNDLE_SCHEMA_VERSION,
    supportedBundleSchemaVersions: SUPPORTED_FEAT_BUNDLE_VERSIONS,
    bundleProfileId: FEAT_BUNDLE_PROFILE_ID,
    legacyBundleProfileId: BUNDLE_PROFILE_BY_VERSION[1],
    packageSchema: FEAT_PACKAGE_SCHEMA,
    packageSchemaVersion: FEAT_PACKAGE_SCHEMA_VERSION,
    supportedPackageSchemaVersions: SUPPORTED_FEAT_PACKAGE_VERSIONS,
    packageProfileId: FEAT_PACKAGE_PROFILE_ID,
    legacyPackageProfileId: PACKAGE_PROFILE_BY_VERSION[1],
    minimumImporterVersion: MIN_FEAT_IMPORTER_VERSION,
    legacyMinimumImporterVersion: LEGACY_MIN_FEAT_IMPORTER_VERSION,
    scopes: ["source-catalog","full-feat-catalog"],
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    itemType: "feat",
    compendiumOnly: true,
    destinationPack: "grimorio-importer.grimorio-feats",
    reimportByFlags: true,
    automationPolicy: "native-safe-first+assisted-choices+runtime-safe-hooks",
    legacyAutomationPolicy: "description-first",
    automation: featAutomationSupport()
  });
}
