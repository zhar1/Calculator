let firstNum = null;
let lastNum = null;
let symbol = null;
// function temp(e){
//     console.log(e);
// }
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.calcScreen');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.getElementById('clear');
const equalsButton = document.querySelector('.equal');
//creat nodelist for operators


//FUNCTIONS
const add = function(a, b){
    return a + b;
}
const subtract = function(a, b){
    return a - b;
}
const multiply = function(a, b){
    return a * b;
}
const divide = function(a, b){
    if(b === 0){
        return 'sike';
    }
    else 
        return a / b;
}

const operate  = function(a, operator, b){
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
const allClear = function(){
    firstNum = null;
    lastNum = null;
    symbol = null;
    display.textContent = '';
}
const equal = function(){
    if(firstNum && lastNum && symbol){
        display.textContent = operate(firstNum, symbol, lastNum);
    }
}



//event listeners 
allClearButton.addEventListener('click', allClear);
equalsButton.addEventListener('click', equal);
operators.forEach(operator => operator.addEventListener('click', () => {
    const currentOperator = operator.innerText;
    if(lastNum){
        firstNum = operate(firstNum, symbol, lastNum);
        lastNum = firstNum;
        symbol = currentOperator;
       
    } else {
        symbol = currentOperator;
        display.textContent = currentOperator;
    }
}));

numbers.forEach(number => number.addEventListener('click', () => {
    const currentNumber = number.innerText;
    if(!firstNum){
        firstNum = currentNumber;
        display.textContent = currentNumber;
    } else if(!symbol){
        firstNum += currentNumber;
        display.textContent += currentNumber;
    } else if(!lastNum){
        lastNum = currentNumber;
        display.textContent = currentNumber;
    } else if(firstNum === lastNum){
        lastNum = currentNumber;
        display.textContent = currentNumber;
    } else {
        lastNum += currentNumber;
        display.textContent += currentNumber;
    }
    

}));

//next step 

