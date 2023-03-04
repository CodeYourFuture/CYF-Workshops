function sayHello() {
    return "Hello";
}

let result = sayHello();
console.log(result);

// The output in the example contains undefined because the sayHello function does not return any value explicitly. When a function is called, it can return a value using the return keyword. If the return keyword is not used in the function, the function will return undefined by default.
// In the example, the sayHello function prints "Hello" to the console but does not return any value. When the sayHello function is assigned to the result variable, the result variable is assigned the value of undefined because that is the value that the sayHello function returns by default.
// When the result variable is printed to the console, it will display undefined because that is the value that was assigned to it when the sayHello function was called.