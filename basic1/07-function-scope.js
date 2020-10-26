/*
Coding is like wrting a story, you can write great codes if you understand the syntax and structures
Computer reads code from top to bottom, just structure you code to make sense.


You use the "var" keyword to declare a variable that will belong to the current function scope
or  the global scope if at the top level outside of any function
*/


// Scope - The scope technically called lexical scope/environment, the scope is sort influence/determined
// by the environment it finds it's self as regard to a function.
// when a variable is declared inside a function code block, that environment is calld a local scope
// when a variable is declared outside a function code block, that environment is called a global scope

// Local scope/envioment

function one() {
	// this 'a' variable only belongs to the 'one()' function enviroment
	var a = 1;
	console.log(a);
}

one();



// 2.
function two() {
	// this 'a' variable only belongs to the 'two()' function enviroment
	var a = 2;
	console.log(a);
}


two();
one();




// Scope can be nested inside another scope, 
// Just like if a clown at a birthday party blows up one balloon inside another balloon
/* If one scope is nested inside another, the code inside the instrument scope can access 
variables from  either scope - that is from it's environment an the outer function environment
*/


function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// access both 'a' and 'b' variables
		console.log(a + b); 
	}

	inner();

	// still in the outer function environment
	console.log(a);
}

outer();	// 3, 1




// Note: A function can only be called outside of it's own code block 
/*
Lexical scope rules say that code in one scope can access variable of either it's own enviroment
scope or any scope outside it (that is made available to it as a gobal variable.
But a code can not access the variable inside another function.

So, code inside the inner() function has access to both variable 'a' and 'b' 
- 'b' it's local varible and 'a' is available to it as a global variable
But code in the outer() has access only to 'a' it cannot access 'b' which 
*/

// Recall
const RATE = 25;		// this is a gobal scope and it's accessible inside the function

function calSimpleInterest(principal, time) {
	interest = principal * (1 + (RATE * time));
	return interest;
}

total = calSimpleInterest(100, 2);

console.log("$" + total);







/*
 	Nested Scopes 
When you declare a variable, it is available any where in thaty scope, as well as any lower/inner scope
*/

function foo() {
	var a = 1;

		function bar() {
			var b = 2;

				function  lan() {
					var c = 3;

					console.log(a, b, c); 	// 123
				}

				lan();			// can only call a function outside of it's own code block

				console.log(a,b);	// 12
		}
		bar();

		console.log(a);		// 1
}

foo();

/*
Notice that c is not available inside of bar(), because it's declared only inside the inner lan() scope
and that b is not available to foo() for the same reason.
*/



// If you call the nested function like so below - javascript will through ad error

function foo() {
	var a = 1;

		function bar() {
			var b = 2;

				function  lan() {
					var c = 3;

					console.log(a, b, c); 
				}				

				console.log(a,b);	
		}
		console.log(a);		
}

lan();
bar();
foo();



// Let's study this

function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;

			console.log(a + c);
		}
	}
}

foo();	// 5 7 9

/*
Because of using  let instead of var, b will belong only to the f statement and thus not to the whole foo() function's scope
Similarly. c belongs only to the while loop.
Block scoping is very useful for managing your variable scopes in a more fine=grained fashion,
which can make your code much easier to maintain over time
*/