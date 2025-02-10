# Get Forms

This workshop is about writing forms in HTML.

Note: this workshop is deployed to Netlify at [https://cyf-workshop.netlify.app/get-forms](https://cyf-workshop.netlify.app/get-forms) and branch previews are turned on. Any PRs opened to `main` will be deployed automatically and can be looked at via the bot link on that PR.

## Learning Objectives

```objectives
- [ ] Interpret requirements and express them as HTML
- [ ] Interact with the GitHub Search API
- [ ] Validate user data
- [ ] Test a form against acceptance criteria
- [ ] Report on the results of testing on a PR
- [ ] Make changes to code based on feedback
```

## Requirements

Before you start, make sure you've done your prep work on forms and worked through some of the examples in the [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) section of MDN.

Today we're going to build a form that interacts with GitHub Search. It's a bit unusual for a form as we are writing a [GET method](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data#on_the_client_side_defining_how_to_send_the_data), where the form requests, or _gets_ data, instead of a POST method, which sends data.

Next, we're going to swap our forms with another group and test the form we made.

Last, we're going to make changes based on the test feedback. Because it's important that software works and that people can use it.

But first, everybody needs to be ready to participate.

### 🧰 1. Setup

<!--{{<note type="activity" title="Getting Set Up">}}>-->

1.  Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
1.  Fork this repository to your own GitHub account.
1.  Clone the repository to your machine.
1.  Checkout a new branch called `cohort/your-name`.
1.  Open get-forms/index.html in VS Code.
<!--{{</note>}}-->

## 📖 GitHub Search Project Briefing:

<details>
<summary>
Create a form so the user can search GitHub repositories based on specific criteria.
</summary>

### 👤 User Stories:

- As a user, I want to search on GitHub.
- As a user, I want to sort my results by stars, forks, or when last updated.
- As a user, I want to sort my search results in my preferred order, ascending or descending.

### ✅ Acceptance Criteria:

#### US1: Search Field

**Given** I am on the GitHub search form,
**When** I select the search field,
**Then** I should be able to type in my search query.

#### US2: Sorting Results

**Given** I am on the GitHub search form,
**When** I choose from options of stars, forks, and updated.
**Then** the results are sorted by stars, forks, or last updated.

#### US3: Options for Sort Order

**Given** I am on the GitHub search form,
**When** I choose a sort order
**Then** the results should be sorted in my preferred order, ascending or descending.

#### Overall Acceptance Criteria

**Given** I am on the GitHub search form,
**When** I run Lighthouse
**Then** the Accessibility score is 100.

</details>

### 2. 🧱 Build the form

<!--{{<note type="activity" title="Get results from GitHub">}}>-->

1.  Set a [timer for 45 minutes](https://www.google.com/search?q=timer+for+30+minutes).
2.  Work in pairs.
3.  Read the project briefing _carefully_.
4.  Look in the [resources section](#resources) for help with the elements you might need.
5.  Write your HTML in `get-forms/index.html`. Do as much as you can, leaving time to open your PR (10 or 15 minutes).
6.  Open a pull request to this repo with your work. Your PR will show up in the [list of PRs for this repo](https://github.com/CodeYourFuture/CYF-Workshops/pulls) and a deploy preview will be created and linked on your PR. Explore this.

<!--{{</note>}}-->

### 3. 🧪 Test the form

<!--{{<note type="activity" title="Test the form">}}>-->

1.  Set a [timer for 15 minutes](https://www.google.com/search?q=timer+for+30+minutes).
2.  Swap your form with another group by choosing the PR directly above yours [in the PR list](https://github.com/CodeYourFuture/CYF-Workshops/pulls). If you are at the top of the list, choose the PR at the bottom of your group!
3.  Test your colleague's form against the acceptance criteria.
4.  Comment on their pull request with what you have found.

<!--{{</note>}}-->

### 4. 🫠 Review and respond

<!--{{<note type="activity" title="Review the test results">}}>-->

1.  Set a [timer for 15 minutes](https://www.google.com/search?q=timer+for+30+minutes).
2.  Read the comments on your pull request.
3.  Make changes you need to make to your form to pass the acceptance criteria.
4.  Commit and push your changes to your branch; your pull request will update automatically.
5.  If your pair doesn't have changes, join a team that does and help them.

<!--{{</note>}}-->

## Resources

- [MDN: HTML forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: Search Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)
- [MDN: Radio Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
- [MDN: Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [MDN: Option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
- [MDN: Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
