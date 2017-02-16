'use strict';

//1
var one = 'Hello';
var two = 'World';
var three = one + ' ' + two;

//2
var multiply = function multiply(first) {
  var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return first * second;
};

//3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];
