import type { Metadata } from "next";
import { buildQuery } from "@/lib/http";
import { WEBSITE_URL } from "../seo";
import { getJobsBrut, type IGetJobsBrutParams } from "./jobs.query";
import { JobsPaginations } from "./jobs-paginations";
import JobsTable from "./jobsTable";

export const metadata: Metadata = {
  title: "Offres d'emploi tech pour développeurs freelances",
  description:
    "Parcourez les offres d'emploi tech pour développeurs : full remote, full stack, backend, frontend, DevOps. Trouvez votre prochaine mission freelance avec FreeMatch.",
  openGraph: {
    title: "Offres d'emploi tech - FreeMatch",
    description:
      "Parcourez les offres d'emploi tech pour développeurs : full remote, full stack, backend, frontend, DevOps.",
    type: "website",
    url: `${WEBSITE_URL}/job-offers`,
  },
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
    size: string;
    onlyPublished: string;
    locations: string[];
    skills: string[];
    companies: string[];
  }>;
}) {
  const {
    page = "1",
    size = "10",
    onlyPublished = "true",
    locations = [],
    skills = [],
    companies = [],
  } = await searchParams;

  const params = {
    page: parseInt(page, 10),
    size: parseInt(size, 10),
    onlyPublished: onlyPublished === "true",
    locations,
    skills,
    companies,
  };

  const result = await getJobsBrut(params);

  const getUrl = (newParams: IGetJobsBrutParams) => {
    const query = buildQuery({
      ...params,
      ...newParams,
    });
    return `/job-offers?${query}`;
  };

  return (
    <div className="container mx-auto py-8">
      <JobsTable initialJobs={result.jobs} />
      <JobsPaginations
        page={params.page}
        totalPages={Math.ceil(result.total / params.size)}
        getUrl={getUrl}
      />
    </div>
  );
}
