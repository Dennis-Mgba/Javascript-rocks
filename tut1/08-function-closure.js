/*
Think of function closure as a way to "remember" and continue to access a function's scope
even once the function has finished running
*/

function makeAdder(x) {			// parameter 'x' is an inner varaible to 'makeAdder'

	function add(y) {			// the inner function 'add()' uses 'x', so it has a closure over it
		return y + x;
	};

	return add;
}

var plusOne = makeAdder(1);			// pass in 1 as value of 'x'

// hence call
plusOne(3);							// 4
plusOne(41);						// 10


// 2.
var plusTen = makeAdder(10);

plusTen(13);						// 23




/*
The refrence to the inner add() function that gets returned with each call to the
outer makeAdder() is able to remember whatever value passed for 'x' in to makeAdder()
*/






// Modules

/*
The most common usage of closure in javascript is the module patter
Module let you define private implementaton details that are hidden from the outside world.
as well as a public API that is accessible from the outside.
*/


function user() {
	var username, password;

	function doLogin(user, pw) {
		username = user;
		password = pw;

		// do more login command
	}

	var publicApi = {
		login: doLogin
	};

	return publicApi;
}


// create a 'user' module instance

var fred = user();

fred.login("fred", "12Strong!");



/*
The user() function serves as an outer scope that holds the varaibles username and password
as well as the inner doLogin() function, these are all private inner details of this user module
that cannot be accessed from the outside world
*/
