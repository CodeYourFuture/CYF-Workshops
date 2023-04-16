import fizzbuzz from "./fizzbuzz";

test("it should return 1 when passed 1 as an argument", () => {
  // arrange
  let number = 1;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1");
});
test("it should return Fizz when number % 3 === 0", () => {
  let number  = 6
  let result = fizzbuzz(number);
  expect(result).toEqual('Fizz')
})
test("it should return Buzz when number % 5 === 0", () => {
  let number = 10
  let result = fizzbuzz(number);
  expect(result).toEqual('Buzz')
})