const firstElem = document.getElementById("first");
const secondElem = document.getElementById("second");
const btnMultipy = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const result = document.getElementById("result");

function multiply() {
    result.innerText =  firstElem.value * secondElem.value
}

function divide() {
    result.innerText =  firstElem.value / secondElem.value
}

btnMultipy.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
