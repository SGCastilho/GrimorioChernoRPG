import { validateBundle, TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";

export const PACKAGE_SCHEMA = "grimorio-foundry-class-package";
export const PACKAGE_SCHEMA_VERSION = 1;
export const PACKAGE_PROFILE_ID = "foundry13-dnd5e533-grimorio-class-package-v1";
export const MIN_IMPORTER_VERSION = "0.5.0";

function asArray(value) { return Array.isArray(value) ? value : []; }

export function isPackage(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && value.schema === PACKAGE_SCHEMA);
}

export function isBundle(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && value.schema === "grimorio-foundry-class-bundle");
}

export function validatePackage(pkg, runtime = {}) {
  const errors = [];
  const warnings = [];
  if (!pkg || typeof pkg !== "object" || Array.isArray(pkg)) {
    errors.push("O arquivo não contém um objeto JSON de pacote.");
    return { ok: false, errors, warnings, bundleValidations: [] };
  }
  if (pkg.schema !== PACKAGE_SCHEMA) errors.push(`Schema incompatível: esperado ${PACKAGE_SCHEMA}.`);
  if (pkg.schemaVersion !== PACKAGE_SCHEMA_VERSION) errors.push(`Versão de pacote incompatível: esperado ${PACKAGE_SCHEMA_VERSION}.`);
  if (pkg.profile?.id !== PACKAGE_PROFILE_ID) errors.push(`Perfil de pacote incompatível: esperado ${PACKAGE_PROFILE_ID}.`);
  if (!pkg.identity?.id || !pkg.identity?.name || !pkg.identity?.scope) errors.push("Identidade do pacote incompleta.");
  if (!Array.isArray(pkg.bundles) || !pkg.bundles.length) errors.push("O pacote não contém bundles.");

  if (pkg.profile?.foundryVersion && pkg.profile.foundryVersion !== TARGET_FOUNDRY) warnings.push(`Pacote gerado para Foundry ${pkg.profile.foundryVersion}; perfil do módulo: ${TARGET_FOUNDRY}.`);
  if (pkg.profile?.dnd5eVersion && pkg.profile.dnd5eVersion !== TARGET_DND5E) errors.push(`Pacote gerado para DnD5e ${pkg.profile.dnd5eVersion}; esperado ${TARGET_DND5E}.`);

  const bundleValidations = [];
  const identities = new Set();
  for (const [index, bundle] of asArray(pkg.bundles).entries()) {
    const validation = validateBundle(bundle, runtime);
    bundleValidations.push(validation);
    const label = bundle?.identity?.name ?? `Bundle ${index + 1}`;
    for (const error of validation.errors) errors.push(`${label}: ${error}`);
    for (const warning of validation.warnings) warnings.push(`${label}: ${warning}`);
    const key = `${bundle?.kind}:${bundle?.identity?.identifier}`;
    if (identities.has(key)) errors.push(`Bundle duplicado no pacote: ${key}.`);
    identities.add(key);
  }

  const calculated = {
    bundles: asArray(pkg.bundles).length,
    classes: asArray(pkg.bundles).filter(b => b.kind === "class").length,
    subclasses: asArray(pkg.bundles).filter(b => b.kind === "subclass").length,
    features: asArray(pkg.bundles).reduce((sum, b) => sum + asArray(b.features).length, 0)
  };
  for (const [key, expected] of Object.entries(calculated)) {
    if (Number(pkg.summary?.[key]) !== expected) errors.push(`Resumo do pacote inconsistente em ${key}: esperado ${expected}, encontrado ${pkg.summary?.[key]}.`);
  }

  const classIds = new Set(asArray(pkg.bundles).filter(b => b.kind === "class").map(b => b.identity?.identifier));
  if (["class-with-subclasses", "full-catalog"].includes(pkg.identity?.scope)) {
    for (const sub of asArray(pkg.bundles).filter(b => b.kind === "subclass")) {
      if (!classIds.has(sub.parentClass?.identifier)) errors.push(`${sub.identity?.name ?? "Subclasse"}: classe-base ${sub.parentClass?.identifier ?? "?"} não está no mesmo pacote.`);
    }
  }

  return { ok: errors.length === 0, errors, warnings: [...new Set(warnings)], calculated, bundleValidations };
}

export function phase9PackageSupport() {
  return {
    schema: PACKAGE_SCHEMA,
    schemaVersion: PACKAGE_SCHEMA_VERSION,
    profileId: PACKAGE_PROFILE_ID,
    minimumImporterVersion: MIN_IMPORTER_VERSION,
    scopes: ["class-with-subclasses", "full-catalog"],
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    singleFilePackages: true,
    bundleSchemaPreserved: true
  };
}
