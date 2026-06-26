import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { posts } from "@/content/blog";

export function LatestPosts() {
  const recent = posts.slice(0, 3);
  if (recent.length === 0) return null;

  return (
    <section id="artigos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Artigos Recentes
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            Conteúdo para entender seus <span className="text-brand-red">direitos</span>
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {recent.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="reveal group flex flex-col rounded-lg border border-[var(--border)] bg-white p-6 shadow-card hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                {new Date(p.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--brand-dark)] group-hover:text-brand-red transition-smooth">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3">
                {p.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-wine)]">
                Ler artigo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark)] hover:text-brand-red transition-smooth"
          >
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}