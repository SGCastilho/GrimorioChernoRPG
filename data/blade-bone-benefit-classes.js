'use strict';

(function () {
  const classes = [
  {
    "id": "blood-minister-somnus",
    "name": "Ministro de Sangue",
    "originalName": "Blood Minister",
    "hitDie": "2d4",
    "ability": "Constituição",
    "saves": "Força, Constituição",
    "armor": "Armaduras leves e médias",
    "weapons": "Armas simples, armas marciais e armas de fogo simples",
    "tools": "Nenhuma",
    "skills": "Escolha três: Arcanismo, Intuição, Intimidação, Investigação, Medicina, Furtividade ou Sobrevivência",
    "sigilKey": "blood-minister",
    "color": "#9d465b",
    "desc": "Um caçador de monstros que transforma o próprio sangue — saturado de energia sobrenatural — em combustível para aprimorar o corpo e enfrentar as criaturas da noite sem depender de magia divina.",
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "68–78",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "tablePage": 69,
    "overview": [
      {
        "title": "O MINISTRO DE SANGUE",
        "page": 68,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Enquanto clérigos recebem deveres sagrados para proteger os reinos mortais de ínferos e mortos-vivos, Ministros de Sangue assumem por conta própria a tarefa de enfrentar os monstros da noite. O sangue das criaturas — e até os corpos dos mortos-vivos — absorve uma quantidade ambiente de radiação mágica. Um Ministro de Sangue aprende a liberar essa energia em explosões sobrenaturais e a transformar o próprio sangue em uma arma para ampliar suas capacidades físicas."
      },
      {
        "title": "PRÁTICAS DESACREDITADAS",
        "page": 68,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Extrair poder do sangue pode ter raízes sobrenaturais ou alquímicas, mas para observadores quase sempre parece magia de sangue. Mesmo quando o Ministro de Sangue age com boas intenções, seu ofício tende a ser visto como vergonhoso ou assustador; a classe precisa conviver com essa percepção e com o fato de que não poderá explicar a cada testemunha os princípios arcanos ou científicos por trás de suas práticas."
      },
      {
        "title": "ORDENS SOMBRIAS",
        "page": 68,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "A ministração sanguínea é praticada com frequência por cultos, seitas sombrias e estudiosos de curiosidade mórbida sobre corpos vivos. Ministros de Sangue podem integrar — ou até liderar — organizações pouco respeitáveis. Ordens inteiras costumam ter apenas alguns praticantes capazes de realizar verdadeira ministração sanguínea, cercados por seguidores ou aprendizes, e podem se disfarçar como grupos de caçadores de monstros, médicos, sacerdotes ou outras figuras de aparência confiável."
      }
    ],
    "creation": [
      {
        "title": "CRIANDO UM MINISTRO DE SANGUE",
        "page": 68,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "O conceito mais básico de um Ministro de Sangue é o de um caçador de monstros: alguém que deu um passo para dentro do mundo das monstruosidades para poder enfrentá-las em condições semelhantes. Ao criar o personagem, considere esse tema central — ou outro que explique como e por que ele depende do próprio sangue para praticar seu ofício sombrio. Ministros de Sangue costumam combater a curta ou média distância, usando armas pesadas ou armas de fogo. Pergunte o que vale a pena a ponto de transformar a própria força vital em recurso, se existe uma criatura ou inimigo específico contra quem busca vingança, onde aprendeu esse ofício e qual é sua relação atual com essa fonte de conhecimento."
      },
      {
        "title": "CONSTRUÇÃO RÁPIDA",
        "page": 68,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Para criar rapidamente um Ministro de Sangue, coloque Constituição como seu atributo mais alto, seguida por Força ou Destreza conforme as armas e armaduras que pretende usar. A fonte sugere pensar no equipamento de forma semelhante a um Guerreiro ou Patrulheiro. Depois escolha o antecedente Acólito, reinterpretando-o como ligação com um culto sombrio ou organização de que fez parte, em vez de um templo ou religião respeitável."
      }
    ],
    "basics": {
      "title": "CARACTERÍSTICAS DE CLASSE",
      "page": 69,
      "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
      "text": "PONTOS DE VIDA\n\nDado de Vida: 2d4 por nível de Ministro de Sangue.\n\nPontos de Vida no 1º nível: 8 + seu modificador de Constituição.\n\nPontos de Vida em níveis superiores: 2d4 (ou 5) + seu modificador de Constituição por nível de Ministro de Sangue após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras: Armaduras leves e médias.\n\nArmas: Armas simples, armas marciais e armas de fogo simples.\n\nFerramentas: Nenhuma.\n\nSalvaguardas: Força e Constituição.\n\nPerícias: Escolha três entre Arcanismo, Intuição, Intimidação, Investigação, Medicina, Furtividade e Sobrevivência.\n\nEQUIPAMENTO\n\nVocê começa, além do equipamento de antecedente, com: (a) couro acolchoado e duas armas simples, ou (b) cota de escamas; (a) um revólver leve, 24 munições leves e uma espada curta, ou (b) duas armas marciais corpo a corpo; (a) quatro redes, ou (b) uma funda com 30 munições; e (a) pacote de assaltante, ou (b) pacote de explorador. Alternativamente, começa com 4d6 × 10 (150) po. Armas de fogo adquiridas durante a criação custam 40 po a menos cada.\n\nMULTICLASSE\n\nPara entrar nesta classe por multiclasse, o personagem precisa de Constituição 14 e Força ou Destreza 12. Ao fazê-lo, recebe proficiência em uma entre Investigação, Medicina ou Furtividade."
    },
    "features": [
      {
        "title": "HEMOGENERATIVO",
        "level": 1,
        "page": 69,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "O uso constante do próprio sangue para aprimorar seu desempenho físico lhe concede regeneração natural. Quando completa um Descanso Curto e não gasta nenhum Dado de Vida, recupera pontos de vida iguais a três vezes seu nível de Ministro de Sangue."
      },
      {
        "title": "MINISTRAÇÃO SANGUÍNEA",
        "level": 1,
        "page": 69,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Uma vez por turno, quando fizer uma jogada de ataque, teste de atributo ou salvaguarda, pode gastar um de seus Dados de Vida, rolá-lo sem adicionar Constituição e somar o resultado à rolagem. Até o fim daquele turno, esse mesmo bônus se aplica ao tipo de rolagem que ativou a característica. Se Ministração Sanguínea for usada numa jogada de ataque, o mesmo bônus também é adicionado à jogada de dano resultante."
      },
      {
        "title": "ESTILO DE LUTA",
        "level": 2,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Escolha um Estilo de Luta entre Combate às Cegas, Duelo, Especialista em Armas de Fogo, Proficiência, Matador, Técnica Superior ou Combate com Duas Armas."
      },
      {
        "title": "DESPERTAR DO SANGUE",
        "level": 3,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "O verdadeiro poder de seu sangue desperta por treinamento especializado, orientação ou aptidão física. Escolha uma Seita Genética que represente seus poderes e seu estilo de combate. Você recebe características dessa Seita nos níveis 3, 7, 11 e 15 de Ministro de Sangue."
      },
      {
        "title": "AUMENTO NO VALOR DE ATRIBUTO",
        "level": 4,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Nos níveis 4, 8, 12, 16 e 19, você pode aumentar um atributo em 2 ou dois atributos em 1. Nenhum deles pode ultrapassar 20 por esta característica, salvo se outra regra disser o contrário."
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 5,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Quando realiza a ação Atacar, pode atacar duas vezes em vez de uma. No 14º nível de Ministro de Sangue, pode atacar três vezes em vez de uma."
      },
      {
        "title": "RESSONÂNCIA VIL",
        "level": 6,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Quando usar Ministração Sanguínea para adicionar um bônus a ataques contra uma criatura e acertá-la, pode produzir sobre ela os efeitos de marca do caçador. Dessa forma, não exige concentração, não conta como efeito mágico e não permite trocar o alvo. Pode usar esta característica um número de vezes por Descanso Curto igual ao seu bônus de proficiência."
      },
      {
        "title": "CARACTERÍSTICA DE SEITA GENÉTICA (7º NÍVEL)",
        "level": 7,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Você recebe a característica de 7º nível de sua Seita Genética, conforme determinado por Despertar do Sangue."
      },
      {
        "title": "LINHA DE VISÃO SOMBRIA",
        "level": 9,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Você recebe visão no escuro a 18 m, ou aumenta sua visão no escuro existente em 18 m, usando o maior resultado. Se possuir visão diabólica, ela aumenta para o mesmo alcance."
      },
      {
        "title": "MINISTRAÇÃO EFICIENTE",
        "level": 10,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Ao gastar sangue para produzir Ministração Sanguínea, escolha um dos efeitos abaixo até o fim daquele turno: seu deslocamento aumenta em 4,5 m; você tem vantagem na rolagem que ativou a característica; ou recebe PV temporários iguais a duas vezes o resultado do Dado de Vida rolado."
      },
      {
        "title": "HEMO-QUANTIDADE",
        "level": 10,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Ao usar Ministração Sanguínea, depois de ver o resultado do primeiro Dado de Vida e antes de o sucesso ou falha ser declarado, pode gastar um segundo Dado de Vida, rolá-lo e aumentar o bônus pelo novo resultado."
      },
      {
        "title": "CARACTERÍSTICA DE SEITA GENÉTICA (11º NÍVEL)",
        "level": 11,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Você recebe a característica de 11º nível de sua Seita Genética, conforme determinado por Despertar do Sangue."
      },
      {
        "title": "REPOSIÇÃO SANGUÍNEA",
        "level": 13,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Quando completa um Descanso Curto sem gastar Dados de Vida, recupera metade de seus Dados de Vida de Ministro de Sangue, arredondado para cima."
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 14,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Seu Ataque Extra melhora: quando realiza a ação Atacar, pode atacar três vezes em vez de uma."
      },
      {
        "title": "CARACTERÍSTICA DE SEITA GENÉTICA (15º NÍVEL)",
        "level": 15,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Você recebe a característica de 15º nível de sua Seita Genética, conforme determinado por Despertar do Sangue."
      },
      {
        "title": "MORTO QUE CAMINHA",
        "level": 17,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Enquanto estiver a 0 PV, quando faria uma salvaguarda contra a morte ou falharia automaticamente em uma devido a dano, pode gastar um Dado de Vida para negar a falha, se houver; isso não a transforma em sucesso. Até a próxima vez que faria uma salvaguarda contra a morte dessa maneira, você não fica inconsciente nem sofre as penalidades de estar morrendo e pode agir normalmente a 0 PV."
      },
      {
        "title": "HEMO-QUALIDADE",
        "level": 20,
        "page": 70,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "A cada turno, no lugar do primeiro Dado de Vida que gastaria por Ministração Sanguínea, pode rolar 1d6 como se tivesse gasto um Dado de Vida desse tamanho sem realmente consumi-lo. Dados de Vida adicionais gastos por Ministração Sanguínea no mesmo turno são consumidos normalmente."
      }
    ],
    "references": [
      {
        "title": "SEITAS GENÉTICAS",
        "kind": "subclassIntro",
        "page": 71,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Uma Seita Genética representa a natureza do poder do Ministro de Sangue e como ele se manifesta quando invocado através de seu sangue. Ela pode representar uma mutação, um estilo de ministração sanguínea, hábitos de ofício ou outra expressão de como o personagem usa corpo e sangue para lutar. A fonte apresenta oito Seitas Genéticas."
      }
    ]
  }
];
  const progressions = {
  "blood-minister-somnus": {
    "id": "blood-minister-somnus",
    "title": "O Ministro de Sangue",
    "columns": [
      {
        "key": "level",
        "label": "Nível"
      },
      {
        "key": "proficiency",
        "label": "Proficiência"
      },
      {
        "key": "features",
        "label": "Características"
      }
    ],
    "rows": [
      {
        "level": 1,
        "proficiency": "+2",
        "features": [
          "Hemogenerativo",
          "Ministração Sanguínea"
        ]
      },
      {
        "level": 2,
        "proficiency": "+2",
        "features": [
          "Estilo de Luta"
        ]
      },
      {
        "level": 3,
        "proficiency": "+2",
        "features": [
          "Despertar do Sangue"
        ]
      },
      {
        "level": 4,
        "proficiency": "+2",
        "features": [
          "Aumento no Valor de Atributo"
        ]
      },
      {
        "level": 5,
        "proficiency": "+3",
        "features": [
          "Ataque Extra"
        ]
      },
      {
        "level": 6,
        "proficiency": "+3",
        "features": [
          "Ressonância Vil"
        ]
      },
      {
        "level": 7,
        "proficiency": "+3",
        "features": [
          "Característica de Seita Genética (7º Nível)"
        ]
      },
      {
        "level": 8,
        "proficiency": "+3",
        "features": [
          "Aumento no Valor de Atributo"
        ]
      },
      {
        "level": 9,
        "proficiency": "+4",
        "features": [
          "Linha de Visão Sombria"
        ]
      },
      {
        "level": 10,
        "proficiency": "+4",
        "features": [
          "Ministração Eficiente",
          "Hemo-Quantidade"
        ]
      },
      {
        "level": 11,
        "proficiency": "+4",
        "features": [
          "Característica de Seita Genética (11º Nível)"
        ]
      },
      {
        "level": 12,
        "proficiency": "+4",
        "features": [
          "Aumento no Valor de Atributo"
        ]
      },
      {
        "level": 13,
        "proficiency": "+5",
        "features": [
          "Reposição Sanguínea"
        ]
      },
      {
        "level": 14,
        "proficiency": "+5",
        "features": [
          "Aprimoramento de Ataque Extra"
        ]
      },
      {
        "level": 15,
        "proficiency": "+5",
        "features": [
          "Característica de Seita Genética (15º Nível)"
        ]
      },
      {
        "level": 16,
        "proficiency": "+5",
        "features": [
          "Aumento no Valor de Atributo"
        ]
      },
      {
        "level": 17,
        "proficiency": "+6",
        "features": [
          "Morto que Caminha"
        ]
      },
      {
        "level": 18,
        "proficiency": "+6",
        "features": []
      },
      {
        "level": 19,
        "proficiency": "+6",
        "features": [
          "Aumento no Valor de Atributo"
        ]
      },
      {
        "level": 20,
        "proficiency": "+6",
        "features": [
          "Hemo-Qualidade"
        ]
      }
    ]
  }
};

  if (!window.GRIMORIO_CLASSES) window.GRIMORIO_CLASSES = [];
  if (!window.GRIMORIO_CLASS_PROGRESSIONS) window.GRIMORIO_CLASS_PROGRESSIONS = {};
  for (const classData of classes) {
    if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
    window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressions[classData.id];
  }
})();
