const reverse = require("./level-900.js");

test("returns the array reversed", () => {
  const input = ["a", "b", "c", "d"];
  expect(reverse(input)).toEqual(["d", "c", "b", "a"]);
});

test("doesn't mutate the original array", () => {
  const input = ["Code", "Your", "Future", "!"];
  expect(reverse(input)).toEqual(["Code", "Your", "Future", "!"]);
});
