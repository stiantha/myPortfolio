// Constant variables
const generateNumberBtn = document.getElementById('generateNumberBtn');
const generatePasswordBtn = document.getElementById('generatePasswordBtn');
const copyPasswordBtn = document.getElementById('copyPasswordBtn');
const resultField = document.getElementById('resultField');
const minNumber = 1;
const maxNumber = 999999999999999999999;

// Event listeners instead of onClick for buttons
generateNumberBtn.addEventListener('click', generateRandomNumber);
generatePasswordBtn.addEventListener('click', genPassword);
copyPasswordBtn.addEventListener('click', () => {
    copyToClipboard(resultField.value);
});


// Generate random number
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    resultField.value = randomNumber;
}

// Generate password
function genPassword() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength = 20;
    var newPassword = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        newPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    resultField.value = newPassword;
}

// Copy to clipboard
function copyToClipboard(text) {
    if (!text) {
        resultField.value = 'No text to copy!';
        return;
    }
    
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
            resultField.value = 'Copied!';
        })
        .catch(err => {
            console.error('Error copying text to clipboard:', err);
            resultField.value = 'Failed to Copy!';
        });
}