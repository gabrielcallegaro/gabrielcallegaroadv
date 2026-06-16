import type { BlogPost } from "./index";
import img1 from "@/assets/vinculo-1.jpg.asset.json";
import img2 from "@/assets/vinculo-2.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const post: BlogPost = {
  slug: "reconhecimento-de-vinculo",
  title: "Trabalhei sem carteira assinada. Tenho direito a alguma coisa?",
  description:
    "Guia prático sobre reconhecimento de vínculo empregatício: quando cabe, quais direitos garante e como provar mesmo sem registro formal.",
  date: "2026-06-16",
  author: "Gabriel Callegaro",
  content: `
    <h2>O que é o reconhecimento de vínculo empregatício?</h2>
    <p>Muita gente trabalha anos para a mesma empresa como se fosse funcionário — cumpre horário, recebe ordens, depende daquele dinheiro todo mês — mas nunca teve carteira assinada. Em vez disso, foi contratada como "autônoma", MEI, pessoa jurídica (PJ) ou simplesmente trabalhou no informal, sem nenhum papel.</p>
    <p>O reconhecimento de vínculo é a ação trabalhista que diz exatamente isso para a Justiça: "Olha, eu era empregado de verdade. A empresa só não quis registrar para não pagar os direitos." Quando a Justiça reconhece esse vínculo, a empresa é obrigada a pagar tudo que deveria ter pago desde o início.</p>

    <img src="${img1.url}" alt="Carteira de trabalho sobre a mesa de um escritório de advocacia" loading="lazy" width="1280" height="720" />

    <h2>Como a Justiça decide se havia vínculo ou não?</h2>
    <p>A lei não se importa com o nome que a empresa deu ao contrato. O que importa é a realidade do dia a dia. Os juízes analisam quatro critérios principais:</p>
    <ul>
      <li><strong>Pessoalidade:</strong> você era a pessoa que tinha que aparecer, não podia mandar qualquer outro no seu lugar.</li>
      <li><strong>Habitualidade:</strong> o trabalho era regular e constante, não esporádico.</li>
      <li><strong>Subordinação:</strong> você recebia ordens, tinha chefe, seguia regras da empresa.</li>
      <li><strong>Remuneração:</strong> você recebia um valor pelo serviço prestado.</li>
    </ul>
    <p>Se esses quatro elementos estavam presentes, a Justiça pode reconhecer o vínculo — independentemente de você ter assinado um contrato de "prestação de serviços" ou emitido nota fiscal como MEI.</p>

    <h2>Quais direitos posso cobrar?</h2>
    <p>Uma vez reconhecido o vínculo, todos os direitos trabalhistas do período passam a ser devidos. Isso inclui:</p>
    <ul>
      <li>FGTS de todo o período trabalhado (8% do salário por mês)</li>
      <li>Multa de 40% sobre o saldo do FGTS, se a demissão foi sem justa causa</li>
      <li>13º salário proporcional a cada ano trabalhado</li>
      <li>Férias de 30 dias por ano + o terço constitucional</li>
      <li>Aviso prévio indenizado</li>
      <li>Seguro-desemprego (se preenchidos os requisitos)</li>
      <li>Recolhimentos para o INSS — o que pode impactar diretamente sua aposentadoria</li>
      <li>Horas extras, adicional noturno e outros adicionais, se cabível</li>
    </ul>
    <p>Na prática, trabalhadores que ficaram anos sem registro costumam ter valores expressivos a receber, porque os direitos se acumulam mês a mês por todo o período.</p>

    <img src="${img2.url}" alt="Trabalhador analisando notas fiscais e contrato de MEI" loading="lazy" width="1280" height="720" />

    <h2>Mas eu assinei um contrato como PJ. Isso não impede a ação?</h2>
    <p>Não. A assinatura de um contrato de prestação de serviços, a abertura de um MEI, a emissão de notas fiscais — nada disso impede a ação se na prática a relação era de emprego.</p>
    <p>A Justiça do Trabalho tem o princípio da primazia da realidade: o que acontecia de verdade no dia a dia vale mais do que o papel assinado. Muitas empresas pedem para o trabalhador abrir MEI justamente para se proteger. Mas se havia subordinação e os outros critérios estavam presentes, a ação tem base.</p>
    <blockquote><strong>Dica importante: prints de WhatsApp, e-mails, escala de trabalho e depoimento de colegas são provas válidas na Justiça do Trabalho — mesmo sem nenhum documento formal.</strong></blockquote>

    <h2>Qual é o prazo para entrar com a ação?</h2>
    <p>O prazo é de 2 anos contados a partir do fim do contrato. Depois disso, os direitos prescrevem e não podem mais ser cobrados.</p>
    <p>Mas atenção: o prazo de 2 anos é para entrar com a ação. Os direitos que podem ser cobrados retroativamente têm um limite de 5 anos antes da data do ajuizamento. Ou seja, quem entra com ação hoje pode cobrar direitos dos últimos 5 anos — dentro dos 2 anos de prazo após sair da empresa.</p>
    <p>Se você ainda está trabalhando na empresa sem carteira, o prazo não começou. Mas quanto antes você buscar orientação, mais bem documentado o caso pode ficar.</p>

    <p style="text-align:center"><a class="cta-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Veja seu caso com um advogado especializado</a></p>
  `,
};

export default post;