import { a as __toESM } from "../_runtime.mjs";
import { r as METIERS, t as ENTREPRISE } from "./entreprise-CaGT3ssy.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { K as ArrowRight, V as Check, g as Phone, q as ArrowLeft, x as Mail, y as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as PiedDePage, t as Navbar } from "./PiedDePage-D92gajDM.mjs";
import { t as useLenis } from "./use-lenis-DxbRzcjf.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demande-devis-DqOTyd5D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMULAIRES = {
	maconnerie: [
		{
			id: "typeTravaux",
			label: "Type de travaux",
			type: "select",
			options: [
				"Mur porteur",
				"Cloison",
				"Enduit intérieur",
				"Enduit extérieur",
				"Terrasse",
				"Fondation",
				"Ouverture mur",
				"Reprise en sous-œuvre",
				"Autre"
			]
		},
		{
			id: "surfaceMur",
			label: "Surface approximative (m²)",
			type: "text",
			placeholder: "Ex: 50"
		},
		{
			id: "hauteur",
			label: "Hauteur sous plafond (m)",
			type: "text",
			placeholder: "Ex: 2.5"
		},
		{
			id: "typeBien",
			label: "Type de bien",
			type: "select",
			options: [
				"Appartement",
				"Maison",
				"Local commercial",
				"Immeuble",
				"Autre"
			]
		},
		{
			id: "acces",
			label: "Accès chantier",
			type: "select",
			options: [
				"Facile (rez-de-chaussée)",
				"Étage avec ascenseur",
				"Étage sans ascenseur",
				"Sous-sol",
				"Difficile"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description des travaux",
			type: "textarea",
			placeholder: "Décrivez précisément ce que vous souhaitez..."
		}
	],
	electricite: [
		{
			id: "typeInstallation",
			label: "Type d'installation",
			type: "select",
			options: [
				"Installation complète neuve",
				"Rénovation totale",
				"Mise aux normes",
				"Dépannage",
				"Ajout de prises/luminaires",
				"Tableau électrique"
			]
		},
		{
			id: "anneeBatiment",
			label: "Année du bâtiment",
			type: "text",
			placeholder: "Ex: 1985"
		},
		{
			id: "surface",
			label: "Surface concernée (m²)",
			type: "text",
			placeholder: "Ex: 70"
		},
		{
			id: "pieces",
			label: "Nombre de pièces",
			type: "text",
			placeholder: "Ex: 4"
		},
		{
			id: "typeBien",
			label: "Type de bien",
			type: "select",
			options: [
				"Appartement",
				"Maison",
				"Local commercial",
				"Bureau",
				"Autre"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description des besoins",
			type: "textarea",
			placeholder: "Décrivez précisément ce que vous souhaitez..."
		}
	],
	plomberie: [
		{
			id: "typeIntervention",
			label: "Type d'intervention",
			type: "select",
			options: [
				"Installation complète",
				"Rénovation",
				"Dépannage urgence",
				"Recherche de fuite",
				"Débouchage",
				"Remplacement chauffe-eau",
				"Sanitaires"
			]
		},
		{
			id: "etage",
			label: "Étage",
			type: "text",
			placeholder: "Ex: Rez-de-chaussée, 3ème..."
		},
		{
			id: "typeBien",
			label: "Type de bien",
			type: "select",
			options: [
				"Appartement",
				"Maison",
				"Local commercial",
				"Autre"
			]
		},
		{
			id: "piecesConcernees",
			label: "Pièces concernées",
			type: "select",
			options: [
				"Salle de bain",
				"Cuisine",
				"WC",
				"Buanderie",
				"Plusieurs pièces",
				"Tout le logement"
			]
		},
		{
			id: "urgent",
			label: "C'est une urgence ?",
			type: "select",
			options: ["Oui — fuite ou panne", "Non — travaux programmés"]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description du problème / besoin",
			type: "textarea",
			placeholder: "Décrivez précisément..."
		}
	],
	"renovation-complete": [
		{
			id: "typeProjet",
			label: "Type de projet",
			type: "select",
			options: [
				"Rénovation totale appartement",
				"Rénovation totale maison",
				"Rénovation partielle",
				"Rénovation local commercial",
				"Rénovation immeuble"
			]
		},
		{
			id: "surfaceTotale",
			label: "Surface totale (m²)",
			type: "text",
			placeholder: "Ex: 90"
		},
		{
			id: "nombrePieces",
			label: "Nombre de pièces",
			type: "text",
			placeholder: "Ex: 5"
		},
		{
			id: "anneeBatiment",
			label: "Année du bâtiment",
			type: "text",
			placeholder: "Ex: 1970"
		},
		{
			id: "etatActuel",
			label: "État actuel",
			type: "select",
			options: [
				"Bon état général",
				"À rafraîchir",
				"À rénover",
				"À réhabiliter",
				"Nu (sans finitions)"
			]
		},
		{
			id: "piecesConcernees",
			label: "Pièces à rénover",
			type: "textarea",
			placeholder: "Listez les pièces concernées et les travaux souhaités pour chacune"
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description détaillée du projet",
			type: "textarea",
			placeholder: "Décrivez votre vision, vos envies, vos contraintes..."
		}
	],
	peinture: [
		{
			id: "typeSurface",
			label: "Type de surface",
			type: "select",
			options: [
				"Murs intérieurs",
				"Plafonds",
				"Murs + plafonds",
				"Façade extérieure",
				"Boiseries/menuiseries",
				"Plusieurs types"
			]
		},
		{
			id: "surface",
			label: "Surface approximative (m²)",
			type: "text",
			placeholder: "Ex: 80"
		},
		{
			id: "nombrePieces",
			label: "Nombre de pièces",
			type: "text",
			placeholder: "Ex: 3"
		},
		{
			id: "etatSupports",
			label: "État des supports",
			type: "select",
			options: [
				"Bon état",
				"Petites fissures à reboucher",
				"Papier peint à enlever",
				"À ragréer",
				"Ne sait pas"
			]
		},
		{
			id: "typePeinture",
			label: "Type de peinture souhaité",
			type: "select",
			options: [
				"Glycero (laque)",
				"Acrylique (mate/satinée)",
				"Peinture écologique",
				"Ne sait pas",
				"Conseil souhaité"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description des travaux",
			type: "textarea",
			placeholder: "Décrivez ce que vous souhaitez..."
		}
	],
	carrelage: [
		{
			id: "typePose",
			label: "Type de pose",
			type: "select",
			options: [
				"Sol",
				"Mur",
				"Sol + mur",
				"Faïence décorative",
				"Plinthe"
			]
		},
		{
			id: "surfaceSol",
			label: "Surface au sol (m²)",
			type: "text",
			placeholder: "Ex: 30"
		},
		{
			id: "surfaceMurale",
			label: "Surface murale (m²)",
			type: "text",
			placeholder: "Ex: 20"
		},
		{
			id: "typePiece",
			label: "Type de pièce",
			type: "select",
			options: [
				"Salle de bain",
				"Cuisine",
				"Séjour",
				"Entrée",
				"Terrasse",
				"Plusieurs pièces"
			]
		},
		{
			id: "typeCarrelage",
			label: "Type de carrelage souhaité",
			type: "select",
			options: [
				"Grès cérame",
				"Pierre naturelle",
				"Faïence",
				"Carreau ciment",
				"Pâte de verre",
				"Ne sait pas / conseil"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description des travaux",
			type: "textarea",
			placeholder: "Décrivez précisément ce que vous souhaitez..."
		}
	],
	sols: [
		{
			id: "typePose",
			label: "Type de revêtement souhaité",
			type: "select",
			options: [
				"Parquet massif",
				"Parquet contrecollé",
				"Stratifié",
				"Vinyle / LVT",
				"Moquette",
				"Sol PVC",
				"Autre"
			]
		},
		{
			id: "surface",
			label: "Surface (m²)",
			type: "text",
			placeholder: "Ex: 40"
		},
		{
			id: "revetementActuel",
			label: "Revêtement actuel",
			type: "select",
			options: [
				"Carrelage",
				"Parquet ancien",
				"Moquette",
				"Vinyle",
				"Stratifié",
				"Chape / béton"
			]
		},
		{
			id: "typePiece",
			label: "Type de pièce",
			type: "select",
			options: [
				"Séjour",
				"Chambre",
				"Cuisine",
				"Couloir",
				"Bureau",
				"Tout le logement"
			]
		},
		{
			id: "travauxSupp",
			label: "Travaux supplémentaires",
			type: "select",
			options: [
				"Aucun",
				"Ragréage nécessaire",
				"Sous-couche",
				"Plinthes",
				"Ragréage + plinthes"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description des travaux",
			type: "textarea",
			placeholder: "Décrivez précisément ce que vous souhaitez..."
		}
	],
	"cuisine-sdb": [
		{
			id: "typePiece",
			label: "Type d'aménagement",
			type: "select",
			options: [
				"Cuisine complète",
				"Salle de bain complète",
				"Cuisine + salle de bain",
				"Rénovation cuisine",
				"Rénovation salle de bain"
			]
		},
		{
			id: "surface",
			label: "Surface de la pièce (m²)",
			type: "text",
			placeholder: "Ex: 12"
		},
		{
			id: "typeProjet",
			label: "Type de projet",
			type: "select",
			options: [
				"Neuf / Création",
				"Rénovation complète",
				"Rénovation partielle",
				"Reprise / rafraîchissement"
			]
		},
		{
			id: "travauxCompris",
			label: "Travaux inclus",
			type: "select",
			options: [
				"Aménagement seulement",
				"Plomberie incluse",
				"Électricité incluse",
				"Plomberie + électricité",
				"Tout compris (clé en main)"
			]
		},
		{
			id: "adresse",
			label: "Adresse du chantier",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description de votre projet",
			type: "textarea",
			placeholder: "Décrivez vos envies, le style recherché, les contraintes..."
		}
	],
	depannage: [
		{
			id: "typeUrgence",
			label: "Type d'urgence",
			type: "select",
			options: [
				"Électricité — panne / court-circuit",
				"Plomberie — fuite / débouchage",
				"Vitrerie — vitre cassée",
				"Serruerie — porte bloquée",
				"Petite réparation",
				"Autre"
			]
		},
		{
			id: "acces",
			label: "Accès au logement",
			type: "select",
			options: [
				"Je suis sur place",
				"Je peux laisser un accès",
				"Code ou digicode nécessaire"
			]
		},
		{
			id: "disponibilite",
			label: "Disponibilité",
			type: "select",
			options: [
				"Ce jour — immédiat",
				"Ce jour — après-midi",
				"Demain matin",
				"Demain après-midi",
				"Cette semaine"
			]
		},
		{
			id: "adresse",
			label: "Adresse d'intervention",
			type: "text",
			placeholder: "Numéro, rue, code postal, ville"
		},
		{
			id: "description",
			label: "Description rapide du problème",
			type: "textarea",
			placeholder: "Expliquez brièvement la situation..."
		}
	]
};
var ETAPES = [
	{
		numero: "01",
		titre: "Choisissez votre métier"
	},
	{
		numero: "02",
		titre: "Détails de votre projet"
	},
	{
		numero: "03",
		titre: "Vos coordonnées"
	},
	{
		numero: "04",
		titre: "Récapitulatif"
	}
];
function genererMessage(metierId, reponses, contact) {
	const metier = METIERS.find((m) => m.id === metierId);
	const lignes = [
		`*Demande de devis — ${ENTREPRISE.nom}*`,
		``,
		`*Métier :* ${metier?.nom ?? metierId}`,
		``
	];
	const champs = FORMULAIRES[metierId] ?? [];
	for (const champ of champs) {
		const val = reponses[champ.id];
		if (val?.trim()) lignes.push(`*${champ.label} :* ${val}`);
	}
	lignes.push(``, `---`, `*Coordonnées :*`, `Nom : ${contact.nom}`, `Tél : ${contact.telephone}`, `Email : ${contact.email || "Non renseigné"}`);
	return lignes.join("\n");
}
function DevisWizard() {
	const [etape, setEtape] = (0, import_react.useState)(0);
	const [metierId, setMetierId] = (0, import_react.useState)("");
	const [reponses, setReponses] = (0, import_react.useState)({});
	const [contact, setContact] = (0, import_react.useState)({
		nom: "",
		telephone: "",
		email: ""
	});
	const [envoye, setEnvoye] = (0, import_react.useState)(false);
	const metierChoisi = METIERS.find((m) => m.id === metierId);
	const champs = FORMULAIRES[metierId] ?? [];
	const majReponse = (id, valeur) => setReponses((p) => ({
		...p,
		[id]: valeur
	}));
	const majContact = (champ, valeur) => setContact((p) => ({
		...p,
		[champ]: valeur
	}));
	const message = (0, import_react.useMemo)(() => genererMessage(metierId, reponses, contact), [
		metierId,
		reponses,
		contact
	]);
	const suivant = () => {
		if (etape === 0 && !metierId) return;
		if (etape === 2 && (!contact.nom || !contact.telephone)) return;
		setEtape((p) => Math.min(p + 1, 3));
	};
	const precedent = () => setEtape((p) => Math.max(p - 1, 0));
	const lienWhatsApp = `https://wa.me/${ENTREPRISE.telephoneLien.replace("tel:+", "")}?text=${encodeURIComponent(message)}`;
	const lienEmail = `mailto:${ENTREPRISE.email}?subject=${encodeURIComponent(`Demande de devis — ${metierChoisi?.nom ?? ""}`)}&body=${encodeURIComponent(message)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-10 flex items-center justify-between",
			children: ETAPES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${i <= etape ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`,
					children: i < etape ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : e.numero
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `hidden text-sm md:block ${i <= etape ? "text-marbre" : "text-muted-foreground"}`,
					children: e.titre
				})]
			}, e.numero))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
			mode: "wait",
			children: [
				etape === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -30
					},
					transition: { duration: .3 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono-plan mb-6 !text-primary",
							children: "Sélectionnez le métier correspondant à vos travaux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: METIERS.map((m) => {
								const actif = metierId === m.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setMetierId(m.id);
										setReponses({});
									},
									className: `group relative rounded-sm border p-5 text-left transition-all duration-300 ${actif ? "border-primary bg-primary/5 shadow-[0_0_20px_oklch(0.72_0.132_42/0.1)]" : "border-border bg-card/30 hover:border-primary/30 hover:bg-card/50"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `mono-plan text-[0.55rem] ${actif ? "!text-primary" : "text-muted-foreground"}`,
											children: m.couronne === "gros-oeuvre" ? "Gros œuvre" : "Finitions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `mt-1 font-display text-lg font-bold transition-colors ${actif ? "text-primary" : "text-marbre"}`,
											children: m.nom
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: m.resume
										}),
										actif && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											layoutId: "check",
											className: "absolute right-3 top-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" })
										})
									]
								}, m.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: suivant,
								disabled: !metierId,
								className: "mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40",
								children: ["Suivant ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				}, "e0"),
				etape === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -30
					},
					transition: { duration: .3 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mono-plan mb-6 !text-primary",
							children: [metierChoisi?.nom, " — Décrivez votre projet"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: champs.map((champ) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mono-plan block text-xs",
								children: [
									champ.label,
									" ",
									champ.obligatoire && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})
								]
							}), champ.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: reponses[champ.id] ?? "",
								onChange: (e) => majReponse(champ.id, e.target.value),
								className: "mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Sélectionnez..."
								}), champ.options?.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o,
									children: o
								}, o))]
							}) : champ.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: reponses[champ.id] ?? "",
								onChange: (e) => majReponse(champ.id, e.target.value),
								placeholder: champ.placeholder,
								rows: 4,
								className: "mt-1.5 w-full resize-none rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: reponses[champ.id] ?? "",
								onChange: (e) => majReponse(champ.id, e.target.value),
								placeholder: champ.placeholder,
								className: "mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
							})] }, champ.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: precedent,
								className: "mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: suivant,
								className: "mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90",
								children: ["Suivant ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}, "e1"),
				etape === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -30
					},
					transition: { duration: .3 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono-plan mb-6 !text-primary",
							children: "Vos coordonnées"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mono-plan block text-xs",
									children: ["Nom complet ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: contact.nom,
									onChange: (e) => majContact("nom", e.target.value),
									placeholder: "Votre nom et prénom",
									className: "mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mono-plan block text-xs",
									children: ["Téléphone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: contact.telephone,
									onChange: (e) => majContact("telephone", e.target.value),
									placeholder: "06 XX XX XX XX",
									className: "mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mono-plan block text-xs",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: contact.email,
									onChange: (e) => majContact("email", e.target.value),
									placeholder: "votre@email.com",
									className: "mt-1.5 w-full rounded-sm border border-input bg-background/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: precedent,
								className: "mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: suivant,
								className: "mono-plan inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90",
								children: ["Récapitulatif ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}, "e2"),
				etape === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -30
					},
					transition: { duration: .3 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono-plan mb-6 !text-primary",
							children: "Vérifiez votre demande avant envoi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-sm border border-border bg-card/30 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold text-marbre",
									children: metierChoisi?.nom
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-2 text-sm",
									children: champs.filter((c) => reponses[c.id]?.trim()).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "shrink-0 text-muted-foreground",
											children: [c.label, " :"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-marbre",
											children: reponses[c.id]
										})]
									}, c.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 border-t border-border pt-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted-foreground",
											children: ["Nom : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-marbre",
												children: contact.nom
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted-foreground",
											children: ["Tél : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-marbre",
												children: contact.telephone
											})]
										}),
										contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted-foreground",
											children: ["Email : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-marbre",
												children: contact.email
											})]
										})
									]
								})
							]
						}),
						!envoye ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mono-plan mb-4 text-xs",
									children: "Choisissez votre moyen d'envoi"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: lienWhatsApp,
											target: "_blank",
											rel: "noopener noreferrer",
											onClick: () => setEnvoye(true),
											className: "mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-6 py-4 text-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_30px_oklch(0.72_0.132_42/0.15)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-primary" }), " WhatsApp"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: lienEmail,
											onClick: () => setEnvoye(true),
											className: "mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm transition-all duration-300 hover:border-primary/30 hover:!text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }), " Email"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: ENTREPRISE.telephoneLien,
											className: "mono-plan flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm transition-all duration-300 hover:border-primary/30 hover:!text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }), " Appeler"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: precedent,
										className: "mono-plan inline-flex items-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:border-primary/50 hover:!text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour"]
									})
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "mt-8 rounded-sm border border-primary/30 bg-primary/5 p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-10 w-10 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-2xl font-bold text-marbre",
									children: "Demande envoyée !"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [
										"Merci ",
										contact.nom,
										" ! Nous vous répondons sous 48h maximum."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/",
									className: "mono-plan mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 !text-primary-foreground transition-all duration-300 hover:bg-primary/90",
									children: "Retour à l'accueil"
								})
							]
						})
					]
				}, "e3")
			]
		})]
	});
}
function PageDemandeDevis() {
	useLenis();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 pointer-events-none opacity-10",
					style: { background: "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.72 0.132 42) 0%, transparent 70%)" },
					animate: {
						scale: [
							1,
							1.05,
							1
						],
						opacity: [
							.08,
							.12,
							.08
						]
					},
					transition: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-5xl px-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "mono-plan !text-primary",
							children: "Devis gratuit — Sans engagement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .15,
								duration: .7
							},
							className: "texte-grave mt-4 text-[clamp(3rem,8vw,7rem)] font-black",
							children: [
								"Décrivez votre ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"projet"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .3,
								duration: .6
							},
							className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
							children: "Répondez aux étapes ci-dessous pour nous permettre de comprendre précisément votre besoin. Un devis détaillé vous sera envoyé sous 48h."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 pb-24 md:px-14 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevisWizard, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiedDePage, {})
		]
	});
}
//#endregion
export { PageDemandeDevis as component };
