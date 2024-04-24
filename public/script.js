// Toggle password visibility
function togglePasswordVisibility(inputId) {
    var x = document.getElementById(inputId);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Function to handle form validation
function validateForm() {
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmpassword");

    var isValid = true;

    // Check if any field is empty
    if (!firstName.value) {
        document.getElementById("firstname-error").innerText = "Please enter your first name";
        firstName.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("firstname-error").innerText = "";
        firstName.classList.remove("error");
    }

    if (!lastName.value) {
        document.getElementById("lastname-error").innerText = "Please enter your last name";
        lastName.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("lastname-error").innerText = "";
        lastName.classList.remove("error");
    }

    if (!email.value) {
        document.getElementById("email-error").innerText = "Please enter your email";
        email.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
        email.classList.remove("error");
    }

    if (!password.value) {
        document.getElementById("password-error").innerText = "Please enter a password";
        password.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("password-error").innerText = "";
        password.classList.remove("error");
    }

    if (!confirmPassword.value) {
        document.getElementById("confirmpassword-error").innerText = "Please confirm your password";
        confirmPassword.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("confirmpassword-error").innerText = "";
        confirmPassword.classList.remove("error");
    }

    // Check if password matches confirm password
    if (password.value !== confirmPassword.value) {
        document.getElementById("confirmpassword-error").innerText = "Passwords do not match";
        confirmPassword.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("confirmpassword-error").innerText = "";
        confirmPassword.classList.remove("error");
    }

    // Enable or disable the register button based on form validity
    var registerButton = document.getElementById("register-button");
    if (isValid) {
        registerButton.removeAttribute("disabled");
        registerButton.style.display = "block"; 
    } else {
        registerButton.setAttribute("disabled", "disabled");
        registerButton.style.display = "none"; 
    }
}

// Attach the validateForm function to input fields' change event
var inputFields = document.querySelectorAll("input");
inputFields.forEach(function(input) {
    input.addEventListener("input", validateForm); // Changed from "change" to "input"
});

// Attach the validateForm function to the register button's click event
document.getElementById("register-button").addEventListener("click", validateForm);

// Attach the handleSubmit function to the form's submit event
document.getElementById("form").addEventListener("submit", handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); 
    document.getElementById("form").submit(); 
}
