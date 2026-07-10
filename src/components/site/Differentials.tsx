import { CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppLink } from "./WhatsAppLink";

const items = [
  "Atendimento personalizado",
  "Transparência durante todo o processo",
  "Comunicação rápida e direta",
  "Estratégia jurídica individualizada",
  "Atendimento online e presencial",
  "Compromisso com resultados",
];

export function Differentials() {
  return (
    <section className="py-24 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Diferenciais
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            Por que escolher uma <span className="text-brand-red">atuação especializada</span>?
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded" />
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
            A advocacia trabalhista exige profundidade técnica e sensibilidade
            humana. Trabalho lado a lado com cada cliente — sem terceirizações,
            sem respostas genéricas.
          </p>
          <WhatsAppLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded gradient-red px-7 py-3.5 font-semibold text-white shadow-elegant hover:shadow-glow transition-smooth"
          >
            Quero conversar sobre meu caso
          </WhatsAppLink>
        </div>

        <ul className="space-y-3 reveal">
          {items.map((it, i) => (
            <li
              key={it}
              className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-white px-5 py-4 shadow-card hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
              <span className="font-medium text-[var(--brand-dark)]">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}