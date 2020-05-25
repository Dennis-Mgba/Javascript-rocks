Function foo() {
	// code commands goes here
}

/*
From the function scope above, foo is basically just a variable.
The function itself is a value just like 42 0r [1, 2, 3] would be
Thus a function itself can be a value that is assigned to a variable - or passed - or returned from other function

As such function value should be thought of as an expression - much like any other value expression
*/

// consider
var foo = function() {
	// code commands
};


var x = function bar() {
	// code commands
};


/*
The first function expression assigned to the foo variable is called anonymous - because it has no name
The second function expression is named bar -  even as a refrence to it is also assigned to the x variable

*/


// =============================================================================================================




// Immediately invoked function expression

(function iife() {
	console.log("This is an immediately invoked function");
})();

/*
The outer ( ) that surrounds the function expression is just a nuance of JS which is needed to prevent it from being
treated as a normal function declaration

the final (); on the end of the expression is what actually executes the function expression immediately before it
*/

var x = (function iief() {
	return 42 + 9;
})();

x;	// 51

// The 51 result value gets returned from the IIFE named function being executed and is then assigned to x
