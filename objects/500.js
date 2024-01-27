// Fill in the code below so that the tests pass.

const people = [];

people.push({
    "name": "Saqib",
    "favourite_food": "salad",
});

people.push({
    "name": "Shadi",
    "favourite_food": "mango",
});

people.push({
    "name": "Navid",
    "favourite_food": "macarons",
});

const favouriteFoods = [];

// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

console.assert(favouriteFoods.length === 3);
console.assert(favouriteFoods.includes("salad"));
console.assert(favouriteFoods.includes("mango"));
console.assert(favouriteFoods.includes("macarons"));
