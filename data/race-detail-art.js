/* Grimório v5.49.0 — arte interna das páginas de raça. */
(function(){
  'use strict';

  const detailArt = {
  'arhcoon': { image:'assets/race-art/arhcoon.png', alt:'Arhcoon de pelagem listrada, com óculos de inventor, ferramentas e um dispositivo mecânico em uma oficina.', position:'right center', scale:1 },
  'beast-tribe': { image:'assets/race-art/beasttribe.png', alt:'', position:'right center', scale:1 },
  'birdfolk': { image:'assets/race-art/birdfolk.png', alt:'', position:'right center', scale:1 },
  'capy-hado': { image:'https://imgur.com/W4kRyEs.png', alt:'', position:'right center', scale:1 },
  'dragonkin': { image:'https://imgur.com/ZXnNkbq.png', alt:'', position:'right center', scale:1 },
  'dwarf': { image:'https://imgur.com/2H78Nm1.png', alt:'', position:'right center', scale:1 },
  'elf': { image:'https://imgur.com/F2NQJcx.png', alt:'', position:'right center', scale:1 },
  'enaretos': { image:'https://imgur.com/c9KDbXH.png', alt:'', position:'right center', scale:1 },
  'feralus': { image:'assets/race-art/feralus.png', alt:'', position:'right center', scale:1 },
  'firbolg': { image:'assets/race-art/firbolg.png', alt:'', position:'right center', scale:1 },
  'flooflin': { image:'assets/race-art/flooflin.png', alt:'', position:'right center', scale:1 },
  'framebilt': { image:'assets/race-art/framebilt.png', alt:'', position:'right center', scale:1 },
  'gnome': { image:'assets/race-art/gnomo.png', alt:'', position:'right center', scale:1 },
  'goblin': { image:'assets/race-art/Goblin.png', alt:'', position:'right center', scale:1 },
  'goliath': { image:'https://imgur.com/xOeBZCk.png', alt:'', position:'right center', scale:1 },
  'hadislin': { image:'https://imgur.com/vmOel97.png', alt:'', position:'right center', scale:1 },
  'halfling': { image:'assets/race-art/halfling.png', alt:'', position:'right center', scale:1 },
  'hanyou': { image:'assets/race-art/hanyou.png', alt:'', position:'right center', scale:1 },
  'hobgoblin': { image:'assets/race-art/hobgoblin.png', alt:'', position:'right center', scale:1 },
  'human': { image:'assets/race-art/humano.png', alt:'', position:'right center', scale:1 },
  'ilthrak-yar': { image:'assets/race-art/ilthrak-ayr.png', alt:'', position:'right center', scale:1 },
  'kaijou': { image:'assets/race-art/kaijou.png', alt:'', position:'right center', scale:1 },
  'kits-adria': { image:'assets/race-art/kitsadria.png', alt:'', position:'right center', scale:1 },
  'kobold': { image:'assets/race-art/kobld.png', alt:'', position:'right center', scale:1 },
  'kua-hono': { image:'assets/race-art/kua hono.png', alt:'', position:'right center', scale:1 },
  'merfolk': { image:'assets/race-art/povodomar.png', alt:'', position:'right center', scale:1 },
  'minotaur': { image:'assets/race-art/minotauro.png', alt:'', position:'right center', scale:1 },
  'nephilim': { image:'assets/race-art/npehilim.png', alt:'', position:'right center', scale:1 },
  'orc': { image:'https://i.imgur.com/bSSOVkw.png', alt:'', position:'right center', scale:1 },
  'petratara': { image:'https://imgur.com/iFs0E2s.png', alt:'', position:'right center', scale:1 },
  'primordia': { image:'https://imgur.com/GY8GIYG.png', alt:'', position:'right center', scale:1 },
  'tarnished': { image:'https://imgur.com/O0Tu51O.png', alt:'', position:'right center', scale:1 },
  'trealtin': { image:'https://imgur.com/iHsaQ51.png', alt:'', position:'right center', scale:1 },
  'vanquis': { image:'https://i.imgur.com/vOeuviX.png', alt:'', position:'right center', scale:1 },
  'animus': { image:'https://i.imgur.com/IQuypFx.png', alt:'', position:'right center', scale:1 },
  'drackal': { image:'https://i.imgur.com/BCflBMY.png', alt:'', position:'right center', scale:1 },
  'noxiamorph': { image:'https://i.imgur.com/2mCytoZ.png', alt:'', position:'right center', scale:1 },
  'changeling': { image:'https://i.imgur.com/IhtevNw.png', alt:'', position:'right center', scale:1 },
  'galvan': { image:'https://i.imgur.com/rHV8RAp.png', alt:'', position:'right center', scale:1 },
  'protolife': { image:'https://i.imgur.com/eIsk4gp.png', alt:'', position:'right center', scale:1 },
  'scourage': { image:'https://i.imgur.com/BCicTb1.png', alt:'', position:'right center', scale:1 },
  'sunling': { image:'https://i.imgur.com/WHbRA0G.png', alt:'', position:'right center', scale:1 },
  'bouyan': { image:'https://imgur.com/e0n72Ye.png', alt:'', position:'right center', scale:1 },
  'horma': { image:'https://imgur.com/OZ1ck4N.png', alt:'', position:'right center', scale:1 },
  'silvistar': { image:'https://imgur.com/AUdvumH.png', alt:'', position:'right center', scale:1 },
  'tinderbine': { image:'https://imgur.com/jXtb1zP.png', alt:'', position:'right center', scale:1 }
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
    return {image:candidates[0]||'',candidates,alt:String(raw.alt||''),position:String(raw.position||'right center'),scale:clamp(raw.scale,1,1.25,1)};
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
