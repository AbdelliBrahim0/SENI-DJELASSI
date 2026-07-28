export const ENTREPRISE = {
  nom: "SENI DJELASSI",
  baseline: "Tout Corps d'État",
  activite: "Rénovation & BTP — particuliers et professionnels",
  telephone: "07 45 57 64 14",
  telephoneLien: "tel:+33745576414",
  whatsapp: "https://wa.me/33745576414",
  email: "senidjelassi@gmail.com",
  villes: ["Marseille", "Toulon", "Nice"],
  departements: [
    "13 — Bouches-du-Rhône",
    "83 — Var",
    "06 — Alpes-Maritimes",
  ],
  reseaux: [
    { nom: "Facebook", url: "https://www.facebook.com" },
    { nom: "Instagram", url: "https://www.instagram.com" },
    { nom: "TikTok", url: "https://www.tiktok.com" },
    { nom: "WhatsApp", url: "https://wa.me/33745576414" },
  ],
} as const;

export const SLOGANS = {
  principal: "Construisons vos projets, réalisons vos envies.",
  expertise: "Notre expertise au service de vos projets.",
  interlocuteur:
    "Un seul interlocuteur pour tous vos travaux. De la conception à la réalisation, nous vous accompagnons avec rigueur et passion.",
  satisfaction: "Votre satisfaction, notre priorité.",
} as const;

export const GARANTIES = [
  {
    titre: "Entreprise assurée",
    detail: "Décennale + RC Pro",
    code: "ASS—01",
  },
  { titre: "Travail soigné et durable", detail: "Finitions maîtrisées", code: "FIN—02" },
  { titre: "Qualité garantie", detail: "Règles de l'art", code: "QUA—03" },
  { titre: "Intervention rapide", detail: "Réactivité chantier", code: "RAP—04" },
  { titre: "Devis gratuit", detail: "Sans engagement", code: "DEV—05" },
] as const;

export type Metier = {
  id: string;
  nom: string;
  couronne: "gros-oeuvre" | "finitions";
  resume: string;
  description: string;
  fiche: string[];
  forme: "cube" | "cylindre" | "tore" | "cone" | "plaque" | "sphere" | "octaedre" | "capsule" | "prisme";
  matiere: { couleur: string; metalness: number; roughness: number };
};

export const METIERS: Metier[] = [
  {
    id: "maconnerie",
    nom: "Maçonnerie",
    couronne: "gros-oeuvre",
    resume: "Murs, cloisons, enduits, terrasses",
    description:
      "Création et reprise de murs, cloisons, enduits et terrasses. Structure, ouvertures et reprises en sous-œuvre menées dans les règles de l'art.",
    fiche: ["Murs & cloisons", "Enduits intérieurs / extérieurs", "Terrasses"],
    forme: "cube",
    matiere: { couleur: "#8a8378", metalness: 0.05, roughness: 0.95 },
  },
  {
    id: "electricite",
    nom: "Électricité",
    couronne: "gros-oeuvre",
    resume: "Mise aux normes, installation, dépannage",
    description:
      "Installation complète, remise aux normes de tableaux et dépannage électrique pour logements et locaux professionnels.",
    fiche: ["Norme NF C 15-100", "Tableaux & circuits", "Dépannage"],
    forme: "plaque",
    matiere: { couleur: "#c9c4ba", metalness: 0.35, roughness: 0.4 },
  },
  {
    id: "plomberie",
    nom: "Plomberie",
    couronne: "gros-oeuvre",
    resume: "Installation, rénovation, dépannage",
    description:
      "Réseaux d'alimentation et d'évacuation, rénovation de sanitaires et interventions de dépannage rapides.",
    fiche: ["Cuivre / multicouche", "Sanitaires", "Recherche de fuite"],
    forme: "tore",
    matiere: { couleur: "#b87333", metalness: 0.95, roughness: 0.25 },
  },
  {
    id: "renovation-complete",
    nom: "Rénovation complète",
    couronne: "gros-oeuvre",
    resume: "De A à Z, tous corps d'état",
    description:
      "Pilotage complet de votre rénovation, tous corps d'état, avec un seul interlocuteur de la conception à la réception du chantier.",
    fiche: ["Tous corps d'état", "Un seul interlocuteur", "Planning maîtrisé"],
    forme: "octaedre",
    matiere: { couleur: "#B8A369", metalness: 0.85, roughness: 0.28 },
  },
  {
    id: "peinture",
    nom: "Peinture",
    couronne: "finitions",
    resume: "Intérieure & extérieure",
    description:
      "Préparation des supports, peinture intérieure et extérieure, ravalement léger et finitions décoratives soignées.",
    fiche: ["Préparation des supports", "Intérieur & extérieur", "Finitions soignées"],
    forme: "cylindre",
    matiere: { couleur: "#E8815A", metalness: 0.2, roughness: 0.5 },
  },
  {
    id: "carrelage",
    nom: "Carrelage & Faïence",
    couronne: "finitions",
    resume: "Sol, murs, salle de bain, cuisine",
    description:
      "Pose de carrelage et faïence au sol et au mur, chapes, joints et calepinage sur mesure en salle de bain et cuisine.",
    fiche: ["Calepinage sur mesure", "Sol & mur", "Joints & finitions"],
    forme: "prisme",
    matiere: { couleur: "#F4F1EA", metalness: 0.1, roughness: 0.15 },
  },
  {
    id: "sols",
    nom: "Sols souples & Parquet",
    couronne: "finitions",
    resume: "Pose, rénovation, tous types",
    description:
      "Pose et rénovation de parquets, stratifiés, vinyles et sols souples, avec ragréage et plinthes.",
    fiche: ["Ragréage", "Parquet & stratifié", "Vinyle / sols souples"],
    forme: "capsule",
    matiere: { couleur: "#7a5230", metalness: 0.08, roughness: 0.55 },
  },
  {
    id: "cuisine-sdb",
    nom: "Cuisine & Salle de bain",
    couronne: "finitions",
    resume: "Conception, aménagement, installation",
    description:
      "Conception, aménagement et installation complète de cuisines et salles de bain, du plan à la mise en service.",
    fiche: ["Plan d'aménagement", "Pose complète", "Mise en service"],
    forme: "sphere",
    matiere: { couleur: "#d8d3c7", metalness: 0.6, roughness: 0.2 },
  },
  {
    id: "depannage",
    nom: "Dépannage & petits travaux",
    couronne: "finitions",
    resume: "Rapide, efficace",
    description:
      "Petits travaux et dépannages toutes spécialités, traités rapidement et proprement.",
    fiche: ["Intervention < 24h", "Toutes spécialités", "Devis gratuit"],
    forme: "cone",
    matiere: { couleur: "#8B7355", metalness: 0.5, roughness: 0.45 },
  },
];

export const REALISATIONS = [
  {
    id: "sdb",
    titre: "Salle de bain rénovée intégralement",
    ville: "Marseille",
    metier: "Cuisine & Salle de bain",
    duree: "3 semaines",
  },
  {
    id: "cuisine",
    titre: "Cuisine complète, plomberie et électricité",
    ville: "Toulon",
    metier: "Rénovation complète",
    duree: "4 semaines",
  },
  {
    id: "facade",
    titre: "Ravalement et peinture de façade",
    ville: "Nice",
    metier: "Peinture",
    duree: "2 semaines",
  },
] as const;