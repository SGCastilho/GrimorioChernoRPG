'use strict';
// Fase 3 da revisão textual racial — páginas impressas 241–280 de Lyre's Guide to Retia.
(function(){
  const P={
    "gnome":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Gnomos são pequenos humanoides de mente intuitiva e inteligente, conhecidos por invenção, exploração, medicina e mecânica. Têm talento natural para organizar informações, lembrar detalhes e transformar curiosidade em experimentação prática."},
        {title:"Onde for necessário",text:"Podem ser encontrados em praticamente qualquer lugar: sob a crosta do mundo, em montanhas, centros urbanos, governos e estradas de aventura. Muitos partem em busca de mistérios que não cabem em livros, acumulando histórias e descobertas para compartilhar."},
        {title:"Olhos brilhantes e prontos",text:"A cultura gnômica tende a conservar uma centelha de entusiasmo mesmo em indivíduos mais sombrios. Não são necessariamente imprudentes, mas a confiança em sua engenhosidade pode fazê-los subestimar perigos."}
      ],
      meta:{alignment:"Geralmente caóticos e bons; neutralidade também é comum, e vínculos com guildas podem favorecer posturas mais leais",languages:"Comum e Gnômico",speed:"7,5 m (25 pés)"},
      coreTraits:{
        "gift-of-cleverness":"Quando você dispuser de pelo menos 10 minutos para realizar um teste de atributo, perícia ou ferramenta baseado em Inteligência ou Sabedoria e o resultado do d20 for inferior a 10, pode tratar o resultado do d20 como 10.",
        "gnome-cunning":"Você tem vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra efeitos mágicos."
      },
      legacyTraits:{
        "and-quick-too":"Você tem vantagem em testes de resistência de Força, Destreza e Constituição contra efeitos mágicos.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "diminutive-rush":"Você pode atravessar o espaço de criaturas não hostis maiores que você sem qualquer penalidade ao deslocamento e pode atravessar o espaço de criaturas hostis maiores que você tratando esses espaços como terreno difícil.",
        "pocket-glitter":"Quando for alvo de um ataque que possa ver e cuja origem esteja a até 9 metros (30 pés), você pode usar sua reação para produzir uma explosão mágica de luzes e brilho, impondo desvantagem àquele ataque. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "two-weapon-fighting-light":"Quando fizer um ataque usando uma arma com a propriedade Leve, você pode usar uma ação bônus para atacar com outra arma Leve empunhada na outra mão. Esse ataque é feito sem as penalidades normais do combate com duas armas e com vantagem.",
        "up-and-at-em":"Uma vez por Descanso Longo, você pode conjurar *cochilo* (*catnap*) tendo apenas a si mesmo como alvo, sem gastar espaço de magia nem componentes."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Altamente Observador (Gnomo Luminoso); • Falar com Bestas (Gnomo da Floresta); • Engenhoca (Gnomo Estável); • Dom do Disfarce (Svirfneblin); • Colecionador de Perícias (Gnomo da Trilha).",
        "gift-of-cleverness":"Você recebe o traço racial Dom da Esperteza do Gnomo.",
        "gnome-cunning":"Você recebe o traço racial Astúcia Gnômica do Gnomo.",
        "size-option":"Seu tamanho é Pequeno."
      },
      subraces:{
        "bright-gnome":{description:"Gnomos Luminosos são associados às alturas, ao céu e a comunidades construídas em picos, penhascos, torres e níveis elevados do Pico Ascendente. Sua linhagem se adaptou à energia elétrica e a quedas perigosas.",traits:{
          "conduit-charm":"Você possui resistência a dano elétrico. Sempre que sofrer dano elétrico, você tem vantagem na próxima jogada de ataque, teste de atributo ou teste de resistência que realizar dentro do próximo minuto.",
          "graceful-landing":"Quando cair mais de 3 metros (10 pés), você pode usar sua reação para conjurar *queda suave* sem gastar espaço de magia nem componentes, tendo apenas a si mesmo como alvo. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "highly-observant":"Você tem vantagem em testes de perícia feitos para lembrar ou reproduzir escritos, glifos, imagens, projetos, plantas ou outras informações complexas que tenha observado."
        }},
        "forest-gnome":{description:"Gnomos da Floresta são ilusionistas talentosos que preferem resolver conflitos por furtividade e esperteza. Costumam viver afastados de outros povos e guardam seus projetos e conhecimentos com grande sigilo.",traits:{
          "escape-illusion":"Como uma ação bônus, você pode ficar invisível até o início do seu próximo turno, deixando uma ilusão sua no lugar. Qualquer fala sua durante esse período parece sair da ilusão. Uma criatura que tente perceber a falsidade deve ser bem-sucedida em um teste de Investigação com CD 10 + seu modificador de Enganação; a ilusão também desaparece se for atingida ou se sofreria dano. Ela possui CA 10 e usa seu bônus de Enganação no lugar de testes de resistência. Sua invisibilidade termina se você atacar, conjurar uma magia ou obrigar uma criatura a realizar um teste de resistência. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "natural-illusionist":"Você conhece o truque *ilusão menor*. Inteligência é sua habilidade de conjuração para ele.",
          "speak-with-beasts":"Por meio de sons, gestos e vocalizações simples, você consegue transmitir ideias e conceitos básicos a Bestas, permitindo que compreendam sua intenção geral e instruções simples."
        }},
        "steady-gnome":{description:"Gnomos Estáveis são inventores e experimentadores associados a oficinas, guildas e organizações como o Sindicato do Parafuso Manchado. Sua produtividade e engenhosidade ajudaram a definir a identidade industrial de Retia.",traits:{
          "contraption":"Ao gastar 1 hora de trabalho e 10 po em materiais adequados, você pode criar um pequeno dispositivo mecânico (CA 5, 1 ponto de vida). Escolha um efeito que *prestidigitação* poderia produzir: o dispositivo pode reproduzi-lo um número de vezes igual ao seu bônus de proficiência. A critério do Mestre, você também pode criar objetos simples como caixa de música, chave mestra básica, instrumento ou acendedor; tais objetos podem durar até 24 horas antes de quebrar ou, se o Mestre permitir, permanecer de forma permanente.",
          "identification-expert":"Você pode conjurar *identificação* sem componentes e sem gastar espaço de magia um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Também pode conjurar a magia normalmente usando espaços de magia apropriados.",
          "tool-master":"Você ganha proficiência em três Ferramentas de Artesão à sua escolha. Escolha uma dessas ferramentas; quando realizar um teste que a utilize, adicione seu bônus de proficiência uma segunda vez, a menos que já estivesse fazendo isso."
        }},
        "svirfneblin":{description:"Svirfneblin vivem em cidades subterrâneas sob montanhas, ravinas e cânions. Possuem pele semelhante a pedra e olhos que brilham levemente no escuro, mas conseguem alterar a própria aparência por meio de ilusões.",traits:{
          "gift-of-disguise":"Você pode conjurar *disfarçar-se* sobre si mesmo à vontade, sem gastar espaço de magia nem componentes. Inteligência é sua habilidade de conjuração para esta magia.",
          "murky-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra, percebendo cores apenas em tons de cinza. Se já possuir Visão no Escuro de outra fonte, seu alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o valor maior.",
          "shadow-camouflage":"Quando realizar um teste de Furtividade, você pode fazê-lo com vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "trail-gnome":{description:"Gnomos da Trilha vivem em movimento, sempre prontos para a próxima viagem. Gostam de aventura, estrada e descoberta e transformam experiência prática em uma coleção crescente de habilidades.",traits:{
          "adventurer-s-training":"Você possui proficiência com armaduras leves, armas simples e outras três armas à sua escolha.",
          "repairman":"Você conhece o truque *consertar*, usando Inteligência como sua habilidade de conjuração.",
          "skill-collector":"Escolha duas perícias nas quais você não seja proficiente. Quando realizar um teste usando uma dessas perícias, pode adicionar metade do seu bônus de proficiência, arredondado para baixo, desde que já não estivesse adicionando esse benefício. Sempre que ganhar proficiência em uma das perícias escolhidas ou sempre que seu bônus de proficiência aumentar, escolha uma nova perícia elegível para este traço."
        }}
      }
    },

    "goblin":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Goblins são pequenos humanoides de pele verde ou amarela que carregam uma reputação injustamente ligada a banditismo e saque. Embora algumas tribos vivam dessa forma, muitos trabalham normalmente entre os demais povos de Retia e demonstram enorme tenacidade quando decidem cumprir uma tarefa."},
        {title:"Empurrados de um lado para outro",text:"Ao longo da história, grupos mais fortes frequentemente obrigaram goblins a servir como soldados e trabalhadores descartáveis. Essa exploração ajudou a criar a imagem de selvageria que os acompanha, mas também fomentou entre muitos goblins grande respeito por sindicatos, direitos coletivos e proteção dos menores contra os poderosos."},
        {title:"Em todo lugar",text:"Goblins aparecem em quase toda Retia, de vilas pesqueiras e oficinas a mercados, construções e administrações. São sobreviventes notáveis, dispostos a realizar trabalhos variados e a provar seu valor mesmo em condições pouco dignas."
        }
      ],
      meta:{alignment:"Normalmente caóticos; não possuem tendência racial inerente ao mal",languages:"Comum e Goblinoide",speed:"9 m (30 pés)"},
      coreTraits:{
        "hardly-noticed":"Você pode atravessar o espaço de criaturas não hostis maiores que você sem penalidade ao deslocamento e pode atravessar o espaço de criaturas hostis maiores que você tratando esses espaços como terreno difícil.",
        "nimble-escape":"Você pode realizar Desengajar ou Esconder-se como uma ação bônus."
      },
      legacyTraits:{
        "adaptive":"Escolha deslocamento de escalada ou de natação quando adquirir este traço. Você recebe o deslocamento escolhido com valor igual ao seu deslocamento-base.",
        "carry-on":"Como uma ação bônus, você pode saltar sobre uma criatura voluntária maior que você e ser carregado por ela, desde que seu peso não ultrapasse a capacidade de carga da criatura. No seu turno, pode descer gastando 1,5 metro (5 pés) de deslocamento; também pode usar sua reação para saltar dela, terminando em um espaço adjacente.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "fairy-magic":"Escolha um truque e uma magia de 1º nível das listas de Druida ou Feiticeiro. Escolha também Inteligência, Sabedoria ou Carisma como sua habilidade de conjuração para ambas. Você pode conjurar o truque à vontade e a magia de 1º nível um número de vezes por Descanso Longo igual ao seu bônus de proficiência, além de poder conjurá-la usando espaços de magia apropriados.",
        "fury-of-the-small":"Uma vez por turno, quando causar dano a uma criatura maior que você com um ataque ou ataque mágico, você pode causar dano adicional igual ao seu bônus de proficiência. Você pode usar este benefício um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "nervous-watch":"Você não pode ser Surpreendido em combate."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Pequeno Incansável (Goblin das Terras Áridas); • Corrida da Morte (Goblin da Poeira); • Ameaça Maior (Goblin do Bando do Medo); • Eu Entendi! (Goblin das Engrenagens); • Ancestralidade Feérica (Goblin Selvagem).",
        "hardly-noticed":"Você recebe o traço racial Pouco Notado do Goblin.",
        "nimble":"Você recebe o traço racial Escapada Ágil do Goblin."
      },
      subraces:{
        "badland-goblin":{description:"Goblins das Terras Áridas são sobreviventes e saqueadores associados às regiões mais hostis. Muitos bandos fora da lei pertencem a essa linhagem, embora indivíduos civilizados frequentemente combatam essa generalização.",traits:{
          "ambush-tactics":"Quando fizer um ataque contra uma criatura e um aliado seu estiver a até 1,5 metro (5 pés) dela sem estar Incapacitado, você pode rolar 1d8 e adicionar o resultado à jogada de ataque. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência, mas um uso só é gasto se o ataque acertar.",
          "survivor-of-the-wastes":"Você possui proficiência nas perícias Natureza e Sobrevivência.",
          "tireless-little-guy":"Você tem vantagem em testes de resistência feitos para resistir ou evitar Exaustão. Além disso, uma mesma fonte ou efeito não pode fazer você sofrer mais de um nível de Exaustão de uma só vez; aplicações separadas da mesma fonte ainda podem acumular níveis normalmente."
        }},
        "dust-goblin":{description:"Goblins da Poeira vivem em regiões quentes e arenosas, muitas vezes com pele que imita o ambiente ou parece chamuscada. Sabem tirar vantagem de inimigos despreparados para climas hostis.",traits:{
          "countermeasures":"Quando uma criatura fizer um ataque de oportunidade contra você, você pode usar este traço para forçá-la a realizar um teste de resistência de Sabedoria, usando sua Destreza para determinar a CD racial. Em uma falha, o ataque erra, a reação da criatura é gasta e você pode realizar um ataque corpo a corpo contra ela como parte da mesma reação. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "death-run":"No seu primeiro turno de um combate, seu deslocamento é dobrado, você não provoca ataques de oportunidade e o primeiro ataque corpo a corpo que realizar tem vantagem.",
          "heat-resistance":"Você possui resistência a dano de fogo."
        }},
        "fear-flock-goblin":{description:"Goblins do Bando do Medo descendem de uma linhagem criada como infantaria descartável, mas que se rebelou e conquistou a própria liberdade. Possuem resistência extraordinária ao medo e conseguem transformar terror em agressividade.",traits:{
          "bigger-bother":"Seu tamanho é Médio em vez de Pequeno.",
          "defy-terror":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Amedrontado. Um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo, você pode entrar em uma breve fúria: use sua reação ao obter sucesso em um teste de resistência contra Amedrontado, ou uma ação bônus se já estiver Amedrontado, encerrando a condição como se tivesse obtido sucesso. Até o fim do seu próximo turno, você tem vantagem em jogadas de ataque e testes de resistência.",
          "disorienting-call":"Uma vez por Descanso Longo, você pode conjurar *confusão* sem gastar espaço de magia nem componentes, usando Carisma como sua habilidade de conjuração. Quando conjura desta forma, a área deve ser uma esfera de 3 metros (10 pés) centrada em você e o efeito ignora você."
        }},
        "gear-goblin":{description:"Goblins das Engrenagens são inventivos, curiosos e obcecados por entender como as coisas funcionam — ou como fazê-las parar de funcionar. São comuns em oficinas, cidades e forças de engenharia.",traits:{
          "bonus-proficiencies":"Você ganha proficiência em duas perícias adicionais que normalmente usem Inteligência, Sabedoria ou Carisma e em um conjunto de Ferramentas de Artesão à sua escolha.",
          "fix-it-up":"Você conhece o truque *consertar* e usa Inteligência como habilidade de conjuração para ele.",
          "i-get-it":"Quando realizar um teste de atributo usando uma perícia na qual não seja proficiente, você pode rolar 1d6 e adicionar o resultado ao teste. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "wild-goblin":{description:"Goblins Selvagens mantêm uma conexão mais visível com o Reino Feérico. Possuem pele de cores vivas, conseguem desaparecer e reaparecer e têm uma mente incomum, resistente a ilusões e interferência psíquica.",traits:{
          "fairy-step":"Como uma ação bônus, você desaparece e reaparece em um espaço desocupado que possa ver a até 9 metros (30 pés). No fim do seu turno, desaparece novamente e retorna ao espaço de onde partiu. Se esse espaço estiver ocupado, você não retorna e fica Atordoado até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "fey-ancestry":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Enfeitiçado.",
          "wild-mind":"Você possui resistência a dano psíquico e tem vantagem em testes de resistência contra ilusões."
        }}
      }
    },

    "goliath":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Golias são parentes distantes dos gigantes e estão entre os povos mortais que mais lembram a força dessas criaturas lendárias. Costumam ter grande estatura, pele em tons frios ou pétreos, olhos sem íris aparentes e marcas corporais que se desenvolvem com a idade e remetem a ancestrais gigantes."},
        {title:"Golias em Retia",text:"São raros em Retia e muitos descendem de tribos exiladas ou desertores das Terras de Ataque. Costumam formar grupos próprios em regiões selvagens, respeitando governos locais enquanto estes demonstram força suficiente para manter a ordem."},
        {title:"Senhores das Terras de Ataque",text:"A dinastia Caelumfaust governa a Titanarquia, uma potência golias fortificada que resistiu por séculos às forças rivais das Terras de Ataque. A cultura associada a essa linhagem sustenta mitos de sangue titânico e deuses desconhecidos pelos povos de Retia."
        }
      ],
      meta:{alignment:"Leal e neutro ou leal e mau são comuns; raramente puramente bons ou caóticos",languages:"Comum e Gigante",speed:"9 m (30 pés)"},
      coreTraits:{
        "stone-s-endurance":"Quando sofrer dano, você pode usar sua reação para rolar 1d12 + seu modificador de Constituição e reduzir o dano sofrido pelo total obtido. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
      },
      legacyTraits:{
        "grappler":"Você tem vantagem em testes de atributo feitos para Agarrar ou Empurrar outras criaturas.",
        "great-wielder":"Você pode empunhar armas corpo a corpo com as propriedades Pesada ou Duas Mãos como se não tivessem essas propriedades para fins de empunhadura, desde que a arma seja apropriada ao seu tamanho. Ainda precisa usar duas mãos para receber benefícios da propriedade Versátil ou de características que exijam explicitamente uma arma empunhada com duas mãos.",
        "overwhelming":"Quando realizar um teste de Força ou teste de resistência de Força, você pode escolher fazê-lo com vantagem. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "size-option":"Seu tamanho é Médio em vez de Grande, mas sua capacidade de carga e os limites de tamanho para Agarrar ou Empurrar criaturas tratam você como se fosse uma categoria de tamanho maior.",
        "unmovable":"Efeitos originados por criaturas no máximo uma categoria de tamanho maiores que você não podem derrubá-lo nem movê-lo contra sua vontade, a menos que você esteja Incapacitado. Este benefício só se aplica a efeitos que exijam teste de resistência ou ocorram automaticamente após um acerto.",
        "unshakable":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Amedrontado."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Orientação Aural (Auratinn); • Sangue de Titãs (Caelumtinn); • Pele de Pedra (Pruitinn); • Resistência ao Fogo (Pyrotinn); • Bravata Aterrorizante (Terratinn).",
        "size-option":"Seu tamanho é Grande.",
        "stone-s-endurance":"Você recebe o traço racial Resistência da Pedra do Golias."
      },
      subraces:{
        "auratinn":{description:"Auratinn descendem dos gigantes do céu. Sua pele tende a tons brancos ou acinzentados, marcada por padrões escuros, e a própria atmosfera parece responder à sua presença.",traits:{
          "aural-guidance":"Quando realizar ataques com arma à distância no alcance longo da arma, você não sofre desvantagem por estar nesse alcance, mas também não pode obter vantagem nesses ataques por outros motivos.",
          "sonic-swell":"Como uma ação bônus, você pode envolver-se em um redemoinho por 1 minuto. Durante esse período, ataques à distância feitos contra você têm desvantagem. Uma criatura que começar o turno a até 1,5 metro (5 pés) de você ou entrar nessa área pela primeira vez no turno deve realizar um teste de resistência de Força, com Constituição definindo sua CD racial; em uma falha, fica Caída e, se for Grande ou menor, seu deslocamento se torna 0. O efeito termina antes se você o encerrar como ação bônus ou ficar Inconsciente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "thunder-resistance":"Você possui resistência a dano trovejante."
        }},
        "caelumtinn":{description:"Caelumtinn carregam o nome dos Caelumfaust da Titanarquia e são associados a gigantes da tempestade. Sua tradição fala em 'sangue de titãs', e eles canalizam raios e tempestades quando sua força desperta.",traits:{
          "blood-of-titans":"Sempre que obtiver 1 em um d20, você pode rolar outro d20 e usar o novo resultado; se o novo resultado também for 1, ele não é rolado novamente. Além disso, quando obtiver 20 em uma jogada de ataque, causa 2d8 de dano elétrico adicional além do dano normal do ataque.",
          "storm-lord-s-might":"Como uma ação bônus, você pode invocar a força das tempestades por 1 minuto. Enquanto estiver nesse estado, você é imune a dano elétrico, o primeiro ataque que acertar em cada turno causa dano elétrico adicional igual ao seu nível total e você não pode ficar Amedrontado ou Paralisado. O estado termina se você o encerrar como ação bônus ou se for reduzido a 0 pontos de vida; nesse último caso, você fica com 1 ponto de vida em vez disso e o efeito termina. Se terminar dessa forma, não pode usar esta característica novamente por 1 minuto. Você pode ativá-la um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "storm-resistance":"Você possui resistência a dano elétrico."
        }},
        "pruitinn":{description:"Pruitinn descendem de gigantes de pedra e possuem pele rochosa particularmente resistente. Costumam viver em regiões montanhosas e suportam frio e impactos com facilidade.",traits:{
          "blunt-force":"Quando acertar uma criatura com uma arma que cause dano contundente, você pode usar uma ação bônus para liberar uma onda de força. O alvo deve realizar um teste de resistência de Força, usando Força para determinar sua CD racial. Em uma falha, é empurrado 3 metros (10 pés) e fica Caído.",
          "cold-resistance":"Você possui resistência a dano de frio.",
          "stone-hide":"Enquanto não estiver usando armadura, pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Constituição. Enquanto usar essa forma de calcular CA, sempre que usar Resistência da Pedra, reduza o dano adicionalmente em um valor igual ao seu nível total."
        }},
        "pyrotinn":{description:"Pyrotinn descendem de gigantes do fogo e prosperam em regiões vulcânicas. Suas marcas corporais costumam ser vermelhas ou amarelas e o sangue gigante pode se inflamar em momentos de extremo perigo.",traits:{
          "dauntless-ignition":"Quando for reduzido a 0 pontos de vida, role 1d100. Se o resultado for igual ou inferior ao seu nível + 20, você permanece com 1 ponto de vida e recebe pontos de vida temporários iguais a 1d12 × seu bônus de proficiência. A cada vez que este traço impedir que você caia a 0 pontos de vida durante o mesmo Descanso Longo, aumente em 5 o resultado do 1d100 antes de compará-lo ao limite.",
          "fire-resistance":"Você possui resistência a dano de fogo.",
          "giant-s-burning-rage":"Como uma ação bônus, você pode despertar a magia ígnea do sangue gigante por 1 minuto. Enquanto estiver nesse estado, você é imune a dano de fogo e o primeiro ataque com arma que acertar em cada turno causa dano de fogo adicional igual ao seu nível total. O efeito termina se você o encerrar como ação bônus ou ficar Inconsciente. Enquanto estiver ativo, quando uma criatura a até 1,5 metro (5 pés) acertar você com um ataque de arma, você pode usar sua reação, depois da resolução do ataque, para realizar um ataque de arma contra ela. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "terratinn":{description:"Terratinn descendem de gigantes das colinas e são ligados a campos, criação de animais e territórios cultiváveis. Muitos são guerreiros itinerantes que reivindicam e protegem terras para seus grupos.",traits:{
          "giant-s-resilience":"Seu máximo de pontos de vida aumenta em 1 e aumenta em mais 1 sempre que você ganha um nível após o 1º.",
          "landrover":"Você possui proficiência nas perícias Natureza e Sobrevivência.",
          "terrifying-boast":"Quando obtiver um acerto crítico em uma jogada de ataque, você pode soltar um grito de batalha e escolher quaisquer criaturas a até 4,5 metros (15 pés). Cada alvo deve realizar um teste de resistência de Sabedoria, usando Carisma para determinar sua CD racial. Em uma falha, fica Amedrontado por você durante 1 minuto e repete o teste no fim de cada um dos próprios turnos, encerrando o efeito em um sucesso. Uma criatura que obtiver sucesso em qualquer desses testes fica imune à sua Bravata Aterrorizante por 24 horas."
        }}
      }
    },
    "hadislin":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Hádislin, também chamados de Vicebound, são humanoides marcados por uma influência infernal. Chifres, garras, olhos predatórios, asas, caudas e outras deformações variam muito entre indivíduos, porque sua forma depende da maldição, pacto ou energia planar que os transformou."},
        {title:"Sangue amaldiçoado",text:"A origem hádislin está ligada a diabos, não a demônios. A marca pode nascer de um contrato, de uma maldição ancestral, de um crime contra forças celestiais ou de exposição planar antes do nascimento. A alteração se torna parte profunda do ser e normalmente não pode ser removida por efeitos inferiores a desejo ou intervenção divina."},
        {title:"Hádislin em Retia e nos Infernos",text:"Em Retia, a aparência infernal costuma ser tratada como mau presságio, embora aventureiros hádislin sejam paradoxalmente vistos como úteis em expedições perigosas. Alguns que não encontram lugar no mundo mortal buscam os Infernos, onde podem viver entre outros Vicebound ou servir a diabos maiores."},
        {title:"Hádislin Cristalinos",text:"Hádislin Cristalinos são muito mais raros e combinam a marca infernal com uma segunda influência planar. Seus chifres, garras e outras partes do corpo apresentam minerais ligados ao plano secundário, e sua sensibilidade à radiação eidomântica faz com que sejam vistos como milagres, escolhidos ou seres próximos de exarcas."
        }
      ],
      meta:{alignment:"Com frequência maus ou neutros e mais inclinados à ordem por sua origem diabólica; qualquer alinhamento ainda é possível",languages:"Comum e Infernal; pode conhecer também o idioma de um dos pais",speed:"9 m (30 pés)"},
      coreTraits:{
        "cursed-legacy":"Você conhece o truque *taumaturgia*. No 3º nível, este traço permite conjurar uma magia de 1º nível determinada por sua subraça; no 5º nível, você recebe também a magia de 3º nível indicada por essa mesma subraça. As magias são conjuradas em um nível de espaço igual ao seu bônus de proficiência, sem gastar espaços de magia nem componentes materiais. Você possui um número de usos deste traço por Descanso Longo igual ao seu bônus de proficiência: a magia recebida no 3º nível consome 1 uso e a magia recebida no 5º nível consome 2 usos. Carisma é sua habilidade de conjuração. A ficha da subraça selecionada mostra quais são as duas magias correspondentes.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra, percebendo cores apenas em tons de cinza.",
        "devilish-resistance":"Escolha fogo ou psíquico quando adquirir este traço. Você possui resistência ao tipo de dano escolhido."
      },
      legacyTraits:{
        "claws":"Suas mãos terminam em garras ou unhas afiadas. Seus ataques desarmados causam 1d6 + seu modificador de Força ou, se possuir uma habilidade de conjuração, + o modificador dessa habilidade. Você pode usar Força ou sua habilidade de conjuração para a jogada de ataque, e seus ataques desarmados contam como armas Leves. O dado de dano aumenta para 1d8 no 8º nível e para 1d10 no 13º nível.",
        "devilsight":"Você possui Visão Diabólica com alcance em pés igual a 10 × seu bônus de proficiência, permitindo enxergar normalmente em escuridão mágica e não mágica dentro desse alcance.",
        "enraged-smite":"Uma vez por turno, quando acertar uma criatura com um ataque de arma, você pode causar 1d6 de dano adicional de um tipo ao qual possua resistência ou imunidade. Pode fazer isso um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
        "devilish-resistance-extra":"Escolha fogo ou psíquico quando adquirir este traço. Você possui resistência ao tipo de dano escolhido; esta escolha pode fornecer uma segunda resistência além daquela recebida pelo traço racial Resistência Diabólica.",
        "fiendish-magic":"Escolha um truque e uma magia de 1º nível das listas de Feiticeiro ou Bruxo. Escolha também Sabedoria, Carisma ou Inteligência como habilidade de conjuração. Você pode conjurar o truque à vontade e a magia de 1º nível um número de vezes por Descanso Longo igual ao seu bônus de proficiência, além de poder conjurá-la usando espaços de magia apropriados.",
        "infernal-wings":"Você possui asas que concedem deslocamento de voo laborioso igual ao seu deslocamento-base. Você não pode decolar do chão a menos que exista ao menos um espaço desocupado adjacente a você no mesmo plano horizontal. Se ficar Caído enquanto estiver voando, pode usar sua reação para se recompor imediatamente."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços de uma subraça Hádislin comum: • Respiração Resistente (Quebrado); • Adepto da Morte (Acorrentado); • Equilíbrio Excepcional (Corroído); • Sifão de Decomposição (Cosmoth); • Caminhante do Gelo (Entrópico); • Cauda (Forgelith); • Manifestar Fogo Infernal (Chamuscado); • Compreensão Profunda (Lei do Vazio); • Resistência ao Frio (Caminhante de Paredes). Se também possuir Legado Amaldiçoado, ambos devem usar a mesma subraça. Traços de Hádislin Cristalinos não podem ser escolhidos por esta opção.",
        "cursed-legacy":"Você recebe o traço racial Legado Amaldiçoado do Hádislin. Ao recebê-lo, escolha uma subraça Hádislin para determinar suas magias; quaisquer outras características suas que dependam de uma subraça Hádislin devem usar essa mesma escolha.",
        "darkvision":"Você recebe o traço racial Visão no Escuro do Hádislin. Se Hádislin for sua raça secundária, seu tipo de criatura também conta como Ínfero (Diabo), além dos demais tipos que possuir."
      },
      subraces:{
        "broken":{description:"Quebrados são os Hádislin mais comuns no Plano Material, ligados aos Ermos Quebrados. Têm pele com aspecto de cinza ou fuligem e cabelos secos, muitas vezes semelhantes a uma juba.",traits:{
          "ashen-limits":"Quando estiver sofrendo Exaustão, você sofre os efeitos correspondentes à metade do seu nível atual de Exaustão, arredondado para baixo. Ao alcançar seis níveis de Exaustão, você morre normalmente, independentemente deste traço.",
          "harsh-breather":"Você consegue prender a respiração pelo dobro do tempo normal e tem vantagem em testes de resistência contra efeitos transportados pelo ar, gases ou qualquer efeito que precise ser inalado."
        }},
        "chained":{description:"Acorrentados possuem marcas semelhantes a correntes queimadas sobre a pele esverdeada ou negra. Sua origem em uma região infernal ácida os tornou adaptados a corrosão e a situações próximas da morte.",traits:{
          "acid-resistance":"Você possui resistência a dano de ácido.",
          "death-adept":"Você tem vantagem em testes de resistência contra a morte."
        }},
        "corroded":{description:"Corroídos vêm de um domínio de constante quebra e reconstrução. Sua pele costuma apresentar partículas metálicas e tons enferrujados, e eles conseguem refazer a própria posição deixando uma réplica para receber um golpe.",traits:{
          "shatter-jaunt":"Quando for sofrer dano, você pode usar sua reação para se teleportar magicamente para um espaço desocupado que possa ver a até 4,5 metros (15 pés), deixando uma réplica metálica grosseira no lugar para absorver o dano e se estilhaçar. Se o dano vier de uma área, o teletransporte só evita o dano se tirar você da área afetada. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "superb-balance":"Você tem vantagem em testes de atributo e testes de resistência feitos para evitar ficar Caído."
        }},
        "cosmoth":{description:"Cosmoth são ligados às energias do Cemitério Cósmico e à decadência. Pele verde ou púrpura e uma umidade incomum evocam a putrefação do plano de onde extraem seu poder.",traits:{
          "decaying-siphon":"Quando conjurar uma magia ou causar dano com um ataque de arma, você pode usar este traço para converter todo o dano causado em dano necrótico em vez dos tipos normais. Se a fonte for um ataque realizado como parte da ação Atacar, a conversão pode se aplicar a todos os ataques dessa mesma ação. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "graveyard-resilience":"Você possui resistência a dano de veneno e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado."
        }},
        "entropic":{description:"Entrópicos canalizam frio e drenam calor do ambiente. Podem apresentar pelagem adaptada a climas polares, chifres semelhantes a gelo e pegadas que congelam a superfície sob seus pés.",traits:{
          "cold-resistance":"Você possui resistência a dano de frio.",
          "icewalker":"Você pode ativar este traço como uma reação para andar sobre a superfície de líquidos não mágicos como se estivesse sob os efeitos de *caminhar na água*, congelando a superfície sob os pés. Pode encerrar esse efeito a qualquer momento. Você também atravessa gelo e neve sem penalidade de deslocamento, mesmo quando seriam terreno difícil, e escala superfícies ou penhascos congelados sem penalidade."
        }},
        "forgelith":{description:"Forgelith carregam a memória espiritual das Forjas Tormentosas: paredes de ferro, rios de fogo e matéria mineral. Costumam ter chifres de textura metálica e caudas mais frequentes que outros Hádislin.",traits:{
          "sleepless-edge":"Você precisa de apenas 4 horas de sono para receber os benefícios de um Descanso Longo. Além disso, pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já permita isso, independentemente de possuir proficiência ou Especialização em Percepção.",
          "tail":"Sua cauda consegue realizar pequenas tarefas. A cada rodada, ela concede uma interação adicional ou uma ação Usar um Objeto adicional. Desde que o objeto seja de mão, você pode usar essa interação no lugar de uma ação bônus exigida por um item mágico. Se estiver Agarrado, pode usar essa interação para obter vantagem em testes feitos para escapar."
        }},
        "scorched":{description:"Chamuscados extraem poder do círculo infernal onde contratos são reforçados e do poço de fogo infernal. Veias, olhos, pele e chifres frequentemente parecem carvão ou madeira queimada quando sua energia desperta.",traits:{
          "dark-command":"Como uma ação, você pode declarar um contrato verbal contra uma criatura a até 9 metros (30 pés) que possa vê-lo ou ouvi-lo. Escolha Jogadas de Ataque, Testes de Atributo ou Testes de Resistência. O alvo deve realizar um teste de resistência de Carisma usando Carisma para determinar sua CD racial; em uma falha, tem desvantagem no tipo de rolagem escolhido até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "manifest-hellfire":"Quando obtiver um acerto crítico com um ataque de arma ou ataque mágico, o ataque causa dano de fogo adicional igual a 1d6 × seu bônus de proficiência."
        }},
        "void-law":{description:"Hádislin da Lei do Vazio são associados ao círculo infernal mais profundo e a contratos especialmente rígidos. Sua pele pode ser negra ou branca e seus chifres tendem a formas ornamentais, acompanhados de uma presença inquietantemente refinada.",traits:{
          "charming-words":"Quando realizar um teste ou teste de resistência baseado em Carisma, você pode rolar 1d6 e adicionar o resultado à jogada. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "deep-understanding":"Você possui proficiência nas perícias Intuição e Persuasão."
        }},
        "wallwalker":{description:"Caminhantes de Paredes têm corpo naturalmente frio, tons azulados e chifres que acumulam gelo. Como o gelo da Muralha Morta, possuem uma defesa especial contra magia conectada à Teia Eidomântica.",traits:{
          "cold-resistance":"Você possui resistência a dano de frio.",
          "deadwall-shield":"Quando for alvo de uma magia que exija uma jogada de ataque ou um teste de resistência, você pode usar sua reação. Se a magia usar jogadas de ataque, todas as jogadas de ataque dela contra você naquele turno têm desvantagem; se exigir teste de resistência, você tem vantagem no primeiro teste de resistência realizado contra ela. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "celestine":{description:"Celestine são Hádislin Cristalinos tocados por Elysium. A influência celestial suaviza a maldição infernal, produzindo pele azul ou branca, penas e chifres que lembram halos ou coroas minerais.",traits:{
          "angel-of-tyranny":"Como uma ação bônus, você manifesta asas angelicais negras envoltas em energia radiante por 1 minuto. Durante o efeito: uma vez por turno, quando causar dano a uma criatura, pode causar dano radiante adicional igual à metade do seu nível; recebe deslocamento de voo igual ao deslocamento de caminhada; três vezes por transformação, pode usar uma ação bônus para atingir uma criatura a até 9 metros (30 pés) com luz ofuscante, obrigando-a a realizar teste de resistência de Constituição usando Carisma para sua CD racial — em uma falha, ela fica Cega até o fim do próximo turno; e suas asas emitem luz plena em 9 metros e penumbra por mais 9 metros, podendo apagar ou reacender essa luz como ação bônus. Você pode usar esta transformação um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "beauty-in-all-things":"Quando realizar um teste ou teste de resistência de Carisma que não esteja adicionando seu bônus de proficiência, você pode adicionar metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "chlorite":{description:"Chlorite são Hádislin Cristalinos influenciados pelo Plano Elemental da Terra. Sua pele tende a tons marrons ou verdes, olhos podem parecer animalescos e os chifres frequentemente lembram madeira ou minerais naturais.",traits:{
          "earthen-step":"Você atravessa terreno difícil causado por terra e pedra irregulares sem penalidade. Também possui resistência a dano de veneno e vantagem em testes de resistência feitos para resistir à condição Envenenado.",
          "wild-avatar":"Como uma ação bônus, você faz o corpo adquirir aspecto de casca de árvore e libera um gás tóxico ao redor por 1 minuto. Durante o efeito: qualquer outra criatura que entrar a até 1,5 metro (5 pés) de você no turno dela ou começar o turno nessa área realiza um teste de resistência de Constituição usando Constituição para sua CD racial, sofrendo 1d6 de dano de veneno em uma falha ou metade em um sucesso; criaturas que não respiram são imunes a esse dano. O dano aumenta para 2d6 no 9º nível e 3d6 no 15º. A primeira criatura que você acertar em cada turno também realiza o mesmo teste e, em uma falha, fica Envenenada por 1 minuto, repetindo o teste no fim de cada turno para encerrar a condição. Você também pode se mover por superfícies verticais e invertidas como sob os efeitos de *patas de aranha*. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "howlite":{description:"Howlite são Hádislin Cristalinos tocados pelo Plano de Energia Positiva. Possuem pele branca ou marmorizada, chifres robustos e uma reserva natural de energia curativa e radiante.",traits:{
          "blinding-radiance":"Como uma ação bônus, você assume por 1 minuto uma forma saturada de energia positiva. Durante o efeito: qualquer criatura que possa vê-lo no início do turno deve desviar o olhar até o início do próximo turno ou realizar um teste de resistência de Constituição usando Carisma para sua CD racial; em uma falha, fica Atordoada até o início do próximo turno. Quem desvia o olhar é tratado como Cego em relação a você. Você emite luz plena em 15 metros (50 pés) e penumbra por mais 15 metros; percebe a localização de criaturas invisíveis na área de luz plena como se possuísse Visão às Cegas; e torna-se imune a dano necrótico. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "healing-touch":"Como uma ação, toque uma criatura para restaurar pontos de vida iguais à metade do seu nível, arredondado para cima, + seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "jasper":{description:"Jasper são Hádislin Cristalinos imbuídos por vento e relâmpagos. Seus corpos são leves, rápidos e costumam apresentar tons azulados, rosados ou amarelos.",traits:{
          "billow":"Você controla rajadas de vento para empurrar alvos a distância. Pode tentar Empurrar uma criatura a até 9 metros (30 pés), usando os mesmos testes de uma tentativa normal de Empurrar; se optar por deslocá-la, pode empurrá-la em qualquer direção a partir do espaço que ocupa. Você também pode arremessar pequenos objetos até 9 metros na direção que desejar. Se uma criatura Pequena perder o teste resistido por 5 ou mais, pode ser empurrada até 4,5 metros (15 pés); se for Minúscula, até 9 metros (30 pés).",
          "lightning-fast":"Você possui resistência a dano elétrico e pode realizar a ação Disparada como uma ação bônus.",
          "skyborn":"Como uma ação bônus, você envolve o corpo em vento e eletricidade por 1 minuto. Durante esse período, recebe deslocamento de voo (pairar) igual ao seu deslocamento-base; seus ataques com arma que acertarem causam dano elétrico adicional igual à metade do seu nível total, arredondado para cima; e, enquanto tiver pontos de vida temporários, quando uma criatura a até 9 metros (30 pés) acertar você, pode usar sua reação para converter qualquer quantidade desses PV temporários em eletricidade. O atacante realiza um teste de resistência de Destreza usando Carisma para sua CD racial e sofre dano elétrico igual aos PV temporários gastos + metade do seu nível, arredondado para cima, ou metade em um sucesso. Se esse dano matar ou deixar a criatura Inconsciente, o ataque que a ativou erra você. Você pode usar esta transformação um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "jetstone":{description:"Jetstone são Hádislin Cristalinos ligados ao Reino das Sombras ou a domínios de pavor. Sua pele parece absorver a luz e sua presença se confunde com a própria escuridão.",traits:{
          "echoes-of-dread":"Como uma ação bônus, você anima sombras ao redor do corpo por 1 minuto. Durante o efeito, é tratado como se estivesse sob *nublar*; pode usar uma ação bônus para se teleportar para um espaço desocupado a até 18 metros (60 pés) que não esteja sob luz plena; e recebe Visão Diabólica a 36 metros (120 pés), enxergando normalmente em escuridão mágica e não mágica. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "shadowmind":"Quando usar Esconder-se em sombras, durante a noite ou em situação na qual a escuridão seja sua principal cobertura, você pode adicionar seu bônus de proficiência ao teste de Destreza (Furtividade), a menos que já o estivesse adicionando uma segunda vez, como por Especialização. Além disso, uma vez por turno, quando atacar enquanto estiver escondido, você não revela automaticamente sua posição: pode realizar um teste de Furtividade contra a Percepção passiva do alvo e permanece escondido se vencer."
        }},
        "kyanite":{description:"Kyanite são Hádislin Cristalinos ligados ao Plano Elemental da Água. Tons azuis, gelo sobre a pele e chifres translúcidos refletem sua natureza fria e controlada.",traits:{
          "crystal-clarity":"Antes de realizar um teste de atributo ou teste de resistência, você pode decidir usar este traço, rolar 1d6 e adicionar o resultado à jogada. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "heart-of-ice":"Como uma ação bônus, você recobre o corpo com uma camada de gelo por 1 minuto. Durante o efeito: seu deslocamento aumenta em 4,5 metros (15 pés) e terreno difícil não reduz seu movimento; quando for atingido por um ataque de arma, pode usar sua reação para reduzir o dano em um valor igual ao seu nível, ou anular completamente o dano se ele for de frio; enquanto estiver se beneficiando da ação Esquivar, recebe bônus na CA igual ao seu bônus de proficiência; e possui resistência a dano de frio. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "obsidian":{description:"Obsidiana são Hádislin Cristalinos deformados pela Energia Negativa. Costumam ter pele cinzenta ou desbotada e aparência precoce de envelhecimento, como se parte da vida tivesse sido drenada.",traits:{
          "inverse-rejuvenation":"Quando uma criatura a até 18 metros (60 pés) fosse recuperar pontos de vida magicamente, você pode usar sua reação para inverter essa energia: em vez de recuperar PV, ela sofre dano necrótico igual à metade do valor que recuperaria, arredondado para baixo; esse dano não pode reduzi-la abaixo de 1 PV. Da mesma forma, quando uma criatura a até 18 metros fosse sofrer dano necrótico, você pode usar sua reação para fazer com que ela receba pontos de vida temporários iguais à metade do dano que sofreria, arredondado para baixo, em vez de sofrer o dano. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "shroud-of-emptiness":"Como uma ação bônus, você envolve o corpo em energia negativa por 1 minuto. Durante esse período, você não é considerado como possuindo tipo de criatura nem alinhamento, fazendo falhar efeitos que tentem escolhê-lo com base nesses aspectos; magias de adivinhação que procurem você tratam o conjurador como se jamais tivesse conhecido ou ouvido falar de você; você não provoca ataques de oportunidade; e, quando for atingido por um ataque de arma, pode usar sua reação para forçar o atacante a realizar um teste de resistência de Sabedoria usando Carisma para sua CD racial. Em uma falha, ele esquece momentaneamente sua existência e o ataque erra; após obter sucesso, fica imune a essa parte do traço até o início do próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "pyrite":{description:"Pyrite são Hádislin Cristalinos alinhados a Mechanus. Pele cinza ou prateada, linhas geométricas e chifres semelhantes a placas de pirita acompanham uma disposição para ordem e regularidade.",traits:{
          "chronal-ordreplex":"Como uma ação, você manifesta uma zona pessoal de ordem por 1 minuto, cobrindo o corpo com aparência metálica. Durante o efeito: no início de cada turno, role 1d20 e registre o resultado; até o início do seu próximo turno, pode substituir uma de suas jogadas de d20 por esse valor; uma vez por uso, quando falhar em um teste de resistência de Inteligência, Sabedoria ou Carisma, pode obter sucesso em vez disso; sua CA aumenta em metade do seu bônus de proficiência, arredondado para baixo; e você recebe Visão às Cegas a 9 metros (30 pés). Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "unfaltering":"Enquanto estiver Amedrontado, você ainda pode se aproximar da fonte do medo, mas cada 1,5 metro (5 pés) percorrido na direção dela custa 3 metros (10 pés) de deslocamento. Se um efeito que o deixa Amedrontado também tentar forçá-lo a se mover contra sua vontade, você pode escolher não realizar esse movimento naquele turno."
        }},
        "sodalite":{description:"Sodalite são Hádislin Cristalinos influenciados pelos ventos de Pandemônio. Seus chifres e unhas lembram sodalita desgastada e a mente é treinada pelos gritos constantes desse plano.",traits:{
          "blindsight":"Você possui Visão às Cegas com alcance em pés igual a 10 × seu bônus de proficiência.",
          "screams-of-pandemonium":"Como uma ação bônus, você envolve-se por 1 minuto nos ventos e gritos de Pandemônio, criando uma esfera de 3 metros (10 pés) de raio centrada em você. Durante o efeito: outras criaturas tratam a área como terreno difícil; você possui meia cobertura contra ataques à distância vindos de fora da esfera; criaturas diferentes de você que começam o turno na esfera sofrem dano trovejante igual à metade do seu nível, arredondado para baixo; criaturas na esfera não podem fornecer componentes verbais de magias; e a gravidade ao seu redor aponta para a superfície mais próxima, permitindo caminhar por paredes e tetos como chão sólido. Seus saltos em altura e distância são dobrados e, ao cair mais de 6 metros (20 pés), você é tratado como sob *queda suave*. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "spinel":{description:"Spinel são Hádislin Cristalinos ligados ao Plano Elemental do Fogo. Possuem placas ou veios de latão no corpo que aquecem quando se enfurecem, acompanhados de pele vermelha ou bronzeada.",traits:{
          "lord-of-brass":"Como uma ação bônus, você faz os depósitos de latão do corpo ficarem incandescentes e cria asas de fogo por 1 minuto. Durante o efeito: recebe deslocamento de voo igual ao de caminhada; ataques corpo a corpo feitos contra você por criaturas a até 1,5 metro (5 pés) têm desvantagem; criaturas que entram a até 1,5 metro no próprio turno ou começam o turno ali realizam um teste de resistência de Destreza usando Constituição para sua CD racial, sofrendo 1d6 de dano de fogo em uma falha ou metade em um sucesso — esse dano aumenta para 2d6 no 9º nível e 3d6 no 15º; e seus ataques corpo a corpo com arma causam dano de fogo adicional igual à metade do seu nível total, arredondado para baixo. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "shroud-of-warmth":"Quando você ou uma criatura a até 3 metros (10 pés) for alvo de um efeito que cause dano de frio, você pode usar sua reação para envolver a área em calor protetor. Você e todas as criaturas dentro desse alcance sofrem metade do dano de frio causado por aquele efeito."
        }}
      }
    },
    "halfling":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Halflings são pequenos povos de espírito alegre, conhecidos por valorizar lar, amizade, comida e celebrações. Para eles, 'lar' pode ser uma casa no campo, uma taverna querida ou até a estrada percorrida ao lado de companheiros de aventura."},
        {title:"Longe, mas nunca distantes",text:"Costumam construir moradias em locais afastados, não por isolamento, mas porque gostam de espaço para jardins, decoração e hospitalidade. Mesmo vivendo longe, mantêm forte presença social nas comunidades vizinhas e um convite espontâneo para sua casa costuma ser sinal de confiança sincera."},
        {title:"Injustiça na adversidade",text:"Durante períodos de leis discriminatórias em Retia, halflings estiveram entre os opositores mais persistentes. Embora poucas coisas os enfureçam, violência e perseguição contra inocentes despertam uma reação muito mais feroz do que sua aparência tranquila sugere."},
        {title:"Hoodlinoonderr",text:"Hoodlinoonderr é uma cidade florestal de Sermonway governada por halflings e conhecida como retiro alegre, repleto de museus, teatro subterrâneo, restaurantes, fontes termais e festas. Muitos halflings fazem questão de visitá-la ao menos uma vez por década."
        }
      ],
      meta:{alignment:"Tendem fortemente a Leal e Bom",languages:"Comum e Halfling",speed:"7,5 m (25 pés)"},
      coreTraits:{
        "halfling-nimbleness":"Você pode atravessar o espaço de qualquer criatura maior que você sem sofrer penalidade ao deslocamento.",
        "luck-and-favor":"Quando obtiver 1 em uma jogada de ataque, teste de atributo ou teste de resistência, você pode rolar o dado novamente e deve usar o novo resultado. Se essa nova jogada transformar a falha em sucesso, você recebe 1 ponto de Favor. Você pode possuir uma quantidade de Favor igual ao seu bônus de proficiência. Antes de uma jogada de ataque, teste de atributo ou teste de resistência, pode gastar 1 ponto de Favor para realizar a jogada com vantagem. Você perde todo o Favor ao concluir um Descanso Longo."
      },
      legacyTraits:{
        "brave":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Amedrontado.",
        "easily-obscured":"Você pode realizar a ação Esconder-se sempre que estiver ao menos parcialmente obscurecido, mesmo que outras criaturas ainda consigam vê-lo.",
        "good-hearted-frenzy":"Quando um aliado a até 9 metros (30 pés) for reduzido a 0 pontos de vida ou morto e você puder ver ou ouvir a fonte que causou isso, pode entrar em Frenesi de Bom Coração até o fim do seu próximo turno. Durante o frenesi, seu deslocamento aumenta em 4,5 metros (15 pés), você tem vantagem em jogadas de ataque e testes de atributo e não provoca ataques de oportunidade. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando um frenesi fosse terminar, pode gastar outro uso para prolongá-lo até o fim do próximo turno, a menos que o aliado que o desencadeou tenha recuperado ao menos 1 ponto de vida.",
        "quickheal":"Como uma ação bônus, você libera magia natural do corpo e recupera pontos de vida iguais a 1d6 × seu bônus de proficiência. Você pode usar este traço uma vez por Descanso Curto ou Longo.",
        "skilled":"Você ganha proficiência em duas perícias à sua escolha.",
        "tremorsense":"Você possui Sentido Sísmico com alcance em pés igual a 10 × seu bônus de proficiência."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Passo Leve (Halfling Pés-Leves); • Proficiências Bônus (Halfling Fantasma); • Incontível (Halfling da Madeira de Pedra); • Resiliência Robusta (Halfling Robusto); • Proficiências Bônus (Halfling do Lar Aconchegante).",
        "halfling-nimbleness":"Você recebe o traço racial Agilidade Halfling.",
        "luck-and-favor":"Você recebe o traço racial Sorte e Favor."
      },
      subraces:{
        "lightfoot-halfling":{description:"Halflings Pés-Leves são furtivos, precisos e extremamente leves nos movimentos. Seus reflexos ajudam a manter o equilíbrio e a escapar de problemas antes que a situação piore.",traits:{
          "light-step":"Você tem vantagem em testes de Furtividade que dependam de se mover silenciosamente.",
          "lucky-landing":"Quando falhar em um teste de Destreza ou teste de resistência de Destreza, você pode usar sua reação para rolar 1d6 e adicionar o resultado, possivelmente transformando a falha em sucesso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "phantom-halfling":{description:"Halflings Fantasma recebem esse nome por desaparecerem e reaparecerem de modo inesperado. Sua magia de invisibilidade é empregada principalmente para fugir de perigos que não conseguem enfrentar diretamente.",traits:{
          "bonus-proficiencies":"Você possui proficiência nas perícias Investigação e Furtividade.",
          "invisible-art":"Como uma ação bônus, você pode conjurar *invisibilidade* sem gastar espaço de magia nem componentes. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Se gastar quatro usos de uma vez, pode conjurar *invisibilidade maior* em vez disso."
        }},
        "stonewood-halfling":{description:"Halflings da Madeira de Pedra descendem de uma comunidade exposta durante gerações a uma ruptura entre planos nas Stonewoods de High Wave. A energia sombria alterou seu sangue, deixando-os parcialmente tocados por sombras.",traits:{
          "shadow-form":"Como uma ação bônus, você assume uma forma sombria e quase fantasmagórica até o fim do seu próximo turno. Enquanto estiver nessa forma, possui resistência a dano contundente, perfurante e cortante. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "uncontainable":"Você é imune à condição Paralisado e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Atordoado."
        }},
        "stout-halfling":{description:"Halflings Robustos são resistentes a toxinas e fisicamente mais rápidos que a maioria dos halflings. Essa linhagem é especialmente comum em Sermonway.",traits:{
          "quickened-pace":"Seu deslocamento-base de caminhada aumenta em 3 metros (10 pés).",
          "stout-resilience":"Você possui resistência a dano de veneno e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado."
        }},
        "warmhearth-halfling":{description:"Halflings do Lar Aconchegante correspondem ao arquétipo clássico de comunidades rurais, casas parcialmente enterradas, artesanato e hospitalidade. São conhecidos por acolher pessoas e criar ambientes confortáveis.",traits:{
          "bonus-proficiencies":"Você possui proficiência nas perícias Adestrar Animais e Persuasão.",
          "lifestyle-spells":"Você conhece os truques *criar fogueira* e *luz*. Além disso, pode conjurar *bom fruto* sem gastar espaço de magia nem componentes um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }}
      }
    },

    "hanyou":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Hanyou, ou meio-yokai, são seres planetouched nascidos de influência yokai. Essa origem pode vir de possessão, pactos, maldições geracionais ou descendência direta de um daiyokai. O resultado mistura a linhagem mortal com características sobrenaturais."},
        {title:"Fisicamente distintos",text:"A aparência combina traços do progenitor mortal com deformações ou qualidades yokai. Garras, presas, asas, caudas, rostos bestiais e proporções incomuns são frequentes. Descendentes de daiyokai ou de povos longevos tendem a apresentar formas mais estáveis, enquanto outras linhagens podem parecer abertamente monstruosas."},
        {title:"Linhagem amaldiçoada",text:"Muitos Hanyou são tratados como párias e precisam decidir quanto de sua herança mortal ou yokai desejam abraçar. Alguns tornam-se protetores de comunidades ao longo de gerações; outros se afastam tanto de mortais quanto de yokai e constroem a identidade em torno de força, beleza, velocidade, riqueza, armas ou outra qualidade que possam controlar."},
        {title:"Hanyou em Retia",text:"São extremamente raros em Retia porque a influência yokai é muito mais forte em Cu Chullis e em regiões próximas do Reino das Sombras. Quando aparecem, muitas vezes são descendentes de pessoas que negociaram com yokai e deixaram aos filhos a consequência completa da marca."
        }
      ],
      meta:{alignment:"Quase nunca Leais; frequentemente Neutros e solitários, embora o caminho para o mal seja comum",languages:"Comum + 1 idioma adicional",speed:"9 m (30 pés)"},
      coreTraits:{
        "demonic-regeneration":"Ao concluir um Descanso Longo, você recupera todos os seus Dados de Vida, em vez de apenas metade. Além disso, como uma ação, pode gastar qualquer quantidade de Dados de Vida e recuperar pontos de vida iguais ao seu bônus de proficiência para cada Dado de Vida gasto desta maneira.",
        "thermal-vision":"Você detecta fontes de calor a até 9 metros (30 pés). Dentro desse alcance e desde que tenha linha de visão, consegue perceber criaturas que produzam calor corporal mesmo se estiverem Invisíveis e ignora ilusões dessas criaturas como se possuísse Visão às Cegas. Criaturas sem sangue ou que não produzam calor como seres vivos — normalmente mortos-vivos, construtos sem fogo ou calor, elementais não ligados a fogo, gosmas e semelhantes — não são percebidas por esta visão."
      },
      legacyTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra, distinguindo cores apenas em tons de cinza.",
        "fiendish-lunge":"Você pode realizar saltos em altura e em distância a partir de uma posição parada usando a distância completa como se tivesse tomado impulso. Além disso, um número de vezes por Descanso Longo igual ao seu bônus de proficiência, pode usar uma ação bônus para saltar em direção a uma criatura a uma distância de até metade do seu deslocamento, terminando no espaço desocupado mais próximo adjacente a ela. Até o fim do turno, você tem vantagem em todos os ataques corpo a corpo com arma contra essa criatura. Este traço só pode ser usado uma vez por turno.",
        "haunting-magic":"Escolha um truque e uma magia de 1º nível das listas de Feiticeiro ou Bruxo, ou da escola de magia Daemoturgia. Escolha também Sabedoria, Carisma ou Inteligência como sua habilidade de conjuração. Você pode conjurar o truque à vontade e a magia de 1º nível um número de vezes por Descanso Longo igual ao seu bônus de proficiência, além de poder conjurá-la usando espaços de magia apropriados. Ao escolher magias por outros traços ou características, você também pode escolher magias da escola Daemoturgia mesmo que elas não estejam na lista normal da sua classe, e é considerado familiarizado com essa escola.",
        "reconstitution":"Ao realizar um Descanso Curto, você pode reconstruir grandes danos físicos, como membro perdido ou órgão destruído, reproduzindo a parte restauradora do corpo de *regeneração*; não precisa possuir a parte perdida. Para fazer isso, deve iniciar o Descanso Curto com seu número máximo de Dados de Vida, não pode gastar nenhum deles para recuperar pontos de vida durante o descanso e perde todos os Dados de Vida ao concluir o descanso. No próximo Descanso Longo após usar esta característica, você não recupera pontos de vida, embora recupere Dados de Vida normalmente.",
        "tormentous-resilience":"Você possui resistência a dano psíquico.",
        "used-to-hiding":"Você possui proficiência e Especialização na perícia Furtividade."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça Hanyou correspondente: • Asas Yokai (Aviário); • Subaquático (Aquático); • Troca Arisca (Raposa); • Gigantismo (Gigante); • Ressonância Psíquica (Rancor); • Frenesi de Nutrição (Cão de Caça); • Talento Meio-Yokai (Herdeiro); • Telempatia (Manifestado). Quando Hanyou é sua raça secundária, este traço é obtido automaticamente e uma das suas duas escolhas normais de Traço de Legado deve ser usada para receber 1 Traço de Herança positivo e 1 prejudicial da subraça escolhida.",
        "demonic-regeneration":"Você recebe o traço racial Regeneração Demoníaca do Hanyou.",
        "thermal-vision":"Você recebe o traço racial Visão Térmica do Hanyou."
      },
      subraces:{
        "aquatic":{description:"Hanyou Aquáticos descendem de yokai ligados à água e apresentam escamas, nadadeiras ou outras adaptações aquáticas. A subraça combina grande mobilidade submersa com fraquezas quando afastada do ambiente adequado.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "deft-swimmer":"Você possui deslocamento de natação igual ao seu deslocamento-base. Pode realizar Disparada como uma ação bônus, mas o deslocamento adicional obtido dessa forma só pode ser usado para nadar.",
          "insulated-body":"Você possui resistência a dano de frio.",
          "mucus-spit":"Como uma ação bônus, você cospe uma massa de muco em uma criatura a até 3 metros (10 pés). O alvo deve realizar um teste de resistência de Destreza usando Constituição para sua CD racial; em uma falha, fica Cego até gastar uma ação para limpar o muco dos olhos. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "slippery-body":"Você tem vantagem em testes feitos para resistir ou escapar das condições Agarrado ou Contido.",
          "clumsy":"Enquanto estiver em terra seca, seu deslocamento é reduzido em 3 metros (10 pés) e você tem desvantagem em testes de resistência de Destreza.",
          "faltering-eyes":"Fora d'água, seus olhos secam e funcionam mal. Você enxerga penumbra como se fosse escuridão e tem desvantagem em testes de Sabedoria (Percepção).",
          "vulnerable":"Você possui vulnerabilidade a dano elétrico e radiante.",
          "subaquatic":"Você pode respirar ar e água. Quando fala enquanto está submerso, sua voz se propaga naturalmente para outras criaturas submersas a até 9 metros (30 pés). Enquanto estiver debaixo d'água, possui Visão às Cegas a 36 metros (120 pés), que não se estende para fora do corpo d'água, e tem vantagem em testes de resistência de Destreza e em todos os testes e salvaguardas contra correntes subaquáticas fortes."
        }},
        "avian":{description:"Hanyou Aviários possuem características de aves, como garras, asas e bicos. São caçadores observadores e a própria estrutura corporal pode tornar seu voo extraordinário ou, em alguns casos, difícil de controlar.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "accelerated":"Seu deslocamento de voo laborioso concedido por Asas Yokai — ou por quaisquer outras asas que possua — passa a ser no mínimo 10 pés × seu bônus de proficiência. Além disso, você recebe deslocamento de voo normal de 6 metros (20 pés).",
          "devilsight":"Você possui Visão Diabólica a 9 metros (30 pés), permitindo enxergar normalmente em escuridão mágica e não mágica dentro desse alcance.",
          "eye-of-confusion":"Quando uma criatura fizer um ataque de arma contra você, você pode usar sua reação para tentar hipnotizá-la. O atacante deve realizar um teste de resistência de Carisma usando Carisma para sua CD racial. Em uma falha, você pode redirecionar o ataque para outra criatura ao alcance do ataque, exceto o próprio atacante. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "sharp-eyes":"Você possui proficiência em Sabedoria (Percepção) e recebe um bônus na Investigação passiva igual ao seu bônus de proficiência.",
          "large-form":"Suas asas são enormes e difíceis de manejar. Você não pode começar a voar a menos que todos os espaços adjacentes a você estejam desocupados. Além disso, quando atravessa o espaço de outra criatura, cada 1,5 metro (5 pés) de movimento custa 3 metros (10 pés), mesmo que aquele espaço já tivesse outro custo adicional.",
          "sunlight-sensitivity":"Você tem desvantagem em testes de Sabedoria (Percepção) e em jogadas de ataque realizadas sob luz solar direta ou contra um alvo que esteja sob luz solar direta.",
          "vulnerable":"Você possui vulnerabilidade a dano elétrico e radiante.",
          "yokai-wings":"Você possui asas naturais que concedem deslocamento de voo laborioso de 6 metros (20 pés)."
        }},
        "fox":{description:"Hanyou Raposa refletem os extremos dos yokai raposa: alguns são belos e carismáticos, outros abertamente deformados. Herdam natureza veloz, enganadora e manipuladora, mas algumas dessas qualidades vêm acompanhadas de fraquezas físicas ou disciplina instável.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "claws":"Seus ataques desarmados usam unhas afiadas e causam 1d6 + seu modificador de Destreza de dano cortante. Você pode usar Força ou Destreza para a jogada de ataque.",
          "cunning-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro de outra fonte, seu alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o valor maior.",
          "fox-cunning":"Um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo, você pode dobrar seu deslocamento-base até o início do seu próximo turno.",
          "unnatural-charm":"Você pode conjurar *enfeitiçar pessoa* um número de vezes por Descanso Longo igual ao seu bônus de proficiência, usando Carisma como habilidade de conjuração.",
          "frail-form":"Você tem desvantagem em testes de Força e testes de resistência de Força.",
          "lackadaisical":"Escolha duas perícias nas quais seja proficiente. Quando realizar testes com essas perícias, você adiciona apenas metade do seu bônus de proficiência, arredondado para baixo, em vez do bônus completo.",
          "vulnerable":"Você possui vulnerabilidade a dano de fogo e radiante.",
          "skittish-switch":"Quando for alvo de um ataque de arma ou de uma magia que tenha apenas você como alvo e existir um aliado voluntário adjacente, você pode usar sua reação para trocar de lugar com esse aliado e torná-lo o novo alvo do ataque ou efeito."
        }},
        "giant":{description:"Hanyou Gigantes descendem de kyojin e oni e possuem corpos enormes, muitas vezes desproporcionais, com chifres ou traços bestiais. Sua força é extraordinária, mas o tamanho pode trazer lentidão ou vulnerabilidades.",traits:{
          "gigantism":"Seu tamanho é Grande; você não pode escolher Pequeno ou Médio. Sua capacidade de carga é dobrada. Quando realizar um teste baseado em Força, pode adicionar metade do seu bônus de proficiência ao teste mesmo se já estivesse adicionando o bônus uma vez, mas não se já o estivesse adicionando uma segunda vez.",
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "giant-s-strength":"Seus ataques desarmados causam 1d6 + seu modificador de Força de dano contundente. Se outra característica já conceder aos seus ataques desarmados um dado de dano igual ou maior, adicione seu bônus de proficiência ao dano desses ataques em vez disso.",
          "mountain-grapple":"Você tem vantagem em testes feitos para iniciar ou escapar de Agarrões contra criaturas menores que você.",
          "titanic-rage":"Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, você pode usar uma ação bônus para rugir contra uma criatura a até 18 metros (60 pés). Ela deve realizar um teste de resistência de Sabedoria usando Carisma para sua CD racial; em uma falha, fica Amedrontada por você até o fim do próximo turno dela.",
          "thickened-hide":"Escolha contundente, perfurante ou cortante. Sempre que sofrer dano do tipo escolhido, reduza o dano em um valor igual ao seu modificador de Constituição.",
          "heavy-set":"Se ficar Caído, deve gastar todo o seu deslocamento para se levantar.",
          "slow":"Você tem desvantagem em testes de Destreza e testes de resistência de Destreza.",
          "vulnerable":"Você possui vulnerabilidade a dano trovejante e radiante."
        }},
        "grudge":{description:"Hanyou de Rancor carregam obsessões ou ressentimentos herdados de yokai formados por fortes emoções. Sua mente é difícil de invadir e pode transformar violência física em sofrimento psíquico, mas a própria obsessão pode limitar sua personalidade.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "resonant-mind":"Criaturas não podem ler seus pensamentos nem entrar em contato telepático com você sem sua permissão. Se permitir que uma criatura se comunique telepaticamente com você, você pode responder pela mesma ligação.",
          "single-minded":"Você tem vantagem em testes de resistência de Inteligência.",
          "sorcery":"Escolha um truque da lista de Feiticeiro. Você pode conjurá-lo inatamente, usando Carisma como sua habilidade de conjuração.",
          "suppressing-thoughts":"Um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo, você pode usar uma ação para escolher uma criatura que possa ver a até 18 metros (60 pés). O alvo deve realizar um teste de resistência de Inteligência usando Carisma para sua CD racial; em uma falha, fica Atordoado até o fim do próximo turno dele.",
          "ingrained-grudge":"Sempre que realizar um teste ou teste de resistência de Carisma, role 1d4 e subtraia o resultado da jogada.",
          "vengeful":"Quando for atingido por um ataque corpo a corpo com arma, o próximo ataque que realizar antes do fim do seu próximo turno tem desvantagem, a menos que seja feito contra a criatura que o atingiu.",
          "vulnerable":"Você possui vulnerabilidade a dano psíquico e radiante.",
          "psychic-resonance":"Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, você pode usar um dos seguintes efeitos: • ao conjurar uma magia que cause dano, qualquer parte do dano à qual o alvo teria resistência torna-se dano psíquico em vez do tipo original; • como ação bônus, escolher uma arma que esteja segurando para que ela cause dano psíquico em vez do tipo normal por 1 minuto; • ao conjurar uma magia que obrigue uma criatura a realizar um teste de resistência, mudar o tipo desse teste para Inteligência. Se o efeito causaria metade do dano em um sucesso, ele causa zero dano em um sucesso quando modificado desta forma."
        }},
        "hound":{description:"Hanyou Cão de Caça descendem de yokai caninos e lupinos. Costumam ter pelagem densa e forte faro, perseguem alvos com velocidade e podem entrar em frenesi quando o cheiro de sangue aparece.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "dogtail":"Quando realizar um ataque de oportunidade contra uma criatura, você pode se mover até metade do seu deslocamento para persegui-la como parte da mesma reação. Cada espaço em que entrar deve estar no máximo tão distante do alvo quanto o espaço anterior, e esse movimento não provoca ataques de oportunidade.",
          "hound-s-senses":"Você tem vantagem em testes de Sabedoria (Percepção) que dependam de audição ou olfato e em testes de Inteligência (Investigação) feitos para rastrear criaturas cujo cheiro você conheça.",
          "sprinter":"Seu deslocamento-base aumenta em 3 metros (10 pés).",
          "weary-eye":"Um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo, você pode usar uma ação bônus para escolher uma criatura a até 9 metros (30 pés). O alvo deve realizar um teste de resistência de Carisma usando Carisma para sua CD racial. Em uma falha, até o fim do próximo turno dele não pode realizar reações nem fazer mais de um ataque com arma no próprio turno.",
          "contorted":"Seu deslocamento-base é reduzido em 3 metros (10 pés).",
          "sensitivity":"Você tem desvantagem em testes de resistência feitos para resistir ou se recuperar das condições Cego ou Surdo.",
          "vulnerable":"Você possui vulnerabilidade a dano de fogo e radiante.",
          "nourishment-frenzy":"Quando obtiver 20 no d20 de um ataque com arma contra uma criatura, você recebe pontos de vida temporários iguais à metade do dano causado pelo ataque. Esses pontos de vida temporários desaparecem após 1 minuto."
        }},
        "inheritor":{description:"Hanyou Herdeiros descendem de yokai particularmente poderosos e, por isso, recebem uma combinação genética mais favorável que a maioria. Sua linhagem permite adaptar talentos e traços de outras manifestações Hanyou.",traits:{
          "half-yokai-feat":"Escolha um talento para o qual cumpra os pré-requisitos e trate-o como um traço racial. Você não recebe quaisquer aumentos de atributos que esse talento normalmente concederia.",
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "demonic-prowess":"Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, antes de realizar uma jogada de ataque ou teste de resistência, você pode rolar 1d4 e adicionar o resultado à jogada.",
          "empowered":"Escolha um atributo que esteja abaixo de 20. Esse atributo aumenta em 1.",
          "flexible-bloodline":"Escolha um Traço de Herança de outra subraça Hanyou que não possua número limitado de usos. Você recebe esse traço.",
          "natural-talent":"Escolha uma perícia e ganhe proficiência nela. Uma vez por Descanso Curto ou Longo, quando falhar em um teste usando essa perícia, pode rolar novamente e deve usar o novo resultado.",
          "arrogance":"Você tem desvantagem em testes de Carisma.",
          "fiend":"Você tem desvantagem em testes de resistência contra efeitos originados de celestiais, paladinos, clérigos ou outras fontes divinas.",
          "natural-shortcoming":"Escolha um atributo acima de 4. Esse atributo é reduzido em 1.",
          "vulnerable":"Você possui vulnerabilidade a dano radiante. Além disso, quando sofrer um acerto crítico, sofre o dano máximo possível dos dados de dano do ataque."
        }},
        "manifest":{description:"Hanyou Manifestados nascem de yokai ligados a emoções, corrupção ou rancores. São sensíveis às mentes e estados emocionais de outras criaturas, às vezes a ponto de sofrerem com excesso de estímulo.",traits:{
          "heritage-traits":"Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Ao realizar seu primeiro Descanso Longo após alcançar o 8º nível, remova um dos traços prejudiciais escolhidos; ao realizar seu primeiro Descanso Longo após alcançar o 13º nível, remova o segundo.",
          "blindsight":"Você possui Visão às Cegas com alcance em pés igual a 10 × seu bônus de proficiência, obtida por percepção mental. Essa visão não detecta construtos, aberrações, mortos-vivos nem criaturas com Inteligência 5 ou menor.",
          "mind-reader":"Uma vez por Descanso Curto ou Longo, você pode conjurar *detectar pensamentos*, usando Carisma como sua habilidade de conjuração.",
          "mental-shield":"Seus pensamentos não podem ser detectados. Se uma criatura tentar se comunicar telepaticamente com você, você pode bloquear e encerrar o contato mental.",
          "unusual-wit":"Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, quando falhar em um teste de resistência de Sabedoria, você pode rolar um novo d20 e substituir o resultado original pelo novo valor.",
          "ignorant":"Você sofre uma penalidade de −5 na Percepção passiva.",
          "sensitive-ego":"Você tem desvantagem em testes de resistência de Carisma.",
          "vulnerability":"Você possui vulnerabilidade a dano psíquico e radiante.",
          "telempathy":"Você possui proficiência em Sabedoria (Intuição). Se outra característica também lhe conceder proficiência em Intuição, você pode adicionar seu bônus de proficiência uma segunda vez a esses testes, a menos que já estivesse fazendo isso. Além disso, pode falar telepaticamente com criaturas a até 9 metros (30 pés); elas ouvem em sua mente uma voz que soa como qualquer vocalização que você normalmente conseguiria produzir."
        }}
      }
    },
    "hobgoblin":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Hobgoblins são goblinoides altos, de pele avermelhada, orelhas pontudas e forte senso de hierarquia. Mesmo comunidades civis tendem a organizar responsabilidades como uma cadeia de comando, e muitos interpretam o mundo classificando informações, pessoas e recursos de forma metódica."},
        {title:"Gênios táticos",text:"A tradição hobgoblin valoriza estratégia e guerra. Mesmo indivíduos sem treinamento formal costumam demonstrar aptidão para organização de combate, disciplina e leitura de ameaças, razão pela qual outras potências temem o que ocorreria se armamentos modernos de Retia chegassem às forças militares das Terras de Ataque."},
        {title:"Exílio feérico e Exército Hellrock",text:"A tradição situa suas origens no Reino Feérico, de onde teriam sido expulsos após uma revolta. Séculos depois, grande parte de suas forças foi reunida no Exército Hellrock sob a liderança do Soberano, iniciando um conflito prolongado contra a Titanarquia."},
        {title:"Hobgoblins em Retia",text:"São raros em Retia e frequentemente escondem a identidade devido à associação automática com Hellrock. Comunidades de refugiados e desertores, porém, existem em regiões afastadas e algumas conseguiram relações estáveis com autoridades locais."
        }
      ],
      meta:{alignment:"Frequentemente Leais; mal ou neutralidade são comuns por influência cultural, mas não obrigatórios",languages:"Comum e Goblin",speed:"9 m (30 pés)"},
      coreTraits:{
        "fey-ancestry":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Enfeitiçado.",
        "gift-of-support":"Você pode usar este traço para realizar a ação Ajudar como uma ação bônus. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
      },
      legacyTraits:{
        "ambush-tactics":"Quando fizer um ataque contra uma criatura e um aliado seu estiver a até 1,5 metro (5 pés) dela sem estar Incapacitado, você pode usar este traço para realizar a jogada de ataque com vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra, percebendo cores apenas em tons de cinza.",
        "fey-guidance":"Sempre que usar Dom do Apoio para realizar Ajudar como ação bônus, escolha também um dos seguintes efeitos: • **Hospitalidade:** você e a criatura ajudada recebem pontos de vida temporários iguais a 1d6 + seu bônus de proficiência; • **Passagem:** você e a criatura ajudada aumentam o deslocamento de caminhada em 3 metros (10 pés) até o início do seu próximo turno; • **Despeito:** até o início do seu próximo turno, a primeira vez que a criatura ajudada acertar um alvo com uma jogada de ataque, esse alvo terá desvantagem na próxima jogada de ataque que realizar dentro do próximo minuto.",
        "persistent-nature":"Você possui proficiência nas perícias Persuasão e Intimidação.",
        "saving-face":"Quando errar uma jogada de ataque ou falhar em um teste de atributo ou teste de resistência, você pode adicionar ao resultado um bônus igual ao número de aliados a até 9 metros (30 pés) que possam vê-lo ou ouvi-lo, limitado ao seu bônus de proficiência. Esse bônus pode transformar a falha em sucesso. Você pode usar este traço uma vez por Descanso Curto ou Longo.",
        "weapon-training":"Você possui proficiência com armaduras leves, armaduras médias e duas armas marciais à sua escolha."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Aprender com o Passado (Consciente); • Mestre de Armas (Forjado por Scorn); • Golpe em Corrida (Mão de Ataque); • Sábio da Natureza (Wildermaison).",
        "fey-ancestry":"Você recebe o traço racial Ancestralidade Feérica do Hobgoblin.",
        "gift-of-support":"Você recebe o traço racial Dom do Apoio do Hobgoblin. Se Hobgoblin for sua raça secundária, seu tipo de criatura também conta como Goblinoide além dos demais tipos que possuir."
      },
      subraces:{
        "mindful":{description:"Hobgoblins Conscientes usam o talento natural para organização e análise em estudos de história, natureza e estratégia. Podem viver fora do Exército Hellrock ou servir como comandantes e táticos.",traits:{
          "instructive-expert":"Quando usar Dom do Apoio para realizar a ação Ajudar, você pode ajudar uma criatura a até 9 metros (30 pés), desde que ela possa vê-lo ou ouvi-lo.",
          "learn-from-the-past":"Você possui proficiência na perícia História e em outras duas perícias à sua escolha. Quando falhar em um teste de perícia usando qualquer uma das proficiências concedidas por este traço, você pode rolar um novo d20 e substituir o resultado original, possivelmente alterando o resultado. Pode fazer isso um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "scornwrought":{description:"Forjados por Scorn são criados desde cedo para servir como soldados. Armas e formação militar fazem parte da vida cotidiana, e sua resistência física permite sobreviver a golpes que derrubariam outros combatentes.",traits:{
          "death-knell":"Quando dano fosse reduzi-lo a 0 pontos de vida, você fica com 1 ponto de vida em vez disso e imediatamente recebe pontos de vida temporários iguais a 1d6 × seu bônus de proficiência. Esses pontos de vida temporários desaparecem no início do seu próximo turno. Você pode usar este traço uma vez por Descanso Longo.",
          "weaponmaster":"Você possui proficiência com todas as armas simples e marciais, armaduras leves e escudos."
        }},
        "strikehand":{description:"Mãos de Ataque são comuns nas linhas de frente de Hellrock. Sua formação enfatiza resistência a áreas perigosas, mobilidade em terreno ruim e ataques rápidos após uma aproximação agressiva.",traits:{
          "push-beyond-the-threat":"Quando realizar um teste de resistência ativado por começar ou terminar o turno em uma área de efeito ou por entrar nela pela primeira vez no turno, você tem vantagem nesse teste. Além disso, terreno difícil não reduz seu deslocamento quando estiver usando seu deslocamento de caminhada.",
          "running-strike":"Se mover pelo menos 4,5 metros (15 pés) em direção a uma criatura antes de atacá-la com uma arma, o primeiro ataque com arma que realizar contra ela naquele turno tem vantagem. Se acertar, causa 1d6 de dano adicional do mesmo tipo da arma."
        }},
        "wildermaison":{description:"Wildermaison preservam uma conexão mais evidente com as origens feéricas dos hobgoblins. Canalizam magia primal para controlar terreno e inimigos e costumam combinar conhecimento natural com disciplina militar.",traits:{
          "nature-sage":"Você possui proficiência nas perícias Natureza e Sobrevivência.",
          "wilder-magic":"Você pode usar este traço para conjurar *emaranhar* ou *golpe constritor* (*ensnaring strike*) sem gastar espaço de magia nem componentes, usando Sabedoria como habilidade de conjuração. Você pode usar o traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Também pode conjurar essas magias normalmente usando espaços de magia apropriados."
        }}
      }
    },

    "ilthrak-yar":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Ilthrak-yar são humanoides insetoides originários do Gloomlush. Suas formas lembram insetos, aracnídeos e crustáceos, com exoesqueletos e anatomias intimidadoras. Embora possuam comunidades e estruturas sociais próprias, tendem a enxergar desconhecidos inicialmente como predadores ou presas."},
        {title:"Sempre caçando",text:"A curta expectativa de vida e a origem em ambientes hostis produziram uma cultura de sobrevivência constante. Mesmo quando possuem recursos suficientes, muitos continuam acumulando suprimentos e objetos, desenvolvendo comportamento quase compulsivo de coleta."},
        {title:"Infestação material",text:"Quando encontram portais para novos planos, grupos Ilthrak-yar costumam explorar e, se encontram recursos sem competição, podem estabelecer colônias rapidamente. Povos vizinhos muitas vezes tratam isso como uma infestação e agem antes que a comunidade cresça a ponto de formar um exército."
        }
      ],
      meta:{alignment:"Comumente Neutro e Mau; indivíduos socializados tendem à neutralidade e raramente à ordem",languages:"Falam Comum e Abissal, mas não necessariamente sabem ler ou escrever nesses idiomas",speed:"9 m (30 pés)"},
      coreTraits:{
        "insectoid-resilience":"Você possui resistência a dano de veneno.",
        "twitching-skirmish":"Como uma ação bônus, escolha uma das opções a seguir: • realizar a ação Esquivar; • escapar de um efeito que esteja deixando você Agarrado ou Contido; • conceder vantagem ao próximo ataque que fizer neste turno e, se ele acertar, causar 1d4 de dano adicional. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
      },
      legacyTraits:{
        "ambush-hunter":"A menos que esteja Surpreendido, você pode adicionar seu bônus de proficiência às suas jogadas de iniciativa.",
        "compound-eyes":"Sua visão quase panorâmica concede um bônus à sua Percepção passiva igual ao seu bônus de proficiência.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés), permitindo enxergar na escuridão como se fosse penumbra.",
        "extra-hands":"Seus membros adicionais concedem uma ação bônus ou interação adicional em cada turno. As duas ações bônus do turno precisam ser usadas para ações diferentes; por exemplo, você não pode usar ambas para atacar ou para beber uma poção.",
        "resistant-blood":"Você possui resistência a dano de ácido e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado.",
        "uncatchable":"Você pode realizar a ação Desengajar como uma ação bônus."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Exogarras (Brachaya); • Escalada de Aranha (Arcathia); • Metabolismo de Sobrevivência (Carapaça Rochosa); • Ferrão Venenoso (Himenóptero).",
        "poison-resistance":"Você possui resistência a dano de veneno.",
        "twitching-skirmish":"Você recebe o traço racial Escaramuça Espasmódica do Ilthrak-yar."
      },
      subraces:{
        "arcathia":{description:"Arcathia possuem múltiplos apêndices e anatomia semelhante a aranhas. Pelos especializados permitem aderir a paredes e tetos, e suas teias são usadas para controlar território e aprisionar presas.",traits:{
          "spider-climb":"Você pode escalar superfícies como se estivesse sob os efeitos da magia *patas de aranha*.",
          "webbing-launch":"Uma vez por Descanso Curto ou Longo, você pode produzir os efeitos da magia *teia* sem gastar espaço de magia. Isso não conta como conjurar uma magia e não exige sua concentração. Constituição é a habilidade usada para determinar a CD do efeito."
        }},
        "brachaya":{description:"Brachaya lembram caranguejos ou outros crustáceos e passam grande parte da vida submersos, aguardando oportunidades de emboscada. Suas grandes garras ajudam tanto na luta quanto em agarrões.",traits:{
          "amphibious":"Você possui deslocamento de natação de 9 metros (30 pés) e pode respirar ar e água.",
          "exo-claws":"Você possui grandes garras de carapaça. Tem vantagem em testes feitos para iniciar ou manter Agarrões, e seus ataques desarmados causam 1d8 + seu modificador de Força de dano cortante.",
          "nautical-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro de outra fonte, o alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), escolhendo o valor maior."
        }},
        "hymenoptera":{description:"Himenópteros lembram vespas e possuem grandes asas que podem se recolher junto à carapaça. São uma das formas mais sociais de Ilthrak-yar e frequentemente caçam em grupos.",traits:{
          "flight":"Você possui deslocamento de voo laborioso de 9 metros (30 pés).",
          "venomous-sting":"Você possui um ferrão venenoso. Como uma ação bônus, pode realizar um ataque desarmado contra uma criatura a até 1,5 metro (5 pés). Em um acerto, causa 1d8 + seu modificador de Força de dano perfurante e o alvo deve realizar um teste de resistência de Constituição usando Constituição para sua CD racial; em uma falha, fica Envenenado por 1 minuto e repete o teste no fim de cada turno, encerrando o efeito em um sucesso. Você pode realizar essa versão venenosa do ataque um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Depois de esgotar os usos, ainda pode atacar com o ferrão, mas não pode Envenenar o alvo."
        }},
        "shellrock":{description:"Carapaças Rochosas são grandes e pesados, protegidos por um exoesqueleto espesso. Suas defesas permitem caçadas pacientes e longos períodos de repouso metabólico.",traits:{
          "greater-size":"Seu tamanho é Grande.",
          "hardened-shell":"Enquanto não estiver usando armadura, pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Constituição. Enquanto usar essa fórmula, reduza todo dano contundente, perfurante ou cortante que sofrer em um valor igual ao seu bônus de proficiência.",
          "survival-metabolism":"Ao passar 10 minutos em estado letárgico, sem se mover nem realizar ações, você pode realizar um Descanso Curto adicional além do número normal permitido entre Descansos Longos. Você pode fazer isso uma vez por Descanso Longo. Ao concluir esse descanso especial, recupera pontos de vida equivalentes a um Dado de Vida adicional mesmo que não gaste Dados de Vida."
        }}
      }
    },

    "kaijou":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Kaijou são humanoides semelhantes a dinossauros, cobertos por escamas espessas e pétreas. Nenhum corresponde exatamente a uma espécie pré-histórica específica, e muitos vivem ao lado de dinossauros comuns, domesticando-os como montarias, companheiros ou animais de criação."},
        {title:"Kaijou em Retia",text:"São raros em Retia e a maior concentração conhecida vive no Caldeirão. Pequenas tribos também aparecem em regiões úmidas, mas a aparência monstruosa frequentemente causa pânico em centros urbanos, especialmente entre pessoas que nunca encontraram um Kaijou."},
        {title:"Deuses Kaijou",text:"A tradição Kaijou reverencia Kilngresh e Aldinax como forças primordiais de criação e destruição, sobrevivência e entropia. Fenômenos como furacões, tsunamis e terremotos são interpretados como sinais de conflito entre essas entidades."},
        {title:"Origens míticas",text:"Segundo a história apresentada no guia, os ancestrais Kaijou eram dinossauros e outras criaturas próximas às crateras das Lágrimas Cósmicas. A radiação eidomântica alterou essas criaturas ao longo de gerações, produzindo formas mais capazes de interagir com o ambiente e, por fim, os Kaijou modernos."
        }
      ],
      meta:{alignment:"Geralmente caóticos; sem tendência consistente no eixo bem/mal",languages:"Comum e Crisgnaw",speed:"9 m (30 pés)"},
      coreTraits:{
        "hard-headed":"Você possui resistência a dano psíquico.",
        "stonehide":"Enquanto não estiver usando armadura, pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Constituição e ainda pode usar um escudo normalmente. Para características que exigem estar usando armadura média ou pesada, calcular sua CA desta forma pode ser tratado como usar esses tipos de armadura."
      },
      legacyTraits:{
        "blindsight":"Você possui Visão às Cegas com alcance em pés igual a 5 × seu bônus de proficiência.",
        "concussive-critical":"Quando obtiver 20 no d20 de um ataque corpo a corpo com arma, o alvo deve realizar um teste de resistência de Constituição usando Força para sua CD racial. Em uma falha, fica Atordoado até o início do seu próximo turno.",
        "grapple-master":"Você tem vantagem em testes de atributo feitos para Agarrar ou Empurrar criaturas menores que você.",
        "prehistoric-tenacity":"Quando realizar um teste de atributo ou teste de resistência de Força ou Constituição e o resultado do d20 for 9 ou menos, você pode usar este traço para tratar o resultado do d20 como 10. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "swordbreaker":"Quando sofrer dano contundente, perfurante ou cortante, você pode usar sua reação para reduzir o dano em um valor igual ao seu nível total. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
        "thagomizer":"Você possui uma cauda espinhosa que pode ser usada para atacar como uma ação bônus. Ela conta como uma arma corpo a corpo Pesada, usa Força nas jogadas de ataque e dano e, em um acerto, causa dano perfurante igual a 1d4 × seu bônus de proficiência + seu modificador de Força."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha uma das seguintes opções de subraça: • Asas (Linhagem Aérea); • Anfíbio (Linhagem Aquática); • Empunhadura Suprema **e** Mudança de Tamanho (Linhagem Golias; esta opção concede os dois traços); • Vivendo com Medo (Linhagem Escaramuçadora); • Enrolar Defensivo (Linhagem Escama de Pedra).",
        "hard-headed":"Você recebe o traço racial Cabeça Dura do Kaijou.",
        "stonehide":"Você recebe o traço racial Pele de Pedra do Kaijou."
      },
      subraces:{
        "aerial-breed":{description:"Kaijou da Linhagem Aérea lembram dinossauros voadores e possuem asas, bicos e visão desenvolvida para localizar presas do alto.",traits:{
          "fly-by":"Você não provoca ataques de oportunidade de criaturas quando voa para dentro ou para fora do alcance delas.",
          "watchful-eyes":"Você possui proficiência na perícia Percepção e pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já permita isso, independentemente de possuir proficiência ou Especialização em Percepção.",
          "wings":"Você possui asas que concedem deslocamento de voo igual ao seu deslocamento de caminhada. Não pode decolar do chão a partir de uma posição parada a menos que exista ao menos um espaço desocupado adjacente a você no mesmo plano horizontal. Se ficar Caído no ar, pode usar sua reação para se recompor sem penalidade."
        }},
        "aquatic-breed":{description:"Kaijou da Linhagem Aquática vivem confortavelmente sob a água e são adaptados a ambientes de pouca luz. Em geral, são mais isolados e menos agressivos que outras linhagens.",traits:{
          "amphibious":"Você pode respirar ar e água.",
          "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra, percebendo cores apenas em tons de cinza.",
          "swimmer":"Você possui deslocamento de natação igual ao seu deslocamento-base de caminhada."
        }},
        "goliath-breed":{description:"Kaijou da Linhagem Golias são enormes e lembram os maiores predadores pré-históricos. A força e a presença natural fazem com que muitos assumam posições de liderança em suas tribos.",traits:{
          "intimidating-presence":"Você possui proficiência na perícia Intimidação.",
          "size-change":"Seu tamanho é Grande.",
          "supreme-wielder":"Você pode empunhar uma arma de Duas Mãos ou Versátil com apenas uma mão e ainda receber os benefícios de empunhá-la com duas mãos. Enquanto fizer isso, não pode empunhar outra arma na outra mão, mas pode usar um escudo e receber seus benefícios."
        }},
        "skirmisher-breed":{description:"Kaijou da Linhagem Escaramuçadora são menores, rápidos e inquietos, lembrando raptores e outros pequenos predadores. Seu medo se transforma em velocidade e reação agressiva.",traits:{
          "accelerated":"Seu deslocamento é 12 metros (40 pés). No 7º nível, passa a 13,5 metros (45 pés), e no 13º nível a 15 metros (50 pés). Se outra característica aumentar permanentemente seu deslocamento, use o maior valor entre os aumentos aplicáveis.",
          "darting-steps":"Terreno difícil não impõe penalidade ao seu deslocamento enquanto você estiver usando um tipo de deslocamento que possua normalmente.",
          "living-in-fear":"Se estiver Surpreendido quando o combate começar, você pode agir normalmente no seu primeiro turno. Além disso, tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Amedrontado.",
          "size-change":"Seu tamanho é Pequeno."
        }},
        "stonescale-breed":{description:"Kaijou da Linhagem Escama de Pedra possuem couraça, chifres, espinhos e outras defesas naturais. Conseguem curvar o corpo para reduzir danos e ferir atacantes que se aproximam demais.",traits:{
          "barbed-hide":"Quando for atingido por um ataque corpo a corpo realizado por uma criatura a até 1,5 metro (5 pés), você pode usar sua reação para causar ao atacante dano perfurante igual à metade do seu nível total, arredondado para baixo, + seu modificador de Constituição. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "defensive-curl":"Enquanto estiver recebendo os benefícios da ação Esquivar, você também possui resistência a dano contundente, perfurante e cortante.",
          "jurassic-resilience":"Seu máximo de pontos de vida aumenta em 1 e aumenta em mais 1 sempre que você ganha um nível após o 1º."
        }}
      }
    }
  };

  const byId=new Map((window.GRIMORIO_RACES||[]).map(r=>[r.id,r]));
  const targetIds=Object.keys(P);
  const defaultDescription=(arr)=>{if(!Array.isArray(arr))return;for(const t of arr)if(!t.description)t.description=t.summary||'';};
  const applyTraits=(arr,map)=>{
    if(!Array.isArray(arr)||!map)return;
    for(const [id,value] of Object.entries(map)){
      const t=arr.find(x=>x.id===id);if(!t)continue;
      if(typeof value==='string')t.description=value;
      else if(value&&typeof value==='object'){
        if(value.description)t.description=value.description;
        if(value.name)t.name=value.name;
      }
    }
  };

  // Primeiro, todos os registros destas raças recebem ao menos a descrição curta já existente;
  // em seguida os mapas auditados abaixo substituem qualquer resumo genérico/incompleto.
  for(const id of targetIds){
    const r=byId.get(id);if(!r)continue;
    defaultDescription(r.coreTraits);defaultDescription(r.legacyTraits);defaultDescription(r.mixedBloodTraits);
    for(const s of r.subraces)defaultDescription(s.traits);
  }

  for(const [id,p] of Object.entries(P)){
    const r=byId.get(id);if(!r)continue;
    r.textRevision=p.textRevision||'full';
    if(p.lore)r.lore=p.lore;
    if(p.meta)r.meta={...r.meta,...p.meta};
    applyTraits(r.coreTraits,p.coreTraits);
    applyTraits(r.legacyTraits,p.legacyTraits);
    applyTraits(r.mixedBloodTraits,p.mixedBloodTraits);
    if(p.subraces){
      for(const [sid,sp] of Object.entries(p.subraces)){
        const s=r.subraces.find(x=>x.id===sid);if(!s)continue;
        if(sp.description)s.description=sp.description;
        applyTraits(s.traits,sp.traits);
      }
    }
  }

  // Ajustes de nomenclatura em PT-BR identificados durante a revisão.
  const rename=(raceId,group,id,name,subraceId=null)=>{
    const r=byId.get(raceId);if(!r)return;
    const arr=subraceId?r.subraces.find(s=>s.id===subraceId)?.traits:r[group];
    const t=arr?.find(x=>x.id===id);if(t)t.name=name;
  };
  rename('goliath','legacyTraits','size-option','Opção de Tamanho');
  rename('goliath','coreTraits','stone-s-endurance','Resistência da Pedra');
  rename('goliath',null,'storm-resistance','Resistência à Tempestade','caelumtinn');
  rename('goliath',null,'stone-hide','Pele de Pedra','pruitinn');
  rename('goliath',null,'giant-s-burning-rage','Fúria Ardente do Gigante','pyrotinn');
  rename('goliath',null,'giant-s-resilience','Resiliência do Gigante','terratinn');
  rename('halfling',null,'light-step','Passo Leve','lightfoot-halfling');
  rename('halfling',null,'shadow-form','Forma Sombria','stonewood-halfling');
  rename('hanyou',null,'fiend','Ínfero','inheritor');
  rename('ilthrak-yar','mixedBloodTraits','poison-resistance','Resistência a Veneno');
  rename('ilthrak-yar',null,'exo-claws','Exogarras','brachaya');

  if(window.GRIMORIO_RACE_RULES){
    window.GRIMORIO_RACE_RULES.textQuality='As Fases 1–3 concluíram a revisão textual integral de 22 das 34 raças. As raças marcadas como Texto integral revisado exibem a regra mecânica completa em PT-BR; as demais permanecem explicitamente em modo de resumo até sua fase de auditoria.';
  }
})();
