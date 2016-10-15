'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var age = 100;

var people = ['Andres', 'Nata'];

var fullNames = people.map(function (name) {
  return name + ' Zapata';
});

var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };
var x = _x$y$a$b.x;
var y = _x$y$a$b.y;

var z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);
