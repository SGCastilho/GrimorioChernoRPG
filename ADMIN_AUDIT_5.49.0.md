# Auditoria — Grimório Admin 5.49.0

## Escopo

O Admin 5.49.0 amplia o CMS Git-backed para os mapas `data/race-covers.js` e `data/race-detail-art.js`, preservando autenticação, CSRF, modo mock, allowlist server-side, edição AST e commits GitHub sem `force` já usados pelas classes.

## Garantias verificadas

- `manifest.raceIndex` corresponde às 42 entradas reais de `GRIMORIO_RACES`.
- Cada raça possui entradas literais nos dois mapas de arte.
- O endpoint `/api/admin/race-art` não recebe caminhos de arquivo arbitrários.
- Uma imagem racial exige descrição acessível e aceita somente `assets/` ou HTTPS autorizado.
- Mudanças concorrentes na mesma entrada retornam `409 CONFLICT`.
- Cover e Detail Art alteradas juntas são gravadas no mesmo commit.
- Development e Preview permanecem obrigatoriamente em modo mock.
- O frontend não contém secrets nem persiste credenciais ou rascunhos.

## Limites mantidos

- Não há upload binário: arquivos locais devem existir previamente em `assets/`.
- Não há papéis, recuperação de senha ou fluxo por pull request.
- Histórico continua sendo um módulo reservado para evolução futura.
