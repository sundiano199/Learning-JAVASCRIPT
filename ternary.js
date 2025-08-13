
// ternary operators
// is another way of writing if else statement

let otpSent = 4587;
let otpEntered = 4578;
if (otpEntered === otpSent) {
    console.log("Transaction completed");
    
} else {
    console.log("wrong OTP, try again");
    
}

// Ternary operator
// condition ? first action : second action

otpEntered === otpSent ? console.log("Treansaction complted") : console.log("Wrong OTP");

let num = 40;
num % 2 === 0 ? console.log("EVEN NUMBER") : console.log("ODD NUMBER ");

let balance = 7000;
let amount = 8000;

balance >= amount ? console.log("Transaction successfull") : console.log("Insufficient fund");

const isMarried = false;
const statement = `He ${isMarried ? "is" : "is not"} married`;
console.log(statement);
