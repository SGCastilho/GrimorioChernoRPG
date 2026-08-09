'use strict';

/* Lutador de Rua — classe homebrew original fornecida pelo usuário. */
(function () {
  const classData = {
  "id": "street-fighter-homebrew",
  "name": "Lutador de Rua",
  "aliases": [
    "Lutador de Rua"
  ],
  "hitDie": "d10",
  "ability": "Força",
  "saves": "Força, Constituição",
  "armor": "Armaduras leves",
  "weapons": "Armas simples, armas improvisadas e armas marciais corpo a corpo sem a propriedade pesada",
  "tools": "Escolha uma: ferramentas de ladrão, veículos terrestres, um tipo de kit de jogo ou um tipo de ferramentas de artesão",
  "skills": "Escolha duas: Acrobacia, Atletismo, Intimidação, Intuição, Investigação, Percepção, Persuasão, Prestidigitação ou Sobrevivência",
  "sigilKey": "street-fighter",
  "color": "#b84e43",
  "desc": "Um combatente marcial que transforma instinto, brutalidade, técnica urbana e presença intimidadora em uma arte de combate própria, recorrendo a punhos, joelhadas, arremessos, armas improvisadas, objetos do cenário e explosões violentas de adrenalina.",
  "source": {
    "title": "Lutador de Rua — Homebrew Original",
    "pages": "2–13",
    "chapter": "Classe Lutador de Rua e Arquétipo Dragão de Dojima"
  },
  "tablePage": 2,
  "overview": [
    {
      "title": "LUTADOR DE RUA",
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Lutador de Rua é um combatente marcial que transforma instinto, brutalidade, técnica urbana e presença intimidadora em uma arte de combate própria.\n\nDiferente de monges disciplinados ou guerreiros treinados em academias militares, o Lutador de Rua aprendeu a sobreviver no caos: punhos, joelhadas, arremessos, armas improvisadas, objetos do cenário e explosões violentas de adrenalina."
    }
  ],
  "creation": [],
  "basics": {
    "title": "CARACTERÍSTICAS DE CLASSE",
    "page": 2,
    "sourceTitle": "Lutador de Rua — Homebrew Original",
    "text": "Como Lutador de Rua, você adquire as seguintes características de classe.\n\nPONTOS DE VIDA\n\nDado de Vida: 1d10 por nível de Lutador de Rua.\n\nPontos de Vida no 1º Nível: 10 + seu modificador de Constituição.\n\nPontos de Vida em Níveis Superiores: 1d10, ou 6, + seu modificador de Constituição por nível de Lutador de Rua após o 1º.\n\nPROFICIÊNCIAS\n\nArmaduras: Armaduras leves.\n\nArmas: Armas simples, armas improvisadas e armas marciais corpo a corpo que não tenham a propriedade pesada.\n\nFerramentas: Escolha uma entre ferramentas de ladrão, veículos terrestres, um tipo de kit de jogo ou um tipo de ferramentas de artesão.\n\nTestes de Resistência: Força e Constituição.\n\nPerícias: Escolha duas entre Acrobacia, Atletismo, Intimidação, Intuição, Investigação, Percepção, Persuasão, Prestidigitação e Sobrevivência.\n\nEQUIPAMENTO\n\nVocê começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:\n\n• (a) uma armadura de couro ou (b) uma jaqueta reforçada equivalente a armadura de couro;\n• (a) uma arma marcial corpo a corpo sem a propriedade pesada ou (b) duas armas simples corpo a corpo;\n• (a) um pacote de aventureiro ou (b) um pacote de explorador de masmorras;\n• (a) ferramentas de ladrão, (b) um kit de jogo à sua escolha ou (c) um tipo de ferramentas de artesão à sua escolha;\n• um objeto urbano resistente que conta como arma improvisada para você; e\n• 10 po.\n\nComo alternativa, você pode começar com 2d4 × 10 po para comprar seu próprio equipamento."
  },
  "features": [
    {
      "title": "BRIGA DE RUA",
      "level": 1,
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Você aprendeu a transformar seu corpo, seus reflexos e qualquer objeto ao seu redor em ferramentas de combate.\n\nVocê possui um Dado de Briga, que representa o dano base dos seus golpes, combos, finalizadores e técnicas de rua. No 1º nível, esse dado é 1d6. Ele aumenta conforme você ganha níveis nesta classe, como mostrado na coluna Dado de Briga da tabela do Lutador de Rua.\n\nEnquanto estiver usando um golpe desarmado, uma arma improvisada, uma arma simples corpo a corpo ou uma arma marcial corpo a corpo sem a propriedade pesada, você pode usar seu modificador de Força para as jogadas de ataque e dano. Além disso:\n\n• Seus golpes desarmados causam dano contundente igual ao seu Dado de Briga.\n• Você é proficiente com armas improvisadas.\n• Quando usa uma arma improvisada, você pode usar seu Dado de Briga no lugar do dano normal da arma improvisada.\n• O Mestre determina o tipo de dano de uma arma improvisada, como contundente, cortante ou perfurante, de acordo com o objeto usado.\n• Uma vez por turno, quando fizer um ataque corpo a corpo, você pode sacar, apanhar ou chutar para sua mão um objeto solto ao seu alcance para usá-lo como arma improvisada naquele ataque.\n\nPara as características desta classe, golpes desarmados, armas improvisadas, armas simples corpo a corpo e armas marciais corpo a corpo sem a propriedade pesada são chamadas de armas de rua."
    },
    {
      "title": "COMBO ACELERADO",
      "level": 1,
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Você desfere uma sequência rápida de socos, cotoveladas, joelhadas, chutes baixos e golpes curtos, pressionando o inimigo com uma ofensiva contínua.\n\nQuando realiza a ação Atacar no seu turno, você pode substituir um dos seus ataques por um Combo Acelerado contra uma criatura ao seu alcance.\n\nFaça uma jogada de ataque corpo a corpo usando uma arma de rua. Em caso de acerto, o alvo sofre dano igual a:\n\n1 Dado de Briga + seu modificador de Força\n\nVocê só pode usar Combo Acelerado uma vez por turno."
    },
    {
      "title": "GOLPE FINALIZADOR",
      "level": 1,
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Após abrir a guarda do inimigo com um combo, você encerra a sequência com um golpe pesado: um direto no queixo, um chute giratório, uma joelhada no torso, uma cotovelada descendente ou uma pancada brutal com o objeto em mãos.\n\nQuando acerta uma criatura com seu Combo Acelerado no seu turno, você pode usar uma ação bônus para fazer um Golpe Finalizador contra a mesma criatura.\n\nFaça uma jogada de ataque corpo a corpo usando uma arma de rua. Em caso de acerto, o alvo sofre dano igual a:\n\n1 Dado de Briga + seu modificador de Força\n\nVocê só pode usar Golpe Finalizador uma vez por turno."
    },
    {
      "title": "DEFESA DE RUA",
      "level": 1,
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Você aprendeu a se proteger sem depender de armaduras pesadas: guarda alta, movimentação curta, resistência física, leitura corporal e puro instinto de sobrevivência.\n\nEnquanto não estiver usando armadura nem escudo, sua Classe de Armadura é igual a:\n\n10 + seu modificador de Destreza + seu modificador de Constituição\n\nVocê ainda pode usar armaduras leves normalmente, mas deve escolher entre a CA da armadura ou a CA concedida por esta característica."
    },
    {
      "title": "CÓLERA",
      "level": 2,
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 2º nível, sua adrenalina em combate se manifesta como Cólera, uma reserva de energia violenta usada para executar surtos explosivos de força, resistência e brutalidade.\n\nVocê começa cada combate com 0 pontos de Cólera. Sua quantidade máxima de Cólera é igual a seu bônus de proficiência + seu modificador de Força. O mínimo de Cólera máxima é igual ao seu bônus de proficiência.\n\nVocê perde toda a sua Cólera quando fica inconsciente ou quando passa 1 minuto sem atacar uma criatura hostil ou participar de uma cena de combate.\n\nGANHANDO CÓLERA\n\nVocê ganha Cólera das seguintes formas:\n\nPressão Ofensiva. Uma vez em cada um dos seus turnos, quando acerta uma criatura hostil com uma arma de rua, seu Combo Acelerado ou seu Golpe Finalizador, você ganha 1 ponto de Cólera.\n\nAguentar na Marra. Uma vez por rodada, quando uma criatura hostil causa dano a você enquanto você está consciente, você ganha 1 ponto de Cólera.\n\nMomento Decisivo. Quando você obtém um acerto crítico com uma arma de rua, Combo Acelerado ou Golpe Finalizador, você ganha 1 ponto de Cólera adicional. Você também ganha 1 ponto de Cólera adicional quando reduz uma criatura hostil a 0 pontos de vida com uma dessas opções.\n\nVocê não pode ultrapassar sua Cólera máxima. O Mestre pode impedir que você ganhe Cólera ao atacar criaturas indefesas, objetos, aliados ou alvos que não representem ameaça real."
    },
    {
      "title": "SURTOS DE CÓLERA",
      "level": 2,
      "page": 4,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 2º nível, você aprende a gastar Cólera para executar Surtos de Cólera. A CD dos seus Surtos é igual a 8 + seu bônus de proficiência + seu modificador de Força.\n\nVocê pode usar apenas um Surto de Cólera por turno.\n\nVocê aprende os seguintes Surtos: Essência do Impacto, Aguentar Pancada, Passo de Rua e Pegada Violenta.\n\nESSÊNCIA DO IMPACTO\nQuando acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, você pode gastar 2 pontos de Cólera para transformar o golpe em um impacto brutal. O ataque causa 1 Dado de Briga adicional de dano. Além disso, escolha um dos efeitos abaixo:\n\n• Empurrão Brutal. O alvo deve ser bem-sucedido em um teste de resistência de Força ou é empurrado 1,5 metro para longe de você.\n• Quebra de Ritmo. O alvo não pode realizar reações até o início do seu próximo turno.\n\nVocê pode ganhar Cólera com o ataque que ativou este Surto.\n\nAGUENTAR PANCADA\nQuando sofre dano, você pode usar sua reação e gastar 1 ponto de Cólera para reduzir o dano recebido em 1 Dado de Briga + seu modificador de Constituição. Essa redução se aplica depois que o dano é rolado, mas antes de ele ser subtraído dos seus pontos de vida.\n\nPASSO DE RUA\nDurante seu turno, quando acerta ou erra uma criatura com seu Combo Acelerado, você pode gastar 1 ponto de Cólera para se mover até 3 metros. Esse movimento não provoca ataques de oportunidade da criatura que você atacou com o Combo Acelerado.\n\nPEGADA VIOLENTA\nQuando faz um teste de Força (Atletismo) para agarrar, empurrar, derrubar, escapar de um agarrão ou realizar uma manobra física semelhante, você pode gastar 1 ponto de Cólera para adicionar seu Dado de Briga ao resultado do teste."
    },
    {
      "title": "ARQUÉTIPO DE RUA",
      "level": 3,
      "page": 4,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 3º nível, você escolhe um arquétipo que representa a forma como sua brutalidade, técnica e experiência nas ruas evoluíram.\n\nSua escolha concede características no 3º nível e novamente nos níveis 6, 11 e 17.\n\nPara esta classe, o primeiro arquétipo disponível é Dragão de Dojima.\n\nO Dragão de Dojima representa o lutador que domina múltiplas formas de combate e alterna entre velocidade, brutalidade e técnica absoluta. Esse arquétipo não luta apenas com força física: ele lê o ritmo da batalha, muda de postura no momento certo e transforma cada golpe em uma declaração de presença.\n\nAo escolher este arquétipo no 3º nível, você recebe a característica Estilos do Dragão de Dojima."
    },
    {
      "title": "ESSÊNCIAS DE CÓLERA",
      "level": 3,
      "page": 4,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 3º nível, você aprende a canalizar sua Cólera em técnicas cinematográficas chamadas Essências de Cólera.\n\nVocê aprende duas Essências de Cólera à sua escolha. Quando ganha um nível nesta classe, você pode substituir uma Essência que conhece por outra Essência para a qual cumpra os pré-requisitos.\n\nAlgumas Essências exigem um nível mínimo de Lutador de Rua, um estilo específico ou uma condição especial, como o alvo estar caído, agarrado ou próximo de uma parede.\n\nUma Essência de Cólera conta como um Surto de Cólera. Portanto, você ainda só pode usar um Surto de Cólera por turno, salvo se uma característica disser o contrário."
    },
    {
      "title": "ESSÊNCIA DO PISÃO FACIAL",
      "level": null,
      "page": 4,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 1 ponto de Cólera.\nPré-requisito: o alvo deve estar caído.\n\nQuando você acerta uma criatura caída com seu Combo Acelerado ou Golpe Finalizador, pode gastar 1 ponto de Cólera para pisar, esmagar ou golpear o alvo com brutalidade.\n\nO ataque causa 1 Dado de Briga adicional de dano. Além disso, o alvo deve ser bem-sucedido em um teste de resistência de Constituição contra sua CD dos Surtos de Cólera ou não poderá realizar reações até o início do seu próximo turno."
    },
    {
      "title": "ESSÊNCIA DA PAREDE",
      "level": null,
      "page": 4,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: o alvo deve estar a até 1,5 metro de uma parede, coluna, veículo, balcão, árvore, estrutura rígida ou objeto grande.\n\nQuando você acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, pode gastar 2 pontos de Cólera para arremessá-la ou esmagá-la contra uma superfície próxima.\n\nO ataque causa 1 Dado de Briga adicional de dano. O alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, ele fica caído."
    },
    {
      "title": "ESSÊNCIA DA ARMA IMPROVISADA",
      "level": null,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 1 ponto de Cólera.\nPré-requisito: você deve estar usando uma arma improvisada.\n\nQuando você acerta uma criatura com uma arma improvisada usando seu Combo Acelerado ou Golpe Finalizador, pode gastar 1 ponto de Cólera para transformar o objeto em uma ferramenta de destruição brutal.\n\nO ataque causa 1 Dado de Briga adicional de dano. Depois do ataque, você pode escolher quebrar a arma improvisada. Se fizer isso, o alvo sofre dano adicional igual ao seu modificador de Força."
    },
    {
      "title": "ESSÊNCIA DO ARREMESSO DE RUA",
      "level": null,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: o alvo deve estar agarrado por você.\n\nQuando você acerta uma criatura agarrada por você com seu Combo Acelerado ou Golpe Finalizador, pode gastar 2 pontos de Cólera para arremessá-la.\n\nO alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, você o arremessa até 3 metros para um espaço desocupado que possa ver, e ele fica caído. Se ele colidir com uma parede, objeto grande ou outra criatura, sofre 1 Dado de Briga adicional de dano.\n\nEm um sucesso, o alvo não é arremessado, mas ainda sofre o dano normal do ataque."
    },
    {
      "title": "ESSÊNCIA DA INTIMIDAÇÃO BRUTAL",
      "level": null,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 1 ponto de Cólera.\nPré-requisito: você deve ter reduzido uma criatura hostil a 0 pontos de vida neste turno.\n\nQuando você reduz uma criatura hostil a 0 pontos de vida com uma arma de rua, Combo Acelerado, Golpe Finalizador ou Essência de Cólera, pode gastar 1 ponto de Cólera para aterrorizar os inimigos próximos.\n\nEscolha uma criatura hostil que possa ver você a até 9 metros. Ela deve realizar um teste de resistência de Sabedoria contra sua CD dos Surtos de Cólera. Em uma falha, ela fica amedrontada por você até o fim do seu próximo turno."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 4,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Incremento de Habilidade neste nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório preserva a concessão exatamente como indicada na tabela e não acrescenta uma mecânica que não esteja escrita no PDF."
    },
    {
      "title": "ATAQUE EXTRA",
      "level": 5,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Ataque Extra no 5º nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório registra a concessão sem completar silenciosamente sua mecânica com texto externo ao PDF."
    },
    {
      "title": "RITMO DE COMBATE",
      "level": 5,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 5º nível, você aprende a mudar seu ritmo no meio da luta, alternando entre pressão, defesa e brutalidade com mais naturalidade.\n\nQuando você rola iniciativa, você pode ganhar 1 ponto de Cólera, desde que não esteja surpreso.\n\nVocê ainda pode trocar seu estilo ativo no início do seu turno sem gastar ação, mas agora também pode trocar de estilo uma vez por rodada quando uma das seguintes situações acontecer:\n\n• você acerta uma criatura com seu Combo Acelerado;\n• você acerta uma criatura com seu Golpe Finalizador;\n• você sofre dano de uma criatura hostil;\n• você reduz uma criatura hostil a 0 pontos de vida.\n\nEssa troca não exige ação, mas só pode acontecer depois que a situação que a ativou for resolvida. Você só pode trocar de estilo dessa forma uma vez por rodada."
    },
    {
      "title": "GOLPES IMPLACÁVEIS",
      "level": 6,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 6º nível, seus golpes desarmados, armas improvisadas e armas de rua não mágicas contam como mágicos para superar resistência e imunidade a ataques e dano não mágicos."
    },
    {
      "title": "ESSÊNCIA ADICIONAL",
      "level": 6,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF registra uma Essência Adicional neste nível. A fonte não apresenta um bloco separado explicando uma quantidade, procedimento ou regra adicional; o Grimório mantém apenas a concessão indicada na progressão."
    },
    {
      "title": "REFLEXOS DAS RUAS",
      "level": 7,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 7º nível, quando você for alvo de um efeito que permita realizar um teste de resistência de Destreza para sofrer apenas metade do dano, você não sofre dano se for bem-sucedido no teste, e sofre apenas metade do dano se falhar.\n\nVocê não pode usar esta característica se estiver incapacitado, usando armadura média, armadura pesada ou escudo."
    },
    {
      "title": "NOME NAS RUAS",
      "level": 7,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 7º nível, escolha uma perícia entre Atletismo, Intimidação, Intuição, Investigação, Percepção, Persuasão e Sobrevivência. Você ganha proficiência na perícia escolhida. Se já for proficiente nela, você dobra seu bônus de proficiência para testes feitos com essa perícia.\n\nAlém disso, sua reputação pode ajudá-lo a obter rumores, contatos e informações em ambientes urbanos, criminosos ou violentos, a critério do Mestre."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 8,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Incremento de Habilidade neste nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório preserva a concessão exatamente como indicada na tabela e não acrescenta uma mecânica que não esteja escrita no PDF."
    },
    {
      "title": "MOVIMENTO DE RUA",
      "level": 9,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 9º nível, enquanto não estiver usando armadura média, armadura pesada ou escudo, você recebe deslocamento de escalada igual ao seu deslocamento de caminhada. Levantar-se da condição caído custa apenas 1,5 metro de deslocamento para você. Além disso, você ignora terreno difícil causado por multidões, entulho, móveis quebrados, destroços urbanos ou obstáculos semelhantes.\n\nQuando usa a ação Disparada, você pode atravessar o espaço de criaturas hostis que sejam no máximo uma categoria de tamanho maior que você. O espaço dessas criaturas ainda conta como terreno difícil."
    },
    {
      "title": "ÍMPETO INDOMÁVEL",
      "level": 9,
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 9º nível, quando falha em um teste de resistência de Força, Destreza ou Constituição, você pode gastar 2 pontos de Cólera para repetir o teste. Você deve usar o novo resultado.\n\nVocê pode usar esta característica apenas uma vez por turno e não pode usá-la se estiver incapacitado."
    },
    {
      "title": "ESSÊNCIA ADICIONAL",
      "level": 9,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF registra uma Essência Adicional neste nível. A fonte não apresenta um bloco separado explicando uma quantidade, procedimento ou regra adicional; o Grimório mantém apenas a concessão indicada na progressão."
    },
    {
      "title": "NOVAS ESSÊNCIAS DE CÓLERA — 9º NÍVEL",
      "level": 9,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "As Essências abaixo ficam disponíveis para Lutadores de Rua de 9º nível ou superior."
    },
    {
      "title": "ESSÊNCIA DA COLISÃO DUPLA",
      "level": null,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 9º nível de Lutador de Rua.\n\nQuando você arremessa, empurra ou move uma criatura contra outra criatura usando uma característica de Lutador de Rua, pode gastar 2 pontos de Cólera para transformar a colisão em um impacto brutal.\n\nA criatura arremessada sofre 1 Dado de Briga adicional de dano contundente.\n\nA criatura atingida deve realizar um teste de resistência de Destreza contra sua CD dos Surtos de Cólera. Em uma falha, ela sofre dano contundente igual a 1 Dado de Briga + seu modificador de Força. Em um sucesso, ela sofre metade desse dano.\n\nSe ambas as criaturas forem do seu tamanho ou menores, a criatura atingida também fica caída em uma falha."
    },
    {
      "title": "ESSÊNCIA DA INTERRUPÇÃO VIOLENTA",
      "level": null,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 9º nível de Lutador de Rua.\n\nQuando uma criatura que você possa ver e que esteja ao seu alcance tenta se mover para fora do seu alcance, você pode usar sua reação e gastar 2 pontos de Cólera para interromper o movimento dela.\n\nFaça um ataque corpo a corpo com uma arma de rua contra a criatura. Em caso de acerto, o ataque causa dano normal, e o deslocamento da criatura se torna 0 até o fim do turno atual.\n\nEssa Essência conta como um Surto de Cólera, mas pode ser usada fora do seu turno."
    },
    {
      "title": "ESSÊNCIA DO IMPACTO NO CHÃO",
      "level": null,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 9º nível de Lutador de Rua; o alvo deve estar agarrado por você ou caído.\n\nQuando acerta uma criatura agarrada por você ou caída com seu Combo Acelerado ou Golpe Finalizador, pode gastar 2 pontos de Cólera para esmagá-la contra o chão.\n\nO ataque causa 1 Dado de Briga adicional de dano contundente. Além disso, o alvo deve realizar um teste de resistência de Constituição contra sua CD dos Surtos de Cólera. Em uma falha, o alvo tem desvantagem no próximo ataque que fizer antes do fim do próximo turno dele."
    },
    {
      "title": "ESSÊNCIA DO OBJETO PESADO",
      "level": null,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 3 pontos de Cólera.\nPré-requisito: 9º nível de Lutador de Rua; você deve estar usando uma arma improvisada grande ou pesada com duas mãos.\n\nQuando acerta uma criatura com uma arma improvisada grande usando seu Combo Acelerado ou Golpe Finalizador, pode gastar 3 pontos de Cólera para destruir o objeto em um golpe devastador.\n\nO ataque causa 2 Dados de Briga adicionais de dano. Depois do ataque, a arma improvisada é destruída ou fica inutilizável, a critério do Mestre."
    },
    {
      "title": "CÓLERA ARDENTE",
      "level": 10,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 10º nível, sua quantidade máxima de Cólera aumenta em 2.\n\nAlém disso, quando rola iniciativa e não está surpreso, você ganha 2 pontos de Cólera, em vez de 1 ponto concedido por sua característica Ritmo de Combate."
    },
    {
      "title": "NÃO ACABOU AINDA",
      "level": 10,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 10º nível, quando você é reduzido a 0 pontos de vida, mas não morre instantaneamente, pode gastar 3 pontos de Cólera para ser reduzido a 1 ponto de vida em vez disso.\n\nDepois de usar esta característica, você pode se mover até 1,5 metro sem provocar ataques de oportunidade.\n\nVocê pode usar esta característica uma vez por descanso longo. Esta característica não conta como um Surto de Cólera."
    },
    {
      "title": "CLÍMAX DE CÓLERA",
      "level": 11,
      "page": 6,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 11º nível, uma vez por turno, quando você gastar pelo menos 1 ponto de Cólera em um Surto de Cólera ou Essência de Cólera, escolha um dos seguintes efeitos:\n\nImpacto de Clímax. Uma criatura que sofreu dano do Surto ou Essência sofre dano adicional igual ao seu bônus de proficiência.\n\nMovimento de Clímax. Depois de executar o Surto ou Essência, você pode se mover até 3 metros sem provocar ataques de oportunidade de uma criatura que tenha sofrido dano dessa técnica.\n\nResistência de Clímax. Você recebe pontos de vida temporários iguais ao seu bônus de proficiência.\n\nEsta característica não conta como um Surto de Cólera separado."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 12,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Incremento de Habilidade neste nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório preserva a concessão exatamente como indicada na tabela e não acrescenta uma mecânica que não esteja escrita no PDF."
    },
    {
      "title": "CORAÇÃO INDOMÁVEL",
      "level": 13,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 13º nível, quando falha em um teste de resistência de Sabedoria ou Carisma, você pode gastar 2 pontos de Cólera para repetir o teste. Você deve usar o novo resultado.\n\nAlém disso, no início do seu turno, se estiver amedrontado ou enfeitiçado, você pode gastar 1 ponto de Cólera para encerrar uma dessas condições sobre si mesmo.\n\nVocê não pode usar esta característica se estiver incapacitado. Você pode usar a repetição de teste concedida por esta característica apenas uma vez por turno."
    },
    {
      "title": "ESSÊNCIA ADICIONAL",
      "level": 13,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF registra uma Essência Adicional neste nível. A fonte não apresenta um bloco separado explicando uma quantidade, procedimento ou regra adicional; o Grimório mantém apenas a concessão indicada na progressão."
    },
    {
      "title": "NOVAS ESSÊNCIAS DE CÓLERA — 13º NÍVEL",
      "level": 13,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "As Essências abaixo ficam disponíveis para Lutadores de Rua de 13º nível ou superior."
    },
    {
      "title": "ESSÊNCIA DA QUEDA DO CAMPEÃO",
      "level": null,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 3 pontos de Cólera.\nPré-requisito: 13º nível de Lutador de Rua.\n\nQuando você acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, pode gastar 3 pontos de Cólera para transformar o impacto em uma queda esmagadora.\n\nO ataque causa 2 Dados de Briga adicionais de dano. Além disso, o alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera.\n\nEm uma falha, o alvo fica caído e seu deslocamento é reduzido para 0 até o início do seu próximo turno. Em um sucesso, o alvo não fica caído, mas seu deslocamento é reduzido pela metade até o início do seu próximo turno."
    },
    {
      "title": "ESSÊNCIA DA REVERSÃO BRUTAL",
      "level": null,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 13º nível de Lutador de Rua.\n\nQuando uma criatura que você possa ver acertar você com um ataque corpo a corpo, você pode usar sua reação e gastar 2 pontos de Cólera para transformar o impacto recebido em uma abertura.\n\nReduza o dano recebido em 1 Dado de Briga + seu modificador de Constituição + seu bônus de proficiência.\n\nDepois, se a criatura estiver ao seu alcance, você pode tentar empurrá-la ou derrubá-la. O alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, você escolhe se ele é empurrado 1,5 metros ou fica caído.\n\nEsta Essência conta como um Surto de Cólera, mas pode ser usada fora do seu turno."
    },
    {
      "title": "ESSÊNCIA DO DESARME VIOLENTO",
      "level": null,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 13º nível de Lutador de Rua.\n\nQuando você acerta uma criatura que esteja segurando uma arma, foco arcano, escudo ou objeto importante com seu Combo Acelerado ou Golpe Finalizador, pode gastar 2 pontos de Cólera para tentar arrancar o objeto da mão dela.\n\nO ataque causa 1 Dado de Briga adicional de dano. O alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, ele deixa cair um objeto que esteja segurando, à sua escolha. O objeto cai em um espaço desocupado a até 1,5 metros dele. Em um sucesso, o alvo mantém o objeto.\n\nO Mestre pode determinar que certos objetos presos, amaldiçoados, gigantescos ou impossíveis de largar não podem ser desarmados por esta Essência."
    },
    {
      "title": "ESSÊNCIA DO ESPÍRITO INABALÁVEL",
      "level": null,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 2 pontos de Cólera.\nPré-requisito: 13º nível de Lutador de Rua.\n\nQuando você for alvo de um efeito que cause as condições amedrontado, enfeitiçado, atordoado ou paralisado, pode gastar 2 pontos de Cólera para receber vantagem no teste de resistência contra esse efeito.\n\nVocê pode decidir usar esta Essência depois de saber qual teste de resistência será exigido, mas antes de rolar o dado.\n\nSe o teste for bem-sucedido, você também ganha pontos de vida temporários iguais ao seu modificador de Constituição + seu bônus de proficiência."
    },
    {
      "title": "PRESSÃO INCESSANTE",
      "level": 14,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 14º nível, quando erra uma criatura com seu Combo Acelerado no seu turno, você pode escolher um dos seguintes efeitos:\n\nRecuo Agressivo. Você se move até 1,5 metros sem provocar ataques de oportunidade da criatura que você errou.\n\nPressão de Guarda. A próxima jogada de ataque que você fizer contra essa mesma criatura antes do fim do seu turno recebe um bônus igual à metade do seu bônus de proficiência, arredondado para baixo.\n\nCólera Contida. Se você não ganhou Cólera neste turno, você ganha 1 ponto de Cólera.\n\nVocê só pode usar esta característica uma vez por turno."
    },
    {
      "title": "SURTO IMEDIATO",
      "level": 14,
      "page": 7,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 14º nível, uma vez por rodada, quando você usa um Surto de Cólera ou Essência de Cólera que custe 1 ponto de Cólera, você pode reduzir o custo dela para 0.\n\nVocê não pode usar esta característica em uma Essência ou Surto que cause Dados de Briga adicionais de dano."
    },
    {
      "title": "SEQUÊNCIA IMPLACÁVEL",
      "level": 15,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 15º nível, quando você usa Combo Acelerado como parte da ação Atacar e erra o alvo, mas acerta a mesma criatura com outro ataque corpo a corpo usando uma arma de rua antes do fim do seu turno, você pode usar Golpe Finalizador contra essa criatura como se tivesse acertado o Combo Acelerado.\n\nO Combo Acelerado que errou não causa dano, não gera Cólera e não ativa efeitos que exigem um acerto.\n\nVocê só pode usar esta característica uma vez por turno."
    },
    {
      "title": "CÓLERA PERSISTENTE",
      "level": 15,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 15º nível, quando rola iniciativa e não está surpreso, você ganha pontos de Cólera iguais ao seu bônus de proficiência, em vez dos 2 pontos concedidos por Cólera Ardente."
    },
    {
      "title": "ESSÊNCIA ADICIONAL",
      "level": 15,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF registra uma Essência Adicional neste nível. A fonte não apresenta um bloco separado explicando uma quantidade, procedimento ou regra adicional; o Grimório mantém apenas a concessão indicada na progressão."
    },
    {
      "title": "NOVAS ESSÊNCIAS DE CÓLERA — 15º NÍVEL",
      "level": 15,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "As Essências abaixo ficam disponíveis para Lutadores de Rua de 15º nível ou superior."
    },
    {
      "title": "ESSÊNCIA DO CLÍMAX BRUTAL",
      "level": null,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 4 pontos de Cólera.\nPré-requisito: 15º nível de Lutador de Rua; você deve ter acertado a mesma criatura com Combo Acelerado neste turno.\n\nQuando você acerta uma criatura com seu Golpe Finalizador, pode gastar 4 pontos de Cólera para transformar o golpe em uma finalização devastadora.\n\nO ataque causa 3 Dados de Briga adicionais de dano. Além disso, o alvo deve realizar um teste de resistência de Constituição contra sua CD dos Surtos de Cólera. Em uma falha, ele tem desvantagem na próxima jogada de ataque que fizer antes do fim do próximo turno dele."
    },
    {
      "title": "ESSÊNCIA DA QUEBRA DE GUARDA",
      "level": null,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 3 pontos de Cólera.\nPré-requisito: 15º nível de Lutador de Rua.\n\nQuando você acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, pode gastar 3 pontos de Cólera para quebrar sua postura defensiva.\n\nO ataque causa 1 Dado de Briga adicional de dano. Além disso, o alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, a próxima jogada de ataque feita contra ele antes do início do seu próximo turno tem vantagem.\n\nIndependentemente do resultado do teste, o alvo não pode realizar reações até o início do seu próximo turno."
    },
    {
      "title": "ESSÊNCIA DO ARREMESSO DEVASTADOR",
      "level": null,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 3 pontos de Cólera.\nPré-requisito: 15º nível de Lutador de Rua; o alvo deve estar agarrado por você.\n\nQuando você acerta uma criatura agarrada por você com seu Combo Acelerado ou Golpe Finalizador, pode gastar 3 pontos de Cólera para arremessá-la com força extrema.\n\nO alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera.\n\nEm uma falha, você arremessa o alvo até 6 metros para um espaço desocupado que possa ver. O alvo sofre dano contundente igual a 2 Dados de Briga + seu modificador de Força. Além disso, ele fica caído. Se o alvo colidir com uma parede, objeto grande ou outra criatura, ele sofre 1 Dado de Briga adicional de dano contundente.\n\nEm um sucesso, o alvo não é arremessado, mas sofre dano contundente igual a 1 Dado de Briga + seu modificador de Força."
    },
    {
      "title": "ESSÊNCIA DA RESISTÊNCIA FURIOSA",
      "level": null,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 3 pontos de Cólera.\nPré-requisito: 15º nível de Lutador de Rua.\n\nQuando você sofre dano, pode usar sua reação e gastar 3 pontos de Cólera para resistir ao impacto com pura força de vontade.\n\nReduza o dano recebido em 2 Dados de Briga + seu modificador de Constituição + seu bônus de proficiência.\n\nSe essa redução diminuir o dano a 0, você pode se mover até 3 metros em direção à criatura que causou o dano, sem provocar ataques de oportunidade.\n\nEsta Essência conta como um Surto de Cólera, mas pode ser usada fora do seu turno."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 16,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Incremento de Habilidade neste nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório preserva a concessão exatamente como indicada na tabela e não acrescenta uma mecânica que não esteja escrita no PDF."
    },
    {
      "title": "ESTADO DE CLÍMAX",
      "level": 17,
      "page": 8,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 17º nível, quando sua Cólera atinge o auge, você consegue entrar em um estado de combate extremo. Seus golpes ficam mais precisos, seus movimentos mais agressivos e suas Essências se tornam devastadoras.\n\nComo uma ação bônus, você pode gastar 5 pontos de Cólera para entrar em Estado de Clímax por 1 minuto. Esse estado termina antes se você ficar inconsciente.\n\nEnquanto estiver em Estado de Clímax, você recebe os seguintes benefícios:\n\nPressão Máxima. Uma vez por turno, quando você acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, o ataque causa dano adicional igual ao seu bônus de proficiência.\n\nSurto de Cólera Aprimorada. Uma vez por turno, quando você usa um Surto de Cólera ou uma Essência de Cólera que cause dano adicional em Dados de Briga, você pode adicionar 1 Dado de Briga adicional ao dano da técnica.\n\nCorpo em Chamas. No início de cada um dos seus turnos durante o Estado de Clímax, você ganha pontos de vida temporários iguais ao seu modificador de Constituição, mínimo de 1.\n\nLimite. Depois que o Estado de Clímax termina, você não pode usá-lo novamente até terminar um descanso longo, a menos que gaste 7 pontos de Cólera para ativá-lo novamente."
    },
    {
      "title": "ESSÊNCIA ADICIONAL",
      "level": 17,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF registra uma Essência Adicional neste nível. A fonte não apresenta um bloco separado explicando uma quantidade, procedimento ou regra adicional; o Grimório mantém apenas a concessão indicada na progressão."
    },
    {
      "title": "NOVAS ESSÊNCIAS DE CÓLERA — 17º NÍVEL",
      "level": 17,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "As Essências abaixo ficam disponíveis para Lutadores de Rua de 17º nível ou superior."
    },
    {
      "title": "ESSÊNCIA DA LENDA VIVA",
      "level": null,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 5 pontos de Cólera.\nPré-requisito: 17º nível de Lutador de Rua; você deve estar em Estado de Clímax.\n\nQuando você acerta uma criatura com seu Golpe Finalizador, pode gastar 5 pontos de Cólera para executar uma finalização lendária.\n\nO ataque causa 4 Dados de Briga adicionais de dano. Além disso, o alvo deve realizar um teste de resistência de Constituição contra sua CD dos Surtos de Cólera. Em uma falha, ele fica atordoado até o início do seu próximo turno. Em um sucesso, ele não fica atordoado, mas não pode realizar reações até o início do seu próximo turno.\n\nDepois de usar esta Essência, seu Estado de Clímax termina no fim do seu turno."
    },
    {
      "title": "ESSÊNCIA DA QUEDA ABSOLUTA",
      "level": null,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 4 pontos de Cólera.\nPré-requisito: 17º nível de Lutador de Rua.\n\nQuando você acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, pode gastar 4 pontos de Cólera para derrubá-la com um impacto esmagador.\n\nO ataque causa 2 Dados de Briga adicionais de dano.\n\nO alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, ele fica caído e contido até o início do seu próximo turno. Em um sucesso, ele fica apenas caído.\n\nUma criatura de tamanho Enorme ou maior tem vantagem nesse teste de resistência."
    },
    {
      "title": "ESSÊNCIA DO DRAGÃO FURIOSO",
      "level": null,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Custo: 4 pontos de Cólera.\nPré-requisito: 17º nível de Lutador de Rua.\n\nQuando você reduz uma criatura hostil a 0 pontos de vida, pode gastar 4 pontos de Cólera para continuar sua ofensiva contra outro inimigo.\n\nVocê pode se mover até metade do seu deslocamento sem provocar ataques de oportunidade. Depois, pode fazer um ataque corpo a corpo com uma arma de rua contra uma criatura ao seu alcance.\n\nEm caso de acerto, o ataque causa dano igual a 2 Dados de Briga + seu modificador de Força.\n\nEsse ataque não pode ativar Golpe Finalizador."
    },
    {
      "title": "CÓLERA LENDÁRIA",
      "level": 18,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A partir do 18º nível, sua quantidade máxima de Cólera aumenta em 2.\n\nAlém disso, quando você rola iniciativa e não está surpreso, você ganha pontos de Cólera iguais ao seu bônus de proficiência + 2. Isso substitui a quantidade de Cólera recebida por Cólera Persistente. Você não pode ultrapassar sua Cólera máxima."
    },
    {
      "title": "RECUSAR A DERROTA",
      "level": 18,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 18º nível, no início do seu turno, se estiver consciente e tiver pelo menos 1 ponto de vida, você pode gastar 3 pontos de Cólera para encerrar uma das seguintes condições sobre si mesmo: agarrado, amedrontado, caído, contido, enfeitiçado ou envenenado.\n\nSe estiver atordoado ou paralisado, você pode usar esta característica mesmo que a condição esteja deixando você incapacitado. Nesse caso, o custo aumenta para 5 pontos de Cólera. Depois de encerrar a condição atordoado ou paralisado com esta característica, você não pode usá-la novamente para encerrar uma dessas duas condições até terminar um descanso longo.\n\nEsta característica não exige ação."
    },
    {
      "title": "INCREMENTO DE HABILIDADE",
      "level": 19,
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A tabela de progressão do PDF concede Incremento de Habilidade neste nível, mas a fonte não apresenta um bloco de regras separado para esta característica. O Grimório preserva a concessão exatamente como indicada na tabela e não acrescenta uma mecânica que não esteja escrita no PDF."
    },
    {
      "title": "LENDA DAS RUAS",
      "level": 20,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 20º nível, seu valor de Força aumenta em 2, e seu valor de Constituição aumenta em 2. Seu máximo para esses atributos também aumenta para 22.\n\nAlém disso, você tem vantagem em testes de Carisma (Intimidação) feitos contra criaturas que tenham visto você reduzir uma criatura hostil a 0 pontos de vida, usar uma Essência de Cólera ou entrar em Estado de Clímax."
    },
    {
      "title": "CÓLERA INESGOTÁVEL",
      "level": 20,
      "page": 9,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 20º nível, quando você rola iniciativa e não está surpreso, sua Cólera se torna igual à sua Cólera máxima.\n\nAlém disso, o custo para entrar em Estado de Clímax diminui para 4 pontos de Cólera. Você também ignora a limitação de descanso longo de Estado de Clímax, podendo ativá-lo novamente sempre que pagar seu custo.\n\nEnquanto estiver em Estado de Clímax, uma vez por turno, quando usar um Surto de Cólera ou uma Essência de Cólera, você pode reduzir o custo dessa técnica em 1 ponto de Cólera, até o mínimo de 1."
    }
  ],
  "tables": [],
  "references": [
    {
      "title": "NOTA EDITORIAL — HABILIDADE PRINCIPAL",
      "page": 3,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "O PDF não apresenta um campo separado chamado “habilidade principal”. Para a organização visual do Grimório, Força é exibida como habilidade principal porque Briga de Rua, a CD dos Surtos e a capacidade máxima inicial de Cólera usam o modificador de Força. Isso é uma classificação editorial do site, não uma regra adicional da classe."
    },
    {
      "title": "NOTA EDITORIAL — ATAQUE EXTRA E INCREMENTO DE HABILIDADE",
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Ataque Extra e Incremento de Habilidade aparecem na tabela de progressão, mas o PDF não fornece blocos de regras próprios para essas características. O Grimório registra os níveis em que são concedidas e não insere texto padrão de outra fonte."
    },
    {
      "title": "NOTA EDITORIAL — ESSÊNCIA ADICIONAL",
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A progressão registra “Essência Adicional” nos níveis 6, 9, 13, 15 e 17, porém o PDF não apresenta um bloco de regra separado que explicite a quantidade adicional ou um procedimento específico. Esses eventos foram preservados como entradas de progressão sem extrapolação."
    },
    {
      "title": "NOTA EDITORIAL — RITMO DE COMBATE E ESTILOS",
      "page": 5,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "Ritmo de Combate menciona a troca de “estilo ativo”. No PDF fornecido, os estilos são apresentados no Arquétipo de Rua Dragão de Dojima. O Grimório mantém a redação original e não generaliza essa mecânica para arquétipos que não estejam documentados."
    },
    {
      "title": "MULTICLASSE",
      "page": 2,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "O PDF fornecido não apresenta requisitos ou proficiências de multiclasse para Lutador de Rua. O Grimório não acrescenta regras de multiclasse ausentes da fonte."
    }
  ]
};
  const subclassData = [{
  "id": "street-fighter-dragon-dojima",
  "classId": "street-fighter-homebrew",
  "name": "Dragão de Dojima",
  "aliases": [
    "Dragão de Dojima"
  ],
  "desc": "O arquétipo do Lutador de Rua que transforma a batalha em uma dança brutal de instinto, técnica e presença esmagadora, alternando entre velocidade explosiva, força monstruosa e domínio absoluto do combate.",
  "sourcePage": 10,
  "source": {
    "title": "Lutador de Rua — Homebrew Original",
    "pages": "10–13",
    "chapter": "Arquétipo de Rua — Dragão de Dojima"
  },
  "features": [
    {
      "title": "ESTILOS DO DRAGÃO DE DOJIMA",
      "level": 3,
      "page": 10,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 3º nível, você aprende a alternar entre três estilos de combate: Rush, Beast e Dragon.\n\nVocê só pode ter um estilo ativo por vez. Quando rola iniciativa, escolha um dos seus estilos para ficar ativo. No início de cada um dos seus turnos, antes de se mover ou realizar qualquer ação, você pode trocar seu estilo ativo sem gastar ação.\n\nOs benefícios dos seus estilos só funcionam enquanto você não estiver usando armadura média, armadura pesada ou escudo, e enquanto estiver usando golpes desarmados, armas improvisadas ou armas de rua.\n\nQuando uma característica reduz seu Dado de Briga em um passo, ele não pode ficar abaixo de 1d4. Quando uma característica aumenta seu Dado de Briga em um passo, ele não pode ultrapassar 1d12.\n\nRUSH STYLE\n\nJogo de Pés Acelerado. Seu deslocamento aumenta em 3 metros. Além disso, quando usa Combo Acelerado, você pode se mover 1,5 metro antes ou depois do ataque. Esse movimento não provoca ataques de oportunidade da criatura atacada pelo Combo Acelerado.\n\nCombo Relâmpago. Quando usa Combo Acelerado, seu Dado de Briga é reduzido em um passo (por exemplo, de 1d6 para 1d4). Porém, em vez de fazer uma única jogada de ataque, você faz duas jogadas de ataque contra a mesma criatura.\n\nFinalizador Relâmpago. Quando usa Golpe Finalizador, seu Dado de Briga também é reduzido em um passo. Você faz duas jogadas de ataque contra a mesma criatura.\n\nEsquiva de Rush. Quando você for alvo de um teste de resistência de Destreza, pode gastar 1 ponto de Cólera para realizar o teste com vantagem.\n\nBEAST STYLE\n\nPasso Pesado. Seu deslocamento é reduzido pela metade.\n\nGolpe Esmagador. Quando usa Combo Acelerado ou Golpe Finalizador, seu Dado de Briga aumenta em um passo, até o máximo de 1d12.\n\nAgarrão Brutal. Uma vez por turno, quando acerta uma criatura com seu Combo Acelerado, você pode tentar agarrá-la como parte do mesmo ataque, sem gastar ação adicional. O alvo deve estar no máximo uma categoria de tamanho acima da sua.\n\nArremesso Bestial. Quando acerta uma criatura agarrada por você com seu Combo Acelerado ou Golpe Finalizador, você pode substituir o dano normal do ataque por um arremesso. O alvo deve realizar um teste de resistência de Força contra sua CD dos Surtos de Cólera. Em uma falha, você o arremessa até 3 metros para um espaço desocupado que possa ver. O alvo sofre dano contundente igual a 1 Dado de Briga + seu modificador de Força e fica caído. Em um sucesso, o alvo não é arremessado, mas sofre dano contundente igual ao seu modificador de Força.\n\nAbsorção Bestial. Quando usa o Surto de Cólera Aguentar Pancada enquanto está em Beast, você reduz dano adicional igual ao seu bônus de proficiência.\n\nDRAGON STYLE\n\nPostura do Dragão. Quando usa Combo Acelerado ou Golpe Finalizador, você usa seu Dado de Briga normal, sem reduzir nem aumentar o dado.\n\nTécnica do Dragão. Uma vez por turno, quando acerta uma criatura com seu Combo Acelerado ou Golpe Finalizador, você pode escolher um dos efeitos abaixo:\n\n• Quebrar Ritmo: o alvo não pode realizar reações até o início do seu próximo turno.\n• Passo Dominante: você pode se mover até 1,5 metro sem provocar ataques de oportunidade do alvo atingido.\n• Reposicionar: o alvo deve ser bem-sucedido em um teste de resistência de Força contra sua CD dos Surtos de Cólera ou é movido 1,5 metro para um espaço desocupado à sua escolha.\n• Fúria Controlada: se você estiver com 0 pontos de Cólera, ganha 1 ponto de Cólera.\n\nPresença do Dragão. Você tem vantagem em testes de Carisma (Intimidação) feitos contra criaturas que você tenha causado dano nesta cena."
    },
    {
      "title": "TÉCNICA KOMAKI",
      "level": 6,
      "page": 11,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 6º nível, seu domínio dos estilos do Dragão de Dojima se torna mais refinado. Você aprende a punir erros inimigos com contra-ataques, reversões e movimentos precisos. Você recebe os benefícios abaixo:\n\nContra-Ataque do Dragão. Enquanto estiver no Dragon Style, quando uma criatura que você possa ver errar um ataque corpo a corpo contra você, você pode usar sua reação e gastar 1 ponto de Cólera para fazer um ataque corpo a corpo contra essa criatura usando uma arma de rua. Se esse ataque acertar, você pode aplicar um dos efeitos da sua característica Técnica do Dragão ao alvo, sem contar contra o limite de uma vez por turno dessa característica. Esse contra-ataque não pode ativar Golpe Finalizador.\n\nRush Style — Esquiva Relâmpago. Enquanto estiver no Rush Style, quando uma criatura que você possa ver fizer um ataque contra você, você pode usar sua reação e gastar 1 ponto de Cólera para aumentar sua CA em +2 contra esse ataque. Se o ataque errar, você pode se mover até 1,5 metros sem provocar ataques de oportunidade da criatura atacante. No 11º nível, esse bônus aumenta para +3.\n\nBeast Style — Guarda Brutal. Enquanto estiver no Beast Style, quando você usa Aguentar Pancada, você pode se mover até 1,5 metro em direção à criatura que causou o dano, desde que possa vê-la. Além disso, se a criatura que causou o dano estiver ao seu alcance depois desse movimento, você pode gastar 1 ponto de Cólera adicional para tentar agarrá-la como parte da mesma reação. O alvo deve realizar um teste resistido contra seu teste de Força (Atletismo), como normal para agarrar.\n\nDragon Style — Deita Tigre. Enquanto estiver no Dragon Style, você aprende uma técnica de contra-ataque devastadora. Quando uma criatura que você possa ver errar um ataque corpo a corpo contra você, você pode usar sua reação e gastar 2 pontos de Cólera para executar o Deita Tigre. Faça um ataque corpo a corpo contra a criatura usando um ataque desarmado. Em caso de acerto, o ataque causa dano igual a 2 Dados de Briga + seu modificador de Força. Além disso, o alvo deve ser bem-sucedido em um teste de resistência de Força contra sua CD dos Surtos de Cólera ou será empurrado 1,5 metro para longe de você.\n\nVocê não pode usar Contra-Ataque do Dragão e Queda do Tigre contra o mesmo ataque."
    },
    {
      "title": "LENDA DO DRAGÃO",
      "level": 11,
      "page": 11,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 11º nível, seus estilos deixam de ser apenas posturas isoladas e passam a fluir entre si. Você ainda precisa escolher um estilo ativo por vez, mas agora cada estilo possui uma forma mais refinada. Você recebe os seguintes benefícios:\n\nRUSH STYLE APRIMORADO\n\nJogo de Pés Superior. O bônus de deslocamento concedido por Rush Style aumenta para 6 metros, em vez de 3 metros.\n\nCombo Relâmpago Flexível. Quando usa Combo Relâmpago ou Finalizador Relâmpago, você não precisa mais fazer todos os ataques contra a mesma criatura. Você pode dividir os ataques entre uma ou duas criaturas ao seu alcance.\n\nEsquiva Relâmpago Aprimorada. O bônus de CA concedido por Esquiva Relâmpago aumenta para +3, em vez de +2.\n\nBEAST STYLE APRIMORADO\n\nPasso Pesado Controlado. Seu deslocamento não é mais reduzido pela metade. Em vez disso, seu deslocamento é reduzido em 3 metros.\n\nForça de Monstro. Você conta como uma categoria de tamanho maior para determinar quais criaturas pode agarrar, empurrar, derrubar ou arremessar usando características de Lutador de Rua.\n\nArremesso Bestial Aprimorado. Quando arremessa uma criatura usando Arremesso Bestial, a distância do arremesso aumenta para 4,5 metros. Se a criatura arremessada colidir com uma parede, objeto grande ou outra criatura, ela sofre dano contundente adicional igual ao seu bônus de proficiência.\n\nDRAGON STYLE APRIMORADO\n\nFusão Controlada. No início de cada um dos seus turnos, enquanto estiver em Dragon Style, escolha uma das influências abaixo. Ela dura até o início do seu próximo turno.\n\n• Influência Acelerada: seu deslocamento aumenta em 3 metros. Além disso, uma vez neste turno, quando aplicar um efeito de Técnica do Dragão, você pode se mover 1,5 metros sem provocar ataques de oportunidade do alvo atingido.\n• Influência Bestial: uma vez neste turno, quando aplicar um efeito de Técnica do Dragão a uma criatura, você pode também tentar agarrar, empurrar ou derrubar essa criatura como parte do mesmo golpe. O alvo deve estar no máximo uma categoria de tamanho acima da sua, considerando qualquer benefício que aumente seu tamanho efetivo para agarrões e empurrões."
    },
    {
      "title": "DRAGÃO DE DOJIMA",
      "level": 17,
      "page": 12,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "No 17º nível, você atinge o verdadeiro domínio do estilo lendário do Dragão de Dojima. Rush, Beast e Dragon deixam de ser apenas posturas separadas: você passa a alternar entre elas com instinto absoluto, convertendo velocidade em força, força em técnica e técnica em destruição.\n\nVocê recebe os seguintes benefícios.\n\nRUSH STYLE SUPREMO\n\nVelocidade do Dragão. O bônus de deslocamento concedido por Rush aumenta para 9 metros.\n\nCombo Relâmpago Supremo. Quando usa Combo Relâmpago ou Finalizador Relâmpago, você faz três jogadas de ataque, em vez de duas.\n\nEvasão Perfeita. Quando usa Esquiva Relâmpago e o ataque erra, você pode fazer um ataque corpo a corpo com uma arma de rua contra a criatura atacante como parte da mesma reação. Esse ataque não pode ativar Golpe Finalizador.\n\nBEAST STYLE SUPREMO\n\nForça Inabalável. Você não sofre mais redução de deslocamento por estar em Beast Style.\n\nMonstro das Ruas. Você conta como duas categorias de tamanho maior para determinar quais criaturas pode agarrar, empurrar, derrubar ou arremessar usando características de Lutador de Rua.\n\nArremesso Bestial Supremo. Quando usa Arremesso Bestial, você pode arremessar o alvo até 6 metros. Se o alvo colidir com uma parede, objeto grande ou outra criatura, ele sofre 1 Dado de Briga adicional de dano contundente e deve ser bem-sucedido em um teste de resistência de Constituição contra sua CD dos Surtos de Cólera ou não poderá realizar reações até o início do seu próximo turno.\n\nDRAGON STYLE SUPREMO\n\nFusão Suprema. No início de cada um dos seus turnos, enquanto estiver em Dragon Style, você escolhe uma das opções abaixo:\n\n• Influência de Rush: seu deslocamento aumenta em 6 metros. Além disso, uma vez neste turno, quando acertar uma criatura com Combo Acelerado ou Golpe Finalizador, você pode fazer um ataque adicional contra a mesma criatura. Esse ataque causa dano igual a 1 Dado de Briga, sem adicionar seu modificador de Força.\n• Influência de Beast: uma vez neste turno, quando acertar uma criatura com Combo Acelerado ou Golpe Finalizador, você pode aumentar o dano do ataque em 1 Dado de Briga ou tentar agarrar, empurrar ou derrubar o alvo como parte do mesmo golpe.\n• Influência do Dragão: uma vez neste turno, quando aplicar Técnica do Dragão, você pode aplicar dois efeitos diferentes da lista sem gastar Cólera.\n\nDeita Tigre Supremo. Enquanto estiver em Dragon Style, quando você usa a Essência do Deita Tigre, ele causa dano igual a 3 Dados de Briga + seu modificador de Força. Além disso, se o alvo falhar no teste de resistência de Força, você pode escolher derrubá-lo em vez de empurrá-lo 1,5 metro."
    }
  ],
  "tables": [],
  "references": [
    {
      "title": "NOTA EDITORIAL — DEITA TIGRE / QUEDA DO TIGRE",
      "page": 11,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "A técnica é apresentada sob o nome “Deita Tigre”, mas a frase final da característica Técnica Komaki diz que não é possível usar Contra-Ataque do Dragão e “Queda do Tigre” contra o mesmo ataque. Na página 13, o aprimoramento volta a usar “Deita Tigre”. O Grimório preserva essa inconsistência nominal da fonte e não cria uma segunda técnica."
    },
    {
      "title": "NOTA EDITORIAL — ESSÊNCIA DO DEITA TIGRE",
      "page": 13,
      "sourceTitle": "Lutador de Rua — Homebrew Original",
      "text": "O aprimoramento de 17º nível chama a técnica de “Essência do Deita Tigre”, embora ela tenha sido apresentada no 6º nível dentro de Técnica Komaki, e não na lista de Essências de Cólera. A redação foi mantida como no PDF."
    }
  ]
}];
  const progressionData = {
  "id": "street-fighter-homebrew",
  "title": "O Lutador de Rua",
  "sourcePage": 2,
  "sourceTitle": "Lutador de Rua — Homebrew Original",
  "columns": [
    {
      "key": "level",
      "label": "Nível",
      "sticky": true
    },
    {
      "key": "proficiency",
      "label": "Prof.",
      "title": "Bônus de Proficiência"
    },
    {
      "key": "features",
      "label": "Características",
      "wide": true
    },
    {
      "key": "brawlDie",
      "label": "Dado de Briga"
    }
  ],
  "rows": [
    {
      "level": 1,
      "proficiency": "+2",
      "features": [
        "Briga de Rua",
        "Combo Acelerado",
        "Golpe Finalizador",
        "Defesa de Rua"
      ],
      "brawlDie": "1d6"
    },
    {
      "level": 2,
      "proficiency": "+2",
      "features": [
        "Cólera",
        "Surtos de Cólera"
      ],
      "brawlDie": "1d6"
    },
    {
      "level": 3,
      "proficiency": "+2",
      "features": [
        "Arquétipo de Rua",
        "Essências de Cólera"
      ],
      "brawlDie": "1d6"
    },
    {
      "level": 4,
      "proficiency": "+2",
      "features": [
        "Incremento de Habilidade"
      ],
      "brawlDie": "1d6"
    },
    {
      "level": 5,
      "proficiency": "+3",
      "features": [
        "Ataque Extra",
        "Ritmo de Combate"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 6,
      "proficiency": "+3",
      "features": [
        "Golpes Implacáveis",
        "Essência Adicional",
        "característica de Arquétipo de Rua"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 7,
      "proficiency": "+3",
      "features": [
        "Reflexos das Ruas",
        "Nome nas Ruas"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 8,
      "proficiency": "+3",
      "features": [
        "Incremento de Habilidade"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 9,
      "proficiency": "+4",
      "features": [
        "Movimento de Rua",
        "Ímpeto Indomável",
        "Essência Adicional"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 10,
      "proficiency": "+4",
      "features": [
        "Cólera Ardente",
        "Não Acabou Ainda"
      ],
      "brawlDie": "1d8"
    },
    {
      "level": 11,
      "proficiency": "+4",
      "features": [
        "Clímax de Cólera",
        "característica de Arquétipo de Rua"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 12,
      "proficiency": "+4",
      "features": [
        "Incremento de Habilidade"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 13,
      "proficiency": "+5",
      "features": [
        "Coração Indomável",
        "Essência Adicional"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 14,
      "proficiency": "+5",
      "features": [
        "Pressão Incessante",
        "Surto Imediato"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 15,
      "proficiency": "+5",
      "features": [
        "Sequência Implacável",
        "Cólera Persistente",
        "Essência Adicional"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 16,
      "proficiency": "+5",
      "features": [
        "Incremento de Habilidade"
      ],
      "brawlDie": "1d10"
    },
    {
      "level": 17,
      "proficiency": "+6",
      "features": [
        "Estado de Clímax",
        "Essência Adicional",
        "característica de Arquétipo de Rua"
      ],
      "brawlDie": "1d12"
    },
    {
      "level": 18,
      "proficiency": "+6",
      "features": [
        "Cólera Lendária",
        "Recusar a Derrota"
      ],
      "brawlDie": "1d12"
    },
    {
      "level": 19,
      "proficiency": "+6",
      "features": [
        "Incremento de Habilidade"
      ],
      "brawlDie": "1d12"
    },
    {
      "level": 20,
      "proficiency": "+6",
      "features": [
        "Lenda das Ruas",
        "Cólera Inesgotável"
      ],
      "brawlDie": "1d12"
    }
  ]
};

  window.GRIMORIO_CLASSES = window.GRIMORIO_CLASSES || [];
  window.GRIMORIO_SUBCLASSES = window.GRIMORIO_SUBCLASSES || [];
  window.GRIMORIO_CLASS_PROGRESSIONS = window.GRIMORIO_CLASS_PROGRESSIONS || {};
  if (!window.GRIMORIO_CLASSES.some(item => item.id === classData.id)) window.GRIMORIO_CLASSES.push(classData);
  subclassData.forEach(sub => { if (!window.GRIMORIO_SUBCLASSES.some(item => item.id === sub.id)) window.GRIMORIO_SUBCLASSES.push(sub); });
  window.GRIMORIO_CLASS_PROGRESSIONS[classData.id] = progressionData;
})();
