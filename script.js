const inputDateOfBirth = document.querySelector("#date-of-birth");
const inputLuckyNumber = document.querySelector("#lucky-number");
const buttonCheck = document.querySelector("#check");
const output = document.querySelector("#output");
function isLucky(dateOfBirth, luckyNumber) {
  var sum = 0;
  for (var i = 0; i < dateOfBirth.length; i++) {
    sum += Number(dateOfBirth[i]);
  }
  return !(sum % luckyNumber);
}
buttonCheck.addEventListener("click", () => {
  if (inputDateOfBirth.value == "") {
    printMessage("Enter your date of birth");
  } else if (inputLuckyNumber.value == "") {
    printMessage("Enter your lucky number");
  } else if (inputLuckyNumber.value < 1) {
    printMessage("Enter a number greater than 1");
  } else {
    var dateOfBirth = inputDateOfBirth.value.replaceAll("-", "");
    var luckyNumber = Number(inputLuckyNumber.value);

    if (isLucky(dateOfBirth, luckyNumber)) {
      printMessage("Your birthday is lucky");
    } else {
      printMessage("Your birthday is not lucky");
    }
  }
});
function printMessage(messageLanguage) {
  output.innerText = messageLanguage;
}
