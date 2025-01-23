# UI Polish

In this workshop we will take our existing projects and polish them to a higher standard. We will use Lighthouse to evaluate our work and make improvements. We will apply some basic design principles to bring a professional look to our work. (We can talk about polishing code in another workshop.)

You can do any or all of the steps in this workshop before you arrive, as well.

## Learning Objectives

```objectives
- [ ] Evaluate your own front end
- [ ] Identify four simple changes to improve a front end
- [ ] Implement four simple changes to polish a front end
- [ ] Evaluate someone else's front end
```

## Requirements

This workshop is all about small changes that make a big difference. We will not be adding many large new features. We will be making small changes to the front end to make it look and feel more professional. By the end of this workshop, your project should look like a professional website, and you should have internalised some habits of highly effective developers.

We will make these changes in a structured way. We will use Lighthouse to evaluate our work and identify areas for improvement. We will identify a few simple changes to make to our front end. We will then implement these changes and re-evaluate our work.

🍅 We'll do this in five [pomodoros](https://pomofocus.io/) and you will need about three hours in total. Please take breaks!

## Prep

Before you begin your changes, make a new branch and name it `polish-workshop`. Do all your work in here, so you can easily swap back and forth to see your improvements. Make sure to commit and push to your branch as you work, because at the end you will need to share your changes with a colleague.

## 1. 🧪 Lighthouse, 4 green lights

#### ✅ Checklist

- [ ] Accessibility score is 100
- [ ] Performance score is over 90
- [ ] SEO score is 100
- [ ] Best Practices score is 100

Start with Lighthouse. It's your best friend when building a quality UI. Of course it is possible to build a good front end that doesn't score well on Lighthouse, and a [bad front end that scores perfectly](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/), but use your brain, please.

<!--{{<note type="activity" title="Audit your design 🍅">}} -->

### Run Lighthouse and revise until you get four green lights

1. Inspect your page and go to the Lighthouse tab
1. Check only the Accessibility tab, and hit Analyze Page Load
1. Fix any accessibility issues, follow the links in the report to help you
1. Once you have a 100 Accessibility score, check only the Performance tab, and hit Analyze Page Load, and so on, until the timer runs out

<!--{{</note>}}-->

### ⚠️ Note: Size your images correctly

Lighthouse should now pick up images with popped aspect ratios. If you have any images that are not sized correctly, fix them. Compress your images and deliver appropriate sizes to appropriate devices. Janky looking pictures make you look amateurish. Lazy load any images [below the fold](https://web.dev/lazy-loading-best-practices/). You can do this with an attribute or a library.

### 🎨 2. Fonts, colours, and spacing

#### ✅ Checklist

- [ ] Fonts are consistent, drawn from a [limited, designed scale](https://typescale.com/) (Read more about type scales)[https://designcode.io/typographic-scales]
- [ ] Colours are consistent, drawn from a [limited, designed palette](https://coolors.co/palettes/trending)
- [ ] There are no contrast issues (Lighthouse should have caught this, but run the [Accessibility Insights](https://accessibilityinsights.io/) to check again).
- [ ] Spacing is consistent, drawn from a [limited, designed scale](https://uxplanet.org/spacing-guide-for-designers-5bd140afe52a)

It may be helpful to know the [user agent](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css) type scale is roughly 10px, 12px, 16px, 18px, 24px, 32px.

Get out of your own way a bit here. If you are only looking for Cloud roles or something without any visual interface development, then use [Tailwind](https://tailwindcss.com/), which has all this pre-set for you and will look basically fine.

What you must do is make your UI look _intentional_. It's fine to be experimental, it's fine to be basic, it's fine to use a design system, but it's not fine to have a UI that looks like you're not in control of it.

<!--{{<note type="activity" title="Rationalise your design 🍅">}}-->

## Rationalise

1. Pick a colour palette (5m)
1. Define your palette as variables in your CSS (5m)
1. Work through your entire UI and replace all colour values with variables (10m)
1. Link your colour palette in your README (5m)

If you already have a colour palette, do your type or spacing.

<!--{{</note>}}-->

### 📐 3. Gutters

Hey, have you centered everything? 😱 Does your layout look like a messy triangle? 💩 Are elements touching the edges of the viewport by mistake? If you run your finger down the left edge of your components, are they lined up or is it all a jagged game of Jenga? 🍻🥴 Do you have any kind of grid in your design or is it all just sort of individual components floating around, plonked on the page? 🫠

- [ ] Gutters are consistent, drawn from a [limited, designed scale](https://type-scale.com/)
- [ ] Components are laid on a grid, with consistent gutters

<!--{{<note type="activity" title="Line up your components 🍅">}}-->

## Line up your components

1. Take a piece of paper and sketch your page layout as it is now
1. Take a new piece of paper and sketch your page layout as you want it to be
1. Draw a grid over your sketch 
1. Write that grid in your CSS and align your major components to it
1. If you already have an aligned grid, polish your type, spacing, or readme.

<!--{{</note>}}-->

### 4. Spellcheck S.P.A.G

- [ ] There are no spelling errors in the interface or README
- [ ] Long form text is grammatically correct and I have checked this with Grammarly
- [ ] LOREM IPSUM is not bunged all over the place

Do this last, always, as you will only add more typos in if you do not. We are all only human beans.

There's nothing worse than claiming to have great attention to detail and then linking a website called _My Protfolio_.

<!--{{<note type="exercise" title="Typo Tomato 🍅">}}-->

1. Install [Grammarly Desktop](https://www.grammarly.com/desktop) and run it on your front end
1. Install a [spellchecker in your VSCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
1. Run these tools and fix any errors you find.

<!--{{</note>}}-->

## 5. Get a review, give a review

You've been working largely solo today, but now you will need a partner. Split into pairs and swap your sites. The great thing about reviewing someone else's work is that it gives you some insight into how your own work may be viewed from the outside.

<!--{{<note type="activity" title="Review 🍅">}}-->

1. Open a pull request from your branch to your trunk (main)
1. In your PR, write what you've done so far and what you plan to work on later. Ask for some specific advice on something you're not sure about.
1. Now go to your partner's PR.
1. Read the PR message to understand the changes your partner has made.
1. Read the README to understand the goal of the app.
1. Run Lighthouse and note any errors on the code review interface
1. Use Grammarly to examine the spelling and grammar, is it all correct? Note any errors on the code review interface.
1. Make any more comments and respond to the PR message.

<!-- {{</note>}}-->

## Acceptance Criteria

- My interface looks like I meant to do it
- I have run Lighthouse and I have 4 greens
- My README actually explains my product
- Someone else has reviewed my interface and agrees with my evaluation

## Stretch

### 5. PWA

- [ ] PWA is green

If you have already polished your front end to a high standard, use this time to develop a service worker.

You can either hand-write a service worker or use something like [workbox](https://developer.chrome.com/docs/workbox/). Most people use workbox. You don't need to do anything fancy here, just provide an offline page and a manifest.json file. You can learn more about PWAs on web.dev: [Learn PWA](https://web.dev/progressive-web-apps/).

If you need to make a set of icons, which you probably do for your serviceworker manifest, explore the many online services that create these sets. There are also CLI programmes to do this. It's a whole tiny world. I like the [realfavicongenerator](https://realfavicongenerator.net/).
