var a = 2;
foo();		// works because 'foo()' decarartion is "hoisted"


function foo() {
	a = 3;

	console.log(a); 	// 3

	var a; 				// declaration is hoisted to the top of 'foo()'

}


console.log(a); 		// 2

/*
Warning: - It's not common or a good idea to rely on variable hoisting to use a variable earier in its 
scope than its var declaration appears; it can be quite confusing. 
*/