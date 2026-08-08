# Grimório D&D 5e PT-BR — versão 5.12

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e dos suplementos incorporados ao projeto.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Os catálogos incorporados funcionam offline.

## Novidades da versão 5.12

- Integrado integralmente o **Capítulo 13 — Magias** de *Ryoko's Guide to the Yokai Realms* em português brasileiro.
- O capítulo contém **62 magias**; a própria fonte declara **44 inéditas e 18 provenientes de outras publicações da Loot Tavern**, incluídas para conveniência. Como a ficha individual não identifica essa divisão, o Grimório não atribui uma publicação anterior por inferência.
- As **62 fichas são novas em relação ao catálogo atual do Grimório**. **Chuva Ácida (Acid Rain)** permanece separada da magia homônima de KibblesTasty por possuir nível e mecânicas diferentes.
- Foram preservadas as listas de classe e as afinidades elementais do **Dobrador** (Ar, Terra, Fogo e Água) informadas em cada ficha.
- A escola opcional **Biomancia** foi preservada em **7 magias**, juntamente com a escola alternativa indicada pelo livro quando Biomancia não for utilizada.
- **Passo pelas Nuvens (Cloud Stride)** está marcado como ritual.
- Nomes originais em inglês permanecem como aliases para pesquisa.

## Novidades da versão 5.11

- Integrado o **Capítulo 9 — Classes** de *Ryoko's Guide to the Yokai Realms* em português brasileiro.
- Adicionada a classe **Dobrador (Bender)**, com progressão estruturada do 1º ao 20º nível, Afinidades Elementais, Golpes Elementais, Combo Elemental, Forma Primordial e Avatar Primordial.
- Integradas as quatro Disciplinas do Dobrador: **Discípulo da Ferocidade, Discípulo da Fortificação, Discípulo da Fusão e Discípulo do Revigoramento**.
- Adicionada a classe **Domador (Tamer)**, que o próprio livro reimprime para referência, com progressão completa, Familiar/Família de Bolso, Treinador de Monstros, Domar Criatura, Vínculo da Alma, melhorias de companheiro e conjuração.
- Integrado o paradigma **Sensei** do Domador, incluindo Golpes Marciais e a tabela de Técnicas Marciais.
- Integradas as **13 subclasses para classes-base** apresentadas no capítulo: Caminho do Kaiju; Colégio de Hanabi; Colégio das Máscaras; Domínio do Guardião do Santuário; Círculo dos Yokai; Lâmina Esquelética; Caminho dos Oito Portões; Juramento do Yojimbo; Rōnin; Tamaya; Invocador de Espíritos; O Shinigami; e Shinobi.
- No total, Ryoko adiciona **18 entradas de subclasse/especialização**: 4 Disciplinas + 1 paradigma de Domador + 13 subclasses para classes-base.
- As regras opcionais de **Ataque Extra Aprimorado** para Bárbaro, Dobrador, Guerreiro, Monge, Paladino e Patrulheiro foram preservadas como referências opcionais, sem alterar silenciosamente a progressão original dessas classes.
- Os nomes originais em inglês foram mantidos como aliases pesquisáveis, enquanto nomes, características, tabelas e regras aparecem em PT-BR.

## Conteúdo atual

- **24 classes**.
- **377 subclasses/especializações**.
- **24 progressões estruturadas**.
- **1170 registros-base de magias/poderes** antes de conteúdo personalizado do usuário.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 21 magias do Caldeirão de Tasha.
- 280 magias/revisões de *Lyre's Guide to Retia*.
- 48 novas entradas de *Blade, Bone, & Benefit*; outras 60 magias do capítulo são vinculadas como reimpressões às entradas já existentes de Lyre.
- 62 novas entradas de *Zagalhta's Exolunar Collection*; **Pele de Dragão** é vinculada como reimpressão, totalizando 63 magias do Capítulo 7 disponíveis pelo filtro da fonte.
- 62 magias do Capítulo 13 de *Ryoko's Guide to the Yokai Realms*, integralmente localizadas para PT-BR.
- 240 magias/poderes completos + 1 referência incompleta do Spell Compendium.
- Conteúdo homebrew incorporado anteriormente.

### Distribuição de Zagalhta

- Cavaleiro Dracônico: **9 Conceitos Centrais novos** + **3 subclasses de Blade, Bone, & Benefit já existentes** = 12 opções consultáveis.
- Piloto de Frame: **5 Designações Tecnológicas**.
- Subclasses tradicionais de Zagalhta: **36**.
- Características de subclasses/especializações da nova fonte estruturadas: **256**.
- Tabelas estruturadas da nova fonte: **30**.

### Distribuição de Ryoko

- Dobrador: **4 Disciplinas**.
- Domador: **1 Paradigma de Treinamento (Sensei)**.
- Subclasses para classes-base: **13**.
- Total de novas entradas de subclasse/especialização: **18**.
- Características de subclasses/especializações estruturadas: **99**.
- Tabelas estruturadas de subclasses: **20**.
- Progressões de classe adicionadas: **2**, ambas com 20 níveis.

## Arquitetura para próximas fontes

1. Cadastre a fonte com `GRIMORIO_REGISTRY.registerSource(...)`.
2. Carregue os módulos de classe/subclasse pelo `index.html`.
3. Para classes, registre também `GRIMORIO_CLASS_PROGRESSIONS` quando houver progressão estruturada.
4. Para magias, registre o array com `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
5. Execute `node tools/validate-project.js` antes de empacotar a nova versão.

## Estrutura relevante

```text
grimorio_dnd5e_ptbr_project_5.12/
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
│   ├── ryoko-classes.js
│   ├── ryoko-subclasses.js
│   ├── ryoko-optional-features.js
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
│   ├── blade-bone-benefit-spells.js
│   ├── zagalhta-spells.js
│   └── ryoko-spells.js
├── js/
│   ├── app.js
│   ├── config.js
│   ├── registry.js
│   └── dynamic-consultation.js
└── tools/
    └── validate-project.js
```
