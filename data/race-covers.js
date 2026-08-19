/* Grimório v5.49.0 — capas visuais das raças. */
(function(){
  'use strict';

  const covers = {
    'arhcoon': { image:'assets/race-art/arhcoon.png', alt:'Arhcoon de pelagem listrada, com óculos de inventor, ferramentas e um dispositivo mecânico em uma oficina.', position:'73% 25%' },
    'beast-tribe': { image:'assets/race-art/beasttribe.png', alt:'', position:'70% 10%' },
    'birdfolk': { image:'assets/race-art/birdfolk.png', alt:'', position:'70% 10%' },
    'capy-hado': { image:'https://imgur.com/W4kRyEs.png', alt:'', position:'70% 10%' },
    'dragonkin': { image:'https://imgur.com/ZXnNkbq.png', alt:'', position:'70% 10%' },
    'dwarf': { image:'https://imgur.com/2H78Nm1.png', alt:'', position:'70% 10%' },
    'elf': { image:'https://imgur.com/F2NQJcx.png', alt:'', position:'70% 10%' },
    'enaretos': { image:'https://imgur.com/c9KDbXH.png', alt:'', position:'70% 10%' },
    'feralus': { image:'assets/race-art/feralus.png', alt:'', position:'70% 10%' },
    'firbolg': { image:'assets/race-art/firbolg.png', alt:'', position:'70% 10%' },
    'flooflin': { image:'assets/race-art/flooflin.png', alt:'', position:'70% 10%' },
    'framebilt': { image:'assets/race-art/framebilt.png', alt:'', position:'70% 10%' },
    'gnome': { image:'assets/race-art/gnomo.png', alt:'', position:'70% 10%' },
    'goblin': { image:'assets/race-art/Goblin.png', alt:'', position:'70% 10%' },
    'goliath': { image:'https://imgur.com/xOeBZCk.png', alt:'', position:'70% 10%' },
    'hadislin': { image:'', alt:'https://imgur.com/vmOel97.png', position:'70% 10%' },
    'halfling': { image:'assets/race-art/halfling.png', alt:'', position:'70% 10%' },
    'hanyou': { image:'assets/race-art/hanyou.png', alt:'', position:'70% 10%' },
    'hobgoblin': { image:'assets/race-art/hobgoblin.png', alt:'', position:'70% 10%' },
    'human': { image:'assets/race-art/humano.png', alt:'', position:'70% 10%' },
    'ilthrak-yar': { image:'assets/race-art/ilthrak-ayr.png', alt:'', position:'70% 10%' },
    'kaijou': { image:'assets/race-art/kaijou.png', alt:'', position:'70% 10%' },
    'kits-adria': { image:'assets/race-art/kitsadria.png', alt:'', position:'70% 10%' },
    'kobold': { image:'assets/race-art/kobld.png', alt:'', position:'70% 10%' },
    'kua-hono': { image:'assets/race-art/kua hono.png', alt:'', position:'70% 10%' },
    'merfolk': { image:'assets/race-art/povodomar.png', alt:'', position:'70% 10%' },
    'minotaur': { image:'assets/race-art/minotauro.png', alt:'', position:'70% 10%' },
    'nephilim': { image:'assets/race-art/npehilim.png', alt:'', position:'70% 10%' },
    'orc': { image:'', alt:'', position:'70% 10%' },
    'petratara': { image:'https://imgur.com/iFs0E2s.png', alt:'', position:'70% 10%' },
    'primordia': { image:'https://imgur.com/GY8GIYG.png', alt:'', position:'70% 10%' },
    'tarnished': { image:'https://imgur.com/xOeBZCk.png', alt:'', position:'70% 10%' },
    'trealtin': { image:'', alt:'', position:'70% 10%' },
    'vanquis': { image:'', alt:'', position:'70% 10%' },
    'animus': { image:'', alt:'', position:'70% 10%' },
    'drackal': { image:'', alt:'', position:'70% 10%' },
    'noxiamorph': { image:'', alt:'', position:'70% 10%' },
    'changeling': { image:'', alt:'', position:'70% 10%' },
    'galvan': { image:'', alt:'', position:'70% 10%' },
    'protolife': { image:'', alt:'', position:'70% 10%' },
    'scourage': { image:'', alt:'', position:'70% 10%' },
    'sunling': { image:'', alt:'', position:'70% 10%' },
    'bouyan': { image:'', alt:'', position:'70% 10%' },
    'horma': { image:'', alt:'', position:'70% 10%' },
    'silvistar': { image:'', alt:'', position:'70% 10%' },
    'tinderbine': { image:'', alt:'', position:'70% 10%' }
  };

  function imgurParts(url){
    const match=String(url||'').trim().match(/^https?:\/\/(?:www\.|i\.)?imgur\.com\/([A-Za-z0-9]+)(?:\.(png|jpe?g|webp|gif))?(?:[?#].*)?$/i);
    return match?{id:match[1],ext:(match[2]||'png').toLowerCase()}:null;
  }
  function imageCandidates(url){
    const value=String(url||'').trim(),parts=imgurParts(value);
    if(!parts)return value?[value]:[];
    return [...new Set([parts.ext,'png','jpg','jpeg','webp','gif'])].map(ext=>'https://i.imgur.com/'+parts.id+'.'+ext);
  }
  function escapeCss(value){return String(value||'').replace(/[;{}\r\n]/g,'').trim();}
  function escapeAttr(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function get(id){
    const raw=covers[String(id||'')];
    if(!raw)return null;
    const candidates=imageCandidates(raw.image);
    return {image:candidates[0]||'',candidates,alt:String(raw.alt||''),position:String(raw.position||'center')};
  }
  function style(id){const cover=get(id);return cover?'--race-cover-position:'+escapeCss(cover.position)+';':'';}
  function media(id){
    const cover=get(id);
    if(!cover?.image)return '';
    return '<img class="race-cover-media" src="'+escapeAttr(cover.image)+'" alt="'+escapeAttr(cover.alt)+'" data-race-art-id="'+escapeAttr(id)+'" data-race-art-index="0" loading="lazy" decoding="async" onload="GRIMORIO_RACE_ART_RUNTIME.coverLoaded(this)" onerror="GRIMORIO_RACE_ART_RUNTIME.coverFailed(this)">';
  }

  window.GRIMORIO_RACE_COVERS=covers;
  window.GRIMORIO_RACE_COVER={get,style,media,imageCandidates};
})();
