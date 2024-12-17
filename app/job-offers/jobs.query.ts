"use server";

import { api } from "@/lib/api";
import { IJob } from "@/types/job";

interface IGetJobsBrutResponse {
  jobs: IJob[];
  total: number;
  page: number;
  size: number;
  criteria: {
    onlyPublished: boolean;
    locations: string[];
    skills: string[];
    companies: string[];
  };
  sort: string[];
}

export interface IGetJobsBrutParams {
  page: number;
  size?: number;
  onlyPublished?: boolean;
  locations?: string[];
  skills?: string[];
  companies?: string[];
  sort?: string[];
}

export const getJobsBrut = async ({
  page,
  size = 10,
  onlyPublished = true,
  locations = [],
  skills = [],
  companies = [],
  sort = [],
}: IGetJobsBrutParams): Promise<IGetJobsBrutResponse> => {
  try {
    const response = await api(`/jobs`, {
      query: {
        page: page.toString(),
        page_size: size.toString(),
        onlyPublished: onlyPublished.toString(),
        locations: locations,
        skills: skills,
        companies: companies,
        sort: sort,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error while fetching jobs", { errorData });
      throw new Error("Error while fetching jobs");
    }

    const data = await response.json();
    return data as IGetJobsBrutResponse;
  } catch (error) {
    console.error("Error while requesting jobs:", error);
    return {
      jobs: [],
      total: 0,
      page: 0,
      size: 0,
      criteria: {
        onlyPublished: false,
        locations: [],
        skills: [],
        companies: [],
      },
      sort: [],
    };
  }
};

export const getJob = async ({ id }: { id: string }) => {
  const response = await api(`/jobs/job-${id}`);
  const data = (await response.json()) as IJob;
  return data;
};
