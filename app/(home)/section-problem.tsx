import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SectionProblem = () => {
  const problems = [
    {
      id: 1,
      iconPath: "/images/icons/problem-1.svg",
      alt: "icône code",
      text: (
        <>
          Le marché évolue plus <strong className="text-[#F57F59]">vite</strong> que votre{" "}
          <strong className="text-[#F57F59]">stack</strong>.
        </>
      ),
    },
    {
      id: 2,
      iconPath: "/images/icons/problem-2.svg",
      alt: "icône sablier",
      text: (
        <>
          Pendant que vous cherchez, les <strong className="text-[#F57F59]">meilleurs postes</strong> sont
          déjà <strong className="text-[#F57F59]">pourvus</strong>.
        </>
      ),
    },
    {
      id: 3,
      iconPath: "/images/icons/problem-3.svg",
      alt: "icône barre",
      text: (
        <>
          <strong className="text-[#F57F59]">Python</strong> ? <strong className="text-[#F57F59]">PHP</strong> ? <strong className="text-[#F57F59]">Java</strong>{" "}
          ? Chaque <strong className="text-[#F57F59]">mauvais choix</strong> vous coûte des{" "}
          <strong className="text-[#F57F59]">années</strong>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-12 px-4 mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-3xl text-center mb-12">
          Gérer sa carrière dev est devenu
          <br /> un véritable casse-tête.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ id, alt, iconPath, text }) => (
            <Card
              key={id}
              className="relative p-6 border-none hover:shadow-none bg-white group transition-colors duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="bg-accent/10 rounded-lg absolute top-0 right-0  ">
                    <Image 
                      src={iconPath}
                      alt={alt}
                      width={80}
                      height={80}
                      className="text-accent-foreground"
                    />
                  </div>

                  {/* Number */}
                  <div className="top-4 left-3 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100/80 text-gray-400 font-bold text-2xl transition-colors duration-300 group-hover:bg-gray-200/90 group-hover:text-gray-500">
                    {id}
                  </div>
                </div>

                {/* Text */}
                <p className="mt-6 text-lg font-medium text-primary">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProblem;