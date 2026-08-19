import { validateRaceBuildBundle } from "./race-validator.js";
import { resolvedRaceFeatures, raceBuildDisplayName } from "./race-support.js";
import { defaultPackRuntime, PACKS, MODULE_ID, withWritablePacks } from "./pack-storage.js";
import { stableId, slugify, textToHtml } from "./materializer.js";
import { IMPORTER_VERSION } from "./version.js";
import { compileRaceAutomation, applyRacialFeatureAutomation, raceAutomationSupport } from "./race-automation.js";
import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";

const ABILITY_KEYS = Object.freeze(["str", "dex", "con", "int", "wis", "cha"]);
const ABILITY_NAMES = Object.freeze({
  força: "str", forca: "str", strength: "str",
  destreza: "dex", dexterity: "dex",
  constituição: "con", constituicao: "con", constitution: "con",
  inteligência: "int", inteligencia: "int", intelligence: "int",
  sabedoria: "wis", wisdom: "wis",
  carisma: "cha", charisma: "cha"
});
const SIZE_KEYS = Object.freeze({ tiny: "tiny", small: "sm", medium: "med", large: "lg", huge: "huge", gargantuan: "grg" });
const CREATURE_KEYS = Object.freeze({
  aberracao: "aberration", aberration: "aberration",
  besta: "beast", beast: "beast",
  celestial: "celestial",
  constructo: "construct", construto: "construct", construct: "construct",
  dragao: "dragon", dragon: "dragon",
  elemental: "elemental",
  fada: "fey", fey: "fey",
  corruptor: "fiend", fiend: "fiend",
  gigante: "giant", giant: "giant",
  humanoide: "humanoid", humanoid: "humanoid",
  monstruosidade: "monstrosity", monstrosity: "monstrosity",
  gosma: "ooze", lodo: "ooze", ooze: "ooze",
  planta: "plant", plant: "plant",
  morto_vivo: "undead", undead: "undead"
});

function asArray(value) { return Array.isArray(value) ? value : []; }
function text(value) { return String(value ?? "").trim(); }
function normalize(value) {
  return text(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function flag(doc, key) {
  if (typeof doc?.getFlag === "function") return doc.getFlag(MODULE_ID, key);
  return doc?.flags?.[MODULE_ID]?.[key] ?? doc?._source?.flags?.[MODULE_ID]?.[key];
}
function sourceData(source = {}) {
  const page = source.page ?? source.sourcePage ?? "";
  return { custom: text(source.title), book: "", page: page === null || page === undefined ? "" : String(page), license: "", rules: "2014", revision: 1 };
}
function transportFlags(extra = {}) {
  return { [MODULE_ID]: { importerVersion: IMPORTER_VERSION, storage: "compendium", ...extra } };
}
function decorateStorageFlags(source, packKey) {
  return {
    ...source,
    flags: {
      ...(source.flags ?? {}),
      [MODULE_ID]: {
        ...(source.flags?.[MODULE_ID] ?? {}),
        storage: "compendium",
        packKey,
        packCollection: PACKS[packKey].collection
      }
    }
  };
}
async function upsert(runtime, packKey, items, matcher, source) {
  const stored = decorateStorageFlags(source, packKey);
  const existing = items.find(matcher);
  if (existing) {
    const doc = await runtime.updatePackItem(packKey, existing, stored);
    return { doc: doc ?? existing, created: false };
  }
  const doc = await runtime.createPackItem(packKey, stored);
  if (!doc) throw new Error(`O Foundry não retornou o Item criado em ${PACKS[packKey].label}: ${source.name}.`);
  items.push(doc);
  return { doc, created: true };
}

export function defaultRaceRuntime() {
  const packRuntime = defaultPackRuntime();
  return {
    foundryVersion: globalThis.game?.version ?? globalThis.game?.release?.version ?? "",
    systemId: globalThis.game?.system?.id ?? "",
    systemVersion: globalThis.game?.system?.version ?? "",
    isGM: Boolean(globalThis.game?.user?.isGM),
    ...packRuntime
  };
}

export function buildRacialFeatureSource(bundle, feature, automationPlan = null) {
  const owner = feature?.owner ?? {};
  const ownerRace = text(owner.raceId);
  const ownerSubrace = text(owner.subraceId);
  const requirement = [ownerRace, ownerSubrace].filter(Boolean).join(" · ");
  const source = {
    name: text(feature?.name) || text(feature?.originalName) || text(feature?.key) || "Característica Racial",
    type: "feat",
    folder: null,
    system: {
      description: { value: textToHtml(feature?.description ?? ""), chat: "" },
      source: sourceData(feature?.source ?? {}),
      type: { value: "race", subtype: "" },
      requirements: requirement,
      identifier: slugify(text(feature?.key) || text(feature?.name)),
      advancement: {},
      activities: {},
      uses: { spent: 0, max: "", recovery: [] }
    },
    effects: [],
    flags: transportFlags({
      documentRole: "racial-feature",
      grimorioId: text(feature?.key),
      featureKey: text(feature?.key),
      catalogRole: text(feature?.role),
      ownerRaceId: ownerRace,
      ownerSubraceId: ownerSubrace || null,
      sourceTitle: text(feature?.source?.title),
      sourcePage: feature?.source?.page ?? null,
      nativePolicy: "description"
    })
  };
  applyRacialFeatureAutomation(source, feature, bundle, automationPlan);
  return source;
}

function numberFromMetric(textValue) {
  const raw = text(textValue);
  const m = raw.match(/(-?\d+(?:[.,]\d+)?)\s*(?:m(?:\b|\s|\()|metros?\b)/i);
  if (!m) return null;
  return Number(m[1].replace(",", "."));
}
function movementFromBundle(bundle) {
  const raw = text(bundle?.resolved?.primaryRace?.meta?.speed);
  const walk = numberFromMetric(raw);
  return {
    burrow: "", climb: "", fly: "", swim: "",
    walk: Number.isFinite(walk) ? String(walk) : "",
    units: "m", hover: false, ignoredDifficultTerrain: []
  };
}
function darkvisionRange(bundle) {
  let max = null;
  for (const feature of resolvedRaceFeatures(bundle)) {
    const original = normalize(feature?.originalName);
    const name = normalize(feature?.name);
    if (original !== "darkvision" && name !== "visao_no_escuro") continue;
    const meters = numberFromMetric(feature?.description);
    if (Number.isFinite(meters)) max = Math.max(max ?? 0, Math.round(meters));
  }
  return max;
}
function sensesFromBundle(bundle) {
  const darkvision = darkvisionRange(bundle);
  return {
    ranges: darkvision ? { darkvision } : {},
    units: "m",
    special: ""
  };
}
function creatureTypeFromBundle(bundle) {
  const types = asArray(bundle?.resolved?.facts?.creatureTypes).map(text).filter(Boolean);
  if (types.length === 1) {
    const key = CREATURE_KEYS[normalize(types[0])];
    if (key) return { value: key, subtype: "", custom: "" };
  }
  const raw = types.length ? types.join(", ") : text(bundle?.resolved?.primaryRace?.meta?.creatureTypes);
  const single = raw && !raw.includes(",") ? CREATURE_KEYS[normalize(raw.replace(/\([^)]*\)/g, "").trim())] : null;
  if (single) return { value: single, subtype: "", custom: "" };
  return { value: "custom", subtype: "", custom: raw };
}
function selectedSize(bundle) {
  const selected = text(bundle?.resolved?.facts?.size?.selected || bundle?.resolved?.facts?.size?.requirement?.fixed);
  return SIZE_KEYS[selected] ?? null;
}
function sizeAdvancement(bundle) {
  const size = selectedSize(bundle);
  if (!size) return null;
  return {
    _id: stableId(`${bundle.identity.grimorioId}:adv:size`),
    type: "Size",
    configuration: { sizes: [size] },
    value: { size: "" },
    title: "Tamanho"
  };
}
function abilityKey(value) { return ABILITY_NAMES[normalize(value)] ?? (ABILITY_KEYS.includes(text(value)) ? text(value) : null); }
function parseFixedAbility(raw) {
  const result = {};
  const string = text(raw).split(/Alternativamente|Alternatively/i)[0];
  for (const match of string.matchAll(/(Força|Destreza|Constitui(?:ção|cao)|Intelig(?:ência|encia)|Sabedoria|Carisma|Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)\s*([+-]\s*\d+)/gi)) {
    const key = abilityKey(match[1]);
    const amount = Number(match[2].replace(/\s/g, ""));
    if (key && Number.isFinite(amount)) result[key] = (result[key] ?? 0) + amount;
  }
  return result;
}
function fixedAbilities(bundle) {
  const result = {};
  const hanyou = bundle?.resolved?.facts?.ability?.hanyou;
  if (hanyou) {
    for (const key of asArray(hanyou.plus)) if (ABILITY_KEYS.includes(key)) result[key] = (result[key] ?? 0) + 2;
    const minus = text(hanyou.minus);
    if (ABILITY_KEYS.includes(minus)) result[minus] = (result[minus] ?? 0) - 2;
    return result;
  }
  Object.assign(result, parseFixedAbility(bundle?.resolved?.primaryRace?.abilityScore));
  const sub = bundle?.resolved?.facts?.ability?.subrace;
  if (sub?.requirement?.kind === "fixed") Object.assign(result, Object.fromEntries(asArray(sub.requirement.options).filter(k => ABILITY_KEYS.includes(k)).map(k => [k, (result[k] ?? 0) + 1])));
  else if (sub?.selected && ABILITY_KEYS.includes(sub.selected)) result[sub.selected] = (result[sub.selected] ?? 0) + 1;
  return result;
}
function asiAdvancement(bundle, warnings) {
  const fixed = fixedAbilities(bundle);
  if (!Object.keys(fixed).length) {
    warnings.push("ASI racial não foi materializado nativamente porque o Race Build não forneceu uma distribuição fixa inequívoca.");
    return null;
  }
  return {
    _id: stableId(`${bundle.identity.grimorioId}:adv:asi`),
    type: "AbilityScoreImprovement",
    configuration: {
      points: 0,
      fixed: Object.fromEntries(ABILITY_KEYS.map(key => [key, Number(fixed[key] ?? 0)])),
      cap: 2,
      locked: [...ABILITY_KEYS]
    },
    value: { type: "asi" },
    title: "Aumento de Atributos"
  };
}
function languageAdvancement(bundle, warnings) {
  const raw = text(bundle?.resolved?.primaryRace?.meta?.languages);
  if (!raw) return null;
  const grants = [];
  if (/\bcomum\b/i.test(raw)) grants.push("languages:standard:common");

  const choiceMatch = raw.match(/\+\s*(\d+)\s*idioma/i);
  if (choiceMatch) {
    const count = Number(choiceMatch[1]);
    warnings.push(`Escolha de ${count} idioma(s) adicional(is) permanece assistida: a RB-7 materializa apenas idiomas com identificador DnD5e 5.3.3 inequívoco e nao inventa um pool generico.`);
  }

  if (!grants.length) {
    warnings.push(`Idiomas preservados apenas em texto; mapeamento nativo não seguro: ${raw}.`);
    return null;
  }
  return {
    _id: stableId(`${bundle.identity.grimorioId}:adv:languages`),
    type: "Trait",
    configuration: { allowReplacements: false, choices: [], grants, mode: "default" },
    value: { chosen: [] },
    title: "Idiomas"
  };
}
function itemGrantAdvancement(bundle, featureDocs) {
  if (!featureDocs.length) return null;
  return {
    _id: stableId(`${bundle.identity.grimorioId}:adv:racial-features`),
    type: "ItemGrant",
    configuration: {
      items: featureDocs.map(doc => ({ uuid: doc.uuid, optional: false })),
      optional: false,
      spell: null
    },
    value: {},
    title: "Características Raciais"
  };
}
function addAdvancement(target, adv) { if (adv) target[adv._id] = adv; }

function raceDescription(bundle) {
  const lines = [
    `<h2>${raceBuildDisplayName(bundle)}</h2>`,
    `<p><strong>Race Build do Grimório.</strong> Esta raça representa exatamente a combinação escolhida no construtor racial.</p>`,
    `<p><strong>Raça dominante:</strong> ${text(bundle?.resolved?.primaryRace?.name)}</p>`
  ];
  if (bundle?.resolved?.subrace) lines.push(`<p><strong>Subraça:</strong> ${text(bundle.resolved.subrace.name)}</p>`);
  if (bundle?.resolved?.secondaryRace) lines.push(`<p><strong>Sangue Misto:</strong> ${text(bundle.resolved.secondaryRace.name)}</p>`);
  lines.push(`<p><strong>Selection Hash:</strong> ${text(bundle?.identity?.selectionHash)}<br><strong>Content Hash:</strong> ${text(bundle?.identity?.contentHash)}</p>`);
  return lines.join("\n");
}

export function buildRaceSource(bundle, featureDocs, { warnings = [], automation = null } = {}) {
  const advancements = {};
  addAdvancement(advancements, asiAdvancement(bundle, warnings));
  addAdvancement(advancements, sizeAdvancement(bundle));
  addAdvancement(advancements, languageAdvancement(bundle, warnings));
  addAdvancement(advancements, itemGrantAdvancement(bundle, featureDocs));
  for (const advancement of Object.values(automation?.race?.advancements ?? {})) {
    if (advancement?._id) advancements[advancement._id] = advancement;
  }
  return {
    name: raceBuildDisplayName(bundle),
    type: "race",
    folder: null,
    system: {
      description: { value: raceDescription(bundle), chat: "" },
      source: sourceData(bundle?.source?.primaryRace ?? {}),
      identifier: slugify(bundle.identity.grimorioId),
      advancement: advancements,
      movement: automation?.race?.movement ?? movementFromBundle(bundle),
      senses: automation?.race?.senses ?? sensesFromBundle(bundle),
      type: creatureTypeFromBundle(bundle)
    },
    flags: transportFlags({
      documentRole: "race",
      grimorioId: text(bundle.identity.grimorioId),
      selectionHash: text(bundle.identity.selectionHash),
      contentHash: text(bundle.identity.contentHash),
      primaryRaceId: text(bundle.identity.primaryRaceId),
      subraceId: bundle.identity.subraceId ?? null,
      secondaryRaceId: bundle.identity.secondaryRaceId ?? null,
      mixed: Boolean(bundle.selection?.mixed),
      materializerPhase: "RB-7",
      automationPhase: "RB-7",
      automationPolicy: automation?.policy ?? "description",
      automationSummary: automation?.summary ?? null,
      actorApplication: false
    })
  };
}

export async function materializeRaceBuild(bundle, runtime = defaultRaceRuntime()) {
  const validation = validateRaceBuildBundle(bundle, runtime);
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  if (runtime.isGM === false) throw new Error("Somente um Mestre pode importar Race Builds do Grimório.");
  const warnings = [...asArray(validation.warnings)];
  const features = resolvedRaceFeatures(bundle);
  const automation = compileRaceAutomation(bundle);

  return await withWritablePacks(runtime, ["racialFeatures", "races"], async () => {
    const racialItems = await runtime.listPackItems("racialFeatures");
    const raceItems = await runtime.listPackItems("races");
    const featureDocs = [];
    const stats = {
      racialFeaturesCreated: 0,
      racialFeaturesUpdated: 0,
      racesCreated: 0,
      racesUpdated: 0,
      advancementsMaterialized: 0,
      foldersCreated: 0,
      foldersUpdated: 0,
      worldItemsCreated: 0,
      racialEffectsMaterialized: automation.summary.effects,
      racialTraitAdvancementsMaterialized: automation.summary.advancements,
      racialUsesMaterialized: automation.summary.uses,
      racialActivitiesMaterialized: automation.summary.activities,
      racialAssistedChoices: automation.summary.assisted,
      racialRuntimeDescriptors: automation.summary.runtime
    };

    for (const feature of features) {
      const source = buildRacialFeatureSource(bundle, feature, automation.featurePlans[text(feature?.key)] ?? null);
      const result = await upsert(
        runtime,
        "racialFeatures",
        racialItems,
        doc => flag(doc, "documentRole") === "racial-feature" && flag(doc, "grimorioId") === text(feature.key),
        source
      );
      featureDocs.push(result.doc);
      if (result.created) stats.racialFeaturesCreated += 1;
      else stats.racialFeaturesUpdated += 1;
    }

    const raceSource = buildRaceSource(bundle, featureDocs, { warnings, automation });
    stats.advancementsMaterialized = Object.keys(raceSource.system.advancement ?? {}).length;
    const raceResult = await upsert(
      runtime,
      "races",
      raceItems,
      doc => flag(doc, "documentRole") === "race" && flag(doc, "grimorioId") === text(bundle.identity.grimorioId),
      raceSource
    );
    if (raceResult.created) stats.racesCreated += 1;
    else stats.racesUpdated += 1;

    return {
      ok: true,
      bundle: { kind: "race-build", grimorioId: bundle.identity.grimorioId, name: raceBuildDisplayName(bundle) },
      target: { foundry: TARGET_FOUNDRY, dnd5e: TARGET_DND5E },
      storage: {
        mode: "compendium",
        racePack: PACKS.races.collection,
        racialFeaturePack: PACKS.racialFeatures.collection,
        portableItemGrants: true,
        actorApplication: false
      },
      item: raceResult.doc,
      featureItems: featureDocs,
      automation,
      automationSupport: raceAutomationSupport(),
      stats,
      warnings: [...new Set(warnings)]
    };
  });
}

export function raceMaterializerSupport() {
  return Object.freeze({
    phase: "RB-7",
    materialization: true,
    raceItems: true,
    racialFeatureItems: true,
    itemGrantAdvancements: true,
    sizeAdvancement: true,
    fixedAsiAdvancement: true,
    languageAdvancement: "conservative",
    movement: "native-safe+selected-feature-projection",
    senses: "native-safe+static-feature-projection",
    creatureType: "native-or-custom",
    racialAutomation: raceAutomationSupport(),
    activeEffects: true,
    traitAdvancements: true,
    simpleUses: true,
    utilityActivities: true,
    runtimeDescriptors: true,
    actorApplication: false,
    worldItemsExpected: 0,
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E
  });
}
