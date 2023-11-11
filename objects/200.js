// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
  name: "Jemima",
  location: "Glasgow",
  id_number: 9,
};
// we can not define object keys withe string
console.log(person.name === "Jemima");
// is true
console.log(person.location === "Glasgow");
// line 8 we did not give value for location key , this is why we get undefined Error
console.log(person.id_number === 9);
// line 9 , in order to give value for key id_number, we do not use assignment sign
