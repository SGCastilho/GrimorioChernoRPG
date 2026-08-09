export const SPECIAL_CLASS_IDENTIFIERS = Object.freeze([
  "dragoneer", "frame-pilot", "bender", "tamer", "blood-minister"
]);

const SK = Object.freeze({
  acrobacia: "skills:acr", animais: "skills:ani", arcanismo: "skills:arc", atletismo: "skills:ath",
  atuacao: "skills:prf", enganacao: "skills:dec", furtividade: "skills:ste", historia: "skills:his",
  intimidacao: "skills:itm", intuicao: "skills:ins", investigacao: "skills:inv", medicina: "skills:med",
  natureza: "skills:nat", percepcao: "skills:prc", persuasao: "skills:per", prestidigitacao: "skills:slt",
  religiao: "skills:rel", sobrevivencia: "skills:sur"
});

const ALL_SKILLS = Object.freeze([
  "skills:acr", "skills:ani", "skills:arc", "skills:ath", "skills:dec", "skills:his", "skills:ins",
  "skills:itm", "skills:inv", "skills:med", "skills:nat", "skills:prc", "skills:prf", "skills:per",
  "skills:rel", "skills:slt", "skills:ste", "skills:sur"
]);

const S = (...keys) => keys.map(key => SK[key]);

/**
 * Parâmetros mecânicos dos Conceitos Centrais do Cavaleiro Dracônico.
 * Os nove conceitos de Zagalhta usam as tabelas "Parâmetros da Especialização" já presentes nos bundles.
 * Os três conceitos de Blade, Bone, & Benefit são explicitados no capítulo X, pp. 94–96.
 */
export const DRAGONEER_CONCEPT_PROFILES = Object.freeze({
  "zagalhta-dragoneer-auraphage": {
    hitDie: "d8", saveGrant: "cha", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("religiao"), skillChoice: { count: 2, pool: S("arcanismo", "enganacao", "historia", "intimidacao", "investigacao", "natureza") },
    spellcasting: { progression: "pact", ability: "wis", label: "Conjurador de Combustão (lista do Bruxo)" }
  },
  "zagalhta-dragoneer-bloodweaver": {
    hitDie: "d6", saveGrant: "con", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("arcanismo"), skillChoice: { count: 1, pool: S("enganacao", "intuicao", "intimidacao", "persuasao", "religiao") },
    spellcasting: { progression: "full", ability: "wis", label: "Conjurador Pleno (lista do Feiticeiro)" }
  },
  "zagalhta-dragoneer-breaking-dynamo": {
    hitDie: "d10", saveGrant: "str", armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillGrants: S("atletismo"), skillChoice: { count: 1, pool: S("acrobacia", "animais", "historia", "intuicao", "intimidacao", "percepcao", "sobrevivencia") },
    spellcasting: { progression: "third", ability: "wis", label: "Um-Terço de Conjurador" }
  },
  "zagalhta-dragoneer-child-of-fate": {
    hitDie: "d6", saveGrant: "cha", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("medicina"), skillChoice: { count: 1, pool: S("historia", "intuicao", "persuasao", "religiao") },
    spellcasting: { progression: "full", ability: "wis", label: "Conjurador Pleno (lista do Clérigo)" }
  },
  "zagalhta-dragoneer-demon-dancer": {
    hitDie: "d8", saveGrant: "dex", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("acrobacia"), skillChoice: { count: 4, pool: ALL_SKILLS.filter(x => x !== SK.acrobacia) },
    spellcasting: { progression: "third", ability: "wis", label: "Um-Terço de Conjurador (lista do Bruxo)" },
    warnings: ["Armas Leves e de Acuidade adicionais não são concedidas como categoria ampla para evitar sobreconcessão; confira-as manualmente."]
  },
  "zagalhta-dragoneer-echoing-voice": {
    hitDie: "d8", saveGrant: "int", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("arcanismo"), skillChoice: { count: 1, pool: S("historia", "intuicao", "investigacao", "medicina", "religiao") },
    spellcasting: { progression: "half", ability: "wis", label: "Meio Conjurador (lista do Mago)" }
  },
  "zagalhta-dragoneer-piercing-hand": {
    hitDie: "d10", saveGrant: "dex", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillGrants: S("percepcao"), skillChoice: { count: 2, pool: S("animais", "atletismo", "intuicao", "investigacao", "natureza", "furtividade", "sobrevivencia") },
    spellcasting: { progression: "half", ability: "wis", label: "Meio Conjurador (lista do Patrulheiro)" },
    warnings: ["A proficiência adicional com armas à distância permanece na descrição para conferência manual."]
  },
  "zagalhta-dragoneer-raging-titan": {
    hitDie: "d12", saveGrant: "str", armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillGrants: S("atletismo"), skillChoice: { count: 1, pool: S("animais", "intimidacao", "natureza", "percepcao", "sobrevivencia") },
    spellcasting: { progression: "none", ability: "", label: "Nenhuma" }
  },
  "zagalhta-dragoneer-royal-sweeper": {
    hitDie: "d10", saveGrant: "cha", armorGrants: ["armor:lgt", "armor:med", "armor:hvy", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillGrants: S("persuasao"), skillChoice: { count: 1, pool: S("atletismo", "intuicao", "intimidacao", "medicina", "religiao") },
    spellcasting: { progression: "half", ability: "wis", label: "Meio Conjurador (lista do Paladino)" }
  },
  "bbb-dragoneer-darkstriker": {
    hitDie: "d10", saveGrant: "dex", armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"],
    skillGrants: S("arcanismo"), skillChoice: { count: 1, pool: S("atletismo", "historia", "intuicao", "investigacao", "medicina") },
    spellcasting: { progression: "pact", ability: "wis", label: "Conjurador de Combustão (lista do Mago)" },
    warnings: ["Armas marciais à distância e armas de fogo simples/marciais permanecem para conferência manual para evitar conceder todas as armas marciais."]
  },
  "bbb-dragoneer-fortune-veil": {
    hitDie: "d10", saveGrant: "con", armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillGrants: S("intuicao"), skillChoice: { count: 1, pool: S("arcanismo", "enganacao", "intimidacao", "persuasao", "religiao") },
    spellcasting: { progression: "third", ability: "wis", label: "Um-Terço de Conjurador (lista do Feiticeiro)" }
  },
  "bbb-dragoneer-phasescale-knight": {
    hitDie: "d10", saveGrant: "dex", armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillGrants: S("percepcao"), skillChoice: { count: 2, pool: S("atletismo", "historia", "intimidacao", "natureza", "sobrevivencia") },
    spellcasting: { progression: "third", ability: "wis", label: "Um-Terço de Conjurador" },
    warnings: ["A perícia homebrew Montaria não existe na lista padrão do DnD5e e permanece na descrição."]
  }
});

export function dragoneerConceptProfile(grimorioId) {
  return DRAGONEER_CONCEPT_PROFILES[grimorioId] ?? null;
}

export const SPECIAL_CLASS_RUNTIME = Object.freeze({
  bender: {
    type: "spellcasting-ability-choice", choices: ["int", "wis", "cha"], defaultAbility: "wis",
    message: "Escolha Inteligência, Sabedoria ou Carisma como habilidade de conjuração do Dobrador."
  },
  tamer: {
    type: "spellcasting-ability-choice", choices: ["int", "wis", "cha"], defaultAbility: "wis",
    message: "Escolha Inteligência, Sabedoria ou Carisma como habilidade de conjuração do Domador."
  },
  dragoneer: {
    type: "dragoneer-concept", defaultHitDie: "d8",
    message: "O Conceito Central escolhido define Dado de Vida, proficiências e progressão de conjuração."
  },
  "blood-minister": {
    type: "blood-minister-hit-dice", technicalHitDie: "d8", actualHitDice: "2d4", multiplier: 2,
    message: "O Item usa d8 tecnicamente para reproduzir máximo 8 e média 5 de 2d4; o módulo corrige rolagens de PV para 2d4. Os Dados de Vida de descanso continuam exigindo o rastreador especial/manual."
  },
  "frame-pilot": {
    type: "frame-pilot-growth",
    message: "Crescimento concede +1 atributo em níveis pares, com alternativas de perícia/ferramenta ou talento em níveis específicos; a escolha permanece explícita na característica Crescimento."
  }
});
