import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center flex-col justify-center mt-14">
      <div className="text-center bg-blur bg-transparent backdrop-blur-md border px-4 placeholder-destructive-foreground mx-auto max-w-7xl rounded-full mb-8">
        <p className="text-sm leading-8 text-accent italic">
          Trouve ta prochaine mission tech en toute confiance.
        </p>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 text-center max-w-[680px]">
        Fini les fausses annonces et le temps{" "}
        <span className="relative">
          perdu
          <span className="absolute bottom-1 left-0 w-full h-[0.12em] bg-accent transform -skew-y-2 translate-y-1 rounded"></span>
          .
        </span>
      </h1>
      
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-[600px]">
        Laisse notre IA analyser les offres d&apos;emploi pour toi. Plus de mauvaises surprises, uniquement des opportunités vérifiées.
      </p>

      <div className="w-full mt-10 max-w-[420px]">
        <div className="flex justify-center">
          <Button
            asChild
            variant="default"
            size="default"
            className="w-[50%] sm:w-auto bg-accent-foreground text-primary-foreground shadow-button transition-colors hover:bg-[#fa471198] hover:text-primary-foreground [&>a]:hover:text-primary-foreground"
          >
            <a
              href="#pricing"
              className="hover:text-primary-foreground"
            >
              Découvrir TechIns8 Premium
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-20 sm:max-w-[900px]">
        <Image
          src="/images/screenshots/techins8-job-ai.png"
          alt="TechIns8 AI Job Analysis Dashboard"
          width={900}
          height={300}
          className="rounded shadow-[0_15px_50px_0px_rgba(0,0,0,0.2)]"
          priority
        />
      </div>
    </div>
  );
}
