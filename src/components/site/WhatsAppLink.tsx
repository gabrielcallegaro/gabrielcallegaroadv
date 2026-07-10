import { type AnchorHTMLAttributes, forwardRef } from "react";

export const WhatsAppLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "whatsapp_click" });
      }
      onClick?.(e);
    };
    return <a ref={ref} {...props} onClick={handleClick} />;
  }
);
WhatsAppLink.displayName = "WhatsAppLink";
