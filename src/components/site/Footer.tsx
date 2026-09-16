import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";

import { LAWYER, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppLink } from "./WhatsAppLink";
import logoGc from "@/assets/logo-gc.png.asset.json";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-primary text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <img src={logoGc.url} alt="Logo Gabriel Callegaro" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold">Gabriel Callegaro</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            {LAWYER.name} — Advogado dedicado ao Direito do Trabalho no Rio
            Grande do Sul.
          </p>
          <p className="mt-3 text-sm text-primary-foreground font-medium">{LAWYER.oab}</p>
        </div>

        <div>
          <h3 className="font-display text-primary-foreground text-base font-semibold">Links Rápidos</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary-foreground transition-smooth">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-primary-foreground text-base font-semibold">Contato</h3>
          <WhatsAppLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card active:translate-y-0"
          >
            Falar no WhatsApp
          </WhatsAppLink>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gabrielcallegaro.adv" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Mail, label: "E-mail", href: "mailto:gabriel.callegaro1@gmail.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded border border-primary-foreground/25 hover:border-primary-foreground hover:text-primary-foreground transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {LAWYER.name}. Todos os direitos reservados.</p>
          <p>{LAWYER.oab} — Site informativo, em conformidade com o Provimento 205/2021 da OAB.</p>
        </div>
      </div>
    </footer>
  );
}