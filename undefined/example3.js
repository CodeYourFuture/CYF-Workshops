function sayHello(user) {
    console.log(`Hello ${user}`);
}

sayHello(32);

// The output contains undefined because the sayHello() function expects an argument user, but when it's called without any argument like sayHello(), the user parameter is undefined. The console.log() statement inside the function uses the user parameter to construct the message to be logged, so when user is undefined, the message will include undefined as the value of user.

// However, since the function doesn't have a return statement, its return value is undefined by default. Therefore, when you call sayHello() without any argument, it logs the message "Hello undefined" to the console, but the return value of the function is undefined.

// The first line is the message logged by the console.log() statement inside the sayHello() function, and the second line is the return value of the sayHello() function, which is undefined.



