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
/* **************************************************
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
*/ //*********************************************

function showMessage(from, text = "Default text") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
showMessage("Betty", "Stay away from Veronica!");


// [1, 2, "Hello", "Fuart",':-)'].forEach(alert);

let guy = {
    name: "John",
    age:  30, // can end with a trailing comma
    "likes birds": true,
    }; 

alert(guy.name);
alert(guy.age);
alert("Now some other way to access values");
alert(guy["age"]);
alert(guy["likes birds"]);

let fruit = prompt("Which fruit to add to bag?", "cherry");
let bag = {
	[fruit]: 5,
};

alert( `${fruit}:${bag[fruit]}`);

fruit = prompt("Which fruit to add to bag?", "lemon");
bag = {
	[fruit]:7,
};

alert( `${fruit}:${bag[fruit]}`);

fruit = prompt("Which fruit to add to bag?", "pear");
bag = {
	[fruit]:9,
};

alert( `${fruit}:${bag[fruit]}`);

// to see them all so far
let bug = {
	antenna: 2,
	legs: 6,
	stingers: 1,
	eyes: 8,
	wings: 4,
};

var k;
for(k in bug){
	alert(`The key is: ${k}: ${bug[k]}`);
}
