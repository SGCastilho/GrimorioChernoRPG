/* Grimório v5.37.1 — carregamento resiliente das capas de classe. */
(function(){
  'use strict';

  function cardOf(img){return img&&typeof img.closest==='function'?img.closest('.class-card'):null;}

  function loaded(img){
    const card=cardOf(img);
    if(!card)return;
    card.classList.remove('class-cover-failed');
    card.classList.add('class-cover-ready');
  }

  function failed(img){
    const api=window.GRIMORIO_CLASS_COVER;
    const id=img?.dataset?.classCoverId||'';
    const cover=api&&typeof api.get==='function'?api.get(id):null;
    const candidates=cover?.candidates||[];
    const current=Number(img?.dataset?.classCoverIndex||0);
    const next=current+1;
    if(img&&next<candidates.length){
      img.dataset.classCoverIndex=String(next);
      img.src=candidates[next];
      return;
    }
    const card=cardOf(img);
    if(card){
      card.classList.remove('class-cover-ready','has-class-cover');
      card.classList.add('class-cover-failed');
    }
    if(img&&typeof img.remove==='function')img.remove();
  }

  window.GRIMORIO_CLASS_COVER_RUNTIME={loaded,failed};
})();
