const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	const suffix = this.dataset.sizing || ''; // data set is an object that will contain all the attributes associated with it.
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	); //this name will be replaced with 'this.value' which is the value of the slider
}

inputs.forEach((input) => input.addEventListener(`change`, handleUpdate));
inputs.forEach((input) => input.addEventListener(`mousemove`, handleUpdate));
