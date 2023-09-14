import { describe, expect, it } from "vitest";
import { expectType } from "tsd";
import concatNumbers from "../problems/Problem1";

describe("Problem 1", () => {
  it("Basic Case", () => {
    expect(concatNumbers(4, 5)).toBe("45");
  });
  it("More Cases", () => {
    expect(concatNumbers(4, 55)).toBe("455");
    expect(concatNumbers(423, 5)).toBe("4235");
    expect(concatNumbers(-4, 0)).toBe("-40");
    expect(concatNumbers(0, 5)).toBe("05");
    expect(concatNumbers(0, 0)).toBe("00");
    expect(concatNumbers(0, -1)).toBe("0-1");
  });
});
