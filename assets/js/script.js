// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Criteria variables

var password = "";
var passLength = "";
var lowerCaseChar;
var upperCaseChar;
var numeralChar;
var specialChar;

// Password Character Arrays

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ["~", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?"];

//Function to Generate Password

var generatePassword = function () {

var passLength = passwordLength();

charCritera();

// Variable for selected characters


var passwordCharacters = []

 if (lowerCaseChar) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

 if (upperCaseChar) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }

  if (numeralChar) {
    passwordCharacters = passwordCharacters.concat(numerals)
  }

  if (specialChar) {
    passwordCharacters = passwordCharacters.concat(special)
  }


  // Empty string to be filled by loop with random characters from Password Characters array

  
var randomise = ""

  for (var i = 0; i < passLength; i++) {
    randomise = randomise + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

  }
  return randomise;
}




// Password LengthCriteria

var passwordLength = function () {

var passLength = prompt("How many characters would you like in your password? Password length must be bewtween 8-128 characters.")


// If outside criteria prompt user to enter a valid amount of characters. 

  if (passLength < 8 || passLength > 128) {
    alert("Please choose a value between 8 and 128 characters");
    passwordLength();
  }

  else {

    return passLength;
  }
}


//Password Character Criteria

var charCritera = function () {

  lowerCaseChar = confirm("Would you like Lowercase characters in your password?");
  upperCaseChar = confirm("Would you like Uppercase characters in your password?");
  numeralChar = confirm("Would you like Numbers in your password?");
  specialChar = confirm("Would you like Special chracters in your password?");

  // If no criteria selected prompt user to select parameters again. 

  if (lowerCaseChar === false && upperCaseChar === false && numeralChar === false && specialChar === false) {
    alert("You must choose at least one parameter");
    charCritera();
  }

  else {

    return lowerCaseChar, upperCaseChar, numeralChar, specialChar;
  }
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




