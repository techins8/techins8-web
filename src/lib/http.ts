export interface HttpOptions {
  query?: Record<string, string | Array<string>>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  headers?: object;
}

export const http = async (
  url: string,
  options: HttpOptions = {},
): Promise<Response> => {
  if (options.query) {
    url += `?${buildQuery(options.query)}`;
  }

  console.info(url);

  return await fetch(url, {
    method: options.method ?? "GET",
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      ...options.headers,
    },
  });
};

const buildQuery = (query: Record<string, string | Array<string>>): string => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (!item) continue;
        params.append(key, item);
      }
    } else {
      if (!value) continue;
      params.append(key, value);
    }
  }

  return params.toString();
};
