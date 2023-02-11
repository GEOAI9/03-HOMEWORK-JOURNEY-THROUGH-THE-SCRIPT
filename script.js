// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', '~', ')', '_', '-', '=', '+', '[', ']', '{', '}', ':', ';', '"', ',', '<', '.', '>', '/', '?']
let numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let finalArray = []

function generatePassword(){
  let passwordLength = prompt("What is the length of your password?");
  if(passwordLength < 8 || passwordLength > 128 ){
    alert("Password length must be greater than 8 and less than 128")
    generatePassword()
  }
  function confirmOption(){
  let confirmLowercase = confirm("Does your passoword include lowercase values?");
  if(confirmLowercase === true){
    finalArray = finalarray.concat(lowercaseCharacters)
  }
  let confirmUppercase = confirm("Does your passoword include uppercase values?");
  if(confirmUppercase === true){
    finalArray = finalarray.concat(uppercaseCharacters)
  }
  let confirmNumeric = confirm("Does your passoword include numeric values?");
  if(confirmNumeric === true){
    finalArray = finalarray.concat(numericCharacters)
  }
  let confirmSpecial = confirm("Does your passoword include special character values?");
  if(confirmSpecial === true){
    finalArray = finalarray.concat(specialCharacters)
  }
  
  if(!(confirmLowercase || confirmUppercase || confirmNumeric || confirmSpecial)){
    alert("Choose at least one option")
    confirmOption()
  }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

