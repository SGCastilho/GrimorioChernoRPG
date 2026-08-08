'use strict';

// Grimório -> Foundry VTT v13 spell export foundation.
// Homologated local target after Phase 0:
// - Foundry VTT 13.351
// - dnd5e 5.3.3
// - 5e Item Importer 13.9.1
// - Strict Spell Template v2 (YAML)
(function initFoundryV13Exporter(global) {
  const PROFILE_ID = 'foundry13-dnd5e533-item-importer1391';

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · 5e Item Importer 13.9.1',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    itemImporterVersion: '13.9.1',
    format: '5e-item-importer-strict-spell-v2',
    mediaType: 'text/yaml',
    fileExtension: '.yaml',
    phase: 3,
    compatibility: {
      foundry: 'verified-local',
      dnd5e: 'verified-local',
      itemImporter: 'verified-local',
      note: 'A prova local da Fase 0 foi aprovada no ambiente-alvo pelo usuário. A Fase 2 normalizou o catálogo mantendo bloqueio explícito quando a fonte não contém dados suficientes; a Fase 3 expõe essa camada na interface do Grimório.'
    }
  });

  const SCHOOL_KEYS = Object.freeze({
    'abjuracao': 'abj',
    'conjuracao': 'con',
    'adivinhacao': 'div',
    'encantamento': 'enc',
    'evocacao': 'evo',
    'ilusao': 'ill',
    'necromancia': 'nec',
    'transmutacao': 'trs'
  });

  const SCHOOL_NAMES_PT = Object.freeze({
    abj: 'Abjuração', con: 'Conjuração', div: 'Adivinhação', enc: 'Encantamento',
    evo: 'Evocação', ill: 'Ilusão', nec: 'Necromancia', trs: 'Transmutação'
  });

  const ALLOWED = Object.freeze({
    school: new Set(['abj', 'con', 'div', 'enc', 'evo', 'ill', 'nec', 'trs']),
    preparation: new Set(['atwill', 'innate', 'ritual', 'pact', 'spell']),
    activation: new Set(['action', 'bonus', 'reaction', 'minute', 'hour', 'day', 'special']),
    range: new Set(['self', 'touch', 'spec', 'any', 'ft', 'mi', 'm', 'km']),
    duration: new Set(['inst', 'spec', 'turn', 'round', 'minute', 'hour', 'day', 'month', 'year', 'disp', 'dstr', 'perm']),
    target: new Set(['self', 'ally', 'enemy', 'creature', 'object', 'space', 'creatureOrObject', 'any', 'willing']),
    area: new Set(['cone', 'cube', 'cylinder', 'radius', 'line', 'sphere', 'circle', 'square', 'wall'])
  });

  function normalize(value) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[’‘]/g, "'")
      .replace(/[–—−]/g, '-')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function cleanNumericText(value) {
    return normalize(value)
      .replace(/(\d)\s+(\d)(?=\s*(?:minut|hour|hora|round|rodad|turn|dia|day|month|mes|year|ano))/g, '$1$2')
      .replace(/\.(?=\s*(?:minut|hour|hora|round|rodad|turn|dia|day))/g, '')
      .replace(/\s+,/g, ',')
      .trim();
  }

  function clone(value) {
    if (value === undefined) return undefined;
    return JSON.parse(JSON.stringify(value));
  }

  function deepMerge(base, extra) {
    if (!extra || typeof extra !== 'object' || Array.isArray(extra)) return base;
    const result = base && typeof base === 'object' && !Array.isArray(base) ? { ...base } : {};
    for (const [key, value] of Object.entries(extra)) {
      if (value && typeof value === 'object' && !Array.isArray(value)) result[key] = deepMerge(result[key], value);
      else result[key] = clone(value);
    }
    return result;
  }

  function getSpellOverride(spell) {
    return clone(global.GRIMORIO_FOUNDRY_V13_OVERRIDES?.spells?.[spell?.id] || {});
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function textToHtml(text) {
    return String(text || '')
      .trim()
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map(paragraph => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`)
      .join('\n');
  }

  function buildDescriptionHtml(spell, override = {}) {
    const chunks = [];
    const body = textToHtml(spell.desc);
    if (body) chunks.push(body);
    if (String(spell.higher || '').trim()) {
      chunks.push(`<section class="secret" id="upcast"><p><strong>Em Níveis Superiores.</strong> ${escapeHtml(spell.higher)}</p></section>`);
    }
    if (override.originalSchoolLabel || (normalize(spell.school) === 'psionica' && override.schoolKey)) {
      const original = override.originalSchoolLabel || spell.school;
      const fallback = SCHOOL_NAMES_PT[override.schoolKey] || override.schoolKey;
      chunks.push(`<p><small><strong>Compatibilidade Foundry:</strong> a escola original “${escapeHtml(original)}” não existe no Strict Spell Template 13.9.1; esta exportação usa ${escapeHtml(fallback)} como escola técnica, preservando a escola original nesta descrição.</small></p>`);
    }
    const sourceTitle = String(spell.source || spell.category || '').trim();
    if (sourceTitle) {
      const page = Number.isFinite(Number(spell.sourcePage)) ? `, p. ${Number(spell.sourcePage)}` : '';
      chunks.push(`<hr><p><small><strong>Fonte:</strong> ${escapeHtml(sourceTitle + page)}.</small></p>`);
    }
    return chunks.join('\n');
  }

  function schoolFromSpell(spell, override, issues) {
    if (override.blockedReason) {
      issues.errors.push(String(override.blockedReason));
      return 'evo';
    }
    if (override.schoolKey) {
      if (!ALLOWED.school.has(override.schoolKey)) issues.errors.push(`Escola Foundry inválida no override: ${override.schoolKey}`);
      else if (normalize(spell.school) !== normalize(SCHOOL_NAMES_PT[override.schoolKey])) issues.info.push(`Escola técnica de exportação: ${SCHOOL_NAMES_PT[override.schoolKey]} (${override.schoolKey}); escola editorial preservada: ${spell.school || '(vazia)'}.`);
      return override.schoolKey;
    }
    const normalized = normalize(spell.school).replace(/[^a-z]/g, '');
    if (SCHOOL_KEYS[normalized]) return SCHOOL_KEYS[normalized];

    if (normalize(spell.school) === 'biomancia') {
      const trait = (spell.traits || []).find(entry => normalize(entry).startsWith('escola alternativa:'));
      const alternative = trait ? trait.split(':').slice(1).join(':').trim() : '';
      const altKey = SCHOOL_KEYS[normalize(alternative).replace(/[^a-z]/g, '')];
      if (altKey) {
        issues.info.push(`Biomancia exportada como ${alternative}, escola alternativa indicada pela própria fonte.`);
        return altKey;
      }
    }

    issues.errors.push(`Escola não suportada pelo Strict Spell Template 13.9.1: ${spell.school || '(vazia)'}.`);
    return 'evo';
  }

  function parseComponents(spell, override) {
    const materialValue = String(override.materials?.value ?? spell.material ?? '').trim();
    const material = override.components?.material ?? (/(^|[,\s])m([,\s(]|$)/i.test(String(spell.comp || '')) || Boolean(materialValue));
    return {
      components: {
        vocal: override.components?.vocal ?? /(^|[,\s])v([,\s(]|$)/i.test(String(spell.comp || '')),
        somatic: override.components?.somatic ?? /(^|[,\s])s([,\s(]|$)/i.test(String(spell.comp || '')),
        material
      },
      materials: material ? parseMaterials(materialValue, override.materials || {}) : null
    };
  }

  function parseMaterials(materialText, override) {
    const text = String(materialText || '').trim();
    const normalized = normalize(text);
    let cost = Number.isFinite(Number(override.cost)) ? Number(override.cost) : 0;
    if (!cost) {
      const match = normalized.match(/(?:valor(?: de)?|worth(?: at least)?|custa|cost(?:s)?)\s+(?:pelo menos\s+)?([\d.,]+)\s*(?:po|gp)\b/i);
      if (match) {
        const numberText = match[1].replace(/\./g, '').replace(',', '.');
        const parsed = Number(numberText);
        if (Number.isFinite(parsed)) cost = Math.round(parsed);
      }
    }
    return {
      value: String((override.value ?? text) || 'n/a'),
      cost,
      supply: Number.isInteger(Number(override.supply)) ? Number(override.supply) : 1,
      consumed: override.consumed ?? /\b(consumid[ao]s?|consume[sd]?)\b/i.test(normalized)
    };
  }

  function isMissing(value) {
    return /^(?:nao informad[ao]|nao informad[ao] no pdf|sem informacao|unknown|n\/a)$/i.test(normalize(value));
  }

  function parseActivation(timeText, override, issues) {
    if (override?.type) return {
      type: override.type,
      value: Number.isInteger(Number(override.value)) ? Number(override.value) : 1,
      condition: override.condition || 'n/a'
    };

    const raw = String(timeText || '').trim();
    const text = cleanNumericText(raw);
    if (!raw || isMissing(raw)) {
      issues.errors.push(`Tempo de conjuração ausente na fonte: "${raw || '(vazio)'}".`);
      return { type: 'special', value: 1, condition: raw || 'n/a' };
    }
    if (text === 'especial' || text === 'special') return { type: 'special', value: 1, condition: raw };

    // Multiple legitimate casting modes cannot be represented as separate activities by
    // the Strict Spell Template v2. Preserve them losslessly as a Special activation.
    const head = text.split(',')[0];
    if (/\b(?:acao|action|reacao|reaction|minuto|minute|hora|hour)\b\s+ou\s+/.test(head) || /^\d+\s+acao bonus,?\s+ou\s+\d+\s+reacao/.test(text)) {
      issues.info.push(`Tempo de conjuração alternativo preservado como Special: ${raw}.`);
      return { type: 'special', value: 1, condition: raw };
    }

    const numberMatch = text.match(/^(\d+)/);
    const value = numberMatch ? Number(numberMatch[1]) : 1;
    let type = 'special';
    if (text.includes('acao bonus')) type = 'bonus';
    else if (text.includes('bonus action')) type = 'bonus';
    else if (text.includes('reacao') || text.includes('reaction')) type = 'reaction';
    else if (text.includes('acao') || text.includes('action')) type = 'action';
    else if (text.includes('minuto') || text.includes('minute')) type = 'minute';
    else if (text.includes('hora') || text.includes('hour')) type = 'hour';
    else if (text.includes('dia') || text.includes('day')) type = 'day';

    let condition = 'n/a';
    if (type === 'reaction') {
      const parts = raw.split(',');
      if (parts.length > 1) condition = parts.slice(1).join(',').trim() || 'n/a';
    }
    if (type === 'special') {
      issues.warnings.push(`Tempo de conjuração não reconhecido automaticamente: "${raw}".`);
      condition = raw || 'n/a';
    }
    return { type, value, condition };
  }

  function metricValue(value, unit) {
    const n = Number(String(value).replace(',', '.'));
    if (!Number.isFinite(n)) return null;
    if (Number.isInteger(n)) return { value: n, units: unit };

    // Strict Spell Template v2 expects integer values. Preserve exact distances by
    // changing the unit rather than rounding whenever possible.
    if (unit === 'km') {
      const metres = n * 1000;
      if (Number.isInteger(metres)) return { value: metres, units: 'm' };
    }
    if (unit === 'mi') {
      const feet = n * 5280;
      if (Number.isInteger(feet)) return { value: feet, units: 'ft' };
    }
    if (unit === 'm') {
      const feet = n / 0.3;
      if (Math.abs(feet - Math.round(feet)) < 0.001) return { value: Math.round(feet), units: 'ft' };
      const centimetres = n * 100;
      // The importer has no cm unit, so only exact 5e-foot conversions are emitted.
      void centimetres;
    }
    if (unit === 'ft') {
      const inches = n * 12;
      if (Number.isInteger(inches) && Number.isInteger(n)) return { value: n, units: 'ft' };
    }
    return null;
  }

  function distanceMatch(text) {
    return text.match(/([\d.,]+)\s*(metros?|m\b|quilometros?|km\b|pes?|feet|ft\b|milhas?|miles?|mi\b)/);
  }

  function normalizeDistance(match) {
    if (!match) return null;
    const token = normalize(match[2]);
    const units = token.startsWith('quil') || token === 'km' ? 'km'
      : token.startsWith('pe') || token === 'feet' || token === 'ft' ? 'ft'
        : token.startsWith('milh') || token.startsWith('mile') || token === 'mi' ? 'mi' : 'm';
    return metricValue(match[1], units);
  }

  function rangeLooksLikeArea(text) {
    return /^(?:\(?hemi\)?esfera|hemisfera|esfera|cone|linha|cubo|circulo|raio)\b/.test(text);
  }

  function parseRange(rangeText, override, issues) {
    if (override?.units) return {
      units: override.units,
      value: override.value === 'n/a' ? 'n/a' : Number(override.value)
    };
    const raw = String(rangeText || '').trim();
    const text = cleanNumericText(raw);
    if (!raw || isMissing(raw)) {
      issues.errors.push(`Alcance ausente na fonte: "${raw || '(vazio)'}".`);
      return { units: 'spec', value: 'n/a' };
    }
    if (/^pessoal\b|^self\b/.test(text)) return { units: 'self', value: 'n/a' };
    if (/^toque\b|^touch\b/.test(text)) return { units: 'touch', value: 'n/a' };
    if (text === 'especial' || text === 'special') return { units: 'spec', value: 'n/a' };
    if (/^visao\b|linha de visao|^sight\b/.test(text)) return { units: 'spec', value: 'n/a' };
    if (/ilimitad|unlimited|qualquer distancia/.test(text)) return { units: 'any', value: 'n/a' };
    if (rangeLooksLikeArea(text)) return { units: 'self', value: 'n/a' };

    const match = text.match(/^([\d.,]+)\s*(metros?|m\b|quilometros?|km\b|pes?|feet|ft\b|milhas?|miles?|mi\b)/);
    const converted = normalizeDistance(match);
    if (converted) return converted;

    issues.warnings.push(`Alcance não pôde ser normalizado automaticamente: "${raw}".`);
    return { units: 'spec', value: 'n/a' };
  }

  function parseDuration(durationText, override, concentrationFlag, issues) {
    if (override?.units) return {
      units: override.units,
      value: override.value === 'n/a' ? 'n/a' : Number(override.value),
      concentration: override.concentration ?? Boolean(concentrationFlag)
    };
    const raw = String(durationText || '').trim();
    const normalizedRaw = cleanNumericText(raw);
    const concentration = Boolean(concentrationFlag) || normalizedRaw.startsWith('concentracao');
    let text = normalizedRaw.replace(/^concentracao,?\s*(ate\s*)?/, '').replace(/^ate\s+/, '');

    if (!raw || isMissing(raw) || /unidade nao informada/.test(text)) {
      issues.warnings.push(`Duração incompleta na fonte e preservada como Especial: "${raw || '(vazia)'}".`);
      return { units: 'spec', value: 'n/a', concentration };
    }
    if (text === 'especial' || text === 'special') return { units: 'spec', value: 'n/a', concentration };
    if (/instant/.test(text)) return { units: 'inst', value: 'n/a', concentration };
    if (/^(?:ser )?dissipad[ao] ou (?:acionad[ao]|ativad[ao])$|until dispelled or triggered/.test(text)) return { units: 'dstr', value: 'n/a', concentration };
    if (/^(?:ser )?dissipad[ao]$|until dispelled/.test(text)) return { units: 'disp', value: 'n/a', concentration };
    if (/permanente|permanent/.test(text)) return { units: 'perm', value: 'n/a', concentration };

    const match = text.match(/^(\d+)\s*(turnos?|turns?|rodadas?|rounds?|minutos?|minutes?|horas?|hours?|dias?|days?|meses?|months?|anos?|years?)/);
    if (match) {
      const value = Number(match[1]);
      const u = match[2];
      let units = 'spec';
      if (/turn/.test(u)) units = 'turn';
      else if (/rodad|round/.test(u)) units = 'round';
      else if (/minut/.test(u)) units = 'minute';
      else if (/hora|hour/.test(u)) units = 'hour';
      else if (/dia|day/.test(u)) units = 'day';
      else if (/mes|month/.test(u)) units = 'month';
      else if (/ano|year/.test(u)) units = 'year';
      return { units, value, concentration };
    }

    issues.warnings.push(`Duração não pôde ser normalizada automaticamente: "${raw}".`);
    return { units: 'spec', value: 'n/a', concentration };
  }

  function makeArea(shape, distance, extra = {}) {
    if (!distance) return null;
    return {
      shape,
      size: distance.value,
      units: distance.units,
      count: extra.count ?? 'n/a',
      width: extra.width ?? 'n/a',
      height: extra.height ?? 'n/a',
      contiguous: extra.contiguous ?? 'n/a'
    };
  }

  function findAreaInText(text, issues) {
    const t = cleanNumericText(text);
    let m;

    // Prefer explicit dimensions from the rules text.
    m = t.match(/cilindro(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)\s+de\s+raio(?:\s+(?:e|por)\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)\s+de\s+altura)?/);
    if (m) {
      const size = normalizeDistance([null, m[1], m[2]]);
      const height = m[3] ? normalizeDistance([null, m[3], m[4]]) : null;
      return makeArea('cylinder', size, { height: height ? height.value : 'n/a' });
    }

    m = t.match(/(?:\(?hemi\)?esfera|hemisfera)\s+de\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)\s+de\s+raio/);
    if (m) {
      const d = normalizeDistance([null, m[1], m[2]]);
      if (d) issues.info.push('Hemisfera representada tecnicamente como sphere; a limitação a uma metade permanece descrita no texto da magia.');
      return makeArea('sphere', d);
    }

    m = t.match(/esfera(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|quilometros?|km\b|feet|ft\b|pes?)\s+de\s+raio/);
    if (m) return makeArea('sphere', normalizeDistance([null, m[1], m[2]]));
    m = t.match(/circulo(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)\s+de\s+raio/);
    if (m) return makeArea('circle', normalizeDistance([null, m[1], m[2]]));
    m = t.match(/(?:em\s+um\s+)?raio\s+de\s+([\d.,]+)\s*(metros?|m\b|quilometros?|km\b|feet|ft\b|pes?)/);
    if (m) return makeArea('radius', normalizeDistance([null, m[1], m[2]]));
    m = t.match(/cone(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)/);
    if (m) return makeArea('cone', normalizeDistance([null, m[1], m[2]]));

    // Lines sometimes have different length in the range metadata and the prose. The
    // prose is treated as authoritative for the AREA visualization while original
    // wording remains in the description.
    m = t.match(/linha(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)(?:\s+de\s+comprimento)?(?:\s+(?:e|por)\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)\s+de\s+largura)?/);
    if (m) {
      const d = normalizeDistance([null, m[1], m[2]]);
      const width = m[3] ? normalizeDistance([null, m[3], m[4]]) : null;
      return makeArea('line', d, { width: width ? width.value : 'n/a' });
    }
    m = t.match(/cubo(?:\s+de)?\s+([\d.,]+)\s*(metros?|m\b|feet|ft\b|pes?)/);
    if (m) return makeArea('cube', normalizeDistance([null, m[1], m[2]]));

    return null;
  }

  function parseArea(spell, override, issues) {
    if (override?.shape) return {
      shape: override.shape,
      size: Number(override.size),
      units: override.units || 'm',
      count: override.count ?? 'n/a',
      width: override.width ?? 'n/a',
      height: override.height ?? 'n/a',
      contiguous: override.contiguous ?? 'n/a'
    };

    // Explicit area notation in the Range field is authoritative. Prose inference is
    // used only when Range does not already encode a shape. Known source
    // discrepancies are handled by per-spell overrides.
    return findAreaInText(spell.range || '', issues) || findAreaInText(String(spell.desc || '').slice(0, 800), issues);
  }

  const NUMBER_WORDS = Object.freeze({
    um: 1, uma: 1, one: 1, dois: 2, duas: 2, two: 2, tres: 3, three: 3,
    quatro: 4, four: 4, cinco: 5, five: 5, seis: 6, six: 6, sete: 7, seven: 7,
    oito: 8, eight: 8, nove: 9, nine: 9, dez: 10, ten: 10, vinte: 20, twenty: 20
  });

  function countToken(value) {
    if (value == null) return 'n/a';
    const t = normalize(value);
    if (/^\d+$/.test(t)) return Number(t);
    return NUMBER_WORDS[t] ?? 'n/a';
  }

  function targetTypeFromNoun(noun, context) {
    const n = normalize(noun);
    const c = normalize(context || '');
    if (/voluntar|willing/.test(c)) return 'willing';
    if (/objeto|object|arma|weapon|armadura|armor|municao|ammunition|item|recipiente|superficie/.test(n)) return 'object';
    if (/espaco|space|ponto|point|area|local|location/.test(n)) return 'space';
    if (/criatur|creature|alvo|target|besta|beast|humanoid|humanoide|morto-vivo|undead|construct|constructo|celestial|elemental|familiar|companheir|companion/.test(n)) return 'creature';
    return null;
  }

  function parseTarget(spell, range, area, override, issues) {
    if (override?.type) return {
      type: override.type,
      count: override.count ?? 'n/a',
      choice: override.choice ?? true,
      special: override.special || 'n/a'
    };
    if (range.units === 'self' && !area) return { type: 'self', count: 1, choice: false, special: 'n/a' };
    if (area) return { type: 'space', count: 1, choice: true, special: 'Área de efeito estruturada a partir da ficha da magia; consulte a descrição para exceções.' };

    const raw = String(spell.desc || '');
    const text = normalize(raw);

    // Explicit multi-target formulas.
    let m = text.match(/(?:escolha|selecione|afeta|atinge|alvo:?|target(?:s)?)?\s*(?:ate\s+)?(\d+|um|uma|dois|duas|tres|quatro|cinco|seis|sete|oito|nove|dez|one|two|three|four|five|six|seven|eight|nine|ten)\s+(criaturas?\s+voluntarias?|willing creatures?|criaturas?|creatures?|alvos?|targets?|bestas?|beasts?|humanoides?|humanoids?|objetos?|objects?)/);
    if (m) {
      const type = targetTypeFromNoun(m[2], m[2]);
      return { type: type || 'any', count: countToken(m[1]), choice: true, special: 'Quantidade inferida de uma fórmula explícita na descrição.' };
    }
    m = text.match(/(?:ate\s+)?(\d+|um|uma|dois|duas|tres|quatro|cinco|seis|sete|oito|nove|dez|one|two|three|four|five|six|seven|eight|nine|ten)\s+(criaturas?|creatures?)\s+voluntari/);
    if (m) return { type: 'willing', count: countToken(m[1]), choice: true, special: 'Criaturas voluntárias conforme a descrição.' };
    if (/qualquer quantidade de criaturas|any number of creatures/.test(text)) return { type: 'creature', count: 'n/a', choice: true, special: 'Qualquer quantidade de criaturas conforme a descrição.' };

    // Singular target phrases.
    const singularPatterns = [
      /(?:escolha|selecione|toque|toca|tente seduzir|tenta seduzir|target)\s+(?:em\s+)?(?:uma?|one)\s+(criatura voluntaria|criatura|creature|besta|beast|humanoide|humanoid|constructo|construct|objeto|object|arma|weapon|armadura|armor|municao|ammunition|alvo|target|espaco|space|ponto|point)/,
      /(?:uma?|one)\s+(criatura voluntaria|criatura|creature|besta|beast|humanoide|humanoid|constructo|construct|objeto|object|arma|weapon|armadura|armor|municao|ammunition|alvo|target)\s+(?:que|dentro|within|ao alcance|a distancia)/,
      /(?:a|the)\s+(criatura|creature|alvo|target|objeto|object|arma|weapon)\s+(?:tocad|targeted|escolhid)/
    ];
    for (const pattern of singularPatterns) {
      m = text.match(pattern);
      if (m) {
        const type = targetTypeFromNoun(m[1], m[1]);
        return { type: type || 'any', count: 1, choice: true, special: 'Alvo singular inferido de expressão explícita na descrição.' };
      }
    }

    if (/criaturas?,?\s+(?:a sua escolha|que voce escolher)|creatures? of your choice/.test(text)) return { type: 'creature', count: 'n/a', choice: true, special: 'Uma ou mais criaturas à escolha; quantidade depende da regra da magia.' };
    if (/espaco desocupado|unoccupied space|ponto (?:que|dentro|a sua escolha)|point (?:you|within)/.test(text)) return { type: 'space', count: 1, choice: true, special: 'Um ponto ou espaço conforme a descrição.' };

    // Touch range is commonly enough to distinguish an object/creature target.
    if (range.units === 'touch') {
      if (/arma|weapon|armadura|armor|municao|ammunition|objeto|object|item|superficie/.test(text.slice(0, 360))) return { type: 'object', count: 1, choice: true, special: 'Objeto tocado conforme a descrição.' };
      if (/criatura|creature|besta|beast|humanoide|humanoid|constructo|construct|companheir|companion/.test(text.slice(0, 360))) return { type: 'creature', count: 1, choice: true, special: 'Criatura tocada conforme a descrição.' };
    }

    // Some spells intentionally do not have a discrete target (detection, divination,
    // creating persistent spaces, environmental effects). `any`/n/a is a valid strict
    // representation and is more faithful than inventing a creature target.
    const nonDiscrete = /\b(?:voce cria|voce conjura|voce sente|voce detecta|voce descobre|voce recebe|voce contata|voce abre|uma passagem aparece|um guardiao .* aparece|um olho magico .* cria|residencia extradimensional|circulo .* aparece|portal .* surge|you create|you conjure|you sense|you detect|you learn|you contact)\b/.test(text);
    if (nonDiscrete) return { type: 'any', count: 'n/a', choice: true, special: 'A magia não possui um alvo discreto compatível com TARGETS; consulte sua descrição.' };

    issues.warnings.push('Tipo/quantidade de alvo não pôde ser determinado com segurança.');
    return { type: 'any', count: 'n/a', choice: true, special: 'Revisar alvo antes da exportação em massa.' };
  }

  function parsePreparation(spell, override) {
    if (override?.method) return { method: override.method, prepared: override.prepared ?? true };
    // Phase 0 verified the importer behavior in the target environment. Ritual is kept
    // exactly as documented by Strict Spell Template v2; it is no longer a review flag.
    if (spell.ritual) return { method: 'ritual', prepared: true };
    return { method: 'spell', prepared: true };
  }

  function buildSpellDocument(spell, runtimeOverride = {}) {
    if (!spell || typeof spell !== 'object') throw new TypeError('Magia inválida para exportação.');
    const issues = { errors: [], warnings: [], info: [] };
    const override = deepMerge(getSpellOverride(spell), runtimeOverride || {});
    const school = schoolFromSpell(spell, override, issues);
    const comp = parseComponents(spell, override);
    const activation = parseActivation(spell.time, override.activation, issues);
    const range = parseRange(spell.range, override.range, issues);
    const duration = parseDuration(spell.duration, override.duration, spell.concentration, issues);
    const area = parseArea(spell, override.area, issues);
    const target = parseTarget(spell, range, area, override.target, issues);
    const preparation = parsePreparation(spell, override.preparation);

    for (const note of override.compatibilityNotes || []) issues.info.push(note);

    const document = {
      item: {
        name: String(spell.name || spell.originalName || 'Magia sem nome'),
        level: Number(spell.level) || 0,
        school,
        ability: override.ability || 'n/a'
      },
      components: comp.components,
      materials: comp.materials,
      preparation,
      activation,
      range,
      duration,
      target,
      area,
      usage: { spent: 0, max: 'n/a' },
      recovery: [],
      description: buildDescriptionHtml(spell, override),
      unidentified: { name: 'n/a', description: 'n/a' },
      chat: { description: 'n/a' }
    };

    validateDocument(document, issues);
    return {
      profile: PROFILE,
      spellId: spell.id || null,
      sourceSpell: spell,
      document,
      issues,
      ok: issues.errors.length === 0,
      reviewRequired: issues.errors.length > 0 || issues.warnings.length > 0
    };
  }

  function validateDocument(doc, issues = { errors: [], warnings: [], info: [] }) {
    const requiredString = [
      ['School', doc.item.school, ALLOWED.school],
      ['Preparation Method', doc.preparation.method, ALLOWED.preparation],
      ['Activation Type', doc.activation.type, ALLOWED.activation],
      ['Range Units', doc.range.units, ALLOWED.range],
      ['Duration Units', doc.duration.units, ALLOWED.duration],
      ['Target Type', doc.target.type, ALLOWED.target]
    ];
    if (doc.area) requiredString.push(['Area Shape', doc.area.shape, ALLOWED.area]);
    for (const [label, value, allowed] of requiredString) if (!allowed.has(value)) issues.errors.push(`${label} inválido: ${value}.`);
    if (!Number.isInteger(doc.item.level) || doc.item.level < 0 || doc.item.level > 9) issues.errors.push(`Nível de magia inválido: ${doc.item.level}.`);
    if (!Number.isInteger(doc.activation.value) || doc.activation.value < 0) issues.errors.push(`Activation Value precisa ser inteiro não negativo: ${doc.activation.value}.`);
    for (const [label, value] of [['Range Value', doc.range.value], ['Duration Value', doc.duration.value], ['Target Count', doc.target.count]]) {
      if (value !== 'n/a' && (!Number.isInteger(value) || value < 0)) issues.errors.push(`${label} precisa ser inteiro ou n/a: ${value}.`);
    }
    if (doc.area) {
      if (!Number.isInteger(doc.area.size) || doc.area.size < 0) issues.errors.push(`Area Size precisa ser inteiro não negativo: ${doc.area.size}.`);
      for (const key of ['count', 'width', 'height']) {
        const value = doc.area[key];
        if (value !== 'n/a' && (!Number.isInteger(value) || value < 0)) issues.errors.push(`AREA.${key} precisa ser inteiro ou n/a: ${value}.`);
      }
    }
    if (doc.materials) {
      if (!Number.isInteger(doc.materials.cost) || doc.materials.cost < 0) issues.errors.push(`Materials Cost precisa ser inteiro não negativo: ${doc.materials.cost}.`);
      if (!Number.isInteger(doc.materials.supply) || doc.materials.supply < 0) issues.errors.push(`Materials Supply precisa ser inteiro não negativo: ${doc.materials.supply}.`);
    }
    return issues;
  }

  function yamlScalar(value) {
    if (value === 'n/a') return 'n/a';
    if (typeof value === 'boolean' || typeof value === 'number') return String(value);
    return JSON.stringify(String(value ?? ''));
  }

  function yamlBlock(text, indent) {
    const pad = ' '.repeat(indent);
    const lines = String(text || 'n/a').split('\n');
    return lines.map(line => pad + line).join('\n');
  }

  function spellDocumentToYaml(doc) {
    const lines = [];
    lines.push('SPELL:');
    lines.push('  ITEM:');
    lines.push(`    Name: ${yamlScalar(doc.item.name)}`);
    lines.push(`    Level: ${yamlScalar(doc.item.level)}`);
    lines.push(`    School: ${yamlScalar(doc.item.school)}`);
    lines.push(`    Ability: ${yamlScalar(doc.item.ability)}`);
    lines.push('');
    lines.push('  COMPONENTS:');
    lines.push(`    Vocal: ${yamlScalar(doc.components.vocal)}`);
    lines.push(`    Somatic: ${yamlScalar(doc.components.somatic)}`);
    lines.push(`    Material: ${yamlScalar(doc.components.material)}`);
    if (doc.materials) {
      lines.push('');
      lines.push('  MATERIALS:');
      lines.push(`    Value: ${yamlScalar(doc.materials.value)}`);
      lines.push(`    Cost: ${yamlScalar(doc.materials.cost)}`);
      lines.push(`    Supply: ${yamlScalar(doc.materials.supply)}`);
      lines.push(`    Consumed: ${yamlScalar(doc.materials.consumed)}`);
    }
    lines.push('  PREPARATION:');
    lines.push(`    Method: ${yamlScalar(doc.preparation.method)}`);
    lines.push(`    Prepared: ${yamlScalar(doc.preparation.prepared)}`);
    lines.push('');
    lines.push('  ACTIVATION:');
    lines.push(`    Type: ${yamlScalar(doc.activation.type)}`);
    lines.push(`    Value: ${yamlScalar(doc.activation.value)}`);
    lines.push(`    Condition: ${yamlScalar(doc.activation.condition)}`);
    lines.push('');
    lines.push('  RANGE:');
    lines.push(`    Units: ${yamlScalar(doc.range.units)}`);
    lines.push(`    Value: ${yamlScalar(doc.range.value)}`);
    lines.push('');
    lines.push('  DURATION:');
    lines.push(`    Units: ${yamlScalar(doc.duration.units)}`);
    lines.push(`    Value: ${yamlScalar(doc.duration.value)}`);
    lines.push(`    Concentration: ${yamlScalar(doc.duration.concentration)}`);
    lines.push('  TARGETS:');
    lines.push(`    Type: ${yamlScalar(doc.target.type)}`);
    lines.push(`    Count: ${yamlScalar(doc.target.count)}`);
    lines.push(`    Choice: ${yamlScalar(doc.target.choice)}`);
    lines.push(`    Special: ${yamlScalar(doc.target.special)}`);
    if (doc.area) {
      lines.push('');
      lines.push('  AREA:');
      lines.push(`    Shape: ${yamlScalar(doc.area.shape)}`);
      lines.push(`    Size: ${yamlScalar(doc.area.size)}`);
      lines.push(`    Units: ${yamlScalar(doc.area.units)}`);
      lines.push(`    Count: ${yamlScalar(doc.area.count)}`);
      lines.push(`    Width: ${yamlScalar(doc.area.width)}`);
      lines.push(`    Height: ${yamlScalar(doc.area.height)}`);
      lines.push(`    Contiguous: ${yamlScalar(doc.area.contiguous)}`);
    }
    lines.push('  USAGE:');
    lines.push(`    Uses Spent: ${yamlScalar(doc.usage.spent)}`);
    lines.push(`    Uses Max: ${yamlScalar(doc.usage.max)}`);
    lines.push('  RECOVERY: []');
    lines.push('');
    lines.push('  DESCRIPTION:');
    lines.push('    Description: |');
    lines.push(yamlBlock(doc.description || 'n/a', 6));
    lines.push('');
    lines.push('  UNIDENTIFIED_DESCRIPTION:');
    lines.push(`    Unidentified Name: ${yamlScalar(doc.unidentified.name)}`);
    lines.push('    Unidentified Description: |');
    lines.push(yamlBlock(doc.unidentified.description || 'n/a', 6));
    lines.push('  CHAT_FLAVOR:');
    lines.push('    Chat Description: |');
    lines.push(yamlBlock(doc.chat.description || 'n/a', 6));
    return lines.join('\n') + '\n';
  }

  function spellToYaml(spell, override = {}) {
    const result = buildSpellDocument(spell, override);
    if (!result.ok) {
      const error = new Error(`Não foi possível exportar ${spell?.name || spell?.id || 'a magia'}: ${result.issues.errors.join(' ')}`);
      error.exportResult = result;
      throw error;
    }
    return { ...result, yaml: spellDocumentToYaml(result.document) };
  }

  function batchToYaml(spells, options = {}) {
    const list = Array.isArray(spells) ? spells : [];
    const results = list.map(spell => spellToYaml(spell, options.overrides?.[spell.id] || {}));
    return {
      profile: PROFILE,
      results,
      reviewRequired: results.some(result => result.reviewRequired),
      yaml: results.map(result => result.yaml.trimEnd()).join('\n---\n') + (results.length ? '\n' : '')
    };
  }

  function inspectCatalog(spells) {
    const list = Array.isArray(spells) ? spells : [];
    const analyses = list.map(spell => buildSpellDocument(spell));
    return {
      total: analyses.length,
      exportable: analyses.filter(a => a.ok).length,
      ready: analyses.filter(a => a.ok && !a.reviewRequired).length,
      reviewRequired: analyses.filter(a => a.ok && a.reviewRequired).length,
      blocked: analyses.filter(a => !a.ok).length,
      analyses
    };
  }

  const definition = {
    id: PROFILE_ID,
    profile: PROFILE,
    spell: Object.freeze({
      analyze: buildSpellDocument,
      toYaml: spellToYaml,
      batchToYaml,
      inspectCatalog
    })
  };
  const registered = global.GRIMORIO_EXPORT_REGISTRY
    ? global.GRIMORIO_EXPORT_REGISTRY.register(definition)
    : Object.freeze(definition);

  global.GRIMORIO_FOUNDRY_V13 = registered;
})(window);
