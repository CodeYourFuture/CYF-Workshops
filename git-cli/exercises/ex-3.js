

// this person has tried adding a comma to a number so it is easier to read
// use console.log for the value of numericalStringWithCommas
// then re-write the expression for numericalStringWithCommas using template literals instead of +
 
const numberOfPlays = 46462;
const numericalStringWithCommas = Math.floor(numberOfPlays / 1000) + ',' + numberOfPlays % 1000;

console.log(numericalStringWithCommas);