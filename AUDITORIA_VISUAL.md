# Auditoria visual — Grimório 5.36.0

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
