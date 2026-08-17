'use strict';

// Registro central de fontes e catálogos do Grimório.
// Novos módulos devem registrar a fonte em data/sources.js (ou em seu próprio
// arquivo) e registrar seus catálogos aqui, sem alterar js/app.js.
(function initGrimorioRegistry(global) {
  const sources = new Map();
  const spellCatalogs = new Map();
  const equipmentCatalogs = new Map();
  const featCatalogs = new Map();
  const backgroundCatalogs = new Map();

  function normalize(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9']+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function array(value) {
    return Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];
  }

  function registerSource(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Fonte inválida.');
    const id = String(definition.id || '').trim();
    const title = String(definition.title || '').trim();
    if (!id || !title) throw new Error('Toda fonte precisa de id e title.');

    const previous = sources.get(id) || {};
    const merged = {
      order: 1000,
      kind: 'book',
      showOnHome: false,
      showInAbout: true,
      ...previous,
      ...definition,
      id,
      title,
      aliases: Array.from(new Set([
        ...array(previous.aliases),
        ...array(definition.aliases),
        title,
        definition.shortTitle,
        definition.filterLabel,
        definition.homeLabel
      ].filter(Boolean)))
    };
    sources.set(id, merged);
    return merged;
  }

  function getSource(id) {
    return sources.get(String(id || '').trim()) || null;
  }

  function getSources(options = {}) {
    let list = Array.from(sources.values());
    if (options.showOnHome === true) list = list.filter(source => source.showOnHome);
    if (options.showInAbout === true) list = list.filter(source => source.showInAbout !== false);
    if (options.kind) list = list.filter(source => source.kind === options.kind);
    return list.sort((a, b) => (a.order || 1000) - (b.order || 1000) || a.title.localeCompare(b.title, 'pt-BR'));
  }

  function sourceMatches(source, value) {
    const raw = String(value || '').trim();
    if (!raw) return false;
    const key = normalize(raw);
    if (!key) return false;
    if (normalize(source.id) === key) return true;
    if ((source.aliases || []).some(alias => normalize(alias) === key)) return true;
    if ((source.matchIncludes || []).some(part => key.includes(normalize(part)))) return true;
    return false;
  }

  function resolveSource(value) {
    if (!value) return null;
    if (typeof value === 'object') {
      const directId = value.sourceId || value._sourceId || value.registrySourceId;
      if (directId && getSource(directId)) return getSource(directId);
      for (const candidate of [value.category, value.source, value.title, value.sourceTitle]) {
        const found = resolveSource(candidate);
        if (found) return found;
      }
      return null;
    }
    for (const source of getSources()) if (sourceMatches(source, value)) return source;
    return null;
  }

  function registerSpellCatalog(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Catálogo de magias inválido.');
    const id = String(definition.id || '').trim();
    const sourceId = String(definition.sourceId || '').trim();
    const spells = definition.spells;
    if (!id || !sourceId) throw new Error('Todo catálogo de magias precisa de id e sourceId.');
    if (spellCatalogs.has(id)) throw new Error('ID de catálogo de magias já registrado: ' + id);
    if (!Array.isArray(spells)) throw new Error('O catálogo "' + id + '" precisa fornecer um array spells.');
    if (!getSource(sourceId)) throw new Error('O catálogo "' + id + '" referencia a fonte não registrada "' + sourceId + '".');

    const catalog = {
      order: getSource(sourceId)?.order || 1000,
      ...definition,
      id,
      sourceId,
      spells
    };
    spellCatalogs.set(id, catalog);
    return catalog;
  }

  function getSpellCatalogs() {
    return Array.from(spellCatalogs.values()).sort((a, b) => (a.order || 1000) - (b.order || 1000) || a.id.localeCompare(b.id));
  }

  function registerEquipmentCatalog(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Catálogo de equipamentos inválido.');
    const id = String(definition.id || '').trim();
    const sourceId = String(definition.sourceId || '').trim();
    const items = definition.items;
    if (!id || !sourceId) throw new Error('Todo catálogo de equipamentos precisa de id e sourceId.');
    if (equipmentCatalogs.has(id)) throw new Error('ID de catálogo de equipamentos já registrado: ' + id);
    if (!Array.isArray(items)) throw new Error('O catálogo "' + id + '" precisa fornecer um array items.');
    if (!getSource(sourceId)) throw new Error('O catálogo "' + id + '" referencia a fonte não registrada "' + sourceId + '".');

    const properties = definition.properties && typeof definition.properties === 'object' ? definition.properties : {};
    const catalog = {
      order: getSource(sourceId)?.order || 1000,
      ...definition,
      id,
      sourceId,
      items,
      properties
    };
    equipmentCatalogs.set(id, catalog);
    return catalog;
  }

  function getEquipmentCatalogs() {
    return Array.from(equipmentCatalogs.values()).sort((a, b) => (a.order || 1000) - (b.order || 1000) || a.id.localeCompare(b.id));
  }


  function registerFeatCatalog(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Catálogo de talentos inválido.');
    const id = String(definition.id || '').trim();
    const sourceId = String(definition.sourceId || '').trim();
    const feats = definition.feats;
    if (!id || !sourceId) throw new Error('Todo catálogo de talentos precisa de id e sourceId.');
    if (featCatalogs.has(id)) throw new Error('ID de catálogo de talentos já registrado: ' + id);
    if (!Array.isArray(feats)) throw new Error('O catálogo "' + id + '" precisa fornecer um array feats.');
    if (!getSource(sourceId)) throw new Error('O catálogo "' + id + '" referencia a fonte não registrada "' + sourceId + '".');

    const catalog = {
      order: getSource(sourceId)?.order || 1000,
      ...definition,
      id,
      sourceId,
      feats
    };
    featCatalogs.set(id, catalog);
    return catalog;
  }

  function getFeatCatalogs() {
    return Array.from(featCatalogs.values()).sort((a, b) => (a.order || 1000) - (b.order || 1000) || a.id.localeCompare(b.id));
  }

  function registerBackgroundCatalog(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Catálogo de antecedentes inválido.');
    const id = String(definition.id || '').trim();
    const sourceId = String(definition.sourceId || '').trim();
    const backgrounds = definition.backgrounds;
    if (!id || !sourceId) throw new Error('Todo catálogo de antecedentes precisa de id e sourceId.');
    if (backgroundCatalogs.has(id)) throw new Error('ID de catálogo de antecedentes já registrado: ' + id);
    if (!Array.isArray(backgrounds)) throw new Error('O catálogo "' + id + '" precisa fornecer um array backgrounds.');
    if (!getSource(sourceId)) throw new Error('O catálogo "' + id + '" referencia a fonte não registrada "' + sourceId + '".');
    const catalog = { order: getSource(sourceId)?.order || 1000, ...definition, id, sourceId, backgrounds };
    backgroundCatalogs.set(id, catalog);
    return catalog;
  }

  function getBackgroundCatalogs() {
    return Array.from(backgroundCatalogs.values()).sort((a, b) => (a.order || 1000) - (b.order || 1000) || a.id.localeCompare(b.id));
  }

  function backgroundStats() {
    return getBackgroundCatalogs().map(catalog => {
      const source = getSource(catalog.sourceId);
      const bases = catalog.backgrounds.filter(background => !background?.variantOf).length;
      return {
        id: catalog.id,
        sourceId: catalog.sourceId,
        count: catalog.backgrounds.length,
        bases,
        variants: catalog.backgrounds.length - bases,
        label: catalog.label || source?.catalogLabel || source?.homeLabel || source?.shortTitle || source?.title || catalog.id
      };
    });
  }

  function featStats() {
    return getFeatCatalogs().map(catalog => {
      const source = getSource(catalog.sourceId);
      return {
        id: catalog.id,
        sourceId: catalog.sourceId,
        count: catalog.feats.length,
        prerequisiteCount: catalog.feats.filter(feat => Array.isArray(feat?.prerequisites) && feat.prerequisites.length).length,
        repeatableCount: catalog.feats.filter(feat => feat?.repeatable === true).length,
        label: catalog.label || source?.catalogLabel || source?.homeLabel || source?.shortTitle || source?.title || catalog.id
      };
    });
  }

  function equipmentStats() {
    return getEquipmentCatalogs().map(catalog => {
      const source = getSource(catalog.sourceId);
      const counts = catalog.items.reduce((acc, item) => {
        const type = String(item?.type || 'other');
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      return {
        id: catalog.id,
        sourceId: catalog.sourceId,
        count: catalog.items.length,
        counts,
        label: catalog.label || source?.catalogLabel || source?.homeLabel || source?.shortTitle || source?.title || catalog.id
      };
    });
  }

  function findCatalogForSpell(spell) {
    if (!spell) return null;
    const explicit = spell._catalogId && spellCatalogs.get(spell._catalogId);
    if (explicit) return explicit;
    const id = spell.id;
    if (!id) return null;
    for (const catalog of getSpellCatalogs()) {
      if (catalog.spells.some(entry => entry && entry.id === id)) return catalog;
    }
    return null;
  }

  function spellPrimarySource(spell) {
    if (!spell) return null;
    const direct = resolveSource(spell);
    if (direct) return direct;
    const catalog = findCatalogForSpell(spell);
    return catalog ? getSource(catalog.sourceId) : null;
  }

  function spellGroupLabel(spell) {
    const source = spellPrimarySource(spell);
    if (!source) return null;
    const category = String(spell?.category || '').trim();
    if (category && source.categoryGroups && source.categoryGroups[category]) return source.categoryGroups[category];
    return source.filterLabel || source.shortTitle || source.title;
  }

  function sourceFilterLabel(value) {
    const source = resolveSource(value);
    return source ? (source.filterLabel || source.shortTitle || source.title) : null;
  }

  function spellGroupLabels(spell) {
    const groups = [];
    const primary = spellGroupLabel(spell);
    if (primary) groups.push(primary);

    for (const version of array(spell?.legacyVersions)) {
      const label = sourceFilterLabel(version) || String(version?.category || '').trim();
      if (label) groups.push(label);
    }
    for (const other of array(spell?.otherSources)) {
      const label = sourceFilterLabel(other);
      if (label) groups.push(label);
    }
    return Array.from(new Set(groups.filter(Boolean)));
  }

  function naturalList(values) {
    const items = array(values).map(String).filter(Boolean);
    if (items.length < 2) return items[0] || '';
    if (items.length === 2) return items[0] + ' e ' + items[1];
    return items.slice(0, -1).join(', ') + ' e ' + items[items.length - 1];
  }

  function catalogStats() {
    return getSpellCatalogs().map(catalog => {
      const source = getSource(catalog.sourceId);
      return {
        id: catalog.id,
        sourceId: catalog.sourceId,
        count: catalog.spells.length,
        label: catalog.label || source?.catalogLabel || source?.homeLabel || source?.shortTitle || source?.title || catalog.id
      };
    });
  }

  global.GRIMORIO_REGISTRY = Object.freeze({
    registerSource,
    getSource,
    getSources,
    resolveSource,
    registerSpellCatalog,
    getSpellCatalogs,
    registerEquipmentCatalog,
    getEquipmentCatalogs,
    equipmentStats,
    registerFeatCatalog,
    getFeatCatalogs,
    featStats,
    registerBackgroundCatalog,
    getBackgroundCatalogs,
    backgroundStats,
    findCatalogForSpell,
    spellPrimarySource,
    spellGroupLabel,
    spellGroupLabels,
    sourceFilterLabel,
    naturalList,
    catalogStats,
    normalize
  });
})(window);
