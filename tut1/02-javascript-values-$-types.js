/*
Javascript has built-in data types

These built-in types are as follows
- String
- Number
- Boolean
- Null and Undefined
- object &
- symbols (ES6)
*/

// Javascript provides a *typeof* opertor that can examine a value and tell what type it is:
// Take a look at the following javascript data/value types

var a;
typeof a;	// "undefine" - this is because ( a ) is just a declared variable that has not been assigned a value hence no value type


var a= "Hello world";
typeof a;	// "string"	- use quotes, whether single or double to make a string value


var a= 42;
typeof a;	// "number"


var a= true;
typeof a;	// "boolean"


var a= null;
typeof a;	// "object" - this a bug in javascript but t has it importance


var a= undefined;
typeof a;	// "undefined"


var a = {
    b: "c",
    j: "42"
};

typeof a;	// "object" -

var a = [1, 2, 'a', 6, 'c'];
typeof a;   // "object"

// In the snippets above the typeof used against a - is not actually asking for the type of the letter a
// rather it is asking for the typeof value stored in the a variable.

/*
Note where a = undefined.
We're explicitly setting a to undefined value, but that is behaviorally no different from a variable that has no value set yet.
like the var a; line at the top of the snippet.
A variable can get to this "undefined" value state in several different ways, including functions that return
no values and usage of the void operator
*/
