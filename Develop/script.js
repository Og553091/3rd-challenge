// Assignment code here
var characterLength = 8 ; 
var choiceArr = [];
var specialCharacterChoice = ["!" ,"@", "#", "$", "%", "^", "&", "*", "?", ">", "<", "+", "~"];
var lowerCaseArray = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","c","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9",];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function generatePassword () {
var password = "";
for(var i = 0 ; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random()* choiceArr.length);
password = password + choiceArr[randomIndex];

}
return password;
}

function getPrompts() {
characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters ") ) ;                            
if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){

  alert("character length has to be a number and between 8 - 128 digits. please try again")
  return false;
}

if(confirm("would you like lower case letters in your password?")){
  choiceArr = choiceArr.concat(lowerCaseArray);
}
if(confirm("would you like upper case letters in your password?")){
  choiceArr = choiceArr.concat(upperCaseArray);
}
if(confirm("would you like special characters in your password?")){
  choiceArr = choiceArr.concat(specialCharacterChoice);
}
if(confirm("would you like numbers in your password?")){
  choiceArr = choiceArr.concat(numbersArray);
}

return true ; 



}



// Write password to the #password input
generateBtn.addEventListener("click",writePassword );


function writePassword() {
var correctPrompts = getPrompts();

if (correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
