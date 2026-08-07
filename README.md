# Grimório D&D 5e PT-BR — versão 4.9

Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e conteúdos homebrew identificados.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

O conteúdo de classes, subclasses, progressões e do Spell Compendium funciona offline.

## Novidades da versão 4.9

- Adicionada a subclasse homebrew **Juramento da Lâmina de Bahamut** para Paladino.
- A apresentação registra **Elowen Nightfall** como a primeira portadora conhecida do juramento.
- Incluídos os Dogmas da Lâmina, as duas opções de Canalizar Divindade, Chamas da Redenção, Alvorada Prometida e O Alvorecer.
- Incluída uma tabela real com as Magias da Lâmina de Bahamut nos níveis 3, 5, 9, 13 e 17.
- A progressão dinâmica da subclasse aparece nos níveis 3, 7, 15 e 20 e suas características são clicáveis.
- O conteúdo foi mantido como **Homebrew Original**, separado das subclasses oficiais do Livro do Jogador.

- **361 magias do Livro do Jogador de D&D 5e 2014**, extraídas e estruturadas diretamente da edição em português fornecida para o projeto.
- O catálogo oficial agora é **totalmente offline** e não depende do cache SRD ou de sincronização externa.
- Inclusão das magias do Livro do Jogador que não faziam parte do catálogo SRD anterior, incluindo **Braços de Hadar**, **Armadura de Agathys** e **Bruxaria**.
- Cada magia oficial possui nível, escola, classes, tempo de conjuração, alcance, componentes, duração, ritual, concentração, descrição e página de origem.
- Deduplicação do catálogo oficial: **361 nomes e 361 IDs únicos**.
- As inconsistências internas encontradas no PDF para **Falar com Plantas**, **Muralha de Pedra** e **Telepatia** foram documentadas, utilizando a classificação das listas de classe.
- Mantidos os 240 registros completos e 1 referência incompleta do Spell Compendium.

- Ícones exclusivos em SVG para Abjuração, Adivinhação, Conjuração, Encantamento, Evocação, Ilusão, Necromancia, Transmutação, Psiônica e escola não informada.
- Aplicação automática dos ícones em todas as magias do catálogo.
- Páginas individuais de magia agora exibem o ícone da escola correspondente no cabeçalho.
- Busca rápida (Ctrl+K) também passou a exibir os ícones corretos por escola.
- Mantidas as melhorias de interface da versão 4.6, incluindo a remoção dos controles de exportação/importação e dos banners de consulta completa.

- Classe **Spellblade** completa, traduzida para português brasileiro.
- Progressão real do 1º ao 20º nível com truques, magias conhecidas e espaços de 1º a 5º nível.
- Nove Técnicas de Spellblade: Mago de Batalha, Lâmina de Éter, Guardião, Lâmina Veloz, Caçador de Magos, Atirador Arcano, Lâmina de Geada, Espada Voadora e Punho Mágico.
- Características clicáveis nas progressões da classe e das subclasses.
- Tabela completa com os 32 efeitos de Égide.
- Lista de magias de Spellblade localizada em PT-BR.
- Magias concedidas por cada técnica apresentadas em tabelas próprias.
- Atribuição CC-BY-4.0 do conteúdo de KibblesTasty incluída.
- Correção do carregamento de `data/spellblade-spells.js` no `index.html`.

## Estrutura

```text
grimorio_dnd5e_ptbr_project_4.9/
├── index.html
├── README.md
├── CHANGELOG.md
├── manifest.json
├── css/
├── data/
│   ├── classes.js
│   ├── progression.js
│   ├── homebrew-emissario.js
│   ├── homebrew-paladin-bahamut.js
│   ├── homebrew-spellblade-class.js
│   ├── spells.js
│   └── spellblade-spells.js
└── js/
```

## Licença e atribuição

Inclui conteúdo de *Kibbles’ Compendium of Legends and Legacies*, por KibblesTasty Homebrew LLC, disponível no Kibbles’ Reference Document. O texto é licenciado sob Creative Commons Atribuição 4.0 Internacional. As artes do PDF não estão incluídas neste projeto.
