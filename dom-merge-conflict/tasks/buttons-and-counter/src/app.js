import { createHeader } from "./header.js";
import { createMain } from "./main.js";

export function App() {
  const body = document.createElement("body");

  const header = createHeader();
  const main = createMain();

  body.appendChild(header);
  body.appendChild(main);

  return body;
}