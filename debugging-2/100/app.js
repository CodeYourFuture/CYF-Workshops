const form = document.getElementById("form");
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameElement.val;
  const password = passwordElement.val;
  let usernameLength = username.length();
  let passwordLength = password.length();

  if (usernameLength > 4 && passwordLength > 4) {
    console.log("-------------------------");
    console.log("Success you have finished");
    console.log("-------------------------");
  } else {
    alert("Username must be at least 4 characters");
    alert("password must be at least 4 characters");
  }
});
