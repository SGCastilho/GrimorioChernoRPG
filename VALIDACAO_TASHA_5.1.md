# Validação — Grimório 5.1 / Caldeirão de Tasha

## Escopo incorporado

- Classe Artífice adicionada como classe nativa.
- Progressão do Artífice: 20 níveis.
- Especializações de Artífice: 4.
- Subclasses do Caldeirão de Tasha: 30.
- Características de subclasses estruturadas: 167.
- Tabelas auxiliares estruturadas: 13.
- Magias novas do Capítulo 3: 21.
- Total do projeto após a integração: 15 classes, 113 subclasses e 718 registros-base de magias/poderes.

## Verificações executadas

- `node --check` em todos os arquivos JavaScript de `js/` e `data/`.
- 0 IDs duplicados entre classes.
- 0 IDs duplicados entre subclasses.
- 0 IDs duplicados entre as magias do Livro do Jogador, Xanathar, Tasha e Spell Compendium.
- 0 colisões de nome normalizado entre as 21 magias de Tasha e os demais catálogos.
- As quatro especializações do Artífice estão vinculadas à classe `artificer`.
- A tabela de progressão do Artífice contém exatamente 20 linhas.
- O filtro de fonte reconhece `Caldeirão de Tasha`.
- As novas magias funcionam offline em `data/tasha-spells.js`.
- As subclasses ficam em `data/tasha-subclasses.js`.
- A classe e progressão do Artífice ficam em `data/tasha-artificer.js`.

## Normalizações e divergências preservadas

O objetivo foi preservar o PDF fornecido, sem substituir silenciosamente regras por conhecimento externo.

1. **Invocação / Conjuração** — o PDF usa “Invocação” para a escola equivalente a Conjuração. O Grimório usa `Conjuração` para manter a taxonomia já adotada no site, e registra uma nota de fonte nas magias afetadas.
2. **Invocar Fada / Invocar Feérico** — a tabela geral chama a magia de “Invocar Fada”, enquanto o bloco de descrição usa “Invocar Feérico”. O catálogo mantém “Invocar Fada” e documenta a diferença.
3. **Invocar Fera** — a tabela geral marca concentração, enquanto o bloco impresso registra “Duração: 1 hora” e apenas componente V. O Grimório mantém a concentração indicada pela tabela e preserva os componentes do bloco.
4. **Invocar Prole Sombria** — a tabela geral indica 3º círculo e concentração, enquanto o cabeçalho da descrição imprime 8º círculo e duração de 1 hora. O catálogo usa o nível/concentração da tabela geral e registra a divergência.
5. **Artífice — Maestria em Itens Mágicos** — a tabela de progressão coloca a característica no 18º nível, enquanto o corpo do PDF imprime “Característica de 14º nível” e contém o título com erro tipográfico “Mastria”. A progressão estruturada segue a tabela de classe e a regra permanece documentada.
6. **Domínio do Crepúsculo** — o PDF fornecido encerra a subclasse após Golpe Divino (8º nível) e não apresenta uma característica de 17º nível. Nenhuma característica foi inventada para preencher essa ausência.
7. **Domínio da Ordem** — a própria tabela impressa no PDF apresenta “Greyhawk” e “Reinos Esquecidos” nas linhas de 7º e 9º níveis. Esses valores não foram reinterpretados como magias.

## Observação de renderização

O Chromium disponível no ambiente não concluiu a inicialização headless por limitações do barramento do sistema. Por isso, a validação automatizada foi feita por sintaxe JavaScript, integridade dos dados, carregamento dos módulos em VM JavaScript e conferência estrutural das tabelas/IDs.
