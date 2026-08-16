'use strict';
// Somnus Domina — Zagalhta's Exolunar Collection: Capítulo 5 — Character Options (raças p. 63–76; subraças p. 77–110).
// Integração v5.46.0: 5 raças-base + 15 subraças próprias + 67 subraças adicionais = 82 novas subraças.
(function(){
  const SOURCE="Somnus Domina — Zagalhta's Exolunar Collection";
  const SOURCE_ID="zagalhta-exolunar";
  const raceById=id=>(window.GRIMORIO_RACES||[]).find(r=>r.id===id);
  const append=(raceId,subs)=>{const r=raceById(raceId);if(!r)throw new Error('Raça-base ausente para Zagalhta: '+raceId);const ids=new Set((r.subraces||[]).map(s=>s.id));for(const s of subs){if(ids.has(s.id))throw new Error('Subraça duplicada em '+raceId+': '+s.id);r.subraces.push(s);ids.add(s.id);}};
  const newRaces=[
  {
    "id": "changeling",
    "name": "Metamorfo",
    "originalName": "Changeling",
    "source": "Somnus Domina — Zagalhta's Exolunar Collection",
    "sourceId": "zagalhta-exolunar",
    "sourcePage": 63,
    "textRevision": "full",
    "summary": "Feérico de forma mutável, sem aparência fixa, que constrói sua identidade assumindo rostos, vozes e traços de outros povos.",
    "abilityScore": "Carisma +2; além disso, Mudança de Atributo concede +1 temporário após cada Descanso Longo. Alternativamente, aplicam-se as regras gerais 5.19 quando autorizadas pelo Mestre.",
    "meta": {
      "creatureTypes": "Humanoide, Feérico, Metamorfo",
      "lifeExpectancy": "90–100 anos",
      "nationalAlignment": "Outro",
      "planarOrigin": "Reino Feérico",
      "planetouched": "Não",
      "regions": "Espaço Exolunar, Reino Feérico",
      "size": "Médio (a forma assumida pode ser Pequena, Média ou Grande)",
      "alignment": "Frequentemente caótico; sem tendência moral obrigatória",
      "languages": "Comum e um idioma à escolha",
      "speed": "9 m"
    },
    "lore": [
      {
        "title": "Sem forma certa",
        "text": "Metamorfos são seres presos a nenhuma forma específica. Em seu estado verdadeiro, parecem humanoides pálidos e pouco definidos, com pele lisa e poucas características que os diferenciem. Entre si, entretanto, reconhecem com facilidade diferenças sutis."
      },
      {
        "title": "Identidade construída",
        "text": "Eles não carecem de personalidade, mas nascem com um impulso para serem mais do que sua forma vazia sugere. Assumir rostos, vozes e personas é uma maneira de expressar e desenvolver a própria identidade. Ao contrário de predadores imitadores, normalmente procuram se integrar e sobreviver."
      },
      {
        "title": "Origens feéricas",
        "text": "Os primeiros metamorfos nasceram de espíritos travessos do Reino Feérico e chegaram ao Plano Material por rotas que passavam por outros planetas e naves exolunares. Mal-entendidos históricos fizeram com que fossem confundidos com ladrões de corpos, quando muitas das identidades que usavam haviam sido criadas por eles mesmos."
      }
    ],
    "coreTraits": [
      {
        "id": "ability-score-inc",
        "name": "Aumento no Valor de Habilidade",
        "originalName": "Ability Score Inc.",
        "summary": "Seu Carisma aumenta em 2.",
        "description": "Seu Carisma aumenta em 2.",
        "page": 64
      },
      {
        "id": "age",
        "name": "Idade",
        "originalName": "Age",
        "summary": "Metamorfos possuem expectativa de vida semelhante à humana: alcançam maturidade mental no início dos vinte anos e normalmente vivem pouco menos de um século. O corpo envelhece com o tempo, embora eles frequentemente ocultem isso por meio de suas mudanças.",
        "description": "Metamorfos possuem expectativa de vida semelhante à humana: alcançam maturidade mental no início dos vinte anos e normalmente vivem pouco menos de um século. O corpo envelhece com o tempo, embora eles frequentemente ocultem isso por meio de suas mudanças.",
        "page": 64
      },
      {
        "id": "alignment",
        "name": "Tendência",
        "originalName": "Alignment",
        "summary": "Sua natureza naturalmente dissimulada faz com que muitos sejam reservados e pouco presos a convenções; a maioria tende ao caos, mas poucos apresentam uma inclinação inerente ao mal.",
        "description": "Sua natureza naturalmente dissimulada faz com que muitos sejam reservados e pouco presos a convenções; a maioria tende ao caos, mas poucos apresentam uma inclinação inerente ao mal.",
        "page": 64
      },
      {
        "id": "attribute-change",
        "name": "Mudança de Atributo",
        "originalName": "Attribute Change",
        "summary": "Sempre que concluir um Descanso Longo, escolha um de seus valores de habilidade. Ele aumenta em 1 até a próxima vez que você aumentar um valor por este traço. Este aumento pode elevar um valor de habilidade acima de 20.",
        "description": "Sempre que concluir um Descanso Longo, escolha um de seus valores de habilidade. Ele aumenta em 1 até a próxima vez que você aumentar um valor por este traço. Este aumento pode elevar um valor de habilidade acima de 20.",
        "page": 64
      },
      {
        "id": "core-change",
        "name": "Mudança Essencial",
        "originalName": "Core Change",
        "summary": "Sempre que concluir um Descanso Longo, você pode realizar uma mudança fundamental: escolha um traço de outra raça que possa ser obtido pelo Traço de Sangue Misto Linhagem. Você recebe esse traço até escolher outro desta forma. Para copiar um traço, precisa ter encontrado em algum momento um indivíduo da combinação raça-subraça de onde ele provém.",
        "description": "Sempre que concluir um Descanso Longo, você pode realizar uma mudança fundamental: escolha um traço de outra raça que possa ser obtido pelo Traço de Sangue Misto Linhagem. Você recebe esse traço até escolher outro desta forma. Para copiar um traço, precisa ter encontrado em algum momento um indivíduo da combinação raça-subraça de onde ele provém.",
        "page": 64
      },
      {
        "id": "creature-type",
        "name": "Tipo de Criatura",
        "originalName": "Creature Type",
        "summary": "Além de Humanoide e Metamorfo, você também é considerado Feérico.",
        "description": "Além de Humanoide e Metamorfo, você também é considerado Feérico.",
        "page": 64
      },
      {
        "id": "languages",
        "name": "Idiomas",
        "originalName": "Languages",
        "summary": "Você lê, escreve e fala Comum e um idioma à sua escolha.",
        "description": "Você lê, escreve e fala Comum e um idioma à sua escolha.",
        "page": 64
      },
      {
        "id": "shifting-body",
        "name": "Corpo Mutável",
        "originalName": "Shifting Body",
        "summary": "Como uma ação, você altera sua aparência e voz livremente. Pode mudar seu tamanho para Pequeno, Médio ou Grande, ajustado por efeitos como aumentar/reduzir. A transformação pode parecer mudar sua raça ou espécie, mas não altera suas estatísticas e deve manter a mesma disposição de membros. Você retorna à forma verdadeira quando desejar como uma ação ou quando morrer.",
        "description": "Como uma ação, você altera sua aparência e voz livremente. Pode mudar seu tamanho para Pequeno, Médio ou Grande, ajustado por efeitos como aumentar/reduzir. A transformação pode parecer mudar sua raça ou espécie, mas não altera suas estatísticas e deve manter a mesma disposição de membros. Você retorna à forma verdadeira quando desejar como uma ação ou quando morrer.",
        "page": 64
      },
      {
        "id": "size",
        "name": "Tamanho",
        "originalName": "Size",
        "summary": "Seu tamanho verdadeiro é Médio.",
        "description": "Seu tamanho verdadeiro é Médio.",
        "page": 64
      },
      {
        "id": "speed",
        "name": "Deslocamento",
        "originalName": "Speed",
        "summary": "Seu deslocamento-base é 9 metros.",
        "description": "Seu deslocamento-base é 9 metros.",
        "page": 64
      },
      {
        "id": "talents-of-the-shifter",
        "name": "Talentos do Transmorfo",
        "originalName": "Talents of the Shifter",
        "summary": "Você é proficiente em duas perícias à sua escolha entre Enganação, Intuição, Intimidação, Atuação e Persuasão. Como alternativa, pode receber Especialização em uma delas.",
        "description": "Você é proficiente em duas perícias à sua escolha entre Enganação, Intuição, Intimidação, Atuação e Persuasão. Como alternativa, pode receber Especialização em uma delas.",
        "page": 64
      }
    ],
    "legacyChoices": 2,
    "legacyTraits": [
      {
        "id": "blindsight",
        "name": "Visão às Cegas",
        "originalName": "Blindsight",
        "summary": "Você possui Visão às Cegas com alcance igual a 3 metros multiplicados pelo seu bônus de proficiência.",
        "description": "Você possui Visão às Cegas com alcance igual a 3 metros multiplicados pelo seu bônus de proficiência.",
        "page": 64
      },
      {
        "id": "copy-tech",
        "name": "Copiar Técnica",
        "originalName": "Copy Tech",
        "summary": "Quando vir uma criatura usar uma perícia ou ferramenta na qual ela seja proficiente e você não, pode usar sua reação para adicionar metade do seu bônus de proficiência à mesma perícia ou ferramenta. O efeito termina quando você conclui um Descanso ou usa este traço novamente.",
        "description": "Quando vir uma criatura usar uma perícia ou ferramenta na qual ela seja proficiente e você não, pode usar sua reação para adicionar metade do seu bônus de proficiência à mesma perícia ou ferramenta. O efeito termina quando você conclui um Descanso ou usa este traço novamente.",
        "page": 64
      },
      {
        "id": "fey-mask",
        "name": "Máscara Feérica",
        "originalName": "Fey Mask",
        "summary": "Você possui vantagem em testes de resistência contra ficar Enfeitiçado ou Amedrontado e não pode ser colocado para dormir por magia.",
        "description": "Você possui vantagem em testes de resistência contra ficar Enfeitiçado ou Amedrontado e não pode ser colocado para dormir por magia.",
        "page": 64
      },
      {
        "id": "illusory-restoration",
        "name": "Restauração Ilusória",
        "originalName": "Illusory Restoration",
        "summary": "Como uma ação bônus, você pode restaurar superficialmente os danos de seu corpo por meio de suas habilidades de mudança. Recebe pontos de vida temporários iguais a 1d10 × seu bônus de proficiência; a soma desses pontos temporários com seus pontos de vida atuais não pode exceder seu máximo de pontos de vida. Esses pontos temporários desaparecem ao concluir um Descanso. Você pode usar o traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "description": "Como uma ação bônus, você pode restaurar superficialmente os danos de seu corpo por meio de suas habilidades de mudança. Recebe pontos de vida temporários iguais a 1d10 × seu bônus de proficiência; a soma desses pontos temporários com seus pontos de vida atuais não pode exceder seu máximo de pontos de vida. Esses pontos temporários desaparecem ao concluir um Descanso. Você pode usar o traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
        "page": 64
      },
      {
        "id": "lacking-type",
        "name": "Ausência de Tipo",
        "originalName": "Lacking Type",
        "summary": "Se um efeito, item ou característica com efeito prejudicial ou indesejado fosse escolher ou afetar você por seu tipo de criatura, tendência ou classe, você pode fazer com que esse efeito o trate como se não possuísse tipo de criatura, tendência nem classe.",
        "description": "Se um efeito, item ou característica com efeito prejudicial ou indesejado fosse escolher ou afetar você por seu tipo de criatura, tendência ou classe, você pode fazer com que esse efeito o trate como se não possuísse tipo de criatura, tendência nem classe.",
        "page": 64
      },
      {
        "id": "vacuous-drift",
        "name": "Deriva Vazia",
        "originalName": "Vacuous Drift",
        "summary": "Como uma ação bônus, você dobra a luz ao redor do corpo e fica Invisível até o início do seu próximo turno. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.",
        "description": "Como uma ação bônus, você dobra a luz ao redor do corpo e fica Invisível até o início do seu próximo turno. Pode fazer isso um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto sempre que conclui um Descanso Curto.",
        "page": 64
      }
    ],
    "mixedBloodTraits": [
      {
        "id": "shifting-body",
        "name": "Corpo Mutável",
        "originalName": "Shifting Body",
        "summary": "Você recebe o traço Corpo Mutável do Metamorfo.",
        "description": "Você recebe o traço Corpo Mutável do Metamorfo.",
        "page": 64
      }
    ],
    "subraces": [],
    "editorialNote": "A própria fonte declara explicitamente que Metamorfos não possuem subraças: uma linhagem que adquira traços divergentes permanentes deixa, por definição, de ser um Changeling."
  },
  {
    "id": "galvan",
    "name": "Galvan",
    "originalName": "Galvan",
    "source": "Somnus Domina — Zagalhta's Exolunar Collection",
    "sourceId": "zagalhta-exolunar",
    "sourcePage": 65,
    "textRevision": "full",
    "summary": "Ser alienígena ligado aos fragmentos das Lágrimas Cósmicas e naturalmente sintonizado com energia eidomântica, dotado de mente e corpo eternos.",
    "abilityScore": "Inteligência +2; atributo da subraça +1. Alternativamente, aplicam-se as regras gerais 5.19 quando autorizadas pelo Mestre.",
    "meta": {
      "creatureTypes": "Humanoide, Aberração, Galvan",
      "lifeExpectancy": "Imorredouro; não envelhece nem morre de velhice",
      "nationalAlignment": "Exolunar",
      "planarOrigin": "—",
      "planetouched": "Não",
      "regions": "Espaço Exolunar",
      "size": "Pequeno / Médio",
      "alignment": "Frequentemente neutro",
      "languages": "Comum; Vocalização Projetada",
      "speed": "9 m; aceleração 0-G 18 m"
    },
    "lore": [
      {
        "title": "Faíscas das Lágrimas Cósmicas",
        "text": "Galvans são seres extremamente alienígenas ligados aos restos das Lágrimas Cósmicas espalhadas pelo universo. São a única forma de vida conhecida que nasce naturalmente sintonizada com energia eidomântica, tratando-a quase como uma segunda natureza."
      },
      {
        "title": "Guardiões da Lágrima",
        "text": "Eles nascem em casulos interestelares que se formam próximos a fragmentos de thesite. O material cria nós na teia eidomântica, retendo emoções, conhecimento e energia que amadurecem durante cerca de dez anos até produzirem galvans adultos. Cada geração protege o fragmento que a originou até uma nova geração nascer para substituí-la."
      },
      {
        "title": "Os Que Estão Fora",
        "text": "Com a idade, galvans passam a ouvir sussurros provenientes de além do universo conhecido. Eles compreendem esses mensageiros, chamados Os Que Estão Fora, mas concordam universalmente em ocultar suas palavras e natureza."
      },
      {
        "title": "Aparência física",
        "text": "Seus corpos são lisos e estranhos, com fitas e gavinhas de carne que flutuam como tentáculos de água-viva, múltiplos olhos em disposições incomuns, pele prateada lustrosa e placas quitinosas azul-negras. Não possuem sexo biológico, embora o corpo possa refletir de forma fluida a identidade que possuem de si mesmos."
      }
    ],
    "coreTraits": [
      {
        "id": "ability-score-inc",
        "name": "Aumento no Valor de Habilidade",
        "originalName": "Ability Score Inc.",
        "summary": "Sua Inteligência aumenta em 2.",
        "description": "Sua Inteligência aumenta em 2.",
        "page": 66
      },
      {
        "id": "age",
        "name": "Idade",
        "originalName": "Age",
        "summary": "Galvans amadurecem dentro dos casulos e emergem com corpo adulto permanente e conhecimento comparável ao de um adulto. Seus corpos não envelhecem e não morrem de velhice.",
        "description": "Galvans amadurecem dentro dos casulos e emergem com corpo adulto permanente e conhecimento comparável ao de um adulto. Seus corpos não envelhecem e não morrem de velhice.",
        "page": 66
      },
      {
        "id": "alignment",
        "name": "Tendência",
        "originalName": "Alignment",
        "summary": "Galvans não possuem tendência fixa, mas sua perspectiva alienígena e relativamente dissociada do universo costuma resultar em tendência neutra.",
        "description": "Galvans não possuem tendência fixa, mas sua perspectiva alienígena e relativamente dissociada do universo costuma resultar em tendência neutra.",
        "page": 66
      },
      {
        "id": "creature-type",
        "name": "Tipo de Criatura",
        "originalName": "Creature Type",
        "summary": "Além de Humanoide e Galvan, você também é considerado uma Aberração.",
        "description": "Além de Humanoide e Galvan, você também é considerado uma Aberração.",
        "page": 66
      },
      {
        "id": "eidomantic-nature",
        "name": "Natureza Eidomântica",
        "originalName": "Eidomantic Nature",
        "summary": "A partir do 3º nível, você pode produzir os efeitos de *arma eidomântica* uma vez por Descanso, sem gastar espaço de magia nem componentes materiais. Quando produz o efeito desta forma, o bônus nas jogadas de ataque e dano da arma é igual à metade do seu bônus de proficiência em vez de +2. Você também pode conjurar *arma eidomântica* usando espaços de magia que possua. Ao conjurá-la, você não precisa realizar uma verificação de Queimadura de Eidomancia.",
        "description": "A partir do 3º nível, você pode produzir os efeitos de *arma eidomântica* uma vez por Descanso, sem gastar espaço de magia nem componentes materiais. Quando produz o efeito desta forma, o bônus nas jogadas de ataque e dano da arma é igual à metade do seu bônus de proficiência em vez de +2. Você também pode conjurar *arma eidomântica* usando espaços de magia que possua. Ao conjurá-la, você não precisa realizar uma verificação de Queimadura de Eidomancia.",
        "page": 66
      },
      {
        "id": "languages",
        "name": "Idiomas",
        "originalName": "Languages",
        "summary": "Você lê, escreve e fala Comum.",
        "description": "Você lê, escreve e fala Comum.",
        "page": 66
      },
      {
        "id": "projected-vocalization",
        "name": "Vocalização Projetada",
        "originalName": "Projected Vocalization",
        "summary": "Você pode se comunicar sem falar, projetando sua voz telepaticamente a partir de sua localização de modo que qualquer criatura ao alcance possa ouvi-la. O volume, alcance e projeção equivalem aos de sua voz normal e o som possui características reconhecíveis como suas. Essa telepatia não atravessa materiais com mais de aproximadamente 10 cm de espessura. A voz produzida desta forma pode realizar componentes verbais de magias.",
        "description": "Você pode se comunicar sem falar, projetando sua voz telepaticamente a partir de sua localização de modo que qualquer criatura ao alcance possa ouvi-la. O volume, alcance e projeção equivalem aos de sua voz normal e o som possui características reconhecíveis como suas. Essa telepatia não atravessa materiais com mais de aproximadamente 10 cm de espessura. A voz produzida desta forma pode realizar componentes verbais de magias.",
        "page": 66
      },
      {
        "id": "size",
        "name": "Tamanho",
        "originalName": "Size",
        "summary": "Você é Pequeno ou Médio, à sua escolha.",
        "description": "Você é Pequeno ou Médio, à sua escolha.",
        "page": 66
      },
      {
        "id": "speed",
        "name": "Deslocamento",
        "originalName": "Speed",
        "summary": "Seu deslocamento-base é 9 metros e sua velocidade de aceleração 0-G é igual ao dobro desse deslocamento.",
        "description": "Seu deslocamento-base é 9 metros e sua velocidade de aceleração 0-G é igual ao dobro desse deslocamento.",
        "page": 66
      },
      {
        "id": "unusual-nature",
        "name": "Natureza Incomum",
        "originalName": "Unusual Nature",
        "summary": "Você não precisa respirar para sobreviver, embora ainda filtre o ar de forma que efeitos transmitidos pelo ar possam afetá-lo.",
        "description": "Você não precisa respirar para sobreviver, embora ainda filtre o ar de forma que efeitos transmitidos pelo ar possam afetá-lo.",
        "page": 66
      }
    ],
    "legacyChoices": 2,
    "legacyTraits": [
      {
        "id": "advanced-darkvision",
        "name": "Visão no Escuro Avançada",
        "originalName": "Advanced Darkvision",
        "summary": "Você possui Visão no Escuro a 18 metros, mas enxerga tanto em escuridão quanto em luz fraca como se ambas fossem luz plena. Qualquer traço ou característica que estenda sua Visão no Escuro mantém esta propriedade.",
        "description": "Você possui Visão no Escuro a 18 metros, mas enxerga tanto em escuridão quanto em luz fraca como se ambas fossem luz plena. Qualquer traço ou característica que estenda sua Visão no Escuro mantém esta propriedade.",
        "page": 66
      },
      {
        "id": "blindsight",
        "name": "Visão às Cegas",
        "originalName": "Blindsight",
        "summary": "Você possui Visão às Cegas com alcance igual a 3 metros multiplicados pelo seu bônus de proficiência.",
        "description": "Você possui Visão às Cegas com alcance igual a 3 metros multiplicados pelo seu bônus de proficiência.",
        "page": 66
      },
      {
        "id": "energy-resistance",
        "name": "Resistência Energética",
        "originalName": "Energy Resistance",
        "summary": "Escolha radiante, fogo, elétrico ou frio. Você possui resistência ao tipo de dano escolhido.",
        "description": "Escolha radiante, fogo, elétrico ou frio. Você possui resistência ao tipo de dano escolhido.",
        "page": 66
      },
      {
        "id": "knowledge-of-life",
        "name": "Conhecimento da Vida",
        "originalName": "Knowledge of Life",
        "summary": "Você possui proficiência e Especialização em Natureza, além de proficiência em Intuição ou Medicina, à sua escolha.",
        "description": "Você possui proficiência e Especialização em Natureza, além de proficiência em Intuição ou Medicina, à sua escolha.",
        "page": 66
      },
      {
        "id": "supernatural-lift",
        "name": "Elevação Sobrenatural",
        "originalName": "Supernatural Lift",
        "summary": "Você consegue desafiar brevemente a gravidade e possui deslocamento de voo laborioso igual ao seu deslocamento-base.",
        "description": "Você consegue desafiar brevemente a gravidade e possui deslocamento de voo laborioso igual ao seu deslocamento-base.",
        "page": 66
      },
      {
        "id": "thought-construct",
        "name": "Constructo do Pensamento",
        "originalName": "Thought Construct",
        "summary": "No lugar de qualquer ataque com arma, você pode produzir um constructo de energia na forma de garras, rajada, arma ou equivalente e realizar o ataque com ele. Ele conta como ataque de arma corpo a corpo, causa 1d8 de dano radiante + o modificador usado nas jogadas de ataque e dano, que pode ser Constituição, Inteligência ou Carisma. A arma pode ser Leve, Pesada ou de Duas Mãos a cada uso, mas apenas uma dessas propriedades por vez. Ela pode ser tratada como uma arma que você carrega para efeitos como arma de pacto ou encantamentos. O dado aumenta para 1d10 no 8º nível e 1d12 no 14º nível.",
        "description": "No lugar de qualquer ataque com arma, você pode produzir um constructo de energia na forma de garras, rajada, arma ou equivalente e realizar o ataque com ele. Ele conta como ataque de arma corpo a corpo, causa 1d8 de dano radiante + o modificador usado nas jogadas de ataque e dano, que pode ser Constituição, Inteligência ou Carisma. A arma pode ser Leve, Pesada ou de Duas Mãos a cada uso, mas apenas uma dessas propriedades por vez. Ela pode ser tratada como uma arma que você carrega para efeitos como arma de pacto ou encantamentos. O dado aumenta para 1d10 no 8º nível e 1d12 no 14º nível.",
        "page": 66
      }
    ],
    "mixedBloodTraits": [
      {
        "id": "bloodline",
        "name": "Linhagem",
        "originalName": "Bloodline",
        "summary": "Escolha Ressonância da Lágrima (Eidolark), Força de Cratera (Oblira), Telepatia Focada (Mente da Trama) ou Resistência de Carga (Raijil). Você recebe o traço correspondente.",
        "description": "Escolha Ressonância da Lágrima (Eidolark), Força de Cratera (Oblira), Telepatia Focada (Mente da Trama) ou Resistência de Carga (Raijil). Você recebe o traço correspondente.",
        "page": 66
      },
      {
        "id": "eidolic-armament",
        "name": "Armamento Eidólico",
        "originalName": "Eidolic Armament",
        "summary": "Você recebe o traço Natureza Eidomântica do Galvan.",
        "description": "Você recebe o traço Natureza Eidomântica do Galvan.",
        "page": 66
      },
      {
        "id": "unusual-nature",
        "name": "Natureza Incomum",
        "originalName": "Unusual Nature",
        "summary": "Você recebe o traço Natureza Incomum do Galvan.",
        "description": "Você recebe o traço Natureza Incomum do Galvan.",
        "page": 66
      }
    ],
    "subraces": [
      {
        "id": "eidolark",
        "name": "Eidolark",
        "originalName": "Eidolark",
        "page": 67,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Carisma +1",
        "description": "Os eidolark são galvans sintonizados às propriedades arcanas da eidomancia, capazes de entrelaçá-la naturalmente às magias e controlar seu fluxo.",
        "bloodlineTrait": "Ressonância da Lágrima",
        "traits": [
          {
            "id": "teardrops-resonance",
            "name": "Ressonância da Lágrima",
            "originalName": "Teardrop’s Resonance",
            "summary": "O dano que você causa é considerado tanto eidólico quanto mágico, e você tem vantagem em quaisquer testes de Queimadura de Eidomancia que realizar.",
            "description": "O dano que você causa é considerado tanto eidólico quanto mágico, e você tem vantagem em quaisquer testes de Queimadura de Eidomancia que realizar.",
            "page": 67
          },
          {
            "id": "innate-eidomancy",
            "name": "Eidomancia Inata",
            "originalName": "Innate Eidomancy",
            "summary": "Escolha uma magia de Eidomancia de 1º nível e uma de 2º nível. Você aprende essas magias e pode conjurá-las usando espaços de magia, caso os possua; caso contrário, pode conjurá-las gastando um número de usos deste traço igual ao nível em que pretende conjurá-las, sem precisar de espaço de magia nem componentes. Ao conjurá-las desta forma, sua habilidade de conjuração é Inteligência, Sabedoria ou Carisma, à sua escolha. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Além disso, quando ganha um nível em uma classe que lhe concede acesso a magias de 3º nível ou superior, você aprende uma magia adicional de Eidomancia daquele nível e pode conjurá-la com este traço da forma descrita acima. Você só pode ter uma magia de Eidomancia aprendida por este traço para cada nível de magia.",
            "description": "Escolha uma magia de Eidomancia de 1º nível e uma de 2º nível. Você aprende essas magias e pode conjurá-las usando espaços de magia, caso os possua; caso contrário, pode conjurá-las gastando um número de usos deste traço igual ao nível em que pretende conjurá-las, sem precisar de espaço de magia nem componentes. Ao conjurá-las desta forma, sua habilidade de conjuração é Inteligência, Sabedoria ou Carisma, à sua escolha. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Além disso, quando ganha um nível em uma classe que lhe concede acesso a magias de 3º nível ou superior, você aprende uma magia adicional de Eidomancia daquele nível e pode conjurá-la com este traço da forma descrita acima. Você só pode ter uma magia de Eidomancia aprendida por este traço para cada nível de magia.",
            "page": 67
          }
        ],
        "originalBloodlineTrait": "Teardrop’s Resonance"
      },
      {
        "id": "oblira",
        "name": "Oblira",
        "originalName": "Oblira",
        "page": 67,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Força +1",
        "description": "Os Oblira nascem com corpos naturalmente poderosos, muito aptos a se restaurar depois de sofrer dano, e possuem uma densidade muscular capaz de produzir golpes devastadores. Com frequência protegem os grupos em que nasceram e servem como guardiões entre os seus.",
        "bloodlineTrait": "Força de Cratera",
        "traits": [
          {
            "id": "cratering-might",
            "name": "Força de Cratera",
            "originalName": "Cratering Might",
            "summary": "Quando obtiver um acerto crítico com um ataque de arma, você pode adicionar ao resultado da jogada de dano um valor igual ao dobro do seu bônus de proficiência.",
            "description": "Quando obtiver um acerto crítico com um ataque de arma, você pode adicionar ao resultado da jogada de dano um valor igual ao dobro do seu bônus de proficiência.",
            "page": 67
          },
          {
            "id": "legendary-survival",
            "name": "Sobrevivência Lendária",
            "originalName": "Legendary Survival",
            "summary": "Uma vez por Descanso, quando for reduzido a 0 pontos de vida ou morto instantaneamente, você é reduzido a 1 ponto de vida em vez disso. Quando isso acontece, você se torna imune a dano contundente, perfurante e cortante, bem como a quaisquer tipos de dano aos quais possua resistência, até o fim do seu próximo turno.",
            "description": "Uma vez por Descanso, quando for reduzido a 0 pontos de vida ou morto instantaneamente, você é reduzido a 1 ponto de vida em vez disso. Quando isso acontece, você se torna imune a dano contundente, perfurante e cortante, bem como a quaisquer tipos de dano aos quais possua resistência, até o fim do seu próximo turno.",
            "page": 67
          }
        ],
        "originalBloodlineTrait": "Createring Might"
      },
      {
        "id": "raijil",
        "name": "Raijil",
        "originalName": "Raijil",
        "page": 67,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Destreza +1",
        "description": "Esses galvans possuem corpos capazes de armazenar e processar energia com mais eficiência do que os demais, isolando-os contra certas formas de dano e permitindo armazenar e liberar energias às quais são especialmente resistentes.",
        "bloodlineTrait": "Resistência de Carga",
        "traits": [
          {
            "id": "charge-resist",
            "name": "Resistência de Carga",
            "originalName": "Charge Resist",
            "summary": "Quando sofrer dano de um tipo ao qual seja resistente ou imune, você recebe uma carga que desaparece depois de 1 minuto. Você só pode manter uma dessas cargas por vez. Quando fizer uma jogada de dano, pode gastar essa carga para adicionar um dado extra de dano igual a um dos dados já causados pelo ataque e somar o resultado à jogada de dano.",
            "description": "Quando sofrer dano de um tipo ao qual seja resistente ou imune, você recebe uma carga que desaparece depois de 1 minuto. Você só pode manter uma dessas cargas por vez. Quando fizer uma jogada de dano, pode gastar essa carga para adicionar um dado extra de dano igual a um dos dados já causados pelo ataque e somar o resultado à jogada de dano.",
            "page": 67
          },
          {
            "id": "energy-salvo",
            "name": "Salva de Energia",
            "originalName": "Energy Salvo",
            "summary": "Você adquire resistência a um dos seguintes tipos de dano, à sua escolha quando recebe este traço: fogo, frio, elétrico ou radiante.",
            "description": "Você adquire resistência a um dos seguintes tipos de dano, à sua escolha quando recebe este traço: fogo, frio, elétrico ou radiante.",
            "page": 67
          },
          {
            "id": "light-shot-warp",
            "name": "Dobra de Disparo Luminoso",
            "originalName": "Light Shot Warp",
            "summary": "Como uma ação bônus, você pode se dissolver em energia e desaparecer, teleportando-se para um espaço desocupado que possa ver a até 9 metros. Ao reaparecer, você fica carregado de energia, e o próximo ataque de arma com que acertar antes do fim deste turno causa dano elétrico adicional igual ao seu nível. Você pode usar esta característica um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "description": "Como uma ação bônus, você pode se dissolver em energia e desaparecer, teleportando-se para um espaço desocupado que possa ver a até 9 metros. Ao reaparecer, você fica carregado de energia, e o próximo ataque de arma com que acertar antes do fim deste turno causa dano elétrico adicional igual ao seu nível. Você pode usar esta característica um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "page": 67
          }
        ],
        "originalBloodlineTrait": "Charge Resist"
      },
      {
        "id": "wayminded",
        "name": "Mente da Trama",
        "originalName": "Wayminded",
        "page": 67,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Sabedoria +1",
        "description": "A sintonia com o poder das Lágrimas Cósmicas concede uma compreensão inata da teia eidomântica e das mentes das criaturas ligadas a ela. Esses galvans podem se comunicar telepaticamente, perceber estados emocionais e compartilhar informações simples para ajudar os outros.",
        "bloodlineTrait": "Telepatia Focada",
        "traits": [
          {
            "id": "focused-telepathy",
            "name": "Telepatia Focada",
            "originalName": "Focused Telepathy",
            "summary": "Você pode falar telepaticamente, em uma via, com qualquer número de criaturas à sua escolha que estejam a até 9 metros. Essas criaturas ouvem sua voz em suas mentes e reconhecem sua qualidade e a direção de onde a comunicação se origina. Elas não podem responder com pensamentos completos por esse meio, mas você consegue perceber a reação emocional pretendida ou o estado emocional delas, desde que não tentem ocultá-lo.",
            "description": "Você pode falar telepaticamente, em uma via, com qualquer número de criaturas à sua escolha que estejam a até 9 metros. Essas criaturas ouvem sua voz em suas mentes e reconhecem sua qualidade e a direção de onde a comunicação se origina. Elas não podem responder com pensamentos completos por esse meio, mas você consegue perceber a reação emocional pretendida ou o estado emocional delas, desde que não tentem ocultá-lo.",
            "page": 67
          },
          {
            "id": "mindful",
            "name": "Atento",
            "originalName": "Mindful",
            "summary": "Você é proficiente na perícia Intuição.",
            "description": "Você é proficiente na perícia Intuição.",
            "page": 67
          },
          {
            "id": "signal-link",
            "name": "Vínculo de Sinal",
            "originalName": "Signal Link",
            "summary": "Quando uma criatura a até 18 metros fizer um teste de perícia ou teste de resistência usando uma perícia ou resistência em que você seja proficiente, você pode usar sua reação para se ligar mentalmente a ela e auxiliá-la. A criatura recebe um impulso mental para confirmar se deseja receber ajuda e, se aceitar, pode adicionar seu bônus de proficiência ao resultado da jogada. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência. Este traço não pode beneficiar um teste ou resistência que exija 1 minuto ou mais de atividade para ser concluído.",
            "description": "Quando uma criatura a até 18 metros fizer um teste de perícia ou teste de resistência usando uma perícia ou resistência em que você seja proficiente, você pode usar sua reação para se ligar mentalmente a ela e auxiliá-la. A criatura recebe um impulso mental para confirmar se deseja receber ajuda e, se aceitar, pode adicionar seu bônus de proficiência ao resultado da jogada. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência. Este traço não pode beneficiar um teste ou resistência que exija 1 minuto ou mais de atividade para ser concluído.",
            "page": 67
          }
        ],
        "originalBloodlineTrait": "Focused Telepathy"
      }
    ]
  },
  {
    "id": "protolife",
    "name": "Protovida",
    "originalName": "Protolife",
    "source": "Somnus Domina — Zagalhta's Exolunar Collection",
    "sourceId": "zagalhta-exolunar",
    "sourcePage": 68,
    "textRevision": "full",
    "summary": "Forma de vida senciente composta por células homogêneas semelhantes a lodo, capaz de remodelar o corpo, dividir biomassa e assumir estruturas diferentes.",
    "abilityScore": "Sabedoria +2; atributo da subraça +1. Alternativamente, aplicam-se as regras gerais 5.19 quando autorizadas pelo Mestre.",
    "meta": {
      "creatureTypes": "Humanoide, Lodo, Protovida",
      "lifeExpectancy": "Imorredouro; não envelhece fisicamente",
      "nationalAlignment": "Outro",
      "planarOrigin": "—",
      "planetouched": "Não",
      "regions": "Indefinidas; pode surgir em muitos mundos",
      "size": "Pequeno / Médio / Grande",
      "alignment": "Comumente neutro",
      "languages": "Comum e dois idiomas adicionais",
      "speed": "9 m de caminhada, natação e aceleração 0-G"
    },
    "lore": [
      {
        "title": "Vida protocelular",
        "text": "Protovidas são formas de vida simples em composição, mas complexas em pensamento: cada célula carrega parte de sua mente e alma. Seus corpos semelhantes a lodo podem dobrar, alongar, remodelar e assumir formas úteis, diferentemente de lodos guiados apenas por instinto."
      },
      {
        "title": "Eu ideal",
        "text": "Eles podem assumir inúmeras aparências, mas frequentemente reproduzem a estrutura geral de humanoides, com cabeça, dois braços e duas pernas. Depois de permanecer tempo suficiente em uma forma, ela se torna um padrão confortável e funciona como seu corpo adulto habitual."
      },
      {
        "title": "Protocultura",
        "text": "Protovidas não possuem uma cultura única. Podem nascer da fusão e troca de biomassa entre outros protovidas, que eventualmente brotam um novo conjunto celular com identidade própria. Também podem incorporar células compatíveis de outra criatura, criando descendentes híbridos que muitas vezes perdem as qualidades de lodo durante o primeiro ano de vida."
      }
    ],
    "coreTraits": [
      {
        "id": "ability-score-inc",
        "name": "Aumento no Valor de Habilidade",
        "originalName": "Ability Score Inc.",
        "summary": "Sua Sabedoria aumenta em 2.",
        "description": "Sua Sabedoria aumenta em 2.",
        "page": 68
      },
      {
        "id": "age",
        "name": "Idade",
        "originalName": "Age",
        "summary": "Protovidas não envelhecem fisicamente e são mental e fisicamente maduros assim que adquirem individualidade. Podem acumular sabedoria e conhecimento, mas não sofrem envelhecimento como outras criaturas.",
        "description": "Protovidas não envelhecem fisicamente e são mental e fisicamente maduros assim que adquirem individualidade. Podem acumular sabedoria e conhecimento, mas não sofrem envelhecimento como outras criaturas.",
        "page": 68
      },
      {
        "id": "alignment",
        "name": "Tendência",
        "originalName": "Alignment",
        "summary": "Protovidas não possuem tendência fixa, mas são comumente neutros.",
        "description": "Protovidas não possuem tendência fixa, mas são comumente neutros.",
        "page": 68
      },
      {
        "id": "amoeboid-traits",
        "name": "Traços Ameboides",
        "originalName": "Amoeboid Traits",
        "summary": "Você não precisa respirar; possui resistência a dano de veneno; ao longo de 1 minuto pode reconfigurar seu tamanho entre Pequeno, Médio e Grande; e mantém uma forma funcionalmente humanoide com dois braços, duas pernas e cabeça. Membros perdidos podem ser reproduzidos como uma ação. Você também pode formar pequenas gavinhas de lodo para interagir e manipular objetos a até 3 metros.",
        "description": "Você não precisa respirar; possui resistência a dano de veneno; ao longo de 1 minuto pode reconfigurar seu tamanho entre Pequeno, Médio e Grande; e mantém uma forma funcionalmente humanoide com dois braços, duas pernas e cabeça. Membros perdidos podem ser reproduzidos como uma ação. Você também pode formar pequenas gavinhas de lodo para interagir e manipular objetos a até 3 metros.",
        "page": 68
      },
      {
        "id": "amorphous",
        "name": "Amorfo",
        "originalName": "Amorphous",
        "summary": "Você consegue atravessar um espaço de aproximadamente 2,5 cm de largura sem apertar-se, desde que não carregue posses ou armadura grandes demais para passar. Pode comprimir seu corpo em um espaço de cerca de 0,014 m³ (meio pé cúbico), dobrado para cada categoria de tamanho acima de Médio. Você pode vestir ou retirar armadura como uma ação e possui vantagem em testes feitos para resistir ou escapar de Agarrado.",
        "description": "Você consegue atravessar um espaço de aproximadamente 2,5 cm de largura sem apertar-se, desde que não carregue posses ou armadura grandes demais para passar. Pode comprimir seu corpo em um espaço de cerca de 0,014 m³ (meio pé cúbico), dobrado para cada categoria de tamanho acima de Médio. Você pode vestir ou retirar armadura como uma ação e possui vantagem em testes feitos para resistir ou escapar de Agarrado.",
        "page": 69
      },
      {
        "id": "creature-type",
        "name": "Tipo de Criatura",
        "originalName": "Creature Type",
        "summary": "Além de Humanoide e Protovida, você também é considerado um Lodo.",
        "description": "Além de Humanoide e Protovida, você também é considerado um Lodo.",
        "page": 69
      },
      {
        "id": "languages",
        "name": "Idiomas",
        "originalName": "Languages",
        "summary": "Você lê, escreve e fala Comum e dois idiomas adicionais à sua escolha.",
        "description": "Você lê, escreve e fala Comum e dois idiomas adicionais à sua escolha.",
        "page": 69
      },
      {
        "id": "size",
        "name": "Tamanho",
        "originalName": "Size",
        "summary": "Seu tamanho-base pode ser Pequeno, Médio ou Grande conforme Traços Ameboides.",
        "description": "Seu tamanho-base pode ser Pequeno, Médio ou Grande conforme Traços Ameboides.",
        "page": 69
      },
      {
        "id": "speed",
        "name": "Deslocamento",
        "originalName": "Speed",
        "summary": "Seu deslocamento-base de caminhada, natação e sua velocidade de aceleração 0-G são 9 metros.",
        "description": "Seu deslocamento-base de caminhada, natação e sua velocidade de aceleração 0-G são 9 metros.",
        "page": 69
      }
    ],
    "legacyChoices": 2,
    "legacyTraits": [
      {
        "id": "darkvision",
        "name": "Visão no Escuro",
        "originalName": "Darkvision",
        "summary": "Você possui Visão no Escuro a 18 metros.",
        "description": "Você possui Visão no Escuro a 18 metros.",
        "page": 69
      },
      {
        "id": "engulf",
        "name": "Engolfar",
        "originalName": "Engulf",
        "summary": "Enquanto estiver agarrando uma criatura menor do que você, pode absorvê-la dentro do corpo. Os membros dela permanecem livres, mas ela não consegue respirar, sofre desvantagem em testes de Percepção e sofre dano de ácido igual ao seu bônus de proficiência no início de cada turno dela enquanto permanecer engolfada.",
        "description": "Enquanto estiver agarrando uma criatura menor do que você, pode absorvê-la dentro do corpo. Os membros dela permanecem livres, mas ela não consegue respirar, sofre desvantagem em testes de Percepção e sofre dano de ácido igual ao seu bônus de proficiência no início de cada turno dela enquanto permanecer engolfada.",
        "page": 69
      },
      {
        "id": "exoshell",
        "name": "Exoesqueleto",
        "originalName": "Exoshell",
        "summary": "Você pode produzir os efeitos de *disfarçar-se* à vontade, sem gastar espaço de magia nem componentes, endurecendo a superfície do corpo para simular roupas, pele, escamas e texturas. Quando uma habilidade de conjuração for relevante, use Constituição.",
        "description": "Você pode produzir os efeitos de *disfarçar-se* à vontade, sem gastar espaço de magia nem componentes, endurecendo a superfície do corpo para simular roupas, pele, escamas e texturas. Quando uma habilidade de conjuração for relevante, use Constituição.",
        "page": 69
      },
      {
        "id": "poisonproof",
        "name": "À Prova de Veneno",
        "originalName": "Poisonproof",
        "summary": "Você é imune a dano de veneno e à condição Envenenado.",
        "description": "Você é imune a dano de veneno e à condição Envenenado.",
        "page": 69
      },
      {
        "id": "splitting-pseudopod",
        "name": "Pseudópode Dividido",
        "originalName": "Splitting Pseudopod",
        "summary": "Como uma ação, você pode separar ou reabsorver uma pequena porção do corpo, criando um pseudópode independente de aproximadamente 15 a 30 cm de largura. Ele pode ser colocado a até 3 metros, possui deslocamento de 3 metros e escalada igual, pode carregar, abrir ou manipular portas destrancadas e objetos Minúsculos. Você vê e ouve tudo a até 4,5 metros dele; ele usa seu modificador de Furtividade. No seu turno, gaste seu próprio deslocamento para movê-lo, e ele possui uma interação própria. Você pode manter um número de pseudópodes igual ao bônus de proficiência; criar mais elimina o mais antigo. Eles morrem ao sofrer qualquer dano ou quando você conclui um Descanso.",
        "description": "Como uma ação, você pode separar ou reabsorver uma pequena porção do corpo, criando um pseudópode independente de aproximadamente 15 a 30 cm de largura. Ele pode ser colocado a até 3 metros, possui deslocamento de 3 metros e escalada igual, pode carregar, abrir ou manipular portas destrancadas e objetos Minúsculos. Você vê e ouve tudo a até 4,5 metros dele; ele usa seu modificador de Furtividade. No seu turno, gaste seu próprio deslocamento para movê-lo, e ele possui uma interação própria. Você pode manter um número de pseudópodes igual ao bônus de proficiência; criar mais elimina o mais antigo. Eles morrem ao sofrer qualquer dano ou quando você conclui um Descanso.",
        "page": 69
      },
      {
        "id": "weapon-creation",
        "name": "Criação de Armas",
        "originalName": "Weapon Creation",
        "summary": "Escolha três armas corpo a corpo. Você é proficiente nelas e pode reorganizar seu corpo, como uma interação, para produzir réplicas de lodo ligadas ao corpo e que funcionam como essas armas. Pode usar Força ou Destreza com elas independentemente de suas propriedades, mas não pode arremessá-las. Essas armas são mágicas e efeitos aplicados a uma delas permanecem em todas as formas compatíveis que você produzir.",
        "description": "Escolha três armas corpo a corpo. Você é proficiente nelas e pode reorganizar seu corpo, como uma interação, para produzir réplicas de lodo ligadas ao corpo e que funcionam como essas armas. Pode usar Força ou Destreza com elas independentemente de suas propriedades, mas não pode arremessá-las. Essas armas são mágicas e efeitos aplicados a uma delas permanecem em todas as formas compatíveis que você produzir.",
        "page": 69
      }
    ],
    "mixedBloodTraits": [
      {
        "id": "ooze-nature",
        "name": "Natureza de Lodo",
        "originalName": "Ooze Nature",
        "summary": "Se Protovida for sua raça secundária, seu tipo de criatura também conta como Lodo, além dos demais tipos que possuir.",
        "description": "Se Protovida for sua raça secundária, seu tipo de criatura também conta como Lodo, além dos demais tipos que possuir.",
        "page": 69
      },
      {
        "id": "amoeboid-traits",
        "name": "Traços Ameboides",
        "originalName": "Amoeboid Traits",
        "summary": "Você recebe o traço Traços Ameboides do Protovida.",
        "description": "Você recebe o traço Traços Ameboides do Protovida.",
        "page": 69
      },
      {
        "id": "amorphous",
        "name": "Amorfo",
        "originalName": "Amorphous",
        "summary": "Você recebe o traço Amorfo do Protovida.",
        "description": "Você recebe o traço Amorfo do Protovida.",
        "page": 69
      },
      {
        "id": "bloodline",
        "name": "Linhagem",
        "originalName": "Bloodline",
        "summary": "Escolha Resistente a Dano (Sustanita Químico), Expelir Contaminação (Tetramolde) ou Massa Faz a Força (Multiforme). Você recebe o traço correspondente.",
        "description": "Escolha Resistente a Dano (Sustanita Químico), Expelir Contaminação (Tetramolde) ou Massa Faz a Força (Multiforme). Você recebe o traço correspondente.",
        "page": 69
      }
    ],
    "subraces": [
      {
        "id": "chemical-sustanite",
        "name": "Sustanita Químico",
        "originalName": "Chemical Sustanite",
        "page": 70,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Força +1",
        "description": "O corpo de um protovida pode ser imprevisível e explosivamente reativo. O sustanita absorve tipos de energia e os expele de forma inofensiva, mantendo uma impressão da fonte de dano para conservar sua resistência. É difícil matá-lo e perigoso atingi-lo com energias voláteis.",
        "bloodlineTrait": "Resistente a Dano",
        "traits": [
          {
            "id": "damage-resistant",
            "name": "Resistente a Dano",
            "originalName": "Damage Resistant",
            "summary": "Quando sofrer dano contundente, perfurante ou cortante, o objeto que o atingiu atravessa seu corpo da maneira menos danosa possível antes de você retomar sua forma. Reduza cada um desses tipos de dano sofridos em um valor igual ao seu bônus de proficiência.",
            "description": "Quando sofrer dano contundente, perfurante ou cortante, o objeto que o atingiu atravessa seu corpo da maneira menos danosa possível antes de você retomar sua forma. Reduza cada um desses tipos de dano sofridos em um valor igual ao seu bônus de proficiência.",
            "page": 70
          },
          {
            "id": "lightning-rod-regurgitate",
            "name": "Regurgitação de Para-Raios",
            "originalName": "Lightning Rod Regurgitate",
            "summary": "Você pode produzir os efeitos da magia *absorver energia*, sem gastar espaço de magia nem componentes, um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando produz esses efeitos desta forma, você adquire resistência ao tipo de dano que ativou a magia até concluir seu próximo Descanso. Ao usar este traço, os efeitos da magia são tratados como se ela tivesse sido conjurada em um nível igual ao seu bônus de proficiência.",
            "description": "Você pode produzir os efeitos da magia *absorver energia*, sem gastar espaço de magia nem componentes, um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Quando produz esses efeitos desta forma, você adquire resistência ao tipo de dano que ativou a magia até concluir seu próximo Descanso. Ao usar este traço, os efeitos da magia são tratados como se ela tivesse sido conjurada em um nível igual ao seu bônus de proficiência.",
            "page": 70
          }
        ],
        "originalBloodlineTrait": "Damage Resistant"
      },
      {
        "id": "many-formed-one",
        "name": "Multiforme",
        "originalName": "Many Formed One",
        "page": 70,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Carisma +1",
        "description": "Os multiformes conseguem reproduzir a aparência, os traços e o tamanho de outros seres, sendo capazes de crescer até escalas enormes ou diminuir drasticamente seu corpo.",
        "bloodlineTrait": "Massa Faz a Força",
        "traits": [
          {
            "id": "cell-division",
            "name": "Divisão Celular",
            "originalName": "Cell Division",
            "summary": "Uma vez por Descanso, você pode produzir os efeitos de *aumentar/reduzir* como uma ação, sem gastar espaço de magia, concentração ou componentes. Você só pode ter a si mesmo como alvo, e a magia é tratada como conjurada em um nível igual ao seu bônus de proficiência.",
            "description": "Uma vez por Descanso, você pode produzir os efeitos de *aumentar/reduzir* como uma ação, sem gastar espaço de magia, concentração ou componentes. Você só pode ter a si mesmo como alvo, e a magia é tratada como conjurada em um nível igual ao seu bônus de proficiência.",
            "page": 70
          },
          {
            "id": "mass-makes-might",
            "name": "Massa Faz a Força",
            "originalName": "Mass Makes Might",
            "summary": "Como uma ação, você pode alterar sua forma física e mudar seu tamanho para Pequeno, Médio ou Grande. Ao fazê-lo, também pode modificar o corpo e a aparência para emular outros seres, assumindo cosmeticamente a aparência de um tipo de criatura e de uma classe à sua escolha. Sentidos, itens e efeitos que tenham como alvo ou ignorem aquela raça/classe são enganados e tratam você como pertencente às escolhas feitas. Se usar este traço novamente, as novas escolhas substituem as anteriores. Você ainda mantém seus tipos de criatura e classes reais.",
            "description": "Como uma ação, você pode alterar sua forma física e mudar seu tamanho para Pequeno, Médio ou Grande. Ao fazê-lo, também pode modificar o corpo e a aparência para emular outros seres, assumindo cosmeticamente a aparência de um tipo de criatura e de uma classe à sua escolha. Sentidos, itens e efeitos que tenham como alvo ou ignorem aquela raça/classe são enganados e tratam você como pertencente às escolhas feitas. Se usar este traço novamente, as novas escolhas substituem as anteriores. Você ainda mantém seus tipos de criatura e classes reais.",
            "page": 70
          }
        ],
        "originalBloodlineTrait": "Mass Makes Might"
      },
      {
        "id": "tetramold",
        "name": "Tetramolde",
        "originalName": "Tetramold",
        "page": 70,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Constituição +1",
        "description": "O protovida tetramolde consegue dividir a própria mente entre versões menores de si e reuni-las mais tarde conforme necessário. Seus agrupamentos celulares são descartáveis, permitindo eliminar partes comprometidas do corpo em favor das que continuam operacionais.",
        "bloodlineTrait": "Expelir Contaminação",
        "traits": [
          {
            "id": "expel-contamination",
            "name": "Expelir Contaminação",
            "originalName": "Expel Contamination",
            "summary": "No início do seu turno, se estiver Enfeitiçado, Amedrontado, Incendiado, Paralisado ou Envenenado, você pode gastar um de seus Dados de Vida — escolhendo o maior disponível — para cada um desses efeitos, isolando e expelindo as células afetadas e encerrando os efeitos correspondentes.",
            "description": "No início do seu turno, se estiver Enfeitiçado, Amedrontado, Incendiado, Paralisado ou Envenenado, você pode gastar um de seus Dados de Vida — escolhendo o maior disponível — para cada um desses efeitos, isolando e expelindo as células afetadas e encerrando os efeitos correspondentes.",
            "page": 70
          },
          {
            "id": "multisplit",
            "name": "Multidivisão",
            "originalName": "Multisplit",
            "summary": "Como uma ação, você pode dividir seu corpo em duas versões de metade do tamanho, fazendo uma delas surgir em um espaço desocupado adjacente. As duas versões ficam uma categoria de tamanho menores do que você era. Ao se dividir, escolha qual equipamento fica com cada versão. Cada uma possui suas estatísticas e pode usar o equipamento designado a ela, desde que ele seja adequado ao seu tamanho. Cada versão também possui pontos de vida iguais à metade dos pontos de vida que você tinha ao se dividir, arredondados para baixo. Quando você se move ou realiza ações, qualquer uma das versões pode executá-las à sua escolha, mas ações e deslocamento são gastos coletivamente por todas elas. Espaços de magia, usos de características e demais recursos são compartilhados; se uma versão morrer, ela imediatamente definha. Um efeito que tenha várias criaturas como alvo e atinja mais de uma de suas versões simultaneamente é tratado como se tivesse apenas uma delas como alvo, mas o dano resultante — depois de reduções — é dividido entre todas as versões atingidas. Como uma ação bônus, versões divididas podem se combinar com outras versões próximas: seus pontos de vida atuais e máximos são somados, e a criatura resultante cresce uma categoria de tamanho se ambas tinham o mesmo tamanho. Se todas as versões forem reassimiladas no mesmo corpo, você retorna ao tamanho e máximo de pontos de vida completos. Ao concluir um Descanso, você retorna ao seu tamanho e máximo de pontos de vida originais mesmo que não tenha reassimilado todas as outras versões; a versão com mais pontos de vida torna-se o verdadeiro você, enquanto as demais secam e desaparecem.",
            "description": "Como uma ação, você pode dividir seu corpo em duas versões de metade do tamanho, fazendo uma delas surgir em um espaço desocupado adjacente. As duas versões ficam uma categoria de tamanho menores do que você era. Ao se dividir, escolha qual equipamento fica com cada versão. Cada uma possui suas estatísticas e pode usar o equipamento designado a ela, desde que ele seja adequado ao seu tamanho. Cada versão também possui pontos de vida iguais à metade dos pontos de vida que você tinha ao se dividir, arredondados para baixo. Quando você se move ou realiza ações, qualquer uma das versões pode executá-las à sua escolha, mas ações e deslocamento são gastos coletivamente por todas elas. Espaços de magia, usos de características e demais recursos são compartilhados; se uma versão morrer, ela imediatamente definha. Um efeito que tenha várias criaturas como alvo e atinja mais de uma de suas versões simultaneamente é tratado como se tivesse apenas uma delas como alvo, mas o dano resultante — depois de reduções — é dividido entre todas as versões atingidas. Como uma ação bônus, versões divididas podem se combinar com outras versões próximas: seus pontos de vida atuais e máximos são somados, e a criatura resultante cresce uma categoria de tamanho se ambas tinham o mesmo tamanho. Se todas as versões forem reassimiladas no mesmo corpo, você retorna ao tamanho e máximo de pontos de vida completos. Ao concluir um Descanso, você retorna ao seu tamanho e máximo de pontos de vida originais mesmo que não tenha reassimilado todas as outras versões; a versão com mais pontos de vida torna-se o verdadeiro você, enquanto as demais secam e desaparecem.",
            "page": 70
          }
        ],
        "originalBloodlineTrait": "Expel Contamination"
      }
    ]
  },
  {
    "id": "scourage",
    "name": "Scourage",
    "originalName": "Scourage",
    "source": "Somnus Domina — Zagalhta's Exolunar Collection",
    "sourceId": "zagalhta-exolunar",
    "sourcePage": 71,
    "textRevision": "full",
    "summary": "Espécie reptiliana exilada no Plano Astral, cuja cultura preserva conhecimento por programação genoarcana e desenvolveu poderosas adaptações psíquicas.",
    "abilityScore": "Sabedoria +2; atributo da subraça +1. Alternativamente, aplicam-se as regras gerais 5.19 quando autorizadas pelo Mestre.",
    "meta": {
      "creatureTypes": "Humanoide, Scourage",
      "lifeExpectancy": "Cerca de 115 anos",
      "nationalAlignment": "Exolunar",
      "planarOrigin": "Plano Astral",
      "planetouched": "Não",
      "regions": "Espaço Sombrio, Colônias Exolunares, Vaustagonn",
      "size": "Pequeno / Médio",
      "alignment": "Frequentemente neutro",
      "languages": "Comum e Scourive",
      "speed": "9 m; aceleração 0-G 9 m"
    },
    "lore": [
      {
        "title": "Sobreviventes do Astral",
        "text": "Os scourage descendem de uma espécie reptiliana cujo planeta foi destruído por uma incursão de titãs exteriores. Sem tecnologia espacial ou magia capaz de salvá-los, foram lançados ao Plano Astral, onde aprenderam ao longo de gerações a moldar o ambiente e sobreviver por força mental."
      },
      {
        "title": "Turistas astrais",
        "text": "Depois de recuperarem e compreenderem uma nave exolunar perdida no Astral, conseguiram retornar ao Plano Material. Muitos, contudo, passaram a considerar Vaustagonn — sua região moldada psiquicamente no Plano Astral — seu verdadeiro lar e viajam entre planos em busca de recursos e conhecimento."
      },
      {
        "title": "Ombriul e Espaço Sombrio",
        "text": "Uma facção aceitou a oferta de um deus exterior moribundo e se tornou os Ombriul, ligando sua linhagem à essência da entidade em troca de poder. Eles vivem no Espaço Sombrio, em conflito tanto com titãs exteriores quanto com civilizações que saqueiam para fortalecer sua guerra."
      },
      {
        "title": "Programação genoarcana",
        "text": "Famílias scourage preservam talentos, proficiências e memória ancestral por meios genéticos e arcanos. Ninhadas numerosas e constantes trocas entre naves, mundos e colônias mantêm uma ampla rede de diversidade e conhecimento compartilhado."
      }
    ],
    "coreTraits": [
      {
        "id": "ability-score-increase",
        "name": "Aumento no Valor de Habilidade",
        "originalName": "Ability Score Increase",
        "summary": "Sua Sabedoria aumenta em 2.",
        "description": "Sua Sabedoria aumenta em 2.",
        "page": 72
      },
      {
        "id": "age",
        "name": "Idade",
        "originalName": "Age",
        "summary": "Scourage amadurecem mentalmente por volta dos 12 anos graças às informações genéticas herdadas e normalmente vivem até o início dos 100 anos, frequentemente sofrendo debilitação da velhice depois de completar 100.",
        "description": "Scourage amadurecem mentalmente por volta dos 12 anos graças às informações genéticas herdadas e normalmente vivem até o início dos 100 anos, frequentemente sofrendo debilitação da velhice depois de completar 100.",
        "page": 72
      },
      {
        "id": "alignment",
        "name": "Tendência",
        "originalName": "Alignment",
        "summary": "Sua origem isolada no Plano Astral e a cautela diante de outras espécies fazem com que scourage sejam frequentemente neutros.",
        "description": "Sua origem isolada no Plano Astral e a cautela diante de outras espécies fazem com que scourage sejam frequentemente neutros.",
        "page": 72
      },
      {
        "id": "exolunar-adaptations",
        "name": "Adaptações Exolunares",
        "originalName": "Exolunar Adaptations",
        "summary": "Como uma ação bônus, você pode concentrar energia psíquica e receber deslocamento de voo pairado igual ao seu deslocamento-base por 1 minuto; durante esse período, sua velocidade de aceleração 0-G é dobrada. Pode fazer isso um número de vezes por Descanso igual à metade do bônus de proficiência. Separadamente, você não precisa de ar para respirar no vácuo.",
        "description": "Como uma ação bônus, você pode concentrar energia psíquica e receber deslocamento de voo pairado igual ao seu deslocamento-base por 1 minuto; durante esse período, sua velocidade de aceleração 0-G é dobrada. Pode fazer isso um número de vezes por Descanso igual à metade do bônus de proficiência. Separadamente, você não precisa de ar para respirar no vácuo.",
        "page": 72
      },
      {
        "id": "genoarcanic-programming",
        "name": "Programação Genoarcana",
        "originalName": "Genoarcanic Programming",
        "summary": "Você possui proficiência em duas perícias à sua escolha. Como alternativa, pode receber proficiência e Especialização na mesma perícia.",
        "description": "Você possui proficiência em duas perícias à sua escolha. Como alternativa, pode receber proficiência e Especialização na mesma perícia.",
        "page": 72
      },
      {
        "id": "languages",
        "name": "Idiomas",
        "originalName": "Languages",
        "summary": "Você lê, escreve e fala Comum e Scourive, o idioma dos scourage.",
        "description": "Você lê, escreve e fala Comum e Scourive, o idioma dos scourage.",
        "page": 72
      },
      {
        "id": "psychic-resistance",
        "name": "Resistência Psíquica",
        "originalName": "Psychic Resistance",
        "summary": "Você possui resistência a dano psíquico.",
        "description": "Você possui resistência a dano psíquico.",
        "page": 72
      },
      {
        "id": "size",
        "name": "Tamanho",
        "originalName": "Size",
        "summary": "Você é Pequeno ou Médio, à sua escolha.",
        "description": "Você é Pequeno ou Médio, à sua escolha.",
        "page": 72
      },
      {
        "id": "speed",
        "name": "Deslocamento",
        "originalName": "Speed",
        "summary": "Seu deslocamento de caminhada e sua velocidade de aceleração 0-G são 9 metros.",
        "description": "Seu deslocamento de caminhada e sua velocidade de aceleração 0-G são 9 metros.",
        "page": 72
      }
    ],
    "legacyChoices": 2,
    "legacyTraits": [
      {
        "id": "genoarcanic-evolution",
        "name": "Evolução Genoarcana",
        "originalName": "Genoarcanic Evolution",
        "summary": "Quando seu bônus de proficiência aumentar para +3 ou mais, escolha uma perícia para receber proficiência ou receba Especialização em uma perícia que tenha adquirido por este traço ou por Programação Genoarcana.",
        "description": "Quando seu bônus de proficiência aumentar para +3 ou mais, escolha uma perícia para receber proficiência ou receba Especialização em uma perícia que tenha adquirido por este traço ou por Programação Genoarcana.",
        "page": 72
      },
      {
        "id": "perception-filter",
        "name": "Filtro de Percepção",
        "originalName": "Perception Filter",
        "summary": "Como uma ação, escolha uma criatura a até 18 metros. Ela realiza um teste de resistência de Inteligência contra CD baseada em sua Inteligência, Sabedoria ou Carisma. Se falhar, os sentidos dela deixam de perceber você, como se você estivesse Invisível e ela estivesse Surda apenas para sua presença. O efeito dura 1 minuto ou até você realizar uma ação que encerraria *invisibilidade*. Você pode usar este traço um número de vezes por Descanso Longo igual ao bônus de proficiência; ao usá-lo, pode gastar usos adicionais para incluir uma criatura extra por uso.",
        "description": "Como uma ação, escolha uma criatura a até 18 metros. Ela realiza um teste de resistência de Inteligência contra CD baseada em sua Inteligência, Sabedoria ou Carisma. Se falhar, os sentidos dela deixam de perceber você, como se você estivesse Invisível e ela estivesse Surda apenas para sua presença. O efeito dura 1 minuto ou até você realizar uma ação que encerraria *invisibilidade*. Você pode usar este traço um número de vezes por Descanso Longo igual ao bônus de proficiência; ao usá-lo, pode gastar usos adicionais para incluir uma criatura extra por uso.",
        "page": 72
      },
      {
        "id": "psionic-talents",
        "name": "Talentos Psiônicos",
        "originalName": "Psionic Talents",
        "summary": "Você conhece o truque *mãos mágicas* e escolhe uma magia de Feiticeiro de 1º nível e uma de 2º nível para aprender. Pode conjurá-las usando seus espaços de magia ou, sem espaço de magia nem componentes materiais, gastando usos deste traço iguais ao nível em que está conjurando. Sua habilidade de conjuração é Inteligência, Sabedoria ou Carisma. Você possui usos por Descanso Longo iguais ao bônus de proficiência.",
        "description": "Você conhece o truque *mãos mágicas* e escolhe uma magia de Feiticeiro de 1º nível e uma de 2º nível para aprender. Pode conjurá-las usando seus espaços de magia ou, sem espaço de magia nem componentes materiais, gastando usos deste traço iguais ao nível em que está conjurando. Sua habilidade de conjuração é Inteligência, Sabedoria ou Carisma. Você possui usos por Descanso Longo iguais ao bônus de proficiência.",
        "page": 72
      },
      {
        "id": "scourage-training",
        "name": "Treinamento Scourage",
        "originalName": "Scourage Training",
        "summary": "Você recebe proficiência no próximo tipo de armadura mais pesado em que ainda não é proficiente (leve, média e pesada, nessa ordem) e em quatro armas à sua escolha. Alternativamente, recebe proficiência em uma arma à sua escolha e em armas de fogo simples e marciais.",
        "description": "Você recebe proficiência no próximo tipo de armadura mais pesado em que ainda não é proficiente (leve, média e pesada, nessa ordem) e em quatro armas à sua escolha. Alternativamente, recebe proficiência em uma arma à sua escolha e em armas de fogo simples e marciais.",
        "page": 72
      },
      {
        "id": "shielded-mind",
        "name": "Mente Protegida",
        "originalName": "Shielded Mind",
        "summary": "Você é automaticamente bem-sucedido em testes de resistência feitos para impedir que seus pensamentos sejam lidos e possui vantagem em testes de resistência contra ficar Enfeitiçado ou ser forçado a agir contra a vontade.",
        "description": "Você é automaticamente bem-sucedido em testes de resistência feitos para impedir que seus pensamentos sejam lidos e possui vantagem em testes de resistência contra ficar Enfeitiçado ou ser forçado a agir contra a vontade.",
        "page": 72
      },
      {
        "id": "telepathic-bond",
        "name": "Vínculo Telepático",
        "originalName": "Telepathic Bond",
        "summary": "Você pode formar um vínculo telepático com uma criatura à sua escolha a até 9 metros. Enquanto vocês compartilharem um idioma, podem conversar mentalmente. Cada um ouve a voz familiar do outro; se não conhecerem a voz, o ouvinte percebe a própria voz. Se outras criaturas telepáticas estiverem dentro desse alcance, todas podem conversar telepaticamente entre si; caso contrário, o vínculo conecta somente você e o alvo.",
        "description": "Você pode formar um vínculo telepático com uma criatura à sua escolha a até 9 metros. Enquanto vocês compartilharem um idioma, podem conversar mentalmente. Cada um ouve a voz familiar do outro; se não conhecerem a voz, o ouvinte percebe a própria voz. Se outras criaturas telepáticas estiverem dentro desse alcance, todas podem conversar telepaticamente entre si; caso contrário, o vínculo conecta somente você e o alvo.",
        "page": 72
      }
    ],
    "mixedBloodTraits": [
      {
        "id": "bloodline",
        "name": "Linhagem",
        "originalName": "Bloodline",
        "summary": "Escolha Corte Astral (Terrast), Visão no Escuro Cósmica (Ombriul), Instinto Gravitacional (Exiduoso) ou Passo de Dobra (Astrenioso). Você recebe o traço correspondente.",
        "description": "Escolha Corte Astral (Terrast), Visão no Escuro Cósmica (Ombriul), Instinto Gravitacional (Exiduoso) ou Passo de Dobra (Astrenioso). Você recebe o traço correspondente.",
        "page": 73
      },
      {
        "id": "exolunar-adaptations",
        "name": "Adaptações Exolunares",
        "originalName": "Exolunar Adaptations",
        "summary": "Você recebe o traço Adaptações Exolunares do Scourage.",
        "description": "Você recebe o traço Adaptações Exolunares do Scourage.",
        "page": 73
      },
      {
        "id": "gene-vault",
        "name": "Cofre Genético",
        "originalName": "Gene Vault",
        "summary": "Você recebe o traço Programação Genoarcana do Scourage.",
        "description": "Você recebe o traço Programação Genoarcana do Scourage.",
        "page": 73
      }
    ],
    "subraces": [
      {
        "id": "astrenious",
        "name": "Astrenioso",
        "originalName": "Astrenious",
        "page": 73,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Constituição +1",
        "description": "Incubados e nascidos nos confins do Plano Astral, esses scourage são adaptados ao ambiente alienígena em que surgiram. Mente e corpo permanecem parcialmente desacoplados da realidade física do plano, e sua percepção incomum pode fazê-los parecer distantes ou espiritualizados para habitantes do Plano Material.",
        "bloodlineTrait": "Passo de Dobra",
        "traits": [
          {
            "id": "alien-mind",
            "name": "Mente Alienígena",
            "originalName": "Alien Mind",
            "summary": "Você é imune às condições Enfeitiçado e Enfurecido.",
            "description": "Você é imune às condições Enfeitiçado e Enfurecido.",
            "page": 73
          },
          {
            "id": "warp-step",
            "name": "Passo de Dobra",
            "originalName": "Warp Step",
            "summary": "Você consegue se desprender momentaneamente do tecido do espaço, fazendo sua posição oscilar entre dois pontos. Como uma ação bônus, pode deformar o espaço ao seu redor e teleportar-se para um espaço desocupado que possa ver a até 9 metros. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "description": "Você consegue se desprender momentaneamente do tecido do espaço, fazendo sua posição oscilar entre dois pontos. Como uma ação bônus, pode deformar o espaço ao seu redor e teleportar-se para um espaço desocupado que possa ver a até 9 metros. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "page": 73
          }
        ],
        "originalBloodlineTrait": "Warp Step"
      },
      {
        "id": "exiduous",
        "name": "Exiduoso",
        "originalName": "Exiduous",
        "page": 73,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Inteligência +1",
        "description": "A maioria dos scourage é exiduosa: indivíduos nascidos no espaço exolunar, geralmente em uma nave-colônia ou outra embarcação. Seus poderes psiônicos são precisos o bastante para exercer força sobre outros seres e regular a própria gravidade.",
        "bloodlineTrait": "Instinto Gravitacional",
        "traits": [
          {
            "id": "gravity-instinct",
            "name": "Instinto Gravitacional",
            "originalName": "Gravity Instinct",
            "summary": "Você possui controle instintivo sobre seu campo gravitacional pessoal, tornando impossível ser derrubado, a menos que esteja Incapacitado. Além disso, pode realizar Saltos em Altura e em Distância com alcance completo a partir de uma posição parada e sofre apenas metade do dano causado por quedas.",
            "description": "Você possui controle instintivo sobre seu campo gravitacional pessoal, tornando impossível ser derrubado, a menos que esteja Incapacitado. Além disso, pode realizar Saltos em Altura e em Distância com alcance completo a partir de uma posição parada e sofre apenas metade do dano causado por quedas.",
            "page": 73
          },
          {
            "id": "psionic-force",
            "name": "Força Psiônica",
            "originalName": "Psionic Force",
            "summary": "Como uma ação bônus, você pode exercer poder psiônico para agarrar à distância uma criatura à sua escolha a até 18 metros. O alvo deve realizar um teste de resistência de Força, com CD baseada em sua Inteligência, Sabedoria ou Carisma. Se falhar, escolha um dos efeitos: seu deslocamento é reduzido a 0 até o início do seu próximo turno; ele fica Lento até o fim do próximo turno dele; ele fica Caído; ou é puxado em sua direção ou empurrado para longe de você por uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "description": "Como uma ação bônus, você pode exercer poder psiônico para agarrar à distância uma criatura à sua escolha a até 18 metros. O alvo deve realizar um teste de resistência de Força, com CD baseada em sua Inteligência, Sabedoria ou Carisma. Se falhar, escolha um dos efeitos: seu deslocamento é reduzido a 0 até o início do seu próximo turno; ele fica Lento até o fim do próximo turno dele; ele fica Caído; ou é puxado em sua direção ou empurrado para longe de você por uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "page": 73
          }
        ],
        "originalBloodlineTrait": "Gravity Instinct"
      },
      {
        "id": "ombriul",
        "name": "Ombriul",
        "originalName": "Ombriul",
        "page": 73,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Força +1",
        "description": "Os scourage que seguiram o avatar de um deus exterior desconhecido até o Espaço Sombrio foram alienados dos demais e são vistos como proscritos e rebeldes. Sua pele é visivelmente mais rígida e alienígena, e sua cultura ensina que todos os outros seres são inimigos. Mesmo quem escapa das massas Ombriul ainda carrega o toque desse legado sombrio e seus sussurros.",
        "bloodlineTrait": "Visão no Escuro Cósmica",
        "traits": [
          {
            "id": "cosmic-darkvision",
            "name": "Visão no Escuro Cósmica",
            "originalName": "Cosmic Darkvision",
            "summary": "Você possui Visão no Escuro a 18 metros, podendo enxergar em penumbra como se fosse luz plena e em escuridão como se fosse penumbra. Se já possuir Visão no Escuro por outra característica ou traço, aumente o alcance em 9 metros ou para 36 metros, o que resultar no maior alcance.",
            "description": "Você possui Visão no Escuro a 18 metros, podendo enxergar em penumbra como se fosse luz plena e em escuridão como se fosse penumbra. Se já possuir Visão no Escuro por outra característica ou traço, aumente o alcance em 9 metros ou para 36 metros, o que resultar no maior alcance.",
            "page": 73
          },
          {
            "id": "merciless-streak",
            "name": "Veia Impiedosa",
            "originalName": "Merciless Streak",
            "summary": "Quando obtiver, no d20 de uma jogada de ataque ou teste de atributo, um resultado igual ou inferior à metade do seu bônus de proficiência, você pode tratar o resultado do d20 como 10.",
            "description": "Quando obtiver, no d20 de uma jogada de ataque ou teste de atributo, um resultado igual ou inferior à metade do seu bônus de proficiência, você pode tratar o resultado do d20 como 10.",
            "page": 73
          }
        ],
        "originalBloodlineTrait": "Cosmic Darkvision"
      },
      {
        "id": "terrast",
        "name": "Terrast",
        "originalName": "Terrast",
        "page": 73,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Constituição +1",
        "description": "Nascidos na superfície de um planeta ou em outro ambiente cercado por atmosfera, os terrast possuem as aptidões de sobrevivência necessárias para lidar com mundos terrestres dominados pela gravidade. São adaptáveis e usam poderes psiônicos para se defender à distância, avaliando ameaças menos comuns no espaço exolunar.",
        "bloodlineTrait": "Corte Astral",
        "traits": [
          {
            "id": "astraslicing",
            "name": "Corte Astral",
            "originalName": "Astraslicing",
            "summary": "Ao dobrar o espaço, quando fizer em seu turno um ataque de arma usando uma arma corpo a corpo, você pode criar uma cópia espectral distante e tratar o alcance da arma como 9 metros. Se fizer isso, todos os ataques com essa arma recebem esse alcance até o fim do turno. O alcance ampliado vale apenas para jogadas de ataque e não é considerado por outras características ou traços. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "description": "Ao dobrar o espaço, quando fizer em seu turno um ataque de arma usando uma arma corpo a corpo, você pode criar uma cópia espectral distante e tratar o alcance da arma como 9 metros. Se fizer isso, todos os ataques com essa arma recebem esse alcance até o fim do turno. O alcance ampliado vale apenas para jogadas de ataque e não é considerado por outras características ou traços. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
            "page": 73
          },
          {
            "id": "meet-the-challenge",
            "name": "Encarar o Desafio",
            "originalName": "Meet the Challenge",
            "summary": "Por ter nascido em um ambiente que apresenta desafios maiores e menos previsíveis do que o espaço, você aprendeu a se adaptar. Escolha três perícias nas quais não possua Especialização. Você pode adicionar metade do seu bônus de proficiência aos testes feitos com elas. Se outra característica lhe conceder Especialização em uma ou mais dessas perícias, você pode mover este bônus para uma nova perícia que cumpra os requisitos.",
            "description": "Por ter nascido em um ambiente que apresenta desafios maiores e menos previsíveis do que o espaço, você aprendeu a se adaptar. Escolha três perícias nas quais não possua Especialização. Você pode adicionar metade do seu bônus de proficiência aos testes feitos com elas. Se outra característica lhe conceder Especialização em uma ou mais dessas perícias, você pode mover este bônus para uma nova perícia que cumpra os requisitos.",
            "page": 73
          }
        ],
        "originalBloodlineTrait": "Astraslicing"
      }
    ]
  },
  {
    "id": "sunling",
    "name": "Sunling",
    "originalName": "Sunling",
    "source": "Somnus Domina — Zagalhta's Exolunar Collection",
    "sourceId": "zagalhta-exolunar",
    "sourcePage": 74,
    "textRevision": "full",
    "summary": "Humanoide símio de Degozah, naturalmente ágil, escalador e hábil com ferramentas, cuja evolução produziu linhagens adaptadas a ambientes muito diferentes.",
    "abilityScore": "Destreza +2; atributo da subraça +1. Alternativamente, aplicam-se as regras gerais 5.19 quando autorizadas pelo Mestre.",
    "meta": {
      "creatureTypes": "Humanoide, Besta, Sunling",
      "lifeExpectancy": "Cerca de 90 anos",
      "nationalAlignment": "Exolunar",
      "planarOrigin": "—",
      "planetouched": "Não",
      "regions": "Degozah, Colônias Exolunares",
      "size": "Pequeno / Médio (Grande por opção de subraça)",
      "alignment": "Variável",
      "languages": "Comum e Degoran",
      "speed": "9 m; escalada 9 m"
    },
    "lore": [
      {
        "title": "Povo de Degozah",
        "text": "Sunlings são um dos dois povos dominantes de Degozah. Por padrões somnianos, parecem humanoides com características marcadamente símias: pés semelhantes a mãos, caudas ágeis e pelagem que varia do branco ao marrom e vermelho. Possuem grande equilíbrio, astúcia e habilidade física."
      },
      {
        "title": "Exploradores exolunares",
        "text": "Sua capacidade de escalar e compreender orientação tridimensional os tornou excelentes viajantes do espaço e pilotos de unidades frame. Eles mantêm boas relações com povos espaciais como elfos astrais e framebilt, e inspiraram unidades lunares BAN JIABAN construídas para aproveitar sua agilidade."
      },
      {
        "title": "Império Uizang",
        "text": "Em Degozah, os sunlings fazem parte do vasto Império Uizang, governado pelo Imperador da Neve Kon Uizang a partir da fortaleza de Cascrystal. Quem deixa o planeta para viver entre as estrelas é dispensado de muitas normas sociais, mas pode encontrar dificuldade para se reintegrar ao voltar."
      },
      {
        "title": "Yuamorianos",
        "text": "Os inimigos tradicionais dos sunlings são os yuamorianos, ínferos exclusivos de Degozah formados de medos, ansiedades e traumas que possuem e mutam elementos ou cadáveres. A guerra constante contra essas criaturas alimentou uma cultura rápida em reagir a ameaças infernais."
      }
    ],
    "coreTraits": [
      {
        "id": "ability-score-increase",
        "name": "Aumento no Valor de Habilidade",
        "originalName": "Ability Score Increase",
        "summary": "Sua Destreza aumenta em 2 e outro valor aumenta em 1 conforme sua subraça. Esses aumentos não podem elevar um valor acima de 20.",
        "description": "Sua Destreza aumenta em 2 e outro valor aumenta em 1 conforme sua subraça. Esses aumentos não podem elevar um valor acima de 20.",
        "page": 75
      },
      {
        "id": "age",
        "name": "Idade",
        "originalName": "Age",
        "summary": "Sunlings possuem longevidade semelhante à humana, amadurecem no fim da adolescência e normalmente vivem até os 90 anos. Os efeitos da velhice tornam-se comuns na casa dos 70 e sua pelagem começa a ficar branca.",
        "description": "Sunlings possuem longevidade semelhante à humana, amadurecem no fim da adolescência e normalmente vivem até os 90 anos. Os efeitos da velhice tornam-se comuns na casa dos 70 e sua pelagem começa a ficar branca.",
        "page": 75
      },
      {
        "id": "alignment",
        "name": "Tendência",
        "originalName": "Alignment",
        "summary": "Sunlings apresentam grande variedade de tendências e não favorecem nenhuma em particular.",
        "description": "Sunlings apresentam grande variedade de tendências e não favorecem nenhuma em particular.",
        "page": 75
      },
      {
        "id": "creature-type",
        "name": "Tipo de Criatura",
        "originalName": "Creature Type",
        "summary": "Além de Humanoide e Sunling, você também é considerado uma Besta.",
        "description": "Além de Humanoide e Sunling, você também é considerado uma Besta.",
        "page": 75
      },
      {
        "id": "languages",
        "name": "Idiomas",
        "originalName": "Languages",
        "summary": "Você lê, escreve e fala Comum e Degoran, o idioma de Degozah.",
        "description": "Você lê, escreve e fala Comum e Degoran, o idioma de Degozah.",
        "page": 75
      },
      {
        "id": "quirk-dodge",
        "name": "Esquiva Peculiar",
        "originalName": "Quirk Dodge",
        "summary": "Quando falhar em um teste de resistência de Destreza ou for atingido por um ataque com arma que possa ver, pode usar sua reação para adicionar seu modificador de Sabedoria ao resultado do teste de Destreza ou seu modificador de Carisma à Classe de Armadura, respectivamente, possivelmente mudando o resultado. O bônus permanece até o fim do turno. Você pode usar este traço por Descanso um número de vezes igual à metade do seu bônus de proficiência + 1.",
        "description": "Quando falhar em um teste de resistência de Destreza ou for atingido por um ataque com arma que possa ver, pode usar sua reação para adicionar seu modificador de Sabedoria ao resultado do teste de Destreza ou seu modificador de Carisma à Classe de Armadura, respectivamente, possivelmente mudando o resultado. O bônus permanece até o fim do turno. Você pode usar este traço por Descanso um número de vezes igual à metade do seu bônus de proficiência + 1.",
        "page": 75
      },
      {
        "id": "scaling-expert",
        "name": "Especialista em Escalada",
        "originalName": "Scaling Expert",
        "summary": "Você pode escalar superfícies verticais sem ferramentas nem testes desde que não sejam completamente lisas e ofereçam apoios de pelo menos cerca de 5 cm. Além disso, pode realizar Saltos em Altura e em Distância com distância completa parado ou enquanto escala, sem gastar movimento de preparação.",
        "description": "Você pode escalar superfícies verticais sem ferramentas nem testes desde que não sejam completamente lisas e ofereçam apoios de pelo menos cerca de 5 cm. Além disso, pode realizar Saltos em Altura e em Distância com distância completa parado ou enquanto escala, sem gastar movimento de preparação.",
        "page": 75
      },
      {
        "id": "size",
        "name": "Tamanho",
        "originalName": "Size",
        "summary": "Você é Pequeno ou Médio, à sua escolha.",
        "description": "Você é Pequeno ou Médio, à sua escolha.",
        "page": 75
      },
      {
        "id": "speed",
        "name": "Deslocamento",
        "originalName": "Speed",
        "summary": "Seu deslocamento de caminhada é 9 metros e você possui deslocamento de escalada igual.",
        "description": "Seu deslocamento de caminhada é 9 metros e você possui deslocamento de escalada igual.",
        "page": 75
      },
      {
        "id": "tool-manipulation",
        "name": "Manipulação com Ferramentas",
        "originalName": "Tool Manipulation",
        "summary": "Seus pés possuem polegares opositores e dedos semelhantes aos das mãos, permitindo manipular ferramentas, armas e implementos com eles como faria com as mãos, desde que estejam livres.",
        "description": "Seus pés possuem polegares opositores e dedos semelhantes aos das mãos, permitindo manipular ferramentas, armas e implementos com eles como faria com as mãos, desde que estejam livres.",
        "page": 75
      }
    ],
    "legacyChoices": 2,
    "legacyTraits": [
      {
        "id": "bouncing-fighter",
        "name": "Lutador Saltitante",
        "originalName": "Bouncing Fighter",
        "summary": "Você possui vantagem em testes de Atletismo e Acrobacia para resistir ou escapar de Agarrado, Empurrões ou movimento forçado, e em testes de resistência para evitar ficar Caído. Levantar-se do chão custa apenas 1,5 metro de deslocamento.",
        "description": "Você possui vantagem em testes de Atletismo e Acrobacia para resistir ou escapar de Agarrado, Empurrões ou movimento forçado, e em testes de resistência para evitar ficar Caído. Levantar-se do chão custa apenas 1,5 metro de deslocamento.",
        "page": 75
      },
      {
        "id": "concussive-blow",
        "name": "Golpe Concussivo",
        "originalName": "Concussive Blow",
        "summary": "Quando acertar uma criatura com um ataque corpo a corpo, pode causar dano contundente adicional igual a 5 + metade do seu nível, arredondada para cima. Pode fazer isso um número de vezes por Descanso Longo igual ao bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
        "description": "Quando acertar uma criatura com um ataque corpo a corpo, pode causar dano contundente adicional igual a 5 + metade do seu nível, arredondada para cima. Pode fazer isso um número de vezes por Descanso Longo igual ao bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
        "page": 75
      },
      {
        "id": "darkvision",
        "name": "Visão no Escuro",
        "originalName": "Darkvision",
        "summary": "Você possui Visão no Escuro a 18 metros.",
        "description": "Você possui Visão no Escuro a 18 metros.",
        "page": 75
      },
      {
        "id": "heels-over-head",
        "name": "Calcanhares sobre a Cabeça",
        "originalName": "Heels Over Head",
        "summary": "Você pode usar Destreza para determinar os bônus de ataque e dano de qualquer arma que empunhar, desde que ela não possua a propriedade Pesada.",
        "description": "Você pode usar Destreza para determinar os bônus de ataque e dano de qualquer arma que empunhar, desde que ela não possua a propriedade Pesada.",
        "page": 75
      },
      {
        "id": "tricks-in-loose-hands",
        "name": "Truques em Mãos Livres",
        "originalName": "Tricks in Loose Hands",
        "summary": "Escolha duas magias das escolas de Ilusão ou Encantamento, uma de 1º nível e uma de 2º nível. Você as aprende e pode conjurá-las usando espaços de magia que possua. Caso contrário, pode conjurá-las sem espaço de magia nem componentes materiais gastando usos deste traço iguais ao nível da magia, usando Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Você possui usos por Descanso Longo iguais ao bônus de proficiência.",
        "description": "Escolha duas magias das escolas de Ilusão ou Encantamento, uma de 1º nível e uma de 2º nível. Você as aprende e pode conjurá-las usando espaços de magia que possua. Caso contrário, pode conjurá-las sem espaço de magia nem componentes materiais gastando usos deste traço iguais ao nível da magia, usando Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Você possui usos por Descanso Longo iguais ao bônus de proficiência.",
        "page": 75
      },
      {
        "id": "yuamorian-countertactics",
        "name": "Contratáticas Yuamorianas",
        "originalName": "Yuamorian Countertactics",
        "summary": "Você possui vantagem em testes de resistência contra ínferos.",
        "description": "Você possui vantagem em testes de resistência contra ínferos.",
        "page": 75
      }
    ],
    "mixedBloodTraits": [
      {
        "id": "bloodline",
        "name": "Linhagem",
        "originalName": "Bloodline",
        "summary": "Escolha Força dos Membros (Brutamontes), Pronto para Reagir (Bigodudo), Pele Rochosa (Pele Rochosa) ou Passagem Ágil (Teligh). Você recebe o traço correspondente.",
        "description": "Escolha Força dos Membros (Brutamontes), Pronto para Reagir (Bigodudo), Pele Rochosa (Pele Rochosa) ou Passagem Ágil (Teligh). Você recebe o traço correspondente.",
        "page": 75
      },
      {
        "id": "quirk-dodge",
        "name": "Esquiva Peculiar",
        "originalName": "Quirk Dodge",
        "summary": "Você recebe o traço Esquiva Peculiar do Sunling.",
        "description": "Você recebe o traço Esquiva Peculiar do Sunling.",
        "page": 75
      },
      {
        "id": "monkey-like-nimbleness",
        "name": "Agilidade Símia",
        "originalName": "Monkey-Like Nimbleness",
        "summary": "Você recebe o traço Especialista em Escalada do Sunling e possui deslocamento de escalada igual ao seu deslocamento-base.",
        "description": "Você recebe o traço Especialista em Escalada do Sunling e possui deslocamento de escalada igual ao seu deslocamento-base.",
        "page": 75
      }
    ],
    "subraces": [
      {
        "id": "teligh",
        "name": "Teligh",
        "originalName": "Teligh",
        "page": 76,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Sabedoria +1",
        "description": "Vivendo no alto de árvores e montanhas, os sunlings teligh possuem grandes mantos naturais de pele que podem ser esticados, formando um eficiente planador que os ajuda a atravessar o ar durante quedas. São rápidos, decididos e atentos a oportunidades; suas tribos desenvolveram essa adaptação para fugir de predadores capazes de persegui-los por árvores e superfícies íngremes.",
        "bloodlineTrait": "Passagem Ágil",
        "traits": [
          {
            "id": "gliding-fur",
            "name": "Pelagem Planadora",
            "originalName": "Gliding Fur",
            "summary": "Você possui pele frouxa nos braços, semelhante a uma capa natural, que pode ser esticada durante uma queda para planar em segurança. Enquanto não estiver Incapacitado e estiver descendo pelo ar, você pode: para cada 30 cm que descer, deslocar-se horizontalmente 1,5 metro sem gastar deslocamento; e usar sua reação para produzir os efeitos de *queda suave*, tendo apenas a si mesmo como alvo.",
            "description": "Você possui pele frouxa nos braços, semelhante a uma capa natural, que pode ser esticada durante uma queda para planar em segurança. Enquanto não estiver Incapacitado e estiver descendo pelo ar, você pode: para cada 30 cm que descer, deslocar-se horizontalmente 1,5 metro sem gastar deslocamento; e usar sua reação para produzir os efeitos de *queda suave*, tendo apenas a si mesmo como alvo.",
            "page": 76
          },
          {
            "id": "scramble-by",
            "name": "Passagem Ágil",
            "originalName": "Scramble-By",
            "summary": "Quando sair do alcance de uma criatura no mesmo turno em que entrou nele, você não provoca ataques de oportunidade daquela criatura.",
            "description": "Quando sair do alcance de uma criatura no mesmo turno em que entrou nele, você não provoca ataques de oportunidade daquela criatura.",
            "page": 76
          }
        ],
        "originalBloodlineTrait": "Scramble-By"
      },
      {
        "id": "whiskered",
        "name": "Bigodudo",
        "originalName": "Whiskered",
        "page": 76,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Sabedoria +1",
        "description": "Entre os sunlings existe uma linhagem inteligente e travessa conhecida como bigoduda, tão estudiosa quanto turbulenta. Esses indivíduos perspicazes provocam e irritam seus adversários para fazê-los atacar movidos por raiva ou incômodo e então exploram essa manipulação.",
        "bloodlineTrait": "Pronto para Reagir",
        "traits": [
          {
            "id": "astute-mockery",
            "name": "Zombaria Perspicaz",
            "originalName": "Astute Mockery",
            "summary": "Como uma ação bônus, escolha uma criatura a até 9 metros e provoque-a, instigando-a a lutar especificamente contra você. Até o início do seu próximo turno, enquanto você estiver a até 9 metros dela, a criatura sofre uma penalidade nas jogadas de ataque contra criaturas que não sejam você igual à metade do seu bônus de proficiência, arredondada para cima, e não pode obter vantagem em jogadas de ataque.",
            "description": "Como uma ação bônus, escolha uma criatura a até 9 metros e provoque-a, instigando-a a lutar especificamente contra você. Até o início do seu próximo turno, enquanto você estiver a até 9 metros dela, a criatura sofre uma penalidade nas jogadas de ataque contra criaturas que não sejam você igual à metade do seu bônus de proficiência, arredondada para cima, e não pode obter vantagem em jogadas de ataque.",
            "page": 76
          },
          {
            "id": "quick-to-stir",
            "name": "Pronto para Reagir",
            "originalName": "Quick to Stir",
            "summary": "Enquanto estiver consciente, você não pode ser Surpreendido em combate e possui vantagem em testes de Percepção relacionados a audição, olfato ou visão, o que também concede +5 à sua Percepção passiva para esses sentidos.",
            "description": "Enquanto estiver consciente, você não pode ser Surpreendido em combate e possui vantagem em testes de Percepção relacionados a audição, olfato ou visão, o que também concede +5 à sua Percepção passiva para esses sentidos.",
            "page": 76
          },
          {
            "id": "skill-monkey",
            "name": "Macaco Habilidoso",
            "originalName": "Skill Monkey",
            "summary": "Você é proficiente em uma perícia à sua escolha.",
            "description": "Você é proficiente em uma perícia à sua escolha.",
            "page": 76
          }
        ],
        "originalBloodlineTrait": "Quick to Stir"
      },
      {
        "id": "bruiser",
        "name": "Brutamontes",
        "originalName": "Bruiser",
        "page": 76,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Força +1",
        "description": "Os enormes e simiescos brutamontes da raça sunling são potências físicas nascidas com vigor natural excepcional. Enquanto outras culturas poderiam vê-los apenas por sua forma bruta, os sunlings os tratam como líderes e figuras inspiradoras. Em geral são tão astutos e sábios quanto qualquer outro povo, aprimorando a mente para acompanhar o corpo — embora alguns sejam, de fato, bastante diretos em suas habilidades.",
        "bloodlineTrait": "Força dos Membros",
        "traits": [
          {
            "id": "bruisers-constitution",
            "name": "Constituição de Brutamontes",
            "originalName": "Bruiser’s Constitution",
            "summary": "Sempre que ganhar um novo nível, seu máximo de pontos de vida aumenta em 1. Ao receber este traço, aplique também +1 para cada nível que já possua.",
            "description": "Sempre que ganhar um novo nível, seu máximo de pontos de vida aumenta em 1. Ao receber este traço, aplique também +1 para cada nível que já possua.",
            "page": 76
          },
          {
            "id": "limb-strength",
            "name": "Força dos Membros",
            "originalName": "Limb Strength",
            "summary": "Seu tamanho e densidade muscular avançados permitem usar equipamentos pesados com facilidade. Você pode ignorar quaisquer requisitos de Força de armas ou armaduras inferiores a 20 e pode empunhar armas de duas mãos com apenas uma mão, deixando a outra livre para outra arma, escudo ou outros usos. Essas armas continuam sendo tratadas como se possuíssem a propriedade Duas Mãos.",
            "description": "Seu tamanho e densidade muscular avançados permitem usar equipamentos pesados com facilidade. Você pode ignorar quaisquer requisitos de Força de armas ou armaduras inferiores a 20 e pode empunhar armas de duas mãos com apenas uma mão, deixando a outra livre para outra arma, escudo ou outros usos. Essas armas continuam sendo tratadas como se possuíssem a propriedade Duas Mãos.",
            "page": 76
          },
          {
            "id": "size-option",
            "name": "Opção de Tamanho",
            "originalName": "Size Option",
            "summary": "Você pode escolher ser Grande em vez de Pequeno ou Médio.",
            "description": "Você pode escolher ser Grande em vez de Pequeno ou Médio.",
            "page": 76
          }
        ],
        "originalBloodlineTrait": "Limb Strength"
      },
      {
        "id": "rock-hide",
        "name": "Pele Rochosa",
        "originalName": "Rock Hide",
        "page": 76,
        "source": "Somnus Domina — Zagalhta's Exolunar Collection",
        "sourceId": "zagalhta-exolunar",
        "ability": "Constituição +1",
        "description": "Os sunlings de pele rochosa estão acostumados a ambientes hostis, como regiões de calor ou frio extremos. Sua pelagem evoluiu para um material áspero e rígido que funciona como uma camada adicional de proteção, fazendo armas comuns ricochetearem de forma quase anticlimática.",
        "bloodlineTrait": "Pele Rochosa",
        "traits": [
          {
            "id": "environment-resist",
            "name": "Resistência Ambiental",
            "originalName": "Environment Resist",
            "summary": "Você possui resistência a dano de frio ou fogo, à sua escolha quando recebe este traço. A escolha deve refletir seu ambiente nativo: frio para tundras e montanhas congeladas, ou fogo para desertos e paisagens vulcânicas.",
            "description": "Você possui resistência a dano de frio ou fogo, à sua escolha quando recebe este traço. A escolha deve refletir seu ambiente nativo: frio para tundras e montanhas congeladas, ou fogo para desertos e paisagens vulcânicas.",
            "page": 76
          },
          {
            "id": "rock-solid-fur",
            "name": "Pelagem Sólida como Rocha",
            "originalName": "Rock Solid Fur",
            "summary": "Sua pelagem é feita de um material surpreendentemente resistente que oferece proteção adicional contra dano físico. Sempre que sofrer dano contundente, perfurante ou cortante, reduza cada tipo de dano em um valor igual ao seu bônus de proficiência.",
            "description": "Sua pelagem é feita de um material surpreendentemente resistente que oferece proteção adicional contra dano físico. Sempre que sofrer dano contundente, perfurante ou cortante, reduza cada tipo de dano em um valor igual ao seu bônus de proficiência.",
            "page": 76
          }
        ],
        "originalBloodlineTrait": "Rock hide"
      }
    ]
  }
];
  const additionalByParent={
  "arhcoon": [
    {
      "id": "harmonious",
      "name": "Harmonioso",
      "originalName": "Harmonious",
      "page": 77,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Os harmoniosos são arhcoons cujo espírito encontrou um Ícone durante a vida após a morte anterior e recebeu sua bênção. Renascidos depois do contato com uma entidade tão pacífica, carregam consigo parte dessa capacidade de apaziguar os outros.",
      "bloodlineTrait": "Resistência Psíquica",
      "traits": [
        {
          "id": "icons-peaceful-nature",
          "name": "Natureza Pacífica do Ícone",
          "originalName": "Icon’s Peaceful Nature",
          "summary": "Quando uma criatura tentar, em um turno, escolher você como alvo de um efeito prejudicial, ela deve realizar um teste de resistência de Carisma com CD baseada em seu Carisma. Se falhar, não consegue realizar contra você o ataque ou efeito, que é desperdiçado, e não pode escolhê-lo como alvo de ataques ou efeitos nocivos pelo restante daquele turno. Você pode usar este traço no máximo uma vez por turno e um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Quando uma criatura tentar, em um turno, escolher você como alvo de um efeito prejudicial, ela deve realizar um teste de resistência de Carisma com CD baseada em seu Carisma. Se falhar, não consegue realizar contra você o ataque ou efeito, que é desperdiçado, e não pode escolhê-lo como alvo de ataques ou efeitos nocivos pelo restante daquele turno. Você pode usar este traço no máximo uma vez por turno e um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 77
        },
        {
          "id": "psychic-resistance",
          "name": "Resistência Psíquica",
          "originalName": "Psychic Resistance",
          "summary": "Você possui resistência a dano psíquico.",
          "description": "Você possui resistência a dano psíquico.",
          "page": 77
        },
        {
          "id": "tools-of-the-trade",
          "name": "Ferramentas do Ofício",
          "originalName": "Tools of the Trade",
          "summary": "Você é proficiente com Ferramentas de Funileiro.",
          "description": "Você é proficiente com Ferramentas de Funileiro.",
          "page": 77
        }
      ],
      "originalBloodlineTrait": "Psychic Resistance"
    },
    {
      "id": "quickswitch-arhcoon",
      "name": "Arhcoon de Troca Rápida",
      "originalName": "Quickswitch Arhcoon",
      "page": 77,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "A mente veloz e as mãos ágeis dos arhcoons são extremamente úteis em embarcações exolunares, onde se destacam como engenheiros e tripulantes de convés. Os arhcoons de Troca Rápida são quase irritantemente velozes, correndo de um lado para outro e conduzindo os demais com a mesma urgência. São menores que o arhcoon médio, uma consequência natural de sua velocidade e agilidade aprimoradas.",
      "bloodlineTrait": "Malandro Veloz",
      "traits": [
        {
          "id": "dart-scamp",
          "name": "Malandro Veloz",
          "originalName": "Dart Scamp",
          "summary": "Seu deslocamento-base aumenta em 3 metros, e você possui uma velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "description": "Seu deslocamento-base aumenta em 3 metros, e você possui uma velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "page": 77
        },
        {
          "id": "ride-on-delivery",
          "name": "Entrega de Carona",
          "originalName": "Ride-On Delivery",
          "summary": "Como uma ação bônus, você pode saltar sobre o corpo de uma criatura pelo menos uma categoria de tamanho maior que você e incentivá-la a se mover em direção a um ponto que possa ver. A criatura pode usar a reação para se deslocar até o próprio deslocamento em direção ao ponto, terminando em um espaço à escolha dela; todos os ataques de oportunidade feitos contra ela durante esse movimento têm desvantagem. Quando o movimento termina, você salta do corpo dela para um espaço desocupado adjacente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Como uma ação bônus, você pode saltar sobre o corpo de uma criatura pelo menos uma categoria de tamanho maior que você e incentivá-la a se mover em direção a um ponto que possa ver. A criatura pode usar a reação para se deslocar até o próprio deslocamento em direção ao ponto, terminando em um espaço à escolha dela; todos os ataques de oportunidade feitos contra ela durante esse movimento têm desvantagem. Quando o movimento termina, você salta do corpo dela para um espaço desocupado adjacente. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 77
        }
      ],
      "originalBloodlineTrait": "Dart Scamp"
    }
  ],
  "beast-tribe": [
    {
      "id": "pangolin-beast-tribe",
      "name": "Tribo Bestial do Pangolim",
      "originalName": "Pangolin Beast Tribe",
      "page": 78,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "A pele escamada e blindada da Tribo Bestial do Pangolim oferece abrigo, enquanto seu comportamento peculiar e pacífico costuma mantê-la longe de perigo. Esses indivíduos geralmente vivem junto de outros povos capazes de protegê-los como parte de uma comunidade e raramente preferem se isolar entre os seus. Em naves exolunares, são encontrados como auxiliares e trabalhadores de serviço, felizes em conhecer o universo em troca de trabalho honesto.",
      "bloodlineTrait": "Escavador ou Disposição Agradável",
      "traits": [
        {
          "id": "size-option",
          "name": "Opção de Tamanho",
          "originalName": "Size Option",
          "summary": "Se escolher o Traço de Legado Opções de Tamanho da Tribo Bestial, você pode escolher ser Pequeno.",
          "description": "Se escolher o Traço de Legado Opções de Tamanho da Tribo Bestial, você pode escolher ser Pequeno.",
          "page": 78
        },
        {
          "id": "digger",
          "name": "Escavador",
          "originalName": "Digger",
          "summary": "Você possui garras curvas excelentes para cavar, recebendo um deslocamento de escavação igual ao seu deslocamento-base.",
          "description": "Você possui garras curvas excelentes para cavar, recebendo um deslocamento de escavação igual ao seu deslocamento-base.",
          "page": 78
        },
        {
          "id": "pleasant-disposition",
          "name": "Disposição Agradável",
          "originalName": "Pleasant Disposition",
          "summary": "Você é proficiente na perícia Persuasão.",
          "description": "Você é proficiente na perícia Persuasão.",
          "page": 78
        },
        {
          "id": "shelled-body",
          "name": "Corpo Encouraçado",
          "originalName": "Shelled Body",
          "summary": "Você pode adicionar metade do seu bônus de proficiência à sua Classe de Armadura, a menos que esteja vestindo armadura média ou pesada.",
          "description": "Você pode adicionar metade do seu bônus de proficiência à sua Classe de Armadura, a menos que esteja vestindo armadura média ou pesada.",
          "page": 78
        }
      ],
      "originalBloodlineTrait": "Digger or Pleasant Disposition"
    },
    {
      "id": "exoprimate-tribe",
      "name": "Tribo Exoprimata",
      "originalName": "Exoprimate Tribe",
      "page": 78,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Altos e fortes, os exoprimatas são uma ramificação interestelar das tribos bestiais que partiu com os antigos elfos astrais. Sua relação com as tribos bestiais modernas é tênue e aparentemente não deriva das antigas maldições licantropas, mas eles possuem semelhanças suficientes para serem considerados parentes. Lembram grandes primatas, com corpos musculosos e pelagem escura.",
      "bloodlineTrait": "Rugido Valente",
      "traits": [
        {
          "id": "size-option",
          "name": "Opção de Tamanho",
          "originalName": "Size Option",
          "summary": "Se escolher o Traço de Legado Opções de Tamanho da Tribo Bestial, você pode escolher ser Grande.",
          "description": "Se escolher o Traço de Legado Opções de Tamanho da Tribo Bestial, você pode escolher ser Grande.",
          "page": 78
        },
        {
          "id": "brave-roar",
          "name": "Rugido Valente",
          "originalName": "Brave Roar",
          "summary": "Você pode usar uma ação para encerrar qualquer efeito que o esteja deixando Enfeitiçado ou Amedrontado, como se tivesse obtido sucesso no teste de resistência necessário para encerrar o efeito.",
          "description": "Você pode usar uma ação para encerrar qualquer efeito que o esteja deixando Enfeitiçado ou Amedrontado, como se tivesse obtido sucesso no teste de resistência necessário para encerrar o efeito.",
          "page": 78
        },
        {
          "id": "counter-grab",
          "name": "Contra-Agarrão",
          "originalName": "Counter-Grab",
          "summary": "Quando uma criatura realizar contra você um ataque de arma a partir de dentro do seu alcance, você pode usar sua reação para tentar Agarrá-la. Se vencer a disputa, o alvo fica Agarrado e sofre dano contundente igual a 1d10 + seu modificador de Força. Se ele for grande demais para ser agarrado por você, cause 1d10 adicional de dano em vez disso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Quando uma criatura realizar contra você um ataque de arma a partir de dentro do seu alcance, você pode usar sua reação para tentar Agarrá-la. Se vencer a disputa, o alvo fica Agarrado e sofre dano contundente igual a 1d10 + seu modificador de Força. Se ele for grande demais para ser agarrado por você, cause 1d10 adicional de dano em vez disso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 78
        },
        {
          "id": "strengthened",
          "name": "Fortalecido",
          "originalName": "Strengthened",
          "summary": "Você possui Especialização na perícia Atletismo.",
          "description": "Você possui Especialização na perícia Atletismo.",
          "page": 78
        }
      ],
      "originalBloodlineTrait": "Brave Roar"
    },
    {
      "id": "goat-beast-tribe",
      "name": "Tribo Bestial da Cabra",
      "originalName": "Goat Beast Tribe",
      "page": 78,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Cabeçudos e cautelosos, os membros da Tribo da Cabra são pacíficos e gostam de viajar lentamente pelo interior. Em geral permanecem entre os seus para evitar perigo, mas não rejeitam a cooperação com outras comunidades. Seus grandes chifres são o principal meio de autopreservação, usados para derrubar e subjugar ameaças.",
      "bloodlineTrait": "Escalador Equilibrado",
      "traits": [
        {
          "id": "balanced-climber",
          "name": "Escalador Equilibrado",
          "originalName": "Balanced Climber",
          "summary": "Você consegue manter o equilíbrio enquanto escala qualquer superfície com saliências de pelo menos cerca de 1,25 cm, podendo permanecer sobre apoios tão pequenos e realizar ações normalmente. Isso inclui pequenas reentrâncias em superfícies verticais ásperas. Você também possui deslocamento de escalada igual ao seu deslocamento-base.",
          "description": "Você consegue manter o equilíbrio enquanto escala qualquer superfície com saliências de pelo menos cerca de 1,25 cm, podendo permanecer sobre apoios tão pequenos e realizar ações normalmente. Isso inclui pequenas reentrâncias em superfícies verticais ásperas. Você também possui deslocamento de escalada igual ao seu deslocamento-base.",
          "page": 78
        },
        {
          "id": "horn-charge",
          "name": "Chifres e Investida",
          "originalName": "Horn & Charge",
          "summary": "Você pode fazer o traço Garras e Presas causar dano contundente. Quando atacar com ele depois de se deslocar pelo menos 4,5 metros, você possui vantagem no ataque. Se possuir vantagem em um ataque feito com Garras e Presas e acertar um alvo que não seja mais de uma categoria de tamanho maior que você, ele fica Caído.",
          "description": "Você pode fazer o traço Garras e Presas causar dano contundente. Quando atacar com ele depois de se deslocar pelo menos 4,5 metros, você possui vantagem no ataque. Se possuir vantagem em um ataque feito com Garras e Presas e acertar um alvo que não seja mais de uma categoria de tamanho maior que você, ele fica Caído.",
          "page": 78
        }
      ],
      "originalBloodlineTrait": "Balanced Climber"
    }
  ],
  "birdfolk": [
    {
      "id": "pechuin",
      "name": "Pechuin",
      "originalName": "Pechuin",
      "page": 79,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Os pechuin são povo-pássaro macio e incapaz de voar, uma espécie um tanto alienígena encontrada nas regiões gélidas de Somnus Domina e em grande número em Aethuan, onde quem atravessa a água possui vantagem natural. Suas penas e pele geralmente são negras no dorso e na parte superior e brancas no ventre, fornecendo camuflagem contra observadores acima da água enquanto nadam.",
      "bloodlineTrait": "Nadador sem Voo ou Resistência Oceânica",
      "traits": [
        {
          "id": "flightless-flapper",
          "name": "Nadador sem Voo",
          "originalName": "Flightless Flapper",
          "summary": "Você não possui o traço Voo do Povo-Pássaro; em vez disso, recebe deslocamento de natação igual ao seu deslocamento-base. Ao atravessar uma descida ou superfície escorregadia, pode deslizar, gastando apenas 30 cm de deslocamento para cada 60 cm percorridos.",
          "description": "Você não possui o traço Voo do Povo-Pássaro; em vez disso, recebe deslocamento de natação igual ao seu deslocamento-base. Ao atravessar uma descida ou superfície escorregadia, pode deslizar, gastando apenas 30 cm de deslocamento para cada 60 cm percorridos.",
          "page": 79
        },
        {
          "id": "freezing-feather",
          "name": "Pena Congelante",
          "originalName": "Freezing Feather",
          "summary": "Você pode conjurar a magia *cristal perfurante* uma vez por Descanso congelando e arremessando uma pena semelhante a gelo, sem gastar espaço de magia nem componentes. Ao conjurá-la desta forma, use Destreza, Inteligência ou Carisma como habilidade de conjuração. A magia é conjurada em um nível igual ao seu bônus de proficiência.",
          "description": "Você pode conjurar a magia *cristal perfurante* uma vez por Descanso congelando e arremessando uma pena semelhante a gelo, sem gastar espaço de magia nem componentes. Ao conjurá-la desta forma, use Destreza, Inteligência ou Carisma como habilidade de conjuração. A magia é conjurada em um nível igual ao seu bônus de proficiência.",
          "page": 79
        },
        {
          "id": "oceanic-resistance",
          "name": "Resistência Oceânica",
          "originalName": "Oceanic Resistance",
          "summary": "Você possui resistência a dano de frio e pode prender a respiração por até 1 hora.",
          "description": "Você possui resistência a dano de frio e pode prender a respiração por até 1 hora.",
          "page": 79
        }
      ],
      "originalBloodlineTrait": "Flightless Flapper or Oceanic Resistance"
    },
    {
      "id": "phoenix-feather",
      "name": "Pena de Fênix",
      "originalName": "Phoenix Feather",
      "page": 79,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Originários tanto das regiões desérticas de Somnus Domina quanto das áreas vulcânicas de Degozah, os povo-pássaro Pena de Fênix têm plumagem amarela e vermelha brilhante que emite calor suave constantemente. Acredita-se que descendam de povo-pássaro que carregava dentro de si um fragmento do Plano Elemental do Fogo. Essa linhagem é rara e seu poder flamejante costuma saltar várias gerações.",
      "bloodlineTrait": "Chama do Coração ou Resistência Infernal",
      "traits": [
        {
          "id": "heart-flame",
          "name": "Chama do Coração",
          "originalName": "Heart Flame",
          "summary": "Como uma ação bônus, você pode incendiar luminosamente suas penas, emitindo a partir de si 9 metros de luz plena e mais 9 metros de penumbra. O efeito termina se você ficar Incapacitado, ficar Inconsciente ou usar uma ação bônus para suprimi-lo.",
          "description": "Como uma ação bônus, você pode incendiar luminosamente suas penas, emitindo a partir de si 9 metros de luz plena e mais 9 metros de penumbra. O efeito termina se você ficar Incapacitado, ficar Inconsciente ou usar uma ação bônus para suprimi-lo.",
          "page": 79
        },
        {
          "id": "inferno-resistance",
          "name": "Resistência Infernal",
          "originalName": "Inferno Resistance",
          "summary": "Você possui resistência a dano de fogo.",
          "description": "Você possui resistência a dano de fogo.",
          "page": 79
        },
        {
          "id": "sacred-shield",
          "name": "Escudo Sagrado",
          "originalName": "Sacred Shield",
          "summary": "Você conhece a magia *repreensão infernal* e pode conjurá-la usando espaços de magia ou gastando um número de usos deste traço igual ao nível em que deseja conjurá-la, sem gastar espaço de magia nem componentes. Use Constituição ou Carisma como habilidade de conjuração ao conjurá-la desta forma. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência. Quando conjurar *repreensão infernal* com este traço em resposta a um dano que o reduziria a 0 pontos de vida, esse dano o reduz a 1 ponto de vida em vez disso, e você recebe pontos de vida temporários iguais à metade do dano causado pela magia.",
          "description": "Você conhece a magia *repreensão infernal* e pode conjurá-la usando espaços de magia ou gastando um número de usos deste traço igual ao nível em que deseja conjurá-la, sem gastar espaço de magia nem componentes. Use Constituição ou Carisma como habilidade de conjuração ao conjurá-la desta forma. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência. Quando conjurar *repreensão infernal* com este traço em resposta a um dano que o reduziria a 0 pontos de vida, esse dano o reduz a 1 ponto de vida em vez disso, e você recebe pontos de vida temporários iguais à metade do dano causado pela magia.",
          "page": 79
        }
      ],
      "originalBloodlineTrait": "Heart Flame or Inferno Resis-"
    }
  ],
  "capy-hado": [
    {
      "id": "flur-cadal",
      "name": "Flùr-cadal",
      "originalName": "Flùr-cadal",
      "page": 80,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Esses viajantes espaciais tranquilos geralmente possuem pelagem clara e desbotada, como se tivesse sido alvejada por exposição constante ao sol. Eles evoluíram para controlar seu campo gravitacional pessoal no espaço por força rotacional, rolando pelo vácuo com facilidade. São comuns em naves framebilt e de elfos astrais como tripulantes gerais, mas muitos também trabalham em naves-arca e colônias nas funções tradicionais dos capy’hado: hotéis, clínicas, fontes termais interestelares e outros negócios de lazer.",
      "bloodlineTrait": "Pulmões Profundos",
      "traits": [
        {
          "id": "deep-lungs",
          "name": "Pulmões Profundos",
          "originalName": "Deep Lungs",
          "summary": "Você é capaz de produzir oxigênio para si por até 8 horas enquanto estiver no vácuo, não necessitando respirar ar durante esse período no espaço.",
          "description": "Você é capaz de produzir oxigênio para si por até 8 horas enquanto estiver no vácuo, não necessitando respirar ar durante esse período no espaço.",
          "page": 80
        },
        {
          "id": "solar-rover",
          "name": "Andarilho Solar",
          "originalName": "Solar Rover",
          "summary": "Você possui uma velocidade de aceleração 0-G igual ao seu deslocamento-base, usada ao se enrolar como uma bola e se lançar através de ambientes de baixa gravidade. Quando realiza a ação Disparada em gravidade zero, recebe o dobro de deslocamento de aceleração 0-G que receberia de deslocamento normal. Além disso, no mesmo turno em que realiza Disparada, pode usar sua ação bônus para arremessar o corpo contra uma criatura a até 1,5 metro. O alvo deve realizar um teste de resistência de Destreza com CD baseada em sua Força ou Constituição. Se falhar, sofre 1d4 de dano contundente mais 1d4 de dano radiante, sendo cada dado multiplicado pelo seu bônus de proficiência. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Você possui uma velocidade de aceleração 0-G igual ao seu deslocamento-base, usada ao se enrolar como uma bola e se lançar através de ambientes de baixa gravidade. Quando realiza a ação Disparada em gravidade zero, recebe o dobro de deslocamento de aceleração 0-G que receberia de deslocamento normal. Além disso, no mesmo turno em que realiza Disparada, pode usar sua ação bônus para arremessar o corpo contra uma criatura a até 1,5 metro. O alvo deve realizar um teste de resistência de Destreza com CD baseada em sua Força ou Constituição. Se falhar, sofre 1d4 de dano contundente mais 1d4 de dano radiante, sendo cada dado multiplicado pelo seu bônus de proficiência. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 80
        },
        {
          "id": "vacuous-resistance",
          "name": "Resistência ao Vácuo",
          "originalName": "Vacuous Resistance",
          "summary": "Você possui resistência a dano de frio ou radiante, à sua escolha quando recebe este traço.",
          "description": "Você possui resistência a dano de frio ou radiante, à sua escolha quando recebe este traço.",
          "page": 80
        }
      ],
      "originalBloodlineTrait": "Deep Lungs"
    },
    {
      "id": "groumon",
      "name": "Groumon",
      "originalName": "Groumon",
      "page": 80,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Os groumon escavam a terra e constroem elaboradas casas subterrâneas formadas por cavidades ligadas por túneis. Sua pelagem tem coloração áspera entre cinza e marrom, e são especialistas em escapar de predadores e outras fontes de perigo.",
      "bloodlineTrait": "Escavador ou Sentido Sísmico",
      "traits": [
        {
          "id": "burrower",
          "name": "Escavador",
          "originalName": "Burrower",
          "summary": "Você possui deslocamento de escavação de 9 metros, podendo atravessar terra solta ou minerais macios. O túnel que deixa para trás se fecha conforme você passa. Quando escava para sair do alcance de uma criatura, ela possui desvantagem nos ataques de oportunidade realizados contra você.",
          "description": "Você possui deslocamento de escavação de 9 metros, podendo atravessar terra solta ou minerais macios. O túnel que deixa para trás se fecha conforme você passa. Quando escava para sair do alcance de uma criatura, ela possui desvantagem nos ataques de oportunidade realizados contra você.",
          "page": 80
        },
        {
          "id": "rock-fur",
          "name": "Pelagem Rochosa",
          "originalName": "Rock Fur",
          "summary": "Sua pelagem é mais áspera por ter se adaptado à escavação e ao atrito contra rocha. Quando for atingido por um ataque que cause dano perfurante, contundente ou cortante, pode usar sua reação para reduzir o dano sofrido em 1d10 + metade do seu nível total, com redução mínima de 2. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Sua pelagem é mais áspera por ter se adaptado à escavação e ao atrito contra rocha. Quando for atingido por um ataque que cause dano perfurante, contundente ou cortante, pode usar sua reação para reduzir o dano sofrido em 1d10 + metade do seu nível total, com redução mínima de 2. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 80
        },
        {
          "id": "tremorsense",
          "name": "Sentido Sísmico",
          "originalName": "Tremorsense",
          "summary": "Você possui Sentido Sísmico a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência.",
          "description": "Você possui Sentido Sísmico a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência.",
          "page": 80
        }
      ],
      "originalBloodlineTrait": "Burrower or Tremorsense"
    }
  ],
  "dragonkin": [
    {
      "id": "arconaut",
      "name": "Arconauta",
      "originalName": "Arconaut",
      "page": 81,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Esses dragonkin tocados pelos planos receberam um fragmento de luz do reino divino de Jalasaor através de seus ancestrais. Não estão presos à vontade do deus dos dragões bondosos, mas carregam um eco de sua compulsão em vigiar os céus iluminados. Essa inclinação leva alguns ao espaço, onde encontram muitas estrelas e céus ao mesmo tempo. Arconautas possuem escamas brancas vítreas, chifres semelhantes a uma coroa e asas de estrutura rígida, quase óssea, com penas cristalinas.",
      "bloodlineTrait": "Asas do Justiçador",
      "traits": [
        {
          "id": "celestial-arc",
          "name": "Arco Celestial",
          "originalName": "Celestial Arc",
          "summary": "Você pode canalizar energia celestial em seus golpes. Você conhece a magia *golpe radiante* e pode conjurá-la usando espaços de magia ou gastando um uso deste traço, sem espaço de magia nem componentes. Use Constituição ou Carisma como habilidade de conjuração desta forma. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Você pode canalizar energia celestial em seus golpes. Você conhece a magia *golpe radiante* e pode conjurá-la usando espaços de magia ou gastando um uso deste traço, sem espaço de magia nem componentes. Use Constituição ou Carisma como habilidade de conjuração desta forma. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 81
        },
        {
          "id": "justiciars-wings",
          "name": "Asas do Justiçador",
          "originalName": "Justiciar’s Wings",
          "summary": "Você possui um par de esplêndidas asas celestiais que lhe concede deslocamento de voo laborioso igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro desse valor. Se também escolher o Traço de Legado Asas, o voo laborioso torna-se um deslocamento de voo normal, e a aceleração 0-G passa a se basear nesse deslocamento de voo.",
          "description": "Você possui um par de esplêndidas asas celestiais que lhe concede deslocamento de voo laborioso igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro desse valor. Se também escolher o Traço de Legado Asas, o voo laborioso torna-se um deslocamento de voo normal, e a aceleração 0-G passa a se basear nesse deslocamento de voo.",
          "page": 81
        },
        {
          "id": "lunar-darkvision",
          "name": "Visão no Escuro Lunar",
          "originalName": "Lunar Darkvision",
          "summary": "Você possui Visão no Escuro a 18 metros, enxergando em penumbra como luz plena e em escuridão como penumbra. Se já possuir Visão no Escuro, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "description": "Você possui Visão no Escuro a 18 metros, enxergando em penumbra como luz plena e em escuridão como penumbra. Se já possuir Visão no Escuro, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "page": 81
        },
        {
          "id": "radiant-heritage",
          "name": "Herança Radiante",
          "originalName": "Radiant Heritage",
          "summary": "O tipo de sua herança dracônica é radiante.",
          "description": "O tipo de sua herança dracônica é radiante.",
          "page": 81
        }
      ],
      "originalBloodlineTrait": "Justiciar’s Wings"
    },
    {
      "id": "lungzai",
      "name": "Lungzai",
      "originalName": "Lungzai",
      "page": 81,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Uma espécie draconoide que constitui um dos povos dominantes de Degozah, mundo que conhece a existência de vida extraplanetária, mas ainda não domina por si só as viagens interestelares. Os lungzai são antigos aliados dos elfos astrais que salvaram o planeta de um ataque de Titã Exterior; desde então, uma parcela do povo atua ao lado dos elfos como conselheiros, soldados e suporte. Apesar da aparência dracônica e corpo muito mais serpentino que o dos dragonkin de Somnus Domina, são gentis e tradicionais. Seu traço mais notável é pairar e deslizar pelo ar graças a poderes psíquicos inatos.",
      "bloodlineTrait": "Sábio à Deriva",
      "traits": [
        {
          "id": "drifting-sage",
          "name": "Sábio à Deriva",
          "originalName": "Drifting Sage",
          "summary": "Você consegue sustentar naturalmente o corpo no ar, deslizando majestosamente como uma serpente. Como uma ação bônus, recebe deslocamento de voo pairado igual ao seu deslocamento-base, que permanece até o fim do seu próximo turno.",
          "description": "Você consegue sustentar naturalmente o corpo no ar, deslizando majestosamente como uma serpente. Como uma ação bônus, recebe deslocamento de voo pairado igual ao seu deslocamento-base, que permanece até o fim do seu próximo turno.",
          "page": 81
        },
        {
          "id": "serpents-heritage",
          "name": "Herança da Serpente",
          "originalName": "Serpent’s Heritage",
          "summary": "Sua herança dracônica remonta às antigas dietas dos lungzai, que consumiam misturas herbais poderosas para manter o corpo forte e resistente. O tipo de dano da sua herança é veneno, e você possui vantagem em testes de resistência para evitar ficar Envenenado.",
          "description": "Sua herança dracônica remonta às antigas dietas dos lungzai, que consumiam misturas herbais poderosas para manter o corpo forte e resistente. O tipo de dano da sua herança é veneno, e você possui vantagem em testes de resistência para evitar ficar Envenenado.",
          "page": 81
        },
        {
          "id": "wise-deacons-traits",
          "name": "Traços do Diácono Sábio",
          "originalName": "Wise Deacon’s Traits",
          "summary": "Você recebe automaticamente os Traços de Legado Armas Naturais e Cauda do dragonkin, e o alcance de ambos é 3 metros devido ao seu pescoço alongado. Ao usá-los nesse alcance, o tipo de dano é sempre perfurante. Você não pode escolher o Traço de Legado Asas do dragonkin, pois esta espécie nunca teve necessidade evolutiva de asas.",
          "description": "Você recebe automaticamente os Traços de Legado Armas Naturais e Cauda do dragonkin, e o alcance de ambos é 3 metros devido ao seu pescoço alongado. Ao usá-los nesse alcance, o tipo de dano é sempre perfurante. Você não pode escolher o Traço de Legado Asas do dragonkin, pois esta espécie nunca teve necessidade evolutiva de asas.",
          "page": 81
        }
      ],
      "originalBloodlineTrait": "Drifting Sage"
    },
    {
      "id": "wormhole-dragonkin",
      "name": "Dragonkin de Buraco de Minhoca",
      "originalName": "Wormhole Dragonkin",
      "page": 82,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "O alienígena dragonkin de buraco de minhoca consegue dobrar o espaço enquanto se move, surgindo de um ponto a outro com facilidade. Suas escamas são feitas do mesmo material rochoso negro-arroxeado de seus homônimos. Às vezes chamados de dragonkin de “dobra”, são raros, mas aparecem entre tripulações piratas e equipes de salvamento interestelar.",
      "bloodlineTrait": "Investida de Dobra",
      "traits": [
        {
          "id": "exolunar-adaptation",
          "name": "Adaptação Exolunar",
          "originalName": "Exolunar Adaptation",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e não precisa de ar para respirar no vácuo.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e não precisa de ar para respirar no vácuo.",
          "page": 82
        },
        {
          "id": "lunar-heritage",
          "name": "Herança Lunar",
          "originalName": "Lunar Heritage",
          "summary": "Sua herança dracônica descende de dragões de buraco de minhoca e o tipo de dano correspondente é força.",
          "description": "Sua herança dracônica descende de dragões de buraco de minhoca e o tipo de dano correspondente é força.",
          "page": 82
        },
        {
          "id": "warp-rush",
          "name": "Investida de Dobra",
          "originalName": "Warp Rush",
          "summary": "Você pode realizar Disparada como uma ação bônus. Ao fazê-lo, recebe um deslocamento de teleporte igual ao seu deslocamento-base, aplicável tanto ao deslocamento restante quanto ao deslocamento adicional da Disparada, até o fim do turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Também pode gastar três usos de uma só vez para produzir os efeitos da magia *transmissão* como uma ação bônus.",
          "description": "Você pode realizar Disparada como uma ação bônus. Ao fazê-lo, recebe um deslocamento de teleporte igual ao seu deslocamento-base, aplicável tanto ao deslocamento restante quanto ao deslocamento adicional da Disparada, até o fim do turno. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência. Também pode gastar três usos de uma só vez para produzir os efeitos da magia *transmissão* como uma ação bônus.",
          "page": 82
        }
      ],
      "originalBloodlineTrait": "Warp Rush"
    }
  ],
  "dwarf": [
    {
      "id": "engine-dwarf",
      "name": "Anão de Motor",
      "originalName": "Engine Dwarf",
      "page": 82,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Expostos por gerações aos ambientes quentes das salas de máquinas de naves, esses anões se acostumaram aos aspectos mais perigosos de combustíveis e maquinário. Conseguem canalizar chamas como extensão do corpo, e seu suor possui uma propriedade incomum capaz de apagar fogo vivo instantaneamente. São considerados descendentes de anões vulcânicos que redirecionaram seus talentos para máquinas e combustível.",
      "bloodlineTrait": "Resistência a Queimaduras",
      "traits": [
        {
          "id": "burn-resistance",
          "name": "Resistência a Queimaduras",
          "originalName": "Burn Resistance",
          "summary": "Você possui resistência a dano de fogo e é imune a ficar Incendiado ou em chamas.",
          "description": "Você possui resistência a dano de fogo e é imune a ficar Incendiado ou em chamas.",
          "page": 82
        },
        {
          "id": "engine-rev",
          "name": "Acelerar o Motor",
          "originalName": "Engine Rev",
          "summary": "Você pode conjurar a magia *golpe incendiário* uma vez por Descanso, sem gastar espaço de magia nem componentes materiais. Ao conjurá-la desta forma, pode usar Constituição, Inteligência ou Carisma como habilidade de conjuração, e a magia é conjurada em um nível igual ao seu bônus de proficiência.",
          "description": "Você pode conjurar a magia *golpe incendiário* uma vez por Descanso, sem gastar espaço de magia nem componentes materiais. Ao conjurá-la desta forma, pode usar Constituição, Inteligência ou Carisma como habilidade de conjuração, e a magia é conjurada em um nível igual ao seu bônus de proficiência.",
          "page": 82
        },
        {
          "id": "hardened-hide",
          "name": "Pele Endurecida",
          "originalName": "Hardened Hide",
          "summary": "Sempre que sofrer dano contundente, perfurante ou cortante, reduza cada tipo de dano em um valor igual ao seu bônus de proficiência.",
          "description": "Sempre que sofrer dano contundente, perfurante ou cortante, reduza cada tipo de dano em um valor igual ao seu bônus de proficiência.",
          "page": 82
        }
      ],
      "originalBloodlineTrait": "Burn Resistance"
    },
    {
      "id": "fortech-dwarf",
      "name": "Anão de Fortech",
      "originalName": "Fortech Dwarf",
      "page": 82,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Os anões de Fortech, últimos sobreviventes de um planeta destruído há muito tempo, são os criadores e governantes da imensa colônia espacial Fortech Syncrius. Foram os primeiros a descobrir a tecnologia que evoluiria para os geradores de assinatura de dobra e, por isso, são responsáveis pela viabilização das viagens interestelares de espaço profundo.",
      "bloodlineTrait": "Navegador Lunar ou Resistência Espacial",
      "traits": [
        {
          "id": "moon-navigator",
          "name": "Navegador Lunar",
          "originalName": "Moon Navigator",
          "summary": "Você possui Especialização na perícia Sobrevivência.",
          "description": "Você possui Especialização na perícia Sobrevivência.",
          "page": 82
        },
        {
          "id": "spatial-resistance",
          "name": "Resistência Espacial",
          "originalName": "Spatial Resistance",
          "summary": "Você possui resistência a dano de força.",
          "description": "Você possui resistência a dano de força.",
          "page": 82
        },
        {
          "id": "warp-step",
          "name": "Passo de Dobra",
          "originalName": "Warp Step",
          "summary": "Como uma ação bônus, você pode teleportar-se para um espaço desocupado que possa ver a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Depois disso, você possui resistência a todo dano até o início do seu próximo turno. Você pode fazer isso duas vezes por Descanso.",
          "description": "Como uma ação bônus, você pode teleportar-se para um espaço desocupado que possa ver a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Depois disso, você possui resistência a todo dano até o início do seu próximo turno. Você pode fazer isso duas vezes por Descanso.",
          "page": 82
        }
      ],
      "originalBloodlineTrait": "Moon Navigator or Spatial Resistance"
    }
  ],
  "elf": [
    {
      "id": "belt-elf",
      "name": "Elfo do Cinturão",
      "originalName": "Belt Elf",
      "page": 83,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Elfos viajantes espaciais nascidos principalmente no vazio. São resultado de milhares de gerações que passaram mais tempo no cosmos do que em planetas ou grandes colônias e aprenderam a reproduzir ao redor do corpo as condições do vácuo, permitindo flutuar até sob gravidade. Recebem o nome de elfos do cinturão porque costumam criar pequenas comunidades em planetoides com atmosfera e asteroides de cinturões de detritos.",
      "bloodlineTrait": "Adepto do Espaço",
      "traits": [
        {
          "id": "thought",
          "name": "Mais Leve que o Pensamento",
          "originalName": "Thought",
          "summary": "Como uma ação bônus em seu turno, você pode fazer a gravidade ao redor do corpo se curvar e enfraquecer brevemente, recebendo deslocamento de voo pairado igual ao seu deslocamento-base até o início do seu próximo turno. No início do próximo turno, pode usar sua reação para manter o efeito até o início do turno seguinte, repetindo esse processo sucessivamente.",
          "description": "Como uma ação bônus em seu turno, você pode fazer a gravidade ao redor do corpo se curvar e enfraquecer brevemente, recebendo deslocamento de voo pairado igual ao seu deslocamento-base até o início do seu próximo turno. No início do próximo turno, pode usar sua reação para manter o efeito até o início do turno seguinte, repetindo esse processo sucessivamente.",
          "page": 83
        },
        {
          "id": "space-adept",
          "name": "Adepto do Espaço",
          "originalName": "Space Adept",
          "summary": "Você conhece e pode conjurar o truque *respiração exterior*, podendo conjurá-lo apenas sobre si mesmo como uma reação ao entrar em um ambiente sem ar. Além disso, possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "description": "Você conhece e pode conjurar o truque *respiração exterior*, podendo conjurá-lo apenas sobre si mesmo como uma reação ao entrar em um ambiente sem ar. Além disso, possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "page": 83
        },
        {
          "id": "starlight-strike",
          "name": "Golpe de Luz Estelar",
          "originalName": "Starlight Strike",
          "summary": "Quando acertar uma criatura com um ataque de arma, você pode causar 1d8 + seu nível total de dano radiante adicional nesse ataque. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Quando acertar uma criatura com um ataque de arma, você pode causar 1d8 + seu nível total de dano radiante adicional nesse ataque. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 83
        }
      ],
      "originalBloodlineTrait": "Space Adept"
    },
    {
      "id": "neoastral-elf",
      "name": "Elfo Neoastral",
      "originalName": "Neoastral Elf",
      "page": 83,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Uma ramificação dos elfos astrais que partiram para o espaço exolunar há muito tempo. Elfos neoastrais são praticamente indistinguíveis dos astrais, mas seus dons do vazio evoluíram em outra direção. Conseguem manipular forças gravitacionais, atravessar vácuos com mais facilidade e alterar a pressão ao redor do corpo para repelir forças invisíveis que os atinjam.",
      "bloodlineTrait": "Caminhante Estelar ou Resistência à Pressão",
      "traits": [
        {
          "id": "gravity-shield",
          "name": "Escudo Gravitacional",
          "originalName": "Gravity Shield",
          "summary": "Quando for atingido por um ataque à distância, você pode usar sua reação para manipular a gravidade e tentar deter o ataque. Role um d20 e substitua por esse resultado o d20 da jogada de ataque que o atingiu, possivelmente alterando o resultado. Depois disso, ataques à distância feitos contra você até o fim daquele turno possuem desvantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Quando for atingido por um ataque à distância, você pode usar sua reação para manipular a gravidade e tentar deter o ataque. Role um d20 e substitua por esse resultado o d20 da jogada de ataque que o atingiu, possivelmente alterando o resultado. Depois disso, ataques à distância feitos contra você até o fim daquele turno possuem desvantagem. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 83
        },
        {
          "id": "pressure-resistance",
          "name": "Resistência à Pressão",
          "originalName": "Pressure Resistance",
          "summary": "Você possui resistência a dano de força e a dano causado por queda.",
          "description": "Você possui resistência a dano de força e a dano causado por queda.",
          "page": 83
        },
        {
          "id": "starstepper",
          "name": "Caminhante Estelar",
          "originalName": "Starstepper",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e não precisa de ar para respirar no vácuo.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e não precisa de ar para respirar no vácuo.",
          "page": 83
        }
      ],
      "originalBloodlineTrait": "Starstepper or Pressure Resistance"
    }
  ],
  "enaretos": [
    {
      "id": "cosmic",
      "name": "Cósmico",
      "originalName": "Cosmic",
      "page": 84,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "O poder cósmico dos enáretos adapta-se e floresce no espaço exolunar, permitindo refinar luz radiante pura em uma força destrutiva e absorver a energia canalizada. Eles também conseguem criar caminhos sobrenaturais através do espaço físico e teleportar-se quase à vontade.",
      "bloodlineTrait": "Raio Sagrado",
      "traits": [
        {
          "id": "celestial-shunt",
          "name": "Desvio Celestial",
          "originalName": "Celestial Shunt",
          "summary": "Como uma ação bônus, você pode conceder a si mesmo deslocamento de teleporte igual ao seu deslocamento-base até o fim do turno. Esse efeito exige gestos físicos e não pode ser gerado enquanto você estiver Impedido. Se usar esta ação em um ambiente de gravidade zero, pode realizar Disparada como parte da mesma ação bônus.",
          "description": "Como uma ação bônus, você pode conceder a si mesmo deslocamento de teleporte igual ao seu deslocamento-base até o fim do turno. Esse efeito exige gestos físicos e não pode ser gerado enquanto você estiver Impedido. Se usar esta ação em um ambiente de gravidade zero, pode realizar Disparada como parte da mesma ação bônus.",
          "page": 84
        },
        {
          "id": "cosmic-wrath",
          "name": "Ira Cósmica",
          "originalName": "Cosmic Wrath",
          "summary": "Quando obtiver um acerto crítico, cause 1d10 de dano radiante adicional à criatura e recupere pontos de vida iguais ao dano radiante causado por aquele ataque.",
          "description": "Quando obtiver um acerto crítico, cause 1d10 de dano radiante adicional à criatura e recupere pontos de vida iguais ao dano radiante causado por aquele ataque.",
          "page": 84
        },
        {
          "id": "sacred-bolt",
          "name": "Raio Sagrado",
          "originalName": "Sacred Bolt",
          "summary": "Você aprende a magia *chama sagrada* e pode conjurá-la como uma ação bônus.",
          "description": "Você aprende a magia *chama sagrada* e pode conjurá-la como uma ação bônus.",
          "page": 84
        }
      ],
      "originalBloodlineTrait": "Sacred Bolt"
    },
    {
      "id": "leadership",
      "name": "Liderança",
      "originalName": "Leadership",
      "page": 84,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria",
      "description": "Nascidos com impulso para conduzir os outros à grandeza, os enáretos da Liderança pronunciam ordens capazes de fortalecer a determinação dos companheiros, exibindo uma autoridade celestial que beira o sobrenatural. Frequentemente possuem pele vermelho-escura com marcas brancas marcantes e asas elaboradas, embora de forma tradicional, feitas de energia celestial dourada.",
      "bloodlineTrait": "Determinação Endireitada",
      "traits": [
        {
          "id": "divine-order",
          "name": "Ordem Divina",
          "originalName": "Divine Order",
          "summary": "Quando outra criatura a até 18 metros falhar em uma jogada de ataque, teste de atributo ou teste de resistência e o d20 determinante tiver resultado 10 ou menor, você pode emitir uma ordem imbuída de poder divino. A criatura rola 1d20 + seu modificador de Carisma e usa esse resultado no lugar da jogada que falhou, possivelmente alterando o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Quando outra criatura a até 18 metros falhar em uma jogada de ataque, teste de atributo ou teste de resistência e o d20 determinante tiver resultado 10 ou menor, você pode emitir uma ordem imbuída de poder divino. A criatura rola 1d20 + seu modificador de Carisma e usa esse resultado no lugar da jogada que falhou, possivelmente alterando o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 84
        },
        {
          "id": "fullness-of-spirit",
          "name": "Plenitude de Espírito",
          "originalName": "Fullness of Spirit",
          "summary": "Você possui Especialização em uma perícia baseada em Carisma à sua escolha.",
          "description": "Você possui Especialização em uma perícia baseada em Carisma à sua escolha.",
          "page": 84
        },
        {
          "id": "straightened-edge",
          "name": "Determinação Endireitada",
          "originalName": "Straightened Edge",
          "summary": "Como uma ação, você pode encerrar um efeito que esteja deixando você Amedrontado como se tivesse obtido sucesso em um teste de resistência contra ele.",
          "description": "Como uma ação, você pode encerrar um efeito que esteja deixando você Amedrontado como se tivesse obtido sucesso em um teste de resistência contra ele.",
          "page": 84
        }
      ],
      "originalBloodlineTrait": "Straightened Edge"
    }
  ],
  "feralus": [
    {
      "id": "degopath",
      "name": "Degopata",
      "originalName": "Degopath",
      "page": 85,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Feralus de uma linhagem específica de Degozah cruzaram-se no passado com yuamorianos na tentativa de incorporar poderes infernais aos próprios genes. Seus descendentes são uma variante tocada pelos planos e pelos ínferos, chamada degopata. Inicialmente recebidos com hostilidade, esses felinos infernais foram aceitos gradualmente em sociedade e demonstraram ser muito mais do que as intenções sombrias de seus ancestrais.",
      "bloodlineTrait": "Resistência Infernal e Sangue Misto",
      "traits": [
        {
          "id": "mixed-blood",
          "name": "Sangue Misto",
          "originalName": "Mixed Blood",
          "summary": "Além de seus outros tipos de criatura, você também é considerado um ínfero (demônio). Você também pode escolher ser Grande; se usar esta opção, a escolha de tamanho é feita ao receber este traço.",
          "description": "Além de seus outros tipos de criatura, você também é considerado um ínfero (demônio). Você também pode escolher ser Grande; se usar esta opção, a escolha de tamanho é feita ao receber este traço.",
          "page": 85
        },
        {
          "id": "fiends-feline-fury",
          "name": "Fúria Felina Infernal",
          "originalName": "Fiend’s Feline Fury",
          "summary": "Quando fizer um ataque de arma, teste de atributo ou teste de resistência baseado em Força, você pode rolar 1d6 e adicionar o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Quando fizer um ataque de arma, teste de atributo ou teste de resistência baseado em Força, você pode rolar 1d6 e adicionar o resultado. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 85
        },
        {
          "id": "fiends-resistance",
          "name": "Resistência Infernal",
          "originalName": "Fiend’s Resistance",
          "summary": "Você possui resistência a dano ácido ou psíquico, à sua escolha quando recebe este traço.",
          "description": "Você possui resistência a dano ácido ou psíquico, à sua escolha quando recebe este traço.",
          "page": 85
        }
      ],
      "originalBloodlineTrait": "Fiend’s Resistance & Mixed Blood"
    },
    {
      "id": "gravitaxia",
      "name": "Gravitaxia",
      "originalName": "Gravitaxia",
      "page": 85,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "As origens dos gravitaxia são desconhecidas. Eles apareceram em embarcações exolunares como supostos sabotadores antes que as tripulações aprendessem a conviver com sua presença. Esses feralus estranhos normalmente não conhecem a própria origem e afirmam ter surgido enquanto “brincavam” com viajantes espaciais, antes de desenvolver uma identidade estável. Possuem aparência alienígena, pele semelhante a um céu noturno ilusório e olhos luminosos inquietantes, estando entre os povos exolunares mais incomuns em corpo e comportamento.",
      "bloodlineTrait": "Resiliência do Ego e Sangue Misto",
      "traits": [
        {
          "id": "mixed-blood",
          "name": "Sangue Misto",
          "originalName": "Mixed Blood",
          "summary": "Além de seus outros tipos de criatura, você também é considerado uma Aberração.",
          "description": "Além de seus outros tipos de criatura, você também é considerado uma Aberração.",
          "page": 85
        },
        {
          "id": "aberrant-nature",
          "name": "Natureza Aberrante",
          "originalName": "Aberrant Nature",
          "summary": "Você não precisa de ar nem alimento para sobreviver. Além de Humanoide e Feralus, também é considerado uma Aberração. Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base.",
          "description": "Você não precisa de ar nem alimento para sobreviver. Além de Humanoide e Feralus, também é considerado uma Aberração. Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base.",
          "page": 85
        },
        {
          "id": "ego-resilience",
          "name": "Resiliência do Ego",
          "originalName": "Ego Resilience",
          "summary": "Você possui resistência a dano psíquico. Quando sofrer dano psíquico, pode usar sua reação para tornar-se imune a esse tipo de dano até o fim daquele turno.",
          "description": "Você possui resistência a dano psíquico. Quando sofrer dano psíquico, pode usar sua reação para tornar-se imune a esse tipo de dano até o fim daquele turno.",
          "page": 85
        },
        {
          "id": "light-ray-trace",
          "name": "Rastro de Raio Luminoso",
          "originalName": "Light Ray Trace",
          "summary": "Como uma ação bônus, você pode ficar invisível até o início do seu próximo turno. Então pode usar novamente sua ação bônus, sem gastar outro uso do traço, para estender a invisibilidade até o início do turno seguinte, repetindo o processo. Se realizar um ataque em um turno enquanto estiver invisível desta forma, a invisibilidade termina no fim daquele turno. Você pode ativar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Como uma ação bônus, você pode ficar invisível até o início do seu próximo turno. Então pode usar novamente sua ação bônus, sem gastar outro uso do traço, para estender a invisibilidade até o início do turno seguinte, repetindo o processo. Se realizar um ataque em um turno enquanto estiver invisível desta forma, a invisibilidade termina no fim daquele turno. Você pode ativar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 85
        }
      ],
      "originalBloodlineTrait": "Ego Resilience & Mixed Blood"
    }
  ],
  "firbolg": [
    {
      "id": "overgrowth-firbolg",
      "name": "Firbolg do Crescimento Exuberante",
      "originalName": "Overgrowth Firbolg",
      "page": 86,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Alguns firbolgs escutam os sussurros de plantas e musgos e cuidam deles da mesma forma que os instintos de seus parentes terrestres os levariam a cuidar de animais. Esses firbolgs compreendem a flora naturalmente, e seus corpos exibem grossas áreas verdes de pelagem semelhante a musgo.",
      "bloodlineTrait": "Resistência a Veneno",
      "traits": [
        {
          "id": "venom-resistance",
          "name": "Resistência a Veneno",
          "originalName": "Venom Resistance",
          "summary": "Você possui resistência a dano de veneno e vantagem em testes de resistência feitos para evitar ficar Envenenado.",
          "description": "Você possui resistência a dano de veneno e vantagem em testes de resistência feitos para evitar ficar Envenenado.",
          "page": 86
        },
        {
          "id": "vine-grasp",
          "name": "Agarre de Vinhas",
          "originalName": "Vine Grasp",
          "summary": "Como uma ação bônus, você pode fazer uma gavinha retorcida de vinhas brotar de um ponto no chão que possa ver a até 18 metros ou se projetar do seu próprio corpo. A gavinha ataca um alvo à sua escolha a até 3 metros do ponto de origem, realizando contra ele um ataque de arma corpo a corpo e usando Força, Constituição ou Carisma para determinar o bônus de ataque e dano. Se acertar, causa 2d6 de dano contundente e reduz o deslocamento do alvo a 0 até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Como uma ação bônus, você pode fazer uma gavinha retorcida de vinhas brotar de um ponto no chão que possa ver a até 18 metros ou se projetar do seu próprio corpo. A gavinha ataca um alvo à sua escolha a até 3 metros do ponto de origem, realizando contra ele um ataque de arma corpo a corpo e usando Força, Constituição ou Carisma para determinar o bônus de ataque e dano. Se acertar, causa 2d6 de dano contundente e reduz o deslocamento do alvo a 0 até o início do seu próximo turno. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 86
        }
      ],
      "originalBloodlineTrait": "Venom Resistance",
      "landBlessingSpells": {
        "cantrip": null,
        "level1": "Emaranhar",
        "level2": "Flecha Ácida",
        "level3": "Falar Com Plantas"
      }
    },
    {
      "id": "void-shepherd-firbolg",
      "name": "Firbolg Pastor do Vazio",
      "originalName": "Void Shepherd Firbolg",
      "page": 86,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Os confins do espaço exolunar são explorados pelos sempre nômades firbolgs Pastores do Vazio, que possuem pele cinza salpicada de pontos azuis ou vermelhos. Esses gigantes astrais, assim como firbolgs comuns, não possuem origem clara além de sua ligação com gigantes. São exploradores em busca de novas fronteiras e também pastores responsáveis por animais exolunares a bordo de muitas naves-colônia.",
      "bloodlineTrait": "Viajante Espacial",
      "traits": [
        {
          "id": "spacefarer",
          "name": "Viajante Espacial",
          "originalName": "Spacefarer",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e consegue prender a respiração por até uma hora no vácuo.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e consegue prender a respiração por até uma hora no vácuo.",
          "page": 86
        },
        {
          "id": "sun-resistance",
          "name": "Resistência Solar",
          "originalName": "Sun Resistance",
          "summary": "Você possui resistência a dano radiante.",
          "description": "Você possui resistência a dano radiante.",
          "page": 86
        }
      ],
      "originalBloodlineTrait": "Spacefarer",
      "landBlessingSpells": {
        "cantrip": null,
        "level1": "Zona Antigravidade",
        "level2": "Estase",
        "level3": "Propulsão"
      }
    }
  ],
  "flooflin": [
    {
      "id": "lowbell-flooflin",
      "name": "Flooflin Lowbell",
      "originalName": "Lowbell Flooflin",
      "page": 87,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Os Lowbell se originaram na Colônia Scuff, onde sua sociedade ocupava uma ilha de detritos próxima a uma cratera que rugia eternamente e transbordava poder celestial. Eles evoluíram para resistir aos efeitos destrutivos desse som sobre os ouvidos e para atravessar o espaço com relativa facilidade.",
      "bloodlineTrait": "Ouvidos Protegidos ou Saltador Espacial",
      "traits": [
        {
          "id": "exolunar-shocksprint",
          "name": "Arrancada de Choque Exolunar",
          "originalName": "Exolunar Shocksprint",
          "summary": "Como uma ação, você cria ao redor do corpo um campo gravitacional por 1 minuto que reforça seus movimentos. Durante esse período, você não sofre penalidades ao atravessar terreno difícil, e seus ataques, testes e testes de resistência baseados em Força ou Destreza não podem ter desvantagem. Enquanto estiver nesse estado, ao realizar Disparada você também pode Desengajar, e vice-versa. Você pode usar este traço uma vez por Descanso.",
          "description": "Como uma ação, você cria ao redor do corpo um campo gravitacional por 1 minuto que reforça seus movimentos. Durante esse período, você não sofre penalidades ao atravessar terreno difícil, e seus ataques, testes e testes de resistência baseados em Força ou Destreza não podem ter desvantagem. Enquanto estiver nesse estado, ao realizar Disparada você também pode Desengajar, e vice-versa. Você pode usar este traço uma vez por Descanso.",
          "page": 87
        },
        {
          "id": "protected-ears",
          "name": "Ouvidos Protegidos",
          "originalName": "Protected Ears",
          "summary": "Você possui resistência a dano trovejante.",
          "description": "Você possui resistência a dano trovejante.",
          "page": 87
        },
        {
          "id": "space-hopper",
          "name": "Saltador Espacial",
          "originalName": "Space Hopper",
          "summary": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base. Se tiver uma superfície da qual possa se impulsionar quando começar a se mover em gravidade zero, todo deslocamento em linha reta consome apenas 30 cm de movimento para cada 60 cm percorridos.",
          "description": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base. Se tiver uma superfície da qual possa se impulsionar quando começar a se mover em gravidade zero, todo deslocamento em linha reta consome apenas 30 cm de movimento para cada 60 cm percorridos.",
          "page": 87
        }
      ],
      "originalBloodlineTrait": "Protected Ears or Space Hopper"
    },
    {
      "id": "sunhare-flooflin",
      "name": "Flooflin Lebre Solar",
      "originalName": "Sunhare Flooflin",
      "page": 87,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "As Lebres Solares possuem pelagem de cores vivas, geralmente avermelhada ou alaranjada. Ela é quente ao toque, e esses flooflins conseguem conjurar calor e chamas à vontade. Esse poder foi adquirido pela exposição a diversas estrelas ao longo das viagens exolunares de seus ancestrais.",
      "bloodlineTrait": "Resistência ao Fogo ou Conjurador de Luz",
      "traits": [
        {
          "id": "fire-resistance",
          "name": "Resistência ao Fogo",
          "originalName": "Fire Resistance",
          "summary": "Você possui resistência a dano de fogo.",
          "description": "Você possui resistência a dano de fogo.",
          "page": 87
        },
        {
          "id": "lightcaster",
          "name": "Conjurador de Luz",
          "originalName": "Lightcaster",
          "summary": "Você pode conjurar o truque *luz* à vontade como uma ação bônus, usando Destreza, Inteligência ou Carisma como habilidade de conjuração.",
          "description": "Você pode conjurar o truque *luz* à vontade como uma ação bônus, usando Destreza, Inteligência ou Carisma como habilidade de conjuração.",
          "page": 87
        },
        {
          "id": "sun-rider-kick",
          "name": "Chute do Cavaleiro Solar",
          "originalName": "Sun Rider Kick",
          "summary": "Quando usar seu Salto Lunar, você pode escolher aterrissar em uma explosão de fogo e luz. Cada criatura adjacente ao espaço em que aterrissar deve realizar um teste de resistência de Destreza, com CD baseada em Destreza, Constituição ou Carisma. Cada criatura que falhar sofre dano de fogo igual a 1d10 + seu nível.",
          "description": "Quando usar seu Salto Lunar, você pode escolher aterrissar em uma explosão de fogo e luz. Cada criatura adjacente ao espaço em que aterrissar deve realizar um teste de resistência de Destreza, com CD baseada em Destreza, Constituição ou Carisma. Cada criatura que falhar sofre dano de fogo igual a 1d10 + seu nível.",
          "page": 87
        }
      ],
      "originalBloodlineTrait": "Fire Resistance or Lightcaster"
    }
  ],
  "framebilt": [
    {
      "id": "frm07-explorer",
      "name": "FRM07 Explorador",
      "originalName": "FRM07 Explorer",
      "page": 87,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Esses modelos framebilt são projetados para deslocamento veloz, retransmissão e exploração. Seus corpos possuem vários motores de propulsão integrados, permitindo aumentar a velocidade e atravessar rapidamente o ar ou ambientes de gravidade zero.",
      "bloodlineTrait": "",
      "traits": [
        {
          "id": "battle-ready",
          "name": "Pronto para a Batalha",
          "originalName": "Battle Ready",
          "summary": "Você não pode ser Surpreendido em combate e pode adicionar seu bônus de proficiência aos testes de Iniciativa.",
          "description": "Você não pode ser Surpreendido em combate e pode adicionar seu bônus de proficiência aos testes de Iniciativa.",
          "page": 87
        },
        {
          "id": "high-gain-gear",
          "name": "Engrenagem de Alto Ganho",
          "originalName": "High-Gain Gear",
          "summary": "Você pode acionar foguetes integrados ao seu corpo para se mover mais rápido. Este traço oferece as seguintes opções: realizar Disparada como uma ação bônus; conceder a si mesmo, como ação bônus, deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso; ou gastar um uso deste traço para dobrar seu deslocamento. Quando usar qualquer uma dessas opções, o efeito termina no início do seu próximo turno, a menos que você o use novamente para estendê-lo. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Você pode acionar foguetes integrados ao seu corpo para se mover mais rápido. Este traço oferece as seguintes opções: realizar Disparada como uma ação bônus; conceder a si mesmo, como ação bônus, deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso; ou gastar um uso deste traço para dobrar seu deslocamento. Quando usar qualquer uma dessas opções, o efeito termina no início do seu próximo turno, a menos que você o use novamente para estendê-lo. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 87
        }
      ]
    },
    {
      "id": "frm08-navigator",
      "name": "FRM08 Navegador",
      "originalName": "FRM08 Navigator",
      "page": 88,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Framebilts FRM08 são construídos para sobreviver em ambientes hostis através de adaptação. São empregados em viagens, navegação e observação do entorno de seus aliados. Permanecem atentos e são difíceis de apanhar desprevenidos.",
      "bloodlineTrait": "Visão de Sensores",
      "traits": [
        {
          "id": "navigational-experience",
          "name": "Experiência de Navegação",
          "originalName": "Navigational Experience",
          "summary": "Escolha Medicina, Natureza, Percepção ou Sobrevivência. Você possui Especialização na perícia escolhida e também é proficiente com Ferramentas de Cartógrafo.",
          "description": "Escolha Medicina, Natureza, Percepção ou Sobrevivência. Você possui Especialização na perícia escolhida e também é proficiente com Ferramentas de Cartógrafo.",
          "page": 88
        },
        {
          "id": "sensorsight",
          "name": "Visão de Sensores",
          "originalName": "Sensorsight",
          "summary": "Você recebe os benefícios do Traço de Legado Visão de Sensores do framebilt. Se também escolher separadamente esse Traço de Legado, os benefícios se acumulam, concedendo Visão às Cegas a uma distância igual a 6 metros multiplicados pelo seu bônus de proficiência.",
          "description": "Você recebe os benefícios do Traço de Legado Visão de Sensores do framebilt. Se também escolher separadamente esse Traço de Legado, os benefícios se acumulam, concedendo Visão às Cegas a uma distância igual a 6 metros multiplicados pelo seu bônus de proficiência.",
          "page": 88
        },
        {
          "id": "vaccination",
          "name": "Vacinação",
          "originalName": "Vaccination",
          "summary": "Como uma ação bônus, você pode aplicar rapidamente uma injeção ou medicamento em si mesmo ou em outra criatura ao alcance. Por 10 minutos, o alvo possui vantagem em testes de resistência para evitar ficar Envenenado, Paralisado ou Lento. Se o efeito que causou uma dessas condições exigiu um teste de resistência, o alvo repete imediatamente esse teste com vantagem e encerra o efeito em caso de sucesso. Além disso, uma criatura vacinada desta forma recebe pontos de vida temporários iguais a 1d6 + seu nível. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Como uma ação bônus, você pode aplicar rapidamente uma injeção ou medicamento em si mesmo ou em outra criatura ao alcance. Por 10 minutos, o alvo possui vantagem em testes de resistência para evitar ficar Envenenado, Paralisado ou Lento. Se o efeito que causou uma dessas condições exigiu um teste de resistência, o alvo repete imediatamente esse teste com vantagem e encerra o efeito em caso de sucesso. Além disso, uma criatura vacinada desta forma recebe pontos de vida temporários iguais a 1d6 + seu nível. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 88
        }
      ],
      "originalBloodlineTrait": "Sensorsight"
    }
  ],
  "gnome": [
    {
      "id": "pocketeer-gnome",
      "name": "Gnomo Pocketeer",
      "originalName": "Pocketeer Gnome",
      "page": 89,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Os Pocketeers pertencem a uma guilda interestelar silenciosa de ladrões e colecionadores conhecida como Agência Majur. Essa organização movida por lucro realizou manipulações genéticas muitas gerações atrás para conceder aptidões úteis a alguns agentes, e esses talentos foram transmitidos aos descendentes.",
      "bloodlineTrait": "Mão do Trapaceiro",
      "traits": [
        {
          "id": "perfectly-still",
          "name": "Perfeitamente Imóvel",
          "originalName": "Perfectly Still",
          "summary": "Uma vez por Descanso, como uma ação, você pode produzir os efeitos de *invisibilidade maior*, exigindo concentração normalmente. Se você realizar qualquer deslocamento em um turno enquanto o efeito estiver ativo, ele termina antecipadamente no fim daquele turno.",
          "description": "Uma vez por Descanso, como uma ação, você pode produzir os efeitos de *invisibilidade maior*, exigindo concentração normalmente. Se você realizar qualquer deslocamento em um turno enquanto o efeito estiver ativo, ele termina antecipadamente no fim daquele turno.",
          "page": 89
        },
        {
          "id": "quiet-proficiencies",
          "name": "Proficiências Silenciosas",
          "originalName": "Quiet Proficiencies",
          "summary": "Você é proficiente nas perícias Prestidigitação e Furtividade. Se já for proficiente em ambas, recebe Especialização em uma delas em vez disso.",
          "description": "Você é proficiente nas perícias Prestidigitação e Furtividade. Se já for proficiente em ambas, recebe Especialização em uma delas em vez disso.",
          "page": 89
        },
        {
          "id": "tricksters-hand",
          "name": "Mão do Trapaceiro",
          "originalName": "Trickster’s Hand",
          "summary": "Você pode produzir à vontade os efeitos da magia *mãos mágicas*.",
          "description": "Você pode produzir à vontade os efeitos da magia *mãos mágicas*.",
          "page": 89
        }
      ],
      "originalBloodlineTrait": "Trickster’s Hand"
    },
    {
      "id": "sungazer-gnome",
      "name": "Gnomo Observador do Sol",
      "originalName": "Sungazer Gnome",
      "page": 89,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Esses gnomos abandonaram ambientes subterrâneos para viajar pelo cosmos, mas mantiveram adaptações que os ajudam a resistir a criaturas capazes de cegar, hipnotizar ou petrificar por meio da visão. São chamados Observadores do Sol por causa de uma linha escura que atravessa seus rostos e cobre os olhos, às vezes confundida com equipamento de proteção ocular.",
      "bloodlineTrait": "Insensibilidade Ocular",
      "traits": [
        {
          "id": "light-bomb",
          "name": "Bomba de Luz",
          "originalName": "Light Bomb",
          "summary": "Como uma ação, você pode criar uma explosão de luz originada em um ponto que possa ver a até 18 metros. Cada criatura a até 3 metros desse ponto deve realizar um teste de resistência de Constituição, com CD baseada em Constituição ou Carisma. Se falhar, fica Cega por 1 minuto. Uma criatura Cega desta forma pode repetir o teste no fim de cada um de seus turnos, encerrando o efeito em caso de sucesso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Como uma ação, você pode criar uma explosão de luz originada em um ponto que possa ver a até 18 metros. Cada criatura a até 3 metros desse ponto deve realizar um teste de resistência de Constituição, com CD baseada em Constituição ou Carisma. Se falhar, fica Cega por 1 minuto. Uma criatura Cega desta forma pode repetir o teste no fim de cada um de seus turnos, encerrando o efeito em caso de sucesso. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 89
        },
        {
          "id": "ocular-insensitivity",
          "name": "Insensibilidade Ocular",
          "originalName": "Ocular Insensitivity",
          "summary": "Você possui vantagem em testes de resistência para evitar ficar Cego e contra efeitos que dependam de sua visão, como o olhar de um basilisco.",
          "description": "Você possui vantagem em testes de resistência para evitar ficar Cego e contra efeitos que dependam de sua visão, como o olhar de um basilisco.",
          "page": 89
        },
        {
          "id": "spacefarer",
          "name": "Viajante Espacial",
          "originalName": "Spacefarer",
          "summary": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base e pode sobreviver por até 1 hora no vácuo sem precisar respirar.",
          "description": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base e pode sobreviver por até 1 hora no vácuo sem precisar respirar.",
          "page": 89
        }
      ],
      "originalBloodlineTrait": "Ocular Insensitivity"
    }
  ],
  "goblin": [
    {
      "id": "brass-fibre-goblin",
      "name": "Goblin de Fibra de Latão",
      "originalName": "Brass Fibre Goblin",
      "page": 90,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Goblins que se estabeleceram em Fortech Syncrius acabaram participando de muitos experimentos com produtos químicos e misturas de toda a galáxia. Essa exposição acostumou seus corpos a substâncias estrangeiras e os tornou capazes de se adaptar rapidamente. A pele foi permanentemente tingida em tom enferrujado semelhante a latão e ganhou um revestimento fibroso metálico, origem do nome da linhagem.",
      "bloodlineTrait": "Resistência Química ou Motivação por Misturas",
      "traits": [
        {
          "id": "chemical-resistance",
          "name": "Resistência Química",
          "originalName": "Chemical Resistance",
          "summary": "Você possui resistência a dano de veneno e é imune à condição Envenenado.",
          "description": "Você possui resistência a dano de veneno e é imune à condição Envenenado.",
          "page": 90
        },
        {
          "id": "deep-drink",
          "name": "Gole Profundo",
          "originalName": "Deep Drink",
          "summary": "Quando consumir uma poção ou outra mistura que exija rolar dados para recuperar pontos de vida ou causar dano, você pode tratar os resultados desses dados como os valores máximos. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Quando consumir uma poção ou outra mistura que exija rolar dados para recuperar pontos de vida ou causar dano, você pode tratar os resultados desses dados como os valores máximos. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 90
        },
        {
          "id": "mixture-motivation",
          "name": "Motivação por Misturas",
          "originalName": "Mixture Motivation",
          "summary": "Você é proficiente nas perícias Medicina e Sobrevivência. Alternativamente, pode escolher receber Especialização em uma dessas perícias ao obter este traço.",
          "description": "Você é proficiente nas perícias Medicina e Sobrevivência. Alternativamente, pode escolher receber Especialização em uma dessas perícias ao obter este traço.",
          "page": 90
        }
      ],
      "originalBloodlineTrait": "Chemical Resistance or Mixture Motivation"
    },
    {
      "id": "meteor-goblin",
      "name": "Goblin Meteoro",
      "originalName": "Meteor Goblin",
      "page": 90,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Catadores vindos das Colônias Scuff que constroem pequenas fortunas escavando sob a superfície de planetas e extraindo minerais e materiais incomuns. Acostumados a ambientes de baixa gravidade, são negociantes sagazes e ensinam entre os seus como barganhar pelo verdadeiro valor de um objeto. O nome “goblin meteoro” vem de seu controle sobre magia gravitacional, usada para despencar em direção à superfície como meteoritos.",
      "bloodlineTrait": "Faca Gravitacional",
      "traits": [
        {
          "id": "bomb-landing",
          "name": "Aterrissagem-Bomba",
          "originalName": "Bomb Landing",
          "summary": "Quando sofrer dano de queda, sofra apenas metade. Sempre que ficar Caído, você pode usar sua reação para saltar imediatamente de volta e ficar de pé. Você também possui velocidade de aceleração 0-G igual ao seu deslocamento-base.",
          "description": "Quando sofrer dano de queda, sofra apenas metade. Sempre que ficar Caído, você pode usar sua reação para saltar imediatamente de volta e ficar de pé. Você também possui velocidade de aceleração 0-G igual ao seu deslocamento-base.",
          "page": 90
        },
        {
          "id": "gravity-knife",
          "name": "Faca Gravitacional",
          "originalName": "Gravity Knife",
          "summary": "Ao atacar com uma arma de arremesso, você pode usar Inteligência para determinar os modificadores de ataque e dano. Além disso, exerce magia sobrenatural sutil sobre a gravidade da arma, permitindo arremessá-la até o alcance longo como se esse fosse o alcance normal.",
          "description": "Ao atacar com uma arma de arremesso, você pode usar Inteligência para determinar os modificadores de ataque e dano. Além disso, exerce magia sobrenatural sutil sobre a gravidade da arma, permitindo arremessá-la até o alcance longo como se esse fosse o alcance normal.",
          "page": 90
        },
        {
          "id": "gravity-resistance",
          "name": "Resistência Gravitacional",
          "originalName": "Gravity Resistance",
          "summary": "Você possui resistência a dano de força.",
          "description": "Você possui resistência a dano de força.",
          "page": 90
        }
      ],
      "originalBloodlineTrait": "Gravity Knife"
    }
  ],
  "goliath": [
    {
      "id": "solatinn-goliath",
      "name": "Golias Solatinn",
      "originalName": "Solatinn Goliath",
      "page": 91,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Irradiando a força de uma estrela, os solatinn se voltam para o sol e impregnam o corpo com sua luz radiante. Conseguem produzir luz à vontade, liberando pelo corpo e pelos ataques a luminosidade do sol de seu mundo natal. Uma dinastia desses golias nas Terras do Golpe de Somnus Domina considera-se superior aos Caelumfaust e os desafia com frequência.",
      "bloodlineTrait": "Avatar do Sol",
      "traits": [
        {
          "id": "arcos-undying-light",
          "name": "Luz Imorredoura de Arco",
          "originalName": "Arco’s Undying Light",
          "summary": "Como uma ação bônus em seu turno, você pode se incendiar em luz ardente por 1 minuto. Durante esse período, é imune a dano radiante. A primeira vez que causar dano a uma criatura em cada turno, ela deve realizar um teste de resistência de Constituição, com CD baseada em Constituição ou Carisma; se falhar, fica Cega até o fim da transformação, podendo repetir o teste no fim de cada turno para encerrar o efeito. Enquanto estiver iluminado, você emite luz solar plena em um raio igual a 3 metros multiplicados pelo seu bônus de proficiência e penumbra pelo dobro dessa distância. Por fim, quando uma criatura o atingir com um ataque a até 1,5 metro durante essa forma, ela sofre 1d6 de dano radiante. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Como uma ação bônus em seu turno, você pode se incendiar em luz ardente por 1 minuto. Durante esse período, é imune a dano radiante. A primeira vez que causar dano a uma criatura em cada turno, ela deve realizar um teste de resistência de Constituição, com CD baseada em Constituição ou Carisma; se falhar, fica Cega até o fim da transformação, podendo repetir o teste no fim de cada turno para encerrar o efeito. Enquanto estiver iluminado, você emite luz solar plena em um raio igual a 3 metros multiplicados pelo seu bônus de proficiência e penumbra pelo dobro dessa distância. Por fim, quando uma criatura o atingir com um ataque a até 1,5 metro durante essa forma, ela sofre 1d6 de dano radiante. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 91
        },
        {
          "id": "sol-mirror",
          "name": "Espelho Solar",
          "originalName": "Sol Mirror",
          "summary": "Quando usar Resistência da Pedra para reduzir dano de um ataque, você pode responder ao atacante com um clarão radiante. Se a fonte do dano estiver a até 9 metros, ela sofre dano radiante igual ao dano que você reduziu.",
          "description": "Quando usar Resistência da Pedra para reduzir dano de um ataque, você pode responder ao atacante com um clarão radiante. Se a fonte do dano estiver a até 9 metros, ela sofre dano radiante igual ao dano que você reduziu.",
          "page": 91
        },
        {
          "id": "suns-avatar",
          "name": "Avatar do Sol",
          "originalName": "Sun’s Avatar",
          "summary": "Você possui vantagem em ataques de arma contra criaturas que sofram alguma fraqueza a luz ou luz solar, como demônios das sombras ou vampiros.",
          "description": "Você possui vantagem em ataques de arma contra criaturas que sofram alguma fraqueza a luz ou luz solar, como demônios das sombras ou vampiros.",
          "page": 91
        }
      ],
      "originalBloodlineTrait": "Sun’s Avatar"
    },
    {
      "id": "versitinn-goliath",
      "name": "Golias Versitinn",
      "originalName": "Versitinn Goliath",
      "page": 91,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Nascidos do sangue de gigantes do vazio, esses raros golias conseguem viver nos confins do espaço exolunar sem precisar descer a planetas. Podem invocar o poder da linhagem para flutuar pelo ar ou acelerar no espaço, e sua simples existência cria um efeito gravitacional ao redor do corpo.",
      "bloodlineTrait": "Bônus Macro",
      "traits": [
        {
          "id": "macro-bonus",
          "name": "Bônus Macro",
          "originalName": "Macro Bonus",
          "summary": "Sempre que uma criatura receberia algum benefício baseado no seu tamanho, ou na comparação entre o tamanho dela e o seu, sua categoria de tamanho conta como uma categoria maior. Por exemplo, uma criatura resistente a dano causado por criaturas do seu tamanho ou menores não recebe essa resistência contra você.",
          "description": "Sempre que uma criatura receberia algum benefício baseado no seu tamanho, ou na comparação entre o tamanho dela e o seu, sua categoria de tamanho conta como uma categoria maior. Por exemplo, uma criatura resistente a dano causado por criaturas do seu tamanho ou menores não recebe essa resistência contra você.",
          "page": 91
        },
        {
          "id": "titan-of-worlds-beyond",
          "name": "Titã de Mundos Além",
          "originalName": "Titan of World’s Beyond",
          "summary": "Como uma ação bônus, você invoca a centelha do poder titânico de sua linhagem e cria uma anomalia gravitacional ao redor de si por 1 minuto. Durante esse período, você é imune a dano de força, recebe deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. A primeira vez que acertar um ataque de arma em cada turno, cause dano de força adicional igual ao seu nível. Além disso, ataques de arma à distância feitos contra você possuem desvantagem enquanto essa forma estiver ativa. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Como uma ação bônus, você invoca a centelha do poder titânico de sua linhagem e cria uma anomalia gravitacional ao redor de si por 1 minuto. Durante esse período, você é imune a dano de força, recebe deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. A primeira vez que acertar um ataque de arma em cada turno, cause dano de força adicional igual ao seu nível. Além disso, ataques de arma à distância feitos contra você possuem desvantagem enquanto essa forma estiver ativa. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 91
        },
        {
          "id": "void-traits",
          "name": "Traços do Vazio",
          "originalName": "Void Traits",
          "summary": "Você possui resistência a dano de força e não precisa de ar para respirar no vácuo.",
          "description": "Você possui resistência a dano de força e não precisa de ar para respirar no vácuo.",
          "page": 91
        }
      ],
      "originalBloodlineTrait": "Macro Bonus"
    }
  ],
  "hadislin": [
    {
      "id": "nova-hadislin",
      "name": "Hádislin Nova",
      "originalName": "Nova Hádislin",
      "page": 92,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Uma ramificação de hádislins cuja maldição infernal foi influenciada pela essência do Plano Astral ou remonta a ínferos que vivem no espaço exolunar ou no próprio Plano Astral. Seus corpos possuem protuberâncias e chifres de pedra branca meteórica, esclera intensamente luminosa e íris verdes. Hádislins Nova sentem ligação com o poder das estrelas e consideram fortalecedores os locais expostos diretamente à luz solar. Como outros hádislins, assumem muitas formas e temperamentos, mas pilotos e piratas dessa linhagem tendem a agir com grande confiança e ocupar posições de destaque entre aliados.",
      "bloodlineTrait": "Adaptação ao Vácuo",
      "traits": [
        {
          "id": "gravity-hopper",
          "name": "Saltador Gravitacional",
          "originalName": "Gravity Hopper",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base. Como uma ação bônus, pode conceder a si mesmo deslocamento de voo pairado igual à sua velocidade de aceleração 0-G até o início do seu próximo turno. Você pode fazer isso um número de vezes por Descanso igual ao seu bônus de proficiência.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base. Como uma ação bônus, pode conceder a si mesmo deslocamento de voo pairado igual à sua velocidade de aceleração 0-G até o início do seu próximo turno. Você pode fazer isso um número de vezes por Descanso igual ao seu bônus de proficiência.",
          "page": 92
        },
        {
          "id": "nova-resistance",
          "name": "Resistência de Nova",
          "originalName": "Nova Resistance",
          "summary": "Você possui resistência a dano radiante e de fogo.",
          "description": "Você possui resistência a dano radiante e de fogo.",
          "page": 92
        },
        {
          "id": "vacuum-adaptation",
          "name": "Adaptação ao Vácuo",
          "originalName": "Vacuum Adaptation",
          "summary": "Você consegue sobreviver sem oxigênio, como submerso ou no vácuo, sem efeitos prejudiciais, com uma exceção: se concluir um Descanso Curto nesse ambiente, não se recupera de Fadiga de Combate; se concluir um Descanso Longo nesse ambiente, recebe um nível de Exaustão e não se recupera de Exaustão como normalmente faria ao descansar.",
          "description": "Você consegue sobreviver sem oxigênio, como submerso ou no vácuo, sem efeitos prejudiciais, com uma exceção: se concluir um Descanso Curto nesse ambiente, não se recupera de Fadiga de Combate; se concluir um Descanso Longo nesse ambiente, recebe um nível de Exaustão e não se recupera de Exaustão como normalmente faria ao descansar.",
          "page": 92
        }
      ],
      "originalBloodlineTrait": "Vacuum Adaptation",
      "cursedLegacySpells": {
        "characterLevel3": "Zona Antigravidade",
        "characterLevel5": "Barragem Radiante"
      }
    },
    {
      "id": "yuamorian",
      "name": "Yuamoriano",
      "originalName": "Yuamorian",
      "page": 92,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Hádislins surgem em muitas formas e podem ser tocados por inúmeros tipos de ínferos. Aqueles cuja maldição remonta aos ínferos corrompidos de Degozah, os yuamorianos, parecem ainda mais peculiares do que os hádislins de Somnus Domina. A natureza bestial dos yuamorianos se manifesta nesses indivíduos, concedendo-lhes traços animais marcantes e certo poder de alterar a própria forma.",
      "bloodlineTrait": "Sentidos Aguçados",
      "traits": [
        {
          "id": "keen-senses",
          "name": "Sentidos Aguçados",
          "originalName": "Keen Senses",
          "summary": "Graças aos sentidos bestiais apurados, você possui vantagem em testes de Percepção baseados em olfato ou audição.",
          "description": "Graças aos sentidos bestiais apurados, você possui vantagem em testes de Percepção baseados em olfato ou audição.",
          "page": 92
        },
        {
          "id": "magic-resistance",
          "name": "Resistência à Magia",
          "originalName": "Magic Resistance",
          "summary": "Sua maldição incomum concede vantagem em testes de resistência contra efeitos mágicos.",
          "description": "Sua maldição incomum concede vantagem em testes de resistência contra efeitos mágicos.",
          "page": 92
        }
      ],
      "originalBloodlineTrait": "Keen Senses",
      "cursedLegacySpells": {
        "characterLevel3": "Infligir Terror",
        "characterLevel5": "Aumentar/Reduzir"
      }
    }
  ],
  "halfling": [
    {
      "id": "longshot-halfling",
      "name": "Halfling Longshot",
      "originalName": "Longshot Halfling",
      "page": 93,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Os Longshots brincam com espaço e matéria, deslocando-os e teleportando-os livremente. Conseguem alterar propriedades de objetos arremessados pelo ar e trazê-los ou enviá-los sobrenaturalmente. Adoram explorar e enxergam o universo como um vasto campo a ser contemplado.",
      "bloodlineTrait": "Puxão de Dobra",
      "traits": [
        {
          "id": "quizzical-shot",
          "name": "Disparo Intrigante",
          "originalName": "Quizzical Shot",
          "summary": "Quando fizer um ataque de arma à distância em seu turno, você pode realizar esse ataque até o alcance longo sem sofrer penalidades. Depois disso, todos os demais ataques que fizer no mesmo turno recebem o mesmo benefício. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência.",
          "description": "Quando fizer um ataque de arma à distância em seu turno, você pode realizar esse ataque até o alcance longo sem sofrer penalidades. Depois disso, todos os demais ataques que fizer no mesmo turno recebem o mesmo benefício. Você pode usar este traço um número de vezes por Descanso igual ao seu bônus de proficiência.",
          "page": 93
        },
        {
          "id": "warp-grab",
          "name": "Puxão de Dobra",
          "originalName": "Warp Grab",
          "summary": "Desde que não exista nada físico entre você e o alvo, você pode deformar o espaço para trazer objetos Pequenos ou menores até sua mão ou até um espaço desocupado apropriado a até 1,5 metro de você. Não pode escolher criaturas nem objetos que estejam sendo carregados ou segurados ativamente. O alcance desta manipulação é igual a 6 metros multiplicados pelo seu bônus de proficiência. Como uma ação bônus, também pode enviar objetos no sentido oposto, teleportando-os para um espaço dentro do alcance ou para as mãos de uma criatura voluntária em linha desobstruída.",
          "description": "Desde que não exista nada físico entre você e o alvo, você pode deformar o espaço para trazer objetos Pequenos ou menores até sua mão ou até um espaço desocupado apropriado a até 1,5 metro de você. Não pode escolher criaturas nem objetos que estejam sendo carregados ou segurados ativamente. O alcance desta manipulação é igual a 6 metros multiplicados pelo seu bônus de proficiência. Como uma ação bônus, também pode enviar objetos no sentido oposto, teleportando-os para um espaço dentro do alcance ou para as mãos de uma criatura voluntária em linha desobstruída.",
          "page": 93
        }
      ],
      "originalBloodlineTrait": "Warp Grab"
    },
    {
      "id": "settler-halfling",
      "name": "Halfling Colonizador",
      "originalName": "Settler Halfling",
      "page": 93,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Irrequietos até mesmo para padrões halfling, os Colonizadores são excelentes em evitar perigos graças a vários dons sobrenaturais. Conseguem projetar os sentidos e esconder-se assumindo a forma de objetos inanimados, além de possuírem impulso natural para se infiltrar em lugares onde não deveriam estar.",
      "bloodlineTrait": "Olho Espião",
      "traits": [
        {
          "id": "peeking-eye",
          "name": "Olho Espião",
          "originalName": "Peeking Eye",
          "summary": "Como uma ação, você pode criar um sensor invisível em um ponto que possa ver dentro do alcance deste traço. Até desfazer o efeito à vontade, seus sentidos se deslocam para esse ponto: você vê e ouve ao redor dele como se estivesse ali, mas fica alheio ao próprio entorno. Se você ou o sensor sofrer dano — o sensor possui a mesma CA que você — o efeito termina imediatamente. Ele também termina se vocês se afastarem além do alcance do traço. O alcance é igual a 9 metros multiplicados pelo seu bônus de proficiência. Criaturas que não conseguem ver o sensor não podem interagir com ele.",
          "description": "Como uma ação, você pode criar um sensor invisível em um ponto que possa ver dentro do alcance deste traço. Até desfazer o efeito à vontade, seus sentidos se deslocam para esse ponto: você vê e ouve ao redor dele como se estivesse ali, mas fica alheio ao próprio entorno. Se você ou o sensor sofrer dano — o sensor possui a mesma CA que você — o efeito termina imediatamente. Ele também termina se vocês se afastarem além do alcance do traço. O alcance é igual a 9 metros multiplicados pelo seu bônus de proficiência. Criaturas que não conseguem ver o sensor não podem interagir com ele.",
          "page": 93
        },
        {
          "id": "pop-down",
          "name": "Desaparecer e Virar Objeto",
          "originalName": "Pop-Down",
          "summary": "Como uma ação, você pode desaparecer numa nuvem de fumaça e transformar-se em um objeto Miúdo genérico, como pedra, prato ou pote, pesando apenas cerca de 2,25 kg. Nessa forma, você percebe apenas o que ocorre a até 3 metros, como se possuísse Visão às Cegas nesse alcance. Você não precisa respirar, possui CA 10 e 5 pontos de vida. Se for reduzido a 0 pontos de vida, o efeito termina e você reaparece no espaço desocupado mais próximo que possa comportá-lo. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Como uma ação, você pode desaparecer numa nuvem de fumaça e transformar-se em um objeto Miúdo genérico, como pedra, prato ou pote, pesando apenas cerca de 2,25 kg. Nessa forma, você percebe apenas o que ocorre a até 3 metros, como se possuísse Visão às Cegas nesse alcance. Você não precisa respirar, possui CA 10 e 5 pontos de vida. Se for reduzido a 0 pontos de vida, o efeito termina e você reaparece no espaço desocupado mais próximo que possa comportá-lo. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 93
        }
      ],
      "originalBloodlineTrait": "Peeking Eye"
    }
  ],
  "hanyou": [
    {
      "id": "dream-hanyou",
      "name": "Hanyou dos Sonhos",
      "originalName": "Dream Hanyou",
      "page": 93,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "",
      "description": "Yokai nem sempre atormentam mortais diretamente; muitos preferem causar sofrimento mental. Hanyou dos Sonhos nascem de yokai particularmente insidiosos em seus ataques à mente. Filhos de pessoas atormentadas por yokai também podem absorver parte dessa angústia psíquica e nascer com a maldição. Esses hanyou possuem qualidade etérea e inquietante, como figuras inventadas pelo subconsciente. Seus traços físicos mudam sutilmente de maneiras quase impossíveis de perceber conscientemente.",
      "bloodlineTrait": "Tocador de Sonhos",
      "traits": [
        {
          "id": "dreamtoucher",
          "name": "Tocador de Sonhos",
          "originalName": "Dreamtoucher",
          "summary": "Enquanto uma criatura estiver Inconsciente, por meios mágicos ou não, você pode tocá-la e entrar em transe como uma ação para projetar-se na mente e adentrar os sonhos dela. A criatura realiza um teste de resistência de Carisma com CD baseada em sua Sabedoria ou Carisma. Se falhar, seu eu interior fica Enfeitiçado por você enquanto você estiver em sua mente. Dentro da mente, você pode conversar com o subconsciente da criatura ou observar o sonho. Se interagir, o subconsciente se solidifica e pode conversar de volta, podendo perceber que está sonhando. Uma criatura Enfeitiçada age como se você fosse amigo, mesmo se era hostil; uma criatura hostil possui vantagem no teste de resistência inicial. Se obtiver sucesso, ela sabe que você é um invasor e pode bloqueá-lo, impedindo a observação do sonho. A criatura pode alterar livremente o ambiente do sonho, mas não pode causar dano mental ou físico a você. Você pode sair desse estado a qualquer momento. Enquanto estiver nele, fora do sonho só percebe o que estiver a até 1,5 metro de seu corpo; se sofrer dano, o efeito termina.",
          "description": "Enquanto uma criatura estiver Inconsciente, por meios mágicos ou não, você pode tocá-la e entrar em transe como uma ação para projetar-se na mente e adentrar os sonhos dela. A criatura realiza um teste de resistência de Carisma com CD baseada em sua Sabedoria ou Carisma. Se falhar, seu eu interior fica Enfeitiçado por você enquanto você estiver em sua mente. Dentro da mente, você pode conversar com o subconsciente da criatura ou observar o sonho. Se interagir, o subconsciente se solidifica e pode conversar de volta, podendo perceber que está sonhando. Uma criatura Enfeitiçada age como se você fosse amigo, mesmo se era hostil; uma criatura hostil possui vantagem no teste de resistência inicial. Se obtiver sucesso, ela sabe que você é um invasor e pode bloqueá-lo, impedindo a observação do sonho. A criatura pode alterar livremente o ambiente do sonho, mas não pode causar dano mental ou físico a você. Você pode sair desse estado a qualquer momento. Enquanto estiver nele, fora do sonho só percebe o que estiver a até 1,5 metro de seu corpo; se sofrer dano, o efeito termina.",
          "page": 93,
          "heritageRole": "lineage"
        },
        {
          "id": "heritage-traits",
          "name": "Traços de Herança",
          "originalName": "Heritage Traits",
          "summary": "Escolha dois traços positivos e dois prejudiciais da lista desta linhagem. Um traço prejudicial é removido após seu primeiro Descanso Longo depois de alcançar o 8º nível, e o segundo após alcançar o 13º nível.",
          "description": "Escolha dois traços positivos e dois prejudiciais da lista desta linhagem. Um traço prejudicial é removido após seu primeiro Descanso Longo depois de alcançar o 8º nível, e o segundo após alcançar o 13º nível.",
          "page": 93,
          "heritageRole": "rule"
        },
        {
          "id": "dreamers-touch",
          "name": "Toque do Sonhador",
          "originalName": "Dreamer’s Touch",
          "summary": "Uma vez por Descanso, você pode conjurar *sono*, sem gastar espaço de magia nem componentes, usando Carisma como habilidade de conjuração. A magia é conjurada em um nível igual à metade do seu nível total, com mínimo de 1º nível.",
          "description": "Uma vez por Descanso, você pode conjurar *sono*, sem gastar espaço de magia nem componentes, usando Carisma como habilidade de conjuração. A magia é conjurada em um nível igual à metade do seu nível total, com mínimo de 1º nível.",
          "page": 93,
          "heritageRole": "positive"
        },
        {
          "id": "intuitive",
          "name": "Intuitivo",
          "originalName": "Intuitive",
          "summary": "Você possui Especialização na perícia Intuição.",
          "description": "Você possui Especialização na perícia Intuição.",
          "page": 93,
          "heritageRole": "positive"
        },
        {
          "id": "psychic-stab",
          "name": "Punhalada Psíquica",
          "originalName": "Psychic Stab",
          "summary": "A primeira vez que causar dano a uma criatura em cada turno, você pode causar dano psíquico adicional igual ao seu modificador de Carisma.",
          "description": "A primeira vez que causar dano a uma criatura em cada turno, você pode causar dano psíquico adicional igual ao seu modificador de Carisma.",
          "page": 93,
          "heritageRole": "positive"
        },
        {
          "id": "trance",
          "name": "Transe",
          "originalName": "Trance",
          "summary": "Você não dorme. Precisa de apenas quatro horas para concluir um Descanso Longo, permanecendo em um estado silencioso semelhante a transe. Nesse estado continua ciente do ambiente, mas possui desvantagem em testes de Percepção e, consequentemente, -5 em Percepção passiva.",
          "description": "Você não dorme. Precisa de apenas quatro horas para concluir um Descanso Longo, permanecendo em um estado silencioso semelhante a transe. Nesse estado continua ciente do ambiente, mas possui desvantagem em testes de Percepção e, consequentemente, -5 em Percepção passiva.",
          "page": 93,
          "heritageRole": "positive"
        },
        {
          "id": "daydreamer",
          "name": "Sonhador Acordado",
          "originalName": "Daydreamer",
          "summary": "Durante a primeira rodada de combate, você fica Lento até o fim do seu primeiro turno.",
          "description": "Durante a primeira rodada de combate, você fica Lento até o fim do seu primeiro turno.",
          "page": 93,
          "heritageRole": "detrimental"
        },
        {
          "id": "overstimulated",
          "name": "Superestimulado",
          "originalName": "Overstimulated",
          "summary": "Você possui desvantagem em testes de Concentração e em testes de resistência feitos para evitar ficar Amedrontado.",
          "description": "Você possui desvantagem em testes de Concentração e em testes de resistência feitos para evitar ficar Amedrontado.",
          "page": 93,
          "heritageRole": "detrimental"
        },
        {
          "id": "vulnerable",
          "name": "Vulnerável",
          "originalName": "Vulnerable",
          "summary": "Você possui vulnerabilidade a dano radiante e psíquico.",
          "description": "Você possui vulnerabilidade a dano radiante e psíquico.",
          "page": 93,
          "heritageRole": "detrimental"
        }
      ],
      "originalBloodlineTrait": "Dreamtoucher"
    },
    {
      "id": "serpent-hanyou",
      "name": "Hanyou Serpente",
      "originalName": "Serpent Hanyou",
      "page": 94,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "",
      "description": "Os poderosos yokai dracônicos dekishikori podem produzir descendentes de tendências igualmente aterradoras e destrutivas. Hanyou Serpente têm muito em comum com seus parentes dracônicos, mas de forma atrofiada, e com frequência acabam abandonados pelos pais. É comum possuírem muitos chifres retorcidos pelo corpo, principalmente na cabeça, costas e ombros, que atrapalham mais do que ajudam.",
      "bloodlineTrait": "Sopro Yokai",
      "traits": [
        {
          "id": "heritage-traits",
          "name": "Traços de Herança",
          "originalName": "Heritage Traits",
          "summary": "Escolha dois traços positivos e dois prejudiciais da lista desta linhagem. Um traço prejudicial é removido após seu primeiro Descanso Longo depois de alcançar o 8º nível, e o segundo após alcançar o 13º nível.",
          "description": "Escolha dois traços positivos e dois prejudiciais da lista desta linhagem. Um traço prejudicial é removido após seu primeiro Descanso Longo depois de alcançar o 8º nível, e o segundo após alcançar o 13º nível.",
          "page": 94,
          "heritageRole": "rule"
        },
        {
          "id": "boastful",
          "name": "Arrogante",
          "originalName": "Boastful",
          "summary": "Você possui Especialização na perícia Intimidação.",
          "description": "Você possui Especialização na perícia Intimidação.",
          "page": 94,
          "heritageRole": "positive"
        },
        {
          "id": "extended-breath",
          "name": "Sopro Estendido",
          "originalName": "Extended Breath",
          "summary": "O comprimento do cone de seu Sopro Yokai aumenta para 9 metros.",
          "description": "O comprimento do cone de seu Sopro Yokai aumenta para 9 metros.",
          "page": 94,
          "heritageRole": "positive"
        },
        {
          "id": "flight",
          "name": "Voo",
          "originalName": "Flight",
          "summary": "Você possui asas que concedem deslocamento de voo laborioso igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso.",
          "description": "Você possui asas que concedem deslocamento de voo laborioso igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso.",
          "page": 94,
          "heritageRole": "positive"
        },
        {
          "id": "scale-of-might",
          "name": "Escala de Poder",
          "originalName": "Scale of Might",
          "summary": "Você é Grande e seu máximo de pontos de vida aumenta em um valor igual ao seu nível. Sempre que ganhar outro nível, seu máximo de pontos de vida aumenta em mais 1.",
          "description": "Você é Grande e seu máximo de pontos de vida aumenta em um valor igual ao seu nível. Sempre que ganhar outro nível, seu máximo de pontos de vida aumenta em mais 1.",
          "page": 94,
          "heritageRole": "positive"
        },
        {
          "id": "slowed",
          "name": "Lentificado",
          "originalName": "Slowed",
          "summary": "Seu deslocamento-base é reduzido em 3 metros, até um mínimo de 4,5 metros.",
          "description": "Seu deslocamento-base é reduzido em 3 metros, até um mínimo de 4,5 metros.",
          "page": 94,
          "heritageRole": "detrimental"
        },
        {
          "id": "uninterested",
          "name": "Desinteressado",
          "originalName": "Uninterested",
          "summary": "Você possui desvantagem em testes de Intuição e Percepção.",
          "description": "Você possui desvantagem em testes de Intuição e Percepção.",
          "page": 94,
          "heritageRole": "detrimental"
        },
        {
          "id": "vulnerable",
          "name": "Vulnerável",
          "originalName": "Vulnerable",
          "summary": "Você possui vulnerabilidade a dano radiante e de fogo.",
          "description": "Você possui vulnerabilidade a dano radiante e de fogo.",
          "page": 94,
          "heritageRole": "detrimental"
        },
        {
          "id": "yokai-breath",
          "name": "Sopro Yokai",
          "originalName": "Yokai Breath",
          "summary": "No lugar de um ataque de arma, você pode exalar gás corrosivo em um cone de 6 metros. Cada criatura no cone deve realizar um teste de resistência de Constituição, com CD baseada em sua Constituição ou Carisma. Se falhar, sofre dano de veneno igual a 1d8 multiplicado pelo seu bônus de proficiência. Você só pode usar este ataque uma vez por turno e duas vezes por Descanso.",
          "description": "No lugar de um ataque de arma, você pode exalar gás corrosivo em um cone de 6 metros. Cada criatura no cone deve realizar um teste de resistência de Constituição, com CD baseada em sua Constituição ou Carisma. Se falhar, sofre dano de veneno igual a 1d8 multiplicado pelo seu bônus de proficiência. Você só pode usar este ataque uma vez por turno e duas vezes por Descanso.",
          "page": 94,
          "heritageRole": "lineage"
        }
      ],
      "originalBloodlineTrait": "Yokai Breath"
    }
  ],
  "hobgoblin": [
    {
      "id": "craterfist-hobgoblin",
      "name": "Hobgoblin Punho de Cratera",
      "originalName": "Craterfist Hobgoblin",
      "page": 95,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Hobgoblins que alcançaram o vazio exolunar durante a Era da Ruptura encontraram um vírus que se espalhou rapidamente e provocou uma mutação: seus corpos ficaram maiores e mais fortes, mas certos instintos básicos foram intensificados, tornando-os mais impulsivos e agressivos. Os efeitos mentais foram controlados com ajuda de scourage que se tornaram aliados distantes, porém amistosos; as mutações físicas, entretanto, permanecem.",
      "bloodlineTrait": "Lutador",
      "traits": [
        {
          "id": "strength-above-all",
          "name": "Força Acima de Tudo",
          "originalName": "Strength Above All",
          "summary": "Você é Grande e possui Especialização em Atletismo.",
          "description": "Você é Grande e possui Especialização em Atletismo.",
          "page": 95
        },
        {
          "id": "tensile-defense",
          "name": "Defesa Tensional",
          "originalName": "Tensile Defense",
          "summary": "Quando usar seu traço Dádiva de Suporte para realizar a ação Ajudar, você recebe pontos de vida temporários iguais a 1d10 + duas vezes seu bônus de proficiência.",
          "description": "Quando usar seu traço Dádiva de Suporte para realizar a ação Ajudar, você recebe pontos de vida temporários iguais a 1d10 + duas vezes seu bônus de proficiência.",
          "page": 95
        },
        {
          "id": "wrestler",
          "name": "Lutador",
          "originalName": "Wrestler",
          "summary": "Desde que tenha causado dano a uma criatura no mesmo turno, você pode usar uma ação bônus para tentar Agarrar ou Empurrar uma criatura ao alcance.",
          "description": "Desde que tenha causado dano a uma criatura no mesmo turno, você pode usar uma ação bônus para tentar Agarrar ou Empurrar uma criatura ao alcance.",
          "page": 95
        }
      ],
      "originalBloodlineTrait": "Wrestler"
    },
    {
      "id": "psychotick-hobgoblin",
      "name": "Hobgoblin Psychotick",
      "originalName": "Psychotick Hobgoblin",
      "page": 95,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Criados e treinados em embarcações exolunares de conquista, ou por pessoas oriundas delas, os psychotick recebem instrução meticulosa para aperfeiçoar campos específicos. Sua maestria com armas e armaduras supera até combatentes mais experientes, e eles aplicam essa especialização tanto ao combate quanto à vida cotidiana.",
      "bloodlineTrait": "Arrasto Psíquico",
      "traits": [
        {
          "id": "hyperspecialist",
          "name": "Hiperespecialista",
          "originalName": "Hyperspecialist",
          "summary": "Escolha duas armas. Se ainda não for proficiente nelas, você se torna proficiente. Seu treinamento especial permite usar Força ou Destreza para as jogadas de ataque e dano com essas armas, independentemente das propriedades delas. Além disso, quando errar um ataque de arma com uma delas, pode rolar 1d4 e adicionar o resultado à jogada, possivelmente transformando a falha em acerto. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso ao concluir um Descanso Curto. Sempre que alcançar um nível em que seu bônus de proficiência aumente, pode escolher uma nova arma para receber os benefícios deste traço.",
          "description": "Escolha duas armas. Se ainda não for proficiente nelas, você se torna proficiente. Seu treinamento especial permite usar Força ou Destreza para as jogadas de ataque e dano com essas armas, independentemente das propriedades delas. Além disso, quando errar um ataque de arma com uma delas, pode rolar 1d4 e adicionar o resultado à jogada, possivelmente transformando a falha em acerto. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso ao concluir um Descanso Curto. Sempre que alcançar um nível em que seu bônus de proficiência aumente, pode escolher uma nova arma para receber os benefícios deste traço.",
          "page": 95
        },
        {
          "id": "psycho-drag",
          "name": "Arrasto Psíquico",
          "originalName": "Psycho Drag",
          "summary": "Você possui resistência a dano psíquico e vantagem em testes de resistência feitos para evitar ficar Amedrontado.",
          "description": "Você possui resistência a dano psíquico e vantagem em testes de resistência feitos para evitar ficar Amedrontado.",
          "page": 95
        }
      ],
      "originalBloodlineTrait": "Psycho Drag"
    }
  ],
  "human": [
    {
      "id": "colony-human",
      "name": "Humano de Colônia",
      "originalName": "Colony Human",
      "page": 96,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Muitos humanos que vivem no espaço exolunar se adaptaram excepcionalmente bem à vida em embarcações. Compreendem a tecnologia ao redor e desenvolvem um senso intuitivo de como operar da melhor forma unidades de frame e veículos.",
      "bloodlineTrait": "Visão no Escuro Cósmica",
      "traits": [
        {
          "id": "cosmic-darkvision",
          "name": "Visão no Escuro Cósmica",
          "originalName": "Cosmic Darkvision",
          "summary": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como se fosse penumbra e em penumbra como luz plena.",
          "description": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como se fosse penumbra e em penumbra como luz plena.",
          "page": 96
        },
        {
          "id": "station-expert",
          "name": "Especialista de Estação",
          "originalName": "Station Expert",
          "summary": "Enquanto estiver operando uma estação de qualquer veículo, você pode adicionar metade do seu bônus de proficiência a uma jogada de ataque, jogada de dano, CD de resistência ou teste de resistência realizado pela estação. Se estiver pilotando uma unidade de frame ou embarcação exolunar, pode aplicar o mesmo bônus às jogadas e características dela. Você pode usar este traço um número de vezes por Descanso igual ao seu modificador de Inteligência ou Destreza, o que for maior. Quando gastar um uso, a jogada de ataque, CD, jogada de dano ou teste de resistência escolhido mantém esse bônus até o fim do turno em que o traço foi usado.",
          "description": "Enquanto estiver operando uma estação de qualquer veículo, você pode adicionar metade do seu bônus de proficiência a uma jogada de ataque, jogada de dano, CD de resistência ou teste de resistência realizado pela estação. Se estiver pilotando uma unidade de frame ou embarcação exolunar, pode aplicar o mesmo bônus às jogadas e características dela. Você pode usar este traço um número de vezes por Descanso igual ao seu modificador de Inteligência ou Destreza, o que for maior. Quando gastar um uso, a jogada de ataque, CD, jogada de dano ou teste de resistência escolhido mantém esse bônus até o fim do turno em que o traço foi usado.",
          "page": 96
        },
        {
          "id": "terrestria-tracker",
          "name": "Rastreador Terrestre",
          "originalName": "Terrestria Tracker",
          "summary": "Você possui proficiência e Especialização na perícia Natureza, representando conhecimento geral da flora e fauna dos muitos lugares que já encontrou.",
          "description": "Você possui proficiência e Especialização na perícia Natureza, representando conhecimento geral da flora e fauna dos muitos lugares que já encontrou.",
          "page": 96
        }
      ],
      "originalBloodlineTrait": "Cosmic Darkvision"
    },
    {
      "id": "exolunar-human",
      "name": "Humano Exolunar",
      "originalName": "Exolunar Human",
      "page": 96,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Humanos encontram seu caminho para todos os cantos do universo, e diferentes variações surgem em outros planetas como um curioso exemplo de evolução convergente. Quem nasce no espaço exolunar ou passa nele grande parte dos primeiros anos absorve poder arcano das estrelas e consegue canalizá-lo em manifestações mágicas.",
      "bloodlineTrait": "Dotado Astrologicamente",
      "traits": [
        {
          "id": "astrologically-gifted",
          "name": "Dotado Astrologicamente",
          "originalName": "Astrologically Gifted",
          "summary": "Escolha três magias de Astromancia de 1º ou 2º nível. Você aprende essas magias e pode conjurá-las usando espaços de magia ou gastando um número de usos deste traço igual ao nível em que deseja conjurá-las, sem componentes materiais nem espaço de magia. Use Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Você possui um número de usos igual ao seu bônus de proficiência e recupera todos ao concluir um Descanso Longo. Se aprender magias de Astromancia por outras fontes, também pode gastar usos deste traço para conjurá-las como se tivessem sido obtidas através dele.",
          "description": "Escolha três magias de Astromancia de 1º ou 2º nível. Você aprende essas magias e pode conjurá-las usando espaços de magia ou gastando um número de usos deste traço igual ao nível em que deseja conjurá-las, sem componentes materiais nem espaço de magia. Use Inteligência, Sabedoria ou Carisma como habilidade de conjuração. Você possui um número de usos igual ao seu bônus de proficiência e recupera todos ao concluir um Descanso Longo. Se aprender magias de Astromancia por outras fontes, também pode gastar usos deste traço para conjurá-las como se tivessem sido obtidas através dele.",
          "page": 96
        },
        {
          "id": "bound-astromancy",
          "name": "Astromancia Vinculada",
          "originalName": "Bound Astromancy",
          "summary": "Você recebe o Traço de Legado humano Sorte Vinculada. Pode gastar usos de Sorte Vinculada como se cada uso correspondesse a dois usos de Dotado Astrologicamente.",
          "description": "Você recebe o Traço de Legado humano Sorte Vinculada. Pode gastar usos de Sorte Vinculada como se cada uso correspondesse a dois usos de Dotado Astrologicamente.",
          "page": 96
        },
        {
          "id": "efficient-breather",
          "name": "Respirador Eficiente",
          "originalName": "Efficient Breather",
          "summary": "Você consegue prender a respiração por 10 minutos a mais do que normalmente conseguiria e, enquanto prende a respiração, pode falar normalmente sem consumir ar adicional.",
          "description": "Você consegue prender a respiração por 10 minutos a mais do que normalmente conseguiria e, enquanto prende a respiração, pode falar normalmente sem consumir ar adicional.",
          "page": 96
        }
      ],
      "originalBloodlineTrait": "Astrologically Gifted"
    },
    {
      "id": "scuffin-human",
      "name": "Humano Scuffin",
      "originalName": "Scuffin Human",
      "page": 96,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "As Colônias Scuff possuem anomalias gravitacionais, corpos rochosos flutuantes e paredões que precisam ser escalados. Para se adaptar, arcanistas Scuffin desenvolveram magia capaz de alterar o corpo de exploradores e criar um segundo par de braços para ajudar na navegação e no combate. Com o tempo, essas alterações tornaram-se mutações hereditárias, e a maioria dos humanos Scuffin agora nasce com essa vantagem.",
      "bloodlineTrait": "Especialista em Agarrar ou Arremesso Longo",
      "traits": [
        {
          "id": "grappling-expert",
          "name": "Especialista em Agarrar",
          "originalName": "Grappling Expert",
          "summary": "Graças ao seu físico avançado, você possui vantagem em tentativas de Agarrar outras criaturas e em tentativas de escapar de agarrões. Você não recebe esse benefício se todas as suas mãos estiverem ocupadas segurando armas ou objetos.",
          "description": "Graças ao seu físico avançado, você possui vantagem em tentativas de Agarrar outras criaturas e em tentativas de escapar de agarrões. Você não recebe esse benefício se todas as suas mãos estiverem ocupadas segurando armas ou objetos.",
          "page": 96
        },
        {
          "id": "long-hurl",
          "name": "Arremesso Longo",
          "originalName": "Long Hurl",
          "summary": "Quando fizer um ataque à distância com uma arma de arremesso, trate o alcance longo da arma como o dobro do normal. O alcance normal não muda.",
          "description": "Quando fizer um ataque à distância com uma arma de arremesso, trate o alcance longo da arma como o dobro do normal. O alcance normal não muda.",
          "page": 96
        },
        {
          "id": "multi-armed",
          "name": "Múltiplos Braços",
          "originalName": "Multi-Armed",
          "summary": "Você possui quatro braços em vez de dois. Cada braço pode segurar objetos ou armas, ativar itens mágicos e realizar as demais funções de uma mão normal. Independentemente de quantos escudos empunhar, só pode receber os benefícios de um escudo por vez, incluindo bônus de aprimoramento. As mãos extras também concedem: uma interação adicional em seu turno para cada mão extra que estiver livre; a possibilidade de comprometer uma mão extra para empunhar uma arma de duas mãos, deixando outras duas mãos livres; a capacidade de segurar uma arma ou objeto em cada mão extra; e, enquanto escala, duas mãos permanecem livres para combate ou interações.",
          "description": "Você possui quatro braços em vez de dois. Cada braço pode segurar objetos ou armas, ativar itens mágicos e realizar as demais funções de uma mão normal. Independentemente de quantos escudos empunhar, só pode receber os benefícios de um escudo por vez, incluindo bônus de aprimoramento. As mãos extras também concedem: uma interação adicional em seu turno para cada mão extra que estiver livre; a possibilidade de comprometer uma mão extra para empunhar uma arma de duas mãos, deixando outras duas mãos livres; a capacidade de segurar uma arma ou objeto em cada mão extra; e, enquanto escala, duas mãos permanecem livres para combate ou interações.",
          "page": 96
        }
      ],
      "originalBloodlineTrait": "Grappling Expert or Long Hurl"
    }
  ],
  "ilthrak-yar": [
    {
      "id": "abyssoid",
      "name": "Abissoide",
      "originalName": "Abyssoid",
      "page": 97,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "Ilthrak-yar encontram com frequência feras do Abismo cuja natureza se aproxima da sua. Indivíduos afetados por demônios ou que cruzaram suas linhagens com eles assumiram esses traços e deram origem aos ilthrak-yar abissoides. Seus corpos são revestidos por uma fina camada de ácido e geralmente exibem características animalescas incomuns entre ilthrak-yar.",
      "bloodlineTrait": "Agarrão Ácido e Opções de Tamanho e Tipo",
      "traits": [
        {
          "id": "acid-grip",
          "name": "Agarrão Ácido",
          "originalName": "Acid Grip",
          "summary": "Você possui resistência a dano ácido. Sempre que uma criatura iniciar o turno envolvida fisicamente em um agarrão com você, ela sofre dano ácido igual a 1d8 + seu bônus de proficiência.",
          "description": "Você possui resistência a dano ácido. Sempre que uma criatura iniciar o turno envolvida fisicamente em um agarrão com você, ela sofre dano ácido igual a 1d8 + seu bônus de proficiência.",
          "page": 97
        },
        {
          "id": "size-type-options",
          "name": "Opções de Tamanho e Tipo",
          "originalName": "Size & Type Options",
          "summary": "Você pode escolher ser Grande, decisão feita ao receber este traço. Além de Humanoide e Ilthrak-yar, você também é considerado um Ínfero (demônio).",
          "description": "Você pode escolher ser Grande, decisão feita ao receber este traço. Além de Humanoide e Ilthrak-yar, você também é considerado um Ínfero (demônio).",
          "page": 97
        },
        {
          "id": "umber-buster",
          "name": "Ruptura Sombria",
          "originalName": "Umber Buster",
          "summary": "Como uma ação bônus, você pode transformar-se em uma forma demoníaca mais retorcida por 1 minuto. Ao se transformar, cada criatura a até 3 metros deve realizar um teste de resistência de Sabedoria, com CD baseada em sua Força, Constituição ou Carisma; se falhar, fica Amedrontada por você até o fim do seu próximo turno. Enquanto a transformação durar, ao realizar a ação Atacar você pode fazer um ataque de arma adicional, e a primeira vez que acertar uma criatura com um ataque em cada turno causa dano ácido adicional igual ao seu nível. Você pode transformar-se desta forma uma vez por Descanso.",
          "description": "Como uma ação bônus, você pode transformar-se em uma forma demoníaca mais retorcida por 1 minuto. Ao se transformar, cada criatura a até 3 metros deve realizar um teste de resistência de Sabedoria, com CD baseada em sua Força, Constituição ou Carisma; se falhar, fica Amedrontada por você até o fim do seu próximo turno. Enquanto a transformação durar, ao realizar a ação Atacar você pode fazer um ataque de arma adicional, e a primeira vez que acertar uma criatura com um ataque em cada turno causa dano ácido adicional igual ao seu nível. Você pode transformar-se desta forma uma vez por Descanso.",
          "page": 97
        }
      ],
      "originalBloodlineTrait": "Acid Grip & Size & Type Options"
    },
    {
      "id": "ioluminate",
      "name": "Ioluminado",
      "originalName": "Ioluminate",
      "page": 97,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Uma criatura peculiar que lembra uma combinação de lesma-dragão azul com vespa. Esses ilthrak-yar espaciais são adaptados a ambientes sem ar e conseguem passar longos períodos sem alimento. Seus corpos são bioluminescentes e atravessam vácuo e água com a mesma facilidade.",
      "bloodlineTrait": "Bioluminescência ou Nadador Espacial",
      "traits": [
        {
          "id": "bioluminate",
          "name": "Bioluminescência",
          "originalName": "Bioluminate",
          "summary": "Como uma ação bônus, você pode fazer seu corpo brilhar e emitir luz plena em todas as direções a uma distância entre 3 e 9 metros, à sua escolha, e penumbra pelo dobro dessa distância. O efeito termina se você ficar Inconsciente ou usar uma ação bônus para encerrá-lo.",
          "description": "Como uma ação bônus, você pode fazer seu corpo brilhar e emitir luz plena em todas as direções a uma distância entre 3 e 9 metros, à sua escolha, e penumbra pelo dobro dessa distância. O efeito termina se você ficar Inconsciente ou usar uma ação bônus para encerrá-lo.",
          "page": 97
        },
        {
          "id": "space-swimmer",
          "name": "Nadador Espacial",
          "originalName": "Space Swimmer",
          "summary": "Você possui deslocamento de natação igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. Não precisa de ar no vácuo e consegue respirar água.",
          "description": "Você possui deslocamento de natação igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. Não precisa de ar no vácuo e consegue respirar água.",
          "page": 97
        },
        {
          "id": "zap-flash",
          "name": "Clarão Elétrico",
          "originalName": "Zap Flash",
          "summary": "Ao realizar um ataque de arma, você pode imbuí-lo de energia bioelétrica. Nesse ataque e em cada outro ataque realizado antes do fim do turno, role 1d4 e adicione o resultado tanto à jogada de ataque quanto à jogada de dano, sendo o dano adicional elétrico. Você pode gastar vários usos de uma só vez para aumentar o tamanho do dado em cada uso adicional: d4 para d6, depois d8, d10, d12 e finalmente 2d8. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Ao realizar um ataque de arma, você pode imbuí-lo de energia bioelétrica. Nesse ataque e em cada outro ataque realizado antes do fim do turno, role 1d4 e adicione o resultado tanto à jogada de ataque quanto à jogada de dano, sendo o dano adicional elétrico. Você pode gastar vários usos de uma só vez para aumentar o tamanho do dado em cada uso adicional: d4 para d6, depois d8, d10, d12 e finalmente 2d8. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 97
        }
      ],
      "originalBloodlineTrait": "Bioluminate or Space Swimmer"
    }
  ],
  "kits-adria": [
    {
      "id": "angelscratch",
      "name": "Angelscratch",
      "originalName": "Angelscratch",
      "page": 97,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Nascidos de uma origem celestial tocada pelos planos, os kits’adria angelscratch possuem uma suavidade divina. Suas kitscratch geralmente surgem como textos celestiais sobre a pele acompanhados de padrões de penas. Eles conseguem invocar uma transformação celestial que manifesta caudas adicionais, cujo número cresce conforme sua experiência e poder aumentam.",
      "bloodlineTrait": "Resiliência Celestial e Herança Celestial",
      "traits": [
        {
          "id": "celestial-heritage",
          "name": "Herança Celestial",
          "originalName": "Celestial Heritage",
          "summary": "Além de seus outros tipos de criatura, você também é considerado um Celestial.",
          "description": "Além de seus outros tipos de criatura, você também é considerado um Celestial.",
          "page": 97
        },
        {
          "id": "celestial-resilience",
          "name": "Resiliência Celestial",
          "originalName": "Celestial Resilience",
          "summary": "Você possui resistência a dano radiante.",
          "description": "Você possui resistência a dano radiante.",
          "page": 97
        },
        {
          "id": "echo-tails",
          "name": "Caudas de Eco",
          "originalName": "Echo Tails",
          "summary": "Como uma ação bônus, você pode assumir por 1 minuto uma forma que manifesta sua natureza celestial. Sua cauda se divide em um número de caudas igual a 3 + seu bônus de proficiência. Enquanto estiver nessa forma: você emite 6 metros de luz plena e penumbra pelo dobro da distância; quando falhar em uma jogada de ataque, teste de atributo ou teste de resistência, pode gastar uma cauda para fazê-la desaparecer, rolar um novo d20 e usar o novo resultado, possivelmente alterando o desfecho — ao gastar a última cauda, a transformação termina antecipadamente; a primeira vez que causar dano a uma criatura em cada turno, cause dano radiante adicional igual ao seu nível total, ou metade disso quando o dano atingir vários alvos; sua forma não pode ser alterada por magias ou efeitos ilusórios, de modo que você não pode mudar de aparência nem ficar invisível. Se mudar voluntariamente de forma, exceto por efeitos que alterem apenas seu tamanho, a transformação termina. Você pode transformar-se desta forma uma vez por Descanso.",
          "description": "Como uma ação bônus, você pode assumir por 1 minuto uma forma que manifesta sua natureza celestial. Sua cauda se divide em um número de caudas igual a 3 + seu bônus de proficiência. Enquanto estiver nessa forma: você emite 6 metros de luz plena e penumbra pelo dobro da distância; quando falhar em uma jogada de ataque, teste de atributo ou teste de resistência, pode gastar uma cauda para fazê-la desaparecer, rolar um novo d20 e usar o novo resultado, possivelmente alterando o desfecho — ao gastar a última cauda, a transformação termina antecipadamente; a primeira vez que causar dano a uma criatura em cada turno, cause dano radiante adicional igual ao seu nível total, ou metade disso quando o dano atingir vários alvos; sua forma não pode ser alterada por magias ou efeitos ilusórios, de modo que você não pode mudar de aparência nem ficar invisível. Se mudar voluntariamente de forma, exceto por efeitos que alterem apenas seu tamanho, a transformação termina. Você pode transformar-se desta forma uma vez por Descanso.",
          "page": 97
        }
      ],
      "originalBloodlineTrait": "Celestial Resilience & Celestial Heritage"
    },
    {
      "id": "astrapaw",
      "name": "Astrapata",
      "originalName": "Astrapaw",
      "page": 98,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "A fantasmagórica e flutuante astrapata é tocada pela natureza do Mar Astral. Ela deriva pelo ar sustentada por gavinhas etéreas de poder psiônico e consegue projetar corpo e armas a pequenas distâncias. Como outros kits’adria tocados pelos planos, sua linhagem se desligou da genética tradicional, mas ainda existe um progenitor ligado a ela como o Primeiro de Skulk: uma entidade astral que protegeu seus ancestrais e lhes concedeu parte de si para garantir sua sobrevivência.",
      "bloodlineTrait": "Cortador Psiônico",
      "traits": [
        {
          "id": "floating-hunter",
          "name": "Caçador Flutuante",
          "originalName": "Floating Hunter",
          "summary": "Você consegue gerar várias fitas celestiais que fluem de suas costas e pescoço. Enquanto estiverem visíveis, você possui deslocamento de voo pairado igual ao seu deslocamento-base. Em sua forma de raposa, possui velocidade de aceleração 0-G igual ao dobro disso.",
          "description": "Você consegue gerar várias fitas celestiais que fluem de suas costas e pescoço. Enquanto estiverem visíveis, você possui deslocamento de voo pairado igual ao seu deslocamento-base. Em sua forma de raposa, possui velocidade de aceleração 0-G igual ao dobro disso.",
          "page": 98
        },
        {
          "id": "psionic-slicer",
          "name": "Cortador Psiônico",
          "originalName": "Psionic Slicer",
          "summary": "Ao realizar um ataque corpo a corpo, você pode tratar o alcance da arma como se fosse aumentado em uma distância igual a 1,5 metro multiplicado pela metade do seu bônus de proficiência. Ao fazê-lo, cria uma projeção espectral da arma que atinge o alvo e reproduz o estado e os efeitos da arma original. Substâncias e efeitos aplicados à arma, como venenos ou magias como *golpe radiante*, são tratados como se se aplicassem simultaneamente a ambas as versões e são consumidos em conjunto.",
          "description": "Ao realizar um ataque corpo a corpo, você pode tratar o alcance da arma como se fosse aumentado em uma distância igual a 1,5 metro multiplicado pela metade do seu bônus de proficiência. Ao fazê-lo, cria uma projeção espectral da arma que atinge o alvo e reproduz o estado e os efeitos da arma original. Substâncias e efeitos aplicados à arma, como venenos ou magias como *golpe radiante*, são tratados como se se aplicassem simultaneamente a ambas as versões e são consumidos em conjunto.",
          "page": 98
        },
        {
          "id": "space-ghost-passage",
          "name": "Passagem Fantasma Espacial",
          "originalName": "Space Ghost Passage",
          "summary": "Como uma ação bônus, você pode entrar no Plano Etéreo, como pela magia *forma etérea*, até o início do seu próximo turno. Ao entrar dessa forma, transforma-se imediatamente em sua forma de raposa, fundindo nela tudo o que carrega, e só retorna à forma anterior quando volta. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "description": "Como uma ação bônus, você pode entrar no Plano Etéreo, como pela magia *forma etérea*, até o início do seu próximo turno. Ao entrar dessa forma, transforma-se imediatamente em sua forma de raposa, fundindo nela tudo o que carrega, e só retorna à forma anterior quando volta. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência e recupera um uso gasto ao concluir um Descanso Curto.",
          "page": 98
        }
      ],
      "originalBloodlineTrait": "Psionic Slicer"
    },
    {
      "id": "devilscratch",
      "name": "Devilscratch",
      "originalName": "Devilscratch",
      "page": 99,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Kits’adria flamejantes cuja linhagem foi distorcida por influências diabólicas. Podem resultar de qualquer maldição infernal capaz de originar um hádislin. Possuem aparência diabólica com chifres, unhas e olhos predatórios semelhantes aos de animais selvagens.",
      "bloodlineTrait": "Resistência ao Fogo ou Pelagem Flamejante, e Natureza Infernal",
      "traits": [
        {
          "id": "fiendish-nature",
          "name": "Natureza Infernal",
          "originalName": "Fiendish Nature",
          "summary": "Além de seus outros tipos de criatura, você é considerado um Ínfero (diabo).",
          "description": "Além de seus outros tipos de criatura, você é considerado um Ínfero (diabo).",
          "page": 99
        },
        {
          "id": "fire-resistance",
          "name": "Resistência ao Fogo",
          "originalName": "Fire Resistance",
          "summary": "Você possui resistência a dano de fogo.",
          "description": "Você possui resistência a dano de fogo.",
          "page": 99
        },
        {
          "id": "flaming-fur",
          "name": "Pelagem Flamejante",
          "originalName": "Flaming Fur",
          "summary": "Você pode produzir os efeitos de *repreensão infernal* um número de vezes por Descanso igual ao seu bônus de proficiência, sem espaço de magia nem componentes, usando Constituição ou Carisma como habilidade de conjuração. Ao fazer isso, pode gastar um segundo uso do traço para conjurar a magia em um nível igual ao seu bônus de proficiência.",
          "description": "Você pode produzir os efeitos de *repreensão infernal* um número de vezes por Descanso igual ao seu bônus de proficiência, sem espaço de magia nem componentes, usando Constituição ou Carisma como habilidade de conjuração. Ao fazer isso, pode gastar um segundo uso do traço para conjurar a magia em um nível igual ao seu bônus de proficiência.",
          "page": 99
        },
        {
          "id": "hellfox-augmentation",
          "name": "Aprimoramento de Raposa Infernal",
          "originalName": "Hellfox Augmentation",
          "summary": "Sua forma de raposa é Média e possui traços mais sinistros: pele coriácea cor de carvão, presas e garras pronunciadas e pelagem flamejante. Ao usar Metamorfose Kits’adriana, seus valores de atributo não mudam e você também recebe os seguintes benefícios: pode empunhar na boca uma arma corpo a corpo de uma mão mesmo que ela não seja Leve; seu deslocamento-base aumenta em 3 metros; pode realizar componentes verbais de magias; no lugar de um ataque de arma pode realizar uma Mordida, tratada como arma com a propriedade Acuidade que causa 1d6 de dano perfurante mais dano de fogo igual a 1d4 multiplicado pela metade do seu bônus de proficiência; e, como ação bônus, pode realizar um ataque de Garra que funciona como a Mordida, mas causa dano cortante em vez de perfurante.",
          "description": "Sua forma de raposa é Média e possui traços mais sinistros: pele coriácea cor de carvão, presas e garras pronunciadas e pelagem flamejante. Ao usar Metamorfose Kits’adriana, seus valores de atributo não mudam e você também recebe os seguintes benefícios: pode empunhar na boca uma arma corpo a corpo de uma mão mesmo que ela não seja Leve; seu deslocamento-base aumenta em 3 metros; pode realizar componentes verbais de magias; no lugar de um ataque de arma pode realizar uma Mordida, tratada como arma com a propriedade Acuidade que causa 1d6 de dano perfurante mais dano de fogo igual a 1d4 multiplicado pela metade do seu bônus de proficiência; e, como ação bônus, pode realizar um ataque de Garra que funciona como a Mordida, mas causa dano cortante em vez de perfurante.",
          "page": 99
        }
      ],
      "originalBloodlineTrait": "Fire Resistance or Flaming Fur, & Fiendish Nature"
    }
  ],
  "kobold": [
    {
      "id": "jettison-kobold",
      "name": "Kobold Jettison",
      "originalName": "Jettison Kobold",
      "page": 100,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Sabedoria +1",
      "description": "Por todo o universo existem pequenos kobolds conhecidos como Jettison, que absorveram magia gravitacional do cosmos e conseguem alterar a própria massa quando necessário. Eles se lançam pelo espaço deslocando seus pequenos corpos e são mestres em suportar o tratamento pouco delicado de seus aliados.",
      "bloodlineTrait": "Lutar ou Voar em 0-G",
      "traits": [
        {
          "id": "cannonbold",
          "name": "Kobold-Bala",
          "originalName": "Cannonbold",
          "summary": "Como uma ação ou ação bônus, você pode se enrolar em uma esfera de cerca de 4,5 kg envolta em magia gravitacional e permanecer assim até o início do seu próximo turno. Nessa forma, uma criatura aliada maior que você pode arremessá-lo no lugar de um ataque de arma, tratando-o como arma de arremesso com alcance de 9/27 metros. Se acertar, o alvo sofre dano contundente igual a 2d4 + seu modificador de Constituição, e você pode usar sua reação para se desenrolar e realizar um ataque de arma contra o mesmo alvo. Acertando ou errando, você termina o movimento em um espaço desocupado adjacente ao alvo.",
          "description": "Como uma ação ou ação bônus, você pode se enrolar em uma esfera de cerca de 4,5 kg envolta em magia gravitacional e permanecer assim até o início do seu próximo turno. Nessa forma, uma criatura aliada maior que você pode arremessá-lo no lugar de um ataque de arma, tratando-o como arma de arremesso com alcance de 9/27 metros. Se acertar, o alvo sofre dano contundente igual a 2d4 + seu modificador de Constituição, e você pode usar sua reação para se desenrolar e realizar um ataque de arma contra o mesmo alvo. Acertando ou errando, você termina o movimento em um espaço desocupado adjacente ao alvo.",
          "page": 100
        },
        {
          "id": "fight-or-0-g-flight",
          "name": "Lutar ou Voar em 0-G",
          "originalName": "Fight or 0-G Flight",
          "summary": "Como uma ação bônus, você pode criar temporariamente um campo localizado de gravidade zero e lançar-se para um espaço desocupado a uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência. Esse movimento não provoca ataques de oportunidade. Na próxima vez que realizar um ataque no mesmo turno em que aterrissou, role 1d8 e adicione o resultado à jogada de ataque. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Como uma ação bônus, você pode criar temporariamente um campo localizado de gravidade zero e lançar-se para um espaço desocupado a uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência. Esse movimento não provoca ataques de oportunidade. Na próxima vez que realizar um ataque no mesmo turno em que aterrissou, role 1d8 e adicione o resultado à jogada de ataque. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 100
        },
        {
          "id": "size-requirement",
          "name": "Requisito de Tamanho",
          "originalName": "Size Requirement",
          "summary": "Você é Pequeno.",
          "description": "Você é Pequeno.",
          "page": 100
        }
      ],
      "originalBloodlineTrait": "Fight or 0-G Flight"
    },
    {
      "id": "paycut-kobold",
      "name": "Kobold Paycut",
      "originalName": "Paycut Kobold",
      "page": 100,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Depois de viajar pelas estrelas e ganhar a vida em diversas naves e planetas do vazio exolunar, alguns kobolds recebem o título Paycut por sua experiência excepcional. Eles executam tarefas familiares em velocidade quase assustadora e atribuem grande valor aos próprios serviços.",
      "bloodlineTrait": "Força Sindical",
      "traits": [
        {
          "id": "quality-tasker",
          "name": "Executor de Qualidade",
          "originalName": "Quality Tasker",
          "summary": "Você pode realizar como ação bônus qualquer ação que normalmente seja capaz de realizar. Se fizer isso, não pode realizar o mesmo tipo de ação como sua ação normal naquele turno — por exemplo, não pode realizar Atacar duas vezes nem conjurar duas magias usando as duas ações. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "description": "Você pode realizar como ação bônus qualquer ação que normalmente seja capaz de realizar. Se fizer isso, não pode realizar o mesmo tipo de ação como sua ação normal naquele turno — por exemplo, não pode realizar Atacar duas vezes nem conjurar duas magias usando as duas ações. Você pode usar este traço um número de vezes por Descanso Longo igual ao seu bônus de proficiência.",
          "page": 100
        },
        {
          "id": "union-strength",
          "name": "Força Sindical",
          "originalName": "Union Strength",
          "summary": "Você é proficiente nas perícias Intuição e Persuasão.",
          "description": "Você é proficiente nas perícias Intuição e Persuasão.",
          "page": 100
        }
      ],
      "originalBloodlineTrait": "Union Strength"
    }
  ],
  "kua-hono": [
    {
      "id": "dreadfish",
      "name": "Peixe do Terror",
      "originalName": "Dreadfish",
      "page": 101,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "A forma original desse povo-peixe é pouco conhecida, mas qualquer que tenha sido foi modificada e mutada por influências sobrenaturais nas profundezas oceânicas. Eles lembram peixes predadores com enormes mandíbulas articuladas e escamas escuras. A maioria é incapaz de cooperar com sociedades maiores e tende a formar microcomunidades semelhantes a cultos, venerando deuses exteriores, feras das profundezas ou divindades de sua própria invenção.",
      "bloodlineTrait": "Percepção Sobrenatural",
      "traits": [
        {
          "id": "angler-darkvision",
          "name": "Visão no Escuro Abissal",
          "originalName": "Angler Darkvision",
          "summary": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como penumbra e em penumbra como luz plena. Se já possuir Visão no Escuro, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "description": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como penumbra e em penumbra como luz plena. Se já possuir Visão no Escuro, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "page": 101
        },
        {
          "id": "trap-jaw",
          "name": "Mandíbula-Armadilha",
          "originalName": "Trap Jaw",
          "summary": "No lugar de um ataque de arma em cada turno, você pode abrir sua mandíbula até um tamanho maior e atacar um alvo a até 1,5 metro. Ela é tratada como uma arma com a propriedade Acuidade que causa 1d6 de dano perfurante, mais 1d6 adicional para cada categoria de tamanho acima de Médio que você possua. Se acertar um alvo do seu tamanho ou menor, ele fica Agarrado.",
          "description": "No lugar de um ataque de arma em cada turno, você pode abrir sua mandíbula até um tamanho maior e atacar um alvo a até 1,5 metro. Ela é tratada como uma arma com a propriedade Acuidade que causa 1d6 de dano perfurante, mais 1d6 adicional para cada categoria de tamanho acima de Médio que você possua. Se acertar um alvo do seu tamanho ou menor, ele fica Agarrado.",
          "page": 101
        },
        {
          "id": "uncanny-perception",
          "name": "Percepção Sobrenatural",
          "originalName": "Uncanny Perception",
          "summary": "Você consegue ver criaturas Invisíveis ou no Plano Etéreo a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Pode interagir com essas criaturas como se estivessem visíveis e no mesmo plano que você.",
          "description": "Você consegue ver criaturas Invisíveis ou no Plano Etéreo a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Pode interagir com essas criaturas como se estivessem visíveis e no mesmo plano que você.",
          "page": 101
        }
      ],
      "originalBloodlineTrait": "Uncanny Perception"
    },
    {
      "id": "exodilla",
      "name": "Exodilla",
      "originalName": "Exodilla",
      "page": 101,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Os Exodilla blindados são uma linhagem reptiliana que evoluiu nas profundezas do espaço, originalmente vivendo em planetoides mortos ou moribundos e sobrevivendo de depósitos de água congelada. Sua pele forma uma casca defensiva grossa que afasta predadores. Ao serem encontrados por viajantes interestelares, começaram migrando junto de outras espécies em busca de novas áreas de caça e gradualmente aprenderam a comunicar-se e cooperar, passando de caronas indesejadas a companheiros. Alguns, porém, rejeitaram a cooperação interestelar e formaram tribos isoladas hostis a forasteiros.",
      "bloodlineTrait": "Exoesqueleto ou Metabolismo Lento",
      "traits": [
        {
          "id": "corrosive-spit",
          "name": "Cuspe Corrosivo",
          "originalName": "Corrosive Spit",
          "summary": "Seu corpo produz um ácido corrosivo que você pode cuspir no lugar de um ataque de arma contra um alvo a até 9 metros. O alvo deve realizar um teste de resistência de Destreza com CD baseada em sua Constituição; se falhar, sofre dano ácido igual a 1d8 multiplicado pelo seu bônus de proficiência. Você pode usar esta característica um número de vezes por Descanso Curto igual à metade do seu bônus de proficiência.",
          "description": "Seu corpo produz um ácido corrosivo que você pode cuspir no lugar de um ataque de arma contra um alvo a até 9 metros. O alvo deve realizar um teste de resistência de Destreza com CD baseada em sua Constituição; se falhar, sofre dano ácido igual a 1d8 multiplicado pelo seu bônus de proficiência. Você pode usar esta característica um número de vezes por Descanso Curto igual à metade do seu bônus de proficiência.",
          "page": 101
        },
        {
          "id": "exoskeleton",
          "name": "Exoesqueleto",
          "originalName": "Exoskeleton",
          "summary": "Seu corpo duro e espinhoso oferece proteção adicional. Ao calcular sua Classe de Armadura, você pode usar seu modificador de Constituição no lugar do modificador de Destreza. Se a armadura impuser um limite máximo de Destreza, esse limite também se aplica ao bônus de Constituição usado desta forma.",
          "description": "Seu corpo duro e espinhoso oferece proteção adicional. Ao calcular sua Classe de Armadura, você pode usar seu modificador de Constituição no lugar do modificador de Destreza. Se a armadura impuser um limite máximo de Destreza, esse limite também se aplica ao bônus de Constituição usado desta forma.",
          "page": 101
        },
        {
          "id": "lunar-traits",
          "name": "Traços Lunares",
          "originalName": "Lunar Traits",
          "summary": "Você evoluiu adaptações que permitem sobreviver no espaço. Não precisa de ar no vácuo e possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "description": "Você evoluiu adaptações que permitem sobreviver no espaço. Não precisa de ar no vácuo e possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base.",
          "page": 101
        },
        {
          "id": "slow-metabolism",
          "name": "Metabolismo Lento",
          "originalName": "Slow Metabolism",
          "summary": "Quando receberia um nível de Exaustão por falta de comida ou água, receba em vez disso 1 ponto de Fadiga de Combate. Esse ponto não pode ser removido até concluir um Descanso depois de consumir comida e água suficientes para suas necessidades diárias. Se já estiver no máximo de Fadiga de Combate, este traço não se ativa e você recebe Exaustão normalmente. Além disso, pode consumir água no lugar de comida e receber a mesma nutrição.",
          "description": "Quando receberia um nível de Exaustão por falta de comida ou água, receba em vez disso 1 ponto de Fadiga de Combate. Esse ponto não pode ser removido até concluir um Descanso depois de consumir comida e água suficientes para suas necessidades diárias. Se já estiver no máximo de Fadiga de Combate, este traço não se ativa e você recebe Exaustão normalmente. Além disso, pode consumir água no lugar de comida e receber a mesma nutrição.",
          "page": 101
        }
      ],
      "originalBloodlineTrait": "Exoskeleton or Slow Metabolism"
    },
    {
      "id": "shrimp",
      "name": "Camarão",
      "originalName": "Shrimp",
      "page": 102,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Uma espécie de Aethuan movida por honra e profundamente espiritual, que luta em defesa da superfície e dos oceanos superiores contra os horrores das profundezas do planeta. São humanoides semelhantes a camarões alienígenas, surpreendentemente atléticos e dotados de um fator de cura natural que os ajuda a evitar dano com facilidade. Muitos desses kua hono de Aethuan partiram para o vazio exolunar em busca de novos horizontes.",
      "bloodlineTrait": "Astronadador",
      "traits": [
        {
          "id": "astro-swimmer",
          "name": "Astronadador",
          "originalName": "Astro Swimmer",
          "summary": "Você é um nadador extremamente eficiente. Como uma ação bônus, pode dobrar seu deslocamento de natação até o início do seu próximo turno. Durante esse período, também pode usar seu deslocamento de natação como velocidade de aceleração 0-G.",
          "description": "Você é um nadador extremamente eficiente. Como uma ação bônus, pode dobrar seu deslocamento de natação até o início do seu próximo turno. Durante esse período, também pode usar seu deslocamento de natação como velocidade de aceleração 0-G.",
          "page": 102
        },
        {
          "id": "exomolt",
          "name": "Exomuda",
          "originalName": "Exomolt",
          "summary": "Quando concluir um Descanso Longo sem ter recebido um novo nível de Exaustão, recupere-se imediatamente de toda a Exaustão. Além disso, ao concluir um Descanso Longo sem uma perna, braço ou parte substancial do corpo, pode abrir mão da recuperação de pontos de vida e Dados de Vida para regenerar essas partes como pelos efeitos da magia *regeneração*.",
          "description": "Quando concluir um Descanso Longo sem ter recebido um novo nível de Exaustão, recupere-se imediatamente de toda a Exaustão. Além disso, ao concluir um Descanso Longo sem uma perna, braço ou parte substancial do corpo, pode abrir mão da recuperação de pontos de vida e Dados de Vida para regenerar essas partes como pelos efeitos da magia *regeneração*.",
          "page": 102
        },
        {
          "id": "shell-shift",
          "name": "Mudança de Carapaça",
          "originalName": "Shell Shift",
          "summary": "Ao alterar o pigmento da carapaça, você consegue esconder-se com mais eficiência. Enquanto estiver Escondido e seu teste de Furtividade superar a Percepção passiva das criaturas que o observam, você é efetivamente Invisível enquanto permanece escondido. Se realizar qualquer deslocamento enquanto estiver Invisível desta forma, o efeito fica suspenso até o início do seu próximo turno.",
          "description": "Ao alterar o pigmento da carapaça, você consegue esconder-se com mais eficiência. Enquanto estiver Escondido e seu teste de Furtividade superar a Percepção passiva das criaturas que o observam, você é efetivamente Invisível enquanto permanece escondido. Se realizar qualquer deslocamento enquanto estiver Invisível desta forma, o efeito fica suspenso até o início do seu próximo turno.",
          "page": 102
        }
      ],
      "originalBloodlineTrait": "Astro Swimmer"
    }
  ],
  "merfolk": [
    {
      "id": "blackmatter-merfolk",
      "name": "Povo do Mar de Matéria Negra",
      "originalName": "Blackmatter Merfolk",
      "page": 103,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Povo do mar é incomum no vazio exolunar por estar distante de seus habitats tradicionais, mas é extremamente numeroso em Aethuan, planeta formado quase inteiramente por oceanos. Entre eles, os de Matéria Negra são os mais comuns. Vivem nas profundezas de coloração sobrenaturalmente escura, cuja tinta parece aderir a seus corpos. Ao longo do tempo desenvolveram meios de repelir e sobreviver às ameaças horríveis que habitam esses abismos.",
      "bloodlineTrait": "Flecha de Espinhos",
      "traits": [
        {
          "id": "lightweight-spacing",
          "name": "Movimento Espacial Leve",
          "originalName": "Lightweight Spacing",
          "summary": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento de natação. Como uma ação bônus, pode dobrar seu deslocamento de natação — e, consequentemente, sua aceleração 0-G — até o fim do turno.",
          "description": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento de natação. Como uma ação bônus, pode dobrar seu deslocamento de natação — e, consequentemente, sua aceleração 0-G — até o fim do turno.",
          "page": 103
        },
        {
          "id": "scales-of-corrosive-resistance",
          "name": "Escamas de Resistência Corrosiva",
          "originalName": "Scales of Corrosive Resistance",
          "summary": "Você possui resistência a dano ácido.",
          "description": "Você possui resistência a dano ácido.",
          "page": 103
        },
        {
          "id": "spine-arrow",
          "name": "Flecha de Espinhos",
          "originalName": "Spine Arrow",
          "summary": "No lugar de um ataque de arma, você pode disparar pequenos espinhos dos braços. Eles funcionam como uma arma simples Leve com alcance de 9/27 metros. Se acertar, causam 1d8 de dano perfurante e dano de veneno adicional igual à metade do seu nível total. Se disparados debaixo d’água, podem tratar o alcance longo como alcance normal.",
          "description": "No lugar de um ataque de arma, você pode disparar pequenos espinhos dos braços. Eles funcionam como uma arma simples Leve com alcance de 9/27 metros. Se acertar, causam 1d8 de dano perfurante e dano de veneno adicional igual à metade do seu nível total. Se disparados debaixo d’água, podem tratar o alcance longo como alcance normal.",
          "page": 103
        }
      ],
      "originalBloodlineTrait": "Spine Arrow"
    },
    {
      "id": "keltuthu-merfolk",
      "name": "Povo do Mar Keltuthu",
      "originalName": "Keltuthu Merfolk",
      "page": 103,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Originários de Aethuan, esses povo do mar já estiveram presos a uma horrenda criatura sobrenatural nas profundezas oceânicas do planeta. Foram mutados e forçados a servi-la, mas muitos construíram uma pequena frota exolunar a partir de naves acidentadas e escaparam. Mantêm suas alterações grotescas e as exibem com orgulho como marcas de seu povo. Muitos keltuthu ainda permanecem em Aethuan sob o domínio da criatura, mas não pertencem à sociedade livre que floresceu entre os fugitivos.",
      "bloodlineTrait": "Tentáculos",
      "traits": [
        {
          "id": "nightmare-resistance",
          "name": "Resistência a Pesadelos",
          "originalName": "Nightmare Resistance",
          "summary": "Você possui resistência a dano psíquico e vantagem em testes de resistência feitos para evitar ficar Amedrontado.",
          "description": "Você possui resistência a dano psíquico e vantagem em testes de resistência feitos para evitar ficar Amedrontado.",
          "page": 103
        },
        {
          "id": "seafarers-darkvision",
          "name": "Visão no Escuro do Marinheiro",
          "originalName": "Seafarer’s Darkvision",
          "summary": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como penumbra e em penumbra como luz plena. Se já possuir Visão no Escuro por outro efeito, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "description": "Você possui Visão no Escuro a 18 metros, enxergando em escuridão como penumbra e em penumbra como luz plena. Se já possuir Visão no Escuro por outro efeito, aumente o alcance em 9 metros ou para 36 metros, o que for maior.",
          "page": 103
        },
        {
          "id": "tentacles",
          "name": "Tentáculos",
          "originalName": "Tentacles",
          "summary": "Seu corpo é coberto por vários tentáculos utilizáveis. Você pode alcançar e interagir com objetos a até 3 metros, e o alcance de suas armas aumenta em 1,5 metro, exceto se a arma já possuir a propriedade Alcance. Efeitos ou magias com alcance de toque também podem alcançar alvos a até 3 metros.",
          "description": "Seu corpo é coberto por vários tentáculos utilizáveis. Você pode alcançar e interagir com objetos a até 3 metros, e o alcance de suas armas aumenta em 1,5 metro, exceto se a arma já possuir a propriedade Alcance. Efeitos ou magias com alcance de toque também podem alcançar alvos a até 3 metros.",
          "page": 103
        }
      ],
      "originalBloodlineTrait": "Tentacles"
    }
  ],
  "minotaur": [
    {
      "id": "boneshell",
      "name": "Carapaça Óssea",
      "originalName": "Boneshell",
      "page": 104,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Nascidos de mutações que engrossaram a pele a níveis extraordinários, os Carapaça Óssea lembram minotauros brancos e rochosos com protuberâncias espinhosas nos ombros e articulações. Fizeram primeiro contato com a Federação enquanto trabalhavam como catadores e mineradores de asteroides e rapidamente aderiram à Confederação para ampliar seus horizontes. Originam-se da Colônia Scuff, uma massa planetária de detritos espaciais que mantém atmosfera própria.",
      "bloodlineTrait": "Touro em Investida",
      "traits": [
        {
          "id": "boneback-scaling",
          "name": "Escamas de Dorso Ósseo",
          "originalName": "Boneback Scaling",
          "summary": "Seu corpo é duro e difícil de ferir graças a uma pele grossa coberta em grande parte por uma carapaça endurecida semelhante a osso. Enquanto não estiver usando armadura, sua CA pode ser calculada como 10 + seu modificador de Destreza + seu modificador de Constituição. Além disso, você possui um Limiar de Dano igual ao dobro do seu bônus de proficiência; dano que não alcance esse limiar é reduzido a 0. Duas vezes por Descanso, ao sofrer dano que excederia o limiar, você pode usar sua reação para elevar o Limiar de Dano até seu valor de Constituição e então reaplicar o dano contra o novo limiar. Esse limiar elevado permanece até o fim do turno.",
          "description": "Seu corpo é duro e difícil de ferir graças a uma pele grossa coberta em grande parte por uma carapaça endurecida semelhante a osso. Enquanto não estiver usando armadura, sua CA pode ser calculada como 10 + seu modificador de Destreza + seu modificador de Constituição. Além disso, você possui um Limiar de Dano igual ao dobro do seu bônus de proficiência; dano que não alcance esse limiar é reduzido a 0. Duas vezes por Descanso, ao sofrer dano que excederia o limiar, você pode usar sua reação para elevar o Limiar de Dano até seu valor de Constituição e então reaplicar o dano contra o novo limiar. Esse limiar elevado permanece até o fim do turno.",
          "page": 104
        },
        {
          "id": "charging-bull",
          "name": "Touro em Investida",
          "originalName": "Charging Bull",
          "summary": "Quando realizar Disparada usando sua ação, você pode realizar como parte dessa ação um ataque de arma contra uma criatura antes do fim do turno. Se acertar, pode usar seu traço Chifres de Pedra como se tivesse realizado a ação Atacar. Se percorrer mais de 6 metros antes desse ataque, ele possui vantagem e causa dano adicional igual ao seu modificador de Constituição.",
          "description": "Quando realizar Disparada usando sua ação, você pode realizar como parte dessa ação um ataque de arma contra uma criatura antes do fim do turno. Se acertar, pode usar seu traço Chifres de Pedra como se tivesse realizado a ação Atacar. Se percorrer mais de 6 metros antes desse ataque, ele possui vantagem e causa dano adicional igual ao seu modificador de Constituição.",
          "page": 104
        },
        {
          "id": "lunar-evolution",
          "name": "Evolução Lunar",
          "originalName": "Lunar Evolution",
          "summary": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base e consegue sobreviver por até 1 hora no vácuo sem ar.",
          "description": "Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base e consegue sobreviver por até 1 hora no vácuo sem ar.",
          "page": 104
        }
      ],
      "originalBloodlineTrait": "Charging Bull"
    },
    {
      "id": "tridead",
      "name": "Tridead",
      "originalName": "Tridead",
      "page": 104,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Marcados por experimentos demonológicos realizados em minotauros, os tridead são seres tocados pelos planos que foram fundidos à força com essência demoníaca. Podem surgir por hereditariedade ou por uma maldição infernal semelhante. Possuem uma forma ainda mais monstruosa, capaz de se transformar em um demônio de quatro braços aterrador até para veteranos de guerra.",
      "bloodlineTrait": "Fúria Extramundana",
      "traits": [
        {
          "id": "abyssal-transformation",
          "name": "Transformação Abissal",
          "originalName": "Abyssal Transformation",
          "summary": "Uma vez por Descanso, você pode usar sua ação ou ação bônus para transformar o corpo por 1 minuto em um avatar demoníaco de destruição. Enquanto estiver transformado: na primeira vez em cada turno que errar um ataque de arma, pode rolar um novo d20 e usá-lo no lugar do resultado, possivelmente alterando o desfecho; torna-se imune ao tipo de dano escolhido para Resistência Mortífera; ataques corpo a corpo feitos contra você possuem vantagem; seus pontos de vida máximos e atuais aumentam em 5 + seu nível total e diminuem imediatamente pelo mesmo valor quando o efeito termina; você cresce uma categoria de tamanho; e seus ataques de arma causam 1d6 de dano adicional.",
          "description": "Uma vez por Descanso, você pode usar sua ação ou ação bônus para transformar o corpo por 1 minuto em um avatar demoníaco de destruição. Enquanto estiver transformado: na primeira vez em cada turno que errar um ataque de arma, pode rolar um novo d20 e usá-lo no lugar do resultado, possivelmente alterando o desfecho; torna-se imune ao tipo de dano escolhido para Resistência Mortífera; ataques corpo a corpo feitos contra você possuem vantagem; seus pontos de vida máximos e atuais aumentam em 5 + seu nível total e diminuem imediatamente pelo mesmo valor quando o efeito termina; você cresce uma categoria de tamanho; e seus ataques de arma causam 1d6 de dano adicional.",
          "page": 104
        },
        {
          "id": "creature-type",
          "name": "Tipo de Criatura",
          "originalName": "Creature Type",
          "summary": "Além de Humanoide e Minotauro, você também é considerado um Ínfero (demônio).",
          "description": "Além de Humanoide e Minotauro, você também é considerado um Ínfero (demônio).",
          "page": 104
        },
        {
          "id": "deathly-resistance",
          "name": "Resistência Mortífera",
          "originalName": "Deathly Resistance",
          "summary": "Você possui resistência a dano ácido, de fogo ou de veneno, à sua escolha quando recebe este traço.",
          "description": "Você possui resistência a dano ácido, de fogo ou de veneno, à sua escolha quando recebe este traço.",
          "page": 104
        },
        {
          "id": "otherworldly-fury",
          "name": "Fúria Extramundana",
          "originalName": "Otherworldly Fury",
          "summary": "Quando estiver com menos da metade do máximo de pontos de vida, uma fúria demoníaca desperta e faz o primeiro ataque que realizar em cada turno possuir vantagem. Enquanto estiver nessa fúria, se um ataque de arma seu possuir vantagem, cause dano adicional igual ao seu modificador de Força ou Constituição, à sua escolha.",
          "description": "Quando estiver com menos da metade do máximo de pontos de vida, uma fúria demoníaca desperta e faz o primeiro ataque que realizar em cada turno possuir vantagem. Enquanto estiver nessa fúria, se um ataque de arma seu possuir vantagem, cause dano adicional igual ao seu modificador de Força ou Constituição, à sua escolha.",
          "page": 104
        }
      ],
      "originalBloodlineTrait": "Otherworldly Fury"
    }
  ],
  "nephilim": [
    {
      "id": "muted",
      "name": "Silenciado",
      "originalName": "Muted",
      "page": 105,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Nascidos com conhecimento e sede por experiência como todos os nefilim, os Silenciados são excelentes em escolher quando se expressar e quando revelar suas capacidades. Observadores, conseguem refletir os talentos alheios e comunicar-se discretamente. Não são necessariamente enganadores, mas frequentemente parecem reservados e evasivos.",
      "bloodlineTrait": "Ponte Telepática",
      "traits": [
        {
          "id": "memory-link",
          "name": "Vínculo de Memória",
          "originalName": "Memory Link",
          "summary": "Você pode alcançar a mente de outros para trazer suas experiências à própria consciência. Como reação ao realizar um teste de perícia, escolha uma criatura a até 18 metros e tente tomar emprestado o talento dela naquela perícia. Se a criatura estiver disposta, por 1 minuto você pode usar o modificador total dela naquela perícia no lugar do seu. Se não estiver disposta, ela deve obter sucesso em um teste de resistência de Sabedoria com CD baseada em seu Carisma para impedir o efeito. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência; se o modificador copiado for menor que o seu modificador atual, nenhum uso é gasto.",
          "description": "Você pode alcançar a mente de outros para trazer suas experiências à própria consciência. Como reação ao realizar um teste de perícia, escolha uma criatura a até 18 metros e tente tomar emprestado o talento dela naquela perícia. Se a criatura estiver disposta, por 1 minuto você pode usar o modificador total dela naquela perícia no lugar do seu. Se não estiver disposta, ela deve obter sucesso em um teste de resistência de Sabedoria com CD baseada em seu Carisma para impedir o efeito. Você pode usar este traço um número de vezes por Descanso igual à metade do seu bônus de proficiência; se o modificador copiado for menor que o seu modificador atual, nenhum uso é gasto.",
          "page": 105
        },
        {
          "id": "quiet-intentions",
          "name": "Intenções Silenciosas",
          "originalName": "Quiet Intentions",
          "summary": "Você é proficiente na perícia Enganação.",
          "description": "Você é proficiente na perícia Enganação.",
          "page": 105
        },
        {
          "id": "telepathic-bridge",
          "name": "Ponte Telepática",
          "originalName": "Telepathic Bridge",
          "summary": "Como uma ação bônus, escolha uma criatura a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Se ela não rejeitar ou encerrar a conexão, vocês dois podem falar telepaticamente enquanto permanecerem dentro desse alcance. A ponte dura até vocês se afastarem além do alcance ou até você usar este traço novamente.",
          "description": "Como uma ação bônus, escolha uma criatura a uma distância igual a 3 metros multiplicados pelo seu bônus de proficiência. Se ela não rejeitar ou encerrar a conexão, vocês dois podem falar telepaticamente enquanto permanecerem dentro desse alcance. A ponte dura até vocês se afastarem além do alcance ou até você usar este traço novamente.",
          "page": 105
        }
      ],
      "originalBloodlineTrait": "Telepathic Bridge"
    },
    {
      "id": "quest",
      "name": "Busca",
      "originalName": "Quest",
      "page": 105,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Após Vestias libertar os nefilim, o Coração Persistente voltou sua curiosidade para o cosmos. Nefilim começaram a aparecer além das fronteiras de Somnus Domina, e os que surgiram no vazio exolunar foram criados com uma mistura de desafio e desejo de viajar: uma necessidade de ver muito mais do universo do que jamais lhes fora permitido.",
      "bloodlineTrait": "Negação da Regressão",
      "traits": [
        {
          "id": "denial-of-regression",
          "name": "Negação da Regressão",
          "originalName": "Denial of Regression",
          "summary": "Uma vez por Descanso, você pode usar sua ação para conceder a si mesmo uma percepção de direção e consciência que o torna quase intocável. Por 1 minuto, sua CA aumenta em metade do seu bônus de proficiência e seu deslocamento não provoca ataques de oportunidade.",
          "description": "Uma vez por Descanso, você pode usar sua ação para conceder a si mesmo uma percepção de direção e consciência que o torna quase intocável. Por 1 minuto, sua CA aumenta em metade do seu bônus de proficiência e seu deslocamento não provoca ataques de oportunidade.",
          "page": 105
        },
        {
          "id": "memory-of-evasion",
          "name": "Memória de Evasão",
          "originalName": "Memory of Evasion",
          "summary": "Quando realizar um teste de resistência que permita sofrer metade do dano de um efeito, você pode usar sua reação para sofrer nenhum dano em caso de sucesso e apenas metade em caso de falha.",
          "description": "Quando realizar um teste de resistência que permita sofrer metade do dano de um efeito, você pode usar sua reação para sofrer nenhum dano em caso de sucesso e apenas metade em caso de falha.",
          "page": 105
        },
        {
          "id": "void-wings",
          "name": "Asas do Vazio",
          "originalName": "Void Wings",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento de voo pairado.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento de voo pairado.",
          "page": 105
        }
      ],
      "originalBloodlineTrait": "Denial of Regression"
    }
  ],
  "orc": [
    {
      "id": "aguedoes-orc",
      "name": "Orc Aguedoes",
      "originalName": "Aguedoes Orc",
      "page": 106,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Destreza +1",
      "description": "Uma das principais raças do mundo quase inteiramente oceânico de Aethuan, esses orcs evoluíram para viver sobre e sob o mar. Seus corpos metabolizam alimento com extrema eficiência e eles são nadadores prolíficos. Essa habilidade corporal se estende aos que viajaram para o espaço exolunar, onde a proficiência na água ajuda a controlar o corpo em ambientes de baixa gravidade.",
      "bloodlineTrait": "Ejetar Fadiga",
      "traits": [
        {
          "id": "jettison-fatigue",
          "name": "Ejetar Fadiga",
          "originalName": "Jettison Fatigue",
          "summary": "Uma vez por Descanso Longo, você pode concentrar toda a energia mental para ignorar exaustão e desgaste físico. A qualquer momento enquanto não estiver Incapacitado, pode iniciar essa concentração e ignorar todos os pontos de Fadiga de Combate e níveis de Exaustão por 1 minuto. Quando o minuto terminar, ou se você ficar Incapacitado, os efeitos retornam e você recebe 1 ponto adicional de Fadiga de Combate e 1 nível adicional de Exaustão.",
          "description": "Uma vez por Descanso Longo, você pode concentrar toda a energia mental para ignorar exaustão e desgaste físico. A qualquer momento enquanto não estiver Incapacitado, pode iniciar essa concentração e ignorar todos os pontos de Fadiga de Combate e níveis de Exaustão por 1 minuto. Quando o minuto terminar, ou se você ficar Incapacitado, os efeitos retornam e você recebe 1 ponto adicional de Fadiga de Combate e 1 nível adicional de Exaustão.",
          "page": 106
        },
        {
          "id": "sea-life",
          "name": "Vida Marinha",
          "originalName": "Sea Life",
          "summary": "Você possui deslocamento de natação igual ao seu deslocamento-base e pode prender a respiração pelo dobro do tempo normal. Também possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento de natação. Quando usar seu traço Arrancada de Fúria, pode mover-se até seu deslocamento de natação completo como parte desse movimento.",
          "description": "Você possui deslocamento de natação igual ao seu deslocamento-base e pode prender a respiração pelo dobro do tempo normal. Também possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento de natação. Quando usar seu traço Arrancada de Fúria, pode mover-se até seu deslocamento de natação completo como parte desse movimento.",
          "page": 106
        },
        {
          "id": "supreme-metabolism",
          "name": "Metabolismo Supremo",
          "originalName": "Supreme Metabolism",
          "summary": "Você possui vantagem em testes de resistência contra Envenenado e contra qualquer efeito causado por alimento estragado ou contaminado. Precisa apenas de um quarto da comida e água normalmente exigidas diariamente por uma criatura do seu tamanho, embora, se estiver faminto ou desidratado, ainda realize diariamente testes contra Exaustão como de costume.",
          "description": "Você possui vantagem em testes de resistência contra Envenenado e contra qualquer efeito causado por alimento estragado ou contaminado. Precisa apenas de um quarto da comida e água normalmente exigidas diariamente por uma criatura do seu tamanho, embora, se estiver faminto ou desidratado, ainda realize diariamente testes contra Exaustão como de costume.",
          "page": 106
        }
      ],
      "originalBloodlineTrait": "Jettison Fatigue"
    },
    {
      "id": "mutaliate-orc",
      "name": "Orc Mutaliate",
      "originalName": "Mutaliate Orc",
      "page": 106,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Constituição +1",
      "description": "Uma linhagem volátil de orcs exposta à radiação da Lágrima Cósmica durante uma etapa crucial de sua evolução. Desde então, seus genes se alteram aleatoriamente ao longo da vida, embora o corpo permaneça estável apesar das mutações constantes.",
      "bloodlineTrait": "Sangue Misto",
      "traits": [
        {
          "id": "mixed-blood",
          "name": "Sangue Misto",
          "originalName": "Mixed Blood",
          "summary": "Para características secundárias de Sangue Misto, você pode escolher o traço Mutações desta subraça. Se fizer isso, só recebe uma nova mutação quando seu bônus de proficiência alcançar um valor par subsequente, especificamente +4 e +6.",
          "description": "Para características secundárias de Sangue Misto, você pode escolher o traço Mutações desta subraça. Se fizer isso, só recebe uma nova mutação quando seu bônus de proficiência alcançar um valor par subsequente, especificamente +4 e +6.",
          "page": 106
        },
        {
          "id": "mutations",
          "name": "Mutações",
          "originalName": "Mutations",
          "summary": "Ao criar seu personagem, determine duas mutações rolando 1d12 duas vezes; você recebe ambas independentemente como traços raciais. Sempre que alcançar um nível em que seu bônus de proficiência aumente, receba uma nova mutação determinada por 1d12, repetindo resultados de mutações que já possua.",
          "description": "Ao criar seu personagem, determine duas mutações rolando 1d12 duas vezes; você recebe ambas independentemente como traços raciais. Sempre que alcançar um nível em que seu bônus de proficiência aumente, receba uma nova mutação determinada por 1d12, repetindo resultados de mutações que já possua.",
          "page": 106
        },
        {
          "id": "blooming-stomach",
          "name": "Estômago Florescente",
          "originalName": "Blooming Stomach",
          "summary": "Quando realizar um teste de resistência de Constituição, pode adicionar metade do seu bônus de proficiência, a menos que já seja proficiente nesse teste de resistência.",
          "description": "Quando realizar um teste de resistência de Constituição, pode adicionar metade do seu bônus de proficiência, a menos que já seja proficiente nesse teste de resistência.",
          "page": 106
        },
        {
          "id": "broken-mind",
          "name": "Mente Quebrada",
          "originalName": "Broken Mind",
          "summary": "Devido à maneira incomum como sua mente funciona, você não pode ficar Enfeitiçado.",
          "description": "Devido à maneira incomum como sua mente funciona, você não pode ficar Enfeitiçado.",
          "page": 106
        },
        {
          "id": "darksight",
          "name": "Visão Sombria",
          "originalName": "Darksight",
          "summary": "Você recebe Visão no Escuro a 9 metros. Se já possuir Visão no Escuro, aumente o alcance em 9 metros.",
          "description": "Você recebe Visão no Escuro a 9 metros. Se já possuir Visão no Escuro, aumente o alcance em 9 metros.",
          "page": 106
        },
        {
          "id": "ferocious-antibodies",
          "name": "Anticorpos Ferozes",
          "originalName": "Ferocious Antibodies",
          "summary": "Você possui resistência a dano de veneno e vantagem em testes de resistência feitos para evitar ficar Envenenado.",
          "description": "Você possui resistência a dano de veneno e vantagem em testes de resistência feitos para evitar ficar Envenenado.",
          "page": 106
        },
        {
          "id": "inexhaustible",
          "name": "Inexaurível",
          "originalName": "Inexhaustible",
          "summary": "Quando estiver sofrendo níveis de Exaustão, sofra as penalidades como se tivesse apenas metade dos níveis. Chegar a 6 níveis de Exaustão ainda causa sua morte.",
          "description": "Quando estiver sofrendo níveis de Exaustão, sofra as penalidades como se tivesse apenas metade dos níveis. Chegar a 6 níveis de Exaustão ainda causa sua morte.",
          "page": 106
        },
        {
          "id": "killmore-streak",
          "name": "Sequência de Abates",
          "originalName": "Killmore Streak",
          "summary": "Quando reduzir uma criatura hostil a 0 pontos de vida com um ataque, receba pontos de vida temporários iguais ao dano que excedeu os pontos de vida restantes do alvo.",
          "description": "Quando reduzir uma criatura hostil a 0 pontos de vida com um ataque, receba pontos de vida temporários iguais ao dano que excedeu os pontos de vida restantes do alvo.",
          "page": 106
        },
        {
          "id": "monstrous-physique",
          "name": "Físico Monstruoso",
          "originalName": "Monstrous Physique",
          "summary": "Você é Grande e seu máximo de pontos de vida aumenta em um valor igual ao seu nível atual. Daqui em diante, sempre que ganhar um novo nível, seu máximo de pontos de vida aumenta em 1.",
          "description": "Você é Grande e seu máximo de pontos de vida aumenta em um valor igual ao seu nível atual. Daqui em diante, sempre que ganhar um novo nível, seu máximo de pontos de vida aumenta em 1.",
          "page": 106
        },
        {
          "id": "obsessive-mind",
          "name": "Mente Obsessiva",
          "originalName": "Obsessive Mind",
          "summary": "Escolha uma perícia. Você possui Especialização nela.",
          "description": "Escolha uma perícia. Você possui Especialização nela.",
          "page": 106
        },
        {
          "id": "strongman",
          "name": "Fortão",
          "originalName": "Strongman",
          "summary": "Você é proficiente na perícia Atletismo.",
          "description": "Você é proficiente na perícia Atletismo.",
          "page": 106
        },
        {
          "id": "uncanny-eye",
          "name": "Olho Sobrenatural",
          "originalName": "Uncanny Eye",
          "summary": "Você pode adicionar metade do seu bônus de proficiência à Percepção passiva, a menos que outra característica já permita fazê-lo.",
          "description": "Você pode adicionar metade do seu bônus de proficiência à Percepção passiva, a menos que outra característica já permita fazê-lo.",
          "page": 106
        },
        {
          "id": "unnatural-lungs",
          "name": "Pulmões Antinaturais",
          "originalName": "Unnatural Lungs",
          "summary": "Você não precisa de ar no vácuo e consegue respirar ar e água.",
          "description": "Você não precisa de ar no vácuo e consegue respirar ar e água.",
          "page": 106
        },
        {
          "id": "xenoadaptation",
          "name": "Xenoadaptação",
          "originalName": "Xenoadaptation",
          "summary": "Role na tabela de reencarnação de *Lyre’s Guide to Retia* e escolha um Traço de Legado da raça obtida. Você recebe esse traço.",
          "description": "Role na tabela de reencarnação de *Lyre’s Guide to Retia* e escolha um Traço de Legado da raça obtida. Você recebe esse traço.",
          "page": 106
        }
      ],
      "originalBloodlineTrait": "Mixed Blood",
      "mutationTable": [
        {
          "d12": 1,
          "traitId": "blooming-stomach",
          "traitName": "Estômago Florescente",
          "originalTraitName": "Blooming Stomach"
        },
        {
          "d12": 2,
          "traitId": "broken-mind",
          "traitName": "Mente Quebrada",
          "originalTraitName": "Broken Mind"
        },
        {
          "d12": 3,
          "traitId": "darksight",
          "traitName": "Visão Sombria",
          "originalTraitName": "Darksight"
        },
        {
          "d12": 4,
          "traitId": "ferocious-antibodies",
          "traitName": "Anticorpos Ferozes",
          "originalTraitName": "Ferocious Antibodies"
        },
        {
          "d12": 5,
          "traitId": "inexhaustible",
          "traitName": "Inexaurível",
          "originalTraitName": "Inexhaustible"
        },
        {
          "d12": 6,
          "traitId": "killmore-streak",
          "traitName": "Sequência de Abates",
          "originalTraitName": "Killmore Streak"
        },
        {
          "d12": 7,
          "traitId": "monstrous-physique",
          "traitName": "Físico Monstruoso",
          "originalTraitName": "Monstrous Physique"
        },
        {
          "d12": 8,
          "traitId": "obsessive-mind",
          "traitName": "Mente Obsessiva",
          "originalTraitName": "Obsessive Mind"
        },
        {
          "d12": 9,
          "traitId": "strongman",
          "traitName": "Fortão",
          "originalTraitName": "Strongman"
        },
        {
          "d12": 10,
          "traitId": "uncanny-eye",
          "traitName": "Olho Sobrenatural",
          "originalTraitName": "Uncanny Eye"
        },
        {
          "d12": 11,
          "traitId": "unnatural-lungs",
          "traitName": "Pulmões Antinaturais",
          "originalTraitName": "Unnatural Lungs"
        },
        {
          "d12": 12,
          "traitId": "xenoadaptation",
          "traitName": "Xenoadaptação",
          "originalTraitName": "Xenoadaptation"
        }
      ]
    }
  ],
  "primordia": [
    {
      "id": "astral-soul",
      "name": "Alma Astral",
      "originalName": "Astral Soul",
      "page": 107,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Primordia de Alma Astral são ligados ao Plano Astral e frequentemente vivem nele. Devido aos perigos do plano, muitos deixam sua terra natal e alternam entre o Plano Material e o Astral, preferindo o espaço exolunar por sua semelhança com o lar. Normalmente possuem pele negra como breu, cabelos violetas ou rosa-claro e olhos sem íris ou pupilas. Ao canalizar magia, antigas runas astrais brilham na pele. Graças ao controle inato da gravidade, costumam flutuar em vez de andar, enquanto roupas e cabelos derivam como se estivessem submersos.",
      "bloodlineTrait": "Postura Flutuante",
      "traits": [
        {
          "id": "buoyant-stance",
          "name": "Postura Flutuante",
          "originalName": "Buoyant Stance",
          "summary": "Quando sofrer dano de queda, ignore no cálculo uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência. Além disso, você não pode ficar Caído a menos que esteja Incapacitado: quando seria derrubado, simplesmente flutua no espaço sem sofrer a queda.",
          "description": "Quando sofrer dano de queda, ignore no cálculo uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência. Além disso, você não pode ficar Caído a menos que esteja Incapacitado: quando seria derrubado, simplesmente flutua no espaço sem sofrer a queda.",
          "page": 107
        },
        {
          "id": "cosmic-surfer",
          "name": "Surfista Cósmico",
          "originalName": "Cosmic Surfer",
          "summary": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e deslocamento de voo pairado igual à metade do seu deslocamento-base.",
          "description": "Você possui velocidade de aceleração 0-G igual ao dobro do seu deslocamento-base e deslocamento de voo pairado igual à metade do seu deslocamento-base.",
          "page": 107
        },
        {
          "id": "gravity-manipulator",
          "name": "Manipulador Gravitacional",
          "originalName": "Gravity Manipulator",
          "summary": "Você exerce certo controle sobre como a gravidade afeta os objetos que carrega. Sua capacidade de carga aumenta em cerca de 34 kg, dobrando para cada categoria de tamanho acima de Médio. Ao realizar um ataque corpo a corpo com uma arma sem a propriedade Alcance, pode tratá-la como se tivesse Alcance, arremessando-a brevemente pelo ar e puxando-a de volta.",
          "description": "Você exerce certo controle sobre como a gravidade afeta os objetos que carrega. Sua capacidade de carga aumenta em cerca de 34 kg, dobrando para cada categoria de tamanho acima de Médio. Ao realizar um ataque corpo a corpo com uma arma sem a propriedade Alcance, pode tratá-la como se tivesse Alcance, arremessando-a brevemente pelo ar e puxando-a de volta.",
          "page": 107
        },
        {
          "id": "spatial-resistance",
          "name": "Resistência Espacial",
          "originalName": "Spatial Resistance",
          "summary": "Você possui resistência a dano radiante ou de força, à sua escolha quando recebe este traço.",
          "description": "Você possui resistência a dano radiante ou de força, à sua escolha quando recebe este traço.",
          "page": 107
        }
      ],
      "originalBloodlineTrait": "Buoyant Stance",
      "elementalMagicSpells": {
        "cantrip": "Respiração Exterior",
        "level1": "Colisão Astral",
        "level2": "Purga Gravitacional"
      }
    },
    {
      "id": "lunar-anntiqe",
      "name": "Anntiqe Lunar",
      "originalName": "Lunar Anntiqe",
      "page": 107,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Anntiqes Lunares são vinculados às forças do Plano Astral e normalmente nascem de pais de primeira geração que foram isolados ou fugiram para lá. Possuem olhos totalmente brancos, sem pupila ou esclera, e membros cobertos por uma massa de tecido mutável semelhante ao próprio espaço. O restante da pele tem textura de pedra embranquecida, como a superfície de um meteoro. Muitos os comparam a cometas vivos.",
      "bloodlineTrait": "Aspecto do Vazio",
      "traits": [
        {
          "id": "aspect-of-the-void",
          "name": "Aspecto do Vazio",
          "originalName": "Aspect of the Void",
          "summary": "Quando sofrer dano radiante, reduza o dano em um valor igual ao seu nível total. Você também sofre apenas metade do dano de quedas.",
          "description": "Quando sofrer dano radiante, reduza o dano em um valor igual ao seu nível total. Você também sofre apenas metade do dano de quedas.",
          "page": 107
        },
        {
          "id": "selective-teleport",
          "name": "Teleporte Seletivo",
          "originalName": "Selective Teleport",
          "summary": "Em um ambiente de gravidade zero, você possui deslocamento de teleporte igual ao seu deslocamento-base.",
          "description": "Em um ambiente de gravidade zero, você possui deslocamento de teleporte igual ao seu deslocamento-base.",
          "page": 107
        },
        {
          "id": "warp-shove",
          "name": "Empurrão de Dobra",
          "originalName": "Warp Shove",
          "summary": "Como uma ação, realize um teste de Atletismo, podendo usar seu modificador de habilidade de conjuração no lugar de Força caso possua uma. Cada criatura à sua escolha a até 1,5 metro é tratada como se você tivesse tentado Empurrá-la usando esse mesmo resultado. Uma criatura que perder a disputa fica Caída e é empurrada 1,5 metro, ou é empurrada por uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência, à sua escolha.",
          "description": "Como uma ação, realize um teste de Atletismo, podendo usar seu modificador de habilidade de conjuração no lugar de Força caso possua uma. Cada criatura à sua escolha a até 1,5 metro é tratada como se você tivesse tentado Empurrá-la usando esse mesmo resultado. Uma criatura que perder a disputa fica Caída e é empurrada 1,5 metro, ou é empurrada por uma distância igual a 1,5 metro multiplicado pelo seu bônus de proficiência, à sua escolha.",
          "page": 107
        }
      ],
      "originalBloodlineTrait": "Aspect of the Void",
      "elementalMagicSpells": {
        "cantrip": "Respiração Exterior",
        "level1": "Estase",
        "level2": "Barragem Radiante"
      }
    }
  ],
  "trealtin": [
    {
      "id": "lycanvam",
      "name": "Lycanvam",
      "originalName": "Lycanvam",
      "page": 108,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "Crescimentos lycanvam são plantas carnívoras espaciais que engolem criaturas vivas inteiras e, ao consumi-las, absorvem parte de seus traços e qualidades. Os trealtin lycanvam descendem de uma linhagem antiga que absorveu empatia e humanidade das vítimas e gerou uma nova geração de formas humanoides capaz de elevar-se acima de seus parentes bestiais.",
      "bloodlineTrait": "Sangue Misto",
      "traits": [
        {
          "id": "mixed-blood",
          "name": "Sangue Misto",
          "originalName": "Mixed Blood",
          "summary": "Para características secundárias de Sangue Misto, você pode escolher o traço Legado Digestivo desta subraça; se o fizer, entretanto, escolhe apenas um traço de outra raça em vez de dois.",
          "description": "Para características secundárias de Sangue Misto, você pode escolher o traço Legado Digestivo desta subraça; se o fizer, entretanto, escolhe apenas um traço de outra raça em vez de dois.",
          "page": 108
        },
        {
          "id": "digestive-legacy",
          "name": "Legado Digestivo",
          "originalName": "Digestive Legacy",
          "summary": "Você herdou características de criaturas consumidas por gerações anteriores. Escolha dois Traços de Legado, um de cada uma de duas outras raças, como se ambas fossem suas raças secundárias, e receba esses traços além de seus dois Traços de Legado normais.",
          "description": "Você herdou características de criaturas consumidas por gerações anteriores. Escolha dois Traços de Legado, um de cada uma de duas outras raças, como se ambas fossem suas raças secundárias, e receba esses traços além de seus dois Traços de Legado normais.",
          "page": 108
        },
        {
          "id": "trait-vampire",
          "name": "Vampiro de Traços",
          "originalName": "Trait Vampire",
          "summary": "Você consegue adaptar-se e consumir temporariamente os traços de outros seres. Este traço pode ser usado de três maneiras: ao obter 20 natural em um teste de resistência contra um efeito que causaria dano, você se torna resistente àquele tipo de dano; se uma criatura voluntária estiver a até 1,5 metro, pode usar sua ação bônus para consumir parte do sangue dela, causando 1d6 de dano e recebendo as resistências e imunidades que ela possui — imunidades tornam-se resistências, incluindo imunidades a condições — e usar o traço em outra criatura substitui os benefícios anteriores; ou, ao obter um acerto crítico contra uma criatura, você recebe as mesmas resistências e imunidades a dano dela, novamente tratando imunidades como resistências. Ao concluir um Descanso, você perde todos os benefícios adquiridos por este traço.",
          "description": "Você consegue adaptar-se e consumir temporariamente os traços de outros seres. Este traço pode ser usado de três maneiras: ao obter 20 natural em um teste de resistência contra um efeito que causaria dano, você se torna resistente àquele tipo de dano; se uma criatura voluntária estiver a até 1,5 metro, pode usar sua ação bônus para consumir parte do sangue dela, causando 1d6 de dano e recebendo as resistências e imunidades que ela possui — imunidades tornam-se resistências, incluindo imunidades a condições — e usar o traço em outra criatura substitui os benefícios anteriores; ou, ao obter um acerto crítico contra uma criatura, você recebe as mesmas resistências e imunidades a dano dela, novamente tratando imunidades como resistências. Ao concluir um Descanso, você perde todos os benefícios adquiridos por este traço.",
          "page": 108
        }
      ],
      "originalBloodlineTrait": "Mixed Blood"
    },
    {
      "id": "moonmoss-golem",
      "name": "Golem de Musgo Lunar",
      "originalName": "Moonmoss Golem",
      "page": 108,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Força +1",
      "description": "À primeira vista, musgos lunares parecem apenas grupos de rochas ou minerais vagamente organizados em forma humanoide. Um observador atento, porém, percebe a verdade: trata-se de um sistema vivo de raízes semelhante a musgo, que cobre uma substância rígida e a manipula como um fantoche. As raízes e rochas são fundamentalmente ligadas e só ganham vida quando as raízes formam algo semelhante a um sistema nervoso entre os minerais. Essa ligação cria vulnerabilidades, mas também permite absorver nutrientes e minerais do ambiente e convertê-los lentamente em material para reparar o corpo.",
      "bloodlineTrait": "Visão Cega",
      "traits": [
        {
          "id": "blind-vision",
          "name": "Visão Cega",
          "originalName": "Blind Vision",
          "summary": "Você não enxerga como uma criatura comum. Independentemente da iluminação, sempre percebe luz plena como penumbra e penumbra como escuridão. Entretanto, possui Visão às Cegas a uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência. Se possuir Visão às Cegas por outra fonte, some este valor ao alcance existente.",
          "description": "Você não enxerga como uma criatura comum. Independentemente da iluminação, sempre percebe luz plena como penumbra e penumbra como escuridão. Entretanto, possui Visão às Cegas a uma distância igual a 4,5 metros multiplicados pelo seu bônus de proficiência. Se possuir Visão às Cegas por outra fonte, some este valor ao alcance existente.",
          "page": 108
        },
        {
          "id": "crumble-rush",
          "name": "Arrancada em Escombros",
          "originalName": "Crumble Rush",
          "summary": "Quando estiver Impedido ou Agarrado, você pode usar uma ação bônus para desfazer-se em suas partes componentes e se recompor em um espaço adjacente, encerrando o agarrão ou o efeito que o impedia. Você também pode usar a mesma tática para atravessar outras criaturas: ao se desmontar em pedaços, pode mover-se através dos espaços de criaturas Médias ou maiores sem custo adicional de deslocamento e passar por aberturas de apenas cerca de 30 cm de largura.",
          "description": "Quando estiver Impedido ou Agarrado, você pode usar uma ação bônus para desfazer-se em suas partes componentes e se recompor em um espaço adjacente, encerrando o agarrão ou o efeito que o impedia. Você também pode usar a mesma tática para atravessar outras criaturas: ao se desmontar em pedaços, pode mover-se através dos espaços de criaturas Médias ou maiores sem custo adicional de deslocamento e passar por aberturas de apenas cerca de 30 cm de largura.",
          "page": 108
        },
        {
          "id": "tethered-swing",
          "name": "Golpe com Raízes Estendidas",
          "originalName": "Tethered Swing",
          "summary": "Você pode alongar suas raízes e os membros que carregam suas armas. Seus ataques com armas alcançam 1,5 metro adicional, sem alterar o alcance de seus ataques de oportunidade. Seus ataques desarmados também passam a contar como armas com a propriedade Acuidade que causam 1d6 de dano contundente, mais 1d6 para cada categoria de tamanho acima de Médio que você possua.",
          "description": "Você pode alongar suas raízes e os membros que carregam suas armas. Seus ataques com armas alcançam 1,5 metro adicional, sem alterar o alcance de seus ataques de oportunidade. Seus ataques desarmados também passam a contar como armas com a propriedade Acuidade que causam 1d6 de dano contundente, mais 1d6 para cada categoria de tamanho acima de Médio que você possua.",
          "page": 108
        }
      ],
      "originalBloodlineTrait": "Blind Vision"
    }
  ],
  "vanquis": [
    {
      "id": "future-burdened",
      "name": "Sobrecarregado pelo Futuro",
      "originalName": "Future Burdened",
      "page": 109,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Carisma +1",
      "description": "O tempo no espaço exolunar pode ser dobrado e deslocado por fenômenos gravitacionais e diferentes formas de viagem de dobra. Em ocorrências estranhas, um indivíduo pode existir em pontos temporais sobrepostos, coexistindo com o próprio eu futuro. Quem morre nessas circunstâncias — ou sofre uma morte especialmente sobrenatural — pode ter a alma “arremessada de volta” no tempo, colidindo com o eu anterior e fundindo-se a ele. O desalinhamento da alma causa uma forma de não-vida e concede percepção vaga da futura morte. A mente apaga conhecimentos que não deveria possuir, mas lampejos do futuro ainda podem ajudar a preparar-se para o que virá. Talvez, ao superar a destruição prevista, o indivíduo consiga escapar de sua não-vida.",
      "bloodlineTrait": "Circunstâncias Conhecidas",
      "traits": [
        {
          "id": "known-circumstances",
          "name": "Circunstâncias Conhecidas",
          "originalName": "Known Circumstances",
          "summary": "Você não pode ser Surpreendido em combate, nem mesmo enquanto estiver Inconsciente: seu conhecimento do que está por vir faz você despertar e reagir ao que pode acontecer.",
          "description": "Você não pode ser Surpreendido em combate, nem mesmo enquanto estiver Inconsciente: seu conhecimento do que está por vir faz você despertar e reagir ao que pode acontecer.",
          "page": 109
        },
        {
          "id": "mental-shield",
          "name": "Escudo Mental",
          "originalName": "Mental Shield",
          "summary": "Você possui resistência a dano psíquico.",
          "description": "Você possui resistência a dano psíquico.",
          "page": 109
        },
        {
          "id": "token-knowledge",
          "name": "Conhecimento Fragmentário",
          "originalName": "Token Knowledge",
          "summary": "Quando fizer uma jogada de ataque, teste de atributo ou teste de resistência que teria desvantagem, pode transformar essa desvantagem em vantagem ao recordar brevemente o futuro em que tomou a decisão errada. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "description": "Quando fizer uma jogada de ataque, teste de atributo ou teste de resistência que teria desvantagem, pode transformar essa desvantagem em vantagem ao recordar brevemente o futuro em que tomou a decisão errada. Você pode fazer isso um número de vezes por Descanso igual à metade do seu bônus de proficiência.",
          "page": 109
        }
      ],
      "originalBloodlineTrait": "Known Circumstances"
    },
    {
      "id": "space-corpse",
      "name": "Cadáver Espacial",
      "originalName": "Space Corpse",
      "page": 109,
      "source": "Somnus Domina — Zagalhta's Exolunar Collection",
      "sourceId": "zagalhta-exolunar",
      "ability": "Inteligência +1",
      "description": "Corpos deixados no vácuo são expostos à energia eidomântica, à força direta da luz de estrelas possivelmente mágicas e a condições impiedosas que queimam e congelam simultaneamente. Vanquis que retornam à atividade dentro de um corpo perdido no espaço carregam essa origem: a pele fica escurecida e queimada, e suas feições são reduzidas a um estado quase esterilizado.",
      "bloodlineTrait": "Pele Calcificada",
      "traits": [
        {
          "id": "calcified-hide",
          "name": "Pele Calcificada",
          "originalName": "Calcified Hide",
          "summary": "Sua pele endureceu pela exposição às condições do espaço exolunar e adquiriu textura de carapaça. Quando sofrer dano contundente, perfurante ou cortante, pode usar sua reação para reduzir o dano à metade. Se esse dano o reduziria a 0 pontos de vida, você fica com 1 ponto de vida em vez disso.",
          "description": "Sua pele endureceu pela exposição às condições do espaço exolunar e adquiriu textura de carapaça. Quando sofrer dano contundente, perfurante ou cortante, pode usar sua reação para reduzir o dano à metade. Se esse dano o reduziria a 0 pontos de vida, você fica com 1 ponto de vida em vez disso.",
          "page": 109
        },
        {
          "id": "star-ghost",
          "name": "Fantasma Estelar",
          "originalName": "Star Ghost",
          "summary": "Seu corpo consegue resistir à gravidade por breves períodos. Como uma ação bônus, conceda a si mesmo deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. Esses deslocamentos desaparecem no início do seu próximo turno, a menos que use novamente sua ação bônus para prolongá-los.",
          "description": "Seu corpo consegue resistir à gravidade por breves períodos. Como uma ação bônus, conceda a si mesmo deslocamento de voo pairado igual ao seu deslocamento-base e velocidade de aceleração 0-G igual ao dobro disso. Esses deslocamentos desaparecem no início do seu próximo turno, a menos que use novamente sua ação bônus para prolongá-los.",
          "page": 109
        },
        {
          "id": "sun-resistance",
          "name": "Resistência Solar",
          "originalName": "Sun Resistance",
          "summary": "Você possui resistência a dano de fogo.",
          "description": "Você possui resistência a dano de fogo.",
          "page": 109
        }
      ],
      "originalBloodlineTrait": "Calcified Hide"
    }
  ]
};

  window.GRIMORIO_RACES=window.GRIMORIO_RACES||[];
  const existingRaceIds=new Set(window.GRIMORIO_RACES.map(r=>r.id));
  for(const race of newRaces){if(existingRaceIds.has(race.id))throw new Error('ID de raça duplicado em Zagalhta: '+race.id);window.GRIMORIO_RACES.push(race);existingRaceIds.add(race.id);}
  for(const [parent,subs] of Object.entries(additionalByParent))append(parent,subs);

  if(window.GRIMORIO_RACE_RULES){
    window.GRIMORIO_RACE_RULES.textQuality='O catálogo combinado preserva o conteúdo racial revisado de Lyre e Blade, Bone, & Benefit e acrescenta Zagalhta’s Exolunar Collection, com 5 raças-base e 82 novas subraças traduzidas integralmente para PT-BR. As mecânicas 5.19, Traços de Legado, Sangue Misto e adaptações exolunares são mantidas conforme a fonte.';
    window.GRIMORIO_RACE_RULES.zagalhtaExolunar={
      source:SOURCE,sourceId:SOURCE_ID,sourcePages:'61–110',racePages:'63–76',subracePages:'77–110',newRaces:5,newRaceSubraces:15,additionalSubraces:67,totalAddedSubraces:82,
      universalLegacyTraits:[
        {name:'Pulmões Cósmicos',originalName:'Cosmic Lungs',page:62,description:'Você consegue prender a respiração por 10 minutos enquanto estiver submerso em líquidos ou em uma atmosfera sufocante, e por 1 hora no vácuo.'},
        {name:'Salto Gravitacional',originalName:'Grav Jump',page:62,description:'Você pode realizar Saltos em Altura e em Distância a partir de uma posição parada, e a distância de ambos aumenta em 3 metros (10 pés).'},
        {name:'Resistência Espacial',originalName:'Spatial Resistance',page:62,description:'Escolha frio ou radiante ao receber este traço. Você possui resistência ao tipo de dano escolhido.'},
        {name:'Magia do Vazio',originalName:'Void Magic',page:62,description:'Escolha uma magia de Astromancia de 1º nível e uma de 2º nível. Você pode conjurá-las usando espaços de magia que possua ou gastando usos deste traço iguais ao nível em que deseja conjurá-las, sem gastar espaço de magia nem componentes materiais. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração. Você possui usos por Descanso Longo iguais ao bônus de proficiência.'},
        {name:'Movimento 0-G',originalName:'0-G Movement',page:62,description:'Você possui velocidade de aceleração 0-G igual ao seu deslocamento-base. Se já possuir uma velocidade de aceleração 0-G, ela aumenta em um valor igual ao seu deslocamento-base.'}
      ]
    };
  }
})();
