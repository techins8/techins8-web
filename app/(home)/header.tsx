import { Button } from "@/components/ui/button";
import Image from "next/image";
import SubHeader from "./sub-header";
import Link from "next/link";

const Header = () => {


  return (
    <section className="mt-48">
      <div className="flex items-center flex-col justify-center mt-14">
        <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl max-w-[720px] text-title !leading-tight mx-4">
          Le premier job board boosté par l'IA pour les <span className="text-primary"> développeurs</span>.
        </h1>
        <div className="mt-4 text-base sm:text-[18px] sm:leading-[27px] text-muted font-[450] text-center max-w-[520px] mx-4">
          Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.
        </div>
        <SubHeader />
        <button className="mt-10">
          <Link
            href="https://dashboard.techins8.com/"
            target="_parent"
            className=" bg-primary text-primary-foreground font-semibold  px-5 py-2 rounded-md transition-colors button-nav"
          >
            ESSAYER GRATUITEMENT
          </Link>
        </button>
        <div className="mt-12 sm:max-w-[900px] mb-12 mx-6">
          <Image
            src="/images/dashboard.png"
            alt="Aperçu du tableau de bord"
            width={900}
            height={300}
            className="rounded-lg shadow-[0_15px_50px_0px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
