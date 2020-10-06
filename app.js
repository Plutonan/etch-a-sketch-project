const container = document.querySelector(".container");
const btnDarken = document.querySelector("#btn-darken");
const btnReset = document.querySelector("#btn-reset");
const btnColour = document.querySelector("#btn-colour");

function createGrid(size) {
	container.innerHTML = "";
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement("div");
		div.innerHTML = "";
		div.classList.add("square");
		container.appendChild(div);
	}
	container.style.backgroundColor = "white";
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mouseover", function () {
			this.style.backgroundColor = "hsl(0,0%,0%)";
		});
	});
}

function darken() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		let light = 100;
		square.addEventListener("mouseover", function () {
			if (light >= 0) {
				this.style.backgroundColor = `hsl(0,0%,${(light -= 10)}%)`;
			}
		});
	});
}

function colour() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mouseover", function () {
			this.style.backgroundColor = `rgb(${Math.floor(
				Math.random() * 255
			)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
				Math.random() * 255
			)})`;
		});
	});
}

window.addEventListener("onload", createGrid(16));
btnDarken.addEventListener("click", darken);
btnReset.addEventListener("click", () => {
	let size = prompt("Size of the grid? Can't be greater than 100.");
	while (size > 100) {
		size = prompt(
			"The grid can't be greater than 100! \nEnter a number below or equal 100!"
		);
	}
	createGrid(parseInt(size));
});
btnColour.addEventListener("click", colour);
