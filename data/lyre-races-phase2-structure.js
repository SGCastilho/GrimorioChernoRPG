'use strict';
// Fase 2 — correções estruturais identificadas pela releitura das páginas impressas 197–240.
(function(){
  const races=window.GRIMORIO_RACES||[];
  const byId=new Map(races.map(r=>[r.id,r]));
  const trait=(id,name,originalName,page,summary)=>({id,name,originalName,summary,page});
  const ensure=(arr,t,afterId=null)=>{
    if(!Array.isArray(arr)||arr.some(x=>x.id===t.id))return;
    const i=afterId?arr.findIndex(x=>x.id===afterId):-1;
    if(i>=0)arr.splice(i+1,0,t); else arr.push(t);
  };

  // Capy'hado: o bloco de Sangue Misto também contém Linhagem; a primeira extração a omitiu.
  {
    const r=byId.get('capy-hado');
    if(r) ensure(r.mixedBloodTraits,trait('bloodline','Linhagem','Bloodline',206,'Permite escolher um traço associado a uma das subraças Capy’hado.'));
  }

  // Anão Sermiano: Visão às Cegas faz parte da subraça antes de Marca da Presa.
  {
    const r=byId.get('dwarf'); const s=r?.subraces?.find(x=>x.id==='sermian-dwarf');
    if(s) ensure(s.traits,trait('blindsight','Visão às Cegas','Blindsight',215,'Visão às Cegas com alcance igual a 1,5 m × bônus de proficiência.'));
  }

  // Feralus: Pressa Felina é traço racial fixo, não apenas opção de Sangue Misto.
  {
    const r=byId.get('feralus');
    if(r) ensure(r.coreTraits,trait('feline-haste','Pressa Felina','Feline Haste',228,'Pode dobrar o deslocamento no turno; recarrega após passar um turno sem se mover.'),'darkvision');
  }

  // Elfo Selvagem: Outono e Primavera são opções internas de Forma Sazonal, não traços separados.
  {
    const r=byId.get('elf'); const s=r?.subraces?.find(x=>x.id==='wild-elf');
    if(s) s.traits=s.traits.filter(t=>!['autumn-form','spring-form'].includes(t.id));
  }

  // Enáretos: uma quebra de página havia deslocado Passagem Radiante e traços da Glória
  // para Sangue Misto, e Ler Adiante havia sido omitido da Profecia.
  {
    const r=byId.get('enaretos');
    if(r){
      r.mixedBloodTraits=r.mixedBloodTraits.filter(t=>['bloodline','celestial-wings'].includes(t.id));
      const discovery=r.subraces.find(x=>x.id==='discovery');
      const prophecy=r.subraces.find(x=>x.id==='prophecy');
      if(discovery) ensure(discovery.traits,trait('radiant-passage','Passagem Radiante','Radiant Passage',225,'Ação bônus; recebe recuo acelerado, evita ataques de oportunidade e aumenta o voo por 1 minuto.'),'guided-by-faith');
      if(prophecy) ensure(prophecy.traits,trait('reading-forward','Ler Adiante','Reading Forward',226,'Reação; tenta substituir o d20 de um ataque contra você por uma visão antecipada do resultado.'),'providence');
    }
  }
})();
