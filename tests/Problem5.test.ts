import { describe, expect, it } from "vitest";

import countOccurrences from "../problems/Problem5";

describe("countOccurrences Function", () => {
  it("Basic test case: should count the number of times a value appears in the array", () => {
    const arr = [1, 2, 3, 2, 4, 2, 5];
    const val = 2;
    const result = countOccurrences(arr, val);
    expect(result).toBe(3);
  });

  it("Empty input test case: should return 0 when the array is empty", () => {
    const arr: any = [];
    const val = 10;
    const result = countOccurrences(arr, val);
    expect(result).toBe(0);
  });

  it("Normal test case 1: should count occurrences of a string in a string array", () => {
    const arr = ["apple", "banana", "apple", "cherry", "apple"];
    const val = "apple";
    const result = countOccurrences(arr, val);
    expect(result).toBe(3);
  });

  it("Normal test case 2: should handle negative numbers in the array", () => {
    const arr = [-3, -1, 2, -1, 5, -3];
    const val = -3;
    const result = countOccurrences(arr, val);
    expect(result).toBe(2);
  });
});
