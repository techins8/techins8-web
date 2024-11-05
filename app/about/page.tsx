import { Users, Zap, Target, Handshake } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Notre Histoire</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          TechIns8 est née de la rencontre de deux passionnés du développement,
          unis par une vision commune : rendre le freelancing accessible et
          épanouissant pour tous les développeurs.
        </p>
      </section>

      {/* Founders Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Founder 1 - Updated */}
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/authors/lucien.webp"
                alt="Lucien Arbieu"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-primary">
                Lucien Arbieu
                <span className="text-accent-foreground ml-2 block text-lg">
                  Fondateur
                </span>
              </h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="leading-relaxed italic">
                &quot;L&apos;art de transformer le code en valeur
                business.&quot; Voilà ce que je fais.
              </p>

              <div className="bg-accent/5 p-4 rounded-md">
                <h3 className="font-medium text-primary mb-2">
                  Vision & Engagement
                </h3>
                <p>
                  Au-delà du code, ce qui me passionne vraiment, c&apos;est de
                  créer des solutions qui changent la donne. J&apos;ai réalisé
                  que beaucoup de développeurs talentueux galéraient à se
                  positionner sur le marché, non par manque de compétences, mais
                  par manque de visibilité.
                  <br />
                  C&apos;est de cette frustration qu&apos;est né TechIns8 : un
                  outil qui donne aux développeurs une longueur d&apos;avance,
                  en leur offrant une vision claire et stratégique du marché
                  tech. Notre mission ?
                  <br />
                  Transformer l&apos;incertitude en opportunités concrètes.
                </p>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/authors/fahari.webp"
                alt="Fahari"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-primary">
                Fahari
                <span className="text-accent-foreground ml-2 block text-lg">
                  Co-Fondateur
                </span>
              </h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="leading-relaxed italic">
                Expert du développement web avec plus de 14 ans
                d&apos;expérience dans le secteur.
              </p>
              <div className="bg-accent/5 p-4 rounded-md">
                <h3 className="font-medium text-primary mb-2">
                  Vision & Engagement
                </h3>
                <p>
                  Mon objectif est simple : donner aux développeurs les outils
                  que j&apos;aurais aimé avoir à mes débuts en freelance.
                  <br />
                  Je crois profondément que le freelancing ne devrait pas être
                  un parcours du combattant, mais une aventure entrepreneuriale
                  enrichissante et accessible.
                  <br />
                  TechIns8 est né de cette conviction : accompagner chaque
                  développeur vers une carrière freelance épanouissante, en leur
                  donnant les clés pour réussir dans un marché en constante
                  évolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-4 mt-36">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Nos Valeurs
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-accent-foreground" />,
              title: "Innovation",
              description:
                "Nous repoussons constamment les limites pour offrir les meilleures solutions.",
            },
            {
              icon: <Users className="w-8 h-8 text-accent-foreground" />,
              title: "Communauté",
              description:
                "Nous croyons en la force de la communauté tech et son pouvoir d'entraide.",
            },
            {
              icon: <Target className="w-8 h-8 text-accent-foreground" />,
              title: "Excellence",
              description:
                "Nous visons l'excellence dans chacune de nos actions.",
            },
            {
              icon: <Handshake className="w-8 h-8 text-accent-foreground" />,
              title: "Accessibilité",
              description:
                "Nous rendons le freelancing accessible à tous les talents motivés.",
            },
          ].map((value, index) => (
            <div key={index} className="text-center space-y-3 p-6">
              <div className="mx-auto w-fit">{value.icon}</div>
              <h3 className="font-semibold text-primary">{value.title}</h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
