"use server";

import { api } from "@/lib/api";

interface CountResponse {
  total_count: number;
  previous_week: {
    start_date: string;
    end_date: string;
    count: number;
  };
  last_week: {
    start_date: string;
    end_date: string;
    count: number;
  };
  percentage_change: number;
  publishedOnly: boolean;
  skills: string[];
  locations: string[];
}

export const getCountJobs = async (): Promise<CountResponse> => {
  const response = await api("/jobs/count", {
    query: {
      publishedOnly: "0",
      skills: [],
    },
    headers: {
      "x-providers": "FreeWork, WelcomeToTheJungle",
    },
    next: {
      revalidate: 3600,
    },
  });
  const data = (await response.json()) as CountResponse;

  return data;
};
