function createMain(body) {
    const main = document.createElement("main");
    main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>`;
    body.appendChild(main);
}


