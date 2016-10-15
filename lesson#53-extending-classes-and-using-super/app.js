class Animal {

	constructor(name) {
		this.name = name;
		this.thirst = 100;
		this.belly = [];
	}

	drink() {
		this.thirst -= 10;
		return this.thirst;
	}

	eat(food) {
		this.belly = [...this.belly, food];	
		return this.belly;
	}
}

class Dog extends Animal {

	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	bark() {
		return `🐕🐕🐕 Bark Bark! My name is ${this.name} and I'm a dog`;
	}
}

const rhino = new Animal('Rhiney');
const sara = new Dog('Sara', 'Pastor Fila');