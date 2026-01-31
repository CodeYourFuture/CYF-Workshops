// A type that can be applied to an object
type User = {
  id: number;
  firstName: string;
  lastName: string;
};

// An object with the explicit type User
const myUser1: User = {
  id: 5,
  firstName: "Morgan",
  lastName: "Freeman",
};

// A type with more nuanced attributes
type ComplicatedUser = {
  id: number | string; // id is either a number OR a string. This is technically valid but this variance is likely to cause confusion and should usually be avoided.
  firstName?: string; // firstName is optional, meaning it'll either be a string or undefined
  lastName?: string; // lastName is optional, meaning it'll either be a string or undefined
};

// An object with the explicit type ComplicatedUser
const myUser3: ComplicatedUser = {
  id: "user-1",
  lastName: "Freeman",
};

// Ignore this export. Something must be exported for TypeScript to not treat the above types as global definitions.
export {};
