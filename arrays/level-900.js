// Test and fix...
// What will get printed to the console

// 0. Run the tests
// 1. Interpret the test feedback and explain any tests are failing (playing computer may help here)
// 2. Fix the implementation of reverse so it passes the tests

function reverse(arr) {
  const reversedArr = [];
  while (arr.length) {
    reversedArr.push(arr.pop());
  }
  return reversedArr;
}

module.exports = reverse;
