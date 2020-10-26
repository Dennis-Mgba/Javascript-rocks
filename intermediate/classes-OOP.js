/*
================================================================================
                        Javascriot Classes
================================================================================
*/
/*
You can use classes to create an instance of an object like

1. Instance of properties - what they can have, contain as in this describes the state of an object  ex like
- name
- age
- height


2. Instance of methods - what they can do
- talk
- run
-jump

A class is a type of function, but instead of using the keyword function to initiate it,
we use the keyword class, and the properties is assigned inside aconstructor() method.
Use the keyword class to create/define/nitialize a class, and always add a constructor() method inside it
*/

// 1. The name given to the class by convention should start with a capital letter.
class Hero {
    constructor (name, level) {
        this.name = name;
        this.level = level;
    }
}


// 2.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
   }
}



// 2b.
class Car {
  constructor(id) {
    this.id = id;
  }
}

let car = new Car(123);
console.log( car.id );      // '123'



// 2c.
class Car {
  constructor(id) {
    this.id = id;
  }
}

let car = new Car();
car.id = 456;
console.log( car.id );      // '456'




// 3.
class Car {
  constructor(brand) {
    this.carName = brand;
  }
}

let myCar = new Car("Ford");
console.log(myCar.carName);     // 'Ford'



// 4. Adding a method fucntion to the constructor
class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a " + this.carName;
  }
}

// creating a new object class
let myCar = new Car("Ford");
console.log(myCar.present());       // 'I have a Ford'



// 5.
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `Hello! ${this.name}, I am at level ${this.level} in the fighting game` ;
        }
  }

let hero1 = new Hero("Lorde", 1);
console.log(hero1.greet());          // 'Hello! Lorde, I am at level 1 in the fighting game'
console.log(hero1.name);            // 'Lorde'



// 6. Adding a method fucntion with an argument to the constructor
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(item) {
    return item + ", I have a " + this.carname;
  }
}

// creating a new object class
let mycar = new Car("Ford");
console.log(mycar.present("Hello!"));   // 'Hello!, I have a Ford'




// 7.
class Rectangle {
    //set up
    constructor (_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color
    }
   calArea() {
        return this.width * this.height;
    }
   printDescription() {
        // return "I am a rectangle with width of " + this.width + " and a height of " + this.height + " also I am " + this.color;
        // using back ticks instead of quotes, we can do - thus no need for the concatenate symbol +
        return `I am a rectangle with width of ${this.with} and a height of ${this.height} also I am ${this.color}`;
    }
  // we have constructed a re-usable class construct above, we can use it to do multiple stuff like so
 }

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(7, 6, "red");

console.log( myRectangle1.calArea() );
console.log( myRectangle2.calArea() );
console.log( myRectangle1.printDescription() );




/*
================================================================================
                   Javascriot Classes: inheritance & extends
================================================================================
*/
// 1.
class Vehicle {
  constructor() {
    this.type = 'car'
  }
  start() {
    return `Starting: ${this.type}`;
  }
}

// extesiate the class
class Car extends Vehicle {

}

let car = new Car();
console.log(car.type);      // 'car'




// 2.
class Vehicle {
  constructor() {
    this.type = 'car'
  }
  start() {
    return `Starting: ${this.type}`;
  }
}

// extentiate the class
class Car extends Vehicle {
  constructor() {
    super();                // using super, we are inheriting the property of the main class constructor
  }

  start(){
    return super.start() + " at the garage";    // inherit the property of the start function in the main class
  }
}

let car = new Car();
console.log(car.type);              // 'car'
console.log(car.start());           // 'Starting car at the garage'


// 3.
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age
  }
  describe() {
    console.log(`I am ${this.name}, I am ${this.age} years old`)
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);
    // custom behaviour
    this.yearsOfExperience = _yearsOfExperience;
  }
  code() {
    console.log(`${this.name} write software codes`);
  }
}

let personA = new Person('Deni', 28); // referenced the class itself
let dev = new Programmer('Dom', 34, 2);    // reference the extentiated/inheritance class

// console.log(personA.describe());  // can refrence the describe() method
// console.log(dev);
// console.log(dev.describe())

// the method function code() was defined in the inheritance class thus it's only the varaible that referenced the inheritance class that will have access to the code() method

// personA.code(); // - won't work
// dev.code();``  // - will work


const devList = [
  // refrence the inheritance class
  new Programmer('Dom', 36, 8),
  new Programmer('Deni', 28, 2)
]

function softwareDev(programmers) {
  for(let devs of programmers) {
    dev.code();        // the instance defined
  }
}

softwareDev(devList);



/*
================================================================================
                   Javascript classes: Getters and Setters
================================================================================
Getters and Setters are used to define methods on a class which are then used as if there were properties
*/
class Sqaure {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }
  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }
  set areaRt(area) {  // we used the method to set what width and height would be what the method is refrenced and area defined
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let bookSquare = new Sqaure(4);
//console.log(bookSquare.area);    // hence area is refrence as a property but not called as a method fuction

// bookSquare.areaRt = 25;
// console.log(bookSquare.width);
// console.log(bookSquare.height);

console.log(bookSquare.area);
console.log(bookSquare.area);
console.log(bookSquare.area);
console.log(bookSquare.area);
console.log(bookSquare.numOfRequestsForArea); // to get the number of times the area method fucntion was called




/*
================================================================================
                        Javascriot Classes: Static methods
================================================================================
A static method does not need an instance of the class to be created in order to be used
*/
class Square {
  constructor(_width) {
    // properties
    this.width = _width;
    this.height = _width;
  }
  // static methods - does not need any reference to the class properties
  static equal(a,b) {
    return a.width * a.height === b.width * b.height;
  }
  static isValidDimensions(width, height) {
    return width === height ? 'Valid' : 'Invalid';
  }
}

let squareA = new Square(8);
// let squareB = new Square(9);
let squareB = new Square(8);
console.log(Square.equal(squareA, squareB));

// console.log(Square.isValidDimensions(6, 6));
console.log(Square.isValidDimensions(6, 8));
