import { IMPORTER_BUILD, IMPORTER_VERSION } from "../version.js";

const REQUIRED_SECTIONS = Object.freeze(["import", "status", "packs", "automation", "audit", "special", "help"]);
const REQUIRED_PACKS = Object.freeze(["classes", "subclasses", "features", "feats", "races", "racialFeatures"]);

function asArray(value) { return Array.isArray(value) ? value : []; }
function bool(value) { return value === true; }
function check(id, label, ok, detail, { blocking = true } = {}) {
  return Object.freeze({
    id, label, ok:Boolean(ok), blocking:Boolean(blocking),
    state: ok ? "pass" : (blocking ? "fail" : "warning"),
    stateLabel: ok ? "OK" : (blocking ? "Bloqueio" : "Atenção"),
    stateIcon: ok ? "fa-solid fa-circle-check" : (blocking ? "fa-solid fa-circle-xmark" : "fa-solid fa-triangle-exclamation"),
    detail:String(detail ?? "")
  });
}

export function evaluateReleaseReadiness({ statusInfo = {}, centralSupport = {}, commandSupport = {}, preflightSupport = {}, compendiumSupport = {}, executionSupport = {} } = {}) {
  const packs = asArray(statusInfo.packs);
  const availablePacks = packs.filter(row => row?.available).length;
  const sectionSet = new Set(asArray(centralSupport.visualSections));
  const destinationPacks = new Set(asArray(compendiumSupport.destinationPacks));
  const developmentBuild = String(centralSupport.channel ?? "") === "development"
    && centralSupport.featureFreeze === false
    && String(centralSupport.targetVersion ?? "") === "0.13.0"
    && IMPORTER_VERSION === "0.13.0-beta.1"
    && String(IMPORTER_BUILD.phase) === "RB-8";
  const raceSupport = statusInfo.raceBuildSupport ?? {};
  const raceValidator = statusInfo.raceBuildValidatorSupport ?? {};
  const raceAutomation = statusInfo.raceAutomationSupport ?? {};
  const raceActor = statusInfo.raceActorApplicationSupport ?? {};

  const checks = [
    check("runtime", "Ambiente homologado", bool(statusInfo.environmentMatches), `Foundry ${statusInfo.activeFoundry ?? "—"} / ${statusInfo.activeSystem ?? "—"} ${statusInfo.activeSystemVersion ?? "—"}`),
    check("packs", "Seis compêndios disponíveis", packs.length >= REQUIRED_PACKS.length && availablePacks === packs.length, `${availablePacks}/${packs.length || REQUIRED_PACKS.length} compêndios disponíveis`),
    check("sections", "Sete áreas da Central", REQUIRED_SECTIONS.every(id => sectionSet.has(id)), `${sectionSet.size}/${REQUIRED_SECTIONS.length} áreas registradas`),
    check("preflight", "Preflight antes da escrita", bool(preflightSupport.validationBeforeWrite) && bool(preflightSupport.compendiumInspection) && bool(preflightSupport.createUpdateDiff) && preflightSupport.writeOperations === false, "Validação + inspeção NOVO/ATUALIZAR sem escrita"),
    check("identity", "Matching estável nos compêndios", String(compendiumSupport.identityMatching ?? "").includes("grimorioId") && destinationPacks.size >= REQUIRED_PACKS.length && compendiumSupport.writeOperations === false, String(compendiumSupport.identityMatching ?? "Contrato de identidade indisponível")),
    check("race-contract", "Race Build Bundle v1 reconhecido", bool(raceSupport.recognition) && bool(raceSupport.validation) && asArray(raceValidator.hashValidation).length === 3 && raceSupport.materialization === true, "RB-8 mantém o contrato/hash; materialização continua restrita aos compêndios antes da aplicação ao Actor"),
    check("race-preflight", "Preflight racial antes da materialização", bool(raceSupport.compendiumPreflight) && preflightSupport.raceBuildPreflightOnly === false && compendiumSupport.raceBuildPreflightOnly === false, "Raça + Características Raciais seguem do preflight para materialização e aplicação RB-8"),
    check("race-automation", "Automação racial conservadora RB-7 preservada", String(raceAutomation.phase ?? "") === "RB-7" && asArray(raceAutomation.activeEffects).length > 0 && asArray(raceAutomation.traitAdvancements).length > 0 && raceAutomation.globalHooks === false && raceAutomation.actorApplication === false, "Efeitos estáticos + Trait Advancements + projeções nativas continuam separados da aplicação ao Actor"),
    check("race-actor", "Aplicação racial RB-8 via AdvancementManager", String(raceActor.phase ?? "") === "RB-8" && raceActor.actorApplication === true && raceActor.usesAdvancementManager === true && raceActor.replacementConfirmation === "required" && raceActor.multipleRacePolicy === "block" && Number(raceActor.worldItemsExpected ?? -1) === 0, "forNewItem/forDeletedItem, confirmação de substituição e zero World Items gerenciados"),
    check("runtime-homologation", "Homologação in-app Foundry 13.351", statusInfo.raceActorHomologated === true, statusInfo.raceActorHomologated === true ? "Workflow validado em instância real" : "Pendente: executar checklist RB-8 em uma instância real Foundry 13.351 / DnD5e 5.3.3 antes de RC/Stable", { blocking:false }),
    check("confirmation", "Fluxos legados mantêm confirmação explícita", bool(executionSupport.writeOperations) && bool(executionSupport.confirmationRequired) && bool(executionSupport.preflightRefreshBeforeConfirmation), "Classes/Talentos continuam exigindo confirmação"),
    check("world-items", "Nenhum Item gerenciado criado no Mundo", Number(executionSupport.worldItemsExpected ?? -1) === 0, `Política esperada: ${Number(executionSupport.worldItemsExpected ?? -1)} Item(s) no Mundo`),
    check("commands", "Comandos roteados para a Central", bool(commandSupport.centralFirst) && bool(commandSupport.directChatImportDisabled) && Number(commandSupport.routeCount ?? 0) === 12, `${Number(commandSupport.routeCount ?? 0)} comandos/aliases roteados`),
    check("feat-audit", "Auditoria dos 42 Talentos preservada", bool(statusInfo.featAudit?.readyForStable ?? statusInfo.featAudit?.readyForRc) && Number(statusInfo.featAudit?.verified ?? 0) === 42 && Number(statusInfo.featAudit?.failed ?? 0) === 0, `${Number(statusInfo.featAudit?.verified ?? 0)}/42 verificados · ${Number(statusInfo.featAudit?.failed ?? 0)} falha(s)`),
    check("development-channel", "Build de homologação RB-8", developmentBuild, developmentBuild ? `${centralSupport.buildLabel ?? IMPORTER_BUILD.label} · feature freeze desativado` : "Build esperada: 0.13.0-beta.1 / RB-8 / development"),
    check("legacy-world", "Conteúdo legado no Mundo", Number(statusInfo.legacyWorldPrototype?.total ?? 0) === 0, Number(statusInfo.legacyWorldPrototype?.total ?? 0) === 0 ? "Nenhum Item legado gerenciado detectado" : `${Number(statusInfo.legacyWorldPrototype?.total ?? 0)} Item(s) legado(s) requerem revisão manual`, { blocking:false })
  ];

  const blockingChecks=checks.filter(row=>row.blocking);
  const blockingFailures=blockingChecks.filter(row=>!row.ok);
  const warnings=checks.filter(row=>!row.blocking && !row.ok);
  const passed=checks.filter(row=>row.ok).length;
  const readyForTesting=blockingFailures.length===0;
  return Object.freeze({
    phase:IMPORTER_BUILD.phase,
    buildLabel:IMPORTER_BUILD.label,
    targetVersion:IMPORTER_BUILD.targetVersion,
    readyForStable:false,
    readyForTesting,
    readyForFinal:false,
    readyForRc:false,
    state:readyForTesting ? (warnings.length ? "warning" : "ready") : "blocked",
    stateLabel:readyForTesting ? (warnings.length ? "RB-8 pronta para homologação com observações" : "RB-8 pronta para homologação") : "RB-8 com bloqueios",
    stateIcon:readyForTesting ? (warnings.length ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check") : "fa-solid fa-circle-xmark",
    checks:Object.freeze(checks), total:checks.length, passed,
    blocking:blockingChecks.length, blockingFailures:blockingFailures.length, warnings:warnings.length
  });
}

export function releaseReadinessSupport() {
  return Object.freeze({
    phase:IMPORTER_BUILD.phase,
    basePhase:"0.12.0 Stable",
    buildLabel:IMPORTER_BUILD.label,
    channel:IMPORTER_BUILD.channel,
    targetVersion:IMPORTER_BUILD.targetVersion,
    purpose:"homologation-rb8",
    featureFreeze:IMPORTER_BUILD.featureFreeze,
    requiredSections:REQUIRED_SECTIONS,
    requiredPacks:REQUIRED_PACKS,
    runtimeHomologationRequired:true,
    compendiumsRequired:true,
    visualPreflightRequired:true,
    stableIdentityRequired:true,
    explicitConfirmationRequired:true,
    centralFirstCommandsRequired:true,
    worldItemsExpected:0,
    legacyWorldItemsAreWarningOnly:true,
    featAudit42Required:true,
    raceBuildContractRequired:true,
    raceMaterializationExpected:true,
    raceAutomationExpected:true,
    raceActorApplicationExpected:true,
    actorReplacementConfirmationRequired:true,
    inAppHomologationRequired:true,
    developmentGateAvailable:true,
    rcGateAvailable:false,
    finalGateAvailable:false,
    stableIntegrityGateAvailable:false
  });
}
