const clickCounts = new Map();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	clickCounts.set(button, 0);
	button.addEventListener('click', function() {
		const val = clickCounts.get(this);
		clickCounts.set(this, val + 1);
		console.log(clickCounts);
	})
});