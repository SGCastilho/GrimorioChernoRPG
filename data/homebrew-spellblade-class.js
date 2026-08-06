'use strict';

/* Classe homebrew Spellblade v1.3, traduzida e estruturada a partir do PDF fornecido. */
(function () {
  const classData = {
  "id": "spellblade",
  "name": "Spellblade",
  "originalName": "Spellblade",
  "hitDie": "d8",
  "ability": "Inteligência",
  "saves": "Constituição, Inteligência",
  "armor": "Armaduras leves e médias",
  "weapons": "Armas simples e marciais",
  "tools": "Não especificadas no PDF",
  "skills": "Escolha duas: Acrobacia, Arcanismo, Atletismo, História, Investigação, Medicina, Natureza, Percepção, Religião, Prestidigitação ou Furtividade",
  "sigilKey": "spellblade",
  "color": "#6f8fd6",
  "desc": "Um Spellblade combina magia e talento marcial em uma fusão perfeita, unindo ambos em uma única arte. Em vez de ser apenas um mago habilidoso com uma espada ou um guerreiro que conhece algumas magias, ele é definido pela capacidade de fundir magia e combate em um único ataque: o Golpe Mágico.",
  "source": {
    "title": "Spellblade v1.3 — KibblesTasty",
    "pages": "1–19",
    "chapter": "Classe Spellblade, Técnicas e Égide"
  },
  "tablePage": 2,
  "overview": [
    {
      "title": "SPELLBLADE",
      "page": 1,
      "text": "Uma humana passa a mão por sua lâmina, traçando padrões esotéricos que se acendem ao toque. Chamas ganham vida em seu rastro, lançando uma luz súbita sobre a caverna sombria enquanto as criaturas da escuridão recuam diante do fogo. Os olhos de um gnomo começam a brilhar quando uma enorme espada larga de energia se condensa em sua mão, formando uma lâmina de poder puro, duas vezes maior que ele e ainda assim sem peso. Um elfo de aparência sombria desaparece, teletransporta-se para trás do inimigo, murmura algo de forma enigmática e o derruba com um golpe.\n\nUm Spellblade combina magia e talento marcial em uma fusão perfeita, capaz de unir ambos em uma única arte. Em vez de ser um Mago que por acaso sabe usar uma espada ou um Guerreiro que conhece alguma magia, um Spellblade é definido pela capacidade de mesclar feitiços e técnicas marciais em um único ataque: o Golpe Mágico.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "BUSCA PELA MAESTRIA",
      "page": 1,
      "text": "Tornar-se um Spellblade não acontece por acaso. É um caminho difícil, que exige concentração e condicionamento intensos para conjurar com fluidez em meio à tempestade da batalha e sincronizar perfeitamente magia e ataques. Por isso, Spellblades quase sempre são movidos por uma motivação que os leva a perseguir esse estilo singular de perfeição. Alguns o veem como uma arte ou tradição importante, outros como a arma definitiva para superar um grande obstáculo, e há aqueles que seguem o caminho pelo próprio desafio, buscando provar seu valor.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "TALENTO RARO",
      "page": 1,
      "text": "Spellblades são incomuns, pois dominar suas artes exige um grau de talento fora do normal em comparação com aqueles que se especializam em apenas um de seus dois campos desafiadores. Aventureiros já são raros, mas Spellblades são ainda mais, e frequentemente desafiam expectativas. Um Spellblade estudioso e gentil pode ser surpreendentemente ágil ou forte, enquanto alguém que parece apenas um brutamontes pode revelar grande erudição.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    }
  ],
  "creation": [
    {
      "title": "CRIANDO UM SPELLBLADE",
      "page": 1,
      "text": "O ponto mais importante ao criar um Spellblade é compreender o que atraiu seu personagem para esse caminho difícil e raro. As habilidades de um Spellblade possuem pouca utilidade mundana: ele não é necessariamente um estudioso, e suas técnicas servem principalmente às artes da aventura. O que levou seu personagem a dominá-las? Existe uma intencionalidade no caminho do Spellblade semelhante à encontrada em um Paladino.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CONSTRUÇÃO RÁPIDA",
      "page": 2,
      "text": "Para seguir as técnicas Lâmina de Éter, Mago de Batalha ou Espada Voadora, coloque seu maior valor em Inteligência, seguido de Destreza e Constituição.\n\nPara seguir Guardião ou Punho Mágico, coloque seu maior valor em Força, seguido de Constituição e Inteligência.\n\nPara seguir Caçador de Magos, Lâmina de Geada, Atirador Arcano ou Lâmina Veloz, coloque seu maior valor em Destreza, seguido de Inteligência e Constituição.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    }
  ],
  "basics": {
    "title": "CARACTERÍSTICAS DE CLASSE",
    "page": 2,
    "text": "Como um Spellblade, você adquire as seguintes características de classe.\n\nPONTOS DE VIDA\n\nDado de Vida: 1d8 por nível de Spellblade\n\nPontos de Vida no 1º Nível: 8 + seu modificador de Constituição\n\nPontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de Spellblade após o 1º\n\nPROFICIÊNCIAS\n\nArmaduras: armaduras leves e médias\n\nArmas: armas simples e marciais\n\nTestes de Resistência: Constituição e Inteligência\n\nPerícias: escolha duas entre Acrobacia, Arcanismo, Atletismo, História, Investigação, Medicina, Natureza, Percepção, Religião, Prestidigitação e Furtividade\n\nO PDF não apresenta uma linha de proficiência em ferramentas.\n\nEQUIPAMENTO\n\nVocê começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:\n\n• (a) uma arma marcial.\n\n• (a) uma besta leve e uma aljava com 20 virotes ou (b) duas armas simples quaisquer.\n\n• (a) brunea ou (b) armadura de couro.\n\n• (a) um pacote de aventureiro ou (b) um pacote de explorador.\n\n• Um foco arcano.\n\nAlternativamente, você pode começar com 5d4 × 10 po para comprar seu próprio equipamento.",
    "sourceTitle": "Spellblade v1.3 — KibblesTasty"
  },
  "features": [
    {
      "title": "SURTO ARCANO",
      "level": 1,
      "page": 3,
      "text": "Sua afinidade com a magia concede a você uma reserva de Surtos Arcanos. Uma vez durante seu turno, você pode gastar um uso de Surto Arcano para realizar uma das opções a seguir:\n\n• Detectar Magia: conjure Detectar Magia sem gastar um espaço de magia.\n\n• Vantagem: obtenha vantagem em uma jogada de ataque, sem exigir uma ação.\n\n• Aprimorar Habilidade: adicione seu modificador de Inteligência a um teste de habilidade de Força ou Destreza, sem exigir uma ação.\n\n• Teleporte: teletransporte-se até 1,5 metro para um espaço desocupado que possa ver, sem exigir uma ação. A distância aumenta em 1,5 metro no 5º nível (3 metros), 9º nível (4,5 metros), 13º nível (6 metros) e 17º nível (7,5 metros).\n\nVocê pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos ao concluir um descanso curto ou longo. Conforme avança de nível, a tabela da classe apresenta usos adicionais, mas você continua podendo gastar apenas um uso por turno.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "TRUQUE MÁGICO",
      "level": 1,
      "page": 3,
      "text": "Também no 1º nível, você aprende um truque à sua escolha da lista de magias de Spellblade. Inteligência é sua habilidade de conjuração para esse truque.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CONJURAÇÃO",
      "level": 2,
      "page": 3,
      "text": "Como parte de seus estudos mágicos, você adquire a capacidade de conjurar magias no 2º nível. As magias que aprende possuem escopo limitado, concentrando-se principalmente em aprimorar suas capacidades e devastar seus inimigos.\n\nTRUQUES\n\nNo 2º nível, você aprende dois truques adicionais à sua escolha da lista de magias de Spellblade. Você aprende truques adicionais em níveis mais altos, conforme indicado na coluna Truques Conhecidos da tabela do Spellblade. Essa coluna já inclui os truques adicionais obtidos por características da classe, como Golpe Potencializado.\n\nESPAÇOS DE MAGIA\n\nA tabela do Spellblade mostra quantos espaços de magia você possui para conjurar suas magias de 1º nível ou superior. Para conjurar uma dessas magias, você deve gastar um espaço do nível da magia ou superior. Você recupera todos os espaços gastos ao terminar um descanso longo.\n\nMAGIAS CONHECIDAS DE 1º NÍVEL OU SUPERIOR\n\nVocê conhece três magias de 1º nível à sua escolha da lista de magias de Spellblade. A coluna Magias Conhecidas da tabela mostra quando você aprende mais magias da classe.\n\nCada magia escolhida deve ser de um nível para o qual você possua espaços de magia. Por exemplo, ao alcançar o 5º nível nesta classe, você pode aprender uma nova magia de 1º ou 2º nível.\n\nAlém disso, sempre que ganha um nível nesta classe, você pode substituir uma magia de Spellblade que conheça por outra magia da lista, que também deve ser de um nível para o qual você possua espaços.\n\nHABILIDADE DE CONJURAÇÃO\n\nInteligência é sua habilidade de conjuração para as magias de Spellblade. Sua magia deriva do conhecimento prático do arcano e de seu treinamento. Você usa Inteligência sempre que uma magia se referir à sua habilidade de conjuração.\n\nCD para suas magias = 8 + seu bônus de proficiência + seu modificador de Inteligência\n\nModificador de ataque mágico = seu bônus de proficiência + seu modificador de Inteligência\n\nFOCO DE CONJURAÇÃO\n\nVocê pode usar um foco arcano como foco de conjuração para suas magias de Spellblade.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "DEFLEXÃO ARCANA",
      "level": 2,
      "page": 4,
      "text": "No 2º nível, você aprende a magia Escudo, incorporando-a à sua Égide. Ela não conta no número de magias que você conhece. Você pode conjurá-la uma vez sem gastar um espaço de magia; depois disso, precisa gastar espaços normalmente até concluir um descanso curto ou longo.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "GOLPE MÁGICO",
      "level": 2,
      "page": 3,
      "text": "A partir do 2º nível, você pode infundir magias em sua arma. Como uma ação bônus, você pode conjurar de maneira especial uma magia de Spellblade de 1º nível ou superior que tenha tempo de conjuração de 1 ação, infundindo-a em uma arma corpo a corpo em vez de produzir seu efeito imediatamente.\n\nNa próxima vez que realizar um ataque corpo a corpo com essa arma antes do fim do seu turno, a magia é conjurada contra o alvo do ataque. A magia se dissipa e falha caso você conjure outra magia antes de atacar.\n\nA interação do Golpe Mágico com as mecânicas da magia depende do efeito da magia:\n\n• Jogadas de Ataque: se a magia exigir uma jogada de ataque, corpo a corpo ou à distância, ela atinge automaticamente o alvo se o ataque com arma acertar e erra se o ataque com arma errar.\n\n• Testes de Resistência: se a magia exigir um teste de resistência, ao acertar ela causa dano como se o alvo tivesse falhado nesse teste. Se a magia possuir efeitos além de causar dano, o alvo realiza normalmente o teste contra esses efeitos, independentemente de o ataque acertar ou errar. Se a magia causar metade do dano em um sucesso, o alvo sofre metade do dano quando o ataque errar, como se tivesse passado no teste. Se a magia sempre acertar, como Mísseis Mágicos, ela atinge independentemente do resultado do ataque.\n\n• Área de Efeito: se a magia possuir uma área de efeito, essa área deve incluir o espaço ocupado pelo alvo do Golpe Mágico. A área deve ser posicionada de modo que uma de suas bordas esteja dentro do alcance da arma e, nos demais aspectos, segue as regras normais da magia para posicionamento e alcance. Outras criaturas na área resolvem a magia como se ela tivesse sido conjurada normalmente. O alvo do ataque não é afetado uma segunda vez pela área, pois o efeito contra ele já foi resolvido como parte do ataque.\n\n• Múltiplas Jogadas de Ataque: para magias com várias jogadas de ataque, como Raio Ardente ou Crepitar, apenas o resultado da primeira jogada fica vinculado ao ataque com arma. Resolva as jogadas seguintes normalmente, mas você pode ignorar a desvantagem em ataques mágicos à distância causada por estar a até 1,5 metro de criaturas hostis.\n\nVocê só pode usar Golpe Mágico com magias presentes na lista da classe Spellblade e apenas em um nível que poderia conjurar como Spellblade, embora possa usar qualquer espaço de magia que tenha disponível.\n\nESCLARECIMENTOS ADICIONAIS\n\n• Acertos Críticos: se o ataque com arma for um acerto crítico, uma magia que use uma jogada de ataque também se torna um acerto crítico. Uma magia baseada em teste de resistência apenas resolve como um acerto normal. Assim, Infligir Ferimentos poderia causar um crítico, mas Bola de Fogo não.\n\n• Sequência das Condições: efeitos que exigem que o alvo falhe em um teste de resistência acontecem depois do ataque. Por exemplo, ao usar Golpe Mágico com Imobilizar Pessoa, o teste contra a condição Paralisado é realizado após a conclusão do ataque.\n\n• Área de Efeito: uma borda da área deve estar dentro do alcance da arma, mas o ponto central não precisa estar. Ao usar Golpe Mágico com Bola de Fogo, por exemplo, você não precisa incluir a si mesmo; basta que uma borda esteja ao alcance da arma e que o alvo esteja dentro da área.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "ÉGIDE",
      "level": 2,
      "page": 4,
      "text": "Também no 2º nível, você começa a formar uma Égide mágica que combina aprimoramentos físicos e poder arcano. Escolha um efeito de Égide de espaço de 1º nível, apresentado na aba Tabelas, e receba seus benefícios.\n\nAo concluir um descanso longo, você pode trocar o efeito gratuito de 1º nível escolhido ou fortalecer ainda mais sua Égide sacrificando espaços de magia. Para isso, escolha efeitos adicionais da lista e gaste um espaço do nível indicado. Esses aprimoramentos duram até o fim do seu próximo descanso longo.\n\nA soma dos níveis dos espaços sacrificados não pode exceder seu nível de Spellblade dividido por quatro, arredondado para cima. Por exemplo, no 5º nível você pode sacrificar um total de 2 níveis de espaços; no 9º nível, um total de 3 níveis.\n\nA seção de Égide no fim do documento também esclarece que você só pode sacrificar espaços obtidos pela classe Spellblade e que o limite total acompanha o maior nível de espaço de magia que a classe concede. Espaços sacrificados não podem ser recuperados até o efeito ser removido durante um descanso longo. Efeitos de Égide não são magias e não podem ser dissipados como tais.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "TÉCNICA DE SPELLBLADE",
      "level": 3,
      "page": 4,
      "text": "Ao alcançar o 3º nível, você escolhe uma especialização para seus poderes. O texto desta característica cita Mago de Batalha, Lâmina de Éter, Guardião, Caçador de Magos, Lâmina Veloz e Atirador Arcano. As páginas seguintes do mesmo PDF também apresentam Lâmina de Geada, Espada Voadora e Punho Mágico.\n\nSua escolha concede características no 3º nível e novamente nos níveis 7, 15 e 20.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "INCREMENTO NO VALOR DE HABILIDADE",
      "level": 4,
      "page": 4,
      "text": "Quando você atinge o 4º nível e novamente no 8º, 12º, 16º e 19º nível, pode aumentar um valor de habilidade à sua escolha em 2, ou aumentar dois valores de habilidade à sua escolha em 1. Como normal, você não pode elevar um valor de habilidade acima de 20 usando esta característica.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "GOLPE POTENCIALIZADO",
      "level": 5,
      "page": 5,
      "text": "A partir do 5º nível, você pode usar truques presentes na lista da classe Spellblade com sua característica Golpe Mágico.\n\nVocê aprende dois truques adicionais à sua escolha da lista de Spellblade e aprende mais um truque nos níveis 9, 13 e 17. Esses truques adicionais já estão incluídos na coluna Truques Conhecidos da tabela da classe.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "PROTEÇÃO MÁGICA",
      "level": 6,
      "page": 5,
      "text": "Também no 6º nível, você ganha proficiência em testes de resistência de Sabedoria ou Carisma, à sua escolha. Além disso, você obtém sucesso automático em testes de resistência contra suas próprias magias.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "RECUPERAÇÃO ARCANA",
      "level": 6,
      "page": 5,
      "text": "A partir do 6º nível, você pode recuperar parte de sua energia mágica por meio de uma meditação rápida e concentrada. Ao terminar um descanso curto, recupere espaços de magia gastos cuja soma dos níveis seja igual ou inferior a um terço do seu nível de Spellblade, arredondado para baixo. Depois de usar esta característica, você não pode usá-la novamente até terminar um descanso longo.\n\nAlém disso, a qualquer momento, como uma ação bônus, você pode gastar um espaço de magia para recuperar uma quantidade de usos de Surto Arcano igual ao nível do espaço gasto.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CARACTERÍSTICA DE ESPECIALIZAÇÃO",
      "level": 7,
      "page": 2,
      "text": "No 7º nível, sua Técnica de Spellblade concede a característica de 7º nível descrita na subclasse escolhida.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "MAGIA ARQUETÍPICA",
      "level": 10,
      "page": 5,
      "text": "No 10º nível, você pode conjurar uma vez cada uma das magias concedidas por sua Técnica de Spellblade sem gastar um espaço de magia. Depois de conjurar uma magia dessa forma, você não pode conjurá-la novamente dessa maneira até concluir um descanso longo.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "ÉGIDE EXPANDIDA",
      "level": 10,
      "page": 5,
      "text": "A partir do 10º nível, ao terminar um descanso longo, você pode escolher um efeito adicional de Égide de 1º nível e receber seus benefícios sem gastar um espaço de magia. O efeito dura até o próximo descanso longo, quando você pode escolher outro.\n\nNo 14º nível, você também pode escolher gratuitamente um efeito de Égide de 2º nível; no 18º nível, pode escolher gratuitamente um efeito de 3º nível.\n\nObservação editorial: a tabela de progressão chama esta característica de “Égide Inata”, enquanto o texto da característica usa “Égide Expandida”. O Grimório preserva a regra descrita no texto.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "DANO COLATERAL",
      "level": 11,
      "page": 5,
      "text": "A partir do 11º nível, quando você acerta uma criatura com Golpe Mágico, o alvo e as criaturas à sua escolha a até 1,5 metro dele que seriam atingidas pela mesma jogada de ataque sofrem 1d8 de dano de força adicional.\n\nEm caso de erro, o alvo sofre metade desse dano, e as criaturas próximas não sofrem dano, mesmo que a jogada de ataque fosse suficiente para atingi-las.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "IMUNIDADE À ZONA DE EXPLOSÃO",
      "level": 11,
      "page": 5,
      "text": "A partir do 11º nível, você é imune às áreas de efeito de suas próprias magias. Você não sofre dano delas e ignora todos os outros efeitos, a menos que escolha ser afetado.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "FOCO DO SURTO",
      "level": 14,
      "page": 5,
      "text": "A partir do 14º nível, se falhar em um teste de resistência de Constituição para manter a concentração em uma magia, você pode gastar um uso de Surto Arcano para obter sucesso no teste.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "SENSIBILIDADE MÁGICA",
      "level": 14,
      "page": 6,
      "text": "Também no 14º nível, você aprende a magia Detectar Magia, que não conta no número de magias conhecidas. Para você, Detectar Magia não exige mais concentração.\n\nEnquanto Detectar Magia estiver ativa, você ganha proficiência na perícia Arcanismo. Se já for proficiente, ganha especialização durante a magia, dobrando seu bônus de proficiência em testes de Arcanismo.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CARACTERÍSTICA DE ESPECIALIZAÇÃO",
      "level": 15,
      "page": 2,
      "text": "No 15º nível, sua Técnica de Spellblade concede a característica de 15º nível descrita na subclasse escolhida.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CONTROLE DA ZONA DE EXPLOSÃO",
      "level": 18,
      "page": 6,
      "text": "No 18º nível, quando usa Golpe Mágico para conjurar uma magia que afeta uma área, você pode gastar um uso de Surto Arcano para estender sua Imunidade à Zona de Explosão a um número de aliados igual ao seu modificador de Inteligência.\n\nEssa proteção dura somente até o início do seu próximo turno. Depois disso, os aliados voltam a ser afetados por quaisquer efeitos contínuos da magia.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "CARACTERÍSTICA DE ESPECIALIZAÇÃO",
      "level": 20,
      "page": 2,
      "text": "No 20º nível, sua Técnica de Spellblade concede a característica de 20º nível descrita na subclasse escolhida.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    }
  ],
  "tables": [
    {
      "title": "Efeitos da Égide",
      "page": 16,
      "columns": [
        {
          "key": "nivel",
          "label": "Nível do espaço"
        },
        {
          "key": "nome",
          "label": "Efeito"
        },
        {
          "key": "requisito",
          "label": "Pré-requisito"
        },
        {
          "key": "efeito",
          "label": "Benefício"
        }
      ],
      "rows": [
        {
          "nivel": "1º",
          "nome": "Agilidade Arcana",
          "requisito": "—",
          "efeito": "Você permanece sob o efeito da magia Salto."
        },
        {
          "nivel": "1º",
          "nome": "Armadura Arcana",
          "requisito": "—",
          "efeito": "Você permanece sob o efeito da magia Armadura Arcana."
        },
        {
          "nivel": "1º",
          "nome": "Punho Arcano",
          "requisito": "Punho Mágico",
          "efeito": "O dano de seu ataque desarmado aumenta para 1d10. Se gastar um espaço de 3º nível neste efeito, aumenta para 1d12."
        },
        {
          "nivel": "1º",
          "nome": "Rapidez Arcana",
          "requisito": "—",
          "efeito": "Seu deslocamento aumenta em 1,5 metro."
        },
        {
          "nivel": "1º",
          "nome": "Encantamento Elemental",
          "requisito": "—",
          "efeito": "Você toca uma arma e converte o dano dela em fogo, frio ou elétrico enquanto a empunhar."
        },
        {
          "nivel": "1º",
          "nome": "Escudo Encantado",
          "requisito": "—",
          "efeito": "Você toca um escudo e ganha proficiência com ele durante o efeito."
        },
        {
          "nivel": "1º",
          "nome": "Salvaguardas do Surto",
          "requisito": "—",
          "efeito": "Você pode gastar Surto Arcano para adicionar Inteligência a testes de resistência de Força ou Destreza, além dos testes de habilidade."
        },
        {
          "nivel": "1º",
          "nome": "Barreira Protetora",
          "requisito": "—",
          "efeito": "Reduza em 1 todo dano que sofrer."
        },
        {
          "nivel": "1º",
          "nome": "Foco em Arma",
          "requisito": "—",
          "efeito": "Transforme sua arma em um foco arcano para suas magias de Spellblade."
        },
        {
          "nivel": "2º",
          "nome": "Olhos Arcanos",
          "requisito": "—",
          "efeito": "Você ganha visão no escuro com alcance de 18 metros."
        },
        {
          "nivel": "2º",
          "nome": "Estilo Arcano",
          "requisito": "—",
          "efeito": "Você ganha um Estilo de Luta da classe Guerreiro. Se já possuir um estilo, escolha um diferente."
        },
        {
          "nivel": "2º",
          "nome": "Perícia Arcana",
          "requisito": "—",
          "efeito": "Você ganha proficiência em uma perícia à sua escolha."
        },
        {
          "nivel": "2º",
          "nome": "Canal da Lâmina",
          "requisito": "—",
          "efeito": "Ao usar Golpe Mágico, você pode usar o modificador empregado no ataque com a arma em vez de Inteligência como modificador de conjuração."
        },
        {
          "nivel": "2º",
          "nome": "Aliado Ilusório",
          "requisito": "—",
          "efeito": "Ao rolar iniciativa, crie uma duplicata como na magia Reflexos. Você só pode ter uma duplicata deste efeito por vez; se conjurar Reflexos, esta duplicata é destruída antes das demais."
        },
        {
          "nivel": "2º",
          "nome": "Arma Leal",
          "requisito": "—",
          "efeito": "Uma arma tocada ao escolher esta Égide fica sob o efeito de Arma Retornante."
        },
        {
          "nivel": "2º",
          "nome": "Movimento Acelerado",
          "requisito": "—",
          "efeito": "Seu deslocamento aumenta em 1,5 metro."
        },
        {
          "nivel": "3º",
          "nome": "Barreira de Éter",
          "requisito": "Lâmina de Éter",
          "efeito": "Ao causar dano com sua Lâmina de Éter, você ganha pontos de vida temporários iguais ao seu modificador de Inteligência."
        },
        {
          "nivel": "3º",
          "nome": "Transbordamento Arcano",
          "requisito": "—",
          "efeito": "Você ganha um uso adicional de Surto Arcano."
        },
        {
          "nivel": "3º",
          "nome": "Escudo Arcano",
          "requisito": "—",
          "efeito": "Você cria um escudo de poder arcano e recebe +2 na CA. Ele conta como escudo equipado, não ocupa uma mão e não se acumula com outro escudo."
        },
        {
          "nivel": "3º",
          "nome": "Onda Explosiva",
          "requisito": "—",
          "efeito": "Sempre que se teletransportar usando Surto Arcano ou uma magia de 1º nível ou superior, criaturas à sua escolha a até 1,5 metro do destino devem passar em um teste de Força contra sua CD de magia ou ficam Caídas."
        },
        {
          "nivel": "3º",
          "nome": "Égide Camaleônica",
          "requisito": "—",
          "efeito": "Você pode se esconder sem cobertura e não é imediatamente revelado ao entrar na linha de visão. Se mover-se enquanto uma criatura o observa, faça um novo teste de Destreza (Furtividade) para permanecer escondido."
        },
        {
          "nivel": "3º",
          "nome": "Piscar Contingente",
          "requisito": "—",
          "efeito": "Na primeira vez que cairia a 0 PV por dano, fica com 1 PV e desaparece para o Plano Etéreo. No início do seu turno, retorna a um espaço desocupado a até 3 metros do ponto de onde desapareceu. Uma vez ativado, só pode ocorrer novamente após um descanso longo."
        },
        {
          "nivel": "3º",
          "nome": "Égide Reflexiva",
          "requisito": "—",
          "efeito": "Você tem vantagem em testes contra magias em linha. Ao passar em um teste contra uma magia que causa dano, o conjurador sofre metade do dano que você receberia caso falhasse."
        },
        {
          "nivel": "4º",
          "nome": "Resistência Arcana",
          "requisito": "—",
          "efeito": "Escolha ácido, frio, fogo, elétrico, veneno ou trovejante; você ganha resistência ao tipo escolhido. Pode escolher outro tipo ao selecionar novamente este efeito."
        },
        {
          "nivel": "4º",
          "nome": "Contingência de Combate",
          "requisito": "—",
          "efeito": "Ao rolar iniciativa, como reação, você pode conjurar uma magia de 3º nível ou inferior que afete apenas você e tenha tempo de conjuração de 1 ação."
        },
        {
          "nivel": "4º",
          "nome": "Caminhos Dimensionais",
          "requisito": "—",
          "efeito": "Ao usar Surto Arcano para se teletransportar, você pode levar uma criatura voluntária Média ou menor a até 1,5 metro, fazendo-a aparecer a até 1,5 metro do destino."
        },
        {
          "nivel": "4º",
          "nome": "Égide Fantasma",
          "requisito": "—",
          "efeito": "Você pode atravessar os espaços de outras criaturas sem penalidade e passar por objetos ou barreiras não mágicas com até 2,5 centímetros de espessura."
        },
        {
          "nivel": "4º",
          "nome": "Força Rúnica",
          "requisito": "—",
          "efeito": "Seu valor de Força torna-se igual ao seu valor de Inteligência."
        },
        {
          "nivel": "5º",
          "nome": "Voo Arcano",
          "requisito": "—",
          "efeito": "Você ganha deslocamento de voo de 9 metros."
        },
        {
          "nivel": "5º",
          "nome": "Alacridade Arcana",
          "requisito": "—",
          "efeito": "Ao realizar a ação de Ataque, você pode atacar duas vezes em vez de uma."
        },
        {
          "nivel": "5º",
          "nome": "Égide Resiliente",
          "requisito": "—",
          "efeito": "Você ganha proficiência em um teste de resistência à sua escolha."
        },
        {
          "nivel": "5º",
          "nome": "Égide de Pedra",
          "requisito": "—",
          "efeito": "Reduza em 5 todo dano que sofrer."
        }
      ],
      "description": "O nível indica o espaço de magia sacrificado para manter o efeito até o próximo descanso longo.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    },
    {
      "title": "Lista de Magias do Spellblade",
      "page": 18,
      "columns": [
        {
          "key": "nivel",
          "label": "Círculo"
        },
        {
          "key": "magias",
          "label": "Magias"
        }
      ],
      "rows": [
        {
          "nivel": "Truques",
          "magias": "Espirro Ácido, Toque Arrepiante, Globos de Luz, Toque Decompositor, Arco Elétrico, Raio de Fogo, Dardo de Força, Congelar, Dardo Ilusório, Luz, Mãos Mágicas, Mensagem, Ilusão Menor, Rajada de Veneno, Preservação, Prestidigitação, Produzir Chamas, Raio de Gelo, Resistência, Toque Chocante, Ataque Certeiro, Projétil de Água"
        },
        {
          "nivel": "1º nível",
          "magias": "Bolha Ácida, Alarme, Repreensão Elemental de Aldricor, Ablação Arcana, Arma Arcana, Sopro Ártico, Sangue Ruim, Perdição, Mãos Flamejantes, Miragem de Lâmina, Onda Devastadora, Agonia Debilitante, Eletrificar, Orbe Elemental, Sepultar, Olhos da Imolação, Fogo das Fadas, Queda Suave, Nuvem de Névoa, Dardo de Vendaval, Área Escorregadia, Agarre dos Mortos, Infligir Ferimentos, Flecha de Gelo, Tentáculo de Relâmpago, Passos Longos, Armadura Arcana, Mísseis Mágicos, Glóbulo Derretente, Clarão Prismático, Escudo, Vínculo Sombrio, Riso Histérico de Tasha, Soco Trovejante, Onda Trovejante, Momento Tranquilo, Servo Invisível, Corrente Ascendente Violenta, Explosão de Água"
        },
        {
          "nivel": "2º nível",
          "magias": "Alacridade, Tornar-se Fogo, Tornar-se Pedra, Tornar-se Água, Tornar-se Vento, Cegueira/Surdez, Nublar, Ferver Sangue, Golpe Ardente, Toque de Argila, Onda de Frio, Crepitar, Corte Crescente de Vento, Desorientar, Escuridão, Visão no Escuro, Ímpeto Dracônico, Ondulação da Terra, Exalação Elemental, Aprimorar Habilidade, Aumentar/Reduzir, Imolação Etérea, Arremessar, Ímpeto Gravitacional, Imobilizar Pessoa, Corte do Furacão, Grilhões Infernais, Contramedida Instantânea, Invisibilidade, Golpe do Vento de Ferro, Reflexos, Passo Nebuloso, Dardo Venenoso, Golpe de Pseudópode, Raio do Enfraquecimento, Ver o Invisível, Despedaçar, Escudo Estilhaçante, Patas de Aranha, Poeira Estelar, Salto Temporal, Armadilha Temporal, Atração do Vácuo, Teia, Cortador de Vento"
        },
        {
          "nivel": "3º nível",
          "magias": "Poço Ácido, Lança de Éter, Aura Ártica, Piscar, Contramágica, Singularidade Esmagadora, Dissipar Magia, Eletrocutar, Erodir, Bola de Fogo, Ciclone de Fogo, Congelamento Súbito, Voo, Passo Fantasma, Velocidade, Vazio Faminto, Relâmpago, Salto Meteórico, Onda Sísmica, Nevasca, Picada de Aranha, Campo Estático, Nuvem Fétida, Idiomas, Toque Vampírico, Explosão de Vórtice, Respirar na Água, Canhão de Água, Caminhar na Água, Definhar"
        },
        {
          "nivel": "4º nível",
          "magias": "Barragem Aérea, Olho Arcano, Banimento, Raio de Bile, Tentáculos Negros de Evard, Definhar, Confusão, Devorar Sombra, Cortador Dimensional, Porta Dimensional, Lança Ecoante, Escudo de Fogo, Lâmina de Força, Movimentação Livre, Gêiser, Invisibilidade Maior, Espinho de Gelo, Tempestade de Gelo, Jardim de Ferro, Descarga Saltitante, Pedras Orbitais, Assassino Fantasmagórico, Pilar de Fogo, Nuvem de Veneno, Passos de Mercúrio, Pele de Pedra, Sufocar, Muralha de Fogo"
        },
        {
          "nivel": "5º nível",
          "magias": "Chuva Ácida, Tempestade de Éter, Queda de Bigorna, Onda Explosiva, Barragem Sepulcral, Nuvem Mortal, Cone de Frio, Esfolar Criatura, Escuridão Devoradora, Fissura, Golpes Cintilantes, Imobilizar Monstro, Despistar, Criar Passagem, Cortador de Pressão, Lança Piroclástica, Vidência, Explosão Celeste, Guincho Sônico, Telecinésia, Tornado"
        }
      ],
      "description": "Lista de magias apresentada no PDF da classe, com os nomes localizados para PT-BR.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    }
  ],
  "references": [
    {
      "title": "LICENÇA E ATRIBUIÇÃO",
      "page": 19,
      "text": "O texto de classes, subclasses, magias e demais regras do documento é disponibilizado sob a Licença Creative Commons Atribuição 4.0 Internacional. A atribuição indicada pelo documento é: “Includes content from Kibbles’ Compendium of Legends and Legacies by KibblesTasty Homebrew LLC and available at https://www.kthomebrew.com/krd.” As artes do PDF não fazem parte dessa licença e não foram incluídas no projeto.",
      "sourceTitle": "Spellblade v1.3 — KibblesTasty"
    }
  ]
};
  const subclassData = [
  {
    "id": "spellblade-battlemage",
    "classId": "spellblade",
    "name": "Mago de Batalha",
    "originalName": "Battlemage",
    "desc": "No mundo versátil dos Spellblades, o Mago de Batalha é o paradigma do equilíbrio, dominando tanto a proeza marcial quanto a arte arcana. No ponto de encontro entre força e magia, ele representa a síntese perfeita dessas duas disciplinas antigas e adapta-se constantemente a qualquer situação.",
    "sourcePage": "6",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Mago de Batalha",
      "pages": "6",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DO MAGO DE BATALHA",
        "level": 3,
        "page": 6,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias que conhece.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      },
      {
        "title": "GUERREIRO ARCANO",
        "level": 3,
        "page": 6,
        "text": "Ao escolher esta técnica no 3º nível, sempre que terminar um descanso longo, você pode tocar uma arma com a qual seja proficiente e que não possua a propriedade Duas Mãos. Ao atacar com essa arma, você pode usar seu modificador de Inteligência, em vez de Força ou Destreza, nas jogadas de ataque e dano. O benefício dura até você terminar um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      },
      {
        "title": "SURTO ACELERADOR",
        "level": 3,
        "page": 6,
        "text": "Você ganha uma nova opção para Surto Arcano: pode conjurar como ação bônus uma magia de Spellblade com tempo de conjuração de 1 ação.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      },
      {
        "title": "SURTO DUPLO",
        "level": 7,
        "page": 6,
        "text": "No 7º nível, quando usa Surto Arcano, você pode escolher duas das opções disponíveis.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      },
      {
        "title": "MAESTRIA DO SURTO",
        "level": 15,
        "page": 6,
        "text": "A partir do 15º nível, suas opções de Surto Arcano recebem resultados aprimorados:\n\n• Visão Arcana: ao conjurar Detectar Magia com Surto Arcano, você também recebe os efeitos de Visão no Escuro e Ver o Invisível.\n\n• Precisão Arcana: ao obter vantagem em um ataque por meio do Surto Arcano, você pode repetir uma vez um dos dados da jogada de ataque.\n\n• Proeza Arcana: ao adicionar Inteligência a um teste de Força ou Destreza, você também recebe vantagem no teste.\n\n• Teleporte Estendido: a distância de seu teleporte aumenta em 3 metros.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      },
      {
        "title": "SURTOS ILIMITADOS",
        "level": 20,
        "page": 6,
        "text": "No 20º nível, você pode entrar em um estado de ressonância arcana perfeita por 1 minuto, sem exigir uma ação. Durante esse estado, usar Surto Arcano não consome usos, embora você ainda só possa usá-lo uma vez por turno. Após usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Mago de Batalha"
      }
    ],
    "tables": [
      {
        "title": "Magias de Mago de Batalha",
        "page": 6,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Mãos Flamejantes"
          },
          {
            "nivel": "5º",
            "magias": "Reflexos"
          },
          {
            "nivel": "9º",
            "magias": "Relâmpago"
          },
          {
            "nivel": "13º",
            "magias": "Porta Dimensional"
          },
          {
            "nivel": "17º",
            "magias": "Imobilizar Monstro"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-aether-blade",
    "classId": "spellblade",
    "name": "Lâmina de Éter",
    "originalName": "Aether Blade",
    "desc": "Os Spellblades da Lâmina de Éter usam suas técnicas mágicas para criar uma arma de puro poder arcano. A maior parte de suas capacidades gira em torno de dominar essa arma.",
    "sourcePage": "7",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter",
      "pages": "7–8",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DA LÂMINA DE ÉTER",
        "level": 3,
        "page": 7,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "LÂMINA DE ÉTER",
        "level": 3,
        "page": 7,
        "text": "Ao escolher esta técnica no 3º nível, quando rola iniciativa ou como uma ação bônus, você pode manifestar uma arma corpo a corpo descomunal feita de energia de força pura. Ela pode assumir a forma de qualquer arma corpo a corpo com lâmina, mas é uma arma de uma mão que causa 1d10 de dano de força e possui alcance de 1,5 metro, independentemente da forma.\n\nAo atacar com essa arma, você pode usar Inteligência no lugar de Força nas jogadas de ataque e dano. A arma dura até você soltá-la, ficar incapacitado ou dispensá-la como ação bônus.\n\nEmbora temporária e mágica, ela conta como um objeto no valor de 1 peça de prata para ser usada como componente material de magias.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "APRIMORAMENTO DE ÉTER",
        "level": 3,
        "page": 7,
        "text": "Em um ritual de 1 hora, você pode absorver o poder de uma arma mágica que conceda bônus às jogadas de ataque e dano. A característica não pode afetar artefatos, armas sencientes ou itens amaldiçoados. A critério do Mestre, pode não funcionar com outras armas dependendo da origem e do tipo. O processo drena o poder da arma, tornando-a mundana, e sua Lâmina de Éter recebe o bônus que a arma possuía.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "SURTO POTENCIALIZADOR",
        "level": 3,
        "page": 7,
        "text": "Você ganha uma nova opção para Surto Arcano: sem exigir uma ação, potencialize sua Lâmina de Éter para que ela cause um dado adicional de dano até o fim do seu próximo turno. Durante o efeito, você pode repetir uma vez qualquer dado de dano da arma, mas deve usar o novo resultado.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "GRANDE ARMA DE ÉTER",
        "level": 7,
        "page": 7,
        "text": "No 7º nível, a arma de éter torna-se maior e mais poderosa. Seu dano aumenta para 1d12 e ela recebe a propriedade Alcance.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "PODER CANALIZADO",
        "level": 15,
        "page": 7,
        "text": "No 15º nível, você recebe os efeitos de Surto Potencializador sempre que usa qualquer opção de Surto Arcano.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      },
      {
        "title": "LÂMINA MASSIVA",
        "level": 20,
        "page": 8,
        "text": "No 20º nível, você pode sobrecarregar sua Lâmina de Éter por 1 minuto, sem exigir uma ação. Durante esse período, ao atacar com ela, você ignora armaduras e defesas não mágicas, tratando a CA do alvo como 10 + o modificador de Destreza dele para aquele ataque. Defesas mágicas, como Armadura Arcana ou Escudo, não são ignoradas.\n\nSeus ataques podem ter como alvo até duas criaturas, desde que estejam a até 3 metros uma da outra. Se o ataque ativar uma magia por Golpe Mágico, a magia não afeta o segundo alvo a menos que possa atingir várias criaturas.\n\nDepois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Éter"
      }
    ],
    "tables": [
      {
        "title": "Magias de Lâmina de Éter",
        "page": 7,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Mísseis Mágicos"
          },
          {
            "nivel": "5º",
            "magias": "Poeira Estelar"
          },
          {
            "nivel": "9º",
            "magias": "Lança de Éter"
          },
          {
            "nivel": "13º",
            "magias": "Cortador Dimensional"
          },
          {
            "nivel": "17º",
            "magias": "Tempestade de Éter"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-guardian",
    "classId": "spellblade",
    "name": "Guardião",
    "originalName": "Guardian",
    "desc": "Especializados em defender aliados, os Guardiões empregam amplamente abjuração e magias de aprimoramento pessoal. Eles assumem a linha de frente, mas permanecem uma defesa altamente móvel.",
    "sourcePage": "8",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Guardião",
      "pages": "8",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DO GUARDIÃO",
        "level": 3,
        "page": 8,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      },
      {
        "title": "PROFICIÊNCIA DO GUARDIÃO",
        "level": 3,
        "page": 8,
        "text": "Ao escolher esta técnica no 3º nível, você ganha proficiência com armaduras pesadas e escudos.\n\nAlém disso, pode usar uma arma corpo a corpo como foco arcano e realizar componentes somáticos com a mão que segura esse foco, mesmo para magias sem componente material.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      },
      {
        "title": "BARREIRA PROJETADA",
        "level": 3,
        "page": 8,
        "text": "Você ganha uma nova opção para Surto Arcano: como reação quando uma criatura aliada a até 9 metros for atingida por um ataque ou se tornar alvo de Mísseis Mágicos, gaste um uso de Surto Arcano para conjurar Escudo sem gastar espaço de magia, concedendo o bônus de CA à criatura em vez de a você.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      },
      {
        "title": "SURTO FORTIFICANTE",
        "level": 7,
        "page": 8,
        "text": "No 7º nível, sempre que gastar um uso de Surto Arcano, você recebe pontos de vida temporários iguais a 1d8 + seu modificador de Inteligência.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      },
      {
        "title": "SURTO DE TROCA",
        "level": 15,
        "page": 8,
        "text": "No 15º nível, ao usar o teleporte de Surto Arcano, você pode trocar de posição com uma criatura voluntária dentro do alcance, aparecendo no espaço dela enquanto ela aparece no seu. Ambos recebem os pontos de vida temporários de Surto Fortificante.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      },
      {
        "title": "ÉGIDE RESISTENTE",
        "level": 20,
        "page": 8,
        "text": "No 20º nível, você pode fortalecer-se magicamente por 1 minuto, sem exigir uma ação. Durante esse período, possui resistência a todo tipo de dano. Depois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Guardião"
      }
    ],
    "tables": [
      {
        "title": "Magias de Guardião",
        "page": 8,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Ablação Arcana"
          },
          {
            "nivel": "5º",
            "magias": "Vínculo Protetor"
          },
          {
            "nivel": "9º",
            "magias": "Velocidade"
          },
          {
            "nivel": "13º",
            "magias": "Esfera Resiliente de Otiluke"
          },
          {
            "nivel": "17º",
            "magias": "Wall of Stone"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-swiftblade",
    "classId": "spellblade",
    "name": "Lâmina Veloz",
    "originalName": "Swiftblade",
    "desc": "Os mais rápidos e letais entre os Spellblades, as Lâminas Velozes especializam-se em mobilidade, atacando das sombras e recuando tão rapidamente quanto surgiram. Preferem armas leves e sequências de golpes que abatem o alvo antes que ele possa reagir.",
    "sourcePage": "9",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz",
      "pages": "9",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DA LÂMINA VELOZ",
        "level": 3,
        "page": 9,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "ESTILO DE LUTA: COMBATE COM DUAS ARMAS",
        "level": 3,
        "page": 9,
        "text": "Ao escolher esta técnica no 3º nível, você recebe o Estilo de Luta Combate com Duas Armas. Quando luta com duas armas, pode adicionar seu modificador de habilidade ao dano do segundo ataque.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "CONJURAÇÃO VELOZ",
        "level": 3,
        "page": 9,
        "text": "A partir do 3º nível, você pode usar Golpe Mágico como parte da ação de Ataque, antes de realizar um ataque corpo a corpo. Você não pode usar Golpe Mágico mais de uma vez por turno.\n\nAlém disso, pode usar uma arma corpo a corpo como foco arcano e realizar componentes somáticos com a mão que segura o foco, mesmo em magias sem componente material.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "SURTO RÁPIDO",
        "level": 3,
        "page": 9,
        "text": "Você ganha uma nova opção para Surto Arcano: gaste um uso para realizar um único ataque com arma, sem exigir uma ação.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "GOLPE MÁGICO IMPLACÁVEL",
        "level": 7,
        "page": 9,
        "text": "No 7º nível, se errar um ataque potencializado por Golpe Mágico, você pode escolher não ativar a magia. Se fizer isso, seu próximo ataque antes do fim do turno ativa o efeito.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "SURTO DESVANECENTE",
        "level": 15,
        "page": 9,
        "text": "No 15º nível, sempre que gastar um uso de Surto Arcano, você fica invisível até o início do seu próximo turno.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      },
      {
        "title": "GOLPES INFINITOS",
        "level": 20,
        "page": 9,
        "text": "No 20º nível, você usa magia para acelerar-se a uma velocidade ofuscante por 1 minuto, sem exigir uma ação. Sempre que realizar um ataque com arma usando uma ação ou ação bônus, pode realizar imediatamente outro ataque com a mesma arma. Depois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina Veloz"
      }
    ],
    "tables": [
      {
        "title": "Magias de Lâmina Veloz",
        "page": 9,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Infligir Ferimentos"
          },
          {
            "nivel": "5º",
            "magias": "Dardo Venenoso"
          },
          {
            "nivel": "9º",
            "magias": "Picada de Aranha"
          },
          {
            "nivel": "13º",
            "magias": "Definhar"
          },
          {
            "nivel": "17º",
            "magias": "Despistar"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-mage-hunter",
    "classId": "spellblade",
    "name": "Caçador de Magos",
    "originalName": "Mage Hunter",
    "desc": "Alguns Spellblades refinam seus poderes para combater outros conjuradores. Eles se tornam a antítese dos usuários de magia, enfrentando fogo com fogo e usando suas próprias técnicas arcanas para limitar e negar o poder mágico alheio.",
    "sourcePage": "10",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Caçador de Magos",
      "pages": "10",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DO CAÇADOR DE MAGOS",
        "level": 3,
        "page": 10,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      },
      {
        "title": "GOLPES DISRUPTIVOS",
        "level": 3,
        "page": 10,
        "text": "A partir do 3º nível, uma vez por turno, quando atinge um alvo com uma arma corpo a corpo, causa dano de força adicional igual ao seu bônus de proficiência. Esse bônus é dobrado até o fim do turno quando você conjura uma magia de Abjuração ou uma magia do Caçador de Magos.\n\nAlém disso, suas jogadas de ataque com arma ignoram os efeitos de magias de 1º nível, como Armadura Arcana, Escudo ou Santuário.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      },
      {
        "title": "SURTO PURIFICADOR",
        "level": 3,
        "page": 10,
        "text": "Você ganha uma nova opção para Surto Arcano: em seu turno, gaste um uso para encerrar em si mesmo um efeito mágico ou uma condição sobrenatural, como Enfeitiçado ou Amedrontado, sem exigir uma ação. Se a magia possuir nível superior à metade do seu nível de Spellblade, arredondado para cima, você deve passar em um teste de resistência de Inteligência com CD 10 + o nível da magia. Você não pode usar esta característica se estiver incapacitado.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      },
      {
        "title": "SURTO ANULADOR",
        "level": 7,
        "page": 10,
        "text": "No 7º nível, você pode usar Surto Purificador mesmo estando incapacitado. Além disso, pode projetar o poder purificador para fora, gastando dois usos de Surto Arcano para conjurar Contramágica ou Dissipar Magia sem gastar um espaço de magia.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      },
      {
        "title": "ABJURAÇÃO ESPECIALISTA",
        "level": 15,
        "page": 10,
        "text": "No 15º nível, quando precisa fazer um teste com sua habilidade de conjuração para dissipar ou contrariar um efeito mágico usando Surto Purificador ou Surto Anulador, você pode adicionar seu bônus de proficiência à jogada.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      },
      {
        "title": "VAZIO DE MANA",
        "level": 20,
        "page": 10,
        "text": "No 20º nível, você pode transformar-se em um vazio mágico que devora e anula magia ao redor. Por 1 minuto, sem exigir uma ação, projeta o efeito de Campo Antimagia em um raio de 1,5 metro centrado em você. Você ainda pode conjurar dentro do campo, mas fica limitado a magias de Abjuração e truques. O campo não afeta nem remove seus efeitos de Égide.\n\nUma vez por turno durante a duração, quando contrariar ou encerrar o efeito de uma magia, você recupera um uso de Surto Arcano.\n\nO efeito termina se você ficar inconsciente ou quando decidir encerrá-lo, sem exigir uma ação. Depois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Caçador de Magos"
      }
    ],
    "tables": [
      {
        "title": "Magias de Caçador de Magos",
        "page": 10,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Repreensão Elemental de Aldricor"
          },
          {
            "nivel": "5º",
            "magias": "Silêncio"
          },
          {
            "nivel": "9º",
            "magias": "Contramágica"
          },
          {
            "nivel": "13º",
            "magias": "Sufocar"
          },
          {
            "nivel": "17º",
            "magias": "Dissipar o Bem e o Mal"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-spellshot",
    "classId": "spellblade",
    "name": "Atirador Arcano",
    "originalName": "Spellshot",
    "desc": "Atiradores Arcanos preferem manter o Golpe Mágico a uma distância segura, lançando morte de longe. De arqueiros arcanos a pistoleiros mágicos, todos infundem magias em munições e aproveitam a liberdade de movimento para buscar o alinhamento perfeito.",
    "sourcePage": "11",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Atirador Arcano",
      "pages": "11–12",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DO ATIRADOR ARCANO",
        "level": 3,
        "page": 11,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "GOLPE MÁGICO À DISTÂNCIA",
        "level": 3,
        "page": 11,
        "text": "Ao escolher esta técnica no 3º nível, você pode aplicar Golpe Mágico a peças de munição, além de armas corpo a corpo, e ativar a magia com um ataque de arma à distância feito usando a munição infundida.\n\nA magia afeta o alvo do ataque, mas seu alcance fica limitado ao menor valor entre o alcance da magia e o alcance normal da arma. Se atacar além desse limite, a magia falha e é perdida. Para magias que criam cones ou linhas, o efeito se origina de você normalmente.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "SURTO DISTANTE",
        "level": 3,
        "page": 11,
        "text": "Você ganha uma nova opção para Surto Arcano — Golpe Distante: ao infundir em uma munição uma magia que tenha como alvo uma criatura ou produza uma linha, gaste um uso de Surto Arcano para aumentar o alcance da magia até o alcance da arma usada e remover a desvantagem por disparar no alcance máximo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "MUNIÇÃO TRANSMUTADA",
        "level": 7,
        "page": 11,
        "text": "No 7º nível, quando infunde uma magia que cria uma linha, você pode transmutar sua munição no efeito da magia, liberando-a em uma linha a partir de você como se tivesse conjurado normalmente. Use Força ou Destreza, à sua escolha, no lugar de Inteligência para calcular a CD da magia. Ao fazer isso, adicione o dano da arma, incluindo o modificador, à jogada de dano da magia.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "SURTOS PERSEGUIDORES",
        "level": 15,
        "page": 11,
        "text": "No 15º nível, quando gasta um uso de Surto Arcano, você pode adicionar seu modificador de Inteligência à sua próxima jogada de ataque.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "PROJÉTEIS ARCANOS",
        "level": 15,
        "page": 11,
        "text": "Também no 15º nível, você sempre pode gerar munição de energia de força arcana ao disparar uma arma à distância. Você não consome munição ao usar uma arma com a propriedade Munição, e o dano da arma torna-se dano de força.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      },
      {
        "title": "CONTROLE COMPLETO",
        "level": 20,
        "page": 12,
        "text": "No 20º nível, você pode entrar em um estado de concentração perfeita por 1 minuto, permitindo curvar e guiar seus disparos. Seus ataques com armas à distância ignoram cobertura, inclusive cobertura total, desde que exista um caminho que o projétil possa percorrer até o alvo.\n\nDurante o estado, você pode usar Surto Distante sem gastar Surto Arcano. Uma vez por ataque, se errar uma criatura com um ataque à distância, pode redirecionar o ataque para outra criatura ao alcance, fazendo uma nova jogada. Ao redirecionar um ataque com Golpe Mágico que exige teste de resistência, escolha entre descarregar a magia contra o alvo original, caso ela tenha efeito em um erro, ou redirecioná-la ao novo alvo.\n\nDepois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Atirador Arcano"
      }
    ],
    "tables": [
      {
        "title": "Magias de Atirador Arcano",
        "page": 11,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Disparo Múltiplo"
          },
          {
            "nivel": "5º",
            "magias": "Barragem Elemental"
          },
          {
            "nivel": "9º",
            "magias": "Relâmpago"
          },
          {
            "nivel": "13º",
            "magias": "Invisibilidade Maior"
          },
          {
            "nivel": "17º",
            "magias": "Cortador de Pressão"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-rimeblade",
    "classId": "spellblade",
    "name": "Lâmina de Geada",
    "originalName": "Rimeblade",
    "desc": "Como uma Lâmina de Geada, você desfaz a fronteira entre o arcano e o ártico, empunhando sua arma com a precisão fria da borda de uma estalactite. Seus golpes infundidos de gelo ecoam o avanço impiedoso do inverno e congelam os inimigos no campo de batalha.",
    "sourcePage": "12",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada",
      "pages": "12–13",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DA LÂMINA DE GEADA",
        "level": 3,
        "page": 12,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "LÂMINA DE GELO",
        "level": 3,
        "page": 12,
        "text": "Ao escolher esta técnica no 3º nível, sempre que terminar um descanso longo, você pode tocar uma arma com a qual seja proficiente e que não possua a propriedade Duas Mãos. A arma é infundida com energia gélida: você pode mudar o dano dela para frio e usar Inteligência, em vez de Força ou Destreza, nas jogadas de ataque e dano.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "ARSENAL ÁRTICO",
        "level": 3,
        "page": 12,
        "text": "Você aprende o truque Arma de Gelo e pode conjurá-lo uma vez por turno sem exigir uma ação bônus. Qualquer arma criada pelo truque é considerada sob o efeito de Lâmina de Gelo, mesmo que possua a propriedade Duas Mãos.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "MORDIDA DO FRIO",
        "level": 3,
        "page": 13,
        "text": "Você ganha uma nova opção para Surto Arcano: ao atingir uma criatura com um ataque de arma corpo a corpo, gaste um uso para remover qualquer imunidade ou resistência dela a dano de frio e impor desvantagem nos testes de resistência contra magias que causam dano de frio. Isso inclui a magia ativada pelo ataque caso tenha sido usada com Golpe Mágico e exija um teste para efeitos adicionais. Os efeitos duram até o fim do seu próximo turno.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "CORAÇÃO CONGELADO",
        "level": 7,
        "page": 13,
        "text": "No 7º nível, você ganha resistência a dano de frio e vantagem em testes de resistência contra ser Enfeitiçado ou Amedrontado.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "GARRA DO INVERNO",
        "level": 15,
        "page": 13,
        "text": "No 15º nível, sempre que uma criatura sob Mordida do Frio sofrer dano de frio, a duração do efeito é prolongada por mais uma rodada, terminando no fim do seu próximo turno. Além disso, quando a criatura falhar em um teste de resistência contra uma de suas magias que cause dano de frio, ela fica Contida até o início do próximo turno dela.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      },
      {
        "title": "ERA DO GELO",
        "level": 20,
        "page": 13,
        "text": "No 20º nível, você pode liberar uma explosão de energia congelante que mergulha uma área de 9 metros de raio centrada em você em um estado de gelo eterno por 1 minuto, sem exigir uma ação.\n\n• Terreno Difícil: a área é terreno difícil para criaturas diferentes de você.\n\n• Resistência ao Frio: aliados na área ganham resistência a frio; criaturas hostis perdem qualquer resistência a frio que possuam.\n\n• Lentidão: criaturas na área quando você ativa a característica ficam sob o efeito de Lentidão. No fim de cada turno, uma criatura afetada realiza um teste de Constituição. Em um sucesso, o efeito termina; em uma falha, ela também fica Contida enquanto permanecer sob Lentidão. Criaturas fora da área passam automaticamente no teste. Você pode excluir da Lentidão um número de criaturas igual ao seu modificador de Inteligência.\n\nVocê pode encerrar o efeito em seu turno para descongelar a área. Depois de usar esta característica, não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Lâmina de Geada"
      }
    ],
    "tables": [
      {
        "title": "Magias de Lâmina de Geada",
        "page": 12,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Sopro Ártico"
          },
          {
            "nivel": "5º",
            "magias": "Onda de Frio"
          },
          {
            "nivel": "9º",
            "magias": "Lentidão"
          },
          {
            "nivel": "13º",
            "magias": "Espinhos de Gelo"
          },
          {
            "nivel": "17º",
            "magias": "Cone de Frio"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-flying-sword",
    "classId": "spellblade",
    "name": "Espada Voadora",
    "originalName": "Flying Sword",
    "desc": "Como um Spellblade da Espada Voadora, você domina a arte da lâmina flutuante, separando sua força de vontade do corpo físico. A espada torna-se uma extensão da mente e uma manifestação de sua proeza arcana, combinando telecinese, intelecto e maestria marcial.",
    "sourcePage": "13",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Espada Voadora",
      "pages": "13–14",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DA ESPADA VOADORA",
        "level": 3,
        "page": 13,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      },
      {
        "title": "ESPADA VOADORA",
        "level": 3,
        "page": 13,
        "text": "No 3º nível, durante um descanso longo, você pode tocar uma arma corpo a corpo e infundi-la com poder mágico. Essa Espada Voadora pode ser carregada ou guardada normalmente, ou preparada para flutuar ao seu lado. Enquanto estiver preparada, você pode atacar com ela como parte da ação de Ataque, enviando-a contra um alvo.\n\nOs ataques são considerados ataques corpo a corpo com a arma, mas você pode usar Inteligência no lugar de Força ou Destreza nas jogadas de ataque e dano e atingir alvos a até 9 metros. Se a arma possuir a propriedade Pesada ou Especial, o alcance é reduzido para 4,5 metros; se possuir a propriedade Leve, aumenta para 18 metros.\n\nMagias infundidas na arma afetam o alvo do ataque, mas continuam limitadas ao alcance da magia. Se o alvo estiver além desse alcance, a magia falha e é perdida.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      },
      {
        "title": "SURTO DAS ESPADAS FANTASMAS",
        "level": 3,
        "page": 14,
        "text": "Você ganha uma nova opção para Surto Arcano — Espadas Fantasmas: ao atacar com sua Espada Voadora, gaste um uso para criar duas cópias fantasmagóricas que atacam outros alvos ao alcance. Cada cópia realiza sua própria jogada de ataque. Em um acerto, causa dano de força igual ao dano da Espada Voadora, incluindo o modificador.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      },
      {
        "title": "VOO DA ESPADA",
        "level": 7,
        "page": 14,
        "text": "No 7º nível, seu domínio telecinético permite comandar a arma remotamente e usá-la como transporte. Você pode ficar de pé sobre ela e tratá-la como uma Vassoura Voadora, embora somente você possa montá-la; qualquer coisa carregada pela espada cai se você atacar com ela.\n\nAlém disso, o alcance dos ataques da Espada Voadora é dobrado.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      },
      {
        "title": "BARRAGEM DE ESPADAS FANTASMAS",
        "level": 15,
        "page": 14,
        "text": "No 15º nível, ao usar Surto das Espadas Fantasmas, você pode criar duas cópias adicionais, totalizando quatro, e cada uma pode atacar um alvo diferente ao alcance.\n\nAlém disso, ao usar qualquer outra opção de Surto Arcano, você pode criar uma única cópia fantasmagórica em seu próximo ataque antes do fim do turno.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      },
      {
        "title": "MOVIMENTO SUPREMO",
        "level": 20,
        "page": 14,
        "text": "No 20º nível, você domina o movimento supremo de seu estilo e libera um golpe imparável. Como um ataque dentro da ação de Ataque, carregue sua espada com poder místico e envie-a em uma explosão. Todas as criaturas em uma linha de 36 metros de comprimento e 4,5 metros de largura realizam um teste de Destreza. Em uma falha, sofrem 6d6 de dano cortante e 6d6 de dano de força; em um sucesso, sofrem metade. Você pode excluir da área um número de criaturas igual ao seu modificador de Inteligência.\n\nSe a espada estava infundida por Golpe Mágico com uma magia de área, como Bola de Fogo, a área da magia torna-se a área desta característica. Caso contrário, a magia é descarregada contra o primeiro alvo, tratando uma falha no teste como um acerto de Golpe Mágico.\n\nDepois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Espada Voadora"
      }
    ],
    "tables": [
      {
        "title": "Magias de Espada Voadora",
        "page": 13,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Salto"
          },
          {
            "nivel": "5º",
            "magias": "Objeto Dançante"
          },
          {
            "nivel": "9º",
            "magias": "Voo"
          },
          {
            "nivel": "13º",
            "magias": "Passos de Mercúrio"
          },
          {
            "nivel": "17º",
            "magias": "Animar Objetos"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  },
  {
    "id": "spellblade-spellfist",
    "classId": "spellblade",
    "name": "Punho Mágico",
    "originalName": "Spellfist",
    "desc": "Como um Punho Mágico, você personifica poder bruto e energia arcana, canalizando magia em cada soco. Suas mãos são armas e condutores de força mágica, combinando o desafio intelectual da magia com o impacto visceral do combate corpo a corpo.",
    "sourcePage": "15",
    "source": {
      "title": "Spellblade v1.3 — KibblesTasty — Punho Mágico",
      "pages": "15–16",
      "chapter": "Técnicas de Spellblade"
    },
    "features": [
      {
        "title": "MAGIAS DO PUNHO MÁGICO",
        "level": 3,
        "page": 15,
        "text": "Você aprende as magias apresentadas na tabela da subclasse. Elas são magias de Spellblade para você e não contam no número de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      },
      {
        "title": "MAGIA CINÉTICA",
        "level": 3,
        "page": 15,
        "text": "Ao escolher esta técnica no 3º nível, você domina a harmonia entre magia e golpes com os punhos. O dano de seus ataques desarmados feitos com os punhos aumenta para 1d8 de concussão, e eles se tornam alvos válidos para Golpe Mágico. Quando realiza um ataque desarmado infundido, ele é considerado mágico para superar resistência a ataques não mágicos, e você pode converter seu dano de concussão no tipo de dano da magia.\n\nAo infundir em seu punho uma magia de Spellblade que cause dano em área, você pode usar Força no lugar de Inteligência para calcular a CD da magia.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      },
      {
        "title": "MAGIA IMPACTANTE",
        "level": 3,
        "page": 15,
        "text": "Você ganha duas novas opções para Surto Arcano:\n\n• Impacto Arcano: quando empurrar um alvo para longe, gaste um uso para empurrá-lo mais 3 metros.\n\n• Agarre Arcano: quando atingir com um ataque corpo a corpo, gaste um uso para tentar agarrar ou empurrar o alvo, sem exigir uma ação. Você tem vantagem no teste de habilidade.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      },
      {
        "title": "À QUEIMA-ROUPA",
        "level": 7,
        "page": 15,
        "text": "No 7º nível, ao usar Golpe Mágico enquanto estiver agarrando um alvo, você pode infundir a magia diretamente nele, tratando-a como se o ataque infundido tivesse acertado automaticamente. O alvo ainda realiza testes contra efeitos além do dano, mas os faz com desvantagem.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      },
      {
        "title": "RESILIÊNCIA DO BRIGÃO",
        "level": 15,
        "page": 16,
        "text": "No 15º nível, ao gastar um uso de Surto Arcano, você ganha resistência a todo tipo de dano até o início do seu próximo turno.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      },
      {
        "title": "PODER ILIMITADO",
        "level": 20,
        "page": 16,
        "text": "No 20º nível, você pode canalizar magia diretamente nos músculos, fazendo sua força superar os limites comuns por 1 minuto.\n\n• Força Sobrenatural: seu valor de Força e seu máximo de Força aumentam em 2.\n\n• Zona de Explosão: o dano de sua característica Dano Colateral passa a preencher um cone de 9 metros.\n\n• Saltos Impetuosos: a distância de seus saltos torna-se igual ao seu deslocamento.\n\n• Vantagem de Força: você tem vantagem em todos os testes de habilidade e testes de resistência de Força.\n\nDepois de usar esta característica, você não pode usá-la novamente até concluir um descanso longo.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty — Punho Mágico"
      }
    ],
    "tables": [
      {
        "title": "Magias de Punho Mágico",
        "page": 15,
        "columns": [
          {
            "key": "nivel",
            "label": "Nível de Spellblade"
          },
          {
            "key": "magias",
            "label": "Magias aprendidas"
          }
        ],
        "rows": [
          {
            "nivel": "3º",
            "magias": "Soco Trovejante"
          },
          {
            "nivel": "5º",
            "magias": "Despedaçar"
          },
          {
            "nivel": "9º",
            "magias": "Explosão de Vórtice"
          },
          {
            "nivel": "13º",
            "magias": "Barragem Aérea"
          },
          {
            "nivel": "17º",
            "magias": "Onda de Choque"
          }
        ],
        "description": "Estas magias contam como magias de Spellblade para você e não contam no limite de magias conhecidas.",
        "sourceTitle": "Spellblade v1.3 — KibblesTasty"
      }
    ]
  }
];
  const progressionData = {
  "id": "spellblade",
  "title": "O Spellblade",
  "sourceTitle": "Spellblade v1.3 — KibblesTasty",
  "sourcePage": 2,
  "columns": [
    {
      "key": "level",
      "label": "Nível",
      "sticky": true
    },
    {
      "key": "proficiency",
      "label": "Bônus de Proficiência",
      "shortLabel": "Prof."
    },
    {
      "key": "features",
      "label": "Características",
      "wide": true
    },
    {
      "key": "cantrips",
      "label": "Truques Conhecidos",
      "shortLabel": "Truques"
    },
    {
      "key": "spellsKnown",
      "label": "Magias Conhecidas"
    },
    {
      "key": "slot1",
      "label": "1º",
      "shortLabel": "1º",
      "group": "Espaços de Magia"
    },
    {
      "key": "slot2",
      "label": "2º",
      "shortLabel": "2º",
      "group": "Espaços de Magia"
    },
    {
      "key": "slot3",
      "label": "3º",
      "shortLabel": "3º",
      "group": "Espaços de Magia"
    },
    {
      "key": "slot4",
      "label": "4º",
      "shortLabel": "4º",
      "group": "Espaços de Magia"
    },
    {
      "key": "slot5",
      "label": "5º",
      "shortLabel": "5º",
      "group": "Espaços de Magia"
    }
  ],
  "rows": [
    {
      "level": 1,
      "proficiency": "+2",
      "features": [
        "Surto Arcano (2 usos)",
        "Truque Mágico"
      ],
      "cantrips": 1,
      "spellsKnown": "—",
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
        "Conjuração",
        "Golpe Mágico",
        "Égide",
        "Deflexão Arcana"
      ],
      "cantrips": 3,
      "spellsKnown": 3,
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
        "Técnica de Spellblade"
      ],
      "cantrips": 3,
      "spellsKnown": 4,
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
        "Incremento no Valor de Habilidade"
      ],
      "cantrips": 3,
      "spellsKnown": 4,
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
        "Golpe Potencializado",
        "Surto Arcano (3 usos)"
      ],
      "cantrips": 5,
      "spellsKnown": 5,
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
        "Recuperação Arcana",
        "Proteção Mágica"
      ],
      "cantrips": 5,
      "spellsKnown": 5,
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
        "Característica de Especialização"
      ],
      "cantrips": 5,
      "spellsKnown": 6,
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
        "Incremento no Valor de Habilidade"
      ],
      "cantrips": 5,
      "spellsKnown": 6,
      "slot1": 4,
      "slot2": 3,
      "slot3": "—",
      "slot4": "—",
      "slot5": "—"
    },
    {
      "level": 9,
      "proficiency": "+4",
      "features": [
        "Surto Arcano (4 usos)"
      ],
      "cantrips": 6,
      "spellsKnown": 7,
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
        "Magia Arquetípica",
        "Égide Expandida (1º nível)"
      ],
      "cantrips": 6,
      "spellsKnown": 7,
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
        "Dano Colateral",
        "Imunidade à Zona de Explosão"
      ],
      "cantrips": 6,
      "spellsKnown": 8,
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
        "Incremento no Valor de Habilidade"
      ],
      "cantrips": 6,
      "spellsKnown": 8,
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
        "Surto Arcano (5 usos)"
      ],
      "cantrips": 7,
      "spellsKnown": 9,
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
        "Foco do Surto",
        "Sensibilidade Mágica",
        "Égide Expandida (2º nível)"
      ],
      "cantrips": 7,
      "spellsKnown": 9,
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
        "Característica de Especialização"
      ],
      "cantrips": 7,
      "spellsKnown": 10,
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
        "Incremento no Valor de Habilidade"
      ],
      "cantrips": 7,
      "spellsKnown": 10,
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
        "Surto Arcano (6 usos)"
      ],
      "cantrips": 8,
      "spellsKnown": 11,
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
        "Dano Colateral",
        "Égide Expandida (3º nível)",
        "Controle da Zona de Explosão"
      ],
      "cantrips": 8,
      "spellsKnown": 11,
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
        "Incremento no Valor de Habilidade"
      ],
      "cantrips": 8,
      "spellsKnown": 12,
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
        "Característica de Especialização"
      ],
      "cantrips": 8,
      "spellsKnown": 12,
      "slot1": 4,
      "slot2": 3,
      "slot3": 3,
      "slot4": 3,
      "slot5": 2
    }
  ]
};

  if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
  subclassData.forEach(sub => { if (!window.GRIMORIO_SUBCLASSES.some(item => item.id === sub.id)) window.GRIMORIO_SUBCLASSES.push(sub); });
  window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressionData;
  window.GRIMORIO_SPELLBLADE_CLASS_SPELL_NAMES = [
  "Ablação Arcana",
  "Acid Bubble",
  "Acid Rain",
  "Acid Splash",
  "Acidic Pit",
  "Aero Barrage",
  "Aether Lance",
  "Aether Storm",
  "Agarre dos Mortos",
  "Agonia Debilitante",
  "Alacridade",
  "Alacrity",
  "Alarm",
  "Alarme",
  "Aldricor’s Elemental Rebuke",
  "Animar Objetos",
  "Animate Objects",
  "Anvil Drop",
  "Aprimorar Habilidade",
  "Arcane Ablation",
  "Arcane Eye",
  "Arcane Weapon",
  "Arco Elétrico",
  "Arctic Aura",
  "Arctic Breath",
  "Arma Arcana",
  "Armadilha Temporal",
  "Armadura Arcana",
  "Arremessar",
  "Assassino Fantasmagórico",
  "Ataque Certeiro",
  "Atração do Vácuo",
  "Aumentar/Reduzir",
  "Aura Ártica",
  "Bad Blood",
  "Bane",
  "Banimento",
  "Banishment",
  "Barragem Aérea",
  "Barragem Elemental",
  "Barragem Sepulcral",
  "Become Fire",
  "Become Stone",
  "Become Water",
  "Become Wind",
  "Bile Beam",
  "Black Tentacles",
  "Blade Mirage",
  "Blastwave",
  "Blight",
  "Blindness/Deafness",
  "Blink",
  "Blur",
  "Boil Blood",
  "Bola de Fogo",
  "Bolha Ácida",
  "Burial Barrage",
  "Burning Hands",
  "Burning Strike",
  "Caminhar na Água",
  "Campo Estático",
  "Canhão de Água",
  "Cegueira/Surdez",
  "Chill Touch",
  "Chuva Ácida",
  "Ciclone de Fogo",
  "Clarão Prismático",
  "Clay Touch",
  "Cloudkill",
  "Cold Snap",
  "Cone de Frio",
  "Cone of Cold",
  "Confusion",
  "Confusão",
  "Congelamento Súbito",
  "Congelar",
  "Contramedida Instantânea",
  "Contramágica",
  "Corrente Ascendente Violenta",
  "Cortador Dimensional",
  "Cortador de Pressão",
  "Cortador de Vento",
  "Corte Crescente de Vento",
  "Corte do Furacão",
  "Counterspell",
  "Crackle",
  "Crashing Wave",
  "Crepitar",
  "Crescent Wind Slash",
  "Criar Passagem",
  "Crippling Agony",
  "Crushing Singularity",
  "Dancing Lights",
  "Dancing Object",
  "Dardo Ilusório",
  "Dardo Venenoso",
  "Dardo de Força",
  "Dardo de Vendaval",
  "Darkness",
  "Darkvision",
  "Decaying Touch",
  "Definhar",
  "Deglove Creature",
  "Descarga Saltitante",
  "Desorientar",
  "Despedaçar",
  "Despistar",
  "Devorar Sombra",
  "Devour Shadow",
  "Devouring Darkness",
  "Dimension Cutter",
  "Dimension Door",
  "Disorient",
  "Disparo Múltiplo",
  "Dispel Evil and Good",
  "Dispel Magic",
  "Dissipar Magia",
  "Dissipar o Bem e o Mal",
  "Dragon Surge",
  "Earth Ripple",
  "Echoing Lance",
  "Electric Arc",
  "Electrify",
  "Electrocute",
  "Elemental Barrage",
  "Elemental Exhalation",
  "Elemental Orb",
  "Eletrificar",
  "Eletrocutar",
  "Enhance Ability",
  "Enlarge/Reduce",
  "Entomb",
  "Erode",
  "Erodir",
  "Escudo",
  "Escudo Estilhaçante",
  "Escudo de Fogo",
  "Escuridão",
  "Escuridão Devoradora",
  "Esfera Resiliente de Otiluke",
  "Esfolar Criatura",
  "Espinho de Gelo",
  "Espinhos de Gelo",
  "Espirro Ácido",
  "Ethereal Immolation",
  "Exalação Elemental",
  "Explosão Celeste",
  "Explosão de Vórtice",
  "Explosão de Água",
  "Eyes of Immolation",
  "Faerie Fire",
  "Feather Fall",
  "Ferver Sangue",
  "Fire Bolt",
  "Fire Cyclone",
  "Fire Shield",
  "Fireball",
  "Fissura",
  "Fissure",
  "Flash Freeze",
  "Flecha de Gelo",
  "Flickering Strikes",
  "Fling",
  "Fly",
  "Fog Cloud",
  "Fogo das Fadas",
  "Force Blade",
  "Force Bolt",
  "Freedom of Movement",
  "Freeze",
  "Gale Bolt",
  "Geyser",
  "Ghost Step",
  "Globos de Luz",
  "Glóbulo Derretente",
  "Golpe Ardente",
  "Golpe de Pseudópode",
  "Golpe do Vento de Ferro",
  "Golpes Cintilantes",
  "Gravity Surge",
  "Grease",
  "Greater Invisibility",
  "Grilhões Infernais",
  "Grip of the Dead",
  "Guincho Sônico",
  "Gêiser",
  "Haste",
  "Hideous Laughter",
  "Hold Monster",
  "Hold Person",
  "Hungering Void",
  "Hurricane Slash",
  "Ice Arrow",
  "Ice Spike",
  "Ice Spikes",
  "Ice Storm",
  "Idiomas",
  "Illusionary Dart",
  "Ilusão Menor",
  "Imobilizar Monstro",
  "Imobilizar Pessoa",
  "Imolação Etérea",
  "Infernal Shackles",
  "Inflict Wounds",
  "Infligir Ferimentos",
  "Instant Counter",
  "Invisibilidade",
  "Invisibilidade Maior",
  "Invisibility",
  "Iron Garden",
  "Iron Wind Strike",
  "Jardim de Ferro",
  "Jump",
  "Jumping Jolt",
  "Lança Ecoante",
  "Lança Piroclástica",
  "Lança de Éter",
  "Lentidão",
  "Light",
  "Lightning Bolt",
  "Lightning Tendril",
  "Longstrider",
  "Luz",
  "Lâmina de Força",
  "Mage Armor",
  "Mage Hand",
  "Magic Missile",
  "Melting Glob",
  "Mensagem",
  "Message",
  "Meteor Jump",
  "Minor Illusion",
  "Miragem de Lâmina",
  "Mirror Image",
  "Mislead",
  "Misty Step",
  "Momento Tranquilo",
  "Movimentação Livre",
  "Multishot",
  "Muralha de Fogo",
  "Mãos Flamejantes",
  "Mãos Mágicas",
  "Mísseis Mágicos",
  "Nevasca",
  "Nublar",
  "Nuvem Fétida",
  "Nuvem Mortal",
  "Nuvem de Névoa",
  "Nuvem de Veneno",
  "Objeto Dançante",
  "Olho Arcano",
  "Olhos da Imolação",
  "Onda Devastadora",
  "Onda Explosiva",
  "Onda Sísmica",
  "Onda Trovejante",
  "Onda de Choque",
  "Onda de Frio",
  "Ondulação da Terra",
  "Orbe Elemental",
  "Orbital Stones",
  "Passo Fantasma",
  "Passo Nebuloso",
  "Passos Longos",
  "Passos de Mercúrio",
  "Passwall",
  "Patas de Aranha",
  "Pedras Orbitais",
  "Pele de Pedra",
  "Perdição",
  "Phantasmal Killer",
  "Picada de Aranha",
  "Pilar de Fogo",
  "Pillar of Fire",
  "Piscar",
  "Poeira Estelar",
  "Poison Dart",
  "Poison Puff",
  "Poison Spray",
  "Porta Dimensional",
  "Poço Ácido",
  "Preservation",
  "Preservação",
  "Pressure Cutter",
  "Prestidigitation",
  "Prestidigitação",
  "Prismatic Flash",
  "Produce Flame",
  "Produzir Chamas",
  "Projétil de Água",
  "Pseudopod Slam",
  "Pyroclastic Lance",
  "Queda Suave",
  "Queda de Bigorna",
  "Quicksilver Steps",
  "Raio de Bile",
  "Raio de Fogo",
  "Raio de Gelo",
  "Raio do Enfraquecimento",
  "Rajada de Veneno",
  "Ray of Enfeeblement",
  "Ray of Frost",
  "Reflexos",
  "Relâmpago",
  "Repreensão Elemental de Aldricor",
  "Resilient Sphere",
  "Resistance",
  "Resistência",
  "Respirar na Água",
  "Riso Histérico de Tasha",
  "Salto",
  "Salto Meteórico",
  "Salto Temporal",
  "Sangue Ruim",
  "Scrying",
  "See Invisibility",
  "Seismic Wave",
  "Sepultar",
  "Servo Invisível",
  "Shadow Bind",
  "Shatter",
  "Shattering Shield",
  "Shield",
  "Shocking Grasp",
  "Shockwave",
  "Silence",
  "Silêncio",
  "Singularidade Esmagadora",
  "Sky Burst",
  "Sleet Storm",
  "Slow",
  "Soco Trovejante",
  "Sonic Shriek",
  "Sopro Ártico",
  "Spider Bite",
  "Spider Climb",
  "Star Dust",
  "Static Field",
  "Stinking Cloud",
  "Stoneskin",
  "Suffocate",
  "Sufocar",
  "Teia",
  "Telecinésia",
  "Telekinesis",
  "Tempestade de Gelo",
  "Tempestade de Éter",
  "Tentáculo de Relâmpago",
  "Tentáculos Negros de Evard",
  "Thunder Punch",
  "Thunderwave",
  "Time Skip",
  "Time Trap",
  "Tongues",
  "Toque Arrepiante",
  "Toque Chocante",
  "Toque Decompositor",
  "Toque Vampírico",
  "Toque de Argila",
  "Tornado",
  "Tornar-se Fogo",
  "Tornar-se Pedra",
  "Tornar-se Vento",
  "Tornar-se Água",
  "Tranquil Moment",
  "True Strike",
  "Unseen Servant",
  "Vacuum Pull",
  "Vampiric Touch",
  "Vazio Faminto",
  "Velocidade",
  "Ver o Invisível",
  "Vidência",
  "Violent Updraft",
  "Visão no Escuro",
  "Voo",
  "Vortex Blast",
  "Vínculo Protetor",
  "Vínculo Sombrio",
  "Wall of Fire",
  "Wall of Stone",
  "Warding Bond",
  "Water Blast",
  "Water Breathing",
  "Water Bullet",
  "Water Cannon",
  "Water Walk",
  "Web",
  "Wind Cutter",
  "Wither",
  "Área Escorregadia",
  "Ímpeto Dracônico",
  "Ímpeto Gravitacional"
];
})();
