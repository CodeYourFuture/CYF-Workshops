// function fizzbuzz(number) {
//   let numbers = [];

//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0) {
//       let i = "fizz";
//     }
//     numbers.push(i);
//   }
//   return numbers.join(", ");
// }

// export default fizzbuzz;

// function fizzbuzz(number) {}
function fizzbuzz(number) {
  const numbers = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      numbers.push("fizzbuzz");
    } else if (i % 3 == 0) {
      numbers.push("fizz");
    } else if (i % 5 == 0) {
      numbers.push("buzz");
    } else {
      numbers.push(i);
    }
  }
  return numbers.join(", ");
}

export default fizzbuzz;
