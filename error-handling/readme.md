# Error Handling

## Learning Objectives

```objectives
- [ ] Give examples of good and bad error messages
- [ ] Explain what makes an error message helpful
```

## Understanding What Went Wrong

We have already seen examples of developer questions which can help us fix problems in our code:

1. What I _did_
2. What I _expected_
3. What actually _happened_

The problem is that figuring out what happened can be really tricky if the developer writing the code doesn't do a good job of **error handling**. In this workshop we're going to discuss error messages, why they are important and what makes some more helpful than others.

What makes an error message "good" depends on who it is intended for. For example, the runtime errors you may have seen while working through the exercises are great for developers while they're working on the code but they aren't very useful for the end user looking at an app on their phone. Knowing the most appropriate way to communicate problems is a key skill for a developer.

### Setup

- **Trainees**: Go to the `error-handling` folder in the [Workshops repo](https://github.com/CodeYourFuture/CYF-Workshops/), navigate to the `webpage` folder and open `index.html` in a browser.
- **Trainees**: Work in groups of 2 or 3. 
- **Trainees**: Nominate a member of the group to take notes.
- **Volunteers**: Nominate someone to facilitate the group discussion. This could be a volunteer or a trainee.

<!--{{<note type="activity" title="Evaluating Error Messages, 15m" >}}-->

Open your web browser and take a look at the web page you just opened. You should see a text box with five buttons below it. When you type a message and press any of the buttons it should appear below the box. Try it out by typing "hello world" and see what happens. 

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

## Supporting the User

We have seen that communicating what went wrong is really important when building an application. Giving feedback to the user is useful, but how we give that feedback is important. We could improve the user experience even more by helping them avoid the problem altogether!

<!--{{<note type="activity" title="Improving Our Error Messages, 25m" >}}-->

Read [this article](https://piccalil.li/blog/how-to-write-error-messages-that-actually-help-users-rather-than-frustrate-them/) on writing helpful error messages. Think about the error messages we have seen so far - do they align with the suggestions made here?

It would be even better if we never needed to show our users any error messages, but that won't happen if we aren't clear about what we need them to do. Take another look at the application from the first part of this workshop and answer these questions:

1. What information is missing?
2. How can we let the user know what the requirements are before they start typing?

<!--{{</note>}}-->

