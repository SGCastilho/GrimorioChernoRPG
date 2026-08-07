'use strict';

// Conteúdo de classe exclusivo de Costa da Espada: Guia de Aventureiros.
// Subclasses posteriormente republicadas em Xanathar/Tasha não são duplicadas aqui.
(function () {
  const SOURCE = 'Costa da Espada — Guia de Aventureiros — D&D 5e';
  const additions = [
    {
      id: 'scag-caminho-da-furia-da-batalha',
      classId: 'barbarian',
      name: 'Caminho da Fúria da Batalha',
      desc: 'Conhecidos como Kuldjarg (literalmente “o machado idiota”) em Anão, furiosos de batalha são anões seguidores do deus da guerra e trilham o Caminho da Fúria. Eles se especializam em vestir armaduras com espinhos maciças e se lançar em combates, golpeando com seu próprio corpo e aterrorizando seus inimigos com a fúria da batalha.\n\nRestrição: Apenas Anões. Apenas anões podem seguir o Caminho da Fúria da Batalha. A Fúria da Batalha preenche um nicho pessoal da sociedade e cultura anã. O Mestre pode permitir esta restrição para melhor se adequar à campanha; ela existe para os Reinos Esquecidos e pode não se aplicar a outro cenário.',
      sourcePage: 121,
      source: { title: SOURCE, pages: '121', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'FÚRIA COM ARMADURA', level: 3, page: 121, sourceTitle: SOURCE,
          text: 'Quando você escolhe esse caminho no 3º nível, você recebe a habilidade de usar a armadura com espinhos (veja a coluna lateral “Armadura com Espinhos”) como uma arma.\n\nEnquanto estiver usando esta armadura com espinhos e estiver em fúria, você pode usar sua ação bônus para fazer um ataque corpo a corpo usando sua armadura de espinhos em um alvo a até 1,5m de você. Se o ataque acertar, os espinhos causam 1d4 de dano perfurante. Use seu modificador de Força para as jogadas de ataque e de dano. Adicionalmente, quando você usa a ação Atacar para agarrar uma criatura, o alvo recebe 3 pontos de dano se o seu agarrão tiver sucesso.'
        },
        {
          title: 'ENTREGA IMPRUDENTE', level: 6, page: 121, sourceTitle: SOURCE,
          text: 'Começando no 6º nível, quando você usa Entrega Imprudente enquanto estiver em fúria, você também recebe pontos de vida temporários igual ao seu modificador de Constituição (mínimo de 1). Eles somem se qualquer um deles restar quando a fúria terminar.'
        },
        {
          title: 'INVESTIDA FURIOSA', level: 10, page: 121, sourceTitle: SOURCE,
          text: 'A partir do 10º nível, você pode fazer uma ação de Corrida como uma ação bônus enquanto estiver em Fúria.'
        },
        {
          title: 'RETRIBUIÇÃO FARPADA', level: 14, page: 121, sourceTitle: SOURCE,
          text: 'Começando no 14º nível, quando uma criatura a até 1,5m de você o acerta com um golpe corpo a corpo, esse atacante recebe 3 pontos de dano caso você esteja em fúria, não esteja inconsciente e esteja usando uma armadura com espinhos.'
        }
      ],
      tables: [
        {
          title: 'Armadura com Espinhos',
          columns: [
            { key: 'item', label: 'Item' }, { key: 'value', label: 'Valor' }
          ],
          rows: [
            { item: 'Tipo', value: 'Armadura média rara de fabricação anã' },
            { item: 'Custo', value: '75 po' },
            { item: 'CA', value: '14 + modificador de Destreza (máx. +2)' },
            { item: 'Furtividade', value: 'Desvantagem' },
            { item: 'Peso', value: '20 kg' }
          ]
        }
      ]
    },
    {
      id: 'scag-dominio-arcano',
      classId: 'cleric',
      name: 'Domínio Arcano',
      desc: 'Magia é uma energia que impregna o multiverso e que abastece tanto a destruição quanto a criação. Deuses do Domínio Arcano conhecem os segredos e o potencial da magia intimamente. Para alguns desses deuses, conhecimento mágico é uma grande responsabilidade que vem com um entendimento especial da natureza da realidade. Outros deuses deste domínio veem a magia como puro poder, para ser usado como sua manipulação lhe convir.\n\nOs deuses deste domínio são frequentemente associados ao conhecimento, já que aprender um poder arcano tende a ser feito passando de mão em mão. Nos Reinos, divindades deste domínio incluem Azuth e Mystra. Como também Corellon Larethian do panteão élfico. Em outros mundos este domínio incluem Hecate, Math Mathonwy, e Isis; os deuses da tripla lua de Solinari, Lunitari e Nuitari de Krynn; e Boccob, Vecna e Wee Jas de Greyhawk.',
      sourcePage: 125,
      source: { title: SOURCE, pages: '125–126', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'INICIADO ARCANO', level: 1, page: 125, sourceTitle: SOURCE,
          text: 'Quando você escolhe esse domínio no 1º nível, você ganha proficiência na perícia Arcanismo, e você ganha dois truques da lista de mago à sua escolha. Para você, estes truques contam como truques de clérigo.'
        },
        {
          title: 'MAGIAS DO DOMÍNIO ARCANO', level: 1, page: 125, sourceTitle: SOURCE,
          text: 'Você recebe as magias de domínio mostradas na tabela Magias do Domínio Arcano nos níveis indicados.'
        },
        {
          title: 'CANALIZAR DIVINDADE: ABJURAÇÃO ARCANA', level: 2, page: 125, sourceTitle: SOURCE,
          text: 'A partir do 2º nível, você pode usar seu Canalizar Divindade para abjurar criaturas de mundos exteriores.\n\nComo uma ação, você pressiona seu símbolo sagrado, e um celestial, elemental, demônio, ou ser feérico da sua escolha, que esteja a até 9 metros de você, precisa fazer um TR de Sabedoria, considerando que a criatura possa ver e ouvir você. Se a criatura falhar no teste de resistência, ela está excomungada por 1 minuto ou até levar algum dano.\n\nUma criatura excomungada deve gastar seu turno tentando se mover para distante de você o quanto ela puder, e não pode por vontade própria terminar seu movimento em uma distância menor que 9 metros de você. Ela também não pode tomar reações. Como ação, ela pode apenas usar Corrida ou tentar escapar de um efeito que evite ela de se mover. Se não tiver para onde se mover a criatura pode usar a ação Esquiva.\n\nDepois de alcançar o 5º nível, quando uma criatura falha no teste de resistência contra sua Abjuração Arcana, a criatura é banida por um minuto (como na magia banimento, mas sem requerer concentração) se não estiver no seu plano de origem e seu nível de desafio for igual ou menor ao limite estipulado na tabela de Banimento Arcano.'
        },
        {
          title: 'DESTRUIDOR DE MAGIA', level: 6, page: 126, sourceTitle: SOURCE,
          text: 'A partir do 6º nível, quando você restaura os pontos de vida de um aliado com uma magia de nível 1 ou maior, você também pode encerrar uma magia à sua escolha que estiver sobre essa criatura. O nível da magia que você pode encerrar deve ser menor ou igual ao nível do espaço de magia usado para a magia de cura.'
        },
        {
          title: 'CONJURAÇÃO POTENCIALIZADA', level: 8, page: 126, sourceTitle: SOURCE,
          text: 'A partir do 8º nível, você adiciona seu modificador de Sabedoria para os danos que você causa com truques de clérigo.'
        },
        {
          title: 'MESTRE ARCANO', level: 17, page: 126, sourceTitle: SOURCE,
          text: 'No 17º nível, você escolhe quatro magias da lista de magias do mago, uma para cada um dos seguintes níveis: 6º, 7º, 8º e 9º. Você as adiciona para sua lista de magias de domínio. Assim como suas outras magias de domínio, eles já estão sempre preparadas e contam como magias de clérigo para você.'
        }
      ],
      tables: [
        {
          title: 'Magias do Domínio Arcano',
          columns: [{ key: 'level', label: 'Nível do Clérigo' }, { key: 'spells', label: 'Magias' }],
          rows: [
            { level: '1º', spells: 'Detectar Magia; Mísseis Mágicos' },
            { level: '3º', spells: 'Arma Mágica; Aura Mágica de Nystul' },
            { level: '5º', spells: 'Dissipar Magia; Círculo Mágico' },
            { level: '7º', spells: 'Olho Arcano; O Baú Secreto de Leomund' },
            { level: '9º', spells: 'Ligação Planar; Círculo de Teleportação' }
          ]
        },
        {
          title: 'Banimento Arcano',
          columns: [{ key: 'level', label: 'Nível do Clérigo' }, { key: 'cr', label: 'ND das Criaturas Banidas' }],
          rows: [
            { level: '5º', cr: '1/2 ou menor' },
            { level: '8º', cr: '1 ou menor' },
            { level: '11º', cr: '2 ou menor' },
            { level: '14º', cr: '3 ou menor' },
            { level: '17º', cr: '4 ou menor' }
          ]
        }
      ]
    },
    {
      id: 'scag-cavaleiro-dragao-purpura',
      classId: 'fighter',
      name: 'Cavaleiro Dragão Púrpura',
      desc: 'Cavaleiros Dragões Púrpuras são guerreiros vindos do reino de Cormyr. Comprometidos em proteger a coroa, eles ampliam sua luta contra o mal além das fronteiras do reino. Eles são incumbidos de vagar pela terra como cavaleiros errantes, confiando em seu julgamento, bravura e lealdade ao código de cavalaria, para guiá-los a fim de derrotar os malfeitores.\n\nUm cavaleiro dragão púrpura inspira grandeza em outros por cometer atos de bravura em batalha. A mera presença de um cavaleiro em uma aldeia é suficiente para fazer com que orcs e bandidos prefiram outras presas mais fáceis. Um cavaleiro solitário é um guerreiro habilidoso, mas um cavaleiro liderando um bando de aliados pode transformar mesmo a mais pobremente equipada milícia em um bando de guerra feroz.\n\nRestrição: Fidalgia. Cavaleiros dragão púrpura são ligados a uma ordem específica de cavaleiros Cormyrianos. “Ginete” serve como um nome genérico para este arquétipo se você utilizar esse molde em outra campanha ou como exemplo de senhores de guerra que não Cavaleiros Dragão Púrpura.',
      sourcePage: 128,
      source: { title: SOURCE, pages: '128', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'PRANTO DA UNIÃO', level: 3, page: 128, sourceTitle: SOURCE,
          text: 'Quando você escolhe esse arquétipo, no 3º nível você aprende como inspirar seus aliados para a luta, ignorando seus ferimentos.\n\nQuando você usa sua característica de Retomar o Fôlego, você pode escolher até três criaturas a até 18 metros de você que sejam aliadas. Cada uma recupera pontos de vida iguais ao seu nível de guerreiro, desde que a criatura possa ver e ouvir você.'
        },
        {
          title: 'ENVIADO REAL', level: 7, page: 128, sourceTitle: SOURCE,
          text: 'Um cavaleiro Dragão Púrpura serve como um enviado da coroa Cormyriana. É esperado de cavaleiros de alto posto uma conduta graciosa.\n\nNo 7º nível você ganha proficiência na perícia Persuasão. Se você já for proficiente nisto, você ganha proficiência em um das seguintes perícias à sua escolha: Adestrar Animais, Intuição, Intimidação, ou Atuação.\n\nSeu bônus de proficiência é dobrado para qualquer teste de habilidade que você faça que use Persuasão. Você recebe este benefício independente da proficiência em perícia que você ganha desta característica.'
        },
        {
          title: 'ONDA INSPIRADORA', level: 10, page: 128, sourceTitle: SOURCE,
          text: 'A partir do 10º nível quando você usa sua característica de Pulso de Ação, você pode escolher uma criatura aliada a até 18 metros de você. Esta criatura pode fazer um ataque corpo a corpo ou à distância como uma reação, desde que ela possa ver e ouvir você.\n\nA partir do nível 17, você pode escolher até dois aliados a 18 metros de você, ao invés de um.'
        },
        {
          title: 'BASTIÃO', level: 15, page: 128, sourceTitle: SOURCE,
          text: 'A partir do 15º nível, você pode ampliar os benefícios de sua característica de Indomado para um aliado. Quando você decide usar o Indomado para jogar novamente um teste de resistência de Sabedoria, Inteligência ou Carisma, e você não está incapacitado, você pode escolher um aliado a até 18 metros de você que também tenha falhado no TR contra este mesmo efeito. Se essa criatura puder ver e ouvir você, ela pode jogar novamente o TR e deve usar o novo resultado.'
        }
      ]
    },
    {
      id: 'scag-caminho-da-morte-extensa',
      classId: 'monk',
      name: 'Caminho da Morte Extensa',
      desc: 'Monges do Caminho da Morte Extensa são obcecados com os meios e mecanismos da morte. Eles capturam criaturas e preparam elaborados experimentos para coletar, registrar e entender o momento do passamento. Então eles usam esse conhecimento para guiar sua compreensão das artes marciais, moldando um estilo de luta mortal.',
      sourcePage: 130,
      source: { title: SOURCE, pages: '130–131', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'TOQUE DA MORTE', level: 3, page: 130, sourceTitle: SOURCE,
          text: 'Quando você escolhe essa tradição, a partir do 3º nível seus estudos da morte lhe permitem extrair vitalidade de uma outra criatura que esteja próxima do passamento. Quando você reduz uma criatura a 1,5m de você a 0 pontos de vida, você ganha pontos de vida temporários igual ao seu modificador de Sabedoria + seu nível de monge (mínimo de 1 ponto de vida temporário).'
        },
        {
          title: 'HORA DA COLHEITA', level: 6, page: 130, sourceTitle: SOURCE,
          text: 'No 6º nível, você ganha a habilidade de abalar ou amedrontar aqueles à sua volta como uma ação, pois sua alma tem sido tocada pela sombra da morte. Quando você usa essa ação, toda criatura a 9 metros de você que lhe possa ver, deve ter sucesso em um TR de Sabedoria ou ficará amedrontada até o final do próximo turno do monge.'
        },
        {
          title: 'CONTROLE DA MORTE', level: 11, page: 131, sourceTitle: SOURCE,
          text: 'A partir do 11º nível você usa de sua familiaridade com a morte para escapar de suas garras. Quando você é reduzido a 0 pontos de vida, você pode gastar 1 ponto de ki (nenhuma ação é requerida) para retornar a 1 ponto de vida.'
        },
        {
          title: 'TOQUE DA MORTE EXTENSA', level: 17, page: 131, sourceTitle: SOURCE,
          text: 'A partir do 17º nível seu toque pode canalizar a energia da morte em uma criatura. Como uma ação, você toca uma criatura a até 1,5m de você, e você gasta de 1 a 10 pontos de ki. O alvo deve fazer um TR de Constituição, e recebe 2d10 de dano necrótico por ponto de ki gasto se falhar no teste, ou metade se tiver sucesso.'
        }
      ]
    },
    {
      id: 'scag-juramento-da-coroa',
      classId: 'paladin',
      name: 'Juramento da Coroa',
      desc: 'O Juramento da Coroa é juramentado aos ideais da civilização, em ser o espírito de uma nação, fiel a uma soberania, ou subserviente a uma divindade de lei e regência. Os paladinos que abraçam este juramento se dedicam a servir a sociedade e, em particular, às leis justas que mantêm a sociedade unida. Esses paladinos são guardiões vigilantes nas muralhas, se impondo contra as marés caóticas do barbarismo que ameaçam por abaixo tudo o que a civilização ergueu, eles são comumente conhecidos como guardiões, exemplares ou sentinelas. Frequentemente paladinos servos desta ordem são membros de uma ordem de fidalgia aos serviços de uma nação ou de um soberano, e submetem seu juramento como parte de sua admissão para sua qualificação junto à ordem.',
      sourcePage: 132,
      source: { title: SOURCE, pages: '132–133', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'DOGMAS DA COROA', level: 3, page: 133, sourceTitle: SOURCE,
          text: 'Os dogmas do Juramento da Coroa são frequentemente impostos pela soberania a qual se é juramentado, mas geralmente enfatiza os seguintes princípios.\n\nLei. A lei é suprema. É o alicerce que mantêm as pedras da civilização unidas, e como tal deve ser respeitada.\n\nLealdade. Sua palavra é sua obrigação. Sem lealdade, juramentos e leis perdem seu significado.\n\nCoragem. Você deve fazer o que for necessário para manter a ordem. Mesmo em face da maior desvantagem. Se você não tomar uma atitude, quem tomará?\n\nResponsabilidade. Você deve lidar com as consequências de suas ações e você é responsável pela execução de seus deveres e obrigações.'
        },
        {
          title: 'MAGIAS DE JURAMENTO', level: 3, page: 133, sourceTitle: SOURCE,
          text: 'Você ganha as magias de juramento de acordo com o nível de paladino da lista.'
        },
        {
          title: 'CANALIZAR DIVINDADE', level: 3, page: 133, sourceTitle: SOURCE,
          text: 'Quando você escolhe esse juramento no 3º nível, você recebe as seguintes opções de Canalizar Divindade.\n\nDesafio do Campeão. Você emite um desafio que compele outras criaturas a batalhar com você. Cada criatura à sua escolha que você possa ver a até 9 metros de você deve fazer um TR de Sabedoria. Se falhar, uma criatura não pode, por vontade própria, se mover para além de 9 metros de distância de você. Este efeito se encerra sobre a criatura se você morrer ou ficar incapacitado ou se a criatura de algum modo se mover para além de 9 metros de você.\n\nMudar a Maré. Como uma ação bônus, você pode auxiliar criaturas machucadas com o seu Canalizar Divindade. Cada criatura à sua escolha que possa lhe ouvir a até 9 metros de você, recupera pontos de vida igual a 1d6 + seu modificador de Carisma (mínimo de 1 ponto de vida) caso ele não tenha mais da metade dos pontos de vida.'
        },
        {
          title: 'ALIANÇA DIVINA', level: 7, page: 133, sourceTitle: SOURCE,
          text: 'A partir do nível 7, quando uma criatura a até 1,5m de você recebe dano, você pode usar sua reação para magicamente substituir sua própria saúde para a criatura alvo, fazendo com que a criatura não receba o dano. Ao invés disso, você recebe o dano. Este dano causado em você não pode ser reduzido ou prevenido de nenhuma forma.'
        },
        {
          title: 'ESPÍRITO OBSTINADO', level: 15, page: 133, sourceTitle: SOURCE,
          text: 'A partir do nível 15, você possui vantagem nos testes de resistência para evitar ser paralisado ou aturdido.'
        },
        {
          title: 'CAMPEÃO EXALTADO', level: 20, page: 133, sourceTitle: SOURCE,
          text: 'No 20º nível, sua presença no campo de batalha é uma inspiração para aqueles dedicados à sua causa. Você pode usar sua ação para ganhar os seguintes benefícios durante 1 hora:\n\n• Você ganha resistência a danos de concussão, cortante e perfurante de armas não mágicas.\n• Seus aliados têm vantagem nos testes de resistência contra morte enquanto estiverem a até 9 metros de você.\n• Você tem vantagem nos testes de resistência de Sabedoria, assim como seus aliados a até 9 metros de você.\n\nEste efeito logo se encerra assim que você morrer ou ficar incapacitado. Uma vez que você usar essa habilidade, ela somente poderá ser usada novamente após um descanso longo.'
        }
      ],
      tables: [
        {
          title: 'Magias do Juramento da Coroa',
          columns: [{ key: 'level', label: 'Nível de Paladino' }, { key: 'spells', label: 'Magias' }],
          rows: [
            { level: '3º', spells: 'Comando; Duelo Compelido' },
            { level: '5º', spells: 'Elo de Proteção; Zona da Verdade' },
            { level: '9º', spells: 'Aura da Vitalidade; Guardiões Espirituais' },
            { level: '13º', spells: 'Banimento; Guardião da Fé' },
            { level: '17º', spells: 'Círculo de Poder; Obrigação' }
          ]
        }
      ]
    },
    {
      id: 'scag-o-eterno',
      classId: 'warlock',
      name: 'O Eterno',
      desc: 'A foice da morte não ceifa seu patrono, o qual descobriu os segredos da vida eterna, embora com o prêmio — como toda forma de poder — isso veio com um preço. Outrora mortal, o Eterno assiste a vida dos mortais passar como estações, os dias e noites como um estalo. Ele possui os segredos das eras para compartilhar, os segredos da vida e da morte. Patronos deste tipo incluem Vecna, Senhor da Mão e do Olho; o pavor reluzente; a rainha lich Vol; a Eterna Corte de Aerenal; Vlaakith, a rainha lich dos githyankis; e o mago imortal Fistandantalus. Nos Reinos, patronos Eternos incluem Larloch o Rei Sombrio, mestre lendário da Cripta do Bruxo, e Gilgeam, o Deus Rei de Unther.',
      sourcePage: 139,
      source: { title: SOURCE, pages: '139–140', chapter: 'Capítulo 4: Classes' },
      features: [
        {
          title: 'LISTA DE MAGIA EXPANDIDA', level: 1, page: 139, sourceTitle: SOURCE,
          text: 'O Eterno permite que você escolha de uma lista de magia expandida quando você aprende uma magia de bruxo. As seguintes magias são adicionadas à lista de magias do bruxo para você.'
        },
        {
          title: 'ENTRE OS MORTOS', level: 1, page: 139, sourceTitle: SOURCE,
          text: 'Começando no 1º nível, você aprende o truque poupar os mortos, o qual conta como um truque de bruxo para você. Você também ganha vantagem nos testes de resistência contra qualquer doença.\n\nAdicionalmente, mortos vivos têm dificuldade em lhe machucar. Se um morto vivo lhe tomar como alvo direto de um ataque ou alvo direto de uma magia, tal criatura precisa fazer um TR de Sabedoria contra sua CD de resistência a magia (um morto vivo não precisa fazer esse teste se você for alvo de um efeito de magia em área, como uma explosão de bola de fogo). Se falhar no teste, a criatura deve escolher um novo alvo ou prevaricar um outro alvo que não você, potencialmente desperdiçando o ataque ou a magia. Em um teste bem sucedido, a criatura fica imune a este efeito por 24 horas. Um morto-vivo também é imune a este efeito por 24 horas se você o fizer alvo de um ataque ou de uma magia nociva.'
        },
        {
          title: 'INCITANDO A MORTE', level: 6, page: 140, sourceTitle: SOURCE,
          text: 'A partir do 6º nível você pode dar vitalidade a si próprio quando você engana a morte ou quando você ajuda alguém a enganá-la. Você pode recuperar pontos de vida igual a 1d8 + seu modificador de Constituição (mínimo de 1 ponto de vida) quando você tiver sucesso em um TR contra morte ou quando você estabiliza uma criatura com poupar os mortos.\n\nUma vez que você usar esta habilidade, você precisa de um descanso longo para recuperá-la.'
        },
        {
          title: 'NATUREZA IMORTAL', level: 10, page: 140, sourceTitle: SOURCE,
          text: 'A partir do 10º nível, você pode prender o fôlego por tempo indefinido, e você não precisa de comida, água, ou mesmo dormir, embora você ainda precise dormir para reduzir os efeitos da exaustão e se beneficiar de efeitos pós-descansos curtos e longos.\n\nEm suma, você envelhece lentamente. Para cada 10 anos passados, seu corpo envelhece apenas 1 ano, e você fica imune a magias de envelhecimento.'
        },
        {
          title: 'VIDA INDESTRUTÍVEL', level: 14, page: 140, sourceTitle: SOURCE,
          text: 'Quando você alcança o 14º nível você partilha de alguns dos verdadeiros segredos do Eterno. No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a 1d8 + seu nível de bruxo. Adicionalmente, quando você repõe uma parte partida do seu corpo ao lugar de origem, quando usa esta habilidade, essa parte se une novamente ao seu corpo.\n\nUma vez que tiver usado essa habilidade, você não pode usar novamente até que termine um descanso curto ou longo.'
        }
      ],
      tables: [
        {
          title: 'Magias Expandidas do Eterno',
          columns: [{ key: 'level', label: 'Nível de Magia' }, { key: 'spells', label: 'Magias' }],
          rows: [
            { level: '1º', spells: 'Falsa Vida; Raio da Doença' },
            { level: '2º', spells: 'Cegueira/Surdez; Silêncio' },
            { level: '3º', spells: 'Morte Fingida; Falar com os Mortos' },
            { level: '4º', spells: 'Aura da Vida; Vigília da Morte' },
            { level: '5º', spells: 'Contágio; Conhecimento Lendário' }
          ]
        }
      ]
    }
  ];

  window.GRIMORIO_SUBCLASSES = window.GRIMORIO_SUBCLASSES || [];
  const existing = new Set(window.GRIMORIO_SUBCLASSES.map(x => x.id));
  for (const s of additions) {
    if (!existing.has(s.id)) {
      window.GRIMORIO_SUBCLASSES.push(s);
      existing.add(s.id);
    }
  }

  // Costa da Espada também amplia o Caminho do Guerreiro Totêmico com Cervo e Tigre.
  const totem = window.GRIMORIO_SUBCLASSES.find(x => x.id === 'guerreiro-totemico');
  if (totem && !totem._scagExpanded) {
    const spirit = totem.features?.find(f => f.title === 'TOTEM ESPIRITUAL');
    const aspect = totem.features?.find(f => f.title === 'ASPECTO DA BESTA');
    const attunement = totem.features?.find(f => f.title === 'SINTONIA TOTÊMICA');
    if (spirit) spirit.text += '\n\nOpções da Costa da Espada:\n\nCervo. Enquanto você está em fúria e não está usando armadura pesada, seu deslocamento aumenta em 4,5m. O espírito do cervo torna você extremamente veloz.\n\nTigre. Enquanto você está em fúria, você pode adicionar 3 metros ao seu salto em distância e 90cm ao seu salto em distância vertical. O espírito do tigre aprimora seu salto.';
    if (aspect) aspect.text += '\n\nOpções da Costa da Espada:\n\nCervo. Quando montado ou a pé, sua caminhada de travessia é duplicada, até dez companheiros podem manter este ritmo de caminhada com você desde que não estejam a mais de 18 metros e que você não esteja incapacitado. O espírito do cervo lhe ajuda a vagar mais distante e veloz.\n\nTigre. Você recebe duas proficiências em duas perícias da seguinte lista: Atletismo, Acrobacia, Furtividade e Sobrevivência. O espírito gatuno afia seu senso de sobrevivência.';
    if (attunement) attunement.text += '\n\nOpções da Costa da Espada:\n\nCervo. Enquanto em fúria, você pode usar uma ação bônus durante seu movimento para passar através do espaço de uma criatura Grande ou menor. Esta criatura precisa ter sucesso em um TR de Força (CD 8 + seu modificador de Força + seu bônus de proficiência) ou será derrubada e receberá dano de concussão equivalente a 1d12 + seu modificador de Força.\n\nTigre. Enquanto você está em fúria, se você se mover ao menos 6 metros em linha reta até um inimigo que seja Grande ou menor em um momento antes de fazer um ataque corpo a corpo contra ele, você pode usar sua ação bônus para fazer um ataque corpo a corpo adicional contra ele.';
    totem.tables = totem.tables || [];
    totem.tables.push({
      title: 'Totens Uthgardt',
      columns: [{ key: 'totem', label: 'Totem' }, { key: 'spirit', label: 'Espírito' }],
      rows: [
        { totem: 'Leão Negro', spirit: 'Tigre' }, { totem: 'Corvo Negro', spirit: 'Águia' },
        { totem: 'Urso Azul', spirit: 'Urso' }, { totem: 'Lobo Cinzento', spirit: 'Lobo' },
        { totem: 'Verme Gigante', spirit: 'Lobo' }, { totem: 'Griffon', spirit: 'Águia' },
        { totem: 'Tigre Vermelho', spirit: 'Tigre' }, { totem: 'Pônei Alado', spirit: 'Águia, com um aspecto animal de Cervo' },
        { totem: 'Fera do Trovão', spirit: 'Urso, com uma ligação totêmica com um Tigre' },
        { totem: 'Árvore dos Espíritos', spirit: 'Urso, com falar com plantas nos rituais normais da característica de Espreitador dos Espíritos' }
      ]
    });
    totem.otherSources = [...(totem.otherSources || []), { title: SOURCE, pages: '121–122', note: 'Opções adicionais de Cervo e Tigre para Espírito Totem, Aspecto da Besta e Ligação Totêmica.' }];
    totem._scagExpanded = true;
  }

  // Republicações: registramos aliases/origem sem criar uma segunda subclasse no catálogo.
  const aliases = [
    ['xanathar-estilo-da-alma-solar', 'Caminho da Alma do Sol', '130–131'],
    ['xanathar-mentor', 'Manipulador', '135'],
    ['xanathar-espadachim', 'Espadachim', '135–136'],
    ['xanathar-feiticeiro-da-tempestade', 'Feiticeiro da Tempestade', '137'],
    ['tasha-lamina-cantante', 'Lâmina Cantante', '141–142']
  ];
  for (const [id, alias, pages] of aliases) {
    const s = window.GRIMORIO_SUBCLASSES.find(x => x.id === id);
    if (!s) continue;
    s.aliases = [...new Set([...(s.aliases || []), alias])];
    s.otherSources = [...(s.otherSources || []), { title: SOURCE, pages, note: 'Versão publicada em Costa da Espada; o Grimório mantém a versão canônica já catalogada para evitar duplicação.' }];
  }

  window.GRIMORIO_SCAG_SUBCLASSES = additions;
})();
