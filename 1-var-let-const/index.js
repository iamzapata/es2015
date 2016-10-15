

/**
 * Var
 * 
 * - Function scoped, if not defiend within a funciton, scope leaks to outside.
 * - Can be redefined
 */
var width = 100;

console.log('var section');

// Redefenition
function a() {
	var width = 200;
	console.log(width);
}

// Scope leakage.
if(true) {
	var width = 1000;
	console.log(width);
}

console.log('end var section');

/**
 * Let
 * 
 * - Block scoped
 * - Can be updated
 * - Cannot be redifined
 */
let height = 200;

console.log('let section');

// Block scope
if(true) {
	let height = 300;
	console.log(height);
}

// Can be updated.
height = 150;
console.log(height);

console.log('end let section');

/**
 * Const
 * 
 * - Block scoped
 * - Cannot be updated
 */
const key = 'abc123';

if(true) {
	let key = 'ABC';
	console.log(key);
}

//key = 'a'; -- cannote be updated.

// let key = 'you'; -- Cannot be redeclared.



















