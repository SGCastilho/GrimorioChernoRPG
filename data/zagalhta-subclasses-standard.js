'use strict';

(function () {
  const subclasses = [
  {
    "id": "zagalhta-barbarian-cosmic-madness",
    "classId": "barbarian",
    "name": "Caminho da Loucura Cósmica",
    "originalName": "Path of Cosmic Madness",
    "aliases": [
      "Path of Cosmic Madness"
    ],
    "desc": "Bárbaros que encararam o vazio e foram marcados pela força das estrelas. A Fúria dobra o espaço ao redor e produz efeitos cósmicos imprevisíveis que se tornam cada vez mais extremos.",
    "sourcePage": 139,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "139–140",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "OPORTUNIDADE ASTRAL",
        "level": 3,
        "page": 139,
        "text": "Ao obter 20 natural em ataque ou salvaguarda, pode rolar imediatamente na tabela de Efeitos do Frenesi Cósmico como se tivesse entrado em Fúria. O efeito dura 1 minuto ou até você entrar em Fúria; durante esse tempo exige concentração.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FRENESI CÓSMICO",
        "level": 3,
        "page": 139,
        "text": "Sempre que entra em Fúria, role 1d4 na tabela de Efeitos do Frenesi Cósmico. A CD de qualquer efeito é 8 + Constituição + proficiência. O dado passa a d8 no 6º nível, d12 no 10º e d20 no 14º; a CD também aumenta em +1 em cada um desses níveis.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "DOBRA CORTANTE",
        "level": 6,
        "page": 139,
        "text": "Pode fazer um ataque corpo a corpo contra alvo a até 6 m × proficiência. Para isso, gaste 1 Carga Arcana, teleporte para espaço desocupado adjacente antes do ataque e some 1d10 tanto ao ataque quanto ao dano.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "IMPULSO CÓSMICO FOCADO",
        "level": 10,
        "page": 139,
        "text": "Ao rolar na tabela, role dois dados e escolha o resultado. Se os dois forem iguais, ignore-os e escolha qualquer efeito da tabela.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FRENESI CONCUSSIVO",
        "level": 14,
        "page": 139,
        "text": "Enquanto estiver em Fúria, no início de cada turno pode rolar novamente na tabela e substituir o efeito atual pelo novo. Esta rolagem específica não usa dois dados.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Efeitos do Frenesi Cósmico",
        "page": 139,
        "columns": [
          {
            "key": "result",
            "label": "Resultado"
          },
          {
            "key": "name",
            "label": "Efeito"
          },
          {
            "key": "effect",
            "label": "Regra"
          }
        ],
        "rows": [
          {
            "result": 1,
            "name": "Corte dos Céus",
            "effect": "Cada criatura que você escolher e puder ver a até 9 m recebe voo laborioso igual ao deslocamento base, funcionando como voo pairado quando usado. O efeito termina para cada criatura no fim do primeiro turno dela após sua Fúria terminar."
          },
          {
            "result": 2,
            "name": "Arma Cósmica",
            "effect": "Durante a Fúria, seus ataques contam como mágicos e causam um dado de dano de arma adicional."
          },
          {
            "result": 3,
            "name": "Puxão de Portal",
            "effect": "Durante a Fúria, como ação bônus a cada turno, escolha criatura visível a até 4,5 m × proficiência. Ela faz salvaguarda de Carisma; em falha é teleportada para espaço adjacente que comporte seu tamanho, ou para o espaço disponível mais próximo."
          },
          {
            "result": 4,
            "name": "Frenesi Cósmico Indomado",
            "effect": "Durante a Fúria você também fica enfurecido e considera todas as criaturas hostis. No início de cada turno faça salvaguarda de Sabedoria; em sucesso o efeito termina e role outro efeito para substituí-lo."
          },
          {
            "result": 5,
            "name": "Teleporte Relâmpago",
            "effect": "No início de cada turno em Fúria, se não estiver incapacitado, teleporte até 9 m para espaço visível e desocupado. Pode chegar caído ou em pé e isso não consome movimento."
          },
          {
            "result": 6,
            "name": "Bomba de Radiação",
            "effect": "Explosão atinge criaturas escolhidas a até 6 m. Cada alvo faz salvaguarda de Constituição; em falha sofre uma quantidade de d6 de dano radiante igual à metade do seu nível de Bárbaro e fica cego até o fim de seu próximo turno."
          },
          {
            "result": 7,
            "name": "Pele de Cristal",
            "effect": "Até a Fúria terminar, sua CA aumenta pelo bônus à CD do Frenesi Cósmico: +1 no 6º, +2 no 10º e +3 no 14º nível."
          },
          {
            "result": 8,
            "name": "Frequência da Violência",
            "effect": "Criatura que inicia o turno a até 3 m de você sofre 2d6 de dano de força."
          },
          {
            "result": 9,
            "name": "Fúria Maior",
            "effect": "Durante a Fúria, sempre que realiza a ação Atacar faz um ataque de arma adicional além do normal; esse ataque tem vantagem."
          },
          {
            "result": 10,
            "name": "Escala Cósmica",
            "effect": "Durante a Fúria, você é aumentado como pelo efeito Aumentar de aumentar/reduzir, tratado como conjurado num nível igual à metade do nível de Bárbaro, máximo 9º."
          },
          {
            "result": 11,
            "name": "Campo Estelar",
            "effect": "Luz estelar e névoa arco-íris ocupam uma área de 6 m ao seu redor. Você não é afetado; outras criaturas dentro dela, ou mirando através dela, são tratadas como cegas. Termina com a Fúria."
          },
          {
            "result": 12,
            "name": "Arsenal Galáctico",
            "effect": "Durante a Fúria pode empunhar armas de Duas Mãos ou Versáteis em uma mão mantendo os benefícios de duas mãos. Como ação bônus cria cópia astral de uma arma que possui, com Arremesso 9/27 m e dano apenas de força; deve atacá-la imediatamente e ela desaparece depois."
          },
          {
            "result": 13,
            "name": "Mudança de Gravidade Zero",
            "effect": "Esfera de 15 m de raio centrada em você torna-se ambiente de gravidade zero; você recebe aceleração 0-G igual ao deslocamento base. A esfera acompanha você e dura até a Fúria terminar."
          },
          {
            "result": 14,
            "name": "Escudo de Gravidade Invertida",
            "effect": "Até a Fúria terminar, você tem resistência a todo dano."
          },
          {
            "result": 15,
            "name": "Fúria dos Titãs Celestiais",
            "effect": "Durante a Fúria, Agarra, Empurra e causa dano como se fosse quatro categorias de tamanho maior. O primeiro ataque que acertar em cada turno causa dano de força adicional igual ao nível de Bárbaro."
          },
          {
            "result": 16,
            "name": "Mão do Julgamento",
            "effect": "Produz os efeitos de mão suprema sem concentração enquanto durar sua Fúria, como se conjurada num nível igual à metade do seu nível de Bárbaro, máximo 9º."
          },
          {
            "result": 17,
            "name": "Arremesso Meteórico",
            "effect": "Como ação em Fúria, abra portal e lance meteoro num ponto visível a até 18 m. Criaturas em esfera de 9 m fazem salvaguarda de Destreza; falha: 6d6 + nível de Bárbaro de fogo; sucesso: metade. Conta como atacar para sustentar Fúria se houver ao menos uma criatura na área."
          },
          {
            "result": 18,
            "name": "Guardião Cósmico",
            "effect": "Ser alienígena espectral cerca você durante a Fúria. Ataques contra você não podem ter vantagem, você recebe visão verdadeira a 9 m e, quando é atingido, pode usar reação para o espectro causar 10 de dano psíquico ao atacante."
          },
          {
            "result": 19,
            "name": "Loucura do Reino",
            "effect": "Receba PV temporários iguais ao dobro de seu nível total. Sua Fúria só termina se você permitir, mesmo após a duração normal. No início de cada turno, enquanto restar ao menos 1 desses PV, eles aumentam em 10. Desaparecem ao fim da Fúria ou ao rolar novamente na tabela."
          },
          {
            "result": 20,
            "name": "Intervenção Cósmica",
            "effect": "O primeiro ataque que acertar durante a Fúria é automaticamente crítico e concede PV temporários iguais ao dano causado. O dano ignora resistências e imunidades, mas não Limiares ou reduções. Os PV desaparecem ao terminar a Fúria ou rolar novamente na tabela."
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-bard-simulation-savant",
    "classId": "bard",
    "name": "Prodígio da Simulação",
    "originalName": "Simulation Savant",
    "aliases": [
      "Simulation Savant"
    ],
    "desc": "Especialista em previsão que cria hologramas e simulações realistas para reduzir decisões e interações às formas mais eficientes, fornecendo dados táticos em tempo real aos aliados.",
    "sourcePage": 141,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "141",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "ORDEM EMBUTIDA",
        "level": 3,
        "page": 141,
        "text": "Ao conceder Inspiração de Bardo, role 1d6 na tabela Ordem Embutida. A criatura recebe o benefício correspondente enquanto carregar sua Inspiração.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "COMPARTILHAR VISÃO",
        "level": 3,
        "page": 141,
        "text": "Você aprende a magia registro de lembrança como magia de Bardo sem contar contra Magias Conhecidas. Pode conjurá-la uma vez por Descanso sem espaço, em nível igual à sua proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TÁTICAS DE DELIBERAÇÃO",
        "level": 6,
        "page": 141,
        "text": "Quando criatura faz salvaguarda contra sua magia enquanto está ao alcance corpo a corpo de um aliado seu apto a agir, ela faz a salvaguarda com desvantagem. Da mesma forma, seus ataques de magia contra criatura nessa condição têm vantagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SIMULAÇÃO PESSOAL",
        "level": 6,
        "page": 141,
        "text": "Você possui usos por Descanso Longo iguais ao nível de Bardo. Pode produzir sem espaço disfarçar-se (1 uso), imagem maior (3 usos) ou semelhança (5 usos), gastando usos iguais ao nível da magia.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "UM PARA TODOS",
        "level": 14,
        "page": 141,
        "text": "No primeiro turno de cada combate, produz imagem espelhada como efeito não mágico. O efeito não termina por ficar sem duplicatas e, no início de cada turno, recupera duas duplicatas perdidas, até o máximo de três.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ORDENS SIMPLIFICADAS",
        "level": 14,
        "page": 141,
        "text": "Para Ordem Embutida, role 2d6 e escolha o resultado. Se forem iguais, conceda Inspiração de Bardo adicional a outra criatura ao alcance sem gastar uso extra; ela recebe a mesma Ordem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Tabela de Ordem Embutida",
        "page": 141,
        "columns": [
          {
            "key": "d6",
            "label": "d6"
          },
          {
            "key": "name",
            "label": "Ordem"
          },
          {
            "key": "effect",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "d6": 1,
            "name": "Sinais de Alerta",
            "effect": "Ataques, testes e salvaguardas recebem +1."
          },
          {
            "d6": 2,
            "name": "Bônus Rolante",
            "effect": "No turno em que usa a Inspiração de Bardo, o resultado do dado torna-se bônus para todas as rolagens do mesmo tipo até o início do próximo turno."
          },
          {
            "d6": 3,
            "name": "Véu de Energia",
            "effect": "Recebe 2d10 PV temporários; se iniciar turno sem PV temporários, ganha 1d10; caso ainda os tenha, eles aumentam em 5."
          },
          {
            "d6": 4,
            "name": "Compartilhamento de Competência",
            "effect": "Recebe bônus em testes ou salvaguardas em que não seja proficiente igual à metade de sua proficiência."
          },
          {
            "d6": 5,
            "name": "Compreensão Mágica",
            "effect": "Faz salvaguardas contra efeitos mágicos com vantagem. Se gastar sua Inspiração numa dessas salvaguardas e obtiver sucesso, fica completamente sem sofrer dano ou efeitos daquela magia."
          },
          {
            "d6": 6,
            "name": "Simulação Avançada",
            "effect": "A Inspiração concede quase-previsão: uma vez por turno pode usar o dado sem gastá-lo. Se usar uma segunda vez no mesmo turno, gasta normalmente."
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-bard-stellar-idol",
    "classId": "bard",
    "name": "Ídolo Estelar",
    "originalName": "Stellar Idol",
    "aliases": [
      "Stellar Idol"
    ],
    "desc": "Artista pop criado para viajar e se apresentar entre as estrelas. Sua música ressoa especialmente com unidades frame e converte Inspiração de Bardo em sincronia, comando e poder mecânico.",
    "sourcePage": 142,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "142",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PERFORMANCE EM CAMADAS",
        "level": 3,
        "page": 142,
        "text": "Ao conceder Inspiração de Bardo, pode conjurar como parte da mesma ação uma magia de 1 ação ou 1 ação bônus, tendo somente aquela criatura como alvo, mesmo fora do alcance normal. Se exigir concentração, você não pode perdê-la enquanto o alvo carregar sua Inspiração e pode mantê-la junto de outros efeitos de concentração.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VOZ DAS ESTRELAS",
        "level": 3,
        "page": 142,
        "text": "Magias de Astromancia contam como magias de Bardo para você. Enquanto puder falar, sua própria voz cantada pode servir como instrumento para performance e magia de Bardo.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ESTREIA ESTELAR",
        "level": 6,
        "page": 142,
        "text": "Uma vez por Descanso, produz conjurar eco de frame sem espaço, como usando seu maior Espaço de Bardo mesmo que abaixo do nível-base. Pode imediatamente conceder Inspiração ao eco; enquanto ele a carregar, você não perde concentração na magia. O eco recebe PV temporários iguais ao dobro do nível de Bardo.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MEDLEY DE COMANDO",
        "level": 14,
        "page": 142,
        "text": "No seu turno, como ação bônus, ordene uma unidade frame conjurada por Estreia Estelar a realizar qualquer ação, inclusive Multiataque, e mover até metade do deslocamento antes ou depois. Pode fazer o mesmo com unidades frame reais e voluntárias dentro do alcance de sua Inspiração.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-cleric-cosmos-domain",
    "classId": "cleric",
    "name": "Domínio do Cosmos",
    "originalName": "Cosmos Domain",
    "aliases": [
      "Cosmos Domain"
    ],
    "desc": "Guardião, explorador e missionário astral que encontra poder espiritual nos frágeis fios que conectam a vida entre mundos e transforma ambientes de baixa gravidade em território sagrado.",
    "sourcePage": 143,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "143–144",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS DA ERA ESPACIAL",
        "level": 1,
        "page": 143,
        "text": "Pode prender a respiração por até 1 hora e falar sem perder oxigênio; recebe aceleração 0-G igual ao dobro do deslocamento base; resistência a radiante; e pode concentrar-se em zona antigravidade junto de outra magia, usando a mesma verificação para ambas.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CANALIZAR DIVINDADE: BOLHA GRAVITACIONAL",
        "level": 2,
        "page": 143,
        "text": "Como ação bônus, gaste Canalizar Divindade e crie por 10 minutos uma esfera de atmosfera controlada de 4,5 m centrada em você. Ela neutraliza efeitos nocivos no ar, gera ar respirável e expulsa névoa/partículas. Quedas superiores a 3 m dentro dela tratam o espaço como baixa gravidade. Salvaguardas contra efeitos de área originados fora da esfera são feitas com vantagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AJUSTE ORBITAL",
        "level": 2,
        "page": 143,
        "text": "Ao conjurar magia enquanto você ou o alvo estiver em baixa ou zero gravidade, dobre o alcance, salvo se a magia já possuir um efeito que o amplie nesse ambiente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PASSAGEM CÓSMICA",
        "level": 6,
        "page": 143,
        "text": "Ao conjurar magia de Clérigo que gaste espaço, pode teleportar para espaço desocupado visível a até 3 m × nível do espaço, antes ou depois do efeito da magia.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CONJURAÇÃO POTENTE",
        "level": 8,
        "page": 143,
        "text": "Some seu modificador de Sabedoria ao dano de qualquer truque de Clérigo que conjurar.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ANJO ASTRAL",
        "level": 17,
        "page": 143,
        "text": "Em ambiente de baixa ou zero gravidade, manifesta asas espirituais e recebe: resistência a contundente, perfurante e cortante; dois ataques com a ação Atacar, podendo substituir um por magia de 1 ação; +1d10 radiante em ataques de arma; espaços de 5º nível ou menores contam como um nível acima ao conjurar; aceleração 0-G igual a 3× deslocamento base; e pode sobreviver no vácuo sem ar, embora ainda possa se afogar.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio do Cosmos",
        "page": 143,
        "columns": [
          {
            "key": "cleric",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "cleric": "1º",
            "spells": "Zona Antigravidade; Mísseis Mágicos"
          },
          {
            "cleric": "3º",
            "spells": "Loucura Vinculante; Raio Lunar"
          },
          {
            "cleric": "5º",
            "spells": "Arma Astral; Flecha da Mancha Solar"
          },
          {
            "cleric": "7º",
            "spells": "Adaptação Arbitrária; Transmissão"
          },
          {
            "cleric": "9º",
            "spells": "Despertar; Telecinese"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-cleric-impossibility-domain",
    "classId": "cleric",
    "name": "Domínio da Impossibilidade",
    "originalName": "Impossibility Domain",
    "aliases": [
      "Impossibility Domain"
    ],
    "desc": "Clérigos ligados sobretudo a Setanta, capazes de realizar proezas ilógicas e improváveis pela força bruta da vontade, muitas vezes antes mesmo de compreenderem a origem divina de seus poderes.",
    "sourcePage": 144,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "144",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "REVERSÃO DO PIOR CASO",
        "level": 1,
        "page": 144,
        "text": "Ao rolar 1 no d20, trate o resultado como 10. Se era ataque e o novo resultado acerta, o ataque é considerado crítico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CANALIZAR DIVINDADE: VONTADE PURA",
        "level": 2,
        "page": 144,
        "text": "Gaste Canalizar Divindade para conjurar qualquer magia como se fosse uma magia de Clérigo preparada. Ainda precisa gastar espaço apropriado e componentes materiais com custo, mas o Espaço usado é tratado como um nível acima, máximo 9º.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CANALIZAR DIVINDADE: IMPULSO ASCENDENTE",
        "level": 6,
        "page": 144,
        "text": "Ao fazer ataque, teste ou salvaguarda, gaste Canalizar Divindade para somar sua proficiência ao resultado; ou role novos d20 até obter um resultado maior que todos os d20 já rolados e use esse novo resultado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ARMA DE EXPLORAÇÃO",
        "level": 8,
        "page": 144,
        "text": "Na primeira vez que acerta ataque de arma em cada turno, causa +1d8 de força; no 14º nível o dano extra se aplica a todos os seus ataques de arma. Se já viu o alvo sofrer um tipo de dano ao qual é vulnerável, o dano extra desta característica pode se tornar esse tipo naquele ataque.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "IMPROVISAÇÃO SAGRADA",
        "level": 17,
        "page": 144,
        "text": "Se sua Intervenção Divina falhar, pode em vez disso conjurar uma magia de Clérigo preparada com tempo de 1 ação como se usasse espaço de 9º nível, sem gastar espaço nem componentes; isso conta como intervenção bem-sucedida e impede novo uso por sete amanheceres. Além disso, Vontade Pura pode conjurar qualquer magia, não só magias de Clérigo preparadas.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Impossibilidade",
        "page": 144,
        "columns": [
          {
            "key": "cleric",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "cleric": "1º",
            "spells": "Favor Divino; Sorte do Chacal"
          },
          {
            "cleric": "3º",
            "spells": "Resiliência Cármica; Marte Estridente"
          },
          {
            "cleric": "5º",
            "spells": "Arma Eidomântica; Caminho para a Vitória"
          },
          {
            "cleric": "7º",
            "spells": "Gigaexplosão; Ira da Valquíria"
          },
          {
            "cleric": "9º",
            "spells": "Conjurar Eco de Frame; Reencarnação"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-cleric-technology-domain",
    "classId": "cleric",
    "name": "Domínio da Tecnologia",
    "originalName": "Technology Domain",
    "aliases": [
      "Technology Domain"
    ],
    "desc": "Clérigo que canaliza o avanço tecnológico coletivo como manifestação divina, usando armaduras, equipamentos e armas de estética futurista para proteger o progresso e impedir seu abuso desproporcional.",
    "sourcePage": 145,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "145–146",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PROFICIÊNCIAS DE TECNOLOGISTA",
        "level": 1,
        "page": 145,
        "text": "Você é proficiente com Ferramentas de Funileiro e Ferramentas de Reparo. Conhece designar constructos, sempre a tem preparada e ela não conta contra o número de magias preparadas.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CANALIZAR DIVINDADE: MILAGRE METALÚRGICO",
        "level": 2,
        "page": 145,
        "text": "Como ação bônus, escolha criaturas a até 9 m em quantidade igual à proficiência. Por 1 minuto cada uma recebe 2d6 PV temporários e o mesmo aprimoramento escolhido: Propulsor (+3 m aos deslocamentos); Aprimoramento (+1d4 em ataques/testes de Força ou Destreza); Núcleo de Energia (uma vez, role segundo d20 e use o maior; enquanto não usado, ataques contam como mágicos); ou Blindagem (+2 CA se não usa escudo). Termina se você cair a 0 PV.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EXOARMADURA",
        "level": 6,
        "page": 145,
        "text": "Como ação, crie por 10 minutos uma armadura tecnológica, uma vez por Descanso ou novamente gastando Canalizar Divindade. Pode substituir sua CA por 10 + Destreza ou Constituição + Sabedoria, preservando efeitos da armadura original; ao atacar pode gastar espaço para somar seu nível ao ataque e causar +1d6 por nível se acertar; respira normalmente em ambientes nocivos; reduz cada dano contundente/perfurante/cortante pela proficiência; recebe Limiar de Dano igual à metade do nível de Clérigo; voo laborioso igual ao deslocamento base e aceleração 0-G igual ao dobro.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ATAQUE DE RECUPERAÇÃO",
        "level": 8,
        "page": 145,
        "text": "O primeiro ataque de cada turno pode tratar a arma como Arremesso 9/27 m; se arremessada, ela retorna imediatamente salvo impedimento. Esse ataque causa +1d8 de fogo, aumentando para +2d8 no 14º nível.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EXOAPRIMORAMENTO",
        "level": 17,
        "page": 145,
        "text": "Ao criar Exoarmadura, escolha um Exoaprimoramento da tabela. Como ação bônus, pode gastar espaço de 3º nível ou maior para acrescentar outro imediatamente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SINTONIA EXTRA",
        "level": 17,
        "page": 146,
        "text": "Você pode sintonizar-se com um quarto item mágico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias do Domínio da Tecnologia",
        "page": 145,
        "columns": [
          {
            "key": "cleric",
            "label": "Nível de Clérigo"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "cleric": "1º",
            "spells": "Inimigo Dedicado; Arma Momentosa"
          },
          {
            "cleric": "3º",
            "spells": "Lucubração Arcana; Esquentar Metal"
          },
          {
            "cleric": "5º",
            "spells": "Voo; Lentidão"
          },
          {
            "cleric": "7º",
            "spells": "Arco Elétrico; Portal Simpático"
          },
          {
            "cleric": "9º",
            "spells": "Passa-Parede; Canhão Escrito"
          }
        ]
      },
      {
        "title": "Exoaprimoramentos",
        "page": 146,
        "columns": [
          {
            "key": "name",
            "label": "Exoaprimoramento"
          },
          {
            "key": "effect",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "name": "Sensores de Drone",
            "effect": "Percepção passiva +5 e visão às cegas a 9 m."
          },
          {
            "name": "Casco Aprimorado",
            "effect": "Uma vez por uso de Exoarmadura, recebe 10d10 PV temporários."
          },
          {
            "name": "Propulsores Aprimorados",
            "effect": "Voo igual a 2× deslocamento base e aceleração 0-G igual a 3× deslocamento base."
          },
          {
            "name": "Ataques Guiados",
            "effect": "Ao realizar a ação Atacar, pode atacar três vezes em vez de uma."
          },
          {
            "name": "Escudo de Fase",
            "effect": "Sofre metade do dano do primeiro ataque que o atinge em cada turno."
          },
          {
            "name": "Canhão Radiante",
            "effect": "Pode substituir ataques da ação Atacar por ataques de magia à distância a 18 m que causam 3d8 radiante; também pode fazer um desses ataques como ação bônus."
          },
          {
            "name": "Surto do Reator",
            "effect": "Ataques, testes e CD das magias de Clérigo recebem +2."
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-druid-entropy",
    "classId": "druid",
    "name": "Entropia",
    "originalName": "Entropy",
    "aliases": [
      "Entropy"
    ],
    "desc": "Druida conectado ao vazio e à fragilidade da vida fora de um ecossistema, que drena energia, reduz movimento e redistribui o que absorve para criar um horizonte entropicamente degradado.",
    "sourcePage": 147,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "147",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "FATOR CONGELANTE",
        "level": 2,
        "page": 147,
        "text": "Você possui Pontos de Fator iguais à proficiência, recuperados em Descanso. Ao acertar ataque enquanto em Forma Selvagem ou causar dano com magia, gaste um ou mais: o primeiro dano torna-se frio e recebe +1d6 de frio por ponto (distribua os dados entre alvos se houver vários); e o alvo não pode usar reações até o início do próximo turno. O dado vira d8 no 6º, d10 no 10º e d12 no 14º.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CAMPO DE HORIZONTE DEGRADADO",
        "level": 6,
        "page": 147,
        "text": "Aura invisível de 6 m: criaturas hostis tratam a área como terreno difícil; ataques à distância contra qualquer coisa dentro têm desvantagem. Na primeira vez por turno que isso fizer uma criatura obter 10 ou menos no d20, recupere 1 Ponto de Fator.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ESTADO DE ENERGIA FECHADA",
        "level": 10,
        "page": 147,
        "text": "Quando até metade de seu nível de Druida em criaturas dentro do Campo sofrerem dano, use reação para reduzir pela metade o dano de uma ou mais. Pode ainda gastar Forma Selvagem e rolar 1d10 × proficiência: reduza o dano restante de uma criatura pelo total, ou de todas pelo equivalente à metade do total.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RESULTADOS DECRESCENTES",
        "level": 14,
        "page": 147,
        "text": "Críticos contra você ou aliado dentro do Campo tornam-se acertos normais. Em Forma Selvagem o alcance do Campo dobra. Além disso, o primeiro ataque corpo a corpo que cada hostil fizer dentro dele em cada turno tem desvantagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-druid-teardrop-admissive",
    "classId": "druid",
    "name": "Admissivo de Teardrop",
    "originalName": "Teardrop’s Admissive",
    "aliases": [
      "Teardrop’s Admissive"
    ],
    "desc": "Druida que permite que as Gotas Cósmicas transformem corpo e mente, aproximando imaginação e realidade e usando radiação eidomântica para alterar energia e anatomia.",
    "sourcePage": 147,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "147–148",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "ASTROCORRETIVO",
        "level": 2,
        "page": 147,
        "text": "Ao conjurar magia de Astromancia, recebe o Bônus de Astromancia dela mesmo em ambiente de gravidade normal.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CORAÇÃO CÓSMICO",
        "level": 2,
        "page": 148,
        "text": "Ao preparar magias de Druida, trate magias dos grupos Astromancia e Eidomancia como se estivessem na lista de Druida. Você tem vantagem em Verificações de Eidomancia.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RESSONÂNCIA IMAGINÁRIA",
        "level": 6,
        "page": 148,
        "text": "Ao preparar magias, pode tratar magias de qualquer lista como magias de Druida se o nível delas for igual ou menor que sua proficiência. Essas magias só podem ser conjuradas no nível-base, independentemente do espaço usado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SIMPATIA EIDÓLICA",
        "level": 10,
        "page": 148,
        "text": "Quando criatura o mira com magia/arma eidólica ou que causaria dano eidólico, ela faz salvaguarda de Sabedoria contra sua CD de Druida. Em falha deve escolher outro alvo ou o ataque erra automaticamente; em sucesso fica imune a este efeito por 24 horas. Ela sabe da proteção antes de atacar.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EVOLUÇÃO DESBLOQUEADA",
        "level": 14,
        "page": 148,
        "text": "Você recebe voo, natação e escalada iguais ao deslocamento; respira ar e água e não precisa de ar para sobreviver no vácuo; e recebe aceleração 0-G igual ao dobro do deslocamento base. Esses benefícios se aplicam a qualquer Forma Selvagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-favored-soul-destimus",
    "classId": "favored-soul-retia",
    "name": "Fardo de Destimus",
    "originalName": "Burden of Destimus",
    "aliases": [
      "Burden of Destimus"
    ],
    "desc": "A influência de Destimus concede mente mecânica, compreensão avançada de constructos e frames e capacidade de vincular-se a uma unidade por Junção ou assumir uma forma semelhante a ela.",
    "sourcePage": 149,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "149",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "QUEBRADOR DE GOLEMS",
        "level": 1,
        "page": 149,
        "text": "Seus ataques e magias ignoram resistências e imunidades de constructos a contundente, perfurante e cortante, além de Resistência Mágica ou características equivalentes que deem vantagem contra efeitos mágicos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TECNOLOGICAMENTE SÓLIDO",
        "level": 1,
        "page": 149,
        "text": "Proficiência com todas as armas de fogo, inclusive Avançadas; pode tratá-las como se tivessem propriedade Energia para gerar munição. Para Expansão de Essência Arma Possuída, qualquer arma de fogo ou arma com Gatilho conta como arma favorecida.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ARMADURA VIVA",
        "level": 6,
        "page": 149,
        "text": "Armadura viva surge em resposta a ameaças: CA + metade da proficiência; e cada instância de dano contundente, perfurante ou cortante é reduzida pela metade do nível de Alma Favorecida.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CHAVE DO MOTOR",
        "level": 10,
        "page": 149,
        "text": "Uma vez por Descanso Longo, como ação, faça uma unidade frame que pilota realizar Junção com você, vinculando-a a seus poderes divinos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MACROBARRAGEM",
        "level": 10,
        "page": 149,
        "text": "Como ação bônus, escolha a até 18 m uma quantidade de alvos igual à metade do nível de Alma Favorecida. Cada alvo faz salvaguarda de Destreza; falha: 2d8 fogo + 2d8 força; sucesso: metade. Pode selecionar o mesmo alvo várias vezes; ele faz uma única salvaguarda e cada seleção após a primeira acrescenta 1d8 fogo + 1d8 força ao dano em falha.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TRANSFORMAÇÃO EXOESPECTRAL",
        "level": 13,
        "page": 149,
        "text": "Uma vez por Descanso Longo, produza conjurar eco de frame em nível igual à metade do nível de Alma Favorecida, mas você se torna o eco. Seus PV não são substituídos: receba os PV do eco como temporários. Mantém suas características e pode usar ações do eco; ataques do eco contam como Armamentos de Essência e armas favorecidas. Pode criar cópias de equipamento. Não exige concentração. Enquanto restarem os PV temporários, pode alternar entre forma normal e de eco como ação bônus; perder esses PV encerra o efeito.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "ARMA FAVORECIDA",
        "page": 149,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Martelo de guerra ou rifle."
      }
    ]
  },
  {
    "id": "zagalhta-favored-soul-jalasaor",
    "classId": "favored-soul-retia",
    "name": "Fardo de Jalasaor",
    "originalName": "Burden of Jalasaor",
    "aliases": [
      "Burden of Jalasaor"
    ],
    "desc": "A luz abrasadora da Serpente de Cristal se manifesta como poder radiante semelhante ao de paladinos e uma necessidade quase impossível de ignorar de impor justiça contra as forças das trevas.",
    "sourcePage": 150,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "150",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "DRAGÃO DE LUZ",
        "level": 1,
        "page": 150,
        "text": "Magias de Paladino contam como estando na lista da Alma Favorecida para você.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "LÂMINA DA EXPLOSÃO SOLAR",
        "level": 1,
        "page": 150,
        "text": "Ao obter crítico, cause dano radiante adicional igual a 1d8 × nível de seus Espaços de Pacto de Alma Favorecida. Pode usar seu atributo de conjuração em vez de Força ou Destreza nos ataques e danos com armas.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GRANDE EMPUNHADURA",
        "level": 6,
        "page": 150,
        "text": "Pode empunhar armas corpo a corpo Pesadas, Versáteis e de Duas Mãos com uma mão, mantendo benefícios de duas mãos. Pode empunhar outra dessas na mão secundária e fazer ataque bônus por combate com duas armas como se fosse Leve.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "GIGAFLARE CELESTIAL",
        "level": 10,
        "page": 150,
        "text": "Como ação, gaste Purificação e lance esfera a ponto a até 36 m, explodindo em raio de 6 m. Salvaguarda de Constituição: falha causa 1d10 radiante × nível de Alma Favorecida; sucesso metade. Falhar por 5 ou mais também deixa cego por 1 minuto, repetindo a salvaguarda ao fim dos turnos. Se gastar Espaço de Pacto ou segunda Purificação, pode excluir alvos em quantidade igual à metade de seu nível.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RESILIÊNCIA DO DRAGÃO",
        "level": 13,
        "page": 150,
        "text": "Quando falhar numa salvaguarda, pode escolher ter sucesso. Usos por Descanso Longo iguais à metade da proficiência; recupera 1 uso em cada Descanso Curto.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "ARMA FAVORECIDA",
        "page": 150,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Glaive."
      }
    ]
  },
  {
    "id": "zagalhta-favored-soul-ombra",
    "classId": "favored-soul-retia",
    "name": "Fardo de Ombra",
    "originalName": "Burden of Ombra",
    "aliases": [
      "Burden of Ombra"
    ],
    "desc": "Portador da personificação do vazio, cuja presença drena luz e vitalidade e torna o corpo uma sombra sem vida capaz de atravessar trevas e anular a troca de energia.",
    "sourcePage": 151,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "151",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PASSO SOMBRIO",
        "level": 1,
        "page": 151,
        "text": "Você possui deslocamento de teleporte igual ao dobro do deslocamento base, mas o ponto de partida ou de chegada deve estar em escuridão total.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "IMUNIDADE CINÉTICA",
        "level": 1,
        "page": 151,
        "text": "Você é imune a dano de força e resistente a dano contundente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "LUZ ANTIVIDA",
        "level": 6,
        "page": 151,
        "text": "Como ação bônus, crie esfera que devora luz e acompanhe você enquanto mantiver concentração; uma vez por Descanso, usos adicionais exigem Espaço de Pacto. A 9 m de você há escuridão total que só você enxerga. Outras criaturas que iniciam turno ou entram nela fazem salvaguarda de Constituição; em falha sofrem dano de força igual ao nível de Alma Favorecida. Ao perder concentração, pode arremessar a esfera a ponto a 18 m: criaturas em raio de 6 m fazem Constituição; falha: 1d8 × nível de Alma Favorecida de força, sucesso: metade; então termina.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PORTAL NULO",
        "level": 10,
        "page": 151,
        "text": "Quando criatura visível realiza ação que causaria dano ou cura a outra, use reação + Purificação para: reduzir todo o dano e cura que aquela criatura causa a 0 até o fim do turno; ou escolher uma criatura afetada a até 18 m, que não pode sofrer dano nem recuperar PV até o início de seu próximo turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "EVASÃO",
        "level": 13,
        "page": 151,
        "text": "Quando faz salvaguarda para sofrer metade do dano, sofre metade em falha e nenhum dano em sucesso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "ARMA FAVORECIDA",
        "page": 151,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Chicote."
      }
    ]
  },
  {
    "id": "zagalhta-favored-soul-setanta",
    "classId": "favored-soul-retia",
    "name": "Fardo de Setanta",
    "originalName": "Burden of Setanta",
    "aliases": [
      "Burden of Setanta"
    ],
    "desc": "A essência de Setanta concede capacidade de rejeitar o senso comum e ultrapassar limites, acompanhada de uma urgência em quebrar a realidade presente para aproximá-la do que deveria ser.",
    "sourcePage": 152,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "152",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "ARTES CÓSMICAS",
        "level": 1,
        "page": 152,
        "text": "Magias da lista do Cavaleiro Dracônico e do grupo Astromancia contam como magias de Alma Favorecida. Para efeitos de Bônus do Cavaleiro Dracônico, você conta como Cavaleiro Dracônico e seu tipo de dano de Encarnação é força.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PERMANÊNCIA EIDÓLICA",
        "level": 1,
        "page": 152,
        "text": "Você tem vantagem em Verificações de Queima de Eidomancia e todos os seus ataques são simultaneamente mágicos e eidólicos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FORTUNA ETERNA",
        "level": 6,
        "page": 152,
        "text": "Sempre que rolar com desvantagem por efeito ou condição fora de seu controle, pode usar o maior dos dois resultados de d20 em vez do menor.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AÇÃO EXALTADA",
        "level": 10,
        "page": 152,
        "text": "No seu turno, gaste Purificação para receber uma ação e ação bônus extras naquele turno. Rolagens de ataque, testes e salvaguardas feitas por essas ações tratam o d20 como igual ao seu nível de Alma Favorecida se o resultado fosse menor (não gera crítico); magias conjuradas por elas contam como dois níveis acima, máximo 9º; e o dano causado como resultado dessas ações não pode ser reduzido nem resistido.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DE ATAQUE EXTRA",
        "level": 13,
        "page": 152,
        "text": "Quando realiza a ação Atacar ou conjura uma magia de Alma Favorecida, pode fazer um ataque de arma adicional como parte da mesma ação.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "ARMAS FAVORECIDAS",
        "page": 152,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Glaive, alabarda e armas com a propriedade Soqueira (knuckles)."
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  const seen = new Set(window.GRIMORIO_SUBCLASSES.map(item => item.id));
  for (const item of subclasses) { if (!seen.has(item.id)) { window.GRIMORIO_SUBCLASSES.push(item); seen.add(item.id); } }
})();
