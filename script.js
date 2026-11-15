
// TASK 01 - ATM Withdrawal

let balance = Number(prompt("Enter Account Balance"));
let withdrawal = Number(prompt("Enter Withdrawal Amount"));

if (withdrawal <= balance) {
    let remaining = balance - withdrawal;
    alert("Remaining Balance: " + remaining);
} else {
    alert("Insufficient Balance");
}


// TASK 02 - Number Guessing

let guess = Number(prompt("Guess a Number"));

if (guess == 7) {
    alert("Correct Guess!");
} else {
    alert("Wrong Guess!");
}


// TASK 03 - Shopping Discount

let shopping = Number(prompt("Enter Shopping Amount"));
let discount;

if (shopping >= 5000) {
    discount = shopping * 0.15;
} else {
    discount = shopping * 0.05;
}

let finalAmount = shopping - discount;

alert("Discount: " + discount);
alert("Final Amount: " + finalAmount);


// TASK 04 - Login System

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username == "admin" && password == "12345") {
    alert("Login Successful! Welcome Admin.");
} else {
    alert("Invalid Username or Password");
}


// TASK 05 - Electricity Bill

let units = Number(prompt("Enter Electricity Units"));
let bill;

if (units <= 100) {
    bill = units * 10;
} else {
    bill = units * 20;
}

alert("Total Bill: " + bill);


// TASK 06 - Two Numbers Comparison

let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));

if (num1 == num2) {
    alert("Both Numbers Are Equal");
} else {
    if (num1 > num2) {
        alert("Greater Number: " + num1);
    } else {
        alert("Greater Number: " + num2);
    }
}


// TASK 07 - Movie Ticket

let age = Number(prompt("Enter Your Age"));
let ticketPrice = Number(prompt("Enter Ticket Price"));
let ticketDiscount;

if (age <= 12) {
    ticketDiscount = ticketPrice * 0.50;
} else {
    ticketDiscount = 0;
}

let finalPrice = ticketPrice - ticketDiscount;

alert("Discount: " + ticketDiscount);
alert("Final Price: " + finalPrice);


// TASK 08 - Password Verification

let userPassword = prompt("Enter Password");

if (userPassword == "pakistan123") {
    alert("Access Granted!");
} else {
    alert("Access Denied!");
}


// TASK 09 - Restaurant Order

let food = prompt("Enter Food: Burger or Pizza");
let availableBalance = Number(prompt("Enter Available Balance"));
let foodPrice;

if (food == "Burger") {
    foodPrice = 500;

    if (availableBalance >= foodPrice) {
        alert("Order Confirmed!");
        alert("Remaining Balance: " + (availableBalance - foodPrice));
    } else {
        alert("Insufficient Balance");
    }

} else {
    if (food == "Pizza") {
        foodPrice = 1200;

        if (availableBalance >= foodPrice) {
            alert("Order Confirmed!");
            alert("Remaining Balance: " + (availableBalance - foodPrice));
        } else {
            alert("Insufficient Balance");
        }

    } else {
        alert("Invalid Food Item");
    }
}


// TASK 10 - Simple Calculator

let firstNumber = Number(prompt("Enter First Number"));
let secondNumber = Number(prompt("Enter Second Number"));
let operator = prompt("Enter Operator: +, -, *, /");

if (operator == "+") {
    alert("Result: " + (firstNumber + secondNumber));
} else {
    if (operator == "-") {
        alert("Result: " + (firstNumber - secondNumber));
    } else {
        if (operator == "*") {
            alert("Result: " + (firstNumber * secondNumber));
        } else {
            if (operator == "/") {
                if (secondNumber != 0) {
                    alert("Result: " + (firstNumber / secondNumber));
                } else {
                    alert("Cannot Divide By Zero");
                }
            } else {
                alert("Invalid Operator");
            }
        }
    }
}
