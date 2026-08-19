import { validateBundle, phase5Support, phase6Support, phase7Support, phase8Support, TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { validatePackage, isPackage, isBundle, phase9PackageSupport } from "./package-validator.js";
import { materializeBundle, legacyWorldPrototypeStatus, MODULE_ID, IMPORTER_VERSION } from "./materializer.js";
import { PACKS, packAvailability, packContentsStatus, defaultPackRuntime, withWritablePacks } from "./pack-storage.js";
import { registerSpecialRuntimeHooks, specialActorStatus, configureActorSpecialClasses, applySpellcastingAbility, applyDragoneerConcept, rewriteBloodMinisterHpFormula } from "./special-runtime.js";
import { phase11Support, phase12Support, automationCoverage } from "./feature-automation.js";
import { validateFeatBundle, validateFeatPackage, isFeatBundle, isFeatPackage, featSupport } from "./feat-validator.js";
import { featAutomationSupport } from "./feat-automation.js";
import { registerFeatChoiceHooks, featChoiceSupport, configureFeatChoices, pendingFeatChoices, validateResilientLinkage } from "./feat-choice-runtime.js";
import { registerFeatRuntimeHooks, featRuntimeSupport, runtimeCoverageForActor, validateFeatRuntimeCoverage, syncConditionalFeatEffects } from "./feat-runtime.js";
import { featAuditSupport, featCompendiumAudit, auditFeatDocuments } from "./feat-audit.js";
import { materializeFeatBundle } from "./feat-materializer.js";
import { openImporter } from "./ui/importer-app.js";
import { registerImporterSceneControl } from "./ui/scene-control.js";
import { previewPayload, classifyPayload, preflightSupport } from "./ui/payload-preflight.js";
import { inspectPayloadCompendiums, plannedPayloadDocuments, compendiumPreflightSupport } from "./ui/compendium-preflight.js";
import { importExecutionSupport } from "./ui/import-executor.js";
import { centralParitySupport } from "./ui/central-support.js";
import { commandRoutingSupport, resolveGrimorioCommand, routeGrimorioCommand } from "./ui/command-router.js";
import { evaluateReleaseReadiness, releaseReadinessSupport } from "./ui/release-readiness.js";
import { selectedActor } from "./actor-selection.js";
import { IMPORTER_BUILD } from "./version.js";
import { validateRaceBuildBundle, isRaceBuildBundle, raceBuildValidatorSupport } from "./race-validator.js";
import { raceBuildSupport } from "./race-support.js";
import { materializeRaceBuild, raceMaterializerSupport } from "./race-materializer.js";
import { raceAutomationSupport } from "./race-automation.js";
import { applyRaceBuildToActor, inspectActorRace, raceActorApplicationSupport } from "./race-actor-application.js";


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
  const info = {
    module: MODULE_ID,
    importerVersion: IMPORTER_VERSION,
    importerBuild: IMPORTER_BUILD,
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
    featSupport: featSupport(),
    featAutomationSupport: featAutomationSupport(),
    featRuntimeSupport: featRuntimeSupport(),
    featAuditSupport: featAuditSupport(),
    raceBuildValidatorSupport: raceBuildValidatorSupport(),
    raceBuildSupport: raceBuildSupport(),
    raceMaterializerSupport: raceMaterializerSupport(),
    raceAutomationSupport: raceAutomationSupport(),
    raceActorApplicationSupport: raceActorApplicationSupport(),
    preflightSupport: preflightSupport(),
    compendiumPreflightSupport: compendiumPreflightSupport(),
    importExecutionSupport: importExecutionSupport(),
    centralParitySupport: centralParitySupport(),
    commandRoutingSupport: commandRoutingSupport(),
    automationCoverage: automationCoverage(),
    environmentMatches: runtime.systemId === "dnd5e" && runtime.systemVersion === TARGET_DND5E && runtime.foundryVersion === TARGET_FOUNDRY,
    packs,
    packsReady: packs.every(pack => pack.available),
    legacyWorldPrototype: legacyWorldPrototypeStatus(defaultPackRuntime())
  };
  const featAudit = await featCompendiumAudit(defaultPackRuntime());
  return Object.freeze({
    ...info,
    featAudit,
    releaseReadinessSupport: releaseReadinessSupport(),
    releaseReadiness: evaluateReleaseReadiness({
      statusInfo: { ...info, featAudit },
      centralSupport: info.centralParitySupport,
      commandSupport: info.commandRoutingSupport,
      preflightSupport: info.preflightSupport,
      compendiumSupport: info.compendiumPreflightSupport,
      executionSupport: info.importExecutionSupport
    })
  });
}

export async function releaseReadiness() {
  return (await status()).releaseReadiness;
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

function notifyFeatResult(result) {
  const { stats, bundle } = result;
  const action = stats.featsCreated ? "criado" : "atualizado";
  ui.notifications.info(`${bundle.name} ${action} em ${PACKS.feats.label}.`);
  if (result.warnings?.length) ui.notifications.warn(`${bundle.name}: ${result.warnings.length} observação(ões). Consulte o console.`);
  console.info(`[${MODULE_ID}] Talento sincronizado em compêndio`, result);
}

export async function importFeatBundle(bundle, { notify = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar Talentos do Grimório.");
  const validation = validateFeatBundle(bundle, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const result = await materializeFeatBundle(bundle);
  result.warnings = [...new Set([...(validation.warnings ?? []), ...(result.warnings ?? [])])];
  if (notify) notifyFeatResult(result);
  return result;
}

export async function importFeatBundles(bundles, { continueOnError = true, notifyEach = true, notifySummary = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar Talentos do Grimório.");
  const list = Array.isArray(bundles) ? bundles : [bundles];
  const results = []; const failures = [];
  for (let index = 0; index < list.length; index += 1) {
    try { results.push(await importFeatBundle(list[index], { notify: notifyEach })); }
    catch (error) {
      const failure = { index, name: list[index]?.identity?.name ?? `Talento ${index + 1}`, error };
      failures.push(failure); console.error(`[${MODULE_ID}] Falha no lote de Talentos`, failure);
      if (!continueOnError) throw error;
    }
  }
  if (notifySummary && failures.length) ui.notifications.warn(`Grimório Importer: ${results.length} Talento(s) importado(s), ${failures.length} falha(s). Veja o console.`);
  else if (notifySummary && list.length > 1) ui.notifications.info(`Grimório Importer: lote de Talentos concluído com ${results.length} bundle(s).`);
  return { imported: results.length, failed: failures.length, results, failures };
}

export async function importFeatPackage(pkg, { continueOnError = true, notify = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar pacotes de Talentos do Grimório.");
  const validation = validateFeatPackage(pkg, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const bundles = [...pkg.bundles].sort((a, b) => (a.source?.sourceId ?? "").localeCompare(b.source?.sourceId ?? "") || (a.identity?.name ?? "").localeCompare(b.identity?.name ?? "", "pt-BR"));
  if (notify) ui.notifications.info(`Grimório Importer: iniciando ${pkg.identity?.name ?? "pacote de Talentos"} (${bundles.length} Talentos).`);
  const packRuntime = defaultPackRuntime();
  const result = await withWritablePacks(packRuntime, ["feats"], async () =>
    await importFeatBundles(bundles, { continueOnError, notifyEach: false, notifySummary: false })
  );
  result.package = { id: pkg.identity?.id, name: pkg.identity?.name, scope: pkg.identity?.scope, summary: pkg.summary };
  result.warnings = validation.warnings;
  if (notify && result.failed) ui.notifications.warn(`Grimório Importer: pacote de Talentos concluído com ${result.imported} importado(s) e ${result.failed} falha(s).`);
  else if (notify) ui.notifications.info(`Grimório Importer: ${pkg.identity?.name ?? "pacote de Talentos"} concluído — ${result.imported} Talento(s) sincronizados.`);
  if (notify && validation.warnings.length) ui.notifications.warn(`Pacote de Talentos com ${validation.warnings.length} observação(ões). Consulte o console.`);
  console.info(`[${MODULE_ID}] Pacote de Talentos importado`, { validation, result });
  return result;
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

export async function importPackage(pkg, { continueOnError = true, notify = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar pacotes do Grimório.");
  const validation = validatePackage(pkg, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const bundles = [...pkg.bundles].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "class" ? -1 : 1));
  if (notify) ui.notifications.info(`Grimório Importer: iniciando ${pkg.identity?.name ?? "pacote"} (${bundles.length} bundles).`);
  const packRuntime = defaultPackRuntime();
  const result = await withWritablePacks(packRuntime, ["classes", "subclasses", "features"], async () =>
    await importBundles(bundles, { continueOnError, notifyEach: false, notifySummary: false })
  );
  result.package = { id: pkg.identity?.id, name: pkg.identity?.name, scope: pkg.identity?.scope, summary: pkg.summary };
  result.warnings = validation.warnings;
  if (notify && result.failed) ui.notifications.warn(`Grimório Importer: pacote concluído com ${result.imported} importado(s) e ${result.failed} falha(s).`);
  else if (notify) ui.notifications.info(`Grimório Importer: ${pkg.identity?.name ?? "pacote"} concluído — ${result.imported} bundle(s) sincronizados.`);
  if (notify && validation.warnings.length) ui.notifications.warn(`Pacote com ${validation.warnings.length} observação(ões). Consulte o console.`);
  console.info(`[${MODULE_ID}] Pacote importado`, { validation, result });
  return result;
}

function notifyRaceResult(result) {
  const { stats, bundle } = result;
  const action = stats.racesCreated ? "criada" : "atualizada";
  ui.notifications.info(`${bundle.name} ${action} em ${PACKS.races.label}. Características raciais: ${stats.racialFeaturesCreated} criadas, ${stats.racialFeaturesUpdated} atualizadas.`);
  if (result.warnings?.length) ui.notifications.warn(`${bundle.name}: ${result.warnings.length} observação(ões). Consulte o console.`);
  console.info(`[${MODULE_ID}] Race Build materializado em compêndios`, result);
}

export async function importRaceBuild(bundle, { notify = true } = {}) {
  if (!game.user?.isGM) throw new Error("Somente um Mestre pode importar Raças do Grimório.");
  const validation = validateRaceBuildBundle(bundle, runtimeInfo());
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  const result = await materializeRaceBuild(bundle);
  result.warnings = [...new Set([...(validation.warnings ?? []), ...(result.warnings ?? [])])];
  if (notify) notifyRaceResult(result);
  return result;
}

export async function importPayload(payload, { notify = true, continueOnError = true } = {}) {
  if (isPackage(payload)) return await importPackage(payload, { continueOnError, notify });
  if (isBundle(payload)) return await importBundle(payload, { notify });
  if (isFeatPackage(payload)) return await importFeatPackage(payload, { continueOnError, notify });
  if (isFeatBundle(payload)) return await importFeatBundle(payload, { notify });
  if (isRaceBuildBundle(payload)) return await importRaceBuild(payload, { notify });
  throw new Error("JSON não reconhecido: esperado bundle/pacote de classe, subclasse, Talento ou Race Build do Grimório.");
}

export async function importPayloads(payloads, { continueOnError = true, notifyEach = true, notifySummary = true } = {}) {
  const list = Array.isArray(payloads) ? payloads : [payloads];
  const results = []; const failures = [];
  for (let index = 0; index < list.length; index += 1) {
    try { results.push(await importPayload(list[index], { notify: notifyEach, continueOnError })); }
    catch (error) { failures.push({ index, error }); console.error(`[${MODULE_ID}] Falha ao importar payload`, { index, error }); if (!continueOnError) throw error; }
  }
  if (notifySummary && failures.length) ui.notifications.warn(`Grimório Importer: ${results.length} arquivo(s) processado(s), ${failures.length} falha(s).`);
  else if (notifySummary && list.length > 1 && !notifyEach) ui.notifications.info(`Grimório Importer: ${results.length} arquivo(s) processado(s).`);
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
  const totalPacks = info.packs.length;
  const readyPacks = info.packs.filter(p => p.available).length;
  const packs = `${readyPacks}/${totalPacks} compêndios disponíveis`;
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
registerFeatChoiceHooks();
registerFeatRuntimeHooks();
registerImporterSceneControl();

Hooks.once("ready", () => {
  const mod = game.modules.get(MODULE_ID);
  if (mod) {
    mod.api = Object.freeze({
      importBundle,
      importBundles,
      importPackage,
      importPayload,
      importPayloads,
      importFeatBundle,
      importFeatBundles,
      importFeatPackage,
      importRaceBuild,
      openBundleFilePicker,
      openImporter,
      previewPayload,
      classifyPayload,
      preflightSupport,
      inspectPayloadCompendiums,
      plannedPayloadDocuments,
      compendiumPreflightSupport,
      importExecutionSupport,
      centralParitySupport,
      commandRoutingSupport,
      releaseReadinessSupport,
      evaluateReleaseReadiness,
      releaseReadiness,
      validateBundle,
      validatePackage,
      validateFeatBundle,
      validateFeatPackage,
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
      featSupport,
      featAutomationSupport,
      featChoiceSupport,
      featRuntimeSupport,
      featAuditSupport,
      featCompendiumAudit,
      auditFeatDocuments,
      runtimeCoverageForActor,
      validateFeatRuntimeCoverage,
      validateRaceBuildBundle,
      isRaceBuildBundle,
      raceBuildValidatorSupport,
      raceBuildSupport,
      raceMaterializerSupport,
      raceAutomationSupport,
      raceActorApplicationSupport,
      inspectActorRace,
      applyRaceBuildToActor,
      syncConditionalFeatEffects,
      configureFeatChoices,
      pendingFeatChoices,
      validateResilientLinkage,
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
  console.info(`[${MODULE_ID}] Pronto — ${IMPORTER_VERSION} · RB-8 aplicação racial ao Actor ativa em modo de homologação; Automação de Talentos 42/42 permanece homologada. Foundry ${game.version}; ${game.system?.id} ${game.system?.version}.`, { packs, feats: featSupport(), featAutomation: featAutomationSupport(), featChoices: featChoiceSupport(), featRuntime: featRuntimeSupport(), featAudit: featAuditSupport(), preflight: compendiumPreflightSupport(), execution: importExecutionSupport(), central: centralParitySupport(), commandRouting: commandRoutingSupport(), stable: releaseReadinessSupport(), automation: automationCoverage() });
});

Hooks.on("chatMessage", (_chatLog, message) => {
  const route = resolveGrimorioCommand(message);
  if (!route) return true;
  void routeGrimorioCommand(message, { openImporter }).catch(error => {
    console.error(`[${MODULE_ID}] Falha ao rotear comando para a Central`, { command: route.command, error });
    ui.notifications.error(`Grimório Importer: ${error?.message ?? error}`);
  });
  return false;
});
