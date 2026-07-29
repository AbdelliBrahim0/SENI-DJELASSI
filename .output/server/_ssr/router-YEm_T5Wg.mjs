import { a as __toESM } from "../_runtime.mjs";
import { a as SLOGANS, r as METIERS, t as ENTREPRISE } from "./entreprise-CaGT3ssy.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-YEm_T5Wg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DaggdsfC.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SENI DJELASSI — Tout Corps d'État" },
			{
				name: "description",
				content: "Rénovation & BTP tout corps d'état à Marseille, Toulon et Nice. Devis gratuit."
			},
			{
				name: "author",
				content: "SENI DJELASSI"
			},
			{
				property: "og:title",
				content: "SENI DJELASSI — Tout Corps d'État"
			},
			{
				property: "og:description",
				content: "Rénovation & BTP tout corps d'état à Marseille, Toulon et Nice. Devis gratuit."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700;800;900&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Dancing+Script:wght@400;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Dq53EU-0.mjs");
var TITRE = "SENI DJELASSI — Rénovation & BTP à Marseille, Toulon, Nice";
var DESCRIPTION = "Entreprise tout corps d'état : peinture, plomberie, électricité, maçonnerie, carrelage, rénovation complète. Marseille, Toulon, Nice. Devis gratuit — 07 45 57 64 14.";
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITRE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITRE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "GeneralContractor",
				name: `${ENTREPRISE.nom} — ${ENTREPRISE.baseline}`,
				description: DESCRIPTION,
				telephone: "+33745576414",
				email: ENTREPRISE.email,
				areaServed: [
					"Marseille",
					"Toulon",
					"Nice",
					"Bouches-du-Rhône",
					"Var",
					"Alpes-Maritimes"
				],
				slogan: SLOGANS.principal,
				makesOffer: METIERS.map((m) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: m.nom,
						description: m.resume
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./a-propos-BFeRhiSt.mjs");
var Route$4 = createFileRoute("/a-propos")({
	head: () => ({ meta: [{ title: "À propos — SENI DJELASSI" }, {
		name: "description",
		content: `Découvrez l'histoire, les moyens techniques, l'engagement environnemental et l'équipe de ${ENTREPRISE.nom} — ${ENTREPRISE.baseline}.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./demande-devis-DqOTyd5D.mjs");
var Route$3 = createFileRoute("/demande-devis")({
	head: () => ({ meta: [{ title: `Demande de devis — ${ENTREPRISE.nom}` }, {
		name: "description",
		content: "Formulaire intelligent de demande de devis. Sélectionnez votre métier, décrivez vos travaux et recevez un devis personnalisé sous 48h."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./faq-CxVelZUK.mjs");
var Route$2 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ — SENI DJELASSI" }, {
		name: "description",
		content: "Questions fréquentes sur nos services, devis, garanties, délais et interventions. Tout ce que vous devez savoir avant vos travaux."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./realisations-B-RKUWZn.mjs");
var Route$1 = createFileRoute("/realisations")({
	head: () => ({ meta: [{ title: "Nos Réalisations — SENI DJELASSI" }, {
		name: "description",
		content: "Découvrez nos projets de rénovation et BTP à Marseille, Toulon et Nice : salles de bain, cuisines, façades et plus."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var BASE_URL = "";
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		}].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AProposRoute: Route$4.update({
		id: "/a-propos",
		path: "/a-propos",
		getParentRoute: () => Route$6
	}),
	DemandeDevisRoute: Route$3.update({
		id: "/demande-devis",
		path: "/demande-devis",
		getParentRoute: () => Route$6
	}),
	FaqRoute: Route$2.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$6
	}),
	RealisationsRoute: Route$1.update({
		id: "/realisations",
		path: "/realisations",
		getParentRoute: () => Route$6
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
