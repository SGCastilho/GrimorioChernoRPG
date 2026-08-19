/*
 * Grimório v5.37.1 — Capas visuais das classes.
 *
 * Adicione novas capas neste mapa usando o ID estável da classe.
 * A propriedade `image` aceita URL externa ou caminho local relativo ao index.html.
 * Links do Imgur são convertidos para o host direto e recebem tentativas de fallback
 * de extensão. A capa só é exibida depois que a imagem foi carregada com sucesso.
 */
(function(){
  'use strict';

  const covers = {
    'spiritual-emissary': {
      image: 'https://imgur.com/Z7nBfKE.png',
      position: 'center 20%',
      blur: 3,
      overlay: 0.80
    },
        'petal-knight-retia': {
      image: 'https://imgur.com/94LsfQ1.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'paladin': {
      image: "https://imgur.com/vYlfDmD.png",
      position: "center 10%",
      blur: 1,
      overlay: 0.80
    },
        'warlock': {
      image: 'https://imgur.com/N1xlAqQ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'monk': {
      image: 'https://i.imgur.com/iGTvNiD.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'street-fighter-homebrew': {
      image: 'https://imgur.com/zqnDPDI.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'sage-homebrew': {
      image: 'https://imgur.com/8zbOnjn.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'spellblade': {
      image: 'https://imgur.com/JYVOSfQ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'artificer': {
      image: 'https://imgur.com/IMajcKr.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'rogue': {
      image: 'https://imgur.com/yVnmUNp.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'cleric': {
      image: 'https://imgur.com/GFK6Ruu.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'barbarian': {
      image: 'https://imgur.com/MvlUuvQ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'fighter': {
      image: 'https://imgur.com/wib9mQw.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'blood-minister-somnus': {
      image: 'https://imgur.com/ufoonu7.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'bard': {
      image: 'https://imgur.com/YAmQxkE.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'druid': {
      image: 'https://imgur.com/3NVGIoG.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'bender-ryoko': {
      image: 'https://imgur.com/IVVrYKu.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'sorcerer': {
      image: 'https://imgur.com/ZveBPje.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'wizard': {
      image: 'https://imgur.com/Kk9xnGp.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'ranger': {
      image: 'https://imgur.com/ss2W8ut.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'cultivator-dandwiki': {
      image: 'https://imgur.com/FaaGJ15.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'tamer-ryoko': {
      image: 'https://imgur.com/4pSzY00.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'dragoneer': {
      image: 'https://imgur.com/v3CLrkA.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'frame-pilot': {
      image: 'https://imgur.com/6bZEFWr.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'favored-soul-retia': {
      image: 'https://imgur.com/XTuYXRu.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'inscriptor-retia': {
      image: 'https://imgur.com/pYiay6C.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'sword-saint-retia': {
      image: 'https://imgur.com/42s3LjJ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },

  };

  function imgurParts(url){
    const value=String(url||'').trim();
    const match=value.match(/^https?:\/\/(?:www\.|i\.)?imgur\.com\/([A-Za-z0-9]+)(?:\.(png|jpe?g|webp|gif))?(?:[?#].*)?$/i);
    return match?{id:match[1],ext:(match[2]||'png').toLowerCase()}:null;
  }

  function normaliseImgur(url){
    const value=String(url||'').trim();
    const parts=imgurParts(value);
    return parts?'https://i.imgur.com/'+parts.id+'.'+parts.ext:value;
  }

  function imageCandidates(url){
    const value=String(url||'').trim();
    const parts=imgurParts(value);
    if(!parts)return value?[value]:[];
    const order=[parts.ext,'png','jpg','jpeg','webp','gif'];
    return [...new Set(order)].map(ext=>'https://i.imgur.com/'+parts.id+'.'+ext);
  }

  function clamp(value,min,max,fallback){
    const number=Number(value);
    return Number.isFinite(number)?Math.max(min,Math.min(max,number)):fallback;
  }

  function escapeCssValue(value){
    return String(value||'').replace(/[;{}\r\n]/g,'').trim();
  }

  function escapeAttr(value){
    return String(value??'').replace(/[&<>"']/g,ch=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[ch]));
  }

  function get(id){
    const raw=covers[String(id||'')];
    if(!raw||!raw.image)return null;
    const candidates=imageCandidates(raw.image);
    return {
      image:candidates[0]||normaliseImgur(raw.image),
      candidates,
      position:String(raw.position||'center'),
      blur:clamp(raw.blur,0,12,2),
      overlay:clamp(raw.overlay,0,0.9,0.5)
    };
  }

  function style(id){
    const cover=get(id);
    if(!cover)return '';
    return '--class-cover-position:'+escapeCssValue(cover.position)+';'+
      '--class-cover-blur:'+cover.blur+'px;'+
      '--class-cover-overlay:'+cover.overlay+';';
  }

  function media(id){
    const cover=get(id);
    if(!cover||!cover.image)return '';
    return '<img class="class-cover-media" src="'+escapeAttr(cover.image)+'" data-class-cover-id="'+escapeAttr(id)+'" data-class-cover-index="0" alt="" aria-hidden="true" loading="lazy" decoding="async" onload="GRIMORIO_CLASS_COVER_RUNTIME.loaded(this)" onerror="GRIMORIO_CLASS_COVER_RUNTIME.failed(this)">';
  }

  window.GRIMORIO_CLASS_COVERS=covers;
  window.GRIMORIO_CLASS_COVER={get,style,media,normaliseImgur,imageCandidates};
})();
