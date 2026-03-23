import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/loops", () => ({
  create: vi.fn(),
}));

import { create } from "@/lib/loops";
import { subscribeToNewsletter } from "./newsletter.action";

describe("subscribeToNewsletter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns success for a valid email", async () => {
    vi.mocked(create).mockResolvedValueOnce({ success: true, id: "abc123" });
    const result = await subscribeToNewsletter({ email: "test@example.com" });
    expect(result.success).toBe(true);
    expect(result.message).toContain("Inscription réussie");
  });

  it("returns error for an invalid email", async () => {
    const result = await subscribeToNewsletter({ email: "not-an-email" });
    expect(result.success).toBe(false);
    expect(result.message).toBe("Email invalide");
    expect(create).not.toHaveBeenCalled();
  });

  it("returns error when the Loops API fails", async () => {
    vi.mocked(create).mockResolvedValueOnce({
      success: false,
      message: "Contact already subscribed",
    });
    const result = await subscribeToNewsletter({ email: "test@example.com" });
    expect(result.success).toBe(false);
    expect(result.message).toBe("Contact already subscribed");
  });

  it("handles network errors", async () => {
    vi.mocked(create).mockRejectedValueOnce(new TypeError("fetch failed"));
    const result = await subscribeToNewsletter({ email: "test@example.com" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("NETWORK_ERROR");
  });

  it("handles unexpected errors", async () => {
    vi.mocked(create).mockRejectedValueOnce(new Error("Something went wrong"));
    const result = await subscribeToNewsletter({ email: "test@example.com" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Something went wrong");
  });
});
