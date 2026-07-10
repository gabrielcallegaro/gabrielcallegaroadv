import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, MapPin,
  Clock, UserCog, Wallet, Scale, Activity, AlertTriangle,
  Coffee, PhoneCall, FileCheck, Brain, PiggyBank, Undo2,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL_BANCARIO, LAWYER } from "@/lib/contact";
import heroImg from "@/assets/hero-justice.jpg";

const TITLE = "Advogado Bancário Trabalhista no Rio Grande do Sul | Gabriel Callegaro";
const DESCRIPTION =
  "Advogado especializado em direito bancário trabalhista no RS. Horas extras, cargo de confiança, PLR, LER/DORT, assédio moral e verbas rescisórias. Atendimento online e presencial.";
const KEYWORDS =
  "advogado bancário, advogado trabalhista bancário, hora extra bancário, gerente banco horas extras, cargo de confiança bancário, PLR banco, LER bancário, assédio moral banco, advogado bancário Porto Alegre, advogado bancário Novo Hamburgo, advogado bancário Rio Grande do Sul";
const SITE_URL = "https://callegaroadvocacia.com.br";
const PAGE_URL = SITE_URL + "/bancario";

const areas = [
  { icon: Clock, title: "Horas Extras (6ª e 7ª hora)", text: "Cobrança da jornada extraordinária quando o cargo de confiança não afasta o direito à 6ª hora prevista para bancários." },
  { icon: UserCog, title: "Cargo de Confiança Fictício", text: "Análise da real fidúcia bancária — muitos \"gerentes\" e \"supervisores\" têm direito a horas extras negadas indevidamente." },
  { icon: Wallet, title: "Diferenças de PLR", text: "Revisão do cálculo da Participação nos Lucros e Resultados e cobrança de valores pagos a menor." },
  { icon: Scale, title: "Equiparação Salarial e Desvio de Função", text: "Correção de diferenças salariais entre empregados que exercem as mesmas atribuições." },
  { icon: Activity, title: "LER/DORT e Doenças Ocupacionais", text: "Indenizações e estabilidade em casos de tendinite, síndrome do túnel do carpo e outras lesões por esforço repetitivo." },
  { icon: AlertTriangle, title: "Assédio Moral por Metas", text: "Defesa contra cobranças abusivas, exposição em rankings e pressão excessiva por produtividade." },
  { icon: Coffee, title: "Intervalo Intrajornada Suprimido", text: "Cobrança de horas extras quando o intervalo para descanso e alimentação não é respeitado." },
  { icon: PhoneCall, title: "Sobreaviso e Prontidão", text: "Reconhecimento de horas à disposição do banco fora do expediente, por celular corporativo ou plantões." },
  { icon: FileCheck, title: "Verbas Rescisórias e Convenção Coletiva", text: "Conferência de todos os direitos previstos na CCT dos bancários, muitas vezes descumpridos na rescisão." },
  { icon: Brain, title: "Transtornos Psíquicos Ocupacionais", text: "Ansiedade, burnout e depressão relacionados à pressão excessiva por metas no ambiente bancário." },
  { icon: PiggyBank, title: "FGTS e Reflexos Salariais", text: "Recuperação de depósitos e diferenças não recolhidas sobre verbas de natureza salarial." },
  { icon: Undo2, title: "Reversão de Justa Causa", text: "Anulação judicial de demissões por justa causa aplicadas sem fundamento adequado." },
];

const faqs = [
  {
    q: "Sou gerente de banco, tenho direito a horas extras?",
    a: "Depende. A CLT prevê que o cargo de confiança bancária afasta o direito à 6ª e 7ª hora, mas somente quando existe fidúcia real — poderes de gestão, subordinados, autonomia para decisões relevantes. Muitos \"gerentes\" na prática apenas atendem clientes ou vendem produtos, sem poder de mando. Nesses casos, é possível pleitear as horas extras excedentes à 6ª diária.",
  },
  {
    q: "O banco não paga minha 7ª e 8ª hora, isso é permitido?",
    a: "A jornada do bancário é, em regra, de 6 horas diárias. A 7ª e 8ª hora só são devidas sem adicional em situações específicas previstas em lei ou norma coletiva, como o cargo de confiança do art. 224, §2º da CLT. Fora dessas hipóteses, essas horas devem ser pagas como extras. Vale analisar o contrato, a função efetivamente exercida e a convenção coletiva aplicável.",
  },
  {
    q: "Desenvolvi LER/DORT trabalhando no banco. O que posso fazer?",
    a: "Procure atendimento médico e exija a emissão da CAT (Comunicação de Acidente de Trabalho) pelo banco. A doença ocupacional equipara-se ao acidente de trabalho e pode gerar direito a estabilidade no emprego, auxílio-doença acidentário pelo INSS e, dependendo do caso, indenizações por danos materiais, morais e estéticos.",
  },
  {
    q: "Minha PLR foi paga a menor ou de forma diferente do combinado. Posso cobrar?",
    a: "Sim. A PLR é regida por norma coletiva ou acordo específico. Diferenças de cálculo, critérios aplicados de forma incorreta ou descumprimento de metas contratualmente pactuadas podem ser questionados judicialmente, com cobrança dos valores pagos a menor nos últimos anos.",
  },
  {
    q: "Sou cobrado de metas de forma abusiva. Isso pode ser considerado assédio moral?",
    a: "Pode. Cobrança de metas em si é lícita, mas se ela se dá com exposição pública em rankings, humilhações, ameaças, uso de apelidos pejorativos ou pressão que ultrapasse os limites da razoabilidade, configura assédio moral. Nesses casos, cabe indenização por dano moral, avaliada conforme as circunstâncias.",
  },
  {
    q: "Fui demitido do banco. Quais verbas tenho direito a receber?",
    a: "As verbas variam conforme o tipo de rescisão, mas em regra envolvem saldo de salário, aviso prévio, 13º e férias proporcionais com 1/3, FGTS com multa de 40% (na dispensa sem justa causa) e direitos previstos na CCT dos bancários — como PLR proporcional e outras verbas específicas da categoria. É importante conferir cada valor pago, pois erros e omissões são frequentes.",
  },
  {
    q: "Quanto tempo tenho para entrar com uma ação contra o banco?",
    a: "O prazo é de até 2 anos após o fim do contrato de trabalho, podendo ser cobrados os últimos 5 anos de direitos não pagos durante o vínculo. Ainda com contrato ativo, é possível ajuizar a qualquer momento, respeitando o mesmo limite de 5 anos retroativos.",
  },
];

export const Route = createFileRoute("/bancario")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: "Gabriel Callegaro de Souza" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LegalService", "Attorney"],
              "@id": PAGE_URL + "#legalservice",
              name: "Gabriel Callegaro de Souza — Advocacia Bancária Trabalhista",
              description: DESCRIPTION,
              url: PAGE_URL,
              areaServed: [
                { "@type": "State", name: "Rio Grande do Sul" },
                { "@type": "Country", name: "Brasil" },
              ],
              serviceType: [
                "Horas extras de bancário",
                "Cargo de confiança bancária",
                "PLR — Participação nos Lucros e Resultados",
                "LER/DORT e doenças ocupacionais",
                "Assédio moral por metas",
                "Verbas rescisórias de bancário",
              ],
              founder: {
                "@type": "Person",
                name: LAWYER.name,
                jobTitle: "Advogado Trabalhista",
                identifier: LAWYER.oab,
              },
            },
            {
              "@type": "FAQPage",
              "@id": PAGE_URL + "#faq",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: BancarioPage,
});

function BancarioPage() {
  useReveal();
  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section id="inicio-bancario" className="relative min-h-screen flex items-center overflow-hidden bg-hero">
        <img
          src={heroImg}
          alt="Advogado bancário trabalhista no Rio Grande do Sul — defesa dos direitos dos bancários"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.11 0.005 0 / 0.92) 0%, oklch(0.13 0.005 0 / 0.75) 55%, oklch(0.18 0.06 27 / 0.55) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-[var(--brand-wine)]" aria-hidden="true" />
              Advocacia Trabalhista — Rio Grande do Sul
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Advogado Trabalhista no Rio Grande do Sul
              <span className="block bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
                Atendimento online e presencial.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
              Defesa especializada dos direitos de gerentes, caixas, escriturários
              e demais empregados do setor bancário — com profundidade técnica
              sobre jornada, cargo de confiança, PLR e doenças ocupacionais, do
              interior à capital do Rio Grande do Sul.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <WhatsAppLink
                href={WHATSAPP_URL_BANCARIO}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded gradient-red px-7 py-4 font-semibold text-white shadow-elegant transition-smooth hover:shadow-glow"
                aria-label="Falar com advogado bancário pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </WhatsAppLink>
              <a
                href="#contato-bancario"
                className="inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
              >
                Agendar Consulta
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "100%", l: "Atendimento Humanizado" },
                { n: "OAB/RS", l: "142.158" },
                { n: "24h", l: "Resposta Rápida" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-[var(--brand-wine)] pl-4">
                  <div className="font-display text-2xl text-white font-bold">{s.n}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Bancárias */}
      <section id="areas-bancario" className="py-24 bg-[var(--brand-dark)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-wine)] to-transparent opacity-70" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 0%, oklch(0.42 0.18 27 / 0.6), transparent 50%), radial-gradient(circle at 80% 100%, oklch(0.5 0.2 27 / 0.4), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--brand-wine)] font-semibold">
              Áreas de Atuação
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white leading-tight">
              Defesa especializada em <span className="text-[var(--brand-wine)]">todas as frentes</span> do Direito Bancário Trabalhista
            </h2>
            <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a, i) => (
              <div
                key={a.title}
                className="reveal group rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-smooth hover:border-[var(--brand-wine)]/50 hover:bg-white/[0.06] hover:-translate-y-1"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="h-12 w-12 grid place-items-center rounded gradient-red text-white shadow-elegant transition-smooth group-hover:scale-110">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que especializado */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 reveal">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
              Atuação Especializada
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
              Por que a atuação bancária exige um <span className="text-brand-red">olhar especializado</span>?
            </h2>
            <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
          </div>
          <div className="mt-10 space-y-5 text-[var(--brand-charcoal)] leading-relaxed text-lg">
            <p>
              O setor bancário tem uma das legislações trabalhistas mais
              específicas do país — jornada reduzida, cargos de confiança com
              regras próprias e convenções coletivas robustas. Reconhecer quando
              um "cargo de gestão" é apenas um nome no crachá, e não uma função
              de confiança de verdade, é o que faz a diferença entre reaver ou
              não anos de horas extras não pagas.
            </p>
            <p>
              Trabalho lado a lado com cada cliente bancário — sem
              terceirizações, sem respostas genéricas, com estratégia jurídica
              construída em cima da real rotina de trabalho de cada um.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Process />
      <Differentials />

      {/* FAQ Bancário */}
      <section id="faq-bancario" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
              Perguntas Frequentes
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
              Tire suas dúvidas sobre <span className="text-brand-red">direitos bancários</span>
            </h2>
            <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
          </div>

          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--muted)] px-6 reveal"
              >
                <AccordionTrigger className="text-left font-semibold text-[var(--brand-dark)] hover:text-brand-red hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Testimonials />

      {/* CTA final */}
      <section id="contato-bancario" className="py-24 bg-[var(--brand-darker)] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, oklch(0.5 0.2 27 / 0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--brand-wine)] font-semibold">
            Atendimento Imediato
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-white leading-[1.05] font-bold">
            Trabalha ou trabalhou em banco <br />
            <span className="bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
              e tem dúvidas sobre seus direitos?
            </span>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Converse agora com um advogado especializado em direito bancário
            trabalhista e receba uma análise inicial do seu caso.
          </p>

          <WhatsAppLink
            href={WHATSAPP_URL_BANCARIO}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded gradient-red px-10 py-5 text-lg font-semibold text-white shadow-elegant hover:shadow-glow transition-smooth"
          >
            <MessageCircle className="h-6 w-6" />
            Falar no WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </WhatsAppLink>

          <div className="mt-8 text-sm text-white/50">
            Atendimento online e presencial — Rio Grande do Sul
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat href={WHATSAPP_URL_BANCARIO} />
    </main>
  );
}