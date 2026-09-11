import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-justice.jpg";
import heroImgMobile from "@/assets/hero-justice-828.jpg";
import heroImgTablet from "@/assets/hero-justice-1280.jpg";
import { WHATSAPP_URL, LAWYER } from "@/lib/contact";
import { WhatsAppLink } from "./WhatsAppLink";
import { HeroStats } from "./HeroStats";


export function Hero() {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (data.country === "BR" && typeof data.city === "string" && data.city.trim()) {
          setCity(data.city);
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden bg-hero"
    >
      <img
        src={heroImg}
        srcSet={`${heroImgMobile} 828w, ${heroImgTablet} 1280w, ${heroImg} 1920w`}
        sizes="100vw"
        alt="Advogado trabalhista no Rio Grande do Sul — defesa dos direitos do trabalhador"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.11 0.005 0 / 0.92) 0%, oklch(0.13 0.005 0 / 0.75) 55%, oklch(0.18 0.06 27 / 0.55) 100%)",
        }}
      />

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-[var(--brand-wine)]" aria-hidden="true" />
              {city ? `Atendimento em ${city} e todo o RS` : `${LAWYER.area} — ${LAWYER.region}`}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Advogado Trabalhista no Rio Grande do Sul
              <span className="block bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
                Atendimento online e presencial.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Defesa dos direitos dos trabalhadores com atendimento humanizado,
              análise estratégica e comunicação direta — {city ? `de ${city}` : "do interior"}{" "}
              à capital, em todo o Rio Grande do Sul.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded gradient-red px-7 py-4 font-semibold text-white shadow-elegant transition-smooth hover:shadow-glow"
                aria-label="Falar com advogado trabalhista pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </WhatsAppLink>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
              >
                Agendar Consulta
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6">
              {[
                { n: "100%", l: "Atendimento Humanizado" },
                { n: "OAB/RS", l: "142.158" },
                { n: "24h", l: "Resposta Rápida" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-[var(--brand-wine)] pl-4">
                  <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HeroStats />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-white/40">
        Role para descobrir
      </div>
    </section>
  );
}
