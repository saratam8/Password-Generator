// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ".", "/", ":", ";", "<", "?", "@", "[","]", "^", "_", "`", "{", "|", "}", "~"];

  //passwordGen will store all the character types that user selected
  var passwordGen = [];

  //Function to ask user for password character length
  function getPasswordLength() {
    var passwordLength = window.prompt("Enter character length of password: ");

    // console.log(`password length: ${passwordLength}`);

    return passwordLength;
  }

  var passwordLength = getPasswordLength();

  //Check if user input is between 8 and 128. Ask for input until valid response
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password must be between 8 to 128 characters. Please try again.");
    var passwordLength = getPasswordLength();
  }

  var lowercaseChar = window.confirm("Do you want to include lowercase characters?");

  if (lowercaseChar == true){
    passwordGen = passwordGen.concat(lowercase);
    // console.log(passwordGen);
  }

  var uppercaseChar = window.confirm("Do you want to include uppercase characters?");

  if (uppercaseChar == true){
    passwordGen = passwordGen.concat(uppercase);
    // console.log(passwordGen);
  }

  var numericChar = window.confirm("Do you want to include numeric characters?");

  if (numericChar == true){
    passwordGen = passwordGen.concat(numeric);
    // console.log(passwordGen);
  }

  var specialChar = window.confirm("Do you want to include special characters?");

  if (specialChar == true){
    passwordGen = passwordGen.concat(special);
    // console.log(passwordGen);
  }

  // console.log(passwordGen);

  function generatePassword(){
    var password = [];
    for(var i = 0; i < passwordLength; i++){
      var index = Math.floor(Math.random() * passwordGen.length);
      password[i] = passwordGen[index];
    }
    // console.log(password);
    var passwordString = password.join("");
    // console.log(passwordString);
    return passwordString;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

