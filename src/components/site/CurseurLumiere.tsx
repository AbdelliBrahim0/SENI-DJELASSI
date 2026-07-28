import { useEffect, useRef } from "react";

/** Curseur global : lumière radiale cuivre qui suit le pointeur avec inertie. */
export function CurseurLumiere() {
  const halo = useRef<HTMLDivElement>(null);
  const point = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cible = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const doux = { ...cible };
    let raf = 0;

    const bouge = (e: PointerEvent) => {
      cible.x = e.clientX;
      cible.y = e.clientY;
      if (point.current) {
        point.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const boucle = () => {
      doux.x += (cible.x - doux.x) * 0.12;
      doux.y += (cible.y - doux.y) * 0.12;
      if (halo.current) {
        halo.current.style.transform = `translate3d(${doux.x - 220}px, ${doux.y - 220}px, 0)`;
      }
      raf = requestAnimationFrame(boucle);
    };

    window.addEventListener("pointermove", bouge, { passive: true });
    raf = requestAnimationFrame(boucle);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("pointermove", bouge);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        ref={halo}
        className="absolute left-0 top-0 h-[440px] w-[440px] rounded-full opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.132 42 / 22%) 0%, oklch(0.72 0.132 42 / 8%) 35%, transparent 68%)",
        }}
      />
      <div
        ref={point}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-primary"
        style={{ boxShadow: "var(--lueur-cuivre)" }}
      />
    </div>
  );
}