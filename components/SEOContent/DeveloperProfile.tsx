import { CheckCircle2 } from "lucide-react";

interface DeveloperProfileProps {
  profile: string;
  city?: string;
}

const profileContent: Record<
  string,
  {
    skills: string[];
    stats: { label: string; value: string }[];
    description: string;
  }
> = {
  "full-stack": {
    description:
      "Les développeurs Full Stack maîtrisent à la fois le frontend et le backend, offrant une polyvalence prisée par les entreprises.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "API REST"],
    stats: [
      { label: "Salaire moyen", value: "45-65k€" },
      { label: "Offres actives", value: "12 000+" },
      { label: "Télétravail", value: "85%" },
    ],
  },
  frontend: {
    description:
      "Les développeurs Frontend créent des interfaces utilisateur modernes et performantes avec les dernières technologies web.",
    skills: ["React", "Vue.js", "Angular", "TypeScript", "CSS/Sass", "Webpack"],
    stats: [
      { label: "Salaire moyen", value: "40-55k€" },
      { label: "Offres actives", value: "8 000+" },
      { label: "Télétravail", value: "80%" },
    ],
  },
  backend: {
    description:
      "Les développeurs Backend construisent l'architecture serveur, les APIs et gèrent les bases de données des applications.",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "Redis", "Microservices"],
    stats: [
      { label: "Salaire moyen", value: "45-70k€" },
      { label: "Offres actives", value: "10 000+" },
      { label: "Télétravail", value: "75%" },
    ],
  },
  react: {
    description:
      "Les développeurs React sont spécialisés dans la création d'interfaces utilisateur dynamiques avec la bibliothèque la plus populaire.",
    skills: ["React", "Next.js", "TypeScript", "Redux", "React Query", "Tailwind CSS"],
    stats: [
      { label: "Salaire moyen", value: "42-60k€" },
      { label: "Offres actives", value: "6 000+" },
      { label: "Télétravail", value: "85%" },
    ],
  },
  mobile: {
    description:
      "Les développeurs Mobile créent des applications natives ou cross-platform pour iOS et Android.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store"],
    stats: [
      { label: "Salaire moyen", value: "45-65k€" },
      { label: "Offres actives", value: "5 000+" },
      { label: "Télétravail", value: "70%" },
    ],
  },
  devops: {
    description:
      "Les développeurs DevOps automatisent les processus de déploiement et gèrent l'infrastructure cloud.",
    skills: ["Docker", "Kubernetes", "AWS/GCP", "CI/CD", "Terraform", "Monitoring"],
    stats: [
      { label: "Salaire moyen", value: "50-75k€" },
      { label: "Offres actives", value: "3 000+" },
      { label: "Télétravail", value: "90%" },
    ],
  },
};

export function DeveloperProfile({ profile, city }: DeveloperProfileProps) {
  const content = profileContent[profile] || profileContent["full-stack"];

  const locationText = city ? `à ${city.charAt(0).toUpperCase() + city.slice(1)}` : "en France";

  return (
    <section className="w-full py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-title mb-4">
              Profil Développeur{" "}
              {profile
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}{" "}
              {locationText}
            </h2>
            <p className="text-muted-foreground mb-6">{content.description}</p>

            <h3 className="text-lg font-semibold text-title mb-3">Compétences recherchées</h3>
            <div className="grid grid-cols-2 gap-2">
              {content.skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-title mb-4">
              Statistiques du marché{" "}
              {city ? `à ${city.charAt(0).toUpperCase() + city.slice(1)}` : ""}
            </h3>
            <div className="space-y-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center p-4 bg-popover rounded-lg"
                >
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className="text-lg font-bold text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
