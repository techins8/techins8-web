"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IJob } from "@/types/job";
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import { Briefcase, Building2, Clock, Euro, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SourceIcon } from "../source-icon";
export default function JobDetails({ job }: { job: IJob }) {
  const publishedAt: string | undefined = job.publishedat ?? job.createdat;

  function createMarkup(c: string) {
    return { __html: c };
  }

  return (
    <div id="job-detail" className="p-4 md:p-6 lg:p-8">
      <style>
        {`
          #job-detail {
            p {
              margin-bottom: 1rem;
            }
            br {
              margin-bottom: 0.5rem;
              display: block;
              content: "";
              height: 0.1rem;
            }
            ul {
              margin-left: 1rem;
              margin-bottom: 1rem;
              li {
                margin-bottom: 0.5rem;
                list-style-type: disc;
              }
            }
          }
        `}
      </style>
      <Card>
        <CardHeader className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <SourceIcon source={job.source} />
                <span>{job.title}</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-4 h-4" />
                <span>{job.company?.name}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {job.sourceurl && (
                <Link
                  href={job.sourceurl}
                  target="_blank"
                  className={buttonVariants({ variant: "techins8" })}
                >
                  Postuler
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {job.skills?.map((skill) => (
              <Badge key={skill.id} variant="techins8">
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{job.location?.label}</span>
            </div>
            {job.annualsalary && (
              <div className="flex items-center gap-2">
                <Euro className="w-4 h-4 text-muted-foreground" />
                <span>{job.annualsalary} par an</span>
              </div>
            )}
            {job.dailysalary && (
              <div className="flex items-center gap-2">
                <Euro className="w-4 h-4 text-muted-foreground" />
                <span>{job.dailysalary} par jour</span>
              </div>
            )}
            {job.remotemode && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>Télétravail : {job.remotemode}</span>
              </div>
            )}
            {job.experience && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span>Expérience : {job.experience}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <span>{job.jobtype}</span>
            </div>
            <div className="flex items-center gap-2">
              {publishedAt && (
                <>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>
                    Publié il y a{" "}
                    {formatDistance(new Date(publishedAt), new Date(), {
                      locale: fr,
                      addSuffix: false,
                    })}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Description du poste</h2>
              <p
                className="text-muted-foreground"
                dangerouslySetInnerHTML={createMarkup(job.description ?? "")}
              />
            </section>

            <section className="space-y-4 border-t pt-6">
              <h2 className="text-xl font-semibold">
                A propos de l&apos;entreprise
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground font-bold">
                {job.company?.logo && (
                  <Image
                    src={job.company?.logo}
                    alt={job.company?.name ?? ""}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                )}
                <div className="flex items-center gap-2 text-muted-foreground font-bold">
                  {job.company?.name ?? "---"}, {job.company?.locality ?? ""} (
                  {job.company?.country ?? ""})
                </div>
              </div>
              <p
                className="text-muted-foreground"
                dangerouslySetInnerHTML={createMarkup(
                  job.company?.description ?? ""
                )}
              />
            </section>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center sm:flex-row gap-3">
          {job.sourceurl && (
            <Link
              href={job?.sourceurl}
              target="_blank"
              className={cn(
                "w-full sm:w-auto",
                buttonVariants({ variant: "techins8" })
              )}
            >
              Postuler maintenant
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
