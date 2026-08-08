'use strict';

(function () {
  const classes = [
  {
    "id": "dragoneer",
    "name": "Cavaleiro Dracônico",
    "originalName": "Dragoneer",
    "aliases": [
      "Dragoneer",
      "Cavaleiro Dracônico"
    ],
    "hitDie": "Varia por Conceito Central (d6–d12)",
    "ability": "Sabedoria",
    "saves": "Sabedoria + salvaguarda do Conceito Central",
    "armor": "Varia por Conceito Central",
    "weapons": "Varia por Conceito Central",
    "tools": "Varia por Conceito Central",
    "skills": "Varia por Conceito Central",
    "sigilKey": "dragoneer",
    "color": "#6e5aa8",
    "desc": "Um portador da alma ou essência de um dragão, capaz de manifestar asas, armadura e magia dracônicas. Seu Conceito Central define o papel de combate, Dados de Vida, proficiências e progressão de conjuração, tornando a classe altamente modular.",
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "116–130",
      "chapter": "Capítulo 6: Opções de Classe — O Cavaleiro Dracônico"
    },
    "tablePage": 117,
    "overview": [
      {
        "title": "O CAVALEIRO DRACÔNICO",
        "page": 116,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Cavaleiros Dracônicos são guerreiros lendários que carregam armas, armaduras e magia nascidas da essência de dragões anteriores. Alguns são escolhidos por dragões; outros canalizam vestígios de almas antigas ou ecos de outras linhas temporais. Sua existência costuma estar ligada a profecias e à necessidade de equilibrar forças que ameaçam povos ou o próprio mundo."
      },
      {
        "title": "A ALMA DO DRAGÃO",
        "page": 116,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Todo Cavaleiro Dracônico carrega uma Alma do Dragão, manifestada como pequeno cristal ou relíquia. Ela nem sempre é literalmente a alma completa de um dragão: pode ser essência ou fragmento espiritual. Por meio dela, o personagem manifesta asas e armadura abstratas e produz poderes inerentes à espécie dracônica."
      },
      {
        "title": "CONCEITOS CENTRAIS",
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Os Conceitos Centrais representam a forma básica de combate do Cavaleiro Dracônico e funcionam como sua especialização. Eles aproximam o personagem de papéis como guerreiro, bárbaro, ladino ou conjurador sem substituir essas classes, e alteram Dados de Vida, salvaguardas, proficiências e conjuração."
      }
    ],
    "creation": [
      {
        "title": "CONSTRUINDO UM CAVALEIRO DRACÔNICO",
        "page": 117,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "A classe depende fortemente das características básicas. O Conceito Central define o papel funcional em combate, enquanto a Escolha de Encarnação determina um tipo de dragão, resistência, movimento, dano adicional e um benefício exclusivo. Em jogo, é uma classe de alto dano e mobilidade, com forte consumo de recursos e menor variedade de ferramentas/perícias."
      }
    ],
    "basics": {
      "title": "CARACTERÍSTICAS DE CLASSE",
      "page": 117,
      "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
      "text": "PONTOS DE VIDA\n\nSeu Dado de Vida é determinado pelo Conceito Central (d6, d8, d10 ou d12).\n\nPontos de Vida no 1º nível: resultado máximo do Dado de Vida do Conceito Central + seu modificador de Constituição.\n\nPontos de Vida em níveis superiores: um Dado de Vida do tamanho definido pelo Conceito Central (ou 4, 5, 6 ou 7 para d6, d8, d10 e d12) + Constituição por nível após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras, armas, perícias e a segunda salvaguarda são determinadas pelo Conceito Central; Sabedoria integra a estrutura da classe e é o atributo padrão de conjuração.\n\nEQUIPAMENTO\n\nVocê começa com (a) armadura de couro ou (b) cota de malha; (a) bordão, (b) uma arma marcial ou (c) uma arma corpo a corpo simples; arco curto e 20 flechas; e pacote de explorador. Alternativamente, começa com 5d4 × 10 po (120 po em média)."
    },
    "features": [
      {
        "title": "ASAS DO AVATAR",
        "level": 1,
        "page": 118,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você conjura asas dracônicas semelhantes a relíquias. Elas concedem deslocamento de voo laborioso igual ao seu deslocamento base mais o bônus da coluna Velocidade das Asas. Se já possuir voo laborioso superior ao deslocamento base, pode somar esse bônus à fonte existente."
      },
      {
        "title": "CONCEITO CENTRAL",
        "level": 1,
        "page": 118,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "No 1º nível escolha um Conceito Central. Ele define seu Dado de Vida, proficiências, segunda salvaguarda, lista adicional de magias e tipo de progressão conjuradora. Você recebe imediatamente a característica de 1º nível do conceito e as demais nos níveis indicados."
      },
      {
        "title": "CONJURAÇÃO",
        "level": 1,
        "page": 118,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Se o Conceito Central conceder conjuração, você aprende duas magias de 1º nível no 1º nível e novas magias conforme a coluna Magias Conhecidas. Sabedoria é seu atributo de conjuração. Além da lista do Cavaleiro Dracônico, o conceito indica uma classe cuja lista pode ser usada. O conceito também determina se você é Conjurador Pleno, Meio Conjurador, Um-Terço de Conjurador ou Conjurador de Combustão. Conjuradores de Combustão recuperam seus Espaços de Pacto em qualquer Descanso; os demais recuperam os espaços em Descanso Longo. Você não recebe truques por esta característica, salvo indicação específica."
      },
      {
        "title": "ESCOLHA DE ENCARNAÇÃO",
        "level": 2,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Escolha um Tipo de Encarnação dracônica. Você recebe resistência ao tipo de dano listado, um tipo de movimento e uma característica exclusiva. Esse dano é seu dano/tipo de Encarnação. Quando o movimento indicar Base, seu deslocamento base aumenta em 3 m."
      },
      {
        "title": "ESTILO DE LUTA",
        "level": 2,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Escolha um Estilo de Luta entre Florescimento Arcano, Arquearia, Guerreiro Abençoado, Combate às Cegas, Duelo, Combate com Armas Grandes, Proficiência (propriedades listadas), Lutador Imprudente, Técnica Superior ou Combate com Duas Armas. Você recebe a versão básica, não aprimorada."
      },
      {
        "title": "ARMADURA DA BESTA",
        "level": 3,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Quando não estiver usando armadura nem escudo, pode manifestar uma mortalha metálica. Sua CA pode ser calculada como 10 + modificador de Destreza + modificador de Sabedoria."
      },
      {
        "title": "CARACTERÍSTICA DE CONCEITO CENTRAL (3º NÍVEL)",
        "level": 3,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 3º nível do Conceito Central escolhido."
      },
      {
        "title": "AUMENTO NO VALOR DE ATRIBUTO",
        "level": 4,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Nos níveis 4, 8, 12, 16 e 19, escolha um talento que cumpra os requisitos, aumente um atributo em 2 ou dois atributos em 1. Esta característica não eleva atributos acima de 20."
      },
      {
        "title": "AÇÃO ENCADEADA",
        "level": 5,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Ao realizar a ação Atacar, pode atacar duas vezes. Se puder conjurar magias de Cavaleiro Dracônico, pode substituir um desses ataques pela conjuração de uma magia com tempo de conjuração de 1 ação. Regras que interagem com Ataque Extra podem tratar esta característica como Ataque Extra."
      },
      {
        "title": "APRIMORAMENTO DE ESTILO DE LUTA",
        "level": 6,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "No 6º nível, e novamente no 10º e 15º, aprimore um de seus Estilos de Luta. Se não tiver um estilo que possa ser aprimorado, escolha um novo entre as opções de 2º nível."
      },
      {
        "title": "CARACTERÍSTICA DE CONCEITO CENTRAL (7º NÍVEL)",
        "level": 7,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 7º nível do Conceito Central escolhido."
      },
      {
        "title": "GOLPE ENCARNADO",
        "level": 7,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Sempre que causar dano a uma criatura com um ataque de arma ou ataque de magia, causa um dado adicional de dano do seu tipo de Encarnação."
      },
      {
        "title": "SOPRO DO DRAGÃO",
        "level": 9,
        "page": 120,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Como ação, escolha cone de 9 m, linha de 18 m por 1,5 m, esfera de 6 m de raio centrada em ponto a até 18 m, ou cubo de 13,5 m centrado em você. Cada criatura na área faz a salvaguarda associada ao seu tipo de Encarnação. Em falha, sofre dano de Encarnação igual a 3d8 × seu bônus de proficiência + seu nível de Cavaleiro Dracônico. Pode usar uma vez por Descanso."
      },
      {
        "title": "IMUNIDADE ENCARNADA",
        "level": 9,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você se torna imune ao tipo de dano correspondente à sua Encarnação."
      },
      {
        "title": "UM SONHO DE VOO",
        "level": 10,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Além do voo laborioso de Asas do Avatar, você recebe deslocamento de voo normal igual à metade desse deslocamento de voo laborioso; ele não exige ação bônus para ser utilizado."
      },
      {
        "title": "VOO DE PASSAGEM",
        "level": 11,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Ao sair do alcance de uma criatura usando o deslocamento de voo produzido pelo voo laborioso, você não provoca ataques de oportunidade."
      },
      {
        "title": "CARACTERÍSTICA DE CONCEITO CENTRAL (13º NÍVEL)",
        "level": 13,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 13º nível do Conceito Central escolhido."
      },
      {
        "title": "COLISOR DE ALMAS",
        "level": 14,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Ao fazer um ataque de arma no seu turno, pode declarar o uso desta característica. Se acertar, causa dano adicional igual ao dano de Sopro do Dragão + 1d8 por ponto de proficiência; esse dano extra não é multiplicado por crítico. O Sopro do Dragão passa a ser considerado usado. Só pode declarar uma vez por turno; se errar, o uso do Sopro não é gasto, mas não pode tentar novamente naquele turno."
      },
      {
        "title": "CARACTERÍSTICA DE CONCEITO CENTRAL (17º NÍVEL)",
        "level": 17,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 17º nível do Conceito Central escolhido."
      },
      {
        "title": "APRIMORAMENTO DO SOPRO DO DRAGÃO",
        "level": 18,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Quando usar Sopro do Dragão, pode excluir qualquer quantidade de alvos que consiga ver dentro da área."
      },
      {
        "title": "ENCARNAÇÃO ASCENDIDA",
        "level": 20,
        "page": 121,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Uma vez por Descanso Longo, conjure soberania sem espaço de magia, no 5º nível; a CD da Verificação de Queima de Eidomancia é no mínimo 20. Pode gastar um espaço adicional para conjurá-la no nível desse espaço. Durante a transformação, pode usar Sopro do Dragão uma vez sem consumir a utilização normal da característica."
      }
    ],
    "tables": [
      {
        "title": "Progressão de Espaços — Conjurador Pleno",
        "columns": [
          {
            "key": "level",
            "label": "Nível"
          },
          {
            "key": "s1",
            "label": "1º"
          },
          {
            "key": "s2",
            "label": "2º"
          },
          {
            "key": "s3",
            "label": "3º"
          },
          {
            "key": "s4",
            "label": "4º"
          },
          {
            "key": "s5",
            "label": "5º"
          },
          {
            "key": "s6",
            "label": "6º"
          },
          {
            "key": "s7",
            "label": "7º"
          },
          {
            "key": "s8",
            "label": "8º"
          },
          {
            "key": "s9",
            "label": "9º"
          }
        ],
        "rows": [
          {
            "level": 1,
            "s1": 2,
            "s2": "—",
            "s3": "—",
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 2,
            "s1": 3,
            "s2": "—",
            "s3": "—",
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 3,
            "s1": 4,
            "s2": 2,
            "s3": "—",
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 4,
            "s1": 4,
            "s2": 3,
            "s3": "—",
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 5,
            "s1": 4,
            "s2": 3,
            "s3": 2,
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 6,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": "—",
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 7,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 1,
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 8,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 2,
            "s5": "—",
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 9,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 1,
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 10,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": "—",
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 11,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 12,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": "—",
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 13,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": 1,
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 14,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": 1,
            "s8": "—",
            "s9": "—"
          },
          {
            "level": 15,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": 1,
            "s8": 1,
            "s9": "—"
          },
          {
            "level": 16,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": 1,
            "s8": 1,
            "s9": "—"
          },
          {
            "level": 17,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 2,
            "s6": 1,
            "s7": 1,
            "s8": 1,
            "s9": 1
          },
          {
            "level": 18,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 3,
            "s6": 1,
            "s7": 1,
            "s8": 1,
            "s9": 1
          },
          {
            "level": 19,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 3,
            "s6": 1,
            "s7": 1,
            "s8": 1,
            "s9": 1
          },
          {
            "level": 20,
            "s1": 4,
            "s2": 3,
            "s3": 3,
            "s4": 3,
            "s5": 3,
            "s6": 2,
            "s7": 1,
            "s8": 1,
            "s9": 1
          }
        ],
        "page": 118
      },
      {
        "title": "Progressão de Espaços — Meio, Um-Terço e Combustão",
        "columns": [
          {
            "key": "level",
            "label": "Nível"
          },
          {
            "key": "h1",
            "label": "Meio 1º"
          },
          {
            "key": "h2",
            "label": "Meio 2º"
          },
          {
            "key": "h3",
            "label": "Meio 3º"
          },
          {
            "key": "h4",
            "label": "Meio 4º"
          },
          {
            "key": "h5",
            "label": "Meio 5º"
          },
          {
            "key": "t1",
            "label": "1/3 1º"
          },
          {
            "key": "t2",
            "label": "1/3 2º"
          },
          {
            "key": "t3",
            "label": "1/3 3º"
          },
          {
            "key": "t4",
            "label": "1/3 4º"
          },
          {
            "key": "burnN",
            "label": "Combustão: espaços"
          },
          {
            "key": "burnL",
            "label": "Combustão: nível"
          }
        ],
        "rows": [
          {
            "level": 1,
            "h1": 2,
            "h2": "—",
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 2,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 1,
            "burnL": "1º"
          },
          {
            "level": 2,
            "h1": 2,
            "h2": "—",
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 2,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "1º"
          },
          {
            "level": 3,
            "h1": 3,
            "h2": "—",
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 2,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "1º"
          },
          {
            "level": 4,
            "h1": 3,
            "h2": "—",
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 3,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "2º"
          },
          {
            "level": 5,
            "h1": 4,
            "h2": 2,
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 3,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "2º"
          },
          {
            "level": 6,
            "h1": 4,
            "h2": 3,
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 3,
            "t2": "—",
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "2º"
          },
          {
            "level": 7,
            "h1": 4,
            "h2": 3,
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 2,
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "3º"
          },
          {
            "level": 8,
            "h1": 4,
            "h2": 3,
            "h3": "—",
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 2,
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "3º"
          },
          {
            "level": 9,
            "h1": 4,
            "h2": 3,
            "h3": 2,
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 2,
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "3º"
          },
          {
            "level": 10,
            "h1": 4,
            "h2": 3,
            "h3": 2,
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": "—",
            "t4": "—",
            "burnN": 2,
            "burnL": "4º"
          },
          {
            "level": 11,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": "—",
            "t4": "—",
            "burnN": 3,
            "burnL": "4º"
          },
          {
            "level": 12,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": "—",
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": "—",
            "t4": "—",
            "burnN": 3,
            "burnL": "4º"
          },
          {
            "level": 13,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 1,
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": 2,
            "t4": "—",
            "burnN": 3,
            "burnL": "5º"
          },
          {
            "level": 14,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 1,
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": 2,
            "t4": "—",
            "burnN": 3,
            "burnL": "5º"
          },
          {
            "level": 15,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 2,
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": 2,
            "t4": "—",
            "burnN": 3,
            "burnL": "5º"
          },
          {
            "level": 16,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 3,
            "h5": "—",
            "t1": 4,
            "t2": 3,
            "t3": 3,
            "t4": "—",
            "burnN": 3,
            "burnL": "6º"
          },
          {
            "level": 17,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 3,
            "h5": 1,
            "t1": 4,
            "t2": 3,
            "t3": 3,
            "t4": "—",
            "burnN": 4,
            "burnL": "6º"
          },
          {
            "level": 18,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 3,
            "h5": 1,
            "t1": 4,
            "t2": 3,
            "t3": 3,
            "t4": "—",
            "burnN": 4,
            "burnL": "6º"
          },
          {
            "level": 19,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 3,
            "h5": 2,
            "t1": 4,
            "t2": 3,
            "t3": 3,
            "t4": 1,
            "burnN": 4,
            "burnL": "6º"
          },
          {
            "level": 20,
            "h1": 4,
            "h2": 3,
            "h3": 3,
            "h4": 3,
            "h5": 2,
            "t1": 4,
            "t2": 3,
            "t3": 3,
            "t4": 1,
            "burnN": 4,
            "burnL": "6º"
          }
        ],
        "page": 119
      },
      {
        "title": "Tipos de Encarnação",
        "columns": [
          {
            "key": "name",
            "label": "Encarnação"
          },
          {
            "key": "energy",
            "label": "Energia (Salvaguarda)"
          },
          {
            "key": "movement",
            "label": "Movimento"
          },
          {
            "key": "effect",
            "label": "Característica"
          }
        ],
        "rows": [
          {
            "name": "Dragão Negro",
            "energy": "Ácido (Destreza)",
            "movement": "Natação",
            "effect": "Golpes Ferais: pode manifestar garras dracônicas, tratadas como armas marciais com acuidade. Pode usar Sabedoria no ataque e dano; causam 1d8 cortante mágico. No 10º nível causam +1d8 ácido; no 17º ambos os d8 viram d10."
          },
          {
            "name": "Dragão Azul",
            "energy": "Elétrico (Destreza)",
            "movement": "Escavação",
            "effect": "Carga Galvanizada: como ação bônus, 1d4 é somado a uma jogada de ataque. Usos por Descanso Longo iguais à proficiência; recupera 1 uso em Descanso Curto. O dado vira d6 no 10º e d8 no 17º."
          },
          {
            "name": "Dragão de Latão",
            "energy": "Fogo (Destreza)",
            "movement": "Escavação",
            "effect": "Percepção Elevada: Especialização em Percepção e não pode ser surpreendido em combate."
          },
          {
            "name": "Dragão de Bronze",
            "energy": "Elétrico (Destreza)",
            "movement": "Natação",
            "effect": "Lutador Especialista: proficiência em Atletismo e pode Agarrar ou Empurrar como ação bônus."
          },
          {
            "name": "Dragão de Cobre",
            "energy": "Ácido (Destreza)",
            "movement": "Escalada",
            "effect": "Influência Lenta: uma vez por Descanso, produz lentidão sem espaço de magia ou componentes, no nível base ou no nível do maior espaço de Cavaleiro Dracônico, o que for maior."
          },
          {
            "name": "Dragão de Cristal",
            "energy": "Radiante (Constituição)",
            "movement": "Escalada",
            "effect": "Absorção Psíquica: ao obter um crítico, recebe PV temporários iguais ao dano causado; ao reduzir criatura hostil a 0 PV, recebe PV temporários iguais ao valor de Constituição dela."
          },
          {
            "name": "Dragão Profundo",
            "energy": "Psíquico (Sabedoria)",
            "movement": "Escavação",
            "effect": "Resiliência Lenta: imune a Lento e a efeitos que reduzam deslocamento sem defini-lo automaticamente como 0; imune à magia lentidão."
          },
          {
            "name": "Dragão de Esmeralda",
            "energy": "Psíquico (Inteligência)",
            "movement": "Escavação",
            "effect": "Olho para Ilusões: vantagem em salvaguardas contra ilusões e a CD de efeitos de ilusão contra os quais faz salvaguarda ou teste é reduzida em 5."
          },
          {
            "name": "Dragão Dourado",
            "energy": "Fogo (Destreza)",
            "movement": "Natação",
            "effect": "Natureza Lendária: usos por Descanso iguais à metade da proficiência. Ao falhar em salvaguarda contra efeito mágico, pode repeti-la e somar a proficiência mesmo que já a estivesse somando."
          },
          {
            "name": "Dragão Verde",
            "energy": "Veneno (Constituição)",
            "movement": "Natação",
            "effect": "Inenvenenável: não pode ser envenenado ou intoxicado e consome alimento/água impróprios sem efeitos negativos."
          },
          {
            "name": "Dragão de Pedra Lunar",
            "energy": "Radiante (Destreza)",
            "movement": "Base (+3 m)",
            "effect": "Dança Onírica: uma vez por Descanso, produz sono sem espaço ou componentes, em nível igual à proficiência; adiciona metade da proficiência a cada d8 rolado pela magia."
          },
          {
            "name": "Dragão de Platina",
            "energy": "Radiante (Destreza)",
            "movement": "Base (+3 m)",
            "effect": "Resiliência Lendária: usos por Descanso Longo iguais à metade da proficiência. Pode fazer uma salvaguarda com vantagem; ou gastar 2 usos após falhar para obter sucesso. Recupera 1 uso em Descanso Curto."
          },
          {
            "name": "Dragão Vermelho",
            "energy": "Fogo (Destreza)",
            "movement": "Escalada",
            "effect": "Inferno Voraz: duas vezes por Descanso Longo, ao acertar um ataque causa +1d8 de fogo por ponto de proficiência. Recupera 1 uso em Descanso Curto."
          },
          {
            "name": "Dragão de Safira",
            "energy": "Trovão (Constituição)",
            "movement": "Escalada",
            "effect": "Escalada Aracnídea: pode caminhar e aderir a superfícies verticais e invertidas sem usar todos os membros."
          },
          {
            "name": "Dragão Prateado",
            "energy": "Frio (Constituição)",
            "movement": "Base (+3 m)",
            "effect": "Visão Cega Prateada: visão às cegas de 3 m × proficiência. Se outra fonte já for igual ou maior, aumenta essa outra fonte em metade do alcance desta característica."
          },
          {
            "name": "Dragão Caveira",
            "energy": "Necrótico (Constituição)",
            "movement": "Escavação",
            "effect": "Matador de Mortos-Vivos: vantagem em testes e salvaguardas contra mortos-vivos e +proficiência no dano quando acerta um morto-vivo."
          },
          {
            "name": "Dragão de Topázio",
            "energy": "Necrótico (Constituição)",
            "movement": "Natação",
            "effect": "Raio Debilitante: pode produzir raio do enfraquecimento sem espaço/componentes como ação bônus, usos por Descanso Longo iguais à proficiência."
          },
          {
            "name": "Dragão Branco",
            "energy": "Frio (Constituição)",
            "movement": "Escavação",
            "effect": "Patinador: terreno difícil não mágico não reduz seu movimento e superfícies escorregadias/congeladas não exigem testes ou salvaguardas para manter equilíbrio."
          },
          {
            "name": "Dragão de Buraco de Minhoca",
            "energy": "Força (Força)",
            "movement": "Aceleração 0-G (2× base)",
            "effect": "Passo de Transição: como ação bônus, teleporta-se para espaço desocupado visível dentro do alcance do movimento restante; a distância é subtraída do deslocamento restante."
          }
        ],
        "page": 127
      },
      {
        "title": "Lista de Magias do Cavaleiro Dracônico",
        "columns": [
          {
            "key": "level",
            "label": "Nível"
          },
          {
            "key": "spells",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "level": "1º",
            "spells": "Flecha Cromática*; Inimigo Dedicado*; Arma Infundida*; Lança Congelante; Sopro Fantasma; Chuva de Luz; Lança Perseguidora; Glaive Varredora; Golpe da Valquíria*"
          },
          {
            "level": "2º",
            "spells": "Chama Contínua; Aumentar/Reduzir*; Chifre de Força; Mordida Fantasmagórica; Rajada de Vento; Névoas Oclusivas; Passagem de Luz; Ver Invisibilidade; Mortalha de Espinhos; Foice Ascendente; Peso das Asas*; Sopro do Wyrm*"
          },
          {
            "level": "3º",
            "spells": "Mortalha de Aura; Cauda Explosiva; Lanças do Dragão Amaldiçoado*; Golpe do Dragão; Pele de Dragão*; Medo; Voo; Passo do Grande Wyrm*; Mortalha Fantasmagórica*; Flecha da Mancha Solar; Broca de Vórtice; Investida Alada"
          },
          {
            "level": "4º",
            "spells": "Luz Morta; Dominar Besta; Gigaexplosão; Onda de Magma; Tornado de Rosas; Donzelas de Escudo*; Bravura Deslacrada*"
          },
          {
            "level": "5º",
            "spells": "Escudo Catastrófico*; Conjurar Eco Dracônico*; Portão da Morte; Onda de Choque*; Subjugar Magia*"
          },
          {
            "level": "6º",
            "spells": "Raio de Wyrm Frenético; Ferir; Palavra de Poder: Fúria*; Visão da Verdade"
          },
          {
            "level": "7º",
            "spells": "Meteoro Galáctico; Mudança de Plano; Regeneração; Inverter Gravidade*; Manto de Queda Estelar*"
          },
          {
            "level": "8º",
            "spells": "Grande Raio de Luciel*; Palavra de Poder: Rugido; Fim Ruinoso"
          },
          {
            "level": "9º",
            "spells": "Ar Diamantino; Extinção; Chuva de Meteoros; Muralha Prismática"
          }
        ],
        "page": 129
      }
    ],
    "references": [
      {
        "title": "MAGIAS MARCADAS COM ASTERISCO",
        "page": 129,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Na lista da classe, magias com asterisco foram publicadas em Lyre’s Guide to Retia ou possuem lá uma versão modificada. As magias do Capítulo 7 de Zagalhta estão integradas ao catálogo do Grimório a partir da v5.10; reimpressões equivalentes são vinculadas à entrada já existente quando apropriado."
      }
    ]
  },
  {
    "id": "frame-pilot",
    "name": "Piloto de Frame",
    "originalName": "Frame Pilot",
    "aliases": [
      "Frame Pilot",
      "Piloto de Frame"
    ],
    "hitDie": "d8",
    "ability": "Variável",
    "saves": "Uma entre Destreza/Constituição/Sabedoria + uma entre Força/Inteligência/Carisma",
    "armor": "Armaduras leves e médias",
    "weapons": "Armas simples e marciais, incluindo armas de fogo",
    "tools": "Nenhuma",
    "skills": "Quaisquer três perícias",
    "sigilKey": "frame-pilot",
    "color": "#7f6d95",
    "desc": "Um especialista em pilotagem de unidades frame que trata a máquina como extensão do próprio corpo, extraindo desempenho acima do limite normal por treinamento, aprimoramentos e Junção.",
    "source": {
      "title": "Somnus Domina — Zagalhta's Exolunar Collection",
      "pages": "131–138",
      "chapter": "Capítulo 6: Opções de Classe — Piloto de Frame"
    },
    "tablePage": 132,
    "overview": [
      {
        "title": "PILOTO DE FRAME",
        "page": 131,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Pilotos de Frame têm treinamento moderado em combate pessoal, mas são operadores excepcionais de unidades frame. Seja por formação militar ou instrução de pilotos veteranos, aprendem a tratar a máquina como extensão do corpo e a extrair dela o máximo potencial."
      },
      {
        "title": "JOGO DE AVENTURA MISTA",
        "page": 131,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Em campanhas que alternam entre combate tradicional e unidades frame, a fonte oferece uma regra opcional: a classe pode ser tomada como especialidade no lugar de um talento, ou apenas em 1 nível. O personagem escolhe uma Designação Tecnológica e recebe suas características nos níveis de personagem correspondentes, mas só pode usá-las com unidades frame. Se tiver tomado 1 nível de Piloto de Frame, também recebe Reparo Pessoal no 11º nível total, Impulso Aprimorado no 13º e Junção pela Vontade no 16º."
      }
    ],
    "creation": [],
    "basics": {
      "title": "CARACTERÍSTICAS DE CLASSE",
      "page": 132,
      "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
      "text": "PONTOS DE VIDA\n\nDado de Vida: 1d8 por nível de Piloto de Frame.\n\nPontos de Vida no 1º nível: 8 + seu modificador de Constituição.\n\nPontos de Vida em níveis superiores: 1d8 (ou 5) + seu modificador de Constituição por nível após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras: leves e médias.\n\nArmas: simples e marciais, incluindo armas de fogo.\n\nFerramentas: nenhuma.\n\nSalvaguardas: escolha uma entre Destreza, Constituição ou Sabedoria; e escolha uma entre Força, Inteligência ou Carisma.\n\nPerícias: quaisquer três à sua escolha.\n\nEQUIPAMENTO\n\nVocê começa com 5d8 × 10 po (225 po em média) e compra o equipamento necessário. Durante a criação pode adquirir um traje Drive Grade leve por 120 po ou médio por 200 po."
    },
    "features": [
      {
        "title": "IMPULSO DE FRAME",
        "level": 1,
        "page": 132,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Quando uma unidade frame for reduzida a 0 PV, você pode fazê-la ficar com 1 PV em vez disso e conceder PV temporários iguais aos seus PV atuais. A unidade então recebe 1 ponto de Fadiga de Combate. Uma vez por Descanso Longo."
      },
      {
        "title": "PROFICIÊNCIA DE FRAME",
        "level": 1,
        "page": 132,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Enquanto pilota uma unidade frame, seu bônus de proficiência, em comparação ao bônus da própria unidade, é considerado 1 ponto maior."
      },
      {
        "title": "CRESCIMENTO",
        "level": 2,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Em cada nível par de Piloto de Frame, um de seus atributos aumenta em 1. Nos níveis 2, 4, 8, 10, 14, 16 e 20, em vez desse benefício você pode receber proficiência em uma perícia ou ferramenta. Nos níveis 6, 12 e 18, pode escolher um talento para o qual cumpra os requisitos em vez do aumento."
      },
      {
        "title": "DESIGNAÇÃO TECNOLÓGICA",
        "level": 3,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Escolha uma Designação Tecnológica que represente seu conjunto particular de habilidades ao pilotar unidades frame. Você recebe as características de 3º nível da designação e, depois, as demais nos níveis indicados."
      },
      {
        "title": "APRIMORAMENTO INERENTE",
        "level": 4,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Escolha um ou mais Aprimoramentos de DGR com custo UP-LOAD combinado de 2 ou menos. Você os disponibiliza em qualquer unidade frame que estiver pilotando sem contar contra o limite de UP-LOAD dela. Usos limitados pertencem a você, não à unidade. A capacidade combinada aumenta em 1 nos níveis 8, 12, 15 e 19; ao ganhar nível, pode trocar as escolhas."
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 5,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Quando realiza a ação Atacar, pode atacar duas vezes em vez de uma."
      },
      {
        "title": "CARACTERÍSTICA DE DESIGNAÇÃO (7º NÍVEL)",
        "level": 7,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 7º nível da Designação Tecnológica escolhida."
      },
      {
        "title": "REPARO PESSOAL",
        "level": 9,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Ao completar Descanso Longo, pode gastar automaticamente qualquer quantidade de seus próprios Dados de Vida, sem benefício pessoal, para permitir que uma unidade frame gaste a mesma quantidade dos Dados de Vida dela. Para cada dado, a unidade recupera o resultado + Constituição dela + seu bônus de proficiência."
      },
      {
        "title": "IMPULSO APRIMORADO",
        "level": 10,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Impulso de Frame passa a poder ser usado uma vez por Descanso em vez de apenas Descanso Longo. Ao usá-lo, os PV temporários concedidos aumentam também em seu nível total."
      },
      {
        "title": "CARACTERÍSTICA DE DESIGNAÇÃO (11º NÍVEL)",
        "level": 11,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 11º nível da Designação Tecnológica escolhida."
      },
      {
        "title": "JUNÇÃO PELA VONTADE",
        "level": 13,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Uma vez por Descanso Longo, enquanto pilota uma unidade frame, pode realizar Junção sem armamento eidólico ou restrições habituais por até 1 minuto. Quando termina, você e a unidade recebem um nível de exaustão. As demais regras de Junção continuam valendo."
      },
      {
        "title": "CARACTERÍSTICA DE DESIGNAÇÃO (16º NÍVEL)",
        "level": 16,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Você recebe a característica de 16º nível da Designação Tecnológica escolhida."
      },
      {
        "title": "JUNÇÃO SUPREMA",
        "level": 17,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Junção pela Vontade passa a ser usada uma vez por Descanso. Você não recebe exaustão ao final e pode permanecer em Junção por até 10 minutos. Restauração de Junção só pode beneficiá-lo uma vez por Descanso Longo e as demais regras, incluindo Fadiga de Junção, continuam em vigor."
      },
      {
        "title": "MÁQUINA SEM IGUAL",
        "level": 20,
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Ao realizar Junção por suas características, pode permanecer em Junção até completar seu próximo Descanso e não sofre Fadiga de Junção."
      }
    ],
    "tables": [],
    "references": [
      {
        "title": "APRIMORAMENTOS DGR E JUNÇÃO",
        "page": 133,
        "sourceTitle": "Somnus Domina — Zagalhta's Exolunar Collection",
        "text": "Aprimoramento Inerente e as características de Junção usam subsistemas de unidades frame apresentados em outras seções do próprio livro. O Grimório preserva as referências mecânicas conforme a fonte sem inventar opções que pertencem a capítulos fora desta integração de classes/subclasses."
      }
    ]
  }
];
  const progressions = {
  "dragoneer": {
    "id": "dragoneer",
    "title": "O Cavaleiro Dracônico",
    "columns": [
      {
        "key": "level",
        "label": "Nível"
      },
      {
        "key": "proficiency",
        "label": "Proficiência"
      },
      {
        "key": "features",
        "label": "Características"
      },
      {
        "key": "wing",
        "label": "Velocidade das Asas"
      },
      {
        "key": "spellsKnown",
        "label": "Magias Conhecidas"
      }
    ],
    "rows": [
      {
        "level": 1,
        "proficiency": "+2",
        "features": [
          "Asas do Avatar",
          "Conceito Central",
          "Conjuração"
        ],
        "wing": "+3 m",
        "spellsKnown": 2
      },
      {
        "level": 2,
        "proficiency": "+2",
        "features": [
          "Escolha de Encarnação",
          "Estilo de Luta"
        ],
        "wing": "+3 m",
        "spellsKnown": 3
      },
      {
        "level": 3,
        "proficiency": "+2",
        "features": [
          "Armadura da Besta",
          "Característica de Conceito Central (3º Nível)"
        ],
        "wing": "+3 m",
        "spellsKnown": 4
      },
      {
        "level": 4,
        "proficiency": "+2",
        "features": [
          "Aumento no Valor de Atributo"
        ],
        "wing": "+4,5 m",
        "spellsKnown": 5
      },
      {
        "level": 5,
        "proficiency": "+3",
        "features": [
          "Ação Encadeada"
        ],
        "wing": "+4,5 m",
        "spellsKnown": 6
      },
      {
        "level": 6,
        "proficiency": "+3",
        "features": [
          "Aprimoramento de Estilo de Luta"
        ],
        "wing": "+6 m",
        "spellsKnown": 7
      },
      {
        "level": 7,
        "proficiency": "+3",
        "features": [
          "Característica de Conceito Central (7º Nível)",
          "Golpe Encarnado"
        ],
        "wing": "+6 m",
        "spellsKnown": 8
      },
      {
        "level": 8,
        "proficiency": "+3",
        "features": [
          "Aumento no Valor de Atributo"
        ],
        "wing": "+6 m",
        "spellsKnown": 9
      },
      {
        "level": 9,
        "proficiency": "+4",
        "features": [
          "Sopro do Dragão",
          "Imunidade Encarnada"
        ],
        "wing": "+9 m",
        "spellsKnown": 10
      },
      {
        "level": 10,
        "proficiency": "+4",
        "features": [
          "Um Sonho de Voo",
          "Aprimoramento de Estilo de Luta"
        ],
        "wing": "+9 m",
        "spellsKnown": 11
      },
      {
        "level": 11,
        "proficiency": "+4",
        "features": [
          "Voo de Passagem"
        ],
        "wing": "+9 m",
        "spellsKnown": 12
      },
      {
        "level": 12,
        "proficiency": "+4",
        "features": [
          "Aumento no Valor de Atributo"
        ],
        "wing": "+12 m",
        "spellsKnown": 12
      },
      {
        "level": 13,
        "proficiency": "+5",
        "features": [
          "Característica de Conceito Central (13º Nível)"
        ],
        "wing": "+12 m",
        "spellsKnown": 13
      },
      {
        "level": 14,
        "proficiency": "+5",
        "features": [
          "Colisor de Almas"
        ],
        "wing": "+12 m",
        "spellsKnown": 13
      },
      {
        "level": 15,
        "proficiency": "+5",
        "features": [
          "Aprimoramento de Estilo de Luta"
        ],
        "wing": "+15 m",
        "spellsKnown": 14
      },
      {
        "level": 16,
        "proficiency": "+5",
        "features": [
          "Aumento no Valor de Atributo"
        ],
        "wing": "+15 m",
        "spellsKnown": 14
      },
      {
        "level": 17,
        "proficiency": "+6",
        "features": [
          "Característica de Conceito Central (17º Nível)"
        ],
        "wing": "+15 m",
        "spellsKnown": 15
      },
      {
        "level": 18,
        "proficiency": "+6",
        "features": [
          "Aprimoramento do Sopro do Dragão"
        ],
        "wing": "+18 m",
        "spellsKnown": 15
      },
      {
        "level": 19,
        "proficiency": "+6",
        "features": [
          "Aumento no Valor de Atributo"
        ],
        "wing": "+18 m",
        "spellsKnown": 15
      },
      {
        "level": 20,
        "proficiency": "+6",
        "features": [
          "Encarnação Ascendida"
        ],
        "wing": "+18 m",
        "spellsKnown": 15
      }
    ]
  },
  "frame-pilot": {
    "id": "frame-pilot",
    "title": "O Piloto de Frame",
    "columns": [
      {
        "key": "level",
        "label": "Nível"
      },
      {
        "key": "proficiency",
        "label": "Proficiência"
      },
      {
        "key": "features",
        "label": "Características"
      },
      {
        "key": "enhancement",
        "label": "Aprimoramento"
      },
      {
        "key": "growth",
        "label": "Crescimento"
      }
    ],
    "rows": [
      {
        "level": 1,
        "proficiency": "+2",
        "features": [
          "Impulso de Frame",
          "Proficiência de Frame"
        ],
        "enhancement": "—",
        "growth": "—"
      },
      {
        "level": 2,
        "proficiency": "+2",
        "features": [
          "Crescimento"
        ],
        "enhancement": "—",
        "growth": "Perícia"
      },
      {
        "level": 3,
        "proficiency": "+2",
        "features": [
          "Designação Tecnológica"
        ],
        "enhancement": "—",
        "growth": "—"
      },
      {
        "level": 4,
        "proficiency": "+2",
        "features": [
          "Aprimoramento Inerente"
        ],
        "enhancement": 2,
        "growth": "Perícia"
      },
      {
        "level": 5,
        "proficiency": "+3",
        "features": [
          "Ataque Extra"
        ],
        "enhancement": 2,
        "growth": "—"
      },
      {
        "level": 6,
        "proficiency": "+3",
        "features": [],
        "enhancement": 2,
        "growth": "Talento"
      },
      {
        "level": 7,
        "proficiency": "+3",
        "features": [
          "Característica de Designação (7º Nível)"
        ],
        "enhancement": 2,
        "growth": "—"
      },
      {
        "level": 8,
        "proficiency": "+3",
        "features": [],
        "enhancement": 3,
        "growth": "Perícia"
      },
      {
        "level": 9,
        "proficiency": "+4",
        "features": [
          "Reparo Pessoal"
        ],
        "enhancement": 3,
        "growth": "—"
      },
      {
        "level": 10,
        "proficiency": "+4",
        "features": [
          "Impulso Aprimorado"
        ],
        "enhancement": 3,
        "growth": "Perícia"
      },
      {
        "level": 11,
        "proficiency": "+4",
        "features": [
          "Característica de Designação (11º Nível)"
        ],
        "enhancement": 3,
        "growth": "—"
      },
      {
        "level": 12,
        "proficiency": "+4",
        "features": [],
        "enhancement": 4,
        "growth": "Talento"
      },
      {
        "level": 13,
        "proficiency": "+5",
        "features": [
          "Junção pela Vontade"
        ],
        "enhancement": 4,
        "growth": "—"
      },
      {
        "level": 14,
        "proficiency": "+5",
        "features": [],
        "enhancement": 4,
        "growth": "Perícia"
      },
      {
        "level": 15,
        "proficiency": "+5",
        "features": [],
        "enhancement": 5,
        "growth": "—"
      },
      {
        "level": 16,
        "proficiency": "+5",
        "features": [
          "Característica de Designação (16º Nível)"
        ],
        "enhancement": 5,
        "growth": "Perícia"
      },
      {
        "level": 17,
        "proficiency": "+6",
        "features": [
          "Junção Suprema"
        ],
        "enhancement": 5,
        "growth": "—"
      },
      {
        "level": 18,
        "proficiency": "+6",
        "features": [],
        "enhancement": 5,
        "growth": "Talento"
      },
      {
        "level": 19,
        "proficiency": "+6",
        "features": [],
        "enhancement": 6,
        "growth": "—"
      },
      {
        "level": 20,
        "proficiency": "+6",
        "features": [
          "Máquina sem Igual"
        ],
        "enhancement": 6,
        "growth": "Perícia"
      }
    ]
  }
};

  if (!window.GRIMORIO_CLASSES) window.GRIMORIO_CLASSES = [];
  if (!window.GRIMORIO_CLASS_PROGRESSIONS) window.GRIMORIO_CLASS_PROGRESSIONS = {};
  for (const classData of classes) {
    if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
    window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressions[classData.id];
  }
})();
