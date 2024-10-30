import { env } from "@/env";
import { http, HttpOptions } from "./http";

const loops = async (
  resource: string,
  options: HttpOptions = {},
): Promise<Response> => {
  const url = env.LOOP_API_URL + resource;

  const response = await http(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.LOOPS_API_KEY}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  return response;
};

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
  userId: string;
  mailingList: object;
}

export interface FindResponse extends LoopsUser {
  id: string;
}

export const find = async (
  email: string,
): Promise<FindResponse[] | ErrorResponse> => {
  const response = await loops(`/contacts/find`, {
    query: {
      email: email,
    },
  });

  const data = await response.json();

  return data as FindResponse[] | ErrorResponse;
};

export interface CreateRequest extends LoopsUser {}

export interface CreateSuccessResponse {
  success: boolean;
  id: string;
}

export const create = async (
  data: CreateRequest,
): Promise<CreateSuccessResponse | ErrorResponse> => {
  const response = await loops(`/contacts/create`, {
    method: "POST",
    body: data,
  });

  return response.json();
};
