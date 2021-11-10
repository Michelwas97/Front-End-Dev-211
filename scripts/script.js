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

// TODO: make double column and single card view

var graphButton = document.getElementById("graph-button");

function graphView(){
	let div = document.querySelector(".graph-view");
	div.classList.toggle("showgraph");
}

graphButton.addEventListener("click", graphView);

var columnButton = document.getElementById("column-button");

function columnView(){
	let div = document.querySelector(".column-view");
	div.classList.toggle("showcolumn");
}

columnButton.addEventListener("click", columnView);