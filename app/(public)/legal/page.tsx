import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - TechIn8',
  description: 'Politique de confidentialité et mentions légales de TechIn8',
};

export default function LegalPage() {
  const sections = [
        {
          title: "Introduction",
          content: "Bienvenue sur TechIn8. Nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations."
        },
        {
          title: "Collecte des Données",
          subsections: [
            {
              subtitle: "Informations que vous nous fournissez :",
              items: [
                "Données de profil professionnel (CV, expérience, compétences)",
                "Informations de contact (email, numéro de téléphone)",
                "Préférences professionnelles (type de contrat, salaire souhaité)"
              ]
            },
            {
              subtitle: "Informations collectées automatiquement :",
              items: [
                "Données de navigation (adresse IP, type de navigateur)",
                "Cookies techniques nécessaires au fonctionnement du site",
                "Statistiques d'utilisation anonymisées"
              ]
            },
            {
              subtitle: "Authentification via LinkedIn :",
              content: "Si vous utilisez la connexion LinkedIn, nous accédons à :",
              items: [
                "Votre profil professionnel LinkedIn",
                "Votre adresse email",
                "Vos informations professionnelles publiques"
              ]
            },
            {
              subtitle: "Authentification via Google :",
              content: "Si vous utilisez la connexion Google, nous accédons à :",
              items: [
                "Votre nom et prénom",
                "Votre adresse email",
                "Votre photo de profil (si disponible)",
                "Les informations publiques de votre compte Google"
              ]
            },
            {
              subtitle: "Authentification via GitHub :",
              content: "Si vous utilisez la connexion GitHub, nous accédons à :",
              items: [
                "Votre nom d'utilisateur GitHub",
                "Votre adresse email",
                "Votre photo de profil",
                "Vos repositories publics",
                "Les informations publiques de votre profil GitHub"
              ]
            }
          ]
        },
        {
          title: "Utilisation des Données",
          content: "Vos données sont utilisées pour :",
          items: [
            "Personnaliser votre expérience utilisateur",
            "Vous proposer des offres d'emploi pertinentes",
            "Améliorer nos services et fonctionnalités",
            "Communiquer avec vous concernant nos services",
            "Générer des statistiques anonymes sur le marché de l'emploi IT"
          ]
        },
        {
          title: "Protection des Données",
          content: "Nous mettons en œuvre des mesures de sécurité pour protéger vos données :",
          items: [
            "Chiffrement des données sensibles",
            "Accès restreint aux données personnelles",
            "Hébergement sécurisé des données",
            "Mise à jour régulière de nos systèmes de sécurité"
          ]
        },
        {
          title: "Partage des Données",
          content: "Nous ne partageons vos données qu'avec :",
          items: [
            "Nos partenaires techniques (hébergement, analyse)",
            "Les recruteurs que vous autorisez explicitement",
            "Les autorités en cas d'obligation légale"
          ]
        },
        {
          title: "Vos Droits",
          content: "Conformément au RGPD, vous disposez des droits suivants :",
          items: [
            "Accès à vos données personnelles",
            "Rectification de vos données",
            "Suppression de vos données",
            "Opposition au traitement",
            "Portabilité des données",
            "Retrait du consentement"
          ],
          footer: "Pour exercer ces droits, contactez-nous à : contact@techins8.com"
        },
        {
          title: "Conservation des Données",
          content: "Nous conservons vos données :",
          items: [
            "Pendant la durée de votre utilisation active du service",
            "2 ans après votre dernière connexion",
            "Jusqu'à votre demande de suppression"
          ]
        },
        {
          title: "Cookies",
          content: "Nous utilisons des cookies pour :",
          items: [
            "Assurer le fonctionnement technique du site",
            "Améliorer la navigation",
            "Analyser l'utilisation du service"
          ],
          footer: "Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur."
        },
        {
          title: "Modifications",
          content: "Nous nous réservons le droit de modifier cette politique. Les changements seront notifiés sur cette page avec la date de mise à jour."
        },
        {
          title: "Contact",
          content: "Pour toute question concernant notre politique de confidentialité :",
          items: [
            "Email : contact@techins8.com",
            "Adresse : Marseille",
          ]
        },
        {
          title: "Consentement",
          content: "En utilisant TechIn8, vous consentez à notre politique de confidentialité."
        },
        {
          title: "Autorité de Contrôle",
          content: "Vous pouvez introduire une réclamation auprès de la CNIL :",
          items: [
            "www.cnil.fr",
            "3 Place de Fontenoy, 75007 Paris"
          ]
        }
      ];

      return (
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <header className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Politique de Confidentialité de TechIn8
                </h1>
                <p className="text-gray-600">
                  Dernière mise à jour : 09 octobre 2024
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
                      {subsection.content && (
                        <p className="text-gray-600 mb-2">{subsection.content}</p>
                      )}
                      {subsection.items && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="ml-4">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </section>
              ))}
    
              <footer className="mt-12 pt-6 border-t border-gray-200">
                <div className="text-gray-600 text-center">
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <p>Email : contact@techins8.com</p>
                  <p>Adresse : Marseille</p>
                </div>
              </footer>
            </div>
          </div>
        </main>
      );
    }