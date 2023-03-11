/*
This function should return the sum of all the numbers in the array. 
Can you spot why this function is not working and resolve.
*/

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let sum = calculateSum(arr);
  console.log("The sum of " + arr + " is " + sum);