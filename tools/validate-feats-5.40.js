#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const errors=[];const ok=(condition,message)=>{if(condition)console.log('✓ '+message);else errors.push(message)};

const context={console};context.window=context;vm.createContext(context);
for(const file of ['js/registry.js','data/sources.js','data/feats/phb-2014-feats.js']){
  try{vm.runInContext(read(file),context,{filename:file});}catch(error){errors.push(`${file}: ${error.message}`);}
}
const registry=context.GRIMORIO_REGISTRY;
const catalogs=registry?.getFeatCatalogs?.()||[];
const phb=catalogs.find(c=>c.id==='phb-2014-feats');
const feats=phb?.feats||[];
const ids=new Set(feats.map(f=>f.id));
const names=new Set(feats.map(f=>f.name));

ok(!!registry?.registerFeatCatalog,'registry expõe registerFeatCatalog');
ok(!!registry?.getFeatCatalogs,'registry expõe getFeatCatalogs');
ok(catalogs.length===1,'há 1 catálogo de talentos nesta fase');
ok(phb?.sourceId==='phb-2014','catálogo aponta para phb-2014');
ok(feats.length===42,'PHB 2014 contém 42 talentos');
ok(ids.size===42,'42 IDs de talentos são únicos');
ok(names.size===42,'42 nomes de talentos são únicos');
ok(feats.every(f=>f.id&&f.name&&f.description&&f.sourceId==='phb-2014'),'todos os talentos têm identidade, texto e fonte');
ok(feats.every(f=>Number(f.sourcePage)>=167&&Number(f.sourcePage)<=172),'páginas impressas ficam entre 167 e 172');
ok(feats.filter(f=>(f.prerequisites||[]).length).length===12,'12 talentos possuem pré-requisito estruturado');
ok(feats.filter(f=>f.repeatable===true).length===1,'há exatamente 1 talento repetível');
ok(feats.find(f=>f.id==='phb-2014-adepto-elemental')?.repeatable===true,'Adepto Elemental é repetível');
ok(feats.find(f=>f.id==='phb-2014-conjurador-de-guerra')?.prerequisites?.[0]?.type==='spellcasting','Conjurador de Guerra possui pré-requisito de conjuração');
ok(feats.find(f=>f.id==='phb-2014-duelista-defensivo')?.prerequisites?.[0]?.minimum===13,'Duelista Defensivo exige Destreza 13');
ok(feats.find(f=>f.id==='phb-2014-protecao-moderada')?.prerequisites?.[0]?.value==='light','Proteção Moderada exige armadura leve');
ok(registry?.featStats?.()?.[0]?.count===42,'featStats reporta 42 talentos');

const index=read('index.html');
const app=read('js/app.js');
const ui=read('js/ui-enhancements.js');
const deep=read('js/deep-links.js');
const browser=read('js/feat-browser.js');
const config=read('js/config.js');
const manifest=JSON.parse(read('manifest.json'));

ok(index.includes('data/feats/phb-2014-feats.js'),'index carrega o catálogo de talentos');
ok(index.includes('js/feat-browser.js'),'index carrega feat-browser.js');
const appEquipment=app.indexOf("item('equipment',null,'Equipamentos'");
const appFeats=app.indexOf("item('feats',null,'Talentos'");
const uiEquipment=ui.indexOf("navA('equipment',null,'Equipamentos'");
const uiFeats=ui.indexOf("navA('feats',null,'Talentos'");
ok(appEquipment>=0&&appFeats>appEquipment&&uiEquipment>=0&&uiFeats>uiEquipment,'Talentos aparece imediatamente após Equipamentos nas duas camadas de navegação');
ok(deep.includes("if(v==='feats')return '#/feats'")&&deep.includes("if(v==='feat')return '#/feat/'"),'deep links de catálogo e talento existem');
ok(app.includes("route.view==='feats'")&&app.includes("route.view==='feat'"),'app renderiza catálogo e detalhe por rota');
ok(app.includes('palette-group-label\\">Talentos')||app.includes('palette-group-label">Talentos'),'Ctrl+K possui grupo Talentos');
ok(browser.includes('Buscar talento, pré-requisito ou efeito'),'catálogo possui busca própria');
ok(browser.includes('featPrerequisiteFilter')&&browser.includes('featSourceFilter'),'catálogo possui filtros por pré-requisito e fonte');
try {
  vm.runInContext(browser,context,{filename:'js/feat-browser.js'});
  const rendered=context.GRIMORIO_FEAT_BROWSER?.render?.()||'';
  ok((rendered.match(/class=\"feat-item\"/g)||[]).length===42,'renderização inicial produz 42 cards de talento');
  ok(rendered.includes('phb-2014-alerta')&&rendered.includes('Adepto Elemental'),'renderização inclui IDs estáveis e talentos do PHB');
} catch(error) { errors.push('feat-browser runtime: '+error.message); }
ok(config.includes("APP_VERSION='5.41.0'"),'APP_VERSION atual é 5.41.0');
ok(manifest.version==='5.41.0'&&manifest.feats===42,'manifest atual está sincronizado com 5.41.0 e 42 talentos');
ok(manifest.featsIntegrated===true&&manifest.featCatalogs===1&&manifest.featPrerequisites===12,'manifest registra a integração estrutural de talentos');
ok(Array.isArray(manifest.deepLinkRoutes)&&manifest.deepLinkRoutes.includes('feats'),'manifest inclui Talentos nas rotas profundas');

if(errors.length){console.error('\nFalhas:');errors.forEach(e=>console.error('✗ '+e));process.exit(1);}else console.log('\nValidação 5.40 aprovada.');
