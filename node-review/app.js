const express = require('express');
const albums = require('./albums.js')
// loading the express module on line one


const server = express();
// initialise a server


server.get("/",function() {
    response.status(200).send("You've successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200


server.get('/albums',function(request,response) {
    response.status(200).send({
        albums
    });
});


server.get('/albums/:id',function(request,response) {

    const album = albums.find(album => album.id === request.params);

    response.status(200).send({
        album
    });
});

server.listen(9090,() => {
    console.log('listening on port 9090...');
})