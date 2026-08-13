import { MODULE_ID } from "./pack-storage.js";

export const FEAT_RUNTIME_PHASE = "FA-4";
export const FEAT_RUNTIME_VERSION = 1;

const CORE_ACTIVE_EFFECT_MODES = globalThis.CONST?.ACTIVE_EFFECT_MODES ?? {
  CUSTOM: 0, MULTIPLY: 1, ADD: 2, DOWNGRADE: 3, UPGRADE: 4, OVERRIDE: 5
};

function clean(value) { return String(value ?? "").trim(); }
function asArray(value) { return Array.isArray(value) ? value : []; }
function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
function getProperty(object, path) {
  if (!object || !path) return undefined;
  if (globalThis.foundry?.utils?.getProperty) return globalThis.foundry.utils.getProperty(object, path);
  return String(path).split(".").reduce((value, key) => value?.[key], object);
}
function setProperty(object, path, value) {
  if (globalThis.foundry?.utils?.setProperty) return globalThis.foundry.utils.setProperty(object, path, value);
  const keys = String(path).split(".");
  let cursor = object;
  for (let i = 0; i < keys.length - 1; i += 1) cursor = cursor[keys[i]] ??= {};
  cursor[keys.at(-1)] = value;
  return true;
}
function moduleFlags(document) {
  if (typeof document?.getFlag === "function") return document.getFlag(MODULE_ID, "automation") ? (document.flags?.[MODULE_ID] ?? document._source?.flags?.[MODULE_ID] ?? {}) : (document.flags?.[MODULE_ID] ?? document._source?.flags?.[MODULE_ID] ?? {});
  return document?.flags?.[MODULE_ID] ?? document?._source?.flags?.[MODULE_ID] ?? {};
}
function actorItems(actor) { return actor?.items?.contents ?? actor?.items ?? []; }
function actorEffects(actor) { return actor?.effects?.contents ?? actor?.effects ?? []; }
function isOwnedFeat(item) {
  const flags = moduleFlags(item);
  return item?.type === "feat" && flags.documentRole === "feat" && Boolean(flags.grimorioId);
}
function featById(actor, featId) {
  return actorItems(actor).find(item => isOwnedFeat(item) && moduleFlags(item).grimorioId === featId) ?? null;
}
function hasFeat(actor, featId) { return Boolean(featById(actor, featId)); }
function automationFor(item) { return moduleFlags(item)?.automation ?? {}; }
function runtimeRecords(item) { return asArray(automationFor(item)?.runtime); }
function runtimeRecord(actor, featId, key) {
  const item = featById(actor, featId);
  if (!item) return null;
  return runtimeRecords(item).find(record => record?.key === key) ?? null;
}
function choiceValue(item, choiceId) {
  const choices = moduleFlags(item)?.choices ?? {};
  const value = choices?.[choiceId];
  return typeof value === "string" ? value : clean(value?.key);
}

const COVERAGE = Object.freeze({
  "ignore-resistance-for-chosen-damage-type": { mode: "guarded", hook: "dnd5e.preCalculateDamage" },
  "replace-damage-die-result-one-with-two": { mode: "assisted", hook: "dnd5e.rollDamage" },
  "merge-or-create-superiority-die-resource": { mode: "assisted", hook: "feat-acquisition" },
  "prevent-surprised-while-conscious": { mode: "assisted", hook: "combat-surprise-evaluation" },
  "deny-hidden-attacker-advantage-against-owner": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "validate-two-melee-weapons-and-toggle-effect": { mode: "automatic", hook: "createItem/updateItem/deleteItem" },
  "offer-reroll-and-choose-either-result": { mode: "assisted", hook: "dnd5e.rollDamage" },
  "suppress-long-range-disadvantage": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "ignore-half-and-three-quarters-cover": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "apply-minus-five-plus-ten-when-toggle-consumed": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "double-range-for-spells-requiring-attack-roll": { mode: "assisted", hook: "spell-attack-preparation" },
  "reduce-standing-from-prone-cost-to-five-feet": { mode: "assisted", hook: "movement-cost" },
  "remove-extra-climb-cost": { mode: "assisted", hook: "movement-cost" },
  "reduce-running-start-to-five-feet": { mode: "assisted", hook: "jump-calculation" },
  "grant-advantage-only-when-impersonating-another-person": { mode: "assisted", hook: "dnd5e.preRollSkill" },
  "grant-advantage-against-smaller-unmounted-target-while-mounted": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "apply-evasion-like-mount-damage-rule": { mode: "assisted", hook: "dnd5e.preCalculateDamage" },
  "grant-advantage-on-concentration-save": { mode: "automatic", hook: "dnd5e.preRollConcentration" },
  "allow-qualified-single-target-action-spell-instead-of-weapon-attack": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "validate-list-level-and-ritual-before-adding": { mode: "assisted", hook: "dnd5e.dropItemSheetData" },
  "consume-healers-kit-use-and-track-target-cooldown": { mode: "guarded", hook: "dnd5e.preUseActivity/postUseActivity" },
  "offer-reaction-and-recalculate-hit-with-temporary-ac-bonus": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "ignore-loading-property-for-proficient-crossbows": { mode: "assisted", hook: "weapon-attack-preparation" },
  "suppress-disadvantage-from-hostile-creature-within-five-feet": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "grant-advantage-to-perception-and-investigation": { mode: "assisted", hook: "dnd5e.preRollSkill" },
  "grant-advantage": { mode: "assisted", hook: "dnd5e.preRollSavingThrow" },
  "grant-resistance-to-trap-damage": { mode: "assisted", hook: "dnd5e.preCalculateDamage" },
  "allow-trap-search-at-normal-pace": { mode: "description", hook: "travel-pace" },
  "grant-advantage-against-creature-grappled-by-owner": { mode: "assisted", hook: "dnd5e.preRollAttack" },
  "apply-restrained-to-owner-and-target-until-grapple-ends": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "limit-feat-granted-cast-to-once-per-long-rest": { mode: "assisted", hook: "dnd5e.preUseLinkedSpell" },
  "validate-dash-and-ten-foot-straight-line-movement": { mode: "activity", hook: "dnd5e.preUseActivity" },
  "track-per-target-short-or-long-rest-cooldown": { mode: "guarded", hook: "dnd5e.preUseActivity/postUseActivity/restCompleted" },
  "allow-opportunity-attack-with-qualifying-polearm": { mode: "assisted", hook: "creature-enters-reach" },
  "apply-medium-armor-master-rules-only-while-medium-armor-equipped": { mode: "automatic", hook: "createItem/updateItem/deleteItem" },
  "reduce-qualified-nonmagical-attack-damage-by-three-while-heavy-armor-equipped": { mode: "automatic", hook: "dnd5e.preCalculateDamage" },
  "offer-melee-reaction-attack": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "grant-disadvantage-on-resulting-concentration-save": { mode: "assisted", hook: "dnd5e.preRollConcentration" },
  "offer-bonus-action-melee-weapon-attack": { mode: "activity", hook: "dnd5e.postRollAttack" },
  "add-equipped-shield-ac-bonus-to-save": { mode: "assisted", hook: "dnd5e.preRollSavingThrow" },
  "replace-half-damage-with-zero-when-reaction-used": { mode: "activity", hook: "dnd5e.preCalculateDamage" },
  "ignore-difficult-terrain-extra-cost-for-turn": { mode: "assisted", hook: "movement-cost" },
  "suppress-opportunity-attacks-from-creatures-owner-attacked-this-turn": { mode: "assisted", hook: "opportunity-attack-evaluation" },
  "enforce-minimum-healing-equal-two-times-constitution-modifier": { mode: "automatic", hook: "dnd5e.rollHitDie" },
  "set-target-speed-to-zero-for-rest-of-turn": { mode: "assisted", hook: "opportunity-attack-hit" },
  "allow-opportunity-attack-despite-disengage": { mode: "assisted", hook: "opportunity-attack-evaluation" },
  "offer-reaction-melee-weapon-attack": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "allow-hide-while-lightly-obscured-from-observer": { mode: "description", hook: "hide-eligibility" },
  "preserve-hidden-position": { mode: "description", hook: "hidden-ranged-attack-miss" },
  "suppress-dim-light-disadvantage": { mode: "assisted", hook: "dnd5e.preRollSkill" },
  "roll-additional-d20-and-let-owner-choose-result": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "roll-additional-d20-and-let-owner-choose-attacker-or-luck-die": { mode: "activity", hook: "dnd5e.postUseActivity" },
  "cancel-opposing-luck-points-without-extra-die": { mode: "assisted", hook: "multiple-luck-points-on-same-roll" }
});

// Alguns comportamentos aparecem em mais de um Talento (por exemplo, cobertura ignorada).
// A cobertura é indexada por behavior e a validação por registro individual usa featId+key.

function coverageFor(record) {
  return COVERAGE[record?.behavior] ?? { mode: "unsupported", hook: clean(record?.trigger) };
}

function actorFromArgs(args) {
  for (const value of args) {
    if (value?.documentName === "Actor" || (value?.items && value?.system && !value?.actor)) return value;
    if (value?.subject?.documentName === "Actor") return value.subject;
    if (value?.actor?.documentName === "Actor") return value.actor;
    if (value?.subject?.actor?.documentName === "Actor") return value.subject.actor;
    if (value?.activity?.actor?.documentName === "Actor") return value.activity.actor;
    if (value?.item?.actor?.documentName === "Actor") return value.item.actor;
  }
  return null;
}

function activityFromArgs(args) {
  for (const value of args) {
    if (value?.constructor?.name?.includes?.("Activity") || value?.item?.type && value?.activation) return value;
    if (value?.subject?.item && value?.subject?.activation) return value.subject;
    if (value?.activity?.item) return value.activity;
  }
  return null;
}

function activityFlags(activity) {
  return activity?.flags?.[MODULE_ID] ?? activity?._source?.flags?.[MODULE_ID] ?? {};
}

function isEquipped(item) { return Boolean(item?.system?.equipped ?? item?._source?.system?.equipped); }
function itemProperties(item) {
  const props = item?.system?.properties ?? item?._source?.system?.properties;
  if (props instanceof Set) return props;
  if (Array.isArray(props)) return new Set(props);
  if (props && typeof props === "object") return new Set(Object.entries(props).filter(([,value]) => value).map(([key]) => key));
  return new Set();
}
function armorType(item) {
  const values = [
    item?.system?.armor?.type,
    item?.system?.type?.value,
    item?.system?.type,
    item?._source?.system?.armor?.type,
    item?._source?.system?.type?.value
  ].map(clean).map(value => value.toLowerCase());
  if (values.some(value => value === "heavy" || value === "hvy" || value.includes("heavy") || value.includes("pesad"))) return "heavy";
  if (values.some(value => value === "medium" || value === "med" || value.includes("medium") || value.includes("média") || value.includes("media"))) return "medium";
  if (values.some(value => value === "light" || value === "lgt" || value.includes("light") || value.includes("leve"))) return "light";
  return "";
}
function equippedArmor(actor, type) {
  return actorItems(actor).find(item => item?.type === "equipment" && isEquipped(item) && armorType(item) === type) ?? null;
}
function isMeleeWeapon(item) {
  if (item?.type !== "weapon" || !isEquipped(item)) return false;
  // Ambidestro exige uma arma corpo a corpo separada em cada mão. Uma arma com
  // propriedade two-handed nunca pode satisfazer esse requisito por si só.
  const props = itemProperties(item);
  if (props.has("two") || props.has("twoHanded") || props.has("two-handed")) return false;
  const type = clean(item?.system?.type?.value ?? item?.system?.type).toLowerCase();
  if (/melee|simplem|martialm|simples?m|marcialm/.test(type)) return true;
  const activities = Object.values(item?.system?.activities ?? {});
  return activities.some(activity => clean(activity?.attack?.type?.value ?? activity?.attack?.type).toLowerCase() === "melee");
}
function equippedMeleeWeapons(actor) { return actorItems(actor).filter(isMeleeWeapon); }
function dexterityValue(actor) { return Number(actor?.system?.abilities?.dex?.value ?? 0) || 0; }

function runtimeEffectId(featId, key) { return `grimorio-runtime:${featId}:${key}`; }
function existingRuntimeEffect(actor, featId, key) {
  return actorEffects(actor).find(effect => {
    const flags = effect?.flags?.[MODULE_ID] ?? effect?._source?.flags?.[MODULE_ID] ?? {};
    return flags.runtimeEffect === true && flags.featId === featId && flags.runtimeKey === key;
  }) ?? null;
}
function runtimeAcEffectSource(featId, key, name, value = 1) {
  return {
    name,
    img: "icons/svg/shield.svg",
    disabled: false,
    transfer: false,
    changes: [{ key: "system.attributes.ac.bonus", mode: CORE_ACTIVE_EFFECT_MODES.ADD, value: String(value), priority: 20 }],
    statuses: [],
    flags: { [MODULE_ID]: { managed: true, runtimeEffect: true, featId, runtimeKey: key, phase: FEAT_RUNTIME_PHASE, runtimeVersion: FEAT_RUNTIME_VERSION } }
  };
}

async function setRuntimeEffect(actor, featId, key, active, source) {
  if (!actor) return false;
  const existing = existingRuntimeEffect(actor, featId, key);
  if (active && !existing && typeof actor.createEmbeddedDocuments === "function") {
    await actor.createEmbeddedDocuments("ActiveEffect", [source], { grimorioFeatRuntime: true });
    return true;
  }
  if (!active && existing && typeof actor.deleteEmbeddedDocuments === "function") {
    await actor.deleteEmbeddedDocuments("ActiveEffect", [existing.id], { grimorioFeatRuntime: true });
    return true;
  }
  return false;
}

export async function syncConditionalFeatEffects(actor) {
  if (!actor) return { changed: 0, states: {} };
  let changed = 0;
  const states = {};

  const dualFeat = featById(actor, "phb-2014-ambidestro");
  const dualActive = Boolean(dualFeat && equippedMeleeWeapons(actor).length >= 2);
  states.dualWielder = dualActive;
  if (await setRuntimeEffect(actor, "phb-2014-ambidestro", "dual-wield-ac", dualActive,
    runtimeAcEffectSource("phb-2014-ambidestro", "dual-wield-ac", "Ambidestro — +1 CA", 1))) changed += 1;

  const mediumFeat = featById(actor, "phb-2014-maestria-em-armadura-media");
  const mediumArmor = equippedArmor(actor, "medium");
  const mediumAcActive = Boolean(mediumFeat && mediumArmor && dexterityValue(actor) >= 16);
  states.mediumArmorMasterAc = mediumAcActive;
  states.mediumArmorStealthDisadvantageSuppression = Boolean(mediumFeat && mediumArmor && itemProperties(mediumArmor).has("stealthDisadvantage"));
  if (await setRuntimeEffect(actor, "phb-2014-maestria-em-armadura-media", "medium-armor-ac", mediumAcActive,
    runtimeAcEffectSource("phb-2014-maestria-em-armadura-media", "medium-armor-ac", "Maestria em Armadura Média — +1 CA", 1))) changed += 1;

  return { changed, states };
}

const syncQueue = new Map();
function scheduleConditionalSync(actor) {
  if (!actor?.id) return;
  if (syncQueue.has(actor.id)) return;
  const timer = setTimeout(async () => {
    syncQueue.delete(actor.id);
    try { await syncConditionalFeatEffects(actor); }
    catch (error) { console.error(`[${MODULE_ID}] Falha ao sincronizar Effects condicionais de Talento.`, { actor, error }); }
  }, 0);
  syncQueue.set(actor.id, timer);
}

function grantAdvantage(config) {
  if (!config || typeof config !== "object") return false;
  config.advantage = true;
  if (config.options && typeof config.options === "object") config.options.advantage = true;
  return true;
}

export function applyWarCasterConcentrationAdvantage(...args) {
  const actor = actorFromArgs(args);
  if (!actor || !hasFeat(actor, "phb-2014-conjurador-de-guerra")) return false;
  if (!runtimeRecord(actor, "phb-2014-conjurador-de-guerra", "concentration-advantage")) return false;
  const config = args.find(value => value && typeof value === "object" && (value.subject || "advantage" in value || value.options)) ?? args[0];
  return grantAdvantage(config);
}

function nestedOrFlat(object, path) {
  if (!object) return undefined;
  if (Object.prototype.hasOwnProperty.call(object, path)) return object[path];
  return getProperty(object, path);
}
function setNestedOrFlat(object, path, value) {
  if (!object) return;
  if (Object.prototype.hasOwnProperty.call(object, path)) object[path] = value;
  else setProperty(object, path, value);
}

export function applyDurableHitDieMinimum(rolls, data = {}) {
  const actor = data?.subject ?? actorFromArgs([data]);
  if (!actor || !hasFeat(actor, "phb-2014-resistente")) return false;
  if (!runtimeRecord(actor, "phb-2014-resistente", "hit-die-minimum")) return false;
  const totals = asArray(rolls).map(roll => Number(roll?.total ?? 0)).filter(Number.isFinite);
  if (!totals.length) return false;
  const total = totals.reduce((sum, value) => sum + value, 0);
  const conMod = Number(actor?.system?.abilities?.con?.mod ?? 0) || 0;
  const minimum = Math.max(2, 2 * conMod);
  if (total >= minimum) return false;
  const delta = minimum - total;
  const updates = data?.updates?.actor;
  if (!updates || typeof updates !== "object") return false;
  const hpPath = "system.attributes.hp.value";
  const current = Number(actor?.system?.attributes?.hp?.value ?? 0) || 0;
  const max = Number(actor?.system?.attributes?.hp?.max ?? Number.POSITIVE_INFINITY);
  const planned = Number(nestedOrFlat(updates, hpPath));
  const target = Number.isFinite(planned) ? Math.min(max, planned + delta) : Math.min(max, current + minimum);
  setNestedOrFlat(updates, hpPath, target);
  data.grimorioDurable = { minimum, rolled: total, adjustment: delta };
  return true;
}

function sourceActivity(options = {}) {
  return options?.activity ?? options?.source?.activity ?? options?.item?.system?.activities?.get?.(options?.activityId) ?? null;
}
function sourceItem(options = {}) {
  return options?.item ?? options?.source?.item ?? sourceActivity(options)?.item ?? null;
}
function attackSourceIsNonmagical(options = {}) {
  const activity = sourceActivity(options);
  const item = sourceItem(options);
  if (!activity && !item) return false;
  const type = clean(activity?.type ?? activity?.constructor?.type ?? activity?.constructor?.name).toLowerCase();
  const itemType = clean(item?.type).toLowerCase();
  if (!(type.includes("attack") || itemType === "weapon")) return false;
  const props = itemProperties(item);
  if (props.has("mgc") || props.has("magical")) return false;
  return true;
}
function damageType(entry) { return clean(entry?.type ?? entry?.damageType ?? entry?.active?.type).toLowerCase(); }
function damageAmount(entry) {
  for (const key of ["value", "amount"]) if (Number.isFinite(Number(entry?.[key]))) return { key, value: Number(entry[key]) };
  return null;
}

export function applyHeavyArmorMasterDamageReduction(actor, damages, options = {}) {
  if (!actor || !hasFeat(actor, "phb-2014-maestria-em-armadura-pesada")) return false;
  if (!runtimeRecord(actor, "phb-2014-maestria-em-armadura-pesada", "heavy-armor-damage-reduction")) return false;
  if (!equippedArmor(actor, "heavy") || !attackSourceIsNonmagical(options)) return false;
  const qualified = new Set(["bludgeoning", "piercing", "slashing"]);
  let remaining = 3;
  let changed = false;
  for (const entry of asArray(damages)) {
    if (remaining <= 0) break;
    if (!qualified.has(damageType(entry))) continue;
    const amount = damageAmount(entry);
    if (!amount || amount.value <= 0) continue;
    const reduction = Math.min(remaining, amount.value);
    entry[amount.key] = amount.value - reduction;
    remaining -= reduction;
    changed = changed || reduction > 0;
  }
  if (changed) {
    options.grimorioHeavyArmorMaster = { reduction: 3 - remaining, phase: FEAT_RUNTIME_PHASE };
  }
  return changed;
}

function activityRuntimeInfo(activity) {
  const flags = activityFlags(activity);
  if (!flags?.featId) return null;
  return { featId: flags.featId, key: flags.automationKey, declarativeType: flags.declarativeType, targetCooldown: asArray(flags.targetCooldown), activity };
}
function targetActorsFromUsage(usageConfig = {}, results = null) {
  const pools = [usageConfig?.targets, usageConfig?.target?.actors, results?.targets, results?.target?.actors];
  const actors = [];
  for (const pool of pools) {
    const values = pool instanceof Set ? [...pool] : Array.isArray(pool) ? pool : [];
    for (const value of values) {
      const actor = value?.actor ?? value?.document?.actor ?? (value?.documentName === "Actor" ? value : null);
      if (actor && !actors.includes(actor)) actors.push(actor);
    }
  }
  return actors;
}
function cooldownFlagPath(featId, activityKey) { return `runtimeCooldowns.${featId}.${activityKey}`; }
function targetCooldownRecord(actor, featId, activityKey) {
  const root = actor?.flags?.[MODULE_ID]?.runtimeCooldowns ?? actor?._source?.flags?.[MODULE_ID]?.runtimeCooldowns ?? {};
  return root?.[featId]?.[activityKey] ?? null;
}
async function setTargetCooldown(actor, featId, activityKey, recovery) {
  if (!actor || typeof actor.setFlag !== "function") return false;
  try {
    await actor.setFlag(MODULE_ID, cooldownFlagPath(featId, activityKey), { recovery: [...new Set(recovery)], appliedAt: Date.now(), phase: FEAT_RUNTIME_PHASE });
    return true;
  } catch (error) {
    // Um jogador pode não possuir permissão para alterar o Actor alvo de outro jogador.
    // Nesse caso não falhamos a Activity nem falsificamos o cooldown: avisamos que o
    // controle daquele alvo precisa ser mantido manualmente/por um Mestre.
    console.warn(`[${MODULE_ID}] Não foi possível persistir cooldown runtime no alvo.`, { actor, featId, activityKey, error });
    globalThis.ui?.notifications?.warn?.(`${actor.name ?? "O alvo"}: não foi possível registrar automaticamente o cooldown deste Talento por falta de permissão. Controle este alvo manualmente até o descanso.`);
    return false;
  }
}
function restPeriod(result = {}, config = {}) {
  const type = clean(result?.type ?? result?.restType ?? config?.type ?? config?.restType).toLowerCase();
  if (type.includes("long") || result?.longRest === true) return "lr";
  if (type.includes("short") || result?.shortRest === true) return "sr";
  return "";
}
async function clearRecoveredCooldowns(actor, period) {
  if (!actor || !period || typeof actor.unsetFlag !== "function") return 0;
  const root = clone(actor?.flags?.[MODULE_ID]?.runtimeCooldowns ?? {}) ?? {};
  let changed = 0;
  for (const [featId, activities] of Object.entries(root)) {
    for (const [key, record] of Object.entries(activities ?? {})) {
      const recovery = asArray(record?.recovery);
      if (recovery.includes(period) || (period === "lr" && recovery.includes("sr"))) {
        await actor.unsetFlag(MODULE_ID, cooldownFlagPath(featId, key));
        changed += 1;
      }
    }
  }
  return changed;
}

function normalizeName(value) { return clean(value).toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function findHealersKit(actor) {
  return actorItems(actor).find(item => {
    const name = normalizeName(item?.name);
    return name.includes("kit de primeiros-socorros") || name.includes("kit de primeiros socorros") || name.includes("healer") && name.includes("kit");
  }) ?? null;
}
function itemRemainingUses(item) {
  const max = Number(item?.system?.uses?.max ?? 0);
  const spent = Number(item?.system?.uses?.spent ?? 0);
  if (Number.isFinite(max) && max > 0) return Math.max(0, max - (Number.isFinite(spent) ? spent : 0));
  const value = Number(item?.system?.uses?.value);
  return Number.isFinite(value) ? Math.max(0, value) : null;
}
async function consumeOneItemUse(item) {
  if (!item || typeof item.update !== "function") return false;
  if (item?.system?.uses && "spent" in item.system.uses) {
    const spent = Number(item.system.uses.spent ?? 0) || 0;
    await item.update({ "system.uses.spent": spent + 1 }, { grimorioFeatRuntime: true });
    return true;
  }
  if (item?.system?.uses && "value" in item.system.uses) {
    const value = Number(item.system.uses.value ?? 0) || 0;
    await item.update({ "system.uses.value": Math.max(0, value - 1) }, { grimorioFeatRuntime: true });
    return true;
  }
  return false;
}

export async function preUseFeatRuntimeActivity(activity, usageConfig = {}) {
  const info = activityRuntimeInfo(activity);
  if (!info) return true;
  const actor = activity?.actor ?? activity?.item?.actor ?? null;
  if (!actor) return true;
  const targets = targetActorsFromUsage(usageConfig);
  if (info.targetCooldown.length && targets.length) {
    const blocked = targets.find(target => targetCooldownRecord(target, info.featId, info.key));
    if (blocked) {
      globalThis.ui?.notifications?.warn?.(`${activity.name}: ${blocked.name ?? "o alvo"} já recebeu este benefício e precisa concluir o descanso exigido.`);
      return false;
    }
  }
  if (info.featId === "phb-2014-curandeiro" && ["stabilize", "treat-wounds"].includes(info.key)) {
    const kit = findHealersKit(actor);
    const remaining = itemRemainingUses(kit);
    if (!kit || remaining === 0) {
      globalThis.ui?.notifications?.warn?.(`${activity.name}: é necessário possuir um Kit de Primeiros-Socorros com uso disponível.`);
      return false;
    }
  }
  return true;
}

export async function postUseFeatRuntimeActivity(activity, usageConfig = {}, results = null) {
  const info = activityRuntimeInfo(activity);
  if (!info) return false;
  const actor = activity?.actor ?? activity?.item?.actor ?? null;
  if (!actor) return false;
  let changed = false;
  const targets = targetActorsFromUsage(usageConfig, results);
  if (info.targetCooldown.length && targets.length) {
    for (const target of targets) changed = (await setTargetCooldown(target, info.featId, info.key, info.targetCooldown)) || changed;
  }
  if (info.featId === "phb-2014-curandeiro" && ["stabilize", "treat-wounds"].includes(info.key)) {
    const kit = findHealersKit(actor);
    if (kit) changed = (await consumeOneItemUse(kit)) || changed;
  }
  return changed;
}

export function runtimeCoverageForActor(actor) {
  const records = [];
  for (const item of actorItems(actor).filter(isOwnedFeat)) {
    const featId = moduleFlags(item).grimorioId;
    for (const runtime of runtimeRecords(item)) {
      const coverage = coverageFor(runtime);
      records.push({ featId, featName: item.name, key: runtime.key, trigger: runtime.trigger, behavior: runtime.behavior, mode: coverage.mode, hook: coverage.hook });
    }
  }
  return records;
}

export function validateFeatRuntimeCoverage(bundles = []) {
  const unknown = [];
  const records = [];
  for (const bundle of asArray(bundles)) {
    for (const runtime of asArray(bundle?.automation?.runtime)) {
      const coverage = coverageFor(runtime);
      const row = { featId: bundle?.identity?.grimorioId ?? "", key: runtime?.key ?? "", behavior: runtime?.behavior ?? "", ...coverage };
      records.push(row);
      if (coverage.mode === "unsupported") unknown.push(row);
    }
  }
  return { ok: unknown.length === 0, records, unknown };
}

let hooksRegistered = false;
export function registerFeatRuntimeHooks() {
  if (hooksRegistered || !globalThis.Hooks?.on) return false;
  hooksRegistered = true;

  globalThis.Hooks.on("dnd5e.preRollConcentration", (...args) => applyWarCasterConcentrationAdvantage(...args));
  globalThis.Hooks.on("dnd5e.rollHitDie", (rolls, data) => applyDurableHitDieMinimum(rolls, data));
  globalThis.Hooks.on("dnd5e.preCalculateDamage", (actor, damages, options) => applyHeavyArmorMasterDamageReduction(actor, damages, options));
  globalThis.Hooks.on("dnd5e.preUseActivity", (activity, usageConfig) => preUseFeatRuntimeActivity(activity, usageConfig));
  globalThis.Hooks.on("dnd5e.postUseActivity", (activity, usageConfig, results) => postUseFeatRuntimeActivity(activity, usageConfig, results));
  globalThis.Hooks.on("dnd5e.restCompleted", (actor, result, config) => clearRecoveredCooldowns(actor, restPeriod(result, config)));

  const itemChange = item => { if (item?.actor) scheduleConditionalSync(item.actor); };
  globalThis.Hooks.on("createItem", itemChange);
  globalThis.Hooks.on("updateItem", itemChange);
  globalThis.Hooks.on("deleteItem", itemChange);
  globalThis.Hooks.on("updateActor", actor => scheduleConditionalSync(actor));

  globalThis.Hooks.once?.("ready", () => {
    const actors = globalThis.game?.actors?.contents ?? globalThis.game?.actors ?? [];
    for (const actor of actors) scheduleConditionalSync(actor);
  });
  return true;
}

export function featRuntimeSupport() {
  const modes = Object.values(COVERAGE).reduce((out, entry) => { out[entry.mode] = (out[entry.mode] ?? 0) + 1; return out; }, {});
  return Object.freeze({
    phase: FEAT_RUNTIME_PHASE,
    runtimeVersion: FEAT_RUNTIME_VERSION,
    policy: "safe-hook-first+guarded-assistance",
    behaviorDefinitions: Object.keys(COVERAGE).length,
    behaviorModes: Object.freeze({ ...modes }),
    runtimeRecordsExpectedFromPhb2014: 56,
    conditionalEffects: Object.freeze({
      dualWielderAc: "automatic-actor-effect",
      mediumArmorMasterAc: "automatic-actor-effect",
      mediumArmorStealth: "guarded-assistance",
      heavyArmorMasterReduction: "automatic-damage-hook",
      unarmedDamageMinimum: "runtime-marker+assisted"
    }),
    hooks: Object.freeze([
      "dnd5e.preRollConcentration", "dnd5e.rollHitDie", "dnd5e.preCalculateDamage",
      "dnd5e.preUseActivity", "dnd5e.postUseActivity", "dnd5e.restCompleted",
      "createItem", "updateItem", "deleteItem", "updateActor"
    ]),
    noGlobalApproximation: true
  });
}
