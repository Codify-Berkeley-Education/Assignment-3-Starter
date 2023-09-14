// Students type used in Problem2.ts
export type Student = {
  name: string;
  age: number;
};

// Classes and Professor types used in Problem3.ts
export type Class = {
  className: string;
  students: Student[];
};

export type Professor = {
  name: string;
  classes: Class[];
};

// Athlete type used in Problem4.ts
export type Athlete = Student & {
  sport: string;
};

// User type used in Problem6.ts
export type User = {
  id?: string;
  name?: string;
  address?: {
    street?: string;
    city?: string;
  };
};
