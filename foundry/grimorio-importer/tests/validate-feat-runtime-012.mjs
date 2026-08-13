import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFeatSource } from "../scripts/feat-materializer.js";
import { compileFeatAutomation, featAutomationSupport } from "../scripts/feat-automation.js";
import {
  featRuntimeSupport, validateFeatRuntimeCoverage, applyWarCasterConcentrationAdvantage,
  applyDurableHitDieMinimum, applyHeavyArmorMasterDamageReduction, syncConditionalFeatEffects,
  preUseFeatRuntimeActivity, postUseFeatRuntimeActivity
} from "../scripts/feat-runtime.js";
import { IMPORTER_VERSION, IMPORTER_BUILD } from "../scripts/version.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "examples", "feats", "phb-2014-feats-package-v2.json"), "utf8"));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const clone = value => JSON.parse(JSON.stringify(value));
const byId = id => pkg.bundles.find(bundle => bundle.identity.grimorioId === id);
const source = id => buildFeatSource(byId(id));

assert(IMPORTER_VERSION === "0.12.0", `Versão inesperada: ${IMPORTER_VERSION}`);
assert(IMPORTER_BUILD.phase === "0.12.0 Stable" && IMPORTER_BUILD.label === "0.12.0 Stable", "Build FA-4 não sincronizada");
const automationSupport = featAutomationSupport();
const runtimeSupport = featRuntimeSupport();
assert(automationSupport.phase === "FA-4" && automationSupport.compilerVersion === 3, "Compilador FA-4 incorreto");
assert(automationSupport.deferredToFa4.length === 0, "Fila FA-4 ainda contém mecânicas diferidas");
assert(runtimeSupport.phase === "FA-4" && runtimeSupport.runtimeRecordsExpectedFromPhb2014 === 56, "Contrato runtime FA-4 incorreto");

const aggregate = { plans:0, advancementDocuments:0, effects:0, activities:0, uses:0, runtime:0, deferredAdvancements:0, deferredEffects:0, deferredRuntime:0 };
for (const bundle of pkg.bundles) {
  const meta = compileFeatAutomation(bundle).metadata;
  aggregate.plans += meta.materialized.advancements;
  aggregate.advancementDocuments += meta.materialized.advancementDocuments;
  aggregate.effects += meta.materialized.effects;
  aggregate.activities += meta.materialized.activities;
  aggregate.uses += meta.materialized.uses;
  aggregate.runtime += meta.materialized.runtime;
  aggregate.deferredAdvancements += meta.deferred.advancements;
  aggregate.deferredEffects += meta.deferred.effects;
  aggregate.deferredRuntime += meta.deferred.runtime;
}
assert(aggregate.plans === 28 && aggregate.advancementDocuments === 26, "Advancements regrediram na FA-4");
assert(aggregate.effects === 10, `Esperados 10 Effects materializados; encontrados ${aggregate.effects}`);
assert(aggregate.activities === 22 && aggregate.uses === 2, "Activities/Uses regrediram na FA-4");
assert(aggregate.runtime === 56, `Esperados 56 descriptors runtime materializados; encontrados ${aggregate.runtime}`);
assert(aggregate.deferredAdvancements === 0 && aggregate.deferredEffects === 0 && aggregate.deferredRuntime === 0, `Ainda existem itens diferidos: ${JSON.stringify(aggregate)}`);

const coverage = validateFeatRuntimeCoverage(pkg.bundles);
assert(coverage.ok && coverage.records.length === 56 && coverage.unknown.length === 0, "Cobertura runtime 56/56 incompleta");
assert(runtimeSupport.behaviorDefinitions === 53, `Esperados 53 behaviors únicos; encontrados ${runtimeSupport.behaviorDefinitions}`);
assert(runtimeSupport.noGlobalApproximation === true, "FA-4 deve preservar política contra aproximação global");

// Os 3 Effects antes diferidos agora existem como markers gerenciados, sem bônus global falso.
for (const [id, mechanic] of [
  ["phb-2014-especialista-em-briga", "unarmed-damage-minimum"],
  ["phb-2014-maestria-em-armadura-media", "conditional-armor-rule"],
  ["phb-2014-maestria-em-armadura-pesada", "conditional-damage-reduction"]
]) {
  const feat = source(id);
  const effect = feat.effects.find(row => row.flags?.["grimorio-importer"]?.mechanic === mechanic);
  assert(effect, `${id}: marker Effect ${mechanic} ausente`);
  assert(effect.flags["grimorio-importer"].runtimeManaged === true, `${id}: Effect deveria ser runtimeManaged`);
  assert((effect.changes ?? []).length === 0, `${id}: marker condicional não pode aplicar mudança global direta`);
}

// Sortudo: a Activity agora rola o d20 adicional e consome o uso, sem escolher silenciosamente o resultado.
const lucky = source("phb-2014-sortudo");
const luckActivity = Object.values(lucky.system.activities)[0];
assert(luckActivity.roll?.formula === "1d20" && luckActivity.roll.visible === true, "Sortudo deveria fornecer o d20 adicional pela Activity");
assert(luckActivity.consumption.targets.some(row => row.type === "itemUses" && row.value === "1"), "Sortudo deveria consumir 1 Ponto de Sorte");

function wrapFeat(id) {
  const data = source(id);
  return { ...data, id:`feat-${id}`, documentName:"Item", _source:data, get flags(){ return this._source.flags; }, get system(){ return this._source.system; } };
}
function setPath(obj, pathString, value) {
  const parts = pathString.split("."); let cursor = obj;
  for (let i=0;i<parts.length-1;i+=1) cursor = cursor[parts[i]] ??= {};
  cursor[parts.at(-1)] = value;
}
function actorBase({ feats=[], items=[], system={} }={}) {
  const actor = {
    id:`actor-${Math.random()}`, name:"Actor Teste", documentName:"Actor",
    system:{ abilities:{ dex:{value:10,mod:0}, con:{value:10,mod:0} }, attributes:{hp:{value:10,max:20}}, ...clone(system) },
    flags:{ "grimorio-importer":{} }, effects:[], items:[],
    async createEmbeddedDocuments(type, sources){ assert(type === "ActiveEffect", "Tipo embedded inesperado"); for(const source of sources)this.effects.push({...clone(source),id:`ae${this.effects.length+1}`}); return this.effects.slice(-sources.length); },
    async deleteEmbeddedDocuments(type, ids){ assert(type === "ActiveEffect", "Tipo embedded inesperado"); this.effects=this.effects.filter(effect=>!ids.includes(effect.id)); return []; },
    async setFlag(scope,key,value){ setPath(this.flags[scope] ??= {}, key, clone(value)); return value; },
    async unsetFlag(scope,key){ const parts=key.split("."); let cursor=this.flags[scope]??{}; for(let i=0;i<parts.length-1;i+=1)cursor=cursor?.[parts[i]]??{}; delete cursor[parts.at(-1)]; return true; }
  };
  actor.items=[...feats,...items];
  for(const item of actor.items)item.actor=actor;
  return actor;
}

// Conjurador de Guerra: vantagem somente no hook de concentração.
const warActor = actorBase({ feats:[wrapFeat("phb-2014-conjurador-de-guerra")] });
const concentrationConfig = { subject:warActor, advantage:false, options:{} };
assert(applyWarCasterConcentrationAdvantage(concentrationConfig) === true, "Conjurador de Guerra não ativou runtime de concentração");
assert(concentrationConfig.advantage === true && concentrationConfig.options.advantage === true, "Vantagem de concentração não foi aplicada ao config do roll");

// Resistente: mínimo 2x mod CON, mínimo absoluto 2.
const durableActor = actorBase({ feats:[wrapFeat("phb-2014-resistente")], system:{ abilities:{dex:{value:10,mod:0},con:{value:16,mod:3}}, attributes:{hp:{value:10,max:20}} } });
const hitDieData = { subject:durableActor, updates:{ actor:{ "system.attributes.hp.value":12 } } };
assert(applyDurableHitDieMinimum([{total:2}], hitDieData) === true, "Resistente não ajustou rolagem abaixo do mínimo");
assert(hitDieData.updates.actor["system.attributes.hp.value"] === 16, `Resistente esperava HP 16; recebeu ${hitDieData.updates.actor["system.attributes.hp.value"]}`);

// Maestria em Armadura Pesada: -3 uma vez no dano físico qualificado, não em ataque mágico.
const heavyArmor = { id:"armor", type:"equipment", name:"Armadura de Placas", system:{equipped:true, armor:{type:"heavy"}, properties:[]} };
const mundaneWeapon = { id:"weapon", type:"weapon", name:"Espada", system:{equipped:true, properties:[]} };
const heavyActor = actorBase({ feats:[wrapFeat("phb-2014-maestria-em-armadura-pesada")], items:[heavyArmor] });
const damages = [{type:"slashing",value:5},{type:"fire",value:4}];
const damageOptions = { item:mundaneWeapon, activity:{type:"attack",item:mundaneWeapon} };
assert(applyHeavyArmorMasterDamageReduction(heavyActor, damages, damageOptions) === true, "Maestria em Armadura Pesada não reduziu ataque não mágico");
assert(damages[0].value === 2 && damages[1].value === 4, "Redução deveria afetar somente 3 pontos do dano físico");
const magicalWeapon = { ...mundaneWeapon, system:{...mundaneWeapon.system,properties:["mgc"]} };
const magicalDamages = [{type:"slashing",value:5}];
assert(applyHeavyArmorMasterDamageReduction(heavyActor, magicalDamages, {item:magicalWeapon,activity:{type:"attack",item:magicalWeapon}}) === false, "Ataque mágico não deveria receber redução");
assert(magicalDamages[0].value === 5, "Dano mágico foi alterado incorretamente");

// Effects condicionais sincronizados por equipamento: Ambidestro e Maestria em Armadura Média.
const sword1={id:"w1",type:"weapon",name:"Espada 1",system:{equipped:true,type:{value:"martialM"},properties:[]}};
const sword2={id:"w2",type:"weapon",name:"Espada 2",system:{equipped:true,type:{value:"martialM"},properties:[]}};
const medium={id:"med",type:"equipment",name:"Meia-Armadura",system:{equipped:true,armor:{type:"medium"},properties:["stealthDisadvantage"]}};
const syncActor=actorBase({feats:[wrapFeat("phb-2014-ambidestro"),wrapFeat("phb-2014-maestria-em-armadura-media")],items:[sword1,sword2,medium],system:{abilities:{dex:{value:16,mod:3},con:{value:10,mod:0}},attributes:{hp:{value:10,max:20}}}});
const sync1=await syncConditionalFeatEffects(syncActor);
assert(sync1.changed===2 && syncActor.effects.length===2,"Effects condicionais de equipamento não foram criados");
assert(sync1.states.dualWielder===true && sync1.states.mediumArmorMasterAc===true,"Estados condicionais incorretos");
sword2.system.equipped=false;
const sync2=await syncConditionalFeatEffects(syncActor);
assert(sync2.changed===1 && syncActor.effects.length===1,"Effect de Ambidestro não foi removido ao deixar de empunhar duas armas");
assert(syncActor.effects[0].flags["grimorio-importer"].featId==="phb-2014-maestria-em-armadura-media","Effect restante deveria ser da Maestria em Armadura Média");
// Uma arma two-handed equipada junto de uma arma de uma mão não satisfaz "uma arma em cada mão".
sword2.system.equipped=true;
sword2.system.properties=["two"];
const sync3=await syncConditionalFeatEffects(syncActor);
assert(sync3.states.dualWielder===false,"Ambidestro não pode considerar arma de duas mãos como uma das duas armas empunhadas");
assert(!syncActor.effects.some(effect=>effect.flags?.["grimorio-importer"]?.featId==="phb-2014-ambidestro"),"Effect de Ambidestro reapareceu com arma two-handed");

// Curandeiro: uso do kit + cooldown por alvo quando o contexto de alvo está disponível.
const healerFeat=wrapFeat("phb-2014-curandeiro");
const kit={id:"kit",type:"consumable",name:"Kit de Primeiros-Socorros",system:{uses:{spent:0,max:10}},async update(data){for(const [k,v] of Object.entries(data))setPath(this,k,v);return this;}};
const healerActor=actorBase({feats:[healerFeat],items:[kit]});
const healActivity=Object.values(healerFeat.system.activities).find(row=>row.flags?.["grimorio-importer"]?.automationKey==="treat-wounds");
healActivity.item=healerFeat; healActivity.actor=healerActor;
const target=actorBase(); target.name="Alvo";
const usage={targets:new Set([{actor:target}])};
assert(await preUseFeatRuntimeActivity(healActivity,usage)===true,"Curandeiro deveria permitir primeiro uso");
assert(await postUseFeatRuntimeActivity(healActivity,usage,{targets:usage.targets})===true,"Curandeiro não registrou consumo/cooldown");
assert(kit.system.uses.spent===1,"Curandeiro não consumiu uso do Kit de Primeiros-Socorros");
assert(await preUseFeatRuntimeActivity(healActivity,usage)===false,"Curandeiro deveria bloquear o mesmo alvo antes do descanso");

console.log("GRIMORIO_IMPORTER_FA4_RUNTIME_OK", JSON.stringify({
  importer:IMPORTER_VERSION,
  feats:pkg.bundles.length,
  materialized:aggregate,
  runtimeCoverage:{records:coverage.records.length,behaviors:runtimeSupport.behaviorDefinitions,modes:runtimeSupport.behaviorModes},
  verifiedChecks:["war-caster-concentration","durable-hit-die","heavy-armor-reduction","dual-wielder-ac","medium-armor-master-ac","healer-kit-cooldown"],
  noGlobalApproximation:true
},null,2));
