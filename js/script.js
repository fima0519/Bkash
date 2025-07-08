let bkashNumber = document.getElementById("bkashNumber");
let bkashPin = document.getElementById("bkashPin");
let btnLogIn = document.getElementById("btnLogIn");
let logInPage = document.getElementById("logInPage");
let dashBoardPage = document.getElementById("dashBoardPage");

btnLogIn.addEventListener("click", function () {
  if (bkashNumber.value == "1" && bkashPin.value == "1") {
    dashBoardPage.style.display = "block";
    logInPage.style.display = "none";
  }
});

// ================

let balance = document.getElementById("balance");
let depositAmount = document.getElementById("depositAmount");
let btnDeposit = document.getElementById("btnDeposit");
let withdrawAmount = document.getElementById("withdrawAmount");
let btnWithdrawn = document.getElementById("btnWithdrawn");



let errorWithdraw = document.getElementById("errorWithdraw");
let errorMiss = document.getElementById("errorMiss");
let notifySuccess = document.getElementById("notifySuccess");
let errorFail = document.getElementById("errorFail");

btnDeposit.addEventListener("click", function () {
  let currentBalance = Number(balance.innerText);
  let amount = Number(depositAmount.value);
  let result = 0;
  if (depositAmount.value == "") {
    errorMiss.style.display = "flex";
  } else {
    result = currentBalance + amount;
    console.log(result);
    balance.innerText = result;
    notifySuccess.style.display = "block";
    errorMiss.style.display = "none";
  }
});

btnWithdrawn.addEventListener("click", function () {
  let currentBalance = Number(balance.innerText);
  let amount = Number(withdrawAmount.value);
  let result = 0;
  if (withdrawAmount.value == "") {
    errorWithdraw.style.display = "flex";
  } else {
    result = currentBalance - amount;
    console.log(result);
    balance.innerText = result;
    notifySuccess.style.display = "block";
    errorWithdraw.style.display = "none";
  }
});
