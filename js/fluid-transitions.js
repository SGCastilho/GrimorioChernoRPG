/* Grimório v5.36 — navegação fluida e microtransições sem dependências. */
(function(){
  'use strict';

  const reducedMotion=typeof window.matchMedia==='function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : {matches:false};
  let navigationTimer=0;
  let pendingNavigation=null;

  function reduced(){return !!reducedMotion.matches}
  function main(){return document.getElementById('mainContent')}
  function routeKey(view,id){return String(view||'home')+'::'+String(id||'')}
  function currentRouteKey(){
    try{return routeKey(route?.view,route?.id)}catch(_){return ''}
  }

  function restartClass(element,className){
    if(!element||reduced())return;
    element.classList.remove(className);
    /* Força o navegador a considerar a próxima adição como uma nova animação. */
    void element.offsetWidth;
    element.classList.add(className);
    window.setTimeout(()=>element.classList.remove(className),260);
  }

  function animateLocalUpdate(){
    if(reduced())return;
    let target=null;
    try{
      if(route?.view==='class'||route?.view==='subclass') target=document.getElementById('consultation-content');
      else if(route?.view==='races') target=document.getElementById('raceCatalogResults');
      else if(route?.view==='equipment') target=document.getElementById('equipmentResults')||document.querySelector('.equipment-results');
      else if(route?.view==='spells') target=document.querySelector('.spell-grid,.spell-list,.spells-grid');
    }catch(_){/* ambiente de teste sem route */}
    if(target)restartClass(target,'ui-local-enter');
  }

  function finishPageEntry(){
    const content=main();
    if(!content)return;
    content.classList.remove('ui-page-leaving');
    restartClass(content,'ui-page-entering');
  }

  function installNavigationTransition(){
    if(typeof navigate!=='function')return;
    const baseNavigate=navigate;
    navigate=function(view,id){
      const targetKey=routeKey(view,id);
      const same=currentRouteKey()===targetKey;
      if(reduced()||same){
        window.clearTimeout(navigationTimer);
        pendingNavigation=null;
        baseNavigate(view,id);
        if(same)window.requestAnimationFrame(animateLocalUpdate);
        return;
      }

      const content=main();
      if(!content){baseNavigate(view,id);return}
      pendingNavigation={view,id};
      window.clearTimeout(navigationTimer);
      content.classList.remove('ui-page-entering');
      content.classList.add('ui-page-leaving');
      navigationTimer=window.setTimeout(()=>{
        const next=pendingNavigation;
        pendingNavigation=null;
        if(!next)return;
        baseNavigate(next.view,next.id);
        window.requestAnimationFrame(()=>window.requestAnimationFrame(finishPageEntry));
      },105);
    };
  }

  function wrapLocalAction(name){
    const original=window[name];
    if(typeof original!=='function'||original.__grimorioTransitionWrapped)return;
    const wrapped=function(){
      const result=original.apply(this,arguments);
      window.requestAnimationFrame(()=>window.requestAnimationFrame(animateLocalUpdate));
      return result;
    };
    wrapped.__grimorioTransitionWrapped=true;
    window[name]=wrapped;
  }

  function animateOpenedDetails(event){
    const detail=event.target;
    if(!detail||detail.tagName!=='DETAILS'||!detail.open||reduced())return;
    const bodies=[...detail.children].filter(child=>child.tagName!=='SUMMARY');
    bodies.forEach((body,index)=>{
      body.classList.remove('ui-detail-enter');
      void body.offsetWidth;
      window.setTimeout(()=>{
        body.classList.add('ui-detail-enter');
        window.setTimeout(()=>body.classList.remove('ui-detail-enter'),260);
      },Math.min(index*18,54));
    });
  }

  function installDetailsTransitions(){
    document.addEventListener('toggle',animateOpenedDetails,true);
  }

  function observeMainChanges(){
    const content=main();
    if(!content||typeof MutationObserver!=='function')return;
    let lastHash=location.hash;
    const observer=new MutationObserver(()=>{
      /* Back/forward e mudanças de hash externas não passam pela função navigate envolvida. */
      if(location.hash!==lastHash){
        lastHash=location.hash;
        window.requestAnimationFrame(finishPageEntry);
      }
    });
    observer.observe(content,{childList:true});
  }

  function init(){
    installNavigationTransition();
    wrapLocalAction('setConsultationTab');
    wrapLocalAction('setConsultationLevel');
    installDetailsTransitions();
    observeMainChanges();
    window.requestAnimationFrame(finishPageEntry);

    window.GRIMORIO_TRANSITIONS={
      animatePage:finishPageEntry,
      animateLocal:animateLocalUpdate,
      reducedMotion:reduced
    };
  }

  if(typeof document!=='undefined'){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
    else init();
  }
})();
