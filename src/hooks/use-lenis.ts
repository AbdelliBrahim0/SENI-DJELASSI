import { useEffect } from "react";

/** Smooth scroll inertiel (Lenis), chargé uniquement côté client. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let detruire: (() => void) | undefined;
    let raf = 0;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      const boucle = (t: number) => {
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