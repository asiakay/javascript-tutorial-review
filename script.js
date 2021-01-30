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

// Concatenating strings
console.log("Hello! My name is " + name + "! I am " + age + " years old. I gave it a rating of " + rating + "." );






