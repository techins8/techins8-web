import { env } from "./env";
import { http, HttpOptions } from "./http";

export const api = async (
  resource: string,
  options: HttpOptions = {},
  apiUrl: string = env.SCRAPPER_API_URL
): Promise<Response> => {
  const url = `${apiUrl}${resource.startsWith("/") ? "" : "/"}${resource}`;

  options.headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.SCRAPPER_API_TOKEN}`,
    ...options.headers,
  };

  return await http(url, options);
};
