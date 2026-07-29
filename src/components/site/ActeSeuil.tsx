import { useState } from "react";
import { ENTREPRISE, METIERS, SLOGANS } from "@/lib/entreprise";
import maison from "@/assets/maison-nuit.jpg";

/** ACTE 6 — Le Seuil. La porte s'ouvre sur le contact. */
export function ActeSeuil() {
  const [ouverte, setOuverte] = useState(false);
  const [envoye, setEnvoye] = useState(false);

  return (
    <section id="devis" className="relative overflow-hidden py-24 md:py-32" aria-label="Contact et devis gratuit">
      <img
        src={maison}
        alt="Maison rénovée éclairée de nuit"
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, color-mix(in oklch, var(--color-background) 70%, transparent) 40%, var(--color-background) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-14">
        <h2 className="texte-grave mt-6 max-w-4xl text-[clamp(2.4rem,7vw,6rem)] font-black">
          Poussez
          <br />
          la porte
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{SLOGANS.principal}</p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Porte 3D */}
          <div
            className="relative min-h-[320px] rounded-sm border border-border bg-card/60 p-6 [perspective:1400px]"
            onMouseEnter={() => setOuverte(true)}
            onMouseLeave={() => setOuverte(false)}
            onClick={() => setOuverte((o) => !o)}
          >
            <div className="absolute inset-6 flex flex-col justify-end gap-2 rounded-sm border border-primary/30 bg-background/70 p-6 pl-16">
              <span className="mono-plan !text-primary">Entrez</span>
              <a
                href={ENTREPRISE.telephoneLien}
                className="font-display text-3xl uppercase text-marbre transition-colors hover:text-primary"
              >
                {ENTREPRISE.telephone}
              </a>
              <a
                href={`mailto:${ENTREPRISE.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {ENTREPRISE.email}
              </a>
              <a
                href={ENTREPRISE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-plan mt-3 w-fit rounded-full bg-primary px-4 py-2 !text-primary-foreground"
              >
                WhatsApp direct
              </a>
              <p className="mono-plan mt-4">
                Marseille · Toulon · Nice — départements 13, 83, 06
              </p>
            </div>
            <div
              aria-hidden
              className="absolute inset-6 origin-left rounded-sm border border-border transition-transform duration-[1200ms] [transform-style:preserve-3d] [transition-timing-function:var(--ressort)]"
              style={{
                transform: `rotateY(${ouverte ? -78 : 0}deg)`,
                background:
                  "linear-gradient(115deg, color-mix(in oklch, var(--color-card) 80%, var(--color-primary) 20%) 0%, var(--color-card) 60%, color-mix(in oklch, var(--color-card) 80%, var(--color-foreground) 20%) 100%)",
                boxShadow: "var(--shadow-profond)",
              }}
            >
              <span className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-secondary" />
              <span className="mono-plan absolute bottom-5 left-5">Survolez pour ouvrir</span>
            </div>
          </div>

          {/* Formulaire */}
          <form
            className="grid gap-4 rounded-sm border border-border bg-card/70 p-7 backdrop-blur sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setEnvoye(true);
            }}
          >
            <label className="mono-plan grid gap-2 sm:col-span-1">
              Nom
              <input
                required
                name="nom"
                className="rounded-sm border border-input bg-background/70 px-3 py-3 font-sans text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="mono-plan grid gap-2">
              Téléphone
              <input
                required
                type="tel"
                name="telephone"
                className="rounded-sm border border-input bg-background/70 px-3 py-3 font-sans text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="mono-plan grid gap-2">
              Ville
              <input
                required
                name="ville"
                placeholder="Marseille, Toulon, Nice…"
                className="rounded-sm border border-input bg-background/70 px-3 py-3 font-sans text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="mono-plan grid gap-2">
              Type de travaux
              <select
                name="travaux"
                className="rounded-sm border border-input bg-background/70 px-3 py-3 font-sans text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
              >
                {METIERS.map((m) => (
                  <option key={m.id} value={m.nom}>
                    {m.nom}
                  </option>
                ))}
              </select>
            </label>
            <label className="mono-plan grid gap-2 sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={4}
                className="rounded-sm border border-input bg-background/70 px-3 py-3 font-sans text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                className="mono-plan rounded-full bg-primary px-7 py-4 !text-[0.72rem] !text-primary-foreground transition-transform duration-500 [transition-timing-function:var(--ressort)] hover:scale-[1.03] active:scale-95"
                style={{ boxShadow: "var(--lueur-cuivre)" }}
              >
                Demander mon devis gratuit
              </button>
              <a href={ENTREPRISE.telephoneLien} className="mono-plan hover:!text-primary">
                ou appelez le {ENTREPRISE.telephone}
              </a>
            </div>
            {envoye && (
              <p role="status" className="mono-plan sm:col-span-2 !text-primary">
                Merci — votre demande est prête. Appelez ou écrivez-nous à {ENTREPRISE.email} pour
                accélérer la prise de rendez-vous.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}