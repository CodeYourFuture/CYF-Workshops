# Staging changes


🎯 Goal: stage changes in our working directory

🎯 Goal: check the state of the working directory and the staging area


## Updating the working tree

Let's make a change to the current working directory and then stage that change.

Open up this project in VSCode (if you've not done so already).
Go to `examples/ex-1.js` and try the first exercise in there


We've made a change to the **working directory**.

Once you've updated `examples/ex-1.js` go to the Version Control tab and double-check you can see your change
to the Working Tree.

We need to inspect the **staging area**.

## Staging area 🔴 🟢

We need to tell Git which updated/new/deleted files we want to include in our next commit.

We do this by promoting these updates/new/deleted files to the **staging area**.

🔑 **Staging area** is the space to prepare (stage) the changes that will be in the next commit.


## Steps 👣

1. Use `git status` command to check the state of your **Working Tree** and your **Staging Area**. What does `git status` tell you?
2. Now **stage** this change using the `git add` command to stage your change to `exercises/ex-1.js`
3. Once again, after you've done this - check the status of the **Working Tree** and the **Staging Area**.



[Next section](./checkpoint.md)
