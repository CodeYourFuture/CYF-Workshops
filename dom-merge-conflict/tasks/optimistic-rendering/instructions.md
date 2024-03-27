# Optimistic rendering

This component is currently a like button, that updates once the promise from updateVote() is resolved and gives an error when it is rejected.

## Task for Person 1

Create and switch to a new branch named `render-like-optimistically`:

```
git switch -c render-like-optimistically
```

Render the like optimistically, that is change the component to a liked state before the promise is resolved. If the promise rejects, then render the component back to its old state. Unskip the tests that describe optimistic rendering to test your implementation.

## Task for Person 2

Create and switch to a new branch named `change-button-appearance`:

```
git switch -c change-button-appearance
```

Change the button content to an image that has a source of "/media/like". When liked, the component should render the image that has a source of "/media/liked" Be sure to add appropriate alt text. Unskip the tests that describe the like as a image to test your implementation.
