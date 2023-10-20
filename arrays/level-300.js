// Predict and explain...

// the head of an array is the first element of an array
// the tail of an array is the last element of an array

// predict and explain what will get printed to the terminal

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getHead(arr) {
  return arr.shift();
}

function getTail(arr) {
  return arr.pop();
}

console.log(`The first letter of the alphabet is ${getHead(alphabet)}`);
console.log(`The last letter of the alphabet is ${getTail(alphabet)}`);
console.log(alphabet.length);
