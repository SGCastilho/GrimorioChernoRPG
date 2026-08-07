# Grimório D&D 5e PT-BR — versão 5.9

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e dos suplementos incorporados ao projeto.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Os catálogos incorporados funcionam offline.

## Novidades da versão 5.9

- Integrado o Capítulo 6 — **Opções de Classe** de *Somnus Domina — Zagalhta's Exolunar Collection*.
- **Cavaleiro Dracônico** (*Dragoneer*) integrado como classe completa, traduzida para PT-BR, com progressão do 1º ao 20º nível.
- A arquitetura modular do Cavaleiro Dracônico foi preservada: seus **9 Conceitos Centrais** determinam Dado de Vida, salvaguardas, proficiências e progressão de conjuração.
- Os **19 Tipos de Encarnação** do Cavaleiro Dracônico foram estruturados como tabela real da classe.
- **Piloto de Frame** (*Frame Pilot*) integrado como classe completa, com progressão do 1º ao 20º nível, Crescimento, Aprimoramentos Inerentes e regras de Junção.
- As **5 Designações Tecnológicas** do Piloto de Frame foram integradas como especializações consultáveis.
- Foram integradas **36 subclasses adicionais** do capítulo para Bárbaro, Bardo, Clérigo, Druida, Alma Favorecida, Guerreiro, Inscritor, Monge, Paladino, Cavaleiro das Pétalas, Patrulheiro, Ladino, Feiticeiro, Santo da Espada, Bruxo e Mago.
- No total, a fonte adiciona **50 novas entradas de subclasse/especialização**: 9 Conceitos Centrais + 5 Designações Tecnológicas + 36 subclasses.
- As **3 subclasses de Cavaleiro Dracônico** já presentes em *Blade, Bone, & Benefit* agora estão vinculadas à classe-base, deixando de aparecer como conteúdo com classe externa pendente.
- Nomes originais em inglês são preservados em `originalName`/aliases para pesquisa, enquanto nomes, características, tabelas e textos de consulta ficam em português brasileiro.
- Termos exclusivos da 5.19, como Fadiga de Combate, aceleração 0-G, Junção, Cargas Arcanas, Dado de Favor e Astromancia, foram preservados conforme a fonte.
- As magias do Capítulo 7 de Zagalhta **não** foram incluídas nesta etapa.

## Conteúdo atual

- **22 classes**.
- **359 subclasses/especializações**.
- **22 progressões estruturadas**.
- **1046 registros-base de magias/poderes** antes de conteúdo personalizado do usuário.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 21 magias do Caldeirão de Tasha.
- 280 magias/revisões de *Lyre's Guide to Retia*.
- 48 novas entradas de *Blade, Bone, & Benefit*; outras 60 magias do capítulo são vinculadas como reimpressões às entradas já existentes de Lyre.
- 240 magias/poderes completos + 1 referência incompleta do Spell Compendium.
- Conteúdo homebrew incorporado anteriormente.

### Distribuição de Zagalhta

- Cavaleiro Dracônico: **9 Conceitos Centrais novos** + **3 subclasses de Blade, Bone, & Benefit já existentes** = 12 opções consultáveis.
- Piloto de Frame: **5 Designações Tecnológicas**.
- Subclasses tradicionais de Zagalhta: **36**.
- Características de subclasses/especializações da nova fonte estruturadas: **256**.
- Tabelas estruturadas da nova fonte: **30**.

## Arquitetura para próximas fontes

1. Cadastre a fonte com `GRIMORIO_REGISTRY.registerSource(...)`.
2. Carregue os módulos de classe/subclasse pelo `index.html`.
3. Para classes, registre também `GRIMORIO_CLASS_PROGRESSIONS` quando houver progressão estruturada.
4. Para magias, registre o array com `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
5. Execute `node tools/validate-project.js` antes de empacotar a nova versão.

## Estrutura relevante

```text
grimorio_dnd5e_ptbr_project_5.9/
├── index.html
├── README.md
├── CHANGELOG.md
├── manifest.json
├── css/
├── data/
│   ├── sources.js
│   ├── classes.js
│   ├── progression.js
│   ├── lyre-classes.js
│   ├── lyre-subclasses.js
│   ├── blade-bone-benefit-classes.js
│   ├── blade-bone-benefit-subclasses.js
│   ├── zagalhta-classes.js
│   ├── zagalhta-specializations.js
│   ├── zagalhta-subclasses-standard.js
│   ├── zagalhta-subclasses-standard-2.js
│   ├── zagalhta-subclasses-standard-3.js
│   ├── zagalhta-compulsions.js
│   ├── phb-spells.js
│   ├── xanathar-spells.js
│   ├── tasha-spells.js
│   ├── scag-spells.js
│   ├── spellblade-spells.js
│   ├── lyre-spells.js
│   └── blade-bone-benefit-spells.js
├── js/
│   ├── app.js
│   ├── config.js
│   ├── registry.js
│   └── dynamic-consultation.js
└── tools/
    └── validate-project.js
```
