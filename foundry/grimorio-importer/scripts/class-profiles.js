export const READY_CLASS_IDENTIFIERS = Object.freeze([
  "barbarian", "bard", "warlock", "cleric", "druid", "sorcerer", "fighter", "rogue", "wizard",
  "monk", "paladin", "ranger", "artificer", "favored-soul", "inscriptor", "petal-knight", "sword-saint",
  "spiritual-emissary", "spellblade", "cultivator", "street-fighter", "dragoneer", "frame-pilot", "bender", "tamer", "blood-minister"
]);

export const SPECIAL_CLASS_IDENTIFIERS = Object.freeze([
  "dragoneer", "frame-pilot", "bender", "tamer", "blood-minister"
]);

// Mantido por compatibilidade com macros das fases anteriores. Na Fase 8 não há classes bloqueadas.
export const REVIEW_CLASS_IDENTIFIERS = Object.freeze([]);

const ALL_SKILLS = Object.freeze([
  "skills:acr", "skills:ani", "skills:arc", "skills:ath", "skills:dec", "skills:his", "skills:ins",
  "skills:itm", "skills:inv", "skills:med", "skills:nat", "skills:prc", "skills:prf", "skills:per",
  "skills:rel", "skills:slt", "skills:ste", "skills:sur"
]);

const SK = Object.freeze({
  acrobacia: "skills:acr",
  animais: "skills:ani",
  arcanismo: "skills:arc",
  atletismo: "skills:ath",
  atuacao: "skills:prf",
  enganacao: "skills:dec",
  furtividade: "skills:ste",
  historia: "skills:his",
  intimidacao: "skills:itm",
  intuicao: "skills:ins",
  investigacao: "skills:inv",
  medicina: "skills:med",
  natureza: "skills:nat",
  percepcao: "skills:prc",
  persuasao: "skills:per",
  prestidigitacao: "skills:slt",
  religiao: "skills:rel",
  sobrevivencia: "skills:sur"
});

const CORE_ASI = Object.freeze([4, 8, 12, 16, 19]);

function skills(count, keys) {
  return { count, pool: keys === "all" ? [...ALL_SKILLS] : keys.map(key => SK[key]) };
}

function profile(data) {
  return Object.freeze({
    armorGrants: [],
    weaponGrants: [],
    skillChoice: null,
    subclassTitle: "Subclasse",
    subclassFeatureNames: [],
    subclassPlaceholderPrefixes: [],
    spellcasting: { progression: "none", ability: "", preparationFormula: "" },
    asiLevels: CORE_ASI,
    asiFeatureMode: "native",
    directOptionGrants: [],
    itemChoices: [],
    supportingOptions: [],
    saveChoices: [],
    hitDieOverride: null,
    specialRuntime: null,
    warnings: [],
    ...data
  });
}

const FIGHTING_STYLE_FIGHTER = ["ARQUEARIA", "COMBATE COM ARMAS GRANDES", "COMBATE COM DUAS ARMAS", "DEFESA", "DUELISMO", "PROTEÇÃO"];
const FIGHTING_STYLE_PALADIN = ["COMBATE COM ARMAS GRANDES", "DEFESA", "DUELISMO", "PROTEÇÃO"];
const FIGHTING_STYLE_RANGER = ["ARQUEARIA", "COMBATE COM DUAS ARMAS", "DEFESA", "DUELISMO"];
const METAMAGIC = ["MAGIA ACELERADA", "MAGIA AUMENTADA", "MAGIA CUIDADOSA", "MAGIA DISTANTE", "MAGIA DUPLICADA", "MAGIA ESTENDIDA", "MAGIA POTENCIALIZADA", "MAGIA SUTIL"];

export const CLASS_PROFILES = Object.freeze({
  barbarian: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(2, ["animais", "atletismo", "intimidacao", "natureza", "percepcao", "sobrevivencia"]),
    subclassTitle: "Caminho Primitivo", subclassFeatureNames: ["CAMINHO PRIMITIVO"]
  }),
  bard: profile({
    armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"], skillChoice: skills(3, "all"),
    subclassTitle: "Colégio de Bardo", subclassFeatureNames: ["COLÉGIO DE BARDO"],
    spellcasting: { progression: "full", ability: "cha", preparationFormula: "" },
    warnings: ["Proficiências adicionais de armas e os três instrumentos musicais permanecem descritos no Item e exigem conferência manual no Actor."]
  }),
  warlock: profile({
    armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["arcanismo", "enganacao", "historia", "intimidacao", "investigacao", "natureza", "religiao"]),
    subclassTitle: "Patrono Transcendental", subclassFeatureNames: ["PATRONO TRANSCENDENTAL"],
    spellcasting: { progression: "pact", ability: "cha", preparationFormula: "" },
    itemChoices: [{ key: "pact-boon", title: "Dádiva do Pacto", optionNames: ["PACTO DA CORRENTE", "PACTO DA LÂMINA", "PACTO DO TOMO"], choices: { 3: { count: 1, replacement: false } } }]
  }),
  cleric: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["historia", "intuicao", "medicina", "persuasao", "religiao"]),
    subclassTitle: "Domínio Divino", subclassFeatureNames: ["DOMÍNIO DIVINO"],
    spellcasting: { progression: "full", ability: "wis", preparationFormula: "" }
  }),
  druid: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: [],
    skillChoice: skills(2, ["animais", "arcanismo", "intuicao", "medicina", "natureza", "percepcao", "religiao", "sobrevivencia"]),
    subclassTitle: "Círculo Druídico", subclassFeatureNames: ["CÍRCULO DRUÍDICO"],
    spellcasting: { progression: "full", ability: "wis", preparationFormula: "" },
    warnings: ["A lista específica de armas do Druida, Kit de Herbalismo e a restrição narrativa a armaduras metálicas permanecem para conferência manual."]
  }),
  sorcerer: profile({
    armorGrants: [], weaponGrants: [],
    skillChoice: skills(2, ["arcanismo", "enganacao", "intuicao", "intimidacao", "persuasao", "religiao"]),
    subclassTitle: "Origem de Feitiçaria", subclassFeatureNames: ["ORIGEM DE FEITIÇARIA"],
    spellcasting: { progression: "full", ability: "cha", preparationFormula: "" },
    directOptionGrants: [{ level: 2, optionNames: ["CRIANDO ESPAÇOS DE MAGIA"] }],
    itemChoices: [{ key: "metamagic", title: "Metamágica", optionNames: METAMAGIC, choices: { 3: { count: 2, replacement: false }, 10: { count: 1, replacement: false }, 17: { count: 1, replacement: false } } }],
    warnings: ["A lista específica de armas do Feiticeiro permanece descrita no Item e exige conferência manual."]
  }),
  fighter: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:hvy", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(2, ["acrobacia", "animais", "atletismo", "historia", "intuicao", "intimidacao", "percepcao", "sobrevivencia"]),
    subclassTitle: "Arquétipo Marcial", subclassFeatureNames: ["ARQUÉTIPO MARCIAL"], asiLevels: [4, 6, 8, 12, 14, 16, 19],
    itemChoices: [{ key: "fighting-style", title: "Estilo de Luta", optionNames: FIGHTING_STYLE_FIGHTER, choices: { 1: { count: 1, replacement: false } } }]
  }),
  rogue: profile({
    armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(4, ["acrobacia", "atletismo", "atuacao", "enganacao", "furtividade", "intimidacao", "intuicao", "investigacao", "percepcao", "persuasao", "prestidigitacao"]),
    subclassTitle: "Arquétipo de Ladino", subclassFeatureNames: ["ARQUÉTIPO DE LADINO"], asiLevels: [4, 8, 10, 12, 16, 19],
    warnings: ["Proficiências adicionais de armas e Ferramentas de Ladrão permanecem descritas no Item e exigem conferência manual."]
  }),
  wizard: profile({
    armorGrants: [], weaponGrants: [],
    skillChoice: skills(2, ["arcanismo", "historia", "intuicao", "investigacao", "medicina", "religiao"]),
    subclassTitle: "Tradição Arcana", subclassFeatureNames: ["TRADIÇÃO ARCANA"],
    spellcasting: { progression: "full", ability: "int", preparationFormula: "" },
    warnings: ["A lista específica de armas do Mago permanece descrita no Item e exige conferência manual."]
  }),
  monk: profile({
    armorGrants: [], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["acrobacia", "atletismo", "furtividade", "historia", "intuicao", "religiao"]),
    subclassTitle: "Tradição Monástica", subclassFeatureNames: ["TRADIÇÃO MONÁSTICA"],
    directOptionGrants: [{ level: 2, optionNames: ["RAJADA DE GOLPES", "DEFESA PACIENTE", "PASSO DO VENTO"] }],
    warnings: ["Proficiência com espada curta e a escolha de ferramenta/instrumento permanecem descritas no Item e exigem conferência manual."]
  }),
  paladin: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:hvy", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(2, ["atletismo", "intimidacao", "intuicao", "medicina", "persuasao", "religiao"]),
    subclassTitle: "Juramento Sagrado", subclassFeatureNames: ["JURAMENTO SAGRADO"],
    spellcasting: { progression: "half", ability: "cha", preparationFormula: "" },
    itemChoices: [{ key: "fighting-style", title: "Estilo de Luta", optionNames: FIGHTING_STYLE_PALADIN, choices: { 2: { count: 1, replacement: false } } }]
  }),
  ranger: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(3, ["animais", "atletismo", "furtividade", "intuicao", "investigacao", "natureza", "percepcao", "sobrevivencia"]),
    subclassTitle: "Conclave de Patrulheiro", subclassFeatureNames: ["CONCLAVE DE PATRULHEIRO"],
    spellcasting: { progression: "half", ability: "wis", preparationFormula: "" },
    itemChoices: [{ key: "fighting-style", title: "Estilo de Luta", optionNames: FIGHTING_STYLE_RANGER, choices: { 2: { count: 1, replacement: false } } }]
  }),
  artificer: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["arcanismo", "historia", "investigacao", "medicina", "natureza", "percepcao", "prestidigitacao"]),
    subclassTitle: "Especialização de Artífice", subclassFeatureNames: ["ESPECIALIZAÇÃO DE ARTÍFICE"],
    spellcasting: { progression: "half", ability: "int", preparationFormula: "" },
    warnings: ["Ferramentas de Ladrão/Funileiro e a escolha de ferramenta de artesão permanecem para conferência manual.", "No conjunto de regras 2014, o Artífice arredonda sua contribuição de multiclasse para cima. O perfil nativo usa a progressão half do DnD5e; valide a configuração de regras legadas do seu Mundo."]
  }),
  "favored-soul": profile({
    armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(2, ["arcanismo", "historia", "intimidacao", "medicina", "persuasao", "religiao"]),
    subclassTitle: "Fardo Cósmico", subclassFeatureNames: ["FARDO CÓSMICO"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE FARDO CÓSMICO"],
    spellcasting: { progression: "pact", ability: "cha", preparationFormula: "" },
    warnings: ["A perícia homebrew Montaria não existe no conjunto padrão de perícias do DnD5e e permanece apenas na descrição da classe."]
  }),
  inscriptor: profile({
    armorGrants: ["armor:lgt"], weaponGrants: [],
    skillChoice: skills(3, ["arcanismo", "historia", "intuicao", "investigacao", "percepcao", "persuasao", "religiao"]),
    subclassTitle: "Intenção Autoral", subclassFeatureNames: ["INTENÇÃO AUTORAL"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE INTENÇÃO AUTORAL"],
    spellcasting: { progression: "pact", ability: "int", preparationFormula: "" },
    warnings: ["A lista específica de armas e os Implementos de Escrita do Inscritor permanecem para conferência manual."]
  }),
  "petal-knight": profile({
    armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(3, ["animais", "atletismo", "historia", "investigacao", "natureza", "percepcao", "persuasao", "religiao", "sobrevivencia"]),
    subclassTitle: "Epíteto", subclassFeatureNames: ["EPÍTETO"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE EPÍTETO"],
    spellcasting: { progression: "pact", ability: "wis", preparationFormula: "" },
    warnings: ["A classe possui proficiência marcial com exceções para armas corpo a corpo pesadas/de duas mãos; para evitar sobreconcessão, apenas armas simples são automatizadas. Ferramentas e instrumentos permanecem para conferência manual."]
  }),
  "sword-saint": profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(3, ["acrobacia", "atletismo", "enganacao", "historia", "intuicao", "intimidacao", "medicina", "percepcao", "sobrevivencia"]),
    subclassTitle: "Caminho de Devoção", subclassFeatureNames: ["CAMINHO DE DEVOÇÃO"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE CAMINHO DE DEVOÇÃO"]
  }),
  "spiritual-emissary": profile({
    armorGrants: [], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["acrobacia", "animais", "historia", "intuicao", "medicina", "percepcao", "persuasao", "religiao"]),
    subclassTitle: "Caminho Espiritual", subclassFeatureNames: [],
    warnings: ["Adagas, dardos, kunais e Kit de Caligrafia permanecem descritos no Item e exigem conferência manual."]
  }),
  spellblade: profile({
    armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(2, ["acrobacia", "arcanismo", "atletismo", "historia", "investigacao", "medicina", "natureza", "percepcao", "religiao", "prestidigitacao", "furtividade"]),
    subclassTitle: "Técnica de Spellblade", subclassFeatureNames: ["TÉCNICA DE SPELLBLADE"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE ESPECIALIZAÇÃO"],
    spellcasting: { progression: "half", ability: "int", preparationFormula: "" }
  }),
  cultivator: profile({
    armorGrants: [], weaponGrants: [],
    skillChoice: skills(2, ["acrobacia", "historia", "intuicao", "investigacao", "medicina", "percepcao", "atuacao", "religiao"]),
    subclassTitle: "Chamado à Divindade", subclassFeatureNames: ["CHAMADO À DIVINDADE"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DO CHAMADO À DIVINDADE"],
    spellcasting: { progression: "none", ability: "wis", preparationFormula: "" },
    warnings: [
      "O Cultivador usa Qi próprio e não espaços de magia do DnD5e; a progressão nativa de slots permanece desativada para não criar recursos que a classe não possui.",
      "Adagas, dardos, arco curto, espada curta, bordão e dois instrumentos musicais permanecem descritos no Item para conferência manual.",
      "Magias homebrew citadas sem bloco mecânico no PDF são preservadas somente como referências."
    ]
  }),
  "street-fighter": profile({
    armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["acrobacia", "atletismo", "intimidacao", "intuicao", "investigacao", "percepcao", "persuasao", "prestidigitacao", "sobrevivencia"]),
    subclassTitle: "Arquétipo de Rua", subclassFeatureNames: ["ARQUÉTIPO DE RUA"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE ARQUÉTIPO DE RUA"],
    spellcasting: { progression: "none", ability: "", preparationFormula: "" },
    asiLevels: [],
    asiFeatureMode: "textual",
    itemChoices: [{
      key: "wrath-essences-initial",
      title: "Essências de Cólera — escolhas iniciais",
      optionNames: [
        "ESSÊNCIA DO PISÃO FACIAL",
        "ESSÊNCIA DA PAREDE",
        "ESSÊNCIA DA ARMA IMPROVISADA",
        "ESSÊNCIA DO ARREMESSO DE RUA",
        "ESSÊNCIA DA INTIMIDAÇÃO BRUTAL"
      ],
      choices: { 3: { count: 2, replacement: false } }
    }],
    supportingOptions: [
      { key: "wrath-essences-9", level: 9, optionNames: ["ESSÊNCIA DA COLISÃO DUPLA", "ESSÊNCIA DA INTERRUPÇÃO VIOLENTA", "ESSÊNCIA DO IMPACTO NO CHÃO", "ESSÊNCIA DO OBJETO PESADO"] },
      { key: "wrath-essences-13", level: 13, optionNames: ["ESSÊNCIA DA QUEDA DO CAMPEÃO", "ESSÊNCIA DA REVERSÃO BRUTAL", "ESSÊNCIA DO DESARME VIOLENTO", "ESSÊNCIA DO ESPÍRITO INABALÁVEL"] },
      { key: "wrath-essences-15", level: 15, optionNames: ["ESSÊNCIA DO CLÍMAX BRUTAL", "ESSÊNCIA DA QUEBRA DE GUARDA", "ESSÊNCIA DO ARREMESSO DEVASTADOR", "ESSÊNCIA DA RESISTÊNCIA FURIOSA"] },
      { key: "wrath-essences-17", level: 17, optionNames: ["ESSÊNCIA DA LENDA VIVA", "ESSÊNCIA DA QUEDA ABSOLUTA", "ESSÊNCIA DO DRAGÃO FURIOSO"] }
    ],
    warnings: [
      "A classe concede armas simples automaticamente. Armas improvisadas e armas marciais corpo a corpo sem a propriedade Pesada não correspondem a uma categoria nativa segura do DnD5e e permanecem na descrição para conferência manual.",
      "A escolha de ferramenta do Lutador de Rua permanece na descrição, pois combina Ferramentas de Ladrão, veículos terrestres, kit de jogo ou ferramentas de artesão em uma única escolha que o Advancement nativo não representa com fidelidade.",
      "O PDF lista Incremento de Habilidade nos níveis 4, 8, 12, 16 e 19 sem fornecer o bloco de regras. A 0.9.3 preserva essas entradas como características textuais e não cria AbilityScoreImprovement nativo por inferência.",
      "O PDF lista Essência Adicional nos níveis 6, 9, 13, 15 e 17 sem definir explicitamente a quantidade concedida. A escolha inicial de duas Essências no 3º nível é nativa; as concessões adicionais permanecem textuais e as Essências posteriores ficam disponíveis no compêndio para seleção manual conforme a mesa."
    ]
  }),
  dragoneer: profile({
    armorGrants: [], weaponGrants: [], skillChoice: null,
    subclassTitle: "Conceito Central", subclassFeatureNames: ["CONCEITO CENTRAL"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE CONCEITO CENTRAL"],
    spellcasting: { progression: "none", ability: "", preparationFormula: "" },
    hitDieOverride: "d8", specialRuntime: "dragoneer-concept",
    warnings: ["O d8 no Item-base é apenas um valor técnico inicial. O Conceito Central aplicado ao Actor redefine Dado de Vida e progressão de conjuração."]
  }),
  "frame-pilot": profile({
    armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim", "weapon:mar"], skillChoice: skills(3, "all"),
    subclassTitle: "Designação Tecnológica", subclassFeatureNames: ["DESIGNAÇÃO TECNOLÓGICA"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE DESIGNAÇÃO"],
    saveChoices: [
      { count: 1, pool: ["saves:dex", "saves:con", "saves:wis"] },
      { count: 1, pool: ["saves:str", "saves:int", "saves:cha"] }
    ],
    asiLevels: [], specialRuntime: "frame-pilot-growth",
    warnings: ["Crescimento é mantido como característica própria: em níveis pares, o jogador pode escolher +1 atributo ou as alternativas de perícia/ferramenta/talento previstas pela fonte.", "Armas de fogo são preservadas na descrição porque não formam uma categoria padrão universal do DnD5e."]
  }),
  bender: profile({
    armorGrants: ["armor:lgt"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["acrobacia", "atletismo", "historia", "intuicao", "religiao", "furtividade"]),
    subclassTitle: "Disciplina de Dobrador", subclassFeatureNames: ["DISCIPLINA DE DOBRADOR"],
    spellcasting: { progression: "half", ability: "", preparationFormula: "" },
    specialRuntime: "spellcasting-ability-choice",
    warnings: ["A habilidade de conjuração é escolhida no Actor entre Inteligência, Sabedoria e Carisma; o módulo aplica a escolha ao Item de classe embutido.", "Chakrams, nunchaku, espadas curtas, shuriken, starknives/twinblades e a escolha de ferramenta/instrumento permanecem na descrição para conferência manual."]
  }),
  tamer: profile({
    armorGrants: ["armor:lgt", "armor:med", "armor:shl"], weaponGrants: ["weapon:sim"],
    skillChoice: skills(2, ["animais", "intuicao", "medicina", "natureza", "percepcao", "persuasao"]),
    subclassTitle: "Paradigma de Treinamento", subclassFeatureNames: ["PARADIGMA DE TREINAMENTO"],
    spellcasting: { progression: "half", ability: "", preparationFormula: "" },
    specialRuntime: "spellcasting-ability-choice",
    warnings: ["A habilidade de conjuração é escolhida no Actor entre Inteligência, Sabedoria e Carisma; o módulo aplica a escolha ao Item de classe embutido.", "Redes e a escolha de ferramenta/instrumento permanecem na descrição para conferência manual."]
  }),
  "blood-minister": profile({
    armorGrants: ["armor:lgt", "armor:med"], weaponGrants: ["weapon:sim", "weapon:mar"],
    skillChoice: skills(3, ["arcanismo", "intuicao", "intimidacao", "investigacao", "medicina", "furtividade", "sobrevivencia"]),
    subclassTitle: "Seita Genética", subclassFeatureNames: ["DESPERTAR DO SANGUE"],
    subclassPlaceholderPrefixes: ["CARACTERÍSTICA DE SEITA GENÉTICA"],
    hitDieOverride: "d8", specialRuntime: "blood-minister-hit-dice",
    warnings: ["O Item-base usa d8 tecnicamente porque 2d4 possui o mesmo máximo no 1º nível (8) e a mesma média fixa (5). O hook da Fase 8 converte rolagens de PV em 2d4.", "O pool nativo de Dados de Vida do DnD5e não representa dois d4 por nível; use o rastreamento 2d4 indicado pelo módulo/descrição para Ministração Sanguínea e descansos.", "Armas de fogo simples permanecem na descrição para conferência manual."]
  })
});

export function classProfile(identifier) {
  return CLASS_PROFILES[identifier] ?? null;
}
