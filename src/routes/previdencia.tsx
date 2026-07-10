import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, MapPin,
  CalendarClock, Hourglass, HeartPulse, Stethoscope,
  HandHeart, FileSearch, Users, ClipboardCheck,
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
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL_PREVIDENCIARIO, LAWYER } from "@/lib/contact";
import heroImg from "@/assets/hero-justice.jpg";

const TITLE = "Advogado Previdenciário no Rio Grande do Sul | Gabriel Callegaro";
const DESCRIPTION =
  "Advogado previdenciário no RS. Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte e revisão de benefício do INSS. Benefício negado? Fale pelo WhatsApp.";
const KEYWORDS =
  "advogado previdenciário, advogado INSS, aposentadoria, aposentadoria por idade, aposentadoria por tempo de contribuição, aposentadoria por invalidez, auxílio-doença, BPC LOAS, pensão por morte, revisão de benefício, benefício negado INSS, advogado previdenciário Rio Grande do Sul";
const SITE_URL = "https://callegaroadvocacia.com.br";
const PAGE_URL = SITE_URL + "/previdencia";

const areas = [
  { icon: CalendarClock, title: "Aposentadoria por Idade", text: "Análise de idade mínima, carência e período de contribuição para garantir a concessão do benefício no valor correto." },
  { icon: Hourglass, title: "Aposentadoria por Tempo de Contribuição", text: "Regras de transição pós-Reforma, pedágio, pontos e cálculo do melhor cenário para o segurado." },
  { icon: HeartPulse, title: "Aposentadoria por Invalidez", text: "Aposentadoria por incapacidade permanente para quem não tem mais condições de retornar ao trabalho." },
  { icon: Stethoscope, title: "Auxílio-Doença / Incapacidade Temporária", text: "Concessão, prorrogação e recurso do auxílio por incapacidade temporária negado pelo INSS." },
  { icon: HandHeart, title: "BPC / LOAS", text: "Benefício de Prestação Continuada para idosos e pessoas com deficiência em situação de vulnerabilidade social." },
  { icon: FileSearch, title: "Revisão de Benefício", text: "Revisão do valor da aposentadoria e demais benefícios calculados de forma incorreta pelo INSS." },
  { icon: Users, title: "Pensão por Morte", text: "Concessão de pensão a dependentes: cônjuge, companheiro(a), filhos e demais beneficiários previstos em lei." },
  { icon: ClipboardCheck, title: "Planejamento Previdenciário", text: "Estudo do histórico contributivo para escolher o melhor momento e a melhor regra de aposentadoria." },
];

const faqs = [
  {
    q: "Meu benefício foi negado pelo INSS. Posso recorrer?",
    a: "Sim. É possível apresentar recurso administrativo ao Conselho de Recursos da Previdência Social e/ou ingressar diretamente com ação judicial, a depender do motivo da negativa. Muitos indeferimentos decorrem de erro na análise de tempo de contribuição, perícia médica ou documentação, e podem ser revertidos.",
  },
  {
    q: "Quanto tempo demora um processo de aposentadoria por invalidez?",
    a: "O prazo varia conforme a via escolhida e a agência/vara. Na esfera administrativa, o INSS tem prazo legal para responder, mas atrasos são comuns. Na esfera judicial, o processo costuma envolver perícia médica designada pelo juízo e o tempo depende da comarca. Cada caso deve ser avaliado individualmente.",
  },
  {
    q: "Recebo aposentadoria há anos. Ainda posso pedir revisão?",
    a: "Depende da tese de revisão. Existem prazos decadenciais e prescricionais que precisam ser observados. Por isso, é essencial analisar a carta de concessão, o histórico contributivo (CNIS) e o cálculo aplicado antes de ajuizar qualquer pedido.",
  },
  {
    q: "Preciso realmente contratar um advogado ou posso resolver direto no Meu INSS?",
    a: "Pedidos simples podem ser feitos pelo Meu INSS. No entanto, quando há indeferimento, cálculo incorreto, tempo especial, atividade rural, incapacidade ou disputa sobre documentos, o acompanhamento por advogado previdenciário aumenta significativamente as chances de reconhecimento correto do direito.",
  },
  {
    q: "Tenho direito ao BPC/LOAS?",
    a: "O BPC é destinado a idosos com 65 anos ou mais e a pessoas com deficiência, que comprovem baixa renda familiar nos parâmetros da legislação. Não exige contribuição prévia ao INSS, mas envolve análise social e, no caso de pessoa com deficiência, perícia médica.",
  },
  {
    q: "Trabalhei exposto a agentes nocivos. Isso conta como tempo especial?",
    a: "Pode contar. O tempo especial é aquele prestado com exposição a agentes prejudiciais à saúde (ruído, calor, agentes químicos, biológicos etc.), comprovado por PPP e/ou LTCAT. Esse tempo pode ser convertido ou usado para aposentadoria especial, conforme o período e a regra aplicável.",
  },
  {
    q: "Trabalhei em regime rural. Isso ajuda na aposentadoria?",
    a: "Sim. O tempo de trabalho rural, mesmo sem contribuição direta ao INSS em determinados períodos, pode ser reconhecido mediante prova documental e testemunhal. Ele pode ser usado para aposentadoria por idade rural ou somado a períodos urbanos, dependendo do caso.",
  },
];

export const Route = createFileRoute("/previdencia")({
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
              name: "Gabriel Callegaro de Souza — Advocacia Previdenciária",
              description: DESCRIPTION,
              url: PAGE_URL,
              areaServed: [
                { "@type": "State", name: "Rio Grande do Sul" },
                { "@type": "Country", name: "Brasil" },
              ],
              serviceType: [
                "Aposentadoria por idade",
                "Aposentadoria por tempo de contribuição",
                "Aposentadoria por invalidez",
                "Auxílio-doença / incapacidade temporária",
                "BPC / LOAS",
                "Revisão de benefício",
                "Pensão por morte",
                "Planejamento previdenciário",
              ],
              founder: {
                "@type": "Person",
                name: LAWYER.name,
                jobTitle: "Advogado Previdenciário",
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
  component: PrevidenciaPage,
});

function PrevidenciaPage() {
  useReveal();
  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section id="inicio-previdencia" className="relative min-h-screen flex items-center overflow-hidden bg-hero">
        <img
          src={heroImg}
          alt="Advogado previdenciário no Rio Grande do Sul — aposentadoria e benefícios do INSS"
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
              Advocacia Previdenciária — Rio Grande do Sul
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Advogado Previdenciário no Rio Grande do Sul
              <span className="block bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
                Seu benefício do INSS foi negado ou está abaixo do valor correto?
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
              Atuação técnica em aposentadoria, auxílio-doença, BPC/LOAS, pensão
              por morte e revisão de benefício. Análise cuidadosa do seu histórico
              contributivo e da negativa do INSS, com atendimento online e
              presencial no Rio Grande do Sul.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <WhatsAppLink
                href={WHATSAPP_URL_PREVIDENCIARIO}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded gradient-red px-7 py-4 font-semibold text-white shadow-elegant transition-smooth hover:shadow-glow"
                aria-label="Falar com advogado previdenciário pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </WhatsAppLink>
              <a
                href="#contato-previdencia"
                className="inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
              >
                Analisar meu caso
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

      {/* Áreas Previdenciárias */}
      <section id="areas-previdencia" className="py-24 bg-[var(--brand-dark)] relative overflow-hidden">
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
              Defesa dos seus direitos junto ao <span className="text-[var(--brand-wine)]">INSS</span>
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

      {/* Por que contratar um previdenciarista */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 reveal">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
              Atuação Especializada
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
              Por que contratar um <span className="text-brand-red">advogado previdenciarista</span>?
            </h2>
            <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
          </div>
          <div className="mt-10 space-y-5 text-[var(--brand-charcoal)] leading-relaxed text-lg">
            <p>
              A legislação previdenciária mudou muito nos últimos anos —
              Reforma da Previdência, regras de transição, revisões, teses do STF
              e do STJ. Uma aposentadoria concedida de forma automática pelo INSS
              raramente é a mais vantajosa: pequenos ajustes no tempo de
              contribuição, no salário-de-benefício ou na regra escolhida podem
              representar uma diferença expressiva ao longo da vida do segurado.
            </p>
            <p>
              Cada caso é analisado individualmente: leitura do CNIS, PPP,
              carta de concessão e do indeferimento, definição da melhor via
              (administrativa ou judicial) e acompanhamento próximo do cliente,
              sem terceirizações.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Process />
      <Differentials />

      {/* FAQ Previdência */}
      <section id="faq-previdencia" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
              Perguntas Frequentes
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
              Dúvidas comuns sobre <span className="text-brand-red">INSS e benefícios</span>
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
      <section id="contato-previdencia" className="py-24 bg-[var(--brand-darker)] relative overflow-hidden">
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
            Benefício do INSS negado <br />
            <span className="bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
              ou pago abaixo do que deveria?
            </span>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Envie sua situação pelo WhatsApp e receba uma análise inicial do
            seu caso previdenciário, com orientação sobre os próximos passos.
          </p>

          <WhatsAppLink
            href={WHATSAPP_URL_PREVIDENCIARIO}
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
      <WhatsAppFloat href={WHATSAPP_URL_PREVIDENCIARIO} />
    </main>
  );
}