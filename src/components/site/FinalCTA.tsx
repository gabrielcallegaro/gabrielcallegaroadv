import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppLink } from "./WhatsAppLink";

export function FinalCTA() {
  return (
    <section id="contato" className="py-24 bg-[var(--brand-darker)] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, oklch(0.5 0.2 27 / 0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center reveal">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--brand-wine)] font-semibold">
          Atendimento Imediato
        </span>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl text-white leading-[1.05] font-bold">
          Está com problemas <br />
          <span className="bg-gradient-to-r from-[var(--brand-wine)] to-white bg-clip-text text-transparent">
            trabalhistas?
          </span>
        </h2>
        <p className="mt-7 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
          Converse agora com um advogado especializado e receba uma análise
          inicial do seu caso.
        </p>

        <WhatsAppLink
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded gradient-red px-10 py-5 text-lg font-semibold text-white shadow-elegant hover:shadow-glow transition-smooth"
        >
          <MessageCircle className="h-6 w-6" />
          Falar no WhatsApp
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </WhatsAppLink>

        <div className="mt-8 text-sm text-white/50">
          Atendimento online e presencial — Rio Grande do Sul
        </div>
      </div>
    </section>
  );
}