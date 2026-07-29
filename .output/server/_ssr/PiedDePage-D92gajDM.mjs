import { a as __toESM } from "../_runtime.mjs";
import { a as SLOGANS, n as GARANTIES, r as METIERS, t as ENTREPRISE } from "./entreprise-CaGT3ssy.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Menu, n as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PiedDePage-D92gajDM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LIENS = [
	{
		nom: "Accueil",
		to: "/"
	},
	{
		nom: "À propos",
		to: "/a-propos"
	},
	{
		nom: "Réalisations",
		to: "/realisations"
	},
	{
		nom: "FAQ",
		to: "/faq"
	}
];
function Navbar() {
	const [ouvert, setOuvert] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ouvert) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [ouvert]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-lg" : "bg-transparent py-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 md:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-2xl font-black uppercase tracking-wider text-marbre transition-colors hover:text-primary z-50 relative",
					onClick: () => setOuvert(false),
					children: ["Seni ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Djelassi"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-8",
						children: LIENS.map((lien) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: lien.to,
							className: "mono-plan text-sm text-muted-foreground transition-colors hover:text-primary",
							onClick: () => setOuvert(false),
							children: lien.nom
						}) }, lien.nom))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demande-devis",
						className: "mono-plan rounded-sm bg-primary px-5 py-2.5 text-sm !text-primary-foreground transition-transform hover:scale-105",
						children: "Demander un Service"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur transition-colors hover:border-primary",
					onClick: () => setOuvert(!ouvert),
					"aria-label": ouvert ? "Fermer le menu" : "Ouvrir le menu",
					children: ouvert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-marbre" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5 text-marbre" })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${ouvert ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-20 pointer-events-none",
				style: { background: "radial-gradient(circle at 50% 50%, oklch(0.72 0.132 42) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-10 flex flex-col items-center gap-8 text-center w-full px-5",
				children: [LIENS.map((lien, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: lien.to,
					onClick: () => setOuvert(false),
					className: "font-display text-4xl uppercase text-marbre hover:text-primary transition-colors",
					style: {
						opacity: ouvert ? 1 : 0,
						transform: ouvert ? "translateY(0)" : "translateY(20px)",
						transition: `all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${100 + index * 50}ms`
					},
					children: lien.nom
				}, lien.nom)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 w-full max-w-xs",
					style: {
						opacity: ouvert ? 1 : 0,
						transform: ouvert ? "translateY(0)" : "translateY(20px)",
						transition: `all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${100 + LIENS.length * 50}ms`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demande-devis",
						onClick: () => setOuvert(false),
						className: "mono-plan flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-base !text-primary-foreground shadow-[0_0_20px_oklch(0.72_0.132_42/0.4)]",
						children: "Demander un devis"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-10 left-0 right-0 text-center",
				style: {
					opacity: ouvert ? 1 : 0,
					transition: `opacity 400ms ease ${300 + LIENS.length * 50}ms`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mono-plan text-muted-foreground text-xs uppercase tracking-widest",
					children: "Marseille · Toulon · Nice"
				})
			})
		]
	})] });
}
/** Pied de page HTML classique — crawl SEO local. */
function PiedDePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background px-5 pb-32 pt-16 md:px-14 md:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl uppercase text-marbre",
							children: ENTREPRISE.nom
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mono-plan mt-2",
							children: ENTREPRISE.baseline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: ENTREPRISE.activite
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: SLOGANS.satisfaction
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mono-plan !text-primary",
						children: "Nos prestations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1 text-sm text-muted-foreground",
						children: METIERS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							m.nom,
							" — ",
							m.resume
						] }, m.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mono-plan !text-primary",
							children: "Zone d'intervention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "Marseille · Toulon · Nice et alentours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm text-muted-foreground",
							children: ENTREPRISE.departements.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mono-plan mt-6 !text-primary",
							children: "Garanties"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-sm text-muted-foreground",
							children: GARANTIES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								g.titre,
								" — ",
								g.detail
							] }, g.code))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mono-plan !text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: ENTREPRISE.telephoneLien,
							className: "mt-4 block font-display text-3xl uppercase text-marbre hover:text-primary",
							children: ENTREPRISE.telephone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${ENTREPRISE.email}`,
							className: "mt-2 block text-sm text-muted-foreground hover:text-primary",
							children: ENTREPRISE.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-3",
							children: ENTREPRISE.reseaux.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: r.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mono-plan rounded-full border border-border px-3 py-2 transition-colors hover:border-primary hover:!text-primary",
								children: r.nom
							}) }, r.nom))
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mono-plan mx-auto mt-12 max-w-7xl border-t border-border pt-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					ENTREPRISE.nom,
					" — ",
					ENTREPRISE.baseline,
					" · Rénovation & BTP à Marseille, Toulon, Nice · Devis gratuit"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-8 max-w-7xl text-center text-sm italic tracking-wide",
				style: {
					fontFamily: "'Dancing Script', cursive",
					color: "#FFC107"
				},
				children: "code by 3b2li || decode if you can."
			})
		]
	});
}
//#endregion
export { PiedDePage as n, Navbar as t };
