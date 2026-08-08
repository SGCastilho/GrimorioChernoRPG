'use strict';

(function () {
  const subclasses = [
  {
    "id": "ryoko-bender-ferocity",
    "classId": "bender-ryoko",
    "name": "Discípulo da Ferocidade",
    "originalName": "Disciple of Ferocity",
    "aliases": [
      "Disciple of Ferocity",
      "Discípulo da Ferocidade"
    ],
    "desc": "Um Dobrador ofensivo que transforma os elementos em armas, domina armaduras e armas marciais e converte espaços de magia em explosões de dano elemental.",
    "sourcePage": 166,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "166–167",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS MARCIAIS",
        "level": 3,
        "page": 167,
        "text": "Você ganha proficiência com armaduras médias, escudos e armas marciais e pode usar qualquer arma com a qual seja proficiente como foco de conjuração de Dobrador.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONDUTO ELEMENTAL",
        "level": 3,
        "page": 167,
        "text": "Você pode usar sua habilidade de conjuração de Dobrador no lugar de Força ou Destreza nas jogadas de ataque e dano com armas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "NATUREZA DESTRUTIVA",
        "level": 7,
        "page": 167,
        "text": "Uma vez por turno, ao acertar uma criatura com um ataque, gaste um espaço de magia para causar dano adicional de um tipo ligado a uma Afinidade Elemental: 2d8 com espaço de 1º nível + 1d8 por nível acima do 1º, máximo 6d8.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FEROCIDADE ELEMENTAL",
        "level": 15,
        "page": 167,
        "text": "O dano de seu Combo Elemental passa a 5d4.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "BATERIA PRIMORDIAL",
        "level": 20,
        "page": 167,
        "text": "Você pode atacar três vezes sempre que realiza a ação Atacar.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias Bônus da Ferocidade",
        "page": 167,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Dobrador"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Mísseis Mágicos (dano passa a um tipo de Afinidade)"
          },
          {
            "nivel": "5º",
            "magias": "Arma Mágica"
          },
          {
            "nivel": "9º",
            "magias": "Piscar (Plano Elemental de Fronteira da Afinidade)"
          },
          {
            "nivel": "13º",
            "magias": "Guardião da Fé (dano passa a um tipo de Afinidade)"
          },
          {
            "nivel": "17º",
            "magias": "Mão Arcana (dano passa a um tipo de Afinidade)"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-bender-fortification",
    "classId": "bender-ryoko",
    "name": "Discípulo da Fortificação",
    "originalName": "Disciple of Fortification",
    "aliases": [
      "Disciple of Fortification",
      "Discípulo da Fortificação"
    ],
    "desc": "Um baluarte elemental que molda os elementos como armadura, absorve ataques elementais e fortalece aliados com defesa primordial.",
    "sourcePage": 167,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "167–169",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS DEFENSIVAS",
        "level": 3,
        "page": 168,
        "text": "Você ganha proficiência com armaduras médias e pesadas e escudos. Pode usar um escudo como foco de conjuração de Dobrador.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ESCUDO PRIMORDIAL",
        "level": 3,
        "page": 168,
        "text": "Como ação bônus, conceda a você ou criatura voluntária a até 9 m 1d6 PV temporários, que duram até usar esta característica novamente ou o alvo terminar Descanso Longo. A quantidade aumenta para 1d10 no 6º nível, 2d6 no 10º e 2d10 no 14º.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REDIRECIONAR ELEMENTOS",
        "level": 7,
        "page": 168,
        "text": "Quando criatura visível a até 9 m sofreria dano de tipo ligado a uma de suas Afinidades, use reação para reduzir o dano em 2d6 para cada vez que escolheu afinidade com aquele elemento. Se reduzir a 0, faça ataque mágico à distância contra alvo a até 9 m da criatura original; em acerto, causa dano igual à redução. Os dados tornam-se d8 no 11º nível, d10 no 15º e d12 no 20º.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REFORÇO ELEMENTAL",
        "level": 15,
        "page": 169,
        "text": "Ao conjurar magia de Dobrador de 1º nível ou superior, escolha criatura visível a até 9 m, incluindo você. Ela recebe bônus na CA igual ao nível-base da magia até o início do seu próximo turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "BALUARTE PRIMORDIAL",
        "level": 20,
        "page": 169,
        "text": "Ao rolar iniciativa sem estar surpreso, use reação para conjurar gratuitamente uma magia conforme uma de suas Afinidades: Ar — Muralha de Vento; Terra — Muralha de Pedra; Fogo — Muralha de Fogo; Água — Muralha de Água Branca. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias Bônus da Fortificação",
        "page": 168,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Dobrador"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Escudo"
          },
          {
            "nivel": "5º",
            "magias": "Palavra de Proteção"
          },
          {
            "nivel": "9º",
            "magias": "Proteção contra Energia (tipo de uma Afinidade)"
          },
          {
            "nivel": "13º",
            "magias": "Esfera Resiliente"
          },
          {
            "nivel": "17º",
            "magias": "Resistir"
          }
        ]
      },
      {
        "title": "Baluarte Primordial",
        "page": 169,
        "columns": [
          {
            "key": "afinidade",
            "label": "Afinidade"
          },
          {
            "key": "magia",
            "label": "Magia"
          }
        ],
        "rows": [
          {
            "afinidade": "Ar",
            "magia": "Muralha de Vento"
          },
          {
            "afinidade": "Terra",
            "magia": "Muralha de Pedra"
          },
          {
            "afinidade": "Fogo",
            "magia": "Muralha de Fogo"
          },
          {
            "afinidade": "Água",
            "magia": "Muralha de Água Branca"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-bender-fusion",
    "classId": "bender-ryoko",
    "name": "Discípulo da Fusão",
    "originalName": "Disciple of Fusion",
    "aliases": [
      "Disciple of Fusion",
      "Discípulo da Fusão"
    ],
    "desc": "Um manipulador das fronteiras entre elementos, capaz de fundi-los em poeira, fumaça, gelo, lava, lama e vapor e conjurar além de suas Afinidades normais.",
    "sourcePage": 170,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "170–171",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "TRUQUES BÔNUS",
        "level": 3,
        "page": 170,
        "text": "Aprenda dois truques adicionais de Dobrador de qualquer lista elemental; eles não contam no limite de truques conhecidos.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MAGIAS BÔNUS",
        "level": 3,
        "page": 170,
        "text": "Aprenda uma magia de Dobrador de 1º nível de qualquer elemento; ela fica sempre preparada e não conta no limite. No 5º, 9º, 13º e 17º níveis, aprenda respectivamente uma magia de 2º, 3º, 4º e 5º nível assim. Se você não tiver Afinidade com o elemento escolhido, conjure essa magia como se tivesse 1 Afinidade nele.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONJURAÇÃO FUSIONISTA",
        "level": 3,
        "page": 170,
        "text": "Ao gastar espaço de 1º nível ou superior para conjurar uma magia do repertório de Dobrador, você pode combiná-la com outro elemento e criar um efeito em esfera centrada no alvo ou no centro da área da magia, com raio máximo de 1,5 m × o nível do espaço gasto. Usos iguais ao modificador de conjuração (mín. 1), recuperados em Descanso Curto ou Longo. Ar + Terra — Poeira: Constituição ou cego até fim do seu próximo turno. Ar + Fogo — Fumaça: área muito obscurecida até fim do próximo turno; fala dificultada e magia com componente verbal exige salvaguarda de Constituição ou a ação de conjuração é desperdiçada (não o espaço). Ar + Água — Gelo: terreno difícil; Destreza ou cair no chão ao aparecer, entrar ou terminar turno. Terra + Fogo — Lava: Destreza ou 1d6 de fogo por nível do espaço. Terra + Água — Lama: terreno difícil até limpeza e deslocamento -4,5 m; ação remove a lama de criatura ou quadrado de 1,5 m. Fogo + Água — Vapor: área muito obscurecida; criatura que termina turno sofre 1d4 de fogo por nível do espaço.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONJURAÇÃO INTERELEMENTAL",
        "level": 7,
        "page": 171,
        "text": "Ao conjurar magia que cause dano associado a uma Afinidade, pode trocar o tipo por um tipo associado a outra Afinidade sua. Além disso, quando criatura visível conjura magia que cause dano de qualquer Afinidade, use reação e faça teste de habilidade de conjuração CD 10 + nível da magia (10 para truque); em sucesso, altere o dano para um tipo de uma de suas Afinidades.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ELEMENTOS LIBERADOS",
        "level": 15,
        "page": 171,
        "text": "Em seu turno, quando usa a ação para conjurar magia de Dobrador de 1º nível ou superior, pode conjurar como ação bônus um truque de Dobrador cujo tempo normal seja 1 ação. Usos iguais ao modificador de conjuração (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "AVATAR DOS ELEMENTOS",
        "level": 20,
        "page": 171,
        "text": "Você recebe duas Afinidades Elementais adicionais, totalizando seis. Não pode ter mais de quatro Afinidades no mesmo elemento.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [],
    "references": []
  },
  {
    "id": "ryoko-bender-invigoration",
    "classId": "bender-ryoko",
    "name": "Discípulo do Revigoramento",
    "originalName": "Disciple of Invigoration",
    "aliases": [
      "Disciple of Invigoration",
      "Discípulo do Revigoramento"
    ],
    "desc": "Um Dobrador de suporte que usa impulsos elementais para fortalecer aliados, corrigir falhas e desestabilizar as ações dos inimigos.",
    "sourcePage": 172,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "172–173",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "VIGOR INTERIOR",
        "level": 3,
        "page": 173,
        "text": "Seu máximo de PV aumenta em 3 e aumenta em mais 1 sempre que ganha um nível nesta classe. Além disso, some seu modificador de conjuração de Dobrador aos testes para manter concentração.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PULSO PRIMORDIAL",
        "level": 3,
        "page": 173,
        "text": "Quando criatura voluntária visível a até 9 m falha salvaguarda ou erra ataque, use reação para fazê-la rerrolar com bônus igual ao seu modificador de conjuração, devendo usar o novo resultado. Se o ataque rerrolado acertar, causa dano adicional de um tipo de uma Afinidade igual ao seu modificador. Usos iguais ao modificador de conjuração (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "INVESTIDA DISTRATIVA",
        "level": 7,
        "page": 173,
        "text": "Uma vez em seu turno, ao causar dano a criatura com tipo ligado a uma Afinidade, manifeste os elementos de forma distrativa. A próxima jogada de ataque ou salvaguarda do alvo antes do fim do próximo turno dele sofre -1d8. Usos iguais ao modificador de conjuração (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "APRIMORAMENTO ELEMENTAL",
        "level": 15,
        "page": 173,
        "text": "Uma vez por turno ao conjurar magia de Dobrador de 1º nível ou maior que tenha um aliado como alvo, escolha um aliado atingido e um benefício: encerrar cego, enfeitiçado, surdo, amedrontado, envenenado ou atordoado; +1d6 no próximo ataque/salvaguarda até fim do próximo turno; usar reação para um ataque de arma; ou usar reação para mover metade do deslocamento sem ataques de oportunidade. Usos iguais ao modificador de conjuração (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REVIGORAMENTO PRIMORDIAL",
        "level": 20,
        "page": 173,
        "text": "Ao entrar em Avatar Primordial, conceda a até cinco criaturas voluntárias a 9 m um benefício de nível 1 de uma tabela de Avatar correspondente a uma Afinidade sua. Você escolhe um único benefício para todas; dura até seu Avatar terminar.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias Bônus do Revigoramento",
        "page": 172,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Dobrador"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Bênção"
          },
          {
            "nivel": "5º",
            "magias": "Aprimorar Habilidade"
          },
          {
            "nivel": "9º",
            "magias": "Velocidade"
          },
          {
            "nivel": "13º",
            "magias": "Liberdade de Movimento"
          },
          {
            "nivel": "17º",
            "magias": "Restauração Maior"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-barbarian-path-kaiju",
    "classId": "barbarian",
    "name": "Caminho do Kaiju",
    "originalName": "Path of the Kaiju",
    "aliases": [
      "Path of the Kaiju",
      "Caminho do Kaiju"
    ],
    "desc": "Um bárbaro que canaliza a força de kaiju, adotando aspectos e transformações de colossos durante sua Fúria.",
    "sourcePage": 150,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "150–151",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "ASPECTO DO KAIJU",
        "level": 3,
        "page": 150,
        "text": "Ao escolher o caminho, escolha um Kaiju e receba seu aspecto. Dragão Ascendente: enquanto em Fúria, como ação exale cone de 4,5 m; Destreza CD 8 + Força + proficiência, 2d10 radiante (metade em sucesso), escalando para 3d10/4d10/5d10 nos níveis 5/11/17; conta como ataque para manter Fúria. Leviatã Eterno: ao entrar em Fúria ou como ação bônus, criaturas escolhidas a 3 m fazem Sabedoria CD 8 + Constituição + proficiência ou têm desvantagem para atacar qualquer alvo além de você até início do próximo turno. Terra Titânica: use Constituição no lugar de Força em testes de Força e em ataques/danos de golpes desarmados e armas; continuam contando como baseados em Força; tremorsense 3 m. Kabuto Blindado: enquanto em Fúria, após mover 4,5 m em linha reta e acertar ataque de arma, +2d8 concussão. Tempestade Infinita: primeiro acerto corpo a corpo em cada turno durante Fúria causa 1d6 elétrico a criaturas escolhidas a 1,5 m do alvo. Pode trocar o Kaiju ao ganhar nível de Bárbaro.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CAÇADOR DE ÁPICE",
        "level": 3,
        "page": 150,
        "text": "Você ganha proficiência em Medicina e Sobrevivência; se já possuir uma delas, ganhe outra perícia à escolha. Pode usar a ação Firmar-se, levantar-se do chão ou montar uma criatura gastando apenas 1,5 m de movimento.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FORÇA DE KAIJU",
        "level": 6,
        "page": 150,
        "text": "Ao entrar em Fúria, pode aumentar você e seu equipamento para tamanho Grande se for menor; peso ×8 por categoria. Se não houver espaço, cresce ao máximo possível. Dura até a Fúria acabar. Enquanto assim, some Constituição a todos os testes e salvaguardas de Força e ataques de arma causam +1d4 dano.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TRANSFORMAÇÃO DO KAIJU",
        "level": 10,
        "page": 150,
        "text": "Ao entrar em Fúria, você também pode assumir uma transformação de Kaiju (pode ser diferente do seu Aspecto). Dragão Ascendente: forma pseudolíquida, resistência a fogo, imunidade a agarrado/restringido, natação 18 m, passa por criaturas e frestas de 2,5 cm sem se espremer, não pode parar nelas e recebe meia cobertura submerso. Leviatã Eterno: forma espectral, resistência a frio e necrótico, atravessa criaturas/objetos como terreno difícil; sofre 5 de força se terminar dentro deles e, se a Fúria acabar dentro, é expulso e sofre 5 de força por 1,5 m percorrido. Terra Titânica: Força de Kaiju o torna Enorme em vez de Grande, alcance +1,5 m e ataques de arma causam +1d4 adicional (total +2d4 pela característica). Kabuto Blindado: asas insetoides, voo igual à caminhada e ataques de oportunidade contra você têm desvantagem. Tempestade Infinita: resistência a elétrico e trovão; ação bônus para mover 9 m em linha reta sem ataques de oportunidade e atravessando criaturas; cada uma faz Destreza CD 8 + Constituição + proficiência ou sofre 2d6 elétrico.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FÚRIA DEVASTADORA",
        "level": 14,
        "page": 151,
        "text": "Enquanto estiver em Fúria e com PV iguais ou inferiores à metade do máximo, seu deslocamento aumenta em 3 m e você pode fazer um ataque de arma como ação bônus. Além disso, ao falhar uma salvaguarda, pode escolher ter sucesso. Usos de sucesso automático iguais à metade do modificador de Constituição, arredondado para baixo (mín. 1), por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [],
    "references": []
  },
  {
    "id": "ryoko-bard-hanabi",
    "classId": "bard",
    "name": "Colégio de Hanabi",
    "originalName": "College of Hanabi",
    "aliases": [
      "College of Hanabi",
      "Colégio de Hanabi"
    ],
    "desc": "Bardos pirotécnicos que convertem fogos de artifício em ferramentas de espetáculo, controle, mobilidade e explosões mágicas.",
    "sourcePage": 152,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "152–153",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "INVENTOR PROMISSOR",
        "level": 3,
        "page": 152,
        "text": "Proficiência com suprimentos de alquimista, um conjunto adicional de ferramentas de artesão e todas as armas de fogo magitec. Pode usar suprimentos de alquimista como foco de Bardo. Em teste com ferramenta proficiente, pode gastar Inspiração de Bardo e adicionar o dado depois de rolar, antes do resultado ser declarado.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PIROTECNIA",
        "level": 3,
        "page": 152,
        "text": "Durante Descanso Longo, crie pirotecnias mágicas em número igual ao modificador de Carisma (mín. 1). Cada opção gasta uma pirotecnia e no máximo uma pode ser ativada por turno. Salvaguardas usam sua CD de Bardo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "EXIBIÇÃO DE FOGOS",
        "level": 6,
        "page": 153,
        "text": "Ao longo de 1 minuto, gaste 10 po em fogos e use sua ação a cada rodada para criar uma história de luz e som audível a 300 m. Ao fim, escolha criaturas que assistiram em número até 2 × Carisma; Sabedoria contra sua CD ou ficam sob uma mensagem por 24 h. Raiva: testes de Enganação contra elas têm vantagem. Medo: Intimidação tem vantagem e, ao ver criatura desconhecida, pode ficar amedrontada até reconhecê-la como inofensiva/sair de vista, repetindo salvaguarda ao fim de turnos. Generosidade: ficam enfeitiçadas por você e ajudam sem grandes riscos até sofrerem dano seu/aliados. Paz: sofrem os efeitos de Acalmar Emoções. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MESTRE DAS ILUMINAÇÕES",
        "level": 14,
        "page": 153,
        "text": "Exibição de Fogos afeta até 3 vezes mais criaturas. Pirotecnias melhoram: Vela Kodama alcança 9 m e cria luz brilhante em raio de 9 m até seu próximo turno, impondo desvantagem a todos os ataques contra você; Nue Gritante passa a raio 12 m e causa d8s psíquicos iguais à metade da proficiência em falha (metade em sucesso); Ruptura de Raijū passa a raio 6 m e d8s; Roda de Wanyūdō dura até fim do próximo turno, sem ataques de oportunidade durante todo o período.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Pirotecnias de Hanabi",
        "page": 152,
        "columns": [
          {
            "key": "pirotecnia",
            "label": "Pirotecnia"
          },
          {
            "key": "efeito",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "pirotecnia": "Vela Kodama",
            "efeito": "Reação quando criatura visível a 4,5 m o ataca: impõe desvantagem; Constituição ou cego até fim do próximo turno. Sem efeito adicional em quem não depende de visão."
          },
          {
            "pirotecnia": "Nue Gritante",
            "efeito": "Ação, arremesse a 18 m; por 1 minuto, criaturas além de você a 9 m que vejam/ouçam fazem Sabedoria ou ficam amedrontadas, repetindo ao fim do turno; em sucesso ficam imunes a Nue Gritante por 24 h."
          },
          {
            "pirotecnia": "Ruptura de Raijū",
            "efeito": "Ação, arremesse a 18 m; explosão audível a 150 m; criaturas a 3 m fazem Destreza: falha = d6s de trovão iguais à proficiência e surdo até fim do próximo turno; sucesso = metade e sem surdez."
          },
          {
            "pirotecnia": "Roda de Wanyūdō",
            "efeito": "Ação bônus; até o fim do turno, voo de 9 m + 3 m × proficiência e movimento não provoca ataques de oportunidade."
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-bard-masks",
    "classId": "bard",
    "name": "Colégio das Máscaras",
    "originalName": "College of Masks",
    "aliases": [
      "College of Masks",
      "Colégio das Máscaras"
    ],
    "desc": "Um performer que conjura máscaras mágicas e alterna personas de beleza, esperança, solidão e guerra conforme a situação.",
    "sourcePage": 154,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "154",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "CONJURAÇÃO NŌGAKU",
        "level": 3,
        "page": 154,
        "text": "Como ação bônus, conjure uma das quatro máscaras por 1 minuto, até dispensá-la ou conjurar outra. Enquanto presente, concede vantagem em Atuação e funciona como foco de Bardo. A máscara concede o benefício indicado na tabela. Usos iguais a Carisma (mín. 1) por Descanso Longo; sem usos, pode gastar Inspiração de Bardo para criar uma.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PERFORMANCE INSPIRADORA",
        "level": 3,
        "page": 154,
        "text": "Após atuar por pelo menos 10 minutos, escolha criaturas que assistiram até seu Carisma (mín. 1). Cada uma recebe PV temporários = Carisma + proficiência (mín. 1) e vantagem na próxima iniciativa antes de Descanso Longo. Uma criatura só se beneficia uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ARTE CÊNICA",
        "level": 6,
        "page": 154,
        "text": "Enquanto estiver no chão/superfície que sustente você, use ação bônus e escolha criatura até um tamanho maior, a 18 m. Ela faz salvaguarda de Carisma contra sua CD de Bardo (pode falhar voluntariamente); em falha, vocês teleportam trocando de lugar. Usos iguais a Carisma (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TRANSFORMAÇÃO GRANDIOSA",
        "level": 14,
        "page": 154,
        "text": "Suas máscaras recebem benefícios superiores conforme a tabela de Transformação Grandiosa.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Máscaras Nōgaku",
        "page": 154,
        "columns": [
          {
            "key": "mascara",
            "label": "Máscara"
          },
          {
            "key": "efeito",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "mascara": "Beleza",
            "efeito": "Reação + 1 Inspiração de Bardo para impor desvantagem em salvaguarda contra magia de Encantamento sua, a alvo visível a 9 m."
          },
          {
            "mascara": "Esperança",
            "efeito": "Reação quando criatura a 18 m que veja/ouça rola Inspiração de Bardo: some Carisma (mín. +1) ao resultado."
          },
          {
            "mascara": "Solidão",
            "efeito": "Reação ao ser atingido corpo a corpo: 1d8 de força e empurra atacante até 4,5 m."
          },
          {
            "mascara": "Guerra",
            "efeito": "Uma vez por turno, some Carisma (mín. +1) ao dano de um ataque de arma ou magia de Bardo."
          }
        ]
      },
      {
        "title": "Transformação Grandiosa",
        "page": 154,
        "columns": [
          {
            "key": "mascara",
            "label": "Máscara"
          },
          {
            "key": "efeito",
            "label": "Benefício adicional"
          }
        ],
        "rows": [
          {
            "mascara": "Beleza",
            "efeito": "Bônus em todas as salvaguardas igual a Carisma (mín. +1)."
          },
          {
            "mascara": "Esperança",
            "efeito": "Reação + Inspiração quando criatura visível a 27 m cai a 0 PV sem morrer: fica com 1 PV; cada criatura só pode se beneficiar uma vez por Descanso Longo."
          },
          {
            "mascara": "Solidão",
            "efeito": "Resistência a concussão, perfurante e cortante."
          },
          {
            "mascara": "Guerra",
            "efeito": "Se usar ação para conjurar magia, pode realizar um ataque de arma como ação bônus no turno."
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-cleric-shrine-warden",
    "classId": "cleric",
    "name": "Domínio do Guardião do Santuário",
    "originalName": "Shrine Warden Domain",
    "aliases": [
      "Shrine Warden Domain",
      "Domínio do Guardião do Santuário"
    ],
    "desc": "Um clérigo que consagra santuários espectrais, oferecendo bênçãos a aliados e maldições a inimigos em uma aura sagrada.",
    "sourcePage": 174,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "174–175",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS BÔNUS",
        "level": 1,
        "page": 174,
        "text": "Você ganha proficiência com armas marciais e armaduras pesadas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ARREBATAR",
        "level": 1,
        "page": 174,
        "text": "Uma vez por turno, ao acertar criatura com ataque, force salvaguarda de Carisma contra sua CD de Clérigo. Em falha, escolha: empurrá-la 1,5 m × proficiência; ou reduzir seu deslocamento em 1,5 m × proficiência até fim do próximo turno. Usos iguais a Sabedoria (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CANALIZAR DIVINDADE: CONSAGRAÇÃO",
        "level": 2,
        "page": 175,
        "text": "Como ação bônus, use Canalizar Divindade para criar santuário espectral em ponto a 18 m, com aura de 6 m por 10 minutos. Escolha uma Bênção ou Maldição e até 1 + Sabedoria criaturas visíveis (mín. 1) para serem afetadas pela magia do santuário conforme a tabela.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GUARDIÃO DO SANTUÁRIO",
        "level": 6,
        "page": 175,
        "text": "Ao criar santuário, invoque espírito Fey (yokai) Miúdo, imune a dano e condições e capaz de voar. Como ação bônus, mova o santuário até 6 m. Quando criatura na aura faz ataque, teste ou salvaguarda, use reação para rolar 1d4 e aplicar como bônus ou penalidade. Usos iguais a Sabedoria por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GOLPE DIVINO",
        "level": 8,
        "page": 175,
        "text": "Uma vez em cada turno ao acertar ataque de arma, cause +1d8 radiante; +2d8 no 14º nível.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONSAGRAÇÃO POTENCIALIZADA",
        "level": 17,
        "page": 175,
        "text": "O raio da aura de Consagração aumenta para 9 m. Em vez de uma opção, pode escolher todas as três Bênçãos ou todas as três Maldições para as criaturas designadas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio",
        "page": 174,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Clérigo"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "1º",
            "magias": "Proteção contra o Bem e Mal, Santuário"
          },
          {
            "nivel": "3º",
            "magias": "Proteção, Silêncio"
          },
          {
            "nivel": "5º",
            "magias": "Dissipar Magia, Extrair Shirikodama"
          },
          {
            "nivel": "7º",
            "magias": "Guardião da Fé, Tumba de Rocha"
          },
          {
            "nivel": "9º",
            "magias": "Nevasca Abençoada de Bakuryō, Lanterna de Magatsuchi"
          }
        ]
      },
      {
        "title": "Bênçãos e Maldições da Consagração",
        "page": 175,
        "columns": [
          {
            "key": "opcao",
            "label": "Opção"
          },
          {
            "key": "efeito",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "opcao": "Bênção da Fortuna",
            "efeito": "Na aura, criatura afetada pode adicionar 1d4 a ataque, teste ou salvaguarda após o d20 e antes do resultado; uma vez até início do próximo turno."
          },
          {
            "opcao": "Bênção do Poder",
            "efeito": "Ao acertar ataque na aura, +1d6 radiante; uma vez até início do próximo turno. 2d6 no 11º nível."
          },
          {
            "opcao": "Bênção da Esperança",
            "efeito": "Imune a amedrontado na aura e ganha 1d4 PV temporários ao terminar turno nela."
          },
          {
            "opcao": "Maldição do Vazio",
            "efeito": "Ao entrar pela primeira vez no turno ou iniciar turno na aura: Constituição ou cego até início do próximo turno."
          },
          {
            "opcao": "Maldição da Dor",
            "efeito": "Ao entrar pela primeira vez no turno ou iniciar turno na aura: 1d8 necrótico; 2d8 no 11º nível."
          },
          {
            "opcao": "Maldição do Pânico",
            "efeito": "Ao entrar pela primeira vez no turno ou iniciar turno na aura: Sabedoria ou amedrontado pelo santuário até início do próximo turno."
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-druid-circle-yokai",
    "classId": "druid",
    "name": "Círculo dos Yokai",
    "originalName": "Circle of the Yokai",
    "aliases": [
      "Circle of the Yokai",
      "Círculo dos Yokai"
    ],
    "desc": "Druidas ligados aos espíritos yokai, capazes de usar Forma Selvagem em criaturas espirituais muito além de Bestas comuns.",
    "sourcePage": 176,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "176–177",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "MAGIAS DO CÍRCULO",
        "level": 2,
        "page": 176,
        "text": "Você recebe as magias da tabela nos níveis indicados. Elas ficam sempre preparadas e contam como magias de Druida para você.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FORMA SELVAGEM YOKAI",
        "level": 2,
        "page": 176,
        "text": "Além de Bestas mundanas, sua Forma Selvagem pode assumir qualquer yokai Besta, Celestial, Constructo, Fey, Corruptor, Monstruosidade ou Planta com ND até o limite da tabela; não recebe ações lendárias. Em qualquer Forma Selvagem, pode falar; tem vantagem em salvaguardas de Constituição para manter concentração; e pode conjurar magias da tabela de Círculo ou da ficha da forma sem componentes materiais/somáticos, usando seus espaços e CD de Druida.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TRANSFORMAÇÃO POTENCIALIZADA",
        "level": 6,
        "page": 177,
        "text": "Imediatamente após conjurar magia de 1º nível ou maior, pode usar Forma Selvagem como reação; uma vez por Descanso Curto ou Longo. Enquanto estiver transformado e concentrando em uma magia, seus ataques de arma contam como mágicos contra resistência/imunidade a não mágico.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONVOCAR OS YOKAI",
        "level": 10,
        "page": 177,
        "text": "Pode conjurar Animar Objetos como ação, sem espaço nem componentes materiais; dura 10 minutos, depois os alvos retornam ao normal. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FORTIFICAÇÃO YOKAI",
        "level": 14,
        "page": 177,
        "text": "Se cair a 0 PV em Forma Selvagem de yokai, use reação para usar Forma Selvagem novamente, gastando uso normalmente; dano excedente passa para a nova forma. Uma vez por Descanso Curto ou Longo. Além disso, enquanto em Forma Selvagem, se usar a ação para conjurar magia, pode fazer um ataque como ação bônus no mesmo turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias do Círculo dos Yokai",
        "page": 176,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Druida"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "2º",
            "magias": "Uppercut Terrestre, Encontrar Familiar"
          },
          {
            "nivel": "3º",
            "magias": "Invisibilidade, Fúria de Wanyūdō"
          },
          {
            "nivel": "5º",
            "magias": "Velocidade, Serpe de Água"
          },
          {
            "nivel": "7º",
            "magias": "Compulsão, Rugido do Leão"
          },
          {
            "nivel": "9º",
            "magias": "Dominar Pessoa, Erupção"
          },
          {
            "nivel": "10º",
            "magias": "Animar Objetos"
          }
        ]
      },
      {
        "title": "Formas Selvagens Yokai — Limites",
        "page": 177,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Druida"
          },
          {
            "key": "cr",
            "label": "ND máximo"
          },
          {
            "key": "limitacao",
            "label": "Limitação"
          }
        ],
        "rows": [
          {
            "nivel": "2º",
            "cr": "1/2",
            "limitacao": "Sem voo ou natação"
          },
          {
            "nivel": "4º",
            "cr": "1",
            "limitacao": "Sem voo"
          },
          {
            "nivel": "8º",
            "cr": "2",
            "limitacao": "—"
          },
          {
            "nivel": "12º",
            "cr": "3",
            "limitacao": "—"
          },
          {
            "nivel": "16º",
            "cr": "4",
            "limitacao": "—"
          },
          {
            "nivel": "20º",
            "cr": "5",
            "limitacao": "—"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-fighter-skeletal-blade",
    "classId": "fighter",
    "name": "Lâmina Esquelética",
    "originalName": "Skeletal Blade",
    "aliases": [
      "Skeletal Blade",
      "Lâmina Esquelética"
    ],
    "desc": "Um guerreiro capaz de remodelar o próprio esqueleto em armas, armadura, asas e outras adaptações de combate.",
    "sourcePage": 178,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "178–179",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "FÍSICO MALEÁVEL",
        "level": 3,
        "page": 178,
        "text": "Como ação, altere seu esqueleto e aparência, ficando até 30 cm mais alto/baixo e mudando traços faciais sem mudar disposição de membros nem cor de olhos/cabelo/pele. Inteligência (Investigação) contra CD 8 + Constituição + proficiência detecta o disfarce. Dura até encerrar com ação ou começar Descanso Longo. Usos iguais a Constituição (mín. 1), recuperados em Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FORMA ESQUELÉTICA",
        "level": 3,
        "page": 178,
        "text": "Como ação bônus por 1 minuto, projete ossos como armadura e uma lâmina esquelética: arma simples corpo a corpo, Acuidade, opção de Golpe Superior Empalar, mágica, 1d8 perfurante e impossível de desarmar. Escolha um benefício: alcance +1,5 m; caminhada +3 m; escalada = caminhada; +1 CA; ou PV temporários = Constituição (mín.1) no início de cada turno. Ação bônus troca o benefício. Dano da lâmina vira d10 no 10º e d12 no 15º. Usos iguais a Constituição (mín.1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PRODÍGIO ÓSSEO",
        "level": 7,
        "page": 178,
        "text": "Ao entrar na Forma Esquelética, escolha um benefício adicional e acrescente à arma uma combinação de propriedade/Golpe Superior: Impacto + Golpe Recuante; Leve + Tendão Cortado; ou Pesada + Onda de Choque.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CAVALEIRO ESQUELÉTICO",
        "level": 10,
        "page": 179,
        "text": "+1 em ataques e danos com a lâmina esquelética (+2 no 18º). Ao entrar na Forma, escolha um benefício adicional: asas esqueléticas, voo = caminhada e pairar; resistência a frio, elétrico, necrótico e veneno; +1d8 necrótico em ataques corpo a corpo; ou criatura que começa turno agarrada por você sofre 2d12 perfurante.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "UNO COM O NADA",
        "level": 15,
        "page": 179,
        "text": "Ao ser reduzido a 0 PV em Forma Esquelética, a forma termina e você fica com 1 PV. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ARMA VIVA",
        "level": 18,
        "page": 179,
        "text": "Ao entrar em Forma Esquelética, receba dois benefícios adicionais à sua escolha entre Forma Esquelética e Cavaleiro Esquelético.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [],
    "references": []
  },
  {
    "id": "ryoko-monk-eight-gates",
    "classId": "monk",
    "name": "Caminho dos Oito Portões",
    "originalName": "Way of the Eight Gates",
    "aliases": [
      "Way of the Eight Gates",
      "Caminho dos Oito Portões"
    ],
    "desc": "Um monge que abre oito centros internos de ki, alcançando harmonia física, social, espiritual e mental até a apoteose do Portão do Infinito.",
    "sourcePage": 180,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "180",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "PORTÃO DA TERRA",
        "level": 3,
        "page": 180,
        "text": "Quando usa Defesa Paciente ou Passo do Vento, recupera PV iguais ao modificador de Sabedoria (mín. 1).",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DA ÁGUA",
        "level": 3,
        "page": 180,
        "text": "Seu máximo de pontos de ki aumenta em número igual ao modificador de Sabedoria (mín. 1).",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DO AR",
        "level": 3,
        "page": 180,
        "text": "Ao acertar criatura com ataque corpo a corpo, pode gastar 1 ki para soltar um rugido desafiador; se ela puder ouvi-lo, tem desvantagem em ataques contra criaturas que não sejam você até fim do seu próximo turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DA CHAMA",
        "level": 6,
        "page": 180,
        "text": "Ao usar Rajada de Golpes, faça um golpe desarmado adicional na mesma ação bônus. Usos iguais a Sabedoria (mín.1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DA PRESENÇA",
        "level": 6,
        "page": 180,
        "text": "Sempre que realizar teste de Carisma, recebe bônus igual a Sabedoria (mín. +1).",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DO ESPÍRITO",
        "level": 11,
        "page": 180,
        "text": "Como ação bônus, toque criatura voluntária e gaste 2 ki. Ela ganha PV temporários = proficiência + Sabedoria (mín.1) e pode usar reação imediatamente para um ataque de arma, Esquivar-se ou mover até seu deslocamento sem ataques de oportunidade.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DA MENTE",
        "level": 11,
        "page": 180,
        "text": "Pode conjurar Vínculo Telepático sem componentes. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PORTÃO DO INFINITO",
        "level": 17,
        "page": 180,
        "text": "Como ação, gaste 6 ki e transcenda por 1 minuto: caminhada +6 m; +2 CA; ao usar a ação Atacar, faça um golpe desarmado adicional; e some Sabedoria às jogadas de ataque e dano.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [],
    "references": [
      {
        "title": "PROFICIÊNCIAS OPCIONAIS",
        "page": 180,
        "text": "A fonte permite que Monges também tenham proficiência com chakram, kusarigama, martelo meteoro, nunchaku, dardo de corda, shuriken e tessen.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ]
  },
  {
    "id": "ryoko-paladin-yojimbo",
    "classId": "paladin",
    "name": "Juramento do Yojimbo",
    "originalName": "Oath of the Yojimbo",
    "aliases": [
      "Oath of the Yojimbo",
      "Juramento do Yojimbo"
    ],
    "desc": "Paladinos guarda-costas que juram proteger os vulneráveis, interpor-se a ataques e erguer seus protegidos acima do perigo.",
    "sourcePage": 182,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "182–183",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "MAGIAS DE JURAMENTO",
        "level": 3,
        "page": 183,
        "text": "Você sempre possui preparadas as magias da tabela de Juramento do Yojimbo nos níveis indicados.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 183,
        "text": "Recebe duas opções. Protegido Sagrado: ritual de 1 minuto com criatura voluntária a 9 m; ela vira seu protegido por 24 h, até usar novamente ou ela morrer. Enquanto você estiver consciente a até 18 m, o protegido é imune a amedrontado; quando ele acerta inimigo visível com arma a até 18 m, use reação e gaste espaço para +2d8 radiante com espaço de 1º +1d8/nível acima, máx. 5d8. Intervenção do Guardião: reação para reduzir dano de ataque contra criatura visível a 9 m em um número de d10 igual à metade do seu nível de Paladino; se reduzir a 0, o protegido pode usar reação para atacar o agressor.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PROTETOR AUDACIOSO",
        "level": 7,
        "page": 183,
        "text": "Quando aliado a 3 m torna-se alvo de ataque corpo a corpo, use reação para mover até seu deslocamento em direção ao atacante; se terminar a 1,5 m dele, force-o a atacar você em vez do aliado. No 18º nível, o alcance inicial aumenta de 3 m para 9 m.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GUARDIÃO VERDADEIRO",
        "level": 15,
        "page": 183,
        "text": "Pode realizar Ajudar ou usar Imposição das Mãos como ação bônus. Ao Ajudar, a criatura ajudada soma seu Carisma (mín. +1) ao próximo ataque ou teste que fizer dentro de 1 minuto.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PROTETOR SUPREMO",
        "level": 20,
        "page": 183,
        "text": "Como ação por 1 minuto ou até ficar incapacitado: criaturas escolhidas além de você a 3 m ganham +3 CA; se seu Protegido Sagrado a 18 m cair a 0 PV, reação o deixa com 1 PV; seus ataques corpo a corpo causam +2d8 radiante enquanto o protegido estiver a 18 m; Intervenção do Guardião não gasta Canalizar Divindade. Uma vez por Descanso Longo, ou gaste espaço de 5º para usar novamente.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento do Yojimbo",
        "page": 183,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Paladino"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Heroísmo, Santuário"
          },
          {
            "nivel": "5º",
            "magias": "Pele Terrestre, Vínculo Protetor"
          },
          {
            "nivel": "9º",
            "magias": "Guardiões Espirituais, Troca-Troca"
          },
          {
            "nivel": "13º",
            "magias": "Proteção contra a Morte, Pele de Aço"
          },
          {
            "nivel": "17º",
            "magias": "Nevasca Abençoada de Bakuryō, Muralha de Força"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DO YOJIMBO",
        "page": 183,
        "text": "Proteção: seja escudo de quem não tem um. Força: torne-se forte por quem não pode. Inspiração: fortaleça os vulneráveis para que protejam outros. Autossacrifício: arrisque tudo pela segurança de quem não pode lutar.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ]
  },
  {
    "id": "ryoko-ranger-ronin",
    "classId": "ranger",
    "name": "Rōnin",
    "originalName": "Rōnin",
    "aliases": [
      "Rōnin",
      "Rōnin"
    ],
    "desc": "Um patrulheiro guerreiro sem mestre, especialista em sacar e guardar múltiplas armas, alternando combate corpo a corpo e à distância em um fluxo veloz.",
    "sourcePage": 184,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "184–185",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "MAGIA ERRANTE",
        "level": 3,
        "page": 185,
        "text": "Você aprende magias adicionais nos níveis indicados pela tabela; elas contam como magias de Patrulheiro e não contam em seu limite de magias conhecidas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "SAQUE CORTANTE",
        "level": 3,
        "page": 184,
        "text": "A primeira vez em cada turno que acerta um ataque corpo a corpo com arma que sacou naquele turno, causa +1d6 do tipo da arma (+1d10 no 11º nível). Uma vez por turno, pode sacar uma arma como parte de um ataque de oportunidade. Também recebe duas interações de objeto adicionais por turno, mas apenas para sacar ou guardar armas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "SEM MESTRE",
        "level": 3,
        "page": 185,
        "text": "Sempre que fizer salvaguarda para evitar ou encerrar a condição enfeitiçado em si, role 1d6 e some ao resultado.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "APARADA CORTANTE",
        "level": 7,
        "page": 185,
        "text": "Quando criatura faz ataque de arma contra você enquanto você tem arma corpo a corpo guardada e uma mão livre, use reação para sacar e aparar. Sua CA contra esse ataque aumenta em Destreza ou Força (sua escolha), e você ganha PV temporários = proficiência + Sabedoria (mín.1). Depois do ataque, pode guardar a arma como parte da reação.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MESTRIA COM MÚLTIPLAS ARMAS",
        "level": 11,
        "page": 185,
        "text": "Você tem vantagem no primeiro ataque de arma corpo a corpo e no primeiro ataque de arma à distância que fizer em cada turno. Além disso, estar a 1,5 m de criatura hostil não impõe desvantagem nos ataques à distância.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "INVESTIDA IMPLACÁVEL",
        "level": 15,
        "page": 185,
        "text": "Ao realizar a ação Atacar, cada acerto crítico ou redução de criatura a 0 PV durante a ação permite um ataque de arma adicional, até três ataques adicionais por turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magia Errante",
        "page": 185,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Patrulheiro"
          },
          {
            "key": "magia",
            "label": "Magia"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magia": "Retirada Acelerada"
          },
          {
            "nivel": "5º",
            "magia": "Nublar"
          },
          {
            "nivel": "9º",
            "magia": "Remover Maldição"
          },
          {
            "nivel": "13º",
            "magia": "Proteção contra a Morte"
          },
          {
            "nivel": "17º",
            "magia": "Lendas e Histórias"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-rogue-tamaya",
    "classId": "rogue",
    "name": "Tamaya",
    "originalName": "Tamaya",
    "aliases": [
      "Tamaya",
      "Tamaya"
    ],
    "desc": "Um ladino pirotécnico que converte fórmulas de hanabi em bombas mecânicas capazes de reproduzir efeitos de magia e preparar armadilhas devastadoras.",
    "sourcePage": 186,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "186–187",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "PIROTÉCNICO",
        "level": 3,
        "page": 186,
        "text": "Você ganha proficiência com armas de fogo magitec e com dois conjuntos de ferramentas de artesão à sua escolha.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "BOMBAS MÁGICAS",
        "level": 3,
        "page": 186,
        "text": "Você possui Pontos de Hanabi iguais ao nível de Ladino, recuperados em Descanso Longo. Em 10 minutos, escolha magia da tabela e gaste os pontos indicados para armazenar o efeito em bomba não mágica de 0,25 kg, que se desfaz quando você termina Descanso Longo. Criatura pode arremessá-la a 18 m como ação bônus; você pode usar reação a qualquer momento para detonar bomba sua a até 18 m. A magia ocorre centrada na bomba; se normalmente exigir concentração, dura sua duração completa ou até ser dissipada. Inteligência é a habilidade das bombas; CD = 8 + proficiência + Inteligência.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MUDANÇA DE INICIATIVA",
        "level": 9,
        "page": 186,
        "text": "Ao rolar iniciativa, use reação para lançar clarões e fumaça em ponto a 18 m. Criaturas escolhidas em esfera de 6 m fazem salvaguarda de Sabedoria contra a CD das Bombas Mágicas; em falha, sofrem -10 na iniciativa.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ADEPTO DAS BOMBAS MÁGICAS",
        "level": 13,
        "page": 187,
        "text": "Você é imune ao dano de suas próprias Bombas Mágicas e tem sucesso automático em salvaguardas contra seus efeitos. Além disso, como ação, pode detonar uma bomba sua a até 300 m.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PRIMER DE HANABI",
        "level": 17,
        "page": 187,
        "text": "Como ação, gaste 3 Pontos de Hanabi para instalar e esconder explosivo especial em superfície ou objeto fechável. Encontrá-lo exige Investigação CD 8 + proficiência + Destreza. Defina gatilho e condições físicas, tipo/espécie ou alinhamento; pode designar criaturas iguais à proficiência para não ativá-lo. Ao disparar, esfera de 6 m; Destreza contra sua CD: falha sofre 6d6 trovão + 6d6 de ácido, fogo, elétrico ou veneno escolhido; sucesso metade. Criar novo primer desfaz o anterior. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Bombas Mágicas Tamaya",
        "page": 186,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Ladino"
          },
          {
            "key": "custo",
            "label": "Custo em Hanabi"
          },
          {
            "key": "magias",
            "label": "Efeitos disponíveis"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "custo": "0",
            "magias": "Prestidigitação, Cortina de Fumaça, Taumaturgia"
          },
          {
            "nivel": "3º",
            "custo": "1",
            "magias": "Constrição, Fogo das Fadas, Névoa, Graxa, Sono"
          },
          {
            "nivel": "5º",
            "custo": "3",
            "magias": "Acalmar Emoções, Escuridão, Despedaçar, Silêncio, Crescer Espinhos, Teia"
          },
          {
            "nivel": "9º",
            "custo": "5",
            "magias": "Padrão Hipnótico, Granada de Luz, Bola de Lodo, Névoa Fétida"
          },
          {
            "nivel": "13º",
            "custo": "7",
            "magias": "Radiância Cegante, Confusão, Tempestade de Gelo, Muralha de Fogo (somente anel)"
          },
          {
            "nivel": "17º",
            "custo": "9",
            "magias": "Névoa Mortal, Erupção, Praga de Insetos, Curar Ferimentos em Massa"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PROFICIÊNCIAS OPCIONAIS",
        "page": 186,
        "text": "A fonte permite que Ladinos também tenham proficiência com chakram, sai, shuriken, tessen e tonfa.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REGRA OPCIONAL — REALISMO E OURO",
        "page": 186,
        "text": "Em campanhas com economia mais realista, a fonte sugere custo em po igual a 3 × os Pontos de Hanabi da bomba; bombas de custo 0 custam 1 pp.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ]
  },
  {
    "id": "ryoko-sorcerer-spirit-caller",
    "classId": "sorcerer",
    "name": "Invocador de Espíritos",
    "originalName": "Spirit Caller",
    "aliases": [
      "Spirit Caller",
      "Invocador de Espíritos"
    ],
    "desc": "Um feiticeiro que manifesta a própria alma como um espírito Fey combatente, personalizando-o com Pontos de Feitiçaria e conjurando através dele.",
    "sourcePage": 188,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "188–190",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "MAGIAS DO INVOCADOR DE ESPÍRITOS",
        "level": 1,
        "page": 188,
        "text": "Aprenda as magias da tabela; contam como magias de Feiticeiro e não contam no limite. Ao ganhar nível de Feiticeiro, pode trocar uma magia desta característica por outra do mesmo nível de Ilusão ou Conjuração das listas de Feiticeiro, Bruxo ou Mago.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONDUTO DA ALMA",
        "level": 1,
        "page": 188,
        "text": "Como ação, manifeste seu espírito em espaço desocupado a 9 m usando o bloco da tabela. Ele compartilha iniciativa e age logo após você; ação bônus manda Atacar no próximo turno, caso contrário usa Esquivar-se ou Ajudar. Dura 10 minutos, até 0 PV ou perda de concentração; some Carisma às salvaguardas para manter essa concentração. Dois usos, recuperados em Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "SINCRONIA ESPIRITUAL",
        "level": 6,
        "page": 188,
        "text": "Magias suas cujo alcance não seja pessoal podem originar-se de seu espírito manifestado, em vez de você, se ele estiver a até 36 m.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "POTENCIALIZAÇÃO ESPIRITUAL",
        "level": 6,
        "page": 189,
        "text": "Ao manifestar o espírito, gaste qualquer número de Pontos de Feitiçaria e escolha uma bênção da tabela por ponto; não repita a mesma bênção salvo quando indicado. Elas duram enquanto o espírito permanecer.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "EMERGÊNCIA EXPLOSIVA",
        "level": 14,
        "page": 190,
        "text": "Quando usa ação bônus para comandar o espírito no mesmo turno em que o invocou, ele pode realizar uma ação adicional no primeiro turno. Além disso, enquanto estiver manifestado, você recebe todas as resistências a dano que ele possuir.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MANIFESTAÇÃO DA FORMA FINAL",
        "level": 18,
        "page": 190,
        "text": "Você não precisa mais manter concentração no espírito e pode dispensá-lo sem ação. Ao manifestá-lo, recebe uma bênção adicional gratuitamente. Pode escolher tamanho-base Médio ou Grande; se Grande, o alcance de Agarrão Espiritual aumenta em 1,5 m.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias do Invocador de Espíritos",
        "page": 188,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Feiticeiro"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "1º",
            "magias": "Comando, Armadura Arcana, Ilusão Menor"
          },
          {
            "nivel": "3º",
            "magias": "Ajuda, Imagem Espelhada"
          },
          {
            "nivel": "5º",
            "magias": "Crescer Plantas, Corcel Fantasmagórico"
          },
          {
            "nivel": "7º",
            "magias": "Banimento, Guardião da Fé"
          },
          {
            "nivel": "9º",
            "magias": "Reencarnação, Similaridade"
          },
          {
            "nivel": "17º",
            "magias": "Projeção Astral"
          }
        ]
      },
      {
        "title": "Espírito Manifestado",
        "page": 188,
        "columns": [
          {
            "key": "item",
            "label": "Estatística"
          },
          {
            "key": "valor",
            "label": "Valor"
          }
        ],
        "rows": [
          {
            "item": "Tipo/Tamanho",
            "valor": "Fey Pequeno ou Miúdo; mesmo alinhamento"
          },
          {
            "item": "CA",
            "valor": "13 + PB (armadura natural)"
          },
          {
            "item": "PV",
            "valor": "5 + 5 × nível de Feiticeiro"
          },
          {
            "item": "Deslocamento",
            "valor": "9 m; voo 6 m (pairar)"
          },
          {
            "item": "Atributos",
            "valor": "For 14, Des 16, Con 16, Int 9, Sab 15, Car 12"
          },
          {
            "item": "Perícias",
            "valor": "Intimidação +1+PB, Percepção +2+PB, Furtividade +3+PB"
          },
          {
            "item": "Sentidos",
            "valor": "Visão no escuro 9 m; Percepção passiva 12+PB"
          },
          {
            "item": "Multiataque",
            "valor": "Ataques iguais à metade do PB, arredondado para baixo"
          },
          {
            "item": "Agarrão Espiritual",
            "valor": "Ataque mágico corpo a corpo; 1d8+PB necrótico ou radiante"
          },
          {
            "item": "Rasgo Espiritual",
            "valor": "Ataque mágico à distância 18 m; 1d6+PB necrótico ou radiante"
          }
        ]
      },
      {
        "title": "Bênçãos do Espírito",
        "page": 189,
        "columns": [
          {
            "key": "bencao",
            "label": "Bênção"
          },
          {
            "key": "efeito",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "bencao": "Resistência",
            "efeito": "Resistência a um tipo de dano; pode escolher até proficiência vezes."
          },
          {
            "bencao": "Estadia Prolongada",
            "efeito": "Duração máxima +10 min; pode escolher até proficiência vezes."
          },
          {
            "bencao": "Ampliar",
            "efeito": "Tamanho +1 categoria, alcance +1,5 m e ataques corpo a corpo +1d8 do mesmo tipo."
          },
          {
            "bencao": "Teletransportador",
            "efeito": "Ação bônus teleporta até 9 m para espaço visível."
          },
          {
            "bencao": "Frenesi",
            "efeito": "Vantagem em ataques corpo a corpo, mas ataques contra o espírito têm vantagem."
          },
          {
            "bencao": "Detonador",
            "efeito": "Ao chegar a 0 PV ou perder concentração, escolhidos a 6 m fazem Destreza contra sua CD ou sofrem 2d10 + nível de Feiticeiro necrótico/radiante."
          },
          {
            "bencao": "Uma Só Mente",
            "efeito": "Ação bônus para ver/ouvir pelo espírito até próximo turno; você fica cego/surdo pelos próprios sentidos."
          },
          {
            "bencao": "Visão Diabólica",
            "efeito": "Enxerga em penumbra/escuridão, mágica ou não, a 36 m."
          },
          {
            "bencao": "Agilidade Aprimorada",
            "efeito": "Deslocamentos dobrados."
          },
          {
            "bencao": "Escudeiro de Campo",
            "efeito": "Após Ajudar, ação bônus para Desengajar ou Esquivar-se."
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-warlock-shinigami",
    "classId": "warlock",
    "name": "O Shinigami",
    "originalName": "The Shinigami",
    "aliases": [
      "The Shinigami",
      "O Shinigami"
    ],
    "desc": "Um bruxo ligado a um espírito da morte, capaz de transformar cadáveres e criaturas inconscientes em marionetes e até continuar lutando como espírito após cair.",
    "sourcePage": 203,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "203–204",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "LISTA DE MAGIAS EXPANDIDA",
        "level": 1,
        "page": 203,
        "text": "As magias da tabela são adicionadas à lista de Bruxo para você escolher ao aprender magias.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MARIONETISTA SOMBRIO",
        "level": 1,
        "page": 203,
        "text": "Como ação bônus, assuma controle por até 10 minutos, ou até perder concentração, de cadáver ou criatura inconsciente visível a 18 m, Grande ou menor, com ND igual ou inferior ao seu nível de Bruxo (ou ND em vida). Limite passa a Enorme no 6º nível e Imenso no 14º. Se cadáver, é tratado como Morto-vivo; não recupera PV nem sai da inconsciência; imune a enfeitiçado/amedrontado; recebe PV temporários = Carisma + 5 × nível de Bruxo; pode usar seu modificador de conjuração em ataques/danos. Quando os PV temporários acabam, o controle termina e aquele alvo não pode ser controlado novamente até Descanso Longo. A marionete age logo após você e só age se você usar ação bônus para comandá-la. Ela não pode conjurar magias, usar reações, ações lendárias/de covil nem criar/invocar criaturas. Usos iguais a Carisma (mín.1) por Descanso Longo; sem usos, pode ativar gastando espaço de Magia de Pacto.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "VISÃO DO SHINIGAMI",
        "level": 1,
        "page": 204,
        "text": "Como ação bônus, foque criatura visível a 18 m. Você descobre uma vulnerabilidade a dano dela, se houver, e uma resistência ou imunidade a dano, se houver.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "DOM DO PSICOPOMPO",
        "level": 6,
        "page": 204,
        "text": "Enquanto estiver controlando alvo com Marionetista Sombrio, qualquer magia que você conjurar e que tenha apenas você como alvo também pode ter sua marionete como alvo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "DOMINAÇÃO SHINIGAMI",
        "level": 10,
        "page": 204,
        "text": "Enquanto controla uma marionete, pode ver por seus olhos, ouvir pelo que ela ouve e falar usando a voz dela. O controle pode durar até 1 hora ou até perder concentração. Criatura que interage com a marionete pode usar ação e Intuição (Sabedoria) contra sua CD de Bruxo para perceber algo errado. Marionetes também têm resistência a concussão, perfurante e cortante de ataques não mágicos que não sejam de prata.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MESTRE DA MORTE",
        "level": 14,
        "page": 204,
        "text": "Ao ser reduzido a 0 PV, você não fica inconsciente: seu espírito é expulso do corpo e passa a marionetá-lo. Mantém suas estatísticas e capacidades, não pode controlar outra criatura, não faz salvaguardas contra a morte e dano não causa falhas de morte; ganha PV temporários = Carisma + 5 × nível de Bruxo. Se recuperar ao menos 1 PV, o espírito retorna. Você só fica inconsciente quando esses PV temporários se esgotam. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias Expandidas do Shinigami",
        "page": 203,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível da Magia"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "1º",
            "magias": "Ver a Morte Futura, Sono"
          },
          {
            "nivel": "2º",
            "magias": "Cegueira/Surdez, Aura Suga-Vida"
          },
          {
            "nivel": "3º",
            "magias": "Animar Mortos, Falar com os Mortos"
          },
          {
            "nivel": "4º",
            "magias": "Proteção contra a Morte, Invisibilidade Maior"
          },
          {
            "nivel": "5º",
            "magias": "Animar Objetos, Dominar Pessoa"
          }
        ]
      }
    ],
    "references": []
  },
  {
    "id": "ryoko-wizard-shinobi",
    "classId": "wizard",
    "name": "Shinobi",
    "originalName": "Shinobi",
    "aliases": [
      "Shinobi",
      "Shinobi"
    ],
    "desc": "Um mago infiltrador que sincroniza armas, ilusões e sombras, transformando espaços de magia em técnicas de ataque e desaparecimento.",
    "sourcePage": 205,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "205–206",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "TREINAMENTO SHINOBI",
        "level": 2,
        "page": 205,
        "text": "Você ganha proficiência com armaduras leves, bestas de mão, armas de Arremesso e armas de Acuidade; proficiência em Furtividade; pode usar arma proficiente como foco; e ganha visão no escuro 18 m ou aumenta a existente em 9 m.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATACANTE DAS SOMBRAS",
        "level": 2,
        "page": 205,
        "text": "Imediatamente após acertar criatura com ataque de arma em seu turno, use ação bônus e gaste espaço de magia para causar +1d8 por nível do espaço. Depois, escolha uma técnica: Nuvem de Sombra — seu espaço fica sob escuridão mágica muito obscurecida por 1 min, terminando se ficar inconsciente; visão no escuro não a atravessa e luz não mágica não ilumina. Toque Enervante — alvo faz Constituição contra sua CD ou sofre +1d8 veneno e fica envenenado até fim do próximo turno. Desaparecimento Sombrio — gaste 3 m de movimento para teleportar a área de penumbra/escuridão visível a 9 m. Proteção Sombria — escolha dano exceto força/radiante e ganhe resistência até início do próximo turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 6,
        "page": 206,
        "text": "Pode atacar duas vezes ao realizar a ação Atacar. Além disso, escuridão mágica não impede sua visão.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATACANTE UMBRAL",
        "level": 10,
        "page": 206,
        "text": "Quando usa Atacante das Sombras com espaço de 3º nível ou maior, também pode escolher: Golpe Duplicado — +1d8 psíquico e alvo vê duplicatas até fim do próximo turno; ao atacar você, rola d4 e em 1–3 acerta duplicata e erra. Golpes Rápidos — faça um ataque de arma adicional; em acerto, +2d8 força. Sumir — ganhe 2d8 PV temporários e invisibilidade até fim do próximo turno; enquanto invisível assim, suas magias não exigem componentes verbais ou somáticos.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "SÁBIO DAS SOMBRAS",
        "level": 14,
        "page": 206,
        "text": "Quando outra criatura visível entra ou começa turno em área muito obscurecida criada magicamente por você, force salvaguarda de Força contra sua CD de Mago, sem ação. Em falha, fica restringida até início do próximo turno. Uma criatura só pode ser forçada a essa salvaguarda uma vez por turno.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [],
    "references": []
  },
  {
    "id": "ryoko-tamer-sensei",
    "classId": "tamer-ryoko",
    "name": "Sensei",
    "originalName": "Sensei",
    "aliases": [
      "Sensei",
      "Sensei"
    ],
    "desc": "Um paradigma de Domador que ensina artes marciais aos companheiros, convertendo cada criatura em um pugilista treinado e versátil.",
    "sourcePage": 201,
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "201–202",
      "chapter": "Capítulo 9: Classes"
    },
    "features": [
      {
        "title": "MAGIAS DE SENSEI",
        "level": 3,
        "page": 201,
        "text": "Você aprende as magias da tabela; contam como magias de Domador e não contam no limite de magias conhecidas.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GOLPES MARCIAIS",
        "level": 3,
        "page": 201,
        "text": "Cada companheiro ganha ataque corpo a corpo Golpe Marcial, usando Força ou Destreza para ataque e dano e tipo físico apropriado. Dano: 1d6 no 3º nível, 1d8 no 7º, 1d10 no 10º e 1d12 no 18º. No 5º nível, ao Atacar pode fazer dois Golpes Marciais; no 14º, três.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TÉCNICAS MARCIAIS",
        "level": 3,
        "page": 201,
        "text": "Escolha três Técnicas Marciais da tabela; seus companheiros aprendem todas. Ao comandar um companheiro, pode instruí-lo a usar uma ou mais. Aprenda uma técnica adicional no 7º, 10º, 14º e 18º níveis.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "LIBERAR",
        "level": 7,
        "page": 201,
        "text": "Como ação, seu companheiro move até seu deslocamento sem ataques de oportunidade e realiza até seis Golpes Marciais, cada um contra alvo diferente. Movimento não provoca ataques de oportunidade até fim do turno. Uma vez por Descanso Curto ou Longo; a partir do 18º nível, duas vezes entre descansos.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "SACUDIR O GOLPE",
        "level": 10,
        "page": 201,
        "text": "Sempre que companheiro sofrer concussão, perfurante ou cortante, reduza o dano em seu modificador de conjuração de Domador (mín.1). Você não pode usar enquanto incapacitado.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PRODÍGIO MARCIAL",
        "level": 14,
        "page": 201,
        "text": "Como ação, infunda um companheiro invocado com seu espírito por 1 minuto: ele faz quatro Golpes Marciais na ação Atacar em vez de três, pode realizar duas ações bônus por turno e ganha PV temporários iguais ao seu modificador de conjuração (mín.1) no início dos turnos. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "LIBERAR APRIMORADO",
        "level": 18,
        "page": 201,
        "text": "A partir do 18º nível, cada companheiro pode usar a ação Liberar duas vezes entre seus Descansos Curtos ou Longos, em vez de uma.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Magias de Sensei",
        "page": 201,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Domador"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Clarão, Palma Repulsora"
          },
          {
            "nivel": "5º",
            "magias": "Pele Terrestre, Golpe de Vento"
          },
          {
            "nivel": "9º",
            "magias": "Criar Alimentos e Água, Velocidade"
          },
          {
            "nivel": "13º",
            "magias": "Liberdade de Movimento, Pele de Aço"
          },
          {
            "nivel": "17º",
            "magias": "Resistir, Restauração Maior"
          }
        ]
      },
      {
        "title": "Técnicas Marciais",
        "page": 202,
        "columns": [
          {
            "key": "tecnica",
            "label": "Técnica"
          },
          {
            "key": "efeito",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "tecnica": "Evitar",
            "efeito": "Ação bônus: companheiro usa Esquivar-se."
          },
          {
            "tecnica": "Bloquear",
            "efeito": "Reação ao ser atacado por criatura visível com dano físico: +PB na CA contra o ataque; se ainda acertar, reduza dano em 1d6+PB."
          },
          {
            "tecnica": "Carga",
            "efeito": "Ação: movimento adicional igual ao deslocamento e um Golpe Marcial. Se mover 6 m em linha reta e acertar, +1d10 e alvo faz Força CD 8 + Força do companheiro + PB ou cai no chão; criatura >1 categoria maior tem sucesso automático."
          },
          {
            "tecnica": "Pés Dançantes",
            "efeito": "Ação bônus: Desengajar."
          },
          {
            "tecnica": "Agarrar",
            "efeito": "Ação bônus: tentativa de agarrar criatura ao alcance."
          },
          {
            "tecnica": "Rasteira",
            "efeito": "Ação bônus: empurrar para derrubar, usando Força (Atletismo) ou Destreza (Atletismo); criatura >1 categoria maior tem sucesso automático."
          },
          {
            "tecnica": "Arremessar",
            "efeito": "Uma vez por turno, ao ter criatura agarrada e usar Atacar, substitua ataque por disputa de Força ou Destreza (Atletismo) contra Força (Atletismo) ou Destreza (Acrobacia); em vitória, mova alvo a espaço a 1,5 m, derrube-o e cause dano de concussão igual a duas rolagens do dado de Golpe Marcial."
          },
          {
            "tecnica": "Cotovelo do Povo",
            "efeito": "Uma vez por turno, substitua ataque contra alvo caído; limiar de crítico reduz em 1 por categoria que companheiro seja maior; em acerto, dano igual a duas rolagens de Golpe Marcial; acertando ou errando, companheiro cai no chão."
          },
          {
            "tecnica": "Uppercut",
            "efeito": "Uma vez por turno, substitua ataque contra alvo não caído; limiar de crítico reduz em 1 por categoria que companheiro seja menor; em acerto, dano igual a duas rolagens de Golpe Marcial."
          }
        ]
      }
    ],
    "references": []
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  const seen = new Set(window.GRIMORIO_SUBCLASSES.map(item => item.id));
  for (const item of subclasses) { if (!seen.has(item.id)) { window.GRIMORIO_SUBCLASSES.push(item); seen.add(item.id); } }
})();
