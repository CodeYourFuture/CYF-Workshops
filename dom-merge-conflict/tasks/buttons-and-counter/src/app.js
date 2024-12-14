//increments the number in a node's text
import { header } from "./header";  
import { main } from "./main";

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");

  body.appendChild(header);
  body.appendChild(main);

  return body;
}
