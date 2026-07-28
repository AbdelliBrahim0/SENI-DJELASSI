import { useEffect, useRef, useState } from "react";
import { GARANTIES, SLOGANS } from "@/lib/entreprise";

/** ACTE 1 — La Fondation. Le béton coule, les slogans se gravent. */
export function ActeFondation() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const maj = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    return () => {
      window.removeEventListener("scroll", maj);
      window.removeEventListener("resize", maj);
    };
  }, []);

  const etape1 = Math.min(1, p / 0.25);
  const etape2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const etape3 = Math.min(1, Math.max(0, (p - 0.45) / 0.35));

  return (
    <section
      ref={ref}
      id="manifeste"
      className="relative h-[200svh] bg-background"
      aria-label="Notre manifeste"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-5 md:px-14">
        {/* Béton coulé, montée progressive */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: `${20 + p * 90}%`,
            background:
              "linear-gradient(180deg, oklch(0.24 0.012 62) 0%, oklch(0.17 0.008 62) 45%, oklch(0.13 0.006 62) 100%)",
            filter: "blur(0.2px)",
            transition: "height 120ms linear",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, oklch(0.98 0.01 85 / 3%) 0 2px, transparent 2px 7px)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">

          <h2
            className="texte-grave mt-8 max-w-4xl text-[clamp(2.2rem,6.4vw,5.4rem)] font-black leading-[0.95]"
            style={{
              opacity: etape1,
              transform: `translateY(${(1 - etape1) * 40}px)`,
            }}
          >
            {SLOGANS.expertise}
          </h2>

          <h3
            className="texte-grave mt-10 max-w-4xl text-[clamp(1.6rem,4.2vw,3.4rem)] font-black leading-[0.95] !text-marbre/80"
            style={{
              opacity: etape2,
              transform: `translateY(${(1 - etape2) * 40}px)`,
            }}
          >
            {SLOGANS.satisfaction}
          </h3>

          <ul
            className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
            style={{
              opacity: Math.min(1, etape3 * 4),
              transition: "opacity 200ms linear",
            }}
          >
            {GARANTIES.map((g, i) => (
              <li
                key={g.code}
                className="group relative bg-card/80 p-5 transition-colors duration-500 hover:bg-card"
                style={{
                  opacity: Math.min(1, Math.max(0, etape3 * 5 - i * 0.7)),
                  transform: `translateY(${(1 - Math.min(1, Math.max(0, etape3 * 5 - i * 0.7))) * 20}px)`,
                  transition: "opacity 300ms linear, transform 300ms var(--ressort)",
                }}
              >
                <span className="mono-plan block !text-primary">{g.code}</span>
                <span className="mt-3 block font-display text-2xl uppercase leading-none text-marbre">
                  {g.titre}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{g.detail}</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(140deg, oklch(0.72 0.132 42 / 14%), transparent 60%)",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
