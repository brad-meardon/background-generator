var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setDefaultGradient(){
	color1.value = "#FF0000";
	color2.value = "#FFFF00";
	setGradient();
}

function randomColour(){
	var colour = "#" + Math.floor(Math.random()*16777215).toString(16);
	return colour;
}

function randomColourSet(){
	color1.value = randomColour();
	color2.value = randomColour();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColourSet);

document.onload = setDefaultGradient();