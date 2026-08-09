'use strict';

// Overrides explícitos do transporte de classes/subclasses para o futuro
// módulo Grimório Importer. Estes dados NÃO modificam as classes exibidas no
// Grimório; apenas estabilizam identificadores e registram casos que exigirão
// lógica específica na conversão para Items/Advancements do dnd5e 5.3.3.
(function initFoundryClassOverrides(global) {
  const classes = {
    'barbarian': { identifier: 'barbarian' },
    'bard': { identifier: 'bard' },
    'warlock': { identifier: 'warlock' },
    'cleric': { identifier: 'cleric' },
    'druid': { identifier: 'druid' },
    'sorcerer': { identifier: 'sorcerer' },
    'fighter': { identifier: 'fighter' },
    'rogue': { identifier: 'rogue' },
    'wizard': { identifier: 'wizard' },
    'monk': { identifier: 'monk' },
    'paladin': { identifier: 'paladin' },
    'ranger': { identifier: 'ranger' },
    'artificer': { identifier: 'artificer' },
    'favored-soul-retia': { identifier: 'favored-soul' },
    'inscriptor-retia': { identifier: 'inscriptor' },
    'petal-knight-retia': { identifier: 'petal-knight' },
    'sword-saint-retia': { identifier: 'sword-saint' },
    'dragoneer': {
      identifier: 'dragoneer',
      nativeWarnings: [
        'Dados de Vida, salvaguardas, proficiências e conjuração variam conforme o Conceito Central; o Grimório Importer aplica o perfil especial ao Actor quando o conceito é escolhido.'
      ]
    },
    'frame-pilot': {
      identifier: 'frame-pilot',
      nativeWarnings: [
        'As proficiências de salvaguarda do Piloto de Frame são escolhas variáveis; o Grimório Importer as materializa em dois pools nativos de Trait Advancement.'
      ]
    },
    'bender-ryoko': {
      identifier: 'bender',
      nativeWarnings: [
        'A habilidade de conjuração do Dobrador é escolhida entre Inteligência, Sabedoria ou Carisma; o runtime do Grimório Importer solicita e aplica essa escolha no Actor.'
      ]
    },
    'tamer-ryoko': {
      identifier: 'tamer',
      nativeWarnings: [
        'A habilidade de conjuração do Domador é escolhida entre Inteligência, Sabedoria ou Carisma; o runtime do Grimório Importer solicita e aplica essa escolha no Actor.'
      ]
    },
    'blood-minister-somnus': {
      identifier: 'blood-minister',
      nativeWarnings: [
        'O Ministro de Sangue usa 2d4 Dados de Vida por nível; o Grimório Importer trata a rolagem de ganho de PV como 2d4, mas o pool nativo de Dados de Vida de descanso continua exigindo acompanhamento especial.'
      ]
    },
    'spiritual-emissary': { identifier: 'spiritual-emissary' },
    'spellblade': { identifier: 'spellblade' },
    'cultivator-dandwiki': { identifier: 'cultivator' },
    'street-fighter-homebrew': {
      identifier: 'street-fighter',
      nativeWarnings: [
        'O Grimório Importer 0.9.2 ainda não possui CLASS_PROFILE nativo para Lutador de Rua. O bundle pode ser exportado pelo site, mas a materialização nativa no Foundry deve aguardar uma atualização do módulo.'
      ]
    }
  };

  global.GRIMORIO_FOUNDRY_CLASS_OVERRIDES = Object.freeze({
    schemaVersion: 1,
    classes: Object.freeze(classes),
    subclasses: Object.freeze({})
  });
})(window);
