/*
Coding is like wrting a story, you can write great codes if you understand the syntax and structures
Computer reads code from top to bottom, just structure you code to make sense.
*/


// Loops used a condition to determine if the loop will continue - so loop is used to render data fetched a row of data from a database
// For loop
// for (setup; comparison; change){
//     code to be excuted
// }
// 1.
for (var i = 0; i <= 10; i++) {
  console.log('I have got ' + i + ' reasons to continue')
}

// 2.
for (let i = 0; i <=5; i++) {
  console.log("i is " + i + " here");
}

// 3.
var cars = ["BMW", "Volvo", "Saab", "Ford"];    // looping array
var i = 0;
var text = "";
for (i; i < cars.length; i++) {
  text += cars[i] + " ";           // 'BMW Volvo Saab Ford '
}


// While loop
// 1.
var text = "";
var i = 0;
while (i <= 10) {
  text = "This is number " + i;
  console.log(text);
  i++;
}


// 2.
var count = 0;
while(count < 10) {
  console.log('Hey there');
  count++;
}

// 3.
var times = 0;
while(times <= 10) {
  console.log("I tried it " + times);
  times++
}



// do ... while
var text = ""
var i = 0;

do {
  text = "The number is " + i;
  console.log(text);
  i++;
} while (i < 10);


// 2.
var count = 0;

do {
  console.log('This is a do while loop');
  count++
} while (count <= 5);


// 3.
var times = 0;
do {
  console.log('I tried it ' + times);
  times++
}while(times <= 5);



// forEach - this is used for array
var numbers = [33, 35, 54, 76, 21, 16];
// numbers.sort();
numbers.forEach(function(number){
  console.log(number);
})

var mylist = ['apple', 'banana', 'mango', 'grape'];
mylist.forEach(function(value, index){
  // console.log('I have ' + value + ' in my shopping bag');
});




// function with for loop and if else statement
function seasons(num) {
  for( let count = num; count <=10; count++) {
 if (count == 1 || count == 0) {
    console.log("I have " + count + " orange in  the bag");
   } else {
    console.log("I have " + count + " oranges in  the bag");
   }
  }
}

seasons(0);




/*
==============================================================
        Looping through array
==============================================================
*/
// 1.
let cars = ['Toyota', 'Kia', 'Benz', 'Honda'], text = '';
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}



// 2.
var myWishes = "" ;   // initilise and put an empty string
var wishes = ["To be a very good software dev", "To be sucessful", "To get married to te'amo", "To have a great and peaceful family", "To help and be a blessing to people"];

for (var i = 0; i < wishes.length; i++){
  myWishes += wishes[i] + "\n ";		// define the variable
}
// myWishes;



// 3. While Loop
// let's look at how while loop will do the same thing as the for loop
let bestColours = "" ;   // initilise and put an empty string
let colours = ["White", "red", "grey", "black"];
let j = 0;
while (j < colours.length){
  bestColours = bestColours + colours[j] + "\n";
  j++;
}
bestColours;





/*
==============================================================
        Looping through object
==============================================================
*/

let txt = "";
let person = {
  fname : "John",
  lname : "Doe",
  age : 25
};

for (let x in person) {
    txt += person[x] + " ";
}
