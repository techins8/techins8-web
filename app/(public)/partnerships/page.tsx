import { fetchPartnerships, Partnership } from "@/query/partnershipService";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const PartnershipCard = ({ partnership }: { partnership: Partnership }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* En-tête avec Logo */}
      {partnership.logo && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={partnership.logo}
            alt={partnership.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
          <Star className="h-4 w-4" />
          <span>Partenaire</span>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold text-slate-800">
            {partnership.name}
          </h2>
          {partnership.description && (
            <p className="text-sm leading-relaxed text-slate-600">
              {partnership.description}
            </p>
          )}
        </div>

        {/* Bouton */}
        {partnership.websiteUrl && (
          <div className="mt-auto pt-4">
            <a
              href={partnership.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f57f59] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#f57f59]/90"
            >
              Découvrir
              <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const PartnershipsPage = async () => {
  const partnerships = await fetchPartnerships();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Nos Partenariats</h1>
        <p className="mt-2">
          Découvrez nos partenaires sélectionnés pour vous aider dans votre
          carrière
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partnerships.map((partnership: Partnership) => (
          <PartnershipCard key={partnership.id} partnership={partnership} />
        ))}
      </div>
    </div>
  );
};

export default PartnershipsPage;
