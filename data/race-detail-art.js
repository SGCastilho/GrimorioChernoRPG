/* Grimório v5.49.0 — arte interna das páginas de raça. */
(function(){
  'use strict';

  const detailArt = {
    'arhcoon': { image:'assets/race-art/arhcoon.png', alt:'Arhcoon de pelagem listrada, com óculos de inventor, ferramentas e um dispositivo mecânico em uma oficina.', position:'right center', scale:1.12 },
    'beast-tribe': { image:'', alt:'', position:'center', scale:1 },
    'birdfolk': { image:'', alt:'', position:'center', scale:1 },
    'capy-hado': { image:'', alt:'', position:'center', scale:1 },
    'dragonkin': { image:'', alt:'', position:'center', scale:1 },
    'dwarf': { image:'', alt:'', position:'center', scale:1 },
    'elf': { image:'', alt:'', position:'center', scale:1 },
    'enaretos': { image:'', alt:'', position:'center', scale:1 },
    'feralus': { image:'', alt:'', position:'center', scale:1 },
    'firbolg': { image:'', alt:'', position:'center', scale:1 },
    'flooflin': { image:'', alt:'', position:'center', scale:1 },
    'framebilt': { image:'', alt:'', position:'center', scale:1 },
    'gnome': { image:'', alt:'', position:'center', scale:1 },
    'goblin': { image:'', alt:'', position:'center', scale:1 },
    'goliath': { image:'', alt:'', position:'center', scale:1 },
    'hadislin': { image:'', alt:'', position:'center', scale:1 },
    'halfling': { image:'', alt:'', position:'center', scale:1 },
    'hanyou': { image:'', alt:'', position:'center', scale:1 },
    'hobgoblin': { image:'', alt:'', position:'center', scale:1 },
    'human': { image:'', alt:'', position:'center', scale:1 },
    'ilthrak-yar': { image:'', alt:'', position:'center', scale:1 },
    'kaijou': { image:'', alt:'', position:'center', scale:1 },
    'kits-adria': { image:'', alt:'', position:'center', scale:1 },
    'kobold': { image:'', alt:'', position:'center', scale:1 },
    'kua-hono': { image:'', alt:'', position:'center', scale:1 },
    'merfolk': { image:'', alt:'', position:'center', scale:1 },
    'minotaur': { image:'', alt:'', position:'center', scale:1 },
    'nephilim': { image:'', alt:'', position:'center', scale:1 },
    'orc': { image:'', alt:'', position:'center', scale:1 },
    'petratara': { image:'', alt:'', position:'center', scale:1 },
    'primordia': { image:'', alt:'', position:'center', scale:1 },
    'tarnished': { image:'', alt:'', position:'center', scale:1 },
    'trealtin': { image:'', alt:'', position:'center', scale:1 },
    'vanquis': { image:'', alt:'', position:'center', scale:1 },
    'animus': { image:'', alt:'', position:'center', scale:1 },
    'drackal': { image:'', alt:'', position:'center', scale:1 },
    'noxiamorph': { image:'', alt:'', position:'center', scale:1 },
    'changeling': { image:'', alt:'', position:'center', scale:1 },
    'galvan': { image:'', alt:'', position:'center', scale:1 },
    'protolife': { image:'', alt:'', position:'center', scale:1 },
    'scourage': { image:'', alt:'', position:'center', scale:1 },
    'sunling': { image:'', alt:'', position:'center', scale:1 }
  };

  function clamp(value,min,max,fallback){const number=Number(value);return Number.isFinite(number)?Math.max(min,Math.min(max,number)):fallback;}
  function escapeCss(value){return String(value||'').replace(/[;{}\r\n]/g,'').trim();}
  function escapeAttr(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function imageCandidates(url){
    const coverApi=window.GRIMORIO_RACE_COVER;
    return coverApi&&typeof coverApi.imageCandidates==='function'?coverApi.imageCandidates(url):(url?[String(url)]:[]);
  }
  function get(id){
    const raw=detailArt[String(id||'')];
    if(!raw)return null;
    const candidates=imageCandidates(String(raw.image||''));
    return {image:candidates[0]||'',candidates,alt:String(raw.alt||''),position:String(raw.position||'center'),scale:clamp(raw.scale,1,1.25,1)};
  }
  function style(id){
    const art=get(id);
    return art?'--race-detail-art-position:'+escapeCss(art.position)+';--race-detail-art-scale:'+art.scale+';':'';
  }
  function media(id){
    const art=get(id);
    if(!art?.image)return '';
    return '<img class="race-detail-art-media" src="'+escapeAttr(art.image)+'" alt="'+escapeAttr(art.alt)+'" data-race-art-id="'+escapeAttr(id)+'" data-race-art-index="0" loading="eager" fetchpriority="high" decoding="async" onload="GRIMORIO_RACE_ART_RUNTIME.detailLoaded(this)" onerror="GRIMORIO_RACE_ART_RUNTIME.detailFailed(this)">';
  }

  window.GRIMORIO_RACE_DETAIL_ART_DATA=detailArt;
  window.GRIMORIO_RACE_DETAIL_ART={get,style,media};
})();
