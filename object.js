
//OBJECTS - {key: value, key: value}
// it's descriptive
// can take any data type
const person = {
    name: 'John Doe',
    age: 42,
    complexion: 'Dark',
    isMarried: true,
    friends: ['Jane', 'Peter', 'Susan'],
    description: function () {
        return `My name is ${this.name}, and i am ${this.age} years old`;
    },
    maritalSummary: function () {
        return `${this.name} ${this.isMarried} ? 'is' : 'is not' married`
    }
};
// John Doe is married
console.log(person.description());

console.log(person.maritalSummary());

console.log(person);

// get properties from object, dot notation, bracket notation
// dot notation objectName.propertyName
console.log(person.name);
console.log(person.friends);

// bracket notation objectName["propertyName"]
console.log(person["friends"]);
console.log(person["age"]);

// add new properties to an object using dot notation
person.height = `6'1` // "6'1"
person.gender = "Male"

// add new properties to an object using bracket notation
person["hobby"] = "Swimming"
console.log(person);

// remove properties delete
delete person.complexion;

// Nested objects
const customer  = {
    id: 'Cust-1',
    personalInfo: {
        firstName: 'Peter',
        lastName: 'Pan',
        gender: 'Male',
        dateOfBirth: '1990-06-12',
        nationality: 'Nigeria',
    },
    contactInfo: {
        email: 'peterpan@google.com',
        phone: '+2348012345678',
        address: {
            street: '12, Bode Thomas',
            city: 'Lagos',
            postalCode:'100001',
        }
    },
    accountInfo: {
        cardType: 'Visa',
        accountNumber: '01234,5678',
        accountType: 'savings',
    },
    greeting: function () {
        return `Hello ${this.personalInfo.firstName}, Welcome Back`
    },
    getAddress: function () {
        return `Peter lives at ${this.contactInfo.address.street} street, ${this.contactInfo.address.city}`

    },
};

console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
// adding bank name to the account info
customer.accountInfo.bankName = 'GTBank';
console.log(customer.greeting());
console.log(customer.getAddress());

// object  methods - function declaration written by the dev inside of an obj

// complex data structure
// object destructuring
const book = {
    title: 'Purple Hibniscus',
    author: 'Chimamanda Ngozi Adichie',
    yearPublished: 2003,
    theme: ['Family', 'Religion', 'Freedom'],
    setting: {
        country: 'Nigeria',
        cities: ['Enugu', 'Nsukka'],
        timePeriod: 'Postcolonial Nigeria'
    },
};



const {title, yearPublished, theme, setting:{country}} = book;
console.log(title, yearPublished, theme);