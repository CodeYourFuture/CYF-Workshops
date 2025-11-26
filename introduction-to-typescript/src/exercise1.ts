type Course = "ITD" | "ITP" | "Piscine" | "SDC";

type User = {
  id: number;
  name: string;
  age: number;
  isTrainee: boolean;
  completedCourses: Course[];
  address?: string;
};

/** createUser is intended to create and return an object of type User but hasn't been completed. Your job is to update createUser to always return a User.
 * What is important is that the return type is a User. The actual values are irrelevant as long as createUser is returning something of type User.
 * The tests already expect createUser to do this so pay attention to what the tests are expecting and address those problems.
 * You are welcome to edit the parameters, the return value, or any other part of createUser. Do not edit the type User or the tests.
 * */
const createUser = () => {
  return {};
};

export { createUser };

// To test your solution, run `npm run test-exercise1`
