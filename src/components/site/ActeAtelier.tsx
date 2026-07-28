import { useState } from "react";
import { SLOGANS } from "@/lib/entreprise";
import chantier from "@/assets/chantier-artisan.jpg";
import plan from "@/assets/apres-facade.jpg";
import outils from "@/assets/apres-cuisine.jpg";

/** ACTE 5 — Le chantier en direct. Diaphragme : tirage du point. */
export function ActeAtelier() {
  const [focus, setFocus] = useState(50);
  const f = focus / 100;

  const plans = [
    { src: plan, alt: "Plan et devis en arrière-plan du chantier", cible: 0.0, echelle: 1.12 },
    { src: outils, alt: "Matériaux et finitions préparés sur le chantier", cible: 0.5, echelle: 1.06 },
    { src: chantier, alt: "Artisan Seni Djelassi au travail sur un chantier", cible: 1, echelle: 1 },
  ];

  return (
    <section id="methode" className="relative bg-background py-24 md:py-32" aria-label="Notre méthode">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted">
          {plans.map((p, i) => {
            const net = 1 - Math.min(1, Math.abs(f - p.cible) * 2.2);
            return (
              <img
                key={i}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  filter: `blur(${(1 - net) * 14}px) brightness(${0.45 + net * 0.65})`,
                  transform: `scale(${p.echelle + (1 - net) * 0.04})`,
                  opacity: 0.35 + net * 0.65,
                  transition: "filter 260ms var(--ressort), opacity 260ms linear",
                }}
              />
            );
          })}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 50%, transparent 35%, oklch(0.09 0.005 62 / 85%) 100%)",
            }}
          />
          <span className="mono-plan absolute bottom-4 left-4">
            f/{(1.4 + f * 8).toFixed(1)} — tirage du point
          </span>
        </div>

        <div>
          <h2 className="texte-grave mt-6 text-[clamp(2.2rem,5.6vw,4.6rem)] font-black">
            Un seul
            <br />
            interlocuteur
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{SLOGANS.interlocuteur}</p>

          <label className="mono-plan mt-10 block">
            Profondeur de champ
            <input
              type="range"
              min={0}
              max={100}
              value={focus}
              onChange={(e) => setFocus(Number(e.target.value))}
              className="mt-3 w-full accent-[oklch(0.72_0.132_42)]"
            />
          </label>

          <ol className="mt-10 space-y-4 border-t border-border pt-8">
            {[
              ["01", "Conception", "Visite, relevé et devis gratuit détaillé."],
              ["02", "Réalisation", "Coordination de tous les corps d'état sur le chantier."],
              ["03", "Réception", "Contrôle des finitions et garanties assurées."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-5">
                <span className="mono-plan !text-primary">{n}</span>
                <span>
                  <span className="block font-display text-2xl uppercase text-marbre">{t}</span>
                  <span className="block text-sm text-muted-foreground">{d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}