#!/usr/bin/env node
const fs=require('fs');const path=require('path');const cp=require('child_process');
const root=path.resolve(__dirname,'..');const read=r=>fs.readFileSync(path.join(root,r),'utf8');
const errors=[];const passed=[];const check=(ok,msg)=>ok?passed.push(msg):errors.push(msg);
const pkg=JSON.parse(read('package.json'));const manifest=JSON.parse(read('manifest.json'));const mod=JSON.parse(read('foundry/grimorio-importer/module.json'));const ipkg=JSON.parse(read('foundry/grimorio-importer/package.json'));
check(pkg.version==='5.64.0'&&manifest.version==='5.64.0'&&read('js/config.js').includes("APP_VERSION='5.64.0'"),'versão Grimório 5.64.0 sincronizada');
check(mod.version==='0.13.0-alpha.1'&&ipkg.version==='0.13.0-alpha.1','Importer 0.13.0-alpha.1 sincronizado');
check(mod.packs.length===6,'Importer declara seis compêndios');
check(mod.packs.some(p=>p.name==='grimorio-races')&&mod.packs.some(p=>p.name==='grimorio-racial-features'),'packs Raças + Características Raciais declarados');
for(const f of ['foundry/grimorio-importer/scripts/race-validator.js','foundry/grimorio-importer/scripts/race-support.js','foundry/grimorio-importer/docs/RACE_BUILD_RB5.md','foundry/grimorio-importer/tests/validate-race-preflight-013.mjs'])check(fs.existsSync(path.join(root,f)),`arquivo RB-5: ${f}`);
check(!fs.existsSync(path.join(root,'foundry/grimorio-importer/scripts/race-materializer.js')),'RB-5 não possui materializador racial');
check(read('foundry/grimorio-importer/scripts/ui/payload-preflight.js').includes('race-build')&&read('foundry/grimorio-importer/scripts/ui/payload-preflight.js').includes('executionBlockReason'),'Central reconhece Race Build como preflight-only');
check(read('foundry/grimorio-importer/scripts/ui/compendium-preflight.js').includes('plannedRaceBuildDocuments'),'preflight planeja documentos raciais');
check(read('foundry/grimorio-importer/scripts/main.js').includes('materialização racial permanece desabilitada até a RB-6'),'main bloqueia escrita racial na RB-5');
check(read('js/exporters/foundry-race-build-bundle.js').includes("status: 'preflight-only'")&&read('js/exporters/foundry-race-build-bundle.js').includes("importerStatus: 'rb5-preflight'"),'site gera Race Build v1 em estado preflight-only para RB-5');
check(read('js/exporters/foundry-race-build-bundle.js').includes("['awaiting-importer', 'preflight-only']")&&read('foundry/grimorio-importer/scripts/race-validator.js').includes('["awaiting-importer", "preflight-only"]'),'RB-5 aceita bundles RB-4 legados e bundles preflight-only atuais');
check(read('js/exporters/foundry-race-export-ui.js').includes('0.13.x')||read('js/exporters/foundry-race-export-ui.js').includes('RB-5'),'UI racial comunica o preflight do Importer 0.13.x/RB-5');
for(const f of ['examples/races/human-woodlander-rb4.json','examples/races/hanyou-emberash-rb4.json'])check(fs.existsSync(path.join(root,f)),`fixture preservada: ${f}`);
const result=cp.spawnSync(process.execPath,[path.join(root,'foundry/grimorio-importer/tests/validate-race-preflight-013.mjs')],{encoding:'utf8'});
if(result.status===0)passed.push('gate do Importer RB-5 aprovado');else errors.push('gate do Importer RB-5 falhou: '+(result.stderr||result.stdout||'sem saída'));
for(const f of ['foundry/grimorio-importer/scripts/race-validator.js','foundry/grimorio-importer/scripts/race-support.js','foundry/grimorio-importer/scripts/ui/payload-preflight.js','foundry/grimorio-importer/scripts/ui/compendium-preflight.js','foundry/grimorio-importer/scripts/ui/importer-session.js','foundry/grimorio-importer/scripts/ui/release-readiness.js','foundry/grimorio-importer/scripts/main.js']){
 const r=cp.spawnSync(process.execPath,['--check',path.join(root,f)],{encoding:'utf8'});check(r.status===0,`sintaxe: ${f}`);
}
if(errors.length){console.error(`Race Build RB-5 v5.64.0 reprovado: ${errors.length} erro(s).`);errors.forEach(e=>console.error('✗ '+e));process.exit(1)}
passed.forEach(m=>console.log('✓ '+m));console.log(`\nRace Build RB-5 v5.64.0 aprovado: ${passed.length} verificações, 0 erros.`);
