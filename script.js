const numberpad = document.querySelector("#numberpad");
const symbolpad = document.querySelector("#symbolpad")
const display = document.querySelector("#display")
let num1 = "";
let symbol;
let num2 = +(display.textContent);
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
    let num1ArrIncludes = (""+num1).split("").includes(".");
    let num2ArrIncludes = (""+num2).split("").includes(".");
    if (targetSymbol !== "symbolpad") {
        if (targetSymbol === '.' && symbolClicked === false && num1ArrIncludes === false) {
            
            display.textContent += targetSymbol;
            num1 += targetSymbol;
            symbolClicked = false;
        } else if (targetSymbol === '.' && symbolClicked === true && num2ArrIncludes === false) {
            display.textContent += targetSymbol;
            num2 += targetSymbol;
        }
        if (symbolClicked === true && (targetSymbol !== "=" && targetSymbol !== "clear" && targetSymbol !== '.')) {
            operate(num1, symbol, num2)
            num1 = +(display.textContent);
            num2 = "";
            symbol = targetSymbol;
            display.textContent += ` ${targetSymbol} `;
            symbolClicked = true;
            return;
        } 
        else if (targetSymbol !== "=" && targetSymbol !== "clear" && targetSymbol !== '.') {
            symbol = targetSymbol;
            display.textContent += ` ${targetSymbol} `;
            symbolClicked = true;
        } 
        else if (targetSymbol === "clear") {
            display.textContent = "";
            symbolClicked = false;
            num1 = "";
            num2 = "";
            symbol = "";
        } else if (targetSymbol === "=") {
            operate(num1, symbol, num2);
            symbolClicked = false;
            num2 = "";
            num1 = +(display.textContent)
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
        case '.': 
            
    }
    num1 = "";
    symbol = "";
}