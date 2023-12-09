// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
    const cyfLocations = ["Birmingham", "Cape Town", "Glasgow", "London", "Manchester"];
    return cyfLocations.includes(person.city);
}

const mo = {
    "name": "Mo",
    "city": "Glasgow",
    "focus": "React",
};

const sayed = {
    "name": "Sayed",
    "city": "Edinburgh",
    "focus": "SQL",
}

console.log(checkLivesNearCYF(mo));
console.assert(!checkLivesNearCYF(sayed));
// the line number 8 i change the location by city
// in line 23 I changed the assert by console.log so that why it shaw me true sign. 
