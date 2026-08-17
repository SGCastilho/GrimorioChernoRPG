# Grimório Admin 5.55.1

O Grimório Admin é um CMS Git-backed para artes, metadados de classes/subclasses, talentos e raças/subraças, com histórico read-only dos commits administrativos. O navegador nunca recebe hash de senha, segredo de sessão ou token do GitHub. Em Production, uma gravação válida cria um commit no repositório configurado; o GitHub permanece como fonte de verdade e a Vercel publica o commit no deployment seguinte.

## Arquitetura do MVP

```text
/admin (HTML/CSS/JS sem secrets)
  → /api/admin/login | session | logout | class-art | class-metadata | feat | race | history
  → sessão HMAC + CSRF + validação server-side
  → editor estrutural AST Acorn
  → RepositoryService
      ├─ MockRepositoryService (Development e Preview)
      └─ GitHubRepositoryService (Production explicitamente habilitada)
  → GitHub Git Data API: blobs → árvore → commit → ref force:false
```

A allowlist server-side fixa liga cada editor somente aos arquivos conhecidos. O cliente nunca envia caminhos. A transformação substitui apenas valores literais autorizados, reanalisa o JavaScript e confirma que outras entidades e campos não mudaram.

As classes vêm de `manifest.classIndex`, que o gate do projeto valida contra `GRIMORIO_CLASSES`. Não existe uma lista manual própria do Admin.

## Metadados de classes e subclasses

`/admin/class-metadata` descobre as 27 classes e 382 subclasses diretamente nos 22 arquivos de conteúdo autorizados. O módulo não aceita paths, IDs novos nem alterações estruturais.

- Classes: nome, nome original, descrição, dado de vida, habilidade principal, salvaguardas, armaduras, armas, ferramentas, perícias, chave de sigilo, cor, página da tabela e fonte.
- Subclasses: nome, nome original, descrição, página principal e fonte.
- Protegidos: `id`, `classId`, aliases, features, progressões, tabelas, referências, automações, exporters e Foundry.

Ao renomear uma classe, o servidor sincroniza os três índices derivados do manifesto (`classIndex`, `classNames` e `subclassCounts`) no mesmo commit. Uma subclasse legada sem bloco `source` pode recebê-lo somente se título, páginas e capítulo forem preenchidos juntos.

## Editor de talentos

`/admin/feats` carrega os três catálogos registrados diretamente dos arquivos reais:

- `data/feats/phb-2014-feats.js` — 42 talentos;
- `data/feats/ryoko-yokai-realms-feats.js` — 39 talentos;
- `data/feats/lyre-retia-feats.js` — 28 talentos.

O cliente envia somente o ID do talento, campos alterados e hash da revisão. O path é resolvido pela allowlist no servidor. São editáveis nome, nome original, aliases, categoria, página, descrição, pré-requisitos, repetibilidade e escolhas. `id`, `sourceId`, catálogo e os perfis de automação Foundry não são editáveis.

Os campos avançados `prerequisites` e `choices` são exibidos como arrays JSON para preservar todas as variações existentes. O servidor aplica um esquema estrito, limita tamanhos/profundidade, recusa chaves desconhecidas e exige que o texto de pré-requisito e sua estrutura sejam adicionados ou removidos juntos. O preview é exclusivamente local e não persiste dados.

## Editor de raças e subraças

`/admin/races` carrega as 42 raças e 368 subraças dos nove arquivos raciais autorizados. O editor não mantém índice manual: as entidades, vínculos e proprietários dos campos são descobertos estruturalmente por AST.

- Raças: nome, nome original, página, resumo, aumento de atributos, tipos de criatura, expectativa de vida, alinhamento nacional, origem planar, planetouched, regiões, tamanho, tendência, idiomas e deslocamento.
- Subraças: nome, página, aumento de atributos e descrição.
- Protegidos: `id`, `raceId`, nome original das subraças que geram ID, fonte, `sourceId`, revisão textual, lore, traços fixos, Traços de Legado, Sangue Misto, heranças, magias e estruturas especiais.

O catálogo racial é composto por camadas. Lyre define a base e aplica revisões nas Fases 2–4; Blade usa a fábrica `S(...)`; Zagalhta usa objetos literais e anexos agrupados por raça. O backend reconhece essas formas sem `eval`, grava cada valor no arquivo que realmente prevalece em runtime, reanalisa todos os arquivos e confirma que nenhuma outra entidade mudou. Uma alteração que atinja base e fase gera um único commit. Ao renomear uma raça, `manifest.raceIndex` é sincronizado no mesmo commit.

## Histórico read-only

Em Production com modo `github`, `/admin/history` consulta os 100 commits mais recentes da branch configurada e retorna até 50 commits cujo assunto começa com `Grimório Admin:`. A filtragem e a redução dos campos acontecem no servidor; o navegador recebe somente SHA, assunto, autor sem e-mail, data, estado de verificação e URL construída para o repositório configurado.

O endpoint `GET /api/admin/history` exige sessão administrativa. A operação de listagem requer apenas `Contents: Read`, já incluída na permissão `Contents: Read and write` usada pelo editor. Nenhuma variável ou permissão adicional é necessária.

Development e Preview em modo `mock` não consultam o GitHub e não fabricam dados de histórico. A página mostra esse estado explicitamente.

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

O `vercel.json` registra rewrites de `/admin`, cabeçalhos de segurança e inclusão dos arquivos allowlisted lidos pelas Functions. Não existe banco de dados nem segunda fonte de conteúdo.

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

Abra `http://127.0.0.1:3000/admin`, faça login e teste Artes ou Metadados. Salvar deve informar “Simulação concluída”; nenhum arquivo deve mudar no disco e, após recarregar, os valores originais devem retornar.

Em `/admin/history`, o ambiente local deve informar que a consulta está desativada no modo mock.

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
9. abra `/admin/history` e confirme que o novo commit aparece na listagem;
10. se necessário, reverta pelo histórico normal do GitHub.

## Limitações atuais

- um administrador e uma senha, sem papéis ou recuperação de senha;
- sem upload binário: apenas URL HTTPS permitida ou arquivo `assets/` já versionado;
- histórico sem paginação: considera os 100 commits mais recentes da branch e exibe até 50 commits administrativos;
- sem fluxo por pull request para branch protegida;
- sem rate limit distribuído; recomenda-se configurar Vercel Firewall para limitar tentativas de login;
- features, progressões, tabelas e referências de classes ainda não são editáveis;
- o editor de talentos não modifica os perfis de automação Foundry; alterações mecânicas devem respeitar o contrato já existente do exporter;
- o editor racial não altera traços, regras globais ou estruturas especiais; mudanças mecânicas continuam sendo feitas e validadas diretamente nos arquivos de conteúdo;
- próximos editores devem criar validadores e serializadores próprios, reutilizando autenticação, cliente API e `RepositoryService`.
