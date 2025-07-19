import { createHeader } from "../src/header";
import { createMain } from "../src/main";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  createHeader(body);

  createMain(body);

  const button = body.querySelector("#increment");
  const buttonDecrement = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });
  buttonDecrement.addEventListener("click", () => {
    decrement(counter);
  });
  
  return body;
}
