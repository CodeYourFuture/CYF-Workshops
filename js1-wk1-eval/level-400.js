let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
// Three 
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
/* 
This expression replaces all occurrences of the string stored in secret ("cake") within the confession string with a string of 'x' characters of the same length as secret (which is 4).
 So, "cake" will be replaced with "xxxx".
*/
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// Two. This is determined by the method signature of replaceAll(searchValue, replaceValue).
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// One input. The number of times to repeat the string, which is secret.length (4)
// e) What kind of statement is on line 7?
/*
Line 7 is an assignment statement. 
It assigns the result of confession.replaceAll(...) back to the variable confession.
*/