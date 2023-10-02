let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file? There are two function calls in the file.
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing.  The expression is to reassign the secret variable with a value of "x"
// c) How many inputs do we pass to replaceAll when we call it? (Two inputs) How can you tell? The input of secret(cake) is first passed so that it can be replaced by "x" which will be the new value whenever the variable confession is called.
// d) How any inputs do we pass to repeat when we call it? (Four inputs) How can you tell? Because it is called to repeat with the variable length which is four(4).
// e) What kind of statement is on line 7? The statement on line 7 is Re-declaration.