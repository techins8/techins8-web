export default function Pricing() {
  const plans = [
    {
      name: "MENSUEL",
      price: "14,90€",
      period: "/mois",
      features: [
        "Accès complet à l'analyse IA",
        "Agrégation multi-sources",
        "Mises à jour quotidiennes"
      ],
      cta: "Choisir l'offre mensuelle",
      popular: false
    },
    {
      name: "ANNUEL",
      price: "119€",
      period: "/an",
      subPrice: "Soit 9,92€/mois",
      discount: "Économisez 25%",
      features: [
        "Accès complet à l'analyse IA",
        "Agrégation multi-sources",
        "Mises à jour quotidiennes"
      ],
      cta: "Choisir l'offre annuelle",
      popular: true
    },
    {
      name: "2 ANS",
      price: "159€",
      subPrice: "Soit 6,63€/mois",
      discount: "Économisez 55%",
      features: [
        "Accès complet à l'analyse IA",
        "Agrégation multi-sources",
        "Mises à jour quotidiennes",
        "Accès prioritaire aux nouvelles fonctionnalités"
      ],
      cta: "Choisir l'offre 2 ans",
      popular: false,
      bestValue: true
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Tarifs</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choisissez l&apos;offre qui vous correspond
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ${
                plan.popular
                  ? 'bg-gray-50 ring-2 ring-indigo-600'
                  : 'ring-gray-200'
              } ${plan.bestValue ? 'ring-2 ring-green-600' : ''} xl:p-10`}
            >
              {(plan.popular || plan.bestValue) && (
                <p className={`text-sm font-semibold leading-6 ${plan.popular ? 'text-indigo-600' : 'text-green-600'}`}>
                  {plan.popular ? 'PLUS POPULAIRE' : 'MEILLEURE VALEUR'}
                </p>
              )}
              <div className="flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {plan.period}
                  </span>
                )}
              </div>
              {plan.subPrice && (
                <p className="mt-2 text-sm text-gray-600">{plan.subPrice}</p>
              )}
              {plan.discount && (
                <p className="mt-2 text-sm font-semibold text-green-600">{plan.discount}</p>
              )}
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular || plan.bestValue
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Offre de lancement limitée - les 50 premiers abonnés bénéficieront d&apos;un accès prioritaire à nos prochaines fonctionnalités, notamment l&apos;analyse prédictive des tendances du marché.
        </p>
      </div>
    </div>
  );
}
