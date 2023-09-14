import { describe, expect, it } from "vitest";

import arrayOfStudents from "../problems/Problem2";
import { Student } from "../types";

describe("Problem 2", () => {
  it("Basic Case", () => {
    const names: string[] = ["Joe", "Schmo"];
    const ages: number[] = [50, 60];
    const expected: Student[] = [
      { name: "Joe", age: 50 },
      { name: "Schmo", age: 60 },
    ];
    expect(arrayOfStudents(names, ages)).to.deep.equal(expected);
  });
  it("Normal Case 1", () => {
    const names = ["John", "Alice", "Bob"];
    const ages = [20, 22, 21];
    const expected: Student[] = [
      { name: "John", age: 20 },
      { name: "Alice", age: 22 },
      { name: "Bob", age: 21 },
    ];
    expect(arrayOfStudents(names, ages)).to.deep.equal(expected);
  });

  it("Normal Case 2", () => {
    const names = ["Emily", "Michael", "Sarah"];
    const ages = [19, 21, 20];
    const expected: Student[] = [
      { name: "Emily", age: 19 },
      { name: "Michael", age: 21 },
      { name: "Sarah", age: 20 },
    ];
    expect(arrayOfStudents(names, ages)).to.deep.equal(expected);
  });

  it("Empty Case", () => {
    const names: string[] = [];
    const ages: number[] = [];
    const expected: Student[] = [];
    expect(arrayOfStudents(names, ages)).to.deep.equal(expected);
  });

  it("Single Student Case", () => {
    const names = ["John"];
    const ages = [25];
    const expected: Student[] = [{ name: "John", age: 25 }];
    expect(arrayOfStudents(names, ages)).to.deep.equal(expected);
  });
});
