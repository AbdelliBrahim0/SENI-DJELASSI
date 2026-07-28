import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const LIENS = [
  { nom: "Accueil", to: "/" },
  { nom: "À propos", to: "/a-propos" },
  { nom: "Réalisations", to: "/realisations" },
  { nom: "FAQ", to: "/faq" },
];

export function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (ouvert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [ouvert]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-lg" : "bg-transparent py-6"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-14">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-black uppercase tracking-wider text-marbre transition-colors hover:text-primary z-50 relative"
            onClick={() => setOuvert(false)}
          >
            Seni <span className="text-primary">Djelassi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {LIENS.map((lien) => (
                <li key={lien.nom}>
                  <Link
                    to={lien.to}
                    className="mono-plan text-sm text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setOuvert(false)}
                  >
                    {lien.nom}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/demande-devis"
              className="mono-plan rounded-sm bg-primary px-5 py-2.5 text-sm !text-primary-foreground transition-transform hover:scale-105"
            >
              Demander un Service
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur transition-colors hover:border-primary"
            onClick={() => setOuvert(!ouvert)}
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {ouvert ? (
              <X className="h-5 w-5 text-marbre" />
            ) : (
              <Menu className="h-5 w-5 text-marbre" />
            )}
          </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${ouvert ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, oklch(0.72 0.132 42) 0%, transparent 70%)"
          }}
        />

        <nav className="relative z-10 flex flex-col items-center gap-8 text-center w-full px-5">
          {LIENS.map((lien, index) => (
            <Link
              key={lien.nom}
              to={lien.to}
              onClick={() => setOuvert(false)}
              className="font-display text-4xl uppercase text-marbre hover:text-primary transition-colors"
              style={{
                opacity: ouvert ? 1 : 0,
                transform: ouvert ? "translateY(0)" : "translateY(20px)",
                transition: `all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${100 + index * 50}ms`
              }}
            >
              {lien.nom}
            </Link>
          ))}

          <div
            className="mt-8 w-full max-w-xs"
            style={{
              opacity: ouvert ? 1 : 0,
              transform: ouvert ? "translateY(0)" : "translateY(20px)",
              transition: `all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${100 + LIENS.length * 50}ms`
            }}
          >
            <Link
              to="/demande-devis"
              onClick={() => setOuvert(false)}
              className="mono-plan flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-base !text-primary-foreground shadow-[0_0_20px_oklch(0.72_0.132_42/0.4)]"
            >
              Demander un devis
            </Link>
          </div>
        </nav>

        {/* Footer info in menu */}
        <div
          className="absolute bottom-10 left-0 right-0 text-center"
          style={{
            opacity: ouvert ? 1 : 0,
            transition: `opacity 400ms ease ${300 + LIENS.length * 50}ms`
          }}
        >
          <p className="mono-plan text-muted-foreground text-xs uppercase tracking-widest">
            Marseille · Toulon · Nice
          </p>
        </div>
      </div>
    </>
  );
}
