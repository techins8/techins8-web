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
    GOOGLE_ANALYTICS_GA_ID: z.string().min(2),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "NEXT_PUBLIC_",

  client: {},

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

// Export public env variables
export const publicEnv = {
  FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
};
