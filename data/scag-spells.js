'use strict';

// As quatro magias apresentadas em Costa da Espada foram posteriormente
// republicadas/revisadas em Tasha. Para evitar linhas duplicadas no catálogo,
// esta camada adiciona os nomes e as regras originais de Costa da Espada às
// entradas canônicas já existentes.
(function () {
  const SOURCE = 'Costa da Espada — Guia de Aventureiros — D&D 5e';
  const category = 'Costa da Espada';
  const refs = {
    'tasha-lamina-estrondosa': {
      name: 'Lâmina Efervescente',
      originalName: 'Booming Blade',
      level: 0,
      school: 'Evocação',
      time: '1 ação',
      range: '1,5 metro',
      comp: 'V, M (uma arma)',
      duration: '1 rodada',
      concentration: false,
      ritual: false,
      source: SOURCE,
      sourcePage: 142,
      category,
      classes: 'Bruxo, Feiticeiro, Mago',
      desc: 'Como parte da ação usada para conjurar esta magia, você deve fazer um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia, do contrário a magia falha. Se acertar, o alvo sofre os efeitos normais do ataque e fica envolto em uma energia efervescente até o começo do próximo turno do conjurador. Se o alvo se mover voluntariamente antes disso, ele imediatamente recebe 1d8 de dano trovejante e a magia encerra.\n\nEste dano da magia aumenta quando você alcança níveis maiores. No 5º nível o ataque corpo a corpo causa um dano extra trovejante de 1d8 ao alvo, e o dano sofrido pelo alvo ao mover-se sobe para 2d8. Ambas rolagens de dados aumentam em 1d8 no 11º nível e no 17º nível.'
    },
    'tasha-lamina-da-chama-esverdeada': {
      name: 'Lâmina Verde Flamejante',
      originalName: 'Green-Flame Blade',
      level: 0,
      school: 'Evocação',
      time: '1 ação',
      range: '1,5 metro',
      comp: 'V, M (uma arma)',
      duration: 'Instantânea',
      concentration: false,
      ritual: false,
      source: SOURCE,
      sourcePage: 143,
      category,
      classes: 'Bruxo, Feiticeiro, Mago',
      desc: 'Como parte da ação usada para conjurar esta magia, você deve fazer um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia, do contrário a magia falha. Se acertar, o alvo sofre os efeitos normais do ataque e uma chama verde salta do alvo até uma criatura que você possa ver que esteja a 1,5m dele. A segunda criatura recebe dano de fogo igual ao seu modificador de habilidade de conjuração.\n\nEste dano da magia aumenta quando você alcança níveis maiores. No 5º nível o ataque corpo a corpo causa um dano extra de fogo de 1d8 ao alvo, e o dano da segunda criatura sobe para 1d8 + o seu modificador de habilidade de conjuração. Ambas rolagens de dados aumentam em 1d8 no 11º nível e no 17º nível.'
    },
    'tasha-chicote-eletrico': {
      name: 'Atração Elétrica',
      originalName: 'Lightning Lure',
      level: 0,
      school: 'Evocação',
      time: '1 ação',
      range: '4,5 metros',
      comp: 'V',
      duration: 'Instantânea',
      concentration: false,
      ritual: false,
      source: SOURCE,
      sourcePage: 143,
      category,
      classes: 'Bruxo, Feiticeiro, Mago',
      desc: 'Você cria um chicote de energia elétrica em uma criatura à sua escolha que você possa ver dentro do alcance. O alvo deve obter sucesso em um TR de Força ou é empurrado 3 metros em uma linha reta diante de você e então recebe 1d8 de dano elétrico se estivesse a 1,5m de você.\n\nO dano desta magia aumenta em 1d8 quando você alcança o nível 5 (2d8), nível 11 (3d8), nível 17 (4d8).'
    },
    'tasha-rompante-de-espadas': {
      name: 'Explosão de Espadas',
      originalName: 'Sword Burst',
      level: 0,
      school: 'Conjuração',
      time: '1 ação',
      range: '1,5 metro',
      comp: 'V',
      duration: 'Instantânea',
      concentration: false,
      ritual: false,
      source: SOURCE,
      sourcePage: 143,
      category,
      classes: 'Bruxo, Feiticeiro, Mago',
      desc: 'Você cria um círculo momentâneo de lâminas espectrais que lhe rodeiam. Cada criatura dentro do alcance, exceto você, precisa obter sucesso em um TR de Destreza ou sofrerá 1d6 de dano de força.\n\nO dano desta magia aumenta em 1d6 quando você alcança o nível 5 (2d6), nível 11 (3d6), nível 17 (4d6).'
    }
  };

  const spells = window.GRIMORIO_TASHA_SPELLS || [];
  for (const spell of spells) {
    const legacy = refs[spell.id];
    if (!legacy) continue;
    spell.aliases = Array.from(new Set([...(spell.aliases || []), legacy.name, legacy.originalName].filter(Boolean)));
    spell.legacyVersions = spell.legacyVersions || [];
    if (!spell.legacyVersions.some(v => v.source === SOURCE)) spell.legacyVersions.push(legacy);
    spell.otherSources = spell.otherSources || [];
    if (!spell.otherSources.some(v => v.title === SOURCE)) {
      spell.otherSources.push({ title: SOURCE, pages: String(legacy.sourcePage), note: 'Versão original da magia; regras revisadas posteriormente no Caldeirão de Tasha.' });
    }
  }

  window.GRIMORIO_SCAG_SPELL_REFERENCES = Object.values(refs);
})();
