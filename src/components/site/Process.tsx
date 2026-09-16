import { Phone, Search, Lightbulb, Gavel } from "lucide-react";

const steps = [
  { icon: Phone, title: "Contato Inicial", text: "Você fala diretamente comigo pelo WhatsApp ou formulário, com sigilo total." },
  { icon: Search, title: "Análise do Caso", text: "Estudo aprofundado dos documentos e da situação para identificar todos os direitos." },
  { icon: Lightbulb, title: "Estratégia Jurídica", text: "Definição da melhor abordagem — acordo, ação judicial ou negociação direta." },
  { icon: Gavel, title: "Acompanhamento Processual", text: "Atuação ativa em todas as fases, com atualizações claras e constantes." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Como Funciona
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            Um atendimento <span className="text-brand-red">claro</span> do começo ao fim
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-wine)]/40 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative z-10 mx-auto h-20 w-20 grid place-items-center rounded-full gradient-red text-white shadow-elegant">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-display text-sm tracking-[0.2em] uppercase text-[var(--brand-wine)]">
                    Etapa {i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[var(--brand-dark)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs mx-auto">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}