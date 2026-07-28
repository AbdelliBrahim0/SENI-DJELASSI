import { useRef, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variante?: "cuivre" | "pierre";
  className?: string;
  onClick?: () => void;
};

/** Bouton magnétique : attire le curseur, compression au clic, rebond ressort. */
export function BoutonMagnetique({
  href,
  children,
  variante = "cuivre",
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const suivre = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 22;
    const dy = ((e.clientY - (r.top + r.height / 2)) / r.height) * 22;
    el.style.transform = `translate3d(${Math.max(-11, Math.min(11, dx))}px, ${Math.max(-11, Math.min(11, dy))}px, 0)`;
  };

  const relacher = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  const styles =
    variante === "cuivre"
      ? "bg-primary text-primary-foreground hover:brightness-110"
      : "border border-border bg-card/60 text-foreground backdrop-blur hover:border-primary/60";

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onPointerMove={suivre}
      onPointerLeave={relacher}
      onPointerDown={() => {
        if (ref.current) ref.current.style.scale = "0.94";
      }}
      onPointerUp={() => {
        if (ref.current) ref.current.style.scale = "1";
      }}
      className={`mono-plan inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 !text-[0.72rem] font-semibold transition-[transform,scale,filter,border-color] duration-500 [transition-timing-function:var(--ressort)] ${styles} ${className}`}
      style={{ boxShadow: variante === "cuivre" ? "var(--lueur-cuivre)" : undefined }}
    >
      {children}
    </a>
  );
}