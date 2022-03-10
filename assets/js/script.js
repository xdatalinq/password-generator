// Assignment code here


var passLowerCase = function() {
  var passLowerVerify = window.prompt("Would you like to include lower case characters? y/n");
    switch (passLowerVerify) {
      case 'y':
      passLowerCase = true;
      break;
      case 'n':
      passLowerCase = false;
      break;
      default:
      window.alert('You did not pick a valid option (y/n). Try again.');
      passLowerCase();
      break;
    }
  };
passLowerCase();

var passUpperCase = function() {
  var passUpperVerify = window.prompt("Would you like to include upper case characters? y/n");
    switch (passUpperVerify) {
      case 'y':
      passUpperCase = true;
      break;
      case 'n':
      passUpperCase = false;
      break;
      default:
      window.alert('You did not pick a valid option (y/n). Try again.');
      passUpperCase();
      break;
    }
  };
passUpperCase();

var passNumbers = function() {
  var passNumbersVerify = window.prompt("Would you like to include numerical characters? y/n");
  switch (passNumbersVerify) {
    case 'y':
    passNumbers = true;
    break;
    case 'n':
    passNumbers = false;
    break;
    default:
    window.alert('You did not pick a valid option (y/n). Try again.');
    passNumbers();
    break;
  }
};
passNumbers();

var passSpecial = function() {
  var passSpecialVerify = window.prompt("Would you like to include special characters? y/n");
  switch (passSpecialVerify) {
    case 'y':
    passSpecial = true;
    break;
    case 'n':
    passSpecial = false;
    break;
    default:
    window.alert('You did not pick a valid option (y/n). Try again.');
    passSpecial();
    break;
  }
};
passSpecial();

// var passLength = function() {
//   var passLengthVerify = window.prompt("Choose a password length, 8 to 128 characters");
//   passLengthVerify = parseInt(passLengthVerify);
//   switch (passLengthVerify) {
//     case passLengthVerify >= 8 && passLengthVerify <= 128:
//     passLength = passLengthVerify;
//     break;
//     default:
//     window.alert('You did not pick a valid option (8 to 128). Try again.');
//     passLength();
//     break;
//   }
// };
// passLength();




 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/ 