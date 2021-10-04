var menuButton = document.getElementById("menu-button");

function openMenuAndClose(){
	let form = document.querySelector("form");
	form.classList.toggle("showForm");
}

menuButton.addEventListener("click", openMenuAndClose);

// source: https://codepen.io/michel-wassing/pen/BaZeErj