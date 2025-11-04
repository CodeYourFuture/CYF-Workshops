const textarea = document.querySelector("#submission");
const silentFailButton = document.querySelector("#silent-fail-button");
const consoleButton = document.querySelector("#console-button");
const poorAlertButton = document.querySelector("#poor-alert-button");
const devAlertButton = document.querySelector("#dev-alert-button");
const betterAlertButton = document.querySelector("#better-alert-button");
const outputArea = document.querySelector("#output");

const validateMessage = (message) => {
    return message.length >= 250;
}

const appendMessage = (message) => {
    outputArea.textContent = message;
}

silentFailButton.addEventListener("click", () => {
    const message = textarea.value;
    if (validateMessage(message)) {
        appendMessage(message)
    }
})

consoleButton.addEventListener("click", () => {
    const message = textarea.value;
    if (validateMessage(message)) {
        appendMessage(message)
    } else {
        console.error("Invalid message - check failed at script.js:10")
    }
})

poorAlertButton.addEventListener("click", () => {
    const message = textarea.value;
    if (validateMessage(message)) {
        appendMessage(message)
    } else {
        alert("Something went wrong")
    }
})

devAlertButton.addEventListener("click", () => {
    const message = textarea.value;
    if (validateMessage(message)) {
        appendMessage(message)
    } else {
        alert("Failed with error code 03986")
    }
})

betterAlertButton.addEventListener("click", () => {
    const message = textarea.value;
    console.log(message);    
    if (validateMessage(message)) {
        appendMessage(message)
    } else {
        alert(`Message must be at least 250 characters long - yours was ${message.length}. Please try again`)
    }
})