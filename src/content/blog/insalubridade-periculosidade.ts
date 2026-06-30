import type { BlogPost } from "./index";
import img1 from "@/assets/insalubridade-1.jpg.asset.json";
import img2 from "@/assets/periculosidade-2.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const post: BlogPost = {
  slug: "insalubridade-e-periculosidade",
  title: "Insalubridade e Periculosidade: Direitos do Trabalhador e Como Calcular",
  description:
    "Entenda a diferença entre insalubridade e periculosidade, quem tem direito ao adicional, como calcular os valores e o que fazer se a empresa não pagar corretamente.",
  date: "2026-06-30",
  author: "Gabriel Callegaro",
  content: `
    <p><em>Guia completo e atualizado para trabalhadores que atuam em condições de risco ou insalubres.</em></p>
    <p>Você trabalha exposto a produtos químicos, ruído excessivo, eletricidade ou outras condições de risco no seu dia a dia? Se a resposta for sim, talvez você tenha direito a um adicional salarial que muitos trabalhadores nem sabem que existe: o <strong>adicional de insalubridade</strong> e o <strong>adicional de periculosidade</strong>.</p>
    <p>Neste artigo, vamos explicar de forma simples e direta o que são esses adicionais, quais as diferenças entre eles, quem tem direito a receber e como calcular os valores. Se você suspeita que sua empresa não está pagando corretamente, este conteúdo é para você.</p>

    <h2>O que é insalubridade no trabalho?</h2>
    <p>A insalubridade ocorre quando o trabalhador fica exposto, de forma habitual, a agentes nocivos à saúde acima dos limites considerados toleráveis. Esses agentes podem ser físicos, químicos ou biológicos, e a exposição prolongada pode causar doenças ou prejuízos à saúde do trabalhador ao longo do tempo.</p>
    <p>Alguns exemplos comuns de atividades insalubres incluem:</p>
    <ul>
      <li>Exposição a ruído acima dos limites permitidos;</li>
      <li>Contato com produtos químicos, poeiras ou gases tóxicos;</li>
      <li>Trabalho em ambientes com calor ou frio excessivos;</li>
      <li>Contato com agentes biológicos, como em hospitais e laboratórios;</li>
      <li>Atividades em locais com radiação ionizante ou não ionizante.</li>
    </ul>
    <p>A insalubridade é regulamentada pela <strong>Norma Regulamentadora nº 15 (NR-15)</strong> do Ministério do Trabalho, que estabelece os limites de tolerância e os graus de insalubridade.</p>

    <img src="${img1.url}" alt="Trabalhador industrial com EPIs em ambiente insalubre com direito a adicional" loading="lazy" width="1280" height="720" />

    <h2>O que é periculosidade no trabalho?</h2>
    <p>Já a periculosidade está relacionada a atividades que colocam o trabalhador em contato permanente com risco acentuado e iminente, ou seja, situações que podem causar acidentes graves ou até a morte. Diferente da insalubridade, que causa danos à saúde ao longo do tempo, a periculosidade está ligada ao risco imediato.</p>
    <p>São consideradas atividades perigosas, entre outras:</p>
    <ul>
      <li>Trabalho com inflamáveis e explosivos;</li>
      <li>Atividades com exposição à eletricidade;</li>
      <li>Trabalho em motocicleta para entregas (motoboys e motofretistas);</li>
      <li>Atividades de segurança patrimonial e vigilância;</li>
      <li>Exposição à radiação ionizante e operações com substâncias radioativas.</li>
    </ul>
    <p>Essas situações estão previstas na <strong>NR-16</strong>, que trata especificamente das atividades e operações perigosas.</p>

    <h2>Qual a diferença entre insalubridade e periculosidade?</h2>
    <p>Na prática, a principal diferença está no tipo de risco envolvido. A insalubridade prejudica a saúde do trabalhador aos poucos, com exposição contínua a agentes nocivos. Já a periculosidade representa um risco grave e imediato à vida do trabalhador, mesmo que a exposição seja rápida.</p>
    <blockquote><strong>O trabalhador não pode receber os dois adicionais ao mesmo tempo. Quando há direito a ambos, a lei permite que o empregado escolha qual adicional deseja receber, geralmente optando pelo que for mais vantajoso financeiramente.</strong></blockquote>

    <h2>Como é calculado o adicional de insalubridade?</h2>
    <p>O adicional de insalubridade é calculado com base no salário mínimo nacional (e não sobre o salário do trabalhador, conforme entendimento consolidado, salvo previsão diversa em convenção coletiva). Ele varia de acordo com o grau de risco:</p>
    <ul>
      <li><strong>Grau mínimo:</strong> 10% sobre o salário mínimo;</li>
      <li><strong>Grau médio:</strong> 20% sobre o salário mínimo;</li>
      <li><strong>Grau máximo:</strong> 40% sobre o salário mínimo.</li>
    </ul>
    <p>É importante destacar que algumas convenções coletivas da categoria podem prever base de cálculo diferente, geralmente mais vantajosa para o trabalhador. Por isso, vale sempre verificar o que diz o sindicato da sua categoria.</p>

    <img src="${img2.url}" alt="Eletricista trabalhando em painel de alta tensão, atividade com direito a adicional de periculosidade" loading="lazy" width="1280" height="720" />

    <h2>Como é calculado o adicional de periculosidade?</h2>
    <p>O adicional de periculosidade corresponde a <strong>30% sobre o salário base</strong> do trabalhador, sem incluir gratificações, adicionais ou outras vantagens. Diferente da insalubridade, aqui não existem graus: o percentual é fixo, independentemente do tipo de risco enfrentado.</p>

    <h2>Quem tem direito a receber esses adicionais?</h2>
    <p>Para ter direito ao adicional de insalubridade ou periculosidade, normalmente é necessário que um laudo técnico (geralmente elaborado por engenheiro ou médico do trabalho) comprove a exposição do trabalhador às condições de risco. Esse laudo é chamado de <strong>Laudo Técnico das Condições Ambientais de Trabalho (LTCAT)</strong> ou Laudo Pericial.</p>
    <p>Caso a empresa não pague o adicional devido, mesmo havendo exposição comprovada ao risco, o trabalhador pode buscar seus direitos por meio de uma reclamação trabalhista, inclusive solicitando perícia judicial para comprovar a condição insalubre ou perigosa.</p>

    <h2>Esses adicionais refletem em outros direitos trabalhistas?</h2>
    <p>Sim. Os adicionais de insalubridade e periculosidade têm natureza salarial, o que significa que eles devem ser considerados no cálculo de outras verbas trabalhistas, como:</p>
    <ul>
      <li>Férias e o respectivo adicional de 1/3;</li>
      <li>13º salário;</li>
      <li>Aviso prévio;</li>
      <li>FGTS;</li>
      <li>Horas extras, quando houver.</li>
    </ul>
    <p>Muitas empresas deixam de fazer essa integração corretamente, o que gera diferenças salariais significativas ao longo do contrato de trabalho — e que podem ser cobradas judicialmente.</p>

    <h2>O que fazer se a empresa não paga o adicional corretamente?</h2>
    <p>Se você desconfia que exerce uma atividade insalubre ou perigosa e não recebe o adicional correspondente — ou recebe um valor menor do que deveria — o primeiro passo é reunir documentos que comprovem suas condições de trabalho, como fotos do ambiente, descrição das atividades, equipamentos utilizados e, se possível, testemunhas.</p>
    <p>Em seguida, é recomendável buscar orientação de um advogado trabalhista, que poderá avaliar o seu caso, solicitar a realização de perícia técnica e, se necessário, ingressar com uma ação trabalhista para garantir o pagamento dos valores devidos, inclusive de forma retroativa.</p>

    <h2>Conclusão</h2>
    <p>Os adicionais de insalubridade e periculosidade existem para compensar o trabalhador que se expõe a riscos no exercício de suas funções. Conhecer esses direitos é essencial para garantir que você receba tudo o que tem direito e para identificar eventuais irregularidades cometidas pelo empregador.</p>
    <p>Se você tem dúvidas sobre a sua situação específica ou suspeita que seus direitos não estão sendo respeitados, não deixe de buscar orientação jurídica especializada. Cada caso possui particularidades que merecem uma análise individual.</p>

    <p style="text-align:center"><a class="cta-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Veja seu caso com um advogado especializado</a></p>
  `,
};

export default post;