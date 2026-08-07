# Validação — Magias do Livro do Jogador — Grimório 4.8

## Escopo

O catálogo oficial foi reconstruído diretamente do Capítulo 11 do PDF `D_D5e - Livro do Jogador.pdf`.

- Magias oficiais estruturadas: **361**
- IDs oficiais únicos: **361**
- Nomes oficiais únicos: **361**
- Magias sem descrição: **0**
- Magias sem classe: **0**
- Dependência de sincronização para o catálogo oficial: **nenhuma**

## Distribuição por nível

| Nível | Quantidade |
|---|---:|
| Truques | 27 |
| 1º | 62 |
| 2º | 59 |
| 3º | 50 |
| 4º | 35 |
| 5º | 42 |
| 6º | 32 |
| 7º | 20 |
| 8º | 18 |
| 9º | 16 |
| **Total** | **361** |

## Distribuição por escola

| Escola | Quantidade |
|---|---:|
| Abjuração | 45 |
| Adivinhação | 30 |
| Conjuração | 59 |
| Encantamento | 34 |
| Evocação | 74 |
| Ilusão | 28 |
| Necromancia | 27 |
| Transmutação | 64 |
| **Total** | **361** |

## Associações de classe

| Classe | Magias no Livro do Jogador |
|---|---:|
| Bardo | 120 |
| Bruxo | 74 |
| Clérigo | 106 |
| Druida | 110 |
| Feiticeiro | 129 |
| Mago | 215 |
| Paladino | 45 |
| Patrulheiro | 46 |

Uma magia pertencente a várias classes conta uma vez em cada lista de classe, por isso a soma desta tabela é superior a 361.

## Verificação solicitada

`Braços de Hadar` está incorporada como:

- 1º nível
- Conjuração
- Classe: Bruxo
- Alcance: Pessoal (3 metros de raio)
- Fonte: Livro do Jogador, p. 224
- Texto de níveis superiores separado no campo próprio

## Divergências internas encontradas no PDF

Foram encontradas três divergências entre as listas de classe do Capítulo 11 e o cabeçalho da descrição da magia. Elas não foram corrigidas silenciosamente; cada registro possui uma nota de fonte.

1. **Falar com Plantas**
   - Listas de classe: 3º nível de Transmutação, sem ritual.
   - Cabeçalho da descrição: 1º nível de Adivinhação (ritual).
   - Grimório: usa a classificação consistente das listas de classe.

2. **Muralha de Pedra**
   - Listas de classe: 5º nível de Evocação.
   - Cabeçalho da descrição: 5º nível de Conjuração.
   - Grimório: usa a classificação das listas de classe.

3. **Telepatia**
   - Lista de Mago: 8º nível de Evocação.
   - Cabeçalho da descrição: 8º nível de Adivinhação.
   - Grimório: usa a classificação da lista de Mago.

## Integração com os catálogos já existentes

- Livro do Jogador: **361** registros oficiais.
- Spell Compendium: **241** registros no arquivo do projeto, sendo 240 entradas completas e 1 referência incompleta preservada.
- Catálogo-base carregado pelo site, sem conteúdo criado pelo usuário: **602 registros**.
- Os antigos dados SRD/cache não são mais usados para montar o catálogo oficial, evitando que as mesmas magias apareçam duas vezes.

Existe uma colisão de tradução entre duas magias diferentes chamadas `Nevasca`: a magia oficial do Livro do Jogador e `Blizzard` do Spell Compendium. Elas foram preservadas como entradas distintas porque possuem regras, nível e fonte diferentes; a entrada do Spell Compendium continua exibindo o nome original para desambiguação.

## Validações técnicas

- `node --check` executado em todos os arquivos de `js/` e `data/`.
- `manifest.json` validado como JSON.
- `data/phb-spells.js` carregado via Node e conferido com 361 registros.
- Nenhum ID duplicado entre o catálogo do Livro do Jogador e o Spell Compendium.
