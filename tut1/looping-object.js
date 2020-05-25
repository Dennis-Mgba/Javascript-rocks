// 1. Loopig through object
let person, x;
person = {
   "name":"John",
   "age":30,
   "car":null
};

for (x in person) {
 console.log(x);
}



// 2. Looping  through array
let myObj, i, x;

myObj = {
 "name":"John",
 "age":30,
 "cars":[ "Ford", "BMW", "Fiat" ]
};

// for (i in myObj.cars) {
//  x += myObj.cars[i] + " ";
// }

// using for loop
for (i = 0; i < myObj.cars.length; i++) {
 x += myObj.cars[i] + " ";
}

console.log(x);



// 3.
