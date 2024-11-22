let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
/*There are two function calls in this file: confession.replaceAll() and 'x'.repeat().*/

// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
/* confession.replaceAll(secret, 'x'.repeat(secret.length)) is replacing every occurrence of the string "cake" (stored in secret) in the confession text with a string of 'x' characters of the same length as "cake".
'x'.repeat(secret.length) generates a string consisting of four 'x' characters (since secret.length is 4), effectively censoring the word "cake" with "xxxx". */

// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
/*  We pass two inputs to replaceAll: secret and 'x'.repeat(secret.length).
You can tell because replaceAll requires two arguments: the substring to be replaced (secret) and the string to replace it with ('x'.repeat(secret.length)). */

// d) How any inputs do we pass to repeat when we call it?  How can you tell?
/* We pass one input to repeat: secret.length.
You can tell because repeat takes a single argument that specifies how many times the string 'x' should be repeated. */


// e) What kind of statement is on line 7?
/*  Line 7 is an assignment statement. It assigns the result of confession.replaceAll(...) to the variable confession, updating its value. */