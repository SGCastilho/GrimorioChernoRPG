# Grimório D&D 5e PT-BR — versão 5.8

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e dos suplementos incorporados ao projeto.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Os catálogos incorporados funcionam offline.

## Novidades da versão 5.8

- **Ministro de Sangue** integrado como a 20ª classe do Grimório, com progressão estruturada do 1º ao 20º nível, fundamentos, criação, características e referência às Seitas Genéticas.
- **8 Seitas Genéticas** do Ministro de Sangue integradas em PT-BR.
- **55 subclasses** efetivamente enumeradas pelo índice do Capítulo X integradas às classes correspondentes.
- O sumário geral do PDF anuncia **59 subclasses** no Capítulo X, enquanto o índice do capítulo enumera **55**; a versão 5.8 documenta essa divergência e não cria quatro subclasses inexistentes no índice.
- As **3 subclasses de Dragoneer** são preservadas e podem ser consultadas mesmo sem a classe-base. O próprio livro remete essa classe a *Zagalhta’s Exolunar Collection*, fonte ainda não integrada ao Grimório.
- **Fardo de Gotham** e **Fardo de Scorn** permanecem como versões próprias de *Blade, Bone, & Benefit*, pois o texto do compêndio contém mudanças mecânicas em relação às versões já catalogadas de Lyre.
- **339 características de subclasses** da nova fonte foram estruturadas com nível e página de origem.
- **12 tabelas complementares** foram estruturadas para Magias de Domínio, Magias do Círculo, Magias de Capítulo, Magias de Juramento e listas expandidas de Bruxo.
- Regras sem nível próprio que fazem parte da identidade mecânica das subclasses — **Compulsões dos Fardos**, **Preceitos dos Juramentos** e **Relíquias dos Caminhos** — permanecem visíveis na visão geral.
- A navegação lateral, a busca Ctrl+K e a ficha de subclasse agora suportam subclasses cuja classe-base ainda não foi incorporada.
- O catálogo de magias da versão 5.7 permanece intacto: **48 entradas novas + 60 reimpressões vinculadas**, totalizando 108 magias recuperáveis pela fonte *Blade, Bone, & Benefit*.

### Arquitetura para próximas fontes

1. Cadastre a fonte com `GRIMORIO_REGISTRY.registerSource(...)`.
2. Carregue os módulos de classe/subclasse pelo `index.html`.
3. Para classes, registre também `GRIMORIO_CLASS_PROGRESSIONS` quando houver progressão estruturada.
4. Para magias, registre o array com `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
5. Execute `node tools/validate-project.js` antes de empacotar a nova versão.

## Conteúdo atual

- **20 classes**.
- **309 subclasses** no total, incluindo 3 opções de Dragoneer com classe-base externa ainda não integrada.
- **1046 registros-base de magias/poderes** antes de conteúdo personalizado do usuário.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 21 magias do Caldeirão de Tasha.
- 280 magias/revisões de Lyre's Guide to Retia.
- 48 novas entradas de Blade, Bone, & Benefit; outras 60 magias do capítulo são vinculadas como reimpressões às entradas já existentes de Lyre.
- 240 magias/poderes completos + 1 referência incompleta do Spell Compendium.
- Conteúdo homebrew incorporado anteriormente.

## Estrutura relevante

```text
grimorio_dnd5e_ptbr_project_5.8/
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
