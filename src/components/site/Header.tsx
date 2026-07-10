import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppLink } from "./WhatsAppLink";
import logoGc from "@/assets/logo-gc.png.asset.json";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "/bancario", label: "Bancário" },
  { href: "#processo", label: "Atendimento" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isSubpage = pathname.startsWith("/blog") || pathname.startsWith("/bancario");
  const solid = scrolled || isSubpage;
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) return isSubpage ? `/${href}` : href;
    return href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        solid ? "backdrop-blur-md bg-[oklch(0.13_0.005_0/0.85)] border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href={resolveHref("#inicio")} className="flex items-center gap-2 text-white">
          <img src={logoGc.url} alt="Logo Gabriel Callegaro" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Gabriel Callegaro
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={resolveHref(l.href)}
              className="text-sm text-white/80 hover:text-white transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--brand-wine)] hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded gradient-red px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-smooth"
        >
          Falar Agora
        </WhatsAppLink>

        <button
          aria-label="Abrir menu"
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--brand-darker)] border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center rounded gradient-red px-5 py-3 font-semibold text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}