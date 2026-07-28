import { useEffect, useState, type ReactNode } from "react";

/** Rend ses enfants uniquement après hydratation (WebGL, mesures DOM...). */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [monte, setMonte] = useState(false);
  useEffect(() => setMonte(true), []);
  return <>{monte ? children : fallback}</>;
}

/** Détection WebGL + connexion faible → mode dégradé 2D. */
export function useRenduRiche() {
  const [riche, setRiche] = useState(false);

  useEffect(() => {
    try {
      const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
        .connection;
      const lent =
        conn?.saveData === true || ["slow-2g", "2g"].includes(conn?.effectiveType ?? "");
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      setRiche(Boolean(gl) && !reduit && !lent);
    } catch {
      setRiche(false);
    }
  }, []);

  return riche;
}