import { validateFeatBundle } from "./feat-validator.js";
import { applyFeatAutomation, featAutomationSupport } from "./feat-automation.js";
import { TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { IMPORTER_VERSION, textToHtml } from "./materializer.js";
import { MODULE_ID, PACKS, defaultPackRuntime, withWritablePacks } from "./pack-storage.js";

function docFlag(doc,key) {
  if (typeof doc?.getFlag === "function") return doc.getFlag(MODULE_ID,key);
  return doc?.flags?.[MODULE_ID]?.[key] ?? doc?._source?.flags?.[MODULE_ID]?.[key];
}
function folderFlag(folder,key) {
  if (typeof folder?.getFlag === "function") return folder.getFlag(MODULE_ID,key);
  return folder?.flags?.[MODULE_ID]?.[key] ?? folder?._source?.flags?.[MODULE_ID]?.[key];
}
function folderParentId(folder) { return folder?.folder?.id ?? folder?.folder ?? folder?._source?.folder ?? null; }
function sourceData(source={}) {
  const page=source.page ?? "";
  return {custom:String(source.title ?? ""),book:"",page:page===null||page===undefined?"":String(page),license:"",rules:"2014",revision:1};
}
function normalizedMetadata(bundle) {
  return {
    prerequisites: JSON.parse(JSON.stringify(Array.isArray(bundle.feat?.prerequisites) ? bundle.feat.prerequisites : [])),
    choices: JSON.parse(JSON.stringify(Array.isArray(bundle.feat?.choices) ? bundle.feat.choices : []))
  };
}

export function buildFeatSource(bundle,{folderId=null}={}) {
  const metadata=normalizedMetadata(bundle);
  const source = {
    name: bundle.identity.name,
    type: "feat",
    folder: folderId,
    system: {
      description: {value:textToHtml(bundle.feat?.description),chat:""},
      source: sourceData(bundle.source),
      type: {value:"feat",subtype:""},
      requirements: String(bundle.feat?.prerequisite ?? ""),
      identifier: bundle.identity.identifier,
      advancement: {},
      activities: {},
      uses: {spent:0,max:"",recovery:[]}
    },
    effects: [],
    flags: {
      [MODULE_ID]: {
        grimorioId: bundle.identity.grimorioId,
        identifier: bundle.identity.identifier,
        bundleSchema: bundle.schema,
        bundleVersion: bundle.schemaVersion,
        importerVersion: IMPORTER_VERSION,
        kind: "feat",
        documentRole: "feat",
        sourceId: bundle.source?.sourceId ?? "",
        sourceTitle: bundle.source?.title ?? "",
        sourcePage: bundle.source?.page ?? null,
        repeatable: bundle.feat?.repeatable === true,
        prerequisites: metadata.prerequisites,
        choices: metadata.choices,
        storage: "compendium",
        packKey: "feats",
        packCollection: PACKS.feats.collection
      }
    }
  };
  source.flags[MODULE_ID].automation = applyFeatAutomation(source, bundle);
  return source;
}

function managedSourceFolder(bundle) {
  const sourceId=bundle.source?.sourceId ?? "fonte";
  const name=bundle.source?.shortTitle || bundle.source?.title || sourceId;
  return {
    name,
    type:"Item",
    folder:null,
    sorting:"a",
    sort:0,
    flags:{
      [MODULE_ID]:{
        managedFolder:true,
        folderRole:"feat-source",
        sourceId,
        importerVersion:IMPORTER_VERSION
      }
    }
  };
}

async function ensureSourceFolder(runtime,bundle) {
  if (typeof runtime.listPackFolders !== "function" || typeof runtime.createPackFolder !== "function") return {folderId:null,created:0,updated:0};
  const folders=runtime.listPackFolders("feats");
  const sourceId=bundle.source?.sourceId ?? "";
  const source=managedSourceFolder(bundle);
  const existing=folders.find(folder=>folderFlag(folder,"managedFolder")===true && folderFlag(folder,"folderRole")==="feat-source" && folderFlag(folder,"sourceId")===sourceId);
  if (existing) {
    const currentName=String(existing?.name ?? existing?._source?.name ?? "");
    const currentParent=folderParentId(existing);
    if (currentName!==source.name || currentParent!==null || folderFlag(existing,"importerVersion")!==IMPORTER_VERSION) {
      const updated=await runtime.updatePackFolder("feats",existing,source);
      return {folderId:(updated??existing).id,created:0,updated:1};
    }
    return {folderId:existing.id,created:0,updated:0};
  }
  const created=await runtime.createPackFolder("feats",source);
  if (!created) throw new Error(`O Foundry não retornou a pasta criada em ${PACKS.feats.label}: ${source.name}.`);
  return {folderId:created.id,created:1,updated:0};
}

async function upsertFeat(runtime,items,bundle,source) {
  const existing=items.find(doc=>docFlag(doc,"documentRole")==="feat" && docFlag(doc,"grimorioId")===bundle.identity.grimorioId);
  if (existing) {
    const updated=await runtime.updatePackItem("feats",existing,source);
    return {doc:updated??existing,created:false};
  }
  const created=await runtime.createPackItem("feats",source);
  if (!created) throw new Error(`O Foundry não retornou o Item criado em ${PACKS.feats.label}: ${source.name}.`);
  items.push(created);
  return {doc:created,created:true};
}

export function defaultFeatRuntime() {
  const packRuntime=defaultPackRuntime();
  return {
    foundryVersion:globalThis.game?.version ?? globalThis.game?.release?.version ?? "",
    systemId:globalThis.game?.system?.id ?? "",
    systemVersion:globalThis.game?.system?.version ?? "",
    isGM:Boolean(globalThis.game?.user?.isGM),
    ...packRuntime
  };
}

export async function materializeFeatBundle(bundle,runtime=defaultFeatRuntime()) {
  const validation=validateFeatBundle(bundle,runtime);
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  if (runtime.isGM===false) throw new Error("Somente um Mestre pode importar Talentos do Grimório.");
  return await withWritablePacks(runtime,["feats"],async()=>{
    const items=await runtime.listPackItems("feats");
    const folder=await ensureSourceFolder(runtime,bundle);
    const source=buildFeatSource(bundle,{folderId:folder.folderId});
    const result=await upsertFeat(runtime,items,bundle,source);
    const automation = source.flags?.[MODULE_ID]?.automation ?? {};
    const deferred = automation.deferred ?? {};
    const warnings = [...validation.warnings];
    if (automation.applied && Number(automation.materialized?.assistedChoices ?? 0) > 0) {
      warnings.push(`FA-4: ${Number(automation.materialized.assistedChoices)} escolha(s) vinculada(s) será(ão) configurada(s) no Actor durante a aquisição do Talento.`);
    }
    if (automation.applied && (Number(deferred.advancements ?? 0) || Number(deferred.effects ?? 0) || Number(deferred.runtime ?? 0))) {
      warnings.push(`FA-4: ${Number(deferred.advancements ?? 0)} Advancement(s), ${Number(deferred.effects ?? 0)} Effect(s) e ${Number(deferred.runtime ?? 0)} requisito(s) permanecem sem materialização.`);
    }
    return {
      ok:true,
      bundle:{kind:"feat",grimorioId:bundle.identity.grimorioId,name:bundle.identity.name},
      target:{foundry:TARGET_FOUNDRY,dnd5e:TARGET_DND5E},
      storage:{mode:"compendium",featPack:PACKS.feats.collection,sourceFolderId:folder.folderId,worldItemsCreated:0},
      item:result.doc,
      automation,
      automationSupport:featAutomationSupport(),
      stats:{
        featsCreated:result.created?1:0,
        featsUpdated:result.created?0:1,
        foldersCreated:folder.created,
        foldersUpdated:folder.updated,
        worldItemsCreated:0,
        advancementsMaterialized:Number(automation.materialized?.advancements ?? 0),
        advancementDocumentsMaterialized:Number(automation.materialized?.advancementDocuments ?? automation.materialized?.advancements ?? 0),
        assistedChoicesMaterialized:Number(automation.materialized?.assistedChoices ?? 0),
        activitiesMaterialized:Number(automation.materialized?.activities ?? 0),
        effectsMaterialized:Number(automation.materialized?.effects ?? 0),
        usesMaterialized:Number(automation.materialized?.uses ?? 0),
        advancementsDeferred:Number(deferred.advancements ?? 0),
        effectsDeferred:Number(deferred.effects ?? 0),
        runtimeMaterialized:Number(automation.materialized?.runtime ?? 0),
        runtimeDeferred:Number(deferred.runtime ?? 0)
      },
      warnings:[...new Set(warnings)]
    };
  });
}
