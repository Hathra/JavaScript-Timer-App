const durationInput = document.querySelector('#durationInput');
const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');
const circleElement = document.querySelector('circle');

const perimeter = circleElement.getAttribute('r') * 2 * Math.PI;
circleElement.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circleElement.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('OnComplete callback!');
	}
});
