
function toCelsius () {
var fahr = document.getElementById('temp').value;
var celc  =(fahr-32)*5/9;
	if (celc >32) {
document.getElementById("p").innerHTML=(celc+"°C").fontcolor("red");
	} else if (celc<0) {
document.getElementById("p").innerHTML=(celc+"°C").fontcolor("blue");
	}
	else {
		document.getElementById("p").innerHTML=(celc+"°C").fontcolor("green");
	}
}

function toFahrenheit () {
var celc= document.getElementById('temp').value;
var fahr  = (celc*9/5)+32;
	if (fahr >90) {
document.getElementById('p').innerHTML=(fahr+"°F").fontcolor("red");
}
else if (fahr <32) {
	document.getElementById('p').innerHTML=(fahr+"°F").fontcolor("blue");
}
else {
	document.getElementById('p').innerHTML=(fahr+"°F").fontcolor("green");
}
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var button2 = document.getElementById("clear")
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	var a = document.getElementById("celc");
	var b = document.getElementById("fahr");
	if (document.getElementById('temp').value==="") {
		alert("Put in a temperature or I will assume you put in 0!");
	}
  if (a.checked === true) {
  	toCelsius();
  }
  else if (b.checked===true) {
  	toFahrenheit();
  }
  else {
  	alert("Select either Celcius or Fahrenheit!");
  }
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
button2.addEventListener("click", clears);

function clears () {
	//document.getElementById('p').innerHTML=""; //could have used this
	//document.getElementById('temp').value=""; //but since radio buttons cant be unselected, reload pls
	location.reload();

}
/*
document.getElementById('temp').addEventListener('keyup', function (event) {
  //check to see if the enter key was pressed
  if (event.which === 13) {
    //if so, run the addTask function
    determineConverter();
  }
});*/

/*
document.getElementById("temp")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        determineConverter();
    }
});*/
function enterpressalert(e, input){
var code = (e.keyCode ? e.keyCode : e.which);
e.preventDefault();
if(code == 13) { //Enter keycode
 determineConverter();
}
}