# Validação de Interface — Grimório 4.6

## Alterações solicitadas

- Corrigida a contenção dos selos de fonte nos cartões de subclasses. Textos longos agora quebram linha e permanecem dentro do cartão.
- Removidos os banners amarelos de “Consulta completa” das visões gerais de classes e subclasses.
- Removidos da interface os botões Exportar, Importar e Sincronizar, incluindo o campo oculto de importação.
- Removido o cartão de status/cache de magias do painel inicial.
- Removidas da interface as rotinas de exportação/importação que ficaram sem ponto de acesso.
- Mantida a sincronização automática interna do catálogo SRD quando necessária, pois ela continua sendo usada para carregar a base em português em uma primeira execução sem cache.

## Verificações técnicas

- Todos os arquivos JavaScript passaram por `node --check`.
- Não existem referências de interface a `.data-tools`, `.mini-btn`, `.overview-guide` ou `syncStatusHtml`.
- `index.html` não possui mais os botões Exportar, Importar ou Sincronizar.
- O painel inicial não renderiza mais o status do cache.
- `.source-badge` agora aceita quebra de linha, `overflow-wrap` e largura máxima de 100%.
- O contêiner textual dos cartões de subclasse possui `min-width: 0`, impedindo estouro em layouts flexíveis.

## Observação de execução

A validação automatizada de captura via Chromium ficou bloqueada pela política do ambiente (`ERR_BLOCKED_BY_ADMINISTRATOR`). Por isso, a validação desta versão foi feita por inspeção estrutural, análise dos seletores e verificação sintática dos scripts.
