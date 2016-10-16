let dog1 = { name: 'Sara' };
let dog2 = { name: 'Anita' };

const strong = new  Map();
const weak = new WeakMap();

strong.set(dog1, 'Sara is the best');
weak.set(dog2, 'Anita is the worst');

console.log(strong);
console.log(weak);

dog1 = null;
dog2 = null;

count = 1;

setInterval(() => {
	console.log(`${count ++}s`);
	console.log(strong);
	console.log(weak);
}, 1000);