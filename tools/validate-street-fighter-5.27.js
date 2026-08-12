#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
function assert(value, message) { if (!value) throw new Error(message); }
function same(actual, expected, message) {
  assert(JSON.stringify(actual) === JSON.stringify(expected), `${message}. Encontrado ${JSON.stringify(actual)}`);
}

(() => {
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const scripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(m => m[1])
    .filter(file => !/^js\/(app|ui-enhancements|dynamic-consultation)\.js$/.test(file) && !/foundry-(export-ui|class-export-ui)\.js$/.test(file));
  const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
  for (const file of scripts) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });

  const source = ctx.GRIMORIO_REGISTRY.getSource('street-fighter-homebrew');
  assert(source?.title === 'Lutador de Rua — Homebrew Original', 'Fonte do Lutador de Rua não registrada corretamente');

  const cls = (ctx.GRIMORIO_CLASSES || []).find(x => x.id === 'street-fighter-homebrew');
  assert(cls?.name === 'Lutador de Rua', 'Classe Lutador de Rua ausente');
  assert(cls.hitDie === 'd10', 'Dado de Vida deve ser d10');
  assert(cls.saves === 'Força, Constituição', 'Salvaguardas devem ser Força e Constituição');
  assert(/Armaduras leves/.test(cls.armor), 'Proficiência com armaduras leves ausente');
  assert(/armas improvisadas/i.test(cls.weapons) && /sem a propriedade pesada/i.test(cls.weapons), 'Proficiências de arma divergentes');
  assert((cls.features || []).length === 62, `Esperados 62 registros de característica/opção; encontrados ${(cls.features || []).length}`);

  const byTitle = title => (cls.features || []).filter(f => f.title === title);
  assert(byTitle('BRIGA DE RUA')[0]?.text.includes('Dado de Briga'), 'Briga de Rua sem Dado de Briga');
  assert(byTitle('CÓLERA')[0]?.text.includes('bônus de proficiência + seu modificador de Força'), 'Fórmula da Cólera divergente');
  assert(byTitle('SURTOS DE CÓLERA')[0]?.text.includes('8 + seu bônus de proficiência + seu modificador de Força'), 'CD dos Surtos divergente');
  assert(byTitle('ESTADO DE CLÍMAX')[0]?.text.includes('5 pontos de Cólera') && byTitle('ESTADO DE CLÍMAX')[0]?.text.includes('1 minuto'), 'Estado de Clímax divergente');
  assert(byTitle('CÓLERA INESGOTÁVEL')[0]?.text.includes('igual à sua Cólera máxima'), 'Cólera Inesgotável divergente');

  const optionalEssences = (cls.features || []).filter(f => f.level == null && /^ESSÊNCIA D[AO]/.test(f.title));
  assert(optionalEssences.length === 20, `Esperadas 20 Essências selecionáveis; encontradas ${optionalEssences.length}`);
  const tierHeaders = (cls.features || []).filter(f => /^NOVAS ESSÊNCIAS DE CÓLERA/.test(f.title)).map(f => f.level);
  same(tierHeaders, [9,13,15,17], 'Desbloqueios das novas Essências divergentes');

  const asiLevels = byTitle('INCREMENTO DE HABILIDADE').map(f => f.level);
  same(asiLevels, [4,8,12,16,19], 'Níveis de Incremento de Habilidade divergentes');
  assert(byTitle('INCREMENTO DE HABILIDADE').every(f => /não apresenta um bloco de regras separado/i.test(f.text)), 'Incremento de Habilidade recebeu regra não suportada pelo PDF');
  assert(byTitle('ATAQUE EXTRA').length === 1 && /não apresenta um bloco de regras separado/i.test(byTitle('ATAQUE EXTRA')[0].text), 'Ataque Extra deve permanecer como concessão sem mecânica inventada');
  same(byTitle('ESSÊNCIA ADICIONAL').map(f => f.level), [6,9,13,15,17], 'Níveis de Essência Adicional divergentes');

  const progression = ctx.GRIMORIO_CLASS_PROGRESSIONS?.[cls.id];
  assert(progression?.rows?.length === 20, 'Progressão do Lutador de Rua deve possuir 20 níveis');
  same(progression.rows.map(r => r.brawlDie), ['1d6','1d6','1d6','1d6','1d8','1d8','1d8','1d8','1d8','1d8','1d10','1d10','1d10','1d10','1d10','1d10','1d12','1d12','1d12','1d12'], 'Progressão do Dado de Briga divergente');
  same(progression.rows[0].features, ['Briga de Rua','Combo Acelerado','Golpe Finalizador','Defesa de Rua'], 'Características do 1º nível divergentes');
  same(progression.rows[19].features, ['Lenda das Ruas','Cólera Inesgotável'], 'Características do 20º nível divergentes');

  const subs = (ctx.GRIMORIO_SUBCLASSES || []).filter(x => x.classId === cls.id);
  assert(subs.length === 1, `Lutador de Rua deve possuir 1 Arquétipo; encontrado ${subs.length}`);
  const sub = subs[0];
  assert(sub.id === 'street-fighter-dragon-dojima' && sub.name === 'Dragão de Dojima', 'Dragão de Dojima ausente ou com ID divergente');
  assert((sub.features || []).length === 4, 'Dragão de Dojima deve possuir 4 características concedidas');
  same(sub.features.map(f => f.level), [3,6,11,17], 'Níveis do Dragão de Dojima divergentes');
  assert(/Rush Style/i.test(sub.features[0].text) && /Beast Style/i.test(sub.features[0].text) && /Dragon Style/i.test(sub.features[0].text), 'Três estilos do Dragão de Dojima não foram preservados');
  assert((sub.references || []).some(r => /DEITA TIGRE \/ QUEDA DO TIGRE/.test(r.title)), 'Nota editorial Deita Tigre / Queda do Tigre ausente');

  const bundleApi = ctx.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
  assert(bundleApi, 'Exporter Foundry de classes não carregado');
  const classInspection = bundleApi.inspectClass(cls);
  assert(classInspection.ok, `Bundle da classe inválido: ${classInspection.errors.join('; ')}`);
  const classBundle = bundleApi.buildClassBundle(cls);
  assert(classBundle.identity.identifier === 'street-fighter', 'Foundry identifier deve ser street-fighter');
  assert(classBundle.subclassSelection.selectionLevel === 3, `Seleção de Arquétipo deve ocorrer no nível 3; encontrado ${classBundle.subclassSelection.selectionLevel}`);
  assert(classBundle.subclassSelection.options.length === 1, 'Bundle deve expor 1 Arquétipo');
  assert(classBundle.nativeMapping?.status === 'ready', 'Bundle do Lutador de Rua deve estar pronto para o Importer 0.9.3');
  assert(!(classBundle.nativeMapping?.warnings || []).some(w => /0\.9\.2/.test(w) && /ainda não possui CLASS_PROFILE/i.test(w)), 'Aviso obsoleto de compatibilidade com Importer 0.9.2 ainda presente');
  assert(classBundle.features.filter(f => f.foundryPlan?.role === 'feature-option').length === 20, 'Bundle deve marcar 20 Essências como opções de escolha');

  const subInspection = bundleApi.inspectSubclass(sub);
  assert(subInspection.ok, `Bundle da subclasse inválido: ${subInspection.errors.join('; ')}`);
  const subBundle = bundleApi.buildSubclassBundle(sub);
  assert(subBundle.subclass.classIdentifier === 'street-fighter', 'Subclasse deve apontar para classIdentifier street-fighter');

  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  assert((()=>{const [a,b]=String(manifest.version||'').split('.').map(Number);return a>5||(a===5&&b>=27);})() && manifest.classes >= 26 && manifest.subclasses >= 381, 'Manifesto 5.27+ com contagens incorretas');
  assert(manifest.subclassCounts?.['Lutador de Rua'] === 1, 'Manifesto sem contagem de Arquétipos do Lutador de Rua');
  assert(manifest.registeredSources >= 15, 'Manifesto deve preservar ao menos as 15 fontes da integração do Lutador de Rua');

  console.log('STREET_FIGHTER_5_27_PLUS_OK', JSON.stringify({
    class: cls.name,
    classFeaturesAndOptions: cls.features.length,
    selectableEssences: optionalEssences.length,
    progressionRows: progression.rows.length,
    brawlDie: `${progression.rows[0].brawlDie} → ${progression.rows[19].brawlDie}`,
    subclass: sub.name,
    subclassFeatureLevels: sub.features.map(f => f.level),
    foundryIdentifier: classBundle.identity.identifier,
    foundryNativeMapping: classBundle.nativeMapping.status,
    sourceRegistered: source.id
  }, null, 2));
})()
