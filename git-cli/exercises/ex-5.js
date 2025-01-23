// Someone is trying to split up numbers into tens and units

const num = 37;
// so for num, they want to build a string "37 is 30 + 7"
// 3 represents the tens
// 7 represents the units

const placeValueString =  `${num} is ${num / 10} + ${num % 10}`;
// try declaring some variables to store the tens and the units to make this more readable
// also there's a small bug at the moment: can you fix it?

// once you're finished try changing the value of num to see if it still works