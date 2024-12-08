import { getJob } from "../jobs.query";
import JobDetail from "./job-detail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob({ id });

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The requested job could not be found",
    };
  }

  return {
    title: `${job.title} - ${job.company?.name}`,
    description: job.description?.substring(0, 160),
    keywords: job.skills?.join(", "),
    openGraph: {
      title: `${job.title} - ${job.company?.name}`,
      description: job.description?.substring(0, 160),
      keywords: job.skills?.join(", "),
    },
  };
}

export default async function JobOfferPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob({ id });

  if (!job) throw new Error("Job not found");

  return <JobDetail job={job} />;
}
