import { describe, expect, it } from "vitest";
import { makeUser } from "./exercise";

/** Avoid changing the tests below. You are able to fix these test results by editing exercise.ts */
describe("makeUser returns a valid user", () => {
  const user = makeUser();

  it("has an id of type number", () => {
    expect(user.id).toBeTypeOf("number");
  });
  it("has a firstName of type string", () => {
    expect(user.firstName).toBeTypeOf("string");
  });
  it("has a lastName of type string", () => {
    expect(user.lastName).toBeTypeOf("string");
  });
  it("has a valid role", () => {
    expect(user.role).to.be.oneOf(["guest", "admin", "super-admin"]);
  });
  it("has a valid post", () => {
    expect(user.posts[0].id).toBeTypeOf("number");
    expect(user.posts[0].title).toBeTypeOf("string");
  });
});
