#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const assert = (value, message) => { if (!value) throw new Error(message); };

const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)]
  .map(match => match[1])
  .filter(file => !/^js\/(app|ui-enhancements|dynamic-consultation)\.js$/.test(file) && !/foundry-(export-ui|class-export-ui)\.js$/.test(file));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const file of scripts) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
const versionParts=String(manifest.version).split('.').map(Number);
assert(versionParts[0] > 5 || (versionParts[0] === 5 && versionParts[1] >= 28), `Versão esperada 5.28.0+; encontrada ${manifest.version}`);
assert(manifest.baseSpellRecords === 1171 && manifest.baseCatalogEntries === 1171, 'Contagem-base de magias deve ser 1.171');
assert(manifest.registeredSources >= 16, 'Manifesto deve preservar ao menos 16 fontes');
assert(manifest.registeredSpellCatalogs >= 9, 'Manifesto deve preservar ao menos 9 catálogos de magia');

const registry = ctx.GRIMORIO_REGISTRY;
const source = registry.getSource('cultivator-homebrew-spells');
assert(source?.title === 'Magias Homebrew — Cultivador', 'Fonte homebrew do Cultivador ausente');
const catalog = registry.getSpellCatalogs().find(item => item.id === 'cultivator-homebrew-spells');
assert(catalog?.spells?.length === 1, 'Catálogo homebrew do Cultivador deve conter exatamente 1 magia nesta versão');

const spell = catalog.spells[0];
assert(spell.id === 'cultivator-animate-energy', 'ID estável de Animar Energia divergente');
assert(spell.name === 'Animar Energia' && spell.originalName === 'Animate Energy', 'Nome localizado/original divergente');
assert(spell.level === 1 && spell.school === 'Necromancia' && spell.ritual === true, 'Nível/escola/ritual divergentes');
assert(spell.time === '1 minuto' && spell.range === '9 metros' && spell.duration === 'Instantânea', 'Tempo/alcance/duração divergentes');
assert(spell.classes === 'Cultivador', 'Animar Energia deve estar vinculada ao Cultivador');
assert(/18 metros/.test(spell.desc) && /até 2 criaturas/.test(spell.desc), 'Comando e limite-base não foram preservados');
assert(/não pode ultrapassar 4/.test(spell.higher), 'Limite de escalonamento 4 não foi preservado');
assert(/não fornece.*estatísticas/i.test(spell.sourceNote), 'Lacuna do bloco de estatísticas não foi documentada');

const cultivator = (ctx.GRIMORIO_CLASSES || []).find(item => item.id === 'cultivator-dandwiki');
const list = cultivator?.tables?.find(table => table.title === 'Lista de Magias do Cultivador');
assert(list?.rows?.some(row => String(row.demoniaco || '').includes('Animar Energia (Animate Energy)')), 'Lista do Cultivador não preserva Animar Energia em Qi Demoníaco');
const extRef = cultivator?.references?.find(ref => ref.title === 'MAGIAS EXTERNAS DA LISTA');
assert(extRef && !/como Sliver of Chaos, Animate Energy,/.test(extRef.text), 'Referência editorial ainda trata Animate Energy como ficha indisponível');
assert(/recebeu posteriormente uma ficha mecânica completa/i.test(extRef.text), 'Referência editorial não registra a incorporação posterior');

const analysis = ctx.GRIMORIO_FOUNDRY_V13.spell.analyze(spell);
assert(analysis.ok && !analysis.reviewRequired, `Animar Energia deve ser exportável sem revisão: ${analysis.issues.errors.concat(analysis.issues.warnings).join('; ')}`);
assert(analysis.document.item.school === 'nec', 'Escola Foundry deve ser nec');
assert(analysis.document.preparation.method === 'ritual', 'Foundry deve preservar método ritual');
assert(analysis.document.range.units === 'm' && analysis.document.range.value === 9, 'Foundry deve preservar alcance de 9 m');

const importerManifest = JSON.parse(fs.readFileSync(path.join(root, 'foundry/grimorio-importer/module.json'), 'utf8'));
assert(importerManifest.version === '0.9.3', 'Importer embutido deve estar sincronizado em 0.9.3');
const classOverrides = fs.readFileSync(path.join(root, 'data/export/foundry-class-overrides.js'), 'utf8');
assert(!classOverrides.includes('0.9.2 ainda não possui CLASS_PROFILE nativo para Lutador de Rua'), 'Aviso obsoleto do Lutador de Rua ainda está presente');

console.log('CULTIVATOR_HOMEBREW_SPELL_5_28_OK', JSON.stringify({
  spell: spell.name,
  originalName: spell.originalName,
  catalog: catalog.id,
  sources: registry.getSources().length,
  spellCatalogs: registry.getSpellCatalogs().length,
  spellRecords: registry.getSpellCatalogs().reduce((sum, c) => sum + c.spells.length, 0),
  foundryReady: analysis.ok && !analysis.reviewRequired,
  embeddedImporter: importerManifest.version
}, null, 2));
