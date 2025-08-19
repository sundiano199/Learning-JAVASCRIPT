
// MATH OBJECT
// Math
// onstant PI
console.log(Math.PI);

//Methods
//pow, min, max, round, ceil, floor, trunc,random

// power 
console.log(Math.pow(3, 2)); // exponential
console.log(Math.min(23, 4, 2, -98)); // minimum number of a set
console.log(Math.max(-23, -4, -2, -98)); // maximum number of a set

// round, ceil (up), floor (down), trunc (removes)
console.log(Math.round(7.55)); // normal rounding off nums
console.log(Math.ceil(91.2)); // round up
console.log(Math.floor(99.9)); // round Down
console.log(Math.trunc(10.23)); // removes the dp

// random - random pseudo nums between 0 - 1(exclusive)
console.log(Math.random());
// 0 - 10
console.log(Math.trunc(Math.random() * 11));
// 1 - 10

// 1 -20
const randomNumberr = Math.floor(Math.random() *20) + 1;
console.log(randomNumberr);

const customers = ['Ola', 'Blessing', 'Pious', 'Moshood', 'Season', 'Samuel']
// pick a random lucky winner
const randomLuckyWinner = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyWinner]);

// to generate between a minimum and maximum number
const min = 5;
const max = 10;
const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rNum);






