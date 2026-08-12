# Grimório D&D 5e PT-BR — versão 5.39.0

## 5.39.0 — Navegação profunda e links nativos

- Classes, subclasses, raças, subraças, magias e equipamentos passam a possuir **URLs profundas próprias** usando rotas por hash.
- Cards e resultados principais foram convertidos em links HTML reais, habilitando **Ctrl+clique**, **Cmd+clique**, clique do meio e **Abrir link em nova guia** pelo menu do navegador.
- Rotas de subclasses usam o formato `#/class/<classe>/subclass/<subclasse>` e subraças usam `#/race/<raça>/subrace/<subraça>`.
- Equipamentos podem ser abertos diretamente por `#/equipment/<item>`, mantendo o item expandido e destacado no catálogo.
- Recarregar a página preserva o conteúdo aberto; Voltar/Avançar do navegador seguem o histórico de hashes.
- Classes, subclasses, raças/subraças, magias e equipamentos possuem ação **Copiar link** para compartilhamento direto.
- Títulos das guias do navegador passam a refletir o conteúdo aberto.
- A busca global `Ctrl+K` agora devolve links reais para classes, subclasses, **raças, subraças, magias e equipamentos**; seus resultados também podem ser abertos em outra guia.
- Rotas antigas simples continuam aceitas para preservar favoritos e links existentes.

## 5.38.0 — Homebrew: O Sábio

- Adicionada a classe **Sábio**, diretamente do PDF fornecido, com Dado de Vida d8, Inteligência como habilidade principal, Pontos de Erudição, Encantar Arma, Acervo Intelectual, Proteção Arcana, Terrenos Arcanos, Conjuração Livre, Desconcentrar, Desencantar e Espelho Mágico.
- Adicionada a Doutrina **Catalisador**, com Conduit Arcano, Maestria Elemental, Proteger Terreno e Abracadabra; as escolhas adicionais de Maestria Elemental nos níveis 8, 10 e 12 também aparecem na progressão da subclasse.
- O PDF não contém uma tabela completa 1–20. A progressão do Grimório organiza apenas níveis e escalonamentos explicitamente citados pela fonte; níveis sem nova concessão permanecem vazios, sem presumir ASI, Ataque Extra ou espaços de magia.
- Adicionado catálogo **O Sábio — Homebrew** com 14 entradas: 6 truques, 3 Terrenos Arcanos e 5 Magias de Sábio.
- Terrenos e Magias de Sábio não possuem nível de magia na fonte. O catálogo agora suporta **Sem nível / recurso de classe**, sem classificá-los artificialmente como truques ou magias de 1º–9º nível.
- Lacunas da fonte são explicitadas nas fichas, incluindo termos não definidos como “propriedade frio”, “congelado” e “sangrando”, além das unidades “quadrado/bloco”.

## 5.37.0 — Sidebar fixável e capas de classe

- Adicionado botão de **pin** no topo da barra lateral. No desktop, o menu pode ser fixado aberto e permanece expandido até ser desafixado.
- A preferência de fixação é persistida no navegador em `grimorio-sidebar-pinned-v1`.
- Criada a infraestrutura centralizada `data/class-covers.js` para associar imagens de capa aos cards de classe sem editar cada arquivo de classe.
- O **Emissário Espiritual** recebeu a primeira capa de teste usando a imagem fornecida, com blur e overlay preto configuráveis para preservar a legibilidade.
- Links do Imgur são convertidos para o host direto e o carregador tenta automaticamente extensões compatíveis (`png`, `jpg`, `jpeg`, `webp`, `gif`). O overlay só aparece após o carregamento da imagem; em caso de falha total, o card volta ao visual padrão em vez de ficar preto.
- Novo CSS `css/class-covers.css`, isolando o tratamento visual das capas dos demais estilos.

### Como adicionar capas a novas classes

Edite `data/class-covers.js` e acrescente uma entrada ao objeto `covers`, usando o **ID estável da classe** como chave:

```js
'barbarian': {
  image: 'assets/class-covers/barbarian.webp',
  position: 'center 30%',
  blur: 3,
  overlay: 0.55
}
```

- `image`: URL externa ou caminho local relativo ao `index.html`.
- `position`: equivalente ao `background-position` do CSS; ajuste para enquadrar o personagem.
- `blur`: intensidade do desfoque, de 0 a 12.
- `overlay`: opacidade da camada preta, de 0 a 0.9.

Para descobrir o ID, consulte o campo `id` da classe no arquivo de dados correspondente. Para distribuição offline, prefira salvar a imagem dentro do próprio Grimório, por exemplo em `assets/class-covers/`, em vez de depender de uma URL externa.

## 5.36.0 — Microtransições e navegação fluida

- Adicionada uma camada nativa de **microtransições** para troca de páginas, abas e blocos expansíveis.
- Navegação principal usa saída/entrada curta com opacidade e deslocamento mínimos, mantendo a consulta rápida.
- Abas e filtros de consulta de classes/subclasses recebem animação local, sem transformar o Grimório em uma SPA ou adicionar dependências.
- Características e demais blocos em `<details>` ganham entrada suave ao serem abertos.
- Paleta de busca, modal de conteúdo e interfaces em overlay recebem entrada discreta e consistente.
- Todo o sistema respeita `prefers-reduced-motion` e possui fallback defensivo para ambientes sem `matchMedia`.
- Implementação isolada em `css/fluid-transitions.css` e `js/fluid-transitions.js`.

## 5.35.0 — Sidebar adaptativa / navegação responsiva

- A barra lateral agora inicia **compacta no desktop** e expande suavemente ao passar o mouse ou receber foco pelo teclado, inspirada no componente de sidebar enviado, porém implementada em HTML/CSS/JavaScript nativos.
- No estado compacto, permanecem visíveis os ícones principais; nomes, contadores e ações textuais aparecem na expansão.
- Subclasses da classe ativa são exibidas somente quando a barra está expandida, reduzindo ruído visual.
- A busca **Ctrl+K** vira um botão compacto e recupera o campo completo quando a barra se expande.
- Em telas móveis, a sidebar agora abre como um **painel em tela cheia**, com animação lateral, botão de fechar e suporte à tecla `Esc`.
- A expansão por teclado usa `focusin/focusout`, e as animações respeitam `prefers-reduced-motion`.
- Novos arquivos: `css/adaptive-sidebar.css` e `js/adaptive-sidebar.js`.

## 5.34.0 — Spotlight Cards / refinamento visual

- Implementado o conceito **GlowCard / Spotlight Card** diretamente na arquitetura existente em HTML/CSS/JavaScript, sem adicionar React, Tailwind ou shadcn.
- O efeito acompanha o cursor de forma sutil em **Classes, Subclasses, Raças, Subraças, Planejador de Atributos, Equipamentos** e no hero do **Painel**.
- Cards de classe/subclasse reutilizam a própria cor temática; Raças/Equipamentos usam dourado e o Painel utiliza o tom arcano.
- O efeito também responde ao foco por teclado e é automaticamente removido para `prefers-reduced-motion` e dispositivos com ponteiro coarse/touch.
- A implementação foi isolada em `css/spotlight-cards.css` e `js/spotlight-cards.js` para permitir evolução independente da UI.


## 5.33.0 — Equipamentos do Lyre / Somnus Domina 5.19

- Integrado o Capítulo IX — **Weapons & Armor** de *Lyre's Guide to Retia — Land of Industry*.
- Adicionadas **22 armas**, **1 Escudo Grande** e **6 entradas de munição**, elevando o catálogo combinado para **96 equipamentos**.
- Adicionadas as propriedades da 5.19 e propriedades específicas de armas de fogo, com tooltips em PT-BR.
- Adicionados filtros próprios para **Armas de Fogo Simples/Marciais** e **Munições**.
- A página Equipamentos passa a exibir regras complementares expansíveis de **Tamanhos de Equipamento** e **Armas de Fogo**, preservando proficiências, munição, recargas e multiplicadores de custo/peso da fonte.
- O capítulo não adiciona armaduras corporais novas; a nova entrada defensiva é o **Escudo Grande** (+4 CA, For 19, desvantagem em Furtividade).


Compêndio local em português para consulta de classes, subclasses e magias de D&D 5e 2014 e dos suplementos incorporados ao projeto.

## 5.32.0 — Equipamentos do Ryoko

- Integradas **11 armas** e **6 equipamentos de aventura** de *Ryoko's Guide to the Yokai Realms*.
- Adicionadas **7 propriedades de arma** próprias da fonte, com tooltips e regras especiais.
- Preservados dados de fabricação e regras específicas de armas como Kusarigama, Nunchaku, Tessen e Ōdzutsu.

## 5.31.0 — Equipamentos

- Nova opção **Equipamentos** no menu lateral, imediatamente abaixo de **Raças e Subraças**.
- Catálogo inicial do **Livro do Jogador — D&D 5e 2014** com **50 itens**: **37 armas**, **12 armaduras** e **1 escudo**.
- Armas exibem preço, dano, tipo de dano, peso, categoria e propriedades. Cada propriedade possui explicação por **hover** e por foco de teclado.
- Armaduras exibem CA, peso, preço, exigência de Força e desvantagem em Furtividade quando aplicável.
- Filtros por tipo, categoria e fonte, além de busca textual e glossário de propriedades.
- A infraestrutura foi preparada como catálogo por fonte (`registerEquipmentCatalog`), para futuras adições de **Lyre, Ryoko e Somnus Domina**.
- A tabela fornecida imprime **“Beste Leve”**; o nome foi preservado no catálogo, com **“Besta Leve”** como alias de busca e nota editorial.

## Como abrir

1. Extraia toda a pasta do arquivo ZIP.
2. Mantenha a estrutura de pastas intacta.
3. Abra `index.html` em um navegador moderno.

Os catálogos incorporados funcionam offline.






## 5.30.6 — Hotfix da busca de Raças e Subraças

- Corrigida a busca por nomes como **Humano**, que antes também encontrava o termo `Humanoide` no tipo de criatura e mantinha praticamente todo o catálogo visível.
- Nomes de raças e subraças usam correspondência parcial; campos auxiliares como tipo, região e origem planar usam correspondência por palavra/expressão.
- A digitação continua sem re-renderizar o campo de busca: apenas a visibilidade dos cards é atualizada no DOM.
- Busca e filtros laterais agora compartilham a mesma função de correspondência.

## 5.30.5 — Ajustes de interface do catálogo racial

- Removidas, da página de catálogo de **Raças e Subraças**, a caixa **"Regras de atributos e exceções da 5.19"** e o aviso **"Revisão textual em andamento"**.
- Removida a tag **"Texto integral revisado"** dos cards de raça no catálogo.
- Corrigido o campo de busca do catálogo racial: a digitação agora permanece contínua, sem perder foco ao filtrar os resultados.
- A filtragem foi reorganizada para atualizar apenas a lista de resultados e a contagem exibida, preservando a experiência de pesquisa.

## 5.30.4 — Revisão textual racial, Fase 4 (conclusão)

- Revisão integral em PT-BR de **Kits’adria, Kobold, Kua Hono, Povo do Mar, Minotauro, Nefilim, Orc, Pétratára, Primordia, Maculado, Trealtin e Vanquis**.
- A Fase 4 cobre **12 raças, 60 subraças e 280 registros mecânicos** das páginas impressas 281–317 de *Lyre’s Guide to Retia*.
- Com as quatro fases, **34/34 raças e 196/196 subraças** estão marcadas como **Texto integral revisado**.
- Correções estruturais: `Rastreador pelo Olfato` restaurado ao Kua Hono Lagarto; `Linhagem` restaurada ao Sangue Misto do Nefilim; opções de `Sopro de Esporos` e tabela de `Frenesi Alimentar` deixaram de ser pseudo-traços independentes.
- Primordia exibe as magias de **Magia Elemental** da subraça selecionada.
- A linha incompleta de atributo do **Povo do Mar Litorâneo** é mostrada como nota editorial, sem inferência mecânica.
- O catálogo racial passa a **928 registros mecânicos reais** após as consolidações estruturais.
- Arquivos desta fase: `data/lyre-races-phase4-structure.js`, `data/lyre-races-phase4-text.js` e `tools/validate-races-phase4-5.30.4.js`.

## 5.30.3 — Revisão textual racial, Fase 3

- Revisado diretamente no *Lyre’s Guide to Retia — Land of Industry* o bloco contínuo das páginas impressas **241–280**: **Gnomo, Goblin, Golias, Hádislin, Halfling, Hanyou, Hobgoblin, Ilthrak-yar e Kaijou**. O **Humano**, situado no mesmo intervalo, permanece com a revisão integral já concluída na Fase 1.
- As 9 raças recebem **texto mecânico integral em PT-BR** para Traços Fixos, Traços de Legado, Sangue Misto e características de subraça.
- Foram auditadas **60 subraças** e **301 registros mecânicos** nesta fase.
- **Hanyou** recebeu uma apresentação própria de Traços de Herança, separando regra, traço de linhagem, opções positivas e prejudiciais e explicitando as remoções dos prejuízos nos níveis 8 e 13.
- **Hádislin** passa a mostrar a tabela de **Legado Amaldiçoado** dentro da subraça selecionada, incluindo as 9 linhagens infernais e 10 variantes de Hádislin de Cristal.
- **Hobgoblin** foi corrigido estruturalmente: Hospitalidade, Passagem e Despeito agora aparecem apenas dentro de **Orientação Feérica**, como determina a fonte.
- Com as Fases 1–3, **22 das 34 raças** estão marcadas como **Texto integral revisado**. O catálogo mantém **196 subraças** e contém **934 registros de traços** após a correção estrutural desta fase.
- A Fase 3 é aplicada em camadas (`lyre-races-phase3-structure.js` + `lyre-races-phase3-text.js`) e possui validador próprio (`validate-races-phase3-5.30.3.js`).

## 5.30.2 — Revisão textual racial, Fase 2

- Revisadas diretamente no *Lyre’s Guide to Retia — Land of Industry* as raças **Arhcoon, Tribo Bestial, Povo-Pássaro, Capy’hado, Dragonkin, Anão, Elfo, Enáretos, Feralus, Firbolg, Flooflin e Framebilt** (páginas impressas 197–240).
- As 12 raças passam a usar **texto mecânico integral em PT-BR** para Traços Fixos, Traços de Legado, Sangue Misto e características de subraça.
- Foram auditadas **69 subraças** e **322 registros mecânicos** nesta fase.
- A releitura também corrigiu erros de estrutura da importação inicial, incluindo características omitidas ou atribuídas à categoria/subraça errada.
- Com o Humano já revisado na Fase 1, **13 das 34 raças** agora estão marcadas como **Texto integral revisado**; as demais continuam explicitamente marcadas como pendentes.
- O catálogo preserva **34 raças** e **196 subraças** e, após eliminar pseudo-traços e restaurar características omitidas, contém **937 registros de traços**.
- A revisão é aplicada em camadas (`lyre-races-phase2-structure.js` + `lyre-races-phase2-text.js`) para manter a base original rastreável.

## 5.30.1 — Revisão textual racial, Fase 1 (Humano)

- **Humano** foi relido diretamente no *Lyre’s Guide to Retia — Land of Industry* (páginas impressas 273–275) e passa a usar texto mecânico integral em PT-BR.
- Corrigidas **Perícia Enraizada**, todas as 6 opções de **Traços de Legado** humanos, os 3 **Traços de Sangue Misto** e as habilidades das 7 subraças.
- **Jackman** agora exibe corretamente o aumento de atributo, **Conjunto Expandido de Perícias** e **Talento**.
- O formato de dados passa a aceitar `description` para texto integral e mantém `summary` apenas para consulta rápida.
- O detalhe racial passa a exibir uma marca de qualidade: **Texto integral revisado** ou **Resumo — revisão pendente**.
- Adicionado suporte a `lore`/descrição narrativa da raça e `description` própria para subraças, criando o padrão que será aplicado às demais raças nas próximas fases.
- A versão 5.30.1 não declara as outras 33 raças como revisadas: elas continuam visivelmente marcadas como pendentes até a auditoria correspondente.

## Novidades da versão 5.30 — Raças e Subraças

- Nova seção **Raças e Subraças**, posicionada no menu lateral imediatamente abaixo de **Planejador de Atributos**.
- Indexadas **34 raças** e **196 subraças** do Capítulo VII de *Lyre's Guide to Retia — Land of Industry*.
- Cada raça apresenta especificações, traços raciais fixos, aumentos de atributo tradicionais, subraças e Traços de Legado em português.
- Implementada seleção interativa de **2 Traços de Legado**, com bloqueio visual após completar as duas escolhas.
- Implementado modo **Sangue Misto**: a raça dominante fornece traços fixos e subraça, enquanto as duas escolhas de Legado podem ser combinadas com uma raça secundária e suas opções próprias de Sangue Misto.
- Exceções internas foram preservadas, incluindo o sistema de **Traços de Herança dos Hanyou**, escolhas extras de determinadas linhagens e regras raciais que modificam quantidade/tipo de escolhas.
- Todos os cartões utilizam resumos mecânicos em **PT-BR** e mantêm a página da fonte para consulta de texto longo, condições e exceções.
- Estado das escolhas salvo em `grimorio-race-builder-v1` via `localStorage`.
- Adicionados `data/lyre-races.js`, `js/race-browser.js` e `tools/validate-races-5.30.js`.

## Novidades da versão 5.29 — Planejador de Atributos

**5.29.1:** corrigida a navegação lateral para exibir **Planejador de Atributos** imediatamente abaixo de **Painel** em todas as camadas de UI.

- Nova ferramenta **Planejador de Atributos**, acessível logo abaixo de **Painel** no menu lateral.
- Interface de Point Buy inspirada no fluxo de criação de personagem de **Baldur's Gate 3**, mantendo a identidade visual do Grimório.
- Orçamento de **27 pontos**, valores-base entre **8 e 15** e custos progressivos 8=0, 9=1, 10=2, 11=3, 12=4, 13=5, 14=7 e 15=9.
- Bônus flexíveis separados de **+2** e **+1**, impedindo que os dois sejam aplicados ao mesmo atributo.
- Exibição simultânea do valor-base, custo, valor final e modificador de Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma.
- O planejamento é salvo automaticamente no navegador em `grimorio-ability-planner-v1`.
- Adicionado `js/ability-planner.js` para manter a ferramenta isolada do catálogo de classes/magias.
- Adicionado `tools/validate-ability-planner-5.29.js`.

## Novidades da versão 5.28 — Animar Energia

- Adicionada **Animar Energia (Animate Energy)**, magia homebrew vinculada à classe **Cultivador**, traduzida diretamente da captura de tela fornecida pelo usuário.
- A magia foi cadastrada como **Necromancia de 1º nível (ritual)**, com tempo de conjuração de **1 minuto**, alcance de **9 metros**, componentes **V, S, M** e duração **Instantânea**.
- A regra de comando a até **18 metros**, o limite base de **até 2 criaturas** e o escalonamento descrito pela fonte até o limite de **4** foram preservados.
- A imagem não fornece bloco de estatísticas para o servo morto-vivo/esfera de energia necromântica; o Grimório registra essa lacuna em `sourceNote` sem inventar CA, PV, ataques ou outros valores.
- Criado `data/cultivator-homebrew-spells.js` e registrada a fonte/catálogo **Magias Homebrew — Cultivador**.
- A referência editorial da classe Cultivador foi atualizada para retirar **Animate Energy** da relação de magias ainda sem bloco mecânico disponível.
- O catálogo passa para **1.171 registros-base de magias/poderes**, distribuídos em **9 catálogos**, com **16 fontes registradas**.
- A exportação Foundry da nova magia passa na validação sem avisos: escola `nec`, ritual, alcance métrico e componentes materiais são representáveis pelo perfil homologado.
- O **Grimório Importer embutido foi sincronizado para 0.9.3**, preservando o suporte ao Lutador de Rua e Dragão de Dojima já desenvolvido.
- Adicionado `tools/validate-cultivator-homebrew-spell-5.28.js`.

## Novidades da versão 5.27 — Lutador de Rua

- Integrada a classe homebrew original **Lutador de Rua** diretamente do PDF fornecido para o projeto.
- A classe possui **progressão completa do 1º ao 20º nível**, Dado de Vida d10 e **Dado de Briga** escalando de **1d6 → 1d8 → 1d10 → 1d12**.
- Foram estruturados **62 registros de características/opções de classe**, incluindo **Cólera**, os quatro Surtos iniciais e **20 Essências de Cólera selecionáveis** distribuídas entre os desbloqueios de 3º, 9º, 13º, 15º e 17º nível.
- Adicionado o primeiro **Arquétipo de Rua: Dragão de Dojima**, com quatro marcos de subclasse nos níveis **3, 6, 11 e 17**, cobrindo Rush Style, Beast Style e Dragon Style e seus aprimoramentos.
- As entradas **Ataque Extra**, **Incremento de Habilidade** e **Essência Adicional** aparecem na progressão, mas o PDF não fornece blocos próprios para elas. O Grimório registra a concessão sem importar texto padrão de outra fonte.
- As variações nominais **Deita Tigre / Queda do Tigre** e **Essência do Deita Tigre** foram documentadas em referências editoriais, sem inventar uma técnica adicional.
- Registrada a fonte `street-fighter-homebrew`; o catálogo atual passa para **26 classes, 381 subclasses/especializações, 26 progressões estruturadas e 15 fontes registradas**.
- O **Grimório Importer permanece em 0.9.2** nesta versão do site. O exporter já usa o identificador estável `street-fighter`, mas a importação nativa da nova classe fica explicitamente marcada como pendente até uma próxima versão do módulo.
- Adicionado `tools/validate-street-fighter-5.27.js` para validar conteúdo, progressão, Essências, subclasse e bundle Foundry do site.

## Novidades da versão 5.26 — Cultivador

- Integrada integralmente a classe **Cultivador (Cultivator)** a partir do PDF do D&D Wiki fornecido para o projeto, com tradução completa para PT-BR.
- A progressão cobre os **20 níveis**, incluindo **Qi**, **Nível de Magia** e **Limite de Amplificação** próprios da classe.
- Foram estruturados **22 blocos de características de classe**, **10 tabelas**, **5 referências editoriais/multiclasse** e a lista de magias do Cultivador.
- Foram adicionados os três **Chamados à Divindade**: **Chamado do Mal**, **Chamado Acromático** e **Chamado do Céu**, totalizando **19 características de subclasse** e 3 tabelas de Magias do Chamado.
- As dez Magias da Alma da progressão — Rajada, Conexão, Alteração, Explosão, Amplificação, Esfera, Campo, Deslocamento, Santuário e Tempestade conforme os blocos da fonte — permanecem incorporadas às características da classe com seus efeitos por tipo de Qi.
- A inconsistência da tabela Esotérica de **Amplificação da Alma** (rotulada como d4, mas com seis resultados) foi documentada sem correção inventada. O cabeçalho **Sweeping Soul Shaping**, sem texto mecânico nem entrada na progressão, foi preservado como referência editorial.
- Magias homebrew apenas citadas na lista do PDF, mas sem bloco de regras no documento, permanecem somente como referências; nenhuma mecânica ausente foi fabricada.
- O **Grimório Importer 0.9.2** reconhece `cultivator`, seus três Chamados e seus bundles individuais. O Item de classe usa Sabedoria como habilidade de conjuração, mas mantém `progression: none` para não criar espaços de magia que a classe não possui — sua conjuração funciona por **Qi**.
- **Autoridade Divina** recebe uma Activity conservadora de ação com rolagem `1d100`; sucesso por nível e recarga condicional permanecem sob conferência do jogador/Mestre.
- O catálogo atual passa para **25 classes, 380 subclasses/especializações e 25 progressões estruturadas**.

Consulte `INTEGRACAO_CULTIVADOR_5.26.md`, `TESTE_FOUNDRY_CULTIVADOR_5.26.md` e `VALIDACAO_CULTIVADOR_5.26.md`.

## Ajuste 5.25.1 — Organização das características no Foundry

- Atualizado o **Grimório Importer para 0.9.1**.
- **Grimório — Características** agora é organizado automaticamente em **24 pastas de classe**.
- Cada uma das **377 subclasses/especializações** recebe uma subpasta dentro da pasta da classe correspondente.
- Características da classe ficam diretamente na pasta da classe; características de subclasse ficam na subpasta da própria subclasse.
- Títulos originalmente em **CAIXA-ALTA** passam a usar capitalização natural em PT-BR, por exemplo `FÚRIA` → `Fúria` e `ATAQUE DESCUIDADO` → `Ataque Descuidado`.
- A normalização altera apenas o **nome exibido**. `featureKey`, `system.identifier`, flags de automação, Advancements e referências permanecem estáveis.
- Ao reimportar conteúdo já existente, o módulo **move e renomeia os mesmos Items gerenciados**, preservando seus UUIDs e evitando duplicações.
- `/grimorio-packs` passa a informar também a quantidade de pastas gerenciadas quando o compêndio possui a nova organização.
- A Fase 12 foi registrada como homologada no Foundry real; esta organização 5.25.1 ainda deve ser conferida no ambiente real após a reimportação.

Consulte `AJUSTE_FOUNDRY_ORGANIZACAO_5.25.1.md`, `TESTE_FOUNDRY_ORGANIZACAO_5.25.1.md` e `VALIDACAO_FOUNDRY_ORGANIZACAO_5.25.1.md`.

## Novidades da versão 5.25 — Fase 12

- **Grimório Importer 0.9.1** com expansão do framework mecânico para as **24 famílias de classe**.
- **71 perfis explícitos**: 59 de classe e 12 de subclasse.
- **86 Activities**, **37 reservas/usos** e **11 Active Effects** planejados pelo framework.
- Perfis de subclasse agora são isolados pelo `grimorioId` exato do bundle, evitando colisões de nomes.
- Recuperações parciais por fórmula adicionadas, começando pela **Canalização de Foco** do Santo da Espada.
- Auditoria das **2.370 características de origem**: 71 perfiladas, 289 candidatos de alta prioridade, 718 de prioridade média e 1.292 predominantemente textuais/contextuais.
- Novo comando `/grimorio-auditoria-automacao`.
- As **Fases 11 e 12 foram homologadas no Foundry real**; o ajuste de organização 5.25.1 ainda depende de conferência de campo.

Consulte `FOUNDRY_IMPORTER_FASE12.md`, `TESTE_FOUNDRY_FASE12.md` e `VALIDACAO_FOUNDRY_AUTOMACAO_5.25.md`.

## Novidades da versão 5.24 — Fase 11.2

- Continuada a **Fase 11**, agora com a primeira camada conservadora de **Active Effects**.
- Atualizado o **Grimório Importer para 0.8.0** e o schema interno de automação para v2.
- A cobertura representativa passou para **25 características em 6 classes**: Bárbaro, Guerreiro, Ladino, Monge, Paladino e Patrulheiro.
- São geradas **23 Activities**, **6 recursos/usos** e **8 Active Effects** — 6 passivos/transferíveis e 2 aplicados por Activity.
- **Fúria** passou a aplicar no próprio Bárbaro vantagem em testes/salvaguardas de Força e resistências físicas B/P/S por até 1 minuto, sem automatizar bônus de dano ou término antecipado.
- **Defesa Paciente** continua consumindo `monk-chi` e agora aplica um efeito temporário com marcador `dodging` e vantagem em salvaguardas de Destreza.
- **Instinto Selvagem** e **Explorador Natural** automatizam vantagem em iniciativa.
- **Arquearia** do Guerreiro/Patrulheiro aplica +2 aos ataques `rwak`.
- **Pureza Corporal** e **Saúde Divina** recebem imunidades passivas representáveis de forma inequívoca.
- **Destruição Divina Aprimorada** usa uma Activity manual de 1d8 radiante em vez de um modificador global que poderia atingir ataques inválidos.
- Auras, dano condicional, propagação para aliados e outras regras dependentes de consciência/alvo continuam propositalmente fora da automação automática.
- As regressões de exportação granular, pacotes com 401 bundles, 24 classes, 377 subclasses e exportação de magias permanecem preservadas.
- Consulte `FOUNDRY_IMPORTER_FASE11_PARTE2.md`, `TESTE_FOUNDRY_FASE11_PARTE2.md` e `VALIDACAO_FOUNDRY_AUTOMACAO_5.24.md`.

## Novidades da versão 5.23 — Fase 11.1

- Iniciada a **Fase 11 da integração Foundry**, com a primeira camada de automação mecânica das características.
- Atualizado o **Grimório Importer para 0.7.0**.
- Criado `feature-automation.js`, que aplica perfis auditáveis a Items `feat` durante a materialização.
- A prova inicial cobre **16 características em 5 classes representativas**: Bárbaro, Guerreiro, Ladino, Monge e Paladino.
- São geradas **20 Activities nativas** e **6 perfis de recurso/uso**, com recuperação e consumo quando a regra é inequívoca.
- A automação é classificada em **completa**, **parcial** ou **somente descrição**; a cobertura inicial é 3 / 12 / 1.
- **Retomar o Fôlego** já recebe cura nativa e consumo de uso; **Chi** funciona como reserva compartilhada consumida por Rajada de Golpes, Defesa Paciente e Passo do Vento.
- **Cura pelas Mãos** usa reserva escalável e **Destruição Divina** usa consumo de espaços de magia com separação explícita do limite de 5d8.
- Características condicionais como **Sentido de Perigo**, **Ataque Descuidado** e **Esquiva Sobrenatural** não recebem efeitos automáticos invasivos.
- **Active Effects permanecem desativados nesta primeira parte** para evitar aplicar estados/modificadores sem contexto suficiente.
- Adicionado `/grimorio-automacao` e APIs `automationCoverage()` / `phase11Support()`.
- A Fase 9 (pacotes), Fase 10 (exportação granular), todos os compêndios e a exportação de magias permanecem preservados.
- Consulte `FOUNDRY_IMPORTER_FASE11.md`, `TESTE_FOUNDRY_FASE11.md` e `VALIDACAO_FOUNDRY_AUTOMACAO_5.23.md`.

## Correção 5.22.1

- Corrigido o desaparecimento dos botões **Exportar Foundry** nas fichas reais de classe/subclasse.
- A causa era uma sobrescrita posterior de `viewClass()` e `viewSubclass()` por `ui-enhancements.js` e `dynamic-consultation.js`: o `app.js` gerava o botão corretamente, mas essas camadas recriavam o cabeçalho usando apenas `detailActions()`, removendo o controle Foundry.
- As três camadas de renderização agora usam `foundryClassHeaderActions()`, preservando **Exportar Foundry** e **Classe + subclasses** no layout de consulta por abas.
- O teste da Fase 10 agora reproduz a ordem real do `index.html` (`app.js → ui-enhancements.js → dynamic-consultation.js → foundry-class-export-ui.js`) e valida Bárbaro/Caminho do Kaiju após todas as sobrescritas.
- Nenhuma alteração no schema JSON ou no Grimório Importer 0.6.0 foi necessária.

## Novidades da versão 5.22

- Concluída a **Fase 10 da integração Foundry de classes/subclasses**.
- Corrigida a regressão visual da Fase 9: os controles de exportação agora fazem parte do render nativo das fichas e aparecem inclusive quando a página é aberta diretamente por URL/hash.
- Todas as **24 classes** exibem **Exportar Foundry**, gerando somente o bundle JSON daquela classe.
- Todas as **377 subclasses/especializações** exibem **Exportar Foundry**, gerando somente o bundle JSON daquela subclasse.
- Cada classe mantém uma segunda opção **Classe + subclasses**, para quando for desejável importar o conjunto completo daquela classe.
- A página **Classes** continua oferecendo **Exportar catálogo** com os 401 bundles, sem substituir a exportação individual.
- Atualizado **Grimório Importer para 0.6.0**; os schemas permanecem `grimorio-foundry-class-bundle@1` e `grimorio-foundry-class-package@1`, portanto os JSONs continuam compatíveis com o fluxo homologado.
- A confirmação do usuário homologando a importação de pacotes da Fase 9 foi registrada.
- Criado um teste de regressão específico que percorre as 24 classes e 377 subclasses e reprova a versão caso qualquer ficha deixe de exibir seu botão individual ou deixe de gerar um JSON válido.

## Novidades da versão 5.21

- Concluída a **Fase 9 da integração de classes com Foundry VTT**.
- Classes e subclasses agora possuem **Exportar Foundry** diretamente na interface do Grimório.
- Cada classe pode ser exportada isoladamente ou como **Classe completa**, contendo a classe e todas as suas subclasses em um único JSON.
- A página **Classes** ganhou **Exportar catálogo**, gerando um único pacote com **24 classes + 377 subclasses = 401 bundles**.
- Criado o schema `grimorio-foundry-class-package@1`, que agrega bundles v1 sem alterar o contrato homologado das fases anteriores.
- Atualizado **Grimório Importer para 0.5.0**, com detecção automática de bundle individual ou pacote de arquivo único.
- Adicionado `/grimorio-import-package` como alias; `/grimorio-import` também aceita pacotes.
- Importação de pacote mantém os três compêndios desbloqueados durante o lote e restaura o estado ao final, reduzindo operações repetitivas.
- O pacote completo preserva **2.370 características de origem** e materializa **2.293 feats**, pois elementos convertidos em Advancements nativos não são duplicados.
- A homologação real da Fase 8 foi registrada após confirmação do usuário.
- Adicionados `FOUNDRY_IMPORTER_FASE9.md`, `TESTE_FOUNDRY_FASE9.md`, `VALIDACAO_FOUNDRY_CLASSES_5.21.md`, `tools/generate-foundry-phase9.js` e `tools/validate-foundry-phase9.js`.

## Novidades da versão 5.20

- Concluída a **Fase 8 da integração de classes com Foundry VTT**.
- O **Grimório Importer 0.4.0** habilita agora **24 classes e 377 subclasses/especializações**.
- As cinco classes especiais anteriormente reservadas foram implementadas com perfis próprios: **Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue**.
- O Cavaleiro Dracônico possui **12 perfis explícitos de Conceito Central**, que alteram Dado de Vida, proficiências e progressão de conjuração no Actor.
- Piloto de Frame usa dois pools nativos de escolha de salvaguarda e mantém **Crescimento** como característica própria, sem ASI genérico incorreto.
- Dobrador e Domador recebem escolha dinâmica de **Inteligência, Sabedoria ou Carisma** como habilidade de conjuração.
- Ministro de Sangue usa `d8` técnico no Item, mas o hook de PV converte rolagens para **2d4**, preservando a regra original para ganho de PV.
- Adicionados `/grimorio-special` e `/grimorio-configurar` para diagnóstico e reconfiguração das classes especiais no Actor.
- Os compêndios portáveis, ItemGrant por UUID, ItemChoice, importação em lote e reimportação sem duplicações das fases anteriores foram preservados.
- A limitação nativa do pool de Dados de Vida 2d4 do Ministro de Sangue permanece documentada; ela não é silenciosamente convertida em d8 para descansos.
- Adicionados `FOUNDRY_IMPORTER_FASE8.md`, `TESTE_FOUNDRY_FASE8.md`, `VALIDACAO_FOUNDRY_CLASSES_5.20.md`, `tools/generate-foundry-phase8.js` e `tools/validate-foundry-phase8-module.js`.

## Novidades da versão 5.19

- Concluída a **Fase 7 da integração de classes com Foundry VTT**.
- O **Grimório Importer 0.3.0** generaliza o materializador para **19 classes** e **347 subclasses** já classificadas como nativamente seguras.
- As cinco classes de arquitetura especial — **Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue** — e suas **30 subclasses** continuam bloqueadas de propósito para tratamento dedicado.
- Adicionado `ItemChoice` para escolhas estruturadas disponíveis no catálogo, incluindo **Estilo de Luta**, **Dádiva do Pacto** e **Metamágica**.
- Perfis de conjuração, ASIs, proficiências amplas, salvaguardas e seleção de subclasse são gerados por perfil de classe.
- `/grimorio-import` agora aceita **múltiplos bundles JSON** no mesmo seletor; `/grimorio-import-batch` foi adicionado como alias explícito.
- O armazenamento portátil em três compêndios, UUIDs de compêndio e reimportação sem duplicações da Fase 6 foram preservados.
- Nenhum Item de Mundo é criado pela Fase 7.
- O Artífice recebe aviso explícito para conferir o arredondamento de progressão de multiclasse ao usar regras 2014/legacy.
- Adicionados `FOUNDRY_IMPORTER_FASE7.md`, `TESTE_FOUNDRY_FASE7.md`, `VALIDACAO_FOUNDRY_CLASSES_5.19.md`, `tools/generate-foundry-phase7.js` e `tools/validate-foundry-phase7-module.js`.

## Novidades da versão 5.18

- Concluída a **Fase 6 da integração de classes com Foundry VTT**.
- O **Grimório Importer 0.2.0** substitui o armazenamento temporário em Items do Mundo por três compêndios do módulo: **Classes**, **Subclasses** e **Características**.
- `ItemGrant` agora referencia características por UUID `Compendium.grimorio-importer.grimorio-features.Item.*`, permitindo transportar as classes entre Mundos da mesma instalação do módulo.
- Os packs são desbloqueados somente durante a sincronização e têm o estado de bloqueio restaurado ao final, inclusive em caso de falha.
- Reimportações atualizam os documentos existentes no compêndio e preservam seus UUIDs.
- Nenhum Item de Mundo é criado pela Fase 6.
- Adicionados `/grimorio-packs` e `/grimorio-world-preview`; o segundo apenas identifica Items legados da Fase 5, sem removê-los.
- O escopo mecânico continua deliberadamente homologado para **Bárbaro e subclasses de Bárbaro**, isolando a mudança de persistência antes da generalização para as demais classes.
- Adicionados `FOUNDRY_IMPORTER_FASE6.md`, `TESTE_FOUNDRY_FASE6.md`, `VALIDACAO_FOUNDRY_CLASSES_5.18.md` e `tools/validate-foundry-phase6-module.js`.

## Novidades da versão 5.17

- Concluída a **Fase 5 inicial da exportação de classes para Foundry VTT**.
- Criado o módulo instalável **Grimório Importer 0.1.0**, congelado em Foundry 13 / DnD5e 5.3.3.
- O primeiro fluxo nativo materializa o **Bárbaro**: características como Items `feat`, Item `class` e Advancements de Pontos de Vida, proficiências, Item Grants, ASI e escolha de subclasse.
- Subclasses de Bárbaro já podem ser materializadas como Item `subclass`; **Caminho do Kaiju** acompanha a versão como prova de referência.
- Reimportações usam flags estáveis e atualizam os documentos gerenciados em vez de duplicá-los.
- O protótipo usa Items do Mundo intencionalmente; a próxima evolução deve migrar características para compêndios com UUIDs portáveis.
- Adicionados `/grimorio-status`, `/grimorio-import` e API pública do módulo para testes.
- Incluídos guia de teste real e validador em mock do ciclo completo.

## Novidades da versão 5.16

- Iniciada a **Fase 4 da exportação de classes e subclasses para Foundry VTT**.
- Criado o contrato JSON **Grimório Foundry Bundle v1**, que será consumido pelo módulo `Grimório Importer` na Fase 5.
- **24 classes e 377 subclasses/especializações** já geram bundles válidos, com identificadores estáveis e ligação de subclasse à classe-base.
- O bundle preserva progressão, características, tabelas, fundamentos, fontes e referências sem tentar inventar campos ausentes.
- Foram preservadas **345 características de classe** e **2.025 características de subclasse**.
- Os **509 eventos de progressão** foram classificados para diferenciar novas características, progressão de subclasse e escalonamentos.
- **29 opções internas sem nível** são transportadas como candidatos de escolha, não como concessões automáticas.
- **19 classes** estão prontas para o primeiro mapeamento nativo; 5 classes complexas foram explicitamente reservadas para lógica da Fase 5.
- Consulte `FOUNDRY_CLASSES_FASE4.md`, `VALIDACAO_FOUNDRY_CLASSES_5.16.md` e `TESTE_FOUNDRY_FASE4.md`.

## Novidades da versão 5.15

- Implementada a **Fase 3 da exportação Foundry VTT** diretamente na interface.
- Fichas de magia agora possuem **Exportar Foundry**, com pré-validação, diagnóstico, **Copiar YAML** e **Baixar YAML**.
- O catálogo de magias possui **Exportar filtro atual**, que gera um lote com todo o resultado dos filtros ativos, independentemente da paginação.
- A janela de lote separa itens **Prontos**, **Revisão editorial** e **Bloqueados**; itens bloqueados são omitidos do YAML sem impedir a exportação das demais magias.
- O perfil continua homologado para **Foundry 13.351 + DnD5e 5.3.3 + 5e Item Importer 13.9.1**.
- A cobertura permanece em **1.169 magias exportáveis**, sendo 1.167 prontas, 2 em revisão editorial e 1 bloqueada.
- A camada visual foi isolada em `js/exporters/foundry-export-ui.js`, preservando `app.js` independente do Foundry.
- Consulte `FOUNDRY_EXPORT_FASE3.md` e `VALIDACAO_FOUNDRY_EXPORT_5.15.md`.

## Novidades da versão 5.14

- Concluída a **Fase 2 da exportação para Foundry VTT** após aprovação da prova local no ambiente **Foundry 13.351 + DnD5e 5.3.3 + 5e Item Importer 13.9.1**.
- A cobertura passou de **938 para 1.167 magias prontas sem alertas**.
- Das 1.170 entradas, **1.169 são exportáveis**, apenas **2 permanecem em revisão editorial** e **1 permanece bloqueada** por ausência do bloco de regras na própria fonte.
- As **43 magias de ritual** foram homologadas no fluxo testado e deixaram de gerar aviso automático.
- Alcances decimais são preservados por conversão exata de unidade, sem arredondamento.
- Ativações alternativas, alcance/duração `Especial`, áreas e alvos variáveis receberam normalização ampliada.
- As **12 magias de escola Psiônica** agora recebem uma escola técnica individual para o formato do importer, mas `Psiônica` continua preservada como escola editorial na descrição exportada.
- `data/export/foundry-v13-overrides.js` concentra exceções auditáveis sem modificar as fichas do Grimório.
- Criada uma bateria de regressão em `tests/foundry-v13/phase2/`.
- O botão público **Exportar** continua fora da interface por design; sua implementação é a **Fase 3**.
- Consulte `FOUNDRY_EXPORT_FASE2.md` e `VALIDACAO_FOUNDRY_EXPORT_5.14.md`.

## Novidades da versão 5.13

- Implementadas as **Fases 0 e 1 da exportação para Foundry VTT**, com perfil congelado, registro desacoplado de exportadores, conversor YAML e kit inicial de cinco magias.
- A auditoria inicial havia identificado 938 magias prontas, 232 em revisão e 13 bloqueadas; esses números foram posteriormente tratados pela Fase 2.

## Novidades da versão 5.12

- Integrado integralmente o **Capítulo 13 — Magias** de *Ryoko's Guide to the Yokai Realms* em português brasileiro.
- O capítulo contém **62 magias**; a própria fonte declara **44 inéditas e 18 provenientes de outras publicações da Loot Tavern**, incluídas para conveniência. Como a ficha individual não identifica essa divisão, o Grimório não atribui uma publicação anterior por inferência.
- As **62 fichas são novas em relação ao catálogo atual do Grimório**. **Chuva Ácida (Acid Rain)** permanece separada da magia homônima de KibblesTasty por possuir nível e mecânicas diferentes.
- Foram preservadas as listas de classe e as afinidades elementais do **Dobrador** (Ar, Terra, Fogo e Água) informadas em cada ficha.
- A escola opcional **Biomancia** foi preservada em **7 magias**, juntamente com a escola alternativa indicada pelo livro quando Biomancia não for utilizada.
- **Passo pelas Nuvens (Cloud Stride)** está marcado como ritual.
- Nomes originais em inglês permanecem como aliases para pesquisa.

## Novidades da versão 5.11

- Integrado o **Capítulo 9 — Classes** de *Ryoko's Guide to the Yokai Realms* em português brasileiro.
- Adicionada a classe **Dobrador (Bender)**, com progressão estruturada do 1º ao 20º nível, Afinidades Elementais, Golpes Elementais, Combo Elemental, Forma Primordial e Avatar Primordial.
- Integradas as quatro Disciplinas do Dobrador: **Discípulo da Ferocidade, Discípulo da Fortificação, Discípulo da Fusão e Discípulo do Revigoramento**.
- Adicionada a classe **Domador (Tamer)**, que o próprio livro reimprime para referência, com progressão completa, Familiar/Família de Bolso, Treinador de Monstros, Domar Criatura, Vínculo da Alma, melhorias de companheiro e conjuração.
- Integrado o paradigma **Sensei** do Domador, incluindo Golpes Marciais e a tabela de Técnicas Marciais.
- Integradas as **13 subclasses para classes-base** apresentadas no capítulo: Caminho do Kaiju; Colégio de Hanabi; Colégio das Máscaras; Domínio do Guardião do Santuário; Círculo dos Yokai; Lâmina Esquelética; Caminho dos Oito Portões; Juramento do Yojimbo; Rōnin; Tamaya; Invocador de Espíritos; O Shinigami; e Shinobi.
- No total, Ryoko adiciona **18 entradas de subclasse/especialização**: 4 Disciplinas + 1 paradigma de Domador + 13 subclasses para classes-base.
- As regras opcionais de **Ataque Extra Aprimorado** para Bárbaro, Dobrador, Guerreiro, Monge, Paladino e Patrulheiro foram preservadas como referências opcionais, sem alterar silenciosamente a progressão original dessas classes.
- Os nomes originais em inglês foram mantidos como aliases pesquisáveis, enquanto nomes, características, tabelas e regras aparecem em PT-BR.

## Conteúdo atual

- **26 classes**.
- **381 subclasses/especializações**.
- **26 progressões estruturadas**.
- **1171 registros-base de magias/poderes** antes de conteúdo personalizado do usuário.
- 361 magias do Livro do Jogador.
- 95 magias do Guia de Xanathar.
- 21 magias do Caldeirão de Tasha.
- 280 magias/revisões de *Lyre's Guide to Retia*.
- 48 novas entradas de *Blade, Bone, & Benefit*; outras 60 magias do capítulo são vinculadas como reimpressões às entradas já existentes de Lyre.
- 62 novas entradas de *Zagalhta's Exolunar Collection*; **Pele de Dragão** é vinculada como reimpressão, totalizando 63 magias do Capítulo 7 disponíveis pelo filtro da fonte.
- 62 magias do Capítulo 13 de *Ryoko's Guide to the Yokai Realms*, integralmente localizadas para PT-BR.
- 240 magias/poderes completos + 1 referência incompleta do Spell Compendium.
- Conteúdo homebrew incorporado anteriormente.

### Lutador de Rua

- Classe-base: **Lutador de Rua**.
- Arquétipos de Rua: **1** — Dragão de Dojima.
- Registros de características/opções de classe: **62**.
- Essências de Cólera selecionáveis: **20**.
- Características concedidas pela subclasse: **4**, nos níveis 3, 6, 11 e 17.
- Progressão própria: **Dado de Briga 1d6–1d12** e eventos completos do 1º ao 20º nível.

### Cultivador

- Classe-base: **Cultivador**.
- Chamados à Divindade: **3** — Mal, Acromático e Céu.
- Características de classe estruturadas: **22**.
- Características de subclasse estruturadas: **19**.
- Tabelas de classe: **10**; tabelas de subclasse: **3**.
- Progressão própria: **Qi 5–80**, Nível de Magia 1º–9º e Limite de Amplificação até **∞** no 20º nível.

### Distribuição de Zagalhta

- Cavaleiro Dracônico: **9 Conceitos Centrais novos** + **3 subclasses de Blade, Bone, & Benefit já existentes** = 12 opções consultáveis.
- Piloto de Frame: **5 Designações Tecnológicas**.
- Subclasses tradicionais de Zagalhta: **36**.
- Características de subclasses/especializações da nova fonte estruturadas: **256**.
- Tabelas estruturadas da nova fonte: **30**.

### Distribuição de Ryoko

- Dobrador: **4 Disciplinas**.
- Domador: **1 Paradigma de Treinamento (Sensei)**.
- Subclasses para classes-base: **13**.
- Total de novas entradas de subclasse/especialização: **18**.
- Características de subclasses/especializações estruturadas: **99**.
- Tabelas estruturadas de subclasses: **20**.
- Progressões de classe adicionadas: **2**, ambas com 20 níveis.

## Arquitetura para próximas fontes

1. Cadastre a fonte com `GRIMORIO_REGISTRY.registerSource(...)`.
2. Carregue os módulos de classe/subclasse pelo `index.html`.
3. Para classes, registre também `GRIMORIO_CLASS_PROGRESSIONS` quando houver progressão estruturada.
4. Para magias, registre o array com `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
5. Execute `node tools/validate-project.js` antes de empacotar a nova versão.

## Estrutura relevante

```text
grimorio_dnd5e_ptbr_project_5.16/
├── index.html
├── README.md
├── CHANGELOG.md
├── manifest.json
├── css/
├── data/
│   ├── sources.js
│   ├── classes.js
│   ├── progression.js
│   ├── lyre-classes.js
│   ├── lyre-subclasses.js
│   ├── blade-bone-benefit-classes.js
│   ├── blade-bone-benefit-subclasses.js
│   ├── zagalhta-classes.js
│   ├── ryoko-classes.js
│   ├── ryoko-subclasses.js
│   ├── ryoko-optional-features.js
│   ├── zagalhta-specializations.js
│   ├── zagalhta-subclasses-standard.js
│   ├── zagalhta-subclasses-standard-2.js
│   ├── zagalhta-subclasses-standard-3.js
│   ├── zagalhta-compulsions.js
│   ├── phb-spells.js
│   ├── xanathar-spells.js
│   ├── tasha-spells.js
│   ├── scag-spells.js
│   ├── spellblade-spells.js
│   ├── lyre-spells.js
│   ├── blade-bone-benefit-spells.js
│   ├── zagalhta-spells.js
│   ├── ryoko-spells.js
│   └── export/
│       ├── foundry-v13-overrides.js
│       └── foundry-class-overrides.js
├── js/
│   ├── app.js
│   ├── config.js
│   ├── registry.js
│   ├── dynamic-consultation.js
│   └── exporters/
│       ├── registry.js
│       ├── foundry-v13.js
│       ├── foundry-export-ui.js
│       └── foundry-class-bundle.js
└── tools/
    ├── validate-project.js
    ├── validate-foundry-export.js
    ├── validate-foundry-export-ui.js
    ├── validate-foundry-class-bundle.js
    └── generate-foundry-phase4.js
```
