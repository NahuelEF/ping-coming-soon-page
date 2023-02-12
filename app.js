const form = document.getElementById("form");
var email = document.getElementById("email");
var error_message = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const validate = () => {
  var emailValue = email.value.trim();
  const values = /(gmail.com|hotmail.com|yahoo.com)/;

  if (emailValue === "") {
    setErrorMessage("Whoops! It looks like you forgot to add your email");
  } else if (!emailValue.match(values)) {
    setErrorMessage("Please provide a valid email address");
  } else {
    email.classList.remove("input__email--error");
    error_message.classList.remove("error-message--block");
    email.value = "";
    console.log(emailValue);
  }
};

const setErrorMessage = (message) => {
  error_message.innerHTML = `${message}`;
  email.classList.add("input__email--error");
  error_message.classList.add("error-message--block");
  email.focus();
};
