// Assignment Code

var generateBtn = document.querySelector("#generate");
var special = ["~", "@", "#","$", "%", "^","&", "*", "(",")", "-", "+",",", ".", "=","?", "<", ">","[", "]", "{","}", "|", "/",];
var numeric = ["0", "1", "2","3", "4", "5","6", "7", "8","9"];
var lowercase = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X", "Y", "Z"]; 

function generatePassword() {
  var characterAmount = window.prompt("How many characters would you like? (8-128)");
    console.log("start generate password");
    while ((characterAmount < 8) || (characterAmount > 128)) {
      window.alert("Must be more than 8 and less than 128!") +
      generatePassword();
    }
  var bank = [];
  if (window.confirm("Click OK to include special characters")) {
    bank=bank.concat(special); 
  }
  if (window.confirm("Click OK to include numeric characters")) {
    bank=bank.concat(numeric);
  }
  if (window.confirm("Click OK to include lowercase characters")) {
    bank=bank.concat(lowercase);
  }
  if (window.confirm("Click OK to include uppercase characters")) {
    bank=bank.concat(uppercase);
  }
  
  if (bank.length == 0){
     window.alert("Must select at least one character type!") +
      console.log("recalling generate password")
      return generatePassword();
  console.log("finished recalling")
      
  } 
   console.log("generating the password");
  let rtv = "";
  for (var i = 0; i <= characterAmount; i++) {
    //console.log ("for " + i)
    
    var random = Math.floor(Math.random() * bank.length);
    
    rtv+=bank[random];
  }
  return rtv
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
