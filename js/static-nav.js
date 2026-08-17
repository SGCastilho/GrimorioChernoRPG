'use strict';

// Fonte única para os itens estáticos usados pelo menu-base e por ui-enhancements.
(function defineStaticNavigation(global){
  const icon = {
    home:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>',
    ability:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 8h8M8 12h8M8 16h8"/><path d="M10 6v4M14 10v4M11 14v4"/></svg>',
    races:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 19V8l7-4 7 4v11"/><path d="M8 10h8M8 14h8M9 19v-3h6v3"/></svg>',
    backgrounds:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h10a4 4 0 014 4v12H8a3 3 0 01-3-3z"/><path d="M8 4v16M11 8h5M11 12h5"/></svg>',
    equipment:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3l4 4-4 4-4-4zM13 5h8M17 5v14M13 19h8"/><path d="M4 16l5-5 4 4-5 5z"/></svg>',
    feats:'<svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8z"/><path d="M9.2 18.2L8 22l4-2 4 2-1.2-3.8"/></svg>'
  };
  global.GRIMORIO_STATIC_NAV=Object.freeze([
    {view:'home',label:'Painel',icon:icon.home,activeViews:['home']},
    {view:'ability-planner',label:'Planejador de Atributos',icon:icon.ability,activeViews:['ability-planner']},
    {view:'races',label:'Raças e Subraças',icon:icon.races,activeViews:['races','race']},
    {view:'backgrounds',label:'Antecedentes',icon:icon.backgrounds,activeViews:['backgrounds','background']},
    {view:'equipment',label:'Equipamentos',icon:icon.equipment,activeViews:['equipment']},
    {view:'feats',label:'Talentos',icon:icon.feats,activeViews:['feats','feat']}
  ]);
})(window);
