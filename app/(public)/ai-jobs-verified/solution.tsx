import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Solution() {
  const solutions = [
    {
      id: 1,
      title: "Analyse IA des offres",
      description: "Notre IA vérifie la cohérence des TJM par rapport au marché et les véritables conditions de télétravail.",
      image: "/images/screenshots/solution-1.webp",
      isComingSoon: false,
      bgColor: "rgba(245, 127, 89, 0.8)",
    },
    {
      id: 2,
      title: "Vérification des compétences",
      description: "Nous analysons la pertinence des compétences requises et détectons les incohérences techniques.",
      image: "/images/screenshots/solution-2.webp",
      isComingSoon: false,
      bgColor: "rgba(89, 129, 245, 0.8)",
    },
    {
      id: 3,
      title: "Agrégation multi-sources",
      description: "Toutes vos sources préférées au même endroit : FreeWork, Welcome To The Jungle, et plus encore.",
      image: "/images/screenshots/solution-3.webp",
      isComingSoon: false,
      bgColor: "rgba(245, 89, 89, 0.8)",
    }
  ];

  return (
    <section className="mt-44 ">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        Découvrez TechIns8 Premium
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Votre assistant IA pour une recherche d&apos;emploi efficace
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div key={solution.id} className="relative group">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: solution.bgColor }}
              />
              {solution.image && (
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              {solution.isComingSoon && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary">Bientôt disponible</Badge>
                </div>
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
            <p className="mt-2 text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-md bg-[#F57F59] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#F57F59]/80"
        >
          Essayer TechIns8 Premium maintenant
        </a>
      </div>
    </section>
  );
}
