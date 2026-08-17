# Auditoria — Grimório Admin 5.48.0

## Escopo preservado

- Os 27 registros existentes de Cover e os 27 registros de Detail Art não foram modificados.
- Classes, subclasses, raças, magias, talentos, equipamentos, exportadores e `foundry/grimorio-importer` permanecem fora do escopo.
- O novo `manifest.classIndex` é derivado dos IDs e nomes atuais de `GRIMORIO_CLASSES` e validado contra os dois mapas.

## Segurança verificada

- Nenhum secret é referenciado pelo HTML ou JavaScript do navegador.
- Senha armazenada somente como hash scrypt server-side; sessão HMAC de oito horas em cookie HttpOnly/SameSite Strict/Secure em Production.
- Login e escrita exigem same-origin; logout e escrita também exigem token CSRF vinculado à sessão.
- API usa payload máximo de 4 KiB no login e 16 KiB na edição, validação exata de campos e allowlist fixa de arquivos.
- Editor AST não usa `eval`, `vm` nem paths fornecidos pelo cliente; reanalisa a saída e verifica preservação das outras entradas.
- GitHub PAT permanece server-side; erros externos são convertidos em mensagens públicas sem corpo upstream.
- Escrita real é fail-closed e só pode ser ativada em `VERCEL_ENV=production`.

## Auditoria visual e acessível

- Login, Dashboard, Artes de Classes e Histórico compartilham navegação e identidade visual própria do Grimório.
- Campos possuem labels, modal usa `dialog`, mensagens usam regiões live e a navegação possui skip link e foco de rota.
- Layout foi definido para desktop, tablet (800 px) e mobile (520 px), sem grid de largura fixa.
- Preview fica contido em cards com overflow protegido; ações críticas exigem confirmação por diferenças.
- `prefers-reduced-motion` desativa transições relevantes.

### Resultado do smoke test local

- Login, consulta de sessão e logout concluídos usando os handlers reais do servidor local.
- Editor carregou exatamente 27 opções derivadas do manifesto; Salvar iniciou desabilitado.
- Alterar Cover habilitou Salvar, o preview mudou apenas o DOM e o modal exibiu `0.8 → 0.72` para Feiticeiro.
- A confirmação em mock retornou sucesso, desabilitou Salvar e, após recarregar, o valor original `0.8` foi restaurado.
- Nenhum erro ou aviso foi registrado no console durante o fluxo.
- Em viewport de 390 × 844 px, `scrollWidth` permaneceu menor que `innerWidth`, sem overflow horizontal; a barra de ações foi mantida estática para não cobrir campos.

## Validação manual de Production pendente

O commit real e o deployment público dependem das variáveis privadas do proprietário. O roteiro de smoke test está em `docs/GRIMORIO-ADMIN.md` e deve ser executado depois da configuração Vercel/GitHub.
