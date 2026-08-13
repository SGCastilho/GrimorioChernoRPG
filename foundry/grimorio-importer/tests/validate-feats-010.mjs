import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateFeatBundle, validateFeatPackage, featSupport } from "../scripts/feat-validator.js";
import { materializeFeatBundle, buildFeatSource } from "../scripts/feat-materializer.js";
import { IMPORTER_VERSION } from "../scripts/materializer.js";
import { PACKS } from "../scripts/pack-storage.js";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const clone=value=>JSON.parse(JSON.stringify(value));
const assert=(value,message)=>{if(!value)throw new Error(message);};
const pkg=JSON.parse(fs.readFileSync(path.join(root,"examples","feats","phb-2014-feats-package.json"),"utf8"));
const runtimeInfo={foundryVersion:"13.351",systemId:"dnd5e",systemVersion:"5.3.3"};

assert(IMPORTER_VERSION==="0.10.0",`IMPORTER_VERSION inesperado: ${IMPORTER_VERSION}`);
assert(PACKS.feats?.collection==="grimorio-importer.grimorio-feats","Compêndio de Talentos não registrado");
const support=featSupport();
assert(support.itemType==="feat" && support.compendiumOnly===true && support.reimportByFlags===true,"Contrato de Talentos incompleto");
const validation=validateFeatPackage(pkg,runtimeInfo);
assert(validation.ok,`Pacote de Talentos rejeitado: ${validation.errors.join("; ")}`);
assert(pkg.summary.bundles===42 && pkg.summary.feats===42,"Pacote deveria conter 42 Talentos");
assert(pkg.summary.prerequisites===12,"Pacote deveria conter 12 Talentos com pré-requisito");
assert(pkg.summary.repeatable===1,"Pacote deveria conter exatamente 1 Talento repetível");
assert(pkg.summary.sources===1,"Pacote PHB deveria conter uma fonte");
for(const bundle of pkg.bundles) assert(validateFeatBundle(bundle,runtimeInfo).ok,`${bundle.identity?.name}: bundle inválido`);

function setPath(obj,pathString,value){const parts=pathString.split(".");let current=obj;for(let i=0;i<parts.length-1;i+=1){if(!current[parts[i]]||typeof current[parts[i]]!=="object")current[parts[i]]={};current=current[parts[i]];}current[parts.at(-1)]=clone(value);}
function applyUpdate(source,data){for(const [key,value] of Object.entries(data)){if(key.includes("."))setPath(source,key,value);else source[key]=clone(value);}}
let seq=0;
class MockItem{
  constructor(data,collection){this.id=`i${String(++seq).padStart(7,"0")}`;this.uuid=`Compendium.${collection}.Item.${this.id}`;this.pack=collection;this._source=clone(data);this.name=data.name;this.type=data.type;this.folder=data.folder??null;}
  get flags(){return this._source.flags;} get system(){return this._source.system;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
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

for(const bundle of pkg.bundles) await materializeFeatBundle(bundle,runtime);
assert(packs.feats.docs.length===42,`Esperados 42 Talentos no compêndio; encontrados ${packs.feats.docs.length}`);
assert(packs.feats.folders.length===1,"Esperada uma pasta gerenciada para Livro do Jogador");
assert(packs.classes.docs.length===0 && packs.subclasses.docs.length===0 && packs.features.docs.length===0,"Importação de Talentos não deve tocar outros compêndios");
assert(Object.values(packs).every(pack=>pack.locked),"Todos os compêndios devem permanecer bloqueados após importação");

const flag=doc=>doc.flags?.["grimorio-importer"]??{};
const byId=id=>packs.feats.docs.find(doc=>flag(doc).grimorioId===id);
const alerta=byId("phb-2014-alerta");
assert(alerta?.type==="feat","Alerta deveria ser Item feat");
assert(alerta.system?.type?.value==="feat","Alerta deveria usar system.type.value feat");
assert(alerta.system?.identifier==="phb-2014-alerta","Identifier estável de Alerta ausente");
assert(alerta.system?.source?.page==="167","Página impressa de Alerta deveria ser 167");
assert(flag(alerta).documentRole==="feat" && flag(alerta).packKey==="feats","Flags de armazenamento de Alerta incorretas");
assert(flag(alerta).automation?.applied===false && flag(alerta).automation?.tier==="description","Automação conservadora não registrada");

const warCaster=byId("phb-2014-conjurador-de-guerra");
assert(warCaster.system.requirements==="Capacidade de conjurar pelo menos uma magia","Pré-requisito de Conjurador de Guerra não preservado");
assert(flag(warCaster).prerequisites?.[0]?.type==="spellcasting","Pré-requisito estruturado de Conjurador de Guerra ausente");
const elemental=byId("phb-2014-adepto-elemental");
assert(flag(elemental).repeatable===true,"Adepto Elemental deveria ser repetível");
assert(flag(elemental).choices?.[0]?.id==="damage-type" && flag(elemental).choices[0].options.length===5,"Escolhas de Adepto Elemental não preservadas");
assert(elemental.system.description.value.includes("<p>") && elemental.system.description.value.includes("resistência"),"Descrição HTML de Adepto Elemental inválida");

const sourcePreview=buildFeatSource(pkg.bundles.find(b=>b.identity.grimorioId==="phb-2014-resiliente"));
assert(sourcePreview.system.identifier==="phb-2014-resiliente" && sourcePreview.flags["grimorio-importer"].choices.length===1,"Preview nativo de Resiliente incompleto");

const beforeUuids=new Map(packs.feats.docs.map(doc=>[flag(doc).grimorioId,doc.uuid]));
const beforeFolderId=packs.feats.folders[0].id;
for(const bundle of pkg.bundles) {
  const result=await materializeFeatBundle(bundle,runtime);
  assert(result.stats.featsCreated===0 && result.stats.featsUpdated===1,`${bundle.identity.name}: reimportação deveria atualizar o Item`);
}
assert(packs.feats.docs.length===42 && packs.feats.folders.length===1,"Reimportação criou duplicações de Item/pasta");
for(const doc of packs.feats.docs) assert(beforeUuids.get(flag(doc).grimorioId)===doc.uuid,`UUID mudou na reimportação: ${doc.name}`);
assert(packs.feats.folders[0].id===beforeFolderId,"Pasta de fonte foi duplicada na reimportação");
assert(Object.values(packs).every(pack=>pack.locked),"Compêndios devem voltar ao estado bloqueado após reimportação");

console.log("GRIMORIO_IMPORTER_010_FEATS_OK",JSON.stringify({
  importer:IMPORTER_VERSION,
  feats:packs.feats.docs.length,
  prerequisites:pkg.summary.prerequisites,
  repeatable:pkg.summary.repeatable,
  sourceFolders:packs.feats.folders.length,
  otherPacksUntouched:true,
  reimportStable:true,
  automationPolicy:support.automationPolicy
},null,2));
