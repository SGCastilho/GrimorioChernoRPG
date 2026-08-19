'use strict';
// Somnus Domina — Paraprismatic Tempest (Splash Book 04), Planar Races pp. 37–48.
// Integração v5.58.0 — 4 raças-base mono-raciais + 14 Subraças Convergentes + 6 Traços de Legado Planares opcionais.
(function(){
  const SOURCE='Somnus Domina — Paraprismatic Tempest';
  const SOURCE_ID='paraprismatic-tempest';
  const slug=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const T=(id,name,originalName,description,page,extra={})=>({id,name,originalName,summary:description,description,page,...extra});
  const S=(name,originalName,page,ability,description,bloodlineTrait,originalBloodlineTrait,traits,extra={})=>({id:slug(originalName),name,originalName,page,source:SOURCE,sourceId:SOURCE_ID,ability,description,bloodlineTrait,originalBloodlineTrait,traits,...extra});
  const raceById=id=>(window.GRIMORIO_RACES||[]).find(r=>r.id===id);
  const append=(raceId,subs)=>{const r=raceById(raceId);if(!r)throw new Error('Raça-base ausente para Paraprismatic Tempest: '+raceId);const ids=new Set((r.subraces||[]).map(x=>x.id));for(const sub of subs){if(ids.has(sub.id))throw new Error('Subraça duplicada em '+raceId+': '+sub.id);r.subraces.push(sub);ids.add(sub.id);}};

  const newRaces=[
    {
      id:'bouyan',
      name:'Bouyan',
      originalName:'Bouyan',
      source:SOURCE,
      sourceId:SOURCE_ID,
      sourcePage:38,
      textRevision:'full',
      summary:'Forma de vida elemental composta de água viva, capaz de solidificar o próprio corpo, desaparecer visualmente quando submersa e sobreviver naturalmente tanto na água quanto fora dela.',
      abilityScore:'Sabedoria +2; Constituição +1.',
      meta:{
        creatureTypes:'Elemental, Humanoide',
        lifeExpectancy:'90–110 anos',
        nationalAlignment:'—',
        planarOrigin:'Plano Elemental da Água',
        planetouched:'Não',
        regions:'Plano Elemental da Água',
        size:'Pequeno ou Médio; faixa da fonte: Pequeno (2’4’’ + 3d6’’) / Médio (3’6’’ + 5d8’’)',
        alignment:'—',
        languages:'Comum e Aquan',
        speed:'9 m; natação igual ao deslocamento-base'
      },
      lore:[
        {title:'Água viva',text:'Bouyans são uma forma de vida melhor descrita como água viva. Seus corpos são feitos de líquido dotado de mente própria, que se molda em uma forma memorizada com textura sólida, fria e semelhante a gelo. Essa forma “endurecida” possui tensão superficial suficiente para tocar e interagir com outros materiais como se tivesse pele, embora mantenha aparência e movimento fluidos.'},
        {title:'Habitantes das profundezas',text:'Como seus corpos conseguem se misturar naturalmente à água e torná-los funcionalmente invisíveis, bouyans veem pouca necessidade de sair dela. Precisam de pouco alimento e são caçadores casuais, vivendo em pequenos “bandos” em vez de assentamentos completos. Alguns convivem com outros elementais, como primordia, djinns aquáticos ou povo do mar, quando isso lhes convém. Sua natureza raramente é agressiva e costuma ser mais curiosa.'},
        {title:'Exploradores de destroços',text:'A curiosidade natural dos bouyans os leva a investigar destroços de navios que afundaram recentemente. Raramente se importam com riquezas ou dinheiro mundano, mas às vezes roubam objetos que despertam seu fascínio e os mantêm dentro do próprio corpo maleável até que o objeto se desgaste ou percam o interesse.'}
      ],
      coreTraits:[
        T('ability-score-increase','Aumento no Valor de Habilidade','Ability Score Increase','Sua Sabedoria aumenta em 2 e sua Constituição aumenta em 1, até o máximo de 20.',38),
        T('additional-legacy-trait','Traço de Legado Adicional','Additional Legacy Trait','Se Bouyan for sua raça dominante/primária, você pode escolher um Traço de Legado adicional da lista de Traços de Legado dos bouyans.',38),
        T('age','Idade','Age','Bouyans são considerados maduros apenas alguns anos depois de nascer. Eles passam de uma forma infantil semelhante a um peixe para a forma humanoide apenas um ano após o nascimento.',38),
        T('amphibious','Anfíbio','Amphibious','Você pode respirar tanto ar quanto água.',38),
        T('aqua-evasion','Evasão Aquática','Aqua Evasion','Quando você for alvo de um ataque com arma, desde que seu deslocamento não seja 0, pode usar sua reação para rapidamente se contorcer e sair do caminho, fazendo o ataque errar automaticamente. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.',38),
        T('creature-type','Tipo de Criatura','Creature Type','Você é um elemental, além de ser um humanoide e um bouyan.',38),
        T('depth-resilience','Resiliência das Profundezas','Depth Resilience','Você possui resistência a dano de frio.',38),
        T('languages','Idiomas','Languages','Você pode ler, escrever e falar Comum e Aquan.',38),
        T('refractive-presence','Presença Refrativa','Refractive Presence','Quando está completamente submerso em líquido, seu corpo reflete a luz de modo a se misturar ao ambiente e você é considerado invisível. Criaturas ainda conseguem determinar onde você está e escolhê-lo como alvo, mas sofrem as penalidades de atacar ou selecionar como alvo uma criatura invisível.',38),
        T('size','Tamanho','Size','Você é Pequeno ou Médio, à sua escolha quando cria o personagem.',38),
        T('speed','Deslocamento','Speed','Seu deslocamento-base é 9 metros e você possui deslocamento de natação igual ao seu deslocamento-base.',38)
      ],
      legacyChoices:2,
      dominantLegacyBonus:1,
      legacyTraits:[
        T('beauteous-aquan','Aquan Encantador','Beauteous Aquan','Seu corpo possui um charme selvagem e encantador. Você é proficiente em Persuasão e Intimidação. Se já possuir proficiência em qualquer uma delas, pode receber Especialização em uma delas — mas não em ambas — em vez disso.',38),
        T('deep-darkvision','Visão no Escuro Profunda','Deep Darkvision','Você possui Visão no Escuro até 18 metros. Se já possuir Visão no Escuro de outra fonte, o alcance aumenta em 18 metros ou para 36 metros, o que resultar no maior alcance.',38),
        T('descending-telepathy','Telepatia Descendente','Descending Telepathy','Você pode se comunicar telepaticamente com criaturas que estejam submersas no mesmo líquido que você; elas ouvem sua voz “ecoando” a partir de onde você está, como se estivesse projetando-a. Você também pode produzir componentes verbais debaixo d’água sem precisar falar.',38),
        T('ice-armory','Arsenal de Gelo','Ice Armory','Você pode endurecer seus membros na forma de uma lâmina ou lança de gelo. Ao realizar um ataque desarmado, pode usar seus modificadores de Destreza ou Constituição nas jogadas de ataque e dano. Se acertar, causa 1d8 de dano de frio, cortante ou perfurante, à sua escolha. Se outra característica alterar o dado de dano de seu ataque desarmado, você usa o dado que preferir. Esse ataque conta como realizado com uma arma leve.',38),
        T('sonarsense','Sentido Sonar','Sonarsense','Enquanto estiver submerso em líquido, você pode detectar criaturas que também estejam submersas a uma distância igual a 6 metros multiplicados pelo seu bônus de proficiência, como se usasse Sentido Sísmico.',38),
        T('speed-swimmer','Nadador Veloz','Speed Swimmer','Seu deslocamento de natação é igual ao dobro do seu deslocamento-base.',38)
      ],
      mixedBloodTraits:[
        T('aqua-evasion','Evasão Aquática','Aqua Evasion','Você recebe o traço Evasão Aquática dos bouyans.',38),
        T('depth-dweller','Habitante das Profundezas','Depth Dweller','Você recebe os traços Anfíbio e Resiliência das Profundezas dos bouyans.',38),
        T('refractive-presence','Presença Refrativa','Refractive Presence','Você recebe o traço Presença Refrativa dos bouyans.',38)
      ],
      subraces:[],
      editorialNote:'A fonte apresenta Bouyan como uma mono-raça, isto é, uma raça sem subraças.'
    },
    {
      id:'horma',
      name:'Horma',
      originalName:'Horma',
      source:SOURCE,
      sourceId:SOURCE_ID,
      sourcePage:39,
      textRevision:'full',
      summary:'Elemental insectoide do Plano Elemental da Terra, de corpo negro flexível coberto por quitina óssea branca, marcado por mobilidade explosiva, Sentido Sísmico e uma antiga influência do Abismo.',
      abilityScore:'Destreza +2; Carisma +1.',
      meta:{
        creatureTypes:'Elemental, Humanoide',
        lifeExpectancy:'400–500 anos',
        nationalAlignment:'—',
        planarOrigin:'Plano Elemental da Terra',
        planetouched:'Não',
        regions:'Plano Elemental da Terra',
        size:'Pequeno ou Médio; faixa da fonte: Pequeno (2’4’’ + 3d8’’) / Médio (4’7’’ + 4d10’’)',
        alignment:'—',
        languages:'Comum e Terran',
        speed:'6 m'
      },
      lore:[
        {title:'Nascidos de colmeias subterrâneas',text:'Horma são habitantes elementais do Plano Elemental da Terra, onde emergem de “colmeias” subterrâneas, nascendo de poças de seda e minerais que se combinam sob as condições corretas. São semelhantes a insetos e possuem uma cultura muito particular, com hierarquia definida na qual senhores, cavaleiros e vassalos são escolhidos entre eles.'},
        {title:'Origem Abissal',text:'Os horma foram distorcidos pelo Abismo em tempos antigos e carregam em si sua natureza viva, caótica e unificadora, apesar de não possuírem natureza de corruptores. Isso deixou a maioria dos horma “oca” e vazia, com pouca individualidade. Horma especialmente poderosos parecem ainda mais desprovidos de personalidade, como se sua proeza existisse ao custo dela.'},
        {title:'Aparência Encouraçada',text:'Horma possuem corpos formados principalmente por um material negro e flexível, coberto por seções de quitina branca semelhante a osso que lembram armaduras ou máscaras. Seus corpos costumam ter aspecto insectoide, lembrando besouros, aranhas ou escorpiões. Uma característica marcante é uma “máscara” semelhante a crânio que protege sua cabeça delicada e pode se regenerar rapidamente quando destruída.'}
      ],
      coreTraits:[
        T('ability-score-increase','Aumento no Valor de Habilidade','Ability Score Increase','Sua Destreza aumenta em 2 e seu Carisma aumenta em 1, até o máximo de 20.',39),
        T('additional-legacy-trait','Traço de Legado Adicional','Additional Legacy Trait','Se Horma for sua raça dominante/primária, você pode escolher um Traço de Legado adicional da lista de Traços de Legado dos horma.',39),
        T('age','Idade','Age','Horma vivem por um tempo excepcionalmente longo. Possuem pouco conceito de idade adulta e são considerados crescidos apenas alguns meses depois de nascer; seu crescimento pessoal entre os seus é medido por méritos: quem os treinou, o peso de suas ações e sua presença natural determinam sua posição. Podem viver entre 400 e 500 anos.',39),
        T('buzzdash','Arrancada Zumbidora','Buzzdash','Quando você realiza a ação Disparada, a quantidade de deslocamento adicional que recebe é dobrada.',39),
        T('creature-type','Tipo de Criatura','Creature Type','Você é um elemental, além de ser um humanoide e um horma.',39),
        T('languages','Idiomas','Languages','Você pode ler, escrever e falar Comum e Terran.',39),
        T('pogo-bound','Salto de Rebote','Pogo Bound','Quando você acerta uma criatura com um ataque com arma em seu turno, desde que seu deslocamento não tenha sido reduzido a 0, pode aumentar seu deslocamento em 3 metros até o fim desse turno; a criatura atingida por esse ataque não pode realizar ataques de oportunidade contra você durante esse período. Você pode se beneficiar deste efeito um número de vezes por turno igual à metade do seu bônus de proficiência, arredondado para cima.',39),
        T('size','Tamanho','Size','Você é Pequeno ou Médio, à sua escolha quando cria o personagem.',39),
        T('speed','Deslocamento','Speed','Seu deslocamento-base é 6 metros.',39),
        T('tremorsense','Sentido Sísmico','Tremorsense','Você possui Sentido Sísmico até uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência.',39)
      ],
      legacyChoices:2,
      dominantLegacyBonus:1,
      legacyTraits:[
        T('abyssal-heart','Coração Abissal','Abyssal Heart','Devido à ausência de personalidade, você não pode ficar Enfeitiçado nem Amedrontado.',39),
        T('dark-escape','Fuga Sombria','Dark Escape','Sempre que for reduzido a 0 pontos de vida e começar a Morrer, você não cai no chão e não sofre penalidades de deslocamento. Sua forma física se torna uma sombra elemental escura do que era, capaz de se mover normalmente, e todos os ataques contra você nesse estado têm desvantagem. Você retorna à forma normal se recuperar 1 ou mais pontos de vida.',39),
        T('expert-combatant','Combatente Especialista','Expert Combatant','Você é proficiente com todas as armas corpo a corpo simples e marciais.',39),
        T('harden-shell','Endurecer Carapaça','Harden Shell','Quando sofre dano de um ataque com arma, pode usar sua reação para endurecer sua pele e carapaça; todo o dano que você sofrer até o fim desse turno é reduzido à metade. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.',40),
        T('quickdash','Disparada Rápida','Quickdash','Você pode realizar a ação Disparada como uma ação bônus um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto quando conclui um Descanso Curto.',40),
        T('spiderclimb','Escalada de Aranha','Spiderclimb','Você pode caminhar sobre superfícies verticais e horizontais sem ocupar seus membros principais, sem precisar de ferramentas ou testes.',40)
      ],
      mixedBloodTraits:[
        T('tremorsense','Sentido Sísmico','Tremorsense','Você recebe o traço Sentido Sísmico dos horma.',40),
        T('pogo-bound','Salto de Rebote','Pogo Bound','Você recebe o traço Salto de Rebote dos horma.',40)
      ],
      subraces:[],
      editorialNote:'A fonte apresenta Horma como uma mono-raça, isto é, uma raça sem subraças.'
    },
    {
      id:'silvistar',
      name:'Silvistar',
      originalName:'Silvistar',
      source:SOURCE,
      sourceId:SOURCE_ID,
      sourcePage:40,
      textRevision:'full',
      summary:'Criatura elemental nascida do vento e de tempestades do Plano Elemental do Ar, coberta por penas brancas eletrificadas, sem boca aparente e dotada de voo laborioso, instinto de caça e aura sobrenatural.',
      abilityScore:'Destreza +2; Sabedoria +1.',
      meta:{
        creatureTypes:'Elemental, Humanoide',
        lifeExpectancy:'40–80 anos',
        nationalAlignment:'—',
        planarOrigin:'Plano Elemental do Ar',
        planetouched:'Não',
        regions:'Plano Elemental do Ar',
        size:'Cabeçalho da fonte: Pequeno (2’ + 2d12’’) ou Médio (3’ + 4d12’’); traço Tamanho: Médio ou Grande',
        alignment:'—',
        languages:'Comum e Auran',
        speed:'9 m; voo laborioso igual ao deslocamento-base'
      },
      lore:[
        {title:'Nascidos do vento',text:'Silvistars são criaturas nascidas do vento, formadas nos picos do Plano Elemental do Ar. Tendem a surgir das ruínas de áreas devastadas por furacões poderosos ou tempestades de raios, muitas vezes emergindo das crateras de descargas planares. Vivem para caçar, voar e explorar. Seus corpos são inteiramente cobertos por penas brancas pálidas com carga estática permanente, possuem pés e garras semelhantes aos de aves e uma única estrutura circular semelhante a pedra na cabeça que funciona como olho.'},
        {title:'Instintos Impulsivos',text:'Silvistars conseguem viver alimentando-se da energia elétrica do ar e, por isso, costumam seguir tempestades para caçar e sobreviver. Quando não conseguem fazê-lo, preferem encontrar lugares altos para repousar e empoleirar-se, de onde então planam para explorar o mundo ao redor.'},
        {title:'Estilo de Vida Solitário',text:'Essas criaturas pseudoaviárias raramente se importam em viajar juntas e não procuram sua própria espécie. São capazes de falar e se comunicar; sua voz emerge de dentro do corpo como um baixo estrondo no ar, e não de qualquer musculatura semelhante a uma boca. Muitas vezes se alimentam absorvendo nutrientes do ar e da terra através de garras e penas, mas, quando desejam consumir alimento diretamente, parecem inseri-lo no próprio corpo coberto de penas, onde é ingerido por meios desconhecidos apesar da ausência de boca.'}
      ],
      coreTraits:[
        T('ability-score-increase','Aumento no Valor de Habilidade','Ability Score Increase','Sua Destreza aumenta em 2 e sua Sabedoria aumenta em 1, até o máximo de 20.',40),
        T('additional-legacy-trait','Traço de Legado Adicional','Additional Legacy Trait','Se Silvistar for sua raça dominante/primária, você pode escolher um Traço de Legado adicional da lista de Traços de Legado dos silvistars.',40),
        T('age','Idade','Age','Silvistars nascem de descargas de raios e de locais onde a energia elétrica é intensa. Eles surgem de fendas e buracos no solo já com uma consciência “adulta” de si mesmos e do mundo. Começam pequenos, do tamanho de uma ave ou galinha comum, mas crescem até o tamanho adulto em questão de dias. Vivem então entre 40 e 80 anos — mais se conseguirem se manter carregados de energia elétrica — e, quando chega a hora de morrer, seu corpo simplesmente se dispersa ao vento como uma nuvem de penas.',40),
        T('creature-type','Tipo de Criatura','Creature Type','Você é um elemental, além de ser um humanoide.',40),
        T('hunting-instincts','Instintos de Caça','Hunting Instincts','Como caçador experiente de instintos aguçados, você é proficiente em Percepção e Sobrevivência e pode adicionar seu bônus de proficiência aos testes de Iniciativa, a menos que outra característica já permita fazê-lo.',41),
        T('languages','Idiomas','Languages','Você pode falar, ler e escrever Comum e Auran.',41),
        T('silver-aura','Aura Prateada','Silver Aura','Seu corpo exala uma aura sobrenatural benéfica. Seus ataques desarmados são considerados prateados e mágicos, assim como as armas que você empunha.',41),
        T('size','Tamanho','Size','Você é Médio ou Grande.',41),
        T('speed','Deslocamento','Speed','Seu deslocamento-base é 9 metros e você possui deslocamento de voo laborioso igual ao seu deslocamento-base.',41),
        T('storm-resilience','Resiliência à Tempestade','Storm Resilience','Você possui resistência a dano elétrico.',41)
      ],
      legacyChoices:2,
      dominantLegacyBonus:1,
      legacyTraits:[
        T('bright-down','Plumagem Brilhante','Bright Down','Seu corpo pode emitir naturalmente luz plena em um raio de 9 metros, e penumbra por mais 9 metros. Você pode ativar ou suprimir essa iluminação como uma ação bônus; se ficar Incapacitado, ela termina imediatamente.',41),
        T('lightning-channeler','Canalizador de Raios','Lightning Channeler','Uma vez por Descanso, você pode produzir os efeitos da magia infused weapon em um nível igual ao seu bônus de proficiência. Ao produzir os efeitos dessa forma, deve escolher dano elétrico.',41),
        T('quick-hibernation','Hibernação Rápida','Quick Hibernation','Enquanto está dormindo, você mantém uma percepção intuitiva do mundo ao redor e processa subconscientemente o que ouve como faria enquanto estivesse acordado. Sua Percepção passiva não é afetada pelo sono e você não pode ser Surpreendido como resultado de ser atacado enquanto está Inconsciente.',41),
        T('terror-screech','Grito de Terror','Terror Screech','Como uma ação bônus, você pode soltar um grito que produz energia sônica e força cada criatura a até 3 metros de você a realizar um teste de resistência de Constituição. A CD usa Constituição ou Carisma como sua habilidade para este efeito. Cada criatura que falhar sofre dano trovejante igual a 1d8 multiplicado pelo seu bônus de proficiência. Você pode usar este traço uma vez por Descanso.',41),
        T('windburst','Rajada de Vento','Windburst','No seu turno, desde que seu deslocamento não seja 0 e você não esteja Incapacitado, pode receber os efeitos da ação Desengajar sem gastar nenhuma ação. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência.',41),
        T('winged-evolution','Evolução Alada','Winged Evolution','Sua forma emplumada incorpora grandes asas, concedendo deslocamento de voo igual ao seu deslocamento-base.',41)
      ],
      mixedBloodTraits:[
        T('silver-aura','Aura Prateada','Silver Aura','Você recebe o traço Aura Prateada dos silvistars.',41),
        T('storm-resilience','Resiliência à Tempestade','Storm Resilience','Você recebe o traço Resiliência à Tempestade dos silvistars.',41)
      ],
      subraces:[],
      editorialNote:'A fonte apresenta Silvistar como uma mono-raça. Há uma inconsistência interna de tamanho: o cabeçalho racial informa Pequeno/Médio, enquanto o traço Tamanho declara Médio/Grande. O Grimório preserva as duas informações sem escolher uma como correção.'
    },
    {
      id:'tinderbine',
      name:'Tinderbine',
      originalName:'Tinderbine',
      source:SOURCE,
      sourceId:SOURCE_ID,
      sourcePage:41,
      textRevision:'full',
      summary:'Habitante elemental do Plano Elemental do Fogo com corpo de madeira mineralizada carbonizada e uma cabeça-orbe envolta em chamas, capaz de suportar calor extremo, perceber por calor e vibração e explodir em fogo ao acertar criticamente.',
      abilityScore:'Constituição +2; Força +1.',
      meta:{
        creatureTypes:'Elemental, Humanoide',
        lifeExpectancy:'150–200 anos',
        nationalAlignment:'—',
        planarOrigin:'Plano Elemental do Fogo',
        planetouched:'Não',
        regions:'Plano Elemental do Fogo; relações mercenárias com a Metrópole de Bronze',
        size:'Pequeno, Médio ou Grande; faixa da fonte: Pequeno (3’ + 1d12’’) / Médio (4’ + 3d12’’) / Grande (6’ + 4d12’’)',
        alignment:'—',
        languages:'Comum e Ignan',
        speed:'9 m'
      },
      lore:[
        {title:'Caçadores dos Campos de Fogo',text:'Tinderbines são habitantes marcantes do Plano Elemental do Fogo e costumam viver em tribos errantes pelos ermos vulcânicos. Seus corpos, capazes de produzir e canalizar chamas naturalmente, pertencem a caçadores que gostam de procurar e desafiar outros habitantes do plano. Eles muito raramente aparecem fora dele.'},
        {title:'Relações Mercenárias',text:'A Metrópole de Bronze procura bandos de tinderbines para oferecer trabalho como soldados, guarda-costas, trabalhadores ou catadores, normalmente em troca de materiais ou bens que eles não conseguem produzir. Muitos tinderbines aceitam esses acordos e mantêm uma relação forte com os djinns da Metrópole.'},
        {title:'Fisiologia Variada',text:'Acredita-se que tinderbines sejam ecos de almas mortais que morreram no Plano Elemental do Fogo, ou almas perdidas de pessoas mortas pelo fogo vivendo uma segunda vida. Essa ideia é reforçada pelo fato de seus corpos, embora sempre apresentem a mesma pele e a mesma cabeça, lembrarem diferentes tipos de criatura, incluindo povo-lagarto, animais, dragonkin, corruptores e outras formas bípedes. Tinderbines nascem de maneira estranha: emergem do próprio solo do Plano Elemental do Fogo como cadáveres saindo de uma sepultura. Sua verdadeira origem não é conhecida, mas outros tinderbines parecem ter uma noção vaga de onde novos indivíduos surgirão e podem procurá-los para recebê-los.'},
        {title:'Forma carbonizada',text:'O corpo de um tinderbine é feito de um material de madeira mineralizada e carbonizada, ao mesmo tempo rochoso e semelhante a madeira queimada. Sua cabeça é substituída por uma esfera negra chamuscada cercada por chamas, que desaparecem enquanto ele dorme ou está Inconsciente.'}
      ],
      coreTraits:[
        T('ability-score-increase','Aumento no Valor de Habilidade','Ability Score Increase','Sua Constituição aumenta em 2 e sua Força aumenta em 1, até o máximo de 20.',41),
        T('additional-legacy-trait','Traço de Legado Adicional','Additional Legacy Trait','Se Tinderbine for sua raça dominante/primária, você pode escolher um Traço de Legado adicional da lista de Traços de Legado dos tinderbines.',41),
        T('age','Idade','Age','Tinderbines vivem mais do que mortais centenários e podem alcançar 200 anos. Seus corpos emergem já adultos do Plano Elemental do Fogo, e suas mentes estão imediatamente prontas para processar o mundo como as de um adulto. Nascem com uma noção relativamente completa de si mesmos e com a capacidade de se comunicar, como se herdassem esse conhecimento de uma vida passada.',41),
        T('creature-type','Tipo de Criatura','Creature Type','Você é um elemental, além de ser um humanoide e um tinderbine.',42),
        T('dry-blindsight','Visão às Cegas Seca','Dry Blindsight','Sua cabeça em chamas enxerga normalmente, mas você também detecta o mundo ao redor por calor e vibrações. Você possui Visão às Cegas até uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência.',42),
        T('dry-heat-resilience','Resiliência ao Calor Seco','Dry Heat Resilience','Você possui resistência a dano de fogo.',42),
        T('languages','Idiomas','Languages','Você pode ler, escrever e falar Comum e Ignan.',42),
        T('overburn','Supercombustão','Overburn','Quando obtém um acerto crítico em qualquer ataque, o efeito se intensifica e explode em chamas, causando uma grande rajada de dano adicional. Todo o dano desse ataque se torna dano de fogo e você causa dano adicional igual a 1d6 multiplicado pelo seu bônus de proficiência.',42),
        T('size','Tamanho','Size','Você é Pequeno, Médio ou Grande, à sua escolha quando cria o personagem.',42),
        T('speed','Deslocamento','Speed','Seu deslocamento-base é 9 metros.',42),
        T('unquenchable-lungs','Pulmões Inextinguíveis','Unquenchable Lungs','Seu corpo não precisa de ar; por isso, você não sofre os efeitos nocivos de qualquer coisa prejudicial que possa respirar e pode existir no vácuo. Entretanto, quando fica submerso, suas chamas são apagadas e você passa a ser tratado como se estivesse prendendo a respiração — como se precisasse respirar — até que sua cabeça inteira deixe de estar submersa.',42)
      ],
      legacyChoices:2,
      dominantLegacyBonus:1,
      legacyTraits:[
        T('combustion-focus','Foco de Combustão','Combustion Focus','Você pode canalizar brevemente energia ardente através do corpo para aumentar suas capacidades mentais ou físicas. Escolha duas perícias: você pode usar Constituição no lugar do valor de habilidade normalmente usado por elas.',42),
        T('flashing-darkvision','Visão no Escuro Cintilante','Flashing Darkvision','Você possui Visão no Escuro até 18 metros. Se já possuir Visão no Escuro de outra fonte, o alcance aumenta em 18 metros ou para 36 metros, o que resultar no maior alcance.',42),
        T('hurl-flame','Arremessar Chama','Hurl Flame','No lugar de um ataque com arma, você pode realizar um ataque desarmado como um ataque com arma à distância, produzindo uma chama e arremessando-a contra um alvo a uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência. Você pode usar Força, Destreza ou Constituição para esse ataque, que causa dano de fogo igual a 1d6 multiplicado pela metade do seu bônus de proficiência, mais o valor da habilidade escolhida.',42),
        T('hyperburn','Hipercombustão','Hyperburn','Seu traço Supercombustão calcula o dano adicional como 1d10 multiplicado pelo seu bônus de proficiência, em vez de 1d6.',42),
        T('rockclimber','Escalador de Rocha','Rockclimber','Você possui deslocamento de escalada igual ao seu deslocamento-base e não precisa de ferramentas ou testes para escalar superfícies rochosas ou ricas em minerais.',42),
        T('searing-dash','Disparada Abrasadora','Searing Dash','Você pode se impulsionar para a frente em uma explosão de chamas, permitindo realizar a ação Disparada como uma ação bônus. Você pode fazer isso um número de vezes por Descanso igual ao seu bônus de proficiência.',42)
      ],
      mixedBloodTraits:[
        T('gasping-nature','Natureza Ofegante','Gasping Nature','Você recebe os traços Resiliência ao Calor Seco e Pulmões Inextinguíveis dos tinderbines.',42),
        T('overburn','Supercombustão','Overburn','Você recebe o traço Supercombustão dos tinderbines.',42)
      ],
      subraces:[],
      editorialNote:'A fonte apresenta Tinderbine como uma mono-raça, isto é, uma raça sem subraças.'
    }
  ];

  window.GRIMORIO_RACES=window.GRIMORIO_RACES||[];
  const ids=new Set(window.GRIMORIO_RACES.map(r=>r.id));
  for(const race of newRaces){
    if(ids.has(race.id))throw new Error('ID de raça duplicado em Paraprismatic Tempest: '+race.id);
    window.GRIMORIO_RACES.push(race);
    ids.add(race.id);
  }

  // Fase racial 2 — Subraças Convergentes, pp. 43–48.
  // Estas opções pertencem a raças-base publicadas em Lyre e preservam a fonte própria desta expansão.
  append('arhcoon',[
    S('Arhcoon Azeban','Azeban Arhcoon',43,'Sabedoria +1','Os Azeban são arhcoons semelhantes a cães que possuem poderes comparáveis aos de um espírito trapaceiro. Originam-se dos Planos Elementais da Terra e da Água e combinam características de ambos. São conhecidos por seus gritos explosivos e ensurdecedores, que rugem com a força de uma enorme cachoeira atingindo as rochas abaixo.','Faro de Caçador','Hunting Nose',[
      T('earthen-skip','Salto Terroso','Earthen Skip','Quando você usa seu traço Pressa da Criatura, o deslocamento adicional que recebe da ação Disparada pode ser usado como deslocamento de teletransporte. Você só pode usar esse deslocamento para se teleportar para espaços que estejam tocando um material natural, como pedra ou terra, ou que estejam submersos em água.',43),
      T('hunting-nose','Faro de Caçador','Hunting Nose','Você possui Especialização em testes de Percepção ou Sobrevivência, à sua escolha.',43),
      T('wavecrash-yell','Grito de Impacto das Ondas','Wavecrash Yell','No lugar de um ataque com arma, uma vez por turno, você pode soltar um latido ensurdecedor contra uma criatura que possa ouvi-lo a até 18 metros. O alvo deve realizar um teste de resistência de Constituição, cuja CD usa Constituição ou Carisma, sofrendo dano trovejante igual a 1d6 multiplicado pelo seu bônus de proficiência em caso de falha.',43)
    ])
  ]);

  append('capy-hado',[
    S('Guardieth','Guardieth',43,'Inteligência +1','Guardieth são capy’hados originários do Plano Elemental da Água que vivem em regiões de sobreposição com o Plano Elemental do Fogo, formando enormes fontes termais chamadas de “fontes dos lordes” por aqueles que cuidam delas. Seus corpos são resfriados por forças elementais, permitindo que sobrevivam até nas fontes mais quentes, e eles produzem gelo e vento ao girar.','Submerso e sem Fôlego','Sunk and Breathless',[
      T('guardian-of-consumables','Guardião dos Consumíveis','Guardian of Consumables','Você pode produzir os efeitos de purificar alimentos e bebidas uma vez por Descanso Longo, sem gastar espaço de magia nem exigir componentes.',43),
      T('spin-out-furnace','Fornalha Giratória','Spin Out Furnace','Como uma ação bônus, você pode se enrolar em uma bola e girar violentamente, gerando uma onda de energia fria ou quente ao seu redor. Cada criatura a até 3 metros deve realizar um teste de resistência de Destreza, cuja CD usa Constituição, Sabedoria ou Carisma, sofrendo dano de frio ou fogo, à sua escolha, igual a 1d8 multiplicado pelo seu bônus de proficiência em caso de falha. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.',43),
      T('sunk-and-breathless','Submerso e sem Fôlego','Sunk and Breathless','Você pode respirar tanto ar quanto água e possui deslocamento de natação igual ao seu deslocamento-base.',44)
    ])
  ]);

  append('dragonkin',[
    S('Dragonkin Elemental','Elemental Dragonkin',44,'Força +1','Os Planos Elementais abrigam dragões que abandonaram a dependência de escamas e das divisões cromáticas ou metálicas, evoluindo para se adequar aos próprios ambientes. Dragões dos fossos, tundras, pântanos, vulcões e outras regiões produzem poderosas energias elementais, e existem dragonkin que refletem essa transformação.','Escamas Fortificadas','Fortified Scales',[
      T('elemental-heritage','Herança Elemental','Elemental Heritage','Seu tipo de herança dracônica corresponde ao Plano Elemental de onde você vem: • Ácido — Dragão do Fosso, Plano da Terra; • Frio — Dragão da Tundra, Plano da Água; • Fogo — Dragão do Vulcão, Plano do Fogo; • Elétrico — Dragão da Tempestade, Plano do Ar; • Veneno — Dragão do Pântano, Plano da Terra.',44),
      T('elemental-manifestation','Manifestação Elemental','Elemental Manifestation','Você pode conjurar a magia lâmina flamejante uma vez por Descanso, sem exigir concentração, espaço de magia ou componentes. Ao fazer isso, o tipo de dano da arma se torna o tipo da sua herança dracônica, e a magia é conjurada em um nível igual ao seu bônus de proficiência. Você pode realizar ataques com a arma resultante usando Força ou Destreza, ou uma habilidade de conjuração que já possua, e também pode usá-la para realizar um ataque como ação bônus. Visualmente, a arma pode assumir a aparência de qualquer arma que desejar, mas suas funções permanecem as descritas no texto da magia.',44),
      T('fortified-scales','Escamas Fortificadas','Fortified Scales','Você possui resistência ao tipo de dano da sua herança dracônica.',44),
      T('movement-type','Tipo de Deslocamento','Movement Type','Com base no dragão correspondente à sua herança elemental, você possui um tipo de deslocamento com velocidade igual ao seu deslocamento-base: • Dragão do Fosso — escavação; • Dragão da Tundra — natação; • Dragão da Tempestade — voo; • Dragão do Pântano — escalada; • Dragão do Vulcão — escalada.',44)
    ])
  ]);

  append('enaretos',[
    S('Destruição','Destruction',45,'Força +1','O poder de um Enáretos da Destruição provém de energias dos Planos Elementais infundidas em seu corpo. Suas asas brilham com antigos padrões tribais, enquanto luz do plano correspondente atravessa seu corpo e se derrama no mundo ao redor. Eles nascem com um forte desejo de usar seu poder para eliminar invasores e repelir forças dos planos inferiores, mas também para manter afastadas as forças de todos os planos exteriores.','Conhecimento do Mítico','Knowledge of the Mythical',[
      T('devastating-tempest','Tempestade Devastadora','Devastating Tempest','Como uma ação bônus, você pode invocar energias tempestuosas para protegê-lo e fortalecê-lo por 1 minuto. Durante esse período: • você também possui resistência a todos os tipos de dano tempestuoso; • a primeira vez que acertar uma criatura com um ataque em cada turno, causa dano tempestuoso adicional igual ao seu nível; • uma vez por turno, no lugar de um ataque com arma, você pode produzir os efeitos de flecha cromática usando Força, Destreza ou uma habilidade de conjuração que já possua para determinar seu bônus de ataque. Isso não exige espaço de magia, é conjurado em um nível igual à metade do seu bônus de proficiência e deve causar dano tempestuoso. Você pode usar esta característica um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência.',45),
      T('elemental-bulwark','Baluarte Elemental','Elemental Bulwark','Você recebe um bônus em jogadas de ataque e testes de resistência realizados contra elementais igual à metade do seu bônus de proficiência.',45),
      T('knowledge-of-the-mythical','Conhecimento do Mítico','Knowledge of the Mythical','Você possui Especialização nas perícias Arcanismo e Natureza.',45)
    ])
  ]);

  append('feralus',[
    S('Pyrline','Pyrline',45,'Força +1','Percorrendo vulcões, desertos e os campos ardentes do Plano Elemental do Fogo, o Pyrline é um feralus imbuído de fogo cuja pelagem queima intensamente quando ele fica agitado ou empolgado. Esses felinos de fogo frequentemente irrompem em chamas quando estão emocionados, chocados ou ameaçados, tornando-se um espetáculo perigoso.','Olhos de Luz Brilhante','Bright Light Eyes',[
      T('bright-light-eyes','Olhos de Luz Brilhante','Bright Light Eyes','O alcance da sua Visão no Escuro é dobrado, e você enxerga na escuridão como se ela fosse luz plena em vez de penumbra. Se você não possuir Visão no Escuro, passa a possuí-la até 18 metros.',45),
      T('fire-fur','Pelagem de Fogo','Fire Fur','Você pode produzir os efeitos da magia repreensão infernal sem gastar espaço de magia, usando Destreza, Constituição ou Carisma como habilidade de conjuração, um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Ao fazer isso, pode gastar um uso adicional para conjurá-la em um nível igual ao seu bônus de proficiência.',45),
      T('inferno-dash','Disparada Infernal','Inferno Dash','Quando você realiza a ação Disparada ou usa sua Pressa Felina, possui vantagem nos ataques que realizar até o fim do turno. Se tiver usado Pressa Felina, os ataques que acertar durante esse período causam um dado adicional de dano de fogo.',45)
    ])
  ]);

  append('flooflin',[
    S('Guairneán','Guairneán',45,'Constituição +1','O elétrico Guairneán é repleto de relâmpagos, e sua pelagem se arrepia levemente sempre que ele faz algo estressante ou exigente. Sua pelagem possui marcas azuis e verde-claras semelhantes a relâmpagos, que brilham quando ele invoca o poder do Plano Elemental do Ar para acelerar seu movimento.','Veloz','Quick',[
      T('gusting-heel','Calcanhar de Rajada','Gusting Heel','Quando usa seu Salto Lunar ou realiza um salto em altura ou em distância, você pode projetar uma rajada de vento a partir do espaço de onde saltou ou daquele em que aterrissou, escolhendo apenas um deles. Cada criatura a até 3 metros do espaço escolhido deve realizar um teste de resistência de Força, cuja CD usa Força, Destreza ou Constituição. Em caso de falha, a criatura fica Caída. Você só pode fazer isso uma vez por turno.',45),
      T('quick','Veloz','Quick','Seu deslocamento-base aumenta em 3 metros.',46),
      T('shock-resilience','Resiliência a Choque','Shock Resilience','Você possui resistência a dano elétrico.',46),
      T('whirlwind-hop','Salto de Redemoinho','Whirlwind Hop','Quando você usa seu Salto Lunar, a distância que pode saltar é dobrada e você recebe deslocamento de voo pairado igual ao seu deslocamento-base até o início do seu próximo turno. Além disso, pode escolher desaparecer como um raio e atingir diretamente o ponto onde pretende aterrissar, teleportando-se em linha reta até lá em vez de saltar.',46)
    ])
  ]);

  append('hadislin',[
    S('Berilo','Beryl',46,'Sabedoria +1','O corpo de um Hádislin Berilo é forjado quando esse nascido de maldição é exposto aos poderes dos Planos Elementais, resultando em uma confluência de diversas forças elementais. Às vezes eles são mais alinhados com um Plano Elemental do que com outro, e a cor de suas características de berilo é determinada por esse alinhamento; em outros casos, a ligação com um plano específico é simplesmente a característica predominante.','Sintonia Tempestuosa','Tempest Attunement',[
      T('burst-aura','Aura Explosiva','Burst Aura','Quando obtém um acerto crítico em qualquer ataque, você causa ao alvo dano tempestuoso adicional igual ao seu nível.',46),
      T('cursed-legacy','Legado Amaldiçoado','Cursed Legacy','Conforme o traço Legado Amaldiçoado dos hádislins, você conhece as magias flecha cromática e sopro do dragão. Você pode conjurá-las conforme descrito pelo traço Legado Amaldiçoado.',46),
      T('elemental-demon-tide','Maré Demoníaca Elemental','Elemental Demon Tide','Como uma ação bônus, você pode fazer seu corpo irromper em poder elemental por 1 minuto. Durante esse minuto: • você se torna resistente a todos os tipos de dano tempestuoso; • quando acerta qualquer ataque com arma, causa dano tempestuoso adicional igual à metade do seu nível; • pode transformar todo o dano que causar durante esse minuto no tipo de dano de sua Sintonia Tempestuosa; • recebe deslocamento de voo pairado e deslocamento de natação iguais ao seu deslocamento-base; • como uma ação, pode conjurar flecha cromática sem gastar espaço de magia, usando Força, Constituição ou Carisma como habilidade de conjuração. Ela é conjurada em um nível igual ao seu bônus de proficiência e deve causar um tipo de dano tempestuoso. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência.',46),
      T('tempest-attunement','Sintonia Tempestuosa','Tempest Attunement','Ao criar seu personagem, escolha um tipo de dano tempestuoso com base no plano ao qual está alinhado. Você é imune a esse tipo de dano. Esse deve ser o tipo escolhido para os traços Maré Demoníaca Elemental e Aura Explosiva, salvo quando eles disserem “todos os tipos de dano tempestuoso”.',46)
    ],{cursedLegacySpells:{characterLevel3:'Flecha Cromática',characterLevel5:'Sopro do Dragão'},crystalHadislin:true,editorialNote:'Conflito entre fontes registrado: Paraprismatic Tempest declara que o Bloodline Trait de cada Subraça Convergente pode ser obtido pelas regras de Sangue Misto, enquanto a regra de Sangue Misto dos Hádislin em Lyre’s Guide to Retia exclui traços de Hádislin Cristalinos. O Grimório preserva as duas instruções e não elimina silenciosamente nenhuma delas.'})
  ]);

  append('hanyou',[
    S('Emberash','Emberash',46,'Nenhum','O yokai Emberash nasce da confluência entre energias elementais e yokai que residem em aromas, ventos e cinzas. Seus corpos tremulam com cinza e incenso, que se acendem e exalam aromas de diferentes planos e lugares, correspondendo aos poderes extraídos desses locais. Por causa da composição de cinzas desses indivíduos, qualquer coisa capaz de dispersá-los ou diluir seus corpos lhes causa dificuldades.','Incenso Tempestuoso e Fraqueza do Incenso','Tempest Incense & Incense Weakness',[
      T('heritage-traits-detrimental','Traços de Herança — Prejudiciais','Heritage Traits (Detrimental)','Escolha um dos traços prejudiciais abaixo, que você recebe imediatamente. Você pode remover permanentemente um Traço de Herança prejudicial depois de alcançar o 8º nível e concluir um Descanso Longo e, conforme a frase seguinte da própria fonte, “o segundo” quando alcançar o 13º nível e concluir um Descanso Longo.',46,{heritageRole:'rule'}),
      T('ash-dissolution','Dissolução em Cinzas','Ash Dissolution','Quando você fica submerso em líquido, seu corpo começa a se diluir. Seu deslocamento é reduzido para 3 metros, e você sofre 1d8 de dano sem tipo no início de cada um dos seus turnos enquanto permanecer submerso, ou quando ficar submerso pela primeira vez no seu turno.',46,{heritageRole:'detrimental'}),
      T('soft-constitution','Constituição Frágil','Soft Constitution','Devido à composição incomum do seu corpo, você possui desvantagem em testes de resistência de Constituição.',46,{heritageRole:'detrimental'}),
      T('vulnerable','Vulnerável','Vulnerable','Você possui vulnerabilidade a dano trovejante e radiante.',46,{heritageRole:'detrimental'}),
      T('heritage-traits-positive','Traços de Herança — Positivos','Heritage Traits (Positive)','Escolha dois dos traços positivos abaixo, que você recebe imediatamente.',46,{heritageRole:'rule'}),
      T('advanced-resilience','Resiliência Avançada','Advanced Resilience','Quando usa Incenso Tempestuoso para receber uma resistência, você pode escolher um tipo adicional de dano tempestuoso ao qual se tornar resistente; esse tipo não pode ser um ao qual você esteja vulnerável por Fraqueza do Incenso. Você não recebe, para esse segundo tipo, a fraqueza correspondente de Fraqueza do Incenso.',46,{heritageRole:'positive'}),
      T('smoke-sabotage','Sabotagem de Fumaça','Smoke Sabotage','Quando for atacado por uma criatura a até 3 metros, você pode produzir uma explosão de fumaça e vapores que a força a realizar um teste de resistência de Constituição, cuja CD usa Constituição, Sabedoria ou Carisma. Em caso de falha, o ataque erra e é desperdiçado, e a criatura não pode atacá-lo novamente durante aquele turno. Você pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Isso não exige uma reação, mas você não pode estar Incapacitado ao usá-lo.',46,{heritageRole:'positive'}),
      T('smokestep','Passo de Fumaça','Smokestep','Como uma ação, você pode se desfazer em poeira e cinzas e se teleportar para um espaço desocupado que possa ver a uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência.',46,{heritageRole:'positive'}),
      T('untouchable-fumes','Vapores Intocáveis','Untouchable Fumes','Você não pode ficar Agarrado, Caído ou Impedido, a menos que algo envolva completamente seu corpo para produzir esse efeito.',46,{heritageRole:'positive'}),
      T('incense-weakness','Fraqueza do Incenso','Incense Weakness','Quando usa Incenso Tempestuoso para mudar o tipo de dano ao qual é resistente, você se torna vulnerável a outro tipo de dano de acordo com a resistência escolhida. Isso funciona como um Traço de Herança prejudicial e pode ser removido quando você removeria um deles. As correspondências são: • ácido — fraqueza a elétrico; • frio — fraqueza a fogo; • fogo — fraqueza a ácido; • elétrico — fraqueza a frio; • veneno — fraqueza a elétrico.',46,{heritageRole:'lineage'}),
      T('tempest-incense','Incenso Tempestuoso','Tempest Incense','Sempre que conclui um Descanso, você pode ajustar a composição do seu corpo para torná-lo resistente a um tipo de dano tempestuoso. Essa resistência permanece até a próxima vez que você usar esta característica. Ao fazer isso, seu corpo assume o aroma de uma paisagem associada a esse tipo de energia.',47,{heritageRole:'lineage'})
    ],{
      heritageRules:{positiveChoices:2,detrimentalChoices:1,removeDetrimentalAt:[8,13],secondaryPositiveChoices:1,secondaryDetrimentalChoices:1,secondaryBloodlineAutomatic:true,secondaryLegacySlotsUsed:1},
      editorialNote:'Inconsistência preservada da fonte: a instrução de Heritage Traits (Detrimental) manda escolher 1 traço prejudicial, mas a mesma frase prevê remover “o segundo” no 13º nível. O Grimório mantém a escolha explícita de 1 e registra a referência conflitante, sem inventar um segundo traço obrigatório.',
      originalBloodlineTraits:['Tempest Incense','Incense Weakness']
    })
  ]);

  append('ilthrak-yar',[
    S('Prismette','Prismette',47,'Constituição +1','Os ilthrak-yar Prismette se desenvolveram em resposta às energias elementais que vazavam para suas colmeias. Eles desenvolveram uma carapaça reflexiva capaz de repelir energias elementais e permitir que se desloquem com mais facilidade entre planos perigosos. Seu comportamento tende ao isolacionismo, e esses ilthrak-yar agem com um senso de honra raramente visto entre os seus.','Blindagem Prismática','Prismatic Shielding',[
      T('feromental-claws','Garras Feromentais','Feromental Claws','Uma vez por Descanso, você pode produzir os efeitos da magia arma infundida, mas deve escolher um tipo de dano tempestuoso para o efeito. A magia não exige concentração quando conjurada dessa forma, sua duração passa a ser 1 minuto e ela é conjurada em um nível igual ao seu bônus de proficiência.',47),
      T('prismatic-shielding','Blindagem Prismática','Prismatic Shielding','Quando sofre dano tempestuoso, você pode usar sua reação para reduzir esse dano à metade.',47),
      T('survivalist','Sobrevivencialista','Survivalist','Você possui Especialização na perícia Sobrevivência.',47)
    ])
  ]);

  append('kaijou',[
    S('Linhagem Exterior','Outer Breed',47,'Carisma +1','Kaijou da Linhagem Exterior se desenvolveram para sobreviver nos Planos Elementais, adquirindo sentidos e defesas adicionais para resistir às criaturas que caçam aqueles que atravessam esses planos. Seus corpos assumem diversas formas e tamanhos, normalmente com características adicionais baseadas nos elementos do plano de onde vieram.','Resistência Tempestuosa','Tempest Resistance',[
      T('elemental-sense','Sentido Elemental','Elemental Sense','Você consegue farejar a presença de elementais e efeitos mágicos na área, uma capacidade desenvolvida para detectar perigos nos Planos Elementais. Você sente a direção e a localização de elementais e de criaturas sob efeitos mágicos a uma distância igual a 6 metros multiplicados pelo seu bônus de proficiência. Essas criaturas não podem se Esconder de você e, se estiverem invisíveis, você sabe sua localização, embora ainda possua desvantagem em ataques contra elas.',47),
      T('size-option','Opção de Tamanho','Size Option','Você é Pequeno, Médio ou Grande.',47),
      T('tempest-resistance','Resistência Tempestuosa','Tempest Resistance','Escolha um tipo de dano tempestuoso. Você possui resistência a esse tipo de dano.',47)
    ])
  ]);

  append('kits-adria',[
    S('Burjelle','Burjelle',47,'Carisma +1','Burjelle são uma linhagem de kits’adria cuja genética foi tomada por poder elemental, transformando sua pelagem em uma cor marcante correspondente ao elemento ao qual estão alinhados, com kitscratch em matizes prismáticos mutáveis e garras que ardem com poder planar. Considera-se que, se um kits’adria suficientemente prolífico surgir de uma determinada linhagem elemental de Burjelle, ele poderia formar a raiz de uma nova linhagem de kits’adria como o First to Skulk, mas isso ainda não aconteceu.','Golpe Tempestuoso e Tipo Tempestuoso','Tempest Strike & Tempest Type',[
      T('planar-claw','Garra Planar','Planar Claw','Você pode conjurar uma explosão de poder elemental no lugar de qualquer ataque com arma, realizando-a como um ataque desarmado. Esse ataque usa Força, Destreza ou Carisma nas jogadas de ataque e dano. Em um acerto, causa 1d6 do seu tipo de dano tempestuoso. O dado aumenta para 1d8 no 10º nível e 1d10 no 16º nível. Esse ataque conta como uma arma leve.',47),
      T('power-within','Poder Interior','Power Within','Ao invocar a energia planar dentro de si, você pode escolher usar Carisma em suas jogadas de ataque e dano, assim como como habilidade de conjuração para qualquer coisa que exija uma.',47),
      T('tempest-strike','Golpe Tempestuoso','Tempest Strike','Quando acerta um alvo com seu tipo de dano tempestuoso e ele possui resistência a esse dano, você pode ignorar a resistência e causar dano normalmente.',47),
      T('tempest-type','Tipo Tempestuoso','Tempest Type','Ao criar seu personagem, escolha um tipo de dano tempestuoso. Esse é o seu tipo de dano tempestuoso para as características de kits’adria.',47)
    ],{originalBloodlineTraits:['Tempest Strike','Tempest Type']})
  ]);

  append('kobold',[
    S('Kobold Pele de Prata','Silverskin Kobold',47,'Constituição +1','O Kobold Pele de Prata evoluiu para sobreviver em ambientes úmidos e frios, onde prospera. Possui pele branca e gélida capaz de se misturar à neve e à névoa e de endurecer em resposta a traumas, desviando ataques de armas. Quando ameaçados, esses kobolds gostam de se enrolar em uma bola e se esconder em bancos de neve, onde parecem fazer parte do ambiente.','Nadar e Deslizar','Swim and Slide',[
      T('cold-resilience','Resiliência ao Frio','Cold Resilience','Você possui resistência a dano de frio.',47),
      T('ice-shell','Carapaça de Gelo','Ice Shell','Quando sofre dano, você pode usar sua reação para congelar sua pele até ficar sólida e reduzir o dano perfurante, contundente e cortante combinado que sofrer desse ataque em um valor igual ao seu nível. Em seguida, aplique a mesma redução a todos os ataques realizados contra você até o início do seu próximo turno. Se sofrer dano de fogo, o efeito termina imediatamente. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.',47),
      T('swim-and-slide','Nadar e Deslizar','Swim and Slide','Você possui deslocamento de natação igual ao seu deslocamento-base e, enquanto estiver sobre neve, sob chuva ou névoa, ou submerso em água, é considerado como tendo três quartos de cobertura.',48)
    ])
  ]);

  append('nephilim',[
    S('Travessia','Traversal',48,'Constituição ou Carisma +1','Nefilim da Travessia procuram testar as fronteiras entre as coisas. Buscam cruzar limites planares e conhecer mundos além do Material. Seu senso de propósito emerge das descobertas que fazem, dos seres elementais que encontram e das diferentes formas de vida sobre as quais aprendem.','Passo Vinculado','Bound Step',[
      T('bound-step','Passo Vinculado','Bound Step','Como uma ação bônus, você pode se teleportar para um espaço desocupado que possa ver a uma distância em metros igual a 4,5 multiplicados pelo seu bônus de proficiência, desaparecendo em um clarão de luz prismática e reaparecendo no destino. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.',48),
      T('memory-of-another-place','Memória de Outro Lugar','Memory of Another Place','Sempre que conclui um Descanso Longo, escolha um tipo de dano tempestuoso. Você se recorda das memórias daqueles que vieram antes de você e lidaram com esse tipo de dano e suas condições, tornando-se resistente a esse tipo de dano até a próxima vez que alterá-lo desta maneira.',48)
    ])
  ]);

  append('vanquis',[
    S('Osso de Cinzas','Ashbone',48,'Força +1','Aqueles que morrem por chamas mágicas no Plano Elemental do Fogo, ou em uma pira repleta de cadáveres encharcados por pensamentos persistentes, podem se erguer novamente como um corpo animado e chamuscado em busca de um último desejo. Os Osso de Cinzas possuem pele enegrecida e ossos carbonizados, apresentando uma visão aterrorizante para os demais.','Corpo de Pira','Pyre Body',[
      T('burnt-veins','Veias Queimadas','Burnt Veins','Você não possui sangue. Qualquer efeito que drenaria ou sugaria seu sangue, ou que drenaria sua vida, simplesmente falha em afetá-lo dessa maneira. Isso inclui efeitos como Drenar Vida de um wraith ou a Mordida de um vampiro.',48),
      T('grasping-inferno','Inferno Agarrador','Grasping Inferno','Você possui Especialização em testes de Atletismo e pode tentar Agarrar outra criatura como uma ação bônus. Se uma criatura iniciar o turno Agarrada por você, ela deve realizar um teste de resistência de Constituição, cuja CD usa Força, Constituição ou Carisma. Em caso de falha, sofre dano de fogo igual a três vezes o seu bônus de proficiência, pois o contato com seu corpo a incendeia e queima.',48),
      T('pyre-body','Corpo de Pira','Pyre Body','Você é imune a dano de fogo.',48)
    ])
  ]);

  if(window.GRIMORIO_RACE_RULES){
    window.GRIMORIO_RACE_RULES.textQuality='O catálogo combinado preserva o conteúdo racial revisado de Lyre, Blade, Bone, & Benefit, Zagalhta’s Exolunar Collection e Paraprismatic Tempest. As raças marcadas como texto integral mantêm as mecânicas 5.19 em PT-BR, com divergências editoriais da fonte explicitamente sinalizadas.';
    window.GRIMORIO_RACE_RULES.paraprismaticTempest={
      source:SOURCE,
      sourceId:SOURCE_ID,
      sourcePages:'37–48',
      racePages:'38–42',
      newRaces:4,
      newRaceSubraces:0,
      convergentSubraces:14,
      subracePages:'43–48',
      tempestDamageTypes:['Ácido','Frio','Fogo','Elétrico','Veneno'],
      planarLegacyTraits:[
        {id:'adept-geomentalist',name:'Geomentalista Adepto',originalName:'Adept Geomentalist',page:37,description:'Você possui vantagem em testes de resistência contra condições extremas, como calor, frio e clima intenso. Terreno difícil não mágico não impõe penalidade ao seu deslocamento.'},
        {id:'energy-resistance',name:'Resistência Energética',originalName:'Energy Resistance',page:37,description:'Escolha dano de frio, fogo, elétrico, trovejante, radiante ou necrótico. Você possui resistência ao tipo de dano escolhido.'},
        {id:'planar-traveler',name:'Viajante Planar',originalName:'Planar Traveler',page:37,description:'Você se adaptou aos efeitos severos de planos alternativos. Você obtém sucesso automaticamente em testes de resistência realizados contra Exposição Planar.'},
        {id:'prismatic-rebuke',name:'Repreensão Prismática',originalName:'Prismatic Rebuke',page:37,description:'Você aprende a magia hellish rebuke e pode conjurá-la um número de vezes por Descanso Longo igual ao seu bônus de proficiência, sem gastar espaço de magia, usando Força, Constituição ou Carisma como habilidade de conjuração. Ao conjurá-la dessa forma, pode fazer com que cause qualquer tipo de dano ao qual você possua resistência ou imunidade no lugar do dano de fogo.'},
        {id:'uncanny-energy',name:'Energia Sobrenatural',originalName:'Uncanny Energy',page:37,description:'Escolha um tipo de dano ao qual você possua resistência ou imunidade, exceto contundente, perfurante ou cortante. Quando causar esse tipo de dano a uma criatura resistente a ele, a resistência dela é ignorada.'},
        {id:'unified-elemental-core',name:'Núcleo Elemental Unificado',originalName:'Unified Elemental Core',page:37,description:'Seu corpo pode concentrar energia planar em uma fonte de poder mágico. Você pode tratar Constituição como sua habilidade de conjuração para qualquer magia que conjure, exceto quando ela se originar de um item mágico, pergaminho ou outra fonte que determine uma CD ou bônus de ataque mágico fixos.'}
      ]
    };
  }
})();
