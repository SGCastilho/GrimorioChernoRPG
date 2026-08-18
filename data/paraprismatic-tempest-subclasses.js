'use strict';

(function () {
  const additions = [
  {
    "id": "paraprismatic-barbarian-path-daemoniacal",
    "classId": "barbarian",
    "name": "Caminho do Demoníaco",
    "originalName": "Path of the Daemoniacal",
    "aliases": [
      "Path of the Daemoniacal"
    ],
    "desc": "Um bárbaro marcado por uma maldição gravada na pele, imbuída com essência de fogo infernal. Ao canalizar esse poder, manifesta chamas demoníacas e assume uma aparência semelhante a um ínfero ou morto-vivo em combustão.",
    "sourcePage": 18,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "18",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "SEMPRE SOB CHAMAS",
        "level": 3,
        "page": 18,
        "text": "Quando entra em Fúria, você se envolve em chamas infernais e passa a exalar cheiro de enxofre. Enquanto estiver em Fúria: você tem resistência a dano de fogo; o dano adicional da Fúria torna-se dano de fogo e é dobrado; e suas armas explodem em fogo, aumentando seu alcance de ataque em 3 m. O dano causado a criaturas além de seu alcance normal por essa extensão é inteiramente dano de fogo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "BRAÇOS DEMONÍACOS",
        "level": 6,
        "page": 18,
        "text": "Quando faz um ataque com arma em seu turno, você pode criar uma réplica de qualquer arma mundana que já tenha visto e atacar com ela. A réplica é envolta em chamas que não o queimam e é feita de um material semelhante a madeira incandescente. Ela funciona normalmente, exceto por causar dano de fogo em vez do tipo normal, gerar a própria munição e desaparecer no início do seu turno se não estiver em sua posse. Você pode usar Constituição nas jogadas de ataque e dano com essas armas. Armas criadas assim recebem bônus de aprimoramento igual à metade do seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "VISAGEM ESTRIDENTE",
        "level": 6,
        "page": 18,
        "text": "Quando entra em Fúria, sua mortalha de chamas faz você assumir aparência demoníaca e vários crânios flamejantes surgem ao seu redor, gargalhando. Ao usar a ação que ativa sua Fúria, escolha até um número de criaturas que possam vê-lo ou ouvi-lo igual ao seu bônus de proficiência. Cada uma faz salvaguarda de Sabedoria, cuja CD usa Constituição ou Carisma. Em falha, fica amedrontada por você por 1 minuto e sofre, no início de cada turno, dano de fogo igual ao dobro do seu dano de Fúria. Ela repete a salvaguarda ao fim de cada turno, encerrando o efeito em sucesso.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ADESTRAMENTO DO FOGO INFERNAL",
        "level": 10,
        "page": 18,
        "text": "Você passa a portar as próprias chamas do inferno. Escudo Infernal: enquanto estiver em Fúria, na primeira vez em cada turno que for atingido por um ataque originado a até 4,5 m, o atacante sofre dano de fogo igual ao seu nível de Bárbaro. Queimadura Devastadora: quando obtém um acerto crítico, pode transformar todo o dano da arma e todo o dano adicional do crítico em dano de fogo, incluindo dados adicionais de Crítico Brutal. Fogo Puríssimo: dano de fogo que você causa ignora resistências; criaturas imunes a fogo são tratadas como resistentes a fogo contra seu dano.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ÁPICE DA RUÍNA",
        "level": 14,
        "page": 18,
        "text": "Quando faz um ataque corpo a corpo com arma, pode gastar um uso de Fúria para concentrar nela o fogo infernal. Até o fim do seu próximo turno, essa arma causa quatro dados de dano da arma adicionais como dano de fogo. Você pode usar esta característica duas vezes por Descanso, independentemente de quantas Fúrias possuir.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-bard-college-planes",
    "classId": "bard",
    "name": "Colégio dos Planos",
    "originalName": "College of The Planes",
    "aliases": [
      "College of The Planes",
      "College of Planes"
    ],
    "desc": "O Colégio dos Planos canta as maravilhas e perigos dos Planos Elementais e seus reflexos no Plano Material, trazendo para suas apresentações a centelha de paisagens e localidades além do mundo.",
    "sourcePage": 18,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "18–19",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "ESTUDOS PRISMÁTICOS",
        "level": 3,
        "page": 18,
        "text": "Escolha um grupo de magias: Burning Rites, Harvest Tradition, Torrential Arcanics ou Twisting Gale Path. Você trata as magias desse grupo como magias de Bardo, podendo aprendê-las e conjurá-las. Você aprende outro desses grupos no 6º nível de Bardo e outro no 14º.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MELODIA DA CONFLUÊNCIA",
        "level": 3,
        "page": 18,
        "text": "Quando conjura uma magia pertencente a um grupo aprendido por Estudos Prismáticos e ela exige um espaço de magia, você pode conceder Inspiração de Bardo a outra criatura sem gastar um uso, como parte da mesma ação.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ASSISTENTE ELEMENTAL",
        "level": 6,
        "page": 19,
        "text": "Uma vez por Descanso Longo, você pode produzir os efeitos de conjure elemental avatar sem espaço de magia, concentração ou componentes. A magia é conjurada no nível-base ou em um nível igual à metade do seu nível de Bardo, arredondado para baixo e limitado ao 9º nível, usando o maior dos dois.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ENERGIAS HARMONIOSAS",
        "level": 14,
        "page": 19,
        "text": "Enquanto outra criatura possuir uma de suas Inspirações de Bardo, quando ela sofrer dano de tempestade, reduz esse dano em uma quantidade de pontos igual ao seu nível de Bardo. Os tipos afetados dependem dos grupos aprendidos em Estudos Prismáticos: fogo para Burning Rites; veneno e ácido para Harvest Tradition; frio para Torrential Arcanics; e elétrico para Twisting Gale Path.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-blood-minister-planar-blood",
    "classId": "blood-minister-somnus",
    "name": "Flagelo do Sangue Planar",
    "originalName": "Scourge of Planar Blood",
    "aliases": [
      "Scourge of Planar Blood"
    ],
    "desc": "Um Ministro de Sangue cuja linhagem foi tocada por poderes maiores e tornou-se afinada a energias planares, podendo expressá-las por meio da Ministração Sanguínea.",
    "sourcePage": 19,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "19",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "FLAGELO SANGUÍNEO",
        "level": 3,
        "page": 19,
        "text": "Quando usa Ministração Sanguínea para gastar um Dado de Vida e adicionar o resultado a uma jogada de ataque, escolha um tipo de dano de tempestade. Por 1 minuto, no lugar do bônus de dano normalmente concedido pela Ministração Sanguínea, essa arma causa um dado adicional daquele tipo com o mesmo tamanho do Dado de Vida gasto. Uma arma pode armazenar quantidade desses dados adicionais igual ao seu bônus de proficiência. O efeito pode acumular; sempre que escolher um novo tipo de dano, todos os dados anteriores na arma mudam para o novo tipo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "VANQUISH HEMOPLANAR",
        "level": 7,
        "page": 19,
        "text": "Como ação, canalize a energia acumulada por Flagelo Sanguíneo numa arma e libere-a em uma das seguintes formas: esfera de 6 m de raio centrada em ponto a até 27 m; cone de 9 m; linha de 18 m de comprimento por 1,5 m de largura; todas as criaturas a até 9 m de você; ou uma única criatura a até 27 m. Cada criatura na área, exceto você, faz salvaguarda de Constituição com CD baseada em Força, Constituição ou Carisma. Em falha sofre dano do tipo de tempestade igual ao dobro dos dados adicionais armazenados na arma; em sucesso, metade. Se o alvo for uma única criatura, o dano é quatro vezes os dados armazenados. A arma então perde os benefícios de Flagelo Sanguíneo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "REBOTE ELEMENTAL",
        "level": 7,
        "page": 19,
        "text": "Quando usa um de seus Dados de Vida para qualquer efeito de Ministro de Sangue ao atacar, causar dano, realizar um teste contra ou fazer uma salvaguarda contra uma criatura elemental, dobre o resultado desse dado.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ROUBO DO NÚCLEO",
        "level": 11,
        "page": 19,
        "text": "Quando acerta um elemental, ínfero ou celestial com um ataque de arma, pode adicionar um dado de dano à arma como por Flagelo Sanguíneo. Esse dado pode ser de qualquer tipo de dano de tempestade.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "RESISTÊNCIA À TEMPESTADE",
        "level": 11,
        "page": 19,
        "text": "Você é resistente a dano de tempestade, isto é, ácido, frio, fogo, elétrico e veneno.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "VANQUISH PROTETOR",
        "level": 15,
        "page": 19,
        "text": "Quando usa Vanquish Hemoplanar, a arma perde apenas metade dos dados de dano armazenados quando o efeito termina. Você também pode usar Vanquish Hemoplanar no lugar de um ataque com arma, em vez de gastar uma ação, mas somente uma vez por turno e apenas no seu próprio turno.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "references": [
      {
        "title": "Especificidade da Tempestade",
        "page": 19,
        "text": "Esta subclasse normalmente permite escolher entre os cinco tipos de dano de tempestade. Ao criar o personagem, você pode decidir que suas características funcionam somente com um único tipo de dano de tempestade. Se fizer isso: Flagelo Sanguíneo pode imbuir uma arma com até o dobro do número normal de dados de dano; Resistência à Tempestade concede imunidade ao tipo escolhido e resistência aos demais; no 3º nível você ganha resistência ao tipo escolhido; no 3º nível, sempre que sofrer ao menos 1 ponto desse tipo de dano, adiciona 1d4 desse dano a uma arma à sua escolha como por Flagelo Sanguíneo, obedecendo os mesmos limites; Roubo do Núcleo sempre adiciona o tipo escolhido.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-cleric-elemental-domain",
    "classId": "cleric",
    "name": "Domínio Elemental",
    "originalName": "Elemental Domain",
    "aliases": [
      "Elemental Domain"
    ],
    "desc": "Clérigos do Domínio Elemental extraem poder dos deuses dos Planos Elementais ou de divindades com domínios intimamente ligados a eles, agindo como avatares de suas forças elementais.",
    "sourcePage": 20,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "20–21",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "PODER DA CONFLUÊNCIA",
        "level": 1,
        "page": 20,
        "text": "No lugar de Magias de Domínio, escolha Burning Rites, Harvest Tradition, Torrential Arcanics ou Twisting Gale Path e trate as magias da lista escolhida como suas Magias de Domínio. O grupo também define seu dano de confluência: fogo para Burning Rites, ácido para Harvest Tradition, frio para Torrential Arcanics e elétrico para Twisting Gale Path. Você pode usar Carisma como habilidade de conjuração de suas magias e características de Clérigo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MUDANÇA CONFLUENTE",
        "level": 1,
        "page": 20,
        "text": "Quando conjura uma magia que causa dano, pode alterar seus tipos de dano para seu dano de confluência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CANALIZAR DIVINDADE: MAJOR PARAPRISMÁTICO",
        "level": 2,
        "page": 20,
        "text": "Como ação bônus, use Canalizar Divindade para criar por 1 minuto uma tempestade de energia elemental ao seu redor. Durante esse período: você fica imune ao seu dano de confluência; realiza um ataque adicional sempre que usa a ação Atacar; pode substituir qualquer ataque com arma por um ataque mágico à distância contra alvo a até 27 m, causando Xd10 + modificador de conjuração do seu dano de confluência, em que X é metade do bônus de proficiência, arredondada para cima. Benefícios adicionais dependem de grupos conhecidos: Burning Rites: como ação bônus, faça um ataque com arma com vantagem; Harvest Tradition: adicione seu modificador de Carisma à CA, salvo se já o fizer; Torrential Arcanics: se não usar sua ação para conjurar magia no turno, pode conjurar como ação bônus uma magia de Clérigo com tempo de conjuração de 1 ação; Twisting Gale Path: seu deslocamento aumenta em 9 m. Você pode usar esta característica uma vez por Descanso Longo sem gastar Canalizar Divindade.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "VÉU PARAPRISMÁTICO",
        "level": 6,
        "page": 21,
        "text": "Uma vez por Descanso, produza os efeitos de Ilsrabae’s veil sem espaço de magia, em um nível igual à metade do seu nível de Clérigo, máximo 9º. Dessa forma, o véu concede resistência ao seu dano de confluência em vez de frio e também causa esse tipo de dano quando você é atingido.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GOLPE DIVINO (ELEMENTAL)",
        "level": 8,
        "page": 21,
        "text": "Cada vez que acerta com um ataque de arma, causa um dado adicional do seu dano de confluência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "EXPLOSÃO DO REINO",
        "level": 17,
        "page": 21,
        "text": "Quando acerta uma criatura com ataque de arma ou magia, pode usar sua ação bônus para tentar encerrá-la brevemente num semiplano de poder elemental. O alvo faz salvaguarda de Carisma. Em falha, desaparece e fica incapacitado por até 1 minuto. No início de cada turno dele, sofre 8d10 de dano de confluência e, ao fim do turno, repete a salvaguarda; em sucesso, retorna ao espaço de onde desapareceu ou ao desocupado mais próximo. Você pode usar esta característica três vezes por Descanso Longo e recupera um uso gasto ao concluir Descanso Curto. Como ação bônus, pode libertar voluntariamente uma criatura aprisionada e colocá-la em um espaço desocupado à sua escolha, capaz de comportá-la, a até 18 m de você.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-dragoneer-lord-guardian",
    "classId": "dragoneer",
    "name": "Guardião Soberano",
    "originalName": "Lord Guardian",
    "aliases": [
      "Lord Guardian"
    ],
    "desc": "Um protetor monumental que se ergue com a imponência de um dragão, alterando o tamanho do próprio corpo para tornar-se mais dracônico e canalizar força em defesa daqueles sob sua guarda.",
    "sourcePage": 21,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "21–22",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "ESTATURA DO SOBERANO",
        "level": 1,
        "page": 21,
        "text": "Como ação bônus, aumente uma categoria de tamanho; todo seu equipamento aumenta com você. O efeito dura 1 minuto. Enquanto estiver nesse tamanho: seu alcance de ataques corpo a corpo aumenta em 1,5 m; quando faz um ataque com arma, role 1d4 e some tanto à jogada de ataque quanto ao dano; sua capacidade de carga dobra; e você pode fazer um ataque corpo a corpo com arma como ação bônus. Usos por Descanso iguais à metade do bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GOLPE PROTETOR",
        "level": 3,
        "page": 22,
        "text": "Quando uma criatura dentro do alcance de sua arma corpo a corpo for alvo de um ataque, use sua reação para golpear a arma atacante. Faça um ataque corpo a corpo com arma; até o fim daquele turno, o alvo pode tratar o resultado da sua jogada de ataque como a nova Classe de Armadura dele, salvo se a CA já fosse maior.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "DEFESA DO DRAGÃO",
        "level": 7,
        "page": 22,
        "text": "Você possui Limiar de Dano igual ao seu nível de Cavaleiro Dracônico.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AÇÃO ENCADEADA APRIMORADA",
        "level": 13,
        "page": 22,
        "text": "Quando realiza a ação Atacar, pode fazer três ataques, em vez de um.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ESTATURA DO GOLIAS",
        "level": 17,
        "page": 22,
        "text": "Ao usar Estatura do Soberano, pode aumentar duas categorias de tamanho em vez de uma. Além dos benefícios normais: seu alcance corpo a corpo aumenta em mais 1,5 m; o bônus de ataque e dano torna-se 1d6 em vez de 1d4; sua capacidade de carga dobra novamente; e seu Golpe Encarnado causa um dado adicional de dano.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Parâmetros do Guardião Soberano",
        "page": 21,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
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
            "armor": "Todas as armaduras e escudos",
            "skills": "Atletismo; escolha duas entre Adestrar Animais, Intimidação, Natureza, Percepção e Sobrevivência",
            "casting": "Nenhuma"
          }
        ],
        "description": "Parâmetros de classe aplicados ao escolher esta especialização de Cavaleiro Dracônico."
      }
    ]
  },
  {
    "id": "paraprismatic-druid-circle-guardians",
    "classId": "druid",
    "name": "Círculo dos Guardiões",
    "originalName": "Circle of Guardians",
    "aliases": [
      "Circle of Guardians"
    ],
    "desc": "Defensores de Somnus Domina encarregados de preservar o equilíbrio entre o Plano Material e reinos como os Infernos, Planos Elementais e Reinos Exteriores; a natureza os usa como sua última linha direta de defesa.",
    "sourcePage": 22,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "22",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "PODER DA TERRA",
        "level": 2,
        "page": 22,
        "text": "Raios Corrosivos: você aprende eldritch blast, que conta como truque de Druida e não conta contra seus truques conhecidos. Quando o conjura, causa dano de veneno em vez de força e soma seu bônus de proficiência ao dano de cada ataque; pode conjurá-lo mesmo em Forma Selvagem. Armadura do Salgueiro: enquanto não usa armadura, sua CA pode ser 10 + Destreza + Sabedoria. Se uma magia ou efeito definir sua CA como um novo valor, como mage armor ou barkskin, você pode adicionar seu modificador de Sabedoria a esse novo valor.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "FÚRIA DO OCEANO",
        "level": 6,
        "page": 22,
        "text": "Anticorpo para Tudo: você tem vantagem em ataques contra criaturas consideradas não naturais a Somnus Domina — incluindo aberrações, ínferos, monstruosidades e mortos-vivos — e essas criaturas têm desvantagem nas salvaguardas contra suas magias e características de Druida. Fúria das Marés: na primeira vez em cada turno que causar dano a uma criatura, cause dano adicional igual à metade do seu nível de Druida; se causar dano a várias criaturas, escolha qual recebe esse dano.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "SANGUE DO CÉU",
        "level": 10,
        "page": 22,
        "text": "Ácido Sanguíneo: quando uma criatura o acerta com ataque corpo a corpo com arma, ela sofre dano de ácido igual ao seu bônus de proficiência; você também ganha resistência a dano não mágico contundente, perfurante e cortante. Explosão Regenerativa: uma vez por Descanso, como ação bônus, recupere PV iguais a 1d6 × seu nível de Druida.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CHAMAS DOS CÉUS",
        "level": 14,
        "page": 22,
        "text": "Você recebe duas ações especiais e pode usar uma delas uma vez por Descanso. Espírito Furioso: como ação, por 1 minuto empodere até seis criaturas voluntárias que possa ver; elas recebem +2 CA, PV temporários iguais à metade do seu nível de Druida, somam 1d4 às jogadas de ataque e o primeiro ataque de cada turno tem vantagem e causa um dado adicional de dano de fogo. Espírito Primal de Fogo: como ação bônus, por 1 minuto você se inflama com fogo prismático; seus ataques causam um dado adicional de dano de fogo, você recebe PV temporários iguais ao dobro do seu nível de Druida, torna-se imune a dano de tempestade e soma 1d6 a todas as salvaguardas.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-fighter-eidolic-knight",
    "classId": "fighter",
    "name": "Cavaleiro Eidólico",
    "originalName": "Eidolic Knight",
    "aliases": [
      "Eidolic Knight"
    ],
    "desc": "Um guerreiro arcano afinado à radiação eidomântica presente na atmosfera, capaz de moldá-la intuitivamente, encadear magia e combate e ampliar seu repertório por Grupos de Magias.",
    "sourcePage": 23,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "23–24",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "CONJURAÇÃO",
        "level": 3,
        "page": 23,
        "text": "Você aprende dois truques da lista de Mago e outro no 8º e 14º níveis. No 3º nível conhece três magias de Mago de 1º nível, duas obrigatoriamente de Abjuração ou Evocação. A tabela de Conjuração do Cavaleiro Eidólico determina magias conhecidas e espaços. Ao ganhar nível, pode substituir uma magia conhecida por outra magia de Mago para a qual tenha espaço, ou por magia de um Grupo de Magias aprendido. Repertório Mágico: no 4º, 8º, 12º, 16º e 20º níveis, escolha um novo Grupo de Magias; a partir de então, novas magias da subclasse podem vir desse grupo independentemente de lista de classe ou escola. Em cada um desses níveis você também aprende uma magia daquele grupo; se a trocar posteriormente, deve ser por outra do mesmo grupo. Habilidade de Conjuração: escolha Constituição, Inteligência ou Carisma ao adquirir a subclasse. Multiclasse: esta subclasse conta como um terço de conjurador.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "IMPULSO DE CIRCUITO",
        "level": 3,
        "page": 23,
        "text": "Ao usar Surto de Ação, você pode usar a ação resultante para conjurar uma magia como se estivesse usando o maior nível de espaço de magia de Cavaleiro Eidólico a que tem acesso, sem gastar espaço. Uma magia conjurada por seu Surto de Ação pode ter tempo de conjuração de 1 ação ou 1 ação bônus.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "LÂMINA ARCANA",
        "level": 7,
        "page": 24,
        "text": "Armas Arcanas: seus ataques com arma são sempre mágicos. Conjuração Explosiva: como ação bônus, gaste um uso de Combat Mastery para conjurar uma magia de 1 ação, pagando normalmente o espaço; ela deve ser a única magia que você conjura nesse turno. Lâmina Mágica: quando conjura uma magia de 1 ação, pode fazer um ataque com arma como parte da mesma ação; quando realiza a ação Atacar, pode conjurar um truque como ação bônus.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "LÂMINA EIDÓLICA",
        "level": 10,
        "page": 24,
        "text": "Proficiência Eidólica: você aprende a escola de magia Eidomancia e pode aprender suas magias; realiza testes de Eidomancia com vantagem. Sobrecarga Eidomântica: quando conjura uma magia em seu turno, tem vantagem em todos os ataques até o fim do turno e soma seu modificador de conjuração a todas as jogadas de dano com arma nesse período. Lâmina Divina: seus ataques e dano contam como eidólicos e mágicos.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "PASSO MÁGICO",
        "level": 15,
        "page": 24,
        "text": "Quando conjura uma magia de qualquer nível, pode teleportar uma distância em metros igual a 9 × o nível em que ela foi conjurada, antes ou depois da ação usada para conjurá-la. Ao conjurar um truque, pode teleportar 4,5 m.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "TESTAMENTO ARCANO",
        "level": 18,
        "page": 24,
        "text": "Quando conjura uma magia usando Impulso de Circuito, pode tratá-la como se tivesse sido conjurada no 9º nível.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Conjuração do Cavaleiro Eidólico",
        "page": 23,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "level",
            "label": "Nível"
          },
          {
            "key": "cantrips",
            "label": "Truques"
          },
          {
            "key": "known",
            "label": "Magias Conhecidas"
          },
          {
            "key": "s1",
            "label": "1º"
          },
          {
            "key": "s2",
            "label": "2º"
          },
          {
            "key": "s3",
            "label": "3º"
          },
          {
            "key": "s4",
            "label": "4º"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "cantrips": "2",
            "known": "3",
            "s1": "2",
            "s2": "—",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "4º",
            "cantrips": "2",
            "known": "5*",
            "s1": "3",
            "s2": "—",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "5º",
            "cantrips": "2",
            "known": "5",
            "s1": "3",
            "s2": "—",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "6º",
            "cantrips": "2",
            "known": "5",
            "s1": "3",
            "s2": "—",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "7º",
            "cantrips": "2",
            "known": "6",
            "s1": "4",
            "s2": "2",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "8º",
            "cantrips": "3",
            "known": "8*",
            "s1": "4",
            "s2": "2",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "9º",
            "cantrips": "3",
            "known": "8",
            "s1": "4",
            "s2": "2",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "10º",
            "cantrips": "3",
            "known": "9",
            "s1": "4",
            "s2": "3",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "11º",
            "cantrips": "3",
            "known": "10",
            "s1": "4",
            "s2": "3",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "12º",
            "cantrips": "3",
            "known": "11*",
            "s1": "4",
            "s2": "3",
            "s3": "—",
            "s4": "—"
          },
          {
            "level": "13º",
            "cantrips": "3",
            "known": "12",
            "s1": "4",
            "s2": "3",
            "s3": "2",
            "s4": "—"
          },
          {
            "level": "14º",
            "cantrips": "4",
            "known": "13",
            "s1": "4",
            "s2": "3",
            "s3": "2",
            "s4": "—"
          },
          {
            "level": "15º",
            "cantrips": "4",
            "known": "13",
            "s1": "4",
            "s2": "3",
            "s3": "2",
            "s4": "—"
          },
          {
            "level": "16º",
            "cantrips": "4",
            "known": "15*",
            "s1": "4",
            "s2": "3",
            "s3": "3",
            "s4": "—"
          },
          {
            "level": "17º",
            "cantrips": "4",
            "known": "15",
            "s1": "4",
            "s2": "3",
            "s3": "3",
            "s4": "—"
          },
          {
            "level": "18º",
            "cantrips": "4",
            "known": "15",
            "s1": "4",
            "s2": "3",
            "s3": "3",
            "s4": "—"
          },
          {
            "level": "19º",
            "cantrips": "4",
            "known": "16",
            "s1": "4",
            "s2": "3",
            "s3": "3",
            "s4": "1"
          },
          {
            "level": "20º",
            "cantrips": "4",
            "known": "18*",
            "s1": "4",
            "s2": "3",
            "s3": "3",
            "s4": "1"
          }
        ],
        "description": "O asterisco indica os níveis em que o Repertório Mágico concede uma magia adicional vinculada a um novo Grupo de Magias."
      }
    ]
  },
  {
    "id": "paraprismatic-inscriptor-war-journal",
    "classId": "inscriptor-retia",
    "name": "Diário de Guerra",
    "originalName": "War Journal",
    "aliases": [
      "War Journal"
    ],
    "desc": "Um Inscritor que registra e estuda batalhas históricas, reais ou fictícias, e transforma relatos de heróis, soldados e comandantes em ordens arcanas e manifestações de campos de guerra.",
    "sourcePage": 25,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "25",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "CONHECIMENTO DE ARMAS DE FOGO",
        "level": 1,
        "page": 25,
        "text": "Você é proficiente com armas simples, marciais e armas de fogo. Pode usar sua habilidade de conjuração nas jogadas de ataque e dano com essas armas e pode tratar seus ataques como ataques mágicos produzidos por uma magia, se desejar. Seus ataques e dano são mágicos. Ao usar arma com munição que precise recarregar, pode criar munição magicamente; ela desaparece quando você realiza um Descanso. Se esta for sua primeira classe no personagem, pode começar com uma arma de fogo simples como parte do equipamento inicial.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "HERÓI EM MENTE",
        "level": 1,
        "page": 25,
        "text": "Enquanto não estiver usando armadura nem escudo, sua Classe de Armadura pode ser 10 + seu modificador de Destreza + seu modificador de Inteligência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ATAQUE EXTRA (CONJURAR)",
        "level": 5,
        "page": 25,
        "text": "Quando realiza a ação Atacar, pode atacar duas vezes. Em alternativa, pode fazer um ataque com arma e conjurar uma magia com tempo de conjuração de 1 ação. Além disso, seus ataques com arma causam dano adicional igual à metade do seu nível de Inscritor, e você pode fazer todo o dano do ataque tornar-se psíquico.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "OPÇÃO ESTRATÉGICA",
        "level": 8,
        "page": 25,
        "text": "Como ação bônus, use uma Reviravolta Narrativa para instruir seus aliados. Até um número de criaturas a até 18 m igual ao seu bônus de proficiência pode usar a reação para seguir as instruções: cada uma pode se levantar se estiver caída e mover até seu deslocamento sem provocar ataques de oportunidade e ignorando terreno difícil.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "APRIMORAMENTO DA JORNADA DE GUERRA",
        "level": 12,
        "page": 25,
        "text": "Você melhora em duas frentes: ao realizar a ação Atacar, pode fazer três ataques como em Ataque Extra (Conjurar), ainda podendo substituir um deles por uma magia de 1 ação; e, enquanto não empunhar escudo e tiver uma mão livre para sinalizar manobras táticas, pode adicionar seu bônus de proficiência à Classe de Armadura.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "PROJETO DEVASTADO PELA GUERRA",
        "level": 20,
        "page": 25,
        "text": "Como ação, gaste um uso de Consultation para produzir por 1 minuto um dos efeitos a seguir, que pode encerrar como ação bônus. Cerco de Artilharia: criaturas à sua escolha em esfera de 9 m de raio centrada num ponto visível fazem salvaguarda de Destreza; em falha sofrem 8d8 de força, metade em sucesso. Quem falha por 5 ou mais fica caído e com deslocamento 0 até o fim do próximo turno. Durante o minuto, inclusive no turno inicial, como ação bônus escolha uma criatura a até 18 m e repita o efeito apenas contra ela. Névoa da Guerra: criaturas a até 18 m, exceto as omitidas por você, fazem salvaguarda de Inteligência; em falha sofrem 4d6 psíquico e são tratadas como se tivessem falhado na salvaguarda de confusion. Fileiras Enxameantes: toda área a até 9 m é terreno difícil para todos exceto você e aliados; criaturas que entram em qualquer espaço da área sofrem 1d6 psíquico; enquanto durar, você tem três-quartos de cobertura.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo — Diário de Guerra",
        "page": 25,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
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
            "level": "1º",
            "spells": "Heroism; Hunter’s Mark"
          },
          {
            "level": "3º",
            "spells": "Enlarge/Reduce; Mirror Image"
          },
          {
            "level": "5º",
            "spells": "Fireball; Haste"
          },
          {
            "level": "7º",
            "spells": "Unsealed Bravery; Valkyrie’s Wrath"
          },
          {
            "level": "9º",
            "spells": "Hold Monster; Writ Cannon"
          }
        ],
        "description": "Essas magias contam como magias de Inscritor e não contam contra suas magias conhecidas."
      }
    ],
    "references": [
      {
        "title": "Magias de Capítulo",
        "page": 25,
        "text": "Você conhece as Magias de Capítulo mostradas na tabela desta subclasse. Elas contam como magias de Inscritor para você e não contam contra suas magias conhecidas.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-monk-way-tempest",
    "classId": "monk",
    "name": "Caminho da Tempestade",
    "originalName": "Way of the Tempest",
    "aliases": [
      "Way of the Tempest"
    ],
    "desc": "Monges que seguem as marés dos Planos Elementais buscam equilíbrio e conexão com a natureza, sentindo a circulação de poder elemental em todas as coisas vivas e transformando energia espiritual em milagres elementais.",
    "sourcePage": 26,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "26–27",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "MAESTRIA ELEMENTAL",
        "level": 3,
        "page": 26,
        "text": "Escolha Burning Rites, Harvest Tradition, Torrential Arcanics ou Twisting Gale Path. Você pode gastar Ki para conjurar certas magias desse grupo e do grupo Elemental Confluence conforme a tabela Opções de Magias da Tempestade. No 6º, 11º e 17º níveis, aprenda um grupo adicional. Você pode conjurar magias desses grupos de nível igual ou inferior ao seu bônus de proficiência. O custo em Ki é igual ao nível em que a magia é conjurada; truques não custam Ki. Você não pode conjurar por esta característica em nível superior à metade do seu nível de Monge, arredondada para cima, máximo 9º. Sabedoria é sua habilidade de conjuração.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "DISCIPLINA DA TEMPESTADE",
        "level": 6,
        "page": 26,
        "text": "Você pode conjurar como ação bônus qualquer magia de Maestria Elemental cujo tempo de conjuração seja 1 ação, gastando 2 pontos de Ki adicionais.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MÃO DA RODA GIRATÓRIA",
        "level": 6,
        "page": 26,
        "text": "Uma vez por Descanso, produza os efeitos de infused weapon sem espaço de magia, tendo como alvo uma arma ou seus ataques desarmados. A arma passa a ser uma arma de Monge durante a duração. A magia é produzida no nível-base, mas você pode gastar Ki adicional para conjurá-la esse mesmo número de níveis acima, sem ultrapassar o nível máximo permitido por Maestria Elemental. O tipo de dano deve corresponder a um grupo aprendido: fogo, ácido, frio ou elétrico.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CONJURAR ELEMENTAL",
        "level": 11,
        "page": 26,
        "text": "Uma vez por Descanso Longo, produza os efeitos de conjure elemental avatar sem gastar Ki e sem concentração. A magia é conjurada no nível-base + metade do seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GRANDE EVOCAÇÃO",
        "level": 17,
        "page": 26,
        "text": "Quando conjura uma magia usando Maestria Elemental, o nível efetivo é 1 acima da quantidade de Ki usada. Você pode gastar 1 ponto a menos que o normalmente exigido para conjurar essas magias no nível-base. Esta característica não se aplica à Mão da Roda Giratória.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Opções de Magias da Tempestade",
        "page": 27,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "burn",
            "label": "Burning Rites"
          },
          {
            "key": "harvest",
            "label": "Harvest Tradition"
          },
          {
            "key": "torrent",
            "label": "Torrential Arcanics"
          },
          {
            "key": "gale",
            "label": "Twisting Gale Path"
          },
          {
            "key": "confluence",
            "label": "Elemental Confluence"
          }
        ],
        "rows": [
          {
            "level": "Truques",
            "burn": "Manipulate Flames; Fire Bolt",
            "harvest": "Manipulate Earth; Thorn Whip",
            "torrent": "Frostveil; Manipulate Water",
            "gale": "Billow; Electric Chain",
            "confluence": "—"
          },
          {
            "level": "1º",
            "burn": "Hellish Rebuke; Igniting Smite",
            "harvest": "Entangle; Ray of Sickness",
            "torrent": "Fog Cloud; Piercing Crystal",
            "gale": "Seizing Bolt; Thunderwave",
            "confluence": "Absorb Energy; Chromatic Arrow"
          },
          {
            "level": "2º",
            "burn": "Flaming Sphere; Scorching Ray",
            "harvest": "Earthen Grasp; Spike Growth",
            "torrent": "Sea-Dweller’s Aspect; Snowball Storm",
            "gale": "Harpy Strike; Laborious Flight",
            "confluence": "Tempest Strikes"
          },
          {
            "level": "3º",
            "burn": "Fireball; Minute Meteors",
            "harvest": "Create Food and Water; Plant Growth",
            "torrent": "Water Breathing; Water Walk",
            "gale": "Lightning Bolt; Lightning Storm",
            "confluence": "—"
          },
          {
            "level": "4º",
            "burn": "Fire Shield; Magma Wave",
            "harvest": "Grasping Vine; Stone Shape",
            "torrent": "Hydro Cage; Ice Storm",
            "gale": "Battering Storm; Electric Arc",
            "confluence": "Energy Scourge"
          },
          {
            "level": "5º",
            "burn": "Burning Web; Forgelord’s Chains",
            "harvest": "Land’s Fury; Tree Stride",
            "torrent": "Cone of Cold; Whirlpool",
            "gale": "Conquering Winds; Slash Wind",
            "confluence": "Elemental Assault"
          },
          {
            "level": "6º",
            "burn": "Investiture of Fire",
            "harvest": "Investiture of Earth; Wall of Thorns",
            "torrent": "Investiture of Frost; Wall of Ice",
            "gale": "Investiture of Air; Wind Walk",
            "confluence": "Tempest Ward"
          },
          {
            "level": "7º",
            "burn": "—",
            "harvest": "—",
            "torrent": "—",
            "gale": "—",
            "confluence": "Prismatic Spray"
          },
          {
            "level": "8º",
            "burn": "Nova",
            "harvest": "Earthquake",
            "torrent": "Tsunami",
            "gale": "Tornado",
            "confluence": "Control Weather"
          },
          {
            "level": "9º",
            "burn": "—",
            "harvest": "—",
            "torrent": "—",
            "gale": "—",
            "confluence": "—"
          }
        ],
        "description": "Tabela referenciada por Maestria Elemental. Magias acima do 6º nível permanecem listadas para casos em que o bônus de proficiência ultrapasse +6."
      }
    ]
  },
  {
    "id": "paraprismatic-paladin-oath-banishment",
    "classId": "paladin",
    "name": "Juramento do Banimento",
    "originalName": "Oath of Banishment",
    "aliases": [
      "Oath of Banishment"
    ],
    "desc": "Um juramento assumido por campeões que protegem as fronteiras do próprio reino contra invasões extraplanares, sem confundir a existência de seres de outros planos com maldade intrínseca.",
    "sourcePage": 27,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "27–28",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 27,
        "text": "Você recebe duas opções. Cortar Através da Natureza: quando acerta criatura com ataque de magia ou arma que causa dano ao qual ela é resistente ou imune, use Canalizar Divindade; o alvo faz salvaguarda de Carisma. Em falha, imunidade torna-se apenas resistência, ou resistência é removida, por 1 hora. Ruptura Planar: como ação, use Canalizar Divindade para produzir os efeitos de banishment contra número de criaturas igual ao seu bônus de proficiência. Dessa forma, não é magia nem efeito mágico e não exige concentração; cada alvo repete a salvaguarda de Carisma ao fim de cada turno, encerrando em sucesso.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AURA DE EQUILÍBRIO ABJURATIVO",
        "level": 7,
        "page": 28,
        "text": "Enquanto não estiver incapacitado, emana aura de 3 m que enfraquece forasteiros, isto é, criaturas não nativas do plano em que você está. Forasteiros na aura têm desvantagem em jogadas de ataque e salvaguardas, e você tem vantagem em todos os ataques contra eles dentro da aura. No 18º nível de Paladino, o alcance aumenta para 9 m.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "VISÃO DAS FRONTEIRAS",
        "level": 15,
        "page": 28,
        "text": "Você enxerga simultaneamente o Plano Material e o Etéreo e pode interagir, mirar, atacar ou comunicar-se com tudo que vê em ambos como se estivesse presente nos dois. Pode atacar, agarrar e bloquear o movimento de criaturas etéreas ou incorpóreas.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ARQUICAVALEIRO PLANAR",
        "level": 20,
        "page": 28,
        "text": "Como ação bônus, por 1 minuto você se envolve em aura prismática e passa a cortar fendas no espaço. Escolha um tipo de dano de tempestade: todo dano que causar torna-se desse tipo e suas armas causam um dado adicional desse dano. No lugar de um ataque com arma, pode teleportar para espaço desocupado visível a até 18 m; o próximo ataque com arma no turno tem vantagem. Uma vez em cada turno, ao acertar com arma, pode forçar salvaguarda de Carisma; em falha, o alvo é suspenso e incapacitado num bolso dimensional até o fim do seu próximo turno, depois retorna. Criaturas nativas de outro plano têm desvantagem nas salvaguardas contra você e você tem vantagem em ataques contra elas. Três vezes por transformação, pode usar Cortar Através da Natureza sem gastar Canalizar Divindade. Uso uma vez por Descanso.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento do Banimento",
        "page": 27,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Paladino"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Infused Weapon; Tempest Strikes"
          },
          {
            "level": "5º",
            "spells": "Moonbeam; Weapon of Domination"
          },
          {
            "level": "9º",
            "spells": "Protection from Energy; Valkyrie’s Binding Rings"
          },
          {
            "level": "13º",
            "spells": "Banishment; Resilient Sphere"
          },
          {
            "level": "17º",
            "spells": "Elemental Assault; Phantom Step"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "Preceitos do Banimento",
        "page": 27,
        "text": "Devida Diligência: considerar todos os forasteiros malignos é tolice; reconheça a bondade que pode existir neles. Respeito em Ambas as Direções: como espera respeito de seres extraplanares em seu mundo, respeite-os no mundo deles e não interfira em seus assuntos. ENTENDA SEU LUGAR: busque conhecimento sobre mundos e planos além do seu para compreender aquilo que deve proteger.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-petal-knight-devils-claw",
    "classId": "petal-knight-retia",
    "name": "Garra do Diabo",
    "originalName": "Devil’s Claw",
    "aliases": [
      "Devil’s Claw"
    ],
    "desc": "Um Cavaleiro das Pétalas imbuído de eletricidade, ligado a epítetos de caçadores e rastreadores, capaz de acelerar a própria movimentação e aprisionar inimigos com correntes de energia.",
    "sourcePage": 29,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "29",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "INTENÇÃO DE CAÇA",
        "level": 2,
        "page": 29,
        "text": "Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, produza os efeitos de hunter’s mark sem espaço de magia. Você tem vantagem nos testes de concentração para mantê-la.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "TRAVA DE GOLPES",
        "level": 2,
        "page": 29,
        "text": "Se acertar com ataque de arma uma criatura que você já acertou com um ataque de arma desde o início do seu turno anterior, cause um dado adicional de dano da arma como dano elétrico.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "PASSO RELÂMPAGO",
        "level": 6,
        "page": 29,
        "text": "Seu deslocamento base aumenta em 1,5 m × seu bônus de proficiência e aumenta novamente sempre que o bônus de proficiência aumentar.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "RAMO VIRTUOSO: CORRENTE DA TEMPESTADE",
        "level": 6,
        "page": 29,
        "text": "Ao conjurar uma magia usando um espaço de magia de pacto, pode escolher esta opção de Ramo Virtuoso: energia mágica forma uma corrente elétrica e você realiza uma ação Atacar, fazendo todos os ataques envolvidos como ataques mágicos corpo a corpo com alcance de 4,5 m. Cada ataque causa Xd8 elétrico + sua habilidade de conjuração, em que X é metade do bônus de proficiência. Se acertar a mesma criatura duas vezes com a corrente, ela fica restringida até o fim do seu próximo turno. Os ataques podem ocorrer antes ou depois dos efeitos da magia. Esta opção não pode ser usada se a magia tiver sido conjurada como parte de Blossoming Spell.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "FLORA DA GARRA DO DIABO",
        "level": 11,
        "page": 29,
        "text": "Você recebe duas opções de Flora Virtuosa, usadas como ação bônus. Investida do Diabo: teleporte em relâmpago vermelho para espaço desocupado visível a até 18 m; se aparecer adjacente a criatura hostil, faça um ataque com vantagem contra ela como parte da mesma ação. Aura do Ínfero: por 1 minuto, na primeira vez em cada turno que uma criatura tentar atacar você ou alvejá-lo com efeito nocivo, ela faz salvaguarda de Sabedoria contra sua CD de magia; em falha, não pode atacá-lo ou alvejá-lo pelo restante do turno, e a ação/ataque é desperdiçada.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "EVITAÇÃO",
        "level": 15,
        "page": 29,
        "text": "Quando faz uma salvaguarda para sofrer metade do dano de um efeito, transforma-se em relâmpago para evitá-lo: sofre metade do dano em falha e nenhum dano em sucesso.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-ranger-predator-prismatic",
    "classId": "ranger",
    "name": "Predador Prismático",
    "originalName": "Predator Prismatic",
    "aliases": [
      "Predator Prismatic"
    ],
    "desc": "Um Patrulheiro treinado para matar elementais e outras criaturas cuja anatomia foge ao convencional, estudando os Planos Elementais para usar sua magia e atravessar suas defesas.",
    "sourcePage": 30,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "30",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "CAÇADOR ELEMENTAL",
        "level": 3,
        "page": 30,
        "text": "Elementais passam a ser um de seus Inimigos Favoritos, além de suas outras escolhas. Você é resistente a todo dano de tempestade causado por elementais. Ao observar uma criatura, consegue saber pelo fluxo de energia se ela é resistente, imune ou vulnerável a cada tipo de dano de tempestade.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ESTUDOS PLANARES",
        "level": 3,
        "page": 30,
        "text": "Escolha dois grupos entre Burning Rites, Harvest Tradition, Torrential Arcanics e Twisting Gale Path. Você pode aprender e conjurar as magias escolhidas como se estivessem na lista de Patrulheiro; ao conjurá-las, qualquer criatura que você alveje com seus efeitos é tratada como seu Inimigo Favorito.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "sourceNote": "A fonte imprime “3rd-level Prismatic Predator feature”, invertendo a ordem do nome da subclasse, cujo nome oficial na mesma seção é Predator Prismatic."
      },
      {
        "title": "EXPULSÃO EXTERIOR",
        "level": 7,
        "page": 30,
        "text": "Um número de vezes por Descanso Longo igual ao seu Bônus de Favor, produza os efeitos de banishment sem espaço de magia nem componentes.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CRÍTICO ELEMENTAL",
        "level": 11,
        "page": 30,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20. Quando obtém um crítico, pode adicionar um Dado de Favor adicional ao dano, além do concedido por Hunter’s Critical, e todos os dados extras do crítico podem causar qualquer tipo de dano de tempestade.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ESTUDOS PLANARES APRIMORADOS",
        "level": 11,
        "page": 30,
        "text": "Você aprende os dois grupos restantes das opções de Estudos Planares e pode aprender imediatamente duas magias adicionais de qualquer um dos quatro grupos; elas não contam contra suas magias de Patrulheiro conhecidas.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "BYPASS DO MATADOR",
        "level": 15,
        "page": 30,
        "text": "Quando causa a qualquer criatura dano que não seja contundente, perfurante ou cortante, ignora resistência a esse dano. Você não ignora imunidades.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-rogue-rimeknife",
    "classId": "rogue",
    "name": "Lâmina de Geada",
    "originalName": "Rimeknife",
    "aliases": [
      "Rimeknife"
    ],
    "desc": "Um Ladino que canaliza frio do Plano Elemental da Água ou de outra fonte estígia em suas armas para congelar, necrosar e debilitar o corpo de suas vítimas.",
    "sourcePage": 30,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "30–31",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "LÂMINA CONGELANTE",
        "level": 3,
        "page": 30,
        "text": "Sempre que causaria dano de Ataque Furtivo, pode subtrair d6s desse dano para escolher efeitos abaixo. O alvo faz salvaguarda de Constituição cuja CD usa Destreza, Inteligência ou Carisma; em falha sofre os efeitos escolhidos. Em sucesso, sofre o dano normal de Ataque Furtivo, mas como frio. No 13º nível, pode escolher dois efeitos e aplicar ambos na mesma falha. Criar Abertura (1d6): seus ataques contra o alvo têm vantagem até o fim do próximo turno e você pode imediatamente usar ação bônus para fazer dois ataques contra ele com a mesma arma. Reflexos Entorpecidos (1d6): alvo fica sluggish até o fim do próximo turno. Corte no Olho (1d6): alvo fica cego até o fim do próximo turno dele. Congelamento da Concentração (2d6): concentração do alvo termina imediatamente. Braço Pesado (2d6): até o início do seu próximo turno, o alvo só pode fazer um ataque com arma por turno. Corte de Tendão (2d6): CA do alvo é reduzida pelo seu bônus de proficiência até o fim do próximo turno. Nuvem de Névoa (4d6): névoa gelada de 9 m de raio surge centrada no alvo e se move com ele até o fim do próximo turno; a área é fortemente obscurecida, exceto para você, que fica invisível nela e enxerga criaturas normalmente. Torção Atordoante (6d6): alvo fica atordoado até o início do próximo turno dele. Golpe Retardante (Xd6): reduza o deslocamento do alvo em 3 m por d6 gasto por 1 minuto ou até receber cura; nova aplicação substitui a antiga. O alvo pode fazer teste de Medicina, usando Destreza, Inteligência ou Carisma, em si mesmo para remover o efeito.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "PASSAGEM SILENCIOSA",
        "level": 3,
        "page": 31,
        "text": "Quando você seria considerado levemente obscurecido, é considerado fortemente obscurecido. Quando está em neblina ou névoa espessa, é considerado como tendo cobertura total.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CAMINHANTE DA TEMPESTADE",
        "level": 9,
        "page": 31,
        "text": "Você ganha visão às cegas de 9 m, que se soma a outras fontes de visão às cegas; resistência a frio e imunidade aos efeitos negativos de ambientes frios; move-se em terreno difícil causado por gelo ou neve como terreno normal; e chuva, neblina, névoa, neve e efeitos semelhantes não prejudicam sua visão nem movimento.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "EVITAÇÃO DO GELO MORTO",
        "level": 17,
        "page": 31,
        "text": "Quando usa Esquiva Sobrenatural, sofre nenhum dano em vez de metade. Sua característica Evasão passa a se aplicar a todas as salvaguardas, não apenas Destreza.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-sorcerer-flamekeeper",
    "classId": "sorcerer",
    "name": "Guardião da Chama",
    "originalName": "Flamekeeper",
    "aliases": [
      "Flamekeeper",
      "Flamkeeper"
    ],
    "desc": "Um Feiticeiro que carrega no sangue uma chama acolhedora, herdada de poderoso elemental do fogo, celestial ou guardião, e pode compartilhá-la para fortalecer e restaurar outras pessoas.",
    "sourcePage": 31,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "31",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "FOGO NUTRIDOR DA ALMA",
        "level": 1,
        "page": 31,
        "text": "Como ação bônus, toque uma criatura e conceda sua chama por 1 minuto. Ela recebe bônus nas jogadas de ataque igual à metade do seu bônus de proficiência. Usos por Descanso iguais ao seu modificador de Carisma. Sempre que conjura uma magia de Feiticeiro usando espaço, uma criatura beneficiada por Fogo Nutridor da Alma recupera PV iguais ao dobro do nível do espaço usado.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CALOR REPARADOR",
        "level": 6,
        "page": 31,
        "text": "Ao conceder Fogo Nutridor da Alma, o alvo recebe PV temporários iguais a 1d4 × seu nível de Feiticeiro. Você passa a poder aplicar a característica em alvos a até 9 m.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "SONO RESTAURADOR",
        "level": 6,
        "page": 31,
        "text": "Ao usar a regra Baldur’s Rest, pode realizar um Descanso Curto adicional por Descanso Longo. Quando seus aliados fazem um Descanso Curto em sua presença e gastam Dados de Vida, eles recuperam PV adicionais iguais ao seu nível de Feiticeiro; você não recebe esse benefício.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "REVIVER EM EXPLOSÃO DE FOGO",
        "level": 14,
        "page": 31,
        "text": "Você e aliados a até 9 m têm vantagem em salvaguardas contra a morte. Se uma criatura morrer dentro desse alcance, uma vez por Descanso você pode impedir a morte e restaurá-la a PV iguais ao seu nível de Feiticeiro.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GROSSEIRAMENTE INCANDESCENTE",
        "level": 18,
        "page": 31,
        "text": "Quando uma criatura beneficiada por seu Fogo Nutridor da Alma é reduzida a 0 PV ou morta instantaneamente, faça um teste de concentração com CD 10 + metade do dano que excedeu os PV restantes dela. Em sucesso, o efeito de Fogo Nutridor da Alma termina e a criatura fica com PV iguais a 1d8 × 5 em vez disso; em falha, nada acontece.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-sorcerer-oaken-soul",
    "classId": "sorcerer",
    "name": "Alma de Carvalho",
    "originalName": "Oaken Soul",
    "aliases": [
      "Oaken Soul"
    ],
    "desc": "Um Feiticeiro cuja essência da terra corre no sangue como seiva, oriunda de bênção de espírito natural, dríade, arquidruida ou outro ser ligado profundamente à natureza.",
    "sourcePage": 32,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "32",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "CORAÇÃO PRIMAL",
        "level": 1,
        "page": 32,
        "text": "Você pode tratar magias de Druida como se estivessem na lista de Feiticeiro. Também é resistente a dano de veneno e imune à condição envenenado.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ALCANCE DAS RAÍZES",
        "level": 1,
        "page": 32,
        "text": "Você transforma membros em raízes e madeira. Seu alcance de ataques corpo a corpo e ataques de toque aumenta em 1,5 m × seu bônus de proficiência. Como ação, faça quantidade de ataques mágicos corpo a corpo com esses membros igual à metade do bônus de proficiência, contra criaturas no alcance. Cada acerto causa dano contundente mágico de 1d6 + Carisma; o dado vira d8 no 6º nível, d10 no 14º e d12 no 18º. Uma criatura atingida faz salvaguarda de Força contra sua CD de magia; em falha, escolha: ela fica restringida até o início do seu próximo turno, sendo possível manter apenas uma criatura restringida assim; ou é puxada/empurrada para espaço desocupado à sua escolha dentro do seu alcance corpo a corpo e fica caída.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ALCANCE DA TERRA",
        "level": 6,
        "page": 32,
        "text": "Você tem sentido sísmico a 4,5 m × seu bônus de proficiência; se já o possui, o alcance aumenta em 18 m. Se detectar criatura por sentido sísmico, pode alvejá-la com magias ou Alcance das Raízes como se a visse claramente, sem obstruções ou cobertura e como se estivesse em alcance de toque.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "CICLO RESTAURADOR",
        "level": 14,
        "page": 32,
        "text": "Quando conjura uma magia de Feiticeiro, recupera PV iguais a duas vezes o nível em que a magia foi conjurada + seu modificador de habilidade de conjuração.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "ARCANO VINCULANTE",
        "level": 18,
        "page": 32,
        "text": "Quando conjura uma magia que alveja uma ou mais outras criaturas, pode gastar 2 Pontos de Feitiçaria + 1 por alvo que deseja atingir com esta característica. Raízes e vinhas tentam prender cada alvo escolhido, que faz salvaguarda de Força. Em falha, fica restringido até o início do seu próximo turno ou pela duração da magia, o que for mais longo; pode tentar escapar com ação e teste de Força contra sua CD de magia. Enquanto restringido assim, tem desvantagem nas salvaguardas contra suas magias e sofre 4d12 contundente no início de cada turno. Depois de determinar quem foi vinculado, os efeitos da magia ocorrem.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-sword-saint-geomancer",
    "classId": "sword-saint-retia",
    "name": "Caminho do Geomante",
    "originalName": "Way of the Geomancer",
    "aliases": [
      "Way of the Geomancer"
    ],
    "desc": "Um Santo da Espada que usa Foco para afinar-se ao mundo e canalizar energia elemental, manipulando a natureza até que seus atos deixem de ser simplesmente mágicos e passem a impor sua vontade ao ambiente.",
    "sourcePage": 33,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "33–34",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: FLORESCEDOR ARCANO",
        "level": 3,
        "page": 33,
        "text": "Você recebe o estilo de luta Arcane Flourisher.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 33,
        "text": "Você aprende três técnicas. Flocos de Neve Dançantes: quando acerta ataque de oportunidade, pode gastar 1 ponto de Foco para reduzir o deslocamento do alvo em 1,5 m × seu bônus de proficiência até o início do seu próximo turno. Golpes Insidiosos: você conhece o truque cross handle e usa Sabedoria como habilidade de conjuração. Armadura Espiritual: como ação bônus, gaste 1 ou mais pontos de Foco para receber PV temporários iguais a 1d10 por ponto gasto + metade do seu nível de Santo da Espada. Eles duram 1 hora; enquanto ainda os possuir e não estiver usando escudo, sua CA aumenta em metade do bônus de proficiência, arredondada para baixo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GEOMANCIA",
        "level": 6,
        "page": 33,
        "text": "Escolha Burning Rites, Harvest Tradition, Torrential Arcanics ou Twisting Gale Path. Você pode conjurar magias do grupo escolhido gastando pontos de Foco iguais ao nível em que deseja conjurá-las, usando Sabedoria como habilidade de conjuração. Não pode conjurar por esta característica em nível superior ao seu bônus de proficiência. No 11º, 14º e 17º níveis de Santo da Espada, aprenda outro grupo da lista.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AVANÇO DO FLORESCEDOR",
        "level": 11,
        "page": 33,
        "text": "Seu estilo de luta Arcane Flourisher avança. Se ele não puder avançar, escolha um novo estilo de luta entre os disponíveis ao Santo da Espada.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MESTRE DA NATUREZA",
        "level": 11,
        "page": 33,
        "text": "Você tem sentido sísmico a 9 m; deslocamento de natação e escalada iguais ao seu deslocamento base; e seu movimento não é prejudicado por terreno difícil, mágico ou não.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "GOLPE PRISMÁTICO",
        "level": 14,
        "page": 34,
        "text": "Quando acerta com sua arma sagrada sintonizada, ela causa um dado adicional de dano da arma como dano de tempestade.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "TÉCNICA NATURAL FOCADA",
        "level": 17,
        "page": 34,
        "text": "Quando conjura qualquer magia por Geomancia, ela não é tratada como magia ou efeito mágico, ignorando características como Imunidade Limitada à Magia ou Resistência Mágica. Ela não pode ser anulada por counterspell nem afetada por dispel magic. O dano ainda conta como mágico para superar resistências.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Relíquia Sagrada",
        "page": 33,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "field",
            "label": "Campo"
          },
          {
            "key": "value",
            "label": "Valor"
          }
        ],
        "rows": [
          {
            "field": "Relíquia Sagrada",
            "value": "Mask of Domina’s Heart"
          }
        ]
      }
    ]
  },
  {
    "id": "paraprismatic-warlock-cataclysmic",
    "classId": "warlock",
    "name": "Cataclísmico",
    "originalName": "Cataclysmic",
    "aliases": [
      "Cataclysmic"
    ],
    "desc": "Um Bruxo ligado por pacto a uma entidade de enorme poder elemental, capaz de manifestar um Agente Primordial que representa uma fração da força do patrono.",
    "sourcePage": 34,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "34–36",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "ORIENTAÇÃO PLANAR",
        "level": 1,
        "page": 34,
        "text": "Escolha Burning Rites (fogo), Harvest Tradition (ácido), Torrential Arcanics (frio) ou Twisting Gale Path (elétrico). Você fica resistente ao tipo correspondente, que passa a ser seu tipo de dano planar, e trata as magias desse grupo como parte da lista de Bruxo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AGENTE PRIMORDIAL",
        "level": 1,
        "page": 34,
        "text": "Como ação, invoque um Agente Primordial em espaço desocupado a até 9 m. Ele corresponde ao seu tipo de dano planar, compartilha sua iniciativa e usa o modelo desta subclasse. Ações: você pode usar sua ação para comandá-lo a teleportar para espaço desocupado a até 9 m de você; como ação bônus, projete seus sentidos nele até o início do seu próximo turno, ficando cego e surdo em seu corpo. Autonomia: move-se e usa reação sozinho, mas sem comando só pode Esquivar; use ação bônus para ordenar outra ação e/ou ação bônus. Se você estiver incapacitado, ele age livremente. Dispensa: após 10 minutos ou ao chegar a 0 PV, desaparece e não pode ser reinvocado até você concluir um Descanso. Tamanho/Forma: Médio, aparência à sua escolha sem alterar as estatísticas. Proficiência: usa seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AGENTE APRIMORADO",
        "level": 6,
        "page": 34,
        "text": "Aumente dois valores de habilidade do Agente em +2 e outro em +1; ele pode ser invocado Grande, aumentando alcance em 1,5 m; dano de Pancada da Tempestade aumenta em 1d8; ataques tornam-se mágicos; ganha Vórtice Elemental. Escolha ainda dois aprimoramentos opcionais: CA aumenta pelo seu bônus de proficiência; voo (pairar) igual ao deslocamento base; acesso a Portal do Mestre; ou soma seu bônus de proficiência completo às salvaguardas.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AGENTE MAIOR",
        "level": 10,
        "page": 34,
        "text": "Aumente novamente dois valores de habilidade do Agente em +2 e outro em +1; ele ganha resistência a contundente, perfurante e cortante; dano de Pancada da Tempestade aumenta em 1d8; ganha Golpe da Tempestade. Escolha mais dois aprimoramentos, entre opções não escolhidas do Agente Aprimorado ou: resistência a todo dano de tempestade; deslocamento +4,5 m; dados de Pancada da Tempestade viram d10; ou Pancada da Tempestade ganha bônus de aprimoramento igual à metade do seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "DOIS COMO UM",
        "level": 10,
        "page": 34,
        "text": "Como ação, entre no espaço do Agente e funda-se a ele. Você tem cobertura total e usa os sentidos do Agente em lugar dos seus, podendo conjurar magias de Bruxo por meio dele com as ações normais. Não pode usar itens mágicos ou outras características de classe enquanto fundido. Efeitos que o alvejem passam a alvejar o Agente. Se ele morrer, você é expulso para espaço desocupado à escolha a até 1,5 m. Seu corpo deixa de existir temporariamente, então o Agente continua podendo passar por espaços pequenos normalmente.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "AGENTE SUPREMO",
        "level": 14,
        "page": 35,
        "text": "Aumente novamente dois valores de habilidade do Agente em +2 e outro em +1; ele pode ser invocado Enorme, aumentando alcance em 3 m; pode usar Vórtice Elemental duas vezes por invocação; e recebe Limiar de Dano igual ao seu nível de Bruxo.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ],
    "tables": [
      {
        "title": "Modelo do Agente Primordial",
        "page": 35,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "field",
            "label": "Campo"
          },
          {
            "key": "value",
            "label": "Valor"
          }
        ],
        "rows": [
          {
            "field": "Tipo/Tamanho",
            "value": "Elemental Médio"
          },
          {
            "field": "CA",
            "value": "12 + seu bônus de proficiência"
          },
          {
            "field": "PV",
            "value": "5 + (5 × seu nível de Bruxo)"
          },
          {
            "field": "Deslocamento",
            "value": "9 m; voo laborioso 9 m"
          },
          {
            "field": "Força",
            "value": "16 (+3); salvaguarda +3*"
          },
          {
            "field": "Destreza",
            "value": "12 (+1); salvaguarda +1*"
          },
          {
            "field": "Constituição",
            "value": "18 (+4); salvaguarda +4*"
          },
          {
            "field": "Inteligência",
            "value": "10 (+0); salvaguarda +0*"
          },
          {
            "field": "Sabedoria",
            "value": "10 (+0); salvaguarda +0*"
          },
          {
            "field": "Carisma",
            "value": "14 (+2); salvaguarda +2*"
          },
          {
            "field": "Salvaguardas",
            "value": "*O Agente soma metade do seu bônus de proficiência a todas as salvaguardas."
          },
          {
            "field": "Perícias",
            "value": "O Agente soma metade do seu bônus de proficiência a todos os testes de perícia."
          },
          {
            "field": "Imunidades",
            "value": "Seu tipo de dano planar; exaustão, agarrado, paralisado, petrificado, envenenado, caído, restringido, inconsciente"
          },
          {
            "field": "Sentidos",
            "value": "visão no escuro 18 m; Percepção passiva 10"
          },
          {
            "field": "Idiomas",
            "value": "Entende Primordial e seu criador, mas não fala"
          },
          {
            "field": "Corpo Elemental",
            "value": "Pode mover-se por qualquer espaço de ao menos 2,5 cm; ele e o criador podem terminar turnos no mesmo espaço."
          },
          {
            "field": "Movimento Extra",
            "value": "Ácido: escavação = 2× deslocamento; Frio: natação = 2×; Fogo: deslocamento terrestre = 2×; Elétrico: voo laborioso = 2×."
          },
          {
            "field": "Multiataque",
            "value": "Faz número de ataques Golpe da Tempestade ou Pancada da Tempestade igual à metade do seu bônus de proficiência."
          },
          {
            "field": "Pancada da Tempestade",
            "value": "Ataque corpo a corpo: modificador de Força ou Destreza + bônus de proficiência para atingir; alcance 1,5 m; 1 alvo; dano 1d8 + Força ou Destreza do tipo de dano planar."
          },
          {
            "field": "Golpe da Tempestade (nível 10)",
            "value": "Como Pancada da Tempestade, mas ataque à distância com alcance 18/54 m."
          },
          {
            "field": "Vórtice Elemental (nível 6)",
            "value": "Criaturas à escolha do Agente a até 9 m, exceto o criador, fazem salvaguarda de Destreza contra sua CD de magia; sofrem 1d6 × metade do nível de Bruxo do tipo planar em falha, metade em sucesso. Uma vez por invocação, salvo se você gastar um espaço de pacto para permitir novo uso."
          },
          {
            "field": "Portal do Mestre",
            "value": "Ação bônus do Agente: se não estiver incapacitado, o criador pode usar reação para teleportar através dele e surgir em espaço desocupado a até 1,5 m."
          }
        ]
      },
      {
        "title": "Invocações Místicas — Cataclísmico",
        "page": 35,
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest",
        "columns": [
          {
            "key": "name",
            "label": "Invocação"
          },
          {
            "key": "prereq",
            "label": "Pré-requisito"
          },
          {
            "key": "effect",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "name": "Mascote Colossal",
            "prereq": "—",
            "effect": "O Agente Primordial pode ser invocado uma categoria de tamanho maior; alcance +1,5 m e PV adicionais iguais ao bônus de proficiência × metade do nível de Bruxo."
          },
          {
            "name": "Agente Defensivo",
            "prereq": "Pacto do Manto",
            "effect": "Quando você é alvo de ataque/efeito e o Agente está a até 9 m, use reação para fazê-lo teleportar para espaço sobreposto ao seu e tornar-se alvo em seu lugar; ataques/efeitos que o alvejem pelo restante do turno alvejam o Agente."
          },
          {
            "name": "Mimetismo Elemental",
            "prereq": "Bruxo 10º",
            "effect": "Você fica imune ao seu dano planar e recebe o mesmo tipo de movimento do Agente, igual ao seu deslocamento base; se for Fogo, seu deslocamento aumenta 3 m em vez disso."
          },
          {
            "name": "Estertor Primordial",
            "prereq": "Bruxo 6º",
            "effect": "Quando o Agente chega a 0 PV, use reação para fazê-lo usar Vórtice Elemental antes de desaparecer, mesmo se já tiver usado a ação."
          },
          {
            "name": "Golpes Primordiais",
            "prereq": "Pacto da Corrente ou da Lâmina",
            "effect": "Pancada da Tempestade pode usar seu bônus de ataque mágico; nesse caso soma também seu Carisma ao dano. Como ação bônus, você pode manifestar parte do Agente e fazer uma Pancada da Tempestade contra alvo a até 3 m, mesmo sem o Agente invocado; o ataque origina-se de você."
          },
          {
            "name": "Energia Pura",
            "prereq": "Pacto do Tomo; Bruxo 6º",
            "effect": "Pancada da Tempestade e Vórtice Elemental ignoram resistência ao tipo de dano planar."
          },
          {
            "name": "Visão da Alma",
            "prereq": "Bruxo 14º",
            "effect": "O Agente ganha todos os seus tipos de visão e ambos recebem visão verdadeira a 9 m."
          },
          {
            "name": "Ladrão de Vórtice",
            "prereq": "Bruxo 6º",
            "effect": "Uma vez por Descanso Longo, como ação, você usa Vórtice Elemental originando-se de si sem gastar nem exigir o uso da ação pelo Agente."
          }
        ]
      }
    ],
    "references": [
      {
        "title": "Invocações Místicas do Cataclísmico",
        "page": 35,
        "text": "Ao escolher Invocações Místicas, você pode escolher também as opções exclusivas da subclasse apresentadas na tabela, desde que cumpra os pré-requisitos: Colossal Pet, Defensive Agent, Elemental Mimicry, Primordial Death Throes, Primordial Strikes, Pure Energy, Soulsight e Vortex Thief.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  },
  {
    "id": "paraprismatic-wizard-elementalist",
    "classId": "wizard",
    "name": "Elementalista",
    "originalName": "Elementalist",
    "aliases": [
      "Elementalist"
    ],
    "desc": "Um Mago sintonizado aos Planos Elementais que estuda a magia que emerge deles, usando forças elementais tanto para ataque quanto para defesa.",
    "sourcePage": 36,
    "source": {
      "title": "Somnus Domina — Paraprismatic Tempest",
      "pages": "36",
      "chapter": "Convergent Subclasses"
    },
    "features": [
      {
        "title": "EXPLOSÃO CROMÁTICA",
        "level": 2,
        "page": 36,
        "text": "Como ação bônus, produza os efeitos de chromatic arrow sem espaço de magia, mesmo sem tê-la preparada. A magia é produzida em nível igual ao seu bônus de proficiência. Usos por Descanso Longo iguais ao seu modificador de Inteligência. Você pode sempre agir como se chromatic arrow estivesse preparada.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MESTRE DA CONFLUÊNCIA",
        "level": 2,
        "page": 36,
        "text": "Trate todas as magias de Burning Rites, Harvest Tradition, Torrential Arcanics, Twisting Gale Path e Elemental Confluence como se estivessem na lista de Mago, podendo prepará-las, aprendê-las e conjurá-las. Custa metade do ouro e do tempo normal para copiá-las em seu grimório.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "MUDANÇA PRISMÁTICA",
        "level": 6,
        "page": 36,
        "text": "Quando conjura magia que causa qualquer tipo de dano de tempestade, pode transformar esse tipo em outro dano de tempestade. Além disso, uma magia de tempestade que conjurar usando espaço é tratada como se tivesse sido conjurada um nível acima do espaço gasto, máximo 9º.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "SATURAÇÃO DA TEMPESTADE",
        "level": 10,
        "page": 36,
        "text": "Você é resistente a todo dano de tempestade. Quando sofre qualquer dano de tempestade, pode usar reação para reduzir o dano, antes das resistências, em uma quantidade igual ao seu nível de Mago.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      },
      {
        "title": "EVITAÇÃO ACELERADA",
        "level": 14,
        "page": 36,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos. Quando faz uma salvaguarda para sofrer metade do dano, sofre nenhum dano em sucesso e metade em falha. Quando faz salvaguarda de Força ou Destreza, pode escolher fazer uma salvaguarda de Inteligência em vez disso.",
        "sourceTitle": "Somnus Domina — Paraprismatic Tempest"
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  for (const item of additions) {
    if (!window.GRIMORIO_SUBCLASSES.some(existing => existing.id === item.id)) window.GRIMORIO_SUBCLASSES.push(item);
  }
})();
