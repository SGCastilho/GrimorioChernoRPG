import { MODULE_ID } from "./pack-storage.js";

export const FEAT_CHOICE_PHASE = "FA-3";
export const FEAT_CHOICE_RUNTIME_VERSION = 1;

const ABILITIES = Object.freeze(["str", "dex", "con", "int", "wis", "cha"]);
const LABELS = Object.freeze({
  acid: "Ácido",
  lightning: "Elétrico",
  fire: "Fogo",
  cold: "Frio",
  thunder: "Trovão",
  bard: "Bardo",
  warlock: "Bruxo",
  cleric: "Clérigo",
  druid: "Druida",
  sorcerer: "Feiticeiro",
  wizard: "Mago",
  str: "Força",
  dex: "Destreza",
  con: "Constituição",
  int: "Inteligência",
  wis: "Sabedoria",
  cha: "Carisma"
});

const promptQueue = new Set();
let hooksRegistered = false;

function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function clean(value) {
  return String(value ?? "").trim();
}

function itemFlag(item, key) {
  if (typeof item?.getFlag === "function") return item.getFlag(MODULE_ID, key);
  return item?.flags?.[MODULE_ID]?.[key] ?? item?._source?.flags?.[MODULE_ID]?.[key];
}

function ownedByActor(item) {
  const parent = item?.parent ?? item?.actor ?? null;
  return Boolean(parent && (parent.documentName === "Actor" || parent.constructor?.name?.includes("Actor") || parent.items));
}

function userCanConfigure(item) {
  if (globalThis.game?.user?.isGM) return true;
  if (item?.isOwner === true) return true;
  const actor = item?.parent ?? item?.actor;
  return actor?.isOwner === true;
}

function optionLabel(key) {
  const config = globalThis.CONFIG?.DND5E;
  const lookup = [config?.damageTypes, config?.spellcasting, config?.abilities].filter(Boolean);
  for (const table of lookup) {
    const entry = table?.[key];
    const label = entry?.label ?? entry;
    if (typeof label === "string" && label.trim()) return label;
  }
  return LABELS[key] ?? key;
}

function escapeHtml(value) {
  const text = String(value ?? "");
  if (globalThis.foundry?.utils?.escapeHTML) return globalThis.foundry.utils.escapeHTML(text);
  return text.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function normalizeFormResult(result, field = "choice") {
  if (!result) return "";
  const object = result.object ?? result;
  if (object instanceof Map) return clean(object.get(field));
  if (typeof object?.get === "function") return clean(object.get(field));
  return clean(object?.[field]);
}

async function promptChoice(item, choice) {
  const options = Array.isArray(choice?.options) ? choice.options.filter(Boolean) : [];
  if (!options.length) return null;
  const title = choice?.label || `Configurar ${item?.name ?? "Talento"}`;
  const select = options.map(key => `<option value="${escapeHtml(key)}">${escapeHtml(optionLabel(key))}</option>`).join("");
  const content = `<div class="form-group"><label>${escapeHtml(title)}</label><div class="form-fields"><select name="choice" autofocus>${select}</select></div></div><p class="notes">Esta escolha é armazenada no Talento do Actor e será reutilizada pelas automações vinculadas.</p>`;

  const DialogV2 = globalThis.foundry?.applications?.api?.DialogV2;
  if (DialogV2?.input) {
    const result = await DialogV2.input({
      window: { title: `${item?.name ?? "Talento"} — ${title}` },
      content,
      modal: true,
      rejectClose: false,
      ok: { label: "Confirmar", icon: "fa-solid fa-check" }
    });
    const selected = normalizeFormResult(result);
    return selected && options.includes(selected) ? selected : null;
  }

  const LegacyDialog = globalThis.Dialog;
  if (LegacyDialog?.prompt) {
    const selected = await LegacyDialog.prompt({
      title: `${item?.name ?? "Talento"} — ${title}`,
      content,
      label: "Confirmar",
      callback: html => clean(html?.find?.('[name="choice"]')?.val?.() ?? html?.querySelector?.('[name="choice"]')?.value)
    });
    return selected && options.includes(selected) ? selected : null;
  }
  return null;
}

function configuredChoices(item) {
  const value = itemFlag(item, "choices");
  return value && typeof value === "object" ? value : {};
}

export function pendingFeatChoices(item) {
  const automation = itemFlag(item, "automation") ?? {};
  const assisted = Array.isArray(automation.assistedChoices) ? automation.assistedChoices : [];
  const configured = configuredChoices(item);
  return assisted.filter(choice => {
    const key = clean(choice.sourceChoiceId ?? choice.key);
    const current = configured?.[key];
    const selected = typeof current === "string" ? current : current?.key;
    return !selected || !choice.options?.includes?.(selected);
  }).map(choice => clone(choice));
}

export async function configureFeatChoices(item, { force = false, notify = true, choiceKeys = null } = {}) {
  if (!item || !ownedByActor(item)) throw new Error("A configuração assistida de Talentos exige um Item pertencente a um Actor.");
  if (!userCanConfigure(item)) throw new Error("Você não possui permissão para configurar este Talento.");
  const automation = itemFlag(item, "automation") ?? {};
  const all = Array.isArray(automation.assistedChoices) ? automation.assistedChoices : [];
  const filterKeys = Array.isArray(choiceKeys) ? new Set(choiceKeys.map(clean)) : null;
  const current = configuredChoices(item);
  const targets = all.filter(choice => {
    const key = clean(choice.sourceChoiceId ?? choice.key);
    if (filterKeys && !filterKeys.has(key)) return false;
    if (force) return true;
    const configured = current?.[key];
    const selected = typeof configured === "string" ? configured : configured?.key;
    return !selected || !choice.options?.includes?.(selected);
  });

  const updates = {};
  const configured = [];
  const skipped = [];
  for (const choice of targets) {
    const key = clean(choice.sourceChoiceId ?? choice.key);
    const selected = await promptChoice(item, choice);
    if (!selected) {
      skipped.push(key);
      continue;
    }
    const record = {
      key: selected,
      label: optionLabel(selected),
      choiceId: key,
      profileId: clean(automation.profileId ?? itemFlag(item, "grimorioId")),
      phase: FEAT_CHOICE_PHASE,
      configuredAt: new Date().toISOString()
    };
    updates[`flags.${MODULE_ID}.choices.${key}`] = record;
    configured.push(record);
  }

  if (Object.keys(updates).length) await item.update(updates);
  if (notify && configured.length) globalThis.ui?.notifications?.info?.(`${item.name}: ${configured.length} escolha(s) de Talento configurada(s).`);
  if (notify && skipped.length) globalThis.ui?.notifications?.warn?.(`${item.name}: ${skipped.length} escolha(s) assistida(s) continuam pendentes.`);
  return { ok: skipped.length === 0, configured, skipped, remaining: pendingFeatChoices(item) };
}

function advancementEntries(source) {
  const object = source?.system?.advancement ?? source?._source?.system?.advancement ?? {};
  return Array.isArray(object) ? object : Object.values(object ?? {});
}

function advancementModuleFlags(advancement) {
  return advancement?.flags?.[MODULE_ID] ?? {};
}

function chosenAbilityFromAsi(advancement) {
  const value = advancement?.value ?? {};
  const assignments = value.assignments ?? value.ability ?? value.abilities ?? value;
  if (typeof assignments === "string" && ABILITIES.includes(assignments)) return assignments;
  if (Array.isArray(assignments)) {
    const found = assignments.find(value => ABILITIES.includes(value));
    if (found) return found;
  }
  if (assignments && typeof assignments === "object") {
    const keys = ABILITIES.filter(key => Number(assignments[key] ?? 0) > 0);
    if (keys.length === 1) return keys[0];
  }
  const chosen = value.chosen;
  if (Array.isArray(chosen)) {
    const found = chosen.find(entry => ABILITIES.includes(entry));
    if (found) return found;
  }
  return "";
}

function chosenSaveFromTrait(advancement) {
  const value = advancement?.value ?? {};
  const chosen = Array.isArray(value.chosen) ? value.chosen : Array.isArray(value) ? value : [];
  for (const entry of chosen) {
    const text = clean(entry);
    const match = /^saves:(str|dex|con|int|wis|cha)$/.exec(text);
    if (match) return match[1];
  }
  return "";
}

export function resilientSelectionsFromSource(source) {
  let ability = "";
  let save = "";
  for (const advancement of advancementEntries(source)) {
    const flags = advancementModuleFlags(advancement);
    if (flags.linkedChoice !== "ability-and-save") continue;
    if (advancement.type === "AbilityScoreImprovement") ability ||= chosenAbilityFromAsi(advancement);
    if (advancement.type === "Trait") save ||= chosenSaveFromTrait(advancement);
  }
  return { ability, save, complete: Boolean(ability && save) };
}

export function validateResilientLinkage(source) {
  const selections = resilientSelectionsFromSource(source);
  if (!selections.complete) return { ok: true, enforced: false, ...selections, reason: "As duas escolhas ainda não estão disponíveis no payload do AdvancementManager." };
  const ok = selections.ability === selections.save;
  return {
    ok,
    enforced: true,
    ...selections,
    reason: ok ? "Atributo e salvaguarda estão vinculados corretamente." : `Resiliente exige que +1 em ${optionLabel(selections.ability)} e proficiência em ${optionLabel(selections.save)} usem o mesmo atributo.`
  };
}

function candidateSources(toCreate = [], toUpdate = []) {
  return [...(Array.isArray(toCreate) ? toCreate : []), ...(Array.isArray(toUpdate) ? toUpdate : [])]
    .map(entry => entry?._source ?? entry)
    .filter(Boolean);
}

function isResilientSource(source) {
  const flags = source?.flags?.[MODULE_ID] ?? source?._source?.flags?.[MODULE_ID] ?? {};
  return flags.grimorioId === "phb-2014-resiliente" || flags.automation?.profileId === "phb-2014-resiliente";
}

export function validateResilientAdvancementBatch(toCreate = [], toUpdate = []) {
  const results = candidateSources(toCreate, toUpdate).filter(isResilientSource).map(validateResilientLinkage);
  const failure = results.find(result => result.enforced && !result.ok);
  return { ok: !failure, results, failure: failure ?? null };
}

function actorFromManager(manager) {
  const candidates = [manager?.actor, manager?.subject, manager?.document?.parent, manager?.item?.parent, manager?.item?.actor, manager?.source?.actor];
  return candidates.find(candidate => candidate?.documentName === "Actor" || candidate?.items) ?? null;
}

function schedulePendingChoices(item) {
  if (!item || !ownedByActor(item) || !pendingFeatChoices(item).length || !userCanConfigure(item)) return;
  const key = item.uuid ?? item.id ?? `${item.name}:${Date.now()}`;
  if (promptQueue.has(key)) return;
  promptQueue.add(key);
  setTimeout(async () => {
    try { await configureFeatChoices(item); }
    catch (error) {
      console.error(`[${MODULE_ID}] Falha ao configurar escolhas assistidas de Talento`, { item, error });
      globalThis.ui?.notifications?.error?.(`${item.name ?? "Talento"}: ${error?.message ?? error}`);
    } finally { promptQueue.delete(key); }
  }, 0);
}

function scanActor(actor) {
  const items = actor?.items?.contents ?? actor?.items ?? [];
  for (const item of items) schedulePendingChoices(item);
}

export function registerFeatChoiceHooks() {
  if (hooksRegistered || !globalThis.Hooks?.on) return false;
  hooksRegistered = true;

  globalThis.Hooks.on("dnd5e.preAdvancementManagerComplete", (_manager, _actorUpdates, toCreate, toUpdate) => {
    const validation = validateResilientAdvancementBatch(toCreate, toUpdate);
    if (!validation.ok) {
      globalThis.ui?.notifications?.error?.(validation.failure.reason);
      return false;
    }
    return true;
  });

  globalThis.Hooks.on("dnd5e.advancementManagerComplete", manager => {
    const actor = actorFromManager(manager);
    if (actor) scanActor(actor);
  });

  globalThis.Hooks.on("createItem", (item, options = {}, userId = null) => {
    if (!ownedByActor(item)) return;
    if (userId && globalThis.game?.user?.id && userId !== globalThis.game.user.id) return;
    if (options?.grimorioSkipFeatChoicePrompt) return;
    schedulePendingChoices(item);
  });

  return true;
}

export function featChoiceSupport() {
  return Object.freeze({
    phase: FEAT_CHOICE_PHASE,
    runtimeVersion: FEAT_CHOICE_RUNTIME_VERSION,
    assistedChoiceStorage: `flags.${MODULE_ID}.choices.<choiceId>`,
    assistedProfiles: Object.freeze(["phb-2014-adepto-elemental", "phb-2014-conjurador-de-ritual", "phb-2014-iniciado-em-magia"]),
    resilientLinkValidation: true,
    hooks: Object.freeze(["createItem", "dnd5e.preAdvancementManagerComplete", "dnd5e.advancementManagerComplete"]),
    fa4RuntimeImplemented: true
  });
}
