#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'); const read=r=>fs.readFileSync(path.join(root,r),'utf8');
const errors=[]; const ok=m=>console.log('✓ '+m); const fail=m=>errors.push(m);
const c={console}; c.window=c; vm.createContext(c);
const files=['js/registry.js','data/sources.js','data/phb-spells.js','data/xanathar-spells.js','data/tasha-spells.js','data/scag-spells.js','data/spellblade-spells.js','data/lyre-spells.js','data/blade-bone-benefit-spells.js','data/zagalhta-spells.js','data/paraprismatic-tempest-spells.js','data/ryoko-spells.js','data/cultivator-homebrew-spells.js','data/homebrew-sage-spells.js'];
for(const f of files){try{vm.runInContext(read(f),c,{filename:f});}catch(e){fail(`${f}: ${e.message}`);}}
if(errors.length) finish();
const reg=c.GRIMORIO_REGISTRY, cats=reg.getSpellCatalogs();
const cat=cats.find(x=>x.id==='paraprismatic-tempest-spells');
if(!cat) fail('Catálogo paraprismatic-tempest-spells ausente.');
else if(cat.sourceId!=='paraprismatic-tempest') fail('Catálogo usa sourceId incorreto.');
else if(cat.spells.length!==23) fail(`Esperadas 23 entradas próprias/revisadas; encontradas ${cat.spells.length}.`); else ok('23 entradas próprias/revisadas no catálogo');
const expected=['Battering Storm','Billow','Cataclysm','Conjure Elemental Avatar','Dust Twister','Elemental Assault','Freezing Sphere','Frostveil','Grand Elemental Aspect','Investiture of Air','Investiture of Earth','Investiture of Fire','Investiture of Frost','Lightning Bolt','Magma Wave','Manipulate Flames','Nova','Place of Protection','Scorching Wave','Sear','Tempest Strikes','Tempest Ward','Tornado'];
const own=new Map((cat?.spells||[]).map(s=>[s.originalName,s]));
for(const name of expected){const s=own.get(name); if(!s) fail(`Magia própria ausente: ${name}.`); else {if(!s.id||!s.name||!s.desc||!s.school||!s.time||!s.range||!s.comp||!s.duration||!s.classes) fail(`${name}: metadados obrigatórios incompletos.`); if(s.source!=='Somnus Domina — Paraprismatic Tempest'||s.sourcePage<51||s.sourcePage>60) fail(`${name}: proveniência/página inválida.`);}}
if(!errors.length) ok('23 blocos possuem identidade, texto e páginas válidas');
const groups=c.GRIMORIO_PARAPRISMATIC_SPELL_GROUPS||[];
if(groups.length!==5) fail(`Esperados 5 Spell Groups; encontrados ${groups.length}.`); else ok('5 Spell Groups catalogados');
const memberships=groups.reduce((n,g)=>n+(g.spells?.length||0),0); const unique=new Set(groups.flatMap(g=>g.spells||[]));
if(memberships!==139) fail(`Esperadas 139 associações Spell↔Group; encontradas ${memberships}.`); else ok('139 associações Spell↔Group preservadas');
if(unique.size!==136) fail(`Esperados 136 nomes únicos nos grupos; encontrados ${unique.size}.`); else ok('136 nomes únicos nos grupos');
const ec=groups.find(g=>g.originalName==='Elemental Confluence'); if(!ec?.description?.includes('Harvest Manual')||!ec.description.includes('Harvest Tradition')) fail('A discrepância Harvest Manual/Harvest Tradition não foi preservada.'); else ok('Discrepância Harvest Manual preservada');
const all=cats.flatMap(x=>x.spells);
for(const [id,name,page] of [['bbb-cross-handle','Cross Handle',52],['lyre-manipulate-earth','Manipulate Earth',57]]){
  const s=all.find(x=>x.id===id); const ref=s?.otherSources?.find(x=>x.title==='Somnus Domina — Paraprismatic Tempest');
  if(!s||!ref||String(ref.pages)!==String(page)) fail(`${name}: reimpressão equivalente não vinculada.`);
}
const represented=all.filter(s=>reg.spellGroupLabels(s).includes('Paraprismatic Tempest'));
if(represented.length!==25) fail(`A fonte deve representar 25 blocos consultáveis; encontrados ${represented.length}.`); else ok('25 blocos consultáveis pela fonte (23 próprios + 2 vinculados)');
if(!all.find(s=>s.id==='bbb-cross-handle')?.traits?.includes('Zanjen')) fail('Cross Handle perdeu Zanjen.');
if(!all.find(s=>s.id==='lyre-manipulate-earth')?.traits?.includes('Harvest Tradition')) fail('Manipulate Earth não recebeu Harvest Tradition.');
const magma=own.get('Magma Wave'); if(!magma?.higher?.includes('acima do 4º')||!magma?.sourceNote?.includes('above 3rd')) fail('Magma Wave: divergência Paraprismatic/Zagalhta não preservada.'); else ok('Magma Wave preserva a divergência entre fontes');
const ward=own.get('Tempest Ward'); if(!ward?.desc?.includes('trovejante')||ward?.desc?.includes('veneno')||!ward?.sourceNote?.includes('veneno')) fail('Tempest Ward: discrepância thunder/poison não preservada.'); else ok('Tempest Ward preserva thunder no bloco impresso');
const sear=own.get('Sear'); if(!sear?.higher?.includes('(2 níveis)')||!sear?.higher?.includes('(3 níveis)')) fail('Sear: continuação da página 60 não foi incorporada.'); else ok('Sear inclui a continuação de At Higher Levels da p. 60');
const avatar=own.get('Conjure Elemental Avatar'); if(!avatar?.summonTemplate||avatar.summonTemplate.name!=='Modelo do Avatar Elemental'||avatar.summonTemplate.actions?.length!==3||!avatar.desc.includes('Explosão da Tempestade')) fail('Conjure Elemental Avatar: template da p. 53 incompleto.'); else ok('Elemental Avatar Template estruturado e incluído na descrição');
const legacy=['Freezing Sphere','Investiture of Air','Investiture of Earth','Investiture of Fire','Investiture of Frost','Lightning Bolt']; for(const name of legacy){const s=own.get(name); if(!(s?.traits||[]).includes('Legado 5.19')||!s?.sourceNote?.includes('versão oficial')) fail(`${name}: revisão 5.19 não foi isolada da versão oficial.`);} if(!errors.length) ok('6 revisões 5.19 preservadas como entradas próprias');
const manifest=JSON.parse(read('manifest.json')); const r=manifest.foundryExport?.readiness||{};
if(manifest.version!=='5.64.0'||manifest.paraprismaticTempestSpellsIntegrated!==true||manifest.paraprismaticTempestSpellStatBlocks!==25||manifest.paraprismaticTempestSpellCatalogEntries!==23||manifest.paraprismaticTempestSpellReprintsLinked!==2||manifest.paraprismaticTempestSpellGroups!==5||manifest.paraprismaticTempestSpellGroupMemberships!==139||r.spellCatalogs!==11||r.spellsTotal!==1208) fail('manifest.json não está sincronizado com a integração 5.64.0.'); else ok('Manifest 5.64.0 sincronizado');
if(!read('index.html').includes('data/paraprismatic-tempest-spells.js')) fail('index.html não carrega o catálogo Paraprismatic.'); else ok('Catálogo carregado pelo index');
if(!read('api/_lib/admin/config.mjs').includes("'paraprismatic-tempest-spells': 'data/paraprismatic-tempest-spells.js'")) fail('Grimório Admin não permite o novo catálogo.'); else ok('Grimório Admin allowlist atualizada');
if(!read('data/export/foundry-v13-overrides.js').includes("'paraprismatic-dust-twister'")) fail('Override técnico do Dust Twister ausente.');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nParaprismatic Tempest — Tempestuous Spells v5.64.0 validado com sucesso.');}
