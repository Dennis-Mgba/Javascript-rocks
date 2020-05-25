/*
Coding is like wrting a story, you can write great codes if you understand the syntax and structures
Computer reads code from top to bottom, just structure you code to make sense.

The result of any comparision is a strictly boolwan vaue (true or false)
*/

// Using tenary operator
var a = 5;
var b = 6;
var c = (a > b) ? 'a is greater than b' : 'a is not greater than b';

console.log(c);



// Conditional statements - if, if...else, if...elseif...else

var a = 23;
var b = 16;

if (23 < 16) {
    return true
} else {
    return false
}


// Conditinal statement includes if, else and elseif

if (a == 2) {
    // do something

} else if (a == 10) {
    // do another thing

} else if (a == 42) {
    // do yet another thing

} else {
    // fallback to here when every other above is not true
}


// Another form of conditional in javascripft is the "conditional operator", often call "ternary operator"
// it's like a more concise form of single if..else staement

var a = 42;
var b = (a > 41) ? "Hello" : "world";   // ie b should be equal to "hello" if "a" is less than 41, else it should be "world" if "a" is not less than 41

// the above code is similar to

if (a > 41) {
    b = "Hello";
} else {
    b = "world";
}


// awesome sauce
var d = () => {
  var a = 5, b = 6, c;
   c = (a > b) ? 'a is greater than b' : 'a is not greater than b';
  return c;
}
d();


// ================
var ACCESSORY_PRICE = 9.99;
var bank_account = 302.13;
var amount = 99.99;

if (amount > bank_account) {
    console.log("I will take the accessory");
    amount = amount + ACCESSORY_PRICE;
    console.log(amount);
} else {
    console.log("No thanks");
    console.log(amount);
}
// No thanks
// 99.99



var ACCESSORY_PRICE = 9.99;
var bank_account = 302.13;
var amount = 99.99;

if (amount < bank_account) {
    console.log("I will take the accessory");
    amount = amount + ACCESSORY_PRICE;
    console.log(amount);
} else {
    console.log("No thanks");
    console.log(amount);
}


/*
This structure above works, but it's a little verbose because you need to specify the a test for each case
Thus, here's another option, the switch statement
*/

switch (a) {
    case 2:
        // do something
        break;
    case 10:
        // do another thing
        break;
    case 42:
        // do yet another thing
        break;
    default:
        // fall back here
}

// note that the break in the switch statemnet is very important



switch (a) {
    case 2:
    case 10:
        // some cool stuff
        break;
    case 42:
        // do other stuff
        break;
    default:
        // fallback
}

// Here if "a" is either 2 or 10, it will execute the "some cool stuff" code statement


var fruit = "apple";
// var fruit = "mango";
// var fruit = "banana";

switch (fruit) {    // switch is another was of running a conditional
  case 'banana':
    console.log('I hate banana');
    break;
  case 'apple':
    console.log('I Love apple');
    break;
  case 'orange':
    console.log('orange is cool');
    break;
  default:
    console.log('I love all other fruits');
    break;
}


// Another switch statment  
let fruit = "apple";

switch (fruit) {
  case 'grape':
      console.log('Grape is $2');
    break;
  case 'banana':
      console.log('Banana is $1.5');
    break;
  case 'apple':
      console.log('Apple is $3');
    break;
  default:
      console.log('All other fruits are $1');
    break;
}
