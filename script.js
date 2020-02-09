//generate random password
function writePassword() {

//set password length
  var complexity = document.getElementById("passLength").value;

  //possible password values
  var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  var password = "";

  //for loop to choose password
  for( var i = 1; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
  }

  //display password
  document.getElementById("password").value = password;
}

//copy to clipboard function
function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
}
