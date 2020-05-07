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

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  }
  //If user pick special, numeric, and lower case
  if (specialChars && numericChars && lowercaseChars) {
    password = character.concat(
      specialCharacters,
      numericCharacters,
      lowerCasedCharacters
    );
  }
  //If user pick special, numeric, and upper
  else if (specialChars && numericChars && uppercaseChars) {
    password = character.concat(
      specialCharacters,
      numericCharacters,
      upperCasedCharacters
    );
  }
  //If user pick special, lower, and upper
  else if (specialChars && lowercaseChars && uppercaseChars) {
    password = character.concat(
      specialCharacters,
      upperCasedCharacters,
      lowerCasedCharacters
    );
  }
  //If user pick lower, numeric, and upper
  else if (uppercaseChars && numericChars && lowercaseChars) {
    password = character.concat(
      numericCharacters,
      upperCasedCharacters,
      lowerCasedCharacters
    );
  }
  //If user picks upper and lower
  else if (uppercaseChars && lowercaseChars) {
    password = character.concat(upperCasedCharacters, lowerCasedCharacters);
  }
  //if user picks lower and numeric
  else if (numericChars && lowercaseChars) {
    password = character.concat(numericCharacters, lowerCasedCharacters);
  }
  //if user picks upper and mumeric
  else if (numericChars && uppercaseChars) {
    password = character.concat(numericCharacters, upperCasedCharacters);
  }
  //If user picks special and upper
  else if (specialChars && uppercaseChars) {
    password = character.concat(specialCharacters, upperCasedCharacters);
  }
  //If user picks special and lower
  else if (specialChars && lowercaseChars) {
    password = character.concat(specialCharacters, lowerCasedCharacters);
  }
  //If user picks special and numeric
  else if (specialChars && numericChars) {
    password = character.concat(specialCharacters, numericCharacters);
  }
  //If user picks numeric only
  else if (numericChars) {
    password = numericCharacters;
  }
  //if user picks upper only
  else if (uppercaseChars) {
    password = upperCasedCharacters;
  }
  //if user picks lower only
  else if (lowercaseChars) {
    password = lowerCasedCharacters;
  }
  //if user picks special only
  else if (specialChars) {
    password = specialCharacters;
  }

  //Computer to randomly select characters based on user choices
  for (var i = 0; i < enter; i++) {
    var computerChoice = password[Math.floor(Math.random() * password.length)];
    password.push(computerChoice);
  }

  //converts password to a string and return password
  var password = password.join("");
  UserInput(password);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
