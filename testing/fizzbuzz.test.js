import fizzbuzz from "./fizzbuzz";

test("it should return 1 when passed 1 as an argument", () => {
  // arrange
  let number = 1;
  // act
  let result = number;
  // assert
  expect(result).toEqual("1");
});

// test("it should return 2 when passed 2 as an argument", () => {
//   // arrange
//   let number = 2;
//   // act
//   let result = number;
//   // assert
//   expect(result).toEqual("2");
// });
 
// test("it should return fizz when passed 3 as an argument", () => {
//   // arrange
//   let number = 3;
//   // act
//   let result = "";
//   // assert
//   expect(result).toEqual("fizz");
// });

// test("it should return buzz when passed 4 as an argument", () => {
//   // arrange
//   let number = 4;
//   // act
//   let result = "";
//   // assert
//   expect(result).toEqual("buzz");
// });

// test("it should return fizzbuzz when passed 5 as an argument", () => {
//   // arrange
//   let number = 5;
//   // act
//   let result = "";
//   // assert
//   expect(result).toEqual("fizzbuzz");
// });