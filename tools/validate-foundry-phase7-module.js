#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
function assert(ok, msg) { if (!ok) throw new Error(msg); }
function clone(v) { return JSON.parse(JSON.stringify(v)); }
function adv(doc) { return Object.values(doc._source?.system?.advancement ?? {}); }
function norm(v) { return String(v ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase(); }

(async () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(moduleRoot, 'module.json'), 'utf8'));
  assert(manifest.version === '0.3.0', 'Módulo deve estar em 0.3.0');
  assert(manifest.compatibility?.verified === '13.351', 'Foundry verificado deve ser 13.351');
  const sys = manifest.relationships?.systems?.find(s => s.id === 'dnd5e');
  assert(sys?.compatibility?.minimum === '5.3.3' && sys?.compatibility?.maximum === '5.3.3', 'DnD5e deve estar congelado em 5.3.3');
  assert(manifest.packs?.length === 3, 'Devem existir três compêndios');

  const validator = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'bundle-validator.js')).href);
  const materializer = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'materializer.js')).href);
  const storage = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'pack-storage.js')).href);
  const profiles = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'class-profiles.js')).href);
  const { validateBundle, phase7Support } = validator;
  const { materializeBundle } = materializer;
  const { PACKS } = storage;
  const support = phase7Support();
  assert(support.classes.length === 19, 'Fase 7 deve habilitar 19 classes');
  assert(support.reviewClasses.length === 5, 'Fase 7 deve reservar 5 classes especiais');
  assert(support.counts.subclasses === 347 && support.counts.reviewSubclasses === 30, 'Contagem de subclasses da Fase 7 incorreta');
  assert(support.itemChoiceAdvancements && support.batchImport && support.portableItemGrants, 'Recursos centrais da Fase 7 ausentes');
  assert(profiles.READY_CLASS_IDENTIFIERS.length === 19 && profiles.REVIEW_CLASS_IDENTIFIERS.length === 5, 'Perfis de classe inconsistentes');

  const phase7Root = path.join(root, 'tests', 'foundry-v13', 'phase7');
  const catalog = JSON.parse(fs.readFileSync(path.join(phase7Root, 'catalog.json'), 'utf8'));
  assert(catalog.summary.classes === 19 && catalog.summary.subclasses === 347, 'Catálogo Fase 7 inconsistente');
  assert(catalog.summary.reviewClasses === 5 && catalog.summary.blockedSubclasses === 30, 'Reservas Fase 7 inconsistentes');
  const classBundles = catalog.classes.map(x => JSON.parse(fs.readFileSync(path.join(phase7Root, x.file), 'utf8')));
  const subclassBundles = catalog.subclasses.map(x => JSON.parse(fs.readFileSync(path.join(phase7Root, x.file), 'utf8')));
  const runtimeInfo = { foundryVersion:'13.351', systemId:'dnd5e', systemVersion:'5.3.3' };
  for (const b of classBundles) assert(validateBundle(b, runtimeInfo).ok, `Classe inválida: ${b.identity.name}`);
  for (const b of subclassBundles) assert(validateBundle(b, runtimeInfo).ok, `Subclasse inválida: ${b.identity.name}`);

  const exemplar = clone(classBundles[0]);
  for (const id of profiles.REVIEW_CLASS_IDENTIFIERS) {
    const b = clone(exemplar); b.identity.identifier = id; b.nativeMapping.status = 'review';
    assert(!validateBundle(b, runtimeInfo).ok, `Classe especial deveria ser bloqueada: ${id}`);
  }
  const subExemplar = clone(subclassBundles[0]);
  for (const id of profiles.REVIEW_CLASS_IDENTIFIERS) {
    const b = clone(subExemplar); b.parentClass.identifier = id; b.subclass.classIdentifier = id;
    assert(!validateBundle(b, runtimeInfo).ok, `Subclasse de classe especial deveria ser bloqueada: ${id}`);
  }

  let sequence = 0;
  class MockItem {
    constructor(data, collection) { this.id=`m${String(++sequence).padStart(6,'0')}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; }
    get flags(){return this._source.flags;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){this._source=clone(data);this.name=data.name;this.type=data.type;return this;}
  }
  class MockPack {
    constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];}
    async configure(data){if(Object.prototype.hasOwnProperty.call(data,'locked')) this.locked=Boolean(data.locked);}
    async getDocuments(){return [...this.docs];}
  }
  const packs = Object.fromEntries(Object.entries(PACKS).map(([k,s])=>[k,new MockPack(s)]));
  const runtime = {
    ...runtimeInfo, isGM:true,
    getPack:key=>packs[key]??null,
    listPackItems:async key=>packs[key].getDocuments(),
    createPackItem:async(key,data)=>{assert(!packs[key].locked,`Pack ${key} deveria estar desbloqueado`);const d=new MockItem(data,PACKS[key].collection);packs[key].docs.push(d);return d;},
    updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`Pack ${key} deveria estar desbloqueado`);return doc.update(data);},
    setPackLocked:async(key,locked)=>packs[key].configure({locked}), isPackLocked:key=>packs[key].locked, listWorldItems:()=>[]
  };

  const results = new Map();
  for (const b of classBundles) results.set(`class:${b.identity.identifier}`, await materializeBundle(b, runtime));
  for (const b of subclassBundles) results.set(`subclass:${b.identity.identifier}`, await materializeBundle(b, runtime));
  assert(packs.classes.docs.length === 19, `Esperado 19 classes, obtido ${packs.classes.docs.length}`);
  assert(packs.subclasses.docs.length === 347, `Esperado 347 subclasses, obtido ${packs.subclasses.docs.length}`);
  assert(Object.values(packs).every(p=>p.locked), 'Packs devem estar bloqueados ao final');

  for (const doc of [...packs.classes.docs, ...packs.subclasses.docs]) {
    assert(doc._source.system.advancement && !Array.isArray(doc._source.system.advancement), `${doc.name}: advancement deve ser objeto`);
    for (const a of adv(doc).filter(a=>a.type==='ItemGrant')) for (const item of a.configuration.items ?? []) assert(item.uuid.startsWith(`Compendium.${PACKS.features.collection}.Item.`), `${doc.name}: ItemGrant não portável`);
  }
  for (const b of subclassBundles) {
    const doc=results.get(`subclass:${b.identity.identifier}`).item;
    assert(doc._source.system.classIdentifier===b.parentClass.identifier, `${b.identity.name}: classIdentifier divergente`);
  }

  function classDoc(id){return results.get(`class:${id}`).item;}
  function choices(id){return adv(classDoc(id)).filter(a=>a.type==='ItemChoice');}
  assert(classDoc('bard')._source.system.spellcasting.progression==='full' && classDoc('bard')._source.system.spellcasting.ability==='cha','Bardo spellcasting incorreto');
  assert(classDoc('warlock')._source.system.spellcasting.progression==='pact' && classDoc('warlock')._source.system.spellcasting.ability==='cha','Bruxo spellcasting incorreto');
  assert(classDoc('paladin')._source.system.spellcasting.progression==='half' && classDoc('paladin')._source.system.spellcasting.ability==='cha','Paladino spellcasting incorreto');
  assert(classDoc('spellblade')._source.system.spellcasting.progression==='half' && classDoc('spellblade')._source.system.spellcasting.ability==='int','Spellblade spellcasting incorreto');
  assert(adv(classDoc('fighter')).filter(a=>a.type==='AbilityScoreImprovement').length===7,'Guerreiro deve ter 7 ASI');
  assert(adv(classDoc('rogue')).filter(a=>a.type==='AbilityScoreImprovement').length===6,'Ladino deve ter 6 ASI');
  assert(adv(classDoc('bard')).filter(a=>a.type==='AbilityScoreImprovement').length===5,'Bardo deve ter 5 ASI');

  const fighterChoice=choices('fighter')[0];
  assert(fighterChoice?.configuration?.pool?.length===6 && fighterChoice.configuration.choices?.['1']?.count===1,'Estilo de Luta do Guerreiro incorreto');
  const warlockChoice=choices('warlock')[0];
  assert(warlockChoice?.configuration?.pool?.length===3 && warlockChoice.configuration.choices?.['3']?.count===1,'Dádiva do Pacto incorreta');
  const sorcChoice=choices('sorcerer')[0];
  assert(sorcChoice?.configuration?.pool?.length===8 && sorcChoice.configuration.choices?.['3']?.count===2 && sorcChoice.configuration.choices?.['10']?.count===1 && sorcChoice.configuration.choices?.['17']?.count===1,'Metamágica incorreta');
  assert(choices('paladin')[0]?.configuration?.pool?.length===4,'Estilo de Luta do Paladino incorreto');
  assert(choices('ranger')[0]?.configuration?.pool?.length===4,'Estilo de Luta do Patrulheiro incorreto');

  const monkNames=results.get('class:monk').featureItems.map(x=>norm(x.name));
  for(const n of ['RAJADA DE GOLPES','DEFESA PACIENTE','PASSO DO VENTO']) assert(monkNames.includes(n),`Monge sem ${n}`);
  const sorcNames=results.get('class:sorcerer').featureItems.map(x=>norm(x.name));
  assert(sorcNames.includes('CRIANDO ESPACOS DE MAGIA'),'Feiticeiro sem Criando Espaços de Magia');
  const forbidden = {
    'favored-soul':['CARACTERISTICA DE FARDO COSMICO'], inscriptor:['CARACTERISTICA DE INTENCAO AUTORAL'], 'petal-knight':['CARACTERISTICA DE EPITETO'], 'sword-saint':['CARACTERISTICA DE CAMINHO DE DEVOCAO'], spellblade:['CARACTERISTICA DE ESPECIALIZACAO']
  };
  for(const [id,prefixes] of Object.entries(forbidden)) {
    const names=results.get(`class:${id}`).featureItems.map(x=>norm(x.name));
    for(const prefix of prefixes) assert(!names.some(n=>n.startsWith(prefix)),`${id}: placeholder sintético persistido`);
  }

  const before={ fighter:classDoc('fighter').uuid, featureCount:packs.features.docs.length };
  const fighterBundle=classBundles.find(b=>b.identity.identifier==='fighter');
  const again=await materializeBundle(fighterBundle,runtime);
  assert(again.item.uuid===before.fighter && packs.classes.docs.length===19 && packs.features.docs.length===before.featureCount,'Reimportação do Guerreiro duplicou documentos ou mudou UUID');

  const failPacks=Object.fromEntries(Object.entries(PACKS).map(([k,s])=>[k,new MockPack(s)]));
  const failRuntime={...runtime,getPack:k=>failPacks[k],listPackItems:async k=>failPacks[k].getDocuments(),createPackItem:async()=>{throw new Error('falha simulada');},setPackLocked:async(k,l)=>failPacks[k].configure({locked:l}),isPackLocked:k=>failPacks[k].locked};
  let failed=false; try{await materializeBundle(classBundles[0],failRuntime);}catch(e){failed=/falha simulada/.test(e.message);} assert(failed,'Falha simulada não propagada'); assert(Object.values(failPacks).every(p=>p.locked),'Packs não relockados após falha');

  console.log('PHASE7_MODULE_OK', JSON.stringify({module:manifest.version,classes:packs.classes.docs.length,subclasses:packs.subclasses.docs.length,features:packs.features.docs.length,readyClasses:19,readySubclasses:347,reservedClasses:5,reservedSubclasses:30,itemChoice:true,portableItemGrants:true,worldItemsCreated:0,uuidStableOnReimport:true,packsRelocked:true},null,2));
})().catch(e=>{console.error(e.stack||e);process.exit(1);});
