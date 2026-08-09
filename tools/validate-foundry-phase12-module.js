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
function acts(doc) { return Object.values(doc.system?.activities ?? {}); }
function effects(doc) { return doc.effects ?? []; }
function normalizedFeatureName(value) { return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z0-9]+/g,' ').replace(/\s+/g,' ').trim(); }
function featureDoc(pack, bundleId, name) { const wanted=normalizedFeatureName(name); return pack.docs.find(d => normalizedFeatureName(d.name) === wanted && d.flags?.['grimorio-importer']?.grimorioId === bundleId && d.flags?.['grimorio-importer']?.documentRole === 'feature'); }
function actByName(doc, name) { return acts(doc).find(a => a.name === name); }
function effectByKey(doc, key) { return effects(doc).find(e => e.flags?.['grimorio-importer']?.effectKey === key); }

(async () => {
  const siteManifest = readJson(path.join(root, 'manifest.json'));
  const moduleManifest = readJson(path.join(moduleRoot, 'module.json'));
  assert(siteManifest.version === '5.25.1', 'Grimório deve estar em 5.25.1');
  assert(moduleManifest.version === '0.9.1', 'Grimório Importer deve estar em 0.9.1');
  assert(siteManifest.foundryClassImporter?.phase === 12, 'Manifest não registra Fase 12');
  assert(siteManifest.foundryClassImporter?.realFoundryPhase11AutomationValidated === true, 'Fase 11 deve estar registrada como homologada no Foundry real');

  const automation = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'feature-automation.js')).href + `?v=${Date.now()}`);
  const materializer = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'materializer.js')).href + `?v=${Date.now()}`);
  const storage = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'pack-storage.js')).href + `?v=${Date.now()}`);
  const coverage = automation.automationCoverage();
  assert(coverage.phase === '12' && coverage.schemaVersion === 3, 'Cobertura deve declarar Fase 12 / schema 3');
  assert(coverage.profiles === 71, `Esperados 71 perfis; encontrados ${coverage.profiles}`);
  assert(coverage.classProfiles === 59 && coverage.subclassProfiles === 12, 'Distribuição classe/subclasse inesperada');
  assert(coverage.classes === 24 && coverage.subclassBundles === 12, 'Cobertura deve representar 24 classes e 12 subclasses específicas');
  assert(coverage.activities === 86, `Esperadas 86 Activities; encontradas ${coverage.activities}`);
  assert(coverage.resources === 37, `Esperadas 37 reservas/usos; encontradas ${coverage.resources}`);
  assert(coverage.effects === 11 && coverage.passiveEffects === 6 && coverage.activityEffects === 5, 'Cobertura de Active Effects inesperada');
  assert(coverage.byTier.full === 12 && coverage.byTier.partial === 58 && coverage.byTier.description === 1, 'Distribuição de tiers inesperada');
  const support = automation.phase12Support();
  assert(support.catalogAudit && support.subclassSpecificProfiles && support.profileTargetingByBundleId && support.partialRecoveryFormulas, 'Recursos centrais da Fase 12 ausentes');
  assert(support.auraPropagation === false && support.conditionalAttackEffects === false, 'Fase 12 não deve prometer aura/efeitos condicionais globais');

  const full = readJson(catalogFile);
  let auditTotals = { features:0, profiled:0, full:0, partial:0, description:0, candidateHigh:0, candidateMedium:0, textual:0 };
  const matched = [];
  for (const bundle of full.bundles) {
    const a = automation.auditBundleAutomation(bundle);
    for (const k of Object.keys(auditTotals)) auditTotals[k] += Number(a[k] ?? 0);
    matched.push(...a.entries.filter(e => e.status === 'profiled').map(e => e.profileId));
  }
  assert(auditTotals.features === 2370, 'Auditoria deve cobrir as 2370 características de origem');
  assert(auditTotals.profiled === 71 && new Set(matched).size === 71, 'Todos os 71 perfis devem casar exatamente no catálogo');
  assert(auditTotals.candidateHigh === 289 && auditTotals.candidateMedium === 718 && auditTotals.textual === 1292, 'Distribuição da auditoria do catálogo mudou inesperadamente');
  for (const p of automation.FEATURE_AUTOMATION_PROFILES) assert(matched.filter(id => id === p.id).length === 1, `${p.id}: perfil deve corresponder exatamente a uma característica`);

  let sequence = 0;
  class MockItem {
    constructor(data, collection) { this.id=`x${String(++sequence).padStart(7,'0')}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; this.parent=null; this.documentName='Item'; }
    get flags(){return this._source.flags;} get system(){return this._source.system;} get effects(){return this._source.effects ?? [];} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
    async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;return this;}
  }
  class MockPack { constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];} async configure(data){if(Object.prototype.hasOwnProperty.call(data,'locked'))this.locked=Boolean(data.locked);} async getDocuments(){return [...this.docs];} }
  const { PACKS } = storage;
  const packs = Object.fromEntries(Object.entries(PACKS).map(([key,spec]) => [key,new MockPack(spec)]));
  const runtimeInfo = { foundryVersion:'13.351', systemId:'dnd5e', systemVersion:'5.3.3' };
  const runtime = {
    ...runtimeInfo, isGM:true, getPack:key=>packs[key]??null,
    listPackItems:async key=>packs[key].getDocuments(),
    createPackItem:async(key,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante escrita`);const doc=new MockItem(data,PACKS[key].collection);packs[key].docs.push(doc);return doc;},
    updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante update`);return doc.update(data);},
    setPackLocked:async(key,locked)=>packs[key].configure({locked}),isPackLocked:key=>packs[key].locked,
    listWorldItems:()=>[]
  };

  const ordered = [...full.bundles].sort((a,b)=>(a.kind===b.kind?0:a.kind==='class'?-1:1));
  for (const bundle of ordered) await materializer.materializeBundle(bundle, runtime);
  assert(packs.classes.docs.length === 24 && packs.subclasses.docs.length === 377 && packs.features.docs.length === 2293, 'Materialização completa da Fase 12 mudou as contagens estruturais');
  assert(Object.values(packs).every(pack => pack.locked), 'Packs devem terminar bloqueados');
  assert(runtime.listWorldItems().length === 0, 'Fase 12 não deve criar Items no Mundo');

  const profiledDocs = packs.features.docs.filter(d => d.flags?.['grimorio-importer']?.automation?.applied);
  assert(profiledDocs.length === 71, `Esperadas 71 características perfiladas materializadas; encontradas ${profiledDocs.length}`);
  const materializedActivities = profiledDocs.reduce((n,d)=>n+acts(d).length,0);
  const materializedEffects = profiledDocs.reduce((n,d)=>n+effects(d).length,0);
  assert(materializedActivities === 86, `Activities materializadas inesperadas: ${materializedActivities}`);
  assert(materializedEffects === 11, `Active Effects materializados inesperados: ${materializedEffects}`);

  // Integridade genérica do schema produzido.
  const activityIds = new Set();
  const effectIds = new Set();
  const allowedActivation = new Set(['','action','bonus','reaction','special','minute']);
  const allowedConsumption = new Set(['itemUses','spellSlots']);
  for (const doc of profiledDocs) {
    const meta = doc.flags['grimorio-importer'].automation;
    assert(meta.phase === '12' && meta.schemaVersion === 3, `${doc.name}: flags de automação antigas`);
    assert(meta.activityCount === acts(doc).length && meta.effectCount === effects(doc).length, `${doc.name}: contagem embutida divergente`);
    const localEffectIds = new Set(effects(doc).map(e=>e._id));
    for (const effect of effects(doc)) {
      assert(/^[A-Za-z0-9]{16}$/.test(effect._id), `${doc.name}: Effect ID inválido`);
      assert(!effectIds.has(effect._id), `${doc.name}: Effect ID duplicado ${effect._id}`); effectIds.add(effect._id);
      assert(typeof effect.transfer === 'boolean' && effect.disabled === false, `${doc.name}: estado de efeito inválido`);
      for (const c of effect.changes ?? []) assert(typeof c.key === 'string' && c.key.startsWith('system.'), `${doc.name}: change inválido`);
    }
    for (const activity of acts(doc)) {
      assert(/^[A-Za-z0-9]{16}$/.test(activity._id), `${doc.name}: Activity ID inválido`);
      assert(!activityIds.has(activity._id), `${doc.name}: Activity ID duplicado ${activity._id}`); activityIds.add(activity._id);
      assert(['utility','heal','damage'].includes(activity.type), `${doc.name}: Activity type inesperado ${activity.type}`);
      assert(allowedActivation.has(activity.activation?.type ?? ''), `${doc.name}: ativação inesperada ${activity.activation?.type}`);
      if (activity.activation?.type === 'minute') assert(activity.activation.value === 1, `${doc.name}: ativação de 1 minuto inválida`);
      for (const ref of activity.effects ?? []) assert(localEffectIds.has(ref._id), `${doc.name}: Activity referencia Effect inexistente`);
      for (const target of activity.consumption?.targets ?? []) assert(allowedConsumption.has(target.type), `${doc.name}: consumo inesperado ${target.type}`);
    }
    for (const rec of doc.system?.uses?.recovery ?? []) {
      assert(['sr','lr'].includes(rec.period), `${doc.name}: período de recuperação inesperado ${rec.period}`);
      assert(['recoverAll','formula'].includes(rec.type), `${doc.name}: tipo de recuperação inesperado ${rec.type}`);
      if (rec.type === 'formula') assert(Boolean(rec.formula), `${doc.name}: recuperação por fórmula sem fórmula`);
    }
  }

  // Recursos compartilhados de classe.
  const clericChannel = featureDoc(packs.features, 'cleric', 'CANALIZAR DIVINDADE');
  assert(clericChannel?.system.uses.max === '1 + floor(@classes.cleric.levels / 6) - floor(@classes.cleric.levels / 12)', 'Reserva de Canalizar Divindade do Clérigo incorreta');
  const turnUndead = featureDoc(packs.features, 'cleric', 'CANALIZAR DIVINDADE: EXPULSAR MORTOS-VIVOS');
  assert(actByName(turnUndead,'Expulsar Mortos-vivos')?.consumption?.targets?.[0]?.target === 'cleric-canalizar-divindade', 'Expulsar Mortos-vivos deve consumir Canalizar Divindade');

  const sorcery = featureDoc(packs.features, 'sorcerer', 'PONTOS DE FEITIÇARIA');
  assert(sorcery?.system.uses.max === '@classes.sorcerer.levels', 'Pontos de Feitiçaria devem escalar com nível');
  const quickened = featureDoc(packs.features, 'sorcerer', 'MAGIA ACELERADA');
  const quickenedTarget = actByName(quickened,'Metamágica — Magia Acelerada')?.consumption?.targets?.[0];
  assert(quickenedTarget?.target === 'sorcerer-pontos-de-feiticaria' && quickenedTarget?.value === '2', 'Magia Acelerada deve consumir 2 Pontos de Feitiçaria');

  const focus = featureDoc(packs.features, 'sword-saint-retia', 'CANALIZAÇÃO DE FOCO');
  assert(focus, 'Canalização de Foco não materializada');
  const srFocus = focus.system.uses.recovery.find(r => r.period === 'sr');
  assert(srFocus?.type === 'formula' && srFocus.formula === 'ceil((5 + @classes.sword-saint.levels) / 2)', 'Recuperação parcial de Foco no descanso curto incorreta');

  const primalForm = featureDoc(packs.features, 'bender-ryoko', 'FORMA PRIMORDIAL');
  assert(effectByKey(primalForm,'air') && effectByKey(primalForm,'earth'), 'Forma Primordial deve possuir efeitos de Ar e Terra');
  assert(actByName(primalForm,'Forma Primordial — Ar')?.effects?.length === 1, 'Forma de Ar deve referenciar seu Active Effect');
  assert(actByName(primalForm,'Forma Primordial — Terra')?.effects?.length === 1, 'Forma de Terra deve referenciar seu Active Effect');

  const spiritual = featureDoc(packs.features, 'spiritual-emissary', 'ENERGIA ESPIRITUAL');
  assert(spiritual?.system.uses.max === '2 * @classes.spiritual-emissary.levels + @abilities.wis.mod + 6', 'Pontos de Selo do Emissário Espiritual incorretos');
  const ofuda = featureDoc(packs.features, 'spiritual-emissary', 'OFUDAS DE CURA');
  const ofudaAct = actByName(ofuda,'Ofudas de Cura');
  assert(ofudaAct?.consumption?.scaling?.allowed === true && ofudaAct.consumption.targets?.[0]?.target === 'spiritual-emissary-energia-espiritual', 'Ofudas de Cura deve consumir Energia Espiritual com scaling');

  // Perfis de subclasses devem ser isolados por bundle ID.
  const vengeance = featureDoc(packs.features, 'juramento-vinganca', 'CANALIZAR DIVINDADE');
  assert(vengeance?.flags['grimorio-importer'].automation.profileId === 'vengeance-channel-divinity', 'Perfil de Juramento de Vingança não aplicado');
  for (const a of acts(vengeance)) assert(a.consumption.targets?.[0]?.target === 'paladin-canalizar-divindade', 'Opção do Juramento de Vingança deve consumir reserva do Paladino');
  const basePaladinChannel = featureDoc(packs.features, 'paladin', 'CANALIZAR DIVINDADE');
  assert(basePaladinChannel?.flags['grimorio-importer'].automation.profileId === 'paladin-channel-divinity', 'Perfil base de Canalizar Divindade foi contaminado por subclasse');

  const openHand = featureDoc(packs.features, 'mao-aberta', 'INTEGRIDADE CORPORAL');
  const heal = actByName(openHand,'Integridade Corporal');
  assert(heal?.type === 'heal' && heal.healing?.number === null && heal.healing?.custom?.enabled === true && heal.healing?.custom?.formula === '3 * @classes.monk.levels', 'Integridade Corporal deve curar 3 × nível de Monge');

  const fiendLuck = featureDoc(packs.features, 'corruptor', 'SORTE DO PRÓPRIO OBSCURO');
  assert(actByName(fiendLuck,'Sorte do Próprio Obscuro')?.roll?.formula === '1d10', 'Sorte do Próprio Obscuro deve fornecer rolagem 1d10');

  // Reimportação completa: estabilidade de documentos e IDs embutidos.
  const docKey = d => `${d.flags?.['grimorio-importer']?.grimorioId}:${d.flags?.['grimorio-importer']?.featureKey}`;
  const before = {
    classes:packs.classes.docs.length, subclasses:packs.subclasses.docs.length, features:packs.features.docs.length,
    uuids:new Map(packs.features.docs.map(d=>[docKey(d),d.uuid])),
    activities:new Map(profiledDocs.map(d=>[docKey(d),acts(d).map(a=>a._id).join(',')])),
    effects:new Map(profiledDocs.map(d=>[docKey(d),effects(d).map(e=>e._id).join(',')]))
  };
  for (const bundle of ordered) await materializer.materializeBundle(bundle, runtime);
  assert(packs.classes.docs.length===before.classes && packs.subclasses.docs.length===before.subclasses && packs.features.docs.length===before.features, 'Reimportação completa criou duplicações');
  for (const doc of packs.features.docs) if (before.uuids.has(docKey(doc))) assert(before.uuids.get(docKey(doc)) === doc.uuid, `UUID alterado: ${doc.name}`);
  for (const doc of packs.features.docs.filter(d => d.flags?.['grimorio-importer']?.automation?.applied)) {
    assert(before.activities.get(docKey(doc)) === acts(doc).map(a=>a._id).join(','), `Activity IDs alterados: ${doc.name}`);
    assert(before.effects.get(docKey(doc)) === effects(doc).map(e=>e._id).join(','), `Effect IDs alterados: ${doc.name}`);
  }

  const mainSource = fs.readFileSync(path.join(moduleRoot,'scripts','main.js'),'utf8');
  for (const token of ['phase12Support','automationCompendiumAudit','/grimorio-auditoria-automacao','Fase 12']) assert(mainSource.includes(token), `main.js sem ${token}`);

  console.log('PHASE12_MODULE_OK', JSON.stringify({
    app: siteManifest.version,
    module: moduleManifest.version,
    catalogFeatures: auditTotals.features,
    automationProfiles: coverage.profiles,
    classProfiles: coverage.classProfiles,
    subclassProfiles: coverage.subclassProfiles,
    representedClasses: coverage.classes,
    targetedSubclasses: coverage.subclassBundles,
    nativeActivities: coverage.activities,
    resources: coverage.resources,
    activeEffects: coverage.effects,
    tiers: coverage.byTier,
    audit: { high:auditTotals.candidateHigh, medium:auditTotals.candidateMedium, textual:auditTotals.textual },
    materializedFeatures: packs.features.docs.length,
    profiledMaterializedFeatures: profiledDocs.length,
    reimportStable: true,
    worldItemsCreated: 0,
    auraPropagation: false,
    conditionalAttackEffects: false
  }, null, 2));
})().catch(error => { console.error(error.stack || error); process.exit(1); });
