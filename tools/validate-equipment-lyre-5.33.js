#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const errors=[]; const ok=m=>console.log('✓ '+m); const fail=m=>errors.push(m); const assert=(c,m)=>c?ok(m):fail(m);
const ctx={console,setTimeout:()=>{},window:null}; ctx.window=ctx;
ctx.document={getElementById:()=>null,querySelectorAll:()=>[],querySelector:()=>null}; vm.createContext(ctx);
for(const rel of ['js/registry.js','data/sources.js','data/equipment/phb-2014-equipment.js','data/equipment/ryoko-yokai-realms-equipment.js','data/equipment/lyre-retia-equipment.js','js/equipment-browser.js']){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),ctx,{filename:rel});}catch(e){fail(rel+': '+e.stack);break;}
}
if(errors.length)finish();
const registry=ctx.GRIMORIO_REGISTRY,browser=ctx.GRIMORIO_EQUIPMENT_BROWSER;
const cats=registry.getEquipmentCatalogs(),items=browser.getItems();
assert(cats.length===3,'3 catálogos de equipamentos registrados');
const lyre=cats.find(c=>c.id==='lyre-retia-equipment'); assert(!!lyre,'Catálogo de Lyre registrado');
assert(lyre?.sourceId==='lyre','Catálogo Lyre vinculado à fonte lyre');
assert(lyre?.items.length===29,'Lyre adiciona 29 entradas de equipamento');
assert(lyre?.items.filter(x=>x.type==='weapon').length===22,'Lyre adiciona 22 armas');
assert(lyre?.items.filter(x=>x.type==='shield').length===1,'Lyre adiciona 1 escudo');
assert(lyre?.items.filter(x=>x.type==='ammunition').length===6,'Lyre adiciona 6 entradas de munição');
assert(lyre?.items.filter(x=>x.type==='armor').length===0,'Capítulo IX não adiciona armaduras corporais');
assert((lyre?.rulesSections||[]).length===2,'Lyre adiciona 2 blocos de regras complementares');
assert(items.length===96,'Catálogo combinado possui 96 equipamentos');
assert(items.filter(x=>x.type==='weapon').length===70,'Catálogo combinado possui 70 armas');
assert(items.filter(x=>x.type==='armor').length===12,'Catálogo combinado preserva 12 armaduras');
assert(items.filter(x=>x.type==='shield').length===2,'Catálogo combinado possui 2 escudos');
assert(items.filter(x=>x.type==='ammunition').length===6,'Catálogo combinado possui 6 munições');
assert(items.filter(x=>x.type==='gear').length===6,'Catálogo combinado preserva 6 equipamentos de aventura');
for(const id of ['clivagem','eidolica','firme','soqueiras','secundaria','avancada','laminada','rajada','recarga-completa','recarga-pesada','recarga','tiro-precisao','gatilho']) assert(!!lyre.properties[id],`Propriedade ${id} cadastrada`);
assert(!!lyre.properties.carregamento,'Carregamento (Loading) separado da Recarga de armas de fogo');
const greatbow=items.find(x=>x.id==='lyre-arco-grande');
assert(greatbow?.damage==='1d10'&&greatbow?.price==='50 po'&&greatbow?.properties.some(p=>p.id==='municao'&&p.value==='45/180 m'),'Arco Grande: dano, preço e alcance');
assert(greatbow?.requirementText?.includes('Força 16')&&greatbow?.properties.some(p=>p.id==='carregamento'),'Arco Grande: For 16 e Carregamento');
const bolas=items.find(x=>x.id==='lyre-bolas');
assert(bolas?.specialRule?.includes('CD 14')&&bolas?.specialRule?.includes('CA 13'),'Bolas: CD 14 e corda CA 13 preservadas');
const greatscythe=items.find(x=>x.id==='lyre-foice-grande');
assert(greatscythe?.specialRule?.includes('Força 18')&&greatscythe?.properties.some(p=>p.id==='alcance'),'Foice Grande: requisito para Alcance preservado');
const siege=items.find(x=>x.id==='lyre-siege-garland');
assert(siege?.damage==='4d12'&&siege?.requirementText?.includes('Força 17')&&siege?.properties.some(p=>p.id==='avancada')&&siege?.properties.some(p=>p.id==='recarga-completa'&&p.value==='1'),'Siege Garland: dano, For 17, Avançada e Recarga Completa');
assert(siege?.specialRule?.includes('conforme escrito na fonte'),'Siege Garland não inventa base numérica para a CD ambígua');
const shield=items.find(x=>x.id==='lyre-escudo-grande');
assert(shield?.armorClass==='+4'&&shield?.strength===19&&shield?.stealthDisadvantage&&shield?.weight==='7,5 kg','Escudo Grande: +4 CA, For 19, Furtividade e peso');
assert(shield?.specialRule?.includes('1,5 metro'),'Escudo Grande: redução de deslocamento preservada');
const scoped=items.find(x=>x.id==='lyre-rifle-mira');
assert(scoped?.properties.some(p=>p.id==='tiro-precisao')&&scoped?.properties.some(p=>p.id==='recarga'&&p.value==='2'),'Rifle com Mira: Tiro de Precisão e Recarga 2');
const ammo=lyre.items.filter(x=>x.type==='ammunition');
assert(ammo.some(x=>x.id==='lyre-carga-buck-5'&&x.unitPrice==='5 po')&&ammo.some(x=>x.id==='lyre-municao-explosiva-5'&&x.unitPrice==='10 po'),'Categorias Buck e Explosiva com preços unitários');
const html=browser.render();
for(const needle of ["Lyre&#39;s Guide to Retia",'Munições','Tamanhos de Equipamento','Armas de Fogo — 5.19','Clivagem','Gatilho','+4 CA']) assert(html.includes(needle),'Render contém '+needle);
browser.setSource('lyre'); assert(browser.filteredItems().length===29,'Filtro por fonte Lyre retorna 29 itens');
browser.clearFilters(); browser.setType('ammunition'); assert(browser.filteredItems().length===6,'Filtro Munições retorna 6 itens');
browser.clearFilters(); browser.setCategory('weapon-firearm-marcial'); assert(browser.filteredItems().length===5,'Filtro Armas de Fogo Marciais retorna 5 itens');
browser.clearFilters(); browser.setSearch('Greatbow'); assert(browser.filteredItems().some(x=>x.id==='lyre-arco-grande'),'Busca encontra Arco Grande pelo nome original');
browser.clearFilters(); browser.setSearch('Cleaving'); assert(browser.filteredItems().some(x=>x.id==='lyre-foice-combate'),'Busca encontra Clivagem pelo nome original');
browser.clearFilters(); browser.setSearch('Siege Garland'); assert(browser.filteredItems().length===1&&browser.filteredItems()[0].id==='lyre-siege-garland','Busca encontra Siege Garland');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(index.includes('data/equipment/phb-2014-equipment.js')&&index.includes('data/equipment/ryoko-yokai-realms-equipment.js')&&index.includes('data/equipment/lyre-retia-equipment.js'),'index carrega os 3 catálogos de equipamento');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8')); const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
{const vp=String(manifest.version||'').split('.').map(Number);const cm=cfg.match(/APP_VERSION='(\d+)\.(\d+)\.(\d+)'/);const valid=vp[0]>5||(vp[0]===5&&vp[1]>=33);assert(valid&&cm&&cm[1]===String(vp[0])&&cm[2]===String(vp[1])&&cm[3]===String(vp[2]),'Versão 5.33+ sincronizada');}
assert(manifest.equipmentCatalogs===3&&manifest.equipmentItems===96&&manifest.equipmentWeapons===70&&manifest.equipmentArmors===12&&manifest.equipmentShields===2&&manifest.equipmentAmmunition===6&&manifest.equipmentAdventureGear===6,'Manifest com contagens finais corretas');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');errors.forEach(e=>console.error('✗ '+e));process.exit(1);}console.log('\nVALIDAÇÃO DE EQUIPAMENTOS LYRE 5.33.0 CONCLUÍDA');}
