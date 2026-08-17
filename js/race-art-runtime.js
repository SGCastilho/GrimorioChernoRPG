/* Grimório v5.49.0 — carregamento resiliente e ampliação das artes raciais. */
(function(){
  'use strict';
  let returnFocus=null;

  function nextCandidate(img,api){
    const id=img?.dataset?.raceArtId||'',entry=api&&typeof api.get==='function'?api.get(id):null;
    const candidates=entry?.candidates||[],next=Number(img?.dataset?.raceArtIndex||0)+1;
    if(next>=candidates.length)return false;
    img.dataset.raceArtIndex=String(next);img.src=candidates[next];return true;
  }
  function coverLoaded(img){img?.closest('.race-card-media')?.classList.add('race-art-ready');}
  function coverFailed(img){
    if(nextCandidate(img,window.GRIMORIO_RACE_COVER))return;
    const frame=img?.closest('.race-card-media');
    frame?.classList.remove('race-art-ready');frame?.classList.add('race-art-failed');img?.remove();
  }
  function detailLoaded(img){img?.closest('.race-detail-art-panel')?.classList.add('race-art-ready');}
  function detailFailed(img){
    if(nextCandidate(img,window.GRIMORIO_RACE_DETAIL_ART))return;
    const frame=img?.closest('.race-detail-art-panel');
    frame?.classList.remove('race-art-ready');frame?.classList.add('race-art-failed');
    if(frame?.tagName==='BUTTON'){frame.disabled=true;frame.removeAttribute('aria-label');frame.setAttribute('aria-hidden','true');}
    img?.remove();
  }
  function ensureDialog(){
    let dialog=document.getElementById('raceArtDialog');
    if(dialog)return dialog;
    dialog=document.createElement('dialog');dialog.id='raceArtDialog';dialog.className='race-art-dialog';
    dialog.innerHTML='<div class="race-art-dialog-shell"><button class="race-art-dialog-close" type="button" aria-label="Fechar ilustração">×</button><figure><img alt=""><figcaption></figcaption></figure></div>';
    dialog.querySelector('.race-art-dialog-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
    dialog.addEventListener('cancel',event=>{event.preventDefault();dialog.close();});
    dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();dialog.close();}});
    dialog.addEventListener('close',()=>{const target=returnFocus;returnFocus=null;target?.focus?.({preventScroll:true});});
    document.body.append(dialog);return dialog;
  }
  function openDetail(trigger,id){
    const art=window.GRIMORIO_RACE_DETAIL_ART?.get?.(id);
    if(!art?.image)return;
    const dialog=ensureDialog(),image=dialog.querySelector('img'),caption=dialog.querySelector('figcaption');
    const rendered=trigger?.querySelector?.('.race-detail-art-media');
    image.src=rendered?.currentSrc||rendered?.src||art.image;image.alt=art.alt;caption.textContent=trigger?.dataset?.raceName||'Ilustração da raça';
    returnFocus=trigger;dialog.showModal();dialog.querySelector('.race-art-dialog-close').focus({preventScroll:true});
  }

  window.GRIMORIO_RACE_ART_RUNTIME={coverLoaded,coverFailed,detailLoaded,detailFailed,openDetail};
})();
