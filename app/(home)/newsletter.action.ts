"use server";

import { create, ErrorResponse, LoopsUser } from "@/lib/loops";
import { z } from "zod";

interface CreateNewsletterResponse {
  success: boolean;
  message: string;
  error?: string; // Pour le debugging
}

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(
  data: z.infer<typeof newsletterSchema>,
): Promise<CreateNewsletterResponse> {
  try {
    const result = newsletterSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: "Email invalide",
      };
    }

    const requestBody: LoopsUser = {
      email: data.email,
      subscribed: true,
      source: "landing.freemat.ch",
      userGroup: "newsletter",
      mailingList: {},
    };

    const response = await create(requestBody);

    if (!response.success) {
      const errorResponse = response as ErrorResponse;
      return {
        success: false,
        message: errorResponse.message,
      };
    }

    // Succès
    return {
      success: true,
      message: "Inscription réussie ! Bienvenue dans notre newsletter.",
    };
  } catch (error) {
    console.log({ error });

    // Détection des erreurs réseau
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        message:
          "Impossible de se connecter au service. Veuillez vérifier votre connexion.",
        error: "NETWORK_ERROR",
      };
    }

    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
      error: error instanceof Error ? error.message : "UNKNOWN_ERROR",
    };
  }
}
