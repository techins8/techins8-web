"use server";

import { env } from "@/lib/env";
import { http } from "@/lib/http";

interface CreateNewsletterResponse {
  success: boolean;
  message: string;
}

interface NewsletterRequest {
  email: string;
  firstName?: string;
  lastName?: string;
}

export async function subscribeToNewsletter(
  data: NewsletterRequest
): Promise<CreateNewsletterResponse> {
  try {
    const response = await http(`${env.LOOPS_API_URL}/contacts/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.LOOPS_API_KEY}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        subscribed: true,
        source: "landing.techins8.com",
        userGroup: "newsletter",
        mailingList: {},
      },
    });

    if (!response.ok) {
      // Si l'email existe déjà
      if (response.status === 409) {
        return {
          success: false,
          message: "Cette adresse email est déjà inscrite à notre newsletter.",
        };
      }

      // Autres erreurs
      return {
        success: false,
        message:
          "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
      };
    }

    // Succès
    return {
      success: true,
      message: "Inscription réussie ! Bienvenue dans notre newsletter.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
    };
  }
}
