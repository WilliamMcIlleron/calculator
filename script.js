const numberpad = document.querySelector("#numberpad");
const symbolpad = document.querySelector("#symbolpad")
const display = document.querySelector("#display")
let num1 = "";
let symbol;
let num2 = "";
let symbolClicked = false;

numberpad.addEventListener("click", (e) => { 
    let targetNum = e.target.id;
    if (targetNum !== "numberpad") {
        if (symbolClicked === false) {
             num1 += targetNum;
        } else {
            num2 += targetNum;
        }
    
        display.textContent += targetNum;
}
})

symbolpad.addEventListener("click", (e) => {  
    let targetSymbol = e.target.id;

    if (symbolClicked === true && (targetSymbol !== "=" && targetSymbol !== "clear")) {
        operate(num1, symbol, num2)
        num1 = +(display.textContent);
        num2 = "";
        symbol = targetSymbol;
        display.textContent += ` ${targetSymbol} `;
        symbolClicked = true;
        return;
    }

    if (targetSymbol !== "symbolpad") {
        symbolClicked = true;
        if (targetSymbol !== "=" && targetSymbol !== "clear") {
            symbol = targetSymbol;
            display.textContent += ` ${targetSymbol} `;
        }
        if (targetSymbol === "clear") {
            display.textContent = "";
            symbolClicked = false;
            num1 = "";
            num2 = "";
            symbol = "";
        } else if (targetSymbol === "=") {
            operate(num1, symbol, num2);
            symbolClicked = false;
            num2 = "";
            num1 = "";
        }
        
    }
})


function add(x, y) { 
    num2 = "";  
    return x+y;
}

function subtract(x, y) {
    num2 = "";
    return x-y;
}

function divide(numerator, denominator) {
    num2 = "";
    if (+denominator === 0) return "Don't even try me... (CANNOT DIVIDE BY 0)";
    return numerator/denominator;
}

function multiply(x, y) {
    num2 = "";
    return x*y;
}



function operate(num1, symbol, num2) {
    symbolClicked = false;
    num1 = +num1;
    num2 = +num2;
    console.log(num1, num2, symbol)
    switch (symbol) {
        case '+':
            display.textContent = add(num1, num2);
        break;
        case '-':
            display.textContent = subtract(num1, num2);
        break;
        case '/':
            display.textContent = divide(num1, num2);
        break;
        case '*':
            display.textContent = multiply(num1, num2);
        break;
    }
    num1 = "";
    symbol = "";
}