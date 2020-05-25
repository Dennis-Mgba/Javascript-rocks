/*
this identifier - The JavaScript 'this' keyword refers to the object it belongs to.
It has different values depending on where it is used:
*/


/* 
1. In a method, "this" refers to the owner object.
2. Alone, "this" refers to the global object.  In a browser window the Global object is [Window object]:
3. In a function, "this" refers to the global object - in this case it is the global varaible.
4. In a function, in strict mode, "this" is undefined.
5. In an event, "this" refers to the element that received the event.

6. Methods like call(), and apply() can refer this to any object.
*/


function foo() {
	console.log(this.bar);
}
var bar = "global";


var obj1 = {
	bar: "This right here 1",
	foo: foo
}


var obj2 = {		  // Remember	methods like call(), and apply() can refer this to any object.
	bar: "This right here 2",
}



foo();				// global
obj1.foo();			// This right here 1
foo.call( obj2 )	// This right here 2
