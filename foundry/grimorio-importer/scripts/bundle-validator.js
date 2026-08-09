import { READY_CLASS_IDENTIFIERS, REVIEW_CLASS_IDENTIFIERS, SPECIAL_CLASS_IDENTIFIERS } from "./class-profiles.js";

export const BUNDLE_SCHEMA = "grimorio-foundry-class-bundle";
export const BUNDLE_SCHEMA_VERSION = 1;
export const BUNDLE_PROFILE_ID = "foundry13-dnd5e533-grimorio-class-bundle-v1";
export const TARGET_FOUNDRY = "13.351";
export const TARGET_DND5E = "5.3.3";

const READY_CLASS_ALLOWLIST = new Set(READY_CLASS_IDENTIFIERS);
const REVIEW_CLASS_BLOCKLIST = new Set(REVIEW_CLASS_IDENTIFIERS);
const SPECIAL_CLASS_ALLOWLIST = new Set(SPECIAL_CLASS_IDENTIFIERS);

function versionMajor(version) {
  const match = String(version ?? "").match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

export function validateBundle(bundle, runtime = {}) {
  const errors = [];
  const warnings = [];

  if (!bundle || typeof bundle !== "object" || Array.isArray(bundle)) {
    errors.push("O arquivo não contém um objeto JSON de bundle.");
    return { ok: false, errors, warnings };
  }
  if (bundle.schema !== BUNDLE_SCHEMA) errors.push(`Schema incompatível: esperado ${BUNDLE_SCHEMA}.`);
  if (bundle.schemaVersion !== BUNDLE_SCHEMA_VERSION) errors.push(`Versão de schema incompatível: esperado ${BUNDLE_SCHEMA_VERSION}.`);
  if (!["class", "subclass"].includes(bundle.kind)) errors.push("O bundle precisa ser do tipo class ou subclass.");
  if (bundle.profile?.id !== BUNDLE_PROFILE_ID) errors.push(`Perfil incompatível: esperado ${BUNDLE_PROFILE_ID}.`);
  if (!bundle.identity?.grimorioId || !bundle.identity?.identifier || !bundle.identity?.name) {
    errors.push("Identidade incompleta: grimorioId, identifier e name são obrigatórios.");
  }
  if (!Array.isArray(bundle.features)) errors.push("O bundle não possui uma lista de características.");

  if (bundle.kind === "class") {
    const identifier = bundle.identity?.identifier;
    if (REVIEW_CLASS_BLOCKLIST.has(identifier)) {
      errors.push(`Classe ainda bloqueada: ${identifier ?? "desconhecido"}.`);
    } else if (!READY_CLASS_ALLOWLIST.has(identifier)) {
      errors.push(`Classe fora da lista homologada da Fase 8: ${identifier ?? "desconhecido"}.`);
    }
    if (bundle.nativeMapping?.status !== "ready" && !SPECIAL_CLASS_ALLOWLIST.has(identifier)) {
      if (READY_CLASS_ALLOWLIST.has(identifier)) {
        warnings.push(`O bundle sinaliza mapeamento nativo em revisão, mas o Grimório Importer 0.9.3 possui perfil local homologado para ${bundle.identity?.name ?? identifier}. O perfil local será usado.`);
      } else {
        errors.push(`A classe ${bundle.identity?.name ?? identifier ?? "desconhecida"} não possui mapeamento nativo pronto nem perfil especial da Fase 8.`);
      }
    }
    const hd = bundle.class?.hitDice;
    const standard = hd?.mode === "standard" && hd?.number === 1 && [4, 6, 8, 10, 12].includes(Number(hd?.faces));
    const variableDragoneer = identifier === "dragoneer" && hd?.mode === "variable";
    const bloodMinister = identifier === "blood-minister" && hd?.mode === "multiple" && Number(hd?.number) === 2 && Number(hd?.faces) === 4;
    if (!standard && !variableDragoneer && !bloodMinister) errors.push("Configuração de Dados de Vida não suportada pela Fase 8.");
  }

  if (bundle.kind === "subclass") {
    const parent = bundle.parentClass?.identifier;
    if (!parent || !bundle.subclass?.classIdentifier) errors.push("Subclasse sem classIdentifier da classe-base.");
    if (parent !== bundle.subclass?.classIdentifier) errors.push("parentClass.identifier e subclass.classIdentifier não coincidem.");
    if (REVIEW_CLASS_BLOCKLIST.has(parent)) errors.push(`Classe-base ${parent} ainda está bloqueada.`);
    else if (!READY_CLASS_ALLOWLIST.has(parent)) errors.push(`Classe-base fora da lista homologada da Fase 8: ${parent ?? "desconhecido"}.`);
  }

  if (runtime.systemId && runtime.systemId !== "dnd5e") errors.push(`Sistema ativo incompatível: ${runtime.systemId}.`);
  if (runtime.systemVersion && runtime.systemVersion !== TARGET_DND5E) {
    errors.push(`DnD5e incompatível com este importador: esperado ${TARGET_DND5E}, encontrado ${runtime.systemVersion}.`);
  }
  if (runtime.foundryVersion) {
    const major = versionMajor(runtime.foundryVersion);
    if (major !== 13) errors.push(`Foundry incompatível: este importador é exclusivo da versão 13 (encontrado ${runtime.foundryVersion}).`);
    else if (runtime.foundryVersion !== TARGET_FOUNDRY) warnings.push(`O perfil foi homologado para Foundry ${TARGET_FOUNDRY}; encontrado ${runtime.foundryVersion}.`);
  }

  return { ok: errors.length === 0, errors, warnings };
}

export function phase8Support() {
  return {
    classes: [...READY_CLASS_IDENTIFIERS],
    subclassesFor: [...READY_CLASS_IDENTIFIERS],
    specialClasses: [...SPECIAL_CLASS_IDENTIFIERS],
    reviewClasses: [...REVIEW_CLASS_IDENTIFIERS],
    counts: { classes: READY_CLASS_IDENTIFIERS.length, subclasses: 381, specialClasses: SPECIAL_CLASS_IDENTIFIERS.length, specialSubclasses: 30, reviewClasses: REVIEW_CLASS_IDENTIFIERS.length },
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    storage: "module-compendiums",
    worldItemsPrototype: false,
    portableItemGrants: true,
    itemChoiceAdvancements: true,
    batchImport: true,
    specialRuntimeConfiguration: true,
    dragoneerConceptProfiles: 12,
    variableSpellcastingAbility: ["bender", "tamer"],
    variableSavingThrows: ["frame-pilot"],
    nonstandardHitDice: ["dragoneer", "blood-minister"],
    packs: [
      "grimorio-importer.grimorio-classes",
      "grimorio-importer.grimorio-subclasses",
      "grimorio-importer.grimorio-features"
    ]
  };
}

export const phase7Support = phase8Support;
// Aliases preservados para macros/integrações das fases anteriores.
export const phase6Support = phase8Support;
export const phase5Support = phase8Support;
