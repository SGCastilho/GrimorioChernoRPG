import { IMPORTER_BUILD, IMPORTER_VERSION } from "../version.js";

const REQUIRED_SECTIONS = Object.freeze(["import", "status", "packs", "automation", "audit", "special", "help"]);
const REQUIRED_PACKS = Object.freeze(["classes", "subclasses", "features", "feats"]);

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
  const stableBuild = String(centralSupport.channel ?? "") === "stable"
    && centralSupport.featureFreeze === true
    && String(centralSupport.targetVersion ?? "") === "0.12.0"
    && IMPORTER_VERSION === "0.12.0"
    && String(IMPORTER_BUILD.phase) === "0.12.0 Stable";

  const checks = [
    check("runtime", "Ambiente homologado", bool(statusInfo.environmentMatches), `Foundry ${statusInfo.activeFoundry ?? "—"} / ${statusInfo.activeSystem ?? "—"} ${statusInfo.activeSystemVersion ?? "—"}`),
    check("packs", "Quatro compêndios disponíveis", packs.length >= REQUIRED_PACKS.length && availablePacks === packs.length, `${availablePacks}/${packs.length || REQUIRED_PACKS.length} compêndios disponíveis`),
    check("sections", "Sete áreas da Central", REQUIRED_SECTIONS.every(id => sectionSet.has(id)), `${sectionSet.size}/${REQUIRED_SECTIONS.length} áreas registradas`),
    check("preflight", "Preflight antes da escrita", bool(preflightSupport.validationBeforeWrite) && bool(preflightSupport.compendiumInspection) && bool(preflightSupport.createUpdateDiff) && preflightSupport.writeOperations === false, "Validação + inspeção NOVO/ATUALIZAR sem escrita"),
    check("identity", "Matching estável nos compêndios", String(compendiumSupport.identityMatching ?? "").includes("grimorioId") && destinationPacks.size >= REQUIRED_PACKS.length && compendiumSupport.writeOperations === false, String(compendiumSupport.identityMatching ?? "Contrato de identidade indisponível")),
    check("confirmation", "Confirmação explícita de importação", bool(executionSupport.writeOperations) && bool(executionSupport.confirmationRequired) && bool(executionSupport.preflightRefreshBeforeConfirmation), "Execução visual exige confirmação após atualizar o preflight"),
    check("world-items", "Nenhum Item gerenciado criado no Mundo", Number(executionSupport.worldItemsExpected ?? -1) === 0, `Política esperada: ${Number(executionSupport.worldItemsExpected ?? -1)} Item(s) no Mundo`),
    check("commands", "Comandos roteados para a Central", bool(commandSupport.centralFirst) && bool(commandSupport.directChatImportDisabled) && Number(commandSupport.routeCount ?? 0) === 12, `${Number(commandSupport.routeCount ?? 0)} comandos/aliases roteados`),
    check("feat-audit", "Auditoria dos 42 Talentos", bool(statusInfo.featAudit?.readyForStable ?? statusInfo.featAudit?.readyForRc) && Number(statusInfo.featAudit?.verified ?? 0) === 42 && Number(statusInfo.featAudit?.failed ?? 0) === 0, `${Number(statusInfo.featAudit?.verified ?? 0)}/42 verificados · ${Number(statusInfo.featAudit?.failed ?? 0)} falha(s)`),
    check("stable-channel", "Build estável congelada", stableBuild, stableBuild ? `${centralSupport.buildLabel ?? IMPORTER_BUILD.label} · canal stable · feature freeze ativo` : "Build esperada: 0.12.0 Stable, canal stable, featureFreeze true"),
    check("legacy-world", "Conteúdo legado no Mundo", Number(statusInfo.legacyWorldPrototype?.total ?? 0) === 0, Number(statusInfo.legacyWorldPrototype?.total ?? 0) === 0 ? "Nenhum Item legado gerenciado detectado" : `${Number(statusInfo.legacyWorldPrototype?.total ?? 0)} Item(s) legado(s) requerem revisão manual`, { blocking:false })
  ];

  const blockingChecks=checks.filter(row=>row.blocking);
  const blockingFailures=blockingChecks.filter(row=>!row.ok);
  const warnings=checks.filter(row=>!row.blocking && !row.ok);
  const passed=checks.filter(row=>row.ok).length;
  const readyForStable=blockingFailures.length===0;
  return Object.freeze({
    phase:IMPORTER_BUILD.phase,
    buildLabel:IMPORTER_BUILD.label,
    targetVersion:IMPORTER_BUILD.targetVersion,
    readyForStable,
    readyForTesting:readyForStable,
    readyForFinal:readyForStable,
    readyForRc:readyForStable,
    state:readyForStable ? (warnings.length ? "warning" : "ready") : "blocked",
    stateLabel:readyForStable ? (warnings.length ? "Versão estável íntegra com observações" : "Versão estável íntegra") : "Versão estável com bloqueios",
    stateIcon:readyForStable ? (warnings.length ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-check") : "fa-solid fa-circle-xmark",
    checks:Object.freeze(checks), total:checks.length, passed,
    blocking:blockingChecks.length, blockingFailures:blockingFailures.length, warnings:warnings.length
  });
}

export function releaseReadinessSupport() {
  return Object.freeze({
    phase:IMPORTER_BUILD.phase,
    basePhase:"FA-5",
    buildLabel:IMPORTER_BUILD.label,
    channel:IMPORTER_BUILD.channel,
    targetVersion:IMPORTER_BUILD.targetVersion,
    purpose:"stable-integrity",
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
    developmentGateAvailable:false,
    rcGateAvailable:false,
    finalGateAvailable:true,
    stableIntegrityGateAvailable:true
  });
}
