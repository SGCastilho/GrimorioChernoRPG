# Validação — Juramento da Lâmina de Bahamut — Grimório 4.9

## Fonte

Arquivo utilizado: `Subclasse Paladino - A Lâmina de Bahamut - Homebrew.pdf`.

A página 2 contém toda a mecânica da subclasse. O cabeçalho do documento usa “Os Lâminas de Bahamut”, enquanto o primeiro parágrafo chama o caminho de “Juramento da Lâmina de Bahamut”. O Grimório usa o segundo como nome da subclasse e preserva o primeiro como título da fonte.

## Conteúdo incorporado

- Classe-base: Paladino.
- Progressão de subclasse: níveis 3, 7, 15 e 20.
- 6 blocos catalogados: Dogmas da Lâmina, Magias de Juramento, Canalizar Divindade, Chamas da Redenção, Alvorada Prometida e O Alvorecer.
- 2 opções de Canalizar Divindade: Presença do Rei Dragão e Arma de Platina.
- 5 linhas da tabela Magias da Lâmina de Bahamut.
- Menção narrativa: Elowen Nightfall registrada como primeira portadora conhecida do juramento.

## Magias citadas pela fonte

A tabela foi preservada com os nomes exatamente apresentados no PDF:

- 3º: Raio Guia; Destruição Flamejante.
- 5º: Sopro do Dragão; Restauração Menor.
- 9º: Voo; Luz do Dia.
- 13º: Salvaguarda contra a Morte; Escudo de Fogo.
- 17º: Onda Destrutiva; Lenda Viva.

Alguns desses nomes não correspondem literalmente aos títulos existentes no catálogo atual ou não possuem uma descrição de magia no PDF da subclasse. Nenhuma regra de magia ausente foi inventada nesta implementação.

## Integração

- Arquivo criado: `data/homebrew-paladin-bahamut.js`.
- Carregado antes de `js/app.js`.
- A subclasse é anexada a `window.GRIMORIO_SUBCLASSES` apenas se ainda não existir, evitando duplicação.
- A página do Paladino passa a listar 4 subclasses.
- A progressão da subclasse é gerada dinamicamente a partir dos níveis das características.
- A tabela de magias aparece na aba **Tabelas** e também na visão geral.
