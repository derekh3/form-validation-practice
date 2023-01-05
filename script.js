const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const country = document.getElementById("country");
const countryError = document.querySelector(".country-error");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector(".zipcode-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");
const confirmPassword = document.getElementById("password-confirmation");
const confirmPasswordError = document.querySelector(
  ".password-confirmation-error"
);

const validityCheck = (event, errorContainer) => {
  if (event.target.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    errorContainer.textContent = ""; // Reset the content of the message
    errorContainer.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError(event.target, errorContainer);
  }
};

const passwordMatchCheck = (
  passwordInput,
  confirmPasswordInput,
  errorContainer,
  showMessage = true
) => {
  if (passwordInput.value === confirmPasswordInput.value) {
    console.log(passwordInput.value);
    console.log(confirmPasswordInput.value);
    errorContainer.textContent = "";
    errorContainer.className = "error";
  } else if (showMessage === true) {
    showError(confirmPasswordInput, errorContainer, true);
    console.log("here");
  }
};

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  validityCheck(event, event.target.nextElementSibling);
});

country.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  validityCheck(event, event.target.nextElementSibling);
});

zipcode.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  validityCheck(event, event.target.nextElementSibling);
});

password.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  passwordMatchCheck(password, confirmPassword, confirmPasswordError, false);
  validityCheck(event, event.target.nextElementSibling);
});

confirmPassword.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  passwordMatchCheck(password, event.target, event.target.nextElementSibling);
});

function showError(input, errorContainer, mismatch = false) {
  if (mismatch) {
    errorContainer.textContent = "Passwords do not match.";
  } else if (input.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    errorContainer.textContent = "You need to enter an email address.";
  } else if (input.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    errorContainer.textContent = "Entered value needs to be an email address.";
  } else if (input.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    errorContainer.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
  } else if (input.validity.tooLong) {
    // If the data is too long,
    // display the following error message.
    errorContainer.textContent = `Email should be at most ${input.maxLength} characters; you entered ${input.value.length}.`;
  }

  // Set the styling appropriately
  errorContainer.className = "error active";
}
