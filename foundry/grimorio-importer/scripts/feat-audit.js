import { MODULE_ID, defaultPackRuntime } from "./pack-storage.js";
import { FEAT_AUDIT_BASELINE, FEAT_AUDIT_BASELINE_VERSION, FEAT_AUDIT_SOURCE, featAuditBaselineRows } from "./feat-audit-baseline.js";
import { featRuntimeSupport } from "./feat-runtime.js";
import { IMPORTER_BUILD, IMPORTER_VERSION } from "./version.js";

export const FEAT_AUDIT_PHASE = "FA-5";
export const FEAT_AUDIT_VERSION = 1;

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.contents)) return value.contents;
  if (value instanceof Map) return [...value.values()];
  if (value && typeof value.values === "function") {
    try { return [...value.values()]; } catch (_) { /* noop */ }
  }
  if (value && typeof value === "object") return Object.values(value);
  return [];
}
function clean(value) { return String(value ?? "").trim(); }
function flagsOf(doc) { return doc?.flags?.[MODULE_ID] ?? doc?._source?.flags?.[MODULE_ID] ?? {}; }
function automationOf(doc) { return flagsOf(doc)?.automation ?? {}; }
function systemOf(doc) { return doc?.system ?? doc?._source?.system ?? {}; }
function effectsOf(doc) { return asArray(doc?.effects ?? doc?._source?.effects ?? []); }
function keySet(values) { return new Set(asArray(values).map(value => clean(value)).filter(Boolean)); }
function exactSet(actual, expected) {
  const left=keySet(actual), right=keySet(expected);
  return left.size===right.size && [...left].every(value=>right.has(value));
}
function automationKeys(collection, kind) {
  return asArray(collection)
    .filter(entry => flagsOf(entry)?.automationKind === kind)
    .map(entry => clean(flagsOf(entry)?.automationKey || entry?._id || entry?.id))
    .filter(Boolean)
    .sort((a,b)=>a.localeCompare(b,"en"));
}
function managedEffects(doc) {
  return effectsOf(doc).filter(effect => flagsOf(effect)?.automationKind === "effect");
}
function issue(code, detail) { return Object.freeze({ code, detail:String(detail ?? "") }); }
function runtimeModeCount(expected, key) { return Number(expected?.runtimeModes?.[key] ?? 0); }
function hasAssistedMarker(expected) { return asArray(expected?.effects).some(effect => effect?.runtimeManaged === true && Number(effect?.changes ?? 0) === 0); }

function coverageMode(expected) {
  if (!expected) return "unknown";
  if (expected.tier === "full" && !expected.runtime && !expected.assistedChoices && !hasAssistedMarker(expected)) return "native";
  if (expected.assistedChoices || runtimeModeCount(expected,"assisted") || runtimeModeCount(expected,"description") || hasAssistedMarker(expected)) return "assisted";
  if (expected.runtime) return "runtime";
  return "narrative";
}
function coverageLabel(mode) {
  return ({ native:"Nativa", runtime:"Runtime/Activity", assisted:"Assistida", narrative:"Nativa + textual", unknown:"Desconhecida" })[mode] ?? mode;
}
function stateFor(issues, expected) {
  if (issues.length) return { state:"fail", stateLabel:"Falha", stateIcon:"fa-solid fa-circle-xmark" };
  const mode=coverageMode(expected);
  if (mode === "assisted" || mode === "narrative") return { state:"warning", stateLabel:"Verificado com assistência", stateIcon:"fa-solid fa-triangle-exclamation" };
  return { state:"pass", stateLabel:"Verificado", stateIcon:"fa-solid fa-circle-check" };
}

export function auditFeatDocument(doc, expected, { grimorioId = "" } = {}) {
  const flags=flagsOf(doc), system=systemOf(doc), automation=automationOf(doc);
  const issues=[];
  const actualAdvancements=automationKeys(system.advancement,"advancement");
  const actualActivities=automationKeys(system.activities,"activity");
  const actualEffects=automationKeys(managedEffects(doc),"effect");
  const expectedEffects=asArray(expected?.effects).map(effect=>effect.key).filter(Boolean).sort((a,b)=>a.localeCompare(b,"en"));
  const actualUses=Number(automation?.materialized?.uses ?? 0);
  const actualRuntime=Number(automation?.materialized?.runtime ?? 0);
  const actualAssistedChoices=Number(automation?.materialized?.assistedChoices ?? 0);
  const deferred=automation?.deferred ?? {};

  if (doc?.type !== "feat" && doc?._source?.type !== "feat") issues.push(issue("type", "O documento gerenciado não é um Item do tipo feat."));
  if (flags.documentRole !== "feat") issues.push(issue("role", "flags.documentRole não é feat."));
  if (clean(flags.grimorioId) !== clean(grimorioId)) issues.push(issue("identity", `grimorioId esperado ${grimorioId}; recebido ${clean(flags.grimorioId) || "—"}.`));
  if (Number(flags.bundleVersion ?? 0) !== FEAT_AUDIT_SOURCE.bundleSchemaVersion) issues.push(issue("bundle-version", `Feat Bundle v${FEAT_AUDIT_SOURCE.bundleSchemaVersion} esperado; recebido v${flags.bundleVersion ?? "—"}.`));
  if (automation.applied !== true) issues.push(issue("automation", "Plano de automação não está marcado como aplicado."));
  if (automation.planSchema !== FEAT_AUDIT_SOURCE.automationPlanSchema || Number(automation.planSchemaVersion ?? 0) !== FEAT_AUDIT_SOURCE.automationPlanSchemaVersion) issues.push(issue("plan-schema", "Schema do plano de automação divergente da FA-1."));
  if (clean(automation.profileId) !== clean(grimorioId)) issues.push(issue("profile", "profileId de automação não corresponde ao grimorioId."));
  if (clean(automation.tier) !== clean(expected?.tier)) issues.push(issue("tier", `Tier esperado ${expected?.tier ?? "—"}; recebido ${automation.tier ?? "—"}.`));
  if (!exactSet(actualAdvancements, expected?.advancements)) issues.push(issue("advancements", `Advancements esperados [${asArray(expected?.advancements).join(", ")}]; encontrados [${actualAdvancements.join(", ")}].`));
  if (!exactSet(actualActivities, expected?.activities)) issues.push(issue("activities", `Activities esperadas [${asArray(expected?.activities).join(", ")}]; encontradas [${actualActivities.join(", ")}].`));
  if (!exactSet(actualEffects, expectedEffects)) issues.push(issue("effects", `Effects esperados [${expectedEffects.join(", ")}]; encontrados [${actualEffects.join(", ")}].`));
  if (actualUses !== Number(expected?.uses ?? 0)) issues.push(issue("uses", `Uses materializados esperados ${Number(expected?.uses ?? 0)}; encontrados ${actualUses}.`));
  if (actualRuntime !== Number(expected?.runtime ?? 0)) issues.push(issue("runtime", `Runtime esperado ${Number(expected?.runtime ?? 0)}; encontrado ${actualRuntime}.`));
  if (actualAssistedChoices !== Number(expected?.assistedChoices ?? 0)) issues.push(issue("choices", `Escolhas assistidas esperadas ${Number(expected?.assistedChoices ?? 0)}; encontradas ${actualAssistedChoices}.`));
  if (Number(deferred.advancements ?? 0) || Number(deferred.effects ?? 0) || Number(deferred.runtime ?? 0)) issues.push(issue("deferred", `Ainda existem itens diferidos: A${Number(deferred.advancements ?? 0)} / E${Number(deferred.effects ?? 0)} / R${Number(deferred.runtime ?? 0)}.`));

  const actualEffectRows=managedEffects(doc);
  for (const expectedEffect of asArray(expected?.effects)) {
    const actual=actualEffectRows.find(effect=>clean(flagsOf(effect)?.automationKey)===clean(expectedEffect.key));
    if (!actual) continue;
    const effectFlags=flagsOf(actual);
    if (Boolean(effectFlags.runtimeManaged) !== Boolean(expectedEffect.runtimeManaged)) issues.push(issue("effect-runtime-mode", `${expectedEffect.key}: runtimeManaged divergente.`));
    if (Boolean(actual.transfer) !== Boolean(expectedEffect.transfer)) issues.push(issue("effect-transfer", `${expectedEffect.key}: transfer divergente.`));
    if (asArray(actual.changes).length !== Number(expectedEffect.changes ?? 0)) issues.push(issue("effect-changes", `${expectedEffect.key}: número de changes esperado ${Number(expectedEffect.changes ?? 0)}; encontrado ${asArray(actual.changes).length}.`));
  }

  const mode=coverageMode(expected), state=stateFor(issues, expected);
  return Object.freeze({
    grimorioId, name:doc?.name ?? doc?._source?.name ?? expected?.name ?? grimorioId,
    tier:expected?.tier ?? automation?.tier ?? "—", coverageMode:mode, coverageLabel:coverageLabel(mode),
    ...state, ok:issues.length===0, issues:Object.freeze(issues),
    expected:Object.freeze({ advancements:asArray(expected?.advancements).length, activities:asArray(expected?.activities).length, effects:asArray(expected?.effects).length, uses:Number(expected?.uses ?? 0), runtime:Number(expected?.runtime ?? 0), assistedChoices:Number(expected?.assistedChoices ?? 0) }),
    actual:Object.freeze({ advancements:actualAdvancements.length, activities:actualActivities.length, effects:actualEffects.length, uses:actualUses, runtime:actualRuntime, assistedChoices:actualAssistedChoices }),
    runtimeModes:Object.freeze({ ...(expected?.runtimeModes ?? {}) }), importerVersion:clean(flags.importerVersion)
  });
}

export function auditFeatDocuments(docs = []) {
  const expectedRows=featAuditBaselineRows();
  const expectedIds=new Set(expectedRows.map(row=>row.grimorioId));
  const managed=asArray(docs).filter(doc=>flagsOf(doc)?.documentRole === "feat" && flagsOf(doc)?.grimorioId);
  const grouped=new Map();
  for (const doc of managed) {
    const id=clean(flagsOf(doc).grimorioId);
    const list=grouped.get(id) ?? [];
    list.push(doc); grouped.set(id,list);
  }
  const rows=[]; const missing=[]; const duplicates=[];
  for (const expected of expectedRows) {
    const docsForId=grouped.get(expected.grimorioId) ?? [];
    if (!docsForId.length) {
      missing.push(expected.grimorioId);
      rows.push(Object.freeze({ grimorioId:expected.grimorioId,name:expected.name,tier:expected.tier,coverageMode:coverageMode(expected),coverageLabel:coverageLabel(coverageMode(expected)),state:"fail",stateLabel:"Ausente",stateIcon:"fa-solid fa-circle-xmark",ok:false,issues:Object.freeze([issue("missing","Talento esperado não está no compêndio gerenciado.")]),expected:Object.freeze({advancements:asArray(expected.advancements).length,activities:asArray(expected.activities).length,effects:asArray(expected.effects).length,uses:Number(expected.uses??0),runtime:Number(expected.runtime??0),assistedChoices:Number(expected.assistedChoices??0)}),actual:Object.freeze({advancements:0,activities:0,effects:0,uses:0,runtime:0,assistedChoices:0}),runtimeModes:Object.freeze({...expected.runtimeModes}) }));
      continue;
    }
    if (docsForId.length>1) duplicates.push({ grimorioId:expected.grimorioId, count:docsForId.length });
    rows.push(auditFeatDocument(docsForId[0], expected, { grimorioId:expected.grimorioId }));
  }
  const extras=managed.filter(doc=>!expectedIds.has(clean(flagsOf(doc).grimorioId))).map(doc=>({ grimorioId:clean(flagsOf(doc).grimorioId), name:doc?.name ?? "Talento extra" }));
  const verified=rows.filter(row=>row.ok).length;
  const failed=rows.filter(row=>!row.ok).length;
  const assisted=rows.filter(row=>row.ok && row.coverageMode==="assisted").length;
  const native=rows.filter(row=>row.ok && row.coverageMode==="native").length;
  const runtime=rows.filter(row=>row.ok && row.coverageMode==="runtime").length;
  const narrative=rows.filter(row=>row.ok && row.coverageMode==="narrative").length;
  const structuralOk=failed===0 && missing.length===0 && duplicates.length===0 && extras.length===0 && managed.length===FEAT_AUDIT_SOURCE.expectedFeats;
  const totals=rows.reduce((out,row)=>{
    for (const key of ["advancements","activities","effects","uses","runtime","assistedChoices"]) {
      out.expected[key]+=Number(row.expected?.[key]??0); out.actual[key]+=Number(row.actual?.[key]??0);
    }
    return out;
  },{expected:{advancements:0,activities:0,effects:0,uses:0,runtime:0,assistedChoices:0},actual:{advancements:0,activities:0,effects:0,uses:0,runtime:0,assistedChoices:0}});
  return Object.freeze({
    phase:FEAT_AUDIT_PHASE, auditVersion:FEAT_AUDIT_VERSION, baselineVersion:FEAT_AUDIT_BASELINE_VERSION,
    source:FEAT_AUDIT_SOURCE, importerVersion:IMPORTER_VERSION, build:IMPORTER_BUILD,
    expected:FEAT_AUDIT_SOURCE.expectedFeats, managed:managed.length, verified, failed,
    missing:Object.freeze(missing), duplicates:Object.freeze(duplicates), extras:Object.freeze(extras),
    native, runtime, assisted, narrative, needsAssistance:assisted+narrative,
    structuralOk, readyForStable:structuralOk && verified===FEAT_AUDIT_SOURCE.expectedFeats, readyForRc:structuralOk && verified===FEAT_AUDIT_SOURCE.expectedFeats,
    totals:Object.freeze({expected:Object.freeze(totals.expected),actual:Object.freeze(totals.actual)}),
    rows:Object.freeze(rows), runtimeSupport:featRuntimeSupport()
  });
}

export async function featCompendiumAudit(runtime = defaultPackRuntime()) {
  const docs=await runtime.listPackItems("feats");
  return auditFeatDocuments(docs);
}

export function featAuditSupport() {
  return Object.freeze({
    phase:FEAT_AUDIT_PHASE, auditVersion:FEAT_AUDIT_VERSION, baselineVersion:FEAT_AUDIT_BASELINE_VERSION,
    sourceSiteVersion:FEAT_AUDIT_SOURCE.siteVersion, expectedFeats:FEAT_AUDIT_SOURCE.expectedFeats,
    expectedAdvancements:26, expectedActivities:22, expectedEffects:10, expectedUses:2, expectedRuntimeRecords:56, expectedAssistedChoices:3,
    checksStableIdentity:true, checksBundleV2:true, checksAutomationSchema:true, checksExactEmbeddedKeys:true,
    checksDeferredZero:true, checksConditionalEffectSafety:true, checksRuntimeCoverage:true,
    compendiumAudit:true, rcPreparation:true, stableRelease:true, noMechanicalPromotionInAudit:true
  });
}
