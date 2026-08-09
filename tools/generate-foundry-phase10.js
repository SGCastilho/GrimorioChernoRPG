#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
global.window=global;
function load(file){vm.runInThisContext(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});}
[
'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','data/homebrew-spellblade-class.js','data/cultivator-class.js','js/exporters/foundry-class-bundle.js','js/exporters/foundry-class-package.js'
].forEach(load);
const out=path.join(root,'tests','foundry-v13','phase10');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(path.join(out,'samples'),{recursive:true});
const api=global.GRIMORIO_FOUNDRY_CLASS_PACKAGE;
const bundle=global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
function write(name,value){fs.writeFileSync(path.join(out,'samples',name),JSON.stringify(value,null,2)+'\n');}
write('classe-barbaro-individual.json',api.buildSingleClassBundle('barbarian'));
write('subclasse-caminho-do-kaiju-individual.json',api.buildSingleSubclassBundle('ryoko-barbarian-path-kaiju'));
write('classe-cavaleiro-draconico-individual.json',api.buildSingleClassBundle('dragoneer'));
write('subclasse-tecelao-de-sangue-individual.json',api.buildSingleSubclassBundle('zagalhta-dragoneer-bloodweaver'));
write('pacote-barbaro-classe-completa.json',api.buildClassPackage('barbarian'));
write('classe-cultivador-individual.json',api.buildSingleClassBundle('cultivator-dandwiki'));
write('subclasse-chamado-do-ceu-individual.json',api.buildSingleSubclassBundle('cultivator-calling-heaven'));
write('subclasse-chamado-do-mal-individual.json',api.buildSingleSubclassBundle('cultivator-calling-evil'));
write('subclasse-chamado-acromatico-individual.json',api.buildSingleSubclassBundle('cultivator-calling-achromatic'));
write('pacote-cultivador-classe-completa.json',api.buildClassPackage('cultivator-dandwiki'));
const report={
  phase:10,
  appVersion:'5.26.0',
  importerVersion:'0.9.2',
  classBundles:global.GRIMORIO_CLASSES.length,
  subclassBundles:global.GRIMORIO_SUBCLASSES.length,
  individualBundles:global.GRIMORIO_CLASSES.length+global.GRIMORIO_SUBCLASSES.length,
  samples:[
    'classe-barbaro-individual.json','subclasse-caminho-do-kaiju-individual.json','classe-cavaleiro-draconico-individual.json','subclasse-tecelao-de-sangue-individual.json','pacote-barbaro-classe-completa.json','classe-cultivador-individual.json','subclasse-chamado-do-ceu-individual.json','subclasse-chamado-do-mal-individual.json','subclasse-chamado-acromatico-individual.json','pacote-cultivador-classe-completa.json'
  ],
  schemas:{bundle:`${bundle.schema.name}@${bundle.schema.version}`,package:`${api.schema.name}@${api.schema.version}`}
};
fs.writeFileSync(path.join(out,'catalog.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
