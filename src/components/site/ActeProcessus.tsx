import { useEffect, useRef, useState } from "react";
import { Timer, ArrowRight } from "lucide-react";

const ETAPES = [
  {
    num: "01",
    titre: "Consultation initiale",
    desc: "Évaluation sur site, prise de cotes et écoute active de vos besoins pour poser les jalons du projet.",
    delai: "2-4 semaines",
  },
  {
    num: "02",
    titre: "Étude & Devis",
    desc: "Élaboration des plans détaillés, chiffrage précis et proposition tarifaire transparente sans surprise.",
    delai: "2-3 semaines",
  },
  {
    num: "03",
    titre: "Préparation & Permis",
    desc: "Démarches administratives, autorisations et planification des approvisionnements en matériaux.",
    delai: "1-4 semaines",
  },
  {
    num: "04",
    titre: "Réalisation",
    desc: "Exécution des travaux par nos artisans qualifiés selon le calendrier validé, avec un interlocuteur unique.",
    delai: "Variable",
  },
  {
    num: "05",
    titre: "Suivi qualité",
    desc: "Inspections régulières à chaque phase clé pour garantir la conformité aux règles de l'art.",
    delai: "Continu",
  },
  {
    num: "06",
    titre: "Livraison finale",
    desc: "Présentation détaillée des finitions, remise des clés et dossier de garantie décennale.",
    delai: "1 jour",
  },
];

export function ActeProcessus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - windowHeight / 2;
      const end = rect.bottom - windowHeight / 2 - 300;
      const total = end - start;
      
      let p = -start / total;
      p = Math.max(0, Math.min(1, p));
      
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="processus" className="relative overflow-hidden bg-background py-24 md:py-32" aria-label="Notre processus">
      {/* Lumière d'ambiance en arrière-plan */}
      <div 
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.132 42 / 20%) 0%, transparent 70%)",
          transform: `translate(-50%, -50%) translateY(${progress * 200}px)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-14">

        <h2 className="texte-grave mt-6 max-w-4xl text-[clamp(2.4rem,7vw,6rem)] font-black">
          Transformer
          <br />
          votre vision
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Six étapes maîtrisées, de l'idée brute à la finition parfaite. Un seul interlocuteur pour vous accompagner.
        </p>

        <div className="relative mt-24 max-w-5xl mx-auto pl-10 md:pl-20">
          {/* Ligne de progression (Poutre centrale) */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-6">
            {/* Ligne lumineuse qui descend */}
            <div 
              className="absolute top-0 left-1/2 w-[3px] -translate-x-1/2 bg-primary" 
              style={{ 
                height: `${progress * 100}%`,
                boxShadow: "0 0 20px 2px oklch(0.72 0.132 42 / 80%)",
                transition: "height 200ms ease-out"
              }} 
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {ETAPES.map((etape, index) => {
              // Calculer quand l'étape devient active
              const threshold = index / (ETAPES.length - 1);
              // Plus on avance, plus la zone active est large
              const distance = Math.abs(progress - threshold);
              const isActif = progress >= threshold - 0.05;
              const isPleineLumiere = distance < 0.15;

              return (
                <div key={index} className="relative group">
                  {/* Point sur la ligne (Rivet) */}
                  <div 
                    className="absolute -left-10 top-8 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm bg-background md:-left-[4.5rem] md:h-14 md:w-14"
                    style={{
                      borderColor: isActif ? "var(--color-primary)" : "var(--color-border)",
                      borderWidth: "1px",
                      boxShadow: isPleineLumiere ? "0 0 25px oklch(0.72 0.132 42 / 50%), inset 0 0 10px oklch(0.72 0.132 42 / 20%)" : "none",
                      transform: `translate(-50%, -50%) rotate(45deg) scale(${isPleineLumiere ? 1.1 : 1})`,
                      transition: "all 500ms var(--ressort)",
                    }}
                  >
                    <div 
                      className="h-2 w-2 rounded-full md:h-3 md:w-3"
                      style={{ 
                        background: isActif ? "var(--color-primary)" : "var(--color-border)",
                        boxShadow: isActif ? "0 0 10px var(--color-primary)" : "none",
                        transition: "all 300ms",
                      }}
                    />
                  </div>

                  {/* Carte Contenu (Plaque de béton/métal) */}
                  <div 
                    className="relative overflow-hidden rounded-sm border border-border bg-card/60 p-8 md:p-12 transition-all duration-700 backdrop-blur-md"
                    style={{
                      transform: isActif ? "translateX(0) scale(1)" : "translateX(40px) scale(0.96)",
                      opacity: isActif ? 1 : 0.3,
                      borderColor: isPleineLumiere ? "oklch(0.72 0.132 42 / 40%)" : "var(--color-border)",
                      background: isPleineLumiere 
                        ? "linear-gradient(145deg, oklch(0.22 0.014 62 / 80%) 0%, oklch(0.14 0.007 62 / 80%) 100%)" 
                        : "oklch(0.18 0.01 62 / 60%)",
                      boxShadow: isPleineLumiere ? "var(--shadow-profond)" : "none",
                    }}
                  >
                    {/* Numéro géant en filigrane */}
                    <span 
                      aria-hidden
                      className="absolute -right-4 -bottom-8 text-[140px] font-black leading-none pointer-events-none transition-all duration-1000"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: isPleineLumiere ? "2px oklch(0.72 0.132 42 / 10%)" : "2px oklch(0.28 0.02 62 / 20%)",
                        transform: isPleineLumiere ? "translateY(0) scale(1.05)" : "translateY(20px) scale(1)",
                      }}
                    >
                      {etape.num}
                    </span>

                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-4">
                          <span className="mono-plan flex h-8 items-center rounded-sm bg-primary/10 px-3 text-sm !text-primary border border-primary/20">
                            Étape {etape.num}
                          </span>
                        </div>
                        
                        <h3 className="texte-grave mt-5 text-[clamp(1.8rem,3.5vw,2.8rem)] font-black uppercase">
                          {etape.titre}
                        </h3>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                          {etape.desc}
                        </p>
                      </div>

                      <div className="shrink-0 pt-2">
                        <div 
                          className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 transition-colors duration-500"
                          style={{ 
                            borderColor: isPleineLumiere ? "oklch(0.72 0.132 42 / 30%)" : "var(--color-border)",
                            boxShadow: isPleineLumiere ? "inset 0 0 20px oklch(0.72 0.132 42 / 5%)" : "none"
                          }}
                        >
                          <Timer className="h-5 w-5" style={{ color: isActif ? "var(--color-primary)" : "var(--color-muted-foreground)" }} />
                          <span className="mono-plan !text-foreground/90">
                            {etape.delai}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Flèche subtile pour montrer la suite */}
                    {index < ETAPES.length - 1 && isPleineLumiere && (
                      <div className="absolute right-8 bottom-8 animate-pulse text-primary/30 hidden md:block">
                        <ArrowRight className="h-8 w-8 rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
