import { ShieldCheck, Handshake, Target, Eye } from "lucide-react";
import { LAWYER } from "@/lib/contact";
import portrait from "@/assets/gabriel-callegaro.jpg.asset.json";

const pillars = [
  { icon: Handshake, title: "Atendimento Humanizado", text: "Escuta atenta e linguagem clara em cada etapa." },
  { icon: Target, title: "Atuação Estratégica", text: "Análise profunda e decisões fundamentadas para cada caso." },
  { icon: Eye, title: "Transparência Total", text: "Acompanhamento próximo, sem promessas vazias." },
  { icon: ShieldCheck, title: "Defesa dos Direitos", text: "Compromisso integral com a justiça trabalhista." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Sobre o Advogado
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            Conheça <span className="text-brand-red">Gabriel Callegaro de Souza</span>
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded" />

          <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-6">
            <img
              src={portrait.url}
              alt="Gabriel Callegaro de Souza, advogado trabalhista OAB/RS 142.158"
              loading="lazy"
              className="h-48 w-40 flex-shrink-0 rounded-lg object-cover shadow-elegant ring-1 ring-[var(--border)]"
            />
            <div className="space-y-4 text-[var(--brand-charcoal)] leading-relaxed">
              <p>
                Advogado dedicado integralmente ao Direito do Trabalho, Gabriel
                Callegaro de Souza atua na defesa de trabalhadores em todo o
                Rio Grande do Sul, com foco em resultados justos e na correta
                reparação dos direitos violados.
              </p>
              <p>
                Cada caso é tratado com profundidade técnica, escuta atenta e
                uma estratégia personalizada — porque por trás de cada processo
                existe uma história, uma família e uma trajetória profissional
                que merecem respeito.
              </p>
              <p>
                Atendimento online e presencial, comunicação direta e
                transparente do início ao fim.
              </p>
            </div>
          </div>

          <div className="mt-8 ml-0 self-start inline-flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-5 py-3">
            <div className="h-11 w-11 grid place-items-center rounded gradient-red text-white font-display text-lg font-bold">
              GC
            </div>
            <div>
              <div className="font-semibold text-[var(--brand-dark)] leading-tight">{LAWYER.name}</div>
              <div className="text-sm text-brand-red font-medium">{LAWYER.oab}</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 reveal">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="hover-lift rounded-lg border border-[var(--border)] bg-white p-6 shadow-card"
            >
              <div className="h-11 w-11 grid place-items-center rounded gradient-red text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--brand-dark)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}