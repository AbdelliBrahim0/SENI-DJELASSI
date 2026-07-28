import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote, ThumbsUp } from "lucide-react";

const TEMOIGNAGES = [
  {
    nom: "Sophie L.",
    ville: "Marseille",
    projet: "Rénovation complète appartement",
    note: 5,
    texte: "Du devis à la livraison, tout a été parfait. L'équipe a respecté le planning et le budget. Le suivi était exemplaire, je recommande vivement.",
    initiales: "SL",
  },
  {
    nom: "Marc D.",
    ville: "Toulon",
    projet: "Cuisine & salle de bain",
    note: 5,
    texte: "Une cuisine et une salle de bain transformées en 4 semaines chrono. La coordination entre les corps d'état était impressionnante. Un vrai gain de temps.",
    initiales: "MD",
  },
  {
    nom: "Caroline B.",
    ville: "Nice",
    projet: "Ravalement façade + peinture",
    note: 5,
    texte: "Une équipe professionnelle et minutieuse. Le chantier était impeccable chaque soir. La façade a retrouvé son éclat d'origine, je suis ravie.",
    initiales: "CB",
  },
  {
    nom: "Thomas R.",
    ville: "Aix-en-Provence",
    projet: "Rénovation salle de bain",
    note: 5,
    texte: "Interlocuteur unique, chantier propre, délais tenus. Que demander de plus ? Le carrelage est magnifique, les finitions parfaites.",
    initiales: "TR",
  },
  {
    nom: "Nathalie K.",
    ville: "Marseille",
    projet: "Électricité & plomberie",
    note: 5,
    texte: "Intervention rapide pour une urgence électrique. L'électricien était chez moi en 2h, problème résolu proprement. Merci pour la réactivité.",
    initiales: "NK",
  },
];

function EtoilesTemoignage({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`h-4 w-4 ${i < score ? "text-primary fill-primary" : "text-border fill-border/30"}`}
          />
        </motion.span>
      ))}
    </div>
  );
}

export function TemoignagesClients() {
  const [indexCourant, setIndexCourant] = useState(0);
  const [direction, setDirection] = useState(1);
  const [noteSaisie, setNoteSaisie] = useState(0);
  const [envoye, setEnvoye] = useState(false);
  const [hoverSaisie, setHoverSaisie] = useState(0);

  const suivantTemoignage = useCallback(() => {
    setDirection(1);
    setIndexCourant((p) => (p + 1) % TEMOIGNAGES.length);
  }, []);

  const precedentTemoignage = useCallback(() => {
    setDirection(-1);
    setIndexCourant((p) => (p - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(suivantTemoignage, 5000);
    return () => clearInterval(timer);
  }, [suivantTemoignage]);

  const temoignageActif = TEMOIGNAGES[indexCourant];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="relative overflow-hidden border-t border-border px-5 py-24 md:px-14 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.132 42) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-plan !text-primary"
        >
          Témoignages
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="texte-grave mt-2 text-[clamp(2.4rem,6vw,5rem)] font-black"
        >
          Ils nous ont fait <br />confiance
        </motion.h2>

        <div className="relative mt-14">
          <div className="relative mx-auto max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={indexCourant}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative rounded-sm border border-border bg-card/60 p-8 md:p-10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-lg font-bold text-primary">
                  {temoignageActif.initiales}
                </div>
                <EtoilesTemoignage score={temoignageActif.note} />
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  &ldquo;{temoignageActif.texte}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                  <div>
                    <p className="font-display text-lg font-bold text-marbre">{temoignageActif.nom}</p>
                    <p className="mono-plan text-[0.6rem]">{temoignageActif.ville} — {temoignageActif.projet}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={precedentTemoignage}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {TEMOIGNAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > indexCourant ? 1 : -1); setIndexCourant(i); }}
                    className={`h-2 w-2 rounded-full transition-all duration-500 ${
                      i === indexCourant ? "w-6 bg-primary" : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={suivantTemoignage}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {TEMOIGNAGES.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-sm border border-border/50 bg-card/20 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/40"
                onClick={() => { setDirection(i > indexCourant ? 1 : -1); setIndexCourant(i); }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary">
                    {t.initiales}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-marbre">{t.nom}</p>
                    <div className="flex">
                      {Array.from({ length: t.note }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                  &ldquo;{t.texte}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formulaire d'avis statique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-16 max-w-lg"
        >
          <div className="rounded-sm border border-border bg-card/30 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <span className="mono-plan !text-primary">Donnez votre avis</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Votre expérience nous aide à nous améliorer. Laissez-nous un mot.
            </p>

            <div className="mt-5">
              <label className="mono-plan block text-xs">Votre note</label>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const etoile = i + 1;
                  const active = (hoverSaisie || noteSaisie) >= etoile;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { if (!envoye) setNoteSaisie(etoile); }}
                      onMouseEnter={() => { if (!envoye) setHoverSaisie(etoile); }}
                      onMouseLeave={() => setHoverSaisie(0)}
                      className="transition-transform hover:scale-110"
                      disabled={envoye}
                    >
                      <Star
                        className={`h-7 w-7 transition-all duration-200 ${
                          active ? "fill-primary text-primary" : "fill-border/30 text-border/30"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              <input
                placeholder="Votre nom"
                disabled={envoye}
                className="w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-50"
              />
              <textarea
                placeholder="Partagez votre expérience..."
                rows={3}
                disabled={envoye}
                className="w-full resize-none rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-50"
              />
            </div>

            <button
              type="button"
              onClick={() => setEnvoye(true)}
              disabled={envoye || noteSaisie === 0}
              className="mono-plan mt-4 w-full rounded-sm bg-primary px-5 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {envoye ? "Merci pour votre avis !" : "Publier mon avis"}
            </button>

            {envoye && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mono-plan mt-3 text-center !text-primary"
              >
                Merci — votre avis a bien été enregistré. Il apparaîtra après modération.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
