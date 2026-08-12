'use strict';

(function registerPhbEquipment(registry) {
  if (!registry?.registerEquipmentCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a equipamentos precisa ser carregado antes de phb-2014-equipment.js.');

  const properties = {
    acuidade: {
      label: 'Acuidade',
      page: 148,
      text: 'Ao atacar com esta arma, você pode usar Força ou Destreza tanto na jogada de ataque quanto na jogada de dano. O mesmo modificador deve ser usado nas duas jogadas.'
    },
    alcance: {
      label: 'Alcance',
      page: 148,
      text: 'A arma acrescenta 1,5 metro ao seu alcance quando você ataca com ela. Esse alcance adicional também vale para ataques de oportunidade feitos com a arma.'
    },
    arremesso: {
      label: 'Arremesso',
      page: 149,
      text: 'A arma pode ser arremessada para realizar um ataque à distância. Se ela for corpo a corpo, use o mesmo modificador de habilidade que seria usado em um ataque corpo a corpo com essa arma.'
    },
    'duas-maos': {
      label: 'Duas Mãos',
      page: 149,
      text: 'A arma requer as duas mãos para ser usada em um ataque. A propriedade não exige duas mãos apenas para segurar a arma.'
    },
    especial: {
      label: 'Especial',
      page: 149,
      text: 'A arma possui uma regra própria que altera sua utilização. Consulte a descrição expandida da arma para ver essa regra.'
    },
    leve: {
      label: 'Leve',
      page: 149,
      text: 'A arma é pequena e fácil de manusear, sendo apropriada para as regras de combate com duas armas.'
    },
    municao: {
      label: 'Munição',
      page: 149,
      text: 'A arma precisa de munição para realizar ataques à distância. Cada ataque consome uma peça de munição; sacar a munição faz parte do ataque. Ao fim da batalha, é possível recuperar metade da munição gasta após 1 minuto procurando no campo de batalha. Recarregar uma arma de uma mão exige uma mão livre.'
    },
    pesada: {
      label: 'Pesada',
      page: 149,
      text: 'Criaturas Pequenas têm desvantagem nas jogadas de ataque com esta arma devido ao seu tamanho e peso.'
    },
    recarga: {
      label: 'Recarga',
      page: 149,
      text: 'Devido ao tempo necessário para recarregar, quando uma ação, ação bônus ou reação é usada para disparar esta arma, apenas uma peça de munição pode ser disparada, independentemente do número de ataques disponíveis.'
    },
    versatil: {
      label: 'Versátil',
      page: 149,
      text: 'A arma pode ser usada com uma ou duas mãos. O valor indicado entre parênteses é o dano causado quando ela é empunhada com duas mãos para um ataque corpo a corpo.'
    }
  };

  const armorRules = {
    'furtividade-desvantagem': {
      label: 'Furtividade: Desvantagem',
      page: 146,
      text: 'Ao vestir esta armadura, o usuário tem desvantagem em testes de Destreza (Furtividade).'
    },
    'forca-minima': {
      label: 'Força mínima',
      page: 146,
      text: 'Se a armadura pesada exigir um valor de Força e o usuário não atingir esse valor, seu deslocamento é reduzido em 3 metros.'
    },
    'escudo-ca': {
      label: 'Escudo +2 CA',
      page: 146,
      text: 'Empunhar um escudo aumenta a Classe de Armadura em 2. É possível se beneficiar de apenas um escudo por vez.'
    }
  };

  function prop(id, value) { return value ? { id, value } : { id }; }
  function weapon(id, name, group, attackType, price, damage, damageType, weight, props = [], extra = {}) {
    return {
      id: 'phb-' + id,
      name,
      type: 'weapon',
      group,
      attackType,
      price,
      damage,
      damageType,
      weight,
      properties: props,
      sourcePage: 151,
      ...extra
    };
  }
  function armor(id, name, category, price, armorClass, weight, extra = {}) {
    return {
      id: 'phb-' + id,
      name,
      type: 'armor',
      category,
      price,
      armorClass,
      weight,
      sourcePage: 147,
      ...extra
    };
  }

  const items = [
    // Armaduras leves.
    armor('armadura-acolchoada', 'Acolchoada', 'leve', '5 po', '11 + modificador de Des', '4 kg', {
      stealthDisadvantage: true,
      description: 'Camadas de panos acolchoados e batidos formam esta armadura flexível.'
    }),
    armor('armadura-couro', 'Couro', 'leve', '10 po', '11 + modificador de Des', '5 kg', {
      description: 'Peitoral e ombreiras de couro endurecido são combinados com materiais mais macios e flexíveis.'
    }),
    armor('armadura-couro-batido', 'Couro Batido', 'leve', '45 po', '12 + modificador de Des', '6,5 kg', {
      description: 'Couro resistente e flexível reforçado com rebites ou cravos.'
    }),

    // Armaduras médias.
    armor('armadura-gibao-peles', 'Gibão de Peles', 'media', '10 po', '12 + modificador de Des (máx. +2)', '6 kg', {
      description: 'Armadura bruta feita de peles grossas, comum onde materiais e ferramentas melhores não estão disponíveis.'
    }),
    armor('armadura-camisao-malha', 'Camisão de Malha', 'media', '50 po', '13 + modificador de Des (máx. +2)', '10 kg', {
      description: 'Anéis de metal intercalados usados entre camadas de roupa, protegendo principalmente a parte superior do corpo.'
    }),
    armor('armadura-brunea', 'Brunea', 'media', '50 po', '14 + modificador de Des (máx. +2)', '22,5 kg', {
      stealthDisadvantage: true,
      description: 'Casaco e peças de couro cobertos por placas metálicas sobrepostas semelhantes a escamas.'
    }),
    armor('armadura-peitoral', 'Peitoral', 'media', '400 po', '14 + modificador de Des (máx. +2)', '10 kg', {
      description: 'Peitoral metálico usado sobre couro flexível, protegendo os órgãos vitais sem restringir demasiadamente braços e pernas.'
    }),
    armor('armadura-meia-armadura', 'Meia-Armadura', 'media', '750 po', '15 + modificador de Des (máx. +2)', '20 kg', {
      stealthDisadvantage: true,
      description: 'Placas metálicas moldadas cobrem a maior parte do corpo, com proteção limitada para as pernas.'
    }),

    // Armaduras pesadas.
    armor('armadura-cota-aneis', 'Cota de Anéis', 'pesada', '30 po', '14', '20 kg', {
      stealthDisadvantage: true,
      description: 'Couro reforçado com anéis pesados, uma proteção mais simples e barata que a cota de malha.'
    }),
    armor('armadura-cota-malha', 'Cota de Malha', 'pesada', '75 po', '16', '27,5 kg', {
      strength: 13,
      stealthDisadvantage: true,
      description: 'Anéis metálicos entrelaçados sobre uma camada acolchoada para reduzir atrito e amortecer impactos.'
    }),
    armor('armadura-cota-talas', 'Cota de Talas', 'pesada', '200 po', '17', '30 kg', {
      strength: 15,
      stealthDisadvantage: true,
      description: 'Tiras verticais de metal rebitadas sobre couro e acolchoamento, com malha flexível protegendo as articulações.'
    }),
    armor('armadura-placas', 'Placas', 'pesada', '1.500 po', '18', '32,5 kg', {
      strength: 15,
      stealthDisadvantage: true,
      description: 'Placas metálicas moldadas cobrem o corpo inteiro, acompanhadas de luvas, botas, capacete e acolchoamento interno.'
    }),

    // Escudo.
    {
      id: 'phb-escudo',
      name: 'Escudo',
      type: 'shield',
      category: 'escudo',
      price: '10 po',
      armorClass: '+2',
      weight: '3 kg',
      sourcePage: 147,
      rules: ['escudo-ca'],
      description: 'Escudo de madeira ou metal usado com uma mão. Empunhá-lo aumenta a Classe de Armadura em 2; apenas um escudo pode fornecer esse benefício por vez.'
    },

    // Armas simples corpo a corpo.
    weapon('adaga', 'Adaga', 'simples', 'corpo-a-corpo', '2 po', '1d4', 'perfurante', '0,5 kg', [prop('acuidade'), prop('leve'), prop('arremesso', '6/18 m')]),
    weapon('azagaia', 'Azagaia', 'simples', 'corpo-a-corpo', '5 pp', '1d6', 'perfurante', '1 kg', [prop('arremesso', '9/36 m')]),
    weapon('bordao', 'Bordão', 'simples', 'corpo-a-corpo', '2 pp', '1d6', 'concussão', '2 kg', [prop('versatil', '1d8')]),
    weapon('clava-grande', 'Clava Grande', 'simples', 'corpo-a-corpo', '2 pp', '1d8', 'concussão', '5 kg', [prop('pesada'), prop('duas-maos')]),
    weapon('foice-curta', 'Foice Curta', 'simples', 'corpo-a-corpo', '1 po', '1d4', 'cortante', '1 kg', [prop('leve')]),
    weapon('lanca', 'Lança', 'simples', 'corpo-a-corpo', '1 po', '1d6', 'perfurante', '1,5 kg', [prop('arremesso', '6/18 m'), prop('versatil', '1d8')]),
    weapon('maca', 'Maça', 'simples', 'corpo-a-corpo', '5 po', '1d6', 'concussão', '2 kg'),
    weapon('machadinha', 'Machadinha', 'simples', 'corpo-a-corpo', '5 po', '1d6', 'cortante', '1 kg', [prop('leve'), prop('arremesso', '6/18 m')]),
    weapon('martelo-leve', 'Martelo Leve', 'simples', 'corpo-a-corpo', '2 po', '1d4', 'concussão', '1 kg', [prop('leve'), prop('arremesso', '6/18 m')]),
    weapon('porrete', 'Porrete', 'simples', 'corpo-a-corpo', '1 pp', '1d4', 'concussão', '1 kg', [prop('leve')]),

    // Armas simples à distância.
    weapon('arco-curto', 'Arco Curto', 'simples', 'distancia', '25 po', '1d6', 'perfurante', '1 kg', [prop('municao', '24/96 m'), prop('duas-maos')]),
    weapon('besta-leve', 'Beste Leve', 'simples', 'distancia', '25 po', '1d8', 'perfurante', '2,5 kg', [prop('municao', '24/96 m'), prop('recarga'), prop('duas-maos')], { aliases:['Besta Leve'], editorialNote:'A tabela da fonte fornecida imprime o nome como “Beste Leve”. “Besta Leve” é mantido apenas como alias de busca para facilitar a consulta.' }),
    weapon('dardo', 'Dardo', 'simples', 'distancia', '5 pc', '1d4', 'perfurante', '0,1 kg', [prop('acuidade'), prop('arremesso', '6/18 m')]),
    weapon('funda', 'Funda', 'simples', 'distancia', '1 pp', '1d4', 'concussão', '—', [prop('municao', '9/36 m')]),

    // Armas marciais corpo a corpo.
    weapon('alabarda', 'Alabarda', 'marcial', 'corpo-a-corpo', '20 po', '1d10', 'cortante', '3 kg', [prop('pesada'), prop('alcance'), prop('duas-maos')]),
    weapon('cimitarra', 'Cimitarra', 'marcial', 'corpo-a-corpo', '25 po', '1d6', 'cortante', '1,5 kg', [prop('acuidade'), prop('leve')]),
    weapon('chicote', 'Chicote', 'marcial', 'corpo-a-corpo', '2 po', '1d4', 'cortante', '1,5 kg', [prop('acuidade'), prop('alcance')]),
    weapon('espada-curta', 'Espada Curta', 'marcial', 'corpo-a-corpo', '10 po', '1d6', 'perfurante', '1 kg', [prop('acuidade'), prop('leve')]),
    weapon('espada-grande', 'Espada Grande', 'marcial', 'corpo-a-corpo', '50 po', '2d6', 'cortante', '3 kg', [prop('pesada'), prop('duas-maos')]),
    weapon('espada-longa', 'Espada Longa', 'marcial', 'corpo-a-corpo', '15 po', '1d8', 'cortante', '1,5 kg', [prop('versatil', '1d10')]),
    weapon('glaive', 'Glaive', 'marcial', 'corpo-a-corpo', '20 po', '1d10', 'cortante', '3 kg', [prop('pesada'), prop('alcance'), prop('duas-maos')]),
    weapon('lanca-montaria', 'Lança de Montaria', 'marcial', 'corpo-a-corpo', '10 po', '1d12', 'perfurante', '3 kg', [prop('alcance'), prop('especial')], {
      specialRule: 'Você tem desvantagem ao usar a lança de montaria contra um alvo a até 1,5 metro de você. Além disso, ela exige duas mãos quando você não está montado.',
      specialPage: 150
    }),
    weapon('lanca-longa', 'Lança Longa', 'marcial', 'corpo-a-corpo', '5 po', '1d10', 'perfurante', '4 kg', [prop('pesada'), prop('alcance'), prop('duas-maos')]),
    weapon('maca-estrela', 'Maça Estrela', 'marcial', 'corpo-a-corpo', '15 po', '1d8', 'perfurante', '2 kg'),
    weapon('machado-grande', 'Machado Grande', 'marcial', 'corpo-a-corpo', '30 po', '1d12', 'cortante', '3,5 kg', [prop('pesada'), prop('duas-maos')]),
    weapon('machado-batalha', 'Machado de Batalha', 'marcial', 'corpo-a-corpo', '10 po', '1d8', 'cortante', '2 kg', [prop('versatil', '1d10')]),
    weapon('malho', 'Malho', 'marcial', 'corpo-a-corpo', '10 po', '2d6', 'concussão', '5 kg', [prop('pesada'), prop('duas-maos')]),
    weapon('mangual', 'Mangual', 'marcial', 'corpo-a-corpo', '10 po', '1d8', 'concussão', '1 kg'),
    weapon('martelo-guerra', 'Martelo de Guerra', 'marcial', 'corpo-a-corpo', '15 po', '1d8', 'concussão', '1 kg', [prop('versatil', '1d10')]),
    weapon('picareta-guerra', 'Picareta de Guerra', 'marcial', 'corpo-a-corpo', '5 po', '1d8', 'perfurante', '1 kg'),
    weapon('rapieira', 'Rapieira', 'marcial', 'corpo-a-corpo', '25 po', '1d8', 'perfurante', '1 kg', [prop('acuidade')]),
    weapon('tridente', 'Tridente', 'marcial', 'corpo-a-corpo', '5 po', '1d6', 'perfurante', '2 kg', [prop('arremesso', '6/18 m'), prop('versatil', '1d8')]),

    // Armas marciais à distância.
    weapon('arco-longo', 'Arco Longo', 'marcial', 'distancia', '50 po', '1d8', 'perfurante', '1 kg', [prop('municao', '45/180 m'), prop('pesada'), prop('duas-maos')]),
    weapon('besta-mao', 'Besta de Mão', 'marcial', 'distancia', '75 po', '1d6', 'perfurante', '1,5 kg', [prop('municao', '9/36 m'), prop('leve'), prop('recarga')]),
    weapon('besta-pesada', 'Besta Pesada', 'marcial', 'distancia', '50 po', '1d10', 'perfurante', '4,5 kg', [prop('municao', '30/120 m'), prop('pesada'), prop('recarga'), prop('duas-maos')]),
    weapon('rede', 'Rede', 'marcial', 'distancia', '1 po', '—', '—', '1,5 kg', [prop('especial'), prop('arremesso', '1,5/4,5 m')], {
      specialRule: 'Uma criatura Grande ou menor atingida pela rede fica impedida até se libertar. Ela pode usar uma ação e passar em um teste de Força CD 10; outra criatura ao alcance também pode libertá-la com o mesmo teste. Causar 5 de dano cortante à rede (CA 10) também a destrói e liberta a criatura. Criaturas sem forma definida, Enormes ou maiores não são afetadas. Ao atacar com a rede usando ação, ação bônus ou reação, apenas um ataque pode ser realizado.',
      specialPage: 150
    }),
    weapon('zarabatana', 'Zarabatana', 'marcial', 'distancia', '10 po', '1', 'perfurante', '0,5 kg', [prop('municao', '7,5/30 m'), prop('recarga')])
  ];

  registry.registerEquipmentCatalog({
    id: 'phb-2014-equipment',
    sourceId: 'phb-2014',
    label: 'Livro do Jogador — Equipamentos',
    properties,
    armorRules,
    items
  });
})(window.GRIMORIO_REGISTRY);
