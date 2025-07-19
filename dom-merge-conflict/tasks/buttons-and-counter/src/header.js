function createHeader(body) {
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count by one.</p>`;
    body.appendChild(header);
}

