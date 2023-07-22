const express = require("express");
// loading the express module on line one

const server = express();
// initialise a server

const albums = [
  {
    title: "Afrique Victime",
    artist: "Mdou Moctar",
    yearOfRelease: 2021,
  },
  {
    title: "Africa Brasil",
    artist: "Jorge Ben Jor",
    yearOfRelease: 1976,
  },
  {
    title: "Doing it in Lagos,L Boogie,Pop & Disco in 1980's Nigeria",
    artist: "Compilation",
    yearOfRelease: 2016,
  },
];

server.get("/", function () {
  response.status(200).send("You've successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200
server.get("/albums", function (request, response) {
  response.status(200).json(albums);
});

server.listen(9090, () => {
  console.log("the server is listening on port 9090...");
});
