import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { MODULE_ID } from "./pack-storage.js";
import { IMPORTER_BUILD, IMPORTER_VERSION } from "./version.js";

export const RACE_HOMOLOGATION_SCHEMA = "grimorio-race-runtime-homologation";
export const RACE_HOMOLOGATION_SCHEMA_VERSION = 1;
export const RACE_HOMOLOGATION_CHECKLIST_VERSION = 1;
export const RACE_HOMOLOGATION_SETTING = "raceActorRuntimeHomologated";
export const RACE_HOMOLOGATION_REPORT_SETTING = "raceActorHomologationReport";

export const RACE_HOMOLOGATION_CHECKS = Object.freeze([
  Object.freeze({ id:"apply-empty", label:"Actor sem raça recebe Humano/Habitante das Florestas" }),
  Object.freeze({ id:"advancement-choices", label:"Size/ASI/idioma/ItemGrant aparecem e concluem no AdvancementManager" }),
  Object.freeze({ id:"embedded-items", label:"Race e características raciais são embutidas no Actor" }),
  Object.freeze({ id:"idempotent", label:"Reaplicar o mesmo build resulta em no-op idempotente" }),
  Object.freeze({ id:"replace-complex", label:"Substituição por Hanyou/Emberash conclui após confirmação" }),
  Object.freeze({ id:"cancel-replacement", label:"Cancelar a confirmação preserva o Actor intacto" }),
  Object.freeze({ id:"cancel-removal", label:"Cancelar a remoção impede a nova Race" }),
  Object.freeze({ id:"disable-advancements", label:"disableAdvancements bloqueia a aplicação" }),
  Object.freeze({ id:"multiple-races", label:"Actor com múltiplas Race Items é bloqueado" }),
  Object.freeze({ id:"zero-world-items", label:"Nenhum Item gerenciado é criado em game.items" }),
  Object.freeze({ id:"details-race", label:"system.details.race permanece coerente após criação/substituição" }),
  Object.freeze({ id:"restart-persistence", label:"Reinício do Mundo preserva UUIDs e reimportação idempotente" })
]);

function currentGame(gameRef = globalThis.game) { return gameRef ?? null; }
function parseReport(raw) { if (!raw) return null; if (typeof raw === "object") return raw; try { return JSON.parse(String(raw)); } catch { return null; } }
function environment(gameRef) { const game=currentGame(gameRef); return Object.freeze({ foundryVersion:String(game?.version ?? game?.release?.version ?? ""), systemId:String(game?.system?.id ?? ""), systemVersion:String(game?.system?.version ?? "") }); }
function environmentMatches(env) { return env.foundryVersion===TARGET_FOUNDRY && env.systemId==="dnd5e" && env.systemVersion===TARGET_DND5E; }
function getSetting(gameRef,key,fallback) { try { return gameRef?.settings?.get?.(MODULE_ID,key) ?? fallback; } catch { return fallback; } }
async function setSetting(gameRef,key,value) { if(!gameRef?.settings?.set) throw new Error("Settings do Foundry indisponíveis para registrar a homologação."); return await gameRef.settings.set(MODULE_ID,key,value); }

export function registerReleaseHomologationSettings(gameRef = globalThis.game) {
  const settings=gameRef?.settings; if(!settings?.register) return false;
  settings.register(MODULE_ID,RACE_HOMOLOGATION_SETTING,{name:"Homologação runtime de Raças",hint:"Registro interno do checklist RB-8/0.13.0. Não habilita mecânicas adicionais; apenas alimenta o gate de release.",scope:"world",config:false,type:Boolean,default:false});
  settings.register(MODULE_ID,RACE_HOMOLOGATION_REPORT_SETTING,{name:"Relatório de homologação runtime de Raças",hint:"Evidência estruturada do checklist manual executado no Foundry homologado.",scope:"world",config:false,type:String,default:""});
  return true;
}

export function raceRuntimeHomologationStatus({gameRef=globalThis.game}={}) {
  const env=environment(gameRef); const flag=Boolean(getSetting(gameRef,RACE_HOMOLOGATION_SETTING,false)); const report=parseReport(getSetting(gameRef,RACE_HOMOLOGATION_REPORT_SETTING,""));
  const checks=report?.checks && typeof report.checks==="object" ? report.checks : {}; const missing=RACE_HOMOLOGATION_CHECKS.filter(row=>checks[row.id]!==true).map(row=>row.id);
  const reportCompatible=Boolean(report)&&report.schema===RACE_HOMOLOGATION_SCHEMA&&Number(report.schemaVersion)===RACE_HOMOLOGATION_SCHEMA_VERSION&&Number(report.checklistVersion)===RACE_HOMOLOGATION_CHECKLIST_VERSION&&report.targetFoundry===TARGET_FOUNDRY&&report.targetDnd5e===TARGET_DND5E&&report.targetImporter==="0.13.0"&&missing.length===0;
  const homologated=flag&&reportCompatible&&environmentMatches(env);
  return Object.freeze({homologated,recorded:flag,environmentMatches:environmentMatches(env),environment:env,report:report?Object.freeze(report):null,missing:Object.freeze(missing),required:RACE_HOMOLOGATION_CHECKS.length,completed:RACE_HOMOLOGATION_CHECKS.length-missing.length,checklistVersion:RACE_HOMOLOGATION_CHECKLIST_VERSION,targetFoundry:TARGET_FOUNDRY,targetDnd5e:TARGET_DND5E,targetImporter:"0.13.0"});
}

export async function recordRaceRuntimeHomologation({checks={},notes="",gameRef=globalThis.game}={}) {
  const game=currentGame(gameRef); if(!game?.user?.isGM) throw new Error("Somente um Mestre pode registrar a homologação runtime do Grimório Importer.");
  const env=environment(game); if(!environmentMatches(env)) throw new Error(`A homologação só pode ser registrada em Foundry ${TARGET_FOUNDRY} / DnD5e ${TARGET_DND5E}.`);
  const normalized=Object.fromEntries(RACE_HOMOLOGATION_CHECKS.map(row=>[row.id,checks?.[row.id]===true])); const missing=RACE_HOMOLOGATION_CHECKS.filter(row=>normalized[row.id]!==true);
  if(missing.length) throw new Error(`Checklist de homologação incompleto: ${missing.map(row=>row.label).join("; ")}.`);
  const report=Object.freeze({schema:RACE_HOMOLOGATION_SCHEMA,schemaVersion:RACE_HOMOLOGATION_SCHEMA_VERSION,checklistVersion:RACE_HOMOLOGATION_CHECKLIST_VERSION,targetFoundry:TARGET_FOUNDRY,targetDnd5e:TARGET_DND5E,targetImporter:"0.13.0",recordedWithVersion:IMPORTER_VERSION,recordedWithBuild:IMPORTER_BUILD.label,completedAt:new Date().toISOString(),checks:normalized,notes:String(notes??"").trim()});
  await setSetting(game,RACE_HOMOLOGATION_REPORT_SETTING,JSON.stringify(report)); await setSetting(game,RACE_HOMOLOGATION_SETTING,true); return raceRuntimeHomologationStatus({gameRef:game});
}
export async function clearRaceRuntimeHomologation({gameRef=globalThis.game}={}) { const game=currentGame(gameRef); if(!game?.user?.isGM) throw new Error("Somente um Mestre pode limpar o registro de homologação runtime."); await setSetting(game,RACE_HOMOLOGATION_SETTING,false); await setSetting(game,RACE_HOMOLOGATION_REPORT_SETTING,""); return raceRuntimeHomologationStatus({gameRef:game}); }
export function raceRuntimeHomologationSupport() { return Object.freeze({schema:RACE_HOMOLOGATION_SCHEMA,schemaVersion:RACE_HOMOLOGATION_SCHEMA_VERSION,checklistVersion:RACE_HOMOLOGATION_CHECKLIST_VERSION,checks:RACE_HOMOLOGATION_CHECKS,targetFoundry:TARGET_FOUNDRY,targetDnd5e:TARGET_DND5E,targetImporter:"0.13.0",worldScoped:true,gmOnly:true,manualEvidenceRequired:true,automaticSelfCertification:false}); }
