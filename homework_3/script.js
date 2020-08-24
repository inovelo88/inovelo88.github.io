// Variables //
var button = document.getElementById("generate");
button.addEventListener("click", getPassword);
var generatePassword = document.getElementById("password");


// Functions//
//Using http://www.net-comber.com/charset.html Character Set

function getPassword() {
    console.log("getPassword");

function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbols() {
    const symbols = "!@#$%^&*()_+={}[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Prompts //
    var length = prompt('How many characters would you like your password to contain?');
    var lower = confirm("Click OK to confirm including uppercase characters.");
    var upper = confirm("Click OK to confirm including uppercase characters.");
    var number = confirm("Click OK to confirm including uppercase characters.");
    var symbols = confirm("Click OK to confirm including uppercase characters.");
    var generatePassword = [];

// If Statements //

    if (lower) {
        generatePassword.push(getRandomLower)
    }
    if (upper) {
        generatePassword.push(getRandomUpper)
    }
    if (number) {
        generatePassword.push(getRandomNumber)
    }
    if (symbols) {
        generatePassword.push(getRandomSymbols)
    }

}
// Loop //
for(var i = generatePassword.length; i < generatePassword.length; i++) 
;

// Generate Password //
function myFunction() {
    var x = document.getElementById("password").value;
    document.getElementById("box-body").innerHTML = x;
  }