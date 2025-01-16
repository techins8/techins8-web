"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validate } from "@dahoom/disposable-email";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { subscribeToNewsletter } from "./newsletter.action";
import Image from "next/image";

interface NewsletterState {
  email: string;
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const newsletterSchema = z.object({
  email: z.string().email(),
});

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<NewsletterState>({
    email: "",
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = newsletterSchema.safeParse({ email: state.email });

    if (!result.success || !state.email) {
      setState({
        ...state,
        status: "error",
        message: "Email invalide",
      });
    }

    // Vérification de l'email jetable
    if (!(await validate(state.email))) {
      toast.error("Veuillez utiliser une adresse email permanente.");
      setState({
        ...state,
        status: "error",
        message: "Veuillez utiliser une adresse email permanente.",
      });

      setTimeout(() => {
        setState((prev) => ({ ...prev, status: "idle", message: "" }));
      }, 3000);
      setLoading(false);
      return;
    }

    try {
      const response = await subscribeToNewsletter({ email: state.email });

      if (response.success) {
        toast.success("Merci de votre inscription ! ");
        setState({
          email: "",
          status: "success",
          message: "Merci de votre inscription ! ",
        });
      } else {
        throw new Error(response.message);
      }

      setTimeout(() => {
        setState((prev) => ({ ...prev, status: "idle", message: "" }));
      }, 3000);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'inscription"
      );
      setState({
        ...state,
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'inscription",
      });

      setTimeout(() => {
        setState((prev) => ({ ...prev, status: "idle", message: "" }));
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-primary rounded-2xl px-6 sm:px-8 py-8 sm:py-12 relative overflow-hidden max-w-[1120px] mx-auto mb-12 sm:mb-24">
      <div className="absolute right-4 sm:right-16 top-6 sm:top-12">
        <div className="relative">
          <Image
            src="/images/icons/newsletter.svg"
            alt="Newsletter"
            width={48}
            height={32}
            className="sm:w-[72px] sm:h-[48px]"
          />
        </div>
      </div>

      <div className="max-w-3xl pl-0 sm:pl-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-background mb-4">
          <span className="text-3xl sm:text-5xl text-title">-10%</span> sur l'abonnement annuel<br className="hidden sm:block" />
          en vous inscrivant à la newsletter.
        </h2>
        
        <p className="text-background text-base sm:text-lg mb-6 sm:mb-8">
          Recevez une étude de marché gratuite par mail, toutes les semaines.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" id="newsletter-form">
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <Input
              type="email"
              placeholder="Votre adresse Email..."
              className="flex-1 !py-3 sm:py-6 bg-background opacity-80 border-0 text-title placeholder:text-muted-foreground text-sm sm:text-base"
              required
              value={state.email}
              onChange={(e) =>
                setState((prev) => ({ ...prev, email: e.target.value }))
              }
              disabled={state.status === "loading"}
            />
            <Button
              type="submit"
              className="px-8  bg-title text-white hover:bg-title/90 font-semibold text-sm sm:text-base whitespace-nowrap"
              disabled={state.status === "loading"}
            >
              {loading ? "Inscription..." : "JE M'INSCRIS"}
            </Button>
          </div>

          {state.status !== "idle" && state.message && (
            <Alert
              className={`mt-4 ${
                state.status === "success"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-red-50 text-red-700 border-red-200"
              }`}
            >
              <AlertDescription className="text-sm sm:text-base">{state.message}</AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}
