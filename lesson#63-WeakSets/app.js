let pet1 = { name: 'Sara', age: 7 }
let pet2 = { name: 'Anita', age: 3 }

const weakSauce = new WeakSet([pet1, pet2]);

console.log(weakSauce);

let pet3 = { name: 'Antonella', age: 8 };

weakSauce.add(pet3);

console.log(weakSauce);
pet1 = null;
console.log(weakSauce);


