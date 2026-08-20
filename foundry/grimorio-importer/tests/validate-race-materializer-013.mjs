import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { materializeRaceBuild, raceMaterializerSupport, buildRacialFeatureSource } from "../scripts/race-materializer.js";
import { validateRaceBuildBundle } from "../scripts/race-validator.js";
import { PACKS } from "../scripts/pack-storage.js";
import { IMPORTER_VERSION, IMPORTER_BUILD } from "../scripts/version.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const importerRoot = path.resolve(here, "..");
const projectRoot = path.resolve(importerRoot, "../..");
const clone = value => JSON.parse(JSON.stringify(value));
const runtimeInfo = { foundryVersion:"13.351", systemId:"dnd5e", systemVersion:"5.3.3" };

assert.equal(IMPORTER_VERSION, "0.13.0-rc.1");
assert.equal(IMPORTER_BUILD.phase, "0.13.0 RC.1");
assert.equal(raceMaterializerSupport().materialization, true);
assert.equal(raceMaterializerSupport().actorApplication, false);

const fixture = async name => JSON.parse(await fs.readFile(path.join(projectRoot, "examples/races", name), "utf8"));
const humanLegacy = await fixture("human-woodlander-rb4.json");
const emberashLegacy = await fixture("hanyou-emberash-rb4.json");
const humanRb6 = await fixture("human-woodlander-rb6.json");
const emberashRb6 = await fixture("hanyou-emberash-rb6.json");
const human = await fixture("human-woodlander-rb7.json");
const emberash = await fixture("hanyou-emberash-rb7.json");
for (const bundle of [humanLegacy, emberashLegacy, humanRb6, emberashRb6, human, emberash]) assert.equal(validateRaceBuildBundle(bundle, runtimeInfo).ok, true);
assert.equal(human.identity.selectionHash, humanLegacy.identity.selectionHash);
assert.equal(human.identity.contentHash, humanLegacy.identity.contentHash);
assert.equal(human.identity.selectionHash, humanRb6.identity.selectionHash);
assert.equal(human.identity.contentHash, humanRb6.identity.contentHash);
assert.equal(emberash.identity.selectionHash, emberashLegacy.identity.selectionHash);
assert.equal(emberash.identity.selectionHash, emberashRb6.identity.selectionHash);

function setPath(obj, pathString, value) {
  const parts = pathString.split("."); let cur = obj;
  for (let i=0;i<parts.length-1;i+=1) { if (!cur[parts[i]] || typeof cur[parts[i]] !== "object") cur[parts[i]]={}; cur=cur[parts[i]]; }
  cur[parts.at(-1)] = clone(value);
}
function applyUpdate(source, data) { for (const [key,value] of Object.entries(data)) key.includes(".") ? setPath(source,key,value) : source[key]=clone(value); }
let seq=0;
class MockItem {
  constructor(data, collection) { this.id=`r${String(++seq).padStart(7,"0")}`; this.uuid=`Compendium.${collection}.Item.${this.id}`; this.pack=collection; this._source=clone(data); this.name=data.name; this.type=data.type; }
  get flags(){return this._source.flags;} get system(){return this._source.system;} getFlag(scope,key){return this._source.flags?.[scope]?.[key];}
  async update(data){applyUpdate(this._source,data);this.name=this._source.name;this.type=this._source.type;return this;}
}
class MockPack { constructor(spec){this.collection=spec.collection;this.label=spec.label;this.locked=true;this.docs=[];} async getDocuments(){return [...this.docs];} async configure(data){if ("locked" in data)this.locked=Boolean(data.locked);} }
const packs=Object.fromEntries(Object.entries(PACKS).map(([key,spec])=>[key,new MockPack(spec)]));
const runtime={...runtimeInfo,isGM:true,getPack:key=>packs[key]??null,listPackItems:async key=>packs[key].getDocuments(),createPackItem:async(key,data)=>{assert.equal(packs[key].locked,false);const d=new MockItem(data,PACKS[key].collection);packs[key].docs.push(d);return d;},updatePackItem:async(key,doc,data)=>{assert.equal(packs[key].locked,false);return doc.update(data);},setPackLocked:async(key,locked)=>{packs[key].locked=Boolean(locked);},isPackLocked:key=>packs[key].locked,listWorldItems:()=>[]};

const humanFirst=await materializeRaceBuild(human,runtime);
assert.equal(humanFirst.ok,true);
assert.equal(humanFirst.stats.racesCreated,1);
assert.equal(humanFirst.stats.racialFeaturesCreated,6);
assert.equal(packs.races.docs.length,1);
assert.equal(packs.racialFeatures.docs.length,6);
assert.equal(Object.values(packs).every(pack=>pack.locked),true);
const humanItem=packs.races.docs[0];
assert.equal(humanItem.type,"race");
assert.equal(Array.isArray(humanItem.system.advancement),false);
assert.equal(humanItem.system.movement.walk,"9");
assert.equal(humanItem.system.movement.units,"m");
assert.equal("bonus" in humanItem.system.movement,false);
assert.equal("special" in humanItem.system.movement,false);
assert.equal(humanItem.system.senses.ranges.darkvision,18);
assert.equal(humanItem.system.type.value,"humanoid");
assert.equal("swarm" in humanItem.system.type,false);
const humanAdv=Object.values(humanItem.system.advancement);
assert.equal(humanAdv.find(a=>a.type==="Size")?.configuration?.sizes?.[0],"med");
const humanAsi=humanAdv.find(a=>a.type==="AbilityScoreImprovement");
assert.equal(humanAsi.configuration.fixed.wis,2);
assert.equal(humanAsi.configuration.fixed.dex,1);
assert.deepEqual([...humanAsi.configuration.locked].sort(),["cha","con","dex","int","str","wis"]);
const humanGrant=humanAdv.find(a=>a.type==="ItemGrant");
assert.equal(humanGrant.configuration.items.length,6);
assert.equal(humanGrant.configuration.items.every(row=>row.uuid.startsWith(`Compendium.${PACKS.racialFeatures.collection}.Item.`)),true);
const language=humanAdv.find(a=>a.type==="Trait" && a.title==="Idiomas");
assert.equal(language.configuration.grants.includes("languages:standard:common"),true);
assert.equal(language.configuration.choices.length,0);
assert.equal(humanFirst.warnings.some(row=>/idioma\(s\) adicional/i.test(row)),true);
assert.equal(humanFirst.stats.worldItemsCreated,0);
assert.equal(humanFirst.stats.racialEffectsMaterialized,0);
assert.equal(humanFirst.stats.racialTraitAdvancementsMaterialized,2);
assert.equal(humanFirst.stats.racialUsesMaterialized,0);
assert.equal(humanFirst.stats.racialActivitiesMaterialized,1);
assert.equal(humanFirst.stats.racialAssistedChoices,2);
assert.equal(humanFirst.stats.racialRuntimeDescriptors,6);
assert.equal(humanItem.getFlag("grimorio-importer","automationPhase"),"RB-7");
assert.equal(humanItem.getFlag("grimorio-importer","automationPolicy"),"native-safe-first+native-choice+assisted+runtime-descriptor+description");
const bonusFeatureDoc=packs.racialFeatures.docs.find(d=>d.getFlag("grimorio-importer","grimorioId")==="subrace:human:woodlander:bonus-proficiency");
assert.equal(bonusFeatureDoc.getFlag("grimorio-importer","nativePolicy"),"native-choice");
assert.equal(bonusFeatureDoc.getFlag("grimorio-importer","automation")?.assisted?.length,0);
const terrainFeatureDoc=packs.racialFeatures.docs.find(d=>d.getFlag("grimorio-importer","grimorioId")==="subrace:human:woodlander:terrain-adept");
assert.equal(terrainFeatureDoc.getFlag("grimorio-importer","nativePolicy"),"runtime");
assert.equal(Object.values(terrainFeatureDoc.system.activities)[0]?.activation?.type,"bonus");
const combatFeatureDoc=packs.racialFeatures.docs.find(d=>d.getFlag("grimorio-importer","grimorioId")==="human:legacy:combat-training");
assert.equal(combatFeatureDoc.getFlag("grimorio-importer","nativePolicy"),"assisted");
assert.ok(combatFeatureDoc.getFlag("grimorio-importer","automation")?.assisted?.some(row=>row.kind==="actor-current-proficiency"));

const sharedFeature = human.resolved.features.legacy[0];
const sourceDominant = buildRacialFeatureSource(human, { ...sharedFeature, bucket:"legacy", owner:{ ...sharedFeature.owner, origin:"dominant" } });
const sourceSecondary = buildRacialFeatureSource(human, { ...sharedFeature, bucket:"mixed", owner:{ ...sharedFeature.owner, origin:"secondary" } });
assert.deepEqual(sourceDominant, sourceSecondary, "Característica reutilizável não pode variar conforme a origem dominante/secundária do build.");

const beforeHumanUuid=humanItem.uuid;
const beforeFeatureUuids=new Map(packs.racialFeatures.docs.map(d=>[d.getFlag("grimorio-importer","grimorioId"),d.uuid]));
const humanSecond=await materializeRaceBuild(human,runtime);
assert.equal(humanSecond.stats.racesCreated,0); assert.equal(humanSecond.stats.racesUpdated,1);
assert.equal(humanSecond.stats.racialFeaturesCreated,0); assert.equal(humanSecond.stats.racialFeaturesUpdated,6);
assert.equal(packs.races.docs[0].uuid,beforeHumanUuid);
for(const d of packs.racialFeatures.docs) assert.equal(d.uuid,beforeFeatureUuids.get(d.getFlag("grimorio-importer","grimorioId")));
assert.equal(Object.values(packs).every(pack=>pack.locked),true);

const emberFirst=await materializeRaceBuild(emberash,runtime);
assert.equal(emberFirst.stats.racesCreated,1);
assert.equal(emberFirst.stats.racialFeaturesCreated,9);
assert.equal(packs.races.docs.length,2);
assert.equal(packs.racialFeatures.docs.length,15);
const emberItem=packs.races.docs.find(d=>d.getFlag("grimorio-importer","grimorioId")===emberash.identity.grimorioId);
assert.equal(emberItem.system.movement.walk,"9");
assert.equal(emberItem.system.senses.ranges.darkvision,18);
assert.equal(emberItem.system.type.value,"custom");
assert.match(emberItem.system.type.custom,/Corruptor \(Yokai\)/);
assert.match(emberItem.system.type.custom,/Humanoide/);
const emberAdv=Object.values(emberItem.system.advancement);
assert.equal(emberAdv.find(a=>a.type==="Size")?.configuration?.sizes?.[0],"sm");
const emberAsi=emberAdv.find(a=>a.type==="AbilityScoreImprovement");
assert.equal(emberAsi.configuration.fixed.str,2);
assert.equal(emberAsi.configuration.fixed.dex,2);
assert.equal(emberAsi.configuration.fixed.con,-2);
assert.equal(emberAdv.find(a=>a.type==="ItemGrant").configuration.items.length,9);
assert.equal(emberFirst.stats.worldItemsCreated,0);
assert.equal(Object.values(packs).every(pack=>pack.locked),true);

console.log("GRIMORIO_IMPORTER_RB7_RACE_MATERIALIZER_OK", JSON.stringify({importer:IMPORTER_VERSION,phase:IMPORTER_BUILD.phase,human:{race:1,features:6,advancements:humanAdv.length},emberash:{race:1,features:9,advancements:emberAdv.length},reimportStable:true,actorApplication:false,worldItems:0},null,2));
