'use strict';

(function () {
  const additions = [
  {
    "id": "tasha-alquimista",
    "classId": "artificer",
    "name": "Alquimista",
    "desc": "Um Alquimista é um especialista em combinar reagentes para produzir efeitos místicos. Alquimistas usam suas criações para dar vida e para drená-la. A alquimia é a mais antiga das tradições do artífice, e sua versatilidade há muito tem sido valorizada em tempos de guerra e de paz.",
    "sourcePage": 13,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "13–15",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PROFICIÊNCIA COM FERRAMENTAS",
        "level": 3,
        "text": "Você adquire proficiência com suprimentos de alquimista. Se você já tem essa proficiência, você ganha proficiência com outro tipo de ferramentas de artesão a sua escolha.",
        "page": 13,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIAS DE ALQUIMISTA",
        "level": 3,
        "text": "Você sempre tem certas magias preparadas depois de alcançar alguns níveis específicos nesta classe, conforme mostrado na tabela Magias de Alquimista. Essas magias contam como magias de artífice para você, mas elas não são consideradas entre o número de magia de artífice que você prepara. Magias de Alquimista Nível de Artífice Magias 3º Palavra Curativa, Raio Nauseante 5º Esfera Flamejante, Flecha Ácida de Melf 9º Forma Gasosa, Palavra Curativa em Massa 13º Malogro, Proteção Contra a Morte 17º Névoa Mortal, Reviver os Mortos",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ELIXIR EXPERIMENTAL",
        "level": 3,
        "text": "Sempre que terminar um descanso longo, você pode magicamente produzir um elixir experimental em um frasco vazio que você tocar. Role na tabela Elixir Experimental para o efeito do elixir, que é desencadeado quando alguém o bebe. Usando uma ação, uma criatura pode beber o elixir ou administrá-lo a uma criatura incapacitada. Você pode criar elixires experimentais adicionais gastando um espaço de magia de 1º círculo ou superior para cada um. Ao fazer isso, você usa sua ação para criar o elixir em um frasco vazio que você tocar, e você escolhe o efeito do elixir da tabela Elixir Experimental. Criar um elixir experimental requer que você tenha suprimentos de alquimista com você, e qualquer elixir que você cria com este recurso dura até que seja consumido ou até o fim do seu próximo descanso longo. Quando você atinge níveis específicos nesta classe, você pode criar mais elixires no final de um descanso longo: dois no 6º nível e três no 15º nível. Role para cada efeito do elixir separadamente. Cada elixir precisa ter seu próprio frasco. Elixir Experimental D6 Efeito do Elixir 1 Cura. O consumidor recupera pontos de vida igual a 2d4 + o modificador de Inteligência do Artífice. 2 Celeridade. O deslocamento do consumidor é ampliado em 3m por 1 hora. 3 Resiliência. O consumidor ganha + l de CA por 10 minutos. 4 Ousadia. O consumidor pode rolar um d4 e adicionar o número rolado para toda jogada de ataque e salvaguarda que fizer durante o próximo minuto 5 Voo. O consumidor adquire deslocamento de voo de 3 metros por 10 minutos. 6 Transformação. O corpo do consumidor é transformado como se estivesse sob efeito da magia Alterar-se. O usuário determina a transformação causada pela magia, cujos efeitos duram 10 minutos.",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "SÁBIO ALQUÍMICO",
        "level": 5,
        "text": "Você desenvolveu um domínio magistral de substâncias químicas mágicas, aprimorando a cura e o dano que você causa através delas. Sempre que você conjura uma magia usando os suprimentos de alquimista como foco de conjuração, você ganha um bônus em uma rolagem daquela magia. Esta rolagem deve restaurar pontos de vida ou ser uma rolagem que provoca dano ácido, ígneo, necrótico ou venenoso e o bônus é igual ao seu modificador de Inteligência (mínimo de + l).",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "REAGENTES RESTAURADORES",
        "level": 9,
        "text": "Você pode incorporar reagentes restauradores em alguns de seus trabalhos: Sempre que uma criatura beber um elixir que você criou, a criatura ganha pontos de vida temporários iguais a 2d6 + seu modificador de Inteligência (mínimo de 1 ponto de vida temporário). Você pode conjurar Restauração Menor sem gastar espaços de magia e sem preparar a magia, desde que você use suprimentos de alquimista como o foco de conjuração. Você pode fazer isso uma quantidade de vezes igual ao seu modificador de Inteligência (mínimo de uma vez), e você recupera todos os usos dessa habilidade ao finalizar um descanso longo.",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAESTRIA QUÍMICA",
        "level": 15,
        "text": "Você foi exposto a tantos produtos químicos que eles representam pouco risco para você, que agora pode utilizá-los para remover certos malefícios rapidamente: Você ganha resistência a dano ácido e venenoso, e você é imune à condição envenenado. Você pode conjurar Restauração Maior e Cura Completa sem gastar um espaço de magia, sem preparar a magia, e sem componentes materiais, desde que você use suprimentos de alquimista como o foco de conjuração. Depois de conjurar qualquer uma das magias com esta característica, você não pode conjurar aquela magia dessa maneira novamente até que você termine um descanso longo",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias de Alquimista",
        "page": 14,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Artífice"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Palavra Curativa; Raio Nauseante"
          },
          {
            "level": "5º",
            "spells": "Esfera Flamejante; Flecha Ácida de Melf"
          },
          {
            "level": "9º",
            "spells": "Forma Gasosa; Palavra Curativa em Massa"
          },
          {
            "level": "13º",
            "spells": "Malogro; Proteção Contra a Morte"
          },
          {
            "level": "17º",
            "spells": "Névoa Mortal; Reviver os Mortos"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-armeiro",
    "classId": "artificer",
    "name": "Armeiro",
    "desc": "Um artífice que se especializou como um Armeiro modifica sua armadura para funcionar quase como uma segunda pele. A armadura é aprimorada para aguçar a magia do artífice, desencadear ataques potentes e gerar uma defesa formidável. O artífice se liga a esta armadura, tornando-se uno com ela mesmo enquanto a testa e refina suas capacidades mágicas.",
    "sourcePage": 14,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "14–16",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "FERRAMENTAS IDEAIS",
        "level": 3,
        "text": "Você ganha proficiência com armaduras pesadas. Você também ganha proficiência com ferramentas de ferreiro. Se você já tem proficiência com essa ferramenta, você ganha proficiência com outro tipo de ferramenta de artesão a sua escolha.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIAS DE ARMEIRO",
        "level": 3,
        "text": "Você sempre tem certas magias preparadas depois de alcançar alguns níveis específicos nesta classe, conforme mostrado na tabela Magias de Armeiro. Essas magias contam como magias de artífice para você, mas elas não são consideradas entre o número de magia de artífice que você pode preparar. Magias de Armeiro Nível de Artífice Magias 3º Mísseis Mágicos, Onda Trovejante 5º Reflexos, Despedaçar 9º Padrão Hipnótico, Relâmpago 13º Escudo Ardente, Invisibilidade Maior 17º Criar Passagem, Muralha de Energia",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ARMADURA ARCANA",
        "level": 3,
        "text": "Suas explorações metalúrgicas levaram você a fazer de sua armadura um canal para sua magia. Usando uma ação, você pode transformar uma armadura que esteja vestindo em uma Armadura Arcana, desde que você tenha ferramentas de ferreiro em mãos. Você ganha os seguintes benefícios ao usar esta armadura: Se a armadura normalmente tem um requisito de Força, a Armadura Arcana não tem esse requisito para você. Você pode usar a Armadura Arcana como um foco de conjuração para suas magias de artífice. A armadura se prende a você e não pode ser removida contra sua vontade. Ela também se expande para cobrir todo o seu corpo, embora você possa retrair ou implantar o elmo como uma ação bônus. A armadura substitui qualquer membro ausente, funcionando de forma idêntica ao membro que ela substitui. Você pode tirar ou vestir a armadura como uma ação. A armadura continua a ser uma Armadura Arcana até você vestir outra armadura ou morrer.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MODELO DE ARMADURA",
        "level": 3,
        "text": "Você pode personalizar sua Armadura Arcana. Quando você faz isso, escolha um dos seguintes modelos de armadura:Guardião ou Infiltrador. O modelo que você escolhe fornece benefícios especiais enquanto você o usa. Cada modelo inclui uma arma especial. Quando você ataca com essa arma, você pode adicionar seu modificador de inteligência, em vez do de Força ou Destreza, para as jogadas de ataque e dano. Você pode trocar o modelo da armadura sempre que terminar um descanso curto ou longo, desde que você tenha ferramentas de ferreiro em mãos. Guardião. Você projeta sua armadura para estar na linha de frente do conflito. Ela possui os seguintes recursos: Manoplas Trovejantes. Cada uma das manoplas da armadura conta como uma arma simples corpo a corpo, enquanto você não estiver segurando nada com ela, e ela provoca ld8 de dano trovejante em um acerto. Uma criatura atingida pela manopla tem desvantagem nas jogadas de ataque contra outros alvos exceto você até o início de seu próximo turno, uma vez que a armadura emite magicamente um pulso de distração quando a criatura ataca outra pessoa. Campo Defensivo. Com uma ação bônus, você pode ganhar pontos de vida temporários iguais ao seu nível nesta classe, substituindo quaisquer pontos de vida temporários que você já tenha. Você perde esses pontos de vida temporários se tirar a armadura. Você pode usar esta ação bônus um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos gastos quando terminar um descanso longo. Infiltrador. Você personaliza sua armadura para ações mais sutis. Ela possui os seguintes recursos: Lança-Relâmpagos. Um nódulo semelhante a uma gema aparece em um de seus punhos armadurados ou em seu peito (a sua escolha). Ele conta como uma arma simples de ataque à distância, com um alcance normal de 27 metros e um alcance longo de 90 metros, e provoca 1d6 de dano elétrico em um acerto. Uma vez em cada um de seus turnos, ao acertar uma criatura com essa arma, você pode causar ld6 de dano elétrico extra a esse alvo. Passos Energizados. Seu deslocamento aumenta em 1,5m. Campo de Amortecimento. Você tem vantagem em testes de Destreza (Furtividade). Se a armadura normalmente impõe desvantagem em tais testes, a vantagem e desvantagem cancelam uma a outra, como ocorre normalmente.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 5,
        "text": "Você pode atacar duas vezes em vez de uma sempre que você executa a ação de Ataque no seu turno.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MODIFICAÇÕES DA ARMADURA",
        "level": 9,
        "text": "Você aprende como utilizar suas infusões de artífice especificamente para modificar sua Armadura Arcana. Essa armadura agora conta como itens separados para os propósitos de sua característica Infundir Itens: armadura (a peça do peito), botas, elmo e a arma especial da armadura. Cada um desses itens pode conter uma de suas infusões, e as infusões são transferidas se você modificar o modelo da armadura através da característica Modelo de Armadura. Adicionalmente, o número máximo de itens que você pode ter infuso por vez aumenta em 2, mas esses itens extras devem ser parte de sua Armadura Arcana.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ARMADURA PERFEITA",
        "level": 15,
        "text": "Sua Armadura Arcana adquire benefícios adicionais com base em seu modelo, conforme listado abaixo. Guardião. Quando uma criatura Enorme ou menor dentro do seu campo de visão termina o turno a até 9 metros de você, você pode usar sua reação para magicamente obrigar a criatura a realizar uma salvaguarda de Força contra sua CD para magias, puxando a criatura por até 9 metros em direção a você para um espaço desocupado. Se você puxar o alvo para um espaço a menos de 1,5 metros de você, você poderá fazer um ataque corpo a corpo com arma contra ele como parte dessa reação. Você pode usar esta reação um número de vezes igual ao seu bônus de proficiência, e recupera todos os usos quando terminar um descanso longo. Infiltrador. Qualquer criatura que sofrer dano elétrico de seu Lança-Relâmpago brilha com luz mágica até o início de seu próximo turno. A criatura cintilante emite meia-luz em um raio de 1,5 metros, e tem desvantagem nas jogadas de ataque contra você, uma vez que a eletricidade o sacode se ele o atacar. Adicionalmente, a próxima jogada de ataque contra a criatura tem vantagem, e se esse ataque acertar, ela recebe ld6 de dano elétrico extra.",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias de Armeiro",
        "page": 15,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Artífice"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Mísseis Mágicos; Onda Trovejante"
          },
          {
            "level": "5º",
            "spells": "Reflexos; Despedaçar"
          },
          {
            "level": "9º",
            "spells": "Padrão Hipnótico; Relâmpago"
          },
          {
            "level": "13º",
            "spells": "Escudo Ardente; Invisibilidade Maior"
          },
          {
            "level": "17º",
            "spells": "Criar Passagem; Muralha de Energia"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-atirador",
    "classId": "artificer",
    "name": "Atirador",
    "desc": "Um atirador é especialista em usar magia para disparar energia, projéteis e explosões em um campo de batalha. Este poder destrutivo é valorizado pelos exércitos em guerras de muitos mundos diferentes. E quando a guerra passa, alguns membros desta especialidade procuram construir um mundo mais pacífico usando seus poderes para lutar contra as retomadas de conflitos. A viajante gnoma artífice Vi já falou claramente sobre fazer as coisas certas: “Já era hora de consertarmos as coisas em vez de explodir tudo para o inferno.”",
    "sourcePage": 16,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "16–18",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PROFICIÊNCIA COM FERRAMENTAS",
        "level": 3,
        "text": "Você adquire proficiência com ferramentas de carpinteiro. Se você já tem essa proficiência, você ganha proficiência com outro tipo de ferramentas de artesão a sua escolha.",
        "page": 16,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIAS DE ATIRADOR",
        "level": 3,
        "text": "Você sempre tem certas magias preparadas depois de alcançar níveis específicos nesta classe, conforme mostrado na tabela de Magias de atirador. Essas magias contam como magias de artífice para você, mas eles não contam para o número de magias de artífice que você prepara. Magias de Atirador Nível de Artífice Magias 3º Escudo, Onda Trovejante 5º Raio Ardente, Despedaçar 9º Bola de Fogo, Muralha de Vento 13º Tempestade Glacial, Muralha de Fogo 17º Cone de Frio, Muralha de Energia",
        "page": 16,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANHÃO MÍSTICO",
        "level": 3,
        "text": "Você aprendeu como criar um canhão mágico. Usando ferramentas de carpinteiro ou ferramentas de ferreiro, você pode realizar uma ação para criar magicamente um canhão pequeno ou minúsculo sobrenatural em um espaço desocupado em uma superfície horizontal a menos de 1,5 m de você. Um pequeno canhão sobrenatural ocupa seu espaço, e um minúsculo pode ser segurado em uma das mãos. Depois de criar um canhão, você não pode fazê-lo novamente até terminar um longo descanso ou até gastar um espaço de feitiço para criar um. Você pode ter apenas um canhão por vez e não pode criar um enquanto seu canhão estiver presente. O canhão é um objeto mágico. Independentemente do tamanho, o canhão tem uma CA de 18 e um número de pontos de vida igual a cinco vezes o seu nível de artífice. É imune a danos por veneno e danos psíquicos. Se ele for forçado a fazer um teste de habilidade ou teste de resistência, trate todos os seus valores de habilidade como 10 (+ O). Se o feitiço consertar for lançado sobre ele, ele recupera 2d6 pontos de vida. Ele desaparece se for reduzido a 0 pontos de vida ou após 1 hora. Você pode descartá-lo logo como uma ação. Ao criar o canhão, você determina sua aparência e se ele tem pernas. Você também decide qual é o tipo, escolhendo entre as opções na tabela Canhões Místicos. Em cada um de seus turnos, você pode realizar uma ação bônus para fazer com que o canhão seja ativado se você estiver a menos de 18 metros dele. Como parte da mesma ação bônus, você pode direcionar o canhão para caminhar ou subir até 15 pés para um espaço desocupado, desde que tenha pernas. Canhões Místicos Canhão Ativação LançaChamas O canhão exala fogo em uma área adjacente em Cone de 4,5 metros que você designar. Cada a criatura naquela área deve fazer um teste de resistência de Destreza contra seu teste de magia CD, levando 2d8 de dano de fogo em uma falha ou metade do dano em um teste bemsucedido. O fogo acende qualquer objeto inflamável na área que não esteja sendo usado ou carregado. Força de Balista Faça um ataque mágico de longo alcance, originando-se do canhão, em uma criatura ou objeto a 36 metros dele. Em um acerto, o alvo sofre 2d8 de dano de força e, se o alvo for uma criatura, ele é empurrado a até 1,5 metro de distância do canhão. Protetor O canhão emite uma explosão de energia positiva que concede a si mesma e a cada criatura de sua escolha a 3 metros dele um número de pontos de vida temporários igual a 1d8 + seu modificador de inteligência (mínimo + 1).",
        "page": 16,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ARMA DE FOGO ARCANA",
        "level": 5,
        "text": "Você sabe como transformar uma varinha, cajado ou vara em um arma de fogo arcana, um canal para seus feitiços destrutivos. Quando terminar um descanso longo, você pode usar as ferramentas do carpinteiro para esculpir símbolos especiais em uma varinha, cajado, ou vara e assim transformá-lo em sua arma de fogo arcana. Os símbolos desaparecem do objeto se você mais tarde esculpi-los em um item diferente. Caso não o faça os símbolos duram indefinidamente. Você pode usar sua arma de fogo arcana como um foco de feitiço para seus feitiços de artífice. Quando você lança um feitiço de artífice através da arma de fogo, role 1d8, e você ganhe um bônus igual a uma das jogadas de dano do feitiço para o número rolado.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANHÃO EXPLOSIVO",
        "level": 9,
        "text": "Cada canhão antigo que você cria é agora mais destrutivo: Todas as jogadas de dano do canhão aumentam em 1d8. Como uma ação, você pode comandar o canhão para detonar se você estiver a menos de 18 metros dele. Fazendo assim destrói o canhão e força cada criatura dentro de 20 pés para fazer um teste de resistência de Destreza jogue contra o seu feitiço save CD, sofrendo 3d8 de dano de força em uma falha ou metade do dano em um sucesso.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "POSIÇÃO FORTIFICADA",
        "level": 15,
        "text": "Você é um mestre em formar posições bem protegidas usando seu Canhão Místico: Você e seus aliados têm meia cobertura enquanto estiverem à 3 metros de um canhão que você cria com Canhão Místico, como resultado de um campo cintilante de magia proteção que o canhão emite. Agora você pode ter dois canhões ao mesmo tempo. Você pode criar dois com a mesma ação (mas não o mesmo slot de magia), e você pode ativar ambos eles com a mesma ação bônus. Você determina se os canhões são idênticos entre si ou diferentes. Você não pode criar um terceiro canhão enquanto você tem dois.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias de Atirador",
        "page": 16,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Artífice"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Escudo; Onda Trovejante"
          },
          {
            "level": "5º",
            "spells": "Raio Ardente; Despedaçar"
          },
          {
            "level": "9º",
            "spells": "Bola de Fogo; Muralha de Vento"
          },
          {
            "level": "13º",
            "spells": "Tempestade Glacial; Muralha de Fogo"
          },
          {
            "level": "17º",
            "spells": "Cone de Frio; Muralha de Energia"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-ferreiro-de-batalha",
    "classId": "artificer",
    "name": "Ferreiro de Batalha",
    "desc": "Os exércitos exigem proteção e alguém tem que consertar as coisas se as defesas falharem. Uma combinação de protetor e médico, um ferreiro de batalha é um especialista em defender os outros e em consertar material e pessoal. Para ajudar em seu trabalho, ferreiros de batalha são acompanhados por um defensor de aço, um companheiro protetor de sua própria criação. Muitos soldados contam histórias de quase morte antes de serem salvos por um ferreiro de batalha e seu defensor de aço.",
    "sourcePage": 17,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "17–19",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PROFICIÊNCIA COM FERRAMENTAS",
        "level": 3,
        "text": "Você adquire proficiência com ferramentas de ferreiro. Se você já tem essa proficiência, você ganha proficiência com outro tipo de ferramentas de artesão a sua escolha.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIAS DE FERREIRO DE BATALHA",
        "level": 3,
        "text": "Você sempre tem certas magias preparadas depois de atingir níveis específicos nesta classe, conforme mostrado na tabela de Magias do Ferreiro de Batalha. Essas magias contam como magias de artífice para você, mas eles não contam para o número de magias de artífice que você prepara. Magias de Ferreiro de Batalha Nível de Artífice Magias 3º Escudo, Heroísmo 5º Marca da Punição, Vínculo de Proteção 9º Aura de Vitalidade, Invocar Barragem 13º Aura de Pureza, Escudo de Fogo 17º Banimento Destruidor, Curar Ferimentos em Massa",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PRONTO PARA A BATALHA",
        "level": 3,
        "text": "Seu treinamento de combate e seus experimentos com magia valeram a pena de duas maneiras: Você ganha proficiência com armas marciais. Quando você ataca com uma arma mágica, você pode usar seu modificador de Inteligência, em vez do Modificador de Força ou Destreza, para jogadas de ataque e de dano.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DEFENSOR DE AÇO",
        "level": 3,
        "text": "Sua engenharia lhe trouxe um companheiro, um defensor de aço. Ele é amigável com você e seus companheiros, e obedece aos seus comandos. Veja as estatísticas de jogo dele no bloco de estatísticas Defensor de Aço, que usa seu bônus de proficiência (BP) em vários lugares. Você determina a aparência da criatura e se ele tem duas ou quatro pernas; sua escolha não tem efeito sobre as estatísticas de jogo. Em combate, o defensor compartilha sua contagem de iniciativa, mas o turno dele é imediatamente após o seu. Ele pode se mover e usar sua reação por conta própria, mas a única ação que realiza em seu turno é a ação de Esquiva, a menos que você utilize sua ação bônus para comandá-lo a realizar outra ação. Essa ação pode ser uma em seu bloco de estatísticas ou qualquer outra. Se você estiver incapacitado, o defensor pode realizar qualquer ação a sua escolha, não apenas a Esquiva. Se a magia Reparar for conjurada no defensor, ele recupera 2d6 pontos de vida. Se ele morreu dentro da última hora, você pode usar ferramentas de ferreiro como uma ação para revivê-lo, desde que você esteja a menos de 1,5 metros dele e gaste um espaço de magia de 1° círculo ou superior. O defensor retorna à vida após 1 minuto com todos os seus pontos de vida restaurados. No final de um descanso longo, você pode criar um novo defensor de aço se você tiver ferramentas de ferreiro com você. Se você já tiver um defensor de aço através dessa característica, o primeiro perece imediatamente. O defensor também perece se você morrer.",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 5,
        "text": "Você pode atacar duas vezes em vez de uma sempre que você executa a ação de Ataque no seu turno.",
        "page": 18,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PULSO ARCANO",
        "level": 9,
        "text": "Você aprendeu novas formas de canalizar energia arcana para ferir ou curar. Quando você atinge um alvo com um ataque com arma mágica ou seu defensor de aço atinge um alvo, você pode canalizar energia mágica através do ataque para criar um dos seguintes efeitos: Defensor de Aço Construto Médio Classe de Armadura 15 (Armadura Natural) Pontos de Vida 2 + seu modificador de inteligência + 5 vezes seu nível de artífice (o defensor tem um número de dados de vida, [d8s] igual ao seu nível nesta classe) Deslocamento 12m. FOR DES CON INT SAB CAR 14 (+2) 12 (+1) 14 (+2) 4 (-3) 10 (+0) 6 (-2) Salvaguardas DES 1 + BP, CON 2 + BP Perícias Atletismo 2 + BP, Percepção 0 + BP x 2 Imunidade a Dano Venenoso Imunidade a Condições Enfeitiçado, Exausto, Envenenado Sentidos Visão no escuro 18 m, Percepção Passiva 10 + (BP x 2) Idiomas Entende os idiomas que você fala Nível de Desafio — Bônus de Proficiência [BP] Igual ao seu bônus Vigilante O defensor não pode ser surpreso. Ações Laceração de Energia. Ataque com Arma Corpo a Corpo: seu modificador de ataques com magia para acertar, alcance 1,5 m, um alvo que você possa ver. Acerto: 1d8 + BP de dano de energia Reparar (3/dia). Os mecanismos mágicos dentro do defensor restauram 2d8 + BP pontos de vida para ele mesmo ou para um construto ou objeto a até 1,5m dele. Reações Defletir Ataque. O defensor impõe desvantagem na jogada de ataque de uma criatura a até 1,5m de distância que ele possa ver, desde que a jogada de ataque seja contra outra criatura que não o defensor. O alvo sofre 2d6 de dano extra de energia. Escolha uma criatura ou objeto que você possa ver a até de 9 metros do alvo. A energia de cura flui para o destinatário escolhido, restaurando 2d6 pontos de vida dele. Você pode usar essa energia um número de vezes igual ao seu modificador de Inteligência (mínimo de uma vez), mas você não pode fazer isso mais do que uma vez por turno. Você recupera todos os usos quando termina um descanso longo.",
        "page": 18,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DEFENSOR APRIMORADO",
        "level": 15,
        "text": "Seu Pulso Arcano e seu Defensor de Aço tornam-se mais poderosos: O dano extra e a cura do seu Pulso Arcano aumentam para 4d6. Seu defensor de aço ganha um bônus de +2 na CA. Sempre que seu defensor de aço usa seu Defletir Ataque, o atacante recebe dano de energia igual a ld4 + seu modificador de Inteligência.",
        "page": 19,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias de Ferreiro de Batalha",
        "page": 17,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Artífice"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Escudo; Heroísmo"
          },
          {
            "level": "5º",
            "spells": "Marca da Punição; Vínculo de Proteção"
          },
          {
            "level": "9º",
            "spells": "Aura de Vitalidade; Invocar Barragem"
          },
          {
            "level": "13º",
            "spells": "Aura de Pureza; Escudo de Fogo"
          },
          {
            "level": "17º",
            "spells": "Banimento Destruidor; Curar Ferimentos em Massa"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-trilha-da-besta",
    "classId": "barbarian",
    "name": "Trilha da Besta",
    "desc": "Bárbaros que caminham pela Trilha da Besta tiram sua fúria de uma centelha bestial que queima em suas almas. Essa besta irrompe no auge da fúria, transformando fisicamente o bárbaro. Tais bárbaros podem ser possuídos por um espírito primitivo ou serem descendentes de metamorfos. Você pode escolher a origem de seu poder feral ou determinar isso rolando na tabela de Origem da Besta. Origem da besta d4 Origem 1 Um de seus pais é um licantropo, e você herdou parte de sua maldição. 2 Você é descendente de um arquidruida e herdou a habilidade de mudar de forma parcialmente. 3 Um espírito feérico o presentou com a habilidade de adotar diferentes aspectos bestiais. 4 O espírito de um animal ancestral vive dentro de você, permitindo que trilhe esse caminho.",
    "sourcePage": 23,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "23–24",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "FORMA DA BESTA",
        "level": 3,
        "text": "Quando você entra em fúria, você pode se transformar, revelando o poder bestial que há dentro de você. Até que a fúria se encerre, você manifesta uma arma natural. Ela conta como uma arma simples de ataque corpo a corpo para você, e você adiciona seu modificador de Força às rolagens de ataque e dano quando ataca com ela, como normalmente. Você escolhe a forma da arma cada vez que entra em fúria: Mordida. Sua boca se transforma em um focinho bestial ou em grandes mandíbulas (a sua escolha). Isso provoca 1d8 de dano perfurante em um acerto. Uma vez por turno, quando você causa dano em uma criatura com essa mordida, você recupera uma quantia de pontos de vida igual ao seu modificador de proficiência, desde que você esteja com metade ou menos de seus pontos de vida totais no momento do acerto. Garras. Cada uma de suas mãos se transforma em uma pata com garras que você pode utilizar como arma caso suas mãos estejam livres. Isso provoca 1d6 de dano cortante em caso de acerto. Uma vez por turno, quando você atacar com suas garras usando a ação de Ataque, você pode realizar um ataque de garra adicional como parte da mesma ação. Cauda. Cresce uma cauda chicoteante e espinhosa em você, que causa 1d8 de dano perfurante em um acerto e que possui a propriedade de alcance. Se uma criatura a até 3m de você e que esteja em seu campo de visão o acerta com uma jogada de ataque, você pode utilizar a sua reação para golpear com sua cauda e rolar um d8, aplicando um bônus em sua CA equivalente ao valor rolado e fazendo com que o ataque potencialmente o erre.",
        "page": 23,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ALMA BESTIAL",
        "level": 6,
        "text": "O poder feral dentro de você aumenta, fazendo com que a arma natural da sua Forma Bestial conte como mágica para o propósito de superar resistências e imunidades a ataques e danos não-mágicos. Você também pode alterar sua forma para se adaptar aos seus arredores. Quando você finalizar um descanso curto ou longo, escolha um dos seguintes benefícios, que durará até que você termine seu próximo descanso, seja ele curto ou longo: Você adquire deslocamento de natação igual ao seu deslocamento terrestre, e você pode respirar debaixo da água Você ganha deslocamento de escalada igual ao seu deslocamento terrestre e você pode escalar superfícies difíceis, incluindo ficar de cabeça para baixo em tetos, sem a necessidade de realizar testes de habilidade. Quando você salta, você pode realizar um teste de Força (Atletismo) e ampliar seu salto por uma quantia de metros igual a um terço do resultado total. Você pode realizar esse teste especial apenas uma vez por turno",
        "page": 24,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "FÚRIA CONTAGIOSA",
        "level": 10,
        "text": "Quando você acerta uma criatura com suas armas naturais enquanto em fúria, a besta dentro de você pode amaldiçoar seu alvo com uma raiva descontrolada. O alvo deve ser bemsucedido em uma salvaguarda de Sabedoria (CD igual a 8 + seu modificador de Constituição + seu bônus de proficiência) ou sofrer um dos seguintes efeitos (a sua escolha): O alvo deve usar sua reação para realizar um ataque corpo a corpo contra outra criatura a sua escolha que você possa ver. O alvo recebe 2d12 de dano psíquico. Você pode usar essa característica um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos quando você terminar um descanso longo.",
        "page": 24,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CHAMADO DE CAÇA",
        "level": 14,
        "text": "A besta dentro de você torna-se tão poderosa que você pode espalhar sua ferocidade para os outros e adquirir resiliência através daqueles que se juntarem a sua caçada. Quando você entrar em fúria, você pode escolher uma quantia de outras criaturas voluntárias dentro da sua visão a até 9m de você igual ao seu modificador de Constituição (mínimo de uma criatura). Você ganha 5 pontos de vida temporários para cada criatura que aceitar essa característica. Até que a fúria se encerre, cada uma das criaturas escolhidas pode utilizar o seguinte benefício uma vez em cada um dos seus turnos: Quando a criatura acertar um alvo com uma jogada de ataque e provocar dano nele, a criatura pode rolar um d6 e ganhar um bônus no dado igual ao valor rolado. Você pode usar essa característica um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos ao terminar um descanso longo.",
        "page": 24,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-trilha-da-magia-selvagem",
    "classId": "barbarian",
    "name": "Trilha da Magia Selvagem",
    "desc": "Muitos lugares no multiverso fervilham com beleza, emoção intensa e rompantes de magia; Faéria, os Planos Superiores, e outros mundos de poder sobrenatural irradiam com tais forças e podem influenciar profundamente as pessoas. Como seres intensos, bárbaros são especialmente suscetíveis a essas influências imprevisíveis, com alguns deles sendo transformados pela magia. Estes bárbaros inundados pela magia seguem a Trilha da Magia Selvagem. Bárbaros elfos, tiferinos, aasimares, e genasi frequentemente seguem esse caminho, ansiosos por manifestar a magia transcendental de seus ancestrais.",
    "sourcePage": 24,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "24–26",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "SURTO SELVAGEM",
        "level": 3,
        "text": "A energia mágica remexendo-se dentro de você às vezes irrompe de seu corpo. Quando você entra em fúria, role na tabela de Magia Selvagem para determinar o efeito mágico produzido. Se o efeito exigir uma salvaguarda, a CD é igual a 8 + seu bônus de proficiência + seu modificador de Constituição. Magia Selvagem 1d8 Efeito 1 Tentáculos sombrios chicoteiam ao seu redor. Cada criatura a sua escolha em seu campo de visão e que esteja a até 9m de você deve realizar uma salvaguarda de Constituição ou sofre 1d12 de dano necrótico. Você também ganha 1d12 de pontos de vida temporários. 2 Você se teleporta a até 9m para um espaço desocupado que você possa ver. Até que sua fúria termine, você pode utilizar esse efeito novamente em cada um dos seus turnos com uma ação bônus. 3 Um espírito intangível, parecido com um flumph ou uma pixie (a sua escolha), aparece a até 1,5m de distância de uma criatura a sua escolha em seu campo de visão a até 9m de você. No final do turno atual, o espírito explode, e cada criatura a até 1,5m dele deve ser bem-sucedida em uma salvaguarda de Destreza ou sofre 1d6 de dano de energia. Até que sua fúria acabe você pode utilizar esse efeito novamente em cada um de seus turnos, invocando outro espírito com uma ação bônus. 4 A magia infiltra-se em uma arma a sua escolha que você esteja empunhando. Até que sua fúria termine, o tipo de dano da arma muda para energia e ela adquire as propriedades leve e arremesso, com um alcance normal de 6m e um alcance longo de 18m. Se a arma deixar a sua mão, ela reaparecerá empunhada no final do turno atual. 5 Sempre que uma criatura o acertar com uma jogada de ataque antes que sua fúria se encerre, essa criatura sofre 1d6 de dano de energia, conforme a magia chicoteia em retribuição 6 Até que sua fúria acabe, você é cercado por luzes protetoras multicoloridas; você ganha um bônus de +1 na CA, e enquanto estiverem a até 3m de você seus aliados também recebem o mesmo bônus. 7 Flores e vinhas temporariamente crescem ao seu redor; até que sua fúria acabe, o terreno a até 4,5m de você é considerado terreno difícil para os seus inimigos. 8 Um raio de luz é disparado a partir de seu peito. Outra criatura a sua escolha em seu campo de visão e que esteja a até 9m de você deve realizar uma salvaguarda de Constituição ou sofrerá 1d6 de dano radiante e ficará cega até o começo do seu próximo turno. Até que sua fúria se encerre, você pode utilizar este efeito novamente em cada um de seus turnos com uma ação bônus.",
        "page": 25,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PERCEPÇÃO MÁGICA",
        "level": 3,
        "text": "uma ação, você pode ampliar seus sentidos para notar a presença de concentração de magia. Até o final de seu próximo turno, você sabe a localização de qualquer magia ou item mágico a até 18m de você que não esteja sob cobertura total. Quando você sente uma magia, você também descobre de que escola ela é. Você pode usar essa característica um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos quando você terminar um descanso longo.",
        "page": 25,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "FORTALECIMENTO MÁGICO",
        "level": 6,
        "text": "Você pode domar sua magia selvagem para fortalecer a si mesmo ou a um companheiro. Usando uma ação, você pode tocar uma criatura (que pode ser você mesmo) e conferir um dos seguintes benefícios a sua escolha para a criatura tocada: Por 10 minutos, a criatura pode rolar um d3 sempre que fizer uma jogada de ataque ou teste de habilidade e adicionar o número rolado na jogada do d20. Role um d3. A criatura recupera um espaço de magia gasto de círculo igual ou menor ao valor rolado (a escolha da criatura). Uma vez que receba esse benefício, a criatura não poderá ser afetada por ele novamente até que termine um descanso longo. Você pode realizar essa ação um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos quando você terminar um descanso longo.",
        "page": 25,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "RETALIAÇÃO INSTÁVEL",
        "level": 10,
        "text": "Quando você estiver ameaçado durante a sua fúria, a mágica dentro de você pode escapar; imediatamente após você receber dano ou falhar em uma salvaguarda enquanto estiver em fúria, você pode utilizar a sua reação para jogar na tabela de Magia Selvagem e imediatamente produzir o efeito rolado. Esse efeito substitui seu efeito de Magia Selvagem atual.",
        "page": 25,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "SURTO CONTROLADO",
        "level": 14,
        "text": "Sempre que rolar na tabela de Magia Selvagem, você pode jogar duas vezes e escolher qual dos dois efeitos liberar. Se você rolar o mesmo número em ambos os dados, você pode ignorar o resultado e escolher qualquer efeito na tabela.",
        "page": 25,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-colegio-da-criacao",
    "classId": "bard",
    "name": "Colégio da Criação",
    "desc": "Os bardos acreditam que o cosmos é uma obra de arte – a criação dos primeiros dragões e deuses. Esse trabalho criativo incluiu harmonias que continuam a ressoar pela existência nos dias de hoje, um poder conhecido como Canção da Criação. Os bardos do Colégio da Criação recorrem a essa canção primordial por meio da dança, da música e da poesia, e seus professores compartilham esta lição: “Antes do sol e da lua, havia a Canção, e sua música despertou o primeiro amanhecer. Suas melodias encantaram as pedras e árvores de tal modo que algumas delas ganharam voz própria. E agora elas cantam também. Aprendam a Canção, alunos, e vocês também poderão ensinar as montanhas a cantar e dançar”. Anões e gnomos frequentemente incentivam seus bardos a se tornarem estudantes da Canção da Criação. E entre draconatos, a Canção da Criação é reverenciada, pois as lendas retratam Bahamut e Tiamat – os maiores dos dragões – como dois dos primeiros cantores da música.",
    "sourcePage": 26,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "26–28",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PARTÍCULA DE POTENCIAL",
        "level": 3,
        "text": "Sempre que você dá uma Inspiração de Bardo para uma criatura, você pode emitir uma nota da Canção da Criação para gerar partícula de potencial minúscula, que orbita a até 1,5m dessa criatura. A partícula é intangível e invulnerável, e dura até que o dado de Inspiração de Bardo seja perdido. Essa partícula se parece com uma nota musical, uma estrela, uma flor, ou outro símbolo de arte ou de vida a sua escolha. Quando a criatura utiliza o dado de Inspiração de Bardo, a partícula fornece um efeito adicional baseando-se se o dado beneficia um teste de habilidade, uma jogada de ataque, ou uma salvaguarda, como detalhado abaixo: Teste de Habilidade. Quando uma criatura rolar o dado de inspiração de Bardo para adicioná-lo a um teste de habilidade, a criatura pode fazer uma segunda rolagem desse dado de inspiração e escolher qual resultado deseja usar, conforme a partícula explode e emite centelhas multicoloridas e inofensivas por um instante. Jogada de Ataque. Imediatamente após a criatura rolar o dado de Inspiração de Bardo para adicioná-lo à sua jogada de ataque contra um alvo, a partícula de rompe estrondosamente. O alvo e cada criatura a até 1,5m dele que o bardo possa ver, a escolha do bardo, devem ser bemsucedidos em uma salvaguarda de Constituição contra a sua CD de magia ou sofrem dano trovejante equivalente ao número rolado no dado de Inspiração de Bardo. Salvaguarda. Imediatamente após a criatura rolar o dado de Inspiração de Bardo e adicioná-lo a sua salvaguarda, a partícula desvanece com o som de uma música suave, fazendo com que a criatura ganhe pontos de vida temporários igual ao número rolado no dado de Inspiração de Bardo, mais o modificador de Carisma do bardo (mínimo de 1 ponto de vida temporários).",
        "page": 27,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "EXECUÇÃO DA CRIAÇÃO",
        "level": 3,
        "text": "Como uma ação, você pode canalizar a magia da Música da Criação para criar um item não-mágico de sua escolha em um espaço desocupado a até 3m de você. O item deve surgir sobre uma superfície ou em um líquido capaz de contê-lo. O valor do item em peças de ouro não pode ser superior a 20 vezes o seu nível de bardo, e o item deve ser Médio ou menor. O item cintila suavemente, e uma criatura pode ouvir uma música tênue ao tocá-lo. O item criado desaparece após um número de horas igual ao bônus de proficiência do bardo. Para exemplo de itens que você pode criar, veja o capítulo sobre equipamentos no Livro do Jogador. Uma vez que tenha criado um item utilizando essa característica, você não pode fazer isso novamente até que termine um descanso longo, a menos que gaste um espaço de magia de 2º círculo ou superior para usar essa característica de novo. Você pode ter apenas um item criado por esta característica por vez; se você utilizar essa ação já tendo um item criado por esta habilidade, o primeiro desaparece imediatamente. O tamanho do item que você pode criar com essa característica aumenta em uma categoria de tamanho quando você chega no 6º nível (Grande) e novamente no 14º nível (Enorme).",
        "page": 27,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ESPETÁCULO ANIMADO",
        "level": 6,
        "text": "Como uma ação, você pode focar em um item não mágico Grande ou menor que você possa ver a até 9m de distância de você e animá-lo. O item animado utiliza o bloco de estatística do Item Dançante, que utiliza o seu bônus de proficiência (BP). O item é amigável a você e seus companheiros e obedece aos seus comandos. Ele vive por uma hora, até que seja reduzido a 0 pontos de vida, ou até que você morra. Em combate, o item compartilha a sua contagem de iniciativa, mas realiza o turno imediatamente após o seu. Ele pode se mover e usar sua reação por conta própria, mas a única ação que ele realiza em seu turno é a ação de Esquiva, a menos que você utilize a sua ação bônus em seu turno para ordenar que ele faça outra ação. Essa ação pode ser uma em seu bloco de estatísticas ou qualquer outra. Se você estiver incapacitado, o item pode realizar qualquer ação a sua escolha, e não apenas a Esquiva. Quando você utilizar sua característica de Inspiração de Bardo, você pode comandar o item como parte da mesma ação bônus utilizada para ela. Uma vez que tenha animado um item com essa característica, você não pode fazer isso novamente até que termine um descanso longo, a menos que gaste um espaço de magia de 3º círculo ou superior para isso. Você pode te apenas um item animado por esta característica por vez; se você usar essa ação e já tiver um item dançante por esta habilidade, o primeiro imediatamente se torna inanimado.",
        "page": 27,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CRESCENDO CRIATIVO",
        "level": 14,
        "text": "Quando você usa a sua característica de Execução da Criação, você pode criar mais de um item por vez. O número de itens é equivalente ao seu modificador de Carisma (mínimo de 2). Se você criar um item que faça esse número ser excedido, você escolhe qual dos itens criados previamente desaparece. Apenas um desses itens pode ser do tamanho máximo que você pode criar; o restante deve ser Pequeno ou Miúdo. Você não fica mais limitado ao valor em ouro ao criar itens com a característica de Execução da Criação.\n\nItem Dançante Construto Grande ou Menor Classe de Armadura 16 (Armadura Natural) Pontos de Vida 10 + 5 vezes seu nível de bardo Deslocamento 9m, Voo 9m (levitação) FOR DES CON INT SAB CAR 18 (+4) 14 (+2) 16 (+3) 4 (-3) 10 (+0) 6 (-2) Imunidade a Dano Venenoso, Psíquico. Imunidade a Condições Amedrontado, Enfeitiçado, Exausto, Envenenado. Sentidos Visão no escuro 18 m, Percepção Passiva Idiomas Entende os idiomas que você fala Nível de Desafio — Bônus de Proficiência [BP] Igual ao seu bônus. Forma Imutável. O item é imune a qualquer magia ou efeito que alteraria sua forma. Dança Irresistível. Quando uma criatura inicia seu turno a até 3m do item, o item pode ampliar ou reduzir (a sua escolha) o deslocamento dessa criatura em 3m até o final do turno, desde que o item não esteja incapacitado. Ações Batida energizada. Ataque corpo a corpo com arma: seu modificador de ataque de magia para acertar, alcance 1,5m, um alvo que você possa ver. Acerto: 1d10 + BP de dano de energia.",
        "page": 28,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-colegio-da-eloquencia",
    "classId": "bard",
    "name": "Colégio da Eloquência",
    "desc": "Adeptos do Colégio da Eloquência dominam a arte da oratória. Esses bardos usam uma mistura de lógica e jogos de palavras teatrais, conquistando céticos e detratores com argumentos lógicos e dedilhando as cordas do coração para apelar às emoções do público.",
    "sourcePage": 28,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "28–30",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "LÍNGUA PRATEADA",
        "level": 3,
        "text": "Você é o mestre em dizer a coisa certa no momento certo. Quando você realiza um teste de Carisma (Persuasão) ou Carisma (Enganação), você pode tratar um resultado de 9 ou menos no d20 como um 10.",
        "page": 29,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PALAVRAS DESCONCERTANTES",
        "level": 3,
        "text": "Você pode tecer palavras emaranhadas com magia que desconcertam uma criatura e faz com que duvide de si mesma. Como uma ação bônus, você pode gastar o uso de uma Inspiração de Bardo e escolher uma criatura a até 18m de você que você possa ver. Role o dado de Inspiração de Bardo. A criatura deve subtrair o valor dessa rolagem na próxima salvaguarda que fizer antes do começo do próximo turno do bardo.",
        "page": 29,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "INSPIRAÇÃO INFALÍVEL",
        "level": 6,
        "text": "Suas palavras inspiradoras são tão persuasivas que os outros se sentem compelidos ao sucesso. Quando uma criatura adiciona seu dado de Inspiração de Bardo em um teste de habilidade, jogada de ataque ou salvaguarda, e a rolagem falha, a criatura pode manter o dado de Inspiração.",
        "page": 29,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LÍNGUA UNIVERSAL",
        "level": 6,
        "text": "Você adquire a capacidade de fazer com que seu discurso seja compreensível para qualquer criatura. Como uma ação, escolha uma ou mais criaturas a até 18m de você, em uma quantia até o seu modificador de Carisma (mínimo de uma criatura). As criaturas escolhidas podem compreendê-lo magicamente, independente do idioma que você falar, por 1 hora. Uma vez que use essa característica, você não pode utilizála novamente até que termine um descanso longo, a menos que gaste um espaço de magia de qualquer círculo para ativála novamente.",
        "page": 29,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "INSPIRAÇÃO CONTAGIANTE",
        "level": 14,
        "text": "Quando você for bem-sucedido em inspirar alguém, o poder da sua eloquência agora pode se espalhar para outras pessoas. Quando uma criatura a até 18m de você adiciona um de seus dados de Inspiração de Bardo a um de seus testes de habilidade, jogada de ataque, ou salvaguarda e a rolagem é bem-sucedida, você pode usar sua reação para encorajar uma criatura diferente (que não seja você mesmo), que possa ouvi-lo e esteja a até 18m de você, dando um dado de inspiração de Bardo a ela sem gastar nenhum uso de sua característica de Inspiração de Bardo. Você pode usar essa reação um número de vezes igual ao seu modificador de Carisma (mínimo de um), e você recupera todos os usos dessa habilidade quando termina um descanso longo.",
        "page": 29,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-o-insondavel",
    "classId": "warlock",
    "name": "O Insondável",
    "desc": "Você mergulhou em um pacto com as profundezas. Uma entidade do oceano, do Plano Elemental da Água, ou de outro mar sobrenatural agora permite que você se utilize de seus poderes talássicos. Ele está somente te usando para aprender sobre os reinos terrestres, ou ele quer que você abra os portões do dilúvio e afogue o mundo? Talvez você tenha nascido em um culto geracional que venera o Insondável e sua prole. Ou você sofreu um naufrágio e estava à beira do afogamento quando o abraço de seu patrono ofereceu a você uma chance de viver. Qualquer que seja a razão do seu pacto, o mar e suas profundezas desconhecidas o chamam. Entidades das profundezas que podem ter empoderado o bruxo incluem krakens, elementais da água ancestrais, alucinações quase divinas sonhadas pelos kuo-toa, semideuses do povo do mar, e laias de megeras do mar.",
    "sourcePage": 31,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "31–33",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "LISTA EXPANDIDA DE MAGIAS",
        "level": 1,
        "text": "Quando você aprende uma magia de bruxo, o Insondável permite a escolha a partir de uma lista expandida de magias. As magias a seguir são adicionadas à sua lista de magias de bruxo. Lista Expandida de Magias do Insondável Círculo da Magia Magias 1º Criar ou Destruir Água, Onda Trovejante 2º Lufada de Vento, Silêncio 3º Nevasca, Relâmpago 4º Controlar Água, Invocar Elemental(apenas água) 5º Cone de Frio, Mão de Bigby (com a aparência de um tentáculo)",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "TENTÁCULO DAS PROFUNDEZAS",
        "level": 1,
        "text": "Você pode invocar magicamente um tentáculo espectral que golpeia seus inimigos. Com uma ação bônus, você cria um tentáculo de 3m de comprimento em um ponto dentro da sua visão a até 18m de você. O tentáculo dura 1 minuto ou até que você use esssa característica para criar outro tentáculo. Quando você cria um tentáculo, você pode realizar um ataque corpo a corpo com magia contra uma criatura a até 3m dele. Em um acerto, o alvo sofre 1d8 de dano gélido, e o deslocamento dele é reduzido em 3m até o começo do seu próximo turno. Quando você chega ao 10º nível nessa classe, o dano aumenta para 2d8. Com uma ação bônus em seu turno, você pode mover o tentáculo por até 9m e repetir o ataque. Você pode invocar o tentáculo um número de vezes igual ao seu bônus de proficiência, e recupera todos os usos ao terminar um descanso longo.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DOM DO MAR",
        "level": 1,
        "text": "Você adquire um deslocamento de natação de 12m, e você pode respirar debaixo da água.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ALMA OCEÂNICA",
        "level": 6,
        "text": "Você se sente ainda mais em casa nas profundezas. Você adquire resistência a dano gélido. Adicionalmente, quando você estiver completamente submerso, qualquer criatura que também estiver na mesma condição pode entender sua fala, e você pode entender a deles.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ESPIRAL GUARDIÃ",
        "level": 6,
        "text": "Seu tentáculo das profundezas pode defender a você e a outros, se posicionando entre vocês e a ameaça. Quando você ou uma criatura em seu campo de visão toma dano enquanto a até 3m do tentáculo, você pode usar sua reação para escolher uma dessas criaturas e reduzir o tano sofrido por ela em 1d8. Quando você chegar ao 10º nível nessa classe, o dano reduzido aumenta para 2d8.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "TENTÁCULOS ENREDANTES",
        "level": 10,
        "text": "Você aprende a magia Tentáculos Negros de Evard. Ela é considerada uma magia de bruxo para você, mas ela não conta contra o número de magias que você sabe. Você também pode conjurá-la uma vez sem necessitar de um espaço de magia, recuperando essa habilidade após terminar um descanso longo. Sempre que você conjura essa magia, a magia de seu patrono o inunda, fornecendo a você um número de pontos de vida temporários igual ao seu nível de bruxo. Além disso, nenhum dano pode quebrar sua concentração nessa magia.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MERGULHO NO INSONDÁVEL",
        "level": 14,
        "text": "Você pode abrir magicamente canais temporários para destinos aquáticos. Como uma ação, você pode se teletransportar e a até cinco outras criaturas dispostas em seu campo de visão que estejam a até 9m de você. Em meio a um turbilhão de tentáculos, todos vocês desaparecem e reaparecem a até 1,5km de distância em um corpo de água que você viu (do tamanho de uma lagoa ou maior) ou a até 9m dele, cada um de vocês aparecendo em um espaço desocupado a até 9m uns dos outros. Assim que usar essa característica, você não poderá usá-lo novamente até terminar um descanso curto ou longo.",
        "page": 32,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-o-genio",
    "classId": "warlock",
    "name": "O Gênio",
    "desc": "Você fez uma pacto com um dos mais raros tipos de gênios, um nobre. Tais entidades comandam vastos territórios nos Planos Elementais e possuem grande influência sobre gênios menores e criaturas elementais. Gênios nobres são diversos em suas motivações, mas a maioria é arrogande e detêm poderes que rivalizam com divindades menores. Eles se deleitam em virar o jogo contra os humanos, que às vezes vinculam os gênios em servidão, e rapidamente entram em pactos que expandem sua atuação. Você escolhe o tipo do seu patrono ou determina isso aleatoriamente, usando a tabela de Tipo de Gênio. Tipo de Gênio d4 Tipo de Gênio Elemento Dao Terra Djinni Ar Ifriti Fogo Marid Água",
    "sourcePage": 33,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "33–36",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "RECEPTÁCULO DO GÊNIO",
        "level": 1,
        "text": "Seu patrono o presenteia com um receptáculo mágico que lhe dá uma parcela do poder do gênio. O receptáculo é um objeto Minúsculo, e você pode usar isso como um foco de conjuração para suas magias de grupo. Você decide o que o objeto é, ou você pode determinar isso aleatoriamente jogando na tabela de Receptáculo do Gênio. Receptáculo do Gênio d6 Receptáculo Lâmpada de óleo Urna Anel com compartimento Garrafa com rolha Estatueta oca Lanterna ornamentada Enquanto estiver tocando o receptáculo, você pode usá-lo das seguintes maneiras: Descanso Engarrafado. Com uma ação, você pode desaparecer magicamente e entrar em seu receptáculo, que permanece no espaço que você deixou. O interior do receptáculo é um espaço extradimensional na forma de um cilindro de 6m de raio e 6m de altura, e lembra o objeto. O interior é mobiliado com almofadas e mesas baixas e fica em uma temperatura confortável. Enquanto dentro, você pode ouvir a área ao redor do receptáculo como se estivesse em seu espaço. Você pode permanecer dentro do receptáculo por uma quantia de horas igual a duas vezes seu bônus de proficiência. Você pode sair do receptáculo antes desse tempo se usar uma ação bônus para isso, se você morrer, ou se o receptáculo for destruído. Quando você sai desse receptáculo, você aparece no espaço desocupado mais próximo dele. Qualquer objeto deixado no receptáculo permanece lá até ser carregado para fora, e se o receptáculo for destruído, todo objeto contido por ele reaparece sem danos nos espaços desocupados mais próximos à antiga localização do receptáculo. Uma vez que entre no receptáculo, você não pode fazer isso novamente até terminar um descanso longo.\n\nIra do Gênio. Uma vez por turnno, quando você acerta uma rolagem de ataque, você pode causar dano extra ao alvo igual ao seu bônus de proficiência. O tipo desse dano é determinado por seu patrono: contundente (dao), trovejante (djinni), ígneo (ifriti), ou gélido (marid). A CA do receptáculo é igual à sua CD de magia. Ele tem pontos de vida igual ao seu nível de bruxo mais seu bônus de proficiência, e ele é imune a dano venenoso e psíquico. Se o receptáculo for destruído, você pode realizar uma cerimônia de 1 hora para receber um substituto de seu patrono. Essa cerimônia pode ser realizada durante um descanso curto ou longo, e o receptáculo anterior é destruído caso ainda exista. O receptáculo desaparece em um clarão de poder elemental quando você morre.",
        "page": 33,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LISTA EXPANDIDA DE MAGIAS",
        "level": 1,
        "text": "O Gênio permite que você escolha a partir de uma lista expandida de magias quando você aprende uma magia de bruxo. A tabela de Lista Expandida de Magias do Gênio mostra as magias que são adicionadas à lista de magia de bruxo para você, bem como as magias associadas ao seu tipo de patrono: dao, djinni, ifrit ou marid. Lista de Magias Expandidas de Gênio Círculo de Magias Magias de Gênio Magias de Dao Magias de Djinni Magias de Ifriti Magias de Marid 1º Detectar Bem e Mal Santuário Onda Trovejante Mãos Flamejantes Névoa Obscurecente 2º Força Espectral Crescer Espinhos Lufada de Vento Raio Ardente Turvar 3º Criar Comida e Água Mesclar-se às Rochas Muralha de Vento Bola de Fogo Nevasca 4º Assassino Fantasmagórico Moldar Rochas Invisibilidade Maior Escudo Ardente Controlar Água 5º Criação Muralha de Pedra Similaridade Coluna de Chamas Cone de Frio 9º Desejo — — — —",
        "page": 33,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DOM ELEMENTAL",
        "level": 6,
        "text": "Você começa a desenvolver características do seu tipo de patrono. Você agora tem resistência a um tipo de dano determinado por seu tipo de patrono: contundente (dao), trovejante (djinni), ígneo (ifriti), ou gélido (marid). Adicionalmente, com uma ação bônus, você pode conceder a si mesmo um deslocamento de voo de 9m com duração de 10 minutos, durante os quais você pode planar. Você pode usar essa ação bônus uma quantia de vezes igual ao seu bônus de proficiência, e você recupera todos os usos quando termina um descanso longo.",
        "page": 34,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "RECEPTÁCULO PROTETOR",
        "level": 10,
        "text": "A partir de agora, quando você entra em seu Receptáculo do Gênio usando a habilidade do Descanso Engarrafado, você pode levar até 5 criaturas voluntárias que você pode escolher dentro do seu campo de visão, desde que estejam a até 9m de você, para que entrem no receptáculo junto com você. Com uma ação bônus, você pode ejetar qualquer número de criaturas do receptáculo, e todos são ejetados se você sair ou morrer, ou se o item for destruído. Em adição, qualquer um (incluindo você) que se mantenha dentro do receptáculo por pelo menos 10 minutos adquire os mesmos benefícios de se terminar um descanso curto, e qualquer um pode adicionar seu bônus de proficiência ao número de pontos de vida que eles recuperam ao gastar qualquer Dado de Vida como parte de um descanso curto ali.",
        "page": 34,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DESEJO RESTRITO",
        "level": 14,
        "text": "Você roga a seu patrono para que lhe forneça um pequeno desejo. Com uma ação, você pode formular seu desejo para o seu Receptáculo do Gênio, solicitando o efeito de uma magia que seja de 6º círculo ou menor e que tenha um tempo de conjuração de 1 ação. A magia pode ser de qualquer lista de classe, e você não precisa atingir os requerimentos dessa magia, incluindo o custo de componentes; a magia simplesmente faz efeito como parte dessa ação. Assim que usa essa característica, você não pode fazer isso novamente até que finalize 1d4 descansos longos.",
        "page": 35,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-dominio-da-ordem",
    "classId": "cleric",
    "name": "Domínio da Ordem",
    "desc": "O Domínio da Ordem representa a disciplina, bem como a devoção às leis que governam a sociedade, a uma instituição ou filosofia. Clérigos da Ordem ponderam sobre a ordem e a justiça enquanto servem seus deuses, alguns dos quais exemplificados na tabela de Divindades da Ordem. Clérigos da Ordem acreditam que leis bem formuladas estabelecem hierarquias legítimas, e aqueles selecionados pela lei para liderar devem ser obedecidos. Aqueles que obedecem devem se esforçar ao máximo, e se aqueles que lideram falharem em proteger a lei, eles devem ser substituídos. Dessa forma, a lei tece uma rede de obrigações que criam ordem e segurança em um multiverso caótico. Divindades da Ordem Exemplo de Divindade Panteão Aureon Eberron Bane Reinos Esquecidos Majere Dragonlance Pholtus Greyhawk Tyr Reinos Esquecidos",
    "sourcePage": 36,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "36–38",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE DOMÍNIO",
        "level": 1,
        "text": "Você ganha magias de domínio nos níveis de clérigo listados na tabela de Magias do Domínio da Ordem. Consulte as características do Domínio Divino no Livro do Jogador para ver como as magias de domínio funcionam. Magias do Domínio da Ordem Nível de Clérigo Magias 1º Comando, Heroísmo 3º Imobilizar Pessoa, Zona da Verdade 5º Palavra Curativa em Massa, Lentidão 7º Greyhawk 9º Reinos Esquecidos",
        "page": 37,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PROFICIÊNCIA BÔNUS",
        "level": 1,
        "text": "Você adquire proficiência com armadura pesada. Você também ganha proficiência na perícia de Intimidação ou Persuasão (a sua escolha)",
        "page": 37,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VOZ DE AUTORIDADE",
        "level": 1,
        "text": "Você pode invocar o poder da lei para encorajar um aliado a atacar. Se você conjurar uma magia com um espaço de magia de 1º círculo ou superior e tiver como alvo um aliado, esse aliado pode utilizar sua reação imediatamente depois da magia para realizar um ataque com arma contra uma criatura a sua escolha que você possa ver. Se a magia tiver mais de um aliado como alvo, você escolhe qual aliado pode realizar esse ataque.",
        "page": 37,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANALIZAR DIVINDADE: DEMANDA DA ORDEM",
        "level": 2,
        "text": "utilizar o seu Canalizar Divindade para exercer uma presença intimidadora sobre os outros. Como uma ação, você exibe seu símbolo sagrado e cada criatura a sua escolha a até 9m que possa ver ou ouvir você deve ser bem-sucedida em uma salvaguarda de Sabedoria ou ficará enfeitiçada por você até o final do seu próximo turno ou até receber dano. Você também pode fazer com que qualquer uma das criaturas enfeitiçadas solte o que estiver segurando quando falhar nessa salvaguarda.",
        "page": 37,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PERSONIFICAÇÃO DA LEI",
        "level": 6,
        "text": "Você se tornou notavelmente hábil em canalizar energia mágica para compelir os outros. Se você conjurar uma magia da escola de encantamento utilizando um espaço de magia de 1º círculo ou superior, você pode mudar o tempo de conjuração dessa magia para 1 ação bônus para essa conjuração, desde que o tempo normal da conjuração da magia seja de 1 ação. Você pode usar essa característica um número de vezes equivalente ao seu modificador de Sabedoria (mínimo de 1 vez), e recupera todos os usos quando termina um descanso longo.",
        "page": 37,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "GOLPE DIVINO",
        "level": 8,
        "text": "a habilidade de infundir os golpes da sua arma com energia divina. Uma vez por turno, sempre que atingir uma criatura com um ataque armado, o seu ataque causa ld8 pontos de dano psíquico adicional. Ao alcançar o 14° nível, o dano adicional aumenta para 2d8.",
        "page": 36,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "IRA DA ORDEM",
        "level": 17,
        "text": "inimigos que você designar para destruição definham perante os esforços combinados de você e seus aliados. Se você causar dano com o seu Golpe Divino a uma criatura em seu turno, você pode amaldiçoar aquela criatura até o início de seu próximo turno. Na próxima vez que um de seus aliados acertar a criatura amaldiçoada com um ataque o alvo também sofrerá 2d8 de dano psíquico e a maldição acaba. Você pode amaldiçoar uma criatura desta forma apenas uma vez por turno.",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-dominio-da-paz",
    "classId": "cleric",
    "name": "Domínio da Paz",
    "desc": "O bálsamo da paz nasce no coração de comunidades saudáveis, entre nações amigas e nas almas dos de coração gentil. Os deuses da paz inspiram pessoas de todos os tipos para resolver conflitos e para se posicionarem contra aquelas forças que tentam impedir a paz de florescer. Veja a tabela de Divindades da Paz para uma lista de alguns deuses associados a esse domínio. Clérigos do Domínio da Paz atuam na assinatura de tratados e são freqüentemente solicitados a arbitrar em disputas. As bênçãos desses clérigos unem as pessoas e as ajudam a carregar os fardos umas das outras, e a magia dos clérigos ajuda aqueles que são levados a lutar pelo caminho da paz. Divindades da Paz Exemplo de Divindade Panteão Angharradh Élfico Berronar Prata-Verdadeira Anão Boldrei Eberron Cyrrollalee Pequenino Eldath Reinos Esquecidos Gaerdal Mão-de-Ferro Gnômico Paladine Dragonlance Rao Greyhawk",
    "sourcePage": 38,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "38–40",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE DOMÍNIO",
        "level": 1,
        "text": "magias de domínio nos níveis de clérigo listados na tabela de Magias do Domínio da Paz. Consulte as características do Domínio Divino no Livro do Jogador para ver como as magias de domínio funcionam. Magias do Domínio da Paz Nível de Clérigo Magias 1º Heroísmo, Santuário 3º Auxílio, Vínculo de Proteção 5º Remeter, Sinal de Esperança 7º Aura de Pureza, Esfera Resiliente de Otiluke 9º Restauração Maior, Ligação Telepática De Rary",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "IMPLEMENTO DA PAZ",
        "level": 1,
        "text": "Você ganha proficiência na perícia de Atuação, Intuição ou Persuasão (a sua escolha).",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VÍNCULO ENCORAJADOR",
        "level": 1,
        "text": "Você pode criar uma ligação energética entre pessoas que estão em paz entre si. Como uma ação, você escolhe um número de criaturas voluntárias igual ao seu bônus de proficiência (podendo incluir você mesmo). Essas criaturas devem estar a até 9m de você. Você cria um vínculo mágico entre elas que dura por 10 minutos ou até que você use essa característica novamente. Enquanto qualquer criatura vinculada estiver a até 9m de outra criatura do vínculo, ela pode jogar um d4 e adicionar o resultado em uma rolagem de ataque, teste de habilidade ou salvaguarda que fizer. Cada criatura vinculada pode adicionar o d4 não mais do que uma vez por turno.",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANALIZAR DIVINDADE: BÁLSAMO DA PAZ",
        "level": 2,
        "text": "oo seu Canalizar Divindade para tornar a sua presença um bálsamo calmante. Como uma ação, você pode se mover até o seu deslocamento, sem provocar ataques de oportunidade, e quando você se mover a até 1,5m de qualquer criatura durante essa ação, você pode restaurar um número de pontos de vida dessa criatura igual a 2d¨+ seu modificador de Sabedoria (mínimo de 1 ponto de vida). Uma criatura pode receber essa cura apenas uma vez sempre que você realiza essa ação.",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VÍNCULO DE PROTEÇÃO",
        "level": 6,
        "text": "O vínculo que você cria entre as pessoas auxilia elas a protegerem-se umas às outras. Quando uma criatura afetada por seu Vínculo encorajador estiver prestes a receber dano, uma segunda criatura vinculada que esteja a até 9m da primeira criatura pode usar sua reação para se teleportar para um espaço desocupado a até 1,5m da primeira criatura. A segunda criatura então recebe todo o dano em seu lugar.",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CONJURAÇÃO PODEROSA",
        "level": 8,
        "text": "Você adiciona o seu modificador de Sabedoria ao dano que você causa com qualquer truque de clérigo.",
        "page": 39,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VÍNCULO EXPANDIDO",
        "level": 17,
        "text": "Os benefícios do seu Vúnculo encorajador e do seu Vínculo de proteção agora funcionam quando as criaturas estiverem a até 18m umas das outras. Além disso, quando uma criatura utilizar o Vínculo de proteção para receber dano no lugar de outra pessoa, a criatura ganhará resistência a esse dano.",
        "page": 39,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Paz",
        "page": 38,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
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
            "spells": "Heroísmo; Santuário"
          },
          {
            "level": "3º",
            "spells": "Auxílio; Vínculo de Proteção"
          },
          {
            "level": "5º",
            "spells": "Remeter; Sinal de Esperança"
          },
          {
            "level": "7º",
            "spells": "Aura de Pureza; Esfera Resiliente de Otiluke"
          },
          {
            "level": "9º",
            "spells": "Restauração Maior; Ligação Telepática de Rary"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-dominio-do-crepusculo",
    "classId": "cleric",
    "name": "Domínio do Crepúsculo",
    "desc": "A transição crepuscular da luz para a escuridão muitas vezes traz calma e até alegria, conforme o dia de trabalho se encerra e as horas de descanso começam. A escuridão também pode trazer terrores, mas os deuses do crepúsculo protegem contra os horrores da noite. Clérigos que servem a essas divindades - exemplificadas na tabela Divindades do Crepúsculo - trazem conforto para aqueles que buscam descanso e protegê-los aventurando-se na escuridão invasora para garantir que a escuridão seja um conforto, não um terror. Divindades do Crepúsculo Exemplo de Divindade Panteão Boldrei Eberron Celestian Greyhawk Dol Arrah Eberron Helm Reinos Esquecidos Ilmater Reinos Esquecidos Mishakal Dragonlance Sêlune Reinos Esquecidos Yondalla Pequenino",
    "sourcePage": 39,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "39–41",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE DOMÍNIO",
        "level": 1,
        "text": "Você ganha magias de domínio nos níveis de clérigo listados na tabela de Magias do Domínio do Crepúsculo. Consulte as características do Domínio Divino no Livro do Jogador para ver como as magias de domínio funcionam. Magias do Domínio do Crepúsculo Nível de Clérigo Magias 1° Fogo das Fadas, Sono 3º Raio Lunar, Ver o Invisível 5º Aura de Vitalidade, Pequena Cabana De Leomund 7º Aura de Devoção, Invisibilidade Maior 9º Círculo do Poder, Despistar",
        "page": 39,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PROFICIÊNCIA BÔNUS",
        "level": 1,
        "text": "Você adquire proficiência com armas marciais e armaduras pesadas.",
        "page": 39,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "OLHOS DA NOITE",
        "level": 1,
        "text": "Você pode ver através da escuridão mais profunda. Você tem visão no escuro a um alcance de 90m. Nesse raio, você pode ver na penumbra como se estivesse em luz plena e na escuridão como se estivesse na penumbra. Com uma ação, você pode compartilhar magicamente a visão no escuro desta característica com criaturas voluntárias que você possa ver a até 3 metros de você, até um número de criaturas igual ao seu modificador de Sabedoria (mínimo de uma criatura). A visão no escuro compartilhada dura 1 hora. Depois de compartilhá-la, você não pode fazê-lo novamente até terminar um descanso longo, a menos que gaste um espaço de magia de qualquer círculo para compartilhá-lo novamente.",
        "page": 40,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "BENÇÃO DA VIGILÂNCIA",
        "level": 1,
        "text": "A noite ensinou você a ser vigilante. Como uma ação, você dá vantagem a uma criatura em que tocar (podendo escolher a si mesmo) na próxima jogada de iniciativa que a criatura fizer. Este benefício termina imediatamente após a jogada ou se você usar essa característica novamente.",
        "page": 40,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANALIZAR DIVINDADE: SANTUÁRIO CREPUSCULAR",
        "level": 2,
        "text": "Você pode utilizar a sua característica de Canalizar Divindade para revigorar os seus aliados com um crepúsculo calmante. Como uma ação, você exibe seu símbolo sagrado, e uma esfera de crepúsculo emana a partir de você. A esfera é centrada em você, possui 9m de raio, e é preenchida com iluminação de penumbra. A esfera move-se com você, a dura por 1 minuto ou até que você fique incapacitado ou morra. Sempre que uma criatura (incluindo você) encerra seu turno dentro da esfera, você pode fornecer a essa criatura um desses benefícios: Você fornece a essa criatura uma quantia de pontos de vida temporários equivalente a 1d6 mais seu nível de clérigo. Você encerra um efeito sobre o alvo que estivesse deixando-o amedrontado ou enfeitiçado.",
        "page": 40,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PASSOS DA NOITE",
        "level": 6,
        "text": "Você pode se valer do poder místico da noite para elevar-se no ar. Como uma ação bônus, quando você estiver em um local com iluminação de penumbra ou escuridão, você pode magicamente conceder a si mesmo um deslocamento de voo igual ao seu deslocamento terrestre por 1 minuto. Você pode usar essa ação bônus um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos ao final de um descanso longo.",
        "page": 40,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "GOLPE DIVINO",
        "level": 8,
        "text": "Você ganha a habilidade de infundir os golpes da sua arma com energia divina. Uma vez por turno, sempre que atingir uma criatura com um ataque armado, o seu ataque causa ld8 pontos de dano radiante adicional. Ao alcançar o 14° nível, o dano adicional aumenta para 2d8.",
        "page": 40,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio do Crepúsculo",
        "page": 39,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
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
            "spells": "Fogo das Fadas; Sono"
          },
          {
            "level": "3º",
            "spells": "Raio Lunar; Ver o Invisível"
          },
          {
            "level": "5º",
            "spells": "Aura de Vitalidade; Pequena Cabana de Leomund"
          },
          {
            "level": "7º",
            "spells": "Aura de Devoção; Invisibilidade Maior"
          },
          {
            "level": "9º",
            "spells": "Círculo do Poder; Despistar"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-circulo-dos-esporos",
    "classId": "druid",
    "name": "Círculo dos Esporos",
    "desc": "Druidas do Círculo dos Esporos encontram a beleza na decadência. Eles veem dentro dos bolores e outros fungos a habilidade de transformar matéria morta em abundante, ainda que de alguma forma estranha, vida. Estes druidas acreditam que vida e morte são parte de um grande ciclo, com um levando ao outro, sempre retornando. A morte não é o fim da vida, em vez disso, é uma mudança de estado que vê a mudança de vida em uma nova forma. Druidas desse círculo possuem uma relação complexa com mortos-vivos. Eles não veem nada inerentemente errado com os mortos-vivos, que eles consideram como um companheiro para a vida e para a morte. Mas estes druidas acreditam que o ciclo natural é mais saudável quando cada parte dele é vibrante e mutável. Mortos-vivos que buscam substituir toda a vida pela morte, ou tentam evitar a passagem para seu descanso final, violam esse ciclo e devem sem combatidos.",
    "sourcePage": 41,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "41–43",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE CÍRCULO",
        "level": 2,
        "text": "Sua ligação simbólica com os fungos e sua habilidade de transitar entre o cíclo da vida e da morte fornece a você acesso a certas magias. No 2° Nível, você aprende o truque Toque Necrótico. No 3°, 5°, 7° e 9° níveis, você ganha acesso às magias listadas na tabela de Magias do círculo dos Esporos. Assim que você ganha acesso a essas magias, elas sempre serão consideradas como preparadas por você, e não contam dentro do número de magias que você pode preparar por dia. Se através disso você adquirir uma magia que não esteja na lista de magias de druida, agora ela passa a ser considerada uma magia de druida para você. Magias do Círculo dos Esporos Nível de Druida Magias 2º Toque Necrótico 3º Cegueira/ Surdez, Repouso Tranquilo 5º Animar Mortos, Forma Gasosa 7º Malogro, Confusão 9º Névoa Mortal, Praga",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "AURA DE ESPOROS",
        "level": 2,
        "text": "Você é cercado por esporos necróticos invisíveis, que são inofensivos até que você os libere em uma criatura próxima. Quando uma criatura que você possa ver se move para um espaço a 3m ou menos de você ou começa seu turno nessa distância, você pode usar sua reação para causar 1d4 de dano necrótico para essa criatura, a menos que ela seja bemsucedida em uma salvaguarda de Constituição contra sua CD de magia. O dano necrótico aumenta para 1d6 no 6° nível, 1d8 no 10° nível, e 1d10 no 14° nível.",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ENTIDADE SIMBIÓTICA",
        "level": 2,
        "text": "Você ganha a habilidade de canalizar a magia em seus esporos. Como uma ção, você pode gastar um uso de sua Forma selvagem para despertar esses esporos, em vez de se transformar em uma criatura do tipo fera, e você ganha 4 pontos de vida temporários para cada nível nessa classe. Enquanto esta característica estiver ativa, você ganha os seguintes benefícios: Quando você provoca dano com a Aura de Esporos, jogue o dado de dano uma segunda vez e adicione esse valor ao total de dano. Seus ataques corpo a corpo provocam 1d6 de dano necrótico extra a qualquer alvo que você acertar. Esses benefícios duram por 10 minutos, até que você perca todos esses pontos de vida temporários, ou até que use sua Forma Selvagem novamente.",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "INFESTAÇÃO FÚNGICA",
        "level": 6,
        "text": "Seus esporos ganham a habilidade de infestar um corpo e animá-lo. Se uma fera ou humanóide de tamanho Pequeno ou Médio a até 3m de você morrer, você pode usar sua reação para animá-la, fazendo com que imediatamente se levante com 1 Ponto de Vida. A criatura utiliza o bloco de estatísticas do zumbi do Manual dos Monstros. Ela permanece animada por 1 hora, tempo após o qual ela colapsa e morre. Em combate, o turno do zumbi é realizado logo após o seu. Ele obedece seus comandos mentais, e a única ação que ele pode realizar é a de Ataque, realizando um ataque corpo-acorpo. Você pode usar essa característica um número de vezes igual ao seu modificador de Sabedoria (Mínimo de 1), e você recupera todos os usos ao terminar um descanso longo.",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "EXPANSÃO DE ESPOROS",
        "level": 10,
        "text": "Você adquire a habilidade de semear uma área com esporos mortais. Como uma ação bônus enquanto sua Entidade simbiótica estiver ativa, você pode espalhar esporos a até 9m de distância, onde eles pairam em um cubo de 3m por 1 minuto. Os esporos desaparecem antes se você usar essa característica novamente, se dissipá-los com uma ação bônus, ou se sua Entidade simbiótica não estiver mais ativa. Sempre que uma criatura mover-se para esse cubo ou começar seu turno lá, a criatura recebe o dano de sua Aura de Esporos, a menos que seja bem-sucedida em uma salvaguarda de Constituição contra sua CD de magia. Uma criatura não pode receber esse dano mais do que uma vez por turno. Enquanto o cubo de esporos durar, você não pode utilizar a reação da Aura de esporos.",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CORPO FÚNGICO",
        "level": 14,
        "text": "Os esporos fúngicos em seu corpo o alteram: você não pode mais ser cegado, ensurdecido, amedrontado, ou envenenado, e qualquer acerto crítico conta você será considerado um acerto normal, exceto se você estiver incapacitado.",
        "page": 43,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Círculo dos Esporos",
        "page": 42,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Druida"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "2º",
            "spells": "Toque Necrótico"
          },
          {
            "level": "3º",
            "spells": "Cegueira/Surdez; Repouso Tranquilo"
          },
          {
            "level": "5º",
            "spells": "Animar Mortos; Forma Gasosa"
          },
          {
            "level": "7º",
            "spells": "Malogro; Confusão"
          },
          {
            "level": "9º",
            "spells": "Névoa Mortal; Praga"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-circulo-das-estrelas",
    "classId": "druid",
    "name": "Círculo das Estrelas",
    "desc": "O Círculo das Estrelas permite que os druidas retirem seus poderes da luz estelar. Estes druidas tem rastreado padrões celestiais desde tempos imemoriais, descobrindo segredos escondidos entre as constelações. Ao revelar e entender esses segredos, o Círculo das Estrelas procura controlar o poder do Cosmo. Muitos druidas deste círculo mantém registros das constelações e dos efeitos das estrelas no mundo. Alguns grupos documentam essas observações em zonas megalíticas que servem como bibliotecas enigmáticas de conhecimento. Estes receptáculos podem tomar a forma de círculos de pedra, pirâmides, petróglifos, e templos subterrâneos - qualquer construção durável o suficiente para proteger os conhecimentos sagrados do círculo até mesmo de um grande cataclisma.",
    "sourcePage": 43,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "43–45",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAPA ESTELAR",
        "level": 2,
        "text": "Você criou uma carta estelar como parte de seus estudos celestiais. Ela é um objeto minúsculo e pode servir como foco de conjuração para suas magias de druida. Você determina a forma desse item rolando na tabela de Mapa Estelar ou escolhendo uma. Enquanto segurando esse mapa, você tem os seguintes benefícios: Você conhece o truque Orientação. Você tem a magia Raio Guia preparada. Ela é considerada uma magia de druida para você, e não conta no número de magias que você pode preparar. Você pode conjurar Raio Guia sem gastar um espaço de magia. Você pode fazer isso um número de vezes igual ao seu modificador de proficiência, e recupera os usos ao terminar um descanso longo. Se você perder o mapa, você pode realizar uma cerimônia mágica com duração de 1 hora para criar um substituto. Essa cerimônia pode ser realizada durante um descanso curto ou longo, e destrói o mapa anterior.\n\nMapa Estelar d6 Forma do Mapa Um pergaminho coberto de representações de constelações. 2 Uma placa de pedra com pequenos buracos perfurados nela. Uma pele de urso-coruja entalhada com marcas em relevo. Uma coleção de mapas encadernada em uma capa de ébano. Um cristal que projeta padrões estelares quando posicionado diante da luz. Discos de vidro que representam constelações.",
        "page": 43,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "FORMA ESTELAR",
        "level": 2,
        "text": "Com uma ação bônus, você pode gastar um uso da sua Forma Selvagem para assumir uma forma estelar em vez de se transformar em uma besta. Enquanto em sua forma estelar, você mantém as suas estatísticas de jogo, mas seu corpo se torna luminoso; suas juntas cintilam como estrelas, e linhas brilhantes as conectam como em uma carta estelar. Essa forma emite luz plena em um raio de 3m e penumbra por mais 3m adicionais. A forma dura 10 minutos. Ela se encerra antecipadamente se você dissipá-la (nenhuma ação é necessária), fica incapacitado, morrer ou utilizar essa habilidade novamente. Sempre que você assume a sua forma estelar, escolha qual das constelações a seguir brilham em seu corpo; sua escolha fornece a você certos benefícios enquanto nessa forma. Arqueiro. Uma constelação de um arqueiro aparece em você. Quando ativa essa forma, e como uma ação bônus em cada um de seus turnos subsequentes enquanto ela durar, você pode realizar um ataque com magia à distância, atirando uma flecha luminosa que tenha como alvo uma criatura a té 18m de você. Em um acerto, o ataque provoca dano radiante igual a 1d8 + seu modificador de Sabedoria. Cálice. Uma constelação de um cálice doador de vida aparece em você. Sempre que gastar um espaço de magia para conjurar uma magia que restaure pontos de vida de uma criautra, você ou outra criatura a até 9m de você pode recuperar pontos de vida em uma quantia igual a 1d8 + seu modificador de Sabedoria. Dragão. Uma constelação de um dragão sagaz aparece em você. Quando você realizar um teste de Inteligência ou de Sabedoria ou uma salvaguarda de Constituição para manter a concentração em uma magia, você pode considerar um resultado de 9 ou menos no d20 como um 10.",
        "page": 43,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PRESSÁGIO CÓSMICO",
        "level": 6,
        "text": "Sempre que encerrar um descanso longo, você pode consultar seu Mapa Estelar por presságios. Quando fizer isso, jogue um dado. Até o fim do seu próximo descanso longo, você ganha acesso a uma reação especial baseada se você tirou um número par ou ímpar no dado. Prosperidade (Par). Sempre que uma criatura a até 9m de você que você possa ver estiver prestes a fazer uma jogada de ataque, salvaguarda ou teste de habilidade, você pode usar sua reação para rolar um d6 e adicionar o número rolado ao total. Infortúnio (Ímpar). Sempre que uma criatura a até 9m de você que você possa ver estiver prestes a fazer uma jogada de ataque, salvaguarda ou teste de habilidade, você pode usar sua reação para rolar um d6 e subtrair o número rolado do total. Você pode usar esta reação um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos ao final de um descanso longo.",
        "page": 44,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CONSTELAÇÕES CINTILANTES",
        "level": 10,
        "text": "A constelação de sua Forma Estelar é aprimorada. O 1d8 da constelação do Arqueiro e do Cálice se tornam 2d8, e enquanto a constelação do Dragão estiver ativa, você adquire um deslocamento de voo de 6m e pode flutuar. Além disso, no começo de cada um de seus turnos enquanto estiver na Forma estelar, você poderá trocar qual constelação brilhará em seu corpo.",
        "page": 44,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "TOTALMENTE ESTRELADO",
        "level": 14,
        "text": "Enquanto em sua Forma Estelar você se torna parcialmente incorpóreo, ganhando resistência a dano contundente, cortante e perfurante.",
        "page": 44,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-circulo-do-fogo-selvagem",
    "classId": "druid",
    "name": "Círculo do Fogo Selvagem",
    "desc": "Druidas dentro do Círculo do Fogo Selvagem compreendem que a destruição às vezes é precursora da criação, tal como quando um fogo florestal promove o crescimento posterior. Esses druidas se ligam a um espírito primitivo que carrega tanto a destruição quanto o poder criativo, permitindo aos druidas criarem chamas controladas que queimam uma coisa para dar vida a outra.",
    "sourcePage": 44,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "44–46",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE CÍRCULO",
        "level": 2,
        "text": "Você criou um vínculo com um espírito de fogo selvagem, uma criatura primitiva de criação e destruição. Sua ligação com esse espírito fornece a você acesso a algumas magias quando você alcança certos níveis nessa classe, conforme mostrado na tabela de Magias do Círculo do Fogo Selvagem. Assim que você ganha acesso a essas magias, elas sempre serão consideradas como preparadas por você, e não contam dentro do número de magias que você pode preparar por dia. Se através disso você adquirir uma magia que não esteja na lista de magias de druida, agora ela passa a ser considerada uma magia de druida para você. Magias do Círculo do Fogo Selvagem Nível de Druida Magias 2° Mãos Flamejantes, Curar Ferimentos 3º Esfera Flamejante, Raio Ardente 5º Crescimento de Plantas, Revivificar 7º Aura de Devoção, Escudo Ardente 9º Coluna de Chamas, Curar Ferimentos em Massa",
        "page": 44,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "INVOCAR ESPÍRITO DO FOGO SELVAGEM",
        "level": 2,
        "text": "Você pode invocar o espírito primitivo conectado a sua alma. Como uma ação, você pode gastar um uso de sua Forma Selvagem para invocar seu espírito do fogo selvagem, em vez de assumir a forma de uma fera. O espírito aparece em um espaço desocupado a sua escolha que você possa ver a até 9m de você. Quando o espírito aparece, cada criatura a até 3m dele (exceto você) deve se bem-sucedido em uma salvaguarda de Destreza contra sua CD de magia ou sofre 2d6 de dano ígneo. O espírito é amigável a você e seus companheiros e obedece aos seus comandos. Veja as estatísticas de jogo dessa criatura no bloco de estatísticas do Espírito do Fogo Selvagem, que usa seu bônus de proficiência (BP) em várias coisas. Você determina a aparência do seu espírito. Alguns espíritos assumem uma forma humanóide feita de galhos retorcidos envolvidos em chamas, enquanto outros parecem como feras feitas de chamas. Em combate, o espírito compartilha sua contagem de iniciativa, mas ela executa seu turno logo após o seu. A única ação que ele faz em seu turno é a ação de Esquiva, a menos que você o comande com sua ação bônus em seu turno para que ele realize outra ação. Essa ação pode ser uma do seu bloco de estatísticas ou qualquer outra. Se você estiver incapacitado, o espírito pode executar qualquer ação a sua escolha, não apenas a de Esquiva. O espírito manifesta-se por 1 hora, até ser reduzido a 0 pontos de vida, até que você utilize essa característica para invocar o espírito novamente, ou até que você morra.",
        "page": 45,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VÍNCULO APRIMORADO",
        "level": 6,
        "text": "O vínculo com seu espírito do fogo selvagem aprimora suas magias de restauração e destruição. Sempre que você conjurar uma magia que provoca dano de fogo, ou que restaure pontos de vida enquanto seu espírito do fogo selvagem estiver invocado, jogue 1d8, e você ganha um bônus igual ao número rolado para uma jogada de dano ou de cura dessa magia. Em adição, quando você conjura uma magia com um alcance que não seja pessoal, a magia pode se originar do seu espírito do fogo selvagem.",
        "page": 45,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CAUTERIZAR CHAMAS",
        "level": 10,
        "text": "Você ganha a habilidade de transformar a morte em chamas mágicas que podem curar ou incinerar. Quando uma criatura Pequena ou maior morre a até 9m de você ou de seu espírito do fogo selvagem, uma chama espectral inofensiva brota do espaço da criatura morta e brilha ali por 1 minuto. Quando uma criatura que você possa ver entra nesse espaço, você pode usar sua reação para extinguir a chama espectral ali e curar ou dar dano de fogo nessa criatura. O valor dessa cura ou dano é igual 2d10 + seu modificador de Sabedoria. Você pode usar essa reação um número de vezes igual ao seu bônus de proficiência,, e você recupera todos os seus usos em quando você termina um descanso longo.",
        "page": 45,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "RENOVAÇÃO ARDENTE",
        "level": 14,
        "text": "O vínculo com seu espírito do fogo selvagem pode salvar você da morte. Se o espírito estiver a até 36m de você quando você for reduzido a 0 pontos de vida e cair inconsciente, você pode fazer com que o espírito caia a 0 pontos de vida. Você então recupera metade dos seus pontos de vida e imediatamente se levanta. Assim que usar essa característica, você não pode utilizá-la novamente até terminar um descanso longo. Espírito do Fogo Selvagem Elemental Pequeno Classe de Armadura 13 (armadura natural) Pontos de Vida 5 + cinco vezes seu nível de druida Deslocamento 9m, Voo 9m (levitação). FOR DES CON INT SAB CAR 10 (+0) 14 (+2) 14 (+2) 13 (+1) 15 (+2) 15 (+2) Imunidade a dano Ígneo. Imunidade a condições enfeitiçado, amedrontado, agarrado, caído, impedido. Sentidos Visão no Escuro 18m, Percepção passiva 12. Idiomas Compreende os idiomas que você fala. Nível de Desafio — Bônus de Proficiência (BP) Igual ao seu. Semente de fogo. Ataque com arma à distância: seu modificador de ataque com magia para acertar, alcance de 18m, um alvo que você possa ver. Acerto 1d6 + BP de dano de fogo. Teletransporte feérico. O espírito e cada criatura voluntária a sua escolha a até 1,5m dele se teletransporta a até 4,5m para um espaço desocupado que você possa ver. Então cada criatura a até 1,5m do espaço que o espírito deixou deve ser bem sucedida em uma salvaguarda de Destreza contra sua CD de magia ou sofre 1d6 + BP de dano de fogo.",
        "page": 45,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-mente-aberrante",
    "classId": "sorcerer",
    "name": "Mente Aberrante",
    "desc": "Uma influência alieníngena envolveu seus tentáculos em sua mente, lhe dando poderes psiônicos. Agora você pode tocar outras mentes com esse poder e alterar o mundo ao seu redor ao utilizar isso para controlar a emergia mágica do multiverso. Esse poder ilumina você como um farol de esperança para os outros? Ou você seria uma fonte de terror para aqueles que sentem as investidas de sua mente e testemunham as estranhas manifestações de seu poder? Como um feiticeiro da Mente Aberrante, você decide como você adquiriu esses poderes. Você nasceu com eles? Ou algum evento posterior em sua vida fez com que você se iluminasse com a prontidão psíquica? Consulte a tabela de Origem Aberrante para a possível origem de seu poder. Origem Aberrante d6 Origem Você foi exposto à influência distorcida dos Reinos Distantes. Você está convencido de que há um tentáculo nascendo em você, mas ninguém mais pode ver isso. Um vento psíquico do Plano Astral carregou energia psiônica até você. Quando utiliza seus poderes, partículas tênues de luz brilham ao seu redor. Você uma vez foi submetido aos poderes de dominação de um abolete, deixando um resíduo psíquico em sua mente. Você foi implantado com um girino devorador de mentes, mas a ceremorfose nunca se completou. E agora o poder psiônico da criatura é seu. Quando você o usa, sua carne brilha com um muco estranho. Quando criança, você tinha um amigo imaginário que se parecia como um flumph ou uma estranha criatura parecida com um ornitorrinco. Um dia, ele o presenteou com seus poderes psiônicos, o que acabou não sendo tão imaginário assim. Seus pesadelos sussurram a verdade a você: seus poderes psiônicos não são realmente seus. Você os drena de seu gêmeo parasita!",
    "sourcePage": 46,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "46–49",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS PSIÔNICAS",
        "level": 1,
        "text": "Você aprende uma magia adicional ao alcançar certos níveis nesta classe, como mostrado na tabela de Magias Psiônicas. Essas magias são consideradas magias de feiticeiro para você, mas não contam contra o número de magias de feiticeiro que você conhece. As magias em itálico são apresentadas no capítulo 3 deste livro. Sempre que ganhar um nível de feiticeiro, você pode substituir uma magia adquirida por esta característica por outra magia de mesmo círculo. A nova magia deve ser de adivinhação ou encantamento das listas de bruxo, feiticeiro ou mago. Magias Psiônicas Nível de Feiticeiro Magias 1º Braços de Hadar, Farpa Mental, Sussurros Dissonantes 3º Acalmar Emoções, Detectar Pensamentos 5º Fome de Hadar, Remeter 7º Invocar Aberração, Tentáculos Negros de Evard 9º Ligação Telepática de Rary, Telecinese",
        "page": 47,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DISCURSO TELEPÁTICO",
        "level": 1,
        "text": "Você pode estabelecer uma conexão telepática entre sua mente e a de outra pessoa. Com uma ação bônus, escolha uma criatura a até 9m que você possa ver. Você e a criatura escolhida podem falar telepaticamente enquanto estiverem a uma distância de até 1,5 km x seu modificador de Carisma (mínimo de 1,5 km). Para entenderem um ao outro, ambos devem ser capazes de se comunicar mentalmente em um idioma que o outro compreenda. A conexão telepática dura por um número em minutos igual ao seu nível de feiticeiro. Ela se encerra antes se você for incapacitado ou morto, ou se utilizar essa habilidade para formar uma conexão com uma criatura diferente.",
        "page": 48,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "FEITIÇARIA PSIÔNICA",
        "level": 6,
        "text": "Quando você conjura qualquer magia de 1º círculo ou maior de sua característica de Magias Psiônicas, você pode conjurála gastando um espaço de magia normalmente ou gastando uma quantia de pontos de feitiçaria igual ao círculo da magia. Se você conjurar gastando pontos de feitiçaria, ela não necessitará de componentes verbais ou somáticos, e nem de componentes materiais, a menos que sejam consumidos pela magia.",
        "page": 48,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DEFESAS PSÍQUICAS",
        "level": 6,
        "text": "Você ganha resistência a dano psíquico, e você possui vantagem em salvaguardas contra ser amedrontado ou enfeitiçado.",
        "page": 48,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "REVELAÇÃO NA CARNE",
        "level": 14,
        "text": "Você pode libertar a verdadeira aberração oculta dentro de si. Com uma ação bônus, você pode gastar 1 ou mais pontos de feitiçaria para transformar seu corpo magicamente por 10 minutos. Para cada ponto de feitiçaria gasto dessa forma, você ganha um dos seguintes benefícios a sua escolha, cujos efeitos duram até que a transformação se encerre. Você pode ver qualquer criatura invisível a até 18m de você, desde que ela não esteja sob cobertura total. Seus olhos também se tornam negros ou transformam-se em gavinhas sensoriais se contorcendo. Você ganha deslocamento de voo igual ao seu deslocamento terrestre, e pode planar. Conforme você voa, sua pele cintila com muco ou brilha com uma luz sobrenatural. Você ganha um deslocamento de natação igual a duas vezes seu deslocamento terrestre, e você pode respiram embaixo da água. Além disso, brânquias surgem de seu pescoço ou se abrem por trás de suas orelhas, seus dedos se tornam palmados ou você desenvolve cílios se contorcendo que se estendem por sua roupa. Seu corpo, junto com qualquer equipamento que esteja vestindo ou carregando se torna viscoso e elástico. Você pode se mover através de qualquer espaço tão estreito quanto 2,5cm sem se espremer, e pode gastar 1,5m de deslocamento para escapar de amarras não mágicas ou de ser agarrado.",
        "page": 48,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "IMPLOSÃO ANÔMALA",
        "level": 18,
        "text": "Você pode liberar seu poder aberrante como uma anomalia de distorção espacial. Usando uma ação, você pode se teletransportar para um espaço desocupado que possa ver a até 36m de você. Imediatamente após você desaparecer, todas as criaturas a até 9m do espaço que você deixou devem realizar uma salvaguarda de Força. Em caso de falha, uma criatura recebe 3d10 de dano de energia e é puxado diretamente para o espaço que você deixou, acabando em um espaço desocupado tão perto do seu espaço anterior quanto possível. Em caso de sucesso, a criatura recebe metade do dano e não é puxada. Assim que usar essa característica, você não poderá utilizála novamente até terminar um descanso longo, a menos que gaste 5 pontos de feitiçaria para ativá-lo.",
        "page": 48,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias Psiônicas",
        "page": 47,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Feiticeiro"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Braços de Hadar; Farpa Mental; Sussurros Dissonantes"
          },
          {
            "level": "3º",
            "spells": "Acalmar Emoções; Detectar Pensamentos"
          },
          {
            "level": "5º",
            "spells": "Fome de Hadar; Remeter"
          },
          {
            "level": "7º",
            "spells": "Invocar Aberração; Tentáculos Negros de Evard"
          },
          {
            "level": "9º",
            "spells": "Ligação Telepática de Rary; Telecinese"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-alma-cronometrica",
    "classId": "sorcerer",
    "name": "Alma Cronométrica",
    "desc": "A força cósmica da ordem inundou você com magia. Esse poder vem de Mecânos ou um lugar como esse – um plano de existência um plano de existência moldado completamente com uma eficiência cronométrica. Você, ou alguém de sua linhagem, pode ter sido envolvido nas maquinações dos modrons, os seres da ordem que habitam Mecânos. Talvez seus ancestrais tenham até mesmo tomado parte na Grande Marcha Modron. Independente de como isso surgiu dentro de você, o poder da ordem pode parecer estranho aos olhos alheios, mas, para você, é parte de um grande e glorioso sistema.",
    "sourcePage": 49,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "49–51",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIA CRONOMÉTRICA",
        "level": 1,
        "text": "Você aprende uma magia adicional ao alcançar certos níveis nesta classe, como mostrado na tabela de Magias Cronométricas. Essas magias são consideradas magias de feiticeiro para você, mas não contam contra o número de magias de feiticeiro que você conhece. As magias com um asterisco são apresentadas no capítulo 3 deste livro. Sempre que ganhar um nível de feiticeiro, você pode substituir uma magia adquirida por esta característica por outra magia de mesmo círculo. A nova magia deve ser de abjuração ou transmutação das listas de bruxo, feiticeiro ou mago. Magias Cronométricas Nível de Feiticeiro Magias 1º Alarme, Proteção Contra o Bem e o Mal 3º Auxílio, Restauração Menor 5º Dissipar Magia, Proteção Contra Energia 7º Invocar Construto , Movimentação Livre 9º Muralha de Energia, Restauração Maior\n\nEm adição, consulte a tabela de Manifestações da Ordem e escolher ou determinar aleatoriamente a forma como sua conexão com a ordem se manifesta enquanto você está conjurando suas magias de feiticeiro. Manifestações da Ordem d6 Manifestação Engrenagens espectrais pairam às suas costas. Os ponteiros de um relógio giram em seus olhos. Sua pele brilha em um tom de bronze metalizado. 4 Equações flutuantes e objetos geométricos recobrem seu corpo. Seu foco de conjuração temporariamente toma a forma de um mecanismo de relojoeiro Minúsculo. O som das engrenagens ou o soar de um relógio podem ser ouvidos por você e por aqueles afetados por sua magia.",
        "page": 49,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "RESTAURAR O EQUILÍBRIO",
        "level": 1,
        "text": "Sua conexão com o plano da ordem absoluta permite que você uniformize os momentos caóticos. Quando uma criatura que você possa ver a até 18m de você estiver prestes a fazer uma rolagem do d20 com vantagem ou desvantagem, você pode usar sua reação para impedir que a jogada seja afetada por essas condições. Você pode usar essa característica uma quantia de vezes igual ao seu bônus de proficiência, e recupera todos os usos ao terminar um descanso longo.",
        "page": 49,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "BASTIÃO DA ORDEM",
        "level": 6,
        "text": "Você pode acessar a grande equação da existência para imbuir uma criatura com um escudo cintilante da ordem. Com uma ação, você pode gastar de 1 a 5 pontos de feitiçaria para criar uma proteção mágica ao redor de si mesmo ou de outra criatura em seu campo de visão a até 9m de você. A proteção dura até que você termine um descanso longo ou use essa característica novamente. A proteção é representada por uma quantia de d8s igual ao número de pontos de feitiçaria gastos para criá-la. Quando uma criatura protegida sofre dano, ela pode gastar uma quantia desses dados, jogando-os e reduzindo o dano de acordo com o resultado obtido nesses dados.",
        "page": 50,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ARREBATAMENTO DA ORDEM",
        "level": 14,
        "text": "Você adquire a habilidade de alinhar sua consciência aos infinitos cálculos de Mecânos. COm uma ação bônus, você entra nesse estado de transe por 1 minuto. Durante esse período, jogadas de ataque realizadas contra você não podem se beneficiar de vantagens, e sempre que você fizer uma jogada de ataque, um teste de habilidade ou salvaguarda, você pode considerar qualquer valor abaixo de 9 tirado no d20 como um 10. Assim que usar essa ação bônus, você não pode ativá-la novamente até que termine um descanso longo ou que gaste 5 pontos de feitiçaria para usá-la de novo.",
        "page": 50,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MARCHA CRONOMETRADA",
        "level": 18,
        "text": "Você invoca espíritos da ordem para expurgar a desordem ao seu redor. Com uma ação, você invoca os espíritos em um cubo de 9m originando-se a partir de você. Os espíritos assemelhan-se a modrons ou outros construtos a sua escolha. Eles são intangíveis e invulneráveis, e criam os seguintes efeitos dentro do cubo antes de desaparecerem. Os espíritos restauram até 100 pontos de vida, divididos da forma que você escolher entre qualquer número de criaturas dentro do cubo. Quaisquer objetos danificados que fiquem completamente dentro da área do cubo são reparados instantaneamente. Toda magia de 6º círculo ou menor tem seu efeito encerrado em criaturas e objetos a sua escolha dentro do cubo. Assim que usar essa ação, você não pode ativá-la novamente até que termine um descanso longo, a menos que gaste 7 pontos de feitiçaria para isso.",
        "page": 50,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias Cronométricas",
        "page": 49,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Feiticeiro"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Alarme; Proteção Contra o Bem e o Mal"
          },
          {
            "level": "3º",
            "spells": "Auxílio; Restauração Menor"
          },
          {
            "level": "5º",
            "spells": "Dissipar Magia; Proteção Contra Energia"
          },
          {
            "level": "7º",
            "spells": "Invocar Construto; Movimentação Livre"
          },
          {
            "level": "9º",
            "spells": "Muralha de Energia; Restauração Maior"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-andarilho-feerico",
    "classId": "ranger",
    "name": "Andarilho Feérico",
    "desc": "Um misticismo feérico o cerca, graças às dádivas de uma arquifada, de uma fruta brilhante que você comeu, proveniente de uma árvore que falava, do córrego mágico em que você nadou, ou de algum outro evento auspicioso. Independente de como adquiriu sua magia feérica, você agora é um Andarilho Feérico, um guardião que representa tanto o reino mortal quanto o reino das fadas. Conforme você vaga pelo multiverso, sua risada contagiante alegra os corações dos oprimidos, e seu poder marcial provoca terror em seus oponentes, pois grande e o júbilo das fadas, e aterrorizante a sua fúria.",
    "sourcePage": 53,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "53–55",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "GOLPES ATERRORIZANTES",
        "level": 3,
        "text": "Você pode ampliar os golpes de suas armas com uma magia assustadora, provinda das profundezas melancólicas de Faéria. Quando você acerta uma criatura com uma arma, você pode provocar um dano psíquico extra de 1d4 ao alvo, que pode ser afetado por esse dano adicional apenas uma vez por turno. O dano extra aumenta para 1d6 quando você chega ao 11° nível desta classe.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIA DO ANDARILHO FEÉRICO",
        "level": 3,
        "text": "Você aprende uma magia adicional ao alcançar certos níveis nesta classe, como mostrado na tabela de Magias de Andarilho Feérico. Essas magias são consideradas magias de guardião para você, mas não contam contra o número de magias de guardião que você conhece. Magias do Andarilho Feérico Nível de Guardião Magia 3º Enfeitiçar Pessoa 5º Passo Nebuloso 9º Dissipar Magia 13º Porta Dimensional 17º Despistar Você também possui uma benção sobrenatural adquirida através de um local ou aliado feérico. escolha sua benção da tabela Dons de Faéria ou determino isso aleatoriamente. Dons de Faéria d6 Dom Borboletas ilusórias adejam ao seu redor enquanto você realiza um descanso curto ou longo. 2 Flores sazonais frescas brotam de seus cabelos a cada amanhecer. Você possui um aroma leve de canela, lavanda, noz moscada ou de outra erva ou tempero reconfortante Sua sombra dança quando ninguém estiver olhando diretamente para ela. Chifres ou antenas nascem em sua cabeça. 6 Sua pele e cabelo mudam de cor para combinar com o clima a cada amanhecer.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "GLAMOUR SOBRENATURAL",
        "level": 3,
        "text": "Suas qualidades feéricas dão a você um charme sobrenatural. Como resultado, sempre que realiza um teste de Carisma, você ganha um bônus igual ao seu modificador de Sabedoria (mínimo de +1). Adicionalmente, você ganha proficiência em uma das seguintes perícias a sua escolha: Atuação, Enganação, ou Persuasão.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DISTORCER ENGODO",
        "level": 7,
        "text": "A magia feérica protege sua mente. Você possui vantagem em salvaguardas contra ser amedrontado ou enfeitiçado. Além disso, sempre que você ou uma criatura que você possa ver a até 36m de você for bem-sucedida em uma salvaguarda contra ser amedrontada ou enfeitiçada, você pode usar sua reação para obrigar uma criatura diferente dentro dessa mesma distância de visão a realizar uma salvaguarda de Sabedoria contra sua CD de magia. Se falhar, o alvo ficará amedrontado ou enfeitiçado por você (a sua escolha) por 1 minuto. O alvo pode repetir a salvaguarda no final de cada um dos turnos dele, encerrando o efeito em caso de sucesso.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "REFORÇO FEÉRICO",
        "level": 11,
        "text": "As cortes reais de Faéria o abençoaram com o auxílio de seres feéricos: você conhece a magia Invocar Fada (uma magia do capítulo 3). Ela não conta contra o número de magias de guardião que você conhece, e você pode conjurá-la sem um componente material. Você também pode conjurá-la uma vez sem gastar um espaço de magia, e recupera a habilidade de fazer isso assim que finalizar um descanso longo. Sempre que começar a conjurar essa magia, você pode modificá-la para que não exija concentração. Caso o faça, a duração da magia passa a ser de 1 minuto para essa conjuração.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ANDARILHO DA NÉVOA",
        "level": 15,
        "text": "Você pode saltar para dentro e para fora de Faéria para se mover em um piscar de olhos: você pode conjurar Passo Nebuloso sem gastar um espaço de magia. Você pode fazer isso um número de vezes igual ao seu Modificador de Sabedoria (mínimo de 1 vez), e recupera todos os usos quando termina um descanso longo. Adicionalmente, sempre que conjurar Passo Nebuloso, você pode levar consigo uma criatura que você possa ver a até 1,5m de você. Essa criatura se teletransporta para um espaço desocupado a sua escolha a até 1,5m do seu espaço de destino.",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Andarilho Feérico",
        "page": 53,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Patrulheiro"
          },
          {
            "key": "spells",
            "label": "Magia"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Enfeitiçar Pessoa"
          },
          {
            "level": "5º",
            "spells": "Passo Nebuloso"
          },
          {
            "level": "9º",
            "spells": "Dissipar Magia"
          },
          {
            "level": "13º",
            "spells": "Porta Dimensional"
          },
          {
            "level": "17º",
            "spells": "Despistar"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-portador-do-enxame",
    "classId": "ranger",
    "name": "Portador do Enxame",
    "desc": "Sentindo uma conexão profunda com o ambiente ao seu redor, alguns guardiões infiltram-se através dessa conexão mágica e vinculam-se com um enxame de espíritos da natureza. Esse enxame torna-se uma força poderosa em batalha, bem como uma companhia útil ao guardião. Alguns Portadores do Enxame são forasteiros ou eremitas, mantendo-se apenas com sua companhia e de seu prestativo enxame em vez de lidar com o desconforto das outras pessoas. Outros alegram-se em construir comunidades vibrantes que funcionam para benefício mútuo de todos aqueles que eles consideram como parte de seus enxames.",
    "sourcePage": 54,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "54–57",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "ENXAME REUNIDO",
        "level": 3,
        "text": "Um enxame de espíritos da natureza intangíveis se vinculou a você e pode ajudá-lo em batalha. Até que você morra, a enxame permanece em seu espaço, rastejando em você ou voando e adejando ao seu redor dentro do seu espaço. Você determina sua aparência rolando na tabela de Aparência do Enxame. Aparência do Enxame d4 Aparência Enxame de insetos Inço-pragas ramo em miniatura Pássaros esvoaçantes Pixies brincalhonas Uma vez por turno, você pode fazer com que o enxame o auxilie em combate de uma das seguintes maneiras, imediatamente após você acertar uma criatura com um ataque: O alvo do ataque sofre 1d6 de dano perfurante do enxame. O alvo do ataque deve ser bem sucedido em uma salvaguarda de Força contra sua CD de magia ou será movido pelo enxame por até 4,5m horizontalmente em uma direção á sua escolha. Você é movido pelo enxame por 1,5m horizontalmente em uma direção à sua escolha.",
        "page": 54,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MAGIA DO PORTADOR DO ENXAME",
        "level": 3,
        "text": "Você aprende o truque Mãos Mágicas caso ainda não o conheça. Quando o conjura, amão toma a forma do seu enxame de espíritos da natureza. Você também aprende uma magia adicional de 1° círculo ou maior ao alcançar certos níveis nessa classe, conforme mostrado na tabela de Magias de Portador do Enxame. Essas magias são consideradas como magias de guardião para você, mas não contam contra o números de magias de guardião que você pode conhecer. Magias do Portador do Enxame Nível de Guardião Magias 3º Fogo das Fadas, Mãos Mágicas 5º Teia 9º Forma Gasosa 13º Olho Arcano 17º Praga de Insetos É o seu enxame! O enxame e as magias de um portador do Enxame são reflexos do vínculo do personagem com os espíritos da natureza. Aproveite a oportunidade de descrever o enxame e as magias de seu guardião em jogo. Por exemplo, quando seu guardião conjura Forma Gasosa, ele pode aparentar ter se fundido ao enxame, em vez de se transformar em uma forma de névoa, ou o Olho Arcano criado pode ser uma extensão de seu enxame que espiona para ele. Tais descrições não modificam o efeito das magias, mas elas são uma oportunidade animadora para explorar a narrativa do seu personagem através de suas habilidades de classe. Para mais orientações sobre como customizar magias, veja a seção \"Personalizando Magias\" no capítulo 3. Além disso, lembre-se de que a aparência do enxame é sua para que a altere como desejar, e não sinta-se preso a uma aparência única. Talvez o visual dos espíritos mude com o humor do guardião ou por conta das estações. Você decide!",
        "page": 54,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MARÉ ONDULANTE",
        "level": 7,
        "text": "Você pode condensar parte de seu enxame em uma massa focalizada que o levanta. Como uma ação bônus, você adquire deslocamento de vôo de 3m e pode levitar. Esse efeito dura por 1 minuto ou até que você esteja incapacitado. Você pode utilizar essa característica um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos ao final de um descanso longo.",
        "page": 54,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ENXAME PODEROSO",
        "level": 11,
        "text": "Seu Enxame Reunido torna-se mais forte das seguintes formas: O dano do Enxame Reunido aumenta para 1d8. Se uma criatura falhar em sua salvaguarda para não ser movida pelo Enxame Reunido, você também pode fazer com que o enxame derrube a criatura. Quando você for movido pelo Enxame Reunido, ele lhe fornece meia cobertura até o começo do seu próximo turno.",
        "page": 55,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DISPERSÃO DO ENXAME",
        "level": 15,
        "text": "Você pode se desincorporar dentro de seu enxame, evitando o perigo. Quando você receber dano, você pode usar sua reação para conceder a si mesmo resistência a esse tipo de dano. Você desaparece dentro do seu enxame e então se teletransporta para um espaço desocupado que você possa ver a até 9m de você, onde você reaparece com o enxame. Você pode usar essa característica uma quantia de vezes igual ao seu bônus de proficiência, e recupera todos os usos ao terminar um descanso longo.",
        "page": 55,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Portador do Enxame",
        "page": 54,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
        "columns": [
          {
            "key": "level",
            "label": "Nível de Patrulheiro"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Fogo das Fadas; Mãos Mágicas"
          },
          {
            "level": "5º",
            "spells": "Teia"
          },
          {
            "level": "9º",
            "spells": "Forma Gasosa"
          },
          {
            "level": "13º",
            "spells": "Olho Arcano"
          },
          {
            "level": "17º",
            "spells": "Praga de Insetos"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-guerreiro-psionico",
    "classId": "fighter",
    "name": "Guerreiro Psiônico",
    "desc": "Desperto para o poder mental dentro de si, um Guerreiro Psiônico é um guerreiro que aumenta seu poder físico com golpes de arma infundidos por energia psíquica, chicotadas telecinéticas e barreiras de força mental. Muitos githyanki treinam para se tornarem tais guerreiros, bem como alguns dos mais disciplinados alto elfos. No mundo de Eberron, muitos jovens kalashtar sonham em se tornarem guerreiros psiônicos. Como um guerreiro psiônico, você pode ter afiado suas habilidades psíquicas através de disciplina solitária, desbloqueado isso sob a tutela de um mestre, ou refinado isso em uma academia dedicada a manejar o poder mental tanto como uma arma quanto como um escudo.",
    "sourcePage": 58,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "58–60",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PODER PSÍQUICO",
        "level": 3,
        "text": "Você abriga uma fonte de energia psíquica dentro de você. Essa energia é representada por seu dado de Energia Psíquica, que são d6. Você possui um número de dados de Energia Psíquica equivalente ao dobro de seu bônus de proficiência, e eles alimentam vários de seus poderes psiônicos, que são detalhados abaixo. Alguns de seus poderes gastam os dados de Energia Psíquica que eles utilizam, conforme especificado em sua descrição, e você não pode utilizar um poder se ele exigir que você use um dado, mas você não tiver nenhum disponível. Você recupera todos os dados de Energia Psíquica gastos quando termina um descanso longo. Adicionalmente, como uma ação bônus, você pode recuperar um dado de Energia Psíquica gasto, mas só poderá fazer isso novamente após um descanso curto ou longo. Quando você alcança certos níveis nessa classe, o valor do seu dado de Energia Psiônica aumenta: no 5º nível (d8), no 11º nível (d10), e no 17º nível (d12). Os poderes abaixo utilizam o seu dado de Energia Psíquica. Campo protetor. Quando você ou uma criatura que você possa ver a até 9m de você receber dano, você pode usar sua reação para gastar um dado de Energia Psíquica e reduzir a quantidade de dano sofrido pelo resultado mais o seu modificador de Inteligência (mínimo de 1), conforme você cria um escudo de energia telecinética momentâneo. Golpe Psiônico. Você pode impulsionar suas armas com energia psíquica. Uma vez por turno, imediatamente após você acertar um alvo a até 9m de você com um ataque e provocar dano nele com uma arma, você pode gastar um dado de Energia Psíquica, rolando ele e provocando uma quantidade de dano de energia ao alvo igual ao resultado do dado mais o valor do seu modificador de Inteligência. Movimento Telecinético. Você pode mover um objeto ou uma criatura com sua mente. Como uma ação, você foca em um objeto solto que seja de tamanho Grande ou menor, ou uma criatura voluntária que não seja você mesmo. Se você puder ver o alvo e ele estiver a até 9m de você, você pode movê-lo por até 9m para um espaço desocupado dentro da sua visão. Alternativamente, se for um objeto Minúsculo, você pode movê-lo para ou a parir de sua mão. De qualquer maneira, você pode mover o alvo horizontalmente, verticalmente, ou ambos. Uma vez que realize essa ação, você não pode repetí-la até que termine um descanso curto ou longo, a menos que gaste um dado de Energia Psíquica para isso.",
        "page": 59,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ADEPTO TELECINÉTICO",
        "level": 7,
        "text": "dominou novas formas de usar suas habilidades telecinéticas, descritas abaixo. Salto telecinético. Como uma ação bônus, você pode impulsionar seu corpo com sua mente. Você ganha um deslocamento de vôo igual ao dobro do seu deslocamento terrestre até o final do turno atual. Uma vez que realize essa ação bônus, você não pode repeti-la até que termine um descanso curto ou longo, a menos que gaste um dado de Energia Psíquica para isso. Empurrão telecinético. Quando você provoca dano a um alvo com seu Golpe Psiônico, você pode forçar o alvo a fazer uma salvaguarda de Força com CD igual a 8 + seu bônus de proficiência + seu modificador de Inteligência. Se a salvaguarda falhar, você pode derrubar o alvo, ou movê-lo por até 3m horizontalmente em qualquer direção.",
        "page": 59,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MENTE PROTEGIDA",
        "level": 10,
        "text": "A energia psíquica fluindo através de você reforçou sua mente. Você tem resistência a dano psíquico. Além disso, se você iniciar seu turno amedrontado ou enfeitiçado, você pode gastar um dado de Energia Psíquica e encerrar todo efeito sobre você que se encaixe nessas condições.",
        "page": 59,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "BALUARTE TELECINÉTICO",
        "level": 15,
        "text": "Você pode proteger a si mesmo e aos outros com energia telecinética. Como uma ação bônus, você pode escolher criaturas que você possa ver a até 9m de você (incluindo você), até uma quantia de criaturas igual ao seu modificador de Inteligência (mínimo de uma criatura). Cada uma das criaturas escolhidas é protegida por meia cobertura por 1 minuto ou até que você esteja incapacitado. Uma vez que você realize essa ação bônus, você não pode fazer isso novamente até que você termine um descanso curto ou longo, a menos que gaste um dado de Energia Psíquica para isso.",
        "page": 59,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MESTRE TELECINÉTICO",
        "level": 18,
        "text": "Sua habilidade para mover criaturas e objetos com sua mente é igualada por todos. Você pode conjurar a magia Telecinésia, sem a necessidade de componentes, e seu atributo de conjuração para essa habilidade é Inteligência. Em cada um dos seus turnos enquanto você se concentra na magia, incluindo o turno em que a conjura, você pode realizar um ataque com arma como uma ação bônus. Uma vez que você conjura a magia através dessa característica, você não poderá fazer isso novamente até terminar um descanso longo, a menos que gaste um dado de Energia Psíquica para isso.",
        "page": 59,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-cavaleiro-runico",
    "classId": "fighter",
    "name": "Cavaleiro Rúnico",
    "desc": "Cavaleiros Rúnicos aprimoram sua proeza marcial utilizando o poder sobrenatural das runas, uma prática ancestral que se originou com os gigantes. Entalhadores de runas podem ser encontrados entre todas as famílias de gigantes e você provavelmente aprendeu suas técnicas direta ou indiretamente de um desses artesões místicos. Quer você tenha descoberto o trabalho de um gigante esculpido em uma colina ou caverna, aprendido sobre runas com um sábio, ou encontrado um gigante pessoalmente, você estudou o ofício dos gigantes e aprendeu como aplicar runas para fortalecer seu equipamento.",
    "sourcePage": 60,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "60–63",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS BÔNUS",
        "level": 3,
        "text": "Você ganha proficiência com ferramentas de artesão e aprende a falar, ler e escrever em gigante.",
        "page": 60,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ENTALHADOR DE RUNAS",
        "level": 3,
        "text": "Você pode usar runas mágicas para aprimorar seu equipamento. Ao ganhar essa habilidade você aprende a inscrever duas runas à sua escolha dentre as runas descritas abaixo, e cada vez que você ganhar um nível nesta classe, você pode substituir uma runa que conheça por uma diferente advinda desta característica. Quando você alcança certos níveis nessa classe, você aprende runas adicionais, conforme mostrado na tabela de Runas Conhecidas. Runas Conhecidas Nível de Guerreiro Número de Runas 3º 7º 10º 15º Sempre que terminar um descanso longo você pode tocar uma quantidade de objetos igual ao número de runas que você conhece e gravar uma runa diferente em cada um deles. Para que isso seja possível, este objeto deve ser uma arma, armadura, escudo ou uma joia, ou alguma outra coisa que você possa vestir ou carregar em uma mão. Sua runa permanece em um objeto até você terminar outro descanso longo, e um objeto pode conter apenas uma runa por vez. As seguintes runas estão disponíveis quando você aprender uma runa. Se uma runa possuir algum requisito de nível, você deve estar pelo menos no nível mínimo exigido para aprendêla. Se uma runa pedir por uma salvaguarda, a CD de magia da runa será 8 + bônus de proficiência + modificador de Constituição. Runa da Nuvem. A magia desta runa simula a magia enganadora utilizada por alguns gigantes das nuvens. Enquanto estiver usando ou carregando um item com essa runa gravada, você tem vantagem nos testes de Destreza (Prestidigitação) e Carisma (Enganação). Adicionalmente, quando você ou uma criatura a até 9 metros for acertada por um ataque, você pode usar sua reação para invocar a runa e escolher outra criatura a até 9m de você, que não seja o atacante. A criaura escolhida se torna o alvo do ataque, utilizando a mesma jogada. Essa magia pode transferir o efeito do ataque independente do alcance original dele. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo. Runa do Fogo. A magia desta runa canaliza a maestria da perícia dos ferreiros gigantes de fogo. Enquanto estiver usando ou carregando um item com uma runa dessas gravada seu bônus de proficiência é dobrado para qualquer teste que utilizar ferramentas. Além disso, ao acertar um ataque com arma em uma criatura, você pode invocar a runa para conjurar grilhões incandescentes: o alvo recebe 2d6 de dano de fogo e deve ser bem-sucedido em uma salvaguarda de Força ou ficará impedido por 1 minuto. Enquanto estiver impedido pelas correntes, o alvo sofre 2d6 de dano de fogo no começo de cada um dos turnos dele. O alvo pode repetir a salvaguarda no final de cada um dos turnos dele, e os grilhões desaparecem caso ele seja bem-sucedido. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo. Runa do Gelo. A magia desta runa evoca o poder daqueles que vivem na vastidão invernal, como os gigantes do gelo. Enquanto estiver usando ou carregando um item com uma runa dessas gravada você tem vantagem nos testes de Sabedoria (Lidar com Animais) e Carisma (Intimidação). Além disso, você pode invocar a runa como uma ação bônus para aumentar sua resistência. Por 10 minutos, você ganha um bônus de +2 para todos os testes de habilidade e salvaguarda que utilizem Força ou Constituição. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo. Runa da Pedra. A magia desta runa canaliza a introspecção associada aos gigantes de pedra. Enquanto estiver usando ou carregando um item com uma dessas runas gravada você tem vantagem nos testes de Sabedoria (Intuição) e adquire visão no escuro com alcance de 36m. Adicionalmente, quando uma criatura que você possa ver termina o turno dela a até 9 metros de você, você pode usar sua reação para invocar a runa e forçar a criatura a fazer uma salvaguarda de Sabedoria. A menos que seja bem-sucedida, a criatura fica enfeitiçada por você por 1 minuto. Enquanto estiver enfeitiça desta forma, a criatura tem deslocamento 0 e fica incapacitada, caindo em um coma estupor cheio de sonhos. A criatura repete a salvaguarda ao final de cada um dos turnos dela, encerrando o efeito em caso de sucesso. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo. Runa da Colina. (7º nível ou superior) A magia desta runa confere uma resistência semelhante à de um gigante da colina. Enquanto estiver usando ou carregando um item com uma dessas runas gravada você tem vantagem em salvaguardas contra ser envenenado e tem resistência contra dano venenoso. Além disso, você pode invocar a runa com uma ação bônus, ganhando resistência a dano cortante, perfurante e contundente por 1 minuto. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo. Runa da Tempestade. (7º nível ou superior) Ao usar esta runa você pode vislumbrar o futuro como um vidente dos gigantes da tempestade. Enquanto estiver usando ou carregando um item com uma dessas runas gravada você tem vantagem nos testes de Inteligência (Arcanismo) e não pode ser surpreendido, desde que não esteja incapacitado. Além disso, você pode invocar a runa com uma ação bônus para entrar em um estado profético por 1 minuto ou até ser incapacitado. Enquanto estiver neste estado, quando você ou outra criatura que você possa ver a até 18m da sua posição fizer uma jogada de ataque, salvaguarda ou teste de habilidade, você pode usar sua reação para dar vantagem ou desvantagem nesta rolagem. Ao invocar esta runa você não poderá fazer isso novamente até terminar um descanso curto ou longo.",
        "page": 60,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PODERIO GIGANTE",
        "level": 3,
        "text": "Você aprendeu como imbuir a si mesmo com o poder dos gigantes. Como uma ação bônus, você magicamente ganha os seguintes benefícios, que duram por 1 minuto: Caso seu tamanho seja menor do que Grande, você se torna Grande, junto com qualque coisa que estiver vestindo. Se não houver espaço para crescer, seu tamanho não muda. Você tem vantagem em testes de Força e salvaguardas de Força. Uma vez por turno, um de seus ataques com arma ou um ataque desarmado podem provocar 1d6 de dano adicional ao alvo em um acerto. Você pode usar esta habilidade um número de vezes igual ao seu bônus de proficiência, e recupera todos os seus usos ao terminar um descanso longo.",
        "page": 61,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ESCUDO RÚNICO",
        "level": 7,
        "text": "Você aprende a invocar sua magia rúnica para proteger seus aliados. Quando outra criatura que você possa ver a até 18m de você for atingida por um ataque, você pode usar sua reação para forçar o atacante a jogar novamente o d20 e ficar com o novo resultado. Você pode usar esta habilidade um número de vezes igual ao seu bônus de proficiência, e recupera todos os seus usos ao terminar um descanso longo.",
        "page": 61,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "GRANDE ESTATURA",
        "level": 10,
        "text": "A magia das runas o afetou permanentemente. Quando ganhar esta característica, role 3d4. Você cresce em altura o resultado total x 2,5 em centímetros. Além disso, o dano extra provocado pelo seu Poderio Gigante aumenta para 1d8.",
        "page": 61,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MESTRE DAS RUNAS",
        "level": 15,
        "text": "Você agora pode invocar cada runa que conhece duas vezes ao invés de uma e recupera todos os seus usos com um descanso curto ou longo.",
        "page": 61,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "COLOSSO RÚNICO",
        "level": 18,
        "text": "Você aprendeu como amplificar sua transformação motivada pelas runas. Como resultado, o dano extra que você provoca com o Poderio Gigante aumenta para 1d10. Adicionalmente, quando você utilizar essa característica, seu tamanho pode aumentar para Enorme e, enquanto neste tamanho, seu alcance é ampliado em 1,5m.",
        "page": 62,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-fantasma",
    "classId": "rogue",
    "name": "Fantasma",
    "desc": "Muitos ladinos caminham por uma linha tênue entre a vida e a morte, arriscando suas próprias vidas e tirando a vida de outros. Enquanto se aventurando nessa linha, alguns ladinos descobrem uma conexão mística com a própria morte. Esses ladinos tomam conhecimento da morte e tornam-se imersos em energia negativa, eventualmente transformando-se em algo próximo a fantasmas. Guildas de ladrões valorizam esses ladinos altamente eficientes como coletores de informação e espiões. Muitos Shadar-Kai do Sombral são mestres destas técnicas macabras, e alguns estão dispostos a ensinar esse caminho. Em lugares como Thay, nos Reinos Esquecidos, e Karrnath, em Eberron, aonde muitos necromantes praticam seus ofícios, um Fantasma pode se tornar o confidente e mão direita de um mago. Nos templos de deuses da morte, o Fantasma pode servir como um agente para rastrear aqueles que tentam enganar a morte e para recuperar o conhecimento que de outra forma poderia ser perdido para o túmulo. Como você descobriu esse poder macabro? Você dormiu em um cemitério e acordou com suas novas habilidades? Ou você os cultivou em um templo ou guida de ladrões dedicado a uma divindade da morte?",
    "sourcePage": 64,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "64–66",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "SUSSURROS DA MORTE",
        "level": 3,
        "text": "Ecos daqueles que morreram se prendem a você. Sempre que você termina um descanso curto ou longo, você pode escolher uma proficiência com ferramenta ou perícia que você não possua e adquirir isso, conforme uma presença fantasma compartilha seu conhecimento com você. Você perde essa proficiência quando utilizar essa característica para escolher outra proficiência que não possua.",
        "page": 65,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LAMENTOS DA SEPULTURA",
        "level": 3,
        "text": "Conforme você empurra alguém para próximo do túmulo, você pode canalizar o poder da morte para ferir a alguma outra pessoa. Imediatamente após causar dano com seu Ataque Furtivo a uma criatura em seu turno, você pode focar uma segunda criatura que você possa ver a até 9m de distância da primeira criatura. Jogue metade do número de dados de Ataque Furtivo (arredondado para cima), e a segunda criatura recebe dano necrótico igual ao valor total da jogada, conforme os lamentos da sepultura soam ao seu redor por um momento. Você pode usar essa característica um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos ao finalizar um descanso longo.",
        "page": 65,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "SÍMBOLOS DOS MORTOS",
        "level": 9,
        "text": "Quando uma vida se encerra em sua presença, você é capaz de arrebatar um símbolo da alma partida, um fragmento de sua essência vital que toma uma forma física: como uma reação, quando uma criatura que você possa ver morre a até 9m de você, você pode abrir sua mão livre e fazer com que uma bugiganga minúscula apareça nela, um berloque da alma. O Mestre determina a forma do berloque ou joga na tabela de Bugigangas no Livro do Jogador para gerá-lo. Você pode ter um número máximo de berloques da alma igual ao seu bônus de proficiência, e você não pode criar um enquanto estiver nesse limite. Você pode usar berloques da alma da seguinte forma: Enquanto estiver com um berloque da alma, você tem vantagem em salvaguardas de Constituição e testes de morte, uma vez que sua vitalidade é aprimorada pela essência da vida nesses objetos. Quando você provoca dano pelo Ataque Furtivo em seu turno, você pode destruir um de seus berloques da alma que esteja em sua posse e então imediatamente provocar dano com o seu Lamentos da Sepultura, sem gastar um uso dessa característica. Com uma ação, você pode destruir um de seus berloques da alma, independente de onde ele se encontre. Quando você faz isso, você pode perguntar uma questão ao espírito associado a esse item. O espírito aparece para você e responde em um idioma que conhecia em vida. Ele não tem a obrigação de ser confiável, e sua resposta é o mais curta possível, ansiando por ser livre. O espírito sabe apenas o que conhecia em vida, conforme determinado pelo Mestre.",
        "page": 65,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "PASSO FANTASMA",
        "level": 13,
        "text": "Você pode passar parcialmente para o reino dos mortos, transformando-se em uma espécie de fantasma. Como uma ação bônus, você assume uma forma espectral. Enquanto nesse forma, você tem um deslocamento de voo de 3m, você pode planar, e jogadas de ataque possuem desvantagem contra você. Você também pode se mover através de criaturas e objetos como se eles fossem terreno difícil, mas você sofre 1d10 de dano de energia se terminar seu turno dentro deles. Você permanece nessa forma por 10 minutos ou até que a encerre como uma ação bônus. Para usar essa característica novamente, você deve finalizar um descanso longo ou destruir um de seus berloques da alma como parte da ação bônus utilizada para ativar o Passo Fantasma.",
        "page": 65,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "AMIGO DA MORTE",
        "level": 17,
        "text": "Sua associação com a morte se tornou tão próxima que você adquire os seguintes benefícios. Quando você utiliza o seu Lamentos da Sepultura, você pode provocar o dano necrótico tanto na primeira quanto na segunda criatura. No final de um descanso longo, um berloque da alma aparece em sua mão se você não tiver nenhum desses itens, conforme os espíritos dos mortos são atraídos para você.",
        "page": 66,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-alma-laminada",
    "classId": "rogue",
    "name": "Alma Laminada",
    "desc": "Muitos assassinos golpeiam com armas físicas, e muitos invasores e espiões utilizam ferramentas de ladrão para se infiltrarem em locais seguros. Contrastando com eles, uma Alma Laminada golpeia e se infiltra com a mente, cortando através de barreiras tanto físicas quanto psíquicas. Esses ladinos descobriram o poder psiônico dentro de si mesmos e canalizam isso em seu serviço ladinesco. Eles encontram uma aplicação fácil como membros de guildas de ladrões, ainda que sejam frequentemente tratados com suspeita por ladinos desconfiados de qualquer um utilizando estranhos poderes mentais para conduzir seus negócios. Muitos governos também ficariam bem felizes em empregar um Alma Laminada como espião. Por entre as árvores ancestrais do Plano Material e em Faéria, alguns elfos das florestas trilham o caminho do Alma Laminada, agindo como guardiões silenciosos e letais das suas florestas. Na guerra infinita entre os gith, um githzerai é encorajado a se tornar um Alma Laminada quando a furtividade é exigida contra os inimigos githyanki. Como um Alma Laminada, suas habilidades psiônicas podem tê-lo assombrado desde a infância, apenas revelando seu verdadeiro potencial conforme você vivenciava a adrenalina da aventura. Ou você pode ter procurado uma ordem reclusa de adeptos psíquicos e passou anos aprendendo como manifestar o seu poder.",
    "sourcePage": 66,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "66–68",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PODER PSÍQUICO",
        "level": 3,
        "text": "Você abriga uma fonte de energia psíquica dentro de você. Essa energia é representada por seus dados de Energia Psíquica, que são d6. Você possui um número de dados de Energia Psíquica equivalente ao dobro de seu bônus de proficiência, e eles alimentam vários de seus poderes psiônicos, que são detalhados abaixo. Alguns de seus poderes gastam os dados de Energia Psíquica que eles utilizam, conforme especificado em sua descrição, e você não pode utilizar um poder se ele exigir que você use um dado, mas você não tiver nenhum disponível. Você recupera todos os dados de Energia Psíquica gastos quando termina um descanso longo. Adicionalmente, como uma ação bônus, você pode recuperar um dado de Energia Psíquica gasto, mas só poderá fazer isso novamente após um descanso curto ou longo. Quando você alcança certos níveis nessa classe, o valor do seu dado de Energia Psiônica aumenta: no 5º nível (d8), no 11º nível (d10), e no 17º nível (d12). Os poderes abaixo utilizam o seu dado de Energia Psíquica. Auxílio Psíônico. Quando seu treinamento não psiônico falha, sua energia psíquica pode ajudar: se você falhar em um teste de habilidade utilizando uma perícia ou ferramenta na qual seja proficiente, você pode jogar um dado de Energia Psíquica e adicionar o seu resultado ao valor do teste, potencialmente transformando uma falha em sucesso. Você gasta o dado apenas se a rolagem for bem sucedida. Sussurros psíquicos. Você pode estabelecer uma comunicação telepática entre si mesmo e os outros - perfeito para uma infiltração silenciosa. Usando uma ação, escolha uma ou mais criaturas em seu campo de visão, até um número máximo igual o seu bônus de proficiência, e então jogue o dado de Energia Psíquica. Pelo número de horas igual ao resultado desse dado, as criaturas escolhidas podem falar telepaticamente com você, e você com elas. Para enviar ou receber uma mensagem (não consome ações), você e a outra criatura devem estar a até 1,5km um do outro. Uma criatura não pode utilizar essa telepatia se não souber falar nenhum idioma, e uma criatura pode encerrar a conexão telepática a qualquer momento, sem o gasto de ações. Você e a criatura não precisam falar o mesmo idioma para se entenderem. A primeira vez que utiliza esse poder após um descanso longo, você não gasta dados de Energia psíquica. Todas as outras vezes que utilizar o poder, você gastará um dado no momento de sua ativação.",
        "page": 66,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LÂMINAS PSÍQUICAS",
        "level": 3,
        "text": "Você pode manifestar seu poder psiônico como lâminas cintilantes de energia psíquica. Sempre que realizar a ação de Ataque, você pode manifestar uma lâmina psíquica em uma mão livre e realizar o ataque com ela. Ela lâmina mágica é uma arma de combate corpo a corpo simples, com as propriedades de Acuidade e Arremesso. Seu alcance normal atributo utilizado que você utilizou no ataque. A lâmina desaparece imediatamente após o ataque, tendo acertado ou errado o alvo, e não deixa nenhuma marca no alvo caso tenha provocado dano.Após você atacar com a lâmina, você pode realizar um ataque com arma corpo a corpo ou à distãncia com uma segunda lâmina psíquica com uma ação bônus no mesmo turno, desde que a outra mão esteja livre para criar a lâmina. O dado de dano para esse segundo ataque é um d4, em vez do d6.",
        "page": 67,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LÂMINAS DA ALMA",
        "level": 9,
        "text": "Suas Lâminas Psíquicas são agora uma expressão de sua alma infusa em energia psiônica, concedendo a você as seguintes habilidades que utilizam os seus dados de Energia psíquica: Golpe Teleguiado. Se você realizar uma jogada de ataque com suas Lâminas psíquicas e errar, você pode jogar um dado de Energia Psíquica e adicionar o número rolado ao resultado de seu ataque. Se isso fizer o ataque acertar, você gasta esse dado de Energia psíquica. Teletransporte Psíquico. Com uma ação bônus, você manifesta uma de suas Lâminas Psíquicas, gastando e rolando um dado de Energia Psíquica. Você atira essa Lâmina em um espaço desocupado que você possa ver a até uma quantia em metros equivalente a 3 vezes o resultado do dado. Você pode se teletransportar para esse espaço, e a Lâmina desaparece.",
        "page": 67,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "VÉU PSÍQUICO",
        "level": 13,
        "text": "Você pode utilizar um véu de energia energia psíquica para mascarar a si mesmo. Com uma ação, você pode magicamente ficar invisível, junto com qualquer coisa que esteja vestindo ou carregando, por 1 hora ou até você dissipar o efeito (sem o gasto de ações para tal). Essa invisibilidade acaba antes caso você cause dano a uma criatura ou a obrigue a realizar uma salvaguarda. Assim que utilizar esta habilidade, você não poderá fazer isso novamente até que termine um descanso longo, a menos que gaste um dado de Energia Psíquica para ativá-la novamente.",
        "page": 67,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MENTE PURA",
        "level": 17,
        "text": "Você pode direcionar as suas Lâminas Psíquicas diretamente para a mente de uma criatura. Quando você utiliza as suas Lâminas Psíquicas para dar dano de Ataque Furtivo em uma criatura, você pode forçar o alvo a realizar uma salvaguarda de Sabedoria (CD igual a 8 + seu bônus de proficiência + seu modificador de Destreza). Se falhar, o alvo fica atordoado por 1 minuto. O alvo atordoado pode repetir a salvaguarda no final de cada um de seus turnos, encerrando o efeito sobre si em caso de sucesso. Assim que utilizar esta habilidade, você não poderá fazer isso novamente até que termine um descanso longo, a menos que gaste um dado de Energia Psíquica para ativá-la novamente.",
        "page": 67,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-lamina-cantante",
    "classId": "wizard",
    "name": "Lâmina Cantante",
    "desc": "Lâminas Cantantes dominam a tradição da magia que incorpora o manejo das espadas e a dança. Originalmente criada pelos elfos, essa tradição foi adotada por praticantes de outras raças, que honram e expandem os métodos élficos. Em combate, um Lâmina Cantante utiliza uma série de manobras intrincadas e elegantes que repelem danos e permitem a ele canalizar a magia em ataques devastadores e defesas astuciosas. Muitos que já observaram um lâmina cantante em ação lembram-se dessa demonstração como uma das experiências mais bonitas de suas vidas, uma dança gloriosa acompanhada por uma canção laminada.",
    "sourcePage": 68,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "68–70",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "TREINAMENTO NA GUERRA E NA MÚSICA",
        "level": 2,
        "text": "Você adquire proficiência com armaduras leves, e você ganha proficiência com um tipo de arma de ataque corpo a corpo de uma mão, a sua escolha. Você também ganha proficiência na perícia Atuação, caso ainda não a possua.",
        "page": 68,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANÇÃO DA LÂMINA",
        "level": 2,
        "text": "Você pode invocar uma magia élfica secreta chamada de Canção da Lâmina, desde que você não esteja vestindo uma armadura média ou pesada, ou usando um escudo. Essa magia lhe abençoa com uma velocidade, agilidade e foco sobrenaturais. Você pode usar uma ação bônus para iniciar a Canção da Lâmina, que dura por 1 minuto. Ela termina antes se você ficar incapacitado, vestir uma armadura média ou pesada, usar um escudo, ou se você fizer uso das duas mãos para atacar com uma arma. Você também pode dissipar a Canção da Lâmina quando desejar (nenhuma ação é necessária). Enquanto sua Canção da Lâmina estiver ativa, você tem os seguintes benefícios: Você ganha um bônus em sua CA igual ao seu modificador de Inteligência (mínimo de +1). Seu deslocamento aumenta em 3 metros. Você tem vantagem nos testes de Destreza (Acrobacia). Você ganha um bônus em qualquer salvaguarda de Constituição que você fizer para manter sua concentração em uma magia. O bônus é igual ao seu modificador de Inteligência (minimo de +l). Você pode usar essa característica uma quantia de vezes igual ao seu bônus de proficiência, e você recupera todos os usos após terminar um descanso curto ou longo.",
        "page": 68,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 6,
        "text": "Você pode atacar duas vezes, em vez de uma, sempre que você realizar de uma ação de Ataque no seu turno. Além disso, você pode conjurar um de seus truques no lugar de um desses ataques.",
        "page": 69,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANÇÃO DA DEFESA",
        "level": 10,
        "text": "Você pode direcionar sua magia para absorver dano enquanto sua Canção da Lâmina estiver ativa. Quando receber dano, você pode usar sua reação para gastar um espaço de magia e reduzir o dano recebido por você em uma quantia igual a cinco vezes o círculo do espaço de magia gasto.",
        "page": 69,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANÇÃO DA VITÓRIA",
        "level": 14,
        "text": "adicionar o seu modificador de Inteligência (mínimo de +1) ao dano dos ataques de sua arma corpo a corpo enquanto sua Canção da Lâmina estiver ativa.",
        "page": 69,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-ordem-dos-escribas",
    "classId": "wizard",
    "name": "Ordem dos Escribas",
    "desc": "Magia do livro – é o que muitas pessoas chamam de feitiçaria. O nome é adequado, considerando quanto tempo magos gastam debruçados em tomos e escrevendo teorias sobre a natureza da magia. É raro ver magos viajando sem livros e pergaminhos brotando de suas mochilas, e um mago percorreria longas distâncias para examinar um acervo de conhecimento antigo. Entre os magos, a Ordem dos Escribas é a mais estudiosa. Ela assume muitas formas em mundos diferentes, mas sua missão principal é a mesma em todos os lugares: registrar descobertas mágicas para que a magia possa florescer. E embora todo mago valorize seu livro de magia, um mago da Ordem dos Escribas desperta magicamente o seu, transformando-o em um companheiro confiável. Todos os magos estudam livros, mas um mago escriba fala com os dele!",
    "sourcePage": 69,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "69–72",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "PENA MÁGICA",
        "level": 2,
        "text": "Como uma ação bônus, você pode magicamente criar uma pena Minúscula em sua mão livre. A pena mágica possui as seguintes propriedades: A pena não requer tinta. Quando você a utiliza, ela produz tinta em uma cor de sua escolha sobre a superfície de escrita. O tempo utilizado para copiar uma magia para seu livro de magia é igual a 2 minutos por círculo de magia se você usar a pena para a transcrição. Usando uma ação bônus você pode apagar qualquer coisa que você escreva com a pena se balançar a pluma sobre o texto, desde que esse texto esteja a até 1,5m de você. A pena desaparece se você criar outra ou se você morrer.",
        "page": 70,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LIVRO DE MAGIA DESPERTO",
        "level": 2,
        "text": "Usando tintas especialmente preparadas e encantamentos antigos passados por sua ordem de magia, você pode despertar uma consciência arcana dentro do seu livro de magia. Enquanto estiver segurando o livro, ele lhe fornece os seguintes benefícios: Você pode usar o livro como foco de conjuração para suas magias de mago. Quando você conjurar uma magia de mago com um espaço de magia, você pode temporariamente substituir o tipo de dano dessa magia para um tipo de dano de outra magia no seu grimório, o que magicamente altera a fórmula da magia para esta única conjuração. A magia usada como base para o tipo de dano substituto precisa ser de mesmo círculo do espaço de magia que você utilizou. Quando você conjurar uma magia de mago como ritual, você pode usar o tempo de conjuração normal da magia em vez de adicionar 10 minutos para a conjuração. Assim que usar este benefício, você não poderá fazer isso novamente até que termine um descanso longo. Se necessário, você pode substituir o livro durante um descanso curto usando sua Pena Mágica para escrever selos arcanos em outro livro em branco ou um grimório mágico ao qual você esteja sintonizado. Ao fim desse descanso, a consciência do seu grimório é transportada para o novo livro, o transformando em seu novo livro de magia, junto a todas as suas magias. Se o grimório anterior ainda existe em algum lugar, todas as magias desaparecem de suas páginas.",
        "page": 70,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MANIFESTAR MENTE",
        "level": 6,
        "text": "Você pode invocar a mente do seu Livro de Magia Desperto. Usando uma ação bônus enquanto estiver portando o livro, você pode fazer com que a mente dele se manifeste como um objeto espectral Minúsculo, pairando sobre um espaço desocupado a sua escolha a até 18m de você. A mente espectral é intangível e não ocupa esse espaço, e irradia meialuz em um raio de 3m. Ela se parece com um tomo fantasmagórico, uma cascata de texto, ou um estudioso do seu passado (a sua escolha). Enquanto manifesta, a mente espectral pode ver e ouvir, e possui visão no escuro de 18m. A mente pode compartilhar telepaticamente com você o que ela percebe (nenhuma ação é necessária). Sempre que você conjurar uma magia de mago em seu turno, você pode fazer isso como se estivesse no espaço da mente espectral, em vez de no seu próprio, usando os sentidos da mente. Você pode fazer isso um número de vezes por dia igual ao seu bônus de proficiência, e você recupera todos os usos ao terminar um descanso longo. Com uma ação bônus, você pode fazer com que a mente espectral se mova a até 9m para um espaço desocupado que você possa ver. Ela pode passar através de criaturas, mas não por objetos. A mente espectral para de se manifestar se estiver a mais de 90m de você, se alguém conjurar “dissipar magia” sobre ela, se o Livro de Magia Desperto for destruído, se você morrer, ou se você usar sua ação bônus para dispensá-la. Uma vez que tenha conjurado a mente, você não pode fazer isso de novo até terminar um descanso longo, a menos que gaste um espaço de magia de qualquer círculo para tal.",
        "page": 70,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MESTRE ESCRIBA",
        "level": 10,
        "text": "Sempre que finalizar um descanso longo, você pode criar um pergaminho de magia apenas tocando sua Pena Mágica em um papel ou pergaminho em branco e fazendo que a magia do seu Livro de Magia Desperto seja copiada para ele. O grimório deve estar a até 1,5m de você quando você criar esse pergaminho de magia. A magia escolhida deve ser de 1º ou 2º círculo e deve ter o tempo de conjuração de 1 ação. Uma vez no pergaminho, o poder da magia é aprimorado, contando como um círculo acima do que o normal. Você pode conjurar a magia pelo pergaminho de magia usando uma ação para sua leitura. O pergaminho de magia é ininteligível para todos os outros, e a magia desaparece do pergaminho quando você a conjurar ou quando você terminar seu próximo descanso longo. Você é também apto na criação de pergaminhos de magia, que são descritos no capítulo sobre tesouros do “Guia do Mestre”. O ouro e o tempo gastos para criar um pergaminho são diminuídos pela metade se você utilizar sua Pena Mágica.",
        "page": 71,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "UM COM A PALAVRA",
        "level": 14,
        "text": "Sua conexão com seu Livro de Magias Desperto se tornou tão profunda que sua alma entrelaçou-se a ele. Enquanto o livro estiver com você, você possui vantagem em todos os testes de Inteligência (Arcanismo), conforme o livro o ajuda a se lembrar dos conhecimentos mágicos. Além disso, se você receber dano enquanto o livro estiver com sua Mente Manifesta, você pode prevenir todo esse dano usando sua reação para fazer a mente espectral desaparecer, usando sua magia para se salvar. Então role 3d6. O livro de magias temporariamente perde uma quantia de magias a sua escolha que devem possuir um valor de círculo de magia igual a rolagem ou maior. Por exemplo, se o valor total da rolagem for 9, as magias que desaparecem do livro devem possuir um valor de círculo de no mínimo 9; o que pode significar uma única magia de 9º círculo, 3 de 3º círculo, ou qualquer outra combinação que totalize 9. Se não houver magias suficientes no livro de magias para cobrir esse custo, você cai a 0 pontos de vida. Até você terminar 1d6 descansos longos, você é incapaz de conjurar as magias perdidas, mesmo se você encontrá-las em um pergaminho de magia ou em outro livro de magias. Após terminar o número de descansos exigidos, as magias reaparecem no seu grimório. Uma vez que use essa reação, você não pode fazer isso novamente até terminar um descanso longo.",
        "page": 71,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-caminho-da-misericordia",
    "classId": "monk",
    "name": "Caminho da Misericórdia",
    "desc": "Monges do Caminho da Misericórdia aprendem a manipular a força vital dos outros para auxiliar aqueles em necessidade. Eles são médicos ambulantes para os pobres e feridos. Contudo, para aqueles além de sua ajuda, eles trazem um fim rápido, como um ato de misericórdia. Aqueles que seguem o Caminho da Misericórdia podem ser membros de uma ordem religiosa, administrada a favor dos necessitados e fazendo escolhas amargas baseadas na realidade em vez de no idealismo. Alguns podem ser curadores de fala mansa, amados por seus companheiros, enquanto outros podem ser mascarados portadores de uma macabra misericórdia. Os caminhantes desta senda normalmente vestem mantos com capuzes pesados, e frequentemente escondem seus rostos com uma máscara, apresentando a si mesmos como portadores sem face da vida e da morte.",
    "sourcePage": 72,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "72–74",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "IMPLEMENTOS DA MISERICÓRDIA",
        "level": 3,
        "text": "Você adquire proficiência nas perícias de Intuição e Medicina, além de ganhar proficiência com o kit de herbalismo. Você também recebe uma máscara especial, que você frequentemente veste quando está utilizando as características dessa subclasse. Você determina sua aparência, ou a gera aleatoriamente jogando na tabela de Máscara Misericordiosa. Máscara Misericordiosa d6 Aparência da Máscara Corvo Preta e Branca Rosto Chorando Rosto Gargalhando Caveira Borboleta",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MÃOS CURATIVAS",
        "level": 3,
        "text": "Seu toque místico pode curar ferimentos. Como uma ação, você pode gastar 1 ponto de ki para tocar uma criatura e restaurar uma quantia de pontos de vida igual ao resultado da jogada de um dado de Artes Marciais + seu modificador de Sabedoria. Quando você utilizar sua torrente de golpes,você pode substituir um dos ataques desarmados por um uso dessa característica sem gastar um ponto de ki pela cura.",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MÃOS DA INJÚRIA",
        "level": 3,
        "text": "Você pode usar o seu ki para causar ferimentos. Qundo você acerta uma criatura com um ataque desarmado, você pode gastar 1 ponto de ki para causar dano necrótico extra igual a uma jogada do seu dado de Artes Marciais+ seu modificador de Sabedoria. Você pode utilizar essa característica apenas uma vez por turno.",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "TOQUE DO CURANDEIRO",
        "level": 6,
        "text": "Você pode administrar até mesmo grandes curas com seu toque e, se achar necessário, você pode usar seu conhecimento para causar dano. Quando você utilizar suas Mãos curativas em uma criatura, você também pode remover uma doença ou uma das seguintes condições que esteja afetando a criatura: atordoado, cego, ensurdecido, envenenado ou paralisado. Quando você utilizar suas Mãos da injúria em uma criatura, você pode sujeitar o alvo à condição de envenenado até o final do seu próximo turno.",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "TORRENTE DE CURA E DOR",
        "level": 11,
        "text": "Você agora pode propagar uma torrente de cura e dor. Quando você usar sua Torrente de golpes, você agora pode substituir cada um de seus ataques desarmados por um uso de suas mãos curativas sem gastar pontos de ki para curar. Adicionalmente, quando você realizar um ataque desarmado com a Torrente de golpes, você pode utilizar a característica Mãos da injúria com esse golpes sem gastar o ponto de ki por ela. Você ainda pode utilizar a Mãos da injúria apenas uma vez por turno.",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "MÃO DA MISERICÓRDIA FINAL",
        "level": 17,
        "text": "Seu domínio sobre a energia da vital abriu a porta para a misericórdia final. Como uma ação, você pode tocar o corpo de uma criatura que morreu dentro das últimas 24 horas e gastar 5 pontos de ki. A criatura então retorna à vida, recuperando uma quantia de pontos de vida igual a 4d10 + seu modificador de Sabedoria. Se a criatura morreu enquanto sob o efeito de uma dessas condições, ela a terá removida ao ser trazida de volta: cega, ensurdecida, paralisada, envenenada ou atordoada. Uma vez que use essa característica, você não poderá fazêlo novamente até que termine um descanso longo.",
        "page": 73,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-caminho-da-forma-astral",
    "classId": "monk",
    "name": "Caminho da Forma Astral",
    "desc": "Um monge que segue o Caminho da Forma Astral acredita que seu corpo é uma ilusão. Eles enxergam seu ki como a representação de sua forma verdadeira, sua forma astral. Essa forma astral possui a capacidade de ser uma força da ordem ou da desordem, com alguns monastérios treinando estudantes para usarem seus poderes para proteger os fracos e outros instruindo aspirantes em como manifestar seu eu verdadeiro em serviço do poder.",
    "sourcePage": 74,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "74–76",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "BRAÇOS DA FORMA ASTRAL",
        "level": 3,
        "text": "Seu domínio sobre o ki permite que você manifeste uma parte de sua forma astral. Como uma ação bônus, você pode gastar 1 ponto de ki para invocar os braços de sua forma astral. Ao fazê-lo, cada criatura a sua escolha que você possa ver a até 3m de você deve ser bem-sucedida em uma salvaguarda de Destreza ou sofrerá dano de energia equivalentes à rolagem de dois dados de Artes Marciais. Durante 10 minutos, esses braços espectrais pairam perto de seus ombros ou cercam seus braços (conforme desejar). Você determina a aparência desses braços, e eles desaparecem assim que você for incapacitado ou morto. Enquanto os braços espectrais estiverem presentes, você ganha os seguintes benefícios: Você pode utilizar o seu modificador de Sabedoria em vez do modificador de força para testes de habilidade e salvaguardas de Força. Você pode utilizar os braços espectrais para realizar ataques desarmados. Quando realizar um ataque desarmado com esses braços em seu turno, seu alcance para eles é superior em 1,5m ao seu alcance normal. Os ataques desarmados que você faz com os braços espectrais podem utilizar seu modificador de Sabedoria em vez do modificador de Força ou Destreza para as rolagens de ataque e de dano, e seu tipo de dano é de energia.",
        "page": 74,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "SEMBLANTE DA FORMA ASTRAL",
        "level": 6,
        "text": "Você pode invocar o semblante de sua forma astral. Como uma ação bônus, ou como parte da ação bônus utilizada para ativar os Braços da forma Astral, você pode gastar 1 ponto de ki para invocar essa aparência por 10 minutos. Ela desaparece assim que você for incapacitado ou morto. Enquanto esse semblante espectral estiver presente, você adquire os seguintes benefícios. Visão Astral. Você pode enxergar normalmente na escuridão, tanto mágica quanto não-mágica, a uma distância de até 36m. Sabedoria espiritual. Você possui vantagem nos testes de Sabedoria (Intuição) e Carisma (Intimidação). Palavra espiritual. Quando você fala, você pode direcionar as suas palavras a uma criatura a sua escolha que você possa ver a até 18m de você, fazendo com que apenas essa criatura possa ouvi-lo. Alternativamente, você pode amplificar sua voz de forma que todas as criaturas a até 180m possam escutá-lo.",
        "page": 74,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CORPO ASTRAL",
        "level": 11,
        "text": "Quando você tiver tanto seus braços quanto seu semblante da forma astral ativos, você pode fazer com que o corpo de sua forma astral apareça (nenhuma ação é necessária). Esse corpo espectral recobre sua forma física como uma armadura, conectando seus braços e seu semblante. Você determina sua aparência. Enquanto o corpo astral está ativo, você ganha os seguintes benefícios. Defletir energia. Quando você sofre dano ácido, gélido, ígneo, elétrico, trovejante ou de energia, você pode usar sua reação para defletir isso. Ao fazê-lo, o dano que você sofreria é reduzido em 1d10 + seu modificador de Sabedoria (com a redução mínima de 1 ponto). Braços aprimorados. Uma vez em cada um dos seus turnos, quando você acertar um alvo com os Braços da Forma Astral, você pode provocar dano extra ao alvo equivalente ao valor de seu dado de Artes Marciais.",
        "page": 74,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "FORMA ASTRAL DESPERTA",
        "level": 17,
        "text": "Sua conexão com sua forma astral está completa, permitindo que você libere todo o seu potencial. Como uma ação bônus, você pode gastar 5 pontos de ki para invocar os braços, o semblante e o corpo de sua forma astral e despertálas por 10 minutos. Essa forma desaparece se você for incapacitado ou morto. Enquanto sua forma astral estiver desperta, você ganha os seguintes benefícios: Armadura espiritual. Você ganha +2 de bônus em sua CA. Barreira astral. Sempre que usar a característica de ataque extra para atacar duas vezes, você poderá atacar uma terceira vez se todos os seus ataques forem realizados com os braços da forma astral.\n\nAparência da sua Forma Astral A forma astral é uma personificação translúcida da alma do monge. Como resultado, uma forma astral pode refletir aspectos dos antecedentes, ideais, vínculos e defeitos do monge, e a forma astral não necessariamente se parece de alguma forma com ele. Por exemplo, a forma astral de um humano esguio pode lembrar um minotauro - a força que o monge sente que tem dentro de si. De maneira semelhante, um monge orc pode manifestar braços diáfanos e um semblante delicado, representando a beleza gentil da alma do orc. Cada forma astral é única, e alguns dos monges dessa tradição monástica são mais conhecidos pela aparência de sua forma astral do que por sua aparência física real. Ao escolher esse caminho, considere os pontos que definem seu monge. Ele é obcecado com algo? Ele é guiado pela justiça ou por um desejo egoísta? Alguma dessas motivações poderia se manifestar na aparência de sua forma astral.",
        "page": 74,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ]
  },
  {
    "id": "tasha-juramento-da-gloria",
    "classId": "paladin",
    "name": "Juramento da Glória",
    "desc": "Paladinos que tomam o Juramento da Glória acreditam que eles e seus companheiros estão destinados a alcançar a glória através de seus atos de heroísmo. Eles treinam diligentemente e encorajam seus companheiros para que todos estejam prontos quando o destino chamar. Princípios da Glória Os princípios do Juramento da Glória direcionam o paladino a executar atos heroicos para um dia figurar nas lendas. Ações antes das palavras. Esforce-se para ser conhecido pelos seus atos gloriosos, não por palavras. Desafios são testes. Enfrente os tempos difíceis com coragem, e encoraje seus aliados a enfrentar isso com você. Aprimore o corpo. Assim como a pedra bruta, seu corpo deve ser trabalhado para desenvolver todo o seu material. Discipline a alma. Você deve empregar a disciplina para superar as falhas internas que ameaçam obscurecer sua glória e a de seus amigos.",
    "sourcePage": 77,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "77–79",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE JURAMENTO",
        "level": 3,
        "text": "Você adquire magias de juramento nos níveis de paladino listados na tabela de Magias do Juramento da Glória. Veja a característica de Juramento Sagrado para ver como as magias funcionam. Magias do Juramento da Glória Nível de Paladino Magias 3º Raio Guia, Heroísmo 5º Aprimorar Atributo, Arma Mágica 9º Celeridade, Proteção Contra Energia 13º Compulsão, Movimentação Livre 17º Comunhão, Coluna de Chamas",
        "page": 77,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "text": "Você adquire as duas opções a seguir de Canalizar Divindade. Veja a característica do Juramento Sagrado sobre como o Canalizar Divindade funciona. Atleta Inigualável. Como uma ação bônus, você pode usar o seu Canalizar Divindade para aprimorar o seu atletismo. Pelos próximos 10 minutos, você adquire vantagem nos testes de Força (Atletismo) e Destreza (Acrobacia); você pode carregar, empurrar, arrastar e levantar o dobro de peso do que o normal, e a distância de seus saltos à distância e em altura aumentam 3m (essa distância extra consome o deslocamento como o normal). Golpe inspirador. Imediatamente após você causar dano a uma criatura com sua Destruição Divina, você pode usar o seu Canalizar Divindade como uma ação bônus e distribuir pontos de vida temporários para criaturas a sua escolha a até 9m de você, o que pode incluir a si mesmo. O número total de pontos de vida temporários é igual a 2d8 + seu nível nessa classe, divididos entre as criaturas escolhidas da forma que você preferir",
        "page": 77,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "AURA DE VIVACIDADE",
        "level": 7,
        "text": "Você emana uma aura que preenche você e seus companheiros com uma velocidade sobrenatural, permitindo que você atravesse rapidamente o campo de batalha em formação. Seu deslocamento aumenta 3m. Adicionalmente, se você não estiver incapacitado, o deslocamento de qualquer aliado que comece o turno a até 1,5m de você também aumenta 3m até o final do turno dele. Quando você alcança o 18º nível, o alcance da aura aumenta para 3m.",
        "page": 78,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "DEFESA GLORIOSA",
        "level": 15,
        "text": "Você pode transformar sua defesa em um golpe súbito. Quando você ou outra criatura que você possa ver a até 3m de distância de você for acertada por uma jogada de ataque, você pode usar sua reação para fornecer um bônus para a CA do alvo contra esse ataque, potencialmente fazendo com que ele erre. O bônus é igual ao seu modificador de Carisma (mínimo de +1). Se o ataque errar, você pode realizar um ataque com arma contra o atacante como parte dessa reação, desde que ele esteja dentro do alcance da sua arma. Você pode usar essa característica um número de vezes igual ao seu modificador de Carisma (mínimo de uma vez), e você recupera todos os usos ao terminar um descanso longo.",
        "page": 78,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "LENDA VIVA",
        "level": 20,
        "text": "Você pode fortalecer a si mesmo através das lendas – sejam verdadeiras ou exageradas – de seus grandes feitos. Como uma ação bônus, você adquire os seguintes benefícios por 1 minuto: Você é abençoado com uma presença sobrenatural, ganhando vantagens em todos os testes de Carisma. Uma vez por turno, quando você realizar um ataque com arma e errar, você pode definir que o ataque acerte em vez disso. Se você falhar em uma salvaguarda, você pode usar sua reação para jogar novamente. Você deve ficar com o novo resultado. Assim que usar essa ação bônus, você não poderá utilizá-la novamente até que termine um descanso longo, a menos que você gaste um espaço de magia de 5º nível para isso.",
        "page": 78,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento da Glória",
        "page": 77,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
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
            "spells": "Raio Guia; Heroísmo"
          },
          {
            "level": "5º",
            "spells": "Aprimorar Atributo; Arma Mágica"
          },
          {
            "level": "9º",
            "spells": "Celeridade; Proteção Contra Energia"
          },
          {
            "level": "13º",
            "spells": "Compulsão; Movimentação Livre"
          },
          {
            "level": "17º",
            "spells": "Comunhão; Coluna de Chamas"
          }
        ]
      }
    ]
  },
  {
    "id": "tasha-juramento-da-vigilancia",
    "classId": "paladin",
    "name": "Juramento da Vigilância",
    "desc": "O Juramento da Vigilância compromete um paladino a proteger os reinos mortais da predação de criaturas extraplanares, muitas das quais podem acabar com soldados mortais. Por conta disso, esses paladinos estão sempre vigilantes para captar a presença de forças extraplanares, frequentemente estabelecendo uma rede de espiões e informantes para reunir informações de cultos suspeitos. Para um Vigilante, manter a prontidão e uma suspeita saudável sobre aqueles ao seu redor é tão natural quanto vestir uma armadura em combate. Princípios da Vigilância Um paladino que assuma o Juramento da Vigilância jura proteger o reino mortal de ameaças de outros mundos. Vigilância. As ameaças que você enfrenta são sagazes, poderosas, e subversivas. Esteja sempre alerta para sua corrupção. Lealdade. Nunca aceite presentes ou favores de corruptores ou daqueles negociam com eles. Seja verdadeiro com a sua ordem, seus companheiros, e seu dever. Disciplina. Você é o escudo contra os terrores infinitos que se encontram além das estrelas. Sua lâmina deve estar sempre afiada e sua mente aguçada para sobreviver ao que jaz além.",
    "sourcePage": 78,
    "source": {
      "title": "Caldeirão de Tasha para Tudo — D&D 5e",
      "pages": "78–80",
      "chapter": "Capítulo 1: Opções de Personagens"
    },
    "features": [
      {
        "title": "MAGIAS DE JURAMENTO",
        "level": 3,
        "text": "Você adquire magias de juramento nos níveis de paladino listados na tabela de Magias do Juramento da Vigilância. Veja a característica de Juramento Sagrado para ver como as magias funcionam. Magias do Juramento da VigiLância Nível de Paladino Magias 3º Alarme, Detectar Magia 5º Raio Lunar, Ver o Invisível 9º Contramagia, Indetectável 13º Aura de Pureza, Banimento 17º Imobilizar monstro, Vidência",
        "page": 78,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "text": "Você adquire as duas opções a seguir de Canalizar Divindade. Veja a característica do Juramento Sagrado sobre como o Canalizar Divindade funciona. Vontade do Vigilante. Você pode usar o seu Canalizar Divindade para investir sua presença com a força protetora de sua fé. Como uma ação, você pode escolher um número de criaturas que você possa ver a até 9m de você, até um número equivalente ao seu modificador de Carisma (mínimo de 1 criatura). Por 1 minuto, você e as criaturas escolhidas possuem vantagem na salvaguarda de Inteligência, Sabedoria e Carisma. Expulsar extraplanares. Você pode utilizar o seu Canalizar Divindade para punir seres de outros mundos. Como uma ação, você exibe o seu símbolo sagrado e cada aberração, celestial, elemental, fada ou corruptor a até 9m de você que possa ouvi-lo deve fazer uma salvaguarda de Sabedoria. Em caso de falha, a criatura é expulsa por 1 minuto ou até que receba dano. Uma criatura expulsa deve gastar seus turnos tentando se distanciar o máximo possível de você, não podendo se aproximar a menos de 9 metros por vontade própria. Ela também não pode usar reações, sendo capaz apenas de usar a ação Correr, ou tentar escapar de um efeito que a impeça de se mover. Caso não possa se mover, a criatura ainda pode usar a ação Esquivar.",
        "page": 78,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "AURA DO SENTINELA",
        "level": 7,
        "text": "Você emite uma aura de prontidão enquanto não estiver incapacitado. Quando você ou qualquer criatura a sua escolha a até 3m de você joga a iniciativa, todos vocês ganham um bônus na iniciativa igual ao seu bônus de proficiência. No 18° nível a distância dessa aura é ampliada para 9m.",
        "page": 79,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "REPREENSÃO DO VIGILANTE",
        "level": 15,
        "text": "Você aprendeu como punir qualquer um que ouse utilizar de engodos contra você e seus seguidores. Sempre que você ou uma criatura que você possa ver a até 9m de distância forem bem sucedidos em uma salvaguarda de Inteligência, Sabedoria ou Carisma você pode usar sua reação para causar 2d8 + seu modificador de Carisma em dano de energia na criatura que provocou a salvaguarda.",
        "page": 79,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      },
      {
        "title": "BALUARTE MORTAL",
        "level": 20,
        "text": "Você manifesta uma centelha do poder divino em defesa dos reinos mortais. Como uma ação bônus, você adquire os seguintes benefícios por 1 minuto: Você ganha visão verdadeira com um alcance de 36m. Você tem vantagem nas jogadas de ataque contra aberrações, celestiais, elementais, fadas e corruptores. Quando você acerta uma criatura e provoca dano a ela, você também pode obrigá-la a realizar uma salvaguarda de Carisma contra sua CD de magia. Em caso de falha, a criatura é magicamente banida para seu plano de existência nativa se não estiver atualmente lá. Em caso de sucesso, a criatura não pode ser banida por esta característica por 24h. Assim que utilizar essa ação bônus você não poderá usá-la novamente até que termine um descanso longo, a menos que gaste um espaço de magia de 5° círculo para isso.",
        "page": 79,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento da Vigilância",
        "page": 79,
        "sourceTitle": "Caldeirão de Tasha para Tudo — D&D 5e",
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
            "spells": "Alarme; Detectar Magia"
          },
          {
            "level": "5º",
            "spells": "Raio Lunar; Ver o Invisível"
          },
          {
            "level": "9º",
            "spells": "Contramagia; Indetectável"
          },
          {
            "level": "13º",
            "spells": "Aura de Pureza; Banimento"
          },
          {
            "level": "17º",
            "spells": "Imobilizar Monstro; Vidência"
          }
        ]
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  const ids = new Set(window.GRIMORIO_SUBCLASSES.map(item => item.id));
  additions.forEach(item => {
    if (!ids.has(item.id)) {
      window.GRIMORIO_SUBCLASSES.push(item);
      ids.add(item.id);
    }
  });
})();
