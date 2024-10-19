# Goblin Breakdown

Use AI to break down coding problems into smaller pieces.

<!--{{<note type="tip" title="Prompt">}}--> If Goblin is offline, use any LLM with the pre-prompt "Break down this task into single responsibility functions". <!--{{</note>}}-->

## Learning Objectives

```objectives
- [ ] Use AI to break down a coding problem
- [ ] Write comments to structure small single responsibility functions
- [ ] Produce a planned solution to a coding problem
```

## Requirements

We're practising breaking down our problems again. It must be Saturday!

This time we're going to use AI to help us. [Goblin](https://goblin.tools) is a small, clever integration with ChatGPT that makes magic todo lists. We're going to use it to break down our problem and plan our solution.

### 🧰 1. Setup

You should already be set up but just in case, you need to open [the Goblin workshop](https://github.com/CodeYourFuture/CYF-Workshops/tree/70eb059959269ac4377fcf229f776cea0771655a/goblin-breakdown) in VS Code. Set a whole class [timer for 5 minutes](https://www.google.com/search?q=timer+for+5+minutes).

<!--{{<note type="activity" title="Getting Set Up">}}-->

1.  Fork the [CYF-Workshops repo](https://github.com/CodeYourFuture/CYF-Workshops) to your own GitHub account if you have not already.
1.  Clone the repository to your machine.
1.  Open in VS Code and go to the `goblin-breakdown` folder.
1.  Look at the `contact` folder. It contains a file called `index.js`. This is where you will write your code. Look at `data.json` to see an example of the data returned from the API.

<!--{{</note>}}-->

## 👣 2. Break down coding problems

Let's try breaking down a coding problem. Let's do a sample problem together. Set a whole [class timer for 10 minutes](https://www.google.com/search?q=10+minute+timer).

<!--{{<note type="activity" title="Planning a Solution 10m">}}-->

> Format a UK address and UK phone number from a JSON object and show it as HTML on the page

1. Paste the above problem into Goblin and press the 🪄 wand button.
1. Goblin will give you some steps. In the `contact` folder, paste each of the steps into `index.js` as comments. There are some samples given but your Goblin might be a bit different. Feel free to delete the existing examples.
1. You likely have around five steps. Under each comment, write the name of the function you will write to achieve the step. Two are given as an example. Don't write the function out, just the name and leave the function empty.
1. Now you have planned your code! _If you have time_, start writing the functions.

<!--{{</note>}}-->

<!--{{<note type="tip" title="Sample Solution">}}--> There isn't a "right answer" to this workshop. If you want to see a basic solution, look in the `contact` folder for the file `completed.js`. <!--{{</note>}}-->

### 🧠 3. How can you use this?

Set a whole [class timer for 10 minutes](https://www.google.com/search?q=15+minute+timer).

<!--{{<note type="activity" title="Reflect and Discuss 10m">}}-->

Reflect on this process of breaking down the problem and planning your solution. Discuss with your pair or group.

- How can you use this process in your own work?
- What are the benefits of breaking down a problem?
- What are the risks of having an AI break down a problem? How can you mitigate those risks?
- What are the benefits of planning your solution?
- Why does CYF want to make you write such small functions?
- How could doing these steps make writing your code easier?
<!--{{</note>}}-->

## Acceptance Criteria

- I have used AI to produce a step-by-step plan for my solution
- I have written comments to structure my code
- I have produced a planned solution to a coding problem
- I have reflected on this process and discussed it with my pair or group
