let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret, "x".repeat(secret.length));

// a) How many function calls are there in this file?
// Two; replaceAll() and repeat()
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// It is replacing the content of the variable, secret, with x and the 'x' is repeated 4 times.
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// Two inputs i.e. secret and "x". The argument within the parenthesis says it all.
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// One input is repeated. The method .repeat is applied to only "x"
// e) What kind of statement is on line 7?
//  variable reassignment.
