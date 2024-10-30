import JobsTable from "./(public)/jobsTable";
import { Suspense } from 'react';
import { getJobsBrut } from "./actions/getJobsBrut";


export default async function JobsPage() {
  const jobs = await getJobsBrut();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Available Positions</h1>
      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobsTable initialJobs={jobs} />
      </Suspense>
    </div>
  );
}