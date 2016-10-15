const map = {};

map.longitiude = 79.3423;
map.longitud = 79.3423;
map.long = 79.3423;
map.lon = 79.3423;
map.lng = 79.3423;

const person = { id: 1088276692, name: 'Andres'};
person.ID = 123;
person.iD = 123;
person.id = 123;

const safeHanlder = {
	set(target, name, value) {
		const likeKey = Object.keys(target).find(key => key.toLowerCase() === name.toLowerCase());

		if(!(name in target) && likeKey) {
			throw new Error(`Oops! Looks like we already have a(n) ${name} property but with case of ${likeKey}`);
		}
	}
}

const safety = new Proxy({ id: 1088276692, name: 'Andres'}, safeHanlder);

safety.ID = 200;