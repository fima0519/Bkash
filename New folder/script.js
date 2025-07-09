let bkashNumber = document.getElementById("bkashNumber");
let bkashPin = document.getElementById("bkashPin");
let btnLogIn = document.getElementById("btnLogIn");
let logInPage = document.getElementById("logInPage");


btnLogIn.addEventListener("click", function () {
 
  let num = bkashNumber.value;
  let pin = bkashPin.value;
   console.log(num);
   console.log(pin);
  if ( num == 1 && pin == 1) {
    console.log('in');
    console.log(num,);
    console.log(pin);
  }
});
