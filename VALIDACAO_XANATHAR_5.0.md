# Validação — Grimório 5.0 / Guia de Xanathar

## Escopo incorporado

- 31 subclasses do Capítulo 1.
- 165 características de subclasses.
- 10 tabelas auxiliares estruturadas.
- 95 magias do Capítulo 3.
- Conteúdo armazenado em arquivos locais, sem necessidade de consulta ao PDF durante o uso.

## Subclasses por classe

- **Bárbaro (3)**: Caminho do Guardião Ancestral; Caminho do Arauto da Tempestade; Caminho do Fanático.
- **Bardo (3)**: Colégio do Glamour; Colégio das Espadas; Colégio dos Sussurros.
- **Bruxo (2)**: O Celestial; A Lâmina Maldita.
- **Clérigo (2)**: Domínio da Forja; Domínio da Sepultura.
- **Druida (2)**: Círculo dos Sonhos; Círculo do Pastor.
- **Feiticeiro (3)**: Alma Favorecida; Adepto das Sombras; Feiticeiro da Tempestade.
- **Guerreiro (3)**: Arqueiro Arcano; Cavaleiro; Samurai.
- **Ladino (4)**: Inquiridor; Mentor; Batedor; Espadachim.
- **Mago (1)**: Mago de Guerra.
- **Monge (3)**: Estilo do Mestre Bêbado; Estilo do Kensei; Estilo da Alma Solar.
- **Paladino (2)**: Juramento da Conquista; Juramento da Redenção.
- **Patrulheiro (3)**: Perseguidor Obscuro; Andarilho do Horizonte; Exterminador de Monstros.

## Magias por nível

- Truques: 12
- 1º nível: 10
- 2º nível: 12
- 3º nível: 12
- 4º nível: 10
- 5º nível: 16
- 6º nível: 12
- 7º nível: 4
- 8º nível: 4
- 9º nível: 3

## Magias por escola

- Abjuração: 6
- Adivinhação: 2
- Conjuração: 17
- Encantamento: 6
- Evocação: 23
- Ilusão: 3
- Necromancia: 9
- Transmutação: 29

## Associações de classe das magias

- Bardo: 14 entradas de lista
- Bruxo: 33 entradas de lista
- Clérigo: 7 entradas de lista
- Druida: 39 entradas de lista
- Feiticeiro: 55 entradas de lista
- Mago: 75 entradas de lista
- Paladino: 3 entradas de lista
- Patrulheiro: 9 entradas de lista

## Verificações executadas

- Todos os 95 registros do Xanathar possuem ID único, nome, nível, escola, classe(s), tempo de conjuração, alcance, componentes, duração, descrição e página de origem.
- Nenhum ID das 95 magias coincide com os IDs do Livro do Jogador ou do Spell Compendium.
- Nenhum nome normalizado das 95 magias coincide com uma magia do catálogo do Livro do Jogador.
- As 31 subclasses apontam apenas para classes-base existentes no Grimório.
- A progressão das subclasses é gerada a partir dos níveis das características e funciona com a consulta dinâmica já existente.
- Artefatos editoriais/OCR identificados em mudanças de página e coluna foram removidos ou corrigidos sem alterar deliberadamente as regras da fonte.
- O `index.html` carrega os arquivos `xanathar-subclasses.js` e `xanathar-spells.js` antes da lógica principal.
- O arquivo `homebrew-paladin-bahamut.js`, que estava presente na versão anterior mas não referenciado pelo `index.html`, voltou a ser carregado.
- Todos os arquivos JavaScript em `js/` e `data/` passaram por `node --check`.

## Totais do projeto após a integração

- 14 classes.
- 83 subclasses.
- 697 registros-base de magias/poderes somando Livro do Jogador, Guia de Xanathar e Spell Compendium.
- 697 IDs únicos nesses três catálogos.
