const africanCountries = ["Nigeria", "Tunisia", "Ghana", "Morroco", "Niger"];
console.log(africanCountries.includes("Tanzania"));
console.log(africanCountries.length);
africanCountries.unshift("Kenya");
console.log(africanCountries);
africanCountries.push("Chad");
console.log(africanCountries);
console.log(africanCountries.sort());
console.log(africanCountries.sort().reverse());
console.log(africanCountries.concat(["China", "Japan", "Indonesia"]));
const mCountry = africanCountries.find((country) => country.startsWith("M"));
console.log(mCountry);
console.log(africanCountries.filter((country) => country.length > 5));

const covertedCountry = africanCountries.map((country) => country.toUpperCase())
console.log(covertedCountry);
const check = africanCountries.every((country) => country.includes("p"));
console.log(check)

const myBalance = 5000;
const transactions = [3000, -200, 400, -350, 1000];
console.log(transactions.filter((transaction) => transaction < 0));
const creditTransaction = transactions.filter((transaction) => transaction > 0);
console.log(creditTransaction);
console.log(creditTransaction.some((transaction) => transaction > myBalance));
const availableBalance = transactions.reduce((a, b) => a + b, myBalance);
console.log(availableBalance);











