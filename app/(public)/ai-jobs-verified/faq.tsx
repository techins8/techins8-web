export default function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce qui différencie TechIns8 des autres job boards ?",
      answer: "Contrairement aux job boards traditionnels qui se contentent d'afficher les annonces telles quelles, notre IA analyse en profondeur chaque offre pour vérifier la cohérence des informations. C'est comme avoir un expert RH qui préqualifie chaque offre pour vous."
    },
    {
      question: "Comment être sûr que l'analyse IA est fiable ?",
      answer: "Notre IA est entraînée sur des milliers d'offres d'emploi et utilise des règles métier précises pour détecter les incohérences. Pour chaque annonce, vous pouvez voir exactement ce que l'IA a vérifié et modifié."
    },
    {
      question: "Pourquoi payer pour TechIns8 alors que j'ai déjà des alertes LinkedIn ?",
      answer: "LinkedIn et les autres plateformes vous envoient toutes les offres correspondant à vos mots-clés, sans vérification. Résultat ? Vous perdez du temps à filtrer manuellement. TechIns8 fait ce travail pour vous."
    },
    {
      question: "Comment fonctionne l'abonnement ?",
      answer: "Lorsque vous vous abonnez, vous avez accès à toutes les fonctionnalités premium pendant toute la durée de votre abonnement. Si vous décidez d'arrêter votre abonnement, vous conservez l'accès à la plateforme jusqu'à la fin de la période pour laquelle vous avez payé."
    },
    {
      question: "Puis-je changer d'offre en cours d'abonnement ?",
      answer: "Oui, vous pouvez passer à une offre supérieure à tout moment. La différence sera calculée au prorata de votre période restante."
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Questions fréquentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Rejoindre TechIns8 Premium
          </a>
        </div>
      </div>
    </div>
  );
}
