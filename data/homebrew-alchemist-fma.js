'use strict';

/* Alquimista FMA — classe homebrew da D&D Wiki fornecida pelo usuário. */
(function () {
  const classData = {
  "id": "alchemist-fma-homebrew",
  "name": "Alquimista",
  "originalName": "Alchemist, FMA (5e Class)",
  "aliases": [
    "Alquimista FMA",
    "Alchemist FMA",
    "Alchemist, FMA"
  ],
  "hitDie": "d8",
  "ability": "Inteligência",
  "saves": "Constituição, Inteligência",
  "armor": "Armaduras leves, escudos",
  "weapons": "Armas simples, espadas curtas, rapieiras, armas de fogo",
  "tools": "Suprimentos de alquimista",
  "skills": "Escolha quatro: Arcanismo, História, Natureza, Religião, Intuição, Medicina, Percepção, Investigação ou Sobrevivência",
  "sigilKey": "school-transmutation",
  "color": "#a56d43",
  "desc": "Uma classe homebrew científica construída em torno de Círculos de Transmutação, Vigor Alquímico, troca equivalente e um sistema modular de Especializações Alquímicas que substitui a estrutura convencional de subclasses.",
  "source": {
    "title": "D&D Wiki — Alchemist, FMA (5e Class)",
    "pages": "1–18",
    "chapter": "Classe Alquimista, Círculos de Transmutação e Especializações Alquímicas"
  },
  "tablePage": 4,
  "overview": [
    {
      "title": "ALQUIMISTA",
      "page": 3,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Alquimistas são aqueles que utilizam a ciência da alquimia para alterar o ambiente ao seu redor. A alquimia exige amplo conhecimento de química, física, metafísica e até mesmo noções de geologia e biologia para realizar transmutações, manipulando materiais em nível atômico. Embora qualquer pessoa possa realizar alquimia, poucas recebem treinamento suficiente para empregá-la de forma prática, e menos ainda se tornam alquimistas verdadeiramente excepcionais."
    }
  ],
  "creation": [
    {
      "title": "Criando um Alquimista",
      "page": 3,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Ao criar um Alquimista de Transmutação, faça a si mesmo algumas perguntas. Quem treinou você? Como você despertou seu poder? Você molda pedra e terra conforme suas necessidades? Ou apenas libera poderosas rajadas de força elemental para destruir seus inimigos? Talvez a violência não lhe interesse e você se importe somente com a ciência.\n\nConstrução Rápida. Primeiro, Inteligência deve ser seu valor de habilidade mais alto, seguida por Constituição. Segundo, escolha o antecedente Artesão de Guilda."
    }
  ],
  "basics": {
    "title": "CARACTERÍSTICAS DE CLASSE",
    "page": 4,
    "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
    "text": "PONTOS DE VIDA\n\nDado de Vida: 1d8 por nível de Alquimista.\n\nPontos de Vida no 1º Nível: 8 + seu modificador de Constituição.\n\nPontos de Vida em Níveis Superiores: 1d8 (ou 5) + seu modificador de Constituição por nível de Alquimista após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras: armaduras leves, escudos.\n\nArmas: armas simples, espadas curtas, rapieiras, armas de fogo.\n\nFerramentas: suprimentos de alquimista.\n\nTestes de Resistência: Constituição, Inteligência.\n\nPerícias: escolha quatro entre Arcanismo, História, Natureza, Religião, Intuição, Medicina, Percepção, Investigação e Sobrevivência.\n\nEQUIPAMENTO\n\n• (a) armadura de couro ou (b) um escudo;\n• (a) uma espada curta ou (b) uma rapieira ou (c) quaisquer duas armas simples;\n• (a) pacote de explorador ou (b) pacote de estudioso;\n• (a) suprimentos de alquimista ou (b) 1 pistola e 20 munições ou (c) 1 besta de mão e 20 virotes."
  },
  "features": [
    {
      "title": "Círculos de Transmutação",
      "level": 1,
      "page": 5,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 1º nível, alquimistas podem manifestar o poder da compreensão, desconstrução e reconstrução em nível atômico por meio de Círculos de Transmutação. Todo Círculo criado ocupa o espaço em que você estava quando o criou e só pode ser ativado enquanto você estiver tocando nele.\n\nCada Círculo de Transmutação pode manipular um único elemento (como ferro, oxigênio ou chumbo), um composto (como água, metano ou ferrugem) ou uma substância composta por pelo menos metade do material escolhido; esse material não pode estar em posse de uma criatura. No 1º nível, seus Círculos de Transmutação podem manipular um único material não biológico à sua escolha.\n\nPara usar um Círculo de Transmutação, você deve gastar Vigor Alquímico. Seu nível de Alquimista determina quantos pontos você possui, conforme indicado na coluna Vigor Alquímico da tabela O Alquimista. Você recupera todo o Vigor Alquímico ao terminar um descanso longo.\n\nCírculos de Transmutação podem ser desenhados em diferentes tamanhos. O tamanho do Círculo determina a quantidade de Vigor Alquímico gasta para ativá-lo, o tempo necessário para criá-lo e usá-lo (ambos exigem concentração), o alcance máximo de onde ele pode extrair material e afetar o ambiente, e o peso máximo que pode manipular. A menos que uma regra diga o contrário, Círculos não podem afetar materiais mágicos. Quando você usa um Círculo de Transmutação, role 1d4. Com resultado 1, o Círculo é destruído e não pode ser usado novamente até ser redesenhado.\n\nCírculos Miúdos só podem ser usados sem custo um número de vezes a cada 10 minutos igual ao seu modificador de Inteligência; após isso, passam a custar 1 ponto de Vigor Alquímico.\n\nNota de terminologia 5e. O texto original utiliza as categorias Free Action e Full Turn Action, que não são categorias formais de ação em D&D 5e. Nesta adaptação, Free Action foi vertida como “sem gastar ação” e Full Turn Action como “ação de turno completo”, sem acrescentar uma definição mecânica que não exista na fonte."
    },
    {
      "title": "Usos do Círculo de Transmutação",
      "level": 1,
      "page": 5,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A alquimia é a ciência de reconstruir fisicamente a matéria em nível atômico e, por isso, pode parecer uma habilidade bastante abrangente, capaz de fazer praticamente qualquer coisa. Sem Especializações Alquímicas, objetos criados por seus Círculos não podem possuir funções que o material de origem não possuía (por exemplo, você não pode transformar uma pistola em uma submetralhadora, mas pode transformá-la em outro tipo de pistola).\n\nQualquer uso de um Círculo de Transmutação que afete outra criatura normalmente pode ser evitado se ela obtiver sucesso em um teste de resistência de Destreza contra sua CD de Transmutação, ou se você errar uma jogada de ataque de Transmutação.\n\nCD de Transmutação = 8 + seu modificador de Inteligência + seu bônus de proficiência.\n\nModificador de Ataque de Transmutação = seu modificador de Inteligência + seu bônus de proficiência.\n\nTodo dano causado por um Círculo e a quantidade de pontos de vida de seus constructos são determinados diretamente pelo peso dos materiais manipulados, conforme as tabelas de consulta desta classe. Dependendo do material do qual um objeto foi transmutado, ele também pode possuir um limiar de dano."
    },
    {
      "title": "Especialização Alquímica",
      "level": 1,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 1º nível, você especializa sua alquimia em um campo específico de estudo, adquirindo uma das Especializações Alquímicas apresentadas ao final desta descrição de classe. Você adquire uma Especialização Alquímica adicional no 3º, 6º, 9º, 12º, 14º, 18º e 20º nível. Você pode escolher a mesma Especialização Alquímica mais de uma vez.\n\nImportante. A tabela “O Alquimista” da página 4 apresenta uma progressão diferente para essas aquisições. O Grimório preserva ambas as informações da fonte e não calcula automaticamente quantas Especializações você deve possuir; consulte a aba Especializações para ver a divergência completa."
    },
    {
      "title": "Tudo é Um",
      "level": 2,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 2º nível, você pode passar 1 minuto analisando um material. Um Círculo de Transmutação que você usar dentro da próxima hora poderá manipulá-lo mesmo que normalmente você não seja capaz de manipular esse material. Para analisá-lo, o material não pode estar em posse de uma criatura, a menos que ela permita voluntariamente. Ao alcançar o 6º nível, você pode gastar 1 ponto de Vigor Alquímico para fazer essa análise com uma ação; ao analisar dessa forma, você também pode analisar material em posse de uma criatura não voluntária, desde que ela esteja ao seu alcance."
    },
    {
      "title": "Alquimia de Combate",
      "level": 3,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 3º nível, você aprende a aplicar sua perícia alquímica ao seu estilo de combate, tanto ofensiva quanto defensivamente. Você recebe os seguintes benefícios:\n\n• Quando usa sua ação para realizar um ataque, você pode ativar um Círculo de tamanho Médio ou menor como uma ação bônus no mesmo turno.\n• Como uma ação bônus, você pode gastar Vigor Alquímico para receber uma quantidade de pontos de vida temporários igual ao dobro dos pontos gastos.\n• Uma vez por turno, após usar um Círculo de tamanho Médio ou menor, você pode imediatamente realizar um ataque com arma de uma mão, corpo a corpo ou à distância.\n• Sempre que usa um Círculo, você pode adicionar seu modificador de Inteligência à sua CA até o início do seu próximo turno."
    },
    {
      "title": "Incremento no Valor de Habilidade",
      "level": 4,
      "page": 4,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” concede Incremento no Valor de Habilidade neste nível. O PDF fornecido não apresenta um bloco mecânico separado para essa característica; o Grimório preserva a concessão da tabela sem importar texto externo."
    },
    {
      "title": "Especialização Favorita",
      "level": 5,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 5º nível, escolha uma de suas Especializações Alquímicas como aquela em que você possui maior conhecimento e domínio. Ao usar um Círculo de Transmutação da especialização escolhida, você pode reduzir o custo do Círculo em uma quantidade igual ao seu bônus de proficiência, até um custo mínimo de 1. Sempre que causar dano com um Círculo dessa especialização, você também pode adicionar seu modificador de Inteligência ao dano.\n\nAlém disso, você pode tratar o alcance e o peso máximos dos Círculos dessa especialização como se fossem de um tamanho maior, gastando Vigor Alquímico adicional igual ao custo do tamanho considerado. No 5º nível, você pode tratá-los como um tamanho maior; no 9º nível, como até dois tamanhos maiores; e no 13º nível, como até três tamanhos maiores, até o máximo de Imenso.\n\nVocê pode mudar sua Especialização Favorita quando sobe de nível ou quando adquire outra Especialização Alquímica."
    },
    {
      "title": "Recuperação Alquímica",
      "level": 6,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 6º nível, com uma ação, você pode recuperar uma quantidade de Vigor Alquímico igual à metade do seu nível. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência. Você recupera um uso ao terminar um descanso curto e todos os usos ao terminar um descanso longo."
    },
    {
      "title": "Alquimia Improvisada",
      "level": 7,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 7º nível, como parte de um descanso longo, você pode escolher uma Especialização Alquímica cujos pré-requisitos cumpra. Você pode usar essa especialização até seu próximo descanso longo; contudo, os Círculos dela custam o dobro de Vigor Alquímico e ela não pode se tornar sua Especialização Favorita.\n\nVocê não pode escolher Alquimia Avançada nem especializações de Alquimia da Alma dessa forma, e qualquer especialização escolhida por esta característica não conta para cumprir pré-requisitos de outras especializações."
    },
    {
      "title": "Incremento no Valor de Habilidade",
      "level": 8,
      "page": 4,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” concede Incremento no Valor de Habilidade neste nível. O PDF fornecido não apresenta um bloco mecânico separado para essa característica; o Grimório preserva a concessão da tabela sem importar texto externo."
    },
    {
      "title": "Meditação Alquímica",
      "level": 9,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 9º nível, ao criar um Círculo, você pode começar a se concentrar nele como uma forma de pseudomeditação até o final do seu próximo turno. Enquanto permanecer tocando o Círculo e mantiver a concentração, o custo total do Círculo é reduzido à metade, a área de efeito é indicada antes de ele ser ativado e o Círculo é ativado ao final do seu próximo turno."
    },
    {
      "title": "Conhecimento Avançado",
      "level": 11,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Ao alcançar o 11º nível, você aprende a manipular uma quantidade de novos elementos igual ao seu modificador de Inteligência. Se seu modificador de Inteligência aumentar mais tarde, você também pode aprender um novo elemento; se ele diminuir, você perde domínio sobre um dos elementos aprendidos."
    },
    {
      "title": "Incremento no Valor de Habilidade",
      "level": 12,
      "page": 4,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” concede Incremento no Valor de Habilidade neste nível. O PDF fornecido não apresenta um bloco mecânico separado para essa característica; o Grimório preserva a concessão da tabela sem importar texto externo."
    },
    {
      "title": "Um é Tudo",
      "level": 13,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 13º nível, seus Círculos de Transmutação podem manipular qualquer quantidade de materiais que você saiba manipular. Além disso, quando usa Tudo é Um, você pode analisar 2 materiais ao mesmo tempo e pode manipulá-los com uma quantidade de Círculos de Transmutação igual ao seu modificador de Inteligência durante a próxima hora."
    },
    {
      "title": "Cão do Exército",
      "level": 15,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 15º nível, você se torna especialista em um campo específico da alquimia. Escolha uma categoria de Especialização Alquímica. Sempre que adquirir uma Especialização Alquímica dessa categoria, você pode adquirir duas em vez de uma. Ao alcançar o 18º nível, você se torna especialista em um segundo campo da alquimia e pode escolher outra categoria para receber este benefício."
    },
    {
      "title": "Incremento no Valor de Habilidade",
      "level": 16,
      "page": 4,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” concede Incremento no Valor de Habilidade neste nível. O PDF fornecido não apresenta um bloco mecânico separado para essa característica; o Grimório preserva a concessão da tabela sem importar texto externo."
    },
    {
      "title": "Mestre Alquimista",
      "level": 17,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 17º nível, você reduz em um passo o custo de ação de qualquer um de seus Círculos (Ação de Turno Completo > Ação > Ação Bônus > Sem Ação), pode usar um Círculo Enorme como uma Ação de Turno Completo e um Círculo Imenso ao longo de 1 minuto.\n\nAlém disso, sempre que sobe de nível, você pode perder uma Especialização Alquímica que não seja pré-requisito de outra Especialização Alquímica que possua para adquirir uma Especialização Alquímica diferente. Especializações Alquímicas de uma categoria escolhida com Cão do Exército contam como meia especialização tanto para a quantidade que você pode perder quanto para a quantidade que pode adquirir."
    },
    {
      "title": "Incremento no Valor de Habilidade",
      "level": 19,
      "page": 4,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” concede Incremento no Valor de Habilidade neste nível. O PDF fornecido não apresenta um bloco mecânico separado para essa característica; o Grimório preserva a concessão da tabela sem importar texto externo."
    },
    {
      "title": "Filósofo",
      "level": 20,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 20º nível, sua experiência fez de você um talento que surge uma vez por século, e seu nome ficará registrado na história da alquimia. Seu valor de Inteligência aumenta em 4, assim como seu máximo, e você adquire uma Especialização Alquímica."
    },
    {
      "title": "Característica Alternativa: A Verdade",
      "level": 20,
      "page": 6,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "No 20º nível, você vislumbrou a verdadeira natureza da alquimia: a verdade dentro da verdade. Uma vez por turno, sem gastar uma ação e pagando metade do custo, você pode criar instantaneamente um Círculo de Transmutação de qualquer tamanho dentro do seu próprio corpo. Esse Círculo permanece até ser usado ou até você criar outro Círculo de Transmutação."
    }
  ],
  "tables": [
    {
      "title": "Tamanhos dos Círculos de Transmutação",
      "page": 5,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "description": "Custo, tempo de uso, alcance máximo e peso máximo de cada tamanho de Círculo. “Sem gastar ação” e “ação de turno completo” preservam a terminologia adaptada da fonte.",
      "columns": [
        {
          "key": "size",
          "label": "Tamanho"
        },
        {
          "key": "cost",
          "label": "Custo"
        },
        {
          "key": "time",
          "label": "Tempo de uso"
        },
        {
          "key": "range",
          "label": "Alcance máximo"
        },
        {
          "key": "weight",
          "label": "Peso máximo"
        }
      ],
      "rows": [
        {
          "size": "Miúdo",
          "cost": "0",
          "time": "Sem gastar ação",
          "range": "1,5 m",
          "weight": "mod. de Inteligência × 0,5 kg"
        },
        {
          "size": "Pequeno",
          "cost": "2",
          "time": "Ação bônus",
          "range": "mod. de Inteligência × 1,5 m",
          "weight": "mod. de Inteligência × 2,5 kg"
        },
        {
          "size": "Médio",
          "cost": "4",
          "time": "Ação",
          "range": "mod. de Inteligência × 3 m",
          "weight": "mod. de Inteligência × 5 kg"
        },
        {
          "size": "Grande",
          "cost": "6",
          "time": "Ação de turno completo*",
          "range": "mod. de Inteligência × 6 m",
          "weight": "mod. de Inteligência × 10 kg"
        },
        {
          "size": "Enorme",
          "cost": "12",
          "time": "1 minuto",
          "range": "mod. de Inteligência × 12 m",
          "weight": "mod. de Inteligência × 20 kg"
        },
        {
          "size": "Imenso",
          "cost": "24",
          "time": "10 minutos",
          "range": "mod. de Inteligência × 18 m",
          "weight": "mod. de Inteligência × 50 kg"
        }
      ]
    },
    {
      "title": "Peso, Dados de Dano e Pontos de Vida",
      "page": 5,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "description": "Dano causado por Círculos e pontos de vida de constructos conforme o peso manipulado.",
      "columns": [
        {
          "key": "weight",
          "label": "Peso"
        },
        {
          "key": "damage",
          "label": "Dados de dano"
        },
        {
          "key": "hp",
          "label": "Pontos de vida"
        }
      ],
      "rows": [
        {
          "weight": "0,5–2 kg",
          "damage": "1d6",
          "hp": "3"
        },
        {
          "weight": "2,5–4,5 kg",
          "damage": "2d6",
          "hp": "7"
        },
        {
          "weight": "5–14,5 kg",
          "damage": "3d6",
          "hp": "11"
        },
        {
          "weight": "15–24,5 kg",
          "damage": "4d6",
          "hp": "14"
        },
        {
          "weight": "25–49,5 kg",
          "damage": "5d6",
          "hp": "18"
        },
        {
          "weight": "50–99,5 kg",
          "damage": "10d6",
          "hp": "35"
        },
        {
          "weight": "100–199,5 kg",
          "damage": "20d6",
          "hp": "70"
        },
        {
          "weight": "200–399,5 kg",
          "damage": "30d6",
          "hp": "140"
        },
        {
          "weight": "400+ kg",
          "damage": "40d6",
          "hp": "280"
        }
      ]
    },
    {
      "title": "Materiais e Limiar de Dano",
      "page": 5,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "description": "As setas e rótulos da coluna Categoria são preservados exatamente como aparecem no PDF fornecido, sem interpretar silenciosamente a hierarquia visual.",
      "columns": [
        {
          "key": "category",
          "label": "Categoria"
        },
        {
          "key": "material",
          "label": "Material"
        },
        {
          "key": "threshold",
          "label": "LD"
        },
        {
          "key": "weight",
          "label": "Peso"
        }
      ],
      "rows": [
        {
          "category": "↓",
          "material": "Tecido, papel, corda",
          "threshold": "0",
          "weight": "75 kg"
        },
        {
          "category": "Frágil",
          "material": "Cristal, vidro, gelo",
          "threshold": "2",
          "weight": "150 kg"
        },
        {
          "category": "↑",
          "material": "Madeira, osso",
          "threshold": "4",
          "weight": "250 kg"
        },
        {
          "category": "↓",
          "material": "Pedra, ouro",
          "threshold": "10",
          "weight": "400 kg"
        },
        {
          "category": "Resistente",
          "material": "Ferro, aço",
          "threshold": "15",
          "weight": "1.250 kg"
        },
        {
          "category": "↑",
          "material": "Chumbo, urânio",
          "threshold": "20",
          "weight": "1.750 kg"
        }
      ]
    }
  ],
  "references": [
    {
      "kind": "rules",
      "title": "Progressão dos Dados de Dano",
      "page": 3,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Quando uma característica disser que você aumenta o dado de dano de um ataque em 1 passo ou categoria, use uma progressão semelhante à seguinte:\n\n1d4 > 1d6 > 1d8 > 1d10 > 1d12 > 2d6 > 2d8 > 2d10 > 2d12 > 4d6 > 4d8 > 4d10 > 4d12 > 8d6 > 8d8 > 8d10 > 8d12... e assim por diante; ao retornar aos d6, a quantidade de dados dobra."
    },
    {
      "kind": "lore",
      "title": "As Leis da Alquimia",
      "page": 3,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A alquimia não é magia; embora seja uma arte de poder extraordinário, ela é uma ciência.\n\nTroca Equivalente: matéria e energia não podem ser criadas nem destruídas por meio da alquimia, apenas transformadas.\n\nUm é Tudo, Tudo é Um: toda a existência é tratada como uma única substância ou corpo, dividido em partes apenas em nível superficial.\n\nA fonte também apresenta três leis sociais: não transmutar ouro; não realizar transmutação humana; e servir ao povo."
    },
    {
      "kind": "lore",
      "title": "Alquimistas Federais",
      "page": 3,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Alquimistas do mais alto calibre costumam se afiliar às forças armadas. Esses Alquimistas Federais recebem acesso a laboratórios e materiais de pesquisa, verba, patente de major e um relógio de bolso de prata; em troca, juram obedecer às ordens de seus superiores e podem tornar-se armas humanas em tempos de guerra."
    },
    {
      "kind": "sourceConflict",
      "title": "Divergência interna: aquisições de Especialização",
      "page": "4 e 6",
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A tabela “O Alquimista” marca Especialização Alquímica em 1º, 3º, 5º, 10º, 14º e 20º nível, com contadores (2) a (6). Já o bloco “Especialização Alquímica” afirma que você começa com uma no 1º nível e adquire outras no 3º, 6º, 9º, 12º, 14º, 18º e 20º nível. Filósofo ainda concede uma Especialização no 20º nível, e Cão do Exército pode duplicar aquisições em categorias escolhidas. O Grimório preserva todas essas instruções e não escolhe automaticamente uma contagem oficial."
    },
    {
      "kind": "sourceConflict",
      "title": "Divergência interna: quantidade de categorias",
      "page": 7,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "A fonte afirma que as Especializações Alquímicas são divididas em “9 categorias”, mas enumera dez: Alquimia Básica, Alquimia Avançada, Quimioalquimia, Alquimia Energética, Alquimia Militar, Bioalquimia, Antialquimia, Alquimia da Criação, Alquimia da Alma e Alkahestria. O Grimório apresenta as dez categorias efetivamente listadas."
    },
    {
      "kind": "multiclass",
      "title": "Multiclasse",
      "page": 18,
      "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
      "text": "Pré-requisitos: Inteligência 16 e 16 em outro valor de habilidade à sua escolha.\n\nProficiências: ao adquirir seu primeiro nível de Alquimista por multiclasse, você recebe proficiência em duas entre Arcanismo, História, Natureza, Religião, Investigação, Intuição, Medicina, Percepção e Sobrevivência."
    }
  ],
  "specializationSystem": {
    "label": "Especializações Alquímicas",
    "singularLabel": "Especialização Alquímica",
    "subclassEquivalent": false,
    "repeatable": true,
    "sourcePages": "7–17",
    "count": 40,
    "categoryClaim": 9,
    "actualCategoryCount": 10,
    "tableSchedule": [
      1,
      3,
      5,
      10,
      14,
      20
    ],
    "featureSchedule": [
      1,
      3,
      6,
      9,
      12,
      14,
      18,
      20
    ],
    "intro": "Especializações Alquímicas não são subclasses. Elas são módulos de estudo adquiridos diversas vezes ao longo da progressão; a mesma Especialização pode ser escolhida mais de uma vez e algumas opções exigem outras Especializações como pré-requisito.",
    "rules": [
      {
        "title": "Escolhas modulares",
        "text": "Cada vez que a classe concede uma Especialização Alquímica, escolha uma opção cujos pré-requisitos você cumpra. A mesma Especialização pode ser escolhida novamente."
      },
      {
        "title": "Especialização Favorita",
        "text": "No 5º nível, escolha uma Especialização que você possua como Favorita. Ela pode ser alterada ao subir de nível ou ao adquirir outra Especialização."
      },
      {
        "title": "Alquimia Improvisada",
        "text": "No 7º nível, você pode usar temporariamente uma Especialização válida até o próximo descanso longo. Ela custa o dobro de Vigor, não pode ser Favorita, não pode ser de Alquimia Avançada nem Alquimia da Alma e não conta para pré-requisitos."
      },
      {
        "title": "Cão do Exército",
        "text": "No 15º nível, escolha uma categoria; quando adquirir uma Especialização dessa categoria, pode adquirir duas em vez de uma. No 18º nível, escolha uma segunda categoria."
      }
    ],
    "sourceConflict": {
      "title": "A fonte apresenta duas progressões diferentes",
      "text": "Tabela da p. 4: aquisições marcadas no 1º, 3º, 5º, 10º, 14º e 20º nível. Texto da p. 6: uma no 1º e adicionais no 3º, 6º, 9º, 12º, 14º, 18º e 20º. Filósofo também concede uma Especialização no 20º nível. Por isso, esta aba funciona como catálogo e referência, não como contador automático de escolhas."
    },
    "categoryConflict": "A página 7 diz “9 categorias”, mas lista dez. As dez categorias efetivamente enumeradas são exibidas abaixo.",
    "categories": [
      {
        "id": "basic",
        "name": "Alquimia Básica",
        "page": 8,
        "description": "A alquimia básica representa as formas que a maioria dos alquimistas consegue compreender e utilizar com relativa facilidade.",
        "specializations": [
          {
            "name": "Novo Material",
            "page": 8,
            "repeatable": true,
            "text": "Seus Círculos podem transmutar três materiais não biológicos adicionais à sua escolha."
          },
          {
            "name": "Tatuagem de Transmutação",
            "page": 8,
            "repeatable": true,
            "text": "Você grava permanentemente dois Círculos de Transmutação Pequenos em algum lugar do corpo. Esses Círculos só podem usar Especializações Alquímicas e materiais que você designar quando os cria ou ao terminar um descanso longo. Quando um desses Círculos seria destruído pelo uso, em vez disso você sofre 1d4 de dano necrótico. Para cada 2 Tatuagens de Transmutação de um tamanho menor que possuir, você pode substituí-las por uma única Tatuagem de Transmutação do tamanho imediatamente superior (por exemplo, em vez de 2 tatuagens Pequenas, você pode ter 1 tatuagem Média; em vez de 2 Médias, 1 Grande)."
          },
          {
            "name": "Converter Material",
            "page": 8,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, você converte um material que saiba manipular em peso igual de outro material que também saiba manipular, em nível atômico. Isso não pode transmutar materiais biológicos em não biológicos, nem materiais não biológicos em biológicos."
          },
          {
            "name": "Alquimia Profunda",
            "page": 8,
            "repeatable": true,
            "text": "Você é capaz de extrair energia de movimentos mais profundos das placas tectônicas do que a maioria dos alquimistas. Você recebe usos adicionais de Recuperação Alquímica iguais à metade do seu bônus de proficiência, arredondado para baixo. Esses usos são gastos e recuperados normalmente."
          },
          {
            "name": "Transmutação Rápida",
            "page": 8,
            "repeatable": true,
            "text": "Você se tornou capaz de pensar rapidamente ao utilizar seus Círculos de Transmutação. Uma vez por turno, você pode realizar a ação Preparar sem gastar sua ação, mas apenas para definir um gatilho que ative um Círculo ao seu alcance."
          }
        ]
      },
      {
        "id": "advanced",
        "name": "Alquimia Avançada",
        "page": 9,
        "description": "A alquimia avançada é a aplicação abstrata das leis da alquimia.",
        "improvisedBlocked": true,
        "specializations": [
          {
            "name": "Alquimia Exaustiva",
            "page": 9,
            "repeatable": true,
            "text": "Quando usa um Círculo, você pode absorver mais energia do que é seguro controlar. Você recebe imediatamente 10 pontos de Vigor Alquímico e 1 nível de exaustão."
          },
          {
            "name": "Transmutação Humana",
            "page": 9,
            "repeatable": true,
            "text": "Usando um Círculo Enorme e 34 litros de água, 20 kg de carbono, 3,8 litros de amônia, 1,5 kg de cal, 800 g de fósforo, 250 g de sal, 110 g de salitre, 85 g de enxofre, 8,5 g de flúor, 5,5 g de ferro e 3 g de silício, você comete o maior tabu da alquimia. Ao usar esse Círculo, você é teleportado para A Verdade e, pouco depois, retorna ao mundo físico. Uma parte do corpo, escolhida pelo Mestre, tem seus pontos de vida reduzidos permanentemente a 0, e seu máximo de pontos de vida é reduzido permanentemente pelo máximo de pontos de vida daquela parte do corpo. Além disso, você adquire A Verdade independentemente do seu nível. Depois de usar esta transmutação, se uma criatura obtiver recursos ao matar você, como pontos de alma, ela recebe o dobro da quantidade normal.",
            "requires": [
              "Alquimia Exaustiva"
            ]
          },
          {
            "name": "Transmutação Suprema",
            "page": 9,
            "repeatable": true,
            "text": "Usando um Círculo Enorme, você troca valor infinito por valor infinito. Você conjura a magia desejo. Em troca, sacrifica seu Portal da Verdade, perde todos os níveis desta classe e se torna incapaz de adquirir novos níveis nela.",
            "requires": [
              "Transmutação Humana"
            ]
          }
        ]
      },
      {
        "id": "chemo",
        "name": "Quimioalquimia",
        "page": 10,
        "description": "A quimioalquimia manipula determinados compostos para produzir um efeito combinado, normalmente por meio de alguma reação química.",
        "specializations": [
          {
            "name": "Alquimia das Chamas",
            "page": 10,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, você concentra oxigênio em quaisquer áreas de 1,5 m dentro do alcance do Círculo até o início do seu próximo turno; todas essas áreas devem estar conectadas umas às outras e a você. Se uma área afetada for exposta a uma chama aberta ou eletricidade, ela entra em combustão, obrigando cada criatura na área a realizar um teste de resistência de Destreza. Em caso de falha, a criatura sofre dano de fogo igual aos dados de dano do Círculo; em caso de sucesso, sofre metade desse dano. Além disso, ao usar Alquimia das Chamas, você pode reduzir pela metade o alcance máximo do Círculo para aumentar o dano causado às criaturas nas áreas restantes. Esse aumento é igual ao dobro do custo em Vigor Alquímico do Círculo."
          },
          {
            "name": "Alquimia do Trovão",
            "page": 10,
            "repeatable": true,
            "text": "Usando um Círculo Pequeno imediatamente após atingir uma criatura com um ataque feito com uma arma corpo a corpo de metal, você pode obrigar o alvo a realizar um teste de resistência de Constituição. Em caso de falha, ele sofre os dados de dano do Círculo + 2d8 de dano elétrico. Em caso de sucesso, sofre metade desse dano."
          },
          {
            "name": "Alquimia do Lótus",
            "page": 10,
            "repeatable": true,
            "text": "Como um Círculo Grande, você pode manipular diretamente a energia dentro da matéria para criar um desequilíbrio que explode violentamente. Cada criatura em um cone cujo comprimento pode ser de até seu modificador de Inteligência × 3 m deve realizar um teste de resistência de Constituição. Em caso de falha, ela sofre dano de força igual aos dados de dano do Círculo. Em caso de sucesso, sofre metade desse dano."
          },
          {
            "name": "Alquimia da Pólvora",
            "page": 10,
            "repeatable": true,
            "text": "Quando usa Alquimia do Lótus, você pode criar um desequilíbrio químico em vez de um desequilíbrio energético. Quando faz isso, a explosão não ocorre até que você escolha detoná-la no local em que a conjurou, em qualquer momento dentro de 1 hora após a criação.",
            "requires": [
              "Alquimia do Lótus"
            ]
          }
        ]
      },
      {
        "id": "energy",
        "name": "Alquimia Energética",
        "page": 11,
        "description": "A alquimia energética manipula diretamente a quantidade de energia presente em um sistema, permitindo alterar o estado de um material.",
        "specializations": [
          {
            "name": "Alquimia do Congelamento",
            "page": 11,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, qualquer líquido à sua escolha dentro do alcance congela completamente até o final do seu próximo turno, e toda criatura que estiver tocando o líquido congelado deve realizar um teste de resistência de Força. Em caso de falha, ela sofre dano de frio igual aos dados de dano do Círculo e fica impedida até o final do seu próximo turno. Em caso de sucesso, sofre metade desse dano e não fica impedida. Se uma criatura sofrer, por este efeito, dano igual à metade do máximo de seus pontos de vida, ela deve realizar outro teste de resistência de Força, ficando petrificada em caso de falha. Se a criatura falhou no primeiro teste, ela tem desvantagem no segundo. Uma criatura petrificada dessa forma pode repetir o teste de resistência ao final de cada um de seus turnos, libertando-se do gelo e encerrando a condição em caso de sucesso.\n\nAlém disso, usando um Círculo de qualquer tamanho, você pode ativar outro Círculo que esteja em contato com o primeiro por meio de corpos d'água, independentemente do alcance de qualquer um dos Círculos."
          },
          {
            "name": "Alquimia da Condensação",
            "page": 11,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, qualquer gás dentro do alcance é resfriado até se tornar líquido por até 1 minuto, enquanto você mantiver a concentração. Se uma criatura terminar o turno nessa área, deve realizar um teste de resistência de Constituição. Em caso de falha, sofre dano de frio igual aos dados de dano do Círculo e fica atordoada até o início do próximo turno dela. Em caso de sucesso, sofre metade desse dano e não fica atordoada.",
            "requires": [
              "Alquimia do Congelamento"
            ]
          },
          {
            "name": "Alquimia da Fusão",
            "page": 11,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, qualquer substância sólida à sua escolha dentro do alcance, desde que não esteja sendo vestida nem carregada, derrete e se torna líquida até o final do seu próximo turno. Toda criatura ao seu alcance deve realizar um teste de resistência de Destreza. Em caso de falha, sofre dano de fogo igual aos dados de dano do Círculo, e quaisquer objetos em contato com a substância derretida têm seu limiar de dano reduzido a 0 até o final do seu próximo turno. Em caso de sucesso, a criatura sofre metade do dano. Se uma criatura começar o turno na área da substância derretida ou entrar nela pela primeira vez, deve realizar o teste de resistência."
          },
          {
            "name": "Alquimia da Ebulição",
            "page": 11,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, qualquer corpo líquido à sua escolha dentro do alcance do Círculo é aquecido até ferver por 1 minuto. Quando uma criatura começa o turno nessa área ou entra nela pela primeira vez, deve realizar um teste de resistência de Constituição. Em caso de falha, sofre dano de fogo igual aos dados de dano do Círculo. Você pode encerrar esse efeito quando quiser, sem gastar uma ação, enquanto estiver ao alcance do corpo líquido. Se uma criatura tocar o Círculo quando você o ativa, você pode ferver o sangue dela, fazendo com que todo dano de fogo que ela sofrer dessa forma ignore resistência. Se a criatura sofrer, por este efeito, dano igual à metade do máximo de seus pontos de vida, seu máximo de pontos de vida é reduzido pelo custo inicial do Círculo.",
            "requires": [
              "Alquimia da Fusão"
            ]
          }
        ]
      },
      {
        "id": "military",
        "name": "Alquimia Militar",
        "page": 12,
        "description": "A alquimia militar cria ferramentas por meio das quais um alquimista pode se proteger e atacar.",
        "specializations": [
          {
            "name": "Lâmina do Alquimista",
            "page": 12,
            "repeatable": true,
            "text": "Quando cria uma arma corpo a corpo com seus Círculos de Transmutação, o dado de dano da arma aumenta um número de categorias igual à metade do seu modificador de Inteligência, arredondado para baixo (por exemplo, com modificador de Inteligência +4, o dado de dano de uma rapieira aumenta duas categorias, passando de d8 para d12). Quando cria escudos com seus Círculos de Transmutação, eles recebem um bônus na CA igual à metade do seu modificador de Inteligência, arredondado para baixo.\n\nArmas e escudos criados dessa forma precisam receber manutenção de você ao menos uma vez por dia; para isso, você gasta 1 ponto de Vigor Alquímico com uma ação. Caso contrário, eles perdem o bônus."
          },
          {
            "name": "Alquimia do Braço Forte",
            "page": 12,
            "repeatable": true,
            "text": "Uma vez por turno, quando cria uma arma com seus Círculos, você pode imediatamente realizar um ataque com ela. Além disso, você aprende um Círculo de Transmutação especial que, quando golpeado contra outro Círculo do mesmo tipo, cria uma transmutação extremamente rápida usando força cinética. Você pode desenhar dois desses Círculos, ambos Miúdos, em qualquer peça de equipamento cuja durabilidade seja comparável à pedra ou superior; você não precisa rolar 1d4 para determinar se eles são destruídos ao serem ativados. Enquanto segura ou veste esse equipamento, você pode ativar os Círculos sem gastar uma ação ou como parte de um ataque corpo a corpo, caso um deles tenha sido desenhado em uma arma. Até o fim do seu turno, o Círculo pode transmutar qualquer coisa tocada pelo equipamento, sem alcance além desse contato, e seu limite de peso é calculado como se fosse um Círculo Grande. Para esta especialização funcionar, você precisa ser capaz de fazer os dois Círculos entrarem em contato.",
            "requires": [
              "Lâmina do Alquimista"
            ]
          },
          {
            "name": "Armadura do Alquimista",
            "page": 12,
            "repeatable": true,
            "text": "Ao criar qualquer tipo de armadura com seus Círculos de Transmutação, você pode remover a desvantagem dela em testes de Destreza (Furtividade) e também conceder à armadura um bônus na CA igual à metade do seu modificador de Inteligência, arredondado para baixo. Você deve realizar manutenção nessas armaduras da mesma forma descrita em Lâmina do Alquimista."
          },
          {
            "name": "Disparo do Alquimista",
            "page": 12,
            "repeatable": true,
            "text": "Quando cria armas à distância e munições com seus Círculos de Transmutação, o dado de dano delas aumenta um número de categorias igual à metade do seu modificador de Inteligência, arredondado para baixo. Você deve realizar manutenção nessas armas e munições da mesma forma descrita em Lâmina do Alquimista. Ao realizar manutenção em munição, você pode fazer isso em até 10 unidades de munição por apenas 1 ponto de Vigor Alquímico."
          },
          {
            "name": "Canhão do Alquimista",
            "page": 12,
            "repeatable": true,
            "text": "Quando cria armas de cerco e munição de cerco com seus Círculos de Transmutação, elas causam o dobro do dano, possuem o dobro dos pontos de vida, têm a CA aumentada em uma quantidade igual à metade do seu modificador de Inteligência, arredondado para baixo, e você pode dobrar o peso máximo e o dano do Círculo de Transmutação utilizado.",
            "requires": [
              "Disparo do Alquimista"
            ]
          },
          {
            "name": "Montaria do Alquimista",
            "page": 12,
            "repeatable": true,
            "text": "Quando cria veículos com seus Círculos de Transmutação, eles possuem o dobro dos pontos de vida, têm a CA aumentada em uma quantidade igual à metade do seu modificador de Inteligência e você pode dobrar o peso máximo e o dano do Círculo de Transmutação utilizado. Para criar qualquer veículo que inclua armas, você precisa possuir Canhão do Alquimista.",
            "requires": [
              "Lâmina do Alquimista"
            ]
          }
        ]
      },
      {
        "id": "bio",
        "name": "Bioalquimia",
        "page": 13,
        "description": "A bioalquimia é a transmutação de substâncias biológicas, permitindo moldar formas de vida preexistentes.",
        "specializations": [
          {
            "name": "Alquimia de Cura",
            "page": 13,
            "repeatable": true,
            "text": "Usando um Círculo, você pode distribuir, entre quaisquer criaturas à sua escolha dentro do alcance do Círculo que não sejam constructos nem elementais, um total de pontos de vida igual à metade do peso máximo do Círculo. Além disso, seus Círculos podem transmutar um material biológico à sua escolha (como osso, carne, madeira ou matéria vegetal leve)."
          },
          {
            "name": "Alquimia de Quimera",
            "page": 13,
            "repeatable": true,
            "text": "Usando um Círculo Imenso, você pode fazer com que duas criaturas voluntárias ou inconscientes, a até 1,5 m uma da outra e dentro do alcance do Círculo, se fundam em uma quimera. Escolha uma criatura como alvo e a outra como material. Os valores de habilidade do alvo passam a ser iguais à média entre os valores dele e os do material (por exemplo, se o alvo possuía Força 2 e o material Força 20, a nova criatura teria Força 11), e o alvo adquire todas as características que o material teria no 1º nível.",
            "requires": [
              "Alquimia de Cura"
            ]
          },
          {
            "name": "Quimera Militar",
            "page": 13,
            "repeatable": true,
            "text": "Quando cria uma quimera usando Alquimia de Quimera, você pode fazer com que as características do material permaneçam adormecidas até serem despertadas. Em vez dos efeitos normais de ser uma quimera, quando o alvo fica amedrontado, entra em estado berserk, fica sedento de sangue ou entra em Fúria, ele adquire quaisquer valores de habilidade e características do material à escolha dele. O alvo também pode realizar um teste de resistência de Constituição CD 15 como uma ação bônus para entrar nesse estado voluntariamente.",
            "requires": [
              "Alquimia de Quimera"
            ]
          }
        ]
      },
      {
        "id": "anti",
        "name": "Antialquimia",
        "page": 14,
        "description": "A antialquimia interrompe o processo alquímico em sua primeira etapa: a desconstrução.",
        "specializations": [
          {
            "name": "Desconstrução Independente",
            "page": 14,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, você inicia o processo de transmutação, mas o interrompe na etapa de desconstrução, dilacerando o alvo do Círculo. Faça um ataque de Transmutação contra uma criatura dentro do alcance do Círculo. Se atingir, o alvo sofre dano de força como se tivesse sido atingido pelo peso máximo que o Círculo poderia manipular. Ao usar esta característica, você pode usar Constituição em vez de Inteligência para calcular o peso máximo de um Círculo."
          },
          {
            "name": "Destruição Verdadeira",
            "page": 14,
            "repeatable": true,
            "text": "Quando usa Desconstrução Independente e acerta a jogada de ataque, o ataque se torna automaticamente um acerto crítico, pois o alvo é desfeito em nível atômico.",
            "requires": [
              "Desconstrução Independente"
            ]
          },
          {
            "name": "Campo de Destruição",
            "page": 14,
            "repeatable": true,
            "text": "Você pode usar um Círculo Pequeno como uma reação sempre que sofrer dano que não seja psíquico para decompor o ataque. O dano sofrido é reduzido em uma quantidade igual ao Vigor Alquímico que você gastar além do custo base do Círculo. Se isso reduzir o dano a 0 e o ataque tiver sido corpo a corpo, você pode gastar novamente o custo base do Círculo para causar dano de força como se o atacante tivesse sido atingido pelo peso máximo que o Círculo poderia manipular.",
            "requires": [
              "Desconstrução Independente"
            ]
          },
          {
            "name": "Destruidor",
            "page": 14,
            "repeatable": true,
            "text": "Quando usa Campo de Destruição, você pode usar um Círculo de qualquer tamanho.",
            "requires": [
              "Campo de Destruição"
            ]
          }
        ]
      },
      {
        "id": "creation",
        "name": "Alquimia da Criação",
        "page": 15,
        "description": "A alquimia da criação é o mais próximo que a alquimia chegou da criação de vida: a ciência de mover o receptáculo da alma de um corpo para outro.",
        "specializations": [
          {
            "name": "Vínculo da Alma",
            "page": 15,
            "repeatable": true,
            "text": "Usando um Círculo Miúdo até 1 minuto após a morte de qualquer humanoide, você pode realizar uma transmutação para vincular a alma dele a uma armadura dentro do alcance do Círculo. Você também pode obrigar a criatura a realizar um teste de resistência de Inteligência. Em caso de falha, ela fica enfeitiçada por você, e você pode escolher que ela tenha acesso apenas a memórias fabricadas por você durante (nível de Alquimista)d6 horas. Durante essa transmutação, você sofre 5d10 de dano que não pode ser reduzido de nenhuma forma. Você pode escolher direcionar esse dano a um de seus membros caso ele seja suficiente para reduzir os pontos de vida do membro a 0.\n\nO constructo criado não precisa e não pode comer, respirar ou dormir; possui CA igual à CA da armadura à qual está vinculado; é afetado por quaisquer propriedades especiais que a armadura possuía; não pode vestir armadura adicional, exceto escudos; é imune a dano de veneno e vulnerável a dano de ácido; mas, em todos os outros aspectos, é ressuscitado como pela magia ressurreição. Ele recupera pontos de vida normalmente, mas não pode recuperá-los por meio de itens ou bioalquimia. Quando uma criatura usa um Círculo Médio ou maior para manipular o mesmo material de que o constructo é feito, ela pode fazer o constructo recuperar pontos de vida iguais aos pontos de vida que um objeto feito desse material teria. Se você gastar ao menos 1 ponto de Vigor Alquímico de uma Pedra Filosofal nesse Círculo, pode gastar Vigor Alquímico adicional da pedra para reduzir em igual quantidade o dano sofrido durante a transmutação."
          },
          {
            "name": "Transferência de Alma",
            "page": 15,
            "repeatable": true,
            "text": "Usando um Círculo Enorme enquanto toca o cadáver de um humanoide, você transfere sua alma para ele, curando todos os ferimentos do corpo e moldando-o levemente para se parecer com você. Seu corpo atual morre e você passa a controlar o novo corpo. Isso não concede novos traços raciais nem valores de habilidade, mas remove quaisquer efeitos que estejam afetando você, incluindo exaustão, e faz com que recupere seu máximo de pontos de vida. Até o fim do seu próximo descanso longo, seu máximo de pontos de vida é reduzido à metade enquanto você se adapta ao novo corpo. Depois de usar este Círculo, uma alma não pode habitar novamente o corpo que você ocupava anteriormente por nenhum meio.",
            "requires": [
              "Vínculo da Alma"
            ]
          },
          {
            "name": "Divisão da Alma",
            "page": 15,
            "repeatable": true,
            "text": "Quando usa Vínculo da Alma, em vez de vincular a alma de uma criatura morta à armadura, você pode vincular um fragmento da sua própria alma. Você e quaisquer constructos criados dessa forma recebem 1 nível de exaustão até que o fragmento seja desvinculado com uma Ação de Turno Completo; contudo, você não sofre dano pela transmutação, e o constructo é controlado diretamente por você.",
            "requires": [
              "Transferência de Alma"
            ]
          },
          {
            "name": "Guardião de Luz",
            "page": 15,
            "repeatable": true,
            "text": "Usando um Círculo Imenso, você pode criar um clone visual de uma criatura que tenha visto e que seja do mesmo tamanho que você. Esses clones são mecanicamente idênticos a você, exceto por possuírem 0 Vigor Alquímico, serem incapazes de recuperar Vigor Alquímico, serem elementais, serem controlados diretamente por você, não precisarem e não poderem comer, respirar ou dormir, e possuírem resistência a todo tipo de dano.",
            "requires": [
              "Divisão da Alma"
            ]
          }
        ]
      },
      {
        "id": "soul",
        "name": "Alquimia da Alma",
        "page": 16,
        "description": "A alquimia da alma é a elusiva arte proibida de extrair almas humanas para utilizar seu poder.",
        "improvisedBlocked": true,
        "specializations": [
          {
            "name": "Tornar-se uma Pedra Filosofal",
            "page": 16,
            "repeatable": true,
            "text": "Com uma ação, você pode manipular a energia da própria alma, recebendo 1 nível de exaustão e recuperando uma quantidade de Vigor Alquímico igual ao seu bônus de proficiência. Se possuir Alquimia Exaustiva, pode usar ambas as características ao mesmo tempo, recebendo apenas 1 nível de exaustão no total."
          },
          {
            "name": "Criar Pedra Filosofal",
            "page": 16,
            "repeatable": true,
            "text": "Usando um Círculo Imenso, você comprime a própria alma de uma criatura em uma pequena pedra vermelha. Quaisquer criaturas à sua escolha dentro do alcance do Círculo recebem 1 nível de exaustão. Se uma criatura morrer por exaustão adquirida dessa forma, sua alma passa a fazer parte de uma Pedra Filosofal, criando uma nova pedra ou sendo adicionada a uma existente, e a criatura não pode ser ressuscitada por nenhum meio além da magia desejo, que remove sua alma da pedra, ou por um efeito de ressurreição conjurado enquanto a pedra estiver em posse do conjurador, o que remove o limite de tempo desde a morte da criatura. Cada alma na pedra concede a ela uma quantidade de pontos de Vigor Alquímico igual ao ND ou nível da criatura, mínimo 1. Ao usar uma Pedra Filosofal, você pode escolher quais almas são consumidas.",
            "requires": [
              "Tornar-se uma Pedra Filosofal"
            ]
          },
          {
            "name": "Destruir Pedra Filosofal",
            "page": 16,
            "repeatable": true,
            "text": "Usando um Círculo de qualquer tamanho, você pode reduzir o Vigor Alquímico armazenado em uma Pedra Filosofal dentro do alcance do Círculo em uma quantidade igual ao custo do Círculo.",
            "requires": [
              "Criar Pedra Filosofal"
            ]
          },
          {
            "name": "Criar Estrela Sanguínea",
            "page": 16,
            "repeatable": true,
            "text": "Quando cria uma Pedra Filosofal, você pode dobrar o custo base do Círculo para criar, em vez disso, uma Estrela Sanguínea. Quando uma criatura que empunha uma Estrela Sanguínea em ao menos uma das mãos mata outra criatura, a pedra recebe uma quantidade de pontos de Vigor Alquímico igual ao ND ou nível da criatura morta, mínimo 1. Se uma criatura ingerir uma Estrela Sanguínea, a pedra recebe uma quantidade de pontos de Vigor Alquímico igual ao ND ou nível dessa criatura, mínimo 1, e a criatura recebe 1 nível de exaustão ao final de cada hora até que a pedra seja extraída; além disso, sua tendência se torna Mau.",
            "requires": [
              "Destruir Pedra Filosofal"
            ]
          }
        ]
      },
      {
        "id": "alkahestry",
        "name": "Alkahestria",
        "page": 17,
        "description": "A alkahestria é uma arte principalmente medicinal originária de Xing, que utiliza a ciência da alquimia de uma forma quase irreconhecível para os habitantes de Amestris.",
        "specializations": [
          {
            "name": "Alkahestria",
            "page": 17,
            "repeatable": true,
            "text": "Em vez de ser alimentada pela atividade tectônica, sua alquimia é alimentada por uma energia mística e universal conhecida como Pulso do Dragão. À vontade, você pode descobrir a localização de quaisquer criaturas vivas dentro de uma quantidade de metros igual a 18 vezes os pontos de Vigor Alquímico gastos neste efeito; se você conhecer uma criatura localizada por esta característica, saberá que se trata dela. Além disso, sempre que esta classe exigir que você use seu valor de Inteligência, use seu valor de Sabedoria no lugar."
          },
          {
            "name": "Círculo de Purificação",
            "page": 17,
            "repeatable": true,
            "text": "Com uma ação, você pode transformar qualquer quantidade de armas ou unidades de munição em sua posse em marcadores alkahéstricos, gastando 1 ponto de Vigor Alquímico por arma ou unidade até o fim do seu próximo descanso longo. Quando usa um Círculo de qualquer tamanho, você pode fazer com que o efeito ocorra em um dos seus marcadores alkahéstricos em vez de ocorrer no próprio Círculo.",
            "requires": [
              "Alkahestria"
            ]
          },
          {
            "name": "Portal de Transição",
            "page": 17,
            "repeatable": true,
            "text": "Usando um Círculo Pequeno ou maior, você e quaisquer criaturas que estejam tocando você podem se teleportar para um dos seus marcadores alkahéstricos. A quantidade de Vigor Alquímico que você deve gastar para esse Círculo é determinada pela tabela abaixo.",
            "requires": [
              "Círculo de Purificação"
            ],
            "table": {
              "columns": [
                "Tamanho",
                "Custo"
              ],
              "rows": [
                [
                  "Pequeno",
                  "24"
                ],
                [
                  "Médio",
                  "12"
                ],
                [
                  "Grande",
                  "6"
                ],
                [
                  "Enorme",
                  "4"
                ],
                [
                  "Imenso",
                  "2"
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  "foundryExport": {
    "supported": false,
    "reason": "O Alquimista usa Especializações Alquímicas modulares, repetíveis e com pré-requisitos. O contrato atual de classes/subclasses do Grimório Importer 0.13.0-RC1 não representa esse sistema sem perda mecânica."
  }
};

  const progressionData = {
  "id": "alchemist-fma-homebrew",
  "title": "O Alquimista",
  "sourcePage": 4,
  "sourceTitle": "D&D Wiki — Alchemist, FMA (5e Class)",
  "columns": [
    {
      "key": "level",
      "label": "Nível",
      "sticky": true
    },
    {
      "key": "proficiency",
      "label": "Prof.",
      "title": "Bônus de Proficiência"
    },
    {
      "key": "features",
      "label": "Características",
      "wide": true
    },
    {
      "key": "vigor",
      "label": "Vigor Alquímico"
    }
  ],
  "rows": [
    {
      "level": 1,
      "proficiency": "+2",
      "features": [
        "Círculos de Transmutação",
        "Especialização Alquímica"
      ],
      "vigor": "3 + Inteligência"
    },
    {
      "level": 2,
      "proficiency": "+2",
      "features": [
        "Tudo é Um"
      ],
      "vigor": "6 + Inteligência"
    },
    {
      "level": 3,
      "proficiency": "+2",
      "features": [
        "Alquimia de Combate",
        "Especialização Alquímica (2)"
      ],
      "vigor": "9 + Inteligência"
    },
    {
      "level": 4,
      "proficiency": "+2",
      "features": [
        "Incremento no Valor de Habilidade"
      ],
      "vigor": "12 + Inteligência"
    },
    {
      "level": 5,
      "proficiency": "+3",
      "features": [
        "Especialização Favorita",
        "Especialização Alquímica (3)"
      ],
      "vigor": "15 + Inteligência"
    },
    {
      "level": 6,
      "proficiency": "+3",
      "features": [
        "Recuperação Alquímica"
      ],
      "vigor": "18 + Inteligência"
    },
    {
      "level": 7,
      "proficiency": "+3",
      "features": [
        "Alquimia Improvisada"
      ],
      "vigor": "21 + Inteligência"
    },
    {
      "level": 8,
      "proficiency": "+3",
      "features": [
        "Incremento no Valor de Habilidade"
      ],
      "vigor": "24 + Inteligência"
    },
    {
      "level": 9,
      "proficiency": "+4",
      "features": [
        "Meditação Alquímica"
      ],
      "vigor": "27 + Inteligência"
    },
    {
      "level": 10,
      "proficiency": "+4",
      "features": [
        "Especialização Alquímica (4)"
      ],
      "vigor": "30 + Inteligência"
    },
    {
      "level": 11,
      "proficiency": "+4",
      "features": [
        "Conhecimento Avançado"
      ],
      "vigor": "33 + Inteligência"
    },
    {
      "level": 12,
      "proficiency": "+4",
      "features": [
        "Incremento no Valor de Habilidade"
      ],
      "vigor": "36 + Inteligência"
    },
    {
      "level": 13,
      "proficiency": "+5",
      "features": [
        "Um é Tudo"
      ],
      "vigor": "39 + Inteligência"
    },
    {
      "level": 14,
      "proficiency": "+5",
      "features": [
        "Especialização Alquímica (5)"
      ],
      "vigor": "42 + Inteligência"
    },
    {
      "level": 15,
      "proficiency": "+5",
      "features": [
        "Cão do Exército"
      ],
      "vigor": "45 + Inteligência"
    },
    {
      "level": 16,
      "proficiency": "+5",
      "features": [
        "Incremento no Valor de Habilidade"
      ],
      "vigor": "48 + Inteligência"
    },
    {
      "level": 17,
      "proficiency": "+6",
      "features": [
        "Mestre Alquimista"
      ],
      "vigor": "51 + Inteligência"
    },
    {
      "level": 18,
      "proficiency": "+6",
      "features": [
        "Cão do Exército (2)"
      ],
      "vigor": "54 + Inteligência"
    },
    {
      "level": 19,
      "proficiency": "+6",
      "features": [
        "Incremento no Valor de Habilidade"
      ],
      "vigor": "57 + Inteligência"
    },
    {
      "level": 20,
      "proficiency": "+6",
      "features": [
        "Filósofo",
        "Especialização Alquímica (6)"
      ],
      "vigor": "60 + Inteligência"
    }
  ]
};

  window.GRIMORIO_CLASSES = window.GRIMORIO_CLASSES || [];
  window.GRIMORIO_CLASS_PROGRESSIONS = window.GRIMORIO_CLASS_PROGRESSIONS || {};
  if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
  window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressionData;
})();
