import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  compileRaceAutomation,
  compileRacialFeatureAutomation,
  raceAutomationSupport,
  RACE_AUTOMATION_PHASE,
  RACE_AUTOMATION_SCHEMA,
  RACE_AUTOMATION_SCHEMA_VERSION
} from "../scripts/race-automation.js";
import { IMPORTER_VERSION, IMPORTER_BUILD } from "../scripts/version.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const importerRoot = path.resolve(here, "..");
const projectRoot = path.resolve(importerRoot, "../..");
const clone = value => JSON.parse(JSON.stringify(value));

assert.equal(IMPORTER_VERSION, "0.13.0-beta.1");
assert.equal(IMPORTER_BUILD.phase, "RB-8");
assert.equal(RACE_AUTOMATION_PHASE, "RB-7");
assert.equal(RACE_AUTOMATION_SCHEMA, "grimorio-foundry-race-automation-plan");
assert.equal(RACE_AUTOMATION_SCHEMA_VERSION, 1);

const support = raceAutomationSupport();
assert.equal(support.phase, "RB-7");
assert.equal(support.globalHooks, false);
assert.equal(support.actorApplication, false);
assert.equal(support.assistedChoices, true);
assert.equal(support.runtimeDescriptors, true);
assert.ok(support.activeEffects.includes("damage-resistance"));
assert.ok(support.activeEffects.includes("fixed-skill-expertise"));
assert.ok(support.traitAdvancements.includes("skill-choice"));
assert.ok(support.raceProjection.includes("static-senses"));

const human = JSON.parse(await fs.readFile(path.join(projectRoot, "examples/races/human-woodlander-rb6.json"), "utf8"));
const automation = compileRaceAutomation(human);
assert.equal(automation.phase, "RB-7");
assert.equal(automation.summary.features, 6);
assert.equal(automation.race.movement.walk, "9");
assert.equal(automation.race.movement.units, "m");
assert.equal(automation.race.senses.ranges.darkvision, 18);

const raceAdvancements = Object.values(automation.race.advancements);
const skillChoice = raceAdvancements.find(row => row.title === "Escolha de Perícia");
assert.ok(skillChoice);
assert.equal(skillChoice.type, "Trait");
assert.deepEqual(skillChoice.configuration.choices, [{ count: 1, pool: ["skills:sur", "skills:ste"] }]);
const weaponChoice = raceAdvancements.find(row => row.title === "Escolha de Arma");
assert.ok(weaponChoice);
assert.equal(weaponChoice.configuration.choices[0].count, 3);
assert.ok(weaponChoice.configuration.choices[0].pool.includes("weapon:longsword"));
assert.ok(weaponChoice.configuration.choices[0].pool.length > 20);

const plans = automation.featurePlans;
const ingrained = plans["core:human:base:ingrained-skill"];
assert.equal(ingrained.tier, "runtime");
assert.ok(ingrained.assisted.some(row => row.kind === "actor-choice"));
assert.equal(ingrained.native.advancements.length, 0);
assert.ok(ingrained.runtime.some(row => row.kind === "proficiency-scaling"));

const bonusProficiency = plans["subrace:human:woodlander:bonus-proficiency"];
assert.equal(bonusProficiency.tier, "native-choice");
assert.equal(bonusProficiency.assisted.length, 0, "Escolha plenamente modelada por Trait Advancement não deve continuar como pendência genérica do Actor.");

const combatTraining = plans["human:legacy:combat-training"];
assert.equal(combatTraining.tier, "assisted");
assert.equal(combatTraining.native.advancements.length, 1);
assert.ok(combatTraining.assisted.some(row => row.kind === "actor-current-proficiency"));

const terrain = plans["subrace:human:woodlander:terrain-adept"];
assert.equal(terrain.native.activity?.activation?.type, "bonus");
assert.ok(terrain.runtime.some(row => row.kind === "conditional-rule"));
assert.ok(terrain.runtime.some(row => row.kind === "proficiency-scaling"));

const boundLuck = plans["human:legacy:bound-luck"];
assert.equal(boundLuck.tier, "runtime");
assert.ok(boundLuck.runtime.some(row => row.kind === "conditional-rule"));

function synthetic(description, key="synthetic:test") {
  return { key, name: "Teste Sintético", originalName: "Synthetic Test", description, owner:{raceId:"human"}, role:"legacy" };
}
function bundleWith(feature) {
  const copy = clone(human);
  copy.resolved.features = { core:[feature], subrace:[], legacy:[], mixed:[], secondaryHeritage:[], bloodline:[], extraLegacy:[], mutations:[], automaticSecondary:[] };
  copy.readiness.pendingFoundryChoices = [];
  return copy;
}

const staticDamage = compileRacialFeatureAutomation(synthetic("Você possui resistência a dano de frio e a dano de fogo."), human);
assert.equal(staticDamage.tier, "native");
assert.equal(staticDamage.native.effects.length, 1);
assert.equal(staticDamage.native.effects[0].transfer, true);
const drChanges = staticDamage.native.effects[0].changes.filter(row => row.key === "system.traits.dr.value");
assert.deepEqual(drChanges.map(row => row.value).sort(), ["cold", "fire"]);

const staticCondition = compileRacialFeatureAutomation(synthetic("Você é imune às condições Enfeitiçado e Amedrontado."), human);
assert.equal(staticCondition.native.effects.length, 1);
const ci = staticCondition.native.effects[0].changes.filter(row => row.key === "system.traits.ci.value").map(row => row.value).sort();
assert.deepEqual(ci, ["charmed", "frightened"]);

const expertise = compileRacialFeatureAutomation(synthetic("Você ganha Especialização na perícia Sobrevivência."), human);
assert.equal(expertise.native.effects[0].changes[0].key, "system.skills.sur.value");
assert.equal(expertise.native.effects[0].changes[0].value, "2");

const damageChoice = compileRacialFeatureAutomation(synthetic("Você possui resistência a dano de frio ou trovão, escolhendo um desses tipos quando recebe esta característica."), human);
assert.equal(damageChoice.native.effects.length, 0, "Escolha de resistência não pode conceder simultaneamente ambas as resistências.");
assert.ok(damageChoice.assisted.some(row => row.kind === "damage-resistance-choice"));

const movementFeature = synthetic("Você possui deslocamento de escalada igual ao seu deslocamento base.", "synthetic:climb");
const movement = compileRaceAutomation(bundleWith(movementFeature));
assert.equal(movement.race.movement.climb, "9");

const conditionalMovement = synthetic("Quando realizar a ação Disparada, você recebe deslocamento de escalada igual ao seu deslocamento base até o fim do turno.", "synthetic:conditional-climb");
const conditional = compileRaceAutomation(bundleWith(conditionalMovement));
assert.equal(conditional.race.movement.climb, "", "Movimento temporário/condicional não pode virar deslocamento racial permanente.");

const belabored = synthetic("Você possui deslocamento de voo laborioso igual ao seu deslocamento base.", "synthetic:belabored");
const belaboredPlan = compileRaceAutomation(bundleWith(belabored));
assert.equal(belaboredPlan.race.movement.fly, "", "Belabored Flight é mecânica própria e não pode virar fly nativo padrão.");

const seasonal = synthetic("Forma Sazonal. Você possui resistência a dano de frio durante o inverno e resistência a dano de fogo durante o verão.", "synthetic:seasonal");
const seasonalPlan = compileRacialFeatureAutomation(seasonal, human);
assert.equal(seasonalPlan.native.effects.length, 0, "Forma sazonal não pode materializar escolhas temporárias como efeito permanente.");
assert.equal(seasonalPlan.native.senses.length, 0, "Forma sazonal não pode projetar um sentido temporário como sense racial permanente.");

const conditionalAcrossSentences = compileRacialFeatureAutomation(synthetic("Enquanto estiver Inconsciente, seu corpo assume uma forma rochosa. Nessas condições, você possui resistência a dano contundente, perfurante e cortante."), human);
assert.equal(conditionalAcrossSentences.native.effects.length, 0, "Condição estabelecida na frase anterior não pode ser perdida ao materializar resistência estática.");
assert.ok(conditionalAcrossSentences.runtime.some(row => row.kind === "conditional-rule"));

const temporarySense = compileRacialFeatureAutomation(synthetic("Quando fizer isso, você recebe Visão às Cegas a 3 metros até o início do próximo turno."), human);
assert.equal(temporarySense.native.senses.length, 0, "Sense temporário não pode virar sense racial permanente.");

const usesAndActivity = compileRacialFeatureAutomation(synthetic("Como uma ação bônus, você pode ativar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência."), human);
assert.equal(usesAndActivity.native.uses.max, "@prof");
assert.deepEqual(usesAndActivity.native.uses.recovery.map(row => row.period), ["lr"]);
assert.equal(usesAndActivity.native.activity.activation.type, "bonus");
assert.equal(usesAndActivity.native.activity.consumption.targets[0].type, "itemUses");

const halfPb = compileRacialFeatureAutomation(synthetic("Você pode usar esta característica um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência."), human);
assert.equal(halfPb.native.uses.max, "floor(@prof / 2)");

const noActorSource = await fs.readFile(path.join(importerRoot, "scripts/race-automation.js"), "utf8");
assert.doesNotMatch(noActorSource, /\bHooks\.(?:on|once)\s*\(/);
assert.doesNotMatch(noActorSource, /\bactor\.(?:update|createEmbeddedDocuments|updateEmbeddedDocuments)\s*\(/i);

console.log("GRIMORIO_IMPORTER_RB7_RACE_AUTOMATION_OK", JSON.stringify({
  importer: IMPORTER_VERSION,
  phase: IMPORTER_BUILD.phase,
  features: automation.summary.features,
  raceAdvancements: raceAdvancements.length,
  darkvision: automation.race.senses.ranges.darkvision,
  staticDamageEffects: staticDamage.native.effects.length,
  actorApplication: support.actorApplication,
  globalHooks: support.globalHooks
}, null, 2));
