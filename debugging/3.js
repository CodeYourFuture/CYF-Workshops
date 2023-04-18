/*
There is a bug in this code which may not be immediately obvious. 
Hint: Try different test cases to uncover the bug. Then update the code  to 
resolve the bug. 
*/

let arr = [-4, 2, 3, 4, ""];
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  
  console.log(calculateAverage(arr));