// increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function updateCounter(counter, action) {
  let current = Number(counter.textContent);
  if (action === 'increment') {
    counter.textContent = current + 1;
  } else if (action === 'decrement') {
    counter.textContent = current - 1;
  }
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Number Counter</h1>
    <p>A simple counter. Press increment to increase or decrement to decrease the count.</p>
  `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
    <p id="counter" data-testid="counter">0</p>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
  `;
  body.appendChild(main);

  const incrementButton = body.querySelector("#increment");
  const decrementButton = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");

  incrementButton.addEventListener("click", () => {
    updateCounter(counter, 'increment');
  });
  decrementButton.addEventListener("click", () => {
    updateCounter(counter, 'decrement');
  });

  return body;
}
