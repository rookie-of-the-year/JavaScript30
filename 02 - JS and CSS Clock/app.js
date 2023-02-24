const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('hour-hand');

function setDate() {
	const now = new Date(); // shows the computers data

	//seconds hand
	const seconds = now.getSeconds(); //library that gets and updates the seconds
	const secondsDegrees = (seconds / 60) * 360 + 90; // makes the seconds hand go around in the circle
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	//minute hand
	const minute = now.getMinutes(); // library that gets and updates the minutes
	const minuteDegrees = (minute / 60) * 360 + 90; // makes the minutes hand go around the circle
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	//hour hand
	const hour = now.getHours(); //library that get and updates the current hour
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	console.log(seconds);
}

setInterval(setDate, 1000);
