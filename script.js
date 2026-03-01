var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
 document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
 document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
 
 var lowerCaseLetters = /[a-z]/g;
 if(myInput.value.match(lowerCaseLetters)) {
   letter.classList.remove("invalid");
   letter.classList.add("valid");
 } else {
   letter.classList.remove("valid");
   letter.classList.add("invalid");
 }
 
 var upperCaseLetters = /[A-Z]/g;
 if(myInput.value.match(upperCaseLetters)) {
   capital.classList.remove("invalid");
   capital.classList.add("valid");
 } else {
   capital.classList.remove("valid");
   capital.classList.add("invalid");
 }
 
 var numbers = /[0-9]/g;
 if(myInput.value.match(numbers)) {
   number.classList.remove("invalid");
   number.classList.add("valid");
 } else {
   number.classList.remove("valid");
   number.classList.add("invalid");
 }
 
 if(myInput.value.length >= 8) {
   length.classList.remove("invalid");
   length.classList.add("valid");
 } else {
   length.classList.remove("valid");
   length.classList.add("invalid");
 }
}

const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (emailPattern.test(emailInput.value)) {
            
            emailError.textContent = '';
            alert('Form submitted successfully!');
            
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    
    emailInput.addEventListener('input', function() {
        if (emailPattern.test(emailInput.value)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Invalid format.';
        }
    });