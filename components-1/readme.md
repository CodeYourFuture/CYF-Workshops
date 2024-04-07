# First Components

Today we're going to think about components. We're going to build a page using a design system and we're going to collaborate on a feature branch workflow.

The overall mission is to compose "components" / groupings of HTML elements to re-build this web page: [CYF Components Workshop](https://cyf-workshop.netlify.app/components-1).

## Learning Objectives

```objectives
- [ ] Use a design system to build a component from a documented pattern
- [ ] Collaborate on a feature branch workflow to build a page
```

## Requirements

Before you start, make sure you've installed the [CYF Extension Pack](https://marketplace.visualstudio.com/items?itemName=CodeYourFuture.cyf-extension-pack) in VS Code.

```bash
npm install -g prettier
```

<!--{{<note type="activity" title="Set up your feature branch 15m">}}-->

### Set up your feature branches

Divide the class into three teams: header, footer, card. Use the [team generator](https://cyf-workshop.netlify.app/components-1/teams.html) to help you do this.

Set a whole class [timer for 10 minutes](https://www.google.com/search?q=10+minute+timer).

### Each team, choose a driver

1. Driver, **clone** [this repository](https://github.com/CodeYourFuture/CYF-Workshops/)
1. Driver, create and checkout a new branch for your team named like this: `feature/cohort-component`, where _cohort_ is your cohort name and _component_ is the component you're building, for example: `feature/nw6-header`

```bash
git switch --create feature/cohort-component
```

Now you're all set up to make changes to together.html.

<!--{{</note>}}-->

<!--{{<note type="activity" title="Find your docs 10m">}}-->

## Find your docs

Set a whole class [timer for 10 minutes](https://www.google.com/search?q=10+minute+timer).

Deployed from this repo is a [mini design system](https://cyf-workshop.netlify.app/components-1). This design system has several documented components: [card](https://cyf-workshop.netlify.app/components-1/docs/card), [header](https://cyf-workshop.netlify.app/components-1/docs/header), and [footer](https://cyf-workshop.netlify.app/components-1/docs/footer). Each component view has some sample code and some statements about the components.

Your mission is to find the docs for your component and read them.

<!--{{</note>}}-->

### Together separately

Set a whole class [timer for 30 minutes](https://www.google.com/search?q=30+minute+timer).

<!--{{<note type="activity" title="Parallel Development 30m">}}-->

Now **build** your component. Elect a new driver.

1. Find [together.html](https://cyf-workshop.netlify.app/components-1/together.html) in the /components-1 directory. Your mission is to complete this page.
1. In the correct portion of the page, make your changes to build your feature on together.html.
1. Driver, commit your changes to your feature branch.
1. Open a pull request from your branch to main, with your changes.
1. Remember, docs will help you.
1. Do the simplest thing that could possibly work to begin with. You can always update your PR with more changes.

```mermaid
gitGraph
    commit id: "start"
    branch feature/cohort-component
    commit id: "paste html from docs"
    commit id: "fill in the blanks"
    commit id: "lighthouse revisions"
    checkout main
    merge feature/cohort-component
```

<!--{{</note>}}-->

### Review and merge

Now we're going to review each other's work. If a mentor is available, they can be the driver for this part and you can actually merge your PRs. If not, please don't try to merge as you could make a mess of this shared repo.

**Note to mentor**: please revert together.html to the initial commit after you're done so the next class can use it. (Or if your group has time for it, you can merge on a fork instead.)

Set a whole class [timer for 30 minutes](https://www.google.com/search?q=30+minute+timer).

<!--{{<note type="activity" title="Review 30m">}}-->

1. Go to the [pull requests](https://github.com/CodeYourFuture/CYF-Workshops/pulls) for this repo.
1. Either individually or as a group, review each other's PRs.
1. Once you're all happy with the PR, merge it.
1. Did it work? Why/why not? Discuss.

<!--{{</note>}}-->

## Acceptance Criteria

- We have worked in three teams to build a page using a design system
- We have used a feature branch workflow to collaborate
- We have reviewed each team's PR
