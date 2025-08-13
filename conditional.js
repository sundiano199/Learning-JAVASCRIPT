// CONDITIONAL STATEMENT
// syntax
// if (condition) {
//  action
//  lines of code
//}

if (1 < 2) {
    console.log("Ola");
 }

 let balance = 6000;
 let amount = 2000;

 if (balance >= amount) {
    balance -= amount; //uber
    console.log ("Transaction succesfull, balance is " + balance);
 }

 // determine if the password is long enough ( >= 10 )
 // improve your logic check if the password contains '#' - good password
 const password = "#password1234";
 if (password.length >= 10 && password.includes("#")){
    console.log("Password is good enough");    
}
const age = 19;
if (age >= 18) {
    console.log("You are eligible to vote");
}

// IF ELSE statement
if (9 > 7) {
    console.log("YES");
} else {
    console.log("NO");
}


if (balance >= amount) {
    balance -= amount; //uber
    console.log ("Transaction succesfull, balance is " + balance);
 } else {
    console.log("Insufficient Funds");
    
 }

 const num = 76
 if (num > 0) {
    console.log("It's a positive number");
 } else {
    console.log("It's a negtive number");
 }

 // write an if else statement to determine if a number is odd or even
 // (nums divided by 2 without remainder)
 const num1 = 6;
 if (num1 % 2 == 0) {
    console.log("It's an even number");
    
 } else {
    console.log("It's an odd number");
    
 }
// MULTIPLE ELSE IF

// Overpopulated >= 300, Underpopulated <= 50 and balanced population > 50 and < 300
const censusResult = 500;
if (censusResult >= 300) {
    console.log("OVER POPULATED");    
} else if (censusResult <= 50) {
    console.log("UNDER POPULATED");
    
} else {
    console.log("BALANCED POPULATION"); 
}

// lottery system for a company a b c (winner) d
const usersChoice = "a";
if (usersChoice === "c") {
    console.log("Congratulations");
} else {
    console.log("Try again");
}

// Lottery system for a company 4 choices a (trip to dubai) b (try again) c (car) d (blender)

const usersChoiceB = "a";
if (usersChoiceB === "a") {
    console.log("TRIP TO DUBAI");    
} else if (usersChoiceB === "c") {
    console.log("Car");    
} else if (usersChoiceB === "d") {
    console.log("Blender");    
}else {
    console.log("Try Again");
    
}

// PROGRAM SORTING AGE
const age2 = 12;
if (age2 >= 40 ) {
    console.log("ELDERLY PERSON");    
} else if (age2 >=18) {
    console.log("YOUNG ADULT");    
} else {
    console.log("TEENAGER");    
}

// PROGRAM RATINGS
const ratings = 10;
if (ratings >= 8 ) {
    console.log("GREEN"); 
    
} else if (ratings >= 5) {
    console.log("ORANGE");
    
} else { 
    console.log("RED");
    
}

// PROGRAM MATCH DECISON
let burnley = 1;
let sunderland = 1;
if (burnley > sunderland) {
    console.log("Burnley is the winner");    
} else if (sunderland > burnley) {
    console.log("Sunderland is the winner");    
} else {
    console.log("Ended in draw");    
}

if (burnley === sunderland && burnley + sunderland > 4) {
    console.log("bet win");       
} else {
    console.log("You lose the bet");    
}

if (sunderland > burnley || sunderland > 2) {
    console.log("Bet win");    
} else {
    console.log("Bet lose");
    
}

//
const liverpool = 4;
const mancity = 0;
const liverpoolCorner = 4;
const mancityCorner = 5;
const totalCorners = liverpoolCorner + mancityCorner;

if (liverpool > mancity && liverpool < 4 && totalCorners === 9) {
    console.log("Emmanuel's Bet won");        
} else {
    console.log("Bet lose");    
}