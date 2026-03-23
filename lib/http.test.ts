import { describe, expect, it } from "vitest";
import { buildQuery } from "./http";

describe("buildQuery", () => {
  it("builds a simple query string", () => {
    expect(buildQuery({ key: "value" })).toBe("key=value");
  });

  it("handles multiple params", () => {
    const result = buildQuery({ a: "1", b: "2" });
    expect(result).toContain("a=1");
    expect(result).toContain("b=2");
  });

  it("handles array values", () => {
    expect(buildQuery({ skills: ["react", "vue"] })).toBe("skills=react&skills=vue");
  });

  it("skips undefined values", () => {
    expect(buildQuery({ key: undefined, other: "val" })).toBe("other=val");
  });

  it("skips false values", () => {
    expect(buildQuery({ key: false, other: "val" })).toBe("other=val");
  });

  it("handles boolean true", () => {
    expect(buildQuery({ active: true })).toBe("active=true");
  });

  it("handles number values", () => {
    expect(buildQuery({ page: 1 })).toBe("page=1");
  });

  it("skips falsy array items", () => {
    expect(buildQuery({ skills: [undefined, "react", undefined] })).toBe("skills=react");
  });

  it("returns empty string for empty object", () => {
    expect(buildQuery({})).toBe("");
  });

  it("returns empty string when all values are falsy", () => {
    expect(buildQuery({ a: undefined, b: false })).toBe("");
  });
});
