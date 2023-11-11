// Predict and explain...
// What will be logged by this code?
// Check your prediction and explanation by running the code.

const person1 = {
  name: "Abdi",
  location: "London",
  id_number: 17,
};

const person2 = {
  name: "Shadi",
  job: "Software Engineer",
  location: "London",
  id_number: 28,
};

const person3 = person2;
// we assigned object person2 to person3

person3.location = "Manchester";
// we assigned to object person3 key location and changed the value to Manchester, the out put for key location is now Manchester.

console.log(person1.name);
// the output is Abdi
console.log(person2["name"]);
// the output is shadi

console.log(person1.id_number > person3["id_number"]);
// the output is false , person1,id_number 17 is not greater then person3.id_number 28.
console.log(person1.job);
// the Output is Software Engineer

console.log(person1.location === person2.location);
// the output is false , we assigned person3 key value to Manchester

console.log(person1.location === person3.location);
// the output is false again , the object person2 assigned to person3 and changed the key value person3 key(location to Manchester),

console.log(person2.location === person3.location);
// the output is true
