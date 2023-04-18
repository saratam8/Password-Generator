// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ".", "/", ":", ";", "<", "?", "@", "[","]", "^", "_", "`", "{", "|", "}", "~"];

  //passwordGen will store all the character types that user selected as 2D array
  var passwordGen = [];
  //First index of passwordGen
  var arrayIndex1 = 0;
  //Second index of passwordGen
  var arrayIndex2 = 0;

  //Function to ask user for password character length
  function getPasswordLength() {
    var passwordLength = window.prompt("Enter character length of password: ");

    console.log(`password length: ${passwordLength}`);

    return passwordLength;
  }

  var passwordLength = getPasswordLength();
  // var checkNum = typeof passwordLength;
  // console.log(checkNum);

  //Check if user input is between 8 and 128. Ask for input until valid response
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 to 128 characters. Please try again.");
    var passwordLength = getPasswordLength();
  }

  //Lines 41 to 75 uses user input to create a 2D array (passwordGen) to store all the possible characters that can be used in the random password generator
  var lowercaseChar = window.confirm("Do you want to include lowercase characters?");

  if (lowercaseChar == true){
    passwordGen.push(lowercase);
    console.log(passwordGen);
    arrayIndex1 = arrayIndex1 + 1;
    arrayIndex2 = arrayIndex2 + lowercase.length;
  }

  var uppercaseChar = window.confirm("Do you want to include uppercase characters?");

  if (uppercaseChar == true){
    passwordGen.push(uppercase);
    console.log(passwordGen);
    arrayIndex1 = arrayIndex1 + 1;
    arrayIndex2 = arrayIndex2 + uppercase.length;
  }

  var numericChar = window.confirm("Do you want to include numeric characters?");

  if (numericChar == true){
    passwordGen.push(numeric);
    console.log(passwordGen);
    arrayIndex1 = arrayIndex1 + 1;
    arrayIndex2 = arrayIndex2 + numeric.length;
  }

  var specialChar = window.confirm("Do you want to include special characters?");

  if (specialChar == true){
    passwordGen.push(special);
    console.log(passwordGen);
    arrayIndex1 = arrayIndex1 + 1;
    arrayIndex2 = arrayIndex2 + specialChar.length;
  }

  // console.log(passwordGen[0][0]);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

