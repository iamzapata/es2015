function* listPeople() {
	yield 'Andres';
	yield 'Nataly';
	yield 'Antonella';
}
const people = listPeople();

function* listNumber() {
	let i = 0;
	yield i;
	i++;
	yield i;
	i++;
	yield i;
}
const numbers = listNumber();

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879 },
	{ first: 'Isaac', last: 'Newton', year: 1643 },
	{ first: 'Galileo', last: 'Galilei', year: 1564 },
	{ first: 'Marie', last: 'Curie', year: 1867 },
	{ first: 'Johannes', last: 'Kepler', year: 1571 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473 },
	{ first: 'Max', last: 'Planck', year: 1858 }
];

function* loop(array) {

	for(const item of array) {
		yield item;
	}
}

inventorGenerator = loop(inventors);