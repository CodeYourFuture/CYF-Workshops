const header = require("./header.js");
const main = require("./main.js");

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
