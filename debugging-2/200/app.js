const form = document.getElementById("form");
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

function helpMe(field, element) {
  console.log(field, element);
  console.log(typeof element);
}

form.addEventListener("submit", (event) => {
  try {
    // If this doesn't appear in the console logs then it has never been called
    event.preventDefault();
    helpMe("form", form);
    helpMe("usernameElement", usernameElement);
    helpMe("passwordElement", passwordElement);

    const username = usernameElement.value;
    helpMe("username", username);

    const password = passwordElement.value;
    helpMe("password", password);

    let usernameLength = username.length;
    helpMe("usernameLength", usernameLength);

    let passwordLength = password.length;
    helpMe("passwordLength", passwordLength);

    if (usernameLength >= 4 && passwordLength >= 4) {
      console.log("-------------------------");
      console.log("Success you have finished");
      console.log("-------------------------");
    } else {
      if (usernameLength < 4) {
        alert("Username must be at least 4 characters");
      }
      if (passwordLength < 4) {
        alert("password must be at least 4 characters");
      }
    }
  } catch (e) {
    console.log("Exception was raised");
    console.log(e);
  }
});
