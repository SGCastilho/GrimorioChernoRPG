# Grimório Admin 5.49.0

O Grimório Admin é um CMS Git-backed para os mapas de Cover e Detail Art de classes e raças. O navegador nunca recebe senha, hash de senha, segredo de sessão ou token do GitHub. Em Production, uma gravação válida cria um único commit no repositório configurado; o GitHub permanece como fonte de verdade e a Vercel publica o commit no deployment seguinte.

## Arquitetura do MVP

```text
/admin (HTML/CSS/JS sem secrets)
  → /api/admin/login | logout | session | class-art | race-art
  → autenticação HMAC + CSRF
  → validação e editor AST Acorn
  → RepositoryService
      ├─ MockRepositoryService (padrão)
      └─ GitHubRepositoryService (somente Production)
  → GitHub Git Data API: blobs → árvore → commit → ref (force:false)
```

A allowlist server-side fixa liga cada editor aos seus dois mapas: `data/class-covers.js`/`data/class-detail-art.js` para classes e `data/race-covers.js`/`data/race-detail-art.js` para raças. O cliente não envia caminhos. A edição substitui apenas nós literais da entrada escolhida, reanalisa o JavaScript resultante e confirma que outras classes, raças e campos não mudaram.

Imagens raciais exigem uma descrição acessível. Cover aceita `image`, `alt` e `position`; Detail Art acrescenta `scale` entre 1 e 1,25. Entradas sem imagem continuam válidas e usam o placeholder público.

## Variáveis de ambiente

Copie `.env.example` apenas como referência. Nunca versione `.env`, `.env.local`, tokens ou valores reais.

| Variável | Obrigatória | Uso |
|---|---:|---|
| `GRIMORIO_ADMIN_PASSWORD_HASH` | Sim | Hash scrypt gerado pelo utilitário; nunca use a senha em texto puro. |
| `GRIMORIO_SESSION_SECRET` | Sim | Segredo aleatório de no mínimo 32 caracteres para assinar sessão e CSRF. |
| `GRIMORIO_ADMIN_WRITE_MODE` | Sim | `mock` ou `github`; qualquer valor inesperado resulta em mock. |
| `GRIMORIO_ADMIN_IMAGE_HOSTS` | Não | Hosts HTTPS extras separados por vírgula; Imgur já é permitido. |
| `GITHUB_TOKEN` | Em escrita real | Fine-grained PAT do repositório. |
| `GITHUB_OWNER` | Em escrita real | Organização ou usuário proprietário. |
| `GITHUB_REPO` | Em escrita real | Nome do repositório, sem owner. |
| `GITHUB_BRANCH` | Em escrita real | Branch publicada pela Vercel. |

`GRIMORIO_ADMIN_WRITE_MODE=github` só tem efeito quando `VERCEL_ENV=production`. Development e Preview são forçados para mock mesmo se a variável estiver incorreta. Em mock, autenticação, validação, parsing e transformação são executados em memória, sem escrita local e sem chamada ao GitHub.

## Gerar ou trocar a senha

Após `npm install`, execute:

```sh
npm run admin:hash-password
```

Informe e confirme uma senha de pelo menos 12 caracteres. O terminal imprime somente o valor `scrypt$...`. Grave esse valor em `GRIMORIO_ADMIN_PASSWORD_HASH`. Ao trocar o hash, todas as sessões anteriores são invalidadas. Alterações de variáveis da Vercel exigem novo deployment.

Gere `GRIMORIO_SESSION_SECRET` com um gerador criptográfico, usando pelo menos 32 bytes aleatórios. Rotacionar esse segredo também encerra todas as sessões.

## Configuração do GitHub

Crie um fine-grained personal access token limitado exclusivamente ao repositório do Grimório, com:

- Repository permissions → `Contents: Read and write`;
- Repository permissions → `Metadata: Read` (incluído pelo GitHub);
- sem permissões de Actions, Administration, Issues ou Pull Requests.

Configure `GITHUB_BRANCH` com a mesma Production Branch definida no projeto Vercel. A API lê o HEAD atual, cria blobs, cria uma árvore baseada na árvore atual, cria um commit com o pai atual e atualiza a referência com `force:false`. Se a entrada da classe mudou desde que o editor abriu, responde `409 CONFLICT`. Se apenas outro trecho do arquivo mudou, reaplica a edição sobre a revisão mais recente.

Para revogar o acesso, exclua o PAT nas configurações do GitHub e remova `GITHUB_TOKEN` da Vercel. O Admin continuará acessível, mas a escrita real falhará explicitamente até ser reconfigurada. Branches que proíbem commits diretos também produzirão erro explícito; fluxo por pull request não faz parte deste MVP.

## Configuração na Vercel

No projeto Vercel, abra Settings → Environment Variables:

### Production

Configure todas as variáveis. Comece com `GRIMORIO_ADMIN_WRITE_MODE=mock`, valide login e editor, e só então altere para `github` e faça novo deployment. O repositório Git conectado à Vercel e `GITHUB_BRANCH` devem apontar para a branch de produção.

### Preview

Configure `GRIMORIO_ADMIN_PASSWORD_HASH`, `GRIMORIO_SESSION_SECRET` e `GRIMORIO_ADMIN_WRITE_MODE=mock`. Tokens GitHub não são necessários e preferencialmente não devem ser expostos a Preview.

### Development

Use valores locais não versionados e `GRIMORIO_ADMIN_WRITE_MODE=mock`. O mesmo bloqueio server-side impede escrita real.

O arquivo `vercel.json` registra rewrites de `/admin`, cabeçalhos CSP/no-store e as cinco Functions. Não é necessário configurar uma segunda fonte de dados.

## Teste local

1. Instale Node.js 20 ou superior e execute `npm install`.
2. Gere o hash com `npm run admin:hash-password`.
3. Crie `.env.local` com hash, segredo de sessão e `GRIMORIO_ADMIN_WRITE_MODE=mock`.
4. Execute `npm run admin:dev`. Como alternativa, a Vercel CLI também pode executar o projeto com `vercel dev`.
5. Abra `http://127.0.0.1:3000/admin`.
6. Faça login, abra Artes de Classes ou Artes de Raças, escolha uma entrada, altere campos e use Pré-visualizar.
7. Confirme que nenhuma requisição POST ocorre no preview; Salvar deve informar “Simulação concluída” e nenhum arquivo deve mudar.

Comandos de validação:

```sh
npm run test:admin
npm run validate:admin
npm run validate
```

## Smoke test de Production

Depois de configurar os secrets e ativar `github` apenas em Production:

1. escolha uma classe e faça uma alteração pequena e intencional;
2. confirme o resumo antiga → nova;
3. verifique a mensagem de commit `Grimório Admin: atualiza artes de <classId>`;
4. confirme no GitHub que somente os campos solicitados mudaram e ambos os mapas, quando aplicável, estão no mesmo commit;
5. acompanhe o deployment automático da Vercel;
6. confirme a nova imagem no site público;
7. se necessário, reverta pelo histórico normal do GitHub.

## Limites atuais

- um administrador e uma senha, sem recuperação de senha ou papéis;
- sem upload de imagem: somente path `assets/` ou URL HTTPS permitida; novos arquivos locais precisam ser versionados antes de serem escolhidos;
- Histórico é um placeholder registrado no roteador;
- sem fluxo por pull request para branch protegida;
- sem rate limiting distribuído; use Vercel Firewall para proteção adicional;
- os próximos editores devem definir serializers e allowlists próprios, reutilizando autenticação, cliente API e RepositoryService.
