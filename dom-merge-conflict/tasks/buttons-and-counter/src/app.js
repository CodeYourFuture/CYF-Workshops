//increments the number in a node's text
import { Header } from "./header";
import { Main } from "./main";
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");
  body.appendChild(Header);
  body.appendChild(Main);
  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
