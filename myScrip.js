//variables
let displayValue = '0';
let firstNum = null;
let lastNum = null;
let symbol = null;

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.calcScreen');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.getElementById('clear');
const equalsButton = document.querySelector('.equal');



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

function updateDisplay(someValue){

}


//event listeners 
allClearButton.addEventListener('click', allClear);

equalsButton.addEventListener('click', equal);

operators.forEach(operator => operator.addEventListener('click', () => {
    const currentOperator = operator.innerText;
    //if only first number update the symbol(operator) to current operator and display it
    if (firstNum && !symbol && !lastNum){
        symbol = currentOperator;
        display.innerText = currentOperator;
    } else if (firstNum && symbol && !lastNum){
        display.innerText = operate(firstNum, symbol, firstNum);
        lastNum = null;
        firstNum = display.innerText;
        symbol = currentOperator;
    } else if (firstNum && lastNum && symbol){
        display.innerText = operate(firstNum, symbol, lastNum);
        lastNum = null;
        firstNum = display.innerText;
        symbol = currentOperator;
    }
}));

numbers.forEach(number => number.addEventListener('click', () => {
    const currentNumber = number.innerText;
    if(!firstNum && !symbol && !lastNum){
        firstNum = currentNumber;
        display.textContent = currentNumber;
    } else if(firstNum && !symbol && !lastNum){
        firstNum += currentNumber;
        display.textContent += currentNumber;
    } else if(firstNum && symbol && !lastNum){
        lastNum = currentNumber;
        display.textContent = currentNumber;
    } else {
        lastNum += currentNumber;
        display.textContent += currentNumber;
    }
    

}));

//next step 

// make a function to update display and variables

