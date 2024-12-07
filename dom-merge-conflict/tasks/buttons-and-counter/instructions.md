# Buttons and Counter

This app currently features a button that increments a counter.

## Task for Person 1

Create and switch to a new branch named `split-app-components`:

```
git switch -c split-app-components
```

Split the header, main into separate components. You should end up with an `app.js` file, a `header.js` file, and a `main.js` file in your `src` directory.

## Task for Person 2

Create and switch to a new branch named `add-decrement-button`:

```
git switch -c add-decrement-button
```

Unskip the tests that describe the decrement button, then in the app add the new decrement button. Make sure to update the description of the app in the header.

// ________________________________________SOLUTION__________________________________________________________________

#    Task for Person 2: Add Decrement Button
Unskip the Decrement Tests:
In your test file (app.test.js), remove the .skip from the decrement button tests:

describe("decrement button", () => {  
  test("pressing Decrement decreases the counter", () => {  
    const button = getByRole(container, "button", {  
      name: "Decrement",  
    });  
    button.click();  
    button.click();  
    button.click();  

    expect(getByTestId(container, "counter")).toHaveTextContent(/^-3$/);  
  });  

  test("contains description paragraph with mention of 'decrement' in header", () => {  
    expect(  
      container.querySelector("header").querySelector("p")  
    ).toHaveTextContent(/decrement/i);  
  });  
});  

#   Implement Decrement Functionality:

The decrement functionality has already been implemented in the main.js file above. It decreases the counter when the "Decrement" button is clicked and prevents the counter from going below zero.

#   Final Steps
Run Your Tests:
After making these changes, run your tests to ensure everything works correctly:

bash
npm test 

#   Commit Your Changes:
Make sure to commit your changes to the respective branches:

bash
git add .  
git commit -m "Split app into header and main components; added decrement functionality"  


_______________________________________SOLUTION FOR PERSON 1_____________________________________________

#       Task for Person 1: Split App Components

Create Separate Component Files:

In your src directory, create two new files: header.js and main.js.
header.js:

javascript
export function Header() {  
  const header = document.createElement("header");  
  header.innerHTML = `  
    <h1>Number Counter</h1>  
    <p>A simple counter. Press increment to increase the count by one.</p>  
  `;  
  return header;  
}  
main.js:

javascript
import { increment } from './increment'; // Assuming increment function is in increment.js  

export function Main() {  
  const main = document.createElement("main");  
  main.innerHTML = `  
    <p id="counter" data-testid="counter">0</p>  
    <button id="increment">Increment</button>  
    <button id="decrement">Decrement</button>  
  `;  
  const buttonIncrement = main.querySelector("#increment");  
  const buttonDecrement = main.querySelector("#decrement");  
  const counter = main.querySelector("#counter");  

  buttonIncrement.addEventListener("click", () => increment(counter));  
  buttonDecrement.addEventListener("click", () => {  
    let current = Number(counter.textContent);  
    counter.textContent = current > 0 ? current - 1 : 0; // Prevent negative counts  
  });  

  return main;  
}  
Modify app.js:
Update your app.js to use the new components:

# app.js:

javascript
import { Header } from './header';  
import { Main } from './main';  

export function App() {  
  const body = document.createElement("body");  
  body.appendChild(Header());  
  body.appendChild(Main());  
  return body;  
}  