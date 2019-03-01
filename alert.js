"use strict";

alert("Hello, this is an annoying alert!")

/*
let one = "One",
	two = "two",
	three = "three";
let message = one + two + three;
alert(message)
alert("Variable 'one' has type: " + typeof(one))
*/

let result = "";
result = prompt("This is an input dialog","default response");

alert("You responded: " + result);
let isstuff = confirm("Are you too legit to quit?");
if(isstuff){
	alert("You're the last of the legit.");
} else {alert("I saw the face of God and He was weeping.");
	   }

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

	let pass = prompt('Password?', '');

	if (pass == 'TheMaster') {
		alert( 'Welcome!' );
	} else if (pass == '' || pass == null) {
		alert( 'Canceled.' );
	} else {
		alert( 'Wrong password' );
	}

} else if (userName == '' || userName == null) {
	alert( 'Canceled' );
} else {
	alert( "I don't know you" );
}

let i = 3;

while(i > 0) {
	alert("i = " + i)
	i--;
	if(i == 0) alert("All done!");
}

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
showMessage("Betty", "Stay away from Veronica!");


[1, 2, "Hello", "Fuart",':-)'].forEach(alert);
