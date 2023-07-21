const app = require('express');
// loading the express module on line one
console.log("Log 1: ", typeof app);


const server = app();
// initialise a server
console.log("Log 2: ", typeof server);

