export default function SocialProof() {
  const testimonials = [
    {
      content: "J'étais sceptique au début, mais TechIns8 m'a fait gagner un temps fou. L'IA a repéré une incohérence dans une offre qui se disait full remote mais exigeait 3 jours sur site en petits caractères. Sans ça, j'aurais perdu mon temps en entretien.",
      author: "Marie L.",
      role: "Développeuse Full Stack"
    },
    {
      content: "Le plus impressionnant, c'est la détection des TJM incohérents. Une offre affichait 750€/j mais l'IA a détecté dans la description que c'était en réalité 'négociable entre 450-550€'.",
      author: "Thomas B.",
      role: "DevOps Senior"
    },
    {
      content: "Je recommande vivement. La feature qui regroupe les offres de plusieurs job boards au même endroit est géniale, et l'analyse IA apporte une vraie valeur ajoutée.",
      author: "Sophia R.",
      role: "Lead Dev"
    }
  ];

  return (
    <div className="bg-white mt-24 sm:py-32 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que disent nos utilisateurs
          </h2>
        </div>

        {/* Placeholder for video */}
        <div className="mx-auto mt-16 max-w-2xl rounded-xl bg-gray-50 p-8 flex items-center justify-center h-[400px]">
          <div className="text-gray-500">
            [Vidéo de témoignages]
          </div>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{testimonial.content}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
