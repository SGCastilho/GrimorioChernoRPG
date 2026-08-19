# Race Build Bundle v1 — fixtures RB-4 / RB-6 / RB-7

O contrato continua em `grimorio-foundry-race-build-bundle@1`. A linha 0.13.x do Grimório Importer mantém compatibilidade com envelopes exportados nas fases anteriores e testa também o estado atual da RB-7.

- `human-woodlander-rb4.json`: fixture legado `awaiting-importer`, caminho simples sem Sangue Misto.
- `hanyou-emberash-rb4.json`: fixture legado `awaiting-importer`, caminho complexo Hanyou/Emberash.
- `human-woodlander-rb6.json`: mesmo build no estado `materialization-supported` da RB-6.
- `hanyou-emberash-rb6.json`: mesmo build complexo no estado RB-6.
- `human-woodlander-rb7.json`: build atual `materialization-supported`, consumido pela automação conservadora RB-7.
- `hanyou-emberash-rb7.json`: build complexo atual para regressão de Heritage/automação.

Os hashes de seleção/conteúdo permanecem estáveis entre RB-4, RB-6 e RB-7 porque a evolução do consumidor Foundry não altera a identidade racial escolhida pelo jogador.

## RB-8

- `human-woodlander-rb8.json` — fixture simples com aplicação ao Actor habilitada pelo consumidor `0.13.0-beta.1`.
- `hanyou-emberash-rb8.json` — fixture complexo para o workflow de Advancements e substituição segura de raça.

Os fixtures RB-4/RB-6/RB-7 permanecem para regressão de compatibilidade. A RB-8 não altera `selectionHash`, `contentHash` ou `grimorioId`; somente atualiza a capacidade declarada do consumidor Foundry.
