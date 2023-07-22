

# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.


## Level 500

Welcome to Node Workshop Level 500.


We've got a requirement for a new endpoint!


## New requirement GET  `/albums` endpoint
  
Inside, `app.js` there should be a new variable `albums` pointing to an array of album objects.

We need to set up an **endpoint** to serve the albums data to the client.

For this endpoint, a client application should be able to make a GET request to the "/albums" endpoint
and the server should respond with

- a response body with the albums `{ albums: [{title: "Afrique Victime",},...] }` 
- and status code of 200

You'll need to keep testing this endpoint works by starting a locally hosted server on port 9090.

Remember to check the response body and the status code.

To test this endpoint you could use the command: `curl localhost:9090/albums`. Alternatively, you can use Postman to test this endpoint is working properly.

 

