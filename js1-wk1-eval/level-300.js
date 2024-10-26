

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// Fri 29 Sep 21:49

// a) how many function calls are there in this file?
// Two

// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
console.log(macTimeDisplay);
// macTimeDisplay will evaluate to "Fri 29 Sep 21:49" by slicing "Friday" and "September" to "Fri" and "Sep", then combining with date and time.

