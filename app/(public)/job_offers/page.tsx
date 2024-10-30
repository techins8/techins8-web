// app/(public)/page.tsx
import { getJobsBrut } from '@/app/actions/getJobsBrut';
import { Suspense } from 'react';
import JobsTable from './jobsTable';



export default async function HomePage() {
  const jobs = await getJobsBrut();

  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <h1 className=''>Landing Page</h1>
        <JobsTable initialJobs={jobs} />
      </Suspense>
    </div>
  );
}