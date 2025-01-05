// pages/mentions-legales.tsx
import { Metadata } from 'next';

// Définition des métadonnées pour le SEO
export const metadata: Metadata = {
  title: 'Mentions Légales - TechIns8',
  description: 'Mentions légales et politique de confidentialité de TechIns8',
};

export default function LegalPage() {
  // Nous structurons les sections pour une meilleure maintenance
  const sections = [
    {
      title: "Informations Légales",
      content: "TechIns8 est une Société par Actions Simplifiée (SAS) au capital social de 2 000,00 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 938 964 061 en date du 27 décembre 2024.",
      subsections: [
        {
          subtitle: "Siège social",
          items: [
            "60 rue François 1er",
            "75008 Paris",
            "France"
          ]
        },
        {
          subtitle: "Direction de la société",
          items: [
            "Président : Monsieur Lucien Arbieu",
            "Directeur Général : Monsieur Fahari Hamada Sidi"
          ]
        }
      ]
    },
    {
      title: "Activité de l'entreprise",
      content: "TechIns8 a pour activité principale :",
      items: [
        "La conception et le développement de logiciels et outils informatiques",
        "L'exploitation et la maintenance de solutions logicielles",
        "Le conseil en informatique et en stratégie digitale",
        "La promotion d'entreprises et de services en ligne"
      ]
    },
    {
      title: "Hébergeur",
      content: "Le site TechIns8 est hébergé par :",
      items: [
        "Hostinger International Ltd.",
        "61 Lordou Vironos Street, 6023 Larnaca, Chypre",
        "Site web : https://www.hostinger.com/contacts"
      ]
    },
    // Sections détaillées sur la protection des données
    {
      title: "Protection des Données Personnelles",
      content: "En conformité avec le Règlement Général sur la Protection des Données (RGPD), TechIns8 s'engage à :",
      items: [
        "Collecter uniquement les données nécessaires au service",
        "Protéger vos données avec des mesures de sécurité appropriées",
        "Respecter vos droits sur vos données personnelles",
        "Ne pas commercialiser vos informations personnelles"
      ]
    },
    {
      title: "Collecte et Utilisation des Données",
      content: "Nous collectons différents types de données pour fournir nos services et améliorer votre expérience :",
      subsections: [
        {
          subtitle: "Données fournies volontairement",
          items: [
            "Informations de profil professionnel (CV, expériences, compétences)",
            "Coordonnées (email, téléphone)",
            "Préférences de recherche d'emploi",
            "Documents téléchargés"
          ]
        },
        {
          subtitle: "Données collectées automatiquement",
          items: [
            "Adresse IP et identifiants techniques",
            "Données de navigation et d'utilisation",
            "Cookies techniques essentiels",
            "Statistiques d'utilisation anonymisées"
          ]
        }
      ]
    },
    {
      title: "Finalités du Traitement",
      content: "Vos données sont utilisées aux fins suivantes :",
      items: [
        "Fourniture du service d'analyse d'offres d'emploi",
        "Personnalisation de votre expérience utilisateur",
        "Amélioration continue de nos services",
        "Communication sur les mises à jour importantes",
        "Respect de nos obligations légales"
      ]
    },
    {
      title: "Base Légale des Traitements",
      subsections: [
        {
          subtitle: "Consentement",
          content: "Pour les traitements basés sur votre consentement explicite :",
          items: [
            "L'envoi de communications marketing",
            "L'utilisation de cookies non essentiels",
            "L'analyse approfondie de votre profil"
          ]
        },
        {
          subtitle: "Exécution du contrat",
          content: "Pour les traitements nécessaires à la fourniture du service :",
          items: [
            "Gestion de votre compte utilisateur",
            "Traitement des paiements",
            "Support technique"
          ]
        }
      ]
    },
    {
      title: "Conservation des Données",
      content: "Nous conservons vos données selon les durées suivantes :",
      items: [
        "Données de compte : pendant la durée de votre inscription plus 2 ans",
        "Données de paiement : 10 ans (obligation légale)",
        "Cookies : 13 mois maximum",
        "Logs de connexion : 12 mois"
      ]
    },
    {
      title: "Vos Droits",
      content: "Conformément au RGPD, vous disposez des droits suivants :",
      items: [
        "Droit d'accès à vos données",
        "Droit de rectification des données inexactes",
        "Droit à l'effacement ('droit à l'oubli')",
        "Droit à la limitation du traitement",
        "Droit à la portabilité de vos données",
        "Droit d'opposition au traitement de vos données"
      ],
      footer: "Pour exercer ces droits, contactez notre DPO à contact@techins8.com"
    },
    {
      title: "Transfert de Données",
      content: "Vos données sont hébergées sur des serveurs situés dans l'Union Européenne. Nous travaillons avec des sous-traitants soigneusement sélectionnés :",
      items: [
        "Hébergement : Hostinger International Ltd. (UE)",
        "Paiement : Stripe (UE)",
        "Analyse : Google Analytics (UE, avec IP anonymisée)"
      ]
    },
    {
      title: "Sécurité",
      content: "Nous mettons en œuvre des mesures de sécurité appropriées :",
      items: [
        "Chiffrement SSL/TLS pour toutes les communications",
        "Stockage sécurisé des mots de passe (hachage)",
        "Accès restreint aux données personnelles",
        "Surveillance continue des accès",
        "Protection contre les attaques informatiques"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Mentions Légales TechIns8
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : 27 décembre 2024
            </p>
          </header>

          {sections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              
              {section.content && (
                <p className="text-gray-600 mb-4">{section.content}</p>
              )}

              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="ml-4 mb-6">
                  <h3 className="text-xl font-medium text-gray-700 mb-3">
                    {subsection.subtitle}
                  </h3>
                  {subsection.items && (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="ml-4">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.items && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="ml-4">{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <footer className="mt-12 pt-6 border-t border-gray-200">
            <div className="text-gray-600 text-center">
              <p>Pour toute question, contactez-nous à :</p>
              <p>Email : contact@techins8.com</p>
              <p>Adresse : 60 rue François 1er, 75008 Paris</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}