import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { CurseurLumiere } from "@/components/site/CurseurLumiere";
import { Navbar } from "@/components/site/Navbar";
import { CoucheConversion } from "@/components/site/CoucheConversion";
import { LiensSociauxFlottants } from "@/components/site/LiensSociauxFlottants";
import { ActeCarriere } from "@/components/site/ActeCarriere";
import { ActeFondation } from "@/components/site/ActeFondation";
import { PourquoiNous } from "@/components/site/PourquoiNous";
import { ActeExplorateur } from "@/components/site/ActeExplorateur";
import { ActeChantiers } from "@/components/site/ActeChantiers";
import { TemoignagesClients } from "@/components/site/TemoignagesClients";
import { AvisGoogle } from "@/components/site/AvisGoogle";
import { ActeProcessus } from "@/components/site/ActeProcessus";
import { Financement } from "@/components/site/Financement";
import { ActeAtelier } from "@/components/site/ActeAtelier";
import { ActeSeuil } from "@/components/site/ActeSeuil";
import { PiedDePage } from "@/components/site/PiedDePage";
import { ENTREPRISE, METIERS, SLOGANS } from "@/lib/entreprise";

const TITRE = "SENI DJELASSI — Rénovation & BTP à Marseille, Toulon, Nice";
const DESCRIPTION =
  "Entreprise tout corps d'état : peinture, plomberie, électricité, maçonnerie, carrelage, rénovation complète. Marseille, Toulon, Nice. Devis gratuit — 07 45 57 64 14.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: `${ENTREPRISE.nom} — ${ENTREPRISE.baseline}`,
          description: DESCRIPTION,
          telephone: "+33745576414",
          email: ENTREPRISE.email,
          areaServed: ["Marseille", "Toulon", "Nice", "Bouches-du-Rhône", "Var", "Alpes-Maritimes"],
          slogan: SLOGANS.principal,
          makesOffer: METIERS.map((m) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: m.nom, description: m.resume },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();

  return (
    <main className="relative bg-background">
      <Navbar />
      <CurseurLumiere />
      <CoucheConversion />
      <ActeCarriere />
      <LiensSociauxFlottants />
      <ActeFondation />
      <PourquoiNous />
      <ActeExplorateur />
      <ActeChantiers />
      <ActeProcessus />
      <Financement />
      <ActeAtelier />
      <TemoignagesClients />
      <AvisGoogle />
      <ActeSeuil />
      <PiedDePage />
    </main>
  );
}
