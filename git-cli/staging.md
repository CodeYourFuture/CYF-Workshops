# Staging changes


🎯 Goal: stage changes in our working directory.
🎯 Goal: check the state of the working directory and the staging area


## Updating the working tree

Let's make a change to the current working directory and then stage that change.

Open up this project in VSCode (if you've not done so already)
Find a problem with the `index.html` source code and try to fix it in the file editor.

## Current mental model 🧠

We've made a change to the **working directory** and we now need to **stage the change**

We need to inspect the **staging area**.

## Staging area 🔴 🟢

We need to tell Git which updated/new/deleted files we want to include in our next commit.

We do this by promoting these updates/new/deleted files to the **staging area**.

🔑 **Staging area** is the space to prepare (stage) the changes that will be in the next commit.

Anything we put into the staging area we're saying:

> "Ok, which updated/new/deleted files would you like to put into your next snapshot?"
>
> "I'd like to take a snapshot of the updated `lasagne.html` file in the next commit"
>
> "OK cool, anything you'd like to put in your next commit, please put it into the staging area"

In order to do this, we store the updated/new/deleted files in the staging area.


## `git status`

Use a CLI command to double check the state of your staging area and your working directory

🖊️ Write down what you think `git status` is doing.


🎯 Goal: we need to stage the changes to `lasagne.html`.
Or, in other words, we need to add `lasagne.html` to the staging area.

## `git add`

We can run `git add` and the name of the file to add the changes we want to stage.

Now run `git status` again.

We now need to store this change in the working directory.
What do you see this time?



Now it's time to commit the change.
Research the command for doing a git commit.



