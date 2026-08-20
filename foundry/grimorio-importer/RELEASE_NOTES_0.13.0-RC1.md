# Grimório Importer 0.13.0-rc.1 — Release Notes

A `0.13.0-rc.1` congela RB-1–RB-8 para homologação final em **Foundry VTT 13.351 + DnD5e 5.3.3**. O `Race Build Bundle v1` permanece inalterado.

O RC inclui seis compêndios, preflight, materialização racial nativa, automação conservadora, aplicação ao Actor via `AdvancementManager`, confirmação explícita de substituição e rollback assistido da Race anterior quando a nova aplicação é cancelada após a remoção.

## Stable não é auto-certificado

O módulo não marca a homologação in-app automaticamente. `readyForStable` só passa quando um Mestre registra os 12 itens do checklist em uma instância real compatível. O estado esperado antes desse teste é `readyForRc=true` e `readyForStable=false`.
