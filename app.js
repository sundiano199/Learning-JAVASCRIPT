// JAVASCRIPT FUNCTION
// Reuseable blocks of code that can perform a specific task or return a value
// call or invoke the function

// a function that welcomes our users when they sign in

function welcomeUser() {
  console.log("Welcome User");
}

// calling a function
welcomeUser();
welcomeUser();
// functions with parmeters - values that are passed to functions
function welcomeUser2(user) {
  console.log(`Welcome ${user}`);
}
welcomeUser2("Season");
welcomeUser2("Daniel");
welcomeUser2("Ola");

//default parameters
function welcomeUser3(user = "Anonymous") {
  console.log(`Welcome ${user}`);
}

welcomeUser3();

// return keyword
// function that return the addition of two numbers
function add(a, b) {
  return a + b;
}
let sum = add(10, 12);
console.log(sum);

// function that returns the product of two numbers
function product(num1, num2) {
  return num1 * num2;
}
console.log(product(67, 3));
// function that returns the naira equivallent of a dollar amount passed into it
// 10 dollars will give you (10 * 1600) naira
// $1 = 1600
function convertToNaira(dollarAmount) {
  return `${dollarAmount} dollars will give you ${dollarAmount * 1600} Naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));

// write a function that returns the avg of 3 numbers
function calcAverage(n1, n2, n3) {
  const avg = (n1 + n2 + n3) / 3;
  return avg;
}
console.log(calcAverage(21, 3, 6));

// Example calculate Age
function calcAge(number1) {
  return 2025 - number1;
}
console.log(calcAge(2020));

// writ a function to check if a withdraw is possible or not
let balance = 2000;
function withdrawalAmount(amount) {
  if (balance >= amount) {
    balance -= amount;
    return "Transaction Successful";
  } else {
    return "Insufficient funds";
  }
}
console.log(withdrawalAmount(1800));
console.log(balance);
console.log(withdrawalAmount(1000));

function depositAmount(amount3) {
  balance = balance + amount3;
  return balance;
}
console.log(depositAmount(4000));

// RETURN KEYWORD
// Any code after return is inaccessible code
function example() {
  console.log("okay after return");
  return "hello";
  //unreachable code
}
example();

// Character return
function charReturn(word) {
  return word.charAt(0);
}
console.log(charReturn("goat"));

// Example fullname
function fullName(name1, name2) {
  return name1 + " " + name2;
}
console.log(fullName("Emmanuel", "Sunday"));

//Example longest string
function longestString(string1, string2) {
  if (string1.length > string2.length) {
    return `${string1} is the longest`;
  } else if (string2.length > string1.length) {
    return `${string2} is the longest`;
  } else {
    return `It's equal`;
  }
}
console.log(longestString("Admin", "Admin2"));

// function expression - treats functions like variables
// function expression that returns the square of a num
const squareNumber = function (num) {
  return num ** 2;
};
console.log(squareNumber(7));
//function expression that converts number of days to weeks 21
const daysToWeeks = function (days) {
  return days / 7;
};

// arrow function(modern)
// arrow function that returns
const difference2 = (n1, n2) => {
  return n1 - n2;
};
// shorten arrow functions (only a line inside of the block of code)
const difference = (n1, n2) => n1 - n2;
console.log(difference(9, 6));

//HOISTING- behaviour in JS where function declarations are moved to the top before the code is executed
hoistedFunc(); // this is working because of hoisting
function hoistedFunc() {
  console.log("I am a func dec");
}

// example max of 2 numbers
const getMaxNum = (numb1, numb2) => {
  if (numb1 > numb2) {
    return numb1;
  } else if (numb2 > numb1) {
    return numb2;
  } else {
    return `Equal`;
  }
};
console.log(getMaxNum(40, 40));

const capLetter = (str1, str2) => str1.toUpperCase() + " " + str2.toUpperCase();
console.log(capLetter("Ade", "Taye"));

// example elgibility
let savings = 2000;
const checkLoanEligibility = (amount) => {
    if (amount > (savings * 2)) {
        return `Your are not eligible`
    } else {
        return `You are eligible`
    }
}
console.log(checkLoanEligibility(4000));

// Example str
const containSubstring = (str, substr) => str.includes(substr) 
console.log(containSubstring("Emmanuel", "Emma"));

//Example minutes to seconds
const minToSec = (minutes) => minutes * 60;
console.log(minToSec(3));
