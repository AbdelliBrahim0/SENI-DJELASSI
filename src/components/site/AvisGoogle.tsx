import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";

const AVIS_GOOGLE = [
  { nom: "Sophie L.", note: 5, texte: "Entreprise sérieuse et professionnelle. Travail soigné, délais respectés. Je recommande.", date: "Il y a 2 mois" },
  { nom: "Marc D.", note: 5, texte: "Très satisfait de la rénovation complète de ma cuisine. Équipe à l'écoute et réactive.", date: "Il y a 1 mois" },
  { nom: "Caroline B.", note: 5, texte: "Ravalement de façade impeccable. Propreté irréprochable, finitions parfaites.", date: "Il y a 3 semaines" },
  { nom: "Thomas R.", note: 5, texte: "Devis rapide, chantier propre, équipe sympathique. Un sans-faute.", date: "Il y a 2 semaines" },
  { nom: "Nathalie K.", note: 5, texte: "Intervention d'urgence pour une fuite d'eau. Réactifs et efficaces.", date: "Il y a 5 jours" },
];

function EtoilesGoogle({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < score ? "fill-primary text-primary" : "fill-border/40 text-border/40"}`}
        />
      ))}
    </div>
  );
}

export function AvisGoogle() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Widget note globale */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center rounded-sm border border-border bg-card/40 p-10 text-center lg:items-start lg:text-left"
          >
            <div className="flex items-center gap-2">
              <span className="text-6xl font-black text-marbre">4.9</span>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <Star className="h-6 w-6 fill-primary text-primary" />
                    </motion.span>
                  ))}
                </div>
                <span className="mono-plan text-xs">Basé sur 47 avis Google</span>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=seni+djelassi+marseille+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-plan mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-xs transition-colors hover:border-primary/50 hover:!text-primary"
            >
              Voir tous les avis <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Derniers avis */}
          <div className="space-y-3">
            {AVIS_GOOGLE.map((avis, i) => (
              <motion.div
                key={avis.nom}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-3 rounded-sm border border-border/40 bg-card/20 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-card/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary/70">
                  {avis.nom.split(" ").map(p => p[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-marbre">{avis.nom}</span>
                    <span className="mono-plan shrink-0 text-[0.55rem] text-muted-foreground">{avis.date}</span>
                  </div>
                  <EtoilesGoogle score={avis.note} />
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">&ldquo;{avis.texte}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
