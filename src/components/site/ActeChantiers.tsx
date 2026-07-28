import { useState } from "react";
import { REALISATIONS } from "@/lib/entreprise";
import avantSdb from "@/assets/avant-salle-de-bain.jpg";
import apresSdb from "@/assets/apres-salle-de-bain.jpg";
import avantCuisine from "@/assets/avant-cuisine.jpg";
import apresCuisine from "@/assets/apres-cuisine.jpg";
import avantFacade from "@/assets/avant-facade.jpg";
import apresFacade from "@/assets/apres-facade.jpg";

const IMAGES: Record<string, { avant: string; apres: string }> = {
  sdb: { avant: avantSdb, apres: apresSdb },
  cuisine: { avant: avantCuisine, apres: apresCuisine },
  facade: { avant: avantFacade, apres: apresFacade },
};

/** Éclats de recomposition (grille irrégulière façon voronoï). */
const ECLATS = Array.from({ length: 24 }, (_, i) => {
  const col = i % 6;
  const ligne = Math.floor(i / 6);
  const decalage = (ligne % 2) * 3;
  return {
    clip: `polygon(${col * 16.7 - 1}% ${ligne * 25 - 1}%, ${col * 16.7 + 18}% ${ligne * 25 - 1 + decalage}%, ${col * 16.7 + 17}% ${ligne * 25 + 26}%, ${col * 16.7 - 2}% ${ligne * 25 + 25 + decalage}%)`,
    retard: (col * 0.9 + ligne * 1.3) / 10,
  };
});

function AvantApres({ id, titre }: { id: string; titre: string }) {
  const [valeur, setValeur] = useState(50);
  const img = IMAGES[id];
  const t = valeur / 100;

  return (
    <div className="group relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted">
        <img
          src={img.avant}
          alt={`Avant travaux — ${titre}`}
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {ECLATS.map((e, i) => {
          const avance = Math.min(1, Math.max(0, (t - e.retard) * 3.4));
          return (
            <img
              key={i}
              src={img.apres}
              alt=""
              aria-hidden
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath: e.clip,
                opacity: avance,
                transform: `translate3d(${(1 - avance) * -14}px, ${(1 - avance) * 10}px, 0) scale(${0.94 + avance * 0.06})`,
                transition: "opacity 220ms linear, transform 420ms var(--ressort)",
              }}
            />
          );
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-primary"
          style={{ left: `${valeur}%`, boxShadow: "var(--lueur-cuivre)" }}
        />
        <span className="mono-plan absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 backdrop-blur">
          Avant
        </span>
        <span className="mono-plan absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 !text-primary backdrop-blur">
          Après
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={valeur}
        aria-label={`Transition avant / après — ${titre}`}
        onChange={(e) => setValeur(Number(e.target.value))}
        className="mt-4 w-full accent-[oklch(0.72_0.132_42)]"
      />
    </div>
  );
}

/** ACTE 3 — Les Chantiers. Galerie cinétique avant / après. */
export function ActeChantiers() {
  const [filtre, setFiltre] = useState<string>("Toutes réalisations");
  const filtres = ["Toutes réalisations", ...new Set(REALISATIONS.map((r) => r.metier))];
  const visibles = REALISATIONS.filter(
    (r) => filtre === "Toutes réalisations" || r.metier === filtre,
  );

  return (
    <section id="realisations" className="relative bg-background py-24 md:py-32" aria-label="Nos réalisations">
      <div className="mx-auto max-w-7xl px-5 md:px-14">
        <h2 className="texte-grave mt-6 max-w-4xl text-[clamp(2.4rem,7vw,6rem)] font-black">
          La matière
          <br />
          se recompose
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {filtres.map((f) => (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              className={`mono-plan rounded-full border px-4 py-2 transition-colors duration-300 ${
                filtre === f
                  ? "border-primary bg-primary/15 !text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {visibles.map((r) => (
            <article key={r.id} className="animate-monter">
              <AvantApres id={r.id} titre={r.titre} />
              <h3 className="mt-5 font-display text-2xl uppercase text-marbre">{r.titre}</h3>
              <p className="mono-plan mt-2">
                {r.ville} · {r.metier} · {r.duree}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}