/*
================================================================================
                       Object function constructor
================================================================================
1. The function constructor should be start with a capital letter
2. The object item are stored in the 'this' keyword - so when refrencing the item, we can use the dot notation like we'll do normally when access item from an object
*/
// 1.
function Fruit (name, color, shape) {
   this.name = name;
   this.color = color;
   this.shape = shape;
  }
// in order to build a new object prototype, we use the 'new' keyword - then store the protoype resultant values in the new variable when creating a new item
let apple = new Fruit ("apple", "red", "round");
let melon = new Fruit ("melon", "green", "round");

melon.shape;
apple.color;



//2.
function Car(id) {  // this a contructor
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    }
}

let carA = new Car(124);
carA.start();




/*
================================================================================
                          prototype
================================================================================
*/

function Car(id) {  // this a contructor
    this.carId = id;
}
// creating a protype function
Car.prototype.start = function() {
    console.log('start: ' + this.carId);
}

let carA = new Car(124);
carA.start();
