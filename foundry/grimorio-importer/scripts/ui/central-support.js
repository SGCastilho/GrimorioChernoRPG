import { IMPORTER_BUILD } from "../version.js";

export function centralParitySupport() {
  return Object.freeze({
    phase: IMPORTER_BUILD.phase,
    basePhase: "0.11-G",
    buildLabel: IMPORTER_BUILD.label,
    channel: IMPORTER_BUILD.channel,
    targetVersion: IMPORTER_BUILD.targetVersion,
    releaseCandidate: true,
    featureFreeze: IMPORTER_BUILD.featureFreeze,
    visualSections: Object.freeze(["import", "status", "packs", "automation", "audit", "special", "help"]),
    commandParity: true,
    status: true,
    compendiums: true,
    worldPrototypeStatus: true,
    automationCoverage: true,
    automationAudit: true,
    specialActorStatus: true,
    configureSpecialActor: true,
    help: true,
    commandsPreserved: true,
    chatCommandsRouteToCentral: true,
    importCommandsUseVisualPreflight: true,
    refreshablePanels: true,
    gmOnly: true,
    releaseReadinessGate: true,
    finalReadinessGate: true,
    accessibilityPass: true,
    regressionSuite: true
  });
}
