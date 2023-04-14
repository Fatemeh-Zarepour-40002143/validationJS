# Registration Form with Validation

This is a simple registration form with email, password, and phone number fields that are validated using JavaScript. The form is built using HTML and styled with CSS.

## Features

- Email field validation: email must be in the format a@b.c
- Password field validation: password must be at least 8 characters long and contain a capital letter, a number, and a special character. Password strength is displayed using a dynamic progress bar.
- Phone number field validation: phone number must be in the format 09123456789
- Error messages are displayed below each field if they are invalid
- Valid fields are highlighted in green
- Form submission is prevented if any fields are invalid

## Usage

To use this registration form, simply open the `index.html` file in a web browser. The form can be filled out and submitted by clicking the "Register" button. If any fields are invalid, an error message will be displayed below the field and the field border will turn red. If all fields are valid, the field border will turn green and the form can be submitted.

# Code

## HTML

The HTML code for the registration form is contained in the `index.html` file. It consists of a `form` element with input fields for email, password, and phone number, as well as a submit button. Each input field has an associated label element and an error message span element that is initially empty.

## JavaScript

The JavaScript code for the registration form is contained in the `script.js` file. It adds event listeners to the input fields for email, password, and phone number, and validates the input using regular expressions. It also can be personolized by a variable named securityLevel that if it's on easy then your password only should be more than 8 characters long,if it's medium the password should contain digit and if it's hard password should have at least a capital,a number and a special character. If any fields are invalid, the associated error message span is updated with an appropriate error message. If all fields are valid, the form submission is allowed.
###validate Email
by checking that the form of text is like a@b.c and each one of a,b and c don't contain '@' by regex then if it's a valid email make the border of field green otherwise make it red
###validate phoneNumber 
by checking that the field contain 11 digits of number that starts with 09 then if it's valid return true and make the border of field green otherwise make it red
###validate password
this function include 4 function.first of all it checks that the password is at least 8 characters long and if it is add 1 to the strength variable.second one is checking that the password contain digits.third one is checking the password contain any capital characters and the last one check that password contain at least 1 special character and add 1 to strength variable if each one this being true.

## License

This registration form with validation is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

This README file provides an overview of the registration form with validation, including its features, usage, and code. It can be included in the repository for the project on GitHub to provide documentation and instructions for other users.
