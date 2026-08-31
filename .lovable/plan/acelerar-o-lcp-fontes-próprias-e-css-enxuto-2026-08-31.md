# Acelerar o LCP: fontes próprias e CSS enxuto

Objetivo: eliminar os recursos que bloqueiam a renderização e encurtar a cadeia de rede até o conteúdo do topo da página, sem mudar nada do visual.

## 1. Fontes hospedadas no próprio domínio

Hoje o navegador precisa: baixar o HTML, depois o CSS, depois pedir o CSS do Google Fonts, e só então baixar os arquivos de fonte — quatro etapas em sequência (1463 ms).

- Instalar os pacotes das fontes Inter e Playfair Display para que fiquem dentro do próprio site (apenas os pesos realmente usados: Inter 400/500/600/700 e Playfair 500/600/700/800, subconjunto latino).
- Remover os links de `fonts.googleapis.com` / `fonts.gstatic.com` do cabeçalho do site.
- Fazer `preload` dos dois arquivos de fonte usados no topo da página (Inter 400 e Playfair) para que baixem em paralelo com o CSS.
- Manter `font-display: swap` para o texto aparecer imediatamente.

Resultado: a cadeia crítica cai de 4 etapas para 2 (HTML → CSS/fonte em paralelo), com tudo servido do mesmo domínio.

## 2. Reduzir o CSS (163 KiB)

O projeto tem 46 componentes de interface do kit padrão e apenas 1 é usado (o acordeão do FAQ). O Tailwind gera estilos para todos eles.

- Remover os 45 componentes de interface não utilizados do projeto.
- Isso deve derrubar bastante o tamanho do CSS final, já que muitas classes só existem por causa desses arquivos.
- Conferência do tamanho antes/depois no relatório de build.

## 3. CSS crítico + carregamento assíncrono do restante

- Extrair as regras mínimas do topo da página (variáveis de cor, fonte base, cabeçalho e bloco do Hero) e colocar direto no `<head>` como estilo embutido.
- Carregar a folha de estilo completa de forma não bloqueante (`media="print"` trocado para `all` no `onload`, com `<noscript>` de segurança).
- Cuidado importante: o site é renderizado no servidor; o estilo embutido precisa cobrir bem o topo para não haver "piscada" de conteúdo sem estilo. Se, após medir, o CSS já tiver ficado pequeno o suficiente com o passo 2, mantemos a folha bloqueante (mais seguro visualmente) e essa etapa deixa de ser necessária.

## Detalhes técnicos

- `package.json`: adicionar `@fontsource-variable/inter` e `@fontsource/playfair-display`; importar em `src/styles.css` (import local, nunca URL — Lightning CSS não resolve rede).
- `src/routes/__root.tsx`: remover os 3 `links` de Google Fonts; adicionar `rel="preload" as="font" type="font/woff2" crossOrigin` para os dois `.woff2` do topo; ajustar a estratégia de carregamento da folha `appCss` caso o passo 3 seja aplicado.
- `src/components/ui/*`: apagar todos exceto `accordion.tsx` (único importado fora da pasta); remover as dependências `@radix-ui/*` órfãs do `package.json`.
- Verificação: build, checagem de tipos, e comparação do tamanho do bundle CSS; inspeção visual da home, `/blog`, `/bancario` e `/previdencia`.
