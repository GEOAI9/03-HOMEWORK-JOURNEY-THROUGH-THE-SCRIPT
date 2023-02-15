// Assignment code here


// Get references to the #generate element
// set the arrays up
let generateBtn = document.querySelector("#generate");
let uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', '~', ')', '_', '-', '=', '+', '[', ']', '{', '}', ':', ';', '"', ',', '<', '.', '>', '/', '?']
let numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let finalArray = []
let passwordArray = []
function generatePassword() {
  let passwordLength = prompt("What is the length of your password?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be equal to 8 values and less than 128 values")
    generatePassword()
  }
// options coding
    let confirmLowercase = confirm("Does your passoword include lowercase values?");
    if (confirmLowercase === true) {
      finalArray = finalArray.concat(lowercaseCharacters)
    }
    let confirmUppercase = confirm("Does your passoword include uppercase values?");
    if (confirmUppercase === true) {
      finalArray = finalArray.concat(uppercaseCharacters)
    }
    let confirmNumeric = confirm("Does your passoword include numeric values?");
    if (confirmNumeric === true) {
      finalArray = finalArray.concat(numericCharacters)
    }
    let confirmSpecial = confirm("Does your passoword include special character values?");
    if (confirmSpecial === true) {
      finalArray = finalArray.concat(specialCharacters)
    }

    if (!(confirmLowercase || confirmUppercase || confirmNumeric || confirmSpecial)) {
      alert("Choose at least one option")
      generatePassword()
    }
    // generated random values from finalArray
    for (let i = 0; i<passwordLength; i++){
passwordArray[i] = finalArray[Math.floor(Math.random()*finalArray.length)]
    }
    return passwordArray.join("")
  }
  
  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

