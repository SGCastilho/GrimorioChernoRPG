'use strict';
// Lyre — revisão racial Fase 4 (5.30.4): correções estruturais do bloco final.
(function(){
  const races=window.GRIMORIO_RACES||[];
  const byId=new Map(races.map(r=>[r.id,r]));
  const findSub=(rid,sid)=>byId.get(rid)?.subraces?.find(s=>s.id===sid);
  const removeTraits=(rid,sid,ids)=>{
    const s=findSub(rid,sid); if(!s)return;
    const set=new Set(ids); s.traits=s.traits.filter(t=>!set.has(t.id));
  };
  const ensureMixed=(rid,trait)=>{
    const r=byId.get(rid);if(!r)return;
    if(!r.mixedBloodTraits.some(t=>t.id===trait.id))r.mixedBloodTraits.unshift(trait);
  };
  const ensureSubTrait=(rid,sid,trait)=>{
    const s=findSub(rid,sid);if(!s)return;
    if(!s.traits.some(t=>t.id===trait.id))s.traits.push(trait);
  };

  // Kua Hono (Lagarto): Scent Tracker havia sido omitido na extração inicial.
  ensureSubTrait('kua-hono','lizard',{id:'scent-tracker',name:'Rastreador por Odor',originalName:'Scent Tracker',summary:'Localiza criaturas ocultas e invisíveis pelo olfato.',page:288});

  // Nefilim: a fonte inclui Linhagem entre os Traços de Sangue Misto.
  ensureMixed('nephilim',{id:'bloodline',name:'Linhagem',originalName:'Bloodline',summary:'Escolha 1 traço de linhagem dentre as opções de subraça indicadas.',page:296});

  // Trealtin: as quatro entradas abaixo são opções internas de Spore Puff, não traços de subraça independentes.
  removeTraits('trealtin','fungalform',['communicative-spores','healing-cloud','pacifying-spores','poison-spores']);

  // Vanquis (Carniçal): Tiny/Small/Medium/Large são linhas da tabela interna de Feeding Frenzy.
  removeTraits('vanquis','ghoul',['tiny','small','medium','large-and-larger']);

  // Primordia: tornar explícita a tabela de Magia Elemental da subraça escolhida.
  const elementalSpells={
    'air-soul':{cantrip:'Rajada (Gust)',level1:'Queda Suave (Feather Fall)',level2:'Vínculo Gravitacional (Gravity Bind)'},
    'ash-anntiqe':{cantrip:'Manto de Cinzas (Ash Coat)',level1:'Golpe Incendiário (Igniting Smite)',level2:'Esquentar Metal (Heat Metal)'},
    'earth-soul':{cantrip:'Manipular Terra (Manipulate Earth)',level1:'Erupção Terrestre (Earthen Eruption)',level2:'Agarre Terrestre (Earthen Grasp)'},
    'fire-soul':{cantrip:'Raio de Fogo (Fire Bolt)',level1:'Mãos Flamejantes (Burning Hands)',level2:'Lâmina Flamejante (Flame Blade)'},
    'frost-anntiqe':{cantrip:'Mordida Gélida (Frostbite)',level1:'Cristal Perfurante (Piercing Crystal)',level2:'Gelo Aprisionante (Binding Ice)'},
    'storm-anntiqe':{cantrip:'Corrente Elétrica (Electric Chain)',level1:'Raio Dominante (Seizing Bolt)',level2:'Tela de Nuvens (Cloud Canvas)'},
    'water-soul':{cantrip:'Manipular Água (Manipulate Water)',level1:'Limpeza Sistêmica (System Flush)',level2:'Aspecto do Habitante do Mar (Sea-Dweller’s Aspect)'},
    'wood-anntiqe':{cantrip:'Devastação Bestial (Bestial Ravage)',level1:'Enredar (Entangle)',level2:'Crescer Espinhos (Spike Growth)'}
  };
  const prim=byId.get('primordia');
  if(prim){
    for(const s of prim.subraces||[]) if(elementalSpells[s.id]) s.elementalMagicSpells=elementalSpells[s.id];
  }

  // A subraça Litorânea do Povo do Mar possui na fonte uma linha incompleta: “Your score increases by 1.”
  // Não inferir atributo ausente; registrar a lacuna editorial explicitamente.
  const shoreline=findSub('merfolk','shoreline');
  if(shoreline){
    shoreline.ability='A fonte diz apenas “um atributo aumenta em 1” (atributo não especificado)';
    shoreline.editorialNote='A linha de Aumento no Valor de Habilidade da subraça Litorânea está incompleta no PDF: “Your score increases by 1.” O Grimório não infere qual atributo deveria receber o +1.';
  }

  // Marca de escopo para auditoria/validação.
  window.GRIMORIO_RACE_PHASE4_IDS=['kits-adria','kobold','kua-hono','merfolk','minotaur','nephilim','orc','petratara','primordia','tarnished','trealtin','vanquis'];
})();
