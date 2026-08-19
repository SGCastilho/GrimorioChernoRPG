'use strict';

// RB-3 — políticas declarativas para exceções do Sistema de Traços de Legado.
//
// Este arquivo descreve apenas regras de composição racial. Não contém paths,
// Effects, flags, macros ou qualquer estrutura de documento Foundry.
(function initRaceBuildEligibilityRules(global) {
  global.GRIMORIO_RACE_BUILD_ELIGIBILITY = Object.freeze({
    schema: 'grimorio-race-build-eligibility-rules',
    schemaVersion: 1,
    phase: 'RB-3',

    // A regra geral 5.19 usa somente os Traços de Sangue Misto da raça
    // SECUNDÁRIA. As listas normais de Legado continuam disponíveis para
    // dominante + secundária.
    mixedBloodPolicy: Object.freeze({
      mixedTraitsFrom: 'secondary-only'
    }),

    secondaryRaceRules: Object.freeze({
      'beast-tribe': Object.freeze({
        requiredMixedTraits: ['bloodline'],
        creatureTypes: ['Besta']
      }),
      'dragonkin': Object.freeze({ creatureTypes: ['Dragão'] }),
      'enaretos': Object.freeze({ creatureTypes: ['Celestial'] }),
      'hanyou': Object.freeze({
        automaticBloodline: true,
        heritageLegacySlotsUsed: 1,
        heritagePositiveChoices: 1,
        heritageDetrimentalChoices: 1
      }),
      'vanquis': Object.freeze({
        requiredMixedTraits: ['bloodline'],
        automaticCoreTraits: ['deathless-traits'],
        creatureTypes: ['Morto-Vivo']
      }),
      'drackal': Object.freeze({ creatureTypes: ['Dragão'] }),
      'noxiamorph': Object.freeze({ creatureTypes: ['Monstruosidade'] })
    }),

    conditionalSecondaryTypeGrants: Object.freeze({
      'hadislin:mixed:darkvision': ['Ínfero (Diabo)'],
      'hobgoblin:mixed:gift-of-support': ['Goblinoide'],
      'tarnished:mixed:lucid-form': ['Corruptor (demônio)'],
      'trealtin:mixed:frequency-speech': ['Planta'],
      'animus:mixed:eyeless-senses': ['Construto'],
      'protolife:mixed:ooze-nature': ['Lodo']
    }),

    slotTransforms: Object.freeze({
      'human:mixed:versatile-blood': Object.freeze({
        kind: 'replace-one-with-two',
        replacementCount: 2,
        allowedPools: ['primary-legacy', 'secondary-legacy'],
        finalFeature: false
      })
    }),

    specialSubraces: Object.freeze({
      'vanquis:amalgamation': Object.freeze({
        kind: 'shambled-body',
        choiceCount: 2,
        distinctRaceOrigins: true,
        excludePrimary: true,
        excludeSecondary: true,
        allowMixedTraits: false
      })
    }),

    subraceDrivenMixedTraits: Object.freeze({
      'hadislin:mixed:cursed-legacy': Object.freeze({
        subraceField: 'cursedLegacySpells',
        choiceLabel: 'Subraça Hádislin para Legado Amaldiçoado'
      }),
      'primordia:mixed:elemental-magic': Object.freeze({
        subraceField: 'elementalMagicSpells',
        choiceLabel: 'Subraça Primordia para Magia Elemental'
      })
    }),

    coupledSubraceChoices: Object.freeze({
      hadislin: Object.freeze({
        bloodlineTraitKey: 'hadislin:mixed:bloodline',
        dependentTraitKey: 'hadislin:mixed:cursed-legacy',
        excludeBloodlineSubraceFlag: 'crystalHadislin'
      }),
      primordia: Object.freeze({
        bloodlineTraitKey: 'primordia:mixed:bloodline',
        dependentTraitKey: 'primordia:mixed:elemental-magic'
      })
    }),

    primarySpecialChoices: Object.freeze({
      vanquis: Object.freeze({
        formerPersona: true,
        excludeSelf: true
      }),
      hanyou: Object.freeze({
        sourceAbilityProfile: 'hanyou-source'
      })
    }),

    editorialPolicies: Object.freeze({
      // O traço mecânico Tamanho (Médio ou Grande) é mantido como autoridade
      // operacional; a divergência com o cabeçalho continua como warning.
      silvistar: Object.freeze({ sizeAuthority: 'core-trait' })
    })
  });
})(window);
