var menuButton = document.getElementById("menu-button");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("form");
	hetFormulier.classList.toggle("showForm");
}

menuButton.addEventListener("click", doeFormNeerEnOp);
