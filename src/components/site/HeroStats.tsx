const stats = [
  { value: "+2 mil", label: "Causas trabalhistas conduzidas" },
  { value: "100%", label: "Atendimento digital" },
  { value: "Sem custo", label: "Honorário só no êxito" },
];

export function HeroStats() {
  return (
    <div className="relative z-10 w-full border-t border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-7 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <div className="font-display text-3xl font-semibold text-[var(--brand-wine)] sm:text-4xl">
                {s.value}
              </div>
               <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
