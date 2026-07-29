globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/3DMaterials/Cinder Block by Quaternius - lLkVKoJsKm.glb": {
		"type": "model/gltf-binary",
		"etag": "\"54fc-FO2gr7Mc1UlYA/sJUDZkNkX7CIU\"",
		"mtime": "2026-07-27T18:43:50.743Z",
		"size": 21756,
		"path": "../public/3DMaterials/Cinder Block by Quaternius - lLkVKoJsKm.glb"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"16-iUOtJ2RsHfdY9DoQxaq0wz1LZCU\"",
		"mtime": "2026-07-27T02:41:58.621Z",
		"size": 22,
		"path": "../public/robots.txt"
	},
	"/3DMaterials/Gardening Trowel by involuntary tsetse - 3Jrn0djxEEF.glb": {
		"type": "model/gltf-binary",
		"etag": "\"2820-64Onkc9y6ZBw+Bo1L13ybGzZJEo\"",
		"mtime": "2026-07-27T19:12:17.556Z",
		"size": 10272,
		"path": "../public/3DMaterials/Gardening Trowel by involuntary tsetse - 3Jrn0djxEEF.glb"
	},
	"/3DMaterials/Cube Bricks by Quaternius - c4sn88pFjP.glb": {
		"type": "model/gltf-binary",
		"etag": "\"c998-DbZES6nd1SvQSvtCP5Gece2SQ6M\"",
		"mtime": "2026-07-27T18:41:36.230Z",
		"size": 51608,
		"path": "../public/3DMaterials/Cube Bricks by Quaternius - c4sn88pFjP.glb"
	},
	"/3DMaterials/Ladder by CreativeTrio - p1RR8Ls9EH.glb": {
		"type": "model/gltf-binary",
		"etag": "\"5e24-mTj6RjMzG0G5oA/SIVQcsJlFKQ4\"",
		"mtime": "2026-07-27T19:11:20.620Z",
		"size": 24100,
		"path": "../public/3DMaterials/Ladder by CreativeTrio - p1RR8Ls9EH.glb"
	},
	"/3DMaterials/Paint Bucket by Don Carson - wOomnJNisB.glb": {
		"type": "model/gltf-binary",
		"etag": "\"b614-EO7ZSslDs1wUDCu5aG6RDO4G7WI\"",
		"mtime": "2026-07-27T18:40:48.832Z",
		"size": 46612,
		"path": "../public/3DMaterials/Paint Bucket by Don Carson - wOomnJNisB.glb"
	},
	"/3DMaterials/Paint Brush Large by reyshapes - Ha1JYRVRRX.glb": {
		"type": "model/gltf-binary",
		"etag": "\"820c-KSeC9OKNPK70QeHSbciG5GkE3q0\"",
		"mtime": "2026-07-27T18:40:15.424Z",
		"size": 33292,
		"path": "../public/3DMaterials/Paint Brush Large by reyshapes - Ha1JYRVRRX.glb"
	},
	"/3DMaterials/Paint roller by Poly by Google - eeYDEQ1jJi5.glb": {
		"type": "model/gltf-binary",
		"etag": "\"124a8-JGr34LBlO3AjfePER3k6/1y6QPI\"",
		"mtime": "2026-07-27T18:43:28.386Z",
		"size": 74920,
		"path": "../public/3DMaterials/Paint roller by Poly by Google - eeYDEQ1jJi5.glb"
	},
	"/3DMaterials/the wall hammer by Arnd Mnd - 42OZv60U293.glb": {
		"type": "model/gltf-binary",
		"etag": "\"6fc4-VFNSI//R+gOlXws0eILKr/J/2lk\"",
		"mtime": "2026-07-27T18:42:49.434Z",
		"size": 28612,
		"path": "../public/3DMaterials/the wall hammer by Arnd Mnd - 42OZv60U293.glb"
	},
	"/3DMaterials/Scaffolding by Marisha - 1_PM9UWLgAb.glb": {
		"type": "model/gltf-binary",
		"etag": "\"8dc4-NUpOaIuuMt8Mha54o5zSax7a8/o\"",
		"mtime": "2026-07-27T18:45:44.489Z",
		"size": 36292,
		"path": "../public/3DMaterials/Scaffolding by Marisha - 1_PM9UWLgAb.glb"
	},
	"/assets/a-propos-CB8xmqrl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48ad-sh887XcjPIRkmYpjxJ8ohtnkWbM\"",
		"mtime": "2026-07-29T01:16:40.916Z",
		"size": 18605,
		"path": "../public/assets/a-propos-CB8xmqrl.js"
	},
	"/3DMaterials/Wheelbarrow by Poly by Google - 6XpEkgDXwkU.glb": {
		"type": "model/gltf-binary",
		"etag": "\"ba6c-OtqdEBXpOeJvLxw/0ca3zMAL37s\"",
		"mtime": "2026-07-27T19:12:29.917Z",
		"size": 47724,
		"path": "../public/3DMaterials/Wheelbarrow by Poly by Google - 6XpEkgDXwkU.glb"
	},
	"/3DMaterials/Traffic Cone by Quaternius - lAx8JytxGD.glb": {
		"type": "model/gltf-binary",
		"etag": "\"2058-6bl5y6bpVu/PuENskgbwPjXVMxM\"",
		"mtime": "2026-07-27T19:11:43.140Z",
		"size": 8280,
		"path": "../public/3DMaterials/Traffic Cone by Quaternius - lAx8JytxGD.glb"
	},
	"/3DMaterials/Shovel by Quaternius - NrMejTU6kz.glb": {
		"type": "model/gltf-binary",
		"etag": "\"77b4-kA0ReQ7jq0vXhw3TAHJ/zUz7SOo\"",
		"mtime": "2026-07-27T18:52:39.629Z",
		"size": 30644,
		"path": "../public/3DMaterials/Shovel by Quaternius - NrMejTU6kz.glb"
	},
	"/assets/AnimatePresence-BKxDhuQc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1057-3cZewMPPVW9F/J2GtCS1JIj8kHE\"",
		"mtime": "2026-07-29T01:16:40.914Z",
		"size": 4183,
		"path": "../public/assets/AnimatePresence-BKxDhuQc.js"
	},
	"/assets/apres-cuisine-jPZ3DLtz.jpg": {
		"type": "image/jpeg",
		"etag": "\"22bdd-bSu1TzgklEFc3r80VQQ5UoE26L0\"",
		"mtime": "2026-07-29T01:16:40.928Z",
		"size": 142301,
		"path": "../public/assets/apres-cuisine-jPZ3DLtz.jpg"
	},
	"/assets/arrow-right-B_Egw2m_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-sukPG/i7DJUTZuMcPdSn1JedLxg\"",
		"mtime": "2026-07-29T01:16:40.916Z",
		"size": 159,
		"path": "../public/assets/arrow-right-B_Egw2m_.js"
	},
	"/assets/apres-salle-de-bain-U_UpSBzt.jpg": {
		"type": "image/jpeg",
		"etag": "\"15f8d-CzSOj0aWOtrKKk5rsqMIbY9SYbU\"",
		"mtime": "2026-07-29T01:16:40.931Z",
		"size": 89997,
		"path": "../public/assets/apres-salle-de-bain-U_UpSBzt.jpg"
	},
	"/assets/avant-cuisine-DtVN3OB_.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ddeb-dNx08SjwvIQQ4ew4BcOHlgjBAFs\"",
		"mtime": "2026-07-29T01:16:40.932Z",
		"size": 122347,
		"path": "../public/assets/avant-cuisine-DtVN3OB_.jpg"
	},
	"/assets/avant-salle-de-bain-C_fhtVpk.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ad81-JYC25admAH1SdUFvoN4oke1FGRI\"",
		"mtime": "2026-07-29T01:16:40.936Z",
		"size": 109953,
		"path": "../public/assets/avant-salle-de-bain-C_fhtVpk.jpg"
	},
	"/assets/demande-devis-DMKgqUQs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5192-SafHhg9X4/DMtnIsP5+ZzU04xv0\"",
		"mtime": "2026-07-29T01:16:40.917Z",
		"size": 20882,
		"path": "../public/assets/demande-devis-DMKgqUQs.js"
	},
	"/assets/chantier-artisan-B9NoOJEn.jpg": {
		"type": "image/jpeg",
		"etag": "\"1206e-8cTxGLXj4v+oe/vPR2KoLgvitNU\"",
		"mtime": "2026-07-29T01:16:40.936Z",
		"size": 73838,
		"path": "../public/assets/chantier-artisan-B9NoOJEn.jpg"
	},
	"/assets/apres-facade-N9CI0lSf.jpg": {
		"type": "image/jpeg",
		"etag": "\"f8265-BnTzGd/KcBKAcAm2auuWkK4101c\"",
		"mtime": "2026-07-29T01:16:40.930Z",
		"size": 1016421,
		"path": "../public/assets/apres-facade-N9CI0lSf.jpg"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"16332e-oEWB9x9HTH/4P7Ca+B93yF/BgKQ\"",
		"mtime": "2026-07-27T03:11:05.913Z",
		"size": 1454894,
		"path": "../public/favicon.ico"
	},
	"/assets/avant-facade-Db4qCyeZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"10af72-4PNGU/QX4QBVDqTIhJ6Wvp72rzo\"",
		"mtime": "2026-07-29T01:16:40.934Z",
		"size": 1093490,
		"path": "../public/assets/avant-facade-Db4qCyeZ.jpg"
	},
	"/assets/external-link-CuCW-4pl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"185-7dS0FkSFijctMPvfDNmHoxi19qM\"",
		"mtime": "2026-07-29T01:16:40.917Z",
		"size": 389,
		"path": "../public/assets/external-link-CuCW-4pl.js"
	},
	"/assets/facebook-DRCBpRrT.png": {
		"type": "image/png",
		"etag": "\"56c3-2BOmIQlL33UaNxDlnQISQVYWeoQ\"",
		"mtime": "2026-07-29T01:16:40.937Z",
		"size": 22211,
		"path": "../public/assets/facebook-DRCBpRrT.png"
	},
	"/assets/file-text-w9E3QaM1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"215-Sh+/4KNy+ovuascXFFc67ecWb9s\"",
		"mtime": "2026-07-29T01:16:40.919Z",
		"size": 533,
		"path": "../public/assets/file-text-w9E3QaM1.js"
	},
	"/assets/faq-C9ciGs5W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0f7-OTggQtPNhQlH9W6fSRs2rC2AJgE\"",
		"mtime": "2026-07-29T01:16:40.918Z",
		"size": 61687,
		"path": "../public/assets/faq-C9ciGs5W.js"
	},
	"/assets/gmail-BTtHKvoP.png": {
		"type": "image/png",
		"etag": "\"eeee-o8PW3UkXS3M2nA5VNqNoVOqySRo\"",
		"mtime": "2026-07-29T01:16:40.938Z",
		"size": 61166,
		"path": "../public/assets/gmail-BTtHKvoP.png"
	},
	"/assets/lenis-DoixeXP8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"478b-eR9WXRKFuR2+LeKEjUKVtcZq/1E\"",
		"mtime": "2026-07-29T01:16:40.920Z",
		"size": 18315,
		"path": "../public/assets/lenis-DoixeXP8.js"
	},
	"/assets/instagram-CN1RHPWu.png": {
		"type": "image/png",
		"etag": "\"1d83f-SITZuUj3j4HqkW0KIiuGfSjfqxA\"",
		"mtime": "2026-07-29T01:16:40.939Z",
		"size": 120895,
		"path": "../public/assets/instagram-CN1RHPWu.png"
	},
	"/assets/message-circle-COhnTD1o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb-aaBzVGUsrDH0RY9hkBnK9mR/c+U\"",
		"mtime": "2026-07-29T01:16:40.921Z",
		"size": 235,
		"path": "../public/assets/message-circle-COhnTD1o.js"
	},
	"/assets/phone-R6b4CZnW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dc-YobaSMVLlK7PVx7+WNnOjRxCMIw\"",
		"mtime": "2026-07-29T01:16:40.922Z",
		"size": 476,
		"path": "../public/assets/phone-R6b4CZnW.js"
	},
	"/assets/realisations-CiYvzAVP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4476-rmxZK69i+Avks6iL+UTLHR3+uNE\"",
		"mtime": "2026-07-29T01:16:40.923Z",
		"size": 17526,
		"path": "../public/assets/realisations-CiYvzAVP.js"
	},
	"/assets/maison-nuit-Bc23FkCz.jpg": {
		"type": "image/jpeg",
		"etag": "\"16b24-UaX5YcOzqZQ79NS28igd97BYxcA\"",
		"mtime": "2026-07-29T01:16:40.940Z",
		"size": 92964,
		"path": "../public/assets/maison-nuit-Bc23FkCz.jpg"
	},
	"/assets/sparkles-ZBczAPn1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48d-i7/zi1Qst+gJDP0EDTg1g2YL0rE\"",
		"mtime": "2026-07-29T01:16:40.926Z",
		"size": 1165,
		"path": "../public/assets/sparkles-ZBczAPn1.js"
	},
	"/assets/shield-_xaAJ_BK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10a-focsRc4Tz7bxtIQ0H3WmTClmY9A\"",
		"mtime": "2026-07-29T01:16:40.924Z",
		"size": 266,
		"path": "../public/assets/shield-_xaAJ_BK.js"
	},
	"/assets/PiedDePage-CtDmt4Jv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f689-P5e8gbJngPeg9HDhdj2qBqjP0fg\"",
		"mtime": "2026-07-29T01:16:40.914Z",
		"size": 128649,
		"path": "../public/assets/PiedDePage-CtDmt4Jv.js"
	},
	"/assets/index-DQCjWI1P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56453-Lr7slT84yDx3mFWR3Il/tz25QLM\"",
		"mtime": "2026-07-29T01:16:40.913Z",
		"size": 353363,
		"path": "../public/assets/index-DQCjWI1P.js"
	},
	"/assets/tiktok-DUJKB6mR.jpg": {
		"type": "image/jpeg",
		"etag": "\"8014-v48nXHW03+DtxzDVF9G+x8Kk/ow\"",
		"mtime": "2026-07-29T01:16:40.943Z",
		"size": 32788,
		"path": "../public/assets/tiktok-DUJKB6mR.jpg"
	},
	"/assets/use-lenis-6Z2S_38f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e9-kXHCUqbUZSDo6XWbnxy7Jdp7tWA\"",
		"mtime": "2026-07-29T01:16:40.926Z",
		"size": 489,
		"path": "../public/assets/use-lenis-6Z2S_38f.js"
	},
	"/assets/styles-DaggdsfC.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b205-aIbrEVEamHkzNBhmP48gUUBQlcM\"",
		"mtime": "2026-07-29T01:16:40.941Z",
		"size": 111109,
		"path": "../public/assets/styles-DaggdsfC.css"
	},
	"/assets/wrench-3pM9Tiqg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d-VMevINzvQ93X18/32fIRchgC7oc\"",
		"mtime": "2026-07-29T01:16:40.928Z",
		"size": 413,
		"path": "../public/assets/wrench-3pM9Tiqg.js"
	},
	"/assets/routes-BakSkQ6b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f84fc-SCaEPdqTbT/GGUhLdSSpC+uuqWI\"",
		"mtime": "2026-07-29T01:16:40.924Z",
		"size": 1017084,
		"path": "../public/assets/routes-BakSkQ6b.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_aRg7JY = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_aRg7JY
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
