#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=r=>fs.readFileSync(path.join(root,r),'utf8');
const errors=[]; const ok=m=>console.log('✓ '+m); const fail=m=>errors.push(m);
const c={console}; c.window=c; vm.createContext(c);
const files=[
  'data/classes.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/blade-bone-benefit-classes.js',
  'data/lyre-subclasses.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/paraprismatic-tempest-subclasses.js'
];
for(const f of files){try{vm.runInContext(read(f),c,{filename:f});}catch(e){fail(`${f}: ${e.message}`);}}
if(errors.length)finish();
const classes=c.GRIMORIO_CLASSES||[], subs=c.GRIMORIO_SUBCLASSES||[];
const ours=subs.filter(s=>s.source?.title==='Somnus Domina — Paraprismatic Tempest');
if(ours.length!==18)fail(`Esperadas 18 subclasses Paraprismatic; encontradas ${ours.length}.`); else ok('18 Convergent Subclasses integradas');
const parents=new Set(ours.map(s=>s.classId));
if(parents.size!==17)fail(`Esperadas 17 classes-base; encontradas ${parents.size}.`); else ok('17 classes-base atendidas');
for(const s of ours){
  if(!classes.some(c=>c.id===s.classId))fail(`${s.id}: classe-base inexistente (${s.classId}).`);
  if(!s.id||!s.name||!s.originalName||!s.desc)fail(`${s.id||'(sem id)'}: identidade incompleta.`);
  if(!s.sourcePage||!s.source?.pages)fail(`${s.id}: metadados de página ausentes.`);
  if(!Array.isArray(s.features)||!s.features.length)fail(`${s.id}: sem características.`);
  for(const f of s.features||[]){if(!f.title||!Number.isFinite(f.level)||!f.page||!f.text||f.sourceTitle!=='Somnus Domina — Paraprismatic Tempest')fail(`${s.id}: característica incompleta (${f.title||'sem título'}).`);}
}
const featureCount=ours.reduce((n,s)=>n+s.features.length,0), referenceCount=ours.reduce((n,s)=>n+(s.references?.length||0),0), tableCount=ours.reduce((n,s)=>n+(s.tables?.length||0),0);
if(featureCount!==95)fail(`Esperadas 95 características; encontradas ${featureCount}.`); else ok('95 características de subclasse preservadas');
if(referenceCount!==4)fail(`Esperados 4 blocos complementares sem nível; encontrados ${referenceCount}.`); else ok('4 blocos complementares sem nível preservados');
if(tableCount!==8)fail(`Esperadas 8 tabelas estruturadas; encontradas ${tableCount}.`); else ok('8 tabelas estruturadas preservadas');
const expected=new Map([
['Path of the Daemoniacal','barbarian'],['College of The Planes','bard'],['Scourge of Planar Blood','blood-minister-somnus'],['Elemental Domain','cleric'],['Lord Guardian','dragoneer'],['Circle of Guardians','druid'],['Eidolic Knight','fighter'],['War Journal','inscriptor-retia'],['Way of the Tempest','monk'],['Oath of Banishment','paladin'],['Devil’s Claw','petal-knight-retia'],['Predator Prismatic','ranger'],['Rimeknife','rogue'],['Flamekeeper','sorcerer'],['Oaken Soul','sorcerer'],['Way of the Geomancer','sword-saint-retia'],['Cataclysmic','warlock'],['Elementalist','wizard']]);
for(const [original,parent] of expected){const s=ours.find(x=>x.originalName===original);if(!s)fail(`Subclasse ausente: ${original}.`);else if(s.classId!==parent)fail(`${original}: parent esperado ${parent}, obtido ${s.classId}.`);}
if(!errors.length)ok('Identidades e vínculos das 18 subclasses conferidos');
const eid=ours.find(s=>s.originalName==='Eidolic Knight');
const eidTable=eid?.tables?.find(t=>t.title.includes('Cavaleiro Eidólico'));
if(eidTable?.rows?.length!==18)fail('Cavaleiro Eidólico: tabela de conjuração deve conter 18 linhas (3º–20º).'); else ok('Cavaleiro Eidólico: progressão de conjuração completa');
const monk=ours.find(s=>s.originalName==='Way of the Tempest'); const pal=ours.find(s=>s.originalName==='Oath of Banishment');
if(!monk?.tables?.some(t=>t.title==='Opções de Magias da Tempestade'))fail('Caminho da Tempestade: Tempest Spell Options não foi vinculada.');
if(pal?.tables?.some(t=>t.title==='Opções de Magias da Tempestade'))fail('Tempest Spell Options foi atribuída incorretamente ao Paladino.');
if(monk?.tables?.find(t=>t.title==='Opções de Magias da Tempestade')?.rows?.length!==10)fail('Tempest Spell Options deve possuir 10 linhas (truques a 9º).'); else ok('Tempest Spell Options vinculada corretamente ao Monge');
if(pal?.tables?.find(t=>t.title.includes('Juramento'))?.rows?.length!==5)fail('Juramento do Banimento: tabela de magias incompleta.'); else ok('Juramento do Banimento: 5 linhas de Oath Spells');
const war=ours.find(s=>s.originalName==='War Journal'); if(war?.tables?.[0]?.rows?.length!==5)fail('Diário de Guerra: Chapter Spells incompletas.'); else ok('Diário de Guerra: Chapter Spells completas');
const lord=ours.find(s=>s.originalName==='Lord Guardian'); if(lord?.tables?.[0]?.rows?.[0]?.hit!=='d10'||lord.tables[0].rows[0].casting!=='Nenhuma')fail('Lord Guardian: parâmetros de especialização divergentes.'); else ok('Lord Guardian: parâmetros de classe preservados');
const cat=ours.find(s=>s.originalName==='Cataclysmic');
if((cat?.tables||[]).length!==2)fail('Cataclísmico: esperado modelo do Agente + Invocações.');
const inv=cat?.tables?.find(t=>t.title.includes('Invocações')); if(inv?.rows?.length!==8)fail('Cataclísmico: 8 Invocações Místicas não foram preservadas.');
const agent=cat?.tables?.find(t=>t.title.includes('Agente Primordial')); if(!agent||!agent.rows.some(r=>r.field==='Vórtice Elemental (nível 6)')||!agent.rows.some(r=>r.field==='Portal do Mestre'))fail('Cataclísmico: modelo do Agente Primordial incompleto.'); else ok('Cataclísmico: Agente Primordial + 8 Invocações completos');
const ranger=ours.find(s=>s.originalName==='Predator Prismatic'); if(!ranger?.features.some(f=>String(f.sourceNote||'').includes('Prismatic Predator feature')))fail('Predador Prismático: discrepância editorial do nome da feature não foi registrada.'); else ok('Predador Prismático: discrepância editorial preservada');
const refExpected=[['Scourge of Planar Blood','Especificidade da Tempestade'],['War Journal','Magias de Capítulo'],['Oath of Banishment','Preceitos do Banimento'],['Cataclysmic','Invocações Místicas do Cataclísmico']];
for(const [original,title] of refExpected){const sc=ours.find(s=>s.originalName===original);if(!sc?.references?.some(r=>r.title===title))fail(`${original}: bloco complementar sem nível ausente (${title}).`);}
if(!errors.length)ok('Seções sem nível não foram convertidas em características de progressão');
const flame=ours.find(s=>s.originalName==='Flamekeeper'); if(!flame?.aliases?.includes('Flamkeeper'))fail('Flamekeeper: typo Flamkeeper do índice não foi preservado como alias.'); else ok('Flamekeeper: alias editorial Flamkeeper preservado');
const manifest=JSON.parse(read('manifest.json'));
if(manifest.version!=='5.68.0'||manifest.subclasses!==400||manifest.paraprismaticTempestSubclasses!==18||manifest.paraprismaticTempestSubclassFeatures!==95||manifest.paraprismaticTempestSubclassReferences!==4||manifest.paraprismaticTempestSubclassTables!==8||manifest.registeredSources!==18)fail('manifest.json não está sincronizado com 5.68.0.'); else ok('Manifest 5.68.0 sincronizado');
const index=read('index.html'); if(!index.includes('data/paraprismatic-tempest-subclasses.js'))fail('index.html não carrega o novo módulo de subclasses.'); else ok('Módulo carregado no index');
const admin=read('api/_lib/admin/config.mjs'); if(!admin.includes("'data/paraprismatic-tempest-subclasses.js'"))fail('Admin não possui allowlist para o módulo de subclasses.'); else ok('Grimório Admin allowlist atualizada');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nParaprismatic Tempest — Convergent Subclasses v5.68.0 validado com sucesso.');}
