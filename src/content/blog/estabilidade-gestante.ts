import type { BlogPost } from "./index";
import img1 from "@/assets/estabilidade-gestante-1.jpg.asset.json";
import img2 from "@/assets/estabilidade-gestante-2.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const post: BlogPost = {
  slug: "estabilidade-da-gestante",
  title: "Fui demitida quando estava grávida. Isso é permitido?",
  description:
    "Guia prático sobre estabilidade da gestante: entenda quando a demissão é proibida, quais direitos você tem e como agir para garantir sua proteção.",
  date: "2026-06-24",
  author: "Gabriel Callegaro",
  content: `
    <h2>O que é a estabilidade da gestante?</h2>
    <p>A Constituição Federal e a CLT garantem que a trabalhadora gestante não pode ser dispensada sem justa causa desde a confirmação da gravidez até 5 meses após o parto. Esse período é chamado de estabilidade provisória.</p>
    <p>Na prática, isso significa que, durante a gravidez e nos primeiros cinco meses depois do nascimento do bebê, a empresa não pode simplesmente decidir demitir a funcionária sem um motivo gravíssimo e comprovado. O objetivo da lei é proteger a mulher e a criança em um momento de extrema vulnerabilidade financeira e emocional.</p>
    <blockquote><strong>A estabilidade existe mesmo que a empresa não saiba da gravidez no momento da demissão. O que importa é o fato biológico da gestação, não o conhecimento do empregador.</strong></blockquote>

    <img src="${img1.url}" alt="Mulher gestante com documentos de trabalho, representando a proteção da estabilidade provisória" loading="lazy" width="1280" height="720" />

    <h2>Fui demitida sem saber que estava grávida. Tenho direito?</h2>
    <p>Sim. Esse é um dos pontos mais importantes e menos conhecidos dessa proteção. O entendimento consolidado dos tribunais — inclusive do Tribunal Superior do Trabalho — é de que a estabilidade da gestante independe do conhecimento da gravidez por parte da empregada ou do empregador no momento da dispensa.</p>
    <p>Ou seja: se você só descobriu a gravidez depois de já ter sido demitida, mas a concepção ocorreu antes ou durante o aviso prévio, ainda assim você tem direito à estabilidade e pode buscar a reintegração ao emprego ou a indenização correspondente ao período.</p>

    <h2>Quais direitos a gestante tem em caso de demissão irregular?</h2>
    <p>Quando a empresa demite a gestante sem motivo justo durante o período de estabilidade, a trabalhadora pode buscar na Justiça do Trabalho:</p>
    <ul>
      <li><strong>Reintegração ao emprego</strong>, com retorno ao cargo e à função que ocupava.</li>
      <li><strong>Indenização substitutiva</strong>, referente a todo o período de estabilidade, quando a reintegração não for mais possível.</li>
      <li><strong>Salários e demais verbas</strong> do período entre a demissão e o fim da estabilidade (5 meses após o parto).</li>
      <li><strong>FGTS e 13º salário proporcionais</strong> a esse período.</li>
      <li><strong>Manutenção do plano de saúde</strong> durante a gestação, quando oferecido pela empresa.</li>
      <li><strong>Indenização por danos morais</strong>, se houver comprovação de tratamento discriminatório ou constrangedor.</li>
    </ul>
    <p>A escolha entre reintegração e indenização geralmente depende do momento em que a ação é julgada. Se já passou o período de estabilidade quando a decisão sai, o mais comum é a conversão em indenização.</p>

    <img src="${img2.url}" alt="Documentos de contrato de trabalho ao lado de uma ultrassonografia, simbolizando os direitos da gestante demitida" loading="lazy" width="1280" height="720" />

    <h2>A estabilidade vale também para contrato de experiência e contrato temporário?</h2>
    <p>Esse é um ponto que gera bastante dúvida. Durante muito tempo, alguns entendimentos restringiam a proteção a contratos por prazo indeterminado. Hoje, porém, a posição predominante nos tribunais — incluindo o STF — é de que a estabilidade da gestante se aplica também a contratos por prazo determinado, como contrato de experiência.</p>
    <blockquote><strong>Isso significa que, mesmo estando em período de experiência, a gestante não pode ser dispensada sem justa causa em razão da gravidez. Cada caso, porém, deve ser analisado individualmente.</strong></blockquote>

    <h2>O que fazer se isso aconteceu comigo?</h2>
    <p>O primeiro passo é reunir a documentação que comprove a gravidez no período da demissão: exames, atestados médicos, carteira de pré-natal ou qualquer documento com data que demonstre a gestação.</p>
    <p>Em seguida, é importante buscar orientação jurídica o quanto antes. Apesar de a estabilidade durar até 5 meses após o parto, agir rapidamente fortalece o pedido de reintegração — que se torna inviável depois que esse prazo passa, restando apenas a indenização.</p>
    <p>Guarde também: comunicações com a empresa sobre a demissão, contracheques, carteira de trabalho e qualquer mensagem (e-mail, WhatsApp) relacionada ao desligamento.</p>

    <h2>Qual é o prazo para entrar com a ação?</h2>
    <p>O prazo prescricional para ações trabalhistas é de 2 anos a partir do fim do contrato de trabalho. Dentro da ação, podem ser cobrados direitos relativos aos últimos 5 anos.</p>
    <p>Mas no caso da estabilidade da gestante, o tempo importa de um jeito especial: quanto antes a ação for ajuizada, maiores as chances de a reintegração ainda ser uma opção viável — e não apenas a indenização.</p>

    <p style="text-align:center"><a class="cta-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Veja seu caso com um advogado especializado</a></p>
  `,
};

export default post;
