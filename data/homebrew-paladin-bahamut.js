'use strict';

/* Conteúdo homebrew original: Juramento da Lâmina de Bahamut. */
(function () {
  const subclassData = {
    id: 'juramento-lamina-bahamut',
    classId: 'paladin',
    name: 'Juramento da Lâmina de Bahamut',
    desc: 'O Juramento da Lâmina de Bahamut é trilhado por paladinos que buscam a redenção ou que foram escolhidos pelo próprio Rei dos Dragões Metálicos para serem seu braço secular no mundo. Diferente de outros cavaleiros, a Lâmina de Bahamut foca no fogo purificador que simultaneamente destrói o mal e sela as feridas dos justos. Aqueles que seguem este caminho frequentemente ostentam escamas de platina em suas armaduras e buscam a justiça com compaixão, mas sem hesitação.\n\nA primeira portadora conhecida deste juramento foi Elowen Nightfall, reconhecida como a primeira Lâmina de Bahamut.',
    sourcePage: 2,
    source: {
      title: 'Os Lâminas de Bahamut — Homebrew Original',
      pages: '2',
      chapter: 'Juramento da Lâmina de Bahamut'
    },
    features: [
      {
        title: 'DOGMAS DA LÂMINA',
        level: 3,
        page: 2,
        text: 'Os dogmas da Lâmina de Bahamut exigem os mais altos padrões de conduta:\n\nJustiça com Misericórdia. Julgue as ações, não as raças. Dê uma chance de redenção antes de desembainhar a lâmina.\n\nProteger os Fracos. Seja o escudo contra a tirania dos dragões cromáticos e de todos que oprimem os inocentes.\n\nO Brilho da Platina. Sua honra deve brilhar tanto quanto sua lâmina. Nunca deixe que a corrupção do medo guie suas ações.'
      },
      {
        title: 'MAGIAS DE JURAMENTO',
        level: 3,
        page: 2,
        text: 'Você ganha magias de juramento nos níveis de paladino listados. Consulte a tabela Magias da Lâmina de Bahamut na aba Tabelas.'
      },
      {
        title: 'CANALIZAR DIVINDADE',
        level: 3,
        page: 2,
        text: 'Quando você escolhe este juramento no 3º nível, você ganha as duas seguintes opções de Canalizar Divindade:\n\nPresença do Rei Dragão. Com uma ação, você exala uma aura de majestade dracônica. Cada criatura à sua escolha em até 9 metros deve passar num teste de resistência de Sabedoria ou ficará Amedrontada por 1 minuto. Uma criatura pode repetir o teste no final de cada um dos turnos dela.\n\nArma de Platina. Com uma ação bônus, você imbui sua arma com o brilho metálico de Bahamut. Por 1 minuto, seus ataques com essa arma causam 1d6 de dano radiante adicional e ela emite luz brilhante em um raio de 6 metros.'
      },
      {
        title: 'CHAMAS DA REDENÇÃO',
        level: 7,
        page: 2,
        text: 'No 7º nível, você pode canalizar o sopro sagrado de Bahamut através de sua arma ou mãos. Você pode gastar seu Canalizar Divindade e uma ação para lançar chamas purificadoras em um cone frontal de 9 metros.\n\nAliados dentro da área recuperam 4d8 pontos de vida. Inimigos dentro da área devem realizar um teste de resistência de Destreza; se falharem, sofrem 4d8 de dano radiante, ou metade em caso de sucesso.'
      },
      {
        title: 'ALVORADA PROMETIDA',
        level: 15,
        page: 2,
        text: 'No 15º nível, você pode manifestar a vontade de Bahamut em uma forma física gigantesca. Uma vez por descanso longo, como uma ação bônus, sua arma se torna uma lâmina de energia radiante pura por 1 minuto. Enquanto estiver ativa:\n\n• O alcance da sua arma aumenta em 3 metros.\n• Seus ataques ignoram resistência a dano não-mágico.\n• Uma vez por turno, ao atingir uma criatura, você pode liberar uma onda de choque em uma linha de 9 metros atrás do alvo. Criaturas na linha devem passar em um teste de Destreza ou sofrerão 2d10 de dano radiante.'
      },
      {
        title: 'O ALVORECER',
        level: 20,
        page: 2,
        text: 'No 20º nível, você pode assumir a forma de um avatar de platina, tornando-se a própria Lâmina de Bahamut. Uma vez por descanso longo, como uma ação, você se transforma por 1 minuto:\n\n• Você ganha asas translúcidas que concedem deslocamento de voo de 18 metros.\n• Inimigos a até 9 metros de você têm desvantagem em ataques contra qualquer alvo que não seja você.\n• Ao usar Destruição Divina contra Dragões Cromáticos, Mortos-vivos ou Corruptores, você não gasta o espaço de magia, contando como um espaço de 1º nível.\n• Você recupera 10 pontos de vida no início de cada um de seus turnos.\n\nUma vez utilizada esta característica, você não pode fazê-lo novamente até terminar um descanso longo.'
      }
    ],
    tables: [
      {
        title: 'Magias da Lâmina de Bahamut',
        description: 'Magias de juramento obtidas automaticamente nos níveis de paladino indicados.',
        page: 2,
        columns: [
          {key:'level', label:'Nível de Paladino'},
          {key:'spells', label:'Magias'}
        ],
        rows: [
          {level:'3º', spells:'Raio Guia; Destruição Flamejante'},
          {level:'5º', spells:'Sopro do Dragão; Restauração Menor'},
          {level:'9º', spells:'Voo; Luz do Dia'},
          {level:'13º', spells:'Salvaguarda contra a Morte; Escudo de Fogo'},
          {level:'17º', spells:'Onda Destrutiva; Lenda Viva'}
        ]
      }
    ]
  };

  const sourceTitle = subclassData.source.title;
  [...(subclassData.features || []), ...(subclassData.tables || [])].forEach(item => {
    item.sourceTitle = sourceTitle;
  });

  if (!window.GRIMORIO_SUBCLASSES.some(item => item.id === subclassData.id)) {
    window.GRIMORIO_SUBCLASSES.push(subclassData);
  }
})();
