import { it, expect, expectTypeOf, describe } from "vitest";
import { addTwoNumbers } from "../exercise2";

/** Do not change the tests below. All tests can be made to pass by editing the exercise2.ts file instead */
describe("addTwoNumbers", () => {
  it("adds two numbers", () => {
    expect(addTwoNumbers(3, 6)).toEqual(9);
  });
  it("should have a return type of number", () => {
    expectTypeOf(addTwoNumbers).returns.toBeNumber();
  });
  it("should have two parameters of type number", () => {
    expectTypeOf(addTwoNumbers).parameters.toEqualTypeOf<[number, number]>();
  });
});
