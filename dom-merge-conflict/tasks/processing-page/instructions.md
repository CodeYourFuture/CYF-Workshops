# Processing Page

This component currently features a processing page which changes after the completion of some promises.
Below you can see how the functions that return promises depend on each other. "→" means that the result of the previous promise is passed into the next function:

```
verifyServersideKey → verifyLocalKey
```

```
verifyBrowser → verifyVersion
```

```
verifyStableConnection
```

## Task for Person 1

Create and switch to a new branch named `add-progress-bar`:

```
git switch -c add-progress-bar
```

Unskip the tests describing the progress bar. Then implement a progress bar underneath the current message that increments its value for each promise resolved.

## Task for Person 2

Create and switch to a new branch named `change-promise-logic`:

```
git switch -c change-promise-logic
```

Unskip the tests describing promises running concurrently. Update the component so that the operations that are independent of each other run concurrently.
