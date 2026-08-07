'use strict';

(function () {
  const subclasses = [
  {
    "id": "zagalhta-favored-soul-sihlu",
    "classId": "favored-soul-retia",
    "name": "Fardo de Sihlu",
    "originalName": "Burden of Sihlu",
    "aliases": [
      "Burden of Sihlu"
    ],
    "desc": "O Fardo do deus solar monástico de Degozah transmite poder radiante e emoções intensas, convertendo o corpo em uma arma solar capaz de acumular camadas de fúria astral.",
    "sourcePage": 152,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "152",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PUNHO SOLAR",
        "level": 1,
        "page": 152,
        "text": "Seus ataques desarmados podem causar fogo ou radiante em vez do tipo normal e usam d8 de dano, salvo característica que aumente o dado. O mesmo vale para armas com propriedade Soqueira; pode usar seu atributo de conjuração nos ataques e danos. Você conhece flecha luminosa e pode conjurá-la como ação bônus.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AURA SOL",
        "level": 6,
        "page": 152,
        "text": "Em combate, toda criatura que o acerta com ataque de arma a até 1,5 m sofre dano de fogo igual à metade de seu nível de Alma Favorecida, arredondado para cima.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FÚRIA ASTRAL",
        "level": 10,
        "page": 152,
        "text": "Como ação, gaste Purificação para criar por 1 minuto aura destrutiva e dois braços radiantes. Enquanto ativa: como ação bônus faça um ataque desarmado/Soqueira, mais um ataque para cada camada adicional; pode conjurar como ação bônus magias de tempo 1 ação; ataques desarmados e ataques de magia causam dano adicional igual à metade da proficiência, arredondada para cima. Em turnos posteriores pode gastar Purificação novamente para acumular outra camada. Cada ativação também concede PV temporários iguais a 1d4 × nível de Alma Favorecida.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "CORPO INTOCÁVEL",
        "level": 13,
        "page": 152,
        "text": "Uma vez por turno, quando for atingido ou sofrer dano de um efeito, reduza o dano pelo seu nível de Alma Favorecida canalizando poder solar. Só pode fazê-lo se for capaz de usar reações, mesmo que sua reação já tenha sido gasta.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "ARMAS FAVORECIDAS",
        "page": 152,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Bordão e manoplas de combate."
      }
    ]
  },
  {
    "id": "zagalhta-favored-soul-zega",
    "classId": "favored-soul-retia",
    "name": "Fardo de Zega",
    "originalName": "Burden of Zega",
    "aliases": [
      "Burden of Zega"
    ],
    "desc": "Portador da autoridade neutra e absoluta do juiz dos deuses. Sua voz impõe leis compulsórias ao espaço ao redor, mas as regras criadas também obrigam o próprio portador.",
    "sourcePage": 153,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "153–154",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "ORDEM DO JUIZ",
        "level": 1,
        "page": 153,
        "text": "Usos por Descanso iguais à proficiência. Como ação bônus, gaste: 1 uso para comando; 1 para sugestão; 2 para santuário; ou 4 para comando em massa, produzindo os efeitos da magia correspondente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MODERADO PERFEITO",
        "level": 6,
        "page": 153,
        "text": "Ao fazer teste de perícia ou salvaguarda em que seja proficiente, se o d20 for 9 ou menos, trate-o como 10.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "REGRA VINCULANTE",
        "level": 10,
        "page": 153,
        "text": "Como ação bônus, gaste Purificação para criar por 1 minuto esfera de 9 m centrada em você que o acompanha. Escolha uma Regra Vinculante da tabela, aplicada a todas as criaturas na zona, incluindo você. Pode encerrar como ação bônus e várias zonas podem coexistir. Em vez da tabela, pode escolher qualquer efeito que poderia ser produzido por maldição mordente; nesse caso ele afeta todos na zona exceto você.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "POSTURA DE SOBERANIA",
        "level": 13,
        "page": 153,
        "text": "Criaturas não podem obter críticos contra você, nem automaticamente. Na primeira vez em cada turno que uma fonte de dano o reduziria a 0 PV ou mataria instantaneamente, ela o reduz a 1 PV em vez disso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Regras Vinculantes",
        "page": 153,
        "columns": [
          {
            "key": "name",
            "label": "Regra"
          },
          {
            "key": "effect",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "name": "Todos Punidos",
            "effect": "Ataques e salvaguardas feitos dentro da zona têm desvantagem."
          },
          {
            "name": "Todos Elevados",
            "effect": "Ataques e salvaguardas dentro da zona têm vantagem."
          },
          {
            "name": "Cegueira",
            "effect": "Criaturas na zona não podem ver nem ouvir por qualquer sentido, incluindo visão verdadeira."
          },
          {
            "name": "Limites Vinculados",
            "effect": "Magias não recebem efeitos de Níveis Superiores, mesmo quando conjuradas com espaços maiores."
          },
          {
            "name": "Cessar-Fogo",
            "effect": "Criaturas têm resistência a todo dano."
          },
          {
            "name": "Discrição",
            "effect": "Criaturas podem usar ação bônus para ataque de arma, mas não podem fazer mais de um ataque por turno; ataques de magia acima do limite são gastos sem ocorrer."
          },
          {
            "name": "Exposição",
            "effect": "Dano ignora resistências das criaturas dentro da zona."
          },
          {
            "name": "Equilíbrio",
            "effect": "Qualquer d20 de ataque ou salvaguarda dentro da zona é tratado como resultado 10."
          },
          {
            "name": "Proibido",
            "effect": "Criaturas fora da zona erram automaticamente ataques contra criaturas dentro dela e vice-versa."
          },
          {
            "name": "Sanção de Recuperação",
            "effect": "Criaturas não podem recuperar PV, inclusive por regeneração."
          },
          {
            "name": "Silêncio",
            "effect": "Criaturas não podem falar nem produzir componentes verbais."
          },
          {
            "name": "Sem-Mente",
            "effect": "Criaturas não podem usar reações em resposta a ações tomadas na zona."
          },
          {
            "name": "Manter Padrões",
            "effect": "Escolha um tipo de salvaguarda; criaturas na zona obtêm sucesso automático nesse tipo."
          },
          {
            "name": "Continuidade Zero",
            "effect": "Criatura que termina o turno na zona concentrando-se em efeito perde a concentração."
          }
        ]
      }
    ],
    "references": [
      {
        "title": "ARMA FAVORECIDA",
        "page": 153,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Lança."
      }
    ]
  },
  {
    "id": "zagalhta-fighter-astral-knight",
    "classId": "fighter",
    "name": "Cavaleiro Astral",
    "originalName": "Astral Knight",
    "aliases": [
      "Astral Knight"
    ],
    "desc": "Guerreiro que carrega metaforicamente uma estrela no espírito e manipula energia radiante para teleportar, proteger aliados, envolver armas em poder astral e explodir em brilho de nova.",
    "sourcePage": 155,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "155",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "SURTO DE DOBRA",
        "level": 3,
        "page": 155,
        "text": "Ao usar Surto de Ação, escolha: teleportar para espaço desocupado visível a até 9 m e chegar invisível até atacar, conjurar ou início do próximo turno; ou dobrar seu deslocamento e receber aceleração 0-G igual ao dobro do deslocamento base até o início do próximo turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ELO DE ENERGIA ASTRAL",
        "level": 7,
        "page": 155,
        "text": "Sempre que gastar 1 ponto de Maestria de Combate, criaturas escolhidas a até 6 m recebem PV temporários iguais a 1d6 × proficiência. Se repetir enquanto ainda os possuem, aumente esses PV em 5.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ARMAMENTO CÓSMICO",
        "level": 10,
        "page": 155,
        "text": "Como ação, gaste 1 ponto de Maestria de Combate para produzir arma astral em nível igual à metade do nível de Guerreiro, máximo 9º. Seu atributo de conjuração é Força ou Constituição, à escolha.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MANTO DE ESTRELAS DISPERSAS",
        "level": 15,
        "page": 155,
        "text": "Quando criatura perde por dano os PV temporários concedidos por Elo de Energia Astral, torna-se resistente a todo dano até o fim do próximo turno dela.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ALMA NOVA",
        "level": 18,
        "page": 155,
        "text": "Ao acertar ataque de arma, cause um dado de dano da arma adicional como dano radiante.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-fighter-lunar-synergist",
    "classId": "fighter",
    "name": "Sinergista Lunar",
    "originalName": "Lunar Synergist",
    "aliases": [
      "Lunar Synergist"
    ],
    "desc": "Guerreiro contemplativo sintonizado com uma corrente universal, capaz de fechar os olhos para sentir o campo, converter ataques em força psíquica e manipular o espaço por telecinese.",
    "sourcePage": 156,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "156",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "FIO PSÍQUICO",
        "level": 3,
        "page": 156,
        "text": "Você recebe: Foco de Visão às Cegas — visão às cegas de 4,5 m × proficiência enquanto fecha os olhos, ficando efetivamente cego além desse alcance até o início do próximo turno; Corte Pontual — em crítico de arma, +1 dado de dano da arma como psíquico; Força Psíquica — pode converter todo o dano da arma para psíquico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DO CRÍTICO CEGO",
        "level": 7,
        "page": 156,
        "text": "Enquanto usa Foco de Visão às Cegas, obtém crítico em 19–20 e o primeiro ataque que faz em cada turno tem vantagem.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PASSOS ESPACIAIS",
        "level": 7,
        "page": 156,
        "text": "Ignora dano dos primeiros 60 m de qualquer queda e recebe aceleração 0-G igual ao dobro do deslocamento base.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FORÇA DA ORDEM",
        "level": 10,
        "page": 156,
        "text": "Como ação, gaste 1 Maestria de Combate para produzir telecinese. Exige concentração, não conta como magia e usa Força como atributo de conjuração. Pode produzir/manter os efeitos em lugar de um ataque quando realiza a ação Atacar, substituindo um de seus ataques.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTO DE CRÍTICO SUPERIOR",
        "level": 15,
        "page": 156,
        "text": "Você obtém crítico em 19–20; enquanto se cega voluntariamente para Foco de Visão às Cegas, obtém crítico em 18–20.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "MAESTRIA DA ORDEM",
        "level": 18,
        "page": 156,
        "text": "Força da Ordem não exige mais Maestria de Combate. Pode produzir seus efeitos como ação bônus ou em lugar de uma ação para usá-los. Ao fim de seu turno, se criatura/objeto estiver sendo segurado ou impedido pela telecinese, pode causar 3d6 de dano psíquico a ele.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "COMPATIBILIDADE 5.19",
        "page": 155,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "As subclasses de Guerreiro desta seção assumem as características opcionais de Guerreiro de Lyre’s Guide to Retia, incluindo Maestria de Combate."
      }
    ]
  },
  {
    "id": "zagalhta-inscriptor-astronomy",
    "classId": "inscriptor-retia",
    "name": "Astronomia",
    "originalName": "Astronomy",
    "aliases": [
      "Astronomy"
    ],
    "desc": "Inscritor fascinado por estrelas e corpos celestes que aplica princípios astronômicos ao próprio corpo, escapa da gravidade, rearranja órbitas e escreve uma singularidade em existência.",
    "sourcePage": 157,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "157–158",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "OLHOS DE RESILIÊNCIA ESTELAR",
        "level": 1,
        "page": 157,
        "text": "Você não pode ficar cego, exceto quando fecha os olhos voluntariamente, não consegue ver o alvo por circunstância física ou desvia o olhar; efeitos não podem obrigá-lo a desviar o olhar contra a vontade.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AUSÊNCIA DE PESO",
        "level": 1,
        "page": 157,
        "text": "Você recebe voo laborioso igual ao deslocamento base, produzindo voo pairado quando usado; ao calcular dano de queda, ignore 6 m × nível de Inscritor; ao usar esse voo também recebe aceleração 0-G igual ao dobro do deslocamento base pela mesma duração.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ÓRBITA HELIOCÊNTRICA",
        "level": 5,
        "page": 157,
        "text": "Como ação bônus, gaste Reviravolta Narrativa e escolha criaturas em quantidade igual à proficiência, todas a até 18 m de você e a no máximo 18 m umas das outras. Involuntárias fazem salvaguarda de Carisma. Troque livremente os espaços das voluntárias, incapacitadas, inconscientes ou que falharem; se um espaço não comportar o alvo, ele é deslocado para o espaço válido mais próximo.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VISÃO NO ESCURO VERDADEIRA",
        "level": 8,
        "page": 157,
        "text": "Recebe visão no escuro a 18 m, ou aumenta a existente em 18 m. Dentro desse alcance enxerga escuridão e penumbra como luz plena.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AUSÊNCIA DE PESO MAIOR",
        "level": 12,
        "page": 157,
        "text": "Recebe voo pairado igual ao deslocamento base e aceleração 0-G igual ao dobro. Quando ainda sofrer dano de queda após Ausência de Peso, sofre metade.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SINGULARIDADE",
        "level": 20,
        "page": 158,
        "text": "Uma vez por Descanso, ou novamente gastando Espaço de Pacto, crie por 1 minuto e concentração um buraco negro em ponto a até 36 m, com poço de gravidade de 9 m tratado como terreno difícil. Criatura que começa/entra faz Força; falha é puxada 1d4 × 3 m e cai. A até 1,5 m é tragada para subdimensão, fica incapacitada e sofre 4d6 de força ao fim de cada turno. No início do turno, Carisma bem-sucedido permite escapar e emergir a até 3 m. Ao escapar, pode usar reação para lançá-la como Estrela Cadente a até 36 m, causando 2d12 radiante e atingindo outras criaturas no ponto em falha de Destreza. Como ação bônus pode libertar qualquer número de presos disparando-os assim. Ao perder concentração, pode usar reação para disparar todos. Como ação, pode mover a singularidade para ponto a até 18 m dela ou de você.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo — Astronomia",
        "page": 157,
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spell",
            "label": "Magia"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spell": "Fogo das Fadas"
          },
          {
            "level": "3º",
            "spell": "Passagem de Luz"
          },
          {
            "level": "5º",
            "spell": "Comunicação Aberta (ou Cortina de Estrelas Cintilantes em jogo sem naves exolunares)"
          },
          {
            "level": "7º",
            "spell": "Portal de Corrente de Deslizamento"
          },
          {
            "level": "9º",
            "spell": "Muralha de Radiância"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-inscriptor-space-opera",
    "classId": "inscriptor-retia",
    "name": "Ópera Espacial",
    "originalName": "Space Opera",
    "aliases": [
      "Space Opera"
    ],
    "desc": "Inscritor que transforma explorações, mechas e monstros alienígenas em épicos de perseverança, escrevendo velocidade de dobra, proezas improváveis e fusões de frames como se a aventura fosse uma narrativa inevitável.",
    "sourcePage": 158,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "158–159",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "IR AUDAZMENTE",
        "level": 1,
        "page": 158,
        "text": "Pode prender a respiração por 10 minutos e não precisa de ar para sobreviver no vácuo; recebe aceleração 0-G igual ao dobro do deslocamento base; e resistência a radiante.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "VELOCIDADE DE DOBRA",
        "level": 5,
        "page": 158,
        "text": "Como ação bônus, gaste Reviravolta Narrativa e escolha até metade da proficiência, arredondada para cima, em criaturas visíveis. Durante 1 minuto, cada alvo pode usar o efeito uma vez: como ação bônus recebe teleporte igual ao deslocamento base até o fim do turno e realiza Disparar; ou, ao ser atingido por ataque visível, usa reação para fazê-lo errar automaticamente e teleporta a espaço visível a até 9 m.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "NUNCA ME DIGA AS CHANCES",
        "level": 8,
        "page": 159,
        "text": "Em testes de atributo feitos como parte de magia de Inscritor (como dissipar magia ou contra-magia), some a proficiência se ainda não somava. Além disso, quando fizer ataque, salvaguarda ou teste com desvantagem, pode gastar um uso para escolher o maior d20; usos por Descanso iguais à proficiência.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FAÇA ACONTECER",
        "level": 12,
        "page": 159,
        "text": "Quando criatura sob Velocidade de Dobra falhar em ataque, teste ou salvaguarda, pode consumir o efeito para obter sucesso automático. Até o início do próximo turno dela, rolagens do mesmo tipo tratam o d20 como no mínimo metade de seu nível de Inscritor, se o resultado original for menor.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PORTAL DE FUSÃO DE FRAME",
        "level": 20,
        "page": 159,
        "text": "Uma vez por Descanso Longo, produz conjurar eco de frame como magia de 9º nível, sem espaço nem componentes materiais. Ignora as verificações de concentração normalmente causadas por pilotar o eco, e ele recebe simultaneamente as habilidades de sua variante DGR e de frame lunar.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias de Capítulo — Ópera Espacial",
        "page": 158,
        "columns": [
          {
            "key": "level",
            "label": "Nível de Inscritor"
          },
          {
            "key": "spell",
            "label": "Magia"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spell": "Zona Antigravidade"
          },
          {
            "level": "3º",
            "spell": "Purga Gravitacional"
          },
          {
            "level": "5º",
            "spell": "Meteoros Minúsculos"
          },
          {
            "level": "7º",
            "spell": "Santuário Privado"
          },
          {
            "level": "9º",
            "spell": "Nova Morta"
          }
        ]
      }
    ]
  },
  {
    "id": "zagalhta-monk-outer-path",
    "classId": "monk",
    "name": "Caminho da Via Exterior",
    "originalName": "Way of the Outer Path",
    "aliases": [
      "Way of the Outer Path"
    ],
    "desc": "Tradição de dissociação meditativa que separa ego e corpo, torna o monge semipermeável ao dano e lhe permite agir simultaneamente sobre os Planos Material e Etéreo.",
    "sourcePage": 160,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "160",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "AUTOSSUGESTÃO",
        "level": 3,
        "page": 160,
        "text": "Ao terminar um Descanso, escolha uma arma que possui; ela é uma arma de Monge com a qual você é proficiente até vincular outra. Qualquer arma com a qual esteja sintonizado também é arma de Monge para você.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ECO IMPERVIOUSO",
        "level": 3,
        "page": 160,
        "text": "Você recebe resistência a dano psíquico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FORMA DESIMPEDIDA",
        "level": 6,
        "page": 160,
        "text": "Como ação bônus, transforme-se por 1 minuto, até cair a 0 PV ou desfazer como ação bônus. Quando for atingido por ataque, role 1d100: resultado ≤ 10 + nível de Monge faz o ataque errar automaticamente; se um ataque ainda acertar, perde essa proteção até o início do próximo turno. Na forma, vê, interage, ataca e afeta criaturas nos Planos Etéreo e Material como se estivesse em ambos. Uma vez por Descanso; usos adicionais custam 2 ki.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FOCO DO FARDO",
        "level": 11,
        "page": 160,
        "text": "Na Forma Desimpedida, seus ataques são automaticamente aprimorados como por Dotação de Ki e o primeiro ponto de ki que gastar em cada turno não é deduzido.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APOIOS CÓSMICOS",
        "level": 11,
        "page": 160,
        "text": "Sem armadura: na Forma Desimpedida, recebe voo pairado igual ao deslocamento; e pode caminhar por superfícies horizontais, verticais ou invertidas sem cair enquanto mantiver contato, criando pontos de apoio gravitacionais.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "TEMPESTADE DE TRAUMA",
        "level": 17,
        "page": 160,
        "text": "Cada vez que uma criatura ativa a rolagem d100 de Forma Desimpedida, receba 1 Carga de Trauma; também recebe 1 quando uma criatura causa 10+ de dano com um único ataque. Ao fim de cada turno, 1d4 cargas desaparecem. Ao acertar ataque de arma, gaste qualquer quantidade para adicionar um dado de Artes Marciais por carga ao dano, após acertar e antes do dano; ou gaste cargas como pontos de ki, 1 por 1.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "CARACTERÍSTICAS OPCIONAIS DE MONGE",
        "page": 160,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "A fonte apresenta Treinamento de Monge (1º nível) e Dotação de Ki (4º nível) como características opcionais. Esta subclasse faz referência direta a Dotação de Ki; o texto acima preserva a interação sem adicionar essas opções como uma classe separada."
      }
    ]
  },
  {
    "id": "zagalhta-paladin-oath-convergence",
    "classId": "paladin",
    "name": "Juramento da Convergência",
    "originalName": "Oath of Convergence",
    "aliases": [
      "Oath of Convergence"
    ],
    "desc": "Juramento de quem busca unir povos, construir pontes e encerrar guerras, combatendo qualquer força que alimente o ódio e impeça civilizações de compreender umas às outras.",
    "sourcePage": 161,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "161",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 161,
        "text": "Abordagem Meteórica: como ação, gaste Canalizar Divindade, salte e aterrisse em espaço visível a até 18 m; criaturas a até 3 m fazem Destreza, sofrendo 1d10 radiante × metade do nível de Paladino (arredondada para cima), ou metade em sucesso. Forças Unificadas: como ação bônus, gaste Canalizar Divindade e conceda a você e até cinco criaturas a 6 m PV temporários iguais ao nível de Paladino + 5; enquanto os tiverem, recebem +2 em ataques e salvaguardas.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "COMUNICAÇÃO ABERTA",
        "level": 3,
        "page": 161,
        "text": "Você entende e lê qualquer idioma que encontrar, mas não pode escrevê-lo nem falá-lo sem aprender o idioma por completo.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AURA DE FRENTES UNIDAS",
        "level": 7,
        "page": 161,
        "text": "Aliados dentro de sua Aura de Proteção recebem bônus de CA igual à metade da proficiência. Hostis na mesma área sofrem esse valor como penalidade nas jogadas de ataque.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FORÇA EM NÚMEROS",
        "level": 15,
        "page": 161,
        "text": "Quando aliado termina turno em combate dentro de sua Aura de Proteção com menos da metade dos PV, recupera 1d10 PV.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SER NEXO",
        "level": 20,
        "page": 161,
        "text": "Você e criaturas a até 18 m podem usar magias/efeitos de Toque em qualquer criatura voluntária dentro desse alcance como se pudessem tocá-la; magias ofensivas de Toque podem originar-se do espaço de outra criatura voluntária. Você recebe telepatia a 36 m. Enquanto houver ao menos uma criatura não hostil a até 1,5 m, você é resistente a todo dano.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento da Convergência",
        "page": 161,
        "columns": [
          {
            "key": "level",
            "label": "Nível de Paladino"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Rito Cerimonial; Santuário"
          },
          {
            "level": "5º",
            "spells": "Restauração Menor; Vínculo Protetor"
          },
          {
            "level": "9º",
            "spells": "Palavra Curativa em Massa; Guardiões Espirituais"
          },
          {
            "level": "13º",
            "spells": "Guardião da Fé; Localizar Criatura"
          },
          {
            "level": "17º",
            "spells": "Restauração Maior; Círculo de Teleporte"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DA CONVERGÊNCIA",
        "page": 161,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Curiosidade: mantenha mente aberta às tradições e culturas alheias e não imponha sua visão. Diplomacia: quando possível, ouça antes de recorrer a violência ou ameaças. Progresso: aproveite oportunidades de unir pessoas sob ideais e bandeiras comuns."
      }
    ]
  },
  {
    "id": "zagalhta-paladin-oath-vanquisher",
    "classId": "paladin",
    "name": "Juramento do Subjugador",
    "originalName": "Oath of the Vanquisher",
    "aliases": [
      "Oath of the Vanquisher"
    ],
    "desc": "Paladino que jura eliminar uma ameaça declarada não por mera vingança, mas por julgá-la inaceitável para o universo, usando todos os meios necessários até que o inimigo seja vencido.",
    "sourcePage": 162,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "162",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "CANALIZAR DIVINDADE",
        "level": 3,
        "page": 162,
        "text": "Inimigo Jurado: ao mirar criatura com ataque/efeito, gaste Canalizar Divindade; por 1 minuto, ataques, dano e efeitos originados de você ignoram resistências, imunidades e Limiares do alvo, e seus ataques contra ele recebem bônus igual ao nível do maior Espaço de Paladino. Extermínio Supremo: use Canalizar Divindade como se fosse um Espaço para Destruição Divina, de nível igual ao dobro do maior Espaço de Paladino, máximo 9º; o teto de dano dessa Destruição torna-se 10d8.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "LÂMINA SUBJUGADORA",
        "level": 7,
        "page": 162,
        "text": "Escolha tipos de criatura em quantidade igual à proficiência; para humanoide escolha uma sub-raça. Pode trocar uma escolha a cada nível de Paladino e adicionar escolhas quando a proficiência aumentar. Contra esses tipos, some proficiência ao dano de ataques de arma e suas características de Paladino tratam-nos como ínferos.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "RIPOSTA VINGADORA",
        "level": 15,
        "page": 162,
        "text": "Quando criatura faz ataque de arma contra você, use reação para atacá-la. Se seu resultado for maior que o dela, o ataque inimigo erra; se seu resultado também seria suficiente para acertá-la, seu ataque a atinge.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "INIMIGO SUPREMO",
        "level": 20,
        "page": 162,
        "text": "Quando for reduzido a 0 PV ou morto instantaneamente, ou ao iniciar turno morrendo, declare uma criatura como Inimigo Supremo; fica com 1 PV, deixa de morrer e recebe PV temporários iguais à metade dos PV máximos. Até o alvo se render/fugir satisfatoriamente, morrer, você cair novamente a 0, ou encerrar como ação: não pode recuperar PV; é resistente ao dano do Inimigo Supremo; a cada turno recupera um Espaço de Paladino de nível 1d4+1 (esses espaços desaparecem ao fim); e faz um ataque de arma adicional com a ação Atacar. Uma vez por Descanso Longo; ao terminar, recebe o máximo possível de Fadiga de Combate.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "tables": [
      {
        "title": "Magias do Juramento do Subjugador",
        "page": 162,
        "columns": [
          {
            "key": "level",
            "label": "Nível de Paladino"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "3º",
            "spells": "Perdição; Arma Momentosa"
          },
          {
            "level": "5º",
            "spells": "Arma Espiritual; Arma de Dominação"
          },
          {
            "level": "9º",
            "spells": "Velocidade; Salto Trovejante"
          },
          {
            "level": "13º",
            "spells": "Bravura Deslacrada; Ira da Valquíria"
          },
          {
            "level": "17º",
            "spells": "Surto de Pavor; Vento Cortante"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "PRECEITOS DO SUBJUGADOR",
        "page": 162,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Certeza: destruirei aqueles que declarar meus inimigos. Intensidade: não traio minhas intenções mais valiosas para conquistar a boa vontade dos outros. Selvageria: não rejeito um meio apenas por parecer impróprio; considero todos os cursos de ação."
      }
    ]
  },
  {
    "id": "zagalhta-petal-knight-astrophytum",
    "classId": "petal-knight-retia",
    "name": "Astrophytum",
    "originalName": "Astrophytum",
    "aliases": [
      "Astrophytum"
    ],
    "desc": "Epíteto de um cacto que sobrevive no vazio e viaja preso a rochas espaciais, simbolizando liberdade, resistência e vontade de explorar os confins do cosmos.",
    "sourcePage": 163,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "163",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "VENTOS CÓSMICOS",
        "level": 2,
        "page": 163,
        "text": "Ao aprender magias de Cavaleiro das Pétalas, trate Astromancias como estando na lista. Quando conjura Astromancia com espaço, ela conta como um nível acima, máximo 9º.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PASSO PARA O ESPAÇO",
        "level": 2,
        "page": 163,
        "text": "Recebe voo laborioso pairado igual ao deslocamento base e aceleração 0-G igual ao dobro.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ESPINHOS ASTRAIS",
        "level": 6,
        "page": 163,
        "text": "Como ação bônus, conjure e dispare uma quantidade de flechas radiantes igual à metade do nível de Cavaleiro das Pétalas. Cada uma é ataque de magia à distância contra alvo a até 18 m e causa 2d6 radiante. Duas ou mais no mesmo alvo são resolvidas como um único ataque, somando o dano. Usos por Descanso Longo iguais à proficiência; recupera 1 em Descanso Curto.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FLORA ASTROPHYTUM",
        "level": 11,
        "page": 163,
        "text": "Antigrav Burst: produz zona antigravidade sem espaço, em nível igual a 3 + proficiência (não aumentado por Ventos Cósmicos). Slowing Weight: escolha até proficiência em alvos a 18 m; Força em falha deixa Lento por 1 minuto, repetindo no fim dos turnos. Zero Zealot Zone: aura gravitacional enquanto concentrar; ataques de arma contra você têm desvantagem e, quando um ataque o acerta, pode encerrar a aura para fazê-lo errar automaticamente.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "PASSOS DE ASTEROIDE",
        "level": 15,
        "page": 163,
        "text": "Em ambiente de gravidade zero, recebe deslocamento de teleporte igual à aceleração 0-G. Ao realizar ação Atacar nesse ambiente, faz um ataque de arma adicional.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-petal-knight-zinnia",
    "classId": "petal-knight-retia",
    "name": "Zínia",
    "originalName": "Zinnia",
    "aliases": [
      "Zinnia"
    ],
    "desc": "Epíteto de flores que brotam onde dragões antiquíssimos morrem. A Zínia permite ao Cavaleiro das Pétalas imitar resistências, magia, asas e lamentos destrutivos da espécie dracônica.",
    "sourcePage": 163,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "163–164",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "PÉTALAS DA SEPULTURA DRACÔNICA",
        "level": 2,
        "page": 164,
        "text": "Magias de Cavaleiro Dracônico contam como magias de Cavaleiro das Pétalas, e você é tratado como Cavaleiro Dracônico para efeitos de Bônus do Cavaleiro Dracônico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ESCAMAS E COBERTURA",
        "level": 2,
        "page": 164,
        "text": "Escolha ácido, frio, fogo, elétrico, necrótico, veneno, radiante ou trovão. Você recebe resistência ao tipo escolhido; ao conjurar magia de Cavaleiro Dracônico, esse tipo conta como seu tipo de Encarnação.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "ASAS DE FLOR-DRAGÃO",
        "level": 6,
        "page": 164,
        "text": "Ao conjurar magia de Cavaleiro das Pétalas, pode usar opção de Ramos Virtuosos para manifestar asas de zínia até o início do próximo turno, com voo igual ao deslocamento base. Pode concentrar-se nelas por até 1 minuto. No 11º nível, pode manifestá-las à vontade, sem magia nem limite de tempo.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "FLORA DE TROCA",
        "level": 6,
        "page": 164,
        "text": "Como ação, tente trocar de lugar com criatura da mesma categoria a até 18 m. Alvo involuntário faz salvaguarda de Carisma. Em falha, vocês trocam espaços; agarrões/impedimentos físicos continuam afetando a criatura originalmente presa salvo se a fonte mover junto. Após a troca, pode fazer um ataque de arma com vantagem antes do fim do turno.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "BRASAS DO WYRM",
        "level": 11,
        "page": 164,
        "text": "Ao acertar ataque de arma, causa um dado de dano adicional da arma do tipo escolhido em Escamas e Cobertura. Esse dano conta como dano de Encarnação para magias de Cavaleiro Dracônico.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "LAMENTO DO ARCIDRAGÃO",
        "level": 15,
        "page": 164,
        "text": "Uma vez por Descanso, produza meteoro galáctico sem Espaço e sem Verificação de Eidomancia. Ao fazê-lo, pode usar Ramos Virtuosos como se tivesse conjurado a magia usando Espaço de Pacto.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ]
  },
  {
    "id": "zagalhta-ranger-velvet-knight",
    "classId": "ranger",
    "name": "Cavaleiro do Veludo",
    "originalName": "Velvet Knight",
    "aliases": [
      "Velvet Knight"
    ],
    "desc": "Patrulheiro que canaliza a energia reativa do Veludo Estelar para transformar temporariamente armas e armaduras em extensões explosivas da própria vontade.",
    "sourcePage": 165,
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "165",
      "chapter": "Capítulo 6: Opções de Subclasse"
    },
    "features": [
      {
        "title": "APRIMORAMENTOS DE VELUDO ESTELAR",
        "level": 3,
        "page": 165,
        "text": "Usos por Descanso iguais ao seu Bônus de Favor. Como ação bônus escolha: Armamento de Veludo Estelar — por 1 minuto, uma arma recebe bônus de aprimoramento igual à metade da proficiência (sobrepõe o existente), torna-se mágica/adamantina e concede um ataque extra na ação Atacar; ou Bombardeio de Veludo Estelar — transforme brevemente arma à distância e dispare ponto dentro do alcance normal; criaturas a 4,5 m fazem Destreza, sofrendo em falha o dano normal da arma + Dado de Favor × Bônus de Favor como fogo ou radiante, metade em sucesso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "NANOARMADURA DE VELUDO",
        "level": 7,
        "page": 165,
        "text": "Como ação bônus, aprimore sua armadura por 1 minuto: CA + Bônus de Favor; reduz contundente/perfurante/cortante pela metade do nível de Patrulheiro; deslocamento +3 m. Uma vez por Descanso; usos adicionais gastam Espaço de 2º+. Com Espaço de 4º+, também recebe voo de 18 m. Se cairia a 0 PV, a armadura reverte e você fica com 1 PV.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "AUTODESDOBRAMENTO DE ARMADURA",
        "level": 11,
        "page": 165,
        "text": "Ao rolar iniciativa, pode ativar Nanoarmadura imediatamente se ainda não gastou o uso gratuito por Descanso.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "SURTO DO REATOR",
        "level": 11,
        "page": 165,
        "text": "Pode gastar Espaço de Patrulheiro para ativar Armamento e Bombardeio de Veludo Estelar juntos na mesma ação bônus, sem consumir os usos normais; também pode ativar apenas um.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      },
      {
        "title": "APRIMORAMENTOS DE VELUDO ESTELAR",
        "level": 15,
        "page": 165,
        "text": "Armamento: passa a conceder dois ataques extras na ação Atacar em vez de um. Bombardeio: pode aumentar o raio de 4,5 m até 9 m e dobra o alcance a que pode ser disparado.",
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection"
      }
    ],
    "references": [
      {
        "title": "COMPATIBILIDADE 5.19",
        "page": 165,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "A fonte assume o Patrulheiro revisado de 19ª Edição publicado em Lyre’s Guide to Retia; o Grimório mantém a subclasse ligada ao Patrulheiro e preserva as referências a Dado de Favor e Bônus de Favor."
      }
    ]
  }
];
  if (!window.GRIMORIO_SUBCLASSES) window.GRIMORIO_SUBCLASSES = [];
  const seen = new Set(window.GRIMORIO_SUBCLASSES.map(item => item.id));
  for (const item of subclasses) { if (!seen.has(item.id)) { window.GRIMORIO_SUBCLASSES.push(item); seen.add(item.id); } }
})();
