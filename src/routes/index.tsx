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
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Gabriel Callegaro de Souza | Advogado Trabalhista | OAB/RS 142.158";
const DESCRIPTION =
  "Advogado Trabalhista no Rio Grande do Sul. Atuação em verbas rescisórias, horas extras, vínculo empregatício, acidentes de trabalho e demais direitos trabalhistas. Atendimento online e presencial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "advogado trabalhista, advogado trabalhista RS, advogado trabalhista Rio Grande do Sul, advogado trabalhista Novo Hamburgo, advogado trabalhista São Leopoldo, advogado trabalhista Vale dos Sinos, ação trabalhista, processo trabalhista, direitos trabalhistas, horas extras, verbas rescisórias, acidente de trabalho, advogado trabalhista online",
      },
      { name: "author", content: "Gabriel Callegaro de Souza" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Gabriel Callegaro de Souza",
          description: DESCRIPTION,
          areaServed: { "@type": "State", name: "Rio Grande do Sul" },
          knowsAbout: [
            "Direito do Trabalho",
            "Verbas rescisórias",
            "Horas extras",
            "Reconhecimento de vínculo empregatício",
            "Acidente de trabalho",
            "Assédio moral",
            "Estabilidade gestante",
            "FGTS",
            "Insalubridade",
            "Periculosidade",
          ],
          memberOf: { "@type": "Organization", name: "OAB/RS", identifier: "142.158" },
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
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
