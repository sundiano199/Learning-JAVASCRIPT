
// ARRAYS - elements
// [eli1, el2, el3]
const students = ["pios", "sunday", "Emmanuel", "Samuel", "Akins"]
// array properties
// length
console.log(students);
console.log(students.length);
// get element based on position
console.log(students[3]);
console.log(students[students.length - 1]); //last element in array

// change element in an array by using the position
students[0] = "zach";
students[2] = "Emma";
console.log(students);

// array methods 
// add or remove element to/from an array (add-push, unshift) (pop,shift)
// structured DT
console.log(students.push("Ola"));
students.push("Blessing");
students.unshift('Ade');
students.pop(); // remove from end
students.shift(); // removes from the front
console.log(students);

// at, indexOf, lastIndexOf
const nums = ["a", "c", "a", "d", "f", "a", "c"];
console.log(nums.at(0));
console.log(nums.indexOf("c"));
console.log(nums.lastIndexOf("c"));

// includes
console.log(nums.includes("a"));

// extracting portions from an array
// slice(start, end(non-inclusive))
console.log(nums.slice(0, 3));

// concat
console.log(students.concat(["Jane", "Peter"]));

// conversion to a string- toString, join(separator)
console.log(students.toString());

console.log(nums.toString());
console.log(nums.join("-"));

// to check if an array is an array
console.log(Array.isArray([7]));
// to make an array from a string
console.log(Array.from("1234"));

// complex array methods
// higher array methods - because they take another function to tell them what to do
// forEach, map, find, sort, filter, every, some, reduce

const transactions = [1000, -200, 3000, -2500, 600];
const users = ["ade", "john", "peter"];

//forEach - loop through this array - perform an action
transactions.forEach((transactions) => {
    console.log(transactions *2);
    
});

users.forEach((user) => {
    console.log(user.toUpperCase());
    
});

// map - loop through this array - perform an action and returns the new array

const letterFromUsers  = users.map((user) => user.charAt(0));
console.log(letterFromUsers);

const newTransactions = transactions.map((transaction) => transaction / 10);
console.log(newTransactions);

// find and filter
// find returns the first element that passes a search condition
const bestUser = users.find((user) => user.startsWith("a"));
console.log(bestUser);

const greaterThan500 = transactions.find((transaction) => transaction > 500);
console.log(greaterThan500);

// filter - returns every elements that passes a search condition
const aUsers = users.filter((user) => user.startsWith("a"));
console.log(aUsers);

const debits = transactions.filter((transaction) => transaction < 0);
console.log(debits);

// sort - arranges element in an array
console.log(users.sort());

// when using sort with number, we need to write a compare function
const specialNumbers = [11, 2, 3, 22, 34, 14, 1];
const lowToHigh = specialNumbers.sort((a, b) => a - b);
console.log(lowToHigh);
const highToLow = specialNumbers.sort((a, b) => b - a);
console.log(highToLow);

// every some reduce

//every checks all
const allGreaterThan10 = specialNumbers.every((num) => num > 10);
console.log(allGreaterThan10);

// some checks and return if there's any true or false
const someGreaterThan10 = specialNumbers.some((num) => num > 10);
console.log(someGreaterThan10);

//reduce --accumulates value in an array into one (number)
const cartPrices = [10, 70, 20, 20];
// a -accumulator, b - current value
const totalPrice = cartPrices.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(totalPrice);


// split
let myName = "Banana is healthy";
console.log(myName.split(" "));



























