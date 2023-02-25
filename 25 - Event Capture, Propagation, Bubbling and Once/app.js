const div = document.querySelectorAll('div');
const button = document.querySelector('button');
function logText(e) {
	console.log(this.classList.value);
	// e.stopPropagation(); //stop bubbling
	// console.log(this)
}

div.forEach((div) =>
	div.addEventListener('click', logText, {
		capture: true, //capture will run the function from top to bottom, by default it is false
		once: true, //
	})
);

// if you want to limit someone from clicking a button once. Mainly used for store checkout
button.addEventListener(
	'click',
	() => {
		console.log('Click!!!!');
	},
	{
		once: true,
	}
);
