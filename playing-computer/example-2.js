// EXAMPLE 2
// now there will be a global frame, getFirstChar frame, getLastChar frame
// one person will need to "play" one of these frames

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getFirstChar(str) {
  return str[0];
}

function getLastChar(str) {
  const lastCharIndex = str.length - 1;
  return str[lastCharIndex];
}

const firstChar = getFirstChar(alphabet);
const lastChar = getLastChar(alphabet);
console.log(`The first character in the alphabet is ${firstChar}`);
console.log(`The last character in the alphabet is ${lastChar}`);
