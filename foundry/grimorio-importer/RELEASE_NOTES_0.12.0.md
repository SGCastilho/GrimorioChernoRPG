# Grimório Importer 0.12.0 — Release Notes

## Escopo

A versão 0.12.0 consolida a Central visual da linha 0.11 e a automação de Talentos desenvolvida nas fases FA-1–FA-5.

## Talentos PHB 2014

- 42/42 Talentos auditados contra o baseline do Grimório D&D 5.42.0.
- 26 Advancements nativos.
- 3 escolhas assistidas vinculadas.
- 22 Activities.
- 10 Active Effects.
- 2 recursos de Uses.
- 56/56 registros de runtime com estratégia conhecida.
- Nenhum Advancement, Effect ou runtime permanece marcado como deferred.

A classificação "assistida" é intencional quando a regra depende de contexto que o Foundry/DnD5e não consegue determinar de forma segura. A versão estável não introduz aproximações globais para aumentar artificialmente a automação.

## Compatibilidade

- Foundry VTT: 13.351 homologado.
- DnD5e: 5.3.3 homologado.
- Feat Bundle/Package v1: compatível em modo legado.
- Feat Bundle/Package v2: automação 0.12 completa conforme contrato FA-1.

## Segurança e reimportação

- Matching estável por `grimorioId`/flags gerenciadas.
- Reimportação atualiza documentos existentes e preserva UUIDs.
- Locks dos compêndios são restaurados após operações.
- Nenhum Item gerenciado é criado automaticamente no Mundo.
- Importação visual exige preflight e confirmação explícita.

## Feature freeze

A build estável usa `channel: stable` e `featureFreeze: true`. Alterações futuras de comportamento devem avançar para uma nova versão de desenvolvimento em vez de serem incorporadas silenciosamente à 0.12.0.
