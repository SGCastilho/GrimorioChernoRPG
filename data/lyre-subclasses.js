'use strict';

(function () {
  const additions = [
  {
    "id": "lyre-favored-soul-retia-burden-of-agris",
    "classId": "favored-soul-retia",
    "name": "Fardo de Agris",
    "originalName": "Burden of Agris",
    "aliases": [
      "Burden of Agris"
    ],
    "desc": "Arma(s) Favorecida(s): espada larga. Aqueles agraciados por Agris carregam o peso da justiça, enxergam com facilidade as intenções dos outros e resistem à tentação e coerção sobrenatural. São cavaleiros, juízes e executores encarregados de eliminar a corrupção em nome de Agris.",
    "sourcePage": 345,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "345",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "AVATAR DO ABSOLUTO",
        "level": 1,
        "page": 345,
        "text": "Você é imune à condição enfeitiçado e a efeitos que o forcem a realizar ações ou reações contra sua vontade. Também ganha proficiência em Intuição e com armaduras pesadas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA DO JUIZ VINCULADO",
        "level": 6,
        "page": 345,
        "text": "Se ainda não possuir Armamento de Essência, você recebe essa opção de Essência Divergente. Se já a possuir, pode escolher antecipadamente uma opção de Armamento de Essência de 9º nível; essa opção não poderá ser escolhida novamente depois.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "JULGAMENTO PERFEITO",
        "level": 10,
        "page": 345,
        "text": "Você ganha Especialização em Intuição.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SELO DAS CORRENTES DE PRATA",
        "level": 10,
        "page": 345,
        "text": "Gaste um uso de Purificação e escolha um ponto visível a até 9 metros. Criaturas à sua escolha numa esfera de 3 metros de raio fazem salvaguarda de Força; em falha, ficam restringidas por correntes prateadas por 1 minuto. Como ação, uma criatura presa pode realizar teste de Força contra sua CD de magia e, em sucesso, quebrar as correntes. Você deve manter concentração neste efeito como se fosse uma magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INTERVENÇÃO VINCULANTE",
        "level": 13,
        "page": 345,
        "text": "Quando uma criatura a até 9 metros seria atingida por um ataque, use reação para conjurar uma espada celestial que o desvia. Role um novo d20 e pode substituir o d20 do ataque, possivelmente alterando o resultado. Depois, faça um ataque com uma arma que esteja empunhando contra o atacante, mesmo se estiver fora do alcance normal, tratando-o como se estivesse ao alcance; esse ataque é resolvido depois do ataque original. Usos por Descanso Curto iguais à metade do bônus de proficiência, arredondado para baixo, +1.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-apophemia",
    "classId": "favored-soul-retia",
    "name": "Fardo de Apophemia",
    "originalName": "Burden of Apophemia",
    "aliases": [
      "Burden of Apophemia"
    ],
    "desc": "Arma(s) Favorecida(s): espada curta ou espada curta de duas pontas. A antiga Correfont e deusa da loucura impõe a compreensão da insanidade aos seus favorecidos. Eles aprendem a corromper a razão, elevar o terror ao delírio e roubar completamente a voz de quem se opõe a eles.",
    "sourcePage": 346,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "346",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MANUAL DE UMA CORREFONT",
        "level": 1,
        "page": 346,
        "text": "Como Apophemia já foi uma Correfont, magias de Inscritor contam como se estivessem na lista da Alma Favorecida para você, permitindo aprendê-las e conjurá-las.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TOLERÂNCIA PSÍQUICA",
        "level": 1,
        "page": 346,
        "text": "Você tem resistência a dano psíquico e é imune à condição enfurecido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FALA SUSSURRADA",
        "level": 6,
        "page": 346,
        "text": "Você pode comunicar-se telepaticamente com criaturas que veja a até 18 metros. Elas compreendem a mensagem se vocês compartilharem pelo menos um idioma, mas não podem responder. Quem já ouviu sua voz reconhece a comunicação como sua. Uma criatura contatada pode usar reação para tentar bloqueá-lo, realizando salvaguarda de Carisma contra sua CD de magia; em sucesso, bloqueia você por 24 horas, podendo remover e restaurar o bloqueio à vontade durante esse período.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INSANIDADE INTRUSIVA",
        "level": 10,
        "page": 346,
        "text": "Como ação, gaste um uso de Purificação e escolha qualquer número de criaturas a até 4,5 metros. Cada alvo faz salvaguarda de Carisma; em falha, fica enfeitiçado por você e enfurecido por 10 minutos, usando a mesma CD para as regras de enfurecido. Alvos assim não rolam para decidir se atacam um hostil: atacam automaticamente; tratam outras criaturas afetadas como hostis e atacam primeiro a mais próxima; e não compreendem fala ou intenções. Eles repetem a salvaguarda com vantagem sempre que sofrem dano de alguém não afetado e também ao fim de cada turno, encerrando em sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VALOR DO SILÊNCIO",
        "level": 13,
        "page": 346,
        "text": "Quando uma criatura a até 18 metros tenta falar, conjurar magia com componente verbal ou pronunciar palavra de comando, use reação para criar uma esfera de silêncio centrada nos espaços dela e em todos os espaços a até 1,5 metro, funcionando como Silêncio por 1 minuto. O efeito que exigia fala falha e a ação é gasta. Usos por Descanso Curto ou Longo iguais à metade do bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-aymere",
    "classId": "favored-soul-retia",
    "name": "Fardo de Aymere",
    "originalName": "Burden of Aymere",
    "aliases": [
      "Burden of Aymere"
    ],
    "desc": "Arma(s) Favorecida(s): foice de combate ou grande foice. Os favorecidos de Aymere sentem a paciência, ira e misericórdia da natureza e são compelidos a proteger os ciclos da vida. Como favorecidos de um Eidolon, também suportam melhor a radiação eidólica.",
    "sourcePage": 346,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "346–347",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAVORECIDO DOS EIDOLONS",
        "level": 1,
        "page": 346,
        "text": "Você tem vantagem em testes de Queima Eidomântica, e todos os seus ataques contam como mágicos e eidólicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TOQUE DA FLORESTA",
        "level": 1,
        "page": 346,
        "text": "Magias da lista de Druida e do grupo Tomo da Floresta Sussurrante contam como magias da Alma Favorecida para você, podendo ser aprendidas e conjuradas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANTO DE MIASMA",
        "level": 6,
        "page": 346,
        "text": "Quando causa dano com uma magia, pode transformar esse dano em veneno. Além disso, o primeiro ataque com arma que acertar em cada turno causa dano de veneno adicional igual à metade do seu nível de Alma Favorecida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REVITALIZAÇÃO RÁPIDA",
        "level": 10,
        "page": 347,
        "text": "Como ação, toque uma criatura, inclusive você, e gaste Purificação. O alvo recupera 1d8 × o nível do seu espaço de pacto em PV, é curado de qualquer efeito que o deixe envenenado ou paralisado e, por 1 minuto, recupera no início de cada turno PV iguais à metade do seu nível de Alma Favorecida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PELE DE MADEIRA DE AÇO",
        "level": 13,
        "page": 347,
        "text": "Todo dano perfurante, cortante e contundente que você sofre é reduzido em uma quantidade igual à metade do seu nível de Alma Favorecida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-burtromet",
    "classId": "favored-soul-retia",
    "name": "Fardo de Burtromet",
    "originalName": "Burden of Burtromet",
    "aliases": [
      "Burden of Burtromet"
    ],
    "desc": "Arma(s) Favorecida(s): grande martelo. Burtromet impõe chamas inextinguíveis aos seus favorecidos, inspirando-os a espalhar fogo, fundir e reformar metal e buscar níveis cada vez maiores de poder destrutivo.",
    "sourcePage": 347,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "347",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESSÊNCIA CARBONIZADA",
        "level": 1,
        "page": 347,
        "text": "Suas opções de Essência recebem benefícios próprios. Manto de Burtromet (Radiância Essencial): uma vez por Descanso Curto ou Longo, conjure Véu de Ilsrabae sem espaço em nível igual ao seu espaço de pacto; ele se torna um manto de fogo branco, concede imunidade a fogo em vez de resistência a frio e causa fogo em vez de frio. Forjado em Chamas (Armamento de Essência): seu Armamento pode causar fogo no lugar do dano normal e, em qualquer caso, causa dano de fogo adicional igual ao bônus de proficiência. Escudo da Desafiadora Cinzenta (Voo de Essência): quando usa Esquivar, manifesta um escudo de fogo; criaturas a até 1,5 m que acertarem você com ataques de arma enquanto estiver Esquivando sofrem 1d6 de fogo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA ÍGNEA",
        "level": 1,
        "page": 347,
        "text": "Você tem resistência a dano de fogo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AZAGAIA METEÓRICA",
        "level": 6,
        "page": 347,
        "text": "Na ação Atacar, pode substituir qualquer ataque com arma por uma azagaia flamejante e arremessá-la contra alvo visível a até 18 metros como ataque de magia à distância. Em acerto, causa 2d6 + seu modificador de conjuração de dano de fogo. Se acertar o mesmo alvo com duas ou mais dessas azagaias no mesmo turno, ele fica Incendiado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MARTELO DOS FORNOS ESTILHAÇADOS",
        "level": 10,
        "page": 347,
        "text": "Uma vez por turno, ao acertar ataque de arma corpo a corpo, gaste Purificação para reforçar o golpe com calor e força. O alvo faz salvaguarda de Destreza; em falha sofre 2d10 × o nível do seu espaço de pacto de dano de fogo, em sucesso metade. Em um sucesso do alvo, você ainda pode fazer as chamas explodirem: todas as criaturas exceto você em raio de 6 metros do alvo fazem a mesma salvaguarda, e quem falhar sofre o mesmo dano do alvo inicial. Quem falhar em qualquer dessas salvaguardas também fica Incendiado, sofrendo 2d8 de dano de fogo em vez do d10 normal da condição.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 13,
        "page": 347,
        "text": "Ao realizar a ação Atacar, pode atacar três vezes. No 20º nível de Alma Favorecida, pode atacar quatro vezes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-chan-karegosh",
    "classId": "favored-soul-retia",
    "name": "Fardo de Chan Karegosh",
    "originalName": "Burden of Chan Karegosh",
    "aliases": [
      "Burden of Chan Karegosh"
    ],
    "desc": "Arma(s) Favorecida(s): foice de combate. O abraço de Chan Karegosh guia quem se perdeu na escuridão. Seus favorecidos são compelidos a proteger os desamparados, manifestando luar calmante, olhos que atravessam trevas e a capacidade de desaparecer como a lua nova.",
    "sourcePage": 348,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "348",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAMILIAR COELHO LUNAR",
        "level": 1,
        "page": 348,
        "text": "Uma vez por Descanso Longo, conjure Encontrar Familiar sem espaço em nível igual ao seu espaço de pacto para convocar um Coelho Lunar. Ele segue as regras normais de familiar, mas pode usar Míssil de Luar em seu turno e soma o nível do espaço usado à convocação em todas as salvaguardas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRESSA DO COELHO",
        "level": 1,
        "page": 348,
        "text": "Você pode realizar Disparada como ação bônus. Seus Saltos em Altura e Distância aumentam em 3 metros quando feitos com corrida prévia, ou 1,5 metro sem ela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OLHOS BRILHANTES NA ESCURIDÃO",
        "level": 6,
        "page": 348,
        "text": "Você enxerga normalmente em escuridão e meia-luz, mágicas ou não, a uma distância de 6 metros × seu bônus de proficiência. Também ganha Especialização em Percepção.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CÍRCULO DE LUAR RADIANTE",
        "level": 10,
        "page": 348,
        "text": "Como ação, gaste Purificação e crie por 1 minuto uma esfera de luar intenso de 12 metros de raio centrada em você, que se move consigo e dissipa completamente escuridão mágica dentro dela. Quando surge, criaturas à sua escolha na área fazem salvaguarda de Constituição, sofrendo 1d10 × o nível do seu espaço de pacto de dano radiante em falha ou metade em sucesso. Nos turnos seguintes, como ação bônus, pode escolher uma criatura na esfera para repetir a mesma salvaguarda e dano; quando escolhe apenas uma, ela fica cega até o início do seu próximo turno se falhar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SOMBRA DA LUA NOVA",
        "level": 13,
        "page": 348,
        "text": "Enquanto estiver em escuridão ou meia-luz, use ação bônus para ficar invisível até o fim do turno ou até entrar em luz intensa. Além disso, uma vez por Descanso Curto ou Longo, produza os efeitos de Invisibilidade Maior sem espaço; isso não conta como magia nem efeito mágico. Coelho Lunar: celestial Minúsculo, leal e bom; CA igual à sua CD de magia; PV 5 + 5 × nível do espaço de convocação; deslocamento 9 m e escalada 9 m; For 10, Des 16, Con 10, Int 7, Sab 14, Car 10; visão no escuro 18 m, Percepção passiva 12; entende seus idiomas, não fala. Resistência Mágica: vantagem em salvaguardas contra efeitos mágicos. Vínculo Protetor: criatura no mesmo espaço compartilha Resistência Mágica. Carona: entra no espaço de criatura voluntária Média ou maior a até 1,5 m, passa a ocupar seu espaço, não pode ser alvo e move-se com ela até gastar 1,5 m para sair. Míssil de Luar: ataque de magia à distância usando seu bônus, alcance 3 m, dano radiante 1d8 + nível do espaço de convocação. Ação bônus Disparada. Escudo de Luar Cristalino: reação quando criatura a até 6 m é alvo de ataque de arma; teleporta-se para junto dela e aumenta sua CA pelo nível do espaço usado na convocação até o fim do turno, inclusive contra o ataque desencadeador; se um ataque ainda acertar, a membrana se desfaz.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-echobliss",
    "classId": "favored-soul-retia",
    "name": "Fardo de Echobliss",
    "originalName": "Burden of Echobliss",
    "aliases": [
      "Burden of Echobliss"
    ],
    "desc": "Arma(s) Favorecida(s): mangual. O Duque do Trovão derrama destruição através de seus favorecidos, dando-lhes força brutal e uma compulsão pela ruína. Alguns acabam assumindo formas dracônicas de duas caudas e perdendo o senso de identidade.",
    "sourcePage": 349,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "349",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 1,
        "page": 349,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20. Se outra característica já conceder o mesmo alcance crítico, seus críticos causam um dado de arma adicional de dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COMBATENTE IRACUNDO",
        "level": 1,
        "page": 349,
        "text": "Você recebe o Estilo de Luta Combatente Imprudente. No 3º nível, quando a Alma Favorecida normalmente escolheria Estilo de Luta, pode avançar este em vez de escolher outro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ONDA ARRUINADA",
        "level": 6,
        "page": 349,
        "text": "No lugar de um ataque com arma, libere uma onda trovejante em um cubo originado em você. O cubo pode ter de 1,5 metro até 1,5 metro × o nível do seu espaço de pacto de lado. Criaturas na área fazem salvaguarda de Constituição, sofrendo 3d10 de dano trovejante em falha ou metade em sucesso. Pode usar este ataque uma vez por turno e um número de vezes por Descanso Longo igual ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORMA ATORMENTADA DA IRA",
        "level": 10,
        "page": 349,
        "text": "Como ação, gaste Purificação e transforme-se por 10 minutos ou até cair a 0 PV numa monstruosidade dracônica. Seu tamanho aumenta uma categoria e seus tipos incluem monstruosidade e dragão; alcance corpo a corpo +1,5 m; vantagem em ataques, testes e salvaguardas baseados em Força; todos os ataques contra você têm vantagem; você sofre metade de dano perfurante, cortante e contundente; ataques com arma causam dano adicional igual ao seu nível de Alma Favorecida; você fica Enfurecido, trata todas as criaturas visíveis como hostis e não sofre penalidades de concentração da condição; e recebe uma ação extra por turno que só pode ser usada para Atacar. Sempre que cairia a 0 PV, role 1d100; se o resultado for igual ou menor que seu nível de Alma Favorecida, fica com 1 PV. Esta forma também pode ativar automaticamente dessa maneira sem gastar Purificação, concedendo PV temporários iguais ao dobro do seu nível; se esses PV temporários forem perdidos, a forma termina e você cai a 0 PV sem reativá-la.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO SUPERIOR",
        "level": 13,
        "page": 349,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-gotham",
    "classId": "favored-soul-retia",
    "name": "Fardo de Gotham",
    "originalName": "Burden of Gotham",
    "aliases": [
      "Burden of Gotham"
    ],
    "desc": "Arma(s) Favorecida(s): grande foice. Um favorecido de Gotham é seu verdadeiro representante no Plano Material, potencial líder da Corte da Decadência e portador do fardo de espalhar a não vida, quer deseje esse caminho ou não.",
    "sourcePage": 349,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "349–350",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MESTRE DA NECROMANCIA",
        "level": 1,
        "page": 349,
        "text": "Todas as magias de Necromancia contam como magias da Alma Favorecida para você. Você também recebe um espaço de pacto adicional do mesmo nível dos demais, mas esse espaço especial só pode conjurar magias de Necromancia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CORPO SOBRENATURAL",
        "level": 1,
        "page": 349,
        "text": "Você ganha proficiência em salvaguardas de Constituição e resistência a dano necrótico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORTITUDE MORTAL",
        "level": 6,
        "page": 349,
        "text": "Quando dano o reduziria a 0 PV, faça salvaguarda de Constituição CD 5 + dano sofrido, exceto se o dano for radiante ou vier de crítico. Em sucesso, fica com 1 PV. Cada vez que evita cair a 0 assim, a CD aumenta em 2 até um Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INFLIÇÃO GLUTONA",
        "level": 10,
        "page": 350,
        "text": "No lugar de um ataque com arma, gaste Purificação para conjurar Infligir Ferimentos sem espaço como se usasse um de seus espaços de pacto, mesmo sem conhecer ou preparar a magia. Em acerto, escolha recuperar PV iguais ao dano causado ou ganhar a mesma quantidade em PV temporários. Se errar, recupera o uso de Purificação no fim do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ANIMAR SERVOS",
        "level": 13,
        "page": 350,
        "text": "Uma vez por Descanso Longo, conjure 1d4+2 Servos em Decadência em espaços desocupados a até 9 metros por 10 minutos. Eles compartilham iniciativa e um único reservatório de PV igual a 15 × o número convocado; se um morrer por dano, todos morrem, e não podem recuperar PV. Eles usam seu bônus de proficiência nas salvaguardas, sua CD de magia para Visagem de Pesadelo e seu ataque de magia para os ataques Rasgar. Obedecem comandos; se começarem turno a mais de 9 metros de você, precisam tentar voltar ao alcance e, se não conseguirem, usam Esquivar. Sem comandos, procuram permanecer a até 9 metros, defender-se e atacar criaturas hostis a você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-harros",
    "classId": "favored-soul-retia",
    "name": "Fardo de Harros",
    "originalName": "Burden of Harros",
    "aliases": [
      "Burden of Harros"
    ],
    "desc": "Arma(s) Favorecida(s): alabarda, machado ou machado grande. Os favorecidos do deus dos cavaleiros carregam profundo senso de responsabilidade, desafiam governantes abusivos e buscam justiça. Como favorecidos de um Eidolon, são carregados de energia eidomântica.",
    "sourcePage": 350,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "350",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAVORECIDO DOS EIDOLONS",
        "level": 1,
        "page": 350,
        "text": "Você tem vantagem em testes de Queima Eidomântica e todos os seus ataques contam como mágicos e eidólicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIAS DO CAVALEIRO LENDÁRIO",
        "level": 1,
        "page": 350,
        "text": "Você ganha proficiência com armaduras pesadas e escudos. Magias de Paladino e do grupo Legado de Ouro contam como magias da Alma Favorecida para você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VONTADE DO PARAGÃO",
        "level": 6,
        "page": 350,
        "text": "Quando falha em salvaguarda ou teste de atributo, use reação para somar metade do seu nível de Alma Favorecida, arredondado para baixo, possivelmente alterando o resultado. Usos por Descanso Curto ou Longo iguais à metade do bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "METEORO ESPIRAL CARMESIM",
        "level": 10,
        "page": 350,
        "text": "Como ação, gaste Purificação, envolva-se em aura radiante espiralada e lance-se contra criatura visível a até 18 metros, explodindo ao chegar. O alvo e criaturas exceto você a até 6 metros dele fazem salvaguarda de Destreza. Todos sofrem 1d12 × nível do espaço de pacto de dano radiante em falha ou metade em sucesso; o alvo principal sofre ainda a mesma quantidade de dano perfurante. Você termina em um espaço desocupado dentro da área.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PELE DE ADAMANTINA",
        "level": 13,
        "page": 350,
        "text": "Dano perfurante, cortante ou contundente sofrido é reduzido em 5. Quando sofre um acerto crítico, pode usar reação para transformá-lo em acerto normal.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-ilsrabae",
    "classId": "favored-soul-retia",
    "name": "Fardo de Ilsrabae",
    "originalName": "Burden of Ilsrabae",
    "aliases": [
      "Burden of Ilsrabae"
    ],
    "desc": "Arma(s) Favorecida(s): tridente. Ilsrabae chama seus favorecidos às águas geladas, usando-os como agentes para espionar a terra e recolher tributos. Sua voz doce exige afeto e lealdade até nos sonhos.",
    "sourcePage": 351,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "351",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "RESISTÊNCIA ARREPIANTE",
        "level": 1,
        "page": 351,
        "text": "Você tem resistência a dano de frio.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESSÊNCIA SUBMERSA",
        "level": 1,
        "page": 351,
        "text": "Suas Essências recebem benefícios. Versatilidade Aquática (Voo de Essência): respira ar e água e, submerso, trata seu voo como deslocamento de natação. Regalia de Ilsrabae (Radiância Essencial): uma vez por Descanso Curto ou Longo, conjure Véu de Ilsrabae sem espaço em nível igual ao seu espaço de pacto; toma forma de veste de seda gelada, concede imunidade a frio e impõe desvantagem a ataques corpo a corpo contra você. Lâmina Estígia (Armamento): pode causar frio no lugar do dano normal e causa dano de frio adicional igual ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ACUMULADOR DE SEGREDOS",
        "level": 6,
        "page": 351,
        "text": "Você lê toda forma de escrita e a compreende como se conhecesse o idioma, desde que não seja código ou padrão sem sentido. Isso inclui pergaminhos e escrita mágica, permitindo conjurar magias escritas como se estivessem na lista da Alma Favorecida. Além disso, uma vez por Descanso Curto ou Longo, conjure Ver o Invisível sem espaço ou componentes como se usasse espaço de pacto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FURACÃO DA TUNDRA",
        "level": 10,
        "page": 351,
        "text": "Como ação, gaste Purificação e crie redemoinho de água congelante, escolhendo criaturas a até 12 metros. Cada uma faz salvaguarda de Força; em falha sofre 1d8 × nível do espaço de pacto de dano contundente mágico e fica restringida pelo gelo; em sucesso, metade e não fica restringida. Uma criatura presa usa ação para teste de Força contra sua CD ou pode quebrar o gelo com 10+ dano em um ataque. O gelo tem CA igual à sua CD, resistência a perfurante/cortante não mágicos e vulnerabilidade a fogo/contundente. No início do turno, preso sofre 2d6 de frio. Criaturas totalmente submersas dentro do alcance devem ser escolhidas e têm desvantagem na salvaguarda. Os espaços congelados e adjacentes viram terreno difícil por 10 minutos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VÉU DA IMPERATRIZ",
        "level": 13,
        "page": 351,
        "text": "Você fica permanentemente envolto em gelo. Criaturas que acertam você com ataques corpo a corpo a até 1,5 m sofrem dano de frio igual à metade do seu nível de Alma Favorecida. Criaturas que estejam agarrando você ou sendo agarradas por você também sofrem esse dano no início do seu turno. Como consequência, você fica vulnerável a dano de fogo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-invidiva",
    "classId": "favored-soul-retia",
    "name": "Fardo de Invidiva",
    "originalName": "Burden of Invidiva",
    "aliases": [
      "Burden of Invidiva"
    ],
    "desc": "Arma(s) Favorecida(s): corrente laminada. Invidiva, uma das Tentações Gêmeas, inspira seus favorecidos a tomar o que pertence aos outros e os molda como assassinos capazes de transformar as sombras em segunda natureza.",
    "sourcePage": 352,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "352",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "AÇÃO ARDILOSA",
        "level": 1,
        "page": 352,
        "text": "Como ação bônus, você pode realizar Disparada, Esconder-se ou Desengajar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PERÍCIAS DA GÊMEA ÁVIDA",
        "level": 1,
        "page": 352,
        "text": "Você ganha Especialização em Furtividade. Quando acerta uma criatura com um ataque feito com vantagem usando arma leve ou com acuidade, causa 1d6 de dano ácido adicional por uma seiva corrosiva mágica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DUELISTA ESPECIALISTA",
        "level": 6,
        "page": 352,
        "text": "Você ganha o Estilo de Luta Duelo. Se já o possui, ele avança.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE GÊMEO",
        "level": 6,
        "page": 352,
        "text": "Ao atacar com uma arma que possua a propriedade secundária, pode realizar o ataque secundário como parte da ação Atacar em vez de ação bônus, desde que tenha atacado com a arma ao menos uma vez antes. O ataque secundário pode usar o mesmo atributo válido para o ataque primário.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ELIMINAÇÃO TOTAL",
        "level": 10,
        "page": 352,
        "text": "Como ação, gaste Purificação para ficar invisível por 1 minuto. Você não faz som ao mover-se e não deixa rastros físicos. Enquanto invisível assim e empunhando arma leve ou com acuidade, obtém crítico em 19–20. Ao obter crítico, pode encerrar a invisibilidade para causar 2d10 × nível do espaço de pacto de dano adicional do mesmo tipo da arma; esse dano não é multiplicado pelo crítico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AGILIDADE AUMENTADA",
        "level": 13,
        "page": 352,
        "text": "Seu deslocamento base aumenta em 3 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-ivsil",
    "classId": "favored-soul-retia",
    "name": "Fardo de Ivsil",
    "originalName": "Burden of Ivsil",
    "aliases": [
      "Burden of Ivsil"
    ],
    "desc": "Arma(s) Favorecida(s): cimitarra. O Vento Sangrento deixa seus favorecidos inquietos e deslocados, levando-os a abandonar raízes, fugir de amarras e rebelar-se contra tudo que tente prendê-los.",
    "sourcePage": 352,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "352–353",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESSÊNCIA TEMPESTUOSA",
        "level": 1,
        "page": 352,
        "text": "Manto Ondulante de Ivsil (Radiância Essencial): uma vez por Descanso Curto ou Longo, conjure Véu de Ilsrabae sem espaço em nível do pacto; ele manifesta penas e vento caótico, concede imunidade a trovejante em vez de resistência a frio, causa trovejante em vez de frio e dá desvantagem a ataques à distância contra você. Golpe do Furacão (Armamento): pode causar trovejante e sempre causa dano trovejante adicional igual ao bônus de proficiência. Asas da Tempestade (Voo): o deslocamento de voo aumenta em 1,5 metro × bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA TROVEJANTE",
        "level": 1,
        "page": 353,
        "text": "Você tem resistência a dano trovejante.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DESVIO DE REDEMOINHO",
        "level": 6,
        "page": 353,
        "text": "Como ação, gere vento em cone de 4,5 metros originado em você ou cubo de 4,5 metros centrado em você. Todas as criaturas na área, exceto você, fazem salvaguarda de Força; em falha, são empurradas 1,5 metro para longe e caem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TROVÃO DO AR IMÓVEL",
        "level": 10,
        "page": 353,
        "text": "Como ação, gaste Purificação para conjurar Inverter Gravidade sem espaço. Você pode escolher não ser afetado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SURTO DE INICIATIVA",
        "level": 13,
        "page": 353,
        "text": "Você não pode ser surpreendido, tem vantagem em iniciativa e ataques contra você têm desvantagem até você realizar seu primeiro turno no combate.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-lussuria",
    "classId": "favored-soul-retia",
    "name": "Fardo de Lussuria",
    "originalName": "Burden of Lussuria",
    "aliases": [
      "Burden of Lussuria"
    ],
    "desc": "Arma(s) Favorecida(s): glaive. Lussuria trata seus favorecidos como troféus e extensões de sua vontade, enchendo-os de impulsos para controlar, seduzir e cercar-se de admiradores capazes.",
    "sourcePage": 353,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "353",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ENCANTO APRISIONADOR",
        "level": 1,
        "page": 353,
        "text": "Uma vez por Descanso Curto ou Longo, conjure Enfeitiçar Pessoa sem espaço em nível igual ao seu espaço de pacto. Se um alvo for imune a enfeitiçado, você percebe isso e pode fazer com que ele fique atordoado pela duração da magia em vez disso. Alvo atordoado repete salvaguarda de Carisma no fim de cada turno e sempre que sofre dano, encerrando em sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SÚPLICA MALICIOSA",
        "level": 6,
        "page": 353,
        "text": "Quando é alvo de ataque de arma que pode ver, use reação para preencher o atacante de culpa. Ele faz salvaguarda de Carisma; em falha, não ataca você e não pode fazê-lo pelo restante do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ONDA DE VONTADE SUBJUGADORA",
        "level": 10,
        "page": 353,
        "text": "Como ação, gaste Purificação e escolha quaisquer criaturas visíveis a até 9 metros. Cada uma faz salvaguarda de Carisma; em falha sofre 2d6 × nível do espaço de pacto de dano psíquico e deve usar reação para mover-se até seu deslocamento para um espaço desocupado que você escolha. Se o movimento a levaria a terreno obviamente perigoso ou dano evidente, ela trava e fica com deslocamento 0 até o fim do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FASCÍNIO COMPELENTE",
        "level": 13,
        "page": 353,
        "text": "Quando realiza teste ou salvaguarda baseado em Carisma e o d20 mostra 9 ou menos, pode tratar o resultado como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-mortuous",
    "classId": "favored-soul-retia",
    "name": "Fardo de Mortuous",
    "originalName": "Burden of Mortuous",
    "aliases": [
      "Burden of Mortuous"
    ],
    "desc": "Arma(s) Favorecida(s): lança de cavalaria ou gunlance. O Desafiante usa seus favorecidos para criar combatentes dignos de entretê-lo, enchendo suas mentes com competição, força e glória. À medida que crescem, escamas da carne dracônica de Mortuous surgem em seus corpos.",
    "sourcePage": 354,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "354",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "COMBATENTE FOCADO",
        "level": 1,
        "page": 354,
        "text": "Quando uma criatura ao alcance de uma arma corpo a corpo que você empunha ataca alguém que não seja você, pode usar reação para fazer um ataque de oportunidade contra ela. Quando acerta um ataque de oportunidade, role um dado de dano da arma adicional e some ao dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CORPO DO DESAFIANTE",
        "level": 6,
        "page": 354,
        "text": "Seu máximo de pontos de vida aumenta em 2 × seu nível de Alma Favorecida e aumenta em mais 2 a cada novo nível de Alma Favorecida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAMPEÃO EM SURTO",
        "level": 10,
        "page": 354,
        "text": "No seu turno, se não estiver incapacitado, gaste Purificação para realizar uma ação Atacar adicional, e todos os ataques dela têm vantagem. No fim do turno, para cada ataque dessa ação extra que errou, role o dano da arma; você ganha a soma como pontos de vida temporários. Apenas uma vez por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 13,
        "page": 354,
        "text": "Ao realizar Atacar, pode fazer três ataques. No 20º nível, quatro ataques.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-nyphlamour",
    "classId": "favored-soul-retia",
    "name": "Fardo de Nyphlamour",
    "originalName": "Burden of Nyphlamour",
    "aliases": [
      "Burden of Nyphlamour"
    ],
    "desc": "Arma(s) Favorecida(s): espada longa. O Efficate Celestial tem a missão de conectar pessoas; seus favorecidos são atraídos à cura, compreensão e auxílio mútuo.",
    "sourcePage": 354,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "354",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "DOM DA CAMARADAGEM",
        "level": 1,
        "page": 354,
        "text": "Você pode realizar Ajudar como ação bônus. Uma criatura que você ajuda recebe pontos de vida temporários iguais a 1d10 + metade do seu nível de Alma Favorecida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ORIENTAÇÃO DA MUSA",
        "level": 1,
        "page": 354,
        "text": "Por Nyphlamour ser uma musa celestial, magias de Bardo contam como magias da Alma Favorecida para você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CARREGADO POR VENTOS GENTIS",
        "level": 6,
        "page": 354,
        "text": "Como ação, escolha criatura voluntária visível a até 3 metros × seu bônus de proficiência. Escolha: você e tudo que carrega se teleportam para espaço desocupado adjacente ao alvo, ou o alvo e tudo que carrega se teleportam para espaço desocupado adjacente a você. Se a criatura teleportada estava caída, pode chegar em pé.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MAGIA COMUNITÁRIA DE PROTEÇÃO",
        "level": 10,
        "page": 354,
        "text": "Como ação, gaste Purificação e escolha criaturas a até 9 metros em quantidade igual ao bônus de proficiência, podendo incluir você. Elas ficam resistentes a perfurante, cortante e contundente, além de um tipo adicional à sua escolha. Quando uma delas sofre crítico ou cai a 0 PV, recupera 1d8 × nível do espaço de pacto em PV e o efeito termina para ela. Você mantém concentração como se fosse magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FALA CONECTIVA",
        "level": 13,
        "page": 354,
        "text": "Você compreende qualquer idioma falado e qualquer criatura que fale um idioma compreende sua fala. Criaturas com Inteligência 3 ou menor captam apenas o tom geral.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-saanjeck",
    "classId": "favored-soul-retia",
    "name": "Fardo de Saanjeck",
    "originalName": "Burden of Saanjeck",
    "aliases": [
      "Burden of Saanjeck"
    ],
    "desc": "Arma(s) Favorecida(s): bordão. Saanjeck, força motriz do Colégio de Gun Ghuth, inspira os estudiosos sinceros. Seu favorecido recebe entendimento e amor inatos pelo arcano e é impelido a alcançar alturas mágicas cada vez maiores.",
    "sourcePage": 355,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "355",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "LIÇÕES PARA O INQUISITIVO",
        "level": 1,
        "page": 355,
        "text": "Magias de Mago contam como se estivessem na lista da Alma Favorecida para você, permitindo aprendê-las e conjurá-las.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OLHOS DO CREPÚSCULO",
        "level": 1,
        "page": 355,
        "text": "Você ganha visão no escuro de 18 metros. Se já possuía visão no escuro, ela passa a 36 metros ou aumenta em 9 metros, o que resultar no maior alcance.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORÇA CREPUSCULAR",
        "level": 6,
        "page": 355,
        "text": "Sempre que realiza a ação Atacar, pode fazer um ataque especial adicional lançando força arcana contra criatura a até 18 metros. É ataque de magia à distância, ou corpo a corpo se a até 1,5 m, e causa 1d8 + modificador de conjuração de dano de energia. O dano aumenta para 2d8 no 9º, 3d8 no 13º e 4d8 no 17º nível de Alma Favorecida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LUCUBRAÇÃO REPLETA",
        "level": 10,
        "page": 355,
        "text": "Gaste Purificação para conjurar qualquer magia da lista da Alma Favorecida, mesmo não aprendida ou preparada, de nível no máximo metade do seu nível de Alma Favorecida arredondado para baixo menos 1. Ela é conjurada no nível do seu espaço de pacto, salvo se o nível base for maior, e exige ação e componentes normais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 13,
        "page": 355,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-scorn",
    "classId": "favored-soul-retia",
    "name": "Fardo de Scorn",
    "originalName": "Burden of Scorn",
    "aliases": [
      "Burden of Scorn"
    ],
    "desc": "Arma(s) Favorecida(s): malho. Os favorecidos de Scorn vivem com impulsos sanguinários constantes. Opcionalmente, se um favorecido iniciar o turno ao alcance de movimento de uma criatura com 0 PV, deve passar em salvaguarda de Sabedoria CD 15 ou mover-se até ela e realizar ao menos um ataque de Garra Bestial antes de outras ações.",
    "sourcePage": 355,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "355–356",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GARRA BESTIAL",
        "level": 1,
        "page": 355,
        "text": "Você recebe imediatamente Armamento de Essência; ao chegar ao 2º nível, ele conta como sua escolha. O armamento pode ser a arma favorecida ou uma transformação bestial de seus membros em garras. As garras são sua arma favorecida, usam Força ou atributo de conjuração para ataque/dano, contam como arma marcial e causam 1d8 cortante ou necrótico. Podem ser “arremessadas” com propriedade 6/18 m como talho de energia necrótica. Depois de um ataque com essa arma, pode fazer outro como ação bônus.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO OBSCENO",
        "level": 1,
        "page": 356,
        "text": "Você obtém crítico em 19 ou 20. Quando obtém crítico com arma, recupera PV iguais à metade do dano causado, arredondado para baixo. Não recebe esses benefícios contra morto-vivo, constructo ou criatura sem sangue.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RETORNO DA MORTE",
        "level": 6,
        "page": 356,
        "text": "Em salvaguardas contra a morte, resultados 19 ou 20 fazem você recuperar PV, em vez de apenas 20. Ao obter 19 ou 20, recupera um Dado de Vida de Alma Favorecida + seu modificador de Constituição em PV.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FANTASIA SANGRENTA",
        "level": 10,
        "page": 356,
        "text": "Como ação bônus, gaste Purificação, desapareça em clarão vermelho e teleporte-se para espaço adjacente a criatura visível a até 9 metros; então realiza imediatamente uma ação Atacar sem gastar ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RECONSTITUIÇÃO IMPIEDOSA",
        "level": 13,
        "page": 356,
        "text": "No início de cada turno, se estiver com ao menos 1 PV mas abaixo de metade do máximo, recupera PV iguais à metade do nível de Alma Favorecida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-tithiss",
    "classId": "favored-soul-retia",
    "name": "Fardo de Tithiss",
    "originalName": "Burden of Tithiss",
    "aliases": [
      "Burden of Tithiss"
    ],
    "desc": "Arma(s) Favorecida(s): clava ou bordão. Sintonizados às forças vitais, os favorecidos de Tithiss anseiam aliviar a dor de toda forma de vida e espalhar alívio por onde passam.",
    "sourcePage": 357,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "357",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "RESISTÊNCIA ÁCIDA",
        "level": 1,
        "page": 357,
        "text": "Você tem resistência a dano ácido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESSÊNCIA DE CARVALHO",
        "level": 1,
        "page": 357,
        "text": "Golpe de Sangue de Seiva (Armamento): pode causar ácido no lugar do dano normal e sempre causa ácido adicional igual ao bônus de proficiência. Casca de Tithiss (Radiância): uma vez por Descanso Curto ou Longo, conjure Véu de Ilsrabae sem espaço em nível do pacto; sua pele vira madeira, concedendo imunidade a ácido em vez de resistência a frio, causando ácido em vez de frio e reduzindo dano perfurante/cortante/contundente sofrido em metade do seu nível de Alma Favorecida. Caminhante das Árvores (Voo): no início do turno, gaste 4,5 m de movimento para desfazer-se em terra/pedra e surgir de uma árvore visível a distância de 3 m × bônus de proficiência, desde que ela seja pelo menos do seu tamanho.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARCANISTA NUTRIDOR",
        "level": 6,
        "page": 357,
        "text": "Quando conjura com espaço uma magia que escolhe um único aliado, ele recupera PV iguais à metade do seu nível de Alma Favorecida. Se a magia escolher vários aliados de uma só vez, cada um recupera PV iguais ao nível do espaço de pacto usado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FLORESTAMENTO EMERGENTE",
        "level": 10,
        "page": 357,
        "text": "Como ação, gaste Purificação e preencha esfera de 9 metros de raio centrada em você com vegetação e três árvores Grandes de 9 metros de altura em posições escolhidas. Você recupera 1d8 × nível do espaço de pacto em PV. Para outros, a área é terreno difícil; quem terminar o turno nela faz salvaguarda de Força ou fica restringido por vinhas. Restrito sofre 2d6 ácido no início do turno e pode usar ação para teste de Força contra sua CD, ou romper as vinhas causando 10+ dano num turno; as vinhas têm CA igual à sua CD, vulnerabilidade a fogo/cortante e resistência aos demais danos. Dura até 1 minuto com concentração como magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LUZ VITAL",
        "level": 13,
        "page": 357,
        "text": "Como ação, gaste um espaço de pacto e toque criatura. Ela recupera 2d6 × nível do espaço em PV e é curada de qualquer efeito que Restauração Menor removeria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-tquinn",
    "classId": "favored-soul-retia",
    "name": "Fardo de T’quinn",
    "originalName": "Burden of T’quinn",
    "aliases": [
      "Burden of T’quinn"
    ],
    "desc": "Arma(s) Favorecida(s): espada grande, espada curta ou adaga. O favorecido de T’quinn sente os sentidos divididos como se sempre houvesse outra versão de si ao lado. Um eco cuida dele e estende sua percepção, enquanto o fardo o impele a proteger a alegria e a história dos outros.",
    "sourcePage": 356,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "356",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAVORECIDO DOS EIDOLONS",
        "level": 1,
        "page": 356,
        "text": "Você tem vantagem em testes de Queima Eidomântica e todos os seus ataques são mágicos e eidólicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ENCANTAMENTO DAS MUSAS",
        "level": 1,
        "page": 356,
        "text": "Todas as magias de Bardo e do grupo Épico da Dualidade contam como magias da Alma Favorecida para você. Você também ganha Especialização em Atuação e proficiência em um instrumento.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SEGUNDO ECO",
        "level": 6,
        "page": 356,
        "text": "Um duplicado ilusório e invisível vigia você. Você não pode ser surpreendido; durante o sono não sofre penalidade em Percepção passiva por estar inconsciente ou distraído; pode usar os sentidos do eco e fica imune a cegueira. O duplicado também pode realizar tarefas como um Servo Invisível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DUPLICATA HARMONIOSA",
        "level": 10,
        "page": 356,
        "text": "Como ação, gaste Purificação e crie duplicata ilusória em espaço desocupado a até 9 metros por 1 minuto. No momento da criação e no início de cada turno, escolha qual dos dois é real; o outro vira ilusão, e o real assume todas as suas condições e efeitos, exceto os dependentes da posição física, como agarrado/restringido. Ambos podem mover-se separadamente usando seu deslocamento; você vê pelos dois e fala pela ilusão. A duplicata atravessa criaturas, mas não termina no mesmo espaço, e não atravessa barreiras com mais de 10 cm de espessura. Objetos pegos pelo real são espelhados e permanecem com o real após trocas; criaturas vivas e objetos maiores que você não podem ser transportados. Quando é alvo de ataque ou magia que percebe, use reação para trocar posições. Depois role 1d100; se o resultado for maior que 2 × seu nível de Alma Favorecida, a duplicata desaparece. Também termina se acabar o turno a mais de 36 metros de você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA ECOANTE",
        "level": 13,
        "page": 356,
        "text": "Uma vez em cada turno, se não estiver incapacitado, faça um ataque com arma através da Duplicata Harmoniosa; conta como vindo de você em tudo exceto a origem física. Contra criaturas que enxergam ilusões ou têm visão verdadeira, o ataque tem desvantagem. Criaturas também provocam ataques de oportunidade ao sair do alcance da duplicata, feitos da mesma maneira.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-favored-soul-retia-burden-of-vestias",
    "classId": "favored-soul-retia",
    "name": "Fardo de Vestias",
    "originalName": "Burden of Vestias",
    "aliases": [
      "Burden of Vestias"
    ],
    "desc": "Arma(s) Favorecida(s): lança, bordão ou chicote. O fardo de Vestias gira em torno dos perigos da magia. Seus favorecidos resistem a feitiços e radiação eidomântica, produzem mais energia mágica e são compelidos a proteger o uso responsável da magia contra abusadores e repressão.",
    "sourcePage": 358,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "358",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAVORECIDO DOS EIDOLONS",
        "level": 1,
        "page": 358,
        "text": "Você tem vantagem em testes de Queima Eidomântica e todos os seus ataques são mágicos e eidólicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ALTA FEITIÇARIA DA GUARDIÃ DOS CÉUS",
        "level": 1,
        "page": 358,
        "text": "Magias da lista de Feiticeiro e do grupo Arcana da Guardiã dos Céus contam como magias da Alma Favorecida para você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONJURAÇÃO RÁPIDA",
        "level": 6,
        "page": 358,
        "text": "Quando realiza a ação Atacar, pode usar ação bônus para conjurar uma magia de Alma Favorecida cujo tempo normal seja 1 ação. A magia é tratada como conjurada em seu nível base, mesmo se o espaço usado for superior.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ÉGIDE ANTIMAGIA",
        "level": 10,
        "page": 358,
        "text": "Como ação, gaste Purificação e crie por 1 minuto barreira que anula magia externa. Você fica imune aos efeitos de magias cujo nível seja igual ou inferior à metade do seu nível de Alma Favorecida, arredondado para baixo, menos 1, salvo se escolher ser afetado. Magias de divindades e artefatos ignoram a imunidade, mas o dano delas ainda é reduzido à metade e você tem vantagem em testes e salvaguardas contra elas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BÊNÇÃO DO PODER DA FEITIÇARIA",
        "level": 13,
        "page": 358,
        "text": "Você recebe um espaço de pacto adicional do mesmo nível indicado na tabela da Alma Favorecida, funcionando exatamente como seus outros espaços.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-adventure",
    "classId": "inscriptor-retia",
    "name": "Aventura",
    "originalName": "Adventure",
    "aliases": [
      "Adventure"
    ],
    "desc": "Sua escrita celebra jornadas, heróis, locais distantes e histórias que tiram os protagonistas da segurança para lançá-los em um mundo turbulento. Você se sente mais inspirado quando descreve movimento, risco e feitos ousados.",
    "sourcePage": 364,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "364",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CONTRA TODAS AS PROBABILIDADES",
        "level": 1,
        "page": 364,
        "text": "Perigo e infortúnio são apenas a preparação para uma fuga no último instante. Quando você obtiver resultado 1 em um dado de uma jogada de ataque, teste de atributo, salvaguarda ou jogada de dano, pode rerrolar esse dado uma vez e deve usar o novo resultado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARMADO COM CONHECIMENTO",
        "level": 5,
        "page": 364,
        "text": "Você escreve sobre indivíduos heroicos e usa a influência de seu patrono para assumir qualidades semelhantes. Você recebe automaticamente a Inscrição Fantasia Aventureira, sem custo de Marcas de Inscrição. Se já a possuía, recupera as Marcas de Inscrição investidas nela e pode escolher uma nova Inscrição. Em qualquer caso, Fantasia Aventureira não conta no seu limite de Inscrições.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 8,
        "page": 364,
        "text": "Quando realiza a ação Atacar, você pode atacar duas vezes em vez de uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MOMENTO DE GLÓRIA",
        "level": 12,
        "page": 364,
        "text": "Como ação, você pode gastar um uso de Consulta e escolher um número de criaturas a até 9 metros igual ao seu bônus de proficiência. Cada alvo recebe pontos de vida temporários iguais ao seu nível de Inscritor; esses pontos desaparecem quando a criatura termina um Descanso Curto ou Longo. Enquanto possuir esses pontos de vida temporários, sempre que fizer uma jogada de ataque ou salvaguarda, rola 1d4 e soma o resultado à jogada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APOSTA SUPREMA",
        "level": 20,
        "page": 364,
        "text": "Uma vez por Descanso Longo, você pode conjurar Invulnerabilidade sem gastar espaço de magia nem componentes materiais. A magia pode ter apenas você como alvo, independentemente de outros itens, efeitos ou características. Enquanto estiver sob seus efeitos, quando realiza a ação Atacar, pode atacar três vezes em vez de uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 364,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Heroísmo"
          },
          {
            "level": "3º",
            "spells": "Aprimorar Habilidade"
          },
          {
            "level": "5º",
            "spells": "Salto Trovejante"
          },
          {
            "level": "7º",
            "spells": "Proteção contra a Morte"
          },
          {
            "level": "9º",
            "spells": "Vento Cortante"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-comedian",
    "classId": "inscriptor-retia",
    "name": "Comediante",
    "originalName": "Comedian",
    "aliases": [
      "Comedian"
    ],
    "desc": "Você escreve histórias sobre a tolice de seus personagens e domina a linha tênue entre tragédia e humor. Sua leitura das motivações, obsessões e fraquezas alheias permite transformar situações absurdas em alterações reais da realidade.",
    "sourcePage": 365,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "365",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "NÃO ENTENDI",
        "level": 1,
        "page": 365,
        "text": "Você não pode ser enfeitiçado, enfurecido nem amedrontado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COMÉDIA PASTELÃO",
        "level": 8,
        "page": 365,
        "text": "Quando uma criatura que você possa ver se mover mais de 3 metros sem parar, você pode usar sua reação e gastar uma Distorção Narrativa para forçá-la a realizar uma salvaguarda de Destreza. Em uma falha, ela cai no chão e seu deslocamento é reduzido a 0 até o início do próximo turno dela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PATO DA MORTE",
        "level": 12,
        "page": 365,
        "text": "Como ação bônus, você pode gastar uma Distorção Narrativa para criar uma pequena réplica realista de um animal adorável ou chamativo em um espaço desocupado a até 18 metros. Criaturas que iniciem o turno a até 6 metros da réplica, ou entrem nessa área pela primeira vez no turno, devem passar em uma salvaguarda de Carisma ou ficam enfeitiçadas até o início do próximo turno delas. Enquanto enfeitiçadas assim, ficam incapacitadas, não podem se mover e ficam totalmente fascinadas pela réplica. Uma criatura que passe na salvaguarda fica imune àquela réplica. Uma criatura afetada também pode repetir a salvaguarda sempre que sofrer dano ou for obrigada a realizar uma salvaguarda de Força, Constituição ou Destreza. A réplica desaparece se você iniciar seu turno sem ninguém fascinado por ela ou após 1 minuto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COMÉDIA DE ADEREÇOS",
        "level": 20,
        "page": 365,
        "text": "Uma vez por Descanso Longo, você pode conjurar Dominar Pessoa ou Animar Objetos sem gastar espaço de magia nem componentes materiais. Ao fazê-lo, pode gastar um uso de Consulta para aumentar o nível da magia pelo valor que a Consulta normalmente acrescentaria a um espaço de Magia de Pacto criado por ela. Se gastar Consulta ao conjurar Dominar Pessoa, pode conjurar Dominar Monstro em seu lugar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COMÉDIA DE ERROS",
        "level": 5,
        "page": 365,
        "text": "Como ação, você começa a escrever uma longa história de arrogância, acaso e infortúnio. O efeito dura até 1 minuto enquanto você usar sua ação bônus em cada turno e se concentrar como se fosse uma magia. Ao final de qualquer turno em que não usar a ação bônus para continuar escrevendo, deve fazer um teste de concentração com CD 10 + o número de testes de concentração já feitos para este uso. Enquanto a farsa durar, todas as criaturas a até 9 metros ficam sob sua influência: em cada turno, o primeiro ataque feito por cada criatura hostil erra automaticamente; todos os ataques delas têm desvantagem e todos os ataques contra elas têm vantagem. Ataques feitos de fora do raio contra alvos dentro dele são tratados como se tivessem se originado dentro da área. Depois de usar esta característica, só pode usá-la novamente após um Descanso Longo, a menos que gaste um uso de Consulta ao ativá-la.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 365,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Riso Histérico de Tasha"
          },
          {
            "level": "3º",
            "spells": "Enamorar"
          },
          {
            "level": "5º",
            "spells": "Palavra Curativa em Massa"
          },
          {
            "level": "7º",
            "spells": "Enamorar Monstro"
          },
          {
            "level": "9º",
            "spells": "Mão Suprema"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-playwright",
    "classId": "inscriptor-retia",
    "name": "Dramaturgo",
    "originalName": "Playwright",
    "aliases": [
      "Playwright"
    ],
    "desc": "Você escreve peças, discursos, roteiros e textos destinados à interpretação. Sua magia toma a forma de direções de palco capazes de motivar, orientar e até reescrever temporariamente a atuação de outras pessoas.",
    "sourcePage": 372,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "372",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ENTRAR EM CENA",
        "level": 1,
        "page": 372,
        "text": "Você soma seu bônus de proficiência às jogadas de iniciativa.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MOTIVAÇÃO",
        "level": 5,
        "page": 372,
        "text": "Uma vez por Descanso Curto ou Longo, como ação, escolha um número de criaturas voluntárias que possa ver, incluindo você, até seu bônus de proficiência. Elas ficam enfeitiçadas por você por 1 minuto, mesmo que normalmente sejam imunes. Como ação bônus no seu turno, pode conceder a todas elas pontos de vida temporários iguais a 1d10 + seu nível de Inscritor. Quando uma dessas criaturas falhar em uma salvaguarda ou errar um ataque, você pode usar sua reação e gastar uma Distorção Narrativa para conceder a ela, até o início do seu próximo turno, um bônus igual ao seu modificador de Carisma naquele tipo de salvaguarda ou em ataques com a mesma arma, característica ou magia; o bônus também se aplica à jogada que falhou, podendo mudar o resultado. Você deve manter concentração como se fosse uma magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DIREÇÃO DE PALCO",
        "level": 8,
        "page": 372,
        "text": "Como ação bônus, gaste um uso de Consulta e escolha um aliado a até 18 metros. No próximo turno que ele iniciar dentro do próximo minuto, desde que não esteja incapacitado, ele recebe uma ação adicional que deve usar para Atacar, Disparada, Desengajar, Esquivar ou conjurar uma magia que normalmente exija 1 ação ou 1 ação bônus. Ele não pode usar essa ação extra se tiver obtido uma segunda ação naquele turno por outra característica, como Surto de Ação, nem pode receber uma ação extra de característica semelhante depois de usar esta.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TALENTO CONFIÁVEL",
        "level": 12,
        "page": 372,
        "text": "Quando fizer um teste com uma perícia na qual seja proficiente e o d20 mostrar menos de 10, trate o resultado do d20 como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BIS",
        "level": 20,
        "page": 372,
        "text": "Você pode gastar um uso de Consulta para conjurar qualquer magia que tenha visto ser conjurada ou que você mesmo tenha conjurado desde seu último Descanso Longo, sem gastar espaço nem componentes materiais. A magia é conjurada no mesmo nível em que você a viu ser conjurada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 372,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Comando"
          },
          {
            "level": "3º",
            "spells": "Raio Lunar"
          },
          {
            "level": "5º",
            "spells": "Forjar Morte"
          },
          {
            "level": "7º",
            "spells": "Terreno Alucinógeno"
          },
          {
            "level": "9º",
            "spells": "Similaridade"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-vestias-scribe",
    "classId": "inscriptor-retia",
    "name": "Escriba de Vestias",
    "originalName": "Vestias’ Scribe",
    "aliases": [
      "Vestias’ Scribe"
    ],
    "desc": "Esta Intenção Autoral serve diretamente à deusa da magia, Vestias — ou uma divindade equivalente. O Escriba recebe compreensão excepcional da Trama e se aproxima mais da magia arcana tradicional do que outros Inscritores.",
    "sourcePage": 374,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "374",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FONTE ARCANA",
        "level": 1,
        "page": 374,
        "text": "Escolha Patrulheiro, Feiticeiro, Bruxo ou Mago. Ao ganhar níveis de Inscritor, você pode aprender magias da lista da classe escolhida como se fossem magias de Inscritor. Em vez de uma classe, pode escolher uma escola de magia; nesse caso, pode aprender magias dessa escola.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SÁBIO ARCANO",
        "level": 5,
        "page": 374,
        "text": "Você pode sintonizar-se com o grimório de um Mago como se fosse um item mágico, consumindo um espaço de sintonia. Enquanto sintonizado, ao terminar um Descanso Longo, prepare a partir do grimório um número de magias igual ao seu modificador de Inteligência, desde que seus espaços de pacto possam conjurá-las. Você pode conjurá-las com espaços de Magia de Pacto como magias de Inscritor até preparar uma nova seleção ou perder a sintonia. Além disso, um número de vezes por Descanso Curto ou Longo igual à metade de seu bônus de proficiência, arredondado para baixo, pode conjurar uma dessas magias preparadas sem gastar espaço; quando conjurada assim, ela usa seu nível base.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONSULTA DEÍFICA",
        "level": 8,
        "page": 374,
        "text": "Quando usa Consulta para criar um espaço de Magia de Pacto, esse espaço sempre tem no mínimo o mesmo nível dos seus espaços normais de pacto, independentemente de seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 12,
        "page": 374,
        "text": "Você tem vantagem em salvaguardas contra magias e efeitos mágicos e resistência ao dano causado por eles.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PENA DA DEUSA DA TRAMA",
        "level": 20,
        "page": 374,
        "text": "Uma vez por Descanso Longo, como ação, você se torna um condutor da influência de Vestias por 1 minuto. Durante esse período, recebe deslocamento de voo (pairar) de 18 metros. No início de cada turno, escolha criar um espaço de pacto de 3º nível, chamado espaço divino, ou aumentar em 1 o nível de um espaço divino existente, até o máximo de 9º. Uma vez em cada um de seus turnos, pode gastar um espaço divino para conjurar sem ação uma magia cujo tempo de conjuração seja 1 ação ou 1 ação bônus. Quando o efeito termina, você perde todos os espaços divinos e recebe 1d10 PV temporários para cada espaço perdido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 374,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Detectar Magia"
          },
          {
            "level": "3º",
            "spells": "Arma Mágica"
          },
          {
            "level": "5º",
            "spells": "Contramágica"
          },
          {
            "level": "7º",
            "spells": "Esfera Resiliente"
          },
          {
            "level": "9º",
            "spells": "Vidência"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-fantasy",
    "classId": "inscriptor-retia",
    "name": "Fantasia",
    "originalName": "Fantasy",
    "aliases": [
      "Fantasy"
    ],
    "desc": "Sua obra é povoada por seres que ultrapassam limites mortais, heróis extraordinários e energias capazes de desafiar deuses. Por meio da escrita, você descreve a si mesmo e seus aliados como protagonistas capazes de superar o impossível.",
    "sourcePage": 367,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "367",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ARCO DE TREINAMENTO",
        "level": 1,
        "page": 367,
        "text": "Escolha um dos benefícios a seguir; no 10º nível de Inscritor, escolha mais um: seu deslocamento básico aumenta em 3 metros; você recebe percepção às cegas até 3 metros × seu bônus de proficiência; recebe proficiência em um tipo de salvaguarda à sua escolha, exceto salvaguardas contra a morte; recebe proficiência com três armas à sua escolha, podendo também escolher escudos ou armaduras médias, inclusive armas de fogo mesmo sem atender normalmente seus requisitos; recebe proficiência em três perícias ou ferramentas à sua escolha; ou recebe Especialização em duas perícias à sua escolha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICA NOMEADA",
        "level": 5,
        "page": 367,
        "text": "Quando conjura uma magia que causa dano a um ou mais alvos, você pode gastar uma Distorção Narrativa para acrescentar ao primeiro dano da magia 1d6 × seu bônus de proficiência do mesmo tipo de dano da magia. Se a magia causar vários tipos, escolha qual deles recebe o dano adicional.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RETORNO DA BEIRA DO ABISMO",
        "level": 8,
        "page": 367,
        "text": "Quando for reduzido a 0 pontos de vida ou morto instantaneamente, pode usar sua reação e gastar um uso de Consulta para retornar com metade de seus pontos de vida máximos, arredondado para cima, sem sofrer Fadiga de Combate. Você tem vantagem em todas as salvaguardas até o início do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "IMPULSO SUPREMO",
        "level": 12,
        "page": 367,
        "text": "Você recebe um espaço adicional de Magia de Pacto de Inscritor. Recebe outro no 15º nível e outro no 18º nível. Eles funcionam como seus espaços normais de Magia de Pacto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ALÉM DO ALÉM",
        "level": 20,
        "page": 367,
        "text": "Como ação, escolha uma criatura voluntária que você possa ver a até 18 metros e comece a escrever sobre ela transcendendo os próprios limites. Enquanto você se concentrar, por até 1 minuto, o alvo recebe um bônus igual à metade de seu bônus de proficiência, arredondado para baixo, em todas as jogadas de ataque, salvaguardas, testes de atributo e na CA; também adquire resistência a todo dano, e dobra suas distâncias de salto em altura, salto em distância e capacidade de carga. Se o alvo permitir, você pode dirigir suas ações em seu turno: use sua ação para fazê-lo executar uma ação que seja capaz de realizar, use seu próprio movimento para movê-lo ou conjure uma magia como se ela se originasse dele usando suas estatísticas. Você vê e ouve através dele sem perder seus próprios sentidos. Depois de usar esta característica, só pode usá-la novamente após um Descanso Longo, a menos que gaste um uso de Consulta ao ativá-la.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 367,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Golpe da Valquíria"
          },
          {
            "level": "3º",
            "spells": "Aumentar/Reduzir"
          },
          {
            "level": "5º",
            "spells": "Voo"
          },
          {
            "level": "7º",
            "spells": "Avatar de Gaius"
          },
          {
            "level": "9º",
            "spells": "Reencarnação"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-historian",
    "classId": "inscriptor-retia",
    "name": "Historiador",
    "originalName": "Historian",
    "aliases": [
      "Historian"
    ],
    "desc": "Você prefere relatos factuais, arquivos, registros e acontecimentos históricos. Sua magia literária transforma pesquisa em uma ferramenta capaz de revelar estatísticas de criaturas, orientar aliados e até alterar temporariamente a “ficha” da realidade de um alvo.",
    "sourcePage": 369,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "369",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PESQUISADOR",
        "level": 1,
        "page": 369,
        "text": "Você recebe proficiência e Especialização em História. Se já tinha proficiência em História, escolha outra perícia para receber proficiência. Ao fazer um teste de História sobre um assunto que não pesquisou formalmente, ainda pode recordar informações que sejam de conhecimento comum em livros ou periódicos acessíveis ao público.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PESQUISA INVASIVA",
        "level": 5,
        "page": 369,
        "text": "Como ação bônus, gaste uma Distorção Narrativa e escolha três informações sobre uma criatura que você possa ver: pontos de vida restantes, arredondados para o múltiplo de 20 mais próximo; CA atual e CA sem efeitos; proficiências em salvaguardas, sem valores; dois valores de atributo à sua escolha; proficiências em perícias, sem valores; duas entre resistências, vulnerabilidades ou imunidades a dano; imunidades a condições, incluindo limiar de dano; bônus de proficiência; tipo e alinhamento; ou sentidos. Para cada opção escolhida, faça um teste de História com CD igual ao ND do alvo, ou níveis de classe + 8 se construído como personagem jogador. Para cada sucesso, você aprende uma das qualidades escolhidas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RELATO INFORMADO",
        "level": 8,
        "page": 369,
        "text": "Você pode realizar a ação Ajudar como ação bônus, escrevendo sua intenção, e pode usá-la em uma criatura que veja a até 18 metros. Você pode Ajudar em qualquer teste de atributo ou perícia mesmo sem familiaridade com a tarefa. Ao usar Ajudar, pode gastar uma Distorção Narrativa para afetar um número de criaturas igual ao seu bônus de proficiência, ajudando cada uma individualmente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VERDADE CATEGÓRICA",
        "level": 12,
        "page": 369,
        "text": "Quando conjura Lendas e Histórias usando um espaço de Magia de Pacto, o tempo de conjuração é 1 ação. Se possuir um tomo vazio e passar 1 hora em transe conjurando-a sem interrupção, pode realizar uma versão exaustiva: as informações obtidas são transcritas no tomo, incluindo registros de outros livros e materiais de referência, além de um apêndice que indica locais gerais de fontes onde mais informações sobre o assunto podem ser encontradas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SABOTAR REGISTRO",
        "level": 20,
        "page": 369,
        "text": "Como ação bônus, gaste um uso de Consulta, escolha dois efeitos abaixo e uma criatura que possa ver a até 18 metros. Pode escolher uma opção mais de uma vez, mas efeitos iguais não se acumulam. O alvo faz uma salvaguarda de Inteligência; em uma falha, os efeitos duram 1 minuto, e ele repete a salvaguarda ao final de cada turno, encerrando-os em um sucesso. Opções: perder imunidade ou resistência a um tipo de dano; tornar-se vulnerável a um tipo de dano ao qual não tenha resistência; reduzir a CA em 5; reduzir à metade, arredondando para cima, o bônus de testes de atributo e salvaguardas baseado em um atributo escolhido; reduzir seus deslocamentos à metade; sofrer desvantagem em salvaguardas contra uma condição escolhida; sofrer desvantagem em ataques com armas ou magias; ou perder um sentido especial. Uma criatura pode sofrer no máximo dois desses efeitos ao mesmo tempo. Como ação bônus em seu turno, você pode atualizar o registro e trocar um efeito ativo por outro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 369,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Identificação"
          },
          {
            "level": "3º",
            "spells": "Ver o Invisível"
          },
          {
            "level": "5º",
            "spells": "Fortificação Mental"
          },
          {
            "level": "7º",
            "spells": "Ossenheimer’s archive"
          },
          {
            "level": "9º",
            "spells": "Conhecimento Lendário"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-cosmic-horror",
    "classId": "inscriptor-retia",
    "name": "Horror Cósmico",
    "originalName": "Cosmic Horror",
    "aliases": [
      "Cosmic Horror"
    ],
    "desc": "Você pesquisa aberrações, entidades exteriores e aquilo que existe além do universo conhecido. Em vez de recuar diante de suas visões, tenta compreendê-las — embora nunca seja totalmente claro se os horrores que escreve são fruto de sua imaginação ou se alguma presença maior conduz sua pena.",
    "sourcePage": 366,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "366",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "OLHOS DIABÓLICOS",
        "level": 1,
        "page": 366,
        "text": "Você recebe visão diabólica até 18 metros. Uma vez por Descanso Longo, como ação bônus, pode conceder visão diabólica de 9 metros por 10 minutos a um número de criaturas a até 9 metros igual ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "HORROR CONJURADO",
        "level": 5,
        "page": 366,
        "text": "Uma vez por Descanso Longo, como ação, você pode invocar uma aberração em um espaço desocupado a até 4,5 metros, sofrendo 2d12 de dano psíquico irredutível. A aberração é leal a você, age em seu interesse e permanece por 1 hora, obedecendo às seguintes regras: se puder conjurar magias, uma magia de 1º a 3º nível custa uma Distorção Narrativa; uma magia de 5º nível ou inferior custa um de seus espaços de Magia de Pacto; e uma magia de até 9º nível custa um uso de Consulta. Ela não pode usar Multiataque. Não pode realizar ações que não sejam ataques com armas, a menos que você gaste uma Distorção Narrativa para permitir. Seu ND deve ser igual ou inferior ao seu nível de Inscritor. Ela desaparece se ficar inconsciente, chegar a 0 pontos de vida ou morrer. Age na sua iniciativa; pode se mover conforme suas ordens, mas qualquer ação exige sua ação bônus. Sem ordens, protege-se da melhor forma possível. Você deve manter concentração como em uma magia, mas pode manter esta concentração simultaneamente com outro efeito; se perder a concentração, ela desaparece. Quando desaparece, você fica atordoado por 1 minuto pelo esforço e, no início de cada turno, faz uma salvaguarda de Carisma com CD 8 + o ND da aberração, recuperando-se em um sucesso. A aberração pode usar Ações Lendárias, mas cada uso exige de você um número de Distorções Narrativas igual ao número de Ações Lendárias que ele consumiria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SEU PIOR PESADELO",
        "level": 8,
        "page": 366,
        "text": "Uma vez por Descanso Curto ou Longo, como ação, escolha uma criatura a até 18 metros. Ela e todas as criaturas a até 4,5 metros dela devem realizar uma salvaguarda de Inteligência. Em uma falha, sofrem dano psíquico igual a 1d10 × seu bônus de proficiência; em um sucesso, sofrem metade. Quem falhar também fica amedrontado por você por 1 minuto e repete a salvaguarda ao final de cada turno. Um sucesso encerra o efeito; uma nova falha causa mais 1d10 de dano psíquico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TERROR SÚBITO",
        "level": 12,
        "page": 366,
        "text": "Como ação bônus, você pode gastar uma Distorção Narrativa para escrever rapidamente a chegada de um horror sobrenatural. Uma aberração de ND igual ou inferior ao seu nível de Inscritor surge em um espaço desocupado a até 18 metros, executa uma ação que seja capaz de realizar, sob sua direção, e desaparece. Essa ação não está sujeita às limitações de Horror Conjurado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONDUTOR DE UM PODER MAIOR",
        "level": 20,
        "page": 366,
        "text": "Você recebe a bênção de uma entidade exterior de poder deífico. Torna-se imune às condições enfeitiçado, amedrontado e atordoado, e recebe deslocamento de voo (pairar) igual ao seu deslocamento básico. Além disso, como ação, você conjura apêndices de outro mundo para atingir até quatro criaturas a até 9 metros. Faça um ataque corpo a corpo com magia para cada alvo; em um acerto, causa 2d12 + seu modificador de Inteligência de dano psíquico. Se vários tentáculos atingirem a mesma criatura, eles são resolvidos coletivamente como um único ataque corpo a corpo com magia, mas causam +1d12 de dano psíquico por tentáculo depois do primeiro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 366,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Sangue Sobrecarregado"
          },
          {
            "level": "3º",
            "spells": "Vórtice Faminto"
          },
          {
            "level": "5º",
            "spells": "Medo"
          },
          {
            "level": "7º",
            "spells": "Tentáculos Negros de Evard"
          },
          {
            "level": "9º",
            "spells": "Surto de Pavor"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-forbiddance",
    "classId": "inscriptor-retia",
    "name": "Interdição",
    "originalName": "Forbiddance",
    "aliases": [
      "Forbiddance"
    ],
    "desc": "Você busca tomos antigos e conhecimento esquecido, dedicando-se a registrar, esconder e proteger informações perigosas. Seu domínio da linguagem e de proteções escritas transforma segredos em algo que você pode literalmente trancar no mundo.",
    "sourcePage": 368,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "368",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ONILÍNGUE",
        "level": 1,
        "page": 368,
        "text": "Você pode compreender e falar qualquer idioma desde que, em algum momento, tenha visto a escrita usada por ele. Além disso, ao ver um efeito armazenado e acionável semelhante a Glifo de Vigilância, você percebe qual magia está contida nele e qual seria seu alvo se fosse ativado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MENTE INCOGNOSCÍVEL",
        "level": 5,
        "page": 368,
        "text": "Você tem resistência a dano psíquico e vantagem em salvaguardas de Inteligência. Criaturas não podem ler sua mente nem se comunicar telepaticamente com você sem sua permissão, e você percebe quando alguém tenta fazê-lo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FECHADURA E CHAVE",
        "level": 8,
        "page": 368,
        "text": "Como interação, você pode abrir ou fechar qualquer porta ou recipiente não mágico e destrancado que possa ver a até 18 metros. Além disso, pode conjurar Tranca Arcana e Arrombar um número de vezes igual à metade de seu bônus de proficiência, arredondado para cima, sem gastar espaço de magia nem componentes materiais, recuperando os usos após um Descanso Longo. O alcance de Tranca Arcana passa a 18 metros e Arrombar não produz som. Se o objeto trancado não tinha fechadura, sua CD básica para ser arrombado ou forçado é igual à sua CD de magia de Inscritor. Ao trancar um objeto desta forma, você deve criar um registro escrito das criaturas que podem ultrapassá-lo e da senha que suprime a magia; se o registro for destruído, a magia termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VISÃO VERDADEIRA",
        "level": 12,
        "page": 368,
        "text": "Você recebe visão verdadeira até 18 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PALAVRAS DE PODER",
        "level": 20,
        "page": 368,
        "text": "Ao conjurar uma magia de 5º nível ou inferior cujo nome contenha “escrita” ou “palavra de poder”, você pode gastar um uso de Consulta em vez de um espaço de Magia de Pacto; nesse caso, a magia é conjurada em seu nível base. Se a magia for de 6º, 7º ou 8º nível, você pode conjurá-la usando um espaço de Magia de Pacto de qualquer nível, tratando o espaço como se tivesse o nível base da magia. Ao receber esta característica, aprenda quaisquer duas magias com “escrita” ou “palavra de poder” no nome; elas contam como magias de Inscritor e não contam no limite de magias conhecidas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 368,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Santuário"
          },
          {
            "level": "3º",
            "spells": "Silêncio"
          },
          {
            "level": "5º",
            "spells": "Maldição Mordaz"
          },
          {
            "level": "7º",
            "spells": "Banimento"
          },
          {
            "level": "9º",
            "spells": "Modificar Memória"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-mystery",
    "classId": "inscriptor-retia",
    "name": "Mistério",
    "originalName": "Mystery",
    "aliases": [
      "Mystery"
    ],
    "desc": "Você registra investigações, crimes e enigmas. O mesmo talento usado para descobrir a verdade também permite ocultá-la, tornando sua magia uma ferramenta de furtividade, subversão e investigação.",
    "sourcePage": 370,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "370",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "INVESTIGADOR CUIDADOSO",
        "level": 1,
        "page": 370,
        "text": "Você recebe proficiência em Furtividade, Intuição e Investigação. Para cada uma dessas perícias em que já seja proficiente, pode escolher outra perícia baseada em Carisma ou Inteligência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "QUEM FOI?",
        "level": 5,
        "page": 370,
        "text": "Se conjurar uma magia enquanto estiver escondido, qualquer alvo do qual esteja escondido ou que não possa vê-lo tem desvantagem na primeira salvaguarda contra a magia. Se falhar nessa salvaguarda, você permanece escondido e não é automaticamente revelado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DETETIVE PARTICULAR",
        "level": 8,
        "page": 370,
        "text": "Você recebe visão diabólica até 36 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SUSPEITO PROVÁVEL",
        "level": 12,
        "page": 370,
        "text": "Quando escolher uma criatura como alvo de um efeito que exija salvaguarda e ela passar na primeira salvaguarda, você pode fazer o efeito ignorá-la e escolher outro alvo dentro do alcance original, tratando-o como o alvo inicial. Só pode trocar um alvo uma vez. Efeitos aplicados à salvaguarda do primeiro alvo não se transferem ao segundo. Se a magia tiver vários alvos, pode usar esta característica uma vez por alvo e uma criatura só pode ser escolhida como novo alvo uma vez por magia. A magia deve escolher alvos individualmente; não funciona com criaturas atingidas apenas por uma esfera, cubo, cone ou outra área de efeito.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FUGA IMPOSSÍVEL",
        "level": 20,
        "page": 370,
        "text": "Como ação bônus, você pode se teleportar até uma distância igual ao seu deslocamento e ficar invisível, como pela magia Invisibilidade mas sem concentração, até o início do seu próximo turno. Tudo que estiver carregando vai com você; se estiver agarrado ou preso por restrições não mágicas, pode escapar delas como parte da ação bônus.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 370,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Infligir Terror"
          },
          {
            "level": "3º",
            "spells": "Passos sem Pegadas"
          },
          {
            "level": "5º",
            "spells": "Clarividência"
          },
          {
            "level": "7º",
            "spells": "Santuário Particular"
          },
          {
            "level": "9º",
            "spells": "Criar Passagem"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-mythology",
    "classId": "inscriptor-retia",
    "name": "Mitologia",
    "originalName": "Mythology",
    "aliases": [
      "Mythology"
    ],
    "desc": "Você estuda bestiários e histórias sobre feras lendárias, aprendendo a reproduzir suas defesas, frustrar seus movimentos e, por fim, dar forma real a uma criatura de lenda.",
    "sourcePage": 371,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "371",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ENCANTAMENTO DE COURAÇA",
        "level": 1,
        "page": 371,
        "text": "Enquanto não estiver usando armadura, sua CA pode ser calculada como 10 + seu modificador de Destreza + seu modificador de Inteligência, descrevendo em sua escrita qualidades de peles, escamas ou couraças de criaturas míticas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAÇADOR DE FERAS SUBVERSIVO",
        "level": 5,
        "page": 371,
        "text": "Quando falhar em uma salvaguarda ou teste de atributo contra uma monstruosidade, dragão ou fera, pode gastar uma Distorção Narrativa para rolar 1d10 e somá-lo ao resultado, possivelmente transformando a falha em sucesso. Se fizer isso, você ganha resistência ao tipo de dano que teria sofrido como consequência dessa falha por 1 minuto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATERRAMENTO",
        "level": 8,
        "page": 371,
        "text": "Como ação bônus, você pode gastar um uso de Consulta e escolher uma criatura a até 72 metros. Ela realiza uma salvaguarda de Inteligência. Em uma falha, perde todos os tipos de deslocamento, exceto seu deslocamento básico, por 1 hora. Como ação, pode fazer um teste de Inteligência contra sua CD de magia, encerrando o efeito em um sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INVOCAR FANTASMA",
        "level": 12,
        "page": 371,
        "text": "Enquanto não estiver incapacitado, você é proficiente em todas as salvaguardas. Ao fazer uma salvaguarda, escreve rapidamente uma linha de texto arcano que lhe concede por um instante a resistência ou versatilidade de uma criatura lendária capaz de suportar melhor aquele efeito.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INVOCAR LENDA",
        "level": 20,
        "page": 371,
        "text": "Uma vez por Descanso Longo, você pode conjurar uma criatura fictícia usando o bloco de estatísticas de uma fera, dragão, monstruosidade ou celestial de ND 20 ou inferior. Ela surge em um espaço desocupado grande o bastante a até 9 metros e permanece até 10 minutos ou até você dispensá-la como ação bônus. Se estiver livre e o espaço permitir, pode montá-la imediatamente. Ela é favorável a você e obedece às seguintes restrições: não usa Ações Lendárias nem Ações de Covil; seus PV máximos tornam-se o dobro dos seus; magias de 1º a 5º nível usam seus espaços de Magia de Pacto, e magias de 6º nível ou superior exigem um uso de Consulta; se conjurar sem espaços, cada magia exige uma Distorção Narrativa ou um de seus espaços. Ações, ações bônus e reações da criatura consomem as suas; sem ordens, ela usa Esquivar. Se for Grande ou maior, você pode montá-la, não pode ser desmontado contra sua vontade, ignora efeitos decorrentes de estar próximo ou em contato com ela se desejar, e ataques ou efeitos que o tenham como alvo podem ser redirecionados para ela. Ela desaparece se morrer, for para outro plano ou iniciar o turno com 0 PV ou inconsciente. Age na sua iniciativa e move-se conforme suas ordens. Você deve manter concentração como em uma magia. A criatura pode ser uma entidade fictícia criada por você ou uma criatura real que tenha aceitado previamente ser invocada; nesse último caso o corpo é falso, mas a mente é real. Ao desaparecer, a mente retorna ao corpo e sofre dano igual ao número de ferimentos que possuía; se isso a mataria, em vez disso cai a 0 PV estabilizada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 371,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Falar com Animais"
          },
          {
            "level": "3º",
            "spells": "Wyrm’s breath"
          },
          {
            "level": "5º",
            "spells": "Espíritos Guardiões"
          },
          {
            "level": "7º",
            "spells": "Conjurar Montaria Maior"
          },
          {
            "level": "9º",
            "spells": "Conjurar Eco Dracônico"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-romance",
    "classId": "inscriptor-retia",
    "name": "Romance",
    "originalName": "Romance",
    "aliases": [
      "Romance"
    ],
    "desc": "Sua obra explora amor, afeto, perda e vínculos capazes de superar obstáculos. Sua magia escrita transforma atenção, cuidado e laços emocionais em proteção e recuperação sobrenatural.",
    "sourcePage": 373,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "373",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GALANTE",
        "level": 1,
        "page": 373,
        "text": "Sempre que fizer um teste ou salvaguarda baseado em Carisma e o d20 mostrar 9 ou menos, trate o resultado do d20 como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATENCIOSO",
        "level": 5,
        "page": 373,
        "text": "Se uma criatura aliada a até 9 metros for reduzida a 0 PV ou sofrer um acerto crítico, você pode usar sua reação para conjurar uma magia com tempo de conjuração de 1 ação ou menos, escolhendo como alvo essa criatura ou a criatura que a feriu.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AMANTES A INIMIGOS",
        "level": 8,
        "page": 373,
        "text": "Como ação, você pode gastar uma Distorção Narrativa para conjurar Enfeitiçar Pessoa em um nível igual ao de seus espaços normais de Magia de Pacto. Enquanto tiver ao menos uma criatura enfeitiçada, pode usar sua ação para sobrecarregar as mentes de todas as criaturas enfeitiçadas por você, tornando-as atordoadas pelo restante da duração do encantamento. Uma criatura atordoada assim faz uma salvaguarda de Inteligência ao final de cada turno, encerrando o efeito em um sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RECUPERAÇÃO MILAGROSA",
        "level": 12,
        "page": 373,
        "text": "Ao escrever sobre a boa saúde de um alvo, você pode gastar um uso de Consulta para conjurar Restauração Maior sem gastar espaço de magia nem componentes materiais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATÉ QUE A MORTE",
        "level": 20,
        "page": 373,
        "text": "Uma vez por Descanso Curto ou Longo, você pode passar 1 minuto realizando uma pequena cerimônia para vincular duas criaturas voluntárias que tenham forte afeto entre si. Enquanto estiverem vinculadas e a até 18 metros uma da outra, se pelo menos uma tiver 1 PV ou mais, nenhuma começa a morrer ao chegar a 0 PV, nenhuma pode ser morta instantaneamente por dano ou efeitos e nenhuma pode ser movida para outro plano contra a vontade. Em 0 PV, continuam agindo normalmente sem salvaguardas contra a morte, mas qualquer dano que uma sofrer é causado à parceira como dano psíquico irredutível. Quando ambas chegam a 0 PV, começam a morrer normalmente; todo sucesso ou falha em salvaguarda contra a morte de uma é refletido na outra. Se uma estabilizar, a outra também; se uma iniciar o turno com 1 PV ou mais, a outra recupera 1 PV. O vínculo termina se você realizar a cerimônia novamente ou se ambas terminarem um Descanso Curto ou Longo em estado de raiva ou desconfiança que gere discórdia entre elas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 373,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Curar Ferimentos"
          },
          {
            "level": "3º",
            "spells": "Acalmar Emoções"
          },
          {
            "level": "5º",
            "spells": "Fortificação Mental"
          },
          {
            "level": "7º",
            "spells": "Enamorar Monstro"
          },
          {
            "level": "9º",
            "spells": "Restauração Maior"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-inscriptor-retia-wakefield",
    "classId": "inscriptor-retia",
    "name": "Wakefield",
    "originalName": "Wakefield",
    "aliases": [
      "Wakefield"
    ],
    "desc": "Você não depende de técnica literária refinada, mas de uma imaginação excepcional, sonhos e pesadelos vívidos. O misterioso Correfonte Wakefield transforma essas imagens subconscientes em orientação e poder mágico.",
    "sourcePage": 375,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "375",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GUIA DO PESADELO",
        "level": 1,
        "page": 375,
        "text": "Você não aprende magias de Inscritor ao ganhar níveis nesta classe. Em vez disso, ao terminar um Descanso Longo, prepara da lista do Inscritor um número de magias que seus espaços de pacto possam conjurar igual ao seu nível de Inscritor + seu modificador de Inteligência. Elas permanecem preparadas até seu próximo Descanso Longo. Suas Magias de Capítulo e magias aprendidas por características ou Inscrições estão sempre preparadas e não contam nesse limite.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OBJETO DE PODER",
        "level": 5,
        "page": 375,
        "text": "Ao terminar um Descanso Curto ou Longo, escolha uma arma para ser seu Objeto de Poder até o próximo descanso. Você recebe proficiência com ela e pode usar Inteligência nas jogadas de ataque e dano com essa arma. Se já era proficiente com ela, quando realiza a ação Atacar pode fazer um segundo ataque com arma, desde que seja com o Objeto de Poder.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANUSCRITO",
        "level": 8,
        "page": 375,
        "text": "Como ação, gaste um uso de Consulta e escolha um número de criaturas a até 18 metros igual ao seu bônus de proficiência. O Mestre ou jogador que controla cada criatura deve declarar, com o máximo de precisão possível, ações e movimentos que ela pretende realizar até seu próximo turno — onde se moverá, quem perseguirá, qual tipo de ação usará, quais magias e Ações Lendárias pretende usar e os alvos. Sempre que uma dessas criaturas tentar realizar uma ação, reação ou curso de ação não declarado, deve fazer uma salvaguarda de Inteligência. Em uma falha, fica atordoada até o fim do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EVASÃO",
        "level": 12,
        "page": 375,
        "text": "Quando fizer uma salvaguarda contra um efeito em que um sucesso normalmente cause metade do dano, você não sofre dano em um sucesso e sofre apenas metade em uma falha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VISLUMBRE DO FUTURO",
        "level": 20,
        "page": 375,
        "text": "Você pode conjurar Premonição uma vez por Descanso Longo, tendo apenas você como alvo e sem gastar espaço de magia nem componentes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo",
        "page": 375,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Maldição"
          },
          {
            "level": "3º",
            "spells": "Escuridão"
          },
          {
            "level": "5º",
            "spells": "Palavra de Poder: Infortúnio"
          },
          {
            "level": "7º",
            "spells": "Chama Sombria"
          },
          {
            "level": "9º",
            "spells": "Dominar Pessoa"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-camellia",
    "classId": "petal-knight-retia",
    "name": "Camélia",
    "originalName": "Camellia",
    "aliases": [
      "Camellia"
    ],
    "desc": "A Camélia representa confiança e vínculos profundos. Seu portador forma uma ligação sobrenatural com um aliado, permitindo que ambos se protejam, coordenem ataques, compartilhem sentidos e canalizem efeitos através um do outro.",
    "sourcePage": 388,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "388",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "VÍNCULO DE WYLAM",
        "level": 2,
        "page": 388,
        "text": "Como ação bônus, abençoe uma criatura que você toque; uma camélia etérea aparece nela por 1 minuto ou até um dos dois encerrar o vínculo. Você e o alvo podem usar reação para fazer um ataque contra o outro errar, mesmo sem vê-lo; a decisão deve ser tomada antes de o Mestre revelar o resultado. Quem usar a reação faz um teste de Carisma com CD igual à metade da jogada de ataque, arredondada para cima. Em uma falha, o ataque ainda erra, mas o vínculo termina. Depois de criar um vínculo, deve terminar um Descanso Curto ou Longo para fazê-lo novamente. No 11º nível, pode criar dois vínculos por Descanso Curto ou Longo, mas cada criatura só pode estar vinculada a uma outra por vez.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RADIÂNCIA DUPLA",
        "level": 6,
        "page": 388,
        "text": "Quando você ou a criatura vinculada atacar uma criatura que o outro tenha atingido desde o último turno do atacante, o primeiro ataque contra esse alvo a cada turno é feito com vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VIRTUDE DA SUAVIDADE",
        "level": 6,
        "page": 388,
        "text": "Como ação bônus, gaste um uso de Vínculo de Wylam para receber 1d10 + seu nível total em PV temporários, que desaparecem no próximo Descanso Curto ou Longo. Enquanto os possuir, ataques contra você têm desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AÇÃO FLORESCENTE",
        "level": 11,
        "page": 388,
        "text": "No turno de uma criatura beneficiada por Vínculo de Wylam, você pode usar sua reação para encerrar o vínculo e conceder a ela uma ação adicional naquele turno, desde que ela ainda não tenha realizado mais de uma ação. Nesse turno ela não pode se beneficiar de Surto de Ação, Surto do Dragão ou outra característica que conceda ação adicional, exceto ações extras de uso limitado como a de Aceleração.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VÍNCULO DE CONFIANÇA",
        "level": 11,
        "page": 388,
        "text": "Você e a criatura vinculada podem usar ação bônus para fazer o outro realizar um ataque com arma, desde que não esteja incapacitado. Vocês também enxergam e ouvem através dos sentidos um do outro, embora sentidos especiais não sejam transferidos aos próprios olhos ou ouvidos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SONHO DE POEIRA ESTELAR",
        "level": 15,
        "page": 388,
        "text": "Quando você ou o parceiro vinculado conjurar uma magia, a magia pode se originar do outro, com consentimento, ou escolher um ponto que você enxergue pelos sentidos dele como se estivesse no lugar dele. Além disso, vocês podem escolher um ao outro como alvo de efeitos que exijam toque independentemente da distância entre vocês.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-foxglove",
    "classId": "petal-knight-retia",
    "name": "Dedaleira",
    "originalName": "Foxglove",
    "aliases": [
      "Foxglove"
    ],
    "desc": "A Dedaleira se manifesta em exploradores solitários e resistentes ao perigo natural. Seu portador compreende toxinas, transforma veneno em cura e usa a própria toxicidade como arma.",
    "sourcePage": 392,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "392",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS BÔNUS",
        "level": 2,
        "page": 392,
        "text": "Você recebe proficiência em Sobrevivência e com kit de envenenador.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DESTRUIÇÃO TÓXICA",
        "level": 2,
        "page": 392,
        "text": "Esta característica não pode beneficiar o mesmo ataque que outra característica de classe com “Destruição” no nome. Ao acertar com uma arma corpo a corpo de uma mão, pode gastar um espaço de Magia de Pacto para causar +1d8 de dano venenoso por nível do espaço. Esse dano ignora resistência a veneno e trata imunidade como resistência. O alvo faz salvaguarda de Constituição; em falha, fica envenenado por 1 minuto e repete a salvaguarda ao fim de cada turno, encerrando em sucesso. Cada nova falha enquanto estiver afetado causa 1d8 de dano venenoso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MILAGRE TOXICOLÓGICO",
        "level": 6,
        "page": 392,
        "text": "Quando você ou uma criatura a até 9 metros sofreria dano venenoso, pode usar reação para alterar o efeito. O alvo não sofre esse dano e recupera PV iguais ao dano que sofreria. Se o dano veio de efeito contínuo com duração menor que 1 hora, o efeito termina; se durar 1 hora ou mais, fica suprimido por 1 hora. Usos por Descanso Longo iguais à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EPÍTETO VENENOSO",
        "level": 11,
        "page": 392,
        "text": "Seus ataques com arma causam +1d8 de dano venenoso; você tem resistência a dano venenoso; é imune à condição envenenado; e é imune aos efeitos de qualquer substância que respire.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MORTE RASTEJANTE",
        "level": 15,
        "page": 392,
        "text": "Ao acertar com uma arma corpo a corpo de uma mão uma criatura envenenada, pode gastar um uso de Flora Virtuosa para forçá-la a fazer salvaguarda de Constituição. Em falha, o veneno se espalha e a reduz a 0 PV. Em sucesso, ela sofre 6d10 de dano venenoso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-dahlia",
    "classId": "petal-knight-retia",
    "name": "Dália",
    "originalName": "Dahlia",
    "aliases": [
      "Dahlia"
    ],
    "desc": "A Dália representa espíritos intensos e diretos que encaram o perigo de frente. Seu portador envolve o corpo em brasas e transforma impulso, calor e mudança em ofensiva explosiva.",
    "sourcePage": 390,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "390",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CHAMAS DA PAIXÃO",
        "level": 2,
        "page": 390,
        "text": "Como ação bônus, entre em Chamas da Paixão por 1 minuto. Enquanto estiver assim: o primeiro ataque com arma em cada turno causa +1d6 de dano ígneo; você tem resistência a fogo; pode usar Disparada como ação bônus; e obtém crítico com 19 ou 20 no d20. Você deve manter concentração como se fosse magia, mas pode concentrar-se simultaneamente em outro efeito; qualquer teste de concentração é uma única jogada aplicada a ambos. No 11º nível, o dano torna-se 1d10 e você fica imune a fogo enquanto o efeito durar. Usos por Descanso Curto ou Longo: metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REPRESÁLIA INFERNAL",
        "level": 6,
        "page": 390,
        "text": "Quando uma criatura entrar ou sair de seu alcance de ataque, você pode usar reação para obrigá-la a fazer salvaguarda de Destreza contra sua CD de magia. Em uma falha, sofre dano ígneo igual à metade de seu nível total, arredondado para baixo, e pega fogo. Enquanto estiver em chamas, sofre novamente esse dano no início de cada turno e não pode se beneficiar de vantagem em ataques. Pode apagar as chamas como ação. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 11,
        "page": 390,
        "text": "Quando realiza a ação Atacar, pode fazer três ataques em vez de um. Nenhum desses ataques pode ser feito com arma pesada ou de duas mãos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DUQUE DAS CHAMAS",
        "level": 15,
        "page": 390,
        "text": "Durante Chamas da Paixão, todos os seus ataques recebem o dano ígneo adicional, não apenas o primeiro. Enquanto o efeito durar, uma criatura que acertá-lo com ataque corpo a corpo a até 1,5 metro sofre 1d8 de dano ígneo. Quando Chamas da Paixão terminar, você pode explodir em fogo: todas as criaturas, exceto você, em uma esfera de 4,5 metros fazem salvaguarda de Destreza contra sua CD de magia, sofrendo 6d8 de dano ígneo em falha ou metade em sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-gardenia",
    "classId": "petal-knight-retia",
    "name": "Gardênia",
    "originalName": "Gardenia",
    "aliases": [
      "Gardenia"
    ],
    "desc": "A Gardênia representa pureza, orgulho e estabilidade. Seu portador usa magia de natureza quase celestial, resiste a ser movido, persegue aberrações e monstruosidades e retorna de ferimentos que derrubariam outros.",
    "sourcePage": 393,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "393",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PUREZA DA NATUREZA",
        "level": 2,
        "page": 393,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher uma magia da lista de Clérigo e tratá-la como magia de Cavaleiro das Pétalas, desde que seja de nível que seus espaços possam conjurar. Ao receber esta característica, pode trocar a magia desse nível e uma outra magia conhecida por magias de Clérigo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FLAGELO DO DESCONHECIDO",
        "level": 6,
        "page": 393,
        "text": "Você não pode ser derrubado por efeitos originados de criaturas do mesmo tamanho que você e tem vantagem em jogadas para resistir ou escapar de agarrões, empurrões e efeitos que o deixariam restringido. Pode tentar escapar de um agarrão como ação bônus.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "POSTURA REAL",
        "level": 6,
        "page": 393,
        "text": "Ao acertar uma monstruosidade ou aberração com ataque com arma, causa +1d6 de dano radiante; no 14º nível de Cavaleiro das Pétalas, +2d6. Ao acertar uma dessas criaturas, pode também gastar um espaço de Magia de Pacto para obrigá-la e todas as criaturas do mesmo tipo a até 9 metros dela a fazer salvaguarda de Sabedoria. Em falha, ficam expulsas por 1 minuto ou até sofrerem dano: devem tentar se afastar de você, não podem voluntariamente entrar a 9 metros, não podem usar reações e só podem usar Disparada ou tentar escapar de efeitos que as impeçam de se mover; sem lugar para ir, podem usar Esquivar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAMOS DA GARDÊNIA",
        "level": 11,
        "page": 393,
        "text": "Você recebe três Ramos Virtuosos. AMORTECEDOR: até o início de seu próximo turno, sempre que sofrer dano reduza-o em metade de seu nível de Cavaleiro das Pétalas. EXPEDIÊNCIA: criaturas escolhidas afetadas pela magia podem usar reação para mover até metade do deslocamento sem provocar ataques de oportunidade. REJUVENESCIMENTO: se a magia restaurou PV de uma criatura, cure também uma das condições envenenado, amedrontado, atordoado ou enfeitiçado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CORAÇÃO ORGULHOSO",
        "level": 15,
        "page": 393,
        "text": "Quando dano reduzir você a 0 PV, faça uma salvaguarda de Carisma com CD igual ao dano que excedeu seus PV restantes. Em sucesso, em vez disso fica com 1d6 PV. Cada sucesso aumenta cumulativamente a CD em 2 para a próxima vez; a CD reinicia após um Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-morning-glory",
    "classId": "petal-knight-retia",
    "name": "Glória-da-Manhã",
    "originalName": "Morning Glory",
    "aliases": [
      "Morning Glory"
    ],
    "desc": "A Glória-da-Manhã pertence a almas inquietas que vivem de experiência em experiência. Seus poderes unem corações, criam vínculos de dedicação e manipulam distância entre pessoas.",
    "sourcePage": 395,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "395",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SOPRO DE UNIDADE",
        "level": 2,
        "page": 395,
        "text": "Uma vez por Descanso Longo, você e até cinco criaturas podem descansar por 1 minuto para receber os benefícios de um Descanso Curto adicional. Esse descanso não conta contra o número de Descansos Curtos permitidos por Descanso Longo. Uma criatura só pode receber o benefício de Sopro de Unidade uma vez por Descanso Longo, independentemente da fonte.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COLAR DA ATENÇÃO",
        "level": 6,
        "page": 395,
        "text": "Como ação, escolha até seu modificador de Carisma em criaturas visíveis a até 18 metros. Para cada alvo, decida se o efeito é uma Dádiva ou Comando. Usos por Descanso Curto ou Longo: metade de seu bônus de proficiência, arredondado para baixo. DÁDIVA: o alvo pode usar reação para mover até seu deslocamento sem provocar ataques de oportunidade; se atraído, deve terminar mais perto de você; se repelido, mais longe. COMANDO: o alvo faz salvaguarda de Carisma; em falha, deve usar seu deslocamento para se aproximar o máximo possível se atraído ou se afastar o máximo possível se repelido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VÍNCULO DE DEDICAÇÃO",
        "level": 11,
        "page": 395,
        "text": "Você e outra criatura podem participar de uma cerimônia de 1 hora que cria um vínculo, representado por anéis azuis e roxos; cada criatura só pode manter um vínculo deste tipo. Enquanto estiverem no mesmo plano, conhecem o estado uma da outra, incluindo condições, PV e ferimentos, mas apenas dentro do contexto que ao menos uma conheça; podem falar telepaticamente a qualquer distância e compreendem os idiomas falados pela outra. Quando uma usa item, poção, magia ou característica para curar a outra, a cura usa o resultado máximo. Se uma cair a 0 PV, a outra, se estiver a até 9 metros e com ao menos metade de seus PV, pode usar reação para perder metade de seus PV atuais, arredondado para cima, curando a parceira no mesmo valor. Quando uma fizer ataque ou salvaguarda, a outra pode usar reação antes do resultado ser revelado para adicionar seu próprio bônus de proficiência. Uma delas pode romper o vínculo enquanto consciente; romper unilateralmente causa 1 nível de exaustão e 3d8 de dano psíquico, enquanto ruptura consensual não. Depois de rompido, ambas esperam 1 semana para formar outro. A morte de uma não rompe automaticamente o vínculo, mas permite rompê-lo sem penalidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DESPEDIDA AMARGA",
        "level": 15,
        "page": 395,
        "text": "Quando uma criatura errar um ataque contra você, pode mover imediatamente até seu deslocamento. Esse movimento não provoca ataque de oportunidade da criatura que acionou a característica nem outros efeitos baseados em sair do alcance dela, como Sentinela. Você pode usar esta característica uma vez por rodada e recupera o uso no início do seu turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-hydrangea",
    "classId": "petal-knight-retia",
    "name": "Hortênsia",
    "originalName": "Hydrangea",
    "aliases": [
      "Hydrangea"
    ],
    "desc": "A Hortênsia nasce de almas frias, reprimidas ou carregadas por dívidas e tristeza. Seu epíteto concede magia de gelo, reflexão de dano e controle rigoroso do movimento inimigo.",
    "sourcePage": 394,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "394",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CONHECIMENTO CONVOCANTE",
        "level": 2,
        "page": 394,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher uma magia da lista de Bruxo e tratá-la como magia de Cavaleiro das Pétalas, desde que seja de nível que seus espaços possam conjurar. Ao receber esta característica, pode trocar a magia desse nível e uma outra magia conhecida por magias de Bruxo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REFLEXO FRENÉTICO",
        "level": 2,
        "page": 394,
        "text": "Quando uma criatura que você possa ver a até 9 metros sofre dano de um ataque ou por falhar em uma salvaguarda, pode usar reação para refletir metade do dano contra outra criatura a até 9 metros. As duas criaturas sofrem apenas metade do dano original. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CARMA GRACIOSO",
        "level": 6,
        "page": 394,
        "text": "Quando outra criatura usa ação ou reação para restaurar seus PV, ou você recebe cura originada de outra criatura, pode usar reação para conceder a ela PV temporários iguais à metade do que você recuperou, arredondado para baixo. Se ela restaurou mais de 10 PV e você usou esta característica, a próxima jogada de ataque, salvaguarda ou teste de atributo dela tem vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EPÍTETO CONGELADO",
        "level": 11,
        "page": 394,
        "text": "Seus ataques com arma causam +1d8 de dano gélido; você tem resistência a dano gélido; ignora efeitos negativos de frio perigoso; e seu deslocamento não é reduzido por terreno difícil causado por neve, gelo ou temperaturas congelantes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "JARDIM DE GELO",
        "level": 15,
        "page": 394,
        "text": "Uma vez por turno, no lugar de um ataque com arma, você pode atingir o chão ou a água ao redor de uma criatura dentro do alcance da arma, desde que o alvo esteja no chão ou submerso. Ela faz salvaguarda de Destreza contra sua CD de magia. Em falha, fica restringida por hortênsias de gelo e só pode escapar usando ação para fazer teste de Força contra sua CD. No início de cada turno em que continuar restringida, sofre 1d10 + metade de seu nível de Cavaleiro das Pétalas, arredondado para baixo, de dano gélido. Se ela morrer por esse dano ou por você enquanto estiver presa, pode usar reação para fazê-la florescer: névoa congelante explode numa esfera de 9 metros, aplicando este efeito a todas as criaturas exceto você. A área fica coberta por névoa espessa por 1 hora, como Nuvem de Névoa, mas você enxerga normalmente através dela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-red-spider-lily",
    "classId": "petal-knight-retia",
    "name": "Lírio-Aranha-Vermelho",
    "originalName": "Red Spider Lily",
    "aliases": [
      "Red Spider Lily"
    ],
    "desc": "O Lírio-Aranha-Vermelho surge em quem foi tocado por maldições, sangue demoníaco ou assombrações. Seu cavaleiro transforma essa distância do mundo em poder para atrair, repelir, controlar espaço e canalizar Daemoturgia.",
    "sourcePage": 398,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "398",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GRAU DE SEPARAÇÃO",
        "level": 2,
        "page": 398,
        "text": "Como ação bônus, afete até seis criaturas a até 18 metros, escolhendo para cada uma atração ou repulsão e se o efeito é uma Dádiva ou Comando. Usos por Descanso Curto ou Longo iguais à metade de seu bônus de proficiência, arredondado para baixo. DÁDIVA: o alvo pode usar reação para mover até seu deslocamento sem provocar ataques de oportunidade; atraído deve terminar mais perto de você e repelido, mais longe. COMANDO: o alvo faz salvaguarda de Carisma contra sua CD de magia; em falha, usa seu deslocamento para se aproximar o máximo possível se atraído ou se afastar o máximo possível se repelido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONHECIMENTO SUSSURRADO",
        "level": 2,
        "page": 398,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher qualquer magia do grupo de Daemoturgia e tratá-la como magia da classe, desde que seus espaços de pacto possam conjurá-la. Ao receber esta característica, pode trocar a magia que aprenderia nesse nível e uma outra magia conhecida por uma magia de Daemoturgia cada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAMPO DE DESTINOS CRUZADOS",
        "level": 6,
        "page": 398,
        "text": "Quando normalmente escolheria um Ramo Virtuoso por conjurar uma magia de Daemoturgia, pode em vez disso criar uma esfera de 9 metros centrada no espaço em que está. Um campo de lírios-aranha aparece por 1 minuto, até você criar outro ou dispensá-lo como ação bônus. Para criaturas que não sejam você, a área é terreno difícil ao se moverem em sua direção, mas não ao se afastarem. Uma criatura que entrar pela primeira vez ou iniciar o turno na área sofre dano psíquico igual ao nível da magia conjurada + metade de seu nível de Cavaleiro das Pétalas, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VIRTUDE DA PERSPECTIVA",
        "level": 11,
        "page": 398,
        "text": "Você recebe três opções de Flora Virtuosa. OLHAR ATENTO: até o início do próximo turno, enxerga através de todas as ilusões e recebe visão diabólica de 18 metros, ignorando efeitos como Imagem Espelhada e Nublar; no início do próximo turno, pode usar ação bônus para prolongar por mais uma rodada, sem gastar Flora Virtuosa, até o máximo de 1 minuto. PREPARO: recebe 1d10 + metade de seu nível de Cavaleiro das Pétalas em PV temporários; enquanto os possuir, tem vantagem em iniciativa e salvaguardas de Destreza. TOQUE REIVINDICADOR: toque uma criatura e encerre imediatamente todas as magias, venenos e efeitos mágicos nela com duração inferior a 1 hora ou que permitam salvaguarda ao fim de cada turno, como se a duração tivesse expirado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DAEMONOLOGIA FLORESCENTE",
        "level": 15,
        "page": 398,
        "text": "Escolha uma magia de Daemoturgia de 6º nível e uma de 7º. Elas contam como magias de Cavaleiro das Pétalas e cada uma pode ser conjurada uma vez por Descanso Longo sem espaço de magia. Ao conjurá-las, pode usar Ramos Virtuosos como se tivesse gasto um espaço de pacto do nível da magia. No 18º nível, escolha também uma magia de Daemoturgia de 8º nível, que funciona da mesma forma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-osmanthus",
    "classId": "petal-knight-retia",
    "name": "Osmanthus",
    "originalName": "Osmanthus",
    "aliases": [
      "Osmanthus"
    ],
    "desc": "O Osmanthus representa verdade, nobreza e disposição para suportar o perigo em nome dos demais. Seu portador vê através de enganos, confronta inimigos de frente e torna-se uma fortaleza viva.",
    "sourcePage": 396,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "396",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "JURAMENTO DE NOBREZA",
        "level": 2,
        "page": 396,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher uma magia da lista de Paladino e tratá-la como magia de Cavaleiro das Pétalas, desde que seja de nível que seus espaços possam conjurar. Ao receber esta característica, pode trocar a magia desse nível e uma outra magia conhecida por magias de Paladino.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIA VERAZ",
        "level": 2,
        "page": 396,
        "text": "Você recebe proficiência em Intuição; se já a tinha, adiciona seu bônus de proficiência uma segunda vez aos testes de Intuição, salvo se outra característica já fizer isso. Também recebe proficiência com todas as armas marciais e escudos. Características de Cavaleiro das Pétalas que exigem arma de uma mão podem ser usadas com qualquer arma sem a propriedade pesada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FACE A FACE",
        "level": 6,
        "page": 396,
        "text": "Ataques à distância com arma contra você têm desvantagem enquanto você não estiver incapacitado. Além disso, enquanto estiver sob os efeitos da ação Esquivar, quando uma criatura errar um ataque com arma contra você, pode fazer um ataque corpo a corpo com arma contra ela. Máximo de um desses ataques por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VISÃO VERDADEIRA",
        "level": 11,
        "page": 396,
        "text": "Como ação bônus, você recebe visão verdadeira até 36 metros por 1 minuto. Usos por Descanso Longo iguais à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORTALEZA DE UM",
        "level": 15,
        "page": 396,
        "text": "Uma vez por Descanso Curto ou Longo, como ação, reforce-se por 1 minuto: recebe resistência a dano contundente, cortante e perfurante; no início de cada turno, ganha PV temporários iguais ao seu nível de Cavaleiro das Pétalas; e sempre que usa a ação Atacar, pode fazer um ataque com arma adicional.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-fox-e-cub",
    "classId": "petal-knight-retia",
    "name": "Raposa e Filhote",
    "originalName": "Fox & Cub",
    "aliases": [
      "Fox & Cub"
    ],
    "desc": "O epíteto Raposa e Filhote conecta o cavaleiro ao sol, à luz e à nutrição. Seu portador é radiante e protetor, usando magia natural e luz dourada para revelar, prender e regenerar.",
    "sourcePage": 391,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "391",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SOL DOURADO",
        "level": 2,
        "page": 391,
        "text": "Dentro de qualquer fonte de escuridão mágica, uma flor de Raposa e Filhote feita de luz laranja surge em sua gola, a menos que você a suprima conscientemente. Ela emite luz como o truque Luz e sua luz plena atravessa qualquer escuridão mágica sobreposta. Você também aprende Luz e pode conjurá-lo como ação bônus ou como reação a estar em escuridão ou penumbra, criando a mesma flor.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "JURAMENTO HARMONIOSO",
        "level": 2,
        "page": 391,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher uma magia da lista de Druida e tratá-la como magia de Cavaleiro das Pétalas, desde que seja de nível que seus espaços de pacto possam conjurar. Ao receber esta característica, pode trocar a magia que aprenderia nesse nível e uma outra magia conhecida por magias de Druida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LUZ DO FOGO DA RAPOSA",
        "level": 6,
        "page": 391,
        "text": "Uma vez por Descanso Longo, ou gastando um espaço de Magia de Pacto para repetir, como ação você se envolve em luz dourada por 1 minuto. Enquanto durar, enxerga criaturas invisíveis a até 9 metros como se estivessem visíveis. Além disso, sempre que causar dano a uma criatura, ela faz salvaguarda de Destreza; em falha, raposas espectrais a perseguem, reduzindo seu deslocamento em 3 metros, revelando sua posição se invisível e concedendo vantagem a todos os ataques contra ela enquanto o efeito durar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DÁDIVA DO SOL",
        "level": 11,
        "page": 391,
        "text": "Você recebe três opções de Flora Virtuosa. DESTRUIÇÃO DOURADA substitui sua opção de destruição: funciona igual, mas o ataque causa dano radiante e, se o alvo estiver invisível, sob cobertura ou obscurecido por escuridão, você não sofre desvantagem e tem vantagem no ataque. APRIMORAMENTO RADIANTE: escolha uma fonte de luz a até 18 metros que produza luz plena e penumbra; a penumbra torna-se luz plena com as mesmas propriedades até a fonte apagar, passarem 8 horas ou você encerrá-la. EXPLOSÃO SOLAR: criaturas a até 6 metros escolhem desviar o olhar ou não; quem desvia é tratado como cego em relação a você até o início do próximo turno; quem não desvia faz salvaguarda de Constituição, ficando cego por 1 minuto em falha e repetindo ao final dos turnos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BRILHO REGENERATIVO",
        "level": 15,
        "page": 391,
        "text": "No início de cada turno, se estiver com metade ou menos dos PV máximos, recupera 5 + seu modificador de Constituição PV. Sob luz solar direta, recebe o benefício independentemente de seus PV atuais. Não funciona enquanto estiver com 0 PV ou envenenado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-pink-rose",
    "classId": "petal-knight-retia",
    "name": "Rosa Cor-de-Rosa",
    "originalName": "Pink Rose",
    "aliases": [
      "Pink Rose"
    ],
    "desc": "A Rosa Cor-de-Rosa esconde precisão e perigo sob aparência graciosa. Seu cavaleiro cura aliados, atinge pontos de pressão e manifesta correntes etéreas que estendem dramaticamente o alcance de suas armas.",
    "sourcePage": 397,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "397",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TRATAMENTO GENTIL",
        "level": 2,
        "page": 397,
        "text": "Você possui uma reserva de d10s em quantidade igual ao seu bônus de proficiência + 4. Como ação bônus, escolha uma criatura que veja a até 9 metros e gaste dados da reserva, até no máximo seu bônus de proficiência por uso; ela recupera PV iguais ao total rolado. Você recupera todos os dados gastos após um Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO APRIMORADO (CORPO A CORPO)",
        "level": 2,
        "page": 397,
        "text": "Seus ataques corpo a corpo com arma obtêm crítico em resultado 19 ou 20 no d20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INVESTIDA ATORDOANTE",
        "level": 6,
        "page": 397,
        "text": "Ao acertar uma criatura com uma arma de uma mão, pode gastar um dado de Tratamento Gentil e forçá-la a fazer salvaguarda de Constituição contra sua CD de magia. Em falha, fica atordoada até o fim do seu próximo turno. Ao obter acerto crítico, pode usar esta característica sem gastar dado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ALCANCE GRACIOSO",
        "level": 11,
        "page": 397,
        "text": "Você manifesta correntes etéreas cor-de-rosa que substituem os cabos das armas corpo a corpo de uma mão que estiver segurando. Elas impedem que você seja desarmado e aumentam o alcance dessas armas para 6 metros; os ataques continuam sendo corpo a corpo. Para ataques de oportunidade, seu alcance continua sendo o alcance normal da arma. Você também pode tentar agarrar a 6 metros; em sucesso, o alvo é puxado para um espaço adjacente a você, ou o espaço desocupado mais próximo, e você assume o agarrão normalmente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXTENSÃO ELEGANTE",
        "level": 15,
        "page": 397,
        "text": "Você recebe dois efeitos. ALCANCE EXPLOSIVO: ao atacar com arma beneficiada por Alcance Gracioso, pode aumentar seu alcance para 18 metros até o fim do turno; o primeiro ataque com ela nesse turno tem vantagem. Usos por Descanso Curto ou Longo iguais à metade de seu bônus de proficiência, arredondado para baixo. ASSALTO IMORTAL: como ação, faça um ataque com arma contra cada criatura escolhida a até 6 metros usando uma arma sob Alcance Gracioso; trate-os como ataques independentes, mas use a mesma jogada de ataque e de dano. Efeitos limitados a determinados alvos devem ter esses alvos declarados; danos adicionais individuais são rolados separadamente. Usos por Descanso Longo iguais à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO SUPERIOR (CORPO A CORPO)",
        "level": 15,
        "page": 397,
        "text": "Seus ataques corpo a corpo com arma obtêm crítico em resultado 18, 19 ou 20 no d20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-coral-rose",
    "classId": "petal-knight-retia",
    "name": "Rosa Coral",
    "originalName": "Coral Rose",
    "aliases": [
      "Coral Rose"
    ],
    "desc": "A Rosa Coral marca indivíduos persistentes, adaptáveis e astutos. Seus cavaleiros usam ilusões, mobilidade e apropriação de efeitos mágicos para superar obstáculos e perseguir seus objetivos.",
    "sourcePage": 389,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "389",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "BUQUÊ ENGANOSO",
        "level": 2,
        "page": 389,
        "text": "Como ação bônus, crie um clone visual e fique invisível. O clone surge em seu espaço e pode ser a origem aparente de sua fala e gestos. Ao fim de cada um de seus turnos e sempre que usar a ação Atacar ou conjurar uma magia, faça uma salvaguarda de Carisma com CD 8 + o número de rodadas em que permaneceu invisível por este efeito; em uma falha, você fica visível. Ao atacar ou ser atacado, você aparece por um instante no local do impacto e outro clone surge ali enquanto você se move invisivelmente. Os clones também podem simular movimento, fala ou gestos. Ao perder a invisibilidade, eles se desfazem. Você pode usar esta característica por Descanso Curto ou Longo um número de vezes igual à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SOPRO DE TRANQUILIDADE",
        "level": 6,
        "page": 389,
        "text": "No início de seu turno, se estiver enfeitiçado, amedrontado, envenenado, atordoado ou paralisado, pode encerrar imediatamente um desses efeitos. Se fizer isso, não pode usar ação nesse turno, mas ainda pode usar ação bônus e movimento.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAMOS DA ROSA CORAL",
        "level": 11,
        "page": 389,
        "text": "Você recebe três Ramos Virtuosos. AVANÇO: recebe um dado de Avanço por 1 minuto; quando falhar em uma jogada de ataque ou salvaguarda, pode gastá-lo para rolar 1d10 e somar ao resultado. ENTUSIASMO: escolha uma criatura que a magia tenha escolhido como alvo ou que tenha feito salvaguarda contra ela; dentro de 1 minuto, na próxima vez em que você errar um ataque contra ela, acerta em vez disso. LIBERTAÇÃO: escolha uma criatura incluída na magia que esteja sob um efeito mágico conhecido por você; ela faz salvaguarda de Carisma contra sua CD de magia. Em uma falha, você copia integralmente os benefícios do efeito, incluindo CDs, ataques mágicos, alvos e controle compartilhado quando aplicável. O efeito termina em você quando terminar no alvo original, inclusive por dispensa ou dissipação. Você só pode manter um efeito copiado por vez.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RITMO IRREFREÁVEL",
        "level": 15,
        "page": 389,
        "text": "Seu deslocamento básico aumenta em 3 metros e criaturas têm desvantagem em ataques de oportunidade contra você. Além disso, como ação bônus, pode receber deslocamento de teleporte igual ao seu deslocamento básico até o fim do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-black-rose",
    "classId": "petal-knight-retia",
    "name": "Rosa Negra",
    "originalName": "Black Rose",
    "aliases": [
      "Black Rose"
    ],
    "desc": "A Rosa Negra se manifesta em quem busca poder e rejeita a ideia de uma natureza inteiramente pura. Seus cavaleiros rompem tradições, empunham armas pesadas e caçam adversários marcados como presas, sem abandonar um código de honra.",
    "sourcePage": 387,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "387",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ARMAS DIVERGENTES",
        "level": 2,
        "page": 387,
        "text": "Você recebe proficiência com armaduras pesadas e com todas as armas simples e marciais. Características de Cavaleiro das Pétalas que normalmente exigem uma arma de uma mão podem ser usadas com qualquer arma com a qual você seja proficiente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO APRIMORADO (CORPO A CORPO)",
        "level": 6,
        "page": 387,
        "text": "Você obtém um acerto crítico com ataques corpo a corpo com arma ou ataques corpo a corpo com magia quando o d20 mostra 19 ou 20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRESA NOBRE",
        "level": 6,
        "page": 387,
        "text": "Uma vez por turno, como ação bônus, você pode declarar uma criatura visível como sua Presa Nobre por 1 hora ou até ela morrer. Contra ela: você não pode ter desvantagem em salvaguardas; ela precisa de cobertura total para se Esconder de você; você recebe uma reação adicional por turno contra cada Presa Nobre, usada antes de sua reação normal; quando a Presa Nobre fizer um ataque contra você, pode usar uma reação para impor desvantagem; e o primeiro ataque que você fizer contra cada Presa Nobre a cada turno tem vantagem. Você pode declarar Presa Nobre um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAMOS DA ROSA NEGRA",
        "level": 11,
        "page": 387,
        "text": "Você recebe três opções de Ramos Virtuosos. BALUARTE ONDULANTE: até o início do seu próximo turno, ataques à distância contra você têm desvantagem. MARCA NOBRE: uma criatura atingida por você, ou que falhe em uma salvaguarda contra sua magia, pode ser declarada Presa Nobre sem gastar uso da característica. REPULSÃO: criaturas que falharem em uma salvaguarda contra a magia ou forem atingidas por um ataque feito como parte dela podem ser empurradas 9 metros para longe do ponto de origem; se colidirem com objeto sólido e forem impedidas de percorrer pelo menos 3 metros dessa distância, ficam caídas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAÍZES MANCHADAS",
        "level": 15,
        "page": 387,
        "text": "Quando obtiver um acerto crítico com um ataque corpo a corpo contra uma criatura que não seja elemental, morto-vivo nem constructo, você recupera PV iguais ao dano causado. Se estiver com todos os PV, recebe em vez disso PV temporários iguais à metade do dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-sakura",
    "classId": "petal-knight-retia",
    "name": "Sakura",
    "originalName": "Sakura",
    "aliases": [
      "Sakura"
    ],
    "desc": "O Sakura representa elegância, decisão e instinto. Seus cavaleiros assimilam magia de Feiticeiro, acumulam Dados de Valor e convertem o sangue derramado em vigor.",
    "sourcePage": 399,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "399",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FAÍSCA DE FEITIÇARIA",
        "level": 2,
        "page": 399,
        "text": "Ao aprender uma nova magia de Cavaleiro das Pétalas, pode escolher uma magia da lista de Feiticeiro e tratá-la como magia da classe, desde que seja de nível que seus espaços possam conjurar. Ao receber esta característica, pode trocar a magia que aprenderia nesse nível e uma outra magia conhecida por magias de Feiticeiro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VALOR",
        "level": 2,
        "page": 399,
        "text": "Você possui Dados de Valor d6 em quantidade igual à metade de seu nível de Cavaleiro das Pétalas, arredondado para baixo, + 2. Recupera-os após Descanso Longo; tornam-se d8 no 6º nível e d10 no 12º. Pode gastá-los assim: ARMADURA: ao ser atingido por ataque visível, use reação, role um dado e some à CA até o início do próximo turno. CONTRA-ATAQUE: ao ser atacado, use reação, gaste e role um dado para subtrair da jogada de ataque; se isso fizer o ataque errar e o atacante estiver ao alcance, faça um ataque com arma contra ele. ATAQUE PODEROSO: ao fazer ataque com arma, gaste e role um dado para somá-lo à jogada de ataque e, se acertar, também ao dano. SAQUE RÁPIDO: quando surpreendido, gaste um dado para agir normalmente e sacar imediatamente arma principal e secundária. FEITIÇARIA DIRECIONADA: ao conjurar magia da classe que exija salvaguarda, gaste e role um dado para subtraí-lo da primeira salvaguarda do alvo contra a magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INSTINTOS DOURADOS",
        "level": 6,
        "page": 399,
        "text": "Enquanto não usar armadura nem escudo, sua CA pode ser calculada como 10 + Destreza + Sabedoria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA VAMPÍRICA",
        "level": 6,
        "page": 399,
        "text": "Na primeira vez em seu turno que acertar uma criatura com uma arma de uma mão, recebe PV temporários iguais à metade do dano causado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 11,
        "page": 399,
        "text": "Quando usa a ação Atacar, pode atacar três vezes em vez de uma, desde que todos os ataques sejam feitos com armas de uma mão.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAÍZES DE SANGUE",
        "level": 15,
        "page": 399,
        "text": "Quando Lâmina Vampírica seria acionada, você recupera PV em vez de receber PV temporários. Além disso, qualquer ataque que se beneficie de um de seus efeitos de Valor também pode acionar Lâmina Vampírica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-petal-knight-retia-winecup",
    "classId": "petal-knight-retia",
    "name": "Taça-de-Vinho",
    "originalName": "Winecup",
    "aliases": [
      "Winecup"
    ],
    "desc": "O epíteto Taça-de-Vinho marca indivíduos de coração essencialmente puro, mas inclinados a subterfúgio. Seu cavaleiro usa venenos, mobilidade tática e invisibilidade para agir nos bastidores.",
    "sourcePage": 400,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "400",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MANTO ABERTO",
        "level": 2,
        "page": 400,
        "text": "Como ação bônus, encante por 1 minuto uma arma que esteja segurando; flores da Taça-de-Vinho brotam nela. A primeira vez a cada turno que ela acerta uma criatura causa +1d6 de dano venenoso; aumenta para 1d8 no 8º nível, 1d10 no 12º, e no 17º esse dano adicional se aplica a todo acerto. Uma vez por turno, ao acertar, pode obrigar o alvo a fazer salvaguarda de Constituição; em falha, fica envenenado até o início do seu próximo turno. Você pode encerrar o encantamento antes do tempo para criar gás tóxico: escolha a até 9 metros um número de criaturas igual ao número de turnos que faltavam para expirar; cada uma faz salvaguarda de Constituição e, em falha, sofre 1d10 + metade de seu nível de Cavaleiro das Pétalas, arredondado para baixo, de dano venenoso. Usos por Descanso Longo iguais à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA A VENENO",
        "level": 6,
        "page": 400,
        "text": "Você não pode ficar envenenado e tem resistência a dano venenoso. Se outra característica ou efeito também lhe conceder resistência a veneno, você se torna imune em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAMOS DA TAÇA-DE-VINHO",
        "level": 6,
        "page": 400,
        "text": "Você recebe três Ramos Virtuosos. APRIMORAMENTO DE ANTICORPOS: por 1 minuto, criaturas beneficiadas por sua magia têm vantagem em salvaguardas contra envenenado, cego e surdo. VOO ABERTO: na próxima vez em até 1 minuto que um ataque com arma acertá-lo, pode usar reação para sofrer metade do dano e mover até seu deslocamento sem provocar ataques de oportunidade. VANTAGEM TÁTICA: escolha uma criatura alvo da magia; por 1 minuto, sempre que usar a ação Atacar com ataques com arma contra ela, pode fazer um ataque com arma adicional contra o mesmo alvo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PÉTALA FECHADA",
        "level": 11,
        "page": 400,
        "text": "Como ação bônus, gaste um uso de Flora Virtuosa para ficar invisível por 1 minuto, desfazendo-se visualmente em pétalas. A invisibilidade termina se conjurar magia, fizer ataque com arma ou realizar ação que obrigue outra criatura a fazer salvaguarda.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SEMPRE ATENTO",
        "level": 15,
        "page": 400,
        "text": "Enquanto não estiver incapacitado, criaturas que o escolham como alvo não podem se beneficiar de características ou efeitos que exijam vantagem em ataques contra você ou que exijam que você esteja cercado por outras criaturas. Além disso, se estiver adjacente a mais de uma criatura hostil, tem vantagem no primeiro ataque que fizer contra cada criatura diferente que escolher como alvo a cada turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-radiant-archer",
    "classId": "ranger",
    "name": "Arqueiro Radiante",
    "originalName": "Radiant Archer",
    "aliases": [
      "Radiant Archer"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Arqueiros Radiantes entalham bênçãos e energia sagrada em sua munição. A fé guia seus riscos, fortalece suas armas e abre acesso à magia divina, tornando-os frequentes guarda-costas de clérigos e agentes das igrejas.",
    "sourcePage": 410,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "410",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MÃO GUIADA",
        "level": 3,
        "page": 410,
        "text": "Quando realiza um ataque com arma na qual é proficiente, pode conceder vantagem ao ataque mesmo que ele tivesse desvantagem e, em acerto, adicionar dano radiante igual ao seu Dado de Favor. Usos por Descanso Curto ou Longo iguais ao Bônus de Favor.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESERVATÓRIO RADIANTE",
        "level": 3,
        "page": 410,
        "text": "Você pode fazer com que o dano do seu Dado de Favor seja radiante. Todos os ínferos e mortos-vivos são considerados seus Inimigos Favorecidos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESERVA DE MAGIA CELESTIAL",
        "level": 7,
        "page": 410,
        "text": "Quando ganha ou troca uma magia pela característica Conjuração do Patrulheiro, também pode escolher da lista de Clérigo e tratá-la como magia de Patrulheiro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MIRAS PROVIDENCIAIS",
        "level": 11,
        "page": 410,
        "text": "Quando usa Mão Guiada para aprimorar um ataque, trate o alvo como Inimigo Favorecido até o fim do seu próximo turno, e os benefícios de Mão Guiada se aplicam a todos os ataques que fizer contra ele até o fim do turno atual.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VÉU ASCENDENTE",
        "level": 11,
        "page": 410,
        "text": "Ao usar Véu da Natureza, você também manifesta sigilos angelicais em forma de asas, invisíveis como você, que concedem deslocamento de voo igual ao seu deslocamento base até o início do próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARQUEIRO GUARDIÃO",
        "level": 15,
        "page": 410,
        "text": "Se uma criatura que você considera Inimigo Favorecido mover-se mais de 1,5 m dentro do seu campo de visão, use reação para fazer um ataque de oportunidade contra ela usando uma arma à distância em cujo alcance normal ela esteja ou uma magia de tempo de conjuração 1 ação, se estiver no alcance. Uma magia usada assim deve poder afetar somente essa criatura.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-beast-rider",
    "classId": "ranger",
    "name": "Cavaleiro de Fera",
    "originalName": "Beast Rider",
    "aliases": [
      "Beast Rider"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Cavaleiros de Fera caçam ao lado de um companheiro bestial ligado a eles por magia. O vínculo permite reconjurar a criatura se ela cair e transmitir comandos com gestos mínimos, fazendo da montaria um aliado intuitivo em combate.",
    "sourcePage": 405,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "405–406",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "COMPANHEIRO DO CAVALEIRO DE FERA",
        "level": 3,
        "page": 405,
        "text": "Você ganha um companheiro bestial que serve como montaria e aliado. Escolha sua aparência, mas ele deve ser uma criatura que você possa montar e usa o bloco Companheiro do Cavaleiro de Fera. Ele usa seu bônus de proficiência (BP), Bônus de Favor (BF) e Dado de Favor (DF). É amistoso, entende você e compartilha sua iniciativa, agindo logo depois de você. Pode mover-se e usar reação livremente; sem comando, sua única ação é Esquivar. Como ação bônus, você o comanda a realizar outra ação; essa ação e o movimento decorrente podem ocorrer imediatamente, e seu turno posterior é tratado como já tendo usado essa ação. Se você estiver incapacitado, ele age livremente. Ao cair a 0 PV sem morrer instantaneamente, estabiliza automaticamente e recupera 1 PV após 10 minutos se você estiver a até 18 m; se estiver longe, desaparece. Se morrer, desaparecer ou se separar, você pode reconjurá-lo em espaço adjacente após 1 minuto, ou como ação gastando um espaço de 1º nível ou superior. Ao conjurá-lo, escolha tamanho Médio ou Grande; se tiver pelo menos seu tamanho, pode ser montado normalmente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 3,
        "page": 405,
        "text": "Você ganha proficiência em Montaria e Adestrar Animais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DA FERA",
        "level": 7,
        "page": 405,
        "text": "Escolha permanentemente dois aprimoramentos diferentes: deslocamento +3 m; deslocamento de escalada ou natação igual ao base; dado do Ataque Natural passa a d8; crítico em 19–20; dois atributos da fera aumentam em 2; ganha Multiataque para fazer um Ataque Natural adicional; ou ganha proficiência em Percepção e Atletismo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SINCRONIA DO MESTRE DA FERA",
        "level": 7,
        "page": 405,
        "text": "Para suas características de Patrulheiro, Alvo Favorecido, Caçada Acelerada e Véu da Natureza também se aplicam ao seu Companheiro. Véu da Natureza afeta ambos ao mesmo tempo se você estiver montado, e usos limitados são gastos uma única vez para os dois. Quando conjura uma magia em si mesmo, também pode afetar o companheiro se ele estiver a até 9 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO MAIOR DA FERA",
        "level": 11,
        "page": 405,
        "text": "A fera recebe dois dos aprimoramentos a seguir e mais uma opção ainda não escolhida de Aprimoramento da Fera, sem repetir opções: Multiataque passa a permitir três Ataques Naturais; dois atributos +2; voo igual ao deslocamento base; deslocamento +6 m; Especialização em uma perícia proficiente; PV máximos adicionais iguais ao seu Bônus de Favor para cada Dado de Vida da fera; CA +2; ou proficiência em duas salvaguardas adicionais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO SUPREMO DA FERA",
        "level": 15,
        "page": 406,
        "text": "A fera recebe dois aprimoramentos finais e mais uma opção ainda não escolhida dos aprimoramentos anteriores: soma seu Bônus de Favor a todos os ataques, salvo quando ele já seria aplicado; dois atributos +2; deslocamento +9 m; dado do Ataque Natural passa a d8 ou d10 se já era d8; ou proficiência em duas salvaguardas adicionais. Bloco-base do Companheiro: besta Média ou Grande, sem alinhamento; CA 11 + modificador de Destreza + seu Bônus de Favor; PV 5 + 5 × seu nível de Patrulheiro; deslocamento 12 m; For 14, Des 14, Con 12, Int 8, Sab 14, Car 10; proficiente em salvaguardas de Destreza e Constituição e soma seu Bônus de Favor a todas as salvaguardas; visão no escuro 18 m, Percepção passiva 12 + BF; BP igual ao seu. Armas Mágicas: ataques da fera são mágicos. Táticas de Matilha: vantagem nos ataques se um aliado não incapacitado estiver a até 1,5 m do alvo. Especialidade Compartilhada: a fera soma seu BF e DF às mesmas rolagens que você faria contra seu Inimigo Favorecido. Ataque Natural: ataque corpo a corpo baseado em Força + BP, alcance 1,5 m, dano 1d6 + Força contundente, perfurante ou cortante. Devastar: contra criatura caída a até 1,5 m, faz Ataque Natural e, em acerto, causa dados adicionais em quantidade igual ao seu BF. Os Dados de Vida da fera são d10 em quantidade igual ao seu nível de Patrulheiro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-dunestalker",
    "classId": "ranger",
    "name": "Espreitador das Dunas",
    "originalName": "Dunestalker",
    "aliases": [
      "Dunestalker"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Treinados nas dunas escaldantes de Greyrock, estes Patrulheiros sobrevivem a queimaduras, desidratação e exaustão, usando areia e calor para ocultar-se, emboscar e incendiar suas presas. A defesa de tribos isoladas contra saqueadores também os torna especialmente letais contra humanoides.",
    "sourcePage": 407,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "407",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ASSASSINO DAS AREIAS",
        "level": 3,
        "page": 407,
        "text": "Todos os humanoides passam a ser seus Inimigos Favorecidos, se ainda não forem. Você ganha resistência a fogo e vantagem em salvaguardas contra efeitos negativos de ambientes de alta temperatura.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EMBOSCADA TÁTICA",
        "level": 3,
        "page": 407,
        "text": "Um número de vezes por Descanso Curto ou Longo igual ao seu Bônus de Favor, você pode realizar Esconder-se ou Desengajar como ação bônus. Ao usar Esconder-se desta forma, pode fazê-lo estando apenas levemente obscurecido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CHAMAS DO DESERTO",
        "level": 7,
        "page": 407,
        "text": "Quando acerta uma criatura com ataque de arma no seu turno, pode incendiar a arma e liberar uma explosão. Além do dano normal, o alvo sofre dano de fogo igual ao resultado de seus Dados de Favor rolados em quantidade igual ao dobro do seu Bônus de Favor. Usos por Descanso Curto ou Longo iguais à metade do bônus de proficiência, arredondado para cima.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESCARAMUÇADOR FURTIVO",
        "level": 7,
        "page": 407,
        "text": "Ao realizar a ação Atacar enquanto estiver escondido, trate todas as criaturas atacadas durante essa ação como Inimigos Favorecidos; todos os ataques contra o primeiro alvo têm vantagem como se você ainda estivesse escondido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 11,
        "page": 407,
        "text": "Ao realizar a ação Atacar, você pode fazer três ataques em vez de um ou dois.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CHAMAS EXPLOSIVAS",
        "level": 15,
        "page": 407,
        "text": "Quando obtém um acerto crítico com ataque de arma, pode aplicar Chamas do Deserto automaticamente sem gastar um uso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-grey-arrow",
    "classId": "ranger",
    "name": "Flecha Cinzenta",
    "originalName": "Grey Arrow",
    "aliases": [
      "Grey Arrow"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. As Flechas Cinzentas são caçadores de arcanistas descendentes das antigas forças anti-magia do império de Neromus. Suas técnicas perturbam a própria natureza da magia e sobreviveram por linhagens e ensinamentos dispersos depois que a facção original se dissolveu.",
    "sourcePage": 407,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "407–408",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SABUESO ARCANO",
        "level": 3,
        "page": 407,
        "text": "Como ação bônus, produza os efeitos de Detectar Magia por 1 minuto sem concentração. Usos por Descanso Curto ou Longo iguais ao bônus de proficiência. Além disso, você consegue perceber intuitivamente se uma criatura a até 18 metros está se concentrando em um efeito mágico ao passar em um teste de Sabedoria (Percepção) contra a Enganação passiva dela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MUNIÇÃO PERFURADORA DE MAGIA",
        "level": 3,
        "page": 407,
        "text": "Quando ataca com arma uma criatura que voluntariamente esteja sob efeito mágico ou concentrando-se em uma magia, trate-a como Inimigo Favorecido. Se ela já for seu Inimigo Favorecido, um ataque de arma que acertar causa um Dado de Favor adicional de dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA DE RUPTURA",
        "level": 7,
        "page": 407,
        "text": "Criaturas a até 9 metros fazem testes de concentração com desvantagem. Além disso, quando uma criatura a até 18 metros conjura uma magia que exige concentração ou inicia o turno concentrando-se em uma, use reação para exigir um teste de concentração contra sua CD de magia de Patrulheiro. Em falha, perde concentração e a magia falha. Usos por Descanso Longo iguais ao Bônus de Favor.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FLECHA DE APAGAMENTO",
        "level": 11,
        "page": 408,
        "text": "Você aprende Contramágica e Dissipar Magia como magias de Patrulheiro sem contar em Magias Conhecidas. Enquanto empunha uma arma à distância na qual é proficiente, trate o alcance dessas magias como o alcance longo da arma; para usá-las além do alcance normal da magia, você deve realizar como parte da conjuração um ataque com a arma contra o alvo e acertar, caso contrário a magia é desperdiçada. Esse ataque também causa seu dano normal. Ao usar Dissipar Magia desta forma contra alvo dentro do alcance normal da arma, o teste de atributo da magia é feito com vantagem; entre o alcance normal e longo, é normal.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROJÉTIL QUE CORTA A TEIA",
        "level": 15,
        "page": 408,
        "text": "Ao fazer um ataque com arma à distância, substitua a munição por um projétil mágico com campo antimagia localizado. Ele concede bônus à jogada de ataque igual ao seu Dado de Favor. Em acerto, o alvo faz salvaguarda de Sabedoria, sofrendo 6d10 de dano psíquico adicional em falha ou metade em sucesso. Quem falhar não pode conjurar magias que gastem espaço por 1 minuto, a menos que obtenha sucesso em uma salvaguarda de Inteligência sempre que tentar. Se falhar, a magia e o espaço são desperdiçados, salvo se gastar um segundo espaço do mesmo nível ou superior para transformar o resultado em sucesso automático. Uma criatura já sofrendo esse bloqueio não pode receber o dano desta característica novamente até o efeito terminar. Dois usos por Descanso Longo; usos adicionais exigem gastar um espaço de Patrulheiro de 4º nível ou superior.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-gun-dweller",
    "classId": "ranger",
    "name": "Habitante das Armas",
    "originalName": "Gun Dweller",
    "aliases": [
      "Gun Dweller"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Patrulheiros especialistas em armas de fogo, capazes de recargas elaboradas, disparos acrobáticos e munição arcana. Sua familiaridade supera a proficiência comum e transforma as armas em extensões de sua magia primal.",
    "sourcePage": 409,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "409",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIA EM ARMAS DE FOGO",
        "level": 3,
        "page": 409,
        "text": "Você ganha proficiência com armas de fogo simples e marciais. Se já possuir ambas, escolha uma arma de fogo com a propriedade avançada e também ganhe proficiência nela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALISTA EM ARMAS DE FOGO",
        "level": 3,
        "page": 409,
        "text": "Escolha uma opção. Atirador de Curta Distância: não sofre desvantagem ao disparar a até 1,5 m de criatura hostil. Descarga Completa: em crítico com arma de fogo, role seu Dado de Favor e some ao dano. Recarga Rápida: recarregue armas com Recarga como ação bônus, ação ou reação; armas com Recarga Pesada/Completa como ação bônus ou ação. Especialista em Gatilho: proficiência com qualquer arma com propriedade Gatilho, pode disparar o Gatilho sem ação secundária quando fizer parte de um ataque corpo a corpo com a arma e pode recarregá-la como ação bônus.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MUNIÇÕES ARCANAS",
        "level": 7,
        "page": 409,
        "text": "Como ação bônus, gaste um espaço para recarregar uma arma de fogo criando munições em quantidade igual à propriedade de recarga. Ataques com essas balas tratam o alvo como Inimigo Favorecido e não têm desvantagem até o alcance longo. Se o alvo já for Inimigo Favorecido, ataque e dano recebem bônus igual à metade do nível do espaço usado, arredondado para cima. As balas desaparecem ao próximo Descanso Curto/Longo ou quando a arma é recarregada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FLOREIO DE RECARGA",
        "level": 11,
        "page": 409,
        "text": "Ao empunhar duas armas de fogo, uma em cada mão, pode recarregar ambas com a mesma ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TIRO ACROBÁTICO",
        "level": 11,
        "page": 409,
        "text": "Se atira contra criatura atrás de meia cobertura ou três quartos de cobertura, pode ricochetear a bala para ignorar essa cobertura. Além disso, uma vez por turno, pode declarar Tiro Acrobático antes de um ataque com arma de fogo para obter vantagem. Usos por Descanso Curto ou Longo iguais ao Bônus de Favor.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALISTA AVANÇADO EM ARMAS DE FOGO",
        "level": 15,
        "page": 409,
        "text": "Escolha uma opção. Aprimoramento de Ataque Extra (Armas de Fogo): ao realizar Atacar, pode fazer três ataques em vez de um, desde que pelo menos um seja com arma de fogo. Crítico Superior (Armas de Fogo): ataques com arma de fogo ou arma com Gatilho obtêm crítico em 18, 19 ou 20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-sea-dog",
    "classId": "ranger",
    "name": "Lobo do Mar",
    "originalName": "Sea Dog",
    "aliases": [
      "Sea Dog"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Mestres do oceano aberto, estes Patrulheiros exploram e lutam tanto na superfície quanto sob as ondas. Capitães, piratas e mercenários encharcados costumam ser ainda mais capazes debaixo d’água que em terra.",
    "sourcePage": 410,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "410",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESPECIALISTA OCEÂNICO",
        "level": 3,
        "page": 410,
        "text": "Enquanto estiver pelo menos meio submerso em líquido que não esteja causando dano, você soma seu Bônus de Favor a salvaguardas de Força, Destreza e Constituição. Em testes de Sobrevivência para encontrar alimento no mar, explorar/atravessar terreno subaquático ou viajar diretamente por água, role seu Dado de Favor e some ao resultado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PERNAS DO MAR",
        "level": 3,
        "page": 410,
        "text": "Você ganha deslocamento de natação igual ao deslocamento base; se já possuía natação, ela aumenta em 1,5 m × seu Bônus de Favor, recalculado sempre que o bônus aumentar. Pode prender a respiração pelo dobro do tempo normal, e usar ar para componentes verbais enquanto prende a respiração ou está submerso reduz o tempo restante em apenas 1 rodada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DE MÃOS DADAS",
        "level": 7,
        "page": 410,
        "text": "Se estiver com uma arma corpo a corpo de uma mão em uma mão e uma arma à distância de uma mão na outra, uma vez por turno, quando atacar com uma delas, pode atacar com a outra como parte da mesma ação. Se o ataque adicional for à distância, não sofre desvantagem por criaturas hostis a até 1,5 m.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VANTAGEM DOS PÉS MOLHADOS",
        "level": 11,
        "page": 410,
        "text": "Você pode tratar qualquer criatura com deslocamento de natação ou que esteja atualmente nadando sob a água como Inimigo Favorecido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SENHOR DO MAR",
        "level": 15,
        "page": 410,
        "text": "Você aprende Onda de Afogamento e Controlar Água como magias de Patrulheiro, sem contar em Magias Conhecidas. Pode conjurar cada uma uma vez por Descanso Longo sem gastar espaço e também pode conjurá-las normalmente usando espaços.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-ranger-technoscope",
    "classId": "ranger",
    "name": "Tecnoscópio",
    "originalName": "Technoscope",
    "aliases": [
      "Technoscope"
    ],
    "desc": "Compatibilidade com o Patrulheiro Revisado de Lyre: esta opção foi escrita para a revisão completa da classe apresentada no mesmo capítulo, que preserva a estrutura de arquétipos nos níveis 3, 7, 11 e 15 e admite adaptação de subclasses de Patrulheiro. Tecnoscópios aplicam tecnologia e princípios científicos a problemas imediatos. Seus dispositivos improvisados duram pouco, mas oferecem soluções decisivas; são inventores, engenhoqueiros e mentes incessantemente curiosas.",
    "sourcePage": 411,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "411–412",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FOCO MECÂNICO",
        "level": 3,
        "page": 411,
        "text": "Você ganha proficiência com ferramentas de funileiro e recebe um Inimigo Favorecido adicional: constructos. Se já escolheu constructos, escolha outro tipo entre as opções normais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REPARO TECNOLÓGICO",
        "level": 3,
        "page": 411,
        "text": "Quando conjura uma magia que restaura pontos de vida mas declara não poder escolher constructos, ela ainda pode restaurá-los, reconfigurando-os magicamente ou reproduzindo a magia que os criou. Isso não restaura partes corporais destruídas de um constructo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TECNOLOGIA DE FUNILEIRO",
        "level": 7,
        "page": 411,
        "text": "Você possui Pontos de Tecnologia de Funileiro iguais ao seu Bônus de Favor, recuperados em Descanso Curto ou Longo. Enquanto tiver ferramentas de funileiro ou equipamento suficiente, gaste 1 ponto nos efeitos: Impulso de Compressão — ao atacar com arma, acople propulsor e some seu Bônus de Favor ao ataque e seu Dado de Favor ao dano; Projetor Evasivo — reação quando alguém o ataca, projete ilusão e até o fim do turno ou até ser atingido o atacante subtrai seu Bônus de Favor de ataques contra você; Alvo Magnético — depois de acertar com arma, ação bônus para magnetizar o alvo e uma arma corpo a corpo sua por 1 minuto, tratando-o como Inimigo Favorecido para essa arma; o alvo pode substituir um ataque por teste de Destreza contra sua CD de magia para remover o dispositivo; Mira de Ampliação — como ação bônus antes de ataque à distância, crie mira que permite atacar até o alcance longo sem desvantagem por 1 minuto; Granada Trovejante — ação bônus, arremesse a um ponto a até 9 m, criaturas em raio de 1,5 m fazem salvaguarda de Constituição ou são empurradas 1,5 m e caem; Foguete Selvagem — como ação bônus ou no lugar de um ataque, lance dispositivo contra alvo a distância de 4,5 m × seu Bônus de Favor, fazendo ataque à distância com seu ataque de magia; em acerto causa dano contundente, perfurante, cortante ou de fogo igual ao seu Dado de Favor + Bônus de Favor e derruba alvos até uma categoria maiores.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MINA ARCANA",
        "level": 11,
        "page": 412,
        "text": "Ao conjurar uma magia normalmente, em vez de produzir o efeito, pode armazená-la numa mina mágica estacionária em superfície tocada. Defina um gatilho como para ação preparada. Pode preparar minas por Descanso Longo iguais ao bônus de proficiência, e não pode manter duas minas com a mesma magia; criar outra torna a anterior inerte. Minas devem ficar a pelo menos 3 m entre si. A magia não pode ter tempo maior que 1 ação nem exigir concentração. O gatilho deve ocorrer a até 3 m da mina ou dentro do alcance da magia, o que for menor; magias Pessoal usam 1,5 m. A mina não pode ser movida: você pode desarmá-la como ação, mas mover mais de 30 cm ou danificá-la detona antecipadamente. Ao detonar, usa seu ataque/CD de magia, nível original e demais regras; se não houver alvo previsto, escolhe a criatura mais próxima; áreas centradas em ponto devem tocar o espaço da mina. Se estiver a até 18 m quando o gatilho ocorrer, pode usar reação para adiar a detonação até o início do próximo turno, quando o gatilho é redefinido. Encontrá-la exige Investigação contra sua CD de magia. Fica inerte após 24 horas ou seu próximo Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SOLUÇÃO DE ENGENHOCA",
        "level": 15,
        "page": 412,
        "text": "Quando faria ataque, teste de atributo ou salvaguarda com desvantagem e possui ferramentas de funileiro ou meios para construir um dispositivo adequado, use reação e role 1d100 + seu nível de Patrulheiro. Com 51 ou mais, o dispositivo elimina a desvantagem dessa circunstância até o início do próximo turno, inclusive na rolagem desencadeadora; com 50 ou menos, nada acontece.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-gadabout",
    "classId": "sword-saint-retia",
    "name": "Andarilho",
    "originalName": "Gadabout",
    "aliases": [
      "Gadabout"
    ],
    "desc": "Relíquia Santa: Nenhuma. O Andarilho abandonou um Caminho formal e passou a aperfeiçoar apenas as próprias técnicas. Outros Santos da Espada o veem como errante ou desistente, mas sua liberdade permite uma maestria pessoal incomum.",
    "sourcePage": 417,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "417",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 417,
        "text": "Você aprende técnicas exclusivas deste Caminho; características que permitam aprender técnicas de outros Caminhos não podem escolher as de Andarilho. ESCÁRNIO: quando uma criatura fizer ataque com arma contra você, gaste 2 Foco como reação para reduzir a jogada de ataque pelo seu modificador de Carisma, após a rolagem mas antes do resultado ser declarado. MESTRIA GENERALISTA: antes de fazer ataque com arma com a qual seja proficiente, gaste 1 Foco para somar seu bônus de proficiência uma segunda vez à jogada; se não for proficiente, pode gastar 1 Foco para tratá-la como se fosse até o fim do turno. PADRÃO CONFIÁVEL: quando fizer ataque com arma, teste de perícia ou salvaguarda em que seja proficiente e o d20 mostrar menos de 10, gaste 1 Foco para tratar o resultado como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESTILO DE LUTA ROUBADO",
        "level": 3,
        "page": 417,
        "text": "Escolha qualquer Estilo de Luta disponível a outro Caminho de Devoção do Santo da Espada e receba-o.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALIZAÇÃO DO DESBRAVADOR",
        "level": 6,
        "page": 417,
        "text": "Escolha uma opção: receba proficiência em uma perícia ou ferramenta que ainda não possua e some seu bônus de proficiência uma segunda vez nos testes com ela; ou escolha duas perícias/ferramentas em que já seja proficiente e passe a somar seu bônus de proficiência uma segunda vez nesses testes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REPUTAÇÃO DESPREZÍVEL",
        "level": 11,
        "page": 417,
        "text": "Como ação bônus, escolha uma criatura a até 9 metros que possa ver ou ouvir você; ela faz salvaguarda de Sabedoria contra sua CD de Técnica de Foco. Em falha, fica amedrontada por você. Pode gastar até 5 Foco para escolher um alvo adicional por ponto gasto. Os alvos repetem a salvaguarda ao fim de cada turno, encerrando em sucesso; quem passar em qualquer salvaguarda fica imune a esta característica vinda de você por 24 horas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SEM VÍNCULO",
        "level": 14,
        "page": 417,
        "text": "Sua Arma Santa concede +2 em jogadas de ataque e dano em vez de +1. Você ainda precisa estar sintonizado com ela, mas essa sintonia não conta no seu limite de itens sintonizados.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BUSCADOR DE PRAZER",
        "level": 17,
        "page": 417,
        "text": "Você se torna imune à condição envenenado. Sempre que beber uma poção, receber cura ou usar medicina que restaure PV, recebe o valor máximo possível. Um Descanso Curto exige apenas 30 minutos e um Descanso Longo apenas 4 horas; durante essas 4 horas, pode realizar até 2 horas de atividade moderada. Se abandonar outro Caminho de Devoção e não puder mais concluí-lo, pode trocar para Andarilho, substituindo as características do Caminho anterior pelas deste; opcionalmente, pode conservar as Técnicas de Foco de 3º nível e a característica de 14º nível do Caminho anterior, deixando de receber as equivalentes do Andarilho. Se ainda não chegou ao 14º nível, receberá Sem Vínculo ao alcançá-lo. Um Andarilho que assuma outro Caminho deve substituir todas as características de Andarilho pelas do novo Caminho.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-the-dragonfly",
    "classId": "sword-saint-retia",
    "name": "Caminho da Libélula",
    "originalName": "Way of the Dragonfly",
    "aliases": [
      "Way of the Dragonfly"
    ],
    "desc": "Relíquia Santa: Tengokukiri. Inspirado em um general lendário que atravessou inúmeras batalhas sem receber ferimentos, este Caminho prioriza armas pesadas, apoio aos aliados e presença dominante no centro do combate.",
    "sourcePage": 419,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "419",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: COMBATE COM ARMA GRANDE",
        "level": 3,
        "page": 419,
        "text": "Você recebe o Estilo de Luta Combate com Arma Grande.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 419,
        "text": "LANÇA EXPLOSIVA: ao fazer ataque corpo a corpo com arma perfurante, gaste 2 Foco para não fazer a jogada; em vez disso, todas as criaturas em uma linha de 9 metros por 1,5 metro fazem salvaguarda de Destreza, sofrendo o dano da arma em falha. MAJESTOSO: como ação bônus, gaste 2 Foco para impor desvantagem a todos os ataques contra você até o início do próximo turno. JUSTA TROVEJANTE: depois de mover pelo menos 3 metros em linha reta em direção a uma criatura, gaste 1 Foco para ter vantagem no próximo ataque com arma contra ela nesse turno; se acertar e ela for no máximo uma categoria de tamanho maior, deve passar em salvaguarda de Força ou cair.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REUNIR E CONQUISTAR",
        "level": 6,
        "page": 419,
        "text": "Ao acertar uma criatura com ataque corpo a corpo com arma, você a desequilibra até o início de seu próximo turno. Enquanto ela permanecer no alcance dessa arma e você não estiver incapacitado nem cego, aliados rolam 1d4 e somam às jogadas de ataque contra ela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BALUARTE DURADOURO",
        "level": 11,
        "page": 419,
        "text": "Uma vez por Descanso Curto ou Longo, quando dano o reduziria a 0 PV, pode gastar 1 ou mais Foco para ficar com 1 PV. Recebe 1d10 PV temporários por ponto de Foco gasto; no início de cada turno, perde 1d8 desses PV temporários.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LIBÉLULA ASCENDENTE",
        "level": 14,
        "page": 419,
        "text": "Uma vez por turno, um ataque com sua Arma Santa pode tratá-la como se tivesse arremesso (15/45 m), transformando-a temporariamente em forma de lança sem alterar propriedades, dados, tipos de dano ou efeitos mágicos. Ao usar Surto do Dragão, pode fazer um ataque adicional dessa forma como ação bônus. Em acerto, causa +1d12 de dano e a arma retorna. Pode realizar ataques adicionais assim no mesmo turno gastando 1 Foco por ataque. Toda criatura atingida faz salvaguarda de Constituição; em falha, sua CA é reduzida em 1d4 + 1 até o início do seu próximo turno. A redução não acumula.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "IMATÁVEL",
        "level": 17,
        "page": 419,
        "text": "Enquanto não estiver incapacitado, reduza em 10 todo dano contundente, cortante ou perfurante que sofrer. Essa redução não acumula com efeitos semelhantes. Você também recebe proficiência em salvaguardas de Constituição.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-the-snow-white-sleeve",
    "classId": "sword-saint-retia",
    "name": "Caminho da Manga Branca de Neve",
    "originalName": "Way of the Snow White Sleeve",
    "aliases": [
      "Way of the Snow White Sleeve"
    ],
    "desc": "Relíquia Santa: Snow Sleeve. Este Caminho imita um guerreiro sobrenatural que misturava dança e gelo. Seus praticantes criam neve, auras congelantes e golpes que desaceleram ou debilitam inimigos.",
    "sourcePage": 428,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "428",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FRIO NA MORTE",
        "level": 3,
        "page": 428,
        "text": "Ao reduzir criatura hostil a 0 PV ou obter crítico, converta parte da força vital em uma película de gelo. O dano do próximo ataque que o acertar dentro de 1 minuto é reduzido em valor igual ao seu nível de Santo da Espada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 428,
        "text": "FLOCOS DE NEVE DANÇANTES: ao acertar ataque de oportunidade, gaste 1 Foco para reduzir o deslocamento do alvo em 1,5 metro × seu bônus de proficiência até o início do próximo turno. MANTER FIRME: quando ataque com arma o acertar, gaste 2 Foco para reduzir o dano em 1d8 + Constituição; pode usar várias vezes na mesma fonte antes de sofrer o dano. SEPARAÇÃO: ao acertar ataque corpo a corpo, gaste 2 Foco para forçar salvaguarda de Constituição; em falha, o alvo tem desvantagem em todos os ataques por 1 minuto ou até recuperar, de um único efeito, PV iguais ou superiores ao seu nível de Santo da Espada; repete a salvaguarda ao fim de cada turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DANÇA DA LUA BRANCA",
        "level": 6,
        "page": 428,
        "text": "Como ação bônus, crie por 1 minuto uma aura de luz lunar plena em raio de 4,5 metros, com mais 4,5 metros de penumbra. A área de luz plena congela e é terreno difícil para todos exceto você. Outra criatura que iniciar turno nela ou entrar pela primeira vez faz salvaguarda de Constituição, sofrendo 1d8 de dano gélido em falha ou metade em sucesso; o dado torna-se d10 no 10º nível e d12 no 16º. Uma vez por Descanso Longo, ou gaste 2 Foco para usar novamente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DANÇA DO LAGO CONGELANTE",
        "level": 11,
        "page": 428,
        "text": "Como ação bônus, encha uma esfera de 6 metros ao redor com neve e gelo. Todas as criaturas fazem salvaguarda de Constituição; em falha, deslocamento 0 e sem reações até o início do seu próximo turno. Criaturas líquidas/gelatinosas e criaturas submersas têm desvantagem. Usos por Descanso Longo iguais à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "NÉVOA BRANCA",
        "level": 14,
        "page": 428,
        "text": "Sua Arma Santa fica congelada. Na primeira vez em cada turno que acertar uma criatura com ela, causa dano gélido adicional igual a 1d8 + metade de seu nível de Santo da Espada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DANÇA DA LÂMINA DE GELO",
        "level": 17,
        "page": 428,
        "text": "Ao acertar ataque com arma, gaste 1 Foco para forçar salvaguarda de Constituição. Em falha, o alvo é afetado como pela magia Lentidão. Repete a salvaguarda ao fim de cada turno, encerrando em sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-kojiro",
    "classId": "sword-saint-retia",
    "name": "Caminho de Kojirō",
    "originalName": "Way of Kojirō",
    "aliases": [
      "Way of Kojirō"
    ],
    "desc": "Baseado nas lendas do espadachim associado à enorme “Vara de Lavar”, este Caminho domina armas de duas mãos, contra-ataques e posicionamento defensivo.",
    "sourcePage": 423,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "423",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: PROFICIÊNCIA (DUAS MÃOS)",
        "level": 3,
        "page": 423,
        "text": "Você recebe o Estilo de Luta Proficiência (Duas Mãos).",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 423,
        "text": "RETROCESSO: ao rolar dano contra criatura no máximo uma categoria maior usando arma pesada ou de duas mãos, se qualquer dado da arma mostrar seu valor máximo, gaste 2 Foco para empurrá-la ou derrubá-la imediatamente. CAÇADOR DE FUGA: ao acertar ataque corpo a corpo, gaste 2 Foco; até o fim do próximo turno do alvo, cada 1,5 metro que ele se mover custa 1,5 metro adicional. BASE FORTIFICADA: no seu turno, se ainda não se moveu nem teleportou, gaste 1 Foco para fixar posição: deslocamento 0, pode usar Esquivar como ação bônus e recebe +2 em ataques corpo a corpo com arma até o início do próximo turno; movimento voluntário encerra o efeito.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INTERCEPTAR",
        "level": 6,
        "page": 423,
        "text": "Quando uma criatura amigável adjacente for alvo de ataque com arma ou efeito que só a escolha, use reação para trocar de lugar com ela e tornar-se o alvo, desde que ela seja no máximo uma categoria maior e haja espaço para ambos. Como parte da mesma reação, escolha: +metade de seu bônus de proficiência na CA até o início do próximo turno; +seu bônus de proficiência nas salvaguardas até o início do próximo turno; ou faça imediatamente um ataque com arma contra a origem do efeito se estiver ao alcance, resolvido antes do efeito acionador.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PERSPECTIVA SOBRE-HUMANA",
        "level": 11,
        "page": 423,
        "text": "Como ação bônus, gaste 2 Foco para conjurar Aprimorar Atributo em si mesmo. Enquanto a magia durar, também tem vantagem nas salvaguardas do atributo cujo teste recebe vantagem pela magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICA DA VARA DE LAVAR",
        "level": 14,
        "page": 423,
        "text": "Se sua Arma Santa sintonizada tiver propriedade duas mãos, pode empunhá-la com uma mão. Se tiver versátil, pode usar o dado maior mesmo com uma mão. Se optar por empunhá-la com duas mãos, uma vez por turno role 1d6 e some ao resultado de uma jogada de ataque com ela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REVERSÃO DO PARDAL",
        "level": 17,
        "page": 423,
        "text": "Quando for atingido por ataque ou efeito que exija jogada de ataque e estiver ciente dele, pode contra-atacar para anulá-lo. Faça uma jogada de ataque com arma pesada ou de duas mãos; se seu resultado superar o ataque recebido, o ataque erra ou é defletido. Você pode repetir contra ataques subsequentes da mesma criatura no mesmo turno. Pode usar esta característica duas vezes por Descanso Longo; depois disso, ainda pode usá-la gastando 1 Foco por contra-ataque.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-kyuubi",
    "classId": "sword-saint-retia",
    "name": "Caminho de Kyuubi",
    "originalName": "Way of Kyuubi",
    "aliases": [
      "Way of Kyuubi"
    ],
    "desc": "Relíquia Santa: Loose Number. Kyuubi, primeira entre os Santos da Espada, refinou as técnicas fundamentais e aprendia com mestres apenas observando. Seu Caminho privilegia equilíbrio, moderação e versatilidade extrema.",
    "sourcePage": 424,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "424",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PAU PARA TODA OBRA",
        "level": 3,
        "page": 424,
        "text": "Quando fizer um teste de atributo ao qual ainda não some seu bônus de proficiência, some metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO REFINADAS",
        "level": 3,
        "page": 424,
        "text": "Suas técnicas básicas são aprimoradas. MOMENTO DE ADEPTO pode acrescentar o bônus a qualquer teste, independentemente de proficiência. VERTICAL ASTUTA deixa de custar Foco e pode ser usada livremente como ação bônus. DEFLEXÃO DA ASA DO FALCÃO custa apenas 1 Foco. PASSO FUGAZ dobra o movimento adicional. AVANÇO AVASSALADOR trata um novo d20 abaixo de 10 como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ROUBO DE TÉCNICA",
        "level": 6,
        "page": 424,
        "text": "Escolha Técnicas de Foco de outros Caminhos, exceto as que envolvam conjuração, em quantidade igual ao seu bônus de proficiência. Você as aprende. Sempre que seu bônus de proficiência aumentar acima do número de técnicas aprendidas assim, aprenda técnicas adicionais até igualá-lo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DISCÍPULO DE LUXUS",
        "level": 11,
        "page": 424,
        "text": "Ao rolar iniciativa, se tiver menos de 3 Foco restantes, recupera imediatamente até ficar com 3.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA DO CAMINHO DIVIDIDO",
        "level": 14,
        "page": 424,
        "text": "Enquanto empunhar sua Arma Santa sintonizada, você tem vantagem em todas as salvaguardas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARS MAGNUS",
        "level": 17,
        "page": 424,
        "text": "A cada descanso, escolha uma Técnica de Foco para meditar e treinar. Até meditar sobre outra, a primeira vez em cada turno que usar a técnica escolhida não exige gastar Foco.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-muramasa",
    "classId": "sword-saint-retia",
    "name": "Caminho de Muramasa",
    "originalName": "Way of Muramasa",
    "aliases": [
      "Way of Muramasa"
    ],
    "desc": "Relíquia Santa: Pesadelo de Sengo. Em vez de seguir um único mestre, este Caminho reúne técnicas de portadores das lâminas amaldiçoadas de Muramasa, armas sedentas por sangue que transformavam seus usuários em combatentes implacáveis.",
    "sourcePage": 425,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "425",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CRÍTICO SANGRENTO",
        "level": 3,
        "page": 425,
        "text": "Você obtém crítico com 19 ou 20 no d20. Ao obter crítico, causa dano necrótico adicional igual a 1d10 × metade de seu bônus de proficiência, arredondado para baixo; se o d20 foi 20, o dano é 1d10 × seu bônus de proficiência. Esse dano só pode ocorrer uma vez por ação Atacar ou em ataques de oportunidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATACANTE IMPRUDENTE",
        "level": 3,
        "page": 425,
        "text": "Você recebe o Estilo de Luta Atacante Imprudente. Se já o possui, pode avançá-lo em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SEDE DE SANGUE",
        "level": 6,
        "page": 425,
        "text": "Ao obter acerto crítico contra uma criatura, pode fazer um ataque com vantagem contra outro inimigo ao alcance. Máximo de ataques extras por turno igual à metade de seu bônus de proficiência, arredondado para baixo. Esses ataques extras não geram outros ataques por esta característica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BEBEDOR DE SANGUE",
        "level": 11,
        "page": 425,
        "text": "Ao acertar com arma uma criatura que não seja morto-vivo nem constructo, pode gastar 2 Foco, após ver o dano, para receber PV temporários iguais ao dano causado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO SANGRENTO SUPERIOR",
        "level": 14,
        "page": 425,
        "text": "Os dados de dano necrótico de Crítico Sangrento tornam-se d12. Com sua Arma Santa sintonizada, obtém crítico em 18, 19 ou 20 no d20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BRASÃO DE SANGUE",
        "level": 17,
        "page": 425,
        "text": "Na primeira vez em seu turno que acertar uma criatura com ataque com arma, force salvaguarda de Constituição; em falha, ela recebe uma maldição e um selo demoníaco. Pode tentar novamente em acertos posteriores no mesmo turno gastando 1 Foco cada. Ataques contra criatura amaldiçoada causam +1d8 de dano necrótico, independentemente do número de maldições. Depois de fazer uma jogada de ataque e ver o resultado, pode remover uma maldição para rolar outro d20 e escolher qual usar; se acertar, o ataque causa um dado de dano de arma adicional. Se o alvo tiver cinco ou mais maldições, pode remover cinco de uma vez para transformar um acerto comum em resultado natural 20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-musashi",
    "classId": "sword-saint-retia",
    "name": "Caminho de Musashi",
    "originalName": "Way of Musashi",
    "aliases": [
      "Way of Musashi"
    ],
    "desc": "Relíquia Santa: Temper & Patience. Musashi foi um mestre irreverente do combate com duas armas. Seu Caminho ensina a não desperdiçar movimentos, convertendo defesa em ofensiva e explorando simultaneamente várias brechas.",
    "sourcePage": 426,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "426",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: COMBATE COM DUAS ARMAS",
        "level": 3,
        "page": 426,
        "text": "Você recebe o Estilo de Luta Combate com Duas Armas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 426,
        "text": "DEFLEXÃO EXEMPLAR: como reação a um ataque com arma visível que o acerte, gaste 1 Foco para reduzir o dano à metade. REPOSICIONAR: quando uma criatura errar ataque corpo a corpo contra você, gaste 2 Foco para mover imediatamente até 6 metros sem provocar ataques de oportunidade; não funciona incapacitado ou com deslocamento 0. PÉTALAS DISPERSAS: depois de usar a ação Atacar e a ação bônus para atacar com arma secundária, pode gastar 1 Foco cada vez que fizer outro ataque com a arma principal para fazer outro ataque com a secundária; só pode aplicar esta técnica aos ataques de uma ação Atacar por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PONTO ZERO",
        "level": 6,
        "page": 426,
        "text": "Quando uma criatura obtiver crítico contra você, pode usar reação para transformá-lo em acerto normal e, como parte da mesma reação, fazer dois ataques com arma contra uma criatura ao alcance, um com a arma principal e outro com a secundária. Além disso, criaturas não podem obter contra você benefícios que exijam cercá-lo, como Ataque Furtivo por aliado adjacente, flanqueamento ou Táticas de Matilha; se a característica tiver outro gatilho, como vantagem para Ataque Furtivo, esse uso ainda funciona.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAMINHO DAS CINCO ALMAS",
        "level": 11,
        "page": 426,
        "text": "Você recebe proficiência em todas as salvaguardas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "O CAMINHO INEGÁVEL",
        "level": 14,
        "page": 426,
        "text": "Você pode vincular uma segunda arma como Arma Santa. Ambas recebem todos os benefícios; pode sintonizar-se com as duas como se fossem um único item mágico, obtendo os efeitos de ambas mas ocupando apenas um espaço de sintonia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA CELESTIAL SEM CORAÇÃO",
        "level": 17,
        "page": 426,
        "text": "Como ação, gaste 4 Foco para golpear todas as criaturas escolhidas a até 4,5 metros. Faça uma única jogada de ataque com uma de suas Armas Santas e aplique o resultado separadamente a cada alvo; faça uma única jogada de dano e aplique a todos os atingidos. O ataque é feito sem vantagem ou desvantagem e não recebe efeitos que alterem apenas uma jogada de ataque/dano individual, embora efeitos contínuos de turno ou mais possam afetá-lo. Cada criatura atingida faz salvaguarda de Constituição contra sua CD de Técnica de Foco; em falha, sofre +2d12 do tipo de dano da arma e fica atordoada até o fim do seu próximo turno. Não pode usar esta técnica e Surto do Dragão no mesmo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-pendragon",
    "classId": "sword-saint-retia",
    "name": "Caminho de Pendragon",
    "originalName": "Way of Pendragon",
    "aliases": [
      "Way of Pendragon"
    ],
    "desc": "Relíquia Santa: Caliburn. Baseado no lendário rei-cavaleiro escolhido por profecia, este Caminho une liderança, sorte, defesa e poder sagrado. Seus praticantes se veem como baluartes contra injustiça e traição.",
    "sourcePage": 427,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "427",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: DEFESA",
        "level": 3,
        "page": 427,
        "text": "Você recebe o Estilo de Luta Defesa, proficiência com armaduras pesadas e proficiência em salvaguardas de Carisma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 427,
        "text": "CORAGEM: ao usar a ação Atacar, gaste 1 Foco para acrescentar a cada ataque corpo a corpo com arma que acerte dano adicional do tipo da arma igual ao seu modificador de Força; uma vez por ação Atacar. MANTER FIRME: quando ataque com arma o acertar, gaste 2 Foco para reduzir o dano em 1d8 + Constituição; pode usar várias vezes na mesma fonte, decidindo antes de sofrer o dano. CHAMADO INSPIRADOR: como ação bônus, gaste 2 Foco e escolha criaturas que possam vê-lo ou ouvi-lo em quantidade igual ao seu modificador de Sabedoria; cada uma recebe 1d10 + seu bônus de proficiência em PV temporários por 1 minuto ou até você cair a 0 PV/inconsciente, e enquanto os possuir tem vantagem contra amedrontado ou enfeitiçado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ASSALTO VALENTE",
        "level": 6,
        "page": 427,
        "text": "Ao fazer seu primeiro ataque do turno, pode usar ação bônus para avançar com fervor. Durante esse turno, toda jogada de ataque com arma recebe +1d8. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INSTINTO E SORTE",
        "level": 11,
        "page": 427,
        "text": "Ao terminar Descanso Longo, role d20s em quantidade igual ao seu bônus de proficiência; rerrole resultados 10 ou menos até serem 11 ou mais, exceto um 1 natural, que é perdido. Esses são seus resultados de Instinto e duram até o próximo Descanso Longo. Antes de fazer um ataque, teste ou salvaguarda, pode gastar um resultado de Instinto e usá-lo em vez de rolar. Alternativamente, gaste 1 Foco para substituir por um resultado de Instinto um d20 já rolado, mesmo após sucesso ou falha ser declarado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LUZ DA ESPERANÇA",
        "level": 14,
        "page": 427,
        "text": "Como ação bônus, sua Arma Santa pode emitir 15 metros de luz plena e mais 15 metros de penumbra; sua luz plena penetra e dissipa escuridão mágica criada por magia de 4º nível ou inferior. Dura até você ficar incapacitado, soltar a arma ou encerrá-la como ação bônus. Além disso, como ação bônus, pode gastar de 1 a 4 Foco para imbuir a Arma Santa com energia radiante por 1 minuto; no próximo acerto, causa +1d10 de dano radiante por ponto gasto e o efeito termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ORIENTAÇÃO DE AVALON",
        "level": 17,
        "page": 427,
        "text": "Toda cura que receber restaura o máximo possível de PV. Se sofrer exaustão recuperável normalmente, um único Descanso Longo remove todos os níveis, e você é imune a Fadiga de Combate. Além disso, quando uma salvaguarda bem-sucedida normalmente reduziria o dano à metade, você sofre metade em uma falha e nenhum dano em sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-tomoe",
    "classId": "sword-saint-retia",
    "name": "Caminho de Tomoe",
    "originalName": "Way of Tomoe",
    "aliases": [
      "Way of Tomoe"
    ],
    "desc": "Relíquia Santa: Folding Sky. Tomoe levou a arquearia além da perfeição e, segundo as lendas, conquistou o favor de um deus do relâmpago. Seus seguidores dominam ataques à distância, mobilidade e rajadas elétricas.",
    "sourcePage": 429,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "429–430",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: ARQUEARIA",
        "level": 3,
        "page": 429,
        "text": "Você recebe o Estilo de Luta Arquearia. Ignora a propriedade recarga de armas com as quais seja proficiente; sacar arma com arremesso é uma ação livre se ela for imediatamente arremessada como parte de um ataque.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 429,
        "text": "MAJESTOSO: como ação bônus, gaste 2 Foco para impor desvantagem a todos os ataques contra você até o início do próximo turno. ERGUER E VOAR: gaste 1 Foco para aumentar seu deslocamento em 3 metros até o fim do turno; nesse tempo, pode realizar saltos em altura/distância sem corrida e correr por superfícies verticais sem cair, mas cai se terminar o turno nelas ou tiver deslocamento 0. CORRENTE DE VENTO: ao fazer ataque corpo a corpo com arma, gaste 1 Foco para ampliar o alcance para 9 metros; todos os ataques com a mesma arma até o fim do turno podem usar esse alcance e continuam sendo corpo a corpo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OLHOS DO SANTO",
        "level": 6,
        "page": 429,
        "text": "Seus ataques à distância não têm desvantagem por inimigos a 1,5 metro nem por alcance longo. Ataques à distância com arma obtêm crítico em 19 ou 20 no d20 e, num crítico, role um dado de dano de arma adicional.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÓTUS TROVEJANTE",
        "level": 6,
        "page": 429,
        "text": "Ao acertar ataque com arma com a qual seja proficiente, gaste 1 Foco e, opcionalmente, Foco adicional até metade de seu bônus de proficiência, arredondado para cima. O alvo faz salvaguarda de Destreza; em falha, sofre 2d8 de dano elétrico +1d8 por Foco adicional. Armadura de metal impõe desvantagem à salvaguarda. Se o ataque usou sua Arma Santa, causa ainda +1d12 de dano elétrico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BOMBARDEIO RAIKOU",
        "level": 11,
        "page": 430,
        "text": "Como ação, gaste 3 Foco para armar por 1 minuto uma arma à distância que empunhe com relâmpago espiritual; ela dispara raios em vez de munição e seu dano torna-se elétrico. Enquanto durar, como ação escolha ponto no alcance normal da arma; criaturas em esfera de 4,5 metros fazem salvaguarda de Destreza, sofrendo 1d10 + os dados de dano da arma em dano elétrico em falha ou metade em sucesso. Pode usar essa ação imediatamente uma vez ao armar a arma. Quem falhar por 5 ou mais fica atordoado até o fim do próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "POSTURA DA FLOR DO RELÂMPAGO",
        "level": 14,
        "page": 430,
        "text": "Você tem resistência a dano elétrico. Na primeira vez que acertar cada criatura, o ataque causa +1d8 + metade de seu nível de Santo da Espada, arredondado para baixo, de dano elétrico. O controle de “primeira vez” reinicia para cada alvo no início de seu turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MIRA ALÉM DA PERFEIÇÃO",
        "level": 17,
        "page": 430,
        "text": "Ataques à distância com arma obtêm crítico em 18, 19 ou 20 no d20. Em um crítico, role dois dados de dano de arma adicionais, além do dado adicional de Olhos do Santo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-the-eroded-lord",
    "classId": "sword-saint-retia",
    "name": "Caminho do Lorde Erodido",
    "originalName": "Way of the Eroded Lord",
    "aliases": [
      "Way of the Eroded Lord"
    ],
    "desc": "Relíquia Santa: Confiança de Itonia. Inspirado no misterioso campeão de Halte Itonia, este Caminho combina armadura, feitiçaria e energia espiritual. Seus praticantes convertem espaços de magia em força destrutiva e mesclam ataques com conjuração.",
    "sourcePage": 420,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "420–421",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: DEFESA",
        "level": 3,
        "page": 420,
        "text": "Você recebe o Estilo de Luta Defesa.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 420,
        "text": "FARDO DA MENTE: quando perderia concentração em uma magia ou efeito, gaste 2 Foco para mantê-la. ARMADURA ESPIRITUAL: como ação bônus, gaste 1 ou mais Foco para receber PV temporários iguais a 1d10 por ponto gasto + metade de seu nível de Santo da Espada; duram 1 hora e, enquanto os tiver e não usar escudo, sua CA aumenta em metade de seu bônus de proficiência, arredondado para baixo. DIVIDIR ALVO: ao conjurar magia que só possa afetar um alvo, gaste Foco igual ao nível base da magia para escolher um segundo alvo no alcance; truques custam 1 Foco.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONJURAÇÃO",
        "level": 3,
        "page": 420,
        "text": "Você aprende magia de Feiticeiro como um conjurador de um terço. No 3º nível conhece dois truques e três magias de Feiticeiro de 1º nível; aprende outras conforme a tabela do Lorde Erodido e pode substituir uma magia conhecida ao ganhar nível. Carisma é seu atributo de conjuração. Qualquer item ou efeito que aumente sua CD de Técnica de Foco também aumenta a CD dessas magias. Uma arma com a qual seja proficiente funciona como foco, dispensando outro foco de conjuração. Seus espaços de magia são recuperados após Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "POTÊNCIA MÁXIMA",
        "level": 6,
        "page": 420,
        "text": "Ao acertar ataque com arma, pode gastar um espaço de magia de Feiticeiro para causar dano energético adicional igual a 1d10 + 1d10 por nível do espaço gasto; o ataque passa a ser mágico se já não era. Não pode usar esta característica no mesmo ataque que outro efeito que gaste espaços para adicionar dano de forma semelhante, como Destruição Divina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE ARCANO",
        "level": 11,
        "page": 421,
        "text": "Quando conjurar uma magia de Feiticeiro que exija 1 ação, ou ativar parte do efeito de uma magia que exija sua ação, pode fazer um ataque com arma contra um alvo ao alcance como parte da mesma ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONDUTIVIDADE PERFEITA",
        "level": 14,
        "page": 421,
        "text": "Ao usar Potência Máxima com sua Arma Santa sintonizada, trate o espaço gasto como 1 nível acima. Além disso, na primeira vez em cada turno que acertar com a Arma Santa, causa dano energético adicional igual à metade de seu nível de Santo da Espada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FEITIÇARIA DE ALTA SINERGIA",
        "level": 17,
        "page": 421,
        "text": "Quando conjurar uma magia de Feiticeiro usando espaço de magia, pode gastar Foco para aumentar o nível em que ela é conjurada em 1 por ponto gasto, até o máximo de 9º nível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-blue-metal",
    "classId": "sword-saint-retia",
    "name": "Caminho do Metal Azul",
    "originalName": "Way of Blue Metal",
    "aliases": [
      "Way of Blue Metal"
    ],
    "desc": "Relíquia Santa: Tenshisaiga. Tradição de um antigo espadachim élfico voltada à paz interior e ao domínio da energia espiritual. O Caminho do Metal Azul aprende técnicas alheias, recupera Foco em momentos críticos e manifesta a própria essência como energia elemental.",
    "sourcePage": 418,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "418",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MAESTRIA DE FOCO",
        "level": 3,
        "page": 418,
        "text": "Quando o d20 de uma jogada de ataque mostrar 20, você recupera Foco igual ao seu bônus de proficiência. Resultados 20 adicionais no mesmo turno recuperam apenas 1 Foco cada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 418,
        "text": "Aprenda duas Técnicas de Foco de outros Caminhos de Devoção. Sempre que ganhar um nível de Santo da Espada, pode substituir uma delas por outra.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA CENTRAL",
        "level": 6,
        "page": 418,
        "text": "Escolha frio, fogo, elétrico ou venenoso. Quando sofreria dano desse tipo, pode usar reação e gastar 2 Foco para negar o dano e receber PV temporários iguais ao dano negado; enquanto mantiver esses PV temporários, também tem resistência ao tipo escolhido. Além disso, como ação, pode gastar 2 Foco para imbuir por 10 minutos uma arma que esteja empunhando com o mesmo elemento; seus ataques com ela causam dano adicional desse tipo igual à metade de seu nível de Santo da Espada, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FOCO EXTRA",
        "level": 11,
        "page": 418,
        "text": "Você aprende mais duas Técnicas de Foco conforme sua característica Técnicas de Foco do Metal Azul.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PUREZA DA FORMA",
        "level": 14,
        "page": 418,
        "text": "Enquanto estiver sintonizado com sua Arma Santa, todas as Técnicas de Foco custam 1 ponto a menos, mínimo 1. Se a técnica envolver arma ou jogada de ataque, ela deve usar sua Arma Santa para receber essa redução.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SURTO DO DRAGÃO RUGIDOR",
        "level": 17,
        "page": 418,
        "text": "Usar Surto do Dragão normalmente não aumenta mais o custo de usos seguintes. Sempre que usar Surto do Dragão, pode gastar +1 Foco para transformá-lo em Surto do Dragão Rugidor: até o início do próximo turno, ataques com sua Arma Santa têm vantagem e, em acerto, causam +1d10 do tipo de dano da arma. O movimento adicional do Surto do Dragão aumenta para 9 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sword-saint-retia-way-of-the-heavenbreaker",
    "classId": "sword-saint-retia",
    "name": "Caminho do Rompe-Céus",
    "originalName": "Way of the Heavenbreaker",
    "aliases": [
      "Way of the Heavenbreaker"
    ],
    "desc": "Relíquia Santa: Lord Spiral. O Rompe-Céus emula um herói rebelde de espírito dominador e confiança inabalável. É um caminho de sorte absurda, ousadia e avanço direto que transforma tenacidade em poder.",
    "sourcePage": 421,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "421–422",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "DEFESA OSTENTOSA",
        "level": 3,
        "page": 421,
        "text": "Enquanto não estiver usando armadura, sua CA pode ser 10 + seu modificador de Destreza + seu modificador de Carisma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESTILO DE LUTA: LUTADOR IMPRUDENTE",
        "level": 3,
        "page": 421,
        "text": "Você recebe o Estilo de Luta Lutador Imprudente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 421,
        "text": "ROMPER A ABÓBADA: ao errar ataque corpo a corpo com arma, gaste 1 Foco para rolar 1d4 e somar à jogada, podendo repetir no mesmo ataque até seu bônus de proficiência vezes. ABRIR O PRÓPRIO CAMINHO: com menos da metade dos PV máximos, como ação bônus gaste 3 Foco para somar metade de seu bônus de proficiência a ataques, salvaguardas e testes por 1 minuto; o bônus fica suspenso enquanto estiver acima da metade dos PV e volta se cair abaixo durante a duração. CERRE OS DENTES: como ação, se aliados a até 9 metros estiverem atordoados, amedrontados ou enfeitiçados por falha em salvaguarda, gaste 2 Foco para permitir que repitam a salvaguarda com vantagem; se puder tocá-los, também somam seu modificador de Carisma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SORTE ESTÚPIDA",
        "level": 6,
        "page": 422,
        "text": "Um 1 natural em jogada de ataque, teste de atributo ou salvaguarda é tratado como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TORNAR O IMPOSSÍVEL POSSÍVEL",
        "level": 11,
        "page": 422,
        "text": "Sempre que for obrigado a rolar vários d20 em um ataque, teste ou salvaguarda, como por desvantagem, pode gastar 2 Foco para escolher qualquer um dos resultados e usá-lo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PASSAGEM HELICOIDAL",
        "level": 14,
        "page": 422,
        "text": "Enquanto estiver sintonizado com sua Arma Santa, pode atacar com ela criaturas dentro de uma distância igual ao seu movimento restante, mesmo fora do alcance normal. Se o alvo estiver fora do alcance, uma explosão em forma de broca o leva ao espaço desocupado mais próximo adjacente ao alvo; a distância é descontada do movimento, não provoca ataques de oportunidade e ignora terreno difícil. No primeiro acerto contra uma criatura em seu turno, sua Arma Santa causa dano energético adicional igual à metade de seu nível de Santo da Espada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "HÉLICE GIGA",
        "level": 17,
        "page": 422,
        "text": "Ao obter 20 natural em ataque, pode gastar 2 Foco para causar +8d12 de dano energético; até o início do próximo turno, não pode usar esta característica novamente e todos os ataques contra você têm desvantagem. Alternativamente, em um acerto comum, pode gastar 5 Foco para aplicar o mesmo dano. Esse dano adicional não é multiplicado por acerto crítico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-barbarian-champion-of-mortuous",
    "classId": "barbarian",
    "name": "Campeão de Mortuous",
    "originalName": "Champion of Mortuous",
    "aliases": [
      "Champion of Mortuous"
    ],
    "desc": "Um estilo de combate surgido entre antigos guerreiros que lutavam no Anel de Lopoint, em Sermonway, onde Mortuous já foi venerado como patrono da arena. Seus campeões eram treinados para ignorar a própria segurança, aterrorizar e desafiar seus alvos, impondo medo às presas ao custo da própria integridade física e mental.",
    "sourcePage": 431,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "431–432",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "DECLARAÇÃO SANGRENTA",
        "level": 3,
        "page": 431,
        "text": "Sempre que entrar em Fúria, escolha uma criatura a até 18 metros que possa ver ou ouvir você e declare com absoluta certeza que irá derrotá-la. Até sua Fúria terminar, adicione seu bônus de dano da Fúria às jogadas de ataque contra essa criatura e você pode realizar imediatamente a ação Disparada, desde que o deslocamento adicional seja usado para se aproximar do alvo. Se você reduzir o alvo a 0 pontos de vida antes do fim da Fúria, recebe pontos de vida temporários iguais a 1d10 + seu nível de Bárbaro. Se o alvo atual estiver com 0 pontos de vida ou morto, você pode usar uma ação bônus para escolher outro alvo; isso pode ser feito, por Fúria, um número de vezes igual à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MOMENTOS DE DEVASTAÇÃO",
        "level": 6,
        "page": 431,
        "text": "Você possui uma quantidade de Momentos de Devastação igual à metade do seu nível de Bárbaro, arredondado para baixo, recuperando todos após um Descanso Longo. Você pode gastá-los das seguintes formas. Sede de Sangue: ao reduzir uma criatura a 0 pontos de vida ou obter um acerto crítico em seu turno, gaste 2 Momentos como ação bônus para mover até 4,5 metros em direção a outra criatura e realizar outra ação Atacar. Dano Brutal: ao obter o resultado máximo em um dado de dano de arma, gaste 1 Momento para rolar novamente esse dado e somar o resultado ao dano; se o novo resultado também for o máximo, repita o processo. Resistir à Fadiga: como ação bônus, gaste 1 Momento para reduzir sua Fadiga de Combate em 1d4 pontos ou remover um nível de exaustão. Sobrevivência: quando um ataque ou efeito do qual você esteja ciente fosse reduzi-lo a 0 pontos de vida, gaste 1 Momento como reação para reduzir o dano em uma quantidade igual ao seu nível de Bárbaro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FÚRIA ATERRORIZANTE",
        "level": 10,
        "page": 432,
        "text": "Enquanto estiver em Fúria, criaturas hostis que iniciarem o turno a até 3 metros de você ou entrarem nessa área pela primeira vez no turno devem realizar uma salvaguarda de Sabedoria contra a CD das suas características baseada em Força. Em caso de falha, ficam amedrontadas por você até o início do próximo turno delas. Em caso de sucesso, não são afetadas e ficam imunes a este efeito por 24 horas, ou até a próxima vez que você entrar em Fúria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 14,
        "page": 432,
        "text": "Quando realiza a ação Atacar, você pode atacar três vezes em vez de uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-barbarian-grandstander",
    "classId": "barbarian",
    "name": "Exibicionista",
    "originalName": "Grandstander",
    "aliases": [
      "Grandstander"
    ],
    "desc": "Pronto para atrair todos os olhares e declarar sua vitória antes mesmo do fim da luta, o Exibicionista é um guerreiro indomável que provoca a ira dos adversários em benefício dos aliados. Ele dramatiza o combate e o transforma em um espetáculo sobre si mesmo, enquanto conduz inimigos a distrações e fintas enganosas.",
    "sourcePage": 433,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "433",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GRANDE DISTRAÇÃO",
        "level": 3,
        "page": 433,
        "text": "Você é uma presença caótica no campo de batalha. Como ação bônus ou como parte de entrar em Fúria, escolha um aliado a até 18 metros que possa ver ou ouvir você. Por 1 minuto, criaturas têm desvantagem em ataques contra esse aliado se você estiver a até 9 metros dele ou dos atacantes. Durante o mesmo período, o aliado tem vantagem no primeiro ataque que realizar em cada turno contra uma criatura a até 6 metros de você. O efeito termina se você ficar incapacitado ou usá-lo novamente. Você pode usá-lo um número de vezes por Descanso Longo igual ao seu bônus de proficiência. A partir do 10º nível de Bárbaro, pode escolher dois aliados em vez de um.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DESTEMOR",
        "level": 6,
        "page": 433,
        "text": "Você é imune às condições amedrontado e enfurecido. Além disso, enquanto você não estiver incapacitado, criaturas a até 6 metros de você têm vantagem em salvaguardas contra ficarem amedrontadas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SURTO DE ADRENALINA",
        "level": 6,
        "page": 433,
        "text": "Sempre que sua Fúria terminar, você recebe um surto de adrenalina: até o fim do seu turno, seu deslocamento aumenta em 3 metros e você tem vantagem em todos os ataques com arma que realizar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO APRIMORADO (FÚRIA)",
        "level": 10,
        "page": 433,
        "text": "Enquanto estiver em Fúria, você obtém um acerto crítico com uma jogada de ataque cujo d20 mostre 19 ou 20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANTO DO CAMPEÃO",
        "level": 14,
        "page": 433,
        "text": "Sua confiança demonstra a alma de um verdadeiro campeão. Você recebe os seguintes benefícios: quando acerta um ataque com arma realizado com vantagem, causa 1d6 adicional do tipo de dano da arma; quando obtém um acerto crítico rolando 19 ou 20 no d20, recebe pontos de vida temporários iguais ao dano causado por esse ataque; e ganha proficiência em salvaguardas de Carisma, além de poder adicionar metade do seu bônus de proficiência, arredondado para baixo, a qualquer teste de atributo baseado em Carisma que ainda não inclua esse bônus.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-barbarian-gladiator",
    "classId": "barbarian",
    "name": "Gladiador",
    "originalName": "Gladiator",
    "aliases": [
      "Gladiator"
    ],
    "desc": "O rugido da multidão impulsiona o Gladiador, que busca entreter e atrair atenção tanto quanto se entrega à própria ira. Ele concentra seus esforços em adversários específicos e transforma o combate direto em espetáculo. Gladiadores são conhecidos por personalidades extravagantes e por uma visão grandiosa de honra e competição física.",
    "sourcePage": 432,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "432",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "ATAQUE DE DERRUBADA",
        "level": 3,
        "page": 432,
        "text": "Uma vez em cada um dos seus turnos, quando acertar um ataque corpo a corpo com arma, force o alvo a realizar uma salvaguarda de Força, CD 8 + seu modificador de Força + seu bônus de proficiência. Em caso de falha, além do dano normal, o alvo fica caído, a menos que seja duas ou mais categorias de tamanho maior que você. Se você estiver em Fúria, o alvo realiza essa salvaguarda com desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DEVASTAÇÃO COMPETITIVA",
        "level": 6,
        "page": 432,
        "text": "Em vez de entrar em uma Fúria comum, use uma ação bônus e gaste um uso de Fúria para entrar em Devastação Competitiva por 1 minuto. Durante ela: recebe 1d10 + seu nível de Bárbaro em pontos de vida temporários, que desaparecem ao fim; seus ataques com armas baseados em Força recebem um bônus igual ao bônus de dano da Fúria; todo dano que sofre é reduzido pelo seu modificador de Carisma; você tem vantagem em testes e salvaguardas de Força e em salvaguardas de Constituição; enquanto estiver Morrendo, ainda pode agir e não cai, e se falhar uma terceira salvaguarda contra a morte, a falha é anulada e a Devastação termina; e você ignora a penalidade da Fadiga de Combate em suas rolagens. Ao iniciar a Devastação, você pode desafiar criaturas que possam ouvi-lo em quantidade igual ao seu bônus de dano da Fúria. Cada uma realiza uma salvaguarda de Sabedoria contra sua Intimidação passiva. Em uma falha, deve aceitar o desafio e tem desvantagem em ataques contra criaturas que não sejam você enquanto a Devastação durar; contra o dano perfurante, cortante e contundente causado a você por essas criaturas desafiadas, você possui resistência. A Devastação termina se você ficar inconsciente, terminar seu turno sem inimigos à vista ou sem ter realizado ataques nem causado dano. Fúria e Devastação Competitiva não podem coexistir: iniciar uma encerra a outra. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência, independentemente dos usos restantes de Fúria. Fúria Persistente também se aplica à Devastação Competitiva.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RETALIAÇÃO ESTRONDOSA",
        "level": 10,
        "page": 432,
        "text": "Quando for atingido por um ataque que possa ver, use sua reação para reduzir o dano em 1d10 + seu nível de Bárbaro. Em seguida, se a fonte do ataque estiver ao alcance, você pode realizar contra ela um ataque com arma como parte da mesma reação. Depois, faça uma salvaguarda de Carisma CD 10; em caso de falha, recebe 1 ponto de Fadiga de Combate. Se já estiver no máximo de Fadiga, não pode usar esta reação. A CD aumenta em 2 cada vez que você obtém sucesso nessa salvaguarda e volta a 10 quando falhar ou concluir um Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 14,
        "page": 432,
        "text": "Quando realiza a ação Atacar em seu turno, você pode fazer três ataques com arma em vez de um.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-barbarian-sacred-obsidian",
    "classId": "barbarian",
    "name": "Obsidiana Sagrada",
    "originalName": "Sacred Obsidian",
    "aliases": [
      "Sacred Obsidian"
    ],
    "desc": "Ao cobrir a pele com tatuagens e símbolos arcanos feitos com a tinta especial expoentrum, alguns guerreiros transformam o próprio corpo em um escudo poderoso. A tinta incorporada ao corpo move-se intuitivamente para gerar transmutação temporária, convertendo a pele em uma substância carbonizada tão dura quanto aço. Essa arte pode ser usada ofensiva ou defensivamente, e seu domínio completo cria uma proteção quase autônoma.",
    "sourcePage": 433,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "433",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GOLPEAMENTO FURIOSO",
        "level": 3,
        "page": 433,
        "text": "Quando realiza a ação Atacar enquanto está em Fúria, você pode usar uma ação bônus para realizar dois ataques desarmados. Além disso, durante a Fúria, seus ataques desarmados causam 1d8 + seu modificador de Força de dano contundente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESCUDO DE CARBONO",
        "level": 6,
        "page": 433,
        "text": "Quando for atingido por um ataque, você pode usar sua reação para endurecer a pele no ponto de impacto, recebendo um bônus na Classe de Armadura igual ao seu bônus de proficiência. O bônus é aplicado inclusive contra o ataque desencadeador e permanece até o fim do turno. Você pode usar esta característica um número de vezes por Descanso Longo igual à metade do seu nível de Bárbaro, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESILIÊNCIA DE AÇO",
        "level": 10,
        "page": 433,
        "text": "Uma vez por Descanso Curto ou Longo, quando entrar em Fúria, você recebe pontos de vida temporários iguais ao dobro do seu nível de Bárbaro. Eles desaparecem após 1 minuto ou quando sua Fúria terminar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EVASÃO FERAL",
        "level": 14,
        "page": 433,
        "text": "Os encantamentos que protegem seu corpo tornam-se rápidos e autônomos o bastante para reagir a qualquer ameaça previsível. Sempre que realizar uma salvaguarda que permita sofrer metade do dano, você não sofre dano em caso de sucesso e sofre apenas metade em caso de falha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-bard-gambler",
    "classId": "bard",
    "name": "Apostador",
    "originalName": "Gambler",
    "aliases": [
      "Gambler"
    ],
    "desc": "A emoção de jogos de azar e decisões arriscadas atrai estes Bardos. Eles manipulam a própria sorte com palavras e performances, buscando resultados favoráveis sem eliminar o drama e a tensão da disputa. O Apostador é um estrategista que investe sorte sobrenatural em suas decisões, para o bem ou para o mal.",
    "sourcePage": 437,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "437",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MESTRE DOS JOGOS",
        "level": 3,
        "page": 437,
        "text": "Ao participar de um jogo de azar, astúcia ou estratégia, adicione seu bônus de proficiência aos testes relevantes se ele ainda não estiver sendo aplicado. Depois de observar uma partida de qualquer jogo uma vez, você compreende suas regras.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROBABILIDADES SELVAGENS",
        "level": 3,
        "page": 437,
        "text": "Quando uma criatura a até 18 metros aplicar sua Inspiração de Bardo a uma rolagem, você pode rolar 1d100 + seu nível de Bardo. Com 55 ou mais, o dado de Inspiração é tratado como tendo obtido seu resultado máximo; com resultado menor, a Inspiração é anulada completamente. Você deve decidir usar esta característica antes de ser declarado o sucesso da rolagem e não pode usá-la enquanto estiver incapacitado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "O QUE VAI, VOLTA",
        "level": 6,
        "page": 437,
        "text": "Sempre que o d20 de um ataque, teste de atributo ou salvaguarda mostrar 5 ou menos, seus d20 posteriores desses tipos passam a tratar o resultado como 1 ponto maior, até o máximo de 20. Se o resultado for 1, o bônus aumenta em 2 em vez de 1. O bônus acumulado pode chegar à metade do seu nível de Bardo, arredondado para baixo. Ele é perdido ao obter 20, ajustado ou natural, em uma dessas rolagens, ao obter um acerto crítico ou ao concluir um Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANIPULAR O SISTEMA",
        "level": 14,
        "page": 437,
        "text": "Enquanto uma criatura possuir uma Inspiração de Bardo sua ainda não gasta, ela nunca realiza ataques, testes de atributo ou salvaguardas com desvantagem. Se a rolagem normalmente teria desvantagem, ela também não pode receber vantagem nela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-bard-college-of-terpsichore",
    "classId": "bard",
    "name": "Colégio de Terpsícore",
    "originalName": "College of Terpsichore",
    "aliases": [
      "College of Terpsichore"
    ],
    "desc": "Bardos do Colégio de Terpsícore preservam histórias por meio da dança interpretativa e do movimento corporal. Eles treinam o corpo como um instrumento, usando coreografias precisas para evocar imagens, encantar e distrair. Sua tradição remonta a Terpsícore, uma antiga musa celestial associada à preservação de histórias e lendas.",
    "sourcePage": 434,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "434–435",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MOMENTO INSPIRADO",
        "level": 3,
        "page": 434,
        "text": "Sempre que usar uma ação bônus para conceder Inspiração de Bardo a outra criatura, você pode, como parte da mesma ação bônus, mover-se imediatamente até metade do seu deslocamento. Esse movimento não provoca ataques de oportunidade e não consome seu deslocamento do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXPRESSÃO INTERPRETATIVA",
        "level": 3,
        "page": 435,
        "text": "Enquanto não estiver incapacitado, você pode usar Destreza no lugar de Carisma em testes de Atuação. Além disso, enquanto não estiver impedido e tiver deslocamento maior que 0, suas magias de Bardo não exigem foco de conjuração nem componentes verbais; você as conjura por meio de movimentos corporais expressivos, normalmente dança.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DANÇA DA COERÇÃO",
        "level": 6,
        "page": 435,
        "text": "Como ação bônus, enquanto não estiver incapacitado nem agarrado, escolha uma criatura que possa vê-lo. Ela realiza uma salvaguarda de Sabedoria contra sua CD de magia. Em uma falha, fica enfeitiçada por 1 minuto e fascinada ou distraída por você. Você pode manter simultaneamente um número de criaturas enfeitiçadas dessa forma igual à metade do seu bônus de proficiência, arredondado para baixo. Se agir de modo diretamente prejudicial contra uma delas, o efeito termina para esse alvo. Uma criatura afetada rola 1d4 e subtrai o resultado de cada ataque, salvaguarda ou teste de atributo. No fim de cada turno, ela pode repetir a salvaguarda, com desvantagem se puder vê-lo. Ao obter sucesso, fica imune a esta característica por 24 horas. Se você ficar inconsciente, todos os efeitos terminam. No 14º nível de Bardo, o dado subtraído passa de d4 para d6.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INTERVENÇÃO RETORCIDA",
        "level": 6,
        "page": 435,
        "text": "Quando uma criatura a até 18 metros tentar conjurar uma magia, realizar a ação Atacar ou usar uma característica que exija uma jogada de ataque, você pode usar sua reação para interferir. Ela realiza uma salvaguarda de Carisma contra sua CD de magia, com desvantagem se estiver enfeitiçada por você. Em uma falha, não realiza a ação pretendida e, se possível, deve escolher outra. Você precisa usar esta característica antes de conhecer o resultado de ataques ou salvaguardas ligados ao efeito e antes que seus efeitos sejam resolvidos. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TERPSICOREANO MAGISTRAL",
        "level": 14,
        "page": 435,
        "text": "Ao conjurar uma magia que gaste um espaço de magia, você também pode realizar um ataque com arma como parte da mesma ação. A arma deve ser de uma mão à distância/arremesso ou possuir a propriedade acuidade ou leve. Você pode rolar um dado equivalente ao seu dado de Inspiração de Bardo e somá-lo à jogada desse ataque.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-bard-college-of-the-divine-minstral",
    "classId": "bard",
    "name": "Colégio do Menestrel Divino",
    "originalName": "College of the Divine Minstral",
    "aliases": [
      "College of the Divine Minstral"
    ],
    "desc": "Esses Bardos estudam o legado de T’quinn na Capital Itoniana e incorporam seus mitos e cânticos à própria magia, reproduzindo sua velocidade, duplicidade e poder trovejante. Suas músicas religiosas são remixadas em novas composições, e suas vozes às vezes parecem cantar em harmonia consigo mesmas.",
    "sourcePage": 435,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "435–436",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SINCRONIA DIVIDIDA",
        "level": 3,
        "page": 435,
        "text": "Você pode conceder Inspiração de Bardo usando uma ação em vez de uma ação bônus. Ao fazê-lo, escolha dois alvos dentro do alcance: ambos recebem sua Inspiração, mas você gasta apenas um uso e reduz o dado da seguinte forma: d6 vira d4; d8 ou d10 vira d6; d12 vira d8. Você não pode conceder Inspiração com ação e ação bônus no mesmo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ACORDE CELESTIAL",
        "level": 6,
        "page": 435,
        "text": "Como ação, toque um acorde poderoso com um instrumento, acompanhado brevemente por uma orquestra fantasma. Escolha criaturas a até 9 metros em quantidade igual ao seu bônus de proficiência. Cada uma recebe um uso de Acorde Celestial, que desaparece quando usado ou após 1 minuto, e uma criatura só pode ter um por vez. Enquanto não estiver incapacitada, ela pode gastar o Acorde para: obter vantagem em uma salvaguarda, declarando antes da rolagem; ao acertar um ataque com arma, causar dano trovejante adicional igual a um dado da sua Inspiração de Bardo; ou realizar a ação Disparada como ação bônus. Usos por Descanso Longo iguais à metade do seu nível de Bardo, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE INSPIRADO",
        "level": 14,
        "page": 436,
        "text": "Quando uma criatura que possui um dos seus dados de Inspiração de Bardo realiza a ação Atacar, ela pode gastar a Inspiração como ação bônus para fazer um ataque com arma adicional, devendo aplicar o dado de Inspiração à jogada desse ataque.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRESENÇA SIMPÁTICA",
        "level": 14,
        "page": 436,
        "text": "Quando uma criatura atacar você e houver uma criatura aliada a até 1,5 metro de você ou do atacante, sem estar incapacitada, o atacante realiza o ataque com desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-bard-college-of-the-old-world",
    "classId": "bard",
    "name": "Colégio do Velho Mundo",
    "originalName": "College of the Old World",
    "aliases": [
      "College of the Old World"
    ],
    "desc": "Bardos que mergulham na história perdida da Era da Cisão tornam sua arte um reflexo da tragédia, da bravura e da ferocidade daquele período em que a humanidade quase foi extinta e os antigos deuses foram destruídos. Essas histórias impregnam suas canções com força psíquica.",
    "sourcePage": 436,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "436",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANÇÃO DA CORAGEM",
        "level": 3,
        "page": 436,
        "text": "Uma criatura que possua sua Inspiração de Bardo pode rolar o dado e somá-lo a qualquer salvaguarda para evitar ficar enfeitiçada ou amedrontada. Usar a Inspiração dessa forma não a gasta.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INFLUÊNCIA TRÁGICA",
        "level": 3,
        "page": 436,
        "text": "Quando causar dano a uma criatura com uma magia, você pode converter brevemente o efeito em uma recriação ilusória de um evento da Era da Cisão. O dano torna-se psíquico e você soma seu nível de Bardo ao dano. Se a magia causar dano várias vezes, o benefício vale apenas para uma ocorrência contra um alvo; o restante da magia funciona normalmente. Usos por Descanso Curto ou Longo iguais à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANÇÃO DA LIBERDADE",
        "level": 6,
        "page": 436,
        "text": "Uma criatura que possua sua Inspiração de Bardo pode usar uma ação bônus para realizar Desengajar ou libertar-se de um efeito que a esteja agarrando ou restringindo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANÇÃO DA ANIQUILAÇÃO CÓSMICA",
        "level": 14,
        "page": 436,
        "text": "Como ação, execute uma canção de devastação. Criaturas à sua escolha a até 9 metros realizam uma salvaguarda de Carisma. Em uma falha, por 1 minuto sofrem, no início de cada turno, dano psíquico igual a uma rolagem do seu dado de Inspiração de Bardo. Podem repetir a salvaguarda ao fim de cada turno, encerrando o efeito em um sucesso. Se uma criatura afetada estiver a até 9 metros, você pode usar uma ação bônus para intensificar suas visões; ela realiza uma salvaguarda de Sabedoria ou fica atordoada até o fim do próximo turno dela. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-bard-wild-erudite",
    "classId": "bard",
    "name": "Erudito Selvagem",
    "originalName": "Wild Erudite",
    "aliases": [
      "Wild Erudite"
    ],
    "desc": "O Erudito Selvagem estuda relatos de monstros, guerreiros lendários e grandes batalhas para descobrir como enfrentá-los. Suas canções transmitem esse conhecimento aos companheiros e transformam pesquisa histórica em vantagem tática.",
    "sourcePage": 437,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "437–438",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PESQUISA DAS LENDAS",
        "level": 3,
        "page": 437,
        "text": "Você ganha Especialização em Natureza. Como ação bônus, escolha uma criatura não humanoide que possa ver a até 18 metros e faça um teste de Natureza com CD igual ao ND da criatura + 10. Em um sucesso, role 1d6 um número de vezes igual à metade do seu bônus de proficiência, arredondado para baixo, e obtenha para cada rolagem uma informação correspondente: 1) CA e deslocamentos; 2) salvaguardas em que é proficiente; 3) imunidades, resistências, tipos de dano e limiar de dano; 4) presença de resistência mágica, imunidade mágica, táticas de matilha, evasão, crítico aprimorado, crítico superior ou regeneração; 5) tipo(s) e alinhamento; 6) uma informação tática crítica — por 1 minuto, você e criaturas que possuam sua Inspiração de Bardo têm vantagem na primeira jogada de ataque, teste de atributo ou salvaguarda contra esse inimigo em cada turno. Além disso, quando uma criatura usar sua Inspiração de Bardo para acertar uma criatura dentro desse alcance, você pode rolar 1d6 e aprender automaticamente uma das informações correspondentes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GUERREIRO TREINADO",
        "level": 3,
        "page": 438,
        "text": "Você ganha proficiência com armaduras leves, escudos e armas marciais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE MÁGICO",
        "level": 6,
        "page": 438,
        "text": "Quando conjurar uma magia com tempo de conjuração de 1 ação, você pode realizar um ataque com arma como parte da mesma ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SÁBIO SITUACIONAL",
        "level": 6,
        "page": 438,
        "text": "Se uma criatura que possua sua Inspiração de Bardo realizar um ataque que tenha desvantagem por estar no alcance longo de uma arma, por cobertura ou por uma condição ambiental, como combate subaquático, ela pode, antes do ataque, aplicar sua Inspiração normalmente e também ignorar a desvantagem causada por esses fatores.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CERTEZA ABSOLUTA",
        "level": 14,
        "page": 438,
        "text": "Quando você ou um aliado a até 18 metros acertar uma criatura com um ataque, você pode gastar um uso de Inspiração de Bardo como reação para fazer esse ataque, e todos os demais ataques do mesmo atacante contra esse alvo durante o turno, ignorarem resistências e tratarem imunidades como resistências. Se o aliado já possuir sua Inspiração e aplicá-la ao ataque, ele recebe o mesmo benefício para esse ataque e os demais contra o alvo no turno, sem exigir sua reação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-cleric-bard-beloved",
    "classId": "cleric",
    "name": "Amado do Bardo",
    "originalName": "Bard Beloved",
    "aliases": [
      "Bard Beloved"
    ],
    "desc": "Membros do Coro dos Ídolos que servem T’quinn, carregando seu domínio sobre som, celebração e inspiração. Costumam usar vestes verdes e douradas, viajar em pares e passar o tempo cantando e se apresentando. Magias de Domínio — 1º: Destruição Silenciadora, Onda Trovejante; 3º: Arma Bumerangue, Canção de Inspiração; 5º: Piscar, Enviar Mensagem; 7º: Invisibilidade Maior, Espiral Trovejante; 9º: Passo Fantasma, Arma Ressonante.",
    "sourcePage": 441,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "441",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 1,
        "page": 441,
        "text": "Você ganha proficiência em Acrobacia e Atuação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPES RÁPIDOS",
        "level": 1,
        "page": 441,
        "text": "Quando acerta uma criatura com uma arma leve, pode usar sua ação bônus para fazer mais dois ataques contra ela com a mesma arma. Usos por Descanso Longo iguais ao seu modificador de Destreza, mínimo 1.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: SOM DO SILÊNCIO",
        "level": 2,
        "page": 441,
        "text": "Como ação, golpeie um objeto e produza um toque ensurdecedor. Escolha criaturas a até 9 metros em quantidade igual à metade do seu nível de Clérigo, arredondado para baixo. Cada alvo faz salvaguarda de Constituição; em falha sofre 4d8 de dano trovejante, fica surdo por 1 minuto e perde concentração em quaisquer magias ou efeitos; em sucesso sofre metade e não fica surdo. Alvos surdos repetem a salvaguarda no fim de cada turno. Você pode reduzir a quantidade de alvos até no mínimo metade do máximo, arredondado para baixo, aumentando o dano em 1d8 para cada alvo removido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: CONCORDÂNCIA INSPIRADA",
        "level": 6,
        "page": 441,
        "text": "Como ação, conecte-se a até quatro criaturas voluntárias a até 9 metros por até 1 minuto. Ao formar a conexão, gere uma quantidade de Dados de Concordância d6 igual ao seu bônus de proficiência. Quando qualquer criatura conectada realiza ataque ou salvaguarda, ela pode gastar um dado e somá-lo à rolagem. Você também pode usar sua reação para gastar um dado por ela, acumulando-se com um dado que ela mesma use. O efeito termina quando todos os dados forem gastos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DIVINO (TROVEJANTE)",
        "level": 8,
        "page": 441,
        "text": "Uma vez em cada um de seus turnos, ao acertar uma criatura com ataque de arma, cause 1d8 de dano trovejante adicional. No 14º nível de Clérigo, aumenta para 2d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONCORDÂNCIA MAIOR",
        "level": 17,
        "page": 441,
        "text": "Seus Dados de Concordância tornam-se d8. Além disso, você pode usar Concordância Inspirada uma vez por Descanso Longo sem gastar Canalizar Divindade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 441,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Destruição Silenciadora; Onda Trovejante"
          },
          {
            "level": "3º",
            "spells": "Arma Bumerangue; Canção de Inspiração"
          },
          {
            "level": "5º",
            "spells": "Piscar; Enviar Mensagem"
          },
          {
            "level": "7º",
            "spells": "Invisibilidade Maior; Espiral Trovejante"
          },
          {
            "level": "9º",
            "spells": "Passo Fantasma; Arma Ressonante"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-sorcery-domain",
    "classId": "cleric",
    "name": "Domínio da Feitiçaria",
    "originalName": "Sorcery Domain",
    "aliases": [
      "Sorcery Domain"
    ],
    "desc": "Clérigos da Feitiçaria moldam energia caótica com auxílio divino, aproximando-se de Feiticeiros. Muitos usam esse domínio para reacender uma linhagem mágica enfraquecida. Seus corpos costumam ser tatuados com expoentrum representando as magias aprendidas. Este domínio não possui Magias de Domínio.",
    "sourcePage": 449,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "449",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FEITIÇARIA DIVINA",
        "level": 1,
        "page": 449,
        "text": "Escolha duas magias de 1º nível e um truque da lista de Feiticeiro. Você os aprende como magias de Clérigo, sempre preparadas e sem exigir preparação, sendo chamadas de suas Magias de Feitiçaria. Sempre que alcança um nível ímpar nesta classe, aprende dessa forma mais uma magia da lista de Feiticeiro para a qual possua espaços. Sempre que ganha em qualquer classe um nível que conceda Aumento no Valor de Atributo, pode substituir duas Magias de Feitiçaria por outras duas que possa aprender.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SOBREPOSIÇÃO MEMÉTICA",
        "level": 1,
        "page": 449,
        "text": "Você ganha proficiência em Arcanismo. Se um item, característica ou efeito exigir ou escolher especificamente Feiticeiros, pode contar como Feiticeiro, tratando seu nível de Clérigo como nível de Feiticeiro para esse fim.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: CONJURAÇÃO EXPLOSIVA",
        "level": 2,
        "page": 449,
        "text": "Use Canalizar Divindade para conjurar uma de suas Magias de Feitiçaria sem gastar espaço. Ela é conjurada em nível igual à metade do seu nível de Clérigo, arredondado para baixo, máximo 9º, e não requer componentes verbais ou somáticos. Pela sutileza, não pode ser alvo de Contramágica, exceto por alguém com visão verdadeira usando Contramágica Verdadeira. O tempo de conjuração normal ainda é exigido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "METAMAGIA MENOR",
        "level": 6,
        "page": 449,
        "text": "Escolha duas opções de Metamagia da classe Feiticeiro. Você é considerado como possuindo Pontos de Feitiçaria iguais ao seu bônus de proficiência, recuperados ao terminar um Descanso Longo. Pode usar essas Metamagias em suas magias de Clérigo e Magias de Feitiçaria. Sempre que ganha nível nesta classe, pode trocar uma opção por outra.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FEITIÇARIA POTENTE",
        "level": 8,
        "page": 449,
        "text": "Você soma seu modificador de Sabedoria ao dano em dados de qualquer truque de Clérigo ou Magia de Feitiçaria que conjure.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: IMUNIDADE MÁGICA LIMITADA",
        "level": 17,
        "page": 449,
        "text": "Como ação, use Canalizar Divindade para envolver-se por 1 minuto em proteção divina. Durante esse período, você não pode ser afetado nem escolhido como alvo por magias de 5º nível ou inferior, a menos que queira. Se ficar inconsciente, passa a ser voluntário para magias que restaurariam seus pontos de vida. Também tem vantagem em salvaguardas contra efeitos mágicos. A proteção não interfere em magias originadas de artefatos, divindades ou entidades semelhantes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-cleric-honor-domain",
    "classId": "cleric",
    "name": "Domínio da Honra",
    "originalName": "Honor Domain",
    "aliases": [
      "Honor Domain"
    ],
    "desc": "Clérigos da Honra são guerreiros de convicção inabalável, críticos daqueles que quebram a palavra e incapazes de trair aliados por coerção. Suas promessas carregam poder sagrado. Magias de Domínio — 1º: Inimigo Dedicado, Escudo do Verão; 3º: Localizar Objetos, Arma Espiritual; 5º: Alvo Mortal, Corcel Fantasmagórico; 7º: Salvaguarda contra a Morte, Bravura Desatada; 9º: Missão, Espiral Dourada.",
    "sourcePage": 445,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "445–446",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 1,
        "page": 445,
        "text": "Você ganha proficiência com armaduras pesadas e na perícia Intimidação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INTEGRIDADE",
        "level": 1,
        "page": 445,
        "text": "Você tem vantagem em salvaguardas contra ficar enfeitiçado ou enfurecido, e nenhum efeito pode obrigá-lo a atacar ou ferir uma criatura que normalmente consideraria aliada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: PROMESSA DO CAMPEÃO",
        "level": 2,
        "page": 446,
        "text": "Como ação, use Canalizar Divindade para fazer uma promessa a uma criatura a até 9 metros e escolha um efeito por 1 minuto; ele permanece enquanto você estiver a até 9 metros do alvo e não estiver incapacitado/inconsciente, sendo apenas suspenso quando estiver mais longe. Desafio: o alvo tem desvantagem em ataques exceto contra você. Derrota: você tem vantagem em ataques contra o alvo. Destruição: seus ataques contra ele causam dano adicional igual à metade do nível de Clérigo. Guardião: o alvo soma seu bônus de proficiência à CA contra o primeiro ataque que o escolher em cada turno. Fardo Compartilhado: o alvo é resistente a todo dano, mas sempre que sofre dano você sofre a mesma quantidade. Inabalável: se o alvo reduzir você ou um aliado a até 9 metros a 0 PV, a criatura fica com 1 PV em vez disso e o efeito termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "JURAMENTO DE DEFENDER",
        "level": 6,
        "page": 446,
        "text": "Quando um aliado a até 18 metros é alvo de um ataque ou efeito com salvaguarda, use sua reação para mover-se até seu deslocamento na direção dele. Se terminar adjacente, conceda ao aliado um bônus igual ao seu modificador de Sabedoria na CA ou na salvaguarda. Usos por Descanso Longo iguais ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DIVINO (FOGO)",
        "level": 8,
        "page": 446,
        "text": "Uma vez em cada um de seus turnos, ao acertar com ataque de arma, cause 1d8 de dano de fogo adicional. No 14º nível, aumenta para 2d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VISÃO VERDADEIRA",
        "level": 17,
        "page": 446,
        "text": "Você ganha visão verdadeira de 9 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 445,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Inimigo Dedicado; Escudo do Verão"
          },
          {
            "level": "3º",
            "spells": "Localizar Objetos; Arma Espiritual"
          },
          {
            "level": "5º",
            "spells": "Alvo Mortal; Corcel Fantasmagórico"
          },
          {
            "level": "7º",
            "spells": "Salvaguarda contra a Morte; Bravura Desatada"
          },
          {
            "level": "9º",
            "spells": "Missão; Espiral Dourada"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-music-domain",
    "classId": "cleric",
    "name": "Domínio da Música",
    "originalName": "Music Domain",
    "aliases": [
      "Music Domain"
    ],
    "desc": "Clérigos da Música tratam som e comunicação como forças fundamentais. Canções e acordes encantados acalmam mentes, inspiram aliados e guiam ataques. Magias de Domínio — 1º: Rito Cerimonial, Riso Histérico; 3º: Encantar, Sugestão; 5º: Voo, Palavra de Poder: Repelir; 7º: Movimentação Livre, Espiral Trovejante; 9º: Dissipar o Bem e o Mal, Palavra de Poder: Quebrar.",
    "sourcePage": 446,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "446–447",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 1,
        "page": 446,
        "text": "Você ganha proficiência em Atuação e em um instrumento à sua escolha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ACORDE DE PROTEÇÃO",
        "level": 1,
        "page": 446,
        "text": "Como ação, use um instrumento para manifestar uma melodia protetora. Escolha até um número de criaturas a até 9 metros igual ao seu modificador de Sabedoria, podendo incluir você, e aplique um dos seguintes benefícios até o fim do seu próximo turno: o próximo ataque contra cada criatura tem desvantagem; o próximo ataque de cada criatura recebe bônus igual ao seu modificador de Sabedoria; deslocamento de cada criatura aumenta em 3 metros; ou cada criatura recebe resistência à próxima instância de dano que sofrer, salvo se já fosse imune. Usos por Descanso Longo iguais ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: RELATO HEROICO",
        "level": 2,
        "page": 446,
        "text": "Passe 1 minuto tocando instrumento e narrando uma história inspiradora e, ao final, gaste Canalizar Divindade. Até seis criaturas que ouvirem durante todo o minuto aumentam o máximo de pontos de vida em 1d6 × seu bônus de proficiência e recuperam a mesma quantidade. O aumento termina quando a criatura conclui um Descanso Curto ou Longo ou tem o máximo de PV aumentado por outro efeito.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MEIO UNIVERSAL",
        "level": 6,
        "page": 447,
        "text": "Você entende qualquer idioma falado em voz alta e criaturas conseguem compreender qualquer idioma que você fale. Essa comunicação se baseia em intenção; seres incapazes de compreender seu estado emocional ou com Inteligência 3 ou menor entendem apenas de modo geral. Você também tem vantagem em testes baseados em Carisma que envolvam tocar música ou cantar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONJURAÇÃO PROFICIENTE",
        "level": 8,
        "page": 447,
        "text": "Você soma seu modificador de Sabedoria ao dano causado por suas magias de Clérigo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: GANHO NO 11",
        "level": 17,
        "page": 447,
        "text": "Quando você ou uma criatura a até 9 metros acerta uma jogada de ataque, use Canalizar Divindade como reação para produzir uma orquestra inspiradora ou uma cacofonia perturbadora. A primeira transforma o acerto em crítico e maximiza os dados de dano do ataque; a segunda transforma o ataque em erro. Dois usos por Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 446,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Rito Cerimonial; Riso Histérico"
          },
          {
            "level": "3º",
            "spells": "Encantar; Sugestão"
          },
          {
            "level": "5º",
            "spells": "Voo; Palavra de Poder: Repelir"
          },
          {
            "level": "7º",
            "spells": "Movimentação Livre; Espiral Trovejante"
          },
          {
            "level": "9º",
            "spells": "Dissipar o Bem e o Mal; Palavra de Poder: Quebrar"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-forbiddance-domain",
    "classId": "cleric",
    "name": "Domínio da Proibição",
    "originalName": "Forbiddance Domain",
    "aliases": [
      "Forbiddance Domain"
    ],
    "desc": "Guardiões de segredos e conhecimento proibido, estes Clérigos policiam a fronteira entre saber útil e poder perigoso. São comuns entre o Clero Vinculado à Magia de Vestias e entre seguidores de Correfonts. Magias de Domínio — 1º: Infligir Terror, Escudo; 3º: Invisibilidade, Sugestão; 5º: Dissipar Magia, Indetectabilidade; 7º: Invisibilidade Maior, Silêncio Perfeito; 9º: Animar Objetos, Modificar Memória.",
    "sourcePage": 445,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "445",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 1,
        "page": 445,
        "text": "Você ganha proficiência em Enganação e Furtividade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PALAVRAS SOBREPOSTAS",
        "level": 1,
        "page": 445,
        "text": "Ao falar, você pode sobrepor duas mensagens e decidir quem ouve cada uma. Um conjunto de ouvintes escuta a primeira mensagem enquanto todos os demais ouvem a segunda, sem perceber a outra. Se as mensagens tiverem discrepâncias perceptíveis de duração ou alguém observar atentamente seus lábios e notar incompatibilidade, a criatura pode realizar Intuição contra sua Enganação passiva para perceber que algo está errado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: DOMINAÇÃO BARATA",
        "level": 2,
        "page": 445,
        "text": "Quando uma criatura entra em um espaço a até 9 metros, use sua reação e Canalizar Divindade para forçá-la a realizar salvaguarda de Sabedoria. Em falha, fica atordoada por 1 minuto, repetindo a salvaguarda no fim de cada turno e sempre que sofre dano. Quando ela fosse obter sucesso por causa de dano, você pode usar sua reação para fazê-la falhar em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MENTE TRANCADA",
        "level": 6,
        "page": 445,
        "text": "Você ganha proficiência em salvaguardas de Inteligência. Uma vez por Descanso Curto ou Longo, quando falha em salvaguarda de Sabedoria ou Carisma, use sua reação para somar seu modificador de Inteligência ao resultado, possivelmente alterando-o.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DIVINO (ELÉTRICO)",
        "level": 8,
        "page": 445,
        "text": "Uma vez em cada um de seus turnos, ao acertar com ataque de arma, cause 1d8 de dano elétrico adicional. No 14º nível, aumenta para 2d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PEGADA TELEPORTADORA",
        "level": 17,
        "page": 445,
        "text": "Você ganha deslocamento de teleporte igual ao seu deslocamento base.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 445,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Infligir Terror; Escudo"
          },
          {
            "level": "3º",
            "spells": "Invisibilidade; Sugestão"
          },
          {
            "level": "5º",
            "spells": "Dissipar Magia; Indetectabilidade"
          },
          {
            "level": "7º",
            "spells": "Invisibilidade Maior; Silêncio Perfeito"
          },
          {
            "level": "9º",
            "spells": "Animar Objetos; Modificar Memória"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-ages-domain",
    "classId": "cleric",
    "name": "Domínio das Eras",
    "originalName": "Ages Domain",
    "aliases": [
      "Ages Domain"
    ],
    "desc": "O Domínio das Eras preserva e aplica o conhecimento acumulado por gerações, separando fato de ficção e encontrando padrões úteis em cura, ofício e combate. Magias de Domínio — 1º: Compreender Idiomas, Magia de Vínculo; 3º: Tela de Nuvens, Mensagem Embutida; 5º: Falar com os Mortos, Mandado Forense; 7º: Adivinhação, Santuário Privado; 9º: Vidência, Conceder Especialização.",
    "sourcePage": 440,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "440",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 1,
        "page": 440,
        "text": "Você ganha proficiência em História e Investigação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MARCADOR MENTAL",
        "level": 1,
        "page": 440,
        "text": "Você estudou uma enorme variedade de assuntos. Quando realiza um teste de perícia, pode recorrer a conhecimento pertinente, rolar um novo d20 e escolher qual resultado usar. Usos por Descanso Longo iguais à metade do seu nível de Clérigo, arredondado para cima.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: RELATO REGRESSIVO",
        "level": 2,
        "page": 440,
        "text": "Quando uma magia ou efeito com duração originado de você estiver prestes a terminar — por dissipação, fim da duração ou perda de concentração — use sua reação e Canalizar Divindade para renovar sua duração e continuar o efeito, inclusive retomando concentração se necessário. Se a duração original for maior que 10 minutos, a nova duração é 10 minutos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXPLORAR PADRÕES",
        "level": 6,
        "page": 440,
        "text": "Quando uma criatura que acertou ou causou dano a você desde o fim do seu último turno escolher você como alvo de um ataque com arma ou obrigá-lo a fazer uma salvaguarda, use sua reação para impor desvantagem a todos os ataques dela contra você, inclusive o desencadeador, e ganhar vantagem em todas as salvaguardas contra ela até o início do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONJURAÇÃO PROFICIENTE",
        "level": 8,
        "page": 440,
        "text": "Você soma seu modificador de Sabedoria ao dano em dados causado por suas magias de Clérigo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: RECONTAR O TOTAL",
        "level": 17,
        "page": 440,
        "text": "Quando uma criatura a até 9 metros rola qualquer quantidade de dados para dano ou cura, use Canalizar Divindade para alterar o resultado. Role metade dos dados da rolagem desencadeadora, arredondado para cima, e aumente ou reduza o total final pelo valor obtido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 440,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Compreender Idiomas; Magia de Vínculo"
          },
          {
            "level": "3º",
            "spells": "Tela de Nuvens; Mensagem Embutida"
          },
          {
            "level": "5º",
            "spells": "Falar com os Mortos; Mandado Forense"
          },
          {
            "level": "7º",
            "spells": "Adivinhação; Santuário Privado"
          },
          {
            "level": "9º",
            "spells": "Vidência; Conceder Especialização"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-chaos-domain",
    "classId": "cleric",
    "name": "Domínio do Caos",
    "originalName": "Chaos Domain",
    "aliases": [
      "Chaos Domain"
    ],
    "desc": "Clérigos do Caos canalizam explosões imprevisíveis de magia e, paradoxalmente, costumam estudar essa força para mantê-la sob controle no mundo. Magias de Domínio — 1º: Absorver Energia, Repreensão Infernal; 3º: Arma Bumerangue, Voo Laborioso; 5º: Padrão Hipnótico, Imagem Maior; 7º: Confusão, Lança Psíquica; 9º: Reencarnação, Vínculo Telepático.",
    "sourcePage": 442,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "442",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CAOS CELESTIAL",
        "level": 1,
        "page": 442,
        "text": "Como ação bônus, invoque uma oração caótica e role na Tabela de Caos Celestial, sendo obrigado a aplicar o resultado. Você pode fazê-lo um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Role d8 no 1º nível, d12 a partir do 8º e d20 a partir do 14º. Quando obtém 1 ou 20 natural em uma jogada de ataque ou salvaguarda usando d20, pode rolar na tabela sem gastar uso. Teste de Sustentação do Caos: quando um resultado pedir esse teste, role 1d100 menos seu nível de Clérigo; com 51 ou mais, o efeito termina. Tabela d20 — 1: ganha por 1 minuto um espaço extra de nível igual ao bônus de proficiência e então rola novamente, ignorando 1/20; 2: por 1 minuto, ao usar Atacar, faz um ataque com arma adicional por um duplo angelical; 3: por 1 minuto um guardião dá desvantagem aos ataques contra uma criatura a até 9 m, com teste de sustentação no início dos seus turnos; 4: todas as outras criaturas em raio de 1,5 m × seu bônus de proficiência fazem salvaguarda de Destreza e sofrem 2d8 + metade do nível de Clérigo de dano radiante em falha; 5: ganha voo com pairar igual ao deslocamento base por 1 minuto, fazendo teste de sustentação sempre que sofre dano; 6: torna-se por 1 minuto um arconte-lanterna com 30 PV, mantendo personalidade e usando todas as estatísticas dele, retornando ao chegar a 0 PV ou morrer; 7: até o início do próximo turno emite luz intensa em 9 m e fica cego; quem o atacar deve desviar o olhar ou ficar cego até o efeito terminar, e quem desvia trata você como se estivesse invisível para ele; 8: escolha criaturas a até 9 m em quantidade igual ao bônus de proficiência; no próximo ataque que cada uma fizer em até 1 minuto, role 1d10 e some a esse e a todos os demais ataques dela naquele turno; 9: no próximo dano que causar em até 1 minuto por ataque ou efeito com salvaguarda, some uma quantidade de d8 igual à metade do nível de Clérigo; 10: por 1 minuto fica imune ao próximo tipo de dano que sofrer, escolhendo o tipo de maior dano se houver vários; 11: por 10 minutos perde a capacidade de compreender idiomas ou comunicação física, embora ainda fale; Restauração Menor, Restauração Maior ou efeito que encerre enfeitiçado termina isso; 12: conjura sem espaço qualquer magia de Clérigo preparada de ação ou ação bônus, como se usasse espaço de nível igual ao bônus de proficiência, salvo se o nível base for maior; 13: fica vulnerável a todo dano do próximo ataque ou efeito que o danificar; 14: fica resistente a todo dano, com teste de sustentação no início de cada turno; 15: uma criatura a até 18 m faz salvaguarda de Carisma e, em falha, fica enfeitiçada ou atordoada por você por 1 minuto, à sua escolha, repetindo a salvaguarda ao fim dos turnos; 16: desaparece em semiplano inofensivo contido em uma bola de cristal portátil que cai em seu espaço; a bola tem CA 20, 10 PV, resistência a perfurante/cortante e imunidade a necrótico/psíquico; ao quebrar você retorna ao espaço desocupado mais próximo, e enquanto preso rola 1d6 no início do turno, quebrando-a com 6; 17: até o fim do próximo turno ganha deslocamento de teleporte igual ao base e realiza Disparada imediatamente; 18: fica imune a todo dano do próximo ataque que acertar ou efeito com salvaguarda que causar dano, por no máximo 1 minuto; 19: por 1 minuto recupera 2d6 PV no início do turno, inclusive se inconsciente, e nesse caso deixa de morrer e o efeito termina; faz teste de sustentação no fim dos turnos; 20: ganha por 1 minuto um uso extra de Canalizar Divindade que deve ser gasto primeiro e então rola novamente ignorando 1/20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SIFÃO DE PROBABILIDADE",
        "level": 2,
        "page": 442,
        "text": "Sempre que invoca um resultado da Tabela de Caos Celestial, você também ganha pontos de vida temporários iguais ao número obtido na tabela.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: ALINHAMENTO DO CAOS",
        "level": 6,
        "page": 442,
        "text": "Como ação, use Canalizar Divindade para rolar três vezes na Tabela de Caos Celestial, repetindo resultados 1 ou 20 até obter outro, e escolha um dos três efeitos para ocorrer.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DO CAOS",
        "level": 8,
        "page": 442,
        "text": "Quando acerta com uma arma ainda não afetada por esta característica, pode imbuí-la por 1 minuto com energia caótica. Enquanto você a empunhar, ela causa 1d8 de dano adicional, aumentando para 2d8 no 14º nível. Role 1d10 para o tipo: 1 ácido; 2 frio; 3 fogo; 4 energia; 5 elétrico; 6 necrótico; 7 veneno; 8 psíquico; 9 radiante; 10 trovejante.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAOS PERSISTENTE",
        "level": 17,
        "page": 442,
        "text": "Sempre que rola iniciativa sem possuir usos de Caos Celestial, recupera um uso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 442,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Absorver Energia; Repreensão Infernal"
          },
          {
            "level": "3º",
            "spells": "Arma Bumerangue; Voo Laborioso"
          },
          {
            "level": "5º",
            "spells": "Padrão Hipnótico; Imagem Maior"
          },
          {
            "level": "7º",
            "spells": "Confusão; Lança Psíquica"
          },
          {
            "level": "9º",
            "spells": "Reencarnação; Vínculo Telepático"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-record-domain",
    "classId": "cleric",
    "name": "Domínio do Registro",
    "originalName": "Record Domain",
    "aliases": [
      "Record Domain"
    ],
    "desc": "Também associado ao tempo e à história, o Domínio do Registro observa cada segundo e as correntes da causalidade. Seus Clérigos enxergam passado e futuro de forma limitada, evitando abusar da previsão para não cristalizar possibilidades em certezas. Magias de Domínio — 1º: Retirada Acelerada, Mandado de Marcador; 3º: Aceleração, Projetar Imagem; 5º: Velocidade, Caminho para a Vitória; 7º: Movimentação Livre, Localizar Criatura; 9º: Conhecimento Lendário, Reencarnação.",
    "sourcePage": 447,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "447",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "OLHO DO TEMPO",
        "level": 1,
        "page": 447,
        "text": "Você não pode ser surpreendido em combate, tem vantagem em iniciativa e não sofre os efeitos negativos posteriores da magia Velocidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: INSTINTOS CRONAIS",
        "level": 2,
        "page": 447,
        "text": "Quando falha em uma salvaguarda de Destreza ou é atingido por um ataque, use Canalizar Divindade e sua reação para entrar por 1 minuto em estado temporal deslocado. Enquanto estiver nele, tem vantagem em salvaguardas de Destreza, inclusive contra o efeito desencadeador. Se for atingido por ataque, pode usar reação para somar seu bônus de proficiência à CA até o fim daquele turno, inclusive contra o ataque desencadeador e o ataque que iniciou o estado. Se ainda for atingido depois dessa reação, o estado termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TROCA PRECIOSA",
        "level": 6,
        "page": 447,
        "text": "Quando conjura uma magia que consumiria um componente, pode puxar uma aproximação desse componente de um eco seu em outro momento e ignorar a necessidade. O componente pode valer no máximo 100 po × seu nível de Clérigo. Se não for usado imediatamente, permanece por 1 minuto e desaparece. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE RADIANTE",
        "level": 8,
        "page": 447,
        "text": "Uma vez em cada um de seus turnos, ao acertar com ataque de arma, cause 1d8 de dano radiante adicional. No 14º nível, aumenta para 2d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: VISÃO ALÉM DO TEMPO",
        "level": 17,
        "page": 447,
        "text": "Ao fim do seu turno, use Canalizar Divindade e escolha duas criaturas com contagens de iniciativa diferentes. Em cada uma dessas contagens, depois do turno da criatura e de eventuais Ações Lendárias, você recebe um turno adicional. Se for impedido de usar um desses turnos, ele é perdido. Efeitos que normalmente ocorrem no início ou fim do seu turno, como dano contínuo e salvaguardas recorrentes, não se repetem nesses turnos; efeitos dependentes de uma salvaguarda mantêm seu último resultado. Uma vez por Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 447,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Retirada Acelerada; Mandado de Marcador"
          },
          {
            "level": "3º",
            "spells": "Aceleração; Projetar Imagem"
          },
          {
            "level": "5º",
            "spells": "Velocidade; Caminho para a Vitória"
          },
          {
            "level": "7º",
            "spells": "Movimentação Livre; Localizar Criatura"
          },
          {
            "level": "9º",
            "spells": "Conhecimento Lendário; Reencarnação"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-resplendent",
    "classId": "cleric",
    "name": "Resplandecente",
    "originalName": "Resplendent",
    "aliases": [
      "Resplendent"
    ],
    "desc": "Os Resplandecentes são os membros considerados mais “toleráveis” do Clero Nascido da Magia de Vestias. Temem a magia tanto quanto a reverenciam e costumam retirar segredos arcanos das mãos daqueles que os abusariam. Magias de Domínio — 1º: Zona Antigravidade, Infligir Ferimentos; 3º: Arma Mágica, Ver o Invisível; 5º: Relâmpago, Corcel Fantasmagórico; 7º: Santuário Privado, Esfera Resiliente; 9º: Ira da Guardiã dos Céus, Contato Extraplanar.",
    "sourcePage": 448,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "448",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "BARREIRA ESTRUTURAL",
        "level": 1,
        "page": 448,
        "text": "Como reação quando você ou uma criatura a até 9 metros é alvo de um ataque ou obrigada a fazer salvaguarda, projete uma barreira. O alvo recebe bônus na CA ou salvaguarda igual ao seu modificador de Sabedoria até o fim do turno. Usos por Descanso Longo iguais ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: ENCANTAMENTO APRESSADO",
        "level": 2,
        "page": 448,
        "text": "No seu turno, use Canalizar Divindade para conjurar uma magia adicional que exija ação ou ação bônus, separadamente de sua ação/ação bônus habitual. Pode fazê-lo apenas uma vez por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VISÃO DIABÓLICA",
        "level": 6,
        "page": 448,
        "text": "Você possui visão diabólica a uma distância em metros igual a 3 × seu bônus de proficiência. Dentro dela, vê em escuridão mágica e não mágica como se fosse luz intensa.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: CONTRAMÁGICA",
        "level": 8,
        "page": 448,
        "text": "Use Canalizar Divindade para produzir os efeitos de Dissipar Magia, Contramágica ou Aniquilar Magia. Isso não conta como conjurar uma magia e exige a mesma ação que a magia normalmente exigiria. Sabedoria é seu atributo de conjuração para o efeito, tratado como se fosse realizado com espaço de nível igual a 1 + seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONJURAÇÃO PROFICIENTE",
        "level": 8,
        "page": 448,
        "text": "Você soma seu modificador de Sabedoria ao dano em dados causado por suas magias de Clérigo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXCEÇÃO VESTIANA",
        "level": 17,
        "page": 448,
        "text": "Suas magias deixam de contar como efeitos mágicos e passam a ser canalizadas como milagres divinos. Elas ignoram características que reagem ou protegem especificamente contra magias ou efeitos mágicos, como Resistência Mágica, Imunidade Mágica Limitada e Contramágica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 448,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Zona Antigravidade; Infligir Ferimentos"
          },
          {
            "level": "3º",
            "spells": "Arma Mágica; Ver o Invisível"
          },
          {
            "level": "5º",
            "spells": "Relâmpago; Corcel Fantasmagórico"
          },
          {
            "level": "7º",
            "spells": "Santuário Privado; Esfera Resiliente"
          },
          {
            "level": "9º",
            "spells": "Ira da Guardiã dos Céus; Contato Extraplanar"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-cleric-dawnwatcher",
    "classId": "cleric",
    "name": "Vigia da Alvorada",
    "originalName": "Dawnwatcher",
    "aliases": [
      "Dawnwatcher"
    ],
    "desc": "Agentes de Harros, o Sol Dourado, que brandem poder radiante contra quem abusa da autoridade. São heróis diretos que atraem a atenção dos inimigos para proteger os demais. Magias de Domínio — 1º: Comando, Heroísmo; 3º: Meteoro Cadente, Arma da Dominação; 5º: Luz do Dia, Manto Fantasmagórico; 7º: Donzelas do Escudo, Bravura Desatada; 9º: Crista da Luz Solar, Muralha de Radiância.",
    "sourcePage": 442,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "442–444",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "POSTURA AUDACIOSA",
        "level": 1,
        "page": 442,
        "text": "Você tem vantagem em salvaguardas contra amedrontado e nenhuma magia ou efeito pode forçá-lo a se mover contra sua vontade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: SOL ARDENTE",
        "level": 2,
        "page": 442,
        "text": "Como ação, crie em um ponto visível a até 9 metros um globo solar por 1 minuto ou até dispensá-lo com uma ação. Ele emite luz solar intensa em raio de 9 metros e meia-luz por mais 9 metros. Sempre que uma criatura amigável termina o turno na luz intensa, ganha pontos de vida temporários iguais a 1d6 + metade do seu nível de Clérigo, arredondado para baixo, por 1 minuto. Uma criatura hostil que entra na luz intensa pela primeira vez no turno, inicia o turno nela ou ataca uma criatura dentro dela faz salvaguarda de Constituição; em falha fica cega até o início do próximo turno, em sucesso fica imune a esse efeito até o fim do turno. Mortos-vivos que falham também sofrem dano radiante igual aos pontos de vida temporários que um aliado receberia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 6,
        "page": 444,
        "text": "Ao realizar a ação Atacar, pode atacar duas vezes em vez de uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DIVINO (RADIANTE)",
        "level": 8,
        "page": 444,
        "text": "Uma vez em cada um de seus turnos, ao acertar uma criatura com ataque de arma, causa 1d8 de dano radiante adicional. No 14º nível de Clérigo, aumenta para 2d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CANALIZAR DIVINDADE: ARMA SOLAR",
        "level": 17,
        "page": 444,
        "text": "Como ação, toque uma arma corpo a corpo e fortaleça-a por 1 minuto. Você não pode ser desarmado dela; ela emite luz solar intensa em 9 metros e meia-luz por mais 9 metros; ataques com ela causam 1d8 de dano radiante adicional, mais 1d8 se o alvo for ínfero ou morto-vivo. Como ação bônus, pode encerrar o efeito para explodir a luz: criaturas à sua escolha a até 9 metros fazem salvaguarda de Constituição, sofrendo 6d8 de dano radiante e ficando cegas até o fim do seu próximo turno em falha, ou metade do dano em sucesso. Uma vez por Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Domínio",
        "page": 442,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Comando; Heroísmo"
          },
          {
            "level": "3º",
            "spells": "Meteoro Cadente; Arma da Dominação"
          },
          {
            "level": "5º",
            "spells": "Luz do Dia; Manto Fantasmagórico"
          },
          {
            "level": "7º",
            "spells": "Donzelas do Escudo; Bravura Desatada"
          },
          {
            "level": "9º",
            "spells": "Crista da Luz Solar; Muralha de Radiância"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-druid-circle-of-the-primeval-glade",
    "classId": "druid",
    "name": "Círculo da Clareira Primeva",
    "originalName": "Circle of the Primeval Glade",
    "aliases": [
      "Circle of the Primeval Glade"
    ],
    "desc": "Druidas da Clareira Primeva estão ligados aos espíritos de dinossauros ancestrais e carregam dentro de si a ferocidade das maiores feras da natureza. Eles defendem ecossistemas em que predadores e presas mantêm um equilíbrio funcional e frequentemente veneram os deuses kaijou Kilngresh e Echobliss.",
    "sourcePage": 454,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "454",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TOQUE DE FEROCIDADE",
        "level": 2,
        "page": 454,
        "text": "Como ação, toque uma criatura voluntária e conceda Ferocidade por 1 minuto. Na primeira vez em cada turno que ela fizer um ataque com arma, rola 1d6 e soma ao resultado da jogada de ataque. Todos os ataques feitos durante a Ferocidade são mágicos. Ao concedê-la, a criatura também recebe pontos de vida temporários iguais à metade do seu nível de Druida, arredondado para baixo, mínimo 1. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CHAMADO PRIMEVO",
        "level": 6,
        "page": 454,
        "text": "Uma vez por Descanso Longo, você pode conjurar Eco Bestial de forma especial, criando um espírito com aparência de dinossauro. Escolha normalmente o tipo de eco. A magia é tratada como conjurada com um espaço de nível igual à metade do seu nível de Druida, arredondado para baixo, máximo 9º. Ao invocá-lo, escolha um número de benefícios igual à metade do nível em que a magia foi conjurada, arredondado para baixo: o eco recebe seu Toque de Ferocidade; torna-se Grande, ou Enorme se escolher esta opção duas vezes, com dados de dano d10 quando Grande e d12 quando Enorme; seus ataques causam um dado adicional de dano; você e o eco não podem ser amedrontados enquanto ele existir; o deslocamento dele aumenta em 3 metros; ele ganha resistência a dano perfurante, cortante e contundente de armas não mágicas; recebe pontos de vida temporários iguais ao seu nível de Druida; ou ganha uma característica de outro tipo de espírito de Eco Bestial — Táticas de Matilha, Respiração Aquática ou Sobrevoo — juntamente com os deslocamentos daquele tipo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FÚRIA SELVAGEM",
        "level": 6,
        "page": 454,
        "text": "Enquanto estiver transformado por Forma Selvagem, você recebe automaticamente os benefícios do seu próprio Toque de Ferocidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FEROCIDADE MAIOR",
        "level": 10,
        "page": 454,
        "text": "Seu Toque de Ferocidade passa a alcançar criaturas a até 9 metros. Além disso, criaturas beneficiadas somam seu modificador de Sabedoria às rolagens de dano de ataques com arma enquanto a Ferocidade durar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REI DAS FERAS",
        "level": 14,
        "page": 454,
        "text": "Se um efeito fosse reduzi-lo a 0 pontos de vida ou matá-lo instantaneamente, você pode se transformar imediatamente em qualquer fera cujo nome contenha “-saurus”, à sua escolha. A transformação segue Forma Selvagem, ignorando as limitações sobre a criatura escolhida. O dano ou efeito desencadeador passa a atingir sua nova forma. Retornar exige 1 minuto de concentração ou que a forma seja reduzida a 0 pontos de vida. Uma vez por Descanso Longo. O Mestre pode permitir outras feras de temática dinossáurica mesmo sem “-saurus” no nome.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-druid-circle-of-deadwood",
    "classId": "druid",
    "name": "Círculo da Madeira Morta",
    "originalName": "Circle of Deadwood",
    "aliases": [
      "Circle of Deadwood"
    ],
    "desc": "Das raízes necromânticas de Rott, a Árvore da Decadência, surgem gavinhas capazes de corromper e distorcer a natureza. Druidas deste círculo aprendem a canalizar essa necromancia vegetal, seja em serviço a Rott ou tentando voltar seu poder traiçoeiro para fins benignos. Sua magia contorce a natureza, protege o próprio corpo e, por fim, força carne morta a agir.",
    "sourcePage": 451,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "451",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "BÊNÇÃO DE ROTT",
        "level": 2,
        "page": 451,
        "text": "Você possui resistência a dano necrótico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TRANSFORMAÇÃO DE MADEIRA SOMBRIA",
        "level": 6,
        "page": 451,
        "text": "Uma vez por Descanso Curto ou Longo, em vez de assumir uma forma bestial, você pode usar uma ação e gastar um uso de Forma Selvagem para cobrir o corpo com casca infernal por 10 minutos, ou até encerrar como ação bônus. Enquanto durar: seus ataques e rolagens de dano com armas usam seu atributo de conjuração; seu tamanho torna-se Grande; em cada turno, você pode usar uma ação bônus para realizar um número de ataques desarmados igual à metade do seu bônus de proficiência, arredondado para baixo, cada um causando 1d6 + metade do seu nível de Druida de dano necrótico; sua CA torna-se 10 + metade do seu nível de Druida, arredondado para baixo, caso já não seja maior; e você recebe pontos de vida temporários iguais ao dobro do seu nível de Druida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CASCA DE PODRIDÃO",
        "level": 10,
        "page": 451,
        "text": "Quando uma criatura iniciar o turno a até 9 metros de você ou entrar nesse alcance pela primeira vez no turno, você pode fazer vinhas e raízes escuras se enrolarem em seus membros. Ela realiza uma salvaguarda de Constituição; em uma falha, seu deslocamento torna-se 0 até o início do próximo turno dela. Usos por Descanso Longo iguais à metade do seu nível de Druida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MARIONETISTA DE PELE DE ÁRVORE",
        "level": 14,
        "page": 451,
        "text": "Como ação bônus, escolha uma criatura a até 18 metros presa por sua Casca de Podridão. Ela realiza uma salvaguarda de Força. Em uma falha, escolha um efeito: movê-la até 9 metros para um espaço desocupado à sua escolha; deixá-la restringida enquanto a Casca de Podridão durar; derrubá-la; ou fazê-la realizar um único ataque com arma contra uma criatura ao alcance escolhida por você. Você não pode obrigá-la a empregar efeitos adicionais ou magias que não queira usar.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ALCANCE GROTESCO",
        "level": 2,
        "page": 451,
        "text": "Quando uma criatura for reduzida a 0 pontos de vida ou morta por dano causado por você ou por um efeito originado de você, uma semente de decadência permanece em seu corpo. Enquanto puder ver o cadáver ou corpo a 0 pontos de vida, você pode tratá-lo como ponto de origem de efeitos ou magias que normalmente se originariam de você. Durante Transformação de Madeira Sombria, você também pode realizar os ataques de ação bônus da forma a partir de qualquer corpo semeado dessa maneira; o alcance é o da criatura, mas usa seu modificador de ataque e sua rolagem de dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-druid-circle-of-radiation",
    "classId": "druid",
    "name": "Círculo da Radiação",
    "originalName": "Circle of Radiation",
    "aliases": [
      "Circle of Radiation"
    ],
    "desc": "Estes Druidas canalizam a radiação eidomântica — o poder invisível ligado à Verdade que permanece no mundo desde a Era da Cisão. Eles não compreendem plenamente essa força, mas aprendem a manipular seus efeitos capazes de alterar a realidade e a lidar com sua natureza perigosa e instável.",
    "sourcePage": 452,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "452",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIA EIDOMÂNTICA",
        "level": 2,
        "page": 452,
        "text": "Escolha 2 magias de eidomancia de nível que você possa conjurar. Elas contam como magias de Druida para você e ficam sempre preparadas sem contar no seu limite. A cada nível de Druida, você pode substituir uma por outra válida; sempre que seu bônus de proficiência aumentar devido a um nível de Druida, aprende mais uma dessa forma. Você tem vantagem em testes de eidomancia e, se a salvaguarda do teste ainda não incluir seu bônus de proficiência, pode adicioná-lo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MALHA DE FOCO PRIMEVO",
        "level": 2,
        "page": 452,
        "text": "Quando precisar realizar um teste de concentração para manter uma magia, você pode escolher obter sucesso automaticamente, antes de rolar. Pode fazê-lo um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GENES RADIANTES",
        "level": 6,
        "page": 452,
        "text": "Uma vez por Descanso Curto ou Longo, como ação, escolha uma criatura voluntária a até 18 metros e faça uma onda de radiação eidomântica percorrer seu corpo por 1 minuto, ou até você ou ela encerrar com uma ação. No início de cada turno, ela sofre 1d6 de dano irredutível, que não pode reduzi-la abaixo de 1 ponto de vida e não ocorre se ela estiver com 0. Ela soma seu bônus de proficiência a todas as rolagens de dano e salvaguardas. Enquanto estiver nesse estado, quando obtiver sucesso em uma salvaguarda ou acertar um ataque, pode usar a reação para, respectivamente, evitar completamente o dano e os efeitos que a atingiriam ou fazer todos os dados de dano daquele ataque obterem o resultado máximo. Após usar uma dessas reações, o estado termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 10,
        "page": 452,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos e magias. O benefício se mantém em qualquer forma em que esteja transformado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CÍRCULO DA INFLUÊNCIA DA VERDADE",
        "level": 14,
        "page": 452,
        "text": "Como ação, escolha um ponto a até 36 metros e crie uma esfera cintilante de 6 metros de raio por 1 minuto, salvo a opção Esgotamento. Você pode centralizá-la em si para que se mova com você e pode excluir a si mesmo dos efeitos. Escolha um efeito ao criá-la. Esgotamento: cada criatura na esfera faz salvaguarda de Inteligência, sofrendo um número de d6 de dano de energia igual ao seu nível de Druida em uma falha, metade em um sucesso. Golpes Verdadeiros: criaturas aliadas dentro da esfera têm vantagem em ataques e salvaguardas mesmo que normalmente tivessem desvantagem. Mudança Lógica: escolha enfeitiçado, enfurecido, cego, paralisado, atordoado, surdo ou invisível; essa condição não produz efeito dentro da esfera. Barreira: quem tentar entrar ou sair faz salvaguarda de Carisma; em uma falha é empurrado 3 metros para trás; ataques à distância através da barreira falham automaticamente e criaturas em lados opostos não podem usar efeitos que exijam salvaguarda umas contra as outras. Restauração: cada criatura não hostil que iniciar o turno na esfera recupera 1d6 pontos de vida e recebe pontos de vida temporários iguais à metade do seu nível de Druida. Uma vez por Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AXIOMA EVOLUTIVO",
        "level": 14,
        "page": 452,
        "text": "Todo dano que você causa é considerado eidólico e mágico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-druid-circle-of-shadows",
    "classId": "druid",
    "name": "Círculo das Sombras",
    "originalName": "Circle of Shadows",
    "aliases": [
      "Circle of Shadows"
    ],
    "desc": "Ligados às forças que desbotam a paisagem do Reino das Sombras, estes Druidas manipulam escuridão, presságios e formas monstruosas. O uso constante dessa magia costuma conferir a eles um temperamento sombrio e uma familiaridade incomum com criaturas nascidas dos ambientes mais extremos da natureza.",
    "sourcePage": 453,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "453",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "COMO NA ESCURIDÃO",
        "level": 2,
        "page": 453,
        "text": "Você pode realizar Esconder-se como ação bônus mesmo estando apenas levemente obscurecido ou em meia-luz/escuridão. Se estiver à vista de outra criatura ao fazê-lo, sua aparência escurece e se mistura ao ambiente até que você seja revelado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIAS BÔNUS",
        "level": 2,
        "page": 453,
        "text": "Você ganha proficiência em Furtividade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORMA MONSTRUOSA",
        "level": 6,
        "page": 453,
        "text": "Ao usar Forma Selvagem, você pode assumir a forma de monstruosidades que atendam aos demais requisitos. Para monstruosidades, o limite de ND é sempre metade do seu bônus de proficiência, arredondado para baixo. Independentemente dos usos de Forma Selvagem, você só pode transformar-se em monstruosidade dessa maneira uma vez por Descanso Curto ou Longo, salvo se usar Avatar Pessoal.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SOMBRA PREDATÓRIA",
        "level": 6,
        "page": 453,
        "text": "Ao usar Forma Selvagem, você também fica invisível por 1 minuto ou até realizar uma ação que encerraria Invisibilidade. Enquanto estiver em Forma Selvagem, pode usar uma ação bônus para ficar invisível novamente da mesma forma ou teleportar-se até 18 metros para um espaço desocupado em meia-luz ou ao menos parcialmente coberto por sombra. Você pode usar essa ação bônus um número de vezes por Descanso Longo igual à metade do seu nível de Druida, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRESSÁGIO SOMBRIO",
        "level": 10,
        "page": 453,
        "text": "Quando conjurar uma magia usando um espaço, escolha você ou uma criatura a até 9 metros para receber uma visão nebulosa de uma tragédia futura. Por 1 minuto, ela recebe um bônus na próxima salvaguarda que realizar igual ao nível do espaço gasto. Usos por Descanso Curto ou Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REFÚGIO DE SOMBRAS",
        "level": 14,
        "page": 453,
        "text": "Ao iniciar um Descanso Longo, você pode invocar o poder do Reino das Sombras para criar uma parede giratória de escuridão em uma esfera de 6 metros de raio centrada em um ponto escolhido. A barreira leva 10 minutos para se formar e permanece até o descanso ser interrompido ou terminar. Dentro dela, todas as criaturas vivas ficam invisíveis para observadores externos. Se uma criatura Média ou maior que não estava dentro da área quando ela foi criada entrar, as criaturas no interior permanecem invisíveis para ela por 1 minuto ou até que, individualmente, realizem uma ação que encerraria Invisibilidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-fighter-academy-agent",
    "classId": "fighter",
    "name": "Agente da Academia",
    "originalName": "Academy Agent",
    "aliases": [
      "Academy Agent"
    ],
    "desc": "Treinados para caçar e eliminar magos, os guerreiros da Academia usam técnicas que voltam a energia dos conjuradores contra eles e protegem a própria mente contra interferência externa.",
    "sourcePage": 457,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "457",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "OLHOS ENCANTADOS",
        "level": 10,
        "page": 457,
        "text": "Uma criatura fica perfeitamente visível para você se estiver concentrando em uma magia ou efeito mágico, ou se tiver conjurado uma magia desde o fim do seu último turno. Isso permite vê-la em escuridão mágica ou comum, quando invisível, no Plano Etéreo e até enquanto você estiver cego, mas não permite enxergar através de matéria sólida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MENTE DESIMPEDIDA",
        "level": 15,
        "page": 457,
        "text": "Você ganha proficiência em salvaguardas de Inteligência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA DILACERANTE",
        "level": 18,
        "page": 457,
        "text": "Ao atacar uma criatura que esteja concentrando em uma magia ou tenha conjurado uma desde o fim do seu último turno, some seu modificador de Inteligência ao dano. Se você a obrigar a fazer um teste de concentração, a CD desse teste torna-se 8 + seu bônus de proficiência + seu modificador de Inteligência, salvo se já fosse maior.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AMORTECEDOR ARCANO",
        "level": 3,
        "page": 457,
        "text": "Quando falhar em uma salvaguarda contra magia ou efeito mágico e escolher usar Indomável para repeti-la, você obtém sucesso automaticamente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE ANULADOR",
        "level": 3,
        "page": 457,
        "text": "Quando acertar uma criatura com um ataque de arma, você pode abrir mão de todo o dano para produzir os efeitos de Dissipar Magia sobre todos os efeitos mágicos nela de uma vez, usando o maior nível de magia entre eles para determinar a CD. Seu atributo de conjuração para esse teste é o atributo usado no ataque ou Inteligência, à sua escolha. Você pode usar esta característica duas vezes por Descanso Curto ou Longo; depois disso, só pode usá-la novamente gastando 1 ponto de Maestria de Combate.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 7,
        "page": 457,
        "text": "Você tem vantagem em salvaguardas contra magias e efeitos mágicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-fighter-brawler",
    "classId": "fighter",
    "name": "Brigão",
    "originalName": "Brawler",
    "aliases": [
      "Brawler"
    ],
    "desc": "Brigões vivem pela emoção de uma luta e consideram o próprio corpo a melhor arma para um confronto íntimo. São combatentes resistentes e arriscados que agarram, arremessam e espancam adversários, ficando ainda mais perigosos depois de apanhar o suficiente para entrar no clima.",
    "sourcePage": 457,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "457–458",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PUNHO CONTRA PUNHO",
        "level": 3,
        "page": 457,
        "text": "Seus ataques desarmados causam 1d6 de dano contundente, salvo se outra característica usar dado maior. Você pode tratar um ataque desarmado como arma da mão secundária e, nesse caso, soma seu modificador de atributo ao dano. O dado aumenta para d8 no 6º nível de Guerreiro, d10 no 11º e d12 no 16º. Armas com a propriedade soqueira podem usar o dano de seu ataque desarmado no lugar do próprio.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORÇA AVASSALADORA",
        "level": 7,
        "page": 457,
        "text": "Seus ataques desarmados contam como mágicos para superar resistência e imunidade. Ao vencer uma disputa para empurrar ou agarrar uma criatura, você pode causar a ela dano contundente igual ao dano do seu ataque desarmado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESTRATÉGIA DE COMBATE ESPECIALISTA",
        "level": 10,
        "page": 458,
        "text": "Quando acertar uma criatura com um ataque desarmado, gaste 1 ponto de Maestria de Combate ou, se estiver realizando a ação Atacar, abra mão de um ataque ainda não usado dessa ação para aplicar um efeito. Recuo: empurre o alvo 1,5 metro × seu bônus de proficiência; se ele colidir com uma superfície sólida, tanto o alvo quanto a superfície sofrem 1d6 contundente para cada 1,5 metro de deslocamento que ainda restava; para cada categoria de tamanho acima da sua, a distância diminui em 3 metros. Golpe Distrativo: o alvo não pode usar reações até o início do seu próximo turno. Dobrar a Aposta: se o alvo não for mais de uma categoria maior que você, seu deslocamento torna-se 0. Quebrar a Defesa: ataques contra o alvo têm vantagem até o início do seu próximo turno ou até uma criatura acertá-lo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESQUIVA E GOLPE",
        "level": 15,
        "page": 458,
        "text": "Ao usar Surto de Ação, seu deslocamento aumenta em 3 metros até o fim do turno, e o próximo ataque desarmado que acertar nesse turno é tratado como um acerto crítico, embora não conte como uma rolagem de 20. Se errar, o benefício é perdido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EMBRIAGADO DE PANCADA",
        "level": 18,
        "page": 458,
        "text": "Quando acertar um ataque corpo a corpo com arma enquanto estiver com menos da metade dos seus pontos de vida máximos, você pode somar seu modificador de Constituição ao dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-fighter-red-lion-knight",
    "classId": "fighter",
    "name": "Cavaleiro do Leão Vermelho",
    "originalName": "Red Lion Knight",
    "aliases": [
      "Red Lion Knight"
    ],
    "desc": "Os Cavaleiros do Leão Vermelho da Terra Distante representam a elite do país, treinados para servir ao Conselho do Leão e proteger seu povo. Colocam a nação em primeiro lugar, o povo em segundo e os próprios interesses em terceiro. São símbolos de honra, diligência e resistência, frequentemente ligados a uma montaria que tratam como companheira inseparável.",
    "sourcePage": 461,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "461–462",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CHAMADO À AÇÃO",
        "level": 3,
        "page": 461,
        "text": "Como ação, solte um grande chamado para reunir seus aliados. Escolha criaturas a até 18 metros que possam ver ou ouvir você, em quantidade igual à metade do seu nível de Guerreiro, arredondado para baixo. Cada uma pode usar a reação para mover até metade do próprio deslocamento sem provocar ataques de oportunidade. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO APRIMORADO (CORPO A CORPO)",
        "level": 3,
        "page": 461,
        "text": "Seus ataques corpo a corpo com arma obtêm acerto crítico com 19 ou 20 no d20.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALISTA EM COMBATE MONTADO",
        "level": 7,
        "page": 461,
        "text": "Uma montaria voluntária a agir como montaria controlada ajusta a iniciativa à sua e age imediatamente antes de você. Ela se move conforme suas ordens e pode usar Disparada ou Esquivar como ação bônus, além de poder realizar Atacar ou outras ações de seu bloco de estatísticas sob seu comando. Em seu turno, você pode usar uma ação bônus para ordenar à montaria que está cavalgando que faça um ataque com arma. Quando sua montaria for alvo de um ataque que você possa ver, use sua reação para somar seu bônus de proficiência à CA dela até o fim do turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ENVIADO REAL",
        "level": 7,
        "page": 461,
        "text": "Você ganha proficiência em Cavalgar e Persuasão. Se já for proficiente em uma ou ambas, para cada proficiência repetida escolha obter Especialização nela ou proficiência em Adestrar Animais, Intuição, Intimidação ou Atuação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INICIATIVA DO CAVALEIRO",
        "level": 10,
        "page": 462,
        "text": "Você não pode ser surpreendido enquanto não estiver incapacitado e tem vantagem em testes de Iniciativa. Ao usar Surto de Ação, você também pode produzir os efeitos de Chamado à Ação sem gastar ação nem uso da característica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CRÍTICO SUPERIOR (CORPO A CORPO)",
        "level": 15,
        "page": 462,
        "text": "Seus ataques corpo a corpo com arma obtêm acerto crítico com 18, 19 ou 20 no d20, e seus críticos corpo a corpo causam um dado de dano adicional da arma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CHAMADO DO LEÃO",
        "level": 18,
        "page": 462,
        "text": "Ao usar Chamado à Ação, cada criatura que usaria a reação para se mover pode, em vez disso, fazer um ataque com arma com vantagem contra uma criatura ao alcance. Além disso, todas as criaturas que reagirem ao chamado podem se levantar sem custo de deslocamento e recebem imediatamente 2d10 pontos de vida temporários.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-fighter-guardian",
    "classId": "fighter",
    "name": "Guardião",
    "originalName": "Guardian",
    "aliases": [
      "Guardian"
    ],
    "desc": "Um defensor imóvel que domina o uso do escudo para impedir que o dano alcance a si e aos aliados. O Guardião ataca com o escudo tão naturalmente quanto com a espada, repelindo golpes e esmagando adversários enquanto transforma sua posição em uma muralha no campo de batalha.",
    "sourcePage": 461,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "461",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GOLPE DE ESCUDO",
        "level": 3,
        "page": 461,
        "text": "Ao realizar a ação Atacar enquanto empunha um escudo, você pode atacar com ele como ação bônus. Para esse ataque, o escudo conta como uma arma pesada com a qual você é proficiente, usa Força e soma seu bônus de aprimoramento à jogada de ataque. Em um acerto, escolha: se o alvo não for mais de uma categoria de tamanho maior que você, derrubá-lo ou empurrá-lo 1,5 metro; causar dano contundente igual a 1d4 × o bônus total de CA do escudo + seu modificador de Força; ou dar ao alvo desvantagem no próximo ataque antes do início do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESTILOS DE LUTA DO GUARDIÃO",
        "level": 7,
        "page": 461,
        "text": "Você ganha os estilos de luta Defesa e Proteção. Se já possuir um ou ambos, os estilos correspondentes avançam em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SENTINELA IMPONENTE",
        "level": 7,
        "page": 461,
        "text": "Se você ou uma criatura a até 1,5 metro for reduzida a 0 pontos de vida por dano de uma fonte que possa ver, gaste um uso de Maestria de Combate para reduzir o dano em 1d10 + seu nível de Guerreiro. Se ainda assim o dano a reduziria a 0, ela fica com 1 ponto de vida. Só pode proteger o mesmo alvo dessa forma uma vez por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MESTRE EXCEPCIONAL DE ARMADURA",
        "level": 10,
        "page": 461,
        "text": "Enquanto estiver usando armadura pesada, todo dano perfurante, cortante e contundente que sofrer é reduzido pela metade do seu nível de Guerreiro, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DEFLEXÃO TOTAL",
        "level": 15,
        "page": 461,
        "text": "Ao ser atingido por um ataque com arma enquanto empunha escudo, use sua reação para rolar 1d10 e somá-lo à CA, possivelmente transformando o acerto em erro. Se o ataque errar por causa disso e o atacante estiver a até 1,5 metro, você pode realizar um Golpe de Escudo contra ele na mesma reação. Duas vezes por Descanso Curto ou Longo; depois disso, só pode repetir gastando 1 ponto de Maestria de Combate.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DEFESA SUPREMA",
        "level": 18,
        "page": 461,
        "text": "Uma vez por turno, quando sofrer dano de um efeito que possa ver enquanto usa armadura pesada ou empunha escudo, gaste 1 ponto de Maestria de Combate para reduzir todo o dano daquela fonte em três vezes seu nível de Guerreiro. Depois, você tem resistência a todo dano até o fim do turno atual.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-fighter-chaos-blade",
    "classId": "fighter",
    "name": "Lâmina do Caos",
    "originalName": "Chaos Blade",
    "aliases": [
      "Chaos Blade"
    ],
    "desc": "Alguns guerreiros se entregam completamente ao instinto e, no auge do perigo, acessam uma energia caótica que se manifesta de maneiras imprevisíveis. Essas explosões parecem reconectar ao corpo aqueles que sofreram trauma ou dissociação, dando forma física à confusão e à ansiedade.",
    "sourcePage": 459,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "459",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SURTO DO CAOS",
        "level": 3,
        "page": 459,
        "text": "Você desencadeia um Surto do Caos quando obtém 1 ou 20 no d20 de um ataque ou salvaguarda, ou quando usa Surto de Ação. Role 1d10 na tabela Surto do Caos; as salvaguardas indicadas usam Constituição, e Constituição é seu atributo de conjuração. Se gerar vários surtos no mesmo turno, você não pode obter o mesmo resultado duas vezes: repita a rolagem até sair um resultado diferente. O mesmo efeito da tabela não se acumula consigo próprio.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SALTO ILÓGICO",
        "level": 7,
        "page": 459,
        "text": "Como ação bônus, teleporte-se para um espaço desocupado que possa ver a uma distância de até 3 metros × seu bônus de proficiência. Uma vez por Descanso Curto ou Longo; você pode usá-lo novamente gastando 1 ponto de Maestria de Combate.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAOS CONTROLADO",
        "level": 10,
        "page": 459,
        "text": "Quando rolar na tabela Surto do Caos, você pode ignorar a primeira rolagem e repetir uma vez, exceto se o resultado original for 1; deve manter o novo resultado. Além disso, a partir de agora você rola 1d20, não 1d10, para o Surto do Caos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EVASÃO IMPOSSÍVEL",
        "level": 15,
        "page": 459,
        "text": "Em salvaguardas que normalmente permitem sofrer metade do dano, você não sofre dano em um sucesso e sofre apenas metade em uma falha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAOS INFINITO",
        "level": 18,
        "page": 459,
        "text": "Ao rolar iniciativa, você pode gerar imediatamente um Surto do Caos mesmo se estiver surpreso. Tabela d20: 1, Infortúnio — o próximo d20 de ataque ou salvaguarda em 1 minuto vira 1, sem provocar novo Surto. 2, Golpe Sombrio — na próxima ação Atacar em 1 minuto faça dois ataques de arma adicionais; se um ataque desencadeou o efeito, pode fazê-los imediatamente. 3, Campo de Força — por 1 minuto, uma bolha móvel dá desvantagem a ataques à distância contra você ou alvos dentro dela e faz cada 1,5 metro de movimento interno custar 3 metros. 4, Passo de Dobra Lento — por 1 minuto, seus deslocamentos são substituídos por um deslocamento de teleporte igual à metade do deslocamento base. 5, Maestria em Armas — por 1 minuto, vantagem com a arma que desencadeou o surto, ou na salvaguarda desencadeadora; se veio de Surto de Ação, use a última dessas rolagens. 6, Falha de Armas — igual ao anterior, mas com desvantagem. 7, Cascata de Relâmpagos — criaturas a até 3 metros fazem salvaguarda de Destreza; em uma falha sofrem um número de d8 de dano elétrico igual ao seu bônus de proficiência. 8, Perda Cegante — você fica cego por 1 minuto e repete salvaguarda de Constituição ao fim de cada turno, encerrando em sucesso. 9, Sem Talento — seu bônus de proficiência torna-se 0 por 1 minuto. 10, Luta Valente — produz, sem ação, os efeitos de Bravura Deslacrada; equipamento não mágico removido não é destruído, Constituição é o atributo da magia e não exige concentração. 11, Intocável — resistência a todo dano por 1 minuto. 12, Arma Fantasma — por 1 minuto, a próxima arma com que atacar ignora resistências e imunidades e causa um dado extra de dano. 13, Transparente — invisível por 1 minuto ou até realizar ação com ataque, dano ou salvaguarda de outra criatura. 14, Ampliado — aumenta uma categoria de tamanho por 1 minuto, se houver espaço, e soma 1d4 a ataques e danos corpo a corpo. 15, Aura Explosiva — por 1 minuto, quem acertar você em corpo a corpo a até 1,5 metro sofre 1d8 de um tipo determinado por 1d6: fogo, frio, elétrico, ácido, radiante ou necrótico. 16, Olhos Inquestionáveis — visão verdadeira a 9 metros por 1 minuto. 17, Monoataque — por 1 minuto, no máximo um ataque de arma por ação Atacar; salvaguarda de Sabedoria ao fim de cada turno encerra em sucesso. 18, Indestrutível — imunidade, por 1 minuto, a perfurante, cortante ou contundente, à sua escolha. 19, Um Tiro — o próximo ataque que o acertaria em 1 minuto erra; depois, sua CA aumenta em 5 até o início do próximo turno. 20, Soma Zero — o próximo ataque em 1 minuto trata o d20 como 20, sem provocar novo Surto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-monk-convergent-soul",
    "classId": "monk",
    "name": "Alma Convergente",
    "originalName": "Convergent Soul",
    "aliases": [
      "Convergent Soul"
    ],
    "desc": "A Alma Convergente contempla futuros possíveis e aprende a desviar o fluxo dos acontecimentos. Sua percepção de caminhos alternativos evolui para verdadeira precognição e para a capacidade de puxar resultados de outras linhas temporais para o presente.",
    "sourcePage": 464,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "464–465",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CONCORDÂNCIA DO CAOS",
        "level": 3,
        "page": 464,
        "text": "Suas características usam Cargas Arcanas conforme as regras de 5.19: você possui quantidade igual ao seu bônus de proficiência e as recupera em um Descanso Longo. Sempre que um efeito exigir uma Carga Arcana, você também pode gastar 2 pontos de Chi no lugar dela. Você pode gastar Cargas para: Porta para o Sucesso — quando o d20 de um ataque mostrar 19, tratá-lo como 20; Salvaguarda Dupla — ao falhar em uma salvaguarda, usar reação para rolar outro d20 e substituir o resultado original; Retirada Relâmpago — ao obter sucesso em uma salvaguarda contra efeito de área, usar reação para teleportar-se para um espaço desocupado adjacente, mas fora da área, ignorando inclusive efeitos que ocorreriam em um sucesso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PUNHO DIVIDIDO",
        "level": 6,
        "page": 465,
        "text": "Quando errar um ataque com arma de Monge ou ataque desarmado, gaste uma Carga Arcana e role 1d6. 1–2: nada ocorre. 3: faça imediatamente dois ataques contra o mesmo alvo com a mesma arma. 4: trate o d20 como 20, mas o ataque não é considerado crítico. 5: realize imediatamente Esquivar ou Disparada sem ação e não provoque ataques de oportunidade do alvo nesse turno. 6: receba pontos de vida temporários iguais ao seu nível de Monge até o início do próximo turno; resultados 6 repetidos no mesmo turno se acumulam. Punho Dividido não pode desencadear a si próprio.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DE MOVIMENTO ONDULATÓRIO",
        "level": 11,
        "page": 465,
        "text": "No seu turno, gaste 1 Carga Arcana para aumentar para 9 metros o alcance de um ataque corpo a corpo com arma de Monge ou ataque desarmado. Antes do ataque, teleporte-se para um espaço desocupado adjacente ao alvo; se não houver espaço, não pode usá-lo. Até o fim do turno, você pode repetir esse teleporte para cada outro ataque válido sem gastar novas Cargas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DESVIAR AS CORRENTES DO DESTINO",
        "level": 17,
        "page": 465,
        "text": "Uma vez por Descanso Curto ou Longo, como ação bônus, produza em si mesmo os efeitos de Premonição por 10 minutos. Depois desse uso gratuito, você pode usar novamente gastando 5 pontos de Chi.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VONTADE ESTILHAÇADA",
        "level": 17,
        "page": 465,
        "text": "Uma vez por turno, você pode desencadear Punho Dividido sem gastar Carga Arcana. Além disso, se gastar uma Carga para usá-lo e obtiver 1 ou 2 na tabela, recupera a Carga gasta.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-monk-way-of-the-freezing-soul",
    "classId": "monk",
    "name": "Caminho da Alma Congelante",
    "originalName": "Way of the Freezing Soul",
    "aliases": [
      "Way of the Freezing Soul"
    ],
    "desc": "Monges da Alma Congelante temperam corpo e mente nos ermos gelados ao sul de Retia. Depois de aprender a sobreviver naturalmente ao frio, refinam o controle espiritual sobre gelo e neve, manifestando foices congeladas como extensões de si mesmos.",
    "sourcePage": 467,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "467",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CEIFADOR DE GELO",
        "level": 3,
        "page": 467,
        "text": "Foices de combate contam como armas de Monge e possuem acuidade para você. Golpe de Colheita: sempre que uma característica permitir ataque desarmado, você pode atacar com foice de combate. Foice de Gelo: como ação bônus, gaste 1 Chi para condensar água em uma foice de gelo que causa dano de frio no lugar de cortante e tem bônus de aprimoramento igual à metade do seu bônus de proficiência, arredondado para baixo; ela desaparece em um Descanso Curto ou Longo. Superafiar: ao atacar com essa foice, você pode obter vantagem; se acertar, adicione ao dano uma quantidade de dados extras igual ao bônus de aprimoramento, e depois a foice se quebra.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "NASCIDO DA TUNDRA",
        "level": 3,
        "page": 467,
        "text": "Você tem resistência a dano de frio, vantagem em salvaguardas contra efeitos negativos de ambientes congelantes e se move normalmente por neve e gelo que seriam terreno difícil.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BANDAGENS DE NEVE",
        "level": 6,
        "page": 467,
        "text": "Ao concluir um Descanso Curto, role novamente cada Dado de Vida gasto, sem somar Constituição. Você recebe o total como pontos de vida temporários, representando gelo e neve selando suas feridas. A soma desses pontos temporários com seus pontos de vida atuais não pode exceder seus pontos de vida máximos; ao recuperar vida acima desse limite, reduza os pontos temporários conforme necessário.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "NEVASCA APRISIONADORA",
        "level": 11,
        "page": 467,
        "text": "Como ação, gaste entre 2 e metade do seu nível de Monge em pontos de Chi, arredondado para baixo, e crie uma onda de gelo em uma forma: esfera de 6 metros de raio centrada em você, escolhendo como alvos 2 + os pontos de Chi gastos criaturas; ou linha de 1,5 metro de largura e comprimento de 3 metros × os pontos de Chi gastos, atingindo tudo nela. Cada alvo faz salvaguarda de Constituição; em uma falha sofre um número de d10 de dano de frio igual ao seu bônus de proficiência e fica com deslocamento 0 até o início do seu próximo turno; em um sucesso sofre metade do dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAIXÃO DE GEADA",
        "level": 17,
        "page": 467,
        "text": "Ao acertar uma criatura em seu turno com arma de Monge ou ataque desarmado, gaste 3 Chi para cobri-la de gelo. Ela faz salvaguarda de Constituição; em uma falha, enquanto estiver presa seu deslocamento é reduzido à metade, pode realizar uma ação ou uma ação bônus no turno, mas não ambas, e sofre no início de cada turno dano de frio igual a um dado de Artes Marciais + seu modificador de Sabedoria. Repete a salvaguarda ao fim de cada turno, encerrando em sucesso; ao sofrer dano de fogo, repete imediatamente com vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-monk-way-of-the-broken-chain",
    "classId": "monk",
    "name": "Caminho da Corrente Quebrada",
    "originalName": "Way of the Broken Chain",
    "aliases": [
      "Way of the Broken Chain"
    ],
    "desc": "Esse caminho ensina a romper o vínculo com as consequências da carne e tratar o próprio corpo como uma arma feita para sangrar e matar. Seus praticantes convidam os golpes dos adversários e contra-atacam nas brechas criadas por essa conduta deliberadamente imprudente.",
    "sourcePage": 465,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "465",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PUNHO IMPRUDENTE",
        "level": 3,
        "page": 465,
        "text": "Uma vez em cada um dos seus turnos, quando errar uma criatura com arma de Monge ou ataque desarmado, você pode entrar em fervor violento: o ataque que errou e todos os ataques do mesmo tipo contra esse alvo até o início do seu próximo turno têm vantagem. Durante o mesmo período, todos os ataques contra você também têm vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TÉCNICAS ADVERSARIAIS",
        "level": 6,
        "page": 465,
        "text": "Você aprende duas técnicas. Mão Ceifadora: ao reduzir uma criatura a 0 pontos de vida com ataque corpo a corpo ou ataque desarmado, faça imediatamente outro ataque contra uma criatura ao alcance. Em um acerto, qualquer dano que tenha excedido os pontos de vida do primeiro alvo é causado também ao segundo; se Punho Imprudente estava ativo, o novo alvo passa a ser o alvo inicial da característica. Contra a Ponta da Lança: quando uma criatura fizer um ataque com arma contra você, você pode conceder vantagem a esse ataque e ganhar resistência ao dano dele. Se ainda assim errar, e você não estiver incapacitado, pode realizar um ataque desarmado ou com arma de Monge contra a fonte, se estiver ao alcance.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPES DEVASTADORES",
        "level": 11,
        "page": 465,
        "text": "Quando acertar uma criatura com um ataque beneficiado por Punho Imprudente, o ataque causa um dado adicional de Artes Marciais de dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MEDIDAS DESESPERADAS",
        "level": 17,
        "page": 465,
        "text": "Enquanto estiver abaixo da metade dos pontos de vida máximos: ao realizar Atacar, Disparada ou Rajada de Golpes, você pode fazer um ataque adicional com arma de Monge ou ataque desarmado; sua CA calculada por Defesa sem Armadura recebe +2; e, se iniciar o turno com pelo menos 1 ponto de vida, recebe pontos de vida temporários iguais à metade do seu nível de Monge, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-monk-way-of-the-deep",
    "classId": "monk",
    "name": "Caminho das Profundezas",
    "originalName": "Way of the Deep",
    "aliases": [
      "Way of the Deep"
    ],
    "desc": "Monges das Profundezas treinam em grandes massas de água, normalmente no oceano, fortalecendo cada músculo para suportar ambientes severos. Aprendem a nadar com agilidade, canalizar água com o Chi e até extrair efeitos mágicos do mar, enxergando a si mesmos como gotas individuais dentro de uma onda muito maior.",
    "sourcePage": 466,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "466",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS BÔNUS",
        "level": 3,
        "page": 466,
        "text": "Você ganha proficiência em Atletismo, deslocamento de natação igual ao seu deslocamento base, ignora penalidades de combate subaquático com suas armas de Monge e pode prender a respiração por 5 minutos adicionais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TRAMA DA ENGUIA",
        "level": 3,
        "page": 466,
        "text": "Você pode realizar Desengajar como ação bônus sem gastar Chi. Mover-se pelo espaço de aliados não custa movimento adicional nem conta como terreno difícil, e você pode atravessar o espaço de inimigos como terreno difícil.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ALCANCE DO KRAKEN",
        "level": 6,
        "page": 466,
        "text": "Seu Chi cria extensões de água semelhantes a tentáculos. Seus ataques desarmados e com armas de Monge passam a ter alcance de 3 metros. Você pode realizar ataques de oportunidade tanto quando uma criatura sai do alcance normal da arma quanto quando sai desse alcance estendido.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DÁDIVA DO OCEANO",
        "level": 11,
        "page": 466,
        "text": "Você pode conjurar as seguintes magias sem espaços, gastando Chi; elas usam sua CD de Chi e Sabedoria como atributo de conjuração: Onda de Afogamento, 2 pontos; Jaula Hidráulica, 3; Muralha Hidráulica, 2; Caminhar sobre as Águas, 1.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRISÃO AQUÁTICA",
        "level": 17,
        "page": 466,
        "text": "Como ação, gaste 1 ou mais pontos de Chi para criar uma membrana de água de 1,5 metro de diâmetro, aumentando o diâmetro em 1,5 metro para cada ponto além do primeiro. Ela dura 1 minuto, até você ficar incapacitado ou encerrá-la como ação bônus; só uma pode existir por vez. Membrana Obscurecedora: criaturas dentro têm três quartos de cobertura contra ataques externos, e criaturas internas são imunes a dano de fogo e elétrico originado do lado de fora; o mesmo vale para ataques e dano do interior para o exterior; atravessar a membrana é terreno difícil. Pulso Sônico: como ação bônus, faça todas as criaturas dentro dela, se voltada para dentro, ou a até 3 metros da membrana, se voltada para fora, realizarem salvaguarda de Constituição; em uma falha sofrem 2d12 trovejante. Corrente Fluida: ao criar, escolha corrente para dentro ou para fora e criaturas imunes ao fluxo. Para dentro: quem tentar cruzar a membrana faz salvaguarda de Força ou é empurrado para dentro e fica com deslocamento 0; se não houver espaço, atravessa e é ejetado para um espaço externo desocupado à sua escolha, caído e com deslocamento 0. Para fora: quem tentar cruzar faz salvaguarda de Força ou é empurrado para o espaço externo desocupado mais próximo e fica caído; quando a membrana surge, criaturas já dentro também fazem essa salvaguarda ou são expulsas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-monk-beloved-tribute",
    "classId": "monk",
    "name": "Tributo Amado",
    "originalName": "Beloved Tribute",
    "aliases": [
      "Beloved Tribute"
    ],
    "desc": "Tributos Amados treinam para entreter tanto quanto para lutar. Ligados ao Coro dos Ídolos e aos cultos de T’quinn, praticam artes marciais de movimentos graciosos, hipnóticos e expressivos. Sua disciplina separa mentalmente cada experiência, permitindo viver alegria, conflito e tensão com foco absoluto, inspirada nas duas faces distintas de T’quinn.",
    "sourcePage": 463,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "463–464",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CONDUTA ENCANTADORA",
        "level": 3,
        "page": 463,
        "text": "Quando acertar uma criatura com ataque desarmado ou arma de Monge, você pode gastar 1 ponto de Chi para escolher um efeito; ao acertar com um dos ataques de Rajada de Golpes, pode aplicar um efeito sem gasto adicional de Chi: o alvo faz salvaguarda de Carisma ou fica enfeitiçado por você até o início do seu próximo turno; faz salvaguarda de Destreza ou fica caído; ou sofre dano trovejante igual a dois dados de Artes Marciais. Você também ganha proficiência em Atuação e pode usar Destreza em testes de Atuação baseados em dança ou expressão corporal.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARMAS DE MONGE",
        "level": 3,
        "page": 464,
        "text": "Lâminas Gêmeas contam como armas de Monge para você. Ao usar o ataque secundário de uma Lâmina Gêmea, some dano trovejante igual ao seu bônus de proficiência ao dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DIVA RECONFORTANTE",
        "level": 6,
        "page": 464,
        "text": "Enquanto não estiver restringido nem incapacitado, use uma ação para realizar uma dança e escolha criaturas voluntárias a até 18 metros em quantidade igual ao seu bônus de proficiência. Elas recebem pontos de vida temporários iguais a dois dados de Artes Marciais + seu nível de Monge e, por 1 minuto, ficam enfeitiçadas por você. Enquanto enfeitiçadas dessa forma, não podem ser enfeitiçadas nem amedrontadas por outras criaturas ou efeitos. O efeito termina se você ficar inconsciente. Uma vez por Descanso Longo; depois, pode repetir gastando 3 pontos de Chi.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ORIENTAÇÃO DO AMADO",
        "level": 11,
        "page": 464,
        "text": "Enquanto estiver abaixo da metade dos seus pontos de vida máximos, seus sentidos se aguçam. Em cada jogada de ataque ou salvaguarda, role 1d4 e some ao resultado. O benefício termina ao recuperar pelo menos metade dos pontos de vida máximos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ECO VITORIOSO",
        "level": 11,
        "page": 464,
        "text": "Se mover mais de 6 metros em seu turno, você pode usar qualquer quantidade do deslocamento ainda restante para teleportar-se para um espaço desocupado que possa ver dentro dessa distância.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VALSA DE UM SÓ",
        "level": 17,
        "page": 464,
        "text": "Como ação, gaste 3 ou mais pontos de Chi para projetar duplicatas invisíveis que atacam criaturas que possa ver dentro do alcance do seu deslocamento, independentemente de quanto já se moveu. O número de duplicatas é 2 + metade dos pontos de Chi gastos, arredondado para cima. Cada duplicata ataca como se estivesse invisível e imita um de seus ataques desarmados ou com arma de Monge que esteja em sua posse, causando o dano normal mais um dado de Artes Marciais de dano trovejante.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-paladin-oath-of-the-dawn",
    "classId": "paladin",
    "name": "Juramento da Alvorada",
    "originalName": "Oath of the Dawn",
    "aliases": [
      "Oath of the Dawn"
    ],
    "desc": "Paladinos deste juramento buscam inspiração e força no nascer do sol, enfrentando aqueles que se escondem nas sombras. Eles acreditam em recomeços e ciclos de renovação. Magias de Juramento — 3º: Raio Guia, Escudo da Fé; 5º: Destruição Marcante, Arma da Dominação; 9º: Bola de Fogo, Proteção contra Energia; 13º: Escudo de Fogo, Muralha de Fogo; 17º: Crista da Luz Solar, Muralha de Radiância. Dogmas da Alvorada — Escuridão Antes da Alvorada: as circunstâncias são mais sombrias antes de melhorarem; procure esperança no horizonte. Recomece: enquanto respirar, sempre existe a chance de começar de novo. Calor na Luz: permaneça firme ao lado daqueles que caminham sob a luz; quem nada tem a esconder não precisa buscar a escuridão.",
    "sourcePage": 474,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "474",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 474,
        "text": "Você recebe duas opções. Cascata Cegante: como ação bônus, use Canalizar Divindade para imbuir por 1 minuto uma arma que esteja segurando com a luz da alvorada. Ela causa um dado adicional de dano radiante e, na primeira vez em cada turno que acertar uma criatura, o alvo faz salvaguarda de Constituição ou fica cego até o efeito terminar; repete a salvaguarda no fim de cada turno. A arma obtém crítico com 19 ou 20; em um crítico, criaturas à sua escolha a até 3 metros do alvo também fazem a salvaguarda contra cegueira. Luz Reveladora: como ação bônus, escolha um ponto a até 18 metros e crie uma esfera de 9 metros de raio de luz intensa considerada luz solar. Dentro dela, criaturas etéreas podem ser vistas, tocadas e atacadas a partir do Plano Material e vice-versa, e criaturas invisíveis são reveladas e vistas normalmente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA DE ILUMINAÇÃO",
        "level": 7,
        "page": 474,
        "text": "Como ação bônus, você pode preencher o alcance da Aura de Proteção com luz solar intensa e iluminar com meia-luz uma distância igual além dela. Pode encerrar como ação bônus; termina automaticamente se ficar inconsciente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BÊNÇÃO DO SOL",
        "level": 15,
        "page": 474,
        "text": "Você pode invocar um dos seguintes efeitos: transformar um ataque com arma que errou em um acerto; repetir uma salvaguarda que falhou e somar seu modificador de Carisma ao novo resultado; conjurar qualquer magia de Paladino usando um espaço, mesmo sem estar preparada; ou dobrar o alcance da Aura de Proteção por 1 minuto. Usos por Descanso Longo iguais à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAMPEÃO DA RENOVAÇÃO",
        "level": 20,
        "page": 474,
        "text": "Como ação, canalize o poder do sol por 1 minuto: luz solar intensa preenche 18 metros de raio e meia-luz alcança mais 18 metros. Ínferos e mortos-vivos que iniciarem o turno na luz intensa sofrem 2d10 de dano radiante. Seus ataques contra criaturas dentro da luz têm vantagem. Ao ativar, criaturas à sua escolha dentro da luz que estejam com 0 pontos de vida recuperam imediatamente 10 pontos de vida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Juramento",
        "page": 474,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
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
            "spells": "Raio Guia; Escudo da Fé"
          },
          {
            "level": "5º",
            "spells": "Destruição Marcante; Arma da Dominação"
          },
          {
            "level": "9º",
            "spells": "Bola de Fogo; Proteção contra Energia"
          },
          {
            "level": "13º",
            "spells": "Escudo de Fogo; Muralha de Fogo"
          },
          {
            "level": "17º",
            "spells": "Crista da Luz Solar; Muralha de Radiância"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-paladin-oath-of-sorcery",
    "classId": "paladin",
    "name": "Juramento da Feitiçaria",
    "originalName": "Oath of Sorcery",
    "aliases": [
      "Oath of Sorcery"
    ],
    "desc": "Ligados a Vestias e ao Clero Nascido da Magia, estes Paladinos reverenciam as artes arcanas e acreditam que magia deve ser tratada com cuidado, não medo. Eles tentam conter os piores conjuradores e apoiar os melhores. Magias de Juramento — 3º: Detectar Magia, Escudo; 5º: Imobilizar Pessoa, Raio do Enfraquecimento; 9º: Contramágica, Salto Trovejante; 13º: Malogro, Retorno Eidomântico; 17º: Descombobulação, Muralha de Radiância. Dogmas — Virtude Ancestral: conhecimento antigo deve ser tratado com respeito e não abusado. Extremos Ampla­mente: magia não é inerentemente boa nem má; importa como é usada. Veja Além: a realidade possui muitas camadas cósmicas, e ninguém pode compreender tudo; respeite o desconhecido.",
    "sourcePage": 472,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "472–473",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 472,
        "text": "Você recebe duas opções. Milagre Arcano: use Canalizar Divindade para conjurar qualquer magia que conheça ou qualquer magia de Paladino, mesmo não preparada, sem gastar espaço. Ela é conjurada no nível do maior espaço de Paladino ao qual você tem acesso, que também é o maior nível de magia permitido. Manto do Santo: como ação bônus, use Canalizar Divindade para obter por 1 minuto vantagem em salvaguardas contra efeitos mágicos e testes de concentração. Durante esse período, você pode usar sua reação para estender temporariamente o benefício a uma criatura dentro da Aura de Proteção, dando-lhe vantagem nessas rolagens até o início do seu próximo turno, mesmo se ela sair da aura.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FEITIÇARIA",
        "level": 7,
        "page": 473,
        "text": "Ao preparar magias após um Descanso Longo, você pode preparar da lista de Feiticeiro um número de magias igual ao seu bônus de proficiência. Elas contam como magias de Paladino enquanto estiverem preparadas e contam no seu limite normal de magias preparadas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 15,
        "page": 473,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos. Enquanto Manto do Santo estiver ativo, ataques de magia e testes de concentração de criaturas aliadas dentro da sua aura também têm vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RITUAL PERFEITO",
        "level": 20,
        "page": 473,
        "text": "Você pode tratar usos não gastos de Canalizar Divindade como espaços de magia de 9º nível e gastá-los para conjurar magias; Milagre Arcano não os considera espaços reais. Ao preparar magias de Paladino depois de um Descanso Longo, você também pode preparar uma magia adicional de 9º nível ou inferior da lista de Feiticeiro, que conta como magia de Paladino enquanto preparada.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Juramento",
        "page": 472,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
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
            "spells": "Detectar Magia; Escudo"
          },
          {
            "level": "5º",
            "spells": "Imobilizar Pessoa; Raio do Enfraquecimento"
          },
          {
            "level": "9º",
            "spells": "Contramágica; Salto Trovejante"
          },
          {
            "level": "13º",
            "spells": "Malogro; Retorno Eidomântico"
          },
          {
            "level": "17º",
            "spells": "Descombobulação; Muralha de Radiância"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-paladin-oath-of-preservation",
    "classId": "paladin",
    "name": "Juramento da Preservação",
    "originalName": "Oath of Preservation",
    "aliases": [
      "Oath of Preservation"
    ],
    "desc": "Paladinos da Preservação valorizam o momento, a paciência e a proteção daquilo que seria perdido sem intervenção, seja vida ou conhecimento. Magias de Juramento — 3º: Maldição, Limpeza do Sistema; 5º: Acalmar Emoções, Imobilizar Pessoa; 9º: Arcana Abjurativa, Círculo Mágico; 13º: Esfera Resiliente, Ira da Valquíria; 17º: Cúpula Antivida, Muralha de Energia. Dogmas — Nunca Perdido: enquanto perseverar e se levantar, você não foi derrotado; avance sem cessar. Paciência Acima de Tudo: o mundo muda lentamente, portanto leve seus empreendimentos até o fim. Sentinela dos Fracos: seja a primeira linha de defesa quando aqueles ao seu redor estiverem em perigo.",
    "sourcePage": 469,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "469–470",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 469,
        "text": "Você recebe duas opções. Fuga Fantasma: como reação quando você ou uma criatura aliada a até 9 metros for alvo de um ataque ou efeito, use Canalizar Divindade para transportar o alvo e outras criaturas voluntárias no mesmo alcance, em quantidade igual à metade do seu nível de Paladino, para um semiplano inofensivo, fazendo o ataque ou efeito errar. Elas retornam no início do próximo turno ao espaço anterior ou ao desocupado mais próximo. Tração Zero: como reação quando outra criatura entra em um espaço a até 9 metros, use Canalizar Divindade para exigir salvaguarda de Sabedoria. Em uma falha, ela fica atordoada por 1 minuto e repete a salvaguarda no fim de cada turno; em um sucesso, perde todo o deslocamento restante até o início do próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA DE REFLEXOS EMBOTADOS",
        "level": 7,
        "page": 469,
        "text": "Criaturas hostis dentro da sua Aura de Proteção realizam salvaguardas de Destreza com desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ENCANTAMENTO PROTETOR",
        "level": 15,
        "page": 470,
        "text": "Criaturas aliadas dentro da sua Aura de Proteção, incluindo você, têm vantagem em testes de concentração e em salvaguardas recorrentes realizadas no fim de seus turnos para encerrar efeitos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SELADO NO TEMPO",
        "level": 20,
        "page": 470,
        "text": "Uma vez cada por Descanso Longo, você pode conjurar Palavra de Poder: Imobilidade e Parar o Tempo como magias de Paladino sem gastar espaço nem componentes materiais. Ao conjurar Parar o Tempo dessa forma, você pode realizar um ataque com arma contra cada criatura ao alcance sem encerrar a magia; um segundo ataque contra a mesma criatura encerra o efeito. O dano desses ataques só é aplicado quando Parar o Tempo termina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Juramento",
        "page": 469,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
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
            "spells": "Maldição; Limpeza do Sistema"
          },
          {
            "level": "5º",
            "spells": "Acalmar Emoções; Imobilizar Pessoa"
          },
          {
            "level": "9º",
            "spells": "Arcana Abjurativa; Círculo Mágico"
          },
          {
            "level": "13º",
            "spells": "Esfera Resiliente; Ira da Valquíria"
          },
          {
            "level": "17º",
            "spells": "Cúpula Antivida; Muralha de Energia"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-paladin-oath-of-remembrance",
    "classId": "paladin",
    "name": "Juramento da Rememoração",
    "originalName": "Oath of Remembrance",
    "aliases": [
      "Oath of Remembrance"
    ],
    "desc": "Paladinos do Coro dos Ídolos juram levar consigo memórias de inimigos, lugares e pessoas, protegendo a história e recuperando conhecimentos perdidos para que o passado sustente um futuro melhor. Magias de Juramento — 3º: Alarme, Rito Cerimonial; 5º: Raio Lunar, Projetar Imagem; 9º: Salto Trovejante, Talento Gêmeo; 13º: Santuário Privado, Donzelas do Escudo; 17º: Arma Ressonante, Vento Cortante. Dogmas — Cuidado com o Passado: quem esquece os erros do passado está condenado a repeti-los. Nunca Esqueça: nomes, identidades e experiências têm valor e devem ser preservados. Proteja o Progresso: mantenha o desejo de construir um futuro maior e mais brilhante e não impeça a evolução de pessoas, ideias ou culturas.",
    "sourcePage": 470,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "470–471",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 470,
        "text": "Você recebe duas opções. Sacramento da Recordação: como ação bônus, escolha um número de magias de Paladino igual ao seu bônus de proficiência que não estejam preparadas e para as quais possua espaços adequados; elas ficam preparadas até seu próximo Descanso Longo ou até usar esta opção novamente. Fragmento de Rememoração: quando uma criatura a até 9 metros usa uma ação, use Canalizar Divindade como reação para criar por 1 hora uma memória divina daquela ação. Depois, usando o mesmo tipo de ação originalmente exigido, você pode reproduzi-la. Só pode copiar ação ou ação bônus; efeitos que criam uma ação extra, como Surto de Ação, só podem ser copiados se você for capaz de usar as ações geradas. Se for magia, deve ser de nível para o qual você possua espaço, mas não gasta espaço. Se não for magia, a ação precisa ser ilimitada, ter Recarga 4–6 ou melhor, ou recarregar em Descanso Curto, não Longo. Não pode vir de item mágico ou artefato. Ao reproduzir magia, ela usa o menor valor entre o nível original e seu maior espaço disponível, usa seu ataque e CD de magia de Paladino, e qualquer duração maior é reduzida a 1 minuto. Se a ação original consumia um recurso, você é considerado como tendo gasto o mesmo recurso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MEMÓRIA DO GUARDIÃO",
        "level": 3,
        "page": 471,
        "text": "Você sempre consegue recordar nomes, detalhes finos, códigos, padrões e outras informações que tenha aprendido ao tentar lembrá-las. Além disso, tem vantagem em salvaguardas contra efeitos que alterem sua memória ou seus valores de Inteligência ou Sabedoria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA DE DILIGÊNCIA",
        "level": 7,
        "page": 471,
        "text": "Criaturas beneficiadas por sua Aura de Proteção recebem em testes deliberados de Sabedoria (Percepção) um bônus igual ao bônus que sua Aura concede às salvaguardas. Isso não se aplica à Percepção passiva.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "LÂMINA SÔNICA",
        "level": 15,
        "page": 471,
        "text": "Quando acertar uma criatura com uma arma com a qual seja proficiente, o ataque causa dano trovejante adicional igual ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MELODIA HEROICA",
        "level": 20,
        "page": 471,
        "text": "Como ação bônus, gere uma canção de cura e proteção que afeta criaturas a até 9 metros. Aliados à sua escolha recebem 2d12 + 5 pontos de vida temporários; se estiverem com 0 pontos de vida, recuperam 1. Hostis à sua escolha fazem salvaguarda de Constituição, sofrendo 5d12 de dano trovejante em uma falha ou metade em um sucesso. Uma vez por Descanso Longo; depois, só pode usar novamente gastando Canalizar Divindade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Juramento",
        "page": 470,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
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
            "spells": "Alarme; Rito Cerimonial"
          },
          {
            "level": "5º",
            "spells": "Raio Lunar; Projetar Imagem"
          },
          {
            "level": "9º",
            "spells": "Salto Trovejante; Talento Gêmeo"
          },
          {
            "level": "13º",
            "spells": "Santuário Privado; Donzelas do Escudo"
          },
          {
            "level": "17º",
            "spells": "Arma Ressonante; Vento Cortante"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-paladin-oath-of-sacrifice",
    "classId": "paladin",
    "name": "Juramento do Sacrifício",
    "originalName": "Oath of Sacrifice",
    "aliases": [
      "Oath of Sacrifice"
    ],
    "desc": "Normalmente agentes de Harros, estes Paladinos colocam aqueles sob sua proteção acima de si mesmos e oferecem a própria segurança para manter outros vivos. Muitos se chamam de Mão Vermelha, em lembrança ao sacrifício de Harros. Magias de Juramento — 3º: Inimigo Dedicado, Santuário; 5º: Nublar, Esfera Flamejante; 9º: Manto Fantasmagórico, Equilíbrio de Vitalidade; 13º: Localizar Criatura, Pele de Pedra; 17º: Dominar Pessoa, Muralha de Pedra. Dogmas — Dê de Si Mesmo: conceda aos outros a proteção que desejaria se seu braço de espada falhasse. Erga o Punho: tolerar o mal, mesmo por propósito diligente, só produz mais sofrimento; revide sem demora. Valorize a Vida Acima de Tudo: respeite aquilo que é perdido em cada sacrifício e não se entregue irrefletidamente.",
    "sourcePage": 471,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "471–472",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 472,
        "text": "Você recebe duas opções. Casca Dourada: como ação, escolha a até 9 metros um número de criaturas igual ao seu bônus de proficiência, sem poder escolher a si mesmo. Cada uma recebe pontos de vida temporários iguais a 1d10 multiplicado pelo maior nível de espaço de Paladino ao qual você tem acesso. Eles duram 1 minuto ou até você ser reduzido a 0 pontos de vida; enquanto possuí-los, a criatura tem resistência a perfurante, cortante e contundente. Selo de Proteção: como ação bônus, escolha uma criatura que possa ver a até 18 metros. Por 1 minuto ou até você cair a 0 pontos de vida, ela tem resistência a perfurante, cortante e contundente. Durante esse minuto, você ou o alvo pode usar uma reação quando sofrer dano para reduzi-lo a 0, encerrando então o efeito.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AURA DE ESCUDO",
        "level": 7,
        "page": 472,
        "text": "Quando uma criatura dentro da Aura de Proteção sofrer dano de um ataque ou efeito que a tenha como único alvo, você pode usar sua reação para reduzir esse dano à metade. Se fizer isso, você também sofre a mesma quantidade de dano, que não pode ser reduzida. O dano reduzido dessa forma não pode deixar o alvo inicial abaixo de 1 ponto de vida.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SENTINELA IMPRUDENTE",
        "level": 15,
        "page": 472,
        "text": "Se uma criatura aliada a até 9 metros estiver Morrendo, com 0 pontos de vida ou tiver morrido no último minuto, você tem vantagem em ataques e testes de atributo. Além disso, se estiver a até 1,5 metro de uma criatura com 0 pontos de vida e ela for alvo único de um ataque ou magia, você pode usar sua reação para se tornar o alvo. Pode redirecionar sem gastar reação, desde que não esteja com 0 pontos de vida nem incapacitado; nesse caso, o ataque redirecionado tem vantagem e/ou suas salvaguardas contra o efeito têm desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ASCENSÃO E QUEDA",
        "level": 20,
        "page": 472,
        "text": "Ao ser reduzido a 0 pontos de vida, você continua consciente e pode agir normalmente enquanto estiver Morrendo. Sofrer dano não causa falha automática em salvaguarda contra a morte; em vez disso, você deve realizar uma salvaguarda contra a morte com desvantagem. Três falhas ainda o matam, e um acerto crítico contra você causa uma falha automática. Três sucessos ou um 20 natural fazem você recuperar 10 pontos de vida. Cura recebida enquanto estiver a 0, exceto por sucessos nas salvaguardas, primeiro é reduzida em 10 por cada falha acumulada, removendo uma falha para cada 10 pontos; qualquer cura menor que 10 enquanto ainda houver uma falha vira pontos de vida temporários. Você só pode recuperar pontos de vida normalmente depois de não ter mais falhas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Magias de Juramento",
        "page": 471,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
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
            "spells": "Inimigo Dedicado; Santuário"
          },
          {
            "level": "5º",
            "spells": "Nublar; Esfera Flamejante"
          },
          {
            "level": "9º",
            "spells": "Manto Fantasmagórico; Equilíbrio de Vitalidade"
          },
          {
            "level": "13º",
            "spells": "Localizar Criatura; Pele de Pedra"
          },
          {
            "level": "17º",
            "spells": "Dominar Pessoa; Muralha de Pedra"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-rogue-dreg-letter",
    "classId": "rogue",
    "name": "Carta de Escória",
    "originalName": "Dreg Letter",
    "aliases": [
      "Dreg Letter"
    ],
    "desc": "Assassinos que aplicam conhecimento médico para perfurar pontos vitais e debilitar seus alvos. Sabem onde golpear, quando torcer a lâmina e o que deve ser seccionado para causar ferimentos graves e persistentes. Esse treinamento também os torna capazes de prestar cuidados médicos básicos.",
    "sourcePage": 477,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "477",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "CONHECIMENTO MÉDICO",
        "level": 3,
        "page": 477,
        "text": "Você ganha proficiência e Especialização na perícia Medicina.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INCISÃO CIRÚRGICA",
        "level": 3,
        "page": 477,
        "text": "Quando acerta uma criatura com um ataque que qualificaria para seu Ataque Furtivo, mesmo que não aplique esse dano, você pode tentar causar uma ferida severa. O alvo realiza uma salvaguarda de Constituição contra sua CD baseada em Destreza. Em falha, sofre uma ferida duradoura por 1 minuto. Enquanto ela persistir, você causa dano adicional toda vez que acerta o alvo com um ataque de arma e também no início de cada turno dele. O dano depende do seu nível de Ladino: 3º, 1d6; 7º, 1d8; 11º, 1d10; 15º, 1d12; 19º, 2d8. O alvo repete a salvaguarda de Constituição no fim de cada turno, encerrando o efeito em um sucesso. Apenas uma ferida sua pode afetá-lo por vez; aplicar uma nova substitui a anterior. Criaturas incorpóreas, elementais e constructos têm sucesso automático. Como ação, uma criatura ferida pode realizar um teste de Medicina contra a mesma CD e encerrar o efeito em um sucesso. A ferida também se fecha se ela recuperar de uma só vez uma quantidade de pontos de vida igual ou superior ao seu nível de Ladino.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA (LEVE)",
        "level": 9,
        "page": 477,
        "text": "Ao realizar a ação Atacar, você pode fazer dois ataques em vez de um, desde que ambos sejam feitos com armas que possuam as propriedades leve ou acuidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXPOR FERIDAS",
        "level": 13,
        "page": 477,
        "text": "Quando acerta com vantagem uma criatura afetada por sua Incisão Cirúrgica, o dano que ela sofre no início de cada turno aumenta em uma quantidade igual ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EVISCERAR",
        "level": 17,
        "page": 477,
        "text": "Quando acerta uma criatura afetada por sua Incisão Cirúrgica com um ataque que qualificaria para Ataque Furtivo, você pode forçá-la a realizar uma salvaguarda de Constituição contra sua CD baseada em Destreza. Em falha, a Incisão Cirúrgica termina imediatamente e o ataque se torna automaticamente um acerto crítico.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-rogue-potential-chainer",
    "classId": "rogue",
    "name": "Encadeador de Potencial",
    "originalName": "Potential Chainer",
    "aliases": [
      "Potential Chainer"
    ],
    "desc": "Guiado por instintos sobre-humanos, o Encadeador age sobre oportunidades assim que elas aparecem, confiando mais em seu senso imediato de ação que no pensamento consciente. Essa abordagem direta lhe permite reagir mais rápido que combatentes com grau semelhante de treinamento.",
    "sourcePage": 477,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "477–478",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "REAÇÃO FEROZ",
        "level": 3,
        "page": 477,
        "text": "Sempre que você realiza uma reação desencadeada por uma criatura, pode fazer um ataque contra a criatura que a desencadeou usando uma arma que esteja segurando, desde que ela esteja ao alcance. Esse ataque reativo é resolvido depois da ação da criatura e somente ocorre se você ainda for capaz de realizar ações.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE DO FARDO PERDIDO",
        "level": 3,
        "page": 477,
        "text": "Quando erra um ataque com arma que qualificaria para Ataque Furtivo, você pode usar sua reação para conceder ao ataque um bônus igual ao número de dados do seu Ataque Furtivo. Se isso transformar o erro em acerto, role metade dos dados do seu Ataque Furtivo, arredondado para baixo, e adicione o resultado ao dano. Usar esta característica conta como usar seu Ataque Furtivo e não pode ser feito se você já o tiver usado neste turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REBOTE",
        "level": 9,
        "page": 478,
        "text": "Na primeira vez em cada turno que você obtiver um 1 natural em uma jogada de ataque, teste de atributo ou salvaguarda, pode tratar o resultado do d20 como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 13,
        "page": 478,
        "text": "Ao realizar a ação Atacar, você pode atacar duas vezes em vez de uma, desde que os dois ataques sejam feitos com a mesma arma: uma arma corpo a corpo leve ou com acuidade, ou uma arma à distância.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATOR EFICIENTE",
        "level": 17,
        "page": 478,
        "text": "Você pode tratar sua ação como uma ação bônus ou sua ação bônus como uma ação, permitindo que use duas ações ou duas ações bônus no mesmo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-rogue-versatile-beast",
    "classId": "rogue",
    "name": "Fera Versátil",
    "originalName": "Versatile Beast",
    "aliases": [
      "Versatile Beast"
    ],
    "desc": "A Fera Versátil carrega uma forma incompleta de licantropia, adquirida por contato, herança ou mutação de magia sombria. Presas e unhas afiadas evocam um lobisomem ou outra fera semelhante, e o Ladino incorpora essas armas naturais ao seu estilo de luta.",
    "sourcePage": 478,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "478",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "VISÃO NO ESCURO DA FERA",
        "level": 3,
        "page": 478,
        "text": "Você ganha visão no escuro de 9 metros. Se já possuir visão no escuro, o alcance dela aumenta em 9 metros.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DENTE E GARRA",
        "level": 3,
        "page": 478,
        "text": "Suas unhas e dentes podem rasgar inimigos. Seus ataques desarmados contam como armas com as propriedades leve e acuidade e causam 1d4 de dano cortante, salvo se outra característica definir dano maior. Você pode realizar um ataque desarmado como ação bônus. O dado aumenta para 1d6 no 9º nível de Ladino e 1d8 no 13º nível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TRANSFORMAÇÃO PARCIAL",
        "level": 9,
        "page": 478,
        "text": "Seu corpo assume traços bestiais. Você ganha deslocamento de escalada igual ao seu deslocamento base; a visão no escuro recebida ou ampliada por Visão no Escuro da Fera passa a 18 metros; seu deslocamento aumenta em 3 metros; e, quando realiza a ação Disparada, pode fazer um ataque desarmado como parte da mesma ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FERIDA AMALDIÇOADA",
        "level": 13,
        "page": 478,
        "text": "Quando acerta uma criatura com um ataque desarmado, pode transmitir parte de sua maldição. O alvo realiza uma salvaguarda de Constituição contra sua CD baseada em Constituição. Em falha, fica amaldiçoado por 1 minuto; no início de cada turno sofre dano necrótico igual ao dado de dano do seu ataque desarmado e fica envenenado. Repete a salvaguarda no fim de cada turno, encerrando o efeito em um sucesso. Usos por Descanso Longo iguais ao seu modificador de Constituição.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RAJADA PRIMAL",
        "level": 13,
        "page": 478,
        "text": "Quando realiza um ataque desarmado usando uma ação bônus, pode fazer dois em vez de um. Seus ataques desarmados contam como mágicos para superar resistências.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FATOR DE CURA",
        "level": 17,
        "page": 478,
        "text": "Como ação bônus, você pode ativar cura acelerada por 1 minuto. No início de cada um de seus turnos, enquanto tiver ao menos 1 ponto de vida, recupera pontos de vida iguais à metade do seu nível de Ladino, arredondado para baixo. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-rogue-academy-duller",
    "classId": "rogue",
    "name": "Silenciador da Academia",
    "originalName": "Academy Duller",
    "aliases": [
      "Academy Duller"
    ],
    "desc": "Agentes assassinos da Academia especializados em alcançar rapidamente seus alvos e abatê-los. Seus golpes distorcem a magia das vítimas, provocando surtos de dor que tornam mais fácil quebrar sua concentração.",
    "sourcePage": 476,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "476",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "DIVISOR DE MAGIAS",
        "level": 3,
        "page": 476,
        "text": "Quando você aplica seu dano de Ataque Furtivo a um acerto contra uma criatura que esteja se concentrando em um efeito mágico originado de uma magia ou se beneficiando dele, a criatura da qual o efeito se origina deve realizar um teste de concentração adicional, separado daquele provocado pelo dano. Em uma falha, o efeito termina, mesmo que normalmente não exija concentração.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PERSEGUIÇÃO CINTILANTE",
        "level": 9,
        "page": 476,
        "text": "Como ação bônus, você pode se teleportar para um espaço desocupado adjacente a uma criatura a até 18 metros que, desde o fim do seu último turno, tenha conjurado uma magia, esteja sob um efeito mágico, tenha sofrido dano de um efeito mágico ou tenha realizado uma salvaguarda contra um. Seu primeiro ataque contra ela no mesmo turno é feito com vantagem. Usos por Descanso Curto ou Longo iguais à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EVASÃO DO ARCANISTA",
        "level": 13,
        "page": 476,
        "text": "Quando realiza uma salvaguarda contra um efeito mágico para sofrer metade do dano, você não sofre dano em um sucesso e sofre metade em uma falha. Além disso, quando falha em uma salvaguarda contra um efeito mágico, pode usar sua reação para rolar um d20 e substituir o resultado anterior, possivelmente alterando o desfecho.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 17,
        "page": 476,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-rogue-deadshot",
    "classId": "rogue",
    "name": "Tiro Certeiro",
    "originalName": "Deadshot",
    "aliases": [
      "Deadshot"
    ],
    "desc": "Especialistas no uso de armas de fogo, estes Ladinos são atiradores de elite que treinam técnicas engenhosas para encurralar, desorientar e redirecionar seus alvos.",
    "sourcePage": 476,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "476",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TÁTICO DE ARMAS DE FOGO",
        "level": 3,
        "page": 476,
        "text": "Você ganha proficiência com armas de fogo simples e marciais. O primeiro ataque que fizer em cada turno com uma arma de fogo pode atingir até o alcance longo dela sem sofrer a penalidade normal de alcance longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MESTRE DAS ARMAS DE FOGO",
        "level": 9,
        "page": 476,
        "text": "Você recebe o Estilo de Luta Especialista em Armas de Fogo. Se já o possuir, ele avança em vez disso. Ao alcançar o 17º nível de Ladino, ele avança novamente, se houver um estágio disponível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DISPARO PREPARADO",
        "level": 9,
        "page": 476,
        "text": "Enquanto empunha uma arma de fogo, você pode usar uma ação bônus e gastar uma munição para executar uma das opções a seguir. Tiro de Cobertura: um alvo dentro do alcance da arma faz uma salvaguarda de Destreza usando sua CD baseada em Destreza; em falha, fica temporariamente ferido e subtrai 1d4 de cada ataque com arma que fizer até o início do seu próximo turno. Tiro Extra: faça um ataque com a arma de fogo. Tiro de Preparação: um alvo dentro do alcance normal faz salvaguarda de Sabedoria contra sua CD baseada em Destreza; em falha, você tem vantagem em todos os ataques contra ele neste turno. Tiro de Lentidão: faça um ataque com arma à distância; em um acerto, o deslocamento do alvo é reduzido em 4,5 metros até o fim do próximo turno dele.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FOGO DE COBERTURA SUPERIOR",
        "level": 13,
        "page": 476,
        "text": "Quando uma criatura entra no alcance normal de sua arma de fogo, você pode realizar um ataque de oportunidade contra ela usando essa arma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SAQUE VELOZ",
        "level": 17,
        "page": 476,
        "text": "No seu turno, se ainda não tiver atacado com uma arma de fogo, você pode usar sua ação bônus para fazer rapidamente dois ataques com uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-rogue-vigilante",
    "classId": "rogue",
    "name": "Vigilante",
    "originalName": "Vigilante",
    "aliases": [
      "Vigilante"
    ],
    "desc": "Um sentinela sombrio que toma a lei nas próprias mãos e usa o medo como arma principal. Ataca quando menos se espera, empregando armas de arremesso enquanto encurta a distância, e costuma assumir uma postura dramática para convencer suas vítimas de que ele próprio é a justiça indomável.",
    "sourcePage": 478,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "478–479",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MEDO DO MASSACRE",
        "level": 3,
        "page": 478,
        "text": "Quando reduz uma criatura a 0 pontos de vida ou obtém resultado natural 20 em um ataque contra ela, você pode forçar todas as criaturas hostis a até 9 metros dela a realizar uma salvaguarda de Sabedoria contra sua CD baseada em Destreza. Em falha, elas ficam amedrontadas por você até o fim do seu próximo turno. Quando ataca uma criatura amedrontada por você, role 1d4 e some o resultado tanto à jogada de ataque quanto ao dano desse ataque.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALISTA EM ARMAS DE ARREMESSO",
        "level": 3,
        "page": 478,
        "text": "Você recebe o Estilo de Luta Combate com Armas de Arremesso. Quando realiza a ação Atacar e usa todos os ataques dessa ação exclusivamente para ataques à distância com armas leves de arremesso, pode fazer um ataque adicional desse tipo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APRIMORAMENTO DE ESTILO DE LUTA",
        "level": 9,
        "page": 479,
        "text": "Seu Estilo de Luta Combate com Armas de Arremesso avança.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "GOLPE IMOBILIZADOR",
        "level": 9,
        "page": 479,
        "text": "Quando acerta uma criatura com um ataque que normalmente qualificaria para seu Ataque Furtivo, pode abrir mão desse dano para tentar debilitá-la. O alvo realiza uma salvaguarda de Constituição contra sua CD baseada em Destreza. Em falha, fica paralisado até o início do seu próximo turno e seu Ataque Furtivo deste turno é considerado usado. Em sucesso, você aplica normalmente o dano do Ataque Furtivo. Usos por Descanso Longo iguais à metade do seu bônus de proficiência, arredondado para baixo, mas um uso só é gasto quando uma criatura falha na salvaguarda.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA (LEVE)",
        "level": 13,
        "page": 479,
        "text": "Ao realizar a ação Atacar, você pode fazer dois ataques em vez de um, desde que ambos sejam realizados com armas que possuam a propriedade leve.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DE UM PARA OUTRO",
        "level": 13,
        "page": 479,
        "text": "Uma vez em cada um de seus turnos, quando reduz uma criatura a 0 pontos de vida com um ataque de arma, pode mover-se imediatamente até seu deslocamento em direção a outra criatura e fazer contra ela um ataque adicional usando uma arma leve.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TORCER A LÂMINA",
        "level": 17,
        "page": 479,
        "text": "Se acertar uma criatura atordoada, paralisada ou amedrontada por você depois de já ter usado seu Ataque Furtivo no turno, ainda pode rolar metade dos dados normais do Ataque Furtivo, arredondado para baixo, e somá-los ao dano. Esta característica não pode ser usada contra o mesmo alvo mais de uma vez por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-phantom-soul",
    "classId": "sorcerer",
    "name": "Alma Fantasma",
    "originalName": "Phantom Soul",
    "aliases": [
      "Phantom Soul"
    ],
    "desc": "A alma deste Feiticeiro está desconectada dos vivos, talvez por possessão, maldição de morto-vivo, experiência de quase morte ou trauma extracorpóreo. Ao canalizar magia nessa condição, ele se aproxima da forma de um espírito, desaparece da vista, enxerga almas e pode possuir outros corpos.",
    "sourcePage": 483,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "483–484",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FORMA TRANSPARENTE",
        "level": 1,
        "page": 483,
        "text": "Você pode conjurar Invisibilidade e Invisibilidade Maior sem gastar espaço, pagando respectivamente 1 e 3 Pontos de Feitiçaria. Em ambos os casos, só pode escolher a si mesmo como alvo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MENTE INCOGNOSCÍVEL",
        "level": 1,
        "page": 483,
        "text": "Você tem resistência a dano psíquico e vantagem em salvaguardas para resistir às condições amedrontado e enfeitiçado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OLHOS ESPIRITUAIS",
        "level": 6,
        "page": 484,
        "text": "Você vê e interage com criaturas etéreas ou invisíveis como se estivessem claramente visíveis. Também consegue identificar se criaturas que vê a até 3 metros são mortos-vivos ou constructos, observando sinais de vida ou de uma alma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CORPO SEM PESO",
        "level": 14,
        "page": 484,
        "text": "Você deixa de estar preso à gravidade e ganha deslocamento de voo com pairar igual ao seu deslocamento base. Como consequência de sua ausência de peso, tem vantagem em testes de Furtividade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "POSSESSÃO COMPLETA",
        "level": 18,
        "page": 484,
        "text": "Como ação, gaste 5 Pontos de Feitiçaria para conjurar Dominar Monstro sem espaço contra uma criatura que possa tocar. Seu corpo físico e pertences desaparecem e entram no alvo em forma espiritual. Enquanto o possui, pode falar com sua voz ou a dele, enxergar usando seus sentidos ou os dele e usar qualquer deslocamento e tipo de movimento que qualquer um possua. Você controla a criatura conforme Dominar Monstro e, no seu turno, pode controlar diretamente o corpo para realizar tantas ações quanto você próprio poderia, escolhendo ações suas ou da criatura, desde que a anatomia permita. Condições e efeitos que afetam você também afetam o hospedeiro e vice-versa. Como ação bônus, pode materializar um item mágico seu nas posses do hospedeiro; ele permanece até ser largado, a possessão terminar ou você recolhê-lo como ação bônus. O hospedeiro pode se beneficiar dele se você estiver sintonizado ou se o item não exigir sintonia. Quando o efeito termina, você surge em forma física em um espaço desocupado adjacente. Se terminou porque perdeu concentração, você fica atordoado até o fim do próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-witchcraft",
    "classId": "sorcerer",
    "name": "Bruxaria",
    "originalName": "Witchcraft",
    "aliases": [
      "Witchcraft"
    ],
    "desc": "Bruxas, suas descendentes e aqueles que aprenderam com elas manipulam energia natural e carma por meio da Bruxaria. Essa feitiçaria altera o fluxo de energia no corpo dos outros e chega a influenciar sorte e destino para atender aos desejos do conjurador.",
    "sourcePage": 485,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "485–486",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MALDIÇÃO ABJURATIVA",
        "level": 1,
        "page": 485,
        "text": "Quando conjura uma magia de Feiticeiro de 1º nível ou superior e uma criatura falha na salvaguarda contra ela ou é atingida por um ataque da magia, você pode gastar 1 Ponto de Feitiçaria para amaldiçoá-la até o início do seu próximo turno. Enquanto amaldiçoada, sempre que fizer uma jogada de ataque ou salvaguarda, rola 1d4 e subtrai o resultado. No 12º nível de Feiticeiro, passa a subtrair 1d8.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MALDIÇÃO DA INFLIÇÃO",
        "level": 1,
        "page": 485,
        "text": "Você conhece Infligir Ferimentos como magia de Feiticeiro, sem contar no limite de magias conhecidas. Ao conjurá-la, pode fazer um ataque de magia à distância contra uma criatura visível a até 18 metros em vez de um ataque de magia corpo a corpo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BRUXARIA",
        "level": 6,
        "page": 485,
        "text": "Você pode gastar Pontos de Feitiçaria nos seguintes efeitos. Coalhar Arcano: quando uma criatura visível a até 36 metros recupera pontos de vida, use reação e gaste 1 ponto para reduzir a cura à metade, arredondado para baixo; depois ela faz salvaguarda de Constituição ou fica envenenada até o fim do seu próximo turno. Sorte Gregária: como ação, gaste 2 pontos e toque uma criatura para dar a ela 1 ponto de sorte até ser usado ou até um Descanso Longo; quando errar um ataque ou falhar uma salvaguarda, ela pode gastar o ponto para rolar um novo d20 e substituir o anterior. Apenas 1 ponto por criatura. Infortúnio Conjunto: como ação, gaste 2 pontos e escolha duas criaturas visíveis a até 18 metros, separadas por no máximo 12 metros. Cada uma faz salvaguarda de Carisma; em falha, fica amaldiçoada por 1 minuto, e qualquer efeito prejudicial que afete uma é tratado como afetando a outra também, incluindo dano contínuo, condições, desvantagem, penalidades de rolagem e redução de deslocamento. Efeitos idênticos não se acumulam. Cada uma repete a salvaguarda no fim do turno, encerrando em sucesso. Panaceia: como ação, gaste pelo menos 1 ponto para conjurar Curar Ferimentos sem espaço em uma criatura ao alcance; o nível da magia é igual ao número de Pontos de Feitiçaria gastos, limitado pelo seu maior espaço de Feiticeiro. Por 1 ponto adicional para cada efeito, também pode remover envenenamento; cegueira ou surdez temporária; uma progressão de petrificação; paralisia; uma maldição causada por magia; ou uma doença não mágica.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DANÇANDO NO VENTO",
        "level": 14,
        "page": 485,
        "text": "Você ganha deslocamento de voo com pairar igual ao seu deslocamento base. Se já possuir deslocamento de voo com pairar maior, inclusive temporariamente, seu movimento em voo não provoca ataques de oportunidade. Você pode tocar uma criatura voluntária de no máximo uma categoria de tamanho maior e fazê-la pairar sem peso com você enquanto mantiver uma das mãos dedicada a ela; isso não conta como carregar seu peso, mas soltá-la faz com que caia imediatamente.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "COLHER FORTUNA",
        "level": 18,
        "page": 486,
        "text": "Quando reduz uma criatura hostil a 0 pontos de vida, você extrai dela carma positivo e recupera 1d4 Pontos de Feitiçaria. Depois disso, não pode recuperar novamente desta forma até o início do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-eidolic-cosmologus",
    "classId": "sorcerer",
    "name": "Cosmólogo Eidólico",
    "originalName": "Eidolic Cosmologus",
    "aliases": [
      "Eidolic Cosmologus"
    ],
    "desc": "Feiticeiros cuja magia inata se ancora nas antigas potências dos Eidolons. Seu vínculo cosmológico molda o tipo de energia que resistem, as magias que recebem e a maneira como convertem caos e dano em combustível arcano.",
    "sourcePage": 481,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "481–482",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FRAGMENTO COSMOLÓGICO",
        "level": 1,
        "page": 481,
        "text": "Escolha um Eidolon na tabela: Aymere — veneno e a magia Enredar; Harros — energia e Heroísmo; T’quinn — trovejante e Onda Trovejante; Vestias — elétrico e Raio Imobilizador. Você ganha resistência ao tipo de dano correspondente e aprende a magia indicada; ela não conta em suas magias conhecidas e é uma magia de Feiticeiro para você. Uma vez por Descanso Curto ou Longo, você pode conjurá-la sem gastar espaço.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DADOS DE DESASTRE",
        "level": 1,
        "page": 482,
        "text": "Você absorve energia do caos. Sempre que conjura uma magia que causa o tipo de dano ao qual seu Fragmento Cosmológico concede resistência, sofre dano desse tipo ou sofre 5 ou mais pontos de dano, ganha um Dado de Desastre d6. Você pode manter uma quantidade igual ao seu bônus de proficiência e perde todos ao terminar um Descanso Longo. Pode gastá-los assim: Aprimorar Magia — em uma magia com jogadas de ataque, gaste um ou mais dados em cada ataque, role-os e some o resultado à jogada; Aura Protetora — quando for alvo de um ataque, use reação e gaste um dado para aumentar sua CA pelo resultado até o início do próximo turno; Poder Restaurador — ao terminar um Descanso Curto e gastar Dados de Vida, gaste um ou mais Dados de Desastre para rolá-los e recuperar pontos de vida iguais ao resultado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MATRIZ DE CRIAÇÃO",
        "level": 6,
        "page": 482,
        "text": "Quando gasta Pontos de Feitiçaria em uma opção de Metamagia, pode gastar e rolar um Dado de Desastre para criar Pontos de Feitiçaria temporários iguais ao resultado. Eles são gastos antes dos seus pontos normais e desaparecem no fim do turno. Você não pode ganhar Dados de Desastre de uma magia conjurada em consequência de uma Metamagia alimentada por esses pontos temporários.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAPACIDADE MAIOR",
        "level": 14,
        "page": 482,
        "text": "Seus Dados de Desastre tornam-se d8. Além disso, receba o benefício ligado ao Eidolon escolhido. Sobrecarga (Vestias): você ganha 1d4 Dados de Desastre ao terminar um Descanso Curto. Canção de Distorção (T’quinn): quando uma criatura realiza salvaguarda contra uma de suas magias, gaste 1 Ponto de Feitiçaria, role 1d8 e subtraia o resultado da salvaguarda. Força do Sol (Harros): seu máximo de pontos de vida aumenta em seu nível de Feiticeiro e cresce em mais 1 a cada novo nível de Feiticeiro. Toque de Restauração (Aymere): pode conjurar Restauração Menor ou Restauração Maior, sem espaço, gastando respectivamente 1 ou 2 Pontos de Feitiçaria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RETORNO À FORMA",
        "level": 14,
        "page": 482,
        "text": "Quando seus pontos de vida forem reduzidos a 0, você pode gastar todos os Dados de Desastre que possua, exceto os obtidos da própria fonte desse dano, rolá-los e receber o total como pontos de vida temporários. Se o dano não reduzir esses pontos temporários a 0, você fica com 1 ponto de vida em vez de cair a 0.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VÓRTICE OBLITERADOR",
        "level": 18,
        "page": 482,
        "text": "Como ação, crie em um ponto visível a até 18 metros um vórtice por 1 minuto, até dispensá-lo como ação bônus ou até ficar incapacitado. Ele é um cilindro de 9 metros de altura e 3 metros de raio. Criaturas que iniciarem o turno nele ou entrarem pela primeira vez no turno fazem salvaguarda de Destreza; em falha sofrem 3d12 de dano do tipo do seu Fragmento Cosmológico e ficam com deslocamento 0 até o início do próximo turno; em sucesso sofrem metade. O espaço é terreno difícil. Quando uma criatura sofre dano do vórtice, recebe ainda uma quantidade de d8 igual aos Dados de Desastre que você possui naquele momento. No início de cada um de seus turnos enquanto o vórtice existir, você perde 1 Dado de Desastre. Se não possuir nenhum, deve manter concentração como se fosse uma magia. Uma vez por Descanso Curto ou Longo; usos adicionais custam 4 Pontos de Feitiçaria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-vestian-inheritor",
    "classId": "sorcerer",
    "name": "Herdeiro Vestiano",
    "originalName": "Vestian Inheritor",
    "aliases": [
      "Vestian Inheritor"
    ],
    "desc": "Alguns Feiticeiros procuram a bênção de Vestias para ampliar seus poderes; outros apenas despertam a magia que já corria em suas veias. Essa herança se manifesta sobretudo em relâmpagos, usados tanto para agredir quanto para defender.",
    "sourcePage": 484,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "484",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PUNIÇÃO DE CHOQUE",
        "level": 1,
        "page": 484,
        "text": "Quando uma criatura a até 6 metros acerta você com um ataque, use sua reação e gaste 1 Ponto de Feitiçaria para forçá-la a fazer uma salvaguarda de Destreza. Em falha, sofre uma quantidade de d6 de dano elétrico igual à metade do seu nível de Feiticeiro, arredondado para baixo, mínimo 1; em sucesso, sofre metade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ENSINAMENTOS DA GUARDIÃ DOS CÉUS",
        "level": 1,
        "page": 484,
        "text": "Enquanto usar armadura leve ou nenhuma armadura, pode somar seu modificador de Carisma à CA. Você ganha resistência a dano elétrico. Ao aprender novas magias de Feiticeiro, pode escolher magias do grupo de magias Arcana da Guardiã dos Céus. Além disso, tem vantagem em testes eidomânticos feitos para magias de Feiticeiro.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PASSO CINTILANTE",
        "level": 6,
        "page": 484,
        "text": "No seu turno, a qualquer momento, gaste 1 Ponto de Feitiçaria para ganhar até o fim do turno deslocamento de teleporte igual ao seu deslocamento base. No 10º nível de Feiticeiro, esse deslocamento é dobrado e, se usar uma ação bônus para ativá-lo, não precisa gastar o Ponto de Feitiçaria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EXPLOSÃO ELÉTRICA",
        "level": 14,
        "page": 484,
        "text": "Como ação bônus, lance uma explosão em um ponto visível a até 36 metros. Você pode gastar até 3 Pontos de Feitiçaria ao fazê-lo. Ela explode em uma esfera de 3 metros de raio; cada alvo na área faz salvaguarda de Destreza. Em falha sofre 2d10 de dano elétrico + 1d10 adicional por Ponto de Feitiçaria gasto; em sucesso, metade. Três usos por Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ASPECTO DO COSMOS",
        "level": 18,
        "page": 484,
        "text": "Como ação, assuma por 1 minuto uma poderosa forma infernal semelhante a um emissário subcósmico, com asas douradas e pele como uma tapeçaria galáctica. Durante a forma: você é imune a dano elétrico; pode gastar 1 Ponto de Feitiçaria para conjurar como ação bônus uma magia cujo tempo seja 1 ação; tem resistência a dano de magias e efeitos mágicos; ganha voo com pairar de 18 metros; pode usar reação para conjurar Contramágica mesmo sem conhecê-la, sem gastar espaço; e, se cair a 0 pontos de vida ou morrer instantaneamente, a forma termina, o dano desencadeador é reduzido a 0 e você não morre. Uma vez por Descanso Longo; usos adicionais custam 6 Pontos de Feitiçaria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-crystal-bearer",
    "classId": "sorcerer",
    "name": "Portador do Cristal",
    "originalName": "Crystal Bearer",
    "aliases": [
      "Crystal Bearer"
    ],
    "desc": "Feiticeiros que condensam seu poder arcano em um pequeno foco de sepherita. O cristal armazena energia ambiente, amplifica a magia e, com treinamento, pode absorver agressões mágicas. Portadores do Cristal costumam ter afinidade incomum com radiação eidomântica ou descender de seres capazes de utilizá-la.",
    "sourcePage": 481,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "481",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "FOCO DE CRISTAL",
        "level": 1,
        "page": 481,
        "text": "Você pode manifestar quando desejar um fragmento de cristal de sepherita do tamanho da mão. Uma vez por Descanso Curto ou Longo, use o fragmento para um dos seguintes efeitos: aplicar gratuitamente uma opção de Metamagia que conheça, sem gastar Pontos de Feitiçaria; conjurar sem espaço uma magia conhecida cujo nível seja igual ou inferior à metade do seu bônus de proficiência, arredondado para baixo; somar a uma jogada de ataque ou salvaguarda um bônus igual à metade do seu nível de Feiticeiro, arredondado para baixo, mínimo 1; ou, como reação ao ser atingido por um ataque, reduzir à metade o dano sofrido. O cristal serve como seu foco de conjuração e pode flutuar durante o uso, deixando suas mãos livres. Se o perder, você cria outro ao terminar um Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESCUDO DE MAGIA POTENCIALIZADO",
        "level": 1,
        "page": 481,
        "text": "Quando conjura uma magia usando um espaço de Feiticeiro, você pode gastar 1 Ponto de Feitiçaria para rolar uma quantidade de d6 igual ao nível do espaço. Você recebe o total como pontos de vida temporários, que desaparecem ao terminar seu próximo Descanso Curto ou Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PUREZA DO CRISTAL",
        "level": 6,
        "page": 481,
        "text": "Você pode produzir os efeitos do Foco de Cristal uma vez adicional por Descanso Longo. Se esse uso adicional tiver sido gasto e você obtiver um 20 em qualquer salvaguarda, recupera imediatamente o uso adicional ao converter o esforço em energia mágica pura.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CONDUTO ARCO-ÍRIS",
        "level": 14,
        "page": 481,
        "text": "Você aprende Rajada Prismática, que não conta no limite de magias conhecidas de Feiticeiro. Pode conjurá-la normalmente ou sem espaço gastando 4 Pontos de Feitiçaria. Ao conjurá-la, role o d8 duas vezes para cada alvo atingido e escolha o resultado que preferir.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MALHA DA ALMA CRISTALINA",
        "level": 18,
        "page": 481,
        "text": "Seu Foco de Cristal absorve energia nociva de efeitos mágicos. Você fica imune a todo dano produzido por magias e resistente a dano de efeitos mágicos e itens mágicos. Se o efeito de uma magia vier de um artefato, de uma divindade, ou se o dano também for eidólico, você não é imune e possui apenas resistência a esse dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-sorcerer-freezing-torment",
    "classId": "sorcerer",
    "name": "Tormento Congelante",
    "originalName": "Freezing Torment",
    "aliases": [
      "Freezing Torment"
    ],
    "desc": "A origem Tormento Congelante impregna a própria alma com gelo, seja por influência elemental, peculiaridade de um Plano Elemental ou linhagem amaldiçoada. Quanto mais poderoso o Feiticeiro se torna, mais baixa fica sua temperatura corporal e mais constante é o frio que sente.",
    "sourcePage": 483,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "483",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "EM CASA NO GELO",
        "level": 1,
        "page": 483,
        "text": "Você tem resistência a dano de frio, vantagem em salvaguardas para suportar condições congelantes e ignora terreno difícil causado por gelo ou neve.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESCUDO DA SEPULTURA DE GELO",
        "level": 1,
        "page": 483,
        "text": "Quando é reduzido a 0 pontos de vida, seu poder latente recobre o corpo com uma proteção de gelo. Você recebe pontos de vida temporários iguais a 1d10 + seu nível de Feiticeiro. Enquanto os possuir, sempre que uma criatura a até 1,5 metro acertá-lo com um ataque, ela sofre 1d10 de dano de frio. Uma vez por Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RASTRO DE GELO",
        "level": 6,
        "page": 483,
        "text": "Quando conjura uma magia que causa dano de frio, pode congelar o chão ao redor de você ou de um dos alvos da magia, transformando-o em terreno difícil até descongelar. O efeito cobre todas as superfícies de uma esfera centrada no alvo, com raio em metros equivalente a 1,5 + 1,5 × o nível da magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "JAULA DE GELO EXPLOSIVA",
        "level": 14,
        "page": 483,
        "text": "Como ação bônus, faça uma estaca de gelo irromper de um ponto visível a até 18 metros, preenchendo todos os espaços adjacentes. Cada criatura na área faz salvaguarda de Destreza; em falha sofre 2d8 de dano de frio e fica restringida pelo gelo. O gelo quebra no início do seu próximo turno, libertando-as; antes disso, uma criatura pode usar a ação para realizar um teste de Força contra sua CD de magia e se libertar em um sucesso. Usos por Descanso Curto ou Longo iguais à metade do bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "NEVASCA ENCARNADA",
        "level": 18,
        "page": 483,
        "text": "Como ação, crie por 1 minuto uma nevasca centrada em você, em esfera de 3 metros de raio que se move consigo. Você não é afetado; enquanto estiver dentro dela, fica fortemente obscurecido e ataques contra você têm desvantagem. Criaturas que iniciarem o turno na esfera ou entrarem nela no próprio turno fazem salvaguarda de Constituição: em falha sofrem 4d10 de dano de frio e ficam Lentas até o início do próximo turno; em sucesso sofrem metade e não ficam Lentas. Em cada um de seus turnos durante o efeito, use ação bônus para disparar gelo em um cone de 9 metros ou uma linha de 18 metros de comprimento por 3 metros de largura. Criaturas na área fazem salvaguarda de Destreza, sofrendo 4d10 de frio em falha ou metade em sucesso. Uma vez por Descanso Longo; usos adicionais custam 5 Pontos de Feitiçaria.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-warlock-feathered-dragon",
    "classId": "warlock",
    "name": "Dragão Emplumado",
    "originalName": "Feathered Dragon",
    "aliases": [
      "Feathered Dragon"
    ],
    "desc": "Seu patrono é um dos raros dragões emplumados que disseminaram a radiação eidomântica. O pacto concede garras espectrais, afinidade com um tipo de energia dracônica e acesso direto à Eidomancia.",
    "sourcePage": 494,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "494",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "GARRAS ANCESTRAIS",
        "level": 1,
        "page": 494,
        "text": "Como ação, faça um número de ataques corpo a corpo com magia igual à metade de seu bônus de proficiência, usando seu ataque mágico de Bruxo contra um alvo a até 3 metros. Cada acerto causa 1d10 de dano cortante + dano de Manto igual ao maior entre seu modificador de Carisma e metade de seu nível de Bruxo. O dano é mágico. Como ação bônus, pode fazer um único ataque com as garras. Não pode usar ação e ação bônus para atacar com elas no mesmo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANTO DE HERANÇA",
        "level": 1,
        "page": 494,
        "text": "Escolha o tipo de dano de seu patrono: ácido (negro/cobre), gélido (prata/branco), ígneo (latão/ouro/vermelho), energético (ametista), elétrico (azul/bronze), necrótico (crânio/topázio), venenoso (verde), psíquico (esmeralda), radiante (cristal/pedra-da-lua/platina) ou trovejante (safira). Esse é seu tipo de Manto. Você tem resistência a ele e, ao obter crítico em qualquer ataque, causa +1d10 desse tipo. Rajada Mística pode causar o tipo do Manto em vez de energético.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EMANAÇÃO EIDÓLICA",
        "level": 6,
        "page": 494,
        "text": "Como ação, libere energia em um cone, linha de 1,5 metro de largura ou esfera centrada em ponto a até 36 metros. Cada dimensão principal tem 1,5 metro × seu nível de Bruxo; você pode reduzi-la em incrementos de 1,5 metro. Criaturas na área fazem salvaguarda de Destreza contra sua CD de Bruxo; em falha, sofrem dano eidólico do tipo do Manto igual a 2d6 × seu bônus de proficiência, ou metade em sucesso. Uma vez por Descanso Curto ou Longo; pode gastar um espaço de magia para usos adicionais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PACTO EIDÓLICO",
        "level": 10,
        "page": 494,
        "text": "Ao escolher magias de Bruxo, magias da escola Eidomancia contam como parte de sua lista, embora o Mestre possa restringir magias de grupos raros/incomuns. Você não realiza testes eidomânticos ao conjurá-las com espaços de pacto e tem vantagem em testes ou salvaguardas de testes eidomânticos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RESISTÊNCIA MÁGICA",
        "level": 14,
        "page": 494,
        "text": "Você tem vantagem em salvaguardas contra magias e efeitos mágicos.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "HERANÇA SOBRENATURAL",
        "level": 14,
        "page": 494,
        "text": "HERANÇA SOBRENATURAL: dano de seu tipo de Manto ignora resistência; contra imunidade, causa metade em vez de zero.\n\nINVOCAÇÕES DO DRAGÃO EMPLUMADO. OLHOS DE DRAGÃO (15º): visão verdadeira 9 m. ESCAMAS DA MENTE DRACÔNICA (2º): sem armadura, CA 10 + Des + Carisma, ainda podendo usar escudo. LANÇA DE EMANAÇÃO (7º): Emanação Eidólica ganha opção de projétil em alvo a até 36 m; ataque à distância com magia, ou corpo a corpo a 1,5 m, causando o dano normal +1d6 por ponto de bônus de proficiência. GARRAS APRIMORADAS (7º): Garras Ancestrais obtêm crítico 19–20 e, em crítico, causam dano de Manto adicional igual a 1d10 × metade de seu bônus de proficiência; contam como armas naturais e podem ser Arma de Pacto. MANTO DE IMUNIDADE (12º): imunidade ao tipo do Manto e resistência a um entre contundente, cortante ou perfurante não mágico. FERRAMENTAS DO PATRONO (5º): como ação bônus, manifeste asas ou garras endurecidas para obter voo ou escavação de 18 m até o início do próximo turno; usos por Descanso Curto ou Longo iguais ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 494,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Flecha Cromática; Escudo da Fé"
          },
          {
            "level": "2º",
            "spells": "Lâmina Flamejante; Orbes de Interferência Mágica"
          },
          {
            "level": "3º",
            "spells": "Pele de Dragão; Aljava de Vórtice"
          },
          {
            "level": "4º",
            "spells": "Conjurar Montaria Maior; Assassino Fantasmagórico"
          },
          {
            "level": "5º",
            "spells": "Onda de Choque; Subjugar Magia"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-damocles",
    "classId": "warlock",
    "name": "Dâmocles",
    "originalName": "Damocles",
    "aliases": [
      "Damocles"
    ],
    "desc": "Seu patrono é a fonte alienígena de conhecimento que inspirou as unidades DGR. O pacto manifesta uma unidade companheira chamada D.G.ANCHOR, uma âncora mecânica que cresce e adquire novos sistemas conforme seu Bruxo avança.",
    "sourcePage": 489,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "489–490",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "D.G.ANCHOR",
        "level": 1,
        "page": 490,
        "text": "Como ação, invoque sua D.G.ANCHOR em um espaço desocupado a até 9 metros. Ela compartilha sua iniciativa e permanece por 10 minutos ou até chegar a 0 PV; depois disso, só pode ser invocada novamente após Descanso Curto ou Longo. Ela pode mover-se conforme suas ordens e usar a própria reação; sem comando, sua única ação é Esquivar. Como ação bônus, você pode ordenar que use outra ação e/ou ação bônus de seu bloco. Se estiver incapacitado, ela pode agir livremente. Como ação, você também pode fazê-la teleportar para espaço desocupado a até 9 metros. Seu bônus de proficiência é igual ao seu.\n\nD.G.ANCHOR — constructo Médio (DGR), sem alinhamento. CA 11 + Destreza + bônus de proficiência; PV 5 + 5 × seu nível de Bruxo; deslocamento 9 m, aceleração 0-G 27 m. For 16, Des 14, Con 16, Int 8, Sab 14, Car 10. Compartilha suas proficiências em perícias baseadas em Força e Destreza. Resistência a veneno; imunidades: exaustão, envenenado, inconsciente. Percepção às cegas 9 m; Percepção passiva 10 + modificador de Percepção. Entende seus idiomas, mas não fala. PLACAS REFORÇADAS: ao sofrer dano, reduza-o em seu bônus de proficiência. MULTIATAQUE: no mínimo dois ataques no 6º nível e três no 14º, usando Pancada, Armamento DGR ou Blaster DGR. PANCADA: ataque corpo a corpo, For ou Des + proficiência, alcance 1,5 m, 1d8 + atributo de dano contundente. ARMAMENTO DGR (6º): ataque corpo a corpo, For +1 + proficiência; 1d12 +1 + For de dano elétrico. BLASTER DGR (6º): ataque à distância, Des +1 + proficiência, alcance 36/108 m; 1d10 +1 + Des de dano radiante. POD DE MÍSSEIS (10º): escolha alvos visíveis a até 18 m em quantidade igual à metade de seu nível de Bruxo; cada um faz salvaguarda de Destreza contra sua CD de Bruxo, sofrendo Xd10 de dano energético, onde X é seu bônus de proficiência, ou metade em sucesso. Pode concentrar vários mísseis no mesmo alvo; cada alvo adicional convertido acrescenta 1d10 ao dano daquele alvo. Depois de usar, só recupera o Pod na próxima invocação, a menos que você gaste um espaço de pacto. REATOR EXCEL opcional, ação bônus: Disparada; ou +1d8 em cada ataque do turno; ou resistência a todo dano até o início do próximo turno. Usos por Descanso Longo iguais à metade do bônus de proficiência da unidade, arredondado para cima.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "D.G.ANCHOR MAIOR",
        "level": 6,
        "page": 490,
        "text": "Sua D.G.ANCHOR recebe: +2 em um atributo e +1 em outro; proficiência em uma salvaguarda à sua escolha; pode ser invocada como Grande; Pancada causa +1d8; acesso a Armamento DGR e Blaster DGR; e ataques mágicos. Escolha também um aprimoramento: deslocamento básico +3 m e aceleração 0-G +9 m; voo (pairar) igual ao deslocamento básico; percepção às cegas 18 m e +5 em Percepção passiva; ou acesso ao Reator Excel.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "D.G.ANCHOR AVANÇADA",
        "level": 10,
        "page": 490,
        "text": "Sua D.G.ANCHOR recebe novamente +2 em um atributo e +1 em outro; acesso ao Pod de Mísseis; nova proficiência em salvaguarda; resistência a dano contundente, cortante e perfurante; e o bônus +1 de Armamento/Blaster torna-se +2. Escolha outro aprimoramento anterior ou um novo: imunidade a um entre contundente, cortante ou perfurante; todos os deslocamentos +3 m e aceleração 0-G +9 m; CA 15 + Des + proficiência; ou Armamento e Blaster causam respectivamente +1d12 e +1d10. Não pode escolher a mesma opção duas vezes.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "D.G.ANCHOR PRINCIPAL",
        "level": 14,
        "page": 490,
        "text": "Sua D.G.ANCHOR recebe novamente +2 em um atributo e +1 em outro; nova proficiência em salvaguarda; pode ser invocada como Enorme e, nesse tamanho, Armamento DGR tem alcance de 3 m; bônus de Armamento/Blaster torna-se +3. A partir do 14º nível, se invocada ao menos uma categoria maior que você, pode surgir sobre seu espaço para ser pilotada; entrar ou sair depois custa 1,5 m de movimento e ação bônus. Pilotando: você tem cobertura total e efeitos que o escolhem atingem a unidade; pode atacar através dela com cópias de suas armas, consumindo munição/cargas normais; se usar ação bônus apenas para comandá-la, pode usar ação para fazer três ataques com suas armas através dela; usa os sentidos dela e os seus; conjura magias de Bruxo através dela, inclusive alcance Pessoal; se ela morrer, você é ejetado ao espaço livre mais próximo e ela absorve o dano excedente.\n\nINVOCAÇÕES DE DÂMOCLES. ARMADURA DO AVATAR (6º): sem armadura nem escudo, calcule sua CA como a D.G.ANCHOR. SALVAGUARDA DINÂMICA (14º): ao cair a 0 PV, use reação para invocá-la em seu espaço e pilotá-la; ela recebe 40 PV temporários e se torna alvo do dano/efeito; se estava destruída, retorna com 1 PV; uma vez por Descanso Longo e apenas se houver espaço. IMPULSO DE ATRIBUTO EXTRA (10º): dois atributos da unidade aumentam em 2. MANOBRAS EVASIVAS (6º): a unidade recebe Evasão; se você estiver a 1,5 m dela, compartilha esse benefício. SENTINELA GUARDIÃ: se você estiver dentro do deslocamento da unidade e for alvo de ataque com arma, use reação para fazê-la mover-se até você ou trocar de lugar, tornando-se alvo desse e dos demais ataques contra você no turno. UNIDADE MACROESCALA: pode invocá-la uma categoria maior que o máximo normal; alcance corpo a corpo dela e de seus ataques pilotando aumenta em 1,5 m. MICROMANIFESTAÇÃO: se não estiver invocada, ação bônus conjura parte dela para fazer um de seus ataques de arma a partir de você. AUMENTO OPCIONAL (6º): escolha mais um aprimoramento ainda não escolhido. UNIDADE DE ESCUDO: reação da unidade concede +5 CA contra um ataque visível. MOVIMENTO ASSINATURA (10º): ao cair a 0 PV, reação usa Pod de Mísseis contra um único alvo antes de desaparecer, mesmo se já o usou. AVANÇO TECNOLÓGICO DE ARMAS (6º): Armamento/Blaster obtêm crítico 19–20; Armamento pode causar contundente/cortante/perfurante em vez de elétrico e Blaster pode causar energético ou elétrico em vez de radiante, escolhendo no primeiro ataque de cada arma por turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 489,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Mísseis Mágicos; Escudo do Verão"
          },
          {
            "level": "2º",
            "spells": "Tela de Nuvens; Ver o Invisível"
          },
          {
            "level": "3º",
            "spells": "Arma Eidomântica; Aljava de Vórtice"
          },
          {
            "level": "4º",
            "spells": "Míssil de Energia; Invisibilidade Maior"
          },
          {
            "level": "5º",
            "spells": "Onda de Choque; Mão Suprema"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-false-god",
    "classId": "warlock",
    "name": "Falso Deus",
    "originalName": "False God",
    "aliases": [
      "False God"
    ],
    "desc": "Seu patrono é um falso Eidolon — frequentemente um yokai que se apresenta como divindade. O pacto imita poder clerical, alimenta-se de sofrimento e concede um domínio sombrio semelhante ao de um culto fraudulento.",
    "sourcePage": 492,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "492",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "BÊNÇÃO FALSA",
        "level": 1,
        "page": 492,
        "text": "Ao aprender magias de Bruxo, inclusive no 1º nível, e ao escolher seus Arcanos Místicos, você pode escolher magias da lista de Clérigo como se fossem magias de Bruxo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "DRENO INFERNAL",
        "level": 1,
        "page": 492,
        "text": "Quando reduzir uma criatura a 0 PV, recebe PV temporários iguais ao dano que excedeu os PV restantes dela. Quando obtiver acerto crítico, recebe PV temporários iguais à metade do dano total causado, arredondado para baixo. Esses PV temporários duram 1 minuto.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OLHOS DE YOKAI",
        "level": 6,
        "page": 492,
        "text": "Você recebe visão diabólica em alcance de 3 metros × seu nível de Bruxo. Se já possuir visão diabólica, pode somar metade desse alcance ao alcance existente ou usar este alcance isoladamente, o que for maior.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "INTERVENÇÃO SOMBRIA",
        "level": 10,
        "page": 492,
        "text": "Uma vez por Descanso Longo, como ação, role 1d100. Se o resultado for igual ou inferior ao dobro de seu nível de Bruxo, o patrono responde e você recebe imediatamente os benefícios de um Descanso Curto; isso não conta contra o limite de Descansos Curtos por Descanso Longo. O uso é gasto mesmo em falha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MANDAMENTO DO FALSO SENHOR",
        "level": 14,
        "page": 492,
        "text": "Sempre que conjurar uma magia usando um Arcano Místico, você fica imune a todo dano até o fim do seu próximo turno, exceto dano causado pelo próprio Arcano Místico, e recupera um espaço de Magia de Pacto gasto.\n\nINVOCAÇÕES DO FALSO DEUS. FLAGELADOR DE CELESTIAIS (7º): vantagem em salvaguardas contra efeitos originados por celestiais. VOZ DOMINANTE (5º): conjure Comando ou Sugestão sem espaço um número de vezes por Descanso Longo igual ao bônus de proficiência. ARMA EIDÓLICA (6º): uma vez por Descanso Longo, conjure Arma Eidomântica sem espaço e sem teste eidomântico ao terminar, no nível de seus espaços de pacto. MAGIAS EIDÓLICAS EXPANDIDAS: ao aprender magias ou Arcanos Místicos, pode escolher do grupo de magias que corresponda à identidade fingida do patrono. RESILIÊNCIA DO PATRONO: resistência a dano psíquico e a um tipo associado à identidade do patrono — veneno para Aymere, energético para Harros, trovejante para T’quinn, elétrico para Vestias. MENTE DE RELATO FALSO (5º): vantagem em salvaguardas contra enfeitiçar, obrigar a dizer verdade ou ler mente; em sucesso, pode fazer a origem acreditar que venceu e, se sondar pensamentos, percebe o que ela procurou e fornece informação falsa. REGENERAÇÃO SOBRENATURAL (15º): no início do turno, se estiver acima de 1 PV e abaixo da metade do máximo, recupera PV iguais ao seu modificador de Constituição, mínimo 1.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-warlock-gun-ghuth",
    "classId": "warlock",
    "name": "Gun Ghuth",
    "originalName": "Gun Ghuth",
    "aliases": [
      "Gun Ghuth"
    ],
    "desc": "Este pacto é concedido por Mestres e Associados do Colégio de Gun Ghuth a auxiliares, guardas e agentes. A relação é amplamente transacional e transforma treinamento acadêmico em poder de Bruxo.",
    "sourcePage": 498,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "498",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "MAGIA CURRICULAR",
        "level": 1,
        "page": 498,
        "text": "Uma vez por Descanso Longo, conjure uma magia da lista expandida de Gun Ghuth mesmo sem tê-la aprendido, sem gastar espaço. Você precisa possuir espaços de pacto capazes de conjurá-la, e ela é lançada como se usasse um desses espaços.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OFÍCIO PROTEGIDO",
        "level": 1,
        "page": 498,
        "text": "Quando criatura fizer teste de atributo como parte de magia ou característica para encerrar/dissipar uma de suas magias, como Dissipar Magia, Contramágica ou Aniquilar Magia, ela faz o teste com desvantagem. Se o efeito normalmente obtivesse sucesso automático por nível, sua magia é tratada como sendo de nível alto demais para isso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MAGIA FERINA",
        "level": 6,
        "page": 498,
        "text": "Quando conjurar magia usando espaço de pacto de Bruxo, pode conjurar como ação bônus um truque cujo tempo normal seja 1 ação.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "TUTOR MÍSTICO",
        "level": 10,
        "page": 498,
        "text": "Quando conjurar magia usando espaço, pode conceder a você e a até seu bônus de proficiência em criaturas a até 9 metros PV temporários iguais a 1d10 + o nível da magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ASSINATURA DE MESTRE",
        "level": 14,
        "page": 498,
        "text": "Escolha Feiticeiro ou Mago. Ao selecionar Arcanos Místicos, pode escolher magias da lista escolhida como se fossem de Bruxo. Ao receber esta característica, pode substituir cada Arcano Místico existente por uma opção do mesmo nível dessa lista.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "HEX NEUTRALIZANTE",
        "level": 14,
        "page": 498,
        "text": "Quando falhar em salvaguarda contra magia ou efeito mágico, use reação para obter sucesso. Se um sucesso normalmente causar metade do dano, ao usar esta característica você não sofre dano; normalmente, em falha, ainda sofreria metade. Dois usos por Descanso Curto ou Longo.\n\nINVOCAÇÕES DE GUN GHUTH. TREINAMENTO DE CRÉDITO EXTRA (7º): um espaço de pacto adicional, sempre de nível igual à metade de seu bônus de proficiência, recuperado com os demais. CONJURADOR GRADUADO (15º): Magia Curricular uma vez por Descanso Curto ou Longo. TREINAMENTO DE GUARDIÃO: proficiência com armaduras médias e três armas simples ou corpo a corpo; com armadura proficiente, pode usar Carisma no lugar de Destreza na CA, com as mesmas limitações. NOTA DE APROVAÇÃO (9º): proficiência em salvaguardas de Inteligência e duas perícias. ESCOLA DE ESPECIALIZAÇÃO: escolha uma escola de magia; ao aprender magias de Bruxo, pode escolher qualquer magia dessa escola que cumpra os critérios normais, e tem vantagem em salvaguardas contra magias dela. MAGIAS DE TESE (12º): quando um Arcano Místico escolher uma ou mais criaturas hostis, a primeira salvaguarda delas contra a magia tem desvantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 498,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Perdição; Destruição Silenciadora"
          },
          {
            "level": "2º",
            "spells": "Arma Mágica; Chicote Mental"
          },
          {
            "level": "3º",
            "spells": "Dissipar Magia; Enviar Mensagem"
          },
          {
            "level": "4º",
            "spells": "Conjurar Montaria Maior; Esfera Resiliente"
          },
          {
            "level": "5º",
            "spells": "Criar Passagem; Subjugar Magia"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-gorgon",
    "classId": "warlock",
    "name": "Górgona",
    "originalName": "Gorgon",
    "aliases": [
      "Gorgon"
    ],
    "desc": "Seu patrono é uma górgona imortal, entidade antiga que oferece domínio sobre petrificação. Seus agentes endurecem a própria pele, cristalizam armas e aprisionam adversários em pedra.",
    "sourcePage": 496,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "496–497",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "DÁDIVAS DA GÓRGONA",
        "level": 1,
        "page": 496,
        "text": "Você recebe percepção às cegas em alcance de 3 metros × seu bônus de proficiência e proficiência em Furtividade. Se já for proficiente em Furtividade, escolha outra perícia baseada em Destreza ou Carisma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESCUDO DE MÁSCARA DE PEDRA",
        "level": 1,
        "page": 496,
        "text": "Quando sofrer dano de ataque ou efeito, use reação para reduzi-lo em 1d10 + seu nível de Bruxo. Usos por Descanso Longo iguais ao bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "CAMINHO DO ENDURECIMENTO",
        "level": 6,
        "page": 496,
        "text": "Escolha permanentemente uma opção. ENCANTAMENTO CRISTALOCINÉTICO: como ação bônus, petrifique arma ou munição em quartzo até o fim do turno; ataques podem usar seu atributo de conjuração para ataque/dano, são mágicos e recebem bônus na jogada de ataque igual à metade do bônus de proficiência. Dois usos por Descanso Curto ou Longo, três no 10º nível e quatro no 15º. PELE DE PADRÃO CRISTALINO: sem armadura, CA 10 + Des + Con e reduz todo dano contundente, cortante e perfurante em metade de seu nível de Bruxo. RESISTÊNCIA DE QUARTZO: uma vez por Descanso Longo, ao cair a 0 PV, em vez disso fica com PV iguais à metade de seu nível de Bruxo e recebe bônus na CA igual ao atributo de conjuração até o início do próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MALDIÇÃO DA PETRIFICAÇÃO",
        "level": 10,
        "page": 497,
        "text": "Uma vez por Descanso Longo, como ação, escolha até seu bônus de proficiência em criaturas a até 18 metros que possam vê-lo. Cada uma faz salvaguarda de Constituição. Em falha, deslocamento -3 m e sem reações; em seus turnos, pode usar ação ou ação bônus, não ambas, e ataques após o primeiro no turno têm desvantagem. Ao fim de cada turno, repete a salvaguarda: sucesso encerra; falha reduz deslocamento em mais 3 m. Após três falhas e deslocamento 0, fica petrificada. Um 1 natural conta como duas falhas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARMADILHA DE FIBRA DE PEDRA",
        "level": 14,
        "page": 497,
        "text": "Quando criatura a 1,5 m o acertar com ataque corpo a corpo, use reação; ela faz salvaguarda de Força. Em falha, a arma ou meio de ataque fica preso em seu corpo. Enquanto mantiver o vínculo, o alvo fica restringido e não pode usar aquela arma. Pode soltá-la voluntariamente; caso contrário, usa ação e teste de Força contra sua CD para libertá-la. Enquanto pretende mantê-la presa, você não pode se afastar do alvo salvo se puder movê-lo consigo, mas pode mover mantendo-se adjacente. Pode encerrar à vontade.\n\nINVOCAÇÕES DA GÓRGONA. OLHAR DE INFLUÊNCIA: ação bônus, alvo a até 18 m que o veja faz salvaguarda de Constituição; falha: -2 CA e sem reações até o início do próximo turno; usos por Descanso Curto ou Longo iguais ao bônus de proficiência. POSTURA ATERRADA: reação evita ser derrubado ou movido contra a vontade. SAÚDE LENDÁRIA (15º): PV máximos + seu nível de Bruxo, depois +1 por novo nível. CAMINHO DIVIDIDO DO ENDURECIMENTO (7º): escolha uma segunda opção de Caminho do Endurecimento. CÉLULAS DE PEDRA (12º): proficiência em salvaguardas de Constituição, inclusive concentração. SENTIDO SÍSMICO (9º): sentido sísmico em alcance de 3 metros × bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 496,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Erupção Terrestre; Escudo do Verão"
          },
          {
            "level": "2º",
            "spells": "Cegueira/Surdez; Passos sem Pegadas"
          },
          {
            "level": "3º",
            "spells": "Criar Alimentos; Glifo de Vigilância"
          },
          {
            "level": "4º",
            "spells": "Moldar Rochas; Pele de Pedra"
          },
          {
            "level": "5º",
            "spells": "Mão Suprema; Criar Passagem"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-pale-shadow",
    "classId": "warlock",
    "name": "Sombra Pálida",
    "originalName": "Pale Shadow",
    "aliases": [
      "Pale Shadow"
    ],
    "desc": "Seu patrono é uma Sombra Branca de Mnemosyne ou uma rede de animações de mecita. O pacto cristaliza memórias extremas, protege a consciência e permite manipular experiências passadas e pensamentos.",
    "sourcePage": 499,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "499–500",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "RECORDAÇÃO DE MECITA",
        "level": 1,
        "page": 499,
        "text": "Sempre que o d20 de ataque, teste ou salvaguarda mostrar 1 ou 20, cristalize o momento numa Recordação de Mecita. Pode manter até seu bônus de proficiência em cristais; eles se tornam inertes no Descanso Longo. Ao fazer ataque, teste ou salvaguarda, pode gastar um cristal para rolar um d20 adicional e escolher substituir o resultado original, antes de sucesso/falha ser declarado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "VIGIA DOS SONHOS DESPERTO",
        "level": 6,
        "page": 499,
        "text": "Você não pode ser surpreendido e recebe proficiência e Especialização em Percepção e Investigação. Mesmo dormindo, permanece consciente dos arredores como em transe.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "OFÍCIO DA MEMÓRIA",
        "level": 10,
        "page": 499,
        "text": "Escolha uma magia de Bruxo de 5º nível ou inferior, mesmo sem conhecê-la. Uma vez por Descanso Curto ou Longo, pode conjurá-la como se usasse um espaço de pacto, sem gastar espaço. Se multiclasse em outra classe com lista de magia, pode escolher uma magia dessa lista. A cada nível de Bruxo, pode substituir a magia por outra elegível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PENSAMENTO INTRUSIVO",
        "level": 14,
        "page": 500,
        "text": "Como ação, escolha criatura visível a até 18 metros; ela faz salvaguarda de Inteligência. Em falha, fica atordoada por 1 minuto e você implanta um pensamento ou pergunta na mente dela, recebendo do Mestre uma breve visão da resposta mental relacionada. Ao fim de cada turno, repete a salvaguarda e encerra em sucesso. Um uso por Descanso Curto ou Longo; pode usar novamente gastando um espaço de pacto ou 3 Recordações de Mecita.\n\nINVOCAÇÕES DA SOMBRA PÁLIDA. PASSO ONÍRICO (7º): se não estiver incapacitado e deslocamento não for 0, ação bônus teleporta até 9 m para espaço visível. ARMA DE MECITA APRIMORADA (5º, Pacto da Lâmina): ao atacar com Arma de Pacto, faça dois ataques em vez de um; ela causa dano psíquico adicional igual à metade de seu nível de Bruxo. REFERÊNCIA DE EXPERIÊNCIA: escolha classe com Conjuração não-Pacto; aprenda duas magias da lista que seus espaços possam conjurar, tratadas como de Bruxo; pode trocar uma por nível. RECORDAÇÃO INCORPORADA: após Descanso Longo, ganha cristais iguais à metade do bônus de proficiência. ARCANO MEMÉTICO (12º): para cada nível de Arcano Místico, escolha uma segunda magia do mesmo nível; pode conjurar uma ou outra, e usar uma gasta ambas até Descanso Longo. SENTIDO MENTAL (7º): Detectar Pensamentos uma vez por Descanso Curto ou Longo sem espaço e soma Sabedoria à iniciativa. RECORDAÇÃO APERFEIÇOADA (9º): d20 de 5 ou menos também cria Recordação. ARMA DE MECITA SUPREMA (12º, requer Aprimorada): faz três ataques com a Arma de Pacto, o primeiro com vantagem.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 499,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Sono; Purga do Sistema"
          },
          {
            "level": "2º",
            "spells": "Cegueira/Surdez; Orbes de Interferência Mágica"
          },
          {
            "level": "3º",
            "spells": "Indetectabilidade; Escrito Forense"
          },
          {
            "level": "4º",
            "spells": "Retorno Eidomântico; Escrito de Horror"
          },
          {
            "level": "5º",
            "spells": "Conhecimento Lendário; Vínculo Telepático"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-temptation",
    "classId": "warlock",
    "name": "Tentação",
    "originalName": "Temptation",
    "aliases": [
      "Temptation"
    ],
    "desc": "Seu patrono é um corruptor infernal que explora desejos mortais. O pacto favorece disfarce, encanto, mobilidade sedutora e manipulação do ego alheio.",
    "sourcePage": 501,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "501–502",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TELA MUTÁVEL",
        "level": 1,
        "page": 501,
        "text": "Você pode conjurar Alterar-se e Disfarçar-se à vontade, sem gastar espaços de magia nem componentes materiais, como magias de Bruxo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BEIJO DA MORTE",
        "level": 6,
        "page": 501,
        "text": "Como ação bônus, faça ataque corpo a corpo com magia contra criatura a 1,5 m através de contato. Em acerto, causa dano psíquico igual a 1d10 × seu bônus de proficiência e você recebe PV temporários iguais à metade do dano. Se o alvo estiver enfeitiçado por você, ele faz salvaguarda de Carisma; em falha, não considera esse dano hostil ou antagônico. Dois usos por Descanso Longo, +1 uso no 12º e +1 no 17º nível.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APROXIMAÇÃO DESIMPEDIDA",
        "level": 10,
        "page": 502,
        "text": "Como ação bônus, manifeste asas até o início do próximo turno, recebendo voo igual ao deslocamento básico; pode usar ação bônus em turnos seguintes para mantê-las. Ao sair do alcance de uma criatura enquanto estiver voando assim, não provoca ataque de oportunidade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "EGO GALVANIZANTE",
        "level": 14,
        "page": 501,
        "text": "EGO GALVANIZANTE (14º): quando criatura a até 9 m fizer ataque contra você, antes do resultado use reação; ela faz salvaguarda de Carisma. Em falha, redirecione o ataque a outro alvo a até 9 m de você, teleportando o atacante para espaço desocupado adequado se necessário; ele rola novo d20 para o ataque. Usos por Descanso Longo iguais à metade do bônus de proficiência; depois, pode gastar espaço de pacto para usar novamente.\n\nINVOCAÇÕES DE TENTAÇÃO. AGENTE SEM CONVITE (15º): Etéreo uma vez por Descanso Longo sem espaço/componentes. CEGO PELA ARROGÂNCIA (15º): quem falhar contra Ego Galvanizante não percebe você por nenhum sentido, mesmo Ver Invisibilidade/Visão Verdadeira, até o fim do próximo turno ou você causar dano/forçar salvaguarda. COMPORTAMENTO COMPULSIVO: Enfeitiçar Pessoa à vontade sem espaço; uma vez por Descanso Longo pode conjurá-la em nível igual ao espaço de pacto. DESTRUIDOR DE EGO (9º): se efeito seu tentaria enfeitiçar criatura imune, até o início do próximo turno ela tem desvantagem em ataques e testes de perícia. LINHA DIRETA TELEPÁTICA: fala telepaticamente com criaturas visíveis em alcance de 4,5 m × bônus de proficiência; comunicação exige idioma comum e o alvo pode responder se souber/entender que você é telepata, salvo se bloquear. CHARME INFALÍVEL (5º): teste baseado em Carisma com d20 9 ou menos conta como 10.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 501,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Infligir Terror; Marca do Caçador"
          },
          {
            "level": "2º",
            "spells": "Detectar Pensamentos; Vínculo Protetor"
          },
          {
            "level": "3º",
            "spells": "Talento Gêmeo; Idiomas"
          },
          {
            "level": "4º",
            "spells": "Invisibilidade Maior; Bravura Deslacrada"
          },
          {
            "level": "5º",
            "spells": "Modificar Memória; Conceder Especialização"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-warlock-valkyrie",
    "classId": "warlock",
    "name": "Valquíria",
    "originalName": "Valkyrie",
    "aliases": [
      "Valkyrie"
    ],
    "desc": "Seu patrono é uma das Valquírias Nephilim, filhas de Mnemosyne e agentes de Vestias. O pacto concede treinamento marcial e manipulação limitada do fluxo do tempo para agir como agente de paz e ordem.",
    "sourcePage": 503,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "503–504",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PREPARATIVOS DO PACIFICADOR",
        "level": 1,
        "page": 503,
        "text": "Você recebe percepção às cegas em alcance de 3 metros × seu bônus de proficiência; proficiência em Intuição; e soma seu bônus de proficiência à Percepção passiva, salvo se outra característica já permitir isso, independentemente de proficiência ou Especialização em Percepção.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIAS VALQUIRIANAS",
        "level": 1,
        "page": 503,
        "text": "Você recebe proficiência com armaduras médias e três armas marciais à sua escolha.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FORA DO MOSTRADOR",
        "level": 6,
        "page": 504,
        "text": "Você é imune aos efeitos da magia Lentidão e não sofre os efeitos negativos quando Aceleração termina. Pode escapar de qualquer agarrão ou efeito que o restrinja gastando 1,5 m de movimento, e seu deslocamento não pode ser reduzido por efeito que não o reduza completamente a 0. Se for atingido por magia hostil que congele/manipule o tempo para conceder turnos extras, você age normalmente como se também se beneficiasse da magia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "AVANÇO MÍSTICO",
        "level": 10,
        "page": 504,
        "text": "Uma vez por Descanso Curto ou Longo, como ação bônus, tente ler o futuro imediato de uma criatura visível a até 18 m. Ela faz salvaguarda de Carisma. Em falha, seu controlador deve declarar todas as ações, ações bônus e movimentos que ela fará antes do início de seu próximo turno. Movimento diferente do declarado custa 2 m para cada 1 m; ataques, testes e salvaguardas inconsistentes com a declaração têm desvantagem. Se conjurar magia/efeito não declarado que exija salvaguarda ou teste de outra criatura, essa criatura tem vantagem. O uso só é gasto se o alvo falhar. Depois de gasto, pode tentar novamente gastando um espaço de pacto, que também só é gasto em falha do alvo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "BÊNÇÃO DA FILHA DO TEMPO",
        "level": 14,
        "page": 504,
        "text": "Uma vez por Descanso Longo, como ação bônus, transforme-se por 1 minuto e receba imediatamente 1d10 + seu nível de Bruxo em PV temporários. Durante a transformação, ataques com arma têm vantagem; ao usar ação Atacar, faça um ataque adicional com arma com a qual seja proficiente; e tenha vantagem em salvaguardas contra efeitos mágicos.\n\nINVOCAÇÕES DA VALQUÍRIA. RECORDAÇÃO BIZARRA (7º): ação bônus retorna a qualquer espaço desocupado que ocupou desde o início do turno; se sofrer dano no próprio turno, pode usar reação para retornar ao espaço inicial e evita o dano se sair do alcance do efeito. CRONOCAST (9º): uma vez por Descanso Curto ou Longo, magia de 1 ação pode ser conjurada como ação bônus; sua ação no turno deve ser Atacar, Disparada ou Desengajar. CRONOMAESTRIA (18º): pode gastar seu Arcano Místico de 9º nível para conjurar Parar o Tempo no lugar da magia normal. ARMA FIEL: use Carisma em ataques e dano com armas em que seja proficiente, incluindo Arma de Pacto. MESTRE DE ARMAS (12º): ação Atacar com arma proficiente faz dois ataques em vez de um; se já faria dois, faça três. ASAS PRISMÁTICAS (5º): manifeste/dispense asas à vontade; voo igual ao deslocamento básico e pode usar Disparada como ação bônus se usar o voo no movimento adicional. RITO DA INSISTÊNCIA (9º): uma vez por Descanso Longo, quando cairia a 0 PV ou morreria instantaneamente, fica com 1 PV.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ],
    "tables": [
      {
        "title": "Lista Expandida de Magias",
        "page": 503,
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry",
        "columns": [
          {
            "key": "level",
            "label": "Nível da Magia"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Destruição Silenciadora; Golpe da Valquíria"
          },
          {
            "level": "2º",
            "spells": "Aceleração; Arma Espiritual"
          },
          {
            "level": "3º",
            "spells": "Velocidade; Tempestade de Relâmpagos"
          },
          {
            "level": "4º",
            "spells": "Movimentação Livre; Esfera Tempestuosa"
          },
          {
            "level": "5º",
            "spells": "Ira da Guardiã do Céu; Aljava Acelerada"
          }
        ]
      }
    ]
  },
  {
    "id": "lyre-wizard-vestian-advocate",
    "classId": "wizard",
    "name": "Advogado Vestiano",
    "originalName": "Vestian Advocate",
    "aliases": [
      "Vestian Advocate"
    ],
    "desc": "O Advogado Vestiano estuda a magia proibida de Vestias para compreender e imitar a potência inata dos Feiticeiros. Ao enriquecer a energia mágica latente no próprio sangue e aproveitar poder que a conjuração formulaica desperdiçaria, esses Magos borram deliberadamente a fronteira entre estudo e feitiçaria.",
    "sourcePage": 509,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "509–510",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "SANGUE MÁGICO POTENCIALIZADO",
        "level": 2,
        "page": 509,
        "text": "Quando conjura uma magia de Mago e causa dano a uma criatura pela primeira vez com ela, pode somar seu modificador de Carisma ao dano. Se a magia causar dano a várias criaturas simultaneamente, escolha antes da rolagem uma quantidade delas igual ao seu bônus de proficiência para receber esse dano adicional.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRODÍGIO EM FEITIÇARIA",
        "level": 2,
        "page": 509,
        "text": "Sempre que ganha um nível e aprende novas magias de Mago para adicionar ao grimório, pode escolher uma delas da lista de Feiticeiro e tratá-la como magia de Mago. Também pode copiar para o grimório magias de Feiticeiro encontradas em pergaminhos, gastando metade do ouro e do tempo normais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROTEÇÃO DA GUARDIÃ DOS CÉUS",
        "level": 6,
        "page": 510,
        "text": "Uma vez por Descanso Longo, como ação, crie ao seu redor uma proteção representada por pontos de vida temporários iguais a 5 × seu nível de Mago. Enquanto esses pontos existirem, você recebe bônus em salvaguardas e na CA igual à metade do bônus de proficiência, arredondado para baixo. Antes que uma criatura a até 3 metros cause dano a você com um ataque, pode usar reação para reduzir pela metade seus pontos de vida temporários restantes, arredondado para baixo; o atacante sofre dano elétrico igual à quantidade que você possuía antes da redução.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PASSO POR PORTAIS",
        "level": 10,
        "page": 510,
        "text": "Quando conjura uma magia de 5º nível ou superior, pode transformar energia mágica desperdiçada em deslocamento de teleporte igual ao seu deslocamento base até o início do seu próximo turno.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROTEÇÃO POTENCIALIZADA",
        "level": 14,
        "page": 510,
        "text": "Usar sua Proteção da Guardiã dos Céus como reação não reduz mais seus pontos de vida temporários pela metade. Como ação bônus, você pode gastar um espaço de Mago para restaurar à proteção pontos de vida temporários iguais a 5 × o nível do espaço, sem exceder o valor original da proteção.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-wizard-armed-arcanist",
    "classId": "wizard",
    "name": "Arcanista Armado",
    "originalName": "Armed Arcanist",
    "aliases": [
      "Armed Arcanist"
    ],
    "desc": "Um mago de batalha que toma a espada junto de suas magias. Embora não tenha a maestria de um combatente dedicado, consegue acompanhar duelistas, espadachins e arqueiros e deixa de ser apenas um alvo acadêmico no campo de batalha.",
    "sourcePage": 507,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "507",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS DO ESPADACHIM ARCANO",
        "level": 2,
        "page": 507,
        "text": "Você ganha proficiência com armaduras leves, armaduras médias e todas as armas simples e marciais. Seu máximo de pontos de vida aumenta imediatamente em 2 e aumenta em mais 1 sempre que você ganha um nível nesta classe.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MAGIA TEMPESTUOSA",
        "level": 2,
        "page": 507,
        "text": "Quando realiza a ação Atacar, pode usar sua ação bônus para conjurar uma magia de Mago com tempo de conjuração de 1 ação. Se o alcance da arma usada na ação Atacar for maior que o alcance da magia, você pode usar o alcance normal da arma como alcance da magia. Isso não altera o tamanho de cones, cubos, cilindros ou raios, mas pode aumentar a distância na qual essas áreas são centradas.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FOCO HÁBIL",
        "level": 6,
        "page": 507,
        "text": "Se falhar em um teste de concentração para um efeito que esteja escolhendo ou afetando você como alvo, pode usar sua reação para obter sucesso em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "METALURGIA RICA",
        "level": 6,
        "page": 507,
        "text": "Seus ataques com arma são sempre considerados mágicos. Além disso, uma vez por turno, quando acerta com uma arma na qual é proficiente, pode gastar um espaço de magia, rolar uma quantidade de d8 igual ao nível do espaço e somar o total ao dano como dano de energia. Não pode usar esta característica no mesmo ataque em que utilize outra característica ou magia com “destruição/smite” no nome, ou outro efeito semelhante que gaste um espaço para adicionar dados de dano.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PROFICIÊNCIA ADICIONAL EM SALVAGUARDA",
        "level": 10,
        "page": 507,
        "text": "Você ganha proficiência à sua escolha em salvaguardas de Força, Destreza ou Constituição.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 10,
        "page": 507,
        "text": "Ao realizar a ação Atacar, pode atacar duas vezes em vez de uma.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARMADURA MENTAL",
        "level": 14,
        "page": 507,
        "text": "Enquanto não estiver incapacitado nem usando armadura pesada, você pode somar seu modificador de Inteligência à sua Classe de Armadura.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-wizard-ghuthian-associate",
    "classId": "wizard",
    "name": "Associado Ghuthiano",
    "originalName": "Ghuthian Associate",
    "aliases": [
      "Ghuthian Associate"
    ],
    "desc": "Associados trabalham ao lado dos Mestres Ghuthianos, ajudando em pesquisas, aulas e assuntos particulares. Normalmente aspiram a tornar-se Mestres do colégio e usam essa função para provar sua dedicação. Em troca, recebem treinamento prático e aprendem a conjurar com enorme eficiência.",
    "sourcePage": 508,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "508",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "TREINAMENTO EXCELENTE",
        "level": 2,
        "page": 508,
        "text": "Você aprende um truque adicional que não conta no número de truques de Mago conhecidos. Pode escolhê-lo de qualquer lista de magias, mas ele é tratado como magia de Mago para você.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RECUPERAÇÃO ARCANA MAIOR",
        "level": 2,
        "page": 508,
        "text": "Quando usa Recuperação Arcana para restaurar espaços de magia, o nível combinado de espaços que pode recuperar aumenta em uma quantidade igual à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "APLICAÇÃO FISCAL",
        "level": 6,
        "page": 508,
        "text": "Você possui usos de Aplicação Fiscal iguais à metade do seu nível de Mago, arredondado para baixo. Ao conjurar uma magia com componente material de custo em po, pode gastar um número de usos igual ou superior ao custo total dividido por 250; se o fizer, não precisa fornecer o componente material. Você recupera todos os usos ao terminar um Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "REDE DE TELEPORTE",
        "level": 10,
        "page": 508,
        "text": "Você aprende Palavra de Recordação e Círculo de Teleporte; ambas ficam sempre preparadas, contam como magias de Mago e não ocupam seu limite de preparação. Pode conjurar cada uma normalmente com espaços ou uma vez por Descanso Longo sem gastar espaço. Ao conjurar Palavra de Recordação, pode retornar a qualquer círculo de teleporte cuja sequência de sigilos conheça ou a qualquer templo/local de culto de uma divindade que tenha estudos arcanos ou magia em seus domínios ou portfólios. Para tornar permanente um Círculo de Teleporte, basta conjurá-lo uma vez por dia durante uma semana.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPADA ESPECTRAL DO MESTRE",
        "level": 14,
        "page": 508,
        "text": "Você pode conjurar Espada do Arquimago uma vez por Descanso Longo sem gastar espaço nem componentes materiais. A magia fica sempre preparada e não conta no limite de preparação. Quando conjurada desta forma, pode usar sua ação em cada turno para fazê-la realizar ataques adicionais da mesma maneira que normalmente faria com a ação bônus. Se atacar com ela uma criatura a até 1,5 metro de você, pode agarrar fisicamente a espada e fortalecê-la, fazendo cada acerto causar 1d10 de dano adicional.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-wizard-eidomancer",
    "classId": "wizard",
    "name": "Eidomante",
    "originalName": "Eidomancer",
    "aliases": [
      "Eidomancer"
    ],
    "desc": "Eidomancia é a canalização da radiação que inundou o mundo durante a Era da Ruptura. Sem as salvaguardas da teia eidomântica, essa arte é perigosa e pode voltar-se contra o conjurador, mas permite resultados superiores. Eidomantes estudam essa forma antiga de magia, aprendendo a controlar sua radiação apesar do risco.",
    "sourcePage": 507,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "507–508",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "RESILIÊNCIA À QUEIMA EIDÓLICA",
        "level": 2,
        "page": 507,
        "text": "Quando realiza um teste de Queima Eidomântica, você pode somar seu modificador de Inteligência ao resultado.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PRODÍGIO EM EIDOMANCIA",
        "level": 2,
        "page": 507,
        "text": "Ao aprender novas magias de Mago, inclusive no nível em que recebe esta característica, você pode escolher magias do grupo Eidomancia e tratá-las como magias de Mago. O Mestre pode exigir orientação para magias pertencentes a múltiplos grupos, como testemunhá-las ou encontrar um professor. O ouro e o tempo necessários para copiar uma magia de Eidomancia para seu grimório são reduzidos à metade.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ARCANA ILIMITADA",
        "level": 6,
        "page": 507,
        "text": "Quando conjura com um espaço uma magia que não seja de Eidomancia, pode tratá-la como uma magia de Eidomancia e aumentar em 1 o nível no qual ela é conjurada, como se o espaço fosse um nível maior, gastando apenas o espaço original. O nível final não pode ultrapassar o 9º. No 14º nível de Mago, você pode aumentar em 2 níveis em vez disso. A magia se torna Eidomancia e você deve fazer um teste de Queima Eidomântica com CD 10 + o nível final da magia, seguindo as demais regras de Queima Eidomântica. Usos por Descanso Longo iguais ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "SATURAÇÃO EIDÓLICA",
        "level": 10,
        "page": 507,
        "text": "Todo dano causado por suas magias é considerado eidólico para superar resistências. Além disso, criaturas que tenham vantagem em salvaguardas contra magias e efeitos mágicos, mas não explicitamente contra efeitos eidólicos, não recebem essa vantagem contra suas magias. Divindades e criaturas que causem dano eidólico por uma característica ignoram este benefício.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "PREPARAÇÃO RADIANTE",
        "level": 10,
        "page": 508,
        "text": "Depois de terminar um Descanso Longo, ao preparar magias, você pode preparar um número adicional igual ao seu bônus de proficiência. Essas magias adicionais devem ser magias de Eidomancia.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "MESTRE EIDOMANTE",
        "level": 14,
        "page": 508,
        "text": "Ao realizar um teste de Queima Eidomântica, a CD não aumenta de acordo com o número de rodadas em que você manteve concentração na magia. Além disso, falhar em um teste de Queima Eidomântica não causa exaustão; em vez disso, você sofre 1 ponto de Fadiga de Combate.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  },
  {
    "id": "lyre-wizard-specialist",
    "classId": "wizard",
    "name": "Especialista",
    "originalName": "Specialist",
    "aliases": [
      "Specialist"
    ],
    "desc": "Especialistas aprofundam-se na história e nas técnicas de um grupo específico de magias, estudando criadores, rituais e fundamentos até compreender o tema a ponto de conjurar suas magias de memória ou simplificá-las. O Mestre pode criar ou expandir grupos de magia apropriados, inclusive usando listas expandidas de subclasses como base.",
    "sourcePage": 509,
    "source": {
      "title": "Lyre's Guide to Retia — Land of Industry",
      "pages": "509",
      "chapter": "Capítulo 8: Opções de Classe"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS ADICIONAIS",
        "level": 2,
        "page": 509,
        "text": "Você ganha proficiência em História e Investigação. Se já possuía proficiência em uma delas, recebe Especialização naquela perícia em vez disso.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ESPECIALIZAÇÃO",
        "level": 2,
        "page": 509,
        "text": "Escolha um grupo de magias apropriado com aprovação do Mestre. Você se torna especialista nele e, ao aprender novas magias de Mago, pode escolher magias desse grupo e tratá-las como magias de Mago mesmo que normalmente não sejam. Copiar uma magia desse grupo para seu grimório custa metade do tempo e do ouro normais.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "ASSUNTOS FAVORITOS",
        "level": 6,
        "page": 509,
        "text": "Escolha em seu grimório uma quantidade de magias do grupo no qual é especialista igual à metade do seu bônus de proficiência, arredondado para baixo. Elas ficam sempre preparadas e não contam no limite normal. Sempre que ganha um nível de Mago, pode substituir uma escolha e, se a quantidade escolhida estiver abaixo da metade do seu bônus de proficiência, seleciona magias adicionais até atingir o total.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "RECORDAÇÃO TALENTOSA",
        "level": 10,
        "page": 509,
        "text": "Uma vez por Descanso Longo, você pode conjurar Lucubração Arcana sem gastar espaço, em um nível igual ao seu bônus de proficiência.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      },
      {
        "title": "FRUTOS DO MEU TRABALHO",
        "level": 14,
        "page": 509,
        "text": "Quando conjura uma magia pertencente ao grupo em que é especialista, escolha um benefício: a magia é conjurada como se usasse um espaço de 3º nível, independentemente do espaço realmente gasto; ou é tratada como se o espaço gasto fosse 1 nível maior, máximo 9º. Depois de conjurar uma magia de 8º nível ou inferior beneficiada desta forma, role 1d100. Se o resultado for igual ou inferior a 20 menos o nível da magia, você recebe um espaço de Mago de nível igual à metade do nível do espaço que gastou, arredondado para baixo. Esse espaço desaparece ao terminar um Descanso Longo.",
        "sourceTitle": "Lyre's Guide to Retia — Land of Industry"
      }
    ]
  }
];

  window.GRIMORIO_SUBCLASSES = window.GRIMORIO_SUBCLASSES || [];
  const existing = new Set(window.GRIMORIO_SUBCLASSES.map(s => s.id));
  additions.forEach(s => { if (!existing.has(s.id)) window.GRIMORIO_SUBCLASSES.push(s); });
})();
