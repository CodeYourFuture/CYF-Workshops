# `formatSecondsAsString`

## Learning Objectives

```objectives
- [ ] Break a down a problem into smaller cases
- [ ] Write tests to check logic for smaller cases
```

When programming, you will often encounter large problems. Developers must learn to break down complex problems into smaller problems. In this workshop, we'll use tests to break down the implementation of `formatAsSecondsAsString`.


_Given_ a time in seconds, 
_When_ `formatAsSecondsAsString` is called with the time
_Then_ we it should return a well formatted time string.

For example, if we call `formatAsSecondsAsString` with 390
then we should get "6 minutes and 30 seconds"

If we call, `formatAsSecondsAsString` with `6327894` then we should get ""


### 🧩 Break down the problem

(10 mins)

To break down this problem, we will only start considering seconds inputs <= 60. Why do you think this is a good place to start?


```js
formatAsSecondsAsString(1) // "1 second" 
```

```js
formatAsSecondsAsString(50) // "50 seconds" 
```


Spend 10 minutes, think about some other test cases you can explore to check this functionality


### 🧪 Set up tests

(10 mins)

In this directory (`time-string`), create a `package.json` and install Jest as you did in the prep material.
Next, create a test file, `time-string.test.js`. In there, write your first test.


### 🩺 First steps

(10 mins)

Once you've written your first test, you'll need to implement the logic to get it working for this test case. Don't try rushing ahead in this kata - otherwise it could become very unwieldy!



### 💼 New cases

Now we'll consider cases where the input is less than 3600? Why is this a good idea?


```js
formatAsSecondsAsString(61) // "1 minute and 1 second" 
```


Continue this pattern of writing tests and then implementing your functionality. Do this until you're confident your function works in the case where the input is less than 
