

# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.


Remember to Preview this README.

## Level 100

Welcome to Node Workshop Level 100.


Take a look at  `package.json`.
And take a look at `app.js`.

## Questions

a) Analyse and then predict what will happen when you run the command `node app.js` inside the `node-review` directory.

Think carefully about the current files and folders you've got in the `node-review` directory. 

In the app.js, there is only the import of Express, so it would return an error.


b) How can you can resolve this problem?
1. we need to call the express function 
2. We need to write a listen function and give the app a port number on which to listen to requests.
3. We need to write the get function and write what response we want to send back