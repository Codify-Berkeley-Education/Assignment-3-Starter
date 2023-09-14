import { describe, expect, it } from "vitest";

import studentsTaughtByProf from "../problems/Problem3";

import { Professor } from "../types";

describe("Problem 3", () => {
  it("Basic Case", () => {
    const professor: Professor = {
      name: "Aidan",
      classes: [
        {
          className: "CS 61A",
          students: [
            { name: "Shruti", age: 12 },
            { name: "Nemer", age: 18 },
            { name: "Elaine", age: 19 },
          ],
        },
        {
          className: "CS 61B",
          students: [
            { name: "Ayush", age: 17 },
            { name: "Rayna", age: 21 },
            { name: "Dhruv", age: 20 },
          ],
        },
      ],
    };
    const solution = ["Shruti", "Ayush", "Nemer", "Elaine", "Dhruv", "Rayna"];
    expect(studentsTaughtByProf(professor)).toEqual(solution);
  });
  it("Empty Case", () => {
    const professor: Professor = {
      name: "Lonely Professor",
      classes: [
        {
          className: "Class",
          students: [],
        },
      ],
    };
    const solution: string[] = [];
    expect(studentsTaughtByProf(professor)).toEqual(solution);
  });

  it("Normal Case 1", () => {
    const professor: Professor = {
      name: "Professor1",
      classes: [
        {
          className: "Math",
          students: [
            { name: "Xander", age: 19 },
            { name: "Zara", age: 21 },
            { name: "Quincy", age: 18 },
          ],
        },
        {
          className: "Science",
          students: [
            { name: "Violet", age: 22 },
            { name: "Kai", age: 20 },
            { name: "Yara", age: 23 },
          ],
        },
        {
          className: "History",
          students: [
            { name: "Jasper", age: 17 },
            { name: "Nova", age: 25 },
            { name: "Odessa", age: 24 },
          ],
        },
      ],
    };

    const expected: string[] = [
      "Jasper",
      "Quincy",
      "Xander",
      "Kai",
      "Zara",
      "Violet",
      "Yara",
      "Odessa",
      "Nova",
    ];

    expect(studentsTaughtByProf(professor)).toEqual(expected);
  });

  it("Normal Case 2", () => {
    const professor: Professor = {
      name: "Professor2",
      classes: [
        {
          className: "English",
          students: [
            { name: "Phineas", age: 35 },
            { name: "Willow", age: 28 },
            { name: "Rupert", age: 30 },
          ],
        },
        {
          className: "Art",
          students: [
            { name: "Luna", age: 31 },
            { name: "Caspian", age: 27 },
            { name: "Sylvie", age: 29 },
          ],
        },
        {
          className: "Music",
          students: [
            { name: "Orion", age: 33 },
            { name: "Xanthe", age: 32 },
            { name: "Felix", age: 26 },
          ],
        },
      ],
    };

    const expected: string[] = [
      "Felix",
      "Caspian",
      "Willow",
      "Sylvie",
      "Rupert",
      "Luna",
      "Xanthe",
      "Orion",
      "Phineas",
    ];

    expect(studentsTaughtByProf(professor)).toEqual(expected);
  });
  it("Single Student Case", () => {
    const professor: Professor = {
      name: "Professor",
      classes: [
        {
          className: "Class",
          students: [{ name: "John", age: 25 }],
        },
      ],
    };
    const expected: string[] = ["John"];
    expect(studentsTaughtByProf(professor)).toEqual(expected);
  });
});
