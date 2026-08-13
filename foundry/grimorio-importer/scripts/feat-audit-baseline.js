export const FEAT_AUDIT_BASELINE_VERSION = 1;
export const FEAT_AUDIT_SOURCE = Object.freeze({
  siteVersion: "5.42.0",
  sourceId: "phb-2014",
  expectedFeats: 42,
  automationPlanSchema: "grimorio-foundry-feat-automation-plan",
  automationPlanSchemaVersion: 1,
  bundleSchemaVersion: 2
});

export const FEAT_AUDIT_BASELINE = Object.freeze({
  "phb-2014-adepto-elemental": {
    "name": "Adepto Elemental",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 1,
    "runtimeModes": {
      "guarded": 1,
      "assisted": 1
    }
  },
  "phb-2014-adepto-marcial": {
    "name": "Adepto Marcial",
    "tier": "partial",
    "advancements": [
      "maneuvers"
    ],
    "activities": [],
    "effects": [],
    "uses": 1,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-alerta": {
    "name": "Alerta",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [
      {
        "key": "initiative",
        "mechanic": "initiative-bonus",
        "runtimeManaged": false,
        "transfer": true,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2
    }
  },
  "phb-2014-ambidestro": {
    "name": "Ambidestro",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "two-weapon-stance"
    ],
    "effects": [
      {
        "key": "dual-wield-ac",
        "mechanic": "conditional-ac-bonus",
        "runtimeManaged": false,
        "transfer": false,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "automatic": 1
    }
  },
  "phb-2014-atacante-bestial": {
    "name": "Atacante Bestial",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "reroll-weapon-damage"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-atirador-agucado": {
    "name": "Atirador Aguçado",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "power-shot"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 3
    }
  },
  "phb-2014-atirador-de-magia": {
    "name": "Atirador de Magia",
    "tier": "partial",
    "advancements": [
      "attack-cantrip"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2
    }
  },
  "phb-2014-atleta": {
    "name": "Atleta",
    "tier": "partial",
    "advancements": [
      "ability"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 3
    }
  },
  "phb-2014-ator": {
    "name": "Ator",
    "tier": "partial",
    "advancements": [
      "charisma"
    ],
    "activities": [
      "mimic"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-combatente-montado": {
    "name": "Combatente Montado",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "redirect-attack"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2
    }
  },
  "phb-2014-conjurador-de-guerra": {
    "name": "Conjurador de Guerra",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "opportunity-spell"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "automatic": 1,
      "activity": 1
    }
  },
  "phb-2014-conjurador-de-ritual": {
    "name": "Conjurador de Ritual",
    "tier": "partial",
    "advancements": [
      "ritual-spells"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 1,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-curandeiro": {
    "name": "Curandeiro",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "stabilize",
      "treat-wounds"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "guarded": 1
    }
  },
  "phb-2014-duelista-defensivo": {
    "name": "Duelista Defensivo",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "parry"
    ],
    "effects": [
      {
        "key": "proficiency-ac",
        "mechanic": "conditional-ac-bonus",
        "runtimeManaged": false,
        "transfer": false,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "activity": 1
    }
  },
  "phb-2014-especialista-em-besta": {
    "name": "Especialista em Besta",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "hand-crossbow-bonus"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2
    }
  },
  "phb-2014-especialista-em-briga": {
    "name": "Especialista em Briga",
    "tier": "partial",
    "advancements": [
      "ability"
    ],
    "activities": [
      "grapple"
    ],
    "effects": [
      {
        "key": "unarmed-damage",
        "mechanic": "unarmed-damage-minimum",
        "runtimeManaged": true,
        "transfer": true,
        "changes": 0
      }
    ],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-explorador-de-cavernas": {
    "name": "Explorador de Cavernas",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 4,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 3,
      "description": 1
    }
  },
  "phb-2014-imobilizador": {
    "name": "Imobilizador",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "pin"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1,
      "activity": 1
    }
  },
  "phb-2014-iniciado-em-magia": {
    "name": "Iniciado em Magia",
    "tier": "partial",
    "advancements": [
      "cantrips",
      "first-level-spell"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 1,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-investida-poderosa": {
    "name": "Investida Poderosa",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "charge-attack",
      "charge-shove"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "activity": 1
    }
  },
  "phb-2014-lider-inspirador": {
    "name": "Líder Inspirador",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "inspire"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "guarded": 1
    }
  },
  "phb-2014-maestria-em-arma-de-haste": {
    "name": "Maestria em Arma de Haste",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "butt-end-attack"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1
    }
  },
  "phb-2014-maestria-em-armadura-media": {
    "name": "Maestria em Armadura Média",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [
      {
        "key": "medium-armor-rules",
        "mechanic": "conditional-armor-rule",
        "runtimeManaged": true,
        "transfer": true,
        "changes": 0
      }
    ],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "automatic": 1
    }
  },
  "phb-2014-maestria-em-armadura-pesada": {
    "name": "Maestria em Armadura Pesada",
    "tier": "partial",
    "advancements": [
      "strength"
    ],
    "activities": [],
    "effects": [
      {
        "key": "damage-reduction",
        "mechanic": "conditional-damage-reduction",
        "runtimeManaged": true,
        "transfer": true,
        "changes": 0
      }
    ],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "automatic": 1
    }
  },
  "phb-2014-matador-de-conjuradores": {
    "name": "Matador de Conjuradores",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "caster-reaction"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "activity": 1,
      "assisted": 2
    }
  },
  "phb-2014-mente-afiada": {
    "name": "Mente Afiada",
    "tier": "partial",
    "advancements": [
      "intelligence"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-mestre-de-armas": {
    "name": "Mestre de Armas",
    "tier": "full",
    "advancements": [
      "ability",
      "weapon-proficiencies"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-mestre-de-armas-grandes": {
    "name": "Mestre de Armas Grandes",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "power-attack"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "activity": 1,
      "assisted": 1
    }
  },
  "phb-2014-mestre-de-escudo": {
    "name": "Mestre de Escudo",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "shield-evasion",
      "shield-shove"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 1,
      "activity": 1
    }
  },
  "phb-2014-mobilidade": {
    "name": "Mobilidade",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [
      {
        "key": "speed",
        "mechanic": "speed-bonus",
        "runtimeManaged": false,
        "transfer": true,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 2,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2
    }
  },
  "phb-2014-observador": {
    "name": "Observador",
    "tier": "partial",
    "advancements": [
      "ability"
    ],
    "activities": [],
    "effects": [
      {
        "key": "passive-investigation",
        "mechanic": "skill-passive-bonus",
        "runtimeManaged": false,
        "transfer": true,
        "changes": 1
      },
      {
        "key": "passive-perception",
        "mechanic": "skill-passive-bonus",
        "runtimeManaged": false,
        "transfer": true,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-perito": {
    "name": "Perito",
    "tier": "full",
    "advancements": [
      "skills-tools"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-poliglota": {
    "name": "Poliglota",
    "tier": "partial",
    "advancements": [
      "intelligence",
      "languages"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-protecao-leve": {
    "name": "Proteção Leve",
    "tier": "full",
    "advancements": [
      "ability",
      "light-armor"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-protecao-moderada": {
    "name": "Proteção Moderada",
    "tier": "full",
    "advancements": [
      "ability",
      "medium-armor",
      "shields"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-protecao-pesada": {
    "name": "Proteção Pesada",
    "tier": "full",
    "advancements": [
      "heavy-armor",
      "strength"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-resiliente": {
    "name": "Resiliente",
    "tier": "partial",
    "advancements": [
      "ability-and-save-ability",
      "ability-and-save-save"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-resistente": {
    "name": "Resistente",
    "tier": "partial",
    "advancements": [
      "constitution"
    ],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 1,
    "assistedChoices": 0,
    "runtimeModes": {
      "automatic": 1
    }
  },
  "phb-2014-robusto": {
    "name": "Robusto",
    "tier": "full",
    "advancements": [],
    "activities": [],
    "effects": [
      {
        "key": "hp-per-level",
        "mechanic": "hp-per-level",
        "runtimeManaged": false,
        "transfer": true,
        "changes": 1
      }
    ],
    "uses": 0,
    "runtime": 0,
    "assistedChoices": 0,
    "runtimeModes": {}
  },
  "phb-2014-sentinela": {
    "name": "Sentinela",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "retaliation"
    ],
    "effects": [],
    "uses": 0,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "assisted": 2,
      "activity": 1
    }
  },
  "phb-2014-sorrateiro": {
    "name": "Sorrateiro",
    "tier": "partial",
    "advancements": [],
    "activities": [],
    "effects": [],
    "uses": 0,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "description": 2,
      "assisted": 1
    }
  },
  "phb-2014-sortudo": {
    "name": "Sortudo",
    "tier": "partial",
    "advancements": [],
    "activities": [
      "spend-luck"
    ],
    "effects": [],
    "uses": 1,
    "runtime": 3,
    "assistedChoices": 0,
    "runtimeModes": {
      "activity": 2,
      "assisted": 1
    }
  }
});

export function featAuditBaselineRows() {
  return Object.entries(FEAT_AUDIT_BASELINE).map(([grimorioId, row]) => ({ grimorioId, ...row }));
}
