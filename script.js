// Assignment Code
function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '[', '}', ']', '|', '\\', ':', ';', '"', '<', '>', '?', ',', '.', '/'];
  var possibleCharacters = [];
  
// inputs and the validates
  numberOfCharacters = prompt("Please choose between 8 and 128 characters for your password.");
  if (numberOfCharacters <8 || numberOfCharacters > 128) {
    return "Please choose a valid character amount within the bounds."
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number adhereing to the ruleset.");
  }
  else {
    alert("Your password will now contain " + numberOfCharacters + " characters.");
  }

    hasLowercase = confirm("Would you like lowercase characters? For the prompts, ok is yes and cancel is no.");
    if (hasLowercase) {
      var turntoLowercase = alert("Your randomly generated password now contains lowercase characters.");
  }

  else {
    alert("Your password will not contain lowercase characters.");
  }

    hasUppercase = confirm("Would you like uppercase characters?")
    if (hasUppercase) {
      var turntoUppercase = alert("Your randomly generated password now contains uppercase characters.")
    }

    else {
      alert("Your password will not contain uppercase letters")
    }

    hasNumbers = confirm("Would you like to use numbers in your password?")
    if (hasNumbers) {
      alert("Your password now contains numbers.")
    }
    else {
      alert("Your password will not contain any numbers.")
    }

    hasSpecial = confirm("Would you like to use symbols in your randomly generated password?")
    if (hasSpecial) {
      alert("Your password will contain special characters.")
    }

    else {
      alert("Your password will not contain special characters.")
    }

    // If no characters are selected, the following string will help prevent an integral issue by giving a recommendation.
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return "In order to generate a result, at least one type of catergory must be selected. Please select at least one character type and try again.";
    }

// group selected characters

  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

 // pick random cards out of new pool for length of password
 let finalPassword = ""
 for (let i = 0; i < numberOfCharacters; i++) {
   let rng =[Math.floor(Math.random() * possibleCharacters.length)];
   // or finalPassword += possibleCharacters[rng];
   finalPassword = finalPassword + possibleCharacters[rng];
 }
 return finalPassword;
};

// Get references for the generate section
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);