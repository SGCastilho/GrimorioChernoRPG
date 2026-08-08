# Grimório D&D 5e PT-BR — versão 5.10

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e dos suplementos incorporados ao projeto.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Os catálogos incorporados funcionam offline.

## Novidades da versão 5.10

- Integrado integralmente o **Capítulo 7 — Magias** de *Somnus Domina — Zagalhta's Exolunar Collection*.
- Foram auditadas **63 magias** descritas no capítulo.
- **62 entradas próprias** foram adicionadas ao novo catálogo `zagalhta-spells`.
- **Pele de Dragão (Dragonskin)** foi identificada como reimpressão mecanicamente equivalente à entrada de Lyre e recebeu apenas a nova procedência, evitando duplicação no catálogo.
- As versões **Legacy/5.19** de **Curar Ferimentos, Palavra Curativa, Curar Ferimentos em Massa, Palavra Curativa em Massa e Lentidão** permanecem como entradas próprias de Zagalhta, sem substituir as versões oficiais do D&D 5e.
- Foram preservados como traços pesquisáveis os grupos **Arsenal Temível de Ahma, Astromancia, Eidomancia, Encarnações de Milarose e Legado de Oyd**.
- As regras especiais do capítulo, como **Bônus de Astromancia, Bônus do Cavaleiro Dracônico, Queima de Eidomancia, gravidade zero, Pegada e Fadiga de Combate**, foram mantidas conforme a fonte.
- As listas de magia apresentadas ao final do capítulo foram aplicadas a Bardo, Clérigo, Druida, Alma Favorecida, Inscritor, Paladino, Cavaleiro das Pétalas, Patrulheiro, Feiticeiro, Bruxo e Mago. A lista própria do Cavaleiro Dracônico foi cruzada com o Capítulo 6.
- **Invocar Belzer** está corretamente marcado como ritual.
- Magias extensas, incluindo **Conjurar Eco de Frame, Soberania, Extinção e Princípio de Stadyfyre**, preservam seus subsistemas e efeitos completos em PT-BR.
- O filtro **Zagalhta's Exolunar Collection** retorna as **63 magias** do capítulo sem gerar uma segunda linha para Pele de Dragão.

A integração de classes e subclasses realizada na v5.9 permanece intacta: Cavaleiro Dracônico, Piloto de Frame, seus 14 conjuntos de especialização e as 36 subclasses adicionais continuam disponíveis.

## Conteúdo atual

- **22 classes**.
- **359 subclasses/especializações**.
- **22 progressões estruturadas**.
- **1108 registros-base de magias/poderes** antes de conteúdo personalizado do usuário.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 21 magias do Caldeirão de Tasha.
- 280 magias/revisões de *Lyre's Guide to Retia*.
- 48 novas entradas de *Blade, Bone, & Benefit*; outras 60 magias do capítulo são vinculadas como reimpressões às entradas já existentes de Lyre.
- 62 novas entradas de *Zagalhta's Exolunar Collection*; **Pele de Dragão** é vinculada como reimpressão, totalizando 63 magias do Capítulo 7 disponíveis pelo filtro da fonte.
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
grimorio_dnd5e_ptbr_project_5.10/
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
│   ├── blade-bone-benefit-spells.js
│   └── zagalhta-spells.js
├── js/
│   ├── app.js
│   ├── config.js
│   ├── registry.js
│   └── dynamic-consultation.js
└── tools/
    └── validate-project.js
```
