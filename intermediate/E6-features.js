/*
================================================================================
                            Arrow functions
================================================================================
*/
// 1.
let getId = () => 123;
console.log(getId());


//2.
let getId = prefix => prefix + 123;  // prefix is the function argument
console.log( getId('ID: ') );


// 3.
let getUser = (prefix, suffix) => prefix + "Dennis" + suffix;  // prefix and supfix are the function argument
console.log( getUser('User: ', ' - dev') );


// An arrow functon and a tenary conditional statement
let getId = (fig) => (fig > 8) ? 'Aye captain' : 'Negative camptain';
console.log(getId(2));

/*
Arrow function do not have their own "this" value.
'this' refers to the enclosing conetext
*/


/*
================================================================================
                            Function default parameter
================================================================================
*/

let trackCar = function(carId, city= 'NY') {
  console.log(`Tracking ${carId} in ${city}.`);     // using back tick `` makes it possible to use ${ } to insert variables  in place of +
}
console.log( trackCar(123) );               // 'Tracking 123 in NY.' - the default 'NY' defined for city will be outputed when a parameter is not specified for city wihen the function is calledyy
console.log( trackCar(123, 'Dubai') );
