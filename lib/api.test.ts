import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./env", () => ({
  env: {
    SCRAPPER_API_URL: "https://api.example.com",
    SCRAPPER_API_TOKEN: "test-token",
  },
}));

vi.mock("./http", () => ({
  http: vi.fn().mockResolvedValue({ ok: true }),
}));

import { api } from "./api";
import { http } from "./http";

describe("api", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("builds URL with leading slash", async () => {
    await api("/jobs/count");
    expect(http).toHaveBeenCalledWith("https://api.example.com/jobs/count", expect.any(Object));
  });

  it("builds URL without leading slash", async () => {
    await api("jobs/count");
    expect(http).toHaveBeenCalledWith("https://api.example.com/jobs/count", expect.any(Object));
  });

  it("injects Authorization and Content-Type headers", async () => {
    await api("/test");
    expect(http).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer test-token",
          "Content-Type": "application/json",
          accept: "application/json",
        }),
      }),
    );
  });

  it("accepts a custom apiUrl override", async () => {
    await api("/endpoint", {}, "https://custom.api.com");
    expect(http).toHaveBeenCalledWith("https://custom.api.com/endpoint", expect.any(Object));
  });

  it("merges custom headers without losing defaults", async () => {
    await api("/test", { headers: { "x-providers": "FreeWork" } });
    expect(http).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer test-token",
          "x-providers": "FreeWork",
        }),
      }),
    );
  });
});
