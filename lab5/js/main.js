let submitForm = document.getElementById("validateForm");
fullname = document.getElementById("name");
address = document.getElementById("address");
email = document.getElementById("email");
password = document.getElementById("password");
confPassword = document.getElementById("confPassword");
phone = document.getElementById("phone");
comment = document.getElementById("comment");

fullname_error_1 = "Please enter your name";
address_error_1 = "Please enter your address";
email_error_1 = "Please enter  your email";
password_error_1 = "Password cannot be empty";
phone_error_1 = "Please enter phone number";
comment_error_1 = "Please write your comment";

fullname_error_2 = "Your name cannot contain special character or numbers";
address_error_2 = "Address should be at least 20 characters long";
email_error_2 = "Please enter a valid email address";
password_error_2 =
  "Password must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
phone_error_2 = "Please enter a valid phone number";
comment_error_2 = "Comment should be at least 30 characters long";

let regName = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

regPhone = /^\d{10}$/; //validate a phone number of 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number. Simply the validation will remove all non-digits and permit only phone numbers with 10 digits

function validateField(field, regex, error1, error2, event) {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = error1;
    event.preventDefault();
    return false;
  } else if (!field.value.match(regex)) {
    field.nextElementSibling.innerHTML = error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateOther(field, error1, error2, event) {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = error1;
    event.preventDefault();
    return false;
  } else if (field.value.length < 20) {
    field.nextElementSibling.innerHTML = error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}
function confirmPassword(password, confPassword) {
  if (!(password.value == confPassword.value)) {
    confPassword.nextElementSibling.innerHTML = "Passwords do not match";
  }
}
function validateForm(event) {
  validateField(fullname, regName, fullname_error_1, fullname_error_2, event);
  validateField(email, regEmail, email_error_1, email_error_2, event);
  validateField(password, regPass, password_error_1, password_error_2, event);
  validateField(phone, regPhone, phone_error_1, phone_error_2, event);
  validateOther(address, address_error_1, address_error_1, event);
  validateOther(comment, comment_error_1, comment_error_2, event);
  confirmPassword(password, confPassword);
  event.preventDefault();
}

submitForm.addEventListener("submit", validateForm);
