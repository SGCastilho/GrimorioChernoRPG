'use strict';
// Fase 2 da revisão textual racial — páginas impressas 197–240 de Lyre's Guide to Retia.
(function(){
  const P={
  "arhcoon": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Arhcoons são pequenos humanoides semelhantes a guaxinins, sociais, adaptáveis e criativos. Apesar da baixa estatura, costumam ter personalidades grandes, opiniões fortes e grande dedicação às habilidades que decidem aperfeiçoar. Suas roupas normalmente revelam a profissão ou o interesse de cada indivíduo, com ferramentas, instrumentos, bolsas e outros equipamentos usados de forma prática."
      },
      {
        "title": "Familiaridade distante",
        "text": "Arhcoons raramente permanecem apenas entre os seus. É comum partirem para outras comunidades em busca de novos horizontes, mantendo contato com família e amigos por extensas redes de comunicação. Famílias podem se espalhar por um país inteiro e se reunir apenas em viagens ou ocasiões especiais. Eles também têm o curioso hábito de formar amizades com povos muito maiores, como firbolgs, golias e minotauros."
      },
      {
        "title": "Arhcoons em Retia",
        "text": "Em Retia, aparecem com frequência onde também há gnomos e framebilt, unidos pelo gosto por engenhocas e invenções. São comuns em Sermonway e High Wave, e graças à velocidade, persistência e curiosidade trabalham bastante com investigação, localização de bens, espionagem, entrega de mensagens e mecânica de aeronaves."
      }
    ],
    "meta": {
      "alignment": "Tendem ao caos ou à neutralidade; espíritos rebeldes, sem necessariamente serem criminosos.",
      "languages": "Comum + 1 idioma adicional à escolha",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "critter-haste": "Como uma ação bônus, você pode realizar a ação Disparada. Quando usa Disparada por meio deste traço, terreno difícil não afeta seu deslocamento e você não ativa efeitos que normalmente seriam disparados ao entrar em uma área; esses efeitos só são ativados se você terminar o turno no alcance deles após usar esta característica. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, você distingue cores apenas em tons de cinza."
    },
    "legacyTraits": {
      "crafty-darkvision": "Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o resultado que for maior.",
      "firearm-proficiency": "Você possui proficiência com armas de fogo simples e marciais, desde que cumpra quaisquer pré-requisitos exigidos por essas armas.",
      "investigator": "Você possui proficiência na perícia Investigação.",
      "professional": "Você possui Especialização em uma perícia à sua escolha, mesmo que não seja proficiente nela.",
      "scrounger": "Você consegue sobreviver consumindo comida e água que seriam impróprias para povos menos resistentes, incluindo alimento apodrecido e água impura. Se tiver liberdade para vasculhar a região ao redor por pelo menos 1 hora, sempre consegue encontrar comida e água suficientes para sustentar a si mesmo naquele dia; este uso não alimenta outras criaturas.",
      "tool-master": "Você possui proficiência com duas Ferramentas de Artesão à sua escolha."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Parkour (Arhcoon Urbano); • Resistente ao Calor (Arhcoon do Deserto); • Resiliência a Veneno (Arhcoon da Floresta); • Sentidos Aguçados (Arhcoon Noturno); • Caçador de Lança (Arhcoon da Tundra).",
      "critter-haste": "Você recebe a característica Pressa da Criatura do Arhcoon.",
      "darkvision": "Você recebe a característica Visão no Escuro do Arhcoon."
    },
    "subraces": {
      "city-arhcoon": {
        "description": "Arhcoons urbanos estão habituados ao movimento constante de ruas lotadas. Eles se esgueiram entre multidões e atravessam espaços apertados com facilidade para cuidar de seus afazeres.",
        "traits": {
          "crowd-weave": "Mover-se através do espaço ocupado por criaturas maiores que você não impõe qualquer penalidade ao seu deslocamento.",
          "parkour": "Você possui deslocamento de escalada igual ao seu deslocamento-base de caminhada e pode escalar superfícies ásperas, como cascas de árvores, paredes rochosas e laterais de edifícios, sem equipamento de escalada e sem testes de atributo. Ao saltar a partir da lateral de uma superfície que esteja escalando, pode realizar saltos em altura e em distância a partir de uma posição parada sem sofrer a penalidade normal."
        }
      },
      "desert-arhcoon": {
        "description": "Arhcoons do deserto vivem em vastidões arenosas e se adaptaram ao calor extremo. São combatentes ferozes, resistentes a condições áridas e acostumados a evitar o superaquecimento durante a caça.",
        "traits": {
          "heat-resilient": "Você está acostumado a ambientes áridos e quentes. Tem vantagem em todos os testes de resistência e testes de atributo realizados para sobreviver a temperaturas de aproximadamente 38 °C (100 °F) ou mais, e a dificuldade desses testes não aumenta com o passar do tempo. Quando estiver em chamas por um efeito que cause dano de fogo contínuo, pode usar sua reação para apagar as chamas em seu corpo e encerrar esse efeito.",
          "scramble": "Quando acerta uma criatura com um ataque de arma, você pode usar este traço para escolher um dos seguintes benefícios: sua próxima jogada de ataque contra essa criatura no mesmo turno tem vantagem; ou essa criatura não pode realizar ataques de oportunidade contra você até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "forest-arhcoon": {
        "description": "Arhcoons da floresta atravessam selvas e bosques densos escalando e saltando entre árvores. Seu treinamento de sobrevivência também os ajuda a reconhecer alimentos e animais perigosos.",
        "traits": {
          "free-climber": "Você possui deslocamento de escalada igual ao seu deslocamento-base de caminhada e pode escalar superfícies ásperas, como cascas de árvores, paredes rochosas e laterais de edifícios, sem equipamento de escalada e sem testes de atributo. Ao saltar a partir da lateral de uma superfície que esteja escalando, pode realizar saltos em altura e em distância a partir de uma posição parada sem sofrer a penalidade normal.",
          "poison-resilience": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Envenenado."
        }
      },
      "night-arhcoon": {
        "description": "Arhcoons noturnos caçam no escuro e adaptaram os sentidos para localizar presas em condições de pouca luz, independentemente do ambiente em que vivam.",
        "traits": {
          "keen-senses": "Você tem vantagem em testes de Percepção e Sobrevivência baseados em audição, olfato ou rastreamento. Você consegue rastrear criaturas pelo cheiro mesmo quando elas não deixam rastros normais, mas precisa estar familiarizado com o odor que está seguindo.",
          "midnight-darkvision": "O alcance da sua Visão no Escuro aumenta em 18 metros (60 pés) ou passa a 36 metros (120 pés), escolhendo o resultado que for maior."
        }
      },
      "tundra-arhcoon": {
        "description": "Arhcoons da tundra vivem no extremo norte e nos cumes de montanhas, acostumados a tempestades, névoa e longas distâncias de caça.",
        "traits": {
          "spear-hunter": "Você pode realizar ataques à distância com armas de arremesso até o alcance longo da arma sem desvantagem. Quando atacar com uma arma de arremesso dentro do alcance normal dela, pode usar este traço para realizar o ataque com vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "storm-eye": "Você está acostumado a caçar em nevascas, névoa e brumas densas. Enxerga normalmente em áreas levemente obscurecidas. Quando o ambiente estiver fortemente obscurecido, você consegue enxergá-lo como se estivesse em penumbra e/ou não obscurecido, até uma distância igual ao alcance da sua Visão no Escuro."
        }
      }
    }
  },
  "beast-tribe": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "As Tribos Bestiais vivem pelos três grandes continentes de Somnus Domina. São humanoides com traços de animais como lobos, tigres, morcegos e outros, combinando corpos humanoides com pelos, asas, cabeças bestiais, garras e presas. Apesar da aparência intimidadora, muitas comunidades são sociáveis e curiosas."
      },
      {
        "title": "Formas bestiais",
        "text": "Cada tribo representa uma forma animal específica. Seus membros costumam possuir garras e presas perigosas e demonstram uma capacidade incomum de se comunicar, ao menos de maneira simples, com os animais que lembram sua própria tribo."
      },
      {
        "title": "Origem na licantropia",
        "text": "Um mito compartilhado pelas Tribos Bestiais afirma que seus ancestrais eram licantropos curados de uma antiga maldição. Mesmo livres da licantropia, teriam permanecido em formas híbridas, dando origem às linhagens atuais. A história pode ser apenas lenda, mas a semelhança física com homens-fera é difícil de ignorar."
      }
    ],
    "meta": {
      "alignment": "Sem tendência definida",
      "languages": "Comum + idioma próprio da tribo, que também transmite ideias e emoções simples a animais semelhantes",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "bonus-proficiency": "Você possui proficiência na perícia Percepção.",
      "claws-and-fangs": "Suas unhas formam garras afiadas e seus dentes são presas perigosas. Ao realizar um ataque desarmado, você pode causar dano contundente normalmente, ou escolher dano perfurante com as presas ou cortante com as garras. Seus ataques desarmados causam 1d6 + seu modificador de Força, a menos que o dado de dano já fosse maior, e podem ser usados como se fossem armas com a propriedade Leve. No 5º nível, o dado do ataque desarmado se torna 1d8; no 14º nível, torna-se 1d10."
    },
    "legacyTraits": {
      "climber": "Você recebe deslocamento de escalada igual ao seu deslocamento de caminhada. Pode escalar superfícies ásperas, como árvores e penhascos, sem equipamento de escalada e sem precisar realizar testes para isso.",
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra.",
      "keen-hearing-and-smell": "Você tem vantagem em testes de Percepção que dependam de audição ou olfato.",
      "skilled": "Você ganha proficiência em uma perícia ou em duas ferramentas à sua escolha.",
      "size-options": "Se pertencer às tribos do Morcego, Chacal ou Rato, você pode escolher ser uma criatura Pequena ao criar o personagem. Se pertencer às tribos do Urso ou Tigre, pode escolher ser Grande.",
      "wild-nature": "Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já esteja permitindo que você faça isso, independentemente de possuir proficiência ou Especialização em Percepção."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Ecolocalização (Tribo do Morcego); • Golpe Impiedoso (Tribo do Urso); • Derrubada (Tribo do Javali); • Frenesi de Matança (Tribo da Hiena); • Velocista (Tribo do Chacal); • Correria (Tribo do Rato); • Voo (Tribo do Corvo); • Pele Feroz (Tribo do Tigre); • Disparar e Atacar (Tribo do Lobo). Se Tribo Bestial for sua raça secundária, este traço deve ser uma das suas escolhas de Legado para determinar a tribo à qual pertence, e seu tipo de criatura também passa a contar como Besta.",
      "claws-and-fangs": "Você recebe a característica Garras e Presas da Tribo Bestial."
    },
    "subraces": {
      "bat-tribe": {
        "description": "Membros da Tribo do Morcego precisam de pouco sono, têm braços alongados com asas coriáceas e frequentemente usam os nós dos dedos para ajudar a caminhar.",
        "traits": {
          "belabored-flight": "Você possui deslocamento de voo laborioso igual ao seu deslocamento-base.",
          "echolocation": "Como uma ação bônus, você emite um pulso sônico em uma área centrada em você com raio igual a 3 metros (10 pés) multiplicado pelo seu bônus de proficiência. Até o fim do seu próximo turno, você possui Visão às Cegas até essa distância. No 10º nível, você passa a possuir permanentemente Ecolocalização com metade desse raio, desde que não esteja Surdo."
        }
      },
      "bear-tribe": {
        "description": "Grandes e fortes, membros da Tribo do Urso são conhecidos pela natureza compassiva e gentil. Costumam viver em pequenos grupos itinerantes e são artesãos e marceneiros talentosos.",
        "traits": {
          "skilled-worker": "Você ganha proficiência em uma perícia e em duas Ferramentas de Artesão à sua escolha.",
          "unforgiving-slam": "Quando obtém um acerto crítico contra um alvo que não seja mais de uma categoria de tamanho maior que você, pode derrubá-lo automaticamente. Além disso, uma vez por turno, pode realizar um ataque desarmado contra ele."
        }
      },
      "boar-tribe": {
        "description": "A Tribo do Javali é formada por arruaceiros que buscam desafios. Possuem mandíbulas grandes, presas proeminentes e frequentemente deixam seus grupos em busca de adversidades antes de retornar.",
        "traits": {
          "struggle-out": "Quando for alvo de um ataque que possa ver, você pode usar sua reação para gastar um de seus Dados de Vida. Ao fazê-lo, recebe pontos de vida temporários iguais a 1d10 + metade do seu nível total, arredondado para baixo. Esses pontos de vida temporários desaparecem no fim do turno atual.",
          "takedown": "Quando se mover pelo menos 3 metros (10 pés) em linha reta em direção a uma criatura antes de acertá-la com um ataque, você causa dano adicional igual ao dano do seu ataque desarmado."
        }
      },
      "hyena-tribe": {
        "description": "Membros da Tribo da Hiena são altos, esguios e ferozes, com pescoços longos e pelagem escura marcada por listras semelhantes a pinturas de guerra. Tendem a formar bandos móveis e cooperam com quem lhes fornece recursos úteis.",
        "traits": {
          "killing-frenzy": "Quando reduz uma criatura a 0 pontos de vida, você pode usar sua reação para realizar imediatamente a ação Disparada. Como parte dessa Disparada, pode fazer um ataque de arma contra uma criatura ao seu alcance.",
          "opportunity-tactics": "Quando realiza um ataque corpo a corpo com arma contra uma criatura enquanto um de seus aliados estiver a até 1,5 metro (5 pés) dela e não estiver incapacitado, você tem vantagem nesse ataque. Você só pode receber vantagem desta forma em um ataque por turno."
        }
      },
      "jackal-tribe": {
        "description": "A Tribo do Chacal possui pelagem marrom, orelhas atentas e corpos atléticos. São combatentes refinados, mas podem ser impiedosos contra inimigos enfraquecidos.",
        "traits": {
          "savager": "Quando acerta com um ataque de arma uma criatura Atordoada ou Caída, o ataque causa 1d4 de dano adicional.",
          "sprinter": "Quando realiza a ação Disparada, recebe deslocamento adicional igual a 1,5 metro (5 pés) multiplicado pelo seu bônus de proficiência. Este benefício não se aplica a Disparadas realizadas como ação bônus, ação concedida por velocidade (*haste*) ou qualquer outro tipo de ação que não seja sua ação principal."
        }
      },
      "rat-tribe": {
        "description": "Pequenos e ágeis, membros da Tribo do Rato têm postura curvada, grande variedade de pelagens e tendência a correr sobre quatro membros. São especialistas em escuridão e evasão.",
        "traits": {
          "damp-darkvision": "Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro por outro traço, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o resultado maior.",
          "scamper": "Mover-se através do espaço de aliados do seu tamanho ou maiores não custa deslocamento adicional. Quando realiza a ação Desengajar, você também pode atravessar o espaço ocupado por criaturas hostis sem penalidade."
        }
      },
      "raven-tribe": {
        "description": "Cobertos de penas e com grandes asas nas costas, membros da Tribo do Corvo se parecem bastante com o Povo-Pássaro. Costumam adotar maneiras nobres e uma postura quase cavalheiresca.",
        "traits": {
          "flight": "Você possui deslocamento de voo igual ao seu deslocamento-base. Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor no ar sem penalidade.",
          "valor": "Quando falha em um teste de Destreza ou Carisma, ou em um teste de resistência usando um desses atributos, você pode rolar um d20 e substituir pelo novo resultado o d20 que causou a falha, possivelmente alterando o resultado final. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "tiger-tribe": {
        "description": "Orgulhosos e confiáveis, membros da Tribo do Tigre vivem sobretudo em Cu Chullis, valorizam a própria herança e normalmente demonstram grande respeito pelas leis dos lugares que visitam.",
        "traits": {
          "ferocious-hide": "Como reação a um ataque de arma feito contra você, você pode realizar um ataque desarmado para tentar repelir o golpe. Se sua jogada de ataque for maior que a do atacante, todo dano perfurante, cortante e contundente causado pelo ataque contra você se torna 0. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "predator-s-lead": "Quando realiza um ataque de oportunidade contra uma criatura e ela continua se movendo para fora do seu alcance, você pode se mover como parte da mesma reação, até o limite do seu deslocamento, para permanecer adjacente a ela. A cada 1,5 metro (5 pés) que ela percorrer, você pode percorrer 1,5 metro para um espaço mais próximo dela, repetindo isso até escolher parar ou até o turno terminar."
        }
      },
      "wolf-tribe": {
        "description": "Membros da Tribo do Lobo lembram lobisomens, com corpos cobertos de pelagem, cabeças lupinas, garras e caudas. Apesar da aparência, são introspectivos, curiosos e costumam viajar para conhecer pessoas e lugares novos.",
        "traits": {
          "dash-and-deal": "Você pode realizar a ação Disparada como uma ação bônus. Quando fizer isso, se percorrer pelo menos 9 metros (30 pés), pode realizar como parte da mesma ação bônus um ataque desarmado contra uma criatura que não seja mais de uma categoria de tamanho maior que você. Se o ataque acertar, o alvo fica Caído.",
          "scent-sleuth": "Você tem vantagem em testes de Sobrevivência e Investigação realizados para rastrear criaturas pelo cheiro. Também consegue localizar rastros que outras criaturas poderiam ignorar ou que já tenham sido parcialmente apagados."
        }
      }
    }
  },
  "birdfolk": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "O Povo-Pássaro possui cabeças, penas, garras e grandes asas de aves. Muitas comunidades vivem em montanhas e penhascos, onde o céu aberto favorece seu modo de vida. Em Mot, uma das maiores concentrações está nas ruínas escondidas de Tunjork, em Skywall."
      },
      {
        "title": "Aparências variadas",
        "text": "As penas podem apresentar praticamente qualquer cor ou padrão e frequentemente refletem o ambiente dos ancestrais. Linhagens de sangue misto e influências planetouched costumam alterar ainda mais sua aparência. Seu tamanho varia muito, e alguns são pouco maiores que aves comuns."
      },
      {
        "title": "Do céu ao abismo",
        "text": "Embora sejam associados ao céu, membros do Povo-Pássaro também trabalham em navios, minas, desertos e cavernas. São extremamente adaptáveis e não temem explorar ambientes incomuns."
      },
      {
        "title": "Espaço para respirar",
        "text": "Preferem áreas abertas e locais altos, evitando a sensação de confinamento. Podem viver em cidades, mas tendem a buscar bordas, telhados, torres ou outros espaços onde consigam abrir as asas."
      }
    ],
    "meta": {
      "alignment": "Raramente Leal; tendem a não permanecer muito tempo em um único assentamento terrestre",
      "languages": "Comum e Auran",
      "speed": "7,5 m (25 pés) de caminhada; 9 m (30 pés) de voo"
    },
    "coreTraits": {
      "flight": "Você possui deslocamento de voo de 9 metros (30 pés). Se for Médio ou maior, não pode decolar do chão a partir de uma posição parada a menos que exista ao menos um espaço desocupado adjacente a você no mesmo plano horizontal. Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor imediatamente no ar.",
      "keen-eyes": "Você tem vantagem em testes de Percepção."
    },
    "legacyTraits": {
      "accelerated-flight": "Seu deslocamento de voo existente aumenta em 6 metros (20 pés).",
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Por meio dessa visão, as cores aparecem em tons de amarelo e cinza.",
      "skilled": "Você ganha proficiência em duas perícias à sua escolha.",
      "talons": "Seus ataques desarmados causam 1d6 + seu modificador de Força de dano cortante. O primeiro ataque desarmado que você realizar em cada turno enquanto estiver voando tem vantagem. No 8º nível, o dado de dano se torna 1d8; no 14º nível, torna-se 1d10.",
      "weapon-training": "Você possui proficiência com arcos curtos, arcos longos, espadas curtas, rapieiras, armaduras leves e duas armas adicionais à sua escolha.",
      "whirlwind": "Você pode conjurar a magia *rajada de vento* sem gastar espaço de magia nem componente material um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo, usando Sabedoria como habilidade de conjuração. Você também pode conjurá-la normalmente usando espaços de magia apropriados."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Papagaiar (Mímico); • Visão às Cegas (Falcão Noturno); • Constituição de Abutre (Habitante dos Picos); • Sobrevoo (Robusto).",
      "flight": "Você recebe a característica Voo do Povo-Pássaro.",
      "keen-eyes": "Você recebe a característica Olhos Aguçados do Povo-Pássaro."
    },
    "subraces": {
      "mimic": {
        "description": "Mímicos conseguem reproduzir sons e vozes que escutam e possuem enorme facilidade para repetir tarefas exatamente da mesma maneira. Costumam se parecer com corvos, papagaios e outras aves vocais.",
        "traits": {
          "creature-of-habit": "Quando realiza um teste de atributo usando qualquer perícia na qual seja proficiente, você pode fazê-lo com vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "duplication": "Quando tenta reproduzir uma escrita ou trabalho artesanal criado por outra criatura e que você tenha visto pessoalmente, você tem vantagem nos testes de atributo feitos para realizar essa reprodução.",
          "parroting": "Você consegue reproduzir sons, vozes e frequências que já tenha ouvido, inclusive ruídos e palavras específicas. Ao imitar uma voz, só pode reproduzir aquilo que já ouviu essa voz dizer. Uma criatura pode perceber que a imitação é falsa se for bem-sucedida em um teste de Intuição com CD igual a 10 + seu modificador de Enganação."
        }
      },
      "nighthawk": {
        "description": "Falcões Noturnos lembram aves de rapina como corujas, garças e falcões noturnos. Seus sentidos funcionam muito bem na escuridão e eles conseguem moldar sombras em armas de energia psíquica.",
        "traits": {
          "blindsight": "Seus sentidos aguçados permitem perceber movimentos que outros perderiam. Você possui Visão às Cegas a uma distância igual a 1,5 metro (5 pés) multiplicado pelo seu bônus de proficiência.",
          "nocturnal-darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Se já possuir Visão no Escuro por outro traço ou característica, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o resultado maior.",
          "shadow-bender": "Você pode conjurar a magia *arma sombreada* sem gastar espaço de magia, tratando-a como se fosse conjurada em um nível igual ao seu bônus de proficiência. Você pode usar esta característica uma vez por Descanso Longo."
        }
      },
      "peak-settler": {
        "description": "Habitantes dos Picos vivem para explorar ambientes novos. Essa vida os tornou capazes de sobreviver a temperaturas extremas, alimentos deteriorados e venenos, sendo excelentes aventureiros e exploradores.",
        "traits": {
          "extreme-adaptation": "Você está adaptado a ambientes extremamente quentes ou frios e tem vantagem em todos os testes de resistência contra fatores ambientais prejudiciais de calor ou frio extremos.",
          "swoop": "Quando realiza a ação Disparada, pode realizar um único ataque de arma como parte da mesma ação. Se acertar uma criatura com esse ataque, ela não pode realizar ataques de oportunidade contra você durante este turno.",
          "vulture-s-constitution": "Você é adaptado a alimentos que outros rejeitariam. Possui resistência a dano de veneno e vantagem em testes de resistência realizados para evitar ou encerrar a condição Envenenado."
        }
      },
      "robust": {
        "description": "Fortes e nobres, os Robustos são membros diurnos do Povo-Pássaro conhecidos pela dignidade e compostura, frequentemente lembrando espécies de aves consideradas majestosas.",
        "traits": {
          "environmental-resistance": "Você possui resistência a dano de frio ou trovão, escolhendo um desses tipos ao criar o personagem.",
          "fly-by": "Você não provoca ataques de oportunidade quando sai voando do alcance de uma criatura.",
          "mark-of-dignity": "Quando usa a ação Ajudar para auxiliar outra criatura e ela falha no teste que estava tentando realizar, você pode oferecer orientação para que ela role 1d6 e some o resultado ao teste, possivelmente transformando a falha em sucesso. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      }
    }
  },
  "capy-hado": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Capy’hado são humanoides semelhantes a capivaras, conhecidos pela postura tranquila e receptiva. Acredita-se que tenham surgido na Scattershot Coast e hoje vivem principalmente em High Wave e na Greater Motian Coast. Mantêm forte ligação com capivaras comuns e gigantes, que frequentemente domesticam e montam."
      },
      {
        "title": "Favoritos de Aymere",
        "text": "Existe uma ligação peculiar entre capy’hado e Aymere. Muitos vivem próximos ao templo do Eidolon da natureza e ordens de cavaleiros capy’hado carregam seu símbolo, ajudando a coletar suprimentos e proteger comunidades."
      },
      {
        "title": "Cavaleiros e comunidades",
        "text": "Assentamentos capy’hado raramente são governados por reis ou nobres; normalmente funcionam por conselho. Algumas famílias, porém, treinam como cavaleiros e defendem os seus montando animais gigantes."
      },
      {
        "title": "Guardiões da Bacia",
        "text": "A Steambasin de Froscain é o assentamento capy’hado mais famoso de Retia. As fontes termais vulcânicas abrigam tantos deles que passaram a ser conhecidos como Guardiões da Bacia, guiando visitantes pelas fontes sem reivindicar propriedade sobre o local."
      }
    ],
    "meta": {
      "alignment": "Geralmente Neutro, em razão de sua natureza tranquila",
      "languages": "Comum e Capyin",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "roll-upright": "Quando fica Caído, você pode usar sua reação para se levantar imediatamente sem penalidade. Se se levantar normalmente, isso custa apenas 1,5 metro (5 pés) de deslocamento. Você tem vantagem em testes de resistência e testes de atributo realizados para evitar ficar Caído.",
      "well-of-rest": "Você pode realizar um Descanso Curto adicional por Descanso Longo; esse descanso adicional leva apenas 10 minutos. Além disso, precisa de apenas 4 horas para concluir um Descanso Longo. Se optar pelas durações completas de 1 hora para o Descanso Curto e 8 horas para o Descanso Longo, recebe benefícios adicionais: • Descanso Curto: os primeiros Dados de Vida gastos para recuperar pontos de vida, em quantidade igual ao seu bônus de proficiência, são tratados como se tivessem rolado o resultado máximo; • Descanso Longo: você recupera todos os seus Dados de Vida e se recupera de dois níveis de exaustão em vez de um."
    },
    "legacyTraits": {
      "climber": "Você possui deslocamento de escalada igual ao seu deslocamento-base de caminhada.",
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, distingue cores apenas em tons de cinza.",
      "keen-senses": "Você tem vantagem em testes de Percepção que dependam de olfato ou audição.",
      "riding-proficiency": "Você possui proficiência nas perícias Adestrar Animais e Montaria.",
      "swim-and-dive": "Você possui deslocamento de natação igual ao seu deslocamento-base de caminhada e consegue prender a respiração por 10 minutos além do tempo que normalmente conseguiria.",
      "unbothered-temperament": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar os efeitos de Exaustão ou da condição Amedrontado."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Garras de Briga (Bosquenn); • Disparada Pesada (Caminel); • Adepto de Hobbies (Costana); • Resiliência Vaporosa (Verhir).",
      "roll-upright": "Você recebe a característica Rolar para Cima do Capy’hado.",
      "size-options": "Seu tamanho é Pequeno.",
      "well-of-rest": "Você recebe a característica Poço de Descanso do Capy’hado."
    },
    "subraces": {
      "bosquenn": {
        "description": "Bosquenn vivem em florestas e constroem comunidades elevadas nas árvores, conectadas por pontes, cordas e caminhos naturais. Alguns são chamados de Cavaleiros Verdes por sua organização semelhante a uma ordem de cavalaria.",
        "traits": {
          "bark-climber": "Você possui deslocamento de escalada igual ao seu deslocamento-base. Pode escalar árvores, superfícies rochosas e outras superfícies irregulares sem ferramentas e sem precisar realizar testes de atributo.",
          "scrappy-claws": "Suas mãos possuem garras afiadas. Seus ataques desarmados são tratados como armas Leves e causam 1d8 + seu modificador de Força de dano cortante; no 13º nível, esse dado aumenta para 1d10. Se realizar a ação Atacar e fizer todos os ataques apenas com ataques desarmados, pode usar sua ação bônus para realizar um ataque desarmado adicional. Se estiver agarrando uma criatura no início do seu turno, ela sofre 1d8 de dano cortante."
        }
      },
      "caminel": {
        "description": "Caminel são capy’hado viajantes que se deslocam de lugar em lugar buscando novas experiências. São os mais comuns entre aventureiros e habitantes de grandes cidades e, embora possam se sentir sobrecarregados pelo ritmo do mundo, sua resistência e rapidez de raciocínio normalmente prevalecem.",
        "traits": {
          "hard-dash": "Quando realiza a ação Disparada, o deslocamento que recebe dela é dobrado. Este benefício não se aplica quando você realiza Disparada como uma ação bônus.",
          "moment-of-panic": "Quando falha em uma jogada de ataque, teste de atributo ou teste de resistência, você pode usar sua reação para rolar 1d6 e somar o resultado à jogada, possivelmente alterando o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "costana": {
        "description": "Costana são capy’hado costeiros, chamados às vezes de cavaleiros do mar. Gostam de trabalhar com calma e dedicar tempo suficiente para dominar tarefas e hobbies.",
        "traits": {
          "beachball-lifestyle": "Quando recebe tempo suficiente para executar uma tarefa — 10 turnos para algo que normalmente exigiria 1 turno, 10 minutos para algo de 1 minuto, 10 horas para algo de 1 hora e assim por diante — qualquer resultado de d20 igual a 9 ou menos em um teste de atributo feito para essa tarefa é tratado como 10.",
          "hobby-taker": "Você possui proficiência em uma quantidade de ferramentas igual ao seu bônus de proficiência, escolhidas entre Ferramentas de Artesão, Conjuntos de Jogo, Instrumentos Musicais ou categorias semelhantes. Sempre que seu bônus de proficiência aumentar, você pode obter proficiência em uma nova ferramenta ou ganhar Especialização em uma ferramenta recebida por esta característica."
        }
      },
      "verhir": {
        "description": "Verhir são adaptados a ambientes frios e se estabelecem próximos de fontes de calor, como águas termais e montanhas vulcânicas. Histórias sobre eles frequentemente os retratam descansando em silêncio junto a fontes de vapor.",
        "traits": {
          "relaxing-company": "Quando conclui um Descanso Curto completo na companhia de outras criaturas, sua presença ajuda a relaxá-las. Escolha até uma quantidade dessas criaturas igual ao seu bônus de proficiência; o menor resultado de Dado de Vida rolado por cada uma durante o descanso é tratado como o resultado máximo do dado. Este benefício não se aplica a você.",
          "steamy-resilience": "Quando sofre dano de fogo ou frio, reduza esse dano em uma quantidade igual ao seu bônus de proficiência + seu modificador de Constituição."
        }
      }
    }
  },
  "dragonkin": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Dragonkin descendem de antigos humanoides dracônicos que, após exposição ao poder radiante das Lágrimas Cósmicas, despertaram características que os aproximaram ainda mais dos dragões. Mantêm uma forma humanoide, mas podem apresentar asas, garras, caudas, escamas e grande variação de tamanho."
      },
      {
        "title": "Terra de origem",
        "text": "Muitos dragonkin vieram de terras distantes acompanhando dragões ancestrais. Há histórias sobre a Aerie, uma nação escondida governada por dragões e seus parentes, tratada por dragonkin como santuário ou paraíso perdido. Outros vivem nas Strikelands e frequentemente lideram bandos de guerra."
      },
      {
        "title": "Civilizados, mas assustadores",
        "text": "Apesar da aparência feroz, dragonkin costumam valorizar dignidade e ordem social. Comunidades governadas por eles têm boa reputação em Retia e, embora sejam raros em Cu Chullis, são capazes de tratar até mesmo com nobres élficos em termos de igualdade."
      }
    ],
    "meta": {
      "alignment": "Tendem a Leal ou Caótico, raramente permanecendo Neutros",
      "languages": "Comum e Dracônico",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "breath-weapon": "Quando realiza a ação Atacar no seu turno, você pode substituir um de seus ataques por uma exalação de energia mágica que se origina em você. Escolha uma das formas: • linha de 9 metros (30 pés) de comprimento por 1,5 metro (5 pés) de largura; • cone de 4,5 metros (15 pés). Cada criatura na área deve realizar um teste de resistência de Destreza (a fonte indica Força ou Constituição como atributos associados à característica). Em uma falha, o alvo sofre 1d10 de dano do tipo determinado por sua herança dracônica. O dano aumenta em 1d10 nos níveis 5, 11 e 17. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
    },
    "legacyTraits": {
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, distingue cores apenas em tons de cinza.",
      "draconic-resistance": "Você possui resistência ao tipo de dano associado à sua herança dracônica.",
      "natural-weapons": "Você possui garras e uma mandíbula com presas capazes de servir como armas. Enquanto estiverem livres, pode realizar um ataque desarmado com uma dessas armas naturais como um ataque corpo a corpo contra uma criatura a até 1,5 metro (5 pés). Em um acerto, causa 1d6 + seu modificador de Força de dano; escolha entre perfurante (presas), cortante (garras) ou contundente (se possuir cauda). No 8º nível, o dado se torna 1d8; no 14º nível, torna-se 1d10.",
      "size-options": "Seu tamanho pode ser Pequeno, Médio ou Grande, à sua escolha durante a criação do personagem.",
      "tail": "Você possui uma cauda dracônica que pode atingir uma criatura a até 1,5 metro (5 pés) como uma ação bônus, como se fosse um ataque desarmado. Em um acerto, se o alvo não for mais de uma categoria de tamanho maior que você, escolha entre deixá-lo Caído ou empurrá-lo uma distância em pés igual à metade do seu bônus de proficiência, arredondado para baixo, multiplicada por 5 — equivalente a 1,5 metro multiplicado pela metade do bônus de proficiência.",
      "wings": "Você possui asas dracônicas que concedem deslocamento de voo laborioso de 9 metros (30 pés). Por causa do tamanho das asas, não pode decolar do chão a menos que exista ao menos um espaço livre adjacente a você no mesmo plano horizontal. Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor no ar sem penalidade."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente. A menos que outra característica forneça um tipo específico, você também escolhe uma das heranças dracônicas disponíveis para essa subraça: • Escamas Protetoras (Cromático); • Levitação Gemológica (Gemológico); • Olhos Protegidos (Metálico); • Imunidade Aberrante (Obsidiano); • Destemido (Puro); • Exoesqueleto (Crânio). Se Dragonkin for sua raça secundária, seu tipo de criatura também passa a contar como Dragão.",
      "breath-weapon": "Você recebe a característica Arma de Sopro do Dragonkin."
    },
    "subraces": {
      "chromatic": {
        "description": "Descendentes de dragões cromáticos canalizam energia elemental e normalmente possuem escamas de cores intensas. Sua herança costuma se manifestar em uma natureza particularmente feroz.",
        "traits": {
          "chromatic-heritage": "Escolha o tipo de sua herança dracônica conforme a ancestralidade: • ácido (preto); • frio (branco); • fogo (vermelho); • elétrico (azul); • veneno (verde).",
          "chrome-critical": "Quando obtém um acerto crítico com um ataque de arma, causa dano adicional do tipo da sua herança dracônica igual a 1d8 multiplicado pela metade do seu bônus de proficiência, arredondado para baixo.",
          "warding-scales": "Quando sofre dano do tipo da sua herança dracônica, pode usar sua reação para ganhar resistência a esse tipo de dano por 1 minuto, inclusive contra o dano que ativou a característica. Se já fosse resistente a esse dano, torna-se imune durante esse período. Você pode usar este traço uma vez por Descanso Longo."
        }
      },
      "gemstone": {
        "description": "Dragonkin gemológicos possuem escamas brilhantes semelhantes a pedras preciosas e uma afinidade natural com capacidades cognitivas e energias psíquicas incomuns.",
        "traits": {
          "gem-levitation": "Como uma ação bônus, você pode envolver o corpo em poder psíquico por 1 minuto. Durante esse período, recebe deslocamento de voo (pairar) ou deslocamento de aceleração 0-G, à sua escolha, igual ao seu deslocamento-base, acompanhado por asas de gema cintilantes. Se já possuir asas, o deslocamento de voo (pairar) concedido por este traço aumenta também pelo valor do seu deslocamento de voo ou voo laborioso existente. Você pode usar este traço uma vez por Descanso Longo.",
          "glittering-heritage": "Escolha o tipo de sua herança dracônica conforme a ancestralidade: • força (ametista); • necrótico (topázio); • psíquico (esmeralda); • radiante (cristal); • trovão (safira).",
          "psionic-breath": "Como uma ação, você pode gastar um uso de Arma de Sopro para, em vez de exalar uma onda de energia, criar uma esfera de 3 metros (10 pés) de raio do tipo de energia da sua herança dracônica em um ponto que possa ver a até 18 metros (60 pés). Criaturas na área realizam o mesmo teste de resistência de Destreza e sofrem o mesmo dano que sua Arma de Sopro causaria."
        }
      },
      "metallic": {
        "description": "Dragonkin metálicos possuem escamas brilhantes semelhantes a metais, às vezes com manchas de ferrugem como sardas. Seu sopro também pode assumir a forma de um gás debilitante.",
        "traits": {
          "enervating-breath": "Como uma ação, você pode usar sua Arma de Sopro para exalar um gás debilitante usando as mesmas opções de área, mas exigindo um teste de resistência de Constituição em vez de Destreza. Cada criatura que falhar fica Incapacitada até o início do seu próximo turno. Você pode usar este traço uma vez por Descanso Curto ou Longo; depois desse uso, pode ativá-lo novamente gastando um uso de Arma de Sopro.",
          "metallic-heritage": "Escolha o tipo de sua herança dracônica conforme a ancestralidade: • ácido (cobre); • frio (prata); • fogo (latão ou ouro); • elétrico (bronze); • radiante (platina).",
          "shielded-eyes": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar as condições Cego ou Surdo. Quando um efeito exigiria que você desviasse o olhar para evitar uma consequência, como a petrificação de um basilisco, pode usar pálpebras translúcidas protetoras; você mantém o olhar e ainda tem vantagem nos testes de resistência contra esse efeito."
        }
      },
      "obsidian": {
        "description": "Dragonkin obsidianos são uma mutação de escamas negras e carbonizadas, semelhantes a madeira queimada, que brilham como carvão quando o indivíduo está enfurecido ou tomado por fortes emoções.",
        "traits": {
          "aberrant-immunity": "Você não pode receber a condição Envenenado.",
          "charcoal-hide": "Você pode invocar os efeitos da magia *repreensão infernal* como uma reação um número de vezes por Descanso Longo igual ao seu bônus de proficiência, usando a mesma CD da sua Arma de Sopro. Ao fazê-lo, pode gastar também um uso de Arma de Sopro para adicionar o dano dela ao dano de *repreensão infernal*, incluindo a redução pela metade caso o alvo tenha sucesso no teste de resistência.",
          "obsidian-heritage": "Seu tipo de herança dracônica é fogo, normalmente associado a dragões que cospem chamas, como vermelhos e dourados. Sua Arma de Sopro assume a forma de uma chama semelhante a exaustão que sufoca os alvos e usa teste de resistência de Constituição em vez de Destreza, mantendo a mesma CD."
        }
      },
      "pure": {
        "description": "Dragonkin puros não exibem uma linhagem dracônica específica, manifestando apenas os aspectos mais primais de seus ancestrais. Costumam ser grandes e imponentes.",
        "traits": {
          "base-heritage": "Escolha um dos seguintes tipos para sua herança dracônica: ácido, frio, fogo ou trovão.",
          "embodiment": "Escolha duas das seguintes opções de Traço de Legado e receba-as além dos demais Traços de Legado que você selecionou: • Armas Naturais; • Opções de Tamanho; • Cauda; • Asas.",
          "fearless": "Você não pode ficar Amedrontado."
        }
      },
      "skull": {
        "description": "Dragonkin de Crânio possuem uma pele espessa de aspecto quitinoso e ósseo, ligada de alguma forma aos monstruosos dragões de crânio. Sua carapaça é resistente e seu apetite dificilmente é saciado.",
        "traits": {
          "decaying-heritage": "Seu tipo de herança dracônica é necrótico, conectando você aos dragões de crânio. Você também possui resistência a dano necrótico.",
          "exoskeleton": "Seu corpo é coberto por uma carapaça espessa semelhante a armadura de osso. Quando não estiver usando armadura, pode calcular sua CA como 10 + seu modificador de Destreza + seu modificador de Constituição. Para características que exigem o uso de armadura média ou pesada, calcular sua CA desta forma pode ser tratado como estar usando uma dessas categorias.",
          "mutant-gullet": "Seu corpo processa alimento apodrecido e venenos com facilidade. Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Envenenado e é imune a doenças não mágicas."
        }
      }
    }
  },
  "dwarf": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Anões são um povo robusto e dedicado, reconhecido pela habilidade artesanal e pelo apego a tradições familiares. Suas comunidades preservam técnicas, ferramentas e obras consideradas parte central do legado de cada linhagem."
      },
      {
        "title": "Ofícios e herança",
        "text": "A cultura anã frequentemente define famílias pelo ofício que aperfeiçoam e transmitem. Ferreiros, construtores, artesãos, estudiosos e até usuários de magia podem considerar seu trabalho uma “obra-chave” que deve ser preservada e transmitida às gerações seguintes."
      }
    ],
    "meta": {
      "alignment": "Frequentemente Leal, valorizando hábitos, tradições e organização",
      "languages": "Comum e Anão",
      "speed": "7,5 m (25 pés)"
    },
    "coreTraits": {
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, distingue cores apenas em tons de cinza.",
      "resilient-blood": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Envenenado e possui resistência a dano de veneno."
    },
    "legacyTraits": {
      "deep-magic": "Escolha um truque e uma magia de 1º nível das listas de Druida, Patrulheiro ou Feiticeiro, além de Sabedoria, Inteligência ou Carisma como sua habilidade de conjuração. Você pode conjurar o truque à vontade. Uma vez por dia, pode conjurar a magia de 1º nível como se usasse um espaço de magia de nível igual à metade do seu bônus de proficiência, arredondado para baixo. Se possuir espaços apropriados, também pode conjurá-la usando esses espaços.",
      "dwarven-training": "Você possui proficiência com armaduras leves e médias, escudos, machadinhas, machados grandes e duas armas adicionais à sua escolha.",
      "map-of-the-mind": "Quando estiver dentro de uma estrutura ou região subterrânea, como castelo, masmorra ou túneis profundos, você possui memória perfeita para a geografia do lugar. Sempre consegue lembrar o caminho percorrido e retornar por ele, a menos que a área tenha mudado.",
      "stonecunning": "Você possui proficiência na perícia História. Sempre que realizar um teste de História relacionado a trabalhos em pedra, murais históricos ou outras instalações antigas, adicione seu bônus de proficiência ao teste uma segunda vez, a menos que outra característica já esteja permitindo isso.",
      "toolmaster": "Você ganha proficiência com duas Ferramentas de Artesão à sua escolha.",
      "tumble": "Quando fica Caído, pode usar sua reação para se levantar imediatamente. Além disso, quando sofre dano de queda e não está Incapacitado, pode usar sua reação para sofrer apenas metade desse dano, arredondado para baixo."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Descanso Profundo (Anão de Cobre); • Viajante (Anão das Profundezas); • Resiliência Cinzenta (Duergar); • Visão às Cegas (Anão Sermiano); • Duro como Pregos (Anão Vulcânico).",
      "darkvision": "Você recebe a característica Visão no Escuro do Anão.",
      "resilient-blood": "Você recebe a característica Sangue Resiliente do Anão."
    },
    "subraces": {
      "copper-dwarf": {
        "description": "Anões de Cobre são a linhagem mais comum de Retia e formam grande parte da população da Cidade de Aço. Possuem pele escura que parece ganhar tons de cobre em cicatrizes ou quando estão cansados e geralmente vivem em regiões montanhosas.",
        "traits": {
          "cunning-improvisation": "Quando realiza um teste de atributo no qual não possui proficiência, pode escolher adicionar seu bônus de proficiência a esse teste e a testes da mesma natureza durante 1 minuto, como se fosse proficiente. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "deep-rest": "Quando conclui um Descanso Curto no qual gastou pelo menos um Dado de Vida para recuperar pontos de vida, recupera pontos de vida adicionais iguais ao resultado máximo de um dos Dados de Vida que gastou.",
          "mountain-climber": "Você possui deslocamento de escalada igual ao seu deslocamento-base. Pode escalar superfícies rochosas e ásperas sem equipamento de escalada e sem precisar realizar testes de atributo."
        }
      },
      "depth-dwarf": {
        "description": "Anões das Profundezas descendem de grupos que partiram para o mar em busca de novas terras e acabaram se adaptando a viver em grandes navios-colônia. São excelentes navegadores e habitantes do oceano aberto.",
        "traits": {
          "quick-swimmer": "Você possui deslocamento de natação de 9 metros (30 pés). Enquanto estiver nadando, pode realizar a ação Disparada como uma ação bônus; todo o deslocamento concedido por essa Disparada deve ser usado para nadar.",
          "water-bender": "Você conhece o truque *moldar água* e pode conjurar *criar ou destruir água* um número de vezes por Descanso Longo igual ao seu bônus de proficiência, ou conjurá-la usando espaços de magia apropriados. Sabedoria é sua habilidade de conjuração para ambas as magias.",
          "wayfarer": "Enquanto conseguir ver as estrelas ou o sol, você sabe a hora e a direção em que está viajando, especialmente no mar. Observando o movimento do vento e da água, também consegue estimar a distância até a terra e a direção da costa mais próxima."
        }
      },
      "duergar": {
        "description": "Duergar, ou anões cinzentos, vivem em cavernas profundas e possuem pele negra ou azulada. São adaptados a flora e fauna tóxicas do subterrâneo e carregam uma capacidade incomum de aumentar o próprio tamanho.",
        "traits": {
          "giant-form": "Como uma ação bônus, você pode aumentar seu tamanho para Grande por 1 minuto. Sua capacidade de carga dobra para cada categoria de tamanho que aumentar, e você tem vantagem em testes de atributo e testes de resistência baseados em Força. Suas armas crescem com você e causam um dado de dano adicional por categoria de tamanho aumentada enquanto o efeito durar. Você pode usar uma ação bônus para retornar ao tamanho normal e encerrar o efeito. Pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "gray-resilience": "Você tem vantagem em testes de resistência contra ilusões e em testes realizados para resistir ou encerrar a condição Paralisado.",
          "underworld-darkvision": "O alcance da sua Visão no Escuro aumenta para 36 metros (120 pés)."
        }
      },
      "sermian-dwarf": {
        "description": "Anões Sermianos, às vezes chamados de anões do pântano, são famílias que se estabeleceram entre pântanos, brejos e colinas de Sermonway e se adaptaram ao ambiente úmido e enevoado.",
        "traits": {
          "blindsight": "Você tem aptidão natural para navegar em neblina e brumas espessas. Possui Visão às Cegas a uma distância igual a 1,5 metro (5 pés) multiplicado pelo seu bônus de proficiência.",
          "prey-mark": "Você pode conjurar *marca do caçador* sem componentes um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando conjura a magia desta forma, pode escolher uma quantidade de alvos igual ao seu bônus de proficiência em vez de apenas um, mas não pode marcar novas criaturas posteriormente. Você também pode conjurar *marca do caçador* normalmente usando espaços de magia apropriados.",
          "swamp-walker": "Seu deslocamento não é reduzido por terreno difícil que não exija um tipo de deslocamento diferente. Enquanto puder atravessar o terreno usando seu deslocamento de caminhada, esse deslocamento não é reduzido."
        }
      },
      "volcano-dwarf": {
        "description": "Anões Vulcânicos vivem em desertos, montanhas vulcânicas e outras regiões de calor natural. São especialmente comuns em Greyrock e também podem viver próximos a fontes termais em regiões frias.",
        "traits": {
          "fire-resistance": "Você possui resistência a dano de fogo.",
          "ignite-metal": "Você pode conjurar a magia *esquentar metal* sem gastar espaço de magia nem componentes um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo. Constituição é sua habilidade de conjuração para esta magia.",
          "tough-as-nails": "Seu máximo de pontos de vida aumenta em 1. Sempre que ganhar um nível em qualquer classe, seu máximo de pontos de vida aumenta em 1 adicional."
        }
      }
    }
  },
  "elf": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Os elfos de Somnus Domina têm suas raízes em Cu Chullis e remontam ao império do Lorde das Estações no Reino Feérico. Suas histórias são marcadas pela preservação da natureza, por vidas extremamente longas e por tradições transmitidas ao longo de séculos."
      },
      {
        "title": "Elfos de Somnus Domina",
        "text": "Todas as linhagens élficas reconhecem algum vínculo ancestral com o Reino Feérico. Elfos do Sol e da Lua ocupam posições nobres em Cu Chullis; Elfos das Sombras atuam historicamente como agentes do Lorde das Estações; Elfos Negros mantêm sociedades subterrâneas próprias; Elfos do Mar, da Neve, do Vento e da Madeira descendem de adaptações de elfos selvagens; e os Elfos Selvagens preservam a ligação mais direta com forças feéricas e primais."
      },
      {
        "title": "Vida em Retia",
        "text": "A presença élfica em Retia é complexa por causa dos conflitos dos últimos séculos. Linhagens de sangue misto são comuns em certas regiões, e Elfos da Madeira e do Mar aparecem com mais frequência do que Elfos do Sol ou da Lua. Sermonway, The Land Away e o Templo de T’quinn na capital itoniana abrigam comunidades importantes."
      }
    ],
    "meta": {
      "alignment": "Próximos às dinastias de Cu Chullis tendem à Lei e Neutralidade; fora delas, variam amplamente",
      "languages": "Comum e Élfico; elfos criados em Cu Chullis podem substituir Comum por outro idioma apropriado",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "fey-ancestry": "Você tem vantagem em testes de resistência realizados para evitar ou encerrar a condição Enfeitiçado em si mesmo.",
      "keen-senses": "Você possui proficiência na perícia Percepção.",
      "trance": "Você não precisa dormir e magia não pode fazê-lo dormir. Pode concluir um Descanso Longo em 4 horas se passar esse período em meditação semelhante a um transe, mantendo a consciência. Durante o transe ainda percebe o ambiente, mas sua Percepção passiva sofre uma penalidade de –5."
    },
    "legacyTraits": {
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando na escuridão como se fosse penumbra e em penumbra como se fosse luz plena. Na escuridão, distingue cores apenas em tons de cinza.",
      "eyes-of-the-fey": "Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já permita isso, independentemente de possuir proficiência ou Especialização em Percepção. Você não sofre a penalidade à Percepção passiva enquanto estiver em Transe.",
      "nimble": "Você pode realizar a ação Desengajar como uma ação bônus.",
      "primal-magic": "Escolha um truque e uma magia de 1º nível das listas de Druida, Inscritor ou Feiticeiro, além de Sabedoria, Inteligência ou Carisma como sua habilidade de conjuração. Você pode conjurar o truque à vontade. Uma vez por dia, pode conjurar a magia de 1º nível como se usasse um espaço de magia de nível igual à metade do seu bônus de proficiência, arredondado para baixo. Se possuir espaços apropriados, também pode conjurá-la usando esses espaços.",
      "skilled": "Você ganha proficiência em duas perícias. Pode substituir qualquer uma delas por proficiência em um instrumento musical ou por aprender dois novos idiomas.",
      "weapon-training": "Você possui proficiência com arcos curtos, arcos longos, espadas curtas, armaduras leves e duas armas adicionais à sua escolha."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Filho das Estrelas (Elfo Astral); • Resistências Sanguíneas (Elfo de Sangue); • Resistência a Veneno (Elfo Negro); • Cortina de Luz Estelar (Elfo da Lua); • Habitante das Profundezas (Elfo do Mar); • Visão no Escuro Sombria (Elfo das Sombras); • Adepto da Tundra (Elfo da Neve); • Empunhadura Ardente (Elfo do Sol); • Cobertura Natural (Elfo Selvagem); • Asas (Elfo do Vento); • Pés Velozes (Elfo da Madeira).",
      "fey-ancestry": "Você recebe a característica Ancestralidade Feérica do Elfo.",
      "trance": "Você recebe a característica Transe do Elfo."
    },
    "subraces": {
      "astral-elf": {
        "description": "Elfos Astrais são descendentes de uma sociedade que deixou o mundo nos últimos tempos do Mundo Antigo e construiu uma civilização distante no cosmos. São extremamente reservados e entram em Somnus Domina por portais magitecnológicos escondidos.",
        "traits": {
          "child-of-the-stars": "Você está acostumado à antigravidade e ao vácuo. Possui deslocamento de aceleração 0-G de 18 metros (60 pés), permitindo voar livremente em ambientes de gravidade zero ou baixa. Pode sobreviver sem ar por 1 hora, embora ainda respire lentamente. Tem vantagem em testes de resistência contra substâncias nocivas inaladas, mágicas ou não; se for bem-sucedido em um teste de resistência contra um efeito aéreo ou gasoso, obtém sucesso automaticamente em testes subsequentes contra o mesmo efeito por 1 hora.",
          "cosmic-step": "Como uma ação bônus, você pode se teleportar magicamente até 9 metros (30 pés) para um espaço desocupado que possa ver. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando usa este traço no seu turno, recebe deslocamento de voo (pairar) igual ao seu deslocamento de caminhada até o fim do seu próximo turno.",
          "radiant-resistance": "Você possui resistência a dano radiante."
        }
      },
      "blood-elf": {
        "description": "Elfos de Sangue são uma linhagem rara em Retia e Cu Chullis, mais comum nas Strikelands. Possuem pele avermelhada, olhos sem pupilas e marcas negras semelhantes a tatuagens. Descendem de um clã que abandonou o império do Lorde das Estações e desenvolveu uma tradição própria de magia de sangue.",
        "traits": {
          "blood-resistances": "Você possui resistência a dano necrótico e tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Envenenado.",
          "blood-shield": "Quando sofre dano de um ataque ou efeito que possa ver, você pode usar sua reação para converter o sangue perdido em energia mágica. Você recebe pontos de vida temporários iguais à metade do dano sofrido, arredondado para baixo; eles desaparecem após 1 minuto. Pode usar esta característica um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "sanguine-sorcery": "Escolha um truque e uma magia de 1º nível das listas de Feiticeiro ou Bruxo. Você aprende essas magias e pode conjurá-las usando espaços de magia apropriados. Também pode conjurar a magia de 1º nível uma vez por Descanso Longo sem gastar espaço; quando conjurada desta forma, ela é tratada como se tivesse sido conjurada em um nível igual ao seu bônus de proficiência. Constituição ou Carisma, à sua escolha, é sua habilidade de conjuração. Sempre que seu bônus de proficiência aumentar, você pode substituir a magia aprendida por outra da lista de Feiticeiro ou Bruxo, de nível igual à metade do seu bônus de proficiência, arredondado para baixo."
        }
      },
      "dark-elf": {
        "description": "Elfos Negros vivem em sociedades subterrâneas antigas, separadas das culturas que servem ao Lorde das Estações. Possuem pele escura, frequentemente negra ou lavanda, e olhos prateados ou vermelhos adaptados à escuridão profunda.",
        "traits": {
          "deep-darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Se já possuir Visão no Escuro por outro traço, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o resultado maior. Com esta visão, você percebe cores vagas em penumbra ou escuridão e não sofre desvantagem em testes de Percepção realizados em penumbra.",
          "poison-resistance": "Você possui resistência a dano de veneno e vantagem em testes de resistência realizados para resistir ou encerrar a condição Envenenado. Se descender da Congression of Cineris Clade, pode escolher resistência a fogo em vez de resistência a veneno ao criar o personagem.",
          "survivor-in-the-depths": "Você possui proficiência na perícia Sobrevivência."
        }
      },
      "moon-elf": {
        "description": "Elfos da Lua carregam forte ligação com os antigos altos elfos e muitas vezes pertencem a casas nobres de Cu Chullis. Têm aparência elegante, frequentemente com olhos prateados ou brancos e cabelos muito claros ou totalmente negros.",
        "traits": {
          "cold-resistance": "Você possui resistência a dano de frio.",
          "moonlit-eyes": "Quando estiver na escuridão em uma região exposta a qualquer quantidade de luz lunar, você enxerga na escuridão não mágica como se fosse luz plena. O efeito se manifesta como partículas semelhantes a estrelas que parecem iluminar aquilo que você deseja enxergar.",
          "starlight-curtain": "Como uma ação bônus, você pode conjurar *fogo das fadas* sem gastar espaço de magia nem componentes um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo. As luzes do efeito assumem aparência de estrelas e nebulosas."
        }
      },
      "sea-elf": {
        "description": "Elfos do Mar são sociáveis e brincalhões, com corpos adaptados à vida subaquática. Sua pele desenvolve padrões coloridos semelhantes aos peixes do ambiente em que passam os anos de formação.",
        "traits": {
          "blindness-resistance": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Cego.",
          "resident-of-the-deep": "Seu corpo é adaptado a ambientes oceânicos profundos. Você pode respirar ar e água e possui resistência a dano de frio.",
          "swimmer": "Você possui deslocamento de natação igual ao seu deslocamento-base. Enquanto estiver submerso, pode realizar a ação Disparada como uma ação bônus. Se ficar Caído enquanto estiver nadando, pode usar sua reação para se recompor imediatamente."
        }
      },
      "shadow-elf": {
        "description": "Elfos das Sombras servem historicamente ao Lorde das Estações como assassinos, espiões e agentes, vivendo sobretudo no Reino das Sombras. Possuem pele cinzenta ou prateada e chifres ósseos que se tornam mais elaborados com a idade.",
        "traits": {
          "necrotic-resistance": "Você possui resistência a dano necrótico.",
          "shadow-darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Se já possuir Visão no Escuro, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o resultado maior. Essa visão percebe cores em tons de cinza e sua visão normal é especialmente boa para notar detalhes escondidos por sombras.",
          "shadow-step": "Como uma ação bônus, você pode se teleportar magicamente até 9 metros (30 pés) para um espaço desocupado que possa ver. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando se teleporta desta forma, recebe resistência a todo dano até o início do seu próximo turno e seu corpo assume aparência sombria e fantasmagórica durante esse período."
        }
      },
      "snow-elf": {
        "description": "Elfos da Neve são territoriais e reservados, vivendo em montanhas nevadas e regiões de frio extremo. Sua pele normalmente é branca, com olhos azuis ou verdes e cabelos claros, e eles são adaptados a terrenos de neve e gelo.",
        "traits": {
          "cold-resistance": "Você possui resistência a dano de frio.",
          "frozen-path": "Como uma ação bônus, você pode criar geada mágica sob os pés por 1 minuto. Durante esse período, as superfícies sob você congelam, concedendo os efeitos de *caminhar sobre as águas* e suprimindo contra você efeitos prejudiciais causados por calor extremo ou contato com o chão. Seus passos não produzem som nem deixam rastros, concedendo vantagem em testes de Furtividade. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "tundra-adept": "Você tem vantagem em testes de resistência contra os efeitos negativos de frio extremo. Seu deslocamento não sofre penalidades por terreno coberto de neve ou gelo, incluindo terreno difícil."
        }
      },
      "sun-elf": {
        "description": "Elfos do Sol descendem dos antigos altos elfos e frequentemente integram casas nobres de Cu Chullis. São conhecidos pela dignidade, paixão intensa e tradição de resolver disputas por duelos ou provas de habilidade.",
        "traits": {
          "burning-grip": "Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, quando acerta uma criatura com um ataque de arma, você pode incendiar a arma e causar dano adicional igual à metade do seu nível, arredondado para baixo, mínimo 1. O tipo desse dano é o mesmo que você escolheu para Resistência Solar.",
          "force-of-personality": "Você possui proficiência na perícia Intimidação.",
          "solar-resistance": "Você possui resistência a dano de fogo ou radiante, à sua escolha."
        }
      },
      "wild-elf": {
        "description": "Elfos Selvagens são feéricos, brincalhões e profundamente ligados às forças primais. Sua pele possui textura semelhante a folhas e pode mudar de cor conforme humor, estação ou ambiente; adultos normalmente estabilizam uma aparência predominante.",
        "traits": {
          "fey-step": "Como uma ação bônus, você pode se teleportar magicamente até 9 metros (30 pés) para um espaço desocupado que possa ver. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Depois de se teleportar, se estiver ao menos parcialmente obscurecido, pode realizar imediatamente a ação Esconder-se como parte da mesma ação bônus.",
          "natural-cover": "Quando estiver em terreno repleto de folhagem natural ou que combine visualmente com sua Forma Sazonal atual, você consegue se camuflar com facilidade. Nesses ambientes, pode realizar a ação Esconder-se como uma ação bônus desde que esteja ao menos parcialmente obscurecido.",
          "seasonal-form": "Sempre que conclui um Descanso Longo, você pode assumir uma Forma Sazonal diferente, que permanece até o próximo Descanso Longo: • Outono: recebe duas proficiências que não possuía, cada uma em uma ferramenta ou arma, provenientes de memória ancestral; perde essas proficiências quando muda de forma. • Inverno: recebe Visão no Escuro a 9 metros (30 pés); se já possuir Visão no Escuro, o alcance aumenta em 9 metros. • Primavera: seu deslocamento-base aumenta em 3 metros (10 pés). • Verão: você possui resistência a dano de fogo e frio."
        }
      },
      "wind-elf": {
        "description": "Elfos do Vento são raros e vivem sobretudo no Plano Elemental do Ar ou em regiões montanhosas. Possuem marcas na pele semelhantes a maquiagem de artistas, unhas longas e grandes asas emplumadas.",
        "traits": {
          "enhanced-breath": "Seu corpo está adaptado a ambientes de ar rarefeito. Você consegue prender a respiração pelo dobro do tempo normal.",
          "fly-by": "Se acertar uma criatura com um ataque de arma e depois sair voando do alcance dela, você não provoca ataques de oportunidade dessa criatura.",
          "wings": "Você possui um par de grandes asas emplumadas e deslocamento de voo igual ao seu deslocamento-base. Por causa do tamanho das asas, não pode decolar do chão a menos que exista ao menos um espaço livre adjacente a você no mesmo plano horizontal. Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor e continuar no ar sem penalidade."
        }
      },
      "wood-elf": {
        "description": "Elfos da Madeira são a linhagem élfica mais comum em Retia e Cu Chullis e têm fama de ser os mais amistosos com outros povos. São exploradores naturais e protetores dos ambientes em que vivem.",
        "traits": {
          "acid-resistance": "Você possui resistência a dano de ácido.",
          "forest-movement": "Você possui deslocamento de escalada igual ao seu deslocamento-base e pode escalar superfícies ásperas sem equipamento de escalada e sem penalidade. Quando cair mais de 3 metros (10 pés) enquanto estiver adjacente a uma parede ou outra superfície, pode usar sua reação para se apoiar nela, não sofrer dano de queda e aterrissar em pé.",
          "swift-footed": "Quando realiza a ação Disparada, o deslocamento concedido por ela é dobrado. Este benefício não se aplica quando Disparada é realizada como uma ação bônus."
        }
      }
    }
  },
  "enaretos": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Enáretos nascem tocados por sangue divino, poder radiante ou pela bênção de uma entidade virtuosa. Guardam uma centelha celestial que altera sua aparência, longevidade e capacidades, muitas vezes manifestando pele metálica, presença imponente e asas de energia radiante."
      },
      {
        "title": "Os poucos destinados",
        "text": "Também chamados de nascidos da virtude, Enáretos sentem forte impulso para viver de acordo com a herança que carregam. Seus valores moldam a forma do poder celestial e das asas que manifestam, que podem parecer penas luminosas ou padrões arcanos abstratos."
      },
      {
        "title": "Linhagem celestial",
        "text": "Um Enáretos pode nascer de uma união com um celestial, de uma linhagem divina distante, de um santo ou de outras formas de contato com poder superior. Conforme envelhece, seu corpo tende a se tornar mais angelical, e muitos acabam lembrando devas, arcontes ou outros celestiais."
      },
      {
        "title": "Atraídos à origem",
        "text": "É comum que Enáretos sintam que não pertencem completamente à vida comum de suas famílias. Muitos partem em busca de uma finalidade maior e alguns adotam novos nomes ligados à virtude, desejo ou propósito que guia sua centelha celestial."
      }
    ],
    "meta": {
      "alignment": "Predisposição ao Bem, embora Enáretos malignos existam",
      "languages": "Comum e Celestial; Comum pode ser substituído por outro idioma apropriado à linhagem",
      "speed": "9 m (30 pés); voo laborioso 18 m (60 pés) por Asas Celestiais"
    },
    "coreTraits": {
      "angelic-resistance": "Ao receber esta característica, escolha dano radiante ou necrótico. Você possui resistência ao tipo escolhido.",
      "celestial-wings": "À vontade, você pode manifestar ou dissipar um par de asas feitas de energia radiante, que pode parecer luminosa e gloriosa ou distorcida e crepitante. Enquanto as asas estiverem manifestadas, você possui deslocamento de voo laborioso de 18 metros (60 pés). Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor imediatamente sem penalidade.",
      "creature-types": "Além de Humanoide e Enáretos, seu tipo de criatura também conta como Celestial."
    },
    "legacyTraits": {
      "blindsight": "Você possui Visão às Cegas a uma distância igual a 1,5 metro (5 pés) multiplicado pelo seu bônus de proficiência.",
      "divine-magic": "Escolha uma magia de 1º nível das listas de Druida, Clérigo ou Paladino e escolha Sabedoria, Inteligência ou Carisma como sua habilidade de conjuração. Você pode conjurar o truque *luz* à vontade e a magia de 1º nível um número de vezes por Descanso Longo igual ao seu bônus de proficiência, usando a habilidade escolhida. Se possuir espaços de magia apropriados, também pode conjurá-la usando esses espaços.",
      "healing-hands": "Como uma ação bônus, você pode tocar uma criatura e rolar uma quantidade de d4 igual ao seu bônus de proficiência; o alvo recupera pontos de vida iguais ao total rolado. Você pode usar este traço uma vez por Descanso Curto ou Longo.",
      "perfected-flight": "Você recebe deslocamento de voo igual a 3 metros (10 pés) multiplicado pelo seu bônus de proficiência. Para escolher este Traço de Legado, você precisa possuir um deslocamento de voo laborioso.",
      "virtuous-fury": "Uma vez por turno, quando acerta uma criatura com um ataque de arma, pode causar 1d6 de dano radiante adicional. Você pode fazer isso um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
      "weapon-training": "Você possui proficiência com arcos longos, maças, espadas longas, armaduras leves e duas armas adicionais à sua escolha."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Olho da Mente (Clareza); • Guiado pela Fé (Descoberta); • Desafio Glorioso (Glória); • Sussurro Telepático (Luxúria); • Profecia Relâmpago (Profecia); • Clamor Radiante (Retribuição); • Bênção Poderosa (Ira). Se Enáretos for sua raça secundária, seu tipo de criatura também passa a contar como Celestial.",
      "celestial-wings": "Você recebe a característica Asas Celestiais do Enáretos."
    },
    "subraces": {
      "clarity": {
        "description": "Enáretos da Clareza buscam lucidez e verdade. Seu poder manifesta uma percepção quase sobrenatural das intenções alheias, e suas asas costumam exibir tons azulados e padrões circulares suaves.",
        "traits": {
          "eye-of-the-mind": "Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já esteja permitindo isso, independentemente de possuir proficiência ou Especialização em Percepção.",
          "inquisitive-outburst": "Como uma ação bônus, você pode fazer seu poder radiante envolver seus ataques por 1 minuto. Durante esse período, na primeira vez que acerta com um ataque de arma em cada turno, causa dano psíquico adicional igual à metade do seu nível total, arredondado para baixo. Pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "judge-of-character": "Você possui proficiência na perícia Intuição. Se já for proficiente nela ou ganhar proficiência por outro meio, recebe Especialização em Intuição em vez disso. Se outra característica lhe oferecer a oportunidade de obter proficiência em Intuição, pode usar essa oportunidade para obter Especialização desta forma."
        }
      },
      "discovery": {
        "description": "Enáretos da Descoberta são movidos pelo desejo de viajar e seguir o caminho que o destino coloca diante deles. Defendem a própria liberdade e a dos outros, e suas asas costumam ser longas, delgadas e esverdeadas.",
        "traits": {
          "divine-eyes": "Você possui proficiência na perícia Percepção.",
          "guided-by-faith": "Quando erra um ataque usando uma arma à distância ou uma arma corpo a corpo com as propriedades Leve ou Acuidade, pode usar sua reação para rolar um d20 e substituir por ele o d20 do ataque que falhou, possivelmente alterando o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "radiant-passage": "Como uma ação bônus, você pode despertar seu espírito aventureiro e, por 1 minuto, ficar sob os efeitos da magia *recuo acelerado*. Durante esse período, você não provoca ataques de oportunidade e seu deslocamento de voo ou voo laborioso aumenta em 3 metros (10 pés). Você pode usar este traço uma vez por Descanso Curto ou Longo."
        }
      },
      "glory": {
        "description": "Enáretos da Glória procuram status, influência e vitória, buscando viver à altura de sua herança divina. Suas asas costumam assumir a forma clássica de grandes penas brancas e brilhantes.",
        "traits": {
          "challenging-outpour": "Como uma ação bônus, você pode fazer seu poder radiante irromper por 1 minuto. Durante esse período, qualquer criatura hostil a até 3 metros (10 pés) que possa vê-lo tem desvantagem em todas as jogadas de ataque contra criaturas que não sejam você, a menos que faça pelo menos um ataque contra você no turno dela ou você esteja Incapacitado. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "glorious-defiance": "Enquanto não estiver usando armadura, sua proteção celestial permite calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Carisma.",
          "will-over-skill": "Sempre que conclui um Descanso Longo, escolha duas armas; você ganha proficiência com elas até o próximo Descanso Longo. Pode substituir qualquer uma dessas escolhas por uma ferramenta ou instrumento. Enquanto estiver usando uma arma, ferramenta ou instrumento no qual ganhou proficiência desta forma, pode renunciar a uma das proficiências concedidas pela característica — não necessariamente a que está usando — para ter vantagem em todas as rolagens feitas com aquela arma, ferramenta ou instrumento até o fim do seu próximo turno. Renunciar a uma proficiência desta maneira não impede que você a escolha novamente no futuro."
        }
      },
      "lust": {
        "description": "Enáretos da Luxúria são guiados pelo desejo em suas muitas formas e possuem uma presença naturalmente cativante. Suas asas frequentemente assumem tons vermelhos ou rosados e seus olhos podem ter pupilas felinas.",
        "traits": {
          "deva-s-charm": "Como uma ação, manifeste sua presença divina e escolha uma quantidade de criaturas igual ao seu bônus de proficiência que você possa ver a até 9 metros (30 pés). Cada alvo deve ser bem-sucedido em um teste de resistência de Carisma ou fica Atordoado por 1 minuto, repetindo o teste ao fim de cada turno. Sempre que sofrer dano, pode repetir o teste com vantagem; um sucesso encerra o efeito. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "reciprocative-resistance": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Enfeitiçado.",
          "telepathic-whisper": "Você pode falar telepaticamente com criaturas. Elas escutam sua voz na mente e a reconhecem se já conhecerem você, mas não podem responder sem outro meio de telepatia. O alcance é igual a 3 metros (10 pés) multiplicado pelo seu bônus de proficiência."
        }
      },
      "prophecy": {
        "description": "Enáretos da Profecia mantêm o olhar voltado para futuros possíveis e conseguem perceber pequenas mudanças na probabilidade. Suas asas podem parecer formadas por sigilos, engrenagens e padrões de tom amarelo.",
        "traits": {
          "flash-prophecy": "Você recebe um bônus em testes de iniciativa igual ao seu bônus de proficiência. Quando rola iniciativa, pode imediatamente se levantar de uma posição sentada ou Caída, ou sacar uma arma.",
          "providence": "Quando obtém 1 em qualquer d20 rolado como parte de uma jogada de ataque, teste de atributo ou teste de resistência, pode rolar novamente o d20 e deve manter o novo resultado, mesmo que seja outro 1.",
          "reading-forward": "Quando um ataque que você possa ver é feito contra você, pode usar sua reação para observar o futuro imediato. Role um d20; se o resultado for menor que o d20 do ataque, o ataque passa a usar seu novo resultado. Você deve decidir antes de o Mestre confirmar se o ataque acertou ou errou. Pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "retribution": {
        "description": "Enáretos da Retribuição são movidos pela necessidade de corrigir injustiças e possuem força de vontade para enfrentar aquilo que consideram errado. Suas asas normalmente apresentam penas vermelhas alongadas e olhos intensamente brilhantes.",
        "traits": {
          "bonus-proficiency": "Você ganha proficiência em Atletismo ou Intimidação, à sua escolha quando recebe esta característica.",
          "endless-burden": "Quando é reduzido a 0 pontos de vida, role 1d100. Se o resultado for igual ou menor que 10 × seu bônus de proficiência, você fica com 1 ponto de vida em vez disso. Cada vez que evitar cair a 0 pontos de vida desta forma, ganha 1 ponto de Fadiga de Combate; ao atingir seu máximo de Fadiga, esta característica deixa de funcionar. Se a mesa não usar Fadiga de Combate, a fonte sugere usar níveis de Exaustão e desativar a característica quando você atingir uma quantidade igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "radiant-outcry": "Como uma ação bônus, você pode se envolver em energia radiante por 1 minuto. Durante esse período, o primeiro ataque que acertar a cada turno causa dano radiante adicional igual à metade do seu nível total, arredondado para baixo. O efeito termina se você ficar Incapacitado. Pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }
      },
      "wrath": {
        "description": "Enáretos da Ira abraçam força e violência primal como expressão de sua centelha divina. Seus olhos muitas vezes não possuem íris ou pupilas e suas asas podem parecer energia negra ou vermelha crepitante.",
        "traits": {
          "dead-centered": "Você tem vantagem em testes de atributo e testes de resistência realizados para evitar ou escapar de ser Agarrado ou movido contra sua vontade.",
          "mighty-blessing": "Quando realiza uma jogada de ataque, teste de resistência ou teste de atributo baseado em Força, pode fazê-lo com vantagem. Pode escolher fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "wrathful-shroud": "Como uma ação bônus, você pode incendiar seu poder divino em uma aura que dura 1 minuto. Durante esse período, todas as criaturas, incluindo você, que iniciarem o turno a até 3 metros (10 pés) de você sofrem dano radiante igual à metade do seu nível total, arredondado para cima. O efeito termina se você ficar Incapacitado. Você pode usar esta característica uma vez por Descanso Longo."
        }
      }
    }
  },
  "feralus": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Feralus são humanoides felinos com garras, caudas, pés e cabeças de grandes ou pequenos gatos. São rápidos, determinados e intensos, encontrados com maior frequência nas Strikelands e em ilhas distantes, embora existam comunidades em Greyrock, Sermonway e na floresta Catmoss de Mot."
      },
      {
        "title": "Cultura baseada em mérito",
        "text": "Famílias e comunidades feralus valorizam cada membro pelo que consegue oferecer ao grupo. Caçadores, coletores e guerreiros são comuns, mas curandeiros, artesãos e outros provedores são igualmente respeitados. Mesmo longe de comunidades feralus, muitos procuram demonstrar seu valor por meio daquilo que fazem pelas pessoas de quem gostam."
      },
      {
        "title": "Novenwere",
        "text": "Os feralus preservam histórias sobre Novenwere, uma ilha-nação escondida por tempestades, supostamente governada por um deus-rei que reivindica autoridade sobre todos os feralus. Os que deixam essa terra parecem impedidos de revelar sua localização, mantendo sua existência cercada de lendas."
      }
    ],
    "meta": {
      "alignment": "Frequentemente caóticos; sem tendência marcante para bem ou mal",
      "languages": "Comum + 1 idioma adicional à escolha",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, distingue cores apenas em tons de cinza.",
      "feline-haste": "Seus reflexos e sua constituição permitem uma explosão repentina de velocidade. Quando se move no seu turno durante um combate, você pode dobrar seu deslocamento até o fim daquele turno. Depois de fazer isso, não pode usar este traço novamente até passar um de seus turnos movendo 0 pés."
    },
    "legacyTraits": {
      "cat-claws": "Seus ataques desarmados podem usar seu modificador de Destreza para as jogadas de ataque e dano. Quando fizer isso, eles causam dano cortante igual a 1d6 + seu modificador de Destreza e contam como armas com a propriedade Leve.",
      "climber": "Você possui deslocamento de escalada igual ao seu deslocamento. Pode escalar superfícies ásperas, como penhascos rochosos ou árvores, sem equipamento de escalada e sem precisar realizar testes de atributo.",
      "slippery": "Você pode realizar a ação Desengajar como uma ação bônus.",
      "keen-senses": "Você tem vantagem em testes de Percepção que dependam da audição ou da visão.",
      "quick-reflexes": "Enquanto não estiver usando armadura, pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Sabedoria, representando seus reflexos naturais e sua capacidade de perceber ameaças. Você ainda pode usar um escudo e manter este benefício.",
      "wild-life": "Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já esteja permitindo isso, independentemente de possuir proficiência ou Especialização em Percepção."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Sentido Sísmico (Feralus das Profundezas); • Graça Felina (Gato da Selva); • Imobilizar (Juba dos Lordes); • Linhagem Maulinn (Maulinn); • Proficiência em Furtividade (Gato Sombrio).",
      "darkvision": "Você recebe a característica Visão no Escuro do Feralus.",
      "feline-haste": "Você recebe a característica Pressa Felina do Feralus."
    },
    "subraces": {
      "deep-feralus": {
        "description": "Feralus das Profundezas vivem em cavernas e túneis subterrâneos, geralmente em tribos errantes. Suas pelagens assumem tons de cinza, verde profundo, púrpura e amarelos turvos, e eles recorrem à magia natural e às vibrações da pedra para caçar e se defender.",
        "traits": {
          "arcana-of-the-depths": "Você pode conjurar o truque *luz* à vontade e também pode conjurar *fogo das fadas* sem gastar espaço de magia ou componentes um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo. Você também pode conjurar essas magias usando espaços de magia apropriados. Inteligência, Sabedoria ou Carisma, à sua escolha durante a criação do personagem, é sua habilidade de conjuração para elas.",
          "dwelling-shot": "Quando realiza um ataque enquanto está escondido e erra, você pode rolar um d20 e usá-lo no lugar do resultado de d20 do ataque, possivelmente alterando o resultado.",
          "tremorsense": "Você possui Sentido Sísmico com alcance igual a 3 metros (10 pés) × seu bônus de proficiência. Dentro desse alcance, conhece a localização das criaturas pelas vibrações e é tratado como se pudesse vê-las. Criaturas que não se moveram nem realizaram ações no turno anterior são invisíveis para você por meio desse sentido, e ele só detecta criaturas em contato com material que você também esteja tocando."
        }
      },
      "junglecat": {
        "description": "Gatos da Selva saltam com facilidade entre árvores e resistem a quedas que incapacitam aventureiros menos ágeis. São extremamente destros e usam saltos predatórios para cair sobre suas presas.",
        "traits": {
          "cat-s-grace": "Quando sofreria dano de queda, reduza a distância considerada para calcular esse dano em 3 metros (10 pés) × seu bônus de proficiência. Enquanto a queda não reduzir você a 0 pontos de vida, você nunca fica Caído como resultado dela.",
          "poison-resistance": "Você possui resistência a dano de veneno e vantagem em testes de resistência realizados para evitar ou encerrar a condição Envenenado.",
          "predatory-leap": "Como uma ação bônus, você pode saltar de uma posição parada para um espaço desocupado que possa ver dentro do deslocamento restante; a distância percorrida é subtraída do seu deslocamento. Esse salto não provoca ataques de oportunidade. Se saltar para uma parede, teto ou outra superfície vertical ou invertida, pode se agarrar a ela e permanecer ali até o início do seu próximo turno. Além disso, se terminar o salto em um espaço adjacente a uma criatura que não seja mais de uma categoria de tamanho maior que você, pode realizar um ataque desarmado contra ela como parte da mesma ação bônus; em caso de acerto, ela fica Caída. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "lordsmane": {
        "description": "Jubas dos Lordes lembram leões humanoides poderosos. São naturalmente musculosos, intimidadores e capazes de derrubar adversários com facilidade, enquanto seus rugidos abalam quem não luta ao seu lado.",
        "traits": {
          "champion-s-roar": "Como uma ação bônus, você pode soltar um rugido feroz. Criaturas à sua escolha dentro de um alcance igual a 1,5 metro (5 pés) × seu modificador de Carisma devem ser bem-sucedidas em um teste de resistência de Sabedoria cuja habilidade associada é Carisma ou ficam Amedrontadas por você até o fim do seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "commanding-presence": "Você possui proficiência nas perícias Persuasão e Intimidação.",
          "hold-down": "Enquanto estiver agarrando uma criatura, você tem vantagem nas jogadas de ataque feitas contra ela. Além disso, como uma ação bônus, pode arremessar uma criatura que esteja agarrando a uma distância em pés igual ao seu valor de Força, arredondado para o múltiplo de 5 mais próximo. Ela sofre 1d6 de dano contundente para cada 1,5 metro (5 pés) que for arremessada. Se a criatura for uma categoria de tamanho maior que você, a distância em pés é igual à metade do seu valor de Força, arredondado para baixo e depois para o múltiplo de 5 mais próximo."
        }
      },
      "maulinn": {
        "description": "Maulinn descendem de antigos feralus do deserto que participaram de civilizações desaparecidas há milênios. Conservam uma centelha celestial dessas culturas, geralmente exibindo pelagem muito clara e marcas vermelhas ao redor dos olhos.",
        "traits": {
          "maulinn-lineage": "Você possui resistência a dano de fogo e a dano radiante.",
          "pharoah-s-will": "Quando realiza um teste de atributo ou teste de resistência baseado em Carisma, pode decidir antes da rolagem rolar 1d6 e adicionar o resultado. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "radiant-paw": "Como uma ação bônus, você pode invocar um antigo poder celestial, fazendo marcas rúnicas cobrirem seu corpo por 1 minuto. Durante esse período, seus ataques de arma causam 1d8 de dano radiante adicional, seu deslocamento aumenta em 3 metros (10 pés) e você tem vantagem em testes de Destreza e testes de resistência de Destreza. Pode usar esta característica um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }
      },
      "shadowcat": {
        "description": "Gatos Sombrios possuem pelagem escura que se mistura às sombras e conseguem transformar o próprio corpo em sombra por instantes, desaparecendo e reaparecendo nas proximidades. Eles conseguem viver no Reino das Sombras sem dificuldades.",
        "traits": {
          "jungle-darkvision": "O alcance da sua Visão no Escuro aumenta para 36 metros (120 pés).",
          "shadow-step": "Como uma ação bônus, você desaparece e se transforma em sombra, reaparecendo magicamente em um espaço desocupado que possa ver a até 9 metros (30 pés). Depois disso, a próxima jogada de ataque que fizer neste turno tem vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "stealth-proficiency": "Você possui proficiência na perícia Furtividade."
        }
      }
    }
  },
  "firbolg": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Firbolgs são parentes gentis dos gigantes, marcados por uma conexão natural e acolhedora com a terra e com os animais. Possuem feições arredondadas e amigáveis que contrastam com sua grande força física e aparecem em diferentes regiões sem uma origem histórica claramente registrada."
      },
      {
        "title": "Descendentes de gigantes",
        "text": "A relação exata entre firbolgs e gigantes se perdeu no tempo. Eles não são divididos segundo tipos clássicos de gigantes, mas suas linhagens se adaptam fortemente aos biomas em que vivem, sugerindo uma ancestralidade distante e mais pacífica."
      },
      {
        "title": "Druídicos ou industriais?",
        "text": "Como não existe um centro cultural, império ou pátria única dos firbolgs, eles não são classificados de forma clara como Druídicos ou Industriais na Guerra Industrial. Vivem tanto em Retia quanto em Cu Chullis, com maior concentração neste último continente."
      }
    ],
    "meta": {
      "alignment": "Predominantemente bons; firbolgs malignos são extremamente raros",
      "languages": "Comum e Gigante",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "empathy-for-land-beast": "Você possui meios limitados de se comunicar com bestas, plantas, vegetação e outros animais selvagens que se expressem por gestos ou sentimentos. Essas criaturas entendem o significado e a intenção de suas palavras, embora não consigam responder da mesma forma sem algum meio próprio. Você tem vantagem em testes de Carisma feitos para influenciar criaturas com as quais esteja se comunicando desta maneira.",
      "firbolg-magic": "Você pode conjurar *disfarçar-se* e *detectar magia* por meio deste traço, usando Sabedoria como sua habilidade de conjuração. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Além disso, cada subraça Firbolg concede magias por sua característica Bênção da Terra; essas magias usam a mesma reserva de usos. Ao conjurar por esta característica uma magia de nível superior ao 1º, ela consome uma quantidade de usos igual ao nível-base da magia."
    },
    "legacyTraits": {
      "endurance-nap": "Quando realiza um Descanso Curto e gasta Dados de Vida para recuperar pontos de vida, você recupera 2 pontos de vida adicionais para cada Dado de Vida gasto.",
      "land-s-arcana": "Escolha um truque e uma magia de 1º nível da lista de magias de Druida, além de Constituição, Sabedoria ou Carisma como sua habilidade de conjuração para essas magias. Você pode conjurar o truque à vontade e a magia de 1º nível um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Se possuir espaços de magia apropriados, também pode conjurar a magia usando esses espaços.",
      "giant-s-might": "Uma vez por turno, quando atacar uma criatura com uma arma que possua a propriedade Pesada ou Duas Mãos, você pode rolar 1d6 e adicionar o resultado à jogada de ataque. Pode fazer isso um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
      "hidden-step": "Como uma ação bônus, você pode ficar magicamente invisível até o início do seu próximo turno, até realizar um ataque ou até usar uma ação que obrigue uma criatura a realizar um teste de resistência. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
      "mighty-wall": "Quando realiza a ação Esquivar, ataques feitos contra criaturas não hostis adjacentes a você não podem ter vantagem enquanto você estiver recebendo os benefícios de Esquivar. Criaturas menores que você protegidas por esta característica são tratadas como se possuíssem meia cobertura.",
      "tremendous-build": "Sua capacidade de carga e o peso que você pode empurrar, arrastar ou erguer são dobrados."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Resistências do Gigante (Firbolg da Floresta); • Chef Especialista (Firbolg do Marco); • Espírito Duradouro (Firbolg de Arenito); • Resistência ao Frio (Firbolg Vigia das Ondas); • Alma Diligente (Firbolg do Redemoinho); • qualquer característica Bênção da Terra, mas apenas se você possuir Magia Firbolg.",
      "empathy-for-land-beast": "Você recebe a característica Empatia pela Terra e pelas Bestas do Firbolg.",
      "firbolg-magic": "Você recebe a característica Magia Firbolg.",
      "size-options": "Ao criar o personagem, você pode escolher ser uma criatura Grande."
    },
    "subraces": {
      "forest-firbolg": {
        "description": "Firbolgs da Floresta vivem confortavelmente entre bosques e comunidades próximas, cuidando das criaturas das matas profundas e encontrando paz sob as copas das árvores.",
        "traits": {
          "giant-s-resistances": "Você possui resistência a dano de ácido e a dano de veneno.",
          "land-s-blessing": "Você pode conjurar *comunhão animal*, *emaranhar* e *vínculo protetor* usando sua característica Magia Firbolg.",
          "skin-of-bark": "Enquanto não estiver usando armadura, você pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Constituição. Para características que exigem o uso de armadura média ou pesada, calcular sua CA desta forma pode ser tratado como se você estivesse usando uma dessas categorias de armadura."
        }
      },
      "landmark-firbolg": {
        "description": "Firbolgs do Marco viajam de lugar em lugar em busca de novas paisagens e maravilhas naturais. Podem viajar com animais que cuidam ou com companhias de aventureiros quando entram em regiões perigosas.",
        "traits": {
          "defiant-resilience": "Quando é bem-sucedido em um teste de resistência contra um efeito que causaria metade do dano em um sucesso, você pode usar sua reação para não sofrer dano algum.",
          "expert-chef": "Você possui proficiência na perícia Sobrevivência e com utensílios de cozinheiro. Se passar 1 hora durante um Descanso Longo coletando e preparando alimento em uma área que possua algo comestível, produz uma quantidade de libras de comida igual a 3 + seu bônus de proficiência, sem precisar realizar testes de atributo.",
          "land-s-blessing": "Você pode conjurar *bênção*, *perdição* e *encontrar montaria* usando sua característica Magia Firbolg."
        }
      },
      "sandstone-firbolg": {
        "description": "Firbolgs de Arenito vêm de desertos, ermos, badlands e outros climas quentes e arenosos. Sua fisiologia conserva água e regula a temperatura de modo particularmente eficiente.",
        "traits": {
          "efficiently-hydrated": "Você precisa consumir apenas metade da quantidade normal de água por dia e tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Exausto.",
          "enduring-spirit": "Quando é reduzido a 0 pontos de vida e começa a morrer, continua realizando testes de resistência contra a morte normalmente, mas não sofre os demais efeitos negativos da condição Morrendo que afetariam suas ações ou seu deslocamento e não fica Caído até falhar em pelo menos um teste de resistência contra a morte.",
          "land-s-blessing": "Você pode conjurar *raio guiador*, *erupção terrestre* e *raio ardente* usando sua característica Magia Firbolg."
        }
      },
      "wavewatcher-firbolg": {
        "description": "Firbolgs Vigias das Ondas vivem perto de mares, rios e costas frias. Seus corpos são adaptados à água e às temperaturas baixas, e eles atuam como guardiões naturais desses ambientes.",
        "traits": {
          "cold-resistance": "Você possui resistência a dano de frio.",
          "land-s-blessing": "Você pode conjurar *cristal perfurante (piercing crystal)*, *purificar alimentos e bebidas* e *flecha ácida* usando sua característica Magia Firbolg.",
          "water-warden": "Você possui deslocamento de natação igual ao seu deslocamento-base e consegue prender a respiração pelo dobro do tempo normal."
        }
      },
      "whirlwind-firbolg": {
        "description": "Firbolgs do Redemoinho são adaptados a planícies abertas e regiões de vento intenso. São atentos, diligentes e conseguem usar correntes de ar para acelerar os próprios movimentos.",
        "traits": {
          "diligent-soul": "Uma vez por Descanso Curto ou Longo, se estiver Surpreso quando um combate começar, você pode agir normalmente apesar da surpresa.",
          "land-s-blessing": "Você pode conjurar *santuário*, *escudo arcano* e *lufada de vento* usando sua característica Magia Firbolg.",
          "slipstream": "Quando se move no seu turno, você pode invocar uma corrente de vento que dobra seu deslocamento até o fim daquele turno. Você pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Além disso, jogadas de ataque de oportunidade feitas contra você têm desvantagem durante esse deslocamento."
        }
      }
    }
  },
  "flooflin": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Flooflins são humanoides semelhantes a coelhos, com rosto, pés, cauda e pelagem de lebre em um corpo humanoide. São rápidos, astutos, curiosos e culturalmente pouco reclusos, aparecendo com frequência em comunidades de outros povos."
      },
      {
        "title": "Origem estranha",
        "text": "A origem dos flooflins é cercada de contradições. Não existem registros muito antigos de sua presença, enquanto lendas afirmam que teriam vivido em Lycrothemia antes de serem trazidos ao mundo pelos Eidolons. Embora a espécie não consiga respirar no espaço, alguns foram encontrados junto de elfos astrais e framebilt ligados a viagens além do mundo."
      },
      {
        "title": "Engenheiros extraordinários",
        "text": "Em Retia, muitos flooflins vivem no Pico Ascendente de High Wave, onde trabalham como engenheiros, cientistas e tripulantes de aeronaves. Compartilham com os gnomos uma forte curiosidade por invenção e frequentemente colaboram em projetos magitecnológicos."
      },
      {
        "title": "Guilda dos Caminhantes da Lua",
        "text": "Em Cu Chullis, flooflins — especialmente os Pés Lunares — podem servir à dinastia Elmanda como soldados, conselheiros, vassalos e atendentes. Esses servidores são coletivamente conhecidos como a Guilda dos Caminhantes da Lua."
      }
    ],
    "meta": {
      "alignment": "Quase sempre bem-intencionados; raramente neutros no eixo lei/caos",
      "languages": "Comum + 1 idioma adicional à escolha, geralmente Élfico",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "brave-soul": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Amedrontado. Se estiver Amedrontado e falhar em um teste de resistência realizado para encerrar essa condição, pode usar sua reação para rolar 1d6 e adicionar o resultado à jogada, possivelmente transformando a falha em sucesso.",
      "moon-jump": "Como uma ação bônus, enquanto seu deslocamento for maior que 0, você pode saltar uma quantidade de pés igual a 5 × seu bônus de proficiência. Pode atingir uma altura de até metade dessa distância para ultrapassar obstáculos, e a altura vertical percorrida nesse salto não é contabilizada para determinar dano de queda. Esse movimento não provoca ataques de oportunidade. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Além disso, pode realizar saltos em altura e em distância a partir de uma posição parada sem sofrer a penalidade normal."
    },
    "legacyTraits": {
      "dasher": "Você pode realizar a ação Disparada como uma ação bônus.",
      "luck-of-the-rabbit": "Quando falha em um teste de Destreza ou teste de resistência de Destreza, pode usar sua reação para rolar um d20 e usar esse resultado no lugar do primeiro d20.",
      "one-eye-open": "Você dorme levemente e está sempre preparado para o perigo. Você não pode ser Surpreendido em combate.",
      "prepared": "Você adiciona seu bônus de proficiência às suas jogadas de iniciativa.",
      "skilled": "Você ganha proficiência em uma perícia à sua escolha ou em duas ferramentas à sua escolha.",
      "speedy": "Seu deslocamento-base aumenta em 3 metros (10 pés)."
    },
    "mixedBloodTraits": {
      "bloodline": "Escolha uma das características abaixo e receba-a da subraça correspondente: • Sobrevivência Contra Tudo (Gramíneo); • Sono Meditativo (Folhoso); • Sempre Pronto (Pé Lunar); • Levantar-se Rápido (Cavaleiro Selvagem).",
      "brave-soul": "Você recebe a característica Alma Valente do Flooflin.",
      "moon-jump": "Você recebe a característica Salto Lunar do Flooflin.",
      "size-options": "Você pode escolher ser Pequeno ou Médio."
    },
    "subraces": {
      "grassin": {
        "description": "Gramíneos herdaram fortes instintos de sobrevivência. São resistentes a toxinas e capazes de obter recursos mesmo em ambientes desconhecidos quando as condições permitem.",
        "traits": {
          "break-rush": "Uma vez no seu turno, você pode dobrar seu deslocamento até o fim daquele turno. Pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "poison-resistance": "Você possui resistência a dano de veneno devido à exposição ancestral a animais perigosos nas regiões selvagens.",
          "survival-against-all": "Você possui proficiência na perícia Sobrevivência. Desde que seja plausível encontrar recursos no ambiente em que está, pode passar 1 hora procurando e automaticamente encontrar comida e água suficientes para alimentar a si mesmo por um dia."
        }
      },
      "leafly": {
        "description": "Folhosos descendem de áreas de vegetação densa e são associados ao Reino Feérico. Embora não sejam mais considerados fadas, mantêm traços dessa herança e conseguem desaparecer por alguns instantes.",
        "traits": {
          "fey-like-ancestry": "Você tem vantagem em testes de resistência realizados para resistir ou encerrar a condição Enfeitiçado e não pode ser colocado para dormir por magia.",
          "meditative-sleeper": "Você precisa de apenas 4 horas de descanso, seguindo as regras normais de repouso, para receber os benefícios de um Descanso Longo.",
          "vanishing-hare": "Como uma ação bônus, você pode invocar magia primal e ficar invisível até o início do seu próximo turno. Enquanto estiver invisível desta forma, também fica completamente oculto de sentidos baseados em vibrações ou instinto, tornando-se invisível para Visão às Cegas e Sentido Sísmico. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }
      },
      "moonfoot": {
        "description": "Pés Lunares possuem pelagem negra ou muito escura e olhos prateados marcantes. Estão à vontade na escuridão, misturam-se às sombras e são excepcionalmente difíceis de surpreender. Lendas os ligam à lua Lycrothemia.",
        "traits": {
          "at-the-ready": "Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já esteja permitindo isso, independentemente de possuir proficiência ou Especialização em Percepção. Desvantagem em testes de Percepção não reduz sua Percepção passiva.",
          "cover-of-night": "Quando realiza a ação Esconder-se em penumbra ou escuridão, você tem vantagem no teste de Furtividade.",
          "darkvision": "Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Na escuridão, distingue cores apenas em tons de cinza."
        }
      },
      "wildrider": {
        "description": "Cavaleiros Selvagens vivem em terrenos perigosos e atacam com rapidez. São fortes, agressivos e reagem ao perigo com um instinto predatório imediato.",
        "traits": {
          "furious-dash": "Quando reduz uma criatura a 0 pontos de vida ou obtém um acerto crítico, você não provoca ataques de oportunidade até o fim daquele turno.",
          "quick-up": "Levantar-se da condição Caído custa apenas 1,5 metro (5 pés) de deslocamento para você. Quando é derrubado e fica Caído, pode usar sua reação para se levantar imediatamente.",
          "thunder-foot": "Quando usa Salto Lunar, você pode escolher uma criatura a até 1,5 metro (5 pés) do espaço em que pretende aterrissar. Ao cair, golpeia essa criatura e a força a realizar um teste de resistência de Força cuja habilidade associada é Força. Em uma falha, ela fica Caída e sofre dano contundente igual a 1d6 multiplicado pela metade do seu bônus de proficiência, arredondado para baixo, + seu modificador de Força."
        }
      }
    }
  },
  "framebilt": {
    "textRevision": "full",
    "lore": [
      {
        "title": "Visão geral",
        "text": "Framebilt são seres construídos com uma armação mineral coberta por fibras vivas de madeira. Foram criados por Copehtor como trabalhadores e soldados durante conflitos antigos e, após cumprirem papel fundamental na reconstrução do mundo, acabaram colocados em estase para que conhecimentos perigosos sobre armas divinas se perdessem."
      },
      {
        "title": "Corpo e alma",
        "text": "A origem de suas almas é desconhecida. Seus corpos possuem uma estrutura semelhante a um esqueleto de pedra ou metal, recoberta por órgãos e músculos vegetais. Em vez de sangue, circula uma substância oleosa bombeada por um núcleo. As partes orgânicas conseguem se ajustar instintivamente a aprimoramentos mecânicos, permitindo integrar equipamentos ao próprio corpo."
      },
      {
        "title": "Avanços tecnológicos",
        "text": "Os framebilt têm papel central no avanço tecnológico do Pico Ascendente em High Wave, ajudando a tornar possíveis aeronaves, veículos e outras criações magitecnológicas. Sua longevidade e capacidade de trabalhar sem as limitações normais dos mortais contribuíram para esse progresso."
      },
      {
        "title": "Despertando em um novo mundo",
        "text": "Após despertarem de antigos cofres e câmaras de estase, muitos framebilt iniciam uma nova vida sem memória clara de sua função original. Alguns recuperam habilidades técnicas, outros formam identidades completamente novas. Um pequeno grupo preserva lembranças de ter pertencido aos Bildengard, antigos guardiões treinados para proteger Vanderbilden e operar unidades DGR."
      }
    ],
    "meta": {
      "alignment": "Frequentemente neutros, embora qualquer tendência moral seja possível",
      "languages": "Comum + 1 idioma adicional",
      "speed": "9 m (30 pés)"
    },
    "coreTraits": {
      "body-of-lost-design": "Seu corpo é formado por fibras musculares de madeira entrelaçadas em uma armação de pedra ou metal. Você não precisa comer, beber ou respirar, embora possa consumir alimentos, bebidas e poções por lazer ou para receber seus efeitos. Você não pode dormir nem ser colocado para dormir magicamente. É imune a doenças e tem vantagem em testes de resistência feitos para resistir à condição Envenenado. Durante um Descanso Longo, seu corpo passa por autorreparo: se começar o descanso com mais da metade dos seus Dados de Vida, não precisa dormir, mas deve passar 4 horas descansando conforme as regras normais de repouso e atividade; se começar com menos da metade dos Dados de Vida, deve desligar-se em um estado semelhante ao sono por 4 horas para realizar a recuperação apropriada.",
      "integration": "Você possui uma quantidade de pontos de Integração igual ao seu bônus de proficiência. Em 30 minutos, pode integrar uma peça de equipamento ao corpo ou trocar uma peça integrada por outra; ejetar uma peça integrada leva 1 minuto. Um item portátil ocupa 1 ponto de Integração, ou 2 pontos se possuir as propriedades Duas Mãos ou Pesada. Armadura leve ocupa 1 ponto, armadura média 2 e armadura pesada 3. **Integração de Item Portátil:** uma arma ou escudo integrado pode ser sacado ou guardado sem usar sua interação e você tem vantagem em testes de atributo e resistência para evitar ser desarmado dele. Itens mágicos integrados podem ser preparados para uso sem interação e contam como estando em suas mãos/prontos mesmo se suas mãos estiverem ocupadas. **Integração de Armadura:** armadura integrada conta como uma categoria mais leve para você (pesada como média; média como leve), não impõe desvantagem em testes de Destreza (Furtividade), e qualquer limite sobre quanto do seu modificador de Destreza é adicionado à CA é reduzido em 1."
    },
    "legacyTraits": {
      "accumulated-knowledge": "Você recebe Especialização em uma perícia na qual já possua proficiência.",
      "advanced-integration": "Você possui 2 pontos de Integração adicionais.",
      "extreme-environment-adaptations": "Você tem vantagem em testes de resistência realizados para resistir aos efeitos de ambientes com temperaturas extremamente altas ou baixas.",
      "integration-swiftness": "Se possuir uma arma integrada com a propriedade Leve ou Acuidade, pode optar por gastar 1 ponto adicional de Integração nela. Enquanto fizer isso, quando realizar a ação Atacar, pode realizar um ataque com essa arma como uma ação bônus.",
      "sensorvision": "Você possui Visão às Cegas com alcance em pés igual a 10 × seu bônus de proficiência.",
      "resistance": "Você possui resistência a dano de veneno. Se já possuir resistência a veneno proveniente de outro traço, torna-se imune a dano de veneno em vez disso."
    },
    "mixedBloodTraits": {
      "automation": "Seu corpo foi modificado com tecnologia framebilt. Escolha e receba uma das seguintes características das subraças Framebilt: • Aceleração — requer Integração (FRM02 Leve); • Placas de Armadura (FRM01 Colosso); • Foco a Laser (FRM03 Tentativo); • Modo de Movimento (FRM02 Leve); • Atividade Ótima (FRM03 Tentativo); • Opção de Tamanho (FRM01 Colosso).",
      "framebilt-constitution": "Você tem vantagem em testes de resistência realizados para resistir à condição Envenenado e é imune a doenças não mágicas.",
      "integration": "Você recebe a característica Integração do Framebilt.",
      "regulatory-constitution": "Seu corpo precisa de apenas metade da quantidade normal de comida e água por dia."
    },
    "subraces": {
      "frm01-colossus": {
        "description": "FRM01 Colosso foram construídos como guardiões, soldados e trabalhadores de construção. Seus corpos maiores permitem integrar armamentos pesados com mais eficiência.",
        "traits": {
          "armor-plating": "As placas metálicas espessas do seu corpo concedem proteção adicional. Enquanto não estiver usando armadura, pode calcular sua Classe de Armadura como 13 + seu modificador de Destreza.",
          "heavy-integration": "Se integrar uma arma com a propriedade Duas Mãos, pode empunhá-la com apenas uma mão. Se fizer isso, não pode empunhar outra arma — mesmo uma arma Leve — na outra mão.",
          "size-option": "Seu tamanho é Médio ou Grande. Você não pode ser Pequeno."
        }
      },
      "frm02-lite": {
        "description": "FRM02 Leve possuem armações flexíveis com maior proporção de fibras de madeira, construídas para se adaptar rapidamente a diferentes tarefas e formas de movimento.",
        "traits": {
          "acceleration": "Sempre que concluir um Descanso Longo com pontos de Integração não gastos, você recebe uma quantidade igual de pontos de Aceleração, que permanecem até o próximo Descanso Longo ou até serem gastos. Você pode gastar 1 ponto de Aceleração para fazer uma das seguintes coisas: • no seu turno, aumentar seu deslocamento em 3 metros (10 pés) por 1 minuto; • no seu turno, aumentar em 1,5 metro (5 pés) o deslocamento recebido por Modo de Movimento; • realizar Disparada ou Desengajar como uma ação bônus; • realizar um teste de atributo ou teste de resistência baseado em Destreza com vantagem.",
          "mode-of-movement": "Uma vez por Descanso Longo, como uma ação, você pode reorganizar seus componentes e escolher um dos seguintes tipos de deslocamento, que recebe a 9 metros (30 pés) por 1 minuto: voo, natação, escalada ou aceleração 0-G. Você também pode gastar 2 pontos de Aceleração para usar esta característica novamente antes de concluir um Descanso Longo."
        }
      },
      "frm03-tentative": {
        "description": "FRM03 Tentativo foram construídos para supervisionar projetos, atuar como mecânicos e avaliar eficiência. São bons em organizar outras pessoas e concentrar-se temporariamente além de suas capacidades normais.",
        "traits": {
          "laser-focus": "Você ganha proficiência nas perícias Investigação e Percepção.",
          "optimal-activity": "Escolha duas perícias que normalmente usem Sabedoria, Inteligência ou Carisma, e escolha também um desses três atributos. Quando usar uma dessas perícias em uma situação que normalmente exigiria seu atributo usual, pode substituir o atributo normalmente usado pelo atributo que escolheu.",
          "skill-specialization": "Quando realiza um teste de perícia usando uma perícia na qual possui proficiência, pode rolar 1d4 e adicionar o resultado ao teste. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }
      },
      "frm04-multiband": {
        "description": "FRM04 Multibanda possuem membros adicionais para executar várias tarefas ao mesmo tempo. Podem carregar equipamentos extras, usar os braços para manutenção, escalada e defesa e normalmente mantêm uma armação mais leve para preservar mobilidade.",
        "traits": {
          "multiped": "Você possui um conjunto adicional de braços. Para cada mão extra que esteja livre, pode realizar uma das seguintes funções: • empunhar uma arma adicional de uma mão; se dedicar ambas as mãos extras, pode empunhar uma arma de duas mãos; • empunhar um escudo, embora apenas um escudo possa conceder bônus à sua CA; • segurar uma ferramenta ou item mágico adicional e mantê-lo pronto para uso; • realizar uma interação adicional no seu turno; • obter vantagem em um teste de Atletismo para iniciar ou escapar de um agarrão; • ao realizar um ataque desarmado, adicionar 1d4 ao dano para cada mão extra livre.",
          "points-of-failure": "Quando uma criatura realiza um ataque de arma contra você, pode usar sua reação para subtrair seu modificador de Destreza da jogada de ataque, usando seus vários membros para interferir ou se proteger. Você deve decidir antes de saber se o ataque acertou ou errou. Pode usar esta característica um número de vezes por Descanso Longo igual ao seu bônus de proficiência, mas um uso só é efetivamente gasto quando a redução faz o ataque errar.",
          "spiderhand": "Você pode escalar paredes como se estivesse sob os efeitos de *patas de aranha*. Enquanto faz isso, os membros extras concedidos por Multípede são considerados ocupados e não podem ser usados. Se esses membros não estiverem disponíveis, você não pode usar esta característica."
        }
      }
    }
  }
};
  const byId=new Map((window.GRIMORIO_RACES||[]).map(r=>[r.id,r]));
  const applyTraits=(arr,map)=>{if(!map)return; for(const [id,description] of Object.entries(map)){const t=arr.find(x=>x.id===id);if(t)t.description=description;}};
  for(const [id,p] of Object.entries(P)){
    const r=byId.get(id); if(!r) continue;
    r.textRevision=p.textRevision||'full';
    if(p.lore)r.lore=p.lore;
    if(p.meta)r.meta={...r.meta,...p.meta};
    applyTraits(r.coreTraits,p.coreTraits);
    applyTraits(r.legacyTraits,p.legacyTraits);
    if(p.mixedBloodTraits){applyTraits(r.mixedBloodTraits,p.mixedBloodTraits);}
    if(p.subraces){for(const [sid,sp] of Object.entries(p.subraces)){const s=r.subraces.find(x=>x.id===sid);if(!s)continue;if(sp.description)s.description=sp.description;applyTraits(s.traits,sp.traits);}}
  }
})();
