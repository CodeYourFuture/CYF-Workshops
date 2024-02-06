# Staging changes


## Learning objectives

- [ ] stage changes in our working directory
- [ ] check the state of the working directory and the staging area


## Updating the working tree

Let's make a change to the current working directory and then stage that change.


### Steps 👣

1. Open this project in VSCode.
2. Go to `exercises/ex-1.js` and try the first exercise.

You will have made a change to the **working tree**.

3. Now go to the Version Control tab in VSCode and look for your change to the Working Tree.


## Staging area 🔴🟢

We need to tell Git which changes we want to include in our next commit.

We do this by promoting these changes files to the **staging area**.

🔑 **Staging area** is the space to prepare (stage) the changes that will be in the next commit.

This is useful because we don't always want to commit all of our changes at the same time.


### Steps 👣

1. Use `git status` command to check the state of your **Working Tree** and your **Staging Area**. What does `git status` tell you?
2. Now **stage** this change using the `git add` command to stage your change to `exercises/ex-1.js`
3. Finally, check the status of the **Working Tree** and the **Staging Area**.



[Next section](./checkpoint.md)
