import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    LOOPS_API_URL: z.string().min(1).url(),
    LOOPS_API_KEY: z.string().min(1),
    SCRAPPER_API_URL: z.string().url().min(1),
    SCRAPPER_API_TOKEN: z.string().min(1),
    NOTION_API_KEY: z.string().min(1),
    NOTION_BLOG_DATABASE_ID: z.string().min(1),
    NEXT_PUBLIC_DASHBOARD_URL: z.string().min(1).url(),
    SCRAPPER_BRUT_API_URL: z.string().url().min(1),
    PROMOTE_KIT_TOKEN: z.string().min(10),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url().min(1),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "",

  client: {
    NEXT_PUBLIC_GTM_ID: z.string().min(1),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(36),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
