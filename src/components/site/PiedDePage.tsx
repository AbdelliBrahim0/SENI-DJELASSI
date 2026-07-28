import { ENTREPRISE, GARANTIES, METIERS, SLOGANS } from "@/lib/entreprise";

/** Pied de page HTML classique — crawl SEO local. */
export function PiedDePage() {
  return (
    <footer className="border-t border-border bg-background px-5 pb-32 pt-16 md:px-14 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl uppercase text-marbre">{ENTREPRISE.nom}</p>
          <p className="mono-plan mt-2">{ENTREPRISE.baseline}</p>
          <p className="mt-4 text-sm text-muted-foreground">{ENTREPRISE.activite}</p>
          <p className="mt-4 text-sm text-muted-foreground">{SLOGANS.satisfaction}</p>
        </div>

        <div>
          <h2 className="mono-plan !text-primary">Nos prestations</h2>
          <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
            {METIERS.map((m) => (
              <li key={m.id}>
                {m.nom} — {m.resume}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mono-plan !text-primary">Zone d'intervention</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Marseille · Toulon · Nice et alentours
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {ENTREPRISE.departements.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h2 className="mono-plan mt-6 !text-primary">Garanties</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {GARANTIES.map((g) => (
              <li key={g.code}>
                {g.titre} — {g.detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mono-plan !text-primary">Contact</h2>
          <a
            href={ENTREPRISE.telephoneLien}
            className="mt-4 block font-display text-3xl uppercase text-marbre hover:text-primary"
          >
            {ENTREPRISE.telephone}
          </a>
          <a
            href={`mailto:${ENTREPRISE.email}`}
            className="mt-2 block text-sm text-muted-foreground hover:text-primary"
          >
            {ENTREPRISE.email}
          </a>
          <ul className="mt-5 flex flex-wrap gap-3">
            {ENTREPRISE.reseaux.map((r) => (
              <li key={r.nom}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-plan rounded-full border border-border px-3 py-2 transition-colors hover:border-primary hover:!text-primary"
                >
                  {r.nom}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mono-plan mx-auto mt-12 max-w-7xl border-t border-border pt-6">
        © {new Date().getFullYear()} {ENTREPRISE.nom} — {ENTREPRISE.baseline} · Rénovation &amp; BTP
        à Marseille, Toulon, Nice · Devis gratuit
      </p>
      <p className="mx-auto mt-8 max-w-7xl text-center text-sm italic tracking-wide"
        style={{ fontFamily: "'Dancing Script', cursive", color: "#FFC107" }}>
        code by 3b2li || decode if you can.
      </p>
    </footer>
  );
}