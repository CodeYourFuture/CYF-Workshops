<!---
title='Devtools Day 1'
time='120'
facilitation=true
[objectives]
1="Inspect the DOM"
2="Identify the values of the design tokens in the CSS"
3="Alter the values of the CSS Variables using DevTools "
4="Select the Grid Badge in the Elements panel"
5="Use the Grid Editor to change layout"
6="Run a Lighthouse audit"
7="Identify and resolve the reported issues"
8="Inspect the Accessibility Tree and compare it to the DOM"
+++
-->

# Inspector Gadget

For this workshop you will need:

- [ ] Chrome with Devtools
- [ ] A [ChatGPT account](chat.openai.com/auth/login)

index.html

You've already used a little bit of Devtools in ITD when you used [Lighthouse](https://developer.chrome.com/docs/lighthouse/) to audit your code. But there's much much more! Devtools is an [entire IDE](https://developer.chrome.com/) running inside your browser and it has hundreds of ways to inspect, test, and develop your code.

<!--
{{<note type="tip" title="Explore">}} -->

Each browser has its own Devtools. Download Safari, Chrome Canary, and Firefox Developer Edition to explore the differences.

<!-- {{</note>}} -->

## Inspect the DOM

```objectives
- [ ] Inspect the DOM
- [ ] Identify the values of the design tokens in the CSS
- [ ] Alter the values of the CSS Variables using DevTools
```

<!--
{{<note type="exercise" title="Explore">}} -->

In groups of no more than five.

1.  Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
1.  Inspect the page with Devtools.
1.  _Write down_ the answers to these questions:

- What is the name of the font used on the page?
- What is the CSS variable that holds this value?
- What is the brand colour value?
- What variables hold [CSS length data type](https://developer.mozilla.org/en-US/docs/Web/CSS/length) values?

1. When the timer goes off, share your answers with the other groups. Paste them in a thread in Slack.
<!-- {{</note>}} -->

Fonts, colors, and spacing are often stored as CSS Variables, or custom properties. This allows them to be easily changed throughout a project by simply altering one value. Let's experiment with this.

<!--
{{<note type="exercise" title="Experiment">}} -->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. Inspect the CSS of the page with Devtools.
3. Find the CSS Variables (hint: they usually start with `--`, for example, `--paper`)
4. Try changing the values of these variables and see how it affects the page.
5. Some questions to answer. (Make a prediction about what you think will happen first, and then test it)

- What will happen when you change the _value_ of `--space` to `red`?
- What will happen when you click the value of `--finger` and press `up arrow` ten times?
- What will happen when you delete the _value_ of `--copy`

When the timer goes off, share your answers with the other groups.

<!-- {{</note>}} -->

## Grid Inspector

```objectives
- [ ] Select the Grid Badge in the Elements panel
- [ ] Use the Grid Editor to change layout
```

Next, let's see how the page layout is handled. Modern websites use the CSS Grid for layout.

<!--
{{<note type="exercise" title="Grid Editor">}} -->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2. With Devtools, locate a grid element on the page.
3. Activate the [Grid Badge](https://developer.chrome.com/docs/devtools/css/grid/) in the Elements panel.
4. Use the Grid Editor to try changing the layout.

<!-- {{</note>}} -->

### Lighthouse

```objectives
- [ ] Run a Lighthouse audit
- [ ] Identify and resolve the reported issues
```

It's important that software works and that people can use it. Lighthouse can help you write code correctly by pointing out your errors. But even better, it can _teach you_ to fix the errors.

<!--
{{<note type="exercise" title="Audit">}} -->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
1. Run a Lighthouse audit on the page.
1. Look at the results and identify the issue.
1. Now, how will you fix it? Click on the error. Lighthouse explains what is wrong and provides a link to a detailed explanation on why it's wrong, how serious it is, and how to fix it!
1. If you have time, fix the error, but in any case, once the timer goes off, share the link to the detailed explanation page with the other groups.

<!-- {{</note>}} -->

## Hover for more

```objectives
- [ ] Find the MDN docs links in the Styles panel
- [ ] Ask ChatGPT to explain the Devtools explanation
```

In fact Devtools is a great teacher. In the Styles panel, hover over any CSS property to get a quick definition of that property. Click 'Learn More' to go straight to the MDN page for that property.

If the explanation doesn't make sense to you, ask Chat GPT to explain it further.

<!--
{{<note type="exercise" title="Explore and Explain">}} -->

1. Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
1. Select `<main>` in the Elements panel
1. Hover over the ruleset attached to main in the Styles panel.
1. Copy the Devtools explanation and ask ChatGPT to explain it, like this:
<details><summary>Please explain this to me like I'm a beginner learning HTML and CSS.</summary>

> Determine a grid item's size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.

</details>

5. Share the explanation with the other groups.
<!-- {{</note>}} -->

## Many ways of interpreting the same thing

```objectives
- [ ] Find a different API using the same code
- [ ] Inspect the Accessibility Tree and compare it to the DOM
```

So we've explored the Elements panel, the Styles panel, and the Lighthouse panel. There are many many more panels, and they all expose a different way of interpreting, interacting with, or understanding the same code. Computer systems frequently do this. It's a mistake to think that the way you use a website is the only way it can be used. Bots, crawlers, screenreaders, integrations...there are many and various consumers of your code, so it's important to make sure you construct it properly.

For example, you have just looked in the Elements panel. This is not really your HTML, this is [the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), an API the browser builds using your HTML. The [DOM isn't the only API](https://developer.mozilla.org/en-US/docs/Web/API) it builds. Let's look at another one right now!

<!--
{{<note type="exercise" title="Inspect">}} -->

1. Set a [timer for 5 minutes](https://www.google.com/search?q=timer+for+5+minutes).
1. Find the [Accessibility Panel](https://developer.chrome.com/blog/full-accessibility-tree/) and check 'Enable full-page accessibility tree'
1. Now click the Access man button in the Elements Panel.
1. What is _Ignored_ in the Accessibility Tree that is present in the DOM?
1. When the timer goes off, share your answer with the other groups.
<!-- {{</note>}} -->

And that's it for today! We have covered a lot, but remember, as developers, we are lifelong learners. Always be curious and don't be afraid to explore new tools and concepts. Soon we'll dive even deeper into Devtools, so make sure to keep exploring.

## Stretch

1. Inspect web pages as you use the internet. Do this _all the time_! What font does Youtube use? What about [CSS Tricks](https://css-tricks.com/tag/devtools/)? [Hackernews](https://news.ycombinator.com/) is still using tables - what's wrong with this?

2. There are crash courses in Devtools all over [Youtube](https://www.youtube.com/watch?v=gTVpBbFWry8) and Udemy. Find a useful tip and share it in your class channel.
