

# 📸 Creating a commit

In this workshop, you'll learn the following: 

- how to make local changes in VSCode
- how to stage changes
- how to commit changes
- how to 

## Recap activity

### Pairs
### ⏲️ ( 15 mins )



To start you'll need to build up your own intuition of how we can create git commits and how we can then so first off you'll need to visit the following repository on Github and in groups answer the following question: 

a) How many commits are there in this project?
b) What is the title of the second commit?
c) What is the hash for the first commit in the history?

## 🍴 Creating a fork

### Pairs
### ⏲️ ( 15 mins )


- Create a **fork** of the Github repository
- Create a 

## Getting a local repository

### Pairs
### ⏲️ ( 15 mins )


- Get a local copy of a repository on your local machine. Open the files and folders of your copy on your local machine.


## Creating a commit

Pairs
⏲️ ( 20 mins )

We have the following goal in this section:

> 🎯 Goal: Make some **local** changes and create a **local commit**.


Our Git timeline starts off in this way:

```mermaid
---
title: Example Git diagram
---
gitGraph
   commit
   commit
```

We want to figure out to make local changes and then commit them so our timeline ends up looking like this:

```mermaid
---
title: Example Git diagram
---
gitGraph
   commit
   commit
   commit
```

where the most recent commit contains our recent changes.

To create a commit, we're going to step through the following process:

1. Make a change to a file
2. Stage the changes
3. Create the commit


### 🗄️ Changing a file


Go to your files and folders in the repository. Now answer the question in line 10 on the Github repository. Save the file.

Tip: You can use CMD + S to save changes to a file in VSCode.


### : Checking out the changes


We want to view the changes we've made to our working directory so we can start making a commit.


1. Go to the **Source Control** tab in VSCode.
2. Go to the Changes section and look at the changes for the file.
3. Try editing the file again in the Explorer tab and check to see the update is visible in the Source Control panel


### Staging changes


To create a commit, we need to tell Git the changes we want to include in the next commit.
So if we change a file, we need to **stage** this changed file.

Let's put the changed file into the **staging area**.

1. Go to the file `README.md` and click on the **+**.

Notice what happens when you carry out step 1.

2. View the Staged Changes area in your Source Control panel.

### 📸 Creating the commit


Once we've staged changes, then we can **commit** these changes.

📝 Check the number of commits you have locally. They should still be the same as before.

1. Enter a commit message describing briefly what you did in your commit.
2. Click Commit to create the Git commit.

📝  Now re-check the number of commits you have locally.



> ❗ Once you've completed this **commit**, you can swap roles in your pair.