import {
  Banknote, Clock, FileSignature, HeartPulse, ShieldAlert,
  Flame, Zap, PiggyBank, Baby, DoorOpen, Undo2, Scale,
} from "lucide-react";

const areas = [
  { icon: Banknote, title: "Verbas Rescisórias", text: "Conferência integral e cobrança dos valores devidos na rescisão contratual." },
  { icon: Clock, title: "Horas Extras", text: "Reconhecimento e pagamento de jornada extraordinária e adicionais." },
  { icon: FileSignature, title: "Reconhecimento de Vínculo", text: "Comprovação do vínculo empregatício não registrado em carteira." },
  { icon: HeartPulse, title: "Acidente de Trabalho", text: "Indenizações, estabilidade e auxílios em casos de acidente ou doença." },
  { icon: ShieldAlert, title: "Assédio Moral", text: "Defesa contra abusos, humilhações e perseguições no ambiente de trabalho." },
  { icon: Flame, title: "Insalubridade", text: "Adicionais por exposição a agentes nocivos à saúde." },
  { icon: Zap, title: "Periculosidade", text: "Adicional para atividades de risco acentuado." },
  { icon: PiggyBank, title: "FGTS", text: "Recuperação de depósitos não realizados e correções devidas." },
  { icon: Baby, title: "Estabilidade Gestante", text: "Proteção do emprego e indenizações no período gestacional." },
  { icon: DoorOpen, title: "Rescisão Indireta", text: "Demissão por culpa do empregador com todos os direitos preservados." },
  { icon: Undo2, title: "Reversão de Justa Causa", text: "Anulação judicial da justa causa aplicada indevidamente." },
  { icon: Scale, title: "Danos Morais Trabalhistas", text: "Reparação por ofensas e violações no contrato de trabalho." },
];

export function PracticeAreas() {
  return (
    <section id="areas" className="relative overflow-hidden bg-secondary py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-wine)] to-transparent opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-section-accent"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--brand-wine)] font-semibold">
            Áreas de Atuação
          </span>
           <h2 className="mt-4 font-display text-4xl sm:text-5xl text-foreground leading-tight">
            Defesa especializada em <span className="text-[var(--brand-wine)]">todas as frentes</span> do Direito do Trabalho
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <div
              key={a.title}
              className="reveal group rounded-lg border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="h-12 w-12 grid place-items-center rounded gradient-red text-primary-foreground shadow-elegant transition-smooth group-hover:scale-110">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}