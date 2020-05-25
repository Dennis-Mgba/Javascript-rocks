/*
Coding is like wrting a story, you can write great codes if you understand the syntax and structures
Computer reads code from top to bottom, just structure you code to make sense.
*/



// a simple function that outputs the highest number
function maxNum () {
    var nums = [2, 1, 7, 4, 3, 6, 2];
    console.log(Math.max(...nums));
}

maxNum();	//call function


// 2.
function fibonacciNum(nth) {
  var sequence = [0, 1];
  for (var i = 2; i < nth; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence;
}

fibonacciNum(6);


// Note: A function can only be called outside of it's own code block



// We use a function code block to write reusable codes, that can be reused when we call it on a new item
// Function are often used for code that you want to call/reuse multiple times
function printAmount() {
    console.log(amount.toFixed(2));
}
var amount = 99.99;

printAmount();	// 99.99



// Reuse the function above but redefine/redecare variable
function printAmount() {
    console.log(amount.toFixed(2));
}

var amount = 99.99;
amount = amount * 2;	// redefine the variable

printAmount();	// 199.98




// 2. Totally change variable and reuse function

function printAmount() {
    console.log(amount.toFixed(2));
}
var amount = 30.990087136;;

printAmount();


// Notice that in the function code block above, we wrote/defined the function and what it will perform before declaring the variable
// But can declare a variable first before writing a function or also we can declare a variable inside the function. -
// The options of declaring a variable inside a function code block of outsite it, is what is called "function scope"



// function and parameter - the parameter also know as argument is/are variable that we delcare in the function paratthesis
// without assigning a value to it/them yet
function printAmount(amt) {
	console.log(2 * amt.toFixed(2));
}

printAmount(24.99017);	// 49.98



// 2.
function printAmount(amt) {
	console.log(amt.toFixed(2) *2);
}

printAmount(25.0973);	// 50.2



// function and return statement - The return statement are specified system or way that we make a function to output a result

function formatAmount() {
	return "$" + amount.toFixed(2);
}

var amount = 99.99;
var dollarChange = formatAmount();

console.log(dollarChange)	// $99.99


// 2.
function formatAmount() {
	return "$" + amount.toFixed(2) * 2;
}

var amount = 99.99;
var dollarChange = formatAmount();

console.log(dollarChange);	// $199.98



// function with parameter and return statement
function formatAmount(amount) {
	return "$" + amount.toFixed(2) * 2;
}

var dollarChange = formatAmount(25.08);

console.log(dollarChange);	// $50.16





// Also note - That functions can also be useful just to organized related bits of code into named collctions,
// even if you only plan to call them once

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2));		// 107.99



// 2.
const TAX_R = 0.08;

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_R);
	return amt;
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log("$" + amount.toFixed(2)); 	// $107.99



// 3.
const rate = 25;

function calSimpleInterest(principal, time) {
	interest = principal * (1 + (rate * time));
	return interest;
}

total = calSimpleInterest(100, 2);

console.log("$" + total);






// Awesome and weird part of javascript
 // 1. - passing a call back function as an argument
 function addNum(first, second, callback) {
  console.log(first + second);
  callback();
}

addNum(3,5, function() {
  console.log('Done from here');
});



// 2.
function addNum(first, second, callback) {
  console.log(first + second);
  callback();
}

function logDone() {
  console.log('Done');
}

addNum(3,5, logDone);



// 3.
function addNum(first, second, callback) {
  console.log(first + second);
  if(callback) {
    callback();
  }
}

function logDone() {
  console.log('Log this call back when done');
}

addNum(3,5, logDone); // if called with passing in a call back function
addNum(19,20);  // if call with out passing a call back
