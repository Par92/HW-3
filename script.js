// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ["~", "@", "#","$", "%", "^","&", "*", "(",")", "-", "+",",", ".", "=","?", "<", ">","[", "]", "{","}", "|", "/",];
var numeric = ["0", "1", "2","3", "4", "5","6", "7", "8","9"];
var lowercase = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X", "Y", "Z"]; 
var characterAmount = 12;

console.log ("start")

function generatePassword() {
  console.log ("entering generatePassword")
  console.log (characterAmount)
  let rtv = "";
  for (var i = 0; i <= characterAmount; i++) {
    console.log ("for " + i)
    var random = Math.floor(Math.random() * special.length);
    rtv+=special[random];


    console.log(special[random]  );
  
  }
    console.log ("leaving generatePassword")
  return rtv
    console.log ("blah blah blah")
}









// Write password to the #password input
function writePassword() {
  console.log ("entering writePassword")
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();
  console.log ("leaving writePassword")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
