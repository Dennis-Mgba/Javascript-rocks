/*
================================================================================
                            Rest parameter
================================================================================
*/

/* 1.
Rest parameters - allows a function to store multiple arguments in a single array
Like using an array as an argument/parameter in a function
*/
function sendCards(...allCardsIds) {
  allCardsIds.forEach( id => console.log(id) ); // to loop through the array parameter and log out each item
}

sendCards(100, 200, 250);


/*
================================================================================
                            Destructuring array
================================================================================
*/
/* 2.
Destructuring array - used when you want to spread out the items in an array into individual variable representation
It a quick way to assign array elements to variables.

Note: we use block to destructure arrays
*/
let carIds = [1, 2, 5];
let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);

// 2.b
let carIds = [1, 2, 5];
let car1, remainingCars;
[car1, ...remainingCars] = carIds;
console.log(car1, remainingCars);



/*
================================================================================
                            Destructuring Object
================================================================================
*/

// 3. Note: we use curly braces to destructure objects
let car = { id: 5000, style: 'convertible' };
let { id, style } = car;
console.log(id, style);



/*
================================================================================
                      Spread syntax - ... is a spread operator
================================================================================
*/
function startCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}

let carIds = [1, 2, 3]; // an array
startCars(...carIds);  // ... is the spread operator


// 3b.
function startCars(car1, car2, car3, ...rest) {  // the rest here will put any other item after the first 3 in an array
  console.log(car1, car2, car3, rest);
}

let carIds = [1, 2, 3, 4, 5, 6, 7, 8, 9] // an array
startCars(...carIds);  // ... is the spread operator


// 3c.
function startCars(...rest) {  // the ... will spread the elements in an array
  console.log(rest);
}

let carIds = [1, 2, 3, 4, 5, 6, 7, 8, 9] // an array
startCars(...carIds);
