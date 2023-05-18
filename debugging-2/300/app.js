//first we need to select these elements to do something with them in the form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
//we will be checking the validations for each of the element, when hit submit button
form.addEventListener("submit", (event) => {
  event.preventDefault(); //is calling one event, and stopping the default behaviour of submit event to happen, i.e. loading of page
  validateForm([username, email, password, passwordConfirmation]);
  checkPasswordLength(password, 6, 25);
  checkPassword(password, passwordConfirmation);
  checkEmail(email);
});
//4 functions to check validations:
const validateForm = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `This field is required`);
    } else {
      showSuccess(inputArr);
    }
  });
};
const checkPasswordLength = (password, min, max) => {
  if (password.length < min || password.length > max) {
    showError(password, `Between ${min} to ${max} characters`);
  }
};
const checkPassword = (password, passwordConfirmation) => {
  if (password.value !== passwordConfirmation.value) {
    showError(passwordConfirmation, `Password must be same`);
  }
};
const checkEmail = (email) => {
  if (!isValidEmail(email)) {
    showError(email, `It is not a right Email`);
  }
};
//3 helper functions:
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // check if error message span already exists
  let spanText = formControl.querySelector("span.error-text");
  if (!spanText) {
    // create new span element for error message
    spanText = document.createElement("span");
    spanText.className = "error-text";
    formControl.appendChild(spanText);
  }
  spanText.innerText = message;
};
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
const isValidEmail = (email) => {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //this checks the format of the email address string to ensure that it matches the pattern of a valid email address
  return regex.test(String(email.value).toLowerCase());
};