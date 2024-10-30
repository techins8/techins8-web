// app/(public)/page.tsx
import { Suspense } from 'react';
// import JobsTable from './job_offers/jobsTable';
// import { getJobsBrut } from '../actions/getJobsBrut';


export default async function HomePage() {
//   const jobs = await getJobsBrut();

  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading jobs...</div>}>
        <h1 className=''>Landing Page</h1>
      </Suspense>
    </div>
  );
}