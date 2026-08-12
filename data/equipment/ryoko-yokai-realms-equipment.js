'use strict';

(function registerRyokoEquipment(registry) {
  if (!registry?.registerEquipmentCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a equipamentos precisa ser carregado antes de ryoko-yokai-realms-equipment.js.');

  const properties = {
    adaptavel: {
      label: 'Adaptável',
      originalName: 'Adaptable',
      page: 74,
      text: 'Esta arma pode ser usada com técnicas diferentes. O tipo de dano alternativo aparece entre parênteses; a cada ataque com a arma, você escolhe causar o tipo de dano normal ou o tipo alternativo indicado.'
    },
    acoplada: {
      label: 'Acoplada',
      originalName: 'Attached',
      page: 74,
      text: 'Você não pode ser desarmado desta arma, mas vesti-la ou removê-la exige uma ação. A mão equipada ainda pode segurar objetos, porém a arma não pode atacar enquanto estiver segurando algo. Você tem desvantagem em ataques com outras armas empunhadas nessa mão e em testes de Prestidigitação feitos com ela.'
    },
    impacto: {
      label: 'Impacto',
      originalName: 'Impact',
      page: 74,
      text: 'Esta arma causa dano dobrado a objetos e estruturas.'
    },
    aparar: {
      label: 'Aparar',
      originalName: 'Parry',
      page: 74,
      text: 'Enquanto empunha esta arma, quando for atingido por um ataque corpo a corpo, você pode usar sua reação para receber +2 na CA contra o ataque desencadeador, podendo fazer com que ele erre.'
    },
    pugilista: {
      label: 'Pugilista',
      originalName: 'Pugilist',
      page: 74,
      text: 'Para criaturas que rolam um dado ao realizar ataques desarmados, como monges, o dado de dano aumenta em um passo, até o máximo de 1d12, quando o ataque desarmado é feito com uma mão equipada com uma arma que possua esta propriedade.'
    },
    flagelo: {
      label: 'Flagelo',
      originalName: 'Scourge',
      page: 74,
      text: 'Esta arma acrescenta 1,5 metro ao seu alcance para ataques e ataques de oportunidade. Funciona como Alcance, mas representa uma extensão flexível em vez de uma haste rígida. Ao utilizar as regras do Ryoko, a propriedade Alcance do Chicote é substituída por Flagelo.'
    },
    'versatilidade-arremesso': {
      label: 'Versatilidade de Arremesso',
      originalName: 'Thrown Versatility',
      page: 74,
      text: 'Esta arma é mais eficiente quando arremessada. O valor de dano entre parênteses é usado quando a arma realiza um ataque à distância por arremesso.'
    }
  };

  function prop(id, value) { return value ? { id, value } : { id }; }
  function manufacture(materialCost, tool, dc, time) { return { materialCost, tool, dc, time }; }
  function weapon(id, name, group, attackType, price, damage, damageType, weight, props, extra) {
    return {
      id: 'ryoko-' + id,
      name,
      type: 'weapon',
      group,
      attackType,
      price,
      damage,
      damageType,
      weight,
      properties: props || [],
      sourcePage: 75,
      ...(extra || {})
    };
  }
  function gear(id, name, price, weight, description, manufacturing, extra) {
    return {
      id: 'ryoko-' + id,
      name,
      type: 'gear',
      category: 'aventura',
      price,
      weight,
      description,
      manufacturing,
      sourcePage: 73,
      ...(extra || {})
    };
  }

  const items = [
    gear('carga-fogo', 'Carga de Fogo', '5 po', '1 kg',
      'Pequeno dispositivo pirotécnico com fragmentos, projetado para ser preso a uma arma de haste. Em 1 minuto, você pode prendê-lo à ponta de uma glaive, alabarda, lança de montaria, lança longa, bordão, lança ou lâmina dupla (twinblade), criando uma lança de fogo. Enquanto segura essa arma, pode usar uma ação bônus para acender o pavio. A carga detona e é destruída no próximo ataque feito com a arma antes do fim do turno. Acertando ou errando, o alvo realiza uma salvaguarda de Destreza CD 13; sofre 1d10 de dano de fogo + 1d10 de dano perfurante em uma falha, ou metade em um sucesso. Se nenhum ataque for realizado depois de acender o pavio, a carga detona sem causar dano no fim do turno e é destruída.',
      manufacture('2 po', 'Suprimentos de alquimista ou ferramentas de funileiro', 13, '2 horas'),
      { metric:'1d10 fogo + 1d10 perfurante', aliases:['Fire Charge'] }
    ),
    gear('bombinhas', 'Bombinhas', '1 po', '0,1 kg',
      'Como uma ação, você acende esta tira de pequenos explosivos e a arremessa em um ponto a até 9 metros. Os explosivos detonam sem causar dano, mas produzem muito barulho. Criaturas que decidirem investigar o som têm desvantagem em testes de Percepção até deixarem de investigar as bombinhas.',
      manufacture('3 pp', 'Suprimentos de alquimista', 11, '2 horas'),
      { metric:'Distração sonora', aliases:['Firecrackers'] }
    ),
    gear('lancador-gancho', 'Lançador de Gancho', '50 po', '2,5 kg',
      'Dispositivo portátil semelhante a uma besta que dispara um gancho preso a uma corda. Enquanto o segura, você pode usar uma ação bônus, ou uma reação enquanto estiver caindo, para disparar o gancho em uma superfície fixa a até 9 metros. Ele permanece preso até ser recolhido com uma ação bônus ou até a corda ser destruída; a corda tem CA 10 e 10 PV. Você também pode disparar contra uma criatura pelo menos duas categorias de tamanho maior que você, realizando um ataque com Força ou Destreza no qual é considerado proficiente. O ataque não causa dano; em um acerto, o gancho se prende ao alvo. Uma criatura a até 1,5 metro do gancho pode usar uma ação e passar em um teste de Força ou Destreza CD 10 para removê-lo. Enquanto preso, você tem vantagem em testes de habilidade para se mover ao longo da corda e não pode se mover nem ser movido para além do alcance do lançador em relação ao ponto preso. Se estiver caindo, deixa de cair e fica suspenso.',
      manufacture('17 po', 'Ferramentas de funileiro', 15, '12 horas'),
      { metric:'Gancho · 9 m', aliases:['Hookshot'] }
    ),
    gear('municao-odzutsu', 'Munição de Ōdzutsu (20)', '10 po', '2 kg',
      'Vinte esferas de ferro maciço usadas como munição para o Ōdzutsu. Cada projétil mede aproximadamente 2,5 a 5 centímetros de diâmetro e pesa cerca de 0,1 kg.',
      manufacture('3 po', 'Ferramentas de ferreiro', 11, '2 horas'),
      { metric:'Munição', aliases:['Ōdzutsu Shot','Odzutsu Shot'], sourcePage:74 }
    ),
    gear('paraquedas', 'Paraquedas', '50 po', '7,5 kg',
      'Normalmente dobrado em uma mochila especializada ou compartimento próprio. Como uma reação ao cair de uma altura de 30 metros ou mais enquanto veste essa mochila, você pode abrir o paraquedas e reduzir sua velocidade de queda para 18 metros por rodada. Se aterrissar com o paraquedas aberto, não sofre dano de queda. Depois de usado, ele pode ser dobrado novamente em 10 minutos ou cortado e solto como uma ação. Uma criatura que se mova arrastando um paraquedas aberto tem seu deslocamento reduzido pela metade.',
      manufacture('17 po', 'Ferramentas de tecelão', 15, '6 horas'),
      { metric:'Queda segura', aliases:['Parachute'], sourcePage:74 }
    ),
    gear('bomba-fumaca', 'Bomba de Fumaça (5)', '25 po', '0,5 kg',
      'Como uma ação, você arremessa uma dessas pequenas esferas em um ponto a até 9 metros, criando uma nuvem de fumaça com 1,5 metro de raio. A área fica fortemente obscurecida até o fim do seu próximo turno ou até a fumaça ser dispersada por vento moderado de pelo menos 16 km/h.',
      manufacture('8 po', 'Suprimentos de alquimista', 15, '2 horas'),
      { metric:'Fumaça · raio 1,5 m', aliases:['Smokebomb','Smoke Bomb'], sourcePage:74 }
    ),

    weapon('garra', 'Garra', 'simples', 'corpo-a-corpo', '5 po', '1d6', 'cortante', '1 kg', [prop('acoplada'), prop('leve')], {
      originalName:'Claw',
      description:'Arma laminada simples usada como uma luva.',
      manufacturing: manufacture('2 po', 'Ferramentas de ferreiro', 14, '3 horas')
    }),
    weapon('chakram', 'Chakram', 'marcial', 'corpo-a-corpo', '10 po', '1d4', 'cortante', '0,5 kg', [prop('acuidade'), prop('leve'), prop('arremesso','9/27 m'), prop('versatilidade-arremesso','1d6')], {
      description:'Lâmina circular com borda externa afiada. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('3 po', 'Ferramentas de ferreiro', 17, '6 horas')
    }),
    weapon('kusarigama', 'Kusarigama', 'marcial', 'corpo-a-corpo', '5 po', '1d4', 'cortante', '1 kg', [prop('especial','Contrapeso'), prop('versatil','1d6')], {
      description:'Foice ligada a um contrapeso pesado por uma corrente metálica. Conta como arma de monge; para fins de Maestria Avançada de Armas, é tratada como possuindo Flagelo.',
      tags:['Arma de monge'],
      specialRule:'Enquanto empunha a kusarigama com duas mãos, você pode usar uma ação bônus para atacar com o contrapeso. Esse ataque tem alcance de 3 metros e causa 1d4 de dano de concussão. Você não adiciona seu modificador de habilidade ao dano desse ataque, a menos que o modificador seja negativo.',
      specialPage:76,
      manufacturing: manufacture('2 po', 'Ferramentas de ferreiro', 17, '4 horas')
    }),
    weapon('martelo-meteoro', 'Martelo Meteoro', 'marcial', 'corpo-a-corpo', '3 po', '1d6', 'concussão', '1,5 kg', [prop('acuidade'), prop('flagelo'), prop('duas-maos')], {
      originalName:'Meteor Hammer', aliases:['Meteor Hammer'],
      description:'Comprimento de corrente ou corda com um peso em uma ou nas duas extremidades. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('1 po', 'Ferramentas de pedreiro, ferreiro ou tecelão', 17, '2 horas')
    }),
    weapon('nunchaku', 'Nunchaku', 'marcial', 'corpo-a-corpo', '10 po', '1d6', 'concussão', '1 kg', [prop('acuidade'), prop('especial','Floreio'), prop('versatil','1d8')], {
      description:'Dois bastões rígidos ligados por uma corrente curta ou tira. Conta como arma de monge.',
      tags:['Arma de monge'],
      specialRule:'Enquanto empunha o nunchaku com duas mãos e realiza a ação Atacar em seu turno, imediatamente antes do primeiro ataque você pode tentar um floreio. Faça um teste de Destreza CD 13, adicionando seu bônus de proficiência se for proficiente com nunchaku. Em um sucesso, recebe +2 na primeira jogada de ataque que fizer neste turno. Em uma falha, causa a si mesmo dano de concussão igual ao seu bônus de proficiência e não recebe bônus de floreio neste turno.',
      specialPage:76,
      manufacturing: manufacture('3 po', 'Ferramentas de carpinteiro, ferreiro ou entalhador', 17, '6 horas')
    }),
    weapon('dardo-corda', 'Dardo de Corda', 'marcial', 'corpo-a-corpo', '5 po', '1d6', 'perfurante', '1,5 kg', [prop('acuidade'), prop('flagelo'), prop('duas-maos')], {
      originalName:'Rope Dart', aliases:['Rope Dart'],
      description:'Comprimento de corrente ou corda preso a um dardo afiado. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('2 po', 'Ferramentas de ferreiro ou tecelão', 17, '3 horas')
    }),
    weapon('sai', 'Sai', 'marcial', 'corpo-a-corpo', '5 po', '1d4', 'perfurante', '0,5 kg', [prop('acuidade'), prop('leve'), prop('aparar')], {
      description:'Arma metálica de três pontas, com a ponta central mais longa. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('2 po', 'Ferramentas de ferreiro', 17, '3 horas')
    }),
    weapon('tessen', 'Tessen', 'marcial', 'corpo-a-corpo', '5 po', '1d4', 'cortante', '0,5 kg', [prop('adaptavel','concussão'), prop('acuidade'), prop('leve'), prop('especial','Escudo de Leque')], {
      description:'Leque dobrável reforçado com madeira ou metal e bordas afiadas. Pode ser fechado para golpear com dano de concussão. Conta como arma de monge.',
      tags:['Arma de monge'],
      specialRule:'Quando for atingido por um ataque feito com um projétil que pese menos de 1 kg, como uma adaga arremessada, dardo, flecha ou bala, enquanto segura o tessen, você pode usar sua reação para abri-lo e tentar desviar o projétil. Você recebe +2 na CA contra o ataque desencadeador, podendo fazer com que ele erre.',
      specialPage:77,
      manufacturing: manufacture('2 po', 'Ferramentas de ferreiro ou tecelão', 17, '3 horas')
    }),
    weapon('tonfa', 'Tonfa', 'marcial', 'corpo-a-corpo', '1 po', '1d6', 'concussão', '1 kg', [prop('leve'), prop('aparar')], {
      description:'Bastão de madeira ou metal com uma empunhadura perpendicular. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('3 pp', 'Ferramentas de carpinteiro, ferreiro ou entalhador', 17, '1 hora')
    }),
    weapon('odzutsu', 'Ōdzutsu', 'marcial', 'distancia', '150 po', '2d10', 'concussão', '12,5 kg', [prop('municao','45/180 m'), prop('duas-maos'), prop('especial','Recarga Longa')], {
      originalName:'Ōdzutsu', aliases:['Odzutsu'],
      description:'Canhão portátil, tradicionalmente forjado em ferro ou fundido em bronze.',
      specialRule:'Depois que um ataque é realizado com esta arma, ela precisa ser recarregada. Devido ao peso e ao tamanho da arma e de sua munição, recarregá-la exige duas ações, que não precisam ser realizadas consecutivamente.',
      specialPage:76,
      manufacturing: manufacture('50 po', 'Ferramentas de ferreiro e de funileiro', 19, '18 horas')
    }),
    weapon('shuriken', 'Shuriken', 'marcial', 'distancia', '1 pp', '1d4', 'perfurante', '0,1 kg', [prop('acuidade'), prop('leve'), prop('arremesso','6/18 m')], {
      description:'Estrela de arremesso composta por várias pontas ou lâminas afiadas em torno de um anel central. Conta como arma de monge.',
      tags:['Arma de monge'],
      manufacturing: manufacture('3 pc', 'Ferramentas de ferreiro', 17, '1 hora')
    })
  ];

  registry.registerEquipmentCatalog({
    id: 'ryoko-yokai-realms-equipment',
    sourceId: 'ryoko-yokai-realms',
    label: "Ryoko's Guide to the Yokai Realms — Equipamentos",
    properties,
    items,
    notes: [
      'Ao utilizar as regras de propriedades de armas do Ryoko, a propriedade Alcance do Chicote é substituída por Flagelo.'
    ]
  });
})(window.GRIMORIO_REGISTRY);
