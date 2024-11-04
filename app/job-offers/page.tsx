import { Suspense } from "react";
import JobsTable from "./jobsTable";
import { getJobsBrut } from "./jobs.action";

export default async function HomePage() {
  const jobs = await getJobsBrut();

  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobsTable initialJobs={jobs} />
      </Suspense>
    </div>
  );
}
