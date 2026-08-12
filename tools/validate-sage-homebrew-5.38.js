#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);

function load(file) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });
}

[
  'js/config.js',
  'js/registry.js',
  'data/sources.js',
  'data/classes.js',
  'data/progression.js',
  'data/homebrew-sage.js',
  'data/homebrew-sage-spells.js'
].forEach(load);

const errors = [];
const assert = (cond, msg) => { if (!cond) errors.push(msg); };

const source = ctx.GRIMORIO_REGISTRY.getSource('sage-homebrew-source');
assert(source?.title === 'Homebrew — O Sábio', 'Fonte Homebrew — O Sábio não registrada corretamente.');

const cls = (ctx.GRIMORIO_CLASSES || []).find(x => x.id === 'sage-homebrew');
assert(cls, 'Classe Sábio ausente.');
if (cls) {
  assert(cls.name === 'Sábio', 'Nome da classe incorreto.');
  assert(cls.hitDie === 'd8', 'Dado de Vida do Sábio deve ser d8.');
  assert(cls.ability === 'Inteligência', 'Habilidade principal deve ser Inteligência.');
  assert(cls.saves === 'Inteligência, Sabedoria', 'Salvaguardas devem ser Inteligência e Sabedoria.');
  assert((cls.features || []).length === 11, `Esperadas 11 características de classe; encontradas ${(cls.features || []).length}.`);
  assert((cls.features || []).some(f => f.title === 'PONTOS DE ERUDIÇÃO' && /metade do seu nível/i.test(f.text)), 'Fórmula de Pontos de Erudição ausente.');
  assert((cls.features || []).some(f => f.title === 'ENCANTAR ARMA' && /18 metros/i.test(f.text) && /14º nível/i.test(f.text)), 'Escalonamentos de Encantar Arma incompletos.');
  assert((cls.features || []).some(f => f.title === 'ESPELHO MÁGICO' && /Reação com Ação Bônus/i.test(f.text)), 'Espelho Mágico deve preservar “Reação com Ação Bônus”.');
}

const sub = (ctx.GRIMORIO_SUBCLASSES || []).find(x => x.id === 'sage-catalyst');
assert(sub, 'Subclasse Catalisador ausente.');
if (sub) {
  assert(sub.classId === 'sage-homebrew', 'Catalisador não está ligado ao Sábio.');
  assert((sub.features || []).length === 7, `Esperadas 7 entradas de características do Catalisador; encontradas ${(sub.features || []).length}.`);
  const expansionLevels = (sub.features || []).filter(f => f.title === 'MAESTRIA ELEMENTAL — EXPANSÃO').map(f => f.level).sort((a,b)=>a-b);
  assert(JSON.stringify(expansionLevels) === JSON.stringify([8,10,12]), 'Expansões de Maestria Elemental devem ocorrer nos níveis 8, 10 e 12.');
  assert((sub.features || []).some(f => f.title === 'PROTEGER TERRENO' && /2 concentrações/i.test(f.text)), 'Proteger Terreno deve preservar duas concentrações simultâneas.');
}

const prog = ctx.GRIMORIO_CLASS_PROGRESSIONS?.['sage-homebrew'];
assert(prog?.rows?.length === 20, 'Progressão do Sábio deve possuir 20 linhas editoriais.');
if (prog?.rows?.length === 20) {
  assert(prog.rows[0].erudition === '3 + mod. Int', 'Pontos de Erudição do 1º nível devem ser 3 + mod. Int.');
  assert(prog.rows[19].erudition === '16 + mod. Int', 'Pontos de Erudição do 20º nível devem ser 16 + mod. Int.');
  assert(prog.rows.find(r => r.level === 4)?.cantrips === 4, '4º nível deve mostrar 4 truques conhecidos.');
  assert(prog.rows.find(r => r.level === 7)?.cantrips === 5, '7º nível deve mostrar 5 truques conhecidos.');
  assert(prog.rows.find(r => r.level === 10)?.cantrips === 6, '10º nível deve mostrar 6 truques conhecidos.');
  assert(!prog.rows.some(r => (r.features || []).some(x => /Incremento|Ataque Extra|espaço de magia/i.test(x))), 'Progressão não deve inventar ASI, Ataque Extra ou espaços de magia.');
}

const catalog = ctx.GRIMORIO_REGISTRY.getSpellCatalogs().find(x => x.id === 'sage-homebrew-spells');
assert(catalog, 'Catálogo de magias do Sábio ausente.');
if (catalog) {
  assert(catalog.spells.length === 14, `Esperadas 14 entradas mágicas; encontradas ${catalog.spells.length}.`);
  assert(catalog.spells.filter(s => s.level === 0).length === 6, 'Devem existir 6 truques de Sábio.');
  assert(catalog.spells.filter(s => s.level === null).length === 8, 'Devem existir 8 recursos mágicos sem nível convencional.');
  for (const name of ['Lança de Fogo','Lança de Gelo','Relâmpago','Rajada Congelante','Coluna de Pedra','Ataque Espiritual','Vulcão','Dilúvio','Furacão','Bolas de Fogo','Barreira de Fogo','Tempestade de Raios','Espíritos Anciões','Fúria da Terra']) {
    assert(catalog.spells.some(s => s.name === name), `Entrada ausente: ${name}.`);
  }
  assert(catalog.spells.find(s => s.name === 'Fúria da Terra')?.sourceNote?.includes('sangrando'), 'Fúria da Terra deve documentar a lacuna de “sangrando”.');
  assert(catalog.spells.find(s => s.name === 'Relâmpago')?.sourceNote?.includes('propriedade frio'), 'Relâmpago deve documentar “propriedade frio”.');
}

const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
assert(app.includes("value=\"special\""), 'Filtro de magias sem nível convencional ausente.');
assert(app.includes('spellLevelFilterKey'), 'Suporte de filtro especial de nível ausente.');
assert(app.includes('spellLevelLabel'), 'Suporte de rótulo de nível customizado ausente.');

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
assert(manifest.version === '5.38.0', 'Manifest deve estar em 5.38.0.');
assert(manifest.classes === 27, 'Manifest deve registrar 27 classes.');
assert(manifest.subclasses === 382, 'Manifest deve registrar 382 subclasses.');
assert(manifest.subclassCounts?.['Sábio'] === 1, 'Manifest deve registrar 1 subclasse de Sábio.');

if (errors.length) {
  console.error('Falhas na integração Homebrew — O Sábio:');
  for (const error of errors) console.error('- ' + error);
  process.exit(2);
}
console.log('OK — Homebrew O Sábio 5.38');
console.log('  1 classe · 1 subclasse · 20 linhas de progressão editorial');
console.log('  6 truques · 3 Terrenos Arcanos · 5 Magias de Sábio');
console.log('  recursos sem nível convencional preservados sem inferência');
