#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
global.window = global;

const errors = [];
let checks = 0;
function check(condition, message) {
  checks++;
  if (!condition) errors.push(message);
}
function read(file){ return fs.readFileSync(path.join(root,file),'utf8'); }
function load(file){ vm.runInThisContext(read(file),{filename:file}); }
function sha(file){ return crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex'); }

['js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/homebrew-alchemist-fma.js'].forEach(load);

const cls=(global.GRIMORIO_CLASSES||[]).find(item=>item.id==='alchemist-fma-homebrew');
const progression=global.GRIMORIO_CLASS_PROGRESSIONS?.['alchemist-fma-homebrew'];
const system=cls?.specializationSystem;
const categories=system?.categories||[];
const specs=categories.flatMap(category=>category.specializations||[]);
const manifest=JSON.parse(read('manifest.json'));

check(Boolean(cls),'Alquimista FMA deve estar registrado.');
check(cls?.name==='Alquimista','Nome PT-BR do Alquimista deve ser preservado.');
check(cls?.originalName==='Alchemist, FMA (5e Class)','Nome de origem deve ser preservado.');
check(cls?.hitDie==='d8','Alquimista deve usar d8.');
check(cls?.ability==='Inteligência','Habilidade principal deve ser Inteligência.');
check(cls?.saves==='Constituição, Inteligência','Salvaguardas devem ser Constituição e Inteligência.');
check((global.GRIMORIO_SUBCLASSES||[]).every(item=>item.classId!=='alchemist-fma-homebrew'),'Especializações não podem virar subclasses do catálogo.');

check(Boolean(progression),'Progressão do Alquimista deve existir.');
check(progression?.rows?.length===20,'Progressão deve ter 20 níveis.');
check(progression?.rows?.[0]?.vigor==='3 + Inteligência','Vigor do 1º nível deve ser 3 + Inteligência.');
check(progression?.rows?.[19]?.vigor==='60 + Inteligência','Vigor do 20º nível deve ser 60 + Inteligência.');
check(JSON.stringify(progression?.rows?.[2]?.features)===JSON.stringify(['Alquimia de Combate','Especialização Alquímica (2)']),'Linha de 3º nível deve preservar a tabela da fonte.');
check(JSON.stringify(progression?.rows?.[4]?.features)===JSON.stringify(['Especialização Favorita','Especialização Alquímica (3)']),'Linha de 5º nível deve preservar Especialização (3).');
check(JSON.stringify(progression?.rows?.[9]?.features)===JSON.stringify(['Especialização Alquímica (4)']),'Linha de 10º nível deve preservar Especialização (4).');
check(JSON.stringify(progression?.rows?.[19]?.features)===JSON.stringify(['Filósofo','Especialização Alquímica (6)']),'Linha de 20º nível deve preservar Filósofo + Especialização (6).');

check(Boolean(system),'Sistema modular de Especializações deve existir.');
check(system?.subclassEquivalent===false,'Especializações devem declarar explicitamente que não são subclasses.');
check(system?.repeatable===true,'Sistema deve preservar repetibilidade.');
check(system?.count===40 && specs.length===40,'Devem existir exatamente 40 Especializações.');
check(system?.categoryClaim===9,'A alegação de 9 categorias da fonte deve ser preservada.');
check(system?.actualCategoryCount===10 && categories.length===10,'As dez categorias efetivamente enumeradas devem ser exibidas.');
check(JSON.stringify(system?.tableSchedule)===JSON.stringify([1,3,5,10,14,20]),'Cronograma da tabela p.4 deve permanecer explícito.');
check(JSON.stringify(system?.featureSchedule)===JSON.stringify([1,3,6,9,12,14,18,20]),'Cronograma do texto p.6 deve permanecer explícito.');
check(/não como contador automático|não calcula automaticamente/i.test(system?.sourceConflict?.text||''),'Conflito de progressão deve bloquear contador automático.');

const expectedCounts=[5,3,4,4,6,3,4,4,4,3];
check(categories.every((category,index)=>(category.specializations||[]).length===expectedCounts[index]),'Distribuição das 40 Especializações entre as dez categorias deve corresponder à fonte.');
check(specs.every(item=>item.repeatable===true),'Cada definição de Especialização deve sinalizar que pode ser escolhida novamente.');
check(new Set(specs.map(item=>item.name)).size===40,'As 40 definições de Especialização devem ter nomes únicos.');
check(specs.find(x=>x.name==='Transmutação Humana')?.requires?.includes('Alquimia Exaustiva'),'Transmutação Humana deve exigir Alquimia Exaustiva.');
check(specs.find(x=>x.name==='Transmutação Suprema')?.requires?.includes('Transmutação Humana'),'Transmutação Suprema deve exigir Transmutação Humana.');
check(specs.find(x=>x.name==='Alquimia da Pólvora')?.requires?.includes('Alquimia do Lótus'),'Alquimia da Pólvora deve exigir Alquimia do Lótus.');
check(specs.find(x=>x.name==='Destruidor')?.requires?.includes('Campo de Destruição'),'Destruidor deve exigir Campo de Destruição.');
check(specs.find(x=>x.name==='Guardião de Luz')?.requires?.includes('Divisão da Alma'),'Guardião de Luz deve exigir Divisão da Alma.');
check(specs.find(x=>x.name==='Criar Estrela Sanguínea')?.requires?.includes('Destruir Pedra Filosofal'),'Criar Estrela Sanguínea deve preservar sua cadeia de pré-requisitos.');
check(specs.find(x=>x.name==='Portal de Transição')?.requires?.includes('Círculo de Purificação'),'Portal de Transição deve exigir Círculo de Purificação.');
check(specs.find(x=>x.name==='Portal de Transição')?.table?.rows?.length===5,'Portal de Transição deve preservar sua tabela de custo.');

check((cls?.features||[]).length===20,'Características de classe estruturadas devem totalizar 20 registros.');
check((cls?.tables||[]).length===3,'Devem existir três tabelas centrais de Transmutação.');
check(cls?.tables?.[0]?.rows?.length===6,'Tabela de tamanhos deve conter seis tamanhos de Círculo.');
check(cls?.tables?.[1]?.rows?.length===9,'Tabela de peso/dano deve conter nove faixas.');
check(cls?.tables?.[2]?.rows?.length===6,'Tabela de materiais deve conter seis linhas.');
check((cls?.references||[]).some(x=>x.kind==='multiclass' && /Inteligência 16/.test(x.text)),'Multiclasse deve preservar Inteligência 16 + outro valor 16.');
check((cls?.references||[]).filter(x=>x.kind==='sourceConflict').length===2,'Duas divergências editoriais devem estar registradas.');

check(cls?.foundryExport?.supported===false,'Alquimista deve ficar fora do contrato Foundry legado.');
check(/modulares/i.test(cls?.foundryExport?.reason||''),'Motivo de bloqueio Foundry deve explicar o sistema modular.');

check(manifest.version==='5.70.0' && manifest.classes===28 && manifest.subclasses===400,'Manifesto 5.70.0 deve registrar 28 classes e manter 400 subclasses.');
check(manifest.classIndex.some(x=>x.id==='alchemist-fma-homebrew'&&x.name==='Alquimista'),'Manifesto deve indexar Alquimista.');
check(manifest.subclassCounts?.Alquimista===0,'Manifesto deve deixar explícito que Alquimista possui 0 subclasses.');
check(manifest.alchemistFmaSpecializations===40 && manifest.alchemistFmaSpecializationCategories===10,'Manifesto deve registrar 40 Especializações/10 categorias.');

const index=read('index.html');
check(index.includes('data/homebrew-alchemist-fma.js'),'index.html deve carregar os dados do Alquimista.');
check(index.includes('css/alchemist-specializations.css'),'index.html deve carregar o CSS das Especializações.');
const dynamic=read('js/dynamic-consultation.js');
check(dynamic.includes("'specializations'") && dynamic.includes('specializationsTab(c)'),'Consulta dinâmica deve possuir aba própria de Especializações.');
check(dynamic.includes('modular-specialization-category') && dynamic.includes('<details'),'Categorias/especializações devem usar painéis recolhíveis.');
const app=read('js/app.js');
check(app.includes('especializações modulares'),'Card da classe deve sinalizar o sistema modular.');
check(app.includes('Foundry pendente · sistema modular'),'Cabeçalho deve explicar que o Foundry ainda não suporta a classe.');
const packageExporter=read('js/exporters/foundry-class-package.js');
check(packageExporter.includes('exportableClasses()'),'Pacote Foundry deve filtrar classes explicitamente não suportadas.');
check(read('api/_lib/admin/config.mjs').includes("'data/homebrew-alchemist-fma.js'"),'Admin deve permitir metadados do novo arquivo pela allowlist fixa.');

check(sha('data/race-covers.js')==='d5bb8e55ef0e4ff7e6e80f4a87be7d68598c061b6c00c0fffe26cc6f4c5c49ed','race-covers.js manual deve permanecer byte a byte preservado.');
check(sha('data/race-detail-art.js')==='98ea3ee00e49a1264cbab0ea5d8e2abd02b0861ef78eda851b5226738a1f9cda','race-detail-art.js manual deve permanecer byte a byte preservado.');

if(errors.length){
  console.error(`\nAlquimista FMA v5.70.0: ${errors.length} erro(s) em ${checks} verificações.`);
  errors.forEach(error=>console.error('✗ '+error));
  process.exit(1);
}
console.log(`✓ Alquimista FMA v5.70.0 — ${checks}/${checks} verificações.`);
console.log('  28 classes · 400 subclasses · 40 Especializações Alquímicas · 10 categorias.');
console.log('  Foundry legado: Alquimista excluído conscientemente até existir contrato modular.');
