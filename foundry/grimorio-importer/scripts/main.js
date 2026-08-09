import { validateBundle, phase5Support, phase6Support, phase7Support, phase8Support, TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { validatePackage, isPackage, isBundle, phase9PackageSupport } from "./package-validator.js";
import { materializeBundle, legacyWorldPrototypeStatus, MODULE_ID, IMPORTER_VERSION } from "./materializer.js";
import { PACKS, packAvailability, packContentsStatus, defaultPackRuntime, withWritablePacks } from "./pack-storage.js";
import { registerSpecialRuntimeHooks, specialActorStatus, configureActorSpecialClasses, applySpellcastingAbility, applyDragoneerConcept, rewriteBloodMinisterHpFormula } from "./special-runtime.js";
import { phase11Support, phase12Support, automationCoverage } from "./feature-automation.js";


export function phase10Support() {
  return Object.freeze({
    singleClassBundle: true,
    singleSubclassBundle: true,
    classWithSubclassesPackage: true,
    fullCatalogPackage: true,
    multipleJsonSelection: true,
    destination: "module-compendiums"
  });
}

function runtimeInfo() {
  return {
    foundryVersion: game.version ?? game.release?.version ?? "",
    systemId: game.system?.id ?? "",
    systemVersion: game.system?.version ?? ""
  };
}

export async function status() {
  const runtime = runtimeInfo();
  const support = phase8Support();
  const packs = packAvailability(defaultPackRuntime());
  return {
    module: MODULE_ID,
    importerVersion: IMPORTER_VERSION,
    activeFoundry: runtime.foundryVersion,
    activeSystem: runtime.systemId,
    activeSystemVersion: runtime.systemVersion,
    targetFoundry: TARGET_FOUNDRY,
    targetDnd5e: TARGET_DND5E,
    phase8Support: support,
    phase9PackageSupport: phase9PackageSupport(),
    phase10Support: phase10Support(),
    phase11Support: phase11Support(),
    phase12Support: phase12Support(),
    automationCoverage: automationCoverage(),
    environmentMatches: runtime.systemId === "dnd5e" && runtime.systemVersion === TARGET_DND5E && runtime.foundryVersion === TARGET_FOUNDRY,
    packs,
    packsReady: packs.every(pack => pack.available),
    legacyWorldPrototype: legacyWorldPrototypeStatus(defaultPackRuntime())
  };
}

export async function compendiumStatus() {
  return await packContentsStatus(defaultPackRuntime());
}

export function worldPrototypeStatus() {
  const result = legacyWorldPrototypeStatus(defaultPackRuntime());
  return { total: result.total, byRole: result.byRole };
}

export async function automationCompendiumAudit() {
  const runtime = defaultPackRuntime();
  const docs = await runtime.listPackItems("features");
  const summary = {
    managed: 0, profiled: 0, full: 0, partial: 0, description: 0,
    candidateHigh: 0, candidateMedium: 0, textual: 0, withoutAudit: 0
  };
  const byBundle = {};
  for (const doc of docs) {
    const flags = doc?.flags?.[MODULE_ID] ?? doc?._source?.flags?.[MODULE_ID] ?? {};
    if (flags.documentRole !== "feature") continue;
    summary.managed += 1;
    const automation = flags.automation ?? {};
    const bundleId = String(flags.grimorioId ?? "desconhecido");
    byBundle[bundleId] ??= { total: 0, profiled: 0, candidateHigh: 0, candidateMedium: 0, textual: 0 };
    byBundle[bundleId].total += 1;
    if (automation.applied) {
      summary.profiled += 1;
      if (automation.tier in summary) summary[automation.tier] += 1;
      byBundle[bundleId].profiled += 1;
      continue;
    }
    const classification = automation.audit?.classification;
    if (classification === "high") { summary.candidateHigh += 1; byBundle[bundleId].candidateHigh += 1; }
    else if (classification === "medium") { summary.candidateMedium += 1; byBundle[bundleId].candidateMedium += 1; }
    else if (classification === "textual") { summary.textual += 1; byBundle[bundleId].textual += 1; }
    else summary.withoutAudit += 1;
  }
  return Object.freeze({ ...summary, byBundle: Object.freeze(byBundle) });
}

function notifyResult(result) {
  const { stats, bundle, storage } = result;
  const action = stats.parentCreated ? "criado" : "atualizado";
  const destination = bundle.kind === "class" ? PACKS.classes.label : PACKS.subclasses.label;
  ui.notifications.info(`${bundle.name} ${action} em ${destination}. Características: ${stats.featuresCreated} criadas, ${stats.featuresUpdated} atualizadas.`);
  if (result.warnings?.length) ui.notifications.warn(`${bundle.name}: ${result.warnings.length} observação(ões) de revisão manual. Consulte o console.`);
  console.info(`[${MODULE_ID}] Importação concluída em compêndios`, result);
  if (storage?.portableItemGrants) console.info(`[${MODULE_ID}] Item Grants usam UUIDs de compêndio portáveis.`);
}

export async function importBundle(bundle, { notify = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar bundles do Grimório.");
  const validation = validateBundle(bundle, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const result = await materializeBundle(bundle);
  result.warnings = [...(validation.warnings ?? []), ...(result.warnings ?? [])];
  if (notify) notifyResult(result);
  return result;
}

export async function importBundles(bundles, { continueOnError = true, notifyEach = true, notifySummary = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar bundles do Grimório.");
  const list = Array.isArray(bundles) ? bundles : [bundles];
  const results = [];
  const failures = [];
  for (let index = 0; index < list.length; index += 1) {
    try {
      const result = await importBundle(list[index], { notify: notifyEach });
      results.push(result);
    } catch (error) {
      const failure = { index, name: list[index]?.identity?.name ?? `Bundle ${index + 1}`, error };
      failures.push(failure);
      console.error(`[${MODULE_ID}] Falha no lote`, failure);
      if (!continueOnError) throw error;
    }
  }
  if (notifySummary && failures.length) ui.notifications.warn(`Grimório Importer: ${results.length} importado(s), ${failures.length} falha(s). Veja o console.`);
  else if (notifySummary && list.length > 1) ui.notifications.info(`Grimório Importer: lote concluído com ${results.length} bundle(s).`);
  return { imported: results.length, failed: failures.length, results, failures };
}

export async function importPackage(pkg, { continueOnError = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar pacotes do Grimório.");
  const validation = validatePackage(pkg, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const bundles = [...pkg.bundles].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "class" ? -1 : 1));
  ui.notifications.info(`Grimório Importer: iniciando ${pkg.identity?.name ?? "pacote"} (${bundles.length} bundles).`);
  const packRuntime = defaultPackRuntime();
  const result = await withWritablePacks(packRuntime, ["classes", "subclasses", "features"], async () =>
    await importBundles(bundles, { continueOnError, notifyEach: false, notifySummary: false })
  );
  result.package = { id: pkg.identity?.id, name: pkg.identity?.name, scope: pkg.identity?.scope, summary: pkg.summary };
  result.warnings = validation.warnings;
  if (result.failed) ui.notifications.warn(`Grimório Importer: pacote concluído com ${result.imported} importado(s) e ${result.failed} falha(s).`);
  else ui.notifications.info(`Grimório Importer: ${pkg.identity?.name ?? "pacote"} concluído — ${result.imported} bundle(s) sincronizados.`);
  if (validation.warnings.length) ui.notifications.warn(`Pacote com ${validation.warnings.length} observação(ões). Consulte o console.`);
  console.info(`[${MODULE_ID}] Pacote importado`, { validation, result });
  return result;
}

export async function importPayload(payload) {
  if (isPackage(payload)) return await importPackage(payload);
  if (isBundle(payload)) return await importBundle(payload);
  throw new Error("JSON não reconhecido: esperado bundle ou pacote Foundry do Grimório.");
}

export async function importPayloads(payloads, { continueOnError = true } = {}) {
  const list = Array.isArray(payloads) ? payloads : [payloads];
  const results = []; const failures = [];
  for (let index = 0; index < list.length; index += 1) {
    try { results.push(await importPayload(list[index])); }
    catch (error) { failures.push({ index, error }); console.error(`[${MODULE_ID}] Falha ao importar payload`, { index, error }); if (!continueOnError) throw error; }
  }
  if (failures.length) ui.notifications.warn(`Grimório Importer: ${results.length} arquivo(s) processado(s), ${failures.length} falha(s).`);
  return { processed: results.length, failed: failures.length, results, failures };
}

export function openBundleFilePicker() {
  if (!game.user?.isGM) {
    ui.notifications.warn("Somente um Mestre pode importar bundles do Grimório.");
    return;
  }
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,application/json";
  input.multiple = true;
  input.style.display = "none";
  input.addEventListener("change", async () => {
    const files = [...(input.files ?? [])];
    input.remove();
    if (!files.length) return;
    try {
      const payloads = [];
      for (const file of files) payloads.push(JSON.parse(await file.text()));
      await importPayloads(payloads, { continueOnError: true });
    } catch (error) {
      console.error(`[${MODULE_ID}] Falha ao ler lote`, error);
      ui.notifications.error(`Grimório Importer: ${error.message}`);
    }
  }, { once: true });
  document.body.appendChild(input);
  input.click();
}

async function showStatus() {
  const info = await status();
  const state = info.environmentMatches ? "compatível" : "fora do perfil homologado";
  const packs = info.packsReady ? "3/3 compêndios disponíveis" : `${info.packs.filter(p => p.available).length}/3 compêndios disponíveis`;
  const automation = info.automationCoverage;
  ui.notifications.info(`Grimório Importer ${IMPORTER_VERSION}: ${state}; ${packs}. Fase 12: ${automation.profiles} perfis (${automation.classProfiles} de classe + ${automation.subclassProfiles} de subclasse), ${automation.activities} Activities e ${automation.effects} Active Effects.`);
  if (info.legacyWorldPrototype.total) ui.notifications.warn(`Há ${info.legacyWorldPrototype.total} Item(s) do protótipo da Fase 5 no Mundo. Eles não são alterados automaticamente.`);
  console.info(`[${MODULE_ID}] Status`, info);
  return info;
}

async function showPacks() {
  const rows = await compendiumStatus();
  const text = rows.map(row => {
    if (!row.available) return `${row.label}: ausente`;
    const folderText = row.managedFolders ? `; ${row.managedFolders} pasta(s) gerenciada(s)` : "";
    return `${row.label}: ${row.managed} gerenciado(s)${folderText}`;
  }).join(" | ");
  ui.notifications.info(text);
  console.info(`[${MODULE_ID}] Compêndios`, rows);
  return rows;
}

function showWorldPrototype() {
  const result = worldPrototypeStatus();
  if (!result.total) ui.notifications.info("Nenhum Item legado da Fase 5 foi encontrado no diretório do Mundo.");
  else ui.notifications.warn(`Itens legados da Fase 5 no Mundo: ${result.total}. Nenhum será apagado automaticamente.`);
  console.info(`[${MODULE_ID}] Itens legados da Fase 5`, result);
  return result;
}

function showAutomation() {
  const coverage = automationCoverage();
  const tiers = `completa ${coverage.byTier.full}, parcial ${coverage.byTier.partial}, descrição ${coverage.byTier.description}`;
  ui.notifications.info(`Automação Fase 12: ${coverage.profiles} perfis em ${coverage.classes} classes e ${coverage.subclassBundles} subclasses; ${coverage.activities} Activities; ${coverage.effects} Active Effects; ${coverage.resources} recursos. ${tiers}.`);
  console.info(`[${MODULE_ID}] Cobertura de automação`, { coverage, support: phase12Support() });
  return coverage;
}

async function showAutomationAudit() {
  try {
    const audit = await automationCompendiumAudit();
    ui.notifications.info(`Auditoria Fase 12: ${audit.profiled}/${audit.managed} características perfiladas; candidatos altos ${audit.candidateHigh}, médios ${audit.candidateMedium}, textuais ${audit.textual}.`);
    console.info(`[${MODULE_ID}] Auditoria de automação dos compêndios`, audit);
    return audit;
  } catch (error) {
    console.error(`[${MODULE_ID}] Falha na auditoria de automação`, error);
    ui.notifications.error(`Grimório Importer: ${error.message}`);
    return null;
  }
}

function selectedActor() {
  const controlled = globalThis.canvas?.tokens?.controlled ?? [];
  if (controlled.length === 1 && controlled[0]?.actor) return controlled[0].actor;
  if (controlled.length > 1) throw new Error("Selecione apenas um token para configurar classes especiais.");
  return game.user?.character ?? null;
}

function showSpecialStatus() {
  try {
    const actor = selectedActor();
    if (!actor) throw new Error("Nenhum Actor selecionado e nenhum personagem atribuído ao usuário.");
    const result = specialActorStatus(actor);
    if (!result.classes.length) ui.notifications.info(`${actor.name}: nenhuma classe especial do Grimório encontrada.`);
    else ui.notifications.info(`${actor.name}: ${result.classes.length} classe(s) especial(is). Consulte o console para os parâmetros atuais.`);
    console.info(`[${MODULE_ID}] Classes especiais do Actor`, result);
    return result;
  } catch (error) {
    ui.notifications.warn(`Grimório Importer: ${error.message}`);
    return null;
  }
}

async function configureSelectedActor() {
  try {
    const actor = selectedActor();
    if (!actor) throw new Error("Nenhum Actor selecionado e nenhum personagem atribuído ao usuário.");
    const result = await configureActorSpecialClasses(actor);
    const configured = result.filter(x => x?.configured).length;
    ui.notifications.info(`${actor.name}: configuração especial concluída (${configured}/${result.length}).`);
    console.info(`[${MODULE_ID}] Configuração especial do Actor`, result);
    return result;
  } catch (error) {
    console.error(`[${MODULE_ID}] Falha ao configurar Actor`, error);
    ui.notifications.error(`Grimório Importer: ${error.message}`);
    return null;
  }
}

registerSpecialRuntimeHooks();

Hooks.once("ready", () => {
  const mod = game.modules.get(MODULE_ID);
  if (mod) {
    mod.api = Object.freeze({
      importBundle,
      importBundles,
      importPackage,
      importPayload,
      importPayloads,
      openBundleFilePicker,
      validateBundle,
      validatePackage,
      status,
      compendiumStatus,
      worldPrototypeStatus,
      phase5Support,
      phase6Support,
      phase7Support,
      phase8Support,
      phase9PackageSupport,
      phase10Support,
      phase11Support,
      phase12Support,
      automationCoverage,
      automationCompendiumAudit,
      specialActorStatus,
      configureActorSpecialClasses,
      applySpellcastingAbility,
      applyDragoneerConcept,
      rewriteBloodMinisterHpFormula
    });
  }
  const packs = packAvailability(defaultPackRuntime());
  if (game.user?.isGM && packs.some(pack => !pack.available)) ui.notifications.error("Grimório Importer: um ou mais compêndios não foram carregados. Verifique a instalação do módulo.");
  console.info(`[${MODULE_ID}] Pronto — Fase 12. Foundry ${game.version}; ${game.system?.id} ${game.system?.version}.`, { packs, automation: automationCoverage() });
});

Hooks.on("chatMessage", (_chatLog, message) => {
  const command = String(message ?? "").trim().toLowerCase();
  if (command === "/grimorio-import" || command === "/grimorio-import-batch" || command === "/grimorio-import-package") { openBundleFilePicker(); return false; }
  if (command === "/grimorio-status") { void showStatus(); return false; }
  if (command === "/grimorio-packs") { void showPacks(); return false; }
  if (command === "/grimorio-world-preview") { showWorldPrototype(); return false; }
  if (command === "/grimorio-automacao") { showAutomation(); return false; }
  if (command === "/grimorio-auditoria-automacao") { void showAutomationAudit(); return false; }
  if (command === "/grimorio-special") { showSpecialStatus(); return false; }
  if (command === "/grimorio-configurar") { void configureSelectedActor(); return false; }
  if (command === "/grimorio-help") {
    ui.notifications.info("Comandos: /grimorio-import (um ou vários JSON), /grimorio-import-batch, /grimorio-import-package, /grimorio-status, /grimorio-packs, /grimorio-automacao, /grimorio-auditoria-automacao, /grimorio-world-preview, /grimorio-special, /grimorio-configurar. Fase 12: expansão de Activities/recursos/Active Effects e auditoria de candidatos em classes e subclasses.");
    return false;
  }
  return true;
});
