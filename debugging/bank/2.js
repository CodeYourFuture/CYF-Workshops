/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function

*/

function getLargestNum(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      console.log(arr[i]);
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    return largestNum;
  }
  let arr = [5, 2, 3, 4, 1];

  console.log(getLargestNum(arr));