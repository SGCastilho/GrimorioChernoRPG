# Grimório Admin 5.51.0

O Grimório Admin é um CMS Git-backed para Cover e Detail Art das classes. O navegador nunca recebe hash de senha, segredo de sessão ou token do GitHub. Em Production, uma gravação válida cria um commit no repositório configurado; o GitHub permanece como fonte de verdade e a Vercel publica o commit no deployment seguinte.

## Arquitetura do MVP

```text
/admin (HTML/CSS/JS sem secrets)
  → /api/admin/login | session | logout | class-art
  → sessão HMAC + CSRF + validação server-side
  → editor estrutural AST Acorn
  → RepositoryService
      ├─ MockRepositoryService (Development e Preview)
      └─ GitHubRepositoryService (Production explicitamente habilitada)
  → GitHub Git Data API: blobs → árvore → commit → ref force:false
```

A allowlist server-side fixa liga o editor somente a `data/class-covers.js` e `data/class-detail-art.js`. O cliente não envia caminhos. A transformação substitui apenas os valores literais da entrada escolhida, reanalisa o JavaScript e confirma que outros IDs e campos não mudaram.

As classes vêm de `manifest.classIndex`, que o gate do projeto valida contra `GRIMORIO_CLASSES`. Não existe uma lista manual própria do Admin.

## Variáveis de ambiente

Use `.env.example` apenas como referência. Nunca versione `.env`, `.env.local`, tokens, senhas ou valores reais.

| Variável | Obrigatória | Uso |
|---|---:|---|
| `GRIMORIO_ADMIN_PASSWORD_HASH` | Sim | Hash scrypt gerado pelo utilitário; não use a senha em texto puro. |
| `GRIMORIO_SESSION_SECRET` | Sim | Segredo aleatório de no mínimo 32 caracteres para sessão e CSRF. |
| `GRIMORIO_ADMIN_WRITE_MODE` | Sim | `mock` ou `github`; valores inesperados resultam em `mock`. |
| `GRIMORIO_ADMIN_IMAGE_HOSTS` | Não | Hosts HTTPS extras, separados por vírgula. Imgur já é permitido. |
| `GITHUB_TOKEN` | Em escrita real | Fine-grained PAT limitado ao repositório. |
| `GITHUB_OWNER` | Em escrita real | Organização ou usuário proprietário. |
| `GITHUB_REPO` | Em escrita real | Nome do repositório, sem owner. |
| `GITHUB_BRANCH` | Em escrita real | Branch de produção conectada à Vercel. |

`GRIMORIO_ADMIN_WRITE_MODE=github` somente é aceito quando a Vercel define `VERCEL_ENV=production`. Development, Preview e execuções locais são forçadas para `mock`, mesmo que a variável esteja incorreta.

## Gerar ou trocar a senha

Com Node.js 22 e as dependências instaladas:

```sh
npm run admin:hash-password
```

Informe e confirme uma senha de 12 a 256 caracteres. O terminal imprime somente o valor `scrypt$...`. Grave-o em `GRIMORIO_ADMIN_PASSWORD_HASH`.

Gere `GRIMORIO_SESSION_SECRET` com um gerador criptográfico usando pelo menos 32 bytes aleatórios. Trocar o hash da senha ou o segredo de sessão invalida todas as sessões emitidas anteriormente. Depois da troca na Vercel, faça um novo deployment.

## Configuração do GitHub

Crie um fine-grained personal access token com:

- acesso somente ao repositório do Grimório;
- Repository permissions → `Contents: Read and write`;
- `Metadata: Read`, concedida implicitamente;
- nenhuma permissão para Actions, Administration, Issues, Pull Requests ou Workflows.

Configure `GITHUB_BRANCH` com a mesma Production Branch do projeto Vercel. A API lê o HEAD atual, cria blobs, uma árvore baseada na árvore atual, um commit cujo pai é o HEAD lido e atualiza a referência com `force:false`.

Há duas proteções contra concorrência:

1. o hash da entrada impede salvar se a mesma classe mudou depois que o editor foi aberto;
2. a atualização fast-forward impede sobrescrever um commit criado durante a requisição.

Branches com regra que proíbe commits diretos recusarão a operação. Fluxo por pull request não faz parte deste MVP.

Para revogar o acesso, exclua o PAT no GitHub e remova `GITHUB_TOKEN` da Vercel. A interface poderá continuar acessível, mas gravações reais falharão sem expor a credencial.

## Configuração na Vercel

Em **Settings → Environment Variables**, configure por ambiente:

### Production

1. Adicione `GRIMORIO_ADMIN_PASSWORD_HASH` e `GRIMORIO_SESSION_SECRET`.
2. Comece com `GRIMORIO_ADMIN_WRITE_MODE=mock` e valide login/editor.
3. Adicione `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` e `GITHUB_BRANCH`.
4. Confirme que a Production Branch é a mesma de `GITHUB_BRANCH`.
5. Troque para `GRIMORIO_ADMIN_WRITE_MODE=github` e faça novo deployment.

### Preview

Configure hash, segredo e `GRIMORIO_ADMIN_WRITE_MODE=mock`. Não disponibilize `GITHUB_TOKEN` para Preview.

### Development

Use `.env.local`, nunca versionado, com hash, segredo e `GRIMORIO_ADMIN_WRITE_MODE=mock`. Tokens GitHub não são necessários.

O `vercel.json` registra rewrites de `/admin`, cabeçalhos de segurança e inclusão dos três arquivos lidos pelas Functions. Não existe banco de dados nem segunda fonte de conteúdo.

## Teste local

```sh
npm install
npm run admin:hash-password
npm run admin:dev
```

Antes do último comando, crie `.env.local` com valores reais apenas para seu computador:

```dotenv
GRIMORIO_ADMIN_PASSWORD_HASH=scrypt$...
GRIMORIO_SESSION_SECRET=um-segredo-local-com-32-ou-mais-caracteres
GRIMORIO_ADMIN_WRITE_MODE=mock
```

Abra `http://127.0.0.1:3000/admin`, faça login, selecione uma classe e teste o preview. Salvar deve informar “Simulação concluída”; nenhum mapa deve mudar no disco e, após recarregar, os valores originais devem retornar.

Validações:

```sh
npm run test:admin
npm run validate:admin
npm run validate
npm run test:foundry
```

## Primeiro smoke test de Production

O primeiro commit real deve ser feito somente depois da revisão do código e da configuração privada:

1. acesse `/admin` no domínio de Production;
2. faça login e confirme o selo “Escrita GitHub”;
3. escolha uma classe e altere um único valor de forma intencional;
4. confira o resumo antiga → nova e confirme;
5. verifique a mensagem `Grimório Admin: atualiza artes de <classId>` no GitHub;
6. confirme que somente a entrada e os campos escolhidos mudaram;
7. acompanhe o deployment automático da Vercel;
8. confirme a imagem no site público;
9. se necessário, reverta pelo histórico normal do GitHub.

## Limitações atuais

- um administrador e uma senha, sem papéis ou recuperação de senha;
- sem upload binário: apenas URL HTTPS permitida ou arquivo `assets/` já versionado;
- histórico é um placeholder, sem consulta de commits;
- sem fluxo por pull request para branch protegida;
- sem rate limit distribuído; recomenda-se configurar Vercel Firewall para limitar tentativas de login;
- próximos editores devem criar validadores e serializadores próprios, reutilizando autenticação, cliente API e `RepositoryService`.
