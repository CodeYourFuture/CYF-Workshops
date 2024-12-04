
//increments the number in a node's text
function increment(node) {
    let current = node.textContent;
    node.textContent = Number(current) + 1;
}

const main = document.createElement("main");
main.innerHTML = `
      <p id="counter" data-testid="counter">0</p>
      <button id="increment">Increment</button>
  `;

const button = main.querySelector("#increment");
const counter = main.querySelector("#counter");
button.addEventListener("click", () => {
    increment(counter);
});


export default main;
