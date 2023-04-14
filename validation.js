const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength-fill");
const phone = document.getElementById("phone");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const phoneError = document.getElementById("phone-error");

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
phone.addEventListener("input", validatePhoneNumber);

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    emailError.innerHTML = "";
    return true;
  } else {
    email.classList.add("invalid");
    email.classList.remove("valid");
    emailError.innerHTML = "Email must be in the format a@b.c";
    return false;
  }
}

function validatePassword() {
  const hasCapital = /[A-Z]/.test(password.value);
  const hasNumber = /\d/.test(password.value);
  const hasSpecial = /[\W_]/.test(password.value);
  const isLongEnough = password.value.length >= 8;

  const securityLevel = "hard";

  let strength = 0;
  if (hasCapital) strength++;
  if (hasNumber) strength++;
  if (hasSpecial) strength++;
  if (isLongEnough) strength++;

  passwordStrength.style.width = `${strength * 25}%`;
  if (strength === 4) {
    password.classList.add("valid");
    password.classList.remove("weak");
    password.classList.remove("medium");
  } else if (strength >= 2) {
    password.classList.remove("valid");
    password.classList.remove("weak");
    password.classList.add("medium");
  } else {
    password.classList.remove("valid");
    password.classList.add("weak");
    password.classList.remove("medium");
    passwordStrength.style.backgroundColor = "red";
  }
  switch (securityLevel) {
    case "easy":
      if (isLongEnough) {
        passwordError.innerHTML = "";
        return true;
      } else {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        return false;
      }
      break;
    case "medium":
      if (hasNumber && isLongEnough) {
        passwordError.innerHTML = "";
        return true;
      } else {
        passwordError.innerHTML =
          "Password must be at least 8 characters long <br>contain a number";
        return false;
      }
      break;
    case "hard":
      if (hasCapital && hasNumber && hasSpecial && isLongEnough) {
        passwordError.innerHTML = "";
        return true;
      } else {
        passwordError.innerHTML =
          "Password must be at least 8 characters long <br>contain a capital letter<br>contain a number<br>contain and a special character";
        return false;
      }
      break;
  }
}

function validatePhoneNumber() {
  const regex = /^09\d{9}$/;

  if (regex.test(phone.value)) {
    phone.classList.add("valid");
    phone.classList.remove("invalid");
    phoneError.innerHTML = "";
    return true;
  } else {
    phone.classList.add("invalid");
    phone.classList.remove("valid");
    phoneError.innerHTML = "Phone number must be in the format 09123456789";
    return false;
  }
}

form.addEventListener("submit", (event) => {
  if (!validateEmail() || !validatePassword() || !validatePhoneNumber()) {
    event.preventDefault();
  }
});
