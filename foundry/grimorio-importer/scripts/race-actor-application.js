import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { MODULE_ID } from "./pack-storage.js";
import { materializeRaceBuild } from "./race-materializer.js";
import { raceBuildDisplayName } from "./race-support.js";
import { validateRaceBuildBundle } from "./race-validator.js";

export const RACE_ACTOR_PHASE = "RB-8";

function text(value) { return String(value ?? "").trim(); }
function itemFlag(item, key) {
  if (typeof item?.getFlag === "function") return item.getFlag(MODULE_ID, key);
  return item?.flags?.[MODULE_ID]?.[key] ?? item?._source?.flags?.[MODULE_ID]?.[key];
}
function actorItems(actor) {
  const items = actor?.items;
  if (!items) return [];
  if (Array.isArray(items)) return items;
  if (Array.isArray(items.contents)) return items.contents;
  try { return Array.from(items); } catch { return []; }
}
function raceItems(actor) { return actorItems(actor).filter(item => item?.type === "race"); }
function cloneSource(doc) {
  const data = typeof doc?.toObject === "function" ? doc.toObject() : structuredClone(doc?._source ?? doc ?? {});
  delete data._id;
  delete data.folder;
  delete data.sort;
  delete data.ownership;
  delete data.pack;
  data.flags ??= {};
  data.flags.core ??= {};
  if (doc?.uuid) data.flags.core.sourceId = doc.uuid;
  data.flags[MODULE_ID] ??= {};
  data.flags[MODULE_ID].actorApplicationPhase = RACE_ACTOR_PHASE;
  return data;
}
function runtimeInfo(runtime) {
  return {
    foundryVersion: runtime.foundryVersion,
    systemId: runtime.systemId,
    systemVersion: runtime.systemVersion
  };
}

async function defaultConfirmReplacement({ actor, existingRace, newRaceName }) {
  const escape = value => globalThis.foundry?.utils?.escapeHTML?.(String(value ?? "")) ?? String(value ?? "");
  const content = `<p><strong>${escape(actor?.name)}</strong> já possui a raça <strong>${escape(existingRace?.name)}</strong>.</p><p>Substituí-la por <strong>${escape(newRaceName)}</strong> removerá primeiro a raça atual através do fluxo de Advancements do DnD5e e, somente após a conclusão, iniciará a aplicação da nova raça.</p><p><strong>Esta ação não é executada silenciosamente.</strong></p>`;
  const DialogV2 = globalThis.foundry?.applications?.api?.DialogV2;
  if (DialogV2?.confirm) {
    return Boolean(await DialogV2.confirm({
      window: { title: "Substituir raça do Actor?" },
      content,
      modal: true,
      rejectClose: false,
      yes: { label: "Substituir raça", icon: "fa-solid fa-arrows-rotate" },
      no: { label: "Cancelar", icon: "fa-solid fa-xmark" }
    }));
  }
  const LegacyDialog = globalThis.Dialog;
  if (LegacyDialog?.confirm) return Boolean(await LegacyDialog.confirm({ title: "Substituir raça do Actor?", content, defaultYes: false }));
  return false;
}

function defaultAdvancementManager() {
  return globalThis.dnd5e?.applications?.advancement?.AdvancementManager ?? null;
}

async function waitForAdvancementManager(manager) {
  if (!manager) throw new Error("AdvancementManager indisponível no DnD5e ativo.");
  if (!Array.isArray(manager.steps) || !manager.steps.length) return { completed: true, bypassed: true };
  const Hooks = globalThis.Hooks;
  if (!Hooks?.on || !Hooks?.off) throw new Error("Hooks do Foundry indisponíveis para acompanhar o AdvancementManager.");

  return await new Promise((resolve, reject) => {
    let settled = false;
    let completed = false;
    const finish = result => {
      if (settled) return;
      settled = true;
      Hooks.off("dnd5e.advancementManagerComplete", hookId);
      resolve(result);
    };
    const hookId = Hooks.on("dnd5e.advancementManagerComplete", completedManager => {
      if (completedManager !== manager) return;
      completed = true;
      finish({ completed: true, bypassed: false });
    });

    const originalClose = typeof manager.close === "function" ? manager.close.bind(manager) : null;
    if (originalClose) {
      manager.close = async (...args) => {
        try {
          const value = await originalClose(...args);
          queueMicrotask(() => {
            if (settled || completed) return;
            if (manager.rendered === false || manager._state === -1 || manager._state === 0) finish({ completed: false, cancelled: true });
          });
          return value;
        } catch (error) {
          if (!settled) {
            settled = true;
            Hooks.off("dnd5e.advancementManagerComplete", hookId);
            reject(error);
          }
          throw error;
        }
      };
    }

    try {
      const rendered = manager.render(true);
      if (rendered?.catch) rendered.catch(error => {
        if (settled) return;
        settled = true;
        Hooks.off("dnd5e.advancementManagerComplete", hookId);
        reject(error);
      });
    } catch (error) {
      settled = true;
      Hooks.off("dnd5e.advancementManagerComplete", hookId);
      reject(error);
    }
  });
}

export function defaultRaceActorRuntime() {
  return {
    foundryVersion: globalThis.game?.version ?? globalThis.game?.release?.version ?? "",
    systemId: globalThis.game?.system?.id ?? "",
    systemVersion: globalThis.game?.system?.version ?? "",
    isGM: Boolean(globalThis.game?.user?.isGM),
    disableAdvancements: Boolean(globalThis.game?.settings?.get?.("dnd5e", "disableAdvancements")),
    AdvancementManager: defaultAdvancementManager(),
    materializeRaceBuild,
    confirmReplacement: defaultConfirmReplacement,
    runAdvancementManager: waitForAdvancementManager,
    createEmbeddedItems: async (actor, sources) => await actor.createEmbeddedDocuments("Item", sources, { isAdvancement: true }),
    deleteEmbeddedItems: async (actor, ids) => await actor.deleteEmbeddedDocuments("Item", ids, { isAdvancement: true })
  };
}

export function inspectActorRace(actor, bundle = null) {
  const races = raceItems(actor);
  const desiredId = text(bundle?.identity?.grimorioId);
  const desiredContentHash = text(bundle?.identity?.contentHash);
  const current = races.length === 1 ? races[0] : null;
  const currentId = text(itemFlag(current, "grimorioId"));
  const currentContentHash = text(itemFlag(current, "contentHash"));
  const sameIdentity = Boolean(current && desiredId && currentId === desiredId);
  const sameContent = Boolean(sameIdentity && desiredContentHash && currentContentHash === desiredContentHash);
  return Object.freeze({
    actorId: text(actor?.id),
    actorName: text(actor?.name),
    count: races.length,
    races,
    current,
    currentId,
    currentContentHash,
    desiredId,
    desiredContentHash,
    sameIdentity,
    sameContent,
    state: races.length > 1 ? "multiple" : !current ? "empty" : sameContent ? "same" : sameIdentity ? "outdated" : "different"
  });
}

function assertActorApplicationEnvironment(actor, runtime) {
  if (!runtime.isGM) throw new Error("Somente um Mestre pode aplicar Raças a um Actor.");
  if (!actor) throw new Error("Nenhum Actor foi selecionado para receber a raça.");
  if (actor.type !== "character") throw new Error(`A aplicação racial RB-8 exige um Actor do tipo character; recebido: ${actor.type ?? "desconhecido"}.`);
  if (runtime.foundryVersion !== TARGET_FOUNDRY || runtime.systemId !== "dnd5e" || runtime.systemVersion !== TARGET_DND5E) {
    throw new Error(`Aplicação racial RB-8 bloqueada fora do perfil homologado Foundry ${TARGET_FOUNDRY} / DnD5e ${TARGET_DND5E}.`);
  }
  if (runtime.disableAdvancements) throw new Error("O DnD5e está com a automação de Advancements desabilitada. Reative-a antes de aplicar uma Race Build ao Actor.");
  if (!runtime.AdvancementManager?.forNewItem || !runtime.AdvancementManager?.forDeletedItem) throw new Error("AdvancementManager compatível não foi encontrado no DnD5e ativo.");
}

async function removeExistingRace(actor, existing, runtime) {
  const manager = runtime.AdvancementManager.forDeletedItem(actor, existing.id, { automaticApplication: false, showVisualizer: false });
  if (manager?.steps?.length) {
    const outcome = await runtime.runAdvancementManager(manager);
    if (!outcome?.completed) return { completed: false, cancelled: true, method: "advancement-manager" };
    return { completed: true, method: "advancement-manager" };
  }
  await runtime.deleteEmbeddedItems(actor, [existing.id]);
  return { completed: true, method: "direct-no-advancement" };
}

async function addRace(actor, raceDoc, runtime) {
  const source = cloneSource(raceDoc);
  const manager = runtime.AdvancementManager.forNewItem(actor, source, { automaticApplication: false, showVisualizer: false });
  if (manager?.steps?.length) {
    const outcome = await runtime.runAdvancementManager(manager);
    if (!outcome?.completed) return { completed: false, cancelled: true, method: "advancement-manager" };
    return { completed: true, method: "advancement-manager" };
  }
  const created = await runtime.createEmbeddedItems(actor, [source]);
  return { completed: true, method: "direct-no-advancement", created: created?.[0] ?? null };
}

async function restorePreviousRace(actor, source, runtime) {
  if (!source) return { completed:false, skipped:true, method:null };
  const manager = runtime.AdvancementManager.forNewItem(actor, structuredClone(source), { automaticApplication: false, showVisualizer: false });
  if (manager?.steps?.length) {
    const outcome = await runtime.runAdvancementManager(manager);
    if (!outcome?.completed) return { completed:false, cancelled:true, method:"advancement-manager" };
    return { completed:true, method:"advancement-manager" };
  }
  const created = await runtime.createEmbeddedItems(actor, [structuredClone(source)]);
  return { completed:true, method:"direct-no-advancement", created:created?.[0] ?? null };
}

export async function applyRaceBuildToActor(bundle, {
  actor,
  runtime = defaultRaceActorRuntime(),
  materialize = true,
  replaceExisting = false,
  confirmReplacement = true
} = {}) {
  assertActorApplicationEnvironment(actor, runtime);
  const validation = validateRaceBuildBundle(bundle, runtimeInfo(runtime));
  if (!validation.ok) throw new Error(validation.errors.join("\n"));

  let inspection = inspectActorRace(actor, bundle);
  if (inspection.state === "multiple") throw new Error(`${actor.name} possui ${inspection.count} Items de raça. A RB-8 não escolhe silenciosamente qual remover; faça a limpeza manual antes de continuar.`);
  if (inspection.state === "same") {
    return Object.freeze({
      ok: true, phase: RACE_ACTOR_PHASE, state: "already-applied", actorId: actor.id, actorName: actor.name,
      raceName: inspection.current?.name ?? raceBuildDisplayName(bundle), replaced: false, materialized: false,
      actorApplication: true, worldItemsCreated: 0, warnings: validation.warnings ?? []
    });
  }

  if (inspection.current) {
    let approved = replaceExisting;
    if (!approved && confirmReplacement) approved = await runtime.confirmReplacement({ actor, existingRace: inspection.current, newRaceName: raceBuildDisplayName(bundle), bundle });
    if (!approved) {
      return Object.freeze({ ok: false, phase: RACE_ACTOR_PHASE, state: "replacement-cancelled", cancelled: true, actorId: actor.id, actorName: actor.name, actorApplication: false, worldItemsCreated: 0 });
    }
  }

  const previousRaceSource = inspection.current ? cloneSource(inspection.current) : null;
  const materialized = materialize ? await runtime.materializeRaceBuild(bundle) : null;
  const raceDoc = materialized?.item;
  if (!raceDoc) throw new Error("A Race Build não possui um Item de Raça materializado para aplicação ao Actor.");

  let replacement = null;
  if (inspection.current) {
    replacement = await removeExistingRace(actor, inspection.current, runtime);
    if (!replacement.completed) return Object.freeze({ ok: false, phase: RACE_ACTOR_PHASE, state: "removal-cancelled", cancelled: true, actorId: actor.id, actorName: actor.name, actorApplication: false, worldItemsCreated: 0 });
  }

  let applied;
  try {
    applied = await addRace(actor, raceDoc, runtime);
  } catch (error) {
    if (replacement && previousRaceSource) {
      const rollback = await restorePreviousRace(actor, previousRaceSource, runtime);
      if (rollback.completed) return Object.freeze({ ok:false, phase:RACE_ACTOR_PHASE, state:"application-failed-restored", error:String(error?.message ?? error), actorId:actor.id, actorName:actor.name, restored:true, rollbackMethod:rollback.method, actorApplication:false, worldItemsCreated:0 });
      throw new Error(`Falha ao aplicar a nova raça e o rollback da raça anterior não foi concluído: ${error?.message ?? error}`);
    }
    throw error;
  }
  if (!applied.completed) {
    if (replacement && previousRaceSource) {
      const rollback = await restorePreviousRace(actor, previousRaceSource, runtime);
      return Object.freeze({ ok:false, phase:RACE_ACTOR_PHASE, state:rollback.completed ? "application-cancelled-restored" : "application-cancelled-rollback-required", cancelled:true, actorId:actor.id, actorName:actor.name, restored:Boolean(rollback.completed), rollbackMethod:rollback.method ?? null, actorApplication:false, worldItemsCreated:0 });
    }
    return Object.freeze({ ok: false, phase: RACE_ACTOR_PHASE, state: "application-cancelled", cancelled: true, actorId: actor.id, actorName: actor.name, actorApplication: false, worldItemsCreated: 0 });
  }

  inspection = inspectActorRace(actor, bundle);
  return Object.freeze({
    ok: true,
    phase: RACE_ACTOR_PHASE,
    state: "applied",
    actorId: actor.id,
    actorName: actor.name,
    raceName: raceDoc.name ?? raceBuildDisplayName(bundle),
    replaced: Boolean(replacement),
    replacementMethod: replacement?.method ?? null,
    applicationMethod: applied.method,
    materialized: Boolean(materialized),
    materializationStats: materialized?.stats ?? null,
    actorRaceState: inspection.state,
    actorApplication: true,
    worldItemsCreated: 0,
    warnings: [...new Set([...(validation.warnings ?? []), ...(materialized?.warnings ?? [])])]
  });
}

export function raceActorApplicationSupport() {
  return Object.freeze({
    phase: RACE_ACTOR_PHASE,
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    actorApplication: true,
    actorType: "character",
    usesAdvancementManager: true,
    newItemFactory: "AdvancementManager.forNewItem",
    deletionFactory: "AdvancementManager.forDeletedItem",
    replacementConfirmation: "required",
    replacementRollback: "advancement-manager",
    multipleRacePolicy: "block",
    sameBuildPolicy: "idempotent-noop",
    disabledAdvancementsPolicy: "block",
    worldItemsExpected: 0,
    runtimeHomologationRequired: true
  });
}
