'use strict';

(function () {
  const subclasses = [
  {
    "id": "zagalhta-dragoneer-auraphage",
    "classId": "dragoneer",
    "name": "Aurófago",
    "originalName": "Auraphage",
    "aliases": [
      "Auraphage"
    ],
    "desc": "Um canalizador que oferece corpo e mente como combustível para domar a fornalha arcana de uma alma dracônica, usando Magia de Pacto e forçando a própria magia além dos limites.",
    "sourcePage": 121,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "121–122",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "BRASA E COMBUSTÃO",
        "level": 1,
        "page": 121,
        "text": "Ao conjurar uma magia usando um Espaço de Magia de Cavaleiro Dracônico, role 1d100. Se o resultado for igual ou menor que seu nível de Cavaleiro Dracônico + 10, o espaço não é consumido.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PODER DA CONEXÃO",
        "level": 3,
        "page": 121,
        "text": "Você pode concentrar-se simultaneamente em uma segunda magia ou efeito. Os dois efeitos compartilham a mesma verificação de concentração: uma única rolagem é feita e ambos têm sucesso ou falham juntos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EXPLOSÃO ENCADEADA",
        "level": 7,
        "page": 121,
        "text": "Quando substituir um ataque por uma magia através de Ação Encadeada, pode conjurar uma magia de nível igual ou inferior à metade do nível do Espaço usado, tratada como conjurada no nível-base. Se fizer isso, pode substituir um segundo ataque da mesma Ação Encadeada por outra magia de 1 ação sob a mesma regra.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 13,
        "page": 121,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ARCANA VENENOSA",
        "level": 17,
        "page": 122,
        "text": "Quando uma criatura o acerta com um ataque a até 9 m, ela sofre 1d10 de dano de Encarnação. Esse dano ignora Limiares de Dano e resistências, mas não imunidades.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 121,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d8",
            "saves": "Sabedoria, Carisma",
            "weapons": "Todas as armas simples",
            "armor": "Leves e médias",
            "skills": "Religião; escolha duas entre Arcanismo, Enganação, História, Intimidação, Investigação e Natureza",
            "casting": "Conjurador de Combustão (lista do Bruxo)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-bloodweaver",
    "classId": "dragoneer",
    "name": "Tecelão de Sangue",
    "originalName": "Bloodweaver",
    "aliases": [
      "Bloodweaver"
    ],
    "desc": "Um conjurador que imita o poder mágico do sangue dracônico, usando cada magia para restaurar o corpo, manipular Metamagia e projetar o espírito do dragão contra os inimigos.",
    "sourcePage": 122,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "122",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "AURA RESTAURADORA DO ESPÍRITO",
        "level": 1,
        "page": 122,
        "text": "Sempre que conjurar uma magia de Cavaleiro Dracônico, recupere PV iguais a duas vezes o nível do Espaço gasto. Se a magia tiver nível mas não gastar espaço, recupere PV iguais ao nível-base dela.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "METAFEITIÇARIA",
        "level": 3,
        "page": 122,
        "text": "Escolha duas opções de Metamagia de Feiticeiro. Você as aprende e possui Pontos de Feitiçaria iguais ao nível do maior Espaço de Magia de Cavaleiro Dracônico que possui, recuperados em Descanso Longo. Ao ganhar nível de Cavaleiro Dracônico, pode trocar uma opção de Metamagia.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VÍNCULO DRACÔNICO",
        "level": 7,
        "page": 122,
        "text": "Como ação bônus, gaste um Espaço de Magia para manifestar o espírito semicorpóreo de um dragão Imenso. Ele faz um ataque com seu bônus de ataque de magia contra um alvo a até 18 m; se acertar, o alvo fica impedido até o fim do próximo turno dele e sofre 1d8 de dano de Encarnação por nível do Espaço gasto.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "BÔNUS DO CAVALEIRO DRACÔNICO",
        "level": 13,
        "page": 122,
        "text": "Quando conjurar uma magia de Cavaleiro Dracônico que não possua efeito de Bônus do Cavaleiro Dracônico, ela é tratada como se o Espaço usado fosse um nível superior.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RITUAL DE SANGRIA",
        "level": 17,
        "page": 122,
        "text": "Ao conjurar uma magia, pode renunciar à cura de Aura Restauradora do Espírito e adicionar esse valor à primeira rolagem de dano que a magia causar a cada alvo. Se a magia tiver um único alvo, use o valor completo; se puder atingir vários, adicione metade a cada um.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 122,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d6",
            "saves": "Constituição, Sabedoria",
            "weapons": "Todas as armas simples",
            "armor": "Leves e médias",
            "skills": "Arcanismo; escolha uma entre Enganação, Intuição, Intimidação, Persuasão e Religião",
            "casting": "Conjurador Pleno (lista do Feiticeiro)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-breaking-dynamo",
    "classId": "dragoneer",
    "name": "Dínamo Rompedor",
    "originalName": "Breaking Dynamo",
    "aliases": [
      "Breaking Dynamo"
    ],
    "desc": "Um guerreiro galante que canaliza o orgulho e a força implacável de um dragão, força confrontos diretos e converte falhas defensivas em ímpeto ofensivo.",
    "sourcePage": 122,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "122–123",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 1,
        "page": 122,
        "text": "Você obtém acerto crítico com resultado 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FOCO FRONTAL",
        "level": 3,
        "page": 122,
        "text": "Quando for atingido por um ataque vindo de mais de 3 m de distância, enquanto não estiver incapacitado sua CA contra esse ataque recebe bônus igual à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CARGA IRASEDA",
        "level": 7,
        "page": 122,
        "text": "Ao falhar numa salvaguarda, recebe 1 ponto de Ira por 1 minuto, até o máximo da proficiência. Ao fazer um ataque de arma, pode gastar 1 ponto para somar sua proficiência uma segunda vez à jogada e, se acertar, também ao dano.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DO ATAQUE ENCADEADO",
        "level": 13,
        "page": 123,
        "text": "Ao realizar a ação Atacar, pode atacar três vezes. Um desses ataques pode ser substituído pela conjuração de uma magia de Cavaleiro Dracônico com tempo de 1 ação.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ATAQUE ENCADEADO ENCARNADO",
        "level": 17,
        "page": 123,
        "text": "Ao realizar a ação Atacar, pode atacar quatro vezes, substituindo um ataque por uma magia de Cavaleiro Dracônico de 1 ação. Além disso, Golpe Encarnado passa a causar um dado adicional de dano de arma.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 122,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d10",
            "saves": "Força, Sabedoria",
            "weapons": "Todas as armas simples e marciais",
            "armor": "Leves, médias e escudos",
            "skills": "Atletismo; escolha uma entre Acrobacia, Adestrar Animais, História, Intuição, Intimidação, Percepção e Sobrevivência",
            "casting": "Um-Terço de Conjurador"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-child-of-fate",
    "classId": "dragoneer",
    "name": "Filho do Destino",
    "originalName": "Child of Fate",
    "aliases": [
      "Child of Fate"
    ],
    "desc": "Marcado por profecia ou destino predeterminado, é protegido pela própria casualidade e converte essa bênção em luz restauradora para manter a si e aos aliados no caminho previsto.",
    "sourcePage": 123,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "123–124",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "ALÍVIO SAGRADO",
        "level": 1,
        "page": 123,
        "text": "Uma vez por Descanso, como ação bônus, toque uma criatura e cure Xd6, onde X é seu nível de Cavaleiro Dracônico. Antes de rolar, pode remover um ou mais d6; para cada dado removido, escolha um efeito no mesmo alvo: remover 1 Fadiga de Combate; se estiver Morrendo, encerrar a condição e restaurar 1 PV; encerrar um efeito que cause cego, surdo, envenenado ou paralisado; ou conceder 1d6 PV temporários.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ORDENAÇÃO DO DESTINO",
        "level": 3,
        "page": 123,
        "text": "Quando o resultado natural de um d20 em ataque, teste ou salvaguarda for menor que sua proficiência, role um novo d20 e use obrigatoriamente o novo resultado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CONJURAÇÃO APRIMORADA",
        "level": 7,
        "page": 123,
        "text": "Sempre que rolar dano de uma magia de Cavaleiro Dracônico, adicione metade de seu nível de Cavaleiro Dracônico ao dano.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PROTEÇÃO DO DRAGÃO",
        "level": 13,
        "page": 124,
        "text": "Uma vez por Descanso Longo, quando for reduzido a 0 PV, use sua reação e role duas vezes uma quantidade de d6 igual à metade do nível de Cavaleiro Dracônico. Em vez de cair a 0, recupere o primeiro total como PV e receba o segundo total como PV temporários.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EVASÃO",
        "level": 17,
        "page": 124,
        "text": "Quando fizer uma salvaguarda para sofrer metade do dano, não sofre dano em sucesso e sofre metade em falha.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 123,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d6",
            "saves": "Sabedoria, Carisma",
            "weapons": "Todas as armas simples",
            "armor": "Leves e médias",
            "skills": "Medicina; escolha uma entre História, Intuição, Persuasão e Religião",
            "casting": "Conjurador Pleno (lista do Clérigo)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-demon-dancer",
    "classId": "dragoneer",
    "name": "Dançarino Demoníaco",
    "originalName": "Demon Dancer",
    "aliases": [
      "Demon Dancer"
    ],
    "desc": "Um duelista refinado que transforma os impulsos violentos do espírito dracônico em golpes cirúrgicos, visão demoníaca e uma mortalha de escuridão protetora.",
    "sourcePage": 124,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "124",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "DARDO FAMINTO",
        "level": 1,
        "page": 124,
        "text": "Na primeira vez que acertar uma criatura com ataque corpo a corpo em cada turno, recebe PV temporários iguais à metade do dano causado. Se for crítico, recupera esse valor como PV; qualquer cura excedente vira PV temporários.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VISÃO DIABÓLICA",
        "level": 3,
        "page": 124,
        "text": "Você enxerga em escuridão mágica e não mágica como luz plena a 4,5 m × sua proficiência. Se outra fonte conceder visão diabólica maior, aumente o alcance daquela fonte em metade do alcance desta característica.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GOLPE MATADOR",
        "level": 7,
        "page": 124,
        "text": "Ao fazer um ataque de arma, pode gastar um Espaço de Magia de Cavaleiro Dracônico: adicione o nível do Espaço ao ataque e, se acertar, cause +1d6 de dano de Encarnação por nível do Espaço.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GOLPE TERRÍVEL",
        "level": 13,
        "page": 124,
        "text": "Como ação bônus, faça dois ataques de arma com uma arma Leve ou de Acuidade.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VÉU DA BESTA NEGRA",
        "level": 13,
        "page": 124,
        "text": "Como ação bônus, crie por 1 minuto uma mortalha de escuridão. Ataques contra você têm desvantagem; no início de cada turno seu voo laborioso é convertido automaticamente em voo normal; você tem vantagem em Furtividade e Intimidação; em escuridão total é considerado invisível. Usos por Descanso Longo iguais à metade da proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "DARDO VORAZ",
        "level": 17,
        "page": 124,
        "text": "Dardo Faminto passa a conceder PV/PV temporários iguais ao dano total causado, em vez de metade.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 124,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d8",
            "saves": "Destreza, Sabedoria",
            "weapons": "Todas as armas simples, Leves e de Acuidade",
            "armor": "Leves e médias",
            "skills": "Acrobacia; escolha outras quatro perícias",
            "casting": "Um-Terço de Conjurador (lista do Bruxo)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-echoing-voice",
    "classId": "dragoneer",
    "name": "Voz Ecoante",
    "originalName": "Echoing Voice",
    "aliases": [
      "Echoing Voice"
    ],
    "desc": "Um estudioso da potência arcana da alma dracônica que projeta ecos de si, pronuncia nomes dracônicos para ampliar magias e atravessa defesas mágicas por pura autoridade arcana.",
    "sourcePage": 124,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "124–125",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "ARCO SELADOR",
        "level": 1,
        "page": 124,
        "text": "Pode produzir os efeitos de escudo sem Espaço de Magia nem componentes, duas vezes por Descanso. Os usos aumentam para três no 7º nível e quatro no 13º.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ESPÍRITO ECO",
        "level": 3,
        "page": 124,
        "text": "Ao conjurar uma magia de Cavaleiro Dracônico, pode projetar uma cópia de si a até 9 m e fazer a magia se originar do eco. No fim do turno, o eco desaparece; efeitos contínuos com alcance Pessoal voltam a ser centrados em você.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MAGIA EXPLOSIVA",
        "level": 7,
        "page": 125,
        "text": "Ao conjurar uma magia acima do nível-base e realizar componentes vocais, você pode tratar a magia como se tivesse opções adicionais de níveis superiores: aumentar a CD da primeira salvaguarda de cada criatura em +1 por 1 nível, +2 por 3 níveis ou +3 por 5 níveis; conceder +1 a ataques feitos pela magia no turno de conjuração; ou converter todo o dano da magia para seu tipo de Encarnação.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ARMA DE SANGUE DE WYRM",
        "level": 13,
        "page": 125,
        "text": "Uma vez por Descanso, produz espada do arquimago sem gastar Espaço nem componentes materiais. A espada pode causar seu tipo de dano de Encarnação em vez de força.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CONTORNO DRACÔNICO",
        "level": 17,
        "page": 125,
        "text": "Suas magias ignoram características que concedam vantagem em salvaguardas contra efeitos mágicos, salvo se a característica negar completamente o efeito ou tornar o alvo automaticamente imune a ele.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 124,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d8",
            "saves": "Inteligência, Sabedoria",
            "weapons": "Todas as armas simples",
            "armor": "Leves e médias",
            "skills": "Arcanismo; escolha uma entre História, Intuição, Investigação, Medicina e Religião",
            "casting": "Meio Conjurador (lista do Mago)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-piercing-hand",
    "classId": "dragoneer",
    "name": "Mão Perfurante",
    "originalName": "Piercing Hand",
    "aliases": [
      "Piercing Hand"
    ],
    "desc": "Arqueiro de olho dracônico que transforma vantagem tática em precisão absoluta, ataca como um assassino e culmina na visão verdadeira de um dragão.",
    "sourcePage": 125,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "125",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "CONVERTER VANTAGEM",
        "level": 1,
        "page": 125,
        "text": "Quando tiver vantagem em uma jogada de ataque, pode abrir mão da vantagem e receber +5 na jogada em vez disso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GOLPE DE MATILHA",
        "level": 3,
        "page": 125,
        "text": "Se o alvo estiver ao alcance corpo a corpo de um de seus aliados, seus ataques contra ele têm vantagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SENTENÇA DO ADJUDICADOR",
        "level": 7,
        "page": 125,
        "text": "Uma vez por turno, quando abrir mão da vantagem usando Converter Vantagem e acertar, cause +2d8 de dano de Encarnação. O dano aumenta em +1d8 no 13º nível e +1d8 no 17º.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AMPLIAR PREPARAÇÕES",
        "level": 13,
        "page": 125,
        "text": "Escolha uma salvaguarda na qual ainda não seja proficiente; você se torna proficiente nela.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "OLHO DO DRAGÃO",
        "level": 17,
        "page": 125,
        "text": "Você recebe visão verdadeira a 18 m. Ao atacar criatura invisível dentro do alcance normal da arma, trata-a como claramente visível. Seus ataques ignoram qualquer cobertura que não seja cobertura total.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 125,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d10",
            "saves": "Destreza, Sabedoria",
            "weapons": "Todas as armas simples e armas à distância",
            "armor": "Leves e médias",
            "skills": "Percepção; escolha duas entre Adestrar Animais, Atletismo, Intuição, Investigação, Natureza, Furtividade e Sobrevivência",
            "casting": "Meio Conjurador (lista do Patrulheiro)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-raging-titan",
    "classId": "dragoneer",
    "name": "Titã Furioso",
    "originalName": "Raging Titan",
    "aliases": [
      "Raging Titan"
    ],
    "desc": "Um Cavaleiro Dracônico que abandona a conjuração em favor da força, resistência e poder destrutivo bruto de um dragão, chegando a sobreviver a golpes que deveriam matá-lo.",
    "sourcePage": 126,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "126",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "LUTA IMPRUDENTE",
        "level": 1,
        "page": 126,
        "text": "Você recebe o Estilo de Luta Lutador Imprudente. Ele é aprimorado automaticamente uma vez no 7º nível e novamente no 13º; se não puder ser aprimorado, escolha outro Estilo de Luta de Cavaleiro Dracônico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FORÇA DE TITÃ",
        "level": 1,
        "page": 126,
        "text": "Seus ataques ignoram resistências causadas por diferença de tamanho; pode Empurrar e Agarrar criaturas maiores que você em uma quantidade de categorias de tamanho igual à proficiência; e sua capacidade de carga é dobrada.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ROBUSTEZ ESPIRITUAL",
        "level": 3,
        "page": 126,
        "text": "Quando sofre dano, reduza separadamente cada tipo de dano envolvido por uma quantidade igual à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GOLPES GRANDIOSOS",
        "level": 7,
        "page": 126,
        "text": "Quando tiver vantagem num ataque com arma corpo a corpo Pesada ou de Duas Mãos, ao acertar cause um dado de dano adicional da arma.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ATAQUE EXTRA APRIMORADO",
        "level": 13,
        "page": 126,
        "text": "Ao realizar a ação Atacar, pode atacar três vezes em vez de uma.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "IMPULSO MÁXIMO",
        "level": 17,
        "page": 126,
        "text": "Uma vez por Descanso Longo, quando for reduzido a 0 PV ou morto instantaneamente, seus PV são definidos para seu nível de Cavaleiro Dracônico e você recebe PV temporários iguais à metade de seus PV máximos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 126,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d12",
            "saves": "Força, Sabedoria",
            "weapons": "Todas as armas simples e marciais",
            "armor": "Leves",
            "skills": "Atletismo; escolha uma entre Adestrar Animais, Intimidação, Natureza, Percepção e Sobrevivência",
            "casting": "Nenhuma"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-dragoneer-royal-sweeper",
    "classId": "dragoneer",
    "name": "Varredor Real",
    "originalName": "Royal Sweeper",
    "aliases": [
      "Royal Sweeper"
    ],
    "desc": "Um símbolo de autoridade que ganha ímpeto derrubando inimigos, inspira aliados e intercepta golpes destinados a eles enquanto avança com postura de comandante.",
    "sourcePage": 126,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "126–127",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "DANÇA ENCADEADA",
        "level": 1,
        "page": 126,
        "text": "Uma vez por turno, ao reduzir uma criatura a 0 PV como resultado imediato de uma ação sua, escolha: fazer imediatamente um ataque de arma com vantagem contra outro alvo ao alcance; ou, antes do fim do turno, usar ação bônus para fazer dois ataques de arma adicionais contra um único alvo ao alcance.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GRITO DE REDEMOINHO",
        "level": 3,
        "page": 126,
        "text": "Como ação, faça um ataque com a mesma arma contra cada criatura à sua escolha dentro do alcance dela. Usos por Descanso Longo iguais à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "NEGAR A PERDA",
        "level": 7,
        "page": 126,
        "text": "Quando um aliado ao alcance da arma que você empunha seria atingido por um ataque visível, use reação para redirecioná-lo a você; ele acerta automaticamente e o dano é reduzido pela metade de seu nível de Cavaleiro Dracônico. Pode fazer o mesmo sem reação gastando um Espaço de Magia; nesse caso reduza ainda o dano em 1d8 × nível do Espaço.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DO ATAQUE ENCADEADO",
        "level": 13,
        "page": 126,
        "text": "Ao realizar a ação Atacar, pode atacar três vezes, substituindo um deles por uma magia de Cavaleiro Dracônico de 1 ação.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AUTORIDADE DO COMANDANTE",
        "level": 17,
        "page": 127,
        "text": "Você e criaturas a até 4,5 m são imunes a amedrontado e enfurecido, mantendo a imunidade até terminar um turno fora da área. Enquanto não estiver incapacitado, você e cada criatura na área recebem +2 no primeiro ataque e na primeira salvaguarda que fizerem em cada turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros da Especialização",
        "page": 126,
        "columns": [
          {
            "key": "hit",
            "label": "Dado de Vida"
          },
          {
            "key": "saves",
            "label": "Salvaguardas"
          },
          {
            "key": "weapons",
            "label": "Armas"
          },
          {
            "key": "armor",
            "label": "Armaduras"
          },
          {
            "key": "skills",
            "label": "Perícias"
          },
          {
            "key": "casting",
            "label": "Conjuração"
          }
        ],
        "rows": [
          {
            "hit": "d10",
            "saves": "Sabedoria, Carisma",
            "weapons": "Todas as armas simples e marciais",
            "armor": "Todas as armaduras e escudos",
            "skills": "Persuasão; escolha uma entre Atletismo, Intuição, Intimidação, Medicina e Religião",
            "casting": "Meio Conjurador (lista do Paladino)"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-frame-pilot-coordinator",
    "classId": "frame-pilot",
    "name": "Coordenador",
    "originalName": "Coordinator",
    "aliases": [
      "Coordinator"
    ],
    "desc": "Um piloto de talento intuitivo que confia num sexto sentido para extrair ações extras, neutralizar limitações de tamanho, purgar falhas de sistema e contra-atacar no instante em que o inimigo erra.",
    "sourcePage": 134,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "134",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "CÁLCULOS AVANÇADOS",
        "level": 3,
        "page": 134,
        "text": "No seu turno ou no turno da unidade frame, faça a unidade realizar uma segunda Ação depois da primeira. Se usar em seu próprio turno enquanto a pilota, essa segunda ação pode ser o Multiataque da unidade. Uma vez por Descanso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MACRORREDIRECIONAMENTO",
        "level": 3,
        "page": 134,
        "text": "Quando você ou a unidade pilotada sofrer desvantagem de uma regra por causa do tamanho, é considerado um número de categorias de tamanho maior igual à metade de sua proficiência para aquela regra. Não se aplica a agarrões recebidos ou realizados.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SISTEMA DE PURGA",
        "level": 7,
        "page": 134,
        "text": "Como ação, encerre um efeito na unidade frame que esteja causando lento, incapacitado, incendiado, enfeitiçado, amedrontado, impedido, agarrado ou atordoado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "INTUIÇÃO TIPO ZERO",
        "level": 11,
        "page": 134,
        "text": "Quando você ou sua unidade frame fizer uma salvaguarda para sofrer metade do dano, não sofre dano em sucesso e sofre metade em falha.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CONTRA-ATAQUE TOTAL",
        "level": 16,
        "page": 134,
        "text": "Quando uma criatura errar um ataque contra você ou a unidade pilotada, use reação para fazer um ataque de arma contra ela se estiver ao alcance. Se acertar, além do dano normal, o atacante tem desvantagem em ataques contra você até o início de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-frame-pilot-skirmisher",
    "classId": "frame-pilot",
    "name": "Escaramuçador",
    "originalName": "Skirmisher",
    "aliases": [
      "Skirmisher"
    ],
    "desc": "Especialista em entrar e sair das linhas inimigas, atacar de posições difíceis e tornar até uma unidade frame gigantesca surpreendentemente móvel.",
    "sourcePage": 135,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "135",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "ESPECIALISTA EM ACELERAÇÃO",
        "level": 3,
        "page": 135,
        "text": "Toda unidade frame que você pilota aumenta cada deslocamento em 1,5 m × sua proficiência; aceleração 0-G aumenta pelo dobro disso. Como ação bônus, pode fazer a unidade Desengajar ou Disparar.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TÁTICAS DE PINÇA",
        "level": 7,
        "page": 135,
        "text": "Quando a unidade ataca um alvo que esteja ao alcance corpo a corpo de um aliado, pode atacar com vantagem, salvo se o aliado for três ou mais categorias menor que o alvo. Uma vez por turno, ao acertar criatura contra a qual tinha vantagem, pode adicionar uma quantidade de dados de dano ao ataque igual à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EVASÃO",
        "level": 11,
        "page": 135,
        "text": "Quando a unidade frame fizer salvaguarda de Destreza para sofrer metade do dano, sofre 0 em sucesso e metade em falha.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TÉCNICA ESPECIALISTA",
        "level": 11,
        "page": 135,
        "text": "Quando a unidade que pilota fizer ataque, teste ou salvaguarda, pode adicionar ao resultado a proficiência completa que ainda não estiver sendo aplicada — a sua ou a da unidade. Até o fim do turno, rolagens daquele mesmo tipo mantêm o bônus. Usos por Descanso Longo iguais à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FANTASMA DE IMPULSO",
        "level": 16,
        "page": 135,
        "text": "Ao usar Impulso de Frame para impedir que a unidade caia a 0 PV, teleporte-a imediatamente para espaço a até 6 m × a Pegada (Footprint) da unidade. Ela chega invisível e permanece assim até o fim de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-frame-pilot-strike-soldier",
    "classId": "frame-pilot",
    "name": "Soldado de Assalto",
    "originalName": "Strike Soldier",
    "aliases": [
      "Strike Soldier"
    ],
    "desc": "Soldado direto e agressivo que extrai a máxima capacidade ofensiva de uma unidade frame, combina ataques pessoais e da máquina e transforma erros em novas tentativas.",
    "sourcePage": 136,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "136",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "ATAQUES DE FRAME",
        "level": 3,
        "page": 136,
        "text": "Você pode usar o Multiataque da unidade frame por meio de sua própria ação. Além disso, como ação bônus, pode fazer a unidade realizar um ataque de arma contra um alvo ao alcance.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CARGA DE CHOQUE",
        "level": 3,
        "page": 136,
        "text": "Ao falhar numa salvaguarda ou teste, pode gastar uma Carga Arcana para rolar novo d20 e substituir o resultado original. Só uma vez por rolagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CRÍTICO APRIMORADO (FRAME)",
        "level": 7,
        "page": 136,
        "text": "Você e qualquer unidade frame que pilota obtêm crítico em 19 ou 20. Quando a unidade obtém crítico dessa forma, causa dano adicional igual ao seu nível de Piloto de Frame.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 11,
        "page": 136,
        "text": "Ao realizar a ação Atacar, pode atacar três vezes em vez de uma.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "COMPENSAÇÃO",
        "level": 16,
        "page": 136,
        "text": "Na primeira vez que errar uma jogada de ataque em cada turno, pode tratar o resultado do d20 como 10, possivelmente alterando o resultado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-frame-pilot-technoloader",
    "classId": "frame-pilot",
    "name": "Tecnocarregador",
    "originalName": "Technoloader",
    "aliases": [
      "Technoloader"
    ],
    "desc": "Um especialista em equipamento que amplia UP-LOAD, contramedidas, casco e sistemas defensivos para processar mais recursos do que uma unidade frame normalmente suportaria.",
    "sourcePage": 136,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "136",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "CAPACIDADE AVANÇADA",
        "level": 3,
        "page": 136,
        "text": "O limite de UP-LOAD de qualquer unidade frame que você pilota aumenta em uma quantidade igual à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CONTRAMEDIDAS",
        "level": 7,
        "page": 136,
        "text": "Ao ser atingido por ataque de arma, pode aumentar sua CA até o fim do turno em metade da proficiência e a CA da unidade pilotada em sua proficiência completa. Usos por Descanso Longo iguais à metade do nível de Piloto de Frame.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CASCO REFORÇADO",
        "level": 11,
        "page": 136,
        "text": "A unidade frame que você pilota recebe o melhor entre: seu Limiar de Dano torna-se igual ao seu nível total; ou seu Limiar de Dano aumenta em metade do seu nível total.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MAESTRIA DO IMPULSO DE FRAME",
        "level": 16,
        "page": 136,
        "text": "Quando Impulso de Frame evita que a unidade caia a 0 PV, os PV temporários concedidos são dobrados. Enquanto esses PV temporários existirem, a unidade tem vantagem no primeiro ataque e na primeira salvaguarda de cada turno, controlados separadamente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-frame-pilot-vortex-manipulator",
    "classId": "frame-pilot",
    "name": "Manipulador de Vórtice",
    "originalName": "Vortex Manipulator",
    "aliases": [
      "Vortex Manipulator"
    ],
    "desc": "Piloto que usa tecnologia de teleporte para deslocar sua unidade, conjurar Astromancia através dela, atacar a distância por saltos espaciais e envolver o frame numa anomalia probabilística.",
    "sourcePage": 137,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "137",
      "chapter": "Capítulo 6: Opções de Classe"
    },
    "features": [
      {
        "title": "TRANSMISSOR DE DOBRA",
        "level": 3,
        "page": 137,
        "text": "Como ação em seu turno (não no turno da unidade), teleporte a unidade para espaço desocupado dentro do maior deslocamento dela, sem exceder o movimento restante. Depois do teleporte, todo o movimento da unidade é considerado gasto.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FEITIÇARIA ASTRAL",
        "level": 7,
        "page": 137,
        "text": "Escolha magias de Astromancia cuja soma dos níveis-base seja igual ou menor que seu nível total. Você as aprende. Além de espaços normais, pode conjurá-las através de uma unidade frame gastando usos desta característica, sem espaço nem componentes, em nível igual ao maior bônus de proficiência entre você e a unidade ou ao nível-base da magia, o que for maior. Use Inteligência, Sabedoria ou Carisma. Usos por Descanso Longo iguais à proficiência; magias de 4º nível ou mais custam 2 usos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GOLPE TELEPORTANTE",
        "level": 11,
        "page": 137,
        "text": "Quando você ou a unidade fizer a ação Atacar ou Multiataque, a unidade pode realizar um de seus ataques corpo a corpo contra alvo a até 9 m × a Pegada da unidade. Ela teleporta para espaço adjacente ao alvo, realiza o ataque e volta ao espaço de origem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MORTALHA DE ANOMALIA ESTELAR",
        "level": 16,
        "page": 137,
        "text": "Enquanto a unidade não estiver incapacitada, projeta um campo que torna sua posição espacial incerta: ataques de arma contra ela têm desvantagem. Visão verdadeira ignora o efeito; previsão também o ignora. O campo não é considerado ilusão.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  const seen = new Set(window.GRIMORIO_SUBCLASSES.map(item => item.id));
  for (const item of subclasses) { if (!seen.has(item.id)) { window.GRIMORIO_SUBCLASSES.push(item); seen.add(item.id); } }
})();
