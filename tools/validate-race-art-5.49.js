#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');
const errors=[];
const ok=(condition,message)=>condition?console.log('✓ '+message):errors.push(message);

const manifest=JSON.parse(read('manifest.json'));
const index=read('index.html'),browserSource=read('js/race-browser.js'),runtime=read('js/race-art-runtime.js'),css=read('css/race-art.css');
const versionAtLeast=(value,target)=>{const a=String(value||'').split('.').map(Number),b=String(target).split('.').map(Number);for(let i=0;i<Math.max(a.length,b.length);i++){const x=a[i]||0,y=b[i]||0;if(x!==y)return x>y}return true};
ok(versionAtLeast(manifest.version,'5.49.0'),'manifesto está na versão 5.49.0+');
ok(Array.isArray(manifest.raceIndex)&&manifest.raceIndex.length===manifest.races,`manifest.raceIndex possui ${manifest.races} raças`);
ok(index.includes('data/race-covers.js')&&index.includes('data/race-detail-art.js')&&index.includes('js/race-art-runtime.js')&&index.includes('css/race-art.css'),'recursos raciais carregados no index');

const context={console};context.window=context;vm.createContext(context);
for(const file of ['data/race-covers.js','data/race-detail-art.js'])vm.runInContext(read(file),context,{filename:file});
const covers=context.GRIMORIO_RACE_COVERS,details=context.GRIMORIO_RACE_DETAIL_ART_DATA;
ok(Object.keys(covers||{}).length===manifest.races&&Object.keys(details||{}).length===manifest.races,`mapas Cover e Detail Art possuem ${manifest.races} entradas`);
ok(manifest.raceIndex.every(item=>covers[item.id]&&details[item.id]),'todos os IDs do manifesto existem nos dois mapas');
ok(covers.arhcoon.image==='assets/race-art/arhcoon.png'&&typeof covers.arhcoon.position==='string','Cover do Arhcoon configurada');
ok(details.arhcoon.image==='assets/race-art/arhcoon.png'&&typeof details.arhcoon.position==='string'&&details.arhcoon.scale>=1&&details.arhcoon.scale<=1.25,'Detail Art do Arhcoon configurada');
ok(Boolean(covers.arhcoon.alt)&&covers.arhcoon.alt===details.arhcoon.alt,'descrição acessível do Arhcoon consistente');
const configuredCovers=manifest.raceIndex.filter(item=>covers[item.id].image),configuredDetails=manifest.raceIndex.filter(item=>details[item.id].image);
ok(configuredCovers.length>=1&&configuredDetails.length>=1,'catálogo preserva as artes raciais configuradas');
for(const item of manifest.raceIndex){
  const cover=covers[item.id],detail=details[item.id];
  ok(typeof cover.image==='string'&&typeof cover.alt==='string'&&typeof cover.position==='string','Cover possui contrato válido: '+item.id);
  ok(typeof detail.image==='string'&&typeof detail.alt==='string'&&typeof detail.position==='string'&&Number.isFinite(detail.scale)&&detail.scale>=1&&detail.scale<=1.25,'Detail Art possui contrato válido: '+item.id);
  for(const image of [cover.image,detail.image])if(image&&image.startsWith('assets/'))ok(fs.existsSync(path.join(root,image)),'asset local existe: '+image);
}

const asset=fs.readFileSync(path.join(root,'assets/race-art/arhcoon.png'));
ok(asset.length===1942882&&asset.readUInt32BE(16)===1672&&asset.readUInt32BE(20)===941,'asset do Arhcoon preserva bytes e dimensões esperados');
ok(browserSource.includes('race-card-media')&&browserSource.includes('race-detail-art-panel')&&browserSource.includes('openDetail'),'catálogo e detalhe injetam banner, painel e ampliação');
ok(runtime.includes('showModal')&&runtime.includes("event.target===dialog")&&runtime.includes("addEventListener('cancel'")&&runtime.includes("event.key==='Escape'")&&runtime.includes("addEventListener('close'")&&runtime.includes('returnFocus'),'lightbox fecha com backdrop/Escape e restaura foco');
ok(runtime.includes('coverFailed')&&runtime.includes('detailFailed')&&runtime.includes('nextCandidate'),'fallback resiliente implementado');
ok(css.includes('.race-art-placeholder')&&css.includes('-webkit-mask-image:linear-gradient(90deg')&&css.includes('-webkit-mask-image:linear-gradient(180deg')&&css.includes('@media(max-width:920px)')&&css.includes('@media(prefers-reduced-motion:reduce)'),'placeholder, fade responsivo e movimento reduzido estilizados');

if(errors.length){for(const error of errors)console.error('✗ '+error);console.error(`Arte racial 5.49.0 reprovada: ${errors.length} erro(s).`);process.exit(1);}
console.log(`Arte racial 5.49.0+ aprovada: ${manifest.races} raças, ${configuredCovers.length} covers, ${configuredDetails.length} details e fallback verificados.`);
