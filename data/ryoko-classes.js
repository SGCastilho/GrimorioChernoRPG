'use strict';

(function () {
  const classes = [
  {
    "id": "bender-ryoko",
    "name": "Dobrador",
    "originalName": "Bender",
    "aliases": [
      "Bender",
      "Dobrador",
      "Element Bender"
    ],
    "hitDie": "d8",
    "ability": "Inteligência, Sabedoria ou Carisma (escolha no 1º nível)",
    "saves": "Força, Constituição",
    "armor": "Armaduras leves",
    "weapons": "Armas simples, chakrams, nunchaku, espadas curtas, shuriken, starknives e twinblades",
    "tools": "Um tipo de ferramenta de artesão ou um instrumento musical",
    "skills": "Escolha duas entre Acrobacia, Atletismo, História, Intuição, Religião e Furtividade",
    "sigilKey": "bender-ryoko",
    "color": "#4c8c7b",
    "desc": "Um artista marcial elemental que manipula a Trama por movimentos precisos, combinando golpes mágicos, conjuração preparada e afinidades com ar, terra, fogo e água.",
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "156–173",
      "chapter": "Capítulo 9: Classes — Dobrador"
    },
    "tablePage": 157,
    "overview": [
      {
        "title": "O DOBRADOR",
        "text": "Dobradores unem virtuosismo físico e mágico. Podem estudar vários elementos ou concentrar-se repetidamente no mesmo, aprofundando a potência de suas magias."
      }
    ],
    "creation": [
      {
        "title": "CRIAÇÃO RÁPIDA",
        "text": "Coloque seu maior atributo na habilidade escolhida para conjuração — Inteligência, Sabedoria ou Carisma — e o seguinte em Destreza. A fonte sugere o antecedente Elementalista."
      }
    ],
    "basics": {
      "title": "Fundamentos do Dobrador",
      "page": 157,
      "sourceTitle": "Ryoko's Guide to the Yokai Realms",
      "text": "Dado de Vida: 1d8 por nível. PV no 1º nível: 8 + Constituição. PV em níveis superiores: 1d8 (ou 5) + Constituição. Armaduras: leves. Armas: simples, chakrams, nunchaku, espadas curtas, shuriken, starknives e twinblades. Ferramentas: um conjunto de ferramentas de artesão ou um instrumento musical. Salvaguardas: Força e Constituição. Perícias: escolha duas entre Acrobacia, Atletismo, História, Intuição, Religião e Furtividade. Equipamento: bordão/chakram/arma simples; pacote de explorador ou aventureiro; armadura de couro e 10 shuriken; ou 5d4 × 10 po. Multiclasse: 13 na habilidade de conjuração escolhida; ao entrar por multiclasse, ganha armas simples."
    },
    "features": [
      {
        "title": "CONJURAÇÃO",
        "level": 1,
        "page": 158,
        "text": "Você conjura magias de Dobrador por meio de movimentos precisos. Conhece os truques indicados na progressão e prepara um número de magias igual ao modificador de sua habilidade de conjuração + metade do seu nível de Dobrador (arredondado para baixo, mínimo 1). Recupera espaços em Descanso Longo. Ao obter o 1º nível, escolha Inteligência, Sabedoria ou Carisma como sua habilidade de conjuração. Pode conjurar como ritual magias de Dobrador com a etiqueta ritual que estejam preparadas e pode usar uma mão livre como foco, inclusive para componentes somáticos e materiais sem custo e não consumidos.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "AFINIDADE ELEMENTAL",
        "level": 1,
        "page": 159,
        "text": "Escolha ar, terra, fogo ou água. As magias associadas ao elemento passam a integrar sua lista de Dobrador. Ar está associado a trovão; terra a ácido e concussão; fogo a fogo e elétrico; água a frio. No 6º, 10º e 14º níveis você ganha outra Afinidade: ao escolher um elemento novo, adicione sua lista e aprenda um truque dela sem contar no limite; ao repetir um elemento, magias daquela lista são conjuradas como se o espaço gasto fosse 1 nível maior para cada repetição, acumulando até +3 níveis.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GOLPES ELEMENTAIS",
        "level": 1,
        "page": 160,
        "text": "Ao realizar a ação Atacar, você pode substituir um ou mais ataques por Golpes Elementais, escolhendo um tipo de dano ligado a uma Afinidade. Corpo a corpo: ataque mágico corpo a corpo, tratado como ataque desarmado, alcance de 3 m, causando 1d6 + modificador de conjuração. À distância: ataque mágico à distância, alcance de 18 m, causando 1d4 + modificador de conjuração. O dano não escala com nível; bônus de itens mágicos aos ataques e danos de golpes desarmados também se aplicam aos Golpes Elementais.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "COMBO ELEMENTAL",
        "level": 2,
        "page": 161,
        "text": "Em seu turno, depois de realizar um ataque de arma ou Golpe Elemental, ou conjurar uma magia de Dobrador de 1º nível ou superior, use uma ação bônus para liberar energia elemental. Faça um ataque mágico corpo a corpo contra alvo a 3 m ou à distância contra alvo a 18 m. Em acerto, causa 1d4 de um tipo ligado a uma Afinidade; se o alvo estiver a até 3 m, some seu modificador de conjuração. O dano aumenta para 2d4 no 6º nível, 3d4 no 10º e 4d4 no 14º.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "DISCIPLINA DE DOBRADOR",
        "level": 3,
        "page": 161,
        "text": "Escolha uma Disciplina de Dobrador. Ela concede características no 3º, 7º, 15º e 20º níveis.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "APRIMORAMENTO NO VALOR DE HABILIDADE",
        "level": 4,
        "page": 161,
        "text": "No 4º, 8º, 12º, 16º e 19º níveis, aumente um atributo em 2 ou dois atributos em 1, sem ultrapassar 20. Se a mesa usar talentos opcionais, você pode escolher um talento no lugar deste benefício.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATAQUE EXTRA",
        "level": 5,
        "page": 161,
        "text": "Você pode atacar duas vezes, em vez de uma, sempre que realiza a ação Atacar. Os Golpes Superiores associados indicados pela fonte são Rajada para ataques corpo a corpo e Golpe de Bateria para ataques à distância, ambos vinculados à técnica avançada Pugilista de grau 2.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FORMA PRIMORDIAL",
        "level": 11,
        "page": 162,
        "text": "Como ação bônus, escolha um elemento com o qual possua Afinidade e assuma sua forma primordial por 1 minuto ou até ficar inconsciente. Durante o efeito, você pode conjurar as magias de 1º nível daquele elemento mesmo sem tê-las preparadas e sem gastar espaços (essas conjurações gratuitas não recebem o aumento automático de Afinidades repetidas). Ar: resistência a concussão, cortante e perfurante. Terra: +2 na CA. Fogo: ao fim de cada turno, criaturas escolhidas a até 3 m sofrem dano de fogo igual ao seu modificador de conjuração (mín. 1). Água: recebe uma reserva de vitalidade igual a 5 × seu nível; ao fim de cada turno, pode curar até três criaturas a 3 m em 5 PV cada, gastando a mesma quantidade da reserva. Uma vez por Descanso Longo. A partir do 17º nível, enquanto estiver nessa forma, também pode conjurar magias de 2º nível ou menores sem gastar espaços.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "AVATAR PRIMORDIAL",
        "level": 18,
        "page": 163,
        "text": "Como ação, torne-se uma encarnação primordial por 10 minutos ou até ficar inconsciente e ganhe 50 PV temporários. Para cada Afinidade Elemental possuída, inclusive repetições, receba o benefício correspondente da tabela de Avatar Primordial; múltiplas Afinidades no mesmo elemento liberam benefícios progressivos. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Afinidades Elementais",
        "page": 159,
        "columns": [
          {
            "key": "elemento",
            "label": "Elemento"
          },
          {
            "key": "dano",
            "label": "Tipos de dano associados"
          },
          {
            "key": "efeito",
            "label": "Acesso"
          }
        ],
        "rows": [
          {
            "elemento": "Ar",
            "dano": "Trovão",
            "efeito": "Lista de magias de Ar"
          },
          {
            "elemento": "Terra",
            "dano": "Ácido e concussão",
            "efeito": "Lista de magias de Terra"
          },
          {
            "elemento": "Fogo",
            "dano": "Fogo e elétrico",
            "efeito": "Lista de magias de Fogo"
          },
          {
            "elemento": "Água",
            "dano": "Frio",
            "efeito": "Lista de magias de Água"
          }
        ]
      },
      {
        "title": "Avatar Primordial — Ar",
        "page": 163,
        "columns": [
          {
            "key": "afinidades",
            "label": "Afinidades"
          },
          {
            "key": "beneficio",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "afinidades": "1",
            "beneficio": "Deslocamento de caminhada +4,5 m; deslocamento de voo de 18 m."
          },
          {
            "afinidades": "2",
            "beneficio": "Imunidade a trovão e às condições agarrado e restringido."
          },
          {
            "afinidades": "3",
            "beneficio": "Uma vez em cada turno, conjure Passo Nebuloso sem espaço e sem ação; não pode se estiver incapacitado."
          },
          {
            "afinidades": "4",
            "beneficio": "Caminhada e voo +4,5 m adicionais; fica sob os efeitos de Liberdade de Movimento."
          }
        ]
      },
      {
        "title": "Avatar Primordial — Terra",
        "page": 163,
        "columns": [
          {
            "key": "afinidades",
            "label": "Afinidades"
          },
          {
            "key": "beneficio",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "afinidades": "1",
            "beneficio": "Nova CA: 14 + modificador de conjuração de Dobrador."
          },
          {
            "afinidades": "2",
            "beneficio": "Imunidade a ácido e sucesso automático em salvaguardas contra movimento forçado ou cair no chão."
          },
          {
            "afinidades": "3",
            "beneficio": "No início de cada turno, ganha 3d6 PV temporários."
          },
          {
            "afinidades": "4",
            "beneficio": "Pode conjurar Escudo ou Palavra de Proteção sem espaço nem reação; uma dessas conjurações por rodada, desde que não esteja incapacitado."
          }
        ]
      },
      {
        "title": "Avatar Primordial — Fogo",
        "page": 163,
        "columns": [
          {
            "key": "afinidades",
            "label": "Afinidades"
          },
          {
            "key": "beneficio",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "afinidades": "1",
            "beneficio": "Primeiro ataque que acerta a cada turno causa +2d6 de fogo ou elétrico (escolha ao receber o benefício)."
          },
          {
            "afinidades": "2",
            "beneficio": "Imunidade a fogo."
          },
          {
            "afinidades": "3",
            "beneficio": "Pode conjurar Repreensão Infernal no 2º nível sem espaço nem reação, no máximo uma vez até o início do seu próximo turno."
          },
          {
            "afinidades": "4",
            "beneficio": "Fica sob os efeitos de Escudo de Fogo (escudo quente)."
          }
        ]
      },
      {
        "title": "Avatar Primordial — Água",
        "page": 163,
        "columns": [
          {
            "key": "afinidades",
            "label": "Afinidades"
          },
          {
            "key": "beneficio",
            "label": "Benefício"
          }
        ],
        "rows": [
          {
            "afinidades": "1",
            "beneficio": "Deslocamento de natação de 18 m; uma vez em cada turno, pode Ajudar uma criatura visível a 9 m sem ação."
          },
          {
            "afinidades": "2",
            "beneficio": "Imunidade a frio."
          },
          {
            "afinidades": "3",
            "beneficio": "Quando criatura visível a 9 m obtém sucesso em salvaguarda ou ataque, force-a a rerrolar e usar o menor resultado; uma vez até o início do seu próximo turno."
          },
          {
            "afinidades": "4",
            "beneficio": "Fica sob os efeitos de Visão da Verdade."
          }
        ]
      },
      {
        "title": "Magias de Dobrador — Ar",
        "page": 164,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "Truques",
            "magias": "Concussão; Golpe Impetuoso; Cortina de Fumaça; Amortecer Queda"
          },
          {
            "nivel": "1º",
            "magias": "Leque Cromático; Retirada Acelerada; Queda Suave; Névoa; Gargalhada Nefasta; Salto; Passos Longos; Palma Repulsora; Onda Trovejante; Servo Invisível; Draco de Vento"
          },
          {
            "nivel": "2º",
            "magias": "Nublar; Acalmar o Ar; Aprimorar Habilidade (Graça do Gato); Lufada de Vento; Levitação; Imagem Espelhada; Passo Nebuloso; Redirecionar Relâmpago; Despedaçar; Silêncio; Golpe de Vento"
          },
          {
            "nivel": "3º",
            "magias": "Convocar Relâmpagos; Carga de Profundidade; Granada de Luz; Voo; Forma Gasosa; Velocidade; Troca-Troca; Muralha de Vento"
          },
          {
            "nivel": "4º",
            "magias": "Passo pelas Nuvens; Conjurar Elementais Menores (ar); Porta Dimensional; Liberdade de Movimento; Terreno Alucinatório; Céu Dilacerante; Transformação Tempestuosa"
          },
          {
            "nivel": "5º",
            "magias": "Conjurar Elemental (ar); Ciclone; Umigiri de Iminada; Despistar; Ligação Planar (elemental do ar); Fúria Dilacerante de Raiko"
          }
        ]
      },
      {
        "title": "Magias de Dobrador — Terra",
        "page": 164,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "Truques",
            "magias": "Salpicar Ácido; Punho Terrestre; Reforçar; Resistência; Bordão Místico"
          },
          {
            "nivel": "1º",
            "magias": "Uppercut Terrestre; Constrição; Vida Falsa; Disco Flutuante; Bom Fruto; Graxa; Escudo"
          },
          {
            "nivel": "2º",
            "magias": "Flecha Ácida; Pele de Árvore; Acalmar a Terra; Pele Terrestre; Aprimorar Habilidade (Vigor do Urso ou Força do Touro); Proteção; Proteção contra Veneno; Palavra de Proteção; Mordida de Serpente; Crescer Espinhos"
          },
          {
            "nivel": "3º",
            "magias": "Chuva Ácida; Mesclar-se às Rochas; Bola de Lodo"
          },
          {
            "nivel": "4º",
            "magias": "Conjurar Elementais Menores (terra); Tumba de Rocha; Tempestade de Ardósia; Pele de Aço; Moldar Rochas; Pele de Pedra"
          },
          {
            "nivel": "5º",
            "magias": "Conjurar Elemental (terra); Erupção; Carapaça Adamantina de Nomi; Criar Passagem (pedra); Ligação Planar (elemental da terra); Muralha de Pedra"
          }
        ]
      },
      {
        "title": "Magias de Dobrador — Fogo",
        "page": 164,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "Truques",
            "magias": "Luzes Dançantes; Raio de Fogo; Golpe Incendiário; Luz; Ilusão Menor; Toque Chocante; Faísca"
          },
          {
            "nivel": "1º",
            "magias": "Mãos Flamejantes; Leque Cromático; Fogo das Fadas; Clarão; Repreensão Infernal; Heroísmo; Chama Interior; Imagem Silenciosa"
          },
          {
            "nivel": "2º",
            "magias": "Acalmar as Chamas; Chama Contínua; Aprimorar Habilidade (Esplendor da Águia); Lâmina Flamejante; Esfera Flamejante; Esquentar Metal; Invisibilidade; Redirecionar Relâmpago; Raio Ardente; Fúria de Wanyūdō"
          },
          {
            "nivel": "3º",
            "magias": "Luz do Dia; Bola de Fogo; Salto do Tigre Flamejante; Velocidade; Relâmpago; Imagem Maior"
          },
          {
            "nivel": "4º",
            "magias": "Conjurar Elementais Menores (fogo); Escudo de Fogo (quente); Invisibilidade Maior; Rugido do Leão; Muralha de Fogo"
          },
          {
            "nivel": "5º",
            "magias": "Conjurar Elemental (fogo); Coluna de Chamas; Pele Febril; Lanterna de Magatsuchi; Ligação Planar (elemental do fogo); Fúria Dilacerante de Raiko"
          }
        ]
      },
      {
        "title": "Magias de Dobrador — Água",
        "page": 165,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "Truques",
            "magias": "Orientação; Alfinetes e Agulhas; Raio de Gelo; Poupar os Moribundos; Chicote de Água"
          },
          {
            "nivel": "1º",
            "magias": "Enfeitiçar Pessoa; Comando; Criar ou Destruir Água; Detectar Veneno e Doença; Lua de Gelo; Purificar Alimentos e Bebidas"
          },
          {
            "nivel": "2º",
            "magias": "Ajuda; Trama de Sangue; Acalmar Emoções; Acalmar as Águas; Sanguessuga Vital; Aprimorar Habilidade (Sabedoria da Coruja); Imobilizar Pessoa; Restauração Menor; Espelho da Reflexão; Correnteza; Sugestão"
          },
          {
            "nivel": "3º",
            "magias": "Chuva Ácida; Clarividência; Extrair Shirikodama; Padrão Hipnótico; Revelação de Ryoko; Nevasca; Lentidão; Descompressão; Respirar na Água; Andar na Água; Serpe de Água"
          },
          {
            "nivel": "4º",
            "magias": "Gaiola de Lágrimas Congeladas; Passo pelas Nuvens; Compulsão; Conjurar Elementais Menores (água); Controlar Água; Adivinhação; Tempestade de Gelo"
          },
          {
            "nivel": "5º",
            "magias": "Nevasca Abençoada de Bakuryō; Cone de Frio; Conjurar Elemental (água); Dominar Pessoa; Imobilizar Monstro; Umigiri de Iminada; Ligação Planar (elemental da água); Vidência; Muralha de Água Branca"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "MULTICLASSE",
        "page": 157,
        "text": "Para entrar ou sair da classe por multiclasse, você precisa ter 13 ou mais na habilidade de conjuração escolhida. Ao obter o primeiro nível de Dobrador por multiclasse, recebe proficiência com armas simples.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATAQUE EXTRA APRIMORADO (OPCIONAL)",
        "page": 149,
        "text": "A fonte oferece uma substituição opcional para Ataque Extra. No 7º nível, quando realiza a ação Atacar, você pode substituir um dos ataques pela conjuração de um truque conhecido da lista de Dobrador com tempo de conjuração de 1 ação; ele é conjurado em seu nível mínimo, sem escalonamento de truque.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ]
  },
  {
    "id": "tamer-ryoko",
    "name": "Domador",
    "originalName": "Tamer",
    "aliases": [
      "Tamer",
      "Domador"
    ],
    "hitDie": "d8",
    "ability": "Inteligência, Sabedoria ou Carisma (escolha para conjuração)",
    "saves": "Constituição, Carisma",
    "armor": "Armaduras leves e médias, escudos",
    "weapons": "Armas simples, redes",
    "tools": "Um tipo de ferramenta de artesão ou instrumento musical",
    "skills": "Escolha duas entre Adestrar Animais, Intuição, Medicina, Natureza, Percepção e Persuasão",
    "sigilKey": "tamer-ryoko",
    "color": "#9b6b43",
    "desc": "Um treinador de monstros que luta através de companheiros capturados em receptáculos mágicos, aprimorando-os, comandando-os e reforçando-os com magia de suporte.",
    "source": {
      "title": "Ryoko's Guide to the Yokai Realms",
      "pages": "191–200",
      "chapter": "Capítulo 9: Classes — Domador (reimpresso para referência)"
    },
    "tablePage": 192,
    "overview": [
      {
        "title": "O DOMADOR",
        "text": "A classe Domador é reproduzida em Ryoko’s Guide para facilitar a referência de sua subclasse Sensei. Seu núcleo é a criação de vínculos com companheiros, que utilizam seu bônus de proficiência e recebem melhorias à medida que você avança."
      }
    ],
    "creation": [
      {
        "title": "CRIAÇÃO RÁPIDA",
        "text": "Escolha Sabedoria, Inteligência ou Carisma como seu atributo mais alto e Constituição em seguida."
      }
    ],
    "basics": {
      "title": "Fundamentos do Domador",
      "page": 192,
      "sourceTitle": "Ryoko's Guide to the Yokai Realms",
      "text": "Dado de Vida: 1d8 por nível. PV no 1º nível: 8 + Constituição. PV em níveis superiores: 1d8 (ou 5) + Constituição. Armaduras: leves, médias e escudos. Armas: simples e redes. Ferramentas: um tipo de ferramenta de artesão ou instrumento musical. Salvaguardas: Constituição e Carisma. Perícias: escolha duas entre Adestrar Animais, Intuição, Medicina, Natureza, Percepção e Persuasão. Equipamento: cota de escamas ou couro; arma simples corpo a corpo, rede e escudo; besta leve e 20 virotes; pacote de aventureiro ou explorador; ou 5d4 × 10 po. Multiclasse: 13 em Inteligência, Sabedoria ou Carisma — o atributo escolhido deve ser sua habilidade de conjuração de Domador; ganha armadura leve, escudos, armas simples e redes; conta metade dos níveis, arredondada para baixo, para espaços multiclasse."
    },
    "features": [
      {
        "title": "FAMILIAR DE BOLSO",
        "level": 1,
        "page": 193,
        "text": "Você se vincula a uma criatura Pequena ou menor, ND 1/2 ou menos, que não seja Humanoide, Gigante ou enxame. Ela se torna seu companheiro, usa o máximo médio de seus Dados de Vida e não conjura magias. Fora de campo, permanece em estase dentro de um receptáculo mágico. Como ação, segurando o receptáculo, invoque-a em espaço visível a 9 m ou a 1,5 m; como ação ou ação bônus, recolha um companheiro a até 9 m. Apenas um pode estar invocado de cada vez. Em combate ele compartilha sua iniciativa, age logo depois de você e, salvo comando por ação ou ação bônus, usa Esquivar-se; a partir do 5º nível pode usar Multiataque. O companheiro obtém Descanso Longo com você, pode usar equipamento compatível e vincular-se a até três objetos para levá-los ao receptáculo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "VÍNCULO DA ALMA",
        "level": 1,
        "page": 194,
        "text": "Companheiros fazem salvaguardas contra a morte como personagens. Um companheiro estabilizado fica inconsciente até recuperar PV ou você terminar um Descanso Longo; se estiver estável com 0 PV ao fim desse descanso, recupera metade do máximo. Você possui uma reserva de cura igual a 5 × seu nível de Domador, restaurada em Descanso Longo. Ao terminar um Descanso Curto, distribua pontos restantes dessa reserva entre seus companheiros para curá-los.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TREINADOR DE MONSTROS",
        "level": 1,
        "page": 194,
        "text": "Seus companheiros usam seu bônus de proficiência no lugar do próprio. Ao receber um Aprimoramento no Valor de Habilidade nesta classe, cada companheiro ganha 1 Dado de Vida adicional e aumenta o máximo de PV pelo resultado + Constituição (mín. 0). A cada nível de Domador após o 1º, cada companheiro ganha uma Melhoria de Companheiro; novos companheiros recebem retroativamente Dados de Vida e melhorias conforme seu nível e ND.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "DOMAR CRIATURA",
        "level": 1,
        "page": 196,
        "text": "Prepare um receptáculo durante 8 horas, usando materiais com valor em po de pelo menos 100 × o ND do alvo. Como ação, arremesse um receptáculo vazio contra uma criatura visível a 9 m; ela faz salvaguarda de Carisma contra sua CD de magia. O alvo tem sucesso automático se for Humanoide, Gigante ou enxame, exceder seu tamanho/ND máximo, exceder a capacidade do receptáculo ou possuir mais da metade dos PV. Se for elegível e tiver menos de 10 PV ou até um quarto do máximo, falha automaticamente. Em falha, fica aprisionado e torna-se companheiro ao fim do seu próximo Descanso Longo. Ao tornar-se companheiro, perde conjuração, ações de invocação/criação, Regeneração, Rejuvenescimento, Resistência Lendária, cura ilimitada, ações lendárias/míticas e efeitos de covil/região, conforme a lista da fonte.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "CONJURAÇÃO",
        "level": 2,
        "page": 197,
        "text": "Você aprende truques e magias de Domador conforme a progressão. Magias conhecidas podem ser trocadas ao ganhar nível. Ao receber seu primeiro nível de conjuração na classe, escolha Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Recupera espaços em Descanso Longo e pode usar o receptáculo de um companheiro como foco.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REFORÇAR",
        "level": 2,
        "page": 198,
        "text": "Enquanto seu companheiro estiver a até 30 m e você segurar o receptáculo dele — ou enquanto estiver dentro do receptáculo que você segura — use uma ação e gaste um espaço de magia. O companheiro recupera PV iguais ao seu modificador de conjuração (mín. 1) + 2d4 por nível do espaço gasto.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "VÍNCULO PSÍQUICO",
        "level": 2,
        "page": 198,
        "text": "Enquanto um companheiro estiver a até 30 m, você pode comunicar-se telepaticamente com ele. Como ação, veja e ouça por seus sentidos até o início do seu próximo turno, ficando cego e surdo pelos próprios sentidos. Troca de Magia: se o companheiro estiver invocado a até 30 m e você segurar seu receptáculo, as magias conhecidas por ele entram em suas magias conhecidas; além disso, magias de alcance pessoal ou toque podem ter o companheiro como alvo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "FAMÍLIA DE BOLSO",
        "level": 3,
        "page": 198,
        "text": "O número de companheiros vinculados aumenta para 2 no 3º nível, 3 no 7º, 4 no 11º, 5 no 15º e 6 no 19º. O tamanho máximo passa a Médio no 5º nível, Grande no 11º e Enorme no 17º. Ao exceder o limite, libere um companheiro. Novos companheiros recebem melhorias e Dados de Vida conforme a tabela Resumo de Companheiros.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PARADIGMA DE TREINAMENTO",
        "level": 3,
        "page": 198,
        "text": "Escolha um Paradigma de Treinamento. Ele concede características no 3º, 7º, 10º e 14º níveis; no 18º nível, sua característica de 7º nível é aprimorada.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "APRIMORAMENTO NO VALOR DE HABILIDADE",
        "level": 4,
        "page": 199,
        "text": "No 4º, 8º, 12º, 16º e 19º níveis, aumente um atributo em 2 ou dois em 1, sem ultrapassar 20.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "MULTIATAQUE",
        "level": 5,
        "page": 199,
        "text": "Ao usar uma ação ou ação bônus para comandar seu companheiro, você pode ordenar que ele use a ação Multiataque, caso possua.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PRESENÇA MALEÁVEL",
        "level": 5,
        "page": 199,
        "text": "Ao comandar um companheiro a até 30 m, escolha criatura visível e comportamento Agressivo ou Cauteloso. Por 1 minuto, no início dos turnos do alvo, se estiver a até 9 m do companheiro e puder vê-lo, ele faz salvaguarda de Sabedoria. Em falha: Agressivo impõe desvantagem em ataques contra criaturas que não sejam o companheiro; Cauteloso impõe desvantagem em ataques contra o companheiro se houver outra criatura hostil ao atacante a 1,5 m dele. Uma vez por Descanso Curto ou Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "ATAQUE ALFA",
        "level": 6,
        "page": 199,
        "text": "Como parte da ação usada para invocar um companheiro, você pode comandá-lo a realizar uma ação de sua ficha ou outra ação em seu turno. Usos iguais ao modificador de conjuração de Domador (mín. 1), recuperados em Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "GOLPES DETERMINADOS",
        "level": 6,
        "page": 199,
        "text": "Os ataques de seus companheiros contam como mágicos para superar resistência e imunidade a ataques e danos não mágicos.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "TROCA-TROCA",
        "level": 13,
        "page": 199,
        "text": "Enquanto você e um companheiro estiverem a até 30 m um do outro, use ação bônus ou reação quando um dos dois for alvo de um ataque de atacante visível para trocar magicamente de lugar. Se usado como reação, quem chega ao espaço torna-se o novo alvo. Usos iguais ao modificador de conjuração (mín. 1) por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "PRESENÇA MAGNÍFICA",
        "level": 17,
        "page": 200,
        "text": "Ao comandar um companheiro a até 30 m, escolha por 1 minuto: Pose Provocadora — criaturas hostis que o vejam a até 4,5 m têm desvantagem para atacar qualquer outra criatura; ou Violeta Tímida — criaturas hostis têm desvantagem para atacar o companheiro se houver outra criatura hostil ao atacante a até 4,5 m dele. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "INVOCAR A HORDA",
        "level": 20,
        "page": 200,
        "text": "Como ação, invoque companheiros adicionais por 1 minuto, mantendo no máximo três simultaneamente devido a esta característica. Em turnos seguintes, use uma ação para emitir comandos mentais a todos eles de uma vez, escolhendo a ordem em que agem. Ao fim do minuto, todos menos um retornam aos receptáculos e você não pode mover-se nem realizar ações até o fim do seu próximo turno. Uma vez por Descanso Longo.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ],
    "tables": [
      {
        "title": "Treinamento de Melhorias do Companheiro",
        "page": 194,
        "columns": [
          {
            "key": "melhoria",
            "label": "Melhoria"
          },
          {
            "key": "efeito",
            "label": "Efeito"
          }
        ],
        "rows": [
          {
            "melhoria": "Treino de Velocidade",
            "efeito": "Aumente um deslocamento existente em 4,5 m, até no máximo 150% do deslocamento-base, arredondando para incremento de 1,5 m."
          },
          {
            "melhoria": "Endurecer",
            "efeito": "O companheiro ganha 1 Dado de Vida adicional; aumente o máximo de PV rolando-o e somando Constituição (mín. 0)."
          },
          {
            "melhoria": "Aprimorar Atributo",
            "efeito": "Aumente um atributo do companheiro em 1, até 20."
          },
          {
            "melhoria": "Ir à Garganta",
            "efeito": "+1 em ataques e danos de armas naturais ou golpes desarmados. Pode ser escolhida uma vez; duas a partir do 5º nível e três a partir do 9º."
          },
          {
            "melhoria": "Instintos de Sobrevivência",
            "efeito": "Proficiência em uma salvaguarda."
          },
          {
            "melhoria": "Treino de Guerra",
            "efeito": "Proficiência em um tipo de armadura ou em duas armas; armaduras médias/pesadas exigem proficiências anteriores adequadas."
          }
        ]
      },
      {
        "title": "Resumo de Companheiros do Domador",
        "page": 195,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "vinculados",
            "label": "Máx. vinculados"
          },
          {
            "key": "tamanho",
            "label": "Tamanho máx."
          },
          {
            "key": "cr",
            "label": "ND máx."
          },
          {
            "key": "cr05",
            "label": "ND 1/2-"
          },
          {
            "key": "cr1",
            "label": "ND 1"
          },
          {
            "key": "cr2",
            "label": "ND 2"
          },
          {
            "key": "cr3",
            "label": "ND 3"
          },
          {
            "key": "cr4",
            "label": "ND 4"
          },
          {
            "key": "cr5",
            "label": "ND 5"
          },
          {
            "key": "cr6",
            "label": "ND 6"
          }
        ],
        "rows": [
          {
            "nivel": 1,
            "vinculados": 1,
            "tamanho": "Pequeno",
            "cr": "1/2",
            "cr05": "0/0",
            "cr1": "—",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 2,
            "vinculados": 1,
            "tamanho": "Pequeno",
            "cr": "1/2",
            "cr05": "1/0",
            "cr1": "—",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 3,
            "vinculados": 2,
            "tamanho": "Pequeno",
            "cr": "1/2",
            "cr05": "2/0",
            "cr1": "—",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 4,
            "vinculados": 2,
            "tamanho": "Pequeno",
            "cr": "1",
            "cr05": "3/1",
            "cr1": "0/0",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 5,
            "vinculados": 2,
            "tamanho": "Médio",
            "cr": "1",
            "cr05": "4/1",
            "cr1": "1/0",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 6,
            "vinculados": 2,
            "tamanho": "Médio",
            "cr": "1",
            "cr05": "5/1",
            "cr1": "2/0",
            "cr2": "—",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 7,
            "vinculados": 3,
            "tamanho": "Médio",
            "cr": "2",
            "cr05": "6/1",
            "cr1": "3/0",
            "cr2": "0/0",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 8,
            "vinculados": 3,
            "tamanho": "Médio",
            "cr": "2",
            "cr05": "7/2",
            "cr1": "4/1",
            "cr2": "1/1",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 9,
            "vinculados": 3,
            "tamanho": "Médio",
            "cr": "2",
            "cr05": "8/2",
            "cr1": "5/1",
            "cr2": "2/1",
            "cr3": "—",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 10,
            "vinculados": 3,
            "tamanho": "Médio",
            "cr": "3",
            "cr05": "9/2",
            "cr1": "6/1",
            "cr2": "3/1",
            "cr3": "0/0",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 11,
            "vinculados": 4,
            "tamanho": "Grande",
            "cr": "3",
            "cr05": "10/2",
            "cr1": "7/1",
            "cr2": "4/1",
            "cr3": "1/0",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 12,
            "vinculados": 4,
            "tamanho": "Grande",
            "cr": "3",
            "cr05": "11/3",
            "cr1": "8/2",
            "cr2": "5/2",
            "cr3": "2/1",
            "cr4": "—",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 13,
            "vinculados": 4,
            "tamanho": "Grande",
            "cr": "4",
            "cr05": "12/3",
            "cr1": "9/2",
            "cr2": "6/2",
            "cr3": "3/1",
            "cr4": "0/0",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 14,
            "vinculados": 4,
            "tamanho": "Grande",
            "cr": "4",
            "cr05": "13/3",
            "cr1": "10/2",
            "cr2": "7/2",
            "cr3": "4/1",
            "cr4": "1/0",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 15,
            "vinculados": 5,
            "tamanho": "Grande",
            "cr": "4",
            "cr05": "14/3",
            "cr1": "11/2",
            "cr2": "8/2",
            "cr3": "5/1",
            "cr4": "2/0",
            "cr5": "—",
            "cr6": "—"
          },
          {
            "nivel": 16,
            "vinculados": 5,
            "tamanho": "Grande",
            "cr": "5",
            "cr05": "15/4",
            "cr1": "12/3",
            "cr2": "9/3",
            "cr3": "6/2",
            "cr4": "3/1",
            "cr5": "0/0",
            "cr6": "—"
          },
          {
            "nivel": 17,
            "vinculados": 5,
            "tamanho": "Enorme",
            "cr": "5",
            "cr05": "16/4",
            "cr1": "13/3",
            "cr2": "10/3",
            "cr3": "7/2",
            "cr4": "4/1",
            "cr5": "1/0",
            "cr6": "—"
          },
          {
            "nivel": 18,
            "vinculados": 5,
            "tamanho": "Enorme",
            "cr": "5",
            "cr05": "17/4",
            "cr1": "14/3",
            "cr2": "11/3",
            "cr3": "8/2",
            "cr4": "5/1",
            "cr5": "2/0",
            "cr6": "—"
          },
          {
            "nivel": 19,
            "vinculados": 6,
            "tamanho": "Enorme",
            "cr": "6",
            "cr05": "18/5",
            "cr1": "15/4",
            "cr2": "12/4",
            "cr3": "9/3",
            "cr4": "6/2",
            "cr5": "3/1",
            "cr6": "0/0"
          },
          {
            "nivel": 20,
            "vinculados": 6,
            "tamanho": "Enorme",
            "cr": "6",
            "cr05": "19/5",
            "cr1": "16/4",
            "cr2": "13/4",
            "cr3": "10/3",
            "cr4": "7/2",
            "cr5": "4/1",
            "cr6": "1/0"
          }
        ]
      },
      {
        "title": "Lista de Magias do Domador",
        "page": 198,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível"
          },
          {
            "key": "magias",
            "label": "Magias"
          }
        ],
        "rows": [
          {
            "nivel": "Truques",
            "magias": "Não Pode Tropeçar; Golpe Feroz; Orientação; Uivo; Luz; Faro Primordial; Reforçar; Resistência; Cortina de Fumaça; Amortecer Queda; Poupar os Moribundos; Olho do Perseguidor; Zombaria Viciosa"
          },
          {
            "nivel": "1º",
            "magias": "Amizade Animal; Pele Camaleônica; Curar Ferimentos; Detectar Magia; Retirada Acelerada; Fogo das Fadas; Vida Falsa; Queda Suave; Clarão; Forma de Nadadeira; Graxa; Palavra Curativa; Heroísmo; Identificação; Iniciativa; Chama Interior; Salto; Passos Longos; Placa de Hortelã; Proteção contra o Bem e Mal; Purificar Alimentos e Bebidas; Santuário; Escudo da Fé; Imagem Silenciosa; Sono; Falar com Animais"
          },
          {
            "nivel": "2º",
            "magias": "Ajuda; Alterar-se; Mensageiro Animal; Pele de Árvore; Nublar; Acalmar Emoções; Visão no Escuro; Detectar Pensamentos; Pele Terrestre; Pele de Enguia; Aprimorar Habilidade; Aumentar/Reduzir; Desigualdade; Invisibilidade; Restauração Menor; Levitação; Localizar Animais ou Plantas; Localizar Objeto; Espelho da Reflexão; Passos sem Pegadas; Preservar; Proteção; Proteção contra Veneno; Ver o Invisível; Palavra de Proteção; Silêncio; Escalada de Aranha; Explosão de Açúcar; Vínculo Protetor"
          },
          {
            "nivel": "3º",
            "magias": "Piscar; Criar Alimentos e Água; Luz do Dia; Dissipar Magia; Medo; Voo; Coma Alimentar; Velocidade; Sanguessuga em Massa; Indetectável; Proteção contra Energia; Remover Maldição; Troca-Troca; Idiomas; Respirar na Água; Andar na Água"
          },
          {
            "nivel": "4º",
            "magias": "Aura de Impureza; Controlar Água; Passo pelas Nuvens; Proteção contra a Morte; Porta Dimensional; Dominar Besta; Escudo de Fogo; Liberdade de Movimento; Pele de Sapo; Invisibilidade Maior; Localizar Criatura; Esfera Resiliente; Pele de Aço; Pele de Pedra"
          },
          {
            "nivel": "5º",
            "magias": "Cúpula Antivida; Despertar; Dissipar o Bem e Mal; Dominar Pessoa; Resistir; Pele Febril; Missão; Restauração Maior; Incorporeidade; Lendas e Histórias; Despistar; Carapaça Adamantina de Nomi; Vínculo Telepático; Vidência"
          }
        ]
      },
      {
        "title": "Custo de Barda para Companheiros",
        "page": 194,
        "columns": [
          {
            "key": "tamanho",
            "label": "Tamanho"
          },
          {
            "key": "humanoide",
            "label": "Forma humanoide"
          },
          {
            "key": "abstrata",
            "label": "Forma abstrata"
          }
        ],
        "rows": [
          {
            "tamanho": "Miúdo",
            "humanoide": "0,5×",
            "abstrata": "1×"
          },
          {
            "tamanho": "Pequeno",
            "humanoide": "1×",
            "abstrata": "2×"
          },
          {
            "tamanho": "Médio",
            "humanoide": "1×",
            "abstrata": "2×"
          },
          {
            "tamanho": "Grande",
            "humanoide": "2×",
            "abstrata": "4×"
          },
          {
            "tamanho": "Enorme",
            "humanoide": "4×",
            "abstrata": "8×"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "REIMPRESSÃO DA CLASSE",
        "page": 191,
        "text": "Ryoko’s Guide informa que inclui as regras-base do Domador, originalmente apresentado em Heliana’s Guide to Monster Hunting, para facilitar a consulta junto à subclasse Sensei.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "RECEPTÁCULOS E CUSTO",
        "page": 196,
        "text": "O receptáculo exige 8 horas e componentes em po iguais a pelo menos 100 × o ND do alvo. Exemplo da fonte: ND 1/2 exige receptáculo de 50 po e ND 1 exige 100 po. Componentes de receptáculos antigos podem ser reaproveitados.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      },
      {
        "title": "REGRA OPCIONAL — DOMA NÃO COMBATIVA",
        "page": 196,
        "text": "Se uma criatura se tornar voluntariamente companheira por narrativa — por exemplo, devido a um ato nobre ou criação desde um ovo — o GM pode ignorar a salvaguarda normal de doma.",
        "sourceTitle": "Ryoko's Guide to the Yokai Realms"
      }
    ]
  }
];
  const progressions = {
  "bender-ryoko": {
    "id": "bender-ryoko",
    "title": "O Dobrador",
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
        "key": "cantrips",
        "label": "Truques"
      },
      {
        "key": "slot1",
        "label": "1º"
      },
      {
        "key": "slot2",
        "label": "2º"
      },
      {
        "key": "slot3",
        "label": "3º"
      },
      {
        "key": "slot4",
        "label": "4º"
      },
      {
        "key": "slot5",
        "label": "5º"
      }
    ],
    "rows": [
      {
        "level": 1,
        "proficiency": "+2",
        "features": [
          "Conjuração",
          "Afinidade Elemental (1)",
          "Golpes Elementais"
        ],
        "cantrips": 2,
        "slot1": 2,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 2,
        "proficiency": "+2",
        "features": [
          "Combo Elemental"
        ],
        "cantrips": 2,
        "slot1": 2,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 3,
        "proficiency": "+2",
        "features": [
          "Disciplina de Dobrador"
        ],
        "cantrips": 2,
        "slot1": 3,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 4,
        "proficiency": "+2",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 2,
        "slot1": 3,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 5,
        "proficiency": "+3",
        "features": [
          "Ataque Extra"
        ],
        "cantrips": 2,
        "slot1": 4,
        "slot2": 2,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 6,
        "proficiency": "+3",
        "features": [
          "Afinidade Elemental (2)"
        ],
        "cantrips": 2,
        "slot1": 4,
        "slot2": 2,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 7,
        "proficiency": "+3",
        "features": [
          "Característica de Disciplina (7º Nível)",
          "Ataque Extra Aprimorado (opcional)"
        ],
        "cantrips": 2,
        "slot1": 4,
        "slot2": 3,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 8,
        "proficiency": "+3",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 2,
        "slot1": 4,
        "slot2": 3,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 9,
        "proficiency": "+4",
        "features": [],
        "cantrips": 2,
        "slot1": 4,
        "slot2": 3,
        "slot3": 2,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 10,
        "proficiency": "+4",
        "features": [
          "Afinidade Elemental (3)"
        ],
        "cantrips": 3,
        "slot1": 4,
        "slot2": 3,
        "slot3": 2,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 11,
        "proficiency": "+4",
        "features": [
          "Forma Primordial"
        ],
        "cantrips": 3,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 12,
        "proficiency": "+4",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 3,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 13,
        "proficiency": "+5",
        "features": [],
        "cantrips": 3,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 1,
        "slot5": "—"
      },
      {
        "level": 14,
        "proficiency": "+5",
        "features": [
          "Afinidade Elemental (4)"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 1,
        "slot5": "—"
      },
      {
        "level": 15,
        "proficiency": "+5",
        "features": [
          "Característica de Disciplina (15º Nível)"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 2,
        "slot5": "—"
      },
      {
        "level": 16,
        "proficiency": "+5",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 2,
        "slot5": "—"
      },
      {
        "level": 17,
        "proficiency": "+6",
        "features": [],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 1
      },
      {
        "level": 18,
        "proficiency": "+6",
        "features": [
          "Avatar Primordial"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 1
      },
      {
        "level": 19,
        "proficiency": "+6",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 2
      },
      {
        "level": 20,
        "proficiency": "+6",
        "features": [
          "Característica de Disciplina (20º Nível)"
        ],
        "cantrips": 4,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 2
      }
    ]
  },
  "tamer-ryoko": {
    "id": "tamer-ryoko",
    "title": "O Domador",
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
        "key": "cantrips",
        "label": "Truques"
      },
      {
        "key": "known",
        "label": "Magias Conhecidas"
      },
      {
        "key": "slot1",
        "label": "1º"
      },
      {
        "key": "slot2",
        "label": "2º"
      },
      {
        "key": "slot3",
        "label": "3º"
      },
      {
        "key": "slot4",
        "label": "4º"
      },
      {
        "key": "slot5",
        "label": "5º"
      }
    ],
    "rows": [
      {
        "level": 1,
        "proficiency": "+2",
        "features": [
          "Familiar de Bolso",
          "Treinador de Monstros",
          "Vínculo da Alma",
          "Domar Criatura"
        ],
        "cantrips": "—",
        "known": "—",
        "slot1": "—",
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 2,
        "proficiency": "+2",
        "features": [
          "Reforçar",
          "Vínculo Psíquico",
          "Conjuração"
        ],
        "cantrips": 2,
        "known": 2,
        "slot1": 2,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 3,
        "proficiency": "+2",
        "features": [
          "Família de Bolso",
          "Paradigma de Treinamento"
        ],
        "cantrips": 2,
        "known": 3,
        "slot1": 3,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 4,
        "proficiency": "+2",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 2,
        "known": 3,
        "slot1": 3,
        "slot2": "—",
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 5,
        "proficiency": "+3",
        "features": [
          "Multiataque",
          "Presença Maleável"
        ],
        "cantrips": 2,
        "known": 4,
        "slot1": 4,
        "slot2": 2,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 6,
        "proficiency": "+3",
        "features": [
          "Ataque Alfa",
          "Golpes Determinados"
        ],
        "cantrips": 2,
        "known": 4,
        "slot1": 4,
        "slot2": 2,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 7,
        "proficiency": "+3",
        "features": [
          "Família de Bolso (2)",
          "Característica de Paradigma (7º Nível)"
        ],
        "cantrips": 2,
        "known": 5,
        "slot1": 4,
        "slot2": 3,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 8,
        "proficiency": "+3",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 2,
        "known": 5,
        "slot1": 4,
        "slot2": 3,
        "slot3": "—",
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 9,
        "proficiency": "+4",
        "features": [],
        "cantrips": 2,
        "known": 6,
        "slot1": 4,
        "slot2": 3,
        "slot3": 2,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 10,
        "proficiency": "+4",
        "features": [
          "Característica de Paradigma (10º Nível)"
        ],
        "cantrips": 3,
        "known": 6,
        "slot1": 4,
        "slot2": 3,
        "slot3": 2,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 11,
        "proficiency": "+4",
        "features": [
          "Família de Bolso (3)"
        ],
        "cantrips": 3,
        "known": 7,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 12,
        "proficiency": "+4",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 3,
        "known": 7,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": "—",
        "slot5": "—"
      },
      {
        "level": 13,
        "proficiency": "+5",
        "features": [
          "Troca-Troca"
        ],
        "cantrips": 3,
        "known": 8,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 1,
        "slot5": "—"
      },
      {
        "level": 14,
        "proficiency": "+5",
        "features": [
          "Característica de Paradigma (14º Nível)"
        ],
        "cantrips": 4,
        "known": 8,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 1,
        "slot5": "—"
      },
      {
        "level": 15,
        "proficiency": "+5",
        "features": [
          "Família de Bolso (4)"
        ],
        "cantrips": 4,
        "known": 9,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 2,
        "slot5": "—"
      },
      {
        "level": 16,
        "proficiency": "+5",
        "features": [
          "Aprimoramento no Valor de Habilidade"
        ],
        "cantrips": 4,
        "known": 9,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 2,
        "slot5": "—"
      },
      {
        "level": 17,
        "proficiency": "+6",
        "features": [
          "Presença Magnífica"
        ],
        "cantrips": 4,
        "known": 10,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 1
      },
      {
        "level": 18,
        "proficiency": "+6",
        "features": [
          "Aprimoramento da Característica de Paradigma (7º Nível)"
        ],
        "cantrips": 4,
        "known": 10,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 1
      },
      {
        "level": 19,
        "proficiency": "+6",
        "features": [
          "Aprimoramento no Valor de Habilidade",
          "Família de Bolso (5)"
        ],
        "cantrips": 4,
        "known": 11,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 2
      },
      {
        "level": 20,
        "proficiency": "+6",
        "features": [
          "Invocar a Horda"
        ],
        "cantrips": 4,
        "known": 11,
        "slot1": 4,
        "slot2": 3,
        "slot3": 3,
        "slot4": 3,
        "slot5": 2
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
