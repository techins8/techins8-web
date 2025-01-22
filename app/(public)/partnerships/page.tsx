import Image from "next/image";

interface Partnership {
  id: number;
  title: string;
  author: string;
  videoUrl: string;
  image: string;
  description: string;
  link: string;
}

const partnerships: Partnership[] = [
  {
    id: 1,
    title: "Accompagnement SCALE",
    author: "Johan Le Roch",
    videoUrl: "https://www.youtube.com/embed/bvwrDBLZnHY?si=Dq58p3yBxeGdQy8h",
    image: "/images/affiliation/johan_banniere.webp",
    description:
      "Tu es développeur freelance, tu souhaites générer 8 000 € / mois afin d'être serein et profiter de la vie ? Prends cet appel de consulting offert et je t'aide gratuitement à résoudre tes problèmes.",
    link: "https://jhn.sh/FCXUTGC",
  },
  {
    id: 2,
    title: "From Code To Cash",
    author: "Ramzi B.",
    videoUrl: "",
    image: "/images/affiliation/ramzi_banniere.webp",
    description:
      "Le protocole qui m'a permis de faire plus de 8k€ le premier mois avec des landing pages. En 2023 j'ai lancé mon agence web. Le premier mois, j'ai closé 6 clients et fait 8k+ de CA grâce à la puissance du cold call.",
    link: "https://www.ramzib.pro?ref=techins8",
  },
  {
    id: 3,
    title: "SwitchToDev",
    author: "Mathieu Dacheux",
    videoUrl: "",
    image: "/images/affiliation/mathieu_banniere.webp",
    description:
      "Je te partage la méthode puissante qui m'a permis de recevoir des réponses positives à mes candidatures et de décrocher mon premier poste de développeur grâce à LinkedIn.",
    link: "https://taap.it/switch-to-dev-techins8",
  },
  {
    id: 4,
    title: "Looking For Techs",
    author: "Ronan Jaffré",
    videoUrl: "",
    image: "/images/affiliation/ronan_looking_for_techs_banniere.webp",
    description:
      "La plateforme innovante qui facilite l’entraide entre professionnels de la tech et stimule les opportunités d’apport d’affaires, permettant à chacun de développer son réseau et de collaborer efficacement entre techs.",
    link: "https://lookingfortechs.fr/",
  },
];

const PartnershipCard = ({ partnership }: { partnership: Partnership }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-stroke bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex flex-grow flex-col space-y-6 p-6">
        {/* Titre et Auteur */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-black">
            {partnership.title}
          </h2>
          <p className="text-gray-600">par {partnership.author}</p>
        </div>

        {/* Vidéo ou Image */}
        <div className="relative aspect-video w-full">
          {partnership.videoUrl ? (
            <iframe
              className="h-full w-full rounded-md"
              src={partnership.videoUrl}
              title={partnership.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Image
              src={partnership.image}
              alt={partnership.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              loading="lazy"
            />
          )}
        </div>

        {/* Description - avec flex-grow pour pousser le bouton vers le bas */}
        <div className="flex-grow">
          <p className="text-gray-700 leading-relaxed">
            {partnership.description}
          </p>
        </div>

        {/* Bouton */}
        <a
          href={partnership.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-[#f57f59] px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-[#f57f59]/90"
        >
          Découvrir la formation
        </a>
      </div>
    </div>
  );
};

const PartnershipsPage = () => {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-black">Nos Partenariats</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((partnership) => (
            <PartnershipCard key={partnership.id} partnership={partnership} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;
