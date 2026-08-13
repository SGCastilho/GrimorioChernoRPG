'use strict';

// Talentos do Capítulo 6 — Opções de Personalização, Livro do Jogador (D&D 5e 2014).
// A fonte em português fornecida ao projeto é autoritativa. Pré-requisitos são
// preservados tanto em texto quanto em forma estruturada para filtros futuros.
(function registerPhb2014Feats(registry) {
  if (!registry?.registerFeatCatalog) throw new Error('GRIMORIO_REGISTRY com suporte a talentos precisa ser carregado antes de phb-2014-feats.js.');

  const feats = [
    {
      id: 'phb-2014-adepto-elemental',
      name: 'Adepto Elemental',
      sourcePage: 167,
      prerequisite: 'Capacidade de conjurar pelo menos uma magia',
      prerequisites: [{ type: 'spellcasting', label: 'Capacidade de conjurar pelo menos uma magia' }],
      repeatable: true,
      choices: [{ id: 'damage-type', label: 'Tipo de dano', options: ['ácido', 'elétrico', 'fogo', 'frio', 'trovão'], uniquePerAcquisition: true }],
      description: 'Quando você ganha esse talento, escolha um dos tipos de dano a seguir: ácido, elétrico, fogo, frio ou trovão.\n\nAs magias que você conjurar ignoram resistência a dano do tipo escolhido. Além disso, quando você rola o dano para uma magia que você conjurar que causar dano desse tipo, você pode tratar qualquer 1 num dado de dano como um 2.\n\nVocê pode escolher esse talento diversas vezes. A cada vez que o fizer, você deve escolher um tipo diferente de dano.'
    },
    {
      id: 'phb-2014-adepto-marcial',
      name: 'Adepto Marcial',
      sourcePage: 167,
      choices: [{ id: 'maneuvers', label: 'Manobras do Mestre de Batalha', count: 2 }],
      description: 'Você tem treinamento marcial que permite a você realizar manobras de combate especiais. Você ganha os seguintes benefícios:\n\n• Você aprende duas manobras, à sua escolha, das que estão disponíveis ao arquétipo Mestre de Batalha na classe guerreiro. Se a manobra que você usar obrigar um alvo a realizar um teste de resistência, a CD do teste de resistência será igual a 8 + seu bônus de proficiência + seu modificador de Força ou Destreza (à sua escolha).\n• Se você já tiver dados de superioridade, você ganha um adicional; do contrário, você terá um dado de superioridade, que é um d6. Esse dado é usado para abastecer suas manobras. Um dado de superioridade é gasto quando você o usa. Você recupera seus dados de superioridade gastos quando termina um descanso curto ou longo.'
    },
    {
      id: 'phb-2014-alerta',
      name: 'Alerta',
      sourcePage: 167,
      description: 'Sempre a espera de perigo, você ganha os seguintes benefícios:\n\n• Você recebe +5 de bônus em iniciativa.\n• Você não pode ser surpreso enquanto estiver consciente.\n• Outras criaturas não ganham vantagem nas jogadas de ataque contra você por estarem escondidas de você.'
    },
    {
      id: 'phb-2014-ambidestro',
      name: 'Ambidestro',
      sourcePage: 167,
      description: 'Você dominou o estilo de luta com duas armas, ganhando os seguintes benefícios:\n\n• Você ganha +1 de bônus na CA enquanto estiver empunhando uma arma corpo-a-corpo em cada mão.\n• Você pode usar combater com duas armas mesmo que as armas de uma mão que você está empunhando não sejam leves.\n• Você pode sacar ou guardar duas armas de uma mão quando você, normalmente, seria capaz de sacar ou guardar apenas uma.'
    },
    {
      id: 'phb-2014-atacante-bestial',
      name: 'Atacante Bestial',
      sourcePage: 167,
      description: 'Uma vez por turno, quando você rolar o dano para um ataque corpo-a-corpo com arma, você pode jogar novamente o dado de dano da arma e usar qualquer dos valores.'
    },
    {
      id: 'phb-2014-atirador-agucado',
      name: 'Atirador Aguçado',
      sourcePage: 167,
      description: 'Você dominou o uso de armas à distância e pode realizar tiros que seriam impossíveis para outros. Você ganha os seguintes benefícios:\n\n• Atacar um alvo além da distância normal não impõem desvantagem nas suas jogadas de ataque com armas à distância.\n• Seus ataques com armas à distância ignoram meia-cobertura e três-quartos de cobertura.\n• Antes de realizar um ataque com uma arma à distância na qual você seja proficiente, você pode escolher sofrer –5 de penalidade na jogada de ataque. Se o ataque atingir, você adiciona +10 no dano do ataque.'
    },
    {
      id: 'phb-2014-atirador-de-magia',
      name: 'Atirador de Magia',
      sourcePage: 167,
      prerequisite: 'Capacidade de conjurar pelo menos uma magia',
      prerequisites: [{ type: 'spellcasting', label: 'Capacidade de conjurar pelo menos uma magia' }],
      choices: [{ id: 'attack-cantrip', label: 'Truque que requer uma jogada de ataque', count: 1, sources: ['Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Mago'] }],
      description: 'Você aprendeu técnicas para aprimorar seus ataques com certos tipos de magia, ganhando os seguintes benefícios:\n\n• Quando você conjura uma magia que requer que você realize uma jogada de ataque, o alcance da magia é dobrada.\n• Seus ataques à distância com magia ignoram meia-cobertura ou três-quartos de cobertura.\n• Você aprende um truque que requer uma jogada de ataque. Escolha o truque da lista de magias do bardo, bruxo, clérigo, druida, feiticeiro ou mago. Sua habilidade de conjuração para esse truque depende da lista de magia a qual você escolheu o truque: Carisma para bardo, bruxo ou feiticeiro; Sabedoria para clérigo ou druida; ou Inteligência para mago.'
    },
    {
      id: 'phb-2014-atleta',
      name: 'Atleta',
      sourcePage: 168,
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Força', 'Destreza'] }],
      description: 'Você passou por extenso treinamento físico para ganhar os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Quando você estiver caído, se levantar requer apenas 1,5 metro do seu deslocamento.\n• Escalar não custa movimento adicional a você.\n• Você pode realizar um salto em distância correndo ou um salto em altura correndo se movendo apenas um passo de ajuste de 1,5 metro, ao invés de 3 metros.'
    },
    {
      id: 'phb-2014-ator',
      name: 'Ator',
      sourcePage: 168,
      description: 'Perito em mimica e dramaturgia, você recebe os seguintes benefícios:\n\n• Aumente seu valor de Carisma em 1, até o máximo de 20.\n• Você tem vantagem em testes de Carisma (Atuação) e Carisma (Enganação) quando você estiver tentando se passar por uma pessoa diferente.\n• Você pode imitar a articulação de outra pessoa ou os sons feitos por outras criaturas. Você deve ter ouvido a pessoa falando ou ouvido a criatura fazendo o som por, pelo menos, 1 minuto. Um sucesso num teste de Sabedoria (Intuição) resistido pelo seu teste de Carisma (Enganação) permite que um ouvinte determine que o efeito é falso.'
    },
    {
      id: 'phb-2014-combatente-montado',
      name: 'Combatente Montado',
      sourcePage: 168,
      description: 'Você é um oponente perigoso de se enfrentar quando está montado. Enquanto estiver montado e não estiver incapacitado, você ganha os seguintes benefícios:\n\n• Você tem vantagem nas jogadas de ataque corpo-a-corpo contra qualquer criatura desmontada que seja menor que a sua montaria.\n• Você pode forçar que um ataque direcionado a sua montaria seja direcionado a você, em seu lugar.\n• Se sua montaria for alvo de um efeito que permita a ela realizar um teste de resistência de Destreza para reduzir o dano à metade, ao invés disso, ela não sofre qualquer dano se for bem sucedida no teste de resistência, e apenas metade se falhar.'
    },
    {
      id: 'phb-2014-conjurador-de-guerra',
      name: 'Conjurador de Guerra',
      sourcePage: 169,
      prerequisite: 'Capacidade de conjurar pelo menos uma magia',
      prerequisites: [{ type: 'spellcasting', label: 'Capacidade de conjurar pelo menos uma magia' }],
      description: 'Você praticou a conjuração de magias no meio do combate, aprendendo técnicas que lhe concedem os seguintes benefícios:\n\n• Você tem vantagem em testes de resistência de Constituição para manter sua concentração em uma magia quando você sofrer dano.\n• Você pode realizar os componentes somáticos de uma magia mesmo quando está com armas ou um escudo em uma ou ambas as mãos.\n• Quando o movimento de uma criatura hostil provocar um ataque de oportunidade para você, você pode usar sua reação para conjurar uma magia na criatura, ao invés de realizar o ataque de oportunidade. A magia deve ter um tempo de conjuração de 1 ação e deve ter apenas uma criatura como alvo.'
    },
    {
      id: 'phb-2014-conjurador-de-ritual',
      name: 'Conjurador de Ritual',
      sourcePage: 169,
      prerequisite: 'Inteligência ou Sabedoria 13 ou maior',
      prerequisites: [{ type: 'ability', abilities: ['Inteligência', 'Sabedoria'], minimum: 13, mode: 'any', label: 'Inteligência ou Sabedoria 13 ou maior' }],
      choices: [{ id: 'spell-list', label: 'Lista de magias', count: 1, options: ['Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Mago'] }],
      description: 'Você aprendeu um número de magias que você pode conjurar como rituais. Essas magias são escritas em um livro de rituais, o qual deve estar em suas mãos enquanto você conjura uma dessas magias.\n\nQuando você escolhe esse talento, você adquire um livro de rituais que contem duas magias de 1° nível, à sua escolha. Escolha uma das seguintes classes: bardo, bruxo, clérigo, druida, feiticeiro ou mago. Você deve escolher suas magias da lista de magias dessa classe e as magias escolhidas devem ter o descritor ritual. A classe que você escolheu também determina a habilidade de conjuração dessas magias: Carisma para bardo, bruxo ou feiticeiro; Sabedoria para clérigo ou druida; ou Inteligência para mago.\n\nSe você encontrar uma magia na forma escrita, como a contida em um pergaminho de magia ou o grimório de um mago, você é capaz de adicioná-la ao seu livro de rituais. A magia deve estar na lista de magias da classe escolhida, o nível da magia não pode ser maior que metade do seu nível (arredondado para cima) e deve conter o descritor ritual. O processo para copiar a magia no seu livro de rituais leva 2 horas por nível da magia e custa 50 po por nível. O custo representa os componentes materiais que você gasta para experimentar a magia até dominá-la, bem como as finas tintas utilizadas para escrevê-la.'
    },
    {
      id: 'phb-2014-curandeiro',
      name: 'Curandeiro',
      sourcePage: 169,
      description: 'Você é um cirurgião capacitado, permitindo que você trate de ferimentos rapidamente, trazendo seus aliados de volta à luta. Você adquire os seguintes benefícios:\n\n• Quando você usar um kit de primeiros-socorros para estabilizar uma criatura morrendo, a criatura recupera 1 ponto de vida, ao invés disso.\n• Com uma ação, você pode gastar um uso do kit de primeiros-socorros para tratar de uma criatura e restaurar 1d6 + 4 pontos de vida mais uma quantidade de pontos de vida adicionais igual ao número total de Dados de Vida da criatura. A criatura não pode recuperar pontos de vida através desse talento novamente até ter terminado um descanso curto ou longo.'
    },
    {
      id: 'phb-2014-duelista-defensivo',
      name: 'Duelista Defensivo',
      sourcePage: 169,
      prerequisite: 'Destreza 13 ou maior',
      prerequisites: [{ type: 'ability', abilities: ['Destreza'], minimum: 13, mode: 'all', label: 'Destreza 13 ou maior' }],
      description: 'Quando você estiver empunhando uma arma de acuidade com a qual você seja proficiente e outra criatura atingir você com um ataque corpo-a-corpo, você pode usar sua reação para adicionar seu bônus de proficiência a sua CA para esse ataque, potencialmente fazendo o ataque errar.'
    },
    {
      id: 'phb-2014-especialista-em-besta',
      name: 'Especialista em Besta',
      sourcePage: 169,
      description: 'Graças a sua pratica extensiva com bestas, você ganha os seguintes benefícios:\n\n• Você ignora a qualidade de recarga de bestas nas quais você é proficiente.\n• Estar a 1,5 metro de uma criatura hostil não impõem desvantagem nas suas jogadas de ataque à distância.\n• Quando você usa a ação de Ataque e ataca com uma arma de uma mão, você pode usar sua ação bônus para atacar com uma besta de mão carregada que você esteja empunhando.'
    },
    {
      id: 'phb-2014-especialista-em-briga',
      name: 'Especialista em Briga',
      sourcePage: 169,
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Força', 'Constituição'] }],
      description: 'Acostumado a brigas de bar usando qualquer coisa como armas, e na falta, os punhos, você ganha os seguintes benefícios:\n\n• Aumente o valor de Força ou Constituição em 1, até o máximo de 20.\n• Seus ataques desarmados causam 1d4 de dano.\n• Quando você atinge uma criatura com um ataque desarmado ou com uma arma improvisada, no seu turno, você pode usar uma ação bônus para tentar agarrar o alvo.'
    },
    {
      id: 'phb-2014-explorador-de-cavernas',
      name: 'Explorador de Cavernas',
      sourcePage: 169,
      description: 'Alerta às armadilhas escondidas e portas secretas encontradas em muitas masmorras, você ganha os seguintes benefícios:\n\n• Você tem vantagem em testes de Sabedoria (Percepção) e de Inteligência (Investigação) feitos para detectar a presença de portas secretas.\n• Você tem vantagem em testes de resistência feitos para evitar ou resistir a armadilhas.\n• Você tem resistência ao dano causado por armadilhas.\n• Você pode procurar armadilhas enquanto viaja a um ritmo normal, ao invés de metade do ritmo.'
    },
    {
      id: 'phb-2014-imobilizador',
      name: 'Imobilizador',
      sourcePage: 169,
      prerequisite: 'Força 13 ou maior',
      prerequisites: [{ type: 'ability', abilities: ['Força'], minimum: 13, mode: 'all', label: 'Força 13 ou maior' }],
      description: 'Você desenvolveu a perícia necessária para se prender a alguém em um combate engajado. Você recebe os seguintes benefícios:\n\n• Você tem vantagem nas jogadas de ataque contra uma criatura agarrada.\n• Você pode usar sua ação para tentar imobilizar uma criatura agarrada por você. Para tanto, realize outro teste de agarrar. Se você for bem sucedido, você e a criatura estarão ambos impedidos até o agarre terminar.'
    },
    {
      id: 'phb-2014-iniciado-em-magia',
      name: 'Iniciado em Magia',
      sourcePage: 170,
      choices: [{ id: 'spell-list', label: 'Lista de magias', count: 1, options: ['Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Mago'] }],
      description: 'Escolha uma classe: bardo, bruxo, clérigo, druida, feiticeiro ou mago. Você aprende dois truques da lista de magias da classe escolhida.\n\nAlém disso, escolha uma magia de 1° nível da mesma lista. Você aprende essa magia e pode conjura-la com o menor nível possível. Uma vez que a conjure, você precisa terminar um descanso longo para poder conjura-la novamente. Essa restrição aplica-se apenas à magia adquirida através desse talento.\n\nSua habilidade de conjuração depende da classe que você escolher: Carisma para bardo, bruxo ou feiticeiro; Sabedoria para clérigo ou druida; ou Inteligência para mago.'
    },
    {
      id: 'phb-2014-investida-poderosa',
      name: 'Investida Poderosa',
      sourcePage: 170,
      description: 'Quando você usa a ação de Disparada, você pode usar sua ação bônus para realizar um ataque corpo-a-corpo com arma ou para empurrar uma criatura.\n\nSe você se mover, pelo menos, 3 metros em linha reta, imediatamente antes de realizar essa ação bônus, você pode tanto ganhar +5 de bônus na jogada de dano do ataque (se você escolher realizar um ataque corpo-a-corpo e atingir) ou empurrar o alvo até 3 metros de você (se você escolher empurrar e for bem sucedido).'
    },
    {
      id: 'phb-2014-lider-inspirador',
      name: 'Líder Inspirador',
      sourcePage: 170,
      prerequisite: 'Carisma 13 ou maior',
      prerequisites: [{ type: 'ability', abilities: ['Carisma'], minimum: 13, mode: 'all', label: 'Carisma 13 ou maior' }],
      description: 'Você pode gastar 10 minutos inspirando seus companheiros, suportando a vontade deles de lutar. Quando fizer isso, escolha até seis criaturas amigáveis (que pode incluir você) a até 9 metros de você que possam ver ou ouvir você e possam te compreender. Cada criatura ganha pontos de vida temporários igual ao seu nível + seu modificador de Carisma. Uma criatura não pode ganhar pontos de vida temporários desse talento novamente até terminar um descanso curto ou longo.'
    },
    {
      id: 'phb-2014-maestria-em-arma-de-haste',
      name: 'Maestria em Arma de Haste',
      sourcePage: 170,
      description: 'Você consegue manter seus inimigos afastados utilizando armas de haste. Você ganha os seguintes benefícios:\n\n• Quando você realiza a ação de Ataque e ataca com uma glaive, alabarda ou bordão, você pode usar uma ação bônus para realizar um ataque corpo-a-corpo com a outra extremidade da arma. Esse ataque usa o mesmo modificador de habilidade do ataque primário. O dado de dano da arma para esse ataque é um d4 e o ataque causa dano de concussão.\n• Enquanto você estiver empunhando uma glaive, alabarda, lança longa ou bastão, as outras criaturas provocam um ataque de oportunidade a você quando entrarem no seu alcance.'
    },
    {
      id: 'phb-2014-maestria-em-armadura-media',
      name: 'Maestria em Armadura Média',
      sourcePage: 170,
      prerequisite: 'Proficiência em armadura média',
      prerequisites: [{ type: 'proficiency', category: 'armor', value: 'medium', label: 'Proficiência em armadura média' }],
      description: 'Você praticou seus movimentos usando armaduras pesadas para ganhar os seguintes benefícios:\n\n• Vestir uma armadura média não lhe impõe desvantagem em testes de Destreza (Furtividade).\n• Quando você estiver vestindo uma armadura média, você pode adicionar 3, ao invés de 2, à sua CA, se você tiver Destreza 16 ou maior.'
    },
    {
      id: 'phb-2014-maestria-em-armadura-pesada',
      name: 'Maestria em Armadura Pesada',
      sourcePage: 170,
      prerequisite: 'Proficiência em armadura pesada',
      prerequisites: [{ type: 'proficiency', category: 'armor', value: 'heavy', label: 'Proficiência em armadura pesada' }],
      description: 'Você pode usar sua armadura para defletir ataques potencialmente fatais a outros. Você ganha os seguintes benefícios:\n\n• Aumente seu valor de Força em 1, até o máximo de 20.\n• Quando você estiver vestindo uma armadura pesada, dano de concussão, cortante e perfurante que você receba de ataques não-mágicos será reduzido em 3.'
    },
    {
      id: 'phb-2014-matador-de-conjuradores',
      name: 'Matador de Conjuradores',
      sourcePage: 170,
      description: 'Você praticou técnicas úteis em combate corpo-a-corpo contra conjuradores, ganhando os seguintes benefícios:\n\n• Quando uma criatura a até 1,5 metro de você conjurar uma magia, você pode usar sua reação para realizar um ataque corpo-a-corpo contra ela.\n• Quando você causa dano em uma criatura que está se concentrando em uma magia, a criatura terá desvantagem no teste de resistência que ela fizer para manter a concentração.\n• Você tem vantagem em testes de resistência contra magias conjuradas por criaturas a até 1,5 metro de você.'
    },
    {
      id: 'phb-2014-mente-afiada',
      name: 'Mente Afiada',
      sourcePage: 170,
      description: 'Você tem uma mente que pode cronometrar o tempo e memorizar direção e detalhes com precisão absurda. Você ganha os seguintes benefícios:\n\n• Aumente seu valor de Inteligência em 1, até o máximo de 20.\n• Você sempre sabe qual a direção do norte.\n• Você sempre sabe o número de horas restantes para o próximo nascer ou pôr do sol.\n• Você pode relembrar, com precisão, qualquer coisa que você tenha visto ou ouvido no último mês.'
    },
    {
      id: 'phb-2014-mestre-de-armas',
      name: 'Mestre de Armas',
      sourcePage: 170,
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Força', 'Destreza'] }, { id: 'weapon-proficiencies', label: 'Armas simples ou marciais', count: 4 }],
      description: 'Você tem praticado extensamente com uma variedade de armas, ganhando os seguintes benefícios:\n\n• Aumente o valor de Força ou Destreza em 1, até o máximo de 20.\n• Você ganha proficiência com quatro armas simples ou marciais, à sua escolha.'
    },
    {
      id: 'phb-2014-mestre-de-armas-grandes',
      name: 'Mestre de Armas Grandes',
      sourcePage: 171,
      description: 'Você aprendeu a usar o peso em sua vantagem, deixando o balanço potencializar seus golpes. Você recebe os seguintes benefícios:\n\n• No seu turno, quando você atingir um acerto crítico com uma arma corpo-a-corpo ou reduzir os pontos de vida de uma criatura a 0, você pode realizar um ataque corpo-a-corpo com arma, com uma ação bônus.\n• Antes de você realizar um ataque corpo-a-corpo com uma arma pesada na qual você seja proficiente, você pode escolher sofrer –5 de penalidade em sua jogada de ataque. Se o ataque atingir, você adiciona +10 ao dano do ataque.'
    },
    {
      id: 'phb-2014-mestre-de-escudo',
      name: 'Mestre de Escudo',
      sourcePage: 171,
      description: 'Você não usa escudos apenas para proteção, mas também de forma ofensiva. Você ganha os seguintes benefícios enquanto estiver empunhando um escudo:\n\n• Se você realizar a ação de Ataque no seu turno, você pode usar uma ação bônus para tentar empurrar uma criatura, a até 1,5 metro de você, com seu escudo.\n• Se você não estiver incapacitado, você pode adicionar seu bônus de CA do escudo a qualquer teste de resistência de Destreza que você fizer contra uma magia ou outro efeito nocivo que tenha você como alvo.\n• Se você for alvo de um efeito que permita realizar um teste de resistência de Destreza para sofrer apenas metade do dano, você pode usar sua reação para não sofrer dano se passar no teste de resistência, interpondo seu escudo entre você e a fonte do efeito.'
    },
    {
      id: 'phb-2014-mobilidade',
      name: 'Mobilidade',
      sourcePage: 171,
      description: 'Você é excepcionalmente rápido e ágil. Você ganha os seguintes benefícios:\n\n• Seu deslocamento aumenta em 3 metros.\n• Quando você usa a ação de Disparada, mover-se através de terreno difícil não lhe custa qualquer movimento adicional neste turno.\n• Quando você realiza um ataque corpo-a-corpo contra uma criatura, você não provoca ataques de oportunidade para essa criatura pelo resto do turno, independentemente de ter atingido ou não.'
    },
    {
      id: 'phb-2014-observador',
      name: 'Observador',
      sourcePage: 171,
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Inteligência', 'Sabedoria'] }],
      description: 'Rápido em perceber os detalhes do ambiente, você ganha os seguintes benefícios:\n\n• Aumente seu valor de Inteligência ou Sabedoria em 1, até o máximo de 20.\n• Se você puder ver a boca de uma criatura enquanto ela fala um idioma que você compreende, você pode interpretar o que ela está dizendo ao ler os seus lábios.\n• Você tem +5 de bônus nos seus valores passivos de Sabedoria (Percepção) e Inteligência (Investigação).'
    },
    {
      id: 'phb-2014-perito',
      name: 'Perito',
      sourcePage: 172,
      choices: [{ id: 'skills-tools', label: 'Perícias ou ferramentas', count: 3 }],
      description: 'Você ganha proficiência em qualquer combinação de três perícias ou ferramentas, à sua escolha.'
    },
    {
      id: 'phb-2014-poliglota',
      name: 'Poliglota',
      sourcePage: 172,
      choices: [{ id: 'languages', label: 'Idiomas', count: 3 }],
      description: 'Você estudou línguas e códigos, ganhando os seguintes benefícios:\n\n• Aumente seu valor de Inteligência em 1, até o máximo de 20.\n• Você aprende três idiomas, à sua escolha.\n• Você é capaz de criar criptogramas escritos. Outros não podem decifrar um código criado por você a não ser que você os ensine, elas sejam bem sucedidas num teste de inteligência (CD igual ao seu valor de Inteligência + seu bônus de proficiência) ou usem mágica para decifrá-lo.'
    },
    {
      id: 'phb-2014-protecao-leve',
      name: 'Proteção Leve',
      sourcePage: 172,
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Força', 'Destreza'] }],
      description: 'Você treinou até dominar o uso de armaduras leves, ganhando os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Você ganha proficiência com armadura leves.'
    },
    {
      id: 'phb-2014-protecao-moderada',
      name: 'Proteção Moderada',
      sourcePage: 172,
      prerequisite: 'Proficiência em armadura leve',
      prerequisites: [{ type: 'proficiency', category: 'armor', value: 'light', label: 'Proficiência em armadura leve' }],
      choices: [{ id: 'ability', label: 'Aumento no Valor de Habilidade', count: 1, options: ['Força', 'Destreza'] }],
      description: 'Você treinou até dominar o uso de armaduras médias e escudos, ganhando os seguintes benefícios:\n\n• Aumente seu valor de Força ou Destreza em 1, até o máximo de 20.\n• Você ganha proficiência com armadura média e escudos.'
    },
    {
      id: 'phb-2014-protecao-pesada',
      name: 'Proteção Pesada',
      sourcePage: 172,
      prerequisite: 'Proficiência em armadura média',
      prerequisites: [{ type: 'proficiency', category: 'armor', value: 'medium', label: 'Proficiência em armadura média' }],
      description: 'Você treinou até dominar o uso de armaduras pesadas, ganhando os seguintes benefícios:\n\n• Aumente seu valor de Força em 1, até o máximo de 20.\n• Você ganha proficiência com armadura pesada.'
    },
    {
      id: 'phb-2014-resiliente',
      name: 'Resiliente',
      sourcePage: 172,
      choices: [{ id: 'ability', label: 'Valor de habilidade', count: 1, options: ['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'] }],
      description: 'Escolha um valor de habilidade. Você ganha os seguintes benefícios:\n\n• Aumente o valor de habilidade escolhido em 1, até o máximo de 20.\n• Você ganha proficiência em testes de resistência usando a habilidade escolhida.'
    },
    {
      id: 'phb-2014-resistente',
      name: 'Resistente',
      sourcePage: 172,
      description: 'Duro e resistente, você ganha os seguintes benefícios:\n\n• Aumente seu valor de Constituição em 1, até o máximo de 20.\n• Quando você rolar um Dado de Vida para recuperar pontos de vida, o valor mínimo de pontos de vida que você recupera dessa rolagem será igual a duas vezes seu modificador de Constituição (mínimo de 2).'
    },
    {
      id: 'phb-2014-robusto',
      name: 'Robusto',
      sourcePage: 172,
      description: 'Seu máximo de pontos de vida aumenta em um valor igual a duas vezes seu nível quando você adquire esse talento. Toda vez que você ganhar um nível, após isso, seu máximo de pontos de vida aumenta em 2 pontos de vida adicionais.'
    },
    {
      id: 'phb-2014-sentinela',
      name: 'Sentinela',
      sourcePage: 172,
      description: 'Você domina técnicas para obter vantagem a cada vez que qualquer inimigo baixar a guarda, ganhando os seguintes benefícios:\n\n• Quando você atinge uma criatura com um ataque de oportunidade, o deslocamento da criatura se torna 0 pelo resto do turno.\n• As criaturas provocam ataques de oportunidade de você mesmo se realizarem a ação de Desengajar antes de saírem do seu alcance.\n• Quando uma criatura a até 1,5 metro de você realizar um ataque contra um alvo diferente de você (e o alvo não possuir esse talento), você pode usar sua reação para realizar um ataque corpo-a-corpo com arma contra a criatura atacante.'
    },
    {
      id: 'phb-2014-sorrateiro',
      name: 'Sorrateiro',
      sourcePage: 172,
      prerequisite: 'Destreza 13 ou maior',
      prerequisites: [{ type: 'ability', abilities: ['Destreza'], minimum: 13, mode: 'all', label: 'Destreza 13 ou maior' }],
      description: 'Você é especialista em espreitar através das sombras. Você ganha os seguintes benefícios:\n\n• Você pode tentar se esconder quando estiver levemente obscurecido para a criatura de quem você está tentando se esconder.\n• Quando você estiver escondido de uma criatura e errar um ataque à distância contra ela, realizar esse ataque não revelará sua posição.\n• Penumbra não impõem desvantagem nos seus testes de Sabedoria (Percepção) relacionados a visão.'
    },
    {
      id: 'phb-2014-sortudo',
      name: 'Sortudo',
      sourcePage: 172,
      description: 'Você tem uma sorte inexplicável que parece surgir nos momentos exatos.\n\nVocê tem 3 pontos de sorte. A qualquer momento que você realizar uma jogada de ataque, teste de habilidade ou teste de resistência, você pode gastar um ponto de sorte para rolar um d20 adicional. Você pode escolher gastar um dos seus pontos de sorte depois de rolar o dado, mas antes de saber o resultado da jogada. Você escolhe qual dos d20s irá usar para a jogada de ataque, teste de habilidade ou teste de resistência.\n\nVocê também pode gastar um ponto de sorte quando uma jogada de ataque for feita contra você. Role um d20, e então escolha se o ataque irá usar a jogada do atacante ou a sua.\n\nSe mais de uma criatura gastar um ponto de sorte para influenciar uma mesma jogada, os pontos se cancelam mutuamente; nenhum dado adicional é rolado.\n\nVocê recupera seus pontos de sorte gastos após terminar um descanso longo.'
    }
  ].map(feat => ({ ...feat, sourceId: 'phb-2014' }));

  registry.registerFeatCatalog({
    id: 'phb-2014-feats',
    sourceId: 'phb-2014',
    label: 'Livro do Jogador',
    chapter: 'Capítulo 6 — Opções de Personalização',
    pages: '167–172',
    feats
  });
})(window.GRIMORIO_REGISTRY);
