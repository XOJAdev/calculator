/* 
let a = "10";
let b = 5;

console.log(+a + b);

let x = "7";

console.log(++x)

let d = "7";
let c = "3";

console.log(+c + +d)

let e = 10;

console.log(++e)
console.log(++e)

let age = 17;
let isAdoult = age >= 18; 

console.log(isAdoult) 

*/

let result = document.getElementById("result");

function addValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    result.value = eval(result.value);
}
