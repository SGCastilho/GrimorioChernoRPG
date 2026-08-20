'use strict';

(function registerAdvancedWeaponMasteries(global){
  const data={
  "schema": "grimorio-advanced-weapon-masteries@1",
  "sourceId": "ryoko-yokai-realms",
  "chapter": "Capítulo 7 — Maestrias de Armas Avançadas",
  "pages": "83–115",
  "rules": {
    "intro": "Maestrias de Armas Avançadas representam treinamento marcial dedicado a propriedades de armas. Técnicas aprendidas em uma árvore podem ser usadas com qualquer arma daquela propriedade com a qual você seja proficiente, desde que cumpra todos os pré-requisitos.",
    "fullMartial": [
      "Bárbaro",
      "Guerreiro",
      "Monge",
      "Ladino"
    ],
    "halfMartial": [
      "Dobrador",
      "Paladino",
      "Patrulheiro"
    ],
    "nonMartial": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Domador",
      "Bruxo",
      "Mago"
    ],
    "martialLevelFormula": "Nível Marcial = níveis em classes marciais completas + metade dos níveis em classes meio-marciais (arredondado para baixo).",
    "extraAttackException": "Uma classe normalmente não marcial conta como meio-marcial para estas regras a partir do momento em que uma subclasse ou invocação escolhida concede a capacidade de atacar mais de uma vez com a ação Atacar.",
    "martialSaveDc": "CD Marcial = 8 + bônus de proficiência + modificador de habilidade usado no ataque + outros bônus fixos à jogada de ataque.",
    "martialSaveDcNote": "Bônus que dependem de rolar dados, como bênção ou Inspiração de Bardo, não entram na CD Marcial.",
    "criticalThreshold": "Reduções no limiar de crítico fornecidas por Técnicas Avançadas se acumulam entre si e com características de classe e ataques de combo.",
    "selectionRule": "Para aprender uma técnica de tier 2 ou maior, você precisa conhecer uma técnica do tier imediatamente anterior na mesma árvore e cumprir o requisito de Nível Marcial.",
    "replacementRule": "Regra opcional: ao ganhar um nível, você pode substituir uma Técnica Avançada por outra para a qual cumpra os pré-requisitos, desde que isso não remova o pré-requisito de outra técnica que você ainda conhece.",
    "superiorStrikeRule": "Ao realizar a ação Atacar, você pode substituir um ataque por um Golpe Superior, no máximo uma vez por turno. Pode realizar Golpes Superiores um número de vezes igual ao bônus de proficiência e recupera todos os usos ao terminar um descanso longo.",
    "weaponNotes": [
      "Ataques desarmados usam a árvore Pugilista como se possuíssem essa propriedade.",
      "Escudos, embora sejam armaduras e não armas, possuem uma árvore própria e o Golpe Superior Impacto de Escudo.",
      "Para Maestria Avançada, Chicote e Tetherhook contam como Flagelo, e a Picareta de Guerra usa Versátil (1d10).",
      "Técnicas da árvore Pesada beneficiam apenas armas Pesadas corpo a corpo; armas Pesadas à distância usam Munição e Carregamento & Recarga."
    ]
  },
  "progression": [
    {
      "martialLevel": 2,
      "techniquesKnown": 1,
      "maxTier": 1
    },
    {
      "martialLevel": 4,
      "techniquesKnown": 2,
      "maxTier": 1
    },
    {
      "martialLevel": 6,
      "techniquesKnown": 3,
      "maxTier": 2
    },
    {
      "martialLevel": 8,
      "techniquesKnown": 4,
      "maxTier": 2
    },
    {
      "martialLevel": 10,
      "techniquesKnown": 5,
      "maxTier": 3
    },
    {
      "martialLevel": 12,
      "techniquesKnown": 6,
      "maxTier": 3
    },
    {
      "martialLevel": 14,
      "techniquesKnown": 7,
      "maxTier": 4
    },
    {
      "martialLevel": 16,
      "techniquesKnown": 8,
      "maxTier": 4
    },
    {
      "martialLevel": 18,
      "techniquesKnown": 9,
      "maxTier": 4
    },
    {
      "martialLevel": 20,
      "techniquesKnown": 10,
      "maxTier": 4
    }
  ],
  "trees": [
    {
      "id": "ammunition",
      "name": "Munição",
      "originalName": "Ammunition",
      "propertyDescription": "A árvore se aplica a armas com a propriedade Munição. Algumas técnicas especializam projéteis; uma peça de munição só pode manter uma modificação por vez.",
      "weapons": [
        "Blunderbuss",
        "Blowgun",
        "Hand Crossbow",
        "Hand Tommybow",
        "Heavy Crossbow",
        "Heavy Tommybow",
        "Light Crossbow",
        "Light Tommybow",
        "Longbow",
        "Musket",
        "Ōdzutsu",
        "Pistol",
        "Revolver",
        "Rifle",
        "Shortbow",
        "Sling",
        "Slingshot"
      ],
      "techniques": [
        {
          "id": "ammunition-aerodynamic-ammunition",
          "name": "Munição Aerodinâmica",
          "originalName": "Aerodynamic Ammunition",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 91,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Amplia drasticamente o alcance de munições preparadas.",
          "description": "Ao terminar um descanso curto ou longo, você pode modificar até duas vezes seu bônus de proficiência em peças de munição. Para ataques feitos com armas que usem essa munição, o alcance normal dobra e o alcance longo aumenta em 50%. A modificação desaparece após 24 horas."
        },
        {
          "id": "ammunition-tinkered-artillery",
          "name": "Artilharia Engenhocada",
          "originalName": "Tinkered Artillery",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 91,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Prepara munições venenosas ou derrubadoras.",
          "description": "Ao terminar um descanso curto ou longo, modifique até seu bônus de proficiência em munições, escolhendo para cada uma: Venenosa, que em um acerto causa +1d6 de veneno e exige salvaguarda de Constituição ou deixa o alvo envenenado até o fim do próximo turno; ou Impactante, que em um acerto exige salvaguarda de Força ou derruba o alvo. A munição só pode ser usada dentro do alcance normal e se deteriora após 24 horas."
        },
        {
          "id": "ammunition-superior-strike-ammunition",
          "name": "Golpe Superior: Munição",
          "originalName": "Superior Strike: Ammunition",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 91,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Munição.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Munição."
        },
        {
          "id": "ammunition-double-load",
          "name": "Carga Dupla",
          "originalName": "Double Load",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 91,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Carrega dois projéteis para aumentar o dano de um disparo.",
          "description": "Uma vez no seu turno, ao atacar com uma arma de Munição, você pode carregar duas peças de munição. Se o ataque acertar, causa um dado adicional de dano da arma. Esta técnica não pode ser combinada com Carga Gêmea da árvore Carregamento & Recarga."
        },
        {
          "id": "ammunition-tooled-artillery",
          "name": "Artilharia Especializada",
          "originalName": "Tooled Artillery",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 91,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Especializa munição com explosivos ou fumaça.",
          "description": "Ao terminar um descanso curto ou longo, modifique até seu bônus de proficiência em munições. Explosiva: acertando ou errando, o alvo e criaturas a até 1,5 m fazem salvaguarda de Destreza; o alvo acertado falha automaticamente; em falha, sofre 1d8 de trovão, ou metade em sucesso. Bomba de Fumaça: cria uma área de 3 m de raio fortemente obscurecida ao redor do alvo até o início do seu próximo turno. A munição só pode mirar dentro do alcance normal e expira em 24 horas."
        },
        {
          "id": "ammunition-rapid-fire",
          "name": "Fogo Rápido",
          "originalName": "Rapid Fire",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 91,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Pode obter um ataque adicional após um teste de Destreza.",
          "description": "Uma vez por turno, depois de realizar a ação Atacar e fazer um ataque com arma de Munição, faça um teste de Destreza CD 15. Em um sucesso, você realiza um ataque adicional com essa arma como parte da mesma ação."
        },
        {
          "id": "ammunition-runed-artillery",
          "name": "Artilharia Rúnica",
          "originalName": "Runed Artillery",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 91,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Cria munições rúnicas extremamente letais.",
          "description": "Ao terminar um descanso curto ou longo, modifique até seu bônus de proficiência em munições. Serrilhada: ataques com a munição têm vantagem e seu limiar de crítico é reduzido em 1. Fosforosa: em um acerto, causa +3d6 de fogo; o alvo emite luz plena em 3 m e penumbra por mais 3 m, não pode se beneficiar de invisibilidade nem se Esconder; o efeito dura 1 minuto ou até usar uma ação para apagar as chamas ou ficar submerso. A munição só funciona dentro do alcance normal e expira em 24 horas."
        }
      ]
    },
    {
      "id": "finesse",
      "name": "Acuidade",
      "originalName": "Finesse",
      "propertyDescription": "Armas de Acuidade permitem usar Força ou Destreza para as jogadas de ataque e dano, usando o mesmo atributo em ambos.",
      "weapons": [
        "Chakram",
        "Dagger",
        "Dart",
        "Meteor Hammer",
        "Nunchaku",
        "Rapier",
        "Rope Dart",
        "Sai",
        "Scimitar",
        "Shortsword",
        "Shuriken",
        "Starknife",
        "Tessen",
        "Twinblade",
        "Whip"
      ],
      "techniques": [
        {
          "id": "finesse-ambidextrous",
          "name": "Ambidestro",
          "originalName": "Ambidextrous",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 93,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Permite lutar com duas armas de Acuidade.",
          "description": "Quando realiza a ação Atacar e ataca com uma arma corpo a corpo de Acuidade empunhada em uma mão, você pode usar uma ação bônus para atacar com outra arma corpo a corpo de Acuidade empunhada na outra mão. Não adicione o modificador de habilidade ao dano do ataque bônus, a menos que ele seja negativo."
        },
        {
          "id": "finesse-nimble-duelist",
          "name": "Duelista Ágil",
          "originalName": "Nimble Duelist",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 93,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Atacar abre uma janela segura para se afastar.",
          "description": "Quando você acerta uma criatura com um ataque corpo a corpo usando uma arma de Acuidade, ela não pode fazer ataques de oportunidade contra você até o fim desse turno."
        },
        {
          "id": "finesse-superior-strike-finesse",
          "name": "Golpe Superior: Acuidade",
          "originalName": "Superior Strike: Finesse",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 93,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Acuidade.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Acuidade."
        },
        {
          "id": "finesse-jink",
          "name": "Desvio Ofensivo",
          "originalName": "Jink",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 93,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Combina Esquivar com um ataque de Acuidade penalizado.",
          "description": "Quando realiza a ação Esquivar, você pode fazer um ataque corpo a corpo com uma arma de Acuidade como parte da mesma ação, mas sofre −4 na jogada de ataque."
        },
        {
          "id": "finesse-weak-spot",
          "name": "Ponto Fraco",
          "originalName": "Weak Spot",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 93,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Converte vantagem em dano adicional.",
          "description": "Quando faz um ataque com uma arma de Acuidade com vantagem, em um acerto você pode causar dano adicional igual ao seu bônus de proficiência. Esse dano adicional só pode ocorrer uma vez por turno."
        },
        {
          "id": "finesse-fighting-elegance",
          "name": "Elegância de Combate",
          "originalName": "Fighting Elegance",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 93,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Aumenta a defesa ao lutar exclusivamente com Acuidade.",
          "description": "Sua CA aumenta em 2 enquanto você empunha uma arma de Acuidade e não empunha na outra mão uma arma sem Acuidade nem um escudo."
        },
        {
          "id": "finesse-opportunist",
          "name": "Oportunista",
          "originalName": "Opportunist",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 93,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Pune inimigos próximos que atacam outra pessoa.",
          "description": "Quando uma criatura a até 1,5 m de você ataca outra criatura que não seja você, você pode usar sua reação para fazer um ataque corpo a corpo contra ela com uma arma de Acuidade."
        }
      ]
    },
    {
      "id": "heavy",
      "name": "Pesada",
      "originalName": "Heavy",
      "propertyDescription": "As técnicas desta árvore beneficiam apenas armas Pesadas corpo a corpo; para armas Pesadas à distância, use as árvores de Munição e Carregamento & Recarga.",
      "weapons": [
        "Glaive",
        "Greataxe",
        "Greatsword",
        "Halberd",
        "Maul",
        "Pike"
      ],
      "techniques": [
        {
          "id": "heavy-colossal-strength",
          "name": "Força Colossal",
          "originalName": "Colossal Strength",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 94,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Ignora a restrição de tamanho de armas Pesadas com Força suficiente.",
          "description": "Se sua Força for 15 ou maior, ser Pequeno ou Miúdo não impõe desvantagem nas suas jogadas de ataque com armas Pesadas."
        },
        {
          "id": "heavy-executioner",
          "name": "Carrasco",
          "originalName": "Executioner",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 94,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Devasta criaturas caídas e melhora o limiar de crítico.",
          "description": "Quando acerta uma criatura caída com uma arma Pesada, a arma causa um dado adicional de dano. Além disso, o limiar de acerto crítico desse ataque é reduzido em 1."
        },
        {
          "id": "heavy-hammering-blow",
          "name": "Golpe de Martelo",
          "originalName": "Hammering Blow",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 95,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Um dado máximo pode derrubar o alvo.",
          "description": "Quando você acerta com uma arma Pesada uma criatura de no máximo uma categoria de tamanho maior que você e obtém o maior resultado possível em um dos dados de dano da arma, pode derrubar o alvo."
        },
        {
          "id": "heavy-superior-strike-heavy",
          "name": "Golpe Superior: Pesada",
          "originalName": "Superior Strike: Heavy",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 95,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas Pesadas.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Pesada."
        },
        {
          "id": "heavy-cleave",
          "name": "Talho",
          "originalName": "Cleave",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 95,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Transfere dano excedente por uma sequência de alvos.",
          "description": "Quando reduz uma criatura a 0 PV com um ataque corpo a corpo de arma Pesada, pode transferir o dano excedente para outra criatura ao seu alcance, desde que a jogada de ataque original também a acertasse. Se essa criatura também cair a 0 PV, você pode repetir enquanto houver dano excedente."
        },
        {
          "id": "heavy-dauntless",
          "name": "Implacável",
          "originalName": "Dauntless",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 95,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Transforma resultados 1 de dano físico em resultados máximos.",
          "description": "Ao acertar com uma arma Pesada corpo a corpo, sempre que tirar 1 em um dado de dano de concussão, perfurante ou cortante, trate esse 1 como o resultado máximo do dado."
        },
        {
          "id": "heavy-concussive-blow",
          "name": "Golpe Concussivo",
          "originalName": "Concussive Blow",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 95,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Críticos deixam o alvo confuso por um turno.",
          "description": "Quando consegue um acerto crítico com uma arma Pesada, o alvo também sofre o efeito de confusão até o fim do próximo turno dele."
        },
        {
          "id": "heavy-staggering-blow",
          "name": "Golpe Cambaleante",
          "originalName": "Staggering Blow",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 95,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Empurra alvos atingidos pela força da arma.",
          "description": "Quando acerta com uma arma Pesada uma criatura de no máximo uma categoria de tamanho maior, pode empurrá-la até 3 m diretamente para longe de você. Criaturas imunes à condição agarrado são imunes a este efeito."
        }
      ]
    },
    {
      "id": "impact",
      "name": "Impacto",
      "originalName": "Impact",
      "propertyDescription": "Armas de Impacto causam dano dobrado contra objetos e estruturas.",
      "weapons": [
        "Club",
        "Greatclub",
        "Light Hammer",
        "Flail",
        "Mace",
        "Maul",
        "Morningstar",
        "Quarterstaff",
        "Warhammer"
      ],
      "techniques": [
        {
          "id": "impact-direct-damage",
          "name": "Dano Direto",
          "originalName": "Direct Damage",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 97,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Ignora PV temporários e prejudica concentração.",
          "description": "O dano dos seus ataques com armas de Impacto ignora pontos de vida temporários e é aplicado diretamente aos PV normais. Além disso, quando um desses ataques força uma salvaguarda de Constituição para manter concentração, o alvo a realiza com desvantagem."
        },
        {
          "id": "impact-dizzying-strike",
          "name": "Golpe Desorientador",
          "originalName": "Dizzying Strike",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 97,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Reduz o deslocamento do alvo e pode acumular.",
          "description": "Uma vez por turno, quando acerta uma criatura com uma arma de Impacto, reduza o deslocamento dela em 3 m até o fim do próximo turno dela. Esse efeito pode se acumular."
        },
        {
          "id": "impact-superior-strike-impact",
          "name": "Golpe Superior: Impacto",
          "originalName": "Superior Strike: Impact",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 97,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Impacto.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Impacto."
        },
        {
          "id": "impact-momentum-swing",
          "name": "Balanço de Momento",
          "originalName": "Momentum Swing",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 97,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Transforma um erro em uma nova tentativa como ação bônus.",
          "description": "Quando realiza a ação Atacar e erra um alvo com uma arma de Impacto, pode usar imediatamente uma ação bônus para fazer outro ataque com a mesma arma contra o mesmo alvo. Não adicione o modificador de habilidade ao dano desse ataque bônus, salvo se ele for negativo."
        },
        {
          "id": "impact-staggering-strike",
          "name": "Golpe Desestabilizador",
          "originalName": "Staggering Strike",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 97,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Máximo no dano ou crítico pode desestabilizar o alvo.",
          "description": "Quando acerta com uma arma de Impacto e obtém o resultado máximo em um dado de dano da arma ou consegue um crítico, o alvo faz uma salvaguarda de Constituição. Em falha, fica desestabilizado até o fim do próximo turno: tem desvantagem em ataques, em testes e salvaguardas de Destreza ou Inteligência, e não pode usar reações."
        },
        {
          "id": "impact-crushing-force",
          "name": "Força Esmagadora",
          "originalName": "Crushing Force",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 97,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Ganha vantagem contra criaturas menores.",
          "description": "Você tem vantagem em jogadas de ataque corpo a corpo com armas de Impacto contra criaturas pelo menos uma categoria de tamanho menores que você."
        },
        {
          "id": "impact-shattered-steel",
          "name": "Aço Estilhaçado",
          "originalName": "Shattered Steel",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 97,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Pode arrancar ou destruir objetos empunhados.",
          "description": "Quando obtém o resultado máximo no dano ao acertar com uma arma de Impacto, pode direcionar a força a um objeto que o alvo segura. O alvo faz um teste de Força (Atletismo) contra sua CD Marcial: em sucesso, solta o objeto; em falha, o objeto é destruído. Se for um item mágico de raridade igual ou superior à sua arma, o alvo obtém sucesso automaticamente."
        }
      ]
    },
    {
      "id": "light",
      "name": "Leve",
      "originalName": "Light",
      "propertyDescription": "A propriedade Leve permite combate com duas armas conforme as regras-base; várias técnicas desta árvore aprimoram esse estilo.",
      "weapons": [
        "Chakram",
        "Claw",
        "Club",
        "Dagger",
        "Handaxe",
        "Hand Crossbow",
        "Hand Tommybow",
        "Knuckle Duster",
        "Tessen",
        "Light Hammer",
        "Sai",
        "Scimitar",
        "Shortsword",
        "Shuriken",
        "Sickle",
        "Starknife",
        "Tonfa"
      ],
      "techniques": [
        {
          "id": "light-lightweight",
          "name": "Peso Leve",
          "originalName": "Lightweight",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 99,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Aumenta o deslocamento ao permanecer leve.",
          "description": "Enquanto as únicas armas que você empunha forem Leves e você não estiver usando escudo nem armadura pesada, seu deslocamento aumenta em 3 m."
        },
        {
          "id": "light-multi-weapon-fighting",
          "name": "Combate com Múltiplas Armas",
          "originalName": "Multi-Weapon Fighting",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 99,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Adiciona o modificador ao dano do ataque bônus.",
          "description": "Ao usar combate com duas armas, você pode adicionar seu modificador de habilidade ao dano do ataque feito como ação bônus se a arma for Leve."
        },
        {
          "id": "light-superior-strike-light",
          "name": "Golpe Superior: Leve",
          "originalName": "Superior Strike: Light",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 99,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas Leves.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Leve."
        },
        {
          "id": "light-combination-strike",
          "name": "Golpe Combinado",
          "originalName": "Combination Strike",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 99,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Dá vantagem aos ataques Leves feitos como ação bônus.",
          "description": "Quando realiza a ação Atacar e ataca com uma arma Leve, qualquer jogada de ataque com arma Leve que você fizer como ação bônus nesse turno tem vantagem."
        },
        {
          "id": "light-riposte",
          "name": "Riposta",
          "originalName": "Riposte",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 99,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Contra-ataca quando um inimigo erra.",
          "description": "Enquanto empunha duas armas Leves, quando uma criatura ao seu alcance erra você com um ataque corpo a corpo, use sua reação para atacá-la com uma dessas armas."
        },
        {
          "id": "light-featherweight",
          "name": "Peso-Pena",
          "originalName": "Featherweight",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 99,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Concede CA e vantagem em salvaguardas de Destreza.",
          "description": "Enquanto as únicas armas que você empunha forem Leves e você não estiver usando escudo nem armadura pesada, recebe +1 na CA e vantagem em salvaguardas de Destreza."
        },
        {
          "id": "light-swift-striker",
          "name": "Golpeador Veloz",
          "originalName": "Swift Striker",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 99,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Adiciona um ataque Leve à ação Atacar.",
          "description": "Quando realiza a ação Atacar, se as únicas armas que estiver empunhando forem Leves, faça um ataque adicional com uma arma Leve como parte da ação. Não adicione o modificador de habilidade ao dano, a menos que ele seja negativo."
        }
      ]
    },
    {
      "id": "loading-reload",
      "name": "Carregamento & Recarga",
      "originalName": "Loading & Reload",
      "propertyDescription": "Aplica-se a armas com Carregamento ou Recarga. Carregamento limita disparos por ação; Recarga exige recarregar após a quantidade indicada de tiros.",
      "weapons": [
        "Blunderbuss",
        "Blowgun",
        "Hand Crossbow",
        "Hand Tommybow",
        "Heavy Crossbow",
        "Heavy Tommybow",
        "Light Crossbow",
        "Light Tommybow",
        "Musket",
        "Ōdzutsu",
        "Pistol",
        "Revolver",
        "Rifle"
      ],
      "techniques": [
        {
          "id": "loading-reload-flexible-weaponry",
          "name": "Armamento Flexível",
          "originalName": "Flexible Weaponry",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 101,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Transforma armas de disparo em armas corpo a corpo de emergência.",
          "description": "Você pode usar uma arma com Carregamento ou Recarga como um porrete improvisado: ela se torna uma arma simples corpo a corpo com Acuidade que causa 1d4 de concussão. Se acertar uma criatura com esse ataque corpo a corpo, ela não pode fazer ataques de oportunidade contra você até o início do próximo turno dela."
        },
        {
          "id": "loading-reload-hyper-focus",
          "name": "Hiperfoco",
          "originalName": "Hyper Focus",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 101,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Concede vantagem ao próximo disparo do turno.",
          "description": "Como ação bônus, você firma corpo e mente e recebe vantagem na próxima jogada de ataque que fizer com uma arma de Carregamento ou Recarga neste turno."
        },
        {
          "id": "loading-reload-speed-loader",
          "name": "Recarga Veloz",
          "originalName": "Speed Loader",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 101,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Ignora Carregamento e acelera Recarga.",
          "description": "Você ignora a propriedade Carregamento das armas. Além disso, pode recarregar uma arma com a propriedade Recarga usando uma ação ou uma ação bônus."
        },
        {
          "id": "loading-reload-superior-strike-loading",
          "name": "Golpe Superior: Carregamento",
          "originalName": "Superior Strike: Loading",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 101,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Carregamento ou Recarga.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com Carregamento ou Recarga."
        },
        {
          "id": "loading-reload-steady-loader",
          "name": "Recarga Cadenciada",
          "originalName": "Steady Loader",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 101,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Troca quantidade de ataques por um limiar de crítico muito menor.",
          "description": "Ao realizar a ação Atacar, você pode escolher fazer apenas um ataque com uma arma de Carregamento ou Recarga. Se fizer isso, o limiar de crítico desse ataque é reduzido em 1 para cada ataque que normalmente poderia realizar com aquela ação."
        },
        {
          "id": "loading-reload-twin-load",
          "name": "Carga Gêmea",
          "originalName": "Twin Load",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 101,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Sacrifica um ataque para potenciar o próximo disparo.",
          "description": "Uma vez por turno, ao realizar a ação Atacar, você pode abrir mão de um dos ataques para carregar uma segunda munição. Se o próximo ataque com a arma acertar, causa dano adicional igual ao dado de dano da arma + seu bônus de proficiência. Não pode ser usada junto de Carga Dupla da árvore Munição."
        },
        {
          "id": "loading-reload-dead-eye",
          "name": "Olho Mortal",
          "originalName": "Dead-Eye",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 101,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Reduz permanentemente o limiar de crítico dessas armas.",
          "description": "O limiar de crítico dos ataques realizados com armas de Carregamento ou Recarga é reduzido em 1."
        },
        {
          "id": "loading-reload-quick-shot",
          "name": "Tiro Rápido",
          "originalName": "Quick Shot",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 101,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Permite um disparo adicional como ação bônus.",
          "description": "Depois de realizar a ação Atacar e atacar apenas com uma arma de Carregamento ou Recarga, você pode fazer um ataque com ela como ação bônus nesse turno. Não adicione o modificador de habilidade ao dano desse ataque bônus, salvo se ele for negativo."
        }
      ]
    },
    {
      "id": "pugilist",
      "name": "Pugilista",
      "originalName": "Pugilist",
      "propertyDescription": "Ataques desarmados contam como se tivessem Pugilista. A propriedade também pode aumentar em um passo o dado de dano desarmado quando a mão está equipada com uma arma Pugilista.",
      "weapons": [
        "Knuckle Duster",
        "Spiked Cestus",
        "Unarmed Strike"
      ],
      "techniques": [
        {
          "id": "pugilist-combination",
          "name": "Combinação",
          "originalName": "Combination",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 102,
          "requiresProficiency": false,
          "requiresTier": null,
          "summary": "O segundo acerto no mesmo alvo causa dano adicional.",
          "description": "Na segunda vez no seu turno em que acertar a mesma criatura com um ataque desarmado ou arma Pugilista, cause dano adicional igual ao seu bônus de proficiência."
        },
        {
          "id": "pugilist-trained-pugilist",
          "name": "Pugilista Treinado",
          "originalName": "Trained Pugilist",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 103,
          "requiresProficiency": false,
          "requiresTier": null,
          "summary": "Eleva o dano desarmado/Pugilista e o torna mágico.",
          "description": "Você pode usar 1d6 no lugar do dano normal dos ataques desarmados. Armas Pugilistas aumentam esse dado em um passo, para 1d8. Ataques desarmados e com armas Pugilistas contam como mágicos para superar resistências e imunidades a ataques e dano não mágicos."
        },
        {
          "id": "pugilist-uppercut-specialist",
          "name": "Especialista em Uppercut",
          "originalName": "Uppercut Specialist",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 103,
          "requiresProficiency": false,
          "requiresTier": null,
          "summary": "Aumenta a chance de crítico contra criaturas maiores.",
          "description": "Ao atacar com golpe desarmado ou arma Pugilista uma criatura pelo menos uma categoria de tamanho maior que você, seu limiar de crítico é reduzido em 1."
        },
        {
          "id": "pugilist-welterweight",
          "name": "Peso Meio-Médio",
          "originalName": "Welterweight",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 103,
          "requiresProficiency": false,
          "requiresTier": null,
          "summary": "Permite lutar com Destreza em ataques desarmados/Pugilistas.",
          "description": "Você pode usar Destreza em vez de Força nas jogadas de ataque e dano de ataques desarmados ou armas Pugilistas."
        },
        {
          "id": "pugilist-superior-strike-pugilist",
          "name": "Golpe Superior: Pugilista",
          "originalName": "Superior Strike: Pugilist",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 103,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia Golpe Superior Pugilista e Flurry desarmado.",
          "description": "Você pode realizar o Golpe Superior correspondente ao atacar com arma Pugilista e pode realizar Flurry ao atacar desarmado."
        },
        {
          "id": "pugilist-blitzer",
          "name": "Atacante Relâmpago",
          "originalName": "Blitzer",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 104,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Ganha uma ação bônus ofensiva após lutar apenas como Pugilista.",
          "description": "Depois de realizar a ação Atacar usando apenas ataques desarmados ou armas Pugilistas, você pode realizar um ataque desarmado ou com arma Pugilista como ação bônus. Esse ataque pode ser substituído por uma tentativa de agarrar ou empurrar."
        },
        {
          "id": "pugilist-expert-pugilist",
          "name": "Pugilista Especialista",
          "originalName": "Expert Pugilist",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 104,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Aumenta novamente os dados de dano Pugilista.",
          "description": "Você pode usar 1d8 no lugar do dano normal dos ataques desarmados; armas Pugilistas aumentam esse dado para 1d10. Esses ataques contam como mágicos para superar resistências e imunidades a ataques e dano não mágicos."
        },
        {
          "id": "pugilist-finisher",
          "name": "Finalizador",
          "originalName": "Finisher",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 104,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "O terceiro acerto no mesmo alvo recebe dano adicional.",
          "description": "Na terceira vez no seu turno em que acertar a mesma criatura com ataque desarmado ou arma Pugilista, cause dano adicional igual ao modificador de habilidade usado no ataque."
        },
        {
          "id": "pugilist-got-em",
          "name": "Peguei!",
          "originalName": "Got ‘em",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 104,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Melhora ataques de oportunidade e permite agarrar no lugar deles.",
          "description": "Você tem vantagem em ataques de oportunidade realizados com ataques desarmados ou armas Pugilistas. Quando uma criatura provocar um ataque de oportunidade, você pode tentar agarrá-la em vez de atacar."
        },
        {
          "id": "pugilist-fair-fighter",
          "name": "Lutador Justo",
          "originalName": "Fair Fighter",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 105,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Pode desarmar um alvo atingido uma vez por turno.",
          "description": "Uma vez por turno, quando acerta com ataque desarmado ou arma Pugilista, pode forçar o alvo a uma salvaguarda de Força contra sua CD Marcial. Em falha, ele solta uma arma ou objeto que esteja segurando, à sua escolha, e o objeto cai no seu espaço."
        },
        {
          "id": "pugilist-master-pugilist",
          "name": "Mestre Pugilista",
          "originalName": "Master Pugilist",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 105,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Leva o dano desarmado/Pugilista ao estágio máximo.",
          "description": "Você pode usar 1d10 no lugar do dano normal dos ataques desarmados; armas Pugilistas aumentam esse dado para 1d12. Esses ataques contam como mágicos para superar resistências e imunidades a ataques e dano não mágicos."
        },
        {
          "id": "pugilist-suplex-king",
          "name": "Rei do Suplex",
          "originalName": "Suplex King",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 105,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Aumenta a CA contra um ataque e pode transformar o erro em um suplex.",
          "description": "Quando uma criatura de no máximo uma categoria de tamanho maior que você faz um ataque corpo a corpo contra você, use sua reação para somar seu bônus de proficiência à CA contra esse ataque. Se o ataque errar, você entra no espaço dela e a criatura cai no espaço que você deixou, ficando caída."
        },
        {
          "id": "pugilist-tough-mother",
          "name": "Casca-Grossa",
          "originalName": "Tough Mother",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 105,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Reduz dano físico enquanto luta sem armadura e sem armas convencionais.",
          "description": "Enquanto não empunhar armas que não sejam Pugilistas, não carregar escudo e não usar armadura, reduza todo dano de concussão, perfurante e cortante recebido em um valor igual ao seu bônus de proficiência."
        }
      ]
    },
    {
      "id": "reach",
      "name": "Alcance",
      "originalName": "Reach",
      "propertyDescription": "Armas de Alcance acrescentam 1,5 m ao alcance de ataques e ataques de oportunidade.",
      "weapons": [
        "Glaive",
        "Halberd",
        "Lance",
        "Pike"
      ],
      "techniques": [
        {
          "id": "reach-fortified-position",
          "name": "Posição Fortificada",
          "originalName": "Fortified Position",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 107,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Controla a área ao seu redor como terreno difícil para inimigos.",
          "description": "Enquanto empunha uma arma de Alcance e não está restringido nem incapacitado, a área a até 3 m de você é terreno difícil para criaturas à sua escolha."
        },
        {
          "id": "reach-pole-vaulter",
          "name": "Saltador com Haste",
          "originalName": "Pole Vaulter",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 107,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Amplia saltos e reduz dano de queda.",
          "description": "Enquanto empunha uma arma de Alcance, se mover ao menos 3 m a pé imediatamente antes de saltar, sua distância de salto triplica até o fim do turno. Ao cair enquanto empunha essa arma, subtraia até 15 m da queda para calcular o dano. Não recebe o benefício se estiver inconsciente."
        },
        {
          "id": "reach-superior-strike-reach",
          "name": "Golpe Superior: Alcance",
          "originalName": "Superior Strike: Reach",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 107,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Alcance.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Alcance."
        },
        {
          "id": "reach-constant-vigilance",
          "name": "Vigilância Constante",
          "originalName": "Constant Vigilance",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 107,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Ataca criaturas assim que entram no seu alcance.",
          "description": "Quando uma criatura entra no seu alcance enquanto você empunha uma arma de Alcance, use sua reação para atacá-la com essa arma."
        },
        {
          "id": "reach-lunging-strikes",
          "name": "Golpes de Avanço",
          "originalName": "Lunging Strikes",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 107,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Estende ainda mais o alcance durante sua ação Atacar.",
          "description": "Quando realiza a ação Atacar em seu turno, o alcance dos ataques que fizer com armas de Alcance aumenta em 1,5 m até o fim do turno."
        },
        {
          "id": "reach-crowd-control",
          "name": "Controle de Multidão",
          "originalName": "Crowd Control",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 107,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Reposiciona inimigos atingidos.",
          "description": "Quando acerta com uma arma de Alcance uma criatura de no máximo uma categoria de tamanho maior que você, pode movê-la horizontalmente até 3 m para um espaço desocupado."
        },
        {
          "id": "reach-pike-wall",
          "name": "Muralha de Piques",
          "originalName": "Pike Wall",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 107,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Forma uma postura defensiva com outro usuário de Alcance.",
          "description": "Enquanto empunha uma arma de Alcance e está ao alcance de um aliado que também empunha uma arma de Alcance com a qual é proficiente, você recebe +2 na CA. O efeito não se acumula."
        }
      ]
    },
    {
      "id": "scourge",
      "name": "Flagelo",
      "originalName": "Scourge",
      "propertyDescription": "Flagelo acrescenta 1,5 m ao alcance de ataques e ataques de oportunidade por meio de material flexível.",
      "weapons": [
        "Kusarigama",
        "Meteor Hammer",
        "Rope Dart",
        "Tetherhook",
        "Whip"
      ],
      "techniques": [
        {
          "id": "scourge-day-tripper",
          "name": "Tropeço Certeiro",
          "originalName": "Day Tripper",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 109,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Usa a ação bônus para derrubar o alvo após acertá-lo.",
          "description": "Quando acerta no seu turno uma criatura de no máximo uma categoria de tamanho maior com uma arma de Flagelo, pode usar imediatamente sua ação bônus. O alvo faz salvaguarda de Destreza; em falha, fica caído."
        },
        {
          "id": "scourge-get-over-here",
          "name": "Venha Até Aqui!",
          "originalName": "Get Over Here!",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 109,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Puxa um inimigo atingido para perto de você.",
          "description": "Quando acerta no seu turno uma criatura de no máximo uma categoria de tamanho maior com uma arma de Flagelo, pode usar imediatamente sua ação bônus. O alvo faz salvaguarda de Força; em falha, é puxado até 3 m na sua direção."
        },
        {
          "id": "scourge-superior-strike-scourge",
          "name": "Golpe Superior: Flagelo",
          "originalName": "Superior Strike: Scourge",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 109,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Flagelo.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Flagelo."
        },
        {
          "id": "scourge-disarming-strike",
          "name": "Golpe Desarmante",
          "originalName": "Disarming Strike",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 109,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Desarma e puxa o objeto solto para você.",
          "description": "Quando acerta uma criatura com uma arma de Flagelo, pode tentar desarmá-la. Ela faz salvaguarda de Força; em falha, solta um objeto empunhado à sua escolha e você puxa esse objeto até 3 m na sua direção."
        },
        {
          "id": "scourge-long-tether",
          "name": "Amarra Longa",
          "originalName": "Long Tether",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 109,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Aumenta temporariamente o alcance do Flagelo.",
          "description": "Quando realiza a ação Atacar no seu turno, o alcance dos seus ataques com armas de Flagelo aumenta em 1,5 m até o fim do turno."
        },
        {
          "id": "scourge-vicious-strikes",
          "name": "Golpes Viciosos",
          "originalName": "Vicious Strikes",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 109,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Eleva o dado de dano das armas de Flagelo para d10.",
          "description": "O dado de dano das suas armas de Flagelo passa a ser d10."
        },
        {
          "id": "scourge-wrap",
          "name": "Envolver",
          "originalName": "Wrap",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 109,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Usa a arma para agarrar e restringir à distância.",
          "description": "Ao realizar a ação Atacar com uma arma de Flagelo, pode abrir mão de um ataque para fazer um ataque corpo a corpo especial contra criatura ao alcance. O alvo faz salvaguarda de Destreza contra sua CD Marcial; em falha, fica agarrado e também restringido. O alvo ou uma criatura a até 1,5 m dele pode usar uma ação e passar em teste de Força contra sua CD Marcial para libertá-lo. Enquanto mantiver esse agarrão, você não pode atacar com a arma de Flagelo."
        }
      ]
    },
    {
      "id": "shield",
      "name": "Escudo",
      "originalName": "Shield",
      "propertyDescription": "Escudos não são armas, mas possuem sua própria árvore de Maestria Avançada e seu próprio Golpe Superior.",
      "weapons": [
        "Shield"
      ],
      "techniques": [
        {
          "id": "shield-shield-wall",
          "name": "Muralha de Escudos",
          "originalName": "Shield Wall",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 111,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Recebe CA adicional ao formar linha com outro escudo.",
          "description": "Enquanto empunha um escudo e está a até 1,5 m de um aliado que também empunha um escudo, sua CA aumenta em 2. O efeito não se acumula."
        },
        {
          "id": "shield-reinforcement",
          "name": "Reforço",
          "originalName": "Reinforcement",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 111,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Reduz dano de um ataque uma vez por rodada.",
          "description": "Enquanto empunha um escudo, quando sofre dano de um ataque, reduza esse dano em seu bônus de proficiência, sem gastar ação. Depois de usar Reforço, não pode usá-lo novamente até o início do seu próximo turno."
        },
        {
          "id": "shield-superior-strike-shield",
          "name": "Golpe Superior: Escudo",
          "originalName": "Superior Strike: Shield",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 111,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia o Golpe Superior de escudos.",
          "description": "Você pode realizar o Golpe Superior Escudo com qualquer escudo."
        },
        {
          "id": "shield-cover",
          "name": "Cobertura",
          "originalName": "Cover",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 111,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Concede temporariamente +2 CA a um aliado próximo.",
          "description": "Enquanto empunha um escudo e está a até 1,5 m de um aliado sem escudo, use uma ação bônus para conceder a ele +2 na CA até o início do seu próximo turno. O bônus termina antes se ele ficar a mais de 1,5 m de você ou se você ficar incapacitado."
        },
        {
          "id": "shield-numbing-collision",
          "name": "Colisão Entorpecente",
          "originalName": "Numbing Collision",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 111,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Um bloqueio pode desarmar e prejudicar o atacante.",
          "description": "Quando uma criatura erra você com um ataque corpo a corpo enquanto você empunha um escudo, use sua reação. Ela faz salvaguarda de Constituição; em falha, solta a arma usada no ataque aos seus pés. Até o fim do próximo turno dela, tem desvantagem nos ataques e não pode apanhar a arma enquanto você ocupar o espaço e não estiver inconsciente."
        },
        {
          "id": "shield-bulwark",
          "name": "Baluarte",
          "originalName": "Bulwark",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 111,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Aprimora a redução de dano do escudo e combina com Reforço.",
          "description": "Enquanto empunha um escudo, quando sofre dano de um ataque, reduza o dano em seu bônus de proficiência sem ação. Este efeito se acumula com Reforço, podendo totalizar duas vezes seu bônus de proficiência. Depois de usar Baluarte ou Reforço, não pode usar nenhum dos dois novamente até o início do próximo turno."
        },
        {
          "id": "shield-redirect-strike",
          "name": "Redirecionar Golpe",
          "originalName": "Redirect Strike",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 111,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Desvia um ataque e pode redirecioná-lo a outro alvo.",
          "description": "Enquanto empunha um escudo e é alvo de um ataque corpo a corpo de atacante visível, antes de saber se ele acertou, use sua reação para somar metade do bônus de proficiência à CA contra o ataque. Se ele errar, você pode fazê-lo usar a mesma jogada de ataque contra outro alvo que esteja a até 1,5 m de você e do atacante."
        }
      ]
    },
    {
      "id": "thrown",
      "name": "Arremesso",
      "originalName": "Thrown",
      "propertyDescription": "Armas de Arremesso podem ser lançadas como ataques à distância e, quando são armas corpo a corpo, usam o mesmo atributo que usariam no ataque corpo a corpo.",
      "weapons": [
        "Chakram",
        "Dagger",
        "Dart",
        "Handaxe",
        "Javelin",
        "Light Hammer",
        "Net",
        "Spear",
        "Shuriken",
        "Starknife",
        "Trident"
      ],
      "techniques": [
        {
          "id": "thrown-close-quarters-combat",
          "name": "Combate em Curta Distância",
          "originalName": "Close-Quarters Combat",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 113,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Remove a penalidade de ataques à distância em combate próximo.",
          "description": "Estar a até 1,5 m de uma criatura hostil não impõe desvantagem nas suas jogadas de ataque à distância feitas com armas de Arremesso."
        },
        {
          "id": "thrown-distant-striker",
          "name": "Atirador Distante",
          "originalName": "Distant Striker",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 113,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Dobra os alcances e ajuda a permanecer escondido ao errar.",
          "description": "Os alcances normal e longo dos ataques à distância que fizer com armas de Arremesso são dobrados. Além disso, se estiver escondido e errar um ataque à distância com uma arma de Arremesso, sua posição não é revelada."
        },
        {
          "id": "thrown-superior-strike-thrown",
          "name": "Golpe Superior: Arremesso",
          "originalName": "Superior Strike: Thrown",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 113,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas de Arremesso.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Arremesso."
        },
        {
          "id": "thrown-flexible-attacker",
          "name": "Atacante Flexível",
          "originalName": "Flexible Attacker",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 113,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Alterna corpo a corpo e arremesso com a mesma arma.",
          "description": "Se fizer um ataque corpo a corpo com uma arma de Arremesso no seu turno, pode fazer um ataque à distância com essa mesma arma como ação bônus no mesmo turno."
        },
        {
          "id": "thrown-focused-strike",
          "name": "Golpe Focado",
          "originalName": "Focused Strike",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 113,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Concede vantagem ao próximo ataque de Arremesso.",
          "description": "Como ação bônus, você se concentra e recebe vantagem na próxima jogada de ataque que fizer com uma arma de Arremesso neste turno."
        },
        {
          "id": "thrown-bullseye",
          "name": "Na Mosca",
          "originalName": "Bullseye",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 113,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Melhora críticos e adiciona um efeito debilitante em acertos críticos.",
          "description": "O limiar de crítico dos ataques à distância com armas de Arremesso é reduzido em 1. Ao conseguir um crítico contra uma criatura, escolha um efeito adicional: ela fica cega até o início do próximo turno; solta um objeto empunhado à sua escolha; ou tem o deslocamento reduzido pela metade até o fim do próximo turno."
        },
        {
          "id": "thrown-whirling-melee",
          "name": "Corpo a Corpo Giratório",
          "originalName": "Whirling Melee",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 113,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Ataques corpo a corpo preparam arremessos contra outros alvos.",
          "description": "Depois de realizar a ação Atacar e fazer um ataque corpo a corpo contra uma criatura, você tem vantagem em ataques com armas de Arremesso contra outras criaturas até o fim do turno."
        }
      ]
    },
    {
      "id": "versatile",
      "name": "Versátil",
      "originalName": "Versatile",
      "propertyDescription": "Armas Versáteis podem ser empunhadas com uma ou duas mãos, usando o valor de dano entre parênteses quando empunhadas com duas mãos.",
      "weapons": [
        "Battleaxe",
        "Kusarigama",
        "Longsword",
        "Nunchaku",
        "Quarterstaff",
        "Spear",
        "Trident",
        "War Pick",
        "Warhammer"
      ],
      "techniques": [
        {
          "id": "versatile-quick-parry",
          "name": "Aparada Rápida",
          "originalName": "Quick Parry",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 115,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Usa a arma Versátil para aparar um ataque.",
          "description": "Quando uma criatura faz um ataque corpo a corpo contra você enquanto empunha uma arma Versátil, use sua reação para adicionar seu bônus de proficiência à CA contra esse ataque, podendo transformá-lo em erro."
        },
        {
          "id": "versatile-weapon-focus",
          "name": "Foco de Arma",
          "originalName": "Weapon Focus",
          "tier": 1,
          "martialLevel": 2,
          "sourcePage": 115,
          "requiresProficiency": true,
          "requiresTier": null,
          "summary": "Transforma a arma em foco de conjuração e libera componentes somáticos.",
          "description": "Você pode usar uma arma Versátil como foco de conjuração e pode usar a mão que empunha essa arma para executar componentes somáticos de magias."
        },
        {
          "id": "versatile-superior-strike-versatile",
          "name": "Golpe Superior: Versátil",
          "originalName": "Superior Strike: Versatile",
          "tier": 2,
          "martialLevel": 6,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 1,
          "summary": "Desbloqueia os Golpes Superiores de armas Versáteis.",
          "description": "Você pode realizar o Golpe Superior correspondente da arma sempre que usar uma arma com a propriedade Versátil."
        },
        {
          "id": "versatile-heavy-striker",
          "name": "Golpeador Pesado",
          "originalName": "Heavy Striker",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Aumenta fortemente o dado de dano quando usa duas mãos.",
          "description": "Quando ataca com uma arma Versátil usando duas mãos, o dado de dano da arma aumenta em dois passos em vez de um, até o máximo de d12."
        },
        {
          "id": "versatile-shield-bash",
          "name": "Pancada de Escudo",
          "originalName": "Shield Bash",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Combina um ataque Versátil com uma pancada de escudo.",
          "description": "Quando realiza a ação Atacar, acerta com uma arma Versátil e empunha um escudo, pode usar uma ação bônus para atacar o mesmo alvo com o escudo. Em um acerto, causa 1d4 de concussão e o alvo faz salvaguarda de Força ou fica caído. Criaturas mais de uma categoria de tamanho maiores que você têm sucesso automático."
        },
        {
          "id": "versatile-swift-striker",
          "name": "Golpeador Veloz",
          "originalName": "Swift Striker",
          "tier": 3,
          "martialLevel": 10,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 2,
          "summary": "Ganha um ataque bônus ao lutar com a arma em uma mão.",
          "description": "Se realiza a ação Atacar no seu turno e ataca apenas com uma arma Versátil empunhada em uma mão, pode atacar novamente com ela, ainda em uma mão, como ação bônus. Não adicione o modificador de habilidade ao dano, salvo se ele for negativo."
        },
        {
          "id": "versatile-dual-maneuver",
          "name": "Manobra Dupla",
          "originalName": "Dual Maneuver",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Usa a mão livre para agarrar durante o ataque.",
          "description": "Quando realiza a ação Atacar e acerta com uma arma Versátil empunhada em uma mão enquanto a outra está livre, pode tentar agarrar o alvo como parte da mesma ação."
        },
        {
          "id": "versatile-guard",
          "name": "Guarda",
          "originalName": "Guard",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Adota uma guarda defensiva com escudo e arma Versátil.",
          "description": "Enquanto empunha ao mesmo tempo um escudo e uma arma Versátil, use uma ação bônus para receber +1 na CA até o início do próximo turno; ataques de oportunidade contra você têm desvantagem até então."
        },
        {
          "id": "versatile-very-heavy-striker",
          "name": "Golpeador Muito Pesado",
          "originalName": "Very Heavy Striker",
          "tier": 4,
          "martialLevel": 14,
          "sourcePage": 115,
          "requiresProficiency": false,
          "requiresTier": 3,
          "summary": "Aumenta drasticamente a chance de crítico usando duas mãos.",
          "description": "Quando ataca com uma arma Versátil empunhada com duas mãos, o limiar de crítico é reduzido em 2."
        }
      ]
    }
  ],
  "superiorStrikes": [
    {
      "id": "battery-strike",
      "name": "Golpe de Bateria",
      "originalName": "Battery Strike",
      "sourcePage": 88,
      "description": "Arremesse várias armas em rápida sucessão. Faça uma quantidade de ataques à distância igual a 1 + metade do seu bônus de proficiência (arredondado para baixo), cada um contra um alvo diferente dentro do alcance normal. Você precisa ter consigo armas disponíveis que possuam este Golpe Superior."
    },
    {
      "id": "flurry",
      "name": "Rajada",
      "originalName": "Flurry",
      "sourcePage": 88,
      "description": "Faça uma quantidade de ataques desarmados igual a 1 + metade do seu bônus de proficiência (arredondado para baixo), cada um contra um alvo diferente ao seu alcance. Depois, recebe +2 na CA até o início do seu próximo turno."
    },
    {
      "id": "hail-of-ammunition",
      "name": "Chuva de Munição",
      "originalName": "Hail of Ammunition",
      "sourcePage": 88,
      "description": "Escolha um ponto dentro do alcance normal da arma. Criaturas em uma esfera de 3 m de raio fazem salvaguarda de Destreza; em falha sofrem uma quantidade de d6 de dano perfurante igual ao seu bônus de proficiência, ou metade em sucesso. Exige ao menos 10 peças de munição disponíveis."
    },
    {
      "id": "hamstring",
      "name": "Corte de Tendão",
      "originalName": "Hamstring",
      "sourcePage": 88,
      "description": "Faça um ataque contra criatura ao alcance. Em um acerto, aplique os efeitos normais do ataque e cause dano extra igual ao bônus de proficiência. Até o fim do próximo turno do alvo, a CA dele é reduzida pelo modificador de Destreza (mínimo 0) e o deslocamento é reduzido em 1,5 m × seu bônus de proficiência, até o mínimo de 0."
    },
    {
      "id": "piercing-shot",
      "name": "Tiro Perfurante",
      "originalName": "Piercing Shot",
      "sourcePage": 89,
      "description": "Dispare em linha reta até o alcance normal da arma. Cada criatura cujo espaço for atravessado faz salvaguarda de Destreza; em falha sofre uma quantidade de d6 de dano perfurante igual ao seu bônus de proficiência, ou metade em sucesso. O disparo para ao atravessar uma criatura Enorme ou maior ou um objeto com mais de 30 cm de espessura ou CA 17 ou maior."
    },
    {
      "id": "reeling-blow",
      "name": "Golpe Estonteante",
      "originalName": "Reeling Blow",
      "sourcePage": 89,
      "description": "Faça um ataque contra criatura ao alcance. Em um acerto, além dos efeitos normais, causa dano extra igual ao bônus de proficiência. Até o fim do próximo turno do alvo, ele tem desvantagem em ataques, testes e salvaguardas de Destreza ou Inteligência, não pode usar reações e tem desvantagem em salvaguardas de Constituição para manter concentração causadas por esse ataque."
    },
    {
      "id": "shield-slam",
      "name": "Impacto de Escudo",
      "originalName": "Shield Slam",
      "sourcePage": 89,
      "description": "Faça um teste de Força (Atletismo) contestado por Força (Atletismo) ou Destreza (Acrobacia) do alvo. Se vencer, ele sofre uma quantidade de d8 de dano de concussão igual ao seu bônus de proficiência e ataques corpo a corpo contra ele têm vantagem até o fim do seu próximo turno."
    },
    {
      "id": "shockwave",
      "name": "Onda de Choque",
      "originalName": "Shockwave",
      "sourcePage": 89,
      "description": "Golpeie o chão. Cada criatura a até 3 m faz salvaguarda de Força; em falha sofre uma quantidade de d6 de concussão igual ao seu bônus de proficiência e é empurrada 3 m diretamente para longe de você."
    },
    {
      "id": "skewer",
      "name": "Empalar",
      "originalName": "Skewer",
      "sourcePage": 89,
      "description": "Faça um ataque contra criatura ao alcance. Em um acerto, além dos efeitos normais, ela fica agarrada por você. O agarrão termina se você atacar novamente com a arma ou soltá-la. Quando o agarrão termina, o alvo sofre uma quantidade de d8 de dano perfurante igual ao seu bônus de proficiência."
    },
    {
      "id": "trip",
      "name": "Rasteira",
      "originalName": "Trip",
      "sourcePage": 89,
      "description": "Cada criatura em pé a até 3 m faz salvaguarda de Destreza; em falha sofre uma quantidade de d4 de concussão igual ao seu bônus de proficiência e fica caída."
    },
    {
      "id": "whirling-strike",
      "name": "Golpe Giratório",
      "originalName": "Whirling Strike",
      "sourcePage": 89,
      "description": "Cada criatura ao alcance da sua arma faz salvaguarda de Destreza. Em falha sofre uma quantidade de d6 do tipo de dano da arma igual ao seu bônus de proficiência; em sucesso, metade. Em qualquer caso, a criatura não pode fazer ataques de oportunidade contra você até o fim do turno."
    }
  ],
  "weaponSuperiorStrikeMap": {
    "Claw": "skewer",
    "Club": "reeling-blow",
    "Dagger": "battery-strike",
    "Greatclub": "shockwave",
    "Handaxe": "battery-strike",
    "Javelin": "battery-strike",
    "Knuckle Duster": "flurry",
    "Light Hammer": "battery-strike",
    "Mace": "reeling-blow",
    "Quarterstaff": "reeling-blow",
    "Sickle": "skewer",
    "Spear": "skewer",
    "Spiked Cestus": "flurry",
    "Spiked Knuckle Duster": "flurry",
    "War Crescent": "whirling-strike",
    "Light Crossbow": "piercing-shot",
    "Dart": "battery-strike",
    "Shortbow": "hail-of-ammunition",
    "Sling": "hail-of-ammunition",
    "Slingshot": "hail-of-ammunition",
    "Light Tommybow": "hail-of-ammunition",
    "Battleaxe": "whirling-strike",
    "Chakram": "battery-strike",
    "Flail": "reeling-blow",
    "Glaive": "whirling-strike",
    "Greataxe": "whirling-strike",
    "Greatsword": "shockwave",
    "Halberd": "hamstring",
    "Kusarigama": "trip",
    "Lance": "skewer",
    "Longsword": "hamstring",
    "Maul": "shockwave",
    "Meteor Hammer": "whirling-strike",
    "Morningstar": "shockwave",
    "Nunchaku": "whirling-strike",
    "Pike": "skewer",
    "Rapier": "skewer",
    "Rope Dart": "trip",
    "Sai": "skewer",
    "Scimitar": "hamstring",
    "Shortsword": "skewer",
    "Starknife": "battery-strike",
    "Tessen": "whirling-strike",
    "Tetherhook": "trip",
    "Tonfa": "reeling-blow",
    "Trident": "piercing-shot",
    "Twinblade": "whirling-strike",
    "War Pick": "skewer",
    "Warhammer": "shockwave",
    "Whip": "trip",
    "Blowgun": "piercing-shot",
    "Blunderbuss": "piercing-shot",
    "Hand Crossbow": "piercing-shot",
    "Heavy Crossbow": "piercing-shot",
    "Longbow": "hail-of-ammunition",
    "Musket": "piercing-shot",
    "Net": "trip",
    "Ōdzutsu": "piercing-shot",
    "Pistol": "piercing-shot",
    "Revolver": "piercing-shot",
    "Rifle": "piercing-shot",
    "Shuriken": "battery-strike",
    "Hand Tommybow": "hail-of-ammunition",
    "Heavy Tommybow": "hail-of-ammunition",
    "Shield": "shield-slam",
    "Unarmed Strike": "flurry"
  },
  "counts": {
    "trees": 12,
    "techniques": 94,
    "superiorStrikes": 11,
    "progressionRows": 10
  }
};
  global.GRIMORIO_ADVANCED_WEAPON_MASTERIES=Object.freeze(data);
})(window);
