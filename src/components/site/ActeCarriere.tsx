import { useEffect, useRef, useState } from "react";
import { BoutonMagnetique } from "./BoutonMagnetique";
import { IconeTelephone } from "./IconeTelephone";
import { ENTREPRISE, SLOGANS } from "@/lib/entreprise";
import { motion } from "motion/react";
import { SceneMateriaux } from "./SceneMateriaux";

const titrePrincipal = "SENI\nDJELASSI";
const texteTypewriter = `${ENTREPRISE.baseline}. ${SLOGANS.principal}`;

const typeWriterContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.3,
    },
  },
};

const typeWriterChar = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "inline-block",
    transition: { duration: 0.01 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ActeCarriere() {
  const section = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const maj = () => {
      const el = section.current;
      if (!el) return;
      const v = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      setP(v);
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);

  const zoneInfo = (
    <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
      <p className="mono-plan max-w-md !text-foreground/80 text-xs">
        Zone d'intervention : Marseille · Toulon · Nice et alentours — 13 · 83 · 06
      </p>
      <p className="mono-plan animate-pulse text-xs">↓ Faites défiler</p>
    </div>
  );

  return (
    <section
      ref={section}
      id="carriere"
      className="relative"
      aria-label="Accueil"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: Math.max(0, 1 - p * 1.6),
          visibility: p > 0.98 ? "hidden" : "visible",
          background:
            "radial-gradient(60% 50% at 50% 45%, oklch(0.28 0.02 55) 0%, oklch(0.135 0.006 62) 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        {/* MOBILE */}
        <div className="flex md:hidden relative overflow-hidden min-h-[100dvh] px-5 pt-24 pb-0">
          <div className="absolute inset-0 pointer-events-none z-0">
            <SceneMateriaux disposition="brouette" />
          </div>
          <div className="relative z-10 flex-1">
            <div className="max-w-2xl">


            <div className="flex items-start">
              <h1 className="texte-grave text-[clamp(4.8rem,19vw,17rem)] font-black leading-[0.85] tracking-tight">
                {titrePrincipal.split("\n").map((ligne, idxLigne) => (
                  <span key={idxLigne} className="block overflow-hidden pb-2">
                    {ligne}
                  </span>
                ))}
              </h1>
            </div>

            <motion.p
              className="mt-6 max-w-xl text-xl text-muted-foreground md:text-3xl"
              variants={typeWriterContainer}
              initial="hidden"
              animate="visible"
            >
              {texteTypewriter.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={typeWriterChar}
                  className={index < ENTREPRISE.baseline.length + 1 ? "text-marbre" : ""}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 + texteTypewriter.length * 0.02 }}
                className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-1"
              />
            </motion.p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                transition={{ delay: 2.3 }}
              >
                <BoutonMagnetique href="#devis">Devis gratuit</BoutonMagnetique>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                transition={{ delay: 2.6 }}
              >
                <BoutonMagnetique href={ENTREPRISE.telephoneLien} variante="pierre">
                  <IconeTelephone /> {ENTREPRISE.telephone}
                </BoutonMagnetique>
              </motion.div>
            </div>
          </div>
          </div>
          </div>

        {/* DESKTOP : contenu à gauche + 3D à droite */}
        <div className="hidden md:flex flex-col px-14 pt-28 pb-10 min-h-[100dvh]">
          <div className="flex flex-1 items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">


              <h1 className="texte-grave text-[clamp(4.8rem,14vw,14rem)] font-black leading-[0.9] tracking-tight">
                {titrePrincipal.split("\n").map((ligne, idxLigne) => (
                  <span key={idxLigne} className="block overflow-hidden pb-2">
                    {ligne}
                  </span>
                ))}
              </h1>

              <motion.p
                className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl"
                variants={typeWriterContainer}
                initial="hidden"
                animate="visible"
              >
                {texteTypewriter.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={typeWriterChar}
                    className={index < ENTREPRISE.baseline.length + 1 ? "text-marbre" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 + texteTypewriter.length * 0.02 }}
                  className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-1"
                />
              </motion.p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{ delay: 2.3 }}
                >
                  <BoutonMagnetique href="#devis">Devis gratuit</BoutonMagnetique>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{ delay: 2.6 }}
                >
                  <BoutonMagnetique href={ENTREPRISE.telephoneLien} variante="pierre">
                    <IconeTelephone /> {ENTREPRISE.telephone}
                  </BoutonMagnetique>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="hidden lg:block relative w-[500px] h-[600px] shrink-0"
            >
              <div className="absolute inset-0 pointer-events-none z-0">
                <SceneMateriaux disposition="gauche" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.3 }}
          >
            {zoneInfo}
          </motion.div>
        </div>

      </div>

      {/* MOBILE : zone d'intervention */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.3 }}
        className="block md:hidden px-5 pb-16 pt-6"
      >
        {zoneInfo}
      </motion.div>
    </section>
  );
}
