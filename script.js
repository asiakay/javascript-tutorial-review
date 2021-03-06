// TO DO Learn Node.JS to use JavaScript on the Server.. 
// TO DO Learn React Native for games, Angular, Vue for interactive UI Design
/*
 Review
 Variables & Data Types
 Arrays
 Object Literals
 Methods for strings, arrays, objects, etc
 Loops - for, while, for...of, forEach, map
 Conditionals (if, ternary, & switch)
 Functions (normal & arrow)
 OOP (prototypes & Classes)
 DOM Selection 
 DOM Manipulation
 Events
 Basic Form Validation

*/
/*
https://m.youtube.com/watch?v=PkZNo7MFNFg&t=14s
// open the console in chrome
// command + option + J (mac) control + shift + J (windows)  the 
// write hello world to console;
*/
//start
console.log("hello world");
//end
/* The console is an object, providing access to the browser's debugging console https://developer.mozilla.org/en-US/docs/Web/API/console
*/

/* let and const have block level scope, but const returns an error if it's value is changed. Also, const cannot be used unless it is initialized with a value. Let is best used when the variable value is expected to change like the score of a game. https://developer.mozilla.org/en-US/docs/Web/API/console
*/

/*let age = 39;
age = 40;
console.log(age);
*/

//Datatypes- Data is directly assigned to memory
/*
strings
numbers
booleans
null 
undefined 
Symbol
*/
const name = "Leesa"; // ("Leesa") a string constant
let age = 37; // (37) number: let "lets go"
const isCool = true; // (true) boolean: true or false
let rating = 4.9; // (4.9) number. decimals are numbers
const x = null; // (null)
const y = undefined; // (undefined)
let z; // "undefined" because z has not defined a value.

console.log(typeof name + " " + typeof age + " " + typeof rating); // (string number string)

// Concatenating strings method 1
console.log("Hello! My name is " + name + "! I am " + age + " years old. I gave it a rating of " + rating + "." );

// Concatenating strings method 2 template literals `${varName}`
console.log(`My name is ${name} and I am ${age} years old.`);

// counting the number of characters in a string
const s = "Hello World!";
console.log(s.length); // (12)
// Changing string output to uppercase letters method
console.log(s.toUpperCase());//("HELLO WORLD!")
// Changing string output to lowercase letters method
console.log(s.toLowerCase());//("HELLO WORLD!")
// pulling a sub string from the main string 
console.log(s.substring(0,5));//("Hello") displays substring characters from 1st position to 5th position
// Adding / Applying methods on methods 
console.log(s.substring(0,5).toUpperCase()); // ("HELLO")
//Splitting string into an array method
console.log(s.split("")); // ([ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!' ])

// Creating an array from a (CSV) comma separated list of values in a string  
const str = "Atlanta, Boston, Chicago, Denver, Indianapolis, Kansas City, Miami, Oklahoma City, Portland, Raleigh, San Francisco, Washington DC" // The comma + the space in between the text is identified as the separator 
console.log(str.split(", ")); 
/* 
[ 'Atlanta',
  'Boston',
  'Chicago',
  'Denver',
  'Indianapolis',
  'Kansas City',
  'Oklahoma City',
  'Portland',
  'Raleigh',
  'San Francisco',
  'Washington DC' ]
  */
  // Creating arrays from CSV's are  useful for inserting into values into databases 

  /* Arrays: Variables that hold multiple values
  */

  // Creating an pre-populated array using the array constructor method syntax "new Array()"
  const arrayConst = new Array(5,4,3,2,1);
  console.log(arrayConst);

// Creating an array with bracket notation []
// If the values being stored in the array are strings, then they need to have quotation marks around each value, between each comma.
const codingLanguages  
= ["HTML5", "CSS", "JavaScript"]; 
//"C#", "HTML5", "JavaScript", "ECMA", "ES6",// "Node.js", "PHP", "Python", "React", //"SQL"]; 
console.log(codingLanguages);
// Accessing one value in an array
console.log(codingLanguages[1]);// (CSS) Because our ways are based on the zero index
// Adding on to the end of an array 
codingLanguages[3] = "C#";
console.log(codingLanguages);//([ 'HTML5', 'CSS', 'JavaScript', 'C#' ])
// Adding on to the end of an array using the push method - Adds the new value onto the end of the array no matter how many values are already in there.  
codingLanguages.push("SQL"); // ([ 'HTML5', 'CSS', 'JavaScript', 'C#', 'SQL' ])
console.log(codingLanguages); // 
// Adding onto the beginning of an array 
codingLanguages.unshift("Python");
console.log(codingLanguages); // [ 'Python', 'HTML5', 'CSS', 'JavaScript', 'C#', 'SQL' ]
// Popping the last value off of the array 
codingLanguages.pop(); 
console.log(codingLanguages); // [ 'Python', 'HTML5', 'CSS', 'JavaScript', 'C#' ]
// Checking to see if something/ variable/ parameter is an array method
console.log(Array.isArray(codingLanguages)); // (true)
console.log(Array.isArray("hello")); // (false) because paramater being evaluated by the method is a string, not an array.
// Getting the array index of a value method
console.log(codingLanguages.indexOf("JavaScript"));

// Object literals https://m.youtube.com/watch?v=hdI2bqOjy3c&t=1809s About a third of the way through the tutorial now