# Staging changes


🎯 Goal: stage changes in our working directory
🎯 Goal: check the state of the working directory and the staging area


## Updating the working tree

Let's make a change to the current working directory and then stage that change.

Open up this project in VSCode (if you've not done so already).
Go to `examples/ex-1.js` and try the first exercise in there

## Current mental model 🧠

We've made a change to the **working directory**.

Once you've updated `examples/ex-1.js` go to the Version Control tab and double-check you can see your change
to the Working Tree.

We need to inspect the **staging area**.

## Staging area 🔴 🟢

We need to tell Git which updated/new/deleted files we want to include in our next commit.

We do this by promoting these updates/new/deleted files to the **staging area**.

🔑 **Staging area** is the space to prepare (stage) the changes that will be in the next commit.

Anything we put into the staging area we're saying:

> "Ok, which updated/new/deleted files would you like to put into your next snapshot?"
>
> "I'd like to take a snapshot of the updated `exercises/ex-1.js` file in the next commit"
>
> "OK cool, anything you'd like to put in your next commit, please put it into the staging area"

In order to do this, we store the updated/new/deleted files in the staging area.


Check the state of the Work

Use `git status` command to check the state of your **Working Tree** and your **Staging Area**

🖊️ Write down what you think `git status` is doing.


## Staging changes

Now let's **stage** this change - use the `git add` command to stage your change to `exercises/ex-1.js`

Once again, after you've done this - check to see if it worked.

Use `git status` command to check the state of your **Working Tree** and your **Staging Area**


[Next section](./checkpoint.md)
