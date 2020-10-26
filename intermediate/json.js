/*
================================================================================
                object/array to json and reverse
================================================================================
*/

/*
Some general use cases of JSON include:
- storing data
- Generating data structures from user input
- Transferring data from server to client, client to server and server to server
- Configuring and verifying data
*/

/*
JSON is text, and we can convert any JavaScript object into JSON, and exchange data to/from a web server.
We can also convert any JSON received from the server into JavaScript objects.
Strings are useful for transporting data from a client to a server through storing or passing information in a lightweight way.
json data are placed in quotes as strings but the only thing that won't be in quotes are numbers -
and the way we can convert an object to json element is by using the gobal JSON.stringify() method.
*/


// Object to json
// 1.
let car = {
    id    : 123,
    style : 'Covertible'
};

console.log( JSON.stringify(car));              // '{"id":123,"style":"Covertible"}'



// 2.
let obj = {
   name: "John",
   age: 30,
   city: "New York",
   occupation: "Software engineer"
};

let stringJson = JSON.stringify(obj);
console.log(stringJson);                       // '{"name":"John","age":30,"city":"New York","occupation":"Software engineer"}'
console.log(obj.occupation);                  // "Software engineer"



// Array to json
// 3.
let carIds = [
  { carId : 123 },
  { carId : 456 },
  { carId : 789 },
];

console.log(carIds[1].carId);           // 456
console.log(carIds[2]);                // { carId: 789 }
console.log(JSON.stringify(carIds));  // convert object to json



/*
JSON.parse() - When receiving data from a web server, the data is always a string.  Parse the data with JSON.parse(), and the data becomes a JavaScript object.
*/
let jsonIn = '[{"carId":123},{"carId":456},{"carId":789}]';
console.log(JSON.parse(jsonIn));                                // [ { carId: 123 }, { carId: 456 }, { carId: 789 } ]





/*
================================================================================
                         json
================================================================================
*/
/*
The values can be any one of 6 simple data types:
- strings
- numbers
- objects
- arrays
- Booleans (true or false
- null
Each of the data types that are passed in as values into JSON will maintain their own syntax, so strings will be in quotes, but numbers will not be.
*/
// 1.
{
 "first_name" : "Sammy",
 "last_name" : "Shark",
 "location" : "Ocean",
 "online" : true,
 "followers" : 987
}


// 2. Json can be an object
{
    "person": {
       "name"     : "Mike",
       "age"      : 23,
       "gpa"      : 3.5,
       "fav_num"  : 1e+10,
       "male"     : true,
       "flaws"    : null
   }
}
// Note: The keys such as "name", "age", "male" etc all of them are children of the "person" object.


// 3. Nested Objects
{
 "sammy" : {
   "username"  : "SammyShark",
   "location"  : "Indian Ocean",
   "online"    : true,
   "followers" : 987
 },
 "jesse" : {
   "username"  : "JesseOctopus",
   "location"  : "Pacific Ocean",
   "online"    : false,
   "followers" : 432
 },
 "drew" : {
   "username"  : "DrewSquid",
   "location"  : "Atlantic Ocean",
   "online"    : false,
   "followers" : 321
 },
 "jamie" : {
   "username"  : "JamieMantisShrimp",
   "location"  : "Pacific Ocean",
   "online"    : true,
   "followers" : 654
   }
};


// converting the json back to object
let app = '{"sammy":{"username":"SammyShark","location":"Indian Ocean","online":true,"followers":987},"jesse":{"username":"JesseOctopus","location":"Pacific Ocean","online":false,"followers":432},"drew":{"username":"DrewSquid","location":"Atlantic Ocean","online":false,"followers":321},"jamie":{"username":"JamieMantisShrimp","location":"Pacific Ocean","online":true,"followers":654}}';
console.log(JSON.parse(app));



// 4. Values in Json can be an array
// a.
{
"employees":[ "John", "Anna", "Peter" ]
}

// b.
{
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
}



// 5. Nested array
// a.
{
 "first_name" : "Sammy",
 "last_name" : "Shark",
 "location" : "Ocean",
  "websites" : [                                                    // array 1
   {
     "description" : "work",
     "URL" : "https://www.digitalocean.com/"
   },
   {
     "desciption" : "tutorials",
     "URL" : "https://www.digitalocean.com/community/tutorials"
   }
 ],
 "social_media" : [                                               // array 2
   {
     "description" : "twitter",
     "link" : "https://twitter.com/digitalocean"
   },
   {
     "description" : "facebook",
     "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
   },
   {
     "description" : "github",
     "link" : "https://github.com/digitalocean"
   }
 ]
}


// b.
{
  "users": [
      {"username" : "SammyShark", "location" : "Indian Ocean"},
      {"username" : "JesseOctopus", "location" : "Pacific Ocean"},
      {"username" : "DrewSquid", "location" : "Atlantic Ocean"},
      {"username" : "JamieMantisShrimp", "location" : "Pacific Ocean"}
   ]
}


// c.
{
   "person": {
       "name"     : "Mike",
       "age"      : 23,
       "gpa"      : 3.5,
       "fav_num"  : 1e+10,
       "male"     : true,
       "flaws"    : null,
       "hobbies"  : ["hiking", "movies", "riding bike"],
       "friends"  : [
         {
           "name" : "steph",
           "age"  : 25
         },
         {
           "name" : "Jennifer",
           "age"  : 23
         }
       ]
   }
}
