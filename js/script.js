let bkashNumber = document.getElementById("bkashNumber");
let bkashPin = document.getElementById("bkashPin");
let btnLogIn = document.getElementById("btnLogIn");
let logInPage = document.getElementById("logInPage");
let dashBoardPage = document.getElementById("dashBoardPage");
let errorLogIn = document.getElementById("errorLogIn");
let errorLogInMessage = document.getElementById("errorLogInMessage");



btnLogIn.addEventListener("click", function () {
  console.log(bkashNumber.value);
  console.log(bkashPin.value);
  if (bkashNumber.value == "1" && bkashPin.value == "1") {
    console.log(bkashNumber.value);
    console.log(bkashPin.value);
    dashBoardPage.style.display = "block";
    logInPage.style.display = "none";
  }else{
    errorLogInMessage.innerText = "Invalid UserId or Pin."
    errorLogIn.style.display = "flex";
    setTimeout(() => {
      errorLogIn.style.display = "none";
    }, 2000);
    
  }
});

// ================

let balance = document.getElementById("balance");
let depositAmount = document.getElementById("depositAmount");
let btnDeposit = document.getElementById("btnDeposit");
let withdrawAmount = document.getElementById("withdrawAmount");
let btnWithdrawn = document.getElementById("btnWithdrawn");
let notifySuccess = document.getElementById("notifySuccess");
let errorFail = document.getElementById("errorFail");
let errorMessage = document.getElementById("errorMessage");



btnDeposit.addEventListener("click", function () {
  let currentBalance = Number(balance.innerText);
  let amount = Number(depositAmount.value);
  let result = 0;
  if (depositAmount.value == "") {
    errorFail.style.display = "flex";
    errorMessage.innerHTML = "Amount is missing."
    setTimeout(() => {
      
      errorFail.style.display = "none";
    }, 2000);
  } else if (depositAmount.value < 0) {
    errorMessage.innerText = "Amount cannot be negative."
    errorFail.style.display = "flex";
    setTimeout(() => {
      errorFail.style.display = "none";
    }, 2000);
  } else {
    result = currentBalance + amount;
    console.log(result);
    balance.innerText = result;
    notifySuccess.style.display = "block";
    errorFail.style.display = "none";
    setTimeout(() => {
      notifySuccess.style.display = "none";
    }, 2000);
  }
});

btnWithdrawn.addEventListener("click", function () {
  let currentBalance = Number(balance.innerText);
  let amount = Number(withdrawAmount.value);
  let result = 0;
  if (withdrawAmount.value == "") {
    errorMessage.innerText = "Amount is missing."
    errorFail.style.display = "flex";
    setTimeout(() => {
      errorFail.style.display = "none";
    }, 2000);
  } else if (amount > currentBalance && amount < 0 ) {
    errorMessage.innerText ="Amount is not correct.";
    errorFail.style.display = "flex";
    setTimeout(() => {
      errorFail.style.display = "none";
    }, 2000);
  } else {
    result = currentBalance - amount;
    console.log(result);
    balance.innerText = result;
    notifySuccess.style.display = "block";
    setTimeout(() => {
      notifySuccess.style.display = "none";
    }, 2000);
  }
});
