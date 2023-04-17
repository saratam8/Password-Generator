// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  function getPasswordLength() {
    var passwordLength = window.prompt("Enter character length of password: ");

    console.log(`password length: ${passwordLength}`);

    return passwordLength;
  }

  var passwordLength = getPasswordLength();

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 to 128 characters. Please try again.");
    var passwordLength = getPasswordLength();
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

