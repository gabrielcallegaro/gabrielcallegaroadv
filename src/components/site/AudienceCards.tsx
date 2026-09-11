import {
  Truck,
  HardHat,
  Home,
  UtensilsCrossed,
  Wheat,
  Briefcase,
  Store,
  Building2,
  Factory,
  ArrowRight,
} from "lucide-react";

const audiences = [
  { icon: Truck, title: "Motoristas & caminhoneiros", href: "#areas" },
  { icon: HardHat, title: "Construção civil", href: "#areas" },
  { icon: Home, title: "Trabalhadores domésticos", href: "#areas" },
  { icon: UtensilsCrossed, title: "Bares & restaurantes", href: "#areas" },
  { icon: Wheat, title: "Trabalhadores rurais", href: "#areas" },
  { icon: Briefcase, title: "Serviços & terceirizados", href: "#areas" },
  { icon: Store, title: "Comércio & serviços gerais", href: "#areas" },
  { icon: Building2, title: "Escritórios & corporativos", href: "#areas" },
  { icon: Factory, title: "Indústria & produção", href: "#areas" },
];

export function AudienceCards() {
  return (
    <section className="py-24 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <h2 className="font-display text-4xl leading-tight text-[var(--brand-dark)] sm:text-5xl">
            Advogado que{" "}
            <span className="italic text-[var(--brand-wine)]">entende você</span>.
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--brand-charcoal)]">
            Sem termos complicados, sem enrolação. Atuamos exclusivamente na defesa de
            trabalhadores e conhecemos bem a realidade do empregado brasileiro. Conte seu
            problema, nós entendemos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <a
              key={a.title}
              href={a.href}
              className="group reveal flex items-center justify-between rounded-lg border border-[var(--border)] bg-white p-5 shadow-card transition-smooth hover:-translate-y-1 hover:border-[var(--brand-wine)]/30 hover:shadow-elegant"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded bg-[var(--brand-red)]/10 text-[var(--brand-red)]">
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="font-display font-semibold text-[var(--brand-dark)]">
                  {a.title}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[var(--brand-wine)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
