var openButton = document.getElementById("open-button");

function openMenu(){
	let fieldset = document.querySelector("fieldset");
	fieldset.classList.toggle("showFieldset");
}

openButton.addEventListener("click", openMenu);

var closeButton = document.getElementById("close-button");

function closeMenu(){
	let fieldset = document.querySelector("fieldset");
	fieldset.classList.toggle("showFieldset");
}

closeButton.addEventListener("click", closeMenu);

// source: https://codepen.io/michel-wassing/pen/BaZeErj