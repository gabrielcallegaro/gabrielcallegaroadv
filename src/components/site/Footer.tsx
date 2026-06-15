import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import { LAWYER, WHATSAPP_URL } from "@/lib/contact";
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
    <footer className="bg-[var(--brand-darker)] border-t border-white/5 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 text-white">
            <img src={logoGc.url} alt="Logo Gabriel Callegaro" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold">Gabriel Callegaro</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            {LAWYER.name} — Advogado dedicado ao Direito do Trabalho no Rio
            Grande do Sul.
          </p>
          <p className="mt-3 text-sm text-[var(--brand-wine)] font-medium">{LAWYER.oab}</p>
        </div>

        <div>
          <h3 className="font-display text-white text-base font-semibold">Links Rápidos</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--brand-wine)] transition-smooth">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-white text-base font-semibold">Contato</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded gradient-red px-5 py-2.5 text-sm font-semibold text-white"
          >
            Falar no WhatsApp
          </a>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gabrielcallegaro.adv." },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Mail, label: "E-mail", href: "mailto:contato@example.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded border border-white/10 hover:border-[var(--brand-wine)] hover:text-white transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {LAWYER.name}. Todos os direitos reservados.</p>
          <p>{LAWYER.oab} — Site informativo, em conformidade com o Provimento 205/2021 da OAB.</p>
        </div>
      </div>
    </footer>
  );
}