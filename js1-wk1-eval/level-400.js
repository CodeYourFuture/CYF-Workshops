let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file? 2 replace, repeat
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing. it asks to replace cake with x and repeat x four times which is the length of the secret
// c) How many inputs do we pass to replaceAll when we call it? How can you tell? 2 one is secret and one is x. we can tell from the comma between them
// d) How many inputs do we pass to repeat when we call it?  How can you tell? one secret.length
// e) What kind of statement is on line 7? it is an assignment because it assigns a new value to the variable"confession"