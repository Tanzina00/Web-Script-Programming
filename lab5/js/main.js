let submitForm = document.getElementById("validateForm");
fullname = document.getElementById("name");
address = document.getElementById("address");
email = document.getElementById("email");
password = document.getElementById("password");
phone = document.getElementById("phone");
comment = document.getElementById("comment");

fullname_error_1 = "Please Enter your Name";
address_error_1 = "Please enter your address";
email_error_1 = "Please enter your email";
password_error_1 = "Please enter a password";
phone_error_1 = "Please enter your phone number";
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

function fieldValidation(field, Regex, Error1, Error2, event) {
  console.log(field);
  if (field.value == "") {
    field.nextElementSibling.innerHTML = Error1;
    event.preventDefault();
    return false;
  } else if (!field.value.match(Regex)) {
    field.nextElementSibling.innerHTML = Error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}
function otherValidation(field, Error1, Error2, event) {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = Error1;
    event.preventDefault();
    return false;
  } else if (field.value.length < 20) {
    field.nextElementSibling.innerHTML = Error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateForm(event) {
  fieldValidation(fullname, regName, fullname_error_1, fullname_error_2, event);
  fieldValidation(email, regEmail, email_error_1, email_error_2, event);
  fieldValidation(password, regPass, password_error_1, password_error_2, event);
  fieldValidation(phone, regPhone, phone_error_1, phone_error_2, event);
  otherValidation(address, address_error_1, address_error_2, event);
  otherValidation(comment, comment_error_1, comment_error_2, event);
  event.preventDefault();
}
submitForm.addEventListener("submit", validateForm);
