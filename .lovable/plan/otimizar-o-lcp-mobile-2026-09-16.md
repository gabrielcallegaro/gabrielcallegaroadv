# Otimizar o LCP mobile

Objetivo: remover a espera do CSS e encurtar a descoberta das fontes no primeiro carregamento, sem alterar o conteúdo ou a aparência percebida.

## Mudanças
- Incorporar a folha de estilos enxuta diretamente no HTML, eliminando a solicitação CSS que bloqueia a primeira pintura.
- Manter o preload das fontes usadas no topo e alinhar os pesos do Hero para evitar downloads duplicados antes do LCP.
- Remover declarações de fontes que não forem necessárias no primeiro conteúdo, preservando os pesos usados no restante do site.

## Verificação
- Confirmar que não há solicitação externa de CSS bloqueando a renderização.
- Conferir a página inicial em celular e desktop, incluindo cabeçalho, Hero e faixa de estatísticas.
- Validar o carregamento sem erros e comparar a cadeia crítica de CSS/fontes.

## Detalhes técnicos
- A folha atual tem apenas cerca de 9,4 KiB transferidos; incorporá-la evita uma ida extra à rede sem criar uma carga excessiva no HTML.
- A fonte Playfair será descoberta diretamente no HTML e somente os pesos realmente necessários serão solicitados.
