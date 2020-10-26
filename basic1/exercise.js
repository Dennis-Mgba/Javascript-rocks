/*
Coding is like wrting a story, you can write great codes if you understand the syntax and structures
Computer reads code from top to bottom, just structure you code to make sense.
*/


// calculate simple interest
var rate = 25;
var prinVal = prompt("what is your principal value?");
var timeVal = prompt("what is the time scheduled?");

prinVal = Number(prinVal);
timeVal = Number(timeVal);

function calSimpleInterest(principal, time) {
	interest = principal * (1 + (rate * time));
	return interest;
}

total = calSimpleInterest(prinVal, timeVal);

console.log("$" + total);




// calculate tax-rate
var tax_rate = 0.08;

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * tax_rate);
	return amt;
}

var amount = prompt("Type in your amount:");
amount = Number(amount);
amount = calculateFinalPurchaseAmount(amount);
console.log("$" + amount.toFixed(2));	






// 1. - calulate to amount of phone and accessory
var phonePrice = 300;
var accessory = 50;

function totalPurchase () {
	total = phonePrice + accessory;
	console.log("$" + total);
}

totalPurchase ();



// 2. - keep buying phone while I still have money
var phoneCost = 1;
var bankBal = 10;

do {
	console.log("purchase" + phoneCost);
	phoneCost++;
}
while(phoneCost < bankBal);




// 3. 
