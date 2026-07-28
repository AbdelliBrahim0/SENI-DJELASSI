import { useEffect, useState } from "react";
import { ENTREPRISE } from "@/lib/entreprise";
import { IconeTelephone } from "./IconeTelephone";

/** Couche de conversion permanente : fil à plomb + WhatsApp + téléphone. */
export function CoucheConversion() {
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    const maj = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgression(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    return () => {
      window.removeEventListener("scroll", maj);
      window.removeEventListener("resize", maj);
    };
  }, []);

  return (
    <>
      {/* Fil à plomb : progression du scroll + accès devis */}
      <a
        href="#devis"
        aria-label="Devis gratuit — progression de la visite"
        className="fixed left-6 top-0 z-50 hidden h-screen w-10 flex-col items-center lg:flex"
      >
        <span className="mt-0 h-[calc(100vh-120px)] w-px bg-border" />
        <span
          className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-300 ease-out"
          style={{ top: `calc(${progression * 84}vh + 24px)` }}
        >
          <span
            className="block h-3 w-3 rotate-45 bg-secondary"
            style={{ boxShadow: "var(--lueur-cuivre)" }}
          />
          <span className="mt-2 block h-6 w-[10px] -translate-x-[3.5px] rounded-b-full bg-gradient-to-b from-secondary to-accent" />
        </span>
        <span className="mono-plan absolute bottom-6 left-1/2 -translate-x-1/2 rotate-180 [writing-mode:vertical-rl] transition-colors hover:!text-primary">
          Devis gratuit · {String(Math.round(progression * 100)).padStart(3, "0")}%
        </span>
      </a>



      {/* WhatsApp flottant */}
      <a
        href={ENTREPRISE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="animate-pulse-cuivre fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 [transition-timing-function:var(--ressort)] hover:scale-110 md:bottom-6 md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.25.69-1.46 1.35-2 1.4-.53.05-1.03.24-3.47-.72-2.92-1.15-4.77-4.13-4.91-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.25.6.84 2.07.91 2.22.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.29.37-.24.63-.14.25.09 1.72.81 2.01.96.29.14.48.21.55.33.07.12.07.69-.18 1.36Z" />
        </svg>
      </a>
    </>
  );
}