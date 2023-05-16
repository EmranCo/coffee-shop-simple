const form = document.getElementById("register-form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const requiredFields = form.querySelectorAll("[data-required]");

requiredFields.forEach((field) => {
  field.addEventListener("change", function () {
    if (field == confirmPassword)
      return validatePasswordMatch(password, confirmPassword);
    validateInput(field);
  });

  field.addEventListener("blur", function () {
    if (field == confirmPassword)
      return validatePasswordMatch(password, confirmPassword);
    validateInput(field);
  });

  field.addEventListener("input", function () {
    if (field == confirmPassword)
      return validatePasswordMatch(password, confirmPassword);
    validateInput(field);
  });
});

form.addEventListener("submit", function (event) {
  if (
    validateInput(fullName) &&
    validateInput(email) &&
    validateInput(phone) &&
    validateInput(gender) &&
    validateInput(dob) &&
    validateInput(password) &&
    validateInput(confirmPassword) &&
    validatePasswordMatch(password, confirmPassword)
  ) {
    form.classList.add("was-validated");

    // show success message using SweetAlert
    event.preventDefault();

    Swal.fire({
      title: "Success!",
      text: "You have been registered.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      // redirect to home page when OK button is clicked
      if (result.isConfirmed) {
        window.location.href = "index.html";
      }
    });
  } else {
    event.preventDefault();
    event.stopPropagation();
    form.reportValidity();
  }
});

function validateInput(input) {
  if (input.hasAttribute("data-required") && input.value.length === 0) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.nextElementSibling.style.display = "block";
    return false;
  } else {
    input.classList.remove("is-invalid");
    input.nextElementSibling.style.display = "none";
    input.classList.add("is-valid");
    return true;
  }
}

function validatePasswordMatch(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
    confirmPassword.nextElementSibling.style.display = "block";
    return false;
  } else {
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.nextElementSibling.style.display = "none";
    confirmPassword.classList.add("is-valid");
    return true;
  }
}
