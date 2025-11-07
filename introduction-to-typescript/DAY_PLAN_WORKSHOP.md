# Introduction to TypeScript

## Learning objectives

- [ ] Being able to add sensible and predictable types to JavaScript variables.
- [ ] Being able to define JavaScript functions with parameter types and return types.
- [ ] Being able to explain the value of adding types to JavaScript for both you and your team.

## What is and why use TypeScript? (10 minutes)

Many JavaScript developers eventually move on to TypeScript, which is a language that extends JavaScript by supporting dynamic types.

Let’s have a look at this example JavaScript code:

```JS
function getUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

const user = getUser(123);
```

What is a `user`? What does this data look like? We might have the answer in our head but TypeScript gives us the ability to define it in code. Let's have a look at the same example but in TypeScript:

```TS
type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

const user: Promise<User> = getUser(123);
```

Here we have specified that a `user` is of type `User`. We know it has an `id`, `name`, and `email` field and the data type of each. `Promise<>` also tells us that we will not immediately have this data since we are waiting for it to be `fetch`ed.

### Volunteer tips

Some key points worth getting across are:

- TypeScript is an extension of JavaScript.
- All JavaScript is valid TypeScript because TypeScript is a superset of JavaScript.
- TypeScript is optional.
- TypeScript is compiled/transpiled down to JavaScript before it is run by the browser.

## Basic examples (10 minutes)

There are many basic data types, including but not limited to `string`, `number`, `boolean`, `any`, `unknown`, `undefined`, and `null`. Here are some examples in TypeScript code:

```TS
let x = "hello"; // implicitly type string
let y: string = "hello"; // explicitly type string

let age1 = 40; // implicitly type number
let age2: number = 40; // explicitly type number
```

Notice how not everything needs to be explicit. TypeScript is very smart and will be able to type many things itself. In fact, it will often find incorrect typing before you do.

We can also define an object type like the `User` type from earlier:

```TS
type User = {
  id: number;
  name: string;
  email: string;
};
```

There are many powerful things we can do with objects but we'll start with the most common:

```TS
type ComplicatedUser = {
  id: number | string; // id is either a number OR a string. This is technically valid but this variance is likely to cause confusion
  name?: string; // name is optional, meaning it'll either be a string OR undefined
  email?: string | null; // email is optional and possibly null, meaning the type is string OR null OR undefined
};
```

Objects can become complicated data as they grow and TypeScript makes maintaining our code far easier!

## Function params type examples (10 minutes)

TypeScript is also handy when we introduce it to our functions. We can specify what data a functions expects as well as what data it will return. For example the function below, `fetchUser`, expects 1 parameter of type `number` and returns an object of type `User`:

```TS
type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const users: User[] = [
  {
    id: 1,
    firstName: "Morgan",
    lastName: "Freeman",
  },
  {
    id: 2,
    firstName: "Danny",
    lastName: "DeVito",
  },
];

function fetchUser(userId: number): User {
  return users[userId];
}
```

## Fixing TypeScript errors (20 minutes)

### Setup

- Breakout into groups of about 3 to 5 trainees.
- Make sure you have access to the [exercise repository](https://github.com/CodeYourFuture/CYF-Workshops/tree/main/introduction-to-typescript).
- Clone it to a local project.
- Follow the instructions in `README.md` to setup the project and run the exercise.

### Fixing errors

Now that you've got the project running locally, your job is to ensure all tests are passing. There are TypeScript type examples within `src/examples` should you need a hint but feel free to also do your own research.

## Takeaways (10 minutes)

Now that you have experience with TypeScript, what do you think of it? Are you able to answer:

- When would you choose to use TypeScript over JavaScript?
- Would you prefer to use JavaScript or TypeScript?
- Would you prefer your coworkers to use JavaScript or TypeScript?
- Why would you use TypeScript if JavaScript is more flexible?

### Volunteer tips

Steer trainees towards:

- TypeScript makes unexpected bugs less likely.
- It is easier to understand someone else’s code.
- The output of code is more predictable. You can predict the output of a function without even seeing the code of a function.
- TypeScript is optional but useful.

## Additional reading

If you would like to further your TypeScript knowledge, there are many great tutorials online. Total TypeScript is one such resource and has many free tutorials.

https://www.totaltypescript.com/tutorials/beginners-typescript
