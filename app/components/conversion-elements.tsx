"use client";

import { useEffect } from "react";

type WhatsAppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
};

export function WhatsAppLink({ location, onClick, ...props }: WhatsAppLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_click",
          button_location: location,
          link_url: props.href,
        });
        onClick?.(event);
      }}
    />
  );
}

export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("animate-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 text-white/30 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      Voltar ao topo ↑
    </button>
  );
}
