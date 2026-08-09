#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
const bundlesRoot = path.join(root, 'tests', 'foundry-v13', 'phase7', 'bundles', 'classes');
const clone = value => JSON.parse(JSON.stringify(value));
function assert(value, message) { if (!value) throw new Error(message); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function setPath(obj, pathString, value) { const parts=pathString.split('.'); let cur=obj; for(let i=0;i<parts.length-1;i++){if(!cur[parts[i]]||typeof cur[parts[i]]!=='object')cur[parts[i]]={};cur=cur[parts[i]];}cur[parts.at(-1)]=clone(value); }
function applyUpdate(source,data){for(const [key,value] of Object.entries(data)){if(key.includes('.'))setPath(source,key,value);else source[key]=clone(value);}}
function managed(doc, featureName, profileId=null) { return doc.name === featureName && doc.flags?.['grimorio-importer']?.documentRole === 'feature' && (!profileId || doc.flags?.['grimorio-importer']?.automation?.profileId === profileId); }
function acts(doc) { return Object.values(doc.system?.activities ?? {}); }
function effects(doc) { return doc.effects ?? []; }
function actByName(doc, name) { return acts(doc).find(a => a.name === name); }
function changesByKey(effect, key) { return (effect?.changes ?? []).filter(c => c.key === key); }
function effectByKey(doc, key) { return effects(doc).find(e => e.flags?.['grimorio-importer']?.effectKey === key); }

(async () => {
  const siteManifest = readJson(path.join(root, 'manifest.json'));
  const manifest = readJson(path.join(moduleRoot, 'module.json'));
  assert(siteManifest.version === '5.24.0', 'Grimório deve estar em 5.24.0');
  assert(manifest.version === '0.8.0', 'Grimório Importer deve estar em 0.8.0');
  assert(siteManifest.foundryClassImporter?.phase === 11 && siteManifest.foundryClassImporter?.phasePart === '11.2', 'Manifest não registra Fase 11.2');
  assert(siteManifest.foundryClassImporter?.realFoundryPhase10GranularUiValidated === true, 'Homologação real da Fase 10 precisa estar registrada');

  const automation = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'feature-automation.js')).href + `?v=${Date.now()}`);
  const materializer = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'materializer.js')).href + `?v=${Date.now()}`);
  const storage = await import(pathToFileURL(path.join(moduleRoot, 'scripts', 'pack-storage.js')).href + `?v=${Date.now()}`);
  const coverage = automation.automationCoverage();
  assert(coverage.phase === '11.2' && coverage.schemaVersion === 2, 'Cobertura deve declarar Fase 11.2 / schema 2');
  assert(coverage.profiles === 25, `Esperados 25 perfis; encontrados ${coverage.profiles}`);
  assert(coverage.classes === 6, `Esperadas 6 classes representativas; encontradas ${coverage.classes}`);
  assert(coverage.activities === 23, `Esperadas 23 Activities; encontradas ${coverage.activities}`);
  assert(coverage.resources === 6, `Esperados 6 recursos com usos; encontrados ${coverage.resources}`);
  assert(coverage.effects === 8 && coverage.passiveEffects === 6 && coverage.activityEffects === 2, 'Cobertura de Active Effects inesperada');
  assert(coverage.byTier.full === 7 && coverage.byTier.partial === 17 && coverage.byTier.description === 1, 'Distribuição de tiers inesperada');
  const support = automation.phase11Support();
  assert(support.part === 2 && support.activeEffects && support.passiveTransferEffects && support.activityAppliedEffects && support.selfTargetedEffects, 'Framework de Active Effects incompleto');
  assert(support.auraPropagation === false && support.conditionalAttackEffects === false, 'Fase 11.2 não deve prometer automações condicionais/aura');

  const allowedActivityTypes = new Set(['utility','heal','damage']);
  const allowedActivation = new Set(['','action','bonus','reaction','special']);
  const allowedRecovery = new Set(['sr','lr']);
  const allowedConsumption = new Set(['itemUses','spellSlots']);
  const allowedEffectModes = new Set([0,1,2,3,4,5]);
  const activityIds = new Set();
  const effectIds = new Set();

  let sequence = 0;
  class MockItem {
    constructor(data, collection) { this.id=`a${String(++sequence).padStart(7,'0')}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; this.parent=null; this.documentName='Item'; }
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
    createPackItem:async(key,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante escrita`); const doc=new MockItem(data,PACKS[key].collection); packs[key].docs.push(doc); return doc;},
    updatePackItem:async(key,doc,data)=>{assert(!packs[key].locked,`Pack ${key} bloqueado durante update`); return doc.update(data);},
    setPackLocked:async(key,locked)=>packs[key].configure({locked}), isPackLocked:key=>packs[key].locked,
    listWorldItems:()=>[]
  };

  const classIds = ['barbarian','fighter','rogue','monk','paladin','ranger'];
  for (const classId of classIds) await materializer.materializeBundle(readJson(path.join(bundlesRoot, `${classId}.json`)), runtime);
  assert(packs.classes.docs.length === 6, 'As seis classes representativas devem ser materializadas');
  assert(Object.values(packs).every(pack => pack.locked), 'Packs devem terminar bloqueados');
  assert(runtime.listWorldItems().length === 0, 'Fase 11 não deve criar Items no Mundo');

  const profiledDocs = packs.features.docs.filter(doc => doc.flags?.['grimorio-importer']?.automation?.applied);
  assert(profiledDocs.length === 25, `Esperadas 25 características perfiladas; encontradas ${profiledDocs.length}`);
  let materializedEffects = 0;
  let materializedActivities = 0;
  for (const doc of profiledDocs) {
    const meta = doc.flags['grimorio-importer'].automation;
    assert(['full','partial','description'].includes(meta.tier), `${doc.name}: tier inválido`);
    assert(meta.phase === '11.2' && meta.schemaVersion === 2, `${doc.name}: metadados de automação inválidos`);
    assert(meta.effectCount === effects(doc).length, `${doc.name}: effectCount divergente`);
    assert(meta.activityCount === acts(doc).length, `${doc.name}: activityCount divergente`);
    materializedEffects += effects(doc).length;
    materializedActivities += acts(doc).length;
    const docEffectIds = new Set(effects(doc).map(e=>e._id));
    for (const effect of effects(doc)) {
      assert(/^[A-Za-z0-9]{16}$/.test(effect._id), `${doc.name}: Active Effect ID inválido`);
      assert(!effectIds.has(effect._id), `${doc.name}: Active Effect ID duplicado ${effect._id}`); effectIds.add(effect._id);
      assert(typeof effect.transfer === 'boolean' && effect.disabled === false, `${doc.name}: estado do Active Effect inválido`);
      assert(effect.flags?.['grimorio-importer']?.automationPhase === '11.2', `${doc.name}: Active Effect sem flags da fase`);
      for (const change of effect.changes ?? []) {
        assert(typeof change.key === 'string' && change.key.startsWith('system.'), `${doc.name}: change path inválido`);
        assert(allowedEffectModes.has(change.mode), `${doc.name}: Active Effect mode inválido ${change.mode}`);
        assert(Number.isFinite(change.priority), `${doc.name}: Active Effect priority inválido`);
      }
    }
    for (const activity of acts(doc)) {
      assert(/^[A-Za-z0-9]{16}$/.test(activity._id), `${doc.name}: Activity ID inválido`);
      assert(!activityIds.has(activity._id), `${doc.name}: Activity ID duplicado ${activity._id}`); activityIds.add(activity._id);
      assert(allowedActivityTypes.has(activity.type), `${doc.name}: tipo de Activity inesperado ${activity.type}`);
      assert(allowedActivation.has(activity.activation?.type ?? ''), `${doc.name}: ativação inválida ${activity.activation?.type}`);
      for (const ref of activity.effects ?? []) {
        assert(docEffectIds.has(ref._id), `${doc.name}: Activity referencia Active Effect inexistente ${ref._id}`);
        assert(ref.level?.min === null && ref.level?.max === null, `${doc.name}: faixa AppliedEffectField inesperada`);
      }
      for (const r of activity.uses?.recovery ?? []) assert(allowedRecovery.has(r.period), `${doc.name}: recovery inválido ${r.period}`);
      for (const c of activity.consumption?.targets ?? []) {
        assert(allowedConsumption.has(c.type), `${doc.name}: consumo inválido ${c.type}`);
        assert(['','amount','level'].includes(c.scaling?.mode ?? ''), `${doc.name}: modo de scaling inválido`);
      }
    }
    for (const r of doc.system?.uses?.recovery ?? []) assert(allowedRecovery.has(r.period), `${doc.name}: item recovery inválido ${r.period}`);
  }
  assert(materializedActivities === 23 && activityIds.size === 23, `Esperadas 23 Activities materializadas; encontradas ${materializedActivities}`);
  assert(materializedEffects === 8 && effectIds.size === 8, `Esperados 8 Active Effects materializados; encontrados ${materializedEffects}`);

  // Regressão dos casos mecânicos da Parte 1.
  const secondWind = packs.features.docs.find(d => managed(d,'RETOMAR O FÔLEGO','fighter-second-wind'));
  assert(secondWind.system.uses.max === '1' && secondWind.system.uses.recovery.map(x=>x.period).join(',') === 'sr,lr', 'Retomar o Fôlego perdeu usos/recuperação');
  const secondWindAct = actByName(secondWind,'Retomar o Fôlego');
  assert(secondWindAct?.type === 'heal' && secondWindAct.healing.number === 1 && secondWindAct.healing.denomination === 10 && secondWindAct.healing.bonus === '@classes.fighter.levels', 'Retomar o Fôlego regrediu');
  const chi = packs.features.docs.find(d => managed(d,'CHI','monk-ki'));
  assert(chi.system.uses.max === '@classes.monk.levels', 'CHI deve continuar igual ao nível de Monge');
  const flurry = packs.features.docs.find(d => managed(d,'RAJADA DE GOLPES','monk-flurry-of-blows'));
  assert(actByName(flurry,'Rajada de Golpes')?.consumption?.targets?.[0]?.target === 'monk-chi', 'Rajada de Golpes perdeu consumo cruzado de CHI');
  const layHands = packs.features.docs.find(d => managed(d,'CURA PELAS MÃOS','paladin-lay-on-hands'));
  assert(layHands.system.uses.max === '@classes.paladin.levels * 5' && actByName(layHands,'Cura pelas Mãos — Restaurar PV')?.consumption?.targets?.[0]?.scaling?.mode === 'amount', 'Cura pelas Mãos regrediu');
  const smite = packs.features.docs.find(d => managed(d,'DESTRUIÇÃO DIVINA','paladin-divine-smite'));
  assert(acts(smite).length === 3 && actByName(smite,'Destruição Divina — Espaço de 1º a 4º')?.consumption?.targets?.[0]?.type === 'spellSlots', 'Destruição Divina regrediu');

  // Active Effects novos da Parte 2.
  const rage = packs.features.docs.find(d => managed(d,'FÚRIA','barbarian-rage'));
  const rageEffect = effectByKey(rage,'rage');
  const rageActivity = actByName(rage,'Entrar em Fúria');
  assert(rageEffect && rageEffect.transfer === false && rageActivity.effects?.[0]?._id === rageEffect._id, 'Fúria deve aplicar Active Effect pela Activity');
  assert(rageActivity.target?.affects?.type === 'self', 'Fúria deve mirar o próprio personagem');
  assert(rageEffect.duration?.seconds === 60, 'Fúria deve ter duração máxima de 60 segundos');
  assert(changesByKey(rageEffect,'system.abilities.str.check.roll.mode')[0]?.value === '1', 'Fúria deve conceder vantagem em testes de Força');
  assert(changesByKey(rageEffect,'system.abilities.str.save.roll.mode')[0]?.value === '1', 'Fúria deve conceder vantagem em salvaguardas de Força');
  const rageRes = changesByKey(rageEffect,'system.traits.dr.value').map(x=>x.value).sort();
  assert(JSON.stringify(rageRes) === JSON.stringify(['bludgeoning','piercing','slashing']), 'Fúria deve conceder resistências B/P/S');
  assert(!rageEffect.changes.some(c=>c.key.includes('.damage')), 'Fúria não deve aplicar bônus global de dano');

  const feral = packs.features.docs.find(d => managed(d,'INSTINTO SELVAGEM','barbarian-feral-instinct'));
  const feralEffect = effectByKey(feral,'initiative-advantage');
  assert(feralEffect?.transfer === true && changesByKey(feralEffect,'system.attributes.init.roll.mode')[0]?.value === '1', 'Instinto Selvagem deve conceder vantagem passiva em iniciativa');

  const fighterArchery = packs.features.docs.find(d => managed(d,'ARQUEARIA','fighter-archery'));
  assert(changesByKey(effectByKey(fighterArchery,'archery-bonus'),'system.bonuses.rwak.attack')[0]?.value === '2', 'Arquearia do Guerreiro deve conceder +2 rwak');

  const patient = packs.features.docs.find(d => managed(d,'DEFESA PACIENTE','monk-patient-defense'));
  const dodgeEffect = effectByKey(patient,'dodge');
  const patientAct = actByName(patient,'Defesa Paciente');
  assert(dodgeEffect?.transfer === false && dodgeEffect.statuses?.includes('dodging'), 'Defesa Paciente deve aplicar marcador dodging');
  assert(changesByKey(dodgeEffect,'system.abilities.dex.save.roll.mode')[0]?.value === '1', 'Defesa Paciente deve conceder vantagem em salvaguardas de Destreza');
  assert(patientAct.effects?.[0]?._id === dodgeEffect._id && patientAct.target?.affects?.type === 'self', 'Defesa Paciente deve aplicar o efeito no próprio Actor');
  assert(patientAct.consumption?.targets?.[0]?.target === 'monk-chi', 'Defesa Paciente deve continuar consumindo CHI');

  const purity = packs.features.docs.find(d => managed(d,'PUREZA CORPORAL','monk-purity-of-body'));
  const purityEffect = effectByKey(purity,'purity-immunities');
  assert(changesByKey(purityEffect,'system.traits.ci.value').map(x=>x.value).sort().join(',') === 'diseased,poisoned', 'Pureza Corporal deve imunizar doenças/Envenenado');
  assert(changesByKey(purityEffect,'system.traits.di.value')[0]?.value === 'poison', 'Pureza Corporal deve imunizar dano de veneno');

  const divineHealth = packs.features.docs.find(d => managed(d,'SAÚDE DIVINA','paladin-divine-health'));
  assert(changesByKey(effectByKey(divineHealth,'disease-immunity'),'system.traits.ci.value')[0]?.value === 'diseased', 'Saúde Divina deve conceder imunidade a doença');
  const improvedSmite = packs.features.docs.find(d => managed(d,'DESTRUIÇÃO DIVINA APRIMORADA','paladin-improved-divine-smite'));
  const improvedSmiteAct = actByName(improvedSmite,'Destruição Divina Aprimorada — dano extra');
  assert(improvedSmiteAct?.type === 'damage' && improvedSmiteAct.damage.parts[0]?.number === 1 && improvedSmiteAct.damage.parts[0]?.denomination === 8 && improvedSmiteAct.damage.parts[0]?.types?.includes('radiant'), 'Destruição Divina Aprimorada deve gerar Activity manual de 1d8 radiante');
  assert(effects(improvedSmite).length === 0, 'Destruição Divina Aprimorada não deve usar bônus global de dano');

  const naturalExplorer = packs.features.docs.find(d => managed(d,'EXPLORADOR NATURAL','ranger-natural-explorer'));
  assert(changesByKey(effectByKey(naturalExplorer,'initiative-advantage'),'system.attributes.init.roll.mode')[0]?.value === '1', 'Explorador Natural deve automatizar vantagem em iniciativa');
  const rangerArchery = packs.features.docs.find(d => managed(d,'ARQUEARIA','ranger-archery'));
  assert(changesByKey(effectByKey(rangerArchery,'archery-bonus'),'system.bonuses.rwak.attack')[0]?.value === '2', 'Arquearia do Patrulheiro deve conceder +2 rwak');
  const fastFeet = packs.features.docs.find(d => managed(d,'PÉS RÁPIDOS','ranger-fast-feet'));
  assert(actByName(fastFeet,'Pés Rápidos — Disparada')?.activation?.type === 'bonus', 'Pés Rápidos deve criar Activity de Disparada como ação bônus');
  const vanish = packs.features.docs.find(d => managed(d,'DESAPARECER','ranger-vanish'));
  assert(actByName(vanish,'Desaparecer — Esconder')?.activation?.type === 'bonus', 'Desaparecer deve criar Activity de Esconder como ação bônus');

  const danger = packs.features.docs.find(d => managed(d,'SENTIDO DE PERIGO','barbarian-danger-sense'));
  assert(danger.flags['grimorio-importer'].automation.tier === 'description' && acts(danger).length === 0 && effects(danger).length === 0, 'Sentido de Perigo deve permanecer somente descrição');

  // Auras permanecem intencionalmente sem Active Effect automático porque dependem de consciência e aliados/range.
  for (const name of ['AURA DE PROTEÇÃO','AURA DE CORAGEM']) {
    const aura = packs.features.docs.find(d => managed(d,name));
    assert(aura && effects(aura).length === 0, `${name} não deve receber Active Effect automático na Parte 2`);
  }

  // Reimportação deve preservar contagem, UUIDs e IDs internos dos efeitos.
  const docKey = d => `${d.flags?.['grimorio-importer']?.grimorioId}:${d.flags?.['grimorio-importer']?.featureKey}`;
  const before = {
    features:packs.features.docs.length,
    uuids:new Map(packs.features.docs.map(d=>[docKey(d),d.uuid])),
    effectIds:new Map(packs.features.docs.map(d=>[docKey(d),(d.effects??[]).map(e=>e._id).join(',')]))
  };
  for (const classId of classIds) await materializer.materializeBundle(readJson(path.join(bundlesRoot, `${classId}.json`)), runtime);
  assert(packs.features.docs.length === before.features, 'Reimportação da Fase 11.2 criou características duplicadas');
  for (const doc of packs.features.docs) if (before.uuids.has(docKey(doc))) {
    assert(before.uuids.get(docKey(doc)) === doc.uuid, `UUID alterado na reimportação: ${doc.name}`);
    assert(before.effectIds.get(docKey(doc)) === (doc.effects??[]).map(e=>e._id).join(','), `Active Effect ID alterado na reimportação: ${doc.name}`);
  }

  const mainSource = fs.readFileSync(path.join(moduleRoot,'scripts','main.js'),'utf8');
  for (const token of ['phase11Support','automationCoverage','/grimorio-automacao','Fase 11.2','Active Effects']) assert(mainSource.includes(token), `main.js sem ${token}`);

  console.log('PHASE11_2_MODULE_OK', JSON.stringify({
    app: siteManifest.version,
    module: manifest.version,
    representativeClasses: classIds.length,
    automationProfiles: coverage.profiles,
    nativeActivities: coverage.activities,
    resourceProfiles: coverage.resources,
    activeEffects: coverage.effects,
    passiveEffects: coverage.passiveEffects,
    activityAppliedEffects: coverage.activityEffects,
    tiers: coverage.byTier,
    materializedFeatureItems: packs.features.docs.length,
    profiledFeatureItems: profiledDocs.length,
    rageEffect: true,
    patientDefenseEffect: true,
    passiveImmunities: true,
    archeryBonus: true,
    rangerExpansion: true,
    auraPropagation: false,
    conditionalGlobalDamageEffects: false,
    reimportStable: true,
    worldItemsCreated: 0
  }, null, 2));
})().catch(error => { console.error(error.stack || error); process.exit(1); });
