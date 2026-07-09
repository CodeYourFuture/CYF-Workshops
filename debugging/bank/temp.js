function findMax(someArr) {
  // 1. Create a variable to use in comparing the values of the individual elements of the array
  let isMax = someArr[0];
  // 2. Compare subsequent elements of the array with the max of the array
  for (let index = 1; index < arr.length; index++) {
    if (isMax < someArr[index]) {
      isMax = someArr[index];
    }
  }
  return isMax;
}

let arr = [2, 5, 4, 7, 1, 8];

console.log(findMax(arr));

let somethingElse = [20, 5, 40, 7, 10, 8];

console.log(findMax(somethingElse));

//max, min, average, SD, 
