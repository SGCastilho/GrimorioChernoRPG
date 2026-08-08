'use strict';

// Registro central dos formatos de exportação do Grimório.
// Mantém integrações externas desacopladas dos dados e da interface principal.
(function initExportRegistry(global) {
  const profiles = new Map();

  function register(definition) {
    if (!definition || typeof definition !== 'object') throw new TypeError('Perfil de exportação inválido.');
    const id = String(definition.id || definition.profile?.id || '').trim();
    if (!id) throw new Error('Todo perfil de exportação precisa de id.');
    if (profiles.has(id)) throw new Error(`Perfil de exportação já registrado: ${id}`);
    const entry = Object.freeze({ ...definition, id });
    profiles.set(id, entry);
    return entry;
  }

  function get(id) {
    return profiles.get(String(id || '').trim()) || null;
  }

  function list() {
    return Array.from(profiles.values());
  }

  global.GRIMORIO_EXPORT_REGISTRY = Object.freeze({ register, get, list });
})(window);
