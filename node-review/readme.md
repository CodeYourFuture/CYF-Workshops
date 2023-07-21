

# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.


## Level 400

Welcome to Node Workshop Level 400.


Firstly,

Look inside `app.js`, and answer the following:

Q1) What output do you get in your terminal when you run the command `npm start; curl localhost:9090`

P.S. ( this command means run `npm start` first and the `curl localhost:9090` )

P.P.S ( If you've not used `curl` before then you can give it a quick google online to check what it does )

{YOUR_ANSWER_HERE}

Explain why you get this answer. How can you fix this issue?

2) Fix the problem in Q1). Run the command `npm start; curl localhost:9090` again - what do you get in your terminal this time? Explain your answer.

{YOUR_ANSWER_HERE}

3) Double check you're not getting any errors in the terminal when you run the command `npm start; curl localhost:9090`.
Additionally, test the server again using another client application like Postman or the browser.


## Requirements

We're going to make the requirements clearer now.

We need to set up a **single endpoint**.

For this endpoint, a client application should be able to make a GET request to the "/" endpoint
and the server should respond with

- a message saying "You've successfully reached the server" 
- and status code 200.

You'll need to keep testing this endpoint works by starting a locally hosted server on port 9090. Remember to check the response body and the status code.

 

