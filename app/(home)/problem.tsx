import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Problem = () => {
  const problems = [
    {
      id: 1,
      iconPath: "/images/icons/hourglass.svg",
      alt: "icône sablier",
      text: (
        <>
          <strong className="text-[#F57F59]">D&apos;inombrables heures perdues</strong> à filtrer des offres trompeuses
        </>
      ),
      size: "large",
    },
    {
      id: 2,
      iconPath: "/images/icons/location-cross.svg",
      alt: "icône localisation",
      text: (
        <>
          Des offres <strong className="text-[#F57F59]">full remote</strong> qui cachent 3 jours de présentiel
        </>
      ),
      size: "small",
    },
    {
      id: 3,
      iconPath: "/images/icons/money-confusion.svg",
      alt: "icône salaire",
      text: (
        <>
          Des <strong className="text-[#F57F59]">TJM fantaisistes</strong> variant de 100€ à 700€ par jour
        </>
      ),
      size: "small",
    },
    {
      id: 4,
      iconPath: "/images/icons/skill-mismatch.svg",
      alt: "icône compétences",
      text: (
        <>
          Des descriptions où <strong className="text-[#F57F59]">React côtoie COBOL</strong>
        </>
      ),
      size: "medium",
    },
  ];

  return (
    <section className="mt-44">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 font-heading">
        Les fausses annonces vous coûtent des heures de recherche inutiles
      </h2>
      <p className="text-center text-gray-600 mb-12 font-body">
        Des milliers d&apos;annonces, des dizaines de job boards mais pas de confiance.
      </p>

      <div className="grid grid-cols-1 gap-6 max-w-[1200px] mx-auto">
        {/* Top large card */}
        <Card className="border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative flex-shrink-0 bg-accent/20 backdrop-blur-sm rounded-2xl p-3">
                    <Image
                      src={problems[0].iconPath}
                      alt={problems[0].alt}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-heading leading-relaxed">{problems[0].text}</p>
                </div>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-center gap-3 text-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-x w-5 h-5 text-accent">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
                      </svg>
                      <span>Vous préférez passer des heures à filtrer manuellement les offres</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-x w-5 h-5 text-accent">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
                      </svg>
                      <span>Les conditions de travail floues ne vous dérangent pas</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-x w-5 h-5 text-accent">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
                      </svg>
                      <span>Vous aimez découvrir les vraies conditions en entretien</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-x w-5 h-5 text-accent">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
                      </svg>
                      <span>Vous avez du temps à perdre avec des annonces en doublon</span>
                    </li>
                  </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative w-full md:w-[400px] h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src="/gif/waiting-gif.webp"
                    alt="Waiting animation"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two columns grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column - Full height card */}
          <Card className="border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-all duration-200 h-full">
            <CardContent className="p-6 h-full">
              <div className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 relative flex-shrink-0 bg-accent/10 rounded-xl p-2.5">
                  <Image
                    src={problems[1].iconPath}
                    alt={problems[1].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <p className="text-lg font-body leading-relaxed">{problems[1].text}</p>
                  </div>
                  <div className="relative w-full h-[170px] mt-4 rounded-xl overflow-hidden">
                    <Image
                      src="/gif/remote-gif.webp"
                      alt="Remote work animation"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Right column - Stacked cards */}
          <div className="space-y-6">
            <Card className="border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-all duration-200 h-[calc(50%-12px)]">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 relative flex-shrink-0 bg-accent/10 rounded-xl p-2.5">
                    <Image
                      src={problems[2].iconPath}
                      alt={problems[2].alt}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-lg font-body leading-relaxed">{problems[2].text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-all duration-200 h-[calc(50%-12px)]">
              <CardContent className="p-6 h-full">
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 relative flex-shrink-0 bg-accent/10 rounded-xl p-2.5">
                    <Image
                      src={problems[3].iconPath}
                      alt={problems[3].alt}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="text-lg font-body leading-relaxed">{problems[3].text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          
        </div>
      </div>

      <p className="text-center text-gray-600 mt-12 font-body max-w-2xl mx-auto">
        Le temps que vous perdez à démêler le vrai du faux pourrait être tellement mieux utilisé pour préparer vos entretiens ou améliorer vos compétences.
      </p>
    </section>
  );
};

export default Problem;
