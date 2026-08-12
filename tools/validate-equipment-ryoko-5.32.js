#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'); const errors=[]; const ok=m=>console.log('✓ '+m); const fail=m=>errors.push(m); const assert=(c,m)=>c?ok(m):fail(m);
const ctx={console,setTimeout:()=>{},window:null};ctx.window=ctx;ctx.document={getElementById:()=>null,querySelectorAll:()=>[],querySelector:()=>null};vm.createContext(ctx);
for(const rel of ['js/registry.js','data/sources.js','data/equipment/phb-2014-equipment.js','data/equipment/ryoko-yokai-realms-equipment.js','js/equipment-browser.js']){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),ctx,{filename:rel});}catch(e){fail(rel+': '+e.message);break;}
}
if(errors.length)finish();
const registry=ctx.GRIMORIO_REGISTRY,browser=ctx.GRIMORIO_EQUIPMENT_BROWSER,cats=registry.getEquipmentCatalogs(),items=browser.getItems();
assert(cats.length===2,'2 catálogos de equipamentos registrados');
const ryoko=cats.find(c=>c.id==='ryoko-yokai-realms-equipment'); assert(!!ryoko,'Catálogo do Ryoko registrado');
assert(ryoko?.sourceId==='ryoko-yokai-realms','Catálogo do Ryoko vinculado à fonte correta');
assert(ryoko?.items.length===17,'Ryoko adiciona 17 itens nesta etapa');
assert(ryoko?.items.filter(x=>x.type==='weapon').length===11,'Ryoko adiciona 11 armas');
assert(ryoko?.items.filter(x=>x.type==='gear').length===6,'Ryoko adiciona 6 equipamentos de aventura');
assert(Object.keys(ryoko?.properties||{}).length===7,'Ryoko adiciona 7 propriedades de arma');
assert(items.length===67,'Catálogo combinado possui 67 equipamentos');
assert(items.filter(x=>x.type==='weapon').length===48,'Catálogo combinado possui 48 armas');
assert(items.filter(x=>x.type==='armor').length===12,'Catálogo combinado preserva 12 armaduras');
assert(items.filter(x=>x.type==='shield').length===1,'Catálogo combinado preserva 1 escudo');
assert(items.filter(x=>x.type==='gear').length===6,'Catálogo combinado possui 6 equipamentos de aventura');
for(const id of ['adaptavel','acoplada','impacto','aparar','pugilista','flagelo','versatilidade-arremesso']) assert(!!ryoko.properties[id],`Propriedade ${id} cadastrada`);
const chakram=items.find(x=>x.id==='ryoko-chakram');
assert(chakram?.damage==='1d4'&&chakram?.damageType==='cortante'&&chakram?.price==='10 po','Chakram: dano e preço');
assert(chakram?.properties.some(p=>p.id==='arremesso'&&p.value==='9/27 m')&&chakram?.properties.some(p=>p.id==='versatilidade-arremesso'&&p.value==='1d6'),'Chakram: arremesso e Versatilidade de Arremesso');
const kusa=items.find(x=>x.id==='ryoko-kusarigama'); assert(kusa?.specialRule?.includes('contrapeso')&&kusa?.properties.some(p=>p.id==='versatil'&&p.value==='1d6'),'Kusarigama: contrapeso e Versátil');
const nunchaku=items.find(x=>x.id==='ryoko-nunchaku'); assert(nunchaku?.specialRule?.includes('CD 13')&&nunchaku?.manufacturing?.dc===17,'Nunchaku: Floreio e fabricação');
const tessen=items.find(x=>x.id==='ryoko-tessen'); assert(tessen?.properties.some(p=>p.id==='adaptavel'&&p.value==='concussão')&&tessen?.specialRule?.includes('+2 na CA'),'Tessen: Adaptável e Escudo de Leque');
const odzutsu=items.find(x=>x.id==='ryoko-odzutsu'); assert(odzutsu?.damage==='2d10'&&odzutsu?.properties.some(p=>p.id==='municao'&&p.value==='45/180 m')&&odzutsu?.specialRule?.includes('duas ações'),'Ōdzutsu: dano, alcance e Recarga Longa');
const fire=items.find(x=>x.id==='ryoko-carga-fogo'); assert(fire?.description?.includes('Destreza CD 13')&&fire?.manufacturing?.materialCost==='2 po','Carga de Fogo: salvaguarda e fabricação');
const hook=items.find(x=>x.id==='ryoko-lancador-gancho'); assert(hook?.description?.includes('CA 10 e 10 PV')&&hook?.description?.includes('vantagem'),'Lançador de Gancho: corda e vantagem preservadas');
const para=items.find(x=>x.id==='ryoko-paraquedas'); assert(para?.description?.includes('30 metros')&&para?.description?.includes('18 metros por rodada'),'Paraquedas: altura e velocidade convertidas');
const smoke=items.find(x=>x.id==='ryoko-bomba-fumaca'); assert(smoke?.description?.includes('1,5 metro de raio')&&smoke?.price==='25 po','Bomba de Fumaça: área e preço');
const html=browser.render();
for(const needle of ['Yokai Realms','Equip. de Aventura','67','48','6','Adaptável','Flagelo','Fabricação']) assert(html.includes(needle),'Render contém '+needle);
browser.setSource('ryoko-yokai-realms'); assert(browser.filteredItems().length===17,'Filtro por fonte Ryoko retorna 17 itens');
browser.clearFilters(); browser.setSearch('Chakram'); assert(browser.filteredItems().length===1&&browser.filteredItems()[0].id==='ryoko-chakram','Busca encontra Chakram');
browser.clearFilters(); browser.setSearch('Thrown Versatility'); assert(browser.filteredItems().some(x=>x.id==='ryoko-chakram'),'Busca encontra propriedade pelo nome original relacionado');
// O nome original não está no glossário; busca PT-BR é obrigatória.
browser.clearFilters(); browser.setSearch('Versatilidade de Arremesso'); assert(browser.filteredItems().some(x=>x.id==='ryoko-chakram'),'Busca encontra Versatilidade de Arremesso');
browser.clearFilters(); browser.setType('gear'); assert(browser.filteredItems().length===6,'Filtro Equipamentos de Aventura retorna 6');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8'); assert(index.includes('data/equipment/ryoko-yokai-realms-equipment.js'),'index carrega catálogo do Ryoko');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8')); const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
{const vp=String(manifest.version||'').split('.').map(Number);const cm=cfg.match(/APP_VERSION='(\d+)\.(\d+)\.(\d+)'/);const valid=vp[0]>5||(vp[0]===5&&vp[1]>=32);assert(valid&&cm&&cm[1]===String(vp[0])&&cm[2]===String(vp[1])&&cm[3]===String(vp[2]),'Versão 5.32+ sincronizada');}
assert(manifest.equipmentCatalogs>=2&&manifest.equipmentItems>=67&&manifest.equipmentAdventureGear===6,'Manifest preserva catálogo Ryoko');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');errors.forEach(e=>console.error('✗ '+e));process.exit(1);}console.log('\nVALIDAÇÃO DE EQUIPAMENTOS RYOKO 5.32.0 CONCLUÍDA');}
