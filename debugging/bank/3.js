/*
There is a bug in this code which may not be immediately obvious. 
Hint: Try different test cases to uncover the bug. Then update the code  to 
resolve the bug. 
*/

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log(calculateAverage(arr));