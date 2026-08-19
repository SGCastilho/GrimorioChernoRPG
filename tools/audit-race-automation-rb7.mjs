#!/usr/bin/env node
import fs from "node:fs";
import vm from "node:vm";
import { compileRacialFeatureAutomation } from "../foundry/grimorio-importer/scripts/race-automation.js";

const ctx = { window: {} };
ctx.window.window = ctx.window;
ctx.globalThis = ctx.window;
vm.createContext(ctx);
for (const file of [
  "data/lyre-races.js",
  "data/lyre-races-phase2-structure.js",
  "data/lyre-races-phase2-text.js",
  "data/lyre-races-phase3-structure.js",
  "data/lyre-races-phase3-text.js",
  "data/lyre-races-phase4-structure.js",
  "data/lyre-races-phase4-text.js",
  "data/blade-bone-benefit-races.js",
  "data/zagalhta-exolunar-races.js",
  "data/paraprismatic-tempest-races.js"
]) vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });

const traits = [];
for (const race of ctx.window.GRIMORIO_RACES ?? []) {
  for (const [role, list] of [["core", race.coreTraits], ["legacy", race.legacyTraits], ["mixed", race.mixedBloodTraits]]) {
    for (const trait of list ?? []) traits.push({
      key: `${role}:${race.id}:${trait.id}`, role, grimorioTraitId: trait.id,
      name: trait.name, originalName: trait.originalName, description: trait.description || trait.summary || "",
      owner: { raceId: race.id, subraceId: null }
    });
  }
  for (const subrace of race.subraces ?? []) for (const trait of subrace.traits ?? []) traits.push({
    key: `subrace:${race.id}:${subrace.id}:${trait.id}`, role: "subrace", grimorioTraitId: trait.id,
    name: trait.name, originalName: trait.originalName, description: trait.description || trait.summary || "",
    owner: { raceId: race.id, subraceId: subrace.id }
  });
}

const tiers = { native:0, "native-choice":0, assisted:0, runtime:0, description:0 };
const mechanics = { effects:0, advancements:0, movement:0, senses:0, uses:0, activities:0, assisted:0, runtime:0 };
const unsafeChoiceEffects = [];
for (const feature of traits) {
  const plan = compileRacialFeatureAutomation(feature, {});
  tiers[plan.tier] = (tiers[plan.tier] ?? 0) + 1;
  mechanics.effects += plan.native.effects.length;
  mechanics.advancements += plan.native.advancements.length;
  mechanics.movement += plan.native.movement.length;
  mechanics.senses += plan.native.senses.length;
  mechanics.uses += plan.native.uses ? 1 : 0;
  mechanics.activities += plan.native.activity ? 1 : 0;
  mechanics.assisted += plan.assisted.length;
  mechanics.runtime += plan.runtime.length;
  if (/resist[eê]ncia.*\bou\b.*escolh/i.test(feature.description) && plan.native.effects.length) unsafeChoiceEffects.push(feature.key);
}

const result = { races:(ctx.window.GRIMORIO_RACES ?? []).length, traits:traits.length, tiers, mechanics, unsafeChoiceEffects };
console.log("GRIMORIO_RB7_RACE_AUTOMATION_AUDIT", JSON.stringify(result, null, 2));
if (traits.length !== 1743 || unsafeChoiceEffects.length) process.exit(1);
