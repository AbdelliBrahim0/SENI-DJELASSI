import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, ArrowRight, Check, Phone, Mail, MessageCircle
} from "lucide-react";
import { METIERS, ENTREPRISE } from "@/lib/entreprise";

type Champ = { id: string; label: string; type: "text" | "select" | "textarea"; options?: string[]; placeholder?: string; obligatoire?: boolean };

const FORMULAIRES: Record<string, Champ[]> = {
  maconnerie: [
    { id: "typeTravaux", label: "Type de travaux", type: "select", options: ["Mur porteur", "Cloison", "Enduit intérieur", "Enduit extérieur", "Terrasse", "Fondation", "Ouverture mur", "Reprise en sous-œuvre", "Autre"] },
    { id: "surfaceMur", label: "Surface approximative (m²)", type: "text", placeholder: "Ex: 50" },
    { id: "hauteur", label: "Hauteur sous plafond (m)", type: "text", placeholder: "Ex: 2.5" },
    { id: "typeBien", label: "Type de bien", type: "select", options: ["Appartement", "Maison", "Local commercial", "Immeuble", "Autre"] },
    { id: "acces", label: "Accès chantier", type: "select", options: ["Facile (rez-de-chaussée)", "Étage avec ascenseur", "Étage sans ascenseur", "Sous-sol", "Difficile"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description des travaux", type: "textarea", placeholder: "Décrivez précisément ce que vous souhaitez..." },
  ],
  electricite: [
    { id: "typeInstallation", label: "Type d'installation", type: "select", options: ["Installation complète neuve", "Rénovation totale", "Mise aux normes", "Dépannage", "Ajout de prises/luminaires", "Tableau électrique"] },
    { id: "anneeBatiment", label: "Année du bâtiment", type: "text", placeholder: "Ex: 1985" },
    { id: "surface", label: "Surface concernée (m²)", type: "text", placeholder: "Ex: 70" },
    { id: "pieces", label: "Nombre de pièces", type: "text", placeholder: "Ex: 4" },
    { id: "typeBien", label: "Type de bien", type: "select", options: ["Appartement", "Maison", "Local commercial", "Bureau", "Autre"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description des besoins", type: "textarea", placeholder: "Décrivez précisément ce que vous souhaitez..." },
  ],
  plomberie: [
    { id: "typeIntervention", label: "Type d'intervention", type: "select", options: ["Installation complète", "Rénovation", "Dépannage urgence", "Recherche de fuite", "Débouchage", "Remplacement chauffe-eau", "Sanitaires"] },
    { id: "etage", label: "Étage", type: "text", placeholder: "Ex: Rez-de-chaussée, 3ème..." },
    { id: "typeBien", label: "Type de bien", type: "select", options: ["Appartement", "Maison", "Local commercial", "Autre"] },
    { id: "piecesConcernees", label: "Pièces concernées", type: "select", options: ["Salle de bain", "Cuisine", "WC", "Buanderie", "Plusieurs pièces", "Tout le logement"] },
    { id: "urgent", label: "C'est une urgence ?", type: "select", options: ["Oui — fuite ou panne", "Non — travaux programmés"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description du problème / besoin", type: "textarea", placeholder: "Décrivez précisément..." },
  ],
  "renovation-complete": [
    { id: "typeProjet", label: "Type de projet", type: "select", options: ["Rénovation totale appartement", "Rénovation totale maison", "Rénovation partielle", "Rénovation local commercial", "Rénovation immeuble"] },
    { id: "surfaceTotale", label: "Surface totale (m²)", type: "text", placeholder: "Ex: 90" },
    { id: "nombrePieces", label: "Nombre de pièces", type: "text", placeholder: "Ex: 5" },
    { id: "anneeBatiment", label: "Année du bâtiment", type: "text", placeholder: "Ex: 1970" },
    { id: "etatActuel", label: "État actuel", type: "select", options: ["Bon état général", "À rafraîchir", "À rénover", "À réhabiliter", "Nu (sans finitions)"] },
    { id: "piecesConcernees", label: "Pièces à rénover", type: "textarea", placeholder: "Listez les pièces concernées et les travaux souhaités pour chacune" },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description détaillée du projet", type: "textarea", placeholder: "Décrivez votre vision, vos envies, vos contraintes..." },
  ],
  peinture: [
    { id: "typeSurface", label: "Type de surface", type: "select", options: ["Murs intérieurs", "Plafonds", "Murs + plafonds", "Façade extérieure", "Boiseries/menuiseries", "Plusieurs types"] },
    { id: "surface", label: "Surface approximative (m²)", type: "text", placeholder: "Ex: 80" },
    { id: "nombrePieces", label: "Nombre de pièces", type: "text", placeholder: "Ex: 3" },
    { id: "etatSupports", label: "État des supports", type: "select", options: ["Bon état", "Petites fissures à reboucher", "Papier peint à enlever", "À ragréer", "Ne sait pas"] },
    { id: "typePeinture", label: "Type de peinture souhaité", type: "select", options: ["Glycero (laque)", "Acrylique (mate/satinée)", "Peinture écologique", "Ne sait pas", "Conseil souhaité"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description des travaux", type: "textarea", placeholder: "Décrivez ce que vous souhaitez..." },
  ],
  carrelage: [
    { id: "typePose", label: "Type de pose", type: "select", options: ["Sol", "Mur", "Sol + mur", "Faïence décorative", "Plinthe"] },
    { id: "surfaceSol", label: "Surface au sol (m²)", type: "text", placeholder: "Ex: 30" },
    { id: "surfaceMurale", label: "Surface murale (m²)", type: "text", placeholder: "Ex: 20" },
    { id: "typePiece", label: "Type de pièce", type: "select", options: ["Salle de bain", "Cuisine", "Séjour", "Entrée", "Terrasse", "Plusieurs pièces"] },
    { id: "typeCarrelage", label: "Type de carrelage souhaité", type: "select", options: ["Grès cérame", "Pierre naturelle", "Faïence", "Carreau ciment", "Pâte de verre", "Ne sait pas / conseil"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description des travaux", type: "textarea", placeholder: "Décrivez précisément ce que vous souhaitez..." },
  ],
  sols: [
    { id: "typePose", label: "Type de revêtement souhaité", type: "select", options: ["Parquet massif", "Parquet contrecollé", "Stratifié", "Vinyle / LVT", "Moquette", "Sol PVC", "Autre"] },
    { id: "surface", label: "Surface (m²)", type: "text", placeholder: "Ex: 40" },
    { id: "revetementActuel", label: "Revêtement actuel", type: "select", options: ["Carrelage", "Parquet ancien", "Moquette", "Vinyle", "Stratifié", "Chape / béton"] },
    { id: "typePiece", label: "Type de pièce", type: "select", options: ["Séjour", "Chambre", "Cuisine", "Couloir", "Bureau", "Tout le logement"] },
    { id: "travauxSupp", label: "Travaux supplémentaires", type: "select", options: ["Aucun", "Ragréage nécessaire", "Sous-couche", "Plinthes", "Ragréage + plinthes"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description des travaux", type: "textarea", placeholder: "Décrivez précisément ce que vous souhaitez..." },
  ],
  "cuisine-sdb": [
    { id: "typePiece", label: "Type d'aménagement", type: "select", options: ["Cuisine complète", "Salle de bain complète", "Cuisine + salle de bain", "Rénovation cuisine", "Rénovation salle de bain"] },
    { id: "surface", label: "Surface de la pièce (m²)", type: "text", placeholder: "Ex: 12" },
    { id: "typeProjet", label: "Type de projet", type: "select", options: ["Neuf / Création", "Rénovation complète", "Rénovation partielle", "Reprise / rafraîchissement"] },
    { id: "travauxCompris", label: "Travaux inclus", type: "select", options: ["Aménagement seulement", "Plomberie incluse", "Électricité incluse", "Plomberie + électricité", "Tout compris (clé en main)"] },
    { id: "adresse", label: "Adresse du chantier", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description de votre projet", type: "textarea", placeholder: "Décrivez vos envies, le style recherché, les contraintes..." },
  ],
  depannage: [
    { id: "typeUrgence", label: "Type d'urgence", type: "select", options: ["Électricité — panne / court-circuit", "Plomberie — fuite / débouchage", "Vitrerie — vitre cassée", "Serruerie — porte bloquée", "Petite réparation", "Autre"] },
    { id: "acces", label: "Accès au logement", type: "select", options: ["Je suis sur place", "Je peux laisser un accès", "Code ou digicode nécessaire"] },
    { id: "disponibilite", label: "Disponibilité", type: "select", options: ["Ce jour — immédiat", "Ce jour — après-midi", "Demain matin", "Demain après-midi", "Cette semaine"] },
    { id: "adresse", label: "Adresse d'intervention", type: "text", placeholder: "Numéro, rue, code postal, ville" },
    { id: "description", label: "Description rapide du problème", type: "textarea", placeholder: "Expliquez brièvement la situation..." },
  ],
};

const ETAPES = [
  { numero: "01", titre: "Choisissez votre métier" },
  { numero: "02", titre: "Détails de votre projet" },
  { numero: "03", titre: "Vos coordonnées" },
  { numero: "04", titre: "Récapitulatif" },
];

function genererMessage(metierId: string, reponses: Record<string, string>, contact: { nom: string; telephone: string; email: string }): string {
  const metier = METIERS.find((m) => m.id === metierId);
  const lignes: string[] = [
    `*Demande de devis — ${ENTREPRISE.nom}*`,
    ``,
    `*Métier :* ${metier?.nom ?? metierId}`,
    ``,
  ];

  const champs = FORMULAIRES[metierId] ?? [];
  for (const champ of champs) {
    const val = reponses[champ.id];
    if (val?.trim()) {
      lignes.push(`*${champ.label} :* ${val}`);
    }
  }

  lignes.push(``, `---`, `*Coordonnées :*`, `Nom : ${contact.nom}`, `Tél : ${contact.telephone}`, `Email : ${contact.email || "Non renseigné"}`);
  return lignes.join("\n");
}

export function DevisWizard() {
  const [etape, setEtape] = useState(0);
  const [metierId, setMetierId] = useState("");
  const [reponses, setReponses] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ nom: "", telephone: "", email: "" });
  const [envoye, setEnvoye] = useState(false);

  const metierChoisi = METIERS.find((m) => m.id === metierId);
  const champs = FORMULAIRES[metierId] ?? [];

  const majReponse = (id: string, valeur: string) => setReponses((p) => ({ ...p, [id]: valeur }));
  const majContact = (champ: string, valeur: string) => setContact((p) => ({ ...p, [champ]: valeur }));

  const message = useMemo(() => genererMessage(metierId, reponses, contact), [metierId, reponses, contact]);

  const suivant = () => {
    if (etape === 0 && !metierId) return;
    if (etape === 2 && (!contact.nom || !contact.telephone)) return;
    setEtape((p) => Math.min(p + 1, 3));
  };
  const precedent = () => setEtape((p) => Math.max(p - 1, 0));

  const telClean = ENTREPRISE.telephoneLien.replace("tel:+", "");
  const lienWhatsApp = `https://wa.me/${telClean}?text=${encodeURIComponent(message)}`;
  const lienEmail = `mailto:${ENTREPRISE.email}?subject=${encodeURIComponent(`Demande de devis — ${metierChoisi?.nom ?? ""}`)}&body=${encodeURIComponent(message)}`;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress */}
      <div className="mb-10 flex items-center justify-between">
        {ETAPES.map((e, i) => (
          <div key={e.numero} className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
              i <= etape ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
            }`}>
              {i < etape ? <Check className="h-4 w-4" /> : e.numero}
            </div>
            <span className={`hidden text-sm md:block ${i <= etape ? "text-marbre" : "text-muted-foreground"}`}>
              {e.titre}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Étape 1 */}
        {etape === 0 && (
          <motion.div key="e0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <p className="mono-plan mb-6 !text-primary">Sélectionnez le métier correspondant à vos travaux</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {METIERS.map((m) => {
                const actif = metierId === m.id;
                return (
                  <button key={m.id} onClick={() => { setMetierId(m.id); setReponses({}); }}
                    className={`group relative rounded-sm border p-5 text-left transition-all duration-300 ${
                      actif ? "border-primary bg-primary/5 shadow-[0_0_20px_oklch(0.72_0.132_42/0.1)]" : "border-border bg-card/30 hover:border-primary/30 hover:bg-card/50"
                    }`}
                  >
                    <span className={`mono-plan text-[0.55rem] ${actif ? "!text-primary" : "text-muted-foreground"}`}>
                      {m.couronne === "gros-oeuvre" ? "Gros œuvre" : "Finitions"}
                    </span>
                    <h3 className={`mt-1 font-display text-lg font-bold transition-colors ${actif ? "text-primary" : "text-marbre"}`}>{m.nom}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{m.resume}</p>
                    {actif && <motion.div layoutId="check" className="absolute right-3 top-3"><Check className="h-4 w-4 text-primary" /></motion.div>}
                  </button>
                );
              })}
            </div>
            <div className="mt-10 flex justify-end">
              <button onClick={suivant} disabled={!metierId}
                className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Suivant <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Étape 2 : formulaire spécifique au métier */}
        {etape === 1 && (
          <motion.div key="e1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <p className="mono-plan mb-6 !text-primary">{metierChoisi?.nom} — Décrivez votre projet</p>
            <div className="space-y-4">
              {champs.map((champ) => (
                <div key={champ.id}>
                  <label className="mono-plan block text-xs">{champ.label} {champ.obligatoire && <span className="text-primary">*</span>}</label>
                  {champ.type === "select" ? (
                    <select value={reponses[champ.id] ?? ""} onChange={(e) => majReponse(champ.id, e.target.value)}
                      className="mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Sélectionnez...</option>
                      {champ.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : champ.type === "textarea" ? (
                    <textarea value={reponses[champ.id] ?? ""} onChange={(e) => majReponse(champ.id, e.target.value)}
                      placeholder={champ.placeholder} rows={4}
                      className="mt-1.5 w-full resize-none rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  ) : (
                    <input value={reponses[champ.id] ?? ""} onChange={(e) => majReponse(champ.id, e.target.value)}
                      placeholder={champ.placeholder}
                      className="mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between">
              <button onClick={precedent} className="mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary">
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
              <button onClick={suivant} className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                Suivant <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Étape 3 : Coordonnées */}
        {etape === 2 && (
          <motion.div key="e2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <p className="mono-plan mb-6 !text-primary">Vos coordonnées</p>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="mono-plan block text-xs">Nom complet <span className="text-primary">*</span></label>
                <input value={contact.nom} onChange={(e) => majContact("nom", e.target.value)}
                  placeholder="Votre nom et prénom"
                  className="mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mono-plan block text-xs">Téléphone <span className="text-primary">*</span></label>
                <input value={contact.telephone} onChange={(e) => majContact("telephone", e.target.value)}
                  placeholder="06 XX XX XX XX"
                  className="mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mono-plan block text-xs">Email</label>
                <input value={contact.email} onChange={(e) => majContact("email", e.target.value)}
                  placeholder="votre@email.com"
                  className="mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <button onClick={precedent} className="mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary">
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
              <button onClick={suivant} className="mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                Récapitulatif <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Étape 4 : Récapitulatif & Envoi */}
        {etape === 3 && (
          <motion.div key="e3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <p className="mono-plan mb-6 !text-primary">Vérifiez votre demande avant envoi</p>

            <div className="rounded-sm border border-border bg-card/30 p-6">
              <p className="font-display text-lg font-bold text-marbre">{metierChoisi?.nom}</p>
              <div className="mt-4 space-y-2 text-sm">
                {champs.filter((c) => reponses[c.id]?.trim()).map((c) => (
                  <div key={c.id} className="flex gap-2">
                    <span className="shrink-0 text-muted-foreground">{c.label} :</span>
                    <span className="text-marbre">{reponses[c.id]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4 text-sm">
                <p className="text-muted-foreground">Nom : <span className="text-marbre">{contact.nom}</span></p>
                <p className="text-muted-foreground">Tél : <span className="text-marbre">{contact.telephone}</span></p>
                {contact.email && <p className="text-muted-foreground">Email : <span className="text-marbre">{contact.email}</span></p>}
              </div>
            </div>

            {!envoye ? (
              <div className="mt-8">
                <p className="mono-plan mb-4 text-xs">Choisissez votre moyen d'envoi</p>
                <div className="flex flex-wrap gap-3">
                  <a href={lienWhatsApp} target="_blank" rel="noopener noreferrer" onClick={() => setEnvoye(true)}
                    className="mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-6 py-4 text-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_30px_oklch(0.72_0.132_42/0.15)]"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" /> WhatsApp
                  </a>
                  <a href={lienEmail} onClick={() => setEnvoye(true)}
                    className="mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm transition-all duration-300 hover:border-primary/30 hover:!text-primary"
                  >
                    <Mail className="h-5 w-5" /> Email
                  </a>
                  <a href={ENTREPRISE.telephoneLien}
                    className="mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm transition-all duration-300 hover:border-primary/30 hover:!text-primary"
                  >
                    <Phone className="h-5 w-5" /> Appeler
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={precedent} className="mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary">
                    <ArrowLeft className="h-4 w-4" /> Retour
                  </button>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-sm border border-primary/30 bg-primary/5 p-8 text-center">
                <Check className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-3 font-display text-2xl font-bold text-marbre">Demande envoyée !</p>
                <p className="mt-2 text-sm text-muted-foreground">Merci {contact.nom} ! Nous vous répondons sous 48h maximum.</p>
                <a href="/" className="mono-plan mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                  Retour à l'accueil
                </a>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
