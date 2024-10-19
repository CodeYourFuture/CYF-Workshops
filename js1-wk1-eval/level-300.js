

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;


// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
// 2 - day.slice and month.slice
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
//fri 29 sep 21:49
console.log(macTimeDisplay)