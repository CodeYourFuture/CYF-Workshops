const express = require('express');
// loading the express module on line one

const app = express();

app.listen(4000, () => {
    console.log("server is now listening")
});

app.get('/', (request, response) => {
    console.log("server is now running");
})