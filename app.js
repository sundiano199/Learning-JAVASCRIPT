
let  teamA = 96 + 108 + 89;
let teamB = 88 + 91 + 110;
let teamAavg= teamA / 3;
let teamBavg = teamB/ 3;

if (teamAavg > teamBavg) {
    console.log("Team A wins with an average score of " + teamAavg);    
}  else if (teamBavg > teamAavg) {
    console.log("Team B wins with an average score of " + teamBavg);
} else {
    console.log("It's a draw");    
}

// Example 2
const item1 = 120;
const item2 = 80;
const item3 = 150;
const totalCost = item1 + item2 + item3;
const balance = 400;
balance >= totalCost ? console.log("You can checkout") : console.log("Insufficient balance");

//Example 3
const movieAge = 18;
const userAge = 20;
userAge >= movieAge ? console.log("You can watch the movie") : console.log("You're  not old enough to watch this movie");

//Example 3
const ticketPrice = 200;
const discountAmount = 30;
const userBalance = 350;
const finalPrice = ticketPrice - discountAmount ;
const member = false; 
member ? console.log("Final price ticket is " + finalPrice) : console.log("Final price is " + ticketPrice);
userBalance >= finalPrice || userBalance >= ticketPrice ? console.log("You can buy the football ticket") : console.log("You do not have enough money for the football ticket");





