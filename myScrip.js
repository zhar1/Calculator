let firstNum = 0;
let lastNum = 0;
let operator = '';
// function temp(e){
//     console.log(e);
// }
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.calcScreen');
const operators = document.querySelectorAll('.operator');
const allClearButton = document.getElementById('clear');
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
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a, b);
    }
}
const allClear = function(){
    firstNum = null;
    lastNum = null;
    operator = null;
    display.textContent = '';
}



//event listeners 
allClearButton.addEventListener('click', allClear);
operators.forEach(operator => operator.addEventListener('click', () => {
    display.innerText = '';
    display.innerText = `${operator.innerText}`;
}));

numbers.forEach(number => number.addEventListener('click', () => {
    // console.log(button.innerText);
    display.textContent += `${number.innerText}`;

}));

//next step 

