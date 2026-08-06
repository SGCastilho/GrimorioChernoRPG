'use strict';

/*
 * Tabelas de progressão do Capítulo 3 do Livro do Jogador.
 * Os dados são mantidos separados da apresentação para permitir filtros,
 * destaques por nível, exportações futuras e comparação entre classes.
 */
(function () {
  const DASH = '—';
  const proficiency = level => '+' + (2 + Math.floor((level - 1) / 4));
  const slots = values => Object.fromEntries(Array.from({length:9}, (_, index) => ['slot' + (index + 1), values[index] || DASH]));
  const fullCasterSlots = [
    [2], [3], [4,2], [4,3], [4,3,2], [4,3,3], [4,3,3,1], [4,3,3,2], [4,3,3,3,1], [4,3,3,3,2],
    [4,3,3,3,2,1], [4,3,3,3,2,1], [4,3,3,3,2,1,1], [4,3,3,3,2,1,1], [4,3,3,3,2,1,1,1],
    [4,3,3,3,2,1,1,1], [4,3,3,3,2,1,1,1,1], [4,3,3,3,3,1,1,1,1], [4,3,3,3,3,2,1,1,1], [4,3,3,3,3,2,2,1,1]
  ];
  const spellSlotColumns = (max = 9) => Array.from({length:max}, (_,i) => ({
    key:'slot' + (i + 1), label:(i + 1) + 'º', title:'Espaços de magia de ' + (i + 1) + 'º nível', group:'Espaços de Magia'
  }));
  const baseColumns = [
    {key:'level', label:'Nível', sticky:true},
    {key:'proficiency', label:'Bônus de Proficiência', shortLabel:'Prof.'},
    {key:'features', label:'Características', wide:true}
  ];
  const makeRows = (features, extras = {}) => Array.from({length:20}, (_,i) => {
    const level = i + 1;
    return {level, proficiency:proficiency(level), features:features[i] || [], ...(extras[level] || {})};
  });
  const withFullSlots = (rows) => rows.map((row,i) => ({...row, ...slots(fullCasterSlots[i])}));

  const barbarianFeatures = [
    ['Fúria','Defesa sem Armadura'], ['Ataque Descuidado','Sentido de Perigo'], ['Caminho Primitivo'], ['Incremento no Valor de Habilidade'],
    ['Ataque Extra','Movimento Rápido'], ['Característica de Caminho Primitivo'], ['Instinto Selvagem'], ['Incremento no Valor de Habilidade'],
    ['Crítico Brutal (+1 dado)'], ['Característica de Caminho Primitivo'], ['Fúria Implacável'], ['Incremento no Valor de Habilidade'],
    ['Crítico Brutal (+2 dados)'], ['Característica de Caminho Primitivo'], ['Fúria Persistente'], ['Incremento no Valor de Habilidade'],
    ['Crítico Brutal (+3 dados)'], ['Força Indomável'], ['Incremento no Valor de Habilidade'], ['Campeão Primitivo']
  ];
  const barbarianExtras = {};
  const rageUses = [2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,'Ilimitado'];
  const rageDamage = ['+2','+2','+2','+2','+2','+2','+2','+2','+3','+3','+3','+3','+3','+3','+3','+4','+4','+4','+4','+4'];
  for (let level=1; level<=20; level++) barbarianExtras[level] = {rages:rageUses[level-1], rageDamage:rageDamage[level-1]};

  const bardFeatures = [
    ['Conjuração','Inspiração de Bardo (d6)'], ['Versatilidade','Canção do Descanso (d6)'], ['Colégio de Bardo','Aptidão'], ['Incremento no Valor de Habilidade'],
    ['Inspiração de Bardo (d8)','Fonte de Inspiração'], ['Característica de Colégio de Bardo','Canção de Proteção'], [], ['Incremento no Valor de Habilidade'],
    ['Canção do Descanso (d8)'], ['Inspiração de Bardo (d10)','Aptidão','Segredos Mágicos'], [], ['Incremento no Valor de Habilidade'],
    ['Canção do Descanso (d10)'], ['Característica de Colégio de Bardo','Segredos Mágicos'], ['Inspiração de Bardo (d12)'], ['Incremento no Valor de Habilidade'],
    ['Canção do Descanso (d12)'], ['Segredos Mágicos'], ['Incremento no Valor de Habilidade'], ['Inspiração Superior']
  ];
  const bardCantrips = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
  const bardSpells = [4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22];
  let bardRows = withFullSlots(makeRows(bardFeatures));
  bardRows = bardRows.map((r,i)=>({...r, cantrips:bardCantrips[i], spellsKnown:bardSpells[i]}));

  const warlockFeatures = [
    ['Patrono Transcendental','Magia de Pacto'], ['Invocações Místicas'], ['Dádiva do Pacto'], ['Incremento no Valor de Habilidade'], [],
    ['Característica de Patrono Transcendental'], [], ['Incremento no Valor de Habilidade'], [], ['Característica de Patrono Transcendental'],
    ['Arcana Mística (6º nível)'], ['Incremento no Valor de Habilidade'], ['Arcana Mística (7º nível)'], ['Característica de Patrono Transcendental'],
    ['Arcana Mística (8º nível)'], ['Incremento no Valor de Habilidade'], ['Arcana Mística (9º nível)'], [], ['Incremento no Valor de Habilidade'], ['Mestre Místico']
  ];
  const warlockCantrips = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
  const warlockSpells = [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15];
  const warlockSlots = [1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4];
  const warlockSlotLevel = ['1º','1º','2º','2º','3º','3º','4º','4º','5º','5º','5º','5º','5º','5º','5º','5º','5º','5º','5º','5º'];
  const invocations = [DASH,2,2,2,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8];
  const warlockRows = makeRows(warlockFeatures).map((r,i)=>({...r,cantrips:warlockCantrips[i],spellsKnown:warlockSpells[i],pactSlots:warlockSlots[i],slotLevel:warlockSlotLevel[i],invocations:invocations[i]}));

  const clericFeatures = [
    ['Conjuração','Domínio Divino'], ['Canalizar Divindade (1/descanso)','Característica de Domínio Divino'], [], ['Incremento no Valor de Habilidade'],
    ['Destruir Mortos-Vivos (ND 1/2)'], ['Canalizar Divindade (2/descanso)','Característica de Domínio Divino'], [],
    ['Incremento no Valor de Habilidade','Destruir Mortos-Vivos (ND 1)','Característica de Domínio Divino'], [], ['Intervenção Divina'],
    ['Destruir Mortos-Vivos (ND 2)'], ['Incremento no Valor de Habilidade'], [], ['Destruir Mortos-Vivos (ND 3)'], [],
    ['Incremento no Valor de Habilidade'], ['Destruir Mortos-Vivos (ND 4)','Característica de Domínio Divino'], ['Canalizar Divindade (3/descanso)'],
    ['Incremento no Valor de Habilidade'], ['Aprimoramento de Intervenção Divina']
  ];
  const clericCantrips = [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5];
  let clericRows = withFullSlots(makeRows(clericFeatures)).map((r,i)=>({...r,cantrips:clericCantrips[i]}));

  const druidFeatures = [
    ['Druídico','Conjuração'], ['Círculo Druídico','Forma Selvagem'], [], ['Aprimoramento de Forma Selvagem','Incremento no Valor de Habilidade'], [],
    ['Característica de Círculo Druídico'], [], ['Aprimoramento de Forma Selvagem','Incremento no Valor de Habilidade'], [], ['Característica de Círculo Druídico'],
    [], ['Incremento no Valor de Habilidade'], [], ['Característica de Círculo Druídico'], [], ['Incremento no Valor de Habilidade'], [],
    ['Corpo Atemporal','Magias da Besta'], ['Incremento no Valor de Habilidade'], ['Arquidruida']
  ];
  const druidCantrips = [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
  let druidRows = withFullSlots(makeRows(druidFeatures)).map((r,i)=>({...r,cantrips:druidCantrips[i]}));

  const sorcererFeatures = [
    ['Conjuração','Origem de Feitiçaria'], ['Fonte de Magia'], ['Metamágica'], ['Incremento no Valor de Habilidade'], [],
    ['Característica de Origem de Feitiçaria'], [], ['Incremento no Valor de Habilidade'], [], ['Metamágica'], [],
    ['Incremento no Valor de Habilidade'], [], ['Característica de Origem de Feitiçaria'], [], ['Incremento no Valor de Habilidade'],
    ['Metamágica'], ['Característica de Origem de Feitiçaria'], ['Incremento no Valor de Habilidade'], ['Restauração Mística']
  ];
  const sorcererCantrips = [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6];
  const sorcererSpells = [2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15];
  let sorcererRows = withFullSlots(makeRows(sorcererFeatures)).map((r,i)=>({...r,sorceryPoints:i===0?DASH:i+1,cantrips:sorcererCantrips[i],spellsKnown:sorcererSpells[i]}));

  const fighterFeatures = [
    ['Estilo de Luta','Retomar o Fôlego'], ['Surto de Ação (um uso)'], ['Arquétipo Marcial'], ['Incremento no Valor de Habilidade'], ['Ataque Extra'],
    ['Incremento no Valor de Habilidade'], ['Característica de Arquétipo Marcial'], ['Incremento no Valor de Habilidade'], ['Indomável (um uso)'],
    ['Característica de Arquétipo Marcial'], ['Ataque Extra (2)'], ['Incremento no Valor de Habilidade'], ['Indomável (dois usos)'],
    ['Incremento no Valor de Habilidade'], ['Característica de Arquétipo Marcial'], ['Incremento no Valor de Habilidade'],
    ['Surto de Ação (dois usos)','Indomável (três usos)'], ['Característica de Arquétipo Marcial'], ['Incremento no Valor de Habilidade'], ['Ataque Extra (3)']
  ];
  const fighterRows = makeRows(fighterFeatures);

  const rogueFeatures = [
    ['Especialização','Ataque Furtivo','Gíria de Ladrão'], ['Ação Ardilosa'], ['Arquétipo de Ladino'], ['Incremento no Valor de Habilidade'],
    ['Esquiva Sobrenatural'], ['Especialização'], ['Evasão'], ['Incremento no Valor de Habilidade'], ['Característica de Arquétipo de Ladino'],
    ['Incremento no Valor de Habilidade'], ['Talento Confiável'], ['Incremento no Valor de Habilidade'], ['Característica de Arquétipo de Ladino'],
    ['Sentido Cego'], ['Mente Escorregadia'], ['Incremento no Valor de Habilidade'], ['Característica de Arquétipo de Ladino'],
    ['Elusivo'], ['Incremento no Valor de Habilidade'], ['Golpe de Sorte']
  ];
  const sneakAttack = ['1d6','1d6','2d6','2d6','3d6','3d6','4d6','4d6','5d6','5d6','6d6','6d6','7d6','7d6','8d6','8d6','9d6','9d6','10d6','10d6'];
  const rogueRows = makeRows(rogueFeatures).map((r,i)=>({...r,sneakAttack:sneakAttack[i]}));

  const wizardFeatures = [
    ['Conjuração','Recuperação Arcana'], ['Tradição Arcana'], [], ['Incremento no Valor de Habilidade'], [], ['Característica de Tradição Arcana'], [],
    ['Incremento no Valor de Habilidade'], [], ['Característica de Tradição Arcana'], [], ['Incremento no Valor de Habilidade'], [],
    ['Característica de Tradição Arcana'], [], ['Incremento no Valor de Habilidade'], [], ['Dominar Magia'], ['Incremento no Valor de Habilidade'], ['Assinatura Mágica']
  ];
  const wizardCantrips = [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5];
  let wizardRows = withFullSlots(makeRows(wizardFeatures)).map((r,i)=>({...r,cantrips:wizardCantrips[i]}));

  const monkFeatures = [
    ['Defesa sem Armadura','Artes Marciais'], ['Chi','Movimento sem Armadura'], ['Tradição Monástica','Defletir Projéteis'],
    ['Incremento no Valor de Habilidade','Queda Lenta'], ['Ataque Extra','Ataque Atordoante'], ['Golpes de Chi','Característica de Tradição Monástica'],
    ['Evasão','Mente Tranquila'], ['Incremento no Valor de Habilidade'], ['Aprimoramento de Movimento sem Armadura'], ['Pureza Corporal'],
    ['Característica de Tradição Monástica'], ['Incremento no Valor de Habilidade'], ['Idiomas do Sol e da Lua'], ['Alma de Diamante'], ['Corpo Atemporal'],
    ['Incremento no Valor de Habilidade'], ['Característica de Tradição Monástica'], ['Corpo Vazio'], ['Incremento no Valor de Habilidade'], ['Auto Aperfeiçoamento']
  ];
  const martialArts = ['1d4','1d4','1d4','1d4','1d6','1d6','1d6','1d6','1d6','1d6','1d8','1d8','1d8','1d8','1d8','1d8','1d10','1d10','1d10','1d10'];
  const kiPoints = [DASH,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const unarmoredMove = [DASH,'+3 m','+3 m','+3 m','+3 m','+4,5 m','+4,5 m','+4,5 m','+4,5 m','+6 m','+6 m','+6 m','+6 m','+7,5 m','+7,5 m','+7,5 m','+7,5 m','+9 m','+9 m','+9 m'];
  const monkRows = makeRows(monkFeatures).map((r,i)=>({...r,martialArts:martialArts[i],kiPoints:kiPoints[i],unarmoredMove:unarmoredMove[i]}));

  const paladinFeatures = [
    ['Sentido Divino','Cura pelas Mãos'], ['Estilo de Luta','Conjuração','Destruição Divina'], ['Saúde Divina','Juramento Sagrado'],
    ['Incremento no Valor de Habilidade'], ['Ataque Extra'], ['Aura de Proteção'], ['Característica de Juramento Sagrado'],
    ['Incremento no Valor de Habilidade'], [], ['Aura da Coragem'], ['Destruição Divina Aprimorada'], ['Incremento no Valor de Habilidade'],
    [], ['Toque Purificador'], ['Característica de Juramento Sagrado'], ['Incremento no Valor de Habilidade'], [], ['Aprimoramentos de Aura'],
    ['Incremento no Valor de Habilidade'], ['Característica de Juramento Sagrado']
  ];
  const paladinSlots = [
    [], [2], [3], [3], [4,2], [4,2], [4,3], [4,3], [4,3,2], [4,3,2], [4,3,3], [4,3,3], [4,3,3,1], [4,3,3,1],
    [4,3,3,2], [4,3,3,2], [4,3,3,3,1], [4,3,3,3,1], [4,3,3,3,2], [4,3,3,3,2]
  ];
  const paladinRows = makeRows(paladinFeatures).map((r,i)=>({...r,...slots(paladinSlots[i])}));

  const rangerFeatures = [
    ['Inimigo Favorito','Explorador Natural'], ['Estilo de Luta','Conjuração'], ['Conclave de Patrulheiro','Consciência Primitiva'],
    ['Incremento no Valor de Habilidade'], ['Característica de Conclave de Patrulheiro'], ['Inimigo Favorito Maior'],
    ['Característica de Conclave de Patrulheiro'], ['Incremento no Valor de Habilidade','Pés Rápidos'], [], ['Mimetismo'],
    ['Característica de Conclave de Patrulheiro'], ['Incremento no Valor de Habilidade'], [], ['Desaparecer'],
    ['Característica de Conclave de Patrulheiro'], ['Incremento no Valor de Habilidade'], [], ['Sentidos Selvagens'],
    ['Incremento no Valor de Habilidade'], ['Matador de Inimigos']
  ];
  const rangerSpellsKnown = [DASH,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
  const rangerSlots = [
    [], [2], [3], [3], [4,2], [4,2], [4,3], [4,3], [4,3,2], [4,3,2], [4,3,3], [4,3,3], [4,3,3,1], [4,3,3,1],
    [4,3,3,2], [4,3,3,2], [4,3,3,3,1], [4,3,3,3,1], [4,3,3,3,2], [4,3,3,3,2]
  ];
  const rangerRows = makeRows(rangerFeatures).map((r,i)=>({...r,spellsKnown:rangerSpellsKnown[i],...slots(rangerSlots[i])}));

  window.GRIMORIO_CLASS_PROGRESSIONS = {
    barbarian:{id:'barbarian',title:'O Bárbaro',sourcePage:47,columns:[...baseColumns,{key:'rages',label:'Fúrias'},{key:'rageDamage',label:'Dano de Fúria'}],rows:makeRows(barbarianFeatures,barbarianExtras)},
    bard:{id:'bard',title:'O Bardo',sourcePage:53,columns:[...baseColumns,{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},{key:'spellsKnown',label:'Magias Conhecidas'},...spellSlotColumns(9)],rows:bardRows},
    warlock:{id:'warlock',title:'O Bruxo',sourcePage:57,columns:[...baseColumns,{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},{key:'spellsKnown',label:'Magias Conhecidas'},{key:'pactSlots',label:'Espaços de Magia'},{key:'slotLevel',label:'Nível de Magia'},{key:'invocations',label:'Invocações Conhecidas'}],rows:warlockRows},
    cleric:{id:'cleric',title:'O Clérigo',sourcePage:64,columns:[...baseColumns,{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},...spellSlotColumns(9)],rows:clericRows},
    druid:{id:'druid',title:'O Druida',sourcePage:72,columns:[...baseColumns,{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},...spellSlotColumns(9)],rows:druidRows},
    sorcerer:{id:'sorcerer',title:'O Feiticeiro',sourcePage:78,columns:[...baseColumns,{key:'sorceryPoints',label:'Pontos de Feitiçaria'},{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},{key:'spellsKnown',label:'Magias Conhecidas'},...spellSlotColumns(9)],rows:sorcererRows},
    fighter:{id:'fighter',title:'O Guerreiro',sourcePage:84,columns:baseColumns,rows:fighterRows},
    rogue:{id:'rogue',title:'O Ladino',sourcePage:90,columns:[{key:'level',label:'Nível',sticky:true},{key:'proficiency',label:'Bônus de Proficiência',shortLabel:'Prof.'},{key:'sneakAttack',label:'Ataque Furtivo'},{key:'features',label:'Características',wide:true}],rows:rogueRows},
    wizard:{id:'wizard',title:'O Mago',sourcePage:95,columns:[...baseColumns,{key:'cantrips',label:'Truques Conhecidos',shortLabel:'Truques'},...spellSlotColumns(9)],rows:wizardRows},
    monk:{id:'monk',title:'O Monge',sourcePage:103,columns:[{key:'level',label:'Nível',sticky:true},{key:'proficiency',label:'Bônus de Proficiência',shortLabel:'Prof.'},{key:'martialArts',label:'Artes Marciais'},{key:'kiPoints',label:'Pontos de Chi'},{key:'unarmoredMove',label:'Deslocamento sem Armadura'},{key:'features',label:'Características',wide:true}],rows:monkRows},
    paladin:{id:'paladin',title:'O Paladino',sourcePage:109,columns:[...baseColumns,...spellSlotColumns(5)],rows:paladinRows},
    ranger:{id:'ranger',title:'O Patrulheiro',sourcePage:116,columns:[...baseColumns,{key:'spellsKnown',label:'Magias Conhecidas'},...spellSlotColumns(5)],rows:rangerRows}
  };

  window.getClassProgression = function (classId) {
    return window.GRIMORIO_CLASS_PROGRESSIONS[classId] || null;
  };
})();
