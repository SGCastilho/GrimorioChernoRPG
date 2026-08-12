'use strict';

/* Homebrew — O Sábio. Integrado diretamente do PDF fornecido pelo usuário. */
(function () {
  const SOURCE_TITLE = 'Homebrew — O Sábio';

  const classData = {
    id: 'sage-homebrew',
    name: 'Sábio',
    aliases: ['O Sábio', 'Sage'],
    hitDie: 'd8',
    ability: 'Inteligência',
    saves: 'Inteligência, Sabedoria',
    armor: 'Roupas',
    weapons: 'Adagas, bordões, livros de capa dura e escudos',
    tools: 'Nenhuma',
    skills: 'Escolha duas: Arcanismo, História, Intuição, Investigação ou Medicina',
    sigilKey: 'book',
    color: '#7d9ec7',
    desc: 'Um estudioso elemental que usa conhecimento arcano para controlar o campo de batalha, fortalecer aliados, enfraquecer conjuradores inimigos e manipular os elementos por meio de Pontos de Erudição.',
    source: {
      title: SOURCE_TITLE,
      pages: '1–5',
      chapter: 'Classe Sábio, Doutrina Catalisador e Magias de Sábio'
    },
    tablePage: 1,
    overview: [
      {
        title: 'O SÁBIO',
        page: 1,
        sourceTitle: SOURCE_TITLE,
        text: 'Os Sábios são essencialmente o oposto dos magos, optando por usar sua magia para inibir seus oponentes, dissipando seus feitiços e dificultando seus avanços. Eles são mais sintonizados com a essência do mundo, o que lhes permite conceder os elementos a outros.\n\nCom suas habilidades mágicas e físicas, os Sábios demonstram sua capacidade de acompanhar batalhas físicas. Um Sábio utiliza livremente os quatro elementos para iniciar ataques poderosos e pode aplicá-los de forma diferenciada, usando sua Inteligência. Em níveis elevados, desenvolve capacidades de encantamento voltadas a auxiliar os outros.'
      }
    ],
    creation: [
      {
        title: 'CRIANDO UM SÁBIO',
        page: 1,
        sourceTitle: SOURCE_TITLE,
        text: 'Criar um personagem Sábio envolve uma relação profunda com o conhecimento e com as forças elementais do mundo. Diferente de um mago comum, o Sábio busca compreender, analisar e dominar a magia em sua essência.\n\nComo foi seu primeiro contato com o conhecimento arcano? Você foi treinado em uma academia renomada como a de Geffen, ou descobriu manuscritos antigos esquecidos em ruínas? Você desenvolveu sua magia através de estudo rigoroso ou foi guiado por um mentor excêntrico? Talvez tenha dedicado sua vida a decifrar tomos proibidos, pesquisar encantamentos esquecidos ou entender a natureza dos elementos.\n\nO que fez você sair da segurança das bibliotecas e laboratórios? Foi a busca por conhecimento perdido? O desejo de testar suas teorias no mundo real? Ou a necessidade de provar que seu domínio sobre os elementos supera o de qualquer outro estudioso? Sábios frequentemente veem o mundo como um grande experimento, e cada batalha como uma oportunidade de aprendizado.'
      },
      {
        title: 'CONSTRUÇÃO RÁPIDA',
        page: 1,
        sourceTitle: SOURCE_TITLE,
        text: 'Primeiro, coloque seu valor de habilidade mais alto em Inteligência, pois ela governa seu domínio arcano. Em seguida, escolha Constituição, para manter concentração em suas manipulações mágicas, ou Destreza, caso prefira se manter fora de perigo. Como terceira prioridade, considere Constituição caso já não o tenha feito, dada a importância dos testes de concentração.\n\nAntecedente sugerido: Sábio — acadêmico, pesquisador arcano, professor itinerante ou erudito elemental.'
      }
    ],
    basics: {
      title: 'CARACTERÍSTICAS DE CLASSE',
      page: 1,
      sourceTitle: SOURCE_TITLE,
      text: 'PONTOS DE VIDA\n\nDado de Vida: 1d8 por nível de Sábio.\n\nPontos de Vida no 1º Nível: 8 + seu modificador de Constituição.\n\nPontos de Vida nos Níveis Seguintes: 1d8 (ou 6) + seu modificador de Constituição por nível de Sábio após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras: Roupas.\n\nArmas: Adagas, bordões, livros de capa dura e escudos.\n\nFerramentas: Nenhuma.\n\nTestes de Resistência: Inteligência e Sabedoria.\n\nPerícias: Escolha duas dentre Arcanismo, História, Intuição, Investigação e Medicina.\n\nEQUIPAMENTO\n\nVocê começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:\n\n• (a) um livro de capa dura ou (b) uma adaga;\n• (a) uma bolsa de componentes ou (b) um foco arcano;\n• (a) um pacote de estudioso ou (b) um pacote de explorador;\n• um escudo de braço.'
    },
    features: [
      {
        title: 'TRUQUES',
        level: 1,
        page: 1,
        sourceTitle: SOURCE_TITLE,
        text: 'O Sábio possui um acervo de truques exclusivos, sendo eles releituras — ou não — de truques existentes.\n\nTruques conhecidos por nível de Sábio:\n• 1º nível: 3 truques.\n• 4º nível: 4 truques.\n• 7º nível: 5 truques.\n• 10º nível: 6 truques.\n\nOs truques exclusivos apresentados pela fonte são Lança de Fogo, Lança de Gelo, Relâmpago, Rajada Congelante, Coluna de Pedra e Ataque Espiritual.'
      },
      {
        title: 'PONTOS DE ERUDIÇÃO',
        level: 1,
        page: 2,
        sourceTitle: SOURCE_TITLE,
        text: 'A classe possui pontos exclusivos para utilização de certas magias, como encantamentos e terrenos mágicos. Esses pontos são recuperados após um descanso longo.\n\nSeu total de Pontos de Erudição é igual a: bônus de proficiência + modificador de Inteligência + metade do seu nível atual de Sábio, arredondada para cima.\n\nA própria fonte apresenta a progressão de bônus de proficiência nos marcos 1º (+2), 5º (+3), 9º (+4), 13º (+5) e 17º (+6).' 
      },
      {
        title: 'ENCANTAR ARMA',
        level: 1,
        page: 2,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 1º nível, você pode gastar 1 Ponto de Erudição para encantar sua arma ou a de um aliado com um elemento entre Fogo, Gelo, Raio ou Terra. O encantamento dura 1 minuto — 10 turnos — e, além de alterar o tipo de dano da arma, acrescenta 1d6 de dano elemental.\n\nFogo causa dano de fogo; Gelo causa dano de frio; Raio causa dano elétrico; Terra causa dano concussivo.\n\nO dano adicional aumenta em 1d6 no 8º nível e novamente no 14º nível. A partir do 5º nível, Encantar Arma pode ser usado à distância, a até 18 metros. A partir do 8º nível, pode ser usado em vários alvos ao mesmo tempo gastando apenas 2 Pontos de Erudição.'
      },
      {
        title: 'ACERVO INTELECTUAL',
        level: 1,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 1º nível, no começo do dia, você pode escolher 1 truque de utilidade da ficha do Mago. Esse truque não pode causar dano diretamente.\n\nVocê pode escolher um truque adicional a partir do 4º nível, totalizando 2, e outro a partir do 10º nível, totalizando 3.'
      },
      {
        title: 'PROTEÇÃO ARCANA',
        level: 1,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 1º nível, você pode gastar 1 Ponto de Erudição para aumentar sua CA em +3 durante o dia inteiro.\n\nVocê pode gastar mais 2 Pontos de Erudição como uma reação para aumentar esse bônus em +3 por 1 rodada.'
      },
      {
        title: 'TERRENOS ARCANOS',
        level: 2,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 2º nível, escolha um dos Terrenos de Sábio disponíveis: Vulcão, Dilúvio ou Furacão. Você aprende mais um terreno no 11º nível.\n\nCada terreno custa 1 Ponto de Erudição, exige concentração e dura até 10 rodadas. A fonte mede a área usando os termos “quadrado” e “bloco” ao redor do Sábio; como ela não define uma equivalência em metros para essas unidades nesta ficha, o Grimório preserva a terminologia original sem inferir dimensões.'
      },
      {
        title: 'DOUTRINA DO SÁBIO',
        level: 3,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'A fonte apresenta as Doutrinas do Sábio como os caminhos de especialização da classe. O Catalisador é a Doutrina descrita neste PDF, e sua primeira característica é concedida no 3º nível. Por isso, a integração organiza a escolha da Doutrina neste nível sem acrescentar qualquer mecânica além daquelas descritas na subclasse.'
      },
      {
        title: 'CONJURAÇÃO LIVRE',
        level: 3,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 3º nível, você pode usar sua ação bônus para se mover até metade do seu deslocamento sem provocar ataques de oportunidade enquanto mantém concentração em uma magia. Além disso, você normalmente possui vantagem em testes de concentração.'
      },
      {
        title: 'DESCONCENTRAR',
        level: 5,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 5º nível, você pode gastar 1 Ponto de Erudição junto com sua reação para forçar um alvo que esteja se concentrando, a até 18 metros, a fazer um teste de resistência de Sabedoria contra sua CD.\n\nEm caso de falha, a concentração é finalizada imediatamente.'
      },
      {
        title: 'DESENCANTAR',
        level: 7,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 7º nível, você pode gastar 1 Ponto de Erudição e usar sua ação para tentar dissipar um efeito mágico ativo em uma criatura, objeto ou área que possa ver a até 18 metros.\n\nVocê remove automaticamente magias de até 4º nível. Esse limite aumenta para 5º nível no 12º nível de Sábio, 6º no 14º e 7º no 16º.\n\nPara magias acima do limite automático, faça um teste de Inteligência com CD igual a 10 + o nível da magia. Em caso de sucesso, a magia é dissipada.'
      },
      {
        title: 'ESPELHO MÁGICO',
        level: 9,
        page: 3,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 9º nível, você pode usar sua reação com ação bônus para absorver uma magia sendo utilizada especificamente em você. Quando faz isso, recupera 1 Ponto de Erudição e nega completamente o efeito da magia.\n\nVocê absorve automaticamente magias de até 6º nível. Esse limite aumenta para 7º nível no 17º nível de Sábio e 8º no 19º.\n\nPara magias de nível superior, faça um teste de Inteligência com CD igual a 10 + o nível da magia. Em caso de sucesso, a magia é absorvida.\n\nNota editorial: a fonte usa literalmente a expressão “Reação com Ação Bônus”; o Grimório preserva essa exigência sem reinterpretar a economia de ações.'
      }
    ],
    references: [
      {
        title: 'PROGRESSÃO E LACUNAS DA FONTE',
        page: 1,
        sourceTitle: SOURCE_TITLE,
        text: 'O PDF não apresenta uma tabela completa de progressão do 1º ao 20º nível. A tabela estruturada do Grimório foi montada exclusivamente a partir dos níveis, escalonamentos, bônus de proficiência e quantidades de truques explicitamente citados nas cinco páginas. Níveis sem uma nova concessão descrita permanecem sem característica nova; Incrementos no Valor de Habilidade, Ataque Extra, espaços de magia e outras características padrão não são presumidos.'
      },
      {
        title: 'MAGIA E RECURSO DE CLASSE',
        page: 5,
        sourceTitle: SOURCE_TITLE,
        text: 'As cinco habilidades da “Relação de Magias” da última página não recebem um nível convencional de magia na fonte. Elas custam 2 Pontos de Erudição e são obtidas por Maestria Elemental do Catalisador. Por isso, o Grimório as cataloga como “Magia de Sábio — sem nível convencional”, sem convertê-las em magias de 1º a 9º nível.'
      }
    ]
  };

  const subclassData = {
    id: 'sage-catalyst',
    classId: 'sage-homebrew',
    name: 'Catalisador',
    aliases: ['Catalyst'],
    desc: 'Através de diagramas arcanos e domínio absoluto sobre a geometria elemental, o Catalisador reescreve as leis da física em poucos metros quadrados e transforma seus Terrenos Arcanos em instrumentos de suporte, controle e nulificação mágica.',
    source: {
      title: SOURCE_TITLE,
      pages: '4–5',
      chapter: 'Doutrinas do Sábio — Catalisador'
    },
    features: [
      {
        title: 'CONDUIT ARCANO',
        level: 3,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 3º nível, aliados dentro de seus Terrenos Arcanos podem gastar a reação nos turnos deles para que um truque seja disparado pelo Sábio contra um alvo próximo. Isso pode ocorrer uma vez por personagem.\n\nA partir do 9º nível, é possível gastar uma reação ou uma ação bônus. Além disso, o truque passa a ser ranged; o alvo precisa estar dentro da área.'
      },
      {
        title: 'MAESTRIA ELEMENTAL',
        level: 6,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 6º nível, você escolhe duas Magias de Sábio elementais evoluídas dentre as apresentadas na última página da fonte: Bolas de Fogo, Barreira de Fogo, Tempestade de Raios, Espíritos Anciões e Fúria da Terra.\n\nEssas habilidades não recebem nível convencional de magia na fonte e utilizam 2 Pontos de Erudição conforme suas fichas.'
      },
      {
        title: 'MAESTRIA ELEMENTAL — EXPANSÃO',
        level: 8,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'No 8º nível, Maestria Elemental permite escolher mais uma Magia de Sábio dentre as opções disponíveis na última página da fonte.'
      },
      {
        title: 'PROTEGER TERRENO',
        level: 9,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 9º nível, você pode criar um terreno de nulificação completa de magia em área. Além disso, seus Terrenos Arcanos passam a ter uma área de efeito de 3 quadrados ao redor do Sábio, você aprende imediatamente mais um terreno e consegue manter 2 concentrações ativas simultaneamente.\n\nMagias de dano ou efeito em área de até 5º nível são completamente nulificadas. Esse limite aumenta para 6º nível no 15º nível de Sábio, 7º no 17º e 8º no 19º.\n\nPara magias de nível superior, faça um teste de Inteligência com CD igual a 10 + o nível da magia. Em caso de sucesso, a magia é anulada.'
      },
      {
        title: 'MAESTRIA ELEMENTAL — EXPANSÃO',
        level: 10,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'No 10º nível, Maestria Elemental permite escolher mais uma Magia de Sábio dentre as opções disponíveis na última página da fonte.'
      },
      {
        title: 'ABRACADABRA',
        level: 11,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'A partir do 11º nível, você pode gastar 3 Pontos de Erudição para utilizar uma habilidade aleatória de nível de magia 6 de quaisquer casters do livro original: Clérigo, Mago, Feiticeiro, Bruxo, Druida e Bardo.\n\nA fonte não define o procedimento para selecionar aleatoriamente a habilidade, nem restringe a lista além do texto acima; o Grimório não cria uma tabela ou método de rolagem que não esteja presente no PDF.'
      },
      {
        title: 'MAESTRIA ELEMENTAL — EXPANSÃO',
        level: 12,
        page: 4,
        sourceTitle: SOURCE_TITLE,
        text: 'No 12º nível, Maestria Elemental permite escolher mais uma Magia de Sábio dentre as opções disponíveis na última página da fonte.'
      }
    ]
  };

  const proficiencyForLevel = level => level >= 17 ? 6 : level >= 13 ? 5 : level >= 9 ? 4 : level >= 5 ? 3 : 2;
  const cantripsForLevel = level => level >= 10 ? 6 : level >= 7 ? 5 : level >= 4 ? 4 : 3;
  const eruditionBase = level => proficiencyForLevel(level) + Math.ceil(level / 2);

  const progressionFeatures = {
    1: ['Truques', 'Pontos de Erudição', 'Encantar Arma', 'Acervo Intelectual', 'Proteção Arcana'],
    2: ['Terrenos Arcanos'],
    3: ['Doutrina do Sábio', 'Conjuração Livre', 'Característica de Doutrina do Sábio'],
    4: ['Truques (4 conhecidos)', 'Acervo Intelectual (2 truques de utilidade)'],
    5: ['Encantar Arma (alcance 18 m)', 'Desconcentrar'],
    6: ['Característica de Doutrina do Sábio'],
    7: ['Truques (5 conhecidos)', 'Desencantar'],
    8: ['Encantar Arma (2d6; múltiplos alvos)', 'Característica de Doutrina do Sábio'],
    9: ['Espelho Mágico', 'Característica de Doutrina do Sábio'],
    10: ['Truques (6 conhecidos)', 'Acervo Intelectual (3 truques de utilidade)', 'Característica de Doutrina do Sábio'],
    11: ['Terrenos Arcanos (aprende mais 1)', 'Característica de Doutrina do Sábio'],
    12: ['Desencantar (automático até 5º nível)', 'Característica de Doutrina do Sábio'],
    13: [],
    14: ['Encantar Arma (3d6)', 'Desencantar (automático até 6º nível)'],
    15: [],
    16: ['Desencantar (automático até 7º nível)'],
    17: ['Espelho Mágico (automático até 7º nível)'],
    18: [],
    19: ['Espelho Mágico (automático até 8º nível)'],
    20: []
  };

  const progressionData = {
    id: 'sage-homebrew',
    title: 'O Sábio — progressão organizada a partir da fonte',
    sourcePage: 1,
    sourceTitle: SOURCE_TITLE,
    columns: [
      { key: 'level', label: 'Nível', sticky: true },
      { key: 'proficiency', label: 'Bônus de Proficiência', shortLabel: 'Prof.' },
      { key: 'features', label: 'Características', wide: true },
      { key: 'cantrips', label: 'Truques Conhecidos' },
      { key: 'erudition', label: 'Pontos de Erudição' }
    ],
    rows: Array.from({ length: 20 }, (_, index) => {
      const level = index + 1;
      return {
        level,
        proficiency: '+' + proficiencyForLevel(level),
        features: progressionFeatures[level] || [],
        cantrips: cantripsForLevel(level),
        erudition: eruditionBase(level) + ' + mod. Int'
      };
    })
  };

  window.GRIMORIO_CLASSES = window.GRIMORIO_CLASSES || [];
  window.GRIMORIO_SUBCLASSES = window.GRIMORIO_SUBCLASSES || [];
  window.GRIMORIO_CLASS_PROGRESSIONS = window.GRIMORIO_CLASS_PROGRESSIONS || {};

  if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
  if (!window.GRIMORIO_SUBCLASSES.some(item => item.id === subclassData.id)) window.GRIMORIO_SUBCLASSES.push(subclassData);
  window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressionData;
})();
