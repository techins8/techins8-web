import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Gaëtan Redin",
    role: "Software Engineer",
    image: "/images/testimonies/1725637043013-1-p-500.webp",
    comment: "On est clairement sur un outil riche d'informations que l'on peut personnaliser en fonction de nos propres compétences et de notre niveau d'expérience. Plutôt pas mal pour piloter ses compétences et son tjm en fonction du marché ✌🏼",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7254010845070770176%29"
  },
  {
    name: "Mathieu Dacheux",
    role: "Développeur front-end freelance",
    image: "/images/testimonies/1723189560386-1.webp",
    comment: "TechIns8 permet d'avoir une vue globale du marché actuel, et ça me permet en tant que freelance, d'ajuster ma prospection et aussi les technos que je dois mettre en avant 👌",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253780209894658049%29"
  },
  {
    name: "Poudevigne Matthieu",
    role: "Développeur Web Full Stack Senior",
    image: "/images/testimonies/1727449043392-1-p-500.webp",
    comment: "TechIns8 vous offre enfin une vue d'ensemble claire et une comparaison entre des offres par technos et région. Trouvez maintenant de vraies annonces en full remote, sans offres déguisées",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253864006250090498%29"
  },
  {
    name: "Camille (Roy) Vingere",
    role: "Développeur Fullstack",
    image: "/images/testimonies/1722345778865-1-p-500.webp",
    comment: "Outil parfait pour faire régulièrement son analyse de marché avec des données concrètes 💪",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253864006250090498%29"
  },
  {
    name: "Luc Ebert",
    role: "Fullstack Engineer",
    image: "/images/testimonies/1728068739164-p-500.webp",
    comment: "Un outil précieux pour connaître l'état du marché en temps réel et adapter sa strategie !",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253820043585581057%29"
  },
  {
    name: "Lucas Fabre",
    role: "Senior Software Engineer",
    image: "/images/testimonies/1728410367071-1-p-500.webp",
    comment: "TechIns8 est une pépite de statistiques, lors de ma rotation de carrière ça m'a permis de statuer sur ma direction future. Enfin un outil par nous pour nous.",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253817183808446465%29"
  },
  {
    name: "Alla Aroustamyan",
    role: "Développeur d'application JavaScript React",
    image: "/images/testimonies/alla.webp",
    comment: "En tant que dev, je suis constamment à la recherche d'outils qui me permettent de rester à la pointe de l'actualité dans le domaine de l'IT. TechIns8 s'est rapidement imposé comme un incontournable. Il offre une vue d'ensemble claire et concise des dernières tendances du marché, ce qui est précieux pour prendre des décisions éclairées dans mon travail.",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7253787170556002304%29"
  },
  {
    name: "Nolan Dartois",
    role: "Développeur PHP & Javascript | Symfony",
    image: "/images/testimonies/1603192754437.webp",
    comment: "C'est une excellente initiative qui facilite la collecte rapide et efficace des chiffres pour nos prospections. J'aimerais partager quelques idées pour rendre les outils encore plus performants. Il y a déjà une belle amélioration dans la présentation des statistiques depuis le lancement, mais ajouter la possibilité de lister les technologies (comme React, Next.js, Symfony, etc.) en plus des langages serait un vrai plus. De même, permettre la sélection d'une date antérieure nous offrirait davantage de flexibilité.",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7254413756720451584%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287254413756720451584%2Curn%3Ali%3Aactivity%3A7253774566433386496%29"
  },
  {
    name: "Maëva RODRIGUES",
    role: "Développeuse Web Full-Stack",
    image: "/images/testimonies/1721324539640.webp",
    comment: "Enfin un outil avec des données concrêtes sur le marché du développement, qui me font gagner un temps précieux sur ma stratégie de recherche d'emploi et peut également m'orienter sur le choix d'un langage de spécialisation selon les besoins du marché.",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7253774566433386496?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7253774566433386496%2C7254422564662337537%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287254422564662337537%2Curn%3Ali%3Aactivity%3A7253774566433386496%29"
  },
];

const SectionSocialProof = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-2xl md:text-3xl text-center mb-12">
          La communauté tech parle de nous.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {testimonials.map((testimonial, index) => (
            <Link 
              key={index}
              href={testimonial.linkedinUrl}
              target="_blank"
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-border/40">
                {/* Header with profile info */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={`Photo de profil de ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-primary">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/images/logo/linkedin-logo.svg"
                    alt="Logo LinkedIn"
                    width={24}
                    height={24}
                    className="rounded group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Comment */}
                <p className="text-secondary text-sm leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
            </Link>
          ))}

          {/* Gradient shadow at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SectionSocialProof;