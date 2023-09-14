import { describe, expect, it } from "vitest";

import { User } from "../types";

import verifyUser from "../problems/Problem6";

describe("Problem 6", () => {
  it("Basic Test Case - All Properties Present", () => {
    const userData: User = {
      id: "123",
      name: "Alice",
      address: {
        street: "123 Main St",
        city: "New York",
      },
    };

    const result = verifyUser(userData);

    expect(result).toEqual(userData);
  });

  it("Missing id", () => {
    const userData: User = {
      name: "Bob",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
      },
    };

    const result = verifyUser(userData);

    expect(result).toStrictEqual(["id"]);
  });

  it("Missing name and street", () => {
    const userData: User = {
      id: "789",
      address: {
        city: "Chicago",
      },
    };

    const result = verifyUser(userData);
    if (Array.isArray(result)) {
      expect(result.sort()).toStrictEqual(["name", "street"]);
    } else {
      expect("Returned type is an object").toBe(
        "Returned type should be an array"
      );
    }
  });

  it("Missing whole address object", () => {
    const userData: User = {
      id: "789",
      name: "David",
    };

    const result = verifyUser(userData);
    const sortedResult = Array.isArray(result) ? result.sort() : result;

    expect(sortedResult).toStrictEqual(["address", "city", "street"]);
  });

  it("Empty Object", () => {
    const userData: User = {};

    const result = verifyUser(userData);

    if (Array.isArray(result)) {
      expect(result.sort()).toStrictEqual([
        "address",
        "city",
        "id",
        "name",
        "street",
      ]);
    } else {
      // If it is not an array, the test case fails
      expect("Returned type is an object").toBe(
        "Returned type should be an array"
      );
    }
  });

  it("No User Data", () => {
    const result = verifyUser(null);

    // If it is an array, sort it before comparing
    if (Array.isArray(result)) {
      expect(result.sort()).toStrictEqual([
        "address",
        "city",
        "id",
        "name",
        "street",
        "userData",
      ]);
    } else {
      // If it is not an array, the test case fails
      expect("Returned type is an object").toBe(
        "Returned type should be an array"
      );
    }
  });
});
