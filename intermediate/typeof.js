typeof(1);                      // number
typeof('boy');                 // string
typeof(false);                // boolean
typeof(function(){});           // object
typeof({});                     // object
typeof(null);                   // object
typeof(undefined);              // undefined

var x = [1, 3, 'girl', false];
typeof(x);                      // object


var y = { Name : 'Whales', age : 14, status : 'student' };
typeof(y);    // objects



// 2. common type conversions
// convert to string
let foo = 4;
foo.toString();

// convert string to integer
let x = Number.parseInt('55');
x;
typeof(x);

// convert string to number
Number.parseFloat('55.99');
