### Why do we test?

How do you check if your code is working? You could test it manually, e.g.

```js
function greet(name) {
  return `Hello ${name}`;
}

let name = "Ellie";

let result = greet(name);

console.log(`Expect ${result} to equal Hello Ellie`);
// Expect Hello Ellie to equal Hello Ellie
```

A simple console.log can verify that our code behaves correctly. But this approach isn't very robust. What happens if I want to change my function?


```js
function greet(name) {
  return `Hi ${name}`; // <-- I changed the greeting
}

let name = "Ellie";

let result = greet(name);

console.log(`Expect ${result} to equal Hello Ellie`);
// Expect Hi Ellie to equal Hello Ellie <-- I didn't change the console.log, so how do I know if my function is meant to greet with 'Hi' or 'Hello'?
```

Our console.log is helpful if we remember to check the output, but a testing tool, like Jest can tell us if our code works or not more clearly.

### Why do we use automated tests?

* You can be more productive because you don’t have to spend the as much time manually testing the code yourself
* Tests allow you to make changes in your code quickly and safely without breaking the existing behaviour
* Tests provide documentation for what your code is actually meant to do

### Why do we use test driven development?

* It helps us write better code. Code that can be easily tested tends to be cleaner and more modular
* It helps us break down the problem into smaller chunks
* It encourages us to think about edge cases (the less likely paths in our code)


## Pair exercise

* Use test driven development in pairs to complete this exercise
  * person A should write a failing test
  * person B should make the test pass by implementing the code
  * person A should refactor (if necessary)
  * then start again, this time person B writes the failing test


* Write a function that
  * takes a number as an argument
  * returns a string of comma separated numbers from 1 to the number passed in
  * for every number that is divisible by 3, the number should be replaced by 'fizz'
  * for every number that is divisible by 5, the number should be replaced by 'buzz'
  * for every number that is divisible by both 3 and 5, the number should be replaced by 'fizzbuzz'

Examples

Given 1, the function should return "1".

Given 15, the function should return "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz".



### Running the tests

`cd testing`

`npm i`

`npm run test`