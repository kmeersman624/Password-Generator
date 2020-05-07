//Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
//array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//array of uppercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//array of lowercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//declare generate button to refer back to html generate id
var generateBtn = document.querySelector("#generate");

//Starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //Prompt user for pasword
  var length = prompt("How long would you like password to be?");

  length = parseInt(length);

  //If not a number, tell user
  if (isNaN(length)) {
    alert("That is not a valid number, please try again");
    return;
    ("Not a valid number");
  }
  //If not long enough, tell user
  if (length < 8) {
    alert("Your password is too short");
    return;
  }
  //If too long, tell user
  if (length > 128) {
    alert("Your password is too long");
    return;
  }
  //Check criteria that user wants to include in password.  Must include at least 1 of the criteria
  var specialChars = confirm(
    "Click OK to confirm including special characters"
  );
  var numericChars = confirm(
    "Click OK to confirm including numeric characters"
  );
  var lowercaseChars = confirm(
    "Click OK to confirm including lowercase characters"
  );
  var uppercaseChars = confirm(
    "Click OK to confirm including uppercase characters"
  );
  //If user picks no elements
  if (!specialChars && !numericChars && !lowercaseChars && !uppercaseChars) {
    alert("You need to select at least one!");
    return;
  }

  var password = "";

  //Create for loop to get random password from character arrays
  for (i = 0; i < length; i++) {
    if (specialChars) {
      password += getRandomValue(specialCharacters);
    }
    if (lowercaseChars) {
      password += getRandomValue(lowerCasedCharacters);
    }
    if (uppercaseChars) {
      password += getRandomValue(upperCasedCharacters);
    }
    if (numericChars) {
      password += getRandomValue(numericCharacters);
    }
  }
  //use slice method to return a password that is set to user's length input
  return password.slice(0, length);
}
//create function to get random value from character array
function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
