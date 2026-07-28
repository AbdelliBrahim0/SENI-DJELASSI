import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { PiedDePage } from "@/components/site/PiedDePage";
import { DevisWizard } from "@/components/site/DevisWizard";
import { useLenis } from "@/hooks/use-lenis";
import { ENTREPRISE } from "@/lib/entreprise";

export const Route = createFileRoute("/demande-devis")({
  head: () => ({
    meta: [
      { title: `Demande de devis — ${ENTREPRISE.nom}` },
      { name: "description", content: "Formulaire intelligent de demande de devis. Sélectionnez votre métier, décrivez vos travaux et recevez un devis personnalisé sous 48h." },
    ],
  }),
  component: PageDemandeDevis,
});

function PageDemandeDevis() {
  useLenis();

  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.72 0.132 42) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono-plan !text-primary"
          >
            Devis gratuit — Sans engagement
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="texte-grave mt-4 text-[clamp(3rem,8vw,7rem)] font-black"
          >
            Décrivez votre <br />projet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-muted-foreground"
          >
            Répondez aux étapes ci-dessous pour nous permettre de comprendre précisément votre besoin.
            Un devis détaillé vous sera envoyé sous 48h.
          </motion.p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-14 md:pb-32">
        <DevisWizard />
      </section>

      <PiedDePage />
    </main>
  );
}
