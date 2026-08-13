#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const errors=[];const ok=(condition,message)=>{if(condition)console.log('✓ '+message);else errors.push(message);};

const context={console};context.window=context;vm.createContext(context);
for(const file of ['js/registry.js','data/sources.js','data/feats/phb-2014-feats.js','js/exporters/registry.js','js/exporters/foundry-feat-bundle.js','js/exporters/foundry-feat-package.js']){
  try{vm.runInContext(read(file),context,{filename:file});}catch(error){errors.push(`${file}: ${error.message}`);}
}
const bundleApi=context.GRIMORIO_FOUNDRY_FEAT_BUNDLE;
const packageApi=context.GRIMORIO_FOUNDRY_FEAT_PACKAGE;
const feats=context.GRIMORIO_REGISTRY?.getFeatCatalogs?.().flatMap(c=>c.feats)||[];
ok(!!bundleApi&&!!packageApi,'exportadores de bundle/pacote de Talentos carregam');
ok(bundleApi?.schema?.name==='grimorio-foundry-feat-bundle'&&bundleApi?.schema?.version===1,'schema de bundle de Talento é v1');
ok(packageApi?.schema?.name==='grimorio-foundry-feat-package'&&packageApi?.schema?.version===1,'schema de pacote de Talentos é v1');
ok(bundleApi?.profile?.minimumImporterVersion==='0.10.0','bundle exige Grimório Importer 0.10.0');
let pkg=null;
try{pkg=packageApi.buildAllFeatPackage();}catch(error){errors.push('buildAllFeatPackage: '+error.message);}
if(pkg){
  const validation=packageApi.validatePackage(pkg);
  ok(validation.ok,'pacote completo passa na validação do site');
  ok(pkg.summary.bundles===42&&pkg.summary.feats===42,'pacote completo contém 42 Talentos');
  ok(pkg.summary.sources===1&&pkg.summary.prerequisites===12&&pkg.summary.repeatable===1,'resumo do pacote preserva fonte/pré-requisitos/repetibilidade');
  ok(pkg.bundles.every(bundle=>bundle.kind==='feat'&&bundle.feat?.foundryPlan?.itemType==='feat'),'todos os bundles planejam Item nativo feat');
  ok(new Set(pkg.bundles.map(bundle=>bundle.identity.grimorioId)).size===42,'IDs de transporte são únicos');
}
for(const feat of feats){const inspected=bundleApi.inspectFeat(feat.id);if(!inspected.ok)errors.push(`${feat.name}: ${inspected.errors.join('; ')}`);}
ok(feats.length===42,'42 Talentos inspecionados para transporte Foundry');

const index=read('index.html');
const browser=read('js/feat-browser.js');
const config=read('js/config.js');
const manifest=JSON.parse(read('manifest.json'));
const moduleJson=JSON.parse(read('foundry/grimorio-importer/module.json'));
const modulePackage=JSON.parse(read('foundry/grimorio-importer/package.json'));
const packStorage=read('foundry/grimorio-importer/scripts/pack-storage.js');
const main=read('foundry/grimorio-importer/scripts/main.js');
const materializer=read('foundry/grimorio-importer/scripts/materializer.js');
const featMaterializer=read('foundry/grimorio-importer/scripts/feat-materializer.js');

ok(index.includes('js/exporters/foundry-feat-bundle.js')&&index.includes('js/exporters/foundry-feat-package.js')&&index.includes('js/exporters/foundry-feat-export-ui.js'),'index carrega toda a integração de exportação de Talentos');
ok(browser.includes('openFoundryFeatExport')&&browser.includes('openFoundryFeatCatalogExport'),'página de Talentos expõe exportação individual e em catálogo');
ok(config.includes("APP_VERSION='5.41.0'"),'APP_VERSION é 5.41.0');
ok(manifest.version==='5.41.0'&&manifest.foundryImporter?.version==='0.10.0','manifest sincroniza Grimório 5.41.0 e Importer 0.10.0');
ok(manifest.foundryFeatCount===42&&manifest.foundryFeatReimportStable===true,'manifest registra 42 Talentos e reimportação estável');
ok(moduleJson.version==='0.10.0'&&modulePackage.version==='0.10.0'&&materializer.includes('IMPORTER_VERSION = "0.10.0"'),'versão 0.10.0 sincronizada no módulo');
ok(moduleJson.packs.some(pack=>pack.name==='grimorio-feats'&&pack.type==='Item'),'module.json declara Grimório — Talentos');
ok(moduleJson.packFolders?.some(folder=>folder.packs?.includes('grimorio-feats')),'compêndio de Talentos entra na pasta do módulo');
ok(packStorage.includes('collection: `${MODULE_ID}.grimorio-feats`'),'PACKS possui o compêndio de Talentos');
ok(main.includes('importFeatBundle')&&main.includes('importFeatPackage')&&main.includes('isFeatBundle')&&main.includes('isFeatPackage'),'dispatcher do módulo reconhece bundle e pacote de Talentos');
ok(main.includes('/grimorio-import-feats'),'módulo expõe alias /grimorio-import-feats');
ok(featMaterializer.includes('type: "feat"')&&featMaterializer.includes('documentRole: "feat"')&&featMaterializer.includes('automation')&&featMaterializer.includes('conservative-description-first'),'materializador cria feat nativo com flags e política conservadora');
ok(fs.existsSync(path.join(root,'foundry/grimorio-importer/examples/feats/phb-2014-feats-package.json')),'exemplo de pacote PHB foi gerado');
ok(fs.existsSync(path.join(root,'foundry/grimorio-importer/tests/validate-feats-010.mjs')),'teste 0.10.0 de Talentos existe');

if(errors.length){console.error('\nFalhas:');errors.forEach(e=>console.error('✗ '+e));process.exit(1);}else console.log('\nValidação Foundry Talentos 5.41 aprovada.');
