# Grimório D&D 5e PT-BR — versão 5.0

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014, Guia de Xanathar para Todas as Coisas e conteúdos homebrew identificados.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Classes, subclasses, progressões e os catálogos incorporados funcionam offline.

## Novidades da versão 5.0

- **31 subclasses do Guia de Xanathar para Todas as Coisas** incorporadas ao catálogo das classes-base.
- **165 características** dessas subclasses estruturadas por nível e página de origem.
- **10 tabelas auxiliares** convertidas para dados reais, incluindo magias expandidas, magias de juramento e peculiaridades.
- **95 magias do Capítulo 3** adicionadas em português brasileiro, com nível, escola, classes, conjuração, alcance, componentes, duração, ritual, concentração, descrição e página de origem.
- Novo agrupamento/filtro de fonte **Guia de Xanathar** no catálogo de magias.
- Os novos registros funcionam com os ícones de escolas já existentes no Grimório.
- Nenhum ID de magia é duplicado entre Livro do Jogador, Guia de Xanathar e Spell Compendium.
- Correção do carregamento da subclasse homebrew **Juramento da Lâmina de Bahamut** no `index.html`.

## Conteúdo atual

- 14 classes.
- 83 subclasses no total.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 240 magias/poderes completos + 1 referência incompleta do Spell Compendium.
- Classe Spellblade e suas nove Técnicas.
- Classe Emissário Espiritual e Caminho do Santuário.
- Juramento da Lâmina de Bahamut.

## Estrutura

```text
grimorio_dnd5e_ptbr_project_5.0/
├── index.html
├── README.md
├── CHANGELOG.md
├── manifest.json
├── css/
├── data/
│   ├── classes.js
│   ├── progression.js
│   ├── phb-spells.js
│   ├── xanathar-subclasses.js
│   ├── xanathar-spells.js
│   ├── homebrew-emissario.js
│   ├── homebrew-paladin-bahamut.js
│   ├── homebrew-spellblade-class.js
│   ├── spells.js
│   └── spellblade-spells.js
└── js/
```

## Fontes

O conteúdo do Guia de Xanathar desta versão foi estruturado a partir do PDF em português fornecido ao projeto. Foram removidos artefatos inequívocos de extração/OCR sem alterar deliberadamente as mecânicas apresentadas na fonte.

Inclui também conteúdo de *Kibbles’ Compendium of Legends and Legacies*, por KibblesTasty Homebrew LLC, disponibilizado no Kibbles’ Reference Document sob Creative Commons Atribuição 4.0 Internacional. As artes dos PDFs não são incorporadas ao projeto.
