
// Without running code,
// predict and explain what will get logged to the console for each line below
// think carefully about the difference between each line
// write down your predictions
/*  Predictions and Explanations
console.log(Math.abs);

Prediction: This will log the function definition of Math.abs.
Explanation: Math.abs refers to the abs function itself, without executing it. So the console will display the function code, something like:
javascript
Copy code
function abs() { [native code] }
console.log(Math.abs());

Prediction: This will log NaN.
Explanation: Math.abs() expects a number as an argument to calculate its absolute value. If you call it without any arguments, the default is undefined, and Math.abs(undefined) returns NaN (Not-a-Number).
console.log(Math.abs(-100));

Prediction: This will log 100.
Explanation: Math.abs(-100) returns the absolute value of -100, which is 100. The Math.abs function converts a negative number to its positive equivalent. */


// Look up documentation for Math.abs if you've not used it before

console.log(Math.abs);
console.log(Math.abs());
console.log(Math.abs(-100));

// Run the file with Node to check your answer
/*  Summary of Predicted Outputs
Function definition of Math.abs
NaN
100 */