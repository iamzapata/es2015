const people = new Set();

people.add('Andres');
people.add('Nataly');
people.add('Ruby');
people.add('Daniela');

people.add('Cecilia');
people.delete('Ruby');

console.log(people);

for(const person of people) {
	console.log(person);
}

const students = new Set(['Felipe', 'Nata', 'Laura']);

console.log(students);

const pets = ['Sara', 'Joaquin', 'Anita'];

petSet = new Set(pets);

console.log(petSet);

console.log(petSet.has('Antonella'));