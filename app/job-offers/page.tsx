import { buildQuery } from "@/lib/http";
import { Suspense } from "react";
import { JobsPaginations } from "./jobs-paginations";
import { getJobsBrut, IGetJobsBrutParams } from "./jobs.query";
import JobsTable from "./jobsTable";

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
    page: parseInt(page),
    size: parseInt(size),
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
      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobsTable initialJobs={result.jobs} />
        <JobsPaginations
          page={params.page}
          totalPages={Math.ceil(result.total / params.size)}
          getUrl={getUrl}
        />
      </Suspense>
    </div>
  );
}
