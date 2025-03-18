// Function to use in calculator 

// Add function
const add = function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Subtract function

const subtract = function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

// Multiply function 

const multiply = function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

// Divide function 

const divide = function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

// Operate function

const operate = function operate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+": return add(firstNumber, secondNumber);
        case "-": return subtract(firstNumber, secondNumber);
        case "*": return multiply(firstNumber, secondNumber);
        case "/": return divide(firstNumber, secondNumber);
        default: return firstNumber;
    }
}

const resultShow = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
let p = document.querySelector("p");  
let clear = document.querySelector("#clear");
let firstNumber = "";
let secondNumber = "";
let operator = null;
let itsFirstNumber = true;
const arrOperators = ["+", "-", "*", "/", "="];


function clearNumbers(button) {
    button.addEventListener("click", function () {
        firstNumber = "";
        secondNumber = "";
        operator = null;
        p.textContent = "";
        itsFirstNumber = true;
        return;
    })
}

buttons.forEach(button => button.addEventListener("click", function() {
    const value = button.textContent;
    if(button.id === "clear") return clearNumbers(clear);
    
    if(!isNaN(value)) {
        if(itsFirstNumber) {
            firstNumber = value;
            itsFirstNumber = false;
        } else if(!operator) {
            firstNumber += value;
        } else {
            secondNumber += value;
        }
        p.textContent += value;
    }

    if (arrOperators.includes(value)) { 
        if (value === "=") { 
            if (firstNumber !== "" && secondNumber !== "" && operator) {
                const num1 = Number(firstNumber);
                const num2 = Number(secondNumber);
                const result = operate(num1, operator, num2);
                p.textContent = result; // Display result
                firstNumber = result.toString();
                secondNumber = "";
                operator = null;
            }
        } else {  
            if (firstNumber !== "" && !operator) {
                operator = value;  
                p.textContent += " " + operator + " ";
            }
        }
    }

}));