(function(){
  'use strict';

  const detailArt = {
    'paladin': {
      image: 'assets/class-detail-art/paladin-hero.png',
      position: 'center 28%',
      blur: 3,
      overlay: 0.60,
      scale: 1.06
    },
    'barbarian': {
      image: 'https://imgur.com/KewlYdw.png',
      position: 'center 15%',
      blur: 3,
      overlay: 0.60,
      scale: 1.06
    },
    'fighter': {
      image: 'https://imgur.com/V0Yf354.png',
      position: 'center 15%',
      blur: 3,
      overlay: 0.60,
      scale: 1.06
    },
    'blood-minister-somnus': {
      image: 'https://imgur.com/6jJxTHV.png',
      position: 'center 15%',
      blur: 3,
      overlay: 0.60,
      scale: 1.06
    },
    'bard': {
      image: 'https://imgur.com/BO6HNlq.png',
      position: 'center 15%',
      blur: 3,
      overlay: 0.60,
    },
    'spiritual-emissary': {
      image: 'https://imgur.com/MphYAyz.png',
      position: 'center 15%',
      blur: 3,
      overlay: 0.60
    },
        'street-fighter-homebrew': {
      image: 'https://imgur.com/Xln5ENz.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'druid': {
      image: 'https://imgur.com/w8f86X1.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'bender-ryoko': {
      image: 'https://imgur.com/R70DURg.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
        'sorcerer': {
      image: 'https://imgur.com/X4YtniG.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    
    'warlock': {
      image: 'https://imgur.com/FOKlsbz.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'cleric': {
      image: 'https://imgur.com/rX5MT5P.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'rogue': {
      image: 'https://imgur.com/3Roh6zI.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'wizard': {
      image: 'https://imgur.com/R57iD3e.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'monk': {
      image: 'https://imgur.com/nSCERnq.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'ranger': {
      image: 'https://imgur.com/icLUFq0.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'artificer': {
      image: 'https://imgur.com/dz7vWh1.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'cultivator-dandwiki': {
      image: 'https://imgur.com/RyjaPJK.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'tamer-ryoko': {
      image: 'https://imgur.com/XrkEiEB.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'spellblade': {
      image: 'https://imgur.com/rJLKFKQ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'sage-homebrew': {
      image: 'https://imgur.com/PMcUHdz.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'dragoneer': {
      image: 'https://imgur.com/m9mZDyk.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'frame-pilot': {
      image: 'https://imgur.com/CosNKDp.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'favored-soul-retia': {
      image: 'https://imgur.com/nFqQZ3a.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'inscriptor-retia': {
      image: 'https://imgur.com/BJggrrw.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80
    },
    'petal-knight-retia': {
      image: 'https://imgur.com/OVU2QNm.png',
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

    'alchemist-fma-homebrew': {
      image: 'https://imgur.com/ZZMebqQ.png',
      position: 'center 10%',
      blur: 2,
      overlay: 0.80,
      scale: 1.06
    },

  };

  function clamp(value,min,max,fallback){
    const number=Number(value);
    return Number.isFinite(number)?Math.max(min,Math.min(max,number)):fallback;
  }
  function escapeCssValue(value){ return String(value||'').replace(/[;{}\r\n]/g,'').trim(); }
  function escapeAttr(value){
    return String(value??'').replace(/[&<>"']/g,ch=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[ch]));
  }
  function get(id){
    const raw=detailArt[String(id||'')];
    if(!raw||!raw.image)return null;
    return {
      image:String(raw.image),
      position:String(raw.position||'center'),
      blur:clamp(raw.blur,0,12,3),
      overlay:clamp(raw.overlay,0,0.9,0.56),
      scale:clamp(raw.scale,1,1.25,1.06)
    };
  }
  function style(id){
    const art=get(id);
    if(!art)return '';
    return '--class-detail-art-position:'+escapeCssValue(art.position)+';'+
      '--class-detail-art-blur:'+art.blur+'px;'+
      '--class-detail-art-overlay:'+art.overlay+';'+
      '--class-detail-art-scale:'+art.scale+';';
  }
  function media(id){
    const art=get(id);
    if(!art||!art.image)return '';
    return '<img class="class-detail-art-media" src="'+escapeAttr(art.image)+'" alt="" aria-hidden="true" loading="eager" decoding="async">';
  }
  window.GRIMORIO_CLASS_DETAIL_ART_DATA=detailArt;
  window.GRIMORIO_CLASS_DETAIL_ART={get,style,media};
})();
