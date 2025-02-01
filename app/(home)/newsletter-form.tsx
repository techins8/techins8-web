"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validate } from "@dahoom/disposable-email";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { subscribeToNewsletter } from "./newsletter.action";
import { useTranslations } from 'next-intl';

interface NewsletterState {
  email: string;
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const newsletterSchema = z.object({
  email: z.string().email(),
});

export default function NewsletterForm() {
  const t = useTranslations('HomePage.Newsletter');
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
        message: t('messages.invalidEmail'),
      });
    }

    // Check for disposable email
    if (!(await validate(state.email))) {
      toast.error(t('messages.disposableEmail'));
      setState({
        ...state,
        status: "error",
        message: t('messages.disposableEmail'),
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
        toast.success(t('messages.success'));
        setState({
          email: "",
          status: "success",
          message: t('messages.success'),
        });
      } else {
        throw new Error(response.message);
      }

      setTimeout(() => {
        setState((prev) => ({ ...prev, status: "idle", message: "" }));
      }, 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('messages.error');
      toast.error(errorMessage);
      setState({
        ...state,
        status: "error",
        message: errorMessage,
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
            loading="lazy"
          />
        </div>
      </div>

      <div className="max-w-3xl pl-0 sm:pl-12">
        <h2 className="text-2xl sm:text-[2.25rem] font-bold text-background mb-4 max-w-2xl">
          <span className="text-3xl sm:text-5xl text-title">{t('title.discount')}</span>{' '}
          {t('title.text')}
        </h2>

        <p className="text-background text-base sm:text-lg mb-6 sm:mb-8">
          {t('subtitle')}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          id="newsletter-form"
        >
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <Input
              type="email"
              placeholder={t('form.emailPlaceholder')}
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
              className="px-8 bg-title text-white hover:bg-slate-800 font-semibold text-sm sm:text-base whitespace-nowrap"
              disabled={state.status === "loading"}
            >
              {loading ? t('form.submitButton.loading') : t('form.submitButton.default')}
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
              <AlertDescription className="text-sm sm:text-base">
                {state.message.replace("'", "&apos;")}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}