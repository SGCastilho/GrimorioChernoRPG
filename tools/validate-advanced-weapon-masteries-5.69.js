#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const crypto=require('crypto');
const root=path.resolve(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const errors=[],passed=[];
const ok=(cond,msg)=>cond?passed.push(msg):errors.push(msg);

const manifest=JSON.parse(read('manifest.json'));
const index=read('index.html');
const app=read('js/app.js');
const nav=read('js/static-nav.js');
const deep=read('js/deep-links.js');
const browser=read('js/weapon-mastery-browser.js');
const css=read('css/weapon-masteries.css');
const sources=read('data/sources.js');

ok(manifest.version==='5.69.0','versão 5.69.0 registrada no manifesto');
ok(manifest.advancedWeaponMasteriesIntegrated===true,'integração de Maestrias Avançadas registrada');
ok(manifest.advancedWeaponMasteryTrees===12&&manifest.advancedWeaponMasteryTechniques===94&&manifest.advancedWeaponMasterySuperiorStrikes===11&&manifest.advancedWeaponMasteryProgressionRows===10,'contagens 12 árvores / 94 técnicas / 11 golpes / 10 linhas registradas');
ok(manifest.deepLinkRoutes.includes('weapon-masteries'),'rota weapon-masteries registrada');

const sandbox={window:{}};sandbox.window=sandbox;vm.createContext(sandbox);
vm.runInContext(read('data/ryoko-advanced-weapon-masteries.js'),sandbox,{filename:'data/ryoko-advanced-weapon-masteries.js'});
const data=sandbox.GRIMORIO_ADVANCED_WEAPON_MASTERIES;
ok(data?.schema==='grimorio-advanced-weapon-masteries@1','schema de Maestrias presente');
ok(data?.sourceId==='ryoko-yokai-realms'&&data?.pages==='83–115','proveniência Ryoko pp. 83–115 preservada');
ok(Array.isArray(data?.progression)&&data.progression.length===10,'tabela de progressão possui 10 linhas');
const expected=[[2,1,1],[4,2,1],[6,3,2],[8,4,2],[10,5,3],[12,6,3],[14,7,4],[16,8,4],[18,9,4],[20,10,4]];
ok(expected.every((row,i)=>{const x=data.progression[i];return x.martialLevel===row[0]&&x.techniquesKnown===row[1]&&x.maxTier===row[2];}),'progressão marcial coincide com a fonte');

const trees=data?.trees||[];
ok(trees.length===12,'12 árvores carregadas');
const expectedTrees=['ammunition','finesse','heavy','impact','light','loading-reload','pugilist','reach','scourge','shield','thrown','versatile'];
ok(expectedTrees.every(id=>trees.some(t=>t.id===id)),'todas as árvores esperadas presentes');
const techniques=trees.flatMap(tree=>tree.techniques.map(t=>({...t,treeId:tree.id})));
ok(techniques.length===94,'94 Técnicas Avançadas carregadas');
ok(new Set(techniques.map(t=>t.id)).size===94,'IDs das técnicas são únicos');
ok(techniques.every(t=>t.name&&t.originalName&&t.summary&&t.description&&[1,2,3,4].includes(t.tier)&&[2,6,10,14].includes(t.martialLevel)&&t.sourcePage>=90&&t.sourcePage<=115),'técnicas possuem tradução, original, descrição, tier, nível e página');
ok(techniques.filter(t=>t.tier===2).every(t=>t.requiresTier===1)&&techniques.filter(t=>t.tier===3).every(t=>t.requiresTier===2)&&techniques.filter(t=>t.tier===4).every(t=>t.requiresTier===3),'cadeia de pré-requisitos de tiers preservada');
ok(techniques.every(t=>!/\b(?:feet|foot)\b/i.test(t.description)),'descrições integradas usam distâncias métricas');
const perTree=Object.fromEntries(trees.map(t=>[t.id,t.techniques.length]));
ok(JSON.stringify(perTree)===JSON.stringify({ammunition:7,finesse:7,heavy:8,impact:7,light:7,'loading-reload':8,pugilist:13,reach:7,scourge:7,shield:7,thrown:7,versatile:9}),'quantidade de técnicas por árvore preservada');

const strikes=data?.superiorStrikes||[];
ok(strikes.length===11&&new Set(strikes.map(s=>s.id)).size===11,'11 Golpes Superiores únicos carregados');
ok(strikes.every(s=>s.name&&s.originalName&&s.description&&[88,89].includes(s.sourcePage)),'Golpes Superiores possuem descrição e página');
ok(Object.keys(data.weaponSuperiorStrikeMap||{}).length>=60,'Weapon Metadata possui mapeamento amplo de armas para Golpes Superiores');
ok(Object.values(data.weaponSuperiorStrikeMap||{}).every(id=>strikes.some(s=>s.id===id)),'todo mapeamento de arma aponta para Golpe Superior válido');

ok(index.includes('css/weapon-masteries.css')&&index.includes('data/ryoko-advanced-weapon-masteries.js')&&index.includes('js/weapon-mastery-browser.js'),'recursos de Maestrias carregados no index');
ok(index.indexOf('data/ryoko-advanced-weapon-masteries.js')<index.indexOf('js/weapon-mastery-browser.js')&&index.indexOf('js/weapon-mastery-browser.js')<index.indexOf('js/app.js'),'ordem de carregamento da nova aba é válida');
ok(nav.includes("view:'weapon-masteries'")&&nav.includes("label:'Maestrias de Armas'"),'menu lateral inclui a nova aba');
ok(app.includes("route.view==='weapon-masteries'")&&app.includes('GRIMORIO_WEAPON_MASTERY_BROWSER'),'app renderiza a nova aba');
ok(deep.includes("if(v==='weapon-masteries')")&&deep.includes("if(first==='weapon-masteries')"),'deep link explícito das Maestrias presente');
ok(browser.includes('grimorio-advanced-weapon-mastery-builder-v1')&&browser.includes('fullMartialLevels')&&browser.includes('halfMartialLevels'),'planejador possui estado persistente e calculadora marcial');
ok(browser.includes('techniqueIssues')&&browser.includes('canDeselect')&&browser.includes('proficiencyLocked'),'planejador valida pré-requisitos e protege dependências');
ok(browser.includes('Golpes Superiores')&&browser.includes('progressTable')&&browser.includes('awm-tier-columns'),'UI contém progressão, árvores visuais e Golpes Superiores');
ok(css.includes('.awm-tier-columns')&&css.includes('.awm-tech.selected')&&css.includes('@media(max-width:760px)'),'layout das árvores é visual e responsivo');
ok(sources.includes('94 Técnicas Avançadas')&&sources.includes('11 Golpes Superiores'),'registro de fonte documenta a nova integração');

const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex');
ok(hash('data/race-covers.js')==='d5bb8e55ef0e4ff7e6e80f4a87be7d68598c061b6c00c0fffe26cc6f4c5c49ed','race-covers.js preserva exatamente o arquivo manual fornecido');
ok(hash('data/race-detail-art.js')==='98ea3ee00e49a1264cbab0ea5d8e2abd02b0861ef78eda851b5226738a1f9cda','race-detail-art.js preserva exatamente o arquivo manual fornecido');
ok(manifest.raceArtIllustrated===46,'manifesto reconhece arte configurada para as 46 raças');

if(errors.length){errors.forEach(e=>console.error('✗ '+e));console.error(`Maestrias Avançadas 5.69.0 reprovadas: ${errors.length} erro(s).`);process.exit(1);}
passed.forEach(e=>console.log('✓ '+e));
console.log(`Maestrias Avançadas 5.69.0 aprovadas: ${passed.length} verificações, 0 erros.`);
