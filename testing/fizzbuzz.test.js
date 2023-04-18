import fizzbuzz from "./fizzbuzz";

test("it should return 1 when passed 1 as an argument", () => {
  // arrange
  let number = 1;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1");
});

test("given 2 as an argument it should return 2", () => {
  // arrange
  let number = 2;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2");
});

test("given 3 as an argument it should return fizz", () => {
  // arrange
  let number = 3;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2,fizz");
});

test("given 5 as an argument it should return buzz", () => {
  // arrange
  let number = 5;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2,fizz,4,buzz");
});

test("given 15 as an argument it should return buzz", () => {
  // arrange
  let number = 15;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz");
});