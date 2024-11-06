import { getJob } from "../jobs.query";

export default async function JobOfferPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob({ id });
  return <div>{job?.title}</div>;
}
