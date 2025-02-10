//Basic Questions Answers related to Variables
//Question 01
let name = "ishu";
console.log("Hello", name);

//Question 02
let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);

//Question 03
var age = 25;
console.log("I am ", age, "years old");

//Question 04
let math = 80;
let english = 60;
let physics = 70;
let total = math + english + physics;
let average = (math + english + physics) / 3;

console.log(total, average);

//Question 05
let stringOne = "My";
let stringTwo = "name";
let string_three = "is";
let string_four = "Israt";

console.log(stringOne, stringTwo, string_three, string_four);

//Basic Questions Answers related to String Methods
//Question 01
let text = "Welcome to the world of Hello!";
let testingSearch = text.search("Hello");
// console.log(testingSearch);
if (testingSearch !== -1) {
  console.log("Hello is found");
} else {
  console.log("Not Found!");
}

//Question 02
let greeting = "Hello";
let yourName = prompt("Enter your name");
let output = greeting.concat(" ", yourName.trim());
console.log(output);

// //Question 03
let yourLanguage = "Python";
let userName = "Sara";
let userYear = 2018;

let finalOutput = `${userName}, you have been coding in ${yourLanguage} since ${userYear}`;
console.log(finalOutput);

// //Question 04
let email = "apurborahman1235@YAHOO.COM";
let lowercase = email.toLowerCase();
// console.log(lowercase);
let check = lowercase.includes("@yahoo.com");
console.log(check);

//Question 05
let num = 100;
if (num % 10 == 0) {
  console.log("Number is divisible by 10.");
} else {
  console.log("Number is not divisible by 10.");
}

//Question 06
let checkEvenOdd = 10;
if (checkEvenOdd % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//Question 07
let input = prompt("Enter a value:");

if (typeof input === "string" && !isNaN(input) && input.trim() !== "") {
  console.log("The input is a number.");
} else {
  console.log("The input is a string.");
}
