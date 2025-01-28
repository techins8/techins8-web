import Link from "next/link";
import SubHeader from "./sub-header";

interface HeaderProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

const Header = ({ heroTitle, heroSubtitle }: HeaderProps) => {
  // Function to format the title with the developer type in a span
  const formatTitle = (title: string | undefined) => {
    if (!title) {
      return (
        <>
          Le premier site d&apos;emploi boosté par l&apos;IA pour les{" "}
          <span className="text-primary">développeurs</span>.
        </>
      );
    }

    return (
      <>
        Le premier site d&apos;emploi boosté par l&apos;IA pour les{" "}
        <span className="text-primary">{title}</span>.
      </>
    );
  };

  const defaultSubtitle = "Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.";

  return (
    <section className="mt-28">
      <div className="flex items-center flex-col justify-center mt-14">
        <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl max-w-[720px] text-title !leading-tight mx-4">
          {formatTitle(heroTitle)}
        </h1>
        <div className="mt-4 text-base sm:text-[18px] sm:leading-[27px] text-muted font-[450] text-center max-w-[520px] mx-4">
          {heroSubtitle || defaultSubtitle}
        </div>
        <SubHeader />
        <button className="mt-10">
          <Link
            href={process.env.NEXT_PUBLIC_DASHBOARD_URL ?? ""}
            target="_parent"
            className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-md transition-colors button-nav"
          >
            ESSAYER GRATUITEMENT
          </Link>
        </button>
        <div className="mt-12 sm:max-w-[900px] mb-12 mx-6">
          <iframe
            src="https://www.youtube.com/embed/VPS8ig3p0Yc"
            title="TechIns8 Video"
            width="420" 
            height="230"
            className="w-full sm:w-[780px] sm:h-[600px] rounded-lg shadow-[0_15px_50px_0px_rgba(0,0,0,0.5)]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;