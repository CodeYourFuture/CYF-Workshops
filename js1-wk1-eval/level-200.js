
// Part 1: Without running code,
// Use documentation to evaluate Math.trunc() and Math.floor() for each of the numbers below.
// Write your answers down below:

// a) 10.53   For example, Math.trunc(10.53) evaluates to 10, Math.floor(10.53) evaluates to 10
// b) 170.105
// c) -0.34
// d) -8.921
/*
Part 1: Without Running Code
a)

Math.trunc(10.53) → 10
Math.floor(10.53) → 10
b)

Math.trunc(170.105) → 170
Math.floor(170.105) → 170
c)

Math.trunc(-0.34) → 0
Math.floor(-0.34) → -1
d)

Math.trunc(-8.921) → -8
Math.floor(-8.921) → -9 */

// Part 2: Use the Node REPL to check your answers to Part 1)

// Part 3: Using Part 2, explain the difference between Math.trunc() and Math.floor() in your own words

/* Math.trunc() removes the decimal part of a number, effectively truncating it to the integer part without rounding. It simply drops the decimal digits.
   Math.floor() rounds the number down to the nearest integer. For positive numbers, this has the same result as Math.trunc(), but for negative numbers, Math.floor() rounds down to the lower integer.
   
   This distinction is especially important for negative numbers: Math.floor(-0.34) becomes -1, while Math.trunc(-0.34) remains 0. */



