import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compileFeatAutomation, featAutomationSupport } from "../scripts/feat-automation.js";
import { pendingFeatChoices, configureFeatChoices, validateResilientLinkage, validateResilientAdvancementBatch, featChoiceSupport } from "../scripts/feat-choice-runtime.js";
import { buildFeatSource } from "../scripts/feat-materializer.js";
import { IMPORTER_VERSION, IMPORTER_BUILD } from "../scripts/version.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "examples", "feats", "phb-2014-feats-package-v2.json"), "utf8"));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const byId = id => pkg.bundles.find(bundle => bundle.identity.grimorioId === id);
const source = id => buildFeatSource(byId(id));
const advancements = src => Object.values(src.system.advancement ?? {});

assert(IMPORTER_VERSION === "0.12.0", `Versão inesperada: ${IMPORTER_VERSION}`);
assert(IMPORTER_BUILD.phase === "0.12.0 Stable" && IMPORTER_BUILD.label === "0.12.0 Stable", "Build FA-4 não sincronizada");
const support = featAutomationSupport();
const choiceSupport = featChoiceSupport();
assert(support.phase === "FA-4" && support.compilerVersion === 3, "Compilador FA-4 incorreto");
assert(support.fa3.declarativeChoicesResolved === 12 && support.deferredToFa3.length === 0, "Contrato FA-3 de escolhas incompleto");
assert(choiceSupport.resilientLinkValidation === true && choiceSupport.assistedProfiles.length === 3, "Runtime de escolhas FA-3 incompleto");

const aggregate = { plans:0, documents:0, assisted:0, deferred:0, effects:0, runtime:0 };
for (const bundle of pkg.bundles) {
  const compiled = compileFeatAutomation(bundle).metadata;
  aggregate.plans += compiled.materialized.advancements;
  aggregate.documents += compiled.materialized.advancementDocuments;
  aggregate.assisted += compiled.materialized.assistedChoices;
  aggregate.deferred += compiled.deferred.advancements;
  aggregate.effects += compiled.materialized.effects;
  aggregate.runtime += compiled.materialized.runtime;
}
assert(aggregate.plans === 28, `Esperados 28 planos resolvidos; encontrados ${aggregate.plans}`);
assert(aggregate.documents === 26, `Esperados 26 Advancement documents; encontrados ${aggregate.documents}`);
assert(aggregate.assisted === 3, `Esperadas 3 escolhas assistidas; encontradas ${aggregate.assisted}`);
assert(aggregate.deferred === 0, `Advancements ainda diferidos: ${aggregate.deferred}`);
assert(aggregate.effects === 10 && aggregate.runtime === 56, "FA-4 deve materializar 10 Effects e 56 descriptors runtime");

// Adepto Elemental: escolha sem Trait falso.
const elemental = source("phb-2014-adepto-elemental");
const elementalAutomation = elemental.flags["grimorio-importer"].automation;
assert(advancements(elemental).length === 0, "Adepto Elemental não deve criar Trait/ASI falso para tipo de dano");
assert(elementalAutomation.assistedChoices.length === 1, "Adepto Elemental deveria possuir escolha assistida");
assert(elementalAutomation.assistedChoices[0].sourceChoiceId === "damage-type", "Choice ID do Adepto Elemental incorreto");
assert(elementalAutomation.assistedChoices[0].options.length === 5, "Adepto Elemental deveria oferecer cinco danos");

// Adepto Marcial: ItemChoice aberto de duas manobras.
const marcial = source("phb-2014-adepto-marcial");
const maneuver = advancements(marcial).find(row => row.type === "ItemChoice");
assert(maneuver?.configuration?.allowDrops === true, "Adepto Marcial deveria permitir drag-and-drop");
assert(maneuver?.configuration?.choices?.["0"]?.count === 2, "Adepto Marcial deveria escolher duas manobras");
assert(maneuver?.configuration?.type === "feat", "Manobras devem ser Items feat");
assert(maneuver?.flags?.["grimorio-importer"]?.choiceConstraints?.family === "battle-master-maneuver", "Família de manobra não preservada");

// Atirador de Magia: um truque com ataque.
const sniper = source("phb-2014-atirador-de-magia");
const sniperChoice = advancements(sniper).find(row => row.type === "ItemChoice");
assert(sniperChoice?.configuration?.type === "spell" && sniperChoice.configuration.choices?.["0"]?.count === 1, "Atirador de Magia não materializou spell ItemChoice");
assert(sniperChoice?.flags?.["grimorio-importer"]?.choiceConstraints?.spellLevel === 0, "Atirador de Magia deveria restringir nível 0");
assert(sniperChoice?.flags?.["grimorio-importer"]?.choiceConstraints?.requiresAttackRoll === true, "Requisito attack roll não preservado");

// Conjurador de Ritual: lista assistida + dois rituais nível 1.
const ritual = source("phb-2014-conjurador-de-ritual");
const ritualAutomation = ritual.flags["grimorio-importer"].automation;
const ritualChoice = advancements(ritual).find(row => row.type === "ItemChoice");
assert(ritualAutomation.assistedChoices.some(row => row.sourceChoiceId === "spell-list"), "Lista do Conjurador de Ritual deveria ser escolha assistida");
assert(ritualChoice?.configuration?.choices?.["0"]?.count === 2, "Conjurador de Ritual deveria escolher duas magias");
assert(ritualChoice?.flags?.["grimorio-importer"]?.choiceConstraints?.spellLevel === 1, "Rituais deveriam ser nível 1");
assert(ritualChoice?.flags?.["grimorio-importer"]?.choiceConstraints?.ritualOnly === true, "Ritual-only não preservado");
assert(ritualChoice?.flags?.["grimorio-importer"]?.choiceConstraints?.sameListAs === "spell-list", "Vínculo com lista não preservado");

// Iniciado em Magia: lista assistida + 2 cantrips + 1 spell nível 1.
const initiate = source("phb-2014-iniciado-em-magia");
const initiateAutomation = initiate.flags["grimorio-importer"].automation;
const initiateChoices = advancements(initiate).filter(row => row.type === "ItemChoice");
assert(initiateAutomation.assistedChoices.some(row => row.sourceChoiceId === "spell-list"), "Lista de Iniciado em Magia deveria ser assistida");
assert(initiateChoices.length === 2, `Iniciado em Magia deveria ter dois ItemChoice; encontrados ${initiateChoices.length}`);
assert(initiateChoices.some(row => row.configuration.choices?.["0"]?.count === 2 && row.flags["grimorio-importer"].choiceConstraints.spellLevel === 0), "Dois truques de Iniciado em Magia ausentes");
assert(initiateChoices.some(row => row.configuration.choices?.["0"]?.count === 1 && row.flags["grimorio-importer"].choiceConstraints.spellLevel === 1 && row.flags["grimorio-importer"].choiceConstraints.acquisition === "learn-and-once-per-long-rest"), "Magia de 1º nível de Iniciado em Magia ausente");

// Traits abertos.
const weaponMaster = source("phb-2014-mestre-de-armas");
const weaponTrait = advancements(weaponMaster).find(row => row.type === "Trait" && row.flags?.["grimorio-importer"]?.trait === "weapon");
assert(weaponTrait?.configuration?.choices?.[0]?.count === 4, "Mestre de Armas deveria escolher quatro armas");
assert(weaponTrait.configuration.choices[0].pool.length > 20, "Pool de armas deve conter proficiências individuais");
assert(weaponTrait.configuration.choices[0].pool.every(value => value.startsWith("weapon:")), "Pool de Mestre de Armas contém Trait não-arma");
assert(!weaponTrait.configuration.choices[0].pool.includes("weapon:sim") && !weaponTrait.configuration.choices[0].pool.includes("weapon:mar"), "Mestre de Armas não deve conceder categoria inteira");

const skilled = source("phb-2014-perito");
const skilledTrait = advancements(skilled).find(row => row.type === "Trait");
assert(skilledTrait?.configuration?.choices?.[0]?.count === 3, "Perito deveria escolher três opções");
assert(skilledTrait.configuration.choices[0].pool.some(value => value.startsWith("skills:")) && skilledTrait.configuration.choices[0].pool.some(value => value.startsWith("tool:")), "Perito deve combinar perícias e ferramentas");

const linguist = source("phb-2014-poliglota");
const languageTrait = advancements(linguist).find(row => row.type === "Trait");
assert(languageTrait?.configuration?.choices?.[0]?.count === 3, "Poliglota deveria escolher três idiomas");
assert(languageTrait.configuration.choices[0].pool.every(value => value.startsWith("languages:")), "Pool de Poliglota deveria conter apenas idiomas");

// Resiliente: um plano lógico -> dois advancements nativos vinculados.
const resilient = source("phb-2014-resiliente");
const resilientDocs = advancements(resilient).filter(row => row.flags?.["grimorio-importer"]?.linkedChoice === "ability-and-save");
assert(resilientDocs.length === 2, `Resiliente deveria criar ASI + Trait; encontrados ${resilientDocs.length}`);
assert(resilientDocs.some(row => row.type === "AbilityScoreImprovement"), "ASI de Resiliente ausente");
const resilientSave = resilientDocs.find(row => row.type === "Trait");
assert(resilientSave?.configuration?.choices?.[0]?.count === 1, "Resiliente deveria escolher uma salvaguarda");
assert(resilientSave.configuration.choices[0].pool.length === 6 && resilientSave.configuration.choices[0].pool.every(value => value.startsWith("saves:")), "Pool de salvaguardas de Resiliente incorreto");

const resilientValid = structuredClone(resilient);
for (const row of Object.values(resilientValid.system.advancement)) {
  if (row.type === "AbilityScoreImprovement") row.value = { type:"asi", assignments:{ con:1 } };
  if (row.type === "Trait") row.value = { chosen:["saves:con"] };
}
assert(validateResilientLinkage(resilientValid).ok && validateResilientLinkage(resilientValid).enforced, "Resiliente válido não passou no gate");
const resilientInvalid = structuredClone(resilientValid);
for (const row of Object.values(resilientInvalid.system.advancement)) if (row.type === "Trait") row.value = { chosen:["saves:wis"] };
const invalidLink = validateResilientLinkage(resilientInvalid);
assert(!invalidLink.ok && invalidLink.enforced && invalidLink.ability === "con" && invalidLink.save === "wis", "Mismatch de Resiliente não foi detectado");
assert(!validateResilientAdvancementBatch([resilientInvalid], []).ok, "Batch preAdvancement não bloqueou Resiliente inconsistente");

// Configuração assistida: prompt simulado deve persistir em flags do Item pertencente a Actor.
globalThis.game = { user:{ isGM:true, id:"gm" } };
globalThis.ui = { notifications:{ info(){}, warn(){}, error(){} } };
const queue = ["fire"];
globalThis.foundry = { applications:{ api:{ DialogV2:{ input: async () => ({ choice: queue.shift() }) } } } };
const actor = { documentName:"Actor", items:[] };
const ownedElemental = {
  name:"Adepto Elemental",
  parent:actor,
  flags:structuredClone(elemental.flags),
  getFlag(scope,key){ return this.flags?.[scope]?.[key]; },
  async update(data){
    for (const [pathKey,value] of Object.entries(data)) {
      const parts=pathKey.split("."); let current=this;
      for (let i=0;i<parts.length-1;i++){ current[parts[i]] ??= {}; current=current[parts[i]]; }
      current[parts.at(-1)] = structuredClone(value);
    }
    return this;
  }
};
actor.items.push(ownedElemental);
assert(pendingFeatChoices(ownedElemental).length === 1, "Adepto Elemental deveria iniciar com escolha pendente");
const configured = await configureFeatChoices(ownedElemental, { notify:false });
assert(configured.ok && configured.configured[0]?.key === "fire", "Configuração assistida não persistiu Fogo");
assert(pendingFeatChoices(ownedElemental).length === 0, "Escolha assistida ainda aparece pendente após configuração");
assert(ownedElemental.flags["grimorio-importer"].choices["damage-type"].key === "fire", "Flag damage-type não foi gravada");

console.log("GRIMORIO_IMPORTER_FA3_CHOICES_OK", JSON.stringify({
  importer: IMPORTER_VERSION,
  phase: IMPORTER_BUILD.phase,
  logicalAdvancements: aggregate.plans,
  nativeAdvancementDocuments: aggregate.documents,
  assistedChoices: aggregate.assisted,
  deferredAdvancements: aggregate.deferred,
  fa4: { effects: aggregate.effects, runtime: aggregate.runtime },
  resilientMismatchBlocked: true,
  assistedChoicePersistence: true
}, null, 2));
