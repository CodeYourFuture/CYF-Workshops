import header from './header';
import main from './main';

export function App() {
  const body = document.createElement("body");

  body.appendChild(header);

  body.appendChild(main);

  return body;
}
