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
