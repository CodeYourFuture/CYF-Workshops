title='Git week 1 workshop'
time='120'
facilitation=true
[objectives]
1='save local changes to a repository in VSCode'
2='stage local changes'
3='commit changes to a local branch'
4='push local changes on to remote repository'
+++

## Part 1 -  📸 Git week 1 workshop


In this workshop, you'll learn how to create a commit on your local machine.
At the same time, you'll start to develop an understanding of how Git works.

## Recap activity

### Pairs

### ⏲️ ( 15 mins )


Let's recap some of the things from earlier in the week.

Visit the following repository on Github: https://github.com/CodeYourFuture/cyf-demo-repo

Answer the following questions:


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

Use the guidelines from the prep section of this week to create a fork.

1. On one person's computer, fork this repo: https://github.com/CodeYourFuture/cyf-demo-repo
2. 📝 Double-check the URL of your forked repo. How can you tell the fork was successfully created?


## Recap - Cloning a repository

### Do this section in pairs
### ⏲️ ( 10 mins )

Now clone a remote repository from Github onto your local machine.

Use the prep section from this week to help you create a fork.

### 📋 Check your understanding

Before continuing, try answering the following:

❓ what is the difference between a **fork** and a **clone**.

Remember to check your answer before continuing.



1. Get a local copy of a repository on your local machine.
2. Open this local repository using VSCode.
3. Use `pwd` in your terminal to check you're in the right place.

 
## Recap - 🌳 creating a branch


Next, create a branch so that your local git repository looks like this:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   commit
   branch  "week-1-workshop"
```


## New skill 🧰 - Creating a commit 📸


> 🎯 Goal: Make some **local** changes and create a **local commit** on our branch.


Follow these instructions carefully.


### Do this section in pairs 
### ⏲️ ( 25 mins )



Our Git timeline starts off with some commits like this:
```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   commit
   branch  "week-1-workshop"
```

We're going to figure out how to 

- make local changes and commit them to our branch "week-1-workshop",

so our history looks something like this:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   commit
   branch "week-1-workshop"
   commit
   commit
```

The most recent commits contain our most recent work.

Create a commit using these steps:

1. Make a change to a file
2. View the local changes
2. Stage the changes
3. Creating the commit


### 🗄️ 1. Make a change to a file

1. Open up your local repo `cyf-demo-repo`.
2. Go to the Explorer section of VSCode
3. Find `file.txt` and edit the file with the answer to the questions.
4. Remember to save the changes to `file.txt`.

Tip: You can use CMD + S to save changes to a file in VSCode.


### 🔬 2. View the local changes


We want to view the changes we've just made to our working directory.

1. Locate the **Source Control** tab in VSCode.

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

Once we've made the commit, then we can **commit** these changes.

📝 Check the number of commits you have locally. They should still be the same as before.

1. Enter a commit message describing briefly what you did in your commit.
2. Click Commit to create the Git commit.

📝  Now re-check the number of commits you have locally.

### When you're finished...

> ❗ Once you've completed this **commit**, swap roles in your pair.
> Choose another file and then go through the steps in [Creating a commit section](#creating-a-commit)



##  Take a break for 10 mins... 🍫


## Part 2

### 🫸 Pushing (15 mins)

After committing your work on your machine, you'll have a local branch that looks like this

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
   branch "week-1-workshop"
   commit
   commit
```


📋 Double-check you've been committing to your branch `week-1-workshop` branch and not your `main` branch. 


However, our remote fork only has a main branch:

```mermaid
---
title: cyf-demo-repo
---
gitGraph
   commit
   commit
```



In other words, we have _not_ added our local branch on to the remote fork on Github.

To do this, we must **push** our branch on to Github.


**push** means adding local work to a remote Github repository.


🔍 Figure out how to **push** your local branch to the Github repository using the Source Control interface in VSCode.







