import { env } from "@/lib/env";

// Mock data for development

export const fetchPartnerships = async (): Promise<Partnership[]> => {
  try {
    console.log(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/partnerships`);
    const response = await fetch(
      `${env.NEXT_PUBLIC_DASHBOARD_URL}/api/partnerships`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Données des partenariats reçues:", data); // Pour voir les données dans la console
    return data as Partnership[];
  } catch (error) {
    console.error("Error fetching partnerships:", error);
    console.warn("Falling back to mock data");
    return [];
  }
};

export interface Partnership {
  id: number;
  name: string;
  logo: string;
  description: string;
  websiteUrl: string;
  order: number;
}
