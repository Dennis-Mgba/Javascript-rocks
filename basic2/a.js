// Try these out on your browser console
// 1.
var name = prompt('what is your first name');
var lastName = prompt('what is your last name');
alert(name + " " + lastName);


// 2.
var num1 = prompt('Enter 1st num');
var num2 = prompt('Enter a 2nd num');
var sum = Number(num1) + Number(num2);
alert("The sum is " + sum);


// 3.
var age = prompt('Enter you age here:');
if (Number(age) >= 18) {
    alert("You can drive");
} else {
    alert("Sorry you can't drive");
}


// 4.
var age = Number(prompt('Enter you age here:'));
if (age < 16) {
    alert("You are not allowed to drive");
} else if (age == 16) {
    alert("You can drive FINALLY!");
} else if (age > 16){
    alert("You have probably been driving already");
}
