function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function divide(numerator, denominator) {
    if (+denominator === 0) return "Don't even try me... (CANNOT DIVIDE BY 0)";
    return numerator/denominator;
}

function multiply(x, y) {
    return x*y;
}

let num1;
let symbol;
let num2;

function operate(num1, symbol, num2) {
    switch (symbol) {
        case 'x':
            add(num1, num2);
        break;
        case '-':
            subtract(num1, num2);
        break;
        case '/':
            divide(num1, num2);
        break;
        case '*':
            multiply(num1, num2);
        break;
    }
}