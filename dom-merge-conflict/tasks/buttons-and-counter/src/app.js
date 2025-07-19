import { Header } from "./header.js";
import { Main } from "./main.js";

export function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App(node) {
  const body = document.createElement("body");

  body.appendChild(Header());
   body.appendChild(Main());

  const button = body.querySelector("#increment");
  const debutton = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");

  button.addEventListener("click", () => {
    increment(counter);
  });

  debutton.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
