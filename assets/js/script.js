var selection = [];
var master = [];
var passwordLength;
var trackingNo = 0;
var generateBtn = document.querySelector("#generate");

var generatePassword = function (){
  passLowerCase();
  return password;
};

function stringConverter() {
  password = selection.join("");
};

function backFill() {
  var num = passwordLength - selection.length; 
  for (var i=0; i < num; i++) {
    selection.push(master[Math.floor(Math.random() * master.length)]) 
  } stringConverter();
};

function addLowerCase() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  var randomLetter = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  selection.push(randomLetter);
  master = master.concat(lowerCase);
};

function addUpperCase() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var randomLetter = upperCase[Math.floor(Math.random() * upperCase.length)];
  selection.push(randomLetter);
  master = master.concat(upperCase);
};

function addNumber() {
  const numberCase = "0123456789".split('');
  var randomNumber = numberCase[Math.floor(Math.random() * numberCase.length)];
  selection.push(randomNumber);
  master = master.concat(numberCase);
};

function addSpecial() {
  const specialCase = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split('');
  var randomSpecial = specialCase[Math.floor(Math.random() * specialCase.length)];
  selection.push(randomSpecial);
  master = master.concat(specialCase);
};

function passLowerCase() {
  var passLowerVerify = window.prompt("Would you like to include lower case characters? y/n");
    switch (passLowerVerify) {
      case 'y':
      addLowerCase();
      passUpperCase();
      break;
      case 'n':
      trackingNo = trackingNo + 1;
      passUpperCase();
      break;
      default:
      window.alert('You did not pick a valid option (y/n). Try again.');
      passLowerCase();
      break;
    }
  };

function passUpperCase() {
  var passUpperVerify = window.prompt("Would you like to include upper case characters? y/n");
    switch (passUpperVerify) {
      case 'y':
      addUpperCase();
      passNumbers();
      break;
      case 'n':
      trackingNo = trackingNo + 1;
      passNumbers();
      break;
      default:
      window.alert('You did not pick a valid option (y/n). Try again.');
      passUpperCase();
      break;
    }
  };

function passNumbers() {
  var passNumbersVerify = window.prompt("Would you like to include numerical characters? y/n");
  switch (passNumbersVerify) {
    case 'y':
    addNumber();
    passSpecial();
    break;
    case 'n':
    trackingNo = trackingNo + 1;
    passSpecial();
    break;
    default:
    window.alert('You did not pick a valid option (y/n). Try again.');
    passNumbers();
    break;
  }
};

function passSpecial() {
  var passSpecialVerify = window.prompt("Would you like to include special characters? y/n");
  switch (passSpecialVerify) {
    case 'y':
    addSpecial();
    passLength();
    break;
    case 'n':
    trackingNo = trackingNo + 1;
    passLength();
    break;
    default:
    window.alert('You did not pick a valid option (y/n). Try again.');
    passSpecial();
    break;
  }
};

function passLength() {
  if (trackingNo === 4) {
    window.alert('You need to select at least one character type to continue');
    trackingNo = 0;
    passLowerCase();
  } else {
    var passLengthVerify = window.prompt("Choose a password length, 8 to 128 characters");
    passLengthVerify = parseInt(passLengthVerify);
    if (passLengthVerify >= 8 && passLengthVerify <= 128) {
      passwordLength = passLengthVerify;
      backFill();
    } else {
      window.alert('You did not pick a valid option (8 to 128). Try again.');
      passLength();
    }
  } 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);