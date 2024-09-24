// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
    "name": "Manu",
    "favourite_ice_cream": "vanilla",
    "favourite_topping": "marshmallows",
};

function assertFieldEquals(object, field, targetValue) {
    console.assert(object.field === targetValue);
}

assertFieldEquals(person, "favourite_ice_cream", "vanilla");
