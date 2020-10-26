/*
================================================================================
                          Array iteration
================================================================================
*/
// 1.
let carIds = [
  { carId : 123, style : 'sedan'},
  { carId : 456, style : 'convertible'},
  { carId : 789, style : 'sedan'},
];

// carIds.forEach( car => console.log( car ));
carIds.forEach((car, index) => console.log( car, index));



// 2.
// Array filter
let convertibles = carIds.filter(
  car => car.style === 'convertible'
);
console.log(convertibles);    // [ { carId: 456, style: 'convertible' } ]


// 3.
// Array Testing
let result = carIds.every(
  car => car.carId > 0  // checking if there are item in the array or not - it will return true if there an item available in the array
);
console.log(result);    // true


// 4.
// Locate the first march of
let car = carIds.find(
  car => car.carId > 500  // find the item with carId greater than 500
);
console.log(car);    // { carId: 789, style: 'sedan' }
