#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const errors=[]; const ok=m=>console.log('✓ '+m); const fail=m=>errors.push(m); const assert=(c,m)=>c?ok(m):fail(m);
const ctx={console,setTimeout:()=>{},window:null};ctx.window=ctx;ctx.document={getElementById:()=>null,querySelectorAll:()=>[],querySelector:()=>null};vm.createContext(ctx);
for(const rel of ['js/registry.js','data/sources.js','data/equipment/phb-2014-equipment.js','js/equipment-browser.js']){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),ctx,{filename:rel});}catch(e){fail(rel+': '+e.message);break;}
}
if(errors.length)finish();
const registry=ctx.GRIMORIO_REGISTRY, browser=ctx.GRIMORIO_EQUIPMENT_BROWSER;
assert(!!registry?.registerEquipmentCatalog,'Registro central expõe registerEquipmentCatalog');
const cats=registry.getEquipmentCatalogs();
assert(cats.length===1,'1 catálogo de equipamentos registrado');
const cat=cats[0];
assert(cat.id==='phb-2014-equipment'&&cat.sourceId==='phb-2014','Catálogo inicial vinculado ao Livro do Jogador');
const items=browser.getItems();
assert(items.length===50,'50 equipamentos no catálogo inicial');
assert(items.filter(x=>x.type==='weapon').length===37,'37 armas');
assert(items.filter(x=>x.type==='armor').length===12,'12 armaduras');
assert(items.filter(x=>x.type==='shield').length===1,'1 escudo');
assert(items.filter(x=>x.type==='weapon'&&x.group==='simples').length===14,'14 armas simples');
assert(items.filter(x=>x.type==='weapon'&&x.group==='marcial').length===23,'23 armas marciais');
assert(items.filter(x=>x.type==='armor'&&x.category==='leve').length===3,'3 armaduras leves');
assert(items.filter(x=>x.type==='armor'&&x.category==='media').length===5,'5 armaduras médias');
assert(items.filter(x=>x.type==='armor'&&x.category==='pesada').length===4,'4 armaduras pesadas');
const ids=new Set();for(const item of items){if(ids.has(item.id))fail('ID duplicado: '+item.id);ids.add(item.id);if(!item.sourcePage)fail('Sem página: '+item.id);for(const p of item.properties||[])if(!item._properties[p.id])fail('Propriedade desconhecida '+p.id+' em '+item.id);}if(!errors.length)ok('IDs, páginas e propriedades validados');
const adaga=items.find(x=>x.id==='phb-adaga');
assert(adaga?.damage==='1d4'&&adaga?.damageType==='perfurante'&&adaga?.price==='2 po','Adaga: dano e preço corretos');
assert(adaga?.properties.some(p=>p.id==='acuidade')&&adaga?.properties.some(p=>p.id==='arremesso'&&p.value==='6/18 m'),'Adaga: Acuidade e Arremesso 6/18 m');
const placas=items.find(x=>x.id==='phb-armadura-placas');
assert(placas?.armorClass==='18'&&placas?.strength===15&&placas?.stealthDisadvantage&&placas?.price==='1.500 po','Placas: CA 18, For 15, furtividade e preço');
const escudo=items.find(x=>x.id==='phb-escudo');
assert(escudo?.armorClass==='+2'&&escudo?.price==='10 po'&&escudo?.weight==='3 kg','Escudo: +2 CA, 10 po, 3 kg');
const lance=items.find(x=>x.id==='phb-lanca-montaria');
assert(lance?.specialRule&&lance.properties.some(p=>p.id==='especial'),'Lança de Montaria possui regra Especial');
const net=items.find(x=>x.id==='phb-rede');
assert(net?.specialRule&&net.properties.some(p=>p.id==='arremesso'&&p.value==='1,5/4,5 m'),'Rede possui regra especial e alcance de arremesso');
const lightCrossbow=items.find(x=>x.id==='phb-besta-leve');
assert(lightCrossbow?.name==='Beste Leve'&&lightCrossbow?.aliases?.includes('Besta Leve')&&lightCrossbow?.editorialNote,'Grafia Beste Leve preservada com alias Besta Leve documentado');
const html=browser.render();
for(const needle of ['Equipamentos','37</strong><span>armas','12</strong><span>armaduras','data-tooltip=','Glossário de propriedades','Acuidade','Furtividade: desvantagem','Livro do Jogador']) assert(html.includes(needle),'Render contém '+needle);
browser.setSearch('Besta Leve');assert(browser.filteredItems().some(x=>x.id==='phb-besta-leve'),'Busca encontra Besta Leve pelo alias');
browser.clearFilters();browser.setSearch('Acuidade');assert(browser.filteredItems().length===6,'Busca por Acuidade retorna 6 armas');
browser.clearFilters();browser.setType('armor');assert(browser.filteredItems().length===12,'Filtro Armaduras retorna 12 itens');
browser.clearFilters();browser.setCategory('weapon-marcial-distancia');assert(browser.filteredItems().length===5,'Filtro armas marciais à distância retorna 5 itens');
const app=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const ui=fs.readFileSync(path.join(root,'js/ui-enhancements.js'),'utf8');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert((app.includes("navigate(\\'equipment\\')")||app.includes("routeHref('equipment'")||app.includes("routeHref(\'equipment\'"))&&app.includes("route.view==='equipment'"),'app.js contém navegação e rota Equipamentos');
assert((ui.includes("navigate(\\'equipment\\')")||ui.includes("routeHref('equipment'")||ui.includes("navA('equipment'"))&&ui.includes('Equipamentos'),'ui-enhancements mantém Equipamentos abaixo das ferramentas iniciais');
assert(index.includes('data/equipment/phb-2014-equipment.js')&&index.includes('js/equipment-browser.js'),'index carrega dados e navegador de equipamentos');
assert(app.includes('palette-group-label">Equipamentos')&&(app.includes('GRIMORIO_EQUIPMENT_BROWSER.openItem')||app.includes("routeHref('equipment'")),'Busca global Ctrl+K integra Equipamentos');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
{const vp=String(manifest.version||'').split('.').map(Number);const cm=cfg.match(/APP_VERSION='(\d+)\.(\d+)\.(\d+)'/);const valid=vp[0]>5||(vp[0]===5&&vp[1]>=31);assert(valid&&cm&&cm[1]===String(vp[0])&&cm[2]===String(vp[1])&&cm[3]===String(vp[2]),'Versão 5.31+ sincronizada');}
assert(manifest.equipmentItems>=50&&manifest.equipmentWeapons>=37&&manifest.equipmentArmors===12&&manifest.equipmentShields>=1,'Manifest contém ao menos as contagens do catálogo-base');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');errors.forEach(e=>console.error('✗ '+e));process.exit(1);}console.log('\nVALIDAÇÃO DE EQUIPAMENTOS 5.31.0 CONCLUÍDA');}
