import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search, Phone, Mail, MessageCircle, ChevronDown, HelpCircle, FileText, Shield, CreditCard, Clock, Wrench } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { PiedDePage } from "@/components/site/PiedDePage";
import { useLenis } from "@/hooks/use-lenis";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ENTREPRISE } from "@/lib/entreprise";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SENI DJELASSI" },
      { name: "description", content: "Questions fréquentes sur nos services, devis, garanties, délais et interventions. Tout ce que vous devez savoir avant vos travaux." },
    ],
  }),
  component: PageFAQ,
});

const CATEGORIES = [
  { id: "toutes", label: "Toutes", icone: HelpCircle },
  { id: "devis", label: "Devis & Contact", icone: FileText },
  { id: "chantier", label: "Chantier & Travaux", icone: Wrench },
  { id: "garanties", label: "Garanties", icone: Shield },
  { id: "paiement", label: "Paiement", icone: CreditCard },
  { id: "urgence", label: "Urgence", icone: Clock },
];

const FAQS = [
  {
    question: "Comment obtenir un devis gratuit ?",
    reponse: "Vous pouvez nous contacter par téléphone au 07 45 57 64 14, par email ou via notre formulaire en ligne. Nous vous répondons sous 48h avec un devis détaillé et personnalisé, sans engagement.",
    categorie: "devis",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    reponse: "Oui, absolument. Tous nos devis sont gratuits et sans engagement. Nous établissons un diagnostic précis de vos besoins avant de vous proposer une solution adaptée à votre budget.",
    categorie: "devis",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    reponse: "Pour les travaux programmés, nous établissons un calendrier prévisionnel communiqué avant le début du chantier. Pour les dépannages urgents, nous intervenons sous 24 à 48h selon la disponibilité.",
    categorie: "chantier",
  },
  {
    question: "Comment se déroule un chantier ?",
    reponse: "Devis et validation → Préparation et commande des matériaux → Réalisation des travaux → Suivi et ajustements → Livraison et réception. Vous avez un interlocuteur unique tout au long du processus.",
    categorie: "chantier",
  },
  {
    question: "Quels types de travaux réalisez-vous ?",
    reponse: "Nous couvrons 9 métiers complémentaires : maçonnerie, électricité, plomberie, rénovation complète, peinture, carrelage & faïence, sols souples & parquet, cuisine & salle de bain, dépannage & petits travaux.",
    categorie: "chantier",
  },
  {
    question: "Intervenez-vous dans toute la région ?",
    reponse: "Nous intervenons sur Marseille, Toulon, Nice et leurs alentours, dans les départements 13 (Bouches-du-Rhône), 83 (Var) et 06 (Alpes-Maritimes).",
    categorie: "chantier",
  },
  {
    question: "Êtes-vous assurés ?",
    reponse: "Oui, nous disposons d'une garantie décennale et d'une responsabilité civile professionnelle à jour. Chaque chantier est entièrement couvert pour votre tranquillité.",
    categorie: "garanties",
  },
  {
    question: "Quelles garanties proposez-vous ?",
    reponse: "Garantie décennale, RC Pro, travail soigné et durable, qualité garantie (règles de l'art), intervention rapide, et devis gratuit sans engagement. Votre satisfaction est notre priorité.",
    categorie: "garanties",
  },
  {
    question: "Proposez-vous un paiement échelonné ?",
    reponse: "Oui, nous proposons des facilités de paiement adaptées à votre budget. Les modalités sont détaillées dans le devis et discutées ensemble avant le début des travaux.",
    categorie: "paiement",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    reponse: "Non. La facturation est totalement transparente : chaque poste de dépense est détaillé et justifié dans votre devis. Aucun frais supplémentaire ne sera ajouté sans votre accord préalable.",
    categorie: "paiement",
  },
  {
    question: "Que faire en cas d'urgence ?",
    reponse: "Appelez-nous directement au 07 45 57 64 14. Nous traitons les urgences électriques et de plomberie prioritairement, avec une intervention sous 24h dans la plupart des cas.",
    categorie: "urgence",
  },
  {
    question: "Faites-vous des petits travaux ?",
    reponse: "Oui, notre service dépannage & petits travaux est conçu pour les interventions rapides : fuite, panne électrique, petite réparation, etc. Devis gratuit et intervention sous 24h.",
    categorie: "urgence",
  },
];

function PageFAQ() {
  useLenis();
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("toutes");
  const [ouvert, setOuvert] = useState<string | undefined>(undefined);

  const filtrees = FAQS.filter((faq) => {
    const matchCategorie = categorie === "toutes" || faq.categorie === categorie;
    const matchRecherche = !recherche.trim() ||
      faq.question.toLowerCase().includes(recherche.toLowerCase()) ||
      faq.reponse.toLowerCase().includes(recherche.toLowerCase());
    return matchCategorie && matchRecherche;
  });

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.72 0.132 42) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono-plan !text-primary"
          >
            Foire aux questions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="texte-grave mt-4 text-[clamp(3rem,8vw,7rem)] font-black"
          >
            Des questions ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
          >
            Tout ce que vous devez savoir avant vos travaux. Vous ne trouvez pas votre réponse ?
            Contactez-nous directement.
          </motion.p>

          {/* Recherche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative mx-auto mt-10 max-w-md"
          >
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Rechercher une question..."
              className="w-full rounded-full border border-border bg-card/50 py-3.5 pl-12 pr-4 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_20px_oklch(0.72_0.132_42/0.1)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Catégories */}
      <section className="px-5 pb-8 md:px-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icone = cat.icone;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setCategorie(cat.id); setOuvert(undefined); }}
                  className={`mono-plan inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.6rem] transition-all duration-300 ${
                    categorie === cat.id
                      ? "border-primary bg-primary/10 !text-primary"
                      : "border-border hover:border-primary/50 hover:!text-primary"
                  }`}
                >
                  <Icone className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordéon */}
      <section className="px-5 pb-24 md:px-14 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {filtrees.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-muted-foreground"
            >
              Aucun résultat pour &ldquo;{recherche}&rdquo;
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="mono-plan mb-4 block text-xs">
                {filtrees.length} question{filtrees.length > 1 ? "s" : ""}
              </span>
              <Accordion
                type="single"
                collapsible
                value={ouvert}
                onValueChange={setOuvert}
                className="space-y-2"
              >
                {filtrees.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${i}`}
                    className="rounded-sm border border-border/50 bg-card/20 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-card/40"
                  >
                    <AccordionTrigger className="px-5 py-5 text-left font-display text-lg font-bold text-marbre transition-all duration-300 hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.reponse}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border px-5 py-20 md:px-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <HelpCircle className="mx-auto h-8 w-8 text-primary/40" />
          <h2 className="texte-grave mt-4 text-[clamp(1.8rem,4vw,3.2rem)] font-black">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ENTREPRISE.telephoneLien}
              className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 !text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.72_0.132_42/0.3)]"
            >
              <Phone className="h-4 w-4" /> {ENTREPRISE.telephone}
            </a>
            <a
              href={`mailto:${ENTREPRISE.email}`}
              className="mono-plan inline-flex items-center gap-2 rounded-sm border border-border px-7 py-3.5 text-muted-foreground transition-all duration-500 hover:border-primary/50 hover:!text-primary"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={ENTREPRISE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-plan inline-flex items-center gap-2 rounded-sm border border-border px-7 py-3.5 text-muted-foreground transition-all duration-500 hover:border-primary/50 hover:!text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      <PiedDePage />
    </main>
  );
}
