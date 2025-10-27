// pages/conditions-generales-vente.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - FreeMatch",
  description: "Conditions Générales de Vente des services FreeMatch",
};

export default function CGVPage() {
  const sections = [
    {
      title: "Article 1 - Présentation de la société",
      content:
        "FreeMatch, Société par Actions Simplifiée au capital de 2 000,00 euros, dont le siège social est situé au 60 rue François 1er, 75008 Paris, immatriculée au RCS de Paris sous le numéro 938 964 061, représentée par Monsieur Lucien Arbieu-Lemenan en qualité de Président.",
      subsections: [
        {
          subtitle: "1.1 - Services proposés",
          content:
            "FreeMatch propose une solution d'analyse d'offres d'emploi par intelligence artificielle comprenant :",
          items: [
            "Analyse automatisée des offres d'emploi tech",
            "Vérification des conditions de télétravail",
            "Validation des TJM et salaires",
            "Analyse de cohérence des compétences requises",
            "Agrégation d'offres provenant de différentes sources",
          ],
        },
      ],
    },
    {
      title: "Article 2 - Définitions",
      subsections: [
        {
          subtitle: "2.1 - Termes utilisés",
          items: [
            "'Le Service' désigne l'ensemble des fonctionnalités proposées par FreeMatch",
            "'L'Utilisateur' désigne toute personne physique ou morale utilisant le Service",
            "'L'Abonnement' désigne la souscription aux services premium de FreeMatch",
            "'Le Site' désigne la plateforme web accessible à l'adresse www.freemat.ch",
          ],
        },
      ],
    },
    {
      title: "Article 3 - Application et opposabilité",
      content:
        "Les présentes CGV sont applicables à toute souscription d'un abonnement FreeMatch. Elles sont accessibles à tout moment sur le Site et prévalent sur toute autre version ou document contradictoire.",
    },
    {
      title: "Article 4 - Tarifs et modalités de paiement",
      subsections: [
        {
          subtitle: "4.1 - Prix",
          content: "Les prix de nos services sont indiqués en euros et TTC :",
          items: [
            "Abonnement mensuel : 19.90€ TTC",
            "Abonnement annuel : 149€ TTC (soit 12.42€/mois)",
            "Abonnement 2 ans : 199€ TTC (soit 8.29€/mois)",
          ],
        },
        {
          subtitle: "4.2 - Modalités de paiement",
          items: [
            "Paiement sécurisé par carte bancaire",
            "Facturation mensuelle ou annuelle selon l'abonnement choisi",
            "Les prix peuvent être modifiés à tout moment avec un préavis de 30 jours",
          ],
        },
      ],
    },
    {
      title: "Article 5 - Durée et résiliation",
      subsections: [
        {
          subtitle: "5.1 - Durée",
          items: [
            "L'abonnement mensuel est sans engagement",
            "L'abonnement annuel engage pour une durée de 12 mois",
            "L'abonnement 2 ans engage pour une durée de 24 mois",
          ],
        },
        {
          subtitle: "5.2 - Résiliation",
          content:
            "La résiliation d'un abonnement peut être effectuée à tout moment depuis votre espace client. En résiliant votre abonnement :",
          items: [
            "Votre accès premium reste actif jusqu'à la fin de la période en cours",
            "Aucun renouvellement automatique ne sera effectué à la date d'échéance",
            "Vous conservez l'accès à toutes les fonctionnalités premium jusqu'au dernier jour de votre période d'abonnement",
            "Aucun remboursement n'est effectué pour la période restante",
            "Vous pouvez continuer à utiliser le service normalement jusqu'à la fin de votre période d'abonnement",
          ],
        },
      ],
    },
    {
      title: "Article 6 - Droit de rétractation",
      content:
        "Conformément à l'article L221-18 du Code de la consommation, l'Utilisateur dispose d'un délai de 14 jours pour exercer son droit de rétractation sans avoir à motiver sa décision.",
      items: [
        "Le délai court à compter de la souscription de l'abonnement",
        "La demande doit être envoyée par email à contact@freemat.ch",
        "Le remboursement est effectué dans les 14 jours suivant la demande",
      ],
    },
    {
      title: "Article 7 - Responsabilité",
      subsections: [
        {
          subtitle: "7.1 - Engagements",
          content: "FreeMatch s'engage à :",
          items: [
            "Fournir un service de qualité et maintenir sa disponibilité",
            "Sécuriser les données des utilisateurs",
            "Mettre à jour régulièrement ses analyses",
          ],
        },
        {
          subtitle: "7.2 - Limitations",
          content: "FreeMatch ne peut être tenu responsable :",
          items: [
            "Des inexactitudes présentes dans les offres d'emploi sources",
            "Des dysfonctionnements techniques indépendants de sa volonté",
            "Des décisions prises par l'Utilisateur sur la base des analyses fournies",
          ],
        },
      ],
    },
    {
      title: "Article 8 - Propriété intellectuelle",
      content:
        "FreeMatch reste propriétaire de l'ensemble des droits de propriété intellectuelle sur les études, dessins, modèles, prototypes, etc., réalisés en vue de la fourniture des services.",
      subsections: [
        {
          subtitle: "8.1 - Protection du contenu",
          items: [
            "L'ensemble des éléments du service FreeMatch est protégé par le droit d'auteur",
            "Les analyses générées par notre IA restent la propriété de FreeMatch",
            "Toute reproduction ou utilisation non autorisée est interdite",
            "L'Utilisateur s'engage à ne pas contourner les protections techniques mises en place",
          ],
        },
        {
          subtitle: "8.2 - Utilisation du service",
          items: [
            "L'accès au service est strictement personnel",
            "Le partage des identifiants de connexion est interdit",
            "Les données générées ne peuvent être revendues ou distribuées",
          ],
        },
      ],
    },
    {
      title: "Article 9 - Protection des données personnelles",
      content:
        "FreeMatch s'engage à protéger les données personnelles de ses utilisateurs conformément au RGPD.",
      subsections: [
        {
          subtitle: "9.1 - Collecte et traitement",
          items: [
            "Les données sont collectées uniquement pour fournir le service",
            "Aucune donnée n'est vendue à des tiers",
            "L'utilisateur peut exercer ses droits via contact@freemat.ch",
            "La politique de confidentialité détaillée est accessible sur notre site",
          ],
        },
      ],
    },
    {
      title: "Article 10 - Service client et assistance",
      content: "FreeMatch met à disposition un service client pour accompagner ses utilisateurs.",
      subsections: [
        {
          subtitle: "10.1 - Support technique",
          items: [
            "Assistance par email à contact@freemat.ch",
            "Temps de réponse moyen de 72h ouvrées",
          ],
        },
      ],
    },
    {
      title: "Article 11 - Modification des conditions",
      content: "FreeMatch se réserve le droit de modifier les présentes CGV à tout moment.",
      items: [
        "Les utilisateurs seront informés par email des modifications substantielles",
        "Un préavis de 30 jours sera respecté avant l'application des changements",
        "La continuation de l'utilisation du service vaut acceptation des nouvelles conditions",
        "Les modifications n'affectent pas les abonnements en cours jusqu'à leur renouvellement",
      ],
    },
    {
      title: "Article 12 - Litiges et droit applicable",
      subsections: [
        {
          subtitle: "12.1 - Droit applicable",
          content: "Les présentes CGV sont soumises au droit français.",
        },
        {
          subtitle: "12.2 - Règlement des litiges",
          items: [
            "En cas de litige, une solution amiable sera recherchée en priorité",
            "À défaut de résolution amiable, les tribunaux de Paris seront seuls compétents",
            "Les réclamations doivent être adressées à contact@freemat.ch",
            "Le délai de traitement des réclamations est de 14 jours ouvrés maximum",
          ],
        },
      ],
    },
    {
      title: "Article 13 - Force majeure",
      content:
        "FreeMatch ne pourra être tenue responsable en cas d'inexécution de ses obligations due à un cas de force majeure tel que défini par l'article 1218 du Code civil.",
      items: [
        "Interruptions des réseaux de télécommunications",
        "Catastrophes naturelles",
        "Épidémies",
        "Guerres",
        "Grèves",
        "Bugs ou virus informatiques",
      ],
    },
  ];

  // Le reste du composant avec le même rendu que la page Mentions Légales
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Conditions Générales de Vente</h1>
            <p className="text-gray-600">En vigueur au 27 décembre 2024</p>
          </header>

          {sections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>

              {section.content && <p className="text-gray-600 mb-4">{section.content}</p>}

              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="ml-4 mb-6">
                  <h3 className="text-xl font-medium text-gray-700 mb-3">{subsection.subtitle}</h3>
                  {subsection.items && (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="ml-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.items && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <footer className="mt-12 pt-6 border-t border-gray-200">
            <div className="text-gray-600 text-center">
              <p>Pour toute question, contactez-nous à :</p>
              <p>Email : contact@freemat.ch</p>
              <p>Adresse : 60 rue François 1er, 75008 Paris</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
