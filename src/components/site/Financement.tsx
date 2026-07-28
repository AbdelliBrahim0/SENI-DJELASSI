import { motion } from "motion/react";
import { FileText, CreditCard, CalendarCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { ENTREPRISE } from "@/lib/entreprise";

const ETAPES = [
  { icone: FileText, titre: "Devis gratuit", desc: "Diagnostic sans engagement, devis détaillé sous 48h." },
  { icone: CreditCard, titre: "Paiement flexible", desc: "Paiement échelonné possible. Nous nous adaptons à votre budget." },
  { icone: CalendarCheck, titre: "Planification", desc: "Calendrier prévisionnel communiqué avant le début du chantier." },
  { icone: BadgeCheck, titre: "Facturation transparente", desc: "Aucun frais caché. Chaque poste est détaillé et justifié." },
];

export function Financement() {
  return (
    <section className="relative overflow-hidden border-t border-border px-5 py-24 md:px-14 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.132 42 / 0.05), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Texte */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mono-plan !text-primary"
            >
              Financement
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="texte-grave mt-2 text-[clamp(2.4rem,5vw,4.4rem)] font-black"
            >
              Un projet, <br />un budget, <br />une solution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 max-w-lg text-muted-foreground"
            >
              Nous croyons que la qualité doit être accessible. Devis gratuit, paiement échelonné,
              transparence totale — rien ne doit freiner votre projet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8"
            >
              <a
                href={ENTREPRISE.telephoneLien}
                className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 !text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.72_0.132_42/0.3)]"
              >
                Demander mon devis gratuit <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Étapes */}
          <div className="space-y-4">
            {ETAPES.map((etape, i) => {
              const Icone = etape.icone;
              return (
                <motion.div
                  key={etape.titre}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="group flex items-start gap-4 rounded-sm border border-border/40 bg-card/30 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-all duration-300 group-hover:bg-primary/10">
                    <Icone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-marbre">{etape.titre}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{etape.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
