## 5.47.0

### Conteúdo — Antecedentes · Livro do Jogador 2014
- Adicionada a seção **Antecedentes** imediatamente depois de **Raças e Subraças**, com 18 entradas do Capítulo 4: 13 antecedentes-base e 5 variações independentes.
- Integrados Acólito, Artesão de Guilda, Artista, Charlatão, Criminoso, Eremita, Forasteiro, Herói do Povo, Marinheiro, Nobre, Órfão, Sábio e Soldado, além de Mercador de Guilda, Gladiador, Espião, Pirata e Cavaleiro.
- Cada ficha reúne procedência, páginas impressas, perícias, ferramentas, idiomas, equipamento, característica, tabelas auxiliares e tabelas completas de traços, ideais, vínculos e defeitos.
- Variações usam `variantOf` e alterações explícitas; a interface resolve a herança antes de exibir e pesquisar, identificando tabelas herdadas.
- Incluídas as regras gerais de proficiências, idiomas, equipamento, características sugeridas e personalização de antecedentes das páginas 127–128. Inspiração permanece fora da seção.

### Interface e arquitetura
- Adicionadas as rotas `#/backgrounds` e `#/background/<id>`, título contextual da guia, copiar link e navegação nativa Voltar/Avançar.
- O catálogo oferece busca textual e filtros por tipo, perícia e fonte, com contadores de entradas, bases, variações e fontes.
- A busca Ctrl/Cmd+K reconhece nomes em português e inglês, perícias, ferramentas, característica, equipamento e conteúdo das tabelas.
- Os itens estáticos da navegação foram centralizados em `js/static-nav.js`, removendo a lista duplicada entre a interface base e `ui-enhancements`.
- Adicionados estilos responsivos, tabelas com rolagem horizontal segura, semântica de tabela e integração com Spotlight Cards e `prefers-reduced-motion`.
- Não foi adicionada exportação Foundry nem formulário de antecedente próprio nesta versão.

### Validação
- O validador unificado agora verifica fontes, IDs, páginas, campos obrigatórios, duplicações, tabelas e resolução das variações.
- Criado `tools/validate-backgrounds-5.47.js` para confirmar 18 entradas, 13 bases, 5 variações, 16 perícias e as cinco substituições mecânicas.

## 5.46.0

### Conteúdo — Raças e Subraças · Somnus Domina — Zagalhta's Exolunar Collection
- Auditado integralmente o bloco racial do **Capítulo 5 — Character Options** da edição fornecida: regras raciais nas páginas 61–62, cinco raças-base nas páginas 63–76 e subraças adicionais nas páginas 77–110.
- Adicionadas **5 raças-base** em PT-BR: **Metamorfo (Changeling)**, **Galvan**, **Protovida (Protolife)**, **Scourage** e **Sunling**, preservando lore, traços fixos, Traços de Legado, Sangue Misto, nomes originais e páginas.
- A fonte adiciona **82 novas subraças**: **15** vinculadas às novas raças e **67** opções exolunares para **31 raças-base** já existentes. Metamorfo permanece sem subraças, como declarado explicitamente pelo livro.
- Integrados os cinco **Traços de Legado Exolunares Universais** da página 62: Pulmões Cósmicos, Salto Gravitacional, Resistência Espacial, Magia do Vazio e Movimento 0-G.
- Estruturas especiais foram preservadas: Heranças positivas/prejudiciais de Hanyou, Magia Elemental de Primordia, Legado Amaldiçoado de Hádislin, magias de Firbolg e a tabela d12 de mutações do Orc Mutaliate.
- O catálogo racial passa de **37 para 42 raças**, de **286 para 368 subraças** e de **1.266 para 1.615 registros mecânicos**.
- A interface racial agora representa corretamente uma raça sem subraças e torna visível a existência dos Traços de Legado Exolunares Universais.
- Mantida a arquitetura `GRIMORIO_RACES` / `GRIMORIO_RACE_RULES`; não foi criada exportação Foundry para raças, pois o Grimório Importer 0.12.0 não possui contrato para essa categoria.

### Validação
- Criado `tools/validate-zagalhta-races-5.46.js` para conferir as cinco raças-base, as 82 subraças da fonte, as 67 associações com raças preexistentes, páginas, provenance, estruturas especiais e ordem de carregamento.
- O gate geral `tools/validate-project.js` permanece sem avisos após a expansão.

## 5.45.0

### Conteúdo — Raças e Subraças · Somnus Domina — Blade, Bone, & Benefit
- Integrado integralmente o **Capítulo VII — Races & Subraces** da edição fornecida, páginas 25–62: **3 raças novas**, cada uma com **3 subraças**, e **81 subraças adicionais** para raças publicadas anteriormente, totalizando **90 novas subraças**.
- Adicionadas as raças **Animus**, **Drackal** e **Noxiamorfo (Noxiamorph)**, com traços raciais fixos, Traços de Legado, regras de Sangue Misto, Bloodline Traits e as três subraças de cada raça traduzidos integralmente para PT-BR.
- As 81 subraças adicionais foram vinculadas às respectivas raças-base de *Lyre's Guide to Retia* sem duplicar as raças existentes; cada entrada preserva `originalName`, fonte, página e texto mecânico integral.
- O catálogo racial passa de **34 para 37 raças** e de **196 para 286 subraças**. Os **928 registros mecânicos** anteriores passam a **1.266 registros** após a integração.
- A interface de subraças passa a exibir a fonte específica da própria subraça quando ela difere da fonte da raça-base, permitindo que opções de Blade, Bone, & Benefit apareçam corretamente dentro das raças de Lyre.
- Distâncias no conteúdo traduzido foram localizadas para o padrão métrico do Grimório, mantendo a equivalência mecânica da fonte.
- Mantida a arquitetura racial existente (`GRIMORIO_RACES` / `GRIMORIO_RACE_RULES`); não foi criada uma rota Foundry para raças, pois o Grimório Importer 0.12.0 ainda não possui contrato de importação para essa categoria.

### Validação
- Criado `tools/validate-blade-bone-benefit-races-5.45.js` para conferir as 3 raças novas, as 90 subraças da fonte, páginas, nomes originais, textos mecânicos, grupos especiais de Hanyou e integração no `index.html`.
- `tools/validate-project.js` passa a validar também IDs e estrutura básica do catálogo racial no gate geral do projeto.

## 5.44.0

### Conteúdo — Talentos · Lyre's Guide to Retia — Land of Industry
- Integrados integralmente os **28 talentos** da seção *Feats of Somnus Domina* do Capítulo VII, páginas 331–335 da edição fornecida.
- Todos os nomes, pré-requisitos e textos mecânicos foram traduzidos para **português brasileiro**, preservando `originalName`, aliases, página da fonte, escolhas estruturadas e repetibilidade.
- O catálogo de Talentos passa de **81 para 109 entradas** e de **2 para 3 catálogos**, mantendo PHB 2014, Ryoko e Lyre separados por fonte.
- Distâncias foram localizadas para o padrão métrico do Grimório, preservando a equivalência mecânica da fonte.
- A nota editorial de **Conjuração por Sinais** para personagens incapazes de falar desde a criação foi preservada junto ao talento, conforme a composição visual da página original.

### Foundry — Talentos de Lyre
- Os 28 talentos recebem **perfis explícitos `description`** no contrato `grimorio-foundry-feat-automation-plan@1`.
- Feat Bundle/Package v2 permanecem compatíveis com **Foundry VTT 13.351 + DnD5e 5.3.3 + Grimório Importer 0.12.0+**.
- Nenhuma automação mecânica específica da 5.19 é inferida do texto; subsistemas e condições próprios de Lyre permanecem descritivos até homologação específica.
- A cobertura total passa a **109 perfis: 6 full, 36 partial e 67 description**; os totais previamente homologados de Advancements, Effects, Activities, uses e runtime permanecem inalterados.

## 5.43.0

### Conteúdo — Talentos · Ryoko's Guide to the Yokai Realms
- Integrados os **39 talentos** do Capítulo 10 de *Ryoko's Guide to the Yokai Realms*: **26 talentos gerais** das páginas 216–220 e **13 talentos raciais** das páginas 221–223.
- Todos os nomes e textos mecânicos foram traduzidos para **português brasileiro**, preservando `originalName`, página da fonte, pré-requisitos, escolhas explícitas e regras de repetibilidade.
- O catálogo de Talentos passa de **42 para 81 entradas** e de **1 para 2 catálogos**, mantendo o Livro do Jogador 2014 e Ryoko separados por fonte.
- A busca de Talentos passa a reconhecer também `originalName`, aliases, categoria e pré-requisito original, permitindo localizar as novas entradas pelo nome em inglês ou em PT-BR.
- Distâncias dos talentos foram localizadas para o padrão métrico já adotado pelo Grimório, sem alterar proporções mecânicas da fonte.

### Foundry — Talentos de Ryoko
- Os 39 talentos recebem **perfis explícitos `description`** no contrato `grimorio-foundry-feat-automation-plan@1`.
- Feat Bundle/Package v2 continuam compatíveis com **Foundry VTT 13.351 + DnD5e 5.3.3 + Grimório Importer 0.12.0+** e passam a exportar os 81 talentos.
- Nenhuma automação mecânica de Ryoko é inferida a partir do texto: sistemas próprios como Ataques de Combo, Maestria Avançada de Armas, próteses, traços raciais e familiares permanecem descritivos até homologação específica.
- A cobertura total passa a **81 perfis: 6 full, 36 partial e 39 description**; os totais de Advancements, Effects, Activities, uses e runtime previamente homologados para o PHB permanecem inalterados.

## 5.42.0

### Foundry — Talentos · FA-1
- Criado `data/export/foundry-feat-automation.js` com **42 perfis explícitos**, um para cada Talento do Livro do Jogador.
- Novo contrato `grimorio-foundry-feat-automation-plan@1`, com tiers `full`, `partial` e `description`, além de Advancements, Activities, Effects, usos, runtime, limitações e notas.
- Feat Bundle promovido para `grimorio-foundry-feat-bundle` **v2** e Feat Package para `grimorio-foundry-feat-package` **v2**.
- O JSON v2 declara `minimumImporterVersion: 0.12.0`; a RC `0.11.0-rc.1` não foi alterada e permanece em feature freeze.
- `foundry/grimorio-importer` foi sincronizado com a build **0.11.0-rc.1** já aprovada, sem alterações internas do módulo durante a FA-1.
- Cobertura do catálogo: **6 perfis completos + 36 parciais**, totalizando **28 Advancements, 10 Effects, 22 Activities, 2 perfis com uses e 56 requisitos de runtime**.
- Perfis condicionais evitam efeitos globais incorretos: Conjurador de Guerra, Ambidestro, Maestria em Armadura Média/Pesada, Sentinela, Sorrateiro, Sortudo e outros exigem contexto/runtime quando necessário.
- `tools/validate-foundry-feat-automation-5.42.js` valida os 42 perfis, schemas v2, escolhas estruturadas e casos críticos como Alerta, Observador, Robusto e Sortudo.
- `tools/validate-project.js` agora audita a cobertura dos perfis de Talentos no validador principal.

## 5.41.0

### Foundry — Talentos (Fase 2)
- Adicionados exportadores JSON de **Talento individual** e **catálogo completo** usando os schemas `grimorio-foundry-feat-bundle` v1 e `grimorio-foundry-feat-package` v1.
- A página `#/feats` ganhou ações **Exportar Foundry** por talento e uma exportação em lote dos 42 talentos.
- O `grimorio-importer` foi atualizado para **0.10.0** e passa a declarar um quarto compêndio: **Grimório — Talentos**.
- Talentos são materializados como Items nativos DnD5e do tipo `feat`, com descrição, fonte/página, requisitos, identifier e flags estáveis do Grimório.
- Pré-requisitos estruturados, escolhas e repetibilidade são preservados como metadados; mecânicas condicionais permanecem descritivas até receberem automação explícita e homologada.
- Reimportações localizam o Item por `grimorioId`, atualizam o documento existente e preservam seu UUID.
- Talentos são organizados por pasta de fonte dentro do compêndio e não criam Items automaticamente no diretório do Mundo.
- Adicionados exemplos de transporte e testes de regressão para os 42 talentos do PHB 2014.

## 5.40.0

### Conteúdo — Talentos
- Criado catálogo nativo de **Talentos** no registro central do Grimório.
- Incorporados **42 talentos** do Capítulo 6 do Livro do Jogador 2014, com texto integral, pré-requisitos estruturados e páginas de referência.
- Nova rota de catálogo `#/feats` e rotas individuais `#/feat/<id>`.
- Novo botão **Talentos** abaixo de **Equipamentos** na sidebar principal e na camada `ui-enhancements`.
- Busca Ctrl+K ampliada para localizar talentos por nome, pré-requisito e texto.
- Interface de talentos adiciona busca, filtros, links diretos, títulos contextuais e integração com as microtransições/Spotlight existentes.
- O módulo `foundry/grimorio-importer` permanece inalterado nesta fase.

## 5.39.1

### Visual — arte de cabeçalho na página da classe
- Adicionada infraestrutura para **arte interna de cabeçalho** nas páginas de classe.
- Implementada a primeira arte de teste para **Paladino**, com imagem local, **blur** e **overlay preto translúcido** para preservar a legibilidade.
- Novo arquivo de configuração: `data/class-detail-art.js`.
- Novo estilo dedicado: `css/class-detail-art.css`.

## 5.39.0

### Navegação — Deep Links
- Implementada infraestrutura `js/deep-links.js` para URLs canônicas e compartilháveis.
- Links nativos adicionados a classes, subclasses, raças, subraças, magias e equipamentos.
- Suporte a Ctrl/Cmd+clique, clique do meio, menu de contexto e abertura em nova guia.
- Subclasses: `#/class/<classe>/subclass/<subclasse>`.
- Subraças: `#/race/<raça>/subrace/<subraça>`.
- Equipamentos: `#/equipment/<item>`, com expansão automática do item-alvo.
- Adicionada ação de copiar link direto e títulos contextuais para as guias do navegador.
- Busca Ctrl+K convertida para resultados baseados em links reais, incluindo Raças e Subraças.
- Navegação por hash preserva recarga, Voltar e Avançar sem servidor de rotas.

## 5.38.0

### Homebrew — O Sábio
- Classe **Sábio** integrada a partir do PDF fornecido pelo usuário.
- Doutrina **Catalisador** adicionada com 7 entradas de progressão mecânica.
- Nova fonte `O Sábio — Homebrew` registrada no catálogo.
- 14 entradas mágicas adicionadas: 6 truques exclusivos, 3 Terrenos Arcanos e 5 Magias de Sábio.
- Catálogo de Magias passa a aceitar recursos **sem nível convencional**, com rótulo e filtro próprios.
- Progressão 1–20 do Sábio é uma organização editorial dos marcos explicitamente citados pela fonte; nenhuma característica padrão ausente foi inventada.
- Termos e lacunas não definidos no PDF são preservados com notas editoriais em vez de receber regras inferidas.

## 5.37.1

### Hotfix — capas de classe
- Corrigido o caso em que uma capa externa que falhava deixava o card completamente escuro.
- A camada preta/blur só é ativada depois que a imagem termina de carregar com sucesso.
- Links do Imgur agora tentam automaticamente extensões diretas alternativas (`png`, `jpg`, `jpeg`, `webp`, `gif`).
- Se todas as tentativas falharem, o card retorna ao visual padrão em vez de permanecer preto.
- A renderização passou a usar um elemento de imagem dedicado, permitindo detectar carregamento e falha de forma confiável.

## 5.37.0

### Interface — fixação da sidebar e capas de classe
- Botão de pin no topo da sidebar para manter o menu expandido no desktop.
- Estado fixado persistente entre recarregamentos.
- Infraestrutura centralizada de capas em `data/class-covers.js`.
- Primeira capa aplicada ao Emissário Espiritual, com blur e overlay preto configuráveis.
- Suporte a URLs externas e arquivos locais, com normalização automática de links Imgur.
- Novo `css/class-covers.css`.

## 5.36.0

### Interface — transições fluidas
- Adicionadas microtransições de navegação entre páginas/abas.
- Características e outros blocos expansíveis recebem entrada suave ao abrir.
- Adicionado feedback visual discreto em overlays e cards clicáveis.
- Respeito a `prefers-reduced-motion` e ausência de dependências externas.
- Novos arquivos: `css/fluid-transitions.css` e `js/fluid-transitions.js`.

## 5.35.0

### Interface — Sidebar adaptativa
- Implementada navegação lateral compacta/expansível no desktop, inspirada no componente React fornecido e adaptada à stack nativa do Grimório.
- Expansão por hover e foco de teclado; recolhimento automático ao sair da barra.
- Rótulos e contadores são recolhidos no modo compacto, mantendo ícones e `title`/`aria-label` para orientação.
- Mobile passa a usar sidebar em tela cheia com transição lateral, botão X e fechamento por `Esc`.
- Compatibilidade com `prefers-reduced-motion`.
- Novos arquivos: `css/adaptive-sidebar.css` e `js/adaptive-sidebar.js`.

## 5.34.0

### Interface — Spotlight Cards
- Adicionado efeito de iluminação radial responsivo ao cursor nos principais cards do Grimório.
- Implementação nativa, sem alterar a stack tecnológica do projeto.
- Cores temáticas por contexto e suporte a foco de teclado.
- Compatibilidade com `prefers-reduced-motion` e desativação automática em dispositivos touch/coarse pointer.
- Novos arquivos: `css/spotlight-cards.css` e `js/spotlight-cards.js`.

## 5.33.0

### Equipamentos — Lyre / Somnus Domina 5.19
- Integrado o Capítulo IX — Weapons & Armor de Lyre's Guide to Retia.
- 22 armas, 1 Escudo Grande e 6 entradas de munição adicionados ao catálogo.
- Novas propriedades da 5.19 e propriedades de armas de fogo disponíveis por tooltip e glossário.
- Regras de tamanho de equipamento e armas de fogo adicionadas como referências complementares expansíveis.
- Catálogo combinado: 96 itens, 70 armas, 12 armaduras, 2 escudos, 6 munições e 6 equipamentos de aventura em 3 fontes.

## 5.32.0

### Equipamentos — Ryoko
- 11 armas e 6 equipamentos de aventura de Ryoko's Guide to the Yokai Realms integrados.
- 7 propriedades próprias da fonte e dados de fabricação adicionados ao catálogo.

## 5.31.0

### Equipamentos — catálogo inicial
- Adicionada a seção **Equipamentos** abaixo de **Raças e Subraças** no menu lateral.
- Integrados os equipamentos mundanos das tabelas de Armaduras e Armas do Livro do Jogador fornecido: **37 armas, 12 armaduras e 1 escudo**.
- Implementado registro extensível de catálogos de equipamento por fonte em `GRIMORIO_REGISTRY`.
- Criados `data/equipment/phb-2014-equipment.js` e `js/equipment-browser.js`.
- Propriedades de armas agora exibem suas regras por hover/foco e também em um glossário acessível.
- Adicionados filtros por tipo, categoria e fonte, busca textual, detalhes expansíveis e suporte no Ctrl+K para equipamentos.
- A grafia **Beste Leve** foi preservada como aparece na tabela fornecida, com **Besta Leve** mantida como alias de busca documentado.

## 5.30.6

### Raças e Subraças — hotfix da busca
- Corrigida a pesquisa por `Humano`: o termo não é mais confundido com o tipo de criatura `Humanoide`.
- Nomes de raça/subraça mantêm busca parcial; metadados usam correspondência por palavra ou expressão inteira.
- A filtragem agora alterna diretamente a visibilidade dos cards já renderizados, sem reconstruir o campo de pesquisa.
- Adicionado validador dedicado para as buscas `Humano`, `Jackman`, `Dragon`, `Humanoide` e `High Wave`.

## 5.30.5

### Raças e Subraças — ajustes de interface
- Removidas do catálogo racial as caixas **"Regras de atributos e exceções da 5.19"** e **"Revisão textual em andamento"**.
- Removido o selo **"Texto integral revisado"** dos botões/cards de raça no catálogo.
- Corrigido o campo de busca das Raças e Subraças, que perdia foco ao digitar.
- A atualização da busca agora re-renderiza apenas os resultados e a contagem, preservando a entrada do usuário e a usabilidade do filtro.

## 5.30.4

### Raças e Subraças — revisão textual Fase 4
- Concluída a auditoria integral das 12 raças restantes: Kits’adria, Kobold, Kua Hono, Povo do Mar, Minotauro, Nefilim, Orc, Pétratára, Primordia, Maculado, Trealtin e Vanquis.
- 60 subraças e 280 registros mecânicos do bloco final foram relidos no *Lyre’s Guide to Retia* e traduzidos integralmente para PT-BR.
- O catálogo racial agora possui 34/34 raças integralmente revisadas, 196 subraças e 928 registros mecânicos reais.
- Restaurados Rastreador pelo Olfato (Kua Hono Lagarto) e Linhagem de Sangue Misto (Nefilim).
- Sopro de Esporos (Trealtin Fúngico) e Frenesi Alimentar (Vanquis Carniçal) tiveram suas opções internas consolidadas corretamente.
- Adicionado painel de Magia Elemental por subraça para Primordia.
- A lacuna de Aumento no Valor de Habilidade do Povo do Mar Litorâneo é sinalizada sem inventar o atributo ausente.
- Criado `tools/validate-races-phase4-5.30.4.js`.

## 5.30.3

### Raças e Subraças — revisão textual Fase 3
- Relido o bloco das páginas impressas **241–280** de *Lyre’s Guide to Retia — Land of Industry*.
- Receberam texto mecânico integral em PT-BR: **Gnomo, Goblin, Golias, Hádislin, Halfling, Hanyou, Hobgoblin, Ilthrak-yar e Kaijou**.
- Revisadas **60 subraças** e **301 registros mecânicos** dessas 9 raças.
- **Hanyou**: implementada apresentação específica dos Traços de Herança, com grupos de opções positivas/prejudiciais, regra de 2 + 2 e remoção progressiva dos prejuízos nos níveis 8 e 13; preservada também a exceção de Hanyou como raça secundária.
- **Hádislin**: vinculadas às 19 subraças as magias concedidas por **Legado Amaldiçoado** nos níveis 3 e 5; a interface passa a exibir essas magias junto da linhagem escolhida.
- **Hobgoblin**: removidos os falsos Traços de Legado independentes Hospitalidade, Passagem e Despeito; as três opções foram consolidadas dentro de **Orientação Feérica**.
- O catálogo passa a **934 registros de traços**, mantendo **34 raças** e **196 subraças**; **22/34 raças** estão agora integralmente revisadas.
- Criados `data/lyre-races-phase3-structure.js`, `data/lyre-races-phase3-text.js` e `tools/validate-races-phase3-5.30.3.js`.

## 5.30.2

### Raças e Subraças — revisão textual Fase 2
- Relido o bloco de raças das páginas impressas **197–240** de *Lyre’s Guide to Retia — Land of Industry*.
- Receberam texto mecânico integral em PT-BR: **Arhcoon, Tribo Bestial, Povo-Pássaro, Capy’hado, Dragonkin, Anão, Elfo, Enáretos, Feralus, Firbolg, Flooflin e Framebilt**.
- Revisadas **69 subraças** e **322 registros mecânicos** dessas 12 raças, preservando `summary` apenas como consulta rápida e `description` como regra completa.
- Corrigido **Capy’hado**: `Linhagem` volta a existir entre os Traços de Sangue Misto.
- Corrigido **Anão Sermiano**: restaurada a característica **Visão às Cegas**, omitida pela extração inicial.
- Corrigido **Feralus**: **Pressa Felina** passa a constar também entre os Traços Fixos, como determina a fonte.
- Corrigido **Elfo Selvagem**: Outono, Inverno, Primavera e Verão são opções internas de **Forma Sazonal**, e não características independentes.
- Corrigido **Enáretos**: **Passagem Radiante** pertence à Descoberta; **Ler Adiante** pertence à Profecia; características da Glória deixam de aparecer incorretamente em Sangue Misto.
- Criados `data/lyre-races-phase2-structure.js`, `data/lyre-races-phase2-text.js` e `tools/validate-races-phase2-5.30.2.js`, mantendo a base racial original estável e tornando a revisão auditável.
- O catálogo permanece com **34 raças** e **196 subraças**; após a correção dos falsos/ausentes registros estruturais, passa a **937 registros de traços**.

## 5.30.1

### Raças e Subraças — revisão textual Fase 1
- Relido o bloco completo de **Humano** no Lyre’s Guide to Retia (páginas impressas 273–275).
- Substituídos resumos vagos por descrições mecânicas integrais em PT-BR para Humano, seus Traços de Legado, Sangue Misto e suas 7 subraças.
- Corrigida **Perícia Enraizada**: duas salvaguardas sem proficiência recebem metade do bônus de proficiência, com possibilidade de trocar a escolha se proficiência for obtida posteriormente.
- Corrigido **Jackman**: +1 em qualquer atributo exceto Sabedoria; **Conjunto Expandido de Perícias** amplia Perícia Enraizada a todas as salvaguardas sem proficiência; **Talento** concede um talento elegível.
- Criado o contrato `summary` + `description`, além de `lore` e descrição de subraça, para suportar a revisão progressiva das demais raças.
- A interface agora diferencia conteúdo **integralmente revisado** de conteúdo ainda em **resumo pendente**, evitando apresentar a v5.30 inteira como se já tivesse fidelidade textual completa.
- Adicionado validador específico da Fase 1 para impedir o retorno de placeholders genéricos no Humano.

## 5.30.0

- Adicionada **Raças e Subraças** como nova opção da seção Início, imediatamente abaixo do Planejador de Atributos.
- Integradas **34 raças** e **196 subraças** do Capítulo VII de *Lyre's Guide to Retia — Land of Industry*.
- Implementado o sistema de **2 Traços de Legado** da 5.19 com seleção interativa e persistência local.
- Implementadas as regras de **Sangue Misto**, mantendo raça/subraça dominantes e combinando as listas de Traços de Legado das duas raças.
- Adicionados resumos mecânicos em PT-BR para traços fixos, Traços de Legado, Traços de Sangue Misto e características de subraça, todos com referência de página.
- Adicionada a subraça **Glória** dos Enáretos, identificada por auditoria cruzada entre a lista de Sangue Misto, a descrição racial e a tabela de subraças.
- A interface exibe regras de aumentos de atributo da 5.19 e mantém link direto para o Planejador de Atributos.
- Criados `data/lyre-races.js`, `js/race-browser.js` e `tools/validate-races-5.30.js`.

## 5.29.1

- Corrigido o menu lateral aprimorado (`ui-enhancements.js`), que sobrescrevia o `renderNav()` base e ocultava o atalho do Planejador de Atributos.
- **Planejador de Atributos** agora aparece imediatamente abaixo de **Painel**, como opção própria dentro da seção **Início**.
- O estado ativo do menu acompanha corretamente a rota `ability-planner`.
- Validador do planejador ampliado para verificar tanto a navegação base quanto a navegação sobrescrita pela camada de melhorias.

## 5.29.0

- Adicionada a aba **Planejador de Atributos** abaixo de **Painel**.
- Implementado Point Buy de **27 pontos** com intervalo base de 8–15 e custo progressivo padrão.
- Adicionados controles `+ / −`, custo do próximo incremento, bônus flexíveis `+2 / +1`, valor final e modificador por atributo.
- Bônus +2 e +1 são mutuamente exclusivos no mesmo atributo, reproduzindo o fluxo de criação inspirado em Baldur's Gate 3.
- Estado do planejador salvo automaticamente via `localStorage`, independente do armazenamento de conteúdo próprio do Grimório.
- Adicionado layout responsivo dedicado em `css/styles.css` e lógica isolada em `js/ability-planner.js`.
- Adicionado `tools/validate-ability-planner-5.29.js`.

## 5.28.0

- Adicionada **Animar Energia (Animate Energy)** ao catálogo do **Cultivador**, traduzida diretamente da captura de tela fornecida pelo usuário.
- Criado `data/cultivator-homebrew-spells.js`, com catálogo `cultivator-homebrew-spells` e fonte `cultivator-homebrew-spells` (**Magias Homebrew — Cultivador**).
- Preservados: Necromancia de 1º nível (ritual), conjuração de 1 minuto, alcance de 9 m, componentes V/S/M, duração instantânea, comando a 18 m, limite base de 2 criaturas e escalonamento até o teto de 4 descrito pela fonte.
- A ausência de estatísticas do servo morto-vivo/esfera necromântica foi documentada sem criação de mecânicas inferidas.
- Atualizada a referência `MAGIAS EXTERNAS DA LISTA` do Cultivador: **Animate Energy** deixa de ser tratado como ficha indisponível.
- Catálogo passa a **1.171 registros-base**, **9 catálogos de magia** e **16 fontes registradas**.
- Readiness Foundry de magias passa para **1.170 exportáveis**, **1.168 prontas**, 2 em revisão e 1 bloqueada; **Animar Energia** é exportável sem avisos.
- Grimório Importer embutido sincronizado para **0.9.3** e removido do exporter o aviso obsoleto de incompatibilidade do Lutador de Rua.
- Adicionado `tools/validate-cultivator-homebrew-spell-5.28.js`.

## 5.27.0

- Integrada a classe homebrew original **Lutador de Rua** a partir do PDF fornecido pelo usuário.
- Adicionada progressão completa do 1º ao 20º nível, incluindo **Dado de Briga** de 1d6 a 1d12.
- Estruturados **62 registros de características/opções**, com **Cólera**, Surtos de Cólera e **20 Essências de Cólera selecionáveis**.
- Adicionado o Arquétipo de Rua **Dragão de Dojima** com características nos níveis 3, 6, 11 e 17, preservando Rush Style, Beast Style e Dragon Style.
- Registradas notas editoriais para lacunas explícitas da fonte: Ataque Extra, Incremento de Habilidade e Essência Adicional não recebem mecânicas externas ao PDF.
- Registradas as inconsistências nominais **Deita Tigre / Queda do Tigre** e **Essência do Deita Tigre** sem criar conteúdo adicional.
- Registrada nova fonte `street-fighter-homebrew`; total de fontes passa para **15**.
- Catálogo passa para **26 classes, 381 subclasses/especializações e 26 progressões estruturadas**.
- Exporter de classes recebe identificador estável `street-fighter` e aviso de compatibilidade: o **Grimório Importer 0.9.2** ainda não possui perfil nativo para a nova classe.
- Adicionado `tools/validate-street-fighter-5.27.js`.

## 5.26.0

- Integrada a classe **Cultivador (Cultivator)** em PT-BR a partir do PDF do D&D Wiki fornecido pelo usuário.
- Adicionada progressão completa do 1º ao 20º nível com Qi, Nível de Magia e Limite de Amplificação.
- Estruturados **22 blocos de características da classe**, **10 tabelas** e referências de multiclasse/regras opcionais/editoriais.
- Adicionados **3 Chamados à Divindade** — Chamado do Mal, Chamado Acromático e Chamado do Céu — com **19 características** e **3 tabelas de magias de Chamado**.
- Preservados Núcleo da Alma, seis tipos de Qi, Magias da Alma, Ritual de Coleta de Almas, Dados de Alma, Amplificação, Autoridade Divina e as demais regras de alto nível.
- Preservada explicitamente a inconsistência da fonte na tabela de Amplificação da Alma e o cabeçalho sem regra `Sweeping Soul Shaping`; nenhuma regra foi inventada para magias externas citadas sem bloco mecânico no PDF.
- Registrada nova fonte `dandwiki-cultivator`; total de fontes passa para **14**.
- Catálogo passa para **25 classes, 380 subclasses/especializações e 25 progressões estruturadas**.
- Bundles Foundry passam para **405**; características de origem passam para **2.411** e características materializadas para **2.329**.
- Atualizado **Grimório Importer para 0.9.2**, com perfil `cultivator`, seleção de Chamado no 6º nível e sem criação de spell slots nativos para o sistema de Qi.
- Adicionado perfil parcial para **Autoridade Divina**, com Activity de ação e rolagem `1d100`; a recarga condicional permanece manual.
- Cobertura de automação passa para **72 perfis**, **87 Activities**, 37 recursos/usos e 11 Active Effects.
- Auditoria atualizada: 72 perfiladas, 292 candidatas de alta prioridade, 732 médias e 1.315 predominantemente textuais/contextuais.
- Adicionado `tools/validate-cultivator-5.26.js` e novos artefatos/roteiros de validação do Cultivador.

## 5.25.1

- Atualizado o **Grimório Importer para 0.9.1**.
- Adicionada organização hierárquica nativa ao compêndio **Grimório — Características**: uma pasta por classe e uma subpasta por subclasse/especialização.
- Características de classe são sincronizadas diretamente na pasta da classe; características de subclasse são sincronizadas na subpasta correspondente.
- Adicionadas flags estáveis às pastas gerenciadas (`classIdentifier`, `subclassGrimorioId`, `folderRole`) para permitir atualização sem depender do nome visual da pasta.
- Reimportações migram Items gerenciados existentes para a pasta correta sem recriar documentos e sem alterar UUIDs.
- Títulos de características originalmente em caixa-alta agora são normalizados para capitalização natural em PT-BR; IDs, `featureKey`, `system.identifier` e matching de automação continuam baseados nos dados estáveis anteriores.
- Preservados acrônimos de uso comum como **CA**, **CD**, **PV**, **HP**, **XP**, **VTT**, **NPC** e **PC**.
- Registrada a homologação real da Fase 12 após confirmação do usuário.
- Criado `tools/validate-foundry-organization-5.25.1.js`, validando 24 pastas de classe, 377 subpastas de subclasse, 2.293 características, migração, reimportação e estabilidade de UUIDs.

## 5.25.0

### Fase 12 — expansão e auditoria da automação

- Atualizado o **Grimório Importer para 0.9.0** e o schema de automação para v3.
- Expansão para **71 perfis**: 59 de classe e 12 de subclasse, representando todas as 24 famílias de classe.
- Cobertura declarativa de **86 Activities, 37 recursos/usos e 11 Active Effects**.
- Matching de subclasse por bundle ID exato para impedir colisões entre características homônimas.
- Adicionada recuperação parcial por fórmula para recursos, incluindo Canalização de Foco.
- Implementados recursos compartilhados e Activities adicionais para Bardo, Bruxo, Clérigo, Druida, Feiticeiro, Mago, Artífice e classes homebrew do Grimório.
- Primeiros perfis dirigidos de subclasses: Arquifada, Corruptor, Guerra, Luz, Lua, Magia Selvagem, Mestre de Batalha, Ladrão, Adivinhação, Mão Aberta, Vingança e Kaiju.
- Auditoria automática das **2.370 características** com classificação de candidatos para expansão futura.
- Novo comando `/grimorio-auditoria-automacao`.
- Registrada a homologação real da Fase 11; Fase 12 permanece pendente de teste real.

## 5.24.0

### Fase 11.2 — Active Effects seguros e expansão da automação

- Atualizado o **Grimório Importer para 0.8.0**.
- `feature-automation.js` evoluiu para schema 2 e passa a gerar Active Effects com IDs estáveis e flags de gerenciamento.
- Cobertura ampliada para **25 perfis**, **6 classes representativas**, **23 Activities**, **6 recursos** e **8 Active Effects**.
- Implementados 6 efeitos passivos/transferíveis e 2 efeitos temporários aplicados por Activities.
- Fúria: vantagem em testes/salvaguardas de Força e resistência a contundente, perfurante e cortante; dano/restrição de conjuração/término continuam manuais.
- Defesa Paciente: consumo de Chi preservado, efeito próprio temporário, status `dodging` e vantagem em salvaguardas de Destreza.
- Instinto Selvagem e Explorador Natural: vantagem passiva em iniciativa.
- Estilo de Luta — Arquearia: +2 a ataques `rwak` para Guerreiro e Patrulheiro.
- Pureza Corporal: imunidade a doença, condição Envenenado e dano de veneno; Saúde Divina: imunidade a doença.
- Patrulheiro: Pés Rápidos e Desaparecer recebem Activities de ação bônus.
- Destruição Divina Aprimorada recebe Activity manual de 1d8 radiante para evitar bônus global excessivo.
- Auras de Proteção/Coragem, propagação de efeitos a aliados e efeitos condicionais de ataque continuam fora da automação automática por segurança.
- Reimportação preserva UUIDs e IDs internos dos Active Effects; nenhum Item de Mundo é criado.
- Atualizados manifestos, documentação e validação da Fase 11.2.

## 5.23.0

### Fase 11.1 — primeira camada de automação mecânica de características

- Atualizado o **Grimório Importer para 0.7.0**.
- Adicionado `foundry/grimorio-importer/scripts/feature-automation.js` com perfis de automação auditáveis por característica.
- Implementados **16 perfis** em cinco classes representativas: Bárbaro, Guerreiro, Ladino, Monge e Paladino.
- Os perfis geram **20 Activities nativas** e **6 reservas/usos**, usando recuperação e consumo nativos do DnD5e quando seguro.
- Criados três tiers: `full`, `partial` e `description`; cobertura inicial 3 / 12 / 1.
- Guerreiro: Retomar o Fôlego com `heal`, Surto de Ação e Indomável com controle de usos.
- Ladino: Ação Ardilosa com três Activities de ação bônus; Ataque Furtivo e Esquiva Sobrenatural permanecem parciais.
- Monge: `CHI` como reserva compartilhada e consumo cruzado por `monk-chi` em Rajada de Golpes, Defesa Paciente e Passo do Vento.
- Paladino: Sentido Divino com usos, Cura pelas Mãos com reserva/escala e Destruição Divina com consumo de espaços e limite mecânico separado.
- Bárbaro: Fúria e Ataque Descuidado recebem Activities de acionamento/lembrete; Sentido de Perigo permanece somente descrição.
- **Active Effects não são criados** nesta primeira parte; vantagens, estados, movimento e reduções condicionais continuam manuais.
- `materializer.js` passa a inicializar `system.activities`/`system.uses` e gravar `flags.grimorio-importer.automation`.
- Adicionado `/grimorio-automacao` e API `phase11Support()` / `automationCoverage()`.
- Criado `tools/validate-foundry-phase11-module.js` e regressão self-contained em `tests/foundry-v13/phase11/`.
- Preservadas as regressões da Fase 9 e Fase 10, incluindo 401 bundles, 24 classes e 377 subclasses.
- Adicionados `FOUNDRY_IMPORTER_FASE11.md`, `TESTE_FOUNDRY_FASE11.md` e `VALIDACAO_FOUNDRY_AUTOMACAO_5.23.md`.

## 5.22.1

### Hotfix — botões Foundry em classes/subclasses

- Corrigida a regressão real reportada na ficha do Bárbaro: os botões eram gerados em `app.js`, mas desapareciam depois que `ui-enhancements.js` e `dynamic-consultation.js` substituíam `viewClass()`/`viewSubclass()`.
- `ui-enhancements.js` e `dynamic-consultation.js` agora usam `foundryClassHeaderActions()` no cabeçalho final.
- Preservados **Exportar Foundry**, **Classe + subclasses** e os controles Editar/Excluir para conteúdo personalizado.
- Atualizado o validador da Fase 10 para executar a ordem real dos scripts do `index.html`, impedindo que o mesmo bug passe novamente.
- Versão do site atualizada para 5.22.1; Grimório Importer permanece 0.6.0 e os schemas de bundle/pacote permanecem v1.

## 5.22.0

- Fase 10: corrigida a regressão que fazia os botões individuais de classes/subclasses dependerem do wrapper carregado após o primeiro render.
- `viewClass()` e `viewSubclass()` agora incluem nativamente os controles **Exportar Foundry**.
- Classe: exportação individual + **Classe + subclasses**.
- Subclasse: exportação individual do bundle correspondente.
- `viewClassList()` mantém a exportação do catálogo completo.
- Grimório Importer atualizado para **0.6.0**, preservando compatibilidade com os schemas v1.
- Registrada homologação real da Fase 9.
- Adicionados documentação, kit e validador específico da Fase 10.

# Changelog

## 5.21.0

### Foundry Classes — Fase 9 / Exportação no site e pacotes JSON

- Atualizado **Grimório Importer** para `0.5.0`.
- Adicionada exportação Foundry diretamente nas fichas de classe e subclasse.
- Classes podem gerar bundle individual ou pacote **Classe completa** com todas as subclasses.
- Catálogo de classes pode ser exportado em um único JSON com **401 bundles** (24 classes + 377 subclasses).
- Criado `grimorio-foundry-class-package@1`.
- Importador detecta automaticamente bundles e pacotes; adicionado `/grimorio-import-package`.
- Pacotes validam individualmente todos os bundles internos antes da materialização.
- Importação de pacote ordena classes antes das subclasses, usa uma janela única de escrita dos compêndios e emite resumo consolidado.
- Smoke test materializa o catálogo completo duas vezes: 24 classes, 377 subclasses, 2.293 características, zero duplicações e zero Items de Mundo.
- Confirmação do usuário da Fase 8 registrada como homologação real das cinco classes especiais.


## 5.20.0

### Foundry Classes — Fase 8 / Classes especiais

- Atualizado **Grimório Importer** para `0.4.0`.
- Materialização habilitada para **24 classes** e **377 subclasses/especializações**.
- Removida a reserva das cinco classes especiais da Fase 7.
- Criados perfis dedicados para Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue.
- Adicionados 12 perfis explícitos de Conceito Central do Cavaleiro Dracônico.
- Conceitos Centrais agora podem conceder Traits próprios e reconfigurar Dado de Vida/progressão de conjuração no Actor.
- Piloto de Frame recebe dois pools de escolha de salvaguarda e não recebe ASI genérico; Crescimento permanece como característica.
- Dobrador e Domador recebem escolha dinâmica de INT/WIS/CHA no Item embutido.
- Ministro de Sangue usa d8 técnico e hook `dnd5e.preRollClassHitPoints` para rolar 2d4 no ganho de PV; limitação do pool de Dados de Vida foi mantida explícita.
- Adicionados comandos `/grimorio-special` e `/grimorio-configurar`.
- Catálogo da Fase 8 gerado com todos os **401 bundles**.
- Smoke test da Fase 8 materializa 24 classes, 377 subclasses e 2.293 características no mock, sem Items de Mundo e com UUIDs estáveis.
- Confirmação do usuário da Fase 7 registrada como homologação real da generalização convencional.


## 5.19.0

### Foundry Classes — Fase 7 / Generalização

- Atualizado **Grimório Importer** para `0.3.0`.
- Materialização nativa generalizada para **19 classes** e **347 subclasses**.
- Mantidos em reserva cinco perfis especiais e 30 subclasses dependentes para evitar conversões incorretas.
- Criado catálogo Fase 7 com todos os bundles suportados.
- Adicionado suporte a `ItemChoice` para Estilos de Luta, Dádiva do Pacto e Metamágica.
- Perfis de classe agora definem spellcasting, ASI, traits, opções diretas e avisos manuais.
- Importação múltipla de bundles JSON disponível no seletor de arquivo.
- Preservados compêndios portáveis, UUIDs estáveis e atualização sem duplicações.
- Smoke test materializa todas as 19 classes e 347 subclasses sem criar Items de Mundo.
- Confirmação do usuário da Fase 6 registrada como homologação real do fluxo em compêndios.



## 5.18.0

### Foundry VTT — Fase 6: Compêndios portáveis

- Atualizado **Grimório Importer** para `0.2.0`.
- Declarados três compêndios Item/dnd5e no módulo: `grimorio-classes`, `grimorio-subclasses` e `grimorio-features`.
- Características passam a ser criadas/atualizadas no compêndio **Grimório — Características**.
- Classes e subclasses passam a ser criadas nos respectivos compêndios, sem criar Items no Mundo.
- `ItemGrant` agora usa UUIDs de compêndio, tornando as relações portáveis entre Mundos que compartilham a instalação do módulo.
- Estado de bloqueio dos packs é restaurado automaticamente após cada importação.
- Reimportação mantém a identidade dos documentos e evita duplicações.
- Adicionados diagnósticos `/grimorio-packs` e `/grimorio-world-preview`.
- Items de Mundo criados pela Fase 5 não são apagados automaticamente.
- Novo smoke test valida armazenamento, UUIDs, deduplicação, bloqueio e ausência de criação de Items de Mundo.


## 5.17.0

### Foundry Classes — Fase 5 / Grimório Importer

- Criado o módulo Foundry `grimorio-importer` v0.1.0 para Foundry 13.351 e DnD5e 5.3.3.
- Implementada leitura e validação de `Grimório Foundry Class Bundle v1`.
- Materialização inicial habilitada para Bárbaro e subclasses de Bárbaro.
- Características são criadas como Items `feat` antes da classe/subclasse para que seus UUIDs possam alimentar `ItemGrant` Advancements.
- Bárbaro gera 12 feats e 20 Advancements: HitPoints, quatro Trait, nove ItemGrant, cinco AbilityScoreImprovement e um Subclass.
- `INCREMENTO NO VALOR DE HABILIDADE` e `CAMINHO PRIMITIVO` são convertidos para estruturas nativas e não viram feats duplicados.
- Caminho do Kaiju gera cinco feats e ItemGrant nos níveis 3, 6, 10 e 14.
- `system.advancement` é gravado como objeto, conforme a alteração de dados da linha DnD5e 5.3.
- Flags `grimorio-importer` estabilizam identidade e permitem reimportação por atualização sem duplicatas.
- Adicionados comandos `/grimorio-status`, `/grimorio-import` e `/grimorio-help`, além de API pública do módulo.
- Armazenamento inicial permanece em Items de Mundo; compêndios portáveis ficam para a próxima iteração após homologação do Advancement Flow real.
- Adicionados `FOUNDRY_IMPORTER_FASE5.md`, `TESTE_FOUNDRY_FASE5.md`, `VALIDACAO_FOUNDRY_CLASSES_5.17.md` e `tools/validate-foundry-phase5-module.js`.

## 5.16.0

### Foundry Classes — Fase 4

- Criado o formato `grimorio-foundry-class-bundle@1`, um contrato JSON próprio para transportar classes e subclasses até o futuro módulo Grimório Importer.
- Adicionado o perfil `foundry13-dnd5e533-grimorio-class-bundle-v1`, separado do exportador YAML de magias.
- 24/24 classes e 377/377 subclasses/especializações geram bundles válidos.
- Preservadas 345 características de classe, 2.025 características de subclasse, 23 tabelas de classe e 135 tabelas de subclasse.
- Os 509 eventos das tabelas de progressão foram classificados em: 407 características diretas, 48 eventos de subclasse, 51 escalonamentos/variações e 3 notas de progressão.
- 29 opções internas sem nível (Estilos de Luta, Metamagias, Pactos e similares) passam a ser transportadas como `ChooseItemsCandidate`, sem inventar nível.
- Identificadores de classe foram estabilizados para futura ligação `classIdentifier` das subclasses.
- Subclasses homônimas de fontes diferentes mantêm identificadores próprios e únicos.
- 41 subclasses legadas sem metadado de fonte continuam sem fonte inferida; a lacuna original é preservada.
- 19 classes estão classificadas como prontas para o primeiro mapeamento nativo; Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue foram reservados para lógica específica na Fase 5.
- Adicionados `data/export/foundry-class-overrides.js`, `js/exporters/foundry-class-bundle.js`, `tools/generate-foundry-phase4.js` e `tools/validate-foundry-class-bundle.js`.
- Criados bundles de referência para Bárbaro, Dobrador, Cavaleiro Dracônico, Caminho do Kaiju e Sensei, além do índice completo das 401 opções de classe/subclasse.

## 5.15.0

### Foundry Export — Fase 3

- Adicionada interface de exportação de magias diretamente no Grimório.
- Fichas de magia recebem o botão **Exportar Foundry**.
- Criada pré-validação individual com perfil, status, dados normalizados e diagnóstico de compatibilidade.
- Adicionadas ações **Copiar YAML** e **Baixar YAML**.
- Adicionada exportação em lote pelo **filtro atual** do catálogo, considerando todos os resultados e não apenas a página visível.
- O resumo do lote informa quantidades prontas, em revisão e bloqueadas.
- Itens bloqueados são omitidos do YAML em lote e exibidos no diagnóstico.
- Mantida cobertura da Fase 2: 1.170 analisadas, 1.169 exportáveis, 1.167 prontas, 2 em revisão e 1 bloqueada.
- Criado `js/exporters/foundry-export-ui.js`, carregado após `dynamic-consultation.js`, sem acoplar o `app.js` ao Foundry.
- Adicionados `FOUNDRY_EXPORT_FASE3.md`, `VALIDACAO_FOUNDRY_EXPORT_5.15.md` e `tools/validate-foundry-export-ui.js`.

## 5.14.0

### Foundry VTT — Fase 2

- Fase 0 confirmada no ambiente real Foundry 13.351 / DnD5e 5.3.3 / 5e Item Importer 13.9.1.
- Normalização de magias ampliada de 938 para **1.167 entradas prontas sem alertas**.
- Cobertura final da fase: **1.170 analisadas, 1.169 exportáveis, 2 em revisão editorial e 1 bloqueada**.
- Rituais homologados no fluxo do importer; 43 entradas deixam de exigir revisão apenas por serem rituais.
- Conversão exata de alcances decimais entre unidades compatíveis com os campos inteiros do Strict Spell Template.
- Tempos alternativos e valores explicitamente especiais passam a usar `Special`/`spec`, preservando a redação original.
- Normalização expandida de durações, alvos e áreas; overrides explícitos adicionados para geometrias e quantidades dinâmicas.
- 12 magias Psiônicas de Kibbles recebem classificação técnica Foundry individual, preservando `Psiônica` na descrição exportada.
- `Investida Santificada` permanece bloqueada por ausência do bloco mecânico na fonte; `Geada Divina` e `Chuva de Flechas de Tamamo` permanecem exportáveis com revisão por duração editorial incompleta.
- Adicionados `FOUNDRY_EXPORT_FASE2.md`, `VALIDACAO_FOUNDRY_EXPORT_5.14.md` e bateria de regressão em `tests/foundry-v13/phase2/`.
- O botão de exportação permanece reservado para a Fase 3.

## 5.13.0

### Foundry VTT — Fases 0 e 1

- Criado o perfil `foundry13-dnd5e533-item-importer1391` para Foundry VTT 13.351, DnD5e 5.3.3 e 5e Item Importer 13.9.1.
- Criado `js/exporters/registry.js` para registrar formatos externos sem acoplar o `app.js`.
- Criado `js/exporters/foundry-v13.js` para gerar Strict Spell Template v2 em YAML.
- A conversão cobre escola, nível, V/S/M, materiais e custos, consumo, preparação, ativação, alcance, duração, concentração, alvo, áreas comuns, descrição HTML, níveis superiores e fonte/página.
- Criado `data/export/foundry-v13-overrides.js` para casos especiais revisados.
- Criado kit de prova Fase 0 com cinco magias e lote YAML em `tests/foundry-v13/phase0/`.
- Criados `tools/generate-foundry-phase0.js` e `tools/validate-foundry-export.js`.
- Auditoria dos 8 catálogos atuais: 1.170 magias; 1.157 exportáveis; 938 prontas; 232 com revisão; 13 bloqueadas.
- Bloqueios conhecidos mantidos explícitos: 12 magias de escola Psiônica e uma entrada sem escola informada.
- Botões de exportação permanecem fora da interface até validação real da Fase 0.


## 5.12.0

### Ryoko's Guide to the Yokai Realms — Capítulo 13: Magias

- Integradas e localizadas para PT-BR todas as **62 magias** do Capítulo 13.
- A própria fonte declara que o capítulo contém **44 magias inéditas e 18 provenientes de outras publicações Loot Tavern**; como essa classificação não é individualizada por ficha, nenhuma origem anterior foi atribuída por inferência.
- As 62 entradas são novas em relação ao catálogo atual do Grimório. **Acid Rain / Chuva Ácida** é mantida separada da homônima de KibblesTasty porque as duas possuem nível e mecânicas diferentes.
- Preservadas as listas de classe e as afinidades elementais do Dobrador indicadas nas fichas.
- Preservada a escola opcional **Biomancia** em 7 magias, com a respectiva escola alternativa registrada quando indicada pela fonte.
- **Cloud Stride / Passo pelas Nuvens** marcado como ritual.
- Criado `data/ryoko-spells.js` e registrado o catálogo `ryoko-spells` na fonte `ryoko-yokai-realms`.
- O catálogo-base passa de **1.108 para 1.170 registros**, e o total de catálogos registrados passa de 7 para **8**.
- `tools/validate-project.js` recebeu verificações específicas para as 62 magias de Ryoko, cobertura de nomes, Biomancia, ritual e filtro de fonte.



## 5.11.0

### Ryoko's Guide to the Yokai Realms — Capítulo 9: Classes

- Integrado e localizado para PT-BR o capítulo de classes e subclasses de *Ryoko's Guide to the Yokai Realms*.
- Adicionada a classe **Dobrador (Bender)**, com progressão do 1º ao 20º nível, escolha de Inteligência/Sabedoria/Carisma para conjuração, quatro Afinidades Elementais, Golpes Elementais, Combo Elemental, Forma Primordial e Avatar Primordial.
- Estruturadas as listas elementais do Dobrador e as quatro tabelas de benefícios do Avatar Primordial.
- Integradas as quatro Disciplinas: **Ferocidade, Fortificação, Fusão e Revigoramento**.
- Adicionada a classe **Domador (Tamer)**, reimpressa no próprio livro para consulta, com sistema de receptáculos, doma, companheiros, melhorias, progressão de ND/tamanho e conjuração.
- Estruturada integralmente a tabela **Resumo de Companheiros do Domador**, incluindo limites por nível e melhorias/Dados de Vida para ND 1/2 a ND 6.
- Integrado o paradigma **Sensei**, com Magias de Sensei, Golpes Marciais, nove Técnicas Marciais e aprimoramento de Liberar no 18º nível.
- Integradas **13 subclasses para classes-base**: Caminho do Kaiju; Colégio de Hanabi; Colégio das Máscaras; Domínio do Guardião do Santuário; Círculo dos Yokai; Lâmina Esquelética; Caminho dos Oito Portões; Juramento do Yojimbo; Rōnin; Tamaya; Invocador de Espíritos; O Shinigami; e Shinobi.
- Total da fonte nesta etapa: **2 classes**, **18 entradas de subclasse/especialização**, **99 características de subclasse** e **20 tabelas de subclasse**.
- Regras opcionais de **Ataque Extra Aprimorado** preservadas como referências para Bárbaro, Dobrador, Guerreiro, Monge, Paladino e Patrulheiro, sem sobrescrever automaticamente as regras-base.
- Fonte registrada em `data/sources.js`; adicionados `data/ryoko-classes.js`, `data/ryoko-subclasses.js` e `data/ryoko-optional-features.js`.
- `tools/validate-project.js` recebeu verificações específicas para a integração de Ryoko.
- O projeto passa a possuir **24 classes, 377 subclasses/especializações e 24 progressões estruturadas**; o catálogo de magias permanece em **1.108 registros-base** nesta etapa.


## 5.10.0

### Zagalhta's Exolunar Collection — Capítulo 7: Magias

- Integradas e localizadas para português brasileiro todas as **63 magias** descritas no Capítulo 7.
- Criado o catálogo registrado `data/zagalhta-spells.js` com **62 novas entradas-base**.
- **Dragonskin / Pele de Dragão** foi reconhecida como reimpressão mecanicamente equivalente à entrada de Lyre; a nova procedência e as listas de classe adicionais foram vinculadas sem duplicar a magia no catálogo.
- As versões **Legacy/5.19** de Cure Wounds, Healing Word, Mass Cure Wounds, Mass Healing Word e Slow foram preservadas como entradas próprias de Zagalhta, mantendo as alterações mecânicas da fonte separadas das versões oficiais.
- Preservados os grupos **Arsenal Temível de Ahma, Astromancia, Eidomancia, Encarnações de Milarose e Legado de Oyd** como traços pesquisáveis.
- Preservadas regras específicas como Bônus de Astromancia, Bônus do Cavaleiro Dracônico, Queima de Eidomancia, Fadiga de Combate, Pegada e efeitos de gravidade zero.
- As listas de classe das páginas finais do capítulo foram aplicadas às entradas, e a lista de magia do Cavaleiro Dracônico foi cruzada com o Capítulo 6.
- `Summon Belzer / Invocar Belzer` está marcado como ritual.
- O filtro de fonte de Zagalhta retorna **63 magias**, embora o catálogo próprio contenha 62 entradas, por incluir a reimpressão vinculada de Pele de Dragão.
- O Grimório passa a possuir **1.108 registros-base de magias/poderes** e **7 catálogos registrados**.
- `tools/validate-project.js` recebeu validações específicas para a cobertura integral do Capítulo 7.

## 5.9.0

- Integra as duas classes do Capítulo 6 de *Somnus Domina — Zagalhta's Exolunar Collection*: **Cavaleiro Dracônico** (*Dragoneer*) e **Piloto de Frame** (*Frame Pilot*), ambas integralmente localizadas para PT-BR.
- Adiciona progressões estruturadas do 1º ao 20º nível para as duas classes.
- Preserva a arquitetura incomum do Cavaleiro Dracônico, em que o **Conceito Central** determina Dados de Vida, salvaguardas, proficiências e tipo de progressão de magia.
- Integra os **9 Conceitos Centrais** do Cavaleiro Dracônico e os **19 Tipos de Encarnação** descritos pela classe.
- Integra as **5 Designações Tecnológicas** do Piloto de Frame e preserva as regras de frame unit, Junção, Crescimento e Aprimoramento Inerente.
- Integra **36 subclasses adicionais** do capítulo para 16 classes já presentes no Grimório.
- Totaliza **50 novas entradas de subclasse/especialização** de Zagalhta e eleva o projeto para **359 subclasses**.
- Vincula à nova classe Cavaleiro Dracônico as três subclasses já incorporadas de *Blade, Bone, & Benefit*: Golpeador Sombrio, Véu da Fortuna e Cavaleiro da Escama Fásica.
- Estrutura **256 características** e **30 tabelas** entre as novas especializações e subclasses de Zagalhta.
- Preserva as **Compulsões dos Fardos** de Destimus, Jalasaor, Ombra, Setanta, Sihlu e Zega como blocos complementares das subclasses de Alma Favorecida.
- Mantém os nomes originais em inglês como aliases pesquisáveis, com apresentação e regras de consulta em português brasileiro.
- Mantém as magias do Capítulo 7 de Zagalhta fora do escopo desta versão.

## 5.8.0

- Integra a classe **Ministro de Sangue** do Capítulo IX de *Somnus Domina — Blade, Bone, & Benefit*, incluindo criação, fundamentos, 17 características catalogadas e tabela de progressão do 1º ao 20º nível.
- Integra as **8 Seitas Genéticas** do Ministro de Sangue.
- Integra as **55 subclasses efetivamente enumeradas** pelo índice do Capítulo X, com 339 características de subclasses estruturadas no total da fonte.
- Estrutura **12 tabelas complementares** de magias de domínio, círculo, capítulo, juramento e listas expandidas, preservando-as na aba de Tabelas e na visão geral.
- Preserva também as regras sem nível próprio das subclasses, incluindo **Compulsões dos Fardos**, **Preceitos dos Juramentos** e as **Relíquias dos Caminhos do Santo da Espada**.
- Documenta a divergência interna do livro: o sumário anuncia 59 subclasses no Capítulo X, mas as páginas de índice do capítulo enumeram 55.
- Preserva as três subclasses de **Dragoneer** como conteúdo consultável com classe-base externa pendente, sem fabricar a classe ausente; a fonte remete o Dragoneer a *Zagalhta’s Exolunar Collection*.
- Mantém **Fardo de Gotham** e **Fardo de Scorn** como versões próprias de *Blade, Bone, & Benefit* devido às mudanças mecânicas presentes no compêndio.
- Adapta barra lateral, busca rápida e página de subclasse para lidar com subclasses cuja classe-base ainda não foi incorporada.
- Mantém intacta a integração de 108 magias de *Blade, Bone, & Benefit* feita na versão 5.7.

## 5.7.0

- Integra o Capítulo XI — Biblioteca de Magias de *Somnus Domina — Blade, Bone, & Benefit*.
- Adiciona 48 novas entradas de magia localizadas para PT-BR.
- Vincula 60 reimpressões às entradas de Lyre já existentes como nova procedência, evitando duplicação na pesquisa.
- Preserva os seis grupos de magia do capítulo como traços pesquisáveis.
- Preserva integralmente os modelos de Espírito Fantasma e Assistente Morto-Vivo nas magias de conjuração correspondentes.
- Inclui fontes secundárias na busca textual e na ficha detalhada das magias, de forma genérica para futuras integrações.
- Mantém classes e subclasses do compêndio fora do escopo desta versão, conforme a etapa solicitada.

## 5.6.0

- Criado `js/registry.js`, responsável pelo registro central de fontes e catálogos.
- Criado `data/sources.js`, que concentra nomes, aliases, rótulos de filtro, ordem e textos de apresentação das fontes.
- Os cinco catálogos atuais de magia agora se registram por `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
- `allSpells()` deixou de enumerar manualmente PHB, Xanathar, Tasha, Spell Compendium e Lyre.
- Agrupamento e filtro de fontes passaram a ser resolvidos pelo registro central, incluindo Costa da Espada, Magia de Sangue e Poder Psiônico.
- Tela inicial, resumo do catálogo e página Sobre deixaram de conter listas fixas de livros.
- Adicionado `tools/validate-project.js`, que valida carregamento dos dados, fontes, catálogos, IDs, vínculos de subclasses e progressões.
- Validação da versão confirma 19 classes, 246 subclasses, 19 progressões e 998 registros-base, sem erros ou avisos.

## 5.5.0

- Corrigido o painel **Fundamentos da classe** das quatro classes de Retia: Dado de Vida, PV de 1º nível, PV dos níveis seguintes, proficiências e equipamento voltam a ocupar seus campos corretos.
- Integradas **127 subclasses** de *Lyre's Guide to Retia — Land of Industry*, todas localizadas para PT-BR.
- Adicionados os 19 Fardos Cósmicos da Alma Favorecida, 12 Intenções Autorais do Inscritor, 14 Epítetos do Cavaleiro das Pétalas e 12 Caminhos de Devoção do Santo da Espada.
- Adicionados 63 arquétipos para as classes-base, incluindo os 7 arquétipos apresentados para o Patrulheiro Revisado.
- Os arquétipos do Patrulheiro Revisado foram ligados à classe Patrulheiro existente com indicação explícita de compatibilidade com a revisão de Lyre.
- Nomes originais em inglês foram preservados como aliases pesquisáveis; regras e descrições ficam em português.
- Total de subclasses do projeto aumentado de 119 para **246**.

## 5.4.0

- Integração das quatro classes originais de Lyre's Guide to Retia em português brasileiro: Alma Favorecida, Inscritor, Cavaleiro das Pétalas e Santo da Espada.
- Progressões estruturadas completas de 1º a 20º nível para as quatro novas classes.
- Adicionado catálogo de 26 Inscrições do Inscritor.
- Criados sigilos e cores próprios para as novas classes.
- Mantidas as subclasses de Retia fora desta etapa, conforme o escopo definido. O Patrulheiro Revisado também ficou fora por ser apresentado pela fonte como uma alternativa à classe existente, não uma das quatro classes novas.

## 5.3.0

- Integradas 280 entradas de magia de **Lyre's Guide to Retia — Land of Industry**.
- Todo o conteúdo de consulta dessas magias foi traduzido para português brasileiro.
- Adicionado `data/lyre-spells.js` como módulo separado e totalmente offline.
- Adicionado o filtro de fonte **Lyre's Guide to Retia**.
- Incluídas nas entradas afetadas as regras globais de **Convocação Cromática** e **Eidomancia**, necessárias para interpretar corretamente essas magias.
- Preservadas as revisões Legacy/5.19 como regras próprias da fonte, sem substituir silenciosamente as versões oficiais existentes.
- Preservadas lacunas explícitas do PDF, incluindo a duração não informada de **Chuva de Flechas de Tamamo**.
- Nenhuma classe ou subclasse de Retia foi adicionada nesta etapa.

## 5.1.0

- Integrado o conteúdo de subclasses e magias do **Caldeirão de Tasha para Tudo**.
- Adicionada a classe **Artífice**, com tabela de progressão real de 20 níveis e quatro especializações.
- Adicionadas 30 subclasses e 167 características de subclasse.
- Adicionadas 21 magias novas de Tasha em português.
- Adicionadas 13 tabelas auxiliares estruturadas.
- Catálogo de magias passa a reconhecer a fonte **Caldeirão de Tasha**.
- Verificada ausência de IDs e nomes duplicados nas novas entradas.
- Documentadas divergências internas do PDF sem substituir silenciosamente a fonte.

## 5.0.0

- Incorporadas 31 subclasses do Guia de Xanathar para Todas as Coisas.
- Estruturadas 165 características de subclasses e 10 tabelas auxiliares.
- Incorporadas 95 magias do Capítulo 3 em português.
- Adicionado o agrupamento/filtro de fonte Guia de Xanathar.
- Verificados IDs únicos entre os catálogos do Livro do Jogador, Xanathar e Spell Compendium.
- Corrigidos artefatos de OCR detectados nas novas magias e em mudanças de página/coluna das subclasses.
- Corrigido o carregamento de `homebrew-paladin-bahamut.js` no arquivo principal.
- Versão principal elevada para 5.0.0 devido à expansão ampla do compêndio.

## 4.8.0

- Incorporadas as 361 magias do Livro do Jogador de D&D 5e 2014 em português.
- O catálogo do Livro do Jogador passou a ser local e offline, sem dependência de sincronização SRD.
- Adicionadas as magias ausentes do SRD, incluindo Braços de Hadar.
- Reconstruídas as associações de classes a partir das listas de magia do Capítulo 11.
- Adicionadas páginas de origem a todas as magias oficiais.
- Catalogadas e documentadas três divergências internas de metadados no PDF: Falar com Plantas, Muralha de Pedra e Telepatia.
- Validada a unicidade das 361 magias oficiais.

## 4.7.0

- Criados ícones exclusivos em SVG para cada escola de magia, seguindo a linguagem visual do Grimório.
- Aplicados os ícones de escola em todas as magias da listagem principal.
- Cabeçalhos das páginas de magia agora usam o ícone correspondente à escola da magia.
- Busca rápida (Ctrl+K) de magias agora exibe os ícones corretos por escola.
- Reorganizada a meta das linhas de magia para mostrar escola, nível, ritual, concentração e fonte com melhor legibilidade.

## 4.6.0

- Corrigida a quebra e contenção de fontes longas nos cartões de subclasses.
- Removidos os banners “Consulta completa” das páginas de classe e subclasse.
- Removidos da interface os botões Exportar, Importar e Sincronizar.
- Removido do painel principal o cartão de status do cache/tradução das magias.
- Ajustados os textos de armazenamento para refletir a interface atual.

## 4.5.0

- Adicionada a classe Spellblade v1.3 integralmente em PT-BR.
- Adicionadas nove subclasses/técnicas com progressões próprias.
- Adicionada progressão estruturada de 20 níveis.
- Adicionados 32 efeitos de Égide como dados reais.
- Adicionada lista de magias da classe e tabelas de magias das técnicas.
- Preservadas e documentadas inconsistências internas de nomenclatura entre a tabela e o texto da Égide.
- Adicionada atribuição CC-BY-4.0 de KibblesTasty.
- Corrigido o carregamento do catálogo Spell Compendium no HTML principal.
## 5.48.0

- Adicionado o Grimório Admin em `/admin`, com login server-side, sessão assinada de 8 horas em cookie HttpOnly, proteção CSRF, logout e cabeçalhos de segurança.
- Novo editor de Cover e Detail Art para as 27 classes, com preview sem persistência, detecção de alterações, confirmação por diferenças e suporte avançado a `scale`.
- Vercel Functions passam a editar estruturalmente `data/class-covers.js` e `data/class-detail-art.js` por AST, com allowlist fixa e verificação de preservação das demais entradas.
- Escrita GitHub usa blobs, árvore, commit único e atualização de referência sem force; conflitos na mesma entrada retornam resposta explícita sem sobrescrita silenciosa.
- Modo `mock` fail-closed valida todo o fluxo sem gravar arquivos nem chamar o GitHub; escrita real só é habilitada explicitamente em Production.
- Incluídos testes nativos Node, validador de integração Admin/Vercel, documentação de deploy e utilitário para gerar hashes scrypt de senha.
## 5.49.0

### Interface — imagens de raças

- Adicionados banners uniformes aos cards das 42 raças; entradas sem ilustração usam placeholder com iniciais e textura do Grimório.
- A página interna de raça passa a usar hero dividido, mantendo conteúdo e escolhas à esquerda e arte ampliável à direita.
- A transição entre texto e Detail Art usa um fade horizontal no desktop e vertical em telas compactas, eliminando o corte seco da ilustração.
- O piloto Arhcoon usa a imagem local `assets/race-art/arhcoon.png` na capa e no detalhe, com foco específico para cada contexto.
- Imagens raciais possuem texto alternativo, carregamento resiliente, fallback para falha de rede, lightbox por `dialog`, restauração de foco e suporte a `prefers-reduced-motion`.
- Criados `data/race-covers.js`, `data/race-detail-art.js`, `css/race-art.css` e `js/race-art-runtime.js`.

### Admin — Artes de Raças

- Nova rota `/admin/race-art` e endpoint `/api/admin/race-art` para editar Cover e Detail Art das 42 raças.
- Adicionado `manifest.raceIndex` como índice canônico validado contra `GRIMORIO_RACES`.
- O editor aceita somente paths `assets/` ou URLs HTTPS autorizadas; imagens exigem descrição acessível e não há upload binário.
- Edição AST, allowlist, hashes por entrada, conflito `409`, modo mock e commit GitHub atômico sem `force` foram preservados.
- Adicionados testes de serviço/validação e gates `validate-race-art-5.49.js` e `validate-admin-5.49.mjs`.

## 5.50.1

### Infraestrutura — retorno ao site estático

- O Painel Administrativo Git-backed foi retirado temporariamente, incluindo login, APIs de escrita, integração GitHub, rewrites e variáveis da Vercel.
- O Grimório volta a ser publicado como site inteiramente estático, sem backend, secrets ou criação de commits pelo navegador.
- Covers e Detail Arts de classes e raças continuam preservados nos mapas JavaScript e podem ser atualizados diretamente no repositório.
- Todas as artes raciais e informações adicionadas na série 5.50 foram mantidas sem alterações.
