/*
================================================================================
                            'this' keyword
================================================================================
*/
/*
1. In a method, "this" refers to the owner object.
2. Alone, "this" refers to the global object.  In a browser window the Global object is [Window object]:
3. In a function, "this" refers to the global object - in this case it is the global varaible.
4. In a function, in strict mode, "this" is undefined.
5. In an event, "this" refers to the element that received the event.

6. Methods like call(), and apply() can refer this to any object.
*/

// 1. in the context of an object, "this" refers to the owner of the object.
let x = {
  cardId: 123,
  getId: function() {
    // console.log(this); // log out the value of 'this' = { cardId: 123, getId: [Function: getId] }
    return this.cardId
  }
}

console.log(x.cardId);
console.log(x.getId()); // 123



// 1b. - using a special method called call()
let x = {
  carId: 123,
  getId: function() {
    return this.carId
  }
}

let newCar = { carId : 456 };

console.log(x.getId());   // create a new instance of the object
console.log(x.getId.call(newCar));
}


// 1c. apply()  - you can use it to write a method that can be used on different objects.
let x = {
  carId: 123,
  getId: function(prefix) {
    return prefix + this.carId;
  }
}

let newCar = { carId : 456 };
console.log(x.getId.apply(newCar, ['ID: ']));



// 2.
let person = {
  firstName :  "John",
  lastName  :  "Doe",
  id        :   5566,
  fullName  :  function() {
    return this.firstName + " " + this.lastName;    // this here belong to the owner of the object whuch un this code is the 'person'
    // return "This is "+ this.firstName + " " + this.lastName +"'s' ID number "+ this.id;
   }
};

// calling the object method
person.fullName();



// 3.- In a function, "this" refers to the global object - in this case it is the global varaible. thus in this context it is the variable outside it's block scope
let person = {
    firstName :  "Dennis",
    lastName  : "Yong",
    age       :  34,
    skills    :  ["personal", "interpersonal"],
    address   :  {
        street  : "104 Ikoyi str",
        city    : "Lagos",
        state   : "Lagos"
      },
    fullName  :  function() {
        return this.firstName + " " + this.lastName + " is from " + this.address.city + " city, he has a good " + this.skills[1] + " skill";
     }
 }

person.skills;
person.skills[0];
person.address.street;
person.fullName();  // 'Dennis Yong is from Lagos city, he has a good interpersonal skill'



// 4.
let car = {
    brand: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function() {
        return "The " + this.brand + " " + this.model + " cost " + this.getPrice();
    }
}

car.printDescription();     // 'The bmw 745li cost 5000'
car.year;
