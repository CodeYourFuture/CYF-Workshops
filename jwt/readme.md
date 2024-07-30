# JSON Web Token (JWT) Workshop

Today we’re going to build a Node.js Express Rest API example that supports Token Based Authentication with JWT ([JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)).

## Learning Objectives

```objectives
- [ ] Identify and explain CORS, Authentication, JSONWebToken, Environment Variables, Password Hashing
- [ ] Implement a User Registration Endpoint
- [ ] Implement a JWT Secret
- [ ] Implement a JWT Generator
- [ ] Implement a User Router in server.js
- [ ] Test User Registration in Postman
```

## Requirements

Before starting this workshop, work through the required context below.

## Establish Required Context

### [CORS](#cors)

<details>
<summary>What is CORS</summary>

CORS stands for **C**_ross_\-**O**_rigin_ **R**_esource_ **S**_haring_. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).

CORS and SOP are both browser policies that have developed in response to issues of browser security and vulnerabilities.

The specific browser vulnerability that Same Origin Policy is meant to address is called “cross-site request forgery” (CSRF, or alternatively XSRF, don’t you love all these acronyms? XD ).

CORS allows servers to specify certain trusted ‘origins’ they are willing to permit requests from. Origins are defined as the combination of protocol (http or https), host (a domain like [www.example.com](http://www.example.com/) or an IP address) and port. Browsers which implement the CORS policy will include a HTTP header called ‘Origin’ in requests made with AJAX (or newer web APIs like Fetch).

![](./cors.png)

</details>

### [Authentication](#auth)

<details>
<summary>What is Authentication</summary>

Authentication is the process of verifying identity. A unique identifier is associated with a user which is the username or user id. Traditionally, we use a combination of username and password to authenticate a user.

User authentication plays a central role in almost everything we do online. From apps to hardware and websites, user accounts and logins are everywhere. Authentication is critical for verifying a user's identity online and for confirming permissions so individuals can perform privileged actions.

Let’s take a quick look at how we used to do authentication:

![](./auth.avif)

</details>
<details>
<summary>Sessions</summary>
HTTP is a _stateless_ protocol. That means it doesn’t remember anything from request to request. If you login for one request, you’ll be forgotten, and will need to login again to make another request. As you can imagine, this can get very annoying fast.

The old-school solution has been to create what’s called a “session”. A session is implemented in two parts:

1.  An object stored on the server that remembers if a user is still logged in, a reference to their profile, etc.
2.  A cookie on the client-side that stores some kind of ID that can be referenced on the server against the session object’s ID.
</details>
<details>
<summary>Cookie-based Auth</summary>

![](./cookie-auth.avif)

If a user visits a web page (makes a request) and the server detects a session cookie, it will check if it currently has a session stored with the ID from the cookie, and if that object is still valid (whatever that means: not expired, not revoked, not blacklisted, etc). A _**cookie**_ is a small file of letters and numbers downloaded on to your computer when you access certain websites.

If the session is still valid, it will respond with the requested web page (or data. If it finds a session object, that object can contain data and with that, the server can “remember” who you are and what you were doing (e.g. if this is an e-commerce store, what products you’ve added to our shopping cart).

If the session is not valid (or no session cookie was detected) it will respond with some sort of error message saying that the request is “unauthorized”.

This type of setup has worked pretty well for us since the web came out and since we’ve been visiting websites that do most of their “thinking” on the server side. Typically, this has been a conversation between the user’s front-end browser and a corresponding back-end server in a one-to-one relationship.

![](auth-conversation.avif)

This setup still works, but these days we have many different situations that require different setups (e.g. multiple mobile native apps alongside large single-page web apps contacting multiple back-end services, that may be nothing more than json data without a webpage at all). In these types of scenarios, the cookie you get from one server, won’t correspond — or even be sent — to another server (let alone the problems that get created with CORS).

</details>
<details>
<summary>Drawbacks With Cookie-based Auth</summary>

![](./auth-drawbacks.avif)

- **Sessions**: need to be stored somewhere, either in memory, in a database and they need to be managed so that they are removed when they expire or are otherwise invalidated.
- **Poor Scalability**: The session store needs to be scaled when scaling the server. The store uses up resources, and adds complexity.
- **Performance Issues**: When the session needs to be stored on the server, a lot of database/store lookups need to happen on every request which can bog down the server.
- **Native Apps (or non-browser apps)**: Browsers handle cookies, but custom apps don’t (at least not easily), so a different kind of session mechanism is needed.
- **CSRF**: If cookies are being used, extra security is needed to prevent cross-site request forgery attacks since the cookie will be automatically sent to the server with any request made from that site.
- **CORS**: Cookies + CORS doesn’t work well across different domains (actually, real cross-domain doesn’t work at all).
</details>

### [What Is JWT](#jwt)

<details>
<summary>What Is JSON?</summary>

JSON stands for JavaScript Object Notation. It is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs.

#### What Are Tokens?

Now that you understand JSON as a data text format, you may be wondering what tokens are. To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allows the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves.

</details>

<details>
<summary>What Do JWTs Look Like?</summary>

JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this

![](./token.png)

The first section of the JWT is the header, which is a Base64-encoded string. If you decoded the header it would look something similar to this:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

The header section contains the hashing algorithm, which was used to generate the sign and the type of the token.

The second section is the payload that contains the JSON object that was sent back to the user. Since this is only Base64-encoded, it can easily be decoded by anyone.

It is recommended not to include any sensitive data in JWTs, such as passwords or personally identifiable information.

Usually, the JWT body will look something like this, though it's not necessarily enforced:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

Most of the time, the `sub` property will contain the ID of the user, the property `iat`, which is shorthand for _issued at_, is the timestamp of when the token is issued.

You may also see some common properties such as `eat` or `exp`, which is the expiration time of the token.

The final section is the signature of the token. This is generated by hashing the string `base64UrlEncode(header) + "." + base64UrlEncode(payload) + secret` using the algorithm that is mentioned in the header section.

The `secret` is a random string which only the server should know. No hash can be converted back to the original text and even a small change of the original string will result in a different hash. So the `secret` cannot be reverse-engineered.

When this signature sends back to the server it can verify that the client has not changed any details in the object.

According to the standards, the client should send this token to the server via the HTTP request in a header called `Authorization` with the form `Bearer [JWT_TOKEN]`. So the value of the `Authorization` header will look something like:

```http
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o
```

</details>

<details>
<summary>JSON Web Tokens Are Better</summary>

JWTs don’t use sessions, have no problem with native apps, and actually don’t even need special CSRF protections, and they work very well with CORS.

![](https://syllabus.migracode.org/~gitbook/image?url=https%3A%2F%2F4042228299-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MRebciU3NcuLgsX3ijf%252F-M_fudhy4USUCWLna3Z3%252F-M_fzPUSLWGbzh4on2EB%252Fimage.png%3Falt%3Dmedia%26token%3Dff18ec75-67a7-4152-82f2-32fbde34cd4d&width=768&dpr=4&quality=100&sign=d2c28d2a&sv=1)

With JWT you register yourself with an app, much the same way you would with an old-school app, and you login with your credentials (e.g. username/password). But instead of making a session and setting a cookie, the server will send you a JSON Web Token instead. Now you can use that token to do whatever you want to do with the server (that you have authorization to do).

Think of it like a hotel key: you register at the front desk and they give you one of those plastic electronic keys that you can use to access your room, the pool, and the garage. But you can’t open other people’s rooms or go into the manager’s office. And, like a hotel key, when your stay has ended, you’re simply left with a useless piece of plastic (i.e. the token doesn’t do anything any more after it’s expired).

</details>

### [.env](#env)

<details>
<summary>What are environment variables?</summary>
Environment variables are predetermined values that are typically used to make it possible to configure a value in your code from outside of your application.

![](./env.png)

You'll often find these variables stored in a file named with some kind of variation of `.env`.

##### How can I keep these** `.env` **files secure?

This is probably one of the more important points here: you need to ensure you're handling these files with care and not checking them into a git repository. If you expose these keys by uploading them to a public location by mistake, the internet could easily find these keys and people could abuse them for their own gains.

So how can we keep these secure? The easiest way is to add the environment file where you keep these keys to your `.gitignore` file.

To do this, simply open your existing `.gitignore` file or create a new one at the root of your repository and add the filename as a new line:

```
# Inside .gitignore
.env
```

</details>

### [Hashing](#hashing)

<details>
<summary>What is password hashing?</summary>
A hash is just a way to represent any data as a unique string of characters. You can hash anything: music, movies, your name, or this article. Metaphorically speaking, hashing is a way of assigning a “name” to your data. It allows you to take an input of any length and turn it into a string of characters that is always the same length. Obviously, there are many methods (algorithms) to do this.

A few of the most popular hashing algorithms:

- MD5 : Given any data will return a unique 32 character hash.
- SHA1 : Given any data will return a unique 40 character hash.
- SHA256 : Given any data will return a unique 64 character hash; designed by the National Security Agency.

The reason hashing is secure is simple: hashing is a one way operation. It cannot be reversed.

**bcrypt** is an npm library that helps you hash passwords. You can read about [bcrypt in Wikipedia](https://en.wikipedia.org/wiki/Bcrypt) as well as through this [link](https://www.npmjs.com/package/bcrypt).

</details>
 
---

# [Workshop](#workshop-jwt-authentication-flow-for-user-sign-up-and-user-login)

## JWT Authentication Flow for User Sign-up & User Login

First, we create a folder for our project:

```bash
mkdir node-auth-project-migracode
cd node-auth-project-migracode
```

Then we initialize the application with a _package.json_ file:

```bash
    npm init

    name: (auth-project-migracode)
    version: (1.0.0)
    description: Authentication using JWT in REST API
    entry point: (index.js) server.js
    test command:
    git repository:
    author: yogi
    license: ISC
    Is this ok? (yes) yes
```

We need to install necessary modules: `express`, `cors`, `dotenv`, `jsonwebtoken` and `bcrypt`. Run the command:

```bash
npm install express dotenv cors jsonwebtoken bcrypt
```

> [!IMPORTANT] > **Important:** You have to install nodemon globally in your system if you haven't done so already.

Use this command `npm i -g nodemon`

Once all these packages are installed, add a script in _package.json_ `"start": "nodemon server.js"`

The package.json file now looks like this:

```json
{
  "name": "auth-project-migracode",
  "version": "1.0.0",
  "description": "Authentication using JWT in REST API",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "author": "yogi",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1"
  }
}
```

### [Setup Express web server](#setup-express-web-server)

In the project's root folder which is `node-auth-project-migracode`, let’s create a new _server.js_ file:

```js
const express = require("express");
const cors = require("cors");

// initializing express application
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions)); // enable CORS

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to MigraCode Auth application."});
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

Let me explain what we’ve just done:

1. **import** `express` **and** `cors` **modules**:

- Express is for building the Rest APIs
- `express.json()` helps to parse the request and create the `req.body` object
- [cors](https://www.npmjs.com/package/cors) provides Express middleware to enable CORS

2. **create an Express app**, then add `express.json()` and `cors` middleware using `app.use()`method. Notice that we set origin `http://localhost:3000`. 3) **define a GET route** which is simple for test.

3. **listen on port 4000** for incoming requests.

**Note:** we assign PORT variable equal to `process.env.PORT || 4000` which means if PORT is defined already as an environment variable then it will be selected otherwise `4000` will be selected. We will create the `.env` file in a later step.

Now let’s run the app with command: `nodemon server.js`. Open your browser with URL [http://localhost:4000/](http://localhost:4000/), you will see:

![](./nodemon.png)

### [Database / Data store](#database-data-store)

Since we may not have yet learned how databases work, we will work with JSON files.

Create a JSON file with an empty array inside it where we will save the user data after user registration.

In the project's root folder which is `node-auth-project-migracode`, let’s create a new directory `database` with a file _db.json_ using following command:

```bash
    mkdir database
    cd database
    touch db.json
```

Now open this db.json file and create an empty array inside it like this:

```json
[]
```

### Define Routes

When a client sends a request for an endpoint using an HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will respond by setting up the routes.

We can separate our routes depending on the resources we want to access.

**User Authentication:**

- POST `/user/sign-up`
- POST `/user/sign-in`
- POST `/user/auth`

In the project's root folder `node-auth-project-migracode`, let’s create a new directory `routes` with a file _user.js_ using following command:

```bash
mkdir routes
cd routes
touch user.js
```

### Registration endpoint

Let's create a user authentication endpoint in the _user.js_ file we just created

**node-auth-project-migracode/routes**/_user.js_

```js
const express = require("express");
const bcrypt = require("bcrypt"); // bcrypt is used to hash password before saving it to database
const fs = require("fs"); // fs is node's inbuilt file system module used to manage files

const usersDb = require("../database/db.json"); // import existing data from db.json file

const router = express.Router(); // we create a new router using express's inbuilt Router method

// user registration / sign-up
router.post("/sign-up", async (req, res) => {
  const {name, email, password} = req.body;

  try {
    const user = await usersDb.filter((user) => user.email === email);

    if (user.length > 0) {
      return res.status(400).json({error: "User already exist!"});
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = {
      id: usersDb.length,
      name: name,
      email: email,
      password: bcryptPassword,
    };

    usersDb.push(newUser); // we add newUser to usersDb array

    // we save the updated array to db.json file by using fs module of node

    await fs.writeFileSync("./database/db.json", JSON.stringify(usersDb));

    /* Once the user registration is done successfully, we will generate a
          jsonwebtoken and send it back to user. This token will be used for
          accessing other resources to verify identity of the user.

          The following generateJWT function does not exist till now but we
          will create it in the next step. */

    const jwtToken = generateJWT(newUser.id);

    return res.status(201).send({jwtToken: jwtToken, isAuthenticated: true});
  } catch (error) {
    console.error(error.message);
    res.status(500).send({error: error.message});
  }
});

module.exports = router; // we need to export this router to implement it inside our server.js file
```

**Line 22:** We create a salt using bcrypt. Salting is simply **the addition of a unique, random string of characters known only to the site to each password before it is hashed.** Typically, this “salt” is placed in front of each password.

**Line 23:** We hash the password provided by user using bcrypt and the salt we generated in the previous line.

### JWT Secret

First we need to create a secret which we will use for generating JWT token. Secret is just a long string which can contain anything.

In the project's root folder which is `node-auth-project-migracode`, let’s create a new file `.env` with a secret inside it using following command:

```bash
touch .env
```

Now inside this file create a secret like this:

```
jwtSecret = "migracodeAuthJan2021"
```

This is your secret to sign the JWT token. You should never share this secret, otherwise someone else could use it to forge JWT tokens to gain unauthorized access to your service. The more complex this access token is, the more secure your application will be.

### JWT Generator

In the project's root folder `node-auth-project-migracode`, let’s create a new directory `utils` with a file _generateJWT.js_ using following command:

```bash
mkdir utils
cd utils
touch generateJWT.js
```

Now open this _generateJWT.js_ file and create a function like this:

```js
const jwt = require("jsonwebtoken");
require("dotenv").config(); // here we use dotenv module which we installed in the begining to access environment variables from .env file

function generateJWT(user_id) {
  // payload is just an object which usually contains some information about user but not confidential information such as password.
  const payload = {
    user: {
      id: user_id,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1h"});
}

module.exports = generateJWT; // we export this function to use it inside routes/user.js
```

Lets import this function inside **routes/**user.js

Put the following code on line 7 in _user.js_ file right before we create a router on line 8

```js
const generateJWT = require("../utils/generateJWT");
```

At this point our user router is ready with one endpoint for user registration/sign-up. We will connect this user router to our server.js in the next step.

### Implement User Router in server.js

All we need now is to import the router right before we initialize our application using `const app = express();` by using following code inside your _server.js_ file

**Hint:** put this code in line 4

```js
const user = require("./routes/user");
```

Once the router is imported we need to use this router in our application by writing following code before `app.listen(...)`

**Hint:** put this code in line 22 or 23

```js
app.use("/user", user);
```

---

# Part 2

### Test User Registration in Postman

We will create a new POST request to `localhost:4000/user/sign-up` URL with a body in JSON format with three key-value pairs which we need for your registration. It will look like the following

![](https://syllabus.migracode.org/~gitbook/image?url=https%3A%2F%2F4042228299-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MRebciU3NcuLgsX3ijf%252F-M_izuZD0GIYdC3WO30G%252F-M_j0KEPfxKyuUn1AFea%252Fimage.png%3Falt%3Dmedia%26token%3Df48f5e9f-b76b-457d-a9d8-1fdd43b010c9&width=768&dpr=4&quality=100&sign=a88c0720&sv=1)

Once you hit the send button, it will send a request to our server and make sure that the server is running and you are able to see this in your terminal

![](https://syllabus.migracode.org/~gitbook/image?url=https%3A%2F%2F4042228299-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MRebciU3NcuLgsX3ijf%252F-M_izuZD0GIYdC3WO30G%252F-M_j1KjkK91tJjRTJuV1%252Fimage.png%3Falt%3Dmedia%26token%3D741cd407-a145-4f19-a9fa-aa2a9bb0e126&width=768&dpr=4&quality=100&sign=a8ddf6d9&sv=1)

Once the request is sent with a name, email and password, we will receive a response back from our server which will look something like this in Postman

![]()

As you can see we have **Status: 201 Created** and we received an object with a token.

If we try to send the same request again we will receive something like this

![](./error.png)

This means that the user already exists and we can not create a new user with same email.

At this point our user registration endpoint is ready and we can move forward to create login/sign-in endpoint.

### Login/Sign-in endpoint

We have already done all the tedious part of setting up a server and creating a router. Now we just need to append a new endpoint in the existing _user.js_ file inside **routes** directory.

Lets append the following code inside **routes/**user.js file

**Hint:** add it between sign-up endpoint and export statement which is the last line of code in the file.

```js
// user sign-in / login
router.post("/sign-in", async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await usersDb.filter((user) => user.email === email);

    if (user.length === 0) {
      return res
        .status(401)
        .json({error: "Invalid Credential", isAuthenticated: false});
    }

    // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration
    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({error: "Invalid Credential", isAuthenticated: false});
    }

    // if the password matches with hashed password then we generate a new token and send it back to user
    const jwtToken = generateJWT(user[0].id);

    return res.status(200).send({jwtToken, isAuthenticated: true});
  } catch (error) {
    console.error(error.message);
    res.status(500).send({error: error.message});
  }
});
```

### Test User Login/Sign-in in Postman

We will create a new POST request to `localhost:4000/user/sign-in` URL with a body in JSON format with two key-value pairs that we need for login. It will look like the following:

![](./signin.png)

Once you hit the send button, it will send a request to our server and make sure that the server is running and you are able to see this in your terminal

![](nodemon.png)

Once the request is sent with an email and password, we will receive a response back from our server which will look something like this in Postman

![](./response.png)

As you can see that the **Status: 200 OK** and we received an object with a token.

If we try to send a request with **different password** we will receive something like this

![](./auth-false.png)

This means that the provided login credentials are incorrect and we have **Status: 401 Unauthorized**

At this point our user registration and login/sign-in endpoints are ready and we can move forward to create our last endpoint.

### User Authorization endpoint

This endpoint is created to verify the user identity before sending back any resource to the user. Lets start by adding the following code in **routes/**user.js file

**Hint:** add it between sign-in endpoint and export statement which is the last line of code in the file.

```js
// user authorization
router.post("/auth", authenticate, (req, res) => {
  try {
    res.status(200).send({isAuthenticated: true});
  } catch (error) {
    console.error(error.message);
    res.status(500).send({error: error.message, isAuthenticated: false});
  }
});
```

As you might have already noticed, we have a new argument between `"/auth"` and `(req, res)` called **authenticate**. It is a custom middleware function which we will create in the next step. We will use this authenticate middleware in all the endpoints which we want to protect to verify user identity before sending back the requested resources.

### Authenticate Middleware

In the project's root folder `node-auth-project-migracode`, let’s create a new directory `middleware` with a file _authenticate.js_ using the following command:

```bash
mkdir middleware
cd middleware
touch authenticate.js
```

Now open this _authenticate.js_ file and create a function like this:

```js
const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticate(req, res, next) {
  // Get token from request headers
  let token = req.header("authorization");

  // Check if token exists
  if (!token) {
    return res
      .status(403)
      .send({message: "authorization denied", isAuthenticated: false});
  }

  token = token.split(" ")[1];

  // Verify token using jwt
  try {
    /* this will return the user id (user:{id: user_id}) which we
        provided as payload while generating JWT token */
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;

    next();
  } catch (err) {
    res
      .status(401)
      .send({message: "Token is not valid", isAuthenticated: false});
  }
}

module.exports = authenticate; // we export it to use it inside user router
```

**Line 7:** We will receive an Authorization header from user with every request to a protected endpoint which requires user authentication. Without this Authorization header, user can not access any information.

**Line 14:** In this middleware, we read the value of the authorization header. Since the `authorization` header has a value in the format of `Bearer [JWT_TOKEN]`, we have split the value by the space and separated the token.

**Line 20:** Then we have verified the token with JWT.

**Line 22:** Once verified, we attach the `user` object into the request and continue. Otherwise, we will send an error to the client.

Now lets import this middleware function inside **routes/**user.js

Put the following code on line 6 in _user.js_ file right before we create a router on line 8

```js
const authenticate = require("../middleware/authenticate");
```

At this point our user router is ready with all three endpoints for user registration/sign-up, login/sign-in and authorization.

### Test User Authorization in Postman

We will create a new POST request to the `localhost:4000/user/auth` URL with a Authorization header which we need for user verification. You will have to select **Bearer Token** from the drop-down under Authorization tab and paste the token (which you received after login or registration) on the right side of Token. It will look like the following

![](./running.png)

Once you hit the send button, it will send a request to our server and make sure that the server is running and you are able to see this in your terminal

![](https://syllabus.migracode.org/~gitbook/image?url=https%3A%2F%2F4042228299-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MRebciU3NcuLgsX3ijf%252F-M_izuZD0GIYdC3WO30G%252F-M_j1KjkK91tJjRTJuV1%252Fimage.png%3Falt%3Dmedia%26token%3D741cd407-a145-4f19-a9fa-aa2a9bb0e126&width=768&dpr=4&quality=100&sign=a8ddf6d9&sv=1)

Once the request is sent with a Authorization header containing **Bearer Token**, we will receive a response back from our server that will look something like this in Postman

![](./bearer-is-auth.png)

As you can see that the **Status: 200 OK** and we received an object with a property `isAuthenticated: true`

If we try to send a request without **Bearer Token** we will receive something like this

![](./bearer-403.png)

This means that we cannot access protected endpoints that use the authenticate middleware without a **Bearer Token** and we have **Status: 403 Forbidden**

Now we can add this authenticate middleware to any endpoint which we want to protect and users will have to provide a token to access the resources of these endpoints.

Last updated 2021

## Acceptance Criteria

- I can explain what JWT is and how it works
- I can define what environment variables are and how they are used
- I can explain what password hashing is and why it is important
- I can create a JWT authentication flow for user sign-up and user login
- I can create a user authorization endpoint
- I can test user registration, login, and authorization in Postman
