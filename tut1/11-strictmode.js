/*
ES6 added a "strict mode" to the langauage. which tightens the rules for certain behaviors
This restriction are seen as keeping the code to a safer and more appropraite set of guideline
Adhering to strict mode makes your code generally more optimizable by the engine

You can opt in to strict mode for an individual function or an entire file
*/

function foo() {
	"use strict";
	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// any code outside the function code block above is not strict mode



// compare that to when you set strict mode for the whole file

"use strict"

function foo() {
	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// also any code outside the function code block above is still strict mode





/*
One key difference with strict mode is that it disallow the implicit auto-gobal variable declaration
from omitting the var
*/

function foo() {
	"use strict"
	a = 1;		// 'var' missing, ReferenceError
}

foo();


/*
If you turn on strict mode in your code amd you get errors, or code starts behaving
buggy, your temptation might be to avoid strict. But that instinct would be a bad idea.

If strict mode causes issues in your program almost certainly it's a sign that
you have things in your program that you should fix.
*/
