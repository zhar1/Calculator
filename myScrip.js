let firstNum = 0;
let lastNum = 0;
let operator = '';
// function temp(e){
//     console.log(e);
// }
const buttons = document.querySelectorAll('.key');
const display = document.querySelector('.calcScreen');
const operatorArray = ['=', '+', '/', '*', '-'];
//creat nodelist for operators
const opList = document.querySelectorAll('.operator');


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
//variables


//event listeners
opList.forEach(operator => operator.addEventListener('click', () => {
    display.innerText = '';
}));

buttons.forEach(button => button.addEventListener('click', () => {
    // console.log(button.innerText);
    display.textContent += `${button.innerText}`;

}));

//next step 

