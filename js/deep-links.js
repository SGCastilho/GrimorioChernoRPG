/* Grimório v5.39 — rotas profundas e links nativos sem dependências. */
(function(global){
  'use strict';

  function enc(value){return encodeURIComponent(String(value||''));}
  function dec(value){try{return decodeURIComponent(String(value||''));}catch(_){return String(value||'');}}
  function cleanHash(value){
    const raw=String(value||'').trim();
    if(!raw)return '#/home';
    if(raw.startsWith('#/'))return raw;
    const hashIndex=raw.indexOf('#/');
    return hashIndex>=0?raw.slice(hashIndex):('#/'+raw.replace(/^#?\/?/,''));
  }

  function subclassParent(id,explicit){
    if(explicit)return explicit;
    try{return global.getSubclass?.(id)?.classId||null}catch(_){return null}
  }

  function href(view,id,extra={}){
    const v=String(view||'home');
    if(v==='home')return '#/home';
    if(v==='classes')return '#/classes';
    if(v==='ability-planner')return '#/ability-planner';
    if(v==='races')return '#/races';
    if(v==='race'){
      const base='#/race/'+enc(id);
      return extra.subraceId?base+'/subrace/'+enc(extra.subraceId):base;
    }
    if(v==='subrace'){
      const raceId=extra.raceId||extra.parentId;
      return raceId?'#/race/'+enc(raceId)+'/subrace/'+enc(id):'#/races';
    }
    if(v==='equipment')return id?'#/equipment/'+enc(id):'#/equipment';
    if(v==='spells')return '#/spells';
    if(v==='spell')return '#/spell/'+enc(id);
    if(v==='class')return '#/class/'+enc(id);
    if(v==='subclass'){
      const classId=subclassParent(id,extra.classId||extra.parentId);
      return classId?'#/class/'+enc(classId)+'/subclass/'+enc(id):'#/subclass/'+enc(id);
    }
    if(v==='about')return '#/about';
    return '#/'+enc(v)+(id?'/'+enc(id):'');
  }

  function parse(value){
    const hash=cleanHash(value);
    const parts=hash.replace(/^#\//,'').split('/').filter(Boolean).map(dec);
    if(!parts.length)return {view:'home',id:null};
    const first=parts[0];
    if(first==='class'&&parts[1]&&parts[2]==='subclass'&&parts[3])return {view:'subclass',id:parts[3],parentId:parts[1],classId:parts[1]};
    if(first==='race'&&parts[1]&&parts[2]==='subrace'&&parts[3])return {view:'race',id:parts[1],subraceId:parts[3]};
    if(first==='equipment')return {view:'equipment',id:parts[1]||null};
    if(first==='class')return {view:'class',id:parts[1]||null};
    if(first==='subclass')return {view:'subclass',id:parts[1]||null,parentId:null,classId:null};
    if(first==='spell')return {view:'spell',id:parts[1]||null};
    if(first==='spells')return {view:'spells',id:null};
    if(first==='race')return {view:'race',id:parts[1]||null};
    if(first==='races')return {view:'races',id:null};
    if(first==='classes')return {view:'classes',id:null};
    if(first==='ability-planner')return {view:'ability-planner',id:null};
    if(first==='about')return {view:'about',id:null};
    if(first==='home')return {view:'home',id:null};
    return {view:first||'home',id:parts[1]||null};
  }

  function from(view,id,extra={}){
    return parse(href(view,id,extra));
  }

  function absolute(view,id,extra={}){
    const base=global.location?.href?String(global.location.href).split('#')[0]:'';
    return base+href(view,id,extra);
  }

  async function copy(view,id,extra={}){
    const value=absolute(view,id,extra);
    try{
      if(global.navigator?.clipboard?.writeText){await global.navigator.clipboard.writeText(value);return true;}
    }catch(_){/* fallback abaixo */}
    try{
      const textarea=global.document?.createElement?.('textarea');
      if(!textarea)return false;
      textarea.value=value;
      textarea.setAttribute('readonly','');
      textarea.style.position='fixed';
      textarea.style.opacity='0';
      global.document.body.appendChild(textarea);
      textarea.select();
      const ok=global.document.execCommand?.('copy')!==false;
      textarea.remove();
      return !!ok;
    }catch(_){return false;}
  }

  global.GRIMORIO_DEEP_LINKS=Object.freeze({href,parse,from,absolute,copy});
})(window);
