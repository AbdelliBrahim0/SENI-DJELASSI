import { a as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-lenis-DxbRzcjf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Smooth scroll inertiel (Lenis), chargé uniquement côté client. */
function useLenis() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let detruire;
		let raf = 0;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			const lenis = new Lenis({
				duration: 1.15,
				smoothWheel: true
			});
			const boucle = (t) => {
				lenis.raf(t);
				raf = requestAnimationFrame(boucle);
			};
			raf = requestAnimationFrame(boucle);
			detruire = () => {
				cancelAnimationFrame(raf);
				lenis.destroy();
			};
		});
		return () => detruire?.();
	}, []);
}
//#endregion
export { useLenis as t };
