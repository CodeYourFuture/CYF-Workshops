//increments the number in a node's text
import { Header } from "./header.js";
import { main } from "./main.js";
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}


  body.appendChild(Header());

  
  body.appendChild(main);

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
``