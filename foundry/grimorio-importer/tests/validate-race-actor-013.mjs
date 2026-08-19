import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import {
  applyRaceBuildToActor,
  inspectActorRace,
  raceActorApplicationSupport
} from "../scripts/race-actor-application.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const bundle = JSON.parse(fs.readFileSync(path.join(ROOT, "examples/races/human-woodlander-rb7.json"), "utf8"));
const MODULE_ID = "grimorio-importer";

function collection(items=[]) {
  const arr = [...items];
  arr.contents = arr;
  arr.get = id => arr.find(item => item.id === id) ?? null;
  arr.map = Array.prototype.map.bind(arr);
  return arr;
}
function raceItem({ id="race-old", name="Raça", grimorioId="", contentHash="", advancements=true }={}) {
  return {
    id, name, type:"race",
    flags:{ [MODULE_ID]: { grimorioId, contentHash } },
    system:{ advancement: advancements ? { a:{} } : {} },
    getFlag(ns,key){ return this.flags?.[ns]?.[key]; },
    toObject(){ return JSON.parse(JSON.stringify({ name:this.name, type:this.type, system:this.system, flags:this.flags })); }
  };
}
function actor(initial=[]) {
  const a = {
    id:"actor-1", name:"Teste", type:"character",
    system:{ details:{ level:5, race:null } },
    items: collection(initial),
    async createEmbeddedDocuments(_type, sources){
      const created = sources.map((source,index)=>raceItem({
        id:`created-${Date.now()}-${index}`,
        name:source.name,
        grimorioId:source.flags?.[MODULE_ID]?.grimorioId,
        contentHash:source.flags?.[MODULE_ID]?.contentHash,
        advancements:Boolean(Object.keys(source.system?.advancement ?? {}).length)
      }));
      this.items.push(...created); return created;
    },
    async deleteEmbeddedDocuments(_type, ids){
      for (const id of ids) { const i=this.items.findIndex(x=>x.id===id); if(i>=0)this.items.splice(i,1); }
      return [];
    }
  };
  return a;
}
function materializedDoc() {
  return {
    id:"comp-race", uuid:"Compendium.grimorio-importer.grimorio-races.Item.comp-race", name:"Humano — Habitante das Florestas", type:"race",
    flags:{ [MODULE_ID]: { grimorioId:bundle.identity.grimorioId, contentHash:bundle.identity.contentHash } },
    system:{ advancement:{ a:{type:"Size"}, b:{type:"ItemGrant"} }, movement:{walk:"9",units:"m"}, senses:{ranges:{darkvision:18},units:"m"}, type:{value:"humanoid"} },
    toObject(){ return JSON.parse(JSON.stringify({ _id:this.id, name:this.name, type:this.type, flags:this.flags, system:this.system, folder:null, ownership:{default:0} })); }
  };
}
function baseRuntime({ a=actor(), confirm=true, disable=false, version="13.351", systemVersion="5.3.3", isGM=true, managerSteps=true }={}) {
  const doc = materializedDoc();
  const runtime = {
    foundryVersion:version, systemId:"dnd5e", systemVersion, isGM, disableAdvancements:disable,
    confirmCalls:0, materializeCalls:0, managerCalls:[], worldItemsCreated:0,
    async confirmReplacement(){ this.confirmCalls++; return confirm; },
    async materializeRaceBuild(){ this.materializeCalls++; return { item:doc, stats:{racesCreated:0,racesUpdated:1}, warnings:[] }; },
    AdvancementManager:{
      forNewItem(actorRef, source){ return { kind:"new", actor:actorRef, source, steps:managerSteps ? [{}] : [] }; },
      forDeletedItem(actorRef, id){ return { kind:"delete", actor:actorRef, id, steps:managerSteps ? [{}] : [] }; }
    },
    async runAdvancementManager(manager){
      this.managerCalls.push(manager.kind);
      if(manager.kind==="delete") await manager.actor.deleteEmbeddedDocuments("Item",[manager.id],{isAdvancement:true});
      else await manager.actor.createEmbeddedDocuments("Item",[manager.source],{isAdvancement:true});
      return {completed:true};
    },
    async createEmbeddedItems(actorRef,sources){ return actorRef.createEmbeddedDocuments("Item",sources,{isAdvancement:true}); },
    async deleteEmbeddedItems(actorRef,ids){ return actorRef.deleteEmbeddedDocuments("Item",ids,{isAdvancement:true}); }
  };
  return { runtime, a, doc };
}

const support = raceActorApplicationSupport();
assert.equal(support.phase,"RB-8");
assert.equal(support.actorApplication,true);
assert.equal(support.replacementConfirmation,"required");
assert.equal(support.multipleRacePolicy,"block");
assert.equal(support.worldItemsExpected,0);

{
  const {runtime} = baseRuntime();
  await assert.rejects(()=>applyRaceBuildToActor(bundle,{actor:null,runtime}),/Nenhum Actor/);
}
{
  const {runtime,a}=baseRuntime({isGM:false});
  await assert.rejects(()=>applyRaceBuildToActor(bundle,{actor:a,runtime}),/Somente um Mestre/);
}
{
  const {runtime,a}=baseRuntime({version:"13.350"});
  await assert.rejects(()=>applyRaceBuildToActor(bundle,{actor:a,runtime}),/fora do perfil homologado/);
}
{
  const {runtime,a}=baseRuntime({disable:true});
  await assert.rejects(()=>applyRaceBuildToActor(bundle,{actor:a,runtime}),/Advancements desabilitada/);
}
{
  const a=actor([raceItem({id:"a"}),raceItem({id:"b"})]);
  const {runtime}=baseRuntime({a});
  await assert.rejects(()=>applyRaceBuildToActor(bundle,{actor:a,runtime}),/possui 2 Items de raça/);
  assert.equal(runtime.materializeCalls,0);
}
{
  const {runtime,a}=baseRuntime();
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.ok,true); assert.equal(result.state,"applied"); assert.equal(result.replaced,false);
  assert.deepEqual(runtime.managerCalls,["new"]); assert.equal(runtime.materializeCalls,1); assert.equal(result.worldItemsCreated,0);
  assert.equal(inspectActorRace(a,bundle).state,"same");
  const second=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(second.state,"already-applied"); assert.equal(runtime.materializeCalls,1); assert.deepEqual(runtime.managerCalls,["new"]);
}
{
  const old=raceItem({id:"old",name:"Elfo",grimorioId:"race-build:elf:forest:x",contentHash:"old"});
  const a=actor([old]); const {runtime}=baseRuntime({a,confirm:false});
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.state,"replacement-cancelled"); assert.equal(runtime.confirmCalls,1); assert.equal(runtime.materializeCalls,0); assert.deepEqual(runtime.managerCalls,[]); assert.equal(a.items[0],old);
}
{
  const old=raceItem({id:"old",name:"Elfo",grimorioId:"race-build:elf:forest:x",contentHash:"old"});
  const a=actor([old]); const {runtime}=baseRuntime({a,confirm:true});
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.ok,true); assert.equal(result.replaced,true); assert.deepEqual(runtime.managerCalls,["delete","new"]); assert.equal(runtime.confirmCalls,1); assert.equal(a.items.length,1); assert.equal(inspectActorRace(a,bundle).state,"same");
}
{
  const old=raceItem({id:"old",name:"Humano antigo",grimorioId:bundle.identity.grimorioId,contentHash:"stale"});
  const a=actor([old]); const {runtime}=baseRuntime({a,confirm:true});
  assert.equal(inspectActorRace(a,bundle).state,"outdated");
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.replaced,true); assert.equal(runtime.confirmCalls,1);
}
{
  const old=raceItem({id:"old",name:"Elfo",grimorioId:"other",contentHash:"old",advancements:false});
  const a=actor([old]); const {runtime}=baseRuntime({a,confirm:true,managerSteps:false});
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.replacementMethod,"direct-no-advancement"); assert.equal(result.applicationMethod,"direct-no-advancement"); assert.equal(a.items.length,1);
}
{
  const old=raceItem({id:"old",name:"Elfo",grimorioId:"other",contentHash:"old"});
  const a=actor([old]); const {runtime}=baseRuntime({a,confirm:true});
  runtime.runAdvancementManager=async manager=> manager.kind==="delete" ? {completed:false,cancelled:true} : {completed:true};
  const result=await applyRaceBuildToActor(bundle,{actor:a,runtime});
  assert.equal(result.state,"removal-cancelled"); assert.equal(runtime.materializeCalls,1);
}

const source=fs.readFileSync(path.join(ROOT,"foundry/grimorio-importer/scripts/race-actor-application.js"),"utf8");
assert.match(source,/AdvancementManager\.forNewItem|forNewItem/);
assert.match(source,/forDeletedItem/);
assert.doesNotMatch(source,/game\.items\.(create|set)|Item\.implementation\.create\([^,)]*\)/);

console.log("[RB-8] Race Actor Application: PASS");
