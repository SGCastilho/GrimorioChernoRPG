import { MODULE_ID } from "./pack-storage.js";

const SPELLCASTING_CHOICES = Object.freeze(["int", "wis", "cha"]);
const ABILITY_LABELS = Object.freeze({ int: "Inteligência", wis: "Sabedoria", cha: "Carisma" });

function flag(item, key) {
  if (typeof item?.getFlag === "function") return item.getFlag(MODULE_ID, key);
  return item?.flags?.[MODULE_ID]?.[key] ?? item?._source?.flags?.[MODULE_ID]?.[key];
}

function systemValue(item, path, fallback = undefined) {
  const parts = path.split(".");
  let cur = item?.system ?? item?._source?.system;
  for (const part of parts) cur = cur?.[part];
  return cur ?? fallback;
}

function itemIdentifier(item) {
  return systemValue(item, "identifier", "") || flag(item, "identifier") || "";
}

function actorItems(actor) {
  const items = actor?.items;
  if (!items) return [];
  if (Array.isArray(items)) return items;
  if (typeof items.values === "function") return [...items.values()];
  return [...items];
}

function findClass(actor, identifier) {
  return actorItems(actor).find(item => item?.type === "class" && itemIdentifier(item) === identifier) ?? null;
}

function findSubclass(actor, classIdentifier) {
  return actorItems(actor).find(item => item?.type === "subclass" && systemValue(item, "classIdentifier", "") === classIdentifier) ?? null;
}

function updatePathPayload(path, value) {
  return { [path]: value };
}

export function rewriteBloodMinisterHpFormula(formula) {
  const input = String(formula ?? "");
  if (!input) return input;
  if (/2d4/i.test(input)) return input;
  if (/1d8/i.test(input)) return input.replace(/1d8/i, "2d4");
  if (/\bd8\b/i.test(input)) return input.replace(/\bd8\b/i, "2d4");
  return input;
}

export async function applySpellcastingAbility(classItem, ability) {
  const identifier = itemIdentifier(classItem);
  if (!["bender", "tamer"].includes(identifier)) throw new Error(`A classe ${identifier || "desconhecida"} não usa escolha dinâmica de conjuração.`);
  if (!SPELLCASTING_CHOICES.includes(ability)) throw new Error(`Habilidade de conjuração inválida: ${ability}.`);
  await classItem.update({
    "system.spellcasting.ability": ability,
    "system.primaryAbility.value": [ability],
    [`flags.${MODULE_ID}.specialConfiguration.spellcastingAbility`]: ability,
    [`flags.${MODULE_ID}.specialConfiguration.configured`]: true
  });
  return ability;
}

export async function applyDragoneerConcept(actor, subclassItem) {
  if (!actor) throw new Error("Actor não informado para configuração do Cavaleiro Dracônico.");
  const concept = flag(subclassItem, "dragoneerConcept");
  if (!concept) throw new Error("A subclasse selecionada não possui parâmetros de Conceito Central.");
  const classItem = findClass(actor, "dragoneer");
  if (!classItem) throw new Error("O Actor não possui a classe Cavaleiro Dracônico.");
  const updates = {
    "system.hd.denomination": concept.hitDie,
    "system.spellcasting.progression": concept.spellcasting?.progression ?? "none",
    "system.spellcasting.ability": concept.spellcasting?.ability ?? "",
    [`flags.${MODULE_ID}.specialConfiguration.conceptGrimorioId`]: flag(subclassItem, "grimorioId") ?? "",
    [`flags.${MODULE_ID}.specialConfiguration.conceptName`]: subclassItem.name ?? "",
    [`flags.${MODULE_ID}.specialConfiguration.hitDie`]: concept.hitDie,
    [`flags.${MODULE_ID}.specialConfiguration.spellcastingProgression`]: concept.spellcasting?.progression ?? "none",
    [`flags.${MODULE_ID}.specialConfiguration.configured`]: true
  };
  await classItem.update(updates);
  return { classItem, subclassItem, concept };
}

export async function configureSpecialClassItem(classItem, { ability = null } = {}) {
  const identifier = itemIdentifier(classItem);
  if (["bender", "tamer"].includes(identifier)) {
    if (!ability) throw new Error(`Informe a habilidade de conjuração para ${classItem.name}.`);
    await applySpellcastingAbility(classItem, ability);
    return { identifier, configured: true, ability };
  }
  if (identifier === "dragoneer") {
    const actor = classItem.parent;
    const subclass = findSubclass(actor, "dragoneer");
    if (!subclass) return { identifier, configured: false, reason: "Conceito Central ainda não selecionado." };
    const result = await applyDragoneerConcept(actor, subclass);
    return { identifier, configured: true, concept: result.concept };
  }
  if (identifier === "frame-pilot") return { identifier, configured: true, note: "Salvaguardas são escolhidas pelo Advancement Trait; Crescimento permanece como escolha textual por nível." };
  if (identifier === "blood-minister") return { identifier, configured: true, note: "PV usa d8 técnico + hook 2d4; pool de Dados de Vida 2d4 permanece especial." };
  return { identifier, configured: false, reason: "Classe sem configuração especial." };
}

function promptAbility(identifier, current = "") {
  const className = identifier === "bender" ? "Dobrador" : "Domador";
  const suggested = SPELLCASTING_CHOICES.includes(current) ? current : "wis";
  const answer = globalThis.prompt?.(`${className}: escolha a habilidade de conjuração — int (Inteligência), wis (Sabedoria) ou cha (Carisma).`, suggested);
  if (answer === null || answer === undefined) return null;
  const normalized = String(answer).trim().toLowerCase();
  return SPELLCASTING_CHOICES.includes(normalized) ? normalized : null;
}

export async function autoConfigureEmbeddedItem(item, { notify = true } = {}) {
  const actor = item?.parent;
  if (!actor || actor.documentName !== "Actor") return { handled: false };
  if (item.type === "subclass" && systemValue(item, "classIdentifier", "") === "dragoneer") {
    const result = await applyDragoneerConcept(actor, item);
    if (notify) globalThis.ui?.notifications?.info?.(`Cavaleiro Dracônico configurado pelo Conceito Central ${item.name}: ${result.concept.hitDie}, ${result.concept.spellcasting?.label ?? "sem conjuração"}.`);
    return { handled: true, type: "dragoneer-concept", ...result };
  }
  if (item.type !== "class") return { handled: false };
  const identifier = itemIdentifier(item);
  if (["bender", "tamer"].includes(identifier)) {
    const current = flag(item, "specialConfiguration")?.spellcastingAbility ?? systemValue(item, "spellcasting.ability", "");
    const ability = promptAbility(identifier, current);
    if (!ability) {
      if (notify) globalThis.ui?.notifications?.warn?.(`${item.name}: habilidade de conjuração ainda não configurada. Use /grimorio-configurar.`);
      return { handled: true, type: "spellcasting-ability-choice", configured: false };
    }
    await applySpellcastingAbility(item, ability);
    if (notify) globalThis.ui?.notifications?.info?.(`${item.name}: ${ABILITY_LABELS[ability]} configurada como habilidade de conjuração.`);
    return { handled: true, type: "spellcasting-ability-choice", configured: true, ability };
  }
  if (identifier === "dragoneer") {
    const subclass = findSubclass(actor, "dragoneer");
    if (subclass) return { handled: true, type: "dragoneer-concept", ...(await applyDragoneerConcept(actor, subclass)) };
    if (notify) globalThis.ui?.notifications?.info?.("Cavaleiro Dracônico adicionado. Selecione um Conceito Central; o módulo aplicará Dado de Vida e conjuração automaticamente.");
    return { handled: true, type: "dragoneer-concept", configured: false };
  }
  if (identifier === "blood-minister") {
    if (notify) globalThis.ui?.notifications?.warn?.("Ministro de Sangue: PV é automatizado como 2d4, mas o pool nativo de Dados de Vida do DnD5e não representa 2d4 por nível. Consulte a característica Ministração Sanguínea.");
    return { handled: true, type: "blood-minister-hit-dice", configured: true };
  }
  return { handled: false };
}

export function specialActorStatus(actor) {
  if (!actor) return { actor: null, classes: [] };
  const classes = actorItems(actor).filter(item => item?.type === "class").map(item => {
    const identifier = itemIdentifier(item);
    if (!["dragoneer", "frame-pilot", "bender", "tamer", "blood-minister"].includes(identifier)) return null;
    return {
      identifier,
      name: item.name,
      hd: systemValue(item, "hd.denomination", ""),
      spellcasting: systemValue(item, "spellcasting", {}),
      configuration: flag(item, "specialConfiguration") ?? {},
      sourceHitDice: flag(item, "sourceHitDice") ?? ""
    };
  }).filter(Boolean);
  return { actor: actor.name ?? actor.id ?? "Actor", classes };
}

export async function configureActorSpecialClasses(actor) {
  if (!actor) throw new Error("Nenhum Actor selecionado.");
  const results = [];
  for (const item of actorItems(actor).filter(x => x.type === "class")) {
    const identifier = itemIdentifier(item);
    if (["bender", "tamer"].includes(identifier)) {
      const current = flag(item, "specialConfiguration")?.spellcastingAbility ?? systemValue(item, "spellcasting.ability", "");
      const ability = promptAbility(identifier, current);
      if (ability) results.push(await configureSpecialClassItem(item, { ability }));
      else results.push({ identifier, configured: false });
    } else if (["dragoneer", "frame-pilot", "blood-minister"].includes(identifier)) {
      results.push(await configureSpecialClassItem(item));
    }
  }
  return results;
}

export function registerSpecialRuntimeHooks() {
  if (!globalThis.Hooks) return;
  Hooks.on("createItem", (item, _options, userId) => {
    if (userId && globalThis.game?.user?.id && userId !== game.user.id) return;
    void autoConfigureEmbeddedItem(item).catch(error => {
      console.error(`[${MODULE_ID}] Falha na configuração especial`, error);
      globalThis.ui?.notifications?.warn?.(`Grimório Importer: ${error.message}`);
    });
  });
  Hooks.on("dnd5e.preRollClassHitPoints", (_actor, item, rollData) => {
    if (itemIdentifier(item) !== "blood-minister") return;
    rollData.formula = rewriteBloodMinisterHpFormula(rollData.formula);
  });
}
