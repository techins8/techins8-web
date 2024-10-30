import { IJob } from "@/app/types/job";

export async function getJobsBrut(): Promise<IJob[]> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/jobs_brut/all_jobs_brut?page=1&page_size=10`,
        {
          cache: 'no-store', // ou 'force-cache' si vous voulez du caching
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
  }