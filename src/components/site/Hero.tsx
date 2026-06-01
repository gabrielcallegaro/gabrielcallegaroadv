import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-justice.jpg";
import { WHATSAPP_URL, LAWYER } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero"
    >
      <img
        src={heroImg}
        alt="Estátua da Justiça simbolizando a defesa dos direitos trabalhistas"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.11 0.005 0 / 0.92) 0%, oklch(0.13 0.005 0 / 0.75) 55%, oklch(0.18 0.06 27 / 0.55) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-wine)] animate-pulse" />
            {LAWYER.area} — {LAWYER.region}
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Seus Direitos Trabalhistas
            <span className="block bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
              Merecem Defesa Especializada.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
            Atuação estratégica e personalizada para trabalhadores que buscam
            justiça e a correta reparação de seus direitos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded gradient-red px-7 py-4 font-semibold text-white shadow-elegant transition-smooth hover:shadow-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
            >
              Agendar Consulta
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "100%", l: "Atendimento Humanizado" },
              { n: "OAB/RS", l: "142.158" },
              { n: "24h", l: "Resposta Rápida" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-[var(--brand-wine)] pl-4">
                <div className="font-display text-2xl text-white font-bold">{s.n}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest">
        Role para descobrir
      </div>
    </section>
  );
}