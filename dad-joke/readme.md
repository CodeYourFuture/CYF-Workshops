# Joke Fetcher App

This simple app fetches jokes from an API and displays them. Here are some ways we could improve it:

## Acceptance criteria

> 1. Given a Joke API
>    When the page first loads
>    Then a random joke will be displayed on the page

> 2. Given a joke has already been fetched and displayed
>    When the user clicks the "Get New Joke" button
>    Then a new random joke will be fetched and replace the existing one

> 3. Given there is a network connectivity issue
>    When the user clicks the "Get Joke" button
>    Then an error message will display instead of a joke

## 🐛 Debug

❗ Commit after completing each task ❗

1. Separate code into separate files - HTML, JS, CSS
2. Fix functionality for acceptance criterion 1 only

Navigator:

- Describe out loud the current behaviour in the user interface
- Describe what you should expect to see given the acceptance criterion
- Step through the code to make sense of where the bug is coming from

3. Fix functionality for acceptance criterion 2 only

Navigator:

- Describe out loud the current behaviour in the user interface
- Describe what you should expect to see given the acceptance criterion
- Step through the code to make sense of where the bug is coming from

4. Check all acceptance criteria are working ( including 3 )
5. Add a loading indicator that displays until the joke is fetched

## Refactor 🧹

1. Refactor `getJokes` to use async/await

## Add Styling

1. Add some CSS styling to a style.css file to make the app look nicer
1. Style the button, heading, and joke container
1. Add transitions/animations for loading indicator if time
