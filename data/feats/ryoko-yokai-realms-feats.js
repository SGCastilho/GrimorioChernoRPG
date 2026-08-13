'use strict';

// Capítulo 10 — Antecedentes e Talentos, Ryoko's Guide to the Yokai Realms.
// Tradução PT-BR baseada diretamente na edição v1.00 fornecida ao projeto.
// IDs usam os nomes ingleses canônicos para permanecerem estáveis mesmo se a localização for refinada.
(function registerRyokoYokaiRealmsFeats(registry) {
  if (!registry?.registerFeatCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a talentos precisa ser carregado antes de ryoko-yokai-realms-feats.js.');

  const feats = [
  {
    "id": "ryoko-yokai-realms-boon-of-ashura",
    "name": "Dádiva de Ashura",
    "originalName": "Boon of Ashura",
    "aliases": [
      "Boon of Ashura"
    ],
    "sourcePage": 216,
    "category": "Geral",
    "description": "Seja por dádiva, roubo ou pelo acaso providencial da magia selvagem, você passou a possuir um fragmento do poder de Ashura, o poderoso deus-demônio de três cabeças da paixão e da fúria. Você recebe os seguintes benefícios:\n\n• Aumente seu valor de Força ou Constituição em 1, até o máximo de 20.\n• Você pode realizar uma reação adicional em uma rodada, mas só pode realizar uma reação em um mesmo turno. Você pode realizar uma reação adicional dessa forma um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
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
    "id": "ryoko-yokai-realms-boon-of-the-jorogumo",
    "name": "Dádiva da Jorōgumo",
    "originalName": "Boon of the Jorōgumo",
    "aliases": [
      "Boon of the Jorōgumo"
    ],
    "sourcePage": 216,
    "category": "Geral",
    "description": "A jorōgumo é uma yokai aracnídea metamorfa que vive entre Humanoides, seduzindo e devorando suas vítimas. Você possui um fragmento de seu poder aterrorizante, recebendo os seguintes benefícios:\n\n• Você ganha proficiência, à sua escolha, em Enganação ou Persuasão.\n• Você pode conjurar a magia Disfarçar-se um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.\n• Você possui deslocamento de escalada igual ao seu deslocamento de caminhada. Além disso, pode se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo em tetos, mantendo as mãos livres.\n• Você ignora terreno difícil causado por teias.",
    "choices": [
      {
        "id": "skill",
        "label": "Proficiência em perícia",
        "count": 1,
        "options": [
          "Enganação",
          "Persuasão"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-boon-of-the-komainu",
    "name": "Dádiva do Komainu",
    "originalName": "Boon of the Komainu",
    "aliases": [
      "Boon of the Komainu"
    ],
    "sourcePage": 216,
    "category": "Geral",
    "description": "Os komainu de pele pétrea permanecem em vigília nos santuários por todo o reino, protegendo aquilo que é sagrado de saques e pilhagens. Você passou a possuir um fragmento do poder desses yokai cães-leões, recebendo os seguintes benefícios:\n\n• Como uma ação, você pode inflamar ao redor do pescoço uma juba brilhante de energia radiante, que permanece até você dispensá-la como uma ação bônus ou ficar inconsciente. Enquanto a juba estiver acesa, você emite meia-luz em um raio de 3 metros, e uma criatura que você esteja agarrando sofre 2d4 de dano radiante no início do turno dela.\n• Como uma ação bônus, você pode endurecer seu corpo, transformando-o em pedra. Até o início do seu próximo turno, você recebe +2 de bônus na CA enquanto não estiver usando armadura pesada, tem vantagem em testes de resistência de Constituição e desvantagem em testes de resistência de Destreza. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo."
  },
  {
    "id": "ryoko-yokai-realms-boon-of-the-nue",
    "name": "Dádiva do Nue",
    "originalName": "Boon of the Nue",
    "aliases": [
      "Boon of the Nue"
    ],
    "sourcePage": 216,
    "category": "Geral",
    "description": "O nue é um caçador quimérico feroz, tido por rumores como o primeiro yokai. Seu poder é caótico, e uma centelha desse caos reside em você. Sua ligação com o nue concede os seguintes benefícios:\n\n• No início do seu turno, você pode rolar um d6. Se o resultado do dado for par, você recebe um bônus igual ao resultado na próxima jogada de ataque, teste de habilidade ou teste de resistência que realizar antes do fim deste turno. Se o resultado for ímpar, você sofre dano de veneno igual ao resultado, que não pode ser reduzido nem evitado de forma alguma. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso curto ou longo.\n• Como uma ação bônus, você pode conceder a si mesmo deslocamento de voo igual ao seu deslocamento de caminhada até o fim do seu turno. Você cai se terminar o turno no ar sem nada sustentando-o. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso curto ou longo."
  },
  {
    "id": "ryoko-yokai-realms-boon-of-the-omukade",
    "name": "Dádiva do Ōmukade",
    "originalName": "Boon of the Ōmukade",
    "aliases": [
      "Boon of the Ōmukade"
    ],
    "sourcePage": 216,
    "category": "Geral",
    "description": "O ōmukade é um caçador de dragões — um yokai centopeia colossal com uma carapaça resistente e resistência aos elementos. Sua ligação com o ōmukade concede os seguintes benefícios:\n\n• Aumente seu valor de Constituição em 1, até o máximo de 20.\n• Ao escolher este talento, escolha um tipo de dano entre ácido, frio, fogo, elétrico, veneno e trovão. Você ganha resistência a esse tipo de dano e, quando sofre dano desse tipo, pode usar uma reação para ficar fortalecido. Ao fazer isso, a primeira rolagem de dano que realizar dentro do próximo minuto causa 1d8 de dano adicional do tipo escolhido. Esse dano aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8). Você pode usar esta reação um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "choices": [
      {
        "id": "damage-type",
        "label": "Tipo de dano",
        "count": 1,
        "options": [
          "ácido",
          "frio",
          "fogo",
          "elétrico",
          "veneno",
          "trovão"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-boon-of-the-wanyudo",
    "name": "Dádiva do Wanyūdō",
    "originalName": "Boon of the Wanyūdō",
    "aliases": [
      "Boon of the Wanyūdō"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Frenético, fanático e abrasadoramente veloz, o wanyūdō é um yokai corruptor que assume a forma de uma grande roda flamejante. Sua ligação com ele concede os seguintes benefícios:\n\n• Seu deslocamento aumenta em 3 metros.\n• Quando você estiver caído, levantar-se custa apenas 1,5 metro do seu deslocamento.\n• Se você se mover pelo menos 3 metros em linha reta na direção de uma criatura e estiver ao alcance dela, pode usar imediatamente uma ação bônus para tentar uma investida esmagadora contra essa criatura. Faça um teste de Força (Atletismo), resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo, à escolha dele. Quem perder a disputa fica caído. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso curto ou longo."
  },
  {
    "id": "ryoko-yokai-realms-cantrip-combatant",
    "name": "Combatente de Truques",
    "originalName": "Cantrip Combatant",
    "aliases": [
      "Cantrip Combatant"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Você dominou a arte de combinar golpes com armas e conjuração, recebendo os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Quando você usa uma ação para conjurar um truque que exige que realize um ataque desarmado ou um ataque corpo a corpo com uma arma que esteja empunhando como parte da conjuração da magia, você pode realizar um ataque com arma como uma ação bônus nesse turno.",
    "prerequisite": "Uma característica de classe que permita atacar mais de uma vez ao realizar a ação Atacar em seu turno e a capacidade de conjurar pelo menos um truque",
    "prerequisites": [
      {
        "type": "feature",
        "label": "Uma característica de classe que permita atacar mais de uma vez ao realizar a ação Atacar em seu turno"
      },
      {
        "type": "spellcasting",
        "label": "Capacidade de conjurar pelo menos um truque"
      }
    ],
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
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-combo-striker",
    "name": "Golpeador de Combo",
    "originalName": "Combo Striker",
    "aliases": [
      "Combo Striker"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Você é experiente na arte do combate colaborativo e dos golpes em combinação, recebendo os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Você pode colaborar em um Ataque de Combo, mesmo que já tenha colaborado em um desde seu último descanso longo. Depois de usar este benefício, você não pode usá-lo novamente até terminar um descanso longo.\n• Quando você inicia um Ataque de Combo, uma criatura voluntária à sua escolha que você possa ver pode colaborar nesse combo sem que isso a impeça de colaborar em outro Ataque de Combo antes de terminar um descanso longo. Depois de usar este benefício, você não pode usá-lo novamente até terminar um descanso longo.\n\n*Consulte Ataques de Combo, página 43.*",
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
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-dedicated-combatant",
    "name": "Combatente Dedicado",
    "originalName": "Dedicated Combatant",
    "aliases": [
      "Dedicated Combatant"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Seu compromisso fervoroso com o treinamento de combate coloca sua Maestria Avançada de Armas no mesmo patamar dos especialistas mais dedicados. Você pode calcular seu nível marcial* usando seu nível completo em qualquer classe considerada semimarcial e metade dos seus níveis em qualquer classe considerada não marcial.\n\n*Consulte Maestria Avançada de Armas, página 83.*"
  },
  {
    "id": "ryoko-yokai-realms-double-throw",
    "name": "Arremesso Duplo",
    "originalName": "Double Throw",
    "aliases": [
      "Double Throw"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Você desenvolveu técnicas especiais para arremessar várias armas de uma vez, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Uma vez em cada um dos seus turnos, quando você realiza um ataque à distância com arma usando uma arma que possua as propriedades Leve e Arremesso e não tenha desvantagem na jogada de ataque, pode escolher arremessar duas armas com um único movimento do pulso. Se fizer isso, realize uma jogada de ataque separada com desvantagem para cada arma. Se você tinha vantagem no ataque original, não sofre desvantagem nos dois ataques realizados usando este talento. Esses ataques podem ter alvos diferentes.",
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
    "id": "ryoko-yokai-realms-elemental-fighting",
    "name": "Combate Elemental",
    "originalName": "Elemental Fighting",
    "aliases": [
      "Elemental Fighting"
    ],
    "sourcePage": 217,
    "category": "Geral",
    "description": "Você estudou os movimentos meticulosos e as artes mágicas da dobra elemental a ponto de conseguir canalizar rajadas rudimentares, porém potentes, de energia elemental através do próprio corpo.\n\nAo escolher este talento, escolha um tipo de dano entre ácido, frio, fogo, elétrico e trovão. Quando realiza um ataque desarmado, você pode escolher que o ataque cause dano do tipo escolhido igual a 1d8 + seu modificador de Força, em vez do dano de concussão normal de um ataque desarmado. O dano que você causa dessa forma ignora resistência.",
    "choices": [
      {
        "id": "damage-type",
        "label": "Tipo de dano",
        "count": 1,
        "options": [
          "ácido",
          "frio",
          "fogo",
          "elétrico",
          "trovão"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-elemental-initiate",
    "name": "Iniciado Elemental",
    "originalName": "Elemental Initiate",
    "aliases": [
      "Elemental Initiate"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Você adquiriu uma parcela da ligação de um Dobrador com um elemento. Escolha um dos quatro elementos da característica Afinidade Elemental do Dobrador: ar, terra, fogo ou água. Você recebe os seguintes benefícios:\n\n• Você aprende um truque e uma magia de 1º nível da lista de magias do elemento escolhido. Você pode conjurar a magia de 1º nível sem gastar um espaço de magia e deve terminar um descanso longo antes de poder conjurá-la dessa forma novamente. Você também pode conjurar a magia usando quaisquer espaços de magia que possua. Sua habilidade de conjuração para as magias deste talento é Inteligência, Sabedoria ou Carisma, à sua escolha quando selecionar este talento.\n• Ao escolher este talento, escolha um tipo de dano associado ao elemento escolhido. Quando sofrer dano desse tipo, você pode usar uma reação para ganhar resistência a esse tipo de dano, inclusive contra o dano desencadeador, até o início do seu próximo turno.\n\nVocê pode escolher este talento diversas vezes.",
    "repeatable": true,
    "choices": [
      {
        "id": "element",
        "label": "Elemento",
        "count": 1,
        "options": [
          "ar",
          "terra",
          "fogo",
          "água"
        ]
      },
      {
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração",
        "count": 1,
        "options": [
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      },
      {
        "id": "damage-type",
        "label": "Tipo de dano associado ao elemento",
        "count": 1
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-extra-attack-tactician",
    "name": "Tático de Ataque Extra",
    "originalName": "Extra Attack Tactician",
    "aliases": [
      "Extra Attack Tactician"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Você estudou os estilos de luta de outros combatentes e aprendeu a imitar suas técnicas, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Escolha uma classe entre Bárbaro, Dobrador, Guerreiro, Monge, Paladino e Patrulheiro. Você pode usar o benefício de 7º nível da característica Ataque Extra Aprimorado dessa classe um número de vezes igual ao seu bônus de proficiência, recuperando todos os usos gastos ao terminar um descanso longo. Você só pode se beneficiar de uma característica Ataque Extra Aprimorado por turno; escolha quando realizar seu primeiro ataque.\n\nVocê pode escolher este talento diversas vezes.",
    "prerequisite": "Característica Ataque Extra Aprimorado",
    "prerequisites": [
      {
        "type": "feature",
        "value": "improved-extra-attack",
        "label": "Característica Ataque Extra Aprimorado"
      }
    ],
    "repeatable": true,
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
        "id": "class",
        "label": "Classe cujo benefício de Ataque Extra Aprimorado será usado",
        "count": 1,
        "options": [
          "Bárbaro",
          "Dobrador",
          "Guerreiro",
          "Monge",
          "Paladino",
          "Patrulheiro"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-fearsome-flourisher",
    "name": "Floreador Temível",
    "originalName": "Fearsome Flourisher",
    "aliases": [
      "Fearsome Flourisher"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Sua velocidade com o nunchaku é capaz de incutir medo em seus inimigos:\n\n• Quando você realiza a ação Atacar e ataca com um nunchaku, pode usar uma ação bônus para realizar um ataque adicional com o nunchaku. Esse ataque usa o mesmo modificador de habilidade do ataque principal, e o dado de dano da arma para esse ataque é um d4.\n• Quando realiza a ação especial Floreio com um nunchaku, você pode usar uma ação bônus para torná-la especialmente intimidadora contra uma criatura ao seu alcance. Se você não falhar no teste de Destreza para florear a arma, seu alvo deve obter sucesso em um teste de resistência de Sabedoria ou ficará amedrontado por você até o início do seu próximo turno. A CD do teste de resistência é igual a 8 + seu modificador de Destreza. Se você for proficiente na perícia Intimidação, pode adicionar seu bônus de proficiência à CD.",
    "prerequisite": "Proficiência com nunchaku",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon",
        "value": "nunchaku",
        "label": "Proficiência com nunchaku"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-focused-discipline",
    "name": "Disciplina Focada",
    "originalName": "Focused Discipline",
    "aliases": [
      "Focused Discipline"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Sua diligência e seu treinamento focado concederam a você os seguintes benefícios:\n\n• Escolha uma proficiência em perícia concedida por sua classe. Seu bônus de proficiência é dobrado para testes de habilidade realizados usando essa perícia.\n• Escolha uma proficiência em teste de resistência concedida por sua classe. Sempre que realizar esse teste de resistência, você pode tratar uma rolagem de 9 ou menos no d20 como 10.\n\nSe você perder este talento por deixar de atender ao seu pré-requisito, recebe o talento Multidisciplinar em seu lugar.",
    "prerequisite": "4º nível; não ser um personagem multiclasse",
    "prerequisites": [
      {
        "type": "level",
        "minimum": 4,
        "label": "4º nível"
      },
      {
        "type": "character-structure",
        "value": "single-class",
        "label": "Não ser um personagem multiclasse"
      }
    ],
    "choices": [
      {
        "id": "class-skill",
        "label": "Perícia concedida por sua classe",
        "count": 1
      },
      {
        "id": "class-saving-throw",
        "label": "Teste de resistência concedido por sua classe",
        "count": 1
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-kaiju-hunter",
    "name": "Caçador de Kaiju",
    "originalName": "Kaiju Hunter",
    "aliases": [
      "Kaiju Hunter"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Você é experiente nas técnicas de combate contra criaturas colossais, recebendo os seguintes benefícios:\n\n• Montar uma criatura custa apenas 1,5 metro do seu deslocamento, em vez de metade do seu deslocamento.\n• Você pode se firmar* gastando apenas 1,5 metro do seu deslocamento, em vez de metade do seu deslocamento.\n• Você tem vantagem em testes de habilidade para identificar áreas vulneráveis**.\n• Você ignora o terreno difícil causado por se mover sobre uma criatura que seja mais de duas categorias de tamanho maior que você.\n• Imediatamente depois que uma criatura que você possa ver, que seja pelo menos uma categoria de tamanho maior que você, acertar ou errar você com uma jogada de ataque corpo a corpo, você pode usar sua reação para realizar um ataque com arma contra essa criatura.\n\n*Consulte a página 8. **Consulte a página 6.*"
  },
  {
    "id": "ryoko-yokai-realms-kusarigama-master",
    "name": "Mestre da Kusarigama",
    "originalName": "Kusarigama Master",
    "aliases": [
      "Kusarigama Master"
    ],
    "sourcePage": 218,
    "category": "Geral",
    "description": "Você dominou o uso da kusarigama, aprendendo técnicas adicionais para derrubar e importunar seus inimigos. Você adiciona seu modificador de habilidade à rolagem de dano realizada com o contrapeso de uma kusarigama. Além disso, quando realiza esse ataque contra um alvo Médio ou menor, pode escolher não causar dano. Se fizer isso, o alvo realiza um teste de Força (Atletismo) ou Destreza (Acrobacia), à escolha dele, resistido pela sua jogada de ataque. Se o alvo perder a disputa, escolha um dos efeitos a seguir:\n\n• O alvo é desarmado de um objeto à sua escolha que esteja segurando; o objeto é puxado em sua direção e cai aos seus pés.\n• O alvo fica caído.\n• O alvo é puxado 1,5 metro em sua direção. Se isso o deixar ao seu alcance, ele fica agarrado por você. Enquanto uma criatura estiver agarrada dessa forma, você não pode realizar ataques usando o contrapeso da kusarigama.",
    "prerequisite": "Proficiência com kusarigama",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon",
        "value": "kusarigama",
        "label": "Proficiência com kusarigama"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-magic-of-the-blade",
    "name": "Magia da Lâmina",
    "originalName": "Magic of the Blade",
    "aliases": [
      "Magic of the Blade"
    ],
    "sourcePage": 219,
    "category": "Geral",
    "description": "Você possui o poder de sincronizar magia e esgrima, recebendo os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Você aprende dois truques que exigem que realize um ataque desarmado ou um ataque corpo a corpo com uma arma que esteja empunhando como parte da conjuração da magia. Sua habilidade de conjuração para essas magias é Inteligência, Sabedoria ou Carisma, à sua escolha quando selecionar este talento.",
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
        "id": "cantrips",
        "label": "Truques compatíveis",
        "count": 2
      },
      {
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração",
        "count": 1,
        "options": [
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-martial-initiate",
    "name": "Iniciado Marcial",
    "originalName": "Martial Initiate",
    "aliases": [
      "Martial Initiate"
    ],
    "sourcePage": 219,
    "category": "Geral",
    "description": "Você estudou extensivamente a arte do combate, aperfeiçoando sua habilidade com uma arma favorita. Você recebe os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Você aprende duas técnicas avançadas de grau 1 à sua escolha de qualquer árvore de técnicas*. Você deve atender aos pré-requisitos dessas técnicas para aprendê-las.\n\n*Consulte Maestria Avançada de Armas, página 83.*",
    "prerequisite": "4º nível",
    "prerequisites": [
      {
        "type": "level",
        "minimum": 4,
        "label": "4º nível"
      }
    ],
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
        "id": "advanced-techniques",
        "label": "Técnicas avançadas de grau 1",
        "count": 2
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-multidisciplinary",
    "name": "Multidisciplinar",
    "originalName": "Multidisciplinary",
    "aliases": [
      "Multidisciplinary"
    ],
    "sourcePage": 219,
    "category": "Geral",
    "description": "Você é hábil em extrair recursos de disciplinas diferentes para empregar uma variedade de táticas, tanto em batalha quanto fora dela. Quando escolhe este talento e a cada vez que ganha seu 1º nível em uma nova classe, escolha um dos benefícios a seguir:\n\n• Você ganha proficiência em uma perícia e em um tipo de ferramentas de artesão à sua escolha.\n• Escolha uma proficiência em teste de resistência que a classe na qual você passou a ter níveis normalmente concederia no 1º nível. Você se torna proficiente nesse teste de resistência.",
    "prerequisite": "Ser um personagem multiclasse",
    "prerequisites": [
      {
        "type": "character-structure",
        "value": "multiclass",
        "label": "Ser um personagem multiclasse"
      }
    ],
    "choices": [
      {
        "id": "multidisciplinary-benefit",
        "label": "Benefício ao adquirir o talento ou entrar em uma nova classe",
        "count": 1,
        "options": [
          "Proficiência em 1 perícia e 1 ferramenta de artesão",
          "Proficiência em 1 teste de resistência da nova classe"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-prosthesis-adept",
    "name": "Adepto de Próteses",
    "originalName": "Prosthesis Adept",
    "aliases": [
      "Prosthesis Adept"
    ],
    "sourcePage": 219,
    "category": "Geral",
    "description": "Você pode fazer ajustes em sua prótese, manipulando seu funcionamento ao longo de uma hora, o que pode ser feito como parte de um descanso curto ou longo. Ao fazer isso, você a aprimora adicionando uma das propriedades a seguir:\n\n• Explosão (Blast; 1d6 de trovão, 6 m). A prótese recebe o golpe superior Piercing Shot (Disparo Perfurante).\n• Gancho (Hookshot; 9 m).\n• Integrada (Integrated; qualquer).\n• Lançamento (Launch; 1d6*, 9 m). A prótese recebe o golpe superior Battery Strike (Ataque em Bateria).\n• Corpo a Corpo (Melee; 1d8*, 1,5 m). A prótese recebe o golpe superior Reeling Blow (Golpe Desconcertante).\n• Mobilidade (Mobility; escalada ou natação, 9 m).\n\nA modificação permanece até você voltar a fazer ajustes em sua prótese.\n\n*Concussão, perfurante ou cortante, à sua escolha quando realizar esta modificação.*"
  },
  {
    "id": "ryoko-yokai-realms-prosthesis-fighting",
    "name": "Combate com Próteses",
    "originalName": "Prosthesis Fighting",
    "aliases": [
      "Prosthesis Fighting"
    ],
    "sourcePage": 220,
    "category": "Geral",
    "description": "Você é um mestre em empunhar próteses em batalha, recebendo os seguintes benefícios:\n\n• A distância dos ataques que você realiza usando a propriedade Explosão (Blast) ou Lançamento (Launch) de uma prótese aumenta em 3 metros.\n• O alcance de quaisquer ataques corpo a corpo que você realiza usando próteses com a propriedade Corpo a Corpo (Melee) aumenta em 1,5 metro.\n• Você causa um dado adicional de dano quando acerta um alvo usando a propriedade Explosão (Blast), Lançamento (Launch) ou Corpo a Corpo (Melee) de uma prótese."
  },
  {
    "id": "ryoko-yokai-realms-prosthesis-master",
    "name": "Mestre de Próteses",
    "originalName": "Prosthesis Master",
    "aliases": [
      "Prosthesis Master"
    ],
    "sourcePage": 220,
    "category": "Geral",
    "description": "Você praticou extensivamente com próteses mágicas, treinando mente e corpo para manejar a magia delas com a mesma naturalidade com que respira. Você recebe os seguintes benefícios:\n\n• Você é considerado proficiente com quaisquer ataques realizados usando uma prótese.\n• Você pode se sintonizar com uma prótese mágica sem que ela conte no número de itens mágicos com os quais pode se sintonizar.",
    "prerequisite": "8º nível",
    "prerequisites": [
      {
        "type": "level",
        "minimum": 8,
        "label": "8º nível"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-spirit-bonded",
    "name": "Vinculado a um Espírito",
    "originalName": "Spirit Bonded",
    "aliases": [
      "Spirit Bonded"
    ],
    "sourcePage": 220,
    "category": "Geral",
    "description": "Você formou uma amizade com um espírito que deseja agir como seu familiar.\n\nVocê aprende a magia Convocar Familiar e pode conjurá-la sem componentes nem gastar um espaço de magia. Quando a conjura dessa forma, seu familiar ignora a restrição que o impede de atacar. Depois de conjurar a magia com este talento, você não pode fazê-lo novamente até terminar um descanso longo.\n\nAo escolher este talento, escolha uma das seguintes formas de familiar: bancho-gama, betobeto-kun, kawawappa, ko-inari ou senryōka*. Você pode convocar seu familiar na forma escolhida ou em uma das formas listadas na descrição da magia.\n\nQuando convoca seu familiar na forma escolhida, ele recebe pontos de vida temporários iguais ao seu nível e a melhoria de 1º nível da árvore de melhorias dele. Quando você alcança o 5º nível, esses pontos de vida temporários são dobrados e você também pode conceder a ele uma das melhorias de 3º nível de sua árvore de melhorias.\n\n*Consulte Familiares, página 225.*",
    "choices": [
      {
        "id": "familiar-form",
        "label": "Forma especial do familiar",
        "count": 1,
        "options": [
          "bancho-gama",
          "betobeto-kun",
          "kawawappa",
          "ko-inari",
          "senryōka"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-tengu-training",
    "name": "Treinamento Tengu",
    "originalName": "Tengu Training",
    "aliases": [
      "Tengu Training"
    ],
    "sourcePage": 220,
    "category": "Geral",
    "description": "A tutela de um tengu hanataka, ou incontáveis horas de estudo cuidadoso de tratados hanataka sobre combate, concedeu a você os seguintes benefícios:\n\n• Aumente seu valor de Destreza ou Sabedoria em 1, até o máximo de 20.\n• Você ganha proficiência com uma arma de Acuidade à sua escolha.\n• Como uma reação, quando uma criatura erra você com um ataque corpo a corpo enquanto você estiver segurando uma arma de Acuidade, pode realizar um ataque com essa arma contra a criatura. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade",
        "count": 1,
        "options": [
          "Destreza",
          "Sabedoria"
        ]
      },
      {
        "id": "finesse-weapon",
        "label": "Arma com Acuidade",
        "count": 1
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-tessen-master",
    "name": "Mestre do Tessen",
    "originalName": "Tessen Master",
    "aliases": [
      "Tessen Master"
    ],
    "sourcePage": 220,
    "category": "Geral",
    "description": "Você aprendeu a manipular o tessen de novas maneiras, usando suas hastes pontiagudas como armas e arremessando-o contra inimigos à distância. Você recebe os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Para você, um tessen possui as propriedades Adaptável (Perfurante) e Arremesso (distância 6/18 m).\n• Enquanto empunha um tessen, você recebe uma reação adicional que pode realizar uma vez durante cada rodada. Essa reação só pode ser usada para tentar desviar um projétil com a propriedade Especial: Escudo de Leque do tessen, e você não pode usá-la no mesmo turno em que realiza sua reação normal.",
    "prerequisite": "Proficiência com tessen",
    "prerequisites": [
      {
        "type": "proficiency",
        "category": "weapon",
        "value": "tessen",
        "label": "Proficiência com tessen"
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
    "id": "ryoko-yokai-realms-adaptive-colouration",
    "name": "Coloração Adaptativa",
    "originalName": "Adaptive Colouration",
    "aliases": [
      "Adaptive Colouration"
    ],
    "sourcePage": 221,
    "category": "Racial",
    "description": "Você é capaz de alterar sua coloração, uma habilidade rara possuída por poucos de sua espécie, recebendo os seguintes benefícios:\n\n• Você tem vantagem em testes de Furtividade realizados para evitar ser visto.\n• Ao escolher este talento, escolha uma cor de seu traço Cor do Dragão Koi (Koi Dragon Colour). Quando usa seu traço Dragão Adormecido (Slumbering Dragon) ou Sopro Encorajador (Heartening Breath), você pode escolher fortalecer testes de habilidade, jogadas de ataque e testes de resistência associados à sua coloração primária ou à cor escolhida com este talento.",
    "prerequisite": "Tatsumi",
    "prerequisites": [
      {
        "type": "race",
        "value": "tatsumi",
        "label": "Tatsumi"
      }
    ],
    "choices": [
      {
        "id": "koi-dragon-colour",
        "label": "Cor do Dragão Koi adicional",
        "count": 1
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-draconic-fury",
    "name": "Fúria Dracônica",
    "originalName": "Draconic Fury",
    "aliases": [
      "Draconic Fury"
    ],
    "sourcePage": 221,
    "category": "Racial",
    "description": "Você aprendeu a canalizar sua energia dracônica em uma arma de sopro destrutiva, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Constituição em 1, até o máximo de 20.\n• Ao escolher este talento, escolha um tipo de dano entre ácido, frio, fogo, elétrico, veneno e trovão. Quando usa seu traço Sopro Encorajador (Heartening Breath), você pode optar por expelir, em vez disso, um cone de energia destrutiva de 9 metros. Cada criatura na área deve realizar um teste de resistência de Destreza (CD = 8 + seu modificador de Constituição + seu bônus de proficiência), sofrendo 1d12 de dano do tipo escolhido em caso de falha, ou metade desse dano em caso de sucesso. Esse dano aumenta em 1d12 quando você alcança o 5º nível (2d12), o 11º nível (3d12) e o 17º nível (4d12).",
    "prerequisite": "Tatsumi (ryūjin)",
    "prerequisites": [
      {
        "type": "race",
        "value": "tatsumi",
        "label": "Tatsumi"
      },
      {
        "type": "subrace",
        "value": "ryujin",
        "label": "Ryūjin"
      }
    ],
    "choices": [
      {
        "id": "damage-type",
        "label": "Tipo de dano",
        "count": 1,
        "options": [
          "ácido",
          "frio",
          "fogo",
          "elétrico",
          "veneno",
          "trovão"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-enkohs-might",
    "name": "Poderio do Enkoh",
    "originalName": "Enkoh’s Might",
    "aliases": [
      "Enkoh’s Might"
    ],
    "sourcePage": 221,
    "category": "Racial",
    "description": "Você possui força explosiva, impressionante até mesmo em comparação com seus parentes corpulentos, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Força em 1, até o máximo de 20.\n• Como uma ação bônus, você pode tentar empurrar uma criatura que não seja mais que uma categoria de tamanho maior que você e esteja ao seu alcance. Faça um teste de Força (Atletismo), resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo, à escolha dele. Se vencer a disputa, você derruba o alvo ou o empurra até 4,5 metros para longe. Você pode usar este talento um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "prerequisite": "Enkoh (Corpulento)",
    "originalPrerequisite": "Enkoh (hulking)",
    "prerequisites": [
      {
        "type": "race",
        "value": "enkoh",
        "label": "Enkoh"
      },
      {
        "type": "subrace",
        "value": "hulking",
        "label": "Corpulento (hulking)"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-gift-of-the-lion-turtle",
    "name": "Dádiva da Tartaruga-Leão",
    "originalName": "Gift of the Lion Turtle",
    "aliases": [
      "Gift of the Lion Turtle"
    ],
    "sourcePage": 221,
    "category": "Racial",
    "description": "Algumas tartarugas-leão, como você, são abençoadas com domínio incomum sobre suas capacidades telepáticas. Seu controle sobre esse poder concede os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Você pode conjurar as magias Detectar Pensamentos e Sugestão sem gastar um espaço de magia. Depois de conjurar Detectar Pensamentos ou Sugestão com este talento, você não pode conjurar essa mesma magia novamente por meio dele até terminar um descanso longo. Você também pode conjurar qualquer uma dessas magias usando quaisquer espaços de magia que possua do nível apropriado. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias quando você as conjura com este talento, à sua escolha quando selecionar o talento.",
    "prerequisite": "Ryokido",
    "prerequisites": [
      {
        "type": "race",
        "value": "ryokido",
        "label": "Ryokido"
      }
    ],
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
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração",
        "count": 1,
        "options": [
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-hanamori-physiology",
    "name": "Fisiologia Hanamori",
    "originalName": "Hanamori Physiology",
    "aliases": [
      "Hanamori Physiology"
    ],
    "sourcePage": 221,
    "category": "Racial",
    "description": "Sua fisiologia hanamori hiperativa faz com que seu corpo se adapte instantaneamente às mudanças do ambiente, recebendo os seguintes benefícios:\n\n• Você tem vantagem em testes de resistência para evitar exaustão causada pelo ambiente, como calor ou frio extremos.\n• Quando sofre dano de ácido, frio, fogo, elétrico ou trovão, você pode usar sua reação para ganhar resistência a esse tipo de dano, inclusive contra o dano desencadeador, até o fim do seu próximo turno. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "prerequisite": "Hanamori",
    "prerequisites": [
      {
        "type": "race",
        "value": "hanamori",
        "label": "Hanamori"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-haniwa-soulbinding",
    "name": "Vinculação de Alma Haniwa",
    "originalName": "Haniwa Soulbinding",
    "aliases": [
      "Haniwa Soulbinding"
    ],
    "sourcePage": 222,
    "category": "Racial",
    "description": "Sua magia inata de criação é potente o bastante para que você possa derramar mais de sua essência em seu companheiro de argila. Quando cria um companheiro, ele pode usar um dos seguintes blocos de estatísticas no lugar de um dos listados no traço Companheiro de Argila (Clay Companion): urso-negro, cabra gigante, polvo gigante ou cavalo de guerra.\n\nAo alcançar o 5º nível, você pode criar Companheiros de Argila que usem os blocos de estatísticas de lobo atroz, aranha gigante e sapo gigante.",
    "prerequisite": "Haniwa",
    "prerequisites": [
      {
        "type": "race",
        "value": "haniwa",
        "label": "Haniwa"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-isetsu-magic",
    "name": "Magia Isetsu",
    "originalName": "Isetsu Magic",
    "aliases": [
      "Isetsu Magic"
    ],
    "sourcePage": 222,
    "category": "Racial",
    "description": "Sua ligação com o oceano permite que você empunhe uma parcela de magia aquática, recebendo os seguintes benefícios:\n\n• Aumente um valor de habilidade à sua escolha em 1, até o máximo de 20.\n• Você aprende o truque Chicote de Água*.\n• Você pode conjurar as magias Correnteza* e Respirar na Água sem gastar um espaço de magia. Depois de conjurar Correnteza ou Respirar na Água com este talento, você não pode conjurar essa mesma magia novamente por meio dele até terminar um descanso longo. Você também pode conjurar qualquer uma dessas magias usando quaisquer espaços de magia que possua do nível apropriado.\n\nInteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias quando você as conjura com este talento, à sua escolha quando selecionar o talento.\n\n*Consulte o Capítulo 13 — Magias.*",
    "prerequisite": "Isetsu",
    "prerequisites": [
      {
        "type": "race",
        "value": "isetsu",
        "label": "Isetsu"
      }
    ],
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
        "id": "spellcasting-ability",
        "label": "Habilidade de conjuração",
        "count": 1,
        "options": [
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-karasu-trickery",
    "name": "Trapaça Karasu",
    "originalName": "Karasu Trickery",
    "aliases": [
      "Karasu Trickery"
    ],
    "sourcePage": 222,
    "category": "Racial",
    "description": "Você é um virtuose da travessura e da trapaça mesmo entre os karasu, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Carisma em 1, até o máximo de 20.\n• Sempre que você e pelo menos uma outra criatura que possa ver realizarem um teste de habilidade ou teste de resistência ao mesmo tempo — como ao rolar iniciativa, realizar um teste resistido ou fazer um teste de resistência contra uma área de efeito —, você pode trocar seu resultado no d20 pelo da outra criatura. Você recebe o resultado dela e ela recebe o seu. Depois de usar este benefício, você não pode usá-lo novamente até terminar um descanso curto ou longo.",
    "prerequisite": "Tengu (karasu)",
    "prerequisites": [
      {
        "type": "race",
        "value": "tengu",
        "label": "Tengu"
      },
      {
        "type": "subrace",
        "value": "karasu",
        "label": "Karasu"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-kitsunes-blessing",
    "name": "Bênção da Kitsune",
    "originalName": "Kitsune’s Blessing",
    "aliases": [
      "Kitsune’s Blessing"
    ],
    "sourcePage": 222,
    "category": "Racial",
    "description": "Você possui magia natural além daquela de uma kitsune típica. Você recebe os seguintes benefícios:\n\n• Você pode conjurar magias enquanto estiver transformado usando seu traço Metamorfo (Shapeshifter) sem exigir componentes materiais, a menos que eles tenham um custo em ouro.\n• Enquanto estiver transformado usando seu traço Metamorfo, você pode usar a mordida de sua forma de raposa para realizar ataques desarmados, usando Força ou Destreza para suas jogadas de ataque e dano. Quando acerta com ela, o ataque causa dano perfurante igual a 1d6 + seu modificador de Força ou Destreza, à sua escolha.\n• Você recebe a ação Ataques Múltiplos (Multiattack). Enquanto estiver transformado usando seu traço Metamorfo, pode usar uma ação para realizar um número de ataques desarmados igual à metade do seu bônus de proficiência, arredondado para cima.\n• Enquanto estiver transformado usando seu traço Metamorfo, sua CA é igual a 12 + seu modificador de Destreza.",
    "prerequisite": "Kitsune",
    "prerequisites": [
      {
        "type": "race",
        "value": "kitsune",
        "label": "Kitsune"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-oni-regeneration",
    "name": "Regeneração Oni",
    "originalName": "Oni Regeneration",
    "aliases": [
      "Oni Regeneration"
    ],
    "sourcePage": 222,
    "category": "Racial",
    "description": "A incrível fortitude e longevidade de seus ancestrais fluem por você, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Constituição em 1, até o máximo de 20.\n• Como uma reação quando sofre dano, você pode gastar uma quantidade de seus Dados de Vida de até seu bônus de proficiência para curar a si mesmo. Role os dados, adicione seu modificador de Constituição e recupere uma quantidade de pontos de vida igual ao total, com um mínimo de 1. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "prerequisite": "Oniborne",
    "prerequisites": [
      {
        "type": "race",
        "value": "oniborne",
        "label": "Oniborne"
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-seasonal-determinism",
    "name": "Determinismo Sazonal",
    "originalName": "Seasonal Determinism",
    "aliases": [
      "Seasonal Determinism"
    ],
    "sourcePage": 223,
    "category": "Racial",
    "description": "O estado do mundo no momento de seu nascimento deixou uma marca indelével em seu corpo. Escolha uma das estações em que você nasceu; você recebe os benefícios associados:\n\nPrimavera. Seu valor de Destreza aumenta em 1, até o máximo de 20. Além disso, seu deslocamento aumenta em 1,5 metro e você pode usar uma ação bônus para se preparar para se mover com um floreio ágil. Ao fazer isso, a próxima jogada de ataque realizada contra você antes do início do seu próximo turno tem desvantagem.\n\nVerão. Seu valor de Carisma aumenta em 1, até o máximo de 20. Além disso, você pode usar uma ação bônus para conceder a si mesmo vantagem na próxima jogada de ataque ou teste de habilidade que realizar antes do início do seu próximo turno. Você pode usar essa ação bônus um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.\n\nOutono. Seu valor de Sabedoria aumenta em 1, até o máximo de 20. Além disso, você possui visão no escuro com alcance de 9 metros e pode realizar a ação Esconder-se como uma ação bônus enquanto estiver em meia-luz ou escuridão. Se já possuir visão no escuro, seu alcance aumenta em 9 metros.\n\nInverno. Seu valor de Constituição aumenta em 1, até o máximo de 20. Além disso, quando cria um frasco mágico de água com seu traço Magia da Água (Water Magic), você pode escolher a opção a seguir como um efeito:\n\n• A água congela e crepita com magia de evocação. Quando uma criatura segurando o frasco realiza a ação Atacar, ela pode usar um ataque para arremessar o frasco contra um alvo a até 6 metros dela. A criatura realiza um ataque à distância contra o alvo, tratando o frasco como uma arma improvisada. Em um acerto, o frasco se estilhaça e o alvo sofre 1d8 de dano de frio. Se o alvo for uma criatura, seu deslocamento também é reduzido em 3 metros até o fim do próximo turno dela. A cruel magia de evocação que você imbui no frasco aumenta em potência conforme você sobe de nível. O dano de frio causado pelo frasco aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8).",
    "prerequisite": "Fuyōren",
    "prerequisites": [
      {
        "type": "race",
        "value": "fuyoren",
        "label": "Fuyōren"
      }
    ],
    "choices": [
      {
        "id": "season",
        "label": "Estação do nascimento",
        "count": 1,
        "options": [
          "Primavera",
          "Verão",
          "Outono",
          "Inverno"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-shadowmage",
    "name": "Mago das Sombras",
    "originalName": "Shadowmage",
    "aliases": [
      "Shadowmage"
    ],
    "sourcePage": 223,
    "category": "Racial",
    "description": "A magia yokai que flui por suas veias permite que você recorra a uma reserva de magia mais ampla do que a habitual para a maioria dos hanataka, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Inteligência, Sabedoria ou Carisma em 1, até o máximo de 20.\n• Você aprende dois truques à sua escolha da lista de magias de Druida ou Feiticeiro. Você pode conjurar esses truques sem quaisquer componentes de magia enquanto estiver em meia-luz ou escuridão. Sua habilidade de conjuração para essas magias é o valor de habilidade que você aumentou com este talento.",
    "prerequisite": "Tengu (hanataka)",
    "prerequisites": [
      {
        "type": "race",
        "value": "tengu",
        "label": "Tengu"
      },
      {
        "type": "subrace",
        "value": "hanataka",
        "label": "Hanataka"
      }
    ],
    "choices": [
      {
        "id": "ability",
        "label": "Aumento no Valor de Habilidade e habilidade de conjuração",
        "count": 1,
        "options": [
          "Inteligência",
          "Sabedoria",
          "Carisma"
        ]
      },
      {
        "id": "cantrips",
        "label": "Truques de Druida ou Feiticeiro",
        "count": 2,
        "sources": [
          "Druida",
          "Feiticeiro"
        ]
      }
    ]
  },
  {
    "id": "ryoko-yokai-realms-springtail-agility",
    "name": "Agilidade Cauda-de-Mola",
    "originalName": "Springtail Agility",
    "aliases": [
      "Springtail Agility"
    ],
    "sourcePage": 223,
    "category": "Racial",
    "description": "Você é incomumente ágil e habilidoso, mesmo em comparação com seus parentes cauda-de-mola, recebendo os seguintes benefícios:\n\n• Aumente seu valor de Destreza em 1, até o máximo de 20.\n• Como uma ação bônus, você pode saltar uma quantidade de metros igual a 1,5 vezes seu bônus de proficiência. Esse salto não consome seu deslocamento, mas seu deslocamento deve ser maior que 0, e o salto não provoca ataques de oportunidade. Você pode usar este benefício um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao terminar um descanso longo.",
    "prerequisite": "Enkoh (Cauda-de-Mola)",
    "originalPrerequisite": "Enkoh (springtail)",
    "prerequisites": [
      {
        "type": "race",
        "value": "enkoh",
        "label": "Enkoh"
      },
      {
        "type": "subrace",
        "value": "springtail",
        "label": "Cauda-de-Mola (springtail)"
      }
    ]
  }
].map(feat => ({ ...feat, sourceId: 'ryoko-yokai-realms' }));

  registry.registerFeatCatalog({
    id: 'ryoko-yokai-realms-feats',
    sourceId: 'ryoko-yokai-realms',
    label: "Ryoko's Guide to the Yokai Realms",
    chapter: 'Capítulo 10 — Antecedentes e Talentos',
    pages: '216–223',
    feats
  });
})(window.GRIMORIO_REGISTRY);
