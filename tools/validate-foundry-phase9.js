#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
const clone = x => JSON.parse(JSON.stringify(x));
function assert(value, message) { if (!value) throw new Error(message); }
function setPath(obj, pathString, value) { const parts=pathString.split('.'); let cur=obj; for(let i=0;i<parts.length-1;i++){if(!cur[parts[i]]||typeof cur[parts[i]]!=='object')cur[parts[i]]={};cur=cur[parts[i]];}cur[parts.at(-1)]=clone(value); }
function applyUpdate(source,data){for(const [key,value] of Object.entries(data)){if(key.includes('.'))setPath(source,key,value);else source[key]=clone(value);}}

(async()=>{
  const manifest = JSON.parse(fs.readFileSync(path.join(moduleRoot,'module.json'),'utf8'));
  assert(['0.5.0','0.6.0','0.7.0','0.8.0','0.9.0','0.9.1','0.9.2'].includes(manifest.version), 'module.json deve preservar compatibilidade da Fase 9 (0.5.0+)');
  const mainSource = fs.readFileSync(path.join(moduleRoot,'scripts','main.js'),'utf8');
  for (const token of ['importPackage','importPayload','importPayloads','validatePackage','phase9PackageSupport','/grimorio-import-package','notifyEach: false','notifySummary: false']) assert(mainSource.includes(token), `main.js sem ${token}`);

  const phaseRoot = path.join(root,'tests','foundry-v13','phase9');
  const catalog = JSON.parse(fs.readFileSync(path.join(phaseRoot,'catalog.json'),'utf8'));
  const full = JSON.parse(fs.readFileSync(path.join(phaseRoot,catalog.fullCatalogFile),'utf8'));
  assert(catalog.summary.bundles === 405 && catalog.summary.classes === 25 && catalog.summary.subclasses === 380, 'Pacote completo deve conter 405 bundles (25+380)');

  const validator = await import(pathToFileURL(path.join(moduleRoot,'scripts','bundle-validator.js')).href + `?v=${Date.now()}`);
  const pkgValidator = await import(pathToFileURL(path.join(moduleRoot,'scripts','package-validator.js')).href + `?v=${Date.now()}`);
  const materializer = await import(pathToFileURL(path.join(moduleRoot,'scripts','materializer.js')).href + `?v=${Date.now()}`);
  const storage = await import(pathToFileURL(path.join(moduleRoot,'scripts','pack-storage.js')).href + `?v=${Date.now()}`);
  const runtimeInfo = { foundryVersion:'13.351', systemId:'dnd5e', systemVersion:'5.3.3' };
  const validation = pkgValidator.validatePackage(full,runtimeInfo);
  assert(validation.ok, `Pacote completo inválido: ${validation.errors.join('; ')}`);
  assert(pkgValidator.isPackage(full) && !pkgValidator.isBundle(full), 'Detecção do pacote falhou');
  assert(pkgValidator.phase9PackageSupport().singleFilePackages, 'Suporte a pacote único ausente');
  for (const bundle of full.bundles) assert(validator.validateBundle(bundle,runtimeInfo).ok, `Bundle interno inválido: ${bundle.identity?.name}`);

  let sequence=0;
  class MockItem {
    constructor(data,collection){this.id=`p${String(++sequence).padStart(7,'0')}`;this.uuid=`Compendium.${collection}.Item.${this.id}`;this.pack=collection;this._source=clone(data);this.name=data.name;this.type=data.type;this.parent=null;this.documentName='Item';}
    get flags(){return this._source.flags;} get system(){return this._source.system;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;return this;}
  }
  class MockPack { constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];} async configure(data){if(Object.prototype.hasOwnProperty.call(data,'locked'))this.locked=Boolean(data.locked);} async getDocuments(){return [...this.docs];} }
  const { PACKS }=storage;
  const packs=Object.fromEntries(Object.entries(PACKS).map(([k,s])=>[k,new MockPack(s)]));
  const runtime={...runtimeInfo,isGM:true,getPack:k=>packs[k]??null,listPackItems:async k=>packs[k].getDocuments(),createPackItem:async(k,data)=>{assert(!packs[k].locked,`Pack ${k} bloqueado durante escrita`);const d=new MockItem(data,PACKS[k].collection);packs[k].docs.push(d);return d;},updatePackItem:async(k,doc,data)=>{assert(!packs[k].locked,`Pack ${k} bloqueado durante update`);return doc.update(data);},setPackLocked:async(k,l)=>packs[k].configure({locked:l}),isPackLocked:k=>packs[k].locked,listWorldItems:()=>[]};

  const ordered=[...full.bundles].sort((a,b)=>(a.kind===b.kind?0:a.kind==='class'?-1:1));
  for(const bundle of ordered) await materializer.materializeBundle(bundle,runtime);
  assert(packs.classes.docs.length===25,`Pacote materializou ${packs.classes.docs.length}/25 classes`);
  assert(packs.subclasses.docs.length===380,`Pacote materializou ${packs.subclasses.docs.length}/380 subclasses`);
  assert(packs.features.docs.length===2329,`Pacote materializou ${packs.features.docs.length}/2329 características`);
  assert(Object.values(packs).every(p=>p.locked),'Packs devem terminar bloqueados');
  assert(runtime.listWorldItems().length===0,'Pacote não deve criar Items de Mundo');

  const before={classes:packs.classes.docs.length,subclasses:packs.subclasses.docs.length,features:packs.features.docs.length,firstClass:packs.classes.docs[0].uuid};
  for(const bundle of ordered) await materializer.materializeBundle(bundle,runtime);
  assert(packs.classes.docs.length===before.classes && packs.subclasses.docs.length===before.subclasses && packs.features.docs.length===before.features,'Reimportação do pacote criou duplicações');
  assert(packs.classes.docs[0].uuid===before.firstClass,'Reimportação do pacote alterou UUID');

  // Smoke test do exportador/UI do site.
  global.window=global;
  function load(file){vm.runInThisContext(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});}
  [
    'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/homebrew-spellblade-class.js','data/cultivator-class.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','js/exporters/foundry-class-bundle.js','js/exporters/foundry-class-package.js'
  ].forEach(load);
  const sitePkg=global.GRIMORIO_FOUNDRY_CLASS_PACKAGE.buildCatalogPackage();
  assert(sitePkg.summary.bundles===405 && global.GRIMORIO_FOUNDRY_CLASS_PACKAGE.validatePackage(sitePkg).ok,'Exportador do site não gera pacote completo válido');
  const barbarianPkg=global.GRIMORIO_FOUNDRY_CLASS_PACKAGE.buildClassPackage('barbarian');
  assert(barbarianPkg.summary.classes===1 && barbarianPkg.summary.subclasses===17,'Pacote completo do Bárbaro deve ter 1 classe + 17 subclasses');

  const uiSource=fs.readFileSync(path.join(root,'js/exporters/foundry-class-export-ui.js'),'utf8');
  const ctx={console,window:null,document:{addEventListener(){}},navigator:{},setTimeout,Blob:class Blob{},URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},GRIMORIO_FOUNDRY_CLASS_PACKAGE:global.GRIMORIO_FOUNDRY_CLASS_PACKAGE,GRIMORIO_FOUNDRY_CLASS_BUNDLE:global.GRIMORIO_FOUNDRY_CLASS_BUNDLE,GRIMORIO_CLASSES:global.GRIMORIO_CLASSES,GRIMORIO_SUBCLASSES:global.GRIMORIO_SUBCLASSES,getClass:id=>global.GRIMORIO_CLASSES.find(x=>x.id===id),getSubclass:id=>global.GRIMORIO_SUBCLASSES.find(x=>x.id===id),subclassesOf:id=>global.GRIMORIO_SUBCLASSES.filter(x=>x.classId===id),allClasses:()=>global.GRIMORIO_CLASSES,allSubclasses:()=>global.GRIMORIO_SUBCLASSES,viewClass:id=>'<div class="detail-header"></div><div class="source-line"></div>',viewSubclass:id=>'<div class="detail-header"></div><div class="source-line"></div>',viewClassList:()=>'<div class="grid"></div>',showToast(){}};ctx.window=ctx;vm.createContext(ctx);vm.runInContext(uiSource,ctx,{filename:'foundry-class-export-ui.js'});
  assert(ctx.viewClass('barbarian').includes('Exportar Foundry') && ctx.viewClass('barbarian').includes('Classe + subclasses'),'Ficha de classe sem botões Foundry');
  assert(ctx.viewSubclass('ryoko-barbarian-path-kaiju').includes('Exportar Foundry'),'Ficha de subclasse sem botão Foundry');
  assert(ctx.viewClassList().includes('Exportar catálogo'),'Lista de classes sem exportação do catálogo');
  const uiCatalog=ctx.GRIMORIO_FOUNDRY_CLASS_EXPORT_UI.buildCatalogState();
  assert(uiCatalog.ok && uiCatalog.summary.bundles===405,'Estado UI do catálogo inválido');

  console.log('PHASE9_OK',JSON.stringify({module:manifest.version,packageBundles:405,classes:25,subclasses:380,features:packs.features.docs.length,classPackageBarbarian:barbarianPkg.summary.bundles,siteUi:true,reimportStable:true,worldItemsCreated:0},null,2));
})().catch(e=>{console.error(e.stack||e);process.exit(1);});
