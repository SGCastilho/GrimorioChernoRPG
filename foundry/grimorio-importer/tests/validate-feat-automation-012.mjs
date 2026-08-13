import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateFeatBundle, validateFeatPackage, featSupport } from "../scripts/feat-validator.js";
import { featAutomationSupport, compileFeatAutomation } from "../scripts/feat-automation.js";
import { materializeFeatBundle, buildFeatSource } from "../scripts/feat-materializer.js";
import { IMPORTER_VERSION } from "../scripts/materializer.js";
import { PACKS } from "../scripts/pack-storage.js";
import { previewPayload } from "../scripts/ui/payload-preflight.js";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const clone=value=>JSON.parse(JSON.stringify(value));
const assert=(value,message)=>{if(!value)throw new Error(message);};
const runtimeInfo={foundryVersion:"13.351",systemId:"dnd5e",systemVersion:"5.3.3"};
const pkg=JSON.parse(fs.readFileSync(path.join(root,"examples","feats","phb-2014-feats-package-v2.json"),"utf8"));
const legacy=JSON.parse(fs.readFileSync(path.join(root,"examples","feats","phb-2014-feats-package.json"),"utf8"));

assert(IMPORTER_VERSION==="0.12.0",`IMPORTER_VERSION inesperado: ${IMPORTER_VERSION}`);
assert(PACKS.feats?.collection==="grimorio-importer.grimorio-feats","Compêndio de Talentos não registrado");
const support=featSupport();
const automationSupport=featAutomationSupport();
assert(support.bundleSchemaVersion===2 && support.packageSchemaVersion===2,"Feat transport atual deveria ser v2");
assert(support.supportedBundleSchemaVersions.includes(1) && support.supportedBundleSchemaVersions.includes(2),"Suporte simultâneo v1/v2 ausente");
assert(support.automationPolicy==="native-safe-first+assisted-choices+runtime-safe-hooks","Política FA-4 incorreta");
assert(automationSupport.phase==="FA-4" && automationSupport.compilerVersion===3 && automationSupport.supports.activeEffects && automationSupport.supports.activities,"Contrato do compilador FA-4 incompleto");

const validation=validateFeatPackage(pkg,runtimeInfo);
assert(validation.ok,`Pacote v2 rejeitado: ${validation.errors.join("; ")}`);
assert(validateFeatPackage(legacy,runtimeInfo).ok,"Compatibilidade com pacote v1 foi quebrada");
assert(pkg.bundles.length===42,"Pacote v2 deveria conter 42 Talentos");
for(const bundle of pkg.bundles) assert(validateFeatBundle(bundle,runtimeInfo).ok,`${bundle.identity?.name}: bundle v2 inválido`);
assert(pkg.summary.automation.advancements===28 && pkg.summary.automation.effects===10 && pkg.summary.automation.activities===22 && pkg.summary.automation.uses===2 && pkg.summary.automation.runtime===56,"Resumo declarativo FA-1 inesperado");

const alertaPreview=previewPayload(pkg.bundles.find(bundle=>bundle.identity.grimorioId==="phb-2014-alerta"),runtimeInfo);
assert(alertaPreview.valid && alertaPreview.typeLabel.includes("Bundle v2"),"Preview não identifica Feat Bundle v2");
assert(alertaPreview.counts.some(row=>row.label==="Effects" && row.value===1) && alertaPreview.counts.some(row=>row.label==="Runtime" && row.value===2),"Preview do Alerta não mostra automação v2");
const packagePreview=previewPayload(pkg,runtimeInfo);
assert(packagePreview.valid && packagePreview.counts.some(row=>row.label==="Advancements" && row.value===28) && packagePreview.counts.some(row=>row.label==="Runtime" && row.value===56),"Preview do pacote v2 não mostra resumo de automação");

const aggregate={advancements:0,advancementDocuments:0,assistedChoices:0,effects:0,activities:0,uses:0,deferredAdvancements:0,deferredEffects:0,runtime:0};
for(const bundle of pkg.bundles){
  const compiled=compileFeatAutomation(bundle);
  aggregate.advancements+=compiled.metadata.materialized.advancements;
  aggregate.advancementDocuments+=compiled.metadata.materialized.advancementDocuments;
  aggregate.assistedChoices+=compiled.metadata.materialized.assistedChoices;
  aggregate.effects+=compiled.metadata.materialized.effects;
  aggregate.activities+=compiled.metadata.materialized.activities;
  aggregate.uses+=compiled.metadata.materialized.uses;
  aggregate.deferredAdvancements+=compiled.metadata.deferred.advancements;
  aggregate.deferredEffects+=compiled.metadata.deferred.effects;
  aggregate.runtime+=compiled.metadata.materialized.runtime;
}
assert(aggregate.advancements===28,`Esperados 28 planos de Advancement resolvidos; encontrados ${aggregate.advancements}`);
assert(aggregate.advancementDocuments===26,`Esperados 26 documentos nativos de Advancement; encontrados ${aggregate.advancementDocuments}`);
assert(aggregate.assistedChoices===3,`Esperadas 3 escolhas vinculadas assistidas; encontradas ${aggregate.assistedChoices}`);
assert(aggregate.effects===10,`Esperados 10 Effects materializados; encontrados ${aggregate.effects}`);
assert(aggregate.activities===22,`Esperadas 22 Activities; encontradas ${aggregate.activities}`);
assert(aggregate.uses===2,`Esperados 2 perfis com Uses; encontrados ${aggregate.uses}`);
assert(aggregate.deferredAdvancements===0,`Nenhum Advancement deveria permanecer diferido após FA-3; encontrados ${aggregate.deferredAdvancements}`);
assert(aggregate.deferredEffects===0,`Nenhum Effect deveria permanecer diferido na FA-4; encontrados ${aggregate.deferredEffects}`);
assert(aggregate.runtime===56,`Esperados 56 descriptors runtime materializados na FA-4; encontrados ${aggregate.runtime}`);

const bundleById=id=>pkg.bundles.find(bundle=>bundle.identity.grimorioId===id);
const source=id=>buildFeatSource(bundleById(id));
const changes=src=>src.effects.flatMap(effect=>effect.changes??[]);
const advancements=src=>Object.values(src.system.advancement??{});
const activities=src=>Object.values(src.system.activities??{});

const alerta=source("phb-2014-alerta");
assert(changes(alerta).some(change=>change.key==="system.attributes.init.bonus" && change.value==="5"),"Alerta não materializou +5 de iniciativa");
assert(alerta.effects[0]?.transfer===true,"Alerta deveria ter Effect transferível");

const observador=source("phb-2014-observador");
assert(advancements(observador).some(a=>a.type==="AbilityScoreImprovement"),"Observador não materializou ASI");
assert(changes(observador).some(change=>change.key==="system.skills.prc.bonuses.passive" && change.value==="5"),"Observador não materializou Percepção passiva");
assert(changes(observador).some(change=>change.key==="system.skills.inv.bonuses.passive" && change.value==="5"),"Observador não materializou Investigação passiva");

const mobilidade=source("phb-2014-mobilidade");
assert(changes(mobilidade).some(change=>change.key==="system.attributes.movement.walk" && change.value==="10"),"Mobilidade não materializou +10 ft de caminhada");

const robusto=source("phb-2014-robusto");
assert(changes(robusto).some(change=>change.key==="system.attributes.hp.bonuses.level" && change.value==="2"),"Robusto não materializou +2 PV/nível");
assert(robusto.flags["grimorio-importer"].automation.deferred.runtime===0,"Robusto não deveria depender de runtime");

const sortudo=source("phb-2014-sortudo");
assert(sortudo.system.uses.max==="3","Sortudo não materializou 3 Pontos de Sorte");
assert(sortudo.system.uses.recovery.some(entry=>entry.period==="lr"),"Sortudo não recupera em descanso longo");
assert(activities(sortudo).length===1 && activities(sortudo)[0].consumption.targets.some(target=>target.type==="itemUses" && target.value==="1"),"Activity de Sortudo não consome 1 uso do Item");
assert(sortudo.flags["grimorio-importer"].automation.materialized.runtime===3 && sortudo.flags["grimorio-importer"].automation.deferred.runtime===0,"Sortudo deveria materializar três descriptors runtime");

const marcial=source("phb-2014-adepto-marcial");
assert(marcial.system.uses.max==="1","Adepto Marcial não materializou recurso fallback");
assert(marcial.system.uses.recovery.some(entry=>entry.period==="sr") && marcial.system.uses.recovery.some(entry=>entry.period==="lr"),"Adepto Marcial não recupera SR/LR");
assert(marcial.flags["grimorio-importer"].automation.deferred.advancements===0,"ItemChoice de Adepto Marcial deveria ser materializado na FA-3");
assert(advancements(marcial).some(a=>a.type==="ItemChoice" && a.configuration.allowDrops===true && a.configuration.type==="feat"),"Adepto Marcial não materializou ItemChoice aberto");

const warCaster=source("phb-2014-conjurador-de-guerra");
assert(warCaster.effects.length===0,"Conjurador de Guerra não deve receber vantagem global via Active Effect");
assert(activities(warCaster).length===1 && activities(warCaster)[0].type==="utility" && activities(warCaster)[0].activation.type==="reaction","Conjurador de Guerra não materializou reação assistida");
assert(warCaster.flags["grimorio-importer"].automation.runtime.some(entry=>entry.trigger==="concentration-save-after-damage"),"Runtime de concentração de Conjurador de Guerra ausente");

const heavyMaster=source("phb-2014-maestria-em-armadura-pesada");
assert(advancements(heavyMaster).some(a=>a.type==="AbilityScoreImprovement" && a.configuration.fixed.str===1),"Maestria em Armadura Pesada não materializou +1 Força");
assert(heavyMaster.effects.length===1,"Maestria em Armadura Pesada deveria possuir marker Effect runtime-managed");
assert(heavyMaster.effects[0].changes.length===0 && heavyMaster.effects[0].flags["grimorio-importer"].runtimeManaged===true,"Marker de redução não pode virar Effect global");
assert(heavyMaster.flags["grimorio-importer"].automation.deferred.effects===0,"Redução condicional não deveria permanecer diferida");

const moderate=source("phb-2014-protecao-moderada");
const traitGrants=advancements(moderate).filter(a=>a.type==="Trait").flatMap(a=>a.configuration.grants??[]);
assert(traitGrants.includes("armor:med") && traitGrants.includes("armor:shl"),"Proteção Moderada não materializou armadura média + escudo");

const masterWeapons=source("phb-2014-mestre-de-armas");
assert(masterWeapons.flags["grimorio-importer"].automation.deferred.advancements===0,"Escolha aberta de armas deveria ser resolvida na FA-3");
assert(advancements(masterWeapons).some(a=>a.type==="Trait" && a.configuration.choices?.[0]?.count===4),"Mestre de Armas não materializou Trait de quatro armas");

function setPath(obj,pathString,value){const parts=pathString.split(".");let current=obj;for(let i=0;i<parts.length-1;i+=1){if(!current[parts[i]]||typeof current[parts[i]]!=="object")current[parts[i]]={};current=current[parts[i]];}current[parts.at(-1)]=clone(value);}
function applyUpdate(obj,data){for(const [key,value] of Object.entries(data)){if(key.includes("."))setPath(obj,key,value);else obj[key]=clone(value);}}
let seq=0;
class MockItem{
  constructor(data,collection){this.id=`i${String(++seq).padStart(7,"0")}`;this.uuid=`Compendium.${collection}.Item.${this.id}`;this.pack=collection;this._source=clone(data);this.name=data.name;this.type=data.type;this.folder=data.folder??null;}
  get flags(){return this._source.flags;} get system(){return this._source.system;} get effects(){return this._source.effects;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
  async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;this.folder=this._source.folder??null;return this;}
}
class MockFolder{
  constructor(data){this.id=`f${String(++seq).padStart(7,"0")}`;this._source=clone(data);this.name=data.name;this.folder=data.folder??null;}
  get flags(){return this._source.flags;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
  async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.folder=this._source.folder??null;return this;}
}
class MockPack{
  constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];this.folders=[];}
  async configure(data){if(Object.prototype.hasOwnProperty.call(data,"locked"))this.locked=Boolean(data.locked);}
  async getDocuments(){return [...this.docs];}
}
const packs=Object.fromEntries(Object.entries(PACKS).map(([key,spec])=>[key,new MockPack(spec)]));
const runtime={
  ...runtimeInfo,isGM:true,
  getPack:key=>packs[key]??null,
  listPackItems:async key=>packs[key].getDocuments(),
  createPackItem:async(key,data)=>{assert(!packs[key].locked,`${key} bloqueado ao criar Item`);const doc=new MockItem(data,PACKS[key].collection);packs[key].docs.push(doc);return doc;},
  updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`${key} bloqueado ao atualizar Item`);return doc.update(data);},
  listPackFolders:key=>[...packs[key].folders],
  createPackFolder:async(key,data)=>{assert(!packs[key].locked,`${key} bloqueado ao criar pasta`);const folder=new MockFolder(data);packs[key].folders.push(folder);return folder;},
  updatePackFolder:async(key,folder,data)=>{assert(!packs[key].locked,`${key} bloqueado ao atualizar pasta`);return folder.update(data);},
  setPackLocked:async(key,locked)=>{packs[key].locked=Boolean(locked);},
  isPackLocked:key=>packs[key].locked,
  listWorldItems:()=>[]
};

const importStats={advancements:0,advancementDocuments:0,assistedChoices:0,effects:0,activities:0,uses:0,deferredAdvancements:0,deferredEffects:0,runtime:0};
for(const bundle of pkg.bundles){
  const result=await materializeFeatBundle(bundle,runtime);
  importStats.advancements+=result.stats.advancementsMaterialized;
  importStats.advancementDocuments+=result.stats.advancementDocumentsMaterialized;
  importStats.assistedChoices+=result.stats.assistedChoicesMaterialized;
  importStats.effects+=result.stats.effectsMaterialized;
  importStats.activities+=result.stats.activitiesMaterialized;
  importStats.uses+=result.stats.usesMaterialized;
  importStats.deferredAdvancements+=result.stats.advancementsDeferred;
  importStats.deferredEffects+=result.stats.effectsDeferred;
  importStats.runtime+=result.stats.runtimeMaterialized;
}
assert(packs.feats.docs.length===42,`Esperados 42 Talentos v2; encontrados ${packs.feats.docs.length}`);
assert(packs.feats.folders.length===1,"Esperada uma pasta gerenciada para Livro do Jogador");
assert(packs.classes.docs.length===0 && packs.subclasses.docs.length===0 && packs.features.docs.length===0,"Talentos v2 tocaram outros compêndios");
assert(Object.values(packs).every(pack=>pack.locked),"Locks dos compêndios não foram restaurados");
assert(JSON.stringify(importStats)===JSON.stringify(aggregate),`Stats materializados divergem: ${JSON.stringify(importStats)} != ${JSON.stringify(aggregate)}`);
assert(runtime.listWorldItems().length===0,"FA-4 não deve criar Items no Mundo");

const flag=doc=>doc.flags?.["grimorio-importer"]??{};
const beforeUuids=new Map(packs.feats.docs.map(doc=>[flag(doc).grimorioId,doc.uuid]));
const beforeFolderId=packs.feats.folders[0].id;
for(const bundle of pkg.bundles){
  const result=await materializeFeatBundle(bundle,runtime);
  assert(result.stats.featsCreated===0 && result.stats.featsUpdated===1,`${bundle.identity.name}: reimportação v2 deveria atualizar`);
}
assert(packs.feats.docs.length===42 && packs.feats.folders.length===1,"Reimportação v2 criou duplicações");
for(const doc of packs.feats.docs) assert(beforeUuids.get(flag(doc).grimorioId)===doc.uuid,`UUID mudou na reimportação v2: ${doc.name}`);
assert(packs.feats.folders[0].id===beforeFolderId,"Pasta da fonte foi duplicada na reimportação v2");
assert(Object.values(packs).every(pack=>pack.locked),"Locks não foram restaurados após reimportação v2");

console.log("GRIMORIO_IMPORTER_FA4_AUTOMATION_OK",JSON.stringify({
  importer:IMPORTER_VERSION,
  feats:packs.feats.docs.length,
  declared:pkg.summary.automation,
  materialized:{advancements:aggregate.advancements,effects:aggregate.effects,activities:aggregate.activities,uses:aggregate.uses,runtime:aggregate.runtime},
  deferred:{advancements:aggregate.deferredAdvancements,effects:aggregate.deferredEffects,runtime:0},
  legacyV1:true,
  reimportStable:true,
  uuidStable:true,
  worldItemsCreated:0
},null,2));
