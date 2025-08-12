// STRINGS - text characters in double or single quotes
const firstName = 'John'
const lastName = 'Doe'
const middleName = 'Agba'

// STRING PROPERTIES length
console.log(firstName.length, middleName.length);
// string concatenation (joining of strings)
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS - built in js functions that works on strings
// toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// startsWith, endsWith, includes
console.log(fullName.startsWith("Joh"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"))

// replace and replaceAll
console.log(fullName.replace("o", "#"));
console.log(fullName.replaceAll("o", "#"));

const myEmail = "iamdyclef@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toLocaleUpperCase());
console.log(myEmail.replace("@", "*"));
console.log(myEmail.includes("m"));
console.log(myEmail.endsWith("google.com"));

// charAt, indexOf, lastIndexOf
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("c"));
console.log(myEmail.lastIndexOf("i"));

// concat, trim, slice, substring, substr

console.log(fullName.concat(" is my name"))

//trim removes whitespace

const username = "      user001    "
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

// Extract portiond of a string
const surname = 'Brooke'
// slice, substring (start, end (non-inclusive))
console.log(surname.slice(2, 5)); // ook
console.log(surname.substring(1));

// subtr (start, number of characters)
console.log(surname.substr(2, 2));

const myOtherName = "Idan Gan Gan"

// concatenation
const author = 'Chinua Achebe';
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;

// the book things fall apart written by chinua achebe was published in the year 1997

// template literals `${varName}`
const summary = `The book ${bookTitle} was authored by ${author.toUpperCase()}`;


// Chinua Achebe wrote the book things fall apart 
const summary2 = `${author} wrote the book ${bookTitle}`
console.log(summary2);

// quote Tinubu said and i quote 'Let the poor breathe'
const quote = `Tinubu said and i quote 'Let the poor breathe'`
console.log(quote);

// CLASS WORK
const greet = "Hello World";
console.log(greet.toUpperCase());

const topic = "JAVASCRIPT"; 
console.log(topic.toLowerCase());

const greet1 = "Hello";
console.log(greet1.charAt(0));

console.log(greet.substring(6, 11) )


 const cat1 = "I like cats"
 console.log(cat1.replace("cats", "dogs"))

 
 console.log(greet.startsWith("Hello"));

 const vocabulary = "Sokratis Papastathopoulos";
 console.log(vocabulary.length);

const nickName = "Emmanuel"
const favClub = "Chelsea"
const mySelf = `i am ${nickName} and my favourite club is ${favClub}`
 console.log(mySelf);
 
 

















