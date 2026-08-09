const MODULE_ID = "grimorio-importer";
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const AUTOMATION_SCHEMA_VERSION = 3;
export const AUTOMATION_PHASE = "12";

const CORE_ACTIVE_EFFECT_MODES = globalThis.CONST?.ACTIVE_EFFECT_MODES ?? {
  CUSTOM: 0,
  MULTIPLY: 1,
  ADD: 2,
  DOWNGRADE: 3,
  UPGRADE: 4,
  OVERRIDE: 5
};

export const ACTIVE_EFFECT_MODE = Object.freeze({ ...CORE_ACTIVE_EFFECT_MODES });

export const AUTOMATION_TIER = Object.freeze({
  FULL: "full",
  PARTIAL: "partial",
  DESCRIPTION: "description"
});

function hash32(input, seed = 2166136261) {
  let h = seed >>> 0;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function stableEmbeddedId(input) {
  const text = String(input ?? "grimorio-embedded");
  let a = hash32(text, 2166136261);
  let b = hash32(text.split("").reverse().join(""), 2246822519);
  let out = "";
  for (let i = 0; i < 16; i += 1) {
    const n = i % 2 === 0 ? a : b;
    out += ALNUM[n % ALNUM.length];
    a = (Math.imul(a ^ (i + 17), 1597334677) + b) >>> 0;
    b = (Math.imul(b ^ (i + 31), 3812015801) + a) >>> 0;
  }
  return out;
}

function stableActivityId(input) {
  return stableEmbeddedId(`activity:${input}`);
}

function stableEffectId(input) {
  return stableEmbeddedId(`effect:${input}`);
}

function effectChange(key, value, mode = ACTIVE_EFFECT_MODE.ADD, priority = 20) {
  return { key, mode, value: String(value), priority };
}

function baseEffect({
  profileId,
  key,
  name,
  transfer = true,
  changes = [],
  statuses = [],
  duration = null,
  description = ""
}) {
  const effect = {
    _id: stableEffectId(`${profileId}:${key}`),
    name,
    img: "icons/svg/aura.svg",
    transfer: Boolean(transfer),
    disabled: false,
    changes,
    statuses,
    description,
    flags: {
      [MODULE_ID]: {
        automationPhase: AUTOMATION_PHASE,
        automationProfile: profileId,
        effectKey: key,
        managed: true
      }
    }
  };
  if (duration) effect.duration = duration;
  return effect;
}

function selfTarget() {
  return {
    template: { count: "", contiguous: false, type: "", size: "", width: "", height: "", units: "ft" },
    affects: { count: "", type: "self", choice: false, special: "" },
    prompt: false,
    override: true
  };
}

function normalizeName(value) {
  return String(value ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toUpperCase().replace(/[^A-Z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function ownerIdentifier(bundle) {
  return bundle.kind === "subclass" ? bundle.parentClass?.identifier : bundle.identity?.identifier;
}

function emptyUses() {
  return { spent: 0, max: "", recovery: [] };
}

function recovery(...entries) {
  return entries.flat().map(entry => {
    if (typeof entry === "string") return { period: entry, type: "recoverAll", formula: "" };
    return {
      period: String(entry?.period ?? "lr"),
      type: String(entry?.type ?? "recoverAll"),
      formula: String(entry?.formula ?? "")
    };
  });
}

function itemUses({ max, periods = [], recoveries = [] }) {
  const entries = recoveries.length ? recoveries : periods;
  return { spent: 0, max: String(max ?? ""), recovery: recovery(...entries) };
}

function consumptionTarget(type, target = "", value = "1", scalingMode = "") {
  return { type, target, value: String(value), scaling: { mode: scalingMode, formula: "" } };
}

function utilityRoll(formula = "", { name = "", prompt = false, visible = false } = {}) {
  return { formula, name, prompt, visible };
}

function damagePart({ number = null, denomination = null, bonus = "", types = [], customFormula = "", scalingMode = "", scalingNumber = 1, scalingFormula = "" } = {}) {
  return {
    number,
    denomination,
    bonus,
    types,
    custom: { enabled: Boolean(customFormula), formula: customFormula },
    scaling: { mode: scalingMode, number: scalingNumber, formula: scalingFormula }
  };
}

function baseActivity({
  profileId,
  key,
  type = "utility",
  name,
  classIdentifier,
  activation = "",
  activationValue = null,
  condition = "",
  chatFlavor = "",
  consumptionTargets = [],
  scalingAllowed = false,
  scalingMax = "",
  uses = null,
  duration = null,
  roll = null,
  healing = null,
  damage = null,
  effectIds = [],
  targetSelf = false
}) {
  const activity = {
    _id: stableActivityId(`${profileId}:${key}`),
    type,
    name,
    activation: { type: activation, value: activationValue, condition },
    consumption: {
      scaling: { allowed: Boolean(scalingAllowed), max: String(scalingMax ?? "") },
      spellSlot: false,
      targets: consumptionTargets
    },
    description: { chatFlavor },
    effects: effectIds.map(_id => ({ _id, level: { min: null, max: null } })),
    flags: {
      [MODULE_ID]: {
        automationPhase: AUTOMATION_PHASE,
        automationProfile: profileId,
        activityKey: key
      }
    },
    uses: uses ?? emptyUses(),
    visibility: {
      identifier: classIdentifier ?? "",
      level: { min: null, max: null },
      requireAttunement: false,
      requireIdentification: false,
      requireMagic: false
    }
  };
  if (duration) activity.duration = duration;
  if (targetSelf) activity.target = selfTarget();
  if (roll) activity.roll = roll;
  else if (type === "utility") activity.roll = utilityRoll();
  if (healing) activity.healing = healing;
  if (damage) activity.damage = damage;
  return activity;
}

function profile(id, classIdentifier, featureName, tier, config = {}) {
  const bundleIds = Array.isArray(config.bundleIds) ? config.bundleIds.map(String) : [];
  return Object.freeze({
    id,
    classIdentifier,
    featureName,
    featureNameNormalized: normalizeName(featureName),
    kind: config.kind ?? (bundleIds.length ? "subclass" : "class"),
    bundleIds: Object.freeze(bundleIds),
    tier,
    itemUses: config.itemUses ?? null,
    effects: config.effects ?? [],
    activities: config.activities ?? [],
    limitations: config.limitations ?? [],
    notes: config.notes ?? []
  });
}

const PROFILES = [
  profile("barbarian-rage", "barbarian", "FÚRIA", AUTOMATION_TIER.PARTIAL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "rage", name: "Fúria — benefícios seguros", transfer: false,
      duration: { seconds: 60, rounds: 10, turns: null, startTime: null, startRound: null, startTurn: null },
      changes: [
        effectChange("system.abilities.str.check.roll.mode", "1"),
        effectChange("system.abilities.str.save.roll.mode", "1"),
        effectChange("system.traits.dr.value", "bludgeoning"),
        effectChange("system.traits.dr.value", "piercing"),
        effectChange("system.traits.dr.value", "slashing")
      ],
      description: "Automação parcial: vantagem em testes/salvaguardas de Força e resistência a contundente, perfurante e cortante enquanto o efeito estiver ativo."
    })],
    activities: [ctx => baseActivity({
      ...ctx, key: "enter-rage", type: "utility", name: "Entrar em Fúria", activation: "bonus",
      condition: "No seu turno; não funciona com armadura pesada.", targetSelf: true,
      effectIds: [ctx.effectIdByKey.rage],
      duration: { value: 1, units: "minute", special: "Pode terminar antes pelas condições descritas na característica.", concentration: false, override: true },
      chatFlavor: "Aplica ao próprio personagem os benefícios seguros da Fúria por até 1 minuto. Dano de Fúria, restrição de conjuração e término antecipado continuam regidos pela descrição."
    })],
    limitations: [
      "A quantidade de Fúrias por nível ainda não é convertida em usos automáticos.",
      "O bônus de dano de Fúria não é aplicado globalmente, pois depende de ataques corpo a corpo usando Força.",
      "A restrição de conjuração e as condições de término antecipado continuam manuais; remova o efeito se a Fúria terminar antes de 1 minuto."
    ]
  }),
  profile("barbarian-reckless-attack", "barbarian", "ATAQUE DESCUIDADO", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "reckless", type: "utility", name: "Ataque Descuidado", activation: "special",
      condition: "Ao realizar o primeiro ataque no seu turno.",
      chatFlavor: "Lembrete de Ataque Descuidado. A vantagem nos ataques e contra o personagem não é aplicada automaticamente nesta etapa."
    })],
    limitations: ["A vantagem condicional não é aplicada automaticamente aos ataques."]
  }),
  profile("barbarian-danger-sense", "barbarian", "SENTIDO DE PERIGO", AUTOMATION_TIER.DESCRIPTION, {
    limitations: ["Regra passiva e condicional; permanece somente na descrição para evitar vantagem indevida em salvaguardas de Destreza."]
  }),
  profile("barbarian-feral-instinct", "barbarian", "INSTINTO SELVAGEM", AUTOMATION_TIER.PARTIAL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "initiative-advantage", name: "Instinto Selvagem — iniciativa", transfer: true,
      changes: [effectChange("system.attributes.init.roll.mode", "1")],
      description: "Concede vantagem permanente nas jogadas de iniciativa enquanto a característica estiver no Actor."
    })],
    limitations: ["A vantagem em iniciativa é automática; a regra especial para agir quando surpreendido continua manual."]
  }),

  profile("fighter-second-wind", "fighter", "RETOMAR O FÔLEGO", AUTOMATION_TIER.FULL, {
    itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "second-wind", type: "heal", name: "Retomar o Fôlego", activation: "bonus",
      condition: "No seu turno.",
      consumptionTargets: [consumptionTarget("itemUses")],
      healing: damagePart({ number: 1, denomination: 10, bonus: "@classes.fighter.levels", types: ["healing"] }),
      chatFlavor: "Recupera 1d10 + seu nível de Guerreiro pontos de vida e consome 1 uso."
    })]
  }),
  profile("fighter-action-surge", "fighter", "SURTO DE AÇÃO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1 + floor(@classes.fighter.levels / 17)", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "action-surge", type: "utility", name: "Surto de Ação", activation: "special",
      condition: "Durante o seu turno; no 17º nível ou superior, no máximo uma vez por turno.",
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Consome um uso de Surto de Ação. A ação adicional deve ser realizada normalmente na ficha."
    })],
    limitations: ["O módulo controla os usos, mas não injeta uma ação adicional no turno do personagem."]
  }),
  profile("fighter-indomitable", "fighter", "INDOMÁVEL", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "floor((@classes.fighter.levels - 1) / 4) - 1", periods: ["lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "indomitable", type: "utility", name: "Indomável", activation: "special",
      condition: "Depois de falhar em um teste de resistência; o novo resultado deve ser usado.",
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Consome um uso de Indomável. Faça novamente o teste de resistência pela ficha."
    })],
    limitations: ["O uso é controlado, mas o teste de resistência original não é rerrolado automaticamente pelo Activity."
    ]
  }),

  profile("fighter-archery", "fighter", "ARQUEARIA", AUTOMATION_TIER.FULL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "archery-bonus", name: "Estilo de Luta — Arquearia", transfer: true,
      changes: [effectChange("system.bonuses.rwak.attack", "2")],
      description: "Adiciona +2 às jogadas de ataque com armas de ataque à distância."
    })]
  }),

  profile("rogue-sneak-attack", "rogue", "ATAQUE FURTIVO", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "sneak-attack", type: "utility", name: "Ataque Furtivo", activation: "special",
      condition: "Uma vez por turno, quando as condições de Ataque Furtivo forem satisfeitas.",
      chatFlavor: "Use como lembrete após um ataque válido. O dano adicional e a validação das condições ainda permanecem manuais nesta etapa."
    })],
    limitations: ["A validação de vantagem/aliado adjacente e o dano escalável não são aplicados automaticamente."]
  }),
  profile("rogue-cunning-action", "rogue", "AÇÃO ARDILOSA", AUTOMATION_TIER.PARTIAL, {
    activities: [
      ctx => baseActivity({ ...ctx, key: "dash", type: "utility", name: "Ação Ardilosa — Disparada", activation: "bonus", chatFlavor: "Use sua ação bônus para Disparada." }),
      ctx => baseActivity({ ...ctx, key: "disengage", type: "utility", name: "Ação Ardilosa — Desengajar", activation: "bonus", chatFlavor: "Use sua ação bônus para Desengajar." }),
      ctx => baseActivity({ ...ctx, key: "hide", type: "utility", name: "Ação Ardilosa — Esconder", activation: "bonus", chatFlavor: "Use sua ação bônus para Esconder." })
    ],
    limitations: ["Os Activities representam corretamente as três opções de ação bônus, mas não movem o token nem executam automaticamente a ação de Esconder."]
  }),
  profile("rogue-uncanny-dodge", "rogue", "ESQUIVA SOBRENATURAL", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "uncanny-dodge", type: "utility", name: "Esquiva Sobrenatural", activation: "reaction",
      condition: "Quando um inimigo que você possa ver o atingir com um ataque.",
      chatFlavor: "Reduza pela metade o dano do ataque que ativou esta reação. A redução não é aplicada automaticamente nesta etapa."
    })],
    limitations: ["A redução de dano pela metade permanece manual para não alterar incorretamente outros danos do mesmo ataque/evento."]
  }),

  profile("monk-ki", "monk", "CHI", AUTOMATION_TIER.FULL, {
    itemUses: { max: "@classes.monk.levels", periods: ["sr", "lr"] },
    notes: ["O Item CHI funciona como reserva compartilhada para Activities de características que consomem pontos de Chi."]
  }),
  profile("monk-flurry-of-blows", "monk", "RAJADA DE GOLPES", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "flurry", type: "utility", name: "Rajada de Golpes", activation: "bonus",
      condition: "Imediatamente após realizar a ação de Ataque no seu turno.",
      consumptionTargets: [consumptionTarget("itemUses", "monk-chi", "1")],
      chatFlavor: "Consome 1 ponto de Chi. Realize dois golpes desarmados separadamente pela ficha."
    })],
    limitations: ["O consumo de Chi é automático; os dois golpes desarmados continuam sendo realizados pelos ataques normais do personagem."]
  }),
  profile("monk-patient-defense", "monk", "DEFESA PACIENTE", AUTOMATION_TIER.PARTIAL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "dodge", name: "Defesa Paciente — Esquivar", transfer: false,
      duration: { seconds: 6, rounds: 1, turns: null, startTime: null, startRound: null, startTurn: null },
      statuses: ["dodging"],
      changes: [effectChange("system.abilities.dex.save.roll.mode", "1")],
      description: "Marca o personagem como Esquivando e automatiza vantagem em salvaguardas de Destreza por aproximadamente 1 rodada."
    })],
    activities: [ctx => baseActivity({
      ...ctx, key: "patient-defense", type: "utility", name: "Defesa Paciente", activation: "bonus",
      condition: "No seu turno.", targetSelf: true, effectIds: [ctx.effectIdByKey.dodge],
      consumptionTargets: [consumptionTarget("itemUses", "monk-chi", "1")],
      chatFlavor: "Consome 1 ponto de Chi, aplica o marcador Esquivar e concede vantagem em salvaguardas de Destreza."
    })],
    limitations: [
      "O consumo de Chi e a vantagem em salvaguardas de Destreza são automáticos.",
      "A desvantagem dos ataques contra quem está Esquivando continua dependente do comportamento do sistema/mesa e não é injetada globalmente.",
      "Se a condição de Esquivar terminar antes por incapacidade ou deslocamento 0, remova o efeito manualmente."
    ]
  }),
  profile("monk-step-of-the-wind", "monk", "PASSO DO VENTO", AUTOMATION_TIER.PARTIAL, {
    activities: [
      ctx => baseActivity({
        ...ctx, key: "dash", type: "utility", name: "Passo do Vento — Disparada", activation: "bonus",
        condition: "No seu turno.", consumptionTargets: [consumptionTarget("itemUses", "monk-chi", "1")],
        chatFlavor: "Consome 1 ponto de Chi para Disparada como ação bônus. Sua distância de salto dobra neste turno."
      }),
      ctx => baseActivity({
        ...ctx, key: "disengage", type: "utility", name: "Passo do Vento — Desengajar", activation: "bonus",
        condition: "No seu turno.", consumptionTargets: [consumptionTarget("itemUses", "monk-chi", "1")],
        chatFlavor: "Consome 1 ponto de Chi para Desengajar como ação bônus. Sua distância de salto dobra neste turno."
      })
    ],
    limitations: ["O consumo de Chi é automático; deslocamento e distância de salto não são alterados automaticamente."]
  }),

  profile("monk-purity-of-body", "monk", "PUREZA CORPORAL", AUTOMATION_TIER.FULL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "purity-immunities", name: "Pureza Corporal", transfer: true,
      changes: [
        effectChange("system.traits.ci.value", "diseased"),
        effectChange("system.traits.ci.value", "poisoned"),
        effectChange("system.traits.di.value", "poison")
      ],
      description: "Concede imunidade a doenças, à condição Envenenado e a dano de veneno."
    })]
  }),

  profile("paladin-divine-sense", "paladin", "SENTIDO DIVINO", AUTOMATION_TIER.FULL, {
    itemUses: { max: "1 + @abilities.cha.mod", periods: ["lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "divine-sense", type: "utility", name: "Sentido Divino", activation: "action",
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Consome 1 uso de Sentido Divino. A detecção e suas restrições permanecem descritas no Item."
    })]
  }),
  profile("paladin-lay-on-hands", "paladin", "CURA PELAS MÃOS", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "@classes.paladin.levels * 5", periods: ["lr"] },
    activities: [
      ctx => baseActivity({
        ...ctx, key: "heal", type: "heal", name: "Cura pelas Mãos — Restaurar PV", activation: "action",
        condition: "Toque uma criatura; não funciona em mortos-vivos ou constructos.",
        scalingAllowed: true, scalingMax: "@item.uses.value - 1",
        consumptionTargets: [consumptionTarget("itemUses", "", "1", "amount")],
        healing: damagePart({ customFormula: "1", types: ["healing"], scalingMode: "whole", scalingNumber: 0, scalingFormula: "1" }),
        chatFlavor: "Escolha a escala para determinar quantos pontos serão gastos e restaurados. O valor curado acompanha o consumo da reserva."
      }),
      ctx => baseActivity({
        ...ctx, key: "cleanse", type: "utility", name: "Cura pelas Mãos — Curar doença/veneno", activation: "action",
        condition: "Toque uma criatura; gaste 5 pontos por doença curada ou veneno neutralizado.",
        consumptionTargets: [consumptionTarget("itemUses", "", "5")],
        chatFlavor: "Consome 5 pontos da reserva. A remoção da doença ou veneno é resolvida manualmente."
      })
    ],
    limitations: ["A cura de PV e o consumo variável são automatizados; doenças e venenos não são removidos automaticamente."]
  }),
  profile("paladin-divine-health", "paladin", "SAÚDE DIVINA", AUTOMATION_TIER.FULL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "disease-immunity", name: "Saúde Divina", transfer: true,
      changes: [effectChange("system.traits.ci.value", "diseased")],
      description: "Concede imunidade a doenças enquanto a característica estiver presente no Actor."
    })]
  }),

  profile("paladin-divine-smite", "paladin", "DESTRUIÇÃO DIVINA", AUTOMATION_TIER.PARTIAL, {
    activities: [
      ctx => baseActivity({
        ...ctx, key: "smite-1-4", type: "damage", name: "Destruição Divina — Espaço de 1º a 4º", activation: "special",
        condition: "Depois de atingir uma criatura com um ataque corpo a corpo com arma.",
        scalingAllowed: true, scalingMax: "3",
        consumptionTargets: [consumptionTarget("spellSlots", "1", "1", "level")],
        damage: { critical: { allow: false, bonus: "" }, parts: [damagePart({ number: 2, denomination: 8, types: ["radiant"], scalingMode: "whole", scalingNumber: 1 })] },
        chatFlavor: "Consome um espaço entre 1º e 4º nível e rola 2d8 + 1d8 por nível acima do 1º."
      }),
      ctx => baseActivity({
        ...ctx, key: "smite-5-plus", type: "damage", name: "Destruição Divina — Espaço de 5º ou maior", activation: "special",
        condition: "Depois de atingir uma criatura com um ataque corpo a corpo com arma.",
        scalingAllowed: true, scalingMax: "4",
        consumptionTargets: [consumptionTarget("spellSlots", "5", "1", "level")],
        damage: { critical: { allow: false, bonus: "" }, parts: [damagePart({ number: 5, denomination: 8, types: ["radiant"] })] },
        chatFlavor: "Consome um espaço de 5º nível ou maior e mantém o dano básico no limite de 5d8."
      }),
      ctx => baseActivity({
        ...ctx, key: "smite-fiend-undead", type: "damage", name: "Destruição Divina — Bônus contra corruptor/morto-vivo", activation: "special",
        condition: "Use apenas se o alvo da Destruição Divina for um corruptor ou morto-vivo.",
        damage: { critical: { allow: false, bonus: "" }, parts: [damagePart({ number: 1, denomination: 8, types: ["radiant"] })] },
        chatFlavor: "Rola somente o 1d8 adicional contra corruptores ou mortos-vivos; não consome outro espaço de magia."
      })
    ],
    limitations: ["O jogador ainda precisa decidir quando o ataque válido ocorreu e usar o Activity apropriado; o bônus racial do alvo permanece uma segunda rolagem opcional."]
  }),
  profile("paladin-improved-divine-smite", "paladin", "DESTRUIÇÃO DIVINA APRIMORADA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "improved-divine-smite", type: "damage", name: "Destruição Divina Aprimorada — dano extra", activation: "special",
      condition: "Depois de atingir uma criatura com um ataque corpo a corpo válido pela característica.",
      damage: { critical: { allow: false, bonus: "" }, parts: [damagePart({ number: 1, denomination: 8, types: ["radiant"] })] },
      chatFlavor: "Rola 1d8 de dano radiante adicional. Use após um ataque corpo a corpo válido; não altera globalmente ataques desarmados ou outros casos limítrofes."
    })],
    limitations: ["O 1d8 adicional fica em uma Activity manual para não aplicar o bônus globalmente a ataques que não satisfaçam a redação da característica."]
  }),

  profile("ranger-natural-explorer", "ranger", "EXPLORADOR NATURAL", AUTOMATION_TIER.PARTIAL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "initiative-advantage", name: "Explorador Natural — iniciativa", transfer: true,
      changes: [effectChange("system.attributes.init.roll.mode", "1")],
      description: "Automatiza somente a vantagem permanente em iniciativa concedida pela característica."
    })],
    limitations: ["Terreno, viagem, primeiro turno e demais benefícios de Explorar Natural continuam regidos pela descrição."]
  }),
  profile("ranger-archery", "ranger", "ARQUEARIA", AUTOMATION_TIER.FULL, {
    effects: [ctx => baseEffect({
      ...ctx, key: "archery-bonus", name: "Estilo de Luta — Arquearia", transfer: true,
      changes: [effectChange("system.bonuses.rwak.attack", "2")],
      description: "Adiciona +2 às jogadas de ataque com armas de ataque à distância."
    })]
  }),
  profile("ranger-fast-feet", "ranger", "PÉS RÁPIDOS", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "dash", type: "utility", name: "Pés Rápidos — Disparada", activation: "bonus",
      chatFlavor: "Use sua ação bônus para realizar Disparada."
    })],
    limitations: ["A Activity registra corretamente a ação bônus, mas não movimenta o token automaticamente."]
  }),
  profile("ranger-vanish", "ranger", "DESAPARECER", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "hide", type: "utility", name: "Desaparecer — Esconder", activation: "bonus",
      chatFlavor: "Use sua ação bônus para realizar Esconder."
    })],
    limitations: ["A ação bônus é representada pela Activity; imunidade a rastreamento não é aplicada automaticamente."]
  }),
  // Fase 12 — expansão conservadora para as demais classes-base.
  profile("bard-bardic-inspiration", "bard", "INSPIRAÇÃO DE BARDO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "max(1, @abilities.cha.mod)", periods: ["lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "inspire", type: "utility", name: "Inspiração de Bardo", activation: "bonus",
      condition: "Escolha outra criatura a até 18 m que possa ouvi-lo.",
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Concede um dado de Inspiração de Bardo e consome 1 uso. O tamanho do dado e sua aplicação continuam regidos pela descrição."
    })],
    limitations: ["O dado escalável d6/d8/d10/d12 e sua transferência para outro Actor ainda não são criados automaticamente."]
  }),
  profile("warlock-eldritch-master", "warlock", "MESTRE MÍSTICO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "restore-pact", type: "utility", name: "Mestre Místico", activation: "minute", activationValue: 1,
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Consome o uso diário. Depois de 1 minuto de súplica, recupere manualmente todos os espaços de Magia de Pacto gastos."
    })],
    limitations: ["O Activity controla o uso, mas a restauração dos espaços de pacto permanece manual."]
  }),
  profile("cleric-channel-divinity", "cleric", "CANALIZAR DIVINDADE", AUTOMATION_TIER.FULL, {
    itemUses: { max: "1 + floor(@classes.cleric.levels / 6) - floor(@classes.cleric.levels / 12)", periods: ["sr", "lr"] },
    notes: ["Funciona como reserva compartilhada para Expulsar Mortos-vivos e opções de domínio automatizadas."]
  }),
  profile("cleric-turn-undead", "cleric", "CANALIZAR DIVINDADE: EXPULSAR MORTOS-VIVOS", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "turn-undead", type: "utility", name: "Expulsar Mortos-vivos", activation: "action",
      consumptionTargets: [consumptionTarget("itemUses", "cleric-canalizar-divindade", "1")],
      chatFlavor: "Consome 1 uso de Canalizar Divindade. Faça as salvaguardas de Sabedoria e aplique Expulso conforme a descrição."
    })],
    limitations: ["O consumo da reserva é automático; salvaguardas e comportamento de criaturas expulsas permanecem manuais."]
  }),
  profile("druid-wild-shape", "druid", "FORMA SELVAGEM", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "2", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({
      ...ctx, key: "wild-shape", type: "utility", name: "Forma Selvagem", activation: "action",
      consumptionTargets: [consumptionTarget("itemUses")],
      chatFlavor: "Consome 1 uso de Forma Selvagem. A transformação em besta deve ser executada pelo fluxo nativo de transformação da mesa."
    })],
    limitations: ["O módulo controla os dois usos e a recuperação; a transformação do Actor não é disparada automaticamente."]
  }),
  profile("sorcerer-sorcery-points", "sorcerer", "PONTOS DE FEITIÇARIA", AUTOMATION_TIER.FULL, {
    itemUses: { max: "@classes.sorcerer.levels", periods: ["lr"] },
    notes: ["Reserva compartilhada para as opções de Metamágica automatizadas na Fase 12."]
  }),
  profile("sorcerer-quickened-spell", "sorcerer", "MAGIA ACELERADA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "quickened", type: "utility", name: "Metamágica — Magia Acelerada", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "2")], chatFlavor: "Consome 2 Pontos de Feitiçaria. A alteração do tempo de conjuração da magia selecionada continua manual." })],
    limitations: ["O custo é automático; o sistema não reescreve o tempo de conjuração de outra magia."]
  }),
  profile("sorcerer-heightened-spell", "sorcerer", "MAGIA AUMENTADA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "heightened", type: "utility", name: "Metamágica — Magia Aumentada", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "3")], chatFlavor: "Consome 3 Pontos de Feitiçaria. A desvantagem do primeiro teste de resistência do alvo continua manual." })]
  }),
  profile("sorcerer-careful-spell", "sorcerer", "MAGIA CUIDADOSA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "careful", type: "utility", name: "Metamágica — Magia Cuidadosa", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "1")], chatFlavor: "Consome 1 Ponto de Feitiçaria. Selecione manualmente as criaturas protegidas pela Metamágica." })]
  }),
  profile("sorcerer-distant-spell", "sorcerer", "MAGIA DISTANTE", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "distant", type: "utility", name: "Metamágica — Magia Distante", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "1")], chatFlavor: "Consome 1 Ponto de Feitiçaria. Ajuste o alcance da magia conforme a característica." })]
  }),
  profile("sorcerer-twinned-spell", "sorcerer", "MAGIA DUPLICADA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "twinned", type: "utility", name: "Metamágica — Magia Duplicada", activation: "special", chatFlavor: "Use após escolher uma magia elegível. O custo variável em Pontos de Feitiçaria permanece manual nesta versão." })],
    limitations: ["O custo depende do nível da magia escolhida e não é inferido automaticamente para evitar consumo incorreto."]
  }),
  profile("sorcerer-extended-spell", "sorcerer", "MAGIA ESTENDIDA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "extended", type: "utility", name: "Metamágica — Magia Estendida", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "1")], chatFlavor: "Consome 1 Ponto de Feitiçaria. A duração da magia selecionada continua ajustada manualmente." })]
  }),
  profile("sorcerer-empowered-spell", "sorcerer", "MAGIA POTENCIALIZADA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "empowered", type: "utility", name: "Metamágica — Magia Potencializada", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "1")], chatFlavor: "Consome 1 Ponto de Feitiçaria. Selecione e rerrole manualmente os dados permitidos pela característica." })]
  }),
  profile("sorcerer-subtle-spell", "sorcerer", "MAGIA SUTIL", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "subtle", type: "utility", name: "Metamágica — Magia Sutil", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "sorcerer-pontos-de-feiticaria", "1")], chatFlavor: "Consome 1 Ponto de Feitiçaria. A remoção de componentes verbal/somático da magia selecionada permanece contextual." })]
  }),
  profile("wizard-arcane-recovery", "wizard", "RECUPERAÇÃO ARCANA", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "arcane-recovery", type: "utility", name: "Recuperação Arcana", activation: "special", condition: "Ao terminar um descanso curto.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso diário. Recupere manualmente espaços cuja soma seja até metade do nível de Mago, arredondado para cima, sem espaços de 6º nível ou maior." })],
    limitations: ["A seleção e restauração dos espaços de magia permanecem manuais."]
  }),
  profile("artificer-flash-of-genius", "artificer", "LAMPEJO DE GENIALIDADE", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "max(1, @abilities.int.mod)", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "flash", type: "utility", name: "Lampejo de Genialidade", activation: "reaction", condition: "Quando você ou criatura visível a até 9 m faz teste de habilidade ou salvaguarda.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Some seu modificador de Inteligência ao resultado da rolagem escolhida." })],
    limitations: ["A reação e o uso são controlados; o bônus não é injetado automaticamente na rolagem de outro Actor."]
  }),
  profile("favored-soul-purification", "favored-soul", "PURIFICAÇÃO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "floor(@prof / 2)", periods: ["lr"] },
    activities: [
      ctx => baseActivity({ ...ctx, key: "restoration", type: "utility", name: "Purificação — Restauração", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Cure uma criatura em 10 × o nível de seus espaços de pacto." }),
      ctx => baseActivity({ ...ctx, key: "destruction", type: "utility", name: "Purificação — Destruição", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Resolva a salvaguarda e o dano de acordo com o nível dos espaços de pacto." }),
      ctx => baseActivity({ ...ctx, key: "declaration", type: "utility", name: "Purificação — Declaração Justa", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Resolva as salvaguardas e o comando conforme a descrição." }),
      ctx => baseActivity({ ...ctx, key: "void", type: "utility", name: "Purificação — Vontade do Vazio", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Aplique as salvaguardas e Atordoado conforme a descrição." }),
      ctx => baseActivity({ ...ctx, key: "sanctuary", type: "utility", name: "Purificação — Santuário Sagrado", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso e inicia o benefício defensivo por 1 minuto; as salvaguardas de atacantes permanecem manuais." })
    ],
    limitations: ["A reserva é automática; os cinco efeitos dependem do alinhamento e continuam com resolução contextual/manual."]
  }),
  profile("inscriptor-consultation", "inscriptor", "CONSULTA", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1 + min(1, floor(@classes.inscriptor.levels / 9)) + min(1, floor(@classes.inscriptor.levels / 14)) + min(1, floor(@classes.inscriptor.levels / 18))", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "consultation", type: "utility", name: "Consulta", activation: "bonus", scalingAllowed: true, scalingMax: "@item.uses.value - 1", consumptionTargets: [consumptionTarget("itemUses", "", "1", "amount")], chatFlavor: "Escolha quantos usos de Consulta gastar. O novo espaço de pacto resultante deve ser criado/registrado manualmente conforme a característica." })],
    limitations: ["O número de usos e o consumo variável são automatizados; a criação temporária do espaço de pacto permanece manual."]
  }),
  profile("petal-knight-virtuous-flora", "petal-knight", "FLORA VIRTUOSA", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "floor(@prof / 2) + 1", periods: ["sr", "lr"] },
    activities: [
      ctx => baseActivity({ ...ctx, key: "attack", type: "utility", name: "Flora Virtuosa — Ataque", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso; faça um ataque com arma de uma mão." }),
      ctx => baseActivity({ ...ctx, key: "charming-soul", type: "utility", name: "Flora Virtuosa — Alma Encantadora", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso; aplique vantagem em testes e salvaguardas de Carisma por 1 minuto." }),
      ctx => baseActivity({ ...ctx, key: "bloom", type: "utility", name: "Flora Virtuosa — Florescer", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso; ataques válidos com arma de uma mão têm vantagem até o fim do turno." }),
      ctx => baseActivity({ ...ctx, key: "mantle", type: "utility", name: "Flora Virtuosa — Manto", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso; escolha manualmente a resistência a dano até o início do próximo turno." }),
      ctx => baseActivity({ ...ctx, key: "divine-strike", type: "utility", name: "Flora Virtuosa — Golpe Divino", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso; o próximo ataque válido causa o dano adicional descrito." })
    ]
  }),
  profile("sword-saint-focus-channel", "sword-saint", "CANALIZAÇÃO DE FOCO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "5 + @classes.sword-saint.levels", recoveries: [{ period: "lr", type: "recoverAll" }, { period: "sr", type: "formula", formula: "ceil((5 + @classes.sword-saint.levels) / 2)" }] },
    effects: [ctx => baseEffect({ ...ctx, key: "falcon-wing", name: "Deflexão da Asa do Falcão", transfer: false, duration: { seconds: 6, rounds: 1, turns: null, startTime: null, startRound: null, startTurn: null }, changes: [effectChange("system.attributes.ac.bonus", "@prof")], description: "Adiciona o bônus de proficiência à CA até o início do próximo turno. Remova antes se ficar impedido ou caído." })],
    activities: [
      ctx => baseActivity({ ...ctx, key: "adept-moment", type: "utility", name: "Foco — Momento de Adepto", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "", "1")], chatFlavor: "Consome 1 Foco; some novamente seu bônus de proficiência a um teste elegível." }),
      ctx => baseActivity({ ...ctx, key: "cunning-vault", type: "utility", name: "Foco — Vertical Astuta", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses", "", "1")], chatFlavor: "Consome 1 Foco para Desengajar como ação bônus." }),
      ctx => baseActivity({ ...ctx, key: "falcon-wing", type: "utility", name: "Foco — Deflexão da Asa do Falcão", activation: "reaction", targetSelf: true, effectIds: [ctx.effectIdByKey["falcon-wing"]], consumptionTargets: [consumptionTarget("itemUses", "", "2")], chatFlavor: "Consome 2 Focos e aplica +PB na CA por até 1 rodada." }),
      ctx => baseActivity({ ...ctx, key: "fleeting-step", type: "utility", name: "Foco — Passo Fugaz", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses", "", "1")], chatFlavor: "Consome 1 Foco; mova a distância adicional descrita." }),
      ctx => baseActivity({ ...ctx, key: "overwhelming-advance", type: "utility", name: "Foco — Avanço Avassalador", activation: "special", consumptionTargets: [consumptionTarget("itemUses", "", "1")], chatFlavor: "Consome 1 Foco após errar um ataque com arma; rerrole o d20 e use o novo resultado." })
    ],
    limitations: ["A recuperação parcial de Foco no Descanso Curto usa a recuperação por fórmula nativa do DnD5e 5.3.3."]
  }),
  profile("dragoneer-dragon-breath", "dragoneer", "SOPRO DO DRAGÃO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "breath", type: "utility", name: "Sopro do Dragão", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso de Sopro do Dragão. Escolha a geometria, salvaguarda e tipo de Encarnação conforme o perfil atual do Cavaleiro Dracônico." })],
    limitations: ["A fonte usa 'uma vez por Descanso'; o perfil recupera em Descanso Curto ou Longo. Área, CD e tipo de dano variam pela Encarnação e permanecem contextuais."]
  }),
  profile("frame-pilot-frame-boost", "frame-pilot", "IMPULSO DE FRAME", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "boost", type: "utility", name: "Impulso de Frame", activation: "special", condition: "Quando uma unidade frame for reduzida a 0 PV.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Ajuste a unidade para 1 PV, aplique PV temporários e Fadiga de Combate conforme a característica." })],
    limitations: ["A melhoria do 10º nível altera a recuperação para 'por Descanso'; nesta versão a reserva base permanece Longo até que o jogador aplique a melhoria manualmente."]
  }),
  profile("bender-primal-form", "bender", "FORMA PRIMORDIAL", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["lr"] },
    effects: [
      ctx => baseEffect({ ...ctx, key: "air", name: "Forma Primordial — Ar", transfer: false, duration: { seconds: 60, rounds: 10, turns: null, startTime: null, startRound: null, startTurn: null }, changes: [effectChange("system.traits.dr.value", "bludgeoning"), effectChange("system.traits.dr.value", "piercing"), effectChange("system.traits.dr.value", "slashing")], description: "Resistência a contundente, perfurante e cortante durante a Forma Primordial de Ar." }),
      ctx => baseEffect({ ...ctx, key: "earth", name: "Forma Primordial — Terra", transfer: false, duration: { seconds: 60, rounds: 10, turns: null, startTime: null, startRound: null, startTurn: null }, changes: [effectChange("system.attributes.ac.bonus", "2")], description: "+2 na CA durante a Forma Primordial de Terra." })
    ],
    activities: [
      ctx => baseActivity({ ...ctx, key: "air", type: "utility", name: "Forma Primordial — Ar", activation: "bonus", targetSelf: true, effectIds: [ctx.effectIdByKey.air], consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso e aplica as resistências seguras da forma de Ar por até 1 minuto." }),
      ctx => baseActivity({ ...ctx, key: "earth", type: "utility", name: "Forma Primordial — Terra", activation: "bonus", targetSelf: true, effectIds: [ctx.effectIdByKey.earth], consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso e aplica +2 na CA por até 1 minuto." }),
      ctx => baseActivity({ ...ctx, key: "fire", type: "utility", name: "Forma Primordial — Fogo", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso. O dano em área no fim do turno permanece manual." }),
      ctx => baseActivity({ ...ctx, key: "water", type: "utility", name: "Forma Primordial — Água", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso. Registre e gaste manualmente a reserva de vitalidade da forma de Água." })
    ],
    limitations: ["Ar e Terra possuem Active Effects seguros. Fogo, Água e conjurações gratuitas permanecem contextuais."]
  }),
  profile("bender-primal-avatar", "bender", "AVATAR PRIMORDIAL", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "avatar", type: "utility", name: "Avatar Primordial", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso e inicia Avatar Primordial por até 10 minutos. Aplique 50 PV temporários e os benefícios de afinidade conforme a tabela." })],
    limitations: ["Os 50 PV temporários e benefícios cumulativos dependentes das Afinidades permanecem manuais."]
  }),
  profile("tamer-alpha-attack", "tamer", "ATAQUE ALFA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "alpha", type: "utility", name: "Ataque Alfa", activation: "special", condition: "Como parte da ação usada para invocar um companheiro.", chatFlavor: "Comande o companheiro a realizar uma ação. Marque manualmente um dos usos concedidos pelo seu modificador de conjuração." })],
    limitations: ["O número de usos depende da habilidade de conjuração dinâmica do Domador e permanece manual para não assumir INT/SAB/CAR incorretamente."]
  }),
  profile("tamer-switch-swap", "tamer", "TROCA-TROCA", AUTOMATION_TIER.PARTIAL, {
    activities: [
      ctx => baseActivity({ ...ctx, key: "bonus", type: "utility", name: "Troca-Troca — Ação bônus", activation: "bonus", chatFlavor: "Troque de lugar com um companheiro elegível. Registre manualmente o uso." }),
      ctx => baseActivity({ ...ctx, key: "reaction", type: "utility", name: "Troca-Troca — Reação", activation: "reaction", condition: "Quando você ou o companheiro for alvo de ataque de atacante visível.", chatFlavor: "Troque de lugar; quem chega ao espaço torna-se o novo alvo. Registre manualmente o uso." })
    ],
    limitations: ["Os usos por Descanso Longo dependem da habilidade de conjuração dinâmica e permanecem manuais."]
  }),
  profile("blood-minister-vile-resonance", "blood-minister", "RESSONÂNCIA VIL", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "@prof", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "vile-resonance", type: "utility", name: "Ressonância Vil", activation: "special", condition: "Depois de usar Ministração Sanguínea em ataques e acertar a criatura.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso e aplica os efeitos narrados de marca do caçador sem concentração; o alvo deve ser controlado manualmente." })],
    limitations: ["O uso é automático; a marca e o bônus de dano dependem do alvo e não são aplicados globalmente."]
  }),
  profile("spiritual-emissary-spiritual-energy", "spiritual-emissary", "ENERGIA ESPIRITUAL", AUTOMATION_TIER.FULL, {
    itemUses: { max: "2 * @classes.spiritual-emissary.levels + @abilities.wis.mod + 6", periods: ["lr"] },
    notes: ["Reserva compartilhada de Pontos de Selo."]
  }),
  profile("spiritual-emissary-close-gates", "spiritual-emissary", "FECHAR PORTÕES", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "close-gates", type: "utility", name: "Fechar Portões", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso da característica. Cure os aliados na Senda pelo Dado Curativo + Sabedoria e respeite o bloqueio de 2 rodadas." })],
    limitations: ["O uso é controlado; o Dado Curativo escalável e a seleção de aliados dentro da Senda permanecem manuais."]
  }),
  profile("spiritual-emissary-healing-ofudas", "spiritual-emissary", "OFUDAS DE CURA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({ ...ctx, key: "heal", type: "utility", name: "Ofudas de Cura", activation: "action", scalingAllowed: true, scalingMax: "3", consumptionTargets: [consumptionTarget("itemUses", "spiritual-emissary-energia-espiritual", "1", "amount")], chatFlavor: "Escolha escala 1–4 para gastar a mesma quantidade de Pontos de Selo. Role manualmente o Dado Curativo por ponto e some Sabedoria." })],
    limitations: ["O consumo variável de Pontos de Selo é automático; a fórmula usa um Dado Curativo próprio da classe e permanece manual nesta versão."]
  }),
  profile("spellblade-arcane-surge", "spellblade", "SURTO ARCANO", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "@prof", periods: ["sr", "lr"] },
    activities: [
      ctx => baseActivity({ ...ctx, key: "detect-magic", type: "utility", name: "Surto Arcano — Detectar Magia", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 Surto Arcano; conjure Detectar Magia sem gastar espaço." }),
      ctx => baseActivity({ ...ctx, key: "advantage", type: "utility", name: "Surto Arcano — Vantagem", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 Surto Arcano; aplique vantagem a uma jogada de ataque elegível." }),
      ctx => baseActivity({ ...ctx, key: "enhance", type: "utility", name: "Surto Arcano — Aprimorar Habilidade", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 Surto Arcano; some Inteligência ao teste elegível de Força ou Destreza." }),
      ctx => baseActivity({ ...ctx, key: "teleport", type: "utility", name: "Surto Arcano — Teleporte", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 Surto Arcano; teletransporte-se a distância permitida pelo seu nível." })
    ],
    limitations: ["A reserva é automática; as quatro opções continuam exigindo aplicação contextual da vantagem, bônus ou teleporte."]
  }),
  profile("spellblade-arcane-deflection", "spellblade", "DEFLEXÃO ARCANA", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "shield", type: "utility", name: "Deflexão Arcana — Escudo gratuito", activation: "reaction", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso gratuito de Escudo. Use/conjure a magia Escudo normalmente na ficha sem gastar espaço." })],
    limitations: ["O uso gratuito é controlado; o Activity não dispara automaticamente outro Item de magia."]
  }),
  profile("cultivator-divine-authority", "cultivator", "AUTORIDADE DIVINA", AUTOMATION_TIER.PARTIAL, {
    activities: [ctx => baseActivity({
      ...ctx, key: "appeal", type: "utility", name: "Apelar à Autoridade Divina", activation: "action",
      roll: utilityRoll("1d100", { name: "Autoridade Divina", visible: true }),
      chatFlavor: "Role 1d100. Do 10º ao 19º nível, a manifestação ocorre se o resultado for igual ou inferior ao seu nível de Cultivador. No 20º nível, o sucesso é automático. O Mestre determina a natureza da manifestação."
    })],
    limitations: [
      "O sucesso por nível e o sucesso automático do 20º nível permanecem para conferência do jogador/Mestre.",
      "A recarga é condicional: após sucesso, 7 dias até o 19º nível; após falha, descanso longo; no 20º nível, descanso longo. Por isso o módulo não aplica uma reserva automática que poderia bloquear usos incorretamente."
    ]
  }),
  profile("paladin-channel-divinity", "paladin", "CANALIZAR DIVINDADE", AUTOMATION_TIER.FULL, {
    itemUses: { max: "1", periods: ["sr", "lr"] },
    notes: ["Reserva compartilhada para as opções de Juramento automatizadas."]
  }),
  profile("paladin-cleansing-touch", "paladin", "TOQUE PURIFICADOR", AUTOMATION_TIER.PARTIAL, {
    itemUses: { max: "max(1, @abilities.cha.mod)", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "cleanse", type: "utility", name: "Toque Purificador", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Termine uma magia elegível sobre você ou uma criatura voluntária tocada." })],
    limitations: ["O uso é automático; a seleção e encerramento do efeito de magia permanecem manuais."]
  }),

  // Fase 12 — primeiros perfis explicitamente ligados a subclasses.
  profile("archfey-fey-presence", "warlock", "PRESENÇA FEÉRICA", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["arquifada"], itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "presence", type: "utility", name: "Presença Feérica", activation: "action", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso. Resolva a salvaguarda de Sabedoria e escolha Enfeitiçado ou Amedrontado." })]
  }),
  profile("fiend-dark-ones-own-luck", "warlock", "SORTE DO PRÓPRIO OBSCURO", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["corruptor"], itemUses: { max: "1", periods: ["sr", "lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "luck", type: "utility", name: "Sorte do Próprio Obscuro", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], roll: utilityRoll("1d10", { name: "Bônus de Sorte do Próprio Obscuro", visible: true }), chatFlavor: "Consome o uso e rola 1d10 para somar ao teste de habilidade ou salvaguarda escolhido." })]
  }),
  profile("war-domain-war-priest", "cleric", "SACERDOTE DA GUERRA", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["dominio-guerra"], itemUses: { max: "max(1, @abilities.wis.mod)", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "war-priest", type: "utility", name: "Sacerdote da Guerra — ataque", activation: "bonus", condition: "Depois de usar a ação Atacar.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Faça um ataque com arma como ação bônus." })]
  }),
  profile("light-domain-warding-flare", "cleric", "LABAREDA PROTETORA", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["dominio-luz"], itemUses: { max: "max(1, @abilities.wis.mod)", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "flare", type: "utility", name: "Labareda Protetora", activation: "reaction", condition: "Quando for atacado por criatura visível a até 9 m.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso. Imponha desvantagem ao ataque elegível." })]
  }),
  profile("moon-druid-combat-wild-shape", "druid", "FORMA SELVAGEM DE COMBATE", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["circulo-lua"],
    activities: [ctx => baseActivity({ ...ctx, key: "transform", type: "utility", name: "Forma Selvagem de Combate", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses", "druid-forma-selvagem", "1")], chatFlavor: "Consome 1 uso da Forma Selvagem base e permite transformar-se como ação bônus." })],
    limitations: ["A cura com espaço de magia enquanto transformado permanece manual nesta versão."]
  }),
  profile("wild-magic-tides-of-chaos", "sorcerer", "MARÉS DE CAOS", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["magia-selvagem"], itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "tides", type: "utility", name: "Marés de Caos", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome o uso e concede vantagem à rolagem escolhida. O Mestre ainda pode restaurar o uso antecipadamente após provocar Surto de Magia Selvagem." })],
    limitations: ["A recuperação antecipada concedida pelo Mestre após um Surto não é detectada automaticamente."]
  }),
  profile("battle-master-superiority", "fighter", "SUPERIORIDADE EM COMBATE", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["mestre-batalha"], itemUses: { max: "4 + floor(@classes.fighter.levels / 7) - floor(@classes.fighter.levels / 14) + floor(@classes.fighter.levels / 15)", periods: ["sr", "lr"] },
    notes: ["A reserva de Dados de Superioridade é automática; as manobras individuais ainda não foram materializadas como Activities nesta fase."],
    limitations: ["O tamanho do dado d8/d10/d12 e as manobras escolhidas continuam representados pela descrição/itens de opção."]
  }),
  profile("thief-fast-hands", "rogue", "MÃOS RÁPIDAS", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["ladrao"], activities: [
      ctx => baseActivity({ ...ctx, key: "sleight", type: "utility", name: "Mãos Rápidas — Prestidigitação", activation: "bonus", chatFlavor: "Use a ação bônus da Ação Ardilosa para o teste de Prestidigitação descrito." }),
      ctx => baseActivity({ ...ctx, key: "tools", type: "utility", name: "Mãos Rápidas — Ferramentas de Ladrão", activation: "bonus", chatFlavor: "Use a ação bônus para desarmar armadilha ou abrir fechadura com ferramentas de ladrão." }),
      ctx => baseActivity({ ...ctx, key: "object", type: "utility", name: "Mãos Rápidas — Usar Objeto", activation: "bonus", chatFlavor: "Use a ação bônus para realizar Usar um Objeto." })
    ]
  }),
  profile("divination-portent", "wizard", "PRODÍGIO", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["escola-adivinhacao"], itemUses: { max: "2", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "portent", type: "utility", name: "Prodígio — gastar premonição", activation: "special", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome uma das duas premonições. Substitua manualmente a rolagem pelo d20 previamente anotado." })],
    limitations: ["Os dois valores de d20 rolados após o Descanso Longo ainda precisam ser anotados pelo jogador."]
  }),
  profile("open-hand-wholeness", "monk", "INTEGRIDADE CORPORAL", AUTOMATION_TIER.FULL, {
    kind: "subclass", bundleIds: ["mao-aberta"], itemUses: { max: "1", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "wholeness", type: "heal", name: "Integridade Corporal", activation: "action", targetSelf: true, consumptionTargets: [consumptionTarget("itemUses")], healing: damagePart({ customFormula: "3 * @classes.monk.levels", types: ["healing"] }), chatFlavor: "Consome o uso e recupera 3 × seu nível de Monge em PV." })]
  }),
  profile("vengeance-channel-divinity", "paladin", "CANALIZAR DIVINDADE", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["juramento-vinganca"], activities: [
      ctx => baseActivity({ ...ctx, key: "abjure", type: "utility", name: "Canalizar Divindade — Abjurar Inimigo", activation: "action", consumptionTargets: [consumptionTarget("itemUses", "paladin-canalizar-divindade", "1")], chatFlavor: "Consome 1 uso da reserva de Canalizar Divindade. Resolva a salvaguarda e o deslocamento/amedrontado conforme a descrição." }),
      ctx => baseActivity({ ...ctx, key: "enmity", type: "utility", name: "Canalizar Divindade — Voto de Inimizade", activation: "bonus", consumptionTargets: [consumptionTarget("itemUses", "paladin-canalizar-divindade", "1")], chatFlavor: "Consome 1 uso da reserva e marque o alvo do Voto de Inimizade por até 1 minuto." })
    ],
    limitations: ["O consumo da reserva compartilhada é automático; os efeitos no alvo permanecem contextuais."]
  }),
  profile("kaiju-devastating-rage", "barbarian", "FÚRIA DEVASTADORA", AUTOMATION_TIER.PARTIAL, {
    kind: "subclass", bundleIds: ["ryoko-barbarian-path-kaiju"], itemUses: { max: "max(1, floor(@abilities.con.mod / 2))", periods: ["lr"] },
    activities: [ctx => baseActivity({ ...ctx, key: "auto-save", type: "utility", name: "Fúria Devastadora — sucesso automático", activation: "special", condition: "Enquanto estiver em Fúria e após falhar uma salvaguarda.", consumptionTargets: [consumptionTarget("itemUses")], chatFlavor: "Consome 1 uso para transformar a salvaguarda falha em sucesso. O bônus de deslocamento e ataque bônus em meia vida permanecem condicionais." })]
  }),

];

export const FEATURE_AUTOMATION_PROFILES = Object.freeze(PROFILES);
const PROFILE_INDEX = new Map();
for (const profileEntry of PROFILES) {
  const key = `${profileEntry.classIdentifier}:${profileEntry.featureNameNormalized}`;
  if (!PROFILE_INDEX.has(key)) PROFILE_INDEX.set(key, []);
  PROFILE_INDEX.get(key).push(profileEntry);
}

function bundleIdentity(bundle) {
  return String(bundle?.identity?.grimorioId ?? bundle?.identity?.identifier ?? "");
}

function profileMatchesBundle(profileEntry, bundle) {
  if (profileEntry.kind && profileEntry.kind !== bundle?.kind) return false;
  if (profileEntry.bundleIds.length && !profileEntry.bundleIds.includes(bundleIdentity(bundle))) return false;
  return true;
}

export function getFeatureAutomationProfile(bundle, feature) {
  const classIdentifier = ownerIdentifier(bundle);
  if (!classIdentifier) return null;
  const candidates = PROFILE_INDEX.get(`${classIdentifier}:${normalizeName(feature?.name)}`) ?? [];
  return candidates.find(profileEntry => profileMatchesBundle(profileEntry, bundle)) ?? null;
}

export function automationCandidateSignals(feature) {
  const text = String(feature?.description ?? "").toLowerCase();
  const signals = [];
  const add = (id, weight, pattern) => { if (pattern.test(text)) signals.push({ id, weight }); };
  add("activation", 2, /a[cç][aã]o b[oô]nus|como uma a[cç][aã]o|com uma a[cç][aã]o|usar sua rea[cç][aã]o|use sua rea[cç][aã]o|como rea[cç][aã]o/);
  add("limited-uses", 3, /uma vez por|n[uú]mero de vezes|quantidade de vezes|usos? iguais?|pode usar esta caracter[ií]stica/);
  add("recovery", 2, /descanso curto|descanso longo|por descanso|ao terminar um descanso|ap[oó]s um descanso/);
  add("shared-resource", 3, /pontos? de (?:chi|feiti[cç]aria|foco|selo)|dados? de superioridade|surto arcano|canalizar divindade|forma selvagem/);
  add("healing", 2, /recupera(?:r)? pontos de vida|cura(?:r)?|pontos de vida tempor[aá]rios/);
  add("damage", 1, /\bdano\b|\d+d\d+/);
  add("effect", 2, /vantagem|desvantagem|resist[eê]ncia|imunidade|classe de armadura|\bca\b|deslocamento|amedrontad|enfeiti[cç]ad|atordoado|envenenado/);
  add("spell-slots", 2, /espa[cç]o(?:s)? de magia|magia de pacto/);
  const score = signals.reduce((sum, signal) => sum + signal.weight, 0);
  const classification = score >= 7 ? "high" : score >= 3 ? "medium" : "textual";
  return Object.freeze({ classification, score, signals: Object.freeze(signals.map(signal => signal.id)) });
}

export function auditBundleAutomation(bundle) {
  const summary = { features: 0, profiled: 0, full: 0, partial: 0, description: 0, candidateHigh: 0, candidateMedium: 0, textual: 0 };
  const entries = [];
  for (const feature of bundle?.features ?? []) {
    summary.features += 1;
    const automation = getFeatureAutomationProfile(bundle, feature);
    if (automation) {
      summary.profiled += 1;
      summary[automation.tier] += 1;
      entries.push({ featureKey: feature.key, name: feature.name, level: feature.level ?? null, status: "profiled", tier: automation.tier, profileId: automation.id, signals: [] });
      continue;
    }
    const candidate = automationCandidateSignals(feature);
    if (candidate.classification === "high") summary.candidateHigh += 1;
    else if (candidate.classification === "medium") summary.candidateMedium += 1;
    else summary.textual += 1;
    entries.push({ featureKey: feature.key, name: feature.name, level: feature.level ?? null, status: "unprofiled", tier: AUTOMATION_TIER.DESCRIPTION, profileId: null, candidate: candidate.classification, score: candidate.score, signals: [...candidate.signals] });
  }
  return Object.freeze({ ...summary, bundleId: bundleIdentity(bundle), bundleName: bundle?.identity?.name ?? "", kind: bundle?.kind ?? "", entries: Object.freeze(entries) });
}

export function applyFeatureAutomation(source, bundle, feature) {
  source.system ??= {};
  source.system.activities ??= {};
  source.system.uses ??= emptyUses();
  source.effects ??= [];
  const automation = getFeatureAutomationProfile(bundle, feature);
  if (!automation) {
    const candidate = automationCandidateSignals(feature);
    return Object.freeze({
      applied: false,
      phase: AUTOMATION_PHASE,
      schemaVersion: AUTOMATION_SCHEMA_VERSION,
      tier: AUTOMATION_TIER.DESCRIPTION,
      profileId: null,
      activityCount: 0,
      effectCount: 0,
      passiveEffectCount: 0,
      activityEffectCount: 0,
      resource: false,
      audit: candidate,
      limitations: [],
      notes: []
    });
  }

  if (automation.itemUses) source.system.uses = itemUses(automation.itemUses);
  const classIdentifier = ownerIdentifier(bundle);
  const effectContext = { profileId: automation.id, classIdentifier };
  const effects = automation.effects.map(factory => factory(effectContext));
  const effectIdByKey = Object.fromEntries(effects.map(effect => [effect.flags?.[MODULE_ID]?.effectKey, effect._id]));
  source.effects = effects;
  const activities = automation.activities.map(factory => factory({ profileId: automation.id, classIdentifier, effectIdByKey }));
  source.system.activities = Object.fromEntries(activities.map(activity => [activity._id, activity]));

  const referencedEffectIds = new Set(activities.flatMap(activity => (activity.effects ?? []).map(ref => ref._id)));
  const activityEffectCount = effects.filter(effect => referencedEffectIds.has(effect._id)).length;
  const passiveEffectCount = effects.filter(effect => effect.transfer && !referencedEffectIds.has(effect._id)).length;

  return Object.freeze({
    applied: true,
    phase: AUTOMATION_PHASE,
    schemaVersion: AUTOMATION_SCHEMA_VERSION,
    tier: automation.tier,
    profileId: automation.id,
    activityCount: activities.length,
    effectCount: effects.length,
    passiveEffectCount,
    activityEffectCount,
    resource: Boolean(automation.itemUses),
    audit: Object.freeze({ classification: "profiled", score: null, signals: Object.freeze([]) }),
    limitations: [...automation.limitations],
    notes: [...automation.notes]
  });
}

export function automationCoverage() {
  const byTier = { full: 0, partial: 0, description: 0 };
  const byClass = {};
  const subclassBundles = new Set();
  let activities = 0;
  let resources = 0;
  let effects = 0;
  let passiveEffects = 0;
  let activityEffects = 0;
  let classProfiles = 0;
  let subclassProfiles = 0;
  for (const p of PROFILES) {
    byTier[p.tier] += 1;
    byClass[p.classIdentifier] = (byClass[p.classIdentifier] ?? 0) + 1;
    if (p.kind === "subclass") {
      subclassProfiles += 1;
      for (const id of p.bundleIds) subclassBundles.add(id);
    } else classProfiles += 1;
    activities += p.activities.length;
    effects += p.effects.length;
    if (p.itemUses) resources += 1;

    const effectContext = { profileId: p.id, classIdentifier: p.classIdentifier };
    const builtEffects = p.effects.map(factory => factory(effectContext));
    const effectIdByKey = Object.fromEntries(builtEffects.map(effect => [effect.flags?.[MODULE_ID]?.effectKey, effect._id]));
    const builtActivities = p.activities.map(factory => factory({ profileId: p.id, classIdentifier: p.classIdentifier, effectIdByKey }));
    const referenced = new Set(builtActivities.flatMap(activity => (activity.effects ?? []).map(ref => ref._id)));
    activityEffects += builtEffects.filter(effect => referenced.has(effect._id)).length;
    passiveEffects += builtEffects.filter(effect => effect.transfer && !referenced.has(effect._id)).length;
  }
  return Object.freeze({
    phase: AUTOMATION_PHASE,
    schemaVersion: AUTOMATION_SCHEMA_VERSION,
    profiles: PROFILES.length,
    classProfiles,
    subclassProfiles,
    classes: Object.keys(byClass).length,
    subclassBundles: subclassBundles.size,
    activities,
    resources,
    effects,
    passiveEffects,
    activityEffects,
    byTier: Object.freeze(byTier),
    byClass: Object.freeze(byClass)
  });
}

export function phase11Support() {
  const coverage = automationCoverage();
  return Object.freeze({
    part: 2,
    compatibilityLayer: true,
    nativeActivities: true,
    itemUses: true,
    recoveryProfiles: true,
    crossItemConsumptionByIdentifier: true,
    healingActivities: true,
    damageActivities: true,
    activeEffects: true,
    passiveTransferEffects: true,
    activityAppliedEffects: true,
    selfTargetedEffects: true,
    auraPropagation: false,
    conditionalAttackEffects: false,
    safetyTiers: [AUTOMATION_TIER.FULL, AUTOMATION_TIER.PARTIAL, AUTOMATION_TIER.DESCRIPTION],
    ...coverage
  });
}

export function phase12Support() {
  const coverage = automationCoverage();
  return Object.freeze({
    phase: 12,
    catalogAudit: true,
    subclassSpecificProfiles: true,
    profileTargetingByBundleId: true,
    partialRecoveryFormulas: true,
    allClassFamiliesRepresented: coverage.classes === 25,
    auraPropagation: false,
    conditionalAttackEffects: false,
    ...coverage
  });
}
