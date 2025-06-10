const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let num =0;
increase.onclick = function(){
    num = num+1;
    number.textContent= num;
}
reset.onclick = function(){
    num = 0;
    number.textContent= num;
}
decrease.onclick = function () {
    num = num-1;
    number.textContent= num;
}

