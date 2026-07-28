import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight, X, ChevronLeft, ChevronRight, ExternalLink
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { PiedDePage } from "@/components/site/PiedDePage";
import { ENTREPRISE } from "@/lib/entreprise";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Nos Réalisations — SENI DJELASSI" },
      { name: "description", content: "Découvrez nos projets de rénovation et BTP à Marseille, Toulon et Nice : salles de bain, cuisines, façades et plus." },
    ],
  }),
  component: PageRealisations,
});

// ─── Galerie étendue avec placeholders ───

type Projet = {
  slug: string;
  titre: string;
  ville: string;
  metier: string;
  duree: string;
  description: string;
  surface: string;
  bg: string;
};

const PROJETS: Projet[] = [
  { slug: "sdb", titre: "Salle de bain rénovée intégralement", ville: "Marseille", metier: "Cuisine & Salle de bain", duree: "3 semaines", description: "Rénovation complète d'une salle de bain de 9 m² avec douche à l'italienne, vasque design et carrelage effet marbre. Plomberie, électricité et finitions haut de gamme.", surface: "9 m²", bg: "linear-gradient(135deg, oklch(0.55 0.06 270) 0%, oklch(0.35 0.08 280) 100%)" },
  { slug: "cuisine", titre: "Cuisine complète — plomberie & électricité", ville: "Toulon", metier: "Rénovation complète", duree: "4 semaines", description: "Cuisine entièrement repensée : îlot central, plans de travail quartz, électroménagers encastrés. Réseaux d'eau et d'électricité repris à neuf.", surface: "14 m²", bg: "linear-gradient(135deg, oklch(0.65 0.1 30) 0%, oklch(0.4 0.12 40) 100%)" },
  { slug: "facade", titre: "Ravalement et peinture de façade", ville: "Nice", metier: "Peinture", duree: "2 semaines", description: "Nettoyage, réparation des fissures, sous-couche et peinture de façade sur 120 m². Finition satinée teinte personnalisée.", surface: "120 m²", bg: "linear-gradient(135deg, oklch(0.6 0.05 200) 0%, oklch(0.35 0.07 210) 100%)" },
  { slug: "terrasse", titre: "Terrasse en carrelage extérieur", ville: "Marseille", metier: "Carrelage & Faïence", duree: "1 semaine", description: "Pose de carrelage extérieur antidérapant sur terrasse de 25 m². Joints larges, pente d'écoulement et finitions soignées.", surface: "25 m²", bg: "linear-gradient(135deg, oklch(0.58 0.08 80) 0%, oklch(0.38 0.1 90) 100%)" },
  { slug: "electricite", titre: "Mise aux normes électrique complète", ville: "Toulon", metier: "Électricité", duree: "5 jours", description: "Remplacement du tableau électrique, mise aux normes NF C 15-100, câblage complet d'un appartement de 70 m².", surface: "70 m²", bg: "linear-gradient(135deg, oklch(0.5 0.07 160) 0%, oklch(0.3 0.09 170) 100%)" },
  { slug: "parquet", titre: "Parquet massif pose sur mesure", ville: "Nice", metier: "Sols souples & Parquet", duree: "6 jours", description: "Pose de parquet massif en chêne en chevron sur 30 m². Ragréage, sous-couche phonique et plinthes intégrées.", surface: "30 m²", bg: "linear-gradient(135deg, oklch(0.55 0.06 50) 0%, oklch(0.35 0.08 60) 100%)" },
  { slug: "plomberie", titre: "Rénovation plomberie complète", ville: "Marseille", metier: "Plomberie", duree: "2 semaines", description: "Reprise intégrale du réseau d'alimentation et d'évacuation. Pose d'un chauffe-eau thermodynamique, sanitaires suspendus.", surface: "55 m²", bg: "linear-gradient(135deg, oklch(0.6 0.09 220) 0%, oklch(0.35 0.1 230) 100%)" },
  { slug: "maconnerie", titre: "Ouverture mur porteur + cloison", ville: "Aix-en-Provence", metier: "Maçonnerie", duree: "10 jours", description: "Création d'une ouverture de 3 mètres dans un mur porteur, pose d'un IPN, cloisons en brique plâtrière et enduits.", surface: "35 m²", bg: "linear-gradient(135deg, oklch(0.52 0.03 60) 0%, oklch(0.3 0.04 70) 100%)" },
];

const METIERS_UNIQUES = [...new Set(PROJETS.map((p) => p.metier))];
const FILTRES = [{ nom: "Tous", valeur: "" }, ...METIERS_UNIQUES.map((m) => ({ nom: m, valeur: m }))];

// ─── Compteur animé ───

function Compteur({ valeur, suffixe = "", label }: { valeur: number; suffixe?: string; label: string }) {
  const [c, setC] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const aCompte = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !aCompte.current) {
          aCompte.current = true;
          const dur = 2000;
          const debut = performance.now();
          const anim = (t: number) => {
            const p = Math.min(1, (t - debut) / dur);
            setC(Math.floor(p * valeur));
            if (p < 1) requestAnimationFrame(anim);
          };
          requestAnimationFrame(anim);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [valeur]);

  return (
    <div ref={ref} className="text-center">
      <span className="texte-grave block text-5xl font-black md:text-7xl">{c}{suffixe}</span>
      <span className="mono-plan mt-2 block">{label}</span>
    </div>
  );
}

// ─── Lightbox ───

function Lightbox({ projet, onFermer, precedent, suivant }: {
  projet: Projet; onFermer: () => void; precedent: () => void; suivant: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
      if (e.key === "ArrowLeft") precedent();
      if (e.key === "ArrowRight") suivant();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onFermer, precedent, suivant]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-10"
      onClick={onFermer}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] overflow-hidden" style={{ background: projet.bg }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 rounded-full border-2 border-white/20 flex items-center justify-center">
                <ArrowUpRight className="h-10 w-10 text-white/40" />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-black text-white md:text-3xl">{projet.titre}</h3>
            <div className="mono-plan mt-2 flex flex-wrap gap-3 text-sm text-white/70">
              <span>{projet.ville}</span>
              <span>·</span>
              <span>{projet.metier}</span>
              <span>·</span>
              <span>{projet.duree}</span>
            </div>
          </motion.div>
        </div>
        <div className="bg-background p-6 md:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{projet.description}</p>
          <div className="mono-plan mt-4 flex gap-4 text-xs">
            <span className="rounded-sm border border-border px-3 py-1">{projet.surface}</span>
            <span className="rounded-sm border border-border px-3 py-1">{projet.ville}</span>
          </div>
        </div>
        <button onClick={onFermer} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur text-white transition-colors hover:bg-background/40">
          <X className="h-5 w-5" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); precedent(); }} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur text-white transition-colors hover:bg-background/40">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); suivant(); }} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur text-white transition-colors hover:bg-background/40">
          <ChevronRight className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Avant / Après avec placeholders ───

function AvantApres({ fond }: { fond: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="group relative w-full select-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/50">
        <div className="absolute inset-0" style={{ background: fond }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, oklch(0 0 0 / 0.03) 20px, oklch(0 0 0 / 0.03) 40px)`,
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="mono-plan rounded-sm bg-background/60 px-4 py-2 text-xs backdrop-blur">Image avant</span>
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <div className="absolute inset-0" style={{ background: fond, filter: "saturate(1.2) brightness(1.1)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono-plan rounded-sm bg-background/60 px-4 py-2 !text-primary text-xs backdrop-blur">Image après</span>
          </div>
        </div>
        <span className="mono-plan absolute bottom-3 left-3 rounded-sm bg-background/60 px-2 py-1 text-[0.5rem] backdrop-blur">Avant</span>
        <span className="mono-plan absolute bottom-3 right-3 rounded-sm bg-background/60 px-2 py-1 !text-primary text-[0.5rem] backdrop-blur">Après</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-3 w-full accent-[oklch(0.72_0.132_42)]"
      />
    </div>
  );
}

// ─── Page ───

function PageRealisations() {
  const [filtre, setFiltre] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibles = PROJETS.filter((p) => !filtre || p.metier === filtre);

  const ouvrir = useCallback((i: number) => setLightboxIndex(i), []);
  const fermer = useCallback(() => setLightboxIndex(null), []);
  const precedent = useCallback(() => setLightboxIndex((p) => p !== null ? (p - 1 + visibles.length) % visibles.length : null), [visibles.length]);
  const suivant = useCallback(() => setLightboxIndex((p) => p !== null ? (p + 1) % visibles.length : null), [visibles.length]);

  return (
    <main className="bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden pt-28 md:min-h-[90dvh] md:pt-36">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(60% 55% at 50% 40%, oklch(0.72 0.132 42 / 0.08) 0%, transparent 70%)",
        }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
                className="absolute h-px w-full"
                style={{
                  top: `${15 + i * 14}%`,
                  background: `linear-gradient(90deg, transparent, oklch(0.72 0.132 42 / 0.3), transparent)`,
                }}
              />
            ))}
          </div>
        </motion.div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-plan !text-primary"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="texte-grave mt-4 text-[clamp(3.2rem,12vw,10rem)] font-black leading-[0.85] tracking-tight"
          >
            Nos
            <br />
            Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground md:text-base"
          >
            Chaque projet est une histoire. De la première esquisse à la livraison, découvrez le savoir-faire SENI DJELASSI à travers nos chantiers.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="mono-plan text-xs text-muted-foreground">Découvrir</span>
            <div className="h-6 w-px bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Chiffres ── */}
      <section className="border-t border-border px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <Compteur valeur={120} suffixe="+" label="Projets réalisés" />
            <Compteur valeur={95} suffixe="%" label="Clients satisfaits" />
            <Compteur valeur={9} label="Métiers maîtrisés" />
            <Compteur valeur={12} suffixe="+" label="Ans d'expérience" />
          </div>
        </div>
      </section>

      {/* ── Galerie ── */}
      <section className="px-5 pb-24 md:px-14 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="texte-grave text-[clamp(2rem,5vw,4rem)] font-black"
            >
              Projets récents
            </motion.h2>
          </div>

          {/* Filtres */}
          <div className="mb-10 flex flex-wrap gap-2">
            {FILTRES.map((f) => (
              <motion.button
                key={f.valeur}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFiltre(f.valeur)}
                className={`mono-plan rounded-full border px-4 py-2 text-xs transition-colors duration-300 ${
                  filtre === f.valeur
                    ? "border-primary bg-primary/15 !text-primary"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {f.nom}
              </motion.button>
            ))}
          </div>

          {/* Grille */}
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibles.map((projet, i) => (
                <motion.div
                  key={projet.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`group cursor-pointer overflow-hidden rounded-sm border border-border/40 bg-card/20 ${
                    i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                  onClick={() => ouvrir(i)}
                >
                  <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] sm:aspect-[4/3]" : "aspect-[4/3]"}`}>
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: projet.bg }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, oklch(0 0 0 / 0.05) 15px, oklch(0 0 0 / 0.05) 30px)`,
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 text-white/80 backdrop-blur"
                      >
                        <ArrowUpRight className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="font-display text-base font-bold text-white md:text-lg">{projet.titre}</h3>
                    </div>
                    <div className="mono-plan absolute left-3 top-3 rounded-full bg-background/70 px-2 py-1 text-[0.5rem] backdrop-blur">
                      {projet.duree}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="mono-plan text-[0.55rem] text-muted-foreground">{projet.ville}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="mono-plan text-[0.55rem] text-muted-foreground">{projet.metier}</span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{projet.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section className="border-t border-border px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mono-plan !text-primary"
          >
            Avant / Après
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="texte-grave mt-2 text-[clamp(2rem,5vw,4rem)] font-black"
          >
            La transformation
            <br />
            en un geste
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PROJETS.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AvantApres fond={p.bg} />
                <p className="mt-3 font-display text-base font-bold text-marbre">{p.titre}</p>
                <p className="mono-plan mt-1 text-xs text-muted-foreground">{p.ville} · {p.duree}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mono-plan !text-primary"
          >
            Prêt à construire ?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="texte-grave mt-3 text-[clamp(2.4rem,6vw,5rem)] font-black"
          >
            Vous avez un projet
            <br />
            en tête ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-sm text-muted-foreground"
          >
            De la simple rénovation au chantier clé en main, nous sommes à vos côtés. Demandez votre devis gratuit sans engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/demande-devis"
              className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 !text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Demander un devis gratuit
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+33745576414"
              className="mono-plan inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm transition-colors hover:border-primary/50 hover:!text-primary"
            >
              {ENTREPRISE.telephone}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <PiedDePage />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            projet={visibles[lightboxIndex]}
            onFermer={fermer}
            precedent={precedent}
            suivant={suivant}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

