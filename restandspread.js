

// REST AND SPREAD OPERATOR
// ...
// REST OPERATOR ...
// USED IN DESTRUCTURING TO COLLECT REMAINING VALUES

const countries = ["Brazill", "Russia", "Japan", "Togo", "Portugal"];
const [first,,, ...others] = countries;
console.log(others);

const user = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    isMarried: true,
};

const { isMarried, age, ...propertiesLeft} = user;

// spread operator operator ...
// used in unpacking values
// ===
const updatedUser = {
    ...user,
    country: "Nigeria",
};
console.log(updatedUser);

const developingCountries = ["Mali", ...countries, "Iran", "India"];
console.log(developingCountries);

const nums = [5, 7, 9, 3, 7];
console.log(Math.max(...nums)); // math.max(5, 7, 9, 3, 7)

// optional chaining
user?.profilePicture;

// <img src = user.profilePicture />
// nullish coalescence - to provide default values if a variable evaluates to null or undefined

const profilePicture = null;

console.log(profilePicture || "default avater");




