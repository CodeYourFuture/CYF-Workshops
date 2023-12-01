const sumArray = (numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
console.log(sumArray([1, 2, 3]));
