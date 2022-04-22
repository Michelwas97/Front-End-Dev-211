const openButton = document.getElementById(`open-button`);

const openMenu = () => {
	let fieldset = document.querySelector(`fieldset`);
	fieldset.classList.toggle(`showFieldset`);
}

openButton.addEventListener(`click`, openMenu);

const closeButton = document.getElementById(`close-button`);

const closeMenu = () => {
	let fieldset = document.querySelector(`fieldset`);
	fieldset.classList.toggle(`showFieldset`);
}

closeButton.addEventListener(`click`, closeMenu);

// source: https://codepen.io/michel-wassing/pen/BaZeErj