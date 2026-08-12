/* Grimório v5.37 — sidebar adaptativa com modo fixado persistente. */
(function(){
  'use strict';

  const DESKTOP_QUERY='(min-width: 861px)';
  const PIN_STORAGE_KEY='grimorio-sidebar-pinned-v1';
  const desktopMedia=typeof window.matchMedia==='function'
    ? window.matchMedia(DESKTOP_QUERY)
    : {matches:true,addEventListener:null,addListener:null};
  let sidebar=null;
  let app=null;
  let pinButton=null;
  let pointerInside=false;
  let focusInside=false;
  let pinned=false;
  let collapseTimer=0;
  let observer=null;

  function desktop(){return desktopMedia.matches}

  function readPinned(){
    try{return localStorage.getItem(PIN_STORAGE_KEY)==='1'}catch(_){return false}
  }

  function savePinned(){
    try{localStorage.setItem(PIN_STORAGE_KEY,pinned?'1':'0')}catch(_){}
  }

  function syncPinUi(){
    if(!sidebar)return;
    sidebar.classList.toggle('is-pinned',pinned&&desktop());
    app?.classList.toggle('sidebar-pinned',pinned&&desktop());
    if(pinButton){
      pinButton.setAttribute('aria-pressed',pinned?'true':'false');
      pinButton.setAttribute('aria-label',pinned?'Desafixar menu lateral':'Fixar menu lateral');
      pinButton.setAttribute('title',pinned?'Desafixar menu lateral':'Fixar menu lateral');
      const label=pinButton.querySelector('.sidebar-pin-label');
      if(label)label.textContent=pinned?'Menu fixado':'Fixar menu';
    }
  }

  function setDesktopExpanded(expanded){
    if(!sidebar||!app)return;
    const value=desktop()&&(pinned||!!expanded);
    sidebar.classList.toggle('is-expanded',value);
    app.classList.toggle('sidebar-expanded',value);
    sidebar.setAttribute('data-sidebar-state',value?'expanded':'collapsed');
    syncPinUi();
  }

  function setPinned(value){
    pinned=!!value;
    savePinned();
    syncPinUi();
    if(desktop())setDesktopExpanded(pinned||pointerInside||focusInside);
  }

  function togglePin(){
    if(!desktop())return;
    setPinned(!pinned);
  }

  function setMobileOpen(open){
    if(!sidebar)return;
    const value=!!open&&!desktop();
    sidebar.classList.toggle('open',value);
    document.body.classList.toggle('sidebar-mobile-open',value);
    sidebar.setAttribute('aria-hidden',value?'false':'true');
    if(value){
      const close=sidebar.querySelector('.sidebar-mobile-close');
      window.setTimeout(()=>close?.focus({preventScroll:true}),20);
    }
  }

  function scheduleCollapse(){
    window.clearTimeout(collapseTimer);
    if(pinned)return;
    collapseTimer=window.setTimeout(()=>{
      if(!pointerInside&&!focusInside)setDesktopExpanded(false);
    },90);
  }

  function enhanceNavLabels(root){
    if(!root)return;
    root.querySelectorAll('.nav-item').forEach(item=>{
      const label=item.querySelector('.nav-label');
      const text=(label?.textContent||item.textContent||'').replace(/\s+/g,' ').trim();
      if(text){
        item.setAttribute('title',text);
        if(!item.hasAttribute('aria-label'))item.setAttribute('aria-label',text);
      }
    });
  }

  function installNavObserver(){
    const nav=document.getElementById('navContent');
    if(!nav)return;
    enhanceNavLabels(nav);
    observer?.disconnect();
    if(typeof MutationObserver==='function'){
      observer=new MutationObserver(()=>enhanceNavLabels(nav));
      observer.observe(nav,{childList:true,subtree:true});
    }
  }

  function syncMode(){
    window.clearTimeout(collapseTimer);
    if(desktop()){
      setMobileOpen(false);
      sidebar?.removeAttribute('aria-hidden');
      setDesktopExpanded(pinned||pointerInside||focusInside);
    }else{
      sidebar?.classList.remove('is-pinned');
      app?.classList.remove('sidebar-pinned');
      setDesktopExpanded(false);
      if(sidebar&&!sidebar.classList.contains('open'))sidebar.setAttribute('aria-hidden','true');
    }
    syncPinUi();
  }

  function init(){
    sidebar=document.getElementById('sidebar');
    app=document.querySelector('.app');
    pinButton=document.getElementById('sidebarPin');
    if(!sidebar||!app)return;

    pinned=readPinned();
    pinButton?.addEventListener('click',event=>{
      event.preventDefault();
      event.stopPropagation();
      togglePin();
      pinButton.blur?.();
    });

    sidebar.addEventListener('pointerenter',()=>{
      if(!desktop())return;
      pointerInside=true;
      window.clearTimeout(collapseTimer);
      setDesktopExpanded(true);
    });
    sidebar.addEventListener('pointerleave',()=>{
      if(!desktop())return;
      pointerInside=false;
      scheduleCollapse();
    });
    sidebar.addEventListener('focusin',()=>{
      if(!desktop())return;
      focusInside=true;
      window.clearTimeout(collapseTimer);
      setDesktopExpanded(true);
    });
    sidebar.addEventListener('focusout',()=>{
      if(!desktop())return;
      window.setTimeout(()=>{
        focusInside=sidebar.contains(document.activeElement);
        if(!focusInside)scheduleCollapse();
      },0);
    });

    /* Qualquer navegação dentro da sidebar fecha o painel móvel. */
    sidebar.addEventListener('click',event=>{
      const actionable=event.target.closest('a,button');
      if(!actionable)return;
      if(desktop()){
        if(actionable===pinButton)return;
        /* Clique com mouse não deve "prender" a sidebar aberta por foco. */
        if(event.detail>0)window.requestAnimationFrame(()=>actionable.blur?.());
        return;
      }
      if(actionable.classList.contains('sidebar-mobile-close'))return;
      window.setTimeout(()=>setMobileOpen(false),0);
    });

    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&!desktop()&&sidebar.classList.contains('open')){
        event.preventDefault();
        setMobileOpen(false);
      }
    });

    const mediaHandler=()=>syncMode();
    if(typeof desktopMedia.addEventListener==='function')desktopMedia.addEventListener('change',mediaHandler);
    else if(typeof desktopMedia.addListener==='function')desktopMedia.addListener(mediaHandler);

    /* Mantém compatibilidade com os onclicks existentes do projeto. */
    window.toggleSidebar=function(force){
      if(desktop())return;
      const next=typeof force==='boolean'?force:!sidebar.classList.contains('open');
      setMobileOpen(next);
    };

    installNavObserver();
    syncMode();
  }

  if(typeof document!=='undefined'){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
    else init();

    window.GRIMORIO_SIDEBAR={
      expand:()=>setDesktopExpanded(true),
      collapse:()=>setDesktopExpanded(false),
      pin:()=>setPinned(true),
      unpin:()=>setPinned(false),
      togglePin,
      isPinned:()=>pinned,
      openMobile:()=>setMobileOpen(true),
      closeMobile:()=>setMobileOpen(false),
      refreshLabels:installNavObserver
    };
  }else{
    window.GRIMORIO_SIDEBAR={expand(){},collapse(){},pin(){},unpin(){},togglePin(){},isPinned(){return false},openMobile(){},closeMobile(){},refreshLabels(){}};
  }
})();
