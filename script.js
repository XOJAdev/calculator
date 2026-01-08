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

/* v1-kalkulyator

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
*/

// v2-kalkulyator

let result = document.getElementById("result");

function addValue(value) {
    let lastChar = result.value.slice(-1);

    // Operatorlar
    let operators = ["+", "-", "*", "/"];

    // Ketma-ket operatorni bloklash
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        // 0 ga bo‘lishni tekshirish
        if (result.value.includes("/0")) {
            alert("0 ga bo‘lish mumkin emas!");
            return;
        }

        // Hisoblash
        let calcResult = eval(result.value);

        // Natija noto‘g‘ri bo‘lsa
        if (calcResult === Infinity || isNaN(calcResult)) {
            alert("Xato hisoblash!");
            return;
        }

        result.value = calcResult;
    } catch (error) {
        alert("Xato ifoda!");
    }
}
function calculate() {
    result.value = eval(result.value);
}

