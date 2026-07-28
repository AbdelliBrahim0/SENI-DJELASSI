import { motion } from "motion/react";
import { useRef } from "react";
import {
  UserCheck, Clock, ShieldCheck, MessageCircle, Ruler, Sparkles
} from "lucide-react";

const AVANTAGES = [
  {
    icone: UserCheck,
    titre: "Interlocuteur unique",
    desc: "Un seul contact du devis à la livraison. Vous ne serez jamais baladé entre plusieurs services.",
    stat: "100%",
    label: "de nos clients recommande"
  },
  {
    icone: Clock,
    titre: "Réactivité express",
    desc: "Devis sous 48h, intervention rapide, dépannage d'urgence disponible 6j/7.",
    stat: "< 48h",
    label: "devis gratuit"
  },
  {
    icone: ShieldCheck,
    titre: "Garantie décennale",
    desc: "Assurance décennale et RC Pro à jour. Chaque chantier est couvert pour votre tranquillité.",
    stat: "10 ans",
    label: "de garantie"
  },
  {
    icone: Ruler,
    titre: "Savoir-faire tous corps d'état",
    desc: "9 métiers complémentaires, une coordination parfaite. Pas de sous-traitance hasardeuse.",
    stat: "9",
    label: "métiers en interne"
  },
  {
    icone: MessageCircle,
    titre: "Transparence totale",
    desc: "Suivi de chantier dématérialisé, photos, planning actualisé. Vous savez tout, en temps réel.",
    stat: "100%",
    label: "transparence"
  },
  {
    icone: Sparkles,
    titre: "Finition soignée",
    desc: "Protection des sols, aspiration centralisée, respect des lieux. Zéro poussière, zéro trace.",
    stat: "5.0",
    label: "note de propreté"
  },
];

export function PourquoiNous() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-border px-5 py-24 md:px-14 md:py-32">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.72 0.132 42 / 0.04), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-plan !text-primary"
        >
          Pourquoi nous choisir
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="texte-grave mt-2 text-[clamp(2.4rem,6vw,5rem)] font-black"
        >
          La différence <br className="hidden sm:block" />SENI DJELASSI
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AVANTAGES.map((av, i) => {
            const Icone = av.icone;
            return (
              <motion.div
                key={av.titre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card/40 p-6 transition-all duration-500 hover:border-primary/30"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:scale-[2] group-hover:bg-primary/10" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Icone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-marbre">{av.titre}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{av.desc}</p>
                  </div>
                </div>
                <div className="relative mt-5 flex items-baseline gap-2 border-t border-border/50 pt-4">
                  <span className="font-display text-3xl font-black text-primary">{av.stat}</span>
                  <span className="mono-plan text-[0.6rem]">{av.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
