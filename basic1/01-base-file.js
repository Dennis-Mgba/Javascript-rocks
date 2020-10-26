/* we will be looking at the ffg
- variable
- Data types
- Arithmetric operation & expressions
- Comaprision & Operations
- Conditions
- Loops
- Functions
- Arrays
- Objects
- Events
*/

// 1. End a complete code statment with a semi-colon ;

/* 2.
alert(); - output a pop up box on the browser
console.log(); - is to output on the browser console
document.write(); - this is to write on the web page
*/

/*
Variables: are container used for holding data or elements which will be used for an operation or expression.
A variable is made up of
- var keyword
- name identify, which is referred to as the variable name
- assigned value that we want to store in that variable
*/

var myName = "Elizabeth Dennis";
var num = 30;
var boolean = true;
// call or output variable
console.log(myName);


// a variable can be initilized and later assigned a value as below:
var x;
x = 7;


//multiple lne variable
var a = 1;
var b = 2;
var c = 3;

// single line to write  variable
var a = 1, b = 2, c = 3;

//concatnation is done using the plus sign "+"
var number1 = "I love ";
var number2 = 40;
var result = number1 + number2;
//alert(result);


var amount = 99.99;
amount = amount * 2;
amount = "$" + String(amount);

console.log(amount);			// $111.1
console.log(typeof(amount));	// string




// 3. a simple function that outputs the highest number
function maxNum () {
    var nums = [2, 1, 7, 4, 3, 6, 2];
    console.log(Math.max(...nums));
}

maxNum();	//call function
