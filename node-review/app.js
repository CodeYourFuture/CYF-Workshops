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


app.get('/albums/:id',function(request,response) {

    const album = albums.find(album => album.id === request.params);

    response.status(200).send({
        album
    });
});