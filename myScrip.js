//variables
let displayValue = '0';
let firstNum = null;
let lastNum = null;
let symbol = null;
const operatorString = '+-/*';

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.calcScreen');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.getElementById('clear');
const equalsButton = document.querySelector('.equal');
const positiveNegative = document.querySelector('.positiveNegative');
const percentButton = document.querySelector('.percent');


//FUNCTIONS
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b === 0){
        return 'sike';
    }
    else 
        return a / b;
}

function operate(a, operator, b){
    switch (operator){
        case '+': 
            return add(Number(a), Number(b))
        case '-':
            return subtract(Number(a), Number(b))
        case '*':
            return multiply(Number(a), Number(b))
        case '/':
            return divide(Number(a), Number(b));
    }
}
function allClear(){
    firstNum = null;
    lastNum = null;
    symbol = null;
    display.textContent = '0';
}
function equal(){
    //if all parameters exist calculate expression and set lastNum and symbol to null
    if(firstNum && lastNum && symbol){
        display.textContent = operate(firstNum, symbol, lastNum);
        firstNum = display.textContent;
        lastNum = null;
        symbol = null;
    }
}
//function will update the display screen on the calculator
function updateDisplay(someValue){
    displayValue = someValue;
    display.innerText = displayValue;
}
//function will make the current number positive or negative
function changeSign(){
    if(operatorString.includes(displayValue)){
        return;
    } else if(displayValue.includes('-')) {
        let temp = displayValue.slice(1);
        updateDisplay(temp);
        updateNumber(temp);
    } else if(displayValue) {
        let temp = '-' + displayValue;
        updateDisplay(temp);
        updateNumber(temp);
    }
}
//function will update thhe global operand values i.e firstNum and lastNum
function updateNumber(someValue){
   if(firstNum && !symbol && !lastNum){
        firstNum = someValue;  
    } else if(firstNum && symbol && lastNum){
        lastNum = someValue;
    }
}
//function will turn current number into a percentage
function percentage(){
    if(operatorString.includes(displayValue)){
        return;
    } else if(firstNum && !symbol && !lastNum){
        let tempValue = Number(firstNum);
        tempValue *= 0.1;
        updateDisplay(tempValue.toString());
        updateNumber(tempValue.toString());
    } else if(firstNum && lastNum && symbol){
        let tempValue = Number(lastNum);
        tempValue *= 0.1;
        updateDisplay(tempValue.toString());
        updateNumber(tempValue.toString());
    }
}

//event listeners 
allClearButton.addEventListener('click', allClear);

equalsButton.addEventListener('click', equal);

positiveNegative.addEventListener('click', changeSign);

percentButton.addEventListener('click', percentage);

//event listeners with forEach loop
operators.forEach(operator => operator.addEventListener('click', () => {
    const currentOperator = operator.innerText;
    //if only first number update the symbol(operator) to current operator and display it
    if (firstNum && !symbol && !lastNum){
        symbol = currentOperator;
        updateDisplay(symbol);
    } else if (firstNum && symbol && !lastNum){
        const result = operate(firstNum, symbol, firstNum);
        updateDisplay(result);
        lastNum = null;
        firstNum = displayValue;
        symbol = currentOperator;
    } else if (firstNum && lastNum && symbol){
        const result = operate(firstNum, symbol, lastNum);
        updateDisplay(result);
        lastNum = null;
        firstNum = displayValue;
        symbol = currentOperator;
    }
}));

numbers.forEach(number => number.addEventListener('click', () => {
    const currentNumber = number.innerText;
    if(!firstNum && !symbol && !lastNum){
        firstNum = currentNumber;
        updateDisplay(firstNum);
    } else if(firstNum && !symbol && !lastNum){
        firstNum += currentNumber;
        updateDisplay(firstNum);
    } else if(firstNum && symbol && !lastNum){
        lastNum = currentNumber;
        updateDisplay(lastNum);
    } else {
        lastNum += currentNumber;
        updateDisplay(lastNum);
    }
}));
