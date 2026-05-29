import { describe, expect, it } from "vitest";
import { tryCatchDemo } from "../exercise3";

/** Do not change the tests below. All tests can be made to pass by editing the exercise3.ts file instead */
describe("tryCatchDemo", () => {
  it("does not return an error message when state is 'succeed'", () => {
    expect(tryCatchDemo("succeed")).toEqual("No errors!");
  });
  it("returns the error message when state is 'fail'", () => {
    expect(tryCatchDemo("fail")).toEqual("Failure!");
  });
});
