
// TYPE CONVERSION - converting a datatype to another data type

// const first = prompt ("Enter First Number: ");
// const second = prompt ("Enter Second Number: ");
// const total = parseInt(first) + parseInt(second); 



// console.log(first, second);
// console.log(total);


// convert from string to number using parseInt or Number e.g
const mystr = "92";
console.log(typeof mystr);

// const converted = parInt(mystr);
const converted = Number(mystr);

console.log(typeof converted);


//converting numbers to string
const myNum = 76;
console.log(typeof myNum);
//String
const converted2 = String(myNum);
console.log(typeof converted2);

// example 
const first = "10";
const second = "10";
const total = parseInt(first) + Number(second)
console.log(total);

// TYPE COERCION (force)
const a = "5";
const b = "3";

console.log(a + b); // concatenation 53
console.log(a - b); // 5
console.log(a / b);// 2
console.log(a * b); // 50
console.log(a - b - b + b * 2); //5

//NaN-- means Not a number

