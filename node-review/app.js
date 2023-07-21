const app = require('express');
// loading the express module on line one



const server = app();
// initialise a server




app.get("/",function() {
    response.status(200).send("You've successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200


app.get('/albums',function(request,response) {
    response.status(200).send({
        albums
    });
});