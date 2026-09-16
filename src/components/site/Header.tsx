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
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-smooth ${
        solid ? "border-border bg-background/95 shadow-sm backdrop-blur-md" : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href={resolveHref("#inicio")} className="flex items-center gap-2 text-foreground">
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
              className="text-sm text-muted-foreground hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full gradient-red px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant active:translate-y-0"
        >
          Falar Agora
        </WhatsAppLink>

        <button
          aria-label="Abrir menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background shadow-card">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <WhatsAppLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full gradient-red px-6 py-3 text-center font-semibold text-primary-foreground shadow-sm transition-all duration-300 active:scale-[0.98]"
            >
              Falar no WhatsApp
            </WhatsAppLink>
          </nav>
        </div>
      )}
    </header>
  );
}