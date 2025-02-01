import Link from "next/link";
import Image from "next/image";
import SubHeader from "./sub-header";
import { useTranslations } from 'next-intl';

interface HeaderProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

const Header = ({ heroTitle, heroSubtitle }: HeaderProps) => {
  const t = useTranslations('HomePage.Header');
  
  // Function to format the title with the developer type in a span
  const formatTitle = (title: string | undefined) => {
    if (!title) {
      return (
        <>
          {t.raw('titlePrefix')}
          {" "}
          <span className="text-primary">{t('defaultType')}</span>
          {t.raw('titleSuffix')}
        </>
      );
    }

    return (
      <>
        {t.raw('titlePrefix')}
        {" "}
        <span className="text-primary">{title}</span>
        {t.raw('titleSuffix')}
      </>
    );
  };

  return (
    <section className="mt-28">
      <div className="flex items-center flex-col justify-center mt-14">
        <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl max-w-[720px] text-title !leading-tight mx-4">
          {formatTitle(heroTitle)}
        </h1>
        <div className="mt-4 text-base sm:text-[18px] sm:leading-[27px] text-muted font-[450] text-center max-w-[520px] mx-4">
          {heroSubtitle || t('subtitle')}
        </div>
        <SubHeader />
        <button className="mt-10">
          <Link
            href={process.env.NEXT_PUBLIC_DASHBOARD_URL ?? ""}
            target="_parent"
            className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-md transition-colors button-nav"
          >
            {t('ctaButton')}
          </Link>
        </button>
        <div className="flex items-center justify-center gap-4 mt-12 px-4">
          <a href="https://www.uneed.best/tool/techins8">
            <Image src="https://www.uneed.best/EMBED3.png" 
            alt="Uneed Embed Badge" 
            width={250} 
            height={54} 
              className="w-[180px] sm:w-[250px] h-auto" 
            />
          </a>
          <a href="https://www.producthunt.com/posts/techins8?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-techins8" target="_blank">
            <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=831366&theme=light&t=1738161324680" 
            alt="TechIns8 - The first AI-powered job board for developers." 
            width={250} 
            height={54} 
              className="w-[180px] sm:w-[250px] h-auto" 
            />
          </a>
        </div>
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