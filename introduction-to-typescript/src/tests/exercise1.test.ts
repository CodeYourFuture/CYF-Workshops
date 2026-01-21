import { describe, expect, it } from "vitest";
import { createUser } from "../exercise1";

/** Do not change the tests below. All tests can be made to pass by editing the exercise1.ts file instead */
describe("createUser returns a valid user", () => {
  const user = createUser();

  it("has an id of type number", () => {
    // @ts-expect-error
    expect(user.id).toBeTypeOf("number");
  });

  it("has a name of type string", () => {
    // @ts-expect-error
    expect(user.name).toBeTypeOf("string");
  });
  it("has an age of type number", () => {
    // @ts-expect-error
    expect(user.age).toBeTypeOf("number");
  });
  it("has an isTrainee of type boolean", () => {
    // @ts-expect-error
    expect(user.isTrainee).toBeTypeOf("boolean");
  });
  it("has a valid completedCourse", () => {
    // @ts-expect-error
    expect(user.completedCourses[0]).to.be.oneOf([
      "ITD",
      "ITP",
      "Piscine",
      "SDC",
    ]);
  });
  it("has a valid address", () => {
    // @ts-expect-error
    expect(user.address).toSatisfy(
      (v) => typeof v === "string" || v === undefined
    );
  });
});
