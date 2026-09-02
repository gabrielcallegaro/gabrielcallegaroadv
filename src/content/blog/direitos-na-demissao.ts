import type { BlogPost } from "./index";
import img1 from "@/assets/direitos-demissao-documentos.jpg.asset.json";
import img2 from "@/assets/direitos-demissao-calculo.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const post: BlogPost = {
  slug: "direitos-na-demissao-guia-completo",
  title: "Direitos na Demissão: Guia Completo para Não Perder Dinheiro",
  description:
    "Fui demitido, e agora? Entenda verbas rescisórias, FGTS, aviso prévio, seguro-desemprego, prazos e os direitos em cada tipo de demissão.",
  date: "2026-09-01",
  author: "Gabriel Callegaro",
  content: `
    <p>Ser demitido nunca é fácil. No meio da correria de guardar as coisas e se despedir dos colegas, é comum surgir a dúvida: <strong>afinal, o que eu tenho direito a receber?</strong></p>
    <p>A legislação trabalhista brasileira estabelece os direitos devidos no encerramento do contrato, mas os detalhes variam conforme o tipo de desligamento. Por isso, muita gente acaba assinando os documentos da rescisão sem saber se está recebendo tudo corretamente.</p>
    <p>Neste guia, você vai entender, de forma simples e direta, quais são os direitos em cada tipo de demissão, quanto tempo a empresa tem para pagar e o que fazer se perceber alguma irregularidade.</p>

    <h2>Os tipos de demissão e por que isso muda tudo</h2>
    <p>Antes de falar em valores, é importante saber que o tipo de desligamento define quais verbas serão pagas. As situações mais comuns são:</p>
    <ul>
      <li><strong>Demissão sem justa causa:</strong> a empresa encerra o contrato sem que o trabalhador tenha cometido falta grave.</li>
      <li><strong>Demissão por justa causa:</strong> a empresa atribui ao trabalhador uma falta grave prevista em lei.</li>
      <li><strong>Pedido de demissão:</strong> o trabalhador decide encerrar o contrato.</li>
      <li><strong>Demissão por acordo:</strong> empresa e trabalhador decidem encerrar o contrato em conjunto, com condições intermediárias.</li>
    </ul>

    <h2>Fui demitido sem justa causa: o que tenho direito a receber?</h2>
    <p>Essa é a forma mais comum de demissão e garante o conjunto mais amplo de direitos ao trabalhador. Em regra, são devidos:</p>
    <ul>
      <li><strong>Saldo de salário:</strong> pagamento proporcional aos dias trabalhados no mês da demissão.</li>
      <li><strong>Aviso prévio:</strong> pode ser trabalhado ou indenizado. O prazo mínimo é de 30 dias e aumenta três dias por ano completo de serviço, até o limite legal de 90 dias.</li>
      <li><strong>13º salário proporcional:</strong> calculado conforme os meses trabalhados no ano.</li>
      <li><strong>Férias vencidas e proporcionais + 1/3:</strong> conforme os períodos já adquiridos e o ciclo em andamento.</li>
      <li><strong>Multa de 40% do FGTS:</strong> calculada sobre os depósitos realizados durante o contrato.</li>
      <li><strong>Saque do FGTS:</strong> observadas as regras da modalidade escolhida pelo trabalhador.</li>
      <li><strong>Seguro-desemprego:</strong> quando preenchidos os requisitos legais.</li>
    </ul>
    <p>Por exemplo, um trabalhador que recebe R$ 3.000 por mês e permaneceu três anos na empresa pode ter direito a 39 dias de aviso prévio, além do saldo salarial, férias, 13º proporcional e multa do FGTS.</p>
    <blockquote><strong>Atenção ao saque-aniversário:</strong> quem aderiu a essa modalidade continua tendo direito à multa de 40%, mas o saque do saldo principal segue regras específicas.</blockquote>

    <img src="${img1.url}" alt="Trabalhador conferindo documentos e valores após a demissão" loading="lazy" width="1280" height="720" />

    <h2>Demissão por justa causa: o que muda?</h2>
    <p>A justa causa é a penalidade mais grave prevista na CLT e pode ser aplicada em situações como improbidade, indisciplina, abandono de emprego ou agressão no ambiente de trabalho, entre outras hipóteses do artigo 482.</p>
    <p>Nessa situação, o trabalhador normalmente recebe apenas:</p>
    <ul>
      <li>Saldo de salário;</li>
      <li>Férias vencidas + 1/3, se houver.</li>
    </ul>
    <p>Em regra, não são pagos aviso prévio, 13º proporcional, multa de 40% do FGTS, saque do fundo nem seguro-desemprego.</p>
    <p>A empresa deve comprovar a falta grave. Se a justa causa foi aplicada sem fundamento ou sem provas suficientes, ela pode ser contestada judicialmente e convertida em demissão sem justa causa.</p>

    <h2>Pedi demissão: tenho direito a alguma coisa?</h2>
    <p>Sim. Quem pede demissão tem direito a saldo de salário, férias vencidas e proporcionais com adicional de 1/3 e 13º salário proporcional.</p>
    <p>Não há direito à multa de 40% do FGTS, ao saque do fundo — salvo outras hipóteses legais — nem ao seguro-desemprego. O trabalhador também pode precisar cumprir aviso prévio de até 30 dias ou sofrer o desconto correspondente.</p>
    <blockquote><strong>Nunca assine um pedido de demissão se, na prática, a empresa está dispensando você.</strong> Pressionar o trabalhador a assinar esse documento para reduzir as verbas rescisórias pode caracterizar fraude e coação.</blockquote>

    <h2>Demissão por acordo: como funciona?</h2>
    <p>A demissão por comum acordo permite que empresa e trabalhador encerrem o contrato com condições intermediárias. Nessa modalidade, são devidos:</p>
    <ul>
      <li>Saldo de salário;</li>
      <li>Metade do aviso prévio indenizado;</li>
      <li>13º salário e férias proporcionais;</li>
      <li>Multa de 20% do FGTS;</li>
      <li>Saque de até 80% do saldo do FGTS.</li>
    </ul>
    <p>O trabalhador não tem direito ao seguro-desemprego nessa modalidade.</p>

    <h2>Rescisão indireta: quando a falta grave é da empresa</h2>
    <p>A rescisão indireta pode ocorrer quando o empregador comete uma falta grave, como atraso reiterado de salário, assédio moral, ausência de depósitos do FGTS ou exigência de tarefas incompatíveis com o contrato.</p>
    <p>Se reconhecida, o trabalhador recebe as mesmas verbas de uma demissão sem justa causa. Como a medida exige provas e uma análise cuidadosa, é recomendável buscar orientação jurídica antes de deixar o trabalho.</p>

    <h2>Qual é o prazo para a empresa pagar a rescisão?</h2>
    <p>A empresa tem até <strong>10 dias corridos após o término do contrato</strong> para pagar as verbas rescisórias e entregar os documentos necessários, como o termo de rescisão e, quando cabíveis, as guias do FGTS e do seguro-desemprego.</p>
    <p>O atraso pode gerar a multa prevista no artigo 477 da CLT, em valor equivalente ao salário do trabalhador, consideradas as circunstâncias do caso.</p>

    <img src="${img2.url}" alt="Conferência dos cálculos e das verbas rescisórias de uma demissão" loading="lazy" width="1280" height="720" />

    <h2>Quanto tempo tenho para cobrar meus direitos?</h2>
    <p>Depois do fim do contrato, o trabalhador tem até <strong>dois anos</strong> para ajuizar uma ação trabalhista. Dentro desse prazo, em regra, pode cobrar créditos referentes aos cinco anos anteriores ao ajuizamento.</p>
    <p>Após dois anos da demissão, perde-se o direito de levar essas cobranças à Justiça. Se houver dúvida sobre os valores pagos, é importante analisar os documentos o quanto antes.</p>

    <h2>Sinais de que você deve procurar orientação jurídica</h2>
    <ul>
      <li>A rescisão foi paga fora do prazo ou os valores parecem incorretos;</li>
      <li>A justa causa foi aplicada sem uma falta grave ou sem provas;</li>
      <li>Horas extras ou adicionais nunca foram pagos;</li>
      <li>O FGTS não foi depositado corretamente;</li>
      <li>Houve pressão para assinar um pedido de demissão;</li>
      <li>Você saiu por atraso de salários, assédio ou condições inadequadas de trabalho.</li>
    </ul>

    <h2>Perguntas frequentes sobre direitos na demissão</h2>
    <h3>Fui demitido sem justa causa. Posso sacar todo o FGTS?</h3>
    <p>Em regra, sim. O trabalhador pode sacar o saldo da conta vinculada e recebe a multa de 40%. Para quem aderiu ao saque-aniversário, existem restrições específicas ao saque do saldo principal.</p>

    <h3>Quanto tempo a empresa tem para pagar a rescisão?</h3>
    <p>Até 10 dias corridos contados do término do contrato.</p>

    <h3>Quem é demitido por justa causa recebe alguma coisa?</h3>
    <p>Sim. Normalmente, recebe o saldo de salário e as férias vencidas acrescidas de 1/3, se houver.</p>

    <h3>O que é rescisão indireta?</h3>
    <p>É o encerramento do contrato motivado por falta grave do empregador. Quando reconhecida, garante as verbas de uma demissão sem justa causa.</p>

    <h3>Quanto tempo tenho para entrar com uma ação trabalhista?</h3>
    <p>Até dois anos após o fim do contrato, observada a prescrição de cinco anos sobre os créditos trabalhistas.</p>

    <h2>Conclusão</h2>
    <p>Conhecer seus direitos na demissão ajuda a conferir se a relação de trabalho foi encerrada corretamente. O tipo de desligamento, o tempo de serviço e a existência de valores não pagos durante o contrato podem alterar significativamente o cálculo final.</p>
    <p>Este conteúdo tem caráter informativo e não substitui a análise individual de um caso concreto.</p>

    <p style="text-align:center"><a class="cta-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Veja seu caso com um advogado especializado</a></p>
  `,
};

export default post;