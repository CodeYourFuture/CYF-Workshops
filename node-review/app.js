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


const albums = [{
    title : "Afrique Victime",
    artist: "Mdou Moctar",
    yearOfRelease: 2021
    
},
{
    title: 'Africa Brasil',
    artist: 'Jorge Ben Jor',
    yearOfRelease: 1976
},
{
    title: "Doing it in Lagos,L Boogie,Pop & Disco in 1980's Nigeria",
    artist: 'Compilation',
    yearOfRelease: 2016
}];