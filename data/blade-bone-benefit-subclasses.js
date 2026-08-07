'use strict';

(function () {
  const additions = [
  {
    "id": "bbb-blood-minister-somnus-bloodpact-medic",
    "classId": "blood-minister-somnus",
    "name": "Médico do Pacto de Sangue",
    "originalName": "Bloodpact Medic",
    "aliases": [
      "Bloodpact Medic"
    ],
    "desc": "O Médico do Pacto de Sangue possui sangue maleável e carregado de energia curativa, capaz de ser transferido para outros por contato. Seu sangue é aceito por outros organismos e pode restaurar volume e fluxo sanguíneo; se desejar, porém, ele também pode corrompê-lo e transformá-lo em arma.",
    "sourcePage": 71,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "71",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Sangue Puro",
        "level": 3,
        "page": 71,
        "text": "Você é imune a dano de veneno e à condição envenenado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Infusão Singular",
        "level": 3,
        "page": 71,
        "text": "Como ação bônus, toque outra criatura e gaste uma quantidade de Dados de Vida igual ou inferior ao seu bônus de proficiência, rolando todos eles. O alvo recupera pontos de vida iguais ao dobro da soma dos resultados.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Rajada de Sangue Vil",
        "level": 7,
        "page": 71,
        "text": "Como ação, você pode gastar uma quantidade de Dados de Vida igual ou inferior à metade de seu nível de Ministro de Sangue e lançar sangue em um cone de 4,5 m. Cada criatura na área realiza uma salvaguarda de Constituição contra sua CD de Seita Genética, usando Força ou Constituição para a CD conforme indicado pela fonte. Em falha, sofre dano de veneno e dano de ácido, cada um igual a 1d4 × a quantidade de Dados de Vida gastos; em sucesso, sofre metade. Criaturas que receberam pontos de vida de sua Infusão Singular desde o último Descanso são imunes a esse dano.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Infusão Potencializada",
        "level": 11,
        "page": 71,
        "text": "Sua Infusão Singular melhora. Todo Dado de Vida gasto nela se torna um d8 caso fosse menor. Além disso, uma criatura curada por ela recebe suas resistências e imunidades a dano e condições por 1 minuto, exceto as obtidas de itens, magias ou efeitos temporários; e qualquer cura que exceda o máximo de PV do alvo torna-se pontos de vida temporários.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Tratamento Simpático",
        "level": 15,
        "page": 71,
        "text": "Sua Infusão Singular recebe quatro aprimoramentos: pode atingir criaturas a até 9 m; cada Dado de Vida gasto é rolado duas vezes e ambos os resultados são somados; após curar outra criatura, a próxima jogada de ataque, teste de habilidade ou salvaguarda que ela fizer no próximo minuto pode somar o maior tipo de Dado de Vida usado na cura, como pela Ministração Sanguínea; e, ao usar a característica em uma criatura que possa tocar, você recebe PV temporários iguais à metade dos PV concedidos, salvo se tiver escolhido a si mesmo como alvo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-cursetinged-maverick",
    "classId": "blood-minister-somnus",
    "name": "Dissidente Maculado pela Maldição",
    "originalName": "Cursetinged Maverick",
    "aliases": [
      "Cursetinged Maverick"
    ],
    "desc": "O Dissidente Maculado pela Maldição despertou um segredo sombrio no próprio sangue. O poder começa como uma capacidade de amaldiçoar inimigos e evolui para domínio das sombras, da escuridão e para explosões de força sempre que seu sangue é usado contra outros.",
    "sourcePage": 71,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "71–72",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Caçada Amaldiçoada",
        "level": 3,
        "page": 72,
        "text": "Uma vez por Descanso, como ação bônus, você produz os efeitos da magia Maldição sem gastar espaço de magia, sem componentes e sem concentração. O efeito é produzido em um nível igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Ataque de Cano Negro",
        "level": 7,
        "page": 72,
        "text": "Quando realiza a ação Atacar, você pode usar sua ação bônus para atacar com uma arma de fogo na mão secundária. Esse disparo pode atingir criaturas em alcance corpo a corpo ou até o alcance longo da arma sem penalidade ou desvantagem por distância ou proximidade. Se a arma precisar ser recarregada, você pode recarregá-la como parte desse ataque.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Surto de Adrenalina",
        "level": 11,
        "page": 72,
        "text": "Quando usa Ministração Sanguínea e rola um de seus Dados de Vida, o resultado também é adicionado à sua Classe de Armadura até o início de seu próximo turno. Se rolar vários Dados de Vida dessa forma, use apenas o maior bônus obtido para a CA.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Envolto em Sombras",
        "level": 15,
        "page": 72,
        "text": "Enquanto estiver sob luz fraca ou escuridão, você é considerado sob os efeitos da magia Nublar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-fateblooded",
    "classId": "blood-minister-somnus",
    "name": "Sangue do Destino",
    "originalName": "Fateblooded",
    "aliases": [
      "Fateblooded"
    ],
    "desc": "O Sangue do Destino carrega uma centelha imprevisível que não pode ser comandada deliberadamente. Ao se entregar ao acaso e agir sem saber exatamente o que virá, seu poder emerge tão naturalmente quanto o próprio batimento cardíaco.",
    "sourcePage": 72,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "72",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Crítico Aprimorado",
        "level": 3,
        "page": 72,
        "text": "Você obtém um acerto crítico com um resultado 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Ministração Econômica",
        "level": 3,
        "page": 72,
        "text": "Quando gasta um Dado de Vida para Ministração Sanguínea e o resultado é menor que metade do valor máximo possível desse dado — 1 ou 2 num d4; 1, 2 ou 3 num d6, e assim por diante — o Dado de Vida não é consumido, embora você ainda receba normalmente o benefício da Ministração Sanguínea.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Aposta de Sangue",
        "level": 7,
        "page": 72,
        "text": "Quando causa dano com um ataque de arma e pelo menos um dos dados de dano iniciais apresenta seu valor máximo, você pode rolar dados adicionais daquele mesmo tipo em quantidade igual ao seu bônus de proficiência e somá-los ao dano. Essa regra se aplica apenas aos dados iniciais do ataque; os dados adicionais não são duplicados por acertos críticos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Ação Arterial",
        "level": 11,
        "page": 72,
        "text": "Uma vez por turno, você pode gastar 1 Dado de Vida para realizar uma segunda ação bônus, ou 2 Dados de Vida para realizar uma segunda ação. Você não pode obter ambos no mesmo turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Evasão Instintiva",
        "level": 15,
        "page": 72,
        "text": "Quando realiza uma salvaguarda para sofrer metade do dano de um efeito, você não sofre dano em um sucesso e sofre metade em uma falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-grim-hunter",
    "classId": "blood-minister-somnus",
    "name": "Caçador Sombrio",
    "originalName": "Grim Hunter",
    "aliases": [
      "Grim Hunter"
    ],
    "desc": "Um caçador eficiente e disciplinado que transforma o próprio corpo em campo de experimentação. O Caçador Sombrio leva a aplicação física do sangue ao limite, concentrando-se em manipular o que permanece dentro do corpo sem desperdiçá-lo externamente.",
    "sourcePage": 73,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "73",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Escudo Arterial",
        "level": 3,
        "page": 73,
        "text": "Manipulando o sangue em suas veias, você reforça o corpo no instante do impacto. Uma quantidade de vezes por Descanso igual ao seu bônus de proficiência, pode conjurar o truque Defletir como ação bônus ou como reação ao ser atingido por um ataque. Depois de gastar todos os usos gratuitos, pode continuar usando a característica gastando 1 Dado de Vida por uso; role esse dado e recupere PV iguais ao resultado. Você também pode optar por gastar o dado mesmo quando ainda possui usos gratuitos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Crítico Circulante",
        "level": 3,
        "page": 73,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20. Além disso, em combate, quando obtém um acerto crítico numa jogada de ataque ou tira 20 natural em uma jogada de ataque ou teste de habilidade, recupera 1 Dado de Vida de Ministro de Sangue.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Sobrevivência Sombria",
        "level": 7,
        "page": 73,
        "text": "Você adiciona metade de seu bônus de proficiência às suas salvaguardas, mesmo quando já adicionaria seu bônus de proficiência completo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Aprimoramento do Estilo de Luta",
        "level": 11,
        "page": 73,
        "text": "O Estilo de Luta escolhido no 2º nível é aprimorado. Se ele não possuir uma forma aprimorada, escolha outro Estilo de Luta disponível ao Ministro de Sangue e obtenha-o.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Crítico Circulante Perfeito",
        "level": 15,
        "page": 73,
        "text": "Você obtém um acerto crítico com um resultado 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-hemomancer",
    "classId": "blood-minister-somnus",
    "name": "Hemomante",
    "originalName": "Hemomancer",
    "aliases": [
      "Hemomancer"
    ],
    "desc": "O Hemomante exerce controle sobrenatural sobre o próprio sangue, podendo manipulá-lo, transformá-lo e até alcançar o sangue no corpo de outras criaturas para influenciá-las.",
    "sourcePage": 73,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "73–74",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Sincronia Interna",
        "level": 3,
        "page": 73,
        "text": "Você pode usar Constituição no lugar de Força ou Destreza para jogadas de ataque com armas e testes de habilidade. Também pode usar Constituição no lugar de Destreza para determinar sua Classe de Armadura, obedecendo às mesmas limitações que normalmente se aplicariam à Destreza, como o limite imposto por certas armaduras.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Reabsorção",
        "level": 3,
        "page": 73,
        "text": "Quando sofre dano perfurante, cortante ou contundente, pode usar sua reação para reabsorver o sangue perdido e recuperar PV iguais à metade do dano sofrido; isso não pode ser feito se o dano reduzir você a 0 PV. Ao usar a reação, pode reduzir a cura em qualquer múltiplo de 4 para recuperar 1 Dado de Vida de Ministro de Sangue a cada 4 PV removidos da cura. Usos por Descanso Longo: metade de seu nível de Ministro de Sangue.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Ignição de Cinza Sanguínea",
        "level": 7,
        "page": 73,
        "text": "Como ação bônus, espalhe seu sangue sobre uma arma e gaste de 1 até uma quantidade de Dados de Vida igual ao seu bônus de proficiência para produzir os efeitos de Arma Infundida num nível igual ao número de dados gastos. Você só pode escolher fogo ou necrótico; não precisa se concentrar; o efeito funciona apenas quando você empunha a arma; ela é tratada como mágica; e o efeito dura 1 minuto. Uma vez por Descanso, pode usar a característica gratuitamente como se tivesse gasto 3 Dados de Vida e ainda pode acrescentar dados adicionais até seu limite normal para elevar o nível.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Construir Sangue/Dobrar Sangue",
        "level": 11,
        "page": 73,
        "text": "Como ação bônus, gaste 2 Dados de Vida para produzir os efeitos de Aprimorar Habilidade ou Comando. O efeito é produzido em um nível igual ao seu bônus de proficiência e usa Constituição como atributo de conjuração. Você só pode escolher como alvo criaturas que possuam sangue ou equivalente em seu corpo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Fluxo Sanguíneo Cristalino",
        "level": 15,
        "page": 74,
        "text": "Ao restringir e fortificar seu sangue, ele assume uma qualidade cristalina diante de traumas. Toda instância de dano que você sofre é reduzida em uma quantidade igual à metade de seu nível de Ministro de Sangue.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-inoculator",
    "classId": "blood-minister-somnus",
    "name": "Inoculador",
    "originalName": "Inoculator",
    "aliases": [
      "Inoculator"
    ],
    "desc": "O Inoculador combina a força sobrenatural do sangue com alquimia, produzindo injeções que alteram rapidamente a fisiologia. Seus soros são preparados para reagir de modo diferente em seu próprio corpo e no de outras criaturas.",
    "sourcePage": 74,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "74–75",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Injeções",
        "level": 3,
        "page": 74,
        "text": "Como ação bônus, você pode aplicar um de seus soros em si mesmo ou em outra criatura que possa tocar. No 3º nível, possui 3 usos por Descanso; recebe +1 uso nos níveis 7, 11 e 15. Você conhece os dois Soros Automáticos abaixo e escolhe 2 receitas dentre as Seleções de Soro; aprende mais 1 receita nos níveis 7, 11 e 15 e pode trocar uma seleção ao ganhar um nível de Ministro de Sangue. Sua CD de Injeção é 8 + bônus de proficiência + modificador de Constituição. Quando uma receita diz “salvaguarda se repete”, o alvo repete a salvaguarda ao fim de seus turnos, encerrando o efeito em sucesso.\n\nSOROS AUTOMÁTICOS\n\nImpulsionador. Em você: recebe 2d6 PV temporários e escolhe um atributo, obtendo vantagem nos testes desse atributo enquanto conservar esses PV temporários. Em outro alvo: escolha um atributo exceto Constituição; ele faz salvaguarda de Constituição e, em falha, fica envenenado por 10 minutos e tem desvantagem em salvaguardas do atributo escolhido enquanto estiver envenenado (salvaguarda se repete).\n\nStimpack. Em você: recupera uma quantidade de PV igual a 1d6 × seu bônus de proficiência + seu modificador de Constituição. Em outro alvo: ele faz salvaguarda de Constituição; em falha, sofre dano de veneno igual à cura que o soro concederia a você.\n\nSELEÇÕES DE SORO\n\nGrito de Banshee. Em você: criaturas à sua escolha a até 4,5 m fazem salvaguarda de Sabedoria ou ficam amedrontadas por 1 minuto (salvaguarda se repete). Em outro alvo: salvaguarda de Carisma; em falha, fica amedrontado por 10 minutos, repetindo a salvaguarda, e sofre dano psíquico igual a 1d4 × seu nível de Ministro de Sangue.\n\nLâmina de Sangue. Em vez de injetado, é aplicado a uma arma tocada. Por 1 minuto ela recebe bônus nas jogadas de ataque e dano igual à metade de seu bônus de proficiência e é tratada como mágica, mas apenas enquanto você a empunha.\n\nConfluência de Energia. Em você: resistência por 1 hora a ácido, frio, fogo ou necrótico. Em outro alvo: salvaguarda de Constituição; em falha, perde resistências — não imunidades — a esses tipos por 10 minutos.\n\nEyebrine. Em você: visão no escuro a 18 m até o próximo Descanso Longo; se já possuir, recebe visão diabólica no mesmo alcance. Em outro alvo: salvaguarda de Constituição; em falha, fica cego por 1 hora (salvaguarda se repete).\n\nAceleração. Em você: por 1 minuto, seu deslocamento aumenta em 1,5 m × metade de seu nível de Ministro de Sangue, arredondado para cima, e ataques de oportunidade contra você têm desvantagem. Em outro alvo: salvaguarda de Constituição; em falha, deslocamento reduzido à metade e não pode usar Disparada por 1 minuto (salvaguarda se repete).\n\nOlhos de Caça. Em você ou outro alvo: por 1 hora, bônus em Percepção e Investigação igual ao bônus de proficiência do alvo, e ele não pode ser surpreendido em combate.\n\nRestaurador. Em você ou outro alvo: remove condições e efeitos que Restauração Menor removeria; a partir do 11º nível, também remove aquilo que Restauração Maior removeria.\n\nTouro Sanguíneo. Em você: por 1 minuto, sofre 1d6 de dano irredutível no início de cada turno, salvo se começar com 0 PV, e tem vantagem em ataques com armas. Em outro alvo: salvaguarda de Constituição; em falha, fica lento por 1 minuto (salvaguarda se repete).\n\nAntimagia Sérica. Em você ou outro alvo: durante 1 minuto, sempre que fizer uma salvaguarda contra efeito mágico, rola 1d6 e soma ao resultado. O efeito termina após três salvaguardas bem-sucedidas desse modo.\n\nBanho Definhante. O soro é quebrado na mão, criando uma névoa num cubo de 6 m originado em você. Cada criatura na área faz salvaguarda de Constituição ou fica envenenada por 1 minuto e sofre 2d6 de dano de veneno no início de cada turno enquanto estiver assim (salvaguarda se repete).",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Autovacinação",
        "level": 3,
        "page": 75,
        "text": "Você é imune a dano de veneno e à condição envenenado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Transfiguração",
        "level": 7,
        "page": 75,
        "text": "Quando não possui usos de Injeção restantes e está em combate ou situação semelhante, pode gastar 2 Dados de Vida para produzir os efeitos de uma de suas Injeções não Supremas, transfigurando à força seu sangue sob o efeito da adrenalina.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Injeção de Elixir",
        "level": 11,
        "page": 75,
        "text": "Ao terminar um Descanso Longo, você produz um soro que imita um elixir raro ou de raridade inferior à sua escolha. Como ação bônus, pode aplicá-lo em si mesmo ou em uma criatura tocada; em outra criatura, seus efeitos duram apenas 10 minutos. Ao produzir um novo, elixires de injeção antigos e não usados tornam-se inertes. No 15º nível, pode escolher elixires muito raros. A fonte remete às listas de elixires de Lyre’s Guide to Risk & Reward e outros livros de Somnus Domina.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Injeção Suprema",
        "level": 15,
        "page": 75,
        "text": "Escolha uma opção abaixo. Ela funciona como uma Injeção comum, mas apenas em você e uma vez por Descanso, em uso separado de suas Injeções normais. Sempre que ganhar um nível de Ministro de Sangue, pode trocar a escolha.\n\nVacinação Agressiva. Por 1 hora, você tem vantagem em salvaguardas contra condições indesejadas, mesmo se normalmente tivesse desvantagem.\n\nImpulso Sanguíneo. Por 1 hora, todo Dado de Vida que gastar é tratado como um tamanho de dado maior — d4 vira d6, d8 vira d10 etc. — sem ultrapassar d12.\n\nGrande Estatura. Por 1 minuto, seu tamanho aumenta em uma categoria, seu alcance aumenta em 1,5 m, você tem vantagem em testes de Força e, sempre que fizer um ataque corpo a corpo, rola 1d4 e soma à jogada de ataque.\n\nAprimorador Muscular. Por 1 minuto, quando acerta um ataque com arma, causa um dado de arma adicional de dano.\n\nMutação. Por 10 minutos, seu corpo se adapta livremente ao ambiente: você recebe deslocamentos de voo, escavação, escalada e natação iguais ao deslocamento-base, todos aumentados em 4,5 m, e pode respirar ar e água.\n\nTotem da Vida Sombria. Não é injetado. Quando é reduzido a 0 PV, pode usar reação para receber 8d10 PV temporários; o dano que o reduziu a 0 é primeiro subtraído desses PV temporários antes de afetar seus PV. Enquanto possuir esses PV temporários, tem vantagem em salvaguardas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-mutagenic",
    "classId": "blood-minister-somnus",
    "name": "Mutagênico",
    "originalName": "Mutagenic",
    "aliases": [
      "Mutagenic"
    ],
    "desc": "O Mutagênico absorve influências genéticas de outras criaturas e passa a emular seres poderosos e monstros que caçadores de sangue normalmente enfrentariam. Seu corpo pode se distorcer violentamente, mas treinamento permite temperar e controlar essas alterações.",
    "sourcePage": 76,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "76–77",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Mutação Coagulada",
        "level": 3,
        "page": 76,
        "text": "Escolha duas raças diferentes da sua e obtenha uma Característica de Legado de cada uma como se fossem suas raças secundárias. Escolha também uma Mutação abaixo e receba permanentemente seus benefícios.\n\nMutação Alienígena. Telepatia a 4,5 m × seu bônus de proficiência; criaturas familiares reconhecem sua voz mental, mas não podem responder sem outro meio.\n\nMutação Bestial. Deslocamentos de natação e escalada iguais ao seu deslocamento-base e capacidade de respirar ar e água.\n\nMutação Celestial. Especialização em Intuição e resistência a dano radiante; seu corpo desenvolve penas e placas metálicas.\n\nMutação Dracônica. Pode produzir asas semelhantes às de morcego, recebendo voo laborioso igual ao deslocamento-base; se já possui voo laborioso, ele aumenta em 9 m.\n\nMutação Infernal. Visão diabólica a 18 m; se já a possui, aumenta em 18 m ou para 36 m, o que for maior. Seu corpo desenvolve pequenos chifres, protuberâncias pétreas e esclera negra.\n\nMutação Monstruosa. Seu tamanho torna-se Grande, salvo se já for maior; recebe Especialização em Atletismo e pode tentar Agarrar ou Empurrar como ação bônus.\n\nMutação Espiritual. Ao usar Desengajar, fica invisível até o fim do turno. Também assume forma semiespectral e pode atravessar espaços de criaturas sem custo adicional nem ser bloqueado por hostis, mas deve terminar o movimento em espaço desocupado que comporte você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Mutação Contínua",
        "level": 7,
        "page": 77,
        "text": "Você recebe uma Característica de Legado de mais uma raça diferente das já escolhidas e também uma Mutação adicional dentre as opções de Mutação Coagulada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Evasão Sobrenatural",
        "level": 11,
        "page": 77,
        "text": "Quando realiza uma salvaguarda para sofrer metade do dano de um efeito, sofre nenhum dano em sucesso e metade em falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Mutação Final",
        "level": 15,
        "page": 77,
        "text": "Você domina suas mutações. Mutação Controlada permite ocultar alterações físicas e fazê-las reaparecer quando usa seus poderes; Regeneração Desesperada faz você recuperar 1d4 + modificador de Constituição PV no início de cada turno em que esteja abaixo da metade de seus PV máximos; Mudança Final concede uma terceira Mutação de Mutação Coagulada; e Rearranjo Genético permite trocar uma de suas Mutações por outra ao terminar qualquer Descanso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-blood-minister-somnus-sanguine-knight",
    "classId": "blood-minister-somnus",
    "name": "Cavaleiro Sanguíneo",
    "originalName": "Sanguine Knight",
    "aliases": [
      "Sanguine Knight"
    ],
    "desc": "O Cavaleiro Sanguíneo leva armas pesadas contra os monstros da noite e luta com ferocidade incessante. Mais protegido que seus companheiros, normalmente sai do combate coberto tanto pelo próprio sangue quanto pelo de seus inimigos.",
    "sourcePage": 77,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "77",
      "chapter": "Capítulo IX: O Ministro de Sangue"
    },
    "features": [
      {
        "title": "Blindado Pesadamente",
        "level": 3,
        "page": 77,
        "text": "Você ganha proficiência com armaduras pesadas e proficiência em salvaguardas de Sabedoria.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Explosão Sanguínea",
        "level": 3,
        "page": 77,
        "text": "Quando usa Ministração Sanguínea para conceder bônus a um ataque feito com uma arma Pesada ou de Duas Mãos, o bônus obtido do Dado de Vida é dobrado, desde que um Dado de Vida tenha sido realmente gasto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Sede Exsanguinante",
        "level": 7,
        "page": 77,
        "text": "Uma vez por Descanso, no lugar de um de seus ataques com arma, você pode produzir os efeitos de Infligir Ferimentos sem espaço de magia, em nível igual ao seu bônus de proficiência. Se acertar, recebe PV temporários iguais ao dano causado. O uso só é consumido se o ataque acertar, e você só pode tentar usar esta característica uma vez por turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Proteção Sombria",
        "level": 11,
        "page": 77,
        "text": "Quando gasta um Dado de Vida com Ministração Sanguínea, todo dano que sofrer até o início de seu próximo turno é reduzido pelo bônus obtido nesse dado. Se rolar vários Dados de Vida desse modo, use apenas o maior bônus.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Maestria em Ataque Extra",
        "level": 15,
        "page": 77,
        "text": "Quando realiza a ação Atacar, pode realizar quatro ataques em vez de um.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "Sede Maior",
        "level": 15,
        "page": 77,
        "text": "Você pode usar Sede Exsanguinante uma vez adicional por Descanso e pode tentar usá-la uma vez adicional no mesmo turno, mas apenas se a primeira tentativa errar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-barbarian-path-of-the-bloodpainted",
    "classId": "barbarian",
    "name": "Caminho do Pintado de Sangue",
    "originalName": "Path of the Bloodpainted",
    "aliases": [
      "Path of the Bloodpainted"
    ],
    "desc": "Um bárbaro que abriga um espírito bestial capaz de deformar e transformar sua carne.",
    "sourcePage": 83,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "83–84",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FRENESI SANGUÍNEO",
        "level": 3,
        "page": 83,
        "text": "A visão de sangue e violência o lança em frenesi. Se, desde o início de seu último turno, você sofreu dano de um ataque ou atingiu outra criatura com um ataque, pode realizar um ataque adicional como parte de qualquer ação Atacar que fizer. Além disso, uma vez por turno, se obtiver um acerto crítico em um ataque com arma, pode usar uma ação bônus para realizar dois ataques adicionais com a mesma arma. Esse benefício só se aplica se o crítico resultar de uma rolagem de dado, não de um acerto crítico automático causado por uma condição como paralisado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DESCARGA DE ADRENALINA",
        "level": 6,
        "page": 83,
        "text": "Ao entrar em Fúria, você pode encerrar qualquer efeito que esteja fazendo com que fique restringido, paralisado, atordoado, envenenado, amedrontado ou enfeitiçado. Se a condição vier de uma doença ou de um efeito contínuo que duraria mais de 10 minutos, ela apenas fica suprimida enquanto sua Fúria durar. Se começar seu turno incapaz de realizar ações por uma dessas condições, como paralisado ou atordoado, ainda pode entrar em Fúria, sem exigir ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPE EXPLOSIVO",
        "level": 6,
        "page": 83,
        "text": "Mesmo fora de Fúria, sangue e violência despertam a influência monstruosa em você. Uma vez para cada dado de dano, quando fizer um ataque com arma baseado em Força e obtiver o resultado máximo em um dado de dano (como 6 em d6 ou 8 em d8), pode rolar esse dado novamente e somar o novo resultado ao dano. Isso só se aplica a dados efetivamente rolados como parte do dano; resultados fixados automaticamente no máximo por regras, características, traços ou efeitos não ativam esta característica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "BESTA DE SANGUE",
        "level": 10,
        "page": 83,
        "text": "Uma vez por Descanso, quando entrar em Fúria, você pode transformar-se em uma aterradora besta híbrida da noite em vez de entrar em Fúria normalmente. Você recebe os benefícios normais de Fúria, com as seguintes alterações:\n\n• Sua Fúria não termina antes do tempo, a menos que você fique inconsciente ou escolha encerrá-la em seu turno.\n• Você aumenta uma categoria de tamanho e seu alcance com ataques corpo a corpo aumenta em 1,5 m.\n• Some seu bônus de Dano de Fúria à CA e às salvaguardas de Força, Destreza e Constituição realizadas durante a transformação.\n• Em cada turno, pode usar sua ação bônus para fazer um ataque desarmado baseado em Força que causa dano igual a 1d6 × seu bônus de proficiência. Se usar a ação bônus para os ataques extras de Frenesi Sanguíneo, ambos podem ser esses ataques desarmados.\n• No início de cada um de seus turnos transformado, você perde seu maior Dado de Vida restante.\n\nA transformação dura até 1 minuto ou até sua Fúria terminar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "BESTA FAMINTA POR SANGUE",
        "level": 14,
        "page": 84,
        "text": "Quando perder um Dado de Vida no início de seu turno enquanto estiver transformado em Besta de Sangue, você pode rolar esse dado, sem adicionar seu modificador de Constituição, e recuperar pontos de vida iguais ao resultado. Se o resultado for menor que seu modificador de Constituição, use o modificador de Constituição em seu lugar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 14,
        "page": 84,
        "text": "Você obtém um acerto crítico com um resultado 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-barbarian-path-of-the-oni",
    "classId": "barbarian",
    "name": "Caminho do Oni",
    "originalName": "Path of the Oni",
    "aliases": [
      "Path of the Oni"
    ],
    "desc": "Um bárbaro que manifesta a fúria de um oni e seu poder místico.",
    "sourcePage": 84,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "84",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "NATUREZA LAVANDA",
        "level": 3,
        "page": 84,
        "text": "Você pode falar, ler e escrever Gigante e Abissal. Além disso, recebe Especialização em Atletismo ou Intimidação, à sua escolha quando recebe esta característica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "IRA DO TITÃ",
        "level": 3,
        "page": 84,
        "text": "Você canaliza o poder do gigante infernal imbuído em seu corpo para crescer a proporções absurdas. Ao entrar em Fúria, pode produzir em si mesmo o efeito de ampliar de ampliar/reduzir, sem concentração nem espaço de magia; o efeito não conta como magia nem efeito mágico. Considere-o produzido como se fosse conjurado em um nível igual à metade de seu nível de bárbaro, arredondado para cima, no máximo 9º, ou em um nível inferior à sua escolha. O efeito termina quando sua Fúria termina. Você pode usá-lo um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PASSOS DE PESADELO",
        "level": 6,
        "page": 84,
        "text": "Você replica a capacidade de levitação de um oni e recebe deslocamento de voo laborioso (pairar) igual ao seu deslocamento base.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NEOBHÀSMHOR",
        "level": 10,
        "page": 84,
        "text": "Seu corpo recompõe a si mesmo conforme necessário. Quando iniciar seu turno com 1 ou mais pontos de vida, mas com no máximo metade de seus pontos de vida máximos, recupera pontos de vida iguais a 1d6 + seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FRENESI SOMBRIO",
        "level": 14,
        "page": 84,
        "text": "Seu domínio da natureza de um gigante voraz aprimora suas características anteriores. Se usar Ira do Titã para ampliar-se e sua Fúria terminar, pode manter o efeito de ampliar/reduzir, passando a concentrar-se nele; ele termina quando sua concentração acabar ou após 1 minuto. Enquanto estiver em Fúria, seu deslocamento de voo laborioso (pairar) torna-se deslocamento normal de voo (pairar). Além disso, quando fizer qualquer ataque com vantagem e acertar, pode rolar um dado de dano adicional da arma e somá-lo ao dano.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-barbarian-swelling-heart",
    "classId": "barbarian",
    "name": "Coração Transbordante",
    "originalName": "Swelling Heart",
    "aliases": [
      "Swelling Heart"
    ],
    "desc": "Um guerreiro enfurecido cuja força cresce quando protege aqueles ao seu redor.",
    "sourcePage": 84,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "84–85",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "AMIZADE INCESSANTE",
        "level": 3,
        "page": 84,
        "text": "Quando um de seus aliados a até 18 m sofre dano ou é atacado, isso conta como se você tivesse sofrido dano para fins de manter sua Fúria.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "INTERFERÊNCIA FURIOSA",
        "level": 3,
        "page": 84,
        "text": "Enquanto estiver em Fúria, quando criaturas dentro do alcance de sua arma corpo a corpo sofrerem dano perfurante, cortante ou contundente, reduza esse dano pelo seu bônus de Dano de Fúria.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PERDA ERRÁTICA DE UM COMPANHEIRO",
        "level": 6,
        "page": 84,
        "text": "Se uma criatura aliada a até 9 m for reduzida a 0 pontos de vida ou sofrer um acerto crítico, você recupera um uso gasto de Fúria. Como reação ao evento, pode entrar em Fúria e/ou mover-se até seu deslocamento em direção à fonte do dano e, imediatamente, realizar uma ação Atacar contra ela. Todos os ataques dessa ação devem ter como alvo essa mesma criatura.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DOR DILACERANTE",
        "level": 10,
        "page": 84,
        "text": "Quando atingir uma criatura com um ataque com arma enquanto um aliado próximo estiver morrendo ou tiver morrido recentemente a até 18 m de você, o ataque causa dano adicional igual a um dado de dano da arma. O efeito se acumula para cada aliado que se enquadre nessa condição dentro do alcance, até um máximo igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "LAÇOS NADA SUTIS",
        "level": 10,
        "page": 85,
        "text": "Enquanto uma criatura morrendo puder ver ou ouvir você a até 9 m e você estiver em Fúria, ela tem vantagem em salvaguardas contra a morte. Se obtiver o terceiro sucesso em uma salvaguarda contra a morte enquanto tiver essa vantagem, recupera imediatamente 1 ponto de vida. Da mesma forma, você tem vantagem em suas salvaguardas contra a morte e recupera 1 ponto de vida no terceiro sucesso se houver um aliado a até 9 m.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ATAQUE CIRCUNSTANCIAL",
        "level": 14,
        "page": 85,
        "text": "Quando realiza a ação Atacar, você pode fazer um ataque adicional, desde que ele seja contra um alvo que esteja no alcance corpo a corpo de um de seus aliados. Esse ataque especial ocorre depois de todos os outros ataques da ação. Se obtiver 9 ou menos no d20 desse ataque, pode tratar o resultado como 10.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-bard-college-of-likeness",
    "classId": "bard",
    "name": "Colégio da Semelhança",
    "originalName": "College of Likeness",
    "aliases": [
      "College of Likeness"
    ],
    "desc": "Um artista que assume diferentes traços ao adornar a si mesmo e aos outros com máscaras.",
    "sourcePage": 85,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "85–87",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MÁSCARAS ANAMCOHLA",
        "level": 3,
        "page": 85,
        "text": "Você cria máscaras especiais infundidas com o poder de diferentes criaturas. Ao receber esta característica, escolha três das opções abaixo. Você pode colocar ou trocar uma máscara como ação bônus, só pode usar uma por vez e, enquanto a usa, recebe seu efeito e conta como o tipo de criatura indicado entre parênteses. Ao terminar um Descanso Longo, pode substituir até metade das máscaras escolhidas, arredondado para baixo. Nos níveis 5, 9, 13 e 17 de bardo, o número de máscaras que pode preparar aumenta em 1.\n\nALQUIMISTA (LIMO). Pode atravessar espaços de até 2,5 cm de largura ao liquefazer o corpo. Como ação, restaura a si ou a uma criatura tocada em 1d8 + metade do seu nível de bardo (arredondado para cima) PV. Após três usos, só pode usar novamente após Descanso Longo.\n\nBRUTALISTA (GIGANTE). Aumenta uma categoria de tamanho; sua capacidade de carga conta como se tivesse uma categoria além dessa.\n\nCANALIZADOR (ELEMENTAL). Escolha ácido, elétrico, fogo ou frio. Uma vez por turno, quando causar dano a uma criatura com ataque de arma, ataque mágico ou ação que force salvaguarda, causa dano extra do tipo escolhido igual à metade do seu nível de bardo.\n\nMENTE SOMBRIA (ABERRAÇÃO). Telepatia a 18 m. A mensagem usa sua voz; se vencer um teste de Enganação contra Intuição do alvo, pode fazê-la soar como outra voz ou mistura de vozes. O alvo não responde telepaticamente sem meio próprio.\n\nHUMILDE (HUMANOIDE). O primeiro teste de atributo ou perícia de cada turno recebe bônus igual à metade do seu bônus de proficiência.\n\nCAÇADOR (BESTA). Seu deslocamento aumenta em 3 m e você ganha escalada igual ao deslocamento base.\n\nMECHANUS (CONSTRUTO). A máscara tem PV temporários iguais à metade do seu nível de bardo × seu bônus de proficiência. Enquanto a usa, ela sofre o dano em seu lugar. Ao chegar a 0, deixa de absorver dano até recuperar seus PV ao completar um Descanso. Uma cópia concedida por Inspiração Bárdica conta como máscara nova a cada vez.\n\nMUTANTE (MONSTRUOSIDADE). Você tem vantagem em três testes ou salvaguardas de Força enquanto usar a máscara e pode adicionar seu bônus de proficiência mesmo que já o adicionasse. Após três dessas rolagens, o usuário não pode se beneficiar dela de novo até Descanso Longo.\n\nCAVALEIRO POSSUÍDO (ÍNFERO). Manifesta asas infernais e ganha voo laborioso igual ao deslocamento base.\n\nPUCK (FEÉRICO). Imune a enfeitiçado. Como ação bônus, fica invisível até o fim do próximo turno, até atacar ou realizar ação que force salvaguarda. Após três invisibilidades, não pode usar novamente até um Descanso.\n\nCONDE RESSURGIDO (MORTO-VIVO). Resistência a dano necrótico. Se for reduzido a 0 PV por dano ou morto instantaneamente, pode quebrar a máscara para ignorar completamente o dano ou efeito; não pode se beneficiar dela novamente até Descanso Longo.\n\nSANTO (ESPÍRITO). Recebe a qualidade Etéreo, podendo atravessar espaços de outras criaturas sem provocar ataques de oportunidade ou gastar movimento adicional; não pode terminar o movimento no espaço de outra criatura.\n\nSALVADOR (CELESTIAL). Vantagem em testes e salvaguardas de Carisma. Como ação bônus, pode conjurar chama sagrada usando sua CD de magia; após três conjurações por um usuário, ele precisa de Descanso Longo para repetir.\n\nESCAMADO (DRAGÃO). Ao vestir, escolha ácido, frio, fogo, elétrico, veneno ou necrótico. Ao sofrer esse tipo de dano, reduza-o em metade do seu nível de bardo + seu bônus de proficiência.\n\nENTE (PLANTA). O alcance de seu toque e de suas armas corpo a corpo dobra, pois seus membros se estendem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ANAMCOHLA COMPARTILHADA",
        "level": 6,
        "page": 86,
        "text": "Quando concede Inspiração Bárdica a uma criatura, pode escolher uma Máscara Anamcohla preparada. Ela recebe uma cópia espectral da máscara, que aparece em seu corpo ou rosto e concede os benefícios enquanto ela mantiver aquela Inspiração Bárdica sem gastar. Os efeitos são sempre calculados usando seus níveis e estatísticas, mesmo quando outra criatura usa a máscara.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SEMELHANÇAS AVANÇADAS",
        "level": 14,
        "page": 86,
        "text": "Você ganha acesso às máscaras avançadas abaixo, escolhidas como as demais; no máximo metade das máscaras preparadas pode vir desta lista. Quem usa uma delas conta como possuindo níveis na classe indicada iguais ao seu nível total para requisitos de itens mágicos e efeitos de características.\n\nBÁRBARO. Pode usar Ataque Imprudente também em ataques mágicos ou ataques corpo a corpo com qualquer atributo.\nBARDO. No início de cada turno, ganha uma Inspiração Bárdica especial d6, acumulável com uma normal, se ainda não tiver uma dessas especiais. Pode ganhar no máximo três dessa forma antes de precisar de Descanso Longo.\nMINISTRO DE SANGUE. Cura recebida de fonte não contínua sempre usa o valor máximo permitido.\nCLÉRIGO. Vantagem em salvaguardas contra ínferos e mortos-vivos.\nDRAGONEER. Voo (pairar) igual ao deslocamento base.\nDRUIDA. Fala e compreende bestas como sob falar com animais.\nALMA FAVORECIDA. Uma vez enquanto usar a máscara, ao falhar em uma salvaguarda pode escolher ter sucesso; recarrega em Descanso Longo.\nGUERREIRO. Como ação bônus, faz um ataque com arma com vantagem.\nPILOTO DE FRAME. Ganha Limiar de Dano igual à metade do seu nível de bardo + 5.\nINSCRITOR. Escolha três perícias ou uma salvaguarda; torna-se proficiente enquanto usa a máscara.\nMONGE. Como ação bônus, faz dois ataques desarmados que causam 1d8 trovão cada e usam seu atributo de conjuração de bardo para ataque e dano.\nPALADINO. Bônus em salvaguardas igual ao bônus de proficiência.\nCAVALEIRO DAS PÉTALAS. Ao realizar Atacar usando apenas armas de uma mão, faz um ataque adicional na mesma ação.\nPATRULHEIRO. Escolha um tipo de criatura correspondente a outra máscara preparada; ele conta como Inimigo Favorito. Seu Dado de Favor é d6 e seu Bônus de Favor é +2.\nLADINO. Pode usar Ação Ardilosa.\nFEITICEIRO. Ganha uma Metamagia acessível sem subclasse e Pontos de Feitiçaria iguais ao bônus de proficiência; os pontos só são restaurados em Descanso Longo e só podem ser usados com a máscara.\nSANTO DA ESPADA. Ataques de magia e arma e seus danos recebem +2; os ataques contam como mágicos.\nBRUXO. Ganha visão diabólica a 9 m ou aumenta a existente em 9 m.\nMAGO. Escolha uma magia de 1º nível que possa conjurar. Pode conjurá-la três vezes sem espaço nem componentes; se a máscara vier de Inspiração Bárdica, o bardo escolhe uma magia de sua lista e são usados o ataque e CD dele. Após três conjurações, exige Descanso Longo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MÁSCARA DUPLA",
        "level": 14,
        "page": 87,
        "text": "Você, mas não criaturas que carregam sua Inspiração Bárdica, pode usar uma segunda Máscara Anamcohla. Ela pode ser vestida em outra parte do corpo ou fundir-se com a primeira, formando uma aparência dividida ou combinada. Cada ação bônus ainda troca apenas uma máscara, mas você pode usar sua ação para trocar ambas imediatamente.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-bard-college-of-quiet-dignity",
    "classId": "bard",
    "name": "Colégio da Dignidade Serena",
    "originalName": "College of Quiet Dignity",
    "aliases": [
      "College of Quiet Dignity"
    ],
    "desc": "Um combatente refinado que se porta com graça e dignidade.",
    "sourcePage": 87,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "87–88",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "PREPAROS DE CAVALHEIRO",
        "level": 3,
        "page": 87,
        "text": "Você é proficiente com todas as armas que possuam as propriedades acuidade ou leve, incluindo armas de fogo aplicáveis, e pode usar Carisma nas jogadas de ataque e dano com essas armas e com todas as armas simples, em vez de Força ou Destreza. Também ganha proficiência com armaduras médias.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TOQUE LEVE",
        "level": 3,
        "page": 88,
        "text": "Na primeira vez em cada turno que acertar uma criatura com ataque de arma ou ataque mágico, pode rolar um dado igual ao seu dado de Inspiração Bárdica e somá-lo ao dano. Se o mesmo efeito atingir várias criaturas, escolha apenas uma delas para receber esse dano extra.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO ELOQUENTE",
        "level": 6,
        "page": 88,
        "text": "Seus ataques de arma e magia obtêm acerto crítico com 19 ou 20 no d20. Quando isso ocorrer, adicione um dado de Inspiração Bárdica ao dano, separadamente de Toque Leve.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ATAQUE EXTRA (GENTIL)",
        "level": 6,
        "page": 88,
        "text": "Quando realiza a ação Atacar, pode atacar duas vezes em vez de uma, desde que ambos os ataques sejam feitos com armas simples ou armas contempladas por Preparos de Cavalheiro.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SAGACIDADE AFIADA, LÂMINA MAIS AFIADA",
        "level": 14,
        "page": 88,
        "text": "Conforme Crítico Eloquente, você obtém acerto crítico com 18, 19 ou 20 no d20 e, quando isso acontece, adiciona mais um dado de Inspiração Bárdica ao dano. Além disso, se o crítico vier de um resultado 20, pode realizar um ataque adicional com a mesma arma que produziu o crítico. Só pode fazer isso uma vez por turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-bard-elegiac-artist",
    "classId": "bard",
    "name": "Artista Elegíaco",
    "originalName": "Elegiac Artist",
    "aliases": [
      "Elegiac Artist"
    ],
    "desc": "Um poeta que empunha o poder de nomes, palavras e mantos.",
    "sourcePage": 88,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "88–89",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "EPÍTETO IMPLÍCITO",
        "level": 3,
        "page": 88,
        "text": "Quando concede uma Inspiração Bárdica a uma criatura, também pode dar a ela um título temporário que permanece enquanto ela conservar essa Inspiração. Escolha um dos títulos abaixo:\n\nGUERREIRO AUDAZ. A criatura pode usar sua ação bônus para fazer um ataque com arma. Quando gastar a Inspiração Bárdica em um ataque com arma, pode imediatamente fazer outro ataque com arma contra o mesmo alvo.\n\nTRIBUTO RESISTENTE. A criatura recebe +2 na CA. Se gastar a Inspiração Bárdica em uma salvaguarda que normalmente reduziria dano à metade, sofre metade do dano em uma falha e nenhum dano em um sucesso.\n\nGRANDE DEFENSOR. A criatura recebe PV temporários iguais à metade do seu nível de bardo + 5 e recupera essa mesma quantidade no início de cada turno. Ao gastar a Inspiração Bárdica, também recebe esses PV temporários.\n\nCAMINHANTE DO VENTO IMPETUOSO. O deslocamento da criatura aumenta em 3 m. Ao usar a Inspiração Bárdica, ela pode usar sua reação para mover-se até seu deslocamento.\n\nDRAGÃO VIGILANTE. A criatura recebe +5 em testes de Percepção e percepção às cegas a 3 m. Se gastar a Inspiração Bárdica em um teste de Percepção, aplica esse bônus duas vezes ao teste.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AS PALAVRAS GUARDAM NUANCES",
        "level": 3,
        "page": 89,
        "text": "Sua conjuração compreende o poder que emerge das palavras e de seu uso, em vez de depender das harmonias e da prosa evocativa de um bardo. Magias de Inscritor contam como magias de bardo para você, permitindo que as aprenda, leia e conjure. Ao receber esta característica, pode substituir até três de suas magias de bardo por magias de Inscritor de níveis que possa conjurar; uma dessas trocas pode substituir um truque por outro truque.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PROFERIMENTOS LIBERTOS",
        "level": 6,
        "page": 89,
        "text": "Você produz com facilidade os efeitos de magias Palavra de Poder. Aprende todas as magias Palavra de Poder; elas contam como magias de bardo para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MANTO ROUBADO",
        "level": 14,
        "page": 89,
        "text": "Quando uma criatura a até 27 m de você, incluindo você mesmo, for diretamente escolhida como alvo de um ataque ou efeito, pode usar sua reação para trocar brevemente o nome dela pelo de outra criatura dentro desse alcance e tentar redirecionar para o novo alvo o dano e os efeitos. O novo alvo não pode ser a origem do efeito. O ataque passa a ser comparado à CA do novo alvo ou ele realiza a salvaguarda inicial exigida pelo efeito, como se fosse o alvo original; o alvo original é completamente ignorado pelo ataque ou efeito. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-cleric-fortune-domain",
    "classId": "cleric",
    "name": "Domínio da Fortuna",
    "originalName": "Fortune Domain",
    "aliases": [
      "Fortune Domain"
    ],
    "desc": "Clérigos que extraem poder dos domínios da sorte e do acaso.",
    "sourcePage": 89,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "89–90",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "DISPUTA JUSTA",
        "level": 1,
        "page": 89,
        "text": "Uma vez por Descanso, use uma ação ou ação bônus para declarar uma Disputa Justa contra uma criatura a até 18 m que possa ver ou ouvir você. Por 1 hora, escolha vantagem, desvantagem ou nenhuma das duas: todas as rolagens que vocês fizerem um contra o outro durante esse período usam a circunstância escolhida, ignorando outras fontes de vantagem ou desvantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ROLAGEM VICIADA",
        "level": 1,
        "page": 89,
        "text": "Um número de vezes por Descanso igual ao seu bônus de proficiência, quando rolar vários d20 para a mesma jogada de ataque, teste de atributo ou salvaguarda, você pode escolher qual dos resultados será usado, mesmo que outro efeito normalmente determinasse qual deveria valer.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CANALIZAR DIVINDADE: OPORTUNIDADE DOURADA",
        "level": 2,
        "page": 89,
        "text": "Quando realiza uma ação para atacar uma criatura ou forçá-la a fazer uma salvaguarda, pode gastar Canalizar Divindade para abençoar-se com fortuna contra ela. Escolha um dos efeitos abaixo por 1 minuto contra esse alvo:\n\n• Você adiciona novamente seu bônus de proficiência a todas as jogadas de ataque e dano contra ele.\n• Todo dano que causar a ele ignora Limiares de Dano e resistências, mas não imunidades.\n• O alvo tem desvantagem em todas as salvaguardas contra você.\n\nAlém disso, se a ação que ativou esta característica foi um ataque, recebe +10 para acertar; se foi uma ação que forçou salvaguarda, o alvo sofre -5 no resultado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APOSTAR NO OURO",
        "level": 6,
        "page": 89,
        "text": "Quando tiver vantagem em uma rolagem, pode optar antes de rolar por não usar a vantagem e, em vez disso, rolar 1d6 e somar ao resultado. Quando tiver desvantagem, pode optar por não usá-la e rolar 1d6, subtraindo o resultado. No 10º nível, o dado torna-se d8; no 14º, d10.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RESULTADO EXPLOSIVO",
        "level": 8,
        "page": 90,
        "text": "Quando rolar dados de dano ou cura e obtiver o resultado máximo em qualquer dado, pode rolar esse dado novamente e adicionar o novo resultado. Se o dado rerrolado também mostrar seu máximo, pode repetir o processo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APOSTA EQUIVALENTE",
        "level": 17,
        "page": 90,
        "text": "Quando uma criatura hostil a até 18 m fizer uma das ações abaixo, role 1d10 e recupere um espaço de magia gasto do nível obtido. Se rolar 10, role novamente duas vezes e recupere dois espaços, nos níveis obtidos. Ativa quando a criatura: usa uma Resistência Lendária; obtém um acerto crítico; passa por um Despertar Mítico; acerta três ou mais ataques contra o mesmo alvo em um único turno; ou conjura/produz os efeitos de uma magia de 7º nível ou superior.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Fortuna",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 89,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Evasão Milagrosa; Escrito de Recordação"
          },
          {
            "level": "3º",
            "spells": "Canção da Inspiração; Arma da Fortuna"
          },
          {
            "level": "5º",
            "spells": "Confluência Banal; Caminho para a Vitória"
          },
          {
            "level": "7º",
            "spells": "Glamour do Deva; Santuário Particular"
          },
          {
            "level": "9º",
            "spells": "Aljava Acelerada; Palavra de Poder: Quebrar"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-cleric-greed-domain",
    "classId": "cleric",
    "name": "Domínio da Ganância",
    "originalName": "Greed Domain",
    "aliases": [
      "Greed Domain"
    ],
    "desc": "Um servo egoísta do divino que protege e fortalece a si mesmo antes dos demais.",
    "sourcePage": 91,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "91",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "DESPERDÍCIO ESCANDALOSO",
        "level": 1,
        "page": 91,
        "text": "Quando fizer qualquer rolagem com desvantagem durante combate ou em resposta a um efeito hostil, pode registrar o maior dos resultados. Você pode manter um número de resultados registrados igual ao seu bônus de proficiência, perdendo-os ao completar um Descanso; se estiver no limite, deve remover um resultado antigo para registrar outro. Sempre que fizer uma rolagem sem vantagem nem desvantagem e o resultado do d20 for menor que um de seus resultados registrados, pode substituí-lo por esse resultado antes de o sucesso ou falha ser confirmado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CANALIZAR DIVINDADE: FORTALECIDO PELA GANÂNCIA",
        "level": 2,
        "page": 91,
        "text": "Quando conjura uma magia que tenha apenas você como alvo, ou um aliado conjura em você uma magia que tenha somente você como alvo, pode gastar Canalizar Divindade para tratar a magia como se tivesse sido conjurada em um nível maior: nível original + metade do seu bônus de proficiência, arredondado para cima, no máximo 9º. Se a magia oferecer opções adicionais ao ser conjurada em níveis maiores, você escolhe as opções correspondentes aos níveis extras, mesmo se não tiver sido o conjurador.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PARTILHAR JUNTOS",
        "level": 6,
        "page": 91,
        "text": "Quando uma criatura a até 18 m recuperar PV ou escolher a si mesma como alvo de um efeito benéfico, pode usar sua reação para replicar esse efeito em si ou recuperar a mesma quantidade de PV. Falha automaticamente se o efeito exigir uma alteração física incompatível com sua anatomia. Se vier de uma magia, faça um teste de atributo de conjuração com CD 10 + o nível em que a magia foi conjurada; em falha, não copia o efeito. Se exigir concentração, você deve se concentrar nele. Após usar a característica com sucesso, o alvo original faz uma salvaguarda de Carisma; em falha, ele deixa de se beneficiar do efeito que a ativou. Você pode usar esta característica três vezes por Descanso Longo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CONJURAÇÃO POTENTE",
        "level": 8,
        "page": 91,
        "text": "Você adiciona seu modificador de Sabedoria ao dano causado por qualquer truque de clérigo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DISSOLUÇÃO DA INTENÇÃO",
        "level": 17,
        "page": 91,
        "text": "Como ação bônus, você absorve a intenção maliciosa dirigida contra você e recebe PV temporários iguais a 5 × o número de ataques, magias e efeitos hostis que o escolheram como alvo desde o fim do seu último turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Ganância",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 91,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Santuário; Escudo da Fé"
          },
          {
            "level": "3º",
            "spells": "Imobilizar Pessoa; Marca de Corte"
          },
          {
            "level": "5º",
            "spells": "Piscar; Caminho para a Vitória"
          },
          {
            "level": "7º",
            "spells": "Invisibilidade Maior; Esfera Resiliente"
          },
          {
            "level": "9º",
            "spells": "Inverbalismo; Valsa de Cadáveres"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-cleric-love-domain",
    "classId": "cleric",
    "name": "Domínio do Amor",
    "originalName": "Love Domain",
    "aliases": [
      "Love Domain"
    ],
    "desc": "Um clérigo ligado aos poderes do amor, do afeto e da amizade.",
    "sourcePage": 91,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "91–92",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FORÇA DO AFETO",
        "level": 1,
        "page": 91,
        "text": "Seu domínio transforma amor e determinação em força. Você pode usar Carisma no lugar de Força ou Destreza nas jogadas de ataque e dano com armas e pode usar Carisma como seu atributo de conjuração.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PROFICIÊNCIAS DO AMOR",
        "level": 1,
        "page": 91,
        "text": "Você ganha proficiência em Intuição e Persuasão e é imune às condições enfeitiçado e enfurecido.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CANALIZAR DIVINDADE: OS FIOS NOS UNEM",
        "level": 2,
        "page": 92,
        "text": "Como ação, use Canalizar Divindade para conceder um benefício protetor por 1 minuto a um número de criaturas à sua escolha a até 9 m igual ao seu bônus de proficiência. Sempre que uma delas sofrer dano, uma das opções ocorre:\n\n• Outro alvo deste benefício, ou você, que possa vê-la usa a reação para conceder a ela PV temporários iguais ao seu nível de clérigo.\n• Você encerra o benefício naquela criatura para reduzir o dano sofrido a 0.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DEFESA DOURADA",
        "level": 6,
        "page": 92,
        "text": "Quando uma criatura a até 9 m for alvo de um ataque ou efeito, pode usar sua reação para projetar magicamente sobre ela suas próprias defesas e bênçãos apenas contra esse efeito. Ela recebe os bônus de CA concedidos por seu escudo e pelos bônus de aprimoramento de seu equipamento; suas resistências e imunidades; e os efeitos de magias, efeitos mágicos e itens mágicos que estejam afetando você, exceto os que exigem ações. Todos esses benefícios terminam após a resolução do efeito que ativou a característica ou no fim do turno atual, o que ocorrer primeiro.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DINÂMICA EMOTIVA",
        "level": 8,
        "page": 92,
        "text": "Quando atinge uma criatura com ataque de arma ou magia enquanto ela estiver a até 3 m de um de seus aliados, o ataque causa um dado de dano da arma adicional como dano radiante. Se o alvo estiver enfeitiçado por você ou por um desses aliados, o ataque também tem vantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PAIXÃO DOS DEUSES",
        "level": 17,
        "page": 92,
        "text": "Como ação, manifeste a natureza de seu domínio e assuma por 1 minuto uma forma sedutora e tempestuosa. Pode fazê-lo uma vez por Descanso Longo; estes efeitos não podem ser projetados por Defesa Dourada.\n\nAURA DE COMPANHEIRISMO. Outras criaturas a até 3 m podem adicionar seu modificador de Carisma à própria CA.\n\nAFEIÇÃO MAIOR. Seu modificador de Carisma, mínimo +1, é adicionado ao dano de suas armas, à sua CA e às suas salvaguardas; se já fosse adicionado, pode ser somado novamente.\n\nPASSO DO AMOR. Uma vez em cada turno, como ação bônus, teleporte-se até 18 m para um espaço desocupado adjacente a um aliado e então faça um ataque com arma com vantagem. Se desejar, pode imediatamente voltar ao espaço de onde saiu.\n\nCORPO SANTIFICADO. Na primeira vez em cada turno que uma criatura atacar você, ela deve fazer uma salvaguarda de Sabedoria; em falha, deve escolher outro alvo ou perder a ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio do Amor",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 91,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Escudo da Fé; Estrelas da Afeição"
          },
          {
            "level": "3º",
            "spells": "Canção da Inspiração; Vínculo Protetor"
          },
          {
            "level": "5º",
            "spells": "Caminho para a Vitória; Equilíbrio de Vitalidade"
          },
          {
            "level": "7º",
            "spells": "Dominar Besta; Portal de Eros"
          },
          {
            "level": "9º",
            "spells": "Conceder Especialização; Restauração Maior"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-cleric-temper-cross",
    "classId": "cleric",
    "name": "Cruz da Temperança",
    "originalName": "Temper Cross",
    "aliases": [
      "Temper Cross"
    ],
    "desc": "Um mestre da lâmina que canaliza o poder de domínios ligados à temperança e à técnica.",
    "sourcePage": 93,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "93",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "LÂMINA DOS RITOS DE SELAMENTO",
        "level": 1,
        "page": 93,
        "text": "Como ação bônus, escolha uma arma corpo a corpo que esteja empunhando e uma magia que normalmente tenha como alvo uma criatura, espaço ou ponto e possua tempo de conjuração de 1 ação ou 1 ação bônus. Gaste o espaço, recursos e componentes da magia; por 1 minuto ela fica imbuída na arma. Cada vez que a arma acertar um alvo durante esse período, você pode liberar a magia como se a tivesse conjurado tendo como alvo a criatura, o espaço dela ou um ponto em um canto do espaço, conforme os requisitos da magia. Pode excluir a si mesmo dos efeitos. A CD da magia aumenta pelo bônus de aprimoramento da arma; se exigiria ataque mágico, esse ataque acerta automaticamente. Após ser liberada, a magia é gasta independentemente do resultado. Se não for usada em 1 minuto, é perdida.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TREINAMENTO DILIGENTE",
        "level": 1,
        "page": 93,
        "text": "Você ganha proficiência com armaduras pesadas e todas as armas marciais. Magias e itens cujos efeitos exijam um Santo da Espada, ou cuja sintonização seja restrita a ele, tratam seus níveis de clérigo como níveis de Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CANALIZAR DIVINDADE: TSUJIGIRI",
        "level": 2,
        "page": 93,
        "text": "Como ação, faça três ataques com uma arma corpo a corpo com a qual seja proficiente. Esses ataques contam como mágicos. Se pelo menos um deles acertar, os três são tratados como acertos mesmo se suas jogadas falhariam. Se as três jogadas de ataque acertariam por seus próprios resultados, o último acerto torna-se automaticamente um acerto crítico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ATAQUE DE FOCO EXTRA",
        "level": 6,
        "page": 93,
        "text": "Quando realiza a ação Atacar, pode fazer dois ataques em vez de um, ou fazer um ataque e conjurar uma magia com tempo de conjuração de 1 ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REPOSIÇÃO FOCAL",
        "level": 6,
        "page": 93,
        "text": "Uma vez por Descanso Longo, ao completar um Descanso Curto, pode recuperar PV iguais a duas vezes seu nível de clérigo e recuperar todos os seus espaços de magia de 1º nível.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RITOS ESTENDIDOS",
        "level": 8,
        "page": 93,
        "text": "Uma magia imbuída numa arma por Lâmina dos Ritos de Selamento pode permanecer nela por até 1 hora ou até você completar um Descanso. Além disso, quando a magia exigir uma CD de salvaguarda, você pode substituir sua CD normal pelo resultado do d20 do ataque, se ele for maior, adicionando o bônus de aprimoramento da arma depois.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ATAQUE DE FOCO SUPREMO",
        "level": 17,
        "page": 93,
        "text": "Quando realiza a ação Atacar, pode fazer três ataques em vez de um, ou fazer dois ataques e conjurar uma magia com tempo de conjuração de 1 ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Cruz da Temperança",
        "description": "Magias de domínio sempre preparadas. No PDF, “Hastened Quiver” aparece grafado como “Heastened quiver” nesta tabela; a entrada abaixo usa o nome já catalogado no Grimório.",
        "page": 93,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Resposta Instintiva; Palavra de Proteção"
          },
          {
            "level": "3º",
            "spells": "Golpe da Harpia; Imobilizar Pessoa"
          },
          {
            "level": "5º",
            "spells": "Alvo Mortal; Caminho para a Vitória"
          },
          {
            "level": "7º",
            "spells": "Movimentação Livre; Chuva de Flechas de Tamamo"
          },
          {
            "level": "9º",
            "spells": "Aljava Acelerada; Palavra de Poder: Resposta"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-dragoneer-darkstriker",
    "classId": "dragoneer",
    "name": "Golpeador Sombrio",
    "originalName": "Darkstriker",
    "aliases": [
      "Darkstriker"
    ],
    "desc": "Um Cavaleiro Dracônico de alma dracônica corrompida que desfere explosões de energia violenta.",
    "sourcePage": 94,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "94",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CRÍTICO APRIMORADO (ENCARNADO)",
        "level": 1,
        "page": 94,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20. Ao obter um crítico, pode fazer com que todo o dano da arma seja do tipo de dano de sua Encarnação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "OLHO DO DRACO",
        "level": 1,
        "page": 94,
        "text": "Quando ataca com uma arma à distância ou de arremesso com a qual seja proficiente, você pode tratar o alcance longo da arma como seu alcance normal.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CASCA DE DRAGÃO",
        "level": 3,
        "page": 94,
        "text": "Quando atingir um alvo com ataque de arma e causar dano de arma, pode usar sua ação bônus para criar uma explosão de energia que afeta cada criatura à sua escolha a até 3 m do alvo, incluindo ele. Cada alvo realiza a salvaguarda associada ao tipo de dano de sua Encarnação contra sua CD de magia; em falha, sofre o mesmo dano causado pelo ataque, mas convertido no dano de sua Encarnação. Usos por Descanso iguais à metade do seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RAJADA PUNITIVA",
        "level": 7,
        "page": 94,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Uma vez por turno, quando obtiver um acerto crítico por resultado natural no d20 de uma jogada de ataque, causa dano adicional do tipo de sua Encarnação igual a 1d8 × o nível do maior espaço de magia de Cavaleiro Dracônico a que tenha acesso, incluindo espaços já gastos."
      },
      {
        "title": "SIMPATIA VÃ",
        "level": 13,
        "page": 94,
        "text": "Escolha um segundo Tipo de Encarnação. Você o recebe como uma mutação e ganha sua característica, tipo de movimento, tipo de dano de Encarnação e salvaguarda, como ocorre com sua primeira Encarnação. Sempre que um tipo de dano de Encarnação for exigido, escolha qual usa e aplique a salvaguarda correspondente, e vice-versa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR (ENCARNADO)",
        "level": 17,
        "page": 94,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-dragoneer-fortune-veil",
    "classId": "dragoneer",
    "name": "Véu da Fortuna",
    "originalName": "Fortune Veil",
    "aliases": [
      "Fortune Veil"
    ],
    "desc": "Um duelista que dobra as correntes do destino e do acaso em benefício próprio.",
    "sourcePage": 95,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "95",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 1,
        "page": 95,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPES DO CORAÇÃO DE WYRM",
        "level": 1,
        "page": 95,
        "text": "Você pode usar Sabedoria no lugar de Força ou Destreza nas jogadas de ataque e dano com armas. Também pode tratar ataques com arma como ataques mágicos produzidos por uma magia para fins de características e efeitos secundários.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MARÉS MUTÁVEIS",
        "level": 3,
        "page": 95,
        "text": "Sempre que rolar iniciativa, role um número de d20 igual ao seu bônus de proficiência e registre os resultados como Mudanças de Maré. Durante aquele combate, ao rolar um d20, pode gastar uma Mudança de Maré para substituir o resultado pelo valor registrado; a Mudança é então perdida. Pode decidir antes ou depois de rolar, mas não após o Mestre declarar sucesso ou falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "EXPLOSÃO DA MARÉ",
        "level": 7,
        "page": 95,
        "text": "Ao gastar uma Mudança de Maré para alterar um d20, você pode fazer com que cada resultado de d20 que rolar até o fim daquele turno se torne o mesmo valor. Para cada rolagem subsequente, pode decidir após ver seu resultado normal. Além disso, no início de cada um de seus turnos, pode escolher uma Mudança de Maré restante e rerrolá-la, devendo manter o novo resultado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR",
        "level": 13,
        "page": 95,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MUDANÇA CRÍTICA",
        "level": 17,
        "page": 95,
        "text": "Quando obtiver um acerto crítico em um ataque, role dois d20 e registre o maior resultado como uma nova Mudança de Maré, que desaparece no fim do combate.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-dragoneer-phasescale-knight",
    "classId": "dragoneer",
    "name": "Cavaleiro da Escama Fásica",
    "originalName": "Phasescale Knight",
    "aliases": [
      "Phasescale Knight"
    ],
    "desc": "Um duelista de alma dracônica que se move e ataca com velocidade e domínio ilusório.",
    "sourcePage": 96,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "96",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "REPERTÓRIO DA LÂMINA DRACÔNICA",
        "level": 1,
        "page": 96,
        "text": "Magias do grupo Zanjen contam como estando na lista de Cavaleiro Dracônico para você, permitindo aprendê-las, prepará-las e conjurá-las. Ao conjurar uma magia Zanjen, pode receber seus efeitos de Bônus de Santo da Espada tratando seus níveis de Cavaleiro Dracônico como níveis de Santo da Espada. Quando uma magia Zanjen causaria dano contundente, perfurante ou cortante, pode substituir esses tipos pelo dano de sua Encarnação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 1,
        "page": 96,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DESAFIO FÁSICO",
        "level": 3,
        "page": 96,
        "text": "Quando sofre dano de um ataque com arma, pode usar sua reação para transformar brevemente o corpo em uma duplicata ilusória e evitar completamente o ataque, fazendo-o errar. Em seguida, torna-se semi-etéreo até o fim do turno; ataques subsequentes contra você nesse período têm desvantagem. Usos por Descanso iguais ao nível do maior espaço de magia de Cavaleiro Dracônico que possua.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NÉVOA DE STACCATO",
        "level": 7,
        "page": 96,
        "text": "Quando estiver morrendo, paralisado, atordoado ou incapacitado por algo que não seja inconsciência, no início de cada um de seus turnos pode projetar uma réplica semi-etérea em um espaço a até 9 m. A réplica pode mover-se e realizar as ações que você normalmente poderia, inclusive gastar seus recursos, espaços de magia e cargas de itens, sem sofrer as condições ou efeitos que afetam você, exceto os originados por itens mágicos em sua posse. Ela usa seu deslocamento base, características, armas, salvaguardas, testes de atributo e CA; não possui suas resistências ou imunidades a dano e é imune a condições. Ela desaparece naquele turno se sofrer dano ou depois de mover-se ou realizar qualquer ação, e sempre desaparece no fim de seu turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AUTOPROJEÇÃO",
        "level": 13,
        "page": 96,
        "text": "Quando usar sua característica Ação Encadeada para fazer um ou mais ataques com arma, pode teleportar-se para um espaço desocupado a até 9 m antes de realizá-los.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORPO DE NÉVOA AFORTUNADA",
        "level": 17,
        "page": 96,
        "text": "Sempre que um ataque ou efeito fosse reduzir você a 0 PV, matá-lo instantaneamente ou causar dano enquanto estiver a 0 PV, role 1d100. Se o resultado for igual ou inferior a duas vezes seu nível de Cavaleiro Dracônico, o ataque ou efeito não tem efeito sobre você, pois atinge uma ilusão enevoada em seu lugar.\n\nTIPOS DE ENCARNAÇÃO ADICIONAIS DE DRAGONEER. Esta subclasse também apresenta duas opções de Encarnação. DRAGÃO DE SANGUE: energia encarnada necrótica (salvaguarda de Destreza), movimento de escalada; quando uma criatura a até 3 m o acerta com ataque corpo a corpo, pode usar reação para forçá-la a uma salvaguarda de Destreza, sofrendo 1d10 + metade do seu nível de Cavaleiro Dracônico (arredondado para cima) de dano de fogo ou necrótico, à sua escolha, em falha. SERPENTE DO LAGO: energia encarnada ácida (salvaguarda de Constituição), movimento de natação; você respira ar e água e pode usar Disparada como ação bônus enquanto estiver totalmente submerso em líquido.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-druid-circle-of-ancestors",
    "classId": "druid",
    "name": "Círculo dos Ancestrais",
    "originalName": "Circle of Ancestors",
    "aliases": [
      "Circle of Ancestors"
    ],
    "desc": "Um druida espiritualmente receptivo que extrai conhecimento e talento de seus antepassados.",
    "sourcePage": 97,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "97",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "COMUNHÃO ANCESTRAL",
        "level": 2,
        "page": 97,
        "text": "Ao completar um Descanso Longo, escolha um número de proficiências em perícias, ferramentas ou armas igual ao seu bônus de proficiência. Você recebe essas proficiências até completar outro Descanso Longo e pode escolher proficiências que já possua. Armas e perícias escolhidas dessa forma usam Sabedoria para determinar seus modificadores de ataque, dano e testes enquanto permanecerem selecionadas, representando a orientação dos espíritos ancestrais.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DA ESPADA E DO SANTUÁRIO",
        "level": 2,
        "page": 97,
        "text": "Magias do grupo Zanjen contam como magias da lista de druida para você, permitindo prepará-las, lê-las e conjurá-las.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FORMA ANCESTRAL",
        "level": 6,
        "page": 97,
        "text": "Como ação bônus, gaste um uso de Forma Selvagem para envolver-se num manto espiritual protetor e incorporar um de seus ancestrais. A forma dura 1 minuto ou até ser dispensada como ação bônus, e pode ser assumida mesmo se você já estiver usando Forma Selvagem. Uma vez por Descanso. Enquanto durar:\n\n• Some seu bônus de proficiência à CA e às salvaguardas.\n• Seus ataques com arma usam Sabedoria nas jogadas de ataque e dano.\n• Você tem resistência a todo dano contundente, perfurante e cortante.\n• Recebe PV temporários iguais a 1d10 × metade do seu nível de druida. Quando esses PV forem reduzidos a 0, você é imune ao dano restante daquela instância de ataque ou efeito.\n• Cada instância de dano que você sofrer é reduzida pela metade do seu nível de druida.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ORIENTAÇÃO DESPERTA",
        "level": 10,
        "page": 97,
        "text": "Ao terminar um Descanso Longo, pode deixar sem escolha até metade, arredondada para baixo, das proficiências concedidas por Comunhão Ancestral. Antes do próximo Descanso Longo, pode usar uma ação bônus a qualquer momento para preencher uma dessas escolhas com uma proficiência naquele instante.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GUARDIÕES DA LINHAGEM",
        "level": 14,
        "page": 97,
        "text": "A proteção de seus muitos ancestrais soma suas experiências às suas. Você se torna proficiente em todas as salvaguardas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-druid-circle-of-the-caregiver",
    "classId": "druid",
    "name": "Círculo do Cuidador",
    "originalName": "Circle of the Caregiver",
    "aliases": [
      "Circle of the Caregiver"
    ],
    "desc": "Um naturalista afetuoso que protege e cura os demais.",
    "sourcePage": 97,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "97–98",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "PATA CUIDADORA",
        "level": 2,
        "page": 97,
        "text": "Quando conjura uma magia de druida que restaura PV a outra criatura e tem apenas um alvo, como curar ferimentos ou palavra curativa, pode escolher um dos efeitos abaixo, desde que a magia não seja de nível superior ao seu bônus de proficiência:\n\n• A magia pode escolher um alvo adicional a até 9 m, mesmo se normalmente tiver alcance de toque.\n• A magia rola dados adicionais de cura em quantidade igual à metade do seu bônus de proficiência.\n\nEnquanto estiver em Forma Selvagem, pode ignorar os componentes verbais e somáticos de magias que restauram PV a outros.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CALOR PRIMAL",
        "level": 6,
        "page": 97,
        "text": "Quando conjura uma magia de druida usando espaço de magia, libera uma onda protetora. Cada criatura à sua escolha a até 3 m recebe PV temporários iguais a duas vezes o nível em que a magia foi conjurada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DOADOR DE FORMA",
        "level": 10,
        "page": 97,
        "text": "Quando uma criatura a até 9 m for reduzida a 0 PV, use sua reação para suspender sua queda e transformá-la em qualquer forma que você poderia assumir com Forma Selvagem, usando as mesmas regras. A criatura não assume a condição morrendo enquanto transformada, mas ainda realiza salvaguardas contra a morte: falhas são ignoradas e sucessos contam. A nova forma tem apenas 1 PV e é imune a todo dano; sempre que sofreria dano, você faz um teste de concentração com CD igual ao dano que teria sofrido, e em falha a transformação termina. Regeneração e outros efeitos que restaurariam PV no turno da criatura não funcionam nessa forma; cura recebida por outras fontes é aplicada ao total de PV da forma original. Usos por Descanso Longo iguais ao seu bônus de proficiência, recuperando um uso ao completar um Descanso Curto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "UNIÃO VERDADEIRA",
        "level": 14,
        "page": 98,
        "text": "Uma vez por Descanso Longo, você pode produzir os efeitos de palavra de poder: reforçar sem gastar espaço de magia. Criaturas que participarem de sua reserva coletiva de PV temporários também não podem ser enfeitiçadas ou paralisadas e recebem +1 em suas salvaguardas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-druid-circle-of-social-currency",
    "classId": "druid",
    "name": "Círculo da Moeda Social",
    "originalName": "Circle of Social Currency",
    "aliases": [
      "Circle of Social Currency"
    ],
    "desc": "Um druida que trata ruas e cidades modernas como sua floresta e se adapta à vida urbana.",
    "sourcePage": 98,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "98–99",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MAGIAS DO CÍRCULO",
        "level": 2,
        "page": 98,
        "text": "Sua ligação com a terra e com as comunidades concede as magias abaixo. Elas contam como magias de druida para você, estão sempre preparadas e não contam no limite normal de magias preparadas.\n\n3º nível: acalmar emoções, sugestão.\n5º nível: prado livre, deter atacante.\n7º nível: porta dimensional, localizar criatura.\n9º nível: despertar, passagem invisível.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FERRAMENTAS DE CONEXÃO",
        "level": 2,
        "page": 98,
        "text": "Você ganha proficiência em Persuasão e Enganação e pode usar Sabedoria, em vez de Carisma, para determinar seus bônus nessas perícias. Enquanto estiver em qualquer agrupamento de pessoas que possa ser considerado uma comunidade, você compreende e fala os idiomas comuns utilizados por aquela comunidade.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FORMA SELVAGEM IMPRESSA",
        "level": 6,
        "page": 98,
        "text": "Depois de observar por ao menos 1 minuto uma criatura humanoide que não seja mais de uma categoria de tamanho maior ou menor que você e de ouvi-la falar, você memoriza seus maneirismos, voz e hábitos. Pode gastar um uso de Forma Selvagem para transformar-se por 1 hora numa aproximação física dessa criatura, ou voltar ao normal como ação. Você mantém suas estatísticas, exceto pelas alterações abaixo, que não seguem as regras normais de Forma Selvagem salvo quando indicado:\n\n• Ganha os sentidos do alvo e mantém os seus; sentidos iguais se sobrepõem.\n• Seu tamanho e tipo(s) de criatura tornam-se os do alvo.\n• Força, Destreza e Constituição são substituídas pelos valores do alvo. Se a Constituição dele for maior, ganha 5 PV temporários por ponto de diferença, mantidos até a transformação terminar ou serem perdidos.\n• Se o bônus de proficiência do alvo for maior, usa o dele.\n• Não pode usar Ações de Covil nem Ações Lendárias do alvo.\n• Pode falar e compreender seus próprios idiomas e os do alvo, imitando quase perfeitamente sua fala e maneirismos.\n• Pode conservar equipamento que ainda consiga usar; o restante cai ao chão ou se funde a você conforme Forma Selvagem.\n\nSe o ND ou nível do alvo for maior que seu nível, faça um teste de atributo de conjuração com CD 10 + o ND/nível dele. Em falha, a transformação não ocorre e o uso de Forma Selvagem é perdido.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GUARDIÃO DE DETRITOS",
        "level": 10,
        "page": 99,
        "text": "Você sempre tem animar objetos preparado como magia de druida, sem contar em suas magias preparadas. Uma vez por Descanso Longo, pode conjurá-la sem espaço nem componentes.\n\nCONJURAÇÃO SUPERIOR SUTIL. Esse uso gratuito é tratado como conjurado usando o maior espaço de magia de druida a que você tenha acesso, e as criaturas resultantes contam como feéricas em vez de construtos. Independentemente do tamanho, seus objetos animados têm CA igual ao seu atributo de conjuração se essa CA seria maior, e seus ataques usam seu modificador de ataque mágico se ele for maior.\n\nOBJETOS COMBINADOS. Ao conjurar, pode fundir objetos menores: cada dois objetos combinados tornam-se um objeto uma categoria de tamanho maior; amalgamações podem ser combinadas novamente. Eles assumem a forma de criaturas naturais feitas de objetos e detritos e surgem centrados no espaço de um dos componentes.\n\nHABITAR OBJETO. Se criar um objeto combinado maior que você e estiver adjacente a ele, pode usar ação bônus e gastar 1,5 m de movimento para abrigar-se dentro dele. Você recebe cobertura total contra tudo fora dele e enxerga para fora com seus sentidos. Enquanto estiver dentro, não pode se mover e pode usar sua ação para fazê-lo realizar dois ataques contra um alvo escolhido. Também pode conjurar magias de toque através dele.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MISTURAR-SE À MULTIDÃO",
        "level": 14,
        "page": 99,
        "text": "Se houver ao menos três outras criaturas não hostis a até 3 m — bestas, feéricos, humanoides ou criaturas que compartilhem um tipo de criatura com você —, você tem vantagem em jogadas de ataque e salvaguardas, pois se mistura à multidão e torna suas ações difíceis de identificar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Círculo da Moeda Social",
        "description": "Magias do círculo sempre preparadas, sem contar no limite normal de magias preparadas.",
        "page": 98,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "level": "3º",
            "spells": "Acalmar Emoções; Sugestão"
          },
          {
            "level": "5º",
            "spells": "Prado Livre; Conter Atacante"
          },
          {
            "level": "7º",
            "spells": "Porta Dimensional; Localizar Criatura"
          },
          {
            "level": "9º",
            "spells": "Despertar; Criar Passagem"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-favored-soul-retia-burden-of-gotham",
    "classId": "favored-soul-retia",
    "name": "Fardo de Gotham",
    "originalName": "Burden of Gotham",
    "aliases": [
      "Burden of Gotham"
    ],
    "desc": "Um herdeiro que empunha o poder de Gotham, deus da não-morte.",
    "sourcePage": 99,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "99–100",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MESTRE DA NECROMANCIA",
        "level": 1,
        "page": 99,
        "text": "Todas as magias de Necromancia e as magias do grupo Moralismos Desvinculados contam como estando na lista da Alma Favorecida para você, permitindo aprendê-las e conjurá-las. Você recebe um espaço de Magia de Pacto adicional do mesmo nível dos demais espaços da tabela da Alma Favorecida e que funciona da mesma forma, mas esse espaço especial só pode ser usado para conjurar magias da escola de Necromancia.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORPO SOBRENATURAL",
        "level": 1,
        "page": 99,
        "text": "Você ganha proficiência em salvaguardas de Constituição e resistência a dano necrótico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FORTITUDE MORTÍFERA",
        "level": 6,
        "page": 100,
        "text": "Quando dano reduzir você a 0 PV, faça uma salvaguarda de Constituição com CD 5 + o dano sofrido, a menos que o dano seja radiante ou resulte de um acerto crítico. Em sucesso, fica com 1 PV em vez disso. Cada vez que evitar cair a 0 PV dessa forma, a CD aumenta em 2 até você completar um Descanso Curto ou Longo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "INFLIÇÃO VORAZ",
        "level": 10,
        "page": 100,
        "text": "No lugar de um ataque com arma, pode gastar um uso de Purificação para conjurar infligir ferimentos numa criatura ao alcance, sem gastar espaço, como se usasse um de seus espaços de Magia de Pacto. Não precisa conhecer nem preparar a magia. Em um acerto, escolha recuperar PV iguais ao dano causado ou receber a mesma quantidade como PV temporários. Se errar, o uso de Purificação é recuperado no fim do turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ANIMAR SERVOS",
        "level": 13,
        "page": 100,
        "text": "Uma vez por Descanso Longo, conjure 1d4 + 2 Servos em Decomposição, cada um em um espaço desocupado a até 9 m. Eles rolam iniciativa em conjunto e compartilham uma única reserva de PV igual a 15 × o número de servos; se um morrer por dano, todos morrem, e não podem recuperar PV. Usam seu bônus de proficiência nas salvaguardas, sua CD de magia para Visagem de Pesadelo e seu bônus de ataque mágico nos ataques de Garra. Eles obedecem a seus comandos. Se um iniciar o turno a mais de 9 m de você, deve tentar aproximar-se; se não conseguir, usa Esquivar após fazer o possível. Sem ordens, aproximam-se e se defendem, inclusive atacando hostis. Todos morrem 10 minutos após serem invocados.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "versionLabel": "Versão Blade, Bone, & Benefit",
    "sourceNote": "Versão preservada separadamente da entrada de Lyre's Guide to Retia porque esta publicação altera/adiciona elementos mecânicos.",
    "references": [
      {
        "title": "FARDO DIVINO",
        "page": 99,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Arma favorecida: foice grande.\n\nCOMPULSÃO DE GOTHAM. A influência de Gotham exige respeito pela perpetuidade e pela paciência, concedendo-lhe aspectos semelhantes aos de um morto-vivo. Qualquer magia ou efeito que interaja de forma diferente com uma criatura morta-viva — incluindo efeitos que a detectam e magias que podem ou não tê-la como alvo — trata você como um morto-vivo e ignora seus demais tipos de criatura."
      }
    ]
  },
  {
    "id": "bbb-favored-soul-retia-burden-of-hightrankul",
    "classId": "favored-soul-retia",
    "name": "Fardo de Hightrankul",
    "originalName": "Burden of Hightrankul",
    "aliases": [
      "Burden of Hightrankul"
    ],
    "desc": "Uma alma vinculada aos poderes do deus da extorsão e do sigilo.",
    "sourcePage": 101,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "101–102",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MÃOS DOS VINCULADOS",
        "level": 1,
        "page": 101,
        "text": "Você invoca doze braços fantasmagóricos que flutuam ao seu redor, representando almas vinculadas à fonte de seu poder. Seu alcance, inclusive com armas corpo a corpo e magias de toque, aumenta em 1,5 m × seu bônus de proficiência. Seus ataques desarmados podem usar Carisma para ataque e dano e causam 1d8 de dano psíquico, salvo se outra característica elevar o dado. Você pode tocar e manipular até doze objetos de mão simultaneamente. Para agarrar criaturas acima de seu limite normal de tamanho, são necessárias duas mãos para uma categoria acima, dobrando o número de mãos para cada categoria adicional; pode manter esses agarrões sem usar as mãos ou o corpo físicos enquanto o alvo permanecer ao alcance dos braços.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARCANISMO DE SELAMENTO",
        "level": 1,
        "page": 101,
        "text": "Magias do grupo Palavras Seladas contam como estando na lista da Alma Favorecida para você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "COMANDO SILENCIOSO",
        "level": 6,
        "page": 101,
        "text": "Como ação bônus, pode produzir os efeitos de comando sem espaço nem componentes, como se fosse conjurado em um nível igual à metade de seu nível de Alma Favorecida. O efeito é sobrenatural, não mágico, e não conta como magia. Você não precisa pronunciar a ordem: basta pensá-la e os alvos recebem silenciosamente sua intenção. Usos por Descanso Longo iguais ao seu bônus de proficiência; recupera um uso ao completar um Descanso Curto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TUDO EXPOSTO",
        "level": 10,
        "page": 102,
        "text": "Como ação, gaste um uso de Purificação para expor mistérios e segredos arcanos a até 18 m. Você aprende a natureza de cada efeito mágico na área conforme descrito pelo Mestre, incluindo efeitos atuais sobre estatísticas, bônus, penalidades e condições. Pode encerrar imediatamente quaisquer desses efeitos com duração de 1 hora ou menos; os de duração maior são suspensos por 10 minutos. Detecta imediatamente a localização de todas as criaturas na área, mesmo ocultas ou invisíveis, e mantém essa percepção por 10 minutos. Por fim, pode escolher qualquer número de criaturas na área e encerrar nelas todos os efeitos que causem enfeitiçado, enfurecido ou amedrontado; quando aplicável, elas contam como tendo obtido sucesso na salvaguarda para encerrar o efeito.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ESPOLIAÇÃO DA SANIDADE",
        "level": 13,
        "page": 102,
        "text": "Como ação, manifeste os maiores medos das criaturas à sua escolha num cone de 18 m. Cada alvo faz salvaguarda de Inteligência; em falha, fica amedrontado por você por 1 minuto. No fim de cada turno, repete a salvaguarda: em falha, sofre dano psíquico igual a 1d12 × seu bônus de proficiência; em sucesso, sofre metade e o efeito termina. Se você souber previamente algo que possa ser considerado o maior medo ou insegurança do alvo, ele tem desvantagem nessas salvaguardas. Pode usar uma vez por Descanso; usos adicionais exigem um uso de Purificação cada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "FARDO DIVINO",
        "page": 101,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Arma favorecida: espada curta.\n\nCOMPULSÃO DE HIGHTRANKUL. Como acumulador de segredos e mestre da exploração, você não consegue deixar de tentar descobrir os assuntos alheios. Quando surgir uma oportunidade de obter informações sobre um indivíduo influente, companheiro, aliado ou ente querido, deve tentar obtê-las por roubo, engenharia social ou conversa. Se tentar evitar isso, faça uma salvaguarda de Carisma com CD 10 + metade de seu nível de Alma Favorecida. Em falha, fica atordoado por 1 minuto — de forma silenciosa e imóvel — ou até retomar sua linha de questionamento/tentativa de obter a informação. Ao fim de cada minuto, repita a salvaguarda até a oportunidade passar ou obter sucesso; após um sucesso, fica imune a esse efeito até o próximo Descanso."
      }
    ]
  },
  {
    "id": "bbb-favored-soul-retia-burden-of-lana",
    "classId": "favored-soul-retia",
    "name": "Fardo de Lana",
    "originalName": "Burden of Lana",
    "aliases": [
      "Burden of Lana"
    ],
    "desc": "Um guerreiro vinculado à sorte que carrega o poder da deusa Lana.",
    "sourcePage": 102,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "102–103",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "LEITURA EQUIVOCADA DA FINTA",
        "level": 1,
        "page": 102,
        "text": "Ao obter 20 natural em qualquer teste de atributo ou salvaguarda, você obtém sucesso independentemente da CD ou vence a disputa. Inversamente, 1 natural sempre falha. Se alguma característica ampliar seu intervalo de crítico em ataques, os mesmos resultados no d20 também contam como sucesso automático para esta característica. Para Levar o Destino Adiante, um sucesso assim conta como acerto crítico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MÃO DA FORTUNA",
        "level": 1,
        "page": 102,
        "text": "No início de cada turno, você, como jogador, pode deixar o destino do personagem à sorte. Role 2d6: o menor resultado é o dado de oscilação da fortuna e o maior é o modificador da fortuna. Até o início do próximo turno, o modificador da fortuna é aplicado a todas as suas jogadas de ataque, testes de atributo e salvaguardas. Se o dado de oscilação for ímpar, o modificador é uma penalidade; se for par, é um bônus. Se ambos forem pares, não importa qual dado é considerado cada um.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARCANISMO DE LANA",
        "level": 1,
        "page": 102,
        "text": "Magias do grupo Artes do Valor contam como estando na lista da Alma Favorecida para você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "EVASÃO",
        "level": 6,
        "page": 102,
        "text": "Quando realiza uma salvaguarda que normalmente reduziria o dano à metade, sofre nenhum dano em um sucesso e metade do dano em uma falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RITUAL DE EQUILÍBRIO",
        "level": 6,
        "page": 103,
        "text": "Ao rolar os dois d6 de Mão da Fortuna, pode escolher rerrolar o maior resultado e deve manter o novo resultado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "LEVAR O DESTINO ADIANTE",
        "level": 10,
        "page": 103,
        "text": "Cada vez que fizer uma jogada de ataque contra uma criatura hostil e errar com um resultado 10 ou menor no d20, seu intervalo de crítico aumenta em 1. Ele volta ao normal quando você obtiver um acerto crítico ou passar mais de 1 minuto sem realizar ataques contra criaturas hostis.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CONVECÇÃO FATÍDICA",
        "level": 10,
        "page": 103,
        "text": "Como ação, gaste um uso de Purificação e escolha afetar todos os hostis ou todos os aliados a até 9 m com uma onda de destino. Role os 2d6 de Mão da Fortuna e aplique seu modificador, seja bônus ou penalidade, a todos os alvos por 1 minuto, mas não imediatamente a si mesmo. No início de cada turno, pode usar Mão da Fortuna normalmente; se o fizer, o modificador de todos os alvos muda para o novo resultado. Enquanto o efeito durar, você não pode usar Mão da Fortuna sem aplicar o resultado a todos os alvos, embora em você o efeito continue terminando no início do turno seguinte.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DUX MACHINA",
        "level": 13,
        "page": 103,
        "text": "Quando obtiver 5 ou menos em um d20, pode rerrolá-lo e deve manter o novo resultado. Se fizer isso, o novo resultado não pode produzir um acerto crítico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "FARDO DIVINO",
        "page": 102,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Armas favorecidas: duas espadas curtas.\n\nCOMPULSÃO DE LANA. A influência de Lana manifesta-se como uma inclinação a jogos de sorte e fortuna. Quando quiser recusar uma aposta ou jogo competitivo, baseado em perícia ou acaso, deve obter sucesso em uma salvaguarda de Carisma com CD 10 + metade de seu nível de Alma Favorecida. Em sucesso, pode recusá-lo por 1 hora."
      }
    ]
  },
  {
    "id": "bbb-favored-soul-retia-burden-of-meirlach",
    "classId": "favored-soul-retia",
    "name": "Fardo de Meirlach",
    "originalName": "Burden of Meirlach",
    "aliases": [
      "Burden of Meirlach"
    ],
    "desc": "Um herdeiro do poder de Meirlach Musashi, deus dos espadachins.",
    "sourcePage": 103,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "103",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ARMAMENTO NEOLÂMINA",
        "level": 1,
        "page": 103,
        "text": "Você recebe imediatamente a opção Armamento de Essência da característica de 2º nível; ao chegar ao 2º nível, ela conta como sua escolha. Seu Armamento de Essência pode assumir simultaneamente a forma de uma espada longa e uma espada curta, invocadas juntas, e ambas recebem todos os benefícios normais de um único Armamento. Sempre que fizer um ataque com a espada longa, pode fazer um ataque com a espada curta como parte da mesma ação. Seus Armamentos de Essência obtêm acerto crítico com 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PRINCÍPIOS DA ESPADA",
        "level": 1,
        "page": 103,
        "text": "Magias do grupo Zanjen contam como estando na lista da Alma Favorecida, permitindo prepará-las e conjurá-las. Se uma dessas magias possuir um Bônus de Santo da Espada, você recebe esse bônus como se fosse um Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DEFESA SUPREMA",
        "level": 6,
        "page": 103,
        "text": "Enquanto estiver empunhando uma arma com a qual seja proficiente, você tem resistência a todo dano contundente, perfurante e cortante.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ILUMINAÇÃO DOS DRAGÕES GÊMEOS",
        "level": 10,
        "page": 103,
        "text": "Em seu turno, gaste um uso de Purificação para realizar uma ação Atacar adicional, separada de sua ação normal. Cada ataque dessa ação causa um dado de dano da arma adicional e ignora todas as Resistências a Dano e Limiares de Dano. Depois que os ataques forem resolvidos, você recebe PV temporários iguais ao dano total causado por eles.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NEOCRÍTICO SUPREMO",
        "level": 13,
        "page": 103,
        "text": "Você obtém acerto crítico com seu Armamento de Essência em resultados 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "FARDO DIVINO",
        "page": 103,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Armas favorecidas: espada longa e espada curta, usadas em conjunto.\n\nCOMPULSÃO DE MEIRLACH. O impulso de Meirlach de buscar compreensão através do combate torna difícil recusar oportunidades de enfrentar oponentes mais fortes. Quando houver uma escolha entre batalhar contra um adversário poderoso ou seguir meios mais pacíficos, faça uma salvaguarda de Sabedoria com CD 10 + metade de seu nível de Alma Favorecida. Em falha, você tem desvantagem em todas as rolagens relacionadas à situação que não envolvam combate."
      }
    ]
  },
  {
    "id": "bbb-favored-soul-retia-burden-of-scorn",
    "classId": "favored-soul-retia",
    "name": "Fardo de Scorn",
    "originalName": "Burden of Scorn",
    "aliases": [
      "Burden of Scorn"
    ],
    "desc": "Um herdeiro destrutivo da ferocidade de Scorn.",
    "sourcePage": 104,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "104",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "GARRAS BESTIAIS",
        "level": 1,
        "page": 104,
        "text": "Você recebe imediatamente a opção Armamento de Essência de sua característica de 2º nível; ao alcançá-lo, essa opção conta como sua escolha. O armamento pode ser a arma favorecida de Scorn ou uma transformação bestial menor que torna seus membros garras horrendas. As garras contam como sua arma favorecida e como arma marcial para características e efeitos, podem usar Força ou seu atributo de conjuração nas jogadas de ataque e dano e causam 1d8 de dano cortante ou necrótico, à sua escolha. Você também pode “arremessá-las” como se tivessem arremesso 6/18 m, rasgando o ar com energia necrótica. Sempre que realizar um ataque com essa arma, pode usar sua ação bônus para fazer outro ataque com ela.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO OBSCENO",
        "level": 1,
        "page": 104,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20. Quando obtiver um crítico usando uma arma, recupera PV iguais à metade do dano causado, arredondado para baixo. Esses benefícios não se aplicam contra mortos-vivos, construtos ou alvos sem sangue.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARCANISMO DE SCORN",
        "level": 1,
        "page": 104,
        "text": "Magias do grupo Valores Sangrentos contam como estando na lista da Alma Favorecida para você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RETORNO DA MORTE",
        "level": 6,
        "page": 104,
        "text": "Em salvaguardas contra a morte, você recupera PV com resultados 19 ou 20 no d20, em vez de apenas 20. Quando isso ocorrer, recupera PV iguais a um Dado de Vida de Alma Favorecida + seu modificador de Constituição.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FANTASIA SANGRENTA",
        "level": 10,
        "page": 104,
        "text": "Como ação bônus, gaste um uso de Purificação para desaparecer num clarão vermelho-sangue e teleportar-se para um espaço adjacente a uma criatura que veja a até 9 m. Em seguida, imediatamente realiza uma ação Atacar contra ela sem gastar ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RECONSTITUIÇÃO IMPLACÁVEL",
        "level": 13,
        "page": 104,
        "text": "No início de cada turno, se estiver com 1 ou mais PV, mas abaixo de metade de seu máximo, recupera PV iguais à metade de seu nível de Alma Favorecida, arredondado para baixo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "versionLabel": "Versão Blade, Bone, & Benefit",
    "sourceNote": "Versão preservada separadamente da entrada de Lyre's Guide to Retia porque esta publicação altera/adiciona elementos mecânicos.",
    "references": [
      {
        "title": "FARDO DIVINO",
        "page": 104,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Arma favorecida: malho.\n\nCOMPULSÃO DE SCORN. Os favorecidos de Scorn podem sofrer uma compulsão por atacar aqueles que estão indefesos. Se sofrer dessa maldição e iniciar o turno dentro de alcance de movimento de uma criatura com 0 PV, faça uma salvaguarda de Sabedoria CD 15. Em falha, é compelido a mover-se até essa criatura e realizar ao menos um ataque de Garras Bestiais contra ela antes de realizar outras ações."
      }
    ]
  },
  {
    "id": "bbb-fighter-heart-of-focus",
    "classId": "fighter",
    "name": "Coração do Foco",
    "originalName": "Heart of Focus",
    "aliases": [
      "Heart of Focus"
    ],
    "desc": "Um combatente heroico que apoia e encoraja seus aliados em situações desesperadoras.",
    "sourcePage": 105,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "105",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "GRANDE COMANDO",
        "level": 3,
        "page": 105,
        "text": "Você pode realizar a ação Ajudar como ação bônus.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SURTO UNIFICADO",
        "level": 3,
        "page": 105,
        "text": "Quando usa Surto de Ação, cada aliado a até 9 m pode escolher um dos benefícios: receber PV temporários iguais ao seu nível de guerreiro + 5; usar a reação para mover-se até metade do próprio deslocamento sem provocar ataques de oportunidade; ou usar a reação para fazer um ataque com arma ou conjurar um truque com tempo de conjuração de 1 ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MORAL DO GRUPO",
        "level": 7,
        "page": 105,
        "text": "Quando usa Retomar o Fôlego, cada aliado a até 3 m recupera metade dos PV que você recuperar com a característica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÁTICAS DE MATILHA",
        "level": 7,
        "page": 105,
        "text": "Quando realiza um ataque com arma contra um alvo que esteja dentro do alcance corpo a corpo de um de seus aliados não incapacitados, você faz o ataque com vantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PRESENÇA INABALÁVEL",
        "level": 10,
        "page": 105,
        "text": "Uma criatura morrendo a até 4,5 m de você não cai no chão e pode mover-se normalmente. Além disso, enquanto permanecer nessa distância, tem vantagem em salvaguardas contra a morte.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÁTICAS AFLITIVAS",
        "level": 15,
        "page": 105,
        "text": "Seus aliados têm vantagem em ataques contra criaturas que estejam dentro de seu alcance corpo a corpo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FÚRIA PELOS CAÍDOS",
        "level": 18,
        "page": 105,
        "text": "Quando um aliado morto ou com 0 PV estiver a até 9 m, você pode usar sua ação bônus para fazer dois ataques com arma, ou um ataque com arma com vantagem contra uma criatura hostil.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-fighter-knight-demonist",
    "classId": "fighter",
    "name": "Cavaleiro Demonista",
    "originalName": "Knight Demonist",
    "aliases": [
      "Knight Demonist"
    ],
    "desc": "Um guerreiro de sangue demoníaco que fortalece e muta o próprio corpo de maneiras grotescas.",
    "sourcePage": 105,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "105–106",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CORPO DE MAUS PRESSÁGIOS",
        "level": 3,
        "page": 105,
        "text": "Enquanto não usar armadura pesada, pode usar Constituição no lugar de Destreza para determinar sua CA, sem sofrer as limitações que normalmente restringiriam o bônus de Destreza. Todo dano que você sofrer é reduzido pela metade do seu nível de guerreiro. Além disso, pode usar Constituição no lugar de Força em ataques com arma se a arma tiver as propriedades pesada ou duas mãos, resultar de sua característica Mutationismo ou for um ataque desarmado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPES APRIMORADOS",
        "level": 3,
        "page": 106,
        "text": "Seus ataques desarmados causam 1d8 + seu modificador de Força ou Constituição de dano cortante ou contundente, à sua escolha em cada ataque, e contam como mágicos para superar resistências. O dado torna-se 1d10 no 8º nível de guerreiro e 2d8 no 16º.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SOMBRIO",
        "level": 7,
        "page": 106,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20. Quando obtiver um crítico com ataque corpo a corpo, o alvo faz uma salvaguarda de Sabedoria contra uma CD baseada em Força ou Constituição, à sua escolha. Em falha, fica amedrontado por você até o fim de seu próximo turno; em sucesso, não fica amedrontado e torna-se imune a esse efeito até o início de seu próximo turno. Você tem vantagem em ataques contra criaturas amedrontadas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MUTACIONISMO",
        "level": 10,
        "page": 106,
        "text": "Gaste 1 ponto de Maestria de Combate para produzir os efeitos de transmogrificação sombria sem espaço de magia; o ponto só é consumido se você conseguir copiar o corpo do alvo. Seu atributo de conjuração para esse efeito é Força ou Constituição, à sua escolha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SOMBRIO SUPERIOR",
        "level": 15,
        "page": 106,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20. Quando acerta uma criatura amedrontada por você com um ataque corpo a corpo, causa um dado de dano da arma adicional.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SEPARAÇÃO DO CORAÇÃO INFERNAL",
        "level": 18,
        "page": 106,
        "text": "Uma vez por ação Atacar, no lugar de um ataque com arma, você pode lançar uma torrente de energia sombria contra um alvo a até 9 m. Seus PV atuais são reduzidos em 2d10, ignorando PV temporários e sem possibilidade de redução. O alvo faz salvaguarda de Constituição contra uma CD baseada em Força ou Constituição; em falha, sofre 6d12 + seu modificador de Constituição de dano necrótico, ou metade em sucesso. Se gastar 1 ponto de Maestria de Combate, o efeito explode e também atinge cada criatura a até 4,5 m do alvo, exceto você, com a mesma salvaguarda e dano; nesse caso, você recebe PV temporários iguais à metade do dano total causado. Criaturas amedrontadas por você têm desvantagem nessa salvaguarda.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-fighter-sohei",
    "classId": "fighter",
    "name": "Sōhei",
    "originalName": "Sohei",
    "aliases": [
      "Sohei"
    ],
    "desc": "Um soldado que treina como forma de autoaperfeiçoamento, à maneira de um monge.",
    "sourcePage": 106,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "106",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "PUNHO ROMPEDOR",
        "level": 3,
        "page": 106,
        "text": "Seus ataques desarmados contam como armas com acuidade, causam 1d8 de dano contundente e são mágicos. O dano aumenta para 1d10 no 10º nível de guerreiro e 2d6 no 18º. Todas as características de Sōhei que exijam ou mencionem ataques desarmados também podem ser aplicadas a armas com a propriedade soqueira.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SEQUÊNCIA DE GOLPES",
        "level": 3,
        "page": 106,
        "text": "Quando usa Surto de Ação e utiliza a nova ação para Atacar, pode realizar dois ataques desarmados adicionais como parte dessa ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO DA PALMA",
        "level": 7,
        "page": 106,
        "text": "Seus ataques desarmados obtêm acerto crítico com 19 ou 20 no d20. Quando obtiver um crítico com eles, role novamente os dados de dano de seu ataque desarmado e some-os ao resultado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AÇÃO RÁPIDA",
        "level": 10,
        "page": 106,
        "text": "Você adiciona seu bônus de proficiência às jogadas de Iniciativa. No primeiro turno de cada combate, pode usar sua ação bônus para realizar dois ataques desarmados.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RESPIRAÇÃO PURIFICADORA",
        "level": 15,
        "page": 106,
        "text": "Você pode usar Retomar o Fôlego como ação em vez de ação bônus. Se fizer isso, escolha: tratar cada uso de Retomar o Fôlego gasto como se tivesse gasto um uso adicional da característica; ou recuperar o valor máximo de PV em todos os dados de Retomar o Fôlego.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR DA PALMA",
        "level": 18,
        "page": 106,
        "text": "Seus ataques desarmados obtêm acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-inscriptor-retia-grim-fable",
    "classId": "inscriptor-retia",
    "name": "Fábula Sombria",
    "originalName": "Grim Fable",
    "aliases": [
      "Grim Fable"
    ],
    "desc": "Um escritor amaldiçoado que inflige infortúnio e melancolia aos outros.",
    "sourcePage": 107,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "107–108",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MAIS QUE UM ERRO",
        "level": 1,
        "page": 107,
        "text": "Quando conjura uma magia que imponha uma condição à qual o alvo seja imune, pode ignorar a imunidade e fazê-lo rolar normalmente. Se conseguir impor o efeito, em vez da condição original ele fica amaldiçoado, e a maldição reproduz exatamente os efeitos daquela condição pelo mesmo tempo; para outros efeitos, como ataques que causam dano extra contra amedrontados, ela conta como a condição original. Efeitos que não removam maldições não podem removê-la. Você só pode manter um conjunto de efeitos convertido em maldição por vez; criar outro faz a maldição anterior retornar à condição original, possivelmente encerrando-a em alvos imunes. Mesmo contra um alvo não imune, pode optar por transformar uma condição aplicada em maldição.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CAPÍTULO ABERTO: LIÇÕES MORTAIS",
        "level": 1,
        "page": 107,
        "text": "Em vez de Magias de Capítulo, escolha um grupo entre Valores Sangrentos, Palavras Seladas ou Moralismos Desvinculados. Magias desse grupo e do Códice Pecaminoso contam como magias de Inscritor para você. Além disso, escolha um número de magias desses dois grupos igual ao seu bônus de proficiência que possa conjurar com espaços de pacto. Você as conhece automaticamente e elas não contam no limite de magias conhecidas. A cada nível de Inscritor, pode refazer essas escolhas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REVIRAVOLTA SOMBRIA",
        "level": 5,
        "page": 107,
        "text": "Quando uma criatura que você veja obtiver sucesso em um teste de atributo, ataque ou salvaguarda feito com vantagem, pode gastar uma Reviravolta Narrativa para obrigá-la a usar o d20 descartado como resultado, possivelmente mudando o desfecho. Até o início de seu próximo turno, toda rolagem que ela fizer com vantagem também deve usar o d20 que seria descartado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DISPOSITIVO DO INCOLOR",
        "level": 8,
        "page": 107,
        "text": "Uma vez por Descanso, pode produzir os efeitos de arma infundida sem gastar espaço, como se a conjurasse com um de seus espaços de pacto. Pode gastar uma Consulta para aumentar o nível efetivo da magia pela metade de seu bônus de proficiência, arredondado para baixo, até no máximo 9º nível. Conjurada assim, tanto o dano extra quanto o dano normal da arma não possuem tipo; portanto, ignoram imunidades, resistências e vulnerabilidades baseadas em tipo de dano, mas não defesas baseadas no material da arma, como resistência a armas não eidólicas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AMALDIÇOADO AO FRACASSO",
        "level": 12,
        "page": 107,
        "text": "Você aprende rajada mística se ainda não a conhece. Quando causar dano a uma criatura com uma magia de Inscritor, ou ela falhar na salvaguarda inicial contra uma, ela faz salvaguarda de Carisma. Em sucesso, nada além da magia acontece e ela passa automaticamente nessas salvaguardas até o início do próximo turno. Em falha, fica amaldiçoada por 1 minuto. Enquanto amaldiçoada, sofre 1d4 de dano irredutível sempre que realizar uma ação, não incluindo ação bônus ou reação, ou mover-se mais de 3 m num turno. Repete a salvaguarda no fim de cada turno, encerrando em sucesso. O efeito pode acumular: se falhar novamente contra esta característica em turno posterior devido a outra de suas magias, a duração reinicia e acrescenta mais 1d4 ao dano de cada ativação da maldição.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DESTINO VAZIO",
        "level": 20,
        "page": 108,
        "text": "Gaste uma Consulta para atingir todas as criaturas amaldiçoadas à sua escolha a até 18 m com uma onda de infortúnio. Cada maldição que as afete passa a ter duração indefinida e se desvincula das condições normais que a encerrariam. A maldição também ganha estes efeitos: o alvo não pode obter vantagem em ataques, testes de atributo ou salvaguardas; se tiver vantagem e desvantagem ao mesmo tempo, rola com desvantagem; não pode recuperar PV; durante 1 minuto, no fim de cada turno, pode repetir uma salvaguarda de Carisma e, se acumular três sucessos nesse minuto, a maldição termina. Após o minuto, ela não pode mais ser encerrada dessa forma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-inscriptor-retia-private-fiction",
    "classId": "inscriptor-retia",
    "name": "Ficção Privada",
    "originalName": "Private Fiction",
    "aliases": [
      "Private Fiction"
    ],
    "desc": "Um arcanista da palavra escrita que idealiza os outros e os reescreve na narrativa.",
    "sourcePage": 108,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "108",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "AGIR COMO O PERSONAGEM",
        "level": 1,
        "page": 108,
        "text": "Quando você for alvo de um ataque com arma que possa ver, pode usar sua reação para escrever rapidamente que um aliado voluntário a até 18 m se lança à frente do golpe. Uma versão espectral e idealizada dele aparece diante de você, e sua CA é substituída pela CA atual do aliado até o fim do turno. Da mesma forma, em seu turno pode usar uma ação bônus para fazer um ataque com arma: escreve que um aliado voluntário a até 18 m investe para atacar por você, e uma versão espectral dele faz o ataque com sua arma, usando as proficiências, bônus de ataque e modificadores de atributo do aliado. Para todos os demais fins, o ataque origina-se de você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FIO DESCARTADO",
        "level": 5,
        "page": 108,
        "text": "Quando uma criatura a até 18 m estiver enfeitiçada, enfurecida ou amedrontada, pode gastar uma Reviravolta Narrativa como ação bônus para abortar o efeito que causa a condição. Essa criatura e todas as demais afetadas pelo mesmo efeito se recuperam imediatamente, como se tivessem passado nas salvaguardas ou cumprido os critérios para encerrá-lo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ESCREVER PARA FORA",
        "level": 8,
        "page": 108,
        "text": "Quando uma criatura tentar usar uma ação que force outra a realizar uma salvaguarda, pode gastar uma Reviravolta Narrativa como reação para forçá-la a fazer uma salvaguarda de Carisma. Em falha, a ação não produz efeito e é desperdiçada, mas os recursos gastos para usá-la não são devolvidos. No fim de cada turno, a criatura repete a salvaguarda e não pode usar novamente aquela ação até obter sucesso, encerrando o efeito.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "O QUE VOCÊ FARIA?",
        "level": 12,
        "page": 108,
        "text": "Como ação bônus, gaste um uso de Consulta e escolha uma criatura que veja a até 18 m. Conceda a ela um dos efeitos abaixo, deixando-a decidir como aproveitar a oportunidade: dobrar seu deslocamento no próximo turno; realizar uma ação adicional no próximo turno; realizar uma ação bônus adicional no próximo turno; ou receber uma reação adicional por turno até o fim de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TRANSFORMAÇÃO CLIMÁTICA REPENTINA",
        "level": 20,
        "page": 108,
        "text": "Uma vez por Descanso Longo, pode realizar uma reescrita extensa de uma criatura voluntária que veja a até 9 m e produzir nela os efeitos de mudar de forma, sem gastar espaço de magia nem componente material. Você não pode escolher a si mesmo como alvo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo — Ficção Privada",
        "description": "Magias conhecidas automaticamente como magias de Inscritor, sem contar no limite de magias conhecidas.",
        "page": 108,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Comando; Estrelas da Afeição"
          },
          {
            "level": "3º",
            "spells": "Tela de Nuvens; Elo Mental"
          },
          {
            "level": "5º",
            "spells": "Voo; Imagem Maior"
          },
          {
            "level": "7º",
            "spells": "Portal de Eros; Donzelas do Escudo"
          },
          {
            "level": "9º",
            "spells": "Rogar Maldição; Sonho"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-inscriptor-retia-shuji-ink",
    "classId": "inscriptor-retia",
    "name": "Tinta Shūji",
    "originalName": "Shuji Ink",
    "aliases": [
      "Shuji Ink"
    ],
    "desc": "Um manipulador da própria tinta, capaz de cortar, envenenar e pintar o mundo com ela.",
    "sourcePage": 109,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "109",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "LÂMINA DE TINTA",
        "level": 1,
        "page": 109,
        "text": "Como ação, invoque um corte de tinta negra e faça um ataque mágico à distância contra uma criatura a até 9 m, ou um ataque mágico corpo a corpo se ela estiver a até 1,5 m. Em acerto, causa dano de veneno igual a 1d8 × seu bônus de proficiência. Se o ataque for crítico, o alvo também fica cego por tinta nos olhos por 1 minuto; no fim de cada turno, faz salvaguarda de Constituição, encerrando a cegueira em sucesso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PENA ENVENENADA",
        "level": 5,
        "page": 109,
        "text": "Quando causar dano com uma magia de Inscritor que conjurar, pode converter qualquer dano da magia em dano de veneno. Se fizer isso e a magia exigir concentração, criaturas que falharem numa salvaguarda contra ela ficam envenenadas pela duração da magia.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NOTAÇÃO EM NEGRITO",
        "level": 8,
        "page": 109,
        "text": "Quando conjura uma magia usando um espaço produzido por Consulta, todas as jogadas de ataque feitas como parte da magia têm vantagem e todas as salvaguardas contra ela são feitas com desvantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ANIMAÇÃO DO POÇO NEGRO",
        "level": 12,
        "page": 109,
        "text": "Ao espalhar tinta sobre objetos, você os imbui de vida. Uma vez por Descanso Longo, pode conjurar animar objetos sem gastar espaço, sempre como se fosse conjurada em um nível igual à metade de seu nível de Inscritor, no máximo 9º.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ONDA VANTA",
        "level": 20,
        "page": 109,
        "text": "Uma vez por Descanso Longo, como ação, crie uma esfera de tinta de 18 m de raio centrada num ponto que veja a até 36 m. Cada criatura à sua escolha na área faz salvaguarda de Constituição. Em falha, sofre 12d8 de dano de veneno e fica totalmente coberta de tinta, ficando cega enquanto ela permanecer; não pode ver nem ouvir por qualquer sentido, inclusive visão verdadeira. Em sucesso, sofre metade do dano e não é coberta. No início de cada turno de uma criatura coberta, ela sofre 2d8 de dano de veneno e repete a salvaguarda. Em falha, fica restringida até o início do próximo turno; em sucesso, recupera os sentidos e deixa de ficar cega até o início do próximo turno. Após três sucessos totais, o efeito termina para ela.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo — Tinta Shūji",
        "description": "Magias conhecidas automaticamente como magias de Inscritor, sem contar no limite de magias conhecidas.",
        "page": 109,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Convocar Familiar; Arma Infundida"
          },
          {
            "level": "3º",
            "spells": "Imobilizar Pessoa; Despedaçar"
          },
          {
            "level": "5º",
            "spells": "Medo; Muralha de Vento"
          },
          {
            "level": "7º",
            "spells": "Tentáculos Negros; Escrito de Horror"
          },
          {
            "level": "9º",
            "spells": "Vazio de Tinta de Chughlihn; Onda de Choque"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-monk-way-of-fair-intent",
    "classId": "monk",
    "name": "Caminho da Intenção Justa",
    "originalName": "Way of Fair Intent",
    "aliases": [
      "Way of Fair Intent"
    ],
    "desc": "Um praticante marcial que se move de acordo com o fluxo do universo e aposta no acaso.",
    "sourcePage": 109,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "109–110",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "LEITURA SERENA",
        "level": 3,
        "page": 109,
        "text": "Sua intuição é maior que sua perícia social. Você compreende os desejos, medos e impulsos dos outros e pode usar Sabedoria no lugar de Carisma em qualquer teste de atributo ou perícia que normalmente exigiria Carisma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PUNHO DE RISCO",
        "level": 3,
        "page": 109,
        "text": "Quando fizer um ataque como parte de Rajada de Golpes, pode apostar num golpe imprevisível e rolar 1d8 junto com o ataque. Se o resultado for ímpar, subtraia-o da jogada de ataque e do dano desse ataque; se for par, some-o a ambos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APARO RELAXADO",
        "level": 6,
        "page": 110,
        "text": "Quando seria atingido por um ataque com arma que possa ver, use sua reação para lançar uma moeda e declarar o lado, ou rolar 1d10. Se acertar a moeda ou o d10 resultar em número par, o ataque erra. Se você o fizer errar, todos os ataques contra você até o início de seu próximo turno têm desvantagem; se o ataque ainda acertar, em vez disso todos têm vantagem. Se já tiver usado sua reação, pode realizar esta reação novamente gastando 1 ponto de Ki por uso adicional.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ADEPTO DA CASUALIDADE",
        "level": 11,
        "page": 110,
        "text": "Quando fizer uma salvaguarda que normalmente reduziria dano à metade, você sofre nenhum dano em um sucesso e metade do dano em uma falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPE QUE ABALA O DESTINO",
        "level": 17,
        "page": 110,
        "text": "Quando atingir uma criatura com ataque desarmado ou Arma de Monge, pode produzir nela os efeitos de fortuna/falha sem espaço, componentes materiais ou ação adicional, usando sua CD de Ki para o efeito. Se o alvo obtiver sucesso em qualquer salvaguarda contra esse efeito que o impeça ou encerre, sofre imediatamente 8d10 de dano de força pelo retorno de energia provocado ao torcer o destino. Você pode usar uma vez por Descanso; usos adicionais custam 4 pontos de Ki cada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-monk-way-of-the-morphic-bone",
    "classId": "monk",
    "name": "Caminho do Osso Mórfico",
    "originalName": "Way of the Morphic Bone",
    "aliases": [
      "Way of the Morphic Bone"
    ],
    "desc": "Um artista marcial cujos ossos e carne se contorcem e remodelam à sua vontade.",
    "sourcePage": 110,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "110–111",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CARNE CONTORCIDA",
        "level": 3,
        "page": 110,
        "text": "Seu corpo assume transformações perturbadoras. Seu alcance com ataques desarmados e Armas de Monge aumenta em 1,5 m. Você tem vantagem em testes de atributo para resistir a agarrões e pode espremer-se por espaços de ao menos 30 cm. Além disso, como ação bônus pode gastar 1 Ki para produzir do corpo uma arma de osso que funciona como uma de suas Armas de Monge corpo a corpo e realizar um ataque com ela como parte da criação; a arma se desfaz no próximo Descanso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REPUDIAR A MORTE",
        "level": 6,
        "page": 110,
        "text": "Quando um ataque que você possa ver o reduziria a 0 PV, pode gastar 1 Ki para ficar com 1 PV em vez disso. Sempre que fizer isso, role 1d100; se o resultado for igual ou superior a 50 + duas vezes seu nível de monge, você recebe 1 ponto de Fadiga de Combate.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PORCO-ESPINHO ÓSSEO",
        "level": 11,
        "page": 111,
        "text": "Quando uma criatura dentro de seu alcance corpo a corpo o acerta com um ataque com arma, use sua reação para fazer ossos afiados irromperem de seu corpo e causar dano perfurante ao atacante igual à metade de seu nível de monge. Até o início de seu próximo turno, o mesmo dano ocorre automaticamente sempre que você for atingido dessa forma. Usos por Descanso Longo iguais ao seu bônus de proficiência; depois disso, pode ativar novamente gastando 2 Ki por uso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "EVOLUÇÃO MÓRFICA",
        "level": 11,
        "page": 111,
        "text": "Seu corpo evolui ainda mais: o alcance adicional de ataques desarmados e Armas de Monge passa a 3 m em vez de 1,5 m; pode espremer-se por espaços de até 2,5 cm; e armas criadas por Carne Contorcida causam um dado de dano da arma adicional no turno em que são criadas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REFORMAÇÃO RESTAURADORA",
        "level": 17,
        "page": 111,
        "text": "Se estiver com mais de 0 PV, porém abaixo de metade de seus PV máximos, recupera no início de cada turno PV iguais à metade de seu nível de monge, arredondado para cima.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-monk-way-of-the-soldier",
    "classId": "monk",
    "name": "Caminho do Soldado",
    "originalName": "Way of the Soldier",
    "aliases": [
      "Way of the Soldier"
    ],
    "desc": "Um monge que transforma suas habilidades em disciplina militar e combate organizado.",
    "sourcePage": 111,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "111",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA",
        "level": 3,
        "page": 111,
        "text": "Escolha um Estilo de Luta normalmente disponível ao Guerreiro ou ao Santo da Espada. Você recebe esse estilo; se já o possuir por outra fonte, ele avança.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARMAMENTO MILITAR",
        "level": 3,
        "page": 111,
        "text": "Você treinou com armas associadas ao serviço militar, incluindo espada longa (katana) e glaive (naginata); elas contam como suas Armas de Monge. Enquanto empunhar uma delas, uma vez por turno pode adicionar seu dado de Artes Marciais a uma jogada de ataque feita com essa arma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TALENTO EXTRA",
        "level": 6,
        "page": 111,
        "text": "Escolha um talento cujos requisitos você cumpra. Você aprende esse talento imediatamente.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AVANÇO",
        "level": 11,
        "page": 111,
        "text": "Você pode avançar um de seus Estilos de Luta. Se nenhum puder ser avançado, pode aprender um novo Estilo de Luta dentre os disponíveis ao Guerreiro e ao Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "BROQUEL RESISTENTE",
        "level": 11,
        "page": 111,
        "text": "Quando dano o reduziria a 0 PV, pode ficar com PV iguais ao seu nível de monge em vez disso. Pode usar uma vez por Descanso; usos adicionais custam 2 Ki. Ao usar esta característica, pode gastar Ki adicional até seu bônus de proficiência e receber PV temporários iguais a 1d10 × a quantidade de Ki gasta, contando também os 2 Ki do custo da característica, se aplicável.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "BROQUEL INQUEBRÁVEL",
        "level": 17,
        "page": 111,
        "text": "Quando usa Broquel Resistente para evitar cair a 0 PV, torna-se resistente a todo dano até o início de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-paladin-oath-of-bound-fate",
    "classId": "paladin",
    "name": "Juramento do Destino Vinculado",
    "originalName": "Oath of Bound Fate",
    "aliases": [
      "Oath of Bound Fate"
    ],
    "desc": "Um paladino que considera sagrados os vínculos entre as pessoas e os defende sem hesitação.",
    "sourcePage": 112,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "112",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 112,
        "text": "Você recebe duas opções de Canalizar Divindade.\n\nJURADO E VINCULADO. Como ação, escolha uma criatura não hostil a até 9 m e jure protegê-la por 10 minutos. Enquanto permanecer a até 9 m dela, faz um ataque adicional sempre que realiza a ação Atacar e sofre, em seu lugar, metade do dano que ela receberia de ataques e efeitos. Se estiver a até 3 m, ataques contra ela têm desvantagem. Você tem vantagem em ataques contra criaturas que tenham causado dano ao protegido desde o início do efeito.\n\nREVIVIFICAÇÃO ZELOSA. Quando uma criatura a até 18 m for reduzida a 0 PV, use sua reação e Canalizar Divindade para restaurá-la imediatamente a PV iguais ao seu nível de paladino + 10. Até o fim do próximo turno dela, não pode ser reduzida abaixo de 1 PV, tem resistência a todo dano e toda cura que receber usa o resultado máximo dos dados.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AURA DE PODER COMBINADO",
        "level": 7,
        "page": 112,
        "text": "Quando uma criatura dentro do alcance de sua Aura de Proteção faz uma jogada de ataque, pode adicionar metade de seu bônus de proficiência às jogadas de ataque e de dano resultantes.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NEGAÇÃO DO FIM",
        "level": 15,
        "page": 112,
        "text": "Quando um ataque ou efeito reduziria uma ou mais criaturas a até 9 m a 0 PV, pode usar sua reação para impedir que quaisquer delas sejam reduzidas a 0 ou mortas por esse ataque/efeito. Em vez disso, cada uma fica com 1d8 + metade de seu nível de paladino PV. Para cada criatura salva, seus PV máximos são reduzidos em 1d6 até completar um Descanso Longo. Se isso reduzir seus PV máximos a 0, você morre imediatamente. Se o efeito também causar dano a você, esse dano é aplicado depois da resolução desta característica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ERGA-SE DIANTE DELES",
        "level": 20,
        "page": 112,
        "text": "Enquanto houver ao menos um aliado a até 36 m, ao ser reduzido a 0 PV você não começa a morrer nem fica inconsciente. Em vez disso, sempre que sofrer dano, seus PV máximos são reduzidos pelo dano que teria sofrido e você continua agindo normalmente. Se seus PV máximos chegarem a 0 dessa forma, ficam em 1 e você imediatamente começa a morrer e fica inconsciente. Descansos não restauram essa redução; é necessário um efeito como restauração maior. Se terminar seu turno sem aliados a até 36 m, o estado especial termina. Se estiver morrendo com mais de 1 PV máximo e, no início do turno, houver um aliado a até 36 m que você possa ver ou ouvir, pode voltar a agir como se não estivesse morrendo. Enquanto permanecer a 0 PV sem morrer, seus ataques com arma causam um dado extra de dano radiante e você recebe 10 PV temporários no início de cada turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento do Destino Vinculado",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 112,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "level": "3º",
            "spells": "Rito Cerimonial; Golpe da Valquíria"
          },
          {
            "level": "5º",
            "spells": "Enamorar; Vínculo Protetor"
          },
          {
            "level": "9º",
            "spells": "Vínculo Eficaz; Revivificar"
          },
          {
            "level": "13º",
            "spells": "Santuário Particular; Donzelas do Escudo"
          },
          {
            "level": "17º",
            "spells": "Recompensa Instantânea de Elstrakin; Proteção Lendária"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DO DESTINO VINCULADO",
        "page": 112,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Ao contrário de muitos paladinos que fazem juramentos específicos para obter poder divino, o Paladino do Destino Vinculado deve seguir dois comportamentos:\n\n• Respeitar a integridade dos vínculos entre outras pessoas, mesmo quando não concorda com eles.\n• Proteger aqueles que coloca sob seus cuidados e jurar defendê-los com tudo o que possui."
      }
    ]
  },
  {
    "id": "bbb-paladin-oath-of-loyalty",
    "classId": "paladin",
    "name": "Juramento da Lealdade",
    "originalName": "Oath of Loyalty",
    "aliases": [
      "Oath of Loyalty"
    ],
    "desc": "Um guerreiro justo que honra as promessas e juramentos feitos por si e pelos outros.",
    "sourcePage": 113,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "113",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 113,
        "text": "Você recebe duas opções de Canalizar Divindade.\n\nORIENTAÇÃO DO CLÃ. Quando uma criatura a até 9 m for atingida por um ataque com arma, use sua reação e Canalizar Divindade para fazer esse ataque errar. Depois, por 1 minuto, ataques contra essa criatura têm desvantagem.\n\nESPELHO DE MAGIA. Como ação, use Canalizar Divindade para obter vantagem em salvaguardas contra efeitos mágicos por 1 minuto; criaturas dentro de sua Aura de Proteção também recebem esse benefício. Uma criatura sob essa proteção que tiver sucesso numa salvaguarda contra um efeito mágico ignora completamente o dano e os efeitos daquele efeito mágico, exceto alterações no ambiente, como terreno difícil.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AURA DA GUARDA FIRME",
        "level": 7,
        "page": 113,
        "text": "Aliados dentro de sua Aura de Proteção, incluindo você, que não estejam empunhando um escudo recebem bônus na CA igual à metade de seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORRER PARA DEFENDER",
        "level": 15,
        "page": 113,
        "text": "Quando ataca com arma uma criatura que tenha causado dano a um de seus aliados desde o início de seu último turno, causa dano adicional igual ao seu modificador de Carisma. Também pode fazer contra ela um ataque com arma adicional como parte da mesma ação; esse ataque adicional não pode ter desvantagem. Só pode usar este benefício uma vez por turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MÃO DIREITA ABSOLUTA",
        "level": 20,
        "page": 113,
        "text": "Como ação bônus, assuma por 1 minuto uma forma pesadamente armadurada. Durante esse tempo: você e todas as criaturas dentro de sua Aura de Proteção têm resistência a todo dano; quando ataca uma criatura que esteja no alcance corpo a corpo de outro aliado seu não incapacitado, o acerto causa um dado de dano da arma adicional; suas jogadas de ataque com arma recebem +1 para cada aliado em sua Aura de Proteção, máximo +5; e, como ação bônus, inclusive ao ativar esta característica, pode teleportar-se até 18 m para um espaço desocupado adjacente a um aliado. Depois de usar esse teleporte, só pode fazê-lo novamente após um Descanso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento de Lealdade",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 113,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "level": "3º",
            "spells": "Heroísmo; Onda de Reversão"
          },
          {
            "level": "5º",
            "spells": "Repouso Tranquilo; Escudo de Lâminas"
          },
          {
            "level": "9º",
            "spells": "Criar Alimentos; Consagração do Santo"
          },
          {
            "level": "13º",
            "spells": "Assalto de Correntes; Guardião da Fé"
          },
          {
            "level": "17º",
            "spells": "Palavra de Poder: Resposta; Vínculo Telepático"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DA LEALDADE",
        "page": 113,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Paladinos que fazem o Juramento de Lealdade costumam gravar seus juramentos em armas e armaduras, junto aos nomes daqueles a quem juraram lealdade.\n\nLEALDADE COM RÉDEA. Mesmo quando não se espera que você sirva, aja de acordo com a vontade daqueles a quem se comprometeu.\n\nPADRÕES REDIMIDOS. Observe aqueles a quem jurou servir e mantenha-os em um caminho compatível com seu juramento.\n\nAUXÍLIO INABALÁVEL. Dê tudo de si por aqueles a quem jurou lealdade."
      }
    ]
  },
  {
    "id": "bbb-paladin-oath-of-secrecy",
    "classId": "paladin",
    "name": "Juramento do Sigilo",
    "originalName": "Oath of Secrecy",
    "aliases": [
      "Oath of Secrecy"
    ],
    "desc": "Paladinos jurados ao segredo que protegem santuários, informações e conhecimentos ocultos.",
    "sourcePage": 113,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "113–115",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 114,
        "text": "Você recebe duas opções de Canalizar Divindade.\n\nCAPUZ INAUDÍVEL. Como ação bônus, envolva-se num manto silencioso de influência divina que permanece até seu próximo Descanso. Você não sofre desvantagem em testes de Furtividade por armadura, terreno ou outros efeitos; possuir desvantagem não impede que role com vantagem caso também a tenha. Outras criaturas não conseguem ouvir nem perceber seus componentes verbais de magia, e você é imune a dano trovejante.\n\nDOSSEL INVISÍVEL. Como ação, escolha um cubo centrado num ponto ou espaço visível ao alcance, com lado de 1,5 m × seu bônus de proficiência, e afete todas as criaturas nele. Elas ficam invisíveis por até 1 hora enquanto não saírem do cubo. Até o efeito terminar para cada uma, criaturas e objetos carregados que não possam vê-las atravessam-nas inofensivamente ao passar pelo cubo, como se estivessem no Plano Etéreo. Efeitos de área ainda podem atingi-las, e criaturas que já podiam vê-las quando a ação foi usada continuam vendo-as normalmente.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "AURA FANTASMA",
        "level": 7,
        "page": 114,
        "text": "Enquanto ao menos um de seus aliados estiver dentro de sua Aura de Proteção, ataques contra você têm desvantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APROXIMAÇÃO FANTASMA",
        "level": 15,
        "page": 114,
        "text": "Como ação bônus, torne-se invisível até o início de seu próximo turno e deixe uma pós-imagem no local onde começou o turno. Enquanto a pós-imagem existir, sua fala e gestos parecem originar-se dela. No início do turno seguinte, pode usar ação bônus para estender o efeito novamente. Pode mantê-lo por até 1 minuto por uso. Usos: duas vezes por Descanso; estender em turnos subsequentes não consome usos adicionais.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CAMPEÃO SILENCIOSO",
        "level": 20,
        "page": 115,
        "text": "Suas palavras, intenções e ações só são percebidas tarde demais. Criaturas não podem reagir a suas ações, movimento ou componentes de magia, pois só os percebem depois que já ocorreram. Em cada turno, você pode realizar discretamente uma segunda ação bônus. Além disso, em qualquer teste de Furtividade ou Enganação, um resultado no d20 menor que 15 é tratado como 15.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento de Sigilo",
        "description": "Magias concedidas ou disponibilizadas pela subclasse nos níveis indicados.",
        "page": 114,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "level": "3º",
            "spells": "Santuário; Golpe Silenciador"
          },
          {
            "level": "5º",
            "spells": "Cegueira/Surdez; Elo Mental"
          },
          {
            "level": "9º",
            "spells": "Conter Atacante; Idiomas"
          },
          {
            "level": "13º",
            "spells": "Cão Fiel; Santuário Particular"
          },
          {
            "level": "17º",
            "spells": "Consagrar; Modificar Memória"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DO SIGILO",
        "page": 113,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Paladinos do Juramento de Sigilo costumam registrar seus preceitos em lugares difíceis de encontrar, como o interior da armadura, a capa de um livro privado ou em código sobre o próprio corpo.\n\nATENHA-SE AO ASSUNTO. Se recebeu a missão de proteger determinada informação, ou conhecimento confiado por uma autoridade, revelar o que sabe e quebrar essa confiança viola seu juramento.\n\nINTERRUPÇÕES NECESSÁRIAS. Quando outros buscarem o conhecimento que você protege, silencie-os — de maneira tão permanente quanto for capaz.\n\nNÃO DESPERDICE PALAVRAS. Não revele aos outros aquilo que não é necessário."
      }
    ]
  },
  {
    "id": "bbb-petal-knight-retia-azalea",
    "classId": "petal-knight-retia",
    "name": "Azaleia",
    "originalName": "Azalea",
    "aliases": [
      "Azalea"
    ],
    "desc": "Um guerreiro da natureza vibrante e otimista que transforma esperança em golpes de boa sorte.",
    "sourcePage": 115,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "115–116",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CRÍTICO APRIMORADO",
        "level": 2,
        "page": 115,
        "text": "Você obtém acerto crítico com 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FOTOSSINCRÁTICO",
        "level": 2,
        "page": 115,
        "text": "Quando conjura uma magia usando um espaço de Magia de Pacto, role 1d100. Se o resultado for igual ou inferior a 10 + duas vezes seu nível de Cavaleiro das Pétalas, o espaço de pacto não é consumido.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORTADOR DA FORTUNA",
        "level": 6,
        "page": 115,
        "text": "Quando obtiver um acerto crítico com ataque de arma ou magia, causa dano radiante adicional igual a 1d8 × seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "IMPULSO DE SORTE",
        "level": 11,
        "page": 115,
        "text": "Quando você ou uma criatura a até 9 m obtiver um acerto crítico ou rolar 1 natural em um d20, você recupera um uso gasto de Flora Virtuosa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RENOVAÇÃO MATINAL",
        "level": 11,
        "page": 115,
        "text": "Se for reduzido a 0 PV e começar a morrer, pode continuar agindo como se não estivesse sob a condição morrendo, embora ainda faça salvaguardas contra a morte. No início de cada turno, se obtiver 18 ou mais numa salvaguarda contra a morte, recupera imediatamente 1 PV e não sofre Fadiga de Combate por voltar dessa forma. Além disso, se morrer e seu corpo permanecer majoritariamente intacto, após 1 minuto volta à vida como pela magia reencarnação, seguindo seus efeitos normais; isso não ocorre se for revivido por outro método antes. Depois de retornar dessa forma, não pode fazê-lo novamente por 7 dias. Quando for alvo de reencarnação, pode rolar duas vezes a raça resultante e escolher qual resultado usar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR",
        "level": 15,
        "page": 116,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-petal-knight-retia-cosmos",
    "classId": "petal-knight-retia",
    "name": "Cosmos",
    "originalName": "Cosmos",
    "aliases": [
      "Cosmos"
    ],
    "desc": "Um guerreiro centrado e harmonioso que maneja suas armas com domínio espiritual.",
    "sourcePage": 116,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "116",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MANEJADOR EQUILIBRADO",
        "level": 2,
        "page": 116,
        "text": "Características de Cavaleiro das Pétalas que exigem armas de uma mão passam a funcionar com qualquer arma com a qual você seja proficiente. Você também pode usar Sabedoria no lugar de Força ou Destreza nas jogadas de ataque e dano com armas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "HARMONIA DO METAL",
        "level": 2,
        "page": 116,
        "text": "Magias do grupo Zanjen contam como estando na lista do Cavaleiro das Pétalas para você, permitindo aprendê-las, lê-las e conjurá-las.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPES UNIFORMES",
        "level": 6,
        "page": 116,
        "text": "Depois de fazer um ataque e ver o(s) resultado(s) de seu d20, pode gastar um uso desta característica para fixar um desses resultados. Até o início de seu próximo turno, não rola ataques: trata cada jogada de ataque como tendo o resultado fixado. O efeito também vale para o ataque que o ativou. Se havia vários d20, como por desvantagem, escolha qual valor copiar. O resultado fixado não pode produzir um acerto crítico, mesmo se o ataque original foi crítico. Usos por Descanso iguais ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RAMOS DO COSMOS",
        "level": 11,
        "page": 116,
        "text": "Você recebe novas opções de Flora Virtuosa.\n\nELIMINAR MALEFÍCIO. Remove de você qualquer condição ou efeito que restauração menor pudesse remover. Pode gastar um uso adicional de Flora Virtuosa para também remover um efeito que restauração maior pudesse remover.\n\nPASSO RÁPIDO. Realize simultaneamente as ações Disparada e Desengajar.\n\nGOLPE ABERTO. Faça um ataque com uma arma corpo a corpo empunhada com duas mãos e aplique o mesmo resultado como se tivesse feito esse ataque separadamente contra cada criatura à sua escolha a até 3 m, resolvendo os acertos na ordem que desejar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 15,
        "page": 116,
        "text": "Quando realiza a ação Atacar, pode atacar três vezes em vez de uma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-petal-knight-retia-marigold",
    "classId": "petal-knight-retia",
    "name": "Calêndula",
    "originalName": "Marigold",
    "aliases": [
      "Marigold"
    ],
    "desc": "Um duelista voltado à relação entre vida e morte, caminhando na fronteira entre ambas.",
    "sourcePage": 116,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "116–117",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FLORES DA DECADÊNCIA",
        "level": 2,
        "page": 116,
        "text": "Escolha um grupo de magia: Valores Sangrentos, Palavras Seladas ou Moralismos Desvinculados. Magias desse grupo e do Códice Pecaminoso contam como magias de Cavaleiro das Pétalas para você, permitindo lê-las, aprendê-las e conjurá-las. Você recebe ainda um espaço adicional de Magia de Pacto de Cavaleiro das Pétalas, que só pode conjurar magias desses dois grupos e funciona normalmente nos demais aspectos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ORIENTAÇÃO DA ALMA",
        "level": 2,
        "page": 116,
        "text": "Uma vez por Descanso, pode conjurar falar com os mortos sem espaço nem componentes. Flores de calêndula brotam do cadáver e cobrem seus olhos; se o espírito o considerar hostil ou inimigo, ele o confunde com outra pessoa e passa a considerá-lo amigável. Ao conjurar dessa forma, porém, você só pode fazer uma pergunta.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "A MORTE CRIA RAÍZES",
        "level": 6,
        "page": 117,
        "text": "Quando atingir uma criatura com ataque de arma, pode tentar inserir o próprio conceito de morte em seu corpo. O alvo faz salvaguarda de Constituição contra sua CD de magia; em falha, sofre dano sem tipo igual a 2d6 × seu nível de Cavaleiro das Pétalas. Esse dano não pode ser reduzido por resistências ou imunidades a tipos específicos de dano, salvo resistência a dano não eidólico ou não mágico. Pode usar uma vez por turno; depois que uma criatura falhar nessa salvaguarda, você não pode usar esta característica novamente até completar um Descanso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PODRIDÃO E RENASCIMENTO",
        "level": 11,
        "page": 117,
        "text": "Quando você ou outra criatura dentro de sua Aura de Dignidade precisar fazer uma salvaguarda contra a morte, pode fazer com que o resultado do d20 seja automaticamente 20, mesmo se não puder realizar ações. Pode fazê-lo uma vez por Descanso; usos adicionais custam um uso de Flora Virtuosa cada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "JARDIM DAS RAÍZES DA MORTE",
        "level": 15,
        "page": 117,
        "text": "A Morte Cria Raízes é aprimorada: você pode ativá-la ao atingir uma criatura com ataque mágico ou quando ela falhar numa salvaguarda contra uma magia que exija espaço de Magia de Pacto; se estiver sintonizado com uma arma que tenha bônus de aprimoramento, pode somar esse bônus à CD da característica; e pode usar A Morte Cria Raízes sem limite de usos, ainda no máximo uma vez por turno, mas uma criatura que falhar contra ela não pode ser afetada novamente por você até completar um Descanso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-ranger-due-collector",
    "classId": "ranger",
    "name": "Cobrador de Dívidas",
    "originalName": "Due Collector",
    "aliases": [
      "Due Collector"
    ],
    "desc": "Um caçador de recompensas que persegue devedores e aqueles marcados por uma recompensa.",
    "sourcePage": 117,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "117–118",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CONHEÇA SUA MARCA",
        "level": 3,
        "page": 117,
        "text": "Humanoides tornam-se um de seus Inimigos Favoritos. Mover-se através do espaço de qualquer criatura que seja seu Inimigo Favorito não custa movimento adicional. Além disso, você ganha proficiência em Intimidação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TIRO DE CAUSA TRIPLA",
        "level": 3,
        "page": 117,
        "text": "Quando uma criatura entra num espaço a até 4,5 m de você, pode realizar contra ela um ataque de oportunidade usando uma arma à distância. Para esse ataque, o alvo é tratado como seu Inimigo Favorito.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CAÇADOR DE RECOMPENSAS",
        "level": 7,
        "page": 118,
        "text": "Uma vez por Descanso, pode produzir os efeitos de marca do caçador sem espaço nem componentes, conjurada num nível igual ao maior espaço de magia de Patrulheiro a que tenha acesso. Dessa forma, a magia só pode ter humanoides como alvo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ABORDAGEM INTIMIDADORA",
        "level": 11,
        "page": 118,
        "text": "Quando ataca um de seus Inimigos Favoritos que esteja a até 18 m e possa ver você, o alvo faz salvaguarda de Sabedoria com CD 8 + seu modificador de Intimidação. Em falha, você tem vantagem em ataques contra ele até o fim do turno; em sucesso, ele fica imune a esta característica até o fim do turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 15,
        "page": 118,
        "text": "Quando realiza a ação Atacar, pode fazer três ataques com arma em vez de um.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR",
        "level": 15,
        "page": 118,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-ranger-kyujutsu",
    "classId": "ranger",
    "name": "Kyūjutsu",
    "originalName": "Kyujutsu",
    "aliases": [
      "Kyujutsu"
    ],
    "desc": "Um arqueiro que também maneja o arco em combate próximo e pratica técnicas focadas e refinadas.",
    "sourcePage": 118,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "118",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FLECHAS COMO ESPADAS",
        "level": 3,
        "page": 118,
        "text": "Você aprimora o uso de armas à distância em combate próximo e aprende artes mágicas de maior versatilidade. Pode fazer ataques corpo a corpo usando uma arma à distância contra criaturas ao seu alcance corpo a corpo, usando Destreza para ataque e dano. Se a arma for leve, o dado de dano é 1d6; se pesada, 1d10; caso contrário, 1d8. Todo esse dano é contundente e a arma conta como corpo a corpo nesse uso. Além disso, magias do grupo Zanjen contam como magias de Patrulheiro para aprender, ler e conjurar; ao conjurar uma magia Zanjen, recebe seu Bônus de Santo da Espada como se fosse um Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPES RASTREADORES",
        "level": 3,
        "page": 118,
        "text": "Quando atinge com arma um alvo que ainda não seja seu Inimigo Favorito e ao menos um dos dados de dano da arma obtiver o resultado máximo, o alvo passa a ser considerado seu Inimigo Favorito por 1 minuto, mas apenas para ataques feitos com aquela mesma arma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MULTIFOCO",
        "level": 7,
        "page": 118,
        "text": "Você pode se concentrar simultaneamente em duas magias à distância como se fossem uma só. Sempre que precisar realizar um teste de concentração, faz apenas uma rolagem para ambas, e ambas têm sucesso ou falham juntas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MIRA DE ÁGUIA",
        "level": 11,
        "page": 118,
        "text": "Na primeira vez em cada turno que errar um ataque à distância, pode rolar um novo d20 e substituir o resultado original. Além disso, armas à distância e de arremesso podem ser usadas até seu alcance longo como se esse fosse o alcance normal.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPREMO DO CAÇADOR",
        "level": 15,
        "page": 118,
        "text": "Você obtém acerto crítico com 18, 19 ou 20 no d20. Quando isso ocorrer, pode adicionar um Dado de Favor adicional ao dano, além do primeiro concedido por Crítico do Caçador.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-ranger-night-slayer",
    "classId": "ranger",
    "name": "Matador Noturno",
    "originalName": "Night Slayer",
    "aliases": [
      "Night Slayer"
    ],
    "desc": "Um caçador das trevas e das criaturas que nelas encontram seu habitat.",
    "sourcePage": 118,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "118–119",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "EMBOSCADA SOMBRIA",
        "level": 3,
        "page": 118,
        "text": "Enquanto não estiver surpreso em combate, pode emboscar inimigos desprevenidos. Adicione seu Dado de Favor à iniciativa. Em seu primeiro turno, seu deslocamento aumenta em 1,5 m × seu bônus de proficiência e seu movimento não provoca ataques de oportunidade. Se realizar a ação Atacar, faz um ataque adicional como parte dela, e esse ataque causa um dado de dano da arma adicional.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MATADOR DO CREPÚSCULO",
        "level": 3,
        "page": 119,
        "text": "Escolha monstruosidades, espíritos ou mortos-vivos; o tipo escolhido torna-se automaticamente um Inimigo Favorito adicional. Você também recebe visão no escuro a 18 m. Se já possuir visão no escuro, seu alcance aumenta em 18 m ou passa a 36 m, o que resultar maior.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FLECHA TERRÍVEL",
        "level": 7,
        "page": 119,
        "text": "Quando atingir com arma uma criatura que seja um de seus Inimigos Favoritos permanentes, pode gastar um espaço de magia de Patrulheiro para fazer o ataque ignorar Limiares de Dano e causar dano adicional igual a 1d12 × o nível do espaço gasto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SEMPRE ALERTA",
        "level": 7,
        "page": 119,
        "text": "Escolha Inteligência, Sabedoria ou Carisma. Você ganha proficiência na salvaguarda escolhida.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "COMPENSAÇÃO",
        "level": 11,
        "page": 119,
        "text": "Quando errar um ataque com arma contra um alvo, pode usar sua ação bônus para realizar um ataque adicional contra ele. Esse ataque adiciona seu Bônus de Favor à jogada de ataque.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "EVASÃO SOMBRIA",
        "level": 11,
        "page": 119,
        "text": "Quando for atingido por um ataque com arma de uma fonte que possa ver, use sua reação e gaste um uso de Véu da Natureza para fazê-lo errar. Você então fica invisível até o início de seu próximo turno. Se usar esta característica ou Véu da Natureza enquanto estiver em escuridão ou meia-luz, pode também teleportar-se como parte da mesma ação para um espaço a até 9 m que esteja em escuridão ou meia-luz.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "BESTA NAS SOMBRAS",
        "level": 15,
        "page": 119,
        "text": "Você pode tratar como Inimigo Favorito qualquer criatura que esteja em escuridão, ou que esteja em meia-luz e não possua visão no escuro.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-rogue-shinobi",
    "classId": "rogue",
    "name": "Shinobi",
    "originalName": "Shinobi",
    "aliases": [
      "Shinobi"
    ],
    "desc": "Um mestre do combate desleal que emprega venenos com eficiência mortal.",
    "sourcePage": 119,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "119–120",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ARMA ENVENENADA",
        "level": 3,
        "page": 119,
        "text": "Quando atinge uma criatura com um ataque que qualificaria para Ataque Furtivo, independentemente de usar o dano de Ataque Furtivo, pode injetar um veneno mortal. O alvo faz salvaguarda de Constituição contra uma CD baseada em Destreza ou Constituição. Em falha, fica envenenado por 1 minuto e repete a salvaguarda no fim de cada turno, encerrando em sucesso. Enquanto envenenado dessa forma, sofre no início de cada turno dano de veneno igual a 1d4 × a quantidade de dados de Ataque Furtivo que você possui. Se falhar na salvaguarda mas for imune a envenenado, sofre em vez disso dano ácido igual ao seu dano de Ataque Furtivo. Usos por Descanso Longo iguais ao bônus de proficiência; recupera um uso ao completar Descanso Curto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ASSASSINATO VERSÁTIL",
        "level": 3,
        "page": 119,
        "text": "Ataques com qualquer arma corpo a corpo de uma mão podem receber seu dano de Ataque Furtivo como se a arma tivesse as propriedades leve ou acuidade, mesmo se possuir versátil, desde que esteja sendo empunhada com uma mão.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REVERSÃO SOBRENATURAL",
        "level": 9,
        "page": 119,
        "text": "Quando usa Esquiva Sobrenatural para reduzir o dano de um ataque, também pode escolher uma opção: ficar invisível até o início de seu próximo turno; ou realizar um ataque com arma contra a fonte do ataque, se ela estiver ao alcance e você puder vê-la.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "EVASÃO",
        "level": 13,
        "page": 119,
        "text": "Quando fizer qualquer salvaguarda que normalmente reduza dano à metade, sofre nenhum dano em um sucesso e metade do dano em uma falha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SUBSTITUIÇÃO DE FUMAÇA",
        "level": 17,
        "page": 120,
        "text": "Quando sofrer um acerto crítico ou for reduzido a 0 PV por um ataque ou efeito e não estiver incapacitado, role 1d100. Com 20 ou menos, substitui seu corpo por um simulacro que se desfaz em fumaça, fica completamente imune ao ataque ou efeito e seu corpo real teleporta-se para um espaço desocupado à sua escolha a até 9 m. Uma vez por Descanso, pode decidir que essa rolagem de d100 seja automaticamente 1. Você recupera esse uso sempre que rola iniciativa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-rogue-whimchaser",
    "classId": "rogue",
    "name": "Caçador de Caprichos",
    "originalName": "Whimchaser",
    "aliases": [
      "Whimchaser"
    ],
    "desc": "Um ladino que vive como deseja, guiado momento a momento pela própria sorte.",
    "sourcePage": 120,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "120–121",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CARA OU COROA",
        "level": 3,
        "page": 120,
        "text": "Você possui usos de Cara ou Coroa iguais ao número de dados de Ataque Furtivo que possui, recuperados no Descanso Longo; também recupera um uso no Descanso Curto. Quando falha ou erra uma jogada de ataque ou salvaguarda, pode gastar um uso para rolar outro d20. Com 11 ou mais, acerta o ataque ou passa na salvaguarda automaticamente; se for ataque, ele também qualifica automaticamente para Ataque Furtivo caso ainda não o tenha usado no turno. Com 10 ou menos, falha automaticamente e fica lento até o início de seu próximo turno, não podendo usar Cara ou Coroa nesse período. Se falhar dessa forma, o uso não é gasto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SORTE ARROGANTE PURA",
        "level": 3,
        "page": 120,
        "text": "Enquanto não usar armadura, pode calcular sua CA como 10 + modificador de Destreza + modificador de Carisma. Enquanto usar essa CA, pode usar Carisma no lugar de Destreza nas jogadas de ataque e dano com armas e pode fazer salvaguardas de Carisma no lugar de salvaguardas de Destreza, ainda contando como Destreza para efeitos como Evasão.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO APRIMORADO (ACASO)",
        "level": 9,
        "page": 120,
        "text": "Com armas à distância ou armas com as propriedades leve ou acuidade, você obtém acerto crítico com 19 ou 20 no d20. Se usar Cara ou Coroa e o novo d20 cair dentro de seu intervalo de crítico, o acerto automático também é crítico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SORRISO VENCEDOR",
        "level": 9,
        "page": 121,
        "text": "Você ganha proficiência em salvaguardas de Carisma.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ENXERGAR ATRAVÉS DAS CIRCUNSTÂNCIAS",
        "level": 13,
        "page": 121,
        "text": "Quando ataca com arma à distância ou com uma arma de acuidade ou leve e o ataque não tem desvantagem, pode adicionar ao dano seu modificador de Destreza ou Carisma, à sua escolha, além do modificador já aplicado normalmente.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO SUPERIOR (ACASO)",
        "level": 17,
        "page": 121,
        "text": "Sob as mesmas condições de Crítico Aprimorado (Acaso), você obtém acerto crítico com 18, 19 ou 20 no d20. Esse intervalo também conta como seu intervalo de crítico para Cara ou Coroa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-rogue-wordless-knife",
    "classId": "rogue",
    "name": "Lâmina Sem Palavras",
    "originalName": "Wordless Knife",
    "aliases": [
      "Wordless Knife"
    ],
    "desc": "Um usuário de adagas psíquicas silenciosas que causa dano explosivo e subversivo.",
    "sourcePage": 121,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "121",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "SÁBIO DA OBSERVAÇÃO",
        "level": 3,
        "page": 121,
        "text": "Você ganha proficiência em Percepção e Intuição e Especialização em uma delas. Se já possuir Especialização em ambas, ganha proficiência em outra perícia à sua escolha.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ADAGAS DO PENSAMENTO",
        "level": 3,
        "page": 121,
        "text": "Quando realiza a ação Atacar, pode manifestar um par de adagas de energia psíquica quase invisíveis e atacar com elas. Elas funcionam como armas simples corpo a corpo com as propriedades leve e arremesso, alcance normal de 18 m e sem alcance longo. Em acerto, causam 1d6 + seu modificador de Destreza de dano psíquico; o dado aumenta para d8 no 8º nível de ladino e d10 no 14º. Depois de atacar com elas como parte da ação Atacar, pode usar ação bônus para fazer ataques adicionais com essas adagas, em quantidade máxima igual à metade de seu bônus de proficiência. Qualquer característica que exija adaga ou espada curta pode usar estas adagas para satisfazer o requisito.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO EXPONENCIAL",
        "level": 9,
        "page": 121,
        "text": "A cada vez que atingir o mesmo alvo em seu turno, o menor resultado necessário no d20 para obter crítico contra ele diminui em 1: de 20 para 19, depois 18 e assim por diante. O intervalo volta ao normal no fim de qualquer turno em que não o atingir novamente, quando atingir uma nova criatura ou quando obtiver um crítico. Se obtiver crítico com um resultado 15 ou menor no d20, não pode aplicar Ataque Furtivo naquele ataque.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PENSAMENTOS REFINADOS",
        "level": 13,
        "page": 121,
        "text": "Suas Adagas do Pensamento ganham alcance longo de arremesso de 36 m e bônus de aprimoramento igual à metade de seu bônus de proficiência, arredondado para baixo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CRÍTICO DE AMPLA FAIXA",
        "level": 17,
        "page": 121,
        "text": "A ampliação do intervalo de crítico de Crítico Exponencial passa a ser cumulativa entre todos os alvos e não se perde ao atingir uma nova criatura; ela vale contra todas as criaturas que você acertar. Ataque Furtivo também pode ser usado em qualquer acerto crítico, mesmo se o resultado do d20 for 15 ou menor.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DUPLO COMPLETO",
        "level": 17,
        "page": 121,
        "text": "Quando um alvo estiver dentro do alcance normal de suas Adagas do Pensamento, você pode projetar junto dele uma duplicata sombria e quase translúcida de seu corpo inteiro para realizar em seu lugar ataques corpo a corpo com as adagas, desaparecendo depois. Se usar a duplicata para atacar criaturas enquanto você próprio estiver adjacente a elas, conta como seu próprio aliado para satisfazer Ataque Furtivo. A duplicata não pode ativar itens não passivos e só pode atacar com Adagas do Pensamento.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-sorcerer-graveblood",
    "classId": "sorcerer",
    "name": "Sangue Sepulcral",
    "originalName": "Graveblood",
    "aliases": [
      "Graveblood"
    ],
    "desc": "Um arcanista inato que obtém poder de sua ligação com a morte e com os mortos.",
    "sourcePage": 122,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "122",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FEITIÇARIA NECRÓTICA",
        "level": 1,
        "page": 122,
        "text": "Todas as magias de Necromancia contam como estando na lista de Feiticeiro para você ao aprender, ler e conjurar magias. Uma vez por Descanso, pode conjurar sem espaço uma magia de Necromancia que conheça em um nível igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "RESISTÊNCIA NEGATIVA",
        "level": 1,
        "page": 122,
        "text": "Sempre que sofreria dano necrótico, reduza esse dano em uma quantidade igual ao seu nível de feiticeiro + 5.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CONJURAÇÃO BLASFEMA",
        "level": 6,
        "page": 122,
        "text": "Quando conjura qualquer magia que cause dano, pode gastar 1 Ponto de Feitiçaria para converter todo o dano da magia em dano necrótico. A conversão persiste para qualquer dano que a magia causar em turnos futuros.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PESO MORTO",
        "level": 6,
        "page": 122,
        "text": "Enquanto houver um cadáver a até 3 m, ele se anima para protegê-lo. Ataques contra você têm desvantagem e você tem vantagem em salvaguardas contra efeitos hostis.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FORTITUDE SOMBRIA",
        "level": 14,
        "page": 122,
        "text": "Quando for reduzido a 0 PV e sempre que iniciar o turno com 0 PV, role 1d100. Se o resultado for igual ou inferior a 10 + seu nível de feiticeiro, você imediatamente recupera 1 PV em vez de morrer ou deixa de estar morrendo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CEMITÉRIO AMBULANTE",
        "level": 18,
        "page": 122,
        "text": "Você exerce três influências sobre cadáveres.\n\nAGARRÃO DOS MORTOS. Como ação, gaste 3 Pontos de Feitiçaria para animar brevemente todos os cadáveres de que tenha ciência numa esfera de 12 m de raio centrada num ponto que veja a até 18 m. Cada cadáver pode atacar uma criatura dentro de seu alcance corpo a corpo, e uma mesma criatura só pode ser alvo de um desses cadáveres. Faça uma única jogada de ataque mágico corpo a corpo e aplique-a a todos os alvos; cada acerto causa 3d10 + seu modificador de Carisma de dano necrótico e, se o alvo for do mesmo tamanho que o cadáver atacante ou menor, ele fica restringido até o início de seu próximo turno. Ao usar a característica, pode também gastar um espaço de magia para aumentar o dano em 1d10 por nível do espaço.\n\nFONTE DE MAGIA DO SENHOR DOS TÚMULOS. Ao conjurar qualquer magia que normalmente se origine de você, pode fazê-la originar-se de um cadáver que veja a até 36 m.\n\nVIGIAS SOMBRIOS. Como ação bônus, projete seus sentidos em um cadáver cuja existência conheça a até 150 m. Até o início do próximo turno, vê e ouve através dele usando seus próprios sentidos, mas não pode mover nem virar a cabeça do cadáver.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-sorcerer-lustblooded",
    "classId": "sorcerer",
    "name": "Sangue da Luxúria",
    "originalName": "Lustblooded",
    "aliases": [
      "Lustblooded"
    ],
    "desc": "Um feiticeiro que controla personalidades, tentação e desejo.",
    "sourcePage": 122,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "122–123",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ASAS DEMONÍACAS",
        "level": 1,
        "page": 122,
        "text": "Embora não possua toda a metamorfose de seus ancestrais, você pode manifestar à vontade suas asas infernais. Você recebe deslocamento de voo laborioso igual ao seu deslocamento base.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "META-ARDIL",
        "level": 1,
        "page": 122,
        "text": "Você aprende o truque amado miserável, que não conta no limite de truques conhecidos. Quando o conjura contra um alvo que não esteja enfeitiçado e acerta, ele deve passar numa salvaguarda de Sabedoria ou fica enfeitiçado por 1 minuto; enquanto isso, não pode escolher você diretamente como alvo de ataques ou efeitos nocivos. Repete a salvaguarda no fim de cada turno, encerrando em sucesso. Além disso, pode conjurar amado miserável como ação bônus gastando 1 Ponto de Feitiçaria.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ENCANTADOR DISTRAENTE",
        "level": 6,
        "page": 123,
        "text": "Quando você faria uma criatura ficar enfeitiçada, mas ela for imune à condição, em vez disso ela fica lenta. A criatura realiza os mesmos testes e salvaguardas que faria para resistir ou encerrar o enfeitiçamento, com a condição lenta substituindo funcionalmente enfeitiçado. Você não recebe benefícios que dependam especificamente de o alvo estar enfeitiçado, como controlar suas ações com dominar pessoa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SIFÃO MENTAL",
        "level": 6,
        "page": 123,
        "text": "No início de seu turno, se tiver uma ou mais criaturas enfeitiçadas ou tornadas lentas por Encantador Distraente, pode drenar a energia psíquica de quaisquer delas. Cada criatura escolhida sofre dano psíquico igual à metade de seu nível de feiticeiro, arredondado para cima, e você recebe PV temporários iguais ao dano total causado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ESCUDO INFERNAL",
        "level": 14,
        "page": 123,
        "text": "Enquanto não estiver incapacitado, pode manter uma aura semelhante a um escudo que repele ataques. Se ainda não estiver adicionando Carisma à sua CA por outra fonte, pode adicionar seu modificador de Carisma à CA.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARTES ARCANAS LASCIVAS",
        "level": 18,
        "page": 123,
        "text": "Você recebe as duas técnicas abaixo. Cada uma pode ser usada uma vez por Descanso sem custo; usos adicionais de qualquer uma antes disso custam 4 Pontos de Feitiçaria.\n\nCONSUMAÇÃO MORTAL. Como ação, produza os efeitos do truque amado miserável, mas em vez de um ataque mágico crie uma esfera de 6 m de raio centrada num ponto a até 18 m. Cada criatura à sua escolha na área faz salvaguarda de Carisma; em falha, é tratada como se tivesse sido atingida pelo truque. Dessa forma, o efeito não conta como magia nem efeito mágico, e falhar também conta como falhar na salvaguarda de Sabedoria para ficar enfeitiçado.\n\nVOZ DOMINANTE. Como ação, produza os efeitos de dominar monstro; não conta como efeito mágico. A salvaguarda de Sabedoria é substituída por Carisma. Se o alvo falhar, você pode manter concentração neste efeito ao mesmo tempo que em outras instâncias desta característica e em mais uma magia ou efeito normal que exija concentração.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-sorcerer-wittica",
    "classId": "sorcerer",
    "name": "Wittica",
    "originalName": "Wittica",
    "aliases": [
      "Wittica"
    ],
    "desc": "Um feiticeiro que extrai poder de antigas bruxas e projeta um segundo eu espiritual para auxiliá-lo.",
    "sourcePage": 124,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "124",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "VÉU DOS SONHOS",
        "level": 1,
        "page": 124,
        "text": "Enquanto estiver inconsciente, em transe ou a 0 PV, você projeta um protetor espiritual semelhante a uma versão fantasmagórica de si mesmo, seu Véu, num espaço adjacente. Ele desaparece quando iniciar seu turno desperto e com ao menos 1 PV.\n\nVIGÍLIA PROTETORA. Enquanto conjurado, o Véu concede bônus em Percepção igual ao seu bônus de proficiência e impede desvantagem em testes de Percepção. Enquanto estiver adjacente a você, ataques contra você têm desvantagem e criaturas não obtêm vantagem por você estar caído ou inconsciente.\n\nDEFENSOR SUBSTITUTO. Em seu turno, o Véu pode mover-se e conjurar magias usando seus recursos e estatísticas sob sua direção. Movimento e ações dele consomem seus próprios movimentos, ações e recursos. No fim de cada turno, ele retorna a um espaço adjacente a você. Não pode interagir fisicamente, usar armas ou itens materiais, não sofre nem recebe efeitos ou condições que afetem você, não pode sofrer dano e possui seus sentidos mais visão no escuro a 18 m.\n\nMALHA DE EXPERIÊNCIA. Quando desaparece, tudo que vivenciou é transmitido a você como se você próprio tivesse observado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FEITIÇARIA PRIMAL",
        "level": 1,
        "page": 124,
        "text": "Magias da lista de druida também contam como magias de feiticeiro para você, permitindo lê-las, aprendê-las e conjurá-las como magias de feiticeiro. Itens mágicos que exigem sintonização por um druida reconhecem você como tal.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PROJEÇÃO HOLÍSTICA",
        "level": 6,
        "page": 124,
        "text": "Como ação bônus, crie brevemente uma versão espiritual de uma arma empunhada por um aliado a até 9 m e faça imediatamente um ataque com ela, como se estivesse sintonizado e fosse proficiente. O ataque usa seu atributo de conjuração para ataque e dano e replica efeitos da arma que não exijam cargas ou outros itens, como bônus de aprimoramento, mas não munição mágica especial ou magias conjuradas por cargas. O ataque conta como mágico e, se necessário, produz munição mágica sem outros efeitos. PROJEÇÃO COMPLETA: ao gastar 2 Pontos de Feitiçaria com a ação bônus, faça ataques adicionais com essa arma em quantidade igual à metade de seu bônus de proficiência, além do primeiro; a arma é recarregada entre eles quando necessário.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CHAMADO DESVINCULADO",
        "level": 14,
        "page": 124,
        "text": "Quando uma criatura voluntária que veja a até 36 m sofre dano, use sua reação e gaste 1 Ponto de Feitiçaria para substituí-la por uma duplicata espiritual que recebe inofensivamente o dano; a criatura real é teleportada para um espaço desocupado a até 6 m de você e não é atingida. No início de seu próximo turno ou do turno do alvo, pode gastar outro Ponto de Feitiçaria para devolvê-la ao espaço de onde saiu, se ele ainda estiver desocupado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GRANDE DESUNIFICAÇÃO",
        "level": 18,
        "page": 124,
        "text": "Como ação, alcance as almas das criaturas à sua escolha numa esfera de 9 m de raio centrada num ponto a até 18 m. Cada alvo faz salvaguarda de Carisma. Em falha, seu espírito é arrancado do corpo para a área ao redor e ele fica atordoado por 1 minuto; criaturas imunes a atordoado que falhem sofrem 8d10 de dano psíquico em vez disso. Um alvo atordoado repete a salvaguarda no fim de cada turno e com vantagem sempre que sofre dano, encerrando em sucesso. Quem obtiver sucesso em qualquer salvaguarda contra esta característica fica imune a ela por 1 hora. Não afeta construtos, espíritos nem mortos-vivos. Pode usar uma vez por Descanso; usos adicionais custam 4 Pontos de Feitiçaria.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-sword-saint-retia-way-of-the-beast-slayer",
    "classId": "sword-saint-retia",
    "name": "Caminho do Matador de Bestas",
    "originalName": "Way of the Beast Slayer",
    "aliases": [
      "Way of the Beast Slayer"
    ],
    "desc": "Um caçador de monstruosidades, bestas, alienígenas e criaturas de fora do mundo.",
    "sourcePage": 125,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "125",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: MATADOR",
        "level": 3,
        "page": 125,
        "text": "Você recebe o Estilo de Luta Matador.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 125,
        "text": "Você recebe as seguintes Técnicas de Foco.\n\nMATADOR DE BESTAS. Ao atingir uma besta, monstruosidade ou aberração com ataque de arma corpo a corpo, pode gastar Pontos de Foco até metade de seu bônus de proficiência, arredondado para cima, mínimo 1. Para cada ponto gasto, causa 2d6 de dano adicional do mesmo tipo da arma.\n\nAPOSTA DO CAÇADOR. Quando tiver vantagem ou desvantagem numa jogada de ataque ou salvaguarda e ambos os d20 forem 10 ou mais, ou ambos forem menores que 10, pode gastar 1 Foco para transformar a rolagem em acerto ou sucesso automático.\n\nMÉTODO CONHECIDO. Quando vir uma criatura sofrer dano ao qual seja resistente, use reação e gaste 1 Foco para identificar a resistência e desenvolver uma contramedida. Por 1 minuto, quando você causar àquele alvo o mesmo tipo de dano, ele sofre o dano normalmente, ignorando a resistência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "KIT DO CAÇADOR SOMBRIO",
        "level": 6,
        "page": 125,
        "text": "Como ação, pode produzir os efeitos de arma infundida sem espaço nem concentração, mas por apenas 10 minutos. Usos por Descanso Longo iguais ao seu bônus de proficiência. Ao fazê-lo, pode gastar Pontos de Foco até seu bônus de proficiência para aumentar o nível efetivo da magia em 1 por ponto. Produzir o efeito novamente encerra qualquer uso anterior desta característica, e a arma só recebe os benefícios enquanto estiver sendo empunhada por você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "REFINAMENTO AGUÇADO",
        "level": 11,
        "page": 125,
        "text": "Escolha uma perícia para ganhar proficiência e outra para ganhar Especialização. Em ambas, pode usar Sabedoria no lugar do atributo normalmente associado, representando domínio intuitivo dessas habilidades.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TODOS SÃO PRESAS",
        "level": 14,
        "page": 125,
        "text": "Quando atingir um alvo com sua Arma Santa sintonizada, ele sempre qualifica para Matador de Bestas, independentemente do tipo de criatura. Além disso, quando usar a técnica, o dano é calculado como se tivesse gasto o dobro dos Pontos de Foco realmente gastos; os pontos virtuais extras ignoram o limite inicial da técnica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TORNAR-SE A BESTA",
        "level": 17,
        "page": 125,
        "text": "Depois de dedicar-se à caça de todas as bestas, você perde parte de sua humanidade. Seu tipo de criatura deixa de ser humanoide ou os tipos de sua raça e passa a ser besta. Você também se torna proficiente em todas as salvaguardas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "RELÍQUIA DO SANTO",
        "page": 125,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Calibrehound."
      }
    ]
  },
  {
    "id": "bbb-sword-saint-retia-way-of-besheth",
    "classId": "sword-saint-retia",
    "name": "Caminho de Besheth",
    "originalName": "Way of Besheth",
    "aliases": [
      "Way of Besheth"
    ],
    "desc": "Um guerreiro que controla o poder das asas e segue os ensinamentos de um deva.",
    "sourcePage": 125,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "125–126",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: PROFICIÊNCIA",
        "level": 3,
        "page": 125,
        "text": "Você recebe o Estilo de Luta Proficiência (Duas Mãos) de Lyre’s Guide to Retia.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 126,
        "text": "Você aprende as seguintes Técnicas de Foco.\n\nÂNCORA DE VENDAVAL. Ao atingir com ataque corpo a corpo uma criatura no máximo uma categoria de tamanho maior que você, ela faz salvaguarda de Força. Em falha, pode gastar 1 Foco para puxá-la ou empurrá-la para um espaço desocupado a até 3 m de você.\n\nSANTIFICAR. Como ação bônus, gaste 1 Foco para recompor-se e remover 1 nível de exaustão ou uma quantidade de Fadiga de Combate igual à metade de seu bônus de proficiência.\n\nCORRENTE DE VENTO. Ao realizar um ataque com arma corpo a corpo, gaste 1 Foco para aumentar seu alcance a 9 m. Até o fim do turno, todos os ataques com a mesma arma podem usar esse alcance e continuam contando como ataques corpo a corpo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ESTILO DE LUTA AVANÇADO",
        "level": 6,
        "page": 126,
        "text": "Seu Estilo de Luta Proficiência (Duas Mãos) avança um estágio. Se não puder avançar mais, você recebe um novo Estilo de Luta à sua escolha disponível ao Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORRENTE PROTETORA",
        "level": 6,
        "page": 126,
        "text": "Ventos fortes envolvem você. Ataques à distância contra você ou contra qualquer aliado dentro do alcance de sua arma têm desvantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CORPO DO DEVA DO VENDAVAL",
        "level": 11,
        "page": 126,
        "text": "Você tem resistência a dano de força e deslocamento de voo laborioso igual ao dobro de seu deslocamento, sustentado por asas translúcidas de ar. Como ação bônus, pode gastar 3 Foco para manifestar essas asas numa forma dourada física; por 1 minuto, recebe deslocamento de voo normal igual ao seu deslocamento base.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "VÓRTICE VIVO",
        "level": 14,
        "page": 126,
        "text": "Enquanto empunha sua Arma Santa, ela causa um dado de dano da arma adicional como dano de força e seus ataques com ela são tratados como se estivessem sempre sob o efeito da Técnica de Foco Corrente de Vento.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PUNIÇÃO DA PENA DOURADA",
        "level": 17,
        "page": 126,
        "text": "Como ação bônus ou no lugar de um ataque com arma, crie um vendaval radiante numa esfera de 9 m de raio centrada num ponto que veja a até 9 m. Cada alvo faz salvaguarda de Destreza; criaturas voando ou flutuando têm desvantagem. Em falha, sofre 4d10 de dano de força + 4d10 radiante e é arremessado para um espaço desocupado à sua escolha a até 9 m da posição original. Em sucesso, sofre metade e não é movido. Só pode usar uma vez por turno. Um uso por Descanso é gratuito; usos adicionais custam 4 Foco.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "RELÍQUIA DO SANTO",
        "page": 125,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Espiral de Tyrest (Tyrest’s Coil)."
      }
    ]
  },
  {
    "id": "bbb-sword-saint-retia-way-of-the-butterfly",
    "classId": "sword-saint-retia",
    "name": "Caminho da Borboleta",
    "originalName": "Way of the Butterfly",
    "aliases": [
      "Way of the Butterfly"
    ],
    "desc": "Herdeiros das técnicas de uma antiga ordem de espadachins que se tornaram fantasmas.",
    "sourcePage": 127,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "127",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "ESTILO DE LUTA: MANEJADOR DE ARTE",
        "level": 3,
        "page": 127,
        "text": "Você recebe o Estilo de Luta Manejador de Arte.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 127,
        "text": "Você recebe as técnicas abaixo. Quando outros Caminhos de Devoção permitirem escolher técnicas de outros Caminhos, estas técnicas não podem ser escolhidas.\n\nFONTE SOMBRIA. Ao atingir uma criatura com ataque de arma, gaste 1 Foco para forçá-la a salvaguarda de Constituição. Em falha, seus olhos são cortados e ela fica cega até o fim de seu próximo turno.\n\nBORBOLETA PLANADORA. Como ação bônus, gaste 2 Foco para ganhar por 1 minuto deslocamento de voo laborioso (pairar) igual ao deslocamento base; a mesma ação bônus pode ativar esse voo.\n\nTONS MUTÁVEIS. Como ação bônus, gaste 1 Foco para produzir em si os efeitos de invisibilidade.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MOVIMENTO FANTASMAGÓRICO",
        "level": 6,
        "page": 127,
        "text": "Enquanto se move, seu corpo torna-se etéreo e fantasmagórico. Você atravessa espaços de outras criaturas sem custo adicional e ataques de oportunidade contra você têm desvantagem. Se entrar no espaço ocupado de outra criatura e isso normalmente provocaria um ataque de oportunidade, a presença física daquela criatura impede que o ataque seja realizado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NULIFICAÇÃO MÁGICA",
        "level": 11,
        "page": 127,
        "text": "Você tem vantagem em salvaguardas contra efeitos mágicos. Se obtiver sucesso, é completamente ignorado pelos efeitos: não sofre dano nem efeitos resultantes, exceto alterações do ambiente, como as criadas por emaranhar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARMA CAÍDA",
        "level": 14,
        "page": 127,
        "text": "Na primeira vez em cada turno que sua Arma Santa sintonizada atingir um determinado alvo, causa dano necrótico adicional igual a 1d8 + metade de seu nível de Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PASSOS DO ESPÍRITO",
        "level": 17,
        "page": 127,
        "text": "Você recebe deslocamento de teleporte igual ao seu deslocamento base e não produz som ao se mover, independentemente do tipo de movimento. Além disso, seu deslocamento de voo laborioso (pairar) dobra.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "RELÍQUIA DO SANTO",
        "page": 127,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Manto da Borboleta Carmesim (Mantle of the Crimson Butterfly)."
      }
    ]
  },
  {
    "id": "bbb-sword-saint-retia-way-of-rust",
    "classId": "sword-saint-retia",
    "name": "Caminho da Ferrugem",
    "originalName": "Way of Rust",
    "aliases": [
      "Way of Rust"
    ],
    "desc": "Um espadachim que coexiste com um yokai que se alimenta de metal e ferrugem.",
    "sourcePage": 128,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "128",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "GUME DA EROSÃO",
        "level": 3,
        "page": 128,
        "text": "Quando reduzir uma criatura hostil a 0 PV com um ataque com arma ou obtiver um acerto crítico com ela, recebe um bônus cumulativo de +2 nas jogadas de dano subsequentes feitas com a mesma arma até o fim do turno e pode usar sua ação bônus para realizar com ela uma quantidade de ataques igual à metade de seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÉCNICAS DE FOCO",
        "level": 3,
        "page": 128,
        "text": "Você aprende as seguintes Técnicas de Foco.\n\nDESINTOXICAR. Em seu turno, gaste 1 Foco para encerrar em si um efeito que restauração menor pudesse remover, ou 4 Foco para um efeito removível por restauração maior. Pode usar mesmo incapacitado, mas não inconsciente.\n\nDEFLEXÃO EXEMPLAR. Como reação quando um ataque com arma visível o acerta, gaste 1 Foco para reduzir à metade o dano do ataque.\n\nSURTO TEMÍVEL. Ao usar Surto do Dragão, pode projetar uma aura de medo que atinge cada criatura a até 6 m que possa ver ou ouvir você. Cada uma faz salvaguarda de Sabedoria ou fica amedrontada por 1 minuto, repetindo a salvaguarda no fim de cada turno. Em sucesso, encerra e torna-se imune ao efeito por 24 horas. Criaturas que o considerem aliado têm vantagem nessas salvaguardas.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FERRUGEM CELULAR",
        "level": 6,
        "page": 128,
        "text": "Você tem resistência a dano necrótico e de veneno e vantagem em salvaguardas para resistir a envenenado. Além disso, recebe Especialização em todos os testes de atributo baseados em Força, inclusive testes de Força que não usem perícia.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ARMAMENTO DE SANGUE COBREADO",
        "level": 11,
        "page": 128,
        "text": "Você pode realizar ataques com arma como se estivesse usando qualquer arma corpo a corpo metálica mundana escolhida no momento, criando uma cópia de material semelhante a cobre tingido de sangue. A arma tem bônus de aprimoramento igual à metade de seu bônus de proficiência, arredondado para baixo, e é mágica; causa um dado de dano adicional necrótico; e, se for alvo de qualquer magia ou efeito, pode destruí-la imediatamente para fazer o efeito resolver-se sem consequência. A cópia é destruída após cada ataque e, por isso, não mantém o bônus cumulativo de Gume da Erosão.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SUPERERODIR",
        "level": 14,
        "page": 128,
        "text": "Uma vez por turno para cada opção abaixo, ao fazer um ataque com arma, pode usá-la.\n\nGOLPE DE PODER ERODIDO. Ao atacar com arma metálica não mágica, deixe o yokai consumir parte dela: role 1d6 e some ao ataque e ao dano; depois, a arma sofre penalidade permanente de -1 nas jogadas de dano. Quando a penalidade alcançar metade do resultado máximo de seu maior dado de dano, a arma é destruída. Se nunca a tiver erodido antes, pode destruí-la de uma vez para rolar 2d6 em vez de 1d6. Em armas de adamantina, os d6 tornam-se d8. Não funciona com Armamento de Sangue Cobreado.\n\nDEVORADOR DE AÇO. Se atingir uma criatura usando equipamento metálico não mágico, escolha uma peça e force salvaguarda de Destreza. Em falha, ela recebe -1: armadura reduz seu bônus de CA; arma reduz suas jogadas de dano. Uma arma é destruída conforme Golpe de Poder Erodido; armadura é destruída se seu bônus de CA chegar a 0.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "METAL INFINITO",
        "level": 17,
        "page": 128,
        "text": "Uma vez por Descanso Longo, pode produzir os efeitos de domínio zanjen sem espaço de magia. Se falhar num teste de concentração para mantê-lo, pode gastar 1 Foco para obter sucesso em vez disso.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "references": [
      {
        "title": "RELÍQUIA DO SANTO",
        "page": 128,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
        "text": "Fios de Corrosão (Corrosion Threads)."
      }
    ]
  },
  {
    "id": "bbb-warlock-the-all-seeing",
    "classId": "warlock",
    "name": "O Onividente",
    "originalName": "The All-Seeing",
    "aliases": [
      "The All-Seeing"
    ],
    "desc": "Um agente de uma entidade que procura alterar o destino, como um djinn ou mestre conceitual.",
    "sourcePage": 130,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "130",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "A FORTUNA FAVORECE",
        "level": 1,
        "page": 130,
        "text": "Quando fizer uma jogada de ataque, teste de atributo ou salvaguarda e o resultado do d20 for igual ou inferior ao seu bônus de proficiência, pode rerrolar o d20 e deve manter o novo resultado.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NEGAÇÃO",
        "level": 6,
        "page": 130,
        "text": "Você possui usos de Negação representados por uma quantidade de d4 igual à metade de seu nível de bruxo, arredondado para cima. Quando uma criatura a até 9 m fizer uma jogada de ataque, teste de atributo ou salvaguarda, pode gastar um ou mais usos, rolar os dados e somar ou subtrair o total da rolagem. Se uma criatura no alcance rolar 1 ou 20 natural, também pode gastar um uso para forçá-la a rerrolar e manter o novo resultado. Você recupera todos os usos no Descanso Longo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "NEGAÇÃO MAIOR",
        "level": 10,
        "page": 130,
        "text": "Seus dados de Negação passam de d4 para d6, e você recupera metade dos usos gastos sempre que completa um Descanso Curto.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "VISÃO VERDADEIRA",
        "level": 14,
        "page": 130,
        "text": "Você recebe visão verdadeira a 9 m.\n\nINVOCAÇÕES MÍSTICAS EXCLUSIVAS DO ONIVIDENTE.\n\nALTERAR DESTINO (pré-requisito: bruxo 12º nível). Uma vez por Descanso Longo, pode gastar um espaço de Magia de Pacto para produzir os efeitos de fortuna/falha como se o espaço fosse de 7º nível, sem componentes materiais.\n\nNEGAR FRACASSO (pré-requisito: bruxo 9º nível). Em vez do uso normal, pode gastar uma Negação para conceder vantagem a uma de suas próprias jogadas de ataque, testes ou salvaguardas.\n\nCRÍTICO MÁGICO. Seus ataques mágicos obtêm crítico com 19 ou 20 no d20 e, em críticos, causam um dado de dano adicional.\n\nCRÍTICO MÁGICO SUPERIOR (pré-requisitos: bruxo 18º nível e Crítico Mágico). Seus ataques mágicos obtêm crítico com 18, 19 ou 20.\n\nNEGAÇÃO SUPREMA (pré-requisito: bruxo 15º nível). Sempre que gastar exatamente um uso de Negação contra uma criatura, esse dado torna-se d10 em vez de d6; se gastar vários usos, continuam d6.\n\nTREINAMENTO DE VALOR (pré-requisito: bruxo 5º nível). Ao aprender novas magias de bruxo, pode escolher qualquer magia do grupo Artes do Valor como se estivesse na lista de bruxo.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Lista de Magias Expandida — O Onividente",
        "description": "Ao aprender uma nova magia de Bruxo, estas magias são tratadas como integrantes da lista de Bruxo para você.",
        "page": 130,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Bênção; Sorte do Chacal"
          },
          {
            "level": "2º",
            "spells": "Augúrio; Arma da Fortuna"
          },
          {
            "level": "3º",
            "spells": "Confluência Banal; Palavra de Poder: Infortúnio"
          },
          {
            "level": "4º",
            "spells": "Glamour do Deva; Invisibilidade Maior"
          },
          {
            "level": "5º",
            "spells": "Modificar Memória; Reencarnação"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-warlock-the-phantasmal",
    "classId": "warlock",
    "name": "O Fantasmagórico",
    "originalName": "The Phantasmal",
    "aliases": [
      "The Phantasmal"
    ],
    "desc": "Um beneficiário arcano do poder de um fantasma, cuja própria existência torna-se espectral.",
    "sourcePage": 131,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "131",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CORPO FANTASMA",
        "level": 1,
        "page": 131,
        "text": "Você adquire propriedades espectrais e pode tornar-se seletivamente intangível. Ao conjurar uma magia usando espaço de Magia de Pacto, fica imune a dano contundente, perfurante e cortante até o início de seu próximo turno. Pode atravessar espaços de outras criaturas sem custo extra, desde que termine o turno num espaço desocupado; caso contrário, é empurrado ao último espaço desocupado. Recebe deslocamento de voo laborioso (pairar) igual ao seu deslocamento base e não precisa comer, beber nem respirar.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "VISAGEM INQUIETANTE",
        "level": 6,
        "page": 131,
        "text": "Seu patrono projeta uma imagem de si ao seu redor, invisível exceto a criaturas com visão verdadeira ou capazes de ver invisíveis. Na primeira vez em cada turno que uma criatura tentar realizar uma ação hostil que escolha você como alvo estando a uma distância igual a 3 m × metade de seu nível de bruxo, ela faz salvaguarda de Sabedoria contra sua CD de magia. Em falha, fica amedrontada por você até o início do próximo turno e não pode escolhê-lo como alvo de ataques durante esse período.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DA MINHA PRÓPRIA CARNE",
        "level": 10,
        "page": 131,
        "text": "Você pode sacrificar a própria vitalidade para aprimorar ações. Quando fizer uma jogada de ataque, teste de atributo ou salvaguarda, pode gastar um Dado de Vida de bruxo, rolá-lo sem modificador de Constituição e somá-lo ao resultado. Quando falharia num teste de concentração por dano ou distração, pode gastar um Dado de Vida de bruxo para manter a concentração; depois disso, não pode perdê-la involuntariamente até o início de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FORMA EXISTENCIAL",
        "level": 14,
        "page": 131,
        "text": "Seu corpo se torna ainda mais semelhante ao de um espírito. Você recebe resistência a todo dano contundente, perfurante e cortante. Quando usa ação bônus para ativar seu voo laborioso (pairar), recebe também deslocamento de teleporte de igual valor até o fim do uso.\n\nINVOCAÇÕES MÍSTICAS EXCLUSIVAS DO FANTASMAGÓRICO.\n\nSACRIFÍCIO APRIMORADO (pré-requisito: bruxo 12º nível). Ao rolar um Dado de Vida para Da Minha Própria Carne, pode rolar d10 em vez do dado normal e recupera PV iguais a duas vezes seu modificador de Constituição.\n\nGOLPE DO HABITANTE (pré-requisitos: Pacto da Lâmina, bruxo 7º nível). A projeção de Visagem Inquietante pode empunhar uma réplica de sua arma de pacto. Ao realizar Atacar, pode fazer ataques corpo a corpo com a arma contra alvos a até 9 m como se estivesse adjacente. Ao conjurar magia com espaço de pacto, pode também realizar ataques com a arma através da projeção contra criaturas a até 9 m e/ou alvos da magia, em quantidade máxima igual à metade de seu bônus de proficiência; armas corpo a corpo ignoram seu alcance normal.\n\nVISAGEM DE PESADELO (pré-requisito: bruxo 7º nível). Se uma criatura falhar contra Visagem Inquietante mas for imune a amedrontado, tem desvantagem em ataques contra você até o início do próximo turno; quem falha também sofre dano psíquico igual ao seu nível de bruxo.\n\nUM COM A NÉVOA (pré-requisitos: Pacto do Manto, bruxo 9º nível). Enquanto estiver ao menos levemente obscurecido, inclusive em meia-luz, conta como invisível para criaturas que não possam vê-lo claramente.\n\nCORAÇÃO RECOMPOSTO (pré-requisito: bruxo 15º nível). Como ação bônus, uma vez por Descanso Longo, recupera metade de seus PV máximos e um espaço de Magia de Pacto gasto.\n\nDISSONÂNCIA ESPECTRAL (pré-requisito: bruxo 5º nível). Como ação bônus, fica invisível até o início do próximo turno. Usos por Descanso iguais ao bônus de proficiência; pode gastar dois usos para conjurar invisibilidade apenas em si.\n\nMÁSCARA DO TERROR. Quando um efeito seu deveria amedrontar uma criatura imune à condição, ela sofre terror pelo mesmo período: tem desvantagem em ataques, salvaguardas e testes de atributo contra aquilo que a amedrontaria. Salvaguardas subsequentes de Sabedoria para resistir ao medo/terror tornam-se salvaguardas de Inteligência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ],
    "tables": [
      {
        "title": "Lista de Magias Expandida — O Fantasmagórico",
        "description": "Ao aprender uma nova magia de Bruxo, estas magias são tratadas como integrantes da lista de Bruxo para você.",
        "page": 131,
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit",
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
            "spells": "Comando; Raio Guiador"
          },
          {
            "level": "2º",
            "spells": "Augúrio; Raio Lunar"
          },
          {
            "level": "3º",
            "spells": "Eviscerar; Sequestrar Persona"
          },
          {
            "level": "4º",
            "spells": "Conjurar Espírito Fantasma; Invisibilidade Maior"
          },
          {
            "level": "5º",
            "spells": "Animar Objetos; Mão Suprema"
          }
        ]
      }
    ]
  },
  {
    "id": "bbb-warlock-the-saint-spirit",
    "classId": "warlock",
    "name": "O Espírito do Santo",
    "originalName": "The Saint Spirit",
    "aliases": [
      "The Saint Spirit"
    ],
    "desc": "Um guerreiro que canaliza as habilidades de um mestre espiritual da lâmina.",
    "sourcePage": 133,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "133",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "CONCESSÃO DE HABILIDADE",
        "level": 1,
        "page": 133,
        "text": "Você ganha proficiência com armaduras leves e médias e aprende o truque cabo cruzado, que não conta no limite de truques de bruxo conhecidos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "PROFICIÊNCIA COM MAGIAS ZANJEN",
        "level": 1,
        "page": 133,
        "text": "Em vez de uma lista expandida comum, todas as magias do grupo Zanjen contam como estando na lista de bruxo para você. Ao conjurar qualquer magia Zanjen, trate seus níveis de bruxo como níveis de Santo da Espada para os efeitos de Bônus de Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CONCESSÃO FÍSICA",
        "level": 6,
        "page": 133,
        "text": "Seus PV máximos aumentam em 12. Depois disso, cada vez que ganhar um nível de bruxo, seus PV máximos aumentam em mais 2.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CONCESSÃO MENTAL",
        "level": 10,
        "page": 133,
        "text": "Enquanto não estiver empunhando um escudo, recebe bônus em todas as salvaguardas igual à metade de seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "MAESTRIA REIVINDICADA",
        "level": 14,
        "page": 133,
        "text": "Quando não possuir nenhum espaço de Magia de Pacto e obtiver um acerto crítico contra uma criatura hostil, ou reduzi-la a 0 PV com dano que exija uma jogada de ataque, recupera um espaço de Magia de Pacto.\n\nINVOCAÇÕES MÍSTICAS EXCLUSIVAS DO ESPÍRITO DO SANTO.\n\nCRÍTICO ENEGRECIDO (pré-requisito: bruxo 5º nível). Ataques feitos como parte da conjuração de uma magia obtêm crítico com 19 ou 20; quando isso ocorrer, role um dado de dano adicional.\n\nTÉCNICA DO DISCÍPULO. Uma vez por Descanso, conjure sem espaço uma magia Zanjen de 5º nível ou inferior que tenha aprendido; ela é conjurada no nível base.\n\nCRÍTICO DE MAESTRIA (pré-requisitos: bruxo 15º nível e Crítico Enegrecido). Os ataques cobertos por Crítico Enegrecido obtêm crítico com 18, 19 ou 20.\n\nCRUZ INVERSA. Pode conjurar cabo cruzado como ação ou ação bônus, mas não de ambas as formas no mesmo turno. Quando o conjura como ação bônus, não adiciona modificador de atributo ao dano de nenhum ataque que acertar.\n\nINFUSÃO DO OUTRO MUNDO (pré-requisito: bruxo 7º nível). Uma vez por Descanso Longo, produza os efeitos de arma infundida sem espaço, num nível igual ao de seus espaços de pacto e ignorando o Bônus de Santo da Espada. Os tipos de dano disponíveis são psíquico, radiante ou necrótico. Se possuir Pacto da Lâmina, o uso recarrega em qualquer Descanso.\n\nLÂMINAS REPULSORAS (pré-requisitos: Pacto do Manto, bruxo 5º nível). Seus usos gratuitos de escudo concedidos pelo Pacto tornam-se escudo de lâminas.\n\nGOLPES SUPERIORES (pré-requisito: bruxo 5º nível). Ao conjurar uma magia que exija jogada de ataque, some metade de seu bônus de proficiência às jogadas de ataque.\n\nMULTIFOCO ZANJEN (pré-requisito: bruxo 9º nível). Pode concentrar-se em qualquer número de magias Zanjen simultaneamente, além de sua concentração normal; todos os efeitos de concentração usam a mesma rolagem e têm sucesso ou falham juntos.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-wizard-imbuer",
    "classId": "wizard",
    "name": "Imbuidor",
    "originalName": "Imbuer",
    "aliases": [
      "Imbuer"
    ],
    "desc": "Um mago que usa magia para reproduzir as técnicas de combatentes marciais da lâmina.",
    "sourcePage": 135,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "135",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "MANEJADOR ILUMINADO",
        "level": 2,
        "page": 135,
        "text": "Você ganha proficiência com armaduras leves, médias e todas as armas marciais. Aprende o truque cabo cruzado, que não conta no limite de truques de mago conhecidos. Além disso, quando conjura uma magia de mago, até o início de seu próximo turno o dano que sofre de cada ataque com arma é reduzido por seu modificador de Inteligência + a soma dos níveis de todos os espaços de magia que gastar nesse intervalo, incluindo o espaço da magia que ativou a característica.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "FÓRMULA DA ESPADA",
        "level": 2,
        "page": 135,
        "text": "Todas as magias do grupo Zanjen contam como estando na lista de mago, permitindo aprendê-las e conjurá-las como magias de mago.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TÉCNICA DE AUTOAPRIMORAMENTO",
        "level": 6,
        "page": 135,
        "text": "Uma vez por turno, quando conjura uma magia que exija espaço de magia, pode realizar um ataque com arma usando uma arma com a qual seja proficiente. Esse ataque recebe bônus na jogada de ataque e de dano igual ao nível do espaço gasto e conta como mágico.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "TECELÃO ZANJEN ESPECIALISTA",
        "level": 10,
        "page": 135,
        "text": "Quando conjura uma magia Zanjen com efeito de Bônus de Santo da Espada, você qualifica para esse bônus como se fosse um Santo da Espada.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "GOLPE DA NATUREZA DA ESPADA",
        "level": 14,
        "page": 135,
        "text": "Você pode conjurar cabo cruzado como ação bônus, mas não pode conjurá-lo também como ação no mesmo turno.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-wizard-sign-seeker",
    "classId": "wizard",
    "name": "Buscador de Sinais",
    "originalName": "Sign Seeker",
    "aliases": [
      "Sign Seeker"
    ],
    "desc": "Um adivinho e mestre em prever mudanças iminentes do destino.",
    "sourcePage": 135,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "135–136",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "FLUXO DO DESTINO",
        "level": 2,
        "page": 135,
        "text": "Quando um alvo de uma de suas magias de mago teria vantagem nas salvaguardas contra ela, em vez disso faz essas salvaguardas com desvantagem.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ESPECIALIDADES PREDITIVAS",
        "level": 2,
        "page": 135,
        "text": "Ao aprender novas magias de mago, todas as magias de Adivinhação e todas as magias do grupo Artes do Valor contam como estando na lista de mago para você.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SORTE CEGA",
        "level": 6,
        "page": 135,
        "text": "Você não pode ser surpreendido em combate e adiciona seu bônus de proficiência às jogadas de Iniciativa.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "VIDENTE DOTADO",
        "level": 10,
        "page": 136,
        "text": "Quando conjura uma magia de mago do grupo Artes do Valor ou da escola de Adivinhação usando espaço de magia, trate a magia como se fosse conjurada um nível acima do espaço gasto, até no máximo 9º nível.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DOBRAR DESTINO E FORTUNA",
        "level": 14,
        "page": 136,
        "text": "Uma vez por Descanso, pode conjurar fortuna/falha sem espaço nem componentes. Quando conjura essa magia em seu turno, ou qualquer outra magia de Adivinhação ou Artes do Valor, pode imediatamente conjurar como parte da mesma ação um truque com tempo de conjuração de 1 ação.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  },
  {
    "id": "bbb-wizard-sin-sect-magus",
    "classId": "wizard",
    "name": "Mago da Seita do Pecado",
    "originalName": "Sin Sect Magus",
    "aliases": [
      "Sin Sect Magus"
    ],
    "desc": "Um arcanista necromântico auxiliado por um servo morto-vivo fortalecido.",
    "sourcePage": 136,
    "source": {
      "title": "Somnus Domina — Blade, Bone, & Benefit",
      "pages": "136",
      "chapter": "Capítulo X: Subclasses"
    },
    "features": [
      {
        "title": "LEITOR DO CÓDICE",
        "level": 2,
        "page": 136,
        "text": "Escolha Valores Sangrentos, Palavras Seladas ou Moralismos Desvinculados. As magias do grupo escolhido e do Códice Pecaminoso contam como estando na lista de mago para você, permitindo lê-las, aprendê-las e conjurá-las. Além disso, pode preparar um número adicional de magias desses dois grupos igual ao seu bônus de proficiência.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "SERVO MORTO-VIVO ETERNO",
        "level": 2,
        "page": 136,
        "text": "Uma vez por Descanso, produza os efeitos de conjurar assistente morto-vivo sem concentração, espaço ou materiais, como se fosse conjurado em um nível igual ao seu bônus de proficiência. Ao fazê-lo, pode escolher uma característica adicional de Níveis Superiores além da quantidade normalmente permitida.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ELEMENTOS DA NÃO-MORTE",
        "level": 6,
        "page": 136,
        "text": "Você tem resistência a dano necrótico e seus PV máximos não podem ser reduzidos por efeitos produzidos por criaturas ou magias.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "DISTRIBUIÇÃO CRUEL",
        "level": 10,
        "page": 136,
        "text": "Enquanto tiver ao menos um Assistente Morto-Vivo invocado por conjurar assistente morto-vivo, quando sofrer dano pode transferir qualquer parte dele para um de seus assistentes. Você não sofre o dano transferido; o assistente também não o sofre como dano, mas seus PV atuais são simplesmente reduzidos pela quantidade transferida. Não pode transferir para um assistente mais dano do que os PV que ele ainda possui.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "ASSISTENTE SECUNDÁRIO",
        "level": 10,
        "page": 136,
        "text": "Quando produzir os efeitos de conjurar assistente morto-vivo por Servo Morto-Vivo Eterno, ou conjurá-la normalmente, pode gastar um espaço de magia de nível igual ou superior ao nível em que o efeito foi produzido para criar, como parte da mesma magia, um segundo assistente idêntico ao primeiro.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      },
      {
        "title": "CATÁLOGO DE DESEJOS MORTOS",
        "level": 14,
        "page": 136,
        "text": "Uma vez por Descanso, pode conjurar qualquer magia de Necromancia para a qual possua o espaço e os materiais necessários, mesmo sem conhecê-la ou prepará-la. Quando faz isso, a magia passa a ser tratada como preparada até seu próximo Descanso. Ela também é conjurada como se estivesse dois níveis acima do espaço usado, até no máximo 9º nível.",
        "sourceTitle": "Somnus Domina — Blade, Bone, & Benefit"
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  for (const item of additions) {
    if (!window.GRIMORIO_SUBCLASSES.some(existing => existing.id === item.id)) window.GRIMORIO_SUBCLASSES.push(item);
  }
})();
