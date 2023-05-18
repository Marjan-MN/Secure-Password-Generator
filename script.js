// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Prompt 1
  var passwordLength = prompt("What should the length of the password be?")
  // Check if password is correct length
  if (passwordLength > 129 || passwordLength < 8){
    alert("Password length must be less than 129 Characters and more than 8 characters.")
    return
  }
  // Check if not a number
  if (isNaN(passwordLength)){
    alert("Length must be an Integer.")
    return
  }
  // Check if decimal
  if (passwordLength % 1 !== 0){
    alert("Re-enter a number that is not a decimal.")
    return
  }

  // Prompt 2
  var includeSpecial = confirm("Click OK to include special characters");
  var includeNumeric = confirm("Click OK to include numeric characters");
  var includeLowercase = confirm("Click OK to include lowercase characters");
  var includeUppercase = confirm("Click OK to include uppercase characters");
  var password = generatePassword(passwordLength, includeSpecial, includeNumeric, includeLowercase, includeUppercase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(passwordLength, includeSpecial, includeNumeric, includeLowercase, includeUppercase){
  var masterArray = [];
  var specialArray = ['!', '#', '$','%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~']
  var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowercaseArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
  var uppercaseArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

  if (includeSpecial){
    masterArray.concat(specialArray)
  }
  if (includeNumeric){
    masterArray.concat(numericArray)
  }
  if (includeLowercase){
    masterArray.concat(lowercaseArray)
  }
  if(includeUppercase){
    masterArray.concat(uppercaseArray)
  }

  // Make password, maybe a push to a new array with random?
  for (var i=0; i<passwordLength; i++){
    

  }

  // return the password string 
  return 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
