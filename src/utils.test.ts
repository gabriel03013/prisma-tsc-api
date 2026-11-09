import { describe, expect, it } from "bun:test";
import { parseBoolean } from "./utils";

describe("parseBoolean", () => {
  it("recognizes only the literal true value", () => {
    expect(parseBoolean("true")).toBe(true);
    expect(parseBoolean("false")).toBe(false);
    expect(parseBoolean("True")).toBe(false);
    expect(parseBoolean(undefined)).toBe(false);
    expect(parseBoolean(null)).toBe(false);
  });
});
