# Staging changes


🎯 Goal: stage changes in our working directory. 

## Updating the working tree

So, given our **working directory**, **timeline** - we might be asking:

> **How do we actually take a snapshot of our current work**
>
> Or in other words, **how do we create a commit?**

Let's make a change to the current working directory.

Open up this project in VSCode (if you've not done so already)
Find a problem with the `lasagne.html` source code and try to fix it in the file editor.

## Current mental model 🧠

In our current mental model we've discussed...

- Working tree
- Commit timeline

And we're trying to take a snapshot of our working tree at the moment.

We're missing one final area in our mental model.
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

Let's start with a command `git status`.

🖊️ Write down what you think `git status` is doing.

ℹ️ You can run the command `git status --help` in order to work this out.
👓 Look carefully at the output from this command.
❓ What do you think it is telling you?

🎯 Goal: we need to stage `lasagne.html`. 
Or, in other words, we need to add `lasagne.html` to the staging area.

## `git add`

We can use the `git add` command to stage changes to a file.
Now run `git status` again.

We now need to store this change in the working directory.
What do you see this time?

You should hopefully see something like this:

![image](./assets/git-status-after.png)

Now it's time to commit the change.
Research the command for doing a git commit.



