"use server";

import { api } from "@/lib/api";
import { IJob } from "../../types/job";

const getJobsBrut = async (): Promise<IJob[]> => {
  try {
    const response = await api("/jobs_brut/all_jobs_brut?page=1&page_size=10");

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);
      throw new Error("Erreur lors de la récupération des langages");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des langages:", error);
    return [];
  }
};

export { getJobsBrut };
