## v5.42.0 — FA-1 · Automação Foundry de Talentos
- Abrir `#/feats`, escolher um Talento e usar **Exportar Foundry**. O modal deve identificar **Feat Bundle v2** e **Contrato FA-1**.
- Confirmar que o resumo do modal mostra contagens de **Advancements, Activities, Effects, Uses e Runtime**, além do tier de cobertura.
- Exportar **Alerta** e conferir no JSON: `schemaVersion: 2`, `minimumImporterVersion: 0.12.0` e `automation.effects` com `initiative-bonus` de valor 5.
- Exportar **Conjurador de Guerra** e confirmar que não há Effect global de Constituição; a vantagem de concentração deve aparecer em `automation.runtime` como gatilho `concentration-save-after-damage`.
- Exportar **Observador** e confirmar dois efeitos `skill-passive-bonus`, um para Percepção e outro para Investigação, ambos +5.
- Exportar **Robusto** e confirmar tier `full` com efeito `hp-per-level` de valor 2.
- Exportar **Sortudo** e confirmar `uses.max = 3`, recuperação `lr` e três requisitos de runtime para as intervenções de d20.
- Exportar o catálogo completo e confirmar **42 perfis**, sendo **6 full / 36 partial**, com 28 Advancements, 10 Effects, 22 Activities, 2 Uses e 56 runtimes.
- O modal deve avisar explicitamente que o schema v2 será materializado pelo Grimório Importer **0.12.0+**; a RC 0.11 não deve ser apresentada como compatível com este JSON.

# Auditoria visual — Grimório 5.42.0

## v5.41.0 — Exportação Foundry de Talentos
- Abrir `#/feats` e confirmar a barra **Foundry VTT · Talentos** acima do catálogo.
- Abrir um talento e confirmar o botão **Exportar Foundry** junto às ações de link.
- Exportar **Alerta** individualmente e confirmar modal com 1 bundle/1 talento e destino `Grimório — Talentos`.
- Exportar o catálogo completo e confirmar o resumo **42 talentos / 1 fonte / 12 com pré-requisito / 1 repetível**.
- No Foundry 13.351 + DnD5e 5.3.3, instalar o `grimorio-importer` 0.10.0 e confirmar quatro compêndios: Classes, Subclasses, Características e Talentos.
- Importar `examples/feats/phb-2014-feats-package.json` com `/grimorio-import` e confirmar 42 Items `feat` dentro da pasta **Livro do Jogador**.
- Reimportar o mesmo pacote e confirmar ausência de duplicações e preservação dos UUIDs.
- Confirmar que Classes/Subclasses/Características e diretório de Items do Mundo não recebem documentos durante a importação de Talentos.
- Conferir `Conjurador de Guerra` (requirements), `Adepto Elemental` (repeatable + escolha de dano) e `Alerta` (p. 167).

# Auditoria visual — Grimório 5.41.0

## Microtransições
- Troca de página: fade curto + deslocamento vertical mínimo.
- Abas/níveis de classes e subclasses: entrada local do conteúdo consultado.
- Blocos `<details>`: entrada suave do conteúdo ao abrir.
- Paleta/modal/overlays: entrada discreta e consistente.
- Cards clicáveis: feedback de pressão mínimo.
- `prefers-reduced-motion`: animações removidas automaticamente.

## Compatibilidade
- HTML/CSS/JavaScript nativos; nenhuma dependência adicionada.
- Sidebar adaptativa 5.35 preservada.
- Spotlight Cards 5.34 preservados.

## v5.37 — Sidebar fixável e capas de classe

- Confirmar que o botão de pin aparece no topo da sidebar no desktop e alterna entre **Fixar menu** e **Menu fixado**.
- Confirmar que, após fixar e recarregar a página, a sidebar permanece expandida.
- Confirmar que desafixar restaura o comportamento hover/foco da v5.35.
- Confirmar que o card **Emissário Espiritual** no Painel/Classes recebe a imagem de fundo configurada, com blur e camada preta sem prejudicar o texto.
- Confirmar que cards sem entrada em `data/class-covers.js` mantêm exatamente o visual anterior.
- Em modo offline, confirmar o fallback visual quando uma capa externa não puder ser carregada. Para distribuição offline, usar arquivos em `assets/class-covers/`.

## v5.38.0 — Sábio / Catalisador
- Conferir card e ficha da classe Sábio em Classes.
- Conferir progressão 1–20: níveis sem concessão nova devem permanecer com traço vazio/—, sem ASI automático.
- Conferir subclasse Catalisador e escolhas adicionais de Maestria Elemental nos níveis 8, 10 e 12.
- Em Magias, filtrar Classe = Sábio e Fonte = O Sábio — Homebrew: devem aparecer 14 entradas.
- Filtro Nível = Sem nível / recurso de classe deve retornar Terrenos Arcanos e Magias de Sábio sem chamá-los de Truques.
- Abrir Fúria da Terra, Relâmpago e Rajada Congelante e confirmar que as notas de lacuna editorial estão visíveis.

## v5.39.0 — Navegação profunda
- Em Classes, usar **Ctrl/Cmd+clique**, botão do meio e menu de contexto em um card: a nova guia deve abrir diretamente na classe escolhida.
- Repetir o teste em uma subclasse, magia, raça, subraça e equipamento.
- Recarregar uma URL profunda e confirmar que o conteúdo-alvo permanece aberto.
- Usar **Voltar/Avançar** do navegador entre conteúdos e confirmar que a rota e o conteúdo acompanham o histórico.
- Em Raças, abrir diretamente uma subraça por URL e confirmar que ela aparece selecionada sem depender do estado salvo no navegador.
- Em Equipamentos, abrir um item por URL e confirmar que o bloco correspondente fica expandido e visível.
- Conferir os botões **Copiar link** de classe, subclasse, magia, raça/subraça e equipamento.
- Abrir `Ctrl+K` e confirmar que Classes, Subclasses, Raças, Subraças, Magias e Equipamentos são anchors reais e aceitam nova guia.
- Confirmar que o título da guia muda conforme classe, subclasse, raça/subraça, magia ou equipamento aberto.


## v5.40.0 — Talentos
- Confirmar que **Talentos** aparece imediatamente abaixo de **Equipamentos** na sidebar, tanto expandida quanto compacta.
- Abrir `#/feats` e confirmar o cabeçalho, os quatro indicadores e a listagem dos **42 talentos** do Livro do Jogador.
- Testar busca por nome, texto e pré-requisito; os resultados devem incluir correspondências tanto no nome quanto no corpo da regra.
- Testar filtros **Sem pré-requisito**, **Atributo mínimo**, **Conjuração** e **Proficiência** e depois limpar os filtros.
- Abrir `#/feat/phb-2014-alerta` diretamente e confirmar que o talento fica expandido e visível, com título contextual na guia.
- Confirmar que `Adepto Elemental` exibe a marca **Repetível** e a escolha de tipo de dano sem transformar a escolha em automação.
- Usar **Ctrl+K** para localizar talentos e confirmar que o resultado é um link nativo, aceitando Ctrl/Cmd+clique e nova guia.
- Conferir a ação de link direto/copiar link nos talentos e o histórico Voltar/Avançar entre catálogo e detalhe.
- Em viewport móvel, confirmar que filtros e metadados empilham sem overflow horizontal e que a sidebar continua utilizável.
# Auditoria visual — Grimório 5.47.0

## Antecedentes do Livro do Jogador
- Confirmar que **Antecedentes** aparece imediatamente depois de **Raças e Subraças** na sidebar expandida e compacta.
- Abrir `#/backgrounds` e conferir os contadores **18 entradas / 13 bases / 5 variações / 1 fonte**.
- Testar a busca do catálogo por nome PT-BR e inglês, perícia, ferramenta, equipamento e característica; testar também os filtros de tipo, perícia e fonte.
- Abrir uma ficha-base e conferir breadcrumb, procedência, proficiências, idiomas, equipamento, característica, tabelas auxiliares e as quatro tabelas de características sugeridas.
- Abrir Mercador de Guilda, Gladiador, Espião, Pirata e Cavaleiro; conferir badge, link para o antecedente-base, alterações mecânicas e indicação das tabelas herdadas.
- Recarregar `#/background/pirata`, usar Voltar/Avançar e confirmar que rota, título da guia e conteúdo permanecem sincronizados.
- Usar Ctrl/Cmd+clique e menu de contexto nos cards; confirmar que o destino abre em nova guia e que **Copiar link** gera a URL profunda correta.
- Na busca Ctrl/Cmd+K, procurar `Guild Merchant`, `ferramentas de navegador`, `Má Reputação`, `Retentores` e texto de uma tabela sugerida.
- Em 1440 px, 1024 px, 768 px e 360 px, confirmar ausência de overflow da página. Tabelas extensas devem rolar apenas dentro de seu contêiner.
- Navegar por teclado por filtros, cards, breadcrumb, copiar link e regiões roláveis; confirmar cabeçalhos e escopos das tabelas.
- Ativar `prefers-reduced-motion` e confirmar que cards não se deslocam nem exibem Spotlight animado.

### Resultado automatizado — 17/08/2026
- Catálogo carregado com 18 cards e contadores 18/13/5/1; nenhuma mensagem de erro ou aviso no console.
- Ordem da navegação confirmada: Painel, Planejador de Atributos, Raças e Subraças, Antecedentes, Equipamentos e Talentos.
- Busca local, filtro das cinco variações, busca Ctrl/Cmd+K por conteúdo herdado, rota direta, título, copiar link e histórico Voltar/Avançar aprovados.
- Viewport de 360 px aprovado sem overflow da página: largura de conteúdo 350 px; tabelas de 460 px permaneceram contidas em regiões roláveis de 316 px.
