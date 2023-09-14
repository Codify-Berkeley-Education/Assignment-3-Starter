import { describe, expect, it } from "vitest";

import allAthletes from "../problems/Problem4";

import { Student, Athlete } from "../types";

describe("Problem 4", () => {
  it("Basic Case", () => {
    const input: (Student | Athlete)[] = [
      { name: "Joe", age: 100, sport: "Baseball" },
      { name: "Trump", age: 90 },
    ];
    const output: Athlete[] = [
      { name: "Joe", age: 100, sport: "Baseball" },
      { name: "Trump", age: 90, sport: "Football" },
    ];
    expect(allAthletes(input, "Football")).toEqual(output);
  });

  it("Normal test case 1", () => {
    const students: (Student | Athlete)[] = [
      { name: "John", age: 20 },
      { name: "Alice", age: 22 },
      { name: "Bob", age: 21, sport: "Basketball" },
      { name: "Jane", age: 23, sport: "Tennis" },
      { name: "Michael", age: 19, sport: "Football" },
    ];
    const defaultSport = "Soccer";

    const expected: Athlete[] = [
      { name: "John", age: 20, sport: "Soccer" },
      { name: "Alice", age: 22, sport: "Soccer" },
      { name: "Bob", age: 21, sport: "Basketball" },
      { name: "Jane", age: 23, sport: "Tennis" },
      { name: "Michael", age: 19, sport: "Football" },
    ];

    expect(allAthletes(students, defaultSport)).toEqual(expected);
  });

  it("Normal test case 2", () => {
    const students: (Student | Athlete)[] = [
      { name: "Emma", age: 18, sport: "Swimming" },
      { name: "Oliver", age: 21, sport: "Golf" },
      { name: "Sophia", age: 19 },
    ];
    const defaultSport = "Tennis";

    const expected: Athlete[] = [
      { name: "Emma", age: 18, sport: "Swimming" },
      { name: "Oliver", age: 21, sport: "Golf" },
      { name: "Sophia", age: 19, sport: "Tennis" },
    ];

    expect(allAthletes(students, defaultSport)).toEqual(expected);
  });

  it("Normal test case 3", () => {
    const students: (Student | Athlete)[] = [
      { name: "Isabella", age: 20 },
      { name: "Liam", age: 22 },
      { name: "Mia", age: 21 },
      { name: "William", age: 23 },
    ];
    const defaultSport = "Baseball";

    const expected: Athlete[] = [
      { name: "Isabella", age: 20, sport: "Baseball" },
      { name: "Liam", age: 22, sport: "Baseball" },
      { name: "Mia", age: 21, sport: "Baseball" },
      { name: "William", age: 23, sport: "Baseball" },
    ];

    expect(allAthletes(students, defaultSport)).toEqual(expected);
  });
  it("Normal Case 4", () => {
    const input: (Student | Athlete)[] = [
      { name: "John", age: 20 },
      { name: "Alice", age: 22 },
      { name: "Bob", age: 21 },
      { name: "Jane", age: 23 },
      { name: "Michael", age: 19, sport: "Basketball" },
      { name: "Emily", age: 20, sport: "Swimming" },
    ];
    const output: (Student | Athlete)[] = [
      { name: "John", age: 20, sport: "Soccer" },
      { name: "Alice", age: 22, sport: "Soccer" },
      { name: "Bob", age: 21, sport: "Soccer" },
      { name: "Jane", age: 23, sport: "Soccer" },
      { name: "Michael", age: 19, sport: "Basketball" },
      { name: "Emily", age: 20, sport: "Swimming" },
    ];

    expect(allAthletes(input, "Soccer")).toEqual(output);
  });

  it("Empty test case", () => {
    const students: (Student | Athlete)[] = [];
    const defaultSport = "Basketball";

    const expected: Athlete[] = [];

    expect(allAthletes(students, defaultSport)).toEqual(expected);
  });
});
