// VARIABLES //

const form = document.getElementById('myForm');
const name = document.getElementsByTagName('input')[0];
const password = document.getElementById("password");
const passwordChecker = document.getElementById("passwordChecker");
const email = document.getElementById('email');
const submitBtn = document.getElementById("submitBtn");
var formValid = true;

// ICONS //
const nameIcon = document.getElementsByTagName('ion-icon')[0];
const emailIcon = document.getElementsByTagName('ion-icon')[1];
const passwordIcon = document.getElementsByTagName('ion-icon')[2];
const passwordCheckerIcon = document.getElementsByTagName('ion-icon')[3];
const nameContainer = document.getElementsByClassName('user-nameContainer');
let errorMessage = document.getElementsByTagName("label");



console.log(nameIcon);
console.log(emailIcon);
console.log(passwordIcon);

// INPUT VALIDATOR // 

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    const nameValue = document.getElementById('name').value;   
    const passwordValue = document.getElementById("password").value;
    const passwordCheckerValue = document.getElementById("passwordChecker").value;
    const emailValue = document.getElementById('email').value;
    let nameAlert = document.getElementsByTagName("label")[0];
    let emailAlert = document.getElementsByTagName("label")[1];
    let passwordAlert = document.getElementsByTagName("label")[2];
    let small = document.getElementById("small");
    let nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    let emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;
    let passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;

    console.log(nameValue);
    console.log(passwordCheckerValue);
    console.log(emailValue);
    console.log(passwordCheckerValue);

    if(nameValue === "" || nameValue.length <= 5 || !nameRegex){
        name.placeholder = "";
        name.style.borderBottom = "2px solid red";
        nameIcon.style.color = "red";
        nameAlert.style.color = "red";
        nameAlert.textContent = "Invalid Name"
        formValid = false;
    } 
    else if(nameRegex) {
        name.style.borderBottom = "2px solid green";
        nameIcon.style.color = "green";
        nameAlert.textContent = "";
        formValid = true;
    }

    if(emailValue === "" || !emailRegex || emailValue.indexOf("@") == -1){
        email.placeholder = "";
        email.style.borderBottom = "2px solid red";
        emailIcon.style.color = "red";
        emailAlert.style.color = "red";
        emailAlert.textContent = "Invalid Email"
        formValid = false;
    } 
    else if(emailRegex){
        email.style.borderBottom = "2px solid green";
        emailIcon.style.color = "green";
        emailAlert.textContent = "";
        formValid = true;
    }

    if(passwordValue === "" || passwordValue.length <= 6){
        password.placeholder = "";
        password.style.borderBottom = "2px solid red";
        passwordIcon.style.color = "red";
        passwordAlert.style.color = "red";
        passwordAlert.textContent = "Invalid Password"
        small.style.color = "red";
        formValid = false;
    } else {
        password.style.borderBottom = "2px solid green";
        passwordIcon.style.color = "green";
        passwordAlert.textContent = "";
        passwordAlert.style.color = "green";
        formValid = true;
    }


    if(passwordCheckerValue === "" || !passwordRegex || passwordCheckerValue !== passwordValue){
        passwordChecker.placeholder = "";
        passwordChecker.style.borderBottom = "2px solid red";
        passwordChecker.style.color = "red";
        passwordCheckerIcon.style.color = "red";
        passwordChecker.textContent = "Invalid Password"
        formValid = false;
    } else {
        passwordChecker.style.borderBottom = "2px solid green";
        passwordChecker.style.color = "green";
        passwordCheckerIcon.style.color = "green";
        formValid = true;
    }

})

function validateform(e){
    e.preventDefault();
    if(formValid){ 
      document.getElementById('myForm').submit();
      return true;
    }
     return false;
}

document.addEventListener("submit", validateform);



console.log(name)
console.log(form);
console.log(errorMessage);

// console.log(namePlaceHolder);