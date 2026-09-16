import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { posts } from "@/content/blog";

const TITLE = "Blog | Gabriel Callegaro — Advogado Trabalhista";
const DESCRIPTION =
  "Artigos sobre direitos trabalhistas, rescisão, horas extras, FGTS e demais temas do Direito do Trabalho.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--brand-darker)]">
            Blog
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Artigos e orientações sobre Direito do Trabalho.
          </p>

          <div className="mt-12 grid gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block rounded-lg border border-neutral-200 p-6 hover:border-[var(--brand-wine)] hover:shadow-elegant transition-smooth"
              >
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  {new Date(p.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--brand-darker)]">
                  {p.title}
                </h2>
                <p className="mt-2 text-neutral-600">{p.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[var(--brand-wine)]">
                  Ler artigo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}