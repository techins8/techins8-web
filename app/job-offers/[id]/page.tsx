import { getJob } from "../jobs.query";
import JobDetail from "./job-detail";

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
