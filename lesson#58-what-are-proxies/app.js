const person = { name: 'Andres', age: 26 };

const personProxy = new Proxy(person, {
	get(target, name) {
		console.log('someone is askig for', target, name);
		return 'Nein! 🇩🇪🇩🇪🇩🇪'
	}
});

personProxy.name = 'Andres';