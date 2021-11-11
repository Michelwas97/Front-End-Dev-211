var openButton = document.getElementById("open-button");

function openMenu(){
	let div = document.querySelector(".side-menu");
	div.classList.toggle("showSideNav");
}

openButton.addEventListener("click", openMenu);

var closeButton = document.getElementById("close-button");

function closeMenu(){
	let div = document.querySelector(".side-menu");
	div.classList.toggle("showSideNav");
}

closeButton.addEventListener("click", closeMenu);

// source: https://codepen.io/michel-wassing/pen/BaZeErj