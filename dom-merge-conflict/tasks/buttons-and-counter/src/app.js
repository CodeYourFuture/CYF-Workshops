//increments the number in a node's text
import { Header } from "./header.js";
import { main } from "./main.js";
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}


  body.appendChild(Header());

  
  body.appendChild(main);

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
``