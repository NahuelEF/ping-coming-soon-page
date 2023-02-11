const form = document.getElementById("form");
var email = document.getElementById("email");
const error_message = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const validate = () => {
  var emailValue = email.value.trim();
  const values = /(gmail.com|hotmail.com|yahoo.com)/;
  
  if (!emailValue.match(values)) {
    email.classList.add("input__email--error");
    error_message.classList.add("error-message--block");
    email.focus();
  } else {
    email.classList.remove("input__email--error");
    error_message.classList.remove("error-message--block");
    email.value = "";
  }
};
