# Validação — Blade, Bone, & Benefit: Classes e Subclasses — v5.8

## Escopo

Esta etapa integra somente a classe e as subclasses apresentadas em *Somnus Domina — Blade, Bone, & Benefit*. A integração de magias da mesma fonte permanece a da versão 5.7.

## Classe

- Ministro de Sangue (`blood-minister-somnus`) integrado como classe nativa.
- Progressão: 20 linhas, do 1º ao 20º nível.
- Características de classe estruturadas: 17 entradas.
- Dado de Vida preservado conforme a fonte: `2d4` por nível.
- Fundamentos, equipamento, multiclasse, criação rápida e contexto temático incorporados.
- 8 Seitas Genéticas vinculadas à classe.

## Subclasses

- Seitas Genéticas do Ministro de Sangue: 8.
- Subclasses enumeradas no índice do Capítulo X: 55.
- Total de novas entradas de subclasse incorporadas nesta etapa: 63.
- Características de subclasses estruturadas: 339.
- Todas as características possuem texto, nível entre 1 e 20 e página de origem.
- Tabelas complementares estruturadas: 12.
- Blocos complementares sem nível próprio preservados: 12 (Compulsões/Fardos, Preceitos de Juramento e Relíquias de Caminho).
- A busca rápida também indexa essas tabelas, referências e os metadados de classe-base externa.

## Divergência documental da fonte

O sumário geral descreve o Capítulo X como contendo 59 novas subclasses. As páginas de índice do próprio Capítulo X enumeram 55 nomes. O projeto integra as 55 entradas identificáveis e documenta a diferença; nenhuma subclasse é criada por inferência para completar o número anunciado no sumário.

## Dragoneer

O índice do Capítulo X contém três subclasses de Dragoneer: Darkstriker, Fortune Veil e Phasescale Knight. A classe-base Dragoneer não faz parte das fontes já integradas ao Grimório e o próprio compêndio a atribui a *Zagalhta’s Exolunar Collection*.

As três subclasses foram preservadas com `pendingParent: true` e permanecem diretamente consultáveis em **Subclasses sem classe-base**. Nenhuma regra da classe Dragoneer foi inventada.

## Revisões de subclasses existentes

`Burden of Gotham` e `Burden of Scorn` já possuem versões em *Lyre’s Guide to Retia*, mas o compêndio altera mecanicamente seus textos. Por isso, as versões de *Blade, Bone, & Benefit* receberam IDs próprios em vez de sobrescrever as versões anteriores.

## Verificações automáticas

Executar:

```bash
node tools/validate-project.js
```

Resultado esperado para v5.8:

- 11 fontes registradas.
- 6 catálogos de magias registrados.
- 1046 registros-base de magias/poderes.
- 20 classes.
- 309 subclasses.
- 3 subclasses com classe-base externa documentada.
- 20 progressões estruturadas.
- 12 tabelas complementares e 12 blocos de referência de Blade, Bone, & Benefit.
- zero erros e zero avisos.

Além disso, todos os arquivos `.js` devem passar em `node --check`.
