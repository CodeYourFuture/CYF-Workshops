

## Part 1 -  📸 Creating a commit

In this workshop, you'll learn the following: 

- how to make local changes in VSCode
- how to stage changes
- how to commit changes


In this workshop, you'll learn how to create a commit on your local machine.
At the same time, you'll start to develop an understanding of how Git works.

## Recap activity

### Pairs

### ⏲️ ( 15 mins )


Let's recap some of the things from earlier in the week.

Visit the following repository on Github: https://github.com/CodeYourFuture/cyf-demo-repo

You'll need to answer the following questions:


a) How many commits are there in this project?  
b) Who committed on Oct 31, 2020?  
c) What changes did Illictonion do in the commit titled "Revert changes accidentally pushed in the past"?  
d) How many files were added in the first commit? What were the names of the files?  
e) What is the hash for the first commit in the history?  

In your pair, discuss briefly:

- what is a commit ?
- why do we store repositories on Github ?
- what is VSCode used for ?


## 🍴 Recap - Creating a fork

### Do this section in pairs
### ⏲️ ( 10 mins )

You can use the guidelines from the prep section of this week to help you create a fork.

1. On one person's computer, create a fork of the following repo: https://github.com/CodeYourFuture/cyf-demo-repo
2. 📝 Double-check the URL of your forked repo. How can you tell the fork was successfully created?


## Recap - Cloning a repository

### Do this section in pairs
### ⏲️ ( 10 mins )

In this section, you'll need to clone a remote repository from Github on to your local machine.

ℹ️ You can use the prep section from this week to help you create a fork.

### 📋 Check your understanding

Before continuing, try answering the following:

❓ what is the difference between a **fork** and a **clone**.

Remember to check your answer before continuing.



1. Get a local copy of a repository on your local machine.
2. Open this local repository using VSCode.
3. Use `pwd` in your terminal to check you're in the right place.

 
## Recap - 🌳 creating a branch


In this section, you'll need to create a branch so that your git timeline looks like this:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   commit
   branch  "week-1-coursework"
```


## Creating a commit

We have the following goal in this section:

> 🎯 Goal: Make some **local** changes and create a **local commit**.


You'll need to carefully follow through the instructions in this task.


### Do this section in pairs 
### ⏲️ ( 25 mins )



Our Git timeline starts off with some commits like this ( there will be more than 3 commits in the actual history ):

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit 
   commit
   commit
   branch "week-1-coursework"
```

We want to figure out to make local changes and then commit them so our timeline ends up looking like this:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   branch "week-1-coursework"
```

where the most recent commit contains our recent changes.

To create a commit, we're going to step through the following process:

1. Make a change to a file
2. View the local changes
2. Stage the changes
3. Creating the commit


### 🗄️ 1. Make a change to a file

1. Open up your local github repo `cyf-demo-repo` to 
2. Go to the Explorer section of VSCode
3. Locate `file.txt` and edit the file with the answer to the questions.
4. Remember to save the changes to `file.txt`.

Tip: You can use CMD + S to save changes to a file in VSCode.


### 🔬 2. View the local changes


We want to view the changes we've just made to our working directory.

1. Go to the **Source Control** tab in VSCode.

![vscode-sidebar-source-control](vscode-sidebar-source-control.png)

2. Go to the Changes section and look at the changes for the file.
3. Try editing the file again in the Explorer tab and check to see the update is visible in the Source Control panel


### 🟢 3. Stage the changes

We need to tell Git which changes we want to be part of our next commit. 

We do this by **staging our changes**.


1. Go to the file `README.md` and click on the **+**.

👓 Notice what happens when you carry out step 1.

Explain what you think will happen if you don't stage anything in your working directory.

2. View the **Staged Changes** area in your **Source Control** panel.


### 📸 4. Create the commit

Once we've staged changes, then we can **commit** these changes.

📝 Check the number of commits you have locally. They should still be the same as before.

1. Enter a commit message describing briefly what you did in your commit.
2. Click Commit to create the Git commit.

📝  Now re-check the number of commits you have locally.

### When you're finished...

> ❗ Once you've completed this **commit**, you can swap roles in your pair.
> Choose another file and then go through the steps in [Creating a commit section](#creating-a-commit)


--- 

### Take a break... 🍫

---

## Part 2

### 🫸 Pushing (15 mins)

After committing your work locally, you'll have a local branch that looks like this

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   branch "week-1-coursework"
   commit
   commit
```


📋 Double-check you've been committing to your branch and not your `main` branch. 



However, our fork has the following:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
```



In other words, we've not added our local branch on to Github.

To do this, we must **push** our branch on to Github.


**push** means adding local work to a remote Github repository.

Figure out how to **push** your local branch to the Github repository.







