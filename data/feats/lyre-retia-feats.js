'use strict';

// Capítulo VII — Opções de Personagem: Feats of Somnus Domina, Lyre's Guide to Retia — Land of Industry.
// Tradução PT-BR baseada diretamente na edição fornecida ao projeto (páginas impressas 331–335).
// IDs preservam os nomes ingleses canônicos para permanecerem estáveis mesmo se a localização for refinada.
(function registerLyreRetiaFeats(registry) {
  if (!registry?.registerFeatCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a talentos precisa ser carregado antes de lyre-retia-feats.js.');

  const feats = [
  {
    "id": "lyre-arcane-specialist",
    "name": "Especialista Arcano",
    "originalName": "Arcane Specialist",
    "aliases": [
      "Arcane Specialist"
    ],
    "sourcePage": 331,
    "category": "Geral",
    "description": "Você pesquisa escolas específicas de magia, aprendendo sobre grupos mágicos esotéricos e acrescentando-os ao seu repertório. Você recebe os seguintes benefícios:\n\n• O valor da sua habilidade de conjuração aumenta em 1. Se você possuir mais de uma habilidade de conjuração, deve escolher uma delas.\n• Escolha um grupo de magias da seção de magias deste livro. Você aprende uma magia dessa lista para a qual possua espaços de magia, e essa magia não conta no seu número de magias conhecidas. Essa magia passa a ser considerada pertencente à lista de magias correspondente à habilidade de conjuração escolhida para este talento e, ao escolher ou aprender novas magias, você pode tratar as magias daquele grupo como pertencentes à lista de magias da sua classe.\n• Você pode escolher este talento diversas vezes, mas não pode usá-lo para adicionar o mesmo grupo de magias à lista da mesma classe mais de uma vez.",
    "prerequisite": "Capacidade de conjurar pelo menos uma magia de 1º nível usando espaços de magia",
    "originalPrerequisite": "the ability to cast at least 1st-level spells using spell slots",
    "prerequisites": [
      {
        "type": "spellcasting",
        "minimumSpellLevel": 1,
        "requiresSpellSlots": true,
        "label": "Capacidade de conjurar pelo menos uma magia de 1º nível usando espaços de magia"
      }
    ],
    "repeatable": true,
    "choices": [
      {
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração que recebe +1",
        "count": 1,
        "options": [
          "Uma habilidade de conjuração que você possua"
        ]
      },
      {
        "id": "spell-group",
        "label": "Grupo de magias deste livro",
        "count": 1,
        "options": [
          "Qualquer grupo de magias da seção de magias de Lyre"
        ]
      },
      {
        "id": "learned-spell",
        "label": "Magia aprendida do grupo escolhido",
        "count": 1,
        "options": [
          "Uma magia do grupo escolhido para a qual você possua espaços de magia"
        ]
      }
    ]
  },
  {
    "id": "lyre-berserker",
    "name": "Berserker",
    "originalName": "Berserker",
    "aliases": [
      "Berserker"
    ],
    "sourcePage": 331,
    "category": "Geral",
    "description": "Você consegue investir contra aqueles que o feriram nos instantes que antecedem seu ataque. Você recebe os seguintes benefícios:\n\n• Seu valor de Força ou Destreza aumenta em 1.\n• Se uma criatura tiver atingido você desde o fim do seu último turno, seu próximo ataque com arma contra ela tem vantagem.\n• Quando um ataque reduzir você a 0 pontos de vida, você pode usar sua reação para realizar um único ataque com arma contra o atacante, desde que ele esteja dentro do alcance e o ataque não tenha matado você instantaneamente. Esse ataque ocorre antes de você receber a condição Morrendo.",
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Destreza"
        ]
      }
    ]
  },
  {
    "id": "lyre-celestial-allowance",
    "name": "Concessão Celestial",
    "originalName": "Celestial Allowance",
    "aliases": [
      "Celestial Allowance"
    ],
    "sourcePage": 331,
    "category": "Geral",
    "description": "Suas armas são imbuídas de poder divino, permitindo que você golpeie corruptores e mortos-vivos com maior tenacidade. Você recebe os seguintes benefícios:\n\n• Seu valor de Sabedoria ou Carisma aumenta em 1.\n• Quando você atinge uma criatura morta-viva com um ataque com arma, ela sofre dano adicional igual ao seu modificador de Carisma.\n• Quando você realiza um ataque com arma contra uma criatura morta-viva ou um corruptor e erra, pode rolar um d20 e substituir por ele o resultado do d20 da jogada de ataque, possivelmente alterando o resultado. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
    "prerequisite": "Clérigo, Alma Favorecida, Paladino ou Cavaleiro das Pétalas",
    "originalPrerequisite": "Cleric, Favored Soul, Paladin or Petal Knight",
    "prerequisites": [
      {
        "type": "class",
        "values": [
          "cleric",
          "favored-soul",
          "paladin",
          "petal-knight"
        ],
        "mode": "any",
        "label": "Clérigo, Alma Favorecida, Paladino ou Cavaleiro das Pétalas"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "lyre-complete-armor-master",
    "name": "Mestre Pleno de Armaduras",
    "originalName": "Complete Armor Master",
    "aliases": [
      "Complete Armor Master"
    ],
    "sourcePage": 331,
    "category": "Geral",
    "description": "Você alcança domínio total no uso das armaduras para as quais treinou, recebendo os seguintes benefícios:\n\n• Seu deslocamento de caminhada aumenta em 3 metros enquanto você não estiver usando armadura.\n• Você pode usar sua ação bônus para assumir uma postura defensiva até o início do seu próximo turno. Enquanto estiver nessa postura, a próxima ocorrência de dano que você sofrer é reduzida à metade; então o efeito termina. Depois disso, você pode usar sua reação para retornar novamente a essa postura defensiva.\n\nSe você possuir o talento Mestre de Armadura Leve, também recebe os seguintes benefícios:\n\n• O deslocamento adicional recebido por este talento continua sendo aplicado enquanto você usa armadura leve.\n• Você pode realizar a ação Disparada como uma ação bônus enquanto não estiver usando armadura ou estiver usando apenas armadura leve.\n\nSe você possuir o talento Mestre de Armadura Média, também recebe os seguintes benefícios:\n\n• O deslocamento adicional recebido por este talento continua sendo aplicado enquanto você usa armadura média.\n• Enquanto usa armadura média, você pode adicionar seu modificador completo de Destreza à sua Classe de Armadura, em vez de 2 ou 3.\n\nSe você possuir o talento Mestre de Armadura Pesada, também recebe os seguintes benefícios:\n\n• O deslocamento adicional recebido por este talento é reduzido apenas para 1,5 metro enquanto você usa armadura pesada.\n• Quando uma criatura que você possa ver atinge você com um ataque com arma, você pode usar sua reação para reduzir a 0 todo o dano perfurante, cortante e contundente desse ataque.\n• Armaduras não impõem desvantagem aos seus testes de Furtividade.",
    "prerequisite": "Qualquer um dos talentos Mestre de Armadura Leve, Mestre de Armadura Média ou Mestre de Armadura Pesada",
    "originalPrerequisite": "any of the Light Armor Master, Medium Armor Master, or Heavy Armor Master feats",
    "prerequisites": [
      {
        "type": "feat",
        "values": [
          "lyre-light-armor-master",
          "medium-armor-master",
          "heavy-armor-master"
        ],
        "mode": "any",
        "label": "Mestre de Armadura Leve, Mestre de Armadura Média ou Mestre de Armadura Pesada"
      }
    ]
  },
  {
    "id": "lyre-critical-flourish",
    "name": "Floreio Crítico",
    "originalName": "Critical Flourish",
    "aliases": [
      "Critical Flourish"
    ],
    "sourcePage": 331,
    "category": "Geral",
    "description": "Quando você golpeia uma criatura e obtém um acerto crítico, consegue aproveitar a oportunidade para causar ainda mais dano.\n\n• Seu valor de Força, Destreza ou Constituição aumenta em 1.\n• Uma vez por turno, quando você obtém um acerto crítico em uma jogada de ataque — ou obtém resultado 20 no d20 em uma tentativa de agarrar ou empurrar —, pode realizar um ataque com arma ou uma tentativa de agarrar/empurrar contra a mesma criatura, desde que você não esteja incapacitado e ela esteja dentro do alcance da sua arma. Esse ataque adicional não pode obter um acerto crítico, mesmo com resultado 20. Se o resultado do d20 desse ataque, empurrão ou agarrão adicional for menor que 15, trate o resultado do d20 como 15.",
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Destreza",
          "Constituição"
        ]
      }
    ]
  },
  {
    "id": "lyre-damning-rebuke",
    "name": "Repreensão Condenatória",
    "originalName": "Damning Rebuke",
    "aliases": [
      "Damning Rebuke"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Guiada pelo poder divino, sua capacidade de expulsar os mortos-vivos também libera energia radiante que queima a carne. Você recebe os seguintes benefícios:\n\n• Quando usa Canalizar Divindade para ativar Expulsar Mortos-vivos, todas as criaturas mortas-vivas que falharem no teste de resistência contra esse efeito sofrem dano radiante igual a 1d4 multiplicado pelo seu bônus de proficiência. As criaturas que obtiverem sucesso no teste sofrem metade desse dano.\n• Quando você atinge com um ataque com arma uma criatura que esteja atualmente Expulsa por você, ela sofre dano radiante adicional igual à soma dos seus níveis de Clérigo, Paladino e Cavaleiro das Pétalas.",
    "prerequisite": "Característica Expulsar Mortos-vivos (Canalizar Divindade)",
    "originalPrerequisite": "Turn Undead (Channel Divinity) feature",
    "prerequisites": [
      {
        "type": "feature",
        "value": "turn-undead",
        "label": "Expulsar Mortos-vivos (Canalizar Divindade)"
      }
    ]
  },
  {
    "id": "lyre-death-stroke",
    "name": "Golpe Mortal",
    "originalName": "Death Stroke",
    "aliases": [
      "Death Stroke"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Quando surge uma oportunidade de causar dano maior, você a aproveita — adversários despreparados ficam devastados por sua mão.\n\n• Seu valor de Força ou Destreza aumenta em 1.\n• Se você atingir com um ataque com arma uma criatura que esteja impedida ou incapacitada, esse ataque causa automaticamente um dado adicional de dano da arma. Você também recebe esse bônus quando obtém um acerto crítico contra um alvo; esse dado adicional de dano não é multiplicado pelo acerto crítico.",
    "prerequisite": "Força ou Destreza 17 ou maior",
    "originalPrerequisite": "Strength or Dexterity score of 17 or higher",
    "prerequisites": [
      {
        "type": "ability",
        "abilities": [
          "Força",
          "Destreza"
        ],
        "minimum": 17,
        "mode": "any",
        "label": "Força ou Destreza 17 ou maior"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Destreza"
        ]
      }
    ]
  },
  {
    "id": "lyre-fatigue-resistance",
    "name": "Resistência à Fadiga",
    "originalName": "Fatigue Resistance",
    "aliases": [
      "Fatigue Resistance"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Você está acostumado a ficar exaurido, e a exposição às condições do combate o ajuda a resistir aos efeitos da fadiga quando é ferido em batalha. Você recebe os seguintes benefícios:\n\n• Seu valor de Constituição aumenta em 1.\n• O limite de Fadiga de Combate que você pode acumular ao mesmo tempo passa a ser igual à metade do seu bônus de proficiência, arredondada para cima.\n• Uma vez por Descanso Longo, quando concluir um Descanso Curto, você pode se recuperar de um nível de exaustão."
  },
  {
    "id": "lyre-fighting-style-advancement",
    "name": "Aprimoramento de Estilo de Luta",
    "originalName": "Fighting Style Advancement",
    "aliases": [
      "Fighting Style Advancement"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Você desenvolve suas habilidades de combate, recebendo os seguintes benefícios:\n\n• Um dos seus valores de habilidade aumenta em 1.\n• Você pode avançar um dos seus Estilos de Luta existentes para o próximo estágio. Se não possuir um Estilo de Luta para avançar, aprende um Estilo de Luta disponível para o Guerreiro.\n• Você pode escolher este talento diversas vezes.",
    "repeatable": true,
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Destreza",
          "Constituição",
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      },
      {
        "id": "fighting-style",
        "label": "Estilo de Luta a avançar ou aprender",
        "count": 1
      }
    ]
  },
  {
    "id": "lyre-firearm-expert",
    "name": "Especialista em Armas de Fogo",
    "originalName": "Firearm Expert",
    "aliases": [
      "Firearm Expert"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Você aprende a empunhar armas de fogo e se torna altamente proficiente em seu uso. Você recebe os seguintes benefícios:\n\n• Você ganha proficiência em armas de fogo simples e marciais, desde que possua a proficiência correspondente em armas simples e/ou marciais à distância.\n• Você pode recarregar armas de fogo usando uma reação em vez de uma ação bônus.\n• Você não recebe desvantagem por disparar uma arma de fogo enquanto estiver a até 1,5 metro de uma criatura hostil.\n• Você pode recarregar armas com a propriedade Gatilho como uma ação bônus.",
    "prerequisite": "Proficiência com armas simples e/ou armas à distância",
    "originalPrerequisite": "proficiency with simple and/or ranged weapons",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon",
        "value": "simple-and-or-ranged",
        "label": "Proficiência com armas simples e/ou armas à distância"
      }
    ]
  },
  {
    "id": "lyre-ingrained-expertise",
    "name": "Especialização Inata",
    "originalName": "Ingrained Expertise",
    "aliases": [
      "Ingrained Expertise"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Você refinou seus talentos até um grau de maestria. Escolha uma das opções a seguir:\n\n• Escolha duas perícias nas quais seja proficiente. Você ganha Especialização nessas perícias.\n• Escolha uma perícia na qual seja proficiente. Você ganha Especialização nessa perícia, e o valor de habilidade usado para ela aumenta em 1.\n• Escolha duas perícias nas quais não seja proficiente. Você ganha proficiência nessas perícias.\n• Escolha uma perícia na qual não seja proficiente. Você ganha proficiência e Especialização nessa perícia.",
    "choices": [
      {
        "id": "expertise-path",
        "label": "Forma de aperfeiçoamento",
        "count": 1,
        "options": [
          "Especialização em duas perícias proficientes",
          "Especialização em uma perícia proficiente e +1 no valor de habilidade usado",
          "Proficiência em duas perícias não proficientes",
          "Proficiência e Especialização em uma perícia não proficiente"
        ]
      }
    ]
  },
  {
    "id": "lyre-light-armor-master",
    "name": "Mestre de Armadura Leve",
    "originalName": "Light Armor Master",
    "aliases": [
      "Light Armor Master"
    ],
    "sourcePage": 332,
    "category": "Geral",
    "description": "Enquanto usa armadura leve, você aproveita sua flexibilidade para se mover com maior liberdade. Você recebe os seguintes benefícios:\n\n• Seu valor de Destreza aumenta em 1.\n• Enquanto usa armadura leve, você ainda pode se beneficiar de características ou cálculos de Classe de Armadura que normalmente exigiriam que estivesse sem armadura. Entretanto, ao fazer isso, você não adiciona à sua Classe de Armadura o valor-base de CA da armadura; recebe apenas os benefícios dos efeitos mágicos, bônus de aprimoramento e propriedades dela. Se possuir vários métodos de calcular sua Classe de Armadura, você pode escolher qual deseja usar no início de cada um dos seus turnos.\n• Enquanto estiver sem armadura ou usando armadura leve e uma criatura errar você com um ataque com arma, você pode usar sua reação para se mover até metade do seu deslocamento sem provocar ataques de oportunidade.",
    "prerequisite": "Proficiência com armadura leve",
    "originalPrerequisite": "proficiency with light armor",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "armor",
        "value": "light",
        "label": "Proficiência com armadura leve"
      }
    ]
  },
  {
    "id": "lyre-light-weapon-master",
    "name": "Mestre de Armas Leves",
    "originalName": "Light Weapon Master",
    "aliases": [
      "Light Weapon Master"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Você consegue sacrificar poder de impacto para garantir que seus ataques encontrem uma abertura. Você recebe os seguintes benefícios:\n\n• No seu turno, se realizar um ataque com arma e errar usando uma arma corpo a corpo leve ou de acuidade, você pode usar sua ação bônus para tratar o resultado do d20 daquele ataque como 15. Se o ataque acertar por causa disso, ele não é considerado como tendo se beneficiado de vantagem nem sofrido desvantagem.\n• Antes de realizar um ataque com uma arma leve ou de acuidade com a qual seja proficiente, você pode escolher sofrer uma penalidade na rolagem de dano igual ao modificador de habilidade que usa para o dano dessa arma. A jogada de ataque com essa arma recebe um bônus igual à penalidade escolhida.\n• Quando você tem vantagem em um ataque corpo a corpo com uma arma leve ou de acuidade, pode adicionar seu modificador de Inteligência ao dano do ataque. Você não pode adicionar esse bônus a um ataque no qual tenha escolhido sacrificar o dano do seu modificador de habilidade existente.\n• Se obtiver resultado 1 em qualquer dado de dano de uma arma com as propriedades Leve ou Acuidade, você pode rolar novamente esse dado e deve usar o novo resultado."
  },
  {
    "id": "lyre-lions-war-cry",
    "name": "Grito de Guerra do Leão",
    "originalName": "Lion’s War Cry",
    "aliases": [
      "Lion’s War Cry"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Você consegue liderar os outros por meio de uma poderosa declaração, inspirando-os a avançar.\n\n• Seu valor de Carisma aumenta em 1.\n• Uma vez por Descanso Curto, quando rolar iniciativa em combate, você pode usar sua reação para soltar um grito de guerra aos aliados que possam ouvi-lo a até 9 metros. Eles recebem pontos de vida temporários iguais ao seu bônus de proficiência + seu modificador de Carisma; esses pontos de vida temporários desaparecem após 1 minuto. Durante o primeiro turno de cada criatura depois de receber esses pontos de vida temporários, ela pode escolher conceder vantagem a uma jogada de ataque, teste de resistência ou teste de habilidade que realizar. Se usar esta característica, seu grito estrondoso alertará todas as criaturas capazes de ouvi-lo.",
    "prerequisite": "Subclasse Cavaleiro do Leão Vermelho ou Carisma 16 ou maior",
    "originalPrerequisite": "Red Lion Knight subclass or Charisma score 16 or higher",
    "prerequisites": [
      {
        "type": "or",
        "options": [
          {
            "type": "subclass",
            "value": "lyre-fighter-red-lion-knight",
            "label": "Cavaleiro do Leão Vermelho"
          },
          {
            "type": "ability",
            "abilities": [
              "Carisma"
            ],
            "minimum": 16,
            "mode": "all",
            "label": "Carisma 16 ou maior"
          }
        ],
        "label": "Cavaleiro do Leão Vermelho ou Carisma 16 ou maior"
      }
    ]
  },
  {
    "id": "lyre-multi-casting",
    "name": "Conjuração Múltipla",
    "originalName": "Multi-Casting",
    "aliases": [
      "Multi-Casting"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Com prática e concentração, você consegue compartimentalizar os processos exigidos pela energia mágica que percorre seu corpo. Você é capaz de sustentar dois efeitos distintos ao mesmo tempo. Você recebe os seguintes benefícios:\n\n• O valor da sua habilidade de conjuração aumenta em 1.\n• Você pode conjurar e manter uma segunda magia que exija concentração enquanto já estiver se concentrando em uma primeira. As duas magias não podem ser iguais. Enquanto estiver se concentrando em duas magias dessa forma, você realiza os testes de concentração para ambas como se fossem uma única magia, obtendo sucesso ou falhando em ambas com base no mesmo teste. Você tem desvantagem nos testes de concentração realizados enquanto estiver se concentrando em duas magias dessa forma.",
    "prerequisite": "Valor da sua habilidade de conjuração 17 ou maior",
    "originalPrerequisite": "Your spellcasting ability score is 17 or higher.",
    "prerequisites": [
      {
        "type": "spellcasting-ability",
        "minimum": 17,
        "label": "Valor da habilidade de conjuração 17 ou maior"
      }
    ],
    "choices": [
      {
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração que recebe +1",
        "count": 1,
        "options": [
          "Uma habilidade de conjuração que você possua"
        ]
      }
    ]
  },
  {
    "id": "lyre-piercing-reach",
    "name": "Alcance Perfurante",
    "originalName": "Piercing Reach",
    "aliases": [
      "Piercing Reach"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Enquanto empunha uma arma longa, você consegue tentar atravessar um inimigo e atingir outra criatura quando surge uma oportunidade. Você recebe os seguintes benefícios:\n\n• Seu valor de Força aumenta em 1.\n• Quando ataca uma criatura a até 1,5 metro de você com uma arma que possua a propriedade Alcance e erra ou reduz essa criatura a 0 pontos de vida, você pode realizar imediatamente outro ataque com a mesma arma contra outra criatura dentro do alcance dela e adjacente ao alvo inicial. Você só pode fazer isso uma vez por turno.",
    "prerequisite": "Proficiência em uma arma com a propriedade Alcance e proficiência na perícia Atletismo ou em testes de resistência de Força",
    "originalPrerequisite": "proficiency in a weapon with the reach property, and in either the Athletics skill or Strength saving throws",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon-property",
        "value": "reach",
        "label": "Proficiência em uma arma com a propriedade Alcance"
      },
      {
        "type": "proficiency",
        "category": "skill-or-save",
        "values": [
          "Atletismo",
          "Força"
        ],
        "mode": "any",
        "label": "Proficiência em Atletismo ou em testes de resistência de Força"
      }
    ]
  },
  {
    "id": "lyre-promise-of-certainty",
    "name": "Promessa de Certeza",
    "originalName": "Promise of Certainty",
    "aliases": [
      "Promise of Certainty"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Você consegue invocar o poder do seu epíteto para manifestar proteção sobrenatural. Você recebe os seguintes benefícios:\n\n• Seu valor de Carisma aumenta em 1.\n• Escolha dois valores de habilidade. Sempre que falhar em um teste de resistência usando qualquer uma dessas habilidades, você pode repetir o teste de resistência e deve manter o novo resultado. Você pode fazer isso uma vez para cada habilidade escolhida por Descanso Curto ou Longo.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ],
    "choices": [
      {
        "id": "saving-abilities",
        "label": "Valores de habilidade protegidos",
        "count": 2,
        "options": [
          "Força",
          "Destreza",
          "Constituição",
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "lyre-promise-of-companionship",
    "name": "Promessa de Companheirismo",
    "originalName": "Promise of Companionship",
    "aliases": [
      "Promise of Companionship"
    ],
    "sourcePage": 333,
    "category": "Geral",
    "description": "Você consegue expressar sua intenção de confiar em um aliado e coordenar sua defesa levando essa parceria em consideração. Você recebe os seguintes benefícios:\n\n• Seu valor de Força ou Constituição aumenta em 1.\n• Você pode passar 1 minuto com uma criatura que compreenda você, assegurando a ela que pretende lutar ao lado dela e trocando observações e estratégias. Fazer isso cria um pacto entre vocês. Até você concluir um Descanso Curto ou Longo — ou formar este pacto com outra criatura —, sempre que realizar uma jogada de ataque contra uma criatura a até 1,5 metro da criatura com a qual mantém o pacto, você realiza esse ataque com vantagem. Você não recebe esse benefício se a criatura com quem firmou o pacto estiver incapacitada ou inconsciente.\n• Se a criatura com quem você mantém o pacto for reduzida a 0 pontos de vida, você pode usar sua reação para se mover imediatamente até seu deslocamento — terminando em um espaço mais próximo dela — e realizar um único ataque com arma, com vantagem, contra a criatura que a reduziu a 0 pontos de vida, desde que o alvo esteja dentro do alcance.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Constituição"
        ]
      }
    ]
  },
  {
    "id": "lyre-promise-of-efficacy",
    "name": "Promessa de Eficácia",
    "originalName": "Promise of Efficacy",
    "aliases": [
      "Promise of Efficacy"
    ],
    "sourcePage": 334,
    "category": "Geral",
    "description": "Você possui precisão cirúrgica ao atacar um alvo, desde que tenha domínio distinto da arma que está empunhando. Você recebe os seguintes benefícios:\n\n• Seu valor de Força ou Destreza aumenta em 1.\n• Escolha um tipo de arma com o qual seja proficiente — espadas longas, espadas curtas, bestas etc. — ou uma arma específica com a qual seja proficiente, como um item mágico ou uma arma criada por uma magia como lâmina sombria. Seu intervalo de crítico — o resultado no d20 com o qual seus ataques obtêm um acerto crítico — com essa arma aumenta em 1. Por exemplo, se era 20, passa a ser 19–20; se era 19–20, passa a ser 18–20.\n• Quando obtiver resultado 20 no d20 com a arma escolhida para este talento, role 1d100. Se o resultado for igual ou inferior a 10 + seu nível de Cavaleiro das Pétalas, você recupera um espaço de magia de pacto gasto.\n• Sempre que ganhar um nível de Cavaleiro das Pétalas, você pode mudar a arma escolhida para este efeito.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Força",
          "Destreza"
        ]
      },
      {
        "id": "weapon",
        "label": "Tipo de arma ou arma específica dominada",
        "count": 1
      }
    ]
  },
  {
    "id": "lyre-promise-of-levity",
    "name": "Promessa de Leveza",
    "originalName": "Promise of Levity",
    "aliases": [
      "Promise of Levity"
    ],
    "sourcePage": 334,
    "category": "Geral",
    "description": "Você consegue identificar problemas que afetam seus aliados e ajudá-los a superá-los, assegurando-lhes que você os apoiará enquanto eles também o apoiarem. Você recebe os seguintes benefícios:\n\n• Seu valor de Carisma aumenta em 1.\n• Sempre que uma criatura que você possa ver, que possa ouvi-lo e que esteja a até 18 metros falhar em um teste de habilidade, você pode usar sua reação para adicionar seu modificador de Carisma ao resultado dela, possivelmente alterando o desfecho.\n• Quando você falhar em um teste resistido de Acrobacia ou Atletismo e tiver um aliado a até 1,5 metro da criatura contra a qual está disputando — um aliado que não esteja incapacitado —, você pode usar sua reação ou ação bônus para fazer com que esse aliado tente o mesmo teste em seu lugar, usando o resultado dele no lugar do seu.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ]
  },
  {
    "id": "lyre-promise-of-planar-defense",
    "name": "Promessa de Defesa Planar",
    "originalName": "Promise of Planar Defense",
    "aliases": [
      "Promise of Planar Defense"
    ],
    "sourcePage": 334,
    "category": "Geral",
    "description": "Você consegue perceber perturbações na ordem natural do mundo, buscando mentalmente monstros poderosos. Você recebe os seguintes benefícios:\n\n• Seu valor de Inteligência aumenta em 1.\n• Você pode usar uma ação para abrir sua mente ao mundo ao redor até o fim do seu próximo turno, percebendo aberrações e monstruosidades a até 36 metros de você. Você sabe a direção, o tipo e o tamanho das criaturas que percebe, mas não a identidade delas. Você pode perceber dessa forma um número de vezes por Descanso Longo igual ao seu bônus de proficiência.\n• Dentro do mesmo raio acima, você também pode perceber aberturas para outros planos, objetos sintonizados com outros planos e itens mágicos capazes de permitir viagens até eles. Se aquilo que você percebe estiver sintonizado ou conectado a um plano específico, você o sente de uma maneira que sugere a natureza desse plano; um portal para o Plano Elemental do Fogo poderia fazer você sentir um calor insuportável, enquanto um para o Plano Elemental da Terra poderia produzir uma profunda vibração, por exemplo.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ]
  },
  {
    "id": "lyre-promise-of-understanding",
    "name": "Promessa de Compreensão",
    "originalName": "Promise of Understanding",
    "aliases": [
      "Promise of Understanding"
    ],
    "sourcePage": 334,
    "category": "Geral",
    "description": "Você consegue se colocar no lugar dos outros e usar sua influência para acalmar o espírito deles, chegando a se comunicar com criaturas à sua escolha. Você recebe os seguintes benefícios:\n\n• Seu valor de Sabedoria ou Carisma aumenta em 1.\n• Quando uma criatura tentar se comunicar com você em um idioma que você não fala nem compreende, pode usar sua ação para formar uma conexão mágica com essa criatura que permite que vocês se entendam ao falar. Esse efeito dura 10 minutos ou até você dispensá-lo.\n• Uma vez por Descanso Curto, você pode escolher um número de criaturas a até 18 metros de você para tentar pacificá-las. As criaturas são afetadas como se você tivesse conjurado a magia acalmar emoções como uma magia de Cavaleiro das Pétalas. Você pode escolher como alvo um número de criaturas igual a 1 + seu bônus de proficiência.",
    "prerequisite": "Pelo menos 2 níveis de Cavaleiro das Pétalas",
    "originalPrerequisite": "you have at least 2 levels as a Petal Knight.",
    "prerequisites": [
      {
        "type": "class-level",
        "value": "petal-knight",
        "minimum": 2,
        "label": "Pelo menos 2 níveis de Cavaleiro das Pétalas"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "lyre-ranged-weapon-master",
    "name": "Mestre de Armas à Distância",
    "originalName": "Ranged Weapon Master",
    "aliases": [
      "Ranged Weapon Master"
    ],
    "sourcePage": 334,
    "category": "Geral",
    "description": "Você consegue mirar e atacar com armas à distância com maior eficiência, possuindo um olhar mais apurado para atingir alvos distantes. Você recebe os seguintes benefícios:\n\n• Se realizar um ataque com arma à distância com vantagem, pode adicionar seu modificador de Inteligência à rolagem de dano resultante.\n• Se obtiver resultado 1 ou 2 em qualquer um dos dados de dano de uma arma à distância, pode rolar esses dados novamente uma vez e deve manter o novo resultado.\n• No seu turno, guardar ou sacar uma arma à distância ou de arremesso é uma ação livre, desde que você não esteja incapacitado.\n• Quando realiza um ataque com arma à distância como parte de uma ação Atacar, você pode usar sua ação bônus para recarregar e realizar um ataque adicional usando essa arma.",
    "prerequisite": "Proficiência com pelo menos uma arma à distância ou arma de fogo",
    "originalPrerequisite": "proficiency in at least one ranged weapon or firearm",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon",
        "value": "ranged-or-firearm",
        "label": "Proficiência com pelo menos uma arma à distância ou arma de fogo"
      }
    ]
  },
  {
    "id": "lyre-sign-casting",
    "name": "Conjuração por Sinais",
    "originalName": "Sign Casting",
    "aliases": [
      "Sign Casting"
    ],
    "sourcePage": 335,
    "category": "Geral",
    "description": "Usando linguagem de sinais, você consegue desenhar símbolos arcanos no ar com os dedos para substituir componentes verbais. Ao conjurar uma magia com componentes verbais, você pode dispensá-los — assim como qualquer fala exigida pela magia — e realizar um equivalente como componentes somáticos. Magias conjuradas dessa forma são tratadas como se possuíssem componentes somáticos mesmo quando normalmente não os teriam. Você não pode fazer isso se for incapaz de realizar componentes somáticos.\n\n*Se um personagem for incapaz de falar ou vocalizar desde a criação do personagem, você pode considerar conceder a ele este talento para permitir sua conjuração apesar dessa limitação.*",
    "prerequisite": "Capacidade de conjurar pelo menos uma magia de 1º nível ou superior",
    "originalPrerequisite": "you can cast at least one 1st-level spell or higher",
    "prerequisites": [
      {
        "type": "spellcasting",
        "minimumSpellLevel": 1,
        "label": "Capacidade de conjurar pelo menos uma magia de 1º nível ou superior"
      }
    ]
  },
  {
    "id": "lyre-spell-sufferance",
    "name": "Suplício Mágico",
    "originalName": "Spell Sufferance",
    "aliases": [
      "Spell Sufferance"
    ],
    "sourcePage": 335,
    "category": "Geral",
    "description": "Suas magias são mais devastadoras, e sua precisão com elas se aperfeiçoou. Você recebe os seguintes benefícios:\n\n• O valor da sua habilidade de conjuração aumenta em 1.\n• Seus ataques com magia obtêm um acerto crítico com resultado 19 ou 20 no d20.\n• Quando uma ou mais criaturas falharem em um teste de resistência contra uma magia que você conjurou, você pode fazer com que elas sejam sobrecarregadas pelo excesso de energia mágica. Cada alvo à sua escolha que tenha falhado tem seu deslocamento reduzido para 1,5 metro até o fim do próximo turno dele e não pode realizar ações bônus durante esse período. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
    "prerequisite": "Capacidade de conjurar pelo menos uma magia de 1º nível ou superior",
    "originalPrerequisite": "the ability to cast at least one 1st level or higher spell.",
    "prerequisites": [
      {
        "type": "spellcasting",
        "minimumSpellLevel": 1,
        "label": "Capacidade de conjurar pelo menos uma magia de 1º nível ou superior"
      }
    ],
    "choices": [
      {
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração que recebe +1",
        "count": 1,
        "options": [
          "Uma habilidade de conjuração que você possua"
        ]
      }
    ]
  },
  {
    "id": "lyre-survival-master",
    "name": "Mestre da Sobrevivência",
    "originalName": "Survival Master",
    "aliases": [
      "Survival Master"
    ],
    "sourcePage": 335,
    "category": "Geral",
    "description": "Você é um prodígio ao procurar alimento, mesmo em ambientes com os quais não está familiarizado. Você recebe os seguintes benefícios:\n\n• Você ganha Especialização em testes de Sobrevivência.\n• Você tem vantagem em testes de habilidade realizados para reconhecer se a flora ou a fauna seriam perigosas de tocar em situações nas quais possam ser tóxicas, corrosivas ou apresentar outros perigos causados por elementos naturais.\n• Você pode usar seu valor de Constituição em testes de Sobrevivência relacionados à coleta de alimento, usando sua intuição e experiência com comida em vez de conhecimento consciente sobre o alimento adequado.\n• Se você se perder enquanto viaja por território desconhecido, tem vantagem nos testes de Sobrevivência realizados para encontrar marcos ou caminhos que já tenha encontrado antes e retornar à rota correta.\n• Você possui um valor passivo de Sobrevivência igual a 10 + seu modificador de teste de Sobrevivência, que pode usar para viajar casualmente, encontrar alimento e perceber elementos interessantes da natureza mesmo quando não estiver prestando atenção deliberadamente.",
    "prerequisite": "Proficiência na perícia Sobrevivência",
    "originalPrerequisite": "proficiency in the Survival skill",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "skill",
        "value": "Sobrevivência",
        "label": "Proficiência na perícia Sobrevivência"
      }
    ]
  },
  {
    "id": "lyre-tacticians-command",
    "name": "Comando do Tático",
    "originalName": "Tactician’s Command",
    "aliases": [
      "Tactician’s Command"
    ],
    "sourcePage": 335,
    "category": "Geral",
    "description": "Você consegue observar adversários à distância e orientar seus aliados para que lutem contra eles com maior eficiência em situações críticas. Você recebe os seguintes benefícios:\n\n• Seu valor de Carisma aumenta em 1.\n• Uma vez por turno, quando um aliado que você possa ver e que possa ouvi-lo realiza um ataque com arma, você pode conceder vantagem a esse ataque. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
    "prerequisite": "Carisma 14 ou maior",
    "originalPrerequisite": "Charisma score of 14 or higher",
    "prerequisites": [
      {
        "type": "ability",
        "abilities": [
          "Carisma"
        ],
        "minimum": 14,
        "mode": "all",
        "label": "Carisma 14 ou maior"
      }
    ]
  },
  {
    "id": "lyre-unshakable",
    "name": "Inabalável",
    "originalName": "Unshakable",
    "aliases": [
      "Unshakable"
    ],
    "sourcePage": 335,
    "category": "Geral",
    "description": "É difícil manter você derrubado, e sua vontade de lutar o mantém vivo diante da morte. Você recebe os seguintes benefícios:\n\n• Seu valor de Constituição aumenta em 1.\n• Quando obtiver resultado 19 ou 20 em um teste de resistência contra a morte, você recupera 1 ponto de vida.\n• Quando for estabilizado com 0 pontos de vida, role 1d100. Com resultado 1–50, você recupera 1 ponto de vida. Com resultado 51–80, permanece estabilizado e obtém sucesso automaticamente em testes de resistência realizados para evitar ficar inconsciente. Com resultado 81 ou maior, você prossegue normalmente."
  }
].map(feat => ({ ...feat, sourceId: 'lyre' }));

  registry.registerFeatCatalog({
    id: 'lyre-retia-feats',
    sourceId: 'lyre',
    label: "Lyre's Guide to Retia — Land of Industry",
    chapter: 'Capítulo VII — Opções de Personagem · Talentos de Somnus Domina',
    pages: '331–335',
    intro: 'Um talento representa o domínio alcançado por um personagem em uma de suas capacidades ou a descoberta de uma habilidade latente que antes não possuía meios de utilizar. Para escolher um talento, a criatura precisa atender aos pré-requisitos listados. Se mais tarde deixar de atendê-los, perde imediatamente o acesso aos benefícios do talento e pode recuperá-los caso volte a se qualificar. Aumentos de valor de habilidade concedidos por talentos não podem elevar esse valor acima de 20, a menos que outra característica, traço ou efeito tenha aumentado o limite desse valor.',
    feats
  });
})(window.GRIMORIO_REGISTRY);
