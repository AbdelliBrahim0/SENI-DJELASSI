import { useState, useEffect, useRef } from "react";
import { ENTREPRISE } from "@/lib/entreprise";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import tiktokIcon from "@/assets/icons/tiktok.jpg";
import gmailIcon from "@/assets/icons/gmail.png";

const LIENS = [
  { nom: "Facebook", url: "https://www.facebook.com", couleur: "#1877F2", src: facebookIcon },
  { nom: "Instagram", url: "https://www.instagram.com", couleur: "#E4405F", src: instagramIcon },
  { nom: "TikTok", url: "https://www.tiktok.com", couleur: "#000000", src: tiktokIcon },
  { nom: "Email", url: `mailto:${ENTREPRISE.email}`, couleur: "oklch(0.72 0.132 42)", src: gmailIcon },
];

export function LiensSociauxFlottants() {
  const refHero = useRef<HTMLElement | null>(null);
  const refFondation = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    refHero.current = document.getElementById("carriere");
    refFondation.current = document.getElementById("manifeste");
    const maj = () => {
      setScrollY(window.scrollY);
      setVh(window.innerHeight);
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    return () => window.removeEventListener("scroll", maj);
  }, []);

  // Apparition quand la phrase "Zone d'intervention" atteint le milieu de l'écran
  const hauteurHero = refHero.current?.getBoundingClientRect().height ?? vh;
  const debut = Math.max(0, hauteurHero - vh * 0.5);
  const progressionApparition = Math.min(1, Math.max(0, (scrollY - debut) / (vh * 0.15)));

  // Disparition quand ActeFondation est suffisamment visible
  const debutDisparition = refFondation.current
    ? refFondation.current.getBoundingClientRect().top + scrollY
    : debut + vh;
  const progressionDisparition = Math.min(1, Math.max(0, (scrollY - debutDisparition) / (vh * 0.2)));

  const visible = progressionApparition > 0 && progressionDisparition < 1;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pointer-events-auto">
        {LIENS.map((lien, i) => {
          const retard = i * 0.025;
          const apparu = Math.min(1, Math.max(0, (progressionApparition - retard) / (1 - retard)));
          const cache = Math.min(1, Math.max(0, progressionDisparition * 2 - i * 0.15));
          const opacite = apparu * (1 - cache);
          return (
            <a
              key={lien.nom}
              href={lien.url}
              target={lien.nom !== "Email" ? "_blank" : undefined}
              rel={lien.nom !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={lien.nom}
              className="group relative flex flex-col items-center"
              style={{
                opacity: opacite,
                transform: `translateY(${(1 - apparu) * 30}px) scale(${0.5 + apparu * 0.5})`,
                transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-white/30 md:h-20 md:w-20 overflow-hidden"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${lien.couleur}40, 0 0 60px ${lien.couleur}20`;
                  e.currentTarget.style.borderColor = `${lien.couleur}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.15)";
                }}
              >
                <img src={lien.src} alt={lien.nom} className="h-7 w-7 md:h-9 md:w-9 object-contain" />
              </span>
              <span
                className="mono-plan mt-2.5 text-[0.55rem] text-white/40 transition-all duration-300 group-hover:text-white/80 md:text-[0.6rem]"
                style={{
                  opacity: Math.min(1, opacite * 2),
                  transform: `translateY(${(1 - Math.min(1, opacite * 2)) * 6}px)`,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                {lien.nom}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
