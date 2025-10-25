import { fetchPartnerships, type Partnership } from "@/query/partnershipService";
import PartnershipCard from "./partnership-card";

const PartnershipsPage = async () => {
  const partnerships = await fetchPartnerships();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Nos Partenariats</h1>
        <p className="mt-2">
          Découvrez nos partenaires sélectionnés pour vous aider dans votre carrière
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
