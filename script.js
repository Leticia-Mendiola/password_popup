// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
  let password = "";
  for (var i = 0; i <= 8; i++) { 
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  } 


// passwordText.value = password;

// function gfg_Run(){generateBtn.innerHTML = fucntion writePassword()}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());

document.getElementById("password").value = password;

}