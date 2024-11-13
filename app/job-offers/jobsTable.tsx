"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IJob } from "@/types/job";
import { formatDistance } from "date-fns";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface JobsTableProps {
  initialJobs: IJob[];
}

const JobsTable = ({ initialJobs }: JobsTableProps) => {
  const getPublishedAt = (job: IJob) => {
    const publishedAt: string | undefined = job.publishedat ?? job.createdat;
    if (!publishedAt) return "---";
    return formatDistance(new Date(publishedAt), new Date(), {
      addSuffix: true,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Lieu</TableHead>
            <TableHead>Entreprise</TableHead>
            <TableHead>Salaire</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Publié le</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {initialJobs.map((job) => (
            <TableRow key={job.id} className="hover:bg-gray-50">
              <TableCell className="py-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-gray-900">
                    <Link href={`job-offers/${job.id}`}>
                      {job.title || "Untitled Position"}
                    </Link>
                  </h3>

                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill.id}
                          variant="techins8"
                          className="text-xs"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="techins8" className="text-xs">
                          +{job.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-1 text-gray-500">
                  <span>{job.location?.city ?? job.location?.shortlabel}</span>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-1">
                  <span>{job.company?.name ?? "---"}</span>
                </div>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap">
                  {job.annualsalary}
                  {job.annualsalary && job.dailysalary && " / "}
                  {job.dailysalary}
                </span>
              </TableCell>

              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {job.jobtype || "Not specified"}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-1 text-gray-500">
                  {getPublishedAt(job)}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex gap-2">
                  {/* <Link
                    href={`/job-offers/${job.id}`}
                    className="text-sm font-medium text-primary"
                  >
                    Details
                  </Link> */}
                  {job.sourceurl && (
                    <Link
                      href={job.sourceurl || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobsTable;
