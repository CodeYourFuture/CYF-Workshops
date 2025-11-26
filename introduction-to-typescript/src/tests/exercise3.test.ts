import { describe, expect, it } from "vitest";
import { tryCatchDemo } from "../exercise3";

describe("tryCatchDemo", () => {
  it("does not return an error message when state is 'succeed'", () => {
    expect(tryCatchDemo("succeed")).toEqual("No errors!");
  });
  it("returns the error message when state is 'fail'", () => {
    expect(tryCatchDemo("fail")).toEqual("Failure!");
  });
});
