const brunch = new Set();

brunch.add('Andres');
brunch.add('Nataly');
brunch.add('Daniela');

const line = brunch.values();

console.log(line.next().value);
console.log(line.next().value);

console.log(brunch);
console.log(line);

brunch.add('Ruby');
console.log(brunch);
brunch.add('Antonella');
console.log(line);
console.log(brunch);
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
console.log(brunch);
console.log(line);