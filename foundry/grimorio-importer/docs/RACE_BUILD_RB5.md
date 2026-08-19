# RB-5 — Race Build Bundle v1 no Grimório Importer

A linha `0.13.x` abre o pipeline racial sem materialização imediata. Na **RB-5**, o módulo reconhece o contrato `grimorio-foundry-race-build-bundle@1`, valida identidade/hashes/proveniência/segurança e calcula o diff `NOVO`/`ATUALIZAR` nos compêndios raciais.

## Compêndios preparados

- `grimorio-importer.grimorio-races` — **Grimório — Raças**
- `grimorio-importer.grimorio-racial-features` — **Grimório — Características Raciais**

Eles se somam aos quatro compêndios já existentes. A presença desses destinos nesta fase serve ao preflight e à inspeção. A escrita racial permanece deliberadamente desabilitada.

## Identidade planejada

O Race Item usa `identity.grimorioId` do build. Cada característica racial usa seu `resolved.features.*[].key` como identidade estável e reutilizável. Dessa forma, dois builds que compartilham `Visão no Escuro`/um Legado da mesma origem podem apontar para a mesma característica no futuro sem duplicá-la por personagem.

## O que RB-5 faz

1. Reconhece `Race Build Bundle v1`.
2. Confirma o profile `foundry13-dnd5e533-grimorio-race-build-v1`.
3. Recalcula `selectionHash`, `contentHash` e `grimorioId`.
4. Rejeita payloads com `system`, `effects`, `flags`, macros, hooks ou outros caminhos Foundry arbitrários.
5. Exige `readiness.status=ready`, `canExport=true` e `exportEnabled=true`.
6. Planeja um documento `race` e todas as `racial-feature` resolvidas.
7. Consulta os dois compêndios e mostra `NOVO`/`ATUALIZAR`.
8. Bloqueia a execução visual para Race Builds, mesmo quando o preflight está válido.

## O que RB-5 NÃO faz

- não cria ou atualiza Items raciais;
- não cria Item Grant Advancements;
- não cria Activities/Active Effects raciais;
- não resolve escolhas dependentes do Actor;
- não aplica ou substitui raça em Actor;
- não cria Items gerenciados no Mundo.

Essas responsabilidades começam na **RB-6 — Materialização nativa**.
