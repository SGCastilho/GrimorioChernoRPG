'use strict';
// Somnus Domina — Blade, Bone, & Benefit: Capítulo VII — Raças & Subraças (p. 25–62).
// Integração v5.45.0: 3 raças novas (9 subraças) + 81 subraças adicionais para raças de Lyre.
(function(){
  const SOURCE='Somnus Domina — Blade, Bone, & Benefit';
  const SOURCE_ID='blade-bone-benefit';
  const slug=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const T=(name,originalName,description,page,extra={})=>({id:slug(originalName),name,originalName,summary:description,page,description,...extra});
  const S=(name,originalName,page,ability,description,bloodlineTrait,traits,extra={})=>({
    id:slug(originalName),name,originalName,page,source:SOURCE,sourceId:SOURCE_ID,ability,description,bloodlineTrait,...extra,traits
  });
  const raceById=id=>(window.GRIMORIO_RACES||[]).find(r=>r.id===id);
  const append=(raceId,subs)=>{const r=raceById(raceId);if(!r)throw new Error('Raça-base ausente para Blade, Bone, & Benefit: '+raceId);r.subraces.push(...subs);};

  const newRaces=[
    {
      id:'animus',name:'Animus',originalName:'Animus',source:SOURCE,sourceId:SOURCE_ID,sourcePage:29,textRevision:'full',
      summary:'Construto autoconsciente que desenvolveu individualidade, vontade própria e uma centelha semelhante a uma alma, mantendo a resistência e a natureza artificial de sua forma.',
      abilityScore:'Inteligência +2; atributo da subraça +1. Alternativamente, conforme as regras 5.19 da fonte: +2/+1, +1/+1/+1 ou a opção de potencial futuro até 22.',
      meta:{creatureTypes:'Humanoide, Construto, Animus',lifeExpectancy:'Indefinida; limitada apenas pela durabilidade dos materiais do corpo',nationalAlignment:'Outro',planarOrigin:'Transiq Machina ou Ira Machina',planetouched:'Exceção — Manufaturado',regions:'Variável',size:'Pequeno / Médio / Grande',alignment:'Variável; frequentemente definido pela relação com leis, programação e autonomia',languages:'Comum e os idiomas de seu criador',speed:'9 m (30 pés)'},
      lore:[
        {title:'Visão geral',text:'Animus são construtos que desenvolveram a capacidade de pensar e agir por conta própria, adquirindo uma individualidade reconhecível por outros humanoides. Ainda carregam imperativos arcanos ou tecnológicos de sua programação original, mas podem reconstruí-los ou ignorá-los.'},
        {title:'Semelhança evoluída',text:'A maioria dos animus surge em construtos já moldados à imagem de humanoides — ídolos, estátuas, guardiões e máquinas semelhantes. Sua capacidade de concentrar energia para reparar o próprio corpo aproxima sua recuperação da de seres vivos e faz com que descanso e sono tenham importância incomum para construtos.'},
        {title:'Autodefinição',text:'Animus frequentemente entram em conflito com criadores que continuam tratando-os como propriedade. Quando rompem essas amarras, muitos buscam propósito, aventura ou uma razão para enfrentar a perspectiva existencial de uma vida potencialmente interminável.'}
      ],
      coreTraits:[
        T('Armadura Avançada','Advanced Armoring','Enquanto não estiver vestindo armadura, você pode adicionar seu bônus de proficiência à sua Classe de Armadura.',29),
        T('Idade','Age','Animus vivem enquanto os materiais físicos que compõem seus corpos puderem continuar existindo.',29),
        T('Tendência','Alignment','A tendência de um animus é definida por sua predisposição a leis e padrões. Eles podem ser caóticos, leais ou neutros e não possuem uma inclinação moral fixa.',29),
        T('Corpo de Intenção','Body of Intention','Você é imune a dano de veneno e à condição Envenenado. Você ainda pode sofrer Exaustão, mas sofre seus efeitos como se tivesse metade dos níveis de Exaustão que realmente possui. O sexto nível de Exaustão ainda causa sua morte.',29),
        T('Qualidades de Construto','Construct Qualities','Você não precisa comer, beber nem respirar.',29),
        T('Tipo de Criatura','Creature Type','Além de ser um Animus e um Humanoide, você também é um Construto.',29),
        T('Sentidos sem Olhos','Eyeless Senses','Você possui Visão às Cegas a 9 metros (30 pés).',29),
        T('Idiomas','Languages','Você fala Comum e os idiomas de seu criador.',29),
        T('Deslocamento','Speed','Seu deslocamento-base é 9 metros (30 pés).',29)
      ],
      legacyChoices:2,
      legacyTraits:[
        T('Furtividade Animada','Animated Stealth','Ao se confundir com o ambiente como um objeto imóvel, você pode enganar até observadores atentos. Você possui Especialização em Furtividade.',29),
        T('Realinhamento','Realignment','Sempre que um teste de perícia ou de atributo exigiria Força, você pode usar Constituição no lugar.',29),
        T('Ação Repetida','Repeating Action','Quando fizer uma jogada de ataque, teste de atributo ou teste de resistência, você pode registrar o resultado do d20 e usar esse resultado no lugar de todas as suas jogadas do mesmo tipo até o início de seu próximo turno. Jogadas repetidas desta forma não podem provocar acertos críticos, mas um resultado 20 ainda acerta automaticamente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.',29),
        T('Autoaperfeiçoamento','Self Improvement','Você pode produzir os efeitos de *aprimorar habilidade*, sem gastar espaço de magia nem componentes e tendo apenas a si mesmo como alvo, um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Você pode produzir esses efeitos como uma ação bônus.',30),
        T('Imóvel','Unmoving','Você não pode ser movido para fora do seu espaço contra a sua vontade, a menos que esteja Incapacitado, e possui vantagem em testes de atributo e testes de resistência feitos para evitar ficar Caído.',30),
        T('Maestria em Armas','Weapon Mastery','Você é proficiente em todas as armas simples e marciais, exceto armas de fogo; alternativamente, pode escolher ser proficiente em armas de fogo simples e marciais no lugar dessas proficiências.',30)
      ],
      mixedBloodTraits:[
        T('Linhagem','Bloodline','Você só pode escolher este traço uma vez. Escolha uma subraça de Animus e receba o Traço de Linhagem correspondente.',30),
        T('Corpo de Intenção','Body of Intention','Você recebe o traço Corpo de Intenção do Animus.',30),
        T('Sentidos sem Olhos','Eyeless Senses','Você recebe o traço Sentidos sem Olhos do Animus. Se Animus for sua raça secundária, você também é considerado um Construto além de seus outros tipos de criatura.',30)
      ],
      subraces:[
        S('Jurado pelos Circuitos','Sworn by Circuits',30,'Inteligência +1','Construtos avançados baseados em tecnologia exolunar ou civilizações de alta tecnologia. Costumam ser mais móveis, de desenho mais refinado e criados para funções altamente específicas.','Especialista em Processamento',[
          T('Barreira Arcana','Arcane Barrier','Você pode produzir os efeitos de *escudo* um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.',30),
          T('Reconhecimento de Padrões','Pattern Recognition','Quando fizer uma jogada de d20 para uma jogada de ataque, teste de atributo ou teste de resistência em seu turno e falhar, todas as jogadas de ataque, testes de atributo e testes de resistência subsequentes que fizer nesse turno têm vantagem até que uma delas seja bem-sucedida.',30),
          T('Especialista em Processamento','Processing Expert','Você pode usar Inteligência como sua habilidade de conjuração para qualquer característica, traço, efeito ou item que exija uma habilidade de conjuração.',30)
        ]),
        S('Jurado pela Lei','Sworn by Law',30,'Sabedoria +1','Construtos cuja individualidade emergiu da própria programação e da lógica fria inerente à vida artificial, expressando autonomia por meio de raciocínio rigoroso e articulação precisa.','Recusa sem Mestre',[
          T('Proficiências Consagradas','Enshrined Proficiencies','Escolha duas perícias. Você possui Especialização em ambas, representando funções para as quais foi construído.',30),
          T('Recusa sem Mestre','Masterless Refusal','Quando uma criatura tentar usar uma magia ou efeito para forçá-lo a agir contra sua vontade, você pode escolher não fazer nada em vez disso. Se o fizer, fica Atordoado até a próxima vez em que seria capaz de realizar uma ação por vontade própria.',30),
          T('Solução Testada','Tested Solution','Quando fizer uma jogada de ataque, teste de atributo ou teste de resistência e obtiver 9 ou menos no d20, você ganha 1 Ponto de Solução. Você pode manter um número de Pontos de Solução igual ao seu bônus de proficiência e perde todos ao concluir um Descanso. Antes de fazer uma jogada de ataque, teste de atributo ou teste de resistência, pode gastar qualquer número desses pontos; para cada ponto gasto, role 1d4 e adicione o resultado à jogada.',30)
        ]),
        S('Jurado pela Pedra','Sworn by Stone',30,'Força +1','Animus que habitam corpos de pedra ou minerais, semelhantes aos construtos clássicos encontrados em templos, santuários e domínios de arcanistas, normalmente criados para defesa.','Materiais Infalíveis',[
          T('Força Absoluta','Absolute Might','Quando falhar em um teste de atributo ou teste de resistência de Força ou Constituição, você pode tratar o resultado do d20 como 15, possivelmente alterando o resultado. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.',30),
          T('Resiliência Duradoura','Enduring Resilience','Sempre que sofrer dano contundente, perfurante ou cortante, reduza o dano sofrido em um valor igual ao seu bônus de proficiência.',30),
          T('Materiais Infalíveis','Unfailing Materials','Você possui resistência a dano ácido.',30)
        ])
      ]
    },
    {
      id:'drackal',name:'Drackal',originalName:'Drackal',source:SOURCE,sourceId:SOURCE_ID,sourcePage:31,textRevision:'full',
      summary:'Planetouched dracônico cuja alma foi marcada pela influência de Arthenaerie, exibindo crista, cauda, escamas e olhos de dragão e carregando a dignidade e a autoconfiança de sua linhagem.',
      abilityScore:'Carisma +2; atributo da subraça +1. Alternativamente, conforme as regras 5.19 da fonte: +2/+1, +1/+1/+1 ou a opção de potencial futuro até 22.',
      meta:{creatureTypes:'Humanoide, Dragão, Drackal',lifeExpectancy:'Três vezes a expectativa média de vida de sua ascendência',nationalAlignment:'Outro',planarOrigin:'Arthenaerie',planetouched:'Sim',regions:'Arthenaerie e comunidades ligadas a dragões',size:'Pequeno / Médio / Grande',alignment:'Sem tendência fixa; inclinação ao caos é comum',languages:'Comum e Dracônico',speed:'9 m (30 pés)'},
      lore:[
        {title:'Visão geral',text:'Drackal são almas tocadas pela influência dracônica de Arthenaerie. Podem nascer de uma linhagem que contenha dragões, de bênçãos ou maldições dracônicas ou de exposição ao sangue de um dragão antes ou logo após o nascimento.'},
        {title:'Ética e superioridade',text:'Drackal carregam parte da dignidade inata dos dragões, o que costuma se manifestar como honra, presença carismática e uma sensação de superioridade. Conforme envelhecem, alguns se distanciam de povos não dracônicos, embora vínculos duradouros possam moderar esse comportamento.'},
        {title:'Habitantes de Arthenaerie',text:'Muitos Drackal vivem em Arthenaerie e servem dragões de diversas tendências como campeões, emissários ou agentes especialmente visíveis quando seus patronos lidam com civilizações mortais.'}
      ],
      coreTraits:[
        T('Idade','Age','Devido à conexão dracônica, sua expectativa de vida é três vezes a expectativa média de vida de sua ascendência.',31),
        T('Tendência','Alignment','Drackal não possuem tendência fixa, mas costumam inclinar-se ao caos por seu distanciamento de padrões e leis comuns.',31),
        T('Tipo de Criatura','Creature Type','Além de ser um Drackal e um Humanoide, você também é um Dragão.',31),
        T('Coração de Dragão','Dragon’s Heart','Você pode escolher usar Carisma como habilidade de conjuração para qualquer característica, talento, traço ou item que exija uma habilidade de conjuração.',31),
        T('Idiomas','Languages','Você sabe ler, escrever e falar Comum e Dracônico.',31),
        T('Crítico Afiado','Sharp Critical','Seu limiar de acerto crítico para qualquer ataque que fizer é ampliado em 1. Além disso, quando obtiver um acerto crítico, causa dano adicional igual ao dobro do seu bônus de proficiência.',31),
        T('Deslocamento','Speed','Seu deslocamento-base é 9 metros (30 pés).',31)
      ],
      legacyChoices:2,
      legacyTraits:[
        T('Força Dracônica','Draconic Strength','Você possui Especialização em Atletismo.',31),
        T('Clarão Dracônico','Dragon Flash','Como uma ação bônus, você pode produzir os efeitos da magia *flecha cromática*, sem gastar espaço de magia nem componentes; isso não conta como uma magia ou efeito mágico. O efeito é produzido em um nível igual ao seu bônus de proficiência. Você pode usar este traço três vezes por Descanso Longo e recupera um uso gasto ao concluir um Descanso Curto.',31),
        T('Sobreposição de Herança','Heritage Overlap','Você pode escolher um Traço de Legado da lista de Traços de Legado dos Dragonkin. Não pode escolher um traço que exija um Tipo de Herança nem um Traço de Sangue Misto.',31),
        T('Resiliência Herdada','Inherited Resilience','Escolha ácido, frio, fogo, elétrico, necrótico ou veneno. Você possui resistência ao tipo de dano escolhido.',31),
        T('Escaramuça Predatória','Predatory Scramble','Escolha escalada ou natação. Você recebe o deslocamento escolhido com velocidade igual ao seu deslocamento-base.',31),
        T('Astúcia da Serpente','Serpent’s Wit','Você possui proficiência em Persuasão, Intuição e Intimidação.',31)
      ],
      mixedBloodTraits:[
        T('Linhagem','Bloodline','Você só pode escolher este traço uma vez. Escolha uma subraça de Drackal e receba o Traço de Linhagem correspondente. Se Drackal for sua raça secundária, você também é considerado um Dragão além de seus tipos de criatura normais.',31),
        T('Coração de Dragão','Dragon’s Heart','Você recebe o traço Coração de Dragão do Drackal.',31)
      ],
      subraces:[
        S('Feroz da Garra','Fierce of Claw',31,'Força +1','Drackal da Garra enfatizam velocidade e força natural. São cavaleiros, guerreiros e escaramuçadores que se movem rapidamente, golpeiam com força e exibem graça predatória.','Impulso de Movimento',[
          T('Armas Drackal','Drackal Weapons','Você pode tratar seus ataques desarmados como uma arma que causa dano cortante igual ao maior tipo de Dado de Vida que possui. Se o dado for d8 ou menor, a arma é considerada Leve e de Acuidade; se for d10 ou maior, não possui propriedades.',31),
          T('Impulso de Movimento','Movement Boost','Seu deslocamento-base aumenta em 3 metros (10 pés), e as distâncias de seus Saltos em Altura e Saltos em Distância são dobradas.',32),
          T('Táticas de Matilha','Pack Tactics','Quando fizer um ataque corpo a corpo contra uma criatura que esteja dentro do alcance corpo a corpo de um de seus aliados, você tem vantagem no ataque, desde que esse aliado não esteja Incapacitado.',32)
        ]),
        S('Feroz da Escama','Fierce of Scale',32,'Constituição +1','Drackal da Escama herdaram a robustez dos Dragonkin e apresentam mais escamas, espinhos e massa muscular que seus semelhantes, com chifres mais baixos e voltados à defesa.','Escamas Graduadas',[
          T('Escamas Graduadas','Graded Scales','Enquanto não estiver vestindo armadura, você pode calcular sua Classe de Armadura como 10 + seu modificador de Destreza + seu modificador de Constituição. Você ainda pode se beneficiar de um escudo.',32),
          T('Densidade Muscular','Muscular Density','Quando fizer um teste de atributo ou de perícia que exija seu modificador de Força, você pode usar Constituição no lugar. Se o fizer, o teste ainda é considerado um teste de Força.',32),
          T('Resistência Refrativa','Refractive Resistance','Quando sofrer qualquer tipo de dano, pode usar sua reação para obter resistência a esse tipo de dano por 1 minuto. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência; sempre que o usar, perde a resistência anteriormente concedida por este traço.',32)
        ]),
        S('Feroz da Asa','Fierce of Wing',32,'Destreza +1','Drackal da Asa são móveis, rápidos de raciocínio e possuem asas dracônicas funcionais. Seus corpos tendem a ser esguios, com menos chifres e espinhos.','Disparada da Serpente',[
          T('Especialista em Longo Alcance','Long Range Expert','Quando fizer um ataque com arma arremessável ou à distância, o alcance normal da arma é dobrado.',32),
          T('Disparada da Serpente','Serpent Dash','Você pode realizar a ação Disparada como uma ação bônus um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando faz isso, também realiza Desengajar como parte da mesma ação.',32),
          T('Alado','Winged','Suas asas dracônicas concedem deslocamento de voo igual ao seu deslocamento-base.',32)
        ])
      ]
    },
    {
      id:'noxiamorph',name:'Noxiamorfo',originalName:'Noxiamorph',source:SOURCE,sourceId:SOURCE_ID,sourcePage:33,textRevision:'full',
      summary:'Planetouched monstruoso marcado pela influência distorcida de Megiddo; sua aparência e fisiologia lembram experimentos, mortos-vivos ou predadores sobrenaturais, mas alguns desafiam essa origem e buscam seu próprio caminho.',
      abilityScore:'Força +2; atributo da subraça +1. Alternativamente, conforme as regras 5.19 da fonte: +2/+1, +1/+1/+1 ou a opção de potencial futuro até 22.',
      meta:{creatureTypes:'Humanoide, Monstruosidade, Noxiamorfo',lifeExpectancy:'Uma vez e meia a expectativa média de vida de sua ascendência',nationalAlignment:'Outro',planarOrigin:'Megiddo',planetouched:'Sim',regions:'Variável; normalmente associado a Megiddo e seus reinos',size:'Médio / Grande',alignment:'Frequentemente maligno pela influência planar, mas pode ser neutro ou bom; raramente Leal',languages:'Comum',speed:'9 m (30 pés)'},
      lore:[
        {title:'Visão geral',text:'Noxiamorfos são tocados pela natureza antinatural de Megiddo e carregam essa influência de forma visível. Em vez da graça encontrada em outros planetouched, surgem como mutantes e aberrações que muitos observadores tratam como afrontas à vida.'},
        {title:'Criação',text:'Podem nascer quando uma criatura é concebida ou nasce próxima demais de Megiddo ou de um de seus reinos, herdar a marca de um progenitor necromante ou resultar de um ritual que invoque poderes sombrios. Sua existência raramente é intencional.'},
        {title:'Além da natureza',text:'Um Noxiamorfo pode rejeitar sua origem como qualquer outro planetouched, embora preconceito e aparência monstruosa tornem isso difícil. Alguns persistem apesar do destino que lhes foi imposto e acabam no centro de histórias genuinamente heroicas.'}
      ],
      coreTraits:[
        T('Idade','Age','Sua idade segue a espécie de origem, mas sua natureza planetouched concede expectativa de vida igual a 1,5 vez a expectativa média de vida de seus progenitores.',33),
        T('Tendência','Alignment','Noxiamorfos costumam inclinar-se ao mal devido ao plano de origem, embora indivíduos neutros ou bons existam. Raramente são Leais.',33),
        T('Linguagem Bestial','Bestial Language','Você pode se comunicar com animais como se estivesse sob os efeitos de *falar com animais*.',33),
        T('Tipo de Criatura','Creature Type','Além de ser um Noxiamorfo e um Humanoide, você também é uma Monstruosidade.',33),
        T('Visão no Escuro','Darkvision','Você possui Visão no Escuro a 18 metros (60 pés).',33),
        T('Idiomas','Languages','Você sabe ler, escrever e falar Comum.',33),
        T('Resiliência Necrótica','Necrotic Resilience','Você possui resistência a dano necrótico.',33),
        T('Regeneração Paranormal','Paranormal Regeneration','Como uma ação bônus, você pode gastar qualquer número de seus Dados de Vida e rolá-los, sem adicionar seu modificador de Constituição, recuperando pontos de vida iguais ao dobro da soma dos resultados. Você pode usar este traço apenas uma vez por Descanso.',33),
        T('Deslocamento','Speed','Seu deslocamento-base é 9 metros (30 pés).',33),
        T('Impassível','Unflinching','Você possui vantagem em testes de resistência para resistir às condições Enfeitiçado e Amedrontado.',33)
      ],
      legacyChoices:2,
      legacyTraits:[
        T('Visão no Escuro das Terras Sombrias','Darkland Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, seu alcance aumenta em 18 metros (60 pés).',33),
        T('Mais que Humano','More than Man','Quando uma magia ou efeito exigir especificamente um Humanoide como alvo, como *imobilizar pessoa* ou *enfeitiçar pessoa*, você não é considerado Humanoide para esse efeito, a menos que deseje ser.',34),
        T('Força Avassaladora','Overwhelming Strength','Você pode empunhar armas construídas para criaturas uma categoria de tamanho maior sem sofrer penalidades e calcula sua capacidade de carga como se fosse uma categoria de tamanho maior.',34),
        T('Passo Rápido','Quickstep','Seu deslocamento aumenta em 3 metros (10 pés).',34),
        T('Membros Dilacerantes','Tearing Limbs','Você possui armas naturais, como garras ou presas, e trata seus ataques desarmados como armas. Eles causam 1d8 de dano cortante ou perfurante, possuem Versátil (1d10) e podem usar Força ou Destreza para ataque e dano. Quando reduzir uma criatura a 0 pontos de vida, pode usar sua ação bônus para fazer outro ataque desarmado com vantagem contra outra criatura que consiga alcançar naquele turno.',34),
        T('Sem Medo','Zero Fear','Você é imune às condições Enfeitiçado e Amedrontado.',34)
      ],
      mixedBloodTraits:[
        T('Linguagem Bestial','Bestial Language','Você recebe o traço Linguagem Bestial do Noxiamorfo.',34),
        T('Linhagem','Bloodline','Você só pode escolher este traço uma vez. Escolha uma subraça de Noxiamorfo e receba seu Traço de Linhagem. Se Noxiamorfo for sua raça secundária, você também é considerado uma Monstruosidade além de seus tipos de criatura normais.',34),
        T('Impassível','Unflinching','Você recebe o traço Impassível do Noxiamorfo.',34)
      ],
      subraces:[
        S('Entretecido Bestial','Beastwoven',34,'Destreza +1','Mutação Noxiamorfa semelhante a licantropos e feras atrozes, com garras, pelos, pernas articuladas de maneira incomum e fome intensa por carne crua e sangue.','Caçador Aguçado',[
          T('Caçador Aguçado','Keen Hunter','Você possui Especialização em Percepção.',34),
          T('Investida Licântropa','Lycan’s Rush','Você pode realizar Disparada e Desengajar simultaneamente como a mesma ação. Este benefício não transforma essas ações em ação bônus mesmo que outra característica permita alguma delas como ação bônus.',34),
          T('Impulso de Velocidade','Speed Boost','Seu deslocamento aumenta em 3 metros (10 pés).',34)
        ]),
        S('Tendão Sombrio','Dark Sinew',34,'Constituição +1','Mutação marcada por estruturas musculares horrendas, seja em corpos enormes e imponentes ou em musculatura comprimida capaz de feitos muito além de limites humanoides.','Demonstração de Força',[
          T('Corpo Maior','Greater Body','Para fins de ataques, dano, agarrar e capacidade de carga, você conta como uma criatura uma categoria de tamanho maior.',34),
          T('Resistência Colossal','Hulking Endurance','Quando seria reduzido a 0 pontos de vida ou morto instantaneamente, em vez disso fica com pontos de vida iguais ao seu bônus de proficiência e não começa a Morrer. Você pode usar este traço uma vez por Descanso.',34),
          T('Demonstração de Força','Show of Strength','Você pode tentar Empurrar, Agarrar ou romper um Agarrão como uma ação bônus e possui vantagem no teste. Sempre que uma característica exigir uma ação para fazer um teste de Força a fim de se libertar de algo que limite seu movimento ou o prenda, você pode usar este traço para fazer esse teste como descrito acima em vez de usar uma ação.',34)
        ]),
        S('Não-Vivo','Unliving',34,'Sabedoria +1','Noxiamorfos que lembram cadáveres e mortos-vivos apesar de ainda estarem vivos, com pele pálida, carne flácida e traços predatórios ou mortiços.','Resistente à Morte',[
          T('Resistente à Morte','Death Resistant','Você possui vantagem em testes de resistência contra morte e em testes de resistência para evitar ficar Envenenado.',34),
          T('Necrossentido','Necrosense','Você sente a direção de criaturas vivas a uma distância de 9 metros × seu bônus de proficiência (30 pés × PB). Não conhece posição exata, identidade nem quantidade precisa, apenas direção e distância aproximada. Como consequência, não pode ser Surpreendido se o grupo de criaturas que o surpreenderia contiver ao menos uma criatura viva.',34),
          T('Postura Imortal','Undying Stance','Quando for reduzido a 0 pontos de vida e começar a Morrer, você não fica Caído, ainda pode realizar ações e seu deslocamento não é afetado por estar Morrer.',34)
        ])
      ]
    }
  ];
  window.GRIMORIO_RACES.push(...newRaces);

  // 81 subraças adicionais para raças previamente publicadas em Lyre's Guide to Retia.
  append('arhcoon',[
    S('Tanuki','Tanuki',37,'Carisma +1','Uma rara linhagem Arhcoon de pelagem espessa e cauda volumosa, capaz de endurecer o pelo como pedra e se impulsionar pelo ar.','Voo pela Cauda',[
      T('Brilho de Estátua','Statue Sheen','Quando for atingido por um ataque com arma, você pode usar sua reação para endurecer a pelagem como pedra e reduzir o dano sofrido em 1d6 × seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Se gastar dois usos ao ativá-lo, todos os ataques subsequentes que o atingirem até o início de seu próximo turno têm o dano reduzido pela mesma quantidade.',37),
      T('Voo pela Cauda','Tailed Flight','Você possui deslocamento de voo laborioso igual ao seu deslocamento-base.',37)
    ])
  ]);

  append('beast-tribe',[
    S('Tribo do Cão','Hound Tribe',37,'Sabedoria +1','Humanoides caninos marcados por honestidade, lealdade e bravura, acostumados a proteger companheiros e trabalhar em grupos pequenos e muito unidos.','Sentidos Aguçados',[
      T('Lealdade Canina','Canine Loyalty','Quando uma criatura dentro do alcance de qualquer uma de suas armas corpo a corpo for alvo de um ataque ou fizer um teste de resistência, você pode usar sua reação para impor desvantagem ao ataque ou conceder vantagem ao teste de resistência do alvo. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.',37),
      T('Sentidos Aguçados','Keen Senses','Você possui vantagem em testes de Percepção que dependam de audição ou olfato, o que também concede +5 à sua Percepção passiva nessas situações. Você possui proficiência em Sobrevivência.',37)
    ]),
    S('Saelkie','Saelkie',37,'Constituição +1','Tribo Bestial de focas capaz de alternar entre forma humanoide, forma de foca e uma transformação intermediária feroz, comum em regiões costeiras e frias.','Nadador',[
      T('Metamorfo de Foca','Seal Shifter','Como uma ação bônus, você pode alternar entre uma forma humanoide semelhante a elfo ou humano de pele branca e escamosa com traços de foca e uma forma idêntica a uma foca. As formas compartilham tamanho e estatísticas, exceto que na forma de foca você não acessa equipamento ou armas, considera deslocamento em terra como terreno difícil e dobra seu deslocamento de natação. Na forma de foca, seus ataques desarmados causam 1d6 de dano perfurante ou contundente, salvo se já causariam mais, e podem usar Força ou Constituição. Ao ser reduzido a 0 pontos de vida, retorna à forma humanoide. Quando vira foca, itens e equipamentos se fundem ao corpo até retornar, mas você pode expulsá-los do corpo como uma ação bônus.',37),
      T('Dilacerador de Pele','Skinshredder','Uma vez por Descanso, como ação bônus, você pode transformar-se por 1 minuto em uma fera-foca humanoide, mantendo membros e equipamento. Ao transformar-se, recebe pontos de vida temporários iguais a 1d6 × seu bônus de proficiência. Enquanto durar: recebe o deslocamento de natação da forma de foca; seu tamanho aumenta em uma categoria; pode fazer como ação bônus uma mordida desarmada usando Força ou Constituição que causa 1d10 de dano perfurante; é imune a dano de frio; e possui resistência a dano de ataques não mágicos. Transformar-se em outra de suas formas encerra esta transformação.',37),
      T('Nadador','Swimmer','Você possui deslocamento de natação igual ao seu deslocamento-base e pode respirar ar e água.',37)
    ]),
    S('Tribo Suína','Swine Tribe',38,'Constituição +1','Tribo Bestial semelhante a javalis e porcos, de corpos robustos feitos de gordura e músculos e notável capacidade de sobreviver a alimentos ruins e continuar lutando sob fadiga.','Apetite Resistente',[
      T('Opção de Tamanho','Size Option','Se escolher o Traço de Legado Opções de Tamanho da Tribo Bestial, você pode escolher ser Grande.',38),
      T('Apetite Resistente','Durable Appetite','Você pode comer alimentos podres, crus ou estragados sem consequências e possui vantagem em todos os testes de resistência contra comida ou bebida insegura ou envenenada.',38),
      T('Reservas Ocultas','Hidden Reserves','Para cada nível de Exaustão que estiver sofrendo, você recebe +1 em seus testes de resistência. Para cada 2 pontos de Fadiga de Combate que possuir, sua Classe de Armadura aumenta em 1.',38)
    ])
  ]);

  append('birdfolk',[
    S('Carniça','Carrion',38,'Constituição +1','Birdfolk necrófago semelhante a corvos e abutres, adaptado a caçar à noite e a sobreviver de alimentos que outros povos rejeitariam.','Visão no Escuro do Caçador de Presas',[
      T('Consumo Total','All Consumption','Você pode consumir alimentos estragados, crus ou podres sem consequências e ainda receber nutrição deles. Também possui vantagem em testes de resistência para evitar ficar Envenenado e contra efeitos negativos de comida ou bebida envenenada ou perigosa.',38),
      T('Visão no Escuro do Caçador de Presas','Preyfinder’s Darkvision','Você possui Visão no Escuro a 18 metros (60 pés), enxergando penumbra como luz plena e escuridão como penumbra. Se já possuir Visão no Escuro de outra fonte, seu alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), usando o maior valor.',38),
      T('Rasgar e Dilacerar','Rip and Tear','Você recebe o Traço de Legado Garras do Birdfolk além da quantidade normal de Traços de Legado que recebe.',38)
    ]),
    S('Pavão','Peacock',38,'Carisma +1','Birdfolk vaidoso de plumagem extraordinariamente brilhante, capaz de capturar a atenção dos outros e usar a beleza das penas como defesa e hipnose.','Filhote Eloquente',[
      T('Filhote Eloquente','Eloquent Nestling','Você possui Especialização em Persuasão.',38),
      T('Defensor Alado Feroz','Fierce Winged Defender','Você chama tanta atenção que, quando uma criatura a até 1,5 metro (5 pés) de você tentar atacar um de seus aliados, ela faz o ataque com desvantagem, a menos que se cegue voluntariamente para você até o início do próximo turno dela.',38),
      T('Hipnose das Penas Arco-Íris','Rainbow Feather Hypnosis','Como uma ação, você pode exibir sua plumagem e escolher qualquer número de criaturas que o vejam a até 6 metros (20 pés). Cada alvo deve ser bem-sucedido em um teste de resistência de Carisma, cuja CD usa Constituição ou Carisma, ou fica Incapacitado de admiração até o início de seu próximo turno. Você pode usar este traço um número de vezes por Descanso igual à metade de seu bônus de proficiência.',38)
    ]),
    S('Pica-Pau','Woodpecker',38,'Força +1','Birdfolk de plumagem verde e bico robusto, acostumado a florestas densas e capaz de localizar movimento por vibrações no solo e usar o próprio bico como arma.','Sentido do Solo',[
      T('Manto de Penas Verdes','Green Feathered Cloak','Sua coloração natural ajuda a se esconder em ambientes naturais. Você possui Especialização em Furtividade e proficiência em Sobrevivência.',38),
      T('Sentido do Solo','Ground Sense','Você possui Sentido Sísmico a uma distância de 3 metros × seu bônus de proficiência (10 pés × PB).',38),
      T('Bico Robusto','Robust Beak','Seu bico é uma arma com a propriedade Acuidade na qual você é proficiente. Ele causa 1d6 de dano perfurante; o dado aumenta para 1d8 no 8º nível e 1d10 no 14º nível.',38)
    ])
  ]);

  append('capy-hado',[
    S('Bolndest','Bolndest',38,'Força +1','Capy’hado guardião de voz imponente, comum entre vassalos e soldados de Cu Chullis, capaz de proteger aliados e reforçar sua coragem.','Perícias Corajosas',[
      T('Perícias Corajosas','Brave Skills','Você possui proficiência em Atletismo e Intuição. Se já tiver proficiência em uma ou em ambas, pode escolher outra perícia para cada proficiência já possuída.',38),
      T('Latido Guardião','Guardian Bark','Quando um aliado sofrer dano de um inimigo, você pode usar sua reação para gritar uma ordem ou mensagem tranquilizadora. O aliado sofre metade do dano do efeito desencadeador, e a próxima jogada de ataque, teste de atributo ou teste de resistência que fizer dentro de 1 minuto tem vantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.',38)
    ]),
    S('Jefa’dore','Jefa’dore',39,'Carisma +1','Capy’hado maior que a média, reconhecível por manchas escuras e pela produção de uma substância corporal capaz de acelerar a regeneração de tecido vivo.','Grande Personalidade',[
      T('Grande Personalidade','Big Personality','Você possui proficiência em Persuasão e Intimidação. Se já possuir proficiência em ambas, escolha uma delas e obtenha Especialização.',39),
      T('Remendo','Patch-Up','Como uma ação bônus, você pode aplicar a substância curativa produzida por seu corpo em si mesmo ou em uma criatura que toque. O alvo recupera pontos de vida iguais a 1d8 × seu bônus de proficiência. Este traço não afeta Mortos-Vivos nem Construtos e pode ser usado uma vez por Descanso.',39)
    ])
  ]);

  append('dragonkin',[
    S('Escama Sangrenta','Bloodscale',39,'Sabedoria +1','Dragonkin vermelho-sangue cuja herança de dragão de sangue combina chamas necróticas e calor extremo, permitindo alternar a natureza de sua herança e explodir em fogo e necrose.','Calor e Putrefação',[
      T('Herança de Fogo Sangrento','Bloodfire Heritage','Ao concluir um Descanso Longo, escolha fogo ou necrótico. Seu tipo de Herança Dracônica passa a ser o escolhido até você alterá-lo desta forma em outro Descanso Longo. Características baseadas em sua Herança Dracônica, como Resistência Dracônica, ajustam-se ao novo tipo.',39),
      T('Salto da Pira Fúnebre','Gravepyre Jump','No lugar de um ataque com arma, você pode gastar um uso de sua Arma de Sopro para envolver-se em chamas necróticas, subir e despencar em um espaço desocupado que veja a até 9 metros (30 pés). Cada criatura a até 3 metros (10 pés) desse espaço faz um teste de resistência de Constituição, cuja CD usa Força ou Constituição. Em uma falha, sofre 1d8 de dano de fogo e 1d8 de dano necrótico. Cada tipo de dano aumenta em 1d8 no 5º, 11º e 17º níveis.',39),
      T('Calor e Putrefação','Heat and Rot','Você possui vantagem em testes de resistência contra calor extremo, frio extremo e a condição Envenenado.',39)
    ]),
    S('Serpente do Lago','Lake Serpent',39,'Destreza +1','Dragonkin de herança aquática baseada nas serpentes lacustres de Cu Chullis, com escamas cobertas por ácido que facilitam a natação e podem revestir armas.','Nadador Veloz',[
      T('Anfíbio','Amphibious','Você pode respirar ar e água.',39),
      T('Herança Aquática','Aquatic Heritage','Seu tipo de Herança Dracônica é ácido e você possui resistência a dano ácido.',39),
      T('Arma Gotejante','Dripping Weapon','Como uma ação bônus, você pode gastar um uso de sua Arma de Sopro para revestir uma arma que toque com ácido bioreativo por 1 minuto. Durante esse período, ataques com essa arma causam dano ácido adicional igual ao seu bônus de proficiência. Você pode usar esta característica duas vezes por Descanso Longo e recupera um uso ao concluir um Descanso Curto.',39),
      T('Nadador Veloz','Swift Swimmer','Você possui deslocamento de natação igual ao seu deslocamento-base. Além disso, possui vantagem em testes de atributo feitos para escapar das condições Agarrado ou Contido.',39)
    ])
  ]);

  append('dwarf',[
    S('Anão do Óleo','Oil Dwarf',39,'Carisma +1','Anão de sangue negro e iridescente semelhante a óleo, cuja fisiologia resiste a ácido e veneno, pode ser incendiada magicamente e envenena armas quando o corpo está ferido.','Resistência Amortecida',[
      T('Resistência Amortecida','Dampened Resistance','Você possui resistência a dano ácido e a dano de veneno.',39),
      T('Iniciador de Fogo','Firestarter','Você pode produzir os efeitos de *raio ardente* sem gastar espaço de magia, usando Constituição ou Carisma como habilidade de conjuração, um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Pode gastar usos adicionais ao conjurar para produzir o efeito como se fosse conjurado um nível acima para cada uso adicional gasto.',39),
      T('Sangue Oleoso','Oiled Blood','Enquanto estiver com menos da metade de seus pontos de vida máximos, o primeiro ataque com arma que acertar em cada turno causa dano de veneno adicional igual ao seu nível.',40)
    ]),
    S('Anão do Cofre','Vault Dwarf',40,'Força +1','Anões treinados desde cedo para proteger segredos, cofres e indivíduos valiosos de suas famílias, resistindo a coerção e usando posicionamento aliado com disciplina tática.','Trava contra Encanto',[
      T('Trava contra Encanto','Charm Lock','Você possui vantagem em testes de resistência para evitar ficar Enfeitiçado. Se uma criatura o obrigar a realizar uma ação contra sua vontade, como por *dominar pessoa*, você pode escolher travar o próprio corpo e ficar Atordoado até o início de seu próximo turno em vez de realizar a ação.',40),
      T('Guardião das Chaves','Key Keeper','Você possui proficiência em Atletismo e Enganação. Se já possuir proficiência em ambas, pode escolher uma delas para obter Especialização.',40),
      T('Táticas do Guardião do Cofre','Vaultkeeper Tactics','Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência para escolher um dos efeitos: • ao atacar uma criatura dentro do alcance corpo a corpo de um aliado não Incapacitado, faça o ataque com vantagem; • quando você tiver um aliado dentro de seu alcance corpo a corpo e você ou ele for alvo de um ataque que possa ver, use sua reação para impor desvantagem a esse ataque e a todos os ataques contra vocês até o fim do turno enquanto permanecerem ao alcance um do outro; • como ação bônus, ordene a uma criatura que veja que avance ou recue; ela pode usar sua reação para mover-se até metade do deslocamento sem provocar ataques de oportunidade.',40)
    ])
  ]);

  append('elf',[
    S('Elfo da Sepultura','Grave Elf',40,'Constituição +1','Também conhecidos como Aoesi, são elfos expostos a energia necrótica ou a reinos de pós-vida, tornando-se espirituais, sombrios e capazes de deslizar momentaneamente como sombras.','Fardo da Sepultura ou Toque do Outro Lado',[
      T('Fardo da Sepultura','Grave’s Burden','Você possui resistência a dano necrótico.',40),
      T('Regressão Espiritual','Spiritual Regression','Quando realizar a ação Desengajar, você se torna uma sombra espiritual até o fim do turno. Nessa forma, pode atravessar espaços de outras criaturas sem gasto adicional ou bloqueio, ignora terreno difícil mágico e não mágico e pode atravessar livremente espaços ou barreiras de até cerca de 15 cm (meio pé) de espessura como se seu corpo fosse ar. Se terminar o turno em um espaço onde não cabe, é empurrado até o espaço desocupado mais próximo onde caiba e sofre 1d4 de dano de energia para cada espaço pelo qual for deslocado.',40),
      T('Toque do Outro Lado','Touch of the Other Side','Quando obtiver um acerto crítico em um ataque, ou quando uma criatura obtiver 1 no d20 de um teste de resistência contra um efeito seu que causaria dano, ela sofre um dado adicional de dano necrótico.',40)
    ]),
    S('Elfo Odaisi','Odaisi Elf',40,'Carisma +1','Elfos raros e sensuais sintonizados aos corações e corpos de outras criaturas, cuja presença calorosa facilita encantamento, interação social e recuperação durante o descanso.','Natureza Graciosa',[
      T('Graça Encantadora','Charming Grace','Um número de vezes por Descanso Longo igual ao seu bônus de proficiência, você pode produzir os efeitos de *enfeitiçar pessoa* ou *comando* sem espaço de magia nem componentes, exceto as interações exigidas pelas magias, usando Constituição ou Carisma como habilidade de conjuração. Alternativamente, pode gastar três usos para produzir os efeitos de *enfeitiçar monstro* ou *dominar pessoa*.',40),
      T('Natureza Graciosa','Gracious Nature','Você possui proficiência em Persuasão e Enganação.',41),
      T('Toque Amoroso','Loving Touch','Ao concluir um Descanso Curto, escolha um número de criaturas que estejam descansando com você igual ao seu bônus de proficiência. Cada uma pode recuperar pontos de vida adicionais iguais ao seu nível. Uma criatura só pode se beneficiar deste traço uma vez por Descanso Longo.',41)
    ])
  ]);

  append('enaretos',[
    S('Juramentado da Crista','Crestsworn',41,'Sabedoria +1','Enáretos de asas azul-vivo e presença de comando sobrenatural, nascidos com forte convicção sobre o que seria melhor para os que os cercam.','Interferência Direta',[
      T('Interferência Direta','Direct Interference','Enquanto você estiver adjacente a aliados, ataques feitos contra esses aliados adjacentes não podem ter vantagem.',41),
      T('Toque Calmante','Soothing Touch','Você recebe o Traço de Legado Mãos Curativas dos Enáretos. Ao usá-lo, role d6 em vez de d4.',41),
      T('Voz de Comando','Voice of Command','Você possui um número de usos por Descanso igual ao seu bônus de proficiência e pode gastá-los para: • Voz Compulsória: como ação bônus, conjurar *comando* sem espaço de magia e sem componentes exceto verbais; pode gastar vários usos para conjurá-la em um nível igual ao número gasto; • Voz Fortalecedora: quando você ou uma criatura a até 9 metros (30 pés) falhar em um teste de resistência contra Amedrontado ou Enfeitiçado, use sua reação para fazê-la ser bem-sucedida. A mesma reação pode afetar várias criaturas, gastando um uso por criatura.',41)
    ]),
    S('Dádiva','Endowment',41,'Sabedoria +1','Enáretos profundamente ligados às tradições e ao legado de sua terra, família ou juramento, capazes de invocar a experiência dos que os antecederam em uma forma celestial enriquecida.','Mão Orientadora',[
      T('Legado Eterno','Everlasting Legacy','Como uma ação, você assume uma forma celestial enriquecida por 1 minuto, encerrada se ficar Inconsciente ou voluntariamente como ação bônus. Durante a forma: seu voo laborioso torna-se voo normal; você pode adicionar Sabedoria à CA se ainda não o fizer; realiza testes de resistência com vantagem; e o primeiro ataque de cada turno recebe bônus na jogada de ataque e dano igual à metade do seu bônus de proficiência. Você pode usar este traço uma vez por Descanso.',41),
      T('Mão Orientadora','Guiding Hand','Você aprende o truque *orientação*, pode conjurá-lo como uma ação bônus e seu alcance passa a 9 metros (30 pés). Quando conjurá-lo desta forma em outra criatura, o benefício também pode ser adicionado a jogadas de ataque.',41),
      T('Conhecimento do Passado','Knowledge of the Past','Você possui Especialização em História.',41)
    ]),
    S('Extermínio','Extermination',41,'Força +1','Enáretos de fúria sagrada que procuram uma missão e a cumprem pela força, manifestando coroas ou asas de energia e uma percepção aguçada de intenção hostil.','Sentido Assassino',[
      T('Coroa dos Juízes','Crown of Judges','Como uma ação bônus, você envolve costas e braços em chamas sagradas por 1 minuto. Durante esse período, seus ataques recebem bônus igual à metade de seu bônus de proficiência, e as jogadas de dano resultantes causam dano radiante adicional igual ao seu bônus de proficiência completo. Se um ataque beneficiado por este traço reduzir a 0 pontos de vida uma criatura que compartilhe a parte Boa, Má ou Neutra de sua tendência, o efeito termina imediatamente. Usos por Descanso Longo: bônus de proficiência.',41),
      T('Caçador Sagrado','Holy Hunter','Você possui proficiência em Sobrevivência. Se estiver rastreando uma criatura com a qual tenha entrado em confronto ou que tenha visto dentro de um número de dias igual ao seu modificador de Sabedoria, possui vantagem em testes de Sobrevivência para rastreá-la.',42),
      T('Sentido Assassino','Killing Sense','Você não pode ser Surpreendido em combate a menos que esteja Inconsciente e pode adicionar metade de seu bônus de proficiência aos testes de Iniciativa.',42)
    ])
  ]);

  append('feralus',[
    S('Pata de Rua','Streetpad',42,'Sabedoria +1','Feralus criado em ambiente urbano, acostumado a sobreviver em brigas, escalar prédios e dominar oponentes com velocidade e luta corporal improvisada.','Lutador de Rua',[
      T('Lutador de Rua','Street Fighter','Você pode usar Destreza em testes de Atletismo. Ao tentar Agarrar — ou manter um Agarrão contra — uma criatura do seu tamanho ou menor, possui vantagem. Enquanto estiver agarrando uma criatura, pode usar sua ação bônus para causar dano cortante igual a 1d8 + seu modificador de Força ou Destreza, ou igual ao dano de seu ataque desarmado, tratando o dano como proveniente de um ataque com arma feito com as unhas para fins de resistências.',42),
      T('Rebote Traumático','Traumatic Rebound','Quando sofrer dano de um ataque com arma, pode usar sua reação para ganhar pontos de vida temporários iguais ao dano sofrido até o fim de seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.',42),
      T('Corredor de Paredes','Wallrunner','Quando realizar a ação Disparada, recebe deslocamento de escalada igual ao seu deslocamento-base e pode correr ao longo e para cima de paredes com apoios mínimos sem ocupar as mãos nem exigir ferramentas ou testes de atributo. Você não cai até terminar o turno ou até seu deslocamento ser reduzido a 0.',42)
    ]),
    S('Branco Maravilha','Wonder White',42,'Carisma +1','Feralus de pelagem branca e dourada cuja presença régia é acompanhada por sorte extraordinária, capaz de prolongar a fortuna mesmo depois de uma tentativa fracassada.','Perpetuação',[
      T('Estalo de Sorte','Lucksnap','Quando fizer uma jogada de ataque, teste de atributo ou teste de resistência, antes do resultado ser declarado, pode rolar 1d6 e adicionar o resultado. Pode fazer isso um número de vezes por Descanso igual à metade de seu bônus de proficiência, arredondado para cima.',42),
      T('Perpetuação','Perpetuation','Quando fizer uma jogada de ataque ou teste de resistência com vantagem e errar ou falhar, a próxima jogada de ataque ou teste de atributo que fizer antes do fim de seu próximo turno também tem vantagem.',42)
    ])
  ]);

  append('firbolg',[
    S('Firbolg Trama da Cripta','Cryptloom Firbolg',42,'Inteligência +1','Firbolg sintonizado a espíritos e mortos, dedicado a cuidar de lugares de morte e de almas inquietas como outros firbolgs cuidariam de seus rebanhos.','Consciência Espiritual',[
      T('Consciência Espiritual','Spiritual Awareness','Você pode ver espíritos e Mortos-Vivos no Plano Etéreo a partir do Plano Material, ou vice-versa, e interagir com eles como se estivessem no mesmo plano. Ataques seus contra Mortos-Vivos ou espíritos contam como mágicos para resistências a dano. Além disso, quando seu teste de Percepção superar a Furtividade passiva de qualquer espírito ou Morto-Vivo a até 9 metros (30 pés), você detecta sua presença e direção.',42),
      T('Força dos Rebanhos Caídos','Strength of Fallen Herds','Ao fazer uma jogada de ataque, teste de atributo ou teste de resistência, você pode adicionar um bônus igual ao número de cadáveres recentes ou criaturas a 0 pontos de vida a até 3 metros (10 pés) de você. Usos por Descanso: bônus de proficiência.',42),
      T('Bênção da Terra','Land’s Blessing','Por meio de sua característica Magia Firbolg, esta sub-raça concede acesso às magias Maldição (Curse), Conjurar Atendente Morto-Vivo (Conjure Undead Attendant) e Falar com os Mortos (Speak with Dead), conforme as regras de Bênção da Terra do Firbolg.',42)
    ],{landBlessingSpells:{cantrip:null,level1:'Maldição (Curse)',level2:'Conjurar Atendente Morto-Vivo (Conjure Undead Attendant)',level3:'Falar com os Mortos (Speak with Dead)'}}),
    S('Firbolg Nemeidre','Nemeidre Firbolg',42,'Força +1','Linhagem de Firbolg guerreiro criada por magia durante um conflito ancestral, herdando corpos incansáveis e força física brutal transmitida pelos seguidores de Nemeid Três-Vezes-Nascido.','Corpo Agitado',[
      T('Corpo Agitado','Bustling Body','Você é imune aos efeitos de Fadiga de Combate. Se sua mesa não usar Fadiga de Combate, você sofre os efeitos de Exaustão como se tivesse metade dos níveis que realmente possui, arredondado para cima; o sexto nível ainda causa sua morte.',42),
      T('Força Pura','Pure Force','Você pode usar seu modificador de Constituição no lugar de Força para determinar bônus de ataque e dano com armas corpo a corpo que possuam as propriedades Duas Mãos ou Pesada.',43),
      T('Bênção da Terra','Land’s Blessing','Por meio de sua característica Magia Firbolg, esta sub-raça concede acesso às magias Heroísmo (Heroism), Infligir Terror (Inflict Terror) e Escudo de Lâminas (Shield of Blades), conforme as regras de Bênção da Terra do Firbolg.',43)
    ],{landBlessingSpells:{cantrip:null,level1:'Heroísmo (Heroism)',level2:'Infligir Terror (Inflict Terror)',level3:'Escudo de Lâminas (Shield of Blades)'}})
  ]);

  append('flooflin',[
    S('Shifthinde','Shifthinde',43,'Carisma +1','Flooflin de linhagem amaldiçoada por bruxas que pode alternar livremente entre forma de coelho, uma forma de outra raça e uma forma híbrida, mantendo identidades físicas consistentes.','Influência da Bruxa',[
      T('Ferramentas de Malandro','Rascal Tools','Você possui proficiência em Enganação.',43),
      T('Lebre Mutável','Shifting Hare','Escolha outra raça e uma categoria de tamanho permitida a ela. Você possui três formas e pode alternar entre elas como ação bônus: sua forma Flooflin, uma forma que se parece com a raça e tamanho escolhidos e uma forma híbrida. As formas Flooflin e alternativa são identidades físicas fixas, não ilusões, e podem possuir voz, sexo e demais características distintas, mas constantes. Se a forma alternativa for Grande, a híbrida é Média. Efeitos que identificam a forma verdadeira reconhecem sua forma Flooflin. Se você for de Sangue Misto, a raça escolhida deve ser sua raça secundária. Você é considerado Metamorfo para efeitos que interajam com metamorfos.',43),
      T('Limite de Tamanho','Size Limit','Sua forma Flooflin é Pequena.',43),
      T('Influência da Bruxa','Witch’s Influence','Escolha um truque da lista de Feiticeiro. Você pode conjurá-lo à vontade, usando Destreza, Constituição ou Carisma como habilidade de conjuração.',43)
    ]),
    S('Calcanhar Piscante','Winking Heel',43,'Carisma +1','Flooflin ousado e extraordinariamente afortunado, origem das superstições sobre pés de coelho que trazem boa sorte.','Rebote do Destino',[
      T('Mente Límpida','Clear Mind','Você possui resistência a dano psíquico e é imune às condições Enfeitiçado e Enfurecido.',43),
      T('Resistência Oportunista','Exploitative Endurance','Quando seria reduzido a 0 pontos de vida ou morto instantaneamente, o destino intervém e você fica com pontos de vida iguais ao seu bônus de proficiência. Você pode usar este traço uma vez por Descanso.',43),
      T('Rebote do Destino','Fateful Rebound','Você recebe automaticamente o Traço de Legado Sorte do Coelho dos Flooflin. Quando o usa para alterar o resultado de um d20, trate o novo resultado como 10 se tiver rolado 9 ou menos.',43)
    ])
  ]);

  append('framebilt',[
    S('FRM06 Calculador','FRM06 Calculator',43,'Inteligência +1','Framebilt especializado em decisões instantâneas, reduzindo situações complexas a cálculos e probabilidades para chegar a resultados moderados e previsíveis.','Conexões Traçadas',[
      T('Conexões Traçadas','Connections Drawn','Você pode substituir Sabedoria por Inteligência em qualquer teste de atributo que exija Sabedoria, incluindo o cálculo de sua Percepção passiva.',43),
      T('Resultado Singular','Singular Outcome','Quando fizer uma jogada de ataque ou teste de resistência, ou quando uma criatura fizer contra você um ataque que possa ver, você pode fazer o resultado do d20 daquela jogada tornar-se 10. Se a jogada original era um acerto crítico, ela ainda conta como crítico caso 10 seja suficiente para acertar. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência.',43),
      T('Tecnologia de Perícia','Skill Tech','Você possui proficiência em duas perícias à sua escolha, ou Especialização em uma perícia à sua escolha.',43)
    ],{automationTrait:'Conexões Traçadas'}),
    S('FRM09 Girador','FRM09 Spinner',44,'Força +1','Framebilt dedicado ao combate, capaz de identificar e empregar quase qualquer arma com extrema rapidez e de reposicionar-se por breves teletransportes durante seus ataques.','Proficiências Avançadas',[
      T('Proficiências Avançadas','Advanced Proficiencies','Você ganha proficiência em todas as armas simples e marciais e em escudos. Se já possuir proficiência em armas simples e marciais, recebe proficiência em armas de fogo simples e marciais em vez disso.',44),
      T('Clarão de Isca','Decoy Flash','Uma vez por turno, quando fizer um ataque com arma, você pode se teleportar para um espaço desocupado que veja a até 9 metros (30 pés), antes ou depois do ataque. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência.',44),
      T('Troca de Equipamento','Switch Equip','Você aprende o truque *empunhadura cruzada* (*cross handle*). Pode usar Sabedoria como habilidade de conjuração para ele, ou qualquer outra habilidade de conjuração que possua por outra característica ou traço.',44)
    ],{automationTrait:'Proficiências Avançadas'})
  ]);

  append('gnome',[
    S('Gnomo Sombrio','Grim Gnome',44,'Constituição +1','Gnomos adaptados a ambientes particularmente hostis, de coloração cinzenta e habilidades voltadas a sobreviver em regiões onde a própria terra é perigosa.','Marchante das Terras Mortas',[
      T('Marchante das Terras Mortas','Deadland Marcher','Você possui resistência a dano necrótico e vantagem em testes de resistência para resistir à condição Envenenado.',44),
      T('Catador Constante','Steady Scavenger','Quando fizer testes de Sobrevivência para localizar alimento em ambientes onde a nutrição pode ser insegura, parte da comida e água encontrada é segura para um número de criaturas igual ao seu bônus de proficiência.',44),
      T('Sobrevivente Furtivo','Stealthy Survivor','Você possui Especialização em Furtividade.',44)
    ]),
    S('Korrigan','Korrigan',44,'Sabedoria +1','Gnomos tocados pelas fadas, de características parcialmente amadeiradas e relação instável com o tempo, capazes de desaparecer para um semiplano por breves intervalos.','Herança Feérica',[
      T('Herança Feérica','Fey Heritage','Você possui vantagem em testes de resistência para evitar ficar Enfeitiçado e não pode ser colocado para dormir por magia. Além disso, precisa de apenas quatro horas de sono para receber os benefícios de um Descanso Longo.',44),
      T('Salto Temporal','Time Pop','Ao fim de qualquer um de seus turnos, você pode desaparecer completamente para um semiplano inofensivo, onde permanece em estase até o início de seu próximo turno. Enquanto estiver lá, nada pode tê-lo como alvo ou afetá-lo, efeitos contínuos não o atingem e quaisquer efeitos ou magias sobre você com duração limitada têm sua duração estendida em um turno adicional. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso ao concluir um Descanso Curto.',44)
    ])
  ]);

  append('goblin',[
    S('Goblin do Jackpot','Jackpot Goblin',44,'Carisma +1','Goblin que abandonou o fatalismo de sua espécie e abraçou chance e extravagância, passando a ser carregado pelas marés da sorte.','Especialista em Jogos',[
      T('Resultado Crítico','Critical Turnout','Sempre que obtiver em um teste de atributo ou teste de resistência um resultado de d20 que seria suficiente para você obter um acerto crítico em uma jogada de ataque, você é automaticamente bem-sucedido nesse teste, independentemente da jogada oposta, salvo se a oposição também possuir um traço semelhante que conceda sucesso automático.',44),
      T('Especialista em Jogos','Gaming Expert','Você possui Especialização em todos os jogos, tanto de habilidade quanto de azar.',44),
      T('Eu Só Estou Começando!','I’m Just Getting Started!','Quando rolar um d20 para uma jogada de ataque, teste de resistência ou teste de atributo, pode escolher fazer a jogada com vantagem, ignorando qualquer desvantagem. Se a jogada resultar em falha, você não pode usar este traço novamente até o fim de seu próximo turno e, até lá, possui desvantagem em todas as jogadas de ataque, testes de atributo e testes de resistência.',44)
    ]),
    S('Kozoglin','Kozoglin',44,'Sabedoria +1','Goblin ciclope levemente tocado por poder infernal, capaz de aterrorizar com o olhar e abrir seu único olho para enxergar verdades sobrenaturais.','Especialista de Visão Singular',[
      T('Olhar Aterrorizante','Frightful Gaze','Como uma ação, escolha até um número de criaturas igual ao seu bônus de proficiência a até 18 metros (60 pés) que possam ver seu único olho. Cada uma faz um teste de resistência de Sabedoria, cuja CD usa Constituição ou Carisma, e fica Amedrontada por você em uma falha. Criaturas Amedrontadas desta forma repetem o teste ao fim de cada turno, encerrando o efeito em um sucesso. Uma criatura que obtiver sucesso em qualquer teste contra este traço fica imune a ele por 24 horas.',44),
      T('Verdade Ocular','Ocular Truth','Como uma ação bônus, você pode fortalecer seu olho com energia espiritual e obter Visão Verdadeira a uma distância de 3 metros × seu bônus de proficiência (10 pés × PB) por 1 minuto. Você pode usar este traço uma vez por Descanso.',45),
      T('Especialista de Visão Singular','Singular Visual Expert','Você possui Especialização em Percepção.',45)
    ]),
    S('Queimado pela Lua','Moonburned',45,'Sabedoria +1','Goblin de pele pálida marcada por runas primais quase invisíveis que brilham ao luar, misturando caça furtiva, visão noturna e magia druídica lunar.','Assassino Oculto',[
      T('Assassino Oculto','Hidden Killer','Na primeira vez em cada turno que acertar uma criatura com um ataque que teve vantagem porque ela não conseguia vê-lo, você causa um dado de dano de arma adicional.',45),
      T('Visão no Escuro da Meia-Noite','Midnight Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, seu alcance aumenta para 36 metros (120 pés) ou em 18 metros (60 pés), usando o maior valor.',45),
      T('Marcas do Luar','Moonlight Marks','Escolha um truque de Druida e uma magia de Druida de 1º nível. Você pode conjurar o truque à vontade. Pode conjurar a magia de 1º nível sem gastar espaço de magia nem componentes gastando um uso deste traço; pode gastar usos adicionais ao mesmo tempo para aumentar em um o nível da conjuração para cada uso extra. Escolha Destreza, Sabedoria ou Carisma como habilidade de conjuração. Você possui usos por Descanso Longo iguais ao bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto. Se o alvo da magia estiver sob luar direto, você tem vantagem nos ataques da magia contra ele e ele tem desvantagem nos testes de resistência contra a magia.',45)
    ])
  ]);

  append('goliath',[
    S('Fomóire','Fomóire',45,'Constituição +1','Goliath que herdou sangue dos antigos fomorianos e sua poderosa maldição ocular, combinando adaptação a terrenos extremos com um olho capaz de subjugar e revelar o invisível.','Corpo de Todo Terreno',[
      T('Corpo de Todo Terreno','Body of All Terrain','Você possui deslocamento de escalada e de natação iguais ao seu deslocamento-base e vantagem em testes de resistência contra ambientes extremos.',45),
      T('Olho Esquerdo Amaldiçoado','Cursed Left Eye','Seu olho esquerdo pode ser usado de duas maneiras. • Percepção Amaldiçoada: como ação bônus, fixe o olhar em uma criatura que veja a até 18 metros (60 pés). Ela faz um teste de resistência de Carisma, cuja CD usa Constituição ou Carisma. Em uma falha, enquanto você continuar olhando para ela, seu deslocamento é reduzido à metade e ela tem desvantagem em testes de atributo e jogadas de ataque. No início de cada turno seu, pode prolongar o efeito se o alvo ainda estiver a até 18 metros; caso contrário ele termina. Enquanto focado, você tem desvantagem em Percepção e outras criaturas têm vantagem em ataques contra você. Quem obtiver sucesso fica imune a esta função por 1 hora. • Visão do Invisível: uma vez por Descanso Longo, você pode conjurar *ver o invisível* sem espaço de magia nem componentes.',45)
    ]),
    S('Tocado por Oni','Onitouched',45,'Constituição +1','Goliath de pele azul-escura, presas e herança oni, capaz de conjurar magia sombria e assumir temporariamente uma forma gigante aterrorizante e regenerativa.','Visão no Escuro Azul',[
      T('Visão no Escuro Azul','Blue Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro de outra fonte, seu alcance aumenta para 36 metros (120 pés) ou em 9 metros (30 pés), usando o maior valor.',45),
      T('Magia do Gigante Sombrio','Dark Giant’s Magic','Você pode conjurar *escuridão*, *invisibilidade* e *sono*, cada uma uma vez por Descanso Longo, sem gastar espaços de magia nem componentes. Constituição ou Carisma é sua habilidade de conjuração, à sua escolha. Cada magia é conjurada em um nível igual ao seu bônus de proficiência.',45),
      T('Forma de Medo e Força','Form of Fear and Strength','Como ação bônus, você pode fortalecer e aumentar seu corpo por 1 minuto. Durante a transformação: seu tamanho aumenta em uma categoria e alcance em 1,5 metro (5 pés); você possui vantagem em testes de resistência contra efeitos mágicos; ao fim de cada turno recupera pontos de vida iguais ao bônus de proficiência; na primeira vez que causar dano a uma criatura em cada turno, ela faz um teste de resistência de Sabedoria, cuja CD usa Constituição ou Carisma, e fica Amedrontada por você até o fim do próximo turno dela em uma falha. A transformação termina cedo se você iniciar o turno com 0 pontos de vida, ficar Inconsciente ou encerrá-la como ação bônus. Usos por Descanso Longo: bônus de proficiência.',45)
    ])
  ]);

  append('hadislin',[
    S('Endrench','Endrench',46,'Constituição +1','Hádislin de pele vermelho-escura permanentemente coberta por umidade semelhante a sangue, ligado aos rios de sangue infernais e capaz de absorver sangue mortal para se recompor.','Corpo Sangrento',[
      T('Corpo Sangrento','Blood Body','A camada escorregadia de umidade sanguínea sobre sua pele concede vantagem em testes e testes de resistência para evitar ou escapar de Agarrado ou Contido, exceto quando a origem do efeito é uma criatura adaptada à umidade, como uma Gosma ou monstro marinho.',46),
      T('Reagrupamento Sanguíneo','Sanguine Rally','Quando obtiver um acerto crítico contra uma criatura ou um ataque de magia ou arma seu matar uma criatura com sangue, você pode recuperar pontos de vida iguais ao dano causado pelo ataque. Não pode usar esta característica contra Construtos, Mortos-Vivos, Espíritos ou Ínferos. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto.',46)
    ],{cursedLegacySpells:{characterLevel3:'Infligir Ferimentos (Inflict Wounds)',characterLevel5:'Vento Definhante (Languishing Wind)'}}),
    S('Kertamina','Kertamina',46,'Força +1','Hádislin conhecido como “demônio do combate”, cuja maldição aguça garras, endurece o corpo e converte hostilidade recebida em fúria recíproca.','Selvageria Honrada',[
      T('Pele de Carbono','Carbon Skin','Você possui resistência a dano contundente, perfurante e cortante de ataques não mágicos.',46),
      T('Armadura Destemida','Dauntless Armoring','Você pode usar seu modificador de Constituição no lugar de Destreza para determinar sua Classe de Armadura, a menos que outro método de cálculo já inclua Constituição. Se a armadura limitar o bônus de Destreza na CA, o limite aplicado à Constituição é dois pontos maior que esse limite; por exemplo, um máximo de +2 vira +4 e um máximo de +0 vira +2.',46),
      T('Selvageria Honrada','Honoring Savagery','Quando uma criatura o atingir com um ataque que teve vantagem, até o fim de seu próximo turno, sempre que atacar essa criatura você pode rolar 1d4 e adicionar o resultado tanto à jogada de ataque quanto à jogada de dano resultante.',47)
    ],{cursedLegacySpells:{characterLevel3:'Marca do Caçador (Hunter’s Mark)',characterLevel5:'Golpe de Harpia (Harpy Strike)'}}),
    S('Sultris','Sultris',47,'Constituição +1','Hádislin de herança ligada a demônios e diabos da luxúria, tentação, ganância ou inveja, dotado de mente impossível de bajular e toque psiquicamente avassalador.','Mente Além da Bajulação',[
      T('Mente Além da Bajulação','Mind Beyond Flattery','Você é imune às condições Enfeitiçado e Enfurecido.',47),
      T('Toque Psíquico','Psychic Touch','Como uma ação bônus, faça um ataque desarmado contra uma criatura a até 1,5 metro (5 pés), usando Carisma no lugar de Força ou Destreza. Em um acerto, causa Xd6 + seu modificador de Carisma de dano psíquico, onde X é metade de seu bônus de proficiência. Estes ataques não contam como ações hostis para efeitos como *enfeitiçar pessoa*. Se uma característica, como Artes Marciais do Monge, aumentar o dado de dano de seus ataques desarmados para um dado maior que d6, os dados deste ataque passam a usar esse tipo de dado.',47)
    ],{cursedLegacySpells:{characterLevel3:'Comando (Command)',characterLevel5:'Sugestão (Suggestion)'}})
  ]);

  append('halfling',[
    S('Formador de Clã','Clanmaker',47,'Força +1','Halfling que protege território e parentes de maneira mais agressiva, castigando invasores e tornando difícil atravessar o espaço que domina.','Águas Turbulentas',[
      T('Punir Território','Punish Territory','Quando obtiver um acerto crítico com uma arma corpo a corpo por rolar 20 no d20, você projeta parte do dano para todos os demais alvos ao alcance da arma. Cada criatura à sua escolha dentro do alcance, exceto o alvo primário, sofre metade do dano causado ao alvo primário.',47),
      T('Águas Turbulentas','Troubled Waters','Os espaços dentro de seu alcance corpo a corpo são considerados terreno difícil para criaturas hostis.',47),
      T('Treinamento com Armas','Weapon Training','Você ganha proficiência em escudos e em duas armas à sua escolha.',47)
    ]),
    S('Halfling Pacificador','Peacemaker Halfling',47,'Carisma +1','Halfling voltado à harmonia, negociação e política, capaz de coordenar aliados próximos e fortalecer seus esforços defensivos em conjunto.','Diligência',[
      T('Diligência','Diligence','Quando fizer um teste de resistência, pode usar sua reação para receber um bônus igual ao número de criaturas aliadas a até 3 metros (10 pés), até o máximo de seu bônus de proficiência. Cada uma dessas criaturas também recebe +1 em testes de resistência feitos até o fim do mesmo turno.',47),
      T('Lutar Juntos','Struggle Together','Escolha duas entre Percepção, Persuasão e Intuição e receba proficiência nelas. Alternativamente, escolha uma dessas perícias e receba Especialização.',47)
    ])
  ]);

  const heritageRule=page=>T('Traços de Herança','Heritage Traits','Escolha 2 Traços de Herança positivos desta subraça e também 2 Traços de Herança prejudiciais. Depois de alcançar o 8º nível e concluir um Descanso Longo, você pode remover permanentemente um dos traços prejudiciais; depois de alcançar o 13º nível e concluir um Descanso Longo, pode remover permanentemente o segundo.',page,{heritageRole:'rule'});

  append('hanyou',[
    S('Gashadokuro','Gashadokuro',47,'Nenhum','Hanyou nascido de yokai esqueléticos ou do acúmulo de arrependimento e raiva de mortos violentos. Seu corpo aparente oculta uma forma esquelética muito maior, composta por ossos e crânios.','Corpo de Ossos',[
      T('Corpo de Ossos','Body of Bones','Uma vez por Descanso, como uma ação bônus, você pode assumir por 1 minuto sua verdadeira forma esquelética. Durante esse tempo: seu tamanho aumenta em uma categoria e seu equipamento aumenta com você sem mudar estatísticas; você é imune a dano de veneno e necrótico e não pode ficar Envenenado; seu alcance corpo a corpo aumenta em 1,5 metro (5 pés); e sua CA aumenta em metade de seu bônus de proficiência, arredondado para cima.',47,{heritageRole:'lineage'}),
      heritageRule(47),
      T('Chocalho Crítico','Critical Rattle','Quando sofrer um acerto crítico provocado por um resultado no d20, você fica Atordoado até o fim de seu próximo turno.',47,{heritageRole:'detrimental'}),
      T('Semblante Esquelético','Skeletal Visage','Você possui desvantagem em testes de Carisma.',47,{heritageRole:'detrimental'}),
      T('Vulnerável','Vulnerable','Você possui vulnerabilidade a dano trovejante e radiante.',47,{heritageRole:'detrimental'}),
      T('Sem Sangue','Bloodless','Você é imune a dano de veneno e não pode ficar Envenenado.',48,{heritageRole:'positive'}),
      T('Densidade Óssea','Bone Density','Você possui vantagem em testes e testes de resistência para resistir às condições Agarrado ou Contido.',48,{heritageRole:'positive'}),
      T('Órgãos Falsos','False Organs','Você não precisa de comida, água nem ar para sobreviver.',48,{heritageRole:'positive'}),
      T('Cadáver Faminto','Hungering Corpse','Uma vez por Descanso, você pode produzir os efeitos de *marca do caçador* tendo apenas uma criatura como alvo. Não pode transferir a marca para outro alvo e não precisa se concentrar neste efeito.',48,{heritageRole:'positive'})
    ]),
    S('Jorolìn','Jorolin',48,'Nenhum','Hanyou aracnídeo descendente de yokai-aranha, capaz de caminhar em paredes e tetos, tecer redes e assumir formas menos monstruosas.','Caminhar de Aranha',[
      T('Caminhar de Aranha','Spiderwalk','Você pode mover-se para cima, para baixo e através de superfícies verticais e de cabeça para baixo em tetos, mantendo as mãos livres. Também possui deslocamento de escalada igual ao seu deslocamento-base.',48,{heritageRole:'lineage'}),
      heritageRule(48),
      T('Escalador Desajeitado','Awkward Climber','Você não recebe o deslocamento de escalada de Caminhar de Aranha e metade de suas mãos fica ocupada enquanto se movimenta por superfícies verticais ou tetos.',48,{heritageRole:'detrimental'}),
      T('Reflexos Pesados','Clunky Reflexes','Você possui desvantagem em testes de Destreza e testes de resistência de Destreza.',48,{heritageRole:'detrimental'}),
      T('Vulnerável','Vulnerable','Você possui vulnerabilidade a dano de fogo e radiante.',48,{heritageRole:'detrimental'}),
      T('Corpo Mesclável','Blending Body','Você pode conjurar *alterar-se* à vontade.',48,{heritageRole:'positive'}),
      T('Braços Extras','Extra Arms','Você possui um par adicional de braços. Eles podem segurar itens adicionais, realizar uma interação extra por turno cada um se estiverem livres, ou agir como a segunda mão de uma arma empunhada por cada mão principal para receber benefícios de Duas Mãos.',48,{heritageRole:'positive'}),
      T('Estilingue de Teia','Grapple Sling','Como uma ação bônus, você dispara uma faixa de teia para um espaço desocupado que veja a uma distância de 1,5 metro × seu bônus de proficiência (5 pés × PB). Desde que seu deslocamento não seja 0, você é puxado até esse espaço.',48,{heritageRole:'positive'}),
      T('Cuspidor de Teia','Web Spitter','Você pode produzir os efeitos de *teia* um número de vezes por Descanso Longo igual à metade de seu bônus de proficiência, arredondado para cima, recuperando um uso ao concluir um Descanso Curto. Constituição ou uma habilidade de conjuração que já possua é sua habilidade de conjuração para esse efeito.',48,{heritageRole:'positive'})
    ]),
    S('Hanyou Coelho','Rabbit Hanyou',49,'Nenhum','Hanyou de corpo efêmero que pode transformar-se em fumaça e atravessar frestas e criaturas, confundido por vezes com Flooflin de sangue misto.','Corpo de Fumaça Cinzenta',[
      T('Corpo de Fumaça Cinzenta','Body of Ashen Smoke','Você pode tornar seu corpo semelhante a névoa: é imune a Agarrado e a ficar Caído; pode atravessar sem impedimento qualquer espaço com uma abertura de pelo menos cerca de 15 cm (6 polegadas), fazendo suas posses se dissolverem em fumaça junto com você; e atravessar espaços de outras criaturas sem custo adicional de deslocamento, desde que não termine em um espaço ocupado.',49,{heritageRole:'lineage'}),
      heritageRule(49),
      T('Fome Extra','Extra Hunger','Você precisa de duas vezes mais comida e água por dia.',49,{heritageRole:'detrimental'}),
      T('Instintos de Presa','Prey’s Instincts','Você possui desvantagem em testes de resistência contra Amedrontado e, enquanto estiver Amedrontado, também sofre os efeitos da condição Lento/Sluggish da 5.19.',49,{heritageRole:'detrimental'}),
      T('Vulnerável','Vulnerable','Você possui vulnerabilidade a dano de fogo e radiante.',49,{heritageRole:'detrimental'}),
      T('Pé Sortudo','Lucky Foot','Quando obtiver 1 no d20 de uma jogada de ataque, teste de atributo ou teste de resistência, pode usar sua reação para rolar novamente e deve manter o novo resultado.',49,{heritageRole:'positive'}),
      T('Visão no Escuro do Luar','Moonlit Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, o alcance aumenta para 36 metros (120 pés) ou em 9 metros (30 pés), usando o maior valor.',49,{heritageRole:'positive'}),
      T('Corrida Fantasma','Phantom Sprint','Como uma ação bônus, você vira uma névoa prateada e se teleporta para um espaço desocupado que veja a até 3 metros × seu bônus de proficiência (10 pés × PB). Pode fazer isso um número de vezes por Descanso igual à metade do bônus de proficiência.',49,{heritageRole:'positive'}),
      T('Resiliência Sobrenatural','Uncanny Resilience','Você possui resistência a dano psíquico.',49,{heritageRole:'positive'})
    ]),
    S('Criança da Neve','Snow Child',49,'Nenhum','Hanyou relacionado a yokai do frio e das nevascas, de cabelo negro e pele descolorida por congelamento, cujo toque rouba movimento e pode congelar água ao redor.','Toque Gélido',[
      T('Toque Gélido','Frost Touch','Quando acertar uma criatura com um ataque ou quando ela falhar em um teste de resistência contra um efeito seu que cause dano, no próximo turno dela o deslocamento disponível é reduzido em 1,5 metro × seu bônus de proficiência (5 pés × PB). Criaturas imunes a frio ou imunes a Agarrado são imunes a este efeito.',49,{heritageRole:'lineage'}),
      heritageRule(49),
      T('Corpo Rangente','Creaking Body','Seu deslocamento é reduzido em 3 metros (10 pés).',49,{heritageRole:'detrimental'}),
      T('Pele Congelante','Frostbite Skin','Uma vez por turno, sempre que uma criatura tocar você para usar uma característica, magia ou item em você, ela sofre dano de frio igual à metade de seu nível. O mesmo ocorre com criaturas que começam o turno em contato com você, mas não se aplica a golpes com armas ou ataques agressivos devido à brevidade do contato.',49,{heritageRole:'detrimental'}),
      T('Vulnerável','Vulnerable','Você possui vulnerabilidade a dano de fogo e radiante.',49,{heritageRole:'detrimental'}),
      T('Ordem Gélida','Cold Order','Uma vez por Descanso, você pode produzir os efeitos de *comando* sem gastar espaço de magia, usando Constituição ou Carisma como habilidade de conjuração. Se o alvo falhar no teste de resistência, além de obedecer à ordem sofre dano de frio igual a 1d8 × seu bônus de proficiência.',49,{heritageRole:'positive'}),
      T('Movimento Silencioso','Hushed Movement','Você possui Especialização em Furtividade.',49,{heritageRole:'positive'}),
      T('Escalador da Neve','Snowclimber','Você possui resistência a dano de frio, não sofre penalidades de deslocamento ao caminhar ou escalar ambientes congelados como gelo, neve e penhascos congelados e não sofre efeitos negativos de frio extremo.',49,{heritageRole:'positive'}),
      T('Caminhante das Águas','Water Walker','Você pode congelar líquidos que toca, permitindo caminhar sobre corpos líquidos que não estejam ferventes ou mais quentes. Se estiver submerso, pode congelar o líquido ao redor como armadura e recebe +3 de CA enquanto permanecer submerso.',49,{heritageRole:'positive'})
    ]),
    S('Eco da Vontade','Will’s Echo',50,'Nenhum','Hanyou descendente de um eco de ambição que adquiriu compreensão mortal, herdando uma obsessão por aperfeiçoamento marcial e a capacidade de manifestar uma espada psíquica efêmera.','Espada Yokai',[
      T('Espada Yokai','Yokai Sword','Você pode conjurar brevemente uma arma espiritual de energia psíquica semelhante a uma espada longa, que aparece apenas durante seus ataques. Ela possui as mesmas propriedades de uma espada longa, exceto que você sempre é proficiente e o dano-base pode ser psíquico ou cortante, à sua escolha em cada uso. Você pode atacá-la sempre que faria um ataque de arma normal e também fazer um ataque com ela como ação bônus. Se outra criatura desejar afetar a arma com um efeito que tenha uma arma como alvo, como *arma imbuída*, você pode usar sua reação para materializá-la; o efeito permanece pela duração normal mesmo que a espada desapareça entre usos. No 8º nível, o primeiro ataque com a Espada Yokai que acertar em cada turno causa um dado de dano de arma adicional; no 15º nível, causa dois dados adicionais.',50,{heritageRole:'lineage'}),
      heritageRule(50),
      T('Golpes Tropeçantes','Stumbling Strikes','Se usar sua ação bônus ou ação principal para fazer um ataque com arma, quaisquer ataques feitos com o outro tipo de ação no mesmo turno têm desvantagem.',50,{heritageRole:'detrimental'}),
      T('Vulnerável','Vulnerable','Você possui vulnerabilidade a dano radiante e psíquico.',50,{heritageRole:'detrimental'}),
      T('Fortuna Zero','Zero Fortune','Você não pode obter acertos críticos.',50,{heritageRole:'detrimental'}),
      T('Proficiências Intuitivas','Intuitive Proficiencies','Você possui proficiência em todas as armaduras, armas marciais e escudos.',50,{heritageRole:'positive'}),
      T('Braços Espirituais','Spirit Arms','Ao atacar usando sua Espada Yokai, um conjunto adicional de braços espirituais empunha a arma por você, permitindo manter outros equipamentos nas mãos enquanto usa a arma com duas mãos.',50,{heritageRole:'positive'}),
      T('Mãos Manchadas','Stained Hands','Quando matar uma criatura hostil com um ataque de arma ou obtiver um acerto crítico, você recebe +1 em todas as jogadas de ataque e dano feitas com a mesma arma até o fim de seu próximo turno. O bônus é cumulativo até o máximo de seu bônus de proficiência. Se ganhar esse bônus no turno em que ele expiraria, a duração do bônus cumulativo inteiro é reiniciada.',50,{heritageRole:'positive'}),
      T('Golpe de Onda','Wave Strike','Quando fizer um ataque com arma usando sua Espada Yokai, pode tratar o alcance dela como 1,5 metro × seu bônus de proficiência (5 pés × PB).',50,{heritageRole:'positive'})
    ])
  ]);

  append('hobgoblin',[
    S('Peregrino','Forewander',51,'Sabedoria +1','Hobgoblin que vive longe das legiões, viajando por regiões selvagens e aprendendo sozinho novas perícias e proficiências ao longo do caminho.','Autotreinamento',[
      T('Caminhos Conhecidos','Known Paths','Você possui proficiência em Sobrevivência e precisa de metade da quantidade normal de comida e água para uma criatura de seu tamanho.',51),
      T('Autotreinamento','Self-Training','Escolha uma das opções: • armaduras leves, armaduras médias e uma arma marcial; • armaduras leves e três armas marciais; • armaduras leves, armaduras médias e escudos; • todas as armas marciais; • armas de fogo simples e marciais.',51),
      T('Subversão','Undermining','Quando fizer um teste de perícia baseado em Carisma ou Força, você pode usar Sabedoria no lugar do atributo normalmente exigido, representando uma abordagem deliberada e intuitiva.',51)
    ]),
    S('Caminhante Subterrâneo','Subwalker',51,'Destreza +1','Hobgoblin adaptado a túneis e ao Subterrâneo, treinado para navegar na escuridão e passar rapidamente de um esconderijo a outro.','Visão no Escuro do Soldado',[
      T('Visão no Escuro do Soldado','Soldier’s Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, o alcance aumenta em 18 metros (60 pés) ou passa a 36 metros (120 pés), usando o maior valor.',51),
      T('Mestre da Furtividade','Stealth Master','Você possui Especialização em Furtividade.',51),
      T('Investida Furtiva','Stealth Rush','Quando iniciar seu turno escondido com sucesso das criaturas ao redor, seu deslocamento aumenta em 4,5 metros (15 pés) até o fim do turno. Além disso, se sair de seu esconderijo para outro local onde possua cobertura, os primeiros 4,5 metros (15 pés) de movimento entre os dois não arriscam revelar você aos observadores.',51)
    ])
  ]);

  append('human',[
    S('Alma Negra','Black Soul',51,'Inteligência +1','Humano marcado por cultos, rituais sombrios ou entidades nefastas, cuja alma adquiriu uma influência sobrenatural que favorece dissimulação e magia destrutiva.','Agenda Oculta',[
      T('Agenda Oculta','Hidden Agenda','Você possui proficiência em Intuição e Enganação e recebe Especialização em uma delas, à sua escolha durante a criação do personagem.',51),
      T('Toque da Desolação','Touch of Desolation','Você pode produzir os efeitos de *infligir ferimentos* sem gastar espaço de magia. Para acertar, pode usar uma habilidade de conjuração que já possua ou substituir o ataque mágico por um ataque desarmado usando Força ou Destreza. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência; pode gastar usos adicionais de uma só vez para produzir a magia em um nível igual ao número de usos gastos.',51)
    ]),
    S('Consagrado','Enshrined',51,'Carisma +1','Humano criado em posição de respeito, devoção ou autoridade — como herdeiros, filhos de líderes ou escolhidos divinos — e preparado desde cedo para lidar com expectativas, perigos e interação social.','Sempre Vigilante',[
      T('Orientação','Guidance','Você foi treinado em uma especialidade e possui proficiência em uma perícia à sua escolha.',51),
      T('Comportamento Treinado','Trained Behavior','Você possui Especialização em Persuasão e Intuição.',51),
      T('Sempre Vigilante','Watchful Always','Você pode adicionar seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já permita adicionar esse bônus dessa maneira. Este bônus é adicional à possível proficiência ou Especialização em Percepção.',51)
    ]),
    S('Errante','Wanderer',51,'Constituição +1','Humano acostumado a viagens e ambientes difíceis, capaz de aproveitar intensamente momentos de descanso e manter-se pronto para agir mesmo quando parece relaxado.','Senso de Direção',[
      T('Foco da Fogueira','Campfire Focus','Sempre que gastar Dados de Vida para uma finalidade que envolva rolá-los, como recuperar pontos de vida, cada resultado recebe um bônus igual à metade de seu bônus de proficiência, arredondado para cima.',51),
      T('Senso de Direção','Directionality','Você possui vantagem em testes de Iniciativa.',52),
      T('Vida Dura','Tough Living','Seu máximo de pontos de vida aumenta em 1 no 1º nível e aumenta novamente em 1 sempre que você ganha um nível.',52)
    ])
  ]);

  append('ilthrak-yar',[
    S('Libélula','Dragonfly',52,'Destreza +1','Ilthrak-yar multialado de movimentos erráticos e extremamente rápidos, que costuma envolver o corpo com as próprias asas e usa seu voo para escaramuças imprevisíveis.','Ameaça Alada Zumbidora',[
      T('Ameaça Alada Zumbidora','Buzzing Winged Menace','Você possui deslocamento de voo laborioso igual ao seu deslocamento-base. Quando realizar a ação Disparada, recebe o dobro do deslocamento de voo laborioso que normalmente obteria dela.',52),
      T('Escaramuça Acelerada','Quickened Skirmish','Você pode usar seu traço Escaramuça Espasmódica para realizar Disparada como ação bônus, mas não pode realizar Disparada com suas outras ações no mesmo turno.',52),
      T('Crítico Antinatural','Unnatural Critical','Seu limiar de acerto crítico para jogadas de ataque feitas com armas corpo a corpo aumenta em um valor igual à metade de seu bônus de proficiência.',52)
    ]),
    S('Fera Longínqua','Farbeast',52,'Força +1','Ilthrak-yar deformado pela influência dos Reinos Distantes, assumindo uma forma aberrante e predatória que caça mentes inteligentes e se lança sobre a presa com violência psíquica.','Bote Assustador',[
      T('Bote Assustador','Eerie Pounce','Como uma ação bônus, você salta até 9 metros (30 pés) em direção a uma criatura que seja no máximo uma categoria de tamanho maior que você. O alvo faz um teste de resistência de Força, cuja CD pode usar Força, Destreza ou Constituição; em uma falha, fica Caído. Independentemente do resultado, você termina em um espaço desocupado adjacente ao alvo e não sofre dano de queda pela altura percorrida neste salto. Usos por Descanso Longo: bônus de proficiência.',52),
      T('Caçador Aterrorizante','Terrifying Hunter','Você possui resistência a dano psíquico. Quando obtiver um acerto crítico, causa dano psíquico adicional igual a 1d8 × metade de seu bônus de proficiência.',52)
    ])
  ]);

  append('kaijou',[
    S('Linhagem Alta','Tall Breed',53,'Inteligência +1','Kaijou de membros e pescoço alongados, grande porte e vigilância acentuada, capaz de usar a própria voz como uma explosão trovejante.','Alcance Estendido',[
      T('Alcance Estendido','Extended Reach','Seu alcance corpo a corpo e o alcance de efeitos de toque aumentam em 1,5 metro (5 pés).',53),
      T('Mudança de Tamanho','Size Change','Seu tamanho é Grande.',53),
      T('Chocalho Trovejante','Thunder Rattle','No lugar de um ataque com arma em seu turno, escolha uma criatura a até 9 metros (30 pés). Ela deve fazer um teste de resistência de Constituição, cuja CD usa Constituição ou Carisma. Em uma falha, sofre 1d10 + o modificador usado na CD de dano trovejante. O dano aumenta para 2d10 no 8º nível, 3d10 no 14º e 4d10 no 18º. Você pode usar este traço uma vez por turno, um número de vezes por Descanso Longo igual ao bônus de proficiência, e recupera um uso gasto ao concluir um Descanso Curto.',53)
    ])
  ]);

  append('kits-adria',[
    S('Vento Negro','Blackwind',53,'Força +1','Rara linhagem Kits’adria de pelagem cinzenta ligada ao esquecido progenitor Samaru, capaz de manipular ventos para atravessar montanhas, vales e grandes distâncias.','Sentido da Terra',[
      T('Investida de Vendaval','Gale Rush','Quando realizar a ação Disparada, você pode usar este traço para dobrar seu deslocamento total depois de calcular o movimento adicional concedido pela Disparada. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto.',53),
      T('Sentido da Terra','Landsense','Você possui Sentido Sísmico a uma distância de 3 metros × seu bônus de proficiência (10 pés × PB).',53),
      T('Salto do Vento','Wind Leap','Enquanto estiver em forma de raposa, você possui deslocamento de voo laborioso com pairar igual ao seu deslocamento-base.',53)
    ]),
    S('Dra’kiri','Dra’kiri',53,'Carisma +1','Mutação dracônica de Kits’adria causada por intensa exposição a energias naturais, capaz de assumir uma forma espiritual dracônica ligada à terra e compartilhar traços de Dragonkin.','Sangue Dracônico',[
      T('Sangue Dracônico','Dragonlike Blood','Durante a criação do personagem, escolha um Traço de Legado adicional, que deve vir da lista de Traços de Legado de Dragonkin. Além disso, pode escolher normalmente seus Traços de Legado da lista de Dragonkin. Se algum traço exigir uma Herança Dracônica, seu tipo é radiante.',53),
      T('Espírito da Fera Terrestre','Landbeast Spirit','Ao transformar-se em forma de raposa por Metamorfose Kits’adriana, você pode optar por ter o mesmo tamanho de sua forma verdadeira. Essa forma possui escamas e pelagem branca fluida, pode pairar com deslocamento de voo laborioso igual ao seu deslocamento-base, ainda pode falar seus idiomas, realizar componentes verbais e somáticos e empunhar uma única arma ou item que normalmente exija uma mão. Você ainda pode escolher uma forma de raposa Pequena comum, sem estes benefícios. Transformar-se para ou da forma maior de Espírito da Fera Terrestre exige uma ação bônus em vez da ação normalmente exigida.',53),
      T('Nutrir a Alma','Soul Nurture','Como uma ação bônus, você pode tocar uma criatura e canalizar energia natural curativa. O alvo recupera 1d4 pontos de vida × seu nível total. Você pode usar este traço um número de vezes por Descanso Longo igual à metade de seu bônus de proficiência, arredondado para cima.',54)
    ]),
    S('Pelagem Frágil','Feeblecoat',54,'Inteligência +1','Antiga linhagem Kits’adria de pântanos, quase perdida após o cisma entre Nogitsune e Luxus, marcada por pelagem hidrofóbica, olhos verdes e uma presença silenciosa capaz de dissolver-se em cinzas.','Visão no Escuro do Pântano',[
      T('Resistência Lisa','Sleek Resistance','Sua pelagem hidrofóbica concede resistência a dano ácido e vantagem em testes de perícia feitos para evitar ou escapar da condição Agarrado.',54),
      T('Visão no Escuro do Pântano','Swampland Darkvision','Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro por outro traço ou característica, seu alcance aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), usando o maior valor.',54),
      T('Passagem Inaudível','Unheard Walkway','Como uma ação bônus, você pode ficar Invisível, parecendo dissolver-se em cinzas e névoa, até o início de seu próximo turno. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto. Se usar este traço e não realizar nenhuma outra ação antes de o efeito terminar, role 1d100; se o resultado for igual ou menor que seu nível + 10, a duração passa a 1 minuto, mas termina se você realizar qualquer ação ou ação bônus.',54)
    ]),
    S('Pheropaw','Pheropaw',54,'Carisma +1','Kits’adria cuja permanência prolongada no Reino Feérico alterou a linhagem, produzindo caçadores de pelagem vegetal sazonal e influência psíquica usada para confundir presas.','Impulsos Caninos',[
      T('Impulsos Caninos','Canine Impulses','Quando realizar a ação Disparada, você pode fazer um ataque com arma como parte da mesma ação antes do fim de seu turno, desde que não fique Incapacitado.',54),
      T('Traços Feéricos','Fey Traits','Você possui vantagem em testes de resistência para resistir às condições Enfeitiçado ou Enfurecido e precisa de apenas quatro horas de descanso para concluir um Descanso Longo.',54),
      T('Clarão de Contemplação','Flash of Contemplation','Quando fizer um ataque, pode usar este traço contra o alvo para provocar uma breve confusão mental. O alvo faz um teste de resistência de Sabedoria, cuja CD usa Constituição ou Carisma; em uma falha, todos os seus ataques contra esse alvo durante o turno têm vantagem. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto.',54)
    ])
  ]);

  append('kobold',[
    S('Kobold Apanha-Palha','Strawcatch Kobold',55,'Sabedoria +1','Kobold solitário capaz de converter o pânico natural da espécie em foco e adrenalina, recuperando-se mais rapidamente e mantendo clareza em situações perigosas.','Descanso em Palha',[
      T('Descanso em Palha','Strawbed Rest','Você pode realizar um Descanso Curto adicional por Descanso Longo. Se sua mesa não utilizar as regras de Descanso de Baldur, em vez disso uma vez por Descanso Longo pode descansar por 1 minuto para receber os benefícios de um Descanso Curto.',55),
      T('Clareza Frenética','Frenzied Clarity','Você pode adicionar metade de seu bônus de proficiência, arredondado para baixo, a testes de concentração mesmo que já estivesse adicionando esse bônus. Além disso, pode adicionar seu bônus de proficiência às jogadas de Iniciativa, a menos que já o esteja fazendo.',55)
    ])
  ]);

  append('kua-hono',[
    S('Ceifador Tentacular','Tendriled Reaper',55,'Constituição +1','Kua Hono de cabeça semelhante a lula, boca circular cercada por tentáculos e forte sensibilidade psíquica, capaz de drenar vitalidade por contato e comunicar-se telepaticamente.','Voz Telepática',[
      T('Sugador de Sangue','Bloodsucker','Enquanto estiver agarrando uma criatura, pode usar sua ação bônus para prender a boca ao corpo dela. O alvo faz um teste de resistência de Constituição, cuja CD usa Força, Destreza ou Constituição. Em uma falha, sofre 2d6 + o modificador usado na CD de dano perfurante; em um sucesso, sofre metade. Se possuir sangue ou matéria orgânica consumível, você recupera pontos de vida iguais ao dano causado. O dano aumenta para 4d6 no 8º nível, 6d6 no 14º e 8d6 no 18º. Você pode usar este traço uma vez por Descanso.',55),
      T('Escudo Psíquico','Psychic Shield','Você possui resistência a dano psíquico. Pode impedir criaturas de se comunicarem telepaticamente com você, embora continue ciente das tentativas. Além disso, possui vantagem em testes de resistência contra efeitos que o obriguem a agir contra sua vontade, como *comando* ou *sugestão*.',55),
      T('Voz Telepática','Telepathic Voice','Você pode falar telepaticamente com criaturas a até 9 metros (30 pés), ou 18 metros (60 pés) enquanto estiver submerso. Criaturas que conheçam sua voz a reconhecem. Se uma criatura se comunicar telepaticamente com você a qualquer distância, você pode responder pela mesma conexão obedecendo às mesmas restrições usadas por ela.',55)
    ])
  ]);

  append('merfolk',[
    S('Sirena das Profundezas','Deep Siren',55,'Carisma +1','Povo do Mar que herdou de sirenas profundas e linhagens íncubas uma voz sobrenatural capaz de encantar, fortalecer, libertar de condições e desarmar socialmente outros seres.','Palavras Doces',[
      T('Som Arrebatador','Enrapturing Sound','Como uma ação bônus, escolha uma criatura que possa ouvi-lo a até 9 metros (30 pés) e gaste um uso para produzir um dos efeitos: • o alvo faz um teste de resistência de Carisma e, em uma falha, fica Sluggish/Lento; você pode usar sua ação bônus em turnos seguintes para manter fala ou canto, fazendo-o repetir o teste a cada vez e encerrar em sucesso; • o alvo recebe vantagem na próxima jogada de ataque ou teste de resistência; • o alvo deixa de estar Enfeitiçado, Enfurecido ou Atordoado, independentemente da origem; • o alvo tem desvantagem em testes baseados em Carisma contra você por 1 minuto enquanto não for hostil. A CD usa Constituição ou Carisma. Você possui usos por Descanso Longo iguais ao bônus de proficiência e recupera um uso ao concluir um Descanso Curto.',55),
      T('Palavras Doces','Sweet Words','Você possui Especialização em Persuasão.',55)
    ]),
    S('Rio Vermelho','Redriver',55,'Força +1','Povo do Mar de espinhos e protuberâncias vermelhas desenvolvidas para empalar presas, combinando ataques naturais à distância com grande capacidade de rastreamento e resistência física.','Rastreador das Profundezas',[
      T('Espinho Sangrento','Bloody Spine','Como uma ação bônus, você pode fazer um ataque desarmado como ataque corpo a corpo contra criatura a até 3 metros (10 pés) ou como ataque de arma arremessada contra alvo a até 18 metros (60 pés), usando Força, Destreza ou Constituição. Em um acerto, causa 1d8 de dano perfurante × seu bônus de proficiência. Você pode usar este traço duas vezes por Descanso.',55),
      T('Rastreador das Profundezas','Deep Tracker','Você possui proficiência em Investigação e Sobrevivência.',56),
      T('Couro Espesso','Leatherhide','Seu máximo de pontos de vida aumenta em 1 no 1º nível e aumenta novamente em 1 sempre que você ganha um nível.',56)
    ])
  ]);

  append('minotaur',[
    S('Alonistís','Alonistís',56,'Força +1','Minotauro tingido de sangue conhecido como debulhador do campo de batalha, especialista em ataques violentos e em absorver energia restauradora com eficiência anormal.','Corpo Sifonante',[
      T('Fúria Sombria','Dark Fury','Quando fizer um ataque com arma, pode escolher fazê-lo com vantagem; se acertar, causa 1d6 de dano de energia adicional. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência.',56),
      T('Corpo Sifonante','Siphoning Body','Quando for alvo de um efeito que role dados para restaurar pontos de vida, após os dados serem rolados você pode escolher um número deles igual ao seu bônus de proficiência e tratar esses dados como se tivessem obtido o resultado máximo.',56)
    ]),
    S('Folica','Folica',56,'Carisma +1','Minotauro menor, de temperamento moderado, chifres discretos e forte capacidade de percepção e conversa, usando presença física como instrumento social.','Conversador e Limite de Tamanho',[
      T('Força Coercitiva','Coercive Might','Você pode usar Força ou Constituição no lugar de Carisma para qualquer teste de perícia que fizer, empregando sua presença física como forma de persuasão.',56),
      T('Conversador','Conversational','Você possui proficiência e Especialização em Persuasão.',56),
      T('Limite de Tamanho','Size Limit','Durante a criação do personagem, você não pode escolher um tamanho maior que Médio.',56)
    ])
  ]);

  append('nephilim',[
    S('Sobrecarregado por Laços','Bond Burdened',56,'Carisma +1','Nephilim do Coração Duradouro criado a partir de experiências que valorizavam companheiros e entes queridos, capaz de celebrar vitórias alheias e reproduzir memórias das habilidades de seus aliados.','Celebração da Vitória Aliada',[
      T('Celebração da Vitória Aliada','Celebration of Allied Victory','Quando uma criatura aliada que você possa ver obtiver um acerto crítico ou reduzir a 0 pontos de vida uma criatura cujo ND seja maior que o ND ou nível total dela, você recebe pontos de vida temporários iguais à metade de seu nível total + 5.',56),
      T('Coração Conectivo','Connective Heart','Você possui proficiência em todas as perícias baseadas em Carisma.',56),
      T('Memória de Parentesco','Memory of Kinship','Quando fizer um teste de perícia ou teste de resistência no qual não seja proficiente, pode adicionar seu bônus de proficiência se já tiver visto uma criatura não hostil, proficiente nesse teste ou resistência, realizar a mesma jogada. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto. Se a criatura cuja memória você evoca possuía Especialização na perícia ou resistência em questão, você faz sua jogada com vantagem, mas não reproduz a Especialização.',56)
    ]),
    S('Queda','Downfall',56,'Sabedoria +1','Nephilim criado com desejo de investigar perigos, perdas e terrores para que o Coração Duradouro compreenda e se prepare contra ameaças desconhecidas.','Repelir Terror',[
      T('Intuição dos Corações','Insight into Hearts','Você possui proficiência em Intuição.',56),
      T('Repelir Terror','Repel Terror','Você possui vantagem em testes de resistência para evitar ficar Amedrontado ou Enfeitiçado. Além disso, se estiver Amedrontado em seu turno, pode usar sua ação para encerrar sobre si o efeito que causou a condição, como se tivesse obtido sucesso em quaisquer testes de resistência relevantes.',56),
      T('Pensamentos de Determinação','Thoughts of Determinism','Antes de fazer um teste de resistência, você pode rolar 1d6 e adicionar o resultado. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.',56)
    ]),
    S('Santuário','Sanctuary',57,'Carisma +1','Nephilim movido por proteger os outros e criar locais seguros, permitindo que aliados se recuperem melhor e até condensando o benefício de um Descanso Curto no início de um combate.','Memória de Porto Seguro',[
      T('Memória de Porto Seguro','Memory of Safe Harbor','Quando criaturas que você considera amigáveis concluírem um Descanso Curto em sua presença, incluindo você, recuperam pontos de vida adicionais iguais ao seu bônus de proficiência e possuem vantagem em quaisquer testes de resistência contínuos desencadeados pela conclusão de um Descanso.',57),
      T('Descanso Relâmpago','Snap Rest','Uma vez por Descanso Longo, no início de seu primeiro turno em combate, você pode receber imediatamente os benefícios de um Descanso Curto. Você não recebe os benefícios de Memória de Porto Seguro e não adiciona seu modificador de Constituição aos resultados de Dados de Vida rolados para recuperar pontos de vida. Este uso não conta contra sua quantidade de Descansos Curtos por Descanso Longo.',57)
    ])
  ]);

  append('orc',[
    S('Orc Craniamight','Craniamight Orc',57,'Inteligência +1','Orc de faculdades mentais excepcionalmente desenvolvidas que combina raciocínio rápido e instintos de combate, tornando-se hábil tanto em assuntos intelectuais quanto em confronto físico.','Um Passo à Frente',[
      T('Ignição Cognitiva','Cognitive Ignition','Quando fizer uma jogada de ataque, pode adicionar seu modificador de Inteligência a todas as jogadas de ataque e dano que fizer até o fim do turno. Usos por Descanso Longo: bônus de proficiência.',57),
      T('Um Passo à Frente','One Step Ahead','Se estiver Surpreendido em combate, ainda pode agir normalmente em seu primeiro turno. Além disso, possui vantagem em testes de Percepção.',57),
      T('Brutamontes Habilidoso','Skilled Brute','Você possui proficiência em três perícias à sua escolha. Pode trocar duas dessas escolhas por Especialização em uma perícia.',57)
    ]),
    S('Orc das Terras Mortas','Deathland Orc',57,'Constituição +1','Orc conectado ao Plano de Energia Negativa, capaz de absorver necrose, transformar dano em proteção temporária e liberar energia negativa quando sua resistência orc o impede de cair.','Resistência Necrótica',[
      T('Antinecrose','Anti-Necrosis','Quando sofrer dano necrótico, você pode usar sua reação para não sofrer dano e, em vez disso, receber pontos de vida temporários iguais ao dano que teria sofrido antes de aplicar resistência. Você não pode receber mais pontos de vida temporários que seu máximo de pontos de vida. Você pode usar este traço uma vez por Descanso.',57),
      T('Resistência Necrótica','Necrotic Resistance','Você possui resistência a dano necrótico.',57),
      T('Fúria Implacável','Relentless Fury','Quando usar Resistência Implacável, você libera uma onda de energia negativa e escolhe quaisquer criaturas a uma distância de 1,5 metro × seu bônus de proficiência (5 pés × PB), exceto você. Cada alvo faz um teste de resistência de Constituição, cuja CD usa Força ou Constituição, e sofre dano necrótico igual a 1d8 × metade de seu nível total, arredondado para cima, em uma falha. Para cada criatura que falhar, você recupera 1d4 pontos de vida depois de ser reduzido a 1 ponto de vida.',57)
    ]),
    S('Urisk','Urisk',58,'Carisma +1','Orc montanhês supostamente descendente de espíritos das montanhas, capaz de perceber vibrações da terra e transformar o corpo em pedra enquanto repousa.','Parente Montanhês Viajante',[
      T('Repouso na Pedra','Stonelaid Rest','Enquanto estiver Inconsciente, dormindo ou Incapacitado, seu corpo assume uma qualidade rochosa. Nessas condições, você possui resistência a dano contundente, perfurante e cortante e, para um observador casual, parece uma formação natural de pedra em forma humanoide.',58),
      T('Parente Montanhês Viajante','Traveling Mountainkin','Você possui Especialização em Sobrevivência e deslocamento de escalada igual ao seu deslocamento-base.',58),
      T('Sentido Sísmico','Tremorsense','Você possui Sentido Sísmico a uma distância de 3 metros × seu bônus de proficiência (10 pés × PB).',58)
    ])
  ]);

  append('petratara',[
    S('Aidía','Aidía',58,'Sabedoria +1','Mutação Pétratára quase irreconhecível como humanoide, composta por penas murchas e escamas de serpente e cercada por uma aura levemente petrificante.','Bote Bestial',[
      T('Bote Bestial','Bestial Lunge','Como uma ação bônus, você pode realizar Disparada e fazer um ataque com arma como parte da mesma ação bônus antes do fim do turno. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto.',58),
      T('Golpes Formadores de Pedra','Stoneshaping Strikes','Quando acertar uma criatura com um ataque com arma ou ataque desarmado e ao menos um dado de dano obtiver seu resultado máximo, o alvo faz um teste de resistência de Constituição, cuja CD usa Constituição ou Carisma. Em uma falha, fica parcialmente petrificado e sofre a condição Sluggish/Lento por 1 minuto. O alvo repete o teste ao fim de cada turno, encerrando o efeito em um sucesso.',58),
      T('Células Inalteráveis','Witherless Cells','Você possui resistência a dano necrótico e a dano de veneno.',58)
    ]),
    S('Moíraphorcys','Moíraphorcys',58,'Destreza +1','Descendente de górgonas com afinidade aquática, corpo escamoso e uma agonia mental intensa que pode ser liberada em um lamento hipnótico.','Derivante do Lago',[
      T('Lamento Hipnótico','Hypnotic Wail','Como uma ação bônus, escolha até um número de criaturas igual ao seu bônus de proficiência a até 9 metros (30 pés). Cada alvo faz um teste de resistência de Carisma, cuja CD usa Constituição ou Carisma, e fica Enfeitiçado por 1 minuto em uma falha. Enquanto Enfeitiçado desta forma, fica Sluggish/Lento, sofre dano psíquico igual ao seu bônus de proficiência no início de cada turno e repete o teste ao fim de cada turno, encerrando o efeito em sucesso. Você pode usar este traço uma vez por Descanso.',58),
      T('Derivante do Lago','Lakedrifter','Você pode respirar ar e água, possui deslocamento de natação igual ao seu deslocamento-base e resistência a dano ácido.',58),
      T('Garras Derretedoras','Melting Claws','Seus ataques desarmados podem causar 1d6 de dano ácido e podem usar Força ou Destreza para ataque e dano. Se outra característica alterar o dano de seus ataques desarmados, você pode causar esse dano ajustado como ácido. Além disso, pode fazer um ataque desarmado como ação bônus.',58)
    ]),
    S('Orgos’','Orgos’',58,'Constituição +1','Descendente de górgonas de aparência aviária, coberto por penas sobre pele escamosa, com pernas semelhantes às de pássaros e mobilidade incomum.','Fuga Emplumada',[
      T('Corpo Emplumado','Feathered Body','Seu corpo coberto de penas concede dois benefícios: você possui deslocamento de voo laborioso igual ao seu deslocamento-base e pode realizar Desengajar como ação bônus.',58),
      T('Fuga Emplumada','Feathered Escape','Devido à flexibilidade do corpo emplumado, você pode usar sua ação para escapar automaticamente de qualquer Agarrão ou efeito que o esteja Contendo, desde que esse efeito normalmente pudesse ser encerrado por um teste ou teste de resistência bem-sucedido.',58),
      T('Uivo Perfurante','Piercing Howl','Você aprende o truque *língua trovejante* (*thunder tongue*) e pode conjurá-lo à vontade, usando Constituição, Sabedoria ou Carisma como habilidade de conjuração.',58)
    ])
  ]);

  append('primordia',[
    S('Alma Sortuda','Lucky Soul',59,'Sabedoria +1','Primordia ligada às marés do destino em vez de a um Plano Elemental, supostamente nascida de almas que perderam apostas na Casa da Gratidão em vidas anteriores.','Dados Colidindo',[
      T('Dados Colidindo','Colliding Dice','Quando uma jogada de ataque, teste de atributo ou teste de resistência tiver simultaneamente vantagem e desvantagem, você pode ignorar a desvantagem e fazer a jogada apenas com vantagem.',59),
      T('Resistência Oportunista','Opportunistic Resistance','Você possui resistência a todo dano causado por acertos críticos, incluindo os dados de dano originais não adicionais do ataque.',59),
      T('Marés do Destino','Tides of Fate','Sua ligação com a sorte concede dois benefícios: • quando obtiver 1 no d20, pode rolar novamente e deve manter o novo resultado; • quando obtiver 20 no d20 de um ataque, esse ataque causa dano adicional igual ao seu nível total.',59)
    ],{elementalMagicSpells:{cantrip:'Orientação (Guidance)',level1:'Santuário (Sanctuary)',level2:'Arma da Fortuna (Weapon of Fortune)'}}),
    S('Anntiqe Metálico','Metal Anntiqe',59,'Força +1','Primordia nascida da sobreposição dos Planos Elementais da Terra e do Fogo, com corpo de minerais e metais moldáveis, densidade extrema e força monstruosa.','Corpo Fortalecido',[
      T('Aspecto de Aço','Aspect of Steel','Sempre que sofrer dano contundente, perfurante ou cortante, reduza o dano sofrido em um valor igual ao seu bônus de proficiência.',59),
      T('Mineramorfo','Mineramorph','Seus ataques desarmados podem ser tratados como armas e podem usar Constituição no lugar de Força para ataque e dano. Eles causam 1d8 de dano contundente, perfurante ou cortante, à sua escolha em cada ataque, salvo se outra característica conceder um dado maior. Como ação bônus, pode conceder aos ataques desarmados uma das propriedades a seguir por 1 minuto ou até alterar novamente: Acuidade, Pesada, Knuckles, Leve, Mágica, Alcance, Duas Mãos ou Versátil. Com Versátil, ao usar as duas mãos o dado de dano aumenta um passo, até no máximo d12.',59),
      T('Corpo Fortalecido','Strengthened Body','Para capacidade de carga, Agarrar/Empurrar inimigos e características que considerem tamanho, você conta como uma categoria de tamanho maior.',59)
    ],{elementalMagicSpells:{cantrip:'Defletir (Deflect)',level1:'Arma Imbuída (Infused Weapon)',level2:'Escudo de Lâminas (Shield of Blades)'}}),
    S('Alma Necrótica','Necrosoul',59,'Constituição +1','Primordia que encarna a natureza abstrata do Plano de Energia Negativa, de corpo sem cor e ressonância emocional reduzida, capaz de converter necrose em proteção e rejeitar magia.','Eu Desconhecido',[
      T('Manto de Antienergia','Anti-Energy Shroud','Quando sofrer dano de um efeito mágico, você pode usar sua reação para sofrer metade desse dano. Entretanto, você possui vulnerabilidade a dano radiante e não pode usar esta reação contra dano radiante.',59),
      T('Entropia Reversa','Reverse Entropy','Quando sofrer dano necrótico, pode escolher não sofrer dano dessa fonte e receber pontos de vida temporários iguais ao dano necrótico que teria sofrido. Usos por Descanso Longo: bônus de proficiência. Você não pode usar esta reação quando o dano necrótico se originar de você ou de um efeito produzido por você.',59),
      T('Eu Desconhecido','Unknown Self','Você possui vantagem em testes de resistência para resistir às condições Enfeitiçado, Amedrontado ou Enfurecido.',60)
    ],{elementalMagicSpells:{cantrip:'Necrose (Necrosis)',level1:'Infligir Ferimentos (Inflict Wounds)',level2:'Vento Definhante (Languishing Wind)'}})
  ]);

  append('tarnished',[
    S('Sanguíneo','Sanguine',60,'Constituição +1','Tarnished descendente de demônios que vivem de consumir sangue quente, com fibras musculares negras que ficam vermelhas ao tocar sangue e capacidade de manipulá-lo a distância.','Resistência Necrótica',[
      T('Encharcamento de Sangue','Blood Drench','Quando matar uma criatura ou obtiver um acerto crítico contra uma criatura que possua sangue, você absorve parte dele sobrenaturalmente. O alvo sofre dano necrótico adicional igual a 1d4 × seu bônus de proficiência e você recebe a mesma quantidade como pontos de vida temporários, mesmo que o alvo já esteja morto.',60),
      T('Resistência Necrótica','Necrotic Resistance','Você possui resistência a dano necrótico.',60),
      T('Manipulação Sanguínea','Sanguine Manipulation','No lugar de um ataque com arma, escolha uma criatura com sangue a até 18 metros (60 pés). Ela deve fazer um teste de resistência de Constituição, cuja CD usa Constituição ou Carisma. Em uma falha, deve usar a reação para mover-se até metade do deslocamento como você ordenar e fazer um ataque com arma contra um alvo ao alcance. Você pode usar este traço um número de vezes por Descanso igual à metade de seu bônus de proficiência.',60)
    ]),
    S('Nadador do Estige','Styxswimmer',60,'Inteligência +1','Tarnished aquático ligado a demônios tocados pelo rio Estige, de corpo quase crustáceo e braços alongados que se projetam como lanças.','Nadador Especialista',[
      T('Nadador Especialista','Expert Swimmer','Você possui deslocamento de natação igual ao seu deslocamento-base e pode respirar ar e água.',60),
      T('Braços Lanceados','Speared Arms','Seus braços são mais longos e possuem apêndices semelhantes a lanças. Seu alcance com armas corpo a corpo aumenta em 1,5 metro (5 pés). Seus ataques desarmados podem ser tratados como armas corpo a corpo com Alcance que causam 1d8 de dano perfurante; no 9º nível, o dano passa a 1d10.',60),
      T('Mente Insondável','Unfathomable Mind','Você possui vantagem em testes de resistência para resistir às condições Enfeitiçado ou Enfurecido e contra efeitos que o obriguem a agir contra sua vontade, como *comando* ou *dominar pessoa*.',60)
    ])
  ]);

  append('trealtin',[
    S('Palha Viva','Living Straw',60,'Carisma +1','Trealtin formado quando energia sobrenatural anima um corpo de palha, espantalho ou boneco de vime; é composto por centenas de fibras coordenadas em vez de um único organismo.','Resistência de Serapilheira',[
      T('Sem Ponto Vital','No Vital Spot','Seu corpo não possui um ponto específico especialmente vulnerável. Quando uma criatura obtiver um acerto crítico contra você, o ataque acerta automaticamente, mas não inclui dano proveniente de dados de dano adicionais concedidos pelo acerto crítico.',60),
      T('Resistência de Serapilheira','Sackcloth Resistance','Você possui resistência a dano de frio.',60),
      T('Despalhar','Strawshuck','Como uma ação bônus, você pode desfazer seu corpo em fios e palha e remontá-lo, junto com suas posses, em um espaço desocupado que veja a até 9 metros (30 pés). Pode usar este traço um número de vezes por Descanso igual à metade de seu bônus de proficiência.',60)
    ]),
    S('Lunatishee','Lunatishee',60,'Inteligência +1','Pequena criatura de pele de madeira nascida como um fruto de grandes flores em árvores sobrenaturais, coberta por espinhos e capaz de produzir asas frágeis semelhantes às de besouros.','Criador de Shillelagh',[
      T('Criador de Shillelagh','Shillelagh Maker','Você pode conjurar *bordão místico* à vontade usando Sabedoria, Inteligência ou Carisma como habilidade de conjuração e pode ter como alvo qualquer arma simples.',60),
      T('Pele de Espinhos','Thornskin','Quando for atingido por um ataque originado dentro de seu alcance corpo a corpo, pode usar sua reação para forçar o atacante a fazer um teste de resistência de Constituição. Em uma falha, ele sofre dano perfurante e dano de veneno, cada um igual à metade de seu nível. Usos por Descanso Longo: bônus de proficiência; recupera um uso ao concluir um Descanso Curto.',60),
      T('Asas Fracas','Weak Wings','Você pode produzir asas semelhantes às de um besouro que concedem deslocamento de voo laborioso igual ao seu deslocamento-base.',60)
    ]),
    S('Praga-Rosa','Roseblight',61,'Destreza +1','Besta vegetal semelhante a uma roseira viva ambulante, composta por esqueleto de madeira e vinhas espinhosas que podem se desenrolar para atingir criaturas distantes.','Vinhas Nefastas',[
      T('Vinhas Estendidas','Extended Vines','Seu corpo de vinhas aumenta o alcance de suas armas e de magias ou efeitos de toque em 1,5 metro × metade de seu bônus de proficiência, arredondado para cima (5 pés × metade do PB).',61),
      T('Guarda de Espinhos','Thorn Guard','Se terminar seu turno adjacente a uma ou mais criaturas e não estiver Incapacitado nem Morrer, pode atacar uma delas com um ataque desarmado usando Força, Destreza ou Constituição. Em um acerto, causa 1d6 + o modificador usado de dano perfurante. O dado aumenta para 1d8 no 8º nível, 1d10 no 13º e 2d8 no 17º.',61),
      T('Vinhas Nefastas','Vilevined','Você é imune a dano de veneno e à condição Envenenado.',61)
    ])
  ]);

  append('vanquis',[
    S('Retornado','Revenant',61,'Carisma +1','Vanquis que morreu em circunstâncias trágicas e retornou movido por uma vingança ou propósito inacabado, reconstruindo-se repetidamente até que a própria obsessão seja resolvida.','Detecção de Vida',[
      T('Nascido de um Rancor','Born from a Grudge','Sua existência está presa a um propósito não resolvido. Enquanto ele permanecer, você não pode morrer permanentemente. Ao ser reduzido a 0 pontos de vida, possui desvantagem em testes de resistência contra morte; se morrer, seu corpo se desfaz em fumaça e cinzas. Depois de 4d8 horas, ele se reconstrói com todos os pontos de vida em um espaço desocupado a até 1,6 km (1 milha) do local da morte, determinado pelo Mestre. Se seu propósito de Retornado for resolvido, você perde este traço.',61),
      T('Detecção de Vida','Life Detection','Como uma ação bônus, faça um teste de Percepção para sentir todas as criaturas vivas a uma distância de 4,5 metros × seu bônus de proficiência (15 pés × PB), percebendo-as brevemente como silhuetas brilhantes. Criaturas escondidas cujo teste de Furtividade supere seu teste não ficam visíveis, embora você perceba que estão presentes. Criaturas Invisíveis detectadas desta maneira são tratadas como visíveis para você até o fim do turno. Criaturas diretamente ligadas ao seu rancor são detectadas automaticamente dentro do alcance e você consegue distingui-las das demais.',61),
      T('Corpo Espiritual','Spirit Body','Além de seus tipos de criatura normais, você também é considerado um Espírito.',61)
    ]),
    S('Slóg','Slóg',62,'Sabedoria +1','Morto-vivo animado pela possessão de espíritos feéricos persistentes, tradicionalmente associado a mortos amaldiçoados por crueldades cometidas em vida.','Barreira Mental',[
      T('Detectar Vida','Detect Life','Você pode usar Constituição em testes de Percepção. Independentemente de usar Constituição ou Sabedoria, pode realizar testes de Sabedoria (Percepção) como ação bônus. Quando fizer isso, recebe Visão às Cegas a 3 metros (10 pés) até o início de seu próximo turno.',62),
      T('Barreira Mental','Mental Buffer','Devido à influência de espíritos incompreensíveis sobre seu corpo, você é imune à condição Enfeitiçado.',62),
      T('Tocha Passageira','Passing Torchlight','Você pode conjurar *fogo das fadas* sem gastar espaço de magia nem componentes um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Escolha Constituição, Sabedoria ou Carisma como habilidade de conjuração.',62)
    ]),
    S('Promessa Infindável','Unending Promise',62,'Carisma +1','Vanquis reanimado por um coração partido ou por amor tão intenso que ultrapassou a morte, carregando a capacidade de compreender qualquer expressão de afeto e desviar hostilidade pela força da personalidade.','Correr para Ajudar',[
      T('Linguagem do Amor','Language of Love','Você compreende todas as tentativas de comunicação de criaturas vivas. Entende todos os idiomas falados ao seu redor, embora não consiga falá-los sem aprendê-los normalmente.',62),
      T('Correr para Ajudar','Rush to Help','Você pode realizar a ação Ajudar como uma ação bônus.',62),
      T('Personalidade Sobrenatural','Uncanny Personality','Você possui um número de usos por Descanso Longo igual ao seu bônus de proficiência e recupera um uso ao concluir um Descanso Curto. Gaste um uso para um dos efeitos: • conjurar *enfeitiçar monstro* sem gastar espaço de magia nem componentes; • quando for alvo de um ataque de uma criatura que possa ver e com quem compartilhe um idioma, usar sua reação para forçá-la a fazer um teste de resistência de Sabedoria; em uma falha, ela deve escolher outra criatura como alvo ou perde o ataque e não pode tê-lo como alvo novamente pelo restante do turno. Sabedoria ou Carisma, à sua escolha, é a habilidade de conjuração para estes efeitos.',62)
    ])
  ]);

  // Metadados de auditoria da expansão racial.
  window.GRIMORIO_BBB_RACE_IDS=['animus','drackal','noxiamorph'];
  window.GRIMORIO_BBB_SUBRACE_COUNT=90;
  window.GRIMORIO_BBB_ADDITIONAL_SUBRACE_COUNT=81;
  if(window.GRIMORIO_RACE_RULES){
    window.GRIMORIO_RACE_RULES.textQuality='O catálogo combinado preserva integralmente em PT-BR as 34 raças e 196 subraças de Lyre’s Guide to Retia e acrescenta as 3 raças novas e 90 subraças de Blade, Bone, & Benefit, totalizando 37 raças e 286 subraças. As mecânicas próprias da 5.19 são mantidas conforme a fonte.';
    window.GRIMORIO_RACE_RULES.bladeBoneBenefit={source:SOURCE,sourcePages:'25–62',newRaces:3,newRaceSubraces:9,additionalSubraces:81,totalAddedSubraces:90};
  }
})();
