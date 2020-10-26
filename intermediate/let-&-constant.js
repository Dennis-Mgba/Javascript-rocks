/*
Let and constant are stricter than var when declaring a variable.
After declaring and initializing a variable with let or constant - They are strict enough not to allow you redeclare the same variable
E.g
let foo = 'Hey there';
foo = "Hello";  - will not work

or

const boo = 24;
boo = 100; - will throw and error
*/

// 2.
/*
const will throw in an error if you ony  just declare the variabole with out initializing it
E.g

const bar; - if not only declared and not initialized will throw and error

*/


// let vs var
// 1. Difference in block scoping

if(true) {
  var foo = "Hello Humans";
}
console.log(foo);  // with var the foo variable can be referenced outside the block scope

// For let
if(true) {
  let bar = "Hey Humans";
}
//console.log(bar);  // with let the bar variable cannot be referenced outside the block scope, we'll get bar not defined


/*
Note: That let and scope is strict with block scoping 
*/
