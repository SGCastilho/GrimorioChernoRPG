'use strict';
// Fase 4 da revisão textual racial — páginas impressas 281–317 de Lyre's Guide to Retia.
// Fecha a revisão integral do catálogo racial desta edição.
(function(){
  const P={
    "kits-adria":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Kits’adria são humanoides com orelhas, caudas e sentidos de raposa. Conseguem assumir a forma de uma pequena raposa ou alterar a aparência por ilusões e carregam no corpo marcas semelhantes a tatuagens, chamadas kitscratch, que se tornam prateadas conforme envelhecem."},
        {title:"Trapaceiros por natureza",text:"Sua cultura favorece brincadeiras, identidades falsas e uma curiosidade alegre. Muitos kits’adria vivem temporariamente sob disfarces convincentes para observar comunidades e se divertir, embora em geral evitem cruzar a linha entre travessura e dano real."},
        {title:"Os Primeiros a Espreitar",text:"A tradição kits’adriana afirma que seus progenitores foram criados por Kitsune, o primeiro eidolos, para combater os Grandes Primários. Um de seus maiores refúgios é a Pausa Profunda, templo escondido nas florestas de Cu Chullis."},
        {title:"Kits’adria em Retia",text:"Não são nativos de Retia e muitos preferem ocultar a própria identidade. Parte dos kits’adria encontrados no continente foi capturada e doutrinada pela Família para atuar como espiões e infiltradores, situação que gera crescente resistência entre os próprios kits’adria."}
      ],
      meta:{alignment:"Geralmente caóticos e bons; neutralidade é comum, enquanto tendências leais ou malignas são possíveis, mas raras",languages:"Comum e Kitzish; Kitzish não possui forma escrita",speed:"9 m (30 pés)"},
      coreTraits:{
        "impersonation":"Você pode conjurar *disfarçar-se* à vontade, sem gastar espaços de magia nem componentes. Quando for relevante, Carisma é sua habilidade de conjuração para esta magia.",
        "kits-adrian-shapeshifting":"Como uma ação bônus, você pode assumir a forma de uma pequena raposa ou retornar à sua forma verdadeira. Na forma de raposa, você tem vantagem em testes e testes de resistência de Destreza, mas seus valores de Força e Constituição são tratados como 10, a menos que já fossem menores; isso não altera seu máximo de pontos de vida, e ferimentos permanecem iguais entre as formas. Nessa forma você não pode fornecer componentes verbais ou somáticos, e magias de ilusão que alterem sua aparência com seu consentimento ficam suprimidas. Ao transformar-se, escolha se seu equipamento cai inofensivamente ao redor ou se funde à nova forma; itens fundidos não podem ser acessados ou usados até você retornar. Como raposa, você ainda pode empunhar na boca armas corpo a corpo Leves ou com Acuidade. Sempre que sofrer dano enquanto transformado, faça um teste de resistência de Constituição como se estivesse mantendo concentração; em uma falha, retorna à forma verdadeira e não pode se transformar desta maneira novamente até concluir um Descanso Curto ou Longo. Se for reduzido a 0 pontos de vida, você retorna imediatamente à forma verdadeira."
      },
      legacyTraits:{
        "climber":"Você possui deslocamento de escalada igual ao seu deslocamento de caminhada base.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "keen-senses":"Você tem vantagem em testes de Percepção que dependam de audição ou olfato.",
        "mobility":"Seu deslocamento de caminhada base aumenta em 3 metros (10 pés).",
        "primal-magic":"Escolha um truque e uma magia de 1º nível da lista de Druida e escolha Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Você pode conjurar o truque à vontade. Pode usar este traço para conjurar a magia de 1º nível sem gastar espaço de magia e sem componentes materiais um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "watchful-rest":"Você adiciona seu bônus de proficiência à Percepção passiva, desde que nenhuma outra característica já permita adicionar esse bônus dessa forma, independentemente de possuir proficiência ou Especialização em Percepção."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Calcanhar Inabalável (Encapuzado); • Vida Selvagem (Bosque Profundo); • Caçada (Lua de Poeira); • Unhas Afiadas (Pata Vermelha); • Habitante de Clima Frio (Campo de Neve).",
        "impersonation":"Você recebe o traço racial Imitação do Kits’adria.",
        "kits-adrian-shapeshifting":"Você recebe o traço racial Metamorfose Kits’adriana do Kits’adria."
      },
      subraces:{
        "caped":{description:"Kits’adria Encapuzados são adaptados a ambientes quentes semelhantes às savanas das Terras de Ataque. Costumam ser menores, de orelhas mais curtas e largas, e desenvolveram grande facilidade para fugir e atravessar terrenos ruins.",traits:{
          "escape-expert":"Quando sair do alcance de ataque de uma criatura e provocar um ataque de oportunidade, você pode usar sua reação para realizar a ação Desengajar. Você deve decidir antes de o ataque de oportunidade ser feito; a reação do atacante não é gasta quando você usa este traço.",
          "unflinching-heel":"Ao atravessar terreno difícil que utilize apenas seus deslocamentos de caminhada, escalada ou escavação, você ignora qualquer penalidade ao deslocamento causada por esse terreno. Além disso, enquanto estiver em forma de raposa, possui deslocamento de escavação igual à metade do seu deslocamento base, arredondado para baixo."
        }},
        "deepwood":{description:"Kits’adria do Bosque Profundo são adaptados a florestas e selvas e estão entre as linhagens mais comuns. Tendem a cores vermelhas, alaranjadas, pretas ou acinzentadas e são caçadores atentos.",traits:{
          "pursuit":"Quando uma criatura provocar um ataque de oportunidade seu, você pode usar sua reação para persegui-la por uma distância de até seu deslocamento. A cada espaço que ela percorrer, você pode gastar seu deslocamento restante para permanecer em um espaço adjacente que consiga alcançar. Se o alvo ficar a mais de 3 metros (10 pés) de você e você não conseguir voltar a ficar adjacente, a perseguição termina.",
          "wild-life":"Você ganha proficiência em Percepção. Se já possuir proficiência em Percepção por outra fonte, adicione seu bônus de proficiência uma segunda vez aos testes de Percepção, a menos que já estivesse fazendo isso, como por Especialização."
        }},
        "dustmoon":{description:"Kits’adria Lua de Poeira vivem em campos e planícies e são caçadores noturnos especializados. Seus olhos costumam ser amarelos ou dourados, com pupilas predatórias, e seus pelos tendem a tons escuros.",traits:{
          "rundown":"Uma vez em seu turno, você pode liberar uma arrancada repentina de adrenalina, dobrando seu deslocamento até o fim do turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "shadow-dweller":"Enquanto estiver em penumbra ou escuridão, você pode realizar a ação Esconder-se como uma ação bônus e não precisa de cobertura para fazê-lo. Se realizar um ataque enquanto estiver escondido e errar, pode usar sua reação para permanecer escondido.",
          "woodland-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como luz plena e na escuridão como luz plena; cores na escuridão são percebidas em tons de cinza. Se já possuir Visão no Escuro de outra fonte, aumente seu alcance em 9 metros (30 pés) ou para 36 metros (120 pés), usando o maior valor."
        }},
        "redpaw":{description:"Kits’adria Pata Vermelha descendem de linhagens nômades acostumadas a muitos ambientes. São mais robustos, frequentemente de pelos vermelhos ou amarelados, e possuem unhas naturalmente mais perigosas.",traits:{
          "hearty-restitution":"Quando for reduzido a 0 pontos de vida, você obtém automaticamente um sucesso em um teste de resistência contra morte. Se alcançar três sucessos nesses testes, recupera imediatamente pontos de vida iguais a 1d10 + seu nível total. Depois de recuperar pontos de vida desta forma, você não recebe nenhum benefício deste traço novamente até concluir um Descanso Curto ou Longo.",
          "sharpened-nails":"Suas unhas contam como uma arma corpo a corpo com as propriedades Leve e Acuidade. Elas causam 1d6 de dano perfurante em um acerto e, se forem usadas para um ataque com a mão secundária como ação bônus, você pode adicionar o modificador de atributo ao dano. No 10º nível, o dado de dano aumenta para 1d8; no 16º nível, para 1d10.",
          "wanderer":"Você ganha proficiência em Sobrevivência."
        }},
        "snowfield":{description:"Kits’adria Campo de Neve vagam por tundras e regiões geladas, normalmente com pelagem branca que serve como camuflagem. Sua fisiologia é adaptada ao frio intenso, neve, gelo e efeitos como cegueira da neve.",traits:{
          "blindness-resistance":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Cego.",
          "cold-climate-dweller":"Você possui resistência a dano de frio e é imune aos efeitos prejudiciais de ambientes extremamente frios.",
          "snowstep":"Você ignora penalidades de terreno difícil causadas por neve ou gelo e se move normalmente sobre essas superfícies. Usando as unhas para se firmar, pode escalar superfícies congeladas como se possuísse deslocamento de escalada igual ao seu deslocamento base."
        }}
      }
    },

    "kobold":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Kobolds são pequenos humanoides pseudodracônicos de mentalidade fortemente comunitária. Muitos acabam a serviço de dragões, monstros ou bandidos, mas comunidades civis existem e tendem a se adaptar intensamente às normas do lugar onde nasceram."},
        {title:"Um incômodo para muitos",text:"Kobolds encontrados na natureza são estrategistas de emboscada que preferem levar inimigos a terrenos preparados com armadilhas. Individualmente podem ser medrosos, mas se tornam perigosos quando acuados ou quando conseguem agir como grupo."}
      ],
      meta:{alignment:"Variado, frequentemente caótico; kobolds de boa índole são menos comuns",languages:"Comum e Dracônico",speed:"9 m (30 pés)"},
      coreTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como se fosse luz plena e na escuridão como se fosse penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "dodgy-behavior":"Você pode realizar a ação Desengajar como uma ação bônus. Quando fizer isso, seu deslocamento aumenta em 3 metros (10 pés) até o fim do turno.",
        "exploitation-tactics":"Quando realizar um ataque contra uma criatura que esteja dentro do alcance corpo a corpo de um de seus aliados, desde que esse aliado não esteja Incapacitado, você pode fazer o ataque com vantagem, mesmo que ele normalmente tivesse desvantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
      },
      legacyTraits:{
        "climber":"Você possui deslocamento de escalada igual ao seu deslocamento base.",
        "crafty-interest":"Você ganha proficiência em duas perícias à sua escolha.",
        "dasher":"Você pode realizar a ação Disparada como uma ação bônus.",
        "general-jack":"Escolha dois atributos. Quando realizar testes de atributo ou testes de resistência usando esses atributos, adicione metade do seu bônus de proficiência, arredondado para baixo, ao resultado. Você não recebe este bônus se já estiver adicionando seu bônus de proficiência uma segunda vez, como por Especialização.",
        "ravager":"Suas garras afiadas concedem +2 às jogadas de ataque de seus ataques desarmados e demais ataques feitos com suas mãos ou garras.",
        "sliding-escape":"Quando realizar a ação Disparada ou Desengajar, você pode atravessar o espaço de criaturas do mesmo tamanho ou maiores que você sem penalidade ao deslocamento, desde que termine o movimento em um espaço desocupado."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Anfíbio (Kobold do Pântano); • Dádiva da Linhagem (Kobold de Grande Linhagem); • Visão no Escuro do Importunador (Kobold das Profundezas); • Instinto de Enxame (Kobold da Turba); • Movimento Alado (Kobold Alado).",
        "dodgy-behavior":"Você recebe o traço racial Comportamento Esquivo do Kobold.",
        "size-option":"Você pode escolher ser Pequeno durante a criação do personagem."
      },
      subraces:{
        "deep-kobold":{description:"Kobolds das Profundezas passam boa parte da vida no subterrâneo e desenvolveram olhos brilhantes e adaptações para sobreviver em escuridão constante. Suas escamas tendem a cores mais apagadas.",traits:{
          "eyes-on-the-shadows":"Você possui Especialização em Percepção, e desvantagem nunca reduz o valor de sua Percepção passiva.",
          "pesterer-s-darkvision":"O alcance de sua Visão no Escuro passa a 36 metros (120 pés) ou aumenta em 9 metros (30 pés), usando o maior valor."
        }},
        "greatkin-kobold":{description:"Kobolds de Grande Linhagem nascem com traços dracônicos muito mais evidentes que o normal. Essa conexão inexplicável os torna mais resistentes e fisicamente fortes.",traits:{
          "lineage-boon":"Escolha ácido, frio, fogo, elétrico ou veneno. Você possui resistência ao tipo escolhido, representando sua linhagem dracônica. Alternativamente, durante a criação do personagem, pode abrir mão dessa resistência para receber Movimento Alado, do Kobold Alado.",
          "might-of-the-fleeting":"Quando realizar um ataque corpo a corpo com arma, você pode rolar 1d4 e adicionar o resultado à jogada de ataque. Pode usar este traço um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "scramble-kobold":{description:"Kobolds da Turba representam a linhagem mais comum: pequenos oportunistas que sobrevivem em comunidade e improvisam com os recursos disponíveis.",traits:{
          "provisional-panic":"Quando realizar um teste de resistência de Força ou Destreza e o resultado do d20 for 9 ou menos, você pode tratar o resultado do d20 como 10.",
          "swarming-instinct":"Quando realizar a ação Disparada ou Desengajar, você pode fazer um ataque com arma contra uma criatura pela qual passe durante o movimento como parte da mesma ação."
        }},
        "swamp-kobold":{description:"Kobolds do Pântano são adaptados a regiões alagadas e desenvolveram a capacidade de respirar debaixo d’água, ganhando novas opções de movimentação e resistência ambiental.",traits:{
          "amphibious":"Você pode respirar ar e água e possui deslocamento de natação igual ao seu deslocamento base.",
          "dual-resilience":"Você possui resistência a dano ácido e a dano de frio."
        }},
        "winged-kobold":{description:"Kobolds Alados possuem asas coriáceas e um voo imperfeito, usado principalmente para permanecer longe do perigo. Curiosamente, outros kobolds frequentemente consideram esse traço um risco por tornar o indivíduo um alvo evidente.",traits:{
          "strike-from-a-safe-distance":"Ao atacar com uma arma de arremesso, o alcance normal dela passa a ser igual ao alcance longo. Ao atacar com uma arma à distância, seu alcance normal passa a ser metade do alcance longo da arma.",
          "winged-movement":"Você possui deslocamento de voo laborioso igual ao seu deslocamento base."
        }}
      }
    },

    "kua-hono":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Kua Hono é um termo amplo para povos reptilianos humanoides extremamente variados. Algumas linhagens parecem lagartos bípedes, enquanto outras lembram humanos ou elfos recobertos por escamas, placas ou conchas."},
        {title:"Uma designação ampla",text:"Kua Hono não descreve uma cultura única; funciona mais como um guarda-chuva para diferentes povos reptilianos. A capacidade de viver na água e a regeneração acelerada são características que ajudam a reuni-los sob a mesma designação."},
        {title:"Kua Hono em Retia",text:"Em Retia, são mais comuns nas Ilhas Despedaçadas de High Wave e em outras regiões costeiras quentes e úmidas. Embora possam viver sob a água, muitos preferem comunidades terrestres próximas do mar."
        }
      ],
      meta:{alignment:"Sem tendência definida; neutralidade é comum",languages:"Comum e Dracônico",speed:"9 m (30 pés); natação igual ao deslocamento de caminhada"},
      coreTraits:{
        "amphibious":"Você pode respirar ar e água.",
        "reptilian-regeneration":"Como uma ação bônus, você pode gastar até metade do seu total de Dados de Vida, arredondado para cima, como se tivesse concluído um Descanso Curto. Role os Dados de Vida gastos, adicione seu modificador de Constituição a cada dado e recupere pontos de vida iguais ao total. Ao fazer isso, pode escolher não rolar um ou mais desses dados; para cada dado gasto sem rolar, você recebe uma aplicação dos efeitos de *restauração menor*. Você pode usar este traço uma vez por Descanso Curto."
      },
      legacyTraits:{
        "accelerated-regeneration":"Sempre que gastar Dados de Vida para recuperar pontos de vida, você recupera pontos de vida adicionais por dado iguais à metade do seu bônus de proficiência, arredondado para baixo.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "natural-armor":"Sua pele escamosa é naturalmente resistente. Enquanto não estiver usando armadura, sua CA base é 13 + seu modificador de Destreza. Você também pode usar esse cálculo se a armadura vestida resultaria em uma CA menor. Para características que exigem o uso de armadura média ou pesada, calcular a CA desta forma pode ser tratado como usar esses tipos de armadura.",
        "nature-s-intuition":"Escolha duas das seguintes perícias e ganhe proficiência nelas: Adestrar Animais, Medicina, Natureza, Percepção, Furtividade ou Sobrevivência.",
        "slippery":"Você tem vantagem em testes de atributo e testes de resistência feitos para resistir ou encerrar as condições Agarrado ou Impedido.",
        "temperate-blood":"Escolha fogo ou frio. Você possui resistência ao tipo escolhido, mas vulnerabilidade ao outro tipo."
      },
      mixedBloodTraits:{
        "amphibious":"Você pode respirar ar e água.",
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Sangue Adaptável (Crocodilo); • Escalador Pegajoso (Sapo); • Rastreador pelo Olfato (Lagarto); • Resistência ao Fogo (Salamandra); • Escamas de Lixa (Tubarão); • Resiliência a Veneno (Cobra); • Casco (Tartaruga).",
        "reptilian-regeneration":"Você recebe o traço racial Regeneração Reptiliana do Kua Hono.",
        "size-options":"Seu tamanho é Pequeno."
      },
      subraces:{
        "crocodile":{description:"Kua Hono Crocodilo são grandes e robustos, com pele espessa e mandíbulas poderosas. Sua aparência pode lembrar dragonkins, e sua fisiologia adapta-se rapidamente a extremos de temperatura.",traits:{
          "adaptive-blood":"Quando sofrer dano de fogo ou frio, você se torna resistente ao tipo de dano que desencadeou o traço e vulnerável ao outro tipo por 1 hora. Depois disso, não pode usar este traço novamente até concluir um Descanso Curto ou Longo.",
          "mighty-jaws":"Quando acertar um ataque desarmado contra uma criatura que não seja maior que você, pode prender suas mandíbulas nela e Agarrá-la automaticamente. Enquanto mantiver esse agarrão, você não pode falar nem fornecer componentes verbais, mas todos os ataques desarmados que fizer contra o alvo têm vantagem. Seus ataques desarmados causam 1d8 + seu modificador de Força de dano perfurante.",
          "size-requirement":"Seu tamanho é Grande."
        }},
        "frog":{description:"Kua Hono Sapo são pequenos reptilianos anfíbios de corpo compacto, frequentemente em tons vivos de amarelo, azul ou verde. São excelentes saltadores e aderem às superfícies com facilidade.",traits:{
          "leap":"Como uma ação bônus, você pode saltar uma distância em pés igual a 5 × seu bônus de proficiência para um espaço desocupado dentro desse alcance. Você pode descrever o salto em arco, alcançando uma altura máxima igual à metade da distância máxima do salto. Ataques de oportunidade contra você durante esse movimento têm desvantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "size-requirement":"Seu tamanho é Pequeno.",
          "sticky-climber":"Uma vez por Descanso Curto ou Longo, como uma ação bônus, você pode tornar sua pele aderente por 10 minutos, funcionando como se estivesse sob os efeitos de *patas de aranha*, sem exigir concentração."
        }},
        "lizard":{description:"Kua Hono Lagarto lembram grandes lagartos humanoides de escamas lisas e olhos predatórios. São caçadores adaptáveis e, culturalmente, muitas comunidades desta linhagem são conhecidas por receber visitantes com hospitalidade.",traits:{
          "chameleon-phase":"Como uma ação bônus, você pode fundir suas cores ao ambiente e ficar invisível até o início do seu próximo turno. Se, nesse próximo turno, não realizar nenhuma outra ação, pode usar sua ação bônus para continuar invisível; realizar qualquer ação ou movimento depois disso encerra o efeito. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "scent-tracker":"Você pode realizar testes de Percepção para procurar criaturas escondidas como uma ação bônus. Ao fazer isso, consegue perceber a localização de criaturas invisíveis como se fossem visíveis; se encontrar uma criatura invisível dessa forma, trata-a como visível até o início do seu próximo turno."
        }},
        "salamander":{description:"Kua Hono Salamandra possuem pele vermelho-alaranjada, olhos grandes e corpos alongados. Gostam de ambientes quentes e muitas comunidades desenvolvem culturas formais baseadas em honra, nobreza e cavalaria.",traits:{
          "fire-pop":"No lugar de um ataque realizado como parte da ação Atacar, você pode cuspir fogo contra uma criatura a até 9 metros (30 pés). O alvo realiza um teste de resistência de Destreza, usando Constituição para determinar sua CD racial. Em uma falha, sofre dano de fogo igual a 1d10 × metade do seu bônus de proficiência, arredondado para baixo; em um sucesso, sofre metade. Você pode usar este traço no máximo uma vez por turno e um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "fire-resistance":"Você possui resistência a dano de fogo."
        }},
        "shark":{description:"Kua Hono Tubarão são grandes, predatórios e adaptados à caça no mar. Possuem mandíbulas perigosas, cauda extensa e órgãos sensoriais capazes de perceber impulsos elétricos e sinais nervosos.",traits:{
          "ampullae-of-lothezari":"Você percebe ondas eletromagnéticas e sinais nervosos de outras criaturas. Possui Visão às Cegas a 3 metros (10 pés); se sua cabeça estiver submersa em um líquido, o alcance passa a 18 metros (60 pés), mas essa percepção não ultrapassa os limites do corpo de líquido.",
          "blood-in-the-water":"Se você causou dano a uma criatura em seu turno anterior e ela estiver a uma distância que um dos seus deslocamentos poderia alcançar, você pode usar sua ação bônus para realizar a ação Disparada e fazer um ataque com arma contra ela. Todo movimento feito após usar Disparada desta forma deve aproximá-lo do alvo, com a intenção de terminar adjacente se possível. Este traço não se aplica a Constructos ou criaturas sem sangue.",
          "sandpaper-scales":"Quando uma criatura começar o turno Agarrada por você ou agarrando você, ela sofre dano cortante igual ao seu modificador de Constituição + seu bônus de proficiência.",
          "size-option":"Durante a criação do personagem, você pode escolher tamanho Grande em vez de Pequeno ou Médio."
        }},
        "snake":{description:"Kua Hono Cobra descendem de antigos humanoides transformados pela veneração de uma divindade serpentina. Frequentemente mantêm um rosto humanoide, mas possuem escamas, presas e outros traços serpentinos.",traits:{
          "magic-resistance":"Você tem vantagem em testes de resistência contra efeitos mágicos.",
          "poison-resilience":"Você possui resistência a dano de veneno e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado."
        }},
        "turtle":{description:"Kua Hono Tartaruga são lentos, pacíficos e longevos, com um casco extremamente resistente que constitui sua principal defesa natural.",traits:{
          "shell":"Seu casco concede CA base 17, sem receber seu modificador de Destreza. Você não pode usar armadura leve, média ou pesada, mas pode empunhar e receber benefícios de um escudo.",
          "withdraw":"Como uma ação, você pode recolher-se ao casco; para emergir, use uma ação bônus. Enquanto recolhido, sua CA aumenta em 4, você tem vantagem em testes de resistência de Força e Constituição, fica Caído, seu deslocamento é 0 e não pode ser aumentado, tem desvantagem em testes de resistência de Destreza e não pode usar reações. Enquanto estiver recolhido, a única ação que pode realizar é emergir."
        }}
      }
    },

    "merfolk":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"O Povo do Mar é formado por humanoides de pele e escamas coloridas, com nadadeiras retráteis e corpos adaptados à natação. Muitos vivem em comunidades submarinas ao lado de outras criaturas aquáticas e mantêm relações comerciais com assentamentos da superfície."},
        {title:"Reinos submersos",text:"Sociedades inteiras existem sob os oceanos, muitas governadas por soberanos chamados de Oradores das Profundezas. Esses reinos seguem tradições próprias e raramente reconhecem a autoridade política das terras acima."},
        {title:"Guardiões do antigo",text:"Povos oceânicos preservaram conhecimentos que impérios terrestres perderam. Ruínas, templos, artefatos e criaturas do Velho Mundo ainda são conhecidos por comunidades marinhas que nunca se submeteram aos mesmos colapsos culturais da superfície."}
      ],
      meta:{alignment:"Tendem à neutralidade, seguindo mais os costumes das águas onde vivem do que sistemas formais de lei",languages:"Comum e Aquan",speed:"9 m (30 pés); natação igual ao deslocamento de caminhada"},
      coreTraits:{
        "amphibious":"Você pode respirar ar e água.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza."
      },
      legacyTraits:{
        "craftsman":"Você ganha proficiência em duas Ferramentas de Artesão à sua escolha.",
        "cold-resistance":"Você possui resistência a dano de frio.",
        "command-air-water":"Você pode conjurar *névoa obscurecente*, *lufada de vento* e *caminhar sobre as águas* usando este traço. Pode conjurar cada uma uma vez por Descanso Longo e também pode conjurá-las normalmente usando espaços de magia apropriados. Ao receber este traço, escolha Inteligência, Sabedoria ou Carisma como habilidade de conjuração para essas magias.",
        "emissary-of-the-sea":"Você consegue transmitir ideias simples a qualquer Besta, Elemental ou Monstruosidade que possua deslocamento de natação. A criatura não compreende literalmente suas palavras e você não compreende as dela, mas vocês podem comunicar conceitos gerais e emoções.",
        "sea-sense":"Você sempre sabe a direção da costa ou lago mais próximo dentro de uma distância em quilômetros igual a 5 × seu bônus de proficiência.",
        "water-dash":"Enquanto estiver debaixo d’água, você pode realizar as ações Disparada ou Desengajar, desde que o movimento adicional resultante seja gasto nadando."
      },
      mixedBloodTraits:{
        "aqua-resident":"Você possui deslocamento de natação igual ao seu deslocamento de caminhada e pode respirar ar e água.",
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Resistência de Bronze (Escamas de Bronze); • Ciente do Perigo (Mar Profundo); • Sentido Climático (Litorâneo); • Voz do Mar (Sussurrador)."
      },
      subraces:{
        "bronzescale":{description:"Povo do Mar de Escamas de Bronze possui pele esverdeada manchada e escamas rígidas com coloração semelhante a bronze oxidado. Sua proteção natural é superior à de outras linhagens.",traits:{
          "bronze-endurance":"Quando sofrer dano e não estiver Incapacitado, você pode reduzir esse dano em 1d10 + seu modificador de Constituição. Este traço só pode ser usado uma vez por turno e um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "namesake-scales":"Enquanto não estiver usando armadura, você pode calcular sua CA base como 10 + seu modificador de Destreza + seu modificador de Constituição."
        }},
        "deep-sea":{description:"Povo do Mar Profundo vive em regiões oceânicas quase totalmente sem luz e desenvolveu sentidos capazes de perceber ameaças em completa escuridão. Essa linhagem é particularmente comum no Plano Elemental da Água.",traits:{
          "aware-of-danger":"Você tem vantagem em testes de iniciativa enquanto não estiver Incapacitado.",
          "blindsight":"Você possui Visão às Cegas a uma distância em pés igual a 5 × seu bônus de proficiência."
        }},
        "shoreline":{description:"Povo do Mar Litorâneo passa grande parte da vida sobre a superfície, trabalhando em portos, navios e assentamentos costeiros. Usa a relação com o mar para prever o clima e resiste melhor a ameaças inaladas.",traits:{
          "climate-sense":"Enquanto estiver próximo do oceano ou de um grande corpo d’água ligado a ele, você sente quão extremo será o clima pelos próximos dias, em quantidade igual ao seu bônus de proficiência. Você sabe se o clima será normal para a região, turbulento — ventos fortes, neve ou correntes agitadas — ou extremo — tempestades, nevascas e fenômenos semelhantes. Você obtém essa informação sempre que conclui um Descanso Curto a até 1,6 km (1 milha) de um corpo d’água apropriado.",
          "dry-breath":"Quando precisar realizar um teste de resistência ou teste de atributo relacionado a prender a respiração ou resistir a um efeito gasoso ou transportado pelo ar, você tem vantagem enquanto decidir manter a respiração. Se for forçado a respirar enquanto ainda estiver exposto ao mesmo efeito, perde essa vantagem até poder respirar ar — ou água — seguros."
        }},
        "whisperer":{description:"Sussurradores são afinados às vibrações do oceano e ouvem o mar quase como uma voz. Sua própria fala ressoa de forma sobrenatural através de líquidos.",traits:{
          "ocean-s-beloved":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Enfeitiçado.",
          "voice-of-the-sea":"Sua voz se propaga magicamente enquanto você está submerso em líquido. Você consegue fornecer componentes verbais normalmente e pode falar, em qualquer idioma que conheça, para ser compreendido por criaturas também submersas a até 18 metros (60 pés)."
        }}
      }
    },

    "minotaur":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Minotauros de Somnus Domina são grandes humanoides bovinos associados à proteção da natureza e dos mais fracos. Possuem corpos musculosos, cabeças de touro e chifres, dentes e unhas formados por material mineral semelhante a pedra ou ferro bruto."},
        {title:"Minotauros em Retia",text:"São mais comuns em regiões montanhosas e florestadas e evitam áreas dominadas por gigantes, com quem mantêm antigas rivalidades. Um dos Senhores da Extensão de Sermonway é um minotauro das Terras Altas de Critican, líder de um raro rebanho aliado ao governo."},
        {title:"Vontades temperadas",text:"Minotauros são lembrados por força física e força de vontade. Ao longo da história, vários atuaram como guardiões de locais sagrados e projetos dos Eidolons, e algumas comunidades ainda protegem templos antigos de Aymere."}
      ],
      meta:{alignment:"Geralmente neutros, com inclinação frequente ao bem e profundo respeito pela ordem natural",languages:"Comum e Terran",speed:"9 m (30 pés)"},
      coreTraits:{
        "stone-horns":"Quando acertar uma criatura a até 1,5 metro (5 pés) com um ataque corpo a corpo feito como parte da ação Atacar, você pode imediatamente usar sua ação bônus para tentar empurrá-la. O alvo deve realizar um teste de resistência de Força, usando Força para determinar sua CD racial. Em uma falha, é empurrado 3 metros (10 pés) para longe de você e fica Caído. Criaturas maiores que você têm vantagem nesse teste de resistência.",
        "tireless-beast":"Quando realizar um Descanso Curto e gastar Dados de Vida para recuperar pontos de vida, sempre que o resultado de um Dado de Vida for inferior à metade do valor máximo possível desse dado, arredondado para baixo, você pode tratar o resultado como sendo igual à metade do valor máximo, arredondado para baixo."
      },
      legacyTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "intimidating-presence":"Você ganha proficiência em Intimidação ou Persuasão, à sua escolha.",
        "opportunity-block":"Quando acertar uma criatura com um ataque de oportunidade, o deslocamento restante dela naquela rodada é reduzido em uma quantidade em pés igual a 5 × seu bônus de proficiência.",
        "perfect-direction":"Você sempre sabe em que direção fica o norte e possui vantagem em testes de atributo feitos para navegar ou rastrear.",
        "rushdown":"Quando realizar a ação Disparada, você pode, como parte da mesma ação, fazer um único ataque com arma ou usar Chifres de Pedra uma vez como se tivesse acertado uma criatura dentro do alcance com um ataque feito durante a ação Atacar.",
        "sharpened-horns":"Quando uma criatura falhar no teste de resistência contra Chifres de Pedra, ela sofre dano perfurante igual a 1d4 × seu bônus de proficiência."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Trespassar (Div); • Cuidado Tradicional (Ježan); • Grande Força (Ogol); • Vigilante (Razgov); • Jubiloso (Sveto).",
        "stone-horns":"Você recebe o traço racial Chifres de Pedra do Minotauro.",
        "tireless-beast":"Você recebe o traço racial Besta Incansável do Minotauro."
      },
      subraces:{
        "div":{description:"Minotauros Div são grandes, robustos e representam a imagem mais clássica de sua espécie. Possuem chifres afiados, pelagem escura e resistência física lendária.",traits:{
          "bullheaded-endurance":"Quando for reduzido a 0 pontos de vida por dano, você fica com uma quantidade de pontos de vida igual ao seu modificador de Constituição, mínimo 1, em vez disso. Depois de usar este traço, não pode usá-lo novamente até concluir um Descanso Longo.",
          "cleave":"Quando reduzir uma criatura a 0 pontos de vida com um ataque corpo a corpo com arma, você pode imediatamente realizar outro ataque com a mesma arma contra outra criatura dentro do alcance. Se acertar, o dano causado ao novo alvo é igual à quantidade pela qual o dano do primeiro ataque excedeu os pontos de vida restantes do primeiro alvo. Esse dano não pode ser aumentado por outras características. Se esse dano reduzir o novo alvo a 0 pontos de vida, você não pode continuar transferindo dano a partir do mesmo ataque."
        }},
        "jezan":{description:"Minotauros Ježan costumam ter pelagem escura, chifres semelhantes a madeira e olhos verdes acolhedores. A tradição os associa às linhagens que compartilharam sangue ou serviço com Aymere e à vida em harmonia com a natureza.",traits:{
          "aymere-s-blessing":"Você pode usar este traço para conjurar *vínculo com a besta*, *tremor de terra* ou *armadilha* sem gastar espaço de magia nem componentes materiais. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Sabedoria é sua habilidade de conjuração para essas magias.",
          "traditional-care":"Se passar 1 minuto concentrado em cuidar de uma criatura e tratar seus ferimentos sem realizar outras atividades, você pode fazê-la recuperar pontos de vida iguais a 1d10 × seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "ogol":{description:"Minotauros Ogol não possuem os chifres característicos de seus parentes; em seu lugar, têm a cabeça lisa ou pequenos tocos pétreos. A pele é extremamente endurecida, permitindo suportar impactos violentos.",traits:{
          "great-strength":"Quando obtiver 20 no d20 de um ataque corpo a corpo, a criatura atingida sofre dano adicional do mesmo tipo da arma igual a 1d8 × metade do seu bônus de proficiência, arredondado para baixo.",
          "hornless":"Você não possui a característica Chifres de Pedra do Minotauro e não pode adquirir características que dependam do uso dela.",
          "iron-flesh":"Quando sofrer dano de um ataque que possa ver, você pode reduzir o dano contundente, perfurante ou cortante sofrido em uma quantidade igual ao seu nível total. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "razgov":{description:"Minotauros Razgov são mais esguios e costumam viajar em rebanhos que funcionam como caravanas de comércio. São sociáveis, curiosos e atentos a ameaças durante suas jornadas.",traits:{
          "trader-s-talents":"Você ganha proficiência em duas perícias à sua escolha.",
          "watchful":"Você adiciona seu bônus de proficiência aos testes de iniciativa e à Percepção passiva, desde que outra característica não esteja permitindo que você adicione esse bônus dessa forma à Percepção passiva, independentemente de proficiência ou Especialização em Percepção."
        }},
        "sveto":{description:"Minotauros Sveto possuem pelagem clara e uma centelha de poder celestial, eco de antigas linhagens que lutaram ao lado de arcontes e outros celestiais. Seus chifres costumam lembrar mármore branco.",traits:{
          "creature-type":"Além de Humanoide e Minotauro, você também conta como Celestial.",
          "guardian-s-light":"Como uma ação bônus, você manifesta poder celestial por 1 minuto, criando um segundo conjunto de chifres radiantes e asas simbólicas de luz. Durante esse período: • o primeiro ataque que acertar em cada turno causa dano radiante adicional igual ao seu nível total; • você possui resistência a dano radiante e necrótico; • criaturas não recebem vantagem no teste de resistência contra Chifres de Pedra por serem maiores que você; • você não pode ficar Amedrontado. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo.",
          "joyful":"Quando realizar um teste ou teste de resistência de Carisma ao qual não esteja adicionando seu bônus de proficiência, você pode adicionar metade do bônus de proficiência, arredondado para baixo, ao resultado."
        }}
      }
    },

    "nephilim":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Nefilim são seres de pele prateada criados a partir de fragmentos de gemas ligados ao Coração Duradouro, uma rede conceitual de memórias e experiências reunida por Mnemosyne. Cada nefilim nasce como um indivíduo completo para viver novas experiências que um dia poderão retornar ao Coração."},
        {title:"Características",text:"Sua pele prateada é marcada por padrões astrológicos e arcanos que brilham durante o uso de magia. Olhos e partes do cabelo lembram gemas coloridas, e eles conseguem manifestar asas prismáticas semelhantes a painéis de vidro suspensos."},
        {title:"Criação e comunidade",text:"Nefilim surgem de fragmentos de cristal carregados de energia eidomântica e normalmente aparecem com corpo e mente já adultos. Não possuem família biológica tradicional e tendem a construir laços de comunidade, amizade e propósito em seu lugar."},
        {title:"Propósito e Silvercounters",text:"Alguns nascem com missões muito específicas e são chamados Silvercounters. Eles recebem mais conhecimento e potencial do Coração Duradouro e, por isso, costumam ser indivíduos excepcionais, embora o fim da missão possa deixá-los sem direção."}
      ],
      meta:{alignment:"Inatamente neutros, embora indivíduos possam desenvolver outras tendências",languages:"Comum, Primordial e mais um idioma",speed:"9 m (30 pés)"},
      coreTraits:{
        "ageless-mind":"Sua mente foi formada a partir de experiências e conhecimentos de incontáveis vidas anteriores e é excepcionalmente robusta. Você possui resistência a dano psíquico.",
        "prismatic-wings":"À vontade, você pode manifestar um par de asas etéreas formadas por painéis prismáticos de vidro flutuante. Elas concedem deslocamento de voo com pairar igual a 3 metros (10 pés) × seu bônus de proficiência. As asas desaparecem quando não estão em uso. Se ficar Caído enquanto voa, pode usar sua reação para se recompor imediatamente. Se ficar Inconsciente enquanto voa, desce imediatamente e sem sofrer dano de queda por até 18 metros (60 pés); só começa a cair normalmente se iniciar o próximo turno com deslocamento 0.",
        "subdermal-illumination":"Você pode conjurar o truque *luz* como uma ação bônus, mas ele faz seu próprio corpo brilhar em vez de afetar um objeto. A luz possui tonalidade prismática e multicolorida."
      },
      legacyTraits:{
        "greater-illumination":"As áreas de luz plena e penumbra produzidas por Iluminação Subdérmica alcançam o dobro da distância normal.",
        "language-scholar":"Você aprende dois idiomas adicionais, que sabe falar e escrever.",
        "shudder-step":"Como uma ação bônus, você pode se teletransportar até 9 metros (30 pés) para um espaço desocupado que possa ver. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "proficiency":"Você ganha proficiência em uma perícia à sua escolha.",
        "temporal-eyeline":"Você pode realizar testes de Percepção e Investigação baseados em Sabedoria como uma ação bônus em vez de uma ação completa.",
        "vestial-magic":"Escolha um truque da lista de Feiticeiro. Você aprende esse truque e escolhe Sabedoria, Inteligência ou Carisma como sua habilidade de conjuração para ele."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Memória Eidética (Ancoragem); • Tormento Mental (Negação); • Memória de Técnica (Profecia); • Memória de Combate (Recuperação).",
        "prismatic-wings":"Você recebe o traço racial Asas Prismáticas do Nefilim.",
        "subdermal-illumination":"Você recebe o traço racial Iluminação Subdérmica do Nefilim.",
        "resistance":"Você recebe resistência a dano psíquico."
      },
      subraces:{
        "anchoring":{description:"Nefilim de Ancoragem nascem com a motivação de sair pelo mundo e reunir experiências que um dia poderão retornar ao Coração Duradouro. São os mais propensos a conviver com outras culturas e viver como exploradores.",traits:{
          "eidetic-memory":"Você consegue lembrar perfeitamente informações escritas ou apresentadas visualmente que tenha visto, assim como informações que tenha ouvido sobre culturas, religiões ou história.",
          "gift-of-experience":"Você nasce com conhecimento suficiente para apoiar sua jornada. Escolha um talento para o qual cumpra os pré-requisitos e receba-o imediatamente."
        }},
        "denial":{description:"Nefilim de Negação recebem do Coração Duradouro memórias consideradas indesejadas, traumáticas ou incompatíveis com o rumo de futuras gerações. Eles sabem que essas experiências não retornarão ao Coração quando morrerem e tendem a buscar uma vida própria fora da cultura nefilim.",traits:{
          "lost-memory":"Uma vez por Descanso Longo, quando realizar um teste de perícia ou teste de resistência no qual não possua proficiência, você pode usar sua reação para ganhar proficiência nesse tipo de jogada por 1 minuto.",
          "mental-torment":"Como uma ação bônus, escolha uma criatura que possa ver a até 18 metros (60 pés). Ela deve realizar um teste de resistência de Inteligência contra CD 8 + seu modificador de Inteligência + seu bônus de proficiência. Em uma falha, sofre dano psíquico igual a 1d8 × seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "prophecy":{description:"Nefilim de Profecia são criados para oferecer direção, liderança ou conhecimento crítico aos demais. Mantêm uma conexão mais imediata com o Coração Duradouro e conseguem evocar breves fragmentos de experiência quando necessário.",traits:{
          "additional-proficiencies":"Escolha duas perícias e ganhe proficiência nelas. Em vez de qualquer uma dessas perícias, você pode escolher aprender dois idiomas à sua escolha.",
          "memory-of-technique":"Antes de realizar um teste de atributo ou perícia, você pode declarar um ou mais usos deste traço. Para cada uso declarado, role 1d4 e adicione o resultado ao teste. Você possui um número de usos por Descanso Longo igual ao seu bônus de proficiência. É possível gastar vários usos na mesma jogada, desde que declare todos antes de rolar qualquer um dos d4."
        }},
        "reclamation":{description:"Nefilim de Recuperação nascem preparados para aventura, combate e desafios físicos. O Coração Duradouro os abastece com experiências de nefilim que enfrentaram perigos anteriormente, e muitos recebem propósitos de proteção ou busca.",traits:{
          "additional-proficiencies":"Escolha duas opções entre as seguintes e ganhe as proficiências indicadas: • todas as armaduras e escudos; • armas simples e marciais; • armas de fogo simples ou marciais, se aplicável; • Atletismo, Acrobacia ou Sobrevivência.",
          "memory-of-combat":"Antes de realizar uma jogada de ataque ou teste de resistência, você pode declarar um ou mais usos deste traço. Para cada uso declarado, role 1d4 e adicione o resultado à jogada. Você possui um número de usos por Descanso Longo igual ao seu bônus de proficiência. Pode gastar vários usos na mesma jogada, desde que declare todos antes de rolar qualquer um dos d4."
        }}
      }
    },

    "orc":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Orcs são humanoides grandes e atléticos, com peles que podem variar entre tons de vermelho, verde, azul e amarelo. Muitos possuem mandíbula inferior pronunciada e presas grandes, características das quais costumam ter orgulho."},
        {title:"Orcs em Retia",text:"Tribos orcs existem por todo o continente, frequentemente mantendo autonomia política e oferecendo comércio, proteção e trabalho a comunidades vizinhas. Muitos preferem agir fora das estruturas oficiais para defender suas terras segundo as próprias tradições."},
        {title:"Oulenmarsh e os Bloodthreshers",text:"Na Terra Distante, os Oulenmarsh tornaram-se um exemplo de integração e cavalaria, enquanto os Bloodthreshers representam uma força expansionista mais recente liderada por Bilgogg Stalemaw. A disputa reflete tensões internas sobre tradição, poder e o futuro dos povos orcs."
        }
      ],
      meta:{alignment:"Frequentemente caóticos, com neutralidade e maldade mais comuns que bondade",languages:"Comum e Orc",speed:"9 m (30 pés)"},
      coreTraits:{
        "rage-dash":"Como uma ação bônus, você pode mover-se até metade do seu deslocamento em direção a uma criatura hostil que possa ver ou ouvir. Deve terminar esse movimento mais próximo dela do que começou. Se terminar mais perto do alvo, o próximo ataque que realizar contra ele no mesmo turno tem vantagem.",
        "relentless-endurance":"Quando for reduzido a 0 pontos de vida por dano, você fica com 1 ponto de vida em vez disso. Até o início do seu próximo turno, ataques adicionais contra você têm desvantagem. Você pode usar este traço uma vez por Descanso Curto ou Longo."
      },
      legacyTraits:{
        "crushing-grip":"Quando realizar um ataque contra uma criatura que esteja Agarrando, você tem vantagem na jogada de ataque. O primeiro ataque que acertar em cada turno contra essa criatura causa dano adicional igual ao seu bônus de proficiência.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "light-footed":"Seu deslocamento base aumenta em 3 metros (10 pés).",
        "savage-attacks":"Quando obtiver um acerto crítico com um ataque corpo a corpo com arma, role um dado de dano da arma uma vez adicional e some-o ao dano extra do crítico. No 13º nível, role dois dados adicionais em vez de um.",
        "threatening":"Você ganha proficiência em Intimidação. Uma vez por Descanso Curto ou Longo, antes de realizar um teste de Carisma, você pode declarar o uso deste traço, rolar 1d10 e adicionar o resultado ao teste.",
        "weapon-training":"Você ganha proficiência com armaduras leves, armaduras médias, escudos e duas armas marciais à sua escolha; pelo menos uma delas deve possuir a propriedade Pesada ou Duas Mãos."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Constituição Orc (Orc Berserker); • Rolamento de Esquiva (Orc Blackheel); • Reagrupamento Implacável (Orc Flock Wild); • Resistência a Ácido (Orc do Pântano).",
        "rage-dash":"Você recebe o traço racial Disparada Furiosa do Orc.",
        "relentless-endurance":"Você recebe o traço racial Resistência Implacável do Orc.",
        "size-option":"Seu tamanho é Grande."
      },
      subraces:{
        "berserker-orc":{description:"Orcs Berserker são grandes combatentes que suportam punição e parecem ficar ainda mais perigosos depois de sofrer ataques. A dor funciona como combustível para sua agressividade.",traits:{
          "orcish-constitution":"Seu máximo de pontos de vida aumenta em 1 e aumenta em mais 1 sempre que você ganha um nível após o primeiro.",
          "retributive-strike":"Quando uma criatura causar dano a você ou realizar uma jogada de ataque contra você, você tem vantagem no primeiro ataque que fizer contra ela antes do fim do seu próximo turno."
        }},
        "blackheel-orc":{description:"Orcs Blackheel desenvolvem pele escurecida nos antebraços, pernas e pés conforme envelhecem. Essa pele endurecida permite que pressionem o corpo além dos limites normais durante arrancadas.",traits:{
          "adrenaline":"Você pode realizar a ação Disparada como uma ação bônus um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Sempre que fizer isso, recebe pontos de vida temporários iguais ao seu bônus de proficiência.",
          "dodge-roll":"Você tem vantagem em testes de resistência de Destreza contra efeitos que possa ver."
        }},
        "flock-wild-orc":{description:"Orcs Flock Wild são cooperativos e socialmente habilidosos, funcionando bem em equipes tanto fora quanto dentro do combate. Sua coragem é capaz de contagiar aliados nos momentos mais perigosos.",traits:{
          "ambush-tactics":"Quando realizar um ataque contra uma criatura enquanto um aliado que não esteja Incapacitado estiver a até 1,5 metro (5 pés) de você, você pode usar este traço para fazer o ataque com vantagem. Você pode usá-lo um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "relentless-rally":"Sempre que Resistência Implacável for ativada e impedir que você seja reduzido a 0 pontos de vida, você solta um grito de batalha. Escolha até um número de criaturas igual ao seu bônus de proficiência a até 9 metros (30 pés) que possam ver ou ouvir você. Você e cada criatura escolhida recebem pontos de vida temporários iguais ao seu nível."
        }},
        "marsh-orc":{description:"Orcs do Pântano são nativos da Terra Distante e descendem de povos que controlaram grande parte da região por gerações. Embora muitas comunidades tenham se tornado altamente civilizadas, preservam adaptações desenvolvidas para sobreviver nos pântanos.",traits:{
          "acid-resistance":"Você possui resistência a dano ácido.",
          "ward-of-mankind":"Você ganha proficiência em duas perícias à sua escolha e em um conjunto de Ferramentas de Artesão. Também aprende a falar, ler e escrever dois idiomas adicionais."
        }}
      }
    },

    "petratara":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Pétratára carregam a maldição herdada de górgonas. Essa ligação pode vir de parentesco direto, pactos, sangue ingerido ou exposição prolongada à maldição de uma górgona, e se transmite pelas gerações sem desaparecer."},
        {title:"Buscando a origem",text:"Muitos Pétratára sentem uma compulsão por descobrir a górgona ligada à própria linhagem e exploram ruínas, túneis e esconderijos em busca dela. Alguns acabam servindo essa ancestral ao encontrá-la; outros só percebem o tempo perdido depois que ela morre."},
        {title:"Pétratára em Retia",text:"São raros e pouco conhecidos, frequentemente confundidos com monstruosidades ou mortos-vivos. Uma grande comunidade existe nas ruínas sob Summergrass, onde vive a antiga górgona Tomyris."}
      ],
      meta:{alignment:"Sem tendência definida; os que servem górgonas tendem mais ao mal",languages:"Comum e Terran",speed:"9 m (30 pés)"},
      coreTraits:{
        "eyes-of-the-snake":"Como uma ação bônus, você pode permitir que seus olhos percebam criaturas invisíveis normalmente por 1 minuto. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "stone-heritage":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Petrificado e também em testes de resistência contra efeitos baseados em olhar."
      },
      legacyTraits:{
        "climber":"Você possui deslocamento de escalada igual ao seu deslocamento base.",
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "cursed-mystic-eyes":"Escolha uma magia de 1º nível que obrigue um alvo a realizar um teste de resistência. Você pode conjurá-la sem componentes nem espaços de magia gastando um uso deste traço. Você precisa conseguir ver o alvo ao fazer isso, mesmo que a magia normalmente diga o contrário. Pode gastar usos adicionais para aumentar o nível em que a magia é conjurada em 1 para cada uso além do primeiro. Você possui um número de usos por Descanso Longo igual ao seu bônus de proficiência.",
        "regal-charm":"Você ganha proficiência em Persuasão e em mais uma perícia à sua escolha.",
        "stonewhisperer":"Enquanto estiver em contato com uma criatura petrificada, você pode estabelecer um elo psíquico que cria um espaço mental compartilhado no qual vocês podem conversar livremente. Enquanto mantém o elo, você fica Cego e Surdo ao ambiente externo. Pode encerrá-lo à vontade, e ele também termina se perder o contato físico. Dentro desse espaço mental, você tem vantagem em todos os testes de atributo baseados em Carisma e pode se comunicar livremente desde que a criatura conheça pelo menos um idioma que você também conheça.",
        "tremorsense":"Você possui Sentido Sísmico a uma distância em pés igual a 10 × seu bônus de proficiência."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Assassino Serpentino (Euryale); • Disparada Macabra (Medusa); • Olhos Límpidos (Stheno).",
        "eyes-of-the-snake":"Você recebe o traço racial Olhos da Serpente do Pétratára.",
        "stone-heritage":"Você recebe o traço racial Herança de Pedra do Pétratára."
      },
      subraces:{
        "euryale":{description:"Pétratára Euryale geralmente surgem de maldições indesejadas. Têm pele escamosa, olhos amarelos de pupila vertical e uma resistência particularmente forte à petrificação da linhagem górgona.",traits:{
          "entropic-gaze":"Como uma ação bônus, escolha uma criatura a até 9 metros (30 pés) que possa ver você. Ela realiza um teste de resistência de Constituição, usando Carisma para determinar sua CD racial. Em uma falha, tem desvantagem em jogadas de ataque e testes de resistência até o fim do próximo turno dela, à medida que o corpo começa a endurecer. Criaturas imunes à petrificação não são afetadas. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "petrification-immunity":"Você é imune à condição Petrificado.",
          "serpentine-assassin":"Você ganha proficiência em Furtividade."
        }},
        "medusa":{description:"Pétratára Medusa manifestam a maldição górgona de forma particularmente monstruosa, com corpos macabros que ainda conservam parte da elegância da linhagem. Muitos são tratados como descartáveis pelas próprias górgonas ancestrais.",traits:{
          "ghoulish-dash":"Você pode realizar a ação Disparada como uma ação bônus.",
          "monstrous-mind":"Você possui resistência a dano psíquico.",
          "reduction-gaze":"Como uma ação bônus, escolha uma criatura a até 9 metros (30 pés) que possa ver você. Ela deve realizar um teste de resistência de Constituição, com Constituição ou Carisma definindo sua CD racial. Em uma falha, seu deslocamento é reduzido a 0 até o fim do próximo turno dela devido ao enrijecimento causado pela petrificação. Criaturas imunes à petrificação não são afetadas. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "stheno":{description:"Pétratára Stheno representam a face mais bela e afortunada da herança górgona. Possuem aparência quase angelical e dois pares de asas grandes, mas essa beleza também pode torná-los alvo da possessividade de uma górgona ancestral.",traits:{
          "allure":"Você pode conjurar *enfeitiçar pessoa* sem componentes e sem gastar espaço de magia um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "clear-eyes":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Cego e possui Visão no Escuro a 18 metros (60 pés). Se já tiver Visão no Escuro, aumente o alcance em 9 metros (30 pés) ou para 36 metros (120 pés), usando o maior valor.",
          "gorgon-wings":"Você possui dois pares de asas que concedem deslocamento de voo laborioso igual ao seu deslocamento base. Você só consegue decolar a partir do chão se houver pelo menos um espaço desocupado adjacente a você no plano horizontal."
        }}
      }
    },

    "primordia":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Primordia surgem quando energias elementais se ligam a um recém-nascido. O termo abrange duas grandes categorias: Almas Elementais, ligadas diretamente aos Planos Elementais, e Anntiqe, nascidos fora deles mas transformados pela exposição às mesmas energias."},
        {title:"Mundos diferentes",text:"Muitas Almas Elementais vivem nos planos que lhes deram origem, como a Metrópole de Bronze no Fogo, Golluckhold na Terra, Estrela Celestina no Ar e Atlicanarium na Água. Cada cultura é moldada pelas condições e poderes de seu plano."},
        {title:"Alma Elemental e Anntiqe",text:"Almas Elementais são consideradas manifestações mais puras do plano de origem. Anntiqe preservam mais características de sua linhagem mortal e representam influências elementais secundárias — cinzas, gelo, tempestade ou madeira — que se manifestam em seus corpos."},
        {title:"Primordia em Retia",text:"São extremamente raros em Retia, onde portais para os Planos Elementais são pouco comuns. Indivíduos que conseguem estabelecer rotas planares, como comerciantes ligados ao Plano do Fogo, tornam-se importantes intermediários culturais e econômicos."
        }
      ],
      meta:{alignment:"Muito variado, sem tendência dominante",languages:"Comum e um idioma Primordial definido pela subraça: Ignan, Auran, Terran ou Aquan",speed:"9 m (30 pés)"},
      coreTraits:{
        "elemental-magic":"Sua subraça determina um truque, uma magia de 1º nível e uma magia de 2º nível. Você pode conjurar o truque à vontade. Pode usar este traço para conjurar a magia de 1º nível gastando 1 uso ou a de 2º nível gastando 2 usos, sem espaços de magia nem componentes materiais. Você possui um número de usos por Descanso Longo igual ao seu bônus de proficiência. Ao receber este traço, escolha Sabedoria, Inteligência ou Carisma como sua habilidade de conjuração. A ficha da subraça selecionada mostra diretamente as três magias correspondentes."
      },
      legacyTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "elemental-burst":"Quando conjurar uma magia usando Magia Elemental, você pode gastar um ou mais usos adicionais dessa característica para aumentar o nível em que a magia é conjurada em 1 para cada uso adicional gasto.",
        "languages-of-the-planes":"Você aprende dois idiomas adicionais, que sabe falar, ler e escrever, e conhece todos os idiomas que compõem o Primordial.",
        "primal-barrier":"Enquanto não estiver usando armadura e não estiver Incapacitado, você adiciona metade do seu bônus de proficiência, arredondado para baixo, à sua Classe de Armadura.",
        "primordial-absorption":"Quando sofrer dano de um tipo ao qual seja resistente — ou de um tipo que alguma característica permita reduzir sem usar uma ação — você pode usar sua reação para não sofrer esse dano. Em vez disso, recebe pontos de vida temporários iguais ao dano que teria sofrido antes da aplicação de resistências ou reduções. Você pode usar este traço uma vez por Descanso Curto ou Longo.",
        "unusual-blood":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado e possui resistência a dano de veneno."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Respiração Infinita (Alma do Ar); • Aspecto de Cinzas (Anntiqe de Cinzas); • Passos sem Pegadas (Alma da Terra); • Visão no Escuro Ígnea (Alma do Fogo); • Aspecto de Gelo (Anntiqe de Gelo); • Aspecto da Tempestade (Anntiqe da Tempestade); • Nascido da Água (Alma da Água); • Aspecto de Madeira (Anntiqe de Madeira).",
        "elemental-magic":"Você recebe o traço racial Magia Elemental do Primordia. Escolha uma subraça para determinar as magias obtidas. Se outra característica também depender de uma subraça Primordia, deve usar essa mesma escolha."
      },
      subraces:{
        "air-soul":{description:"Almas do Ar nascem no Plano Elemental do Ar. Têm pele azulada ou branca e cabelos que parecem flutuar contra a gravidade, preferindo roupas leves para sentir o vento sobre o corpo.",traits:{
          "dance-with-the-wind":"Você pode usar este traço para conjurar *levitação* e *voo* uma vez por Descanso Longo cada, sem componentes materiais nem espaços de magia. Sua habilidade de conjuração é a mesma escolhida para Magia Elemental.",
          "infinite-breath":"Você pode prender a respiração indefinidamente enquanto não estiver Incapacitado."
        }},
        "ash-anntiqe":{description:"Anntiqe de Cinzas carregam uma influência imperfeita do Plano Elemental do Fogo. Sua pele lembra fuligem ou obsidiana pulverizada, veios de fogo brilham pelo corpo e seus cabelos podem manifestar-se como chamas quando estão despertos.",traits:{
          "aspect-of-ash":"Sempre que sofrer dano de fogo, reduza o dano em uma quantidade igual ao seu nível total + 5. Você ignora efeitos de terreno difícil ou perigoso cuja fonte seja calor intenso ou fogo, e ambientes extremamente quentes não causam efeitos adversos em você enquanto houver ar respirável.",
          "burning-rage":"Quando obtiver um acerto crítico com uma arma corpo a corpo, sua excitação ou fúria faz seu corpo incendiar-se e o ataque causa 1d8 de dano de fogo adicional. O dano aumenta para 2d8 no 7º nível, 3d8 no 13º e 4d8 no 18º."
        }},
        "earth-soul":{description:"Almas da Terra nascem no Plano Elemental da Terra e possuem pele de textura rochosa ou arenosa, rachaduras nas articulações e, por vezes, olhos, cabelos ou unhas semelhantes a gemas.",traits:{
          "earth-meld":"Como uma ação bônus, você pode entrar em uma superfície de pedra ou mineral natural, como uma parede ou o chão, e emergir em um espaço desocupado a até 18 metros (60 pés) que tenha as mesmas condições. Alternativamente, pode usar este traço como uma ação bônus para tratar uma criatura que ocupe uma superfície adequada dentro desse alcance como se estivesse adjacente a você até o fim do turno, sem se teletransportar fisicamente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "pass-without-trace":"Uma vez por Descanso Longo, você pode conjurar *passos sem pegadas* usando este traço, sem gastar espaço de magia nem componentes materiais. Sua habilidade de conjuração é a mesma escolhida para Magia Elemental."
        }},
        "fire-soul":{description:"Almas do Fogo nascem no Plano Elemental do Fogo e frequentemente apresentam pele cinzenta ou vermelha e cabelos vermelhos, alaranjados ou formados por chamas inofensivas.",traits:{
          "fiery-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés), enxergando em penumbra como luz plena e na escuridão como penumbra, em tons de cinza. Se já possuir Visão no Escuro por outra fonte, aumente seu alcance em 9 metros (30 pés) ou para 36 metros (120 pés), usando o maior valor.",
          "fire-resistance":"Você possui resistência a dano de fogo.",
          "primordial-rebuke":"Quando sofrer dano de um ataque corpo a corpo, você pode usar sua reação para incendiar o corpo até o início do seu próximo turno. Sempre que uma criatura a até 1,5 metro (5 pés) acertar você com um ataque corpo a corpo durante esse período — incluindo o ataque que desencadeou a reação — ela sofre dano de fogo igual à metade do seu nível total, arredondado para baixo, mínimo 1. Você pode usar este traço um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }},
        "frost-anntiqe":{description:"Anntiqe de Gelo canalizam as regiões mais frias do Plano Elemental da Água. Têm cabelos congelados ou feitos de gelo, pele extremamente fria e costumam congelar o solo sob os pés enquanto se movem.",traits:{
          "aspect-of-ice":"Sempre que sofrer dano de frio, reduza-o em uma quantidade igual ao seu nível total + 5. Você ignora efeitos de terreno difícil ou perigoso causados por frio extremo, neve ou gelo e ignora penalidades de terreno derivadas dessas condições.",
          "ice-shield":"Quando for atingido por um ataque, você pode usar sua reação para criar um escudo de gelo, aumentando sua Classe de Armadura em uma quantidade igual ao seu bônus de proficiência até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Se o ataque causaria dano de fogo, você não recebe esse bônus de CA contra ele.",
          "icetopper":"Você possui deslocamento de natação igual ao seu deslocamento base. Quando pisa na superfície de um líquido abaixo do ponto de ebulição, congela a área sob seus pés e pode atravessá-la como se estivesse sob os efeitos de *caminhar sobre as águas*. A trilha de gelo se quebra imediatamente atrás de você e não pode ser usada por outras criaturas."
        }},
        "storm-anntiqe":{description:"Anntiqe da Tempestade carregam influência do Plano Elemental do Ar. Têm corpos leves, penas distribuídas pelo corpo, cabelos constantemente varridos pelo vento e parecem ser acompanhados por correntes de ar vivas.",traits:{
          "aspect-of-storm":"Sempre que sofrer dano elétrico, reduza-o em uma quantidade igual ao seu nível total. Você sempre sofre apenas metade do dano de queda e ignora uma quantidade de pés de queda igual a 10 × seu bônus de proficiência antes de calcular esse dano.",
          "levitation":"Você possui deslocamento de voo com pairar igual ao seu deslocamento base. Se terminar o turno no ar, deve usar sua ação bônus para permanecer suspenso até o início do próximo turno; caso contrário, você cai."
        }},
        "water-soul":{description:"Almas da Água vêm dos mares do Plano Elemental da Água e podem viver indefinidamente submersas. Suas peles costumam ser azuladas ou aquamarinas e algumas apresentam cabelo semelhante a água suspensa ou outros traços de criaturas marinhas.",traits:{
          "acid-resistance":"Você possui resistência a dano ácido.",
          "water-wish":"Enquanto estiver submerso, exposto a chuva ou neblina densa, ou coberto por algum líquido, você pode usar este traço antes de uma jogada de ataque, teste de atributo ou teste de resistência para rolar 1d6 e adicionar o resultado. Também pode usá-lo quando receber cura de uma poção ou líquido: escolha uma quantidade de dados de cura até seu bônus de proficiência começando pelos menores resultados e trate esses dados como se tivessem obtido o resultado máximo. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "waterborne":"Você possui deslocamento de natação de 9 metros (30 pés) e pode respirar ar e água."
        }},
        "wood-anntiqe":{description:"Anntiqe de Madeira são influenciados pelo aspecto vegetal do Plano Elemental da Terra. Têm pele com textura de pedra ou casca, cabelos semelhantes a vinhas e membros mais grossos, evocando uma forma humanoide parcialmente arbórea.",traits:{
          "aspect-of-wood":"Sempre que sofrer dano ácido, reduza-o em uma quantidade igual ao seu nível total + 5. Você ignora penalidades de terreno difícil ou perigoso causadas por árvores, plantas, vinhas e outras formas de flora.",
          "forest-adept":"Você possui deslocamento de escalada igual ao seu deslocamento base e pode escalar árvores e superfícies ásperas sem equipamento e sem precisar realizar testes de atributo para fazê-lo.",
          "tree-skin":"Sua pele é sólida como casca de árvore. Você pode escolher calcular sua CA base como 17, a menos que outro cálculo resulte em valor maior. Ainda recebe efeitos de armaduras mágicas que esteja vestindo ou com as quais esteja sintonizado, incluindo bônus de aprimoramento, e pode receber normalmente bônus de CA de escudos."
        }}
      }
    },

    "tarnished":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Maculados descendem de fadas que buscaram poder por meio de cruzamentos, essência ou almas demoníacas. O resultado conserva parte da graça feérica, mas possui chifres, caudas, asas, mutações e outros sinais do sangue demoníaco."},
        {title:"Serviço aos Duques do Inferno",text:"Muitos Maculados refugiaram-se nos Infernos e formaram a Comuna Fairyfall, uma organização protegida por acordos que impedem os Duques de explorá-los livremente. A linhagem é particularmente útil como força de espionagem e trabalho entre os círculos infernais."},
        {title:"Maculados em Retia",text:"Existem em Retia, mas quase sempre escondem a verdadeira natureza por meio de disfarces e formas alternativas. Quando se reúnem, muitas comunidades adotam estruturas semelhantes a Casas Nobres e mantêm forte preocupação com linhagem e status."}
      ],
      meta:{alignment:"Frequentemente malignos e leais, embora indivíduos criados fora dos Infernos possam abandonar essa inclinação",languages:"Comum e Infernal",speed:"9 m (30 pés)"},
      coreTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "lucid-form":"Como uma ação, você pode alterar sua forma física à vontade para assumir a aparência de outra raça, mantendo sua anatomia geral, seus traços pessoais e seu tamanho. Asas, caudas, nadadeiras e características semelhantes desaparecem enquanto estiver nesta forma. Você não recebe os traços da raça copiada, apenas sua aparência exterior. Pode retornar à forma verdadeira à vontade. Efeitos capazes de enxergar através de ilusões ou dissipá-las tratam esta transformação como uma ilusão."
      },
      legacyTraits:{
        "brimstone-step":"Como uma ação bônus, você desaparece e reaparece em uma explosão de fogo em um espaço desocupado que possa ver a até 9 metros (30 pés). Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "devil-s-darkvision":"O alcance de sua Visão no Escuro aumenta em 9 metros (30 pés) ou passa a 36 metros (120 pés), usando o maior valor.",
        "devilsight":"Você possui Visão Diabólica a uma distância em pés igual a 10 × seu bônus de proficiência, permitindo enxergar em escuridão mágica e não mágica como se fosse luz plena.",
        "fey-ancestry":"Você tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Enfeitiçado e não pode ser colocado magicamente para dormir.",
        "fiendish-resilience":"Escolha dano psíquico ou dano de fogo ao receber este traço. Você possui resistência ao tipo escolhido.",
        "weapon-training":"Você ganha proficiência com armaduras leves, rapieiras, escudos e duas armas marciais à sua escolha."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Corpo Imaculado (Êxtase); • Resistente a Fumaça (Grotesco); • Fúria do Matador (Redentor); • Nota de Magia Rápida (Tecelão de Magias); • Asas Ínferas (Alado).",
        "darkvision":"Você recebe o traço racial Visão no Escuro do Maculado.",
        "lucid-form":"Você recebe o traço racial Forma Lúcida do Maculado. Se Maculado for sua raça secundária, você também conta como Corruptor (demônio) além de seus outros tipos de criatura."
      },
      subraces:{
        "ecstasy":{description:"Maculados do Êxtase são os mais diretamente ligados a súcubos e íncubos e herdaram o magnetismo sobrenatural desses corruptores. São sedutores e manipuladores por natureza, ainda que possam escolher como empregar esse dom.",traits:{
          "bewitch":"Como uma ação bônus, escolha uma criatura a até 9 metros (30 pés) que possa ver ou ouvir você. Ela realiza um teste de resistência de Sabedoria, usando Carisma para determinar sua CD racial. Em uma falha, fica Enfeitiçada por você por 1 hora. Qualquer ação hostil sua contra o alvo encerra o efeito imediatamente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "charisma-fiend":"Você ganha proficiência em Persuasão e Enganação.",
          "taintless-body":"Você possui resistência a dano de veneno e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado."
        }},
        "grotesque":{description:"Maculados Grotescos descendem de demônios menores e manifestam mutações consideradas desagradáveis pelas linhagens mais orgulhosas. Sua fisiologia é resistente a contaminantes e capaz de liberar vapores tóxicos.",traits:{
          "fume-resistant":"Você tem vantagem em testes de resistência contra efeitos originados de fumaças, gases e contaminantes transportados pelo ar.",
          "poison-resistance":"Você possui resistência a dano de veneno.",
          "vile-cloud":"Como uma ação, você produz uma nuvem de vapores nocivos em um raio de 3 metros (10 pés) ao seu redor. Cada criatura nessa área deve realizar um teste de resistência de Constituição, usando Constituição para definir sua CD racial. Em uma falha, fica Envenenada por 1 minuto e sofre 1d8 de dano de veneno no início de cada turno enquanto permanecer envenenada desta forma. No fim de cada turno, ela pode repetir o teste, encerrando o efeito em um sucesso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "redeemer":{description:"Maculados Redentores descendem de demônios violentos e conquistadores. Seu sangue carrega raiva e fogo que irrompem quando conseguem golpes particularmente brutais.",traits:{
          "flames-of-retribution":"Quando obtiver um acerto crítico resultante de um 20 natural no d20, seu corpo se incendeia até o fim do seu próximo turno. Enquanto estiver em chamas, seus ataques com arma causam 1d6 de dano de fogo adicional e criaturas que acertarem você com ataques corpo a corpo a até 1,5 metro (5 pés) sofrem dano de fogo igual ao seu modificador de Constituição. O efeito pode acumular consigo mesmo até um número de vezes igual ao seu bônus de proficiência. Acertos críticos automáticos causados por condições ou outros efeitos não desencadeiam este traço.",
          "slayer-s-fury":"Quando realizar um ataque com uma arma que use Força, você pode rolar 1d4 e adicionar o resultado tanto à jogada de ataque quanto ao dano desse ataque. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "spellweaver":{description:"Maculados Tecelões de Magias herdaram capacidades arcanas particularmente fortes de seus ancestrais demoníacos e demonstram resistência e aptidão inatas contra magia.",traits:{
          "magic-resistance":"Você tem vantagem em testes de resistência contra efeitos mágicos.",
          "rapid-spell-note":"Escolha um truque da lista de Feiticeiro que envolva uma jogada de ataque ou obrigue um alvo a realizar um teste de resistência e cause dano em uma falha. Você aprende o truque e usa Carisma como habilidade de conjuração para ele. Quando realizar um ataque com uma arma Leve ou com Acuidade na qual seja proficiente, pode usar este traço como sua ação bônus para conjurar o truque, tendo como alvo a criatura que estiver atacando. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "winged":{description:"Maculados Alados possuem grandes asas emplumadas ou semelhantes às de morcegos e são uma das formas mais comuns da raça, frequentemente ligados às mesmas linhagens de súcubos e íncubos que originaram os Maculados do Êxtase.",traits:{
          "fiendish-wings":"Você possui asas que concedem deslocamento de voo igual ao seu deslocamento base.",
          "sundering-sweep":"Como uma ação bônus, você pode bater as asas e produzir uma rajada de vento e poeira. Cada criatura Média ou menor a até 1,5 metro (5 pés) de você sofre desvantagem na próxima jogada de ataque que fizer antes do início do próximo turno dela. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }}
      }
    },

    "trealtin":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Trealtin é um termo amplo para formas de vida vegetal que adquiriram consciência e corpo humanoide. Podem nascer da influência feérica, de magia de despertar, de espíritos que habitam madeira ou de outras formas de animação vegetal."},
        {title:"Entre vida familiar",text:"Muitos Trealtin preferem permanecer próximos das plantas que se parecem com sua própria forma. Eles possuem uma ressonância emocional com outras plantas que permite comunicação mais profunda que a maioria das magias, embora ainda procurem companhia de seres com consciência semelhante à sua."}
      ],
      meta:{alignment:"Geralmente neutros",languages:"Comum; Fala por Frequência funciona sem ar e debaixo d’água",speed:"9 m (30 pés)"},
      coreTraits:{
        "frequency-speech":"Você não produz fala com voz física comum, mas por manipulação de ressonância arcana que cria vibrações equivalentes a uma voz. Essa voz é única para você, não exige ar e pode ser ouvida enquanto estiver submerso. Você também pode fazer a voz parecer originar-se de qualquer ponto que possa ver a até 9 metros (30 pés). Em uma área de silêncio, ainda consegue produzir componentes verbais de magias fazendo a voz se originar de um ponto fora do alcance do efeito de silêncio.",
        "plantkind-s-qualities":"Você não precisa respirar, mas começa a sufocar se não for exposto a ar aberto por pelo menos 1 minuto a cada hora. Você também não precisa de comida se receber luz solar e água todos os dias; alimento rico em nutrientes pode substituir uma dessas necessidades quando luz ou água não estiver disponível.",
        "treespeaker":"Você está permanentemente sob a parte comunicativa de *falar com plantas*: pode falar com, compreender e ser compreendido por plantas ao redor, mas não pode comandá-las por este traço nem fazê-las realizar ações que plantas normalmente não realizariam."
      },
      legacyTraits:{
        "blindsight":"Você possui Visão às Cegas a uma distância em pés igual a 10 × seu bônus de proficiência.",
        "gradual-regeneration":"Sempre que rolar um Dado de Vida para recuperar pontos de vida, recupere 2 pontos de vida adicionais por dado rolado.",
        "knowledge-of-the-forest":"Você ganha proficiência em Natureza e em mais uma perícia à sua escolha.",
        "lifeless-stealth":"Você consegue permanecer completamente imóvel e misturar-se ao ambiente como se fosse um objeto. Você possui Especialização em Furtividade.",
        "natural-resistance":"Você possui resistência a dano de veneno e ácido e tem vantagem em testes de resistência feitos para resistir ou encerrar a condição Envenenado.",
        "rooted-firmly":"Você pode tratar qualquer arma que esteja empunhando ou objeto que esteja segurando como se possuísse a propriedade Firme, integrando-o parcialmente ao seu corpo."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Visão no Escuro Fúngica (Forma Fúngica); • Repreensão de Estilhaços (Caminhante de Madeira); • Passo do Espírito da Árvore (Dríade Selvagem); • Alcance Desenrolado (Emaranhado).",
        "frequency-speech":"Você recebe o traço racial Fala por Frequência do Trealtin. Se Trealtin for sua raça secundária, seu tipo de criatura também conta como Planta além de seus outros tipos."
      },
      subraces:{
        "fungalform":{description:"Trealtin de Forma Fúngica possuem corpos de cogumelos e outros fungos macios. Muitos enxergam a si mesmos como uma pequena coletividade e preferem usar termos como “nós” ao falar de sua própria consciência.",traits:{
          "fungal-darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro, aumente o alcance em 9 metros (30 pés) ou para 36 metros (120 pés), usando o maior valor.",
          "spore-puff":"Você armazena uma reserva de esporos e pode liberá-la um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Cada uso produz um dos seguintes efeitos: • Esporos Comunicativos — como ação bônus, você e criaturas à sua escolha a até 3 metros (10 pés) ficam telepaticamente conectados entre si por até 1 minuto; cada criatura pode bloquear outras participantes; • Nuvem Curativa — como ação bônus, você recebe pontos de vida temporários iguais a 1d8 × seu bônus de proficiência; • Esporos Pacificadores — como reação ao ser atacado por uma criatura a até 3 metros, ela realiza um teste de resistência de Constituição, usando Constituição para determinar sua CD racial; em uma falha, tem desvantagem no ataque desencadeador e se recusa a realizar novos ataques contra você até o fim do turno; • Esporos Venenosos — como ação, você libera uma nuvem num raio de 3 metros; cada criatura que respire na área realiza um teste de resistência de Constituição e, em uma falha, fica Envenenada até o fim do seu próximo turno."
        }},
        "shamble":{description:"Trealtin Emaranhados são massas de folhagem, vinhas, galhos e matéria vegetal entrelaçada em forma humanoide. Conseguem rearranjar, esticar e comprimir o corpo, embora sua massa sempre retorne a uma configuração geral reconhecível.",traits:{
          "enveloping-embrace":"Quando vencer um teste para Agarrar uma criatura do seu tamanho ou menor, você pode puxá-la até 1,5 metro (5 pés) em sua direção; também pode fazer isso como ação bônus se já estiver agarrando-a. Se o movimento a puxaria para dentro do seu espaço, ela realiza um teste de resistência de Força contra CD 8 + seu modificador de Força ou Constituição, à sua escolha + seu bônus de proficiência. Em uma falha, ela é envolvida pelo seu corpo, ficando Agarrada e Impedida, enquanto seus membros permanecem livres. Seu deslocamento diminui em 3 metros (10 pés), mas você pode se mover normalmente. Ao fim do turno, pode conceder ao alvo envolvido cobertura de dois terços e só pode alterar essa decisão no início do próximo turno. Você só pode envolver uma criatura por vez. Se for reduzido a 0 pontos de vida ou ficar Incapacitado, a criatura é libertada e escolhe um espaço a até 1,5 metro de você; o mesmo ocorre se ela escapar.",
          "morphing-frame":"Como uma ação bônus, você pode reorganizar sua massa e mudar seu tamanho para uma categoria menor ou uma categoria maior que seu tamanho normal. Você só pode crescer se houver espaço suficiente para ocupar a nova área.",
          "unwinding-range":"Seu corpo de vinhas e matéria orgânica pode se desenrolar e alcançar longe. O alcance de qualquer arma corpo a corpo ou ataque desarmado que você utilize pode ser tratado como 1,5 metro (5 pés) maior que o normal."
        }},
        "wild-dryad":{description:"Dríades Selvagens são sementes ou ecos de uma dríade que se fundiu completamente à própria árvore. Vivem uma fase mortal e humanoide para reunir experiências antes de um dia plantar a própria semente e completar a transformação em uma nova dríade.",traits:{
          "body-of-fallen-seeds":"No centro do seu corpo existe uma semente que contém a totalidade do seu espírito; o restante do corpo é uma construção mágica ao redor dela. Se for reduzido a 0 pontos de vida e falhar em todos os testes de resistência contra morte, você não morre permanentemente. A cada amanhecer, role 1d100: em um resultado igual ou inferior a duas vezes seu nível + 10, você recupera o corpo e revive com 1 ponto de vida. Se a semente estiver recebendo calor, água e cuidado emocional, role o d100 duas vezes e use o menor resultado. Se a semente for destruída ou seu corpo for completamente desintegrado, você morre normalmente.",
          "fey-protector":"Sua linhagem feérica concede os seguintes benefícios: • você não dorme e, em vez disso, entra em um estado meditativo no qual continua consciente do ambiente; • você não pode ser colocado magicamente para dormir; • tem vantagem em testes de resistência contra a condição Enfeitiçado; • ganha proficiência em Intuição.",
          "tree-spirit-s-stride":"Como uma ação bônus, você pode se teletransportar para um espaço adjacente a uma árvore que consiga ver a uma distância em pés igual a 30 × seu bônus de proficiência. A árvore deve ser pelo menos do seu tamanho. Sair da árvore consome 1,5 metro (5 pés) de deslocamento; se não puder se mover, não pode usar este teletransporte. Você pode fazer isso um número de vezes por Descanso Curto ou Longo igual ao seu bônus de proficiência."
        }},
        "woodwalker":{description:"Caminhantes de Madeira são árvores vivas que se levantaram em forma humanoide, semelhantes a pequenos entes. Seus corpos de raiz e casca são resistentes, porém altamente inflamáveis.",traits:{
          "splintering-rebuke":"Quando for atingido por um ataque com arma realizado a até 1,5 metro (5 pés), você pode usar sua reação para estilhaçar violentamente o próprio corpo. Cada criatura à sua escolha a até 1,5 metro deve realizar um teste de resistência de Destreza, usando Constituição para determinar sua CD racial. Em uma falha, sofre dano perfurante igual a 1d4 × seu bônus de proficiência; em um sucesso, sofre metade. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "wooden-carapace":"Enquanto não estiver usando armadura, você adiciona seu bônus de proficiência à Classe de Armadura, representando o endurecimento progressivo do corpo de madeira. Independentemente de estar recebendo esse bônus, você é vulnerável a dano de fogo."
        }}
      }
    },

    "vanquis":{
      textRevision:"full",
      lore:[
        {title:"Visão geral",text:"Vanquis não são uma linhagem biológica tradicional, mas mortos-vivos que recuperaram consciência e autonomia. Podem surgir de rituais de ressurreição malsucedidos, servos mortos-vivos que escaparam do controle do criador ou espíritos que permaneceram tempo demais em corpos inadequados."},
        {title:"Uma existência à margem",text:"Muitos Vanquis escondem a própria natureza porque clérigos, paladinos e comunidades inteiras os tratam como ameaças. Grupos secretos oferecem abrigo e orientação a esses indivíduos, que frequentemente enfrentam questões profundas sobre identidade, alma e propósito."}
      ],
      meta:{alignment:"Sem padrão; maldade e neutralidade são comuns por causa das circunstâncias de criação",languages:"Os idiomas que falava em vida, determinados pela raça da Persona Anterior",speed:"9 m (30 pés)"},
      coreTraits:{
        "deathless-traits":"Como uma criatura habitando um corpo morto, você possui as seguintes características: • magias de cura que normalmente não podem ter Mortos-vivos como alvo podem afetar você, mas restauram metade dos pontos de vida normais, arredondado para baixo, mínimo 1; • você não sofre Fadiga de Combate e não pode ultrapassar o terceiro nível de Exaustão; • não precisa respirar, comer ou beber; • tem vantagem em testes de resistência contra morte; • não precisa dormir e não pode ser colocado magicamente para dormir — você conclui um Descanso Longo após 4 horas imóvel e inativo, permanecendo consciente; • enquanto estiver com a condição Morrendo, você não fica Caído e seu deslocamento é reduzido apenas à metade em vez de 3 metros (10 pés).",
        "former-persona":"Se escolher Vanquis como raça principal, escolha outra raça para representar quem você era em vida ou sua forma viva original. Essa escolha determina sua aparência geral, tamanho e contexto de criação, mas não concede traços daquela raça a menos que outra regra diga o contrário. Características fantásticas da antiga raça aparecem desgastadas ou deterioradas. Seus idiomas também são os que essa raça falava em vida.",
        "necrotic-resilience":"Você possui resistência a dano necrótico."
      },
      legacyTraits:{
        "darkvision":"Você possui Visão no Escuro a 18 metros (60 pés). Dentro desse alcance, enxerga em penumbra como luz plena e na escuridão como penumbra; na escuridão, distingue cores apenas em tons de cinza.",
        "deathless-evermore":"Seu máximo de pontos de vida não pode ser reduzido e você é imune a dano necrótico.",
        "frightful-shock":"Quando obtiver um acerto crítico contra uma criatura a até 9 metros (30 pés), ela fica Amedrontada por você até o fim do seu próximo turno. Além disso, se surpreender uma criatura em combate e ela começar o primeiro turno a até 9 metros de você, ela fica Amedrontada até o início do turno seguinte dela.",
        "recalled-skillset":"Um número de vezes por Descanso Longo igual à metade do seu bônus de proficiência, arredondado para baixo, quando realizar um teste de perícia em que seja proficiente, você pode recuperar memórias de sua vida ou longa existência e adicionar um bônus ao teste igual ao seu bônus de proficiência, a menos que já o estivesse adicionando duas vezes por Especialização ou efeito equivalente. Durante até 1 minuto, esse mesmo bônus também se aplica a novos testes da mesma perícia enquanto você estiver repetindo a mesma ação ou conjunto de ações lembrado, com pouca alteração.",
        "undead-immunities":"Você tem vantagem em testes de resistência feitos para resistir à condição Envenenado ou Enfeitiçado e possui resistência a dano de veneno.",
        "unreadable":"Sua aparência e comportamento mortos-vivos tornam suas intenções difíceis de interpretar. Você ganha proficiência e Especialização em Enganação."
      },
      mixedBloodTraits:{
        "bloodline":"Escolha um dos seguintes traços e receba-o da subraça correspondente: • Corpo Remendado (Amálgama); • Frenesi Alimentar (Carniçal); • Possessão Parcial (Habitante); • Visão às Cegas (Esquelético); • Memórias de uma Vida Passada (Imorredouro); • Mordida Vampírica (Vampírico). Se Vanquis for sua raça secundária, seu tipo de criatura também se torna Morto-vivo além dos outros tipos. Nesse caso, Linhagem deve ocupar uma das suas escolhas de Traço de Legado, e você recebe automaticamente Traços Imortais além das demais escolhas permitidas."
      },
      subraces:{
        "amalgamation":{description:"Amálgamas são corpos costurados a partir de partes de vários indivíduos e reanimados por ciência ou magia obscura. Normalmente a consciência principal acompanha o cérebro usado na criação, embora algumas construções sofram conflito entre memórias e personalidades de diferentes componentes.",traits:{
          "confused-origin":"A incerteza sobre onde uma identidade termina e outra começa concede resistência a dano psíquico e vantagem em testes e testes de resistência contra qualquer efeito que obrigue você a agir contra a própria vontade.",
          "death-rage":"Enquanto estiver com a condição Morrendo, você pode realizar uma ação ou uma ação bônus em seu turno, mas não ambas. Você não pode realizar a ação Atacar nessa situação, porém pode usar sua ação para fazer um único ataque com vantagem.",
          "shambled-body":"Você recebe dois Traços de Legado adicionais. Cada um deve vir de uma raça diferente que não seja sua raça primária nem sua raça secundária, representando partes do corpo usadas em sua construção. Os dois traços precisam vir de raças diferentes entre si e não podem ser Traços de Sangue Misto."
        }},
        "ghoul":{description:"Carniçais são mortos-vivos erguidos por forças infernais, magia sombria ou rancores intensos. Eles preservam parte da própria mente, mas precisam lutar contra fome e impulsos violentos que acompanham sua nova existência.",traits:{
          "carrion-hunger":"Ao contrário da maioria dos Vanquis, você precisa se alimentar e necessita de duas vezes a quantidade normal de alimento para uma criatura do seu tamanho, a menos que consuma carne morta. Quando concluir um Descanso Longo sem ter comido carne morta nas últimas 24 horas, recebe 1 ponto de Fadiga de Combate, ignorando sua imunidade normal, que não pode ser removido até consumir esse alimento e concluir um Descanso Curto ou Longo. Você pode comer alimentos podres ou contaminados sem consequências negativas.",
          "feeding-frenzy":"Quando reduzir uma criatura a 0 pontos de vida e ela deixar um corpo com carne e sangue comestíveis, você pode usar sua ação bônus no mesmo turno para ficar Caído e devorar parte do cadáver. Você recebe pontos de vida temporários que duram 1 minuto conforme o tamanho da criatura: Minúscula — 1d4 × seu bônus de proficiência; Pequena — 1d6 × seu bônus de proficiência; Média — 1d8 × seu bônus de proficiência; Grande ou maior — 1d12 × seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu modificador de Constituição. Consumir uma criatura Grande ou maior gasta 2 usos; se não possuir usos suficientes, trate-a como criatura Média para determinar os pontos de vida temporários.",
          "shock-resistance":"Você tem vantagem em testes de resistência feitos para resistir à condição Paralisado."
        }},
        "inhabitant":{description:"Habitantes são espíritos presos em corpos que não lhes pertencem — almas forçadas a retornar, fantasmas que permaneceram tempo demais em um hospedeiro ou outras uniões profanas. Corpo e espírito permanecem em desarmonia, mas estão ligados de forma persistente.",traits:{
          "detect-life":"Como uma ação, você pode concentrar-se na região e detectar criaturas vivas a até 30 metros (100 pés). Isso não detecta Corruptores, Mortos-vivos ou Constructos. Você descobre a direção, a quantidade de criaturas nessa direção e as categorias de tamanho presentes, mas não as posições exatas.",
          "inexorcisable":"Sua alma não pode ser removida do corpo contra sua vontade. Se for removida por qualquer meio, retorna ao corpo após 24 horas, a menos que o corpo também tenha sido destruído.",
          "partial-possession":"Como uma ação, escolha uma criatura a até 9 metros (30 pés). Ela realiza um teste de resistência de Carisma, usando Carisma para definir sua CD racial. Em uma falha, você a força imediatamente a executar uma das seguintes ações: • realizar uma interação, como largar um objeto ou abrir uma porta; • dizer uma frase de menos de 10 palavras em sua própria voz — se falhou por menos de 5, você só pode fazê-la usar informações que você pessoalmente conhece; • realizar um ataque com arma contra uma criatura dentro do alcance; • usar a reação para mover-se até o próprio deslocamento conforme sua direção — se esse movimento causaria dano, ela repete o teste antes de entrar no perigo e para antes dele em caso de sucesso; • encerrar concentração que esteja mantendo. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência."
        }},
        "skeletal":{description:"Vanquis Esqueléticos foram reduzidos quase inteiramente aos ossos e continuam animados por energia necromântica. Muitos nasceram quando um criador perdeu o controle do servo ou morreu, deixando a criatura ativa tempo suficiente para desenvolver consciência própria.",traits:{
          "blindsight":"Você consegue perceber normalmente apesar da ausência de olhos e também possui Visão às Cegas a uma distância em pés igual a 10 × seu bônus de proficiência.",
          "bone-scuttle":"Você pode escolher colapsar, ficar Caído e espalhar os ossos como se fosse um esqueleto inanimado. Enquanto permanecer assim, tem resistência a todo dano, vantagem em Furtividade — realizando o teste como parte de ficar Caído — e aparenta ser um monte comum de ossos. Você não pode usar reações, movimento ou ações, exceto levantar-se no seu turno, encerrando o efeito. Quando for atingido por um ataque com arma, também pode usar sua reação para ativar este efeito, parecendo ter sido despedaçado pelo impacto.",
          "skeletal-immunities":"Você é imune a dano necrótico e dano de veneno e não pode ficar Envenenado."
        }},
        "undying":{description:"Imorredouros são Vanquis que retornaram inesperadamente à vida sem memória clara de quem eram. Vivem em um estado suspenso e não envelhecem, frequentemente questionando se são a mesma pessoa de antes ou uma nova consciência em um corpo antigo.",traits:{
          "horror-wrought":"Você não pode ficar Enfeitiçado nem Amedrontado.",
          "memories-of-a-past-life":"Quando realizar um teste de atributo, você pode evocar memórias de uma vida anterior, rolar 1d6 e adicionar o resultado. Pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "secret-skills":"Você ganha proficiência em uma perícia à sua escolha. Ao alcançar o 8º nível, ganha proficiência em outra perícia à sua escolha; no 15º nível, ganha uma terceira proficiência em perícia."
        }},
        "vampiric":{description:"Vanquis Vampíricos são filhos de vampiros com outros povos ou indivíduos que passaram apenas parcialmente por uma transformação vampírica. Preservam diversas capacidades predatórias, mas não carregam todas as fraquezas de vampiros completos, como a tradicional aversão à luz solar.",traits:{
          "blood-hunger":"Você precisa de alimento. Se não comer carne ou beber sangue a cada dia, é tratado como se não tivesse ingerido alimento algum naquele dia.",
          "bloodseeking-vision":"Você possui Visão no Escuro a 18 metros (60 pés). Se já possuir Visão no Escuro de outra fonte, aumente o alcance em 9 metros (30 pés) ou para 36 metros (120 pés), usando o maior valor.",
          "spider-climb":"Você possui deslocamento de escalada igual ao seu deslocamento base e pode usá-lo para caminhar por superfícies verticais e de cabeça para baixo sem usar as mãos.",
          "vampiric-bite":"No lugar de um ataque desarmado, você pode morder uma criatura. Você acerta automaticamente uma criatura Atordoada, Paralisada ou Enfeitiçada que esteja em posição de ser mordida; caso contrário, faça a mesma jogada de ataque que usaria para um ataque desarmado. Em um acerto, causa 1d6 + seu modificador de Constituição de dano perfurante e recupera pontos de vida iguais ao dano causado. Se o alvo não possuir sangue, você não recupera pontos de vida. Você pode usar este traço um número de vezes por Descanso Curto ou Longo igual à metade do seu bônus de proficiência, arredondado para baixo."
        }}
      }
    }
  };

  const byId=new Map((window.GRIMORIO_RACES||[]).map(r=>[r.id,r]));
  const targetIds=Object.keys(P);
  const defaultDescription=(arr)=>{if(!Array.isArray(arr))return;for(const t of arr)if(!t.description)t.description=t.summary||'';};
  const applyTraits=(arr,map)=>{
    if(!Array.isArray(arr)||!map)return;
    for(const [id,value] of Object.entries(map)){
      const t=arr.find(x=>x.id===id);if(!t)continue;
      if(typeof value==='string')t.description=value;
      else if(value&&typeof value==='object'){
        if(value.description)t.description=value.description;
        if(value.name)t.name=value.name;
      }
    }
  };

  // Mantém `summary` para identificação rápida, mas toda entrada das raças desta fase deve receber `description` integral.
  for(const id of targetIds){
    const r=byId.get(id);if(!r)continue;
    defaultDescription(r.coreTraits);defaultDescription(r.legacyTraits);defaultDescription(r.mixedBloodTraits);
    for(const s of r.subraces)defaultDescription(s.traits);
  }

  for(const [id,p] of Object.entries(P)){
    const r=byId.get(id);if(!r)continue;
    r.textRevision=p.textRevision||'full';
    if(p.lore)r.lore=p.lore;
    if(p.meta)r.meta={...r.meta,...p.meta};
    applyTraits(r.coreTraits,p.coreTraits);
    applyTraits(r.legacyTraits,p.legacyTraits);
    applyTraits(r.mixedBloodTraits,p.mixedBloodTraits);
    if(p.subraces){
      for(const [sid,sp] of Object.entries(p.subraces)){
        const s=r.subraces.find(x=>x.id===sid);if(!s)continue;
        if(sp.description)s.description=sp.description;
        applyTraits(s.traits,sp.traits);
      }
    }
  }

  // Nomenclaturas e pequenas correções de apresentação em PT-BR desta fase.
  const rename=(raceId,group,id,name,subraceId=null)=>{
    const r=byId.get(raceId);if(!r)return;
    const arr=subraceId?r.subraces.find(s=>s.id===subraceId)?.traits:r[group];
    const t=arr?.find(x=>x.id===id);if(t)t.name=name;
  };
  rename('kobold',null,'lineage-boon','Dádiva da Linhagem','greatkin-kobold');
  rename('kobold',null,'swarming-instinct','Instinto de Enxame','scramble-kobold');
  rename('kua-hono',null,'scent-tracker','Rastreador pelo Olfato','lizard');
  rename('merfolk',null,'namesake-scales','Escamas Homônimas','bronzescale');
  rename('minotaur',null,'bullheaded-endurance','Resistência Cabeça-Dura','div');
  rename('nephilim','legacyTraits','proficiency','Proficiência');
  rename('orc',null,'dodge-roll','Rolamento de Esquiva','blackheel-orc');
  rename('petratara','coreTraits','eyes-of-the-snake','Olhos da Serpente');
  rename('primordia','coreTraits','elemental-magic','Magia Elemental');
  rename('tarnished','coreTraits','lucid-form','Forma Lúcida');
  rename('trealtin','coreTraits','frequency-speech','Fala por Frequência');
  rename('trealtin','coreTraits','plantkind-s-qualities','Qualidades do Povo-Planta');
  rename('vanquis','coreTraits','deathless-traits','Traços Imortais');
  rename('vanquis','coreTraits','former-persona','Persona Anterior');

  if(window.GRIMORIO_RACE_RULES){
    window.GRIMORIO_RACE_RULES.textQuality='As Fases 1–4 concluíram a revisão textual integral das 34 raças e 196 subraças desta edição de Lyre. Todos os traços raciais, Traços de Legado, Traços de Sangue Misto e características de subraça exibidos no catálogo possuem agora descrição mecânica integral em PT-BR.';
  }
})();
