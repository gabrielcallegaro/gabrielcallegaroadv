import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Process } from "@/components/site/Process";
import { Differentials } from "@/components/site/Differentials";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { LatestPosts } from "@/components/site/LatestPosts";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Advogado Trabalhista no Rio Grande do Sul | Gabriel Callegaro";
const DESCRIPTION =
  "Advogado trabalhista no RS — atendimento online e presencial. Defesa de verbas rescisórias, horas extras, vínculo, FGTS e acidente de trabalho. Fale agora pelo WhatsApp.";
const SITE_URL = "https://gabrielcallegaroadv.lovable.app";
const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "Fui demitido sem justa causa, quais são meus direitos?", a: "Você tem direito ao aviso prévio, 13º proporcional, férias proporcionais com 1/3, saldo de salário, FGTS com multa de 40% e acesso ao seguro-desemprego, entre outros, conforme o caso." },
  { q: "Posso cobrar horas extras não pagas?", a: "Sim. Toda jornada além das 8 horas diárias ou 44 semanais (salvo regime especial) deve ser remunerada com adicional mínimo de 50%. É possível cobrar judicialmente os últimos 5 anos." },
  { q: "Trabalhei sem carteira assinada. Tenho direitos?", a: "Sim. Comprovado o vínculo empregatício, você tem direito ao reconhecimento da relação de emprego e a todas as verbas trabalhistas do período." },
  { q: "Quanto tempo tenho para entrar com uma ação trabalhista?", a: "O prazo é de até 2 anos após o fim do contrato, podendo cobrar os últimos 5 anos de direitos não pagos durante o vínculo." },
  { q: "O atendimento pode ser online?", a: "Sim. Atendimentos por WhatsApp, vídeo chamada e e-mail para clientes de todo o Rio Grande do Sul." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "advogado trabalhista, advogado trabalhista RS, advogado trabalhista Rio Grande do Sul, advogado trabalhista Porto Alegre, advogado trabalhista Novo Hamburgo, advogado trabalhista São Leopoldo, advogado trabalhista online, ação trabalhista, processo trabalhista, direitos trabalhistas, horas extras, verbas rescisórias, acidente de trabalho, FGTS, rescisão indireta, estabilidade gestante",
      },
      { name: "author", content: "Gabriel Callegaro de Souza" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LegalService", "Attorney"],
              "@id": SITE_URL + "/#legalservice",
              name: "Gabriel Callegaro de Souza — Advocacia Trabalhista",
              description: DESCRIPTION,
              url: SITE_URL + "/",
              image: SITE_URL + "/favicon.ico",
              priceRange: "$$",
              areaServed: [
                { "@type": "State", name: "Rio Grande do Sul" },
                { "@type": "Country", name: "Brasil" },
              ],
              serviceType: [
                "Verbas rescisórias",
                "Horas extras",
                "Reconhecimento de vínculo empregatício",
                "Acidente de trabalho",
                "Assédio moral",
                "Rescisão indireta",
                "Reversão de justa causa",
                "Estabilidade gestante",
                "FGTS",
                "Insalubridade e periculosidade",
              ],
              founder: {
                "@type": "Person",
                name: "Gabriel Callegaro de Souza",
                jobTitle: "Advogado Trabalhista",
                identifier: "OAB/RS 142.158",
              },
              memberOf: { "@type": "Organization", name: "OAB/RS", identifier: "142.158" },
              availableLanguage: "Portuguese",
              sameAs: ["https://www.instagram.com/gabrielcallegaro.adv"],
            },
            {
              "@type": "FAQPage",
              "@id": SITE_URL + "/#faq",
              mainEntity: FAQ_ITEMS.map((f) => ({
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
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Process />
      <Differentials />
      <FAQ />
      <Testimonials />
      <LatestPosts />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
