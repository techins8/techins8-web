import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  it("resolves tailwind conflicts (last wins)", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });

  it("resolves tailwind color conflicts", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles undefined and null", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
  });

  it("handles empty inputs", () => {
    expect(cn()).toBe("");
    expect(cn("", "bar")).toBe("bar");
  });

  it("handles object syntax", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo");
  });

  it("handles arrays", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });
});
