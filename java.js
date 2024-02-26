function add(array) {
    return array.reduce((a,b) => a + b)
      
  };
  
function subtract(array) {
    return array.reduce((a,b) => a - b)
      
};

function multiply(array) {
    return array.reduce((a,b) => a * b);
  
};

function divide(array) {
    return array.reduce((a,b) => a / b);
  
};

let operator = 'add';
let firstNumber = '1';
let secondNumber = '2';

function operate(operator, firstNumber, secondNumber){
    if (operator == 'add'){
        return add(firstNumber, secondNumber)
    } 
    else if (operator == 'subtract'){
        return subtract(firstNumber, secondNumber)
    }
    else if (operator == 'multiply'){
        return multiply(firstNumber, secondNumber)
    }
    else if (operator == 'divide'){
        return divide(firstNumber, secondNumber)
    }}
    
console.log(operate('add', [1, 2]))



let screen = document.getElementById('screenText').innerHTML = (operate('divide', [3, 2]))

