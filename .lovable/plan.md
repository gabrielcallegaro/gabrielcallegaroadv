Ajustar a ordem das seções na landing page para que "Áreas de Atuação" apareça logo após o Hero, antes de "Sobre o Advogado", e adicionar um divisor visual sutil entre as duas seções escuras para evitar que fiquem "grudadas".

1. Reordenar as seções no `src/routes/index.tsx`:
   - Nova ordem: Header → Hero → PracticeAreas → About → Process → Differentials → FAQ → Testimonials → LatestPosts → FinalCTA → Footer → WhatsAppFloat.

2. Manter a identidade visual:
   - Preservar fundos atuais (Hero escuro, PracticeAreas escuro, About branco).
   - Não alterar paleta de cores, tipografia ou componentes existentes.

3. Adicionar divisor visual entre Hero e PracticeAreas:
   - Inserir um separador sutil no topo de `PracticeAreas.tsx` (antes do conteúdo interno).
   - Opção a implementar: uma linha gradiente horizontal fina (brand-wine → transparente) com leve sombra, ou uma onda/wave discreta na cor do brand para quebrar a transição entre os fundos escuros sem chamar atenção.
   - Garantir que o divisor não aumente a altura da seção de forma invasiva.

4. Revisar hierarquia de headings:
   - Hero continua com H1 único da página.
   - PracticeAreas e About mantêm seus H2 sem conflitos.

5. Validar:
   - Build/tipagem passando.
   - Preview mostrando a nova ordem e o divisor correto.
