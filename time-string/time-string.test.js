const formatAsSecondsAsString = require("./time-string");

// test('', () => {
//   expect(getAngleType(90)).toBe(“Right angle”);
// });

// test(“”, () => {
//   expect().toBe(“”);
// });

test("convert to S", () => {
  expect(formatAsSecondsAsString(44)).toBe("44 second");
});
