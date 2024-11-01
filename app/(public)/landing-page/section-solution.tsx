import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const SectionSolution = () => {
  const solutions = [
    {
      id: 1,
      title: "Suivi des salaires et TJM",
      description: "Visualisez l'évolution des rémunérations dans le temps et positionnez-vous stratégiquement.",
      image: "/images/screenshots/solution-1.webp",
      isComingSoon: false,
      bgColor: "rgba(245, 127, 89, 0.8) ",
    },
    {
      id: 2,
      title: "Analyse des tendances en temps réel",
      description: "Découvrez les tendances cachées du marché",
      image: "/images/screenshots/solution-2.webp",
      isComingSoon: false,
      bgColor: "rgba(245, 197, 89, 0.8)",
    },
    {
      id: 3,
      title: "Cartographie des opportunités",
      description: "Explorez la répartition géographique des offres par langage pour orienter vos choix de carrière",
      image: "/images/screenshots/solution-3.webp",
      isComingSoon: false,
      bgColor: "rgba(89, 196, 142, 0.8)",
    },
    {
      id: 4,
      title: "Filtrage intelligent des offres",
      description: "Identifiez les véritables opportunités fullremote et hybrides grâce à notre IA performante.",
      image: "/images/screenshots/solution-4.webp",
      isComingSoon: true,
      bgColor: "rgba(89, 129, 245, 0.8)",
    },
    {
      id: 5,
      title: "Découvrez les entreprises qui embauchent en freelances",
      description: "Boostez votre carrière de freelance avec nos données exclusives",
      image: "/images/screenshots/solution-4.webp",
      isComingSoon: true,
      bgColor: "rgba(245, 89, 89, 0.8)",
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 px-4 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-2xl md:text-3xl text-center mb-12">
          Décuplez votre potentiel <br className="hidden md:block"/>et gardez une longueur d&apos;avance.
        </h2>
        
        <div className="flex flex-col gap-16 md:gap-24">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={`flex flex-col md:grid ${
                index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
              } gap-6 md:gap-16 items-center`}
            >
              {/* Content - Toujours en premier sur mobile */}
              <div className={`space-y-4 ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                  <h3 className="text-xl md:text-2xl font-medium text-primary">
                    {solution.title}
                  </h3>
                  {solution.isComingSoon && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[#f5c6593d] text-accent-foreground text-center max-w-24"
                    >
                      Bientôt disponible
                    </Badge>
                  )}
                </div>
                <p className="text-base md:text-lg text-muted-foreground">
                  {solution.description}
                </p>
              </div>

              {/* Image - Toujours en dernier sur mobile */}
              <div className={`relative w-full ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}>
                <div 
                  className={`rounded-lg overflow-hidden ${solution.isComingSoon ? 'opacity-65' : ''}`}
                  style={{ backgroundColor: solution.bgColor }}
                >
                  <div className="p-4 md:p-6">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={500}
                      height={400}
                      className="w-auto h-auto object-contain max-h-60 md:max-h-80 rounded mx-auto"
                    />
                  </div>
                </div>
                {solution.isComingSoon && (
                  <div className="absolute inset-0 bg-background/5 backdrop-blur-[2px] rounded-lg" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSolution;