import { env } from "@/lib/env";
import { type HttpOptions, http } from "./http";

export interface ErrorResponse {
  success: boolean;
  message: string;
}

export interface LoopsUser {
  email: string;
  firstName?: string;
  lastName?: string;
  subscribed: boolean;
  source?: string;
  userGroup: string;
  userId?: string;
  mailingList: object;
}

export interface FindResponse extends LoopsUser {
  id: string;
}

export type CreateRequest = LoopsUser;

export interface CreateSuccessResponse {
  success: boolean;
  id: string;
}

const loops = async (resource: string, options: HttpOptions = {}): Promise<Response> => {
  const url = env.LOOPS_API_URL + resource;

  const response = await http(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.LOOPS_API_KEY}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response;
};

export const find = async (email: string): Promise<FindResponse[] | ErrorResponse> => {
  const response = await loops(`/contacts/find`, {
    query: {
      email: email,
    },
  });

  const data = await response.json();

  return data as FindResponse[] | ErrorResponse;
};

export const create = async (
  data: CreateRequest,
): Promise<CreateSuccessResponse | ErrorResponse> => {
  const response = await loops(`/contacts/create`, {
    method: "POST",
    body: data,
  });

  return response.json();
};
