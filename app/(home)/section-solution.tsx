import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const SectionSolution = () => {
  const solutions = [
    {
      id: 1,
      title: "Fini les mauvaises surprises en entretien",
      description: "Notre IA analyse chaque détail des offres d'emploi pour vous garantir des informations fiables sur les TJM, le télétravail, la localisation et les compétences requises.",
      image: "/images/illustrations/solution-1.svg",
      icon: "/images/icons/solution-1.svg"
    },
    {
      id: 2,
      title: "Toutes vos opportunités au même endroit",
      description: "Notre plateforme centralise et enrichit automatiquement les meilleures offres de FreeWork et Welcome To The Jungle pour vous faire gagner du temps dans votre recherche.",
      image: "/images/illustrations/solution-2.svg",
      icon: "/images/icons/solution-2.svg"
    },
    {
      id: 3,
      title: "Une expérience fluide et transparente",
      description: "Notre dashboard intuitif vous permet de filtrer les offres selon vos critères précis et de visualiser clairement les analyses de notre IA.",
      image: "/images/illustrations/solution-3.svg",
      icon: "/images/icons/solution-3.svg"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 mt-32 mb-20">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-center text-3xl sm:text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-4">
            Arrêtez cette perte de temps dès <span className="text-primary">maintenant</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-[600px] mx-auto px-4">
            Boostez votre recherche d&apos;emploi avec <span className="font-medium">Techins8 Premium</span>, votre assistant IA pour un recrutement rapide et sans faux pas !
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {solutions.map((solution, index) => (
            <Card key={solution.id} className="border overflow-hidden">
              <CardContent className="flex flex-col md:flex-row items-stretch p-0">
                <div className="flex-1 space-y-6 p-6 sm:p-10">
                  <Image
                    src={solution.icon}
                    alt={`${solution.title} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-4"
                    loading="lazy"
                  />
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold">{solution.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSolution;