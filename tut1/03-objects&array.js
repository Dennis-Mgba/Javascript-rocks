// Object

var person = new Object();

person.name = 'Dennis';
person.age = '28';
person.profession = 'Programmer';

console.log(person); 	// { name: 'Dennis', age: '28', profession: 'Programmer' }


/* 1.
Object type refers to a compound value where you can set properties so each can hold their own value of any type.
This is perhaps one of the most useful value types in all of javascript.
*/

var obj  {
	a: "Hello world",
	b: 42,
	c: true
}

// To get at the values stored the key/properties

obj.a;	// "Hello world"
obj.b;	// 42
obj.c;	// true


/* 2.
The properties can either be accessed with dot notation (.) or bracket []
The dot notation is short and easy to read, it is more preferable

The bracket notaton is more useful if you access a propertykey but the name is stored in another variable such as
*/

var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

obj [b];	// "hello world"
obj ["b"]	// 42



// 3.
var person = {
  firstName : "Dennis",
  lastName  : "lorde",
  age       : "25",
   children : ['Sylvia', 'George', 'Bernard'],
   address : {
     street : '26 richard str. ajao estate',
     city   : 'Lagos',
     state  : 'NG'
   }
}

// console.log(person.lastName);			// "Lorde"
// console.log(person.children[1]); 	  // "George"
// console.log(person.address);  		 //  returns the keys and values in the address object
console.log(person.address.city);		// "lagos"



// 4.
var person = {
  firstName : "Dennis",
  lastName  : "lorde",
  age       : "25",
   children : ['Sylvia', 'Goerge', 'Bernard'],
   address : {
     street : '26 richard str. ajao estate',
     city   : 'Lagos',
     state  : 'NG'
   },
  fullName  : function () {
    return this.firstName +" "+ this.lastName;     // "this" keyword here belong to the parent owner of the object
  }
}

console.log(person.fullName());		// 'Dennis lorde'



// 5.
// object construction
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function() {
  return 'An apple is the color ' + this.color + ' and the shaoe is ' + this.shape;
}

// console.log(apple.color);
console.log(apple.describe());



// 6.
function Fruit (name, color, shape) {
   	this.name = name;
	this.color = color;
    this.shape = shape;
		this.describe = function() {
           return 'A ' + this.name + ' is color ' + this.color + ' and the shape is ' + this.shape;
    	}
  }

var apple = new Fruit ("apple", "red", "round");
var melon = new Fruit ("melon", "green", "round");
// console.log(apple);
console.log(apple.color);
console.log(melon.shape);
console.log(apple.describe());
console.log(melon.describe());



// 7. Nested objects
let card = {
  suit : "Heart",
  value : "Queen",
  player : {
    ply1 : "Dave",
    ply2 : "Nana",
    level : {
      status1 : "Novice",
      status2 : "Rookie",
      status3 : {
        stat1 : "master",
        stat2 : "Pro"
      }
    }
  }
}


console.log(card);
console.log(card.value);
// console.log(card.player);
console.log(card.player.ply2);
console.log(card.player.level.status2);
// console.log(card.player.level.status3);
console.log(card.player.level.status3.stat2);







/*
================================================================
				ARRAY
================================================================
*?
/* 1.
An array is a type of object that holds values (of any type) not particularly in named/key value pair
but rather in nummerically indexed positions.
*/

var arr = [
	"Hello World",
	42,
	true
]

// In javascript the value in an array are been accessed by index - and javascript array are zero (0) based

// 1.
arr = [];
arr[0];
arr[1];
arr[2];

arr.length; 	// 3
typeof arr; 	// "object"


// 2.
var colors = Array('red', 'green', 'yellow');
colors[3] = 'white';	// adding a new item to the array
console.log(colors);

// But what if we don't know the actual number of item in the array - the best way to add an item to an array is using the push methods
var colors = Array('red', 'green', 'yellow');
colors.push('white');	// adding a new item to the array
console.log(colors);


var arr = [];
arr.push([1, 2, 3], ['a', 'b', 'c']);
arr.length; 	// 2 - that is two sets of arrays were pushed into it
typeof arr;

/*
The best and most natural appraoach is to use arrays for numerically positioned value and
use objetcs for named properties
*/

var num = [1, 3, 4, 2];
var num1 = num[2] + num[1];

num.push(num1);
num;	// [ 1, 3, 4, 2, 7 ]


var num = [1, 3, 4, 2, 7, 5];
num.sort();		// will sort the item in the array accordingly
num.reverse();

// Functions
/*
The other object subtype you'll use all over your JS programs is a function
functions are a subtype of objects - typeof returns *function*
*/

function foo() {
	return 42;
}

foo.bar = "Hello world";

typeof foo; 	// "function"
typeof foo();	// "number"
typeof foo.bar; // "string"



// How to empty an array
const myArray = [1, 2, 3, 4, 'five'];

const emptyArr = (arr) => (arr.length = 0);

emptyArr(myArray);
console.log(myArray);
console.log(myArray.length);



// Array of object, nested object, and an array that has an object inseiide
let cards = [
  // index 0
  {
    suit : "Heart",
    value : "Queen",
  },
  // index 1
  {
    level : "Rookie",
    // nested object
    player : {
      ply1 : "Dave",
      ply2 : "Nana",
    }
  },
  // index 2
  [ "Novice", "Rookie", { stat1 : "master", stat2 : "Pro"} ]
  
]


console.log(cards);
console.log(cards[1].player);
console.log(cards[1].player.ply1);
console.log(cards[2][2]);
console.log(cards[2][2].stat2);
