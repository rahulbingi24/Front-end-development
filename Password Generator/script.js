let lengthInput = document.getElementById("length");
let length = document.getElementById("length-value");

lengthInput.addEventListener("input", () => {
  length.textContent = lengthInput.value;
});

// creating a variable for buttons
let generateBtn = document.getElementById("generate");
let copyBtn = document.getElementById("copy");

let display = document.getElementById("display");
// choices

function GeneratePassword() {
  let passwordLength = parseInt(lengthInput.value);

  let isUpperCase = document.getElementById("uppercase").checked;
  let isLowerCase = document.getElementById("lowercase").checked;
  let isNumber = document.getElementById("numbers").checked;
  let isSymbol = document.getElementById("symbols").checked;

  let upperCase = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstvwxyx";
  let numbers = "1234567890";
  let symbols = "!@#$%^&*()_-+{}[],.<>/?|:;";

  let chars = "";

  if (isUpperCase) chars += upperCase;
  if (isLowerCase) chars += lowerCase;
  if (isNumber) chars += numbers;
  if (isSymbol) chars += symbols;

  if (chars === "") {
    alert("please select atleast one option");
    return;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  // creating variable for display
  display.value = password;
}

function copyToClipboard() {
  const tempInput = document.createElement("input");
  tempInput.value = display.value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", GeneratePassword);
copyBtn.addEventListener("click", copyToClipboard);
