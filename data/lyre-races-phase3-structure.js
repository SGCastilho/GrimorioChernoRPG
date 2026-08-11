'use strict';
// Fase 3 — correções estruturais identificadas pela releitura das páginas impressas 241–280.
(function(){
  const races=window.GRIMORIO_RACES||[];
  const byId=new Map(races.map(r=>[r.id,r]));

  // Hobgoblin: Hospitalidade, Passagem e Despeito são opções internas de Orientação Feérica,
  // não Traços de Legado independentes.
  {
    const r=byId.get('hobgoblin');
    if(r) r.legacyTraits=r.legacyTraits.filter(t=>!['hospitality','passage','spite'].includes(t.id));
  }

  // Hanyou: a subraça usa uma camada própria de Traços de Herança.
  // Personagens Hanyou dominantes escolhem 2 positivos + 2 prejudiciais; os prejudiciais
  // são removidos progressivamente nos níveis 8 e 13. Se Hanyou for a raça secundária,
  // Linhagem é automática e uma escolha de Legado é convertida em 1 positivo + 1 prejudicial.
  {
    const r=byId.get('hanyou');
    if(r){
      r.heritageRules={
        positiveChoices:2,
        detrimentalChoices:2,
        removeDetrimentalAt:[8,13],
        secondaryPositiveChoices:1,
        secondaryDetrimentalChoices:1,
        secondaryBloodlineAutomatic:true,
        secondaryLegacySlotsUsed:1
      };
    }
  }

  // Hádislin: Legado Amaldiçoado depende de uma tabela de magias por subraça.
  // Guardamos a relação na própria subraça para a interface exibi-la junto da escolha.
  {
    const r=byId.get('hadislin');
    const spells={
      'broken':['Golpe Incendiário','Golpe Marcante'],
      'chained':['Disco Flutuante','Fechadura Arcana'],
      'corroded':['Disfarçar-se','Invisibilidade'],
      'cosmoth':['Repreensão Infernal','Escuridão'],
      'entropic':['Véu de Ilsrabae','Escuridão'],
      'forgelith':['Disfarçar-se','Detectar Pensamentos'],
      'scorched':['Enfeitiçar Pessoa','Sugestão'],
      'void-law':['Raio de Enfermidade','Loucura Cegante'],
      'wallwalker':['Mãos Flamejantes','Lâmina Flamejante'],
      'celestine':['Heroísmo','Restauração Menor'],
      'chlorite':['Raio de Enfermidade','Flecha Ácida'],
      'howlite':['Curar Ferimentos','Arma Espiritual'],
      'jasper':['Golpe da Valquíria','Lufada de Vento'],
      'jetstone':['Maldição','Arma Sombria'],
      'kyanite':['Cristal Perfurante','Tempestade de Bolas de Neve'],
      'obsidian':['Explosão do Caos','Escuridão'],
      'pyrite':['Identificação','Zona da Verdade'],
      'sodalite':['Leque Cromático','Cegueira/Surdez'],
      'spinel':['Repreensão Infernal','Esquentar Metal']
    };
    if(r) for(const s of r.subraces){
      const pair=spells[s.id];
      if(pair) s.cursedLegacySpells={characterLevel3:pair[0],characterLevel5:pair[1]};
    }
  }
})();
