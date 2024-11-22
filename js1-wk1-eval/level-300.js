

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,2)} ${date} ${month.slice(0,2)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
// There are two function calls in this file: day.slice(0, 3) and month.slice(0, 3).

// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
/*  The slice() method extracts a portion of a string and returns it as a new string without modifying the original string.
day.slice(0, 3) will take the substring of "Friday" from index 0 to 3 (not including index 3), resulting in "Fri".
month.slice(0, 3) will take the substring of "September" from index 0 to 3 (not including index 3), resulting in "Sep".

Predicted Output of macTimeDisplay:"Fri 29 Sep 21:49"
This combines the sliced portions of day and month with the date and time in the specified format. */
