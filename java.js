
// declare number Variables
let operator = '';
let firstNumber = '';
let secondNumber = '';

// select HTML elements and assign variables

let screen = document.getElementById('screenText')

let numberButtons = document.querySelectorAll(".numberButton")
let operatorButtons = document.querySelectorAll(".operatorButton")
let equalsButton = document.getElementById("equalsButton")
let allClearButton = document.getElementById('allClearButton')
// let clearButton = document.getElementById('clearButton')
// let decimalButton = document.getElementById('decimalButton')

// add 'click' listeners to number and operator buttons

numberButtons.forEach((button) => button.addEventListener('click', function(e){
    addNumber(e.target.textContent)
    screen.textContent = `${secondNumber}${operator}${firstNumber}`
}))

operatorButtons.forEach((button) => button.addEventListener('click', function(e){
    addOperator(e.target.textContent)
    screen.textContent = `${secondNumber}${operator}${firstNumber}`
}))

// add activators to buttons

equalsButton.addEventListener('click', calculate) 

allClearButton.addEventListener('click', allClear)

// display clicked number and store it as 'firstNumber'

function addNumber(num){
    firstNumber += num;
    console.log(num)
}

// display clicked operator and store it as 'operator', also reassign 'firstNumber' to
// 'secondNumber'. If previous operator detected, run 'Operate' first

function addOperator(op){
    
    if (secondNumber != ''){
        operate()
        console.log('shunted')
        screen.textContent = Math.round(secondNumber*100)/100
        firstNumber = secondNumber
    }
    operator = op;
    secondNumber = firstNumber;
    firstNumber = ''
    console.log(operator)
}

// activate calculate function

function calculate(){
    console.log('calculate')
    if(operator == ''){
        screen.textContent = 'ERROR'
        console.log('ERROR')
    }
    else{
    operate()
    screen.textContent = ''
    screen.textContent = Math.round(secondNumber*100)/100
    firstNumber = secondNumber
    secondNumber = ''
    operator = ''}
}

// fuction to conduct calculations

function operate(){

    firstNumber = Number(firstNumber);
    secondNumber =Number(secondNumber)

    if (operator == '+'){
        secondNumber += firstNumber;
    } 
    else if (operator == '-'){
        secondNumber -= firstNumber
    }
    else if (operator == 'x'){
        secondNumber *= firstNumber
    }
    else if (operator == '÷'){
        secondNumber /= firstNumber
    }
    else if (operator == '^'){
        secondNumber **= firstNumber
    }
    else return "Error"
    
    console.log(operator)
    console.log(firstNumber)
    console.log(secondNumber)

}

// function to clear all

function allClear(){
    operator = '';
    firstNumber = '';
    secondNumber = '';
    screen.textContent = ''
    console.log('allClear')
}

// Debuging
console.log(firstNumber)
console.log(secondNumber)