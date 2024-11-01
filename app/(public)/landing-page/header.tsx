import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const profiles = [
    {
      src: "/images/profiles/1728068739164-p-500.webp",
      alt: "Photo de Profil de Luc Ebert",
    },
    {
      src: "/images/profiles/1727449043392-1-p-500.webp",
      alt: "Photo de Profil de Poudevigne Mattieu",
    },
    {
      src: "/images/profiles/1725637043013-1-p-500.webp",
      alt: "Photo de Profil de Gaetan Redin",
    },
    {
      src: "/images/profiles/1723189560386-1.webp",
      alt: "Photo de Profil de Mathieux Dacheux",
    },
  ];

  return (
    <div className="flex items-center flex-col justify-center mt-14">
      <h1 className="home text-center max-w-[580px]">
        Étudie le marché de l&apos;emploi IT, sans efforts.
      </h1>
      <div className="mt-4 text-base sm:text-[18px] sm:leading-[27px] text-stone-500 font-[450] text-center max-w-[600px]">
        Décodez les tendances cachées des entreprises tech et surpassez vos
        ambitions de carrière
      </div>
      <div className="w-full mt-6 max-w-[420px]">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 gap-4 sm:gap-2">
          {/* Dashboard Access Button */}
          <Button
            asChild
            variant="default"
            size="default"
            className="w-[50%] sm:w-auto bg-accent-foreground text-primary-foreground shadow-button transition-colors hover:bg-[#fa471198] hover:text-primary-foreground [&>a]:hover:text-primary-foreground"
          >
            <a
              href="https://dashboard.techins8.com/"
              className="hover:text-primary-foreground"
            >
              Accès dashboard
            </a>
          </Button>

          {/* Profiles and Text Section */}
          <div className="flex items-center justify-center sm:justify-end col-span-2">
            {/* Profile Images */}
            <div className="flex -space-x-4">
              {profiles.map((profile, index) => (
                <div key={index} className="relative first:ml-0">
                  <Image
                    src={profile.src}
                    width={33}
                    height={33}
                    alt={profile.alt}
                    className="rounded-full border-2 border-white hover:z-10 transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="ml-1 text-sm text-secondary">
              Affine ton positionnement !
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:max-w-[900px]">
        <Image
          src="/images/dashboard.png"
          alt="Aperçu du tableau de bord"
          width={900}
          height={300}
          className="rounded-lg shadow-[0_15px_50px_0px_rgba(0,0,0,0.2)]"
        />
      </div>
    </div>
  );
};

export default Header;
