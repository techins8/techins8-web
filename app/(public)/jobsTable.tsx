'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Building2, Calendar } from 'lucide-react';
import { IJob } from '../types/job';

interface JobsTableProps {
  initialJobs: IJob[];
}

const JobsTable = ({ initialJobs }: JobsTableProps) => {
  const router = useRouter();

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatSalary = (min?: number, max?: number, currency?: string) => {
    if (!min && !max) return 'Not specified';
    if (min && max) {
      return `${currency || '€'}${min.toLocaleString()} - ${currency || '€'}${max.toLocaleString()}`;
    }
    return `${currency || '€'}${(min || max || 0).toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableHead>Company & Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialJobs.map((job) => (
            <TableRow key={job.id} className="hover:bg-gray-50">
              <TableCell className="py-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-gray-900">
                    {job.title || 'Untitled Position'}
                  </h3>
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill.id} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                        >
                          +{job.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  {job.company && (
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-gray-500" />
                      <span>{job.company.name}</span>
                    </div>
                  )}
                  {job.location && (
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location.name}</span>
                    </div>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <span className="whitespace-nowrap">
                  {formatSalary(job.mindailypay, job.maxdailypay, job.currency)}
                </span>
              </TableCell>
              
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {job.jobtype || 'Not specified'}
                </Badge>
              </TableCell>
              
              <TableCell>
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {formatDate(job.publishedat)}
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/jobs/${job.id}`)}
                  >
                    Details
                  </Button>
                  {job.sourceurl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(job.sourceurl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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