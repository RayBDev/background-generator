var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.querySelector("#gradient");
var h3 = document.querySelector("h3");
var randomButton = document.querySelector("#randomcolor");

function randomColor(){
	var randomNumber1 = Math.floor((Math.random() * 999999) + 000001);
	var randomNumber2 = Math.floor((Math.random() * 999999) + 000001);
	gradient.style.background = "linear-gradient(to right," + "#" + randomNumber1 + ", " + "#" + randomNumber2 + ")";
	h3.textContent = gradient.style.background + ";";
}

function grabColors(){
	gradient.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	h3.innerHTML = "background: linear-gradient(to right," + color1.value + "," + color2.value + ");";
}

grabColors();
color1.addEventListener("input", grabColors);
color2.addEventListener("input", grabColors);
randomButton.addEventListener("click", randomColor);
