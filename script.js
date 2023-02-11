// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let passwordLength = prompt("What is the length of your password?");
  if(passwordLength < 8 || passwordLength > 128 ){
    alert("Password length must be greater than 8 and less than 128")
    generatePassword()
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

