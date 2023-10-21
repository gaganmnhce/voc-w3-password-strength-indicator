
const passwordField = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

passwordField.addEventListener('input', function () {
    const password = passwordField.value;
    const strength = checkPasswordStrength(password);
    displayStrength(strength);
});



function checkPasswordStrength(password) {
    if (password.length > 8) {
       return 'Strong';
} else if (password.length >= 6) {
        return 'Medium';
    } else {
        return 'Weak';
    }
}

function displayStrength(strength) {
    passwordStrength.textContent = `Password Strength: ${strength};`
    passwordStrength.className = strength; 
}
