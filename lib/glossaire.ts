export type GlossaireTerm = {
  slug: string;
  term: string;
  shortDef: string;
  longDef: string;
  relatedTerms: string[];
  relatedPages: { label: string; href: string }[];
  category: "statut" | "contrat" | "tech" | "marché" | "pratique";
};

export const GLOSSAIRE: GlossaireTerm[] = [
  {
    slug: "tjm",
    term: "TJM",
    shortDef:
      "Taux Journalier Moyen : le tarif journalier qu'un freelance facture pour ses prestations, généralement calculé sur 220 jours de travail par an.",
    longDef: `Le TJM (Taux Journalier Moyen) est le tarif quotidien appliqué par un freelance pour facturer ses missions. Ce tarif représente le montant net que le prestataire encaisse après déduction de ses charges professionnelles et sociales.

Le calcul du TJM dépend de plusieurs facteurs : l'expérience du développeur, ses compétences, la localisation, la demande du marché et la complexité des missions. Un développeur junior avec 2 ans d'expérience facturera moins qu'un senior avec 10 ans de carrière.

Sur le marché français, les TJM pour les développeurs varient généralement de 350€ à 1000€ par jour selon le profil. Les freelances full stack senior peuvent facturer entre 600€ et 900€, tandis que les juniors se situent plutôt entre 300€ et 450€. FreeMatch analyse et valide la cohérence entre le TJM proposé et le niveau d'expertise demandé.`,
    relatedTerms: ["freelance-informatique", "mission-freelance", "freelance-senior"],
    relatedPages: [
      { label: "Missions freelance", href: "/developpeurs/freelance" },
      { label: "Développeurs seniors", href: "/developpeurs/senior" },
    ],
    category: "marché",
  },
  {
    slug: "freelance-informatique",
    term: "Freelance informatique",
    shortDef:
      "Un professionnel indépendant dans le secteur IT qui propose ses services de développement, design ou expertise technique sur des missions ponctuelles.",
    longDef: `Un freelance informatique est un développeur ou professionnel IT exerçant en tant qu'indépendant. Il peut travailler seul ou en réseau avec d'autres freelances et entreprises, en proposant ses compétences pour des missions de courte ou longue durée.

Le freelance informatique bénéficie d'une grande flexibilité : il choisit ses missions, ses clients et ses tarifs. Il dispose aussi d'une meilleure maîtrise de son temps et peut combiner plusieurs projets. En contrepartie, il doit gérer l'administratif, ses cotisations sociales et la recherche de nouvelles missions.

En France, le freelance informatique peut exercer sous plusieurs statuts : auto-entrepreneur (micro-entreprise), EIRL, SARL, ou via le portage salarial. Le choix du statut impacte directement ses cotisations sociales, ses droits sociaux et la complexité administrative.`,
    relatedTerms: ["auto-entrepreneur", "portage-salarial", "mission-freelance"],
    relatedPages: [
      { label: "Missions freelance", href: "/developpeurs/freelance" },
      { label: "Full remote", href: "/developpeurs/full-remote" },
    ],
    category: "statut",
  },
  {
    slug: "portage-salarial",
    term: "Portage salarial",
    shortDef:
      "Un statut hybride permettant à un travailleur indépendant de bénéficier de droits salariés (chômage, retraite, sécu) tout en gardant son autonomie commerciale.",
    longDef: `Le portage salarial est un arrangement entre trois parties : le freelance (porté), la société de portage et les clients finaux. Le freelance prospère et signe les contrats avec ses clients, mais c'est la société de portage qui devient l'employeur légal et qui facture les missions.

Ce statut offre les avantages du salariat (indemnités chômage, congés payés, retraite complémentaire, protection sociale) tout en conservant l'autonomie du freelance dans le choix de ses missions. C'est particulièrement intéressant pour les développeurs souhaitant la sécurité sociale sans les contraintes d'une micro-entreprise.

En France, le portage salarial représente environ 10-15% des revenus générés. Pour un TJM de 600€, le développeur porté en percevra environ 510€ net après les frais de portage. Cependant, cette option donne accès à l'indemnité chômage, ce qui représente une protection importante en intercontrat.`,
    relatedTerms: ["freelance-informatique", "auto-entrepreneur", "intercontrat"],
    relatedPages: [
      { label: "Missions freelance", href: "/developpeurs/freelance" },
      { label: "Développeurs seniors", href: "/developpeurs/senior" },
    ],
    category: "statut",
  },
  {
    slug: "auto-entrepreneur",
    term: "Auto-entrepreneur / Micro-entrepreneur",
    shortDef:
      "Un statut simplifié permettant de devenir indépendant avec peu de formalités administratives et un régime fiscal avantageux pour les petits revenus.",
    longDef: `L'auto-entrepreneur (officiellement appelé micro-entrepreneur depuis 2016) est le statut le plus simple pour se lancer comme freelance. Il permet de démarrer une activité indépendante avec un minimum de bureaucratie et un régime fiscal très avantageux.

Sous ce statut, le développeur paie des cotisations sociales basées sur son chiffre d'affaires (environ 45% pour la prestation de services informatiques). Un chiffre d'affaires de 1000€ génère environ 450€ de cotisations, laissant 550€ de profit avant impôt sur le revenu.

Les limites principales : le chiffre d'affaires ne doit pas dépasser 77 700€ par an (TVA non récupérable), pas de possibilité de déduire les charges professionnelles, et des droits sociaux réduits. Pour les développeurs juniors ou en début d'activité, c'est souvent un bon point de départ avant de basculer en EIRL ou SARL.`,
    relatedTerms: ["freelance-informatique", "portage-salarial"],
    relatedPages: [
      { label: "Missions freelance", href: "/developpeurs/freelance" },
      { label: "Développeurs juniors", href: "/developpeurs/junior" },
    ],
    category: "statut",
  },
  {
    slug: "full-remote",
    term: "Full Remote",
    shortDef:
      "Une situation de travail entièrement à distance, où le développeur travaille de n'importe quel lieu géographique sans jamais se déplacer au bureau de l'entreprise.",
    longDef: `Le full remote (travail 100% à distance) est devenu une norme pour les postes de développement, particulièrement après 2020. L'entreprise n'impose aucune présence physique : le développeur gère ses horaires depuis son lieu de travail préféré (domicile, coworking, café, etc.).

Les avantages du full remote sont nombreux : gain de temps sur les trajets, flexibilité géographique (possibilité de vivre où on le souhaite), meilleur équilibre vie professionnelle-personnelle, et souvent une réduction du stress. Pour les développeurs souhaitant s'installer à la campagne ou voyager tout en travaillant, c'est une option idéale.

En contrepartie, cela nécessite une discipline personnelle, une excellente communication écrite, et une bonne connexion internet. FreeMatch valide systématiquement que les offres "full remote" sont bien sans contrainte de présence physique et analyse les outils de collaboration utilisés par l'équipe.`,
    relatedTerms: ["remote-first", "full-stack"],
    relatedPages: [
      { label: "Développeurs full remote", href: "/developpeurs/full-remote" },
      { label: "Missions freelance", href: "/developpeurs/freelance" },
    ],
    category: "contrat",
  },
  {
    slug: "remote-first",
    term: "Remote First",
    shortDef:
      "Une philosophie d'entreprise où le travail à distance est la norme et le bureau devient un espace optionnel pour les collaborateurs.",
    longDef: `Remote first diffère du full remote simple : c'est une culture d'entreprise où la distance est acceptée comme mode de fonctionnement par défaut. L'ensemble des processus, outils et communications sont pensés pour le travail distribué, plutôt que d'être une tolérance du télétravail occasionnel.

Dans une entreprise remote first, les réunions sont organisées de manière asynchrone quand possible, la documentation est complète et accessible à tous, et il n'y a pas de "présence au bureau" valorisée. Slack, Notion, Figma et les outils collaboratifs deviennent les fondations de l'organisation.

Les développeurs dans des boîtes remote first rapportent généralement une meilleure inclusion (pas de deux vitesses bureau/télétravail), une meilleure documentation du code, et une vraie flexibilité d'horaires. C'est particulièrement attrayant pour les parents ou les personnes avec des contraintes personnelles.`,
    relatedTerms: ["full-remote"],
    relatedPages: [{ label: "Développeurs full remote", href: "/developpeurs/full-remote" }],
    category: "contrat",
  },
  {
    slug: "esn",
    term: "ESN",
    shortDef:
      "Entreprise de Services du Numérique : une société qui propose des services de développement et d'intégration IT, généralement en régie ou forfait.",
    longDef: `Une ESN (autrefois appelée SSII, Société de Services en Ingénierie Informatique) est une entreprise proposant des services informatiques : développement, intégration, conseil. Elle embauche des développeurs qui sont mis à disposition de clients via deux modèles économiques principaux.

En mode "régie", le client paie le développeur à la journée, et l'ESN facture avec une marge (souvent 30-50% du TJM). En mode "forfait", l'ESN s'engage sur un périmètre de travail pour une somme fixe. Les grandes ESN comme Capgemini, Thales ou Sopra Steria emploient des milliers de développeurs.

Pour un développeur, rejoindre une ESN signifie stabilité de l'emploi et diversité de missions. Cependant, les TJM sont généralement moins élevés qu'en freelance pour le même profil, et le choix des missions peut être limité. C'est un bon point de départ pour les juniors souhaitant acquérir de l'expérience sur plusieurs projets.`,
    relatedTerms: ["mission-freelance", "lead-tech"],
    relatedPages: [
      { label: "Missions freelance", href: "/developpeurs/freelance" },
      { label: "Développeurs seniors", href: "/developpeurs/senior" },
    ],
    category: "marché",
  },
  {
    slug: "mission-freelance",
    term: "Mission freelance",
    shortDef:
      "Un projet ou un contrat de courte à moyenne durée proposé à un freelance pour réaliser un travail spécifique dans l'IT.",
    longDef: `Une mission freelance est un engagement limité dans le temps (de quelques semaines à plusieurs mois) pour accomplir un objectif défini : développer une feature, refactoriser du code, construire une infrastructure, etc. Contrairement à un CDI où on s'engage sur la durée indéfinie, la mission a un scope et une date de fin.

Les missions freelance offrent une grande variété pour le développeur : passage sur plusieurs projets, découverte de nouvelles stacks technologiques, apprentissage rapide. Elles permettent aussi de maintenir une certaine flexibilité : fin de mission = possibilité de refuser la suivante ou de prendre un repos (intercontrat).

FreeMatch analyse chaque mission pour valider : la cohérence du TJM, la clarté du scope technique, le statut du télétravail, et les conditions contractuelles. Une bonne mission freelance doit être rentable (TJM adapté), techniquement intéressante, et contractuellement claire.`,
    relatedTerms: ["tjm", "freelance-informatique", "intercontrat"],
    relatedPages: [{ label: "Missions freelance", href: "/developpeurs/freelance" }],
    category: "contrat",
  },
  {
    slug: "cra",
    term: "CRA",
    shortDef:
      "Compte Rendu d'Activité : un document décrivant les tâches réalisées pendant une période, utilisé principalement en mode régie.",
    longDef: `Le CRA (Compte Rendu d'Activité) est un justificatif détaillé du travail réalisé, généralement hebdomadaire ou mensuel. En mode régie (développeur mis à disposition via une ESN ou agence), c'est le client qui valide le CRA pour confirmer que le travail a bien été réalisé.

Le CRA est important pour deux raisons : il documente les tâches accomplies (utile pour le suivi de projet) et il valide les jours facturables à l'ESN. Si un développeur fait des tâches hors périmètre ou si l'ESN refuse sa justification, cela peut impacter sa facturation.

Pour un freelance, le CRA n'est pas systématique : cela dépend du contrat. Certains clients exigent un CRA détaillé, d'autres se contentent d'une facture simple. En forfait, le CRA n'a pas d'importance : seul le résultat final compte. FreeMatch vérifie que les missions ne contiennent pas de clauses abusives concernant le CRA.`,
    relatedTerms: ["mission-freelance", "esn"],
    relatedPages: [{ label: "Missions freelance", href: "/developpeurs/freelance" }],
    category: "pratique",
  },
  {
    slug: "lead-tech",
    term: "Lead Tech",
    shortDef:
      "Un développeur senior responsable de l'architecture technique et du coaching des membres d'une équipe de développement.",
    longDef: `Un Lead Tech (Technical Lead) est un développeur expérimenté (5+ ans) avec des responsabilités d'architecture et de leadership. Il ne manage pas au sens RH, mais il guide l'équipe sur les choix technologiques, les patterns de code, et l'évolution de la stack.

Les responsabilités d'un Lead Tech incluent : définir l'architecture des projets, faire la revue de code avec mentorat, guider les juniors, participer aux décisions technologiques, et assurer la qualité technique globale. C'est un rôle à mi-chemin entre le développeur pur et le manager.

Pour un freelance, devenir Lead Tech signifie généralement une rémunération plus élevée (TJM de 700-1000€) et un impact plus stratégique. Les missions de Lead Tech sont réservées aux profils avec une vraie expertise et une capacité à communiquer l'architecture technique aux non-techniciens.`,
    relatedTerms: ["freelance-senior", "full-stack", "devops"],
    relatedPages: [
      { label: "Développeurs seniors", href: "/developpeurs/senior" },
      { label: "Full stack", href: "/developpeurs/full-stack" },
    ],
    category: "pratique",
  },
  {
    slug: "full-stack",
    term: "Développeur Full Stack",
    shortDef:
      "Un développeur capable de travailler sur l'ensemble de la stack technique : frontend, backend, base de données et infrastructure.",
    longDef: `Un développeur Full Stack a des compétences en développement frontend (interface utilisateur), backend (serveur et API) et gère souvent aussi la base de données et le déploiement. Plutôt qu'un spécialiste d'un seul domaine, c'est un généraliste capable de prendre en charge un projet de bout en bout.

Les avantages du full stack : autonomie sur les projets, compréhension complète du système, moins de dépendances vis-à-vis d'autres développeurs. Les défis : il est difficile d'être expert partout, et le full stack cache souvent des déficits de profondeur technique.

Sur le marché, un bon full stack est très demandé, surtout dans les startups où les équipes sont petites et multi-compétentes. FreeMatch analyse la stack complète pour valider qu'elle est cohérente et moderne : pas de technos obsolètes côté front, pas d'architecture chaotique côté back.`,
    relatedTerms: ["frontend", "backend", "stack-technique"],
    relatedPages: [
      { label: "Développeurs full stack", href: "/developpeurs/full-stack" },
      { label: "Full remote", href: "/developpeurs/full-remote" },
    ],
    category: "tech",
  },
  {
    slug: "devops",
    term: "DevOps",
    shortDef:
      "Un ensemble de pratiques et d'outils visant à automatiser le déploiement, la configuration et la monitoring des applications en production.",
    longDef: `DevOps (fusion de Development et Operations) n'est pas un rôle mais une philosophie et un ensemble de pratiques. Un DevOps engineer automatise et optimise tout ce qui touche à la production : build, tests, déploiement, monitoring, sécurité, scaling.

Les outils essentiels du DevOps incluent : Docker et les conteneurs, Kubernetes pour l'orchestration, les pipelines CI/CD (Jenkins, GitLab CI, GitHub Actions), l'Infrastructure as Code (Terraform, Ansible), et les cloud providers (AWS, GCP, Azure). Le DevOps moderne maîtrise aussi les bonnes pratiques de sécurité (DevSecOps).

Pour un développeur, avoir des compétences DevOps est de plus en plus valorisé. Les missions DevOps bien rémunérées (600-900€ TJM) requièrent généralement 5+ ans d'expérience, une compréhension des architectures cloud, et une capacité à résoudre des problèmes complexes en production.`,
    relatedTerms: ["ci-cd", "cloud", "lead-tech"],
    relatedPages: [
      { label: "Développeurs DevOps", href: "/developpeurs/devops" },
      { label: "Développeurs backend", href: "/developpeurs/backend" },
    ],
    category: "tech",
  },
  {
    slug: "stack-technique",
    term: "Stack technique",
    shortDef:
      "L'ensemble des technologies et outils utilisés pour développer et exploiter une application (langages, frameworks, bases de données, infrastructure).",
    longDef: `La stack technique est la combinaison des technologies qui composent une application. Elle comprend généralement : le langage de programmation (JavaScript, Python, Java, Go, etc.), le framework (React, Vue, Django, Spring, etc.), la base de données (PostgreSQL, MongoDB, Redis), et l'infrastructure (AWS, GCP, Heroku, Vercel).

Exemple de stack moderne : JavaScript/TypeScript avec React côté frontend, Node.js avec Express côté backend, PostgreSQL pour la base de données, et déploiement sur Vercel ou AWS. Une autre stack : Python/Django backend, React frontend, PostgreSQL, déployé sur Heroku.

Pour un développeur, l'importance de la stack est majeure : elle détermine sa courbe d'apprentissage, sa productivité et sa valeur sur le marché. Une stack moderne et cohérente (pas de mélange bizarre de technos) est un bon signal. FreeMatch analyse que chaque stack est adaptée aux besoins et moderne (pas de technologies obsolètes).`,
    relatedTerms: ["full-stack", "frontend", "backend", "ci-cd"],
    relatedPages: [{ label: "Développeurs full stack", href: "/developpeurs/full-stack" }],
    category: "tech",
  },
  {
    slug: "agile-scrum",
    term: "Agile / Scrum",
    shortDef:
      "Une méthodologie de développement itérative où le travail est organisé en sprints courts, avec feedback régulier et adaptation continue.",
    longDef: `Agile est une philosophie de développement logiciel opposée aux approches en cascade (Waterfall). Scrum est une implémentation spécifique d'Agile avec des rôles (Product Owner, Scrum Master, développeurs), des cérémonies (dailies, plannings, rétrospectives) et des sprints de 1-4 semaines.

En Agile/Scrum, le produit est développé par petites itérations avec feedback continu du client. Cela permet d'adapter le développement rapidement aux changements de besoins, plutôt que d'être bloqué par un cahier des charges figé au départ.

Pour un développeur, Agile/Scrum est devenu une norme : presque toutes les entreprises modernes l'utilisent ou en parlent. Cependant, la qualité varie énormément : Scrum bien exécuté = équipes efficaces et prévisibles; Scrum mal exécuté = réunions interminables et frustration. FreeMatch vérifie que les missions proposent une véritable organisation Agile, pas juste du Scrum cosmétique.`,
    relatedTerms: ["lead-tech", "devops"],
    relatedPages: [{ label: "Développeurs seniors", href: "/developpeurs/senior" }],
    category: "pratique",
  },
  {
    slug: "api",
    term: "API",
    shortDef:
      "Interface de Programmation : un ensemble de règles permettant à deux applications de communiquer entre elles pour échanger de la donnée.",
    longDef: `Une API (Application Programming Interface) est un contrat entre deux logiciels : elle définit quelles données on peut demander et sous quel format. Exemples : l'API Google Maps permet aux app de afficher des cartes, l'API Stripe permet de traiter des paiements.

Les APIs modernes utilisent généralement REST (requêtes HTTP avec JSON) ou GraphQL (langage de requête flexible). Un développeur backend crée des APIs que les frontends et tiers consomment. Une API bien conçue est simple à utiliser, documentée, et évolutive.

Pour un développeur backend, la conception d'API est une compétence clé : une API mal pensée génère des bugs et de la frustration chez les utilisateurs. FreeMatch valide que les missions backend incluent la conception d'APIs cohérentes et documentées, pas juste du code in-company.`,
    relatedTerms: ["backend", "ci-cd"],
    relatedPages: [{ label: "Développeurs backend", href: "/developpeurs/backend" }],
    category: "tech",
  },
  {
    slug: "cloud",
    term: "Cloud Computing",
    shortDef:
      "Utilisation de ressources informatiques (serveurs, stockage, bases de données) hébergées sur internet plutôt que sur des machines locales.",
    longDef: `Le cloud computing a transformé l'IT : plutôt que d'acheter et maintenir ses propres serveurs, une entreprise loue des ressources chez un fournisseur cloud. Les trois principaux providers sont AWS (Amazon), GCP (Google Cloud) et Azure (Microsoft).

Les avantages du cloud : pas d'investissement matériel, scalabilité (ajouter des ressources en un clic), payez ce que vous utilisez, accès global. Les défis : coûts qui peuvent exploser si mal gérés, lock-in vendor (migration difficile), et sécurité à gérer.

Pour un développeur, avoir des compétences cloud est très recherché : AWS Developer ou GCP Associate sont des certifications valorisées. Les missions cloud paient généralement bien (600€+ de TJM) car elles nécessitent expertise et responsabilité.`,
    relatedTerms: ["devops", "ci-cd", "backend"],
    relatedPages: [
      { label: "Développeurs DevOps", href: "/developpeurs/devops" },
      { label: "Développeurs GCP", href: "/developpeurs/gcp" },
    ],
    category: "tech",
  },
  {
    slug: "ci-cd",
    term: "CI/CD",
    shortDef:
      "Intégration Continue et Déploiement Continu : l'automatisation du test et du déploiement du code pour fiabiliser les releases.",
    longDef: `CI/CD englobe deux concepts : l'Intégration Continue (CI) automatise les tests à chaque push de code pour détecter les bugs tôt, et le Déploiement Continu (CD) automatise le déploiement en production une fois les tests passés.

Concrètement : un développeur pousse son code sur GitHub → un pipeline (GitHub Actions, Jenkins, GitLab CI) lance automatiquement des tests → si tout passe, le code peut être déployé automatiquement. Cela remplace les déploiements manuels et réduit drastiquement les erreurs.

Pour une entreprise, avoir une bonne CI/CD = confiabilité, rapidité de mise à jour, et moins de bugs en prod. Pour un développeur, c'est un gain énorme de productivité : plus besoin de déployer manuellement. FreeMatch valide que les missions proposent une vraie CI/CD, pas juste une chaîne cassée.`,
    relatedTerms: ["devops", "cloud"],
    relatedPages: [{ label: "Développeurs DevOps", href: "/developpeurs/devops" }],
    category: "tech",
  },
  {
    slug: "freelance-senior",
    term: "Développeur Senior Freelance",
    shortDef:
      "Un freelance avec 8+ ans d'expérience capable de piloter des projets complexes et mentorer d'autres développeurs.",
    longDef: `Un développeur senior freelance cumule l'expérience d'un profil senior (8-15 ans de carrière) avec la flexibilité du freelance. C'est un profil très demandé mais relativement rare : beaucoup de seniors préfèrent la stabilité du CDI.

Un senior freelance gère des responsabilités importantes : architecture de projets complexes, mentorat des juniors, prise de décisions technologiques, et négociation commerciale. Son TJM est logiquement plus élevé : 700-1200€ par jour selon la spécialité et l'expertise.

Les avantages pour un senior en freelance : meilleure rémunération qu'en CDI (pour un même profil), plus de flexibilité, choix des missions. Les défis : pas de sécurité d'emploi à long terme, gestion administrative plus complexe, et besoin de discipline personnelle.`,
    relatedTerms: ["freelance-informatique", "lead-tech", "mission-freelance"],
    relatedPages: [
      { label: "Développeurs seniors", href: "/developpeurs/senior" },
      { label: "Missions freelance", href: "/developpeurs/freelance" },
    ],
    category: "marché",
  },
  {
    slug: "intercontrat",
    term: "Intercontrat",
    shortDef:
      "La période entre deux missions pour un freelance, pendant laquelle il n'a pas de contrat et peut chercher son prochain projet.",
    longDef: `L'intercontrat est l'une des réalités du freelancing : il y a des périodes entre deux missions où le freelance est sans contrat et sans revenus. Cette période peut durer quelques jours ou plusieurs semaines selon la demande du marché.

Bien gérer ses intercontrats est crucial pour un freelance : avoir une réserve financière pour les périodes creuses, maintenir un réseau actif pour décrocher la prochaine mission rapidement, ou réduire les cotisations sociales. Certains freelances aiment cette période pour se reposer ou apprendre une nouvelle technologie.

C'est l'un des avantages du portage salarial : il offre une indemnité chômage durant l'intercontrat, ce qui sécurise financièrement le freelance. FreeMatch aide les freelances à évaluer le risque intercontrat en analysant la stabilité et la durée des missions proposées.`,
    relatedTerms: ["freelance-informatique", "portage-salarial", "mission-freelance"],
    relatedPages: [{ label: "Missions freelance", href: "/developpeurs/freelance" }],
    category: "marché",
  },
  {
    slug: "urssaf",
    term: "URSSAF",
    shortDef:
      "Union de Recouvrement des cotisations de Sécurité Sociale et d'Allocations Familiales : l'organisme chargé de collecter les cotisations sociales des indépendants et freelances.",
    longDef: `L'URSSAF est l'organisme public français responsable du recouvrement des cotisations sociales des travailleurs indépendants. Pour un freelance informatique, c'est avec l'URSSAF que se font les déclarations de revenus et le paiement des cotisations sociales.

Pour un auto-entrepreneur, le taux de cotisation est de 45% du chiffre d'affaires (pour la prestation de services informatiques). Par exemple : 5000€ de CA = 2250€ de cotisations. Pour un freelance sous EIRL ou SARL, c'est plus complexe car il y a aussi les cotisations employeur.

L'URSSAF gère aussi l'accès à la sécurité sociale, la retraite de base, et les allocations familiales. C'est un interlocuteur important pour tout freelance : comprendre comment ça marche aide à optimiser sa structure et ses déclarations.`,
    relatedTerms: ["auto-entrepreneur", "freelance-informatique", "portage-salarial"],
    relatedPages: [{ label: "Missions freelance", href: "/developpeurs/freelance" }],
    category: "statut",
  },
  {
    slug: "frontend",
    term: "Développeur Frontend",
    shortDef:
      "Un développeur spécialisé dans la création d'interfaces utilisateur et l'expérience client d'une application web ou mobile.",
    longDef: `Un développeur frontend crée ce que l'utilisateur voit et manipule : les boutons, les formulaires, les animations, la responsive design. Il travaille avec des langages comme JavaScript/TypeScript et des frameworks comme React, Vue ou Angular.

Le frontend moderne est bien plus complexe qu'avant : c'est devenu de vrai développement avec gestion d'état, tests automatisés, performance, accessibilité. Un bon frontend engineer comprend l'UX, les performances web, et sait communiquer avec le designer et le backend.

Sur le marché, les développeurs frontend sont très demandés. Les TJM varient de 400€ pour un junior à 700€+ pour un senior. Les missions frontend intéressantes combinent design system, perfs, et technologies modernes.`,
    relatedTerms: ["full-stack", "stack-technique"],
    relatedPages: [{ label: "Développeurs frontend", href: "/developpeurs/frontend" }],
    category: "tech",
  },
  {
    slug: "backend",
    term: "Développeur Backend",
    shortDef:
      "Un développeur spécialisé dans la création des serveurs, APIs et bases de données qui alimentent les applications frontend.",
    longDef: `Un développeur backend construit l'infrastructure logicielle invisible à l'utilisateur : les serveurs, les APIs, les bases de données, l'authentification, la sécurité. Il travaille avec des langages comme Node.js, Python, Java, Go ou Rust.

Le backend moderne gère aussi l'infrastructure (cloud, containers, CI/CD), la sécurité (authentification, chiffrement), et la performance en grande charge. Un backend bien conçu est scalable, sécurisé, et facile à maintenir.

Les missions backend sont très recherchées et généralement bien rémunérées : 500€ pour un junior à 800€+ pour un senior. Les challenges techniquement intéressants (big data, microservices, gestion de millions d'utilisateurs) paient premium.`,
    relatedTerms: ["full-stack", "api", "devops"],
    relatedPages: [{ label: "Développeurs backend", href: "/developpeurs/backend" }],
    category: "tech",
  },
];

export function getTermBySlug(slug: string): GlossaireTerm | undefined {
  return GLOSSAIRE.find((term) => term.slug === slug);
}

export function getRelatedTerms(term: GlossaireTerm): GlossaireTerm[] {
  return term.relatedTerms
    .map((slug) => getTermBySlug(slug))
    .filter((t) => t !== undefined) as GlossaireTerm[];
}

export const CATEGORIES = {
  statut: "Statut & Structure",
  contrat: "Conditions de travail",
  tech: "Technologies",
  marché: "Marché & Tarifs",
  pratique: "Pratiques & Méthodologie",
} as const;
