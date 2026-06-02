import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Jean Rodrigo", role: "Porto Alegre — RS", text: "Ótimo atendimento, profissional altamente qualificado. Indico e recomendo 👏👏👏" },
  { name: "Alessandra Martins", role: "Novo Hamburgo — RS", text: "Trabalho com excelência, um profissional muito responsável e apto... super indicado!" },
  { name: "Jorge Medeiros", role: "Porto Alegre — RS", text: "Muito atencioso com o cliente, atende e tira todas as dúvidas da gente, tem muita paciência e faz um trabalho muito satisfatório. Só tenho a agradecer." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            A confiança de quem <span className="text-brand-red">buscou justiça</span>
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="reveal relative rounded-lg bg-white p-7 shadow-card hover-lift border border-[var(--border)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-brand-red/15" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[var(--brand-wine)] text-[var(--brand-wine)]" />
                ))}
              </div>
              <p className="mt-4 text-[var(--brand-charcoal)] leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="h-11 w-11 rounded-full gradient-red grid place-items-center text-white font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[var(--brand-dark)] text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}