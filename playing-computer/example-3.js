// Assign people to the different frames you'll need...

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber.toFixed(2) * 100}%`;
  return percentage;
}

function writeRatioWithPercentage(ratio) {
  const firstPart = Number(ratio[0]);
  const secondPart = Number(ratio[2]);
  const allParts = firstPart + secondPart;

  const firstPartPercentage = convertToPercentage(firstPart / allParts);
  const secondPartPercentage = convertToPercentage(secondPart / allParts);
  return `${firstPartPercentage} : ${secondPartPercentage}`;
}

const input = "2:3";
console.log(writeRatioWithPercentage(input));
