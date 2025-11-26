type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const users: User[] = [
  {
    id: 1,
    firstName: "Morgan",
    lastName: "Freeman",
  },
  {
    id: 2,
    firstName: "Danny",
    lastName: "DeVito",
  },
];

// A function that takes a parameter userId of type number and returns an object of type User
function fetchUserExample1(userId: number): User {
  return users[userId];
}

// An arrow function that takes a parameter userId of type number and returns an object of type User
const fetchUserExample2 = (userId: number): User => {
  return users[userId];
};

// A function type that takes a parameter userId of type number and returns an object of type User
type FetchUser = (userId: number) => User;

// An arrow function of type FetchUser
const fetchUserExample3: FetchUser = (userId) => {
  return users[userId];
};

// An arrow function of type FetchUser receiving the incorrect parameter type. Removing @ts-ignore below will reveal a type error
// @ts-ignore
const fetchUserExample4: FetchUser = (userId: string) => {
  return users[userId];
};

type Callbacks = {
  fetchUserExample1: FetchUser;
  fetchUserExample2: FetchUser;
  fetchUserExample3: FetchUser;
};

const callbacks: Callbacks = {
  fetchUserExample1,
  fetchUserExample2,
  fetchUserExample3,
};

// Ignore this export. Something must be exported for TypeScript to not treat the above definitions as global definitions.
export {};
