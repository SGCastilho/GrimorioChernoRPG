/* Grimório v5.49.0 — capas visuais das raças. */
(function(){
  'use strict';

  const covers = {
    'arhcoon': { image:'assets/race-art/arhcoon.png', alt:'Arhcoon de pelagem listrada, com óculos de inventor, ferramentas e um dispositivo mecânico em uma oficina.', position:'73% 25%' },
    'beast-tribe': { image:'', alt:'', position:'center' },
    'birdfolk': { image:'', alt:'', position:'center' },
    'capy-hado': { image:'', alt:'', position:'center' },
    'dragonkin': { image:'', alt:'', position:'center' },
    'dwarf': { image:'', alt:'', position:'center' },
    'elf': { image:'', alt:'', position:'center' },
    'enaretos': { image:'', alt:'', position:'center' },
    'feralus': { image:'', alt:'', position:'center' },
    'firbolg': { image:'', alt:'', position:'center' },
    'flooflin': { image:'', alt:'', position:'center' },
    'framebilt': { image:'', alt:'', position:'center' },
    'gnome': { image:'', alt:'', position:'center' },
    'goblin': { image:'', alt:'', position:'center' },
    'goliath': { image:'', alt:'', position:'center' },
    'hadislin': { image:'', alt:'', position:'center' },
    'halfling': { image:'', alt:'', position:'center' },
    'hanyou': { image:'', alt:'', position:'center' },
    'hobgoblin': { image:'', alt:'', position:'center' },
    'human': { image:'', alt:'', position:'center' },
    'ilthrak-yar': { image:'', alt:'', position:'center' },
    'kaijou': { image:'', alt:'', position:'center' },
    'kits-adria': { image:'', alt:'', position:'center' },
    'kobold': { image:'', alt:'', position:'center' },
    'kua-hono': { image:'', alt:'', position:'center' },
    'merfolk': { image:'', alt:'', position:'center' },
    'minotaur': { image:'', alt:'', position:'center' },
    'nephilim': { image:'', alt:'', position:'center' },
    'orc': { image:'', alt:'', position:'center' },
    'petratara': { image:'', alt:'', position:'center' },
    'primordia': { image:'', alt:'', position:'center' },
    'tarnished': { image:'', alt:'', position:'center' },
    'trealtin': { image:'', alt:'', position:'center' },
    'vanquis': { image:'', alt:'', position:'center' },
    'animus': { image:'', alt:'', position:'center' },
    'drackal': { image:'', alt:'', position:'center' },
    'noxiamorph': { image:'', alt:'', position:'center' },
    'changeling': { image:'', alt:'', position:'center' },
    'galvan': { image:'', alt:'', position:'center' },
    'protolife': { image:'', alt:'', position:'center' },
    'scourage': { image:'', alt:'', position:'center' },
    'sunling': { image:'', alt:'', position:'center' }
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
