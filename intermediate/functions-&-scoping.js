/* 1. function scope - what illustrates the events of function scope is the position of a variable, thus this phenomenum leads to the expressions of gobal and local
variable
*/
// Illustrations

// 1.
function startCar(carId) {
  let message = 'starting ...';
  let startFn = function turnKey() { // the turnKey function does not have  variabe message declared
    console.log(message);  // trying to log (message) from with in the turnKey() function, javascript will search for all the possible places that message
                          // is been declared. Since it did not find the message varaible declared in the turnKey function scope, it will look in the parent
                         // environment which is the startCar() function and since it can find it there it references it and output the value assigned to
                        // the message variable which is 'starting ...'
  };
  startFn();
}
startCar(123);  // 'starting ...'



// 2.
function startCar(carId) {
  let message = 'starting ...';

  let startFn = function turnKey() {
    let message = 'Over ride';
  };
  startFn();
  console.log(message);  // trying to log the message varibale here despite have redeclaring the message with a new value called over ride.
                        // We will still get 'starting ...' because the first declared message with value starting ... is available with
                        // the startCar() function scope environment that we are trying to log message from
}
startCar(123);



// 3.
function startCar(carId) {
  let message = 'starting ...';

  let startFn = function turnKey() {
    let message2 = 'Over ride';
    console.log(message2);              // 'over ride'
  };
  startFn();
  console.log(message);               // 'starting ...'
}
startCar(123);



/*
Note: for block scoping concept, the startCar function scope environment can only access the varaibale elements declared with it's code block and outside
it code block which is it's paarent environment but it cannot access the variable elements declared within another function code block.
So any variable declared outside a function code block loosely said to be global varible because it is declared in the gobal environment
and it can be accessed within any function
thus any variable declared within a function is said to be a local varibale and it is only available to that function and it's inner function but that variable become
a gobal variable to that inner fucntion. while any variable declared within the inner is a local varibale because it is only available to that inner function's local
environment
*/

// 4.
let availHere = 'Hey earthlins';

function startCar(carId) {
  let message = 'starting ...';

  let startFn = function turnKey() {
    let overHere = 'Over ride';
    console.log(availHere);         // referencing the availHere variable - because it is in the gobal environment
  };
  startFn();
}
startCar(123);          // calling this function will output - 'Hey earthlins'



/*
================================================================================
                            Block Scope
================================================================================
*/
/*
By block scope we means code block. Hence we are talking about the life times of variables as they exist within curly braces that could be for an if statement,
a while loop, a for loop or any set of curly braces other than a function.
*/

if(5 == 5) {
    let message = 'Hi there';
}

console.log(message);   // using the let keyword, this will output 'undefined' because let is strict with block scoping


// b. hence
let message = 'Outside';

if(5 === 5) {
    let message = 'Inside';
    console.log(message);      // output = 'Inside'
}
console.log(message);           // output = outside



// c. - but the var keyword is loose for block scoping
if(5 == 5) {
    var message = 'Hey humans'; // using var will hoist the varaible and it will seem as if it was moved to the top of the code block for it to be refrenceable
}

console.log(message);   // will output - Hey humans
