// Get form and input elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation logic
function validateName() {
    const nameValue = fullName.value.trim();
    if (nameValue.length < 5) {
        nameError.textContent = "Name must be at least 5 characters.";
        return false;
    }
    nameError.textContent = "";  // Clear error
    return true;
}

function validateEmail() {
    const emailValue = email.value.trim();
    if (!emailValue.includes('@')) {
        emailError.textContent = "Email must contain @.";
        return false;
    }
    emailError.textContent = "";  // Clear error
    return true;
}

function validatePhone() {
    const phoneValue = phone.value.trim();
    const phoneRegex = /^[0-9]{10}$/;  // Only allow 10 digits
    if (phoneValue === '123456789' || !phoneRegex.test(phoneValue)) {
        phoneError.textContent = "Phone must be a valid 10-digit number.";
        return false;
    }
    phoneError.textContent = "";  // Clear error
    return true;
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === 'password' || passwordValue === fullName.value || passwordValue.length < 8) {
        passwordError.textContent = "Password is not strong.";
        return false;
    }
    passwordError.textContent = "";  // Clear error
    return true;
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }
    confirmPasswordError.textContent = "";  // Clear error
    return true;
}

// Validate on form submit
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for validation

    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();

    // Submit the form only if all fields are valid
    if (isValidName && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword) {
        alert('Form submitted successfully!');
        form.submit();  // Submit the form if all validations pass
    }
});

// Validate as the user types
fullName.addEventListener('change', validateName);
email.addEventListener('change', validateEmail);
phone.addEventListener('change', validatePhone);
password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('change', validateConfirmPassword);