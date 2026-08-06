'use strict';

/* Conteúdo homebrew original: Emissário Espiritual e Caminho do Santuário. */
(function () {
  const classData = {
  "id": "spiritual-emissary",
  "name": "Emissário Espiritual",
  "hitDie": "d8",
  "ability": "Sabedoria (principal) e Destreza",
  "saves": "Destreza, Sabedoria",
  "armor": "Roupas comuns",
  "weapons": "Armas simples, adagas, dardos e kunais",
  "tools": "Kit de Caligrafia",
  "skills": "Escolha duas: Acrobacia, Adestrar Animais, História, Intuição, Medicina, Percepção, Persuasão ou Religião",
  "sigilKey": "spiritual-emissary",
  "color": "#d86b5b",
  "desc": "Guiados pelos espíritos e pela astúcia da deusa Inari, os Emissários Espirituais atuam como pontes entre os planos. Seus selos canalizam poder divino para proteger, curar e manipular o destino daqueles ao seu redor.",
  "source": {
    "title": "Emissário Espiritual — Homebrew Original",
    "pages": "2–6",
    "chapter": "Classe e Caminho do Santuário"
  },
  "tablePage": 2,
  "overview": [
    {
      "title": "EMISSÁRIO ESPIRITUAL",
      "page": 2,
      "text": "Guiados pelos espíritos e pela astúcia da deusa Inari, os Emissários Espirituais atuam como pontes entre os planos. Seus selos canalizam poder divino para proteger, curar e manipular o destino daqueles ao seu redor."
    }
  ],
  "creation": [],
  "basics": {
    "title": "CARACTERÍSTICAS DE CLASSE",
    "page": 2,
    "text": "Como um Emissário Espiritual, você adquire as seguintes características de classe.\n\nPONTOS DE VIDA\n\nDado de Vida: 1d8 por nível de Emissário Espiritual\n\nPontos de Vida no 1º Nível: 8 + seu modificador de Constituição\n\nPontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de Emissário Espiritual após o 1º\n\nPROFICIÊNCIAS\n\nArmaduras: Roupas comuns\n\nArmas: Armas simples, adagas, dardos e kunais\n\nFerramentas: Kit de Caligrafia\n\nTestes de Resistência: Destreza e Sabedoria\n\nPerícias: Escolha duas entre Acrobacia, Adestrar Animais, História, Intuição, Medicina, Percepção, Persuasão e Religião\n\nEQUIPAMENTO\n\nVocê começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:\n\n• 20 kunais do Emissário.\n\n• (a) um pacote de explorador ou (b) um pacote de estudioso.\n\n• Roupas de Emissário, um kit de caligrafia e 10 ofudas em branco."
  },
  "features": [
    {
      "title": "DEFESA FLUIDA",
      "level": 1,
      "page": 3,
      "text": "No 1º nível, enquanto não estiver usando armadura, sua Classe de Armadura é igual a 10 + seu modificador de Destreza + seu modificador de Sabedoria."
    },
    {
      "title": "ENERGIA ESPIRITUAL",
      "level": 1,
      "page": 3,
      "text": "No 1º nível, você possui uma reserva de energia representada por Pontos de Selo igual a (2 × seu nível de Emissário Espiritual) + seu modificador de Sabedoria + 6. Você recupera todos os pontos após um descanso longo."
    },
    {
      "title": "SENDA DE TORII",
      "level": 1,
      "page": 3,
      "text": "No 1º nível, como uma ação bônus, você pode manifestar portais espirituais em uma área de 4,5 × 4,5 metros. Essa área aumenta para 7,5 × 7,5 metros no 3º nível e para 10,5 × 10,5 metros no 10º nível.\n\nEnquanto a Senda de Torii estiver ativa, como uma ação, você pode gastar 1 Ponto de Selo para curar um aliado dentro da área em uma quantidade igual ao seu Dado Curativo + seu modificador de Sabedoria. Em casos de emergência, você pode gastar 3 Pontos de Selo para curar o valor total do seu Dado Curativo + seu modificador de Sabedoria.\n\nA Senda de Torii dura 1 minuto ou até você ficar incapacitado e pode ser reposicionada usando uma ação bônus. No 3º nível, aliados dentro da área, ou que passem por ela, somam seu modificador de Sabedoria — a Bênção da Kitsune — a qualquer cura que receberem. Também no 3º nível, você pode sacrificar sua Senda de Torii para curar todos os aliados dentro dela."
    },
    {
      "title": "FECHAR PORTÕES",
      "level": 1,
      "page": 3,
      "text": "Uma vez por descanso curto, como uma ação bônus, você sacrifica sua Senda de Torii para curar todos os aliados dentro dela em uma quantidade igual ao seu Dado Curativo + seu modificador de Sabedoria. A Senda de Torii não pode ser invocada pelas 2 rodadas seguintes."
    },
    {
      "title": "OFUDAS DE CURA",
      "level": 2,
      "page": 3,
      "text": "No 2º nível, você pode lançar selos de papel que buscam aliados. Como uma ação, você gasta de 1 a 4 Pontos de Selo para curar um alvo a até 18 metros. Para cada ponto gasto, role uma vez seu Dado Curativo e some seu modificador de Sabedoria ao total."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 4,
      "page": 2,
      "text": "A tabela da classe concede Incremento de Habilidade neste nível. O PDF do homebrew não repete a regra completa; utilize a regra padrão de Incremento no Valor de Habilidade do D&D 5e 2014."
    },
    {
      "title": "GOLPES ESPIRITUAIS",
      "level": 5,
      "page": 3,
      "text": "A partir do 5º nível, sua conexão com os espíritos flui através de suas armas de arremesso. Você recebe os seguintes benefícios:\n\n• Ataque Extra: você pode atacar duas vezes utilizando kunais, em vez de uma, sempre que usar a ação de Ataque no seu turno.\n\n• Kunais Impregnadas: seus ataques com armas simples e kunais são considerados mágicos para ultrapassar resistência e imunidade a ataques não mágicos.\n\n• Crítico de Precisão: quando obtém um acerto crítico com uma kunai, adaga ou dardo, você pode gastar 1 Ponto de Selo para adicionar um dado extra de dano de arma ao total, equivalente a 1d6."
    },
    {
      "title": "PASSOS DAS SOMBRAS",
      "level": 7,
      "page": 3,
      "text": "No 7º nível, sua agilidade atinge um nível sobrenatural, permitindo que você evite perigos e se reposicione instantaneamente.\n\n• Evasão: quando você é alvo de um efeito que exige um teste de resistência de Destreza para sofrer apenas metade do dano, não sofre dano algum se passar no teste e sofre apenas metade do dano se falhar.\n\n• Passo Espiritual: como uma ação bônus, você pode gastar 1 Ponto de Selo para se teletransportar instantaneamente para um espaço vazio adjacente a um aliado que possa ver a até 12 metros."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 8,
      "page": 2,
      "text": "A tabela da classe concede Incremento de Habilidade neste nível. O PDF do homebrew não repete a regra completa; utilize a regra padrão de Incremento no Valor de Habilidade do D&D 5e 2014."
    },
    {
      "title": "OLHAR DO ESPÍRITO DA RAPOSA",
      "level": 10,
      "page": 3,
      "text": "No 10º nível, sua visão se sintoniza com o plano espiritual, permitindo que você enxergue o que está escondido aos olhos mortais.\n\n• Visão Espiritual: você pode gastar 2 Pontos de Selo para conjurar a magia Ver o Invisível sem componentes materiais. Enquanto a magia estiver ativa, você tem vantagem em testes de Sabedoria (Percepção) e Inteligência (Investigação) para detectar ilusões ou passagens secretas.\n\n• Comunhão de Santuário: durante um descanso curto próximo a um local de importância espiritual, como um templo, uma árvore antiga ou um pequeno altar que você possa montar, você pode entrar em transe para falar com os espíritos locais. Isso funciona como a magia Falar com os Mortos ou Adivinhação, mas voltado para o ambiente ao seu redor."
    },
    {
      "title": "SELOS DE RETRIBUIÇÃO",
      "level": 11,
      "page": 4,
      "text": "No 11º nível, sua ofensiva se torna mais punitiva e suas kunais passam a carregar a energia dos seus ofudas.\n\n• Dano Escalado: o dado de dano das suas kunais, adagas e dardos passa a ser 1d8 de dano mágico.\n\n• Marca do Selo: quando você atinge uma criatura com um ataque de arma, pode gastar 2 Pontos de Selo para marcar o alvo com um selo espiritual até o final do seu próximo turno. Enquanto estiver marcado, na próxima vez que um aliado atingir essa criatura, o selo detona, causando 2d8 de dano radiante extra e concedendo ao aliado atacante Pontos de Vida Temporários iguais ao seu modificador de Sabedoria."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 12,
      "page": 2,
      "text": "A tabela da classe concede Incremento de Habilidade neste nível. O PDF do homebrew não repete a regra completa; utilize a regra padrão de Incremento no Valor de Habilidade do D&D 5e 2014."
    },
    {
      "title": "CORPO DE PURIFICAÇÃO",
      "level": 14,
      "page": 4,
      "text": "No 14º nível, a energia sagrada canalizada pelos portais de Torii fortalece permanentemente sua fisiologia.\n\n• Pureza de Espírito: você se torna imune a doenças e venenos, incluindo dano de veneno e a condição Envenenado.\n\n• Proteção do Limiar: sempre que utilizar Passos das Sombras para se teletransportar até um aliado, você e esse aliado recebem os benefícios da ação Desvencilhar automaticamente até o início do seu próximo turno."
    },
    {
      "title": "CHAMADO DA GUARDIÃ",
      "level": 15,
      "page": 4,
      "text": "No 15º nível, sua conexão com o espírito da raposa é tão profunda que você pode trazê-la fisicamente para o campo de batalha. Como uma ação, você gasta 5 Pontos de Selo para invocar o Espírito da Kitsune em um espaço vazio a até 9 metros de você. Ela age na sua iniciativa e permanece por 1 hora, até ser reduzida a 0 pontos de vida ou até você dispensá-la.\n\n• Em Combate: a Kitsune é considerada um Espírito. Utilize as estatísticas de um Lobo Atroz, mas o dano dela é Radiante e ela pode atravessar criaturas e objetos como se fossem terreno difícil.\n\n• Sincronia: sempre que usar Passos das Sombras, você pode trocar de lugar com a Kitsune em vez de ir até um aliado, sem custo adicional de pontos.\n\n• Auxílio Divino: se a Kitsune estiver a até 1,5 metro de um inimigo, você e seus aliados têm vantagem nos ataques contra essa criatura."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 16,
      "page": 2,
      "text": "A tabela da classe concede Incremento de Habilidade neste nível. O PDF do homebrew não repete a regra completa; utilize a regra padrão de Incremento no Valor de Habilidade do D&D 5e 2014."
    },
    {
      "title": "LÂMINAS DO DESTINO ENTRELAÇADO",
      "level": 18,
      "page": 4,
      "text": "No 18º nível, suas kunais não apenas ferem o corpo, mas cortam o próprio fio do destino.\n\n• Ataque de Fluxo: quando usa a ação de Ataque, você pode gastar 3 Pontos de Selo para imbuir suas kunais com energia temporal. Seus ataques ignoram qualquer tipo de resistência a dano.\n\n• Vulnerabilidade Exposta: se atingir o mesmo alvo com dois ataques de kunai no mesmo turno, o alvo deve ser bem-sucedido em um teste de resistência de Constituição contra sua CD de classe, igual a 8 + seu bônus de proficiência + seu modificador de Sabedoria. Em caso de falha, ele recebe vulnerabilidade a todos os tipos de dano até receber um ataque, pois sua armadura espiritual foi estilhaçada."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 19,
      "page": 2,
      "text": "A tabela da classe concede Incremento de Habilidade neste nível. O PDF do homebrew não repete a regra completa; utilize a regra padrão de Incremento no Valor de Habilidade do D&D 5e 2014."
    },
    {
      "title": "AVATAR DO SANTUÁRIO ETERNO",
      "level": 20,
      "page": 4,
      "text": "No 20º nível, você se torna o próprio portal entre o mundo físico e o espiritual. Sempre que rolar iniciativa e não possuir nenhum Ponto de Selo, você recupera 4 pontos imediatamente. Além disso, desbloqueia a forma de Avatar do Santuário. Como uma ação bônus, você entra em um estado de iluminação que dura 1 minuto. Enquanto estiver nesse estado:\n\n• Presença Onipresente: você pode usar Passos das Sombras sem gastar Pontos de Selo e seu alcance aumenta para 24 metros.\n\n• Cura Transbordante: sempre que curar um aliado com um ofuda, pode escolher um segundo aliado a até 9 metros do primeiro para receber a mesma quantidade de cura, sem gasto extra.\n\n• Proteção dos Antepassados: você e todos os aliados dentro da Senda de Torii recebem os benefícios da magia Santuário. Se um aliado atacar e quebrar o efeito, recupera o benefício no início do próprio turno, desde que ainda esteja dentro dos portais.\n\n• Mestre das Eras: uma vez por turno, se falhar em um teste de resistência ou errar um ataque, você pode gastar 1 Ponto de Selo para refazer a jogada com vantagem, pois a deusa Inari sussurra o futuro em seu ouvido."
    }
  ],
  "references": [
    {
      "title": "O KIT DE CALIGRAFIA",
      "page": 2,
      "text": "Você o utiliza durante seus descansos longos para preparar os papéis que serão infundidos com sua energia."
    },
    {
      "title": "KIT DE CRIAÇÃO EXPRESSO DE OFUDAS",
      "page": 2,
      "text": "Enquanto estiver em um descanso curto, você pode rolar 1d4 para descobrir quantos ofudas consegue improvisar com esse kit."
    },
    {
      "title": "NOTA DE INTEGRAÇÃO DO CAMINHO",
      "page": 5,
      "text": "O Caminho do Santuário apresenta características a partir do 3º nível. A linha de 3º nível da tabela principal da classe está vazia no PDF; o Grimório preserva essa linha e disponibiliza a subclasse normalmente a partir do 3º nível."
    }
  ],
  "tables": [
    {
      "title": "A Kunai do Emissário",
      "page": 2,
      "description": "Diferente de uma adaga comum, a kunai desta classe é projetada para precisão e arremessos constantes.",
      "columns": [
        {
          "key": "name",
          "label": "Nome"
        },
        {
          "key": "damage",
          "label": "Dano"
        },
        {
          "key": "type",
          "label": "Tipo"
        },
        {
          "key": "properties",
          "label": "Propriedades"
        }
      ],
      "rows": [
        {
          "name": "Kunai",
          "damage": "1d6",
          "type": "Perfurante",
          "properties": "Acuidade, Leve, Arremesso"
        }
      ]
    },
    {
      "title": "Gasto de Energia Espiritual por Círculo de Magia",
      "page": 2,
      "description": "Custo em Pontos de Selo para os círculos de magia indicados pelo homebrew.",
      "columns": [
        {
          "key": "circle",
          "label": "Círculo"
        },
        {
          "key": "cost",
          "label": "Gasto de Energia Espiritual"
        }
      ],
      "rows": [
        {
          "circle": "1º",
          "cost": 2
        },
        {
          "circle": "2º",
          "cost": 3
        },
        {
          "circle": "3º",
          "cost": 5
        },
        {
          "circle": "4º",
          "cost": 6
        },
        {
          "circle": "5º",
          "cost": 7
        }
      ]
    }
  ],
  "subclasses": [
    "path-sanctuary"
  ]
};
  const subclassData = {
  "id": "path-sanctuary",
  "classId": "spiritual-emissary",
  "name": "Caminho do Santuário",
  "desc": "No 3º nível, você dedica sua vida a proteger os espíritos e limpar as máculas do mundo. Suas habilidades passam a focar em resiliência e remoção de efeitos negativos.",
  "sourcePage": 5,
  "source": {
    "title": "Emissário Espiritual — Homebrew Original",
    "pages": "5–6",
    "chapter": "Caminho do Santuário"
  },
  "features": [
    {
      "title": "OFUDA DA PROTEÇÃO",
      "level": 3,
      "page": 5,
      "text": "No 3º nível, você aprende a infundir seus selos com energia protetora. Como uma reação, quando um aliado que você possa ver a até 9 metros for atingido por um ataque, você pode gastar 1 Ponto de Selo para lançar um Ofuda Protetor. O aliado recebe +2 de bônus na CA contra aquele ataque e ganha Pontos de Vida Temporários iguais ao seu Dado Curativo + seu modificador de Sabedoria."
    },
    {
      "title": "PREPARAÇÃO DE OFUDAS",
      "level": 3,
      "page": 5,
      "text": "No 3º nível, você aprende a criar ofudas personalizados contendo efeitos distintos. O número de ofudas que pode preparar é igual ao seu nível de Emissário Espiritual + seu modificador de Sabedoria. Os ofudas podem ser preparados durante um descanso longo. Consulte a aba Tabelas para ver as magias disponíveis em cada nível."
    },
    {
      "title": "SENDA PURIFICADORA",
      "level": 6,
      "page": 5,
      "text": "No 6º nível, seus Portais de Torii passam a emanar uma aura de limpeza. Enquanto a Senda de Torii estiver ativa, você pode gastar uma ação e 1 Ponto de Selo para que aliados dentro da área dos portais tenham vantagem em testes de resistência contra as condições Envenenado, Amedrontado e Paralisado. Esse efeito permanece ativo até a Senda de Torii acabar ou ser sobreposto por outro efeito."
    },
    {
      "title": "PRESENÇA CALMANTE",
      "level": 9,
      "page": 5,
      "text": "No 9º nível, o santuário que você carrega em seu espírito acalma os aliados ao seu redor. Você e aliados a até 3 metros de você não podem ser amedrontados enquanto você estiver consciente."
    },
    {
      "title": "ORAÇÃO DO GRANDE TORII",
      "level": 13,
      "page": 5,
      "text": "No 13º nível, você pode gastar uma ação bônus e 4 Pontos de Selo para conjurar uma versão aprimorada da Senda de Torii. Além dos benefícios normais, os portais criam uma barreira de luz e inimigos tratam a área como terreno difícil.\n\nUma vez por rodada, quando um aliado for curado dentro da área, ele pode usar uma reação para realizar um ataque de arma ou se mover metade do próprio deslocamento sem provocar ataques de oportunidade. Efeitos anteriores aplicados à Senda de Torii são sobrepostos pela Oração do Grande Torii."
    },
    {
      "title": "DEIXE A KITSUNE GUIAR VOCÊ",
      "level": 17,
      "page": 6,
      "text": "No 17º nível, uma vez por descanso longo e como uma ação completa, você gasta 6 Pontos de Selo para invocar o espírito da Grande Raposa. Um rastro de luz azulada e portais de Torii majestosos surgem em uma linha de até 18 metros à sua frente, com 3 metros de largura. A manifestação dura 1 minuto. Enquanto a trilha estiver ativa, você e todos os aliados dentro da área, ou que comecem o turno nela, recebem os seguintes benefícios:\n\n• Aceleração Espiritual: o deslocamento de caminhada dos aliados é dobrado e eles não provocam ataques de oportunidade ao se moverem dentro da área.\n\n• Vigor da Raposa: além do bônus de cura da Senda de Torii, qualquer aliado que iniciar o turno na área recupera automaticamente Pontos de Vida iguais ao seu modificador de Sabedoria, com mínimo de 1, sem gastar recursos.\n\n• Foco Transcendente: uma vez por turno, quando um aliado dentro da área realizar a ação de Ataque, ele pode fazer um ataque adicional como parte da mesma ação.\n\n• Conjuração Veloz: se um aliado dentro da área conjurar uma magia com tempo de conjuração de 1 ação, ele pode usar uma ação bônus em vez disso, limitado a uma vez por batalha."
    }
  ],
  "tables": [
    {
      "title": "Ofudas Preparáveis",
      "page": 5,
      "description": "Magias que podem ser preparadas em ofudas, separadas pelo nível de Emissário Espiritual indicado no PDF.",
      "columns": [
        {
          "key": "level",
          "label": "Nível"
        },
        {
          "key": "spells",
          "label": "Magias"
        }
      ],
      "rows": [
        {
          "level": "Truques",
          "spells": "Estabilizar, Orientação, Taumaturgia, Luz e Resistência"
        },
        {
          "level": "3º",
          "spells": "Bênção, Criar ou Destruir Água, Detectar o Bem e Mal, Detectar Magia, Escudo da Fé, Detectar Veneno e Doença, Proteção contra o Bem e Mal, Purificar Alimentos, Santuário, Acalmar Emoções, Auxílio, Encontrar Armadilhas, Localizar Objeto, Proteção contra Veneno, Vínculo Protetor, Zona da Verdade, Silêncio e Restauração Menor"
        },
        {
          "level": "5º",
          "spells": "Andar na Água, Criar Alimentos, Clarividência, Círculo Mágico, Enviar Mensagem, Dissipar Magia, Proteção contra Energia, Idiomas, Luz do Dia, Remover Maldição e Sinal de Esperança"
        },
        {
          "level": "7º",
          "spells": "Adivinhação, Guardião da Fé, Controlar a Água, Proteção contra a Morte e Movimentação Livre"
        },
        {
          "level": "9º",
          "spells": "Comunhão, Conhecimento Lendário, Consagrar, Dissipar o Bem e Mal, Restauração Maior e Vidência"
        }
      ]
    }
  ]
};
  const progressionData = {
  "id": "spiritual-emissary",
  "title": "O Emissário Espiritual",
  "sourcePage": 2,
  "sourceTitle": "Emissário Espiritual — Homebrew Original",
  "columns": [
    {
      "key": "level",
      "label": "Nível",
      "sticky": true
    },
    {
      "key": "proficiency",
      "label": "Bônus de Proficiência",
      "shortLabel": "Prof."
    },
    {
      "key": "features",
      "label": "Características",
      "wide": true
    },
    {
      "key": "healingDie",
      "label": "Dado Curativo"
    }
  ],
  "rows": [
    {
      "level": 1,
      "proficiency": "+2",
      "features": [
        "Energia Espiritual",
        "Senda de Torii",
        "Defesa Fluida"
      ],
      "healingDie": "1d4"
    },
    {
      "level": 2,
      "proficiency": "+2",
      "features": [
        "Ofudas de Cura"
      ],
      "healingDie": "1d4"
    },
    {
      "level": 3,
      "proficiency": "+2",
      "features": [],
      "healingDie": "1d4"
    },
    {
      "level": 4,
      "proficiency": "+2",
      "features": [
        "Incremento de Habilidade"
      ],
      "healingDie": "1d4"
    },
    {
      "level": 5,
      "proficiency": "+3",
      "features": [
        "Golpes Espirituais"
      ],
      "healingDie": "1d6"
    },
    {
      "level": 6,
      "proficiency": "+3",
      "features": [],
      "healingDie": "1d6"
    },
    {
      "level": 7,
      "proficiency": "+3",
      "features": [
        "Passos das Sombras"
      ],
      "healingDie": "1d6"
    },
    {
      "level": 8,
      "proficiency": "+3",
      "features": [
        "Incremento de Habilidade"
      ],
      "healingDie": "1d6"
    },
    {
      "level": 9,
      "proficiency": "+4",
      "features": [],
      "healingDie": "1d8"
    },
    {
      "level": 10,
      "proficiency": "+4",
      "features": [
        "Olhar do Espírito Raposa"
      ],
      "healingDie": "1d8"
    },
    {
      "level": 11,
      "proficiency": "+4",
      "features": [
        "Selos de Retribuição"
      ],
      "healingDie": "1d8"
    },
    {
      "level": 12,
      "proficiency": "+4",
      "features": [
        "Incremento de Habilidade"
      ],
      "healingDie": "1d8"
    },
    {
      "level": 13,
      "proficiency": "+5",
      "features": [],
      "healingDie": "1d10"
    },
    {
      "level": 14,
      "proficiency": "+5",
      "features": [
        "Corpo de Purificação"
      ],
      "healingDie": "1d10"
    },
    {
      "level": 15,
      "proficiency": "+5",
      "features": [
        "Chamado da Guardiã"
      ],
      "healingDie": "1d10"
    },
    {
      "level": 16,
      "proficiency": "+5",
      "features": [
        "Incremento de Habilidade"
      ],
      "healingDie": "1d10"
    },
    {
      "level": 17,
      "proficiency": "+6",
      "features": [],
      "healingDie": "1d12"
    },
    {
      "level": 18,
      "proficiency": "+6",
      "features": [
        "Lâminas do Destino Entrelaçado"
      ],
      "healingDie": "1d12"
    },
    {
      "level": 19,
      "proficiency": "+6",
      "features": [
        "Incremento de Habilidade"
      ],
      "healingDie": "1d12"
    },
    {
      "level": 20,
      "proficiency": "+6",
      "features": [
        "Avatar do Santuário Eterno"
      ],
      "healingDie": "1d12"
    }
  ]
};

  const classSourceTitle = classData.source.title;
  [...(classData.overview || []), ...(classData.creation || []), ...(classData.features || []), ...(classData.references || []), ...(classData.tables || [])].forEach(item => { item.sourceTitle = classSourceTitle; });
  const subclassSourceTitle = subclassData.source.title;
  [...(subclassData.features || []), ...(subclassData.tables || [])].forEach(item => { item.sourceTitle = subclassSourceTitle; });

  if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
  if (!window.GRIMORIO_SUBCLASSES.some(item => item.id === subclassData.id)) window.GRIMORIO_SUBCLASSES.push(subclassData);
  window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressionData;
})();
