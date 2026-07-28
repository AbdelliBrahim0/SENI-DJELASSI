import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Building2, Shield, Leaf, Users, HardHat, Wrench, Ruler,
  CheckCircle2, ArrowRight, Trophy, Clock, HeartHandshake,
  Drill, PaintBucket, Hammer, Cog, Sparkles
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { PiedDePage } from "@/components/site/PiedDePage";
import { useLenis } from "@/hooks/use-lenis";
import { ENTREPRISE, SLOGANS } from "@/lib/entreprise";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — SENI DJELASSI" },
      { name: "description", content: `Découvrez l'histoire, les moyens techniques, l'engagement environnemental et l'équipe de ${ENTREPRISE.nom} — ${ENTREPRISE.baseline}.` },
    ],
  }),
  component: PageAPropos,
});

const TIMELINE = [
  { annee: "2015", titre: "Fondation", desc: `${ENTREPRISE.nom} voit le jour à Marseille, portée par la vision d'un artisanat exigeant et d'un accompagnement sur-mesure.` },
  { annee: "2018", titre: "Équipe & rayonnement", desc: "L'équipe s'agrandit. Nous intervenons désormais sur tout le département des Bouches-du-Rhône avec une palette complète de corps d'état." },
  { annee: "2021", titre: "Tous corps d'état", desc: "Structuration en pôle tous corps d'état : maçonnerie, plomberie, électricité, peinture, carrelage, menuiserie — un seul interlocuteur." },
  { annee: "2023", titre: "Expertise reconnue", desc: "Plus de 200 chantiers réalisés. Notre savoir-faire s'étend au Var et aux Alpes-Maritimes. Nous investissons dans des équipements de pointe." },
  { annee: "2025", titre: "Innovation & durabilité", desc: "Matériaux bas-carbone, outils numériques de pilotage, formation continue : nous réinventons le métier pour un bâtiment plus durable." },
];

const MOYENS = [
  { icone: Drill, titre: "Équipement professionnel", desc: "Percseuses, visseuses, meuleuses, scies sauteuses et circulaires — outillage sans fil haute performance pour une précision chirurgicale." },
  { icone: Ruler, titre: "Lasers & mesure", desc: "Niveaux laser rotatifs, télémètres numériques, scanners 3D pour des relevés au millimètre près." },
  { icone: PaintBucket, titre: "Peinture & finition", desc: "Pistolets airless, ponceuses girafe, aspirateurs sur chantier — des finitions impeccables sans poussière." },
  { icone: Hammer, titre: "Échafaudage & sécurité", desc: "Échafaudages roulants, PIRL, plateformes individuelles — tout le matériel de travail en hauteur certifié." },
  { icone: Cog, titre: "Pilotage numérique", desc: "Tablette de chantier, logiciel de suivi, devis et facturation dématérialisés : transparence totale." },
  { icone: Wrench, titre: "Véhicule atelier", desc: "Utilitaire équipé pour intervenir partout : stock de matériel, groupe électrogène, compresseur embarqué." },
];

const CHIFFRES = [
  { valeur: 200, suffixe: "+", label: "Chantiers réalisés", icone: Trophy },
  { valeur: 98, suffixe: "%", label: "Satisfaction client", icone: HeartHandshake },
  { valeur: 15, suffixe: "+", label: "Ans d'expérience", icone: Clock },
  { valeur: 8, suffixe: "", label: "Métiers complémentaires", icone: CheckCircle2 },
];

const VALEURS_ENVIRONNEMENT = [
  { titre: "Matériaux éco-responsables", desc: "Privilège aux fournisseurs locaux et matériaux bas-carbone. Filière de recyclage des déchets de chantier certifiée." },
  { titre: "Chantier propre", desc: "Tri sélectif systématique, aspiration centralisée, protection des sols et des existants. Zéro trace." },
  { titre: "Efficacité énergétique", desc: "Diagnostic thermique, isolation renforcée, solutions d'économie d'énergie. Nous bâtissons pour demain." },
  { titre: "Filière locale", desc: "Partenaires régionaux, circuits courts. Moins de transport, plus de lien — une économie vertueuse." },
];

const EQUIPE = [
  { nom: "Seni Djelassi", role: "Fondateur & Maître d'œuvre", desc: "15 ans d'expérience dans le BTP. Vision artisanale et exigence de qualité.", initiales: "SD" },
  { nom: "Ahmed Kerrouche", role: "Chef de chantier", desc: "Référent technique tous corps d'état. Planification, coordination, contrôle qualité.", initiales: "AK" },
  { nom: "Sarah Benali", role: "Conductrice de travaux", desc: "Gestion des plannings, relation clients, suivi budgétaire. Votre interlocutrice dédiée.", initiales: "SB" },
  { nom: "Karim Meftah", role: "Maçon — Finitions", desc: "Spécialiste enduits et carrelage. La perfection dans le détail.", initiales: "KM" },
];

const HYGIENE_SECURITE = [
  { icone: HardHat, titre: "Équipements de protection", desc: "Casques, harnais, gants, lunettes, chaussures de sécurité — EPI obligatoires et contrôlés." },
  { icone: Shield, titre: "Assurance décennale", desc: "Garantie décennale et responsabilité civile professionnelle à jour. Tranquillité absolue." },
  { icone: Building2, titre: "Protection des lieux", desc: "Bâchage, film de protection, aspiration. Votre intérieur reste impeccable." },
  { icone: CheckCircle2, titre: "Formation continue", desc: "SST, habilitation électrique, travail en hauteur — chaque intervention est préparée." },
];

function Compter({ valeur, suffixe, commencer }: { valeur: number; suffixe: string; commencer: boolean }) {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    if (!commencer) return;
    let debut = 0;
    const duree = 2000;
    const pas = 16;
    const total = Math.ceil(duree / pas);
    const increment = valeur / total;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= valeur) {
        setCompte(valeur);
        clearInterval(timer);
      } else {
        setCompte(Math.floor(current));
      }
    }, pas);
    return () => clearInterval(timer);
  }, [commencer, valeur]);

  return <span>{compte}{suffixe}</span>;
}

function SectionTitre({ numero, titre }: { numero: string; titre: string }) {
  return (
    <div className="mb-12 md:mb-20">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mono-plan !text-primary"
      >
        {numero}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="texte-grave mt-2 text-[clamp(2.4rem,6vw,5rem)] font-black"
      >
        {titre}
      </motion.h2>
    </div>
  );
}

function CarteAnimee({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PageAPropos() {
  useLenis();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70dvh] flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.72 0.132 42) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mono-plan !text-primary"
          >
            {ENTREPRISE.nom}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="texte-grave mt-4 text-[clamp(3.4rem,10vw,9rem)] font-black leading-[0.85]"
          >
            À propos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {SLOGANS.interlocuteur}
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, oklch(0.72 0.132 42 / 40%), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={heroInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </section>

      {/* Histoire */}
      <section className="relative px-5 pb-24 md:px-14 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <SectionTitre numero="01" titre="Notre histoire" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
            {TIMELINE.map((etape, i) => (
              <motion.div
                key={etape.annee}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 pb-12 md:pb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_20px_oklch(0.72_0.132_42/0.15)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="flex-1 pl-14 md:pl-0">
                  <span className="mono-plan !text-primary/60">{etape.annee}</span>
                  <h3 className="mt-1 font-display text-3xl font-black text-marbre md:text-4xl">
                    {etape.titre}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-muted-foreground md:text-base">
                    {etape.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moyens techniques */}
      <section className="relative border-t border-border px-5 py-24 md:px-14 md:py-32">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.132 42) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionTitre numero="02" titre="Moyens techniques" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MOYENS.map((moyen, i) => {
              const Icone = moyen.icone;
              return (
                <CarteAnimee key={moyen.titre} index={i}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card/50 p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-150" />
                  <Icone className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-bold text-marbre">{moyen.titre}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{moyen.desc}</p>
                </CarteAnimee>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section ref={statsRef} className="relative border-t border-border px-5 py-24 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitre numero="03" titre="Chiffres & engagement" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHIFFRES.map((c, i) => {
              const Icone = c.icone;
              return (
                <CarteAnimee key={c.label} index={i}
                  className="flex flex-col items-center justify-center rounded-sm border border-border bg-card/40 p-8 text-center"
                >
                  <Icone className="h-8 w-8 text-primary/60" />
                  <p className="mt-3 font-display text-5xl font-black text-marbre md:text-6xl">
                    <Compter valeur={c.valeur} suffixe={c.suffixe} commencer={statsInView} />
                  </p>
                  <p className="mono-plan mt-2">{c.label}</p>
                </CarteAnimee>
              );
            })}
          </div>
        </div>
      </section>

      {/* Environnement */}
      <section className="relative border-t border-border px-5 py-24 md:px-14 md:py-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 50% 60%, oklch(0.5 0.1 145 / 0.05), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionTitre numero="04" titre="Environnement" />
          <div className="grid gap-6 sm:grid-cols-2">
            {VALEURS_ENVIRONNEMENT.map((v, i) => (
              <CarteAnimee key={v.titre} index={i}
                className="group relative rounded-sm border border-border bg-card/30 p-6 transition-all duration-500 hover:border-primary/20"
              >
                <Leaf className="h-6 w-6 text-primary/50 transition-all duration-500 group-hover:text-primary" />
                <h3 className="mt-3 font-display text-xl font-bold text-marbre">{v.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                <div className="mt-4 h-px w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
              </CarteAnimee>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiène & Sécurité */}
      <section className="relative border-t border-border bg-[radial-gradient(ellipse_50%_40%_at_50%_40%,oklch(0.72_0.132_42/0.03),transparent_70%)] px-5 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionTitre numero="05" titre="Hygiène & sécurité" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HYGIENE_SECURITE.map((h, i) => {
              const Icone = h.icone;
              return (
                <CarteAnimee key={h.titre} index={i}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card/40 p-6 transition-all duration-500 hover:border-primary/30"
                >
                  <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full border border-primary/10 transition-all duration-500 group-hover:scale-[3] group-hover:border-primary/5" />
                  <Icone className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-bold text-marbre">{h.titre}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                </CarteAnimee>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="border-t border-border px-5 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionTitre numero="06" titre="Notre équipe" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPE.map((membre, i) => (
              <CarteAnimee key={membre.nom} index={i}
                className="group relative overflow-hidden rounded-sm border border-border bg-card/30 p-6 transition-all duration-500 hover:border-primary/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-lg font-bold text-primary/70 transition-all duration-500 group-hover:bg-primary/15 group-hover:text-primary group-hover:shadow-[0_0_30px_oklch(0.72_0.132_42/0.2)]">
                  {membre.initiales}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-marbre">{membre.nom}</h3>
                <p className="mono-plan mt-1 !text-primary/70">{membre.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{membre.desc}</p>
              </CarteAnimee>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border px-5 py-20 md:px-14 md:py-28">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, oklch(0.72 0.132 42 / 0.06), transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <Sparkles className="mx-auto h-8 w-8 text-primary/40" />
          <h2 className="texte-grave mt-4 text-[clamp(2.2rem,5vw,4rem)] font-black">
            Prêt à construire votre projet ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {SLOGANS.satisfaction} Appelez-nous ou demandez votre devis gratuit dès maintenant.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ENTREPRISE.telephoneLien}
              className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 !text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.72_0.132_42/0.3)]"
            >
              {ENTREPRISE.telephone} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#devis"
              className="mono-plan inline-flex items-center gap-2 rounded-sm border border-border px-8 py-4 text-muted-foreground transition-all duration-500 hover:border-primary/50 hover:!text-primary"
            >
              Devis gratuit
            </a>
          </div>
        </motion.div>
      </section>

      <PiedDePage />
    </main>
  );
}
