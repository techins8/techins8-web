"use server";

import { env } from "@/lib/env";
import { http } from "@/lib/http";

interface CreateNewsletterResponse {
  success: boolean;
  message: string;
  error?: any;  // Pour le debugging
}

interface NewsletterRequest {
  email: string;
  firstName?: string;
  lastName?: string;
}

export async function subscribeToNewsletter(
  data: NewsletterRequest
): Promise<CreateNewsletterResponse> {
  // Validation des variables d'environnement
  if (!env.LOOPS_API_URL || !env.LOOPS_API_KEY) {
    console.error("Missing environment variables:", {
      hasApiUrl: Boolean(env.LOOPS_API_URL),
      hasApiKey: Boolean(env.LOOPS_API_KEY),
    });
    return {
      success: false,
      message: "Configuration error: Missing API credentials",
      error: "MISSING_ENV_VARS"
    };
  }

  // Validation des données d'entrée
  if (!data.email || !data.email.includes('@')) {
    return {
      success: false,
      message: "Email invalide",
      error: "INVALID_EMAIL"
    };
  }

  try {
    const requestBody = {
      email: data.email,
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      subscribed: true,
      source: "landing.techins8.com",
      userGroup: "newsletter",
      mailingList: {},
    };

    console.log("Attempting to subscribe with data:", {
      url: env.LOOPS_API_URL,
      ...requestBody,
      apiKeyPresent: Boolean(env.LOOPS_API_KEY)
    });

    const response = await http(`${env.LOOPS_API_URL}/contacts/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.LOOPS_API_KEY}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: requestBody,
    });

    // Log de la réponse pour le debugging
    console.log("API Response:", {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      const errorData = await response.text().catch(() => null);
      console.error("API Error Response:", {
        status: response.status,
        statusText: response.statusText,
        errorData
      });

      // Gestion spécifique des erreurs
      switch (response.status) {
        case 409:
          return {
            success: false,
            message: "Cette adresse email est déjà inscrite à notre newsletter.",
            error: "EMAIL_EXISTS"
          };
        case 401:
          return {
            success: false,
            message: "Erreur d'authentification avec l'API.",
            error: "AUTH_ERROR"
          };
        case 400:
          return {
            success: false,
            message: "Les données fournies sont invalides.",
            error: "INVALID_DATA"
          };
        default:
          return {
            success: false,
            message: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
            error: `API_ERROR_${response.status}`
          };
      }
    }

    // Succès
    return {
      success: true,
      message: "Inscription réussie ! Bienvenue dans notre newsletter."
    };

  } catch (error) {
    // Log détaillé de l'erreur
    console.error("Newsletter subscription error:", {
      error,
      stack: error instanceof Error ? error.stack : undefined,
      message: error instanceof Error ? error.message : String(error)
    });

    // Détection des erreurs réseau
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        message: "Impossible de se connecter au service. Veuillez vérifier votre connexion.",
        error: "NETWORK_ERROR"
      };
    }

    return {
      success: false,
      message: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
      error: error instanceof Error ? error.message : "UNKNOWN_ERROR"
    };
  }
}