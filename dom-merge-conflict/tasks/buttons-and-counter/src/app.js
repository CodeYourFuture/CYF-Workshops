//increments the number in a node's text

import { Header } from "./header.js";
import { Main } from "./main.js";

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");

  const header = Header()
  const main = Main();

  body.appendChild(header);
  body.appendChild(main);
  
  return body;
}
