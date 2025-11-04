// Calculate the average of an array of numbers
const calculateAverage = (array) => {
    let runningTotal = 0;

    for (let i = 0; i < array.length; i++) {
        runningTotal += i;
    }

    return runningTotal / array.length;
}

// This will work
console.log(calculateAverage([1, 2, 3, 4, 5]));

// This will throw an error
console.log(calculateAverage());
