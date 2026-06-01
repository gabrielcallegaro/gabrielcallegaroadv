import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-4 text-white shadow-elegant transition-smooth hover:scale-105"
      style={{ background: "oklch(0.65 0.18 145)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </a>
  );
}