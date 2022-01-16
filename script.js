function writePassword() {
  var result 
  var passwordLength = Number(window.prompt('How many characters should your password be?'))

  if ( passwordLength === null );
  window.alert("Enter a valid value");
  console.log("try again");
  return {writePassword};
  
  var lowerUpperPrompt = window.comfirm ("DO you want upper case letters?");


} 



var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password")
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '>', '<', '?',];
var numbers = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0',];
// Write password to the #password input



// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword)