import { stableId } from "./materializer.js";
import { MODULE_ID } from "./pack-storage.js";

export const FEAT_AUTOMATION_SCHEMA = "grimorio-foundry-feat-automation-plan";
export const FEAT_AUTOMATION_SCHEMA_VERSION = 1;
export const FEAT_AUTOMATION_PHASE = "FA-4";
export const FEAT_AUTOMATION_COMPILER_VERSION = 3;

const ABILITIES = Object.freeze(["str", "dex", "con", "int", "wis", "cha"]);
const SAFE_EFFECT_MECHANICS = Object.freeze(new Set([
  "initiative-bonus",
  "conditional-ac-bonus",
  "speed-bonus",
  "skill-passive-bonus",
  "hp-per-level",
  "unarmed-damage-minimum",
  "conditional-armor-rule",
  "conditional-damage-reduction"
]));
const DEFERRED_EFFECT_MECHANICS = Object.freeze(new Set([]));
const DECLARATIVE_ADVANCEMENT_TYPES = Object.freeze(new Set([
  "ability-score", "trait-proficiency", "item-choice", "spell-choice", "linked-choice"
]));
const DECLARATIVE_ACTIVITY_TYPES = Object.freeze(new Set([
  "utility", "heal", "attack", "check", "reaction", "toggle"
]));

const CORE_ACTIVE_EFFECT_MODES = globalThis.CONST?.ACTIVE_EFFECT_MODES ?? {
  CUSTOM: 0,
  MULTIPLY: 1,
  ADD: 2,
  DOWNGRADE: 3,
  UPGRADE: 4,
  OVERRIDE: 5
};

function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function clean(value) {
  return String(value ?? "").trim();
}

function effectChange(key, value, mode = CORE_ACTIVE_EFFECT_MODES.ADD, priority = 20) {
  return { key, mode, value: String(value), priority };
}

function emptyUses() {
  return { spent: 0, max: "", recovery: [] };
}

function recoveryEntries(periods = []) {
  return asArray(periods).map(period => ({ period: String(period), type: "recoverAll", formula: "" }));
}

function compileItemUses(uses) {
  if (!uses) return emptyUses();
  return {
    spent: 0,
    max: String(uses.max ?? ""),
    recovery: recoveryEntries(uses.recovery)
  };
}

function embeddedFlags(bundle, kind, key, extra = {}) {
  return {
    [MODULE_ID]: {
      managed: true,
      automationPhase: FEAT_AUTOMATION_PHASE,
      automationCompilerVersion: FEAT_AUTOMATION_COMPILER_VERSION,
      featId: bundle.identity?.grimorioId ?? "",
      profileId: bundle.automation?.profileId ?? bundle.identity?.grimorioId ?? "",
      automationKind: kind,
      automationKey: key,
      ...extra
    }
  };
}

function baseAdvancement(bundle, advancement, type, title) {
  return {
    _id: stableId(`feat-advancement:${bundle.identity?.grimorioId}:${advancement.key}`),
    type,
    configuration: {},
    value: {},
    title: title || advancement.label || advancement.key,
    flags: embeddedFlags(bundle, "advancement", advancement.key, {
      declarativeType: advancement.type,
      sourceChoiceId: advancement.sourceChoiceId ?? ""
    })
  };
}

function abilityScoreAdvancement(bundle, advancement) {
  const amount = Math.max(1, Number(advancement.amount ?? 1) || 1);
  const options = asArray(advancement.options).filter(key => ABILITIES.includes(key));
  const selected = options.length ? options : [...ABILITIES];
  const lockedSingle = advancement.locked === true && selected.length === 1;
  const a = baseAdvancement(bundle, advancement, "AbilityScoreImprovement", advancement.label || "Aumento no Valor de Habilidade");
  if (lockedSingle) {
    a.configuration = {
      points: 0,
      fixed: Object.fromEntries(ABILITIES.map(key => [key, key === selected[0] ? amount : 0])),
      cap: amount,
      locked: [...ABILITIES]
    };
  } else {
    a.configuration = {
      points: amount,
      fixed: Object.fromEntries(ABILITIES.map(key => [key, 0])),
      cap: amount,
      // O schema 5.3 usa `locked` para impedir edição de habilidades. Restringimos
      // o diálogo às opções declaradas pelo Grimório sem inventar uma escolha.
      locked: ABILITIES.filter(key => !selected.includes(key))
    };
  }
  a.value = { type: "asi" };
  return a;
}

const ARMOR_GRANTS = Object.freeze({
  light: "armor:lgt",
  medium: "armor:med",
  heavy: "armor:hvy",
  shield: "armor:shl"
});

const FALLBACK_SKILLS = Object.freeze(["acr","ani","arc","ath","dec","his","ins","itm","inv","med","nat","prc","prf","per","rel","slt","ste","sur"]);
const FALLBACK_LANGUAGES = Object.freeze(["common","dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep","infernal","primordial","sylvan","undercommon"]);
const FALLBACK_TOOLS = Object.freeze(["alchemist","brewer","calligrapher","carpenter","cartographer","cobbler","cook","glassblower","jeweler","leatherworker","mason","painter","potter","smith","tinker","weaver","woodcarver","disg","forg","herb","navg","pois","thief"]);
const FALLBACK_WEAPONS = Object.freeze(["club","dagger","greatclub","handaxe","javelin","lighthammer","mace","quarterstaff","sickle","spear","lightcrossbow","dart","shortbow","sling","battleaxe","flail","glaive","greataxe","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","warpick","warhammer","whip","blowgun","handcrossbow","heavycrossbow","longbow","net"]);

function configKeys(field, fallback = []) {
  const value = globalThis.CONFIG?.DND5E?.[field];
  if (value && typeof value === "object") {
    const keys = Object.keys(value).filter(Boolean);
    if (keys.length) return keys;
  }
  return [...fallback];
}

function prefixedPool(prefix, keys) {
  return [...new Set(asArray(keys).map(key => clean(key)).filter(Boolean).map(key => `${prefix}:${key}`))];
}

function dynamicTraitPool(advancement) {
  if (advancement.trait === "weapon") {
    const keys = configKeys("weaponProficiencies", FALLBACK_WEAPONS)
      .filter(key => !["sim", "mar", "simple", "martial"].includes(String(key).toLowerCase()));
    return prefixedPool("weapon", keys.length ? keys : FALLBACK_WEAPONS);
  }
  if (advancement.trait === "language") return prefixedPool("languages", configKeys("languages", FALLBACK_LANGUAGES));
  if (advancement.trait === "skill-or-tool") {
    return [
      ...prefixedPool("skills", configKeys("skills", FALLBACK_SKILLS)),
      ...prefixedPool("tool", configKeys("toolProficiencies", FALLBACK_TOOLS))
    ];
  }
  if (advancement.trait === "saving-throw") return prefixedPool("saves", ABILITIES);
  return [];
}

function fixedTraitAdvancement(bundle, advancement) {
  if (advancement.trait !== "armor" || !asArray(advancement.add).length) return null;
  const grants = asArray(advancement.add).map(key => ARMOR_GRANTS[key]).filter(Boolean);
  if (!grants.length) return null;
  const a = baseAdvancement(bundle, advancement, "Trait", advancement.label || "Proficiência");
  a.configuration = { allowReplacements: false, choices: [], grants, mode: "default" };
  a.value = { chosen: [] };
  return a;
}

function openTraitAdvancement(bundle, advancement, { trait = advancement.trait, count = advancement.count, pool = null, title = null, linkedChoice = "" } = {}) {
  const resolvedPool = asArray(pool).length ? asArray(pool) : dynamicTraitPool({ ...advancement, trait });
  if (!resolvedPool.length) return null;
  const a = baseAdvancement(bundle, advancement, "Trait", title || advancement.label || "Escolha de Proficiência");
  a.configuration = {
    allowReplacements: false,
    choices: [{ count: Math.max(1, Number(count ?? 1) || 1), pool: resolvedPool }],
    grants: [],
    mode: "default"
  };
  a.value = { chosen: [] };
  a.flags[MODULE_ID].trait = trait;
  a.flags[MODULE_ID].choicePoolSize = resolvedPool.length;
  if (linkedChoice) a.flags[MODULE_ID].linkedChoice = linkedChoice;
  return a;
}

function itemChoiceAdvancement(bundle, advancement) {
  const count = Math.max(1, Number(advancement.count ?? 1) || 1);
  const itemType = advancement.type === "spell-choice" ? "spell" : clean(advancement.itemType) || "feat";
  const a = baseAdvancement(bundle, advancement, "ItemChoice", advancement.label || (itemType === "spell" ? "Escolher Magia" : "Escolher Itens"));
  a.configuration = {
    allowDrops: true,
    choices: { "0": { count, replacement: false } },
    pool: [],
    restriction: {
      type: itemType,
      subtype: "",
      level: advancement.spellLevel === undefined ? "" : String(advancement.spellLevel),
      list: clone(asArray(advancement.lists))
    },
    spell: null,
    type: itemType
  };
  a.value = { ability: "", added: {}, replaced: {} };
  a.flags[MODULE_ID].openDragDrop = true;
  a.flags[MODULE_ID].choiceConstraints = {
    count,
    itemType,
    spellLevel: advancement.spellLevel ?? null,
    ritualOnly: Boolean(advancement.ritualOnly),
    requiresAttackRoll: Boolean(advancement.requiresAttackRoll),
    lists: clone(asArray(advancement.lists)),
    sameListAs: advancement.sameListAs ?? "",
    acquisition: advancement.acquisition ?? "",
    family: advancement.filter?.family ?? ""
  };
  return a;
}

function linkedChoiceDescriptor(bundle, advancement) {
  return Object.freeze({
    key: advancement.key,
    sourceChoiceId: advancement.sourceChoiceId ?? advancement.key,
    label: advancement.label || advancement.key,
    count: Math.max(1, Number(advancement.count ?? 1) || 1),
    options: clone(asArray(advancement.options)),
    profileId: bundle.identity?.grimorioId ?? "",
    storagePath: `flags.${MODULE_ID}.choices.${advancement.sourceChoiceId ?? advancement.key}`,
    mode: "acquisition-prompt"
  });
}

function resilientLinkedAdvancements(bundle, advancement) {
  const options = asArray(advancement.options).filter(key => ABILITIES.includes(key));
  const ability = abilityScoreAdvancement(bundle, {
    ...advancement,
    key: `${advancement.key}-ability`,
    label: "Resiliente — +1 no Atributo",
    type: "ability-score",
    amount: 1,
    options: options.length ? options : [...ABILITIES]
  });
  ability.flags[MODULE_ID].linkedChoice = advancement.key;
  ability.flags[MODULE_ID].linkedGrant = "saving-throw-proficiency";
  const save = openTraitAdvancement(bundle, {
    ...advancement,
    key: `${advancement.key}-save`,
    trait: "saving-throw",
    count: 1,
    label: "Resiliente — Proficiência em Salvaguarda"
  }, {
    trait: "saving-throw",
    count: 1,
    pool: prefixedPool("saves", options.length ? options : ABILITIES),
    linkedChoice: advancement.key,
    title: "Resiliente — Proficiência em Salvaguarda"
  });
  return [ability, save].filter(Boolean);
}

function compileAdvancement(bundle, advancement) {
  if (advancement.type === "ability-score") return { native: [abilityScoreAdvancement(bundle, advancement)], assisted: null, reason: "" };
  if (advancement.type === "trait-proficiency") {
    const fixed = fixedTraitAdvancement(bundle, advancement);
    if (fixed) return { native: [fixed], assisted: null, reason: "" };
    const open = openTraitAdvancement(bundle, advancement);
    if (open) return { native: [open], assisted: null, reason: "" };
    return { native: [], assisted: null, reason: `Trait aberto sem pool compatível: ${advancement.trait}.` };
  }
  if (advancement.type === "item-choice" || advancement.type === "spell-choice") {
    return { native: [itemChoiceAdvancement(bundle, advancement)], assisted: null, reason: "" };
  }
  if (advancement.type === "linked-choice") {
    const grants = asArray(advancement.grants);
    const resilient = grants.some(entry => entry?.type === "ability-score" && entry?.sameChoice)
      && grants.some(entry => entry?.type === "saving-throw-proficiency" && entry?.sameChoice);
    if (resilient) return { native: resilientLinkedAdvancements(bundle, advancement), assisted: null, reason: "" };
    return { native: [], assisted: linkedChoiceDescriptor(bundle, advancement), reason: "" };
  }
  return { native: [], assisted: null, reason: `Tipo declarativo não suportado nesta fase: ${advancement.type}.` };
}

const SKILL_KEYS = Object.freeze({
  perception: "prc",
  investigation: "inv"
});

function baseEffect(bundle, effect, changes, { transfer = null, duration = null, description = "" } = {}) {
  const source = {
    _id: stableId(`feat-effect:${bundle.identity?.grimorioId}:${effect.key}`),
    name: effect.label || `${bundle.identity?.name ?? "Talento"} — ${effect.key}`,
    img: "icons/svg/aura.svg",
    transfer: transfer ?? Boolean(effect.transfer),
    disabled: false,
    changes,
    statuses: [],
    description,
    flags: embeddedFlags(bundle, "effect", effect.key, {
      mechanic: effect.mechanic,
      assisted: effect.mechanic === "conditional-ac-bonus",
      runtimeManaged: ["unarmed-damage-minimum", "conditional-armor-rule", "conditional-damage-reduction"].includes(effect.mechanic)
    })
  };
  if (duration) source.duration = duration;
  return source;
}

function compileEffect(bundle, effect) {
  const mechanic = effect.mechanic;
  if (!SAFE_EFFECT_MECHANICS.has(mechanic)) {
    return {
      native: null,
      reason: DEFERRED_EFFECT_MECHANICS.has(mechanic)
        ? `A mecânica ${mechanic} depende de equipamento, origem do dano ou alteração de ataque e não é segura como Active Effect global.`
        : `Mecânica de Effect não suportada nesta fase: ${mechanic}.`
    };
  }

  if (mechanic === "initiative-bonus") {
    return { native: baseEffect(bundle, effect, [effectChange("system.attributes.init.bonus", effect.value)], {
      transfer: true,
      description: "Bônus passivo de iniciativa materializado pelo Grimório Importer FA-4."
    }), reason: "" };
  }

  if (mechanic === "conditional-ac-bonus") {
    const duration = effect.duration === "one-triggering-attack"
      ? { seconds: 6, rounds: 1, turns: null, startTime: null, startRound: null, startTurn: null }
      : null;
    return { native: baseEffect(bundle, effect, [effectChange("system.attributes.ac.bonus", effect.value)], {
      transfer: false,
      duration,
      description: "Effect condicional: aplicado pela Activity ou pelo runtime FA-4 somente quando a condição do Talento for satisfeita."
    }), reason: "" };
  }

  if (mechanic === "speed-bonus") {
    const value = Number(effect.valueFeet ?? 0) || 0;
    return { native: baseEffect(bundle, effect, [effectChange("system.attributes.movement.walk", value)], {
      transfer: true,
      description: "Bônus passivo ao deslocamento de caminhada."
    }), reason: "" };
  }

  if (mechanic === "skill-passive-bonus") {
    const skill = SKILL_KEYS[effect.skill] ?? clean(effect.skill);
    if (!skill) return { native: null, reason: `Perícia passiva não reconhecida: ${effect.skill}.` };
    return { native: baseEffect(bundle, effect, [effectChange(`system.skills.${skill}.bonuses.passive`, effect.value)], {
      transfer: true,
      description: "Bônus passivo de perícia materializado pelo Grimório Importer FA-4."
    }), reason: "" };
  }

  if (mechanic === "hp-per-level") {
    return { native: baseEffect(bundle, effect, [effectChange("system.attributes.hp.bonuses.level", effect.value)], {
      transfer: true,
      description: "Bônus de pontos de vida por nível do personagem."
    }), reason: "" };
  }

  if (mechanic === "unarmed-damage-minimum") {
    return { native: baseEffect(bundle, effect, [], {
      transfer: true,
      description: `Marcador FA-4: ataques desarmados do portador usam no mínimo ${effect.denomination || "d4"}. A alteração do dado permanece condicionada ao contexto real do ataque.`
    }), reason: "" };
  }

  if (mechanic === "conditional-armor-rule") {
    return { native: baseEffect(bundle, effect, [], {
      transfer: true,
      description: "Marcador FA-4 para Maestria em Armadura Média. O runtime sincroniza o +1 CA quando armadura média e Destreza 16+ estão ativos; a supressão da desvantagem de Furtividade permanece guardada para não cancelar outras fontes de desvantagem."
    }), reason: "" };
  }

  if (mechanic === "conditional-damage-reduction") {
    return { native: baseEffect(bundle, effect, [], {
      transfer: true,
      description: "Marcador FA-4 para redução de dano da Maestria em Armadura Pesada. A redução é aplicada pelo hook de dano somente a ataques não mágicos qualificados enquanto armadura pesada estiver equipada."
    }), reason: "" };
  }

  return { native: null, reason: `Mecânica de Effect sem compilador: ${mechanic}.` };
}

function activationData(value) {
  const activation = clean(value);
  if (activation === "10-minute") return { type: "minute", value: 10, condition: "" };
  if (["action", "bonus", "reaction", "special"].includes(activation)) return { type: activation, value: null, condition: "" };
  return { type: activation || "special", value: null, condition: "" };
}

function utilityRoll() {
  return { formula: "", name: "", prompt: false, visible: false };
}

function consumptionTarget(type, target = "", value = "1") {
  return { type, target, value: String(value), scaling: { mode: "", formula: "" } };
}

function damagePartFormula(formula, types = ["healing"]) {
  return {
    number: null,
    denomination: null,
    bonus: "",
    types,
    custom: { enabled: true, formula: String(formula ?? "") },
    scaling: { mode: "", number: 1, formula: "" }
  };
}

function activityFlavor(activity) {
  const notes = [];
  if (activity.condition) notes.push(String(activity.condition));
  if (activity.attackModifier || activity.damageBonus) {
    const attack = Number(activity.attackModifier ?? 0);
    const damage = Number(activity.damageBonus ?? 0);
    notes.push(`Modificador declarado: ${attack >= 0 ? "+" : ""}${attack} no ataque; ${damage >= 0 ? "+" : ""}${damage} no dano.`);
  }
  if (activity.damage) notes.push(`Dano declarado: ${activity.damage}${activity.damageType ? ` ${activity.damageType}` : ""}.`);
  if (activity.pushDistance) notes.push(`Empurrão declarado: ${activity.pushDistance}.`);
  if (activity.check) notes.push(`Teste declarado: ${activity.check}.`);
  if (activity.weapon) notes.push(`Arma declarada: ${activity.weapon}.`);
  if (activity.consumesExternalItem?.name) notes.push(`Consome 1 uso de ${activity.consumesExternalItem.name}; a ligação ao Item externo fica assistida.`);
  if (["attack", "check", "reaction", "toggle"].includes(activity.type)) notes.push(`FA-4 preserva esta ação como Activity assistida quando o sistema não expõe contexto suficiente para resolução automática segura.`);
  return notes.join(" ");
}

function buildActivity(bundle, activity, effectIdByKey) {
  const isHeal = activity.type === "heal";
  const nativeType = isHeal ? "heal" : "utility";
  const activation = activationData(activity.activation);
  activation.condition = String(activity.condition ?? "");
  const consumptionTargets = [];
  if (Number(activity.consumesItemUse ?? 0) > 0) consumptionTargets.push(consumptionTarget("itemUses", "", activity.consumesItemUse));

  const linkedEffect = activity.appliesEffect ? effectIdByKey[activity.appliesEffect] : null;
  const source = {
    _id: stableId(`feat-activity:${bundle.identity?.grimorioId}:${activity.key}`),
    type: nativeType,
    name: activity.name || `${bundle.identity?.name ?? "Talento"} — ${activity.key}`,
    activation,
    consumption: {
      scaling: { allowed: false, max: "" },
      spellSlot: false,
      targets: consumptionTargets
    },
    description: { chatFlavor: activityFlavor(activity) },
    effects: linkedEffect ? [{ _id: linkedEffect, level: { min: null, max: null } }] : [],
    flags: embeddedFlags(bundle, "activity", activity.key, {
      declarativeType: activity.type,
      assisted: nativeType !== activity.type,
      cadence: activity.cadence ?? "",
      targetCooldown: clone(activity.targetCooldown ?? [])
    }),
    uses: emptyUses(),
    visibility: {
      identifier: bundle.identity?.identifier ?? "",
      level: { min: null, max: null },
      requireAttunement: false,
      requireIdentification: false,
      requireMagic: false
    }
  };

  if (nativeType === "utility") {
    source.roll = utilityRoll();
    if (bundle.identity?.grimorioId === "phb-2014-sortudo" && activity.key === "spend-luck") {
      source.roll = { formula: "1d20", name: "Dado de Sorte", prompt: false, visible: true };
      source.flags[MODULE_ID].runtimeAssistedRoll = "luck-d20";
    }
  }
  if (nativeType === "heal") {
    const type = activity.healingType === "temphp" ? "temphp" : "healing";
    source.healing = damagePartFormula(activity.healing || "0", [type]);
  }
  if (activity.target === "self") {
    source.target = {
      template: { count: "", contiguous: false, type: "", size: "", width: "", height: "", units: "ft" },
      affects: { count: "", type: "self", choice: false, special: "" },
      prompt: false,
      override: true
    };
  }
  return source;
}

export function validateFeatAutomationPlan(plan, bundle = null) {
  const errors = [];
  const warnings = [];
  if (!plan || typeof plan !== "object" || Array.isArray(plan)) {
    return { ok: false, errors: ["Plano declarativo de automação de Talento ausente ou inválido."], warnings };
  }
  if (plan.schema !== FEAT_AUTOMATION_SCHEMA) errors.push(`Schema de automação incompatível: esperado ${FEAT_AUTOMATION_SCHEMA}.`);
  if (Number(plan.schemaVersion) !== FEAT_AUTOMATION_SCHEMA_VERSION) errors.push(`Versão do plano de automação incompatível: esperado ${FEAT_AUTOMATION_SCHEMA_VERSION}.`);
  if (!clean(plan.profileId)) errors.push("automation.profileId é obrigatório.");
  if (bundle?.identity?.grimorioId && clean(plan.profileId) !== clean(bundle.identity.grimorioId)) errors.push(`automation.profileId (${plan.profileId}) não corresponde ao grimorioId (${bundle.identity.grimorioId}).`);
  if (!["full", "partial", "description"].includes(plan.tier)) errors.push(`Tier de automação inválido: ${plan.tier}.`);
  for (const field of ["advancements", "effects", "activities", "runtime", "limitations", "notes"]) if (!Array.isArray(plan[field])) errors.push(`automation.${field} precisa ser um array.`);

  const uniqueKeys = (items, label) => {
    const seen = new Set();
    for (const item of asArray(items)) {
      const key = clean(item?.key);
      if (!key) { errors.push(`${label} possui entrada sem key.`); continue; }
      if (seen.has(key)) errors.push(`${label} possui key duplicada: ${key}.`);
      seen.add(key);
    }
  };
  uniqueKeys(plan.advancements, "automation.advancements");
  uniqueKeys(plan.effects, "automation.effects");
  uniqueKeys(plan.activities, "automation.activities");
  uniqueKeys(plan.runtime, "automation.runtime");

  for (const item of asArray(plan.advancements)) if (!DECLARATIVE_ADVANCEMENT_TYPES.has(item.type)) errors.push(`Advancement ${item.key} possui tipo não suportado: ${item.type}.`);
  for (const item of asArray(plan.effects)) if (!SAFE_EFFECT_MECHANICS.has(item.mechanic) && !DEFERRED_EFFECT_MECHANICS.has(item.mechanic)) errors.push(`Effect ${item.key} possui mechanic não suportado: ${item.mechanic}.`);
  for (const item of asArray(plan.activities)) if (!DECLARATIVE_ACTIVITY_TYPES.has(item.type)) errors.push(`Activity ${item.key} possui tipo não suportado: ${item.type}.`);
  if (plan.uses !== null && plan.uses !== undefined) {
    if (!plan.uses || typeof plan.uses !== "object" || Array.isArray(plan.uses)) errors.push("automation.uses precisa ser null ou objeto.");
    else {
      if (!clean(plan.uses.max)) errors.push("automation.uses.max é obrigatório quando uses está presente.");
      if (!Array.isArray(plan.uses.recovery)) errors.push("automation.uses.recovery precisa ser um array.");
    }
  }
  const effectKeys = new Set(asArray(plan.effects).map(item => clean(item?.key)).filter(Boolean));
  for (const activity of asArray(plan.activities)) {
    if (activity.appliesEffect && !effectKeys.has(clean(activity.appliesEffect))) errors.push(`Activity ${activity.key} referencia Effect inexistente: ${activity.appliesEffect}.`);
    if (Number(activity.consumesItemUse ?? 0) > 0 && !plan.uses) warnings.push(`Activity ${activity.key} consome itemUses, mas o plano não declara uses no Item.`);
  }
  if (plan.tier === "full" && asArray(plan.runtime).length) warnings.push("Perfil full contém runtime declarado; a cobertura nativa deve ser revisada.");
  return { ok: errors.length === 0, errors, warnings };
}

export function compileFeatAutomation(bundle) {
  const plan = bundle?.automation;
  const validation = validateFeatAutomationPlan(plan, bundle);
  if (!validation.ok) throw new Error(validation.errors.join("\n"));

  const nativeAdvancements = [];
  const assistedChoices = [];
  const deferredAdvancements = [];
  let materializedAdvancementPlans = 0;
  for (const advancement of asArray(plan.advancements)) {
    const compiled = compileAdvancement(bundle, advancement);
    if (asArray(compiled.native).length || compiled.assisted) materializedAdvancementPlans += 1;
    nativeAdvancements.push(...asArray(compiled.native));
    if (compiled.assisted) assistedChoices.push(clone(compiled.assisted));
    if (!asArray(compiled.native).length && !compiled.assisted) deferredAdvancements.push({ ...clone(advancement), reason: compiled.reason });
  }

  const nativeEffects = [];
  const deferredEffects = [];
  for (const effect of asArray(plan.effects)) {
    const compiled = compileEffect(bundle, effect);
    if (compiled.native) nativeEffects.push(compiled.native);
    else deferredEffects.push({ ...clone(effect), reason: compiled.reason });
  }

  const effectIdByKey = Object.fromEntries(nativeEffects.map(effect => [effect.flags?.[MODULE_ID]?.automationKey, effect._id]));
  const activities = asArray(plan.activities).map(activity => buildActivity(bundle, activity, effectIdByKey));
  const advancement = Object.fromEntries(nativeAdvancements.map(item => [item._id, item]));
  const activityMap = Object.fromEntries(activities.map(item => [item._id, item]));
  const uses = compileItemUses(plan.uses);
  const declared = {
    advancements: asArray(plan.advancements).length,
    effects: asArray(plan.effects).length,
    activities: asArray(plan.activities).length,
    uses: plan.uses ? 1 : 0,
    runtime: asArray(plan.runtime).length
  };
  const runtimeDescriptors = clone(asArray(plan.runtime));
  const materialized = {
    advancements: materializedAdvancementPlans,
    advancementDocuments: nativeAdvancements.length,
    assistedChoices: assistedChoices.length,
    effects: nativeEffects.length,
    activities: activities.length,
    uses: plan.uses ? 1 : 0,
    runtime: runtimeDescriptors.length
  };
  const deferred = {
    advancements: deferredAdvancements,
    effects: deferredEffects,
    runtime: []
  };

  return Object.freeze({
    advancement,
    activities: activityMap,
    effects: nativeEffects,
    uses,
    metadata: Object.freeze({
      applied: true,
      phase: FEAT_AUTOMATION_PHASE,
      compilerVersion: FEAT_AUTOMATION_COMPILER_VERSION,
      planSchema: plan.schema,
      planSchemaVersion: plan.schemaVersion,
      profileId: plan.profileId,
      tier: plan.tier,
      declared: Object.freeze(declared),
      materialized: Object.freeze(materialized),
      deferred: Object.freeze({
        advancements: deferredAdvancements.length,
        effects: deferredEffects.length,
        runtime: deferred.runtime.length
      }),
      deferredAdvancements: Object.freeze(deferredAdvancements),
      assistedChoices: Object.freeze(assistedChoices),
      deferredEffects: Object.freeze(deferredEffects),
      runtime: Object.freeze(runtimeDescriptors),
      usesPlan: plan.uses ? Object.freeze(clone(plan.uses)) : null,
      target: plan.target ? Object.freeze(clone(plan.target)) : null,
      limitations: Object.freeze(clone(asArray(plan.limitations))),
      notes: Object.freeze(clone(asArray(plan.notes))),
      policy: "native-safe-first+assisted-choices+runtime-safe-hooks"
    })
  });
}

export function applyFeatAutomation(source, bundle) {
  if (!bundle?.automation) {
    source.system.advancement = {};
    source.system.activities = {};
    source.system.uses = emptyUses();
    source.effects = [];
    return Object.freeze({
      applied: false,
      phase: FEAT_AUTOMATION_PHASE,
      compilerVersion: FEAT_AUTOMATION_COMPILER_VERSION,
      tier: "description",
      policy: "legacy-v1-description-first",
      declared: Object.freeze({ advancements: 0, effects: 0, activities: 0, uses: 0, runtime: 0 }),
      materialized: Object.freeze({ advancements: 0, advancementDocuments: 0, assistedChoices: 0, effects: 0, activities: 0, uses: 0, runtime: 0 }),
      deferred: Object.freeze({ advancements: 0, effects: 0, runtime: 0 }),
      usesPlan: null,
      assistedChoices: Object.freeze([]),
      target: null,
      limitations: Object.freeze([]),
      notes: Object.freeze([])
    });
  }

  const compiled = compileFeatAutomation(bundle);
  source.system.advancement = compiled.advancement;
  source.system.activities = compiled.activities;
  source.system.uses = compiled.uses;
  source.effects = compiled.effects;
  return compiled.metadata;
}

export function featAutomationSupport() {
  return Object.freeze({
    phase: FEAT_AUTOMATION_PHASE,
    compilerVersion: FEAT_AUTOMATION_COMPILER_VERSION,
    planSchema: FEAT_AUTOMATION_SCHEMA,
    planSchemaVersion: FEAT_AUTOMATION_SCHEMA_VERSION,
    policy: "native-safe-first+assisted-choices+runtime-safe-hooks",
    supports: Object.freeze({
      uses: true,
      activities: true,
      activeEffects: true,
      abilityScoreAdvancement: true,
      fixedArmorTraitAdvancement: true,
      openTraitAdvancement: true,
      openItemChoiceAdvancement: true,
      spellChoiceAdvancement: true,
      linkedResilientAdvancement: true,
      acquisitionChoicePrompt: true
    }),
    fa3: Object.freeze({
      declarativeChoicesResolved: 12,
      nativeAdvancementDocumentsAdded: 10,
      assistedLinkedChoices: 3,
      resilientLinkedDocuments: 2,
      openDragDropItemChoices: 5,
      openTraitChoices: 3
    }),
    fa4: Object.freeze({
      conditionalEffectMarkersResolved: 3,
      runtimeDescriptorsMaterialized: true,
      deferredEffects: 0,
      deferredRuntime: 0
    }),
    deferredToFa3: Object.freeze([]),
    deferredToFa4: Object.freeze([]),
    runtimePhase: "FA-4",
    runtimeRecordsAreMaterializedDescriptors: true,
    nativeActivityStrategy: "heal-native; conditional actions remain safe utility activities with FA-4 runtime/assistance",
    activeEffectModes: Object.freeze({ ...CORE_ACTIVE_EFFECT_MODES })
  });
}
