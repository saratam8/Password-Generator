// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ".", "/", ":", ";", "<", "?", "@", "[","]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {

  function getPasswordLength() {
    var passwordLength = window.prompt("Enter character length of password: ");

    console.log(`password length: ${passwordLength}`);

    return passwordLength;
  }

  var passwordLength = getPasswordLength();
  // var checkNum = typeof passwordLength;
  // console.log(checkNum);

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 to 128 characters. Please try again.");
    var passwordLength = getPasswordLength();
  }

  var lowercaseChar = window.confirm("Do you want to include lowercase characters?");

  var uppercaseChar = window.confirm("Do you want to include uppercase characters?");

  var numericChar = window.confirm("Do you want to include numeric characters?");

  var specialChar = window.confirm("Do you want to include special characters?");

  //concatenate the arrays of characters that user said yes to. Then math.random from the concatenated array


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

