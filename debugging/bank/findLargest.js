const findLargest = (numbers) => {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};
console.log(findLargest([3, 7, 2, 5, 6]));
