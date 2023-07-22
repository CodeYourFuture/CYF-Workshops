const express = require("express");
// loading the express module on line one
const albums = require("./albums");

const server = express();
// initialise a server

server.get("/", function (request, response) {
  response.status(200).send("You've successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200

server.get("/albums", function (request, response) {
  response.status(200).send({
    albums,
  });
});

server.listen(9090, () => {
  console.log("server is listening on port 9090...");
});
