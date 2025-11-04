# Error Handling

## Learning Objectives

```objectives
- [ ] Give examples of good and bad error messages
- [ ] Identify appropriate points in code to check for errors
```

## Understanding What Went Wrong

We have already seen examples of developer questions which can help us fix problems in our code:

1. What I _did_
2. What I _expected_
3. What actually _happened_

The problem is that figuring out what happened can be really tricky if the developer doesn't do a good job of **error handling**. In this workshop we're going to discuss error messages, why they are important and what makes some more helpful than others.

What makes an error message "good" depends on who it is intended for. For example, the runtime errors you may have seen while working through the exercises are great for developers while they're working on the code but they aren't very useful for the end user looking at an app on their phone. Knowing the most appropriate way to communicate problems is a key skill for a developer.

### Setup

- **Trainees**: Go to the `error-handling` folder in the [Workshops repo](https://github.com/CodeYourFuture/CYF-Workshops/), navigate to the `webpage` folder and open `index.html` in a browser.
- **Trainees**: Work in groups of 2 or 3. 
- **Trainees**: Nominate a member of the group to take notes.
- **Volunteers**: Nominate someone to facilitate the group discussion. This could be a volunteer or a trainee.

<!--{{<note type="activity" title="Evaluating Error Messages, 15m" >}}-->

Open your web browser and take a look at the web page you just opened. You should see a text box with five buttons below it. When you type a message it should appear below the box. Try it out by typing "hello world" and see what happens. 

The problem we have is that none of the buttons seem to be working! They all have the same problem but they aren't all telling us the same thing. We could probably open `script.js` and easily figure out where the problem is, but this won't be an option for the end users of our code.

In your groups, **without looking at the code**, answer the following questions for each button:

1. Can you find where the error message is being displayed? (Hint: there may not always be an error message)
2. Can you figure out what the problem is based on what the message is telling you?
3. Does the message tell you how to fix the problem?
4. Is the message more useful for a developer or a user?

<!--{{</note>}}-->
  
<!--{{<note type="activity" title="Class Discussion, 10m" >}}-->

Come back together to compare notes. As a group try to answer these questions:

1. Which buttons gave useful error messages? Which buttons weren't helpful?
2. Which button gave the clearest error message?
3. Which features of the messages were particularly useful for **developers** and which features were useful for **users**?
4. How could the messages be further improved for users?

<!--{{</note>}}-->

## Letting the User Know About Problems

Now we have seen what makes a good error message, lets try writing some of our own. 

### Setup

- **Trainees**: Navigate to `error-handling/bank` in VSCode to find the exercises.
- **Trainees**: Split into pairs. 

<!--{{<note type="activity" title="Writing Error Messages, 30m" >}}-->

Each of the exercises has a problem with the code. Some will throw an error when you run them, others will fail silently. We could just print the error message, but we want to give the user more information and (hopefully) advice on how to solve the problem. In your pairs, for each exercise:

1. Run the code to see the error message (if there is one).
2. Identify where the problem is and what is causing it. **You don't need to fix the bug!**
3. Add a `console.log()` on the line **before** the error to explain what the problem is. Refer to `script.js` from the earlier exercise for examples of how you can do this. For example, instead of just printing an error message we would expect to see something like:

```sh
Error: variableName is null

# JavaScript error message
#   Stack trace line 1
#   Stack trace line 2
#   ...

```

<!--{{</note>}}-->

