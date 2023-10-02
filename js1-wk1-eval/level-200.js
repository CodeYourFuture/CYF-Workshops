// Part 1: Without running code,
// Use documentation to evaluate Math.trunc() and Math.floor() for each of the numbers below.
// Write your answers down below:

// a) 10.53   For example, Math.trunc(10.53) evaluates to 10, Math.floor(10.53) evaluates to 10
// b) 170.105  Math.trunc(170.105) evaluates to 170, and similarly, Math.floor(170.105) evaluates 170
// c) -0.34  Math.trunc(-0.34) gives -0. While, Math.floor(-0.34) gives -1
// d) -8.921 Math.trunc(-8.921) gives -8. While, Math.floor(-8.921) gives -9

// Part 2: Use the Node REPL to check your answers to Part 1)
console.log(
  `(a) 10.53  - Math.trunc: ${Math.trunc(10.53)} and Math.floor : ${Math.floor(
    10.53
  )}`
);
console.log(
  `(b) 170.105 - Math.trunc: ${Math.trunc(
    170.105
  )} and Math.floor : ${Math.floor(170.105)}`
);
console.log(
  `(c) -0.34  - Math.trunc: ${Math.trunc(-0.34)} and Math.floor : ${Math.floor(
    -0.34
  )}`
);
console.log(
  `(d) -8.921  - Math.trunc: ${Math.trunc(
    -8.921
  )} and Math.floor : ${Math.floor(-8.921)}`
);
// Part 3: Using Part 2, explain the difference between Math.trunc() and Math.floor() in your own words
// The function, Math.trunc(), simply truncates the decimal portion of the given number and returns the integer part only.
// The function, Math.floor(), rounds down to give an integer that is less than or at most equal to the number.
