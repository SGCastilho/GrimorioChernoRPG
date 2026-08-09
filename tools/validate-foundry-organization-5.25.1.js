#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
const catalogFile = path.join(root, 'tests', 'foundry-v13', 'phase9', 'packages', 'catalogo-completo.json');
const clone = value => JSON.parse(JSON.stringify(value));
function assert(value, message) { if (!value) throw new Error(message); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function setPath(obj, pathString, value) { const parts=pathString.split('.'); let cur=obj; for(let i=0;i<parts.length-1;i++){if(!cur[parts[i]]||typeof cur[parts[i]]!=='object')cur[parts[i]]={};cur=cur[parts[i]];}cur[parts.at(-1)]=clone(value); }
function applyUpdate(source,data){for(const [key,value] of Object.entries(data)){if(key.includes('.'))setPath(source,key,value);else source[key]=clone(value);}}
function flagsOf(doc){return doc.flags?.['grimorio-importer'] ?? doc._source?.flags?.['grimorio-importer'] ?? {};}

(async () => {
  const siteManifest = readJson(path.join(root, 'manifest.json'));
  const moduleManifest = readJson(path.join(moduleRoot, 'module.json'));
  assert(siteManifest.version === '5.25.1', 'Grimório deve estar em 5.25.1');
  assert(moduleManifest.version === '0.9.1', 'Grimório Importer deve estar em 0.9.1');
  assert(siteManifest.foundryClassImporter?.featureCompendiumFolders === true, 'Manifest deve registrar pastas de características');
  assert(siteManifest.foundryClassImporter?.featureFolderHierarchy === 'class/subclass', 'Hierarquia declarada deve ser class/subclass');
  assert(siteManifest.foundryClassImporter?.featureDisplayNameNormalization === true, 'Normalização de títulos deve estar registrada');

  const materializer = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'materializer.js')).href + `?v=${Date.now()}`);
  const storage = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'pack-storage.js')).href + `?v=${Date.now()}`);
  const full = readJson(catalogFile);
  assert(full.bundles.length === 401, 'Catálogo completo deve possuir 401 bundles');

  // Validação unitária da capitalização sem alterar nomes já editoriais.
  const displayCases = new Map([
    ['FÚRIA', 'Fúria'],
    ['ATAQUE DESCUIDADO', 'Ataque Descuidado'],
    ['CANALIZAR DIVINDADE: EXPULSAR MORTOS-VIVOS', 'Canalizar Divindade: Expulsar Mortos-Vivos'],
    ['INCREMENTO NO VALOR DE HABILIDADE', 'Incremento no Valor de Habilidade'],
    ['CA APRIMORADA', 'CA Aprimorada'],
    ['PONTOS DE FEITIÇARIA', 'Pontos de Feitiçaria'],
    ['Forma Selvagem', 'Forma Selvagem']
  ]);
  for (const [input, expected] of displayCases) assert(materializer.featureDisplayName(input) === expected, `${input} deveria virar ${expected}`);

  let itemSeq = 0, folderSeq = 0;
  class MockItem {
    constructor(data, collection) { this.id=`i${String(++itemSeq).padStart(7,'0')}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; this.folder=data.folder ?? null; }
    get flags(){return this._source.flags;} get system(){return this._source.system;} get effects(){return this._source.effects ?? [];} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;this.folder=this._source.folder ?? null;return this;}
  }
  class MockFolder {
    constructor(data, collection) { this.id=`f${String(++folderSeq).padStart(7,'0')}`; this.uuid=`Compendium.${collection}.Folder.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; this.folder=data.folder ?? null; }
    get flags(){return this._source.flags;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;this.folder=this._source.folder ?? null;return this;}
  }
  class MockPack {
    constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];this.folders=[];}
    async configure(data){if(Object.prototype.hasOwnProperty.call(data,'locked'))this.locked=Boolean(data.locked);}
    async getDocuments(){return [...this.docs];}
  }
  const { PACKS } = storage;
  const packs = Object.fromEntries(Object.entries(PACKS).map(([key,spec]) => [key,new MockPack(spec)]));
  const runtime = {
    foundryVersion:'13.351', systemId:'dnd5e', systemVersion:'5.3.3', isGM:true,
    getPack:key=>packs[key]??null,
    listPackItems:async key=>packs[key].getDocuments(),
    createPackItem:async(key,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante criação de Item`);const doc=new MockItem(data,PACKS[key].collection);packs[key].docs.push(doc);return doc;},
    updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante update de Item`);return doc.update(data);},
    listPackFolders:key=>[...packs[key].folders],
    createPackFolder:async(key,data)=>{assert(key==='features','Somente o compêndio de características deve receber pastas');assert(!packs[key].locked,'Pack features bloqueado durante criação de pasta');const doc=new MockFolder(data,PACKS[key].collection);packs[key].folders.push(doc);return doc;},
    updatePackFolder:async(key,doc,data)=>{assert(key==='features','Somente features deve atualizar pasta');assert(!packs[key].locked,'Pack features bloqueado durante update de pasta');return doc.update(data);},
    setPackLocked:async(key,locked)=>packs[key].configure({locked}), isPackLocked:key=>packs[key].locked,
    listWorldItems:()=>[]
  };

  const ordered=[...full.bundles].sort((a,b)=>(a.kind===b.kind?0:a.kind==='class'?-1:1));
  for (const bundle of ordered) await materializer.materializeBundle(bundle,runtime);

  assert(packs.classes.docs.length===24,'Devem existir 24 classes');
  assert(packs.subclasses.docs.length===377,'Devem existir 377 subclasses');
  assert(packs.features.docs.length===2293,'Devem existir 2293 características materializadas');
  assert(packs.features.folders.length===401,`Esperadas 401 pastas; encontradas ${packs.features.folders.length}`);
  assert(packs.classes.folders.length===0 && packs.subclasses.folders.length===0,'Pastas novas devem existir somente em Grimório — Características');

  const managedFolders=packs.features.folders.filter(f=>flagsOf(f).managedFolder===true);
  const classFolders=managedFolders.filter(f=>flagsOf(f).folderRole==='class');
  const subclassFolders=managedFolders.filter(f=>flagsOf(f).folderRole==='subclass');
  assert(classFolders.length===24,`Esperadas 24 pastas de classe; encontradas ${classFolders.length}`);
  assert(subclassFolders.length===377,`Esperadas 377 subpastas de subclasse; encontradas ${subclassFolders.length}`);
  assert(classFolders.every(f=>!f.folder),'Pastas de classe devem ficar na raiz do compêndio');
  assert(subclassFolders.every(f=>classFolders.some(parent=>parent.id===f.folder)),'Toda pasta de subclasse deve estar dentro de uma pasta de classe gerenciada');

  const bardFolder=classFolders.find(f=>flagsOf(f).classIdentifier==='bard');
  assert(bardFolder?.name==='Bardo','Pasta Bardo ausente');
  const bardClassFeatures=packs.features.docs.filter(d=>flagsOf(d).grimorioId==='bard' && flagsOf(d).documentRole==='feature');
  assert(bardClassFeatures.length>0,'Bardo deve possuir características materializadas');
  assert(bardClassFeatures.every(d=>d.folder===bardFolder.id), 'Características do Bardo devem ficar diretamente na pasta Bardo');

  const bardSubclass=full.bundles.find(b=>b.kind==='subclass' && b.parentClass?.identifier==='bard');
  assert(bardSubclass,'Subclasse de Bardo de teste não encontrada');
  const bardSubFolder=subclassFolders.find(f=>flagsOf(f).subclassGrimorioId===bardSubclass.identity.grimorioId);
  assert(bardSubFolder?.folder===bardFolder.id, `${bardSubclass.identity.name} deve ficar dentro de Bardo`);
  assert(bardSubFolder?.name===bardSubclass.identity.name,'Nome da subpasta deve ser o nome da subclasse');
  const bardSubFeatures=packs.features.docs.filter(d=>flagsOf(d).grimorioId===bardSubclass.identity.grimorioId && flagsOf(d).documentRole==='feature');
  assert(bardSubFeatures.length>0,'Subclasse de Bardo deve possuir características');
  assert(bardSubFeatures.every(d=>d.folder===bardSubFolder.id),'Características da subclasse devem ficar em sua subpasta');

  const fury=packs.features.docs.find(d=>flagsOf(d).grimorioId==='barbarian' && flagsOf(d).featureKey && d.name==='Fúria');
  assert(fury,'FÚRIA deve ser exibida como Fúria');
  const furyUuid=fury.uuid, furyId=fury.id;
  const furyIdentifier=fury.system.identifier;
  assert(furyIdentifier.includes('furia'),'Identificador interno de Fúria deve continuar estável/normalizado');
  const oldFeatureKey=flagsOf(fury).featureKey;

  // Simula Item existente antigo em CAPS, sem perder identidade. Reimportação deve renomear e manter UUID.
  await fury.update({name:'FÚRIA',folder:null});
  const barbarianBundle=full.bundles.find(b=>b.kind==='class' && b.identity.identifier==='barbarian');
  const barbarianFolderBefore=classFolders.find(f=>flagsOf(f).classIdentifier==='barbarian');
  const barbarianFolderId=barbarianFolderBefore.id;
  await materializer.materializeBundle(barbarianBundle,runtime);
  const furyAfter=packs.features.docs.find(d=>d.id===furyId);
  assert(furyAfter.uuid===furyUuid,'Reimportação não deve alterar UUID de Fúria');
  assert(furyAfter.name==='Fúria','Reimportação deve corrigir FÚRIA para Fúria');
  assert(furyAfter.folder===barbarianFolderId,'Reimportação deve mover Fúria para pasta Bárbaro');
  assert(flagsOf(furyAfter).featureKey===oldFeatureKey,'featureKey não deve mudar por causa da capitalização');
  assert(furyAfter.system.identifier===furyIdentifier,'system.identifier não deve mudar por causa do título exibido');

  const before={
    classCount:packs.classes.docs.length, subclassCount:packs.subclasses.docs.length, featureCount:packs.features.docs.length, folderCount:packs.features.folders.length,
    featureUuids:new Map(packs.features.docs.map(d=>[`${flagsOf(d).grimorioId}:${flagsOf(d).featureKey}`,d.uuid])),
    folderIds:new Map(managedFolders.map(f=>[`${flagsOf(f).folderRole}:${flagsOf(f).classIdentifier}:${flagsOf(f).subclassGrimorioId||''}`,f.id]))
  };
  for (const bundle of ordered) await materializer.materializeBundle(bundle,runtime);
  assert(packs.classes.docs.length===before.classCount && packs.subclasses.docs.length===before.subclassCount && packs.features.docs.length===before.featureCount,'Reimportação completa não deve duplicar Items');
  assert(packs.features.folders.length===before.folderCount,'Reimportação completa não deve duplicar pastas');
  for(const d of packs.features.docs){const key=`${flagsOf(d).grimorioId}:${flagsOf(d).featureKey}`;if(before.featureUuids.has(key))assert(before.featureUuids.get(key)===d.uuid,`UUID mudou em ${d.name}`);}
  for(const f of managedFolders){const key=`${flagsOf(f).folderRole}:${flagsOf(f).classIdentifier}:${flagsOf(f).subclassGrimorioId||''}`;assert(before.folderIds.get(key)===f.id,`ID da pasta mudou em ${f.name}`);}
  assert(Object.values(packs).every(p=>p.locked),'Todos os packs devem terminar bloqueados');
  assert(runtime.listWorldItems().length===0,'A organização não deve criar Items no Mundo');

  console.log('FOUNDRY_ORGANIZATION_5_25_1_OK',JSON.stringify({
    app:siteManifest.version,module:moduleManifest.version,classes:24,subclasses:377,features:2293,
    folders:{total:packs.features.folders.length,classes:classFolders.length,subclasses:subclassFolders.length},
    examples:{bardFolder:bardFolder.name,bardSubclassFolder:bardSubFolder.name,fury:furyAfter.name},
    stableReimport:true,stableFeatureUuid:true,stableFolderIds:true,worldItemsCreated:0
  },null,2));
})().catch(error=>{console.error(error.stack||error);process.exit(1);});
