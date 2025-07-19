export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Number Counter</h1>
    <p>A simple counter. Press increment or decrement to change the count.</p>
  `;
  return header;
}