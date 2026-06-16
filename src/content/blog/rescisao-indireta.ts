import type { BlogPost } from "./index";
import img1 from "@/assets/rescisao-indireta-1.jpg.asset.json";
import img2 from "@/assets/rescisao-indireta-2.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const post: BlogPost = {
  slug: "rescisao-indireta",
  title: "A empresa errou — mas sou eu quem vai sair. Existe saída justa para isso?",
  description:
    "Guia prático sobre rescisão indireta: quando ela cabe, quais direitos garante e como agir sem perder o que é seu.",
  date: "2026-06-15",
  author: "Gabriel Callegaro",
  content: `
    <h2>O que é a rescisão indireta?</h2>
    <p>Imagina a situação: a empresa está atrasando o salário há meses. Ou o seu chefe faz sua vida um inferno todo dia. Ou colocaram você para fazer uma função completamente diferente daquela para a qual foi contratado. Você quer sair, mas se pedir demissão, perde multa do FGTS, aviso prévio e seguro-desemprego.</p>
    <p>A rescisão indireta resolve exatamente isso. Ela é uma demissão provocada pelo empregador — mesmo que quem entregue o crachá seja o trabalhador. A lei trabalhista diz: quando a empresa comete faltas graves contra o empregado, ele pode pedir demissão e mesmo assim receber todos os direitos como se tivesse sido demitido sem justa causa.</p>
    <blockquote><strong>Na prática, é a "justa causa" da empresa — o mesmo mecanismo que o empregador usa para demitir sem pagar nada, mas virado ao contrário.</strong></blockquote>

    <img src="${img1.url}" alt="Trabalhador exausto e sobrecarregado no escritório" loading="lazy" width="1280" height="720" />

    <h2>Quais situações autorizam a rescisão indireta?</h2>
    <p>A Consolidação das Leis do Trabalho (CLT) lista as situações que configuram falta grave do empregador. As mais comuns na prática são:</p>
    <ul>
      <li>Salário atrasado de forma recorrente</li>
      <li>Não pagamento de horas extras, FGTS ou outros direitos</li>
      <li>Assédio moral — humilhações, xingamentos, pressão psicológica constante</li>
      <li>Desvio de função — trabalhar em cargo muito diferente do contratado, sem ajuste de salário</li>
      <li>Redução do salário de forma unilateral</li>
      <li>Exigência de tarefas ilegais ou que coloquem em risco a saúde e segurança</li>
      <li>Ambiente de trabalho hostil ou insalubre sem medidas de proteção</li>
      <li>Descumprimento de obrigações do contrato de trabalho</li>
    </ul>
    <p>Não precisa ser apenas uma dessas situações. Na maioria dos casos, é um conjunto de condutas que foi tornando o trabalho insustentável ao longo do tempo.</p>

    <h2>O que eu recebo se a rescisão indireta for reconhecida?</h2>
    <p>Os direitos são os mesmos de uma demissão sem justa causa. Isso significa:</p>
    <ul>
      <li>FGTS de todo o período + multa de 40%</li>
      <li>Aviso prévio indenizado</li>
      <li>13º salário proporcional</li>
      <li>Férias vencidas e proporcionais + terço constitucional</li>
      <li>Seguro-desemprego (se preenchidos os requisitos)</li>
      <li>Verbas que deixaram de ser pagas durante o contrato (horas extras, adicionais etc.)</li>
    </ul>
    <p>Além disso, se houver assédio moral comprovado ou outras condutas que causaram dano psicológico ou material, é possível incluir na mesma ação o pedido de indenização por danos morais.</p>

    <img src="${img2.url}" alt="Documentos trabalhistas e CLT sobre a mesa" loading="lazy" width="1280" height="720" />

    <h2>Preciso sair da empresa antes de entrar com a ação?</h2>
    <p>Não necessariamente — mas na prática é o caminho mais comum. O trabalhador notifica a empresa (por escrito, de preferência), registra as irregularidades e ajuíza a ação solicitando que o juiz reconheça a rescisão indireta.</p>
    <p>Existe também a possibilidade de entrar com a ação ainda durante o contrato, pedindo que o juiz declare rescindido o vínculo por culpa da empresa. Mas é uma estratégia que depende muito do caso concreto.</p>
    <blockquote><strong>Atenção: sair da empresa sem nenhuma documentação das irregularidades pode enfraquecer o caso. Antes de qualquer passo, registre tudo: prints de mensagens, e-mails, contracheques atrasados, testemunhos.</strong></blockquote>

    <h2>Qual é o prazo para entrar com a ação?</h2>
    <p>O prazo é de 2 anos a partir da data em que o contrato foi encerrado. Depois disso, o direito prescreve.</p>
    <p>Dentro da ação, é possível cobrar os direitos dos últimos 5 anos anteriores ao ajuizamento. Ou seja, quem espera demais para buscar orientação pode perder parte do que teria direito a receber.</p>
    <p>Se você está vivendo uma dessas situações agora e ainda está na empresa, o momento ideal para buscar um advogado trabalhista é antes de tomar qualquer decisão — inclusive antes de pedir demissão. Uma orientação prévia pode fazer diferença significativa no que você vai receber.</p>

    <p style="text-align:center"><a class="cta-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Veja seu caso com um advogado especializado</a></p>
  `,
};

export default post;