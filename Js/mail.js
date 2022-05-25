const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
});

function validateEmail() {
  const emailValue = email.value.trim();

  if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSubmit(email);
  }
}

function setErrorFor(input) {
  const errorMessage = document.getElementById("error");
  errorMessage.style.visibility = "visible";
  input.className = "error-icon";
}

function setSubmit(input) {
  const errorMessage = document.getElementById("error");
  errorMessage.style.visibility = "hidden";
  email.className = "";
  document.form1.submit();
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
