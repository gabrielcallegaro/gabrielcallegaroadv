## Correções

1. **Header transparente nas páginas do blog**
   - Em `src/components/site/Header.tsx`, o header começa transparente e só ganha fundo quando `scrolled` é true. Nas páginas `/blog` e `/blog/$slug`, o topo da página não tem hero escuro, então o header fica "sumido".
   - Solução: aplicar o estilo "scrolled" (fundo + blur + borda) por padrão quando a rota atual começa com `/blog`, usando `useRouterState` do `@tanstack/react-router` para detectar o pathname. Mantém o comportamento transparente apenas no topo da home.

2. **Botão CTA do artigo "rescisão indireta" centralizado**
   - Em `src/content/blog/rescisao-indireta.ts`, envolver o `<a class="cta-button">` final em um `<div style="text-align:center">` (ou `display:flex; justify-content:center`) para centralizar.

3. **Link do Instagram com ponto final extra**
   - Em `src/components/site/Footer.tsx`, trocar `https://www.instagram.com/gabrielcallegaro.adv.` por `https://www.instagram.com/gabrielcallegaro.adv` (remover o `.` final).

Nenhuma mudança de lógica de negócio — só apresentação e correção de link.
