'use strict';

// Catálogo declarativo de fontes. A interface consome estes registros para
// montar a apresentação, filtros e a página Sobre sem conhecer livros por nome.
(function registerGrimorioSources(registry) {
  if (!registry) throw new Error('GRIMORIO_REGISTRY precisa ser carregado antes de data/sources.js.');

  const sources = [
    {
      id: 'srd-5.1',
      title: 'Atribuição do SRD 5.1',
      kind: 'license',
      order: 5,
      showOnHome: false,
      showInAbout: true,
      about: [
        'Este trabalho inclui material do Documento de Referência do Sistema 5.1 (“SRD 5.1”), da Wizards of the Coast LLC, licenciado sob a Licença Internacional Creative Commons Atribuição 4.0.',
        'As classes, subclasses e tabelas de progressão oficiais foram estruturadas a partir dos livros fornecidos para este projeto. Conteúdos identificados como homebrew preservam sua fonte e autoria separadamente.'
      ]
    },
    {
      id: 'phb-2014',
      title: 'Livro do Jogador — D&D 5e 2014',
      shortTitle: 'Livro do Jogador',
      filterLabel: 'D&D 5e 2014',
      homeLabel: 'Livro do Jogador',
      catalogLabel: 'Livro do Jogador',
      order: 10,
      showOnHome: true,
      showInAbout: true,
      aliases: [
        'Livro do Jogador — Dungeons & Dragons 5ª Edição',
        'Livro do Jogador — Dungeons & Dragons 5e',
        'D&D 5e 2014'
      ],
      matchIncludes: ['Livro do Jogador'],
      about: [
        'O catálogo oficial do Livro do Jogador está incorporado localmente, incluindo as 361 magias do Capítulo 11, as classes-base estruturadas para consulta offline e o catálogo inicial de 50 equipamentos mundanos do Capítulo 5 (37 armas, 12 armaduras e 1 escudo).',
        'Quando a própria fonte apresenta metadados conflitantes ou grafias incomuns, o Grimório preserva a divergência documentada em vez de inventar uma regra substituta.'
      ]
    },
    {
      id: 'scag',
      title: 'Costa da Espada — Guia de Aventureiros',
      shortTitle: 'Costa da Espada',
      filterLabel: 'Costa da Espada',
      homeLabel: 'Costa da Espada',
      order: 20,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Costa da Espada — Guia de Aventureiros — D&D 5e'],
      matchIncludes: ['Costa da Espada'],
      about: [
        'Foram incorporadas seis subclasses exclusivas, opções adicionais do Caminho do Guerreiro Totêmico e a procedência das subclasses posteriormente republicadas.',
        'Os quatro truques do livro permanecem preservados como versões originais nas entradas revisadas correspondentes, evitando duplicação no catálogo.'
      ]
    },
    {
      id: 'xanathar',
      title: 'Guia de Xanathar para Todas as Coisas',
      shortTitle: 'Guia de Xanathar',
      filterLabel: 'Guia de Xanathar',
      homeLabel: 'Guia de Xanathar',
      catalogLabel: 'Guia de Xanathar',
      order: 30,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Guia de Xanathar para Todas as Coisas — D&D 5e', 'Guia de Xanathar'],
      matchIncludes: ['Xanathar'],
      about: ['Incorpora as 31 subclasses do Capítulo 1 e as 95 magias do Capítulo 3 do PDF em português fornecido para o projeto.']
    },
    {
      id: 'tasha',
      title: 'Caldeirão de Tasha para Tudo',
      shortTitle: 'Caldeirão de Tasha',
      filterLabel: 'Caldeirão de Tasha',
      homeLabel: 'Caldeirão de Tasha',
      catalogLabel: 'Caldeirão de Tasha',
      order: 40,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Caldeirão de Tasha para Tudo — D&D 5e', 'Caldeirão de Tasha'],
      matchIncludes: ['Tasha'],
      about: ['Incorpora a classe Artífice, suas quatro especializações, as demais subclasses do capítulo de opções de personagens e 21 magias do capítulo de miscelânea mágica.']
    },
    {
      id: 'lyre',
      title: "Lyre's Guide to Retia — Land of Industry",
      shortTitle: "Lyre's Guide to Retia",
      filterLabel: "Lyre's Guide to Retia",
      homeLabel: "Lyre's Guide to Retia",
      catalogLabel: "Lyre's Guide to Retia",
      order: 50,
      showOnHome: true,
      showInAbout: true,
      aliases: ["Lyre's Guide to Retia"],
      matchIncludes: ["Lyre's Guide to Retia"],
      about: [
        'O Grimório incorpora 280 entradas de magia, quatro classes originais — Alma Favorecida, Inscritor, Cavaleiro das Pétalas e Santo da Espada — e 127 subclasses, localizadas para PT-BR.',
        'O Capítulo VII também está indexado na seção Raças e Subraças: 34 raças e 196 subraças da edição fornecida, com traços fixos, Traços de Legado, regras de Sangue Misto e referências de página em PT-BR.',
        'O Capítulo IX — Weapons & Armor está integrado à seção Equipamentos com 22 armas, o Escudo Grande, munições especiais, propriedades de arma da 5.19, regras de tamanho de equipamento e o subsistema de armas de fogo das páginas 515–518.',
        'Os arquétipos apresentados para o Patrulheiro Revisado permanecem ligados ao Patrulheiro do Grimório com indicação de compatibilidade, e revisões Legacy/5.19 continuam identificadas como versões próprias da fonte.'
      ]
    },
    {
      id: 'blade-bone-benefit',
      title: 'Somnus Domina — Blade, Bone, & Benefit',
      shortTitle: 'Blade, Bone, & Benefit',
      filterLabel: 'Blade, Bone, & Benefit',
      homeLabel: 'Blade, Bone, & Benefit',
      catalogLabel: 'Blade, Bone, & Benefit',
      order: 55,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Blade, Bone, & Benefit', 'Somnus Domina - Blade, Bone, & Benefit'],
      matchIncludes: ['Blade, Bone, & Benefit'],
      about: [
        'O Capítulo IX está integrado com a classe Ministro de Sangue, sua progressão completa do 1º ao 20º nível e as oito Seitas Genéticas apresentadas pela fonte.',
        'O índice efetivo do Capítulo X enumera 55 subclasses, todas incorporadas em PT-BR. O sumário geral do livro anuncia 59; o Grimório preserva essa divergência documental e não inventa quatro entradas ausentes do índice.',
        'As três subclasses de Cavaleiro Dracônico do Capítulo X — Golpeador Sombrio, Véu da Fortuna e Cavaleiro da Escama Fásica — agora estão vinculadas à classe-base integrada a partir de Zagalhta’s Exolunar Collection.',
        'Fardo de Gotham e Fardo de Scorn possuem texto mecanicamente revisado neste compêndio em relação às versões de Lyre e, por isso, são preservados como versões próprias de Blade, Bone, & Benefit em vez de sobrescrever as anteriores.',
        'O Capítulo XI — Biblioteca de Magias está representado integralmente: 48 entradas novas no catálogo e 60 magias reimpressas vinculadas às entradas de Lyre já existentes, evitando duplicação na busca.',
        'Os grupos de magia da fonte — Artes do Valor, Valores Sangrentos, Palavras Seladas, Códice Pecaminoso, Moralismos Desvinculados e Zanjen — são preservados como traços pesquisáveis. O conteúdo segue a estrutura opcional 5.19 descrita pelo próprio livro.'
      ]
    },
    {
      id: 'zagalhta-exolunar',
      title: "Somnus Domina — Zagalhta's Exolunar Collection",
      shortTitle: "Zagalhta's Exolunar Collection",
      filterLabel: "Zagalhta's Exolunar Collection",
      homeLabel: "Zagalhta's Exolunar Collection",
      catalogLabel: "Zagalhta's Exolunar Collection",
      order: 57,
      showOnHome: true,
      showInAbout: true,
      aliases: ["Zagalhta's Exolunar Collection", 'Zagalhta’s Exolunar Collection', 'Somnus Domina — Zagalhta’s Exolunar Collection'],
      matchIncludes: ["Zagalhta's Exolunar Collection", 'Zagalhta’s Exolunar Collection'],
      about: [
        'O Capítulo 6 está integrado com duas classes completas em PT-BR: Cavaleiro Dracônico (Dragoneer) e Piloto de Frame (Frame Pilot), ambas com progressão estruturada do 1º ao 20º nível.',
        'O Cavaleiro Dracônico preserva sua arquitetura modular: nove Conceitos Centrais alteram Dados de Vida, salvaguardas, proficiências e progressão de conjuração. A classe também mantém os 19 Tipos de Encarnação e suas regras próprias.',
        'O Piloto de Frame preserva o subsistema de pilotagem da fonte e inclui cinco Designações Tecnológicas: Coordenador, Escaramuçador, Soldado de Assalto, Tecnocarregador e Manipulador de Vórtice.',
        'As 36 subclasses adicionais do Capítulo 6 foram localizadas para PT-BR e vinculadas às classes correspondentes. Somadas aos nove Conceitos Centrais e cinco Designações Tecnológicas, a fonte adiciona 50 entradas de especialização/subclasse ao Grimório.',
        'As regras e termos exclusivos da 5.19 — como Fadiga de Combate, aceleração 0-G, Junção, Cargas Arcanas, Dado de Favor, Astromancia e Eidomancia — foram preservados quando fazem parte das mecânicas da fonte.',
        'O Capítulo 7 — Magias está integrado integralmente: 62 entradas próprias e 1 reimpressão equivalente vinculada à entrada existente de Pele de Dragão, totalizando 63 magias consultáveis pela fonte. As cinco magias Legacy/revisadas foram mantidas como versões próprias da 5.19 para não sobrescrever as versões oficiais.'
      ]
    },
    {
      id: 'ryoko-yokai-realms',
      title: "Ryoko's Guide to the Yokai Realms",
      shortTitle: "Ryoko's Guide to the Yokai Realms",
      filterLabel: "Ryoko's Guide to the Yokai Realms",
      homeLabel: "Ryoko's Guide to the Yokai Realms",
      catalogLabel: "Ryoko's Guide to the Yokai Realms",
      order: 58,
      showOnHome: true,
      showInAbout: true,
      aliases: ["Ryoko's Guide to the Yokai Realms", 'Ryoko’s Guide to the Yokai Realms', 'Ryoko Yokai Realms'],
      matchIncludes: ["Ryoko's Guide to the Yokai Realms", 'Ryoko’s Guide to the Yokai Realms'],
      about: [
        'O Capítulo 9 está integrado em PT-BR com a classe inédita Dobrador (Bender), suas quatro Disciplinas, e a classe Domador (Tamer) reimpressa pela própria fonte para referência junto ao Sensei.',
        'Foram integradas todas as 13 opções de subclasse para classes-base apresentadas no capítulo, além das quatro Disciplinas do Dobrador e do Paradigma Sensei do Domador, totalizando 18 entradas de subclasse/especialização.',
        'As progressões do Dobrador e do Domador cobrem do 1º ao 20º nível e preservam Afinidades Elementais, Avatar Primordial, sistema de companheiros, treinamento, doma, receptáculos e tabelas próprias.',
        'As regras opcionais de Ataque Extra Aprimorado foram preservadas como referências opcionais, sem sobrescrever silenciosamente a progressão das classes-base do Livro do Jogador.',
        'O Capítulo 13 — Magias está integrado integralmente em PT-BR com 62 entradas. A própria fonte declara 44 magias inéditas e 18 provenientes de outras publicações Loot Tavern; como o livro não individualiza essa classificação em cada ficha, não foram inferidas procedências anteriores.',
        'A escola opcional Biomancia foi preservada em 7 magias, incluindo a escola alternativa indicada pela fonte para campanhas que não utilizem Biomancia.',
        'O Capítulo 6 — Equipamentos e Próteses agora possui integração da seção Equipamentos: 11 armas, 7 propriedades novas de armas e 6 equipamentos de aventura, com regras especiais e dados de fabricação preservados. As próteses permanecem reservadas para uma implementação própria por constituírem um tipo de item separado na fonte.'
      ]
    },
    {
      id: 'kibbles',
      title: 'Conteúdo KibblesTasty',
      shortTitle: 'Spell Compendium',
      filterLabel: 'Spell Compendium',
      homeLabel: 'KibblesTasty',
      catalogLabel: 'Spell Compendium',
      order: 60,
      showOnHome: true,
      showInAbout: true,
      aliases: ["Kibbles' Casting Compendium v2.1", 'Spellblade v1.3 — KibblesTasty', 'Spell Compendium'],
      matchIncludes: ["Kibbles' Casting Compendium", 'Spellblade v1.3', 'KibblesTasty'],
      categoryGroups: {
        'Magia de Sangue': 'Magia de Sangue',
        'Poder Psiônico': 'Poder Psiônico'
      },
      about: [
        'Inclui conteúdo de Kibbles’ Compendium of Legends and Legacies, por KibblesTasty Homebrew LLC, disponibilizado no Kibbles’ Reference Document e licenciado sob CC-BY-4.0. As artes do PDF não foram incorporadas.',
        'O Spell Compendium mantém 240 magias e poderes completos e uma referência incompleta preservada sem inventar mecânicas ausentes da fonte.'
      ]
    },
    {
      id: 'emissario-homebrew',
      title: 'Emissário Espiritual — Homebrew Original',
      shortTitle: 'Emissário Espiritual',
      order: 80,
      showOnHome: false,
      showInAbout: false,
      matchIncludes: ['Emissário Espiritual — Homebrew Original']
    },
    {
      id: 'bahamut-homebrew',
      title: 'Os Lâminas de Bahamut — Homebrew Original',
      shortTitle: 'Lâminas de Bahamut',
      order: 81,
      showOnHome: false,
      showInAbout: false,
      matchIncludes: ['Lâminas de Bahamut']
    },
    {
      id: 'dandwiki-cultivator',
      title: 'D&D Wiki — Cultivator (5e Class)',
      shortTitle: 'Cultivator — D&D Wiki',
      filterLabel: 'Cultivator — D&D Wiki',
      homeLabel: 'Cultivator — D&D Wiki',
      catalogLabel: 'Cultivator — D&D Wiki',
      order: 82,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Cultivator (5e Class)', 'D&D Wiki — Cultivator (5e Class)', 'Cultivator'],
      matchIncludes: ['Cultivator (5e Class)', 'D&D Wiki — Cultivator'],
      about: [
        'Integração integral da classe Cultivador em PT-BR, incluindo progressão do 1º ao 20º nível, Núcleo da Alma, Qi, Magias da Alma, Ritual de Coleta de Almas, tabelas e regras de multiclasse.',
        'Três Chamados à Divindade foram integrados: Chamado do Mal, Chamado Acromático e Chamado do Céu.',
        'A lista de magias da classe foi preservada. Magias homebrew citadas pela página sem bloco de regras no PDF permanecem apenas como referências enquanto nenhuma ficha separada for fornecida; Animar Energia foi incorporada posteriormente a partir da captura de tela enviada pelo usuário.',
        'A página de origem informa que seu conteúdo está disponível sob a GNU Free Documentation License 1.3, exceto onde indicado.'
      ]
    },
    {
      id: 'cultivator-homebrew-spells',
      title: 'Magias Homebrew — Cultivador',
      shortTitle: 'Cultivador — Homebrew',
      filterLabel: 'Cultivador — Homebrew',
      homeLabel: 'Cultivador — Homebrew',
      catalogLabel: 'Cultivador — Homebrew',
      kind: 'homebrew',
      order: 83,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Magias Homebrew — Cultivador', 'Cultivador — Homebrew', 'Animate Energy', 'Animar Energia'],
      matchIncludes: ['Magias Homebrew — Cultivador', 'Cultivador — Homebrew'],
      about: [
        'Catálogo de magias homebrew vinculadas à classe Cultivador e fornecidas separadamente pelo usuário.',
        'As fichas são traduzidas preservando as mecânicas da fonte. Quando uma imagem não fornece estatísticas ou regras auxiliares, o Grimório documenta a lacuna sem inventar valores.'
      ]
    },
    {
      id: 'street-fighter-homebrew',
      title: 'Lutador de Rua — Homebrew Original',
      shortTitle: 'Lutador de Rua',
      filterLabel: 'Lutador de Rua — Homebrew',
      homeLabel: 'Lutador de Rua — Homebrew',
      catalogLabel: 'Lutador de Rua — Homebrew',
      order: 84,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Lutador de Rua', 'Lutador de Rua — Homebrew Original'],
      matchIncludes: ['Lutador de Rua'],
      about: [
        'Classe homebrew original fornecida pelo usuário, integrada diretamente do PDF Lutador de Rua.',
        'Inclui a progressão completa do 1º ao 20º nível, Dado de Briga, Cólera, Surtos de Cólera, Essências de Cólera e o Arquétipo de Rua Dragão de Dojima.',
        'Quando a tabela da fonte cita uma característica sem fornecer seu bloco de regras — como Ataque Extra, Incremento de Habilidade e Essência Adicional — o Grimório preserva a concessão sem importar texto mecânico de fontes externas.'
      ]
    },
    {
      id: 'sage-homebrew-source',
      title: 'Homebrew — O Sábio',
      shortTitle: 'O Sábio — Homebrew',
      filterLabel: 'O Sábio — Homebrew',
      homeLabel: 'O Sábio — Homebrew',
      catalogLabel: 'O Sábio — Homebrew',
      kind: 'homebrew',
      order: 85,
      showOnHome: true,
      showInAbout: true,
      aliases: ['Homebrew — O Sábio', 'O Sábio', 'Sábio', 'Sage Homebrew'],
      matchIncludes: ['Homebrew — O Sábio', 'O Sábio'],
      about: [
        'Classe Sábio integrada diretamente do PDF homebrew fornecido pelo usuário, com Pontos de Erudição, Encantar Arma, Terrenos Arcanos, ferramentas de contramagia e a Doutrina Catalisador.',
        'O PDF não contém uma tabela completa de progressão 1–20; a progressão estruturada do Grimório organiza somente níveis, escalonamentos e bônus explicitamente citados pela própria fonte, sem presumir Incrementos de Habilidade, Ataque Extra ou espaços de magia.',
        'O catálogo arcano recebe 14 entradas da fonte: 6 truques exclusivos, 3 Terrenos de Sábio e 5 Magias de Sábio da Maestria Elemental. Terrenos e Magias de Sábio permanecem sem nível convencional porque o PDF não lhes atribui um nível de magia.'
      ]
    },
    {
      id: 'custom',
      title: 'Conteúdo próprio',
      shortTitle: 'Conteúdo próprio',
      filterLabel: 'Conteúdo próprio',
      order: 9990,
      showOnHome: false,
      showInAbout: false,
      aliases: ['Conteúdo próprio']
    }
  ];

  sources.forEach(source => registry.registerSource(source));
})(window.GRIMORIO_REGISTRY);
