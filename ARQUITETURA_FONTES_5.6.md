# Arquitetura de fontes e catálogos — Grimório 5.6

## Objetivo

A versão 5.6 remove da lógica central a necessidade de conhecer cada livro individualmente. Novas fontes passam a declarar seus metadados e seus catálogos, enquanto a interface consulta o registro central.

## Arquivos principais

- `js/registry.js`: motor genérico de registro, resolução de fontes, agrupamento e estatísticas.
- `data/sources.js`: fontes atualmente conhecidas pelo projeto.
- `tools/validate-project.js`: validação estrutural antes de empacotar uma versão.

## Registrando uma fonte

```js
window.GRIMORIO_REGISTRY.registerSource({
  id: 'novo-livro',
  title: 'Novo Livro — Nome Completo',
  shortTitle: 'Novo Livro',
  filterLabel: 'Novo Livro',
  homeLabel: 'Novo Livro',
  catalogLabel: 'Novo Livro',
  order: 70,
  showOnHome: true,
  showInAbout: true,
  aliases: ['Nome alternativo da fonte'],
  matchIncludes: ['Novo Livro'],
  about: [
    'Resumo do conteúdo incorporado ao Grimório.'
  ]
});
```

A fonte pode ser registrada em `data/sources.js` ou pelo próprio módulo, desde que isso aconteça antes do registro do catálogo correspondente.

## Registrando um catálogo de magias

Depois que o array de magias for criado:

```js
window.GRIMORIO_NOVO_LIVRO_SPELLS = [
  // ... magias ...
];

window.GRIMORIO_REGISTRY.registerSpellCatalog({
  id: 'novo-livro-spells',
  sourceId: 'novo-livro',
  spells: window.GRIMORIO_NOVO_LIVRO_SPELLS
});
```

A partir desse registro, o catálogo participa automaticamente de:

- `allSpells()`;
- contagem total de magias;
- resumo do catálogo;
- filtro de fontes;
- exibição da fonte nas listagens;
- validação estrutural.

## Fontes secundárias e versões antigas

Entradas em `legacyVersions` e `otherSources` são resolvidas pelo mesmo registro. Para que uma nova fonte secundária apareça corretamente no filtro, basta que seu título, categoria ou alias seja reconhecido por uma fonte registrada.

## Validação

Execute a partir da raiz do projeto:

```bash
node tools/validate-project.js
```

O validador reprova erros estruturais, incluindo:

- fonte inexistente utilizada por um catálogo;
- catálogo sem array de magias;
- IDs de magia duplicados entre catálogos;
- classes ou subclasses sem ID;
- subclasses apontando para uma classe inexistente;
- classes sem progressão estruturada;
- magias que não podem ser agrupadas por fonte.

Fontes não reconhecidas em conteúdos auxiliares são reportadas como avisos.
