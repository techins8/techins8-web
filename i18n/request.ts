import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Check if the Accept-Language header contains French
  const prefersFrench = acceptLanguage.toLowerCase().includes("fr");
  const locale = prefersFrench ? "fr" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
