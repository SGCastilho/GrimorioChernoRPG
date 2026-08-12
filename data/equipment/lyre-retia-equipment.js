'use strict';

(function registerLyreEquipment(registry) {
  if (!registry?.registerEquipmentCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a equipamentos precisa ser carregado antes de lyre-retia-equipment.js.');

  const properties = {
    clivagem: {
      label: 'Clivagem', originalName: 'Cleaving', page: 517,
      text: 'Quando esta arma reduz uma criatura a 0 pontos de vida, o portador pode escolher outra criatura adjacente ao alvo original e dentro do alcance da arma para realizar uma jogada de ataque adicional contra ela. Em um acerto, essa criatura sofre o dano que excedeu os pontos de vida restantes do alvo original.'
    },
    eidolica: {
      label: 'Eidólica', originalName: 'Eidolic', page: 517,
      text: 'Uma arma eidólica pode ferir adequadamente seres como Eidolons. Ela ignora qualidades de proteção divina e resistências descritas para esses seres, inclusive capacidades de restaurar repetidamente a própria vida. Armas eidólicas causam dano Eidólico.'
    },
    firme: {
      label: 'Firme', originalName: 'Firm', page: 517,
      text: 'A arma fica bem presa a você. Você tem vantagem em testes de habilidade para evitar ser desarmado, e agressores têm desvantagem em testes feitos para roubar, remover ou desarmar esta arma.'
    },
    soqueiras: {
      label: 'Soqueiras', originalName: 'Knuckles', page: 517,
      text: 'Uma arma com esta propriedade pode ser usada sempre que um ataque desarmado com os punhos for solicitado. Características que consideram ataques desarmados para seus efeitos também podem ser aplicadas a ataques realizados com esta arma.'
    },
    secundaria: {
      label: 'Secundária', originalName: 'Secondary', page: 517,
      text: 'A arma possui uma segunda parte pronta para atacar, como uma lâmina secundária ou uma extremidade com peso. Quando você ataca com esta arma, pode imediatamente usar sua ação bônus para realizar um segundo ataque com ela. Esse segundo ataque deve usar Destreza nas jogadas de ataque e dano.'
    },
    avancada: {
      label: 'Avançada', originalName: 'Advanced', page: 518,
      text: 'Esta arma exige uma camada adicional de proficiência além da proficiência normal com armas de fogo. Você precisa ser proficiente no tipo de arma de fogo e especificamente no uso desta arma. Quando ganharia proficiência com um instrumento ou ferramenta, pode escolher proficiência nesta arma em seu lugar. Uma criatura sem essa proficiência ainda é tratada como proficiente ao dispará-la, mas deve rolar 1d100; em 31 ou mais, a arma falha em disparar.'
    },
    laminada: {
      label: 'Laminada', originalName: 'Bladed', page: 518,
      text: 'Uma arma de fogo laminada possui uma borda afiada. Ela pode realizar ataques como uma espada curta se tiver a propriedade Leve, ou como uma espada longa se não tiver. Quando usada dessa forma, nenhum modificador de atributo é adicionado à jogada de dano.'
    },
    rajada: {
      label: 'Rajada', originalName: 'Burst Fire', aliases: ['Burst-fire'], page: 518,
      text: 'A arma pode ser disparada normalmente ou, como uma ação, pulverizar um cubo de 3 metros centrado em um ponto dentro de seu alcance normal. Cada alvo na área realiza uma salvaguarda de Destreza contra CD 8 + o modificador usado para atacar com a arma + seu bônus de proficiência. Cada criatura que falhar sofre uma rolagem de dano separada da arma. A quantidade de alvos não pode exceder a munição restante, e toda a munição carregada é consumida independentemente de quantos alvos forem afetados.'
    },
    'recarga-completa': {
      label: 'Recarga Completa', originalName: 'Full Reload', page: 518,
      text: 'Funciona como Recarga Pesada, mas é especialmente incômoda e difícil de recarregar. No mesmo turno em que recarrega esta arma, uma criatura não pode se mover mais do que metade de seu deslocamento.'
    },
    'recarga-pesada': {
      label: 'Recarga Pesada', originalName: 'Heavy Reload', page: 518,
      text: 'Funciona como Recarga, mas recarregar esta arma sempre exige uma ação.'
    },
    recarga: {
      label: 'Recarga', originalName: 'Reload', page: 518,
      text: 'A arma só pode disparar um número determinado de vezes antes de precisar ser recarregada. Uma criatura pode recarregá-la usando uma ação ou uma ação bônus, à escolha. O número indicado informa quantos disparos a arma comporta antes da recarga.'
    },
    carregamento: {
      label: 'Carregamento', originalName: 'Loading', page: 516,
      text: 'Devido ao tempo necessário para carregar esta arma, você pode disparar apenas uma peça de munição com ela ao usar uma ação, ação bônus ou reação para atacar, independentemente do número de ataques que normalmente poderia realizar.'
    },
    'tiro-precisao': {
      label: 'Tiro de Precisão', originalName: 'Sniping', page: 518,
      text: 'A arma possui uma mira ou instrumento de precisão. Ela pode ser disparada até seu alcance longo sem impor desvantagem se o atirador estiver caído, estabilizando a mira, ou se usar sua ação bônus para mirar e esse for o único ataque que realizar no turno. Se ambas as condições forem satisfeitas, a jogada de ataque também recebe vantagem.'
    },
    gatilho: {
      label: 'Gatilho', originalName: 'Trigger', page: 518,
      text: 'A arma possui uma arma de fogo integrada e pode funcionar das duas formas. A propriedade informa o dano do gatilho, alcance e recarga. Ela pode ser disparada como uma arma de fogo, e sua classificação simples ou marcial acompanha a arma corpo a corpo. Quando um ataque corpo a corpo com a arma acerta, o portador pode usar uma ação bônus para disparar e adicionar o dano de gatilho à jogada de dano, sem adicionar modificador de atributo ao dano do gatilho. Salvo indicação em contrário, recarregar uma arma com Gatilho sempre exige uma ação.'
    },
    pesada: {
      label: 'Pesada', originalName: 'Heavy', page: 517,
      text: 'Além das regras normais da propriedade Pesada, as regras de Tamanho de Equipamento da 5.19 determinam que um item Pesado não pode ser usado por uma criatura de categoria de tamanho inferior àquela para a qual o item foi produzido.'
    },
    leve: {
      label: 'Leve', originalName: 'Light', page: 517,
      text: 'Além das regras normais da propriedade Leve, as regras de Tamanho de Equipamento da 5.19 determinam que um item Leve não pode ser usado por uma criatura de categoria de tamanho superior àquela para a qual o item foi produzido.'
    }
  };

  const armorRules = {
    'furtividade-desvantagem': {
      label: 'Furtividade: Desvantagem', page: 516,
      text: 'Enquanto usa este escudo, o usuário tem desvantagem em testes de Destreza (Furtividade), conforme a tabela do equipamento.'
    },
    'forca-minima': {
      label: 'Força mínima', page: 516,
      text: 'Este equipamento exige o valor de Força indicado pela tabela para ser utilizado conforme suas regras.'
    },
    'escudo-ca': {
      label: 'Bônus de CA do escudo', page: 516,
      text: 'Este escudo fornece o bônus de Classe de Armadura indicado em sua ficha enquanto estiver sendo empunhado.'
    }
  };

  function prop(id, value) { return value !== undefined && value !== null && value !== '' ? { id, value } : { id }; }
  function weapon(id, name, group, attackType, price, damage, damageType, weight, props, extra) {
    return {
      id: 'lyre-' + id, name, type: 'weapon', group, attackType, price, damage, damageType, weight,
      properties: props || [], sourcePage: 516, ...(extra || {})
    };
  }
  function firearm(id, name, group, price, damage, damageType, weight, props, extra) {
    return weapon(id, name, group, 'distancia', price, damage, damageType, weight, props, {
      weaponFamily: 'firearm', tags: ['Arma de fogo'], ...(extra || {})
    });
  }
  function ammunition(id, name, price, metric, extra) {
    return {
      id: 'lyre-' + id, name, type: 'ammunition', category: extra?.category || 'firearm', price,
      weight: extra?.weight || '—', metric, sourcePage: extra?.sourcePage || 518,
      description: extra?.description || '', aliases: extra?.aliases || [], originalName: extra?.originalName,
      unitPrice: extra?.unitPrice, bundleSize: extra?.bundleSize
    };
  }

  const items = [
    weapon('soqueiras-combate', 'Soqueiras de Combate', 'simples', 'corpo-a-corpo', '10 po', '1d4', 'concussão', '1 kg', [prop('firme'), prop('soqueiras'), prop('leve')], {
      originalName: 'Combat Knuckles', description: 'Arma empunhada no punho e estendida sobre os nós dos dedos, ajudando golpes desarmados. Também pode ser costurada em luvas ou manoplas feitas para recebê-la.'
    }),
    weapon('foice-combate', 'Foice de Combate', 'simples', 'corpo-a-corpo', '10 po', '1d6', 'cortante', '2 kg', [prop('clivagem'), prop('alcance'), prop('versatil','1d8')], {
      originalName: 'Combat Scythe', description: 'Versão reforçada e destrutiva da foice agrícola, projetada para rasgar e atravessar carne e armadura.'
    }),
    weapon('adaga-disparo', 'Adaga de Disparo', 'simples', 'corpo-a-corpo', '60 po', '1d6', 'perfurante', '1,5 kg', [prop('leve'), prop('arremesso','6/18 m'), prop('gatilho','2d6 perfurante · 3/9 m · recarga 1')], {
      originalName: 'Dagger, Blasting', aliases: ['Blasting Dagger'], description: 'Adaga com uma arma de fogo de um único disparo integrada ao cabo, semelhante à empunhadura de um revólver e equipada com um gatilho oculto.'
    }),
    weapon('lanca-curta', 'Lança Curta', 'simples', 'corpo-a-corpo', '1 po', '1d6', 'perfurante', '1 kg', [prop('leve'), prop('arremesso','6/18 m')], {
      originalName: 'Shortspear', description: 'Lança com cerca de dois terços do comprimento de uma lança convencional, permitindo ser empunhada com maior destreza.'
    }),

    weapon('corrente-laminada', 'Corrente Laminada', 'marcial', 'corpo-a-corpo', '12 po', '1d6', 'cortante', '2,5 kg', [prop('acuidade'), prop('alcance'), prop('secundaria'), prop('especial')], {
      originalName: 'Bladed Chain', description: 'Corrente com elos afiados ou, mais comumente, uma longa corrente metálica com lâminas curtas em suas extremidades, capaz de atingir alvos a maior distância.',
      specialRule: 'Enquanto estiver agarrando uma criatura, você tem vantagem em ataques com esta arma contra essa criatura.', specialPage: 515
    }),
    weapon('bolas', 'Bolas', 'marcial', 'corpo-a-corpo', '5 po', '—', '—', '2,5 kg', [prop('especial'), prop('arremesso','3/9 m')], {
      originalName: 'Bolas', description: 'Dois pesos presos às pontas de cordões entrelaçados, arremessados para amarrar uma criatura.',
      specialRule: 'As bolas afetam criaturas do mesmo tamanho do equipamento ou uma categoria menor (Médio por padrão); têm desvantagem contra alvos maiores e falham contra criaturas fora desses limites. Quando atingem uma criatura com membros, ela fica restringida e seu deslocamento é reduzido a 0. Em um acerto crítico, ela também fica caída. A criatura pode remover as bolas como se estivesse escapando de um agarrão (CD 14). O cordão pode ser cortado por uma arma que cause dano cortante após sofrer 5 pontos de dano; ele possui CA 13.', specialPage: 515
    }),
    weapon('manoplas-combate', 'Manoplas de Combate', 'marcial', 'corpo-a-corpo', '15 po', '1d8', 'concussão', '2,5 kg', [prop('firme'), prop('soqueiras'), prop('versatil','1d10')], {
      originalName: 'Combat Gauntlets', description: 'Armaduras espessas que cobrem antebraços e mãos e reduzem o impacto causado ao próprio corpo durante golpes.',
      specialRule: 'Ataques com outras armas feitos usando uma mão coberta por uma Manopla de Combate têm desvantagem. Apesar de Versátil, o dado de dano 1d10 só pode ser usado se o portador estiver usando duas Manoplas de Combate e utilizar ambas no ataque.', specialPage: 515
    }),
    weapon('martelo-grande', 'Martelo Grande', 'marcial', 'corpo-a-corpo', '50 po', '1d12', 'concussão', '9 kg', [prop('pesada'), prop('duas-maos')], {
      originalName: 'Greathammer', description: 'Martelo maciço com uma enorme cabeça pesada, capaz de esmagar o que estiver em seu caminho. A fonte o descreve como difícil de empunhar sem força extrema, mas não fornece um valor mínimo de Força na tabela.'
    }),
    weapon('foice-grande', 'Foice Grande', 'marcial', 'corpo-a-corpo', '40 po', '1d10', 'cortante', '5 kg', [prop('clivagem'), prop('pesada'), prop('alcance'), prop('duas-maos')], {
      originalName: 'Greatscythe', description: 'Variação ampliada da Foice de Combate com uma lâmina enorme e maior peso por trás dos golpes.',
      specialRule: 'Para utilizar a propriedade Alcance desta arma, o portador deve possuir Força 18 ou mais. Caso contrário, a arma é tratada como se não possuísse Alcance.', specialPage: 515, requirementText: 'Força 18 para usar Alcance'
    }),
    weapon('gunblade', 'Gunblade', 'marcial', 'corpo-a-corpo', '250 po', '1d8', 'cortante', '2,5 kg', [prop('gatilho','2d8 perfurante · 3/9 m · recarga 2'), prop('versatil','1d10')], {
      description: 'Arma laminada de tamanho e peso aproximados aos de uma espada, curvada para lembrar um rifle e equipada com um cano que permite disparos.'
    }),
    weapon('gunlance', 'Gunlance', 'marcial', 'corpo-a-corpo', '300 po', '1d10', 'cortante', '5 kg', [prop('pesada'), prop('alcance'), prop('gatilho','2d10 perfurante · 4,5/13,5 m · recarga 2'), prop('duas-maos')], {
      description: 'Arma semelhante a uma glaive com um projétil explosivo carregado em uma extremidade e um cano oculto junto à lâmina. Múltiplos gatilhos exigem acionamento conjunto para evitar disparos acidentais.'
    }),
    weapon('laminas-montadas', 'Lâminas Montadas', 'marcial', 'corpo-a-corpo', '10 po', '1d6', 'perfurante', '1 kg', [prop('acuidade'), prop('firme'), prop('leve')], {
      originalName: 'Mounted Blades', description: 'Lâminas presas a uma manopla ou empunhadura e projetadas a partir do dorso da mão, em forma de garra curva ou lâmina reta.'
    }),
    weapon('lamina-dupla', 'Lâmina Dupla', 'marcial', 'corpo-a-corpo', '40 po', '1d8', 'cortante', '6 kg', [prop('secundaria'), prop('duas-maos')], {
      originalName: 'Twinblade', aliases: ['Twinblade'], description: 'Arma semelhante a um bastão com uma lâmina em cada extremidade.'
    }),

    weapon('arco-grande', 'Arco Grande', 'marcial', 'distancia', '50 po', '1d10', 'perfurante', '4 kg', [prop('municao','45/180 m'), prop('pesada'), prop('carregamento'), prop('especial'), prop('duas-maos')], {
      originalName: 'Greatbow', description: 'Arco de grandes proporções, aproximadamente do comprimento de um humano adulto, que usa Flechas Grandes em vez de flechas comuns.',
      specialRule: 'É necessário Força 16 ou mais para empunhar esta arma. O Arco Grande pode usar Força no lugar de Destreza para suas jogadas de ataque e dano. Um conjunto de 20 Flechas Grandes custa 2 po.', specialPage: 515, requirementText: 'Força 16 para empunhar', tags: ['Usa Flechas Grandes']
    }),

    firearm('rifle', 'Rifle', 'simples', '180 po', '2d8', 'perfurante', '4 kg', [prop('municao','12/36 m'), prop('recarga','1'), prop('duas-maos')], {
      description: 'Arma de fogo longa, com maior potencial de precisão que um revólver e que exige as duas mãos para ser usada.'
    }),
    firearm('revolver-leve', 'Revólver Leve', 'simples', '60 po', '1d10', 'perfurante', '1,5 kg', [prop('municao','6/18 m'), prop('leve'), prop('recarga','2')], {
      originalName: 'Revolver, Light', aliases: ['Light Revolver'], description: 'Arma de mão menor, com câmara reduzida, fácil de disparar e guardar rapidamente.'
    }),
    firearm('revolver', 'Revólver', 'simples', '80 po', '2d6', 'perfurante', '1,5 kg', [prop('municao','6/18 m'), prop('recarga','6')], {
      originalName: 'Revolver', description: 'Arma de mão com câmara para seis disparos.'
    }),
    firearm('canhao-mao', 'Canhão de Mão', 'marcial', '300 po', '4d10', 'perfurante', '3,5 kg', [prop('municao','6/18 m'), prop('recarga-pesada','1'), prop('duas-maos')], {
      originalName: 'Hand Cannon', description: 'Arma de fogo pesada, de tamanho semelhante a um rifle porém mais volumosa, que utiliza cargas mais fortes e exige um processo de recarga mais envolvido.'
    }),
    firearm('siege-garland', 'Siege Garland', 'marcial', '400 po', '4d12', 'concussão', '10 kg', [prop('avancada'), prop('municao','6/18 m'), prop('recarga-completa','1'), prop('pesada'), prop('duas-maos')], {
      description: 'Grande arma metálica melhor descrita como um canhão portátil.', requirementText: 'Força 17 para empunhar',
      specialRule: 'O portador precisa ter Força 17 ou mais. A arma dispara uma carga explosiva contra um alvo ou espaço dentro do alcance. Depois que o ataque contra o alvo é resolvido, todas as outras criaturas a até 1,5 metro do espaço atingido fazem uma salvaguarda de Destreza contra uma CD formada por Destreza + o bônus de aprimoramento da arma, conforme escrito na fonte. Em uma falha, sofrem o dano da arma; em um sucesso, sofrem metade.', specialPage: 516
    }),
    firearm('revolver-rapido', 'Revólver Rápido', 'marcial', '140 po', '2d6', 'perfurante', '3 kg', [prop('municao','6/18 m'), prop('rajada'), prop('recarga-pesada','12')], {
      originalName: 'Revolver, Rapid', aliases: ['Rapid Revolver'], description: 'Revólver com mecanismo de disparo rápido que permite uma sequência de tiros durante um único acionamento sustentado do gatilho.'
    }),
    firearm('rifle-caca', 'Rifle de Caça', 'marcial', '200 po', '2d10', 'perfurante', '4 kg', [prop('municao','18/54 m'), prop('recarga','2'), prop('duas-maos')], {
      originalName: 'Rifle, Hunting', aliases: ['Hunting Rifle'], description: 'Rifle construído com maior cuidado, capaz de carregar dois disparos e atingir alvos a uma distância maior.'
    }),
    firearm('rifle-mira', 'Rifle com Mira', 'marcial', '250 po', '2d10', 'perfurante', '4,5 kg', [prop('municao','18/54 m'), prop('recarga','2'), prop('tiro-precisao'), prop('duas-maos')], {
      originalName: 'Rifle, Scoped', aliases: ['Scoped Rifle'], description: 'Rifle de caça equipado com uma mira de ampliação para disparos de longa distância.'
    }),

    {
      id: 'lyre-escudo-grande', name: 'Escudo Grande', originalName: 'Greatshield', aliases: ['Tower Shield'],
      type: 'shield', category: 'escudo', price: '50 po', armorClass: '+4', strength: 19, stealthDisadvantage: true,
      weight: '7,5 kg', properties: [prop('pesada'), prop('especial')], sourcePage: 516,
      description: 'Também conhecido como escudo-torre, este enorme armamento defensivo cria uma robusta parede metálica entre seu portador e as ameaças.',
      specialRule: 'Enquanto empunha este escudo, seu deslocamento é reduzido em 1,5 metro.', specialPage: 515
    },

    ammunition('flechas-grandes-20', 'Flechas Grandes (20)', '2 po', 'Munição do Arco Grande', {
      category: 'greatbow', sourcePage: 515, originalName: 'Great Arrows', description: 'Munição especial exigida pelo Arco Grande. A fonte informa o preço de 2 po por conjunto de 20 flechas.'
    }),
    ammunition('municao-leve-20', 'Munição de Arma de Fogo — Leve (20)', '10 po', 'Compatível com 2d6 e 1d10', {
      originalName: 'Light Ammo', unitPrice: '5 pp', bundleSize: 20, description: 'Munição de arma de fogo classificada como Leve. Pode ser usada por armas cujo dano de munição corresponda a 2d6 ou 1d10.'
    }),
    ammunition('municao-media-20', 'Munição de Arma de Fogo — Média (20)', '16 po', 'Compatível com 2d8 e 1d12', {
      originalName: 'Medium Ammo', unitPrice: '8 pp', bundleSize: 20, description: 'Munição de arma de fogo classificada como Média. Pode ser usada por armas cujo dano de munição corresponda a 2d8 ou 1d12.'
    }),
    ammunition('municao-pesada-20', 'Munição de Arma de Fogo — Pesada (20)', '20 po', 'Compatível com 2d10', {
      originalName: 'Heavy Ammo', unitPrice: '1 po', bundleSize: 20, description: 'Munição de arma de fogo classificada como Pesada. Pode ser usada por armas cujo dano de munição corresponda a 2d10.'
    }),
    ammunition('carga-buck-5', 'Carga Buck (5)', '25 po', 'Compatível com 4d10', {
      originalName: 'Buck Charge', unitPrice: '5 po', bundleSize: 5, description: 'Categoria de munição usada por armas de fogo cujo dano de munição corresponda a 4d10. A fonte nomeia esta categoria como Buck Charge.'
    }),
    ammunition('municao-explosiva-5', 'Munição Explosiva (5)', '50 po', 'Compatível com 4d12', {
      originalName: 'Explosive Ammo', unitPrice: '10 po', bundleSize: 5, description: 'Categoria de munição usada por armas de fogo cujo dano de munição corresponda a 4d12.'
    })
  ];

  const rulesSections = [
    {
      title: 'Tamanhos de Equipamento — 5.19', page: 517,
      paragraphs: [
        'Todo equipamento deste guia, e a maior parte do equipamento do Livro do Jogador, é considerado produzido para criaturas Médias por padrão. Armas maiores repetem seus dados de arma para cada categoria de tamanho acima de Médio; a passagem de Gargantuan para Titanic concede esse aumento duas vezes. Regras específicas de magias e características, como enlarge/reduce, têm prioridade sobre estas regras de equipamento superdimensionado.',
        'As propriedades e os bônus de armaduras permanecem iguais, mas o tamanho limita quem pode utilizá-las. Itens mágicos que exigem sintonia podem se redimensionar para a criatura sintonizada, desde que a anatomia da criatura possa suportá-los.'
      ],
      bullets: [
        'Uma criatura usando uma arma feita para uma criatura uma categoria maior ou menor normalmente o faz com desvantagem.',
        'Criaturas Pequenas podem usar equipamento Médio, incluindo armaduras e escudos.',
        'Criaturas Médias podem usar armas Pequenas, exceto quando elas possuem as propriedades Pesada ou Leve.',
        'Um item Pesado não pode ser usado por uma criatura abaixo da categoria de tamanho para a qual foi feito.',
        'Um item Leve não pode ser usado por uma criatura acima da categoria de tamanho para a qual foi feito.'
      ],
      table: {
        headers: ['Tamanho', 'Multiplicador de custo', 'Multiplicador de peso'],
        rows: [
          ['Grande', '×4', '×2'], ['Enorme', '×16', '×4'], ['Gargantuan', '×64', '×8'], ['Titânico', '×256', '×16'],
          ['Tremendo', '×1.024', '×32'], ['Colossal', '×4.096', '×64'], ['Supermassivo', '×16.384', '×128'], ['Planetário', '×65.536', '×256']
        ]
      }
    },
    {
      title: 'Armas de Fogo — 5.19', page: 518,
      paragraphs: [
        'Armas de fogo usam Destreza em suas jogadas de ataque e dano, salvo quando uma característica ou propriedade disser o contrário. A proficiência com armas de fogo é separada das proficiências com armas simples e marciais; para obter proficiência com armas de fogo marciais, primeiro é necessário possuir proficiência com armas de fogo simples.',
        'A munição de armas de fogo é definida pelos dados de dano. Munições com uma quantidade compatível de dados podem ser usadas por qualquer arma de fogo que corresponda àquela categoria de dano.'
      ],
      bullets: [
        'Com permissão do Mestre, durante a criação de personagem é possível trocar uma proficiência em perícia por proficiência com armas de fogo.',
        'Também é possível substituir proficiência com armas simples e marciais à distância por proficiência com armas de fogo.',
        'Treinamento durante tempo livre também pode conceder proficiência, desde que haja acesso às armas e munições necessárias.'
      ]
    }
  ];

  registry.registerEquipmentCatalog({
    id: 'lyre-retia-equipment',
    sourceId: 'lyre',
    label: "Lyre's Guide to Retia — Armas & Armaduras",
    properties,
    armorRules,
    rulesSections,
    items,
    notes: [
      'Armas de fogo constituem proficiências próprias na 5.19: simples e marciais.',
      'O capítulo IX não adiciona novas armaduras corporais; a entrada de armadura apresentada é o Escudo Grande.'
    ]
  });
})(window.GRIMORIO_REGISTRY);
