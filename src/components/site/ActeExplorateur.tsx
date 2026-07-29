import { useEffect, useRef, useState } from "react";
import type { LucideProps } from "lucide-react";
import {
  Hammer,
  Zap,
  Droplets,
  RefreshCcw,
  Paintbrush2,
  Grid3x3,
  Layers,
  ChefHat,
  Wrench,
  X,
} from "lucide-react";
import { BoutonMagnetique } from "./BoutonMagnetique";
import { METIERS } from "@/lib/entreprise";

/* ── Icône par métier ─────────────────────────────────────── */
const ICONES: Record<string, React.FC<LucideProps>> = {
  maconnerie: Hammer,
  electricite: Zap,
  plomberie: Droplets,
  "renovation-complete": RefreshCcw,
  peinture: Paintbrush2,
  carrelage: Grid3x3,
  sols: Layers,
  "cuisine-sdb": ChefHat,
  depannage: Wrench,
};

/* ── Couleur par couronne ──────────────────────────────────── */
const COULEUR_COURONNE: Record<string, string> = {
  "gros-oeuvre": "oklch(0.72 0.132 42)",
  finitions: "oklch(0.82 0.09 62)",
};

/* ── Popup Fiche technique ────────────────────────────────── */
function FichePopup({
  metier,
  onClose,
}: {
  metier: (typeof METIERS)[number];
  onClose: () => void;
}) {
  const couleur = COULEUR_COURONNE[metier.couronne];
  const Icone = ICONES[metier.id] ?? Wrench;

  /* Fermeture Échap */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Bloquer le scroll body */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "oklch(0 0 0 / 0.72)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Fiche technique — ${metier.nom}`}
    >
      {/* Panneau */}
      <div
        className="relative w-full max-w-lg animate-monter rounded-sm border border-border bg-card/95 p-7 shadow-2xl backdrop-blur-md"
        style={{ boxShadow: `0 0 0 1px var(--color-border), 0 40px 80px -20px var(--shadow-profond)` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* En-tête avec icône */}
        <div className="flex items-center gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
            style={{
              borderColor: couleur,
              background: `linear-gradient(135deg, ${couleur}33, ${couleur}11)`,
              boxShadow: `0 0 16px ${couleur}44`,
            }}
          >
            <Icone style={{ width: "52%", height: "52%", color: couleur }} />
          </span>
          <div>
            <span className="mono-plan block !text-primary">Fiche technique</span>
            <h3 className="mt-1 font-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase text-marbre leading-none">
              {metier.nom}
            </h3>
          </div>
        </div>

        <p className="mono-plan mt-4">{metier.resume}</p>

        {/* Liseré couleur couronne */}
        <div
          className="mt-5 h-px w-full"
          style={{ background: `linear-gradient(90deg, ${couleur}, transparent)` }}
        />

        <p className="mt-5 text-muted-foreground leading-relaxed">{metier.description}</p>

        <ul className="mt-6 space-y-2 border-t border-border pt-5">
          {metier.fiche.map((f) => (
            <li key={f} className="mono-plan flex items-center gap-3 !text-foreground/80">
              <span className="h-px w-6 shrink-0" style={{ background: couleur }} aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <BoutonMagnetique href="#devis">Devis pour {metier.nom}</BoutonMagnetique>
        </div>
      </div>
    </div>
  );
}

/** ACTE 2 — L'Explorateur de corps de métier (anneau rotatif + popup fiche). */
export function ActeExplorateur() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [survole, setSurvole] = useState<string | null>(null);
  const [selection, setSelection] = useState<string | null>(null);

  const actif = METIERS.find((m) => m.id === selection) ?? null;

  /* ── Rotation pilotée par le scroll ─────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      setRotation(progress * 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, [rotation]);

  const n = METIERS.length;
  const RAYON = 36;

  const ouvrirFiche = (id: string) => setSelection(id);
  const fermerFiche = () => setSelection(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-background py-24 md:py-32"
      aria-label="Nos corps d'état"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <h2 className="texte-grave mt-6 max-w-4xl text-[clamp(2.4rem,7vw,6rem)] font-black">
          Neuf métiers,
          <br />
          un seul interlocuteur
        </h2>
        <p className="mono-plan mt-6">
          Cliquez une icône · Cuivre : gros œuvre · Or : finitions
        </p>

        {/* ── Anneau rotatif — pleine largeur ─────────────────── */}
        <div className="mt-14 flex items-center justify-center py-8">
          <div className="relative aspect-square w-full max-w-[560px]">

            {/* Fond béton */}
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full border border-border"
              style={{
                background:
                  "radial-gradient(circle at 38% 35%, color-mix(in oklch, var(--color-card) 80%, var(--color-primary) 6%) 0%, var(--color-card) 100%)",
                boxShadow:
                  "0 0 0 1px var(--color-border), inset 0 0 40px color-mix(in oklch, var(--color-foreground) 6%, transparent)",
              }}
            />

            {/* Cercle décoratif intérieur */}
            <div
              aria-hidden
              className="absolute inset-[18%] rounded-full border border-primary/15"
            />

            {/* Centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
              <span
                className="font-display text-[clamp(2rem,6vw,3.2rem)] font-black leading-none"
                style={{ color: "var(--color-primary)" }}
              >
                {survole
                  ? String(METIERS.findIndex((m) => m.id === survole) + 1).padStart(2, "0")
                  : "09"}
              </span>
              <span className="mono-plan mt-1 !text-muted-foreground text-[10px] uppercase tracking-widest">
                {survole
                  ? METIERS.find((m) => m.id === survole)?.couronne
                  : "métiers"}
              </span>
            </div>

            {/* Anneau tournant */}
            <div
              ref={ringRef}
              className="absolute inset-0"
              style={{ transition: "transform 200ms cubic-bezier(0.25,0.46,0.45,0.94)" }}
            >
              {METIERS.map((m, i) => {
                const angleRad = (i / n) * Math.PI * 2 - Math.PI / 2;
                const cx = 50 + RAYON * Math.cos(angleRad);
                const cy = 50 + RAYON * Math.sin(angleRad);
                const isHovered = m.id === survole;
                const Icone = ICONES[m.id] ?? Wrench;
                const couleur = COULEUR_COURONNE[m.couronne];
                const nomCourt = m.nom.split(" ")[0];

                return (
                  <button
                    key={m.id}
                    aria-label={`Voir la fiche — ${m.nom}`}
                    onClick={() => ouvrirFiche(m.id)}
                    onMouseEnter={() => setSurvole(m.id)}
                    onMouseLeave={() => setSurvole(null)}
                    className="absolute flex flex-col items-center focus-visible:outline-none"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      width: "clamp(72px, 15%, 96px)",
                      transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                      transition: "transform 200ms cubic-bezier(0.25,0.46,0.45,0.94)",
                      zIndex: isHovered ? 20 : 10,
                    }}
                  >
                    {/* Halo hover */}
                    {isHovered && (
                      <span
                        aria-hidden
                        className="absolute top-0 left-0 right-0 rounded-full animate-ping"
                        style={{
                          height: "clamp(72px, 15%, 96px)",
                          background: `${couleur}22`,
                        }}
                      />
                    )}

                    {/* Pastille icône */}
                    <span
                      className="relative flex w-full items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        height: "clamp(72px, 15%, 96px)",
                        background: isHovered
                          ? `linear-gradient(135deg, ${couleur}33, ${couleur}11)`
                          : "color-mix(in oklch, var(--color-card) 90%, var(--color-foreground) 10%)",
                        borderColor: isHovered ? couleur : "var(--color-border)",
                        boxShadow: isHovered ? `0 0 20px ${couleur}66` : "none",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                      }}
                    >
                        <Icone
                          style={{
                            width: "52%",
                            height: "52%",
                            color: isHovered ? couleur : "color-mix(in oklch, var(--color-primary) 70%, var(--color-foreground) 30%)",
                            transition: "color 300ms",
                          }}
                        />
                    </span>

                    {/* Légende */}
                    <span
                      className="mt-2 block text-center leading-tight"
                      style={{
                        fontSize: "clamp(11px, 2.4vw, 14px)",
                        fontWeight: 600,
                        color: isHovered ? couleur : "var(--color-foreground)",
                        fontFamily: "var(--font-mono, monospace)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        transition: "color 300ms",
                      }}
                    >
                      {nomCourt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Lignes de guidage SVG */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-primary)" strokeWidth="0.3" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="var(--color-primary)" strokeWidth="0.2" strokeDasharray="1 6" />
            </svg>

            <p className="mono-plan pointer-events-none absolute -bottom-8 left-0 right-0 text-center text-[11px]">
              Scrollez pour faire pivoter · Cliquez pour la fiche
            </p>
          </div>
        </div>

        {/* ── Liste sémantique ────────────────────────────────── */}
        <ul className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {METIERS.map((m) => {
            const Icone = ICONES[m.id] ?? Wrench;
            const couleur = COULEUR_COURONNE[m.couronne];
            return (
              <li
                key={m.id}
                className="group bg-card/60 p-5 transition-colors duration-300 hover:bg-card cursor-pointer"
                onClick={() => ouvrirFiche(m.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary/50"
                    style={{ color: couleur }}
                  >
                    <Icone className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-xl uppercase text-marbre">{m.nom}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground pl-11">{m.resume}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Popup Fiche technique ───────────────────────────── */}
      {actif && <FichePopup metier={actif} onClose={fermerFiche} />}
    </section>
  );
}
