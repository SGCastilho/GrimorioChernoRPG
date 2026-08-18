'use strict';

// Compatibility exceptions verified/curated for the locked Foundry target.
// These overrides never alter the editorial data shown by the Grimório; they only
// define the technical representation required by 5e Item Importer 13.9.1.
window.GRIMORIO_FOUNDRY_V13_OVERRIDES = {
  spells: {
    'phb-rajada-mistica': {
      target: {
        type: 'creature', count: 'n/a', choice: true,
        special: 'Um alvo por feixe. A quantidade de feixes aumenta conforme o nível do personagem.'
      }
    },
    'phb-escudo-arcano': {
      activation: {
        type: 'reaction', value: 1,
        condition: 'Quando você é atingido por um ataque ou se torna alvo de Mísseis Mágicos.'
      },
      target: { type: 'self', count: 1, choice: false, special: 'n/a' }
    },
    'ryoko-acid-rain': {
      target: { type: 'space', count: 1, choice: true, special: 'Um ponto dentro do alcance.' },
      area: { shape: 'cylinder', size: 6, units: 'm', count: 1, width: 'n/a', height: 18, contiguous: 'n/a' }
    },
    'ryoko-cloud-stride': {
      target: {
        type: 'willing', count: 10, choice: true,
        special: 'Até dez criaturas voluntárias que você possa ver dentro do alcance.'
      },
      preparation: { method: 'ritual', prepared: true },
      compatibilityNotes: [
        'Comportamento de ritual do Strict Spell Template 13.9.1 homologado na prova local da Fase 0 com Foundry 13.351 / dnd5e 5.3.3.'
      ]
    },
    'zagalhta-conjure-frame-echo': {
      target: {
        type: 'space', count: 1, choice: true,
        special: 'Um espaço desocupado dentro do alcance; o conjurador também pode conjurar o eco sobreposto ao próprio espaço para embarcar automaticamente.'
      }
    },


    // Phase 2 target/area normalization for spells whose targeting cannot be
    // represented safely by the generic parser alone.
    'phb-conjurar-elementais-menores': {
      target: { type: 'space', count: 'n/a', choice: true, special: 'Espaços desocupados dentro do alcance onde os elementais invocados aparecem.' }
    },
    'phb-falar-com-os-mortos': {
      target: { type: 'object', count: 1, choice: true, special: 'Um corpo com boca dentro do alcance.' }
    },
    'phb-miragem': {
      target: { type: 'space', count: 1, choice: true, special: 'Uma área de terreno de até 1,5 quilômetro quadrado.' },
      area: { shape: 'square', size: 1500, units: 'm', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'phb-mover-terra': {
      target: { type: 'space', count: 1, choice: true, special: 'Uma área de terreno de até 12 metros de lado.' },
      area: { shape: 'square', size: 12, units: 'm', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'phb-repouso-tranquilo': {
      target: { type: 'object', count: 1, choice: true, special: 'Um corpo ou outros restos mortais tocados.' }
    },
    'phb-repreensao-infernal': {
      target: { type: 'creature', count: 1, choice: false, special: 'A criatura que causou o dano que desencadeou a reação.' }
    },
    'phb-sono': {
      target: { type: 'space', count: 1, choice: true, special: 'Um ponto dentro do alcance.' },
      area: { shape: 'sphere', size: 6, units: 'm', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'phb-teletransporte-por-arvores': {
      target: { type: 'object', count: 1, choice: true, special: 'Uma planta inanimada Grande ou maior dentro do alcance; a planta de destino é definida separadamente pela magia.' }
    },
    'phb-tempestade-de-fogo': {
      target: { type: 'space', count: 10, choice: true, special: 'Até dez cubos de 3 metros, organizados conforme a descrição.' },
      area: { shape: 'cube', size: 3, units: 'm', count: 10, width: 'n/a', height: 'n/a', contiguous: true }
    },
    'xanathar-criarhomunculo': {
      target: { type: 'object', count: 1, choice: true, special: 'Os componentes materiais tocados durante a conjuração são transformados no homúnculo.' }
    },
    'xanathar-diabodapoeira': {
      target: { type: 'space', count: 1, choice: true, special: 'Um cubo de ar desocupado dentro do alcance.' },
      area: { shape: 'cube', size: 5, units: 'ft', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'xanathar-escritaceleste': {
      target: { type: 'any', count: 'n/a', choice: true, special: 'Uma parte visível do céu; não há alvo discreto de criatura ou objeto.' }
    },
    'xanathar-invocardemoniosmenores': {
      target: { type: 'space', count: 'n/a', choice: true, special: 'Espaços desocupados dentro do alcance onde os demônios invocados aparecem.' }
    },
    'xanathar-pedraencantada': {
      target: { type: 'object', count: 3, choice: true, special: 'De uma a três pedrinhas tocadas.' }
    },
    'lyre-cloud-canvas': {
      target: { type: 'any', count: 'n/a', choice: true, special: 'Uma parte visível do céu; não há alvo discreto de criatura ou objeto.' }
    },
    'lyre-earthen-eruption': {
      target: { type: 'space', count: 1, choice: true, special: 'O solo dentro do alcance ao redor do conjurador.' },
      area: { shape: 'radius', size: 3, units: 'm', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'lyre-eidomantic-feedback': {
      target: { type: 'creature', count: 1, choice: false, special: 'A criatura dentro do alcance cuja conjuração desencadeou a reação.' }
    },
    'lyre-flash-cure': {
      target: { type: 'creature', count: 'n/a', choice: true, special: 'Quantidade de criaturas igual ao nível em que a magia foi conjurada.' }
    },
    'lyre-hold-attacker': {
      target: { type: 'creature', count: 1, choice: false, special: 'A criatura humanoide que desencadeou a reação.' }
    },
    'lyre-incineration-tower': {
      target: { type: 'space', count: 1, choice: true, special: 'Um local dentro do alcance. O raio do pilar é variável entre 3 e 9 metros e permanece descrito no texto, por isso AREA não é fixada.' }
    },
    'lyre-miraculous-evasion': {
      target: { type: 'creature', count: 'n/a', choice: true, special: 'Quantidade de criaturas igual ao nível em que a magia foi conjurada.' }
    },
    'lyre-ossenheimers-archive': {
      target: { type: 'any', count: 'n/a', choice: true, special: 'Todos os livros e textos elegíveis dentro do alcance; não há um único alvo discreto.' }
    },
    'lyre-private-sanctum': {
      target: { type: 'space', count: 1, choice: true, special: 'Uma área cúbica escolhida dentro do alcance, com lados variáveis de 1,5 a 30 metros; a dimensão permanece descrita no texto.' }
    },
    'lyre-shrieking-mars': {
      range: { units: 'self', value: 'n/a' },
      target: { type: 'space', count: 1, choice: false, special: 'Todas as criaturas dentro de 9 metros do conjurador.' },
      area: { shape: 'radius', size: 9, units: 'm', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'lyre-writ-reappropriation': {
      target: { type: 'object', count: 1, choice: true, special: 'Um item mágico que você possa ver dentro do alcance.' }
    },
    'bbb-midnight-howl': {
      range: { units: 'self', value: 'n/a' },
      target: { type: 'space', count: 1, choice: false, special: 'Todas as outras criaturas dentro de 4,5 metros do conjurador.' },
      area: { shape: 'radius', size: 15, units: 'ft', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'zagalhta-volcora-s-empowered-familiar': {
      target: { type: 'creature', count: 1, choice: true, special: 'Um familiar conjurado pelo conjurador ou por um aliado presente e voluntário.' }
    },
    'zagalhta-propulsion': {
      target: { type: 'creature', count: 'n/a', choice: true, special: 'Quantidade de criaturas igual ao nível em que a magia foi conjurada; pode incluir o conjurador.' }
    },
    'zagalhta-transmission': {
      target: { type: 'self', count: 1, choice: false, special: 'Reproduz Porta Dimensional; a descrição preserva as regras para levar criaturas adicionais em níveis superiores.' }
    },

    'zagalhta-extinction': {
      target: { type: 'space', count: 1, choice: true, special: 'Um ponto que o conjurador possa ver; a esfera cataclísmica possui raio de aproximadamente 8 km.' },
      area: { shape: 'sphere', size: 8, units: 'km', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'zagalhta-magma-wave': {
      range: { units: 'self', value: 'n/a' },
      target: { type: 'space', count: 1, choice: false, special: 'Linha originada no conjurador. O texto da magia define 12 metros de comprimento por 6 metros de largura.' },
      area: { shape: 'line', size: 12, units: 'm', count: 1, width: 6, height: 'n/a', contiguous: 'n/a' },
      compatibilityNotes: ['A linha da ficha informa alcance de 9 metros, mas o corpo da regra especifica uma linha de 12 metros por 6 metros; a AREA usa as dimensões descritas no efeito e a redação original permanece na descrição.']
    },
    'paraprismatic-dust-twister': {
      target: { type: 'space', count: 1, choice: true, special: 'Um cubo de ar desocupado de 1,5 metro dentro do alcance onde o redemoinho surge.' },
      area: { shape: 'cube', size: 5, units: 'ft', count: 1, width: 'n/a', height: 'n/a', contiguous: 'n/a' }
    },
    'paraprismatic-magma-wave': {
      range: { units: 'self', value: 'n/a' },
      target: { type: 'space', count: 1, choice: false, special: 'Linha originada no conjurador. O texto da magia define 12 metros de comprimento por 6 metros de largura.' },
      area: { shape: 'line', size: 12, units: 'm', count: 1, width: 6, height: 'n/a', contiguous: 'n/a' },
      compatibilityNotes: ['Paraprismatic Tempest imprime alcance como linha de 9 metros, enquanto a descrição define uma onda de 12 metros por 6 metros; a AREA técnica usa as dimensões do efeito e a discrepância permanece registrada na descrição editorial.']
    },
    'spellblade-instant-bulwark': {
      target: { type: 'space', count: 1, choice: true, special: 'Um espaço apropriado dentro do alcance onde a muralha de terra irrompe.' },
      area: { shape: 'wall', size: 15, units: 'ft', count: 1, width: 'n/a', height: 10, contiguous: 'n/a' }
    },
    'spellblade-windborne-weapon': {
      target: { type: 'creatureOrObject', count: 1, choice: true, special: 'O alvo do ataque realizado como parte da conjuração.' }
    },

    // The Strict Spell Template has only the eight standard 5e schools. Kibbles'
    // Psionic school is preserved in the item description while a closest mechanical
    // school is supplied solely as the technical Foundry classification.
    'spellblade-compelled-query': { schoolKey: 'div', originalSchoolLabel: 'Psiônica' },
    'spellblade-delve-mind': { schoolKey: 'div', originalSchoolLabel: 'Psiônica' },
    'spellblade-flicker': { schoolKey: 'abj', originalSchoolLabel: 'Psiônica' },
    'spellblade-mind-blast': { schoolKey: 'enc', originalSchoolLabel: 'Psiônica' },
    'spellblade-psychic-drain': { schoolKey: 'nec', originalSchoolLabel: 'Psiônica' },
    'spellblade-future-insight': { schoolKey: 'div', originalSchoolLabel: 'Psiônica' },
    'spellblade-glimpse-the-future': { schoolKey: 'div', originalSchoolLabel: 'Psiônica' },
    'spellblade-nullify-effect': { schoolKey: 'abj', originalSchoolLabel: 'Psiônica' },
    'spellblade-shockwave': { schoolKey: 'evo', originalSchoolLabel: 'Psiônica' },
    'spellblade-spatial-manipulation': { schoolKey: 'con', originalSchoolLabel: 'Psiônica' },
    'spellblade-unlocked-potential': { schoolKey: 'trs', originalSchoolLabel: 'Psiônica' },
    'spellblade-inner-world': { schoolKey: 'ill', originalSchoolLabel: 'Psiônica' },

    // The source catalogue intentionally retains this reference but explicitly says
    // its rules block is absent. Exporting it would require inventing mechanics.
    'spellblade-sanctified-charge': {
      blockedReason: 'Fonte incompleta: Investida Santificada é apenas referenciada no compêndio e não possui bloco de regras suficiente para uma exportação fiel.'
    }
  }
};

// Homebrew — O Sábio: as fichas do PDF não informam escola de magia 5e e,
// para Terrenos/Magias de Sábio, também não informam nível convencional.
// A exportação Strict Spell v2 exige ambos. Bloqueamos conscientemente em vez
// de inventar classificações técnicas que alterariam a fonte editorial.
(function blockSageHomebrewSpellExport() {
  const overrides = window.GRIMORIO_FOUNDRY_V13_OVERRIDES?.spells;
  if (!overrides) return;
  const cantrips = [
    'sage-fire-lance','sage-ice-lance','sage-lightning','sage-freezing-blast','sage-stone-column','sage-spiritual-attack'
  ];
  const unlevelled = [
    'sage-terrain-volcano','sage-terrain-deluge','sage-terrain-hurricane','sage-fire-balls','sage-fire-barrier','sage-lightning-storm','sage-ancient-spirits','sage-earth-fury'
  ];
  cantrips.forEach(id => {
    overrides[id] = {
      blockedReason: 'Homebrew — O Sábio não informa a escola de magia desta ficha. O Strict Spell Template exige uma das oito escolas padrão; o Grimório não infere essa classificação.'
    };
  });
  unlevelled.forEach(id => {
    overrides[id] = {
      blockedReason: 'Homebrew — O Sábio não informa escola nem nível convencional para este recurso de classe. O Strict Spell Template exige ambos; o Grimório preserva a ficha sem inventar uma classificação.'
    };
  });
})();
