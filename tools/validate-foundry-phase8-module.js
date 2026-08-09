#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
const clone = x => JSON.parse(JSON.stringify(x));
const norm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z0-9]+/g,' ').trim();
function assert(value, message) { if (!value) throw new Error(message); }
function adv(doc) { return Object.values(doc._source?.system?.advancement ?? doc.system?.advancement ?? {}); }
function setPath(obj, pathString, value) {
  const parts = pathString.split('.'); let cur = obj;
  for (let i=0;i<parts.length-1;i+=1) { if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]]={}; cur=cur[parts[i]]; }
  cur[parts.at(-1)] = clone(value);
}
function applyUpdate(source, data) {
  for (const [key,value] of Object.entries(data)) {
    if (key.includes('.')) setPath(source,key,value);
    else source[key]=clone(value);
  }
}

(async()=>{
  const manifest = JSON.parse(fs.readFileSync(path.join(moduleRoot,'module.json'),'utf8'));
  assert(['0.4.0','0.5.0','0.6.0','0.7.0','0.8.0','0.9.0','0.9.1','0.9.2'].includes(manifest.version), 'module.json deve preservar o suporte da Fase 8');
  const mainSource = fs.readFileSync(path.join(moduleRoot,'scripts','main.js'),'utf8');
  assert(mainSource.includes('registerSpecialRuntimeHooks();'), 'main.js deve registrar o runtime especial');
  assert(mainSource.includes('/grimorio-special') && mainSource.includes('/grimorio-configurar'), 'Comandos de configuração especial ausentes');
  assert(mainSource.includes('phase8Support'), 'API/status da Fase 8 ausente em main.js');
  const validator = await import(pathToFileURL(path.join(moduleRoot,'scripts','bundle-validator.js')).href + `?v=${Date.now()}`);
  const materializer = await import(pathToFileURL(path.join(moduleRoot,'scripts','materializer.js')).href + `?v=${Date.now()}`);
  const storage = await import(pathToFileURL(path.join(moduleRoot,'scripts','pack-storage.js')).href + `?v=${Date.now()}`);
  const profiles = await import(pathToFileURL(path.join(moduleRoot,'scripts','class-profiles.js')).href + `?v=${Date.now()}`);
  const specialProfiles = await import(pathToFileURL(path.join(moduleRoot,'scripts','special-class-profiles.js')).href + `?v=${Date.now()}`);
  const specialRuntime = await import(pathToFileURL(path.join(moduleRoot,'scripts','special-runtime.js')).href + `?v=${Date.now()}`);
  const { validateBundle, phase8Support } = validator;
  const { materializeBundle } = materializer;
  const { PACKS } = storage;
  const support = phase8Support();

  assert(support.counts.classes === 25 && support.classes.length === 25, 'Suporte atual deve habilitar 25 classes');
  assert(support.counts.subclasses === 380, 'Suporte atual deve habilitar 380 subclasses');
  assert(support.counts.specialClasses === 5 && support.specialClasses.length === 5, 'Fase 8 deve ter 5 classes especiais');
  assert(support.counts.specialSubclasses === 30, 'Fase 8 deve ter 30 subclasses especiais');
  assert(support.reviewClasses.length === 0, 'Fase 8 não deve manter classes bloqueadas');
  assert(support.specialRuntimeConfiguration && support.dragoneerConceptProfiles === 12, 'Suporte especial incompleto');
  assert(profiles.READY_CLASS_IDENTIFIERS.length === 25 && profiles.REVIEW_CLASS_IDENTIFIERS.length === 0, 'Perfis de classe inconsistentes');
  assert(specialProfiles.SPECIAL_CLASS_IDENTIFIERS.length === 5, 'Lista de classes especiais inconsistente');
  assert(Object.keys(specialProfiles.DRAGONEER_CONCEPT_PROFILES).length === 12, 'Devem existir 12 perfis de Conceito Central');

  const phaseRoot = path.join(root,'tests','foundry-v13','phase8');
  const catalog = JSON.parse(fs.readFileSync(path.join(phaseRoot,'catalog.json'),'utf8'));
  assert(catalog.summary.classes === 25 && catalog.summary.subclasses === 380, 'Catálogo Fase 8 inconsistente');
  assert(catalog.summary.specialClasses === 5 && catalog.summary.specialSubclasses === 30, 'Contagem especial do catálogo inconsistente');
  const classBundles = catalog.classes.map(x => JSON.parse(fs.readFileSync(path.join(phaseRoot,x.file),'utf8')));
  const subclassBundles = catalog.subclasses.map(x => JSON.parse(fs.readFileSync(path.join(phaseRoot,x.file),'utf8')));
  const runtimeInfo = { foundryVersion:'13.351', systemId:'dnd5e', systemVersion:'5.3.3' };
  for (const b of classBundles) assert(validateBundle(b,runtimeInfo).ok, `Classe inválida: ${b.identity.name}`);
  for (const b of subclassBundles) assert(validateBundle(b,runtimeInfo).ok, `Subclasse inválida: ${b.identity.name}`);

  let sequence=0;
  class MockItem {
    constructor(data, collection) { this.id=`m${String(++sequence).padStart(6,'0')}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; this.parent=null; this.documentName='Item'; }
    get flags(){return this._source.flags;} get system(){return this._source.system;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;return this;}
  }
  class MockPack {
    constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];}
    async configure(data){if(Object.prototype.hasOwnProperty.call(data,'locked')) this.locked=Boolean(data.locked);}
    async getDocuments(){return [...this.docs];}
  }
  const packs=Object.fromEntries(Object.entries(PACKS).map(([k,s])=>[k,new MockPack(s)]));
  const runtime={
    ...runtimeInfo,isGM:true,
    getPack:key=>packs[key]??null,
    listPackItems:async key=>packs[key].getDocuments(),
    createPackItem:async(key,data)=>{assert(!packs[key].locked,`Pack ${key} deveria estar desbloqueado`);const d=new MockItem(data,PACKS[key].collection);packs[key].docs.push(d);return d;},
    updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`Pack ${key} deveria estar desbloqueado`);return doc.update(data);},
    setPackLocked:async(key,locked)=>packs[key].configure({locked}),isPackLocked:key=>packs[key].locked,listWorldItems:()=>[]
  };

  const results=new Map();
  for(const b of classBundles) results.set(`class:${b.identity.identifier}`,await materializeBundle(b,runtime));
  for(const b of subclassBundles) results.set(`subclass:${b.identity.identifier}`,await materializeBundle(b,runtime));
  assert(packs.classes.docs.length===25,`Esperado 25 classes, obtido ${packs.classes.docs.length}`);
  assert(packs.subclasses.docs.length===380,`Esperado 380 subclasses, obtido ${packs.subclasses.docs.length}`);
  assert(Object.values(packs).every(p=>p.locked),'Packs devem estar bloqueados ao final');
  assert(runtime.listWorldItems().length===0,'Fase 8 não deve criar Items de Mundo');

  for(const doc of [...packs.classes.docs,...packs.subclasses.docs]) {
    assert(doc._source.system.advancement && !Array.isArray(doc._source.system.advancement),`${doc.name}: advancement deve ser objeto`);
    for(const a of adv(doc).filter(a=>a.type==='ItemGrant')) for(const item of a.configuration.items ?? []) assert(item.uuid.startsWith(`Compendium.${PACKS.features.collection}.Item.`),`${doc.name}: ItemGrant não portável`);
  }
  for(const b of subclassBundles) {
    const doc=results.get(`subclass:${b.identity.identifier}`).item;
    assert(doc._source.system.classIdentifier===b.parentClass.identifier,`${b.identity.name}: classIdentifier divergente`);
  }

  function classDoc(id){return results.get(`class:${id}`).item;}
  function subDoc(id){return results.get(`subclass:${id}`).item;}
  const frame=classDoc('frame-pilot');
  const saveTrait=adv(frame).find(a=>a.type==='Trait' && /Salvaguardas/i.test(a.title));
  assert(saveTrait,'Piloto de Frame sem Trait de salvaguardas');
  assert(saveTrait.configuration.choices?.length===2,'Piloto de Frame deve ter dois pools de salvaguarda');
  assert(saveTrait.configuration.choices[0].count===1 && saveTrait.configuration.choices[0].pool.join(',')==='saves:dex,saves:con,saves:wis','Primeiro pool do Piloto de Frame incorreto');
  assert(saveTrait.configuration.choices[1].count===1 && saveTrait.configuration.choices[1].pool.join(',')==='saves:str,saves:int,saves:cha','Segundo pool do Piloto de Frame incorreto');
  assert(adv(frame).filter(a=>a.type==='AbilityScoreImprovement').length===0,'Piloto de Frame não deve receber ASI genérico');
  const frameFeatures=results.get('class:frame-pilot').featureItems.map(x=>norm(x.name));
  assert(frameFeatures.includes('CRESCIMENTO'),'Piloto de Frame deve preservar Crescimento como característica');

  const bender=classDoc('bender');
  const tamer=classDoc('tamer');
  assert(bender.system.spellcasting.progression==='half' && bender.system.spellcasting.ability==='','Dobrador deve iniciar meio-conjurador com habilidade em branco');
  assert(tamer.system.spellcasting.progression==='half' && tamer.system.spellcasting.ability==='','Domador deve iniciar meio-conjurador com habilidade em branco');
  assert(bender.getFlag('grimorio-importer','specialRuntime')?.type==='spellcasting-ability-choice','Dobrador sem flag de runtime');
  assert(tamer.getFlag('grimorio-importer','specialRuntime')?.type==='spellcasting-ability-choice','Domador sem flag de runtime');

  // Simula Items embutidos para testar a configuração no Actor sem depender do Foundry real.
  function embeddedFrom(doc, actor){const x=new MockItem(doc._source,'world');x.uuid=`Actor.mock.Item.${x.id}`;x.pack=null;x.parent=actor;return x;}
  const actorB={documentName:'Actor',name:'Dobrador Teste',items:[]};
  const benderEmbedded=embeddedFrom(bender,actorB);actorB.items.push(benderEmbedded);
  await specialRuntime.applySpellcastingAbility(benderEmbedded,'int');
  assert(benderEmbedded.system.spellcasting.ability==='int' && benderEmbedded.system.primaryAbility.value[0]==='int','Escolha de conjuração do Dobrador não aplicada');
  const actorT={documentName:'Actor',name:'Domador Teste',items:[]};
  const tamerEmbedded=embeddedFrom(tamer,actorT);actorT.items.push(tamerEmbedded);
  await specialRuntime.applySpellcastingAbility(tamerEmbedded,'cha');
  assert(tamerEmbedded.system.spellcasting.ability==='cha' && tamerEmbedded.system.primaryAbility.value[0]==='cha','Escolha de conjuração do Domador não aplicada');

  const blood=classDoc('blood-minister');
  assert(blood.system.hd.denomination==='d8','Ministro de Sangue deve usar d8 técnico no Item');
  assert(blood.getFlag('grimorio-importer','sourceHitDice')==='2d4','Ministro de Sangue deve preservar 2d4 como dado-fonte');
  assert(specialRuntime.rewriteBloodMinisterHpFormula('1d8 + @abilities.con.mod')==='2d4 + @abilities.con.mod','Hook de PV do Ministro de Sangue incorreto');
  assert(specialRuntime.rewriteBloodMinisterHpFormula('2d4 + @abilities.con.mod')==='2d4 + @abilities.con.mod','Hook de PV não deve duplicar 2d4');
  assert(adv(blood).some(a=>a.type==='Subclass' && a.level===3),'Ministro de Sangue deve escolher Seita Genética no nível 3');

  const drag=classDoc('dragoneer');
  assert(drag.system.hd.denomination==='d8' && drag.system.spellcasting.progression==='none','Cavaleiro Dracônico deve iniciar com perfil técnico neutro');
  const reps={
    'zagalhta-dragoneer-bloodweaver':['d6','full'],
    'zagalhta-dragoneer-raging-titan':['d12','none'],
    'zagalhta-dragoneer-auraphage':['d8','pact'],
    'zagalhta-dragoneer-royal-sweeper':['d10','half'],
    'bbb-dragoneer-fortune-veil':['d10','third']
  };
  for(const [id,[hd,prog]] of Object.entries(reps)) {
    const doc=subDoc(id); const concept=doc.getFlag('grimorio-importer','dragoneerConcept');
    assert(concept?.hitDie===hd && concept?.spellcasting?.progression===prog,`${doc.name}: perfil de Conceito Central incorreto`);
    assert(adv(doc).some(a=>a.type==='Trait'),`${doc.name}: Conceito Central sem Traits nativos`);
  }
  for(const [id,p] of Object.entries(specialProfiles.DRAGONEER_CONCEPT_PROFILES)) {
    const doc=subDoc(id); assert(doc,`Conceito Central não materializado: ${id}`); assert(doc.getFlag('grimorio-importer','dragoneerConcept')?.hitDie===p.hitDie,`${id}: flag de perfil ausente`);
  }
  const actorD={documentName:'Actor',name:'Cavaleiro Teste',items:[]};
  const dragEmbedded=embeddedFrom(drag,actorD); const conceptEmbedded=embeddedFrom(subDoc('zagalhta-dragoneer-bloodweaver'),actorD);
  actorD.items.push(dragEmbedded,conceptEmbedded);
  await specialRuntime.applyDragoneerConcept(actorD,conceptEmbedded);
  assert(dragEmbedded.system.hd.denomination==='d6' && dragEmbedded.system.spellcasting.progression==='full' && dragEmbedded.system.spellcasting.ability==='wis','Configuração dinâmica do Cavaleiro Dracônico falhou');

  const before={drag:drag.uuid,bender:bender.uuid,features:packs.features.docs.length};
  const dragBundle=classBundles.find(b=>b.identity.identifier==='dragoneer');
  const benderBundle=classBundles.find(b=>b.identity.identifier==='bender');
  const dragAgain=await materializeBundle(dragBundle,runtime); const benderAgain=await materializeBundle(benderBundle,runtime);
  assert(dragAgain.item.uuid===before.drag && benderAgain.item.uuid===before.bender,'Reimportação alterou UUID de classe especial');
  assert(packs.classes.docs.length===25 && packs.features.docs.length===before.features,'Reimportação criou duplicações');

  const failPacks=Object.fromEntries(Object.entries(PACKS).map(([k,s])=>[k,new MockPack(s)]));
  const failRuntime={...runtime,getPack:k=>failPacks[k],listPackItems:async k=>failPacks[k].getDocuments(),createPackItem:async()=>{throw new Error('falha simulada');},setPackLocked:async(k,l)=>failPacks[k].configure({locked:l}),isPackLocked:k=>failPacks[k].locked};
  let failed=false;try{await materializeBundle(classBundles[0],failRuntime);}catch(e){failed=/falha simulada/.test(e.message);}assert(failed,'Falha simulada não propagada');assert(Object.values(failPacks).every(p=>p.locked),'Packs não relockados após falha');

  console.log('PHASE8_MODULE_OK',JSON.stringify({
    module:manifest.version,classes:packs.classes.docs.length,subclasses:packs.subclasses.docs.length,features:packs.features.docs.length,
    specialClasses:5,specialSubclasses:30,dragoneerConceptProfiles:12,framePilotSaveChoices:true,benderDynamicAbility:true,tamerDynamicAbility:true,
    bloodMinisterHpRoll:'2d4',portableItemGrants:true,worldItemsCreated:0,uuidStableOnReimport:true,packsRelocked:true
  },null,2));
})().catch(e=>{console.error(e.stack||e);process.exit(1);});
