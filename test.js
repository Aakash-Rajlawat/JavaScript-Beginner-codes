const number = document.getElementById("number");
const btn = document.getElementById("btn");
const max = 6;
const min = 1;
let randomNumber;
btn.onclick = function() {
    randomNumber = Math.floor (Math.random() * max) + min;
    number.textContent = randomNumber;
}



